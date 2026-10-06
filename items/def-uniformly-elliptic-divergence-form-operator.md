---
id: "def-uniformly-elliptic-divergence-form-operator"
kind: "definition"
title: "Uniformly elliptic divergence-form operators and their sesquilinear forms"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-essential-supremum-with-respect-to-a-measure"
  - "def-hk-and-hk-zero-notation"
  - "def-l-infinity-on-a-measure-space"
  - "def-measurable-function-between-measurable-spaces"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-weak-derivative-of-a-locally-integrable-function"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.6, equations (4.16)–(4.18): the divergence-form operator, coefficient bounds and uniform ellipticity, printed pp. 101–103"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the generalized Poisson operator $Lu=-\\sum(a^{jk}u_{x_j})_{x_k}+\\sum b^ju_{x_j}+cu$ and the weak form $\\alpha(u,v)=\\langle f,v\\rangle$, printed p. 101"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the higher-order operator and the ellipticity and boundedness conditions (E) and (B), printed pp. 68–69"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, the elliptic operator and coefficient bounds (10.42)–(10.43), printed pp. 232–234"
---

## Definition

Assume Countable Choice for the Sobolev interfaces. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and let $\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $a^{ij},b^i,c:\Omega\to\mathbb K$, $i,j=1,\dots,n$, be measurable ([[def-measurable-function-between-measurable-spaces]]) and essentially bounded ([[def-l-infinity-on-a-measure-space]], [[def-essential-supremum-with-respect-to-a-measure]]), with bounds $$|a^{ij}|\le M_a,\quad |b^i|\le M_b,\quad |c|\le M_c\quad\text{a.e. on }\Omega,$$ and suppose the **uniform ellipticity** condition holds: there is $\theta>0$ with $$\operatorname{Re}\Big(\sum_{i,j=1}^n a^{ij}(x)\xi_j\overline{\xi_i}\Big)\ge\theta|\xi|^2\qquad\text{for a.e. }x\in\Omega\text{ and all }\xi\in\mathbb C^n .$$ The associated **divergence-form expression** is $$Lu:=-D_i(a^{ij}D_ju)+b^iD_iu+cu$$ (Einstein summation over $i,j$), and the associated sesquilinear form on $H^1(\Omega)$ is $$a(u,v):=\int_\Omega\Big(a^{ij}D_ju\overline{D_iv}+b^iD_iu\overline{v}+cu\overline{v}\Big)dx .$$ The form is linear in $u$ and conjugate-linear in $v$, in the convention of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]; the classical Dirichlet problem consists of $Lu=f$ in $\Omega$ with prescribed boundary values. The operator is determined by the coefficient functions only a.e., and all later statements about $a$ are statements about those classes. Where the domain and boundary data demand it ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]]) the domain is additionally a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]). The convention is the complex sesquilinear one with conjugation in the second slot, as the plan's convention audit directs; the real case is the same with conjugation read as the identity.
