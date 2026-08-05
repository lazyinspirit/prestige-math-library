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
