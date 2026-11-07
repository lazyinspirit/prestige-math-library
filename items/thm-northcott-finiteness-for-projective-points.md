---
id: thm-northcott-finiteness-for-projective-points
kind: theorem
title: "Northcott finiteness for projective points over a fixed number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-fractional-ideal
  - def-ideal-class-group-of-a-domain
  - def-logarithmic-unit-embedding
  - def-number-field
  - thm-finiteness-of-the-number-field-class-group
  - thm-logarithmic-unit-image-is-a-full-lattice
  - thm-product-formula-for-number-fields
  - thm-ring-of-integers-and-ideals-are-full-lattices
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
    - title: "Stephen H. Schanuel, Heights in Number Fields"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $n\ge0$ be an integer, and let $B\ge1$ be real. Then the set
$$
\{P\in\mathbb P^n(K): h(P)\le\log B\}
$$
is finite, where $h$ is the absolute logarithmic Weil height.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-finiteness-of-the-number-field-class-group]]

[[thm-logarithmic-unit-image-is-a-full-lattice]]

## Facts & Assumptions

**Given:** AC; a number field $K$ of degree $N=[K:\mathbb Q]$; an integer $n\ge0$; and $B\ge1$.

[A1] AC is assumed in the number-field class-group, Dirichlet-unit and product-formula suppliers. ([[def-axiom-of-choice]], [[thm-product-formula-for-number-fields]])

[A2] The class group is the quotient of nonzero fractional ideals by nonzero principal fractional ideals, and it is finite. Every fractional ideal can be multiplied by a nonzero integer to become integral without changing its class, so the finite group admits a finite set of integral ideal representatives; equality of classes means two ideals differ by a nonzero scalar. ([[def-fractional-ideal]], [[def-ideal-class-group-of-a-domain]], [[thm-finiteness-of-the-number-field-class-group]])

[F1] The logarithmic absolute values of units, in coordinates $(\log|\sigma\epsilon|,2\log|\tau\epsilon|)$, form a full lattice in the hyperplane where the sum of coordinates is zero. ([[def-logarithmic-unit-embedding]], [[thm-logarithmic-unit-image-is-a-full-lattice]])

[F2] Under the Minkowski embedding, each nonzero integral ideal of $\mathcal O_K$ is a full discrete lattice in $\mathbb R^{r_1}\times\mathbb C^{r_2}$. ([[thm-ring-of-integers-and-ideals-are-full-lattices]])

[F3] For a number field $K$ with signature $(r_1,r_2)$, the relative height of a tuple with coordinate ideal $\mathfrak a$ is $N_K(\mathfrak a)^{-1}\prod_\sigma M_\sigma\prod_\tau M_\tau^2$, and $H(P)=e^{h(P)}=H_K(P)^{1/N}$. ([[def-number-field]], [[def-archimedean-embeddings-and-number-field-signature]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])



## Proof

1.1 Let $P=[x_0:\cdots:x_n]$ be any point with $h(P)\le\log B$, and let $\mathfrak a=(x_0,\ldots,x_n)$. By [A2], fix integral ideal representatives $\mathfrak a_j$ for the finitely many ideal classes. Since $\mathfrak a$ and its representative define the same quotient class, their quotient is principal, so choose $\lambda\in K^\times$ with $\lambda\mathfrak a=\mathfrak a_j$. The tuple $y_i=\lambda x_i$ represents the same point and generates $\mathfrak a_j$, so every $y_i$ belongs to that fixed integral ideal. [given, A1, A2, F3, choose]

1.2 For each real embedding put $M_\sigma=\max_i|\sigma(y_i)|$, and for each representative complex embedding put $M_\tau=\max_i|\tau(y_i)|$. By [F3], $\prod_\sigma M_\sigma\prod_\tau M_\tau^2\le B^N N_K(\mathfrak a_j)$; set $S=\sum_\sigma\log M_\sigma+\sum_\tau2\log M_\tau$. Thus $S$ has a uniform upper bound as $j$ ranges over its finite set. [given, F3, algebra]

2.1 Form $u\in\mathbb R^{r_1+r_2}$ with coordinates $\log M_\sigma$ for real places and $2\log M_\tau$ for complex places. The centered vector $u-(S/(r_1+r_2))(1,\ldots,1)$ lies in the unit-log hyperplane in [F1]. Translate it by a unit-log lattice vector into a fixed bounded fundamental parallelepiped. Multiplying every $y_i$ by that unit preserves $\mathfrak a_j$ and $S$, and makes every coordinate of the centered vector uniformly bounded. [given, A1, F1, step 1.2, construct]

2.2 The upper bound on $S$ and the bounded centered coordinates in [step 2.1] give a uniform upper bound for every $M_\sigma$ and $M_\tau$. Thus the Minkowski image of each rescaled coordinate lies in a fixed bounded region and in the lattice image of $\mathfrak a_j$. By [F2] each such region contains only finitely many lattice points; there are finitely many $j$ and finitely many coordinate positions. Hence only finitely many tuples, and therefore only finitely many projective points, occur. [given, F2, step 1.2, step 2.1, algebra] ∎
