# Batch 7 torus CW proof repair, outside cycle 1

Resolved finding: the actual native round-1 report at
`research/advanced-qft-supersymmetry-build-2026-10-23-scope-review/batch-7/review-1.json`
requires explicit suppliers for the compact-image, compact-Hausdorff-closed,
and closed-surjection-quotient implications in proof steps 4.1 and 5.1 of
`items/def-standard-product-torus-as-a-compact-lie-group.md`.

## Actual reading and argument check

Read that current source and the native report. Read the complete pinned imported
statements and proofs of these three requested suppliers, without editing them:

- `thm-compactness-under-continuous-maps`, claim 1, proves compactness of images
  for arbitrary continuous maps and compact subsets, including empty subsets.
- `thm-compact-subset-of-a-hausdorff-space-is-closed`, claim 3, proves closedness
  of compact subsets in a Hausdorff ambient space; no compactness of that ambient
  space is needed.
- `lem-open-or-closed-surjection-is-quotient`, clause 2, requires continuity,
  surjectivity and closedness, and proves the reverse open-preimage implication
  using complements and surjectivity.

Also read the complete pinned `thm-closed-subspace-of-a-compact-space-is-compact`
statement/proof, claim 1, and `thm-compactness-agrees-with-metric-compactness`
statement/proof. Read the complete pinned `thm-heine-borel-rn` statement/proof:
its real-line clause gives metric compactness of the closed bounded interval
[0,1]. The compactness comparison then gives compactness for its usual topology.
Read the finite-product compactness supplier and the quotient-circle compactness
proposition, and the based-space convention. This was focused local argument and
supplier-use reading, not a corpus audit or external full-text review.

## Repair and hypotheses

Added those six explicit dependencies with mathematical-premise roles and Facts
F10–F14. Step 4.1 now establishes compactness of the characteristic cube from
[0,1] and the already-declared finite-product theorem. The case r=0 is its
one-point empty product and does not invoke the positive-dimensional hypotheses
of the Heine–Borel theorem. For each closed K in the cube, the closed-subspace
supplier makes K compact; continuity of q^r makes its image compact; and the
coordinate-separation proof already present in the current source makes T
Hausdorff, so the compact-image subset is closed in T. This proves q^r is closed.
Its established continuity and coordinatewise surjectivity then meet every
hypothesis of the closed-surjection quotient lemma. The weak CW topology
identification can therefore use this genuine quotient map. All implications
also apply when K is empty.

Step 5.1 now quantifies over a compact Hausdorff C and a continuous f:C->T,
using precisely compact-image and compact-Hausdorff-closed to show f(C) closed.
This verifies the weak Hausdorff condition with the same explicit suppliers.

## Interface and write scope

Only `items/def-standard-product-torus-as-a-compact-lie-group.md` was changed.
Its complete Definition and Definition references remain untouched; the change
is proof justification and proof-dependency declarations. No original Statement
or Definition interface changed, so the interface-change consumer traversal is
not triggered. No consumer repair or outside-batch source write was necessary.
All imported snapshots and root mathematical originals remained read-only.
No manifests, contracts, canonical plan, levels, coverage, readiness, authority,
native state or receipts were edited. Root owns the necessary manifest mirror
and metadata reconciliation, substantive adoption and owner resolution.

## Focused check

After the final source edit, from the repository root:

`node tools/proof-layout.mjs physics/items/def-standard-product-torus-as-a-compact-lie-group.md`

Exit 0: `proof-layout: 1 items, 6 steps, 0 defects`.

No gates, rehash, commits or independent-review acceptance were performed or
claimed. This note records the bounded outside repair, not native acceptance.
