//import {InspectorControls, PanelColorSettings, getColorClassName, getColorObjectByColorValue} from "@wordpress/block-editor";
//import {ColorPalette, ColorPicker, PanelBody, PanelRow, SelectControl} from "@wordpress/components";
import {InspectorControls, ColorPalette} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl, ColorPicker, ComboboxControl} from "@wordpress/components";
import {select} from '@wordpress/data';
import {useState} from '@wordpress/element';
export class BlockSettings extends React.Component {
	render() {
		let {attributes, setAttributes} = this.props
		const settings = select('core/editor').getEditorSettings();
		const options = [
			{
				value: 'small',
				label: 'Small',
			},
			{
				value: 'normal',
				label: 'Normal',
			},
			{
				value: 'large',
				label: 'Large',
			},
			{
				value: 'huge',
				label: 'Huge',
			},
		]
		const [ fontSize, setFontSize ] = useState();
		const [ filteredOptions, setFilteredOptions ] = useState( options );
		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						<SelectControl
							className="Color"
							label="Quote Background Color"
							value={attributes.backgroundColorClass}
							onChange={backgroundColorClass => setAttributes({backgroundColorClass})}
							options={[
								{label: 'default', value: ''},
								{label: 'Primary Blue', value: 'bg-primary-blue'},
								{label: 'Primary Red', value: 'bg-primary-red'},
							]}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={[
								{name: 'Very Light Grey', color: '#ededed'},
								{name: 'Light Grey', color: '#a8a8a8'},
							]}
							label="Background Color"
							value={attributes.backgroundColor}
							onChange={backgroundColor => setAttributes({backgroundColor})}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							onChangeComplete={colorObj => {{setAttributes({textColor: colorObj.hex})}}}
							disableAlpha
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Text Layout">
					<ComboboxControl
						label="Font Size"
						value={fontSize}
						onChange={setFontSize}
						options={filteredOptions}
						onFilterValueChange={(inputValue) =>
						setFilteredOptions(
							options.filter((option)=>
								option.label
									.toLowerCase()
									.startsWith(inputValue.toLowerCase())
							)
						)
					}
					/>
				</PanelBody>
			</InspectorControls>
		)
	}
}
