---
id: cex-interior-of-a-union-is-larger
kind: counterexample
title: "In $\\mathbb{R}$ the interiors of $\\mathbb{Q}$ and of its complement are both empty while the interior of their union is everything"
status: draft
origin: session
deps: [lem-interior-closure-boundary-identities, def-interior-closure-boundary-top, def-metrizable-space,
       lem-rat-embeds-dense, lem-real-line-is-a-metric-space, cor-interval-uncountable, thm-rationals-countable,
       lem-subset-of-countable, def-countable, def-interval, def-metric-ball, def-metric-topology,
       thm-metric-open-set-algebra, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "interior of a union is strictly larger"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement refuted

**Refuted:** that $\operatorname{int}(A \cup B) = \operatorname{int}(A) \cup \operatorname{int}(B)$.
Claim 3 of [[lem-interior-closure-boundary-identities]] asserts only the
inclusion $\operatorname{int}(A) \cup \operatorname{int}(B) \subseteq \operatorname{int}(A \cup B)$,
and the gap can be the whole space.

**Witness.** In $\mathbb{R}$ with its usual topology
([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]) take
$A := \mathbb{Q}$, the image of the rationals in $\mathbb{R}$, and
$B := \mathbb{R} \setminus \mathbb{Q}$. Then

$$\operatorname{int}(A) = \operatorname{int}(B) = \varnothing, \qquad \operatorname{int}(A \cup B) = \operatorname{int}(\mathbb{R}) = \mathbb{R} .$$

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the set $\mathbb{Q} \subseteq \mathbb{R}$ of rationals and its complement $\mathbb{R} \setminus \mathbb{Q}$.

[A1] $\operatorname{int}(S)$ is the largest open subset of $S$; $\mathbb{R}$ is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L1] In the usual topology $B(x,r) = (x-r,\ x+r)$, balls are open, and a nonempty open set contains a ball ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]], [[def-interval]]).

[L2] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]], [[def-countable]]); $\mathbb{Q}$ is at most countable ([[thm-rationals-countable]]) and every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L3] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L4] $\operatorname{int}(A) \cup \operatorname{int}(B) \subseteq \operatorname{int}(A \cup B)$ in every topological space ([[lem-interior-closure-boundary-identities]], claim 3).

## Counterexample

**Proof technique:** direct.

1.1 A nonempty open subset of $\mathbb{R}$ contains a ball $(x-r,\ x+r)$ with $r > 0$, and $x - r < x + r$, so that ball is uncountable by [L2]. [L1, L2]

1.2 No nonempty open subset of $\mathbb{R}$ is contained in $\mathbb{R} \setminus \mathbb{Q}$: such a set would contain a ball $(x-r,\ x+r)$, and by [L3] there is a rational strictly between $x - r$ and $x + r$, which lies in that ball and not in $\mathbb{R} \setminus \mathbb{Q}$. [L1, L3]

1.3 $\mathbb{Q} \cup (\mathbb{R} \setminus \mathbb{Q}) = \mathbb{R}$, which is open, so $\operatorname{int}(\mathbb{Q} \cup (\mathbb{R} \setminus \mathbb{Q})) = \mathbb{R}$. [A1]

2.1 No nonempty open subset of $\mathbb{R}$ is contained in $\mathbb{Q}$: such a set would contain an uncountable ball by step 1.1, while every subset of $\mathbb{Q}$ is at most countable by [L2]. [step 1.1, L2]

3.1 By step 2.1 the only open subset of $\mathbb{Q}$ is $\varnothing$, so $\operatorname{int}(\mathbb{Q}) = \varnothing$; by step 1.2 the same holds for $\mathbb{R} \setminus \mathbb{Q}$, so $\operatorname{int}(\mathbb{R} \setminus \mathbb{Q}) = \varnothing$. [step 2.1, step 1.2, A1]

4.1 By steps 3.1 and 1.3 the left side of the inclusion of [L4] is $\varnothing \cup \varnothing = \varnothing$ and the right side is $\mathbb{R}$, so the inclusion is strict and the identity fails as badly as it can. [step 3.1, step 1.3, L4] ∎

## Remarks

- **The dual failure is the same witness read through complements.** Since $\mathbb{R} \setminus \operatorname{int}(S) = \overline{\mathbb{R} \setminus S}$ ([[def-interior-closure-boundary-top]]), the computation above says $\overline{\mathbb{Q}} = \overline{\mathbb{R} \setminus \mathbb{Q}} = \mathbb{R}$ while $\overline{\mathbb{Q} \cap (\mathbb{R} \setminus \mathbb{Q})} = \overline{\varnothing} = \varnothing$; so the same pair witnesses the strictness of $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$.

- **Both sets are dense and neither is open.** A set with empty interior and full closure is *codense* and dense at once ([[def-dense-top]]); $\mathbb{Q}$ is the standard example, and its complement is another. Neither is nowhere dense, their closures being everything.

- **The cofinite witness on the general page is the same phenomenon with less machinery.** There $A = \{p\}$ and $B = X \setminus \{p\}$ already give a strict inclusion ([[lem-interior-closure-boundary-identities]]); the present pair is recorded because it is the failure a reader is most likely to have met, and because it needs the uncountability of intervals rather than a finiteness count.
