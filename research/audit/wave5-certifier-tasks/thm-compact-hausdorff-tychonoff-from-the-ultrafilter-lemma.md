# Certify the wave-5 repair of `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`

**Item file:** `items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md` — read it in full from disk, and read every
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
diff --git a/items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md b/items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md
index feeb762..70de1cd 100644
--- a/items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md
+++ b/items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md
@@ -4,22 +4,26 @@ kind: theorem
 title: "Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [lem-universal-net-cluster-points-are-limits, lem-continuous-images-of-universal-nets-are-universal, cor-compactness-via-universal-nets, thm-compactness-via-nets-filters-and-ultrafilters, def-product-topology, thm-product-universal-property, def-hausdorff-space, thm-hausdorff-iff-net-limits-are-unique]
 aliases: []
 landmark: true
 proof_strategy: constructive
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
     - title: "WVU Math 581 Topology I"
       url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
+    - title: "Tychonoff's theorem (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
+    - title: "Boolean prime ideal theorem (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
+    - title: "Net (mathematics) (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
 pipeline_run: null
 ---
 
@@ -47,7 +51,7 @@ pipeline_run: null
 
 1.1 For every $i\in I$, the projection $\pi_i$ is continuous, so $\pi_i(x_d)$ is universal by [L1] and converges in compact $X_i$ by [L2]. Its limit $p_i$ is unique by [L3]. [L1, L2, L3]
 
-2.1 The uniqueness in step 1.1 defines a function $p:I\to\prod_iX_i$, rather than choosing a family of limits. [step 1.1, L3, construct]
+2.1 The uniqueness in step 1.1 defines a point $p\in\prod_{i\in I}X_i$, namely the function $i\mapsto p_i$, rather than choosing a family of limits. [step 1.1, L3, construct]
 
 2.2 Let $N$ be a neighbourhood of $p$ in $P$. By [L4], it contains a basic product neighbourhood restricting a finite set $J\subseteq I$; for each $i\in J$, the coordinate net is eventually in its prescribed neighbourhood of $p_i$. Directedness supplies one index after the finitely many thresholds, and after it $x_d\in N$. Thus $x_d\to p$. [step 1.1, L4]
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
