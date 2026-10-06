---
id: "def-weak-dirichlet-solution-for-a-divergence-form-operator"
kind: "definition"
title: "Weak Dirichlet solutions for a divergence-form operator"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-fractional-sobolev-space-on-a-compact-c-one-boundary"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-weak-derivative-is-independent-of-lp-representatives"
  - "thm-lp-trace-operator-on-a-bounded-c-one-domain"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.1, Definition 4.2 of a weak solution of the Dirichlet problem, printed pp. 91–92"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.6, Definition 4.19: weak solution of the general divergence-form Dirichlet problem, printed p. 102"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, weak solution of the generalized Poisson equation with Dirichlet data, printed p. 101"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, the weak Dirichlet problem and Theorem 9.21, printed pp. 291–298"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.1, weak solutions of the Dirichlet problem (10.5), printed pp. 223–226"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]), and let $L$ and its form $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] on an open set $\Omega\subseteq\mathbb R^n$. **Homogeneous problem.** Given $F\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]), a **weak solution** of $Lu=F$ with zero boundary values is a class $u\in H^1_0(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]) with $$a(u,v)=F(v)\qquad\text{for every }v\in H^1_0(\Omega).$$ **Inhomogeneous problem.** Additionally assume the Axiom of Choice ([[def-axiom-of-choice]]) for the trace supplier, and let $n\ge2$ and $\Omega$ be a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), let $g\in H^{1/2}(\partial\Omega):=W^{1/2,2}(\partial\Omega)$ in the boundary scale of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]] and let $T$ be the trace operator of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]. A weak solution with boundary data $g$ is a class $u\in H^1(\Omega)$ with $Tu=g$ and $a(u,v)=F(v)$ for every $v\in H^1_0(\Omega)$. The defining identities are identities between functionals on the $H^1_0$ classes, so they are independent of the chosen almost-everywhere representatives of $u$, of the coefficients and of the data ([[lem-weak-derivative-is-independent-of-lp-representatives]], [[def-complex-lp-and-euclidean-test-function-conventions]]); the boundary condition is imposed through the trace of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], never by pointwise evaluation. The Dirichlet condition is imposed by $u\in H^1_0(\Omega)$ in the homogeneous problem and by $Tu=g$ in the inhomogeneous problem; testing against $v\in H^1_0$ expresses the weak equation and does not by itself impose boundary data; the integrals are the ones proved absolutely convergent in [[lem-elliptic-form-is-well-defined-and-bounded]].
