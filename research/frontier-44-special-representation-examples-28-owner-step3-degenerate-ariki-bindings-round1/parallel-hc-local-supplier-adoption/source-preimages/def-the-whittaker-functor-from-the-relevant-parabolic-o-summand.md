---
id: def-the-whittaker-functor-from-the-relevant-parabolic-o-summand
kind: definition
title: "The Whittaker functor from the relevant parabolic category-O summand"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 31
deps: [def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       def-parabolic-category-o-for-a-standard-parabolic,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-grothendieck-group-and-character-of-category-o,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       prop-base-change-freeness-and-specialization-in-the-deformed-family,
       thm-schur-weyl-decomposition-with-length-cutoff,
       thm-specht-to-permutation-homomorphism-dominance,
       thm-weyls-complete-reducibility-theorem,
       thm-baer-criterion-for-injective-modules, thm-hilbert-basis-theorem,
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules,
       def-projective-functors-on-a-regular-integral-category-o-block,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       thm-weyl-character-formula, thm-bgg-reciprocity,
       thm-category-o-has-enough-projectives,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-degenerate-cyclotomic-hecke-algebra, def-universal-enveloping-algebra,
       def-representation-of-a-lie-algebra, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 5.1-5.4, formulas (5.1)-(5.2) and Lemmas 5.5, 5.7, 5.11, Theorems 5.10, 5.13, 5.14, 5.17 and Corollary 5.15, printed pp. 26-36: the Whittaker functor as the composite of the row-sum duality and the Whittaker-vector functor, its exactness, the identification on the ground projective and on tensor spaces, and the nonvanishing statements."
    - title: "Joseph Bernstein and Sergei Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras, Compositio Math. 41 (1980) 245-285 (complete 42-page NUMDAM article)"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Sections 5.1-5.12, printed pp. 250-270: the fixed-central-character Harish-Chandra comparison, the regular dominant Verma comparison and the all-weight Ore/translation machinery used to identify the category-O summands."
verification:
  precheck: pass
---

## Definition

Work over $\mathbb C$ and assume the Axiom of Choice where projective covers,
duality and locally unital assemblies enter. Let
$\lambda=(0\le p_1\le\cdots\le p_n)$ be a pyramid with columns
$q_1\ge\cdots\ge q_l$, let $c=(c_1,\dots,c_l)$ be admissible in the sense that
$c_i-c_j\in\mathbb Z$ implies $c_i=c_j$, and let
$\mathcal O_c^d$ be the relevant summand of the genuine parabolic
category $\mathcal O$ attached to the labels $c$ and the degree $d$: its
objects are the modules whose column-strict labels have nonnegative integral
differences from the ground entries of each column, i.e. the labels with
$\Lambda$-diagram content $c_j+q_j-n$ in the sense of
[[def-degenerate-cyclotomic-hecke-algebra]] (the ambient categories are the
ones of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]
and [[def-parabolic-category-o-for-a-standard-parabolic]]).

On genuine parabolic $\mathcal O$ the **Whittaker functor** is
$$V=D_{\mathrm{row}}\,\mathrm{Wh}\,D_{\mathrm{row}},$$
where $D_{\mathrm{row}}$ is restricted duality for the row-sum torus and
$\mathrm{Wh}$ is the Whittaker-vector functor of
[[def-the-type-a-finite-w-algebra-and-whittaker-category]] for the character
$\chi$ of the pyramid; equivalently $V$ is the appropriate continuous
$\chi$-coinvariant functor, using the reflected head/tail identification of
[[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]].

The verification below records the properties used on this page: $V$ is exact
on the $U(\mathfrak m)$-finitely-generated objects of genuine parabolic
$\mathcal O$ and intertwines finite tensoring, the Casimir and the flips; $V$
is distinct from the Hecke quotient $\operatorname{Hom}_{\mathfrak g}(T,-)$
constructed later; for the ground simple projective-injective $P_c$ and
$T=P_c\otimes V^{\otimes d}$ one has $V(P_c)=\mathbb C_c$ and
$V(T)=V_c^{\otimes d}$; and $V(K(A))$ is the simple $W$-module $L(A)$ for
standard labels $A$ and zero otherwise. Nonintegral origins use the typed
equivalence of the all-weight Harish-Chandra comparison of the source; no
arbitrary complex $c$ is identified with an integral block. After fixing the
ground identification $i_0\colon V(P_c)\to\mathbb C_c$, the compatible functor
and the maps $j_d$ are unique up to the normalized unique natural isomorphism;
without this normalization scalar automorphisms prevent literal uniqueness.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, admissible origins $c$, the categories $\mathcal O_c^d$ and the Whittaker data.

[F1] The parabolic and genuine-category-O interfaces: $P_c$ is the ground simple projective-injective, the standard objects $K(A)$ are labelled by column-strict tableaux, and the category is a highest-weight category with enough projectives ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-category-o-has-enough-projectives]]).

[F2] The finite W-algebra, its Whittaker category and Skryabin's equivalence, including the filtration $Q_\chi\otimes_{W(\lambda)}-$ and the tensor identification $M\circledast X=\mathrm{Wh}((Q_\chi\otimes_{W(\lambda)}M)\otimes X)$ on restricted $\mathfrak p$-modules ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]).

[F3] The truncated tensor space $V_c^{\otimes d}$ is a filtered $(W(\lambda),H_d(\Lambda))$-bimodule with the explicit generators, and the tensor compatibility preserves the generators $x_j,s_i$ ([[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]).

[F4] Standard/Casimir/Fock interfaces: the highest-weight truncation, the Specht-to-permutation dominance comparison, the Weyl character formula computation, BGG reciprocity and the Fock-basis dictionaries on the source side ([[thm-schur-weyl-decomposition-with-length-cutoff]], [[thm-specht-to-permutation-homomorphism-dominance]], [[thm-weyl-character-formula]], [[thm-bgg-reciprocity]], [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], [[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]], [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]], [[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], [[def-projective-functors-on-a-regular-integral-category-o-block]], [[prop-base-change-freeness-and-specialization-in-the-deformed-family]], [[def-grothendieck-group-and-character-of-category-o]]).

[F5] Noetherianity, Baer injectivity, complete reducibility and Hilbert basis inputs used to make the functorial constructions finite and exact ([[thm-hilbert-basis-theorem]], [[thm-baer-criterion-for-injective-modules]], [[thm-weyls-complete-reducibility-theorem]], [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]).



## Proof

**Proof technique:** direct.

**Given:** The category $\mathcal O_c^d$, the ground object $P_c$, the tensor object $T=P_c\otimes V^{\otimes d}$, and the functor $V=D_{\mathrm{row}}\mathrm{Wh}D_{\mathrm{row}}$.

1.1 Well-definedness of the composite. Restricted duality $D_{\mathrm{row}}$ is exact and involutive on the row-torus-finite category $\mathcal O_c^d$ by [F1]; the Whittaker-vector functor is exact on the relevant category by [F2] and the reflected head/tail identification fixes the row-sum compatibility; hence the composite $V$ is a well-defined exact functor on the objects of [F1]. [F1, F2, algebra]

1.2 Exactness and finiteness. The functor is computed as the composite of the exact restricted duality, the exact $\mathrm{Wh}$, and again restricted duality; for a $U(\mathfrak m)$-finitely-generated object, the lower-central-weight arguments and Artin-Rees give the finite Hom spaces and the injectivity of the continuous dual, by the Baer/Noetherianity inputs of [F5], so the exactness is valid on exactly these objects and not on unrestricted ordinary $\mathcal O$. [F2, F5, algebra]

1.3 Intertwining. The identification of $V$ with the continuous $\chi$-coinvariant functor intertwines finite tensoring, the Casimir operator and the flips: tensoring with a finite-dimensional $\mathfrak g$-module is exact and preserves the category, and the transport of [?$\otimes X$] through [F2] is compatible with the Casimir and the place permutations by [F3]. [F2, F3, algebra]

1.4 Values on the ground object and the tensor object. $V(P_c)=\mathbb C_c$ by the reflected head/tail identification (both restricted dualities return the ground line) and $V(T)=V_c^{\otimes d}$ by [F3] and the tensor identification of Skryabin's equivalence; these identifications fix the normalization of the functor. [F2, F3, algebra]

1.5 Images of standard objects. For $A\in\mathrm{Std}$, $V(K(A))=L(A)$ is the simple $W$-module: the kernel of $V$ is stable under the residue tensor operators by the highest-projection and positivity arguments of [F4], the highest component is irreducible and nonzero, and the ground generators force every standard label to have nonzero image; off the standard set the image vanishes because the highest-weight truncation has no room for the corresponding column-strict label. [F4, algebra]

1.6 Distinctness from the Hecke quotient. The functor $V$ takes values in $W(\lambda)$-modules, while $\operatorname{Hom}_{\mathfrak g}(T,-)$ takes values in modules over the Hecke image $B_d$; the two are related by Morita equivalence only under the admissibility and central-corner hypotheses proved later, and the rank-one witness on the companion page shows they cannot be identified in general. [F2, given]

2.1 Normalized uniqueness. Once the ground identification $i_0\colon V(P_c)\to\mathbb C_c$ is fixed, the tensor compatibility determines the maps $j_d$ by the uniqueness of the Taylor degree recursion of [F3]; the resulting natural isomorphism is unique up to precomposition with the scalar automorphisms fixing $i_0$, which is why the normalization is recorded. [F3, step 1.4, algebra] ∎

## Remarks

- The definition deliberately separates three functors that are often conflated: the genuine Whittaker functor $V$ on category $\mathcal O$, the Hecke Hom quotient $\operatorname{Hom}_{\mathfrak g}(T,-)$, and the Morita equivalence on the finite-W side. Only the first is defined here; the quotient is defined two items later.

- The nonintegral-origin construction uses the typed Harish-Chandra comparison of the source (all-weight Verma comparison, Ore twists, coset sorting), which is the content of the externally supplied interfaces [F4]; those interfaces are recorded as dependencies and their proofs are supplied by their own items.
