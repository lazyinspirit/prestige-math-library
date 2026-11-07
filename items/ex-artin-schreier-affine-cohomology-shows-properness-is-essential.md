---
id: ex-artin-schreier-affine-cohomology-shows-properness-is-essential
kind: example
title: Artin–Schreier affine cohomology shows properness is essential
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
- def-axiom-of-choice
- lem-proper-curve-torsion-cohomology-finite-and-field-invariant
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
  - title: The Stacks Project, Etale Cohomology
    url: https://stacks.math.columbia.edu/tag/03SC
    locator: Explicit local consequence of the indicated local provider; no new full-source reading is claimed.
axiom_use: Explicit AC inherited from the affine additive-sheaf calculation.
---

## Example

Assume the Axiom of Choice. For an algebraically closed field k of characteristic p>0, H^1_et(A1_k,Z/p) is canonically k[t]/{a^p−a:a∈k[t]}. The classes of t^m, for positive integers m prime to p, are linearly independent over F_p. In particular this group is infinite, so the finite-coefficient finiteness statement for proper curves fails for this nonproper curve.

## Facts & Assumptions

**Given:** AC, algebraically closed k of characteristic p and the affine line.

[F1] The locally reconstructed affine quasi-coherent étale acyclicity and actual Artin–Schreier exact sequence are used from the curve proof; no proper-curve conclusion is applied to the affine line. [[lem-proper-curve-torsion-cohomology-finite-and-field-invariant]]

[F2] AC is explicit and is the scope of those local computations. [[def-axiom-of-choice]]

## Verification

1.1 On any étale test scheme in characteristic p the sequence 0→F_p→O→O→0 with last arrow a↦a^p−a is exact as étale sheaves. Its kernel consists locally of constants in F_p: the polynomial T^p−T factors as the product of T−c for c∈F_p with pairwise unit differences, so its root algebra is the corresponding disjoint union. To lift a local section b, use the monic finite free algebra O[T]/(T^p−T−b); derivative −1 makes it étale, and its positive rank makes it a surjective cover. [F1, F2, given, construct, algebra]

2.1 The additive sheaf O on the affine line has H1_et=0 by the affine quasi-coherent calculation in [F1]. Concretely, an additive torsor is trivial on an étale cover; refine to finitely many affine members and take their product B, faithfully flat over k[t]. Its translation cocycle lies in B⊗B and the Amitsur complex is exact: after tensoring with B the cover has a section and insertion of that section gives a contracting homotopy; faithful flatness reflects exactness. The cocycle is therefore a coboundary, and its corrected local trivializations glue to a global section. [F1, F2, step 1.1, given, construct, algebra]

3.1 The cohomology sequence of step1.1 consequently identifies H1_et(A1_k,F_p) with the cokernel of k[t]→k[t], a↦a^p−a. This is a quotient of additive abelian groups, indeed of F_p-vector spaces, rather than a quotient by an ideal. The boundary is the class of the actual Artin–Schreier torsor T^p−T=b. [F1, F2, step 2.1, given, construct, algebra]

4.1 For a nonconstant a(t) of degree d>0 the degree of a(t)^p−a(t) is pd, because its leading p-th power has degree pd>d and cannot cancel with the subtraction term. A constant a gives a constant polynomial. Hence no nonzero polynomial of positive degree prime to p belongs to the image. [F1, F2, step 3.1, given, construct, algebra]

5.1 Consider a finite nontrivial F_p-linear combination Σ c_m t^m with positive exponents m prime to p. Its largest surviving exponent is again prime to p. Step4.1 shows that polynomial is not a^p−a, so its cohomology class is nonzero. Thus the indicated infinitely many classes are F_p-linearly independent. The infinite list of such exponents includes 1+jp for j≥0. [F1, F2, step 4.1, given, construct, algebra]

6.1 This proves the asserted canonical quotient and its infinitude. The affine line is finite type, smooth and one-dimensional but not proper over k. The example therefore exhibits the precise failure of finite constant p-coefficient cohomological finiteness when properness is dropped; it invokes no claim of proper base change for the affine line. [F1, F2, step 5.1, given, construct, algebra] ∎

