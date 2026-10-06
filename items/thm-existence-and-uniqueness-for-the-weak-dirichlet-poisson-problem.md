---
id: "thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem"
kind: "theorem"
title: "Existence and uniqueness for the weak Dirichlet Poisson problem"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "def-axiom-of-choice"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-coercivity-of-the-principal-dirichlet-form"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-lax-milgram"
  - "thm-poincare-inequality-for-w-one-p-zero"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.5, Theorem 4.11: existence and uniqueness of the weak solution of $-\\Delta u=f$ for $f\\in H^{-1}$, printed pp. 99–101"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, Theorem 9.21 (Dirichlet, Riemann, Poincaré, Hilbert), printed pp. 296–298"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.1, Theorem 10.1: unique weak solution of the Poisson equation in $H^1_0(U)$, printed pp. 223–226"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§3.10, the Dirichlet principle for Poisson’s equation, printed pp. 79–82"
---

## Statement

Assume the Axiom of Choice, inherited through the Poincaré supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, nonempty and bounded in one direction, with Poincar\'e constant $C_P$ for $W^{1,2}_0$ ([[thm-poincare-inequality-for-w-one-p-zero]]). For every $F\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]) there is a unique $u\in H^1_0(\Omega)$ with $$\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx=F(v)\qquad\text{for every }v\in H^1_0(\Omega),$$ that is, the unique weak solution of $-\Delta u=F$ with zero boundary values; it satisfies $$\|u\|_{H^1_0}\le(1+C_P^2)\|F\|_{H^{-1}},\qquad\text{and}\qquad\|Du\|_{L^2}\le(1+C_P^2)^{1/2}\|F\|_{H^{-1}} .$$ Here $-\Delta$ is the constant-coefficient operator $Lu=-\Delta u$ of [[def-uniformly-elliptic-divergence-form-operator]], and the solution is the Lax--Milgram solution for the form $a_0(u,v)=\int\nabla u\cdot\overline{\nabla v}$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open, nonempty $\Omega\subseteq\mathbb R^n$ bounded in one direction, with Poincar\'e constant $C_P$ for $W^{1,2}_0$; the form $a_0(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$ on $H^1_0(\Omega)$; and a functional $F\in H^{-1}(\Omega)$, i.e. a bounded conjugate-linear functional on $H^1_0(\Omega)$.

[F1] $H^1_0(\Omega)$ is a Hilbert space for the $W^{1,2}$ inner product, and $\|u\|_{H^1_0}^2=\|u\|_{L^2}^2+\|Du\|_{L^2}^2$ ([[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] $a_0$ is the principal form with $a^{ij}=\delta^{ij}$, hence bounded on $H^1_0$ with bound $M=1$ and coercive with constant $\alpha=1/(1+C_P^2)$ ([[lem-elliptic-form-is-well-defined-and-bounded]], [[lem-coercivity-of-the-principal-dirichlet-form]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] Poincar\'e: $\|u\|_{L^2}\le C_P\|Du\|_{L^2}$ on $H^1_0$, so $\|u\|_{H^1_0}\le(1+C_P^2)^{1/2}\|Du\|_{L^2}$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] Lax--Milgram: bounded coercive forms on a Hilbert space with a bounded conjugate-linear datum have a unique solution, with $\alpha\|u\|\le\|F\|$ for the coercivity constant $\alpha$ ([[thm-lax-milgram]], [[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F5] Energy identity for any solution: testing with itself gives $\operatorname{Re}a_0(u,u)=\operatorname{Re}F(u)$ and $\alpha\|u\|_{H^1_0}^2\le\operatorname{Re}a_0(u,u)$, so $\alpha\|u\|_{H^1_0}\le\|F\|$ ([[lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound]], [[def-complex-lp-and-euclidean-test-function-conventions]]).



## Proof

1.1 Existence and uniqueness: by [F2] the form $a_0$ is bounded and coercive on the Hilbert space $H^1_0(\Omega)$; applying Lax--Milgram [F4] to the bounded conjugate-linear functional $F\in H^{-1}(\Omega)$ gives a unique $u\in H^1_0(\Omega)$ with $a_0(u,v)=F(v)$ for every $v\in H^1_0(\Omega)$, that is, the weak solution of $-\Delta u=F$ in the sense of the definition. [F1, F2, F4]

1.2 First estimate: by [F5] applied with $\alpha=1/(1+C_P^2)$, $\|u\|_{H^1_0}\le(1+C_P^2)\|F\|_{H^{-1}}$. [F2, F5, algebra]

2.1 Gradient estimate: the same substitution read as an identity gives $\|Du\|_{L^2}^2=\operatorname{Re}a_0(u,u)=\operatorname{Re}F(u)\le\|F\|\,\|u\|_{H^1_0}\le(1+C_P^2)^{1/2}\|F\|\,\|Du\|_{L^2}$ by Poincar\'e [F3]; dividing by $\|Du\|_{L^2}$ when it is nonzero (and trivially otherwise) gives $\|Du\|_{L^2}\le(1+C_P^2)^{1/2}\|F\|_{H^{-1}}$. [F3, F5, step 1.2, algebra]

3.1 Conclusion: for every $F\in H^{-1}(\Omega)$ there is a unique weak solution of the zero-boundary Poisson problem, with the two displayed bounds; the solution is the Lax--Milgram solution for $a_0$. [step 1.1, step 1.2, step 2.1] ∎ 