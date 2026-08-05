# Certify the wave-5 A8 round-3 repair of `cex-unbounded-with-convergent-subsequence`

**Item file:** `items/cex-unbounded-with-convergent-subsequence.md` — read it in
full from disk, and read every dependency in its `deps:` list that its Facts
block actually cites.

**Status.** This item is `status: published`. It was repaired at A8 round 3 of
the published-page retro-audit. Its previous verification stamp (a legacy
`z-ai/glm-5.2` judge block and a 2026-07-26 `audited` stamp) was deleted because
the repair was a material rewrite, so the item currently carries **no**
verification stamp. Your independent reading is what licenses the new one.

**Who wrote the repair.** The wave-5 audit Alpha (`claude-opus-5`). It may not
certify its own repair, which is why you are reading it.

## What both judge lanes found, and what Alpha concluded

BOTH judge lanes — `claude-sonnet-5` and the cross-family `deepseek-v4-pro` —
independently rejected this item on the last bullet of its Remarks, which read:

> "With the unbounded branch replaced by a second constant, the same interleaving
> gives a bounded divergent sequence with two subsequential limits
> ([[ex-two-subsequential-limits]])."

Alpha confirmed this as **fatal, of type `dependency_citation`**: the
parenthetical identifies `ex-two-subsequential-limits` as the sequence obtained
by that modification, and it is not. That item is $x_k = (-1)^k(1 + 1/k)$, an
alternating sign carrying a *non-constant* null perturbation, and its own Remark
says in terms that replacing the perturbation by a constant collapses it to the
plain $\pm 1$ alternating sequence — that is, the cited item explicitly
distinguishes itself from the construction this Remark attributed to it. The
underlying mathematical claim (a two-constant interleaving is bounded, divergent,
and has two subsequential limits) is true; the identification was false.

**Check specifically, and open each named item on disk:**

1. Is the replacement's arithmetic claim true as written — that replacing the
   unbounded branch of this item's interleaving by a constant $c \ne 1$ yields a
   bounded divergent sequence whose two subsequential limits are exactly $1$ and
   $c$? The interleaving in question is defined in this item's **Given** block
   via the index maps $e, o$ of [[lem-alternating-sequence]]; open that item.
   Note the replacement asserts the value of the subsequential limit *set* for a
   sequence this item does not otherwise construct — decide whether that is a
   claim a reader can verify in one line from what is on the page, or an
   unsupported new assertion.
2. Does the new description of [[ex-two-subsequential-limits]] match that item on
   disk: two subsequential limits reached "by an alternating sign carrying a null
   perturbation rather than by interleaving constants, so that neither limit is a
   value of the sequence"? Open it and compare against its Statement, its
   Verification and its own Remarks.
3. Is $c \ne 1$ the right and sufficient side condition, or does the sentence
   need more (for instance, is the claim still true for $c = 1$, and is the
   sequence still *divergent* then)?
4. Every other Remark in the item, read with a numbered step's suspicion —
   especially the first bullet's claim about what
   [[def-subsequential-limit]] gives, and the second bullet's claim about
   [[lem-alternating-sequence]]. A defect that predates the repair is still a
   defect you must report.
5. The Facts block and steps 1.1 to 3.1 against the declared dependencies,
   including whether `[L1]`'s attribution to
   [[fs-convergent-subsequence-implies-bounded]] is exact.

## The repair, as a diff against HEAD

```diff
diff --git a/items/cex-unbounded-with-convergent-subsequence.md b/items/cex-unbounded-with-convergent-subsequence.md
index 466b646..3413c19 100644
--- a/items/cex-unbounded-with-convergent-subsequence.md
+++ b/items/cex-unbounded-with-convergent-subsequence.md
@@ -17,11 +17,6 @@ proof_strategy: direct
 cx_machine_verified: false
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
@@ -97,8 +92,11 @@ adds the computation of its subsequential limit set.
   subsequences between them exhaust the sequence.
 
 - **Compare the bounded case.** With the unbounded branch replaced by a second
-  constant, the same interleaving gives a bounded divergent sequence with two
-  subsequential limits ([[ex-two-subsequential-limits]]). Bolzano-Weierstrass
-  applies there and produces one of the two; here it does not apply at all, and
-  the conclusion nevertheless happens to hold, which is exactly why the converse
-  is not a theorem.
+  constant $c \ne 1$, the same interleaving is bounded and divergent, its two
+  subsequential limits being $1$ and $c$. Bolzano-Weierstrass applies there and
+  produces one of the two; here it does not apply at all, and the conclusion
+  nevertheless happens to hold, which is exactly why the converse is not a
+  theorem. A different bounded sequence with two subsequential limits is worked
+  out in full at [[ex-two-subsequential-limits]], which reaches its two limits by
+  an alternating sign carrying a null perturbation rather than by interleaving
+  constants, so that neither limit is a value of the sequence.
```
