import 'moment/locale/ar';
import 'moment/locale/bg';
import 'moment/locale/ca';
import 'moment/locale/de';
import 'moment/locale/el';
import 'moment/locale/en-gb';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/he';
import 'moment/locale/hu';
import 'moment/locale/id';
import 'moment/locale/it';
import 'moment/locale/ja';
import 'moment/locale/ko';
import 'moment/locale/lt';
import 'moment/locale/ms';
import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt-br';
import 'moment/locale/ru';
import 'moment/locale/sv';
import 'moment/locale/tr';
import 'moment/locale/zh-cn';
import 'moment/locale/uk';
import 'moment/locale/zh-tw';
import 'moment/locale/fa';

import moment from 'moment-timezone';
import latestTimezoneData from 'moment-timezone/data/packed/latest.json';

moment.tz.load(latestTimezoneData);
moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('ss', 0);
