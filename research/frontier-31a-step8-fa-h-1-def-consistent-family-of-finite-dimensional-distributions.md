# FA terminal evidence — queue h, item 1

Item: `def-consistent-family-of-finite-dimensional-distributions`.
Decision: `repaired`. Source status: `verified`.

I independently read the current definition and all three direct dependencies:
`def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, and `def-coordinate-maps-and-cylinder-sigma-algebra`.
I inspected the batch-4 A/B pages, the item's manifest entry, batch-4 coverage and convention notes, reader/refuter reports, group-h context and Alpha report, and both rejection rows in `frontier-31a-judge.jsonl` together with Alpha's adjudication ledger row. Definitions are outside the batch proof-contract scope; this item has no proof contract or separate risk_review. Its relevant risks are support typing, empty products, and confusing reordering with exchangeability.

Alpha correctly restricted consistency to finite F subset G subset I. Terra's final rejection is nevertheless justified: the remaining arbitrary-bijection clause could compare distinct supports, and with varying coordinate spaces need not even define a map. For example, the deterministic law at (0,1) on two binary coordinates has compatible finite marginals delta_0 and delta_1; equating those marginals would incorrectly exclude it.

The repaired definition explicitly fixes the measurable coordinate spaces, defines p_{G,F} as restriction, and spells out its inverse-image measure identity. Measurability follows on coordinate generators; for empty F, the inverse images of the singleton sigma-algebra are empty/full. The empty marginal is the unique probability on the singleton. Reordering is now precisely transport between two enumerations of the same F, using r_{e'} composed with r_e inverse. Both relabellings are measurable isomorphisms by the coordinate-generator definition, including the unique empty relabelling. Pushforward composition gives the asserted change of display, without assuming exchangeability or equal marginals. Full joint data remain necessary. This preserves the manifest and notes' projection-and-reordering convention rather than changing the theorem's scope.

Source checked: https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf — PDF page 0, section 2.1, Definitions 2.1–2.2, equations (2.4)–(2.5), read in full. These prescribe permutation of the same coordinate list and marginalization. The finite-subset formulation and varying-factor typing are checked directly using the local coordinate sigma-algebra dependency. No claim that distinct index sets have identical laws is supported by those equations.

Only this item was edited; statement provenance is now ai-altered. No dependency, proof contract, or manifest edit is required and no prerequisite licence is needed. No judge verdict or pass stamp was created.

Focused checks: precheck exited 0 (definition, zero proof bodies); rendercheck passed; batch-4 content-policy passed (29 items, zero errors/warnings); batch-4 manifest-deps passed. Manual checks included distinct marginals, varying factors, empty support, identity restriction, and change of enumeration.

Unresolved mathematical obligations: none. Next action: record these exact item bytes through the authorized terminal recorder; only after it succeeds begin queue item 2.

## Receipt refresh after queue item 3 repair

The first recording succeeded before item 2 began. While recording the completed item 3, the recorder reported this receipt stale because judge context includes every A/B-pair item interface (`tools/judge.mts`, buildPrompt pairInterfaces). The repaired i.i.d. example now explicitly names its cylinder sigma-algebra and cites coordinate independence directly. I reviewed that final example interface: it is compatible with this definition's finite-support marginal and reordering conventions, and does not assume exchangeability of arbitrary consistent laws. This definition and all its direct dependencies remain unchanged. Refreshing the same repaired disposition seals the updated sibling context, preserves the original receipt and queue ordering history, and creates no judge verdict.
