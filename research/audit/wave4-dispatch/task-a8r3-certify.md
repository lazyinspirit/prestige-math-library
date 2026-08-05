## The item to certify

`items/def-cofinality.md` — read the CURRENT file on disk.

## The defect that was repaired, and what to check hardest

The judge `deepseek-v4-pro` rejected the item on its current frozen context:

> Remark incorrectly states that cf(alpha)=alpha holds only at 0, 1, and all
> infinite cardinals. In fact, singular infinite cardinals do not satisfy
> cf(kappa)=kappa, contradicting the item own definition of singular.

Alpha adjudicated this `confirmed_fatal` and repaired the FIRST Remark, "Why
regularity is defined for cardinals and not for ordinals". The pre-repair clause
read:

> and it holds only at $0$, at $1$, and at those ordinals that are already
> infinite cardinals.

Decide for yourself whether the clause now on disk is **true**, whether the
sentence it sits in still licenses the conclusion that immediately follows it
("Calling an ordinal regular would therefore say nothing new"), and whether it is
consistent with (a) the item own definition of **singular** in the Definition
section, (b) the second Remark, and (c) `items/thm-regularity-of-the-alephs.md`
clause (c), which is on the same page. Open all three on disk and quote them.

**State the exact class of ordinals alpha with cf(alpha) = alpha yourself,**
derived from `items/thm-cofinality-basics.md`, before you judge whether the
repaired clause matches it. Do not take Alpha word for it.

## Two further things to check, and report on explicitly

1. **The fourth Remark heading**, "Only one notion of cofinal exists in this
   library." `items/def-subnet.md` introduces **eventually cofinal** index maps
   between directed sets. Read both and say whether that heading is false as
   written, overstated, or defensible. Report it; do NOT treat its presence as a
   reason to refuse the repaired clause, and note in your output that no
   adjudication licenses editing it in this round.
2. **The verification block.** Alpha removed the stale `verified:` stamp before
   editing, so the item currently carries none. That is the intended state; the
   new stamp is written only if you certify. Confirm there is no stale
   `judge:` block and no `audited:` stamp.

Nothing else in the item was changed this round.
