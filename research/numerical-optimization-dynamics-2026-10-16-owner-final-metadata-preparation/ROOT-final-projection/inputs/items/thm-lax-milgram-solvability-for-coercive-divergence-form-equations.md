---
id: "thm-lax-milgram-solvability-for-coercive-divergence-form-equations"
kind: "theorem"
title: "Lax--Milgram solvability for coercive divergence-form equations"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "def-axiom-of-choice"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-essential-supremum-with-respect-to-a-measure"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-l-infinity-on-a-measure-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-coercivity-of-the-principal-dirichlet-form"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-cauchy-schwarz-and-the-euclidean-norm"
  - "thm-lax-milgram"
  - "thm-poincare-inequality-for-w-one-p-zero"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.6–4.7, Theorem 4.21 (G\\r{a}rding-type energy estimate) and Theorem 4.22 (solvability for $\\mu\\ge\\gamma$), printed pp. 103–105"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, strict coercivity of the shifted problem and the Lax–Milgram application, printed pp. 72–75"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, coercivity of $a$ for the general elliptic operator and Lax–Milgram solvability, printed pp. 233–236"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, solvability of elliptic boundary value problems by Lax–Milgram, printed pp. 291–298"
---

## Statement

Assume the Axiom of Choice, inherited through the Poincaré supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, nonempty and bounded in one direction, let $L$ and $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant $\theta$, coefficient bounds $M_a,M_b,M_c$ (with the componentwise drift bounds $|b^i|\le M_b$), and let $C_P$ be the Poincar\'e constant of [[thm-poincare-inequality-for-w-one-p-zero]] for $p=2$. Assume the explicit smallness condition $$\theta-\sqrt n\,C_PM_b-C_P^2M_c>0 .$$ Then for every $F\in H^{-1}(\Omega)$ there is a unique weak solution $u\in H^1_0(\Omega)$ of $Lu=F$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]), and with $\alpha_0:=\theta-\sqrt n\,C_PM_b-C_P^2M_c$ it satisfies $$\|u\|_{H^1_0}\le\frac{1+C_P^2}{\alpha_0}\|F\|_{H^{-1}} .$$ When $b\equiv0$, taking $M_b=0$, the condition reduces to $M_c<\theta/C_P^2$, the sign/smallness condition of the plan; in the model case $a^{ij}=\delta^{ij}$, $b=0$, $c=0$, taking $\theta=1$ and $M_b=M_c=0$, it gives $\alpha_0=1$ and gives existence and uniqueness for the zero-boundary weak Poisson problem.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open, nonempty $\Omega\subseteq\mathbb R^n$ bounded in one direction; divergence-form coefficients with ellipticity constant $\theta>0$ and bounds $M_a,M_b,M_c$, where $|b^i|\le M_b$ componentwise; the Poincar\'e constant $C_P$ for $W^{1,2}_0$ at $p=2$; the smallness assumption $\alpha_0:=\theta-\sqrt n\,C_PM_b-C_P^2M_c>0$; and the form $a$ on $H^1_0(\Omega)$.

[F1] Pointwise ellipticity and coefficient bounds: $\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\ge\theta|Du|^2$ a.e. and $|b^i|\le M_b$, $|c|\le M_c$ a.e. ([[def-uniformly-elliptic-divergence-form-operator]], [[def-essential-supremum-with-respect-to-a-measure]], [[def-l-infinity-on-a-measure-space]]).

[F2] The form $a$ is bounded on $H^1_0(\Omega)$ ([[lem-elliptic-form-is-well-defined-and-bounded]]) and $H^1_0(\Omega)$ is a Hilbert space with $\|u\|_{H^1_0}^2=\|u\|_{L^2}^2+\|Du\|_{L^2}^2$ ([[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Poincar\'e: $\|u\|_{L^2}\le C_P\|Du\|_{L^2}$ for $u\in H^1_0(\Omega)$, hence $\|u\|_{H^1_0}^2\le(1+C_P^2)\|Du\|_{L^2}^2$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] Lax--Milgram and the a priori estimate: a bounded coercive form on a Hilbert space with a bounded conjugate-linear datum has a unique solution; any solution satisfies $\alpha\|u\|_{H^1_0}\le\|F\|$ for a coercivity constant $\alpha$ ([[thm-lax-milgram]], [[lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound]], [[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F5] For $u\in H^1(\Omega)$, $\sum_{i=1}^n\|D_i u\|_{L^2}\le\sqrt n\,\|Du\|_{L^2}$ by Cauchy--Schwarz in the finite coordinate index ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).



## Proof

1.1 Coercivity: for $u\in H^1_0(\Omega)$, pointwise ellipticity and the coefficient bounds give $$\operatorname{Re}a(u,u)\ge\theta\|Du\|_{L^2}^2-\sqrt n\,M_b\|Du\|_{L^2}\|u\|_{L^2}-M_c\|u\|_{L^2}^2,$$ since $|b^i|\le M_b$ and [F5] bound the coordinate sum. Poincar\'e gives $\|u\|_{L^2}\le C_P\|Du\|_{L^2}$, so the last two terms are at least $-\sqrt n\,C_PM_b\|Du\|_{L^2}^2$ and $-C_P^2M_c\|Du\|_{L^2}^2$; hence $\operatorname{Re}a(u,u)\ge\alpha_0\|Du\|_{L^2}^2$ with $\alpha_0=\theta-\sqrt n\,C_PM_b-C_P^2M_c>0$. Since $\|u\|_{H^1_0}^2\le(1+C_P^2)\|Du\|_{L^2}^2$, this gives $\operatorname{Re}a(u,u)\ge\frac{\alpha_0}{1+C_P^2}\|u\|_{H^1_0}^2$: the form is coercive on $H^1_0(\Omega)$ with constant $\alpha_0/(1+C_P^2)$, and it is bounded by [F2]. [F1, F2, F3, F5, algebra]

2.1 Solvability: applying Lax--Milgram [F4] to the Hilbert space $H^1_0(\Omega)$, the bounded coercive form $a$ and the datum $F\in H^{-1}(\Omega)$ gives a unique $u\in H^1_0(\Omega)$ with $a(u,v)=F(v)$ for every $v\in H^1_0(\Omega)$: a unique weak solution of $Lu=F$. [F2, F4, step 1.1]

3.1 Estimate: the a priori estimate of [F4] with $\alpha=\alpha_0/(1+C_P^2)$ gives $\|u\|_{H^1_0}\le\frac{1+C_P^2}{\alpha_0}\|F\|_{H^{-1}}$. When $b\equiv0$, taking $M_b=0$, the condition is $M_c<\theta/C_P^2$, and in the model case $a^{ij}=\delta^{ij}$, $b=0$, $c=0$, taking $\theta=1$ and $M_b=M_c=0$, one has $\alpha_0=1$, recovering the zero-boundary Poisson theorem. [F4, step 1.1, algebra] ∎ 
