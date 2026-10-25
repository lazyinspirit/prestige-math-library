---
id: ex-characteristic-numbers-of-a-product
kind: example
title: "Characteristic numbers of a product of projective planes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas, lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes, lem-projective-space-products-have-triangular-characteristic-number-matrix, def-pontryagin-number-of-a-closed-oriented-manifold, thm-cartesian-product-makes-bordism-a-graded-ring, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, def-kronecker-evaluation-pairing, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Equation (12.17), printed p. 105: exactly the matrix $\\binom{25\\ 10}{18\\ 9}$ for the degree-eight projective-space products"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 16, printed pp. 190-195: s-class product formulas, Example 16.6 and Theorem 16.8. The ordinary degree-eight numbers are computed locally here; Freed (12.17) gives the displayed matrix."
dependency_level: 3
---

## Example

Assume AC ([[def-axiom-of-choice]]), inherited from the projective-space,
triangularity and characteristic-number suppliers. For $M=\mathbb{CP}^4$ and
$N=\mathbb{CP}^2\times\mathbb{CP}^2$ the degree-eight
Pontryagin-number matrix of the two monomials $p_1^2$ and $p_2$ is
$$\begin{pmatrix} p_1^2[M] & p_2[M]\\ p_1^2[N] & p_2[N]\end{pmatrix}=\begin{pmatrix} 25 & 10\\ 18 & 9\end{pmatrix},$$
with nonzero determinant $25\cdot9-10\cdot18=45$. Here
$p(T\mathbb{CP}^4)=(1+x^2)^5$ gives $p_1=5x^2$, $p_2=10x^4$ and
$p_1^2[M]=25$, $p_2[M]=10$; and the product formula gives
$p_1(TN)=3x^2\otimes1+1\otimes3y^2$, $p_2(TN)=9x^2\otimes y^2$, so
$p_1^2[N]=2\cdot9\cdot\langle x^2,[\mathbb{CP}^2]\rangle\langle y^2,[\mathbb{CP}^2]\rangle=18$
(twice the product of the two summands, the only surviving contribution) and
$p_2[N]=9$. The example verifies the multiplicativity formula of the A page and
exhibits the nonsingularity of the ordinary Pontryagin-number matrix in degree
eight; it also shows that the two classes are distinguished by their Pontryagin
numbers, matching the general Newton comparison lemma.

## Facts & Assumptions

**Given:** The manifolds $M=\mathbb{CP}^4$ and $N=\mathbb{CP}^2\times\mathbb{CP}^2$ with their complex product orientations, and the tangent Pontryagin classes.

[F1] [[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]: for $\mathbb{CP}^n$ with $x=c_1(\gamma^*)$, $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[x]/(x^{n+1})$, $\langle x^n,[\mathbb{CP}^n]\rangle=1$, and $p(T\mathbb{CP}^n)=(1+x^2)^{n+1}$; [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]] supplies the same truncated presentation.

[F2] [[lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas]]: for complex-manifold factors the tangent class is the external product $p(TN)=p(T\mathbb{CP}^2)\times p(T\mathbb{CP}^2)$, and the Pontryagin numbers expand over the splittings of the monomial, with the cross-product evaluation of [[def-kronecker-evaluation-pairing]].

[F3] [[def-pontryagin-number-of-a-closed-oriented-manifold]] defines the numbers as evaluations and assigns $0$ to monomials of the wrong total degree; [[thm-cartesian-product-makes-bordism-a-graded-ring]] records that the products represent classes in the graded oriented bordism ring.

[F4] [[lem-projective-space-products-have-triangular-characteristic-number-matrix]] proves that the ordinary degree-eight matrix for the products $\mathbb{CP}^4$ and $\mathbb{CP}^2\times\mathbb{CP}^2$ is invertible over $\mathbb Q$ by the Newton comparison, and computes the same two-by-two array.

## Verification

1.1 On $M=\mathbb{CP}^4$ the ring is $\mathbb Z[x]/(x^5)$ with $\langle x^4,[M]\rangle=1$ by [F1], so $x^5=0$ and all higher powers vanish. The total Pontryagin class is $p(TM)=(1+x^2)^5=1+5x^2+10x^4+10x^6+5x^8+x^{10}$, which truncates to $1+5x^2+10x^4$; hence $p_1=5x^2$, $p_2=10x^4$, and all other positive classes vanish. Therefore $p_1^2=25x^4$ evaluates to $p_1^2[M]=25\langle x^4,[M]\rangle=25$ and $p_2[M]=10\langle x^4,[M]\rangle=10$. [F1, F3]

2.1 On $N=\mathbb{CP}^2\times\mathbb{CP}^2$ write $x,y$ for the pullbacks of the generators of the two factors; by [F1] and [F2] the ring is $\mathbb Z[x,y]/(x^3,y^3)$ with $\langle x^2y^2,[N]\rangle=\langle x^2,[\mathbb{CP}^2]\rangle\langle y^2,[\mathbb{CP}^2]\rangle=1$, and $p(TN)=(1+x^2)^3\times(1+y^2)^3$ gives $$p_1(TN)=3x^2\otimes1+1\otimes3y^2,\qquad p_2(TN)=9x^2\otimes y^2.$$ Squaring the first, $p_1^2=9x^4\otimes1+18x^2\otimes y^2+1\otimes9y^4$, and the outer terms vanish since $x^3=y^3=0$, while the middle term survives, so $p_1^2[N]=18\langle x^2y^2,[N]\rangle=18$; similarly $p_2[N]=9\langle x^2y^2,[N]\rangle=9$. [F2, F3, step 1.1]

3.1 The resulting matrix with rows $M,N$ and columns $p_1^2,p_2$ is $\begin{pmatrix}25&10\\18&9\end{pmatrix}$, whose determinant is $25\cdot9-10\cdot18=225-180=45\ne0$. This exhibits the nonsingularity of the ordinary degree-eight matrix predicted by the Newton comparison of [F4] and shows that the two classes are separated by their Pontryagin numbers: no nontrivial rational relation between the rows can hold. [F4, step 1.1, step 2.1]

4.1 Boundary and convention remarks. The monomials $p_1^2$ and $p_2$ are the two partitions of $2$, and monomials of any other total degree evaluate to zero by the conventions of [F3]; in particular the higher Pontryagin classes of the factors vanish by the truncation. For degree zero the point has matrix $(1)$ and the products considered here have positive dimension. The example uses the draft A-page items and the cited suppliers, which carry their own choice declarations. [F1, F3, F4, step 2.1] ∎
