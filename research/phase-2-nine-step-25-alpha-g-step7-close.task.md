# Step 7 adjudication — group **g**, run `phase-2-nine-step-25`

You are the group Alpha for batches **14**, **15**, **16**: 5 A/B pair(s), 10 page(s), 215 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-g-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `arithmetization-incompleteness-and-relative-consistency` | A | foundations | 659 | `deduction-soundness-completeness-and-compactness`, `the-arithmetical-hierarchy-and-posts-theorem` |
| 14 | `arithmetization-incompleteness-and-relative-consistency-examples` | B | foundations | 660 | `arithmetization-incompleteness-and-relative-consistency` |
| 14 | `reflection-absoluteness-and-elementary-submodels` | A | foundations | 663 | `deduction-soundness-completeness-and-compactness`, `well-founded-relations-rank-and-the-cumulative-hierarchy` |
| 14 | `reflection-absoluteness-and-elementary-submodels-examples` | B | foundations | 664 | `reflection-absoluteness-and-elementary-submodels` |
| 15 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` | A | foundations | 667 | `deduction-soundness-completeness-and-compactness`, `compactness` |
| 15 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem-examples` | B | foundations | 668 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` |
| 15 | `pcf-scales-and-zfc-dowker-spaces` | A | foundations | 713 | `club-stationary-sets-and-pressing-down`, `partitions-of-unity-and-paracompactness`, `deduction-soundness-completeness-and-compactness`, `well-founded-relations-rank-and-the-cumulative-hierarchy`, `countability-axioms-and-cardinal-functions`, `set-theoretic-trees-delta-systems-and-diamond`, `complete-metrizability-and-baire` |
| 15 | `pcf-scales-and-zfc-dowker-spaces-examples` | B | foundations | 714 | `pcf-scales-and-zfc-dowker-spaces` |
| 16 | `borel-analytic-sets-perfect-sets-and-determinacy` | A | foundations | 673 | `well-founded-relations-rank-and-the-cumulative-hierarchy`, `complete-metrizability-and-baire`, `lebesgue-measure-on-euclidean-space`, `non-measurable-sets-and-the-cost-of-choice`, `measurable-functions-and-simple-approximation` |
| 16 | `borel-analytic-sets-perfect-sets-and-determinacy-examples` | B | foundations | 674 | `borel-analytic-sets-perfect-sets-and-determinacy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `arithmetization-incompleteness-and-relative-consistency` — Arithmetization, Incompleteness, and Relative Consistency (28 item(s))

- `def-robinson-q-and-peano-arithmetic` · definition — Robinson arithmetic, PA, and numeral conventions
- `def-effective-theory-and-certified-godel-numbering` · definition — Effective theories and certified numerical proof codes
- `lem-certified-syntax-coding-operations-are-primitive-recursive` · lemma — Primitive-recursive sentinel coding for certified syntax
- `lem-q-numeral-calculation-and-bounded-cases` · lemma — Q calculates numerals and finite bounded cases
- `lem-godel-beta-coding-and-q-remainder` · lemma — Beta coding and arithmetic sequence witnesses
- `def-numeralwise-representability-and-arithmetic-sigma-one` · definition — Numeralwise representation and arithmetic complexity
- `thm-primitive-recursive-numeralwise-representability` · theorem — Primitive-recursive functions are representable in Q
- `lem-primitive-recursive-syntax-and-proof-checking` · lemma — Primitive-recursive syntax and certified proof checking
- `def-effective-interpretation-and-proof-translation` · definition — Interpretations with proof-translation data
- `lem-interpretation-translates-finite-derivations` · lemma — Interpretation transports derivations and inconsistency
- `def-arithmetic-provability-and-consistency` · definition — The standard certified provability predicate
- `thm-arithmetic-diagonal-lemma` · theorem — The syntactic diagonal lemma
- `thm-first-incompleteness-with-explicit-soundness` · theorem — Gödel sentence with separated consistency assumptions
- `thm-rosser-incompleteness-for-effective-theories` · theorem — Rosser incompleteness from consistency
- `lem-pa-uniform-bounded-truth-proof-certificates` · lemma — PA verifies proof certificates for bounded arithmetic truth
- `thm-hilbert-bernays-lob-derivability-conditions` · theorem — Derivability conditions for the chosen proof predicate
- `thm-lob-from-derivability-conditions` · theorem — Löb theorem
- `thm-second-incompleteness-for-standard-provability` · theorem — Second incompleteness for standard provability
- `thm-tarski-arithmetic-truth-undefinability` · theorem — Arithmetic truth is not arithmetically definable
- `thm-explicit-definitions-give-conservative-extensions` · theorem — Explicit definitions are conservative
- `lem-zf-arithmetic-interpretation-and-effective-axioms` · lemma — ZF has an effective standard arithmetic interpretation
- `thm-model-existence-versus-syntactic-consistency` · theorem — Models and consistency for countable theories
- `def-countable-transitive-model-and-fragment-transfer` · definition — Transitive models and finite-fragment transfer data
- `lem-transitive-zf-models-have-correct-proof-codes` · lemma — Transitive ZF models have standard arithmetic and proof codes
- `thm-consistency-does-not-supply-a-transitive-zfc-model` · theorem — The transitive-model consistency-strength gap
- `thm-finite-fragment-relative-consistency-transfer` · theorem — Finite-fragment model transfer proves relative consistency
- `thm-formal-relative-consistency-from-verified-proof-reduction` · theorem — Formal consistency transfer from a verified reduction
- `rem-semantic-ctm-versus-formal-relative-consistency` · remark — Two distinct outputs of a consistency construction

### `arithmetization-incompleteness-and-relative-consistency-examples` — Arithmetization, Incompleteness, and Relative Consistency: Examples and Counterexamples (5 item(s))

- `ex-godel-diagonal-substitution-calculation` · example — A diagonal substitution worked symbolically
- `ex-consistent-theory-with-an-internal-false-proof` · example — A consistent theory can believe it has a proof of contradiction
- `ex-explicit-function-definition-is-conservative` · example — A uniquely defined function adds no old-language theorems
- `fs-con-zfc-implies-a-transitive-model-of-zfc` · false-statement — Consistency does not justify a transitive ZFC model
- `ex-finite-proof-support-in-relative-consistency` · example — A hypothetical refutation selects one finite target fragment

### `reflection-absoluteness-and-elementary-submodels` — Reflection, Absoluteness, and Elementary Submodels (18 item(s))

- `def-set-theoretic-levy-hierarchy-and-absoluteness` · definition — The Lévy hierarchy and absoluteness
- `thm-delta-zero-absoluteness-for-transitive-sets` · theorem — Bounded formulas are absolute for transitive sets
- `lem-bounded-definitions-of-basic-set-operations` · lemma — Absolute basic set operations and relations
- `thm-ordinals-and-omega-are-absolute-in-transitive-models` · theorem — Ordinals and omega in transitive models
- `thm-rank-and-hierarchy-membership-absoluteness` · theorem — Ranks agree and hierarchy membership is absolute
- `lem-levy-sigma-one-existential-normal-form` · lemma — Sigma-one formulas admit existential bounded matrices
- `thm-sigma-one-upward-and-pi-one-downward-absoluteness` · theorem — Sigma-one truth goes upward
- `lem-finite-formula-witness-criterion` · lemma — A finite witness criterion for reflection
- `lem-finite-formula-witness-rank-bounds` · lemma — Least witness ranks give choice-free bounds
- `thm-montague-levy-finite-reflection` · theorem — Montague–Lévy reflection for a finite formula family
- `cor-transitive-models-of-each-finite-zf-fragment` · corollary — Transitive models of fixed finite axiom fragments
- `thm-collapse-of-elementary-membership-submodels` · theorem — Collapse of elementary membership submodels
- `lem-collapse-fixes-transitive-parts-and-orders-ordinals` · lemma — What the collapse fixes
- `thm-countable-elementary-submodels-and-transitive-collapses` · theorem — Countable elementary submodels and their collapses
- `cor-countable-transitive-models-of-fixed-zfc-fragments` · corollary — Countable transitive models of fixed finite fragments
- `cor-elementary-membership-chains-and-collapse-compatibility` · corollary — Elementary chains and compatible collapses
- `rem-condensation-requires-additional-constructible-structure` · remark — Condensation interface
- `rem-shoenfield-absoluteness-scope-orientation` · remark — Shoenfield orientation and hierarchy conventions

### `reflection-absoluteness-and-elementary-submodels-examples` — Reflection, Absoluteness, and Elementary Submodels: Examples and Counterexamples (5 item(s))

- `ex-bounded-set-formulas-and-witness-direction` · example — Bounded formulas and the direction of absoluteness
- `ex-internal-power-set-can-miss-an-external-subset` · example — Power sets need not agree across transitive models
- `ex-reflection-of-two-formulas-with-parameters` · example — Reflecting a finite family with parameters
- `fs-a-countable-elementary-submodel-is-a-transitive-subset` · false-statement — A countable elementary submodel need not be transitive
- `ex-collapse-chain-maps-need-not-be-inclusions` · example — Transporting an elementary-chain map through collapse

### `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` — Boolean Algebras, Stone Duality, and the Prime Ideal Theorem (27 item(s))

- `def-boolean-algebra-for-stone-duality` · definition — Boolean algebras and their order
- `def-boolean-ideals-filters-and-primality` · definition — Boolean ideals, filters, prime ideals and ultrafilters
- `def-boolean-homomorphism-and-quotient` · definition — Boolean homomorphisms and quotient relation
- `lem-boolean-quotient-congruence` · lemma — Quotient operations are well defined
- `lem-generated-boolean-filter-and-ultrafilter-tests` · lemma — Generated filters and the complementary-pair tests
- `lem-finite-boolean-algebras-are-powersets-of-atoms` · lemma — Finite Boolean algebras are powersets of their atoms
- `def-boolean-prime-ideal-principle` · definition — The Boolean prime ideal principle
- `thm-bpi-equivalent-to-boolean-filter-extension` · theorem — BPI is equivalent to extending proper Boolean filters
- `thm-bpi-equivalent-to-set-ultrafilter-lemma` · theorem — BPI and the set ultrafilter lemma are equivalent
- `thm-choice-implies-boolean-prime-ideal-principle` · theorem — AC implies BPI
- `def-stone-ultrafilter-space-and-clopens` · definition — Stone ultrafilter space and its clopen basis
- `thm-stone-clopen-representation-under-bpi` · theorem — Stone clopen representation under BPI
- `thm-stone-space-recovered-from-its-clopens` · theorem — A Stone space is recovered from its clopens
- `thm-stone-duality-by-inverse-image` · theorem — Stone duality and its natural maps
- `thm-bpi-equivalent-to-propositional-compactness` · theorem — BPI is equivalent to arbitrary-set propositional compactness
- `lem-set-sized-parallel-henkinization-preserves-consistency` · lemma — Parallel Henkinization for arbitrary set languages
- `thm-bpi-equivalent-to-arbitrary-language-compactness` · theorem — BPI and arbitrary-language first-order compactness
- `thm-bpi-equivalent-to-compact-hausdorff-tychonoff` · theorem — Compact Hausdorff Tychonoff is equivalent to BPI
- `def-complete-boolean-algebra-and-regular-open-sets` · definition — Completeness, regular opens, and order continuity
- `thm-regular-open-sets-form-a-complete-boolean-algebra` · theorem — Regular open algebra in ZF
- `thm-stone-regular-open-boolean-completion` · theorem — The regular open completion of a Boolean algebra
- `thm-stone-completeness-iff-extremal-disconnectedness` · theorem — Completeness, extremal disconnectedness, and regular-open clopens
- `thm-order-continuous-homomorphisms-extend-to-boolean-completions` · theorem — Order-continuous Boolean homomorphisms extend uniquely to completions
- `def-forcing-preorder-compatibility-and-filter` · definition — Forcing preorders, compatibility and filters
- `lem-separative-quotient-of-a-forcing-preorder` · lemma — Separative quotient and compatibility
- `thm-forcing-preorders-have-regular-open-completions` · theorem — Choice-free regular open completion of forcing preorders
- `rem-bpi-choice-boundary-and-forcing-conventions` · remark — Choice and forcing boundary

### `boolean-algebras-stone-duality-and-the-prime-ideal-theorem-examples` — Boolean Algebras, Stone Duality, and the Prime Ideal Theorem: Examples and Counterexamples (3 item(s))

- `ex-finite-powerset-stone-space` · example — The Stone space of a finite powerset algebra
- `ex-finite-boolean-quotient-and-dual-map` · example — A finite quotient and its dual inclusion
- `ex-finite-forcing-filter-versus-boolean-filter` · example — Forcing filters versus Boolean filters

### `pcf-scales-and-zfc-dowker-spaces` — PCF Scales and ZFC Dowker Spaces (60 item(s))

- `def-countable-paracompactness-and-dowker-space` · definition — Countable paracompactness and Dowker spaces
- `thm-countable-paracompactness-shrinking-criterion` · theorem — Increasing-cover and decreasing-closed-set criteria
- `thm-dowker-product-characterization` · theorem — Dowker product characterization
- `def-reduced-ordinal-products-and-scales` · definition — Reduced products, true cofinality and scales
- `lem-progressive-products-and-true-cofinality-transfers` · lemma — Progressive products and true cofinality transfers
- `lem-pcf-cofinality-ideals-and-cutoff-conventions` · lemma — Pcf cofinality ideals and cutoff conventions
- `def-strong-increase-and-bounding-projections-for-countable-products` · definition — Strong increase and bounding projections in countable ordinal products
- `lem-strong-increase-gives-bounding-projections` · lemma — Strongly increasing subsequences force a bounding projection
- `lem-bounding-projections-give-exact-upper-bounds` · lemma — Bounding projections produce an exact upper bound with large coordinate cofinalities
- `lem-uncountable-club-guessing-at-a-double-successor` · lemma — Club guessing at the double successor of an uncountable regular cardinal
- `lem-club-continuity-produces-strongly-increasing-subsequences` · lemma — Club continuity produces strongly increasing subsequences
- `lem-directed-progressive-products-have-club-continuous-chains` · lemma — Directed progressive products have club continuous chains
- `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs` · theorem — Pcf ideal directedness and ultrafilter cofinality cutoffs
- `thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals` · theorem — Progressive pcf has a maximum and continuous cutoff ideals
- `thm-progressive-pcf-has-universally-cofinal-sequences` · theorem — Progressive pcf has universally cofinal sequences
- `lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds` · lemma — Universal pcf sequences have strong increase and exact bounds
- `thm-pcf-cofinality-ideals-have-single-generators` · theorem — Pcf cofinality ideals have single generators
- `thm-pcf-generators-restrict-finitely-cover-and-carry-scales` · theorem — Pcf generators restrict finitely cover and carry scales
- `thm-pcf-has-no-holes-for-progressive-intervals` · theorem — Pcf has no holes for progressive intervals
- `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain` · lemma — A long chain with club continuity below aleph omega
- `thm-pcf-aleph-omega-plus-one-scale` · theorem — An aleph omega plus one scale on an infinite set of successor alephs
- `lem-normalizing-a-scale-at-existing-least-upper-bounds` · lemma — Normalizing a scale at existing least upper bounds
- `lem-scale-tail-suprema-have-prescribed-cofinality` · lemma — Tail suprema and normalized scales
- `def-rudin-ordinal-box-space` · definition — Rudin ordinal box spaces on infinite index sets
- `def-rudin-ambient-ordinal-box-space` · definition — The ambient Rudin box space
- `lem-rudin-box-space-basic-neighborhoods-and-p-space` · lemma — Clopen boxes and the P-space property
- `lem-rudin-disjoint-box-refinement` · lemma — Disjoint box refinements in the ambient Rudin space
- `lem-rudin-bounded-cofinality-hull-transfer` · lemma — Elementary hull transfer for bounded cofinality strata
- `lem-rudin-discrete-families-have-discrete-ambient-closures` · lemma — Discrete Rudin families have discrete ambient closures
- `thm-rudin-box-space-is-collectionwise-normal` · theorem — Rudin spaces are collectionwise normal
- `lem-rudin-internal-hull-tail-domination` · lemma — Internally increasing hulls dominate countable tail bounds
- `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` · lemma — Neighborhoods of Rudin initial-top slices contain tails
- `thm-rudin-tail-neighborhood-obstruction` · theorem — Rudin shrinking obstruction
- `lem-cofinal-aleph-product-cardinality` · lemma — A cofinal aleph-subproduct has the cardinality of the aleph-omega product
- `thm-rudin-dowker-space-and-cardinality` · theorem — Rudin ZFC Dowker space and its size
- `def-kojman-shelah-scale-subspace` · definition — Kojman-Shelah scale subspace
- `lem-kojman-shelah-tail-supremum-closure` · lemma — Tail suprema land in the scale subspace
- `lem-kojman-shelah-subspace-is-closed` · lemma — The scale subspace is closed
- `lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size` · lemma — Cofinality and size of the scale subspace
- `thm-kojman-shelah-space-weight-and-character` · theorem — Weight and character of the Kojman-Shelah scale subspace
- `thm-kojman-shelah-zfc-dowker-space` · theorem — A ZFC Dowker space of size aleph_(omega+1)
- `def-balogh-finite-restriction-data` · definition — Balogh finite restriction data
- `lem-balogh-countable-restriction-enumeration` · lemma — Balogh countable restriction enumeration
- `lem-balogh-combinatorial-map` · lemma — Balogh combinatorial map
- `def-balogh-continuum-topology` · definition — Balogh continuum topology
- `lem-balogh-neighborhood-basis` · lemma — Balogh neighborhood basis
- `lem-balogh-hereditary-normality` · lemma — Balogh hereditary normality
- `lem-balogh-failure-of-countable-shrinking` · lemma — Balogh failure of countable shrinking
- `thm-balogh-continuum-sized-zfc-dowker-space` · theorem — Balogh continuum sized zfc dowker space
- `def-small-dowker-luzin-stick-and-ad-principles` · definition — Small dowker luzin stick and ad principles
- `def-small-dowker-tight-strongly-unbounded-coloring` · definition — Small dowker tight strongly unbounded coloring
- `lem-small-dowker-ch-gives-luzin-set` · lemma — Small dowker ch gives luzin set
- `lem-small-dowker-luzin-gives-tight-coloring` · lemma — Small dowker luzin gives tight coloring
- `lem-small-dowker-coloring-gives-ad-guessing` · lemma — Small dowker coloring gives ad guessing
- `lem-small-dowker-stick-gives-ad-guessing` · lemma — Small dowker stick gives ad guessing
- `def-small-dowker-ladder-topology` · definition — Small dowker ladder topology
- `lem-small-dowker-ladder-normality` · lemma — Small dowker ladder normality
- `lem-small-dowker-ladder-shrinking-obstruction` · lemma — Small dowker ladder shrinking obstruction
- `thm-small-dowker-conditional-aleph-one-constructions` · theorem — Small dowker conditional aleph one constructions
- `rem-aleph-one-dowker-status-dated-audit` · remark — Dated aleph-one Dowker status

### `pcf-scales-and-zfc-dowker-spaces-examples` — PCF Scales and ZFC Dowker Spaces: Examples and Counterexamples (4 item(s))

- `ex-countable-shrinking-on-a-discrete-space` · example — A countable shrinking computed
- `ex-rudin-initial-top-slice` · example — A concrete Rudin slice
- `ex-kojman-shelah-scale-used-at-a-tail-supremum` · example — A scale used in the Dowker subspace
- `fs-normality-is-preserved-by-product-with-the-unit-interval` · false-statement — Normality need not survive product with the interval

### `borel-analytic-sets-perfect-sets-and-determinacy` — Borel and Analytic Sets, Perfect Sets, and Determinacy (60 item(s))

- `def-cantor-sequence-space-for-descriptive-set-theory` · definition — Cantor sequence space
- `def-trees-and-bodies-on-discrete-alphabets` · definition — Trees and their bodies
- `lem-closed-subsets-of-baire-space-are-tree-bodies` · lemma — Closed subsets of Baire space are tree bodies
- `def-analytic-and-coanalytic-by-closed-projection` · definition — Analytic and coanalytic sets by closed projection
- `def-synchronous-trees-and-projection-bodies` · definition — Synchronous trees and projection bodies
- `lem-analytic-subsets-of-baire-space-have-tree-projections` · lemma — Analytic subsets of Baire space have tree projections
- `def-gale-stewart-games-on-pruned-trees` · definition — Gale–Stewart games and strategies
- `def-axiom-of-determinacy-for-natural-number-games` · definition — Axiom of determinacy for natural-number games
- `def-game-trees-with-terminal-taboos` · definition — Game trees with terminal taboos
- `def-countable-borel-hierarchy` · definition — The countable Borel hierarchy and its limit convention
- `lem-metric-borel-hierarchy-monotonicity-and-operations` · lemma — Metric Borel hierarchy inclusions and fixed-rank operations
- `def-well-founded-borel-evaluation-codes` · definition — Well-founded Borel evaluation codes
- `lem-well-founded-borel-code-evaluation` · lemma — Existence and uniqueness of Borel-code evaluation
- `lem-cantor-and-baire-sequence-coding` · lemma — Cantor and Baire sequence spaces and coordinate codings
- `lem-countable-borel-hierarchy-exhaustion-and-pullbacks` · lemma — Borel hierarchy exhaustion and preservation by continuous pullback
- `thm-universal-borel-sets-and-strict-hierarchy` · theorem — Universal Borel sets and strictness on Cantor space
- `lem-terminal-reachability-and-residual-game-positions` · lemma — Terminal reachability and residual positions
- `lem-taboo-games-reduce-to-pruned-residual-games` · lemma — Taboo games reduce to pruned residual games
- `thm-gale-stewart-open-determinacy` · theorem — Open and closed Gale–Stewart games are determined
- `def-game-covering-and-k-covering` · definition — Game coverings, k-coverings and unraveling
- `lem-game-covering-transfers-winning-strategies` · lemma — Winning strategies descend through game coverings
- `lem-game-covering-composition-and-continuity` · lemma — Composition and continuity of game coverings
- `cor-unraveling-covers-give-determinacy` · corollary — Unraveling covers give determinacy
- `lem-stabilizing-game-coverings-have-inverse-limits` · lemma — Stabilizing systems of game coverings have inverse limits
- `lem-closed-payoffs-admit-unraveling-covers` · lemma — Closed and open payoffs admit unraveling covers
- `thm-borel-payoffs-admit-unraveling-covers` · theorem — Borel payoffs admit unraveling covers
- `thm-borel-games-are-determined` · theorem — Borel games are determined
- `lem-natural-number-game-strategies-have-continuum-many-plays` · lemma — Coding strategies and their compatible plays
- `thm-choice-produces-an-undetermined-natural-number-game` · theorem — Choice produces an undetermined natural-number game
- `thm-ad-implies-countable-choice-for-baire-space` · theorem — AD implies countable choice for subsets of Baire space
- `lem-perfect-set-game-strategy-dichotomy` · lemma — Perfect-set game strategy dichotomy on Cantor space
- `lem-polish-closed-products-and-baire-parametrization` · lemma — Closed subspaces, products, and Baire parametrization
- `lem-analytic-countable-operations-and-borel-inclusion` · lemma — Analytic countable operations and inclusion of Borel sets
- `thm-analytic-closed-projection-and-continuous-image-equivalence` · theorem — Equivalent analytic normal forms and Borel maps
- `thm-disjoint-analytic-sets-have-borel-separators` · theorem — Borel separation of disjoint analytic sets
- `cor-borel-iff-analytic-and-coanalytic` · corollary — Borel sets are exactly analytic and coanalytic sets
- `def-souslin-operation-on-set-schemes` · definition — The Souslin operation
- `thm-analytic-sets-are-souslin-operations-on-closed-sets` · theorem — Closed Souslin schemes characterize analytic sets
- `lem-uncountable-analytic-splitting` · lemma — Uncountable splitting in a second-countable metric space
- `thm-uncountable-analytic-sets-contain-cantor-copies` · theorem — Uncountable analytic sets contain compact Cantor copies
- `cor-uncountable-polish-borel-hierarchy-is-strict` · corollary — Strict Borel hierarchy in every uncountable Polish space
- `def-descriptive-tree-rank` · definition — The Polish space of trees and its well-founded rank
- `lem-countable-tree-ranks-and-rank-monotonicity` · lemma — Countable tree ranks and monotonicity under extension maps
- `thm-analytic-families-of-well-founded-trees-have-bounded-rank` · theorem — Analytic boundedness for well-founded trees
- `thm-ill-founded-trees-are-analytic-non-borel` · theorem — Ill-founded trees form an analytic non-Borel set
- `def-property-of-baire-for-subsets` · definition — The property of Baire
- `lem-baire-property-sigma-algebra-and-borel-regularity` · lemma — Baire property sigma-algebra and Borel regularity
- `lem-sequence-spaces-continuously-inject-into-the-real-line` · lemma — Continuous injections of sequence spaces into the real line
- `thm-souslin-operation-preserves-the-baire-property` · theorem — The Souslin operation preserves the Baire property
- `thm-souslin-operation-preserves-lebesgue-measurability` · theorem — The Souslin operation preserves Lebesgue measurability
- `def-banach-mazur-category-game` · definition — The Banach–Mazur category game on sequence spaces and the real line
- `lem-banach-mazur-game-category-characterization` · lemma — Category-game strategies characterize meagreness and local comeagreness
- `thm-ad-implies-baire-property` · theorem — AD implies the Baire property for subsets of sequence spaces and the real line
- `thm-choice-bernstein-set-pathology` · theorem — Choice gives a Bernstein set with no perfect-set, Baire or measure regularity
- `thm-choice-hamel-basis-pathology` · theorem — A Hamel coefficient has dense graph and a nonmeasurable kernel
- `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` · lemma — Dyadic coding supplies coin measure and its completed Lebesgue transfer
- `thm-ad-implies-perfect-set-property-for-sequence-spaces` · theorem — AD gives the perfect-set property in sequence spaces and the real line
- `def-rational-determinacy-measure-game` · definition — The rational measure game
- `lem-determinacy-measure-game-inner-outer-comparison` · lemma — Winning measure-game strategies bound inner and outer measure
- `thm-ad-and-dc-imply-lebesgue-measurability` · theorem — Under AD and DC every real set is Lebesgue measurable

### `borel-analytic-sets-perfect-sets-and-determinacy-examples` — Borel and Analytic Sets, Perfect Sets, and Determinacy: Examples and Counterexamples (5 item(s))

- `ex-empty-and-single-branch-tree-bodies` · example — Empty and single-branch tree codes
- `ex-first-move-clopen-game` · example — A clopen game decided by the first move
- `cex-taboo-winning-positions-need-not-contain-their-children` · counterexample — A winning taboo position can have a nonwinning child
- `fs-every-set-of-reals-is-borel` · false-statement — Every set of reals is Borel
- `ex-well-founded-borel-code-for-a-closed-basic-complement` · example — Evaluating elementary Borel codes

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — frozen integrity close, `phase-2-nine-step-25`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
