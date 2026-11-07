---
id: thm-gauss-composition-algorithm-correct-and-terminates
kind: theorem
title: Ideal-Product Gauss Composition Is Correct and Terminates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - alg-compose-primitive-binary-quadratic-forms-by-ideal-multiplication
  - alg-integer-column-hermite-normal-form
  - thm-integer-column-hnf-terminates-and-is-canonical
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - thm-proper-invertible-ideal-classes-form-abelian-group
  - def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-quadratic-order-of-discriminant
  - def-product-and-colon-of-fractional-ideals
  - def-field-norm-and-trace
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
  - def-proper-equivalence-of-binary-quadratic-forms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §§3.2–3.3 and Appendix, pp. 232–237, 249–250"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, §§3.19–3.20 and §4.29"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: pass
---

## Statement

For any two inputs in the definition of exact ideal-product composition, the
procedure terminates and returns a primitive integral binary quadratic form of
discriminant $D$ whose proper class is the Gauss composition product of the
input classes. Its output need not be a reduced or canonical representative,
and no complexity bound is asserted.

## Statement references

[Bhargava, “Higher Composition Laws I,” Theorems 9–12, §§3.2–3.3 and Appendix, pp. 232–237, 249–250](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §4.29, pp. 81–83 (maximal-order comparison only)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** Two primitive forms $Q_i=(a_i,b_i,c_i)$ of the same nonzero nonsquare discriminant $D$, with the sign restriction in the algorithm definition.

[F1] [[alg-compose-primitive-binary-quadratic-forms-by-ideal-multiplication]]: the procedure builds the four pairwise-product columns, computes their column-Hermite basis, and normalizes the resulting norm form by its signed lattice determinant.

[F2] [[alg-integer-column-hermite-normal-form]]: for a full-row-rank integer matrix, the procedure returns upper-triangular basis columns with positive pivots and residues $0\le h_{ij}<h_{ii}$ that generate the input column lattice.

[F3] [[thm-integer-column-hnf-terminates-and-is-canonical]]: for every full-row-rank integer input, the column-Hermite procedure terminates and returns the unique basis with that convention.

[F4] [[def-quadratic-order-of-discriminant]]: $\tau_D^2=\delta\tau_D+q_D$ in the basis $(1,\tau_D)$.

[F5] [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]]: the oriented norm form of a proper invertible ideal basis is primitive of discriminant $D$ and represents its ideal class.

[F6] [[thm-proper-invertible-ideal-classes-form-abelian-group]]: the product of ideal classes is induced by ideal multiplication, including the real oriented convention.

## Proof

1.1 Each $a_i\ne0$: if $a_i=0$, then the discriminant equation in [F1] gives $D=b_i^2$, contrary to the nonsquare hypothesis. The ideals associated with the inputs have ordered bases $(a_i,k_i+\tau_D)$ in the order coordinates. Multiplying the two basis elements in each of the four possible pairs gives, respectively, $a_1a_2$, $a_1k_2+a_1\tau_D$, $a_2k_1+a_2\tau_D$, and $k_1k_2+q_D+(k_1+k_2+\delta)\tau_D$. These are exactly the four columns in [F1], by [F4]. [F1, F4, given, algebra]

1.2 The column span is the product lattice $J=I_{Q_1}I_{Q_2}$. It has rank two because it contains the nonzero element $a_1a_2$ and is an $\mathcal O_D$-ideal, hence contains $a_1a_2\mathcal O_D$. Thus the HNF input has full row rank. By [F2]–[F3], the procedure terminates and its columns $u,v$ form the canonical basis of $J$. [F1, F2, F3, F4, given, algebra]

1.3 The HNF matrix is upper triangular with positive diagonal, so $m=\det[u\ v]>0$. Its column lattice has exactly $m$ cosets in $\mathcal O_D$: reducing the second coordinate modulo $h_{22}$ and then the first modulo $h_{11}$ gives one representative for each pair of residues. Hence $m=[\mathcal O_D:J]$. In the real case the orientation of $(u,\epsilon v)$ has sign $\epsilon=\operatorname{sgn}(a_1a_2)$, the product of the input orientation signs; in the imaginary case both input orientations are positive and $\epsilon=1$. [F1, F2, F4, given, algebra]

2.1 The ordered basis $(u,\epsilon v)$ therefore has signed ideal norm $\epsilon m$. Applying [F5] to the invertible product ideal $J$ shows that its normalized norm form $N_{K_D/\mathbb Q}(ux+\epsilon vy)/(\epsilon m)$ is an integral primitive form of discriminant $D$. By [F6], its oriented ideal class is the product of the input classes. This is exactly the returned form and proves correctness. [F5, F6, step 1.2, step 1.3, algebra]

3.1 The only unbounded loop is the HNF procedure; [F3] proves it terminates on the full-row-rank matrix established in step 1.2. All other operations are a fixed number of integer multiplications, additions, determinants, and exact rational divisions. The full procedure therefore terminates. [F1, F3, step 1.2, algebra] ∎
