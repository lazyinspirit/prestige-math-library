# Step 6c repair — risk-report

This file is the authority for repair cycle 1.
Primary gate: `risk-report`
Reason: ERROR risk-review-missing [fs-measurable-sections-imply-product-measurability]: fs-measurable-sections-imply-product-measurability is high risk and lacks a complete Alpha risk_review
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `fs-measurable-sections-imply-product-measurability`, `fs-product-of-complete-measure-spaces-is-complete`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
MODERATE 3 [lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable] 1:2 cited facts; 2:boundary-sensitive language
HIGH 6 [prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 8 [thm-word-problem-for-free-groups] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-word-problem-for-finitely-generated-abelian-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [thm-word-problem-for-free-products-and-amalgams-with-decidable-membership] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [lem-minimal-algebraic-relator-area-exists] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 5 [prop-recursive-dehn-function-implies-solvable-word-problem] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 0 [fs-every-finitely-presented-group-has-solvable-word-problem] no signals
ORDINARY 1 [fs-recursively-enumerable-trivial-words-form-a-decision-algorithm] 1:3 cited facts
ORDINARY 2 [fs-unsolvable-word-problem-means-no-word-can-be-decided] 2:boundary-sensitive language
MODERATE 4 [fs-the-novikov-boone-theorem-proves-the-uniform-problem-only] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem] no signals
ORDINARY 2 [ex-word-problem-by-free-reduction] 2:boundary-sensitive language
ORDINARY 2 [ex-word-problem-in-a-finite-cyclic-presentation] 2:quotient or equivalence-class construction
HIGH 5 [ex-conjugacy-in-a-free-group-by-cyclic-reduction] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [ex-todd-coxeter-as-a-partial-coset-enumeration-procedure] 2:quotient or equivalence-class construction
HIGH 5 [ex-an-algebraic-relator-area-computation] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 0 [cex-enumerating-relator-consequences-does-not-decide-nontriviality] no signals
HIGH 6 [thm-fundamental-groups-from-different-maximal-trees-are-isomorphic] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-normal-form-for-fundamental-groups-of-graphs-of-groups] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 0 [cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group] no signals
MODERATE 3 [lem-the-bass-serre-coset-graph-is-a-tree] 1:2 cited facts; 2:quotient or equivalence-class construction
HIGH 7 [thm-fundamental-group-acts-on-its-bass-serre-tree] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 7 [lem-boundary-monomorphisms-from-stabilizers-are-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 9 [thm-bass-serre-structure-theorem] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [thm-one-segment-graph-of-groups-is-an-amalgamated-free-product] 1:2 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-one-loop-graph-of-groups-is-an-hnn-extension] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [cor-a-group-acting-freely-without-inversions-on-a-tree-is-free] 1:3 cited facts; 2:quotient or equivalence-class construction
HIGH 5 [cor-fundamental-group-of-a-graph-with-trivial-groups-is-free] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-kurosh-subgroup-theorem] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [thm-grushko-decomposition-and-rank-additivity] 1:3 cited facts; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition] 2:quotient or equivalence-class construction
MODERATE 4 [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [fs-every-tree-action-is-a-free-action] no signals
MODERATE 4 [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-kurosh-says-every-subgroup-of-a-free-product-is-free] 2:boundary-sensitive language
HIGH 5 [ex-bass-serre-tree-of-a-free-product] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [ex-bass-serre-tree-of-an-amalgamated-free-product] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [ex-bass-serre-tree-of-a-baumslag-solitar-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [ex-a-free-action-and-the-quotient-graph-basis] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-kurosh-decomposition-of-a-subgroup] 2:boundary-sensitive language
HIGH 5 [ex-graph-of-finite-groups-giving-a-virtually-free-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [cex-the-underlying-quotient-graph-does-not-determine-the-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-tensor-and-direct-sum-models-of-complexification-agree] 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
HIGH 6 [thm-universal-property-and-uniqueness-of-complexification] 2:4 declared dependencies; 1:3 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness
MODERATE 3 [prop-complexification-is-functorial] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 8 [thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences] 2:6 declared dependencies; 2:6 cited facts; 2:12 numbered proof steps; 2:boundary-sensitive language
HIGH 5 [thm-a-real-basis-complexifies-to-a-complex-basis] 2:6 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps
HIGH 6 [cor-realification-doubles-finite-dimension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
HIGH 7 [thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
HIGH 5 [cor-real-forms-correspond-to-conjugations] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps
CRITICAL 11 [thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
HIGH 6 [thm-characteristic-and-minimal-polynomials-survive-complexification] 2:5 declared dependencies; 2:5 cited facts; 2:induction, recursion, or minimality
ORDINARY 1 [thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs] 1:3 cited facts
ORDINARY 2 [cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane] 1:2 cited facts; 1:6 numbered proof steps
MODERATE 3 [ex-canonical-embedding-of-r-n-into-c-n] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-complexification-of-a-real-polynomial-space] 1:3 cited facts
ORDINARY 1 [ex-realification-of-c-n-has-doubled-dimension] 1:2 cited facts
MODERATE 4 [ex-quarter-turn-diagonalises-after-complexification] 1:2 cited facts; 1:6 numbered proof steps; 2:induction, recursion, or minimality
ORDINARY 2 [ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane] 2:boundary-sensitive language
MODERATE 4 [ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
MODERATE 3 [cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [fs-complexification-doubles-finite-dimension] 1:2 cited facts
ORDINARY 2 [fs-every-complex-vector-space-has-a-preferred-real-form] 2:boundary-sensitive language
MODERATE 3 [fs-every-complex-linear-operator-descends-to-every-chosen-real-form] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one] 2:boundary-sensitive language
CRITICAL 9 [thm-universal-property-and-uniqueness-of-exterior-powers] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
HIGH 7 [prop-basic-wedge-is-multilinear-and-alternating] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-increasing-basis-wedges-form-a-basis] 3:7 declared dependencies; 2:5 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [cor-dimension-of-the-kth-exterior-power] 1:3 cited facts
CRITICAL 8 [cor-the-kth-exterior-power-vanishes-above-dimension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 4 [thm-exterior-algebra-laws] 1:2 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 1 [thm-exterior-powers-are-functorial] 1:2 cited facts
HIGH 6 [thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
MODERATE 3 [cor-the-top-exterior-power-acts-by-the-determinant] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 4 [cor-determinant-multiplicativity-from-the-top-exterior-power] 1:2 cited facts; 2:boundary-sensitive language; 1:finite countermodel smoke test selected
HIGH 5 [thm-determinant-sign-detects-orientation-change] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 12 [thm-gram-inner-product-on-exterior-powers-is-positive-definite] 3:9 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 9 [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 0 [cor-hodge-star-is-an-isometry-and-squares-to-a-sign] no signals
CRITICAL 8 [thm-interior-product-is-adjoint-to-exterior-multiplication] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 1 [prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity] 1:3 cited facts
MODERATE 4 [cor-cross-product-is-hodge-star-of-the-wedge] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language
ORDINARY 1 [ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four] 1:3 cited facts
ORDINARY 2 [ex-a-wedge-product-detects-linear-dependence] 2:boundary-sensitive language
ORDINARY 1 [ex-exterior-powers-of-a-diagonal-operator] 1:2 cited facts
ORDINARY 0 [ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix] no signals
ORDINARY 1 [ex-oriented-area-and-volume-from-gram-determinants] 1:2 cited facts
ORDINARY 2 [ex-hodge-star-in-dimensions-two-three-and-four] 1:2 cited facts; 1:6 numbered proof steps
ORDINARY 0 [ex-the-cross-product-from-hodge-star-and-wedge] no signals
HIGH 6 [ex-orientation-reversal-negates-the-hodge-star] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
ORDINARY 1 [cex-a-bivector-in-r-four-need-not-be-decomposable] 1:2 cited facts
HIGH 5 [fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
MODERATE 3 [fs-an-inner-product-determines-an-orientation] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [fs-an-orientation-determines-an-inner-product] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [fs-hodge-star-needs-only-the-vector-space-structure] 1:3 cited facts
CRITICAL 8 [thm-transitivity-of-integrality] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [thm-integral-closure-is-integrally-closed] 1:3 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [thm-integrality-commutes-with-localisation] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 10 [lem-field-integrality-criterion] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
CRITICAL 8 [cor-contraction-of-maximal-ideals-integral-extension] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 16 [thm-lying-over] 3:9 declared dependencies; 2:8 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 11 [thm-incomparability-for-integral-extensions] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [thm-going-up] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 8 [cor-integral-extension-lifts-finite-prime-chains] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 2 [lem-integral-extension-chain-contraction-is-strict] 2:analytic limiting/completeness language
CRITICAL 10 [cor-dimension-preserved-by-integral-extensions] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 10 [lem-integrally-closed-minimal-polynomial-coefficients] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
CRITICAL 14 [thm-normality-is-local-for-domains] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 15 [thm-going-down-over-normal-domains] 2:6 declared dependencies; 2:6 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 10 [cor-height-preserved-under-going-down-integral-extensions] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [ex-integrality-equation-and-power-basis] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
HIGH 5 [ex-integral-elements-subring-computation] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [ex-integrality-localisation-clearing-denominators] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
HIGH 7 [ex-lying-over-by-quotient-and-localisation] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
MODERATE 3 [ex-incomparability-in-a-quadratic-integral-extension] 1:2 cited facts; 2:analytic limiting/completeness language
MODERATE 4 [ex-going-down-needs-normality] 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 12 [prop-basic-value-properties-of-a-complex-character] 3:7 declared dependencies; 2:7 cited facts; 2:10 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 3 [thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 4 [thm-characters-of-direct-sums-tensor-products-and-duals] 2:6 declared dependencies; 2:6 cited facts
MODERATE 3 [thm-character-of-a-permutation-representation-counts-fixed-points] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [lem-averaging-operator-projects-onto-the-fixed-subspace] 2:boundary-sensitive language
MODERATE 4 [lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation] 2:5 declared dependencies; 2:5 cited facts
MODERATE 4 [thm-character-inner-product-computes-intertwiner-dimension] 2:4 declared dependencies; 2:4 cited facts
CRITICAL 8 [thm-first-orthogonality-relation-for-irreducible-complex-characters] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
ORDINARY 1 [cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product] 1:3 cited facts
MODERATE 4 [thm-complex-representations-are-determined-by-their-characters] 1:2 cited facts; 3:biconditional / both-direction claim
HIGH 6 [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 4 [thm-character-of-the-regular-representation] 1:2 cited facts; 3:biconditional / both-direction claim
ORDINARY 1 [cor-the-regular-character-gives-the-sum-of-squares-formula] 1:3 cited facts
ORDINARY 1 [thm-second-column-orthogonality-relation-for-irreducible-complex-characters] 1:2 cited facts
ORDINARY 0 [cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size] no signals
ORDINARY 1 [cor-the-character-table-is-square-and-invertible] 1:2 cited facts
CRITICAL 8 [prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 7 [ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language
MODERATE 4 [ex-the-character-table-of-a-finite-cyclic-group-over-c] 2:4 declared dependencies; 2:4 cited facts
MODERATE 3 [ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 9 [ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 3 [ex-the-character-table-of-s-three] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-decomposing-the-square-of-the-two-dimensional-s-three-character] 1:3 cited facts
HIGH 7 [ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes] 1:3 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
CRITICAL 9 [ex-the-character-table-of-a-four] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six] 1:2 cited facts
CRITICAL 11 [ex-the-character-table-of-s-four-and-its-normal-subgroups] 3:9 declared dependencies; 2:9 cited facts; 1:8 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 9 [ex-the-character-table-of-q-eight] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 9 [ex-the-character-table-of-dih-c-four] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [fs-nonisomorphic-finite-groups-can-have-the-same-character-table] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
ORDINARY 0 [fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism] no signals
ORDINARY 2 [fs-every-value-of-an-irreducible-complex-character-is-real] 2:boundary-sensitive language
ORDINARY 0 [fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees] no signals
HIGH 6 [fs-every-complex-class-function-with-self-inner-product-one-is-a-character] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 11 [thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized] 2:4 declared dependencies; 2:4 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums] 2:5 declared dependencies; 2:5 cited facts; 2:14 numbered proof steps; 2:analytic limiting/completeness language
HIGH 7 [thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison] 3:7 declared dependencies; 2:5 cited facts; 2:10 numbered proof steps
ORDINARY 1 [thm-right-hand-side-perturbation-bound-for-ax-equals-b] 1:3 cited facts
MODERATE 4 [thm-matrix-perturbation-bound-for-ax-equals-b] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language
HIGH 7 [thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity] 2:6 declared dependencies; 2:5 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language
HIGH 5 [thm-residual-to-forward-error-bounds-for-linear-systems] 2:4 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps
CRITICAL 10 [prop-explicit-formulas-for-normwise-and-componentwise-backward-error] 2:6 declared dependencies; 2:5 cited facts; 2:13 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [lem-product-of-one-plus-deltas-gives-theta-n] 1:3 cited facts; 1:6 numbered proof steps; 2:analytic limiting/completeness language
CRITICAL 9 [thm-floating-point-dot-product-componentwise-and-normwise-error-bounds] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 2 [thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order] 2:analytic limiting/completeness language
HIGH 7 [thm-normal-equations-square-the-spectral-condition-number] 2:6 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language
HIGH 6 [thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices] 2:4 declared dependencies; 1:3 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language
MODERATE 4 [prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold] 2:4 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps
MODERATE 4 [ex-two-by-two-systems-with-contrasting-condition-numbers] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
MODERATE 3 [ex-low-order-hilbert-matrices-have-large-condition-numbers] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 4 [ex-vandermonde-conditioning-improves-after-centering-and-scaling] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
MODERATE 3 [cex-a-tiny-residual-does-not-force-a-small-forward-error] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [ex-a-backward-stable-solution-of-an-ill-conditioned-system] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 4 [ex-catastrophic-cancellation-and-a-stable-reformulation] 1:2 cited facts; 1:7 numbered proof steps; 2:quotient or equivalence-class construction
ORDINARY 0 [ex-a-floating-point-dot-product-error-bound] no signals
MODERATE 4 [ex-normal-equations-versus-qr-conditioning] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
MODERATE 4 [cex-condition-number-depends-on-the-chosen-norm-and-scaling] 1:2 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language
ORDINARY 2 [cex-numerical-rank-depends-on-the-declared-tolerance] 2:boundary-sensitive language
ORDINARY 2 [cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations] 2:quotient or equivalence-class construction
MODERATE 3 [lem-finite-rectangle-unions-form-a-generating-algebra] 2:4 declared dependencies; 1:2 cited facts
HIGH 5 [thm-sections-of-product-measurable-sets-are-measurable] 2:4 declared dependencies; 1:2 cited facts; 2:induction, recursion, or minimality
MODERATE 3 [thm-sections-of-product-measurable-functions-are-measurable] 2:4 declared dependencies; 1:2 cited facts
HIGH 6 [fs-measurable-sections-imply-product-measurability] 2:6 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [prop-sigma-finite-section-measure-functions-are-measurable] 3:7 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-iterated-section-measures-agree-on-product-measurable-sets] 2:6 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique] 3:8 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language
ORDINARY 0 [fs-product-measure-is-unique-without-sigma-finiteness] no signals
CRITICAL 8 [thm-tonelli-theorem-for-sigma-finite-product-spaces] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [fs-tonelli-holds-without-sigma-finiteness] 1:2 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-tonelli-and-fubini-for-completed-product-measures] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [fs-completed-product-sections-are-measurable-for-every-parameter] 1:3 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-borel-products-of-euclidean-spaces-are-euclidean-borel] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets] 3:7 declared dependencies; 2:5 cited facts
ORDINARY 1 [thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures] 1:3 cited facts
HIGH 5 [fs-product-of-complete-measure-spaces-is-complete] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language
MODERATE 3 [fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra] 1:3 cited facts; 2:boundary-sensitive language
HIGH 7 [thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cor-graph-of-a-measurable-function-is-lebesgue-null] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language
CRITICAL 8 [thm-layer-cake-formula-for-l-p-powers] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-polar-coordinates-formula-for-lebesgue-measure] 3:7 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language
MODERATE 3 [lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 3 [lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands] 1:2 cited facts; 2:analytic limiting/completeness language
CRITICAL 9 [thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cor-c-one-change-of-variables-for-l-one-functions] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates] 1:2 cited facts; 2:analytic limiting/completeness language
HIGH 5 [ex-zeta-two-from-tonelli-and-the-geometric-series] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [ex-region-under-x-squared-has-measure-one-third] 1:2 cited facts; 2:analytic limiting/completeness language
MODERATE 3 [ex-cavalieri-computes-the-area-of-the-unit-disc] 1:2 cited facts; 2:boundary-sensitive language
HIGH 6 [cex-measurable-sections-do-not-imply-product-measurability] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language
ORDINARY 2 [cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal] 2:analytic limiting/completeness language
MODERATE 4 [cex-fubini-fails-without-l-one-integrability] 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [cex-equal-iterated-integrals-do-not-imply-l-one-integrability] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cex-product-measure-need-not-be-unique-without-sigma-finiteness] 2:boundary-sensitive language
ORDINARY 2 [cex-product-of-complete-measures-need-not-be-complete] 2:boundary-sensitive language
ORDINARY 2 [cex-completed-product-sections-need-not-be-pointwise-measurable] 2:boundary-sensitive language
HIGH 6 [thm-branch-power-agrees-with-integer-powers] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality
ORDINARY 1 [thm-principal-branch-power-agrees-with-positive-real-power] 1:3 cited facts
CRITICAL 8 [thm-branch-discrepancies-for-logarithm-and-complex-powers] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 1 [thm-blaschke-factor-is-a-disc-automorphism] 1:2 cited facts
CRITICAL 9 [thm-unit-disc-schwarz-lemma-with-rigidity] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 1 [thm-schwarz-pick-lemma-on-the-unit-disc] 1:3 cited facts
MODERATE 3 [thm-disc-automorphisms-are-rotated-blaschke-factors] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness
MODERATE 4 [thm-upper-half-plane-automorphisms-are-real-mobius-maps] 2:4 declared dependencies; 2:4 cited facts
HIGH 5 [thm-poincare-distance-formula-and-disc-automorphism-invariance] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 1 [thm-conformal-equivalence-is-an-equivalence-relation] 1:2 cited facts
HIGH 6 [thm-sector-power-map-is-biholomorphic-on-narrow-sectors] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
MODERATE 4 [thm-slit-plane-root-branch-biholomorphism-to-a-sector] 2:5 declared dependencies; 2:4 cited facts
HIGH 6 [thm-principal-logarithm-biholomorphism-to-the-principal-strip] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
ORDINARY 1 [thm-principal-exponential-biholomorphism-from-principal-strip] 1:3 cited facts
ORDINARY 0 [thm-joukowski-biholomorphism-outside-unit-disc] no signals
MODERATE 3 [thm-sine-biholomorphism-from-upper-half-strip] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 3 [thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic] 2:4 declared dependencies; 1:3 cited facts
MODERATE 3 [ex-principal-logarithm-breaks-additivity-at-minus-one] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-principal-square-root-breaks-multiplicativity-at-minus-one] 1:2 cited facts
MODERATE 3 [ex-strip-to-disc-biholomorphism-by-exponential-and-cayley] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [ex-disc-automorphism-swapping-two-points] 2:boundary-sensitive language
ORDINARY 0 [ex-power-map-sends-a-sector-to-a-half-plane] no signals
MODERATE 3 [ex-joukowski-sends-circles-to-ellipses] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [ex-sine-sends-a-half-strip-to-the-upper-half-plane] 2:boundary-sensitive language
MODERATE 4 [cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
ORDINARY 1 [fs-conformal-maps-preserve-euclidean-lengths] 1:2 cited facts
ORDINARY 0 [fs-schwarz-lemma-holds-without-a-fixed-point-at-zero] no signals
HIGH 5 [thm-absolute-convergence-criterion-for-complex-infinite-products] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-normal-convergence-of-holomorphic-products] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cor-logarithmic-derivative-of-a-normally-convergent-product] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [lem-unit-disc-estimate-for-weierstrass-elementary-factors] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-canonical-product-convergence-from-exponent-sum] 2:5 declared dependencies; 1:3 cited facts; 2:analytic limiting/completeness language
HIGH 5 [thm-weierstrass-product-theorem-on-the-complex-plane] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-weierstrass-factorization-for-entire-functions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [cor-meromorphic-functions-on-the-plane-are-entire-quotients] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-sine-has-its-weierstrass-product] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 8 [thm-jensen-formula-on-a-disc] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cor-jensen-zero-counting-bound] 2:boundary-sensitive language
CRITICAL 8 [thm-zero-exponent-is-bounded-by-entire-order] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 12 [thm-hadamard-factorization-for-finite-order-entire-functions] 3:10 declared dependencies; 2:9 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
MODERATE 4 [cor-nonintegral-entire-order-bounds-canonical-genus] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [ex-sine-product-recovers-the-basel-sum] 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 2 [ex-jensen-formula-for-a-polynomial] 2:boundary-sensitive language
MODERATE 4 [ex-canonical-product-for-zeros-at-the-squares] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cex-conditional-linear-sum-does-not-force-product-convergence] 2:analytic limiting/completeness language
ORDINARY 2 [fs-weierstrass-factorization-is-unique] 2:existence, choice, uniqueness, or well-definedness
CRITICAL 8 [fs-every-zero-sequence-admits-a-genus-zero-canonical-product] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [fs-entire-order-equals-canonical-genus] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 12 [thm-the-subobject-inequalities-underlying-exactness] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
CRITICAL 9 [thm-the-arrow-theoretic-criterion-for-exactness] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 10 [thm-a-short-exact-sequence-is-a-kernel-cokernel-pair] 3:8 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-degenerate-exactness-criteria] 2:5 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 4 [thm-exactness-is-self-dual] 1:3 cited facts; 3:biconditional / both-direction claim
CRITICAL 8 [thm-splitting-lemma-in-an-abelian-category] 2:4 declared dependencies; 1:2 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 3 [fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two] 1:3 cited facts; 2:quotient or equivalence-class construction
ORDINARY 2 [prop-member-equivalence-is-reflexive-and-symmetric] 2:boundary-sensitive language
MODERATE 3 [thm-member-equivalence-is-transitive] 1:3 cited facts; 2:boundary-sensitive language
HIGH 6 [thm-members-modulo-equivalence-correspond-to-subobjects] 2:6 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction
CRITICAL 8 [prop-each-object-has-a-zero-member-and-each-member-has-a-negative] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [prop-a-morphism-carries-members-to-members-and-preserves-equivalence] 2:boundary-sensitive language
MODERATE 3 [thm-chasing-rule-monicity-detected-by-members] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 3 [thm-chasing-rule-monicity-by-member-cancellation] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 8 [thm-chasing-rule-epimorphy-detected-by-members] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-chasing-rule-a-zero-arrow-is-detected-by-members] 2:boundary-sensitive language
CRITICAL 9 [thm-chasing-rule-exactness-detected-by-members] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
HIGH 7 [thm-chasing-rule-the-subtraction-surrogate] 2:5 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
HIGH 5 [cex-the-members-of-an-object-do-not-form-a-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [cex-two-morphisms-agreeing-on-every-member-need-not-be-equal] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 9 [thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 1 [thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs] 1:2 cited facts
CRITICAL 8 [thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [thm-epimorphisms-in-an-abelian-category-are-universal] no signals
HIGH 7 [thm-the-covering-criterion-for-exactness] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
HIGH 6 [thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
MODERATE 3 [cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact] 1:2 cited facts; 2:boundary-sensitive language
HIGH 6 [thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
HIGH 7 [thm-the-kernel-cokernel-sequence-of-a-composite] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language
CRITICAL 8 [thm-hom-is-left-exact-in-each-variable] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 1 [cex-hom-is-not-exact] 1:2 cited facts
CRITICAL 9 [thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 12 [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits] 3:8 declared dependencies; 2:8 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [fs-two-morphisms-that-agree-on-every-member-are-equal] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [fs-the-members-of-an-object-form-an-abelian-group] 1:2 cited facts; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks] 2:boundary-sensitive language
ORDINARY 1 [fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact] 1:2 cited facts
MODERATE 3 [fs-the-subtraction-rule-produces-a-unique-member] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness
MODERATE 3 [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [ex-members-of-an-abelian-group-correspond-to-its-subgroups] 1:2 cited facts; 2:quotient or equivalence-class construction
MODERATE 3 [ex-an-ordinary-element-as-the-member-from-the-integers] 1:3 cited facts; 2:quotient or equivalence-class construction
HIGH 5 [cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [ex-a-member-chase-verifying-monicity] 1:3 cited facts
ORDINARY 1 [ex-the-covering-criterion-checked-in-abelian-groups] 1:2 cited facts
MODERATE 3 [ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [cex-a-non-split-short-exact-sequence-of-abelian-groups] 1:3 cited facts; 2:quotient or equivalence-class construction
MODERATE 3 [ex-the-splitting-lemma-instantiated-at-the-published-module-theorem] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [ex-the-kernel-row-failure-for-multiplication-by-two-computed] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [lem-smooth-chart-compatibility-is-symmetric-and-reflexive] 2:boundary-sensitive language
ORDINARY 2 [lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas] 2:boundary-sensitive language
CRITICAL 10 [prop-compatibility-of-smooth-atlases-is-an-equivalence-relation] 3:9 declared dependencies; 2:9 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 6 [lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
CRITICAL 8 [thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 5 [prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure] 3:8 declared dependencies; 2:7 cited facts
HIGH 7 [prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language
HIGH 7 [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure] 3:11 declared dependencies; 2:9 cited facts; 2:boundary-sensitive language
HIGH 7 [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds] 3:8 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language
HIGH 5 [lem-chart-independence-of-c-r-smoothness] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language
HIGH 5 [prop-smooth-maps-are-continuous] 3:7 declared dependencies; 2:6 cited facts
HIGH 7 [prop-identity-maps-and-composites-of-smooth-maps-are-smooth] 3:7 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
MODERATE 4 [prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets] 2:6 declared dependencies; 2:6 cited facts
HIGH 7 [prop-smoothness-is-local-on-the-source] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim
MODERATE 3 [lem-smooth-maps-paste-over-an-open-cover] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness
HIGH 6 [prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 6 [prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 7 [prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim
ORDINARY 1 [prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism] 1:2 cited facts
MODERATE 3 [lem-coordinate-balls-form-a-basis-of-a-topological-manifold] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 1 [prop-topological-manifolds-are-locally-compact-and-locally-path-connected] 1:3 cited facts
CRITICAL 9 [prop-components-of-a-topological-manifold-are-open-and-at-most-countable] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 3 [thm-topological-manifolds-are-sigma-compact] 1:2 cited facts; 2:boundary-sensitive language
CRITICAL 9 [thm-topological-manifolds-are-metrizable-and-paracompact] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
HIGH 6 [fs-every-hausdorff-locally-euclidean-space-is-a-manifold] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
ORDINARY 0 [fs-a-chart-domain-is-an-open-subset-of-euclidean-space] no signals
MODERATE 3 [fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [fs-a-bijective-smooth-map-is-a-diffeomorphism] 1:2 cited facts
ORDINARY 2 [fs-chart-compatibility-needs-only-one-smooth-transition-direction] 2:boundary-sensitive language
MODERATE 3 [fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds] 1:2 cited facts
ORDINARY 1 [ex-the-circle-from-two-stereographic-charts] 1:3 cited facts
ORDINARY 1 [ex-the-n-sphere-with-its-standard-smooth-atlas] 1:3 cited facts
HIGH 5 [ex-real-projective-space-from-affine-charts] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [ex-the-torus-as-a-product-smooth-manifold] 1:2 cited facts
ORDINARY 1 [ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold] 1:2 cited facts
ORDINARY 1 [cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention] 1:3 cited facts
MODERATE 3 [cex-two-noncompatible-atlases-on-the-real-line] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 1 [cex-a-bijective-smooth-map-with-nonsmooth-inverse] 1:2 cited facts
MODERATE 3 [cex-an-uncountable-disjoint-union-of-points-is-not-second-countable] 1:3 cited facts; 2:boundary-sensitive language
CRITICAL 11 [lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [prop-a-fundamental-matrix-is-invertible] 1:3 cited facts; 2:boundary-sensitive language
CRITICAL 10 [thm-c1-dependence-of-solutions-on-initial-data] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 10 [thm-smooth-dependence-of-solutions-on-initial-data] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [thm-smooth-dependence-of-ode-solutions-on-parameters] no signals
CRITICAL 8 [cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 1 [cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete] 1:2 cited facts
CRITICAL 8 [thm-fundamental-theorem-for-autonomous-smooth-odes] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 3 [thm-fundamental-theorem-for-nonautonomous-smooth-odes] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness
MODERATE 3 [prop-the-maximal-solution-domain-is-open] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 1 [prop-solutions-compose-under-a-change-of-initial-time] 1:2 cited facts
ORDINARY 1 [fs-every-smooth-vector-field-on-euclidean-space-is-complete] 1:2 cited facts
MODERATE 3 [fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [fs-a-maximal-ode-solution-has-a-closed-interval-domain] 1:2 cited facts
ORDINARY 1 [fs-continuous-dependence-alone-implies-differentiable-dependence] 1:3 cited facts
ORDINARY 0 [ex-a-constant-vector-field-and-translation-solutions] no signals
ORDINARY 1 [ex-a-linear-system-and-its-fundamental-matrix] 1:3 cited facts
ORDINARY 1 [ex-the-harmonic-oscillator-as-a-first-order-system] 1:2 cited facts
ORDINARY 0 [ex-a-compactly-supported-vector-field-with-global-solutions] no signals
ORDINARY 1 [ex-smooth-dependence-in-an-ode-with-a-parameter] 1:2 cited facts
ORDINARY 2 [ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time] 2:boundary-sensitive language
MODERATE 3 [lem-computation-words-agree-with-published-finite-words] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [lem-language-concatenation-is-associative] 1:2 cited facts; 1:6 numbered proof steps
MODERATE 4 [lem-kleene-star-has-the-expected-least-closure-property] 1:2 cited facts; 1:8 numbered proof steps; 2:induction, recursion, or minimality
ORDINARY 2 [lem-reversal-is-an-involution-and-reverses-concatenation] 1:3 cited facts; 1:6 numbered proof steps
HIGH 5 [lem-induced-word-map-has-the-free-extension-property] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
MODERATE 4 [lem-finite-tuples-admit-effective-prefix-free-encodings] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [prop-polynomially-related-encodings-preserve-polynomial-size] 2:boundary-sensitive language
MODERATE 3 [fs-a-language-is-a-set-of-symbols] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [fs-every-effective-encoding-is-prefix-free] 2:boundary-sensitive language
ORDINARY 1 [ex-language-concatenation-is-associative] 1:2 cited facts
ORDINARY 1 [ex-polynomially-related-encodings-preserve-polynomial-size] 1:2 cited facts
ORDINARY 2 [cex-a-language-is-a-set-of-symbols] 2:boundary-sensitive language
ORDINARY 2 [cex-an-effective-encoding-need-not-be-prefix-free] 2:boundary-sensitive language
risk-report: 2 error(s), 389 item(s) routed
ERROR risk-review-missing [fs-measurable-sections-imply-product-measurability]: fs-measurable-sections-imply-product-measurability is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-product-of-complete-measure-spaces-is-complete]: fs-product-of-complete-measure-spaces-is-complete is high risk and lacks a complete Alpha risk_review

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-missing: research/frontier-23-impact.json: no receipt existed — wrote the template there with 457 pending disposition(s); fill reviewer and every disposition, then re-run"
  }
]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id <id>` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

