# Frontier 33 Step 8 adjudication — group h

## Scope read

I read all eight owned pages and all 127 owned items in batches 19 and 20, then opened every dependency used to decide the eleven exact rejections. The Step-7 context has no reader warning, and this adjudication found no cross-group defect. No new lemma was needed.

## Decisions

| item | context | pre-edit guard | outcome | defect type | disposition |
|---|---|---|---|---|---|
| `def-cofinality-strata-and-stationary-trace` | `282c6a1c6733abc28005c5aa289d772dcf11e8ea3d91f78de14fe7db99bf2498` | `c6f264f57723f403a0e551bc2d770d8644c2a2bae86d3b302f300d2e166921ae` | `confirmed_fatal` | `other` | The definition used an unbound ambient ordinal `kappa`. Bound it explicitly; post-edit guard `daa5fca7a128beed6e1ac69c026d3505588eba5abe30435b23e567b8988de202`. |
| `ex-finite-character-partial-choice-graphs` | `9a0a766d97502076d40fc0cde44bd7046801f938fedf080c63c9337263362ba1` | `67ce7659bbac854e3b43b503dd2b33a790009549833d7cbeb0a1ceff687b87d3` | `confirmed_nonfatal` | — | F1 summarizes a construction in the cited theorem's proof rather than its Statement, but verification steps 1.1 and 2.1 prove the example independently. No content change. |
| `ex-transfinite-subway-pressing-down` | `25e4cdaa5bae4f7af558f5bd03e1f6bcf990ad8c0a01d82caa43fd5944802863` | `dac22e2ac0fb60a714d673598568f88987d41923eb95011a0ed0e98d515913fd` | `confirmed_nonfatal` | — | Stationarity gives unboundedness, and an unbounded subset of regular `omega_1` has cardinality `aleph_1`; the omitted inference is immediate. No content change. |
| `lem-compatible-well-founded-recursion-attempts` | `f0395051ea8015801c48d34325357cdec400d185a1a5f8de4a4fbeb874e9760a` | `7feb170354cc5bdec911fbb410861ed37cf2d5722e078fe17be472a21c73d486` | `confirmed_fatal` | `dependency_citation` | Added `lem-finite-predecessor-closure-is-a-set` as F2 for the sethood, closure, and finite-path properties of `C(x)`; post-edit guard `02872a4d05b297393ba354a506a051269bb7c7121f1e5b706c6fa7d1a8954155`. |
| `prop-capture-avoiding-substitution` | `8383195f612101ff87bd7b5a05f96240ec41ce43d036fc0a26013a6b9a3909b2` | `cb0f6b0e4e65b1d04b1e4059bedbf4f7d74a0a5a8ed9ab2f247f93062953c7b3` | `confirmed_fatal` | `dependency_citation` | Added `lem-formula-substitution-satisfaction` as F2 and cited its semantic identity in step 3.1; post-edit guard `ded705c1db9785cc18673591b2caa76d5fd8ae178b5c887bac11874f1c2276cc`. |
| `prop-ranks-of-ordinals-and-hierarchy-stages` | `1a1a3bb574c454a52a6879b70104f8be40040bae4e99c579c08bfe874ff1fda7` | `df47b29b55e3b555eb3aff934039d6dd21c12a2d40e84e65a926294ae2910bf6` | `confirmed_fatal` | `dependency_citation` | Added `prop-cumulative-hierarchy-transitivity-and-growth` as F2 and replaced both undeclared rank-recursion arguments by direct shell-characterization arguments; post-edit guard `e0d3a0857ce86ef83db343eb75b91fc113adfdd754b9208823442b4cf570df3e`. |
| `thm-elementary-initial-segments-form-a-club` | `4a45ef6409dd424b420941e5002d3c55912ab4f4cf7f5d888d1304c8a81df9f8` | `b495eb49919b206fd66c4ab501b678c8b869ca8237007db168953e4deef6e464` | `confirmed_nonfatal` | — | The regular-bounding sentence is the immediate contrapositive of the cited cofinality lower bound; F1 supplies the required cardinal count. No content change. |
| `thm-mostowski-collapse-for-extensional-relations` | `7ab24ac335fd20b1c6da5af1812f62f55552fce2c350a8cddb7fe7fcbba3e4be` | `17c7d607083b0831383c0a19dd73a96edabe674488d669bc531d0674f81e4e85` | `confirmed_fatal` | `dependency_citation` | Added `def-extensional-relation-and-collapse-map` as F2 for existence, uniqueness, and the collapse equation; post-edit guard `0544997a01fc6f8678366dcff411cf85d31e7a522d28b66634d75889d88eefef`. |
| `thm-normal-function-fixed-points-form-a-club` | `bedd17fc0ddf25ac2d735083c91ab084505605cd574d756799a97d4d9d80cc61` | `85e8cb7d14ed925932db43f8e1aec48008d63bd039f80cae470890c36c64e7ff` | `confirmed_nonfatal` | — | Countable boundedness below regular uncountable `kappa` follows immediately from the cited cofinality theorem. No content change. |
| `thm-normality-and-positive-pressing-down` | `33e8e0502c52053ea2d4c31a3d2a38d9cbea96e84e353379ff01f7bb816c6a2a` | `29b7a409b5fba2a008d059cc5764a345ce975d29d936c854b097122dcdad3b28` | `confirmed_fatal` | `other` | Removed step 3.1, which applied the local definition of normality outside its regular-uncountable domain and was not needed for the stated theorem; post-edit guard `82bf11e0d69ec988244025940cd697008cb671b6e08c7050bb9b1c312530d9a8`. |
| `thm-tukey-finite-character-equivalent-to-choice` | `1d653a676da69294d9f1f0cb6f155965dfa8283a21f3e041ba19ffdf14680e01` | `ad62999a4b2ca5e97b9c9ff1ec68af8d4013c2fabd30987291a2304f5eb84a84` | `confirmed_nonfatal` | — | Once step 1.2 proves that `G` is nonempty and of finite character under the explicit Tukey assumption, applying Tukey to obtain a maximal member is immediate. No content change. |

The eleven exact tuples were appended to `research/frontier-33-judge-adjudications.jsonl`. The six fatal defects were appended as `frontier-33-A8-h-001` through `frontier-33-A8-h-006` in `research/defect-ledger.jsonl`.

## Sources and exact uses

- `items/lem-formula-substitution-satisfaction.md`, Statement: supplies the free-for semantic substitution equivalence used by `prop-capture-avoiding-substitution`.
- `items/lem-finite-predecessor-closure-is-a-set.md`, Statement: supplies the canonical cone's sethood, predecessor closure, minimality, and finite-path description.
- `items/prop-cumulative-hierarchy-transitivity-and-growth.md`, Statement: supplies `alpha` and `V_alpha` in the shell `V_(alpha+1) \ V_alpha`.
- `items/def-extensional-relation-and-collapse-map.md`, Definition: supplies existence, uniqueness, and the recursive equation for the collapse map.
- `items/thm-cofinality-basics.md`, Statement: supplies the cofinal-subset lower bound and regularity used to derive the three elementary boundedness/cardinality consequences classified nonfatal.
- `items/prop-basic-stationary-set-calculus.md`, Statement: supplies that stationary subsets of a regular uncountable cardinal are unbounded.
- `items/def-families-of-finite-character.md`, Definition, and `items/thm-tukey-finite-character-equivalent-to-choice.md`, proof: supply the exact Tukey principle and the partial-choice-graph construction.
- P. D. Welch, *Axiomatic Set Theory*, Definition 2.11 and Lemma 2.13, printed pp. 20–21, <https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf>: confirms the regular-uncountable normal-function convention and the omega-iteration proof that fixed points form a club.
- Kameryn J. Williams, *Math 655 Lecture Notes, Part 1.1*, Definitions 33–34, Proposition 35, Corollary 36, and Proposition 39, printed pp. 11–12, <https://juliakw.net/teaching/2019/math655/part1.1.pdf>: confirms diagonal normality, positive pressing down, completeness, and the separate deduction of regular uncountability for a tail-containing normal filter.
- Moshe Kamensky, *Set Theory*, Theorem 1.4.7, printed p. 7, <https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf>: confirms that elementary initial segments form a club and shows the regularity-bounding step in the construction.
- Andreas Lietz, *Set Theory Lecture Notes*, Definitions 5.12 and 5.15, printed p. 42, <https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf>: confirms that cofinality strata and trace definitions bind their ambient ordinals before use.

## Contract synchronization

Updated the owned batch contracts only:

- `research/frontier-33-batch-19.proof-contracts.json` now records the four new exact citations, their uses, revised derivations, and current risk reviews where applicable.
- `research/frontier-33-batch-20.proof-contracts.json` removes the deleted step 3.1 derivation and updates the current risk and boundary records.

No page, manifest, scope, impact, judge verdict, judge stamp, published item, or cross-group artifact was changed.

## Rejudge targets

- `def-cofinality-strata-and-stationary-trace`
- `lem-compatible-well-founded-recursion-attempts`
- `prop-capture-avoiding-substitution`
- `prop-ranks-of-ordinals-and-hierarchy-stages`
- `thm-mostowski-collapse-for-extensional-relations`
- `thm-normality-and-positive-pressing-down`

## Checks

- Focused precheck: five proof-bearing repaired items passed, zero failures; the repaired definition is not proof-bearing.
- Render check: all six repaired items passed YAML, link-in-math, delimiter, display, and KaTeX checks.
- Focused proof contracts: batch 19 passed 4/4 with zero errors or warnings; batch 20 passed 1/1 with zero errors or warnings.
- Citation fidelity over both owned batch contracts found all 217 quotes and no widening candidate; boundary audit found no contradicted or templated disposition; required risk review passed for all 41 batch-19 and 53 batch-20 routed items after adding the newly required review for the repaired Mostowski item.
- Defect-ledger append: six rows appended and the generated view refreshed.
- Defect-ledger global check passed after the concurrent appends completed: 625 frontier-33 rows checked, zero errors. Group h's six fatal decisions each own exactly one exact defect row.
- Step-8 scope check passed: eight groups, 923 partitioned items, 54 routed rejections, and 0/0 warning dispositions.
- Fatal-only guard was run against `pre-step8`. All six group-h changes are among its exact-hash licensed changes, and it reports no group-h error. The repository-wide command remains red on 20 unlicensed, out-of-group in-flight edits: `cor-classical-three-dimensional-stokes-theorem`, `cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries`, `cor-fundamental-theorem-of-calculus-from-stokes`, `cor-greens-theorem-from-general-stokes`, `cor-index-zero-handles-create-components`, `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero`, `def-attaching-a-smooth-handle-with-corner-rounding`, `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold`, `ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary`, `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group`, `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair`, `lem-coefficient-comparison-on-finite-cw-pairs`, `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage`, `lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary`, `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`, `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs`, `prop-general-stokes-agrees-with-classical-gauss-flux`, `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond`, `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement`, and `thm-oriented-chart-integrals-are-coordinate-independent`.
- Repository-wide dependency check was run. It remains red on the out-of-group published item `def-tensor-product-total-complex-of-chain-complexes`, whose status is `published` without `verification.audited` or `verification.verified`; the rest of its output consists of the repository's existing warnings.

## Alerts and blockers

There were no Step-7 reader warnings, incoming alerts, or cross-group findings. The remaining repository-wide blockers are the 20 out-of-group fatal-only-guard edits listed above and the out-of-group published-item audit flag reported by dependency check. Group h has no authority to repair or disposition any of them.
