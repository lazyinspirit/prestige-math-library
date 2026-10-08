# Compact short-circle escalation — bounded source audit and focused repair

Scope: `thm-cg-compact-local-cat-one-short-circle-criterion`, its batch-11 contract and page-manifest row, and actual Statement-change consequences. No receipts, certifications, gates, engine state, or build controls edited.

Read CLAUDE.md, README.md and SCHEMA.md fully. Consulted the full cached Bridson–Haefliger PDF `/tmp/bh.pdf`, PDF pages 222–227 (printed pp.199–204), including the entire proofs of II.4.11, II.4.12, II.4.16 and the adjacent injectivity-radius discussion. Visually inspected rendered PDF pages 223 and 226 (printed pp.200 and 203); OCR was not treated as authoritative where formulas were absent. Bowditch is not a supplier of this theorem; the full relevant authoritative proof is BH II.4.16.

Confirmed findings: the old F4 invented a thin-digon consequence absent from its named supplier; old 1.2 silently consumed II.4.12 without any local proof; old 1.3 called proportionally parametrized paths 1-Lipschitz and understated Choice; old 2.1 did not derive all cross-side distances from opposite-point distances. The proof's approved minimum-circle claim is sound and is preserved.

Focused repair on stable supplied gluing content:

- A compact family of CAT(1) charts gives positive short uniqueness; ambient geodesics are explicitly shown to stay inside the full chart, using a half-radius cover.
- Ascoli proves endpoint continuity for unique short segments, with distance equalities passed to limits and the entire-sequence convergence argument supplied.
- Patchwork gives angle comparison below any uniqueness threshold R≤π. The compact uniqueness criterion is proved internally: split the opposite side, use Alexandrov marked-point comparison, then two applications of vertex-side comparison plus the spherical cosine rule give all-pair CAT comparison. Collinear model configurations use the supplier's closed cosine inequalities.
- Digon sides on [0,1] have uniformly bounded Lipschitz constants L_n, not unit speed. AC selects the near-minimal digons and supplies the Ascoli subsequences.
- Noncollapse: midpoint triangles have perimeter L_n+h_n<2r. Their equal midpoint comparison angles have positive cosine cos(a_n)(1−cos h_n)/(sin(a_n)sin h_n), so their sum is strictly below π whenever h_n>0, contradicting the actual angle triangle inequality. When h_n=0, both half-lengths are below r and uniqueness collapses the original digon.
- Opposite points: perimeter r+h<2r; the explicit sum of comparison cosines is sin(r)(cos(a−b)−cos(h))/(sin(a)sin(b)sin(h)). It contradicts angle sum≥π unless h=|a−b|; equality collapses the sides through short uniqueness. Thus opposite distance equals r.
- Reverse triangle inequality from an opposite point proves every cross-side distance equals min(s+t,2r−s−t), completing the isometric circle assertion.

The Statement now explicitly assumes AC, as required by SCHEMA. Previously AC was in deps/axiom_use but not in the Statement. The axiom record now lists its actual uses (short-geodesic continuity, near-minimal digon sequence, and simultaneous side subsequences), rather than claiming one use. Removed irrelevant cone-criterion and CAT(0) endpoint-stability dependencies; no approved claim was weakened.

Own batch-11 page-manifest item row and proof contract were synchronized, including exact source proof quotes for the angle triangle inequality and limiting collinear marked comparison. No stale Step-1 decision or runtime evidence was rewritten.

After the final item edit: focused precheck passed (1 file, 1 proof, 0 failures); rendercheck passed (1 file, no errors/warnings); proof-layout passed (1 item, 10 steps, 0 defects). These are local checks, not independent mathematical audit or gate evidence.

Dependency consequences / pending ownership:

All six direct consumers already declare `def-axiom-of-choice` in deps but their Statements must explicitly carry the now-explicit supplier assumption. Native batch-15 drained before repair. `/root/finite_disk_quantitative_escalations` was notified that the criterion is ready and owns the finite spherical disks object plus quantitative batch-15 consumers and corresponding contracts/manifests. `/root/cat_gluing_escalation` owns only its coordinated finite F9 link/dep correction and handed remaining finite edits to that owner.

Native batch-22 was still active when readiness was reported. Its affected direct consumers are `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`, `thm-cg-large-metric-flag-short-loop-radial-contradiction`, and `thm-cg-large-metric-flag-complexes-are-cat-one`; these are held for AC propagation after native writer drain. Batch-15 direct consumers are `lem-cg-bowditch-quantitative-short-loop-control`, `lem-cg-uniform-energy-decrement-and-short-class-closedness`, and `lem-cg-finite-spherical-comparison-disks-and-radius-estimates`. Further hops are affected only if their own supplier Statement changes. The parent was notified of theorem readiness before downstream completion to preserve supplier-first review order.

## Follow-up: exact strict proof-contract correction

The first own-item strict contract check reported exactly 12 errors: two duplicate F3→gluing citations, two invalid Proof source sections, two omitted F3 use maps for step 2.1, one omitted F2 map for step 1.2, omitted derivation inputs 1.3 and 2.1 in d-4.1 and 1.1 in d-8.1, and missing `one`/`endpoints` boundary dispositions. No mathematical proof change was needed.

Repaired only this theorem's batch-11 contract entry. A single exact contiguous Statement quotation now covers each F3/gluing and F1/comparison source claim. Canonical supplier proof quotations for angle triangle inequality and collinear marked-point closure are retained as supplementary `source_qualifications`, rather than invalid duplicate citations with `source_section: Proof`. Every citation use and derivation input is mapped from every explicit canonical step reference, including references in prose, across all 10 steps. Added concrete singleton and endpoint boundary dispositions. Preserved the endpoint owner's Definition quotation corrections and short-circle example F5 arithmetic record by editing only this theorem's contract key.

Final command: `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-11.proof-contracts.json --strict --items thm-cg-compact-local-cat-one-short-circle-criterion --json` — `ok: true`, 0 errors, 0 warnings, one selected/checked theorem. This is a scoped local carrier check; no receipt, gate, state, or decision evidence was changed. AC propagation into drained batch-22 consumers remains a later ownership obligation.

The gluing owner subsequently exposed its already proved upper-angle facts as canonical Statement clause (iv). Refreshed the single F3/gluing citation to the entire current Statement (i)–(iv), explicitly updated criterion F3 to cite (iv), and removed the now-unnecessary supplementary angle proof qualification. The collinear marked-distance closure remains accurately identified as the supplier's closed model-comparison argument. After this final item edit, own strict contract check passed with no errors/warnings; focused precheck and rendercheck passed and proof-layout again reported 10 steps, 0 defects. Criterion claims and all proof steps are unchanged by this source-qualification correction.

## Focused exposure of the already proved scale comparison

On the parent's exact interface authorization, exposed Statement clause (iii): for `0<R<=pi`, short uniqueness below R implies spherical all-pair CAT(1) comparison for every triangle of perimeter `<2R`. Original (i) and (ii) are preserved. Generalized the existing step 3.1 to its already used parameter R: step 2.1 supplies the sweep comparison, all split/bridge subtriangles have perimeter at most P, and Alexandrov's four-distance bound is `P<2R<=2pi`. At R=pi the same step retains the compact short-uniqueness criterion. This is one statement exposure of the proved argument, with no duplicated proof and still 10 numbered steps.

Synced only the criterion's batch-11 manifest Statement/strategy row and contract derivation/qualification. Finite quantitative owner notified that clause (iii) is ready for its radius-L/4 ball route. Final own strict contract check passed with zero errors/warnings, focused precheck/rendercheck passed, and proof-layout reported 10 steps/0 defects. Existing batch-22 consumers use (i)/(ii), not new (iii); their AC propagation remains pending native writer drain.
