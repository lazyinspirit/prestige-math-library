# Batch 40 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-40`; authorized batch: 40.

## Completed level-2 postulate review

`touched:40:post-fd-geophysical-model-branches`: **amended_repair**, repair confidence 1. The manifest retains the exact original Postulate text. Substituting it into the current carrier before Alpha edits reconstructs raw SHA256 `139e1d93d9d3122fc51161ca011b9df07457462c5f7d22bc57d804921ea67b3f`, exactly the immutable pre-reader snapshot. The reader-result raw hash was `a68aad5143904f68582a525159685136c2363cd35039a7d6c4a2790eb5f995de`, exactly the post snapshot. There is no missing historical preimage.

The reader supplied previously missing background objects: an open local rotating region, a time-dependent spatially C2 gravitational potential with units, the signed effective-potential map, upward direction, constant reference density, spatially C1 background and total pressures, and their pressure-perturbation formula. The original model equations, coefficient signs and regularity remain intact. These are explicit adopted assumptions, without a claim of a reduction theorem or empirical validation. The local backgrounds need not descend to the periodic perturbation torus. An arbitrary prescribed background pressure is permitted because no full background-equilibrium derivation is asserted.

Independent checks: differentiating the displayed rotation gives d(R^T X)/dt=R^T V-Omega e3 cross x; negative gradient of -|Omega cross x|²/2 is the outward centrifugal acceleration. Dividing pressure difference by positive rho0 gives specific-pressure units. Both equation families and hydrostatic pressure have consistent dimensions. The shallow-water conservative momentum form follows from its advective form and continuity by the product rule, for the stipulated positive smooth depth. Zero rotation, zero diffusion and resting fields cause no singularity; N>0 and positive depth explicitly exclude the relevant degeneracies.

Alpha also corrected the Vallis rotating and shallow-water source page ranges and synchronized the manifest Postulate mirror. These are citation/manifest corrections, without a further interface change. No judge record existed to invalidate. Contract source evidence now describes the actual independent review rather than attributing inherited full-text stamps to this adjudicator.

Direct dependency and reference consumer search over current items found only `pthm-fd-geophysical-conditional-energy` and `ex-fd-coriolis-no-work`, both owned by batch 40. The energy theorem uses precisely the unchanged periodic equations, N>0, coefficient signs and density normalization; it never uses a background-pressure equation. The example uses the unchanged cross product and Coriolis sign. Neither needs repair or another interface propagation hop. No affected outside consumer was identified.

Risk report before proceeding: postulate ORDINARY 2; energy theorem MODERATE 3; example MODERATE 3. No HIGH/CRITICAL item requires a risk_review record. No TikZ/tikzcd diagrams occur in the assigned carriers; no diagram is needed for these explicit coordinate arguments.

## Level-3 example and published dependency

`refuter:40:1`: **confirmed_fatal**, repaired with confidence 1. The immutable original example raw hash `670e3a94ee3517da4de8672b723452f0e49a80acb53c2b6d365596cc95124105` matched the current carrier before Alpha's edit. Vallis equation (1.30) and its following property (iii) are at printed p. 6, PDF page 10, not the original pp. 3–4. This is a genuine inaccurate locator, although the independently verified algebra is sound: e3 cross u=(-u2,u1,0), so u dot (-f e3 cross u)=f(u1u2-u2u1)=0 for every real f and every vector, including zero and vertical vectors. Multiplying velocity by acceleration gives m² s^-3 = W/kg. Alpha changed only Example references and added exact source-review evidence to its contract; no claim, dependency, provenance category or public interface changed.

`reader:40:1`: **confirmed_nonfatal**, closed as **nonfatal-recorded**, without editing the published imported supplier. Its current raw SHA256 is `5a6846f8d796d5c198ff73e67b5d6519cc02b35d861a4bc00ee038e6b42572b4`. Definition paragraphs 2 and 6 still contain the duplicated/merged phrases identified by the reader. However, the displayed equality quantifies over every test subset A, the measurable family is explicitly named, and lambda_n is explicitly its restricted outer set function. The broken prose does not alter those formulas. The separately checked complete-measure and box-volume theorems assume AC_omega, exactly as the local definition and owned physical theorem do. This is an editorial defect, not an unresolved measure-existence prerequisite.

Exact owned dependency path: `pthm-fd-geophysical-conditional-energy` → `thm-fd-stratified-linear-energy` → `def-fd-rotating-stratified-shallow-equations` → `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`. The published supplier's own deps are `def-lebesgue-outer-measure` and `def-caratheodory-measurable-set`, with the complete-measure result in justified_by. Mathematics-owner prose maintenance remains OPEN. The dedicated published ledger and its existing deduplicated classification row record this occurrence; no published correction or import reconciliation is claimed.

## Dependency and source evidence

Read current full owned carriers and their directly used definitions, including the frame convention's absolute-time C2 worldlines and rotating chart, the explicit equation/measure dictionary, Countable Choice, and the full draft stratified-energy proof. Read exact Statements of its six integration suppliers. Product rules give the local kinetic and buoyancy balances, cancel buoyancy exchange, and leave nonnegative diffusion. Every integration section used is continuous on its compact nondegenerate coordinate rectangle; the Riemann-Fubini theorem's all-sections hypothesis is met. Newton–Leibniz applies to fixed-variable C1 sections. Periodic opposite-face fluxes cancel and the Riemann/Lebesgue comparisons use the explicitly adopted AC_omega. Endpoint energies are finite; zero coefficients give conservation, not strict decay. The owned conditional theorem matches these hypotheses exactly. The postulate's background clarification does not supply an empirical premise or change this mathematical argument.

Sources actually consulted through the web PDF text: [Vallis lecture notes](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf), §§1.2.1–1.2.3, printed pp. 4–7, §1.6.2, pp. 13–15, and §2.1, pp. 27–30; [Berloff lecture notes](https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf), Boussinesq and hydrostatic passages at PDF pp. 37–39. These support the broad adopted approximations. They do not supply an exact periodic linear-diffusive reduction or error theorem. Screenshot retrieval failed; the page-6 running header and equation/property location were verified in the PDF text. The attempted local curl/pdftotext route produced no reading evidence because pdftotext is unavailable. No inherited full-text attestation is claimed as this adjudicator's work.

The owned A/B pages have exact manifest inventories, correct supplier-before-consumer order, compact-v1 metadata, and empty bodies. No page decision is owed. All three original item IDs remain, with no withdrawal or new item. Imported source proofs beyond the exact used interfaces were not reconstructed; this review is not a whole-library audit.

## Checks and disposition

- Reflow: both changed item paths unchanged by formatter.
- Focused precheck: 2 checked, 0 failing.
- Focused rendercheck: both changed items and both owned pages, 4 files passed.
- Final batched proof-layout: 2 items, 2 steps, 0 defects.
- Risk report, ordinary and --require-reviewed: 3 items routed, 0 errors, no HIGH/CRITICAL item.

No substantial unmet prerequisite, affected outside consumer repair, or unresolved scoped decision remains. The published prose defect remains open for its mathematics owner despite this scoped nonfatal-recorded disposition. No judge, stamp, engine gate, empirical validation or publication was performed.

Import receipt check: the published Lebesgue-definition raw bytes match `research/math-imports.json`. Four closed defect rows appended through the serialized ledger tool; published-ledger entry merged under the prescribed exclusive lock and existing classification row extended without duplication. Frontier owned-consumer record appended.
