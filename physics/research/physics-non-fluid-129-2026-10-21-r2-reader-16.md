# Reader report — batch 16

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: Step 3a reader  
Batch: `16`

## Reviewed inventory

Assigned pages:

- `emg-fx01` — `library/einstein-maxwell-models-mathematics/emg-fx01.md`
- `emg-fx01-examples` — `library/einstein-maxwell-models-mathematics/emg-fx01-examples.md`

Assigned items, reviewed in dependency order:

- `def-emg-fx-conformal-seed`
- `lem-emg-fx-conformal-constraints`
- `prop-emg-fx-rn-isotropic-seed`
- `ex-emg-fx-extremal-puncture-end`
- `cex-emg-fx-wrong-electric-weight`

Opened direct item suppliers:

- `def-emg-constrained-electrovacuum-data`
- `def-emg-geometric-scaling`
- `thm-gr-constraint-equations-in-normal-frame`
- `def-emg-xs-rn-data`

Opened the assigned A page's prerequisite pages to check page scope and summaries:

- `emg-cp01` — `library/einstein-maxwell-models-mathematics/emg-cp01.md`
- `emg-c01` — `library/einstein-maxwell-models-mathematics/emg-c01.md`
- `emg-ms01` — `library/einstein-maxwell-models-mathematics/emg-ms01.md`

Also read the batch manifest, `briefs/reader.md`, and the current batch proof-contract file. The listed dependency roles and contract derivations were treated as navigation/evidence and checked against current prose. The `emg-ms01` shell diagram was checked against its caption and orientation description; it is a meridional sketch of the stated finite shell. No TikZ/tikzcd diagrams occur in either assigned page or any of the five assigned items.

## Findings and edits

No confirmed defects were found in the assigned pages or items. No source file was edited, so there are no repair or validation commands to report. The author check was not treated as a mathematical verdict.

The item arguments were checked directly:

- The seed definition fixes a smooth positive conformal factor, tensor/vector types, trace condition, induced data, SI/geometric scaling, component units, and explicitly does not impose constraint or development equations.
- The conformal-constraint lemma's determinant/divergence calculation gives the stated ψ⁻⁶ vector weight. The cross-product and norm weights, trace-free (K) decomposition, and three-dimensional scalar-curvature formula yield the displayed Hamiltonian equation with the stated coefficient and signs. The momentum equation is separately retained.
- The RN proposition's positive radial domain is exactly where its radicand is positive. The radial divergence and Laplacian calculations verify the seed constraints on the punctured domain. The nonextreme mean-curvature zero, two asymptotically Euclidean ends, and areal-radius comparison hold on the stated branches; the proof makes no source-at-the-puncture or maximal-extension claim.
- The extremal example's substitution gives ψ² = 1 + m/r, and (ds/dr=ψ^2>0) maps the punctured interval onto ℝ. The sphere radius tends to (m) at the infinite-distance end and the displayed mean curvature is strictly positive for every centered sphere.
- The counterexample uses a smooth positive ψ and a divergence-free seed field; for the unscaled field, the metric divergence is (6), so it refutes the stated universal preservation claim.

The current proof contract matches the item identities and derivation steps. The assigned page placements and their three prerequisite page relationships agree with the inspected item homes and summaries. No page-summary correction is needed.

## Page verdicts

- `emg-fx01`: **pass**. Draft mathematics page; its three assigned items and listed page prerequisites match the inspected content. It has no prose summary to audit.
- `emg-fx01-examples`: **pass**. Draft examples page; its two example/counterexample placements and prerequisite on `emg-fx01` match the inspected content. It has no prose summary to audit.

## Uneditable defects and blocker

None identified. No blocker.

## Coverage note

Reviewed all five assigned items, both assigned pages, their direct logical item suppliers, and the three page prerequisites named by the assigned A page. I checked supplier statements and the exact supplier uses relevant to these claims; this report does not certify a fresh audit of every unrelated transitive proof in those published suppliers. No external-source retrieval was needed to resolve a mathematical uncertainty in the assigned arguments.
