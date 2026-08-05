# Certify the wave-5 repair of `cor-components-of-open-subsets-of-rn-are-polygonally-connected`

**Item file:** `items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md` — read it in full from disk, and read every
dependency in its `deps:` list that its Facts block actually cites.

**Status.** This item is `status: published`. It was repaired during wave 5 of
the published-page retro-audit. Its previous verification stamp was deleted
because the repair was a material rewrite, so the item currently carries **no**
verification stamp. Your independent reading is what licenses the new one.

**Who wrote the repair.** The wave-5 audit Alpha (`claude-opus-5`). It may not
certify its own repair, which is why you are reading it.

## The repair, as a diff from `0649370` to `HEAD`

Read this to know what changed and where to look hardest. **You are certifying
the current text on disk, not the diff** — a defect that predates the repair is
still a defect you must report.

```diff
diff --git a/items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md b/items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md
index 277113c..9a7f892 100644
--- a/items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md
+++ b/items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md
@@ -4,17 +4,15 @@ kind: corollary
 title: "Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected"
 status: published
 origin: session
-deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-metric-ball, def-norm-and-normed-space, lem-euclidean-polygonal-paths-are-continuous, def-connected-component-and-quasicomponent]
+provenance:
+  statement: ai-altered
+  proof: ai-generated
+deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-metric-ball, def-norm-and-normed-space, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-connected-component-and-quasicomponent]
 aliases: []
 landmark: false
 proof_strategy: direct
 verification:
   precheck: pass
-  judge:
-    model: z-ai/glm-5.2
-    verdict: pass
-    date: 2026-07-31
-  audited: 2026-07-31
 sources:
   scraped: []
   references:
@@ -31,7 +29,7 @@ Every connected component of an open subset $U\subseteq\mathbb{R}^n$ is open in
 
 **Given:** An open subset $U\subseteq\mathbb{R}^n$ and a connected component $C$ of $U$.
 
-[L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, and the segment is continuous ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]]).
+[L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, the segment is continuous, and every path-connected space is connected ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).
 
 [L2] A component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
