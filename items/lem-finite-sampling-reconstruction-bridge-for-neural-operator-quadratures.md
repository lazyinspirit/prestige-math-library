---
id: lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures
kind: lemma
title: Finite sampling reconstruction bridges compact-uniform raw quadrature limits
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-discretization-invariant-operator-family
  - lem-neural-operator-compact-union-under-uniform-convergence
  - thm-heine-borel-rn
  - lem-compactness-is-intrinsic
  - thm-heine-cantor-metric
  - thm-compact-implies-complete-and-totally-bounded
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs, JMLR24 (2023)"
      url: "https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf"
      locator: "Appendix B, Lemma21 and complete printed proof, PDF/printed pp.74–75; Lemma22 and complete printed proof, pp.75–77. Compact-union/composition mechanism only; finite tagged reconstruction and integral-first factorization are local alterations proved here."
---

## Statement

Let $X,U$ be real Banach spaces, and let continuous maps $H,H_n:X\to U$ satisfy $\sup_{a\in K}\|H_n(a)-H(a)\|_U\to0$ for every norm-compact $K\subset X$. Suppose continuous finite-dimensional sampling and reconstruction maps $S_n:X\to E_n$ and $J_n:E_n\to X$ are supplied and satisfy $\sup_{a\in K}\|J_nS_n(a)-a\|_X\to0$ on every such $K$. Then
$$G_n(a)=H_n(J_n(S_n(a)))$$
factors through finite-dimensional data, with $F_n=E_n$, finite map the identity and output reconstruction $R_n=H_n\circ J_n:E_n\to U$, and $G_n\to H$ uniformly on every norm-compact input set in the actual $U$ norm. When $X,U$ are function spaces on bounded domains with the pointwise output convention required by the discretization-invariant-family definition, this is a finite-sampling family in that definition.

For the supremum-norm continuous-input case these reconstruction hypotheses always hold with exactly the prescribed tags of arbitrary finite partitions of a nonempty bounded open $D\subset\mathbb R^d$ whose maximal cell diameters $h_n$ tend to zero. Namely let $X=C(\bar D;\mathbb R^q)$, let $S_n(a)=(a(\xi_{n,j}))_j$, and, when $h_n>0$, for $x\in\bar D$ put
$$w_{n,j}(x)=\max\{0,2h_n-|x-\xi_{n,j}|\},\qquad J_n(z)(x)=\frac{\sum_jw_{n,j}(x)z_j}{\sum_jw_{n,j}(x)}.$$
If $h_n=0$, the domain is the zero-dimensional singleton; define $J_n(z)$ to be the constant function with value $z_1$. This reconstructs every input exactly. In both branches $\|J_nS_n\|_{X\to X}\le1$, and the reconstruction error is bounded by the input modulus of continuity at $2h_n$, uniformly on every compact input family. In a stronger Banach input norm the first clause applies whenever the stated reconstructions converge in that norm; convergence in the supremum norm alone is not substituted for that condition.

A further case needs no input reconstruction. Suppose a raw finite architecture first uses its input only through the sampled pointwise lift in the integral-only field $v_{1,n}(x)=\sum_j\omega_{n,j}\kappa_n(x,\xi_{n,j})P(a(\xi_{n,j}))+b_n(x)$, and every later stage acts on this field and the fixed parameters without further access to the original input. Assume these stages are defined and continuous on the compatible Banach spaces in question. Then each raw map itself factors through the finite input sample vector. Its compact-uniform raw convergence therefore already gives a finite-sampling family in the actual output norm, regardless of whether a sample reconstruction into the input norm has been supplied. This includes the integral-only universality subclass, when its kernels and intermediate spaces satisfy the declared compatible norm hypotheses.

## Statement references

[[def-discretization-invariant-operator-family]]

[[lem-neural-operator-compact-union-under-uniform-convergence]]

## Facts & Assumptions

**Given:** The Banach spaces, continuous raw maps, finite-dimensional maps, and compact-uniform limits in the Statement. In the concrete branch the nonempty bounded open set and tagged partitions are given, with nonnegative maximal diameters tending to zero.

[F1] Uniformly convergent continuous images of a compact set have compact union, including the limit image ([[lem-neural-operator-compact-union-under-uniform-convergence]]).

[F2] Closed bounded Euclidean sets are compact, and a continuous map on a compact metric space is uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F3] Compact metric sets have finite nets in their own metric ([[thm-compact-implies-complete-and-totally-bounded]]).

[F4] A map between function spaces satisfying the domain and pointwise-output conventions, and factoring through the supplied finite sampling, finite map and output reconstruction, has the type required by [[def-discretization-invariant-operator-family]]. Ambient open covers of compact metric subsets admit finite subcovers ([[lem-compactness-is-intrinsic]]).

## Proof

1.1 Fix compact $K\subset X$. If $K$ is empty the conclusion is vacuous. Otherwise put $A_n=J_nS_n$ and $L=K\cup\bigcup_{n\ge1}A_n(K)$. The maps $A_n$ are continuous and converge uniformly on $K$ to the identity. Thus [F1] makes $L$ compact in the actual $X$ norm. By hypothesis $\sup_{b\in L}\|H_n(b)-H(b)\|_U\to0$. [given, F1, construct]

1.2 In the concrete branch $0\le h_n<\infty$. If $h_n=0$, every cell is its singleton tag, so their finite union $D$ is finite. A nonempty open subset of $\mathbb R^d$ with $d\ge1$ contains a ball and hence infinitely many points; therefore this case forces $d=0$ and $D=\bar D$ is the singleton of $\mathbb R^0$. All tags are that point, and $J_n(z)(x)=z_1$ is a bounded linear reconstruction of norm at most one, with $J_nS_n(a)=a$ and reconstruction error $0=\omega_a(0)$. Now suppose $h_n>0$. Every point of $D$ is within $h_n$ of some tag in its cell. The distance to the finite tag set is continuous, so the same inequality holds on $\bar D$. Consequently $\sum_jw_{n,j}(x)>0$ there. The normalized weights are continuous, nonnegative and sum to one. Thus $J_n$ is a bounded linear map from the finite sample space with its maximum norm into $C(\bar D;\mathbb R^q)$, of norm at most one. The sampling map is bounded with norm at most one. A positive weight implies $|x-\xi_{n,j}|<2h_n$, so $\|J_nS_n(a)-a\|_\infty\le\omega_a(2h_n)$, where $\omega_a(r)=\sup_{|x-y|\le r}|a(x)-a(y)|$. [given, F2, construct, algebra]

2.1 Continuity of $H$ controls uniform perturbations of the compact set $K$. Explicitly, for $\varepsilon>0$ collect every ball $B(x,r)$ with $x\in K$ and $r>0$ such that $\|H(z)-H(x)\|_U<\varepsilon/2$ for $\|z-x\|_X<3r$. These balls cover $K$; choose a finite subcover and take $\delta$ to be its smallest radius. If $a\in K$ and $\|b-a\|_X<\delta$, both points lie within $3r$ of one selected center, so $\|H(b)-H(a)\|_U<\varepsilon$. Hence $\sup_K\|H(A_n(a))-H(a)\|_U\to0$. Combining this with step 1.1 gives $\sup_K\|G_n-H\|_U\to0$. The maps $S_n$, identity on $E_n$, and $R_n=H_nJ_n$ provide the asserted finite-dimensional factorization, and [F4] applies when its function-space conventions hold; no access to the original input is used by $R_n$. [given, F4, step 1.1, construct, algebra]

3.1 For a compact $K\subset C(\bar D;\mathbb R^q)$ and $\eta>0$, [F3] gives a finite $\eta$-net $a_1,\ldots,a_s$. By [F2] their moduli tend to zero. For $a\in K$ within $\eta$ of $a_i$, $\omega_a(r)\le2\eta+\omega_{a_i}(r)$. Therefore $\sup_{a\in K}\omega_a(r)\to0$. Step 1.2 supplies the reconstruction hypotheses of steps 1.1–2.1 and proves the whole concrete branch. The general argument measured every reconstruction error in $X$ and every output error in $U$, so it also proves the first clause without any unproved norm upgrade. [F2, F3, step 2.1, step 1.2, algebra]

4.1 For the last assertion set $E_n=F_n=(\mathbb R^{q_0})^{N_n}$ and let $S_n(a)$ be its prescribed sample vector. For $z\in E_n$, construct $v_{1,n}(z)(x)=\sum_j\omega_{n,j}\kappa_n(x,\xi_{n,j})P(z_j)+b_n(x)$ and apply the subsequent raw stages to this field; call the resulting output $R_n(z)$. The first field belongs to its designated auxiliary space because it is a finite sum of its kernel sections and bias with finite scalar/vector coefficients. Every subsequent field belongs to its designated space by the stated compatibility assumptions. The finite sum and continuity of the lift make the first field continuous in $z$, and continuity of the subsequent maps makes $R_n:E_n\to U$ continuous. Induction through those stages proves $H_n(a)=R_n(S_n(a))$ exactly. The identity finite map between $E_n$ and $F_n$ gives [F4], and the assumed compact-uniform raw limit proves its convergence in the actual $U$ norm. No off-grid original input is requested at any stage of this construction. [given, F4, construct, algebra] ∎

## Source notes

This statement is a local alteration and application of the compact-union mechanism in Kovachki et al., Appendix B, Lemma21, and its use for compact-uniform composition in the proof of Lemma22. The complete relevant source statements and printed proofs on PDF/printed pages74–77 of the cached JMLR full text were inspected in this provenance clarification. The source does not state the present finite-sampling bridge, the explicit normalized tag weights, or the integral-first factorization as these separate assertions; those adaptations are fully proved above. The source's printed closedness argument in Lemma21 assumes unjustified convergence of the selected integer indices. The locally proved open-cover compact-union supplier supplies the correct stated conclusion without relying on that step. The finite sampling/reconstruction interpretation is the explicit local definition of discretization invariance. No new retrieval, source-fetch stamp, whole-paper reread, or source attribution for the newly authored formulas is claimed.
