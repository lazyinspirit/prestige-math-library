# Batch 11 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-11`. Scope original group `d` retained. One owed obligation: `touched:11:thm-equal-cluster-size-design-effect`; no reader/refuter/page obligations. The generated dependency order governs the four risk reviews. No agents dispatched and no judge, stamp or gate cycle initiated.

## Level 4: equal-size design effect — accepted_repair

Read the current Statement, Facts and Proof 1.1–3.1 and all four direct suppliers: `def-cluster-sampling-design-and-cluster-totals`, `def-moments-variance-and-covariance`, `thm-covariance-bilinearity-and-symmetry`, `thm-variance-of-a-finite-sum`. Independent covariance expansion verifies the necessary rho range and both variance formulas; the denominator is strictly positive. Checked k=1, m_c=2, rho=0 and both endpoints. The lower endpoint gives zero cluster variance with a positive reference variance; the upper endpoint gives DEFF=m_c. Empty averages and sigma^2=0 are excluded; no AC or converse is required.

The exact preimage is `research/statistical-models-experiments-62-owner-sampling-consumer-archive/fe0a2346283b79b134e47b696d5144c52d557b284570025436fd1c49011d2698.source`; its raw hash equals the immutable pre-reader hash. Current raw hash `5f963ef510122cf9b7e26a555efe7421cc9b1ce7147762caa5a0a83442b0fa1c` equals the immutable post-reader hash. The diff consists of Facts paragraph reflow and a clarified Remarks paragraph; Statement, numbered proof and dependencies are identical. Original contract and manifest snapshot hashes are identical pre/post. No historical delta is unknown.

Source checked independently: [Shalabh, Sampling Theory, Chapter 9](https://home.iitk.ac.in/~shalab/sampling/chapter9-sampling-cluster-sampling.pdf), PDF pp.6–7, efficiency derivation and rho=0 bullet. Its E is reference variance divided by cluster variance after large-population approximations. The current remark reasonably reads the ambiguous phrase as equality of efficiency and explicitly excludes zero sampling variance. Accept this contextual polish with repair_confidence=1; no confirmed mathematical defect or defect-ledger row is invented. No Statement/Definition change triggers consumer repair. The exact superpopulation calculation is supported locally; the source's finite-population approximation is not substituted for it.

Risk review recorded complete in the owning batch contract before proceeding higher.

## Level 4: SRSWOR cluster total — risk review complete

Read Statement and Proof 1.1–3.1 with the already opened four direct suppliers. Subset counts, indicator covariance, unbiasedness and the fixed-size centering argument are correct. M=2, totals (0,2), m=1 gives equally likely estimates 0,4 and variance 4; census and equal totals give zero variance. M=1 is explicitly excluded from S_T^2. Shalabh Chapter 9 pp.4–5 gives the corresponding cluster-mean calculation; total scaling gives the locally proved formula. No AC or positive pair inclusion is needed. Reader/refuter routed no finding and the item is untouched, so no decision is owed. Recorded its complete risk review before level 5.

## Level 5: two-stage expansion total — risk review complete

Read the current Statement and all eight steps, the product-design Definition, all ten direct suppliers, and the two suppliers used by the conditional-variance decomposition proof. H and K satisfy the conditional-expectation event identities on unions of first-stage fibers; every random variable has finite second moment on the finite support. The stated AC covers the supplier branch. Stagewise covariance expansions include diagonal terms. Conditional independence cancels cross-PSU residual terms, leaving sum_i V_i/pi_i. Positive pair inclusion is not assumed or divided by.

Checked empty selected samples, zero values, zero pair inclusion, census at either stage and M=1. For M=1 with selection probability p, the formula gives (1-p)T_1^2/p+V_1/p; the census specialization p=1 gives V_1. The existing contract's `one` worksheet describes only the p=1 sole-PSU case; its wording must not be taken as deducing pi_1=1 solely from M=1. The complete risk review explicitly checks the more general admitted case. No theorem/proof defect follows, and no item edit or decision is owed.

Sources read: [Shalabh Chapter 10](https://home.iitk.ac.in/~shalab/sampling/chapter10-sampling-two-stage-sampling.pdf), PDF pp.1–7, especially successive conditioning p.4 and equal-size variance p.5; [linked Lohr scan](https://drive.uqu.edu.sa/_/maatia/files/Sampling.pdf), §5.3 printed pp.145–150 and §6.6 printed pp.204–210, especially Theorem 6.2 pp.205–206. The former is a specialization; the latter has the independent-stage unbiased expansion and variance formula. Theorem 6.3 concerns variance estimation and is not invoked. Read the actual scan and locators; the bibliographic edition label was not independently authenticated.

Complete risk review recorded before the last level-5 item.

## Level 5: unequal-size counterexample — risk review complete

Read all four steps with the five exact suppliers. Sum n_i^2=5M gives E_B S_T^2=5 sigma^2. Centering at the element population mean gives E_B S_U^2=sigma^2(2M-5/2)/(2M-1). The level-4 SRSWOR theorem applies to both the original PSU partition and the singleton-PSU partition; their model-averaged design variances have ratio (5/2)(2M-1)/(2M-5/2). At M=100 it is 199/79 and for fixed k it tends to 5/2. This refutes the arithmetic-mean substitution under the explicitly defined ratio-of-model-averaged-variances convention. It matches expected SSU count, not a fixed count in each cluster outcome. Checked smallest even M=4, k=1, size-one clusters with no within pair, rho=1, and excluded census/zero-variance ratios. No choice or iff premise is used.

Sources checked: Shalabh Chapter 9 PDF pp.11–14 distinguishes biased unweighted cluster means from population-size-weighted unbiased expansion; linked Lohr scan §5.2.2 pp.139–141 derives the equal-size comparison. Neither source is misrepresented as containing this particular authored witness. Reader/refuter routed no findings; no extra decision is owed. Recorded the complete risk review.

## Audit enrichment and consumer maintenance

No item, page, manifest, Statement or Definition was edited by this adjudicator. Four risk reviews were added to the batch contract. Two boundary worksheet details were enriched: the SRSWOR constant-total variance locator is now step 3.1; the two-stage sole-PSU worksheet now explicitly separates census pi_1=1 from a design allowing an empty sample with pi_1=p<1. The old entry described the census specialization with insufficient qualification; the theorem and proof already cover the general case. These are audit_enrichment updates; they create no new mathematical acceptance or finding disposition and do not close any reader/refuter/ledger defect.

The finite-population supplier Definition and its induced-law lemma were independently opened: the observed-law proof verifies normalization and countable additivity using finite preimages. Owned cross-batch consumers use only the fixed finite population, positive-support normalized design and finite sums. No current supplier defect was found, no supplier or consumer interface changed, and stable IDs/withdrawals are retained. The prior author-readiness reconciliation is historical context; the current interface review supplies the present evidence.

Published suppliers were read-only. No defective published carrier was established, so no published-ledger entry or lock was needed. No confirmed mathematical defect was established; no defect row was manufactured for source-context polish or worksheet enrichment. Exact one-decision output retained.

## Validation and limits

Focused checks completed with exit code 0: `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-11.proof-contracts.json` (four high/critical subjects), the same command with `--require-reviewed` (0 errors, all four complete), `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-11.proof-contracts.json --strict` (7/7 checked, 0 errors/warnings), batch-scoped precheck on the seven explicit item paths (5 proof-bearing items checked, 0 failures), and final `node tools/proof-layout.mjs items/thm-equal-cluster-size-design-effect.md` (1 item, 4 steps, 0 defects). No item was edited by this adjudicator, so no formatter was needed. The final layout check covers the reader-touched carrier. This review reads the direct prerequisites and the two local conditional-variance proof suppliers; it does not claim a fresh audit of every transitive measure-theory proof. Source screenshots failed through the web cache; the full relevant source pages were subsequently read from downloaded PDFs using PyMuPDF. No gate battery, judge cycle, decision hashing or certification was performed; the engine owns those transitions.

No mathematical blocker or outside repair remains. No additional obligations were created. The owning batch contract and cross-batch evidence, and the marked shared frontier-ledger record, contain the current review evidence.
