---
dependency_level: 0
id: lem-binary-map-resultant-linear-conjugacy
kind: lemma
title: "Resultant transformation under linear changes of a binary map"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-sylvester-resultant-of-binary-forms
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Appendix A, (A.1)\u2013(A.8), linear-change specialization"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Let $L$ be any field, let $F=(F_1,F_2)$ be a pair of homogeneous binary degree-$d$ forms, and let $M,N\in\operatorname{GL}_2(L)$. With the Sylvester determinant convention whose first block multiplies $F_1$, one has
$$R_{N\circ F\circ M}=\det(N)^d\det(M)^{d^2}R_F.$$
In particular,
$$R_{M^{-1}\circ F\circ M}=\det(M)^{d(d-1)}R_F.$$
No restriction on characteristic, separability or $R_F$ is needed.

## Statement references

[[def-sylvester-resultant-of-binary-forms]]

## Facts & Assumptions

**Given:** The field, degree, forms and invertible matrices in the statement.

[F1] $R_F$ is the determinant of $\Phi_F:(A,B)\mapsto AF_1+BF_2$, from two copies of the degree-$(d-1)$ binary forms to the degree-$(2d-1)$ binary forms. ([[def-sylvester-resultant-of-binary-forms]])

[F2] Determinants are alternating and multilinear and therefore obey multiplication and change-of-basis laws. ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]])

## Proof

1.1 On degree-$m$ binary forms let $S_m(M)H=H\circ M$. Then $\det S_m(M)=\det(M)^{m(m+1)/2}$. To verify the formula, a diagonal matrix with entries $a,b$ acts diagonally with entries $a^{m-i}b^i$, whose product is $(ab)^{m(m+1)/2}$. Either elementary shear acts triangularly with diagonal entries $1$. Interchanging the two variables reverses the $m+1$ basis vectors and has determinant $(-1)^{m(m+1)/2}$. Gaussian elimination expresses every invertible two-by-two matrix as a product of diagonal matrices, shears and an interchange: choose a nonzero pivot using an interchange if needed, eliminate the other entry in its column, and then eliminate the off-diagonal entry in its row. Multiplicativity proves the asserted formula, including in characteristic two. [F2, algebra]

1.2 Substitution in the Sylvester map gives $S_{2d-1}(M)\Phi_F=\Phi_{F\circ M}(S_{d-1}(M)\oplus S_{d-1}(M))$. Taking determinants and using step 1.1 gives
$$R_{F\circ M}=\det(M)^{d(2d-1)-d(d-1)}R_F=\det(M)^{d^2}R_F.$$
The substitution maps are invertible, so this calculation does not divide by $R_F$. [F1, F2, step 1.1, algebra]

2.1 Write $N=\begin{pmatrix}a&b\\c&e\end{pmatrix}$. Then $\Phi_{N\circ F}(A,B)=\Phi_F(aA+cB,bA+eB)$. On each coefficient pair the latter input change has matrix $N^{\mathsf T}$, so its determinant on all $d$ coefficient pairs is $\det(N)^d$. Consequently $R_{N\circ F}=\det(N)^dR_F$. Combining with step 1.2 proves the first identity; setting $N=M^{-1}$ gives the second. [F1, F2, step 1.2, algebra] ∎
