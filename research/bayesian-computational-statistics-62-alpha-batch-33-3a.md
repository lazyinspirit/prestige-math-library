# Batch 33 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-33`. Scope: five touched obligations; no page, reader, or refuter findings. Review and risk records follow the dispatched dependency order.

## lem-common-submeasure-and-bounded-radon-nikodym-density

Checked all four steps against the actual RN existence/nonnegative-version, additivity, monotonicity, simple approximation and MCT statements. Finite rho,sigma make lambda and every dominated theta finite, so all RN exhaustion hypotheses hold under the explicit AC assumption. Uniqueness gives f+g=1 a.e.; the measurable null-set replacement works even for lambda=0 and the empty space. For each threshold set, theta(E_n)<=rho(E_n)<infinity forces lambda(E_n)=0 without subtracting infinities. With h=min(f,g) as displayed in the statement, maximality follows; step 2.1 separately proves eta is a measure. The threshold formula for a covers c<0, 0<=c<1 and c>=1, including f=0, and af=h proves the derivative by simple approximation/MCT. No new defect; notation h is identified immediately by the displayed minimum. Hunter Theorem 6.27 and full proof pp.75-77 checked independently; it supplies RN, not the minimum formula.

No decision owed for this untouched, unflagged carrier. Risk review complete; next: the following dispatched item.

## lem-common-submeasure-density-is-pointwise-minimum

Checked all five steps and every cited dependency statement. Sigma-finite lambda and finite theta<=rho supply the RN hypotheses under AC; finite-valued nonnegative densities ensure threshold sets are measurable. On E_n and G_n the finite bounds rho(E_n),sigma(G_n) exclude infinity cancellation and force nullity; their countable union is null. Restriction off that union, null-set integrals and monotonicity prove domination on every measurable A. eta is a finite measure and is itself dominated by both inputs, establishing greatestness. Zero measures, empty E and disjoint density supports satisfy the same argument. No defect. Hunter Theorem 6.27 pp.75-77 checked for RN hypotheses and uniqueness; the pointwise minimum argument is local.

No decision owed for this untouched, unflagged carrier. Risk review complete; next: the following dispatched item.

## alg-metropolis-hastings-kernel

Reviewed the complete Definition, all four operational instructions and actual supplier statements. Inputs specify AC, standard Borel X, probability target and probability kernel; the joint-law supplier gives finite proposal flow, and rectangle preimages make swap measurable. The reviewed common-submeasure lemma supplies normalized finite nonnegative f,g and a jointly measurable [0,1] derivative, including the f=0 branch; output P and integrated rejection are explicit. RN version changes preserve accepted flow but may affect pi-null starting rows, as the Remarks correctly qualify. The justified_by theorem supplies pointwise row normalization and measurability; no prerequisite self-cycle or unproved convergence property is asserted. Roberts-Rosenthal section 2.1 pp.4-6 corroborates the density specialization, not the arbitrary-flow construction. Owen endpoint unavailable; no reliance on its unseen contents.

No decision owed for this untouched, unflagged carrier. Risk review complete; next: the following dispatched item.

## lem-metropolis-hastings-density-ratio

Checked all five steps, sigma-finite product/Tonelli, pi-system uniqueness and RN integration/uniqueness statements. Finite p,q make both flow densities finite and measurable; the proof establishes section measurability and each density identity, not just rectangle equality. Increasing finite lambda exhaustions give finite square exhaustions for product-swap uniqueness, including zero/infinite rectangle factors under 0*infinity=0. Simple approximation justifies change of variables and density integration. min(m,mT) is the greatest common-flow density by the independently reviewed lemma. The explicit m=0 branch is measurable, satisfies alpha*m=h, and is only identified with the algorithm mu-a.e.; no pointwise uniqueness is claimed. Roberts-Rosenthal section 2.1 pp.4-5 checked for the ratio, zero convention and symmetric-minimum calculation. No defect.

No decision owed for this untouched, unflagged carrier. Risk review complete; next: the following dispatched item.

## thm-metropolis-hastings-kernel-is-reversible-and-invariant

Read all seven proof steps and exact supplier statements, including the full current two-marginal reversibility-implies-invariance proof. Bounded measurable alpha makes a,r measurable and covers acceptance endpoints 0 and 1. Each accepted section is a measure and each rejection term is a scaled point mass; their sum has mass one at every x, including pi-null rows. Diagonal pushforward R is well-defined without requiring the diagonal subset to be measurable. The joint-law integral identity gives J_P=eta+R on every product-measurable set. Swap preimages preserve disjoint unions, so eta^T is a measure dominated by both proposal flows; greatestness and involution give eta^T=eta. R is symmetric because swap fixes the diagonal map. The invariant-law supplier therefore applies with exactly its pointwise probability-kernel hypotheses. Empty state space is excluded by the target probability. No hidden irreducibility, uniqueness or convergence assumption is used. The reader expansion of the pushforward measure check is elementary audit enrichment, not a mathematical defect.

Verdict: `reviewed_no_defect`; `change_kind: audit_enrichment`; no defect IDs. Risk review complete. No item edit required.

## ex-independence-metropolis-hastings

Checked all five verification steps and finite-discrete/counting-measure suppliers. Finite counting measure is positive and sigma-finite; all functions are measurable and each proposal row sums to one, satisfying the density-ratio lemma pointwise. Positive target masses make all proposed edges non-null, so algorithm and common-density versions agree there. Independent recomputation gives acceptances 1/3 and 1, accepted 0-to-1 mass 1/6, diagonal 0 mass 5/6 (including the accepted self-proposal), and row 1=(1/2,1/2). Off-diagonal target flows both equal 1/8; rows and target are normalized and pi P=pi. The reader sigma-finiteness and kernel-property expansions are immediate consequences of the fixed finite discrete model and are audit enrichment.

Verdict: `reviewed_no_defect`; `change_kind: audit_enrichment`; no defect IDs. Risk review complete. No item edit required.

## ex-metropolis-hastings-proposal-support-failure

Checked all four steps and actual finite-discrete/counting-measure suppliers. Uniform target and deterministic proposal are valid probability inputs on a finite standard-Borel space, and finite counting measure supplies sigma-finiteness and jointly measurable densities. Every positive proposal edge has equal positive reverse flow, so acceptance equals one there. The ratio convention on absent edges cannot create transitions because Q=0. The resulting swap-plus-absorbing-state matrix has normalized rows and columns; both the uniform target and delta_2 are invariant. Powers preserve the two components {0,1} and {2}, proving the stated failure of reachability and uniqueness without confusing invariance with irreducibility. The reader additions merely expand elementary finite-space prerequisites; audit enrichment, no defect.

Verdict: `reviewed_no_defect`; `change_kind: audit_enrichment`; no defect IDs. Risk review complete. No item edit required.

## ex-metropolis-hastings-rejected-self-transition

Checked all four steps with the actual density-ratio, kernel and finite-counting suppliers. The two-state space is standard Borel, counting measure is finite/sigma-finite, and the deterministic flip is a measurable probability kernel. Both target masses are positive. Independent exact calculation gives acceptance 1/2 for 0-to-1 and 1 for 1-to-0. Rejected mass 1/2 goes to P(0,0); state 1 has no rejection and diagonal zero. The matrix rows sum to one, both off-diagonal target flows equal 1/3, and pi P=pi. Values of acceptance on zero-proposal diagonal pairs are immaterial. The reader expansions of finite sigma-finiteness and event measurability are audit enrichment with no substantive defect.

Verdict: `reviewed_no_defect`; `change_kind: audit_enrichment`; no defect IDs. Risk review complete. No item edit required.

## ex-random-walk-metropolis-hastings

Checked all six verification steps and exact finite-space, counting-measure and density-ratio prerequisites. The neighbors x+1 and x-1 are distinct modulo 3, giving two proposal masses 1/2 and valid rows. Finite counting measure is positive/sigma-finite; p,q are finite and jointly measurable. Positive target masses imply agreement of RN versions on every proposed edge. All six acceptances recompute to 2/3,1/3,1,1/2,1,1; rejections are 1/2,1/4,0. The displayed rows follow, sum to one, and have balanced target flows 1/6,1/12,1/12, hence pi P=pi. Wraparound edges and the zero diagonal at state 2 are explicitly valid. Reader finite-space prerequisite expansions are audit enrichment, no defect.

Verdict: `reviewed_no_defect`; `change_kind: audit_enrichment`; no defect IDs. Risk review complete. No item edit required.

## Carrier comparison and metadata corrections

All nine current item SHA256 values equal their immutable reader-post values. Pre/post item hashes differ exactly for the five routed touched items; the other four are unchanged. The reader report records finite-counting/sigma-finiteness and kernel checks in the examples and the explicit transpose-measure check in theorem step 4.1. These are immediate finite-space and measurable-pushforward verifications, hence audit enrichment rather than a repaired substantive claim. No current item, Statement, Definition, proof body, provenance or page was changed by Alpha. The original assignment group `j` in the scope is preserved; the adjudication group is `batch-33`.

| Touched item | Pre item SHA256 | Post/current item SHA256 |
|---|---|---|
| `ex-independence-metropolis-hastings` | `d36b5f2a9518381bf1c9c2c04fa744fc8600c4d4d2cb0b827977a767a3c9bc00` | `9a1e68d4896a26b4a8b1d81d0d8cdcaf05e78180f96b12801c5fd44c75fcd189` |
| `ex-metropolis-hastings-proposal-support-failure` | `bd1d05e833272cdf8f58ae7e6ad81a0579a42da87f878543ef33438917672d49` | `d7a5c9ae48d4edec2369be7a3403590702cee78c5564f8143d87a771ef839f79` |
| `ex-metropolis-hastings-rejected-self-transition` | `942cdefbf18b9d7a0d2a784b79f3f91a5f05c28102c52eb76fd53c32b385220e` | `1c6906bbb34704e8300907f4eef63dbc92a25d0f778183a624687ad6f0216eb5` |
| `ex-random-walk-metropolis-hastings` | `41e1e96686e93cd2b5e51f7a01e3555f6b4a2e06c6e574680fd6d9ca6588d952` | `00d3ba75df0916384cd5401bd8435977ed60068ece5af4e6b1729a7e016d281c` |
| `thm-metropolis-hastings-kernel-is-reversible-and-invariant` | `e9175be21681740a35241d8141b81e64a50e4e4def662a68ac3ccf5a437d2357` | `fe206ab545b644d1f9866af654a2e04596743e0df191889eb94e637fff9f187b` |

Synchronized the five manifest dependency arrays with current item frontmatter: the theorem adds `def-measure`; each example adds `prop-counting-measure-is-a-measure` and `def-finite-sigma-finite-and-semifinite-measures`. The initial strict contract check exposed nine quotation mismatches in those same newly cited supplier entries; replaced paraphrases with exact current Definition/Statement sections. Corrected stale theorem acceptance-endpoint/AC step locators and the random-walk AC-use locator. These are mechanical metadata corrections, not defect-ledger events. All nine contracts now contain item-specific complete risk reviews.

## Supplier and page review

Read every declared direct dependency Statement or Definition against the actual uses, including RN common finite exhaustions, positive finite-valued representatives, nonnegative integral rules, sigma-finite product uniqueness/Tonelli, measurable sections and kernel integration, finite counting measure, standard Borel/Polish definitions, and the general reversibility interface. Independently read the full nonnegative-version supplier proof and the current general-state reversibility-implies-invariance proof. Batch 32's latter theorem needs only a pointwise probability kernel and target probability; theorem steps 2.1 and 5.1 establish its exact premises. The three existing cross-batch records remain valid. Both owned page summaries accurately describe the general-flow construction, a.e. version qualification, four examples and limits of invariance; no page decision is owed. No Statement/Definition changed, so no new consumer repair or propagation was triggered. Stable IDs and all prior withdrawal proposals are preserved. No outside-scope defect or defective published supplier was identified.

## Source evidence and limits

- [Hunter, Measure Theory](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf), section 6.8, Theorem 6.27 and complete proof, printed pp. 75–77 (PDF pp. 79–81): checked sigma-finite absolute-continuity hypotheses, density representation and a.e. uniqueness. Finite measures in the owned lemmas satisfy these hypotheses. The minimum-submeasure construction is proved locally, not attributed to Hunter.
- [Roberts–Rosenthal, General State Space Markov Chains and MCMC Algorithms](https://probability.ca/jeff/ftpdir/probsurv.pdf), section 2, Proposition 1 and section 2.1, Proposition 2, printed/PDF pp. 4–6: checked the normalized proposal-density specialization, zero-forward convention, rejection rule, symmetric-minimum calculation and reversibility-to-stationarity argument. The arbitrary-kernel extension is supported by the local flow proofs.
- The cited Owen endpoint `https://artowen.su.domains/mc/Ch-MCMC.pdf` returned an internal retrieval error in this review. Its contents and locator were not independently verified; no acceptance relies on unseen Owen text. Reader/refuter reported their own retrieval limits, which remain preserved.

## Local validation and handoff

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-33.proof-contracts.json`: initial routing found six CRITICAL and three HIGH items, zero errors.
- The same command with `--require-reviewed`: all nine risk reviews complete, zero errors.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-33.proof-contracts.json --strict`: final result 9/9 checked, zero errors and warnings. The initial nine quotation mismatches were corrected as described above.
- Batched `node tools/tsx-run.mjs tools/precheck.mts` on all eight proof-bearing batch items: 8 checked, zero failing.
- One final batched `node tools/proof-layout.mjs` on all nine explicit batch item paths: 9 items, 40 steps, zero defects. No item edits or formatter followed.
- Independent Python Fraction recomputation of all four specified models: exact matrices, row sums, detailed balance and target invariance passed. This finite arithmetic check does not certify the general theorem.
- Decisions JSON has exactly the five owed touched obligations, each `reviewed_no_defect` / `audit_enrichment`, with empty defect IDs. No findings needed a disposition and no confirmed defect required a new ledger row.

No mathematical blocker or escalation. No judge, stamp, certification, dispatch or gate battery was run. The engine retains hash sealing and gate ownership. Next action: engine collection of this report and decisions.
