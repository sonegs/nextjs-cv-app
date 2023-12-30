import { Stack, styled } from "@mui/material";
import ProfilePicture from "./profilePicture";
import SidebarList from "./sidebarList";

const StyledSidebarContainer = styled(Stack)({
    width: 250,
    display: "flex",
    alignItems: "center",
    flexAlign: "column",
})

const SidebarContainer: React.FC = () => {
    return (
        <StyledSidebarContainer>
            <ProfilePicture />
            <SidebarList />
        </StyledSidebarContainer>
      )
}

export default SidebarContainer;