# FA terminal evidence — queue d/1

Item: `ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary`.
Decision: accepted-after-review. Source status: familiar.

I independently read the current item, both complete direct dependencies
`thm-general-stokes-theorem` and
`prop-integration-of-top-forms-by-finite-parametrizations`, both integration
A/B pages, its batch-13 manifest entry, coverage conventions, author notes,
proof contract and risk record, both Terra rejection records, the exact Sol
adjudication, and `frontier-33-alpha-step8-d.md`. The original orientation
rejection was valid and Sol corrected it: the disk has the standard orientation,
and AC_omega is explicit as required by the chosen Stokes route.

The terminal rejection is false. In step 1.1 take the open Jordan rectangle
U=(0,1) x (0,2pi), with coordinates ordered (r,t), and
F(r,t)=(r cos t,r sin t). Its image is the open slit punctured disk W,
open also relative to the closed disk. F restricted to U is a diffeomorphism:
r is the positive radius and t is the smooth argument branch on the slit;
its determinant is r>0. The closure of W is the entire closed disk. F extends
continuously to the closed rectangle. At r=0 its Cartesian representative is
smooth; at r=1 a disk boundary chart has smooth ambient coordinate extensions
near the circle, so its composite with F has a smooth Euclidean extension.
The two cut edges and the collapsed edge are parameter boundary only. F2
explicitly does not require boundary injectivity or boundary nonsingularity.
Thus precisely the hypotheses alleged to fail hold on the required open domain.
The pullback is r dr wedge dt, whose iterated integral is pi.

For step 2.1 use (0,2pi) and c(t) on its closure. Its open image is the circle
minus one point; its closure is the whole boundary, its derivative is nonzero,
and it has the counterclockwise orientation induced by outward-first from
dx wedge dy. Its pullback is cos^2(t) dt and integrates to pi. Compactness of
the disk supplies compact support of x dy. Finally mixed partial equality in
the nonempty interior rules out x dy=dh, exactly as step 3.1 says.

These are familiar elementary polar-coordinate, differentiation, and Stokes
hypothesis checks; no unfamiliar or uncertain mathematics required external
verification. No item, dependency, manifest or contract repair is needed.
The existing boundary contract already states that polar degeneracies occur
only on the parameter boundary. No new lemma or prerequisite licence is needed.

Focused validation: item precheck passed (1 checked, 0 failing); strict
batch-13 proof-contract check restricted to this ID passed (1/1, 0 errors,
0 warnings). No judge call or pass stamp was made.

Unresolved mathematical obligations: none. Next action: record this exact
item through the terminal recorder, then begin queue item 2 only after success.
