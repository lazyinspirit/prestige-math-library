---
id: lem-two-sided-scaled-householder-similarity-error
kind: lemma
title: Left and right scaled Householder errors give a concrete similarity bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- lem-scaled-householder-step-meets-local-backward-error-premise
- lem-scaled-complex-householder-and-givens-local-backward-error
- thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: 'James Demmel, Math 221 Lecture 16: Hessenberg reduction and implicit Q'
    url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
  - title: David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration
    url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
dependency_level: 3
---

## Statement

Use a successful real or complex scaled Householder formation on active dimension $m\ge1$, with $0<u<1$ and $mu<1$. Let $P=P^*$ be its stored vector's exact unitary reflector, embedded in an $n\times n$ identity. Apply it on the left to the active rows of $H$, using the specified rounded rank-one order, and on the right to the active columns: compute each row dot $d_i=\operatorname{fl}(\sum_a H^L_{i,s_a}v_a)$, $c_a=\operatorname{fl}(\widehat\tau\overline v_a)$, the product $\operatorname{fl}(d_ic_a)$, and subtraction in that order. Every nonzero exact intermediate is normal; otherwise return the specified failure.

For real arithmetic put $b_m=(1+u)c_m+3u$, with $c_m,\kappa_m$ from [[lem-scaled-householder-step-meets-local-backward-error-premise]]. With an actual matrix-target column overwrite use $a_m=\kappa_m$; without such an overwrite use $a_m=b_m$. For complex arithmetic put $b_m=(1+u)c_U+3u$, with $c_U,\eta_H(m)$ from [[lem-scaled-complex-householder-and-givens-local-backward-error]], and use $a_m=\eta_H(m)$ or $a_m=b_m$, respectively. Set
$$\alpha_m=a_m+b_m+a_mb_m.$$
Then the complete computed similarity has a perturbation $E$ satisfying
$$H_+=P^*(H+E)P,\qquad \|E\|_F\le\alpha_m\|H\|_F.$$
Identity branches use $E=0$. If a separate deflation first zeros entries of $H$ by $D$, the same assertion holds with $H+D$ inside the similarity and the bound still uses $\|H\|_F$, since deleting entries cannot increase Frobenius norm. All explicit target zero writes are included in $a_m$; no unrelated matrix entry is overwritten when the reflector is formed from an external polynomial vector.

## Facts & Assumptions

**Given:** The stated successful fixed-order left/right arithmetic and active support, with the indicated actual matrix overwrite or separate-block use.

[F1] [[lem-scaled-householder-step-meets-local-backward-error-premise]] supplies the real matrix-target bound $\kappa_m$ and separate-block bound $(1+u)c_m+3u$.

[F2] [[lem-scaled-complex-householder-and-givens-local-backward-error]] supplies the corresponding complex $\eta_H(m)$ and separate-block coefficient, with right applications obtained by conjugate transposition.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]] preserves Frobenius norm under unitary multiplication.

## Proof

1.1 The applicable source [F1] or [F2] gives $H^L=PH+F_L$ with $\|F_L\|_F\le a_m\|H\|_F$. Embed the active block error by zeros. Untouched entries agree with the exact left product: earlier target columns have the prescribed exact zeros on the active rows, while a polynomial-vector initialization applies the separate-block update to the entire active row panel. Identity formation skips both updates. [given, F1, F2, algebra]

2.1 The stated right order has the same dot, real-coefficient and final-product error majorants as the adjoint separate-block application in [F1] or [F2]; product association reverses two complex scalar operands but leaves their norm error bound unchanged. Hence $H_+=H^LP+F_R$ with $\|F_R\|_F\le b_m\|H^L\|_F\le b_m(1+a_m)\|H\|_F$. By [F3], $\|H_+-PHP\|_F\le(a_m+b_m(1+a_m))\|H\|_F$. [F1, F2, F3, step 1.1, algebra]

3.1 Set $E=P(H_+-PHP)P$. Unitarity gives the displayed similarity and equal perturbation norm. If deflation occurred first, replace $H$ throughout by $H+D$ and use $\|H+D\|_F\le\|H\|_F$; record $D$ separately. Each coefficient is explicit and $O(mu)$ at fixed dimension, with all range and zero-branch hypotheses inherited from its actual source. [F3, step 2.1, algebra, construct] ∎

