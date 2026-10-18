# Batch 42 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-42`; dispatch: `3a-batch-42`.

The sole owed decision, `refuter:42:1`, is **confirmed_fatal** and fully repaired. Independent risk review found three further defects, also repaired. All 16 HIGH/CRITICAL risk reviews are complete in the owning proof contract. No escalation, outside consumer repair or published defect remains from this assignment. This is local adjudication and validation, not a judge verdict, certification or gate-battery result.

## Scope and historical binding

Read the generated scope and item-order task, reader report, refuter artifact, both reader hash snapshots, current routed/risk carriers, exact cited prerequisite interfaces and the source passages listed below. Review proceeded through levels 0, 3, 4, 5, 6, 7 and 8, with per-item findings and risk evidence checkpointed before continuing. Scope owes no touched, reader or page decision. The decisions JSON contains exactly one entry, with route `flagged`.

Pre/post snapshot data are identical except for their `label`. Although the reader report describes four spacing edits, these do not create touched obligations in the generated scope. The reflection carrier read before repair has raw SHA256 `3399b05dc986ba456b56c363ed579f207d9b6badf1e6300044f76b46e924a7a9`, equal to its raw binding in both snapshots. The scope's observed fingerprint binds the carrier tuple, not just the raw item. No unbound observation or unknown historical delta is invoked.

## Defects and complete repairs

1. `na71-b42-3a-reflection-nonzero-amplitude`, owned by `refuter:42:1`: the reflection Example left E0 unrestricted, then cancelled it in Verification 1.1. At E0=0 every interface trace is zero for arbitrary R,T, so continuity does not imply the normalized equations. Added nonzero complex incident amplitude and explicit positive lossless media; the Given now specifies conductivity-free fields. The two continuity equations uniquely give R=(eta2-eta1)/(eta1+eta2) and T=2 eta2/(eta1+eta2). Positive impedances exclude a zero denominator; equal impedances give R=0,T=1. Faraday, Ampere, both divergences, real-part passage, and tangential/normal interface conditions check directly.

2. `na71-b42-3a-reflection-direction-sign`, independently caught in the same verification: d_x H_y is i s k_i H_y for a wave exp(i(s k_i x-omega t)); the old equality omitted s. The left-going wave refutes that intermediate equality. Inserted s, giving the already intended value -i k_i A/eta_i. This is a separate closed computation defect, not a second routed decision.

3. `na71-b42-3a-wave-energy-pairing`, independently caught in `thm-maxwell-periodic-yee-smooth-solution-error`, Proof 2.1: the kinetic increment used an M_e-weighted inner product against M_e delta_tt w, applying the mass twice. For scalar mass 2, dt=1 and successive velocities 1 and 0, the kinetic increment is 1 while that weighted expression is 2. Removed the subscript, leaving the ordinary coefficient vector/covector pairing. The subsequent potential cancellation, dual norm bound, square-root energy summation and field estimates now follow as written. Statement and dependencies are unchanged.

4. `na71-b42-3a-edge-error-lossless-hypothesis`, independently caught in `thm-maxwell-edge-fem-smooth-solution-error`: added sigma=0 explicitly to the Statement, matching the declared FE system and the proof's weak and differentiated equations. Without it, on a cube take epsilon=mu=sigma=I, J=0, B=0 and E(t)=exp(-t) grad(phi), where phi is nonzero, smooth and compactly supported. This is a conductive PEC solution satisfying the old regularity and continuity assumptions. The conductivity-free FE initialization converges to grad(phi), and its wave energy bounds its electric velocity by O(h), so it approaches a stationary field, contradicting the claimed O(h) error for fixed positive time. The authored proof is sound with the explicit lossless restriction; no extension to conductive error analysis is claimed.

Every completed repair has confidence 1. Four separate `fixed` rows were appended at `caught_at_stage: 3a-adjudicate` to `research/defect-ledger.jsonl`, and its generated view was refreshed. The routed decision references exactly the first row; independent defects have report evidence and no invented obligations. There were no prior judge stamps in these edited carriers to retain or invalidate. Reflection proof provenance was changed to `ai-altered` and mirrored in the manifest. Edited derivations, the reflection zero-amplitude boundary, edge-error hypothesis boundary and manifest strategy were synchronized.

## Risk evidence and actual prerequisite uses

Detailed complete `risk_review` records are in `research/numerical-analysis-remaining-71-2026-10-17-batch-42.proof-contracts.json` for these items, in generated order:

| Item | Checked argument and caveats |
| --- | --- |
| `lem-maxwell-rectangular-stokes-identity` | Four oriented edges, scalar FTC, continuous sections, Riemann-Fubini, cyclic coordinates and reversal. The rectangle is an oriented two-dimensional face. |
| `def-maxwell-edge-fem-semidiscretization` | Closure-defined PEC subspace, Whitney curl/div conformity, positive masses, restricted C and full D, continuous loads, inherited CC. |
| `lem-maxwell-discrete-incidence-identities` | Signed boundary cancellation, periodic identification and exact PEC selectors retaining magnetic boundary faces. |
| `lem-maxwell-yee-step-matrix-is-positive-definite` | SPD plus positive multiple of PSD, arbitrary right-hand side, zero conductivity and zero-dimensional solve. |
| `lem-maxwell-finite-dimensional-ode-existence-uniqueness` | Continuous augmented block matrix, last coordinate one, transferred uniqueness and endpoint convention of the exact matrix-ODE supplier. |
| `lem-maxwell-nedelec-smooth-interpolation-estimate` | Piola scaling, edge/face moment unisolvence, constant reproduction, curl/div commuting and local-to-global h bound. Canonical moments are used only on smooth compatible fields. |
| `lem-maxwell-edge-ritz-projection-well-defined` | SPD Gram matrix of mass plus curl form and Pythagoras; no curl-only coercivity or topological exactness. |
| `lem-maxwell-periodic-yee-consistency` | Staggered pure/mixed stencils, fourth-order spatial/time bounds, exact face Stokes, dt-cubed Faraday residual and cell-volume norm scaling. No jump or PEC Taylor extension. |
| `thm-maxwell-yee-gauss-constraints-propagate` | DC=CG=0 and total midpoint conductive-current continuity; initial residuals persist exactly, independently of CFL stability. |
| `thm-maxwell-yee-strict-cfl-modified-energy` | Conserved cross energy, Rayleigh bound, strict coercivity, zero electric spaces/C=0, repeated-root endpoint and reconstructed unstable mode. |
| `ex-maxwell-incompatible-current-gauss-drift` | Distinct periodic edge endpoints give exactly opposite nonzero charge residuals; charge update cancels them. One-cell self-loops are excluded. |
| `lem-maxwell-magnetic-compatible-initial-projection` | Full degree-two projection, uniform graph bound, finite weighted projection onto range C, curl orthogonality and DC=0; no imposed zero magnetic normal trace. |
| `thm-maxwell-periodic-yee-smooth-solution-error` | Corrected kinetic pairing, uniform strict spectral margin, dual forcing, zero-energy regularization, compatible starts, velocity/curl and integrated magnetic error. |
| `thm-maxwell-yee-cartesian-dispersion-and-cfl` | Staggered Fourier phases and normalization, cross-product symbol, zero mode, transverse recurrence, even/odd finite-grid maxima and endpoint distinction. |
| `thm-maxwell-edge-fem-smooth-solution-error` | Lossless weak equations, closure by relative interpolants, dominated time quotients and density, weak graph differentiation for fixed Ritz functionals, compatible initial velocity, regularized energy and integrated Faraday. |
| `ex-maxwell-yee-periodic-plane-wave-dispersion` | Both polarizations are transverse, sine-square sums are 1 and 3, even grids attain the corner, and equality is only the repeated-root endpoint. |

Read the current full commuting-projection theorem, finite inverse-correction proof and averaged-pullback proof as prerequisite context. The boundary-space equality actually used is proved in averaged-pullback step 2.2, not inferred from an unproved trace-kernel identification. Projection versus canonical interpolation, full versus homogeneous spaces and Countable Choice hypotheses remain distinct. Older Step-1 readiness comments in source evidence are historical; they were not treated as either current mathematical acceptance or current mathematical refutation. This review does not claim an exhaustive transitive audit of every foundational supplier.

## Sources and consumer dispositions

Consulted complete relevant passages in the batch source cache: Schneider, Chapter 3 equations (3.44)-(3.45), printed p.61, and Chapter 5 section 5.8, printed pp.133 onward, for normal-incidence amplitude conventions; Chen sections 1.1-1.3, printed pp.1-6, including Lemmas 1.3, 1.5, 1.6 and Remark 1.4, for local spaces, smooth commuting moments and approximation; Arnold-Falk-Winther sections 5.4-5.5, printed pp.54-57, including Theorem 5.9, for the distinction between canonical interpolation, bounded smoothing and inverse correction. AFW explicitly supplies only an outline of projection construction, so the actual local prerequisite proofs were read for the uses above. Yee residuals and finite-time energy arguments were checked algebraically in their carriers rather than attributed to a stronger external theorem.

Exact item/page/manifest reference searches found no item consumer of the changed edge-error Statement. Its A placement-page summary describes the already lossless semidiscretization and requires no edit. The reflection Example has only its B placement reference and no logical consumers. The periodic Yee error Statement did not change. Owned consumer records were appended to `briefs/tasks/frontier-dependency-ledger.md`; stable IDs and existing proposed withdrawals were preserved. Outside suppliers and published content remained read-only. No defective published item was established, so no published-ledger entry or lock was needed.

## Local validation and handoff

- Reflow on all three edited items: all unchanged.
- Precheck on all three edited items: 3 checked, 0 failing.
- Renderer on all three edited items: valid frontmatter and math, 0 errors.
- Final batched proof-layout after item edits/reflow: 3 items, 15 steps, 0 defects.
- Focused strict proof-contract check: 3/3 items, 0 errors, 0 warnings. Its first pass found a stale F7 quotation of the averaged-pullback supplier; replaced the quotation with its exact current Statement, without editing the supplier. One retry accidentally included a filename suffix in an ID selector and failed selection; the corrected command above checked all three actual IDs successfully. Neither mechanical failure was logged as a mathematical defect.
- Required risk-report, both ordinary and `--require-reviewed`, rerun before handoff: 24 routed items, 0 errors; all 16 required reviews complete.
- Defect append: 4 rows accepted and generated ledger view refreshed.

No unfinished local repair or mathematical blocker remains. The engine owns decision hash stamping, gates and subsequent transitions. No judge, stamping or certification command was run.
