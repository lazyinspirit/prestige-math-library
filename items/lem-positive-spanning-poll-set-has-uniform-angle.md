---
id: lem-positive-spanning-poll-set-has-uniform-angle
kind: lemma
title: "A finite positive-spanning poll set has a positive uniform angle"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-positive-spanning-poll-set-and-angle
  - def-euclidean-inner-product
  - lem-standard-basis-of-f-n
  - lem-finite-sum-laws
  - thm-reals-ordered-field
  - lem-of-zero-mult
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-metric-space
  - def-metric-topology
  - def-metric-ball
  - def-metric-bounded-diameter
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - lem-finite-set-has-max
  - def-max-min
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every finite positive-spanning list $D=(d_1,\ldots,d_m)$ in $\mathbb R^n$, $n\ge1$, the score $\psi_D(v)=\max_i(-\langle v,d_i\rangle)$ on the unit sphere attains a strictly positive minimum. Write this minimum as $\kappa_D>0$. Thus for every $v\in\mathbb R^n$ there is $d_i\in D$ with $-\langle v,d_i\rangle\ge\kappa_D\|v\|_2$.

## Facts & Assumptions

**Given:** Positive spanning and directional score [[def-positive-spanning-poll-set-and-angle]], Euclidean geometry [[def-euclidean-inner-product]], compactness and extrema ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F1] For every unit vector $u$, positive spanning writes $-u=\sum_i\lambda_i d_i$ with $\lambda_i\ge0$ ([[def-positive-spanning-poll-set-and-angle]]).

[F2] Cauchy–Schwarz gives $|\langle u,d_i\rangle|\le\|u\|_2\|d_i\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] By the coordinatewise vector-sum convention, $\langle u,\sum_i\lambda_i d_i\rangle=\sum_{k<n}u_k\sum_{j<m}\lambda_{j+1}(d_{j+1})_k$. Finite distributivity and reordering the two finite sums, using finite-sum additivity/scaling and induction on their lengths, gives $\sum_i\lambda_i\langle u,d_i\rangle$. A finite sum of nonnegative real terms is nonnegative ([[def-positive-spanning-poll-set-and-angle]], [[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

[F4] If $M=\max_i|a_i-b_i|$ for two nonempty finite lists, then $a_i\le b_i+M\le\max_jb_j+M$ for each $i$; taking maxima and reversing the lists gives $|\max_i a_i-\max_i b_i|\le M$ ([[lem-finite-set-has-max]], [[def-max-min]]).

[F5] The unit sphere is nonempty, closed, and bounded. For $n\ge1$, the standard vector $e_0$ has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]], [[def-euclidean-inner-product]]). If $\|x\|_2\ne1$, choose $\varepsilon=|\|x\|_2-1|/2$; the reverse triangle inequality shows every $y$ with $d_2(x,y)<\varepsilon$ also has $\|y\|_2\ne1$, so the complement is open. Every unit vector lies in $B_2(0,2)$, so the sphere is bounded. Hence it is compact by Heine–Borel ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]], [[thm-heine-borel-rn]]).

[F6] [[thm-reals-ordered-field]] makes $\mathbb R$ a totally ordered field, in particular the product of two strictly positive reals is positive; [[lem-of-zero-mult]] gives multiplication by zero. Hence if $a,b\ge0$, either one is zero and $ab=0$ (using field commutativity if needed), or both are strictly positive and $ab>0$. Thus $ab\ge0$.

## Proof

1.1 Taking inner products of [F1] with $u$ and using [F3] gives $-1=\sum_i\lambda_i\langle u,d_i\rangle$. Since all $\lambda_i\ge0$, at least one index with positive coefficient has $\langle u,d_i\rangle<0$; otherwise every summand is nonnegative by [F6] and [F3] makes the sum nonnegative, a contradiction. Hence $\psi_D(u)>0$ for every unit $u$. [F1, F3, F6, given, algebra]

2.1 By [F4], $|\psi_D(u)-\psi_D(w)|\le\max_i|\langle u-w,d_i\rangle|$, and [F2] bounds the right side by $D_{\max}\|u-w\|_2$, so the score is continuous. By [F5], the unit sphere is nonempty and compact. The extreme-value theorem gives a minimum attained at some unit $u_0$; step 1.1 makes that attained value strictly positive. For nonzero $v$, apply this bound to $u=v/\|v\|_2$ and multiply by $\|v\|_2$; for $v=0$ the inequality is immediate. [F2, F4, F5, step 1.1, given, algebra] ∎

