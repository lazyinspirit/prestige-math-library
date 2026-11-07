---
id: thm-effective-s-unit-equation-finite-solutions
kind: theorem
title: "Effective determination of solutions to the number-field unit equation αx+βy=1"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-certified-number-field-embeddings-and-logarithmic-minors
  - alg-certified-fundamental-unit-basis-and-torsion-decomposition
  - thm-certified-fundamental-unit-basis-and-torsion-computation-correct
  - lem-fundamental-unit-exponents-bounded-by-logarithmic-house
  - def-number-field
  - cor-effective-lower-bound-for-algebraic-unit-exponential-form
  - thm-unit-equation-finiteness-from-homogeneous-bound
  - thm-s-unit-theorem
  - def-fundamental-units
  - def-s-integers-and-s-units-of-a-number-field
  - def-axiom-of-choice
  - thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.12 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
    - title: "Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers, IMSc Report 116 (1992), Theorem 10.1"
      url: "https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. An exact input presentation of a number field is a monic irreducible polynomial $f\in\mathbb Q[T]$ together with the quotient field $K=\mathbb Q[T]/(f)$; elements of $K$ are given by rational polynomial residue classes of degree less than $\deg f$. Given such a number field and nonzero $\alpha,\beta\in K$, there is a terminating procedure which outputs a finite list $L\subseteq K^2$ such that
$$L=\{(x,y)\in(\mathcal O_K^\times)^2:\alpha x+\beta y=1\}.$$
Every number field admits an exact input presentation of this form, and the statement makes no complexity claim for the procedure.

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-fundamental-units]]

[[thm-s-unit-theorem]]

[[thm-primitive-element-theorem-for-finite-separable-extensions]]

[[thm-unit-equation-finiteness-from-homogeneous-bound]]

[[cor-effective-lower-bound-for-algebraic-unit-exponential-form]]

[Evertse, *Diophantine Equations*, Chapter 5, Theorem 5.12 and proof](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapter X, Theorem 10.1](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field with an exact input presentation, and nonzero coefficients $\alpha,\beta\in K$.

[A1] The Axiom of Choice is assumed by the unit-group and absolute-height results used by the homogeneous logarithmic route. ([[def-axiom-of-choice]], [[thm-s-unit-theorem]])

[F1] A number field is finite over $\mathbb Q$ and, since it is separable in characteristic zero, admits a primitive-element presentation. ([[def-number-field]], [[thm-primitive-element-theorem-for-finite-separable-extensions]])

[F2] The S-unit theorem with $S=\varnothing$ gives a finitely generated unit group with finite torsion subgroup and a fundamental-unit system. ([[thm-s-unit-theorem]], [[def-fundamental-units]])

[F3] The homogeneous corollary supplies an effective lower bound for the relevant nonzero multiplicative expressions in fixed algebraic numbers. ([[cor-effective-lower-bound-for-algebraic-unit-exponential-form]])

[F4] From an exact field presentation one can compute an integral basis, signature, arbitrarily accurate conjugate-modulus and logarithmic enclosures, and a rational inverse-row-norm bound for a known full-rank logarithmic minor. ([[lem-certified-number-field-embeddings-and-logarithmic-minors]])

[F5] From those integral field data one can compute fundamental units, the complete finite torsion list, and unique normal forms, without logarithmic lower bounds. ([[alg-certified-fundamental-unit-basis-and-torsion-decomposition]], [[thm-certified-fundamental-unit-basis-and-torsion-computation-correct]])

[F6] For fundamental units, the house bound follows from the inverse logarithmic minor and the product formula: if its inverse row norm is at most $C_0$, then every exponent of a unit $u$ is at most $C_0(d-1)\log M(u)$ in modulus. ([[lem-fundamental-unit-exponents-bounded-by-logarithmic-house]])

## Proof

1.1 Apply [F4] to construct the integral presentation and signature, then [F5] to obtain fundamental units $\epsilon_1,\ldots,\epsilon_r$ and all torsion elements. All computations are exact rational field arithmetic. If $r=0$, test all torsion pairs and return those satisfying the equation. This is already the full output by [F2]. Suppose henceforth $r>0$, so $d=[K:\mathbb Q]\ge2$. [given, A1, F2, F4, F5, algebra]

2.1 Apply [F4] to a full-rank logarithmic minor of the fundamental units. Enlarge its rational inverse norm bound to a positive rational $C_0$. By [F6] we may use $c_0=C_0(d-1)>0$ in the exponent-house inequality. Put $c=1/(c_0(d-1))$. Obtain an integer $P\ge1$ strictly larger than every conjugate modulus of both coefficients $\alpha,\beta$, using [F4]. Thus $\log|\sigma(\alpha)|$ and $\log|\sigma(\beta)|$ are both at most $P$. [F4, F6, step 1.1, algebra]

2.2 For each embedding $\sigma$, torsion element $\zeta$, and coefficient $\gamma\in\{\alpha,\beta\}$, apply the effective construction of [F3] to the fixed list $\sigma(\gamma\zeta),\sigma(\epsilon_1),\ldots,\sigma(\epsilon_r)$. Choose a positive rational $A$ at least all the resulting constants. This is finite computation: the construction in the corollary bounds the constants using only the field degree, integral denominators, and upper bounds for the conjugate moduli of those elements and their inverses. These are available from exact coordinates and [F4]. No recognition of principal-logarithm branch cuts is required. [F2, F3, F4, step 1.1, algebra]

3.1 Write a solution as $x=\zeta_1\prod\epsilon_j^{a_j}$, $y=\zeta_2\prod\epsilon_j^{b_j}$ and let $B=\max_j(|a_j|,|b_j|)$. If $B\ge1$, interchange the two coefficient-unit pairs if necessary so that $\max|b_j|=B$. The finiteness proof now gives, with the uniform constants selected above, $cB<A[\log(B+2)]^2+P$. Indeed $M(y)\ge e^{B/c_0}$ and the product formula gives $\min|\sigma(y)|\le M(y)^{-1/(d-1)}$; at a minimizing embedding the equation has nonzero difference $1-\sigma(\alpha x)=\sigma(\beta y)$, to which [F3] applies. The coefficient swap is covered by the choice of $A$ and $P$. [F2, F3, F6, step 2.1, step 2.2, algebra]

4.1 A finite explicit cutoff for this inequality is obtained as follows. For $t\ge1$, integrating $1/u\le u^{-3/4}$ from $1$ to $t$ gives $\log t\le4t^{1/4}$. Hence, for $B\ge2$, $[\log(B+2)]^2\le16\sqrt{B+2}\le32\sqrt B$. Choose an integer $H\ge\max\{2,(64A/c)^2,2P/c\}$. If $B>H$, then $A[\log(B+2)]^2\le32A\sqrt B<cB/2$ and $P<cB/2$, contradicting step 3.1. Thus every solution has all exponents in $[-H,H]$. Every quantity specifying $H$ is a computed rational number. [step 2.1, step 2.2, step 3.1, algebra]

5.1 Enumerate all torsion pairs and all pairs of integer exponent vectors in that finite box. Form $x,y$ by exact field multiplication and inversion; retain exactly those passing $\alpha x+\beta y=1$, removing duplicates by exact equality. Every returned element is a unit by construction, hence every returned pair is a solution. Conversely every solution has the unique normal forms of [F5] and the exponent bound in step 4.1, so is tested and retained. The finite enumeration terminates and gives exactly the required list. Finally [F1] gives the asserted existence of an input presentation for every number field. [F1, F5, step 1.1, step 4.1, algebra] ∎

## Remarks

The arithmetic algorithms and quantitative cutoff are supplied locally. The proof still depends on the homogeneous logarithmic lower bound through [F3]; that foundational proof remains held separately. No acceptance of that bound is inferred from this conditional consumer proof.
