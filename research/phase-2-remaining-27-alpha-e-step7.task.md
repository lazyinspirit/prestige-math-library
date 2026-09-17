# Step 7 adjudication — group **e**, run `phase-2-remaining-27`

You are the group Alpha for batches **14**, **15**, **3**: 5 A/B pair(s), 10 page(s), 166 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-remaining-27-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | A | foundations | 697 | `halpern-lauchli-and-bpi-without-choice`, `dependent-choice-and-the-complete-metric-baire-theorem`, `countability-axioms-and-cardinal-functions`, `separation-axioms`, `partitions-of-unity-and-paracompactness` |
| 14 | `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` | B | foundations | 698 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` |
| 14 | `normal-moore-spaces-pmea-and-consistency-strength` | A | foundations | 709 | `proper-forcing-countable-support-iterations-and-pfa`, `shelahs-baire-property-model-and-inner-model-lower-bounds`, `choice-strength-in-baire-urysohn-stone-and-tychonoff`, `product-measures-and-the-fubini-tonelli-theorems` |
| 14 | `normal-moore-spaces-pmea-and-consistency-strength-examples` | B | foundations | 710 | `normal-moore-spaces-pmea-and-consistency-strength` |
| 15 | `shelahs-baire-property-model-and-inner-model-lower-bounds` | A | foundations | 703 | `solovays-model-and-regularity-of-all-sets-of-reals`, `finite-support-iterations-and-martins-axiom` |
| 15 | `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` | B | foundations | 704 | `shelahs-baire-property-model-and-inner-model-lower-bounds` |
| 3 | `banach-space-differential-calculus-and-banach-manifolds` | A | functional-analysis | 288.0761 | `normed-and-banach-spaces`, `bounded-linear-operators-and-quotient-spaces`, `compact-operators-and-riesz-schauder-theory`, `completeness-and-uniform-continuity` |
| 3 | `banach-space-differential-calculus-and-banach-manifolds-examples` | B | functional-analysis | 288.0762 | `banach-space-differential-calculus-and-banach-manifolds` |
| 3 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | A | functional-analysis | 288.077 | `compact-operators-and-riesz-schauder-theory`, `square-integrable-kernels-and-hilbert-schmidt-compactness`, `the-spectral-theorem-and-singular-value-decomposition` |
| 3 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | B | functional-analysis | 288.078 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `choice-strength-in-baire-urysohn-stone-and-tychonoff` — Choice Strength in Baire, Urysohn, Stone, and Tychonoff (41 item(s))

- `def-dependent-multiple-choice-finite-level-tree` · definition — Dependent multiple choice in finite-level tree form
- `thm-dmc-tree-and-successor-menu-formulations` · theorem — The tree and successor-menu formulations of DMC are equivalent
- `lem-nonempty-countable-set-has-a-padded-enumeration` · lemma — A nonempty countable set has a padded enumeration in ZF
- `thm-separable-complete-metric-baire-in-zf` · theorem — Separable complete metric spaces are Baire in ZF
- `def-metacompact-space` · definition — Metacompactness: every open cover has a point-finite open refinement
- `thm-dmc-implies-compact-hausdorff-baire` · theorem — DMC makes every compact Hausdorff space Baire
- `thm-compact-hausdorff-baire-implies-dmc` · theorem — Compact Hausdorff Baire implies DMC
- `thm-compact-hausdorff-baire-iff-dmc` · theorem — Compact Hausdorff Baire is equivalent to DMC
- `thm-dc-iff-products-compact-hausdorff-are-baire` · theorem — DC is equivalent to Baireness of compact-Hausdorff products
- `thm-dmc-implies-urysohn-lemma` · theorem — DMC implies Urysohn's lemma
- `rem-dmc-versus-dc-over-zf-is-open` · remark — DMC versus DC over ZF remains open
- `def-brunner-ordered-lauchli-permutation-models` · definition — Brunner's ordered Läuchli permutation models
- `lem-brunner-choice-and-urysohn-obstructions` · lemma — Brunner's models satisfy the required choice and Urysohn obstructions
- `thm-extreme-amenability-yields-bpi-in-finite-support-models` · theorem — Extreme amenability yields BPI in finite-support permutation models
- `lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable` · lemma — Finite stabilizers in Aut(Q,<) are extremely amenable
- `lem-brunner-urysohn-obstruction-is-injectively-boundable` · lemma — The Läuchli Urysohn obstruction is injectively boundable
- `thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions` · theorem — Pincus transfer for BPI, Countable Choice, and injectively boundable conjunctions
- `thm-relative-consistency-countable-choice-without-urysohn` · theorem — Relative consistency of Countable Choice without Urysohn's lemma
- `thm-relative-consistency-bpi-without-urysohn` · theorem — Relative consistency of BPI without Urysohn's lemma
- `cor-brunner-models-also-refute-tietze-extension` · corollary — Brunner's endpoint obstruction also refutes bounded Tietze extension
- `def-good-tree-watson-symmetric-stone-model` · definition — The Good-Tree-Watson symmetric Stone model
- `lem-good-tree-watson-omega-sequence-closure` · lemma — The Good-Tree-Watson symmetric model is closed under omega-sequences from the full extension
- `lem-good-tree-watson-selector-obstruction` · lemma — The symmetric Stone model has no componentwise proper selector
- `thm-relative-consistency-dc-without-stone` · theorem — Relative consistency of DC with failure of Stone's theorem
- `def-corson-ordered-rational-permutation-model` · definition — Corson's ordered-rational permutation model
- `lem-corson-rational-metric-not-metacompact` · lemma — Corson's rational metric space is not metacompact
- `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable` · lemma — Aut(U_Q^<) is extremely amenable
- `lem-corson-stone-obstruction-is-ordinal-boundable` · lemma — Corson's Stone obstruction is ordinal boundable
- `thm-relative-consistency-bpi-without-stone` · theorem — Relative consistency of BPI with failure of Stone's theorem
- `thm-effective-metacompact-discrete-metrics-implies-ac` · theorem — Effective metacompactness for discrete metric spaces implies AC
- `thm-products-of-cofinite-spaces-compact-iff-bpi` · theorem — Products of cofinite spaces are compact exactly under BPI
- `lem-isolated-point-kelley-repair` · lemma — The isolated-point repair of Kelley's choice space
- `thm-compact-t1-product-theorem-iff-ac` · theorem — The compact T1 product theorem is equivalent to AC
- `thm-arbitrary-compact-product-theorem-iff-ac` · theorem — The arbitrary compact product theorem is equivalent to AC
- `cor-bpi-does-not-imply-dmc` · corollary — BPI does not imply DMC
- `cor-dmc-is-not-provable-in-zf` · corollary — DMC is not provable in ZF
- `rem-stone-exact-choice-strength-open-status` · remark — The exact choice strength of Stone's theorem remains open
- `rem-dmc-mc-ac-zfa-qualification` · remark — DMC, Multiple Choice, and AC qualifications
- `cor-zf-does-not-prove-urysohn-lemma` · corollary — ZF does not prove Urysohn's lemma
- `rem-urysohn-implies-dmc-open-status` · remark — The converse from Urysohn's lemma to DMC is open
- `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` · remark — Choice ledger for Baire, Urysohn, Stone, and Tychonoff

### `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples` — Choice Strength in Baire, Urysohn, Stone, and Tychonoff: Examples and Counterexamples (5 item(s))

- `ex-canonical-least-ball-selection-in-separable-baire-proof` · example — Canonical least-ball selection removes choice
- `ex-dmc-urysohn-finite-menu-intersection` · example — Finite-menu intersection in the DMC Urysohn construction
- `cex-kelley-cofinite-set-is-not-closed` · counterexample — Kelley's cofinite set is not closed
- `ex-isolated-point-repair-recovers-choice-function` · example — The isolated-point repair recovers a choice function
- `fs-bpi-proves-stone-for-metric-spaces` · false-statement — False: BPI proves Stone's theorem for metric spaces

### `normal-moore-spaces-pmea-and-consistency-strength` — Normal Moore Spaces, PMEA, and Consistency Strength (31 item(s))

- `def-moore-spaces-and-developments` · definition — Moore spaces and developments
- `def-normalized-families-and-collectionwise-normality` · definition — Normalized families and collectionwise normality
- `lem-metrizable-spaces-are-collectionwise-normal` · lemma — Metrizable spaces are collectionwise normal
- `thm-moore-spaces-are-subparacompact` · theorem — Moore spaces are subparacompact
- `lem-collectionwise-normal-moore-spaces-are-screenable` · lemma — Collectionwise normal Moore spaces are screenable
- `lem-sigma-cellular-base-yields-a-compatible-metric` · lemma — A sigma-cellular base yields a compatible metric
- `thm-normal-screenable-moore-spaces-are-metrizable` · theorem — Normal screenable Moore spaces are metrizable
- `thm-collectionwise-normal-moore-spaces-are-metrizable` · theorem — Collectionwise normal Moore spaces are metrizable
- `def-q-sets-and-heath-moore-space-interface` · definition — Q-sets and Bing's tangent-disk Moore-space interface
- `lem-solovay-almost-disjoint-extension-under-ma` · lemma — Martin's axiom extends families almost disjoint from a subfamily
- `lem-ma-produces-an-uncountable-q-set` · lemma — MA plus not-CH produces an uncountable Q-set
- `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` · theorem — Bing's Q-set space is a normal nonmetrizable Moore space
- `thm-ma-not-ch-normal-nonmetrizable-moore-space` · theorem — MA plus not-CH yields a normal nonmetrizable Moore space
- `thm-fleissner-normal-moore-space-construction` · theorem — Fleissner's construction of a normal nonmetrizable Moore space from level data
- `thm-ch-normal-nonmetrizable-moore-space` · theorem — CH yields a normal nonmetrizable Moore space
- `cor-v-equals-l-refutes-normal-moore-space-conjecture` · corollary — V=L refutes the normal Moore space conjecture
- `def-product-measure-extension-axioms-pmea-and-pmea-sigma` · definition — PMEA and PMEA-sigma
- `lem-pmea-three-quarter-separation-estimate` · lemma — The PMEA three-quarter separation estimate
- `thm-pmea-normal-low-character-spaces-are-collectionwise-normal` · theorem — PMEA makes normal low-character spaces collectionwise normal
- `thm-pmea-implies-normal-moore-space-conjecture` · theorem — PMEA implies the normal Moore space conjecture
- `thm-strongly-compact-relative-consistency-normal-moore` · theorem — A strongly compact cardinal gives the NMSC consistency upper bound
- `def-fleissner-hyp-covering-interface` · definition — Fleissner's HYP covering interface
- `lem-ladder-separation-from-hyp` · lemma — Ladder separation from HYP
- `def-dodd-jensen-covering-and-square-package` · definition — The Dodd-Jensen covering and square package
- `thm-dodd-jensen-covering-supplies-fleissner-hyp-data` · theorem — Dodd-Jensen covering supplies Fleissner HYP data
- `thm-no-inner-model-measurable-implies-fleissner-hyp` · theorem — No inner measurable implies Fleissner's HYP
- `thm-fleissner-hyp-normal-nonmetrizable-moore-space` · theorem — HYP produces a normal nonmetrizable Moore space
- `thm-normal-moore-implies-inner-model-measurable` · theorem — NMSC gives an inner model with a measurable cardinal
- `thm-formal-nmsc-consistency-lower-bound` · theorem — Formal consistency lower bound for NMSC
- `thm-normal-moore-consistency-strength-sandwich` · theorem — The consistency-strength sandwich for NMSC
- `rem-omega-one-strongly-compact-normal-moore-refinement` · remark — The omega-one-strongly compact refinement and open gap

### `normal-moore-spaces-pmea-and-consistency-strength-examples` — Normal Moore Spaces, PMEA, and Consistency Strength: Examples and Counterexamples (3 item(s))

- `ex-development-stars-form-a-countable-local-base` · example — Development stars form a countable local base
- `ex-pmea-three-quarter-event-calculation` · example — The three-quarter event calculation in the PMEA proof
- `fs-zfc-proves-normal-moore-space-conjecture` · false-statement — False: ZFC proves the normal Moore space conjecture

### `shelahs-baire-property-model-and-inner-model-lower-bounds` — Shelah's Baire-Property Model and Inner-Model Lower Bounds (29 item(s))

- `def-shelah-sweetness-model` · definition — Shelah sweetness models for forcing
- `lem-shelah-sweet-forcings-are-sigma-directed-ccc` · lemma — Sweet forcings are sigma-directed and ccc
- `lem-shelah-sweet-density-transfer-along-complete-suborders` · lemma — Sweet density transfers along complete suborders
- `thm-shelah-sweet-amalgamation-preserves-sweetness` · theorem — Shelah amalgamation preserves sweetness
- `def-shelah-universal-meagre-forcing` · definition — Shelah's universal-meagre forcing
- `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` · lemma — A universal-meagre generic absorbs old nowhere-dense sets
- `thm-shelah-universal-meagre-composition-preserves-sweetness` · theorem — Composition with universal-meagre forcing preserves sweetness
- `lem-shelah-continuous-unions-of-sweetness-models` · lemma — Continuous countable unions of sweetness models remain sweet
- `thm-shelah-sweet-partial-isomorphism-extension` · theorem — Sweet amalgamation extends partial Boolean isomorphisms
- `thm-shelah-ch-omega-one-sweet-construction` · theorem — Shelah's CH-length homogeneous sweet construction
- `lem-shelah-real-name-capture-and-coded-meagre-unions` · lemma — Real names are captured and coded meagre unions are absorbed
- `lem-shelah-homogeneous-truth-has-baire-representatives` · lemma — Strongly homogeneous truth has Baire representatives
- `def-shelah-hereditarily-ordinal-sequence-definable-model` · definition — The Shelah HOD(S) model and its real-ordinal presentation
- `lem-shelah-inner-model-is-closed-under-ambient-omega-sequences` · lemma — The Shelah inner model is closed under ambient omega-sequences
- `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` · theorem — The Shelah inner model satisfies ZF and Dependent Choice
- `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` · theorem — Every real set in the Shelah inner model has the Baire property
- `thm-baire-property-model-equiconsistent-with-zfc` · theorem — The exact equiconsistency of ZFC and the all-Baire-property model
- `def-boldface-sigma-one-three-measurability` · definition — Boldface Sigma-one-three measurability
- `def-rapid-and-raisonnier-filters` · definition — Rapid filters and the Raisonnier family
- `lem-raisonnier-family-is-a-sigma-one-three-filter` · lemma — The Raisonnier family is a Sigma-one-three filter
- `thm-rapid-filters-are-not-lebesgue-measurable` · theorem — Rapid filters are not Lebesgue measurable
- `lem-measurable-null-code-orders-bound-constructible-null-unions` · lemma — A measurable null-code order bounds the constructible null union
- `lem-uniform-null-g-delta-capture-functions` · lemma — Uniform null G-delta sets capture block functions
- `thm-raisonnier-filter-is-rapid-from-null-code-measurability` · theorem — Null-code measurability makes the Raisonnier filter rapid
- `lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one` · lemma — Failure of inaccessibility in L produces a real with correct omega-one
- `thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` · theorem — Sigma-one-three measurability makes omega-one inaccessible in L
- `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model` · theorem — All-real-set measurability yields an inaccessible inner model
- `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` · theorem — Exact equiconsistency of universal measurability and an inaccessible
- `thm-shelah-baire-model-separates-baire-property-from-measurability` · theorem — Shelah's model separates universal Baire property from universal measurability

### `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` — Shelah's Baire-Property Model and Inner-Model Lower Bounds: Examples and Counterexamples (5 item(s))

- `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` · example — A universal-meagre stage absorbs an old nowhere-dense tree
- `ex-raisonnier-first-difference-cover` · example — Cylinder covers generate the Frechet tails in the Raisonnier filter
- `ex-uniform-null-capture-on-a-block-function` · example — Uniform null capture for a constant block function
- `fs-the-baire-property-model-needs-an-inaccessible` · false-statement — False: the all-Baire-property model needs an inaccessible
- `ex-sweet-amalgam-over-a-common-complete-subalgebra` · example — Amalgamating two sweet models over a common complete subalgebra

### `banach-space-differential-calculus-and-banach-manifolds` — Banach-Space Differential Calculus and Banach Manifolds (18 item(s))

- `def-frechet-derivative-between-banach-spaces` · definition — Fréchet derivative between Banach spaces
- `lem-the-frechet-derivative-is-unique` · lemma — The Fréchet derivative is unique
- `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` · theorem — Chain sum product and composition rules for Banach derivatives
- `def-c-k-map-between-banach-spaces` · definition — C k map between Banach spaces
- `lem-banach-mean-value-estimate-on-a-convex-set` · lemma — Banach mean value estimate on a convex set
- `thm-inverse-function-theorem-for-banach-spaces` · theorem — Inverse function theorem for Banach spaces
- `thm-implicit-function-theorem-for-banach-spaces` · theorem — Implicit function theorem for Banach spaces
- `def-countable-base-banach-manifold-and-smooth-map` · definition — Countable base Banach manifold and smooth map
- `def-tangent-space-and-differential-on-a-banach-manifold` · definition — Tangent space and differential on a Banach manifold
- `lem-banach-manifold-differentials-are-chart-independent` · lemma — Banach manifold differentials are chart independent
- `def-split-banach-submanifold` · definition — Split Banach submanifold
- `thm-regular-value-theorem-for-banach-manifolds` · theorem — Regular value theorem for Banach manifolds
- `def-smooth-banach-vector-bundle-and-section` · definition — Smooth Banach vector bundle and section
- `thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold` · theorem — A transverse Banach bundle section has a split zero submanifold
- `def-fredholm-map-between-banach-manifolds` · definition — Fredholm map between Banach manifolds
- `lem-local-finite-dimensional-reduction-for-a-fredholm-map` · lemma — Local finite-dimensional reduction for a Fredholm map
- `prop-the-index-of-a-fredholm-map-is-locally-constant` · proposition — The index of a Fredholm map is locally constant
- `rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel` · remark — Surjectivity alone does not give a Banach submanifold without a split kernel

### `banach-space-differential-calculus-and-banach-manifolds-examples` — Banach-Space Differential Calculus and Banach Manifolds: Examples (5 item(s))

- `ex-the-derivative-of-a-bounded-bilinear-map` · example — The derivative of a bounded bilinear map
- `ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity` · example — The Banach inverse theorem for a small Lipschitz perturbation of the identity
- `ex-a-regular-level-set-in-a-banach-space` · example — A regular level set in a Banach space
- `ex-a-projection-with-finite-dimensional-kernel-is-fredholm` · example — A projection with finite-dimensional kernel is Fredholm
- `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold` · counterexample — A closed uncomplemented subspace is not a split Banach submanifold

### `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators (21 item(s))

- `lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form` · lemma — Norm of a self adjoint operator from its quadratic form
- `lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign` · lemma — Norm point of a compact self adjoint operator is an eigenvalue up to sign
- `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal` · lemma — Eigenspaces of a self adjoint operator are orthogonal
- `lem-orthogonal-complement-of-an-eigenspace-is-invariant` · lemma — Orthogonal complement of an eigenspace is invariant
- `thm-spectral-theorem-for-compact-self-adjoint-operators` · theorem — Spectral theorem for compact self adjoint operators
- `cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator` · corollary — Orthonormal eigenbasis for a compact self adjoint operator
- `lem-positive-square-root-of-a-compact-positive-operator` · lemma — Positive square root of a compact positive operator
- `def-absolute-value-and-singular-values-of-a-compact-operator` · definition — Absolute value and singular values of a compact operator
- `thm-singular-value-decomposition-for-compact-operators` · theorem — Singular value decomposition for compact operators
- `lem-singular-values-equal-approximation-numbers` · lemma — Singular values equal approximation numbers
- `cor-compact-operator-iff-approximation-numbers-tend-to-zero` · corollary — Compact operator iff approximation numbers tend to zero
- `cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators` · corollary — Finite rank operators are norm dense in compact Hilbert space operators
- `thm-hilbert-schmidt-operators-form-a-two-sided-ideal` · theorem — Hilbert Schmidt operators form a two sided ideal
- `def-trace-class-operator` · definition — Trace class operator
- `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` · theorem — Trace class iff product of two Hilbert Schmidt operators
- `lem-nuclear-series-characterizes-trace-norm` · lemma — Nuclear series characterizes trace norm
- `thm-trace-class-is-a-two-sided-banach-operator-ideal` · theorem — Trace class is a two sided Banach operator ideal
- `def-trace-of-a-trace-class-operator` · definition — Trace of a trace class operator
- `thm-trace-is-absolutely-convergent-and-basis-independent` · theorem — Trace is absolutely convergent and basis independent
- `thm-cyclicity-of-the-trace` · theorem — Cyclicity of the trace
- `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` · theorem — Trace of a positive operator is the sum of its eigenvalues

### `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators — Examples (8 item(s))

- `ex-diagonal-schatten-class-criteria-on-ell-two` · example — Diagonal Schatten class criteria on ell two
- `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent` · example — Volterra operator is Hilbert Schmidt and quasinilpotent
- `ex-rank-one-operator-adjoint-norm-and-trace` · example — Rank one operator adjoint norm and trace
- `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis` · example — Integral operator trace under a valid diagonal hypothesis
- `cex-compact-does-not-imply-hilbert-schmidt` · counterexample — Compact does not imply Hilbert Schmidt
- `cex-hilbert-schmidt-does-not-imply-trace-class` · counterexample — Hilbert Schmidt does not imply trace class
- `cex-trace-of-products-is-not-cyclic-without-summability` · counterexample — Trace of products is not cyclic without summability
- `rem-schatten-p-classes` · remark — Schatten p classes

## Your seams

Your pages depend on another group's:

- `banach-space-differential-calculus-and-banach-manifolds` requires `compact-operators-and-riesz-schauder-theory` (group c, batch 2)
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` requires `compact-operators-and-riesz-schauder-theory` (group c, batch 2)
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` requires `square-integrable-kernels-and-hilbert-schmidt-compactness` (group c, batch 2)

Another group's pages depend on yours:

- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (group a) requires your `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`
- `banach-algebras-spectrum-and-holomorphic-functional-calculus` (group b) requires your `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-remaining-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-remaining-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-remaining-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-remaining-27-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-remaining-27-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-remaining-27-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-remaining-27-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
