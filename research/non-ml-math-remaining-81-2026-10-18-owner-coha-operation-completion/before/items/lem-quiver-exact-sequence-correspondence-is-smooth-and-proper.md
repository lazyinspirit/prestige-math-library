---
id: lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
kind: lemma
title: "The quiver exact-sequence correspondence is smooth and proper"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - lem-general-linear-quotient-stacks-are-algebraic
  - def-morphism-representable-by-algebraic-spaces
  - def-smooth-morphism-schemes
  - def-grassmannian-subspaces
  - lem-flag-variety-of-a-vector-space
  - def-projective-bundle-scheme
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - lem-proper-stable-base-change
  - def-proper-morphism
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-nonaffine-characteristic-zero-group-smooth
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §2.2"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced Class Trinity Term 2026, §2.1"
      url: "https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf"
---

## Statement

Assume AC. Let $Q$ be a finite quiver and let $\mathbf a,\mathbf b$ be
dimension vectors. In the notation of
[[def-quiver-representation-stacks-and-exact-sequence-correspondences]], the
map $q:\mathfrak E_{\mathbf a,\mathbf b}\to
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}$ is a smooth morphism of
algebraic stacks of relative complex dimension
$
r_Q(\mathbf a,\mathbf b)
=\sum_{h:i\to j} b_i a_j-\sum_{i\in Q_0}a_i b_i
=-\chi_Q(\mathbf b,\mathbf a),
$
where
$
\chi_Q(\mathbf u,\mathbf v)
=\sum_i u_i v_i-\sum_{h:i\to j}u_i v_j.
$
The forgetful map $p:\mathfrak E_{\mathbf a,\mathbf b}\to
\mathfrak M_{\mathbf a+\mathbf b}$ is representable and proper. These claims
allow loops, multiple arrows, zero coordinates, and the empty quiver.

## Facts & Assumptions

**Given:** AC, a finite quiver, dimension vectors $\mathbf a,\mathbf b$, the representation and extension stacks of [[def-quiver-representation-stacks-and-exact-sequence-correspondences]].

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]]: the extension atlas consists of block upper-triangular arrow maps, and the subrepresentation has dimension $\mathbf a$.

[F2] [[lem-general-linear-quotient-stacks-are-algebraic]]: the quotient stacks have smooth surjective group-action atlases and representable diagonals; the incidence base change of $p$ is the scheme described below.

[F3] [[def-grassmannian-subspaces]] and [[lem-flag-variety-of-a-vector-space]]: for $a_i+b_i>0$, each $\operatorname{Gr}(a_i,\mathbb C^{a_i+b_i})$ is projective and smooth; if $a_i+b_i=0$, it is the point $\operatorname{Gr}(0,0)$ by definition. The endpoint cases $a_i=0$ and $a_i=a_i+b_i$ are also points.

[F4] [[lem-closed-immersion-proper]], [[thm-projective-space-proper-over-base]], [[lem-proper-stable-base-change]], and [[lem-proper-stable-composition]]: closed immersions, projective-space projections, base changes, and compositions preserve properness.

[F5] [[lem-general-linear-group-scheme-and-its-coordinate-ring]] and [[lem-nonaffine-characteristic-zero-group-smooth]]: the general linear groups are affine finite-type group schemes over $\mathbb C$, hence smooth. The block parabolic is explicitly $U\rtimes L$, where $U$ is the vector group of upper-right vertex blocks and $L=G_{\mathbf a}\times G_{\mathbf b}$; projection $U\times L\to L$ is smooth of relative dimension $u$.

[F6] [[def-projective-bundle-scheme]]: the projective bundle of a finite locally free sheaf is locally a projective-space projection; its base changes have the same description.

[F7] [[def-morphism-representable-by-algebraic-spaces]] and [[def-proper-morphism]]: representability is tested after base change to schemes; properness for schemes means separated, finite type, and universally closed. For a morphism of stacks, “representable proper” means representable and proper after every scheme base change.

[A1] [[def-axiom-of-choice]]: AC is inherited only through the projective properness suppliers; the block-matrix dimension calculations are choice-free.

For the quotient-stack smoothness used here, pullback along a smooth atlas of the target reduces the check to a stack over a scheme. A quotient $[Y/U]\to Z$ over a scheme is smooth when its smooth atlas $Y\to[Y/U]$ composes to a smooth map $Y\to Z$; its relative stack dimension is $\dim(Y/Z)-\dim U$. This is the atlas convention used in the proof.



## Proof

**Proof technique:** direct.

1.1 For each arrow $h:i\to j$, the free off-diagonal block in $\operatorname{Rep}_Q(\mathbf a,\mathbf b)$ is $\operatorname{Hom}(V_i^{\mathbf b},V_j^{\mathbf a})$; hence $\operatorname{Rep}_Q(\mathbf a,\mathbf b)\to \operatorname{Rep}_Q(\mathbf a)\times\operatorname{Rep}_Q(\mathbf b)$ is a vector bundle of rank $e=\sum_{h:i\to j}b_i a_j$. The block-parabolic group $P_{\mathbf a,\mathbf b}$ maps onto its block-diagonal Levi group $L=G_{\mathbf a}\times G_{\mathbf b}$; its kernel $U$ consists of upper-right vertex blocks and is the vector group of dimension $u=\sum_i a_i b_i$. [F1, F5, given]

1.2 Let an arbitrary scheme $T$ map to $\mathfrak M_{\mathbf a+\mathbf b}$. By the quotient-stack definition this is a family of vector bundles $E_i$ of ranks $a_i+b_i$, with arrow maps. The base change of $p$ parametrizes subbundles $F_i\subset E_i$ of ranks $a_i$ preserved by every arrow. It is the closed subscheme of the relative Grassmannian $\prod_i\operatorname{Gr}_T(a_i,E_i)$ cut out by the vanishing of the bundle maps $F_i\to E_j\to E_j/F_j$ for each arrow $h:i\to j$. Each relative Grassmannian is a closed subscheme of $\mathbb P_T(\bigwedge^{a_i}E_i)$ by the relative Plucker map; on local frames this is the closed Plucker embedding of [F3], and the equations glue under changes of frame. Each such projective bundle is proper: after any base change $T'\to T$, trivialize $E_i$ over an open cover of $T'$; on each open the projection is a projective-space projection, hence proper by [F4]. The image of a closed set is closed on each member of the cover and therefore closed globally; separatedness and finite type are also local on the base. Thus every base change is proper by [F7]. The product of these proper maps is proper by base change and composition [F4]. The arrow conditions are closed because they are zero loci of regular bundle maps, so the incidence scheme is proper over $T$ as a closed subscheme of that product [F4]. In the standard frame atlas this scheme is exactly $ I_{\mathbf a,\mathbf b}= \{(X,(F_i)):\dim F_i=a_i,\ X_h(F_i)\subseteq F_j \text{ for every }h:i\to j\}. $, and its defining equations are the same zero-locus equations just described; in an ordinary Grassmannian chart they are the vanishing of the complementary matrix block. Hence every scheme base change of $p$ is a proper scheme. [F1, F3, F4, F6, F7, construct]

2.1 Pull back $q$ along the atlas $Z=\operatorname{Rep}_Q(\mathbf a)\times\operatorname{Rep}_Q(\mathbf b) \to\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}$. This fixes the endpoint representations. Every middle representation is a block matrix from step 1.1, and every isomorphism inducing the identity on the fixed endpoints is a unique upper-right vertex block. Hence the pullback stack is $[Y/U]\to Z$, where $Y\to Z$ is the rank-$e$ vector bundle of off-diagonal blocks and $U$ is the rank-$u$ vector group of changes of splitting. The atlas $Y\to[Y/U]$ is a smooth $U$-torsor; its composite $Y\to Z$ is a vector bundle projection of relative dimension $e$. By the atlas convention just stated, $[Y/U]\to Z$ is smooth of relative stack dimension $e-u$. Smoothness and relative dimension are checked after the displayed smooth target atlas, so the same holds for $q$. Substitution of the definition of $\chi_Q$ gives $e-u=-\chi_Q(\mathbf b,\mathbf a)$, including arrows that are loops or occur with multiplicity. [F1, F2, F5, step 1.1, algebra]

3.1 The construction in step 1.2 identifies every scheme base change of $p$ with the incidence scheme, so [F7] proves that $p$ is representable by schemes, hence by algebraic spaces; the same step proves every such base-changed map is proper. If some $a_i=0$ or $a_i=a_i+b_i$, the corresponding Grassmannian is a point and the same closed-incidence argument applies. Step 2.1 proves the smoothness of $q$, so both claims of the Statement follow. AC is used only through [A1]. [A1, F4, F7, step 1.2, step 2.1] ∎
