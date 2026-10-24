# Batch 64 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-64`; original scope assignment group: `v`.

## Level 0 checkpoint

Reviewed `lem-qftx-gaga-algebraic-analytic-local-completions` in full, all direct supplier statements/definitions, reader report/findings and empty refuter findings. Current raw lemma SHA256 `02359becad969edf28606067a62b5e1f5fb21f01d2b1134d27206665b1905b6f` equals the post-reader snapshot; pre-reader snapshot is `dc92d3a3e95eebd07d9c6cc9f5db925deaeb06e91a86840396e47589eae5881e`. The reader explicitly identifies its proof-only addition in step 2.1. The exact pre-reader raw text was subsequently recovered from Git commit `4c10de5be5ac5a35b63aa54e6e9d743a1894ffce`: `git show HEAD:physics/items/lem-qftx-gaga-algebraic-analytic-local-completions.md | sha256sum` reproduces the pre-reader raw hash. The complete diff confines the change to Proof 2.1; its Statement, dependencies, diagram and other steps are unchanged.

The evaluation maps have kernels mA0 and n, denominators map to units, and quotienting by IA0 and IH preserves equality of the maximal-ideal preimage. Accept this local repair with confidence 1; no Statement/Definition change or consumer-interface propagation. The finite geometric inverse gives algebraic jets; absolutely convergent grouped tails give analytic jets, conditional on the coefficient-uniqueness supplier. AC supplies DC and finite-quotient completion. Checked I=0, I=m, n=1 and k=1. The ambient square commutes, with downward completion maps and identity on coefficient arrays. The quotient square means quotient each corner by its own extension of I; it does not require radicalization.

Reader:64:1 remains an owner escalation: imported `thm-power-series-define-holomorphic-functions-in-several-variables`, Proof 7.1, still has the false theta factor. Its derivative-coefficient conclusion supplies `cor-uniqueness-of-multivariable-power-series-coefficients`, used in lemma 2.2. Exact current counterexample: m=1, a=0, r=M=c_1=1, other coefficients zero, beta=0, theta=1/2. All hypotheses hold, whereas the bound is 1 <= 1/2. This does not refute the theorem statement. Risk review is recorded as OPEN pending published-owner disposition. No published/imported bytes were edited.

Next: review the level-1 theorem and level-2 examples conditionally, preserving this blocker, then record ledger/disposition and local checks.

## Level 1 checkpoint

`thm-qftx-gaga-analytic-local-ring-flatness`: all seven steps checked against every direct supplier Definition/Statement. AC supplies DC and projective resolutions by the explicit free-on-kernel construction; the common completion descends flatness, locality supplies proper-ideal faithfulness, the cyclic-submodule argument proves tensor-unit injectivity, and the Tor exact sequence proves B/A flat. I=0, maximal I, nonradical I, zero-coordinate charts (dummy variable) and M=0 are covered. No additional local defect found. Risk remains OPEN solely through the level-0 published-supplier blocker; this is conditional review, not acceptance of that supplier. No decision is owed for this untouched, unflagged item.

## Level 2: equal-completions example

`ex-qftx-gaga-analytic-equal-completions`: checked all four Verification steps. Finite M_R handles N=0; multiplying a convergent exponential by a polynomial preserves the exact common-radius coefficient bound. For N>max(d,m), factorial multiplication yields a degree-d polynomial Q with leading coefficient q_d and infinitely many roots, contradicting the explicitly proved root bound. Constant denominators d=0 and zero numerator exclusion p(0)=q(0)≠0 are correct. No local repair needed; risk OPEN through coefficient uniqueness and the theorem. No extra decision owed.

## Level 2: nonreduced-quotient example

`ex-qftx-gaga-analytic-nonreduced-quotient`: all three Verification steps checked. Every x²f has zero coefficient at (1,0), whereas x has coefficient 1; its quotient class is nonzero. Vanishing in either original local ring would imply vanishing in the common completion, a contradiction. Squaring gives zero directly from (x²). The proof explicitly reuses T for the quotient at 1.1; coefficients refer to representatives as explained in F2, and no claim of a coefficient map on arbitrary quotient representatives is needed. No local defect or repair; risk OPEN through the theorem/lemma to reader:64:1. No extra decision owed.

## Exact routed decisions and source blocker

Exactly two obligations are owed: `touched:64:lem-qftx-gaga-algebraic-analytic-local-completions` is `accepted_repair` (confidence 1), and `reader:64:1` is `escalated`. The refuter has no findings; the pages were not touched; the three other items have risk duties only. No extra decisions were manufactured.

The local-map omission is nonfatal and recorded as fixed in `advanced-qft-supersymmetry-build-2026-10-23-3a-batch-64-local-map`. The published false bound is fatal as a written intermediate assertion, not a counterexample to the theorem's actual conclusion. It is recorded as OPEN in `advanced-qft-supersymmetry-build-2026-10-23-3a-batch-64-published-derivative-bound`. The escalation exception requires leaving the defect/risk open; a closed reader row would falsely imply a completed repair. No owner resolution has been supplied, and none is invented.

Independently checked the current full published power-series proof and the uniqueness corollary. Step 7.1 is false: m=1, a=0, M=r=c_1=1, all other c_n=0, beta=0, theta=1/2 gives 1≤1/2. Missing valid prerequisite is the reindexed derivative-coefficient estimate and its iterated coefficient identity, used by cor-uniqueness-of-multivariable-power-series-coefficients and lemma 2.2. Attempted closure: replacing theta^(|beta|+1) by theta^|beta| yields a correct bound, with (beta_k+1)theta^|beta|≤(1-theta)^(-2); finite nested shrinkings then permit iteration on every interior point. Lebl §1.2 Theorem 1.2.1 and Proposition 1.2.2 support the correct result; this does not repair the current published/imported bytes. The current raw hash 8e36c5c01deba3458c7ae1fa65d1e90a9bfd5c61baa75edbb4b43d278f60a215 matches the import pin and root source. Owner must repair/review the original supplier and reconcile its immutable import, or explicitly route an independently proved local replacement and consumer updates. Published originals/imports are read-only for this dispatch; defect and all four dependent risk reviews remain OPEN.

The frozen observed/pre fingerprints above are retained exactly as routed; they are not asserted to equal the current raw-file SHA256 or to reconstruct missing original observed bytes. The present false bound is independently verified in the current carrier. No historical repair is claimed.

## Sources actually inspected

- [Anschütz, Lecture Notes on Étale Cohomology](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf), §§3.24–3.26, printed pp. 12–14, especially Theorem 3.25 closed-subscheme construction and the complete proof of Theorem 3.26(2). For locally finite-type complex schemes, analytic stalks have the same completions and are faithfully flat; the construction extends the defining ideal itself. The batch's finite-type closed-point hypotheses satisfy that scope.
- [Kedlaya, MIT OCW Lecture 22](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf), §2, PDF pp. 3–4 (printed pp. 2–3), complete ambient local-stalk lemma proof. The common completion is faithfully flat over both Noetherian local rings and descends flatness. Its sketch of Noetherianity is not substituted for the exact published local supplier.
- [Lebl, Tasty Bits of Several Complex Variables](https://www.jirka.org/scv/scv.pdf), version 4.4, §1.2, Theorem 1.2.1 and Proposition 1.2.2 including their proofs, printed pp. 20–23. The Cauchy-integral coefficients, holomorphy and derivative formula support coefficient uniqueness on smaller polydiscs. These references do not license retaining a false numerical estimate in a published proof.
- [Serre, GAGA](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf), §2 no. 6, Proposition 3 and Corollary 1 with their arguments, printed pp. 9–11; Appendix §22 Definition 4 and Propositions 22–23 with proofs, printed pp. 36–37. The flat-pair conclusion means B/A is flat; the Tor and descent arguments agree with the local theorem. Serre's reduced vanishing-ideal argument is not used to discard the scheme's nilpotents. Appendix §§24 onward were not independently reread in this dispatch.

Direct supplier statements/definitions were read for all 14 lemma suppliers and all 18 theorem suppliers, plus the coefficient-uniqueness corollary and full flagged theorem proof. The full transitive imported mathematics closure was not re-proved. These are pure mathematical items; there are no empirical premises, physical scope changes or statistical observations.

## Interfaces, diagrams and ownership

All Statements/Examples are uninterrupted and their references follow in separate sections. Both A/B carriers have empty bodies and retain compact-v1, draft status and inventories. The only TikZ diagram is the lemma's sound ambient completion square. No required missing diagram was identified. No item or page was edited by Alpha, and no new dependency, withdrawal or page was introduced. The owning cross-batch dependency record is `[]`; all in-run logical edges stay inside batch 64. Public interfaces and manifest claims remain unchanged, so no consumer-interface propagation event is triggered. The four local consumers remain blocked through the exact published chain recorded above. Published maintenance and the frontier ledger record the owner obligation.

## Local checks and handoff

- Initial `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-64.proof-contracts.json`: exit 0; four CRITICAL items, scores 16, 16, 12, 9. Specific reviews were recorded in dependency order with status OPEN to preserve the supplier blocker.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-64.proof-contracts.json --strict`: exit 0; 4/4 items, 0 errors, 0 warnings.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the four exact assigned item paths: exit 0; 4 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs` on those same four paths: exit 0; 4 items, 21 steps, 0 defects. No item edit occurred afterward.
- Final risk-report on the owning contract with `--require-reviewed`: exit 1; four `risk-review-missing` diagnostics because the reviews deliberately remain OPEN. This is an unresolved scientific hold, not a newly invented mechanical defect.

Owner must resolve reader:64:1 before closing these risk reviews or attempting the gate battery. Only the requested report, decisions, owned risk records and mandatory ledgers were authored. No judgment, stamp, publication, engine transition or acceptance gate was performed.
