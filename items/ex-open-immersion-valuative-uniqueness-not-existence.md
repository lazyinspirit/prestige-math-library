---
id: ex-open-immersion-valuative-uniqueness-not-existence
kind: example
title: An open immersion has valuative uniqueness but not existence
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-separatedness-of-open-and-closed-immersions, lem-separated-implies-valuative-uniqueness, def-valuative-diagram-separatedness, def-discrete-valuation, def-discrete-valuation-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Theorem 13.7.4 and Exercise 13.7.A, printed p.383"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Lemma 26.22.1 and Section 26.23, printed pp.44-45"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $k$ be a field and let
$j:D(t)=\operatorname{Spec}k[t,t^{-1}]\hookrightarrow\operatorname{Spec}k[t]$
be the inclusion of the complement of the origin. Then $j$ is an open
immersion, hence separated, so every valuative diagram for $j$ has at most one
lift. Existence can fail: the diagram with $R=k[t]_{(t)}\subseteq k(t)=K$, base
map $\operatorname{Spec}R\to\operatorname{Spec}k[t]$ the localization
$k[t]\to k[t]_{(t)}$, and generic map $\operatorname{Spec}K\to D(t)$
corresponding to $k[t,t^{-1}]\to K$, $t\mapsto t$, has **no** lift to $D(t)$.
Thus uniqueness is strictly weaker than existence, exactly as the criterion of
separatedness asserts.

## Facts & Assumptions

**Given:** A field $k$, the open immersion $j:D(t)\hookrightarrow\operatorname{Spec}k[t]$ of the complement of the origin, and the ring $R=k[t]_{(t)}$ with fraction field $K=k(t)$.

[F1] Every open immersion, every closed immersion and every immersion of schemes is separated as a morphism. ([[lem-separatedness-of-open-and-closed-immersions]])

[F2] If $f:X\to S$ is separated, then every valuative diagram for $f$ has at most one lift. ([[lem-separated-implies-valuative-uniqueness]])

[F3] A valuative diagram for $f:X\to S$ consists of a valuation ring $R\subseteq K$ with fraction field $K$, a morphism $\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ forming a commutative square; a lift is a compatible $\operatorname{Spec}R\to X$. ([[def-valuative-diagram-separatedness]])

[F4] The order of vanishing at $0$ defines a discrete valuation $v$ on $k(t)$ with $v(k(t)^\times)=\mathbb Z$, and $k[t]_{(t)}$ is its valuation ring, so it is a discrete valuation ring with fraction field $k(t)$, not a field. ([[def-discrete-valuation]], [[def-discrete-valuation-ring]])



## Verification

1.1 The morphism $j$ is an open immersion, so by [F1] it is separated; hence [F2] gives at most one lift for every valuative diagram for $j$. [F1, F2]

1.2 By [F4] the ring $R=k[t]_{(t)}$ is a discrete valuation ring with fraction field $K=k(t)$, so $R\subseteq K$ is a valuation ring for the purposes of [F3]. [F3, F4]

2.1 Let $\operatorname{Spec}K\to D(t)$ correspond to the ring map $k[t,t^{-1}]\to K$ with $t\mapsto t$; its image is the generic point, which lies in $D(t)$. Let $\operatorname{Spec}R\to\operatorname{Spec}k[t]$ correspond to the localization $k[t]\to R$. The two composites $\operatorname{Spec}K\to\operatorname{Spec}k[t]$ agree, so this is a valuative diagram for $j$ in the sense of [F3]. [F3, step 1.2, given]

3.1 Suppose there were a lift $u:\operatorname{Spec}R\to D(t)$. Then $u$ corresponds to a ring homomorphism $\psi:k[t,t^{-1}]\to R$ with $\psi(t)=t$, since composing $u$ with $j$ must give the base map, whose corresponding ring map is the localization $k[t]\to R$. [F3, step 2.1, algebra]

4.1 Here $t$ is a unit of $k[t,t^{-1}]$, so $\psi(t)$ must be a unit of $R$, every ring homomorphism sending units to units. But the image of $t$ under the localization $k[t]\to R$ is the element $t\in R$, which is not a unit: the maximal ideal of $R$ is $(t)$, so $t$ lies in the maximal ideal of the local ring $R$ and cannot be invertible there. [step 1.2, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 contradict each other, so no lift exists; combined with step 1.1, the displayed valuative diagram has exactly zero lifts although every valuative diagram for $j$ has at most one. This shows that the uniqueness part of the valuative criterion carries no existence assertion. [step 1.1, step 3.1, step 4.1] ∎
