# Certify the wave-5 repair of `ex-the-particular-point-topology-in-the-separation-hierarchy`

**Item file:** `items/ex-the-particular-point-topology-in-the-separation-hierarchy.md` — read it in full from disk, and read every
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
diff --git a/items/ex-the-particular-point-topology-in-the-separation-hierarchy.md b/items/ex-the-particular-point-topology-in-the-separation-hierarchy.md
index 36b85b1..7f01573 100644
--- a/items/ex-the-particular-point-topology-in-the-separation-hierarchy.md
+++ b/items/ex-the-particular-point-topology-in-the-separation-hierarchy.md
@@ -1,9 +1,12 @@
 ---
 id: ex-the-particular-point-topology-in-the-separation-hierarchy
 kind: example
-title: "The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three"
+title: "The particular-point topology is $T_0$, it is not $T_1$ and not regular once the set has at least two points, and it is not normal once the set has at least three"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
        def-regular-and-t3-spaces, def-normal-and-t4-spaces, def-hausdorff-space,
        def-interior-closure-boundary-top, thm-closure-characterisation-top,
@@ -15,11 +18,6 @@ short: "particular-point topology in the hierarchy"
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
@@ -29,6 +27,8 @@ sources:
       url: "https://en.wikipedia.org/wiki/Separation_axiom"
     - title: "L. Steen and J. Seebach, Counterexamples in Topology, §8"
       url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
+    - title: "Sierpiński space (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
 pipeline_run: null
 ---
 
@@ -64,8 +64,6 @@ normal" begin at different sizes.
 
 [L2] Regular: a point and a closed set not containing it have disjoint open supersets. Normal: two disjoint closed sets have disjoint open supersets ([[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).
 
-[L3] A set is closed exactly when its complement is open, and $\overline{A}$ is the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 2).
-
 ## Verification
 
 **Proof technique:** direct.
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
