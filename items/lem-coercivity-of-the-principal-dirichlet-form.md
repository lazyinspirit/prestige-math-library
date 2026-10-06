---
id: "lem-coercivity-of-the-principal-dirichlet-form"
kind: "lemma"
title: "Coercivity of the principal Dirichlet form"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-axiom-of-choice"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-integral-over-a-measurable-set"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "thm-holder-inequality-for-integrals"
  - "thm-monotone-convergence-for-the-integral"
  - "thm-poincare-inequality-for-w-one-p-zero"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.5–4.6, the energy estimate in the proof of Theorem 4.11 and the uniform ellipticity condition (4.18), printed pp. 99–102"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, uniform ellipticity with constant $\\theta$ for the generalized Poisson operator, printed p. 101"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, coercivity of $a$ from ellipticity, printed pp. 233–234"
---

## Statement

Assume the Axiom of Choice, inherited through the Poincaré supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and bounded in one direction, and let $a_0(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$ be the principal part of a uniformly elliptic form with constants $\theta$ and $M_a$ ([[def-uniformly-elliptic-divergence-form-operator]]), restricted to $u,v\in H^1_0(\Omega)$. Then $a_0$ is a bounded sesquilinear form on $H^1_0(\Omega)$ and $$\operatorname{Re}a_0(u,u)=\int_\Omega\operatorname{Re}\big(a^{ij}D_ju\overline{D_iu}\big)dx\ge\theta\|Du\|_{L^2}^2\ge\frac{\theta}{1+C_P^2}\|u\|_{H^1_0}^2\qquad(u\in H^1_0(\Omega)),$$ where $C_P$ is the Poincar\'e constant of [[thm-poincare-inequality-for-w-one-p-zero]] for $p=2$. Hence $a_0$ is coercive on $H^1_0(\Omega)$ with constant $\alpha=\theta/(1+C_P^2)$, and $\operatorname{Re}a_0(u,u)=\theta\|Du\|^2$ in the model case $a^{ij}=\delta^{ij}$ (so $\theta=1$).

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open $\Omega\subseteq\mathbb R^n$ bounded in one direction; uniformly elliptic coefficients $a^{ij}$ with constants $\theta>0$ and $M_a$ ([[def-uniformly-elliptic-divergence-form-operator]]); and the principal form $a_0(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$ on $H^1_0(\Omega)$.

[F1] Uniform ellipticity: for almost every $x\in\Omega$ and every $\xi\in\mathbb C^n$, $\operatorname{Re}\bigl(\sum_{i,j}a^{ij}(x)\xi_j\overline{\xi_i}\bigr)\ge\theta|\xi|^2$, and $|a^{ij}|\le M_a$ a.e. ([[def-uniformly-elliptic-divergence-form-operator]]).

[F2] Absolute convergence and boundedness: the principal term is absolutely convergent for $u,v\in H^1(\Omega)$ and $|a_0(u,v)|\le nM_a\|u\|_{H^1_0}\|v\|_{H^1_0}$ on $H^1_0(\Omega)$; in particular $a_0$ is a bounded sesquilinear form ([[lem-elliptic-form-is-well-defined-and-bounded]]).

[F3] Poincar\'e at $p=2$: $\|u\|_{L^2(\Omega)}\le C_P\|Du\|_{L^2(\Omega)}$ for every $u\in H^1_0(\Omega)$, where $Du=(D_1u,\dots,D_nu)$ and $C_P$ is the constant of the cited theorem at $p=2$; hence $\|u\|_{H^1_0}^2=\|u\|_{L^2}^2+\|Du\|_{L^2}^2\le(1+C_P^2)\|Du\|_{L^2}^2$ ([[thm-poincare-inequality-for-w-one-p-zero]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F4] Nonnegative measurable functions have nonnegative integrals, and the integral of a nonnegative function is monotone under pointwise comparison; the real part of an integral of a complex-valued integrable function is the integral of its real part ([[thm-monotone-convergence-for-the-integral]], [[def-integral-over-a-measurable-set]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F5] Coercivity of a sesquilinear form means $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ for all $u$ and some $\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).



## Proof

1.1 Pointwise bound: substituting $\xi=Du(x)$ in the ellipticity condition of [F1] and taking real parts gives, for almost every $x\in\Omega$, $$\operatorname{Re}\bigl(a^{ij}(x)D_ju(x)\overline{D_iu(x)}\bigr)\ge\theta|Du(x)|^2\ge0.$$ [F1, given]

1.2 Poincar\'e bound: by [F3], $\|u\|_{H^1_0}^2\le(1+C_P^2)\|Du\|_{L^2}^2$ for every $u\in H^1_0(\Omega)$, that is $\|Du\|_{L^2}^2\ge\|u\|_{H^1_0}^2/(1+C_P^2)$. [F3]

2.1 Integrating the pointwise bound: the function $x\mapsto\operatorname{Re}(a^{ij}D_ju\overline{D_iu})$ is measurable and its negative part is bounded by $(nM_a+nM_a)|Du|^2$ a.e., so $\operatorname{Re}a_0(u,u)=\int_\Omega\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\,dx$; the difference from $\theta|Du|^2$ is nonnegative and measurable, so its integral is nonnegative and $\operatorname{Re}a_0(u,u)\ge\theta\int_\Omega|Du|^2\,dx=\theta\|Du\|_{L^2}^2$. [F1, F2, F4, step 1.1]

3.1 Coercivity and the model case: combining steps 2.1 and 1.2 gives $\operatorname{Re}a_0(u,u)\ge\theta\|Du\|_{L^2}^2\ge\frac{\theta}{1+C_P^2}\|u\|_{H^1_0}^2$ for every $u\in H^1_0(\Omega)$, so $a_0$ is coercive with constant $\alpha=\theta/(1+C_P^2)$; it is bounded by [F2]. In the model case $a^{ij}=\delta^{ij}$, $\theta=1$, the pointwise identity $\operatorname{Re}(a^{ij}D_ju\overline{D_iu})=|Du|^2$ gives $\operatorname{Re}a_0(u,u)=\|Du\|_{L^2}^2$. [F2, F5, step 2.1, step 1.2, algebra] ∎ 