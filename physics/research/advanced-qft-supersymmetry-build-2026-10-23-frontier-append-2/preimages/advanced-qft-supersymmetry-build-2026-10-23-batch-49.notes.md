# Batch 49 — Step 1 authoring evidence

Run: advanced-qft-supersymmetry-build-2026-10-23
Batch: 49 (beta, advanced-qft-and-supersymmetry)

## Plan, inventory, and dependency order

The complete assigned design section is “Three-Dimensional S3 Localization Examples” in research/plan-advanced-qft-and-supersymmetry-track.md (page entry at lines 681–689). It specifies the source-faithful N=2 Chern–Simons–matter setup, radius/level/R-charge/contour conventions, and matrix integral. The matching research/plan-spec.json rows and current batch-49 manifest agree on A/B IDs, title, category, physics library, order 1005, companion, and page requirements. No design/plan conflict was found. The manifest starts with empty item arrays as placeholders; the integrated contracts in research/advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json assign post-qftx-s3-cs-matter-localization-model to A with no logical item dependencies and ex-qftx-s3-cs-matter-matrix-integral to B with the postulate as its sole physical-assumption dependency.

The current research/advanced-qft-supersymmetry-build-2026-10-23-batch-dependency-levels.json places batch 49 at level 9 with in-run page prerequisites batches 43 and 48. The exact pages are qftx-anomaly-matching-and-frontier and qftx-qexact-field-theory-localization. Item levels before authored carriers are: the postulate will be 0 (no in-run item suppliers); the B example will be 1 (one supplier at level 0). Page-level ordering remains independent: the companion B page requires its A page within this batch.

## Supplier interface inspection and current readiness

The current batch-48 qftx-qexact-field-theory-localization A page contains def-qftx-supersymmetry-fluctuation-complex and pthm-qftx-qexact-localization-ward-identity. loadStep1Record plus step1Decision reports both ready with current records. I read the complete definition and theorem statements/proof. The theorem is conditional on a fixed finite-dimensional Q-preserving regulator, Q-closed data, the Q-squared condition, zero Q-boundary integral, and compact-parameter L1 majorants. Its physical model is N=4 on S4; it proves no continuum measure, regulator construction, t-to-infinity limit, or S3 matrix-integral formula. This page supports the caveat only; it is not a logical premise of either new item. Its page edge is verified for this scoped interface check, not for independent proof acceptance.

The current batch-43 qftx-anomaly-matching-and-frontier A page contains def-aqft-exact-background-rg-flow, pthm-aqft-symmetry-preserving-rg-anomaly-match, and op-aqft-fusion-two-category-anomaly-classification. Current loadStep1Record/step1Decision reports the first item's record missing, the theorem's record missing, and the open problem's record missing. The theorem's proof is conditional on def-aqft-thooft-anomaly and def-aqft-global-anomaly-holonomy; I inspected both full current definition carriers. The former has a ready current record, but its declared dependency_level 0 differs from the current in-run recomputation level 3. The latter exists in batch 42 but has a current escalated record. That record's stored reason refers to an earlier missing readiness record for def-aqft-thooft-anomaly and an earlier dependency-level mismatch; current inspection now finds the first definition's record ready and the global-holonomy definition's declared level 4 matches the current level calculation, but the escalated disposition remains unresolved. Its own Fact [F1] says the first definition's current readiness record is missing, which is stale against the live ready record. Separately, the anomaly theorem's Facts [F1]/[F2] say both definitions are absent from batches 41/42, but both item files exist and the current manifests list them. This is stale factual content in the required supplier chain. The full-frontier statement-first check also reports a Status-references placement defect in op-aqft-fusion-two-category-anomaly-classification. Do not repair the outside items here. The batch-49 page edge to batch 43 remains open pending owner/batch-43 repairs and current readiness resolution. The open problem remains non-load-bearing and is not used as a premise.

No external mathematical supplier IDs are declared in the assigned contracts. The transitive observation about batch 43's anomaly-definition inputs is context only and does not create an item edge in batch 49.

## Source reading record

I read the complete relevant source passages from these two independent treatments, including the full localization/matrix-integral reasoning needed for the assigned scope:

- A. Kapustin, B. Willett, and I. Yaakov, “Exact Results for Wilson Loops in Superconformal Chern-Simons Theories with Matter,” https://arxiv.org/pdf/0909.4559: §2 Setup and §2.2 matter (PDF pp. 3–8); §3.1–3.5, including the Q-exact deformation, fixed locus, gauge fixing and Weyl factor, vector determinant, chiral determinant, FI renormalization caveat, and general matrix integral (PDF pp. 7–20); §4 ABJM field content, levels, weights, and matrix integral (PDF pp. 20–22); Appendix B Eq. (B.1)–(B.4) for real Cartan lines and its small-imaginary-level convergence regulator in the pure U(N) Gaussian. The latter is not silently promoted to a joint ABJM regulator.
- M. Mariño, “Lectures on Localization and Matrix Models in Supersymmetric Chern-Simons-Matter Theories,” https://arxiv.org/pdf/1104.0783: §§2.1–2.4 (PDF pp. 6–15) for conventions, multiplets, ABJM field content and quartic superpotential; §6.2–6.5 (PDF pp. 37–46) for the localization locus, gauge fixing, radius rescaling, zeta-regularized vector/chiral determinants, R-charge parameter, Weyl measure, and ABJM matrix integral. In its \(g_s=2\pi i/k\) convention, its matrix phase has the opposite sign to the displayed KWY convention; the conversion is \(k_{\mathrm{Marino}}=-k_{\mathrm{KWY}}\), \(\mu=2\pi\lambda\). The hyperbolic factors and real Cartan cycles then agree.

The dated specialist note research/advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md § “Supersymmetric backgrounds, path integrals, and S4/S3 formulas” independently warns that the KWY scope is source-specific superconformal Chern–Simons–matter (including ABJM), and that the path-integral formula is not a proof of a general continuum measure. It is historical context; the full relevant passages above were inspected directly in this authoring pass. No retrieval failed and no source was dropped. The actual source-fetch-check --stamp result was 2/2 URLs fetch-verified and resolved, with zero drops. Both full-text source stamps are stored in the batch coverage file. No retrieval failure or source-resolution record is applicable.

## Item checkpoint — post-qftx-s3-cs-matter-localization-model

The A-page postulate adopts the round Euclidean S3 ABJM model in one N=2 description: exact U(N)×U(N) global form, integer levels \(k,-k\), fundamental-trace normalization, four bifundamental chiral multiplets with \(\Delta=R=1/2\), the quartic superpotential, zero real masses/FI parameters, selected conformal Killing spinor, real Hermitian contour, gauge-fixing/ghost convention, and the source's formal measure/localization assumptions. It states the source's limits explicitly and claims no general N=2 result, empirical fact, continuum measure, or convergence theorem. Its only logical item dependencies are empty, so its item level is 0. Source URLs and precise locators are in the item and mapped to the A-page coverage ledger. The page-level q-exact context is current; the required anomaly page remains unresolved for readiness.


## Item checkpoint — ex-qftx-s3-cs-matter-matrix-integral

The B-page example reconstructs the source-reported ABJM Cartan formula in the KWY Euclidean sign convention. It fixes the dimensionless real Cartan variables \(\lambda_i=r s_i\), \(\widehat\lambda_i=r\widehat s_i\), uses the two Weyl factors \((N!)^{-2}\), the two vector root products, and the four canonical-\(R\)-charge chiral determinants, giving the power \(-2\) of each bifundamental \(\cosh\) factor. Mariño's \(g_s=2\pi i/k\) convention maps to this phase by \(k_{\mathrm{Marino}}=-k_{\mathrm{KWY}}\), \(\mu=2\pi\lambda\); no mixed sign convention is used. The real Cartan contour and oscillatory status are stated, and neither a continuum functional measure nor a generic N=2 theorem is claimed.

Its sole item dependency is post-qftx-s3-cs-matter-localization-model with role physical-assumption, so its recomputed item level is 1. The B item cites the adopted postulate as an exact local supplier; its external KWY/Mariño support is preserved in source references and the A-page source harvest. The item is complete; the current anomaly-page prerequisite remains the only unresolved batch-level readiness obligation.

Both items and frontmatter-only pages are now mirrored in the manifest; contracts, coverage, cross-batch rows, and readiness records are current. Final scoped check results and remaining owner blockers are recorded below.


## Final scoped checks, readiness, and owner blockers

The full dated prose scaffold was also read after the pair draft was prepared, as required by the current owner direction. It adds no S3-specific requirement beyond the assigned track contract and repeatedly warns that formal/regulated localization does not construct a continuum measure. No authored claim or dependency changed after that read.

Actual final assigned-scope results:

- content-policy on the batch-49 manifest: 2 items, 0 errors, 0 warnings.
- depcheck with the nonempty explicit two-item selection: pass; selected item and page-cycle context covered 2 items and 2 pages.
- rendercheck on the two items and two pages: pass; no YAML, KaTeX, math-link, or multiline-display defects. Both A/B page bodies are empty.
- normative precheck: postulate structural pass; example direct proof pass; 2 checked, 0 failing.
- strict proof-contract check: 2/2 items, 0 errors, 0 warnings.
- coverage-checklist: 1 A page, 15 harvested results, 0 errors, 0 warnings.
- source-fetch-check --stamp: 2/2 full-text source URLs verified and resolved, 0 drops. The subsequent no-network check also passed 2/2.
- proof-layout on both explicitly changed items after the final proof edit: 2 items, 5 steps, 0 defects.
- The scoped item dependency calculation gives post-qftx-s3-cs-matter-localization-model level 0 and ex-qftx-s3-cs-matter-matrix-integral level 1, with no scoped errors. The cross-batch collector reproduces exactly the two owned page edges: q-exact localization verified, anomaly-matching page open.
- The manifest, item statement mirrors, frontmatter-only A/B page inventories, contracts, source coverage stamps, and cross-batch rows were mechanically compared and match.

Final Step 1 readiness was recorded with the ordinary record command and no owner override. Both items are escalated, owner=false, because the required batch-43 anomaly page is not current. The postulate readiness hash is 8bf929436244da07bad2e2356bb2c2e553a92751dcd289b5dd64b3e13778f524; the example readiness hash is e44ae4d4d440da07bad2e2356bb2c2e553a92751dcd289b5dd64b3e13778f524. The current Step1Decision check confirms both rows remain escalated, not ready. Their reasons and examined dependency closures are in the two run-local Step 1 records.

Full-run checks exposed outside-batch blockers that were not repaired:

- item-dependency-levels check reports seven current metadata mismatches: lem-aqft-local-counterterm-shift-is-relative-coboundary (declared 0, computed 3), def-aqft-thooft-anomaly (0, 3), def-aqft-anomaly-matching-data (1, 4), pthm-aqft-selected-chiral-spectrum-anomaly-cancellation (2, 5), ex-aqft-single-chiral-fundamental-polynomial (2, 5), ex-aqft-mixed-background-counterterm-shift (2, 5), and ex-aqft-vectorlike-conjugate-chiral-pair (3, 6). The def-aqft-thooft-anomaly mismatch is part of the unresolved batch-43 prerequisite.
- batch-dependency-levels check reports its shared scheduling snapshot stale after this manifest update. A read-only recomputation still gives batch 49 level 9 with direct requirements batches 43 and 48 (current graph hash 144fa68cd03c61d5daa369ca4d04dbb795e5ce6678ebe05832a78c9649681b7d). The shared batch-dependency-levels file was not rewritten; the native owner/drained join must refresh it.
- statement-first on the 374-item current run reports 23 defects, none in the two batch-49 item statements or pages. The exact affected items are def-qftx-euclidean-yang-mills-sector, def-qftx-physical-bps-charge-data, def-qftx-wilsonian-n1-action-data, ex-qftx-clay-finite-one-plaquette-regulator, ex-qftx-clay-two-global-forms-same-algebra, ex-qftx-multiple-centred-critical-vortex, ex-qftx-physical-bps-kronecker-hall-sector, lem-equivariant-relative-tangent-groupoid-heat-trace-limit, lem-equivariant-rescaled-heat-kernel-extension, lem-qftx-n2-hypermultiplet-gauge-invariant-couplings, lem-qftx-n4-adjoint-cubic-gauge-invariance, lem-qftx-taubes-disk-barriers-and-monotone-iteration, op-aqft-fusion-two-category-anomaly-classification, pthm-aqft-heavy-chiral-threshold-wess-zumino-match, pthm-qftx-oraifeartaigh-f-term-breaking, thm-equivariant-index-character-formula, thm-qftx-critical-flux-cylinder-linear-energy, thm-qftx-critical-vortex-global-energy-minimum, and thm-qftx-taubes-arbitrary-divisor-plane-vortex. The op-aqft-fusion-two-category-anomaly-classification Status-reference finding belongs to the required batch-43 page and is retained in its open edge evidence. Other listed carriers are outside batch 49 and were not edited.

No cross-batch supplier was edited, no source was dropped, and no shared plan, engine state, verdict, or supplier item was changed. New items and pages remain draft.


## Owner scientific consumer check (2026-10-23)

See `advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch41-44-owner-resolution.md`. Actual KWY3.10 verifies the selected nilpotent gauge-fixed supercharge. The matrix-integral proof now applies Mariño6.67 to each self-conjugate pair R⊕R* as a whole; the formula, physical postulate and public scope are unchanged. The source retains formal measure/localization qualifications. Earlier author workflow claims are historical; root owns native recertification.
