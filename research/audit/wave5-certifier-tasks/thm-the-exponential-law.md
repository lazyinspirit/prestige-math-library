# Certify the wave-5 repair of `thm-the-exponential-law`

**Item file:** `items/thm-the-exponential-law.md` — read it in full from disk, and read every
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
diff --git a/items/thm-the-exponential-law.md b/items/thm-the-exponential-law.md
index a18c6c3..02904dc 100644
--- a/items/thm-the-exponential-law.md
+++ b/items/thm-the-exponential-law.md
@@ -4,6 +4,9 @@ kind: theorem
 title: "The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology"
 status: published
 origin: session
+provenance:
+  statement: ai-altered
+  proof: ai-generated
 deps: [thm-exponential-correspondence-is-continuous,
        thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
        def-evaluation-map, def-compact-open-topology, def-locally-compact-metric-space,
@@ -19,11 +22,6 @@ short: "exponential law (bijection)"
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
@@ -103,7 +101,7 @@ No choice principle is used.
 
 - **Where each hypothesis is spent.** Continuity of $\Phi(f)$, which is injectivity's half of the correspondence, needs nothing beyond compactness being available for subsets of $X$ ([[thm-exponential-correspondence-is-continuous]]). Surjectivity is where local compactness enters, and it enters once, through continuity of the evaluation map at step 3.1 ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]]). Without it the map $\Psi(F)$ need not be continuous and $\Phi$ need not be onto.
 
-- **What the homeomorphism form would additionally need, stated precisely.** To say that $\Phi$ is a homeomorphism one must first topologise both sides, which means giving $C(X \times Z, Y)$ a compact-open topology built over the compact subsets of $X \times Z$, and $C(Z, C(X,Y))$ one built over the compact subsets of $Z$. Neither is available here: $Z$ is an arbitrary topological space, and this library defines compactness only for metric spaces ([[def-metric-compactness]]), so "compact subset of $Z$" and "compact subset of $X \times Z$" have no meaning at this point in the reading order. Supplying them needs the page that defines compactness for arbitrary topological spaces; on top of that, the standard proof of the homeomorphism form needs a tube lemma for a compact factor of an arbitrary product, and, for the direction that $\Phi^{-1}$ is continuous, that a compact subset of $X \times Z$ be covered by finitely many products of compacta. None of that is proved here, and nothing above assumes it.
+- **What the homeomorphism form would additionally need, stated precisely.** To say that $\Phi$ is a homeomorphism one must first topologise both sides, which means giving $C(X \times Z, Y)$ a compact-open topology built over the compact subsets of $X \times Z$, and $C(Z, C(X,Y))$ one built over the compact subsets of $Z$. Neither is available here, and not for want of a notion of compactness: compactness for an arbitrary topological space ([[def-compact-space]]) and the tube lemma for a compact factor of an arbitrary product ([[lem-tube-lemma-for-a-compact-factor]]) are both developed earlier in the reading order, so "compact subset of $Z$" and "compact subset of $X \times Z$" do have meaning. What is missing is the topology itself: [[def-compact-open-topology]] is stated for a **metric** domain, whereas $Z$ here is an arbitrary topological space and $X \times Z$ carries no metric, so neither side is topologised by anything on this page. Beyond that, the direction that $\Phi^{-1}$ is continuous also needs that a compact subset of $X \times Z$ be covered by finitely many products of compacta, which this library does not prove. None of that is done here, and nothing above assumes it.
 
 - **The bijection is what the name usually denotes.** Most treatments state the exponential law first as this correspondence and only afterwards ask when it is a homeomorphism, the answer requiring hypotheses on $Z$ as well as on $X$. The scope taken here is therefore the standard first form, and it is stated as such rather than as a weakened version of something else.
```

## Certify or refuse

Follow the brief exactly. Return the verdict block and nothing else.
