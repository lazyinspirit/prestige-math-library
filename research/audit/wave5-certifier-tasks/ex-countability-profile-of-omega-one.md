# Certify the wave-5 repair of `ex-countability-profile-of-omega-one`

**Item file:** `items/ex-countability-profile-of-omega-one.md` — read it in full from disk, and read every
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
diff --git a/items/ex-countability-profile-of-omega-one.md b/items/ex-countability-profile-of-omega-one.md
index c1bd691..a19ff6e 100644
--- a/items/ex-countability-profile-of-omega-one.md
+++ b/items/ex-countability-profile-of-omega-one.md
@@ -4,16 +4,22 @@ kind: example
 title: "Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [def-first-countable-top, def-separable-space, def-compactness-variants, def-order-topology-on-an-ordinal, thm-countable-subsets-of-omega-one-are-bounded, thm-ordinal-spaces-and-compactness]
 aliases: []
 verification:
   precheck: n/a
-  judge:
-    model: z-ai/glm-5.2
-    verdict: pass
-    date: 2026-07-31
-  audited: 2026-07-31
-sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
+sources:
+  scraped: []
+  references:
+    - title: "UCR General Topology Notes"
+      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
+    - title: "First uncountable ordinal (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
+    - title: "Order topology (Wikipedia)"
+      url: "https://en.wikipedia.org/wiki/Order_topology"
 pipeline_run: null
 ---
 ## Example
@@ -27,6 +33,6 @@ countable. The published ordinal theorem makes it countably compact.
 Every at most countable subset $D\subseteq\omega_1$ is bounded by some
 $\beta<\omega_1$, so the nonempty open tail above $\beta$ misses $D$; hence
 $\omega_1$ is not separable. The open initial segments
-$\{\alpha:\alpha<\omega_1\}$ cover $\omega_1$, but any at most countable
+$\{\,[0,\beta] : \beta<\omega_1\,\}$ cover $\omega_1$, but any at most countable
 subfamily has bounded union and therefore fails to cover. Thus $\omega_1$ is
 not Lindelöf.
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
