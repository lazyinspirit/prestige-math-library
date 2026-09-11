# Frontier-22 published bundle local-matrix audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices` | `1577b815bc48266db91b7f5630a9e26ce1d6549fbb44d3603defb5c99e008acd` |
| `def-vector-bundle-map-over-a-smooth-base-map` | `9dbc4f0dc015a22a1fe8455476901c022f6944e4596dc6a1d04e3780a435613c` |
| `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components` | `27522cfe64b1c12524510f2a860a9c4caaad2d9fcfdf31abde6fa9c3cf88bfe8` |
| `prop-local-frames-and-local-trivializations-are-equivalent-data` | `11ac2d7bc9a2de45d15c3ccd5e7fe5d98ea1ea9e7a40954d33fc3f897baab29d` |

All four complete items and their exact chart/component interfaces were read.
Their alias lists are empty or absent. The complete ledger was searched by
every exact ID and by fibrewise-linear map over a base map, smooth local
matrix, frame/trivialization equivalence and smooth local components. None had
a classification row or item-specific defect record; the isolated local-frame
ID occurrence is a supplier mention only.

## Bounded dispositions

The bundle-map definition consistently requires a smooth total-space map over
the smooth base map and fibrewise linear restrictions. The local-matrix
proposition begins more generally with a fibrewise linear set map over a smooth
base map and supplies the criterion that determines whether it is smooth, so
it does not reason circularly from the definition's smoothness clause.

A smooth local frame gives a unique coordinate matrix in any existing bundle
chart. Its entries are smooth because the frame sections are smooth; inversion
is smooth by the adequate published matrix-inversion lemma already audited in
the dual/Hom pass. The pointwise coordinate maps agree uniquely on overlaps,
so they patch to a trivialization. Conversely, a trivialization pulls the
standard basis back to smooth frame sections. No family of charts or frames is
selected.

In a fixed source and target frame, fibrewise linearity forces the unique local
form `(p,v)->(f(p),A(p)v)`. If the entries of `A` are smooth, this map is smooth
by finite Euclidean algebra. Conversely, composing the total-space map with
each constant frame section recovers each column, and the local-component
criterion makes every entry smooth. The same chart calculation proves that a
section is smooth exactly when its finitely many frame components are smooth.
Rank-zero cases are vacuous and remain coherent.

Classification: four new bounded no-repair-needed dispositions. The local
matrix criterion used by the active Hom/connection route is sound and adds no
current Step-5 blocker, Phase-2 supplier or pair.

## Limits

This pass certifies only the four complete targets and the exact finite local-
chart interfaces above. It does not certify every bundle-map consumer or the
separate construction of a new Hom total space. No external source was newly
consulted, no published item was edited, and no independent judgment or
exhaustive discovery claim is made.
