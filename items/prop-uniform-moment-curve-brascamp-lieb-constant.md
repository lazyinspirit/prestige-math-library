---
id: prop-uniform-moment-curve-brascamp-lieb-constant
kind: proposition
title: Uniform Brascamp–Lieb Constant for Separated Moment-Curve Parameters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- thm-geometric-brascamp-lieb-finiteness-criterion
- thm-local-boundedness-of-brascamp-lieb-constant
- lem-osculating-subspaces-satisfy-brascamp-lieb-transversality
- def-moment-curve-plates-and-osculating-subspaces
- thm-heine-borel-rn
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§6, Proposition 6.4, pp. 642–643: uniformity of the geometric Brascamp–Lieb
      constant on separated parameter tuples.'
  - title: Jonathan Bennett, Neal Bez, Taryn C. Flock, and Sanghyuk Lee, Stability
      of the Brascamp–Lieb constant and applications
    url: https://arxiv.org/pdf/1508.07502
    locator: Local boundedness of the general Brascamp–Lieb constant, invoked in BDG
      Proposition 6.4.
axiom_use: Countable Choice is inherited from the proved local Brascamp–Lieb suppliers.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1\le k\le n-1$, $M_n=n!$, and $K\ge M_n$. For $t\in[0,1]$, set $\Gamma_n(t)=(t,t^2,\ldots,t^n)$ and $V_k(t)=\operatorname{span}\{\Gamma_n'(t),\ldots,\Gamma_n^{(k)}(t)\}$, equipped with its induced Euclidean measure. For a tuple $\mathbf t=(t_1,\ldots,t_{M_n})\in[0,1]^{M_n}$ with $|t_i-t_j|\ge K^{-1}$ for $i\ne j$, write $\pi_j$ for orthogonal projection onto $V_k(t_j)$ and let $C_{\mathrm{BL}}(\mathbf t)$ be the least constant in
$$\left\|\left(\prod_{j=1}^{M_n}|g_j\circ\pi_j|\right)^{1/M_n}\right\|_{L^{2n/k}(\mathbb R^n)}\le C_{\mathrm{BL}}(\mathbf t)\left(\prod_{j=1}^{M_n}\|g_j\|_{L^2(V_k(t_j))}\right)^{1/M_n}$$
for all $g_j\in L^2(V_k(t_j))$. Then
$$\sup_{\substack{\mathbf t\in[0,1]^{M_n}\\ |t_i-t_j|\ge K^{-1}\ (i\ne j)}}C_{\mathrm{BL}}(\mathbf t)<\infty.$$

## Statement references

[Geometric Brascamp–Lieb criterion]([[thm-geometric-brascamp-lieb-finiteness-criterion]])

[Local boundedness of the Brascamp–Lieb constant]([[thm-local-boundedness-of-brascamp-lieb-constant]])

[BDG, Proposition 6.4](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] The dimension inequality holds for every distinct tuple of parameters ([[lem-osculating-subspaces-satisfy-brascamp-lieb-transversality]]).

[F2] The geometric Brascamp–Lieb constant is finite exactly when the dimension inequality holds ([[thm-geometric-brascamp-lieb-finiteness-criterion]]).

[F3] At any finite Brascamp–Lieb datum the constant remains bounded in a neighborhood of its tuple of linear maps ([[thm-local-boundedness-of-brascamp-lieb-constant]]).

[F4] The derivative vectors defining $V_k(t)$ are linearly independent, and their matrix varies continuously in $t$ ([[def-moment-curve-plates-and-osculating-subspaces]]).

[F5] Closed bounded subsets of finite-dimensional Euclidean space are compact, and compactness means every open cover has a finite subcover ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** Verify finiteness pointwise, apply local boundedness, then use compactness of the separated parameter set.

1.1 Pairwise separation makes the coordinates of every tuple in the parameter set distinct. Therefore [F1] and [F2] imply that $C_{\mathrm{BL}}(\mathbf t)$ is finite at each such tuple. [F1, F2, given]

1.2 By [F4], the ordered derivative columns have full rank for every $t$. Applying Gram–Schmidt therefore gives a continuous orthonormal frame $Q(t):\mathbb R^k\to V_k(t)$. The surjective maps $B_j=Q(t_j)^T:\mathbb R^n\to\mathbb R^k$ vary continuously with $\mathbf t$, and $g_j\circ\pi_j=(g_j\circ Q(t_j))\circ B_j$ with $Q(t_j)$ preserving Lebesgue measure. Raising the geometric inequality defining $C_{\mathrm{BL}}(\mathbf t)$ to the power $2n/k$ and setting $f_j=|g_j\circ Q(t_j)|^2$ identifies $C_{\mathrm{BL}}(\mathbf t)^{2n/k}$ with the standard Brascamp–Lieb constant for the maps $B_j$ and fixed power exponents $n/(kM_n)$. Thus [F3] gives a neighborhood of each tuple on which the geometric constants are bounded. [F3, F4, given, algebra]

2.1 The tuple $t_j=(j-1)/M_n$ for $1\le j\le M_n$ belongs to the parameter set because its adjacent gaps are $1/M_n\ge1/K$, so the set is nonempty. It is closed and bounded in $\mathbb R^{M_n}$ because it is defined by the closed cube constraints and the closed inequalities $|t_i-t_j|\ge K^{-1}$; [F5] makes it compact. The local neighborhoods from step 1.2 cover it, so compactness gives a finite subcover. The maximum of the finitely many local bounds is a uniform bound. [F5, step 1.2, given, choose] ∎
