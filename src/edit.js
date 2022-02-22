/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { DateTimePicker } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BlockSettings} from "./BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const { date } = attributes;
	const onUpdateDate = ( date ) => {
		var newDateTime = moment(date).format( 'YYYY-MM-DD HH:mm' );
		setAttributes( { date: newDateTime } );
	};
	return (
		<p {...useBlockProps()}>
			<BlockSettings
				attributes={attributes} setAttributes={setAttributes}
			/>
			<div className="assets">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={(img) => {
								setAttributes({imgUrl: img.sizes.thumbnail.url})
							}}
							render={(({open}) => <img src={attributes.imgUrl} onClick={open}/>)}
						/>
					</MediaUploadCheck>
				</div>
				<DateTimePicker
					currentDate={date}
					onChange={(val) => onUpdateDate(val)}
					is12Hours={true}
				/>
			</div>
			<RichText
				tagName="div"
				placeholder="Lorem ipsum..."
				allowFormats={['core/bold', 'core/italic']}
				value={attributes.quote}
				onChange={(quote) => setAttributes({quote})}
			/>
		</p>
	);
}
