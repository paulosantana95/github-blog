import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styled";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/paulosantana95.png" />
      <ProfileDetails>
        <header>
          <h1>Paulo Santana</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>paulosantana95</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Fortics</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>123 seguidores</span>
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
