import { useEffect } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
function Opener() {
  useEffect(() => {
    // Teams 컨텍스트 가져오기
    microsoftTeams.app.initialize();
    microsoftTeams.app.notifySuccess();
  }, []);

  return <></>;
}

export default Opener;
