---
id: lem-chern-character-and-todd-class-multiplicativity
kind: lemma
title: "Additivity and multiplicativity of the Chern character and Todd class"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 17
deps:
  - def-axiom-of-choice
  - def-chern-character-and-todd-class
  - def-chern-classes-of-a-vector-bundle
  - def-locally-free-sheaf-finite-rank
  - lem-chern-class-naturality-additivity-and-splitting
  - lem-chow-ring-naturality-and-projection-formula
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Section 42.45 (tag 02UM) and Section 42.65 (tag 02UN)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Section 42.45 (the Chern character as an additive and multiplicative map) and Section 42.65 (multiplicativity of the Todd class)"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 18"
      url: "https://math.stanford.edu/~vakil/245/245class18.pdf"
      locator: "Class 18, Section 2.1: the Chern character and Todd class exercises"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the finite
coherent-resolution and cohomological suppliers. In the setting of
[[def-chern-character-and-todd-class]] let
$0\to\mathcal E'\to\mathcal E\to\mathcal E''\to0$ be a short exact sequence of
finite locally free $\mathcal O_X$-modules
([[def-locally-free-sheaf-finite-rank]]). Then:

1. $\operatorname{ch}(\mathcal E)=\operatorname{ch}(\mathcal E')+\operatorname{ch}(\mathcal E'')$
   in $A^*(X)_{\mathbb Q}$; hence $\operatorname{ch}$ is additive in exact
   sequences and descends to a group homomorphism
   $$\operatorname{ch}:K^0(X)\longrightarrow A^*(X)_{\mathbb Q}.$$
2. $\operatorname{td}(\mathcal E)=\operatorname{td}(\mathcal E')\,\operatorname{td}(\mathcal E'')$;
   hence $\operatorname{td}$ is multiplicative in exact sequences and depends
   only on the class of $\mathcal E$ in $K^0(X)$.
3. For finite locally free $\mathcal E,\mathcal F$:
   $\operatorname{ch}(\mathcal E\otimes\mathcal F)=\operatorname{ch}(\mathcal E)\operatorname{ch}(\mathcal F)$,
   $\operatorname{ch}_m(\mathcal E^\vee)=(-1)^m\operatorname{ch}_m(\mathcal E)$;
   equivalently $\operatorname{ch}(\mathcal E^\vee)=\sum e^{-x_j}$ when
   $\operatorname{ch}(\mathcal E)=\sum e^{x_j}$, and
   $\operatorname{ch}(\mathcal O_X)=\operatorname{rank}=1$. Hence
   $\operatorname{ch}:K^0(X)\to A^*(X)_{\mathbb Q}$ is a ring homomorphism with
   the vector-bundle tensor product.
4. For a flat morphism $f:X'\to X$ of smooth equidimensional $k$-schemes:
   $f^*\operatorname{ch}(\mathcal E)=\operatorname{ch}(f^*\mathcal E)$ and
   $f^*\operatorname{td}(\mathcal E)=\operatorname{td}(f^*\mathcal E)$; and
   $\operatorname{td}(T_{X\times_kX'})=\operatorname{pr}_1^*\operatorname{td}(T_X)\cdot\operatorname{pr}_2^*\operatorname{td}(T_{X'})$.
5. For line bundles:
   $\operatorname{ch}(\mathcal L_1\oplus\dots\oplus\mathcal L_r)=\sum e^{c_1(\mathcal L_j)}$
   and $\operatorname{td}(\mathcal L)=\tfrac{c_1(\mathcal L)}{1-e^{-c_1(\mathcal L)}}$
   (formal series); the terms of degree $>\dim X$ vanish. If $X$ is
   quasi-projective, transport these maps along the finite-resolution
   isomorphism $K^0(X)=K_0(X)$. The product on coherent $K_0$ is the transported
   vector-bundle product, equivalently the alternating Tor product; ordinary
   tensor product of two arbitrary coherent sheaves is not assumed additive in
   exact sequences. Todd values of virtual classes use inverses, which exist
   because their degree-zero component is one and positive codimension is
   nilpotent.

## Facts & Assumptions

**Given:** the Axiom of Choice; a smooth equidimensional finite type $k$-scheme $X$; an exact sequence $0\to\mathcal E'\to\mathcal E\to\mathcal E''\to0$ of finite locally free sheaves; further finite locally free sheaves $\mathcal F$, $\mathcal L_1,\dots,\mathcal L_r$; a flag bundle $f:X'\to X$ as in the splitting principle.

[L1] The splitting principle: there is a composition of projective bundles $f:X'\to X$ with $f^*$ injective on the Chow ring after tensoring with $\mathbb Q$, such that on each rank locus $f^*\mathcal E$ has a filtration with invertible quotients; identities proved on the common open-and-closed rank-locus refinement of the finitely many bundles descend by injectivity ([[lem-chern-class-naturality-additivity-and-splitting]], [[def-chern-character-and-todd-class]]).

[L2] Chern classes of pullbacks are the pullbacks of Chern classes for flat morphisms, and the Chow ring pullback is a ring homomorphism ([[lem-chow-ring-naturality-and-projection-formula]], [[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[def-chern-classes-of-a-vector-bundle]]).

[L3] On each constant-rank locus, $\operatorname{ch}_0(\mathcal E)=\operatorname{rank}\mathcal E$, while each positive-degree component of $\operatorname{ch}(\mathcal E)$ and each component of $\operatorname{td}(\mathcal E)$ is a universal rational polynomial in the Chern classes, with $\operatorname{td}_0(\mathcal E)=1$. Thus the Chern character is determined by the rank function together with the Chern classes, and the Todd class by the Chern classes. The tangent bundle is finite locally free ([[def-chern-character-and-todd-class]]).

## Proof

**Proof technique:** direct; split the bundles by a flag bundle and read the identities off the roots, then descend by injectivity of the pullback.

1.1 Additivity of the Chern character. Work on the common finite open-and-closed refinement of the rank loci of $\mathcal E$, $\mathcal E'$, $\mathcal E''$ and $\mathcal F$. Chow rings and the claimed identities decompose over this refinement. On each locus all ranks are constant, including rank zero with an empty root list. By [L1] there is a flag bundle $f:X'\to X$ such that $f^*\mathcal E'$ and $f^*\mathcal E''$ have filtrations with invertible quotients, and the roots of $f^*\mathcal E$ are the union of the roots of $f^*\mathcal E'$ and of $f^*\mathcal E''$: the successive quotients of a filtration of $f^*\mathcal E$ refine to the union of the two filtrations. The degree-zero equality is $\operatorname{rank}\mathcal E=\operatorname{rank}\mathcal E'+\operatorname{rank}\mathcal E''$. Since the sum of $e^{x}$ over the union of the two root lists is the sum over the separate lists, $\operatorname{ch}(f^*\mathcal E)=\operatorname{ch}(f^*\mathcal E')+\operatorname{ch}(f^*\mathcal E'')$; applying $f^*$ to the expressions in rank and Chern classes (pullback preserves rank) and using injectivity of $f^*$ on $A^*(X)_{\mathbb Q}$ gives additivity for $\mathcal E$. Hence $\operatorname{ch}$ respects the exact-sequence relations and descends to the group completion $K^0(X)\to A^*(X)_{\mathbb Q}$. [L1, L3, given, algebra]

1.2 Multiplicativity of the Todd class. On each rank locus with the same flag bundle, the roots of $f^*\mathcal E$ are the union of those of $f^*\mathcal E'$ and $f^*\mathcal E''$, and the product $\prod_jx_j/(1-e^{-x_j})$ over the union is the product of the two partial products; injectivity of $f^*$ descends the identity $\operatorname{td}(\mathcal E)=\operatorname{td}(\mathcal E')\operatorname{td}(\mathcal E'')$. Thus $\operatorname{td}$ is multiplicative on exact sequences and factors through $K^0(X)$; its values are units because the degree-zero component is $1$, so it extends to virtual classes by inversion of the full Todd unit, using the finite geometric series in its nilpotent positive-degree part. [L1, L3, given, algebra]

1.3 Tensor products and duality. On each common rank locus, splitting both $\mathcal E$ and $\mathcal F$ by a common flag bundle, the roots of the tensor product are the pairwise sums $x_i+y_j$ and $e^{x_i+y_j}=e^{x_i}e^{y_j}$, so $\operatorname{ch}(\mathcal E\otimes\mathcal F)=\operatorname{ch}(\mathcal E)\operatorname{ch}(\mathcal F)$ after descent; the dual has roots $-x_j$, and the degree-$m$ part of $e^{-x}$ is $(-1)^m$ times that of $e^{x}$, giving $\operatorname{ch}_m(\mathcal E^\vee)=(-1)^m\operatorname{ch}_m(\mathcal E)$ in the graded sense, with no ungraded assertion; $\operatorname{ch}(\mathcal O_X)=1$ is the single-root case with root $0$. Consequently $\operatorname{ch}$ is a unital ring homomorphism on $K^0(X)$ with the vector-bundle tensor product. [L1, L3, given, algebra]

1.4 Naturality and the tangent bundle. Pullback preserves the rank function, since it takes a local trivialization $\mathcal E|_U\cong\mathcal O_U^r$ to one of rank $r$ on $f^{-1}(U)$. By [L2] it also preserves the Chern classes, and by [L3] the components of the Chern character are universal polynomials in rank and Chern classes, while those of the Todd class are universal polynomials in the Chern classes; hence $f^*\operatorname{ch}(\mathcal E)=\operatorname{ch}(f^*\mathcal E)$ and $f^*\operatorname{td}(\mathcal E)=\operatorname{td}(f^*\mathcal E)$ for flat $f$. For the product $X\times_kX'$ the tangent bundle is the direct sum of the two pullbacks of the tangent bundles, so the Todd class multiplies: $\operatorname{td}(T_{X\times_kX'})=\operatorname{pr}_1^*\operatorname{td}(T_X)\operatorname{pr}_2^*\operatorname{td}(T_{X'})$. [L2, L3, given, algebra]

2.1 Line bundles and coherent classes. For a direct sum of line bundles the identities are the definitions with $x_j=c_1(\mathcal L_j)$; the series truncate because $A^m(X)=0$ above the dimension. If $X$ is quasi-projective, the finite-resolution isomorphism $K^0(X)=K_0(X)$ transports the additive and multiplicative structure, the product on coherent classes being the alternating Tor product; the ordinary tensor product of two arbitrary coherent sheaves is not assumed to be additive in exact sequences, and Todd values of virtual classes use inverses of the full Todd units. [L1, L3, step 1.3, given, algebra] ∎ 