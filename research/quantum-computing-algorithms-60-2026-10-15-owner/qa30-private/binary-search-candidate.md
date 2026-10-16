# Private proof candidate — finite slack-aware SDP binary search

Use the accepted normalized SDP duality, estimated-polytope and coherent
round-oracle suppliers. OPT denotes their common primal/dual optimum.
Rational inputs/estimates/weights are kept as exact finite rationals;
no unproved rounding rule is needed for the sparse output.

## Threshold parameters and dual margin

For R>0, 0<epsilon<2R, set e=epsilon/8, w=r+1,
L_n=ln(max(2,n)), theta=e/(24Rr),
T>=36w²R²L_n/e² and eta=sqrt(L_n/T).
Then eta<=e/(6wR)<1 and
$$w(2\theta+\eta+\ln(n)/(\eta T))\le we/(12Rr)+e/(3R)\le e/(2R).$$
Thus adding (e/R)e1 to the mean dual weights gives positive semidefinite
slack with reserve at least e/(2R)I and objective <=alpha+e. This proves
the exact finite LOWER certificate using the existing no-failure MMW lemma.
A good-event round EMPTY gives alpha<OPT via the estimated-polytope lemma.
These two implications, not a low-level timeout, define the threshold
oracle's good event. Constructing the fixed trace samplers and their
conditional good probability remains under the separate quantum suppliers.

## Finite binary search and invariant

Initialize lo=-R, hi=R. First call the threshold oracle at R+e.
On its good event it cannot return EMPTY, since R+e>=OPT. Store its
feasible dual vector; its objective B is at most R+2e. Choose
L=ceil(log2(16R/epsilon))+2 and stop as soon as hi-lo<=epsilon/2.
At each of at most L subsequent iterations set alpha=(lo+hi)/2.
On LOWER store that vector and set hi=min(old hi,alpha+e).
On HIGHER set lo=max(old lo,alpha-e). Keep the unchanged endpoint in
each branch. A certified failure/undecided result aborts; on the proved
all-good event it never occurs.

The precise invariant is
$$lo\le\mathrm{OPT}\le hi,\qquad B\le hi+2e,$$
where B is the objective of a stored feasible vector. It holds initially.
On LOWER, OPT<=Bnew<=alpha+e. If hi changes to alpha+e, then Bnew<=hi;
if clamping keeps the old hi, Bnew<=alpha+e<=old hi+e. Thus storing even
an unconditionally replaced LOWER vector preserves B<=hi+2e.
On HIGHER, alpha<OPT, so lo<=OPT; the stored feasible vector and hi
are unchanged. Therefore every finite successful output is dual feasible.

Writing W=hi-lo, either branch gives
$$W_{new}\le W/2+e.$$
Consequently W_j<=2e+2R 2^-j. At j=L this is at most
(epsilon/4)+(epsilon/32)<epsilon/2. While W>epsilon/2=4e, neither update
can be defeated by clamping and Wnew<=W/2+e<3W/4<W, so the original
no-contraction/refinement branch is never reached on the all-good path.
The fixed round cap is therefore enough; no unbounded tolerance loop is
required. At exit,
$$B-\mathrm{OPT}\le(hi-lo)+2e\le3\epsilon/4<\epsilon.$$
The initial certificate remains valid even when every midpoint answer
is HIGHER, so the OPT=R endpoint is covered.

## Probability for adaptive calls

If at every all-good reached history the next complete threshold call is
bad with probability at most delta/(4(L+1)), condition on the first bad
call. Before that call the invariant just proved prevents every refinement
and implies at most L+1 threshold calls. Thus the probability of any first
bad call is at most delta/4. Extra work/refinements on an already bad path
do not add another probability to the same bad event. This is the stopped
form of the accepted predictable-budget union argument and does not assume
independence of adaptive thresholds. Alternatively allocate the threshold
budget across the explicit full refinement cap; that is more conservative
and changes only confidence logarithms.

For each threshold call, allocate its conditional failure budget to the
once-per-round frozen ShiftMin factory and the two robust minima/trace
samplers. Their norm-hybrid errors belong in those guarantees; unmeasured
label branches are not separately union-bounded as classical samples.
A low-level timeout may be classified HIGHER only through the proved
complete round-oracle error event. Otherwise it is a distinct failure whose
probability must be bounded before the final success theorem follows.

## Degenerate error/trace cases

If epsilon>=2R, the exact vector e1 is dual feasible because I-C>=0 and
has objective R<=OPT+epsilon. If R=0 and the primal is nonempty, the trace
constraint forces X=0, so OPT=0 by strong duality; e1 is feasible with
objective zero. No division by R or threshold/Gibbs call is needed.
For n=0, use the empty-matrix duality case with zero optimum; these finite
branches can precede the nonzero-dimensional quantum routine.

No canonical procedures or statements changed by this private proof.
