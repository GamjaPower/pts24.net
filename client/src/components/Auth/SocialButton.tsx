import React, { useEffect } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
const SocialButton = ({ id, enabled, serverDomain, oauthPath, Icon, label }) => {
  // useEffect(() => {
  //   microsoftTeams.app.initialize();

  //   // Teams 컨텍스트 가져오기
  //   microsoftTeams.getContext((context) => {
  //     console.log('Teams 컨텍스트:', context);
  //   });
  // }, []);

  if (!enabled) {
    return null;
  }

  const handleClick = () => {
    // e.preventDefault();
    const width = 600;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    // window.open(
    //   `${serverDomain}/oauth/${oauthPath}`,
    //   'popup',
    //   `width=${width},height=${height},left=${left},top=${top}`,
    // );
    // microsoftTeams.authentication.authenticate({
    //   url: `${serverDomain}/oauth/${oauthPath}`,
    //   width,
    //   height,
    //   successCallback: (result) => {
    //     console.log('인증 성공:', result);
    //   },
    //   failureCallback: (reason) => {
    //     console.log('인증 실패:', reason);
    //   },
    // });
    const taskInfo = {
      title: 'title',
      height: height,
      width: width,
      url: `${serverDomain}/oauth/${oauthPath}`,
    };
    // microsoftTeams.authentication.authenticate({
    //   url: taskInfo.url,
    //   width: 600,
    //   height: 400,
    //   successCallback: (result) => {
    //     console.log('작업 완료:', result);
    //     window.location.reload();
    //   },
    //   failureCallback: (reason) => {
    //     console.error('오류 발생:', reason);
    //   },
    // });
    microsoftTeams.app.initialize().then(() => {
      microsoftTeams.authentication.authenticate(taskInfo).then((result) => {
        console.log('작업 완료:', result);
        window.location.reload();
      });
    });
  };

  return (
    <div className="mt-2 flex gap-x-2">
      <button
        aria-label={`${label}`}
        className="flex w-full items-center space-x-3 rounded-2xl border border-border-light bg-surface-primary px-5 py-3 text-text-primary transition-colors duration-200 hover:bg-surface-tertiary"
        // href={`${serverDomain}/oauth/${oauthPath}`}
        onClick={handleClick}
        data-testid={id}
      >
        <Icon />
        <p>{label}</p>
      </button>
    </div>
  );
};

export default SocialButton;
