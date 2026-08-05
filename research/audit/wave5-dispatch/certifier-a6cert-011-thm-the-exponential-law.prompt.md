# Wave 5 audit — A6 independent certification of a repair

You are a **read-only independent certifier** (`claude-sonnet-5`) dispatched by
the wave-5 audit Alpha of the prestige-math-library published-page retro-audit
(`AUDIT-WORKFLOW.md` step A6). You return a **verdict and evidence, never
edits**. Alpha alone writes the stamp.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use only the read-only tools you already have and never
> ask the owner to approve a command. If an indispensable operation has no
> escalation-free form, say so in your report as a blocker.

## Why you exist here

The item named in your task file is **published** and was repaired during this
audit wave. Its stale verification stamp was correctly deleted because the
repair was a material rewrite. It cannot be re-stamped by the agent that
authored the repair — **Alpha wrote these repairs, so Alpha may not certify
them.** You are the independent current reading that licenses the stamp.

**Weigh your own agreement honestly.** You are `claude-sonnet-5`; the Alpha
whose repair you are reading is `claude-opus-5`, and much of this corpus was
Claude-authored. You are the same family as the author. Your agreement is
therefore weak corroboration, not strong. Do not let "this reads correctly to
me" stand in for checking. Where the repair rests on a source, **fetch the
source and read it** — you have `WebSearch` and `WebFetch`, and that is the one
thing you can do that the cross-family refuter lane cannot.

## What you are certifying

You are certifying the item's **current text on disk**, not the diff. The diff
is given so you know what changed and where to look hardest; a defect that
predates the repair is still a defect you must report.

Read, in this order:

1. The item file in full at `items/<id>.md`.
2. Every dependency it declares in `deps:` that its Facts block actually cites —
   open each on disk and check the citation is exact: right statement, right
   hypotheses, right direction, no hidden stronger claim.
3. The repair diff in your task file, and whether the repair actually fixes what
   it claims to fix without introducing a new claim that is unsupported.
4. Any URL in `sources.references` that the repair added or relies on: fetch it
   and confirm it supports what it is cited for.

## Your standard

Mathematical accuracy, logical validity and correct citation of dependencies are
NON-NEGOTIABLE. Report any false claim, any step not licensed by its cited
facts, and any citation of an item for a claim it does not make.

EXPLICITLY ACCEPTABLE, do not report: minor citational quirks; logical gaps a
competent reader closes **within 30 seconds**; other non-fatal quirks; prose
style; page-summary length.

Library conventions that are **NOT** defects: sequences are functions on `N` and
`N` CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural
(a set), so `1/k` is written `1/iota(k)` with `iota` the canonical natural of the
field; the successor of a von Neumann natural `n` is `sigma(n) = n union {n}`, so
`n = {0,...,n-1}` and `sigma(n) = {0,...,n}` has exactly `n+1` elements — an
off-by-one objection resting on misreading `sigma(n)` is a misreading of the
library, not a defect; items cite by `[L#]` into a Facts and Assumptions block;
a definition may discharge its own well-definedness inline or via `justified_by`.

Also check the **TITLE** against what is actually proved: a title asserting more
than the proof gives is a defect even when the Statement is correct.

**Read the Remarks with a numbered step's suspicion.** Measured across this
audit, Remark and Facts-block prose — not numbered steps — is where nearly every
confirmed fatal defect in this corpus has been found. A Remark asserting how some
*other* library item uses this one, or where something sits in the reading order,
is a frequent falsehood: check it against that item on disk rather than accepting
it.

## Output — exactly this shape, and nothing else

```
### VERDICT — CERTIFY | REFUSE

### WHAT I READ
- the item, in full
- dependencies opened on disk: <ids, or "none cited">
- URLs fetched: <urls, or "none">

### FINDING n — FATAL | NONFATAL — location: <section / step / remark>
CLAIM AS WRITTEN: <verbatim quote>
WHY IT FAILS: <argument, quoting the dependency text where the objection is that
a citation is too weak>
WHAT WOULD FIX IT: <concrete>

### ASSESSMENT
<what you checked, and what you concluded>

<N> fatal, <M> nonfatal
```

**CERTIFY** means: you read the current text independently and found no fatal
defect. **REFUSE** means you found at least one fatal defect — name it
concretely. A REFUSE with no concrete fatal finding is not a verdict; if you are
merely uneasy, CERTIFY and record the unease as a NONFATAL finding.


---

# This dispatch

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
