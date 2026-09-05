# Final-adjudicator evidence: `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds`

Disposition: `repaired`.

I independently inspected the theorem and all direct dependencies, the full
differential-geometry A/B-page context, batch-15 manifest and coverage notes,
Step-6 reader/refuter records, both judge rejections, both Alpha adjudications,
the round-2 repair, and the complete critical-risk proof-contract entry.

The Alpha repairs correctly supplied local Frobenius charts and corrected the
clopen containment argument to use connected components of `i^{-1}(U)`, exactly
as the cited plaque-containment lemma states.  The resulting proof still
declared its plaque atlas a smooth manifold after checking only local charts
and transition maps.  In this library a manifold must also be Hausdorff and
second countable.  That omission is load bearing for the claimed intrinsic
smooth structure.  In addition, the uniqueness step invoked a Euclidean
inverse-function theorem stated only for positive dimension even though the
theorem permits rank `k=0`.

I repaired the construction as follows.  Under the standing `AC_omega`
convention inherited from the library's definition of a smooth distribution,
second countability/Lindelofness gives a countable flat-chart cover by
coordinate boxes.  A fixed plaque meets at most countably many plaques of that
cover: for each cover chart, the components of its inverse image in the plaque
form a countable family, and the local plaque-containment lemma assigns each
component to one plaque.  Countable unions and finite overlap-chain stages then
produce a countable plaque family for the leaf.  A tangent path has locally
constant transverse coordinates; compactness of its parameter interval gives
a finite plaque chain, proving that this countable family covers the whole
reachability class.

The resulting compatible plaque atlas is second countable because it is
countable and its Euclidean patches have countable bases.  Its inclusion into
the Hausdorff ambient manifold is continuous and injective, so ambient
separation gives Hausdorffness.  Local Euclideanness, smooth transitions,
connectedness, the integral tangent condition, and the corrected clopen
factorization are then explicit.  For uniqueness, rank zero is handled as the
singleton leaf; only for `k>=1` is the cited inverse function theorem applied to
the coordinate expression of the alternative integral immersion.

I added the published dependencies used for the countability, topology,
choice, and rank-zero checks; synchronized the batch-15 manifest; regenerated
the citations and derivations in the batch and merged contracts; changed the
zero-rank and countable-choice boundary rows from `not_applicable` to
`checked`; and rewrote the critical-risk note to describe the final proof.  No
dependency item was edited, so no `owner-prerequisite-repair` licence is
required.

Authoritative source verification:

- https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20%282021%29.pdf
  — Merry's ETH Zurich notes, in the proof of the Global Frobenius Theorem,
  choose a countable flat-chart cover, define finite-overlap equivalence of
  slices, establish countability of each slice class, and construct the
  connected immersed leaf.  This directly supports the countability and
  plaque-atlas repair rather than merely the local transition calculation.
- https://math.stanford.edu/~conrad/diffgeomPage/handouts/frobthm.pdf — Keith
  Conrad's official Stanford notes, Theorem 2.3, state existence and uniqueness
  of the maximal integral submanifold, smooth factorization of maps landing in
  it, and containment of connected tangent submanifolds.  This verifies the
  theorem's final scope and the repaired containment/factorization mechanism.

Focused precheck, render, strict batch and merged proof-contract, citation
fidelity, boundary, content-policy, dependency, and whitespace checks passed on
the final bytes before recording.
