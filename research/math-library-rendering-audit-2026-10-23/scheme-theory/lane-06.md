# Scheme Theory visual audit — lane 06

## Scope and coverage

Reviewed all 110 assigned frozen titles and complete ItemBody renderings. Every assigned source and snapshot matched its source hash and was byte-identical; every local rendered HTML file matched its assignment hash. Individually opened all 238 receipt-listed screenshot tiles through the image viewer at original resolution. Every tile hash matched its capture receipt. The item and tile ledger records exact paths, hashes, visual-view attestations, receipt diagnostics, and item-level findings: [lane-06.json](lane-06.json).

## Rejected clipping observations

Four first-letter clipping claims from the initial multi-image viewer pass were rechecked by opening each exact receipt-listed PNG separately at original resolution and checking its matching frozen HTML. All four screenshots visibly retain the complete opening text, and each matching HTML paragraph begins with the same complete text. These were viewer observations, not rendering defects:

- `def-exceptional-divisor-blowup`, snapshot line 50: “Let X be a scheme” is present in the standalone tile and HTML.
- `def-flat-abelian-sheaf`, snapshot line 26: “Let X be a topological space” is present in the standalone tile and HTML.
- `def-scheme-theoretic-inverse-image-subscheme`, snapshot line 25: “For f : X → S” is present in the standalone tile and HTML.
- `def-support-of-a-sheaf-section`, snapshot line 36: “Let X be a topological space” is present in the standalone tile and HTML.

The JSON ledger records each tile and HTML hash, the rejected observation, and the preserved individual-original-resolution tile attestations. After this recheck, all 110 items are clean for confirmed rendering defects.

## Diagram review

One optional TikZ candidate is supported by `lem-graph-as-pullback-diagonal`, snapshot lines 26 and 40–42. The statement identifies the Cartesian square with top map `Γ_u=(id_X,u):X→X×_S Y`, left map `u:X→Y`, right map `H=(u∘pr_X,pr_Y):X×_S Y→Y×_S Y`, and bottom map `Δ_{Y/S}:Y→Y×_S Y`; the proof verifies the pullback universal property. A labeled square marked Cartesian would make these objects and maps immediate to parse. This is an optional pedagogical candidate, not a mathematical defect or proof requirement. The local preview [tile](screenshots/lem-graph-as-pullback-diagonal--01.png) has no diagram.

No other missing diagram candidate met the high-likelihood threshold. No assigned item contains an existing TikZ diagram; the receipts report zero TikZ diagrams and zero diagram failures.

## Other observations and limits

Wikilinks render on separate lines by design; I did not count their line breaks or surrounding punctuation as defects. The review covers frozen local snapshots and preview HTML only; no live site or network was used. No item, library, or application files were edited, and no publication status changed.
