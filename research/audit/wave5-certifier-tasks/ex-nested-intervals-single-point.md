# Certify the wave-5 repair of `ex-nested-intervals-single-point`

**Item file:** `items/ex-nested-intervals-single-point.md` — read it in full from disk, and read every
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
diff --git a/items/ex-nested-intervals-single-point.md b/items/ex-nested-intervals-single-point.md
index b3618a0..d408d80 100644
--- a/items/ex-nested-intervals-single-point.md
+++ b/items/ex-nested-intervals-single-point.md
@@ -4,6 +4,9 @@ kind: example
 title: "The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$"
 status: published
 origin: session
+provenance:
+  statement: literature-derived
+  proof: ai-altered
 deps: [thm-nested-interval-property, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-sequence, def-real-limit, def-complete-ordered-field, def-ordered-field]
 justified_by: []
 aliases: []
@@ -11,11 +14,6 @@ landmark: false
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
@@ -71,7 +69,7 @@ $j \in \mathbb{N}$, which is the same family under the substitution $k = j+1$
 
 2.1 The family is nested: $0 < (j+1) < (j+2)$ gives $0 < 1/(j+2) < 1/(j+1)$, so $0 \le x \le 1/(j+2)$ implies $0 \le x \le 1/(j+1)$, that is $J_{j+1} \subseteq J_j$. [step 1.1, L3, L4]
 
-2.2 The lengths tend to $0$. Let $\varepsilon > 0$ be real and use [L5] to fix a natural $n \ge 1$ with $1/n < \varepsilon$. For every $j \ge n$ we have $0 < n \le j+1$, hence $0 < 1/(j+1) \le 1/n < \varepsilon$, and $|\ell_j - 0| = \ell_j < \varepsilon$ since $\ell_j > 0$. [step 1.1, L3, L4, L5, L6, L7]
+2.2 The lengths tend to $0$. Let $\varepsilon > 0$ be real and use [L5] to fix a natural $n \ge 1$ with $1/n < \varepsilon$. For every $j \ge n$ we have $0 < n \le j+1$, hence $0 < 1/(j+1) \le 1/n < \varepsilon$, and $|\ell_j - 0| = \ell_j < \varepsilon$ since $\ell_j > 0$. [step 1.1, L3, L4, L5, L6, L7, L8]
 
 3.1 By [L2] applied to steps 1.1, 2.1 and 2.2, the intersection $\bigcap_j J_j$ is nonempty and is a single point. [step 1.1, step 2.1, step 2.2, L2]
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
