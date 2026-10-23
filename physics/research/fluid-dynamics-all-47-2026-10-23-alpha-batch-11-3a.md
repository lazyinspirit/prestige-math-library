# Batch 11 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Adjudicator: `batch-11`; source write scope: batch 11 only. Work in progress; engine owns stamping and gates.

Dependency-order checkpoint: reviewed `pthm-fd-acoustic-linearization` (level 4) and its actual mathematical supplier `lem-fd-response-acoustic-algebra`, local-equilibrium postulate and barotropic definition. The first variation is pointwise in epsilon, P need only be C1, and the C2 perturbations justify differentiating the constant-coefficient linear system. Checked pressure derivative sign, plane-wave continuity/momentum, zero amplitude and excluded zero wave vector. Reader unit addition is sound; no finite-amplitude or empirical assertion is introduced. Next: finish exact pre/post comparison and decision record.

Reviewed `pthm-fd-perfect-gas-temperature` (level 4): e_s=T, -e_v=RT/v, logarithm arguments dimensionless, continuity yields D_t rho=-rho theta; internal energy gives the full temperature equation. On tau=q=r=0, D_t s=0 and K(s0)>0 with gamma=1+R/c_v. No common entropy across trajectories is required. Exact supplier `lem-fd-gibbs-entropy-residual` retains AC_omega, full smooth motion/contact/integral balances and time translation; read its complete proof and Helmholtz supplier. Risk review pending source comparison.

Outside-scope blocker already confirmed on current source: `post-fd-continuum-balances`, Postulate paragraph 1, still says “The Jordan integral convention ... is the one in the mathematical interface identified below.” F3 states the needed equality of open-region and compact-closure integrals, but the formulation itself does not. Owner batch 3 must state the convention in the Postulate and review its direct consumers. Reader:11:3 and refuter:11:1 concern this same still-open issue; no out-of-scope repair or closure claimed.

Historical reader:11:1 and reader:11:2 retain unbound observed bytes. Current frame definition and balance postulate no longer say readiness records are missing. Their existing owner adjudications record stale-note deletions; exact historical and current evidence will be distinguished in final decisions.

Perfect-gas risk review completed in its contract before advancing to level 5. Tong Part III §§4.4.2–4.4.3, equations (4.63)–(4.66), confirms the entropy/adiabatic context; the item itself derives the full stress/heat/source balance. The outside formulation escalation does not invalidate this explicitly conditional algebra. Exact pre-reader acoustic archive recovered under owner-step2-escalations/before-root-metadata and SHA256 matches the native pre snapshot; its sole reader change is the SI-unit paragraph.

Entropy risk review completed before the level-5 counterexample dispositions: checked both directions with the three isolated coefficient witnesses, positivity/zero cases, skew conductivity, Gibbs pressure/heat cancellations, AC_omega and time recentering. Refreshed the perfect-gas F1 full-definition quote to the current batch-3 supplier (explicit initial-chart 0-in-I convention); actual material-derivative and SI use is unchanged.

Level-5 negative-response review completed: exact quadratic energy e gives e_ss=C>0, e_vv=-A<0 and local T>0; global P(rho)=p_b+A(1/rho-v_b) is smooth and Pprime(rho_b)=-A v_b². Direct differentiation cancels both equations with alpha²=-c_s²|k|². Nonzero sine/cosine alternative makes the pair unbounded at every fixed x on I=R. No global nonlinear perturbation is asserted.

Level-6 negative-bulk review completed: D=(theta/3)I gives D0=0, K=g=0, hence G=zeta theta²/T<0 for zeta<0, theta!=0,T>0. Zero theta would not refute the claim; the actual witness excludes it. K=0 satisfies the positive-semidefinite conductivity restriction as well, so shear positivity alone fails even in that restricted family. This is explicitly an algebraic extension outside the adopted physical sign range.

Synchronized the three repaired Statement/Statement-refuted manifest strings. These necessary audit amendments leave reader-authored item bytes and all proof text unchanged. The acoustic theorem has only the negative-response counterexample as an item/reference consumer, which was checked above; the counterexamples have only their frontmatter-only placement pages. No downstream Statement/Definition repair is needed and propagation stops. All complete formulations are hyperlink-free with separate references; no diagram occurs in these carriers or is needed. The Cauchy-contact supplier diagram was inspected as context: its oblique-face normal and face labels agree with its tetrahedral construction and the proof is independent.

## Final dispositions

Exactly seven owed obligations have one decision each in `research/fluid-dynamics-all-47-2026-10-23-alpha-batch-11-3a-decisions.json`:

- `touched:11:pthm-fd-acoustic-linearization`: `amended_repair` (reader item accepted; manifest synchronized), defect suffix `acoustic-units`.
- `touched:11:cex-fd-negative-response-acoustics`: `amended_repair` (reader item accepted; manifest synchronized), suffix `negative-response-formulation`.
- `touched:11:cex-fd-negative-bulk-viscosity`: `amended_repair` (reader item accepted; manifest synchronized), suffix `negative-bulk-formulation`.
- `reader:11:1`: `confirmed_nonfatal`, suffix `historical-frame-readiness`.
- `reader:11:2`: `confirmed_nonfatal`, suffix `historical-balance-readiness`.
- `reader:11:3` and `refuter:11:1`: `escalated`, shared OPEN suffix `deferred-jordan-convention`.

Every suffix above is prefixed by `fluid-dynamics-all-47-2026-10-23-3a-batch-11-` in the append-only defect ledger. Five completed dispositions have closed rows and confidence 1. The OPEN row represents a single current producer defect, not two scientific defects; the two routed observations keep their original distinct fingerprints. No false-positive, fabricated completed repair, judge stamp, publication or native gate result is claimed.

## Historical and producer evidence

All three pre-reader item archives are under `research/fluid-dynamics-all-47-2026-10-23-owner-step2-escalations/before-root-metadata/`, with filenames `items__<id>.md`. Their SHA256 values match the exact native pre snapshot:

| Item | Pre-reader raw SHA256 | Current/post-reader raw SHA256 |
| --- | --- | --- |
| pthm-fd-acoustic-linearization | 6e02e768ce669a0ee4e1df2712d2335c8a4e0e523c431d70823c3e88523bae6e | 88add1498ecfd40c7f61ba3d88d81d9a8db31707dea2b95e8807074dd38f4dae |
| cex-fd-negative-response-acoustics | bef1453790d84ce661533e0c240d6a36cae4b06c6fe12f776be040b839dfecc8 | dad6e829cd3c1f267c3a136513fd0bd38d6487db18da197c7e95d11dc11fa0a5 |
| cex-fd-negative-bulk-viscosity | d72df505d6f4791fa7da257b1c4b8bd9385553c8f8d3715f6dee895379f410e0 | 1e1b78914f42edb5d00d7276993087fa9bb54fbb6160696cdcd3ed87244c2789 |

The current item bytes equal the post-reader snapshot exactly. Alpha's amendments are in manifest/contract evidence, not new item edits. The manifest retains all ten IDs, titles, dependency roles, physical scopes and page placements. Pages remain YAML-only with `page_layout: compact-v1`.

For every outside finding, the decisions preserve exact producer batch `3`, owned consumer ID, dependency path, producer pre-reader fingerprint, producer carrier at routing and observation basis from the frozen scope. Current producer raw SHA256 values at review are `cdd405bfad196b29711ecaab9646c564dcb314db4ccbe8f03b6666f6a1da2054` for the frame definition and `90c7eff2a551c2843c421f22c1b1d7731db5b9fd116cb59f48225f1c1c2e7efc` for the continuum postulate. Their current owning batch-3 contract and manifest were opened independently. The producer contract's formulation-pass wording does not override the concrete deferred-convention defect.

The historical findings are supported by the reader's original reports, current deletion of the stale sentences, ready records `research/fluid-dynamics-all-47-2026-10-23-step1-def-fd-smooth-motion.json` and `research/fluid-dynamics-all-47-2026-10-23-step1-lem-fd-transport-and-density.json`, and prior batch-3/batch-4 adjudications. Those earlier adjudications already record the same producer deletions. Our two historical rows record this consumer-batch's unbound observations, not two new source repairs; their `historical_delta_unknown: true` flags remain. Although a producer pre-reader archive exists, it does not prove which bytes reader 11 originally saw. The dispatch authorizes historical disposition after current-source review; no originally unbound observation is retroactively bound to a convenient archive, and no repaired source is declared historically false-positive.

## Exact prerequisite uses and source limits

Direct current suppliers were read: `def-fd-barotropic-euler-model`, `post-fd-local-equilibrium`, `post-fd-newtonian-fourier`, `def-fd-quantity-and-frame-conventions`, `post-fd-continuum-balances`, `lem-fd-response-acoustic-algebra`, `lem-fd-gibbs-entropy-residual`, and `lem-fd-newtonian-admissibility`. Their relevant mathematical interfaces were traced through the complete local proofs of `lem-fd-helmholtz-chart`, `lem-fd-isotropic-linear-classification`, `lem-fd-local-balance-equivalence`, `lem-fd-transport-and-density`, and `lem-fd-c1-domain-jordan-integrals`, plus the definition of `def-fd-simple-fluid-state` and `def-fd-smooth-motion`. The published chain-rule and countable-choice interfaces were inspected. The local balance proof explicitly supplies boundary-null reduction, compact-neighborhood transport, rowwise divergence, fixed-sign-ball localization, stress symmetry and kinetic/internal-energy subtraction; Gibbs preserves those assumptions by translating the time interval. This is scoped mathematical review, not a global re-audit of all transitive published proofs.

The local Helmholtz proof uses strict monotonicity from positive e_ss, endpoint separation and the intermediate-value theorem, then a Lipschitz bound to derive a C1 inverse. The response and physical acoustic conclusions need only its stated local branch; no global inversion or sign of e_vv is inferred. The isotropic proof uses proper half-turns/permutations and a finite-dimensional orthonormal eigenbasis, with no arbitrary choice use. AC_omega is retained explicitly in the Gibbs/admissibility physical consequences through their divergence-theorem supplier; the isolated coefficient witnesses and acoustic substitutions introduce no choice requirement.

Fresh external reading was limited to the relevant passages below, not entire volumes. The reader's broader source-reading account remains attributed to that report.

- [Tong, Fluid Mechanics, Part III](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf), §§4.4.2–4.4.4, especially equations (4.63)–(4.73), printed pp.149–152: checked the entropy relation, material adiabatic law and linear acoustic context. The general pressure derivative is on p.152; the velocity reconstruction follows on p.153. The complete local proofs establish their own precise hypotheses and claims, rather than treating every detail as a verbatim source theorem. No source numerical material values were imported.
- [Tong, Part II](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), §§3.1.1–3.1.2, pp.60–64: checked the trace-free/bulk decomposition and stress-power/dissipation context. Its incompressible discussion is not used to prove the compressible coefficient equivalence.
- [An Introduction to Continuum Mechanics, Chapter 6](https://courses.washington.edu/mengr503/Chapter_6.pdf), §6.1.4 pp.224–225, §§6.5.1–6.5.3 pp.242–245, §6.7.2 p.252: checked stress/entropy and tensor Fourier-flux conventions. The independent coefficient test is locally proved; no unjustified constitutive inference is borrowed from the source. Our specific gas constant R is distinguished from a universal gas constant divided by molecular mass.

No new defective published supplier was identified in these uses, so no published-consumer ledger entry or published edit is made. No measurements, calibration precision, sample model or statistical inference occurs here: all conclusions are explicitly conditional model deductions or algebraic counterexamples.

## Checks and remaining owner action

Completed focused checks:

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the three touched items and two risk-review theorems: 5 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` on those five items and the two batch pages: 7 files, no errors.
- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-11.proof-contracts.json`, then the same command with `--require-reviewed`: both exit 0; both CRITICAL items have specific complete local risk reviews. These reviews preserve the separate OPEN supplier formulation referral.
- Final `node tools/physics-support/proof-layout.mjs items/pthm-fd-acoustic-linearization.md items/cex-fd-negative-response-acoustics.md items/cex-fd-negative-bulk-viscosity.md`: 3 items, 9 steps, 0 defects. No subsequent item edit or formatter ran.
- Local JSON/coverage check: exactly seven unique owed decisions, all ledger references resolve, all completed repairs have confidence 1, and every owned contract citation quote is present in its current source. All changed manifest statements match current formulations.

Two exploratory precheck invocations failed before checking any carrier: bare Node does not load `.mts`, and the TS runner's precheck does not implement `--help`. The actual explicit-file invocation above succeeded. These were command-discovery errors, not content defects, and generated no defect rows.

Owner action remains required for `reader:11:3` and `refuter:11:1`: route the batch-3 Postulate convention clarification to its source owner, review actual direct consumers, then resolve both escalations. The missing formulation content is already proved by `lem-fd-c1-domain-jordan-integrals`; no new result or weakened theorem is proposed. The batch-11 page-to-fd-f01 and entropy/perfect-gas-to-continuum supplier-use records are now OPEN with this precise reason. Other verified cross-batch records and all stable IDs remain intact. Engine hash stamping and its gate battery remain pending; this dispatch did not invoke them.
