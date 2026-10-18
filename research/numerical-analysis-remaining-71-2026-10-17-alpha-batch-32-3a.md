# Batch 32 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-32.

Scope: 12 touched obligations; no reader/refuter findings or page obligations. Current item raw hashes equal the post-reader snapshot. The pre/post snapshots show two source/clarification item changes and eleven contract citation-quote enrichments. No mathematical repair is inferred from a hash change alone.

## Completed reviews in dependency order

- `def-na-high-resolution-reconstruction`: reviewed_no_defect, metadata. Reviewed all displayed finite formulas: h>0 makes interpolation nodes distinct; ENO ties choose left without choice; minmod has its zero/sign branch; JS and Z denominators and normalization are strictly positive for epsilon>0, including constant data. Reflection k -> 2i+1-k supplies the opposite trace. Nodal and cell-average branches are separated. Characteristic reconstruction assumes an invertible real eigenbasis and asserts no system stability. Checked Jiang-Shu 1996 sections 2-3 and Don 2018 slides 6-9 (PDF pages 6-9): general p-power Z weights and tau5; p=2 is exactly the local squared formula. The reader adds source metadata and a p=2 clarification, with no changed mathematical mapping. No AC or unmet supplier.

Sources opened: Jiang-Shu https://lsec.cc.ac.cn/lcfd/DEWENO/paper/WENO_1996.pdf §§2–3; Droniou https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf; Don https://stsynkov.math.ncsu.edu/Memorial_Conference/Slides/Wai_Sun_Don_slides.pdf slides 6–9. Castro DOI metadata was accessible; its complete publisher PDF has not been read. Shu URL failed in the web reader; the later direct download succeeded and the relevant text was read. Local algebra is reviewed independently.

Level-0 review checkpoint completed before level-1 adjudication.

- `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one`: reviewed_no_defect, audit_enrichment. Recomputed increments ±1/2, fluxes 0,3/4,1,1/4,0, updated entries -1/4,3/4,5/4,1/4 and variation 3>2.
- `lem-na-eno2-reconstruction-third-order`: reviewed_no_defect, audit_enrichment. Opened the complete current uniqueness and interpolation-remainder suppliers. Newton interpolation at all three distinct nodes is verified; the face lies within each triple, C3 holds on the larger closed interval, and each product magnitude is 3h^3/8. Remainder /3! gives Mh^3/16, also for ties.
- `lem-na-weno5-optimal-linear-reconstruction`: reviewed_no_defect, audit_enrichment. Opened Taylor bound. Candidate moments of degrees 0–2 and combined moments through degree 4 cancel as displayed. Distances are at most 3h and absolute coefficient sums are 10/3 and 23/15, giving the stated constants 15 and (23/15)3^5/5!.
- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl`: reviewed_no_defect, audit_enrichment. Read every step and definition supplier. Nonzero d_i gives both minmod ratios in [0,1]; d_i=0 forces both increments zero, avoiding division by zero. Thus C_i lies in [mu/2,3mu/2], including endpoints, and the increment update yields TVD by nonnegative summation and absolute convergence; periodic N=1 is explicit. Checked reflected negative-speed update and a=0 or dt=0. Recomputed tent fluxes: A=1/2-3mu/4, B=1-mu/4, C=1/2+3mu/4, D=mu/4, so TV=3mu on (2/3,1]. N>=7 separates copies. Source Droniou section 3.3 concerns a sufficient CFL; sharpness is independently established locally, not attributed to it. No choice or missing supplier.

- `thm-na-musc-minmod-second-order-on-smooth-data`: reviewed_no_defect, audit_enrichment. Taylor averaging gives M2*h^2/24; adjacent increments are h*uprime+O(M2*h^2). The lower derivative bound fixes signs for small h and either limiter branch has the same error. Both faces have O(h^2) error, including M2=0.
- `cex-na-unlimited-centered-reconstruction-overshoots`: reviewed_no_defect, audit_enrichment. Recomputed the two slopes -1/2 and fluxes 1,3/4,-1/4,0. Updated entries 9/8,1/2,-1/8 have variation 3/2 and exceed both range endpoints.
- `ex-na-minmod-extremum-clipping`: reviewed_no_defect, audit_enrichment. Quadratic averages and opposite increments ±h^2 give zero slope and exact face error h^2/6 for every h>0.

All level-1 obligations complete. PDF downloads succeeded; PyMuPDF extracted the texts (pdftotext was unavailable). Droniou §3.3, equations (3.3.1)–(3.3.8), PDF pages 33–35, read completely. No source mathematical premise is supplied in place of the local proofs.

- `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction`: reviewed_no_defect, metadata (source addition plus supplier-quote enrichment). Checked C1/C2 difference bounds, beta=O(h^2), positive fixed epsilon and normalization: JS weights differ by O(h^2), Z by O(h^4). Zero-sum weight errors multiplied by O(h^3) candidate errors give O(h^5)/O(h^7), then the ideal O(h^5) estimate. Reflection and constant data are covered; no epsilon(h) claim is made. Read Shu §2.2.2 equations (2.50)–(2.64), PDF pages 18–21, and Jiang–Shu §§2–3 formulas (2.9)–(3.9), PDF pages 4–6.

- `ex-na-smooth-linear-advection-reconstruction`: reviewed_no_defect, audit_enrichment. Read all three steps and all four current suppliers. Exact affine average x_i-a*t gives adjacent increments h and minmod slope one; every WENO candidate equals the face value by the degree-two moment lemma, so ideal/JS/Z normalization returns it. Both reflected traces agree. Flux differences are a*h for either sign of a, giving the exact next average; a=0 is stationary. This exact affine identity requires no global boundedness, finite TV, CFL or general nonlinear stability assertion, and no such supplier is invoked. The second/fifth-order suppliers are compatible local smoothness observations. No AC, reader/refuter defect or unmet prerequisite.

- `ex-na-weno-js-critical-point-epsilon-scaling`: reviewed_no_defect, audit_enrichment. Independently integrated the five cubic cell averages and recomputed the three candidates, all three exact indicator polynomials, weighted mean -47/5 and nonzero JS coefficient 54/95 with rational arithmetic. The common leading Z correction cancels, leaving O(h^3) weight deviations and O(h^6) state error. Positive h^4 denominators and separate fixed-epsilon regime are explicit. Read Henrick–Aslam–Powers §§4.2–4.5, printed pp. 552–554; their finite-difference result is context, not a substitute for this face-state computation.

Level-3 review checkpoint completed before the level-5 Burgers review.

- `ex-na-burgers-godunov-musc-shock`: reviewed_no_defect, audit_enrichment. Read all five verification steps and all seven actual suppliers, including the full current entropy-convergence proof. Datum is bounded/local L1 with translation variation one and infinite global L1 norm. F(a,b)=a^2/2 is a globally locally Lipschitz and diagonally consistent extension, monotone on [0,1]^2 with L1=1,L2=0. h_m=1/m,tau_m=h_m/2 has lambda=1/2, positive lower ratio and full CFL. AC_omega is inherited through convergence, weak-limit and contraction; DC-only integrable branch is unused. Directly computed speed 1/2, entropy jump k^2-k on [0,1] and zero outside, and trace error at most t/2 on each compact. All initial slopes vanish and first right average is 1/4, agreeing with the exact shock. Convergence is asserted only for the monotone baseline, never the subsequent MUSCL evolution. Droniou sections 2.3.1-2.3.3 and 3.3 read; local current supplier proof rather than source authority establishes this application. No current mathematical gap found. Historical readiness/source-coverage note retained in history and superseded only by explicit owner reconciliation already recorded in the batch-32 cross-batch inventory; no independent readiness stamp claimed.

## Historical supplier disposition

The inherited contract described 21 batch-29 source-coverage errors and missing Step-1 readiness. The current owned cross-batch inventory already records an explicit owner supersession and preserves the old inventory in owner-planning-integration/batch32-cross-before-entropy-resolution.json. Read ROOT-entropy-evidence-reconciliation-cycle1/findings.md and independently reviewed the current convergence proof and all seven immediate example suppliers. The owner record supplies administrative disposition; current mathematical review supplies the application evidence. Moved the old contract observation verbatim into supplier_resolution_history and removed it from active unresolved arrays. No historical fact, escalation or uncertainty is erased. No whole transitive-closure audit, new readiness record, judge or engine gate is claimed.

## Sources and limits

The full Shu, Jiang–Shu, Droniou and Henrick PDFs were downloaded and relevant sections extracted with PyMuPDF. Henrick §§4.2–4.5 were read through printed p.554. Droniou §2.3.3 Theorem 2.3.9 uses local convergence; current library proof supplies the precise stated choice and nonintegrable-data interfaces. Castro publisher PDF remained unavailable; its publisher metadata and author Don’s later slides support the p-power conventions, while all accuracy conclusions were checked from the displayed local formulas. No unverified source theorem is imported as a premise.

No confirmed mathematical defect, published defect, outside-scope repair, new lemma/page or withdrawal was found. No defect-ledger row is created for metadata enrichment or unavailable optional tooling. All 12 routed decisions are reviewed_no_defect with empty defect_ids; four required risk reviews complete.

## Validation

- Initial risk report: four HIGH/CRITICAL items identified. Final `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-32.proof-contracts.json --require-reviewed`: exit 0, 13 items, zero errors; all four risk reviews complete.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-32.proof-contracts.json --strict`: exit 0, 13/13 items checked, zero errors and warnings.
- Scoped `node tools/tsx-run.mjs tools/precheck.mts` on the 12 touched carriers: exit 0, 11 proofs checked, zero failures (definition has no phase proof).
- Exact obligation coverage: 12 distinct touched decisions; no invented reader/refuter/page obligations.
- No item, page, manifest, published carrier or judge stamp edited during this adjudication. Mathematical carriers still equal the post-reader raw hashes. Required risk fields and explicit owner-resolution history are the only contract changes.

Final proof-layout result is recorded below. Engine stamping, gates and stage transitions remain with the engine.

- Final batched `node tools/proof-layout.mjs` on all 12 routed item paths: exit 0, 12 items, 38 steps, zero defects. Rechecked all 12 raw item hashes against the post-reader snapshot: unchanged. Report and decisions JSON complete; no local mathematical blocker remains.
