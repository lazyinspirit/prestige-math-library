---
id: thm-three-cochain-gauge-equivalence-2vect-g
kind: theorem
title: A normalized 3-cochain gives the gauge equivalence of 2Vect_G^omega
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-four-cocycle-twisted-monoidal-structure-on-2vect-g
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.16
      url: https://arxiv.org/pdf/1812.11933
---

## Statement

Let $\omega,\omega'$ be normalized 4-cocycles on a finite group $G$, and let $\beta:G^3\to\mathbb C^\times$ be a normalized 3-cochain. Define
$$\delta\beta(g,h,k,l)=\beta(h,k,l)\beta(gh,k,l)^{-1}\beta(g,hk,l)\beta(g,h,kl)^{-1}\beta(g,h,k).$$
If $\omega'=\omega\,\delta\beta$, then the identity on the underlying graded 2-category, with identity tensor and unit constraints and triple-input coherence modification $\beta(g,h,k)$, is a monoidal 2-equivalence $2\mathrm{Vect}^{\omega}_G\simeq2\mathrm{Vect}^{\omega'}_G$. Here $H^4(G;\mathbb C^\times)$ means normalized multiplicative 4-cocycles modulo coboundaries of normalized 3-cochains, with trivial $G$-action on $\mathbb C^\times$. Within this identity-on-grading gauge family, an untwisting to $\omega'=1$ exists exactly when $[\omega]=0$ in this quotient.

## Facts & Assumptions


**Given:** The structures in [[def-four-cocycle-twisted-monoidal-structure-on-2vect-g]] and a normalized 3-cochain $\beta$ with $\omega'=\omega\,\delta\beta$.

[F1] [[def-four-cocycle-twisted-monoidal-structure-on-2vect-g]]: A normalized multiplicative 4-cochain is a function $\omega:G^4\to k^\times$ equal to $1$ if any input is $e$, and it is a 4-cocycle when it satisfies the displayed five-variable equation.

## Proof

1.1 The multiplicative coboundary on a normalized 3-cochain is the five-factor expression in the statement. Its coboundary is $1$: writing $\delta=\prod_i d_i^{(-1)^i}$, where $d_0$ drops the first group element, $d_4$ drops the last, and each interior $d_i$ multiplies adjacent entries, the identities $d_jd_i=d_id_{j-1}$ for $i<j$ pair every factor of $\delta^2\beta$ with its inverse. The interior identities are exactly associativity in $G$. Hence $\omega\delta\beta$ is a 4-cocycle whenever $\omega$ is. Normalization of $\beta$ makes $\delta\beta$ equal to $1$ if any input is $e$. [given, algebra]

1.2 Define the underlying pseudofunctor to be the identity on objects, functors, and natural transformations; take its tensorator and unitator to be identity equivalences. For each triple of homogeneous input degrees $(g,h,k)$, define its associativity coherence 2-cell to be multiplication by $\beta(g,h,k)$. Extend to arbitrary objects by direct sums. Since scalar multiplication commutes with every linear map, these components are natural and define an invertible modification. [F1, given, construct]

2.1 On four homogeneous inputs, the monoidal 2-functor coherence equation compares the source pentagonator $\omega(g,h,k,l)$, the target pentagonator $\omega'(g,h,k,l)$, and the five triple-coherence components. Their ratio is $\beta(h,k,l)\beta(gh,k,l)^{-1}\beta(g,hk,l)\beta(g,h,kl)^{-1}\beta(g,h,k)=\delta\beta(g,h,k,l).$ Thus the coherence equation is precisely $\omega'=\omega\,\delta\beta$. Normalization gives the unit equations, and the same scalar identity on homogeneous summands gives the equation on all direct sums. The underlying functor is the identity, hence an equivalence; its inverse uses $\beta^{-1}$. [F1, given, step 1.2, algebra]

3.1 Conversely, in this gauge family the underlying functor, tensorator, and unitator are fixed as identities. Any normalized scalar triple-coherence modification is a normalized 3-cochain $\beta$, and its four-input coherence forces $\omega'/\omega=\delta\beta$ by step 2.1. Therefore $\omega$ can be untwisted by these data exactly when it is a coboundary, equivalently when $[\omega]=0$. This makes no claim about equivalences that change the grading group or the underlying 2-category. [F1, step 2.1, algebra] ∎
