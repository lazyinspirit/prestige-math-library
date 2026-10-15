# Step 3a adjudication: batch 19

Run: statistical-models-experiments-62. Group: batch-19. Scope: batch 19 only.

The frozen pre/post snapshots are identical: no reader edits, touched obligations, page obligations, or reader findings. The sole decision owed is refuter:19:1. Five HIGH/CRITICAL carriers require risk review in the generated order.

Completed level 0: lem-conditional-independence-integrable-factorization. Reviewed its complete proof and all four direct suppliers (AC, bounded-function conditional independence, conditional-expectation AE classes, conditional Lp contraction). Truncation is dominated by |U|; both errors tend to zero in L1, and the bounded conditional factor preserves convergence. Zero and constant cases hold; AC is inherited only through CE existence. No defect. Recorded the specific risk review in the batch contract. Initial risk-report passed with 0 errors and identified the five ordered carriers.

Completed level 2: thm-discrete-treatment-potential-outcome-mean-identification. Refuter:19:1 is confirmed_nonfatal. The pre-edit raw SHA256 was 4521f5d66aa148964e830f209adbcb9844b60acc6e0256bfb17bc9ae0928c219, exactly matching both frozen item snapshots. The routed observed digest is 1c52c69c502e4c38451e6daae5d534171c57be545a343e053a30cd67446bb2eb; it is preserved as supplied rather than mislabeled as a raw hash. The original inference is false: take constant L, independent fair A, and either independent fair (Y^0,Y^1) or Y^0=Y^1=B for fair B independent of A. Both observed laws have independent fair A,Y, yet P_a(Y^0=Y^1) is 1/2 versus 1. All identification hypotheses hold. This does not refute the causal-mean conclusion.

Repair: clarify that P_a is a treatment-stratum probability on F; replace the final inference with equality of the observed joint law Q_a of (L,Y)|A=a. Under common Q_a, CE event-integral uniqueness gives the same mean class under P_{a,L}; positivity transfers it to P_L. Statement formula, hypotheses and causal conclusions are preserved. Updated contract derivation 5.1. No judge record was present. Repair confidence: 1.

Reviewed all 21 direct prerequisites at their exact Statement/Definition. The event-integral argument is legitimate for unbounded v_a because v_a is P_a-integrable (bounded density relative to P); equivalence applies to its sigma(L)-measurable equality event. No inverse propensity integrability assumption is needed. Zero outcomes, constant L, per-arm probability one, excluded zero propensity, null covariates, both-arm contrasts and absolute convergence were checked. Recorded complete critical risk review before proceeding higher.

Direct consumers found by exact-ID source search: the three owned examples, the owned A page, and outside thm-standardization-identifies-a-causal-mean. The outside theorem only invokes the unchanged binary g-formula, its mean-integrability consequence and conditional-exchangeability assumptions; it makes no use of full-data stratum-law identification. The owned page only describes standardization and almost-everywhere support. These uses remain sound; no outside repair or escalation is needed. No published supplier defect was identified.

Sources: Aldous–Chewi Lecture 9, Definition 9.1, printed p.35 (web lines 2595–2602), confirms bounded conditional independence. Kang, Identification Under Strong Ignorability, assumptions lines 39–48 and standardization lines 75–86, supplies the causal argument. Its density/atom discussion is informal for continuous covariates; the reviewed local kernel proof provides the required AE formulation. The Hernán–Robins revision URL returned a web internal error, so no claim of reading it is made. Local supplier statements suffice for the repaired inference.

The theorem review was completed before the three higher-level example reviews.

Completed level 3 (first): ex-binary-confounding-standardization. Independent point counting verifies propensities 1/4 and 3/4, standardized means 6 and 5, and crude means 8.5 and 2.5. Conditional exchangeability follows from deterministic potential outcomes given L. All seven suppliers match the actual uses, including the repaired theorem. No defect; complete risk review recorded.

Completed level 3 (second): ex-positivity-failure-nonidentification. Both two-point models have the same observed triples but ATEs 1 and 1/2. Conditional exchangeability is automatic given L; each arm has a zero propensity on a positive target stratum. All eight supplier uses checked; no converse necessity assertion. No defect; complete risk review recorded.

Completed level 3 (third): ex-randomized-treatment-identification. Four-point product law yields independent assignment and potential outcomes; constant L, positive arm mass 1/2, bounded outcomes and exact consistency justify theorem use. Group means 0 and 1/2 give ATE 1/2. All seven suppliers checked; no defect; complete risk review recorded.

Decision: refuter:19:1 maps to closed defect sme62-3a-batch19-refuter1-observed-stratum-law. Route: flagged; verdict: confirmed_nonfatal; repair_confidence: 1. No additional obligation was invented for the Alpha repair.

Final local checks (all exit 0):

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-19.proof-contracts.json --require-reviewed`: 0 errors, 9 items routed; all five HIGH/CRITICAL reviews complete.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-discrete-treatment-potential-outcome-mean-identification.md`: 1 proof checked, 0 failures.
- `node tools/rendercheck.mjs items/thm-discrete-treatment-potential-outcome-mean-identification.md`: one-file YAML and real KaTeX rendering passed.
- After the final item edit, `node tools/proof-layout.mjs items/thm-discrete-treatment-potential-outcome-mean-identification.md`: 1 item, 8 steps, 0 defects.
- Canonical ledger append: one closed nonfatal row added using the serialized append tool; generated view refreshed.

A preliminary precheck `--help` invocation failed because this tool interprets it as a filename. A rendercheck `--help` invocation treated the option as an unscoped scan; no corpus results are used as validation evidence. The explicit one-file checks above are the relevant results. Neither mechanical invocation created a mathematical defect row.

No item beyond the routed theorem was edited. The manifest's item identities, dependencies, levels, titles and page order are unchanged, so it needs no content update. The theorem remains literature-derived in statement and AI-generated in proof, with its existing source URLs; no judge stamp existed or was added. The frontier dependency ledger records the actual owned consumer uses and outside consumer disposition. No published carrier was edited or found defective; the published ledger needs no entry. No blockers or owner decisions remain. Exactly one decision is supplied; the engine owns hash stamping and subsequent gates.
