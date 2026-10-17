# Batch 56 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-56`.

Reviewed the scope, order, reader/refuter reports and identical pre/post item fingerprints. No reader edits were made. Work follows dependency levels 0, 3, 3, 4.

## Completed level 0 risk review

`lem-tgr-constant-linear-energy-causality`: checked all seven steps against the direct Fourier, Schwartz, Plancherel and divergence suppliers. The symmetric-symbol energy estimate, frequency-derivative insertion formula, differentiated inverse transform, periodic lattice sums and shrinking-ball flux argument establish the stated constant-coefficient conclusions. Positive M, semidefinite S, inherited AC_omega, zero data, m=1, t=0 and v_*=0 were checked. No defect found; no carrier decision is owed. Recorded the complete risk review in the batch contract.

The subsequent ordered reviews are recorded below.

## Completed bulk entropy review (level 3)

Reader/refuter finding 3: `confirmed_fatal`, repaired with confidence 1. The undefined coefficient domains are now explicitly `C^1(O;(0,infinity))`, as is their quotient; Pi is a smooth real scalar on O. Checked all three proof steps, the exact force-projection signs, product-rule cancellation and homogeneous witness, including Pi=0 and positive denominators. No public result was narrowed. Direct consumers `lem-tgr-bulk-linear-causality`, `ex-tgrmath-bulk-speed-parameters`, `post-tgr-bulk-relaxation-model`, `pthm-tgr-bulk-extended-entropy`, and reference page `tgr-c02` already meet/use this interface. No necessary outside consumer repair or propagation is identified. Updated the owned manifest, supplier excerpts and risk review. Perfect linear response was reviewed next.

## Completed perfect linear review (level 3)

Reader/refuter finding 1: `confirmed_fatal`, repaired with confidence 1. Defined the vector coordinate velocity and supplied its metric factorization, both inequality directions, nonzero null equality and zero-vector qualification. Checked all four steps: normalization, Gibbs derivatives, compatible particle balance, positive symmetrizer, longitudinal/transverse eigenvalues, exact energy identity, and the explicit formal modes for positive and negative response. Equality at a_s=1 is allowed; a_s=0 only invalidates this positive-energy proof. The direct consumer `pthm-tgr-perfect-causal-linear-response` uses the unchanged speed and hypotheses and needs no repair. Updated the owned manifest and complete risk review. Bulk linear response was reviewed next.

## Completed bulk linear review (level 4)

Reader/refuter finding 2: `confirmed_fatal`, repaired with confidence 1. Defined vector coordinate velocity, metric factorization, nonzero null equality and zero-vector qualification. Independently checked the vanishing first variation of the derivative correction, Gibbs and particle compatibility, energy dissipation, positive symmetrizer and longitudinal characteristic polynomial. Both causal-inequality directions and equality at the threshold hold. Neutral modes are compatible with contraction. Direct consumers `ex-tgrmath-bulk-speed-parameters` and `pthm-tgr-bulk-causal-linear-response` use unchanged formulas with matching hypotheses and need no repair. The parameter example realizes a_s=1/3, zeta/(tau h0)=1 and speed 2c/sqrt(3)>c without claiming any measurement. Updated owned manifest, exact same-batch supplier excerpts and complete risk review.

## Sources and actual prerequisite review

The direct published suppliers inspected are `def-countable-choice`, `def-schwartz-space-and-its-seminorms`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-inversion-on-schwartz-space`, `thm-plancherel`, and `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`. Their exact statements match the real-component convention, negative-sign 2pi transform, countable-choice premise and bounded smooth-ball use. Inspected the current local-state definition, full Gibbs proof, full perfect projection proof and full dissipative entropy proof; the geometric connection supplier explicitly gives metric compatibility, contraction and product differentiation. These current draft mathematical arguments are sufficient for the exact uses here. The inherited readiness-history holds in the cross-batch ledger remain visible and are for owner disposition, not evidence against the algebra.

Retrieved the cited primary sources. [Bal's notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf), section 1.3.1 (printed pp. 7–8, PDF leaves 8–9), give the Fourier matrix evolution; section 1.3.4, Theorem 1.3.3 (printed pp. 11–13, PDF leaves 12–14), develops the cone energy argument. The source uses angular frequency; the local item explicitly translates to its 2pi convention and proves the damping and Schwartz regularity claims locally. [Tadmor's constant-coefficient section](https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html) supplies the symmetrizer and mode-energy context; its equations are image-based, so no uninspected image formula is used as a proof supplier. The local proofs and imported exact statements establish the assigned results independently.

[Gourgoulhon](https://arxiv.org/pdf/gr-qc/0603009), sections 4.3 and 5.2–5.4, pp. 16–20, gives the Gibbs and stress-projection context with compatible signature and velocity normalization. [Romatschke](https://arxiv.org/pdf/0906.4787), section 3 and section 4.1, PDF leaves 7–13, discusses dissipative stress and entropy corrections in restricted scope. Neither citation is treated as a proof of the separately stipulated variable-coefficient bulk law. Its complete local product-rule proof was checked here. No measurements, uncertainties or statistical significance were invented; all five carriers are mathematical conditional statements/examples.

## Owner handoff: outside quotation records

The actual consumer uses have been reviewed and require no mathematical source edits. Because the three Statements changed, owner follow-up is required before run closure to refresh exact supplier quotations outside batch 56:

- `research/physics-remaining-80-2026-10-17-batch-59.proof-contracts.json`: `pthm-tgr-bulk-extended-entropy`, citation from `lem-tgr-bulk-relaxation-entropy`.
- `research/physics-remaining-80-2026-10-17-batch-60.proof-contracts.json`: `pthm-tgr-perfect-causal-linear-response`, citation and supplier excerpt from `lem-tgr-perfect-linear-causality`; `pthm-tgr-bulk-causal-linear-response`, citation and supplier excerpt from `lem-tgr-bulk-linear-causality`.

These outside contracts were left untouched. This is a metadata routing handoff, not an unmet mathematical prerequisite or a claimed repair of another batch. Their owners must refresh quotations and perform their local contract checks. No published defective supplier or consumer was identified, so the published ledger was not changed. No extra carrier obligation was created: the dispatch owes exactly the six original reader/refuter findings.

## Local checks and ledger

- Initial risk routing completed before risk reviews; final `risk-report.mjs ...batch-56.proof-contracts.json --require-reviewed`: 0 errors, all four HIGH/CRITICAL reviews complete.
- `proof-contract.mjs ...batch-56.proof-contracts.json --strict`: 0 errors, 0 warnings, 5/5 checked.
- `precheck.mts` on the three changed items: 3 passed, 0 failing.
- `rendercheck.mjs` on the three changed items: no errors; actual YAML and KaTeX parsing succeeded.
- Final batched `proof-layout.mjs` on the three changed items: 3 items, 11 steps, 0 defects.
- Defect ledger: three fixed rows, one per underlying defect, each linked to both routed decisions, stage `3a-adjudicate`, confidence 1. `defect-ledger.mjs validate --run physics-remaining-80-2026-10-17`: 358 run rows checked, 0 errors at invocation.
- Updated only owned consumer dependency notes and refreshed the deduplicated frontier ledger. No dependency edges or item/page inventory were changed.

No judge was invoked, no decision hashes stamped and no engine gate battery attempted. The engine owns those operations. Local adjudication is complete; outside quotation refresh and inherited readiness-history dispositions remain owner work.

## Current carrier hashes

- `lem-tgr-constant-linear-energy-causality`: `0739b20cff02a945e9e8ad402ae5276d2a6086562a91adb31b4bb8b77f2078ab`.
- `lem-tgr-bulk-relaxation-entropy`: `dfd57814f883c68755222aa71eabe5329549bb7924754a3a061adaee8187e938`.
- `lem-tgr-perfect-linear-causality`: `b86df29bfe55d06152a43b48466c4b8001f34cc258e41333f47cefa617c3e300`.
- `lem-tgr-bulk-linear-causality`: `57909ec82ed9bb1ada335e8ba6ac099d4d4b8c3811dc51b7f503f667cc3a903a`.

Historical binding check: reversing only the stated local replacements reproduces each of the three immutable pre/post raw item SHA256 values exactly. Thus the reviewed original deficiencies are bound to the retained pre/post evidence; no unknown historical delta is asserted.
