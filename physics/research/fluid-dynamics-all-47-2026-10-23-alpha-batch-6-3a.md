# Batch 6 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-6`; scope: batch 6 only.

## thm-fd-x06 — completed first

Independently checked all six steps and F1/F2/A1: Cartesian radial derivatives yield div u=0 and mu Delta u=grad p. The sphere gradient is (3/(2a))U_t tensor n and sigma n=-p_infty n+(3mu/(2a))U with the center-outward normal. Added the explicit spherical cross-product density, its 4pi a² integral, and density-preserving antipodal substitution to close the batch-13 nonfatal exposition alert. On each bounded smooth annulus C2/C1 regularity licenses the cited divergence theorem under AC_omega; w=O(r^-1), grad w,q=O(r^-2) make the outer integral O(R^-1). Nonnegative increasing energy then vanishes, and the far-field pressure limit fixes its constant. U=0 is valid; a,mu,rho0=0 are excluded. No AC stronger than the supplier premise, general exterior NS result, finite-Reynolds error bound, or empirical observation is used. Statement and consumer interface unchanged.

Sources opened: actual def-fd-x00 Definition, bounded-C1 divergence theorem Statement and proof, indexed def-countable-choice Definition; Tong fluid-mechanics/fluids2.pdf §3.4.1 source reading in progress. Current mathematical proof is checked locally. Existing batch-13 sphere omission is nonfatal; the local proof repair is complete with repair_confidence: 1. No new routed decision is owed for this risk-only item.

Next: finish thm-fd-x08 touched review, then thm-fd-x13 and the x06 example; finally downstream findings and checks.

## thm-fd-x08 — touched review completed

Read all four steps, exact pre-reader archive and current post-reader carrier, def-fd-x00 Definition, Mandre §3.3.1 equations (3.14)-(3.26), and MIT 2.25 all four pages. I0 is positive finite by comparison; E prime=-exp(-s²)/I0 and E double-prime=-2s E prime give the heat residual, zero convection/divergence, separate wall and initial limits. Translation r=s+z proves the normalized tail bound for every allowed epsilon, also U=0. Periodic lift has k Ly=2pi m and derivatives u_t=nu Delta u; the explicit closed lifted material loop satisfies its velocity equation. Lattice translation preserves the integral. Its shift term is an exact s derivative with matching endpoints; the remaining coefficient is positive for 0<alpha<pi. A=0 gives constant zero circulation; only A nonzero gives decay. Negative times are finite pointwise, with no bounded ancient-solution assertion. The half-space corner and alpha endpoints are excluded; no empirical or general boundary-layer conclusion. Reader interface fixes are sound. Amended only the missing math delimiter, honest statement provenance, and explicit lift notation/invariance in step 1.2; diagram agrees with the initial ellipse. Direct consumers checked: owned formal example uses unchanged bound and circulation; batch-13 physical prediction retains the two routed nonfatal defects and is referred to owner.

Verdict: amended_repair; repair_confidence: 1. The exact pre-reader source is research/fluid-dynamics-all-47-2026-10-23-owner-step2-escalations/before-root-metadata/items__thm-fd-x08.md (raw SHA256 22f191eb77f809d716e32facdba47adbbf9ff8e0bf2c05cc781ade3b05614a52), matching the immutable pre snapshot. Current source before Alpha matched the post snapshot ebb85efb0623b4477b9eefe1beab9b255d2cc86bfc562e7fe2ae2928b93e9763. Thus no historical source uncertainty applies to this touched obligation. The original trace type and missing quotient convention are real nonfatal defects, preserved as repaired; no source history is inferred from later corrected bytes.

Next: level-2 sphere potential and Stokes example risk reviews.

## thm-fd-x13 — risk review completed

Checked all three proof steps against def-fd-x00, def-fd-incompressible-euler-system, and the independent vector-identity clause and coordinate proof of thm-fd-x09. Delta(1/r)=0 for r>0, hence the explicit dipole potential is harmonic on r>a>0; its gradient is curl-free, tends uniformly to U, and has sphere value (3/2)(U-(U dot n)n). The pressure gradient cancels the exact steady Euler acceleration. The O(r^-1) bound asserted is weaker than actual O(r^-3) and valid. Added an explicit spherical cross-product density and antipodal parameter substitution to close the batch-13 nonfatal omission; pressure is even and the resultant cancels componentwise. U=0 gives zero velocity and constant pressure without dividing by U. Positive a,rho0 exclude singular parameters. No global potential-existence, viscous/no-slip, uniqueness or observed-force claim is imported. The sphere diagram normal points outward and tangent arrow agrees with the rightward U projection. Proof-only repair; Statement, deps and consumers unchanged; repair_confidence: 1.

Source corroboration: Tong fluids1.pdf §§2.3.2–2.3.3, equations (2.30)–(2.31), printed pp. 36–38. Stewart §6.4 is supplementary physical context; the local explicit-potential calculation does not invoke its global potential-existence assertion. Next: x06 formal example.

## ex-fd-x06-formal-verification — risk review completed

Read both Verification steps and the completed thm-fd-x06 proof/Statement. a=mu=rho0=1>0, U=e_z, p_infty=0 give the displayed coefficients, s=z and nu=1. At r=1 both coefficients vanish; Bzx=O(r^-1) uniformly as |z||x|<=r², pressure=O(r^-2), and the supplier gives the required gradient decay. The stress resultant specializes to 6pi e_z with center-outward normal. Uniqueness is only in the stated uniform decay class, under the explicitly carried AC_omega supplier assumption; no finite-Reynolds or measured-force inference. Nonempty exterior and positive fixed parameters exclude degeneracy; no arbitrary choice beyond supplier AC_omega. Example is a leaf, no converse claim or diagram, and no source repair required.

All four required HIGH/CRITICAL current proofs now have item-specific complete reviews. Next: four downstream findings, source references, metadata synchronization and focused checks.

## Downstream pthm-fd-px08-prediction — four findings

The actual current pthm-fd-px08-prediction Statement specifies u=(U E(y/(2 sqrt(nu t))),0,0), U real, but calls its wall trace U. Since E(0)=1, the vector limit is (U,0,0), including U=0. This is a real nonfatal typing omission; the explicit formula and thm-fd-x08 fix the intended value. Independently checked all three current proof steps, exact six supplier interfaces, batch-13 contract and manifest. This carrier is outside batch 6 and remains unedited; owner batch 13 must correct the trace and check its direct consumers.

Current F3 cites the Euclidean closed-path definition in def-fd-x00 as the torus circulation convention. That supplier has gamma:[a,b] to an open Euclidean Omega, while thm-fd-x08 explicitly supplies quotient, periodic lift and lift integral. Thus the attribution is inaccurate. This is nonfatal: F2 already cites that exact theorem and step 1.2 uses it; the closed-lift derivative integral gives Ac C_alpha exp(-nu k²t), and its shift term vanishes by theta to 2pi-theta. No false prediction follows. Independently checked all three proof steps and current suppliers, contract and manifest. Outside batch 6 source remains unedited; owner batch 13 must replace the torus attribution with thm-fd-x08 and align its proof/contract.

All reader/refuter obligations are confirmed_nonfatal. The refuter fatal citation classification is not upheld: the correct torus convention is available from F2 and the missing attribution does not invalidate the computed formula. Reader/refuter observations share their exact routed root-observed carrier fingerprint, so each pair references one actual closed nonfatal-recorded row. No outside repair is claimed.

Root explicitly authorized preserving and adjudicating these genuine downstream findings in research/fluid-dynamics-all-47-2026-10-23-step3-downstream-handoff-6.json, with batch-13 repair authority retained separately. Its root-observed source archive has raw SHA256 31a6e41d744ea5997f851eaf24e28972166790a0a6d6d10f88f7e52afd8d1c94; no exact original reader-observed bytes were bound. This is a current independent review with that historical limit, not retrospective certification of the reader source.

Required owner actions: correct the vector wall trace, attribute the torus lift integral to thm-fd-x08, and synchronize the batch-13 proof/contract and any affected public-interface consumers after its source writers drain. The inherited adoption of continuum/constitutive assumptions is explicit; these predictions supply no observations, uncertainty estimate or evidence for the physical truth of the model. The local mechanical PDE branch is the premise actually used, not an unsupported derivation of the integrated postulate.

## Historical sphere alerts and publication boundary

Existing ledger rows fluid-dynamics-all-47-2026-10-23-3a-batch-13-finding-thm-fd-x06 and fluid-dynamics-all-47-2026-10-23-3a-batch-13-finding-thm-fd-x13 remain unchanged. Their nonfatal omitted density calculations have now been supplied in the owning batch, with repair_confidence: 1. No duplicate defect rows or extra owed decisions were invented. The x06 and x13 Statements and physical interpretations are unchanged; no consumer propagation follows these proof-only additions. No published/imported source was edited. Published hyperlink presentation defects in the inspected derivative/Laplacian/line-integral/normal and choice suppliers are already indexed in research/published-consumer-supplier-ledger.md under batch 13; mathematical operator, integral and choice statements used here are explicit and unaffected. No duplicate published-ledger entry was needed.

## Source reading and limits

Opened the actual cited mathematical supplier sections, including the six operator/integral definitions underlying def-fd-x00, the full bounded-C1 divergence theorem proof and the indexed countable-choice definition. Mathematical imports remain read-only; this is an actual-use review, not a transitive re-audit of their entire proof graphs.

[Mandre §3.3.1](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html), equations (3.14)–(3.26), supplies the half-space heat equation, separate boundary/initial data, similarity variable and complementary-error-function profile. Read the complete subsection. The normalized Gaussian-tail estimate and torus circulation computation are proved locally, not attributed to that source.

[MIT 2.25 Stokes first problem](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf), all four pages, specifies the impulsive-wall problem and dimensional diffusion/wall-stress scales; it does not provide the exact Gaussian profile or local tail inequality.

[Tong, fluids2.pdf](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), §§3.4.1–3.4.2, printed pp. 78–83 through the complete uniqueness argument (equations (3.26)–(3.27)), corroborates the sphere coefficients, traction and force. The exterior uniform-decay annular limit is verified in our local proof; it is not borrowed from a bounded-domain uniqueness calculation. The filename denotes the second PDF, whose actual chapter heading is “3 The Navier–Stokes Equation”; the existing source label “Chapter 2” uses the file part number, not the chapter number.

[Tong, fluids1.pdf](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf), §§2.3.2–2.3.3, printed pp. 34–38, equations (2.30)–(2.31), corroborates the potential, slip boundary and even pressure. No stronger uniqueness assertion from the source is used.

[Stewart MIT 8.09](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf), inspected §6.4 equations (6.69)–(6.79) and the beginning of the sphere example, and §6.8 equations (6.135)–(6.155), especially (6.151) and (6.154)–(6.155). These corroborate the formal-model context and Stokes field/resultant. The potential-sphere force calculation is checked directly and against Tong; no claim is made to have read Stewart's entire book or every paragraph of §6.4. Its unrestricted potential-existence wording is not a premise of the explicit local construction.

## Consumer and diagram review

A current item search for thm-fd-x08 found exactly its own file, ex-fd-x08-formal-verification and pthm-fd-px08-prediction. The formal example uses nu=U=t=1, y=2 and epsilon=e^-1; its separate torus data satisfy c=1<2, b=pi/2<pi and alpha=pi/2. Both uses remain sound. The outside prediction's actual uses and two independent defects are recorded above for owner action; no unnecessary consumer edit or further interface hop is needed from the corrected supplier. All original links were retained outside uninterrupted Statements. The x08 ellipse and x13 sphere cross-section diagrams agree with their mathematical conventions and need no edits; their proofs are independent of the drawings. x06 and its formal example have no diagrams. No page-only obligations are owed and no page body was authored.

## Focused checks and handoff

The first focused strict proof-contract check reported exactly three stale F1 quotations of def-fd-x00 (x06, x08, x13). Replaced those quotations with the actual current Definition after checking the exact used equations; no mathematical defect row was created for that mechanical drift. An initial metadata-update script incorrectly passed a complete frontmatter document to a YAML-value parser and aborted before writes; removed that unused parse call and reran successfully. Synchronized the owning manifest Statement mirrors for the three inspected theorems and the x08 ai-altered statement provenance; updated the changed derivation claims. No prior judge stamp was present on any edited item.

Final reflow: all three changed item files unchanged. Final precheck: 3 checked, 0 failing. Rendercheck: all three parse with real KaTeX and renderer YAML, no delimiter or math-link defects. Final required batched command `node tools/physics-support/proof-layout.mjs items/thm-fd-x06.md items/thm-fd-x08.md items/thm-fd-x13.md`: 3 items, 13 steps, 0 defects. Focused strict proof-contract check of thm-fd-x06, thm-fd-x08, thm-fd-x13 and ex-fd-x06-formal-verification: 4/4 checked, 0 errors, 0 warnings. Risk-report was run before completing reviews and again on the owned whole-batch contract with --require-reviewed: all 13 routed, 0 errors, all four HIGH/CRITICAL reviews complete.

Exactly five decisions: one amended touched repair and four confirmed nonfatal downstream findings. Five new closed ledger rows cover three distinct repaired x08 issues and the two distinct recorded consumer issues; existing sphere rows are preserved. All completed repairs have repair_confidence: 1. Stable IDs, inventory, draft status and dependency roles are preserved. The owner must still apply the two nonfatal batch-13 consumer corrections; their source maintenance is explicitly pending. No substantial unmet mathematical prerequisite or open risk review remains in batch 6. No withdrawal, judge cycle, decision stamp, certification, publication or engine gate battery was initiated. The engine owns current-carrier decision hashes and all subsequent gates.

Final artifact integrity check: exact five scope obligations, no duplicates, every referenced row closed (fixed or nonfatal-recorded), every downstream decision has its historical uncertainty and owner-resolution text, all four required risk reviews complete. Current raw item hashes at handoff:

- `thm-fd-x06`: `5ad008cd5ca6a327ec3eae1509ccb1702acb85e6c1b0db72748e048a103999bc`
- `thm-fd-x08`: `8b86ed15133e9224b24ff887cc30926c5c65a26dd57d1ecef91b154a1c4e33f4`
- `thm-fd-x13`: `ca101911145b5770296a461a7a4d6377d96091b1c13667bf87f1f6a1af9d1183`
- `pthm-fd-px08-prediction`: `7901b113ce1298ed22725d242c27b46db3ec501c1bd08ef736072bc003b6cd34`
