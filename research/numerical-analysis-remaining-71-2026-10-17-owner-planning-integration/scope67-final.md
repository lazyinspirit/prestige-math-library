# Batch 67: Reynolds volume-integral convention bridge

Run: numerical-analysis-remaining-71-2026-10-17. Read CLAUDE, the actual batch67 state, complete final `review-1.json`, its input, and complete `repair-1.input.json` and `repair-1.json`. The native state records the completed single local repair followed by final escalation; that history and all native reports remain untouched. This is a focused owner repair, not an additional native review or gate acceptance.

The remaining finding is confirmed: steps 1–3 of `thm-ale-reynolds-transport-identity` use compact-Jordan/Riemann volume integrals, whereas the cited finite piecewise-C1 divergence theorem proves its volume formula with Lebesgue integrals. Their equality was not previously established in this item.

Read the complete actual Reynolds theorem, ALE moving-map definition and Jacobian lemma, the published divergence theorem and its proof, the published bounded-Borel Riemann/Lebesgue comparison lemma and its proof, and both complete A/B pages. The comparison supplier already exists and needs no repair. No published source was edited or claimed for editing.

Exact current pre-edit bytes of the changed theorem and A page are archived under `scope67-before/items/` and `scope67-before/library/numerical-pdes-and-spatial-discretization/`.

Completed minimal repair:

- Added `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals` to the theorem's dependencies and F13, recording its exact existing Countable Choice hypothesis and the divergence supplier's Lebesgue volume convention.
- At step 4.1, put f=div(g w_m) and take a nondegenerate closed bounding box. The field's existing regularity makes f continuous and bounded on the compact moving closure. Its zero extension from the open moving domain is Borel: each strict superlevel is relatively open within the moving domain, with the outside zero region included precisely for negative levels. Existing step 1.2 already proves Riemann integrability of this zero extension.
- The cited comparison lemma now identifies its Riemann integral with its Lebesgue integral, equal to the Lebesgue integral of f over the moving domain. Thus the volume integral in step 3.1 is precisely the one consumed by the divergence theorem. The boundary integral then follows with the unchanged finite-face/outward-normal convention.
- Updated the final sentence and A-page summary to account for Countable Choice through both the divergence and comparison suppliers. No new assumption was added: Countable Choice was already in the original Statement.

Direct comparison confirmed the complete original Reynolds Statement is byte-identical. No Definition, dimensional branch, regularity hypothesis, finite-face convention, conclusion or previous native repair was changed. No new item or pair is needed.

Actual consumer search over items and pages found only the theorem itself and its A-page listing/summary. The A page retains the same continuous Reynolds identity and now accurately describes its two Countable Choice supplier uses. There is no item consumer of this general-dimensional theorem. The B page's moving-cell, Robin-interface and toy added-mass summaries use the independent discrete/finite-dimensional branches and are unaffected. Those earlier native consumer acceptances are not rewritten or relabeled as this owner's fresh audits. No public interface changed, so no additional consumer propagation is triggered.

After the final item edit ran exactly:

`node tools/proof-layout.mjs items/thm-ale-reynolds-transport-identity.md`

Exit 0: `proof-layout: 1 items, 5 steps, 0 defects`.

The sole remaining final-review finding has a concrete source resolution. Root owns current metadata/artifact bindings and native owner resolution. No tests, full validators, gates, native state/report edits, publication or commits were performed.
