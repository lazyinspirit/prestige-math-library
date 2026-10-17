---
id: lem-positive-spanning-poll-set-has-uniform-angle
kind: lemma
title: "A finite positive-spanning poll set has a positive uniform angle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-positive-spanning-poll-set-and-angle
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
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
---

## Statement

For every finite positive-spanning list $D=(d_1,\ldots,d_m)$ in $\mathbb R^n$, $n\ge1$, the score $\psi_D(v)=\max_i(-\langle v,d_i\rangle)$ on the unit sphere attains a strictly positive minimum. Write this minimum as $\kappa_D>0$. Thus for every $v\in\mathbb R^n$ there is $d_i\in D$ with $-\langle v,d_i\rangle\ge\kappa_D\|v\|_2$.

## Facts & Assumptions

**Given:** Positive spanning and directional score [[def-positive-spanning-poll-set-and-angle]], Euclidean geometry [[def-euclidean-inner-product]], compactness and extrema ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F1] For every unit vector $u$, positive spanning writes $-u=\sum_i\lambda_i d_i$ with $\lambda_i\ge0$ ([[def-positive-spanning-poll-set-and-angle]]).

[F2] Cauchy–Schwarz gives $|\langle u,d_i\rangle|\le\|u\|_2\|d_i\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 Taking inner products of [F1] with $u$ gives $-1=\sum_i\lambda_i\langle u,d_i\rangle$. Since all $\lambda_i\ge0$, at least one index with positive coefficient has $\langle u,d_i\rangle<0$; otherwise the sum would be nonnegative. Hence $\psi_D(u)>0$ for every unit $u$. [F1, given, algebra]

2.1 By [F2], $|\psi_D(u)-\psi_D(w)|\le\max_i|\langle u-w,d_i\rangle|\le D_{\max}\|u-w\|_2$, so the score is continuous. The unit sphere is nonempty, closed, and bounded, hence compact by Heine–Borel. The extreme-value theorem gives a minimum attained at some unit $u_0$; step 1.1 makes that attained value strictly positive. For nonzero $v$, apply this bound to $u=v/\|v\|_2$ and multiply by $\|v\|_2$; for $v=0$ the inequality is immediate. [F2, step 1.1, given, algebra] ∎

