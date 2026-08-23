---
id: prop-vandermonde-transforms-by-sign-under-the-galois-action
kind: proposition
title: "The Vandermonde product transforms by the sign of the root permutation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-galois-group-embeds-in-the-symmetric-group-on-the-roots, def-vandermonde-polynomial,
       def-inversions-inversion-number-and-sign, thm-sign-is-a-homomorphism,
       thm-transpositions-generate-the-symmetric-group,
       thm-parity-of-transposition-factorisations-is-well-defined]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 4.1"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $f\in F[x]$ be separable of degree $n$, order its roots as $\alpha_1,\ldots,\alpha_n$, and put

$$\delta:=\prod_{1\le i<j\le n}(\alpha_i-\alpha_j).$$

For $\sigma$ in the Galois group, let the same symbol denote its induced root permutation. Then $\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$ for the Vandermonde product of an ordered root list. Consequently $\delta^2$ is fixed by the Galois group.

## Facts & Assumptions

**Given:** The faithful root permutation action of [[thm-galois-group-embeds-in-the-symmetric-group-on-the-roots]] and the Vandermonde product of [[def-vandermonde-polynomial]].

[F1] The sign of $\sigma$ is the integer $\operatorname{sgn}(\sigma):=(-1)^{\operatorname{inv}(\sigma)}\in\{+1,-1\}$, where $\operatorname{inv}(\sigma)$ counts the pairs $i<j$ with $\sigma(i)>\sigma(j)$ ([[def-inversions-inversion-number-and-sign]]).

[L1] For every natural $n$, the function $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a group homomorphism ([[thm-sign-is-a-homomorphism]]).

[L2] Every permutation of a finite set is a product of transpositions, and the identity is represented by the empty product ([[thm-transpositions-generate-the-symmetric-group]]).

[L3] If $\sigma=\tau_1\cdots\tau_r$ is any factorisation of a finite permutation into transpositions, then $(-1)^r=(-1)^{\operatorname{inv}(\sigma)}$ ([[thm-parity-of-transposition-factorisations-is-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 Swapping two entries of the ordered root list reverses the factor belonging to that pair, while the remaining affected factors exchange in pairs; hence a transposition multiplies $\delta$ by $-1$. [algebra]

1.2 Taking the one-factor factorisation $\tau=\tau$ in [L3] gives $(-1)^{\operatorname{inv}(\tau)}=-1$, so $\operatorname{sgn}(\tau)=-1$ for every transposition $\tau$ by [F1]. [F1, L3]

2.1 By [L2] write $\sigma=\tau_1\cdots\tau_r$ as a product of transpositions, and apply step 1.1 once for each factor: each application multiplies the current Vandermonde product by $-1$, so $\sigma(\delta)=(-1)^r\delta$. [step 1.1, L2]

3.1 By [L1] and step 1.2, $\operatorname{sgn}(\sigma)=\operatorname{sgn}(\tau_1)\cdots\operatorname{sgn}(\tau_r)=(-1)^r$, so step 2.1 gives $\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$. For $n=0$ or $n=1$ the factorisation is empty by [L2], the product defining $\delta$ is likewise empty and equals $1$, and the sign is $1$, so the identity holds there as $1=1$. [step 2.1, step 1.2, L1, L2]

4.1 Squaring the identity of step 3.1 removes the sign, so $\sigma(\delta^2)=\delta^2$ for every $\sigma$. A root equal to zero creates no exception; separability ensures distinct roots and hence $\delta\ne0$. [step 3.1, algebra] ∎
