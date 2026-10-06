---
id: lem-chern-class-naturality-additivity-and-splitting
kind: lemma
title: "Additivity, naturality and the splitting principle for Chern classes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 15
deps:
  - def-axiom-of-choice
  - def-chern-classes-of-a-vector-bundle
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-locally-free-sheaf-finite-rank
  - def-projective-bundle-scheme
  - def-refined-gysin-pullback-for-regular-embeddings
  - lem-chow-ring-naturality-and-projection-formula
  - lem-flat-pullback-chow-groups
  - lem-operational-chern-classes-and-whitney-formula
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - thm-projective-bundle-formula-for-chow-groups
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.39-42.45 (additivity and the splitting principle, tag 02UK)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.39-42.45: additivity of Chern classes and the splitting principle"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 16"
      url: "https://math.stanford.edu/~vakil/245/245class16.pdf"
      locator: "Class 16, Section 3: Whitney additivity and the splitting principle"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. Let $k$ be a field, $X$ a smooth
equidimensional $k$-scheme of finite type, and let
$0\to\mathcal E'\to\mathcal E\to\mathcal E''\to0$ be a short exact sequence of
finite locally free $\mathcal O_X$-modules
([[def-locally-free-sheaf-finite-rank]]). Ranks are allowed to be locally
constant: define Chern classes componentwise on the finitely many open-and-closed
rank loci, using [[def-chern-classes-of-a-vector-bundle]] on each constant-rank locus. Then:

1. (Whitney additivity) $c(\mathcal E)=c(\mathcal E')\,c(\mathcal E'')$ in the
   Chow ring $A^*(X)$ ([[def-chern-classes-of-a-vector-bundle]],
   [[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]).
2. (Naturality) If $f:X'\to X$ is a flat morphism of smooth equidimensional
   $k$-schemes of finite type, then $c_i(f^*\mathcal E)=f^*c_i(\mathcal E)$ for all $i$.
3. (Splitting principle) There exists a morphism $f:X'\to X$, a composition of
   projective bundles over $X$, with $X'$ smooth and equidimensional, such that
   $f^*:A^*(X)\to A^*(X')$ is injective. On each rank locus
   $X_r=\{x:\operatorname{rank}_x\mathcal E=r\}$, its inverse image admits a filtration
   $$0=\mathcal E_0\subseteq\mathcal E_1\subseteq\dots\subseteq\mathcal E_r=f^*\mathcal E$$
   with successive quotients invertible sheaves
   $\mathcal L_1,\dots,\mathcal L_r$; consequently
   $f^*c(\mathcal E)=\prod_{i=1}^r(1+c_1(\mathcal L_i))$. Any polynomial identity
   among Chern classes that is proved on every rank locus after replacing $\mathcal E$ by such a
   filtered bundle and $c_i(\mathcal E)$ by the elementary symmetric functions
   $e_i(c_1(\mathcal L_j))$ holds for $\mathcal E$ itself.
4. (Consequences) $c_i(\mathcal E^\vee)=(-1)^ic_i(\mathcal E)$;
   $c_1(\mathcal L\otimes\mathcal M)=c_1(\mathcal L)+c_1(\mathcal M)$ for
   invertible sheaves; $c_i(\mathcal E)=0$ for
   $i>r$ on $X_r$; and for an exact sequence of vector
   bundles the total Chern classes multiply (this is (1)).

## Facts & Assumptions

**Given:** the Axiom of Choice; a smooth equidimensional finite type $k$-scheme $X$; an exact sequence $0\to\mathcal E'\to\mathcal E\to\mathcal E''\to0$ of finite locally free $\mathcal O_X$-modules.

[L1] The operational Chern operators satisfy the Whitney formula, normalization, compatibility with base restriction and the splitting principle by iterated projective bundles with injective flat pullback, and the regular-section formula ([[lem-operational-chern-classes-and-whitney-formula]], [[def-chern-classes-of-a-vector-bundle]]).

[L2] The operational action on a smooth scheme agrees with multiplication in the Chow ring, so operational identities become ring identities; ring pullback is the graph Gysin pullback and agrees with flat pullback for flat morphisms ([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[lem-chow-ring-naturality-and-projection-formula]]).

[L3] Projective bundle pullback is injective and flat pullback on Chow groups is functorial ([[thm-projective-bundle-formula-for-chow-groups]], [[lem-flat-pullback-chow-groups]], [[def-refined-gysin-pullback-for-regular-embeddings]]).

[L4] First Chern classes of invertible sheaves are computed by rational sections and their divisors; the dual of a line bundle has the negative first Chern class ([[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

## Proof

**Proof technique:** direct; transport the operational Whitney and splitting arguments to the Chow ring through the operational isomorphism.

1.1 Whitney additivity. By [L1] the operational classes of $\mathcal E$ satisfy $c(\mathcal E)=c(\mathcal E')c(\mathcal E'')$: after simultaneous flag pullback the two filtrations concatenate to a line filtration of the middle bundle, whose Chern product is determined by successive Cartier hyperplanes; injectivity of projective-bundle pullback descends the identity; under the operational isomorphism of [L2] this identity of operators is the ring identity $c(\mathcal E)=c(\mathcal E')c(\mathcal E'')$ in $A^*(X)$. [L1, L2, given, algebra]

1.2 Naturality. For a flat morphism $f:X'\to X$ of smooth equidimensional finite type $k$-schemes, the pullback $f^*$ on the Chow ring agrees with flat pullback by [L2], and flat pullback commutes with the operational cap actions by [L1]; applying this to the definitions $c_i(\mathcal E)=c_i(\mathcal E)\cap[X]$ and using the projection formula of [L2] gives $f^*c_i(\mathcal E)=c_i(f^*\mathcal E)$. [L1, L2, given, algebra]

2.1 The splitting principle. Since $X$ is quasi-compact, the locally constant rank of $\mathcal E$ has finite image; its rank loci $X_r$ are open and closed. Chern classes, cycle groups and rational equivalence decompose over this finite disjoint union, so [L1] applies on every constant-rank locus (and on a common refinement of the three rank decompositions for Whitney additivity). If $X$ is empty, its Chow ring is zero and take the identity with empty filtrations. Otherwise let $R$ be the largest occurring rank. If $R\le1$, take $f=\operatorname{id}$, with the empty filtration on $X_0$ and the one-step filtration on $X_1$. Otherwise build a tower indexed by $j=R,R-1,\ldots,2$. Over a locus of original rank $r\ge j$, projectivize the current kernel bundle of rank $j$ and replace it by the kernel of its tautological line quotient. Over a locus with $r<j$, projectivize the trivial bundle of rank $j$ and leave the pulled-back $\mathcal E$ unchanged. At each stage these bundles glue across the open-and-closed loci to a bundle of constant rank $j$, so every projection is smooth of constant relative dimension $j-1$ and has injective flat pullback by [L3]. The resulting $X'$ is smooth equidimensional of dimension $\dim X+R(R-1)/2$. On each inverse image of $X_r$, the successive tautological kernels, reversed in order, yield a filtration with exactly $r$ invertible quotients. Repeated Whitney additivity gives $f^*c(\mathcal E)|_{f^{-1}X_r}=\prod_{i=1}^r(1+c_1(\mathcal L_i))$; the composite pullback is injective, so polynomial identities verified on every rank locus descend to $X$. [L1, L3, step 1.1, algebra]

3.1 Consequences. The dual of the filtration has successive quotients $\mathcal L_i^\vee$ with $c_1(\mathcal L_i^\vee)=-c_1(\mathcal L_i)$ by [L4], so multiplying $\prod_i(1-c_1(\mathcal L_i))$ gives $c_i(\mathcal E^\vee)=(-1)^ic_i(\mathcal E)$ after injectivity; the tensor identity for line bundles follows by multiplying rational sections and adding their Cartier divisors by [L4]; the vanishing $c_i(\mathcal E)=0$ for $i>\operatorname{rank}\mathcal E$ is the defining relation of [L1], and the multiplicativity for exact sequences is step 1.1. [L1, L4, step 1.1, step 2.1, algebra] ∎ 