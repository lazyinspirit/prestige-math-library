---
id: rem-neumann-spectrum-and-the-constant-zero-mode
kind: remark
title: "The Neumann spectrum and the constant zero mode"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-axiom-of-choice, def-connected-component-and-quasicomponent, def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-zero-weak-gradient-implies-componentwise-constancy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 6, Neumann boundary conditions and the zero mode, printed pp. 42-43 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.9 (Neumann eigenvalues), printed pp. 95-98 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.4, the natural boundary condition and constant solutions, printed pp. 97-99 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice (AC) and Countable Choice (CC). The explicit CC premise is used by [[def-uniformly-elliptic-divergence-form-operator]], while AC matches the cited componentwise-constancy and mean-zero Neumann results as currently stated. Let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded open set and let $a(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$ be the principal form with Hermitian uniformly elliptic coefficients ([[def-uniformly-elliptic-divergence-form-operator]]). Then
$$\operatorname{Re}a(u,u)=\int_\Omega\operatorname{Re}\big(a^{ij}D_ju\overline{D_iu}\big)dx\ge\theta\|Du\|_{L^2}^2\ge0,$$
with equality if and only if $Du=0$ a.e., i.e. if and only if $u$ is constant on each connected component of $\Omega$ ([[thm-zero-weak-gradient-implies-componentwise-constancy]]). Hence the constant functions are weak Neumann eigenfunctions with eigenvalue $0$, and on a domain with exactly $m$ connected components the zero eigenspace of the principal Neumann problem is exactly the $m$-dimensional space of componentwise constants. In particular the lowest weak Neumann eigenvalue on $H^1(\Omega)$ is $0$; a first positive eigenvalue, when it exists, lies above this zero mode. If, in addition, $\Omega$ is connected and is a Sobolev extension domain, [[thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation]] gives a positive first Neumann level after restricting to the global mean-zero subspace. This positivity conclusion is not asserted for a general bounded open $\Omega$; when $\Omega$ has multiple components, nonzero componentwise constants can also have global mean zero.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; Hermitian uniformly elliptic coefficients $a^{ij}$ with ellipticity constant $\theta>0$; the principal form $a(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$; and $u\in H^1(\Omega)$.

[F1] Pointwise ellipticity: $\operatorname{Re}\bigl(a^{ij}(x)D_ju(x)\overline{D_iu(x)}\bigr)\ge\theta|Du(x)|^2\ge0$ for almost every $x\in\Omega$, and $a(u,u)$ is real because the coefficients are Hermitian ([[def-uniformly-elliptic-divergence-form-operator]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] A nonnegative measurable function has zero integral if and only if it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F3] A class with zero weak gradient is constant on each connected component of $\Omega$ ([[thm-zero-weak-gradient-implies-componentwise-constancy]], [[def-connected-component-and-quasicomponent]]).

[F4] On a connected bounded Sobolev extension domain the mean-zero restriction of the principal form has a positive first level ([[thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{Re}a(u,u)=\int_\Omega\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\,dx$ and the integrand is at least $\theta|Du|^2\ge0$ almost everywhere by [F1], the integral is nonnegative. If $a(u,u)=0$, then $0\le\theta\int_\Omega|Du|^2\le\operatorname{Re}a(u,u)=0$, so $\int_\Omega|Du|^2=0$ and [F2] gives $|Du|=0$ almost everywhere; conversely $Du=0$ a.e. makes the integrand vanish a.e. and hence $a(u,u)=0$. By [F3], $Du=0$ a.e. holds exactly when $u$ is constant on each connected component of $\Omega$. [F1, F2, F3, given, algebra]

2.1 If $\Omega$ has finitely many connected components, write them as $\Omega_1,\dots,\Omega_m$. The componentwise constants $\sum_{j=1}^mc_j\mathbf 1_{\Omega_j}$ with $c_j\in\mathbb K$ form a linear subspace of $H^1(\Omega)$ of dimension $m$, because the components are nonempty disjoint open sets of positive finite measure and each indicator has zero weak gradient: every compactly supported test function meets only finitely many components, and its integral derivative on each component is zero; by step 1.1 this subspace is exactly the zero set of the quadratic form $\operatorname{Re}a$, that is, the kernel of the symmetric form $a$ on $H^1(\Omega)$. [F1, F3, step 1.1, given, algebra]

3.1 Weak Neumann eigenfunctions of eigenvalue $0$ are exactly the nonzero elements of that kernel: $a(u,v)=0$ for all $v\in H^1(\Omega)$ implies $a(u,u)=0$, hence $u$ is componentwise constant by step 1.1; conversely a componentwise constant $u$ has $Du=0$ a.e., so $a(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx=0$ for every $v\in H^1(\Omega)$, and every nonzero constant function supplies such an eigenfunction. Thus $0$ is the lowest weak Neumann eigenvalue, since testing any weak eigenpair at its eigenfunction gives a nonnegative eigenvalue. Its eigenspace consists of the componentwise constants in $H^1(\Omega)$ and has dimension $m$ when there are exactly $m$ components. [F1, F3, step 1.1, step 2.1, given, algebra]

4.1 The mean-zero refinement requires the extra hypotheses: if $\Omega$ is connected and a Sobolev extension domain, [F4] supplies a positive first level on the global mean-zero subspace. Without connectedness this can fail: on a domain with several components, a nonzero componentwise constant such as $\mathbf 1_{\Omega_1}-\tfrac{|\Omega_1|}{|\Omega_2|}\mathbf 1_{\Omega_2}$ has global mean zero and zero form value, so no positive lower bound on the mean-zero space follows from the present hypotheses. [F4, step 2.1, given, algebra] ∎ 