---
id: lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
kind: lemma
title: "Homogeneous bundles and Mumford surjectivity"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
  - lem-arith-picard-representation-by-generic-quotient-and-translates
  - lem-arith-rigidified-line-bundle-descent
  - thm-global-functions-proper-integral-variety
  - lem-arith-coherent-kunneth-and-proper-image-dual
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-nonaffine-rigidity-proper-geometrically-integral-factor
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-cohomology-and-base-change
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - cor-kunneth-over-a-field
  - thm-cup-product-graded-associative-natural
  - thm-leray-spectral-sequence-for-sheaf-cohomology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), Chapter 8 (homogeneous bundles and Mumford surjectivity)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$ and let $M$ be an invertible sheaf on $A$. Then the Mumford homomorphism $\varphi_M$ ([[lem-arith-coherent-kunneth-and-proper-image-dual]]) is zero exactly when the class of $M$ lies in the connected component $\operatorname{Pic}^0$; if $M$ is nontrivial and homogeneous, then $H^i(A,M)=0$ for every $i$. Over an algebraic closure every homogeneous invertible sheaf is of the form $t_x^*\mathcal L\otimes\mathcal L^{-1}$ for some $x$ and a fixed ample $\mathcal L$; the equality $\ker\varphi=\operatorname{Pic}^0$ holds as a sheaf on all tests.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A/k$, an invertible sheaf $M$ on $A$, and a fixed ample invertible sheaf $\mathcal L$.

[F1] Over an algebraic closure the entire rigidified Picard functor is represented on all tests by [[lem-arith-picard-representation-by-generic-quotient-and-translates]], while its identity component and the dual/Poincare bundle are supplied by [[lem-arith-coherent-kunneth-and-proper-image-dual]] and [[lem-arith-dual-and-poincare-bundle-finite-field-descent]]. The field-level square homomorphism and cube identity are [[lem-theorem-of-the-square-and-mumford-homomorphism]] and [[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]. For any test family $M$ the normalized square $\Lambda(M)=m^*M\otimes p_1^*M^{-1}\otimes p_2^*M^{-1}\otimes\pi^*e^*M$ defines a morphism $\varphi_M:A_T\to A^\vee_T$: its fibre classes are translation differences, hence algebraically trivial, and it is rigidified on both axes. Uniqueness and effective descent of rigidified bundles are [[lem-arith-rigidified-line-bundle-descent]].

[F2] Cohomology of coherent sheaves on $A$ is computed by Cech complexes with Kunneth and Leray techniques, and the rigid-factor lemma applies to morphisms from products with an abelian factor ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[cor-kunneth-over-a-field]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-cohomology-and-base-change]], [[thm-noetherian-topological-space-dimension-vanishing]], [[lem-nonaffine-rigidity-proper-geometrically-integral-factor]]).

[F3] Proper geometrically integral schemes have only scalar global functions ([[thm-global-functions-proper-integral-variety]]). For ample $\mathcal L$, $\varphi_{\mathcal L}$ has finite scheme-theoretic kernel over an algebraic closure ([[lem-arith-coherent-kunneth-and-proper-image-dual]]).

## Proof

**Proof technique:** direct: construct the normalized-square map and use rigidity for the Picard identity component, then prove homogeneous vanishing and surjectivity by Kunneth and the two Leray sequences.

1.1 Work first over an algebraic closure. The Poincare family on $A\times B$, where $B=\operatorname{Pic}^0=A^\vee$, gives through [F1] a morphism $A\times B\to B$; it is zero on $A\times\{0\}$ and on $\{0\}\times B$. The proper-factor rigidity lemma [F2] makes it zero everywhere, as an identity of morphisms. Thus every family classified by $B$ has zero Mumford map, even on nonreduced tests. The normalized square defines the map for any bundle as in [F1]. For a bundle over the ground field it is a homomorphism: the square identity establishes addition on geometric points, and the two resulting morphisms from the reduced $A\times A$ to separated $B$ therefore agree. For a test family, locally its classifying map lands in a component of the full Picard scheme. Each component is a translate of $B$, and its universal family is a fixed bundle tensored with the Poincare family. Tensor product adds normalized-square maps, so the preceding vanishing makes this family map the base change of the fixed bundle's homomorphism. Consequently the construction gives homomorphisms on all tests and commutes with base change. [F1, F2, given, construct]

2.1 Let $M$ be a ground-field bundle with $\varphi_M=0$; by the normalized-square universal property its square family is trivial, giving $m^*M\cong p_1^*M\otimes p_2^*M$ after trivializing the constant identity fibre. Pulling back along $(\operatorname{id},-1)$ gives $[-1]^*M\cong M^{-1}$. If $M$ has a nonzero section, inversion gives a nonzero section of $M^{-1}$; their product is a nonzero scalar by integrality and [F3], so $M$ is trivial. A nontrivial $M$ therefore has $H^0(M)=0$. If $i>0$ is the least degree with $H^i(M)\ne0$, multiplication pullback followed by restriction along $(\operatorname{id},0)$ is the identity on $H^i(M)$, but Kunneth identifies the intermediate group with $\bigoplus_{a+b=i}H^a(M)\otimes H^b(M)=0$. This contradiction proves vanishing in every degree. Flat field base change gives the same vanishing over the original field. [F1, F2, F3, step 1.1, algebra]

3.1 Over an algebraic closure suppose $M$ has zero Mumford map but is not $t_x^*\mathcal L\otimes\mathcal L^{-1}$ for any $x$, and put $Q=\Lambda(\mathcal L)\otimes p_2^*M^{-1}$. On a $p_1$-fibre it is the nontrivial bundle $t_x^*\mathcal L\otimes\mathcal L^{-1}\otimes M^{-1}$, whose Mumford map is zero by step 1.1. Step 2.1 and the universal cohomology complex give $Rp_{1,*}Q=0$, hence $H^*(Q)=0$. On a $p_2$-fibre its class is $t_y^*\mathcal L\otimes\mathcal L^{-1}$, since the other factors are constant lines; it has zero cohomology away from the finite kernel $K(\mathcal L)$ supplied by [F3]. All $R^ip_{2,*}Q$ thus have finite support. They have no higher cohomology, so the second Leray sequence identifies their global sections with $H^i(Q)=0$ and makes every direct image zero. Derived base change then makes every fibre cohomology zero, contradicting the trivial bundle on the fibre at $y=0$. Therefore every such $M$ is a Mumford translate for the fixed ample $\mathcal L$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 A zero-Mumford test family has, by step 3.1 on each geometric fibre, all its fibre classes in the open identity component $B$ of the represented Picard scheme. Its classifying map therefore factors through $B$, including its nilpotent structure; no reduced-test argument is used. Conversely, step 1.1 makes every $B$-classified family have zero Mumford morphism. Thus the kernel sheaf is exactly $\operatorname{Pic}^0$ on all tests over an algebraic closure. Rigidified bundle descent and the field-compatible dual of [F1] descend this equality to $k$. This proves the asserted criterion, vanishing and geometric surjectivity. [F1, step 1.1, step 3.1, algebra] ∎
