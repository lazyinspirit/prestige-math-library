---
dependency_level: 1
id: lem-binary-sylvester-resultant-linear-factor-product
kind: lemma
title: "The Sylvester resultant as a product of binary linear-factor wedges"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-sylvester-resultant-of-binary-forms
  - lem-binary-map-resultant-linear-conjugacy
  - def-algebraically-closed-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2 resultant convention and AppendixA, TheoremA.10"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Let $L$ be an algebraically closed field and let $F_1,F_2$ be nonzero homogeneous binary forms of the same degree $d\ge1$. Choose nonzero vectors $a_i,b_j\in L^2$ such that
$$F_1(z)=\prod_{i=1}^d(z\wedge a_i),\qquad F_2(z)=\prod_{j=1}^d(z\wedge b_j).$$
With the ordered Sylvester convention whose first block multiplies $F_1$, one has
$$\operatorname{Res}_{d,d}(F_1,F_2)=\prod_{i,j}(a_i\wedge b_j).$$
Repeated factors, common factors and arbitrary characteristic are included.

## Statement references

[[def-sylvester-resultant-of-binary-forms]]

[[def-algebraically-closed-field]]

## Facts & Assumptions

**Given:** The field, degree, nonzero forms and factorizations in the statement.

[F1] The binary resultant is the determinant of $(A,B)\mapsto AF_1+BF_2$ in descending monomial bases, with the first block first. ([[def-sylvester-resultant-of-binary-forms]])

[F2] Input substitution by $M\in\operatorname{GL}_2(L)$ multiplies the resultant by $\det(M)^{d^2}$. ([[lem-binary-map-resultant-linear-conjugacy]])

[F3] Polynomials split over the given algebraically closed field. Such a field is infinite: a finite list $c_1,\ldots,c_m$ misses every root of $1+\prod_i(T-c_i)$. ([[def-algebraically-closed-field]])

## Proof

1.1 First assume $F_1(T,1)=c f(T)$, with $c\ne0$ and $f$ monic of degree $d$, and put $g(T)=F_2(T,1)$ of degree at most $d$. Scaling the first $d$ columns in [F1] gives $R(F_1,F_2)=c^dR(f,g)$. For monic $f$, every polynomial of degree at most $2d-1$ has a unique decomposition $Af+B$ with $\deg A,\deg B<d$, by monic division. In descending bases the map $(A,B)\mapsto Af+B$ has determinant1, because the first block has successive leading degrees $2d-1,\ldots,d$ with leading coefficients1 and the second block is the remaining monomial basis. Relative to this decomposition the Sylvester map $(A,C)\mapsto Af+Cg$ is block triangular with diagonal blocks the identity and multiplication by $g$ on $L[T]/(f)$. Hence $R(f,g)$ is the determinant of that multiplication operator. [F1, algebra]

1.2 Write $f(T)=\prod_{i=1}^d(T-\alpha_i)$, counting multiplicities. The classes of $1,(T-\alpha_1),\ldots,\prod_{i<d}(T-\alpha_i)$ form a basis of $L[T]/(f)$ because their successive degrees are $0,\ldots,d-1$ and they are monic. Multiplication by $T$ is triangular in this basis with diagonal entries $\alpha_1,\ldots,\alpha_d$, since $(T-\alpha_i)\prod_{j<i}(T-\alpha_j)=\prod_{j\le i}(T-\alpha_j)$ and the final product is zero in the quotient. Multiplication by $g$ consequently has determinant $\prod_i g(\alpha_i)$. In the current case each $a_{i,2}\ne0$, $\alpha_i=a_{i,1}/a_{i,2}$ and $c=\prod_i a_{i,2}$, so
$$c^d\prod_i g(\alpha_i)=\prod_{i,j}(a_{i,1}b_{j,2}-a_{i,2}b_{j,1}).$$
This proves the formula in the case of step1.1, including repeated and common roots. [F1, F3, step 1.1, algebra]

2.1 For general nonzero $F_1$, choose $M\in\operatorname{GL}_2(L)$ with $F_1(M(1,0))\ne0$; this is possible by [F3], because a nonzero binary form has only finitely many projective roots. Then $F_1\circ M$ has nonzero leading coefficient and step1.2 applies. Since $(Mz)\wedge a=\det(M)(z\wedge M^{-1}a)$, the transformed factors may use vectors $a'_i=\det(M)M^{-1}a_i$ and $b'_j=\det(M)M^{-1}b_j$. Each wedge is multiplied by $\det(M)$, so their product is multiplied by $\det(M)^{d^2}$, exactly the resultant factor in [F2]. Cancelling this nonzero scalar proves the formula generally. [F2, F3, step 1.2, algebra] ∎
