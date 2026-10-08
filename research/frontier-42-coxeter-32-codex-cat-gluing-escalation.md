# CAT comparison gluing escalation — focused repair

Run: frontier-42-coxeter-32. Subject: lem-cg-alexandrov-comparison-triangle-gluing. Native batch 11 review decision was `escalate` (2026-10-07T10:52:31.097Z); its full receipt was read. This is a focused local source/proof repair, not engine adjudication, certification, or an independent whole-item audit. No receipts, gates, state, or dispatch controls were written.

## Source reading and exact finding

Read the full Bridson–Haefliger cached PDF `/tmp/bh.pdf`: I.2.13–I.2.16, printed pp. 24–26, including rendered pp. 25–26; II.4.9–II.4.11, printed pp. 199–200, both pages rendered and inspected. PyMuPDF text extraction supported navigation; image reading resolved the actual inequalities and hypotheses. The source is the author-hosted PDF already cited by the item. No excerpt-only source claim or invented OCR was used.

I.2.16 requires the four boundary distances to sum to less than 2π in the spherical case. It asserts alpha-bar ≥ alpha+alpha′, both outer-vertex angle comparisons, and original marked distance ≤ straightened marked distance. The native item had replaced the four-distance bound with x<π and u+y<π, then left alpha+alpha′>π open. Its proposed replacement was not justified as preserving the original scope. The repaired statement restores the original approved source hypothesis, keeps the added alpha comparison, and proves the allegedly missing case cannot occur.

II.4.11 requires the whole triangle perimeter <2Dκ, not just three separate side bounds. Its proof uses 2n−1 genuinely small triangles per strip. The native rectangle/fan outline was insufficient because the full triangles with apex p need not fit in a local CAT chart. The repaired statement makes the perimeter and nondegenerate sweep domain explicit; its finite-subdivision extension states the intermediate triangle conditions required by II.4.10.

## Mathematical repair

Let L=u+y+p+q<2π. Split the spherical boundary loop A,B,C,B′,A into two equal-arclength halves with endpoints P,Q. Every boundary point Z has d(P,Z)+d(Q,Z)≤L/2<π, hence (P+Q)·Z=cos d(P,Z)+cos d(Q,Z)>0. Thus the whole loop is in one open hemisphere. Gnomonic projection to its affine plane sends its minor arcs to straight segments and preserves side orientation and reflexness. B,B′ lie on opposite sides of AC, so the quadrilateral is simple. Its angle at C is reflex or straight when gamma+gamma′≥π; its A vertex is therefore convex and C is inside the closed triangle ABB′. This gives alpha+alpha′≤π, closing the spherical obligation without deleting the angle conclusion.

The same argument also derives u+y<π rather than imposing it. If u+y≥π, then p+q<π and the hemisphere with pole B+B′ contains A,B,B′ (cos p+cos q>0 and 1+B·B′>0). Hemispheres are geodesically convex because minor arcs consist of normalized positive combinations. Since C lies in their spherical triangle, C is also in this hemisphere, forcing cos u+cos y>0 and hence u+y<π, a contradiction. The original perimeter bound likewise implies x<π by 2x≤L. The native straightening construction is now justified under the full approved scope.

The cosine-monotonicity argument proves all comparisons and the simultaneous equality condition gamma+gamma′=π. Step 2.3 supplies the missing upper-angle triangle inequality locally, using a middle-ray chord intersection with radius st sin(a0+b0)/(s sin a0+t sin b0); it does not attribute angle additivity or limit properties to the angle definition. Collinear comparison configurations use closed cosine comparisons; no continuity of angles in arbitrary metric spaces is assumed.

Patchwork now constructs (p,L1,R1), then (Lj,Rj,Rj+1) and (Lj,Lj+1,Rj+1) in each local CAT rectangle chart. It merges in the order whose splitting point lies on a radial geodesic. Each intermediate perimeter is bounded by its full strip perimeter, and each full strip perimeter by the original triangle perimeter. The square's compactness and Lebesgue-number input are explicitly supplied by thm-heine-borel-rn and thm-lebesgue-number-lemma.

## Consumer coordination and remaining separate work

- Cone-CAT theorem: coordinated with spherical_links_native_repair; its statement/contract synchronization is owned by that agent.
- Local CAT0 globalization: coordinated with cat_endpoint_globalization; it can cite the actual angle-triangle-inequality proof at supplier step 2.3. Degenerate global triangles are handled there.
- Compact local CAT1 short-circle criterion: coordinated with cat_short_circle_escalation. Its independent compact-uniqueness/digon proof remains that agent's work; no unsupported criterion was added to this supplier.
- Finite spherical comparison disks: native batch 15 author drained before changes. Exact changed-supplier synchronization removed the irrelevant Alexandrov dependency and statement link; F9 now describes the finite edge-identification construction and makes no global angle claim. The Euclidean-only abstract-gluing definition was read and deliberately not substituted as a spherical supplier. The existing topological-disk claim remains a separate missing local argument, held for finite_disk_quantitative_escalations; no claim of repairing that topology/row-induction branch is made here. That agent was notified when the F9/item/manifest/contract changes became stable.

Changed local records: gluing item and its batch-11 page row/proof-contract object; finite-disks item and its batch-15 page row/proof-contract object only. Shared JSON writes reload the latest object before each targeted write. The two new published compactness suppliers must be retained in the root's dependency reconciliation.

## Local checks

Final explicit two-item commands:

- `node tools/tsx-run.mjs tools/precheck.mts --json items/lem-cg-alexandrov-comparison-triangle-gluing.md items/lem-cg-finite-spherical-comparison-disks-and-radius-estimates.md`: both pass, 2 checked, 0 failures.
- `node tools/rendercheck.mjs items/lem-cg-alexandrov-comparison-triangle-gluing.md items/lem-cg-finite-spherical-comparison-disks-and-radius-estimates.md`: both parse under real YAML/KaTeX renderer.
- `node tools/proof-layout.mjs items/lem-cg-alexandrov-comparison-triangle-gluing.md items/lem-cg-finite-spherical-comparison-disks-and-radius-estimates.md`: 2 items, 28 steps, 0 defects.

The first gluing precheck requested dependency-layer renumbering; that canonical numbering was adopted and local prose references corrected. Mechanical passes do not constitute mathematical acceptance. Root retains engine escalation/gate ownership.

## Mechanical carrier reconciliation after Definition quotation refresh

Root requested an exact contract-only pass after the endpoint owner refreshed current Definition quotations. The one-item strict command reported 29 errors: citation-use mappings for F2–F5 still reflected pre-canonical numbering (including an unsupported F4 use at 2.1), and five boundary records named absent step 7.2. The gluing object's citation `uses` arrays were synchronized against the actual final trailing tags; boundary references now name local-triangle step 1.4 and assembly step 9.1, with the reverse-equality note pointing to steps 4.2, 5.1 and 6.1. Refreshed source quotations and every other contract object were preserved. No item mathematics or item bytes changed in this carrier pass.

`node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-11.proof-contracts.json --strict --items lem-cg-alexandrov-comparison-triangle-gluing` then exited 0: 0 errors, 1 nonfatal shotgun-bracket warning, 1/1 items checked. The warning concerns the local-triangle paragraph's five necessary inputs; it was not concealed or used to trigger unnecessary mathematical changes. Item precheck/layout were not repeated because this follow-up changed only the proof-contract carrier and durable note.

## Already-proved angle facts exposed as a supplier claim

Root subsequently authorized one focused claim-interface correction: clause (iv) now states initial-subsegment invariance, opposite geodesic directions of upper angle π, and the upper-angle triangle inequality for three nonconstant segments from one point. These are already proved directly from the upper-angle definition in F5 and by the complete step-2.3 chord-intersection argument; no new argument, item, or pair was introduced. This is necessary because the angle definition expressly does not assert those properties, while consumer contracts may cite a Statement but not a Proof section as their supplier claim.

The prior clauses (i)–(iii) and their quoted spans remain unchanged. The batch-11 Statement manifest and this item's contract endpoint/degenerate boundary annotations now expose the exact nonzero and interior-point domains. The only assigned actual clause-(iv) consumer is the short-circle criterion's F3 angle-facts record; its owner was notified after the supplier was stable and owns the full updated Statement quotation and clause reference. This interface change does not claim any further downstream mathematical acceptance.

The focused strict gluing contract check exits 0 (0 errors, the same 1 nonfatal shotgun warning); one-item precheck passes, rendercheck passes, and final proof-layout reports 15 steps with 0 defects. No receipts, gates, or runtime state were edited.
