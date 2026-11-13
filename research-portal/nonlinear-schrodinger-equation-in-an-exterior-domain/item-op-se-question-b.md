---
title: "Question B: controls on part of the boundary"
status: published
research_item: op-se-question-b
dependency_level: 11
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 1, equations (1.1)–(1.3) and Question A; PDF page 2, Question
        B, before equation (1.4)
      statement: Question A asks for boundary steering between arbitrary H^s endpoints
        in a bounded domain for the cubic NLS with Dirichlet or Neumann control.
        Question B asks whether the answer remains positive with the control
        acting on only part of the boundary.
      hypotheses: A bounded domain in R^n, lambda real and nonzero, s nonnegative and
        T positive. The general question precedes the specialized obstacle
        geometry and does not fix the controlled subset, complement condition or
        control space.
      reading_limits: Checked these passages directly in the frozen v2 PDF, with its
        supplied SHA256 verified. This is attribution of the article's question
        and equation, not an imported controllability theorem or evidence for a
        prerequisite.
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 2, equation (1.4) and paragraph following Question B-prime;
        PDF page 4, Theorem 1.1
      statement: The article reports local exact outer-boundary Dirichlet
        controllability for the truncated exterior of a smooth nonempty compact
        non-trapping obstacle with connected exterior, in dimensions two and
        three and at orders one and two, for sufficiently small endpoints
        vanishing on the obstacle boundary, in every positive control time.
      hypotheses: The geometry of equation (1.4), a non-trapping obstacle with
        connected exterior, n in {2,3}, s in {1,2}, T positive, nonzero real
        lambda, and both endpoints sufficiently small in H^s and zero on the
        obstacle boundary.
      reading_limits: Checked the formulation of Theorem 1.1 and the introductory
        description in the frozen v2 PDF. Only the article's reported partial
        result is summarized here; this item neither checks its proof nor uses
        its conclusion as a premise. No current-literature status search was
        performed.
---

PDF p. 2: ` Question B `

## Prerequisites

- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:lem-bessel-potentials-shift-sobolev-order-isometrically](https://alphabetamath.cc/item/lem-bessel-potentials-shift-sobolev-order-isometrically)
- [math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-classical-normal-derivative](https://alphabetamath.cc/item/def-classical-normal-derivative)
- [math:def-laplacian-of-a-c2-function](https://alphabetamath.cc/item/def-laplacian-of-a-c2-function)
- [def-se-geometry](item-def-se-geometry)
- [lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly](item-lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Open problem

Assume Countable Choice. Let $\Omega_0\subset\mathbb R^n$ be a general bounded domain, with $n\ge1$ and $\Gamma=\partial\Omega_0$. Let $\lambda\in\mathbb R\setminus\{0\}$, $s\ge0$ and $T>0$. No obstacle representation of $\Omega_0$ is imposed in Question B.

Question B asks whether the positive answer sought in Question A persists when the boundary control acts only on part of $\Gamma$: for every pair $u_0,u_1\in H^s(\Omega_0)$, can one find such a control $h$ and a solution $u\in C([0,T];H^s(\Omega_0))$ with $u(0)=u_0$ and $u(T)=u_1$?

The equation on this general domain is $iu_t+\Delta u+\lambda|u|^2u=0$ on $\Omega_0\times(0,T)$, with either Dirichlet control, prescribing $u=h$, or Neumann control, prescribing $\partial_\nu u=h$, on the controlled part of the boundary. Here $i^2=-1$, $u_t=\partial u/\partial t$, $|u|^2u=u\overline u\,u$, and, for a classically twice differentiable state, $\Delta u=\sum_{j=1}^n\partial_{x_j}^2u$, acting on real and imaginary parts.

Where the boundary and state admit a classical normal derivative, $\nu$ denotes the outward unit normal and $\partial_\nu u=\nabla_xu\cdot\nu$, componentwise; in particular this convention applies to $C^1$ states up to a $C^1$ boundary. For less regular states an appropriate weak interpretation must be specified separately; no classical or weak boundary trace is asserted for all $s$.

Exact controllability means the stated existence of a steering control for every pair of endpoints; it does not assert a bounded control-selection operator.

For a concrete reading of the state space, use the restriction convention: $H^s(\Omega_0)$ consists of restrictions, modulo almost-everywhere equality, of elements of the whole-space Bessel-potential space $H^s(\mathbb R^n)$, with the quotient norm given by the infimum of whole-space norms of extensions. The whole-space space is understood in its weighted Fourier realization. This convention makes the notation definite; it is not an additional controllability result.

The notation $C([0,T];H^s(\Omega_0))$ means paths continuous in the $H^s(\Omega_0)$ norm, with norm $\sup_{0\le t\le T}\|u(t)\|_{H^s(\Omega_0)}$; the endpoint values in the question are values of such a continuous path.

The question as posed does not specify a particular controlled subset, a boundary condition on its complement, a control space, or a weak trace interpretation for every $s$. A precise instance must specify these, the boundary regularity and the admissible solution class. Those choices can affect the answer; no assertion for every such choice is made here.

## Open problem references

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:lem-bessel-potentials-shift-sobolev-order-isometrically](https://alphabetamath.cc/item/lem-bessel-potentials-shift-sobolev-order-isometrically)

[math:def-nitsche-restriction-bessel-potential-sobolev-spaces](https://alphabetamath.cc/item/def-nitsche-restriction-bessel-potential-sobolev-spaces)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-classical-normal-derivative](https://alphabetamath.cc/item/def-classical-normal-derivative)

[math:def-laplacian-of-a-c2-function](https://alphabetamath.cc/item/def-laplacian-of-a-c2-function)

[def-se-geometry](item-def-se-geometry)

[lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly](item-lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Status

The frozen v2 article poses Question B on PDF page 2, before introducing the obstacle geometry as the specialization Question B-prime. Its formulation is retained here as an unresolved question in that article; no independent current-literature status search or claim of worldwide novelty is asserted.

For the partial result reported below, use the truncated geometry $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$, where $\Theta\subset B_{R_0}(0)$ is nonempty and compact, has a one-sided smooth boundary and connected exterior, and is non-trapping. The smooth-obstacle and non-trapping conventions are those of the geometry supplier: non-trapping means that every complete generalized reflected ray leaves each compact set in finite forward time. These conventions concern this specialized partial result.

For this status paragraph's Sobolev trace convention, assume the Axiom of Choice. For each smooth connected boundary component $S$ contained in $\Gamma_2$ and $s\in\{1,2\}$, use the bounded trace $\gamma_S:H^s(\Omega_0)\to H^{s-1/2}(S)$, with the restriction-quotient domain norm and finite-atlas Bessel-potential boundary norm. It agrees with smooth restriction and is independent of whole-space extensions and charts. An endpoint $u_j\in H^s(\Omega_0)$ vanishes on $\Gamma_2$ when $\gamma_Su_j=0$ for every such $S$; this is a condition on its Sobolev equivalence class. The trace supplier applies with $G=\Omega_0$, a bounded smooth domain in dimensions two and three, and $s=1$ or $s=2$.

As a reported partial result, the article states in Theorem 1.1 that, for a domain between an enclosing sphere and a smooth nonempty compact non-trapping obstacle with connected exterior, outer-boundary Dirichlet controls steer sufficiently small endpoint data vanishing on the obstacle boundary in every prescribed positive time, in dimensions two and three and for $s=1$ or $s=2$. This sentence attributes the theorem's claim to the article; it does not establish or use that theorem here. The reported result treats the specialized geometry and small data, rather than resolving the general question for arbitrary endpoint data or the Neumann alternative.
