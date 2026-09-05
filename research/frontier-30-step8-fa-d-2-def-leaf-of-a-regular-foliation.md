# Final-adjudicator evidence: `def-leaf-of-a-regular-foliation`

Disposition: `accepted-after-review`.

I independently inspected the current definition, its regular-foliation-atlas
dependency, the differential-geometry A/B pages, batch-15 manifest and coverage
records, the Step-6 reader/refuter material, the two judge rejections, both
Alpha adjudications, the round-2 repair account, and the proof contracts of the
two direct consumers.  This definition has no proof section, so its absence
from the proof-contract map and its `verification.precheck: n/a` value are
correct.  It was included in the Step-6 refuter's complete opened scope, which
reported no defect in this item.

The first repair replaced an invalid ambient-connectedness maximality
criterion with plaque-chain continuation.  The second repair then removed the
unsupported claim that this set already carried a constructed intrinsic smooth
structure and immersion.  The current item now makes exactly the claim its
dependency licenses: atlas plaques are connected components of coordinate
slices; finite overlap chains generate an equivalence relation on points; and
each equivalence class is the underlying leaf subset.  Reflexivity comes from
the atlas cover, symmetry from reversing a chain, and transitivity from
concatenating chains.  The transition condition in the dependency sends plaque
directions to plaque directions, so this continuation is independent of which
overlapping chart is used.  The page's later correspondence theorem, rather
than this definition, supplies the intrinsic immersed-manifold structure.  The
result is properly scoped and avoids both fatal defects.

Authoritative source verification:

- https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20%282021%29.pdf
  — Will Merry's ETH Zurich differential-geometry notes construct the global
  Frobenius leaves by taking local slices and declaring two slices equivalent
  when a finite sequence of consecutive slices intersects.  This verifies the
  plaque-chain construction used here.  The notes then separately construct
  the resulting leaf as a connected immersed integral manifold, supporting the
  repaired item's decision to stop at the underlying subset until the later
  theorem on this page supplies that structure.

No item, direct dependency, page, or item-local contract required an
independent repair.  Focused render, dependency, content-policy, and strict
batch-15 proof-contract checks passed before recording this decision.
