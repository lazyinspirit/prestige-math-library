# Frontier 30 — Step 8 adjudication, group g

## Outcome

Read all 38 owned items on the six batch-14 and batch-18 pages and opened the
published dependencies needed to test the rejection claims. All 19 exact
rejection tuples were adjudicated against their pre-edit guard hashes: 13 are
`confirmed_fatal`, 6 are `confirmed_nonfatal`, and none is a
`false_positive`.

The 13 fatal decisions licensed 13 owned-item repairs and one supporting
source-grounded published-dependency repair. No item associated only with a
nonfatal outcome was edited. There were no incoming alerts, outgoing
cross-group findings, or scope changes.

## Rejections and dispositions

| item | context SHA-256 | outcome | disposition |
|---|---|---|---|
| `def-property-star-for-a-finite-family` | `b6bfa6c45799ea9d56247c4c384cebd875d50db875685b1db67a0a119ad8029d` | `confirmed_fatal` | Outcome 2 used a real blockade lower bound without supplying a convention for real length thresholds in the judged context. The source-grounded repair to `def-blockade-length-and-width` permits real lower bounds, and this repair round makes that definition a direct dependency and states explicitly that the integral length is at least `ceil(k)`. The rejected frozen text is now stale and the item is a targeted rejudge candidate. |
| `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star` | `e9d4c57532822be2c73f35162a2e4e5583f02f88daf96af5413c996dbccf5837` | `confirmed_fatal` | Retitled the example as realizing the trigger configuration and made L2 state the family/property/free-graph hypotheses of the conditional implication. The conclusion no longer claims that the finite configuration itself establishes property `(*)`. |
| `ex-generic-and-exceptional-height-directions-on-a-torus` | `bad9276df0a022902425bfc0c3d54a28babca7e6de57f34d58c901affad3a0e8` | `confirmed_fatal` | Replaced the one-direction computation by a computation for every unit direction. Every nonvertical direction has four nondegenerate critical points; the two vertical directions have critical circles. This now proves the generic and exceptional claims in the title. |
| `ex-separating-equal-critical-values-by-bump-functions` | `47e457569ea1084fd5cb8e934e12c7c8cf8a68cac70c90d7611ff6526c44493b` | `confirmed_nonfatal` | The cited interface is existential, but the fixed-bump instance follows immediately after choosing supports in isolating critical neighbourhoods: compactness gives a positive gradient lower bound off those neighbourhoods, and sufficiently small coefficients preserve it. This is a local proof bridge, not a false example. No edit. |
| `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one` | `d0d8d78f089a6ae706c449312492f0cce0b7a3345dcaeee7f62350234f6a7d3f` | `confirmed_fatal` | Replaced the invalid pair `c_4'=4,d=58` by `c_4'=4,d=232=58c_4'` and narrowed the availability sentence to the parameter inequalities actually checked, leaving the separate graph-order hypothesis explicit. |
| `ex-the-lemma-three-five-parameter-choice-on-a-large-graph` | `e227491b0ab4f04a09560d54a19d695b86208cf1a5dda5c736d311795193f845` | `confirmed_fatal` | Made the numerical example conditional on the supplied existential constant happening to equal 1. It no longer presents `c_1=1` as a freely available source choice. |
| `ex-the-square-root-rescaling-in-lemma-four-four` | `d8bbfdc6807f7c8dab476575e52653b586732946d0a4c57bec29c01cec51fbac` | `confirmed_fatal` | Retitled and rewrote the item as a standalone numerical square-root identity. It no longer attributes the sample equality-case constants to the existential source theorem. |
| `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph` | `b52cc5cbcb694afb18e653e8ec19e84eec3234967077151b45e2cc6db6dcd6a5` | `confirmed_fatal` | Corrected L1 from a `y`-sparse blockade to the exact `x`-sparse-or-complete outcome stated by its dependency and used by step 3.1. |
| `lem-compact-morse-critical-points-have-uniform-hessian-gaps` | `c147f0a2159bb4f295469b2c1099dfb6aa5fdfc963eaeb761fbe5dbb5d082936` | `confirmed_fatal` | Replaced “smallest singular value” by the equivalent operator lower bound, which is meaningful vacuously on a zero vector space. Added explicit branches for an empty critical set and for dimension zero before taking finite minima. |
| `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives` | `d00832d533ab2a0d77a337b1b8f4377216521f3e857fffb3af95e0ae8570ec7c` | `confirmed_nonfatal` | Under failure of outcomes 2–4, the reader first closes the argument if outcome 1 holds and otherwise assumes its failure before applying L1. This is the immediate missing case split implicit in the proof, with no false statement or conclusion. No edit. |
| `lem-finitely-many-critical-values-can-be-separated-locally` | `1c160f2fafb7d3a63ea902396d3565ee66b61a1753c8fb3e2b40cfa3a91abfb5` | `confirmed_nonfatal` | Because the critical set is finite, the nested neighbourhoods can immediately be chosen with the outer `U_i` pairwise disjoint; then every other bump vanishes on `V_i`. This is a one-line neighbourhood-choice gap and the lemma remains true. No edit. |
| `lem-morse-functions-are-transverse-differentials` | `e9fdc1bad6f2b420c5bfbb76671c6a640a6b5e276641f8b27a002fa720975615` | `confirmed_nonfatal` | Step 4.1 omits the direct Morse-definition dependency, but the equivalence between “all critical points nondegenerate” and “Morse” is exactly the definition already fixed on the prerequisite page. This is an immediate citation bridge, not a false biconditional. No edit. |
| `lem-no-new-critical-points-under-a-compact-c1-small-perturbation` | `26424fa6912703b93836398beed2e15bdd26848399c4a33e37f0bc180d5d2efd` | `confirmed_nonfatal` | If the compact complement `K` is empty, the conclusion is vacuous and any positive `delta` works; otherwise the written minimum argument applies. The omitted empty branch is immediate and the statement is true. No edit. |
| `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes` | `74c3a7839dfc993953df5753876b104f26e9e1405ad52881a0a13d47ddc864c6` | `confirmed_fatal` | Removed the false claim `w >= x^8|G|`. Step 5.1 now uses exactly the established bound `w >= x^9|G|`, which is the bound needed for outcome 3. |
| `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem` | `b04a9b804b1a61362cc249c5b15451558381ed891b75dd06d236bd0199e0f528` | `confirmed_fatal` | Step 4.3 now sets `j=ceil(k)`, observes that the integral actual length is at least `j`, weakens the width to `|G|/j^d`, and assigns the result to outcome 2 or 4 according as `j<x^{-1}` or `j>=x^{-1}`. |
| `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set` | `69c4d6f9c3c698dfd845a5540fc46e77c88bac66584327b3ed071385c96c24b8` | `confirmed_nonfatal` | Leaf reducibility supplies an `H` in the nonempty family. Choosing its complement in `overline(F)` makes an `overline(F)`-free graph free of that fixed graph, so the single-graph Rödl corollary applies. This is an immediate omitted choice. No edit. |
| `prop-proper-morse-exhaustions-exist-on-smooth-manifolds` | `15913e26b5ba698791e351221b448bf56ea762903a1228b11aa08b3d47e0ffa0` | `confirmed_fatal` | Removed the unsupported shell-decomposition assumption. The proof now chooses a Morse perturbation in the explicit strong neighbourhood `|g-h|<1/4` of a proper exhaustion and proves properness directly from compact sublevels of `h`. |
| `thm-morse-functions-are-dense-by-relative-jet-transversality` | `c3fe7f1edb216bf2696c0a76ca987d8d1ad8d93ae4d17a87517a300a29bbcd24` | `confirmed_fatal` | Rebuilt the induction around the compact nontransverse locus in each exhaustion set. That locus is separated from both the protected closed neighbourhood and the preceding compact set; fibre-spanning bumps are used only there, while openness preserves transversality on the compact remainder. |
| `thm-property-star-and-leaf-reducibility-imply-generalized-niceness` | `dc7cba6e40bcdbe6de5009f3b0c688c2a97d37e6245035b0792e01187f4ce88e` | `confirmed_fatal` | Restored the exact range `x in (0,2^{-d})` in L1. The later substitution satisfies that range, so the proof now cites the four-outcome dependency faithfully. |

The exact rows, including the required tuple fields and pre-edit guard hashes,
are appended to `research/frontier-30-judge-adjudications.jsonl`. Their prepared
input is `research/frontier-30-alpha-g-step8-adjudication-rows.json`.

## Fatal-defect and published-repair evidence

The matching defect rows are `frontier-30-A8-g-001` through
`frontier-30-A8-g-013`, appended through `tools/defect-ledger.mjs append` from
`research/frontier-30-alpha-g-step8-defect-rows.json`. The append also refreshed
the generated defect-ledger view.

The published repair to `def-blockade-length-and-width` is recorded through
`tools/published-repairs.mjs append` from
`research/frontier-30-alpha-g-step8-published-repair-row.json`, with exact
pre/post guard hashes. Its former generated judge stamp was removed because the
definition changed materially; the retained audit record still satisfies the
published-item evidence contract pending the targeted current verdict.

The subsequent repair round changed `def-property-star-for-a-finite-family`
itself by declaring that repaired definition directly and spelling out the
ceiling convention in outcome 2. No new adjudication or defect-ledger row was
appended: this is closure work for the already-recorded exact fatal tuple.

## Sources consulted

- Shenwei Huang, Yiao Ju, and Yidong Zhou, *Erdős-Hajnal beyond the
  five-vertex path*, original paper:
  <https://arxiv.org/html/2606.06258v2>. Section 2 defines an
  `(ell,w)`-blockade by the actual integer length being at least `ell`, while
  Sections 1, 3, and 4 use real thresholds such as `epsilon^{-1}`; this supports
  the published-definition repair. Lemma 3.4 supplies `c_1` existentially,
  Lemma 4.4 requires `d>=58c_4`, and Lemmas 4.2–4.4 give the exact `x`/`y`
  sparse alternatives and parameter ranges used in the repaired citations and
  examples.
- Marco Gualtieri, *Topology I: Smooth Manifolds, Part 10*, official course
  notes:
  <https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf>.
  The relative transversality extension proof uses a cutoff that vanishes near
  the already-transverse protected region; this supports the repaired
  separation between the protected set and the perturbation supports.
- Marco Gualtieri, *Topology I: Smooth Manifolds, Part 11*, official course
  notes:
  <https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf>.
  Lemma 3.46 constructs countable locally finite coordinate refinements in
  compact shells, supporting the locally finite exhaustion construction in the
  relative perturbation proof.
- Pedro Frejlich, *Morse Theory*, Lecture Two, official Utrecht course notes:
  <https://www.projects.science.uu.nl/poisson/MorseTheoryCourse-LectureNotes>.
  The notes state that proper maps form an open subset in the strong topology.
  The repaired proper-Morse proposition uses the explicit subneighbourhood
  `|g-h|<1/4` and independently verifies properness by sublevel containment.

The zero-dimensional Hessian repair and the full torus direction computation
were checked directly from the displayed definitions and formulas; no external
claim is needed for either calculation.

## Alerts

There were no incoming alerts. No defect in another run group was discovered,
so no row was written to `research/frontier-30-step8-cross-group.jsonl` and no
alert disposition was owed.

## Rejudge targets

The current context-hash computation shows that the pair interfaces changed on
all three owned A/B pairs. Consequently every one of the 38 group-g items now
has a stale frozen context and is a rejudge target:

- `from-generalized-niceness-to-erdos-hajnal` pair:
  `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`,
  `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`,
  `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`,
  `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`,
  `ex-a-complete-four-blockade-gives-a-four-vertex-clique`, and
  `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set`.
- `property-star-and-comb-outcomes` pair:
  `def-property-star-for-a-finite-family`,
  `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`,
  `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome`,
  `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`,
  `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives`,
  `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`,
  `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade`,
  `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`,
  `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star`,
  `ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade`,
  `ex-the-square-root-rescaling-in-lemma-four-four`, and
  `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one`.
- `morse-functions-critical-values-and-genericity` pair:
  `lem-morse-functions-are-transverse-differentials`,
  `thm-morse-functions-are-dense-by-relative-jet-transversality`,
  `thm-morse-functions-form-a-residual-subset`,
  `lem-compact-morse-critical-points-have-uniform-hessian-gaps`,
  `lem-no-new-critical-points-under-a-compact-c1-small-perturbation`,
  `thm-morse-functions-are-open-dense-on-a-compact-manifold`,
  `lem-finitely-many-critical-values-can-be-separated-locally`,
  `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`,
  `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse`,
  `thm-generic-squared-distance-functions-are-morse`,
  `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`,
  `lem-properness-survives-a-controlled-locally-finite-perturbation`,
  `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`,
  `rem-noncompact-morse-genericity-is-not-an-open-dense-claim`,
  `rem-morse-does-not-mean-distinct-critical-values`,
  `ex-generic-and-exceptional-height-directions-on-a-torus`,
  `ex-squared-distance-to-a-circle-and-its-medial-axis`,
  `ex-separating-equal-critical-values-by-bump-functions`,
  `cex-morse-functions-need-not-have-distinct-critical-values`, and
  `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity`.

The repaired published item `def-blockade-length-and-width` separately requires
the targeted current verdict prescribed by the published-repair path. No judge
cycle was initiated by this dispatch; the engine owns that routing.

After the direct dependency and ceiling convention were added,
`def-property-star-for-a-finite-family` has current judge context
`7ddda0d032fe4e8c323f1187499ec6069313381c48276091ee986ce0fceb76ec`,
different from the rejected context recorded above. It therefore also awaits
the engine's targeted rejudgment.

## Checks

- Focused `precheck`: 12 repaired proof-bearing owned items checked, 0 failing.
- Focused `rendercheck`: all 13 repaired owned items plus the published
  dependency passed YAML, wikilink, delimiter, and KaTeX parsing.
- Scoped `content-policy`: 38 batch-14/batch-18 items, 0 errors and 0 warnings.
- Strict proof contracts: batch 14 checked 17/17 proof-bearing items; batch 18
  checked 18/18, both with 0 errors and 0 warnings. Seven affected batch-18
  entries were mechanically regenerated, and their retained risk/boundary
  records were synchronized to the repairs.
- Citation fidelity: batch 14 checked 46 citations over 17 items and batch 18
  checked 51 citations over 18 items; neither run found a missing quote or a
  widening candidate.
- Repository dependency check: exited successfully with no cycles, unresolved
  references, or draft item on a published page; it retained 433 pre-existing
  repository warnings.
- Defect-ledger structural validation: 497 current Frontier-30 rows checked, 0
  errors. The closure-backed check still sees this item's pre-rejudge
  `open_fatal` record, as expected; the closure file was not rewritten by this
  dispatch.
- Exact group join: 19 rejections, 19 unique exact answers, no missing or
  duplicate tuple; outcomes are 13 fatal and 6 nonfatal.
- Required Step-8 scope check: passed with 7 groups, 694 partitioned items, 0
  open rejection rows routed, and 0 cross-group alerts.
- Required Step-8 guard: run against the `pre-step8` baseline. At check time it
  found 176 whole-run changes and licensed all 176 through an exact
  `confirmed_fatal` adjudication, owner-prerequisite repair, or terminal
  resolution. The whole-run guard passed.

## Blockers

No group-g mathematical, ownership, alert, contract, ledger, or focused-check
blocker remains. Targeted rejudgment, closure refresh, and stage transition
remain engine-owned.
