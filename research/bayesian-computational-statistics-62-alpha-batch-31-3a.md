# Batch 31 Step-3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-31`.

## Scope and completed review

Scope owes touched ESS example and reader/refuter ratio-contract findings only. Initial risk-report succeeded and routed five HIGH/CRITICAL reviews.

Completed level 1: `thm-ordinary-importance-sampling-is-unbiased`. Read both proof steps and all six direct suppliers. The nonnegative density identity establishes absolute integrability before signed subtraction; support removes only the target-integrand null complement. Finite linearity gives the mean for n>=1, including n=1 and f=0; no independence or AC is needed for this expectation calculation. Zhou Unit 1 §1.3 pp.3–4 corroborates the change-of-measure support argument; local proof justifies its weaker integrand-specific support. No reader/refuter finding concerns this item.

Sources: current `items/` carriers and exact direct supplier statements; https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf, §1.3 Theorem 1.2 and Remark 1.2, pp.3–4.

Completed level 2 finite variance: `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment`. Read all four steps, current unbiasedness and batch-28 moments/CLT proofs, and exact IID, independence, density, variance, zero-integral, normal-law and AC suppliers. Measurable coordinate maps preserve IID; finite second moment yields integrability and the exact weighted-square integral. Finite variance addition is choice-free. AC is explicitly confined to the CLT branch and inherited normal-law supplier; positive variance uses the IID CLT, zero variance uses null squared deviation and finite unions to obtain Dirac laws. n=1 and zero integrand are covered. No iff is asserted despite the routing keyword signal. Zhou §1.3 equation (3) agrees; no finding or repair.

Completed level 2 consistency: `thm-self-normalized-importance-sampling-is-consistent-under-finite-moments`. All three steps and ten direct suppliers checked, including current batch-28 strong-consistency proof and the choice-free IID L1 strong-law statement. Density integration and the pi-null q=0 set establish absolute target integrability and EV=Z_p theta before taking ratios. The measurable weight and weighted-value sequences are separately IID and L1. Their strong laws intersect on a probability-one event where denominator average eventually exceeds Z_p/2. Initial all-zero weights use precisely the numeric fallback of the convergence theorem; n=0 and Z_p=0 are excluded. No second moment or AC is imported. Zhou Theorem 1.3 p.4 corroborates the ratio-of-strong-laws argument. No defect.

## touched:31:cex-importance-weight-ess-misses-target-region

Verdict: accepted_repair; repair_confidence: 1. Current raw SHA256 `a7617fb8c197053f4864875e0b09c9c9d3b59216b019c694950f7fe08abde2f2` equals the immutable reader-post hash, versus pre `aa443d84904c72585ab18241f9056a48773c2fcdf776d534bf9b47b9b738edb4`. Manifest hash is unchanged. The pre-reader step-1.1 claim and inputs survive in `research/bayesian-computational-statistics-62-owner-step2-final-metadata-before-2026-10-15T10-29-51-868Z/research__bayesian-computational-statistics-62-batch-31.proof-contracts.json`: the probability was asserted with only given/algebra and no explicit local draw law. This is a nonfatal immediately closable sampling-setup omission. The current proof explicitly supplies counting measure, the proposal law, n>=1 and IID draws via F2. Independence gives (99/100)^n>0; on this event the common positive weight is 100/99, ESS=n (also n=1), and the missed atom has target mass 1/2. Both actual suppliers and the updated F2 uses/step derivation were checked. Statement, dependencies, manifest and provenance are unchanged; no consumer propagation or new item edit is needed. Full original item bytes were not recovered; the historical finding is supported by the archived exact derivation, reader report and pre/post hashes, not an assertion of full-byte reconstruction.

The routed ESS obligation and its local review are complete.

## reader:31:1 and refuter:31:1

Both verdicts: confirmed_nonfatal; repair_confidence: 1. Read all five proof steps and all sixteen direct suppliers. The paired transform is IID in R^2 and square-integrable, with mean (Z_p,Z_p theta). The multivariate CLT allows singular covariance and explicitly assumes AC. The Borel ratio extension agrees with the inherited zero-prefix convention and has derivative (-theta,1)/Z_p, with the displayed O(norm(h)^2) remainder. Its covariance is E[W^2(f-theta)^2]/Z_p^2, including tau=0. Independently of the CLT, U and B are L1 by the two second moments and C is L1 by Holder at (2,2); separate IID strong laws and ratio consistency give the residual expansion and square-root limit even at tau=0. The mean subcalculation in step 1.1 uses no AC, despite the later CLT in that paragraph. The only confirmed defect is the contract recording AC at step 2.1; removed precisely that entry, retaining 1.1 and 3.1. Neither statement nor proof nor dependency changed. Reader and refuter report the same nonfatal metadata claim; both close against one row.

The source gradient in Tuan Anh Le, Asymptotic Variance (lines 86–88), has 1/a where 1/b is required for g(a,b)=a/b. The local proof orders coordinates as (W,Wf) and derives its correct gradient and remainder directly; it does not inherit that typo. No published-library defect was found.

Completed level 3 light-tailed counterexample: `cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal`. Read all three steps and seven direct suppliers, including the already reviewed ordinary estimator and weighted-moment theorem. Direct exponential integrals normalize p=(1/2)exp(-|x|) and q=exp(-2|x|); q is everywhere positive and f=1 has target variance zero. The weighted variable W=(1/2)exp(|X|) is nonnegative and integrable with mean one, but W^2 q=1/4 on all R, giving infinite second moment. For every finite n>=1, bar W_n>=W_1/n forces its second moment infinite; x^2<=2(x-1)^2+2 then forces infinite centered second moment. The finite-moment variance theorem is used only as a hypothesis warning, never contraposed to infer infinite variance. No AC or numerical approximation is needed. No reader/refuter finding and no defect.

## Sources and exact supplier checks

The review read the current routed/high-risk item arguments and every direct cited dependency's actual Statement/Definition, including current batch-28 mean-moments, mean-consistency and scalar-CLT proofs. It did not re-audit all transitive foundational proofs. Previously published suppliers remained read-only.

- [Quan Zhou, Unit 1](https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf), §1.3, Theorems 1.2–1.3, Remark 1.2 and equation (3), PDF pp.3–4: support, weighted integration, variance and ratio consistency. The local integrability and zero-set arguments justify the hypotheses actually used here.
- [Schön–Lindsten, Chapter 4](https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf), §4.3.3 Theorem 1, printed pp.55–56 (PDF pp.59–60): read the full bivariate-CLT/delta-method proof and covariance simplification. The local theorem explicitly assumes finite second moments of both coordinates, checks the Borel extension and derivative remainder, and allows singular covariance.
- [Monte Carlo Methods Chapter 6](https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf), §6.2, equations (6.32)–(6.43), PDF pp.7–9: read the ratio derivation, strong-law argument, plug-in variance and ESS formulas. The local proof supplies explicit hypotheses and proves the plug-in limit, rather than treating the source's informal “hypotheses” placeholder as a theorem.
- [Tuan Anh Le](https://www.tuananhle.co.uk/notes/is.html), Self-Normalized Importance Sampling / Consistency / Asymptotic Variance: checked the ratio and asymptotic variance; the derivative typo discussed above is not used as a premise.

## Decisions, ledgers and consumer disposition

Exactly three decisions are in `research/bayesian-computational-statistics-62-alpha-batch-31-3a-decisions.json`. `bcs62-batch31-ess-iid-setup` closes the accepted reader setup repair; `bcs62-batch31-ratio-ac-use` closes both duplicate nonfatal AC-contract findings. Both rows were appended through the serialized defect-ledger tool, at caught_at_stage `3a-adjudicate`, with decision references. Completed repairs have repair_confidence 1.

This adjudication edited only the batch-31 proof contract and task-authorized reports/ledgers. It added five specific risk reviews and removed only step 2.1 from the ratio theorem's AC-use list. No Statement/Definition, item bytes, manifest, provenance or judge record changed. There is no affected consumer interface, proposed withdrawal, outside-scope repair, or defective published library carrier identified. The existing cross-batch supplier records are preserved; the current actual uses of all three batch-28 suppliers and the published delta theorem agree with their hypotheses.

## Local checks and limitations

- Initial risk-report without --require-reviewed: success, five HIGH/CRITICAL items routed.
- Final risk-report with --require-reviewed: 0 errors, ten items routed; all five required reviews complete.
- Strict proof-contract check on the owned batch: 0 errors, 0 warnings, 10/10 items checked.
- Scoped precheck on the accepted ESS item and ratio theorem: both pass (2 checked, 0 failing).
- Final proof-layout on the reader-changed ESS item: 1 item, 2 steps, 0 defects. No further item edit or formatter followed it.
- Raw hashes of all ten current batch items equal the frozen reader-post hashes. Only the ESS item changed between the frozen pre/post item hashes; its manifest projection is unchanged.
- No judging, stamping, self-certification, dispatch or gate battery was performed. Engine-owned current decision hashes remain for collection.

No mathematical blocker remains in batch 31. Operational note: the requested native status command could not recompute live status because `tools/step6-finalize.mjs` was missing from the imported stage table; it printed a cached report dated 2026-10-15T14:31:01.106Z. That output is not evidence of current run scheduling or completion. No engine files were changed. Historical ESS evidence has the explicit original-byte limitation recorded above; the exact archived pre-reader derivation, frozen hashes, preserved reader report and complete current proof support the accepted repair.
