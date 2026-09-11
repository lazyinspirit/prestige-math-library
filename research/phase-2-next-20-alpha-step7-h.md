# Step 7 adjudication — group h

Run: `phase-2-next-20`  
Batches: 13, 14  
Pages: `the-constructible-hierarchy-and-inner-models`, `the-constructible-hierarchy-and-inner-models-examples`, `forcing-orders-names-and-generic-extensions`, `forcing-orders-names-and-generic-extensions-examples`, `large-cardinals-measures-and-elementary-embeddings`, `large-cardinals-measures-and-elementary-embeddings-examples`

This report is the item-by-item durable checkpoint required by the Step-7 task. Hashes below are full `itemHashGuard` digests computed before any licensed edit. No judge, final-adjudicator, routing, retry, or stage-transition command was run by this group Alpha.

## Rejections

### `lem-finite-reflection-along-constructible-levels`

- Rejection: `(lem-finite-reflection-along-constructible-levels, gpt-5.6-terra, 7707a3eba4122ba9b96d23a3907580f0c68d783045f0d27510d3e4d714de6a49)`.
- Pre-edit guard: `58fbf63732c718f8ced82c6bc90005e911fe747976af4e362d55fa0f0feae1be`.
- Outcome: `false_positive`.
- Evidence: `items/thm-montague-levy-finite-reflection.md`, proof steps 1.1–4.1, not merely its headline statement. The supplier explicitly chooses a definable bound `b`, defines `beta_(n+1)=b(beta_n)`, uses Replacement on omega to collect the sequence, takes its supremum, and states that strict increase makes the result a nonzero limit. The consumer's steps 1.1–2.1 instantiate exactly that general definable-hierarchy construction with `W_gamma=L_gamma`; `items/def-constructible-hierarchy-and-constructible-rank.md` and `items/prop-constructible-levels-transitivity-ordinals-and-rank.md` supply uniform definability, continuity, monotonicity, and exhaustion. The claimed missing strengthening is therefore present in the cited item and repeated locally.
- Change/check: no content, contract, impact, dependency, or judge change. Opened the complete consumer and all three relevant suppliers and confirmed the current guard matches the `pre-step7` touch snapshot prefix `58fbf63732c718f8`.

### `thm-constructible-universe-basic-axioms`

- Rejection: `(thm-constructible-universe-basic-axioms, gpt-5.6-terra, accb6af89a99cb1d37f1bc68bfdd60c9247d45b6dcade0bf9afa5a85eb63e840)`.
- Pre-edit guard: `458dd7722e706cb0212ec59ea34935f7d79c3dbbcf8534bf94f209060ba50021`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the original F1 inflated `items/prop-constructible-levels-transitivity-ordinals-and-rank.md` by attributing the Def successor construction to its Statement. Proof step 2.1 needs exactly `L_(gamma+1)=Def(L_gamma)` to put the definable pair and union into the next level. That identity is stated in `items/def-constructible-hierarchy-and-constructible-rank.md`, which was only transitive before repair.
- Repair: added the hierarchy definition as a direct dependency and exact F2, narrowed F1 to its actual statement, cited F2 in step 2.1, and added the matching citation/derivation input to `research/phase-2-next-20-batch-13.proof-contracts.json`.
- Post-edit guard/checks: `776610611e9dd3fbf7b0a6288bf8d2b26a1c06d2a01efbff73b5c8812dc91f26`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings. Appended matching defect row `p2-next20-step7-h-basic-axioms-def-interface` through `tools/defect-ledger.mjs append`.

### `thm-constructibility-is-absolute-and-l-is-minimal`

- Rejection: `(thm-constructibility-is-absolute-and-l-is-minimal, gpt-5.6-terra, 2ae1194338779804a26fcc6112065d77262d7769e1516bcaf534eb8a089c1ea5)`.
- Pre-edit guard: `139a46cf15e9e11b3569b133a4dc787d3f42e9b12db2696f47c08281248999b1`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original step 3.1 attributed both Separation and Replacement to F4, but `items/thm-replacement-in-the-constructible-universe.md` states only Replacement. Its dependency on Separation does not make the consumer's F4 restatement exact. `items/thm-separation-in-the-constructible-universe.md` states the required scheme directly. This is the same defect independently identified by reader warning `s8a-eca6cb67c86986846387540e`.
- Repair: added the Separation theorem as a direct dependency and F3; renumbered exact Power Set/Replacement facts to F4/F5; updated proof step 3.1 and the corresponding owned proof-contract citation and derivation.
- Reader warning: `covered_by_rejection`, targeting this exact confirmed-fatal tuple.
- Post-edit guard/checks: `397306123f299cedec2e49a9211636ac59d01fb4e1541d409f9f9d8cb610e9d8`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-constructibility-separation-citation` through `tools/defect-ledger.mjs append`.

### `thm-constructible-inner-model-semantic-and-formal-schema`

- Rejection: `(thm-constructible-inner-model-semantic-and-formal-schema, gpt-5.6-terra, d7d675fdee2e4319a807de31869e49a91badbf9434f5304ecef03ec8ef9e8999)`.
- Pre-edit guard: `5ac0b6a2a1d3dc4baf3ab132eb153934ce768fdfcc9ceca0b821494af5779d06`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 originally attributed the basic ZF, Separation, Power Set, and Replacement relativized derivations to `items/thm-constructibility-is-absolute-and-l-is-minimal.md`, whose Statement supplies level absoluteness, minimality, idempotence, and `V=L`, not those separate axiom interfaces. Step 1.1 genuinely consumes the four earlier axiom results.
- Repair: added the basic-axiom, Separation, internal Power Set, and Replacement theorems as direct dependencies and exact facts; retained separate facts for `V=L`, Choice, relativization, and soundness; updated all three proof steps and synchronized the owned contract.
- Post-edit guard/checks: `49e563cd5458fbadc43becc01e814aab6a70f7f138225f5ef33d84eb87c0a800`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-inner-model-schema-axiom-interfaces` through `tools/defect-ledger.mjs append`.

### `ex-first-constructible-levels`

- Rejection: `(ex-first-constructible-levels, gpt-5.6-terra, d797eed6b3805bb784c5a85718403dcda0eb871087e46e2db6edd805a5f4924c)`.
- Pre-edit guard: `10e3d1c0fbd1cefddb7799c1e78fe79c291ae85fc1055f0660a80181d7fc1a97`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: verification step 2.1 needs the defining recurrences for both L and V, but original F1 cited a proposition whose Statement supplies only structural consequences. The exact suppliers are `items/def-constructible-hierarchy-and-constructible-rank.md` and published `items/def-cumulative-hierarchy-stages.md`; `items/def-definable-subsets-of-a-membership-structure.md` remains the exact finite-Def supplier.
- Repair: replaced the inflated proposition dependency with the two direct hierarchy definitions, split the facts into exact F1-F3 interfaces, and updated both verification citations.
- Post-edit guard/checks: `a2eb2198935d9f3585ac2fa8c06c525fe35a871493db7b0de550979fa9454aad`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-first-l-levels-recurrences` through `tools/defect-ledger.mjs append`.

### `ex-canonical-l-well-order-first-stages`

- Rejection: `(ex-canonical-l-well-order-first-stages, gpt-5.6-terra, d04a4f4cf4fb246cd173bddf3c5f03f52fe09f8cbdbb7518655c5e8658d0d054)`.
- Guard: `e8992009ad0e0d9a1c57b668f51f0989534366d54a4961e85225a82044a9f1c4`.
- Outcome: `confirmed_nonfatal`.
- Evidence: `items/thm-canonical-definable-global-well-order-of-l.md`, proof step 1.1, explicitly retains the old order at successors, places all old elements before all new elements, and compares new elements by least definition codes. The example uses exactly those clauses and correctly avoids claiming an enumeration-independent order for its final two sets. The headline Statement compresses the construction, so F1 is presentation-thin, but the cited item fully supports the calculation.
- Change/check: fatal-only stage; no content, contract, impact, dependency, or judge edit. The current guard matches the pre-Step-7 snapshot prefix.

### `ex-definable-subsets-of-omega-are-not-all-subsets`

- Rejection: `(ex-definable-subsets-of-omega-are-not-all-subsets, gpt-5.6-terra, 5d8eb27d494f72db388255d757ae632fff040f69a630b361e3e5db8983825d2f)`.
- Pre-edit guard: `4238bed6e5069e31bf402f4fecd6ed1de9db02707873a9880433c3a04ce4f0d7`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `items/def-definable-subsets-of-a-membership-structure.md` says formula codes and finite tuples form a set; it does not supply a natural-number enumeration. Original F1 and verification step 1.1 silently upgraded that interface. The pure membership language is countable, and its finite strings admit the explicit length/nested-pair encoding installed by the repair.
- Repair: narrowed F1 to the exact formula-code interface; added explicit symbol, finite-string, well-formed-formula/arity, and tuple encodings into omega; kept the existing surjection and diagonal proof; synchronized derivation 1.1 in the owned contract.
- Post-edit guard/checks: `d73f1a0a87523759a39f9eefd5307279cff32ed190b19d2e7458c7992781d481`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-def-omega-formula-coding` through `tools/defect-ledger.mjs append`.

### `thm-canonical-definable-global-well-order-of-l`

- Rejection: `(thm-canonical-definable-global-well-order-of-l, gpt-5.6-terra, 9a4ad187210bdf883c9690c9185fae894746fa89e5fa83ac19d3c7b841b630de)`.
- Pre-edit guard: `d5c86498cf27e5b4e4e6af5596f6317c670a1ab588944bfeb680696f9a81f837`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original F4 called `items/thm-constructibility-is-absolute-and-l-is-minimal.md` a proof that L is a transitive ZF model, but its Statement does not assert ZF. Step 4.1 needs the internal ZF recursion and separately needs equality of Def and levels. Exact earlier suppliers exist for every use.
- Repair: added direct dependencies/facts for basic axioms, Separation, internal Power Set, Replacement, and Def absoluteness; narrowed the constructibility fact to level agreement; updated step 4.1.
- Post-edit guard/checks: `010732b60ae9af45b7b77b2dceab2125905b6826c037c1bbec16473840671b80`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-canonical-order-internal-zf` through `tools/defect-ledger.mjs append`.

### `thm-constructible-universe-satisfies-choice`

- Rejection: `(thm-constructible-universe-satisfies-choice, gpt-5.6-terra, 4bf8be4c7f789797e32df511d0188b15d9f48e36d6fb85d1431b0849a5cf69e0)`.
- Pre-edit guard: `3dd463c50447523894b16124fa39b9a92ee87c7f1d80b1939f0803ca17581eac`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original step 2.1 uses Pairing in L to form each ordered pair before Replacement can collect the graph. The original F1-F4 interfaces supplied the well-order, Replacement, Separation, and the target AC statement, but not Pairing.
- Repair: added `thm-constructible-universe-basic-axioms` as a direct dependency and exact F4; renumbered the AC target to F5; updated step 2.1.
- Post-edit guard/checks: `f89a6d592ada12b91e43f9be8f81d5a6f0a013d2cf71034038c7686943516b88`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-choice-pairing-interface` through `tools/defect-ledger.mjs append`.

### `thm-generic-extension-transitivity-and-rank-bound`

- Rejection: `(thm-generic-extension-transitivity-and-rank-bound, gpt-5.6-terra, 2ace9772e87f511b43298c2f03bcc51bf5d3477f6fefb10978c1a31dc7379a71)`.
- Pre-edit guard: `5d1521527bbb37cebb7413b28c262a9e8d731536885afd96e67061d86865910a`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original F1 defines valuation and F2 defines ordinary membership rank; neither states the name-rank recursion used for the exact final supremum or descendant-name closure used in transitivity. `items/def-forcing-names-and-name-rank.md` supplies both.
- Repair: added the name/rank definition as direct F2, moved membership rank to F3, and updated both proof steps.
- Post-edit guard/checks: `6738cbf0cd9c9c7af1bcf70b42b813f847103e3469786f19a79a303a8659d36c`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-valuation-name-rank-interface` through `tools/defect-ledger.mjs append`.

### `lem-names-for-pairs-functions-and-ordinals`

- Rejection: `(lem-names-for-pairs-functions-and-ordinals, gpt-5.6-terra, 548d4a4ca1c724190ee57d299c325249a696689021c91e0841184791d9fee862)`.
- Pre-edit guard: `ba4bd5bc07b3f985a2f8d0f2cf6759408c5e213972ecd393c6c26c90ccd93710`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original F2 cited a theorem stating only extension transitivity and a valuation-rank bound. Step 1.1 needs the common-stage criterion for sets of names and the valuation recursion; the ground-model clause also uses the recursive check-name construction. All three exact definitions exist earlier on the owned forcing page.
- Repair: replaced the inflated theorem dependency with direct name/rank and valuation definitions, added the check-name definition, and updated both proof steps while retaining the check-evaluation theorem.
- Post-edit guard/checks: `2df4030bffde4b1a8bd9b0a5e20ee29cb69fb641eb68b7c5ec5d2d44877b5b8a`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Preflight risk review: added the missing item-specific `risk_review` to the batch-13 contract after rereading the repaired proof and all four direct suppliers. It checks empty `T` and `I`, ordinal zero, equal pair coordinates, repeated graph values, the necessity of nonempty `G`, internal construction in a transitive ZF model, and the absence of Choice. The focused required-review risk report, precheck, and strict proof-contract check pass; the item guard remains `2df4030bffde4b1a8bd9b0a5e20ee29cb69fb641eb68b7c5ec5d2d44877b5b8a`.
- Defect ledger: appended matching row `p2-next20-step7-h-pair-function-name-construction` through `tools/defect-ledger.mjs append`.

### `ex-boolean-valued-one-bit-name`

- Rejection: `(ex-boolean-valued-one-bit-name, gpt-5.6-terra, 4bb31e35a97779f0f061b35821f242ed02cbf267efd95ec85783a80469bdbf66)`.
- Pre-edit guard: `205c0d81207d53f80265801ff575809ea6872d3036fa9e8f0c5ad5067e2cee8f`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: original F2 attributed the recursive valuation rule, including the empty-name clause and coefficient selection, to `items/thm-check-name-evaluation-and-generic-reconstruction.md`; that theorem's Statement only evaluates check names and the canonical generic name. `items/def-forcing-name-valuation-and-generic-extension.md` is the exact supplier.
- Repair: replaced F2 and its dependency with the valuation definition and removed the unrelated check-name theorem dependency; synchronized the contract citation.
- Post-edit guard/checks: `0483f55008cfa19b4cde8a71341f6bc07626f5c7f69e94901d87de117b46d1f5`; focused precheck passed; strict proof-contract validation for this item and the previously touched pair/function-name lemma reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-one-bit-valuation-interface` through `tools/defect-ledger.mjs append`.

### `def-lc-inaccessible-and-mahlo-cardinals`

- Rejection: `(def-lc-inaccessible-and-mahlo-cardinals, gpt-5.6-terra, 1dd35aa914a7e364e866f89929178a9edce4ec2726de2605562d3fcec96846f6)`.
- Pre-edit guard: `703aa0dca3c321697a8af5667aafc3552f0f74ecdd4d57ea7e38c605b4578d63`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the definition claimed equivalence with stationarily many inaccessibles but neither cited nor proved the required club-of-strong-limits lemma. The claim was not used to define Mahloness.
- Repair: removed the unsupported equivalence sentence, retaining the primary stationary-regulars definition.
- Post-edit guard/checks: `fdd80d5aeaa681a2fa5a13527b364aad1fd252fce193689071917fffa61e4042`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-mahlo-equivalence` through `tools/defect-ledger.mjs append`.

### `cor-lc-large-cardinal-implication-ledger`

- Rejection: `(cor-lc-large-cardinal-implication-ledger, gpt-5.6-terra, c95fa4e8847f7c2c9062f43dba0f450c4fba05f677287c9f10c2f1685afdc5b1)`.
- Pre-edit guard: `e9f5b98fbe80fc2e8430f7c2c36eb8bdcf8988898d0954df0b336cd7c220824b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2's cited theorem Statement lists the fine-measure and infinitary-compactness characterizations but not the filter-extension definition invoked in step 1.1. The direct definition supplies that exact rule.
- Repair: added `def-lc-fine-ultrafilters-strong-compactness-and-supercompactness` as F8 and cited F8 at the co-small-filter extension.
- Post-edit guard/checks: `473af90305cb682b05072249007541198541bb1c6fef7bd72d1832b0f9d6b450`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-strong-compact-filter-extension`.

### `lem-lc-scott-quotients-are-sets-and-membership-is-setlike`

- Rejection: `(lem-lc-scott-quotients-are-sets-and-membership-is-setlike, gpt-5.6-terra, 1acb0012035a4eecf5f4e9c6b2af4e366419182cde83b1c363797dc08d57f195)`.
- Pre-edit guard: `5567051fafa1f775392276aeea9f37252cae5d6409a9341a5b9a519b755ceb6d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the cited ultrafilter-characterization Statement supplies complement decisions, not properness, binary-intersection closure, or upward closure. Steps 1.1-2.1 use exactly the direct filter axioms.
- Repair: replaced the characterization dependency/fact with `def-filter` and synchronized F2's contract.
- Post-edit guard/checks: `56683239d32e13ba4e86a5950c8b7afd8d9f993c2ac80c953e86edbf9fee2448`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-scott-filter-laws`.

### `thm-lc-strong-compactness-covering-embeddings`

- Rejection: `(thm-lc-strong-compactness-covering-embeddings, gpt-5.6-terra, 570f943c5240497a2fc1cae092073499a2a00fe50ac1a489c678a4f56a54653e)`.
- Pre-edit guard: `c5cc310e3c55f584de3ee83e1ffb941a3d1561e74be830bf7790b23f9663ea90`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `def-axiom-of-choice` states AC; it does not state that ZFC propagates through ultrapowers or supply cardinal comparisons. The proof's uses are direct consequences of the fine measure, transitivity, ordinal well-ordering, and the ambient ZFC assumptions.
- Repair: removed the inaccurate, unnecessary F4 and its two citations.
- Post-edit guard/checks: `3eb21fb032d5ab86ab8194e75cd97f61ad7a0e7de1db3b9f995183fa23aaa43b`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-covering-remove-ac`.

### `def-lc-weakly-compact-cardinal`

- Rejection: `(def-lc-weakly-compact-cardinal, gpt-5.6-terra, dcd6ac323471e58bb929999854ba391af174b2878932ba6eec44af16a19b78a0)`.
- Pre-edit guard: `f5ca01161b1de049749e4bee12fad6f7001305824d2045b56a237337df4bbfc3`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: for one color the arrow is trivial; for at least kappa colors it is outside the subsequent theorem. The proved equivalence is with the two-color arrow or the simultaneous assertion for every nonzero color cardinal below kappa.
- Repair: corrected the domain and quantification and explicitly disclaimed an equivalence for one arbitrary color cardinal.
- Post-edit guard/checks: `4d9f1e5f248e9bbd2c0aa163e2b4daf766adfb4b8e49af43bd625e0eeb470dea`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-weak-compact-partition-domain`.

### `thm-lc-weak-compactness-infinitary-logic`

- Rejection: `(thm-lc-weak-compactness-infinitary-logic, gpt-5.6-terra, 3b9f95c78eb1deb898bf4bf2c16c1468303d146c6b2859c92277c7d0642aa08a)`.
- Pre-edit guard: `e6ceeb1bbe7cd9ba1f73c72209bb216a4701b52e3b9e43d1c44fe61f40df8ff3`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: AC does not state ZFC inheritance or cardinal-size estimates. Its only actual role here is choosing an injection of each small tree level into kappa; the truth-tree theorem and direct cardinal arithmetic supply the rest.
- Repair: narrowed F3 to that choice, removed it from steps 1.1 and 3.1, and synchronized the repaired weak-compactness definition quote.
- Post-edit guard/checks: `9c571718e8316e14726ed87bb72e80759b612f1a5a47b3b140a4df099f71a2bc`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-weak-compact-ac-use`.

### `thm-lc-supercompactness-closed-embedding-characterization`

- Rejection: `(thm-lc-supercompactness-closed-embedding-characterization, gpt-5.6-terra, 3f0fc55075d28bfac9d517f3159664df8479ec81d44feaa8354797ae1e8965b9)`.
- Pre-edit guard: `e2eaf9a95caf41abf8c6b75cd3e6bd3854d07b5bac4640f310ab9a03f6a90ff4`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the measurable-cardinal supplier is about measures on kappa, not normal fine measures on `P_kappa(lambda)`. The generalized filter laws are proved locally; the remaining needed interface is the direct definition of lambda-supercompactness.
- Repair: replaced F2 and its dependency with the exact fine-measure definition, removed its unsupported proof uses, and expanded the ordinal-fixing induction's predecessor step.
- Post-edit guard/checks: `94878ebb60672472e0d2993fb6f1d92ff0011507d2107abbe9fde2290e5e9530`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-supercompact-definition-interface`.

### `lem-lc-generic-evaluation-of-measurable-densities`

- Rejection: `(lem-lc-generic-evaluation-of-measurable-densities, gpt-5.6-terra, cfe393fa3d48d61cf4efcdc99db83dd40788efb2ce2d3c252c5fb06d695c4c77)`.
- Pre-edit guard: `b8fefac2a0ceef1c8df46f37cc61fc7569abfea27ddaf921b2a3906eda470bd7`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3's closure proposition does not state the strict-superlevel criterion for measurable functions, while step 2.1 requires that criterion for every rational coefficient.
- Repair: added `def-extended-real-valued-measurable-function` as exact F9, narrowed F3, and cited F9 in step 2.1.
- Post-edit guard/checks: `782f0224f53fdc99bb8ec39f17ffb50d8ce98e4666e9a9949946b4ea596fb3a7`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-density-level-sets`.

### `ex-lc-normal-measure-identity-and-successor`

- Rejection: `(ex-lc-normal-measure-identity-and-successor, gpt-5.6-terra, 4c45d5bd016ff82e402e4a378f5e43d867b4fa75c4099d5416f893256555e3e9)`.
- Pre-edit guard: `445feec878124a96ce5370fffaa369cef14f3ff2dbdb18128f184f8d21d1d479`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the critical-point lemma does not state Los transfer, and AC does not propagate ZFC through the ultrapower. The fixed successor formula is exactly an application of the direct universe-Los schema.
- Repair: replaced the AC dependency/fact with `thm-lc-los-schema-for-universe-ultrapowers`, narrowed F2, and cited F3 for the successor computation.
- Post-edit guard/checks: `bdedfadff07f7dfc80ff3c709b8fa0dd7817d21b20a2de420f9a7b61336db96a`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-normal-successor-los`.

### `lem-lc-random-coordinate-product-measure-pullback`

- Rejection: `(lem-lc-random-coordinate-product-measure-pullback, gpt-5.6-terra, 8fec2160775993337929a2b010f4e0c5bc3aa4a329a643e9aae1490624a26206)`.
- Guard: `8f54c1bc8f8b91237d8f7b0ad6873a4e4f825a8effac9110a2b2f9ddd6f38997`.
- Outcome: `confirmed_nonfatal`.
- Evidence: `items/lem-lc-solovay-measure-on-generic-subsets.md`, proof step 1.2, explicitly defines the graph name whose generic valuation is `{(A(a),(h_a)_G):a in T}`, and step 2.1 proves that relation is a function. F4 is terse at the Statement boundary, but its cited supplier fully proves the exact bridge used in verification step 5.1.
- Change/check: fatal-only stage; no content or contract change. Focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings; the guard is unchanged.

### `ex-lc-first-inaccessible-is-not-mahlo`

- Rejection: `(ex-lc-first-inaccessible-is-not-mahlo, gpt-5.6-terra, 3753b222683d83128418aacc161d2bd9375e2d15e8d2d4af5250b5e47f8bd3f2)`.
- Pre-edit guard: `fcdf137f9cf78258219450bda05f7607a01f396e418ca5683bb56a59d1c55e6d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `items/def-axiom-of-choice.md` states AC and its product formulation; it does not say that ZFC propagates through the size-bound and weak-compactness suppliers. The proof already assumes ZFC, while F1 and F2 supply the only imported mathematical conclusions.
- Repair: removed F3, its dependency, and its step-1 citation; synchronized the item contract and its choice boundary note.
- Post-edit guard/checks: `6dbee2958a4f02f0b6dbdcc949035d599915929642a8e3b0f928f6c835009ae6`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-least-inaccessible-remove-ac`.

### `lem-lc-fine-measure-coordinate-family`

- Rejection: `(lem-lc-fine-measure-coordinate-family, gpt-5.6-terra, 8e357d51b776b941c24f769f81fce84a3cee1a7ead41471cdbe24faf17c78276)`.
- Pre-edit guard: `7205a430c67f3d766b3601ea210fe10b7a6f3449a8048586ceb5ddb579ce37f9`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the AC definition supplies choice, but not a retrospective claim about how F1 constructs its fine measure. Step 1.1 only invokes F1's theorem-level existence assertion; it does not reconstruct F1's cone filter or select its witnesses.
- Repair: removed redundant F7 and the direct AC dependency, and removed the F7 sentence/citations from step 1.1 and the contract.
- Post-edit guard/checks: `7bbb00335f61e77d60522564acbca640487019960b4ada95e20eeca810802d1b`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-fine-coordinate-remove-ac`.

### `fs-zfc-proves-there-is-an-inaccessible-cardinal`

- Rejection: `(fs-zfc-proves-there-is-an-inaccessible-cardinal, gpt-5.6-terra, f2fdd752f6364fc1e7f28327bd00732fb7cb2326b7a358e0fffeacb1a01cca06)`.
- Pre-edit guard: `823532604a01b675d00c999f2e0e8334285dfed8ccbe90812ff773a6017c3ed3`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the direct rank-segment theorem F1 supplies both ZFC satisfaction and inaccessibility absoluteness. The AC definition supplies neither, and the argument already occurs in ambient ZFC.
- Repair: removed F4, its dependency, and its step-2 citations; synchronized the contract derivation and choice boundary.
- Post-edit guard/checks: `9db655c658a54b79427e6a80b8cbc40c0a38cc434eb0423155a3eb896a867f1d`; focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings.
- Defect ledger: appended matching row `p2-next20-step7-h-inaccessible-nonprovability-remove-ac`.

### `thm-lc-strong-compactness-product-measure-extension-interface`

- Rejection: `(thm-lc-strong-compactness-product-measure-extension-interface, gpt-5.6-terra, ef23acf58387cb2444fa9c42d7d0f74b42ad63f7686a8be23fdb086d97513247)`.
- Guard: `eca5b0b47f290a8d8986a993b7099e27d0da12e515789c4bbb8ff1026cc8e4dd`.
- Outcome: `confirmed_nonfatal`.
- Evidence: steps 2.1-3.1 expressly avoid using F2/F3 as black boxes under a finite ground theory. For a fixed finite target Δ, they expand the fixed construction proofs, instantiate Boolean truth and name construction only at the finitely many actual formulas and subformulas, replace extension-ZFC appeals by those actual instances, and collect the finite ground premises as Γ. Steps 4.1-7.1 reflect that Γ, form the countable collapse, and invoke only this proved finite-fragment version. The proof is compressed at a metamathematical load-bearing point, but the cited-interface objection is answered in the text.
- Change/check: fatal-only stage; no content or contract change. Focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings; the guard is unchanged.

### `thm-lc-laver-function-existence`

- Rejection: `(thm-lc-laver-function-existence, gpt-5.6-terra, 0116344079d889e90a97be612cb3e5cd69d70b09199dcb9bbb64b2d1068d25bb)`.
- Guard: `37ac7ee1fa7624975cc9ca4a4310182bb2340a03e7087827b0846a5b891d7efc`.
- Outcome: `false_positive`.
- Evidence: `items/thm-lc-supercompactness-closed-embedding-characterization.md` states an equivalence between λ-supercompactness (the normal fine measure supplied by its direct definition) and existence of a λ-closed critical-κ embedding. Its forward proof steps 1.1-3.1 construct exactly that closed ultrapower. Thus F2 licenses the measure-to-closed-embedding direction the rejection says is absent. Laver proof steps 1.3/2.1 prove the factor fixes the required hereditary-size class, while 2.2/3.1 prove agreement on all bounded candidate measures and their evaluations; 4.1-6.1 then execute the least-failure contradiction.
- Change/check: fatal-only stage; no content or contract change. Focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings; the guard is unchanged.

### `thm-lc-supercompact-preparation-interface`

- Rejection: `(thm-lc-supercompact-preparation-interface, gpt-5.6-terra, 176d4ba20ed13c3487305b028fb6ed7e3aaaa2e32ae6cdbda94031f8b26ec50c)`.
- Guard: `9cc7e1ac61f8f582a0f66d662bd07451926f9b80f1ee044189abebe39cd952d9`.
- Outcome: `false_positive`.
- Evidence: “Laver anticipation function” is the defined term in `items/def-lc-laver-anticipation-function.md`: for every set x and every requested cardinal bound λ it supplies an embedding with critical point κ, `j(κ)>λ`, λ-sequence closure, and `j(ell)(κ)=x`. F1's theorem asserts existence of exactly such a function. Instantiating x with `(qdot,chi)` and λ with χ is precisely steps 31.1-32.1; no stronger interface is used there.
- Change/check: fatal-only stage; no content or contract change. Focused precheck passed; strict item-scoped proof-contract validation reported 0 errors and 0 warnings; the guard is unchanged.

## Reader-warning dispositions

- `s8a-eca6cb67c86986846387540e` — `covered_by_rejection`: the exact confirmed-fatal rejection for `thm-constructibility-is-absolute-and-l-is-minimal` licensed the direct Separation repair.
- `s8a-3804cf0169a47165d2120e62` — `nonfatal`: the Laver proof's steps 2.2-5.1 supply the bounded measure/evaluation absoluteness and transformed least-failure recursion, albeit compactly.
- `s8a-556b2f158c0042842d3cf10f` — `nonfatal`: preparation steps 11.1, 12.1, 23.1-25.1, 33.1, and 42.1 contain the flagged common-extension, regularity, activity-absoluteness, and set-sized measure-descent arguments.
- `s8a-4c4531c88202fc9fdf92d331` — `nonfatal`: product-interface steps 2.1-3.1 give the fixed-proof finite-fragment extraction and steps 4.1-7.1 use it.
- `s8a-ada52bb597c32a51c959863c` — `nonfatal`: each truth node is an actual realizing structure's restriction, and step 4.1's regularity argument simultaneously covers any fewer-than-κ family, including each logical-validity and substitution family.
- `s8a-47057519c08dd835e50fdc91` — `nonfatal`: `r<=a meet b` and upward closure prove the inference; “bounds r above” is awkward wording only.
- `s8a-1bce10f066b7a589c60d1229` — `nonfatal`: the graph injection and an infinite bound already cover finite bases and exponents; finite values at least two are plainly below uncountable κ.

## Cross-group alerts

None. Every inspected dependency outside the group was sound for the use made of it; no cross-group row was appended.

## Rejudge targets

The engine should rejudge exactly these 22 repaired items:

- `thm-constructible-universe-basic-axioms`
- `thm-constructibility-is-absolute-and-l-is-minimal`
- `thm-constructible-inner-model-semantic-and-formal-schema`
- `ex-first-constructible-levels`
- `ex-definable-subsets-of-omega-are-not-all-subsets`
- `thm-canonical-definable-global-well-order-of-l`
- `thm-constructible-universe-satisfies-choice`
- `thm-generic-extension-transitivity-and-rank-bound`
- `lem-names-for-pairs-functions-and-ordinals`
- `ex-boolean-valued-one-bit-name`
- `def-lc-inaccessible-and-mahlo-cardinals`
- `cor-lc-large-cardinal-implication-ledger`
- `lem-lc-scott-quotients-are-sets-and-membership-is-setlike`
- `thm-lc-strong-compactness-covering-embeddings`
- `def-lc-weakly-compact-cardinal`
- `thm-lc-weak-compactness-infinitary-logic`
- `thm-lc-supercompactness-closed-embedding-characterization`
- `lem-lc-generic-evaluation-of-measurable-densities`
- `ex-lc-normal-measure-identity-and-successor`
- `ex-lc-first-inaccessible-is-not-mahlo`
- `lem-lc-fine-measure-coordinate-family`
- `fs-zfc-proves-there-is-an-inaccessible-cardinal`

## Validation and sources

- Focused precheck: all 20 repaired proof-bearing items passed; the two repaired definition items are not proof-bearing precheck targets.
- Strict proof contracts: batch 13 passed 36/36; batch 14 passed 48/48. Stale quotations in owned consumers of the two repaired definitions were refreshed to their exact current Definition clauses.
- Step-7 scope check: 625 items partitioned, 0 open rejections routed, and 43/43 reader warnings/alerts dispositioned across the currently completed groups.
- Step-7 edit guard: 80/80 repository changes since `pre-step7` were licensed; no created or deleted item was reported.
- Defect ledger: every one of this group's 22 confirmed-fatal adjudications has exactly one matching structured defect row.
- External sources: none consulted. Each decision was resolved by the complete current owned item, the exact cited repository suppliers, and the local formal/checking interfaces; no mathematical uncertainty remained after those readings.
- Blockers: none for group h. No judge, rejudge, final adjudicator, routing, retry, or stage-transition command was run.
