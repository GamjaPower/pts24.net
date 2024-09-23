import { useEffect } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
function Opener() {
  // useEffect(() => {
  //   // Teams 컨텍스트 가져오기
  //   microsoftTeams.app.initialize();
  //   microsoftTeams.app.notifySuccess();
  // }, []);
  useEffect(() => {
    // window.opener.location.reload();
    microsoftTeams.app.initialize().then(() => {
      microsoftTeams.authentication.notifySuccess();
      window.close();
    });
  }, []);

  return <></>;
}

export default Opener;
