---
id: thm-finite-f-divergence-data-processing
kind: theorem
title: Finite data processing for f-divergences
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-probability-vector
  - def-finite-stochastic-kernel
  - def-finite-f-divergence
  - lem-convex-perspective-is-subadditive
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.2, Theorems 7.3–7.4"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, Definition 3 and support extension (35)–(39)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Statement

Let $P,Q$ be probability vectors on a finite nonempty alphabet $\mathcal X$,
let $K$ be a stochastic kernel from $\mathcal X$ to a finite nonempty
alphabet $\mathcal Y$, and let $f$ be a convex generator as in
[[def-finite-f-divergence]]. Then
$$D_f(PK\|QK)\le D_f(P\|Q),$$
with both divergences interpreted using the zero and singular-support
conventions of that definition.

## Facts & Assumptions

**Given:** The vectors $P,Q$, the kernel $K$, and the convex generator $f$
in the Statement.

[F1] [[def-finite-probability-vector]]: $P$ and $Q$ have nonnegative
coordinates summing to one.

[F2] [[def-finite-stochastic-kernel]]: $K(y\mid x)\ge0$,
$\sum_yK(y\mid x)=1$, and $(PK)_y=\sum_xp_xK(y\mid x)$, with the same
formula for $QK$.

[F3] [[def-finite-f-divergence]]: $D_f(P\|Q)$ is the sum of the closed
perspective terms for each coordinate, including $p_xf_\infty$ when
$q_x=0<p_x$.

[F4] [[lem-convex-perspective-is-subadditive]]: the closed perspective is
$\Pi_f(a,b)=bf(a/b)$ for $b>0$, with the stated boundary values; it is
positively homogeneous and its value at a coordinatewise sum is at most
the sum of the values.

## Proof

1.1 For each $y\in\mathcal Y$ and $x\in\mathcal X$, set
$a_{x,y}=p_xK(y\mid x)$ and $b_{x,y}=q_xK(y\mid x)$. By [F2],
$(PK)_y=\sum_xa_{x,y}$ and $(QK)_y=\sum_xb_{x,y}$. Applying [F4] at each
$y$ gives $\Pi_f((PK)_y,(QK)_y)\le
\sum_x\Pi_f(p_xK(y\mid x),q_xK(y\mid x))$.
Summing this finite family of inequalities over $y$ is valid for extended
real terms because no term is $-\infty$. [F1, F2, F3, F4, given, algebra]

2.1 For any $\lambda>0$, the definition of $\Pi_f$ gives
$\Pi_f(\lambda a,\lambda b)=\lambda\Pi_f(a,b)$, including $a=0$ or
$b=0; when $\lambda=0$, both sides are interpreted as zero. Thus, for each
$x$, the row-sum condition in [F2] yields
$\sum_y\Pi_f(p_xK(y\mid x),q_xK(y\mid x))
=\sum_yK(y\mid x)\Pi_f(p_x,q_x)=\Pi_f(p_x,q_x)$.
Substituting these identities into step 1.1 and summing over the finite
alphabet $\mathcal X$ proves $D_f(PK\|QK)\le D_f(P\|Q)$ by [F3]. [F2,
F3, step 1.1, algebra] ∎
