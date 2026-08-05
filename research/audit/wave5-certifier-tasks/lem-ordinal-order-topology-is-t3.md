# Certify the wave-5 repair of `lem-ordinal-order-topology-is-t3`

**Item file:** `items/lem-ordinal-order-topology-is-t3.md` — read it in full from disk, and read every
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
diff --git a/items/lem-ordinal-order-topology-is-t3.md b/items/lem-ordinal-order-topology-is-t3.md
index 6c35782..8761017 100644
--- a/items/lem-ordinal-order-topology-is-t3.md
+++ b/items/lem-ordinal-order-topology-is-t3.md
@@ -4,6 +4,9 @@ kind: lemma
 title: "Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [def-order-topology-on-an-ordinal, def-t0-and-t1-spaces,
        thm-t1-iff-singletons-are-closed, def-hausdorff-space, def-regular-and-t3-spaces,
        lem-regularity-via-closed-neighbourhoods, def-neighbourhood-top,
@@ -16,11 +19,6 @@ short: "ordinal spaces are $T_3$"
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
@@ -30,6 +28,10 @@ sources:
       url: "https://en.wikipedia.org/wiki/Ordinal_number"
     - title: "J. Munkres, Topology, 2nd ed., §14"
       url: "https://en.wikipedia.org/wiki/James_Munkres"
+    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
+      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
+    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
+      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
 pipeline_run: null
 ---
 
@@ -83,7 +85,7 @@ $\mathcal{B}_\gamma$. Then:
 
 3.2 Step 2.3 makes every singleton closed, so $\gamma$ is $T_1$ by [L3], which is claim 2. [step 2.3, L3]
 
-4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4]
+4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]
 
 5.1 By step 4.1 every point of $\gamma$ has a neighbourhood base of closed neighbourhoods, so $\gamma$ is regular by [L5]; with step 3.2 it is $T_3$, which is claim 4. [step 3.2, step 4.1, L5] ∎
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
