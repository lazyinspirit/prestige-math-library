---
id: ex-finite-vector-space-hall-square
kind: example
title: "The Hall square of the simple finite-field vector space"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - def-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.2, Example 2.2"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
---

## Example

Let $k=\mathbb F_q$, let $\mathcal V_k$ be the category of finite-dimensional
$k$-vector spaces, and let $S=k$. Use a small skeleton with objects
$k^n$. The untwisted Hall product satisfies
$$ [S]*[S]=(q+1)[k^2]. $$

## Facts & Assumptions

**Given:** A finite field $k=\mathbb F_q$, the vector-space category
$\mathcal V_k$, and the untwisted Hall product.

[F1] An abelian category is additive, has kernels and cokernels, and its canonical coimage-to-image maps are isomorphisms ([[def-abelian-category]]).

[F2] A small finitary category for Hall multiplication has finite Hom sets and finite Yoneda extension sets ([[def-hall-finitary-abelian-category]]).

[F3] $[M]*[N]$ counts subobjects isomorphic to $N$ whose quotient is isomorphic to $M$ ([[def-untwisted-hall-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Use the small model with objects $k^n$ and all matrices between them; every finite-dimensional vector space is isomorphic to one of these. The zero object and finite direct sums exist, and each Hom set is an abelian group under pointwise addition with bilinear composition. For a linear map $f:V\to W$, its kernel and cokernel $W/\operatorname{im}f$ are finite-dimensional. Choose bases of these two spaces for this single map and transport them to standard $k^d$ objects; the transported inclusion and projection retain the universal properties, so the model has kernels and cokernels. The canonical map $V/\ker f\to\operatorname{im}f$ is injective because $f(v)=0$ implies $v\in\ker f$, and surjective by the definition of image, hence is an isomorphism. Thus [F1] makes the model abelian. Hom sets are finite sets of matrices over $k$. Any short exact sequence $0\to U\xrightarrow{i}E\xrightarrow{p}Q\to0$ splits: lift a finite basis of $Q$ to $E$ and extend linearly to a section $s:Q\to E$. The map $U\oplus Q\to E$, $(u,q)\mapsto i(u)+s(q)$, is injective by applying $p$ and then using monicity of $i$; it is surjective because $e-s(p(e))$ lies in $\ker p=\operatorname{im}i$. It is an isomorphism fixing the endpoints, so every Yoneda extension is equivalent to the split one and its Yoneda extension set has one class. Therefore the model satisfies [F2]. [given, F1, F2, choose, construct, algebra]

1.2 If $g^L_{S,S}\ne0$, an exact sequence $0\to S\to L\to S\to0$ gives $\dim_kL=2$, so the only possible isomorphism class is $k^2$. Every one-dimensional subspace of $k^2$ is counted by [F3], and its quotient is one-dimensional. The nonzero vectors of $k^2$ are partitioned by their spans, each span contains $q-1$ nonzero vectors, and $k^2$ has $q^2-1$ nonzero vectors. Hence the number of lines is $(q^2-1)/(q-1)=q+1$. [F3, algebra]

2.1 There are no other middle-object classes by step 1.2, and the coefficient of $[k^2]$ is the line count from step 1.2. This proves the displayed untwisted product. [F3, step 1.1, step 1.2] ∎

## Remarks

Schiffmann's square-root Euler-twisted product multiplies the same
subobject-counting coefficient by
$$\langle M,N\rangle_m=\left(\prod_{i\ge0}|\operatorname{Ext}^i(M,N)|^{(-1)^i}\right)^{1/2},$$
where $\operatorname{Ext}^0=\operatorname{Hom}$ and higher Ext terms are derived Ext; see [*Lectures on Hall Algebras*, §§1.2–1.3,
equations (1.2)–(1.3)](https://arxiv.org/pdf/math/0611617v2). Every finite-
dimensional vector space is projective, since a map out of it lifts across a
surjection by lifting the images of a finite basis; thus this category has
global dimension zero. Hence the higher Ext groups
vanish here, while $|\operatorname{Hom}(S,S)|=q$, so the factor is
$\langle S,S\rangle_m=q^{1/2}$. The twisted square is therefore
$q^{1/2}(q+1)[k^2]$; this factor is absent from the product $*$ on the A page.

