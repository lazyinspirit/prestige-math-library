# Final-adjudicator evidence: `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold`

Disposition: `repaired`.

I independently inspected the current false statement and all direct
dependencies, both differential-geometry pages, the batch-15 manifest,
coverage notes, Step-6 reader/refuter evidence and risk routing, the item entry
in both proof-contract copies, both judge rejections, both Alpha
adjudications, and the round-2 repair account.  The item was routed as an
untouched Step-6 refuter target rather than a high/critical proof-risk item, so
no separate `risk_review` field was required.

The Alpha repairs correctly fixed the two rejected claims: positive codimension
is now used in the local embeddedness contradiction, and the displayed curve
is now identified only with the origin leaf.  The resulting proof nevertheless
still asserted that the irrational orbit is dense with the tag `[given]`,
although the Given line did not assume density and none of the three declared
dependencies established it.  Density is the load-bearing fact in the
nonembeddedness contradiction, so the refutation was not yet complete.

I repaired the item by proving all parts of the witness.  Local lifted
coordinates `r=y-alpha*x` show that the constant line distribution is
integrable and hence determines a regular foliation.  Tangent-curve
reachability identifies its origin leaf with the projected line.  The line is
an injective immersion because equality of two projected points would make
both `t-s` and `alpha(t-s)` integers.  For density, the pigeonhole principle
applied to the first `N+1` fractional parts of multiples of `alpha` produces a
nonzero integer `q` and a representative `0<delta<1/N` of `[q alpha]`.  Integer
multiples of `delta` approximate any target circle coordinate to within
`delta`; shifting the curve parameter by the corresponding integer leaves its
first torus coordinate fixed and approximates the second.  Thus the origin
leaf is dense.  A one-dimensional embedded submanifold of a two-manifold is
locally an ambient coordinate line, which cannot be dense in its ambient chart,
giving the required contradiction.

I added only the published or same-page dependencies actually used by that
argument, synchronized the batch-15 manifest dependency list, and mechanically
regenerated this item's citations and derivations in both the batch-15 and
merged proof contracts.  No dependency item's bytes were changed, so no
`owner-prerequisite-repair` licence is required.

Authoritative source verification:

- https://math.mit.edu/classes/18.385/ProblemSets/ProblemSet_2020_06.pdf — the
  official MIT 18.385 problem set states that an irrational linear flow on the
  two-torus has dense trajectories and reduces it to density of the integer
  multiples of an irrational circle rotation.  This is exactly the fact proved
  explicitly in the repaired steps.
- https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20%282021%29.pdf
  — Will Merry's ETH Zurich notes distinguish immersed from embedded
  submanifolds and give the global Frobenius construction of leaves as maximal
  connected integral manifolds.  This supports the foliation/leaf and local
  embedded-slice portions of the repaired witness.

Focused precheck, render, strict batch and merged proof-contract, citation
fidelity, boundary, content-policy, dependency, and whitespace checks passed on
the final bytes before recording.
