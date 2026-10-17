# Batch 52 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-52`; scope: batch 52 only. All four routed obligations are decided. No page-only obligation, reader finding, proposed withdrawal or unresolved local mathematical blocker remains. These are local adjudication records, not judge verdicts or publication approval.

## Decisions and repairs

1. `touched:52:lem-tgr-killing-energy-normalization`: **amended_repair**, repair_confidence 1. Retained the reader's explicit N time orientation, AC_omega Levi-Civita connection, U-domain temperature, pointwise covector types and unit conventions, and horizon coefficient domain. Corrected the remaining Given tuple `(M,g,V,U)` to `(M,g,N,U)`. Alpha changed only this Facts entry in the carrier; the Statement, dependencies, proof and provenance remain unchanged.
2. `refuter:52:1`: **confirmed_nonfatal**, repair_confidence 1. The actual post-reader Given entry contained undefined V while its Statement and `def-gr-smooth-lorentzian-objects` clause (c) supplied N. The one-symbol correction completely resolves this notation defect. It is not a mathematical counterexample to the theorem.
3. `touched:52:cor-tgr-killing-no-work-support`: **accepted_repair**, repair_confidence 1. The revised title accurately states the divergence-free conclusion under zero Killing contraction; it avoids undefined external-support terminology and retains the separate finite-side-flux criterion for equal endpoint charges. No further carrier edit.
4. `touched:52:ex-tgr-reference-wall-normalization`: **accepted_repair**, repair_confidence 1. Retained the explicit SI length convention, positive dimensionless reference lapse, U-domains and pointwise momentum/temperature pairings. No further carrier edit.

Each decision references its own closed `research/defect-ledger.jsonl` row, owned at `3a-adjudicate`. The refuter finding has exactly one row. No mechanical contract mismatch was turned into a defect row.

## Mathematical review in dependency order

Completed the level-4 lemma and recorded its complete risk review before proceeding to the level-5 corollary, then completed that corollary and risk review before the example. Read all current proof steps, each declared direct supplier's actual Statement or Definition, the batch-52 contract, manifests, reader report/findings and refuter artifact. No rendered evidence bundle was named by the dispatch.

For the lemma, the supplied AC_omega Levi-Civita derivative obeys the contraction/product rule. Conserved symmetric T and the Killing characterization give div j=0. Smoothness supplies the C1 current on a neighborhood of the compact coordinate closure. Index lowering gives exactly `-g(j,n)=T_ab n^a xi^b`, with the required sign. Substitution in the actual draft finite-slab balance proves both directions of endpoint equality iff zero net outward side flux; pointwise zero flux is not necessary. In the orthogonal static subcase, n=u and xi=Nxi u give the lapse-weighted density. Positive constant rescaling preserves the Killing equation, rescales j and H, and gives N_(a xi)=a Nxi and unchanged u. Pointwise temperature and covector pairings scale linearly. Mechanical momentum requires c, wave covectors require hbar c, and energy-valued covectors require no additional c. The horizon calculation uses only the assumed equation nabla_xi xi=kappa_xi xi and nonzero xi, so kappa_(a xi)=a kappa_xi; it proves no horizon existence, constancy or temperature law.

For the corollary, div T=f explicitly replaces conserved stress. It uses the lemma's geometry and definitions, not its conserved-stress conclusion. The product rule gives div j=-f·xi-T^{ab} nabla_a xi_b. Symmetry and the Killing equation remove the second term; assumed f·xi=0 removes the first. The same exact finite-slab theorem gives the conditional balance. Static xi=Nxi u gives f·xi=Nxi(f·u). All four steps are sound.

For the example, Nref>0 is supplied at the selected wall event. Its reciprocal is a dimensionless positive constant, so the lemma applies on the fixed chart and slices. Lapse, temperature, particle-energy pairing and finite charge all divide by Nref; division by the positive rescaled lapse cancels that factor in each ratio. No differentiation or integration of temperature or momentum is used, so their pointwise claims require no additional regularity. Neither equilibrium nor spatial temperature constancy follows. All three Verification steps are sound.

Boundary review includes zero T/current and unrestricted zero xi (excluded separately in the static/horizon clauses), algebraic zero momentum, a=1, positive lapse/reference lapse, nonzero horizon generator, nonempty rectangular factors, compact-closure integrability, both closed time endpoints, both directions of the side-flux equivalence, and exactly the inherited AC_omega background. No full Choice selection, infinite exhaustion or empirical premise is used. The three items are mathematical deductions about supplied data; physical units and interpretations do not establish that the data describe nature.

## Sources and suppliers

Direct mathematical suppliers inspected: `def-gr-smooth-lorentzian-objects`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-tensor-fields-and-components`, `def-gr-killing-field`, `def-countable-choice`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-killing-and-on-shell-matter-identities`, `def-tgr-spacelike-current-slab`, and `thm-tgr-finite-current-production-balance`, plus the previously completed owned lemma for its consumers. Only clause (a) of the Killing-characterization theorem is needed; no on-shell matter-action hypothesis is imported. The exact draft production balance is proved locally by density differentiation, coordinate FTC and Jordan-section integration, and its current Statement is retained conditionally in the consumers. The supplier proof was read; this review does not independently re-audit every transitive imported proof.

Checked relevant primary-source passages directly:

- [Reall, Part III General Relativity](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf): section 5.3, equations (5.21)-(5.23) and current exercise, zero-based PDF pages P56-P57; section 6.3, observer density/current on P65; section 8.7, equations (8.65)-(8.71), P109-P111. The rectangular C1 balance is a local supplier result, not an unqualified application of the source's normal-flux theorem to null faces.
- [Tong, General Relativity, chapter 4](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html): section 4.5.5, current construction/divergence and the boundary-leakage qualification. The sign of the local charge is fixed by the explicit normal/flux definition.
- [Carroll, Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019): printed page 140, PDF page 147 (P146), equations (5.41)-(5.43), for the covariant Killing characterization and contraction argument.

No full-text reading of unrelated chapters, source harvesting, experiment review or statistical inference is claimed.

## Historical comparison and consumer maintenance

Read the immutable pre/post snapshots. Every assigned item's pre/post raw hash differs; each current item at entry exactly matched its post-reader raw hash. Initial hashes were 941ff39578509db09c8f2814e5ac1b517ddbb43b64c2eb7be7d4fa7a6c7d0c85 (lemma), 341e7b903d07637b3a8be65aefe58862829653de538d0b18f2fdaeae0736b5e0 (corollary), and d71d0f275fc9e84670393388f3ebb2fa819828c7b5aa9c60fa52f42c978593a6 (example). The unchanged manifest text retained the older lemma/example statements and independently identifies their reader clarifications. No unavailable full historical item preimage was represented as read, and no owner-only historical disposition was invoked.

Synchronized the two stale batch-52 statement snapshots to the actual accepted carriers. Updated the example's stale F1 supplier quotation, restored exact bold punctuation in the lemma's F1 quotation, and corrected two stale boundary step locators. Retained provenance and stable IDs; no judge record existed to invalidate. All three complete risk_review records are in the owning proof contract.

Searched every item and page for actual uses of all three owned IDs. The lemma's only direct item consumers are the assigned corollary/example and outside batch-54 `def-tgr-framework-units`; both assigned uses were checked above. Read the current outside definition: its length-coordinate convention, mechanical/wave/energy pairings, proper versus Killing-normalized temperature, conditional finite matter charge and conditional horizon coefficient agree with the accepted lemma. Its Definition needs no change, so no further consumer hop or outside repair is triggered. No item consumes the corollary or example. The two assigned page summaries remain accurate and unchanged. The example's interface clarification has no outside consumer. No published defect was confirmed, and no imported or published file was edited.

Updated all six owned cross-batch review rows to document exact current supplier uses and refreshed the derived frontier ledger. Independently compared the two relevant batch-50 Statement and dependency snapshots with current carriers: both now agree. Their draft status and the consumers' conditional qualification remain. These scoped use reviews do not erase historical readiness escalations, confer publication approval or assert owner resolution. The refuter's separately retained out_of_scope_context alert about batch-54 source locators remains with that owner; it is not a batch-52 decision obligation and was neither repaired nor closed here.

## Local validation and handoff

- Initial risk-report: two CRITICAL items (scores 15 and 12), one HIGH item (score 6); no tool errors. All steps and source evidence reviewed and specific complete risk_review records authored.
- Final risk-report with `--require-reviewed`: 3 items, 0 errors.
- Strict proof-contract: 3/3 items, 0 errors or warnings after exact quotation synchronization.
- Reflow on the sole Alpha-edited item: unchanged. Precheck: all three items pass, 0 failing.
- Rendercheck: all three items and both assigned pages pass, 0 errors.
- Final proof-layout on `items/lem-tgr-killing-energy-normalization.md`: 1 item, 8 steps, 0 defects; run after the final item edit and formatter. The other two carriers were not edited by Alpha.
- Frontier dependency-ledger refresh: success, refreshed and deduplicated.

No judge, stamp, self-certification, dispatch or gate battery was initiated. The engine retains hash/stamp/gate duties. No substantial unmet local prerequisite or required outside consumer repair remains; historical owner readiness records remain intact.
