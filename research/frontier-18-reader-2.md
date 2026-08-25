# frontier-18 reader-2

Coverage note:
- I machine-checked the whole batch contract after repair with `citation-fidelity`.
- I personally opened 31 item files, concentrated on the Cayley/quasi-isometry core and the highest-risk extraspecial classification items.
- I did not personally open every item file in the two page pairs; the page verdicts below are therefore limited to the opened items plus the stated gate results.

## Findings

### R2-1
- Item: `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
- Location: Statement and proof step 1.1, [items/thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse.md:24] and [items/thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse.md:47]
- Severity: fatal
- Defect: the theorem was stated unconditionally, but step 1.1 selected one source point for each target point from a family of nonempty sets.
- Why: that is a real Axiom-of-Choice use, not a 30-second proof gap. Without an explicit AC hypothesis, the Statement asserted more than the proof licensed.
- Fix: added `Assume the Axiom of Choice` to the Statement and rewrote the proof with the selected map and explicit quasi-isometry constants.

### R2-2
- Item: `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`
- Location: Statement and proof step 1.1, [items/thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets.md:24] and [items/thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets.md:57]
- Severity: fatal
- Defect: the theorem was stated unconditionally and step 1.1 said “choose a separated net” without any theorem producing one.
- Why: `def-separated-net-in-a-metric-space` only defines the notion; it does not construct a separated net. The forward implication therefore used both an unstated AC hypothesis and an unlicensed existence step.
- Fix: added `Assume the Axiom of Choice`, replaced the unsupported “choose a separated net” step with a Zorn-maximal `\delta`-separated subset argument, and rebuilt the converse from the repaired quasi-isometry hierarchy.

### R2-3
- Items:
  `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph`,
  `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`,
  `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity`,
  `ex-the-integers-are-quasi-isometric-to-the-real-line`
- Location:
  [items/thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph.md:38],
  [items/thm-the-path-metric-of-a-connected-simple-graph-is-a-metric.md:38],
  [items/prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity.md:40],
  [items/ex-the-integers-are-quasi-isometric-to-the-real-line.md:32]
- Severity: fatal
- Defect: these facts blocks cited `(M3') Strong triangle inequality` from `def-metric-space` where the proofs only used the ordinary metric axioms or the ordinary triangle inequality.
- Why: that is an inaccurate citation. In the word-metric and path-metric items, the proof step was being licensed by the wrong clause of the source definition.
- Fix: replaced the bad fact lines with the correct metric-axiom / triangle-inequality clauses and simplified the closing path-metric step accordingly.

### R2-4
- Items:
  `prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy`,
  `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups`,
  `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter`,
  `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence`,
  `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective`,
  `fs-a-quasi-isometry-is-continuous-or-bijective`,
  `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals`,
  `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included`,
  `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry`
- Location:
  [items/prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy.md:32],
  [items/prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups.md:32],
  [items/prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter.md:32],
  [items/cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence.md:32],
  [items/cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective.md:32],
  [items/fs-a-quasi-isometry-is-continuous-or-bijective.md:32],
  [items/ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals.md:32],
  [items/prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included.md:32],
  [items/prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry.md:32]
- Severity: fatal
- Defect: these items were leaning on the broken “coarsely dense image” bridge, even when a direct choice-free argument was already available from the explicit witness maps or the finite combinatorics.
- Why: once R2-1 and R2-2 were repaired, leaving these proofs unchanged would have made them either silently inherit an unstated AC hypothesis or cite an overpowered source they did not need.
- Fix: rewrote each proof directly with explicit quasi-inverses or explicit bounded-distance arguments, keeping the finitely generated group results and the witness examples choice-free.

## Clean Reads

- `prop-equivalent-characterisations-of-an-extraspecial-p-group`: no concrete defect found.
- `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`: no concrete defect found.
- `thm-classification-of-extraspecial-p-groups-for-odd-p`: no concrete defect found.
- `thm-classification-of-extraspecial-two-groups`: no concrete defect found.

## Gates Run

- `node tools/tsx-run.mjs tools/reflow.mts` on the 17 changed items: pass.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 17 changed items: pass.
- `node tools/proof-contract.mjs research/frontier-18-batch-2.proof-contracts.json --items ... --strict` on the 17 changed items: pass.
- `node tools/citation-fidelity.mjs research/frontier-18-batch-2.proof-contracts.json --fail-on-missing-quote`: pass for the whole batch.

## Page Verdicts

- `extraspecial-p-groups-and-central-products` and companion:
  no concrete defect found in the 4 core classification items I opened; no page-local edits made.
- `cayley-graphs-word-metrics-and-quasi-isometry` and companion:
  fatal defects were found in the quasi-isometry bridge and the metric-citation cluster; all repaired items now pass reflow, precheck, strict proof-contract, and batch citation-fidelity.

Items actually opened: 31.
