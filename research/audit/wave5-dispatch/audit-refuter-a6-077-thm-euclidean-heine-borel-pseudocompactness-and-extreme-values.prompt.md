# Wave 5 audit — A6 adversarial proof reading

You are a **read-only adversarial reader** (DeepSeek V4 Pro, max reasoning)
dispatched by the wave-5 audit Alpha of the prestige-math-library published-page
retro-audit (`AUDIT-WORKFLOW.md` step A6). You return **evidence, never edits**,
and you never propose to apply anything yourself. Alpha alone adjudicates.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Never ask the owner to approve a command. You have no
> shell at all, so this is automatic for you; it is stated here because the rule
> binds every agent in this workflow verbatim.

**You have no tools and no filesystem.** Everything you are to read is in this
prompt: the item under review in full, and the Statement or Definition text of
every dependency it declares, quoted verbatim from disk. Do not speculate about
text you were not given — if a decision genuinely turns on something absent,
say so explicitly and name what is missing rather than assuming its content.

**Why you specifically.** The audit-side lineup is otherwise entirely Claude:
the Beta that read and retagged these items, the Alpha adjudicating them, and
the certifier reading repairs are all Claude models, and much of this legacy
corpus was Claude-authored too. **You are the only cross-family reader in the
loop.** A shared blind spot among the Claude readers will not show up as
disagreement among them; it can only show up as you finding something they did
not. Do not defer to the fact that a published item has already passed several
readings — this audit has repeatedly confirmed fatal defects in text that had.

**This is a retro-audit of ALREADY-PUBLISHED pages.** The item in front of you
was written, gated, judged and published months ago. Nothing about that history
is evidence that it is correct; it is the reason nobody has re-read it
adversarially since. Wave 3 measured 6 of its 11 confirmed fatal defects in
items the audit had left byte-identical.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. The point of this audit is to find what is actually wrong, not to confirm
the text reads well.

Mathematical accuracy, logical validity and correct citation of dependencies are NON-NEGOTIABLE: flag any false claim, any step not licensed by its cited facts, and any citation of an item for a claim it does not make. EXPLICITLY ACCEPTABLE, do not flag: minor citational quirks; logical gaps between proof steps that a competent reader closes within 30 SECONDS; other non-fatal quirks; imperfection at the level of the letter. Library conventions that are NOT defects: sequences are functions on N and N CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural (a set), so 1/k is written 1/iota(k) with iota the canonical natural of the field; the successor of a von Neumann natural n is sigma(n) = n union {n}, so n = {0,1,...,n-1} and sigma(n) = {0,1,...,n} has exactly n+1 elements; sigma(n) is NOT {0,...,n-1}, and an off-by-one objection that rests on reading it that way is a misreading of the library, not a defect; items cite by [L#] into a Facts and Assumptions block; a definition may discharge its own well-definedness inline or via justified_by. Also check the TITLE against what is actually proved: a title asserting more than the proof gives is a defect even when the Statement is correct. CITATION VOICE AND FIDELITY: every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction.

## Triage — the standing rule, binding

- **Non-negotiable, always report:** mathematical accuracy, logical validity,
  correct citation.
- **Explicitly acceptable, spend no effort and do NOT report:** minor citational
  quirks; logical gaps a competent reader closes **within 30 seconds**; other
  non-fatal quirks; imperfection at the level of the letter; prose style; page
  summary length; missing provenance URLs.

**Before alleging a cited dependency is too weak, quote the dependency text you
were given and show exactly what it fails to supply.** A refuter that asserts a
dependency is insufficient without quoting it is producing noise, and this
library's dominant real defect class — a citation of an item for a claim it does
not make — can only be established by that quotation.

**Read the Remarks with a numbered step's suspicion.** Measured across this
audit, Remark and Facts-block prose, not numbered steps, is where nearly every
confirmed fatal defect in this corpus has been found. A Remark that asserts how
some *other* item in the library uses this one is a frequent falsehood: you
cannot check those from here, so say so rather than passing them.

**Choice discipline matters in this wave.** Wave 5 is real analysis and general
topology: countability axioms, separation axioms, nets, filters, ultrafilters
and function spaces. Countable choice, dependent choice, the ultrafilter lemma
and full AC are genuinely different hypotheses here, and this library records
which one an argument spends. A proof that silently uses a choice principle its
Statement does not scope, or a Statement scoping a principle strictly stronger
or weaker than the proof actually needs, is a FATAL defect of the
missing-hypothesis class — not a quibble. Equally, the library has already
adopted AC, countable choice and dependent choice as foundational axioms, so
using one *within its declared scope* is not a defect.

## Output — the only thing you return

Plain markdown. For each finding, one block:

```
### FINDING 1, 2, 3, ... — FATAL or NONFATAL — location: title / Statement / [L#] / step X.Y / Remark
CLAIM AS WRITTEN: "<verbatim quote of the offending text>"
WHY IT FAILS: <the concrete false claim, unlicensed inference, missing
hypothesis, or inaccurate citation — with the verbatim dependency text that
does or does not license it>
WHAT WOULD FIX IT: <the smallest correction you can name, or "not obvious">
```

If, having genuinely tried to refute it, you find nothing fatal, say so plainly
and list what you checked. Finish with one line: `N fatal, M nonfatal`.

A confident empty reading is worse than useless here. Either name a concrete
defect with its quotation, or state clearly that you could not find one.


---

# This dispatch

# Adversarial proof reading — `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`

## The item under review, in full

`items/thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.md`

```markdown
---
id: thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
kind: theorem
title: "For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-pseudocompact-euclidean-subset-is-bounded, lem-pseudocompact-euclidean-subset-is-closed, thm-heine-borel-rn, thm-compactness-under-continuous-maps, def-pseudocompact-space, thm-compactness-agrees-with-metric-compactness]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Extreme value theorem"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $A\subseteq\mathbb{R}^n$ be nonempty. The following are equivalent.

1. $A$ is compact.
2. $A$ is closed and bounded.
3. $A$ is pseudocompact.
4. Every continuous $f:A\to\mathbb{R}$ attains a maximum and a minimum on $A$.

This theorem is a ZF statement. The nonemptiness hypothesis is necessary for condition 4, because the empty image has neither a maximum nor a minimum.

## Facts & Assumptions

**Given:** A nonempty subset $A\subseteq\mathbb{R}^n$ with $n\ge1$, carrying the Euclidean subspace topology.

[L1] In Euclidean space, a subset is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L2] A pseudocompact Euclidean subset is bounded and is closed ([[lem-pseudocompact-euclidean-subset-is-bounded]], [[lem-pseudocompact-euclidean-subset-is-closed]]).

[L3] A continuous real-valued map on a nonempty compact topological space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]], claim 2).

[L4] Pseudocompactness means that every continuous real-valued function has bounded image ([[def-pseudocompact-space]]).

[L5] Compactness for the Euclidean metric and for its metric topology is the same condition ([[thm-compactness-agrees-with-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 Conditions 1 and 2 are equivalent by [L1] and [L5]. [L1, L5]

1.2 Condition 3 implies condition 2 by [L2]. [L2]

1.3 Suppose condition 1 holds. Every continuous $f:A\to\mathbb{R}$ then attains a maximum and a minimum by [L3], so condition 4 holds. [L3]

1.4 Suppose condition 4 holds. For every continuous $f:A\to\mathbb{R}$, its maximum and minimum bound $f[A]$, so $A$ is pseudocompact and condition 3 holds. [L4]

2.1 The implications $1\Leftrightarrow2$, $3\Rightarrow2\Rightarrow1$, and $1\Rightarrow4\Rightarrow3$ prove all four conditions equivalent. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-pseudocompact-euclidean-subset-is-bounded` — lemma — A pseudocompact subset of $\\mathbb{R}^n$ is bounded

(statement provenance: ai-altered)

### Statement

Let $n\ge1$. Every pseudocompact subset $A\subseteq\mathbb{R}^n$ is bounded for the Euclidean metric.

### `lem-pseudocompact-euclidean-subset-is-closed` — lemma — A pseudocompact subset of $\\mathbb{R}^n$ is closed

(statement provenance: ai-altered)

### Statement

Let $n\ge1$. Every pseudocompact subset $A\subseteq\mathbb{R}^n$ is closed in the Euclidean topology.

### `thm-heine-borel-rn` — theorem — Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line

(statement provenance: ai-altered)

### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

### `thm-compactness-under-continuous-maps` — theorem — A continuous image of a compact space is compact; a continuous real-valued map on a nonempty compact space attains a maximum and a minimum; and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), and let $\mathbb{R}$ carry its usual topology, the
metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). Then:

1. **Continuous images.** If $f : X \to Y$ is continuous
   ([[def-continuous-map-top]]) and $(X, \mathcal{T}_X)$ is compact
   ([[def-compact-space]]), then $f[X]$ is a compact subset of $Y$. More
   generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a
   compact subset of $Y$.
2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and
   $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum
   ([[def-max-min]]): there are $x_{\max}, x_{\min} \in X$ with
   $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$
3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y,
   \mathcal{T}_Y)$ is Hausdorff ([[def-hausdorff-space]]) and $f : X \to Y$ is a
   continuous bijection, then $f$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]).

Nonemptiness in claim 2 is a hypothesis and not an oversight: for
$X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No
choice principle is used**: the one selection made below is over a finite index
set, where [[lem-finite-choice]] is a theorem of ZF.

### `def-pseudocompact-space` — definition — Pseudocompact space: every continuous real-valued function has bounded image

(statement provenance: ai-altered)

### Definition

A topological space $X$ is **pseudocompact** when every continuous map $f:X\to\mathbb{R}$ ([[def-continuous-map-top]]) has bounded image: there are reals $\ell,u$ with $\ell\le f(x)\le u$ for every $x\in X$ ([[def-bounded-set]]).

A subset $A$ of a topological space is **pseudocompact** when $A$, equipped with its subspace topology, is pseudocompact ([[def-subspace-topology-top]]).

### `thm-compactness-agrees-with-metric-compactness` — theorem — For a metric space with its metric topology, compactness in the topological sense is compactness in the metric sense, and the two notions of compact subset coincide

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{T}_d$ be
its metric topology ([[def-metric-topology]]), so that $(X, \mathcal{T}_d)$ is a
topological space ([[def-topological-space]]) and is metrizable
([[def-metrizable-space]]). Then:

1. $(X,d)$ is a compact metric space ([[def-metric-compactness]]) **if and only
   if** $(X, \mathcal{T}_d)$ is a compact topological space
   ([[def-compact-space]]).
2. For every $A \subseteq X$: $A$ is a compact subset of the metric space
   $(X,d)$ if and only if $A$ is a compact subset of the topological space
   $(X, \mathcal{T}_d)$, the two readings of "compact subset" being the metric
   subspace $(A, d_A)$ ([[def-isometry-and-metric-embedding]]) and the topological
   subspace $(A, (\mathcal{T}_d)_A)$ ([[def-subspace-topology-top]]).

**Nothing here is a coincidence and nothing is transported.** The open-cover
condition of [[def-metric-compactness]] quantifies over families of subsets open
in $(X,d)$, and by [[def-metric-topology]] those are exactly the members of
$\mathcal{T}_d$; so the two conditions are not merely equivalent, they are the
same condition written twice. No choice principle is used.

## What to return

Read `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
