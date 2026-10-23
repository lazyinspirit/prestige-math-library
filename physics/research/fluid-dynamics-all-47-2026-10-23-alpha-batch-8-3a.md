# Batch 8 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; role: alpha; group: `batch-8`.

The generated order and scope route eight finding obligations, four underlying defects, and three critical risk reviews. Pre/post reader snapshots are identical; the reader made no source changes. No touched/page obligations are owed.

## Completed: lem-fd-cauchy-contact

Reviewed the complete current proof and all five cited suppliers. The delta/epsilon/h shrinking order, signed face projections, zero-coordinate continuity and unique matrix columns are valid. The tetrahedron diagram agrees schematically with the text; proofs remain independent of it. Completed its contract risk_review. Sources read directly: [Lopez-Pamies, §§3.3.2–3.3.4, pp38–40](https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf), [Oden, §4.1, pp26–27](https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf). Published suppliers were read only. No defect confirmed here.

The following entries were completed in the dispatched dependency order.

## Completed: lem-fd-weak-jump-consistency

Confirmed reader/refuter findings 2 (fatal typing/domain error) and 3 (nonfatal rendered paragraph interruption). Added the explicit coordinate permutation and graph-cylinder containment; retained the complete graph, equations, inequality direction and trace scope. Repaired the display within Proof 1.1 and clarified compactly supported graph-test tube construction. Completed the critical risk review before moving onward. Exact supplier: def-fd-conservative-weak-form, interior identity and inequality sign. Read [Silvestre, pp100–104, especially Example 6.2.2 and Definition 6.2.3](https://www.math.uchicago.edu/~luis/pdenotes.pdf) and [Guermond, §24.4.2 pp181–182](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf); those scalar one-dimensional statements support context, while the written proof supplies the matrix, multidimensional and source extensions locally. Checked both directions, empty patches, zero speed, zero jumps, graph normalization and thin-tube inequality necessity.

Consumer scan of items/ and library/ found only pthm-fd-conservation-jump-laws as a logical/reference item consumer. Its Statement and Proof 1.1–4.1 use local graph patches, matching orientation, one-sided C1 extensions, ordinary sources and separate initial data. It meets the corrected interface after restricting any graph chart to its cylinder; no source repair or further propagation is needed. The fd-mf02 inventory is unchanged. No defective published consumer found. Focused checks are recorded below.

## Completed: ex-fdmath-vacuum-momentum-degeneracy

Confirmed reader/refuter finding 4 (fatal type error). Replaced the point-to-field identification with explicitly measurable fields on Omega×[0,T), a separately locally integrable product U, and the distinction between M and its field realization. Corrected Facts F1 and the contract citation to the exact supplier type. The explicit witnesses 0 and e1 prove noninjectivity at zero density; division by positive rho proves unique recovery. No differential equation solution is asserted. No item consumer exists in items/ or library/; the companion page only inventories the example. No dependency, ID, page or proof-scope change. Focused checks are recorded below.

## Completed: lem-fd-local-balance-equivalence

Confirmed reader/refuter finding 1 (nonfatal rendered paragraph interruption). Kept the full product-rule identity within step 2.1, preserving all mathematics and references. The Statement is unchanged. Independently checked all seven steps, including the Jordan/null-boundary reduction and time-local transport restriction, ball localization, conservative/material equivalence, angular component symmetry and converse, stress transpose in energy flux, outward heat sign, and adding/subtracting kinetic energy. Stress C1 regularity is an explicit assumption. Exact suppliers: lem-fd-transport-and-density (current Statement and proof), lem-fd-cauchy-contact (reviewed earlier), thm-divergence-theorem-for-bounded-c-one-euclidean-domains (current Statement and proof), and the three declared domain/measure/choice definitions. Completed the critical risk_review. Sources read: Lopez-Pamies §3.3.4 pp40–41 and Oden §§4.1–4.2,4.4 and5.1 pp26–34. Oden leaves stress symmetry as an exercise; the authored component calculation closes that argument locally. Its volumetric heat source corresponds to this item's specific rho r, with the conversion explicit in the written formulas. No new mathematical or published defect found.

## Decisions and ledger

The decisions JSON contains exactly the eight owed obligations, with no added touched/page decisions. Reader/refuter pairs share one closed row per actual defect and preserve separate original observations:

| Obligations | Verdict | Closed defect suffix |
| --- | --- | --- |
| reader:8:2, refuter:8:2 | confirmed_fatal | 3a-batch-8-jump-domain |
| reader:8:3, refuter:8:3 | confirmed_nonfatal | 3a-batch-8-jump-layout |
| reader:8:4, refuter:8:4 | confirmed_fatal | 3a-batch-8-vacuum-field-type |
| reader:8:1, refuter:8:1 | confirmed_nonfatal | 3a-batch-8-balance-layout |

Every suffix is prefixed with `fluid-dynamics-all-47-2026-10-23-`. Each row is owned at `3a-adjudicate`, has disposition `fixed`, and references both exact obligations. Every completed repair has `repair_confidence: 1`. All five item bytes matched the immutable pre-reader snapshot before edits; pre/post snapshots are identical. Findings remain confirmed against those original carriers. No historical-byte uncertainty or in-run producer finding is routed here.

## Focused checks

All commands below were run from the physics workspace. The three changed item paths are `items/lem-fd-weak-jump-consistency.md`, `items/ex-fdmath-vacuum-momentum-degeneracy.md`, and `items/lem-fd-local-balance-equivalence.md`.

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts` with those three paths: completed; jump and balance reflowed, example unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with those three paths: exit 0; 3 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` with those three paths: exit 0; all frontmatter and mathematics parse with the actual YAML parser and KaTeX.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-8.proof-contracts.json --strict`: final exit 0, 4/4 checked, 0 errors and warnings. Its initial local run requested an explicit Statement/step anchor in the amended empty-patch evidence; the evidence was anchored and the check rerun successfully. This mechanical diagnostic is not a separate content defect.
- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-8.proof-contracts.json`: run before reviews; three CRITICAL items and one MODERATE item. All three critical risk reviews are now complete and specific. Final run with `--require-reviewed`: exit 0, 0 errors.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run fluid-dynamics-all-47-2026-10-23`: exit 0, refreshed and deduplicated after updating the owned Cauchy/motion and balance/transport use-review evidence. No dependency edges changed.
- `node tools/physics-support/proof-layout.mjs` with all three changed paths in one command after the final source edit and formatter: exit 0; 3 items, 13 steps, 0 defects. No later item edit.
- `node tools/physics-support/defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23`: exit 0; 29 current run rows checked, 0 errors (this includes other owners' rows and is a structural check only).
- Local assertions: exactly 8/8 routed obligations, four distinct closed rows, confidence 1 throughout; the two changed public-section manifest mirrors match their final item sections exactly.

## Handoff

Three draft items repaired; inventories, IDs and dependency edges preserved. The two Statement/Example interfaces have corresponding manifest updates; the jump Statement provenance is `ai-altered` with its existing source URLs retained. Contract citations, boundary evidence and risk reviews were synchronized. No physical postulate, empirical observation, sampling claim, measured input or statistical inference was introduced; these remain mathematical conditional formulations and algebraic examples. Statements/Example descriptions remain uninterrupted by hyperlinks. The only scoped TikZ diagram is the checked Cauchy tetrahedron; no additional diagram is needed for the local coordinate calculations.

No defective published supplier or consumer was found, so no published ledger entry or lock was needed. No outside consumer requires repair, no withdrawal is proposed, and no blocker or escalation remains. Published/imported content and root mathematics were read only. No judge cycle, decision stamping, publication or engine gate battery was initiated; the engine owns the remaining hash stamping and gates.
