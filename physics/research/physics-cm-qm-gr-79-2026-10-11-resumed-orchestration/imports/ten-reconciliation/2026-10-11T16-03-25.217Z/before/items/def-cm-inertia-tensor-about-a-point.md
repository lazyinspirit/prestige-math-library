---
id: def-cm-inertia-tensor-about-a-point
kind: definition
title: "The inertia tensor of a mass distribution about an arbitrary point of $\\mathbb R^3$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-mass-distribution-and-inertia-matrix, def-countable-choice, def-borel-sigma-algebra, def-measure, def-measure-space, def-metric-ball, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
justified_by: [lem-cm-inertia-tensor-about-a-point-is-finite]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2.1, Eq. (3.25) with the derivation (3.26), printed pp. 52-53: the inertia tensor about a displaced point and the axis-shift relation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 4 Section 4.2, Eqs. (4.27)-(4.29), printed page 6 of Chapter 4 (PDF page 60): the axis-shift theorem, I'_{jj'}=I_{jj'}+M(delta_{jj'}d^2-d_jd_{j'}), for an arbitrary shift vector d"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Definition

Let $\mathcal B(\mathbb R^3)$ be the Borel sigma-algebra of $\mathbb R^3$
([[def-borel-sigma-algebra]]), let $\nu$ be a measure on the measurable space
$(\mathbb R^3,\mathcal B(\mathbb R^3))$ ([[def-measure]], [[def-measure-space]]) that is
**finite** and **bounded**: $\nu(\mathbb R^3)<+\infty$ and
$\nu\bigl(\mathbb R^3\setminus\overline B_R(0)\bigr)=0$ for some real $R>0$
([[def-metric-ball]]). Thus $\nu$ is a mass distribution on $\mathbb R^3$ with total mass
$m=\nu(\mathbb R^3)\in(0,+\infty)$ in the sense of [[def-cm-mass-distribution-and-inertia-matrix]],
and integrals against $\nu$ are Lebesgue integrals as in [[def-integral-over-a-measurable-set]]
and [[def-integrable-real-and-complex-functions-and-their-integrals]], defined componentwise for
vector- and matrix-valued integrands. Recall that the inertia matrix of $\nu$ is

$$I(\nu)=\int\bigl(\lVert\rho\rVert_2^2I_3-\rho\rho^{\mathsf T}\bigr)\,d\nu(\rho)\in M_3(\mathbb R),$$

with $I_3$ the identity matrix and entrywise integrals
$I(\nu)_{jk}=\int(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)\,d\nu$, where $\lVert\cdot\rVert_2$
and the matrix conventions are those of [[def-euclidean-inner-product]],
[[def-matrix-space]] and [[def-matrix-product-and-identity-matrix]].

**Shifted integrand and inertia tensor about a point.** For $a\in\mathbb R^3$ define the
component functions

$$G_a(\rho)_{jk}:=\lVert\rho-a\rVert_2^2\,\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)\qquad(j,k\in\{1,2,3\}),$$

equivalently the matrix-valued function
$G_a(\rho)=\lVert\rho-a\rVert_2^2I_3-(\rho-a)(\rho-a)^{\mathsf T}$, and define the **inertia
tensor of $\nu$ about $a$** $I_\nu(a)\in M_3(\mathbb R)$ by its entries

$$I_\nu(a)_{jk}:=\int G_a(\rho)_{jk}\,d\nu(\rho).$$

Under the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) each entry is
a finite real number; this is the content of [[lem-cm-inertia-tensor-about-a-point-is-finite]],
which depends on this definition only for its notation. For $a=0$ the shifted integrand is the
parent integrand $\lVert\rho\rVert_2^2I_3-\rho\rho^{\mathsf T}$ and $I_\nu(0)=I(\nu)$.

**Scope.** The definition names a mathematical function $a\mapsto I_\nu(a)$ from $\mathbb R^3$ to
$M_3(\mathbb R)$ determined by the measure $\nu$ and its coordinate origin. No physical body, unit
system or measured mass is asserted, and no relation between $I_\nu(a)$ and $I(\nu)$ is asserted
here; the centred case is proved separately on this page.

## Remarks

- **The measure need not be atomless.** Points, curves, surfaces and volumes are all admissible:
  $\nu$ is an arbitrary bounded finite Borel measure, so finite sums of Dirac measures, lines and
  surface measures embedded in $\mathbb R^3$ and absolutely continuous volume measures are all
  special cases, exactly as in [[def-cm-mass-distribution-and-inertia-matrix]].

- **Translation of the point, not of the measure.** The point $a$ only shifts the reference point
  at which the second moments are computed; the measure and its coordinate representation are
  unchanged, and $\mu(\nu)$ is not assumed to vanish unless a consumer states it.
