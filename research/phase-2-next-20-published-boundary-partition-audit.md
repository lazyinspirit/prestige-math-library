# Published boundary partition audit — 2026-09-11

This bounded audit reconciles the connection author's partition handoff. It
reads the complete boundary partition theorem, its three declared dependencies,
and the exact cover/shrinking/bump clauses inherited from the boundaryless
construction. It does not audit all direct consumers or all differential-
geometry partition uses. No published item was edited.

## Deduplication

The author reconfirmed the existing A-P findings on
`lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`,
`lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`
and `thm-smooth-partitions-of-unity-exist-on-manifolds`. Their exact pointwise,
annular and countable bump selections and current repair strategies are already
recorded in the canonical ledger. Reconfirmation changes none of their rows.

`thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`, SHA-256
`47fdd9f3d84db12583082d6d25957f14c124933952521ae73479532a9eebda57`,
has no aliases and previously had no classification row. Exact-ID, boundary
partition, countable-choice, half-space bump and all three supplier-ID searches
found no duplicate mechanism entry for this item.

## Exact defects

The theorem's statement explicitly assumes `AC_omega`, so this is not a missing
axiom in its own headline. Two published interfaces nevertheless remain open.

First, the target conclusion uses
`def-smooth-partition-of-unity-subordinate-to-an-open-cover`. That definition's
domain is a smooth manifold in the precise sense of `def-smooth-manifold`,
whose underlying space is a manifold without boundary. The boundary theorem's
input is instead the distinct half-space-chart object defined by
`def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`. Neither the
target nor a dependency extends the partition definition to this object. The
conclusion is therefore stated across an unresolved type/convention boundary.
Repair the definition so it explicitly accepts both kinds of smooth manifold,
or add the identical boundary version and make this theorem target it.

Second, proofs 1.1--2.1 say to restrict Euclidean bumps in half-space charts
and then apply "the same" countable shrinking and normalization construction.
The cited boundaryless theorem is already A-P because its current proof first
selects data over every point and later makes countably many annular and bump
selections without its required choice contract. More basically, that theorem
does not itself supply the boundary half-ball cover and shrinking asserted here.
The target does not construct those families or cite a boundary supplier.
Thus the statement's assertion that `AC_omega` suffices is currently unsupported
by its proof, even though it is mathematically repairable.

## Repair and current impact

Retain the stated `AC_omega` hypothesis. Form all eligible relatively compact
chart half-balls subordinate to the input cover before applying the
countable-base/Lindelof selection, so no point-indexed choice is made. Choose
one finite nested half-ball cover for each compact annulus and then one bump for
each member of the resulting countable locally finite family using countable
choice. Restrictions of ambient Euclidean bumps are smooth in the published
local-extension sense, and relative supports remain inside the assigned chart
members. Normalize exactly as in the boundaryless construction. This is also
the explicit blueprint already written before the final theorem application in
`def-countable-chart-gluing-of-a-nonnegative-density-measure`; it can be moved
or reproduced without using that definition's later circular application of
the boundary partition theorem.

All needed topology, half-space smoothness, finite compactness and choice
interfaces are already published. Repair the three boundaryless A-P suppliers
first, then give the boundary half-ball adaptation and resolve the output
definition's domain. No new Phase-2 pair is needed.

The current connection-existence draft assumes full AC and reproduces the
half-ball construction locally, so this published defect does not leave that
live proof mathematically uncovered. Published direct consumers require exact
item-level revalidation and are not classified by this bounded pass.

## Disposition and limits

The boundary partition theorem is newly A-P. The three earlier partition rows
are unchanged. This is a full target and actually-used-interface audit, not a
whole dependency-closure or direct-consumer certification.
