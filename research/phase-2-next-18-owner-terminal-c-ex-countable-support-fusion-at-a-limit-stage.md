# Owner terminal review: `ex-countable-support-fusion-at-a-limit-stage`

**Decision:** `repaired`.

Terra correctly rejected the old claim that arbitrary successive restrictions automatically form inverse-limit compatible coordinates.  The example now fixes the genuine dependencies $p_{n+1}\restriction\alpha_n=p_n$ and defines, in each intermediate extension, the localized dense set of tails that either lie below the current tail or are incompatible with it.  Properness supplies a tail meeting that dense set, and coherence lets the coordinatewise union define the countable-support limit condition.

This is the limit-stage mechanism in Jech, *Set Theory*, Lemmas 31.16–31.18 and the Proper Iteration Lemma, printed pages 604–606; bibliographic page https://link.springer.com/book/10.1007/3-540-44761-X.  The repaired example now invokes the local library iteration lemma only for the exact union conclusion it states.

Exact frozen pre-review item SHA-256: `351795556a667e3ef92c5274ca8e4624549da3888047102cf4c071ec861c4dea`.  Current raw item SHA-256: `0e6cc335586176953409088c2d6328edc5872d084416f2076f205b99c3ea0412`.
