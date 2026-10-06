---
id: def-formal-adjoint-and-adjoint-weak-dirichlet-problem
kind: definition
title: "The formal adjoint and the adjoint weak Dirichlet problem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [cor-a-sufficiently-large-shift-is-coercive, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, def-h-minus-one-as-the-dual-of-h-one-zero, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-elliptic-form-is-well-defined-and-bounded, thm-garding-inequality-for-a-divergence-form-elliptic-operator, thm-locally-integrable-functions-embed-in-distributions, def-distributional-derivative]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.9, definition of the formal adjoint $L^*$ and the homogeneous adjoint problem, printed p. 107 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.4, adjoint and nonsymmetric forms, printed pp. 98-100 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, self-adjointness condition for the form, printed p. 101 (read in full)'
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and let $L,a$ be as in [[def-uniformly-elliptic-divergence-form-operator]]. The **adjoint form** is
$$a^*(u,v):=\overline{a(v,u)},$$
a bounded sesquilinear form on $H^1(\Omega)$ with the same bound as $a$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[lem-elliptic-form-is-well-defined-and-bounded]]); in coefficients
$$a^*(u,v)=\int_\Omega\Big(\overline{a^{ji}}D_ju\overline{D_iv}+\overline{b^i}u\overline{D_iv}+\overline{c}u\overline{v}\Big)dx .$$
The **formal adjoint** is the expression $L^*u:=-D_i(\overline{a^{ji}}D_ju)-D_i(\overline{b^i}u)+\overline{c}u$, understood as a distribution: for $w,v\in C_c^\infty(\Omega)$, $\langle L^*w,\overline v\rangle=a^*(w,v)$. Indeed the coefficient products are locally integrable, hence define regular distributions by [[thm-locally-integrable-functions-embed-in-distributions]], and the signed derivative rule of [[def-distributional-derivative]] gives exactly the displayed form. Even for smooth $w$, $L^*w$ need not be a locally integrable function when the coefficients are merely measurable; an integral $\int(L^*w)\overline v$ is used only when it is represented by such a function; the form $a^*$ is the primary object and is defined before any integration by parts. The **adjoint weak Dirichlet problem** with datum $f\in L^2(\Omega)$ asks for $v\in H^1_0(\Omega)$ with
$$a^*(v,w)=(f,w)_{L^2}\qquad\text{for every }w\in H^1_0(\Omega),$$
and its homogeneous version is $a^*(v,w)=0$ for all $w$. No orthogonality is invoked in this definition. Since $\operatorname{Re}a^*(u,u)=\operatorname{Re}a(u,u)$, the Garding constants of [[thm-garding-inequality-for-a-divergence-form-elliptic-operator]] also apply to $a^*$, and $a^*_\mu:=a^*+\mu(\cdot,\cdot)_{L^2}$ is coercive for $\mu\ge\beta$ ([[cor-a-sufficiently-large-shift-is-coercive]]).

**Conventions recorded with the definition.** All pairings are the $L^2$ or $H^1_0$ pairings of the cited items, with conjugation in the second slot; the datum $f\in L^2(\Omega)$ acts through the conjugate-linear functional $w\mapsto(f,w)_{L^2}$, which is an element of $H^{-1}(\Omega)$ by the Cauchy--Schwarz estimate $\|w\|_{L^2}\le\|w\|_{H^1_0}$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]). The formal expression $L^*$ is recorded as the operator whose weak pairing reproduces $a^*$ on smooth compactly supported functions; $L^*$ is not claimed to be of the same divergence form as $L$, and no boundary condition is attached to it beyond the test class $H^1_0(\Omega)$. The adjoint weak problem is stated for $H^1_0$ test functions exactly as in [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], and no existence or uniqueness is asserted here.
