# Batch 1 Step 3a adjudication

Run: bayesian-computational-statistics-62. Group: batch-1. Scope: batch 1 only.

## Level 0 — def-ito-sde-and-strong-solution

The reader added the adapted-continuous measurability supplier without changing the Definition; retain that dependency and reconcile its manifest mirror. The pre/post item hashes differ while the frozen contract/manifest hashes agree, consistent with the reader report. Alpha amends the carrier with an explicit finite-horizon restriction convention and construction. Verdicts: touched = amended_repair; refuter:1:1 = confirmed_nonfatal; repair_confidence = 1.

The refuter correctly identifies the infinite-time indexing of the published Brownian and localized integral interfaces. This is an omitted restriction convention, not a failure of SDE existence: elementary sums and L2 limits use only times <=T. For local energy A_t, rho_n=inf{t in [0,T]:A_t>=n} capped at T bounds the stopped energy by n; stopped continuous integrals agree on overlaps, and rho_n=T eventually on each finite-energy path. This supplies the endpoint too. T=0 means zero integrals. No global Brownian extension or new hypothesis is required. Read the full relevant definitions, the adapted-continuous dyadic proof and thm-localized-ito-integral Proof 1.1–9.1; distinguish the historical omission from the corrected current text. The reader-post frozen raw item hash is e00e46a5d5888d9a51f281b8747326c347085c209fbf738982597be59f0e856a; the routed carrier fingerprint (item/contract/manifest) is 2059bce8bbabc30130dd488d5a644d258b71502329310320a660314e731aece9.

Checked dimensions, Borel coefficient typing, Frobenius coordinates, L2 initial value, finite energy, predictability of (t,X_t), F0-measurable null-path replacement, indistinguishable equality, zero/singular diffusion, T=0 and inherited Full AC. The complete item risk review is recorded in the owning contract before proceeding higher.

Source: Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control, §4.2 printed pp.92–100 (elementary/L2 construction and localization), §5.1 printed pp.118–119 (finite-horizon setup and Theorem 5.1.3), https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf. Current local proofs, rather than the citation alone, supply the construction.

Consumer interface: the data and solution class are preserved; the added paragraph makes the interval restriction explicit. Direct reference consumers outside batch 1 are thm-euler-maruyama-strong-rate-for-square-integrable-initial-data, thm-euler-maruyama-weak-order-one-under-backward-regularity and ex-euler-maruyama-additive-noise-constant-coefficients. Their actual uses concern the finite usual filtered space, initial/coefficient assumptions or integral identity on [0,T]; all remain valid, requiring no repair. Owned consumer checks continue below. No published defect or withdrawal identified.

## Level 1 — local-solution path moment

Read Proof 1.1–5.1 and every cited direct supplier statement, including the multidimensional Itô and stopping arguments. For |X0|>=R the exit time is zero, so the large initial value affects the martingale integrand only at a time-null endpoint. Otherwise the stopped integrand is bounded by a deterministic function of R and K. The generator bound C0=3K+2K², integrable stopped majorant, integrating factor, Fatou removal and final drift/Doob estimates are valid. Finite pointwise moments precede the path-sup estimate, avoiding circularity. No repair or decision is owed. Complete risk review recorded.

## Level 1 — SDE map

Read Proof 1.1–3.1 and all direct suppliers. Predictability follows by Borel composition with (t,Z_t); no coefficient time continuity is needed. Tonelli applies on finite Lebesgue measure times probability measure. Recomputed the drift estimate, scalar maximal estimate summed with factor m, C_g=6K²T+24mK², C_d=2TL²+8mL² and base bound 4K²T²+16mK²T. T=0, zero coefficients and degenerate dispersion satisfy the claims. No repair or decision is owed. Complete risk review recorded before level 2.

## Level 2 — global strong well-posedness

Read Proof 1.1–7.1 and every direct supplier. The factorial majorant, summable expected sup increments, uniform path limit and finite-tail L² convergence are sound. Completeness of the usual filtration permits the F0-null-complement replacement; the fixed point is identified in the path-sup norm. The integral majorants prove both the displayed bound and uniqueness among all locally integrable solutions, because the preceding local-solution lemma supplies the missing moment membership. Zero constants, T=0 and degenerate diffusion are included. No repair or decision is owed. Complete risk review recorded before level 3.

## Level 3 — finite-horizon moments

Read Proof 1.1–5.1 and all direct suppliers. V=(1+|x|²)^(p/2) is C² for every real p>=2, including x=0; the stated Hessian bound and columnwise trace inequality give C_p=sqrt(2)pK+p(p−1)K². Stopped expected energies and EV(X0) are finite before invoking the integral majorant. Gronwall precedes Fatou, avoiding the potentially infinite-moment circularity of an unstopped inequality. The conclusion is sup_t E|X_t|^p, as stated, and covers p=2, noninteger p, zero coefficients and T=0. No repair or decision is owed. Complete risk review recorded.

## Level 3 — singular initial law

Verdict touched = amended_repair; repair_confidence = 1. Retained the reader's measurable density definition, F4 elementary-cover cost suppliers, F7 Borel-singleton proof, F8 Archimedean argument and corresponding inputs. The frozen pre/post hashes differ in both carrier and contract, consistently with that report. Verified the initial law has mass one at zero, the cover ((−1/n,1/n],empty,empty,...) has cost 2/n, and the null-set theorem applies under countable choice supplied by Full AC. All actual direct dependencies were read.

Alpha corrects Verification 2.1: a simple minorant's *positive* level sets lie in the singleton; its zero level can be all of R outside that singleton and contributes zero by the simple-integral convention. Thus the original universal level-set assertion was literally false, but the missing positive qualification was immediately supplied by a competent reader. This is a nonfatal local correction; the no-density conclusion and all hypotheses are preserved. Refreshed the exact derivation and source quotations, reconciled manifest dependencies, and changed proof provenance to ai-altered. No stale judge stamp was present. Only the B-page references this example, and its prose remains sound. Complete risk review recorded.

## Consumer and source checks

All owned actual uses of the SDE Definition, including the unflagged scalar Ornstein–Uhlenbeck example, remain sound. The OU calculation uses L=theta and K=theta+|sigma0|, and nonzero sigma0 gives positive scalar variance. Both page summaries match the claims and avoid density regularity or time-reversal assertions. No page obligation is owed and no page was edited.

Also read van der Vaart §7.1 Theorem 7.8 and its proof, printed pp.140–144, https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf. Its scalar Picard and localization argument is contextual support; the vector constants and all-real-p Lyapunov result are proved in the current carriers. The local stopped-majorant arguments establish integrability before applying Gronwall. No published supplier defect was found and published content remains read-only.

## Decisions and ledger closure

Exactly three decisions are supplied in `research/bayesian-computational-statistics-62-alpha-batch-1-3a-decisions.json`: the two touched obligations are amended_repair, and refuter:1:1 is confirmed_nonfatal. Both Definition obligations reference the same closed row bcs62-3a-batch-1-finite-horizon-interface, with explicit same-defect evidence. The singular-law decision references bcs62-3a-batch-1-singular-cover-citations and bcs62-3a-batch-1-simple-positive-levels. All three rows are fixed, nonfatal, owned at caught_at_stage 3a-adjudicate; all completed repairs have repair_confidence 1. No mechanical failure was entered as a mathematical defect.

Historical checks: the archived Definition pre-reader carrier at research/bayesian-computational-statistics-62-owner-step2-gate1-1-4/before/def-ito-sde-and-strong-solution.md matches frozen raw hash 5ef37904ce123736639fa3e194b3f74537018927b5560645ffb6d3ed145f92b1. Removing the retained reader dependency and Alpha's added paragraph from the current carrier exactly recovers it. Reversing only Alpha's positive-level qualification and proof-provenance edit exactly recovers the singular-law reader-post item hash 4740168c413b360443da6e1d2e7c1e3b47ecc4bc293fc903cb7f2f543aac95e3. The frozen pre/post contract and manifest fingerprints and reader report distinguish the reader changes from Alpha's amendments; no historical counterexample is claimed against corrected current content.

## Local checks and handoff

- Initial risk-report: six CRITICAL items and one MODERATE item, zero errors. Specific complete risk_review records were written in dependency order for all six required items.
- Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-1.proof-contracts.json --require-reviewed`: seven items routed, zero errors.
- Final `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-1.proof-contracts.json --strict`: 7/7 checked, zero errors and warnings. An initial exact-quote mismatch in the reader's F4 elementary-set citation was corrected; it was mechanical contract drift and received no defect row.
- Reflow on both changed item paths: both unchanged. Final precheck on both paths: one proof checked, zero failures; the Definition has no phase proof.
- Final rendercheck on both changed paths: both frontmatters and all math spans parse, zero errors.
- Required final single batched `node tools/proof-layout.mjs items/def-ito-sde-and-strong-solution.md items/ex-singular-initial-law-at-sde-endpoint.md`: two items, three steps, zero defects.
- All seven manifest dependency mirrors match the current item dependencies. All stable IDs and page inventories remain present. The frontier-dependency ledger records actual consumer dispositions; no published-ledger addition is needed because no published defect was found.
- Non-result diagnostics: the environment lacks the python alias and pdftotext; source extraction used python3/PyMuPDF after opening the official source PDFs. A mistyped tools/proof-contracts.mjs command did not execute a check; the correct singular tool above passed. A rendercheck --help probe is not counted as scoped validation; only the explicit two-file run above is counted.

No unresolved batch-1 mathematical escalation or consumer repair remains. Live status was read only: the run is paused in Step 3 with unrelated collect/split blockers. No engine transition, agent dispatch, judging, stamping, certification, publication or gate battery was performed. The engine must stamp current decisions and run its normal checks after collection.
