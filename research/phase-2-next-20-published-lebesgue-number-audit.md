# Published Lebesgue-number supplier audit — 2026-09-11

This bounded audit follows the active connection proof's use of
`thm-lebesgue-number-lemma` to make a finite mesh subordinate to pulled-back
frame domains. It covers the complete theorem and its exact compactness,
distance-to-complement, diameter and extreme-value clauses. It does not certify
all metric compactness results, and no published item was edited.

## Deduplication and artifacts

The whole canonical ledger was searched by the exact ID, alias
`thm-lebesgue-number`, title, mechanism and principal supplier IDs. The theorem
had no classification row. Historical U-P300 prose mentions it as a true
comparison supplier while clearing
`cex-open-cover-with-no-lebesgue-number`; that is reconciled here rather than
copied into a second finding.

Current SHA-256 values are:

- target `thm-lebesgue-number-lemma`:
  `3f856774bb16eb5fa53e37594b7f925a278ee64dd500add0af0ee9665019c842`;
- `def-metric-compactness`:
  `0b5a4e3ddb5d5c9446305303a8bf0bb0b45f6bb4d58657f7a4da7e01cdd298ee`;
- `lem-distance-to-set-is-lipschitz`:
  `78c6374ecae3adbb8f88ba40084e02a127627e87f00040c52e5c83ba2fe323be`;
- `thm-extreme-value-metric`:
  `5edad20fc9a7e0dbb570230dee94cc24b046f71c7d59830d79a5bee69ff27613`;
- `def-metric-bounded-diameter`:
  `1314dd6d8834da6f0fc2bd0f55ff0e4c1d2604f9632dd909e4a53a91019c1de5`.

## Exact proof and used clause

The proof separates the empty compact space and the case in which one finite-
subcover member is all of `X`, so it never takes distance to the empty set. In
the remaining case, each complement `X minus U_i` is nonempty and

`g(x)=max_i d(x,X minus U_i)`

is one-Lipschitz. Openness of the finite cover makes `g(x)>0` pointwise, and
the extreme-value theorem gives a positive minimum `delta`. If a nonempty set
`A` has diameter below `delta`, choose `a` in `A` and an index attaining the
finite maximum at `a`; every point of `A` lies closer to `a` than the distance
from `a` to that complement, hence `A` lies in the associated cover member.
Every selection here is from supplied data or a finite family. No choice
principle is needed.

The active connection draft uses exactly this conclusion for a compact real
interval. A uniform mesh of diameter below `delta`, refined by finitely many
specified initial/corner times, is subordinate to the pulled-back frame cover.
The supplier therefore covers the live use without strengthening.

## Disposition

The theorem receives one new bounded no-repair-needed census row. No live
authoring blocker or Phase-2 pair is created. This is a bounded exact-clause
audit, not a transitive certification of all suppliers or consumers.
