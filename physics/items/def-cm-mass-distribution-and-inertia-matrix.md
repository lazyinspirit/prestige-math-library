---
id: def-cm-mass-distribution-and-inertia-matrix
kind: definition
title: "Mass distributions on $\\mathbb R^3$: total mass, first moment and inertia matrix"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-borel-sigma-algebra, def-measure, def-measure-space, def-metric-ball, def-metric-topology, lem-metrics-on-rn, thm-metric-open-set-algebra, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, def-countable-choice]
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  thm-metric-open-set-algebra: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: [lem-cm-mass-moments-are-finite]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2, Eqs. (3.19)-(3.22), printed pp. 50-52: inertia-tensor components of a discrete or continuous mass distribution and the symmetry/positivity computation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.2, Eqs. (4.16)-(4.22): continuous inertia-tensor integral and angular momentum"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.4 (Inertia Tensor), Eq. (2.41) and §2.6 (Vector Angular Momentum)"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

Let $\mathcal B(\mathbb R^3)$ be the Borel sigma-algebra of $\mathbb R^3$ ([[def-borel-sigma-algebra]]) and let $\nu$ be a measure on the measurable space $(\mathbb R^3,\mathcal B(\mathbb R^3))$ ([[def-measure]], [[def-measure-space]]) that is **finite**, $\nu(\mathbb R^3)<+\infty$, and **bounded**, meaning that there is a real $R>0$ with
$$\nu\bigl(\mathbb R^3\setminus\overline B_R(0)\bigr)=0,$$
the closed ball being that of [[def-metric-ball]]. Throughout, integrals are Lebesgue integrals against $\nu$ in the sense of [[def-integral-over-a-measurable-set]] and [[def-integrable-real-and-complex-functions-and-their-integrals]], and for a measurable vector- or matrix-valued function the integral is defined **componentwise**: $\int F\,d\nu:=\bigl(\int F_1\,d\nu,\int F_2\,d\nu,\int F_3\,d\nu\bigr)$ and $\bigl(\int M\,d\nu\bigr)_{jk}:=\int M_{jk}\,d\nu$, whenever every displayed scalar integral is finite.

A **mass distribution on $\mathbb R^3$** is a bounded finite Borel measure $\nu$ with $m:=\nu(\mathbb R^3)\in(0,+\infty)$; the number $m$ is its **total mass**. Writing points of $\mathbb R^3$ as $\rho$ and using the Euclidean inner product $\langle\cdot,\cdot\rangle$ and norm $\lVert\rho\rVert_2=\sqrt{\langle\rho,\rho\rangle}$ of [[def-euclidean-inner-product]], define:

1. the **first moment** $\mu(\nu):=\int\rho\,d\nu\in\mathbb R^3$, read componentwise as $\mu(\nu)_j=\int\rho_j\,d\nu$;
2. the **inertia matrix** $I(\nu)\in M_3(\mathbb R)$ ([[def-matrix-space]]) by its entries $I(\nu)_{jk}:=\int\bigl(\lVert\rho\rVert_2^2\,\delta_{jk}-\rho_j\rho_k\bigr)\,d\nu$, where $\delta_{jk}=1$ if $j=k$ and $\delta_{jk}=0$ otherwise; equivalently $I(\nu)=\int\bigl(\lVert\rho\rVert_2^2 I_3-\rho\rho^{\mathsf T}\bigr)\,d\nu$ with $I_3$ the identity matrix and $\rho\rho^{\mathsf T}$ the matrix product of [[def-matrix-product-and-identity-matrix]].

The mass distribution is **centred** when $\mu(\nu)=0$. Under the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), each of the integrals above is a finite real number: on $\overline B_R(0)$ one has $|\rho_j|\le R$ and $|\rho_j\rho_k|\le R^2$, and $\nu(\mathbb R^3)<+\infty$; the precise statement and proof are [[lem-cm-mass-moments-are-finite]], which depends on this definition only for its notation. The assumption is used there exactly once, to obtain the Borel measurability of the polynomial integrands from the published continuity criterion; every later item that invokes this finiteness carries the assumption explicitly.

## Remarks

- **Nothing physical is asserted.** "Mass distribution", "total mass" and "inertia matrix" are names for the mathematical objects just defined. No postulate that a physical body is described by such a measure, no identification of $\nu$ with a measured mass, and no mechanical law is part of this definition; the physical reading is supplied by the classical-mechanics items that consume it, with their own hypotheses.

- **Generality.** The measure need not be absolutely continuous with respect to Lebesgue measure and need not be atomless: finitely many point masses, a surface density, and a volume density are all special cases. The bounded-support hypothesis makes every polynomial moment of degree at most two finite; without it the second moment could diverge.

- **Why the first moment matters.** Being centred is a condition on the coordinates in which the measure is expressed: it says that the origin of the body coordinate system has been placed at the centre of mass of the distribution. A physical consumer that uses this definition must state that its body coordinates are so placed; the general translation behaviour of $\mu$ and $I$ is not asserted here.
