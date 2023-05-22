import express from 'express';

import { createTweet , getTweet} from '../../controllers/tweet_controller.js';
import { toggleLike } from '../../controllers/like_controller.js';
import { createComment } from '../../controllers/comment_controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments', createComment);

export default router;