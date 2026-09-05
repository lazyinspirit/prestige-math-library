# Final-adjudicator evidence: `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution`

Disposition: `repaired`.

I independently reviewed the proposition, all current direct dependencies, the
differential-geometry A/B pages, the batch-15 manifest and coverage notes, the
Step-6 reader/refuter evidence, the high-risk `risk_review`, both judge
rejections, both Alpha adjudications, the round-2 repair, and the item entries
in both proof-contract copies.

The Alpha's first repair correctly added the local Frobenius input, and the
second correctly narrowed the title to the connected-source and leaf-incidence
hypotheses actually used.  The proof still had an independent contract-level
gap: it inferred that each component of the transverse coordinate `v o F` was
constant without citing the declared zero-differential theorem, and its later
containment and smooth-factorization steps were tagged only `[given]`.  The
batch manifest likewise retained the old overbroad title and pre-repair
dependency list.

I repaired the facts and proof so every load-bearing step is explicit.  Around
each source point, a connected coordinate neighborhood is chosen inside the
preimage of a flat-chart domain.  Tangency gives zero differential for every
transverse component of `v o F`, so the cited constancy theorem puts the local
image in one plaque.  Applying this on the inverse image of a fixed leaf and on
its complement makes that inverse image nonempty and clopen; connectedness of
the source forces the whole image into the leaf.  The unique set factorization
then becomes smooth because the same local argument puts it in one plaque,
which is a coordinate patch for the intrinsic leaf structure constructed by
the maximal-leaf theorem.  Injectivity of the leaf inclusion gives uniqueness.

I removed one unused dependency, synchronized the batch-15 manifest title and
dependency list, and mechanically regenerated this item's citations and
derivations in both the batch and merged proof contracts.  The existing
high-risk record is now accurate: the connectedness boundary is explicitly
spent in the clopen step.  No dependency item was edited, so no
`owner-prerequisite-repair` licence is required.

Authoritative source verification:

- https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20%282021%29.pdf
  — Merry's ETH Zurich notes, Proposition 15.2 and Definition 15.1, establish
  the weakly embedded/initial property: a smooth map whose ambient image lies
  in an integral leaf is smooth as a map to that leaf.  The proof uses local
  Frobenius slices and connected neighborhoods, matching the repaired local
  plaque argument.
- https://math.stanford.edu/~conrad/diffgeomPage/handouts/frobthm.pdf — Keith
  Conrad's official Stanford notes, Theorem 2.3(2), state that every smooth map
  landing set-theoretically in a maximal integral submanifold factors
  continuously and smoothly through it.  This directly confirms the final
  factorization step once the repaired clopen argument proves containment.

Focused precheck, render, strict batch and merged proof-contract, citation
fidelity, boundary, content-policy, dependency, and whitespace checks passed on
the final bytes before recording.
