import { Input, theme } from 'antd';
import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

const ActionsRender = (props: { layout?: 'side' | 'top' | 'mix' }) => {
  const needInput = () => {
    if (props.layout !== 'side' && document.body.clientWidth > 1400) {
      return <SearchInput />;
    }

    return null;
  };
  return (
    <>
      {needInput()}
      <InfoCircleFilled key="InfoCircleFilled" />
      <QuestionCircleFilled key="QuestionCircleFilled" />
      <GithubFilled key="GithubFilled" />
    </>
  );
};

export default ActionsRender;
