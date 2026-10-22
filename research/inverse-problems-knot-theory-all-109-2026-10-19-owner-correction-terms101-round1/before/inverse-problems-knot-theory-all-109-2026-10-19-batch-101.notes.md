# Batch 101 authoring notes — branched-cover correction terms and sliceness

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: beta · batch: 101 · scheduled dependency level: 6 · scheduled prerequisite batches: 66, 74, 92  
Scheduling input: 41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62

## Live run and design control

The current .autopilot status was recomputed from disk at 2026-10-19 05:23:35 UTC: stage 1-scaffold is running at 92/109, with no workers in flight. The remaining run-level blocker is the owner repair and recertification hold recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. The current git HEAD is 50139bdcb619a39f8d99e13d17d846b8628e7312 (Defer compact construction artifact scans until author drain). A subsequent live dependency-level recomputation included 1,248 in-run items across 218 pages.

The controlling design is KT-46 in research/plan-knot-theory-track.md:1436, especially lines 1443–1459. It requires the correction-term definition, the smooth slice-disk cover, rational-ball vanishing for extending Spin-c structures, generic Heegaard Floer invariance and cobordism-map inequality, and a smooth-sliceness application. It expressly forbids extending the published smooth-disk result to locally flat topological disks by analogy. Its B leaves are the stated L(3,1) values and a boundary-case example that distinguishes extending from nonextending Spin-c structures.

research/plan-spec.json has the matching page IDs, title, order 3198, category and requires list; items: [] is its preauthoring placeholder, not a design conflict. The auxiliary research/knot-theory-planning-2026-10-18/prerequisite-map.md is overbroad and has cyclic edges: it lists cor-double-cover-d-invariant-obstructs-smooth-slice among the direct prerequisites of lem-slice-disk-double-cover-is-rational-homology-ball and of thm-correction-term-obstruction-from-rational-ball. Those edges are excluded; the controlling plan and the actual local proof dependencies govern.

## Authored inventory and dependency levels

The A page has 12 items and the B page has two examples. Levels were recomputed from the complete current run dependency graph after the final B2 edits; each equals the manifest label.

| Level | Item IDs |
|---:|---|
| 0 | def-heegaard-floer-plus-infinity-absolute-grading; lem-rational-homology-four-ball-admits-spinc; lem-spin-c-structures-form-an-h2-torsor |
| 1 | def-heegaard-floer-correction-term; lem-rational-ball-spin-c-extension-set-metabolizer |
| 2 | lem-heegaard-floer-correction-term-heegaard-invariance |
| 3 | lem-heegaard-floer-correction-terms-lens-space-lp1; lem-rational-ball-spin-c-cobordism-map-inequality |
| 4 | lem-rational-ball-b2-bounds-lens-l4; thm-correction-term-obstruction-from-rational-ball; ex-knot-kt-46-worked-cases |
| 5 | lem-slice-disk-double-cover-is-rational-homology-ball; cex-knot-kt-46-boundary-case |
| 7 | cor-double-cover-d-invariant-obstructs-smooth-slice |

## Mathematical scope, conventions, and proof status

- The lens-space convention is positive surgery: \(d(L(p,1),i)=((2i-p)^2-p)/(4p)\), for \(0\le i<p\); reversing orientation negates values at conjugate Spin-c labels. The L(3,1) substitutions are \(1/2,-1/6,-1/6\). L(3,1) is not used as a rational-ball boundary because \(|H_1|=3\) is not a square.
- The L(4,1) boundary case uses B2, the complement of a tubular neighborhood of the conic in \(\mathbb{CP}^2\). The proof computes \([Q]=2[P]\), \(Q\cdot Q=4\), the +4 circle-bundle boundary, and the complement’s rational homology using the excision–Thom pair sequence. Its L(4,1) boundary is oriented to match the positive-surgery convention. This gives \(|H_1|=4\); the extension-set result gives two extending structures, and the nonzero value \(d(L(4,1),0)=3/4\) proves label 0 is outside that set. No extending labels are identified individually.
- The slice-cover assertion is for smooth properly embedded disks only. Its boundary identification uses the positive-meridian mod-2 cover and local branched map \(z\mapsto z^2\); no locally flat topological-disk claim is made.
- def-heegaard-floer-plus-infinity-absolute-grading is deliberately conditional: regular data, finite disk counts, and square-zero are hypotheses; generic existence, absolute grading on all inputs, Heegaard invariance, and cobordism-map properties are separate obligations. The correction-term definition likewise does not prove a minimum exists.
- The Spin-c torsor result assumes a supplied lift; it proves the H2 action and does not assert existence. The separate rational-ball Spin-c existence helper remains unproved: it needs the lifting-obstruction criterion, the UCT coefficient diagram, a surface representative for integral degree-two classes, and the self-intersection parity calculation \(w_2(x)=x\cdot x\bmod 2\).
- The B2 proof now declares the normal Thom/Poincare-dual, homology-intersection, local-sign, homotopy, UCT and pair-LES suppliers used in its local computation. A direct batch-68 dependency on def-lens-space-surgery-orientation-convention fixes its positive +4 boundary orientation. The interface was inspected and verified, but batch 68 is absent from the scheduled prerequisite list (66, 74, 92); B2 and its dependent counterexample are therefore escalated for owner reconciliation.

## Supplier audit and unresolved interfaces

- **Batch 66 — verified.** The current page and bodies were checked for def-cyclic-branched-cover-of-a-knot (positive meridian and branched filling), lem-cyclic-cover-linking-form-inverse-matrix (H1 = Z^n/AZ^n, chain linking -A^-1, outward-boundary orientation), and lem-branched-cover-surgery-presentation-from-seifert-surface (the q=2 Seifert-matrix presentation). Their current Step 1 records are ready. The local slice-cover lemma also uses the published smooth-disk rational-ball theorem.
- **Batch 74 — page open.** The manifest contains smooth-and-topological-knot-concordance, but its A-page carrier is absent. The smooth and locally flat concordance definitions have ready records. The authored slice claim does not rely on the missing group-law theorem; page-level prerequisite readiness remains open.
- **Batch 92 — page and generic theory open.** The grid-homology-and-combinatorial-knot-floer-theory A-page carrier is absent. def-admissible-pointed-heegaard-floer-data is ready but covers multipointed knot Floer data for knots in S3. lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing, thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization, and thm-grid-homology-independent-of-grid-and-equals-knot-floer are escalated or knot-specific. They do not provide generic closed rational-homology-sphere HF+, HF-infinity, absolute rational grading and the single-tower result, nor generic Spin-c cobordism maps, degree shifts, rational-cobordism isomorphisms or plus-map inequalities. These gaps block the invariance, lens formula, map inequality, vanishing theorem, L(3,1) example, L(4,1) counterexample, and sliceness corollary.
- **Batch 68 — verified interface, unscheduled edge.** def-lens-space-surgery-orientation-convention fixes L(p,q) as p/q filling and the positive p-surgery orientation. It is the direct supplier needed by the +4 circle-bundle boundary proof, but is outside this batch’s scheduled prerequisite set.
- The Whitney prerequisite page is published and contains the smooth slice-disk double-cover supplier. No shared plans, published items, engine state, or verdicts were changed.

## Sources and retrieval record

research/inverse-problems-knot-theory-all-109-2026-10-19-batch-101.coverage.json retains 23 harvested results, item dispositions, URLs/locators, searches, recovery history and source-resolution data. The page has 11 sources: 10 are fetch-verified; the single unresolved source is an honest owner escalation.

- Ozsváth–Szabó, *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, https://arxiv.org/pdf/math/0110170v1 — §§2–4 (groups, grading and d-invariant; Props. 4.2/4.8 for orientation reversal and the q=1 lens formula); §9.2, Thm. 9.6 and Prop. 9.9 (rational-cobordism maps and vanishing). Supports the HF definitions, invariance/formula/map/vanishing obligations, and both worked cases; it is not treated as a local proof.
- Hom, *Lecture Notes on Heegaard Floer Homology*, https://arxiv.org/pdf/2008.01836v1 — §§2.1–2.2 (groups, grading convention and d-invariant); independent definition/convention support for the HF definitions and L(3,1) example.
- Ozsváth–Szabó, *Holomorphic Disks and Topological Invariants for Closed Three-Manifolds*, https://arxiv.org/pdf/math/0101206v1 — §§3–4, full relevant invariance route. Supports lem-heegaard-floer-correction-term-heegaard-invariance; the missing generic analytic derivation remains explicit.
- Aceto–Golla, *Dehn Surgeries and Rational Homology Balls*, https://arxiv.org/pdf/1509.07559v2 — §2, Prop. 2.2 (extension coset/order); §3, Prop. 3.5 and Remark 3.6 (lens orientation). Supports the extension-set and L(4,1) case.
- Cochran–Harvey–Horn, *Filtering Smooth Concordance Classes of Topologically Slice Knots*, https://msp.org/gt/2013/17-4/gt-v17-n4-p04-s.pdf — §6, Lemma 6.3, printed pp. 2129–2131 (exact sequence and metabolizer proof); independent treatment of the extension-set argument.
- Baranowski–Borodzik–Serrano de Rodrigo, *Heegaard Floer Homologies and Rational Cuspidal Curves*, https://www.numdam.org/item/10.5802/wbln.12.pdf — §4 (cobordism inequalities and Cor. 4.8 vanishing); secondary support, with generic map-theory gaps retained.
- Endo–Gurtas, *Lantern Relations and Rational Blowdowns*, https://arxiv.org/pdf/0808.0386v1 — §3, proof of Thm. 3.1 and Fig. 2 (the B2 rational ball and L(4,1) boundary).
- Fox–Milnor, *Singularities of 2-Spheres in 4-Space and Cobordism of Knots*, https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf — Thm. 2 and full proof (smooth proper slice-disk double cover is a rational homology ball).
- Rolfsen, *Knots and Links*, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf — Ch. 10.C (cyclic-cover monodromy, positive meridian and branched filling).
- Calegari, *Notes on 4-Manifolds*, https://math.uchicago.edu/~dannyc/courses/4manifolds_2018/4_manifolds_notes.pdf — §3.2.1, Lemma 3.2 and proof, printed pp. 30–31 (Spin-c lift criterion and integral w2 route). Full-text alternative was retrieved and inspected; it supplies context, not a completed local proof.
- Teichner–Vogt, *All 4-Manifolds Have Spin-c Structures*, https://math.berkeley.edu/~teichner/Papers/spin.pdf — Prop. and proof, pp. 1–3. The full three-page PDF was fetched and read, but source-fetch-check rejected completeness without a hash-bound short-publication receipt. Six total attempts (initial plus five retries) are recorded. An alternate longer proof source was found; no further retry was made. source_resolution.status remains owner-escalation, confidence uncertain, and the local Spin-c existence item remains escalated.

## Readiness records

Current Step 1 item-hash audit: **3 ready, 11 escalated**. Ready records (owner: false) are def-heegaard-floer-plus-infinity-absolute-grading (conditional definition only), lem-spin-c-structures-form-an-h2-torsor (given-lift theorem), and lem-slice-disk-double-cover-is-rational-homology-ball (smooth disk scope). The other eleven IDs each have an explicit escalated record with the unresolved supplier or local proof obligation. No record uses --owner, and no escalation was overwritten.

The run-wide node tools/step1-decisions.mjs check remains open: the latest full check reported 1,244 items, 576 ready, and missing/stale records or empty scaffolds elsewhere in the run. The batch-101 records were then checked directly against current item hashes; all three ready records remain current.

## Final scoped checks

- precheck: 8 proof-bearing items, 0 failing.
- proof-layout: 14 assigned items, 23 steps, 0 defects.
- proof-contract --strict: all 14 contracts present; 0 errors and 0 warnings. B2 has exact current supplier excerpts, step inputs and boundaries.
- depcheck --items-file /tmp/prestige-batch101-items.json: 14 focused items passed; prerequisite cycle checks cover 2,300 items / 478 pages.
- statement-first: 14 items, 0 defects. rendercheck: all 14 items and both A/B pages parse/render; no math/frontmatter errors.
- Manifest/carrier sync: 14 carriers checked for ID, kind, title, dependencies, level and justified_by; 0 mismatches. Both page bodies are empty; no summaries were added.
- Full item-dependency-levels.mjs check: run-wide exit 1 due unrelated empty scaffolds and dependency-level mismatches; no batch-101 error. A subsequent live in-memory recomputation found 33 run-wide errors and still none in batch 101 while other writers were draining.
- coverage-checklist: 23 harvested results, 2 expected errors, both for the Teichner–Vogt owner escalation. source-fetch-check check mode: 10/11 verified, 1 failed for that same owner-escalated source; no retry or stamp was fabricated.
- The content-policy manifest-only mint check is not an authoring check after carriers exist; it reported batch-item-already-exists for the 14 authored items. No tests were run.

## Owner reconciliation

1. Reconcile the new B2 → batch-68 orientation dependency with the scheduled batches.
2. Restore/author the missing prerequisite page carriers for batches 74 and 92 and decide whether their unresolved page-level requirements remain open.
3. Supply the generic closed-three-manifold Heegaard Floer analytic/invariance/tower/cobordism modules, and complete the two proposed Spin-c existence suppliers (lifting obstruction; surface representative and parity calculation) before reconciling the dependent claims.
4. Resolve the Teichner–Vogt short-document receipt or use a fully written local proof; preserve the current six-attempt history.
5. Reconcile the 11 escalated batch-101 records and the run-wide Step 1 hold through the owner workflow. These authoring records are not independent review or publication approval.
