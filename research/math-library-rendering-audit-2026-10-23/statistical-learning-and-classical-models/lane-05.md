# Statistical Learning and Classical Models rendering audit — lane 05

Reviewed 43 assigned items and 67 screenshot tiles. All source snapshots and matching HTML previews passed SHA256 checks. Every tile was opened individually at original resolution; every tile hash matches its receipt.

## Findings

### `lem-anm-density-factorization-implies-dsep-conditional-independence` — TikZ source shown instead of diagram

- Source: `items/lem-anm-density-factorization-implies-dsep-conditional-independence.md:96` (diagram fence spans lines 96–105).
- Symptom: The frozen HTML preserves the diagram as a `language-tikz` code block, and screenshot tile `screenshots/lem-anm-density-factorization-implies-dsep-conditional-independence--02.png` shows literal TikZ commands. The screenshot receipt reports `tikz_count: 0`.
- Mathematical content: The source schematic is intended to show components \(L\) and \(R\) with possible edges to conditioning set \(C\), and no moral-graph path from \(L\) to \(R\) after deleting \(C\).
- Repair direction: Use the renderer-supported TikZ fence and recapture the local preview.

## Existing diagram checks

Six other assigned items contain rendered diagrams. Their node labels, edges, branch predicates, and example relations match their source claims: affine halfspace labels; CART splits and leaf values; anchored graph plus isolated component; union versus mutual KNN graphs; chain versus collider DAGs; and the retained square-neighbor graph for MDS/ISOMAP/LLE.

No further high-likelihood missing diagram was identified. Title math and KaTeX rendering showed no other confirmed defect.

## Coverage and hashes

The JSON report lists each assigned item with source, snapshot, HTML, and tile hashes; section coverage; individual original-resolution view attestations; and diagram checks. All 43 source/snapshot hashes and HTML hashes match, and all 67 tile hashes match.

## Limitations

This review used only local frozen source snapshots, matching local HTML, and local PNG captures. No live site or network was accessed.
