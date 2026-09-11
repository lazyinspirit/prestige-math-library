# Frontier-22 published cover-small chain-homotopy audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads the active cover-small chain-homotopy supplier and all
five of its direct declared interfaces:

| Published item | SHA-256 |
|---|---|
| `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` | `a5b1d2d8373f6c3d450a2327b6de9a0f537ac947f98fd15bc71f1d4b3ca21afe` |
| `thm-cover-small-singular-chains-compute-singular-homology` | `9b9794366c633d178686bbf340fb0cdc72ce7653ccc92e676b7ba8899e08e12f` |
| `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` | `80427eae70a2ee70db257174709c994af1084cc762b8efb2bec5860f5e867dee` |
| `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` | `60f7eb27a156e9cbf94262e2c3eedae5ab9848958890a6ec871e67aa6e7f763b` |
| `def-barycentric-subdivision-chain-operator` | `5acc772d15d3c66565967bea0e6b50c48b760379057cad2b8c2f2c98c057cc8a` |
| `def-barycentric-subdivision-prism-homotopy` | `551db6a97fa02a90f5b729f7d042ffcaae3b6b23af281b134beb622e3a3e16d2` |

None declares aliases. The complete canonical ledger was searched by every
exact ID and by the mechanisms cover-small inclusion, least and face-dependent
subdivision depths, support preservation, subdivision telescoping, tensoring
the split inclusion and a possible flatness requirement. None had a
classification row or an earlier item-specific finding.

## Bounded dispositions

The subdivision operator and prism homotopy are finite integral combinations
of affine subsimplices inside the original simplex. Consequently both preserve
the property that a simplex image lies in one cover member. Their recursive
definitions have the usual cone orientation. The published homotopy proof
uses the lower-dimensional identity on the boundary to obtain
`boundary P_n = identity - P boundary - S`; pushing forward gives
`1-S = boundary T + T boundary`. Applying a boundary on either side also
proves that `S` is a chain map.

`lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision`
uses the open pullback of the interiors covering each compact standard
simplex. A Lebesgue number and mesh decay give a depth for each of the finitely
many simplices in the chain, and the maximum of those finitely many depths
works for the chain. Finite selection here is an adequate implicit ZF use; no
countable or arbitrary choice family is formed.

The homology-isomorphism theorem is sound. A sufficiently subdivided cycle is
homologous to the original by the iterated prism identity. If a small cycle is
the boundary of `b`, subdivide `b` until it is small; the prism correction of
the already-small boundary stays in the small complex, giving a small bounding
chain.

For the stronger chain-homotopy statement, each singular simplex has a least
smallness depth. Recursion on dimension replaces that depth by the maximum of
its own depth and its faces' previously defined depths. The resulting exponent
is monotone on faces and is zero on every already-small simplex. Defining
`D sigma` by the corresponding finite prism sum and
`R=1-boundary D-D boundary`, the displayed correction from each face begins at
that face's own depth; every such term is small. Thus `R` lands in the
cover-small complex, restricts to the identity there and is homotopy inverse to
the inclusion. Cancellations in subdivided chains do not affect the
face-depth inequality.

Finally, the integral cover-small group is the direct summand of the free
singular-chain group spanned by the small simplices. Tensoring this split
inclusion, the retraction and the homotopy identities with an arbitrary
abelian coefficient group preserves all identities and injectivity; no
flatness hypothesis is needed.

Classification: six new bounded no-repair-needed dispositions. The published
homological excision consumer and current cohomological/Mayer--Vietoris drafts
use these exact clauses. No current Step-5 blocker, new Phase-2 supplier or new
pair was found.

## Limits

This pass certifies only the six complete targets and the exact compactness,
mesh, cone and tensor interfaces used above. It does not certify the full
singular-(co)homology closure or every later consumer. No external source was
newly consulted, no published item was edited, and no independent judgment or
exhaustive discovery claim is made.
