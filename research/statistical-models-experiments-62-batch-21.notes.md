# Batch 21 — Standardization and IPW identification

Run: statistical-models-experiments-62 · role: beta · batch: 21 · assigned page dependency level: 1 · prerequisite batch: 19. The dispatch scheduling input was be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d.

## Controlling plan and reconciliation

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the beta task and dependency-order task, the owner authoring direction, the assigned SME-21 design, plan-spec.json, the generated page manifest, the Step-1 drift evidence, the SME-03 source dossier, and the SME-21 pair-audit row. The owner authoring direction controls stale design text; the plan controls conflicts among pair designs.

The A/B page order, titles, category, companion, and requires arrays match plan-spec.json. No metadata conflict exists.

The current plan contains an internal claim overlap: SME-19 also requires the standardization identity E[Y^a]=integral E[Y|A=a,L] dP_L, while SME-21 independently requires a standardization functional and its identification proof. SME-21 retains its full assigned claim and proves it locally from the assumptions. It does not use SME-19's planned theorem thm-identification-by-consistency-exchangeability-and-positivity to prove the same statement. The owner should reconcile whether the duplicate theorem is intentional and confirm item placement.

The older models-03 dossier proposes continuous-treatment density formulas and only a single overlap-failure B example. The controlling SME-21 plan restricts the proved identity to a fixed discrete or atomic treatment value, warns that continuous-treatment RCD formulas identify only almost everywhere without further version assumptions, and explicitly requires examples of extreme weights and truncation changing the target. This batch follows the controlling plan and keeps continuous-treatment density formulas out of scope.

## Inventory, logical dependencies, and levels

The assigned manifest contains five A items and four B examples, below the 100-item page cap. The A-page suppliers were authored before their consumers.

| Level | Items |
|---:|---|
| 0 | alg-standardization-for-a-causal-mean; alg-inverse-probability-weighting-for-a-causal-mean; lem-conditional-treatment-indicator-factorization |
| 1 | thm-standardization-identifies-a-causal-mean; thm-inverse-probability-weighting-identifies-a-causal-mean; ex-positivity-failure-prevents-standardization-and-ipw-identification |
| 2 | ex-standardization-and-ipw-two-strata-calculation; ex-extreme-ipw-weights-under-poor-overlap; ex-weight-truncation-changes-the-ipw-target |

The algorithms define the observed-law functionals with their well-definedness conditions. The local factorization lemma extends the bounded conditional-independence identity to integrable outcomes by truncation and L1 convergence. The two identification theorems use that lemma. The examples use the resulting functionals and results, except the positivity-failure example, which constructs two compatible full-data laws directly and uses the factorization lemma to show why the unsupported stratum cannot be recovered.

The full-run item-level checker reports the nine assigned levels with no local dependency errors when run on this batch manifest. The whole-run checker cannot close yet: other assigned page manifests still have empty inventories, and it reports pre-existing level mismatches for alg-response-probability-weighting, thm-missing-at-random-weighting-identity, and def-pattern-mixture-sensitivity-parameter. These are outside batch 21 and remain with their owner.

## Mathematical argument, assumptions, and axiom use

For one fixed atom a, the A page assumes consistency Y=Y^A, Y^a in L1, conditional exchangeability of the potential-outcome vector with A given sigma(L), and e_a(L)=P(A=a|L)>0 almost surely. It does not assume a uniform lower bound on e_a. The standardization proof identifies E[I_aY|L]=e_a E[Y^a|L] and divides only on the full-measure positive-propensity set. The IPW proof additionally establishes I_aY/e_a in L1 using H_n=min(n,1/e_a), monotone convergence for the absolute outcome, and dominated convergence for the signed outcome. Thus both population identities are well-defined for merely integrable Y^a and arbitrarily small positive propensities.

The proofs use AC only through the repository's conditional-probability and conditional-expectation existence conventions; def-axiom-of-choice is declared in the relevant dependencies. Conditional expectations are used as almost-sure classes. The local proofs make no further selection from arbitrary nonempty families.

The worked examples verify: (i) both functionals equal 2 in a two-stratum model; (ii) for every epsilon>0 the IPW mean remains 1/2 while the weight 1/epsilon and its population variance diverge as epsilon decreases to zero; (iii) capping weights at 3/2 changes the raw population functional from 1 to 3/8 and the normalized one to 6/11; and (iv) with e_1(0)=0, two compatible laws have the same observed distribution but target means 1/2 and 3/2. No example claims finite-sample consistency or validates estimated or truncated weights.

## Unresolved batch-19 supplier checks

At handoff, batch 19's potential-outcomes-and-causal-identification manifest still has items: [] and the assigned supplier item files do not exist. The following exact planned interfaces remain unresolved:

- def-potential-outcome-model-and-causal-estimand on the batch-19 A page must be checked for its treatment-atom convention, consistency Y=Y^A, integrability of Y^a, and full-vector conditional exchangeability.
- def-causal-identification-and-partial-identification on the same A page must be checked for its target and observed-law identification convention.
- The planned thm-identification-by-consistency-exchangeability-and-positivity has not been inspected. It states a standardization result overlapping SME-21's claim; it is not used as a proof supplier here.

The missing definitions affect both SME-21 identification theorems and all four examples' potential-outcome interpretation. The claims, arguments, and B examples are drafted in full against the declared hypotheses; their exact supplier excerpts and acceptance are not invented. Proposed placement for the definitions is the batch-19 A page at order 1954. The batch-19 body checks remain escalated for owner reconciliation.

The four other A-page prerequisites are present and their actual relevant item bodies were checked: statistical-experiments-models-and-identifiability, conditional-expectation, and probability-spaces-random-variables-and-expectation, including the conditional-expectation tower, conditional-expectation algebra, conditional independence, indicator expectation, conditional-probability definition, and the published identifiability suppliers.

## Source reading and retrieval

The coverage file records two independent textbook treatments, exact locators, nine harvested results, and each result's disposition. I inspected the complete relevant reasoning in Hernán–Robins, Chapter 2 Technical Points 2.2–2.3 and Chapter 3's exchangeability, positivity, consistency, and Technical Point 3.1 passages. I also inspected the relevant theorem statements and complete proof steps in Chapters 9–10 of The Mathematics of Indirect Treatment Comparisons. The latter source uses a binary treatment, square-integrable outcomes, and a uniform overlap bound; those stronger hypotheses are not imported into the local proofs.

source-fetch-check --stamp succeeded for both full texts on the first attempt; the final check reports 2/2 fetch-verified and 2/2 resolved. The 365-page Hernán–Robins PDF is stamped at 11,315,465 bytes with SHA-256 prefix a1067af923e9156b; the full-text chapter HTML is stamped at 218,525 bytes and 104,213 text characters with SHA-256 prefix 67078fd36e7dac83. No retrieval failure, recovery retry, source drop, or owner source-resolution record was needed.

## Scoped checks and readiness

- Precheck: 7 proof-bearing items checked, 0 failures.
- node tools/proof-layout.mjs on all 9 changed items: 9 items, 26 steps, 0 defects.
- Rendercheck: 11 assigned item/page files checked, 0 errors and 0 warnings.
- Content policy: 9 assigned items, 0 errors and 0 warnings.
- Coverage checklist: 1 A page, 9 harvested results, 0 errors and 0 warnings.
- Focused item dependency calculation: 9 items, no errors; levels match the inventory above.
- Strict proof-contract check: all 9 items are structurally checked. Its only 8 errors are the uncontracted A1/A2 wikilinks to the absent batch-19 supplier carriers; no supplier excerpt was fabricated. The exact pending supplier/item/step records are retained in the contracts.
- Focused depcheck: 25 errors, all from the missing def-potential-outcome-model-and-causal-estimand and def-causal-identification-and-partial-identification dependencies and wikilinks recorded above. No cycle or other defect is reported in batch 21.
- Whole-run item-level check remains open on empty inventories and the three unrelated level-label mismatches listed above.
- The read-only batch dependency recomputation is blocked by malformed YAML in five unassigned batch-60 items whose sources.references title values contain an unquoted colon: items/def-gaussian-mixture-confidence-sequence-boundary.md:19, items/lem-gaussian-exponential-mixture-integral.md:26, items/lem-gaussian-mixture-boundary-crossing-equivalence.md:24, items/thm-gaussian-mixture-test-supermartingale.md:27, and items/thm-subgaussian-mixture-confidence-sequence.md:29. No batch-60 files or shared dependency-level artifact was edited.

step1-decisions.mjs record without --owner succeeded for the two algorithm definitions and the local conditional-indicator factorization lemma; their three records are ready. Six escalated-record attempts for the identification theorems and four examples failed before writing because the readiness tool's dependency scan hit the same malformed batch-60 YAML listed above. No readiness records were created for those six items. Their required disposition is escalation pending actual batch-19 supplier bodies, exact excerpts, and owner reconciliation of the overlapping SME-19 standardization theorem. No --owner flag was used, and the three written records are authoring/readiness evidence, not approval.

No published content, shared plan, another pair's files, engine state, or verdict was changed.
