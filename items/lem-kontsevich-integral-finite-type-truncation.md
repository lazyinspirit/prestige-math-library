---
id: lem-kontsevich-integral-finite-type-truncation
kind: lemma
title: Finite-type truncations of the Kontsevich integral
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-countable-choice
  - lem-kontsevich-braid-and-knot-isotopy-invariance
  - thm-kontsevich-universal-associated-graded-proof
justified_by: []
dependency_level: 11
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §8.8.1
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.6
      url: https://arxiv.org/pdf/q-alg/9702009v1
---

## Statement

Assume countable choice, and let $I_m(K)$ be the degree-$m$ homogeneous coefficient of the normalized unframed Kontsevich series $I(K)$ of a smooth oriented knot type $K$. For $n\ge0$, put $I_{\le n}(K)=\sum_{m=0}^{n}I_m(K)$. A function on knot types is of type at most $n$ when its alternating resolution sum on every $(n+1)$-singular knot is zero. Then $I_{\le n}$ is a type-at-most-$n$ invariant with values in the complexified direct sum $\bigoplus_{m=0}^{n}(\mathcal A_m^{\mathrm{un}}\otimes_{\mathbb Q}\mathbb C)$ of the rational unframed degree-$m$ chord-diagram modules. For every $n$-singular knot with chord diagram $D$, its $n$-fold finite difference satisfies $D_n I_{\le n}(K)=D$. In particular, the degree-$n$ symbol is the identity on rational chord diagrams after extending scalars to $\mathbb C$; no rational-coefficient claim is made about $I_m(K)$.

## Statement references

[[def-singular-knot-and-vassiliev-derivative|Finite differences and type at most n]]

[[thm-kontsevich-universal-associated-graded-proof|Leading symbol of the normalized integral]]

[[lem-kontsevich-braid-and-knot-isotopy-invariance|Ambient-isotopy invariance under countable choice]]

[Chmutov, Duzhin, and Mostovoy, §8.8.1, printed pp. 239–240](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.6, PDF pp. 16–17](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** Countable choice, a degree cutoff $n$, and the unframed normalized series of a strict Morse presentation of each oriented knot type.

[A1] [[def-countable-choice]]: countable choice is assumed only through the ambient-isotopy invariance supplier.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: $I(K)$ is the degreewise series in the completed unframed 4T+1T chord-diagram module.

[F2] [[def-singular-knot-and-vassiliev-derivative]]: $D_kF(K)$ is the alternating sum over the $2^k$ resolutions of a $k$-singular knot; type at most $n$ means $D_{n+1}F=0$ on every $(n+1)$-singular knot.

[F3] [[thm-kontsevich-universal-associated-graded-proof]]: on a $k$-singular knot with chord diagram $D$, $D_kI(K)$ has zero degrees below $k$ and degree-$k$ component exactly $D$.

[F4] [[lem-kontsevich-braid-and-knot-isotopy-invariance]]: under countable choice, $I(K)$ is independent of the strict Morse presentation and is invariant under ambient isotopy of oriented knots.

[F5] [[def-framed-chord-diagram-and-four-term-relations]]: each degreewise unframed chord-diagram module is the rational 4T+1T quotient, and its complexification is the target of $I_m$.

## Proof

**Given:** As above. Let $\pi_{\le n}$ denote projection to homogeneous degrees $0,1,\ldots,n$; it is linear and commutes with finite sums.

1.1 By [F4] the normalized series is invariant under ambient isotopy and independent of its strict Morse presentation. Applying the degree projection $\pi_{\le n}$ preserves equality, so $I_{\le n}=\pi_{\le n}I$ is a well-defined invariant on oriented knot types with the stated target. [A1, F1, F4, F5, algebra]

2.1 Let $K$ be an $(n+1)$-singular knot with chord diagram $D$. By [F3], every homogeneous component of $D_{n+1}I(K)$ in degree at most $n$ is zero. Since $\pi_{\le n}$ commutes with the alternating resolution sum, $D_{n+1}I_{\le n}(K)=\pi_{\le n}D_{n+1}I(K)=0$. This is exactly the type-at-most-$n$ condition from [F2]. [F2, F3, step 1.1, algebra]

3.1 Let $K$ instead be $n$-singular with diagram $D$. By [F3], the projection of $D_nI(K)$ to degrees at most $n$ has no terms below degree $n$ and has degree-$n$ term $D$. Therefore $D_nI_{\le n}(K)=\pi_{\le n}D_nI(K)=D$. For $n=0$, the same statement is the degree-zero unit term of [F1]. Thus the degree-$n$ symbol of the truncation is the identity on rational chord diagrams, with coefficients regarded in their complexification. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
