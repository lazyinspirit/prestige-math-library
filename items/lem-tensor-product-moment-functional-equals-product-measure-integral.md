---
id: lem-tensor-product-moment-functional-equals-product-measure-integral
kind: lemma
title: "Tensor product moments equal integration against the finite product measure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-coordinatewise-product-moment-functional
  - def-gauss-moment-data
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-algebra-of-continuous-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tao, An Introduction to Measure Theory, §1.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
dependency_level: 2
---

## Statement

For the Gaussian coordinate data of [[def-coordinatewise-product-moment-functional]], let $\mu=\mu_1\otimes\cdots\otimes\mu_d$ on the finite product of the relative Borel interval spaces, with binary products iterated from left to right. Every real coordinatewise tensor polynomial $P$ in that definition is integrable and
$$\int P\,d\mu=I_\otimes(P).$$
This supplies a measure interpretation of the algebraic functional without redefining it. The conclusion also applies when each marginal measure is a probability law.

## Facts & Assumptions

**Given:** $d\ge1$, the finite positive coordinate moment measures and the real finite polynomial coefficients.

[F1] [[def-gauss-moment-data]] gives finite factor measures and finite absolute moments through each required coordinate degree; [[def-coordinatewise-product-moment-functional]] fixes the finite coefficient and product/sum order.

[F2] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] gives each binary product measure, its rectangle formula and sigma-finiteness.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] factors iterated integrals of nonnegative product-measurable functions.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] gives iterated integration for integrable functions; [[thm-linearity-of-the-lebesgue-integral-on-l-one]] gives scalar and finite-sum linearity.

[F5] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], and [[thm-continuous-preimages-of-borel-sets-are-borel]] give product measurability of restrictions of continuous real coordinate polynomials; [[thm-algebra-of-continuous-functions]] gives their continuity.

## Proof

1.1 Each factor measure is finite, hence sigma-finite. Iterating [F2] constructs the finite product and makes it finite, with total mass equal to the product of the finite factor masses. For the product of intervals, the product sigma-algebra is the trace of the Euclidean Borel sigma-algebra: [F5] gives the binary Euclidean equality, and tracing its rectangle generators to the interval factors gives the corresponding trace equality; finite induction gives the $d$-factor case. Hence each coordinate monomial and its absolute value are product-measurable by [F5]. [given, F1, F2, F5, induction]

2.1 Fix an allowed multi-index $\alpha$. Apply [F3] successively to the nonnegative function $\prod_{j=1}^d|x_j|^{\alpha_j}$. At each step the inner one-variable integral is the finite absolute moment of the last coordinate, and it factors out as a nonnegative finite scalar. Induction therefore gives $\int\prod_j|x_j|^{\alpha_j}\,d\mu=\prod_j\int|x_j|^{\alpha_j}\,d\mu_j<\infty$. Thus the signed real monomial is integrable. [F1, F3, F4, step 1.1, induction, algebra]

3.1 Apply [F4] to that integrable monomial, integrating the last coordinate first. Its one-variable signed moment is $M^{(d)}_{\alpha_d}$; repeat for the preceding coordinates. Each use is legitimate by the absolute integrability in step 2.1, and finite induction yields $\int\prod_jx_j^{\alpha_j}\,d\mu=\prod_jM^{(j)}_{\alpha_j}$. At $d=1$ this is the moment definition itself. [F1, F4, step 2.1, induction, algebra]

4.1 A finite real linear combination of these integrable monomials is integrable by [F4]. Integrating that combination term by term in the fixed coefficient order from [F1] and substituting step 3.1 gives $\int P\,d\mu=\sum_\alpha c_\alpha\prod_jM^{(j)}_{\alpha_j}=I_\otimes(P)$. No probability normalization or new choice assumption was used. [F1, F4, step 3.1, algebra] ∎
