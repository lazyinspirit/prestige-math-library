---
id: prop-brascamp-lieb-for-parallel-plates
kind: proposition
title: Brascamp–Lieb Estimate for Parallel Families of Plates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- thm-geometric-brascamp-lieb-finiteness-criterion
- thm-holder-inequality-for-integrals
- def-moment-curve-plates-and-osculating-subspaces
- def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§6, Proposition 6.2, pp. 640–641: deduction of a plate inequality from
      the geometric Brascamp–Lieb inequality.'
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1\le k\le n-1$, $m\ge1$, $R\ge1$, and let $V_1,\ldots,V_m$ be $k$-dimensional linear subspaces of $\mathbb R^n$ satisfying $\dim W\le\frac{n}{km}\sum_{j=1}^m\dim(\pi_j(W))$ for every linear subspace $W\subseteq\mathbb R^n$, where $\pi_j$ is orthogonal projection onto $V_j$. Let $B_{4R}\subset\mathbb R^n$ be a ball of radius $4R$. For each $j$, let $\mathcal P_j$ be a finite family of translated rectangular boxes with $k$ orthogonal axes of length $R^{1/2}$ spanning $V_j$ and the remaining $n-k$ orthogonal axes of length $R$ spanning $V_j^\perp$, all contained in $B_{4R}$; repeated boxes are allowed. For nonnegative coefficients $c_P$, set $F_j=\sum_{P\in\mathcal P_j}c_P\mathbf1_P$ and write $\operatorname{av}_B f=|B|^{-1}\int_Bf$. Then the plate moment satisfies
$$\operatorname{av}_{B_{4R}}\prod_{j=1}^mF_j(x)^{n/(km)}\,dx\le C(V_1,\ldots,V_m)\prod_{j=1}^m(\operatorname{av}_{B_{4R}}F_j(x)\,dx)^{n/(km)}.$$
The following scalar-average consequence also holds:
$$\left(\operatorname{av}_{B_{4R}}\left|\prod_{j=1}^mF_j(x)\right|^{1/(2m)}dx\right)^{2n/k}\le C(V_1,\ldots,V_m)\left(\prod_{j=1}^m\left(\operatorname{av}_{B_{4R}}F_j(x)\,dx\right)^{1/(2m)}\right)^{2n/k},$$
where the constant is independent of $R$, the plate families, and their coefficients.

## Statement references

[Geometric Brascamp–Lieb criterion]([[thm-geometric-brascamp-lieb-finiteness-criterion]])

[Moment-curve plate convention]([[def-moment-curve-plates-and-osculating-subspaces]])

[BDG, Proposition 6.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)




## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The dimension condition gives the geometric Brascamp–Lieb inequality for all $L^2(V_j)$ inputs ([[thm-geometric-brascamp-lieb-finiteness-criterion]]).

[F2] Holder holds on the probability space with measure $|B_{4R}|^{-1}dx$ ([[thm-holder-inequality-for-integrals]]).

## Proof

1.1 Put $a=n/(km)$. Project each plate $P\in\mathcal P_j$ orthogonally onto $V_j$ to obtain a translated $k$-cube $Q_P$ of volume $R^{k/2}$. Define $g_j=(\sum_{P\in\mathcal P_j}c_P\mathbf1_{Q_P})^{1/2}$. Nonnegativity gives $F_j\le(g_j\circ\pi_j)^2$, and finite summation gives $\|g_j\|_2^2=R^{k/2}\sum_{P\in\mathcal P_j}c_P$. Apply [F1] and raise to power $2n/k$ to obtain $\int_{B_{4R}}\prod_jF_j^a\le C R^{n/2}\prod_j(\sum_{P\in\mathcal P_j}c_P)^a$. This works directly for real nonnegative weights and repeated plates. [given, F1, construct, algebra]

2.1 Each plate has volume $R^{n-k/2}$ and lies in $B_{4R}$, so $\operatorname{av}_{B_{4R}}F_j=R^{n-k/2}|B_{4R}|^{-1}\sum_{P\in\mathcal P_j}c_P$. Since $|B_{4R}|=|B_1|4^nR^n$ and $ma=n/k$, dividing the preceding integral bound by $|B_{4R}|$ gives exactly the asserted plate moment, after absorbing a dimensional constant. Empty families or zero coefficients give zero on both sides. [given, step 1.1, algebra]

3.1 On the same probability space Holder with the $2m$ factors $F_j^{1/(2m)}$ and $m$ constant functions $1$ gives $\operatorname{av}_{B_{4R}}\prod_jF_j^{1/(2m)}\le\prod_j(\operatorname{av}_{B_{4R}}F_j)^{1/(2m)}$. Raising to $2n/k$ proves the retained scalar-average bound, even with constant $1$; enlarge the moment constant to at least $1$ to use one constant in both conclusions. [given, F2, algebra] ∎
