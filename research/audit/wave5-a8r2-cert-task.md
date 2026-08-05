# Certify the wave-5 A8 round-2 repair of `cor-monotone-converges-iff-bounded`

**Item file:** `items/cor-monotone-converges-iff-bounded.md` — read it in full from
disk, and read every dependency in its `deps:` list that its Facts block actually
cites.

**Status.** This item is `status: published`. It was repaired at A8 round 2 of the
published-page retro-audit. Its previous verification stamp (a legacy
`z-ai/glm-5.2` judge block and a 2026-07-26 `audited` stamp) was deleted because
the repair was a material rewrite, so the item currently carries **no**
verification stamp. Your independent reading is what licenses the new one.

**Who wrote the repair.** The wave-5 audit Alpha (`claude-opus-5`). It may not
certify its own repair, which is why you are reading it.

## What both judge lanes found, and what Alpha concluded

BOTH judge lanes — `claude-sonnet-5` and the cross-family `deepseek-v4-pro` —
independently rejected this item on the same sentence in its final Remark:

> "Without boundedness the forward direction is what fails"

Alpha confirmed this as a **fatal false claim**. The item's own Statement says
"The forward implication holds for every sequence and is
[[lem-convergent-implies-bounded]]" — so the forward direction (converges implies
bounded) never fails, and the witness the Remark offered (a nondecreasing
unbounded sequence) does not even converge, so it cannot witness a failure of an
implication whose antecedent it does not satisfy.

**Check specifically:**

1. Does the replacement Remark now state only true things about which direction
   holds unconditionally and which needs monotonicity?
2. Does it still accurately describe what [[lem-monotone-unbounded-diverges]]
   actually says? Open that item on disk and compare. Alpha's replacement claims
   it records that an unbounded nondecreasing sequence "diverges to $+\infty$" —
   verify that is the lemma's actual statement and that "sharpened form" is a
   fair description of its relation to the forward direction.
3. Does [[fs-bounded-implies-convergent]] actually witness the failure of the
   converse without monotonicity? Open it.
4. Is the new bold lead "**Monotonicity cannot be dropped.**" accurate, given
   that boundedness is one side of the biconditional rather than a hypothesis?
5. Any defect that predates the repair anywhere in the item.

## The repair, as a diff against HEAD

```diff
diff --git a/items/cor-monotone-converges-iff-bounded.md b/items/cor-monotone-converges-iff-bounded.md
index 43e0134..8e59645 100644
--- a/items/cor-monotone-converges-iff-bounded.md
+++ b/items/cor-monotone-converges-iff-bounded.md
@@ -14,11 +14,6 @@ landmark: false
 proof_strategy: direct
 verification:
   precheck: pass
-  judge:
-    model: z-ai/glm-5.2
-    verdict: pass
-    date: 2026-07-26
-  audited: 2026-07-26
 sources:
   scraped: []
   references:
@@ -86,8 +81,10 @@ is false for sequences in general.
   the subsequence is boundedness, inherited from the sequence, and not a bound on
   a particular side.
 
-- **Neither hypothesis can be dropped.** Without monotonicity the converse
-  direction fails, by [[fs-bounded-implies-convergent]]. Without boundedness the
-  forward direction is what fails, and it fails in the describable way recorded
-  by [[lem-monotone-unbounded-diverges]]: a nondecreasing unbounded sequence
-  diverges to $+\infty$.
+- **Monotonicity cannot be dropped.** Without it the converse direction fails,
+  by [[fs-bounded-implies-convergent]]. The forward direction is not in the same
+  position: it holds for every sequence, monotone or not, so there is no
+  hypothesis to drop from it. What monotonicity adds there is sharpness rather
+  than validity, and the sharpened form is recorded by
+  [[lem-monotone-unbounded-diverges]]: an unbounded nondecreasing sequence does
+  not merely fail to converge, it diverges to $+\infty$.
```
