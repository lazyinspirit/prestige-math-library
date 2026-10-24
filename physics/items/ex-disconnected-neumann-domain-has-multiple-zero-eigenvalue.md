---
id: ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue
kind: example
title: "A disconnected Neumann domain has a multiple zero eigenvalue"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-axiom-of-choice, def-connected-component-and-quasicomponent, def-countable-choice, def-integral-over-a-measurable-set, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, rem-neumann-spectrum-and-the-constant-zero-mode, thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-zero-weak-gradient-implies-componentwise-constancy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 6, Neumann boundary conditions and the constant zero mode, printed pp. 42-43 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.4, natural boundary conditions and constant solutions, printed pp. 97-99 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.9 and the mean-zero discussion, printed pp. 95-98 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice (AC) and Countable Choice (CC). The explicit CC premise is used by [[def-uniformly-elliptic-divergence-form-operator]], while AC matches the cited componentwise-constancy and mean-zero Neumann results as currently stated. Let $\Omega\subset\mathbb R^2$ be the union of two disjoint open discs $B_1,B_2$ (a nonempty bounded open set with exactly two connected components), and let $a(u,v)=\int_\Omega Du\cdot\overline{Dv}\,dx$ on $H^1(\Omega)$ ([[def-uniformly-elliptic-divergence-form-operator]] with $a^{ij}=\delta^{ij}$). Then $a(u,u)\ge0$ with equality if and only if $u$ is constant on each component, so the weak Neumann eigenvalue $0$ has the two-dimensional eigenspace
$$\{c_1\mathbf 1_{B_1}+c_2\mathbf 1_{B_2}:c_1,c_2\in\mathbb K\}.$$
The multiplicity of the zero eigenvalue equals the number of connected components. Consequently Poincare-Wirtinger with the global mean fails on $\Omega$: the mean-zero function $|B_2|\mathbf 1_{B_1}-|B_1|\mathbf 1_{B_2}$ has zero energy, so on the mean-zero subspace the Rayleigh infimum is $0$, not positive, and the connectedness hypothesis of [[thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation]] cannot be dropped.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; two nonempty disjoint open discs $B_1,B_2\subset\mathbb R^2$ of finite positive area $|B_1|,|B_2|$ with $\Omega=B_1\cup B_2$; the Neumann form $a(u,v)=\int_\Omega Du\cdot\overline{Dv}\,dx$ on $H^1(\Omega)$.

[F1] The zero mode of the principal Neumann form: for a bounded open set the form $a$ is nonnegative, and $a(u,u)=0$ if and only if $Du=0$ a.e., if and only if $u$ is constant on every connected component ([[rem-neumann-spectrum-and-the-constant-zero-mode]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[thm-zero-weak-gradient-implies-componentwise-constancy]]).

[F2] Connected components: each disc $B_j$ is connected, the two discs are disjoint open sets, so $\Omega$ has exactly the two connected components $B_1,B_2$; the componentwise constants $c_1\mathbf 1_{B_1}+c_2\mathbf 1_{B_2}$ (equal on $\Omega$ to $c_j$ on $B_j$) form a two-dimensional subspace of $H^1(\Omega)$ ([[def-connected-component-and-quasicomponent]], [[def-sobolev-space-wkp-and-its-norm]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] Integrals of indicators: $\int_\Omega\mathbf 1_{B_j}\,dx=|B_j|$ and integrals are additive, computed in the almost-everywhere class convention ([[def-integral-over-a-measurable-set]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] The positive first level on the global mean-zero space requires connectedness and the extension-domain property; on a disconnected domain the mean-zero subspace is larger and the positivity is not forced ([[thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Specialising [F1] to $\Omega=B_1\cup B_2$ gives $a(u,u)=\|Du\|_{L^2}^2\ge0$, with equality exactly when $Du=0$ a.e., i.e. exactly when $u$ is constant on each of the two components. Hence the kernel of the form on $H^1(\Omega)$, that is the zero eigenspace of the weak Neumann problem, is the space $\{c_1\mathbf 1_{B_1}+c_2\mathbf 1_{B_2}\}$ of [F2]. [F1, F2, given, algebra]

2.1 The two functions $\mathbf 1_{B_1}$ and $\mathbf 1_{B_2}$ are nonzero linearly independent classes and lie in the kernel by step 1.1, so the zero eigenspace is exactly two-dimensional; the multiplicity of the eigenvalue $0$ equals the number $2$ of connected components of $\Omega$. [F2, step 1.1, algebra]

2.2 Put $g:=|B_2|\mathbf 1_{B_1}-|B_1|\mathbf 1_{B_2}$. By [F2] it is componentwise constant, hence a nonzero element of $H^1(\Omega)$ with zero weak gradient, and step 1.1 gives $a(g,g)=0$. Its global mean is $|B_2|\int_\Omega\mathbf 1_{B_1}-|B_1|\int_\Omega\mathbf 1_{B_2}=|B_2||B_1|-|B_1||B_2|=0$ by [F3], so $g$ lies in the mean-zero subspace $V$ and is nonzero with vanishing Rayleigh quotient. Therefore $\inf_{u\in V\setminus\{0\}}a(u,u)/\|u\|_{L^2}^2=0$ on this $\Omega$. [F3, step 1.1, given, algebra]

3.1 Consequently no Poincare-Wirtinger inequality with the global mean and a positive constant can hold on the disconnected set $\Omega$: such an inequality would bound $\|g\|_{L^2}$ by a positive multiple of $\|Dg\|_{L^2}=0$ for the nonzero function $g$ of step 2.2. This shows that the connectedness hypothesis in [F4] cannot be dropped, while the two-dimensional zero eigenspace of step 2.1 shows that the multiplicity of the Neumann eigenvalue $0$ equals the number of connected components. [F1, F4, step 2.2, given] ∎ 