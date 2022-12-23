import React from "react";
import { Menu, Item, Separator } from "react-contexify";
import star from "../../assets/images/contextMenu/star.png";
import contact_me from "../../assets/images/contextMenu/contact.png";
import refresh from "../../assets/images/contextMenu/refresh.png";
import original_code from "../../assets/images/contextMenu/code.png";
import credits from "../../assets/images/contextMenu/credit.png";
import github_icon from "../../assets/images/contextMenu/images.ico";
import { SCREENS } from "../../utils/documents/enums";
import Credits from "../base/credits";
import { useBoolean } from "@fluentui/react-hooks";

const MENU_ID = "context-menu";

function DesktopContextMenu(props) {
	const handleRefresh = ({ event, props }) =>
		console.log("Super Refreshed !!");
	const navigate = (link) => {
		window.open(link, "_blank");
	};

	const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
		useBoolean(false);
	return (
		<div>
			<Menu id={MENU_ID}>
				<Item
					onClick={() =>
						navigate(
							"https://github.com/aenoshrajora/portfolio/"
						)
					}
				>
					<img
						src={star}
						width="30"
						height="30"
						className="uk-margin-small-right"
						alt="Star"
					/>
					Star This Project
				</Item>
				<Separator />
				{props.location === SCREENS.DESKTOP && (
					<Item onClick={handleRefresh}>
						<img
							src={refresh}
							width="30"
							height="30"
							className="uk-margin-small-right"
							alt="Refresh"
						/>
						Refresh
					</Item>
				)}
				{props.location === SCREENS.DESKTOP && <Separator />}
				<Item
					onClick={() =>
						navigate(
							"https://github.com/aenoshrajora/portfolio"
						)
					}
				>
					<img
						src={original_code}
						width="30"
						height="30"
						className="uk-margin-small-right"
						alt="Code"
					/>
					View Source Code
				</Item>
				<Separator />
				<Item
					onClick={() =>
						navigate("https://github.com/aenoshrajora")
					}
				>
					<img
						src={github_icon}
						width="30"
						height="30"
						className="uk-margin-small-right"
						alt="Github"
					/>
					Github Profile
				</Item>
				<Separator />
				<Item
					onClick={() =>
						navigate("mailto:aenoshrajora79@gmail.com")
					}
				>
					<img
						src={contact_me}
						width="30"
						height="30"
						className="uk-margin-small-right"
						alt="mail"
					/>
					Contact Me
				</Item>
				<Separator />
				<Item onClick={showModal}>
					<img
						src={credits}
						width="30"
						height="30"
						className="uk-margin-small-right"
						alt="Credits"
					/>
					Credits
				</Item>
				<Separator />
			</Menu>
			<Credits isModalOpen={isModalOpen} hideModal={hideModal} />
		</div>
	);
}

export default DesktopContextMenu;
