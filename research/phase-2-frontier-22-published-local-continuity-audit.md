# Frontier-22 published local-continuity audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit covers two exact topology interfaces used throughout the
active frontier:

- `lem-continuity-is-local-and-pastes`, SHA-256
  `ce4bd4be6b2d5b635daa4635f8bb2e0f113be1db06924b7c824096a200323105`;
- `lem-locally-finite-sums-are-continuous`, SHA-256
  `69773676830c86456de92f1873c6fa7093c64ce2007a8afce36b6cc94637bb4e`.

Both files and their exact subspace, continuity, local-finiteness and finite-sum
clauses were read in full. Before classification, the complete canonical
ledger was searched by both exact IDs, alias `lem-pasting-lemma-top`, and the
mechanisms `open pasting`, `finite closed cover`, `locally finite sum`,
`cozero`, `neighbourhood`, and the exact supplier IDs. The pasting lemma had a
supplier-map mention but no classification row. Neither target or alias was
otherwise classified. The adjacent dependency rows are not moved by this
focused used-clause review.

## Pasting and local continuity

The composite clause is the direct preimage identity. On an open cover, each
restricted preimage is open in the cover member and hence open in the ambient
space; their arbitrary union is the full preimage. On a finite closed cover,
the analogous restricted preimages are ambient closed and their finite union
is the full preimage. The proof uses exactly the stated topology asymmetry and
handles `n>=1`. The restriction converses follow from the subspace trace
definition. No choice principle is used.

Classification: new bounded no-repair-needed disposition.

## Locally finite sums

At a fixed point, local finiteness supplies a neighbourhood meeting only
finitely many cozero sets. All other functions vanish throughout that
neighbourhood, so the arbitrary pointwise nonnegative sum is locally an actual
finite sum and is well defined. Under the canonical neighbourhood convention,
that neighbourhood contains an open neighbourhood of the point; restricting
there and applying the preceding open-cover locality clause proves continuity.
This is a correct implicit use of an adequate published supplier, not a missing
dependency defect. Nonnegativity is preserved pointwise.

Classification: new bounded no-repair-needed disposition.

## Limits

This pass certifies the displayed target clauses and their exact used
interfaces, not every clause of the adjacent general continuous-function
algebra or the full transitive topology closure. No external source was newly
read and no independent judge result or exhaustive discovery is claimed.
