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
import { useBlockProps, RichText } from '@wordpress/block-editor';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const {date} = attributes;
	let divStyle = {
		color: attributes.textColorClass ? '' : attributes.textColor,
		backgroundColor: attributes.backgroundColor,
	}
	let divClasses = [
		attributes.backgroundColorClass,
		attributes.textColorClass
	]
	console.log(divClasses);
	return (
		<div {...useBlockProps.save({className: attributes.backgroundColorClass, style: divStyle})}>
			<div className="quote-profile">
				<div className="photo">
					<img src={attributes.imgUrl} alt={"photo of _____"} />
				</div>
				<p className="datetime">{date}</p>
			</div>
			<RichText.Content style={{fontSize: attributes.fontSize}}
				tagName="div"
				className="quote"
				value={attributes.quote}
			/>
		</div>
	);
}
