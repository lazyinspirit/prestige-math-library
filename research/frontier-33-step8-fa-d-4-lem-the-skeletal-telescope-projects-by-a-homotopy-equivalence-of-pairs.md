# FA terminal evidence — queue d/4

Item: `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs`.
Decision: repaired. Source status: verified.

Read independently: current statement and full proof; all three former direct
dependencies; homology-axioms A/B pages; batch-8 manifest, telescope coverage
and notes conventions; exact proof contract and boundary records; reader-8
review; both Terra rejections; exact Sol adjudication and group-d repair report.
The contract contains no separate risk_review object for this item. I treat
both gluing and limiting continuity as substantive mathematical risks rather
than relying on the earlier reader pass.

Both rejections identify real gaps. An isolated radial collapse of an n-cell
prism fixes its side, so it cannot be glued to an already moving lower-skeleton
homotopy at the same time. Sol's general unrelative SDR plus HEP argument did
not enforce the endpoint and filtered pair constraints of the claimed SDR.
I replaced it with a fully specified construction, retaining the theorem for
every CW pair with the page's weak CW topology. No finite-dimensional or
countability restriction, Whitehead theorem, or homology detection assumption
was introduced.

The repaired proof uses radial projection from (0,-1) in the closed prism
D^n x [0,1]. Its ray multiplier is 2/max(2||x||,u+1), always between 1 and 2.
This puts the endpoint on the side or top, fixes every point already there,
and interpolation stays within the convex prism. Thus one dimension's collapse
glues while the lower skeleton is fixed. For a slab indexed i, collapse dimensions
n>i in descending order during [2^{-(n-i)},2^{-(n-i-1)}]. On any finite skeleton
this is a finite sequence, initially stationary; restrictions from larger
skeleta agree exactly. This is the essential correction to the invalid
simultaneous characteristic-cell argument. All A-cells and their boundaries
stay in A. Endpoint values are in X^i times the slab union the whole top,
and that union is fixed throughout. No relative SDR extension theorem is assumed.

The outer slab sequence uses [1-2^{-i},1-2^{-(i+1)}]. Since inner homotopies
preserve every skeleton, a point of X^d times the ray is in the telescope by
stage d, uniformly on each characteristic prism, and is fixed thereafter.
This proves continuity at the outer limiting time by the CW product weak
topology; the inner sequence's continuity at zero follows from initial
stationarity on finite skeleta. All maps preserve the subpair. Projection
from the ambient product is a pair equivalence and its composite with the
SDR inclusion is exactly p. Empty X, empty A, A=X and zero-dimensional X are
explicitly covered.

Authoritative verification (full relevant sections were read, not snippets):

- https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf — Hatcher, Lemma 2.34,
  printed pp.138–139: the complete telescope deformation, slab sequence,
  eventual stationarity and weak-topology continuity argument.
- https://pi.math.cornell.edu/~hatcher/AT/AT.pdf — Proposition 0.16, printed
  p.15, complete proof: radial disk-prism collapse and descending-dimension
  time intervals. Theorem A.6, printed p.524, complete statement and proof:
  the CW product topology agrees with the ordinary product when one factor
  is locally compact, as are our interval and ray factors.

These sources verify the geometric route and the product qualification.
The explicit multiplier and A-preservation checks above were independently
worked out for this item's upper-face convention.

Changed: the item proof and strategy; removed the unused
`lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts` dependency
and F3; synchronized owning batch-8 manifest deps/strategy/source locator;
rewrote only this item's contract derivations, citation uses and phase anchors.
Remaining dependencies are `def-skeletal-mapping-telescope-of-a-cw-pair` and
`prop-relative-cw-inclusions-are-cofibrations`. The stronger controlled prism
construction is proved inline, not attributed to the bare HEP statement.
No dependency edit or new lemma was necessary.

Validation: adopted precheck's canonical phase numbering 1.1 through 5.1;
rerun focused precheck passed (1/1); strict restricted contract check passed
(1/1, 0 errors, 0 warnings); focused rendercheck passed. No third judgment,
new judge verdict, or pass stamp was created.

Unresolved obligations: none. Next action: record exact final bytes, then
start queue item 5 only after success.
