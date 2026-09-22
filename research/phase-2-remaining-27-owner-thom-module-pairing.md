# Owner terminal repair: Thom absolute-relative filtered action

Run: `phase-2-remaining-27`. Date: 2026-09-21.

## Decision and scope

The paid Terra rejection and independent Astra final adjudication in
`research/phase-2-remaining-27-step7-fa-b-item-1370b268cd7af4ec-evidence.md`
identify a real published proof-interface defect in
`lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`.
The relative one-row collapse correctly gives the additive twisted Thom
isomorphism, but the former Proof 3.1 did not construct the filtered
absolute-relative action needed to identify that additive isomorphism with
`a -> pi^*a cup u`. For positive rank the relative spectral sequence has no
degree-zero fiber row, so the absolute multiplicative Serre theorem and the
ordinary relative cup-product proposition did not alone justify the claimed
page or abutment map.

The owner authorized the smallest coherent published repair. No judge,
adjudication, terminal receipt, queue, stamp, engine-state, tool, or
`published/` file was edited by this repair. The paid cycle remains exhausted;
the next certification is the owner terminal-resolution recorder on these
repaired bytes.

## Repair

The supplier now constructs the missing action rather than citing it as an
implicit consequence:

- [F7] fixes the relative cochain model and front/back relative cup formula;
  [F8] supplies filtered-complex pages and abutments plus the cellular
  local-coefficient comparison; [F9] supplies the transported
  local-coefficient cup formula; and [F10] supplies filtered-isomorphism
  lifting. These published dependencies were added to the item.
- Proof 2.2 defines the base skeletal filtration and relative disk/sphere
  filtration. It proves that `alpha star phi = pi^*alpha cup phi` remains a
  relative cochain, preserves the required filtration when the base factor is
  in `F^a`, obeys Leibniz, and therefore gives a filtered cochain map for every
  relative cocycle representative.
- Proof 3.1 identifies the absolute layers with ordinary cellular cochains and
  the relative layers with cellular cochains valued in
  `H^q(D^n,S^{n-1};R)`. The front/back formula becomes the local-coefficient
  scalar action on the orientation row. For a cocycle `upsilon`, the `E_2` map
  is cup product with its row-`n` section `s_upsilon`; when `upsilon` represents
  the normalized class, this section is the supplied orientation and the map
  is the corresponding trivialization.
- Proof 4.1 obtains the normalized class from the orientation section through
  the one-row collapse, applies the filtered map, lifts its associated-graded
  isomorphism, and uses the one-row vanishing of the next filtration piece to
  identify the collapse edge itself with `a -> pi^*a cup u`.
- CW-type transport, the unoriented twisted collapse, convergence,
  local-coefficient types, AC scope, empty/disconnected bases, and the repaired
  rank-zero convention are retained. The canonical precheck relayering gives
  proof steps 1.1, 2.1, 2.2, 3.1, 4.1, 5.1, and 6.1.

The owning historical entries in
`research/phase-2-next-18-batch-3.proof-contracts.json` and
`research/phase-2-next-18-proof-contracts.json` were synchronized with the new
facts, citations, derivations, boundaries, and risk review. No current-run page
manifest names this inherited published item, and the all-batch manifest audit
confirms that every new dependency resolves.

The prescribed published-repair row was appended for group `b`, with genuine
run item
`thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` as
`found_via`, stage `7-rejudge`, pre-repair guard hash
`32c7cec0554a068475b8fb0a5e71ccfb88a7a78a9027fa74db6356b03080e565`,
and post-repair guard hash
`bd0843c646274f362d9f4e2a5704201337271ff92900872db318ab2f557a1b71`.
The final raw item SHA-256 is
`65d39de147e21692f9bb9bd1a6676924a1f8ef1279b367c05afe03eca7d10032`.

## Sources

The repair checked the complete cited Thom discussions in May, *A Concise
Course in Algebraic Topology*, Chapter 23 section 5, and Miller, MIT 18.906
Lectures 34-35. May supplies the Thom diagonal/module viewpoint and Miller
states the relative Serre proof and its module conclusion. Both support the
classical result; the explicit filtration control above is the library's
completion of the interface omitted by the source sketches. Hatcher's
relative cup construction and the library's published filtered-complex and
local-coefficient items provide the chain-level typing used in the repair.

## Verification

- `tools/prosecheck.mjs`: 1 file, 0 errors, 0 warnings.
- `tools/precheck.mts`: PASS (direct), 1 checked, 0 failing.
- Strict proof-contract checks on both owning historical contract files: 1/1
  checked, 0 errors, 0 warnings in each.
- `tools/depcheck.mjs --quiet`: exit 0; no cycles, all references resolve, no
  draft items on published pages. Its 273 repository-wide warnings are
  pre-existing and do not name this item.
- `tools/frontier-dependency-ledger.mjs refresh`: refreshed and deduplicated.
- `tools/audit-manifest.mjs` over all 15 current-run batch manifests: 9146
  relationships over 1032 items, 0 defects.
- `git diff --check` over the item, both contracts, and published-repair ledger:
  clean.
- Full Step-7 guard after the repair: 696/696 changes licensed, 0 errors.
- Published-closure diagnostic before terminal recording: exactly the expected
  stale owner resolution/current-certification messages for this repaired
  supplier. No further Terra call is authorized; the owner terminal resolution
  on the repaired bytes is the required next action.

The initial DeepSeek repair attempt returned without an edit and was rejected.
The replacement attempt produced the proof, synchronized contracts, repair
row, and passing guard, but was interrupted after it returned to exploratory
diagnostics without writing this report. The owner reviewed the resulting
proof, required the conditional `s_upsilon` ordering and the one-row edge
injectivity argument, and independently reran the checks above before adopting
the repair. This report is the terminal owner basis.
