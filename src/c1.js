import TinymceaiConfig from './config/tinymceai';
import AdvtemplateConfig from './config/advtemplate';
import AccordionConfig from './config/accordion';
import AiConfigPlugin from './config/ai';
import MergetagsConfig from './config/mergetags';
import MentionsConfig from './config/mentions';
import TinyCommentsConfig from './config/tinycomments';
import AdvlistConfig from './config/advlist';
import SuggestedEditConfig from './config/suggestededits';
import CodeSampleConfig from './config/codesample';
import ExportWordConfig from './config/exportword';
import InsertDatetimeConfig from './config/insertdatetime';
import AnchorConfig from './config/anchor';
import AutolinkConfig from './config/autolink';
import AutosaveConfig from './config/autosave';
import CharmapConfig from './config/charmap';
import CodeConfig from './config/code';
import EditimageConfig from './config/editimage';
import DirectionalityConfig from './config/directionality';
import EmoticonsConfig from './config/emoticons';
import FullscreenConfig from './config/fullscreen';
import HelpConfig from './config/help';
import ImageConfig from './config/image';
import ImportcssConfig from './config/importcss';
import LinkConfig from './config/link';
import ListsConfig from './config/lists';
import MediaConfig from './config/media';
import NonbreakingConfig from './config/nonbreaking';
import PagebreakConfig from './config/pagebreak';
import PreviewConfig from './config/preview';
import QuickbarsConfig from './config/quickbars';
import SaveConfig from './config/save';
import SearchreplaceConfig from './config/searchreplace';
import TableConfig from './config/table';
import VisualblocksConfig from './config/visualblocks';
import VisualcharsConfig from './config/visualchars';
import WordcountConfig from './config/wordcount';
import A11ycheckerConfig from './config/a11ychecker';
import AdvcodeConfig from './config/advcode';
import AdvtableConfig from './config/advtable';
import AutocorrectConfig from './config/autocorrect';
import CasechangeConfig from './config/casechange';
import ChecklistConfig from './config/checklist';
import EditimageConfig2 from './config/editimage2';
import ExportpdfConfig from './config/exportpdf';
import FootnotesConfig from './config/footnotes';
import FormatpainterConfig from './config/formatpainter';
import ImportwordConfig from './config/importword';
import InlinecssConfig from './config/inlinecss';
import LinkcheckerConfig from './config/linkchecker';
import MarkdownConfig from './config/markdown';
import MathConfig from './config/math';
import MediaembedConfig from './config/mediaembed';
import PageembedConfig from './config/pageembed';
import PermanentpenConfig from './config/permanentpen';
import PowerpasteConfig from './config/powerpaste';
import RevisionhistoryConfig from './config/revisionhistory';
import TableofcontentsConfig from './config/tableofcontents';
import TinymcespellcheckerConfig from './config/tinymcespellchecker';
import TypographyConfig from './config/typography';
import UploadcareConfig from './config/uploadcare';


  const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

  const user_id = 'james-wilson';
const basicConfig = {
  height: 600,
  mobile: {
    theme: "silver",
    contextmenu: "link image table preview",
  },
  pad_empty_with_br: true,
  help_accessibility: true,
  // TODO: Target for tinymce 8
  user_id,
  fetch_users: (userIds) =>
    Promise.all(userIds.map((userId) => fetch(`${API_URL}/${userId}`)
      .then((response) => response.json())
      .catch(() => ({ id: userId })))),
  
};

  const pluginsConfig = [
    AccordionConfig,
    CodeSampleConfig,
    AdvlistConfig,
    AnchorConfig,
    AutolinkConfig,
    AutosaveConfig,
    CharmapConfig,
    CodeConfig,
    EditimageConfig,
    DirectionalityConfig,
    EmoticonsConfig,
    FullscreenConfig,
    HelpConfig,
    ImageConfig,
    ImportcssConfig,
    InsertDatetimeConfig,
    LinkConfig,
    ListsConfig,
    MediaConfig,
    NonbreakingConfig,
    PagebreakConfig,
    PreviewConfig,
    QuickbarsConfig,
    SaveConfig,
    SearchreplaceConfig,
    TableConfig,
    VisualblocksConfig,
    VisualcharsConfig,
    WordcountConfig,
    A11ycheckerConfig,
    AdvcodeConfig,
    AdvtableConfig,
    AdvtemplateConfig,
    AiConfigPlugin,
    AutocorrectConfig,
    CasechangeConfig,
    ChecklistConfig,
    EditimageConfig2,
    ExportpdfConfig,
    ExportWordConfig,
    FootnotesConfig,
    FormatpainterConfig,
    ImportwordConfig,
    InlinecssConfig,
    LinkcheckerConfig,
    MarkdownConfig,
    MathConfig,
    MediaembedConfig,
    MentionsConfig,
    MergetagsConfig,
    PageembedConfig,
    PermanentpenConfig,
    PowerpasteConfig,
    RevisionhistoryConfig,
    SuggestedEditConfig,
    TableofcontentsConfig,
    TinyCommentsConfig,
    TinymcespellcheckerConfig,
    TypographyConfig,
    UploadcareConfig,
    TinymceaiConfig,
  ];


	const basicToolbar = "bold italic underline strikethrough subscript superscript | math uploadcare | exportpdf exportword importword | aidialog aishortcuts | accordion addtemplate inserttemplate| fontfamily fontsize fontsizeinput | numlist bullist checklist mergetags footnotes footnotesupdate| typography permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 | wordcount searchreplace | undo redo | revisionhistory save cancel restoredraft | fullscreen print preview code help | insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars | suggestededits";

  const finalToolbarConfig = basicToolbar + ' | ' + pluginsConfig.map((plugin) => plugin?.toolbar).filter(Boolean).join(' | ');

  const generateConfig = ({ excludePlugins = [], overrides = {} }) => {
    const plugins = pluginsConfig.map((p) => p.name).filter((name) => !excludePlugins.includes(name));
    const extractedPluginsConfig = pluginsConfig.reduce((acc, cur) => ({ ...acc, ...cur.config }), {});
    const finalConfig = {
      ...basicConfig,
      ...extractedPluginsConfig,
      ...overrides
    };

    return {
      ...finalConfig,
      plugins: plugins,
      toolbar: finalToolbarConfig,
      height: 500
    };
  }

  
	export default {
    generateConfig
	};
