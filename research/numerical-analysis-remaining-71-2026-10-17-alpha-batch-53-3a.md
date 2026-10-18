# Batch 53 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-53. Scope: five touched carriers and three refuter findings; no reader or page obligations. Work follows the generated dependency order. Engine owns hashes, judgment, gates and transitions.

## Level 0 completed

`def-sipdg-jump-average-convention`: accepted the reader repair binding k in N_0. The published polynomial-space Definition permits k=0; the SIP form independently specializes to k>=1. Swapping interior cell labels changes the jump and normal signs together and leaves contractions invariant. Boundary traces are one-sided; the interval convention explicitly uses counting measure and does not claim membership in the d>=2 mesh definition. Suppliers opened: def-matching-affine-simplicial-meshes and def-broken-and-conforming-polynomial-spaces. Pre/post source hashes differ (1b31a75b… to cb88aad1…); the current Definition supplies the missing binding described by the reader. Direct consumers will be checked in the following owned levels; no outside repair has yet been identified.

`lem-sipdg-physical-simplex-trace-green`: current proof reviewed in full. The p=p'=2 reference trace/Green theorem applies under Countable Choice; the Piola field det(B) B^{-1}(G o F) has the stated divergence, and the positive constant surface Jacobian gives bounded traces. Smooth density transferred by the inverse affine map proves map independence. Holder controls both volume and face products; signed change of variables is obtained from positive/negative parts. Exact suppliers opened: affine pullback, smooth density, reference trace/Green, affine area-vector/Green, Holder, change of variables and Countable Choice. No defect; risk review complete.

Sources checked: Guermond Chapter 38, https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf, pp. 192–195 (definitions, Green consistency and penalty stability); local full supplier arguments provide the analytic trace construction. No published defect identified.

Pending: levels 1–4, three citation dispositions, local checks and final ledger/consumer reconciliation.

## Level 1 completed

The bilinear-form Definition has a complete risk review: its D_h consists only of H1 functions admitting L2 divergence and L2 weak normal traces; facet-local smooth tests ensure uniqueness, and physical simplex density extends the identity. Constant symmetric SPD coefficients give the declared real symmetry. Interior flux is half the difference of outward cell fluxes; boundary flux is one-sided. The H2/polynomial inclusions and all face products are justified by the physical trace lemma. Empty sums, k=1, boundary faces and positive h_F were checked.

All three touched examples are reviewed_no_defect with change_kind audit_enrichment, not confirmed defects. The pre-reader prose already specified the interval form; writing it as a formula preserves the argument. Values independently recomputed: volume 1, jump 1, average derivative 1, endpoints zero; gamma=1 gives a_h=1, gamma=1/4 gives energy squared 3/2 and a_h=-1/2. The fixed-bump selection in the old non-H1 proof was elementary; the reader's normalized flat exponential has eta(0)=1 and the scaled L2 norm tends to zero, correctly ruling out the derivative (which would be minus the Dirac mass). Its complete risk review is recorded. All their cited suppliers have been opened.

Historical comparison: for each of the four source-edited reader items, the archived body in owner-planning-integration/step2-verification-markers-before/items, combined in memory with current frontmatter, reproduces the exact frozen pre-reader raw SHA256. The four current raw hashes match the post-reader hashes. Thus these deltas are checked against exact bytes, not inferred from different digests. No historical uncertainty is claimed. D01 records the genuine missing degree binding; no defect rows are manufactured for the three enrichments.

Next: level 2 adjoint/source repair, boundedness, norm and consistency.

## Level 2: adjoint consistency completed

Refuter 53:1 is confirmed_fatal (citation-inaccurate), D02. Guermond's §38.3 starts on p.196 and contains the duality setup on p.198 and Theorem 38.12 on p.199; §38.5 is not their location. Corrected the item and manifest to §38.2.1 and §38.3. No Statement or proof change, and no judge record exists to invalidate. All three proof steps were reviewed: the scalar Green test e and field A_K grad z are admissible, symmetry gives the gradient pairing, matching fluxes leave q(z)[e], and [z]=0 on every facet cancels the remaining term. Risk review complete with exact regularity and transmission assumptions. ABCM §§3.3 and 5.1, pp.1757–1759 and 1767–1768, independently checked as additional source context. Next: boundedness, definiteness and primal consistency at level 2.

## Remaining level 2 completed

`lem-sipdg-boundedness-augmented-norm`: weighted Holder and finite Cauchy–Schwarz bound the two face fluxes by gamma^(-1/2) each. The gradient/penalty pairing is bounded by the DG product, so the proved constant 1+2/sqrt(gamma) implies the stated larger constant. Positivity and expansion of that pairing establish the seminorm axioms on D_h. No inverse estimate or mesh-dependent bound is silently required.

`lem-sipdg-energy-seminorm-is-a-norm`: zero energy implies polynomial cell constants, with equality along facet adjacency. Each adjacency component has a boundary facet: otherwise summing the physical Green identity for G=x over that component gives d times positive volume equal to zero. Boundary jump penalization kills each constant. This works without connectedness of the domain or adjacency graph. The remaining norm axioms follow from the SPD pairing and Holder/finite Cauchy–Schwarz.

`thm-sipdg-exact-consistency`: reviewed_no_defect, audit_enrichment. Pre/post item hash is identical; the touched obligation comes from an updated supplier quotation in the contract. All three proof steps are sound: cellwise H2 makes A grad u a W1,2 field, normal-flux matching gives the oriented q(u)[w] sum, and zero/matching traces make [u]=0, leaving exact cancellation. All three risk reviews complete. Exact suppliers already opened plus thm-cauchy-schwarz-and-the-euclidean-norm (full current statement and proof) checked.

Next: level 3 coercivity and L2 duality; then level 4 energy estimate.

## Level 3: coercivity completed

The local inverse-flux proof and full published polynomial inverse/trace proof were read. For degree k-1>=0 and p=q=2 the supplier gives h_K^(-1/2); h_F<=h_K removes the size factor, coefficient bounds give Lambda squared/lambda, and each cell has d+1 facets. Coercivity then follows from 2 sqrt(C_flux) X J <= X squared/2 + 2 C_flux J squared, including gamma=4 C_flux. Norm definiteness makes the finite symmetric matrix injective and therefore invertible; the empty-mesh case is the trivial zero-dimensional system. Risk review complete. No defect. Next: conditional L2 estimate and refuter 53:3.

## Level 3: L2 estimate completed

Refuter 53:3 is confirmed_fatal (citation-inaccurate), D03. Corrected §38.2.3 to §38.3 in the item and manifest, retaining Theorem 38.12 and pp.198–199. Its proof is sound as a conditional result: e is cellwise H2; the dual weak equation tested inside a cell gives divergence -e; explicitly assumed weak L2 flux traces place z_e in D_h. At s=1 the proved H2 adjoint identity applies with the required matching/zero value traces and matching coefficient fluxes. At s<1 that identity is expressly assumed, as are normed dual regularity and augmented approximation. No fractional trace or regularity theorem is silently substituted. Orthogonality yields a_h(e,z_e-z_h), boundedness and the two assumed inequalities give the estimate, and e=0 precedes division. Zero approximation/regularity constants are harmless. Risk review complete. No substantial missing prerequisite. Next: level 4 energy estimate and refuter 53:2.

## Level 4 completed

Refuter 53:2 is confirmed_fatal (citation-inaccurate), D04. Guermond Theorem 38.10 is under §38.3, not §38.2.3; corrected the item and manifest, retaining pp.197–198. Every step of the current energy proof was checked. For z_h=u_h-w_h the exact/discrete equations give a_h(z_h,z_h)=a_h(u-w_h,z_h). The inverse-flux estimate bounds its augmented norm by sqrt(1+C_flux) times its energy norm. Half-coercivity and boundedness give the stated estimate for z_h, with the zero case handled first; the already-proved seminorm triangle on D_h gives the final constant. The bound holds for every approximant, so taking the infimum requires no attaining minimizer. The nonempty admissible set contains zero. No rate is claimed. Risk review complete.

All owed item reviews and risk reviews are now complete. Remaining work: verify definition consumers, local proof/metadata checks and final ledger/decision coverage.

## Consumer disposition and final checks

The Definition degree change has exactly five direct item dependency/reference consumers found by searching current items and every current run page manifest: def-sipdg-bilinear-form-and-energy-norm, thm-sipdg-exact-consistency, ex-sipdg-broken-function-is-not-h1, ex-sipdg-one-dimensional-interior-jump and ex-sipdg-small-penalty-loses-coercivity. Their actual uses were reviewed in the ordered passes above: the form fixes k>=1, consistency inherits that space, and the interval examples independently specify constants or affine polynomials and use only the jump convention. Each remains sound; no consumer edit is necessary. The A-page summary is also accurate and unchanged. No outside item or other run manifest consumes the changed Definition. The batch cross-dependency file is empty and remains unchanged. The frontier-dependency ledger has the batch-53 record; stable IDs and all pre-existing withdrawals are preserved.

There were no defective published prerequisites, published edits, page-only obligations or unresolved escalations. No new item/page, judged verdict, stamp or certification was created. The three source edits are locator-only, with unchanged Statement, Facts and Proof bodies and existing provenance; their manifest source mirrors are updated. Reversing each locator edit reproduces its exact frozen post-reader raw hash. No verification.judge records were present on those items.

Local validation, all exit 0:

- Initial risk-report on the owned contract (without --require-reviewed): 14 routed items, ten HIGH/CRITICAL; all ten now have specific complete reviews. Final identical contract with --require-reviewed: 0 errors.
- node tools/tsx-run.mjs tools/reflow.mts on the three edited item paths: all unchanged.
- node tools/tsx-run.mjs tools/precheck.mts on those three paths: 3 checked, 0 failing.
- node tools/rendercheck.mjs on those three paths: all three YAML and real KaTeX parses pass.
- node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-53.proof-contracts.json --strict: 14/14 checked, 0 errors, 0 warnings.
- Final single batched node tools/proof-layout.mjs items/lem-sipdg-adjoint-consistency-h2.md items/thm-sipdg-l2-error-under-adjoint-regularity.md items/thm-sipdg-energy-error-estimate.md: 3 items, 9 steps, 0 defects. No later item edit.
- Focused JSON/YAML reconciliation: all fourteen manifest deps/sources/provenance match current item frontmatter; exactly eight owed decisions and four uniquely referenced fixed defect rows. The four source-edited reader carriers match their frozen post-reader source hashes; consistency's unchanged source also matches.
- Each defect row was appended with the serialized defect-ledger tool, which validated and regenerated the shared view. D01 is the missing degree binding, D02 the adjoint locator, D03 the L2 locator, D04 the energy locator. All are fixed with repair_confidence=1 and caught_at_stage=3a-adjudicate.

Read-only native status confirmed this run is active, with Step 3 adjudication incomplete and no worker in flight at that read; latest Git commit inspected was 1bc7d6bead. No run controls were changed. These are focused local checks, not an engine battery or acceptance certificate.

## Handoff

Eight decisions complete: one accepted repair; four reviewed_no_defect audit enrichments; three confirmed_fatal citation defects repaired. Ten required risk reviews complete. No batch-53 blocker remains. Engine owns decision hash sealing, further gates and scheduling.
