---
id: lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures
kind: lemma
title: Finite sampling reconstruction bridges compact-uniform raw quadrature limits
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-discretization-invariant-operator-family
  - lem-neural-operator-compact-union-under-uniform-convergence
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-compact-implies-complete-and-totally-bounded
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $X,U$ be real Banach spaces, and let continuous maps $H,H_n:X\to U$ satisfy $\sup_{a\in K}\|H_n(a)-H(a)\|_U\to0$ for every norm-compact $K\subset X$. Suppose continuous finite-dimensional sampling and reconstruction maps $S_n:X\to E_n$ and $J_n:E_n\to X$ are supplied and satisfy $\sup_{a\in K}\|J_nS_n(a)-a\|_X\to0$ on every such $K$. Then
$$G_n(a)=H_n(J_n(S_n(a)))$$
is a finite-sampling family in the displayed definition, with $F_n=E_n$, finite map the identity and output reconstruction $R_n=H_n\circ J_n:E_n\to U$, and $G_n\to H$ uniformly on every norm-compact input set in the actual $U$ norm.

For the supremum-norm continuous-input case these reconstruction hypotheses always hold with exactly the prescribed tags of arbitrary finite partitions of a nonempty bounded open $D\subset\mathbb R^d$ whose maximal cell diameters $h_n$ tend to zero. Namely let $X=C(\bar D;\mathbb R^q)$, let $S_n(a)=(a(\xi_{n,j}))_j$, and, for $x\in\bar D$, put
$$w_{n,j}(x)=\max\{0,2h_n-|x-\xi_{n,j}|\},\qquad J_n(z)(x)=\frac{\sum_jw_{n,j}(x)z_j}{\sum_jw_{n,j}(x)}.$$
Then $\|J_nS_n\|_{X\to X}\le1$, and the reconstruction error is bounded by the input modulus of continuity at $2h_n$, uniformly on every compact input family. In a stronger Banach input norm the first clause applies whenever the stated reconstructions converge in that norm; convergence in the supremum norm alone is not substituted for that condition.

## Statement references

[[def-discretization-invariant-operator-family]]

[[lem-neural-operator-compact-union-under-uniform-convergence]]

## Facts & Assumptions

**Given:** The Banach spaces, continuous raw maps, finite-dimensional maps, and compact-uniform limits in the Statement. In the concrete branch the bounded open set, tagged partitions and positive maximal diameters are given.

[F1] Uniformly convergent continuous images of a compact set have compact union, including the limit image ([[lem-neural-operator-compact-union-under-uniform-convergence]]).

[F2] Closed bounded Euclidean sets are compact, and a continuous map on a compact metric space is uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F3] Compact metric sets have finite nets in their own metric ([[thm-compact-implies-complete-and-totally-bounded]]).

[F4] A continuum-valued map factoring through the supplied finite sampling, finite map and output reconstruction has the required finite-dimensional type ([[def-discretization-invariant-operator-family]]).

## Proof

1.1 Fix compact $K\subset X$. If $K$ is empty the conclusion is vacuous. Otherwise put $A_n=J_nS_n$ and $L=K\cup\bigcup_{n\ge1}A_n(K)$. The maps $A_n$ are continuous and converge uniformly on $K$ to the identity. Thus [F1] makes $L$ compact in the actual $X$ norm. By hypothesis $\sup_{b\in L}\|H_n(b)-H(b)\|_U\to0$. [given, F1, construct]

2.1 Continuity of $H$ controls uniform perturbations of the compact set $K$. Explicitly, for $\varepsilon>0$ collect every ball $B(x,r)$ with $x\in K$ and $r>0$ such that $\|H(z)-H(x)\|_U<\varepsilon/2$ for $\|z-x\|_X<3r$. These balls cover $K$; choose a finite subcover and take $\delta$ to be its smallest radius. If $a\in K$ and $\|b-a\|_X<\delta$, both points lie within $3r$ of one selected center, so $\|H(b)-H(a)\|_U<\varepsilon$. Hence $\sup_K\|H(A_n(a))-H(a)\|_U\to0$. Combining this with step 1.1 gives $\sup_K\|G_n-H\|_U\to0$. The maps $S_n$, identity on $E_n$, and $R_n=H_nJ_n$ provide exactly the factorization in [F4]; no access to the original input is used by $R_n$. [given, F4, step 1.1, construct, algebra]

3.1 In the concrete branch $0<h_n<\infty$: a finite collection of diameter-zero cells cannot cover a nonempty open set. Every point of $D$ is within $h_n$ of some tag in its cell. The distance to the finite tag set is continuous, so the same inequality holds on $\bar D$. Consequently $\sum_jw_{n,j}(x)>0$ there. The normalized weights are continuous, nonnegative and sum to one. Thus $J_n$ is a bounded linear map from the finite sample space with its maximum norm into $C(\bar D;\mathbb R^q)$, of norm at most one. The sampling map is bounded with norm at most one. A positive weight implies $|x-\xi_{n,j}|<2h_n$, so $\|J_nS_n(a)-a\|_\infty\le\omega_a(2h_n)$, where $\omega_a(r)=\sup_{|x-y|\le r}|a(x)-a(y)|$. [given, F2, construct, algebra]

4.1 For a compact $K\subset C(\bar D;\mathbb R^q)$ and $\eta>0$, [F3] gives a finite $\eta$-net $a_1,\ldots,a_s$. By [F2] their moduli tend to zero. For $a\in K$ within $\eta$ of $a_i$, $\omega_a(r)\le2\eta+\omega_{a_i}(r)$. Therefore $\sup_{a\in K}\omega_a(r)\to0$. Step 3.1 supplies the reconstruction hypotheses of steps 1.1–2.1 and proves the whole concrete branch. The general argument measured every reconstruction error in $X$ and every output error in $U$, so it also proves the first clause without any unproved norm upgrade. [F2, F3, step 2.1, step 3.1, algebra] ∎
