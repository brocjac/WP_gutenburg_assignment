//import {InspectorControls, PanelColorSettings, getColorClassName, getColorObjectByColorValue} from "@wordpress/block-editor";
//import {ColorPalette, ColorPicker, PanelBody, PanelRow, SelectControl} from "@wordpress/components";
import {InspectorControls, ColorPalette} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl, ColorPicker} from "@wordpress/components";
import {select} from '@wordpress/data';
export class BlockSettings extends React.Component {
	render() {
		let {attributes, setAttributes} = this.props
		const settings = select('core/editor').getEditorSettings();
		const options = [
			{
				value: '16px',
				label: 'Small',
			},
			{
				value: '18x',
				label: 'Normal',
			},
			{
				value: '20px',
				label: 'Large',
			},
			{
				value: '24px',
				label: 'Huge',
			},
		]
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
					<SelectControl
						label="Font Size"
						value={attributes.fontSize}
						onChange={fontSize => setAttributes({fontSize})}
						options={options}
					/>
				</PanelBody>
			</InspectorControls>
		)
	}
}
