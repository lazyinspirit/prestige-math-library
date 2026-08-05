# Certify the wave-5 repair of `cex-nested-open-intervals-empty`

**Item file:** `items/cex-nested-open-intervals-empty.md` — read it in full from disk, and read every
dependency in its `deps:` list that its Facts block actually cites.

**Status.** This item is `status: published`. It was repaired during wave 5 of
the published-page retro-audit. Its previous verification stamp was deleted
because the repair was a material rewrite, so the item currently carries **no**
verification stamp. Your independent reading is what licenses the new one.

**Who wrote the repair.** The wave-5 audit Alpha (`claude-opus-5`). It may not
certify its own repair, which is why you are reading it.

## The repair, as a diff from `0649370` to `worktree`

Read this to know what changed and where to look hardest. **You are certifying
the current text on disk, not the diff** — a defect that predates the repair is
still a defect you must report.

```diff
diff --git a/items/cex-nested-open-intervals-empty.md b/items/cex-nested-open-intervals-empty.md
index a29a34e..37c97cc 100644
--- a/items/cex-nested-open-intervals-empty.md
+++ b/items/cex-nested-open-intervals-empty.md
@@ -4,6 +4,9 @@ kind: counterexample
 title: "The nested open intervals $(0, 1/k)$ have empty intersection"
 status: published
 origin: session
+provenance:
+  statement: literature-derived
+  proof: ai-altered
 deps: [fs-nested-open-intervals-nonempty, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, thm-nested-interval-property, def-sequence, def-complete-ordered-field, def-ordered-field]
 justified_by: []
 aliases: []
@@ -12,11 +15,6 @@ proof_strategy: direct
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
@@ -43,7 +41,7 @@ The refutation is carried out in full in
 [[fs-nested-open-intervals-nonempty]] and is recorded here as the named
 counterexample. The comparison worth keeping in view is the closed family $[0, 1/k]$, which
 differs only by the inclusion of the left endpoint and intersects in $\{0\}$;
-that computation is the preceding example on this page.
+that computation is [[ex-nested-intervals-single-point]].
 
 ## Facts & Assumptions
 
@@ -57,21 +55,19 @@ that computation is the preceding example on this page.
 
 [L4] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).
 
-[L5] Nested interval property, for nonempty **closed** bounded intervals ([[thm-nested-interval-property]]).
-
-[L6] The refuted claim: a nested sequence of nonempty bounded open intervals has nonempty intersection.
+[L5] The refuted claim: a nested sequence of nonempty bounded open intervals has nonempty intersection.
 
 ## Counterexample
 
 **Proof technique:** direct.
 
-1.1 Each $J_j$ is a nonempty bounded open interval and $J_{j+1} \subseteq J_j$, so the family is an instance of the claim, which asserts that its intersection is nonempty. [given, L1, L6]
+1.1 Each $J_j$ is a nonempty bounded open interval and $J_{j+1} \subseteq J_j$, so the family is an instance of the claim, which asserts that its intersection is nonempty. [given, L1, L5]
 
 2.1 Suppose $x$ belonged to every $J_j$. Then $x > 0$, and $x < 1/(j+1)$ for every $j \in \mathbb{N}$. [step 1.1, L1]
 
 3.1 Since $x > 0$, fix a natural $n \ge 1$ with $1/n < x$, and write $n = j + 1$ with $j \in \mathbb{N}$; step 2.1 then gives $x < 1/n$ as well, which trichotomy forbids. [step 2.1, L2, L3, L4]
 
-4.1 So no such $x$ exists: $\bigcap_j J_j = \emptyset$, and the claim is refuted by a family of nonempty bounded open intervals. [step 1.1, step 3.1, L1, L6] ∎
+4.1 So no such $x$ exists: $\bigcap_j J_j = \emptyset$, and the claim is refuted by a family of nonempty bounded open intervals. [step 1.1, step 3.1, L1, L5] ∎
 
 ## Remarks
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
