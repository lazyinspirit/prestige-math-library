# Published lower-sphere nullhomotopy audit — 2026-09-11

This is a bounded complete-item and exact-used-interface audit of the finite
simplicial-approximation route to lower-dimensional sphere nullhomotopy. It
does not certify either transitive closure or the separate degree-
classification theorem, and it is not an exhaustive library audit. Published
and draft content was read only.

## Deduplication and dispositions

The complete canonical ledger was searched for the three IDs below, their
empty alias sets, pair-relative simplicial approximation, omitted-simplex and
stereographic-contraction mechanisms, and the exact active consumers. The
lower-sphere theorem appears only in historical scaffold/consumer notes that
predate its publication and expressly do not classify a published item; it has
no classification row. The two other IDs have no prior finding or row. This
transaction reconciles the historical note and adds three new bounded clears,
one row per published ID.

| Published item | SHA-256 | Bounded disposition |
|---|---|---|
| `thm-finite-simplicial-approximation-for-maps-of-pairs` | `fb54947e12c5c6b48edcdc367fc26c9ed2ae81db8fe7ef4c857242c22936bbab` | New bounded clear: finite star choice, subcomplex preservation and pair homotopy are explicit. |
| `lem-straight-line-homotopies-are-continuous` | `4058698fbca53ea0806488fdcd78b2d92d38e7982c7eb2c8cc8230416cad73d8` | New bounded clear: componentwise product/sum continuity and subspace factorization prove the formula. |
| `thm-lower-dimensional-sphere-maps-are-based-nullhomotopic` | `3e53707c4303a287d6673e29e2dc3d1777935685860c0c64d86ed68ad1192398` | New bounded clear: the finite simplicial image omits a point and stereographic contraction fixes the basepoint. |

## Exact proof review

For finite pair maps, a Lebesgue number and sufficiently fine barycentric
subdivision put each source vertex star into a target vertex star. Only a
finite family of target vertices is selected. If a subdivided source simplex
lies in the source subcomplex, its barycenter lies in every vertex star and
maps into the target subcomplex; hence every selected image vertex belongs to
the support of that target-subcomplex point. The simplicial map and its common-
carrier homotopy therefore remain in the target subcomplex. This supplies a
homotopy of pairs without claiming pointwise fixation on a positive-
dimensional subcomplex.

The straight-line lemma proves addition and multiplication first on Euclidean
space, pulls their continuity back along the product projections, assembles
the coordinate formula, and then factors through the convex subspace. Its
domain need not be metric, and convexity is used exactly for the range.

For $0\le k<r$, finite cross-polytope triangulations put the chosen source and
target basepoints at vertices. Apply pair-relative simplicial approximation to
the singleton subcomplexes. Since the target singleton has only the basepoint,
the pair homotopy fixes it pointwise. A simplicial image of dimension at most
$k$ misses the interior barycenter $p$ of an $r$-simplex, and this $p$ is not
the target basepoint vertex. The displayed stereographic maps are inverse
homeomorphisms

$$S^r\setminus\{p\}\cong p^\perp,$$

with $q(b)$ fixed by the affine contraction. Composing and pasting with the
approximation homotopy gives a based nullhomotopy. The same argument handles
$k=0$; no infinite choice is used.

## Current consumers

Two batch-8 drafts use the clear lower-sphere clause directly:

- `ex-hopf-circle-fibration`, SHA-256
  `2e5dce6c620bc59f774b11eb53cce16793247e0fe646cb20fde3388a97a70aae`,
  F3 and proof 2.1 use $\pi_1(S^3)=\pi_2(S^3)=0$.
- `ex-real-projective-space-cover-as-a-discrete-fiber-fibration`, SHA-256
  `823463c40c51e1affb538f87168df1e89b7d8017071f644f50b652ccf6bb36b5`,
  F3 uses path connectedness for $n\ge1$ and simple connectedness for $n\ge2$.
  For path connectedness, the theorem's $k=0$ based nullhomotopy joins any
  selected point to the basepoint.

No active-frontier repair obligation or new pair was found on this exact path.
The separate geometric-degree supplier and all other consumer dependencies
retain their existing audit states.
