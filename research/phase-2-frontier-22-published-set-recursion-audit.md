# Frontier-22 published set-recursion audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit covers the exact recursion interfaces used by the active
forcing, constructibility and large-cardinal work:

| Published ID | SHA-256 |
|---|---|
| `def-initial-segment` | `35392acafbf98346c7c285b0d4bc40d4a8942156d5a000e3672e65ac71bb78c7` |
| `thm-transfinite-induction` | `c2aaf57116a9bb8a7b3651ea7deee933fa1e3800da00ab0b4f10241558850d51` |
| `thm-transfinite-recursion` | `5296c2d2df2b22cc702014db68898cd75321e16a3898f21cd319e091df215702` |
| `def-well-founded-setlike-relations` | `044956ff1c760a10ddfcaafcc046be19e3c37f773fdee26a95c768cdd6b1b434` |
| `lem-finite-predecessor-closure-is-a-set` | `2734ad383f33b3762979a6523e33dabd924d32db18d20a934737397fb3bad803` |
| `thm-induction-on-well-founded-relations` | `82f41503bf8af753bd99c18022cadfa3a4ea816539a675f70962bc6ac7e85f8e` |
| `lem-compatible-well-founded-recursion-attempts` | `a1a5a44df131bfb2f24dc9b130ef81867d9c8a3068ddc41923ffdfa3d52f50fa` |
| `thm-recursion-on-well-founded-setlike-relations` | `6fcdf10b7be553a8fb3add14c27611a96d7c45db33c151f42944b003766e1abf` |

All eight files were read in full. Before adding a disposition, the complete
canonical ledger was searched by each exact ID, the aliases
`transfinite-recursion`, `transfinite-induction` and
`def-initial-segment-of-well-order`, and the mechanisms `unique attempt`,
`predecessor closure`, `setlike relation`, `Replacement`, and `hidden choice`.
None had a classification row under its ID or alias. `def-well-order` retains
its existing U-P record for separate historical material; this pass only uses
its exact least-element clause and does not reclassify that page.

The active manifests name `thm-transfinite-recursion` in batches 13 and 14 and
`thm-recursion-on-well-founded-setlike-relations` in batch 13. Published
forcing-name, Boolean-semantics, constructible-hierarchy and infinitary-syntax
definitions use the same exact clauses. This receipt does not audit those
consumers or every transitive set-theory interface.

## Well-order recursion chain

`def-initial-segment` correctly proves the downward-closed, principal and
nesting properties used by induction and recursion. `thm-transfinite-induction`
uses the unique least counterexample of a supplied well-order; it makes no
selection from a family.

For `thm-transfinite-recursion`, compatibility of two attempts follows by
transfinite induction. At each stage the prior attempt is unique, so
Replacement collects a functionally specified set of extended attempts and
Union assembles it. The domain calculation
`union_{b<a} W_{<=b}=W_{<a}` includes the least-element case. A second
Replacement collects the full family on `W`. Separation, Replacement and
Union are the exact ZF axioms spent; no form of Choice is hidden in the
construction.

Classification: all three items are new bounded no-repair-needed
dispositions.

## Setlike well-founded recursion chain

`def-well-founded-setlike-relations` separates setlikeness from
well-foundedness and correctly treats definable classes as schemas.

`lem-finite-predecessor-closure-is-a-set` starts from `{x}`, uses Replacement
to collect the predecessor sets at each natural stage, and uses the preceding
set-well-order recursion theorem to form the sequence. Its union is the least
predecessor-closed set and is exactly the finite predecessor-path cone. This
does not require well-foundedness.

`thm-induction-on-well-founded-relations` applies the supplied minimal-element
property to the set of counterexamples inside that cone. The argument does not
invoke ambient Foundation.

In `lem-compatible-well-founded-recursion-attempts`, well-founded induction
first proves agreement on overlapping domains. Since `pred_R(x)` is a set,
Replacement collects the uniquely specified predecessor-cone attempts. Their
union is a function by compatibility. The finite-path description proves
`C(x)=union_{yRx}C(y) union {x}`, and absence of a finite cycle follows from
well-foundedness on the finite cycle set. Extending by the single prescribed
value gives the unique cone attempt.

Finally, `thm-recursion-on-well-founded-setlike-relations` applies that cone
assembly by well-founded induction, defines the class value through existence
in a set-domain attempt, and uses Replacement only when restricting the class
function to a supplied set. Compatibility proves functionality and the
recursion equation. No family of nonunique witnesses is chosen.

Classification: all five items are new bounded no-repair-needed
dispositions.

## Limits

No external source was newly fetched or read. This is a direct proof and
used-interface audit, not an independent judge result or exhaustive discovery
claim. The current draft consumers do not repair these published pages; no
repair is needed in the audited clauses.
