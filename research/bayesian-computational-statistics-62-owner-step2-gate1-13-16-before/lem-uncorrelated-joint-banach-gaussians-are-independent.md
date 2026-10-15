---
id: lem-uncorrelated-joint-banach-gaussians-are-independent
kind: lemma
title: "Uncorrelated jointly Gaussian Banach random elements are independent"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-independent-random-elements
  - lem-separable-banach-has-countable-norming-family
  - lem-countable-norming-family-determines-borel-laws
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-rectangle-criterion-for-independent-random-elements
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-axiom-of-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - def-countable-choice
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The product law is compared on finite cylinders. AC and countable choice supply the stated product and countable-coordinate interfaces; AC also supplies HB for the norming family."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 3.1: Gaussian orthogonality, independence, and countable determining families."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Section 4.2: independence of Gaussian components."
---

## Statement

Assume AC and countable choice. Let $X$ and $Y$ be jointly centered Gaussian Borel random elements taking
values in real separable Banach spaces $B_1$ and $B_2$. Here jointly Gaussian
means every finite family of continuous linear coordinates of $(X,Y)$ has a
multivariate normal law. If
$E[\ell(X)m(Y)]=0$ for every $\ell\in B_1^*$ and $m\in B_2^*$, then $X$ and
$Y$ are independent.

## Facts & Assumptions

[A1] AC and countable choice are explicit assumptions of the finite Gaussian, product-measure, and countable-coordinate interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] Under AC, the real dominated-extension theorem supplies the Hahn–Banach principle HB used by the dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] A centered multivariate normal vector has characteristic function $u\mapsto e^{-u^\mathsf T\Sigma u/2}$, which determines its law ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F2] Countable norming coordinates determine a Borel probability law on a separable Banach space ([[lem-separable-banach-has-countable-norming-family]], [[lem-countable-norming-family-determines-borel-laws]]).

[F3] The product probability of two Borel probabilities on these Polish spaces exists and has the product values on measurable rectangles ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F4] Measures agreeing on a generating pi-system containing the whole space, with equal finite total masses, agree on the generated sigma-algebra ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]). Here the joint law and product law both assign mass one to $B_1\times B_2$.

[F5] Independence is equivalent to the product identity on all measurable rectangles ([[def-independent-random-elements]], [[thm-rectangle-criterion-for-independent-random-elements]]).

## Proof


**Given:** AC, countable choice, jointly centered Gaussian Borel random elements $X,Y$ with values in $B_1,B_2$, and zero mixed covariance for every pair of continuous linear functionals.

1.1 Choose countable norming families $(\ell_i)$ for $B_1$ and $(m_j)$ for $B_2$. For any finite subfamilies, the joint coordinate vector is centered multivariate normal. Its covariance matrix has zero off-diagonal block by the hypothesis, so the characteristic function in [F1] is the product of the two marginal characteristic functions. The product law has that same characteristic function, so uniqueness in [F1] proves the finite coordinate vectors are independent. [A1, A2, F1, F2, given, choose]

2.1 Finite-coordinate cylinder rectangles form a pi-system generating $\mathcal B(B_1)\otimes\mathcal B(B_2)$ by [F2]. The joint law of $(X,Y)$ and the product of its marginal laws agree on every such rectangle by step 1.1; [F3] supplies that product measure. The cylinder pi-system contains $B_1\times B_2$, and both laws have mass one, so the constant exhaustion meets [F4] and gives equality on the generated sigma-algebra. The rectangle criterion [F5] now gives independence of $X$ and $Y$. [A1, A2, F2, F3, F4, F5, step 1.1, algebra] ∎

