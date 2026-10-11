---
page: cyclotomic-klr-algebras-and-highest-weight-categorification
title: "Cyclotomic KLR Algebras and Highest-Weight Categorification"
status: draft
requires: [balanced-triples-and-global-crystal-bases, klr-algebras-induction-and-quantum-serre-categorification, grothendieck-groups-and-graded-cartan-pairings, quantum-affine-type-a-and-level-one-fock-space]
items: [       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-minimal-parabolic-klr-diagram-proof-category,
       lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action,
       def-cyclotomic-klr-induction-and-restriction-functors,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       lem-klr-two-color-jump-formula-and-strict-elementary-embeddings,
       thm-cyclotomic-klr-sl-two-categorical-commutator,
       lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action,
       lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors,
       lem-the-vacuum-projective-is-a-highest-weight-generator,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse,
       lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection,
       lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form,
       lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations,
       lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda,
       lem-cyclotomic-extension-of-scalars-respects-the-based-quotient,
       thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis,
       thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis,
       lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]
examples: []
---

**Objective.** This page builds the cyclotomic quotient of a quiver Hecke (KLR)
algebra at a dominant integral weight and proves the highest-weight
categorification statements attached to it. The first-strand relation
$a_{\nu_1}(x_1)e(\nu)=0$ of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]] is fixed once and for all,
with right-append induction as in
[[def-cyclotomic-klr-induction-and-restriction-functors]]; the entire page is
written in that side convention, and the word-mirror involution
[[lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star]] records
the dictionary with the opposite one. On that foundation the page proves the
mixed relations and the projectivity/exactness of the descended functors
([[lem-generic-klr-induction-and-restriction-mixed-relations]],
[[thm-cyclotomic-klr-induction-is-projective-on-the-right]]), the categorical
$\mathfrak{sl}_2$ commutator with its explicit shifts
([[thm-cyclotomic-klr-sl-two-categorical-commutator]]), the finite-dimensional
graded symmetric structure with its trace degree
([[thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric]]), the
normalized integrable quantum action on both Grothendieck groups
([[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]],
[[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]),
the identification of projective $K_0$ with the integral highest-weight module
and of $G_0$ with its restricted dual
([[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]],
[[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]]),
and the crystal identification $B(\Lambda)$ for the normalized simple and
projective-cover graphs
([[thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda]]).

**Proof-tool layer.** Two formal proof tools are carried locally rather than
imported as axioms: the minimal-parabolic diagram proof category
[[def-minimal-parabolic-klr-diagram-proof-category]] with its graded polynomial
flag model
([[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]]),
PBW/bubble normal form
([[lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form]]) and cap-off
identification
([[lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations]]); and the
word-mirror involution above. The formal $H_i$ is normalized projective
restriction with its input-weight shift, distinct from the basic restriction
$E_i^{\mathrm{basic}}$, and every statement records which of the two is meant.

**Conditional global-basis layer.** The three items
[[lem-cyclotomic-extension-of-scalars-respects-the-based-quotient]],
[[thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis]]
and
[[thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis]]
are conditional on the generic geometric global theorem of the parent KLR page
and are kept separate from the unconditional cyclotomic results; their
statements record the normalizations, the $\pi_\Lambda\circ*$ side convention
and the surviving-cover non-merging, and they are not used to prove anything
else on this page.

**Scope and dependence.** The page depends on the divided-power integral forms
of [[balanced-triples-and-global-crystal-bases]] for the lower and upper global
bases, on [[klr-algebras-induction-and-quantum-serre-categorification]] for the
generic KLR algebra, induction bimodules, PBW and negative-half
categorification, on [[grothendieck-groups-and-graded-cartan-pairings]] for the
graded Grothendieck and Cartan-pairing conventions, and on
[[quantum-affine-type-a-and-level-one-fock-space]] for the affine/level-one
context in which the general parameters are used. The Axiom of Choice is inherited through the declared quantum and generic
suppliers of the integral projective identification, restricted-dual
identification, crystal comparison and conditional global-basis layer. The
finite cyclotomic polynomial, quotient and rank-one computations introduce no
further choice.
