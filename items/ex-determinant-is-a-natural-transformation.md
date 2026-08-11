---
id: ex-determinant-is-a-natural-transformation
kind: example
title: "For $n\\ge 1$, determinant is a natural transformation $\\det:\\operatorname{GL}_n(-)\\Rightarrow(-)^{\\times}$ from commutative rings to groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subcategory-and-full-subcategory, def-functor-and-contravariant-functor, def-natural-transformation, prop-rings-and-homomorphisms-form-category-ring, prop-groups-and-homomorphisms-form-category-grp, def-commutative-ring, lem-ring-homomorphism-basic-properties, lem-ring-units-form-a-group, def-matrices-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws, def-invertible-matrix-and-similarity-over-a-commutative-ring, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, cor-invertible-matrix-has-unit-determinant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Chapter I, section 4, p. 16"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Example

For a fixed natural number $n\ge1$, entrywise application of ring
homomorphisms makes invertible matrices and units group-valued functors, and
determinant is natural between them.

## Facts & Assumptions

**Given:** A natural number $n\ge1$ and unit-preserving homomorphisms of commutative rings.

[L1] Commutative rings form a full subcategory of $\mathbf{Ring}$, groups form $\mathbf{Grp}$, and functors and natural transformations have their usual equations ([[def-subcategory-and-full-subcategory]], [[def-commutative-ring]], [[prop-rings-and-homomorphisms-form-category-ring]], [[prop-groups-and-homomorphisms-form-category-grp]], [[def-functor-and-contravariant-functor]], [[def-natural-transformation]]).

[L2] Units form a group and ring homomorphisms preserve the ring operations and units ([[lem-ring-homomorphism-basic-properties]], [[lem-ring-units-form-a-group]]).

[L3] Matrices, their products and identities, their arithmetic laws, and invertibility over a commutative ring are given by [[def-matrices-over-a-commutative-ring]], [[def-ring-matrix-product-identity-and-transpose]], [[thm-ring-matrix-arithmetic-laws]], and [[def-invertible-matrix-and-similarity-over-a-commutative-ring]].

[L4] Determinant is given by the Leibniz formula, is multiplicative, and sends invertible matrices to units ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[cor-invertible-matrix-has-unit-determinant]]).

## Verification

**Proof technique:** direct.

1.1 For a commutative ring $R$, put $U(R)=R^\times$. For $\varphi:R\to S$, restrict $\varphi$ to units; it is a group homomorphism because ring homomorphisms preserve products, identities, and inverses. Identity and composition are inherited, so $U$ is a functor to $\mathbf{Grp}$. [L1, L2]

1.2 Put $G_n(R)=\operatorname{GL}_n(R)$ and apply $\varphi$ entrywise. From the product formula, $\varphi((AB)_{ik})=\sum_j\varphi(a_{ij})\varphi(b_{jk})$, so this assignment preserves matrix products and identities and carries an inverse matrix to an inverse matrix. Entrywise identity and composition make $G_n$ a functor to $\mathbf{Grp}$. [L1, L2, L3, algebra]

2.1 Multiplicativity and the unit result in [L4] make $\det_R:G_n(R)\to U(R)$ a group homomorphism. [step 1.1, step 1.2, L4]

2.2 Applying $\varphi$ to the finite Leibniz sum term by term gives $\det_S(G_n(\varphi)(A))=\varphi(\det_R(A))=U(\varphi)(\det_R(A))$. [step 1.1, step 1.2, L2, L4]

3.1 Step 2.2 is the naturality square for every commutative-ring homomorphism. Hence $(\det_R)_R$ defines a natural transformation $G_n\Rightarrow U$. [step 2.1, step 2.2, L1] ∎
