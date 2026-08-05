# Certify the wave-5 repair of `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets`

**Item file:** `items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md` — read it in full from disk, and read every
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
diff --git a/items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md b/items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md
index 37c34ed..5540292 100644
--- a/items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md
+++ b/items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md
@@ -4,6 +4,9 @@ kind: false-statement
 title: "FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [def-topology-of-pointwise-convergence, lem-convergence-in-the-pointwise-topology,
        def-topology-of-compact-convergence, def-topology-of-uniform-convergence,
        lem-uniform-convergence-in-the-uniform-metric, lem-uniform-metric-on-a-function-space,
@@ -23,11 +26,6 @@ short: "pointwise does not give uniform on compacta"
 proof_strategy: direct
 verification:
   precheck: pass
-  judge:
-    model: z-ai/glm-5.2
-    verdict: pass
-    date: 2026-07-28
-  audited: 2026-07-29
 sources:
   scraped: []
   references:
@@ -73,8 +71,6 @@ No choice principle is used; every function below is given by a formula.
 
 [L7] The basic sets of the topology of compact convergence are $B_K(f,\varepsilon) = \{\, g : d(f(x),g(x)) < \varepsilon \text{ for every } x \in K \,\}$, and a sequence converging to $f$ in a topology is eventually inside every neighbourhood of $f$ ([[def-topology-of-compact-convergence]], [[def-topology-of-pointwise-convergence]]).
 
-[L8] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).
-
 ## Refutation
 
 **Proof technique:** direct.
@@ -105,7 +101,7 @@ No choice principle is used; every function below is given by a formula.
 
 - **The failure is not about the size of the domain.** The domain here is compact, so "uniformly on every compact set" is the same as "uniformly", and the witness shows that pointwise convergence does not give uniform convergence even there. What moves is the *place* where the two functions differ: the spike has height $1$ for every $k$ and merely slides towards $0$.
 
-- **The area under the spike does tend to $0$**, which is why this example is also the standard warning that pointwise convergence controls no integral either. Nothing about integration is claimed here.
+- **The area under the spike does tend to $0$**, so this witness does *not* also separate the integral from its pointwise limit: the standard warning that pointwise convergence controls no integral needs a spike whose height grows as its base shrinks. Nothing about integration is claimed here.
 
 - **What is true in this direction.** Uniform convergence implies convergence on every compact set, which implies pointwise convergence ([[thm-comparison-of-the-three-function-space-topologies]]); the reverse of each implication fails, and the companion page separates the two rightmost topologies with a different witness on $\mathbb{R}$.
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
