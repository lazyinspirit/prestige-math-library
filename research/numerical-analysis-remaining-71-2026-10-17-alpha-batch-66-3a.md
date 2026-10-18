# Step 3a adjudication — batch 66

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-66`. Scope: twelve touched obligations, zero page/reader/refuter obligations. The original scope assignment group `v` is preserved. No item outside batch 66 was edited.

The current fifteen item files initially matched every post-reader raw SHA-256. Pre/post comparison identifies eleven changed source files and an unchanged front example with changed contract. For every changed source, reversing the recorded unified diff recovered the complete pre-reader bytes exactly: each SHA-256 equals `step3-hash-66-pre.json`. The diff evidence is in `numerical-analysis-remaining-71-2026-10-17-dispatch/reader-reader-66.attempt-1.log`, lines 22333–22547 (item-specific diff headers); no log text is copied into this report. This targeted historical recovery was necessary because Git HEAD does not contain these exact preimages. Temporary reconstructed files are computational aids only. No historical-delta uncertainty remains.

## def-phase-field-gradient-flow-and-double-well

Obligation: `touched:66:def-phase-field-gradient-flow-and-double-well`. Verdict: `accepted_repair`; repair_confidence: 1.

The added d>=5 caveat correctly distinguishes finite quartic energy from the continuity of the cubic pairing on all H1 tests. On a ball choose (d+2)/6<alpha<d/4 and d-3alpha<beta<(d-2)/2: cutoff r^(-alpha) belongs to H1 intersect L4, cutoff r^(-beta) belongs to H1, and their cubic/test product is not integrable. The current definition requires the additional pairing integrability rather than asserting it follows from finite energy. The d=2 critical and d=3 subcritical embedding suppliers have precisely the stated extension-domain and AC hypotheses.

## ex-phase-field-allen-cahn-stationary-front

Obligation: `touched:66:ex-phase-field-allen-cahn-stationary-front`. Verdict: `reviewed_no_defect`; change_kind: `audit_enrichment`.

The item bytes are identical pre/post; only its contract changed. With a=(sqrt(2*kappa)*epsilon)^(-1), u''=2a^2(u^3-u); 2*kappa*a^2=epsilon^(-2). Both energy contributions equal sech^4(ax)/(4*epsilon^2); their sum is integrable. The limits are -1 and 1 on R, with no asserted bounded-interval boundary condition.

## def-phase-field-discrete-realizations

Obligation: `touched:66:def-phase-field-discrete-realizations`. Verdict: `reviewed_no_defect`; change_kind: `metadata`.

Only the mixed-equation PDF locator changes. Shen-Yang (3.1) is printed p.1681 / PDF p.13. Both mass forms are positive definite, interior transmissibilities are positive, no boundary penalty is imported, and Fc-Fe equals the given quartic potential. The conforming center-to-center integral gives exactly the displayed stiffness, including constant boundary half-cells and N=1.

## ex-phase-field-interface-width-and-grid-resolution

Obligation: `touched:66:ex-phase-field-interface-width-and-grid-resolution`. Verdict: `amended_repair`; repair_confidence: 1.

The reader narrowed the locator to the wrong page. The exact interfacial-width sentence is on Shen-Yang printed p.1670 / PDF p.2; corrected that locator. Monotonicity of tanh gives endpoints +/-sqrt(2*kappa)*epsilon*artanh(1/2). For h>W every half-shifted node has distance >=h/2>W/2; equality h=W would put the nearest nodes at the endpoints and is correctly excluded. Mathematics and statement are unchanged.

## alg-phase-field-sav-cahn-hilliard-step

Obligation: `touched:66:alg-phase-field-sav-cahn-hilliard-step`. Verdict: `accepted_repair`; repair_confidence: 1.

The reader moved solvability and dissipation properties out of the defining procedure into Remarks pointing to the separate proved theorem. The defining three linear equations, admissible positive inputs and output tuple are unchanged. In either realization E1>=0 and C0>0 make alpha finite and positive; the finite-dimensional Riesz gradient is defined by positive mass. The independent auxiliary variable is not reset to sqrt(E1+C0). The unique-solve and energy claims are justified by the complete SAV proof.

## def-phase-field-stabilized-semi-implicit-variant

Obligation: `touched:66:def-phase-field-stabilized-semi-implicit-variant`. Verdict: `amended_repair`; repair_confidence: 1.

The procedure formulas are unchanged. Shen-Yang (2.6) appears on PDF pp.4-5 and (3.7) on PDF p.14 / printed p.1682. Its coefficient is S/epsilon^2 with unit mobility and stiffness. The current locator explicitly distinguishes the locally defined general M,kappa,S and imports none of the source bounded-F-second-derivative stability hypotheses or conclusions. S=0 is admissible. The reader source locator had invalid double-quoted YAML (unescaped backslash-k, and backslash-v with escape semantics). Replaced its quoting by a single-quoted scalar with a doubled internal apostrophe; literal TeX and the unchanged mathematical Definition are preserved. This is a concrete frontmatter defect, not a defect row for a failed tool invocation.

## lem-phase-field-interval-p1-projector-stability

Obligation: `touched:66:lem-phase-field-interval-p1-projector-stability`. Verdict: `reviewed_no_defect`; change_kind: `metadata`.

Only the source locator and characterization change: Clason Chapter12 section12.1 on PDF pp.105-106 supplies L2 projection and parabolic context; all local estimates remain proved here. Step1.1 uses the AC representative and Cauchy-Schwarz on center intervals and boundary half-cells. The affine mass lower bound yields the sqrt(12)/h inverse estimate. Projection contraction plus interpolation proves uniform H1 stability. Smooth approximation of v' followed by integration from v(0) gives H1 density without a zero-trace restriction; stability and density give strong H1 and L2 convergence. N=1 has zero derivative and satisfies the same bounds. AC supplies the representative and Countable Choice density assumptions.

## thm-phase-field-sav-modified-energy-law

Obligation: `touched:66:thm-phase-field-sav-modified-energy-law`. Verdict: `reviewed_no_defect`; change_kind: `metadata`.

Only source metadata and the corresponding contract quote change. For the difference system, testing gives kappa<Av,v>+2s^2+M*tau<A nu,nu>=0; constant-kernel identification and the first equation force v=0, then s=nu=0. A square finite linear system is therefore invertible. Constant testing conserves mass, and polarization of the A quadratic and 2r_new*(r_new-r_old) gives exactly the stated dissipation identity. This includes one-cell A=0 and arbitrary old r. The source sections3-4 concern continuous/BDF2/Crank-Nicolson variants; the present backward-Euler result is proved locally.

## thm-phase-field-convex-splitting-step-existence-and-energy

Obligation: `touched:66:thm-phase-field-convex-splitting-step-existence-and-energy`. Verdict: `reviewed_no_defect`; change_kind: `metadata`.

Only Guo source locators change. On each fixed finite space the quartic form has a positive minimum on its nonempty unit sphere, hence dominates linear terms. For the abstract convex components the positive norm-square terms dominate the linear term because a differentiable convex Pc has an affine lower bound. The AC objective is strictly convex; the CH objective is strictly convex on mean-zero directions through A-dagger. Compact sublevels give unique minimizers, including the one-cell singleton CH constraint. The Euler vector is zero for AC and constant modulo the mean-zero space for CH; applying A yields the recurrence. Convex supporting inequalities with the nonnegative gradient increment give the two physical-energy inequalities. The reference in step4.1 to step1.2 rather than step2.1 is harmless: the displayed recurrence was explicitly established in step2.1. No proof repair needed.

## cex-phase-field-sav-modified-energy-not-physical-energy

Obligation: `touched:66:cex-phase-field-sav-modified-energy-not-physical-energy`. Verdict: `reviewed_no_defect`; change_kind: `metadata`.

Only the source locator and contract source quote change. Unit-volume one-cell A=0 reduces the energies to r^2 and (u^2-1)^2/4. The displayed arbitrary pairs give modified energy 1 to 1/4 and physical energy 0 to 1/4. The item explicitly refutes the scalar implication alone, and does not misidentify these mass-changing pairs as a SAV trajectory. Shen-Xu-Yang Remark3.2(iv) and (3.2) are on printed p.410 / PDF p.4.

## thm-phase-field-convex-splitting-ac-ch-time-error

Obligation: `touched:66:thm-phase-field-convex-splitting-ac-ch-time-error`. Verdict: `reviewed_no_defect`; change_kind: `audit_enrichment`.

The reader expands an elementary duality calculation and makes constant dependence explicit; this is audit enrichment, with no defective theorem being closed. On the fixed space the exact C2 trajectory gives residual O(tau^2); the CH residual has mean zero. Ge=2u/epsilon^2 in both exact-mass realizations. Monotonicity controls the implicit term, and Cauchy-Schwarz in (x,y)_A gives |<e_n,e_new>|<=||e_n||_-1 ||e_new||_1, using A-dagger only on mean-zero errors. Young absorption yields z_new<=(1+C*tau)z_old+C*tau^3. Starting at zero and summing the geometric series gives O(tau) error with mesh/epsilon/M/kappa/trajectory/T dependent constants. The zero-dimensional mean-zero case is vacuous. No uniform mesh or epsilon estimate is inferred.

## thm-phase-field-convex-splitting-mesh-time-convergence

Obligation: `touched:66:thm-phase-field-convex-splitting-mesh-time-convergence`. Verdict: `accepted_repair`; repair_confidence: 1.

The reader resolves the time-ambiguous chemical-potential equation by quantifying eta in L2(0,T) and psi in H1 and integrating in time. Initial projector stability, the quartic lower bound and the one-dimensional AC representative give uniform H1 and Linfinity bounds. CH chemical-potential means are bounded by testing with 1, and the elementary mean Poincare bound controls the full H1 norm. Orthogonality and H1 stability of P_h yield the derivative bound in (H1)*. The current PE12 compactness theorem applies with p=q=2 and independent h,tau tending to zero; the separable Bochner Hilbert supplier provides weak subsequences. The lagged/new states differ by O(sqrt(tau)) in L2 through V*-V duality, so the cubic split converges strongly in L2 on the common bounded range. Compact-set uniform convergence of P_h permits summation by parts with C1 tests, including the initial term and zero terminal term. The second mixed equation passes with eta(t)P_h psi. Strong L2 convergence preserves the mean a.e. AC and the fixed-epsilon interval restriction are explicit.

## Additional required risk review

For ex-phase-field-ch-two-cell-energy-ledger (risk only, no owed decision), mean conservation restricts the step to (a,-a). The chemical potential is (a^3+3a-2,-a^3-3a+2), giving 2a^3+7a-5=0. Its derivative is positive and values at 0,1 have opposite signs. The energy is 1/2+a^2+a^4/2, strictly increasing in a on (0,1), hence less than its value 2 at 1. The one-step physical-energy and zero-mean claims agree with the theorem. No decision is owed for this untouched, unflagged item. All eight HIGH/CRITICAL reviews are complete in the owned contract; they record concrete proof checks rather than accepting the author self-check. The kernel supplier was also read in full: connectedness gives the constant kernel, rank-nullity the mean-zero range, and positivity on its nonempty unit sphere the mesh-dependent Poincare bound; the zero-dimensional case is treated separately.

## Sources and prerequisites

The cited current item statements were opened, including the Sobolev definitions and d=2/d=3 embeddings, AC axiom, FV geometry/TPFA definitions, finite-dimensional extreme-value theorem, interval AC representative, smooth L2 density and classical weak derivatives, PE12 evolution triple and full discrete compactness proof, full published Bochner weak compactness proof, Rellich compactness, and Holder inequality. Their hypotheses and uses are checked above; this is not an audit of all transitive source dependencies.

Authoritative full texts were available in the authenticated batch source cache. Read relevant passages directly from their extracted page-separated texts, not just the earlier reports:

- Shen–Yang, https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf; `/tmp/pe23-shen-yang.pdf` and `.txt`: PDF pp.1–2 (models, energy, bounded-derivative qualification), pp.4–5 ((2.6), stabilization and its conditions), pp.13–14 ((3.1), (3.7)). The interfacial-width sentence is printed p.1670 / PDF p.2. Smooth-solution error references are context; the fixed-mesh proof is local.
- Shen–Xu–Yang, https://www.math.purdue.edu/~shen7/pub/SXY17.pdf; `/tmp/pe23-sav-paper.pdf` and `.txt`: PDF pp.2–6, convex splitting (2.1)–(2.2), continuous SAV (3.1)–(3.2), Remark3.2(iv), and the distinct general Crank–Nicolson formulation (4.2)–(4.5)/Theorem4.1. No Crank–Nicolson theorem is used to prove the local backward-Euler identity.
- Clason, https://arxiv.org/pdf/1709.08618v2.pdf; `/tmp/pe23-clason.pdf` and `.txt`: Chapter12, PDF pp.105–109, printed pp.102–106. The L2 projector/method-of-lines discussion is on PDF p.105; the interval projector estimates and compactness application are local.
- Guo–Wang–Wise–Yue, https://www.intlpress.com/site/pub/files/_fulltext/journals/cms/2016/0014/0002/CMS-2016-0014-0002-a008.pdf; `/tmp/pe23-guo-et-al.pdf` and `.txt`: PDF pp.2,5–6,14–19, including (1.4), Theorems2.2–2.3, and the complete Theorem4.1 error argument. The latter assumes periodic smooth solutions and small time step for a distinct second-order scheme; none of these conclusions substitutes for the local interval proof.
- Droniou, https://arxiv.org/pdf/1407.1567; `/tmp/pe23-droniou-fv.pdf` and `.txt`: section2, PDF pp.8–10, interior conductances (2.4), Dirichlet energy (2.6) and boundary distinction.
- Eymard–Gallouet–Herbin, https://raphaeleh.github.io/PUBLI/bookevol.pdf; `/tmp/pe23-fv-book.pdf` and `.txt`: Chapter10, printed pp.63–65, definitions10.1–10.2, equations(10.7)–(10.9), complete Lemma10.1 kernel/gauge proof and the statement of mean Poincare. Only the interior conductances are used; local proofs supply the required finite-dimensional claims.

## Consumer and published dispositions

The definition caveat affects only the admissibility of nonlinear weak tests. All direct item/reference consumers were enumerated in `items/` and `library/`: every actual use is in this batch and was read. The discrete realizations and algorithms use finite-dimensional polynomial gradients; the examples use explicit smooth/scalar data; the PDE limit uses d=1 and derives Linfinity bounds. No consumer relies on the excluded high-dimensional inference, so none needs a mathematical repair. SAV instruction equations are unchanged; relocation of their properties needs no consumer repair. The time-error constant clarification has only the current A-page summary as a reference consumer; its conditional fixed-mesh statement remains sound. The integrated chemical-potential formulation has only that A-page summary as consumer; its weak-solution claim remains valid. No changes propagate another hop. Both current page summaries were read for these consumer uses, with no extra page decision.

No defective published mathematical supplier was found; published items remain read-only. No published-consumer ledger row is needed. Cross-batch consumer records and the frontier ledger are maintained with current PE12 and FV interface evidence. No withdrawal is removed.

## Repairs, checks, and blockers

Two local item edits correct the remaining width-example source locator and the stabilized-variant locator YAML quoting. The reader mathematical clarifications are retained. Corresponding manifest source metadata is synchronized with current scoped items, and the width contract has no external-source quotation to update. Its specific risk review records the corrected source page. The source-only edit does not change proof provenance or invalidate a judge stamp; no material local proof rewrite was made. Closed nonfatal defect rows record the three accepted reader clarifications and the two amended locators, each owned at `3a-adjudicate` and referenced by its touched decision. Metadata-only corrections and elementary audit enrichment receive no defect IDs.

Validation completed successfully (all commands exited 0):

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-phase-field-interface-width-and-grid-resolution.md items/def-phase-field-stabilized-semi-implicit-variant.md`: both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` with all fifteen explicit batch-66 item paths in `scope.manifest_post` order: ten proofs checked, zero failures; five definition/algorithm files have no applicable phase proof.
- `node tools/rendercheck.mjs` with those same fifteen explicit item paths: all YAML mappings and KaTeX spans parse.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-66.proof-contracts.json --strict`: ten contracts checked, zero errors or warnings.
- `node tools/finite-smoke.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-66.proof-contracts.json`: four selected fixtures passed (one-cell kernel, one-cell SAV, scalar counterexample, two-cell CH). These finite checks supplement the proofs.
- `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-66.proof-contracts.json` was run before review; its `--require-reviewed` rerun passed with zero errors and concrete independent reviews for all eight HIGH/CRITICAL items.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-analysis-remaining-71-2026-10-17`: refreshed and deduplicated after the owned cross-batch records were updated.
- The final single layout invocation, after all item edits and reflow, was `node tools/proof-layout.mjs items/ex-phase-field-interface-width-and-grid-resolution.md items/def-phase-field-stabilized-semi-implicit-variant.md`: two items, two numbered proof steps, zero defects. No item edits followed.
- The decision inventory was compared directly with the scope: exactly twelve owed and twelve written touched decisions; five referenced closed defect rows match their subjects; no extra decisions. Current item hashes differ from the reader-post snapshot only for the two explicitly amended locators. All six cached source-PDF hashes match the existing source-coverage evidence.

No mathematical blocker or escalation remains. The engine owns hash stamping, gate battery and stage transitions; no judge cycle or certification was initiated.

Final local raw item fingerprints (evidence only, not decision stamps):

- `ex-phase-field-interface-width-and-grid-resolution`: `85cc8b064a224c948fd92ecfad265129098ab846ac5bc3fdb0472f33ce13ae94`.
- `def-phase-field-stabilized-semi-implicit-variant`: `0980897d8bb534f1a1c5bb67ad1500f050ef1a8211cda4063530efd28e759c5f`.
