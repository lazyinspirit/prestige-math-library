---
page: arakawa-suzuki-functors-and-higher-level-schur-weyl-duality
title: "Arakawa–Suzuki Functors and Higher-Level Schur–Weyl Duality"
status: draft
requires: [parabolic-category-o-and-fock-space-bases,
            tensor-products-of-modules,
            graded-bimodules-and-tensor-functors]
items: [def-degenerate-affine-hecke-algebra,
        lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties,
        def-arakawa-suzuki-casimir-operators-on-tensor-functors,
        lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize,
        def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
        thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
        def-the-type-a-finite-w-algebra-and-whittaker-category,
        thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
        def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
        lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading,
        thm-ordered-monomial-pbw-basis-for-the-shifted-yangian,
        thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
        thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e,
        def-degenerate-cyclotomic-hecke-algebra,
        lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient,
        def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
        def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
        thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
        thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
        def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
        def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
        def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks,
        thm-higher-level-schur-weyl-endomorphism-isomorphism,
        thm-higher-level-schur-weyl-double-centralizer,
        thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
        thm-category-o-translation-intertwines-residue-induction-and-restriction]
examples: []
---

**Objective.** This page develops the Arakawa–Suzuki action of the degenerate
affine Hecke algebra on tensor functors and the higher-level Schur–Weyl duality
of Brundan–Kleshchev: the Casimir and place-permutation operators, the type-A
pyramid good grading and finite W-algebra, the Whittaker category and Skryabin
equivalence, the truncated (deformed) tensor space, the filtered double
centralizer, the Schur functor on parabolic category $\mathcal O$, the stable
range and its block-idempotent corner, and the Hecke residue functors with
their intertwining with category-$\mathcal O$ translation. Everything is
stated over $\mathbb C$ with the Axiom of Choice carried as an explicit
dependency, and the source normalizations differ from the library conventions
only where recorded in the individual items.

**The Hecke algebra and the Casimir action.**
[[def-degenerate-affine-hecke-algebra]] fixes the degenerate affine Hecke
algebra $H_d$ with its bounded monomial basis and filtration, and
[[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] defines the
natural operators $x_j=\Omega_{0j}+\sum_{k<j}P_{kj}$ and
$s_i=P_{i,i+1}$ on $M\otimes V^{\otimes d}$, including the $\mathfrak{sl}_N$
normalization $y_j=x_j-z_M/N+(N-1)/2$ used by the source.
[[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]
proves that these operators satisfy all Coxeter, commutation and affine cross
relations, so that every $\mathfrak g$-module carries a commuting right
$H_d$-action.

**The pyramid, the finite W-algebra and Whittaker vectors.**
[[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]
constructs the type-A pyramid good grading, the nilpotent $e$, the parabolic
subalgebras $\mathfrak p,\mathfrak m$, the centralizer basis of
$\mathfrak g^e$ and the Whittaker character $\chi$;
[[def-the-type-a-finite-w-algebra-and-whittaker-category]] defines the finite
W-algebra $W(\lambda)$ with its $\eta$-dictionary and the Whittaker category
with its Whittaker-vector functor. The Vust double centralizer
[[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]] is proved
from the local normality [[lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties]]
and covariant extension/polarization
[[lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize]]
results, for every Jordan type and every degree. The shifted Yangian and its
generators are fixed in
[[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]
with the PBW basis [[thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]];
the loop filtration
[[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]]
and the Gan–Ginzburg/Skryabin inputs
[[lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading]]
lead to Skryabin's equivalence
[[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]].

**The cyclotomic quotient and the double centralizer.**
[[def-degenerate-cyclotomic-hecke-algebra]] fixes the quotient $H_d(\mathbf a)$
with its bounded monomial basis, central blocks and trace form;
[[lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient]]
computes the minimal polynomial of $x_1$ on the truncated tensor space and
hence the cyclotomic factorization, and
[[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]] defines the
filtered $(W(\lambda),H_d(\mathbf a))$-bimodule structure with associated
graded the Vust tensor space.
[[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]]
proves the mutual centralizers for every origin, the stable-range
faithfulness, and the admissible-origin Morita progenerator statement.

**The Whittaker functor and the Schur quotient.**
[[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] defines the
genuine Whittaker functor $V$ on the parabolic summand from restricted duality
and Whittaker vectors, and
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]
proves its exactness, its values on the ground and tensor objects, full
faithfulness on all projectives and tiltings, and the Serre-quotient
identification.
[[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]]
defines the projective generator $T$, the Schur functor
$\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ and its right-exact left adjoint,
with the boundaries of the left adjoint stated exactly.
[[thm-higher-level-schur-weyl-endomorphism-isomorphism]] identifies
$\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}$ and its components with
the Hecke image, and [[thm-higher-level-schur-weyl-double-centralizer]]
assembles the all-origin double centralizer, the admissible Morita equivalence
and the exact Schur Serre quotient.

**Stable range, residues and images.**
[[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]
fixes the stable range $q_l\ge d$ and the central block corner outside it;
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]]
defines the Hecke residue functors $e_i,f_i$ with their exactness, biadjunction
and duality compatibility.
[[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]]
identifies the images of standard, simple, projective and tilting objects and
the multiplicity dictionary $[S(A):D(B)]=d_{B,A}(1)$, and
[[thm-category-o-translation-intertwines-residue-induction-and-restriction]]
proves the natural isomorphisms intertwining residue induction and restriction
on the two sides. The companion page
[[arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples]] works
the smallest instances.
