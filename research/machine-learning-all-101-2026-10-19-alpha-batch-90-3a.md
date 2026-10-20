# Batch 90 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-90`. Scope: batch 90 only. Review proceeds in generated item dependency order. Four touched decisions and ten risk reviews are owed; reader findings, refuter findings, page obligations and authenticated foreign gates are empty. Reader/refuter reports are evidence, not inherited acceptance. This report records local review, not judgment or certification.

## Evidence basis

Read the batch-90 scope, generated order, reader report/findings, refute JSON, pre/post hash inventories, and current mathematical carriers and their actual suppliers. Historical pre/post hashes distinguish four reader changes; current source currency is checked separately below. Published suppliers remain read-only. Unrelated transitive supplier closures are not re-audited.

Source passages independently consulted: Achiam et al., [main paper](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf), §§3–6, and [supplement](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf), Appendix 10.1. Local finite-sum proofs are independently assessed, including where they avoid likelihood-ratio support restrictions.

## lem-finite-action-average-tv-controlled-by-kl

Checked Proof 1.1–3.1 against def-total-variation-distance-for-probability-laws, def-kullback-leibler-divergence, def-axiom-of-choice and thm-pinsker (including its proof). The positive/negative mass partition gives event TV = half-l1. Pinsker uses AC exactly as declared; the weighting argument is choice-free. Omitting zero-d states prevents 0 times infinity; infinite K is harmless, K=0 forces zero TV on positive weights, and the tangent square-root inequality handles finite positive K. Singleton states/actions and disjoint support are covered; empty state/action spaces are excluded. Main-paper §5.1 equation (7) matches the constants. No reader/refuter finding or defect identified.

Risk-only obligation; no additional decision owed.

## lem-normalized-discounted-state-occupancy-is-probability

Checked Proof 1.1–3.1 and all seven declared suppliers: finite joint MDP normalization, CMDP recurrence, discounted-cost definition, occupancy definition, bounded-return convergence, induction, and geometric series. Normalization is preserved by the finite sums. Coordinate series are dominated by the geometric series before finite summation. Time-t joint weights total one, so bounded signal expectations satisfy the bounded-return lemma. At gamma=0 the t=0 coefficient is one; zero signals and singleton models work; empty S is excluded. The reader convergence sentence is sound nonfatal exposition strengthening; no Statement changed. Supplement Appendix 10.1.1 (17)–(18) uses this normalization. Accept the current reader proof repair without further item edits.

Decision: **amended_repair**: the reader proof is accepted unchanged; its F7 contract quote was refreshed to the current bounded-return Statement.

## ex-empirical-cost-satisfaction-can-miss-population-violation

Checked Example and Verification 1.1–2.1 against the current CMDP and cost definitions. At gamma=0 only the initial cost remains: 1/10 exceeds 1/20. Ten independent rollouts all safe have probability 9^10/10^10 = 3486784401/10000000000 and empirical cost zero. Independence is explicitly in the Example; finite one-state transitions admit a normalized joint law with zero reward. This is an existence witness, with no distribution-free finite-sample guarantee, no AC and no limiting step. Reader/refuter findings empty; no defect.

Risk-only obligation; no additional decision owed.

## ex-expected-discounted-cost-does-not-imply-pathwise-safety

Checked Example and Verification 1.1–3.1 against CMDP, cost and geometric-series suppliers. Constant expected stage cost 1/10 with gamma=1/10 sums to 1/9<1/8. Seven independent safe draws have probability 9^7/10^7=4782969/10000000, so its complement is 5217031/10000000>1/2. The stated independence concerns the finite-horizon event; linearity of the population sum needs no additional independence. One state, nonempty two-action support and zero reward give a valid finite CMDP. The witness refutes a universal pathwise-safety inference without claiming every threshold/model behaves this way. No AC or unresolved source use; reader/refuter findings empty.

Risk-only obligation; no additional decision owed.

## lem-discounted-occupancy-change-bounded-by-average-tv

Checked Proof 1.1–3.1 with CMDP/occupancy definitions, probability-occupancy lemma, geometric series and geometric null-sequence supplier. Column-stochastic powers have norm one; coordinate geometric domination and finitely many coordinates justify the reader matrix convergence addition. Both product orders telescope, so the inverse exists without a hidden spectral assumption. The inverse-difference order G_new (K_new-K_old) G_old is correct; the transition triangle bound gives 2 times d_old-weighted TV. Submultiplication yields 2gamma/(1-gamma). At gamma=0 occupancies equal the common initial distribution; identical policies, singleton states and zero-probability actions cause no division. Supplement Appendix 10.1 equation (21)/Lemma 3 matches the convention. No Statement changed; accept the nonfatal proof clarification.

Decision: **accepted_repair**.

## lem-mdp-performance-difference-identity-with-arbitrary-baseline

Checked Proof 1.1–3.1 against all five current declared suppliers. The finite telescoping endpoint is -h_0+gamma^(N+1)h_(N+1); bounded f and geometric nullness remove it. The occupancy lemma applies to delta because its absolute value is bounded by norm(g)+(1+gamma)norm(f), permitting finite rearrangement. Subtraction cancels the common initial baseline; adding and subtracting d_old times the new-policy residual gives exactly the stated old-policy residual difference L. No likelihood ratios or overlapping action support are required. At gamma=0 the occupancy correction vanishes; pi_new=pi_old gives L=0. Arbitrary f, signed g and zero signals remain valid. Supplement Appendix 10.1 (20) and Lemma 2 provide context; the local algebra independently retains every residual. No AC, defect or reader/refuter finding.

Risk-only obligation; no additional decision owed.

## thm-policy-performance-bound-by-average-divergence

Checked Proof 1.1–3.1 and all eight suppliers already reviewed at actual use. The arbitrary-baseline identity retains the old-policy residual; the remainder is bounded by epsilon times occupancy l1, giving 2gamma epsilon/(1-gamma)^2. Both inequality directions follow from the absolute error bound. Finite nonempty S makes epsilon an attained finite maximum. At gamma=0, epsilon=0 or identical policies the TV bound has the correct exact/zero error; zero occupancy weights are omitted in average KL. Infinite KL is expressly assigned trivial extended inequalities, avoiding undefined 0 times infinity even when gamma or epsilon vanishes. AC is restricted to Pinsker/KL and is not imported into the TV proof. Main-paper §5.1 and supplement Appendix 10.1 give source context; the direct action-difference L is valid without likelihood-ratio support. No reader/refuter finding or defect.

Risk-only obligation; no additional decision owed.

## alg-constrained-policy-optimization

Independently checked the complete Definition, all nine prerequisites at their actual interfaces, and the justified-by lemma. Open U contains theta_k; fixed common support defines every in-domain KL and positive sampled-action ratios. Local C2 coordinates define g,u,H; symmetry and positive definiteness are separately tested. Feasible, infeasible-one-cost/nonzero-gradient, zero-gradient, non-PD and multiple-cost branches all specify an output/proposal; ordered finite domain-first search has no promise of acceptance. Optional bounded nonnegative shaping is explicit and supplies no accuracy assumption. Exact feasibility/optimization are mathematical primitives; their runtime is not claimed bounded. Main-paper §§5.3, 6.1–6.3 support the construction; lexicographic selection and finite budget are identified as local conventions in the lemma. Reader domain/symmetry clarification is accepted. Direct consumers found by full item/reference search are exactly the well-definedness lemma, approximation remark and exact-versus-sampled example: their actual uses remain valid on U, none needs editing; page placement has no mathematical use. No outside affected consumer or AC omission.

Decision: **accepted_repair**.

## lem-cpo-sample-update-well-defined-and-finite-search

Checked every Proof step 1.1–4.1 against the algorithm and seven actual compactness/linear-algebra/Euclidean suppliers. Positive dimension is required by the sphere-bound and Heine–Borel results and is present in the algorithm; the proof extra d=0 paragraph is vacuous under that interface, not a broadened input contract. Quadratic homogeneity gives coercivity, explicit coordinate estimates give continuity, and closed constraints preserve compactness. EVT yields a compact nonempty optimizer set only in the feasible branch; d successive coordinate minima give a unique lexicographic point. SPD gives trivial kernel/invertibility; completing the H-square proves the unique recovery minimizer, norm equality and decrease sqrt(2delta a). Infeasibility leaves its residual strictly positive, as stated. g=0 still has a canonical tie result; u=0, singular/non-PD H and infeasible multi-cost cases return no-step. Domain tests precede evaluations; fixed support makes them finite and L=0 permits one test. At most L+1 tests counts search only, explicitly not exact subproblem runtime or population safety. AC is retained only from the theoretical comparison. Main-paper Algorithm 1/equations (11),(14) motivate but do not certify local tie/budget conventions; no finding or defect.

Risk-only obligation; no additional decision owed.

## rem-cpo-implementation-is-approximate

Checked the complete Remarks and its three actual suppliers. The reader's event-link qualification is correct: a generic discounted cost controls only its expectation; relating it to a violation event requires an explicit relation. Both branches of the exact bound retain their stated AC scope. Sampling, local quadratic approximation, numerical solves and optional shaping provide no estimator-error or population-safety theorem. The separate practical CG discussion is supported by the paper; the local exact procedure's lemma explicitly distinguishes exact mathematical operations from numerical implementations. All hyperlinks follow the complete Remarks in `Remarks references`. **accepted_repair**; no further carrier edit.

## ex-exact-trust-region-and-sampled-line-search-disagree

Checked Proof 1.1–3.1 and all eight suppliers at actual uses. At gamma=0, old/proposed costs are 1/100 and 1/5; old advantages are -1/100 and 99/100, so adding the new-policy advantage expectation to old cost gives exactly 1/5>1/20. Full support makes K=(1/5)log20+(4/5)log(80/99) finite; the logarithm integral gives log20<19 and log(80/99)<0, hence K<4. With probability 99/100 a one-row safe sample permits zero baseline and cost-advantage inputs; its empirical cost test is zero. The example is explicitly conditional on proposing that policy and asserts passing this sample cost check, not that zero estimates force the QP to generate it or certify all population conditions. Common positive support permits both policies in an open Bernoulli parameter domain. No false claim of unbiasedness, full acceptance or convergence; AC is explicit. Reader algorithm domain clarification preserves this use. No defect or reader/refuter finding.

Risk-only obligation; no additional decision owed.

## Historical comparison and metadata amendments

All four touched preimages were found in `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` and independently matched to the native pre-reader raw SHA. Their current raw source bytes match the native post-reader hashes. Thus no historical-content uncertainty or current-content owner exception is used. The two convergence edits are polish; neither historical proof claims a false conclusion. The algorithm domain ambiguity and remark event qualification are nonfatal corrections. Four closed defect rows record these distinct dispositions, owned at `3a-adjudicate`, with confidence 1.

The first strict contract check found three stale quotation mirrors: occupancy F7 versus the current bounded-return Statement, and the exact-versus-sampled example F6 and update lemma F1 versus the clarified algorithm Definition. Refreshed only those quotation strings to actual current sections. No item, dependency, manifest, provenance, claim strength or published status was changed by Alpha. The occupancy decision is `amended_repair` because its contract was amended; the other three touched carriers are `accepted_repair` (risk-only additions excepted). Mechanical quote failures do not create defect-ledger rows or extra routed decisions.

Additional source check: Altman, [complete text](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf), §2.2 printed pp. 23–24 and §3.1 printed p. 27: the book normalizes discounted costs by 1-alpha and starts time at 1; these carriers explicitly use an unnormalized objective and occupancy normalized by 1-gamma starting at 0. The convention difference is accounted for, including gamma=0 by the local proof.

## Consumer, presentation and diagram disposition

The reader algorithm Definition change was checked against every direct item dependency/reference consumer found by searching current `items/` and `library/`: the well-definedness lemma, approximation remark and exact-versus-sampled example. All actual mathematical uses are compatible; only stale contract quotations required refresh. No consumer Statement/Definition changed and no outside repair is required. Five owned cross-batch item-use records were updated after actual supplier review; existing page-only open status remains present. The frontier dependency ledger records these dispositions. Stable IDs, inventories and proposed withdrawals are preserved.

The four touched carriers and all ten risk carriers have complete uninterrupted claim/description sections, with all links afterward. Both page carriers remain frontmatter-only with `page_layout: compact-v1`, unchanged inventories and no summaries. No TikZ/tikzcd or other authored mathematical diagrams occur in this scope, and these finite-sum arguments need no added diagram. No defective published supplier was identified at the inspected uses; no published carrier or published-consumer ledger was edited.

## Local validation and handoff

- Initial risk report: 16 items routed, ten HIGH/CRITICAL reviews required. Final `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-90.proof-contracts.json --require-reviewed`: zero errors, all ten reviews complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-90.proof-contracts.json --strict`: initial three quotation mismatches corrected as recorded above; final zero errors/warnings, 16/16 checked.
- Explicit manifest-selected `node tools/tsx-run.mjs tools/precheck.mts` over all 16 batch item paths: ten proof-bearing items checked, zero failures; remaining items have no phase proof.
- Explicit manifest-selected `node tools/rendercheck.mjs` over 16 items and two pages: all 18 files parse/render cleanly using the actual renderer and KaTeX.
- `node tools/finite-smoke.mjs research/machine-learning-all-101-2026-10-19-batch-90.proof-contracts.json`: four bounded witnesses pass, zero errors. This is finite-model evidence only.
- Final batched `node tools/proof-layout.mjs items/alg-constrained-policy-optimization.md items/lem-discounted-occupancy-change-bounded-by-average-tv.md items/lem-normalized-discounted-state-occupancy-is-probability.md items/rem-cpo-implementation-is-approximate.md`: four items, seven proof steps, zero defects. Alpha made no additional item edit or formatting change.
- All 16 current raw item SHA-256 values match the native post-reader snapshot; all four touched archived preimages match the native pre-reader hashes. Decisions are exactly the four unique routed touched obligations; all completed repairs carry confidence 1 and reference their distinct closed ledger rows. No hashes were stamped by Alpha.
- Scoped whitespace check passed. Four rows appended through the serialized defect-ledger tool with `--no-render`; shared generated ledger view refresh belongs to native closure/owner bookkeeping.

No batch-90 mathematical blocker remains. Active `.autopilot/` status and current Git log were inspected; the live run still has unrelated collection/split blockers (57, 91 and 80 at inspection), which this worker did not control. No judge, stamp, certification, dispatch, stage transition, publication or commit was initiated. Engine current-hash sealing and native gates remain outstanding.
