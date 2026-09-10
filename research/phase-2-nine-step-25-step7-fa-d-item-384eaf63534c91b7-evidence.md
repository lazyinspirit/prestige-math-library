# Final adjudication: def-n-connected-space-and-n-connected-map

Run: phase-2-nine-step-25. Group d, batch 8, queue position 1 of 1.
Disposition: repaired. Source status: verified.

## Independent review and defect

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; verified the run identity in .autopilot/phase-2-nine-step-25/state.json. The exact queue is research/phase-2-nine-step-25-step7-fa-d-item-384eaf63534c91b7.json.

Read the complete current item and its four originally cited dependencies: thm-long-exact-sequence-of-relative-homotopy-groups, thm-mapping-cylinder-factorization, prop-higher-homotopy-basepoint-transport-and-moving-homotopies, and the published def-path-connected. Also read def-relative-homotopy-group and def-compactly-generated-conventions-for-based-homotopy. Read both higher-homotopy-groups-and-cofiber-sequences A/B pages, the item's batch-8 manifest entry, coverage entries and full contract including boundary and risk review, the relevant Alpha 5a review, and Alpha's Step-7 adjudication. The group reader context supplies no additional concern for this item; its relevant standing conventions agree with the page.

Initial Terra rejection (research/phase-2-nine-step-25-judge.jsonl, context 55b68ed3fc00cce679b0c530926442a107fc90a0c74a14d66e49e952d7ac2e5f) identified the missing CGWH restriction. Alpha confirmed this in research/phase-2-nine-step-25-judge-adjudications.jsonl and recorded the repair in research/phase-2-nine-step-25-alpha-step7-d.md. Independently, the cylinder theorem really does require CGWH spaces; the repaired quantifier meets it.

The sole Terra rejudge (context c5347b60ffed07b568d99476d3571e71ef9ac166740fa20357ad8a13a97a7313) correctly identified a remaining unsupported citation. The transport proposition's statement and proof concern absolute groups only. They do not establish relative transport. The old final sentence purported to use that proposition for the relative groups in the definition.

## Mathematical basis and source verification

Read the underlying Hatcher chapter PDF, printed pp.345–346, specifically the full relative-transport paragraph and the complete connectivity definition immediately before Whitehead's theorem; also read the mapping-cylinder paragraph on p.347:
https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf

Page 345 explicitly distinguishes the relative transport construction and its required proof from the absolute construction. Page 346 specifies relative vanishing at every basepoint in the subspace and separately imposes the component condition in degree zero. Page 347 describes replacing a map by its mapping-cylinder inclusion. These passages support the repair's all-basepoints formulation, the separate component clause, and the cylinder interpretation. Hatcher's cylinder height convention reverses the local convention; the local j(x)=[x,1] is retained. No proof of relative transport is imported from the source or claimed to have been completed here.

The local definition already universally quantifies over x in X, so it makes a definite predicate without any comparison of groups at different basepoints. Removing the unsupported assertion changes no vanishing condition. The remaining local cylinder theorem embeds j(X), making (M_f,j(X),j(x)) a valid based pair for every x. The relative definition and exact-sequence interface provide its pointed sets/groups. Absolute homotopy groups for spaces are supplied through those dependencies as well; no absolute transport is needed when every basepoint is explicitly tested.

Checked the boundary cases directly: an empty space is excluded from all stated space-connectivity degrees, although published path-connectedness itself is vacuous on the empty space. At n=0, the positive-degree range for spaces is empty and map connectivity is exactly component surjectivity. At n=1 the relative invariant is required to be a singleton pointed set, not assumed to be a group. For the empty-to-empty map, component surjectivity holds and the source-basepoint quantifier is vacuous. Empty-to-nonempty fails component surjectivity for n>=0. Degree -1 imposes no condition on maps. No choice of component representatives or AC is needed. These are the existing contract and coverage conventions, not new claims.

## Exact repair and metadata

Removed only the unsupported transport sentence/citation and its dependency edge from items/def-n-connected-space-and-n-connected-map.md. Replaced it with an explicit reminder that the relative condition is imposed at every source basepoint and that component surjectivity handles all target components. Retained Alpha's CGWH restriction, every degree range, all nonemptiness conditions and all relative vanishings.

Pre-repair itemHashGuard: fc553e570862bffe2bbcd402d723dfe52365e28a15cf2065e017969aadeec4d7.
Post-repair itemHashGuard: e8094077182b816b3cc7c829b593fa4a04440c54508f2a78960ca3122c642533.

Synchronized this item's deps in research/phase-2-nine-step-25-batch-8.pages.json and made its statement explicitly carry the existing CGWH restriction. Clarified the nonempty-choice boundary evidence in the owning batch-8 proof contract without overwriting the independent risk review. Existing page order, coverage and scope membership already fit the unchanged claim and need no edits. No new lemma or existing dependency item was edited; no owner-prerequisite-repair licence is needed.

Following briefs/tasks/frontier-dependency-ledger.md, reviewed and atomically rewrote research/phase-2-nine-step-25-batch-8.cross-batch-dependencies.json as []. The removed supplier and both remaining run-local suppliers belong to batch 8; def-path-connected is published, not a different batch of this run. Thus this repair creates no cross-batch row, and adding one for this same-batch removal would misclassify it. Ran the prescribed ledger refresh successfully. No mathematical scope was expanded.

## Focused checks and completion obligations

- Explicit-item precheck: exit 0, 0 checked and 0 failing, since this is a definition with no proof section. This is not proof certification.
- tools/proof-contract.mjs on batch-8 contracts with --strict --items def-n-connected-space-and-n-connected-map: exit 0, 1/1 checked, zero errors or warnings.
- tools/rendercheck.mjs on the item: exit 0; renderer YAML and all math spans parsed successfully with real KaTeX.
- Focused read-only dependency assertions: all cited IDs exist and are declared; manifest deps exactly match the item; remaining run-local suppliers precede the consumer on its A page. Passed.
- tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25: exit 0, refreshed and deduplicated.

No unresolved mathematical obligation or blocker remains for this queued item. Next action: record disposition repaired through the prescribed terminal recorder with source-status verified, then return control to the waiting Alpha. No third consumer judgment has been requested and no judge/pass stamp has been created. The engine retains its normal later closure checks.

Terminal recorder completed successfully (exit 0), recording disposition repaired with source-status verified at context ddfd39c809a822d616e4eb09c7969f33282015a3eae5afe7281beb76def36f62. Queue item 1 is complete. Next action is the owning Alpha's normal continuation; no FA repair obligation remains.
