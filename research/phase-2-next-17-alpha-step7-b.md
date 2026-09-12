# Step 7 adjudication — group b

Run: `phase-2-next-17`  
Batch: 2

This report is the durable item-by-item checkpoint for group b. The shared adjudication, reader-warning, and defect ledgers are authoritative for their structured rows.

## Completed adjudications

### `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain`

- Rejection: the natural-number-indexed sequence omitted `T_0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `0027f07f69748a2bbd874ac9bf737e45292d3d262366d9c97843ca30969f7cc1`.
- Repair: defined `T_0=0`, restricted the coordinate formula and norm calculation to `n>=1`, and synchronized the owned manifest and contract. Pointwise eventual vanishing and the unbounded positive-index norms are unchanged.
- Dependencies checked: the complete current definitions `def-operator-norm` and `def-weak-star-convergence`; the latter explicitly takes sequences to have index set `N`.
- Sources consulted: none; the issue and repair are elementary and fixed by the local indexing convention.
- Post-edit guard: `4891d8a2092358333404944f04701e33cf97791bb32b0c0f6c0dfb45fea75fa8`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed with no errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control`.

### `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control`

- Rejection: the natural-number-indexed spike sequence omitted `f_0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `61cd06a827ed3d562c7fdd01d7eaa34fe5d5695e4e9df5d237e16b3e198f787f`.
- Repair: defined `f_0=0` and restricted the scaling and substitution formulas to `j>=1`. Dependency inspection also found that the regular-functional definition explicitly defers continuity; the same licensed item repair therefore added `thm-locally-integrable-functions-embed-in-distributions` to type every `u_{f_j}` as a distribution and synchronized the owned manifest and contract.
- Dependencies checked: the complete current `def-regular-distribution-from-a-locally-integrable-function`, `thm-locally-integrable-functions-embed-in-distributions`, `def-dirac-delta-and-its-derivatives`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `lem-test-function-cutoffs-and-euclidean-localization`, `cor-change-of-variables-for-compactly-supported-functions`, `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`, and `def-countable-choice` interfaces used in the item.
- Sources consulted: none; exact local interfaces and elementary calculations settle both defects.
- Post-edit guard: `65b2a796310e470ea14f61047f382cf273bd413de19e2df7ec5c58039285afcf`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed. The global dependency check completed successfully with pre-existing repository warnings outside this item.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `cor-smooth-functions-are-weakly-dense-in-distributions`.

### `cor-smooth-functions-are-weakly-dense-in-distributions`

- Rejection: F1 attributed a nested cofinal compact exhaustion to the cutoff lemma, although that lemma's Statement supplies only individual cutoffs and partitions of unity.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated citation).
- Pre-edit guard: `57e26d7cfe87c1669291a21a3b4ff6516076356de1ce837e1e9e22d51b43efc4`.
- Repair: constructed the compact exhaustion explicitly and proved compactness, nesting, and cofinality; normalized a cutoff to obtain the unit-mass bump; defined the exceptional zeroth approximant separately; restricted the Euclidean dimension to `n>=1`; and cited the exact locally-integrable-function embedding before treating each smooth approximant as a regular distribution. The owned manifest and proof contract were synchronized.
- Dependencies checked: the complete current Statements of `lem-test-function-cutoffs-and-euclidean-localization`, `thm-heine-borel-rn`, `thm-extension-by-zero-for-distributions-with-ambient-closed-support`, `thm-convolution-with-a-test-function-is-smooth`, `thm-mollifier-approximation-in-distributions`, `def-support-of-a-distribution`, `thm-locally-integrable-functions-embed-in-distributions`, `def-multiplication-of-a-distribution-by-a-smooth-function`, and `def-countable-choice`.
- Sources consulted: none; the current local dependency interfaces and elementary compactness/distance arguments settle the adjudication.
- Initial repair guard: `3d3a523ce9e68ebc9f07943f1e7fbb5f6bcb1b97a6984e2d1057901376425586`. After the owned mollifier supplier was repaired later in this dispatch, its consumer-facing Facts text and exact contract quote were synchronized; final post-edit guard: `03ad45af3b6e3c4a44009609615a554b736c041ddf4e767ae4f26ecc937750cb` (defect row `phase-2-next-17-7-b-028-smooth-density-upstream-statement-sync`).
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings. The dependency check completed successfully with pre-existing repository warnings outside this item.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `def-convolution-of-a-distribution-with-a-test-function`.

### `def-convolution-of-a-distribution-with-a-test-function`

- Rejection: the Definition said the distribution pairing itself includes reflection, contradicting the dependency's exact bilinear pairing convention.
- Outcome: `confirmed_fatal` (`logic`, false convention claim).
- Pre-edit guard: `2b71e4fb57447af41058fc79f5a197237e22b4ef97b227ecf5f9ffbf8d512972`.
- Repair: assigned reflection only to the supplied test `y -> phi(x-y)`, retained bilinearity and absence of conjugation, propagated the test-space hypothesis `n>=1`, and synchronized the manifest and contract.
- Dependencies checked: the complete current Definitions of `def-distribution` and `def-test-function-space-d-of-an-open-set`.
- Sources consulted: none; the exact local definitions settle the convention and domain.
- Post-edit guard: `46343b66b6a73afd39d6306b0b7c1b8c0f35ac95a690e252b6e4c91ad1e4ebd2`.
- Validation: focused rendercheck and strict item-contract check passed without errors or warnings; this definition has no proof body for precheck.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `def-convolution-of-distributions-when-one-has-compact-support`.

### `def-convolution-of-distributions-when-one-has-compact-support`

- Rejection: the item denoted an arbitrary-cutoff expression by `u*v` while deferring the independence and continuity needed to define it to an unnamed following lemma.
- Outcome: `confirmed_fatal` (`dependency_citation`, missing justifier).
- Pre-edit guard: `9cc8d7ba1df236d3c91f672964f410de4b2bc684f99db05b738d664a9f17afc5`.
- Repair: named the cutoff-dependent candidate separately; registered and cited `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` as the justifier that turns its common value into a distribution; added the cutoff-existence lemma to `deps`; and synchronized the manifest and contract.
- Dependencies checked: the complete current definition, the full following well-definedness lemma, `thm-tensor-product-distributions-and-iterated-pairings`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, and `def-support-of-a-distribution`.
- Sources consulted: none; exact local interfaces and the already-authored following proof settle the repair.
- Post-edit guard: `3809687b3d4509673dfd1e7e806efe59e87a3a534da55841b8914df70a153394`.
- Validation: focused rendercheck, strict item-contract check, and dependency check passed; the dependency check reported only pre-existing repository warnings outside this item.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `def-fixed-support-test-function-frechet-space`.

### `def-fixed-support-test-function-frechet-space`

- Rejection: the title asserted a Fréchet space although metric/topology agreement and completeness were expressly postponed to an unnamed following lemma.
- Outcome: `confirmed_fatal` (`dependency_citation`, missing justifier).
- Pre-edit guard: `24f31f21587082cf60e028d6882df96269bb9e71618b960ae032db4e38d6f911`.
- Repair: registered and cited `lem-fixed-support-test-function-spaces-are-complete` as the exact justifier for the Fréchet name, propagated the Euclidean test-space hypothesis `n>=1`, and synchronized the manifest and contract.
- Dependencies checked: the complete current `def-test-function-space-d-of-an-open-set` and `lem-fixed-support-test-function-spaces-are-complete`.
- Sources consulted: none; the exact local interfaces settle the title and dimension boundary.
- Post-edit guard: `05bdb3982a553753a580452ee62e3cd206289de3ca9c187e91b5d8647877f739`.
- Validation: focused rendercheck, strict item-contract check, and dependency check passed; the dependency check reported only pre-existing repository warnings outside this item.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `def-pullback-of-a-distribution-by-a-diffeomorphism`.

### `def-pullback-of-a-distribution-by-a-diffeomorphism`

- Rejection: the compatibility paragraph attributed measurability and preservation of null equivalence classes to a nonexistent completion clause of the cited change-of-variables corollary.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated interface).
- Pre-edit guard: `a856a22669df049406528adc38d742606043ab5088c4c5d66567397805678b01`.
- Repair: derived local measurability, integrability, and preservation of almost-everywhere classes from the exact `L^1` substitution formula on compact images; cited the nonnegative zero-integral criterion; added the regular-functional definition and embedding theorem before asserting equality of regular distributions; stated `n>=1`; and synchronized the manifest and contract.
- Dependencies checked: the complete current `cor-c-one-change-of-variables-for-l-one-functions`, including its proof of the formula, plus `def-distribution`, `def-regular-distribution-from-a-locally-integrable-function`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-test-function-operations-are-continuous`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, and `def-countable-choice`.
- Sources consulted: none; the repaired argument uses only exact current local interfaces.
- Post-edit guard: `59b2f9f3c5924646938c9cfa0aada6b343e87555cdf344970cf2ea023c2f38f7`.
- Validation: focused rendercheck, strict item-contract check, and dependency check passed; the dependency check reported only pre-existing repository warnings outside this item.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `ex-derivative-of-the-heaviside-function-is-dirac-delta`.

### `ex-derivative-of-the-heaviside-function-is-dirac-delta`

- Rejection: the proof applied the distributional derivative to `u_H` while citing only a regular-functional definition that expressly defers continuity.
- Outcome: `confirmed_fatal` (`dependency_citation`, missing type theorem).
- Pre-edit guard: `8f343006a6aa4b99286cdd30fffb94199279e243732aac62c5165d7a9cf535a9`.
- Repair: added `thm-locally-integrable-functions-embed-in-distributions` to the item, F1, manifest, and exact citation contract, and stated in step 1.1 that it makes `u_H` a distribution before applying `D`.
- Dependencies checked: the complete current regular-functional definition, embedding theorem, distributional derivative definition, Dirac definition, complex FTC, null-singleton result, and Countable Choice definition.
- Sources consulted: none; the exact local interfaces and finite-interval computation settle the issue.
- Post-edit guard: `f6a3e7ba8d965c8d3b54cb4c97b270a28bf23d742f81c620a4fae2fb8afd7c62`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas`.

### `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas`

- Rejection: F1 promoted the regular-functional definition to a distribution construction, leaving `D u_f` and `u_g` untyped.
- Outcome: `confirmed_fatal` (`dependency_citation`, missing type theorem).
- Pre-edit guard: `fe1b81f786ef67b098b7a1f92d4936a0be937b5c077671bfab594b55486a7749`.
- Repair: added and exactly contracted `thm-locally-integrable-functions-embed-in-distributions`, and invoked it before differentiating `u_f` or equating the result with `u_g`; synchronized the manifest.
- Dependencies checked: the complete current regular-functional definition, embedding theorem, distributional derivative and Dirac definitions, complex integration-by-parts lemma, dominated convergence theorem, finite-order characterization, and Countable Choice definition.
- Sources consulted: none; exact local interfaces and the finite interval calculation settle the issue.
- Post-edit guard: `e0f02d4a53d217fdaf524e4971ad188b4d6dbbc0d6abadc3153121e622ce2e7b`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`.

### `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`

- Rejection: the Statement omitted `n>=1` although the defining convolution item and Euclidean cutoff interfaces require it.
- Outcome: `confirmed_fatal` (`logic`, missing hypothesis).
- Pre-edit guard: `0fb34190f33623600d4ca3db987c0077c265f2b266af91100efa610bcfbab89f`.
- Repair: added integer `n>=1` to the Statement and Given line, synchronized the manifest and boundary contract, and refreshed the exact F1 contract quote after the repaired definition it cites.
- Dependencies checked: the complete current convolution definition and tensor-product, cutoff, finite-order, support, and sheaf interfaces. The cutoff-independence, continuity, bilinearity, commutativity, closed support-sum, and support-inclusion arguments were each checked and remain valid.
- Sources consulted: none; exact local interfaces and elementary compactness arguments settle the issue.
- Post-edit guard: `05e12c9f1026b9aad49bdfeae81f28df2c611299229af7116ee9039a6ce76911`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `lem-distribution-pairing-with-smooth-parameter-families`.

### `lem-distribution-pairing-with-smooth-parameter-families`

- Rejection: the parameter and slice dimensions were unrestricted although the integral clause's Lebesgue-measure dependency and the Euclidean distribution/test interfaces require positive dimensions.
- Outcome: `confirmed_fatal` (`logic`, missing hypotheses).
- Pre-edit guard: `2397eaaebb7fe47f8a97c0bac1cc8ddd2e58fbd1c7c3a26548855668f82b8ea0`.
- Repair: required integers `r,n>=1` in the Statement and Given line, synchronized the manifest and boundary contract, and retained the valid parameter-differentiation and grid-integral arguments.
- Dependencies checked: the complete current finite-order, test-operation, fixed-support completeness, cutoff, mean-value, integral triangle/linearity, Countable Choice, and complete Lebesgue-measure interfaces.
- Sources consulted: none; the exact local dimension interfaces and the written proof settle the adjudication.
- Post-edit guard: `13b54ea7a210ff8acc43128047ac2032181cdbf4c15d7c643e5aedf8cf760f62`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`.

### `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`

- Rejection: F5 attributed tagged-mesh convergence to `thm-multidimensional-integral-properties`, whose Statement supplies only algebraic, order, absolute-bound, and slicing properties.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated interface).
- Pre-edit guard: `fd7c02f3e7039efa520804710557c9c48b29fba2c5cac214633f4c1de72eb732`.
- Repair: added and exactly contracted `thm-multidimensional-darboux-equals-riemann`; wrote the uniform cell-oscillation estimate for every differentiated tagged sum on compact parameter-target boxes; applied the coordinatewise uniform derivative theorem explicitly; and derived the shifted derivative-integral formula before the approximation estimate. The same repair fully covers reader warning `s8a-68db6a57b7011e74da77f30f`. Inspection also found and repaired the omitted hypotheses `p,q>=1` and the missing zeroth approximant `P_0=0`, and synchronized the manifest and downstream exact Statement quote.
- Dependencies checked: the complete current Statements of the cutoff, mollifier, uniform derivative-limit, compact-support change-of-variables, multidimensional integral-properties, multidimensional tagged-mesh, Riemann-Fubini, and test-space sequential-convergence items.
- Sources consulted: none; the exact local dependency interfaces and the written common-modulus estimate settle the issue.
- Post-edit guard: `14d13fe97a3a396a77042d4090cf82ca99b1c5a2f5e57c9ddd8a62dac0ca596e`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Reader-warning disposition: `covered_by_rejection`; the durable alert decision binds the exact judge tuple.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`.

### `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`

- Rejection: F6 attributed boundedness, Borel measurability, and Riemann integrability of a zero extension directly to a theorem whose Statement only asserts integrability over a compact Jordan set.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated interface).
- Pre-edit guard: `788240b64c6d28184b37ff6011f7081fb29f67c825892a916382d4aaf4e3329b`.
- Repair: cited the exact Jordan-integral definition that uses a bounding-box zero extension, the extreme-value theorem for boundedness, and compact-closedness; proved Borel measurability by computing the inverse image of an arbitrary open set in the two cases depending on whether it contains zero; and retained the continuity theorem only for its exact integrability-over-the-region conclusion. The owned manifest and contract were synchronized.
- Dependencies checked: the complete current Statements/Definition of `thm-multidimensional-darboux-equals-riemann`, `thm-lebesgue-measure-of-a-box-of-every-kind`, the nonnegative integral order/simple rules, complex `L^1` linearity, Countable Choice, `def-riemann-integral-over-a-jordan-set`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-extreme-value-metric`, and `thm-compact-subset-is-closed-and-bounded`.
- Sources consulted: none; the exact local interfaces and the elementary open-preimage calculation settle the issue.
- Post-edit guard: `bad3e3487cb4e9d41dafaaa41a02b21e90ad74676543f4e71d3bcc7bd79f35d5`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `thm-distributions-supported-at-one-point`.

### `thm-distributions-supported-at-one-point`

- Rejection: F2 attributed cutoff invariance/locality to the compact-support finite-order theorem, whose Statement supplies only a quantitative finite-order estimate.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated interface).
- Pre-edit guard: `cae7e1c285fd0ab5ac7ca371503a7ebde8ecfcda990e51ea82bf5726ffb220d0`.
- Repair: added and exactly contracted `def-support-of-a-distribution` for equality of pairings when tests agree near the support and for the equivalence between empty support and the zero distribution. The shrinking-cutoff, Taylor little-o, finite-jet, coefficient, and converse calculations remain valid; the owned manifest and risk contract were synchronized.
- Dependencies checked: the complete current Dirac-derivative Definition, compact-support finite-order theorem, support Definition, cutoff lemma, and multivariable Peano-remainder corollary.
- Sources consulted: none; the exact local interfaces and the fully written finite-jet argument settle the issue.
- Post-edit guard: `1bdbbe3e09a5c3b7298b27e653e159c75015f170cd8d6c585158d90ac891b984`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `thm-global-locally-finite-structure-of-distributions`.

### `thm-global-locally-finite-structure-of-distributions`

- Rejection: F2 attributed a finite-partition proof mechanism to a sheaf theorem whose Statement exports restriction and compatible gluing only.
- Outcome: `confirmed_fatal` (`dependency_citation`, inflated interface).
- Pre-edit guard: `fe91ebd5a07d83f3c96d334bb92b2f6d969bef9ffef1b7455f962f602e7c9a85`.
- Repair: restated F2 exactly; on each compactly contained ball identified each coefficient functional with a finite sum of regular distributions and used compatible sheaf gluing to obtain its global distribution; cited the partition-of-unity supplier separately for the finite testwise identity. The local-finiteness, support, sum-interchange, AC, and uniform-order arguments remain valid, and the proof contract was synchronized.
- Dependencies checked: the complete current compact-support primitive representation, sheaf, cutoff/partition, AC, global finite-order, and smooth-multiplication interfaces.
- Sources consulted: none; the exact local interfaces and finite local sums settle the issue.
- Post-edit guard: `91891872016a5940bb6dc32ca6fb97aeaf11ff0510b173d0590bd65a74b14839`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: adjudicate `thm-mollifier-approximation-in-distributions`.

### `thm-mollifier-approximation-in-distributions`

- Rejection: the Statement included `n=0`, while its affine substitution and smooth-parameter integration interfaces require positive Euclidean dimension and no separate zero-dimensional proof was given.
- Outcome: `confirmed_fatal` (`logic`, missing hypothesis).
- Pre-edit guard: `882e14b421236be8ba3d8041fd6a815448092c36f04cf61ff15b97bbe655dde0`.
- Repair: required integer `n>=1` in the Statement and Given line. Inspection also found that F6 promoted a regular-functional definition that expressly defers continuity; the repair adds and exactly contracts `thm-locally-integrable-functions-embed-in-distributions`, invokes it after smoothness gives local integrability, and states that the regular distributions converge weakly. The owned manifest, boundary review, and all owned downstream exact quotes for the repaired parameter lemma were synchronized.
- Dependencies checked: the complete current convolution-smoothness, parameter-pairing, Riemann/Lebesgue comparison, affine substitution, local finite-order, regular-functional, locally-integrable embedding, mollifier, and Countable Choice interfaces.
- Sources consulted: none; the exact local interfaces and written substitution/test-convergence calculation settle the issue.
- Post-edit guard: `559292be115c63f6dba0f2b0b0b47f7e7962999aef368f60134a9e86ef4d2ca7`.
- Validation: focused precheck, rendercheck, and strict item-contract check passed without errors or warnings.
- Rejudge target: yes; the engine owns rejudgment after group completion.
- Unresolved obligations: none for this item.
- Next action: dispose the two remaining Step-6 reader warnings, then run group-wide validation and Step-7 gates.

## Reader-warning dispositions

### `s8a-29aad83de5e5f8d6d8be93f9` — `ex-distributional-laplacian-of-the-newtonian-kernel`

- Outcome: `nonfatal`; no content change.
- Evidence checked: the complete current ball example; the elementary-solid, simple-solid, adapted-presentation, admissible-patch, compatible finite-patch, finite-gluing, and Green second-identity definitions/statements.
- Reason: the eight octants, overlap-preimage edges, common outward orientation, coordinatewise positive/negative sorting, disjoint quarter-disc projections, content-zero axes/circle residue, and single-piece gluing are all supplied or follow immediately from the displayed data. The warning accurately identifies compressed verification, but not a false claim, missing hypothesis, or unlicensed application.
- Sources consulted: none; the complete local definitions settle every clause.

### `s8a-6f948b122eceb89a6367e7ec` — `thm-infinite-dimensional-weak-topology-is-not-first-countable`

- Outcome: `nonfatal`; no content change.
- Evidence checked: the complete current theorem, weak-topology Definition, basic weak-neighborhood lemma, and first-countability convention.
- Reason: enumerate a countable base, repeat one member in the finite case, pad each selected finite functional list by zero, and use a fixed pairing enumeration of `N x N`. The local base cannot be empty. This is routine bookkeeping and does not affect the proof or its single Countable Choice use.
- Sources consulted: none; the local conventions and elementary enumeration settle the warning.

## Group result

- Rejections: 16/16 adjudicated `confirmed_fatal`; all 16 items were repaired and are rejudge targets. There were no `confirmed_nonfatal` or `false_positive` judge outcomes.
- Reader warnings: 3/3 dispositioned exactly once: one `covered_by_rejection` and two `nonfatal`.
- Defects: 28 group-b rows were accepted by the prescribed append interface. Rows 001--027 record the sixteen licensed repairs and additional defects found while those repairs were open; row 028 records the final owned-supplier synchronization in the smooth-density consumer.
- Scope additions, cross-group alerts, published repairs, and owner-prerequisite repairs: none. No new lemma was needed.
- Sources consulted: no external sources were needed. Every decision was settled from complete current item statements/definitions and elementary derivations recorded above.

## Final validation

- `node tools/proof-contract.mjs research/phase-2-next-17-batch-2.proof-contracts.json --strict`: pass, 85/85 items, zero errors and zero warnings. The final synchronization refreshed six stale exact citations and removed one accidental unused proof-step mapping.
- Group item precheck: pass, all 65 proof-bearing owned items checked, zero failures.
- Group rendercheck: pass, all 85 owned files checked.
- JSON/JSONL parsing and scoped `git diff --check`: pass.
- Group-b exact-tuple check: pass. Each of the 16 scoped rejection tuples occurs exactly once in the adjudication ledger with an allowed fatal `defect_type`; each of the three warning ids occurs exactly once in the alert-decision ledger.
- Current repair-hash check: pass. Every rejected item has a defect row binding the adjudication's pre-edit guard to its final current `itemHashGuard` digest.
- `node tools/defect-ledger.mjs validate --run phase-2-next-17`: pass, 131 run rows and zero schema errors.
- `node tools/step7-scope.mjs check --run phase-2-next-17`: pass, 7 groups, 571 partitioned items, 24 open rejections routed, and 35/35 warnings/alerts dispositioned.
- Repository dependency check with the bounded pre-certification option: the owned group introduced no hard dependency error; the repository-wide command is currently held by six `b-leaf-content` errors in another group's algebraic-topology items, all using `ex-relative-homology-of-a-disk-and-its-boundary`. The 269 other messages are repository warnings.
- Step-7 guard: all 119 current changes were licensed, including every group-b change. The repository-wide guard is currently held by one other-group creation, `lem-finite-support-constructibility-absoluteness`, which lacks its current auditor/adjudicator-created certification.
- No judge, rejudge, or final adjudicator was run by this dispatch.

## Append-only ledger blocker

The final defect-ledger close check found one group-b bookkeeping conflict. The initial smooth-density defect row `phase-2-next-17-7-b-004-smooth-density-inflated-exhaustion-citation` owns the exact judge tuple but carries the intermediate post hash `3d3a523ce9e68ebc9f07943f1e7fbb5f6bcb1b97a6984e2d1057901376425586`. When the later mollifier repair required final consumer synchronization, row `phase-2-next-17-7-b-028-smooth-density-upstream-statement-sync` correctly recorded the current post hash `03ad45af3b6e3c4a44009609615a554b736c041ddf4e767ae4f26ecc937750cb` but also repeated the exact `adjudication_ref`. The close checker therefore reports that one confirmed fatal appears in two rows.

This dispatch may append but must not rewrite the shared ledger, so it leaves an exact owner correction rather than altering history. The owner correction should:

1. change only row 004's `post_sha256` to `03ad45af3b6e3c4a44009609615a554b736c041ddf4e767ae4f26ecc937750cb`;
2. remove only row 028's `adjudication_ref` field, leaving row 028 as the separate in-flight supplier-synchronization defect; and
3. rerender `research/DEFECT-LEDGER.md` and rerun the run-scoped close check.

At the time of this report, the full line including its newline hashes to `7d0182dd0c4f39ef78ce5e7236c6c814e4565632caf8c0e154b5f91dd68b26e7` for row 004 and `49b2033b32109749cb1c85f34154e1797f51902ca6d95874e26ca55c1ec281be` for row 028. No mathematical, item-hash, scope, or warning-disposition obligation remains in group b; this append-only correction is the sole group-b close blocker.
