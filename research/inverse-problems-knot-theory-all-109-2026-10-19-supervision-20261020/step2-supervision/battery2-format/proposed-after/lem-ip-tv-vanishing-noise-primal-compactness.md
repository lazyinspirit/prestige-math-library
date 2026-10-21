---
id: lem-ip-tv-vanishing-noise-primal-compactness
kind: lemma
title: Primal compactness and selection of a minimum-TV limit
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-tv-dual-source-certificate
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-ip-tv-functional-on-l2-distributional-variation
  - lem-ip-tv-dual-attainment-and-certificate-limit
  - lem-ip-bv-compactness-lower-semicontinuity
  - lem-ip-bv-sobolev-inequality
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-bv-zero-gradient-constant-on-connected-domain
  - lem-ip-neumann-bv-sobolev-poincare
  - lem-ip-tv-l2-finite-variation-has-radon-derivative
  - lem-ip-tv-l2-sobolev-inequality
  - thm-bolzano-weierstrass
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-riesz-representation-for-hilbert-space
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, Lemma 1 and proof
      url: https://arxiv.org/pdf/1711.06495
      locator: Lemma 1, proof on full-space and bounded-domain BV compactness
    - title: Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes,
        version 1.6
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
      locator: Theorem 7.49 and proof; §§7.4–7.5 on extension and compactness
---

## Statement

Assume Countable Choice. Let $X=L^2(\Omega;\mathbb R)$ and let $Y=L^2(\Sigma,\mu;\mathbb R)$ be real Hilbert spaces. Let $A:X\to Y$ be bounded and real-linear, let $f=Au^\dagger$, and assume $u^\dagger$ is an exact solution minimizing a proper, convex, lower semicontinuous, positively one-homogeneous TV functional $R:X\to[0,+\infty]$ with a source certificate $p^\dagger\in Y$, so $A^*p^\dagger\in\partial R(u^\dagger)$. Use full-space $R=TV_2(\cdot;\mathbb R^2)$ if $\Omega=\mathbb R^2$; for a bounded connected Lipschitz $\Omega\subseteq\mathbb R^2$, use either Neumann $R(u)=TV(u;\Omega)$ or Dirichlet $R(u)=TV(\widetilde u;\mathbb R^2)$ for the zero extension $\widetilde u$, assigning $+\infty$ outside the respective finite-variation domain. A bounded connected Lipschitz domain here is a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph, and it has no separation into two disjoint nonempty relatively open sets.

Let $\alpha_n>0$ tend to zero, let $w_n\in Y$, and suppose $\|A^*\|\,\|w_n\|_Y/\alpha_n\le\eta$ for some finite $\eta$. For each $n$, suppose a supplied global minimizer $u_n\in X$ minimizes
$$J_n(u)=\tfrac12\|Au-(f+w_n)\|_Y^2+\alpha_nR(u).$$
In the Neumann case, if $A\mathbf1_\Omega=0$, take $u_n$ after subtracting its mean $|\Omega|^{-1}\int_\Omega u_n$; this leaves $J_n$ unchanged. Then a subsequence converges weakly in $L^2(\Omega)$ and, in addition, strongly in $L^1(\Omega)$ when $\Omega$ is bounded or strongly in $L^1$ on every bounded ball when $\Omega=\mathbb R^2$. Its limit $u_0$ is an exact solution $Au_0=f$ minimizing $R$ among exact solutions, and $A^*p^\dagger\in\partial R(u_0)$.

## Statement references

[[def-ip-tv-dual-source-certificate|A TV source certificate is an adjoint image in the convex subdifferential at a minimum-TV exact solution.]]

[[def-ip-tv-functional-on-l2-distributional-variation|Full-space TV on L² is the extended distributional test-field supremum.]]

[[def-ip-boundary-tv-conventions|Dirichlet TV counts zero-extension boundary variation; Neumann TV counts only interior variation.]]

## Facts & Assumptions

**Given:** The objects and hypotheses in the Statement, including supplied global minimizers of $J_n$.

[A1] Countable Choice supplies the countable diagonal selections in the compactness and weak-subsequence arguments. ([[def-countable-choice]])

[F1] [[def-ip-tv-dual-source-certificate]]: $Au^\dagger=f$, $R(u^\dagger)$ is minimal over exact solutions, and $A^*p^\dagger\in\partial R(u^\dagger)$; the Hilbert adjoint satisfies $\langle Au,p\rangle_Y=\langle u,A^*p\rangle_X$.

[F2] [[lem-ip-tv-dual-attainment-and-certificate-limit]]: every supplied global minimizer has $p_{\alpha,w}=(f+w-Au_{\alpha,w})/\alpha$, the exact-data fields $p_{\alpha,0}$ remain bounded as $\alpha\to0$, and $\|p_{\alpha,w}-p_{\alpha,0}\|_Y\le\|w\|_Y/\alpha$.

[F3] [[lem-ip-bv-compactness-lower-semicontinuity]]: bounded-domain BV sequences with bounded $L^1$ norm and variation have an $L^1$-convergent subsequence, and TV is lower semicontinuous under $L^1$ convergence.

[F4] [[lem-ip-bv-sobolev-inequality]]: in two dimensions, $\|v\|_{L^2(\mathbb R^2)}\le TV(v;\mathbb R^2)$ for $v\in BV(\mathbb R^2)$.

[F5] [[lem-ip-tv-l2-sobolev-inequality]]: the same estimate holds for $u\in L^2(\mathbb R^2)$ with finite extended variation: $\|u\|_2\le TV_2(u;\mathbb R^2)$.

[F6] [[lem-ip-bv-zero-gradient-constant-on-connected-domain]]: a locally integrable function with zero distributional gradient on a connected open domain is a.e. constant.

[F7] [[def-ip-boundary-tv-conventions]]: Neumann TV is unchanged by adding constants; Dirichlet TV is the full-space TV of the zero extension and dominates the interior variation.

[F8] [[lem-ip-bv-test-field-characterization-and-lsc]]: spatial TV is lower semicontinuous in $L^1$ and finite whenever the extended test-field variation is finite under Countable Choice.

[F9] [[lem-ip-tv-l2-finite-variation-has-radon-derivative]]: finite $TV_2$ gives a finite vector Radon derivative measure, whose restriction to bounded balls has variation at most $TV_2(u;\mathbb R^2)$.

[F10] [[thm-bolzano-weierstrass]]: bounded scalar real sequences have convergent subsequences.

[F11] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

[F12] [[thm-riesz-representation-for-hilbert-space]]: bounded linear functionals on a real Hilbert space are inner products with vectors in that space.

[F13] [[thm-locally-integrable-functions-embed-in-distributions]]: two locally integrable functions that define the same distribution are equal almost everywhere.

[F14] [[lem-ip-neumann-bv-sobolev-poincare]]: on a bounded connected Lipschitz domain, $\|u-u_\Omega\|_2\le C_\Omega TV(u;\Omega)$ for a fixed finite $C_\Omega$.

## Proof

1.1 If $\|A^*\|=0$, the adjoint identity implies $A=0$ and $f=0$. Since $0$ is exact, minimality gives $R(u^\dagger)=0$. The data term of $J_n$ is then constant, so every global minimizer has $R(u_n)=0$. In the full-space case [F6] makes $u_n$ constant and $L^2(\mathbb R^2)$ forces it to be zero; in the Dirichlet case apply [F6] to its zero extension, which vanishes outside bounded $\Omega$, and again obtain zero; in the Neumann case [F6] makes it constant and the prescribed zero-mean choice makes it zero. Thus $u_0=0$ is an exact minimum-TV solution. Since $R\ge0$ and $R(0)=0$, $0\in\partial R(0)=\partial R(u_0)$, so $A^*p^\dagger=0\in\partial R(u_0)$ and the assertion holds. For the remainder assume $\|A^*\|>0$. [F1, F6, F7, given, cases, algebra]

1.2 Put $p_n=(f+w_n-Au_n)/\alpha_n$. By [F2], $p_n=p_{\alpha_n,w_n}$ and $p_{\alpha_n,0}$ is bounded. The noise hypothesis gives $\|w_n\|_Y/\alpha_n\le\eta/\|A^*\|$, hence [F2] makes $(p_n)$ bounded and $\|w_n\|_Y\to0$. The identity $Au_n=f+w_n-\alpha_np_n$ therefore gives $Au_n\to f$ strongly in $Y$. Comparing the objective at $u_n$ and $u^\dagger$ gives $$\tfrac12\|Au_n-(f+w_n)\|_Y^2+\alpha_nR(u_n)\le\tfrac12\|w_n\|_Y^2+\alpha_nR(u^\dagger),$$ so $R(u_n)\le R(u^\dagger)+\|w_n\|_Y^2/(2\alpha_n)\le R(u^\dagger)+\eta^2\alpha_n/(2\|A^*\|^2)$. In particular the variations are bounded and $\limsup_nR(u_n)\le R(u^\dagger)$. [F1, F2, given, algebra]

2.1 In the Neumann branch on bounded connected $\Omega$, write $m_n=|\Omega|^{-1}\int_\Omega u_n$ and $v_n=u_n-m_n$. The Poincaré inequality [F14] gives $\|v_n\|_2\le C_\Omega TV(v_n;\Omega)=C_\Omega R(u_n)$, which is uniformly bounded by step 1.2. [F7, F14, step 1.2, algebra]

3.1 If $A\mathbf1_\Omega=0$, subtracting $m_n$ leaves both $Au_n$ and Neumann TV unchanged, so we use the zero-mean minimizer specified in the Statement, which is uniformly bounded in $L^2$ by step 2.1. If $A\mathbf1_\Omega\ne0$, then [F1] and step 1.2 give bounded $\|Au_n\|_Y$ and $$|m_n|\,\|A\mathbf1_\Omega\|_Y=\|Au_n-Av_n\|_Y\le\|Au_n\|_Y+\|A\|\|v_n\|_2,$$ so the means, and therefore $\|u_n\|_2$, are bounded. In the full-space case [F5] gives $\|u_n\|_2\le R(u_n)$. In the Dirichlet case [F4] applied to $\widetilde u_n$ gives $\|u_n\|_2\le R(u_n)$. Thus in every branch the selected sequence is bounded in $L^2$. [F1, F4, F5, F7, step 1.2, step 2.1, algebra]

4.1 If $\Omega$ is bounded, the $L^2$ bound gives an $L^1$ bound by [F11]; the interior variation is bounded by $R(u_n)$ in both boundary conventions [F7]. [F3] therefore supplies a subsequence converging strongly in $L^1(\Omega)$. If $\Omega=\mathbb R^2$, restrict to each ball $B(0,m)$: the $L^1$ norms are bounded by $|B(0,m)|^{1/2}\sup_n\|u_n\|_2$, and [F9] bounds the variation there. Applying [F3] on each ball and taking a countable diagonal subsequence using [A1] gives convergence in $L^1$ on every bounded ball. [A1, F3, F7, F9, F11, step 3.1, construct]

5.1 The resulting sequence is still bounded in the Hilbert space $L^2(\Omega)$. Its closed linear span is separable, since rational finite linear combinations of its terms are dense. Gram–Schmidt gives a finite or countable orthonormal family with dense span. Each coordinate sequence is bounded by [F11]; repeated use of [F10] and [A1] yields a subsubsequence on which every coordinate converges. Pythagoras applied to each finite orthogonal projection bounds the sums of squared limiting coordinates by the common squared norm bound, so these coordinates define a vector $u_0$ in the closed span. Approximation by finite linear combinations proves convergence of inner products against every vector in the span. For any $z\in L^2(\Omega)$, [F12] represents $x\mapsto\langle x,z\rangle$ restricted to that span by a vector in the span, so the convergence is weak in all of $L^2$. Testing against compactly supported smooth functions shows that this weak limit and the strong $L^1$ or local-$L^1$ limit from step 4.1 define the same distribution; injectivity [F13] makes them equal almost everywhere. [A1, F10, F11, F12, F13, step 4.1, construct]

6.1 Weak convergence and boundedness of $A$ imply $Au_n\rightharpoonup Au_0$, while step 1.2 gives $Au_n\to f$ strongly; hence $Au_0=f$. In the full-space case, for every admissible test field $\varphi$, local $L^1$ convergence gives $\int u_0\operatorname{div}\varphi=\lim_n\int u_n\operatorname{div}\varphi\le\liminf_nR(u_n)$; taking the supremum gives $R(u_0)\le\liminf_nR(u_n)$. In the Neumann case the same lower semicontinuity follows from [F8] and strong $L^1(\Omega)$ convergence. In the Dirichlet case the zero extensions converge strongly in $L^1(\mathbb R^2)$, so [F8] gives the same inequality for their full-space TV. Thus $R(u_0)\le\liminf_nR(u_n)\le\limsup_nR(u_n)\le R(u^\dagger)$. Exactness and the minimum property of $u^\dagger$ force equality, so $u_0$ is a minimum-TV exact solution. [F1, F8, step 1.2, step 4.1, step 5.1, algebra]

7.1 Let $\xi=A^*p^\dagger$. Since $Au_0=Au^\dagger=f$, the adjoint identity in [F1] gives $\langle\xi,u_0-u^\dagger\rangle_X=\langle p^\dagger,A(u_0-u^\dagger)\rangle_Y=0$. For every $v\in X$, the subgradient inequality at $u^\dagger$ therefore gives $$R(v)\ge R(u^\dagger)+\langle\xi,v-u^\dagger\rangle_X=R(u_0)+\langle\xi,v-u_0\rangle_X.$$ This is exactly $A^*p^\dagger\in\partial R(u_0)$, as required. [F1, step 6.1, algebra] ∎

