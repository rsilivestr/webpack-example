import FSD2ndTaskDatepicker from 'CommonBlocks/date-dropdown/FSD2ndTaskDatepicker';
import FSD2ndTaskRange from 'CommonBlocks/range/FSD2ndTaskRange';
import FSD2ndTaskMaskedDate from 'CommonBlocks/masked-date/FSD2ndTaskMaskedDate';
import FSD2ndTaskDropdown from 'CommonBlocks/dropdown/FSD2ndTaskDropdown';
import FSD2ndTaskSpoiler from 'CommonBlocks/spoiler/FSD2ndTaskSpoiler';
import FSD2ndClassLikeCounter from 'CommonBlocks/like-counter/FSD2ndClassLikeCounter';
import FSD2ndTaskRating from 'CommonBlocks/star-rating/FSD2ndTaskRating';

new FSD2ndTaskDatepicker('.js-datepicker-double');

new FSD2ndTaskDatepicker('.js-datepicker-range', { range: true, size: 'm' });

new FSD2ndTaskRange('.js-rangepicker');

new FSD2ndTaskMaskedDate('.js-masked-date');

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-1'));

new FSD2ndTaskDropdown(document.querySelector('.js-dropdown-2'), {
  type: 'multi',
});

Array.from(document.querySelectorAll('.js-spoiler')).forEach(
  (spoiler) => new FSD2ndTaskSpoiler(spoiler)
);

Array.from(document.querySelectorAll('.js-like')).forEach(
  (like) => new FSD2ndClassLikeCounter(like)
);

new FSD2ndTaskRating(document.querySelector('.js-rating'));
