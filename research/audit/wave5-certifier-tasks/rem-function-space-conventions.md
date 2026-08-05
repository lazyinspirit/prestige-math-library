# Certify the wave-5 repair of `rem-function-space-conventions`

**Item file:** `items/rem-function-space-conventions.md` — read it in full from disk, and read every
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
diff --git a/items/rem-function-space-conventions.md b/items/rem-function-space-conventions.md
index 6d7af07..a3118f5 100644
--- a/items/rem-function-space-conventions.md
+++ b/items/rem-function-space-conventions.md
@@ -4,6 +4,9 @@ kind: remark
 title: "Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness"
 status: published
 origin: session
+provenance:
+  statement: ai-generated
+  proof: not-applicable
 deps: [def-topology-of-pointwise-convergence, def-topology-of-uniform-convergence,
        def-topology-of-compact-convergence, def-compact-open-topology,
        def-locally-compact-metric-space, def-evaluation-map, def-metric-compactness,
@@ -20,12 +23,6 @@ landmark: false
 short: "conventions of this page"
 verification:
   precheck: n/a
-  verified:
-    model: gpt-5.6-sol-codex-subscription
-    verdict: certify
-    date: 2026-08-03
-    scope: published-audit
-    delegated_by: owner
 sources:
   scraped: []
   references:
@@ -44,13 +41,17 @@ collected here once and then used silently.
 
 **1. "The domain is a metric space" is this page's standing convention, not a
 hypothesis every item needs; each Statement carries exactly what its own proof
-uses.** Where the domain *must* be metric, that is forced rather than chosen: an
-item quantifying over the **compact** subsets of the domain needs a notion of
-compactness, and the only one available at this point in the reading order is
-[[def-metric-compactness]], which is defined for metric spaces. Compactness for
-an arbitrary topological space is developed only later in the reading order, so
-it is unavailable on this page and nothing here anticipates it. The items with a
-metric domain for that reason are
+uses.** Where the domain *must* be metric, the hypothesis is inherited rather
+than decorative: an item quantifying over the **compact** subsets of the domain
+reads compactness through [[def-metric-compactness]], and it does so because
+[[def-compact-open-topology]], the definition this development is built over, is
+stated for a metric $(X,d)$. That restriction is a scope choice of this page and
+not a gap in the library. Compactness for an arbitrary topological space
+([[def-compact-space]]) is developed *earlier* in the reading order and is
+available here; on a metric space the two readings of "compact subset" agree
+([[thm-compactness-agrees-with-metric-compactness]]), so nothing below is
+weakened by taking the metric one. The items with a metric domain for that
+reason are
 [[def-locally-compact-metric-space]],
 [[lem-compact-closed-balls-in-a-locally-compact-metric-space]],
 [[lem-tube-lemma-for-a-compact-metric-factor]], [[def-compact-open-topology]],
@@ -126,9 +127,11 @@ says so where it is defined.**
   $1$ and needs no boundedness hypothesis. The companion page checks that on
   $C([0,1],\mathbb{R})$, where both are defined, they induce the same topology,
   so no second notion of convergence is created.
-- [[def-locally-compact-metric-space]] is a metric special case of a notion this
-  library does not yet define in general. Its own dictionary remark records the
-  agreement and why the agreement is immediate.
+- [[def-locally-compact-metric-space]] is the metric special case of
+  [[def-locally-compact-space]], the general topological notion, which the
+  library does define and which is available at this point in the reading order.
+  This page states the metric form and nothing else; that item's own dictionary
+  remark records the agreement and why the agreement is immediate.
 
 **7. $Y^{X}$ here is a bare set of functions with the product topology, not the
 vector space of [[def-function-space]].** That item writes $F^{X}$ for the same
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
