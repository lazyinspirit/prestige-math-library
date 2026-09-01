# Final-adjudicator evidence — `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands`

Disposition: `repaired`.

## Material reviewed

I independently read the current statement and proof; every cited dependency;
the preceding compact coordinate-bump construction; the surrounding Whitney
A/B pages; the batch-10 manifest, canonical coverage carrier, notes, proof
contract, boundary worksheet, and Alpha risk review; the Step-6 reader and
refuter records; both frozen judge rejections and exact Alpha adjudications;
the defect-ledger history; and Alpha's two repairs.

The item is now critical risk under the mechanical report. The risk is genuine:
one must simultaneously obtain finite-dimensional point and differential
separation on each compact band, bound the map, and keep supports in disjoint
same-colour neighbourhoods.

## Mathematical basis

The modulo-four part of Alpha's first repair is correct. For
$K_m=\rho^{-1}([m-1,m+2])$, indices in one residue class differ by at least
four. The enlarged intervals
$(m-5/4,m+9/4)$ and $(m+4-5/4,m+4+9/4)$ still have a positive gap, so their
preimages $O_m$ are disjoint. This avoids the overlap that made the original
same-parity statement impossible.

Alpha's second repair correctly moved the construction into these explicit
$O_m$, but it did not define the asserted “coordinate-bump blocks” or prove
that they were smooth, point-separating, and tangent-separating. That is the
core conclusion of the lemma, not a cosmetic detail. It also did not handle an
individual empty band, and its wording chose data for every point before taking
a finite subcover even though that point-indexed family choice was unnecessary.

I repaired the proof as follows.

- For an empty $K_m$, it now takes $Q_m=1$ and $H_m=0$.
- For a nonempty band, it considers all relatively compact coordinate domains
  with closure in $O_m$ and all smooth Urysohn cutoffs that equal one on a
  plateau neighbourhood. Those plateau neighbourhoods cover $K_m$, so
  compactness selects finitely many without first choosing an uncountable
  point-indexed family.
- Each selected chart and cutoff produces the explicit block
  $(\phi,\phi x)$ on the chart and zero outside. Because
  $\operatorname{supp}\phi$ lies inside the chart, the two formulas agree on
  an open overlap and the cited smooth-pasting lemma makes the global block
  smooth.
- If two band points have the same concatenated block vector, a plateau block
  at the first point forces the second point into the same chart with equal
  chart coordinates, hence the points agree. On a plateau, $d\phi=0$ and the
  coordinate part of the block differential is $dx$, so the differential is
  injective at every point of $K_m$.
- The finite block map has compact support and is therefore bounded. A positive
  scalar rescaling gives the required $2^{-m}$ norm bound without changing
  support, injectivity on $K_m$, or differential injectivity there.

This proves all four clauses, including the band endpoint and empty-band cases.
I added only the two local dependencies used by the expanded argument: the
smooth-chart definition and smooth pasting over an open cover.

I regenerated the item entry in both proof-contract copies, changed the empty,
interval-endpoint, and nonempty-choice boundary rows to checked, and replaced
the stale Alpha risk note with a final-adjudicator review of the repaired proof.

## Source verification

Source status: `familiar`. No external verification was needed. Relatively
compact chart shrinking, smooth cutoffs, finite subcovers, zero-extension of a
compactly supported chart expression, and the scalar-plus-coordinate bump map
are standard smooth-manifold constructions. Every load-bearing step is now
written out and tied to an opened local dependency.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, delimiters, displays, and KaTeX.
- Strict batch-10 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-10 citation fidelity: 82 citations over 48 items, no missing quote and
  no widening candidate.
- Required batch-10 risk review: 48 items routed, 0 errors; this item is
  critical risk with a complete final-adjudicator review.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired item and both contract copies: clean.
