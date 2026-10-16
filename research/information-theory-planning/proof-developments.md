# Proposed information-theory proof developments

Status: independently repaired local proof developments, 2026-10-17. These
are research-scaffold arguments and interface checks, not accepted production
items. Later named integrations expand the initial concise developments; the
current exact contracts and any remaining mathematical obligations are in
proposed-items.json. Source dossiers provide provenance, not substitute proofs.

## 1. Finite probability, KL, entropy, and Fano (IT01)

Write all sums on positive joint support. For finite probability vectors
`p,q`, if `p_i>0=q_i` for some `i`, then `P` is not absolutely continuous
with respect to `Q` and both the finite KL sum and the published measurable
KL convention equal `+infinity`. Otherwise the function `r(i)=p_i/q_i` on
`q_i>0` and `r(i)=0` on `q_i=0` is an explicit RN representative: for every
subset `E`, `sum_{i in E}r(i)q_i=sum_{i in E}p_i`. Substitution proves the
finite sum/measurable KL bridge without invoking a choice of derivative.
The existing general KL item still carries its own AC/RN precondition when
used outside this finite construction.

For `A=sum_i a_i>0`, `B=sum_i b_i>0`, put `u_i=a_i/A` and `v_i=b_i/B`.
Then

`sum_i a_i ln(a_i/b_i)=A D(u||v)+A ln(A/B) >= A ln(A/B)`.

Equality when A,B>0 requires `u_i=v_i` at every coordinate, including
coordinates with `u_i=0<v_i`; any coordinate with `v_i=0` must have u_i=0
to avoid infinite divergence. The inequality follows from the existing KL
nonnegativity theorem or, before that theorem is available, Jensen applied
to `t ln t` under `v`. Cases
`A=0`, `B=0`, or a positive `a_i` paired with zero `b_i` are handled from
the extended conventions. Equality for probability vectors is exactly
`p=q`. Applying the same inequality to each conditional row proves finite
log-sum and finite KL nonnegativity; equality row-by-row gives conditional
independence, not just a scalar lower bound.

For the finite entropy chain rule, on every positive atom use
`p(x,y|z)=p(x|z)p(y|x,z)`, take logarithms, multiply by the joint mass,
and sum. Zero-mass atoms contribute zero, and all finite entropies are at
most logarithm of their alphabet size, so there is no extended subtraction.
For finite Fano, let `E=1{Mhat != M}` and expand
`H(M|Y)=H(E|Y)+H(M|E,Y)` because `E` is determined by `(M,Y)` when Mhat is
a function of Y; for randomized decoders include their independent seed in
Y. Bound the first term by `h_2(P_e)`. When `E=0`, M is fixed by Y; when
`E=1`, there are at most `m-1` choices. Thus
`H(M|Y)<=h_2(P_e)+P_e ln(m-1)` for `m>=2`; `m=1` is separate and has zero
entropy. The weaker `ln 2+P_e ln m` form follows immediately.

The finite Markov DPI follows from two chain-rule expansions:
`I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Z)+I(X;Y|Z)`. Under `X-Y-Z`, the first
conditional term vanishes by direct factorization; the second is
nonnegative. Equality in the DPI is equivalent to `I(X;Y|Z)=0`, which the
finite KL equality calculation identifies as conditional independence of
X and Y given Z. Fano's minimax packing bound is a different theorem and
does not replace this conditional entropy inequality.

## 2. General KL, kernels, and information (IT02)

For a probability pair `P,Q`, the KL partition lower bound on a finite
measurable partition follows by writing `r=dP/dQ` under `P<<Q` and applying
the extended Jensen inequality to `t ln t` separately on each cell. The
negative part is integrable because `t ln t>=-1/e`; if a cell has zero Q
mass it has zero P mass under AC. When `P` is not AC with respect to Q, a
two-cell partition containing `A` with `Q(A)=0<P(A)` has infinite finite
KL. Conversely, for `P<<Q`, choose finite partitions from level sets of
clipped `ln r`, increasingly resolving `r`; the cell-conditional
expectations of r approximate r in the divergence integral, with the
negative part bounded and positive part handled by monotone truncation.
This proves the supremum over finite partitions. No standard-Borel
assumption is necessary for this KL theorem; a countable generating field
is only needed if one wants a fixed increasing sequence of partitions.

The bounded-test variational formula is

`D(P||Q)=sup_{f bounded measurable}(E_P f - ln E_Q exp(f))`.

For bounded f, define the tilted probability `Q_f=exp(f)Q/Z`, where
`Z=E_Q exp(f)` is finite and positive. If `P<<Q`, then `P<<Q_f`; expanding
`D(P||Q_f)>=0` gives the upper bound without subtracting infinite terms.
If `P` is not AC, take `f=t 1_A` on a Q-null, P-positive set and let t
increase. If `P<<Q` with density r, take `f_n=clip(ln r,-n,n)` and use
`exp(f_n)<=r+1`, dominated convergence under Q, and convergence of the
positive and negative parts under P. A bounded maximizer is not asserted;
for example, the finite law `P=(1,0), Q=(1/2,1/2)` approaches its divergence
only as the test on the P-null point tends to `-infinity`.

For finite X and arbitrary measurable Y, each conditional expectation
`q_x=E[1_{X=x}|sigma(Y)]` is an a.e. class. Choose measurable
representatives; the finitely many `q_x` sum to one a.s. and take values in
`[0,1]`. The entropy integrand is measurable and bounded by `ln|X|`, so
`H(X|Y)=E[-sum_x q_x ln q_x]` is representative independent and finite.
Expanding the finite conditional KL and integrating yields
`I(X;Y)=H(X)-H(X|Y)=E D(P_{X|Y}||P_X)` without needing a regular conditional
law for Y.

For standard Borel variables, a regular conditional kernel is measurable
in its conditioning variable. To construct the conditional-product law,
first define integrals for rectangles by iterated kernels. Rectangle
indicator integrals are measurable; closure under nonnegative simple
functions and monotone convergence proves measurability for every
nonnegative product-measurable integrand. The resulting set function is
countably additive by monotone convergence and has total mass one. If a
kernel version changes on a `P_Z`-null set, integrating against `P_Z`
does not change the joint law. This proves the existence and version
independence of the same-law reference
`P_Z P_{X|Z}P_{Y|Z}` used in CMI. It does not make a separately supplied
reference kernel canonical on sets that are null for its own marginal but
charged by a different `P_Y`.

Conditional RN versions must be jointly measurable. For kernels K,L on a
standard-Borel X with conditioning law mu(dy), put
`R_y=(K_y+L_y)/2`, `M(dy,dx)=mu(dy)R_y(dx)`, and
`M_K=mu K, M_L=mu L`. Joint RN derivatives f=dM_K/dM and g=dM_L/dM have
jointly measurable representatives. Choose a countable determining
pi-system `{B_j}` for X. For each j and every measurable A in Y,
`int_A K_y(B_j)mu(dy)=int_A int_{B_j} f(y,x)R_y(dx)mu(dy)`; hence the
two integrands agree mu-a.e. Intersect the countably many full-measure sets
and extend from the pi-system to all Borel sets, proving
`K_y(dx)=f(y,x)R_y(dx)` for a.e. y. Repeat for L and g. If K_y<<L_y
mu-a.e., f=0 where g=0 off a common null set; f/g on {g>0} is a jointly
measurable conditional density. This is the standard-Borel step needed to
factor the joint RN derivative in the following chain rule.

Conditional reference-KL chain rule. Let standard-Borel joint laws be
`P_{XY}=P_Y P_{X|Y}` and `Q_{XY}=Q_Y Q_{X|Y}`, with `P_Y<<Q_Y`.
If `P_{X|Y=y}<<Q_{X|Y=y}` for `P_Y`-a.e. y, their RN derivatives factor
as `a(y)b(x,y)`, where `a=dP_Y/dQ_Y` and b is the conditional derivative.
Integrating `ln a+ln b` under P gives

`D(P_XY||Q_XY)=D(P_Y||Q_Y)+integral D(P_{X|Y=y}||Q_{X|Y=y}) P_Y(dy)`.

Each term is nonnegative. The negative part of `ln a` under P_Y is bounded
by the integral of `-a ln a` under Q_Y, at most `1/e`; for each y the
negative part of `ln b` under P_{X|Y=y}` is bounded in the same way, and
integrating over P_Y preserves the bound. Therefore the expectation of the
sum has no `infinity-infinity` ambiguity. If conditional AC fails on a
positive-P_Y set, the joint law is not absolutely continuous with respect
to its reference and both KL values are infinite. If `P_Y` is not dominated
by `Q_Y`, the joint law is not absolutely continuous on a marginal null
set, the marginal KL is infinite, and so is the joint KL. The assumed
`P_Y<<Q_Y` also ensures that Q-kernel versions are P_Y-a.e. invariant.

For general KL under a measurable map T, pull a finite output partition
back through T in the partition supremum formula. This gives deterministic
data processing. For a Markov kernel K between standard Borel spaces,
form `P(dx)K(dy|x)` and `Q(dx)K(dy|x)`. If `P<<Q`, their joint RN derivative
is `dP/dQ(x)`, so the joint divergence equals `D(P||Q)`; if not, the joint
law is not absolutely continuous and its KL is infinite. Project to y and
apply deterministic data processing. This proves
kernel DPI with the same kernel applied under both laws.

The mutual-information chain rule is obtained by applying the conditional
KL chain identity twice. Disintegrate `P_XYZ` over Z. For each z, the
divergence of `P_{XY|z}` from `P_X tensor P_{Y|z}` splits into
`D(P_{X|z}||P_X)` plus the divergence from
`P_{X|z} tensor P_{Y|z}`. Integrate over `P_Z`; the first term is
`I(X;Z)`, the second is `I(X;Y|Z)`. The preceding negative-part bounds
justify the chain identity even when a term is infinite. Applying maps to
X and Y but leaving Z unchanged sends both the joint and the conditional
product reference through the same deterministic kernel, proving
`I(f(X);g(Y)|Z)<=I(X;Y|Z)`. No such conclusion follows from replacing Z by
a coarser r(Z); the finite witness X=Y=Z a fair bit and r(Z) constant gives
CMI values 0 and `ln 2`.

General law entropy is `I(X;X)`. On standard Borel X, finite measurable
partitions correspond to finite quantizers. The KL partition formula
therefore gives `H(X)=sup_q H(q(X))`. If `P_X` is nonatomic and the
diagonal is measurable (in particular, on a standard Borel space),
`P_XX` assigns diagonal mass one while `P_X tensor P_X` assigns it mass
`integral P_X({x})P_X(dx)=0`; thus H(X)=infinity. Do not generalize this
diagonal proof to arbitrary measurable spaces: singleton-zero laws need
not be nonatomic, and diagonals need not be measurable.

The repository already publishes `thm-pinsker`, the sharp arbitrary-space
event-supremum bound `TV(P,Q)<=sqrt(D(P||Q)/2)` for nats under the item's AC
contract. Reuse it. The proof is compatible with the IT KL partition lemma:
for every event E, partition lower-bounds KL by Bernoulli KL, and
`d_Ber(p||q)>=2(p-q)^2` follows since the second derivative of
`d_Ber(p||q)-2(p-q)^2` in p is `1/[p(1-p)]-4>=0` with value and derivative
zero at p=q. This local sketch is explanatory, not a duplicate proposal.

For finite f-divergence, extend the perspective
`phi(a,b)=b f(a/b)` to axes by
`phi(a,0)=a f'(infinity)` and `phi(0,b)=b f(0)`, with the explicit
zero-mass/infinite-slope convention in the definition. For a stochastic
matrix K, output masses are `p'_y=sum_x p_xK_xy` and
`q'_y=sum_xq_xK_xy`. Perspective convexity and positive homogeneity give
`phi(p'_y,q'_y)<=sum_x phi(p_xK_xy,q_xK_xy)=sum_x K_xy phi(p_x,q_x)`.
Summing y and using `sum_y K_xy=1` proves finite f-divergence data
processing, including support loss by the recession-limit extension.

For finite Renyi divergence and alpha not 1, use
`D_alpha=(alpha-1)^(-1)ln S_alpha`, where
`S_alpha=sum_{i:p_iq_i>0}p_i^alpha q_i^(1-alpha)`; additionally p_i>0=q_i
contributes +infinity to S for alpha>1 and zero for alpha<1. At alpha=0
define `D_0=-ln q(supp p)`; at alpha=infinity define
`D_inf=ln max_{p_i>0}p_i/q_i`, with p_i/0=+infinity. When p<<q, rewrite
each positive-support term as
`p_i exp[(alpha-1)ln(p_i/q_i)]` and differentiate the finite log-sum at
alpha=1 to obtain KL. If p is not AC, the alpha>1 sum is infinite; from
below, S_alpha tends to `sum_{i:q_i>0}p_i<1`, so division of its negative log by
alpha-1 also tends to +infinity. This handles the extended support limit
without an infinity-minus-infinity expansion.

For beta testing, the acceptance convention is
`beta_alpha(P,Q)=inf{E_Q T:0<=T<=1,E_P T>=alpha}`. On a finite alphabet,
order atoms by p_i/q_i and fill the highest ratios first; a fractional last
atom achieves any prescribed alpha and minimizes Q-mass. At alpha=0 the
zero test gives beta=0; at alpha=1 the test must accept P-almost surely,
so beta=Q(supp P). For general laws use P+Q as a common dominator and give
the likelihood ratio extended values on singular components.

The likelihood-ratio testing region has a direct split proof. For any test
T, `alpha=E_P T`, `beta=E_Q T`, and `ell=ln(dP/dQ)`, split E_P T on
`{ell>ln gamma}` and its complement. On the complement dP<=gamma dQ, so
`alpha<=P{ell>ln gamma}+gamma beta`. Swap P,Q and gamma with gamma^-1
for the reverse-tail inequality. This includes singular mass through
ell=+infinity on a P-singular component and -infinity on a Q-singular
component.

For finite IID Stein, suppose P<<Q. The log-likelihood sum i_n/n
converges to D under P. The threshold test
`T_n=1{i_n>=n(D-delta)}` has P-acceptance tending to one and Q-acceptance
at most exp[-n(D-delta)]. Conversely every test with P-acceptance at least
alpha satisfies
`E_{Q^n}T_n>=exp[-n(D+delta)](alpha-P^n{i_n>n(D+delta)})`; on the
complementary likelihood event dQ^n is at least exp[-n(D+delta)]dP^n.
WLLN gives exponent at most D+delta. If P charges a Q-null set, accept
whenever any sample lands there; P-acceptance tends to one and Q-acceptance
is zero, giving infinite exponent. Let delta decrease to zero. Finite
support guarantees the log-likelihood WLLN on the P-support.

## 3. Finite coding, IID AEP, and stationary sources (IT03–IT05)

For a finite set of positive integer code lengths, the binary tree has
`2^L` leaves at depth L. A word of length `l_i` occupies exactly
`2^{L-l_i}` descendants. If sum `2^{-l_i}<=1`, a deterministic canonical
allocation by nondecreasing lengths chooses a disjoint interval of that
dyadic size for each word; the dyadic intervals are prefix-disjoint, giving
a prefix code. The root library's binary Kraft supplier provides an
effective allocation interface, but McMillan's necessity for a merely
uniquely decodable code is separate. For necessity, concatenate k codewords.
UD makes the `|A|^k` concatenations distinct. If `a_j` are the numbers of
those concatenations of length j, then `a_j<=2^j`, and
`(sum_i 2^{-l_i})^k=sum_j a_j 2^{-j}`. There are at most
`k(l_max-l_min)+1` possible lengths, so the right side is at most this
linear quantity. Taking k-th roots and k to infinity yields Kraft–McMillan.

For any UD code and positive pmf p, let K=sum_i 2^{-l_i}<=1 and
q_i=2^{-l_i}/K. The nonnegative finite divergence
`D_2(p||q)=-H_2(p)+L(C,p)+log_2 K` implies `L>=H_2(p)`. Shannon lengths
`l_i=ceil(-log_2 p_i)` obey Kraft and give `L<H_2(p)+1` for support size
at least two. The singleton case is one bit under the chosen nonempty
codeword convention. Huffman's merge procedure terminates after exactly
`|A|-1` merges. For positive support size m>=2, prune unused leaves and contract unary nodes of any finite prefix tree without increasing cost. Every full tree has exactly 2m-1 vertices, so there are finitely many ordered shapes and labelings and an optimal full tree exists. In such a tree two deepest leaves are siblings; exchange the two smallest probabilities into those leaves
without increasing weighted path length, contract them to their sum, and
apply induction. Since Kraft gives a prefix tree for every feasible length
vector, optimality extends from prefix trees to all UD binary codes.

For finite IID X, define `Y_i=-ln p(X_i)` on the positive support. Finite
support makes `Y_i` bounded; WLLN gives `n^{-1}sum_iY_i -> H(X)` in
probability. For a fixed tolerance delta, the information-typical set has
probability tending to one; each member has probability between
`exp[-n(H+delta)]` and `exp[-n(H-delta)]`. Summing these inequalities gives
the matching exponential cardinality bounds. A fixed-length encoder sends
distinct indices for typical words and one error/default index otherwise,
so rate tends to H with vanishing block error. Conversely, a code with
fewer than `exp[n(H-2 delta)]` codewords can cover at most that many typical
words, each of probability at most `exp[-n(H-delta)]`; their total
probability is at most `exp(-n delta)`. Adding the vanishing atypical
probability shows that correct decoding tends to zero at any rate below H.
This theorem is
finite-alphabet IID and fixed-length vanishing error; it is distinct from
prefix coding, variable-rate expected length, and stationary SMB.

For a stationary finite-alphabet process, block entropy is subadditive:
`H_{m+n}<=H_m+H_n` by the entropy chain rule and stationarity. Fekete's
subadditive lemma yields `h=lim H_n/n=inf H_n/n`. The reverse-past
conditional entropy sequence decreases to h, by telescoping block entropy
and Cesàro averaging. For SMB, define finite-past conditional probabilities
`p_k(a)=P(X_0=a|X_{-k}^{-1})` and `g_k=-ln p_k(X_0)`. Conditional
expectations form a martingale; for each symbol, Levy upward convergence
gives `p_k(a)->p_infinity(a)` almost surely. The first-hitting estimate
`P(sup_n -ln P(X_0|X_{-n}^{-1})>t)<=|A|e^{-t}` follows by splitting
according to the first n at which the conditional probability falls below
e^{-t}; summing the disjoint first-hit events and conditional probabilities
gives the bound. This supplies an integrable dominating tail and hence the
needed convergence of conditional log probabilities.

To pass from conditional log probabilities to the sample average of
`g_k` along the shift, decompose
`-ln P(X_1^n)=sum_{i=1}^n -ln P(X_i|X_1^{i-1})`. For a fixed N, all but
the first N terms are shifts of g_N plus a triangular difference. The
conditional-past error after N is controlled by
`h_N=sup_{k>=N}|g_k-g_infinity|`; h_N decreases to zero in L1 by the
first-hitting domination. Apply Birkhoff to g_N and h_N, first let n grow,
then N grow. This yields an invariant random limit; it is constant h on
ergodic components and equals h for an ergodic source. Finite-alphabet
uniform integrability upgrades almost-sure convergence to L1. For an
explicit uniform-integrability bound, if `Z_n=-n^(-1)ln P(X^n)`, then
`P(Z_n>t)<=|A|^n exp(-nt)=exp[-n(t-ln|A|)]`; for t>ln|A| this is at most
`exp[-(t-ln|A|)]`, uniformly in n, whose tail integral tends to zero.

The corrected Gray block-counting route gives a second finite-alphabet
proof and makes the text's corrections reproducible. First, for any
finite-alphabet process and fixed prefix length k, let
`r_n=m(X_1^k,X_{k+1}^n)/(m(X_1^k)m(X_{k+1}^n))` on positive support.
Since `r_n<=1/m(X_1^k)`, its positive log is bounded by a finite
prefix-dependent constant. Also
`m{r_n<exp(-n epsilon)}<=exp(-n epsilon)`: on that event each joint mass
is at most exp(-n epsilon) times the product marginal mass, and the latter
sums to at most one. Borel–Cantelli therefore gives `n^(-1)ln r_n->0`
almost surely. Since
`m(X_1^n)=m(X_{k+1}^n)m(X_1^k|X_{k+1}^n)`, the first k symbols contribute
o(n) to block self-information. In particular `liminf s_n(x)` is shift
invariant; stationarity and ergodicity make it a finite constant h.
Fix epsilon>0 and choose
0<delta<1/2 such that `delta ln|A|<epsilon` and `h_2(delta)<epsilon`.
Define n(x) as the first length ell>=M with `s_ell(x)<=h+epsilon`, which
is finite a.s. Choose `M>=3/delta`; then choose N so
`m{n(x)>=N}<=delta/6`. Define a bad length-N prefix by the absence of a
good block at every length `M<=ell<N`. Parse a long word at positions
k<L-N: use its first good block when `M<=n(T^k x)<N`, otherwise mark one
symbol as a gap; after every good block force one separator gap. The final
N symbols are boundary gaps. For L>=3N/delta, type-1 separator gaps,
type-2 bad-test gaps, and type-3 boundary gaps each occupy at most
delta L/3: the first by M>=3/delta, the second by Birkhoff and the
`delta/6` tail choice, the last by the N-symbol boundary. Thus at most
delta L gaps occur. The gap mask has at most exp[L h_2(delta)] choices,
gap symbols at most |A| each, and a good block of length ell has at most
exp[ell(h+epsilon)] possible words because each has probability at least
exp[-ell(h+epsilon)]. The forced separator makes non-gap runs determine
the block parsing. Hence the parsed set has size at most
exp[L(h+3epsilon)]. Words in that set with sample entropy at least
h+5epsilon have total probability at most exp[-2epsilon L]; Borel–Cantelli
and eventual membership of almost every path in the parsed set give
limsup s_L<=h+5epsilon. The definition of h gives the reverse liminf;
let epsilon decrease to zero.

The source's printed corrected chapter still has margin inconsistencies;
the local choices above repair them: use M>=3/delta (not delta/3), set
the bad-prefix tests to M<=ell<N, accept only those good lengths, test
starts k<L-N, and strengthen the tail probability from delta/2 to
delta/6 so the type-2 gap frequency is at most delta/3. These are required
for the counting bounds just given. For one-sided stationary sources, use
the published standard-Borel Kolmogorov extension to construct the
two-sided stationary law with the same nonnegative marginal; prove
ergodicity inheritance before applying the two-sided theorem.

### Complete local stationary-component and AMS development

## 1. AMS, stationary mean, and asymptotic domination

Let `(Ω,𝔽)` be a measurable space, `T:Ω→Ω` measurable, and `m` a probability measure. Write

`mT^(−j)(F) := m(T^(−j)F)` and `m_N := N^(−1) Σ_(j=0)^(N−1) mT^(−j)`.

For this note, an **AMS law with stationary mean** consists of `m` together with a probability measure `m̄` such that `m_N(F)→m̄(F)` for every `F∈𝔽`. The setwise-limit version that assumes only existence of all scalar limits is equivalent by Gray EIT Theorem 1.7.1: its countable-additivity step uses Vitali–Hahn–Saks (Gray Probability Lemma 6.2.2). That theorem is recorded as a remaining local supplier obligation below; this supplement does not pretend its proof is local. Once `m̄` is a probability, stationarity follows by shifting the Cesàro sum, since

`m_N(T^(−1)F)−m_N(F) = N^(−1)(m(T^(−N)F)−m(F)) → 0`.

If `T^(−1)F=F`, every term in the Cesàro mean is `m(F)`, so `m̄(F)=m(F)`. Thus the stationary-mean definition used here yields the exact identities needed below without silently treating a merely finitely additive setwise limit as a probability measure.

For a stationary probability `η`, Gray calls `η` an **asymptotic dominator** of `m` when

`η(F)=0  ⇒  m(T^(−n)F)→0`.

This is weaker than ordinary absolute continuity `m≪η`, which would imply `m(F)=0` at time zero. Gray's Corollary 6.3.2 proves that an AMS `m` is asymptotically dominated by its stationary mean `m̄`.

**Proof of Corollary 6.3.2.** Fix `F` with `m̄(F)=0` and put `G=limsup_n T^(−n)F=∩_N∪_(n≥N)T^(−n)F`. It is invariant because shifting the limsup removes only the first term. Stationarity of `m̄` gives `m̄(T^(−n)F)=m̄(F)=0`; hence every tail union has `m̄` measure zero and `m̄(G)=0`. Since `G` is invariant, AMS gives `m(G)=m̄(G)=0`. Finally, bounded reverse Fatou applied to `1_(T^(−n)F)` yields

`limsup_n m(T^(−n)F) ≤ ∫ limsup_n 1_(T^(−n)F) dm = m(G)=0`.

Thus `m(T^(−n)F)→0`. This proof uses only countable unions/intersections, stationarity of `m̄`, equality on invariant events, and Fatou; it does not claim `m≪m̄`.

If `T` is a bimeasurable bijection, asymptotic domination by a stationary `η` does imply `m≪η`: for `η(F)=0`, the full orbit saturation `G=∪_(j∈ℤ)T^jF` is measurable, invariant and `η`-null; asymptotic domination gives `m(T^(−n)G)→0`, while invariance gives `m(T^(−n)G)=m(G)`. Therefore `m(F)≤m(G)=0`. In the noninvertible case this implication fails. On the one-sided binary shift, let `x=(1,0,0,…)`, `m=δ_x`, and `T` be the left shift. For every measurable `F`, `m(T^(−n)F)=1_F(T^n x)` is eventually `1_F(0^∞)`, so `m` is AMS with stationary mean `δ_(0^∞)`. Yet `m({x})=1` and `δ_(0^∞)({x})=0`. This is a concrete case where asymptotic domination holds and ordinary AC fails.

### Tail domination used by the AMS SMB transfer

For a one-sided process, let `𝔽_n=σ(X_n,X_(n+1),…)` and `𝔽_∞=∩_n 𝔽_n`. Gray's Corollary 6.3.3 says that if stationary `η` asymptotically dominates `m`, then `F∈𝔽_∞` and `η(F)=0` imply `m(F)=0`. This is the exact transfer needed in the proof of EIT Lemma 3.4.2; the weaker statement “`η`-almost surely” cannot be transferred for an arbitrary event.

Here is the source's full proof interface. For each `n`, Lebesgue-decompose `mT^(−n)=f_n η+s_n`, with `s_n` concentrated on an `η`-null set `B_n`. The countable union `B=∪_n B_n` is `η`-null, so asymptotic domination gives `m(T^(−n)B)→0`. Given tail `F`, choose `F_n∈𝔽` with `F=T^(−n)F_n`. Stationarity gives `η(F_n)=η(F)=0`, hence `∫_(F_n) f_n dη=0`. Therefore

`m(F)=mT^(−n)(F_n)=s_n(F_n)≤mT^(−n)(B)=m(T^(−n)B)→0`.

The construction uses Lebesgue decomposition for finite measures and stationarity; no global `m≪η` assumption is available or needed. Gray Probability Corollary 6.3.4 further characterizes asymptotic domination by either of two null-set tests when `η` is stationary: domination of invariant `η`-null events or domination of tail `η`-null events. The equality of these interfaces is useful for a separate proof, but the SMB transfer specifically uses the tail-event clause.

## 2. Measurable ergodic kernel, entropy-rate affinity, and stationary nonergodic SMB

Let `𝒜` be a finite nonempty alphabet, `Ω=𝒜^{ℕ₀}` with its product Borel σ-algebra, `T` the one-sided left shift, and `m` a stationary probability. Define

`𝓘={B∈𝓑(Ω):T^(−1)B=B}`

to be the strict-invariant σ-algebra. Assume AC wherever the published regular-conditional-distribution suppliers below require it. The conditioning σ-algebra `𝓘` need not be countably generated or complete. All logarithms in the entropy and SMB statements below are natural; `0 ln 0=0` and `−ln 0=+∞`.

### Conditional kernel and ergodic component construction

Apply published `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets` to the identity random element `Id:(Ω,𝓑(Ω),m)→Ω`, whose target is standard Borel, conditioned on the arbitrary sub-σ-algebra `𝓘`. It supplies an everywhere probability kernel `K(ω,·)` such that `ω↦K(ω,B)` is `𝓘`-measurable and

`∫_E K(ω,B)m(dω)=m(E∩B)` for every `E∈𝓘` and Borel `B`.

Thus all sections are probability measures, including exceptional points; there is no requirement that `𝓘` itself be countably generated. Fix the countable algebra `𝓒` of finite-coordinate cylinders, which is a π-system generating `𝓑(Ω)` and determines probability measures.

For `A∈𝓒`, let `A_N1_A(ω)=N^(−1)Σ_(j=0)^(N−1)1_A(T^jω)` and let `C_A` be the set where these averages converge. The identity

`A_N1_A(Tω)=((N+1)A_(N+1)1_A(ω)−1_A(ω))/N`

and its rearrangement show that convergence at `ω` is equivalent to convergence at `Tω`; hence `T^(−1)C_A=C_A`. Define `g_A` as the limit on `C_A` and as zero off it. The same identity gives `g_A(Tω)=g_A(ω)` everywhere, so `g_A` is strictly invariant and `𝓘`-measurable. Published `thm-birkhoff-ergodic-theorem` gives `m(C_A)=1`, and `thm-birkhoff-limit-identification-on-finite-measure-spaces` identifies `g_A` with `E_m[1_A|𝓘]` up to `m`-null sets. In particular, `K(ω,A)=g_A(ω)` almost surely.

There is one common full-measure set on which the last identity holds for all `A∈𝓒`, since `𝓒` is countable. Apply published `thm-conditional-integration-through-a-regular-conditional-law` to `Id` with the nonnegative bounded functions `g_A` and `g_A²`. Since both are `𝓘`-measurable, their conditional expectations are themselves. Consequently, for every `A∈𝓒`, outside one common null set,

`∫g_A(y)K(ω,dy)=g_A(ω)` and `∫g_A(y)^2K(ω,dy)=g_A(ω)^2`.

Expanding the square gives `∫(g_A(y)−g_A(ω))²K(ω,dy)=0`. Thus `K(ω,·)` gives probability one to `g_A(y)=g_A(ω)` simultaneously for all `A∈𝓒`.

Each component is stationary. For `E∈𝓘`, stationarity of `m` and strict invariance give

`m(E∩T^(−1)A)=m(T^(−1)(E∩A))=m(E∩A)`.

Therefore `E_m[1_(T^(−1)A)|𝓘]=E_m[1_A|𝓘]`, so `K(ω,T^(−1)A)=K(ω,A)` almost surely for each `A∈𝓒`. Intersecting these countably many full sets and using π-λ measure determination proves `K(ω,T^(−1)·)=K(ω,·)` for `m`-almost every `ω`.

Let `C_* = ∩_(A∈𝓒) C_A`. It is measurable and `m(C_*)=1`; the disintegration identity gives `K(ω,C_*)=1` for almost every `ω`. On the common full set above, `K(ω,·)`-almost every `y` therefore satisfies, for every `A∈𝓒`,

`N^(−1)Σ_(j=0)^(N−1)1_A(T^j y) → g_A(y)=g_A(ω)`.

This implies ergodicity. First, for any probability `ρ` on `Ω`, finite `𝓒`-simple functions are dense in `L¹(ρ)`: the events whose indicators are in their `L¹`-closure form a λ-system containing the π-system `𝓒` (complements use `1−1_B`; disjoint countable unions follow by truncating the union and using that the probability of the omitted tail tends to zero). Dynkin's π-λ theorem gives all Borel events, and ordinary simple-function approximation gives all of `L¹(ρ)`. Now fix one of the stationary components `ρ=K(ω,·)` above and a `ρ`-invariant event `B`. If invariance is only modulo `ρ`-null sets, replace `B` by a strict representative using published `lem-mod-null-invariant-sets-have-strictly-invariant-representatives`. Choose `𝓒`-simple `f` close to `1_B` in `L¹(ρ)`. Its time averages converge `ρ`-almost surely and, by bounded convergence, in `L¹(ρ)` to a constant `c_f`, because averages of each cylinder indicator converge to the constant `g_A(ω)`. The averaging operators are `L¹` contractions under the stationary law `ρ`, and the averages of `1_B` equal `1_B`. Hence `||1_B−c_f||_1≤||1_B−f||_1`, and `|ρ(B)−c_f|≤||1_B−c_f||_1`. Letting `f` approximate `1_B` proves `||1_B−ρ(B)||_1≤2||1_B−f||_1→0`; thus `ρ(B)∈{0,1}`.

For a concrete measurable component label, enumerate `𝓒={A_i:i≥1}` and put `ψ(ω)=(g_(A_i)(ω))_(i≥1)∈[0,1]^ℕ`. This map is measurable and strictly invariant. The σ-algebra generated by `ψ` equals `𝓘` modulo `m`: the countable evaluations `K(ω,A_i)` generate all evaluations `K(ω,B)`, because the class of `B` for which the latter is measurable in `σ(K(·,A_i))` is a λ-system containing `𝓒`; and for `B∈𝓘`, the RCD identity gives `K(ω,B)=1_B(ω)` almost surely. Since `K(ω,A_i)=g_(A_i)(ω)` almost surely for every `i`, `σ(ψ)=𝓘` modulo `m` as claimed. Quantizing the first `j` coordinates of `ψ` into dyadic intervals of length `2^(−j)` gives increasing finite strictly invariant partitions `Z_j` generating `𝓘` modulo `m`.

The joint law of `(Id,ψ)` is on standard-Borel spaces. Published `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` supplies a jointly measurable probability kernel `m_λ` for the conditional law of `Id` given `ψ=λ`, with `ν=m∘ψ^(−1)`. Since `σ(ψ)=𝓘` modulo `m`, uniqueness of conditional laws and the countable determining algebra give `m_(ψ(ω))=K(ω,·)` as measures for `m`-almost every `ω`; in particular `m_λ(A_i)=λ_i` for all `i` on one `ν`-full set. Also `ψ_#m_λ=δ_λ` for almost every `λ`, by the conditional-law identity for the label and a countable determining algebra of `[0,1]^ℕ`. Disintegration gives `m_λ(C_*)=1` almost surely. Stationarity is a countable cylinder-evaluation condition. The measurable conditions `ψ_#m_λ=δ_λ`, `m_λ(C_*)=1`, and `m_λ(A_i)=λ_i` then imply all cylinder averages are constant `m_λ`-almost surely; the constant-cylinder-average criterion above proves ergodicity. Thus `m=∫m_λν(dλ)`, and `m_λ` is stationary and ergodic for `ν`-almost every `λ`. This supplies the jointly measurable component kernel and fiber property without assuming an ergodic-decomposition theorem as a black box.

### Entropy-rate affinity proved from finite invariant partitions

Write `h(ρ)=lim_n n^(−1)H_ρ(X_0^(n−1))` for any stationary law `ρ` on this finite-alphabet path space. Explicitly, `a_k=H_ρ(X_k|X_0^(k−1))` decreases with `k` by conditioning reduction and stationarity, while the chain rule gives `H_ρ(X_0^(n−1))=H_ρ(X_0)+Σ_(k=1)^(n−1)a_k`; hence the normalized block entropies converge to `lim_k a_k`, and `0≤h(ρ)≤ln|𝒜|`. First take any finite strictly invariant partition `Z` with positive cell probabilities `p_z`, and let `m_z=m(·|Z=z)`. Each `m_z` is stationary because `m_z(T^(−1)B)=m(T^(−1)(B∩{Z=z}))/p_z=m(B∩{Z=z})/p_z` for every Borel `B`. The entropy chain rule gives

`0≤H_m(X_0^(n−1))−Σ_z p_z H_(m_z)(X_0^(n−1))=I_m(X_0^(n−1);Z)≤H(Z)`.

After division by `n` and passage to the limit, `h(m)=Σ_z p_z h(m_z)`. For every fixed `k≥1`, stationarity and conditioning reduction imply `h(m_z)≤H_(m_z)(X_k|X_0^(k−1))`; hence

`h(m)≤H_m(X_k|X_0^(k−1),Z)`.

Apply this to the increasing finite invariant partitions `Z_j` above. For fixed `k`, let `G_j=σ(X_0^(k−1),Z_j)` and `G=σ(X_0^(k−1))∨𝓘`. The finite-alphabet conditional probabilities `q_(j,a)=E_m[1_{X_k=a}|G_j]` converge in `L¹(m)` to `q_(a)=E_m[1_{X_k=a}|G]`: approximate each bounded `G`-measurable `q_a` by a `G_(j₀)`-measurable simple function, then for `j≥j₀` use the tower property and `L¹` contraction to obtain `||q_(j,a)−q_a||_1≤2||q_a−f||_1`. The required simple-function density follows from the same λ-system argument for the increasing finite algebras `G_j`. Entropy is uniformly continuous and bounded on the finite probability simplex, so

`H_m(X_k|X_0^(k−1),Z_j) → H_m(X_k|X_0^(k−1),𝓘) = ∫ H_(m_λ)(X_k|X_0^(k−1))ν(dλ)`.

The last identity is the finite conditional-entropy formula applied to the conditional kernel `m_λ`. Letting `j→∞` in the preceding inequality and then `k→∞`, the component conditional entropies decrease to `h(m_λ)` and are bounded by `ln|𝒜|`; dominated convergence proves `h(m)≤∫h(m_λ)ν(dλ)`. Conversely, finite-block entropy concavity and disintegration give `H_m(X_0^(n−1))≥∫H_(m_λ)(X_0^(n−1))ν(dλ)`. Divide by `n` and use bounded convergence to obtain `h(m)≥∫h(m_λ)ν(dλ)`. Therefore

`h(m)=∫h(m_λ)ν(dλ)`.

This is the load-bearing entropy-rate affinity used below. It is proved here; Gray Probability Theorem 2.4.1's external semicontinuous-affine-functional citation is not treated as a local proof.

### Stationary nonergodic mixture/component SMB

For `a∈𝒜^n`, write `m_n(a)=m(X_0^(n−1)=a)` and `m_(λ,n)(a)=m_λ(X_0^(n−1)=a)`. The component entropy rate

`h_λ := lim_n n^(−1) H_(m_λ)(X_0^(n−1))`

exists, lies in `[0,ln|𝒜|]`, and is measurable in `λ` because each finite-block entropy is a measurable function of the kernel probabilities and the normalized limit is an infimum. The stationary ergodic SMB theorem applied to each `m_λ`, followed by integration of its measurable full-measure sections against `ν`, gives

`−n^(−1)log m_(ψ(x))(X_0^(n−1))(x) → h_(ψ(x))`,  `m`-almost surely.

The base theorem is used only with its finite-alphabet, stationary, ergodic hypotheses; the mixture `m` itself need not be ergodic. The joint event is measurable because all block probabilities and `h_λ` are measurable and the sequence of log-likelihoods is a countable family of measurable extended-real functions.

Gray EIT Lemma 3.3.2 proves that component and mixture block probabilities have the same exponential rate:

`n^(−1)log [m_(ψ(x),n)(X_0^(n−1)) / m_n(X_0^(n−1))] → 0`,  `m`-almost surely.

Here is a complete proof with the source's integrability gap removed. A sampled word has positive component probability almost surely; if `m_n(a)=0`, then `m_(λ,n)(a)=0` for `ν`-almost every `λ`. Define

`R_n(x)=m_n(X_0^(n−1)(x))/m_(ψ(x),n)(X_0^(n−1)(x))`

where the denominator is positive, and zero on the null exceptional set. It is measurable as a finite sum over `a∈𝒜^n` of cylinder indicators times ratios of measurable kernel probabilities. Conditional-kernel integration for nonnegative functions gives directly

`E_m R_n = ∫_Λ Σ_(a:m_(λ,n)(a)>0) m_(λ,n)(a) [m_n(a)/m_(λ,n)(a)] ν(dλ)`

`= ∫_Λ Σ_(a:m_(λ,n)(a)>0) m_n(a) ν(dλ) ≤ 1`.

Indeed, write `R_n(x)=Σ_(a∈𝒜^n)1_(C_a)(x)r_n(ψ(x),a)` with the zero-denominator convention and apply the kernel formula to each summand; the sum is finite. Integrability is thereby established before Markov's inequality, without a truncation. This avoids the displayed `max` truncation in Gray's proof. Markov and Borel–Cantelli, first for rational `ε>0`, yield

`limsup_n n^(−1)log[m_n(X_0^(n−1))/m_(ψ(x),n)(X_0^(n−1))]≤0`,

so the liminf of the desired log ratio is nonnegative.

For the reverse inequality, fix `k≥1` and form the stationary `k`-step Markov approximation `m^(k)` to `m`, with the same `k`-block marginal and transitions `q_k(b|u)=m(X_k=b|X_0^(k−1)=u)` on positive-probability contexts `u`; choose any probability vector on zero-probability contexts. Explicitly, use the order-`k` state space `𝒜^k` and transition `Q(u,v)=q_k(v_(k−1)|u)` if `v_i=u_(i+1)` for `0≤i<k−1`, and zero otherwise (for `k=1` the overlap condition is empty). Set `π(u)=m(X_0^(k−1)=u)`. For `v=(v_0,…,v_(k−1))`, the sum `Σ_uπ(u)Q(u,v)` is `Σ_a m(X_0^k=(a,v_0,…,v_(k−1)))=m(X_1^k=v)=π(v)` by stationarity of `m`; zero-probability contexts contribute zero. The finite-state Ionescu–Tulcea construction gives the chain, and `πQ=π` makes its block laws stationary. Projecting overlapping states to symbols gives `m^(k)`. Its block probabilities satisfy

`m_n^(k)(a_0^(n−1))=m(a_0^(k−1)) Π_(i=k)^(n−1)q_k(a_i|a_(i−k)^(i−1))`,  `n≥k`.

For each fixed `n`, `m_n≪m_n^(k)`: when `n<k`, their `n`-block marginals agree because the initial `k`-block law is `m`'s; when `n≥k`, every positive-probability `n`-block has positive initial `k`-block probability and each length-`k+1` subblock has positive probability, so every transition factor is positive. Also `m_(λ,n)≪m_n` for `ν`-almost every `λ`, since `m_n(a)=∫m_(λ,n)(a)ν(dλ)` and there are finitely many `n`-block atoms. Thus the component-to-Markov finite-block KL terms below are well-defined; ratios are assigned arbitrary values only on component-null zero-denominator sets.

Define `S_n^(k)=m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))` on `m_n`-positive blocks and zero otherwise. Then `E_m S_n^(k)=Σ_(a:m_n(a)>0)m_n^(k)(a)≤1`, so Markov and Borel–Cantelli yield for each integer `k`

`limsup_n n^(−1)log[m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))]≤0`,  `m`-almost surely.

Put `g_k(x)=−ln q_k(X_k(x)|X_0^(k−1)(x))` when the transition probability is positive, and `g_k(x)=0` otherwise. The zero case has `m`-probability zero. This nonnegative measurable function satisfies `E_m g_k=H_m(X_k|X_0^(k−1))≤ln|𝒜|`; disintegration gives `g_k∈L¹(m_λ)` for `ν`-almost every component. On each such stationary ergodic component, Birkhoff and the Markov factorization give `−n^(−1)log m_n^(k)(X_0^(n−1))→c_k(λ):=E_(m_λ)g_k`; the initial `k`-block log probability is finite almost surely and vanishes after division by `n`. Together with component SMB, this yields

`n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n(X_0^(n−1))]`

`= n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n^(k)(X_0^(n−1))] + n^(−1)log[m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))]`,

whose first term tends to `D_k(λ):=c_k(λ)−h_λ=lim_n n^(−1)D(m_(λ),n||m_n^(k))≥0`, while the second has limsup at most zero. For this relative-entropy-rate identity, expand the finite-block KL as cross-entropy under `m_n^(k)` minus component entropy: the normalized component entropy tends to `h_λ`; the cross-entropy is the initial `k`-block cross-entropy divided by `n` plus the average of `E_(m_λ)g_k=c_k(λ)` over `n−k` stationary transitions. The initial term is finite on the component support and vanishes after division by `n`. Thus `limsup L_n≤D_k(λ)` for every `k`, where `L_n=n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n(X_0^(n−1))]`.

The function `D_k` is measurable and integrable: `D_k≤c_k` and `∫c_k dν=H_m(X_k|X_0^(k−1))≤ln|𝒜|`. The affinity just proved and the finite-alphabet Markov-approximation identity give

`∫_Λ D_k(λ)ν(dλ)=H_m(X_k|X_0^(k−1))−h(m) → 0` as `k→∞`.

For the identity, `∫c_k=H_m(X_k|X_0^(k−1))` by disintegration and `∫h_λ=h(m)` by the preceding proof. The conditional entropies decrease to `h(m)` by stationarity and the finite-alphabet entropy-rate formula. Let `ζ(λ)=inf_kD_k(λ)`. It is measurable and nonnegative, and `0≤∫ζdν≤inf_k∫D_kdν=0`; hence `ζ=0` almost everywhere. Therefore `limsup L_n≤0` `m`-almost surely. Combining with the earlier lower bound proves `L_n→0`, and substitution into component SMB gives

`−n^(−1)log m(X_0^(n−1))→h_(ψ(x))`,  `m`-almost surely.

Gray EIT Corollary 3.3.1 also asserts `L¹(m)` convergence, using finite-alphabet uniform integrability of normalized sample self-information (Lemma 2.3.6). This supplement proves the mixture/component rate identity and a.s. transfer, not a new proof of that uniform-integrability lemma.

### What the entropy limit is, and is not

In general the sample entropy under a stationary nonergodic law converges to the entropy rate of the component actually selected by the sample, `h_(ψ(x))`; it does not converge to the mixture-average entropy rate `h(m)=∫h_λν(dλ)` as a constant. For example, let `m=½δ_(0^∞)+½ Bernoulli(½)^ℕ`. The stationary component entropy rates are `0` and `ln 2`, so a typical sample has limiting entropy density `0` or `ln 2` according to its component, while the mixture entropy rate is `(ln 2)/2`. On the deterministic component `m(X^n)→½`; on a typical iid component sample `m(X^n)=2^(−n−1)` for all sufficiently large nonconstant blocks. This example makes the mixture/component distinction explicit.

## 3. AMS extension: the stationary mean supplies only the right null-set interface

Gray EIT Lemma 3.4.2 states the exact transfer used after stationary nonergodic SMB: let `m` be finite-alphabet AMS, let `m̄` be a stationary law asymptotically dominating `m`, and suppose an invariant real function `h` satisfies

`−n^(−1)log m̄(X^n)→h`,  `m̄`-almost surely.

Then `−n^(−1)log m(X^n)→h`, `m`-almost surely. In its intended application `m̄` is the stationary mean. This is not justified by saying the `m̄`-a.s. limit transfers to `m` for every event: only tail events transfer in the noninvertible case.

For each probability law `μ` on the finite-alphabet one-sided path space and each fixed `k`, the fixed-prefix boundary convergence has a direct finite-alphabet proof. Let `A=X_0^(k−1)` be the first `k` symbols and `B_n=X_k^(n−1)` the suffix word, with all probabilities below taken under this same `μ`. On a sampled block, the boundary error is

`e_(μ,k,n):=−n^(−1)log μ(X_0^(n−1)) + n^(−1)log μ(X_k^(n−1)) = −n^(−1)log μ(A|B_n) ≥ 0`.

For every `ε>0`, summing over suffix words `b` and prefix words `a∈𝒜^k` gives

`μ(e_(μ,k,n)>ε)=Σ_(b:μ(B_n=b)>0) μ(B_n=b) Σ_(a:μ(a|b)<e^(−nε)) μ(a|b) ≤ |𝒜|^k e^(−nε)`.

The bound is summable in `n`. Borel–Cantelli, first for positive rational `ε`, proves `e_(μ,k,n)→0` `μ`-almost surely. This is Gray EIT Lemma 3.4.1 with its finite-alphabet argument written out. In particular, the assertion for `μ=m` is under `m` with `m`-block probabilities, while the separate assertion for `μ=m̄` is under `m̄` with `m̄`-block probabilities; neither limit is evaluated using one law's block probabilities along samples drawn from the other law.

Choose strictly increasing `N(k)≥k²` so that for each `μ∈{m,m̄}`

`μ(sup_(n≥N(k)) |e_(μ,k,n)| > 2^(−k)) ≤ 2^(−k)`.

Such a common sequence exists because each fixed-`k` error converges under its own law. Put `k(n)=k` on `[N(k),N(k+1))` and set `k(n)=1` for the finitely many `n<N(1)`. For each of the two laws separately, Borel–Cantelli gives `e_(μ,k(n),n)→0`; also `k(n)→∞` and `k(n)/n→0`. The lower bound `N(k)≥k²` ensures `k(n)≤n` on these intervals.

Write `B_n` for the observed suffix cylinder `{X_(k(n))^(n−1)=x_(k(n))^(n−1)}`. Apply the stationary component construction above to `m̄`; its SMB limit is the finite, strictly invariant function `h(x)=h_(ψ_(m̄)(x))`. Under `m̄`, its own-law diagonal boundary relation and stationary SMB give

`b̄_n:=−n^(−1)log m̄(B_n) → h`.

This limit event belongs to every tail σ-algebra `𝓕_N=σ(X_N,X_(N+1),…)`: for all sufficiently large `n`, `k(n)≥N`, so `B_n`-probabilities depend only on coordinates from `N` onward, and strict invariance gives `h=h∘T^N`, which is `𝓕_N`-measurable. Gray Probability Corollary 6.3.3 therefore transfers this event from `m̄` to `m`. In particular, because `h` is finite, `m̄(B_n)>0` eventually for `m`-almost every sample; this positivity is needed before using the logarithmic ratio identity below.

For the lower bound, on `m̄`-positive suffix blocks set `U_n=m(B_n)/m̄(B_n)` and set it to zero otherwise. For every `n`, summing over the disjoint suffix words gives

`E_(m̄)U_n=Σ_(b:m̄(B_n=b)>0)m(B_n=b)≤1`.

Markov and Borel–Cantelli imply `limsup n^(−1)log U_n≤0`, `m̄`-almost surely. Since `m̄(B_n)>0` along an `m̄`-sample for every fixed `n`, either `m(B_n)=0` (then `−log m(B_n)=+∞` and the lower bound is immediate) or

`−n^(−1)log m(B_n)=−n^(−1)log m̄(B_n)−n^(−1)log U_n`.

Thus `liminf −n^(−1)log m(B_n)≥h` on a tail event. As above, each sufficiently late suffix block depends only on coordinates arbitrarily far out, so the whole liminf event is in every `𝓕_N`; tail domination transfers it from `m̄` to `m`. The separate `m`-own boundary relation then gives the lower bound for `−n^(−1)log m(X_0^(n−1))`.

For the upper bound, an `m`-sample has `m(B_n)>0` for every `n` almost surely: for fixed `n`, the zero-probability suffix cylinders form a finite union of `m`-null events, and there are only countably many `n`. Set `V_n=m̄(B_n)/m(B_n)` on these positive blocks and zero otherwise. Again summing over disjoint suffix words,

`E_m V_n=Σ_(b:m(B_n=b)>0)m̄(B_n=b)≤1`.

Markov and Borel–Cantelli yield `limsup n^(−1)log V_n≤0`, `m`-almost surely. On the common `m`-full set where `m(B_n)>0` always and `m̄(B_n)>0` eventually, the identity

`−n^(−1)log m(B_n)=−n^(−1)log m̄(B_n)+n^(−1)log V_n`

is now an ordinary finite-real identity for all sufficiently large `n`. It gives `limsup≤h`; the `m`-own boundary relation transfers that upper bound to the original prefix. The two bounds prove the AMS SMB transfer. Both cross-law full-measure passages (the stationary-mean limit and the lower-bound event) are tail events and use the tail-domination corollary derived from asymptotic domination. Ordinary `m≪m̄` is neither asserted nor needed.



IID proof. For a stationary nonergodic source, the SMB limit is the
component entropy, not generally the global mean rate; the equally weighted
mixture of a deterministic zero process and an IID fair-bit process has
mean entropy rate 1/2 but pathwise information rates 0 and 1.

LZ scope separates three results. First, stationary finite-alphabet LZ78 expected codelength per source symbol tends to entropy rate. This proof uses the order-k empirical conditional entropy comparison, phrase-context grouping, K_n/n->0, stationary expectation bounds and H(X_0|X_-k^-1) down to h. The code’s EOS/final phrase is treated separately: a final EOS changes at most one terminal phrase and O(log n) pointer bits; fixed symbol fields cost O(K_n), which is o(n) after the phrase-count proof. For phrase grouping, hold both phrase length and preceding k-context fixed; distinct continuation probabilities then sum to at most one. Do not apply that distinctness claim directly to an unfinished final phrase; allow multiplicity at most two or isolate it, yielding only O(K_n) slack.

Second, the individual-sequence LZ78 finite-state theorem is a distinct claim. The complete Ziv–Lempel 1978 proof defines finite-state compressibility rho(x)=limsup normalized finite-state code length, proves the phrase-complexity lower bound for finite-state IL encoders, gives an ILF encoder attaining the empirical phrase rate, and concludes rho(x)=the empirical entropy for every individual infinite sequence. For a finite-alphabet ergodic source, the corresponding entropy rate holds almost surely. Keep the source’s exact rate normalization by log_2|A| and terminal-block convention; do not confuse it with expected LZ78 length for every stationary source.

Third, for stationary ergodic finite-alphabet two-sided X with h>0, the LZ77 match length L_m in a preceding length-m window obeys L_m/log_2 m->1/h almost surely under the overlapping-reference convention. The full Kontoyiannis 1998 proof has been read. For recurrence R_n of the current n-block in the past, its theorem says that for any c_n>=0 with sum_n n 2^{-c_n}<infinity, eventually log_2[R_n P(X_1^n)]<=c_n and log_2[R_n P(X_1^n|X_{-infinity}^0)]>=-c_n. Set c_n=epsilon n; unconditional and conditional SMB then give n^-1 log_2 R_n->h. The exact event equivalence R_n>m iff L_m<=n gives the match-length limit by a monotone sandwich: for any eta>0, recurrence indices n_-=(1/h-eta)log_2 m and n_+=(1/h+eta)log_2 m eventually satisfy R_{n_-}<m<R_{n_+}; hence n_-<L_m<=n_+, then eta decreases to zero. Exclude h=0, where L_m/log m need not have finite limit (e.g. constant sequence). This proves the phrase-length theorem; it does not automatically prove a finite-window LZ77 code-length theorem.

For any actual finite binary representation, append reserved EOS, fix dictionary initialization and phrase update, use deterministic pointer/symbol widths, and prove decoder state mirrors encoder. The source coding claims remain separated by their operational statements and the exact r2 supplementary reading records; no finite-precision implementation follows from the asymptotic theorem.

The ideal arithmetic coder only proves nested-interval correctness over
exact reals. A finite coder instead fixes register width b, cumulative
integer counts, range invariant, floor division and exact boundary/tail
convention. For Moffat–Neal–Witten, with `R>2^{b-2}` and `t<=2^f<=2^{b-2}`,
`r=floor(R/t)>=1`. Every nonfinal subrange has width `r(h-l)>=1`; the
final upper cell has width `R-r l >= r(t-l)>=1`, and its upper endpoint
does not exceed L+R. The target is `min(t-1,floor(D/r))`; the clamp assigns
the unallocated remainder to the final symbol, preserving encoder/decoder
agreement. Renormalization doubles range until it exceeds the threshold,
so it exits in at most b-1 steps from positive integer range. Termination,
EOS/known length, adaptive count rescaling, model synchronization, and the
bits-outstanding counter width are part of the code contract. On a known
n-symbol block followed by EOS, each symbol update uses at most b-1
renormalization steps; therefore pending bits are at most b(n+1), so
`ceil(log2(b(n+1)+1))` counter bits suffice. L+R can equal 2^b, so compute
it in a widened b+1-bit temporary and never allow wraparound. Each pending
bit is flushed once and total update work is O(nb). These widths guarantee
no overflow for the finite known-length contract. For an unbounded stream,
use a growing counter or synchronized reset; abort-on-overflow is correct
only on nonoverflowing inputs.

## 4. Rate distortion and finite Blahut–Arimoto (IT06)

For finite alphabets and finite nonnegative d, the channel simplex is
compact and the feasible distortion slice is closed. Finite mutual
information is continuous in the channel (finite entropy formula), hence
the rate-distortion minimum is attained whenever feasible. Distortion
mixes linearly; mutual information is convex in the test channel by
finite log-sum, so R(D) is convex and nonincreasing. A constant
reconstruction gives R(D)=0 at and above its average distortion; when
zero distortion forces exact reproduction, R(0)=H(X). Endpoint claims
outside finite alphabets require a separate compactness/lower-semicontinuity
argument.

For IID finite sources and finite distortion, the converse follows from
`log M>=I(X^n;Xhat^n)>=sum_i I(X_i;Xhat_i)>=sum_i R(E d_i)>=nR(E d_n)`;
the middle inequality uses independent source coordinates and the entropy
chain rule, and the last uses convexity. For achievability, draw M
independent reproduction words from the output marginal of a test channel,
include a default reproduction, and decode by minimum empirical distortion
with a fixed tie rule. The standard bound splits failure into an
information-density tail and a default-distortion tail. Choose a test
channel strictly inside the target distortion, choose
`log M/n>I(X;Y)` with positive slack, and apply the information-density
WLLN. On finite alphabets the default distortion is bounded, so the tail
term vanishes. This proves existence of deterministic codes, not an
efficient encoder. Expected distortion and excess-distortion probability
are separate criteria. Gray's stationary-ergodic theorem additionally
requires bounded additive distortion and its process approximation lemma;
it is not an unbounded-MSE theorem.

Finite BA proof contract follows the r4 complete local development and the
auditor's independent repair. Let finite source masses p_i>0, finite
distortions d_ij>=0, finite beta>=0, and c_ij=exp(-beta d_ij)>0. For an
output pmf q define `Z_i(q)=sum_j q_j c_ij`,
`F(q)=-sum_i p_i ln Z_i(q)`,
`g_j(q)=sum_i p_i c_ij/Z_i(q)`, and
`W^q(j|i)=q_j c_ij/Z_i(q)`. Starting with q_0 strictly positive, update
`q_{t+1,j}=q_{t,j}g_j(q_t)` and use W^{q_t} as the test channel. The
normalization identity is `sum_j q_j g_j(q)=1` and every coordinate stays
positive.

For any channel W with output r and output pmf q, define

`G(W,q)=sum_{i,j} p_i W(j|i) ln[W(j|i)/(q_j c_ij)]`,

with value +infinity if W puts positive mass where `q_j c_ij=0`. It has
two expansions:
`G=I(p,W)+beta E d +D(r||q)` and
`G=F(q)+sum_i p_i D(W(.|i)||W^q(.|i))`.
These follow by expanding finite logarithms on positive support. Thus the
joint minimum (equivalently either iterated infimum) of G is both the
optimum of the Lagrangian and `min_q F(q)`; no maximization is involved.
For fixed q, W^q minimizes G; for fixed W, q=r minimizes G. Alternating
minimization gives
`F(q_t)-F(q_{t+1})>=D(q_{t+1}||q_t)>=0`.
Monotonicity alone is not convergence to a global minimizer.

Choose a minimizer q*. KKT gives g_j(q*)=1 on its support and <=1 off it.
For active j, let `a_ij=p_i c_ij/Z_i(q*)`; these weights sum to one and
`g_j(q_t)=sum_i a_ij Z_i(q*)/Z_i(q_t)`. Jensen for log yields

`D(q*||q_t)-D(q*||q_{t+1}) >= F(q_t)-F(q*)`.

Telescoping gives
`F(q_t)-F*<=D(q*||q_0)/(t+1)`, including boundary optimizers q*. A
uniform initialization yields the explicit upper bound
`ln|Y|/(t+1)`. The a-posteriori certificate
`gamma(q)=max(1,max_j g_j(q))` satisfies
`F(q)-F*<=ln gamma(q)` by Jensen and the identity
`sum_i p_i Z_i(q*)/Z_i(q)=sum_j q*_j g_j(q)`. Cluster points lie in the
compact simplex and are minimizers by the global bound; continuity plus
KKT makes gamma tend to one along the sequence, proving finite termination
for every positive tolerance. Each exact-real update costs
O(|X||Y|) arithmetic operations. This is not bit complexity: any
floating-point implementation must use certified outward enclosures and
declare success only when the gap bound is certified below tolerance.
This proof is finite-alphabet, finite-distortion, finite-beta only; it
does not prove an exact inverse map from beta to every requested D.

## 5. DMC capacity, one-shot bounds, and lossy separation (IT07–IT09, IT17)

For a finite DMC W, the weak converse uses uniform message M, the Markov
chain `M -> X^n -> Y^n -> Mhat`, Fano, and
`I(X^n;Y^n)<=sum_i I(X_i;Y_i)<=n max_{P_X} I(X;Y)`. The first inequality
uses memorylessness plus subadditivity of output entropy; the second
single-letterizes each marginal. The max exists by finite-simplex
compactness and continuity. Achievability fixes an input pmf P_X and
draws M codewords iid P_X^n. A threshold decoder accepts message m only
when information density exceeds `ln((M-1)/2)`. For M>=2 the expected
average error is `E[min(1,(M-1)e^{-i(X;Y)}/2)]`; choose rates below I and
apply the WLLN. Since an average over finitely many codebooks is at most
its expectation, one deterministic codebook attains the bound. M=1 is
separate with zero error. This is average error; a maximal-error result
requires expurgation with its changed epsilon/rate statement.

The source supplies a stationary-memoryless strong converse when the input
alphabet or output alphabet is finite, and also gives a countable-input/[0,1]
output counterexample to an unrestricted claim. The local theorem proposed in
IT07 proves the finite-DMC subcase explicitly; it does not claim the broader
one-finite-side converse without its separate measurable-space proof.

Finite-DMC strong converse. For an n-type P code use Q_n=(PW)^n. For each
codeword of type P the information log-likelihood L has mean nI(P,W)<=nC
and variance nV(P,W)<=nB_2, where B_2 is the uniform finite bound established
above. The exact success-test split gives F_L(ln M-gamma)<=e_n+e^-gamma.
If ln M>=n(C+delta), choose gamma=n delta/2. Chebyshev implies
F_L(ln M-gamma)>=1-4B_2/(n delta^2)->1, contradicting a fixed e_n<=epsilon<1.
For an arbitrary average-error-epsilon code, retain messages whose individual
error is at most epsilon'=(1+epsilon)/2; Markov leaves at least the constant
fraction (1-epsilon)/(1+epsilon). One of at most (n+1)^|X| types then has
exponentially many messages at rate R-o(1), with error at most epsilon'. The
constant-composition argument rules out R>C. A maximal-error code is already
covered. This includes zero-variance types because Chebyshev uses only an
upper variance bound. The rate/capacity definition then gives C_epsilon=C for
every fixed epsilon<1. The proof is finite-DMC only.

For the beta meta-converse, fix beta_alpha(P,Q)=inf E_Q T over measurable
0<=T<=1 with E_P T>=alpha; T accepts P. For a uniform M-message code,
construct full P and auxiliary Q experiments with the same message,
encoder, and decoder, replacing W by Q_Y under Q. The correct-decode
indicator has P expectation at least 1-epsilon and Q expectation 1/M,
because under Q the output is independent of the uniform message. This
gives `beta_{1-epsilon}<=1/M`. To reduce to (X,Y), use the common finite
kernel `T(x,y)=sum_m P(M=m|X=x)D(m|y)`; it is the same under P and Q and
retains both expectations. This avoids the false assumption that a
randomized encoder has an inverse. For a general measurable experiment,
NP existence and singular mass must be verified against the exact existing
test supplier.

For point-to-point finite expected-distortion separation, the source block
encoder's index is generally nonuniform. In achievability choose strict
slack `R(D')<r<kappa C`, use the finite RD code for at most exp(nr+o(n))
indices, and transmit with a maximal-error channel code obtained by
expurgating a larger average-error code. On channel success, the source
distortion is at most its source-code expectation; on failure, the excess
is at most d_max. Therefore total expected distortion is at most
`D'+o(1)+d_max epsilon_m`. The converse gives
`n R(D_n)<=I(U^n;Xhat^n)<=m C` via the single-letter RD converse and
memoryless channel chain rule; finite alphabets give compactness to pass to
boundary rate/distortion limits. Handle zero-rate and endpoint cases by
closure/trivial constant reproduction, rather than assuming strict slack
there. This argument does not cover unbounded distortion or correlated
multiuser sources.

## 6. Networks, secrecy, and finite-dimensional quantum theory (IT10–IT22)

The k-source Slepian–Wolf proposal uses the exact finite-IID rate region
`sum_{j in S} R_j>=H(X_S|X_{S^c})` for every nonempty subset S. For each
subset, define a conditional-surprisal typical set on the event that every
nonempty subset's normalized surprise is within delta of its conditional
entropy. The finite-vector WLLN gives probability tending to one, and
conditioning on the complementary coordinates bounds each conditional
fiber by `exp[n(H(X_S|X_{S^c})+delta)]`. Independently assign every source
block to bins of sizes `ceil(exp(n(R_j+eta)))`. Given all bins, the
decoder selects the unique jointly typical tuple; a wrong tuple differs
on some nonempty set S, lands in the same bins with probability
`exp[-n(sum_{j in S}R_j+|S|eta)+o(n)]`, and the number of conditionally
typical competitors is at most the fiber bound above. If all subset
inequalities have strict slack, the union bound over the finite set of
subsets tends to zero. Hence some deterministic binning works. Converse:
give X_{S^c}^n to the decoder, apply finite conditional Fano to X_S^n,
and use that the messages in S have at most exp(n sum R_j) values.
Closure follows by time-sharing/limit. This proves no efficient decoding
claim.

For the product-input two-user DM-MAC, the exact closure is the union over
finite `p(q)p(x1|q)p(x2|q)` of the subset sum inequalities
`sum_{j in J}R_j<=I(X_J;Y|X_{J^c},Q)`. The product condition is essential
for private independent messages. Random coding and joint typicality
prove the strict interior, and convexification by finite time sharing
gives the closed region; the converse uses Fano and
single-letterization with Q a uniform time index. The physically degraded
BC superposition region has its own degradedness condition. General BC,
IC, and single-relay capacity are not claimed solved. ETW Gaussian
within-one-bit, NNC cut-dependent Gaussian multicast gap, strong
interference, decode/compress-forward, cut-set and relay bounds must each
retain their source's exact channel and input hypotheses.

Classical secrecy definitions must distinguish weak leakage
`n^{-1}I(M;Z^n)->0`, strong leakage `I(M;Z^n)->0`, equivocation, and
trace-distance secrecy. The finite DM wiretap coding result is the
auxiliary `max_{p(u,x)}[I(U;Y)-I(U;Z)]` characterization under its
stochastic encoder and memoryless channel model; its degraded simplification
requires the stated degradation. Random binning/resolvability requires a
separate soft-covering or resolvability proof, not just wiretap theorem
quotation. The finite classical leftover-hash proof uses a public seed S
independent of X,Z and a two-universal family; average conditional guessing
probability g(X|Z) gives TV at most `1/2 sqrt(M g(X|Z))`. Output total
variation tending to zero is not by itself strong unnormalized secrecy
when M grows; use the finite entropy-continuity bound and require
`delta log M->0` (or a sufficiently strong exponential rate). Quantum
side information requires a separate proof.

Quantum pages use finite-dimensional nonzero Hilbert spaces, density
operators and channels from the existing QC interface. The root inner
product is linear in its first argument; translate adjoints and partial
trace explicitly, and use Choi tensor order input then output. Define
`S(rho)=-Tr rho ln rho`, with `0 ln0=0`, and
`D(rho||sigma)=Tr rho(log rho-log sigma)` only if
`supp rho subset supp sigma`, otherwise infinity. The log is spectral on
positive support and the cross trace is compressed to that support.
Finite chain/entropy identities follow from diagonalization and partial
trace; conditional entropy may be negative.

The finite quantum QRE DPI proof is not supplied by trace-distance or
fidelity contractivity. Use the auditor's explicit operator ladder in
`audit/independent-proof-notes.md`: (i) inverse-compression inequality via
the quadratic variational formula; (ii) integrate the resolvent identity
for `-ln t` to prove the needed operator Jensen inequality; (iii) express
relative entropy as a relative-modular quadratic form on Hilbert–Schmidt
space; (iv) use an isometric embedding to prove joint convexity; (v) add
epsilon identities and prove the support limit, including the infinite
support-failure branch; (vi) twirl a partial trace by the finite shift and
phase unitary basis to prove partial-trace DPI; (vii) use Stinespring
isometry and partial trace to obtain CPTP DPI. Every operator calculation
must follow the root linear-first inner-product convention. To derive SSA,
apply partial-trace DPI over C to the pair
`(rho_ABC, rho_A tensor rho_BC)`: the input divergence is
`S(A)+S(BC)-S(ABC)=I(A;BC)` and the output divergence is
`S(A)+S(B)-S(AB)=I(A;B)`. Thus `I(A;BC)>=I(A;B)`, exactly
`I(A;C|B)>=0` or `S(AB)+S(BC)>=S(B)+S(ABC)`. The tensor-product support
inclusion follows from `supp rho_ABC subseteq supp rho_A tensor supp rho_BC`,
proved by testing vectors in the kernel of either marginal against the
positive joint state. Derive quantum CMI nonnegativity and Holevo measurement DPI only
after this supplier exists. No equality/recovery theorem follows.

After SSA, a sufficient finite entropy continuity estimate can be proved
without an unavailable sharp Fannes/Audenaert supplier. For states rho,sigma
on dimension d, let `delta=1/2||rho-sigma||_1`. Write the Jordan
decomposition `rho-sigma=delta(tau_+-tau_-)` with states tau±. The common
state
`omega=(rho+delta tau_-)/(1+delta)=(sigma+delta tau_+)/(1+delta)`
expresses each argument as a mixture with weight t=delta/(1+delta).
Entropy concavity and the cq mixing upper bound give
`|S(rho)-S(sigma)|<=delta ln d+(1+delta)h_2(t)`.
This is nonsharp and uses the repository's halved trace norm. Its conditional
version `|S(A|B)_rho-S(A|B)_sigma|<=2delta ln d_A+(1+delta)h_2(t)` follows
from SSA's nonnegative conditional entropy of a classical flag and
`|S(A|B)|<=ln d_A`. It is not named Fannes or Audenaert. The proof and
finite-dimension/support gates are developed fully in the later quantum
continuity integration below and in the auditor's independent notes.
Production item carriers remain to be authored.

Quantum channel coding retains finite-dimensional iid models. Schumacher
compression and HSW classical capacity use typical subspaces/typical
projectors, packing and gentle measurement with a quantified trace error;
their proofs need finite spectral typicality and typical-projector
dimension bounds. General quantum/classical/private capacities use
regularized coherent or private information, not a claimed single-letter
formula; additivity is limited to entanglement-assisted capacities and
special degradable cases. Quantum key distribution defines a specific
authenticated protocol; abort-weighted ideal/real distance from uniform
key tensor Eve and correctness are separate, and the composable theorem
has a simulator/authentication premise. None of these claims extends to
infinite-dimensional or energy-constrained systems by the finite proof.

## 7. Large deviations, Berry–Esseen, and finite-blocklength bounds

For a type q with counts N_i on an alphabet of size k, every word in T_q has p=q probability exp(-nH(q)), so |T_q|<=exp(nH(q)). Under q, a type with counts M_i has probability relative to the type N_i equal to product_i (N_i!/M_i!)N_i^(M_i-N_i). If M_i>N_i, each factor is N_i/(N_i+r)<=1; if M_i<N_i, each factor is (N_i-r)/N_i<=1; if N_i=0<M_i the probability is zero. Thus the empirical type is a multinomial mode. Since there are at most (n+1)^k types, its probability is at least (n+1)^(-k), giving the lower cardinality bound. For fixed p, P_p(T_q)=|T_q|exp[-n(H(q)+D(q||p))] when q is supported on p, and zero otherwise.

For the finite-alphabet Sanov statement, reduce to S=supp(p), so the empirical type lies in the compact face Delta(S). Summing at most (n+1)^|S| exact type probabilities over types in the relative closure of A yields the upper exponent -inf_{cl_S A}D(q||p). For the lower bound fix q in the relative interior of A, approximate it by attainable n-types q_n in A, and use the polynomial type lower bound plus continuity of KL on Delta(S). This gives the LDP liminf/limsup bounds; equality requires the interior and closure infima to agree. No exact finite-n exponent or general Sanov theorem is asserted.

The local Berry–Esseen supplier is the complete r3 proof based on Vershynin v2. For independent real mean-zero X_k with sum_k E X_k^2=1 and beta_3=sum_k E|X_k|^3<infinity, it proves sup_x |P(sum_k X_k<=x)-Phi(x)|<=C_BE beta_3 for a universal finite constant. For iid X with variance sigma^2>0 and centered third moment beta_3=E|X-E X|^3, standardization yields error at most C_BE beta_3/(sigma^3 sqrt(n)). No density or lattice condition is required. The Fourier proof constructs an even nonnegative Schwartz probability density with compactly supported transform and finite first moment; proves a signed two-sided CDF smoothing inequality including atoms; Fourier-inverts a truncated smoothed step and passes by monotone convergence; expands each characteristic function through its third absolute moment; controls the logarithm branch and product damping; and integrates the difference on the smoothing cutoff. The actual Fourier/Schwartz suppliers carry their Countable Choice premise, and the normal-law supplier carries Axiom of Choice; these are listed as exact dependencies rather than hidden.

## Finite unconstrained DMC normal approximation, fixed 0<epsilon<1/2

This is the complete proof route for finite DMCs with V_min>0, in nats and without cost constraints. Let W(y|x) have finite nonempty alphabets, remove output letters unreachable by every input, let C=max_P I(P,W), Pi={P:I(P,W)=C}, and q*=P*W. Write z_epsilon=Phi^{-1}(epsilon)<0 and V(P)=sum_x P(x)Var_{W_x}[ln(W(Y|x)/(PW)(Y))]. Then V_min=min_{P in Pi}V(P)>0 is attained. For both uniform-message average-error and maximal-error code sizes, the target is

`ln M*(n,epsilon)=nC+sqrt(n V_min) z_epsilon+O(ln n)`.

### Output support, KKT, and variance identities

The input simplex is compact and finite-alphabet mutual information is continuous, so Pi is nonempty and compact. Any two capacity-achieving inputs have the same output: if their output pmfs differ, strict concavity of output entropy makes their mixture’s mutual information strictly larger, because the conditional-output entropy term is linear in the input pmf. Call this common output q*. It is positive on every reachable output. If a reachable y had q*(y)=0, mixing a CAID with a row that puts positive mass on y produces a `t ln(1/t)` increase in output entropy as t downarrows zero, while changes on the positive q* coordinates and conditional entropy are O(t); this contradicts optimality. With q*>0 on the reachable output alphabet, directional differentiation at any CAID P* toward the point mass at x gives `D(W_x||q*)<=C`; averaging this inequality against P* gives equality on its support. It follows that under every CAID `E[i(X;Y)|X=x]=C` on its support, and the total-variance formula yields `Var(i(X;Y))=E Var(i(X;Y)|X)=V(P)` there.

Near Pi, compactness gives (PW)(y)>=q_min/2>0, where q_min=min_y q*(y). The finite formulas for I(P,W), V(P), and the centered third-moment sum `T(P)=sum_xP(x) E_W|i(x;Y)-D(W_x||PW)|^3` are smooth/bounded there. W-positive entries have a fixed positive minimum; all log terms and their derivatives are uniformly bounded. Hence V is Lipschitz on a neighborhood of Pi, sqrt(V) is Lipschitz where V>=v0>0, and T(P)<=T_max uniformly. This supplies a uniform independent-array Berry–Esseen constant for constant-composition codewords whose type lies near Pi. Globally `V(P)<=B2<infinity`: use V<=E i^2, `(ln W-ln PW)^2<=2(ln W)^2+2(ln PW)^2`, and the finite uniform bound on `sum_y (PW)(y) ln^2(PW)(y)` since t ln^2 t extends continuously at zero.

### Global quadratic capacity gap by a finite polytope bound

Let d_x=D(W_x||q*) and E={x:d_x=C}. The saddlepoint inequality gives d_x<=C. Expanding finite KL sums yields the exact identity

`C-I(P,W)=sum_x P(x)(C-d_x)+D(PW||q*)`.

Both terms on the right are nonnegative. Equality holds exactly on the CAID polytope
`Pi={p in Delta(A): p_x=0 for x outside E, pW=q*}`. Set t=sum_{x outside E}P(x) and r=||PW-q*||_2. If E^c is nonempty, eta=min_{x outside E}(C-d_x)>0 and the first term is at least eta t. If E^c is empty, t=0 and no minimum over an empty set is used. Published Pinsker gives `D(PW||q*)>=.5||PW-q*||_2^2` (since Euclidean norm is bounded by the L1 norm).

The finite affine-slice residual bound used here is proved locally by contradiction. For a finite simplex Delta and nonempty F={u in Delta:Bu=b}, suppose no H works. Choose p_n in Delta and nearest u_n in compact F with delta_n=||p_n-u_n||_2>n||Bp_n-b||_2; then d_n=(p_n-u_n)/delta_n has norm one and ||Bd_n||_2<1/n. Pass to a subsequence where the support pattern of u_n is fixed and d_n converges to d. Since p_n,u_n are in the simplex, sum_i d_i=0; since Bd_n->0, Bd=0; if u_{n,i}=0 on the fixed zero-coordinate set I, then p_{n,i}>=0 gives d_{n,i}>=0. For each n, u_n+t_n d remains in F for sufficiently small t_n>0: its affine equations and coordinate sum remain fixed, its zero coordinates move nonnegatively, and its finitely many positive coordinates remain nonnegative for small t_n. The published nearest-point variational inequality yields `<p_n-u_n,t_n d><=0`, so `<d_n,d><=0`. Taking limits gives `||d||_2^2<=0`, contradicting `||d||_2=1`. Thus a finite H exists. No general Hoffman/Farkas theorem or invalid normalization of d_n into Delta is used.

Apply the simplex-slice estimate directly to the full input law. If E^c is nonempty, define

`F={u in Delta(A):uW=q*, sum_{x outside E}u_x=0}=Pi`

and let B encode the affine equations `uW=q*` and `sum_{x outside E}u_x=0`. This slice is nonempty because a CAID exists. At P, the residual norm is at most `r+t`; hence `dist_2(P,Pi)<=H(r+t)`. If E^c is empty, omit the second equation, so F={u in Delta(A):uW=q*}=Pi and the residual is r; if Pi=Delta, the distance is identically zero. For nonempty E^c, `eta t>=eta t^2` since t<=1, and set `c0=min(eta,1/2)`. In the E^c-empty branch set `c0=1/2`. Combining the gap and Pinsker terms gives

`C-I(P,W)>=c0(t^2+r^2)>=alpha dist_2(P,Pi)^2`

for a positive alpha, since `(r+t)^2<=2(r^2+t^2)` (and the empty-complement branch uses `dist<=Hr`). This establishes the global quadratic gap without normalizing or renormalizing a truncated input vector. It is the canonical proof route; the Cao–Tomamichel corrected normal-cone proof remains source context but is not a dependency of this local theorem.

### Constant-composition meta-converse

Let an (n,M) deterministic-encoder code have all codewords of one empirical type P and average error e_n. Use Q_n=(PW)^n as auxiliary output law. Under every codeword x^n of type P, the log likelihood

`L=sum_{i=1}^n ln[W(Y_i|x_i)/(PW)(Y_i)]`

has the same distribution, independent of coordinate ordering: its mean is nI(P,W), variance nV(P), and total centered third moment nT(P). All ratios are defined on the reachable support. For a randomized decoder with disjoint/subprobability decoding functions d_m(y^n), split each success integral at `L=ln M-gamma`. The likelihood below threshold contributes at most exp(ln M-gamma) times its Q_n decoding probability; averaging over messages cancels M and decoder cells sum to at most one. Thus

`1-e_n<=Pr[L>ln M-gamma]+e^-gamma`, equivalently `F_L(ln M-gamma)<=e_n+e^-gamma`.

The boundary convention covers atoms and does not invoke NP test attainment. For P in a fixed neighborhood of Pi, uniform array Berry–Esseen gives

`sup_z |F_L(nI(P,W)+sqrt(nV(P))z)-Phi(z)|<=B/sqrt(n)`

with B uniform in P,n, using V>=v0 and T<=T_max. Set gamma=(1/2)ln n and e_n=epsilon+n^(-1/2). The exact split implies

`Phi((ln M-gamma-nI)/sqrt(nV))<=epsilon+O(n^(-1/2))`.

The inverse normal cdf is Lipschitz on a compact neighborhood of epsilon, so uniformly for these types

`ln M<=nI(P,W)+sqrt(nV(P))z_epsilon+(1/2)ln n+O(1)`.

Put a=-z_epsilon>0 and take nearest P* in Pi. Lipschitz continuity of sqrt(V), the quadratic gap, and V(P*)>=V_min give

`nI(P,W)-a sqrt(nV(P))<=nC-a sqrt(nV_min)-n alpha d^2+a L sqrt(n)d`

where d=||P-P*||_2. Maximizing the last two terms over d>=0 costs at most `a^2L^2/(4alpha)`, so the desired converse follows for all near types. For types at distance at least the fixed neighborhood radius, compactness gives I(P,W)<=C-eta0. Chebyshev and the global variance bound B2 show that if ln M-gamma exceeds nI(P,W)+K sqrt(n), then `F_L>=1-B2/K^2`, which contradicts the exact threshold bound for K chosen so `1-B2/K^2>epsilon+1/4` and n large. Thus far types satisfy `ln M<=n(C-eta0)+K sqrt(n)+gamma`, strictly below the target asymptotic upper bound for large n. This also covers V(P)=0 types without a Berry–Esseen lower-variance assumption away from Pi.

### Arbitrary-code converse

For an arbitrary average-error-epsilon code, retain only messages whose individual error is at most epsilon+n^(-1/2). Markov’s inequality guarantees a retained fraction at least `1/(1+epsilon sqrt(n))`. At most (n+1)^|A| types occur, so one type subcode has size at least the retained size divided by this polynomial and maximal error at most epsilon+n^(-1/2). Apply the constant-composition converse. The expurgation and type-selection losses total O(ln n). Since M_max*<=M_av*, this is also a maximal-error upper bound. A generic type subcode before expurgation would not preserve the epsilon criterion; the expurgation step is load-bearing.

If operational definitions allow stochastic encoders, fix the decoder and replace each message’s input distribution by a lexicographically first input word maximizing that message’s success probability. This cannot increase any message error, so deterministic encoders suffice. This does not derandomize shared encoder-decoder randomness; the theorem model includes none.

### Achievability and maximal-error conversion

Choose P* in Pi attaining V_min. Under iid P*W, S_n=sum_i i(X_i;Y_i) has mean nC, variance nV_min by the KKT identity, and finite centered third moment. Berry–Esseen gives uniform CDF error B0/sqrt(n). The one-shot DT bound yields a deterministic codebook with average error at most E min{1,((M-1)/2)e^(-S_n)}. For gamma=(1/2)ln n and

`t_n=nC+sqrt(nV_min)Phi^(-1)(epsilon-(B0+2)/sqrt(n))`,

choose M>=2 so `ln((M-1)/2)+gamma<=t_n` and `ln M>=t_n-gamma-O(1)`, e.g. M=1+floor(2 exp(t_n-gamma)). Splitting at t_n gives error at most

`epsilon-(B0+2)/sqrt(n)+B0/sqrt(n)+1/sqrt(n)=epsilon-1/sqrt(n)`.

The inverse-cdf Lipschitz bound gives `t_n=nC+sqrt(nV_min)z_epsilon-O(1)`, so average-error achievability loses at most (1/2)ln n+O(1). Expurgating to messages with individual error at most epsilon retains a fraction at least `1/(epsilon sqrt(n))`, losing another O(ln n), and gives maximal-error achievability. The finite-code duplicate-codeword issue is harmless: for epsilon<1/2 no two retained messages can share a deterministic codeword, as their correct-decoding probabilities would sum above one. V_min>0 implies C>0; otherwise every point mass is a CAID and has zero conditional variance. Hence M>=2 and exponential growth hold for large n, with finite exceptions absorbed in the asymptotic constant.

This theorem does not cover costs, epsilon>=1/2, zero dispersion, an exact third-order coefficient, or uniformity in epsilon. These are distinct claims, not unresolved status of this fixed-epsilon branch. The proof uses the local DT/array-Berry–Esseen suppliers and the local finite output/KKT, Pinsker/affine-slice capacity-gap suppliers above; it does not invoke the uncorrected PPV converse. The independent auditor read the complete final r3 supplement and checked this development against it; no remaining load-bearing gap was found in this stated regime. This is local scaffold proof development, not production acceptance.


## Independent finite quantization and trellis developments


Independent research development for the owner-authorized category expansion. No production or acceptance claim. Natural logarithms are used unless bit lengths are stated explicitly.

## Finite quantizers and centroid minimization

For a Borel law P on R^d, d>=1, with finite second moment, a k-level reproduction tuple c=(c_1,...,c_k), k>=1, defines Q_c(x) as the smallest index minimizing ||x-c_j||^2. Its cell j is the intersection of {||x-c_j||<||x-c_l||} for l<j and {||x-c_j||<=||x-c_l||} for l>j, hence Borel. The distortion J(c)=E||X-c_{Q_c(X)}||^2 is finite: it is at most 2E||X||^2+2 max_j||c_j||^2. Cells may be empty and centers may coincide; no unproved distinctness assumption is imposed.

For nonempty finite weighted data x_i in R^d with weights w_i>0, sum_iw_i=1, and a cluster S with weight W_S>0, its centroid mu_S=sum_{i in S}w_i x_i/W_S uniquely minimizes the cluster squared error. Expanding x_i-c=(x_i-mu_S)+(mu_S-c) and summing gives the exact identity

sum_{i in S}w_i||x_i-c||^2=sum_{i in S}w_i||x_i-mu_S||^2+W_S||c-mu_S||^2.

The cross term vanishes because sum_{i in S}w_i(x_i-mu_S)=0. Empty clusters have cost zero for every center, so a deterministic empty-cluster policy is essential.

## Exact finite-data Lloyd procedure and termination

Inputs: N>=1 weighted data points as above, k>=1 initial centers c_j^0, and fixed index orders. Use exact comparisons/arithmetic (or rational inputs for an ordinary exact rational implementation). At iteration t assign every point to its nearest center with smallest-index tie rule. Replace each nonempty cluster center by its weighted centroid; leave each empty-cluster center unchanged. If all centers equal their previous values, output the current centers/assignments and stop; otherwise repeat.

Assignment minimizes cost at fixed centers. The centroid identity shows that every nonempty-center change strictly decreases the assigned cost, and the next assignment cannot increase it. Thus if centers change the objective J(c) strictly decreases. Each center at every iteration belongs to the finite set consisting of its own initial value plus centroids of nonempty subsets of the N data points. There are at most 2^N choices per coordinate center, hence at most 2^(Nk) ordered center configurations. A strict-decrease iteration cannot repeat a configuration. Therefore the procedure terminates after finitely many iterations (this crude bound is exponential, not an efficiency claim). At termination every nonempty center is its assigned centroid and every assigned point is nearest to its center; it is a coordinatewise minimizer, with no global-optimum claim. One iteration takes O(Nkd) scalar operations/comparisons plus O(Nd+kd) centroid work. These are exact-arithmetic counts; rational bit complexity depends on input sizes, and arbitrary-real equality needs the declared comparison oracle.

Global empirical optimum exists by a separate finite algorithm: enumerate every assignment a:[N]->[k], compute each nonempty cluster centroid (use x_1 for empty clusters), evaluate its exact weighted cost, and keep the first minimum in a fixed enumeration. There are k^N assignments, each processed with O((N+k)d) arithmetic work. Any centers/assignment pair is improved or preserved by replacing its centers with these centroids, and nearest reassignment improves or preserves again. Hence enumeration attains the global joint minimum and its nearest-center quantizer is globally optimal. This proves existence/correctness independently of Lloyd's local iteration.

A concrete suboptimal Lloyd fixed point: equal weights on {0,1,4,5,9}, k=2, centers (5/2,9). Its nearest clusters are {0,1,4,5} and {9}, already centered, with total unnormalized cost 17 and average 17/5. The alternative centers (1/2,6), clusters {0,1} and {4,5,9}, have costs 1/2 and 14, average 29/10<17/5. All nearest comparisons are strict, so this counterexample does not depend on ties.

## Restricted one-dimensional compact compander theorem

Let a<b, let f,g be positive C^1 functions on [a,b], with integral f=integral g=1. P has density f on [a,b] and zero outside. Define G(x)=integral_a^x g, its inverse phi:[0,1]->[a,b], boundaries b_j=phi(j/N), and reproduction r_j=phi((j-1/2)/N), j=1,...,N. Quantize each cell [b_{j-1},b_j), putting endpoint b in the final cell. This is a Borel N-level quantizer. Its mean squared error D_N satisfies

lim_{N->infinity} N^2 D_N=(1/12)integral_a^b f(x)/g(x)^2 dx.

Proof: positivity/compactness bound g away from zero. The inverse-function rule gives phi'=1/(g circ phi); g in C^1 makes phi'' continuous bounded. Write F(u)=f(phi(u))/g(phi(u)), a C^1 function with bounded derivative. On the u-cell of midpoint v_j=(j-1/2)/N, uniform Taylor estimates give phi(u)-phi(v_j)=phi'(v_j)(u-v_j)+O((u-v_j)^2) and F(u)=F(v_j)+O(|u-v_j|). Therefore

F(u)[phi(u)-phi(v_j)]^2=F(v_j)phi'(v_j)^2(u-v_j)^2+O(|u-v_j|^3)

with one constant independent of j,N. Integrating the symmetric cell gives its leading term F(v_j)phi'(v_j)^2/(12N^3) and O(N^-4) remainder. Summing N cells and multiplying by N^2 gives (1/12)N^-1sum_jF(v_j)phi'(v_j)^2+O(N^-1). The midpoint Riemann sum converges; substitution u=G(x) gives integral_0^1F(u)phi'(u)^2du=integral_a^b f/g^2. This proves the stated limit with all endpoint/overload behavior fixed (there is no mass outside the compact support).

Among these positive normalized C^1 point densities, the leading coefficient is minimized by g*=f^(1/3)/integral f^(1/3), and its value is (1/12)(integral f^(1/3))^3. Holder with exponents 3 and 3/2 gives integral f^(1/3)=integral(f/g^2)^(1/3)g^(2/3)<=(integral f/g^2)^(1/3)(integral g)^(2/3). Equality holds exactly when g^3 is proportional to f, and f>0,C^1 makes g* admissible. This is an optimum within the stated compander asymptotic class, not a proof of all-dimensional Zador constants or unrestricted optimal high-rate quantizers. For N=2^R the quantizer has exact R-bit indices; arbitrary N needs ceil(log2 N) bits. Broader unbounded-source overload and nonsmooth/vanishing-density cases require separate arguments.

## Finite layered-trellis dynamic programming (Viterbi)

Input: N>=0, finite ordered state sets S_0,...,S_N, finite ordered edges E_t from S_{t-1} to S_t, initial costs a(s) in R union {+infinity}, terminal set F subset S_N, and edge costs c_t(e) in R union {+infinity}. Parallel edges are distinguished by their fixed edge indices. Minus infinity is excluded, so finite additions and +infinity propagation are unambiguous. A feasible path has finite initial and all finite edge costs and ends in F. Output a minimum-cost feasible path/cost, or 'no finite feasible path'. Empty state/terminal/edge sets and N=0 are legal.

Set delta_0(s)=a(s). For t=1,...,N compute delta_t(v)=min_{e:u->v}[delta_{t-1}(u)+c_t(e)], with min empty=+infinity. Store the first minimizing incoming edge in the fixed order when the minimum is finite; store no predecessor for infinite minima. At stage N choose the first terminal minimizing delta_N. If its cost is infinite (or F empty), return failure. Otherwise follow the stored edges backward and reverse them. N=0 simply minimizes the initial costs on F.

Induction proves delta_t(v) is the minimum cost of a length-t path ending at v: every such path is a prefix ending at some u followed by one incoming edge, and the displayed minimum tests exactly all these possibilities. An attained finite minimum has a stored predecessor, and induction/backtracking reconstructs a path with that cost. The finite number of stages/edges proves termination, including negative finite costs because all edges advance a layer (there are no directed temporal cycles). Complexity is O(sum_t|S_t|+sum_t|E_t|) exact additions/comparisons, with O(max_t|S_t|) cost storage plus O(sum_t|S_t|) predecessor storage; path reconstruction takes O(N). This is not a claim that every nonlinear/continuous-state decoding problem is tractable.

## Finite hidden-Markov sequence MAP interpretation

Let hidden states S be finite, initial pmf pi, transition matrices A_t row-stochastic, finite observation alphabet O and emission pmfs b_{t,s}. Given observed y_1,...,y_N, an initial state s_0 and path s_1,...,s_N have joint weight pi(s_0) product_t A_t(s_{t-1},s_t)b_{t,s_t}(y_t). The evidence is the finite sum of these nonnegative path weights. If it is positive, maximizing posterior path probability is equivalent to maximizing this joint weight. Use a(s)=-ln pi(s), edge cost -ln A_t(u,v)-ln b_{t,v}(y_t), with zero factors mapped to +infinity. Viterbi therefore returns a posterior-MAP path; its cost/log weight relation follows from the finite product logarithm identity. If evidence is zero, posterior conditioning is undefined and the algorithm returns 'no positive-probability path', not a fictitious MAP estimate. Deterministic tie-breaking does not change optimal probability.

Sequence MAP differs from coordinatewise marginal MAP. With two time points, initial probabilities (.4,.3,.3), transition row1=(0,.5,.5), rows2 and3=(1,0,0), and one uninformative observation symbol of probability one, the largest initial marginal is state1 (.4) and largest next marginal is state1 (.6). Their coordinatewise concatenation (1,1) has transition probability zero. Viterbi instead chooses (2,1) or (3,1), each of joint probability .3, using its fixed tie order. This is a complete finite counterexample; it does not rely on a diagram.


## Finite-window LZ77 procedure, correctness and framing


Research local proof development; this does not assert an asymptotic universal-rate theorem for the particular fixed-width framing below.

Let A be a known nonempty finite ordered alphabet, EOS a fresh symbol, n>=0 the known input length, and w>=1 an integer window size. For x in A^n append EOS, obtaining z_1,...,z_{n+1}. Maintain t, the next unread index, initially 1. At each t consider offsets 1<=d<=min(w,t-1). For each offset consider lengths 0<=ell<=n+1-t such that z_{t+j}=z_{t-d+j} for every 0<=j<ell. The comparison permits t-d+j>=t: these are overlapping matches, tested against the known finite input. There are finitely many candidates. Choose maximal ell and, among matching offsets at that positive length, the least d. If the maximal length is zero or there is no offset, put (d,ell)=(0,0). Emit the token (d,ell,z_{t+ell}) and set t:=t+ell+1. Stop after emitting literal EOS.

The bound ell<=n+1-t leaves one actual literal. Before the final symbol every literal lies in A. EOS cannot occur inside a match because all referenced earlier positions before EOS contain A symbols, and an overlapping equality eventually refers back to one of those earlier symbols. Thus the algorithm stops precisely when the final literal is EOS. Each step consumes at least one symbol, so it terminates in at most n+1 tokens. Exhaustive matching performs at most w(n+1)^2 symbol comparisons across all starts (a crude upper bound); no sublinear implementation claim is needed.

A concrete binary framing uses fixed-width offset ceil(log_2(w+1)), length ceil(log_2(n+1)), and literal ceil(log_2(|A|+1)) fields. A field of width zero is allowed when its sole legal value is zero. Unused binary values are invalid. The EOS literal terminates the stream. This is an unambiguous finite code on the fixed (A,n,w) model; no compression-efficiency claim follows merely from this framing.

The decoder keeps the already reconstructed prefix. A token with ell=0 must have d=0. A positive-length token must have 1<=d<=min(w,current-prefix-length). Copy ell symbols one at a time, each from distance d behind the current growing output; then append the token literal. Every copied source position is strictly earlier than the new destination, so overlapping copy is well defined. Reject malformed fields, premature EOS, output longer than n ordinary symbols, or an EOS occurring after a nonfinal ordinary-symbol count; valid EOS must follow exactly n ordinary symbols. A decoder may reject trailing bits or return the consumed length under a declared stream interface.

Induction on tokens proves exact reconstruction. Suppose the prefix before position t equals z_1,...,z_{t-1}. For copied symbol j, the source index t-d+j is less than its destination t+j. If it is before t it is correct by the outer induction; if it is at least t it is correct by induction on j. The match condition makes the copied value exactly z_{t+j}. The literal is z_{t+ell}. Therefore the new prefix agrees with z through t+ell. Termination at EOS reconstructs x exactly. The emitted fixed-width token stream is injective because this deterministic decoder recovers its unique input.

The bi-infinite match statistic used in recurrence theorems is a different mathematical object: L_m=inf{r>=1: x_1^r differs from each x_{-j+1}^{-j+r},1<=j<=m}, with inf empty=+infinity. A constant bi-infinite sequence has L_m=+infinity. It is therefore not by itself a terminating finite encoder. Any recurrence-rate theorem connecting that statistic to a concrete LZ77 variant must state truncation, window growth, overlap, phrase and framing conventions and prove their asymptotic comparison separately.


## Path-connected finite support reduction


Research proof development only; no acceptance claim.

Let S be a nonempty path-connected subset of R^d, d>=1. Every x in its convex hull is a convex combination of at most d points of S. Ordinary finite Caratheodory reduction is proved by repeatedly using an affine dependence among more than d+1 represented points: subtract a scalar multiple of the dependence from their positive weights until one first vanishes, preserving positivity, mass and barycenter. Thus reduce to d+1 points; if they are affinely dependent or a coefficient is zero, the same reduction already gives at most d.

In the remaining case translate x to 0, so 0 is strictly inside the simplex v_0,...,v_d. The vectors v_1,...,v_d are linearly independent: otherwise their affine hyperplane together with 0 has dimension at most d-1, contradicting the strictly interior position in a full-dimensional simplex. From the strictly positive barycentric equation, v_0 is in the interior of the full-dimensional simplicial cone K={-sum_{i=1}^d a_i v_i:a_i>=0}. The point v_1 is outside K, since its coordinates in the basis (-v_i) are (-1,0,...,0).

Take a continuous path in S from v_0 to v_1. It starts in the open interior of the closed cone K and ends outside K, so continuity gives a first boundary point w in S intersect boundary K. In its unique cone expansion w=-sum_i a_i v_i, all a_i>=0 and at least one is zero (the boundary of a simplicial cone corresponds to a zero coordinate). If w=0, x itself belongs to S. Otherwise divide w+sum_i a_i v_i=0 by 1+sum_i a_i. This expresses 0 as a convex combination of w and at most d-1 of the v_i, hence of at most d points of S. Translation restores the claim.

For finite two-user DM-MAC, S can be taken to be the union in R^2 of all product-input single-letter pentagons. Each contains (0,0) and is convex; any two points are connected inside S by their two line segments through (0,0). Therefore S is path-connected. Every point in its convex hull uses at most two actual pentagon points, realized by a binary time-sharing Q. Compactness of product simplexes and closed bounded rate constraints makes S compact; a two-point parametrization then makes its convex hull compact, so taking closure introduces no further time-sharing cardinality. This argument concerns rates, not the three-dimensional vector of mutual-information constraints (whose generic Caratheodory bound would differ).

For a support lemma with an auxiliary variable, the specific objective-coordinate map must itself have a path-connected domain/image. A disconnected union indexed by deterministic reconstruction maps cannot simply be declared connected. One safe route is a continuous posterior map with distortion equal to the minimum over the finitely many decoder actions for each side-information letter; that minimum is continuous. Its use must preserve the exact reconstruction and objective coordinates of the actual optimization.


## Finite quantum mixing and continuity details


Research local development; natural logarithms, finite nonzero systems. This supplements the resolvent QRE-DPI/SSA development.

For positive definite C>=D, the quadratic variational formula for <x,C^-1 x> gives C^-1<=D^-1: replacing the quadratic penalty C by D can only increase the maximum. Apply this to C+sI,D+sI and integrate the resolvent formula for the logarithm to obtain log C>=log D. Thus log is operator monotone on positive definite matrices, proved here rather than imported as an unspecified operator theorem.

Let rho=sum_i p_i rho_i, p_i>0. Positivity rho>=p_i rho_i implies supp rho_i subset supp rho. For epsilon>0, log(rho+epsilon I)>=log(p_i rho_i+epsilon I). Taking trace against rho_i preserves order. The support spectral limit gives Tr rho_i log rho>=ln p_i+Tr rho_i log rho_i. Therefore D(rho_i||rho)<=-ln p_i. Summing and expanding finite traces proves

0<=S(rho)-sum_i p_iS(rho_i)=sum_i p_iD(rho_i||rho)<=H(p).

The lower bound follows from QRE nonnegativity, itself obtained by DPI to the trace channel with scalar output state 1. Zero weights are omitted. This proves the cq mixing upper bound without treating quantum conditional entropy as always nonnegative.

A state rho_AB has a finite spectral purification |psi>_ABC=sum_j sqrt(lambda_j)|v_j>_AB tensor |j>_C. Its AB marginal is rho_AB by direct partial trace. For a pure bipartition represented by coefficient matrix M in ordered orthonormal bases, the two marginals have matrices MM* and the transpose/conjugate version of M*M; their nonzero eigenvalues coincide: if M*M v=lambda v with lambda>0 then Mv is a nonzero eigenvector of MM* with eigenvalue lambda, and the inverse map is M*/lambda. This also preserves multiplicities. Thus S(AB)=S(C) and S(B)=S(AC). Subadditivity implies S(B)<=S(A)+S(AB), so -ln d_A<=S(A|B)<=ln d_A, the upper bound following directly from subadditivity and S(A)<=ln d_A. The latter follows from nonnegative divergence to I_A/d_A.

For omega_AB=sum_i p_i rho_i, append a classical flag X to obtain sum_i p_i |i><i| tensor rho_i. Listing eigenvalues gives S(A|BX)=sum_i p_iS(A|B)_rho_i. SSA gives S(A|B)_omega>=S(A|BX). For the upper bound use the just-proved mixing upper bound for AB and entropy concavity for B to get S(A|B)_omega<=sum_i p_iS(A|B)_rho_i+H(p). Hence conditional mixing has a single H(p) budget.

For states rho,sigma on AB put delta=||rho-sigma||_1/2. If delta=0 equality is immediate. Otherwise rho-sigma=delta(tau_+-tau_-) is the positive/negative spectral decomposition normalized to states (traces agree because Tr(rho-sigma)=0). Define t=delta/(1+delta) and omega=(rho+delta tau_-)/(1+delta)=(sigma+delta tau_+)/(1+delta). Apply the preceding conditional mixing lower and upper estimates to both decompositions. Subtracting yields

|S(A|B)_rho-S(A|B)_sigma|<=delta |S(A|B)_tau_+-S(A|B)_tau_-|+(1+delta)h(t)
<=2delta ln d_A+(1+delta)h(t).

For ordinary entropy the same subtraction and 0<=S(tau)<=ln d give |S(rho)-S(sigma)|<=delta ln d+(1+delta)h(t). These nonsharp estimates suffice for continuity in finite coding converses; the factor dimension and error convention remain explicit.


## Complete quantitative Berry–Esseen local development


Supplement to the channel-capacity handoff. The complete source read for this note is Roman Vershynin, *Two Friendly Proofs of the Berry–Esseen Theorem*, arXiv:2602.06234v2 (30 July 2026), 17 pages. The entire v2, pp. 1–17, was extracted and read consecutively, including both the Fourier proof (Part I, §§1–5) and the independent Stein proof (Part II, §§6–11), acknowledgements, and references. The arXiv page identifies the version and author and assigns CC BY 4.0. The local PDF/text carriers, hash, extraction method, and read extent are recorded as a new supplement entry in the r3 source manifest and reading ledger. PDF pp. 8–9 were rendered to check the ρ notation and Fourier cutoff against the extracted text.

The argument below develops the Fourier proof locally. It gives a finite-third-moment quantitative supplier, unlike the published CLT items, which only yield convergence or a second-order little-o expansion. The library’s existing Fourier inversion and normal-law items carry choice assumptions; the current supplier contract therefore has to state those assumptions if this route is used. The Berry–Esseen inequality itself is classically valid without choice. Part II of the read source supplies an alternative Stein proof if the category needs a route with a different foundational dependency closure.

## The exact statement

First prove the independent-sum normalization. Let \(X_1,\ldots,X_n\) be independent real random variables with

\[
\mathbb E X_k=0,\qquad \mathbb E X_k^2=\sigma_k^2<\infty,
\qquad \rho_k^3:=\mathbb E|X_k|^3<\infty,
\qquad \sum_{k=1}^n\sigma_k^2=1.
\]

Write \(S_n=\sum_{k=1}^nX_k\), \(\rho^3=\sum_k\rho_k^3\), and let \(G\sim N(0,1)\). There is a universal finite constant \(C_{BE}\) such that, for every integer \(n\ge1\),

\[
\sup_{a\in\mathbb R}\left|\mathbb P\{S_n\le a\}-\Phi(a)\right|\le C_{BE}\rho^3.
\tag{BE-array}
\]

Consequently, for iid real \(X_1,X_2,\ldots\) with mean \(\mu\), variance \(0<\sigma^2<\infty\), and centered third absolute moment \(\beta_3=\mathbb E|X_1-\mu|^3<\infty\),

\[
\sup_{x\in\mathbb R}\left|\mathbb P\!\left\{\frac{\sum_{k=1}^nX_k-n\mu}{\sigma\sqrt n}\le x\right\}-\Phi(x)\right|
\le \frac{C_{BE}\,\beta_3}{\sigma^3\sqrt n},\qquad n\ge1.
\tag{BE-iid}
\]

No lattice, density, nonarithmetic, or identical-distribution condition is needed for (BE-array); iid is needed only for the displayed simplification of its Lyapunov fraction. Finite \(\beta_3\) and positive variance are the exact hypotheses for (BE-iid). If \(\sigma^2=0\), then \(X_1=\mu\) almost surely and the standardization in (BE-iid) is undefined; state the degenerate sum separately instead of dividing by \(\sigma\). The constant \(C_{BE}\) is universal and is not claimed optimal.

For the iid reduction put \(Z_k=(X_k-\mu)/(\sigma\sqrt n)\). Then the \(Z_k\) are independent and centered, \(\sum_k\mathbb E Z_k^2=1\), and

\[
\sum_k\mathbb E|Z_k|^3
=n\frac{\beta_3}{\sigma^3n^{3/2}}
=\frac{\beta_3}{\sigma^3\sqrt n}.
\]

Apply (BE-array) to \(Z_1,\ldots,Z_n\).

## Fourier smoothing kernel and CDF inequality

Use the Fourier convention \(\widehat f(u)=\int_{\mathbb R}e^{-2\pi iux}f(x)\,dx\). Choose a nonzero, nonnegative, even \(\psi\in C_c^\infty(\mathbb R)\) with \(\operatorname{supp}\psi\subseteq[-1/(4\pi),1/(4\pi)]\), and set \(\eta=\widehat\psi\), \(Z_0=\int\eta(x)^2\,dx\), and \(\kappa=\eta^2/Z_0\). One explicit such bump is \(\psi(x)=\exp[-1/(1-(4\pi x)^2)]\) for \(|x|<1/(4\pi)\) and zero otherwise; repeated differentiation gives a polynomial in the reciprocal distance times an exponentially decaying factor at each endpoint, so every derivative extends by zero. Because \(\psi\) is even and real, \(\eta\) is real and even. It is Schwartz and \(\eta(0)=\int\psi>0\), so \(0<Z_0<\infty\). Therefore \(\kappa\) is an even nonnegative Schwartz probability density. The Schwartz product/convolution law gives \(\widehat\kappa=Z_0^{-1}(\psi*\psi)\), hence \(\operatorname{supp}\widehat\kappa\subseteq[-1/(2\pi),1/(2\pi)]\); also \(|\widehat\kappa|\le\|\kappa\|_1=1\). Define the finite kernel constant \(b=\int |x|\kappa(x)\,dx\).

For random variables \(X,Y\), suppose \(Y\) has a density bounded by \(M\), where \(0<M<\infty\). Let

\[
h=\mathbf 1_{(-\infty,0]}*\kappa,
\qquad S_\varepsilon=\sup_{a\in\mathbb R}\left|\mathbb E h\!\left(\frac{X-a}{\varepsilon}\right)-\mathbb E h\!\left(\frac{Y-a}{\varepsilon}\right)\right|.
\]

The required local smoothing statement is

\[
\sup_a|F_X(a)-F_Y(a)|\le 2S_\varepsilon+18bM\varepsilon.
\tag{S}
\]

Here is a proof with the jump and tail steps explicit. First take \(\varepsilon=1\). Let \(\Delta=F_X-F_Y\) and \(D=\sup|\Delta|\). If \(D=0\), the claim is immediate. If \(\Delta\) is positive at a point \(a\) with value at least \(0.9D\), then for \(0\le t\le D/(3M)\), monotonicity of \(F_X\) and the density bound on \(F_Y\) give

\[
\Delta(a+t)\ge\Delta(a)-Mt\ge0.9D-D/3>D/2.
\]

If instead \(\Delta(a)\le-0.9D\), then for \(0\le t\le D/(3M)\), monotonicity of \(F_X\) to the left and the same Lipschitz bound give

\[
\Delta(a-t)\le\Delta(a)+Mt\le-0.9D+D/3<-D/2.
\]

At least one of these two signed suprema equals \(D\), and the definition of supremum gives an appropriate point \(a\). In either case, centering the resulting one-sided interval gives a symmetric interval \([a_0-T,a_0+T]\) of radius \(T=D/(6M)\) on which \(\Delta\) has constant sign and magnitude at least \(D/2\). By Tonelli on the nonnegative indicator convolution,

\[
\Delta_\kappa(a_0):=\mathbb E h(X-a_0)-\mathbb E h(Y-a_0)
=\int\Delta(a_0+y)\kappa(y)\,dy.
\]

Since \(\kappa\) is a probability density and \(\int_{|y|>T}\kappa(y)\,dy\le b/T\), the plateau part has the plateau sign and the tail contributes at worst \(-D\) in that sign. Thus

\[
|\Delta_\kappa(a_0)|
\ge \frac D2\left(1-\frac bT\right)-D\frac bT
=\frac D2-\frac{3Db}{2T}
=\frac D2-9bM.
\]

It follows that \(D\le2\sup_a|\Delta_\kappa(a)|+18bM\). For general \(\varepsilon>0\), apply this result to \(X/\varepsilon,Y/\varepsilon\); the CDF discrepancy is unchanged, \(Y/\varepsilon\) has density bound \(\varepsilon M\), and the smoothed term is exactly \(S_\varepsilon\). This proves (S). The proof covers atoms of \(X\); it uses only the bounded density of \(Y\).

Now prove the Fourier bound for the smoothed term. For \(R>0\), set

\[
h_R=\mathbf1_{(-R,0]}*\kappa.
\]

For each derivative order \(j\), \(h_R^{(j)}(x)=\int_{-R}^0\kappa^{(j)}(x-y)\,dy\). Since \(y\) ranges over a bounded interval and \(\kappa\) is Schwartz, every derivative of \(h_R\) decays faster than any power; hence \(h_R\in\mathcal S\). Fubini is justified by

\[
\int_{\mathbb R}\int_{-R}^0|\kappa(x-y)|\,dy\,dx=R\|\kappa\|_1=R.
\]

It gives \(\widehat h_R=\widehat{\mathbf1_{(-R,0]}}\widehat\kappa\). For \(u\ne0\),

\[
\left|\widehat{\mathbf1_{(-R,0]}}(u)\right|
=\left|\frac{e^{2\pi iuR}-1}{2\pi iu}\right|
\le\frac1{\pi|u|};
\]

the support of \(\widehat h_R\) is contained in \([-1/(2\pi),1/(2\pi)]\). Fourier inversion on Schwartz space and Fubini against the finite laws of \(X,Y\) therefore yield

\[
\left|\mathbb E h_R\!\left(\frac{X-a}{\varepsilon}\right)-\mathbb E h_R\!\left(\frac{Y-a}{\varepsilon}\right)\right|
\le\frac1\pi\int_{-1/\varepsilon}^{1/\varepsilon}
\frac{|\varphi_X(t)-\varphi_Y(t)|}{|t|}\,dt,
\tag{F}
\]

where \(\varphi_X(t)=\mathbb E e^{itX}\); the integrand at \(t=0\) may be assigned any value because that single point does not affect the Lebesgue integral. To see the constant and range, inversion first gives an integral in \(u\) with \(|\widehat h_R(u)|\le1/(\pi|u|)\), then substitute \(t=2\pi u/\varepsilon\). The factor is \(1/\pi\), and \([-1/\varepsilon,1/\varepsilon]\) is the transformed support. As \(R\uparrow\infty\), \(h_R\uparrow h\) pointwise with \(0\le h_R\le1\); monotone convergence under each probability law passes (F) to \(h\). Thus (F) bounds \(S_\varepsilon\). If the right side is infinite the inequality is vacuous; in the application below it is finite by the characteristic-function estimate.

Combining (S) and (F) gives the local Esseen inequality

\[
\sup_a|F_X(a)-F_Y(a)|
\le\frac2\pi\int_{-1/\varepsilon}^{1/\varepsilon}
\frac{|\varphi_X(t)-\varphi_Y(t)|}{|t|}\,dt+18bM\varepsilon.
\tag{E}
\]

No unsmoothed inversion of a discontinuous CDF is used.

## Finite-third-moment characteristic-function estimate

The central estimate is for the independent array in (BE-array). Put \(r_k=(\mathbb E|X_k|^3)^{1/3}\), so \(r_k^3=\rho_k^3\), and \(r=(\sum_k r_k^3)^{1/3}=\rho\). The published finite-measure Lp inclusion on the law of \(X_k\) gives \(\sigma_k=(\mathbb E|X_k|^2)^{1/2}\le(\mathbb E|X_k|^3)^{1/3}=r_k\). For each real \(u\), three applications of the fundamental theorem of calculus to \(s\mapsto e^{isu}\) give

\[
e^{iu}=1+iu-\frac{u^2}{2}+\frac{(iu)^3}{2}\int_0^1(1-s)^2e^{isu}\,ds.
\]

The last term has modulus at most \(|u|^3/6\), since \(|e^{isu}|=1\) and \(\int_0^1(1-s)^2ds=1/3\). Taking expectation with \(u=tX_k\) is legitimate because \(\mathbb E|X_k|^3<\infty\); the mean-zero and variance assumptions then give

\[
\varphi_k(t)=1-\frac{\sigma_k^2t^2}{2}+R_k(t),
\qquad |R_k(t)|\le\frac{r_k^3|t|^3}{6}.
\tag{T}
\]

If \(r_k=0\), then \(\mathbb E|X_k|^3=0\), so the published zero-integral criterion gives \(X_k=0\) almost surely and its factor is identically one. Otherwise, for \(|t|\le1/r_k\), write \(a=\sigma_k^2t^2\), \(q=r_k^3|t|^3\), and \(z=\varphi_k(t)-1=-a/2+R_k(t)\). Then \(0\le a,q\le1\), \(a^2\le q\), and \(|z|\le1/2+1/6=2/3\). Define \(L(z)=\sum_{m=1}^\infty(-1)^{m+1}z^m/m\) on \(|z|<1\). Uniform absolute convergence on \(|z|\le2/3\) permits termwise differentiation there, giving \(L'(z)=1/(1+z)\). The derivative of \(e^{L(z)}/(1+z)\) is therefore zero, and its value at \(z=0\) is one; thus \(e^{L(z)}=1+z=\varphi_k(t)\), which fixes the logarithm branch. Its series also gives explicitly
\[
|\log(1+z)-z|
\le\sum_{m=2}^\infty\frac{|z|^m}{m}
\le\frac{|z|^2}{2(1-|z|)}
\le\frac32|z|^2.
\]
Since \(|z|\le a/2+q/6\), we have \(|z|^2\le2(a^2/4+q^2/36)\le5q/9\). Also \(aq\le q\) and \(q^2\le q\); equation (T) then implies

\[
\log\varphi_k(t)=-\frac{\sigma_k^2t^2}{2}+O(r_k^3|t|^3),
\qquad |t|\le1/r_k,
\tag{L}
\]

with one universal O-constant. In particular, for \(|t|\le1/r\) every factor satisfies (L), and independence gives

\[
\varphi_{S_n}(t)=\exp\!\left(-\frac{t^2}{2}+\Theta(t)\rho^3|t|^3\right),
\qquad |\Theta(t)|\le C_0.
\tag{P}
\]

Also, for every real \(t\),

\[
|\varphi_{S_n}(t)|\le\exp\!\left(-\frac{t^2}{2}+C_0\rho^3|t|^3\right).
\tag{A}
\]

For a factor with \(|t|\le1/r_k\), (A) follows from (L). If \(|t|>1/r_k\), use \(|\varphi_k(t)|\le1\), while \(\sigma_k^2t^2\le r_k^2t^2<r_k^3|t|^3\); increasing \(C_0\) makes the factorwise right-hand side at least one. Multiply these inequalities, using \(\prod_k|\varphi_k|\le\exp\sum_k(-\sigma_k^2t^2/2+C_0r_k^3|t|^3)\), to obtain (A).

Choose a fixed \(c_0>0\) so small that \(C_0c_0\le1/4\). If \(|t|\le c_0/\rho^3\), then \(C_0\rho^3|t|^3\le t^2/4\). In the subrange \(|t|\le1/\rho\), combine (P) with \(|e^z-1|\le|z|e^{|z|}\) to get

\[
|\varphi_{S_n}(t)-e^{-t^2/2}|
\le C_1\rho^3|t|^3e^{-t^2/4}.
\]

In the remaining subrange \(1/\rho<|t|\le c_0/\rho^3\), (A) and the Gaussian term are each at most \(e^{-t^2/4}\), and \(\rho^3|t|^3>1\); the same inequality follows after increasing \(C_1\). If that subrange is empty, the first case already covers the whole interval. Hence

\[
|\varphi_{S_n}(t)-e^{-t^2/2}|
\le C_1\rho^3|t|^3e^{-t^2/4},
\qquad |t|\le c_0/\rho^3.
\tag{CF}
\]

All constants here are absolute. This third-order estimate is stronger than the existing library’s second-order statement \(\varphi_X(t)=1-\sigma^2t^2/2+o(t^2)\): the uniform \(O(\mathbb E|X|^3|t|^3)\) term and the damping in (CF) are new proof obligations.

## Finish the theorem

Apply (E) with \(X=S_n\), \(Y=G\sim N(0,1)\), density bound \(M=(2\pi)^{-1/2}\), and \(\varepsilon=\rho^3/c_0\). Then the integration interval is \([-c_0/\rho^3,c_0/\rho^3]\), and (CF) gives

\[
\begin{aligned}
\sup_a|F_{S_n}(a)-\Phi(a)|
&\le \frac{2C_1}{\pi}\rho^3\int_{\mathbb R}t^2e^{-t^2/4}\,dt
+\frac{18b}{c_0\sqrt{2\pi}}\rho^3\\
&=:C_{BE}\rho^3.
\end{aligned}
\]

The Gaussian integral in the first term is finite, and all other factors are fixed kernel or numerical constants. This proves (BE-array) for every \(n\), including \(n=1\). No asymptotic limit in \(n\) is used.

## Existing library supplier map and exact gaps

The following live page/item interfaces were inspected; all listed pages currently have status published.

| Existing page and item IDs | Supplies to this proof | Exact boundary |
|---|---|---|
| [probability/characteristic-functions-inversion-and-continuity.md](../../../../library/probability/characteristic-functions-inversion-and-continuity.md): def-characteristic-function-of-a-real-random-variable, lem-basic-properties-of-characteristic-functions, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-moments-give-derivatives-of-the-characteristic-function | Definition \(\varphi_X(t)=\mathbb E e^{itX}\); \(|\varphi_X|\le1\); factorization for finite independent sums; moment differentiability when the relevant absolute moment exists. | No finite-third-moment \(O(|t|^3)\) remainder or normal-distance bound. The derivative lemma is not a substitute for the Taylor/log estimate (T)–(CF). |
| [real-analysis/darboux-lhopital-and-taylor.md](../../../../library/real-analysis/darboux-lhopital-and-taylor.md): cor-taylor-remainder-bound | A uniform derivative bound gives the scalar Taylor remainder bound, usable on the real and imaginary parts of the exponential. | The complex modulus estimate in (T) is justified by the explicit integral remainder in the local proof, not by silently treating a complex-valued function as a real theorem. |
| [functional-analysis/schwartz-space-and-the-plancherel-theorem.md](../../../../library/functional-analysis/schwartz-space-and-the-plancherel-theorem.md): thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-fourier-inversion-on-schwartz-space, cor-schwartz-convolution-and-product-transform-laws, lem-schwartz-functions-and-all-derivatives-are-integrable | Schwartz decay, inversion, product/convolution transform laws, and integrability of \(\kappa\) and its derivatives. | Plancherel is not needed for this kernel normalization. The cited Fourier/inversion/convolution chain assumes countable choice. Our local proof of \(1_{(-R,0]}*\kappa\) being Schwartz and its mixed Fubini product identity is needed because the indicator is compactly supported L1 but is not itself Schwartz. |
| [items/thm-l-one-fourier-inversion.md](../../../../items/thm-l-one-fourier-inversion.md): thm-l-one-fourier-inversion (published) | An alternate inversion route for L1 functions with L1 transforms at every Lebesgue point. | It also assumes countable choice; using it does not remove the foundational premise. |
| [probability/central-limit-theorems.md](../../../../library/probability/central-limit-theorems.md): lem-characteristic-function-of-a-normal-law, lem-second-order-characteristic-function-expansion, lem-product-of-near-one-characteristic-factors, thm-lindeberg-levy-iid-central-limit-theorem | Characteristic function of the standard normal; finite-variance second-order little-o expansion; a triangular-array product limit; qualitative iid CLT. | The CLT page explicitly asserts no quantitative approximation rate. The little-o expansion has no third absolute moment constant, and the near-one product lemma does not alone yield Gaussian damping. The new proof (T)–(CF) remains necessary. |
| [probability/weak-convergence-tightness-and-representation.md](../../../../library/probability/weak-convergence-tightness-and-representation.md): def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one | Defines the standard normal reference law through its Gaussian density and supplies its total-mass-one normalization; the density is bounded by \((2\pi)^{-1/2}\). | These current carriers assume AC. Carry that premise if these existing items are used; the numerical inequality does not intrinsically require it. |
| [measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md](../../../../library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md): thm-finite-measure-l-r-includes-into-l-p-for-p-less-r | On a probability space, \(L^3\subset L^2\) with \(\|X\|_2\le\|X\|_3\), giving \(\sigma_k\le r_k\). | Apply with the law of \(X_k\), total mass one, and exponents 2 and 3. |
| [probability/central-limit-theorems.md](../../../../library/probability/central-limit-theorems.md): lem-characteristic-function-of-a-normal-law | Identifies \(\varphi_G(t)=e^{-t^2/2}\) for \(G\sim N(0,1)\). | Its current carrier assumes AC; the Fourier route’s dependency closure must retain that premise. |
| [measure-theory/product-measures-and-the-fubini-tonelli-theorems.md](../../../../library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md): thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces | Interchange the nonnegative indicator/kernel integrals and the absolutely integrable Fourier double integral. | Verify the displayed absolute-integral bound before every Fubini use; Tonelli handles only the nonnegative convolution calculations. |
| [measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md](../../../../library/measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md): thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-integral-triangle-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere | Let \(R\uparrow\infty\) in \(h_R\), justify integral limits/bounds, and handle the zero-third-moment summand. | The sequence \(R=1,2,\ldots\) is explicit; do not claim pointwise convergence alone permits expectation limits. |

The new proof dependencies are therefore substantive: (i) a band-limited nonnegative smoothing density and its finite first moment; (ii) a CDF discrepancy plateau argument that handles both signs and atoms; (iii) a Fourier bound for the smoothed discrepancy with the exact support cutoff; (iv) a logarithmic third-order characteristic-function expansion and all-frequency modulus bound; and (v) integration of the damped difference. None is supplied by the existing CLT item. The Fourier route, as stated against the current library, must carry at least the countable-choice assumption of the Schwartz Fourier theorems and the Axiom-of-Choice premise of the current standard-normal-law definition. If that extra foundational assumption is unwelcome, the same completely read source’s Part II proves Berry–Esseen via a ramp smoother, Stein ODE, derivative-increment estimate, and induction; it avoids Fourier inversion but still requires the normal-law construction assumptions in this library. Do not hide the supplier contract or claim the new lemma has been published.

## Finite-blocklength interface

The immediate coding use is a normalized iid information-density sum with positive finite variance and finite centered third absolute moment. Berry–Esseen yields a uniform CDF error \(O(n^{-1/2})\), which is what is missing from the published CLT supplier. To turn this into the \(O(\log n)\) coding remainder, the coding proof must still track the one-shot threshold/beta/DT bound and the fixed-\(\varepsilon\) quantile perturbation (for \(\varepsilon\) in a compact subset of \((0,1)\), \(\Phi^{-1}\) is locally Lipschitz); Berry–Esseen alone does not prove a channel-coding normal approximation. In particular, use the appropriate conditional information variance, the minimizing CAID when there are several, the exact cost model, and the PPV/CT correction recorded in the main r3 findings.


## Complete finite quantum relative-entropy DPI ladder

## Quantum relative-entropy DPI: finite-dimensional resolvent ladder

This supplies an alternative to adopting Wilde's much larger recoverability theorem as an unproved supplier. All spaces below are finite-dimensional complex inner-product spaces; states require nonzero spaces. Use ordinary positive operators A,B first, and natural logarithms. Define D(A||B)=tr[A(log A-log B)] on supp A subset supp B, with log evaluated spectrally on positive support and 0 log0=0; otherwise infinity. When A=0 set D=0. The expression tr(A log B) means compression to supp B, not multiplication by an undefined log0.

1. **Inverse compression.** If T>0 on K and V:H->K is an isometry, then V*(T+sI)^{-1}V >=(V*TV+sI)^{-1} for s>=0. Proof: for any x, put y=Vx and use the variational identity <y,C^{-1}y>=max_z[2 Re<y,z>-<z,Cz>] with C=T+sI. Restrict z to Vw; maximizing the resulting quadratic gives <x,(V*CV)^{-1}x>. The identity follows by completing the square with C^{1/2}; adapt inner-product argument order to the root first-linear convention. This is an operator-order assertion because it holds for every x.

2. **Operator Jensen for -log.** For t>0, -ln t=integral_0^infinity[(t+s)^{-1}-(1+s)^{-1}] ds, verified by evaluating integrals at finite R and taking R->infinity. Finite spectral calculus gives the same matrix identity in norm. Apply inverse compression to T+sI and subtract the scalar resolvent term (V*V=I); integrate finite cutoffs then pass to norm limits. Obtain -log(V*TV)<=V*(-log T)V. This locally proves the special operator-convex Jensen theorem actually used, without assuming a general operator Jensen supplier.

3. **Relative modular identity.** On the finite Hilbert space of endomorphisms with inner product <X,Y>=tr(XY*) (linear in X), define L_B(X)=BX and R_{A^{-1}}(X)=XA^{-1} for A,B>0. These commuting positive definite self-adjoint maps give Delta_{B,A}=L_B R_{A^{-1}}>0. Eigenoperator |b_j><a_i| has eigenvalue b_j/a_i. Hence log Delta(X)=(log B)X-X(log A), and <(-log Delta)A^{1/2},A^{1/2}>=tr[A(log A-log B)]=D(A||B). This eigenoperator proof supplies all logarithm/product commutation facts needed here.

4. **Joint convexity, positive definite case.** For finitely many A_i,B_i>0 and lambda_i>0 summing to one, put A=sum lambda_i A_i and B=sum lambda_i B_i. Define U_i(X)=sqrt(lambda_i) X A^{-1/2} A_i^{1/2}. With the stated Hilbert–Schmidt inner product its adjoint is U_i*(Y)=sqrt(lambda_i)Y A_i^{1/2}A^{-1/2}. Thus sum U_i*U_i=I, so U:X->directsum_i U_i(X) is an isometry. Direct multiplication gives U*(directsum Delta_{B_i,A_i})U=Delta_{B,A}. Also U_i(A^{1/2})=sqrt(lambda_i)A_i^{1/2}. Apply step 2 and evaluate on A^{1/2}; step 3 yields D(A||B)<=sum lambda_i D(A_i||B_i). Zero weights can be omitted explicitly.

5. **Support/regularization lemma.** For A,B>=0, D(A+epsilon I||B+epsilon I)->D(A||B) as epsilon downarrow0, allowing infinity. Diagonalize B: tr[A log(B+epsilon I)]=sum_j <b_j,A b_j>log(b_j+epsilon). If supp A subset supp B, every coefficient on ker B is zero, and remaining terms converge finitely; epsilon tr log(B+epsilon I)->0 because epsilon|log epsilon|->0 and there are finitely many eigenvalues. Meanwhile tr[(A+epsilon I)log(A+epsilon I)] converges by continuity of t log t at zero. If supp A not subset supp B, some diagonal coefficient of A on ker B is positive: zero quadratic form of a positive operator implies A^{1/2}v=0, so all zero coefficients on ker B would force ker B subset ker A. Thus the cross logarithmic trace diverges to minus infinity, while the entropy term stays finite; D tends to infinity. This also proves lower semicontinuity along this particular regularization; no global continuity at singular pairs is asserted. Regularizing every A_i,B_i by the same epsilon I and using the limit extends joint convexity to PSD pairs.

6. **Unitary invariance and partial-trace DPI.** Spectral conjugation and trace cyclicity give D(UAU*||UBU*)=D(A||B) for unitary U. If dim H_B=d>=1, define shift/phase unitaries X,Z on an ordered ONB by X e_j=e_{j+1 mod d}, Z e_j=exp(2pi i j/d)e_j. Direct matrix-unit summation shows d^{-2}sum_{a,b}(I tensor X^aZ^b)R(I tensor X^aZ^b)*=Tr_B(R) tensor I_B/d. Joint convexity plus unitary invariance bounds D of the averaged pair by D(A||B). Spectral eigenvalues directly give D(C tensor I/d||D tensor I/d)=D(C||D), including the support-inclusion/infinite cases. Thus D(Tr_B A||Tr_B B)<=D(A||B). d=1 is the identity; d=0 cannot carry a state and is excluded from this channel-use argument.

7. **CPTP DPI.** Use the actual finite Kraus/Stinespring supplier after checking its statement: a trace-preserving Kraus family K_j has sum K_j*K_j=I, so Vx=sum_j K_j x tensor e_j is an isometry and Phi(R)=Tr_environment(VRV*). The support/eigenvalue argument proves D(VAV*||VBV*)=D(A||B), with zero complement eigenvalues contributing zero. Partial-trace DPI now gives CPTP DPI. A channel with nonzero input and output has a nonempty Kraus family; pad with zero operators if necessary rather than introducing a zero-dimensional environment.

8. **Downstream consumer gates.** Subadditivity uses D(rho_AB||rho_A tensor rho_B)=S(A)+S(B)-S(AB) with support inclusion proved first: if v in ker rho_A then sum_j <v tensor e_j,rho_AB(v tensor e_j)>=0, all nonnegative summands vanish, forcing rho_AB to annihilate v tensor H_B; similarly for B. SSA applies partial-trace DPI to (rho_ABC,rho_A tensor rho_BC), obtaining I(A;BC)>=I(A;B), hence I(A;C|B)>=0 by finite spectral entropy algebra. Holevo's measurement bound applies CPTP DPI to each pair (rho_x,rho_bar), weights positive x only, and sums; prove block-diagonal cq entropy identity by listing eigenvalues p_x lambda_{x,j}. No quantum-capacity single-letter formula follows from any of these inequalities. Exact equality/recovery criteria require their own separate proof and are not implied by the ladder above.

This route is an independent derivation. It still requires actual local carriers for finite spectral calculus, Hilbert–Schmidt maps, trace cyclicity, isometry/Kraus dilation and finite matrix-unit twirling; the named steps are substantive intermediate obligations, not citations replacing proofs.



## Jointly measurable kernel densities and conditional KL integration

Let nu be a probability on a measurable base S and let K,L be probability kernels into a standard-Borel T. Put R_s=(K_s+L_s)/2, mu=nu R, P=nu K, Q=nu L. Both P,Q are dominated by 2mu. Choose joint measurable RN densities f,g and clip them to [0,2] (the clipping changes only mu-null sets). Their section integrals are jointly measurable by the kernel integration lemma. For each A in one countable determining algebra of T and each measurable base event B, the RN identities imply integral_B[integral_A f(s,t)R_s(dt)]nu(ds)=integral_B K_s(A)nu(ds). Equality of the bounded measurable integrands follows by testing their positive/negative difference events. A countable union of exceptional base null sets makes this identity hold simultaneously for all A, including T, for f and g. Measure uniqueness on the determining algebra then gives f(s,.)R_s=K_s and g(s,.)R_s=L_s off a SINGLE nu-null set. This constructs jointly measurable conditional densities; merely choosing an RN derivative separately in every section is insufficient.

Define psi(u,v)=u ln(u/v) when u,v>0, psi(0,v)=0 (including v=0), and psi(u,0)=infinity for u>0. It is Borel extended-real and psi(u,v)^-<=v/e. Thus C(s)=integral psi(f,g)dR_s is a measurable extended scalar with finite negative part (at most1/e) outside the exceptional set, and equals D(K_s||L_s)>=0 there. Set C=0 on the exceptional base set. The set of sections failing K_s<<L_s is measurable because it is {integral 1_{g=0}f dR_s>0}. If that set has positive nu mass, P not<<Q and both D(P||Q) and integral C dnu are infinite. Otherwise f/g, zero on g=0, is the joint RN density dP/dQ; Tonelli on positive/negative parts (global negative bound1/e) yields

D(nu K||nu L)=integral D(K_s||L_s)nu(ds).

For different base marginals nu<<beta, put alpha=dnu/dbeta and S0=nu L. Then dS0/d(beta L)=alpha(s); P=nu K is dominated by beta L iff it is dominated by S0, since P has no mass where alpha=0 and alpha is finite/positive nu-a.e. In the dominated case the density factors as alpha(s) dP/dS0. Integrate the log factorization: the alpha logarithm has negative integral<=1/e under nu, and the conditional logarithm has negative integral<=1/e by the shared-base lemma, so no infinity subtraction occurs. Obtain D(nu K||beta L)=D(nu||beta)+integral D(K_s||L_s)nu(ds). In the non-dominated case both appropriate sides are infinity. If nu not<<beta the joint and marginal divergences are already infinity; the extended equality holds for any explicitly selected L, but the conditional scalar need not be version-invariant. This lemma supplies the exact general-chain-rule interface and measurability/AC failure cases.



## Complete scalar Gaussian squared-error RDF, including degenerate and zero-distortion cases

Let X have N(0,sigma²) law with sigma²>0, and let Y be any real reproduction with delta=E(X-Y)²<=D<infinity. For D>0 compare the actual joint P_XY with Q_XY=P_Y(dy)phi_D(x-y)dx, where phi_D is the everywhere positive N(0,D) density. Both Q_XY and P_X tensor P_Y have positive densities relative to Lebesgue tensor P_Y, so they are equivalent. Their log-density ratio is the finite quadratic expression

ln[dQ_XY/d(P_X tensor P_Y)] = (1/2)ln(sigma²/D) - (X-Y)²/(2D) + X²/(2sigma²).

This expression is integrable under P_XY because both stated second moments are finite. If P_XY fails absolute continuity with respect to either reference, it fails for both and I(X;Y)=infinity, making the desired inequality immediate. Otherwise the KL density multiplication identity, with finite integrable cross term and finite negative part of KL, gives the extended identity

I(X;Y)=D(P_XY||Q_XY)+(1/2)ln(sigma²/D)+1/2-delta/(2D) >= (1/2)ln(sigma²/D).

No density for Y, finite conditional differential entropy, or subtraction of infinite entropies is assumed. Nonnegative MI gives the additional lower bound zero. For 0<D<sigma², take independent Y~N(0,sigma²-D), Z~N(0,D), and set X=Y+Z. Orthogonal invariance of standard Gaussian products proves X~N(0,sigma²). Its conditional X|Y density is exactly phi_D(x-Y), so P_XY=Q_XY, delta=D, and the displayed identity gives equality. For D>=sigma² take Y=0, giving distortion sigma² and MI zero.

For D=0, the nonnegative squared error has zero expectation, so X=Y almost surely. The measurable diagonal has P_XY mass one and (P_X tensor P_Y) mass zero because the Gaussian marginal is nonatomic; hence I(X;Y)=infinity. This proves R(0)=infinity without an unproved singular differential-entropy limit. If sigma²=0 instead, X=0 almost surely and Y=0 achieves zero distortion and MI zero, so R(D)=0 for every D>=0. Thus the positive-variance formula and degenerate formula are distinct explicit branches. These are information-RDF proofs; operational equalities require the appropriate separate source coding theorem.


## Classical leftover hashing with side information: full finite proof

Let X,Z be finite-valued with joint law p, let H be a finite seed independent of (X,Z), and let h_H:X->[M] be two-universal: for each distinct x,x', P_H[h_H(x)=h_H(x')]<=1/M. Define K=h_H(X). Define average conditional guessing probability g(X|Z)=sum_z max_x p(x,z), including zero-mass z with contribution zero; H_min(X|Z)=-log_2 g. This is a precise classical definition, distinct from worst-case min_z entropy and from quantum conditional min-entropy. The seed is public, so the target comparison is P_{KHZ} versus U_M tensor P_{HZ}.

For p_Z(z)>0 let a_x=p(x|z), b_{h,z}(k)=sum_{x:h_h(x)=k}a_x. Finite expansion and universality give

E_H sum_k b_{H,z}(k)^2 =sum_x a_x^2 +sum_{x!=x'}a_xa_{x'}P_H[h_H(x)=h_H(x')] <=1/M+(1-1/M)sum_xa_x^2.

Hence E_H sum_k (b_{H,z}(k)-1/M)^2 <=sum_xa_x^2. Cauchy–Schwarz first over k and then over the probability weights (H,Z) gives

TV(P_{KHZ},U_M P_{HZ})=(1/2)sum_{h,z}p_H(h)p_Z(z)sum_k|b_{h,z}(k)-1/M| <=(1/2)sqrt[M sum_z p_Z(z)E_H sum_k(b_{H,z}(k)-1/M)^2] <=(1/2)sqrt[M sum_z p_Z(z)sum_xp(x|z)^2] <=(1/2)sqrt[M g(X|Z)].

The last step uses sum_x a_x^2<=max_x a_x. Therefore M=2^ell gives TV <=(1/2)2^{(ell-H_min(X|Z))/2}; output ell<=H_min-2log_2(1/(2epsilon)) guarantees TV<=epsilon when epsilon>0 and ell a nonnegative integer. A common stronger sufficient choice ell<=H_min-2log_2(1/epsilon) gives TV<=epsilon/2. State constants rather than silently swapping conventions.

All entropy and collision inequalities above are finite exact computations. This proves extraction/privacy amplification in TV, not strong secrecy in unnormalized mutual information without an additional finite-alphabet continuity/rate estimate. For growing output alphabet, TV->0 alone does not ensure I(K;HZ)->0; entropy continuity gives a bound of order delta log M+h_2(delta), so delta log M->0 suffices. Seed independence and public inclusion are load-bearing: deterministic hashing chosen after seeing X is outside this theorem. Quantum side information requires a separate cq/operator proof and cannot reuse this scalar Cauchy–Schwarz argument unchanged.



## Finite perfect-privacy kernel criterion

Let finite X,Y have joint law p, and form Z from Y through a stochastic K(z|y), conditionally independent of X given Y. Its joint law is p_XZ(x,z)=p_X(x)sum_y p(y|x)K(z|y) for p_X(x)>0; zero-p_X rows contribute zero. Finite KL equality gives I(X;Z)=0 iff p_XZ=p_X tensor p_Z. Dividing only positive p_X rows yields sum_y p(y|x)K(z|y)=p_Z(z). For z with p_Z(z)=0, the nonnegative weighted average of these row expressions is zero, so every positive-p_X row also equals zero. Thus checking independence of the displayed expression across positive-p_X rows, for every positive-p_Z column, is necessary and sufficient; zero columns follow automatically. This is a finite kernel criterion, not a claim that every privacy-utility optimum is attained by a prescribed parametric family.


## Complete finite Wyner–Ziv and Berger–Tung local developments


This note supplies finite-alphabet proof detail for the Wyner–Ziv decoder-side-information formula and the finite-source Berger–Tung inner bound. The statements below are fixed-length, asymptotic, expected-average-distortion statements. Logarithms and rates are in bits. The proofs use finite-alphabet type estimates and random codebooks/bins; they do not establish a general multiterminal converse. All distortions below are finite and nonnegative, hence bounded on the stated finite alphabets.

## Model and elementary typical-sequence estimates

Let \((X_1,\ldots,X_k)\) be a finite-alphabet memoryless source with one-letter law \(p(x_1,\ldots,x_k)\). A separated \(k\)-encoder lossy code of blocklength \(n\) consists of maps \(f_i:\mathcal X_i^n\to[M_i]\), one for each encoder, and a joint decoder \(g:[M_1]\times\cdots\times[M_k]\to\prod_i\widehat{\mathcal X}_i^n\). Encoder \(i\) sees only \(X_i^n\); the decoder sees all indices. For bounded single-letter distortions \(d_i:\mathcal X_i\times\widehat{\mathcal X}_i\to[0,d_{i,\max}]\), use

\[
\bar d_i=\frac1n\sum_{t=1}^n\mathbb E d_i(X_{i,t},\widehat X_{i,t}),
\qquad R_i^{(n)}=\frac1n\log_2 M_i.
\]

A tuple \((R_1,\ldots,R_k,D_1,\ldots,D_k)\) is achievable if for every \(\epsilon>0\), for all sufficiently large \(n\) there is a code with \(R_i^{(n)}\le R_i+\epsilon\) and \(\bar d_i\le D_i+\epsilon\). The rate-distortion region is the closure of achievable rate vectors for the requested distortion vector. The same definitions with one source \(X\), side information \(Y\), one message \(W=f(X^n)\), and decoder \(\widehat X^n=g(W,Y^n)\) give the Wyner–Ziv model. In that model the encoder does not see \(Y^n\), and the distortion is a function \(d(x,\hat x)\) independent of \(y\).

Use strong typical sets on the positive-probability support of each finite law. For each fixed finite alphabet and target law, tolerances can be nested so that the following estimates hold for all sufficiently large \(n\); write \(\alpha(\epsilon)\downarrow0\) for constants tending to zero with the typicality tolerance.

1. If \(x^n\) is sufficiently typical for \(P_X\), its conditional type class satisfies

   \[
   2^{n(H(U\mid X)-\alpha)}\le |T_\epsilon(U\mid x^n)|\le 2^{n(H(U\mid X)+\alpha)}.
   \]

   Every \(u^n\in T_\epsilon(U\mid x^n)\) has \(P_U^n(u^n)\) between \(2^{-n(H(U)+\alpha)}\) and \(2^{-n(H(U)-\alpha)}\). Thus

   \[
   2^{-n(I(X;U)+2\alpha)}\le P_U^n\{U^n\in T_\epsilon(U\mid x^n)\}\le 2^{-n(I(X;U)-2\alpha)}.
   \]

   These inequalities follow by counting conditional types and using \(P_U^n(u^n)=2^{-n(H(U)+o_\epsilon(1))}\) on each conditional typical set; the polynomial number of types is absorbed into \(2^{n\alpha}\).

2. If \(A^n\) and \(B^n\) are independent with laws \(P_A^n\) and \(P_B^n\), then

   \[
   P\{(A^n,B^n)\in T_\epsilon(P_{AB})\}\le 2^{-n(I(A;B)-\alpha)}.
   \]

   On the joint typical set the likelihood ratio \(P_{AB}^n/P_A^nP_B^n\) is at least \(2^{n(I(A;B)-\alpha)}\). Integrating its reciprocal under \(P_{AB}^n\) proves the bound. The same argument conditional on a fixed typical \(b^n\) gives \(P_A^n\{(A^n,b^n)\in T_\epsilon\}\le2^{-n(I(A;B)-\alpha)}\).

3. If \(X-Y-Z\) is a finite-alphabet Markov chain, \((x^n,y^n)\) is sufficiently typical, and a conditional law \(Q_n(z^n\mid y^n)\) has probability tending to one on \(T_\epsilon(Z\mid y^n)\) and, on that set,

   \[
   2^{-n(H(Z\mid Y)+\alpha)}\le Q_n(z^n\mid y^n)\le 2^{-n(H(Z\mid Y)-\alpha)},
   \]

   then \(P_{Q_n}\{(x^n,y^n,Z^n)\notin T_{\epsilon'}(P_{XYZ})\}\to0\) whenever \(\epsilon\) and \(\alpha\) are chosen sufficiently small relative to \(\epsilon'\). To see this directly, restrict to \(z^n\in T_\epsilon(Z\mid y^n)\), whose complement has vanishing probability. For any conditional type \(V(z\mid x,y)\) that induces a triple type outside \(T_{\epsilon'}(P_{XYZ})\), compactness of the finite-dimensional type simplex gives a constant \(c>0\) such that \(H_V(Z\mid X,Y)\le H_P(Z\mid Y)-c\), provided the \((X,Y)\) and \((Y,Z)\) marginals are sufficiently close to their target marginals. Otherwise a convergent sequence of bad types would limit to a non-target coupling with those marginals and \(I(X;Z\mid Y)=0\), contradicting the Markov factorization, whose unique such coupling is \(P_{XY}P_{Z\mid Y}\). There are at most \((n+1)^{|\mathcal X||\mathcal Y||\mathcal Z|}\) conditional types, and each type class has at most \(2^{nH_V(Z\mid X,Y)}\) sequences. Multiplying by the point-mass bound \(2^{-n(H_P(Z\mid Y)-\alpha)}\) makes the total bad-type probability at most a polynomial in \(n\) times \(2^{-n(c-\alpha)}\), which tends to zero when \(\alpha<c\). This proves the finite Markov typicality assertion without assuming the selected sequence is an exact product-kernel draw.

The random covering construction has a useful exact selection formula. Fix typical \(x^n\), put \(A=T_\epsilon(U\mid x^n)\), \(p=P_U^n(A)\), generate \(L\) independent \(P_U^n\) codewords, and let \(J\) be the first index with \(U^n(J)\in A\). Then

\[
P(J\text{ does not exist}\mid x^n)=(1-p)^L\le e^{-Lp}.
\]

Conditional on success, \(U^n(J)\) has law \(P_U^n(\cdot\mid A)\): for \(u^n\in A\), summing \(P(U^n(j)=u^n,J=j)=(1-p)^{j-1}P_U^n(u^n)\) over \(j\) and normalizing by \(1-(1-p)^L\) gives \(P_U^n(u^n)/p\). By the first typical estimate, each such point mass is between \(2^{-n(H(U\mid X)+3\alpha)}\) and \(2^{-n(H(U\mid X)-3\alpha)}\). The selected sequence is therefore conditionally typical with the point-mass bounds required by the Markov lemma.

For use in joint decoding, let \(J\) be the first covering index above, and count zero candidates on covering failure. Conditional on fixed typical \(x^n\), for any set \(B\subseteq\mathcal U^n\), the expected number of nonselected codewords in \(B\) on covering success obeys

\[
\mathbb E\left[\#\{\ell\ne J:U^n(\ell)\in B\}\mid x^n\right]
\le \left(L+\frac1p\right)P_U^n(B).
\tag{1}
\]

Indeed, indices after \(J\) are independent of the event defining \(J\), so their total contribution is at most \(LP_U^n(B)\). For an index \(j<J\), its contribution is at most

\[
P_U^n(B\cap A^c)(1-p)^{j-1}.
\]

Summing the geometric series over \(j\) is at most \(P_U^n(B)/p\). On typical \(x^n\), \(p\ge2^{-n(I(X;U)+2\alpha)}\), so if \(L=2^{n\widetilde R}\) and \(\widetilde R>I(X;U)+3\alpha\), the factor in parentheses in (1) is at most \(2^{n(\widetilde R+\alpha)}\). This bound includes codewords before the selected index, which are conditionally truncated by the failed-covering event.

## Wyner–Ziv region

Let \((X,Y)\sim P_{XY}\) be finite, let \(d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]\), and use i.i.d. repetitions. The encoder sees only \(X^n\); the decoder sees \(W=f(X^n)\) and \(Y^n\). Extend \(P_{Y\mid X}(\cdot\mid x)\) arbitrarily at symbols with \(P_X(x)=0\); such symbols have zero mass in every posterior used below. Define

\[
R_{WZ}(D)=\min_{P_{U\mid X},\;g:\mathcal Y\times\mathcal U\to\widehat{\mathcal X}:\;\mathbb E d(X,g(Y,U))\le D} I(X;U\mid Y),
\qquad U-X-Y.
\tag{2}
\]

The minimum over an empty feasible set is defined as \(+\infty\). The minimum is attained whenever the constraint is feasible.

Because \(U-X-Y\), the chain rule gives \(I(X;U\mid Y)=I(X;U)-I(Y;U)\). The encoder side information is absent from this model. In particular, (2) is not the conditional RDF with \(Y\) available to both terminals.

**Auxiliary cardinality and attainment.** Write \(m=|\mathcal X|\). For a posterior \(q\in\Delta(\mathcal X)\), let

\[
h(q)=H_q(X\mid Y),\qquad
a(q)=\min_{g:\mathcal Y\to\widehat{\mathcal X}}\sum_{x,y}q(x)P(y\mid x)d(x,g(y)).
\]

Both functions are continuous: conditional entropy is continuous on the finite simplex, and \(a(q)\) is the minimum of finitely many linear functions. Replacing each decoder \(g(\cdot,u)\) by a posterior-wise minimizer does not change \(I(X;U\mid Y)\) and cannot increase distortion. If \(q_u=P_{X\mid U=u}\) and \(\lambda_u=P_U(u)\), then \(\sum_u\lambda_uq_u=P_X\), distortion is \(\sum_u\lambda_u a(q_u)\), and

\[
I(X;U\mid Y)=H(X\mid Y)-\sum_u\lambda_u h(q_u).
\]

Thus it suffices to preserve convex combinations of the points

\[
s(q)=(q(1),\ldots,q(m-1),h(q),a(q))\in\mathbb R^{m+1}.
\]

Here is a local path-connected support reduction proving \(|\mathcal U|\le m+1\), with no unproved cardinality shortcut. The simplex is path-connected and \(s\) is continuous, so its image \(S\subset\mathbb R^{m+1}\) is path-connected. Any point in \(\operatorname{conv}S\) is a finite convex combination; if it uses more than \(d+1\) points in \(\mathbb R^d\), their affine dependence gives coefficients \(c_i\), not all zero, with \(\sum c_i=0\) and \(\sum c_is_i=0\). Moving the mixture weights along \(c_i\) until the first weight reaches zero reduces support; repetition gives at most \(d+1=m+2\) points. If this representation has a zero weight or affine dependence, the same elimination already reduces it to at most \(d\); otherwise it has \(d+1\) affinely independent points with positive weights. Translate the represented point to zero and call the points \(v_0,\ldots,v_d\), where \(d=m+1\). Then \(v_1,\ldots,v_d\) are linearly independent and \(v_0\) lies in the interior of the simplicial cone \(K=\{-\sum_{i=1}^d a_iv_i:a_i\ge0\}\). Also \(v_1\notin K\), since otherwise the \(v_i\) would be linearly dependent. Move \(v_0\) along a continuous path in \(S\) to \(v_1\) and take the first point \(w\) on the boundary of \(K\). There are coefficients \(a_i\ge0\), at least one zero, with \(w+\sum_i a_iv_i=0\). Normalizing these coefficients gives a convex representation of zero using \(w\) and at most \(d-1\) of the old points, hence at most \(d=m+1\) points. Finally, any retained mixture \((\lambda_u,q_u)\) defines a valid test channel by \(P(u\mid x)=\lambda_uq_u(x)/P_X(x)\) on the positive support of \(P_X\); for zero-mass source symbols choose the conditional kernel arbitrarily. The mixture identity forces every retained posterior to vanish on those symbols. This proves the bound.

The feasible set with at most \(m+1\) auxiliaries is compact: it is a finite union over decoder maps of closed subsets of a product of simplices. Distortion and mutual information are continuous. Therefore the minimum in (2) is attained whenever the constraint is feasible. This argument also supplies endpoint continuity of the value function: for \(D_n\downarrow D\), take convergent subsequences of optimal finite-dimensional kernels; the limit is feasible at \(D\), while monotonicity gives the reverse inequality. Thus no unattained-infimum premise is hidden in the theorem.

**Achievability.** Fix a finite \(P_{U\mid X}\), a decoder \(g\), and a target distortion above \(\mathbb E d(X,g(Y,U))\) by a small slack. Fix nested typicality tolerances. Generate

\[
L=\left\lceil2^{n(I(X;U)+\eta)}\right\rceil
\]

independent codewords \(U^n(\ell)\sim P_U^n\), and independently assign each index uniformly to one of

\[
B=\left\lceil2^{n(I(X;U)-I(Y;U)+4\eta)}\right\rceil
\]

bins. The encoder picks the first \(\ell\) with \((X^n,U^n(\ell))\) typical and sends its bin; if none exists, it sends bin 1. For a typical \(x^n\), the covering probability is at least \(2^{-n(I(X;U)+2\alpha)}\), so the covering failure probability is at most \(\exp[-2^{n(\eta-2\alpha)}]\). Atypical \(X^n\) has probability tending to zero.

The decoder finds the unique codeword in the received bin jointly typical with \(Y^n\), and applies \(g\) symbolwise. By the selected-word point-mass bound and the Markov lemma for \(U-X-Y\), the selected \((X^n,Y^n,U^n)\) is jointly typical with probability tending to one. Since \(d\) is bounded and the reconstruction is a deterministic symbolwise function, the empirical distortion on this event differs from its expectation by a quantity tending to zero.

For packing, if the true index is \(\ell\), a decoding competitor \(\ell'\ne\ell\) must satisfy both \((X^n,U^n(\ell))\) typical and \((Y^n,U^n(\ell'))\) typical, and the two indices must share a bin. Bin collision has probability \(1/B\), independent of the source and codewords. For typical \((x^n,y^n)\), the two codewords are independent and the conditional typicality bounds above give

\[
P\{(x^n,U^n(\ell))\text{ typical},(y^n,U^n(\ell'))\text{ typical}\}
\le 2^{-n(I(X;U)+I(Y;U)-2\alpha)}.
\]

Union over at most \(L^2\) ordered pairs gives

\[
P(\text{packing error})\le o(1)+\frac{L^2}{B}2^{-n(I(X;U)+I(Y;U)-2\alpha)}.
\]

With \(\widetilde R=n^{-1}\log L\) and \(R_B=n^{-1}\log B\), the exponent is \(2\widetilde R-R_B-I(X;U)-I(Y;U)+2\alpha\). The displayed choices give an exponent at most \(-2\eta+2\alpha+o(1)<0\) when \(\alpha<\eta/2\). Letting \(\eta\downarrow0\) gives the WZ bin rate \(I(X;U)-I(Y;U)\). The expected distortion is at most the typical-event distortion plus \(d_{\max}\) times the total error probability. Averaging over codebooks and bins therefore gives one deterministic code with the asserted rate and distortion. Letting the slack tend to zero by a diagonal sequence proves achievability of the closure of (2).

**Converse.** For any block code let \(W=f(X^n)\) and \(\widehat X_i=g_i(W,Y^n)\). For each coordinate put

\[
U_i=(W,Y^{i-1},Y_{i+1}^n,X^{i-1}).
\]

The memoryless pair law implies \(U_i-X_i-Y_i\): conditional on \(X_i\), the random variable \(Y_i\) is independent of all other source pairs and of \(W=f(X^n)\). Also \(\widehat X_i\) is a deterministic function of \((U_i,Y_i)\). Since \(W\) has at most \(2^{nR}\) values,

\[
nR\ge H(W)\ge H(W\mid Y^n)\ge I(X^n;W\mid Y^n).
\]

The source pairs are i.i.d., so the chain rule gives the exact identity

\[
I(X^n;W\mid Y^n)=\sum_{i=1}^n\left[H(X_i\mid Y_i)-H(X_i\mid W,Y^n,X^{i-1})\right]
=\sum_{i=1}^n I(X_i;U_i\mid Y_i).
\]

Let \(J\) be uniform on \([n]\), independent of the source, and set \((X,Y,U,\widehat X)=(X_J,Y_J,(U_J,J),\widehat X_J)\). Then \((X,Y)\sim P_{XY}\), \(U-X-Y\), the decoder is a function of \((Y,U)\), and

\[
I(X;U\mid Y)=\frac1n\sum_iI(X_i;U_i\mid Y_i),\qquad
\mathbb E d(X,\widehat X)=\frac1n\sum_i\mathbb E d(X_i,\widehat X_i).
\]

Thus any block code induces a feasible single-letter WZ auxiliary at no greater rate. If the operational distortion constraint holds only in the limsup, use the compact \(|\mathcal U|\le m+1\) reduction and a convergent subsequence to pass to the limit. This proves the converse without Fano's inequality; finite distortion enters the achievability/endpoint passage, not the algebraic converse.

## Decoder-only side information versus conditional rate-distortion

When both terminals know \(Y\), the conditional RDF is

\[
R_{X\mid Y}(D)=\min_{P_{\widehat X\mid X,Y}:\;\mathbb E d(X,\widehat X)\le D}I(X;\widehat X\mid Y).
\]

For finite alphabets and finite distortion, the conditional channel set is a compact product of simplices, the distortion constraint is closed, and finite-alphabet conditional mutual information is continuous. Thus the conditional-RDF minimum is attained whenever its constraint is feasible.

For every WZ-feasible \(U,g\), the chain rule and \(\widehat X=g(Y,U)\) give

\[
I(X;U\mid Y)=I(X;\widehat X\mid Y)+I(X;U\mid\widehat X,Y)\ge R_{X\mid Y}(D).
\tag{3}
\]

The gap is meaningful because the conditional-RDF encoder sees \(Y\), whereas the WZ encoder does not.

A fully stated sufficient no-rate-loss condition at distortion \(D\) is: a conditional-RDF optimizer \(P^*_{\widehat X\mid X,Y}\) exists, and there are a finite \(U\), a kernel \(P_{U\mid X}\), and a deterministic \(g\) such that

\[
P_{X,Y,U,\widehat X}(x,y,u,\hat x)
=P_{XY}(x,y)P_{U\mid X}(u\mid x)\mathbf1\{\hat x=g(y,u)\},
\quad P_{X,Y,\widehat X}=P^*_{X,Y,\widehat X},
\quad I(X;U\mid\widehat X,Y)=0.
\tag{4}
\]

The first factorization is the exact encoder restriction \(U-X-Y\); it is not the generally false chain \(U-X-(Y,\widehat X)\), because \(\widehat X\) depends on \(U\). Under (4), the WZ-feasible auxiliary has distortion at most \(D\) and

\[
I(X;U\mid Y)=I(X;\widehat X\mid Y)+I(X;U\mid\widehat X,Y)=R_{X\mid Y}(D).
\]

Together with (3), this proves \(R_{WZ}(D)=R_{X\mid Y}(D)\). This is a sufficient condition; it is not asserted to be necessary.

**Finite example.** Let \(X\sim\mathrm{Bernoulli}(1/2)\), let \(Y\) be independent of \(X\), use Hamming distortion, and take \(0\le D\le1/2\). For each fixed \(y\), if \(D_y=P\{X\ne\widehat X\mid Y=y\}\), then

\[
I(X;\widehat X\mid Y=y)=1-H(X\mid\widehat X,Y=y)
\ge1-H(X\oplus\widehat X\mid Y=y)\ge1-h_2(D_y).
\]

Average over \(Y\) and use concavity of \(h_2\): every both-terminal test channel with average distortion at most \(D\) has \(I(X;\widehat X\mid Y)\ge1-h_2(D)\). The BSC test channel \(\widehat X=X\oplus N\), \(N\sim\mathrm{Bernoulli}(D)\) independent, attains this value, so \(R_{X\mid Y}(D)=1-h_2(D)\). It is also WZ-feasible with \(U=\widehat X\), decoder \(g(y,u)=u\), and \(I(X;U\mid\widehat X,Y)=0\). Thus \(R_{WZ}(D)=R_{X\mid Y}(D)=1-h_2(D)\). This equality here follows from the independence and the explicit test channel; it does not identify decoder-only side information with conditional RDF in general.

**Gaussian single-letter example, with its continuous-alphabet scope stated.** Let \(X\sim N(0,\sigma_X^2)\), \(Y=X+N\), and \(N\sim N(0,\sigma_N^2)\) independent of \(X\); let distortion be squared error and side information be decoder-only. Put \(v=\operatorname{Var}(X\mid Y)=\sigma_X^2\sigma_N^2/(\sigma_X^2+\sigma_N^2)\). The both-terminal conditional RDF is \(\frac12\log_2^+(v/D)\): condition on \(Y\), apply \(h(X\mid Y)=\frac12\log_2(2\pi e v)\) and \(h(X\mid\widehat X,Y)\le\frac12\log_2(2\pi eD)\) for the converse. For achievability when \(0<D<v\), conditionally on \(Y\), write \(X=m(Y)+V+Z_0\) with independent \(V\sim N(0,v-D)\), \(Z_0\sim N(0,D)\), and set \(\widehat X=m(Y)+V\). Equivalently, \(\widehat X\mid X,Y\) is Gaussian with mean \(m(Y)+\frac{v-D}{v}(X-m(Y))\) and variance \(D(v-D)/v\). This has MSE \(D\) and mutual information \(\frac12\log_2(v/D)\); for \(D\ge v\), use \(\widehat X=m(Y)\). For the decoder-only single-letter auxiliary, take \(U=X+Z\), with independent \(Z\sim N(0,\tau^2)\), \(\tau^2=vD/(v-D)\), and reconstruct \(\widehat X=\mathbb E[X\mid Y,U]\). Then \(\operatorname{Var}(X\mid Y,U)=D\), \(I(X;U\mid Y)=\frac12\log_2(v/D)\), and, given \(Y\), \(\widehat X\) is an invertible affine function of \(U\), so \(I(X;U\mid\widehat X,Y)=0\); also \(I(X;\widehat X\mid Y)=I(X;U\mid Y)\), so this is the conditional-RDF optimizer. For \(D\ge v\), take constant \(U\) and \(\widehat X=\mathbb E[X\mid Y]\). At \(D=0\), the conditional RDF is \(+\infty\); for \(D<0\) the constraint is infeasible. Thus the Gaussian auxiliary satisfies the single-letter no-rate-loss condition wherever the rate is finite. To conclude an operational continuous-alphabet WZ theorem one also needs the corresponding continuous-source coding theorem; that theorem is not inferred from the finite proof above.

## Berger–Tung inner bound for k finite memoryless sources

Let \(X^k=(X_1,\ldots,X_k)\) be a finite-alphabet memoryless source, with separate encoder \(i\) observing \(X_i^n\), one joint decoder, finite reproduction alphabets, and bounded per-letter distortions \(d_i(X_i,\widehat X_i)\). Choose finite auxiliaries and the product test-channel factorization

\[
P_Q(q)P_{X^k}(x^k)\prod_{i=1}^kP_{U_i\mid X_i,Q}(u_i\mid x_i,q),
\qquad \widehat X_i=g_i(U_1,\ldots,U_k,Q),
\tag{5}
\]

where \(Q\) is finite and independent of \(X^k\). Conditional on \(Q\), (5) gives \(U_i-X_i-(X_{-i},U_{-i})\) for each \(i\), and the auxiliaries are conditionally independent given \((X^k,Q)\). If \(\mathbb E d_i(X_i,\widehat X_i)\le D_i\), the Berger–Tung inner region contains every rate vector satisfying, for every nonempty \(S\subseteq[k]\),

\[
\sum_{i\in S}R_i\ge I(X_S;U_S\mid U_{S^c},Q).
\tag{6}
\]

The region is the closure of the union over finite \(Q,U_1,\ldots,U_k\), product kernels (5), and distortion-feasible reconstructions. It is an inner bound only; this note proves no general matching converse. No small cardinality bound on \(U_i\) is asserted. Finite auxiliaries suffice for each point in the union; any additional support-lemma reduction must be proved separately. Finite time-sharing is part of the definition; no numerical bound on \(|Q|\) is claimed here.

The proof for \(Q\) constant gives all subset inequalities explicitly. Choose covering codebook size \(L_i=\lceil2^{n\widetilde R_i}\rceil\), with \(\widetilde R_i>I(X_i;U_i)+\eta\), and independently generate each codeword in encoder \(i\)'s book according to \(P_{U_i}^n\). Independently assign each index of encoder \(i\) uniformly to \(B_i=\lceil2^{nR_i}\rceil\) bins. Given \(x_i^n\), encoder \(i\) sends the bin of the first codeword jointly typical with \(x_i^n\); if none exists, it sends bin 1. The decoder searches for the unique index tuple in the received bins whose codewords are jointly typical with \(P_{U^k}\), then applies each \(g_i\); on nonuniqueness/failure it outputs a fixed reproduction sequence.

For each encoder, the covering probability bound above gives

\[
P(E_{\mathrm{cover},i})\le P\{X_i^n\text{ atypical}\}+\exp[-2^{n(\widetilde R_i-I(X_i;U_i)-2\alpha)}]\to0.
\]

On covering success the selected \(U_i^n\mid X_i^n\) is supported on the conditional typical set and has point masses \(2^{-n(H(U_i\mid X_i)\pm3\alpha)}\). Starting with the typical source tuple, apply the Markov typicality lemma successively for \(U_1,\ldots,U_k\): at step \(i\), conditional on \(X^k\) and already selected \(U_1,\ldots,U_{i-1}\), the independent codebook for encoder \(i\) depends on the other coordinates only through \(X_i^n\), exactly as required by (5). The selected tuple \((X^k,U^k)\) is jointly typical with probability tending to one. The deterministic reconstruction functions then make every empirical distortion approach its single-letter expectation. Boundedness controls the contribution of all error events.

Here are explicit packing estimates for every error subset. Fix a nonempty set \(S\) of encoders whose decoded indices differ from the selected indices; indices in \(S^c\) equal the selected indices. Conditional on the source sequences, codebook families are independent. For each \(i\in S\), bound the expected counting measure of nonselected codewords by (1), with \(C_i=L_i+1/p_i\le2^{n(\widetilde R_i+\alpha)}\). On the event the true complementary codeword tuple \(u_{S^c}^n\) is typical, the independent product law of candidate codewords in \(S\) obeys

\[
\left(\prod_{i\in S}P_{U_i}^n\right)
\{u_S^n:(u_S^n,u_{S^c}^n)\text{ jointly typical}\}
\le2^{-n(J_S-\alpha)},
\]

where

\[
J_S=D\!\left(P_{U^k}\middle\|\Big(\prod_{i\in S}P_{U_i}\Big)P_{U_{S^c}}\right)
=\sum_{i\in S}H(U_i)-H(U_S\mid U_{S^c}).
\]

The probability bound follows by the same typical likelihood-ratio argument as item 2 above, now conditioning on \(u_{S^c}^n\). Independent bin assignments put a fixed competing tuple in all the selected bins with probability \(\prod_{i\in S}B_i^{-1}\). Hence

\[
P(E_S\cap E_{\mathrm{good}})
\le 2^{-n\sum_{i\in S}R_i}\Big(\prod_{i\in S}C_i\Big)2^{-n(J_S-\alpha)}
\le 2^{-n[\sum_{i\in S}R_i-\sum_{i\in S}\widetilde R_i+J_S-o_\eta(1)]}.
\tag{7}
\]

The product counting bound is valid even though indices before a selected index are conditionally truncated: (1) already includes the factor \(1/p_i\); conditional on the source tuple, the encoder codebooks are independent across \(i\), so the counting measures multiply. From (5),

\[
H(U_S\mid X_S,U_{S^c})=\sum_{i\in S}H(U_i\mid X_i),
\]

because given \(X_S,Q\), \(U_S\) is independent of \(U_{S^c}\) and has product conditional law. Consequently

\[
\sum_{i\in S}I(X_i;U_i)-J_S
=H(U_S\mid U_{S^c})-\sum_{i\in S}H(U_i\mid X_i)
=I(X_S;U_S\mid U_{S^c}).
\tag{8}
\]

Choose each \(\widetilde R_i\) arbitrarily close above \(I(X_i;U_i)\). If every inequality (6) is strict by a positive margin, (7) decays exponentially for each nonempty \(S\); there are only \(2^k-1\) such subsets, so a union bound makes the decoder error probability vanish. In particular, for \(k=2\) the three events are: only \(U_1\) wrong, only \(U_2\) wrong, and both wrong. Their exponents reduce respectively to the three familiar bounds

\[
R_1>I(X_1;U_1\mid U_2),\quad R_2>I(X_2;U_2\mid U_1),\quad
R_1+R_2>I(X_1,X_2;U_1,U_2).
\]

Taking expectation over codebooks and bins shows the sum of bounded distortion excesses and decoding error tends to zero; at least one deterministic code design has this property. Rates/distortions on boundary follow by diagonalizing the strict-slack construction: for each \(j\), choose typicality and rate slack below \(1/j\), then a blocklength threshold after which the bounds hold, and let \(j\to\infty\) slowly with \(n\). This proves the closure statement rather than claiming exact finite-block inequalities.

For finite \(Q\), fix a deterministic public schedule \(q^n\) with \(n^{-1}|\{t:q_t=q\}|\to P_Q(q)\), and generate each encoder's random codewords with law \(\prod_tP_{U_i\mid Q=q_t}\). On each positive-probability schedule class, the source coordinates are iid \(P_{X^k}\); by the law of large numbers, with probability tending to one every class subsequence is typical. Conditional type counts factor over these classes, so their logarithms add: the covering exponent is \(I(X_i;U_i\mid Q)\), the selected point masses have exponent \(H(U_i\mid X_i,Q)\), and the conditional Markov-typicality proof applies within each class. For a fixed typical complementary tuple, the candidate product law has packing exponent
\[
J_S(Q)=\sum_{i\in S}H(U_i\mid Q)-H(U_S\mid U_{S^c},Q).
\]
The counting-measure argument (1) applies separately to each encoder with \(C_i\le 2^{n(\widetilde R_i+\alpha)}\). Thus the exponent in (7) becomes \(\sum_{i\in S}R_i-\sum_{i\in S}\widetilde R_i+J_S(Q)\), and conditional independence in (5) gives
\[
\sum_{i\in S}I(X_i;U_i\mid Q)-J_S(Q)=I(X_S;U_S\mid U_{S^c},Q).
\]
These estimates prove the same strict-rate achievability and diagonal closure for (6). The schedule is fixed and known to both terminals, so it is not free random common information. No cardinality reduction for \(Q\) or the \(U_i\) is claimed.

## Gaussian and successive-refinement statements not to conflate

The finite Berger–Tung proof above assumes finite alphabets and bounded distortions. A scalar jointly Gaussian two-encoder example has an exact region under stronger, specific hypotheses, but that exactness is not a consequence of the inner-bound proof. Wagner–Tavildar–Viswanath's exact model is \(X_1,X_2\) jointly Gaussian with unit variances and correlation \(0<\rho<1\), separate encoders, one decoder, and separate expected MSE targets \(d_1,d_2>0\). In bits, set

\[
\beta=1+\sqrt{1+\frac{4\rho^2d_1d_2}{(1-\rho^2)^2}},\qquad \log^+z=\max(0,\log_2z).
\]

The exact region is the intersection

\[
R_1\ge\frac12\log^+\!\frac{1-\rho^2+\rho^2 2^{-2R_2}}{d_1},\quad
R_2\ge\frac12\log^+\!\frac{1-\rho^2+\rho^2 2^{-2R_1}}{d_2},\quad
R_1+R_2\ge\frac12\log^+\!\frac{(1-\rho^2)\beta}{2d_1d_2}.
\]

The general Berger–Tung argument supplies its Gaussian test-channel achievability after replacing finite type counting with the paper's Gaussian random-coding argument; WTV's Gaussian extremal converse is a separate theorem. Do not infer exactness for arbitrary jointly Gaussian vectors, arbitrary numbers of terminals, or non-MSE distortions. The complete WTV source and converse proof are documented in the r5 lane.

Equitz–Cover's successive-refinement condition is also a different interface from Wyner–Ziv: for an i.i.d. source, two distortion levels \(D_1\ge D_2\), and the paper's common per-letter distortion, two individually RDF-optimal reconstructions can be simultaneously attained iff an optimal pair can be coupled as \(X\to\widehat X_2\to\widehat X_1\). Their full proof and examples are recorded in the r4 source findings. This Markov compatibility condition concerns nested descriptions, not decoder side information or equality of WZ and conditional RDFs.

## Proof-source locators and remaining scope

The finite WZ model, formula, converse and direct theorem were checked against the complete Wyner–Ziv article (IEEE TIT 22(1), 1976, pp. 1-10), especially its model/theorem pages 1-3 and converse/direct proofs on pp. 6-9. The finite conditional-RDF distinctions and operational expected-distortion arguments also use the complete MIT OCW 6.441 S16 Chapter 24 read recorded in `reading-ledger.json`.

For Berger–Tung, I focused-read the relevant extracted spans in El Gamal–Kim, *Network Information Theory*, arXiv:1001.3404v3, Lecture Notes 13 pages 1-12 (operational model, independent test channels, codebooks, bins, decoder, covering/packing and rate elimination) and Appendix pages 44-50 (Markov typicality and selected-covering-word mass). The r5 lane reports the complete 641-page manuscript read; r4 did not reread that entire book. The present note spells out the finite type estimates and subset packing bounds used here rather than treating a “covering plus binning” citation as a proof.

The WTV Gaussian two-encoder exact region stated above is fully developed in the separate complete WTV source and r5 research lane. This note does not prove its Gaussian extremal converse, does not claim the general Berger–Tung inner bound is tight, and does not extend its exactness to more terminals or arbitrary Gaussian models. The Gaussian WZ paragraph proves a single-letter no-rate-loss construction and the conditional RDF; an operational continuous-alphabet WZ theorem requires its own coding theorem.



## Exact DSBS Wyner–Ziv envelope and certified strict rate loss

Use bits in this example. Let X be fair binary and Y=X xor N, independent N~Bernoulli(p), 0<p<1/2. For a posterior q=P(X=1|U=u), the channel Y|X remains BSC(p). Direct finite entropy algebra gives H_q(X|Y)=h(q)+h(p)-h(p+(1-2p)q). Put delta=min(q,1-q). The posterior-optimal Hamming decoder has error d(q)=min(delta,p): for delta<=p always choose the more likely X, while for p<=delta<=1/2 use Y (compare each of the four positive joint cells). Thus its objective contribution is g(delta)=h(p+(1-2p)delta)-h(delta). Symmetrizing each posterior into the pair q,1-q with equal weights preserves distortion/objective and ensures the required marginal P_X=1/2. Conversely every such paired posterior mixture is an actual U-X-Y test channel by Bayes' formula. For delta>=p, distortion is p and g(delta)>=0, so the point delta=1/2, with rate zero and distortion p, dominates those points. It follows from the proved finite WZ optimization that R_WZ(D) is exactly the lower convex envelope of {(d,g(d)):0<=d<=p} together with (p,0), at D<=p; for D>=p it is zero. This is an optimization proof, not just evaluation of a candidate auxiliary.

Let a=1-2p and r=p+ad. For 0<d<p, direct differentiation gives

g''(d)=p(1-p)/[ln(2)d(1-d)(p(1-p)+a²d(1-d))]>0.

The tangency equation is L(d)=g(d)+(p-d)g'(d)=0. Its derivative (p-d)g''(d)>0, its limit at zero is minus infinity, and L(p)=g(p)>0. Thus a unique d_c lies in (0,p). Strict convexity shows the line from (d_c,g(d_c)) to (p,0) is below the graph g everywhere; joining this line to g on [0,d_c] is convex with matching derivative, and is the maximal convex minorant. This proves the exact claimed envelope, not just its numerical plot.

For the both-terminal RDF, H(X|Y)=h(p) and binary conditional Fano gives I(X;Xhat|Y)>=h(p)-h(D) for D<=p (h is increasing on [0,1/2]). Attain this by representing N=Nhat xor Z with independent Z~Bernoulli(D) and Nhat~Bernoulli((p-D)/(1-2D)), then taking Xhat=Y xor Nhat; N is independent of Y. This is a valid both-terminal conditional test channel, so equality holds.

At p=1/10,D=1/20, the exact rational certificates in audit/certify-dsbs-values.py give d_c in (.007517,.007518), R_WZ(D) in (.22919,.22920), and R_both(D) in (.18259,.18261). The certificate uses no floating-point assumptions: reduce each rational logarithm argument by powers of two to [1,2], use ln z=2 sum_(j=0)^49 t^(2j+1)/(2j+1) with t=(z-1)/(z+1), and bound the omitted absolute tail by 2|t|^101/[101(1-t²)]. Rational interval arithmetic certifies opposite signs of L at the two endpoints and the stated disjoint rate intervals. Thus the strict decoder-only rate loss is rigorous, with a quantitative margin exceeding .0465 bits.


## Complete finite-DMC reliability bounds, feedback and finite-dimensional AWGN developments


This supplement closes local arguments for unconstrained finite-DMC error-exponent bounds and real/complex finite-dimensional AWGN capacity. It uses natural logarithms, so rates, divergences, and exponents are in nats. The complete source reads and actual editions are recorded in the r3 source-manifest.json and reading-ledger.json: Polyanskiy–Wu (PW), Information Theory: From Coding to Learning, authorized author-hosted first-edition book draft, substantive PDF pp. 1–696; and the complete Polyanskiy–Poor–Verdú (PPV) author manuscript, PDF pp. 1–121. The proofs below are local developments, not a claim that a source theorem statement alone supplies the argument.

Scope: below-capacity error exponents are separate from the success exponent above capacity. DMC exponents are proved without input cost constraints or feedback. The locally derived sphere-packing converse is stated for rates strictly above a finite-divergence threshold defined below; at the threshold and below it I do not invoke a dual identity without its strict-feasibility premise. The AWGN result is Shannon capacity under a per-codeword peak block-power constraint (and hence also under average-over-codebook power); it is not a finite-blocklength exponent, continuous-time theorem, or stationary-Gaussian source-coding result.

## DMC model and exponent definitions

Let X,Y be finite nonempty alphabets and W(y|x) a DMC. A length-n code has a uniform message J in {1,...,M}, deterministic codewords x_m^n, and decoder subprobabilities d_m(y^n) >= 0 with sum_m d_m(y^n) <= 1. Define e_m=1-sum_y W^n(y|x_m^n)d_m(y), average error e_av=M^{-1}sum_m e_m, and maximal error e_max=max_m e_m. Let P_av^*(n,M) and P_max^*(n,M) be the infima over these codes. For fixed R>0 let M_n=ceil(exp(nR)) and

    E^-_k(R)=liminf_n -n^{-1} ln P_k^*(n,M_n),
    E^+_k(R)=limsup_n -n^{-1} ln P_k^*(n,M_n), k in {av,max}.

If these coincide, their common value is the error exponent. If the optimum error is zero, its exponent is +infinity. This avoids assuming that an exponent limit exists. The no-cost capacity is C=max_P I(P,W). No cost constraint, feedback, or channel memory is included in the DMC exponent claims.

## Gallager random-coding bound

For 0 <= rho <= 1 define, with 0^a=0 for a>0,

    E0(rho,P) = -ln sum_y (sum_x P(x) W(y|x)^{1/(1+rho)})^{1+rho},
    E0(rho) = max_P E0(rho,P).

Globally unreachable outputs can be removed. No positive-transition assumption is used: zero terms vanish and all sums are finite. At rho=0, E0(0,P)=0.

Draw M codewords independently under P^n and use maximum-likelihood decoding with fixed tie-breaking. An error implies that a competitor likelihood is at least the true likelihood. For 0<rho<=1, the error indicator is at most the rho power of the sum over competitors of (W^n(y|x')/W^n(y|x))^{1/(1+rho)}. Jensen's inequality for the concave map s^rho and independence of codewords give the following explicit calculation. At fixed output y^n and transmitted x^n, average the rho-power over independent competitors using E[S^rho]<=(E S)^rho. Multiplication by the true likelihood W^n(y^n|x^n) changes its exponent from 1 to 1-rho/(1+rho)=1/(1+rho). Averaging x^n under P^n then produces the factor sum_x P^n(x^n)W^n(y^n|x^n)^{1/(1+rho)}; the competitor expectation contributes its rho-th power. Summing over y^n gives the first sum in (1), which tensorizes coordinatewise.

    E_C e_av(C)
      <= (M-1)^rho sum_{y^n}
          (sum_{x^n} P^n(x^n) W^n(y^n|x^n)^{1/(1+rho)})^{1+rho}
      = exp{-n[E0(rho,P)-rho n^{-1}ln(M-1)]}.                    (1)

Terms with zero true likelihood have zero probability under the transmitted channel; the ratio is only used on its charged support. Some deterministic codebook has error no larger than the ensemble mean. This reproduces PPV Theorem 3 (author manuscript PDF pp. 5–6) and PW §22.4* (printed pp. 431–432 / PDF pp. 456–457). For M_n=ceil(exp(nR)), it proves

    E^-_av(R) >= E_r(R) := sup_{0<=rho<=1} {E0(rho)-rho R}.       (2)

The same lower bound holds for maximal error at the exact target size M_n. Apply (1) to M'=2M_n messages; since n^{-1}ln(M'-1)->R, the ensemble mean still has exponent E_r(R). Some deterministic code has average error a_n no greater than that mean. At least M'/2=M_n messages have individual error <=2a_n. Retain M_n of them and restrict the decoder. The maximum error is <=2a_n.

Differentiating the finite sum at rho=0, with 0 ln 0=0, gives d E0(rho,P)/d rho at zero equal to I(P,W). If R<C, choose a capacity-achieving P; for sufficiently small rho>0, E0(rho,P)-rho R=rho(C-R)+o(rho)>0. Thus random coding gives a positive lower exponent below capacity. At R=C this argument gives no positive exponent.

## Expurgated lower bound

Define B(x,x')=sum_y sqrt(W(y|x)W(y|x')) in [0,1], and d_B(x,x')=-ln B(x,x'), with d_B=+infinity if B=0. For a maximum-likelihood decoder, the pairwise event W^n(y|x'^n)>=W^n(y|x^n) satisfies

    W^n(y|x^n) 1{W^n(y|x'^n)>=W^n(y|x^n)}
        <= sqrt(W^n(y|x^n)W^n(y|x'^n)).

Summing over y^n and union bounding gives e_m <= f_m=sum_{m' != m}B(x_m^n,x_{m'}^n), where B tensorizes over coordinates. Draw codewords iid P^n. For rho>=1, subadditivity of s^(1/rho) gives

    E f_m^(1/rho) <= (M-1)(E_{P x P} B(X,X')^(1/rho))^n.

For a random codebook define A(C)=M^{-1}sum_m f_m^(1/rho). The moment bound gives E_C A(C)<=(M-1)(E_{P x P}B(X,X')^(1/rho))^n, so some deterministic codebook satisfies the same bound. Markov's inequality over its messages retains at least half with
f_m^(1/rho)<=2(M-1)(E_{P x P}B(X,X')^(1/rho))^n.
Use ML among retained words; removing competitors cannot increase their ML error. Start with M=2M_n, retain M_n messages, and if necessary restrict further to exactly M_n. The logarithmic rate is R+o(1), and the resulting maximal error is at most

    2^rho (M-1)^rho (E_{P x P} B(X,X')^(1/rho))^(n rho).

With E0x(rho,P)=-rho ln E B(X,X')^(1/rho), this proves

    E^-_max(R) >= E_ex(R)
      := sup_{rho>=1}{max_P E0x(rho,P)-rho R},                 (3)

and the same lower bound for average error. Infinite values use extended-real conventions. This is a local proof of the expurgation route cited in PW Exercise IV.31 / §22.4* (printed pp. 432–433 / PDF pp. 457–458); it does not assert that E_ex is the exact general low-rate reliability function.

## Sphere-packing converse, with exact finite-divergence scope

For each x let supp W_x={y:W(y|x)>0}, and let V range over the compact product of row simplices supported on supp W_x. Put

    D_P(V)=sum_x P(x)D(V_x||W_x),  I_P(V)=I(P,V),
    J(P)=min_V I_P(V),  R_inf=max_P J(P).

All these divergences are finite on this restricted set, with 0<=D_P(V)<=D0:=max_{x,y:W(y|x)>0} ln(1/W(y|x))<infinity. I_P(V) is continuous in (P,V), so J is continuous and R_inf is attained. This R_inf is defined by the finite-divergence minimization here; I do not identify it with another author's symbol without matching that definition.

Fix R>R_inf. Then every P has a finite-divergence auxiliary channel V0 with I_P(V0)<R. First consider an M' word constant-composition code of type P_n, with M' growing at rate R. Under V^n, the code's mutual information satisfies

    I(J;Y^n)=I(X^n;Y^n)
       <= sum_i I(P_i,V) <= n I(P_n,V),                        (4)

where P_i is the coordinate input marginal, n^{-1}sum_i P_i=P_n, and mutual information is concave in its input law. Fano's inequality for the code's average error e_V under V therefore gives

    e_V >= 1 - [n I(P_n,V)+ln 2]/ln M'.                         (5)

If I_P(V)<R for a limiting type P, continuity makes the right side bounded below by a positive constant for all sufficiently large n.

For each codeword of type P_n, under V^n define L=ln(V^n(Y|x^n)/W^n(Y|x^n)). Its mean is nD_{P_n}(V), and its variance is n times a P_n-weighted sum of row variances of ln(V_x/W_x). The latter is uniformly bounded by nK_V since the alphabets are finite and V_x charges only W_x-positive cells. Chebyshev gives

    V^n{L > n(D_{P_n}(V)+eta)} <= K_V/(n eta^2).

Writing the error test as 1-d_m(y^n), change of measure dV^n=e^L dW^n gives

    e_W >= exp[-n(D_{P_n}(V)+eta)]
           (e_V-K_V/(n eta^2)).                               (6)

This remains true for randomized decoders. Equations (5)–(6) prove that along types P_n->P, every V with I_P(V)<R gives limsup -n^{-1}ln e_W <= D_P(V)+eta.

For an arbitrary code, partition messages by input type; there are at most (n+1)^|X| types. A largest class has size at least M/(n+1)^|X| and hence rate R-o(1). Restrict the original decoder to that class, leaving retained message errors unchanged; its average error is at most (n+1)^|X| times the original average error. Along a subsequence attaining the upper exponent, compactness gives a further subsequence of selected types converging to P. For each V with I_P(V)<R, (5)–(6) apply. Taking the infimum over V, then the supremum over P, proves

    E^+_av(R) <= sup_P inf_{V:I_P(V)<R} D_P(V),  R>R_inf.       (7)

The same upper bound holds for maximal error because average error is no larger than maximal error. The type-class loss is only |X|ln(n+1)/n.

Here is the local convex-duality proof, only under strict feasibility. The closed problem S_P(R)=min_{I_P(V)<=R}D_P(V) attains a minimum on the compact allowed channel set. Mix a minimizer V* with a strict feasible V0: V_t=(1-t)V*+tV0 has I_P(V_t)<R by convexity and D_P(V_t)->D_P(V*). Hence the open infimum in (7) equals S_P(R). Both I_P(V) and D_P(V) are convex in V; convexity of I for fixed P follows from joint convexity of relative entropy applied to the joint law P(x)V(y|x) and product law P(x)(PV)(y). Form the upper image

    G={(a,b): a>=I_P(V), b>=D_P(V) for some allowed V}

and the disjoint open convex set O=(-infinity,R) x (-infinity,S_P(R)). Weak separation of disjoint nonempty Euclidean convex sets gives a nonzero normal (u,v) with u,v>=0, because G is upper in both coordinates. Strict feasibility forces v>0: otherwise the separator would require every first coordinate of G to be at least R, contradicted by V0. Normalize v=1 and write rho=u. Separation gives

    inf_V {D_P(V)+rho I_P(V)} - rho R >= S_P(R).

At a primal minimizer V*, I_P(V*)<=R, so the left side for this rho is at most D_P(V*)=S_P(R). Equality follows, yielding

    S_P(R)=sup_{rho>=0}{E0cc(rho,P)-rho R},
    E0cc(rho,P):=inf_V {D_P(V)+rho I_P(V)}.                     (8)

The separator used is the published weak-separation supplier thm-separating-hyperplane-theorem-for-disjoint-convex-sets. No draft Slater-duality or draft Farkas theorem is used. Formula (8) is not asserted without strict finite-divergence feasibility.

### Row variational formula and global optimized identity

For 0<rho<infinity put alpha=1/(1+rho) and define

    f_x(Q) = -alpha^{-1} ln sum_y W(y|x)^alpha Q(y)^(1-alpha),

with -ln 0=+infinity. Gibbs' variational identity gives

    inf_{V_x << W_x}{D(V_x||W_x)+rho D(V_x||Q)} = f_x(Q).        (9)

Indeed, for Z_x(Q)=sum_y W(y|x)^alpha Q(y)^(1-alpha), the minimizing row is V*_x(y)=W(y|x)^alpha Q(y)^(1-alpha)/Z_x(Q) on its support; expansion of the objective gives (1+rho)D(V_x||V*_x)-alpha^{-1}ln Z_x(Q). In every P-weighted sum involving extended f_x(Q)=+infinity, omit terms with P(x)=0; no 0 times infinity is formed. Also I_P(V)=min_Q sum_xP(x)D(V_x||Q), since the right side equals I_P(V)+D(PV||Q). Taking the joint infimum over V,Q in (9) therefore gives

    E0cc(rho,P)=inf_Q sum_x P(x) f_x(Q).                        (10)

Do not equate these expressions for each P. For the noiseless binary channel and P=(3/4,1/4), the only allowed auxiliary channel is W itself, so E0cc(rho,P)=rho H(P). In contrast,

    E0(rho,P)=-ln[(3/4)^(1+rho)+(1/4)^(1+rho)].

At rho=1 these are unequal: E0cc=H(3/4,1/4), while E0=ln(8/5). Thus equality is a global optimization identity, not a pointwise-in-P identity.

The globally optimized quantities do agree, with zeros handled explicitly. Let

    S_y(P)=sum_x P(x)W(y|x)^alpha,   Z(P)=sum_y S_y(P)^(1/alpha).

Since 1/alpha>1, Z is continuous, convex, and differentiable on the simplex; choose a minimizer P*. Let T={y:S_y(P*)>0}, q*(y)=S_y(P*)^(1/alpha)/Z(P*) on T, and q*=0 outside T. Define T_x=sum_y W(y|x)^alpha S_y(P*)^rho. The simplex KKT conditions give T_x>=Z(P*) for all x, with equality whenever P*(x)>0. To see the constant, ∂_x Z=alpha^{-1}T_x and homogeneity gives sum_xP*(x)∂_x Z=Z(P*)/alpha.

For g_x(Q)=sum_yW(y|x)^alpha Q(y)^(1-alpha), substitution yields g_x(q*)=T_x/Z(P*)^(1-alpha)>=Z(P*)^alpha. Therefore f_x(q*)<=-ln Z(P*), with equality on supp P*. By (10),

    E0cc(rho,P)<=sum_xP(x)f_x(q*)<=-ln Z(P*)=max_P' E0(rho,P'). (11)

For the reverse inequality at P*, show q* minimizes F(Q)=sum_xP*(x)f_x(Q). Each f_x is convex because g_x is nonnegative concave and -ln is convex decreasing. On the relative interior of the simplex on T,

    partial F/partial Q(y) at q*
       = -rho [sum_x P*(x)W(y|x)^alpha]/S_y(P*) = -rho, y in T.

The gradient is constant, so the convex supporting inequality proves F(Q)>=F(q*) for Q supported on T. Every active row W_x, P*(x)>0, is supported on T. If a general Q puts mass c=Q(T)>0 on T, then f_x(Q)=f_x(Q(.|T))-rho ln c>=f_x(Q(.|T)) for active rows; if c=0 the objective is infinite. Thus q* minimizes over the full output simplex and E0cc(rho,P*)=-ln Z(P*). Together with (11),

    max_P E0cc(rho,P)=max_P E0(rho,P),  0<rho<infinity.         (12)

At rho=0 both sides are zero. This derivation needs no full-output-support or positive-transition assumption; restriction to T handles zeros.

The strict-feasibility threshold has an exact finite-rho interpretation. Since 0<=D_P(V)<=D0,

    J(P) <= rho^{-1}E0cc(rho,P) <= J(P)+D0/rho.

So (12) gives lim_{rho->infinity} E0(rho)/rho=max_P J(P)=R_inf. For R>R_inf, every P has a strict finite-divergence witness. Equations (7)–(8), interchange of the two suprema, and (12) prove the locally justified sphere-packing bound

    E^+_av(R), E^+_max(R) <= E_sp(R)
       := sup_{rho>=0}{E0(rho)-rho R},  R>R_inf.                (13)

At R<=R_inf, a P may have no strict finite-divergence witness; (8) cannot be applied to that P. PPV Theorem 12 (author manuscript PDF pp. 9–10) states the classical finite-n average-error SGB converse: with R=ln(M)/n and P_min the least positive transition probability,

    epsilon >= exp{-n[E_sp(R-o1)+o2]},
    o1 = ln(4)/n + |X|ln(n)/n,
    o2 = sqrt((8/n)ln(e/sqrt(P_min)) + ln(8)/n).

Its displayed exponent uses the same iid E0 formula as (13). The theorem statement is source evidence at all covered rates, but the manuscript's main text only sketches the derivation from its testing converse and the SGB type argument. I do not promote that sketch to a local proof of the endpoint.

There is a local exact sufficient condition for the random-coding and sphere-packing bounds to match that does not require asserting concavity of the optimized E0. Define

    R_match = sup_{rho>1} [E0(rho)-E0(1)]/(rho-1).

This is finite: from E0(rho)=max_P inf_V{D_P(V)+rho I_P(V)}, each slope I_P(V) lies in [0,ln|X|], so E0 is Lipschitz with that constant. For every R>=R_match and rho>1,

    E0(rho)-rho R <= E0(1)-R.

Hence E_sp(R)=E_r(R), because no rho>1 improves the value at rho=1. Also R_match>=R_inf by taking rho to infinity in its defining secant slopes and using E0(rho)/rho->R_inf. Thus for R_match<R<C, if this interval is nonempty, (2) and (13) sandwich both error criteria to prove existence of the error-exponent limit and its exact value E_r(R)=E_sp(R). PW §22.4* (printed pp. 432–434 / PDF pp. 457–459) reports the classical sharper high-rate threshold R_cr and the low-rate gap; that source-reported R_cr statement is not used here as a proof supplier, and this note does not assert that R_match equals R_cr. At rates where the lower and upper bounds do not match, expurgation improves the lower bound but the general DMC reliability function remains open.

## Above capacity: the error exponent is zero

For a finite DMC remove globally unreachable outputs. A capacity-achieving input P* exists by compactness. Its output q*=P*W is positive on every remaining output: if q*(y0)=0 but W(y0|x)>0, mixing P* with delta_x creates output mass tW(y0|x) and entropy gain -tW(y0|x)ln t+O(t), while changes on formerly positive coordinates and conditional entropy are O(t), contradicting optimality. For this positive q*, direct expansion gives I(P,W)=sum_xP(x)D(W_x||q*)-D(PW||q*). Along (1-t)P*+t delta_x the divergence term is O(t^2), so the one-sided derivative is d_x-C and d_x=D(W_x||q*)<=C. The information density i(x;y)=ln(W(y|x)/q*(y)) is bounded on charged cells.

For any fixed codeword x^n, under W^n(.|x^n), the sum of i(x_i;Y_i) has mean at most nC and variance at most nK for a finite channel-dependent K. For any decoder with subprobabilities d_m and any gamma>0, take Q=q*^n and a=ln M-gamma. On the set {ln(W^n/Q)<=a}, W^n<=exp(a)Q; summing tests under Q and using sum_m d_m<=1 proves

    P_succ <= sup_{x^n} W^n{sum_i i(x_i;Y_i)>ln M-gamma | x^n}
                 + exp(-gamma).                                (14)

If R>C, set gamma=n(R-C)/2. Chebyshev bounds the first term by 4K/[n(R-C)^2]; the second tends to zero exponentially. Thus success tends to zero for average and maximal criteria, so P_e tends to one and

    lim_n -n^{-1}ln P^*_e(n,ceil(exp(nR)))=0, R>C.

In PW's separate success-exponent convention, for -1<rho<0 the same single-letter formula is used with E0(rho)=min_P E0(rho,P), rather than the max over P for rho>=0. PW reports the success exponent sup_{-1<rho<0}{E0(rho)-rho R} above capacity. That expression is for 1-P_e, not P_e, and its proof is not developed here; it must not be inserted into the error-exponent theorem.

## Fixed-length feedback does not increase finite-DMC Shannon capacity

Let W(y|x) be a stationary memoryless channel on finite alphabets X,Y, with no cost constraint. A length-n feedback code has a uniform message J in [M]. At time i the encoder may choose X_i causally from (J,Y^{i-1}) and private randomization U independent of J and the channel; equivalently it has a kernel P_{X_i|J,Y^{i-1}}. The channel law is memoryless:

    P(Y_i=y | X^i,Y^{i-1},J,U)=W(y|X_i).

Thus Y_i-X_i-(J,Y^{i-1}) is a Markov chain. The decoder estimates J from Y^n, with average error epsilon. This proof concerns fixed-length vanishing-error capacity; it does not concern zero-error capacity, variable-length feedback, or channels with memory. PW Theorem 23.3 (printed p. 443 / PDF p. 468) states the same no-gain conclusion for stationary-memoryless channels.

The chain rule and conditional data processing give

    I(J;Y^n)
      = sum_{i=1}^n I(J;Y_i|Y^{i-1})
      <= sum_{i=1}^n I(X_i;Y_i|Y^{i-1}).

For each positive-probability history y^{i-1}, the conditional channel from X_i to Y_i is exactly W. Therefore

    I(X_i;Y_i|Y^{i-1})
      = sum_{y^{i-1}} P(y^{i-1})
            I(P_{X_i|Y^{i-1}=y^{i-1}},W)
      <= C,
    C=max_{P_X} I(P_X,W).

The maximum exists by compactness of the finite input simplex and continuity of mutual information. Hence I(J;Y^n)<=nC. Fano's inequality gives

    (1-epsilon)ln M <= I(J;Y^n)+ln 2 <= nC+ln 2.

For any sequence of feedback codes with average error tending to zero, limsup n^{-1}ln M<=C. If maximal error tends to zero, its average error does too, so the same converse applies.

For achievability, take any no-feedback code for W and let the encoder ignore Y^{i-1}. The random-coding proof (1) gives vanishing average error for every R<C; the exact-size expurgation there gives vanishing maximal error as well. Such encoders are a subset of the feedback encoders, so C_fb>=C. The converse proves C_fb<=C. This argument establishes only the fixed-length finite-DMC Shannon capacity equality; it makes no assertion for variable-length, zero-error, cost-constrained feedback, or channels with memory.

## Real and complex AWGN capacity with shell achievability

Let Z_i be iid N(0,sigma^2), sigma^2>0, and Y_i=X_i+Z_i. Codes are deterministic and obey the per-codeword peak block-power constraint sum_i x_{m,i}^2<=nP. There is no feedback. PW Definition 20.10 and Theorem 20.11 (printed pp. 399–400 / PDF pp. 424–425) give C(P)=1/2 ln(1+P/sigma^2). The proof below supplies the operational directions under this block constraint.

### Entropy is finite, and Gaussian maximizes it

If U has a density f, finite second moment, and variance s^2>0, relative entropy to the Gaussian density phi_{m,s^2} with m=EU gives

    0 <= D(f||phi_{m,s^2})=-h(U)+1/2 ln(2 pi e s^2),

so h(U)<=1/2 ln(2 pi e s^2). For a finite code, every output coordinate is a finite Gaussian mixture: its density is bounded above by 1/(sqrt(2 pi)sigma), so h has a finite lower bound; finite second moment and the KL inequality give a finite upper bound. Joint outputs are finite Gaussian mixtures too. Entropy subadditivity follows by expanding D(P_{Y^n}||product_i P_{Y_i})>=0, avoiding any undefined infinity-minus-infinity subtraction.

For uniform J, Y^n conditional on J is a translate of Z^n, hence h(Y^n|J)=n/2 ln(2 pi e sigma^2). Since X^n is a deterministic function of J and Y depends on J only through X^n, I(J;Y^n)=I(X^n;Y^n). Put p_i=E X_i^2. The maximum-entropy inequality, subadditivity, and Jensen yield

    I(J;Y^n)
      <= sum_i [h(Y_i)-h(Z_i)]
      <= 1/2 sum_i ln(1+p_i/sigma^2)
      <= n/2 ln(1+(n^{-1}sum_i p_i)/sigma^2)
      <= n/2 ln(1+P/sigma^2).                                  (15)

The peak constraint implies the last average-power inequality after averaging over messages; the same converse holds if only average-over-codebook power is constrained. Fano gives (1-e_av)ln M<=I(J;Y^n)+ln 2. Thus any sequence with error tending to zero has limsup n^{-1}ln M<=C(P); maximal error tending to zero implies the same average-error condition. At P=0 every codeword is zero and capacity is zero.

### Continuous Gaussian inputs conditioned to a finite-energy shell

Fix 0<=P'<P and draw iid X_i~N(0,P'). Under the induced output N(0,P'+sigma^2), the information density is

    i(X;Y)=1/2 ln(1+P'/sigma^2)
            +Y^2/[2(P'+sigma^2)] -(Y-X)^2/(2 sigma^2).

It is a quadratic polynomial in jointly Gaussian variables, with finite absolute mean, finite variance, and mean C(P')=1/2 ln(1+P'/sigma^2). Hence its iid average converges in probability to C(P') (Chebyshev is enough).

Let F_n={sum_i X_i^2<=nP} and alpha_n=P(F_n). The weak law for X_i^2 gives alpha_n->1. Generate every codeword from P_{X^n|F_n}; it then satisfies the peak power constraint. If q^n is the unconditioned output density and q_F is the output density under the conditioned input, then

    q_F(y^n)=alpha_n^{-1} integral_{F_n} W^n(y^n|x^n)P^n(dx^n)
           <= q^n(y^n)/alpha_n.

Consequently i_F(x^n;y^n)=ln[W^n(y^n|x^n)/q_F(y^n)] >= i_0(x^n;y^n)+ln alpha_n, and for every event A, P_F(A)<=alpha_n^{-1}P_{P^nW^n}(A).

For any continuous input law Pi with induced output Q and density ratio dW_x/dQ, the threshold random-code proof gives a deterministic code with

    e_av <= P_{Pi W}{i(X;Y)<=ln((M-1)/2)+gamma}+exp(-gamma).    (16)

Draw iid codewords from Pi and decode to the first word whose information density exceeds tau, erasing if none does. The transmitted word fails with probability P{i<=tau}. An independent competing word passes under Pi x Q with probability at most exp(-tau), since E_{Pi x Q}[dW_X/dQ]=1. Averaging the number of earlier competitors over the transmitted index gives at most (M-1)/2 trials. Choose tau=ln((M-1)/2)+gamma. Erasures count as errors. Here all Gaussian mixture densities are strictly positive and finite, so the Radon–Nikodym ratio is well-defined.

Choose R<C(P') and delta>0 with R+2delta<C(P'). Set M_n=ceil(exp(nR)) and gamma=n delta. Under the shell law, the threshold-failure probability is bounded by

    alpha_n^{-1} P_{P^nW^n}{ n^{-1}sum_i i(X_i;Y_i) <= R+2delta } -> 0.

The convergence follows from the iid information-density law and alpha_n->1; exp(-n delta)->0 as well. A deterministic peak-power code therefore achieves every rate below C(P'). Let P' increase to P to get every average-error rate R<C(P). For a maximal-error target R<C(P), first choose R<R'<C(P') and construct the shell code at rate R'; from its average-error sequence a_n->0 retain messages with error at most sqrt(a_n). Markov retains fraction at least 1-sqrt(a_n), which still leaves at least ceil(exp(nR)) messages for all sufficiently large n; the maximum error tends to zero. This proves the real-AWGN formula under per-codeword peak block power for both vanishing average and vanishing maximal error.

For complex AWGN, identify C with R^2. A circular Gaussian with E|Z|^2=sigma^2 has entropy ln(pi e sigma^2); applying KL to the circular Gaussian with the same mean and total second moment gives h(U)<=ln(pi e E|U-EU|^2). A finite code output mixture has density bounded by 1/(pi sigma^2) and finite second moment, so its differential entropy is finite. The converse repeats (15) with this entropy, yielding C(P)=ln(1+P/sigma^2). Achievability uses iid circular Gaussian inputs of variance P', conditions on sum_i |X_i|^2<=nP, and applies (16); the information density again has finite variance. For maximal error, choose an initial rate strictly above the target but below the shell mutual information, then expurgate as in the real case. No finite-blocklength exponent claim follows.

## Finite parallel-AWGN water-filling and zero-power modes

Let L be finite, Y_{ij}=X_{ij}+Z_{ij}, with independent Z_{ij}~N(0,sigma_j^2), every 0<sigma_j^2<infinity, and per-codeword cost sum_{i,j}X_{ij}^2<=nP. PW Definition 20.13 and Theorem 20.14 (printed pp. 402–403 / PDF pp. 427–428) give water-filling. Entropy subadditivity over coordinates and Jensen over time give

    I(J;Y^{nL}) <= 1/2 sum_{i,j}ln(1+E X_{ij}^2/sigma_j^2)
       <= n max_{p_j>=0, sum_j p_j<=P} 1/2 sum_j ln(1+p_j/sigma_j^2). (17)

Fano supplies the operational converse. The finite feasible simplex is compact, so an optimizer exists; for P>0 it uses the full budget because every derivative is positive. Let A={j:p_j>0}, which is nonempty. Transferring a small amount of power between any two active branches is feasible in both directions, so their derivatives 1/[2(sigma_j^2+p_j)] are equal to one common lambda>0. Transferring a small amount from an active branch to an inactive branch is feasible in the positive direction; optimality forces the inactive derivative 1/(2 sigma_j^2) to be no larger than lambda. Thus, with T=1/(2lambda),

    p_j=(T-sigma_j^2)^+,  sum_j(T-sigma_j^2)^+=P,
    C_L(P)=1/2 sum_j ln^+(T/sigma_j^2).                         (18)

For P>0 the water-level equation has a unique solution: its left side is continuous, zero through min_j sigma_j^2, strictly increasing above that value, and unbounded. Inactive branches are zero-power modes and contribute zero. For P=0 all p_j=0 and capacity is zero. If any sigma_j^2=0 and P>0, capacity is infinite because that real coordinate can carry arbitrarily many distinct bounded amplitudes with zero error; (18) explicitly excludes this case.

For achievability, let p* solve (18), choose eta in (0,1), and set p'_j=(1-eta)p*_j. The total power is (1-eta)P<P and the independent Gaussian-input mutual information C_L(p'):=1/2 sum_j ln(1+p'_j/sigma_j^2) approaches C_L(P) as eta decreases to zero. Draw iid L-vectors per use with independent coordinates N(0,p'_j), then condition each n-use codeword on total energy <=nP. The weak law makes the shell probability tend to one. The conditioned output density is bounded by the unconditioned Gaussian output density divided by the shell probability, and the vector information density has finite variance and mean C_L(p'). Apply (16) exactly as in the scalar proof; then let eta decrease to zero to get average-error rates below C_L(P). For a maximal-error target R<C_L(P), use an initial rate R'>R below C_L(p') before expurgating; the retained fraction 1-o(1) still leaves at least ceil(exp(nR)) messages. Thus (18) is operational for both vanishing error criteria under the per-codeword total block-power constraint.

Peak block power and average-over-codebook power have the same Shannon capacity here: shell codes meet the peak constraint, while (15) and (17) use only the average second-moment budget in their converse. This does not identify their finite-blocklength formulas; PPV Theorem 54 treats equal-energy, maximal-energy, and average-energy criteria separately.

## Scope checks and counterexamples

The sound DMC conclusions are distinct: E_r is a proved below-capacity lower exponent; E_ex is an additional expurgated lower exponent; E_sp is the locally derived upper exponent in the strict-feasibility range R>R_inf; and this note locally proves exact equality for R_match<R<C when that interval is nonempty. At lower rates the bounds may not match and the general DMC reliability function is open. The limits defining an exponent must be proved to coincide before writing a single-valued reliability function.

The noiseless q-ary DMC has C=ln q and zero error for all R<ln q, so its error exponent is +infinity. This rules out a universally finite low-rate formula. Conversely, every finite DMC above C has error exponent zero by (14); the positive variational formula above capacity is a success exponent. For R<=R_inf, strict feasibility can fail, so this note does not claim the local dual proof (8) at that endpoint. The PPV Theorem 12 finite-n SGB statement is an authoritative source result, but its cited main-text derivation is a sketch and is not silently treated as the missing local endpoint argument.

The real and complex AWGN proofs concern finite-dimensional memoryless channels under the stated energy cost. They do not prove continuous-time spectral water-filling: PW §20.5* flags unresolved functional-analytic details in its continuous-time discussion. Channel water-filling (18) is finite-dimensional concave power allocation; reverse water-filling for Gaussian source coding is a separate theorem. No conclusion here covers feedback, arbitrary channels with memory, cost-constrained DMC error exponents, or AWGN error exponents.


The finite-simplex optimality step in the optimized Gallager identity uses no unspecified KKT theorem: for the differentiable convex Z, every feasible segment from its minimizer P* toward a vertex has nonnegative derivative, so partial_x Z>=sum_x P*(x)partial_x Z. The weighted average of these nonnegative slacks is zero, hence equality holds at every positive coordinate. Euler's identity for the finite homogeneous formula gives the stated common derivative Z/alpha. The sphere-packing weak-separation supplier explicitly carries AC and Countable Choice; these premises propagate to that proof branch.


## Standard-Borel entropy quantization: complete direct proof

Choose a countable separating generator (A_j) of the standard-Borel space and let q_n label the finite partition generated by A_1,...,A_n. For every x, its cells C_n(x) decrease to {x}; continuity from above gives mu(C_n(x)) down to mu({x}). Thus -ln mu(C_n(X)) increases to -ln mu({X}), allowing +infinity. Monotone convergence yields H(q_n(X)) up to E[-ln mu({X})]. The point-mass set A={x:mu({x})>0} is countable: for each k only finitely many points have mass >=1/k. If mu(A)=1, the diagonal joint law is dominated by mu tensor mu and has density 1/mu({x}) at (x,x), zero off the diagonal, so its KL is precisely this expectation. If mu(A)<1, the diagonal restricted to X outside A has positive joint mass and zero product mass by Tonelli; it is measurable because standard-Borel diagonals and countable A are measurable. Then self-information is infinity, agreeing with the expectation (its integrand is infinity on positive mass). Finally every finite q obeys H(q(X))=I(q(X);q(X))<=I(X;X) by deterministic DPI. These two inequalities prove the supremum identity without assuming that arbitrary product partitions are automatically diagonal quantizers. All RN/Tonelli/standard-Borel suppliers retain their actual AC premises.

In the finite Renyi-to-KL proof, the alpha-up-to-1 sum limit in the non-AC case is P{q_i>0}, not Q(supp P) (the latter belongs to the alpha-down-to-0 limit). If this P-mass is zero, every alpha<1 sum is zero and D_alpha=infinity; otherwise its logarithm tends to a strictly negative constant while alpha-1 tends to zero from below. In either case the claimed alpha-to-1 divergence to infinity follows.


## Complete finite HSW, phase-corrected LSD, and entanglement-assisted coding development


This note supplies local finite-dimensional proofs for the HSW, LSD, and entanglement-assisted (EA) capacity obligations, corresponding to thm-it-hsw-classical-quantum-channel-capacity, thm-it-quantum-channel-capacity-regularized-coherent-information, and thm-it-entanglement-assisted-classical-capacity. It is a mathematical supplement for integration; it does not edit any shared/canonical information-theory item. All logarithms in this note are base 2, all systems and alphabets are finite and nonempty, and all channels are finite-dimensional CPTP maps on full operator spaces. A channel is an abstract map; no laboratory-realization assumption is used.

The proof locators are Wilde, *From Classical to Quantum Shannon Theory*, arXiv:1106.1445v8: typical projectors, Ch. 14; packing and Hayashi–Nagaoka, Ch. 16, pp. 483–494; cq HSW, Ch. 20, pp. 562–573; EA coding/converse, Ch. 21, pp. 587–604; private coding, Ch. 23, pp. 637–660; quantum capacity, Ch. 24, pp. 661–671. Devetak, quant-ph/0304127v6, pp. 9–20, is the independent private/quantum capacity cross-check. These are locators only: the arguments below include the finite lemmas used by the capacity proofs.

## Finite interfaces and conventions

For a state ρ, S(ρ)=−Tr ρ log ρ, with 0 log 0=0. For a finite ensemble (p_x,ρ_x), put ρ̄=Σ_x p_xρ_x and χ= S(ρ̄)−Σ_xp_xS(ρ_x). The associated cq state has entropy H(p)+Σp_xS(ρ_x), so χ=I(X;B). This identity follows by diagonalizing each orthogonal classical block. A measurement is the CPTP map ρ↦Σ_yTr(ρΛ_y)|y〉〈y| for a finite POVM {Λ_y}. The measurement/Holevo bound follows from finite quantum relative-entropy DPI applied to each pair (ρ_x,ρ̄), then summing: I(X;Y)≤χ. The finite QRE-DPI proof contract is the independent resolvent/joint-convexity/twirl ladder in audit/independent-proof-notes.md, “Quantum relative-entropy DPI: finite-dimensional resolvent ladder”; finite SSA follows there by applying partial-trace DPI to (ρ_ABC,ρ_A⊗ρ_BC), after checking support inclusion. Trace-distance channel contractivity alone does not supply either statement.

A channel N:A→B has a finite Stinespring isometry U:A→BE, supplied by the published thm-qc-finite-stinespring-dilation; write N^c for its E marginal. For a state ρ_A, choose any purification |φ〉_RA and set
Ic(ρ,N)=S(B)_(id⊗N)(φ)−S(E)_(id⊗N^c)(φ)=−S(R|B).
The equality follows because RBE is pure and hence S(E)=S(RB); changing a purification changes the purifying register by an isometry and leaves these entropies invariant. The root-fidelity convention of the QC library is retained. If F is root fidelity and F² is squared fidelity, the Fuchs–van de Graaf inequality is D≤√(1−F²), where D=||ρ−σ||₁/2.

The following code convention is used throughout. An (n,M) classical code has a uniform message M∈{1,…,M}, one encoder state per message (or a declared stochastic encoder), a finite decoder POVM, and average block error
e= M⁻¹Σ_m [1−Tr Λ_m ρ_m].
An (n,K) quantum code has an encoder CPTP map L(K)→A^⊗n and a decoder CPTP map B^⊗n→L(K). Its entanglement-transmission error is tested on the maximally entangled state Φ_RL of Schmidt rank K; the displayed squared-fidelity convention is F_s=〈Φ|ω_RL|Φ〉. The LSD direct proof below establishes this criterion on Φ_RL. EA codes have a uniform classical message, arbitrary prior shared state independent of the message, Alice’s local message-controlled CPTP encoder, N^⊗n as the only transmitted system, and Bob’s joint decoder using his retained share. There is no forward classical aid in the EA theorem.

## Typical-projector lemma

Finite bounded concentration lemma. Suppose Z₁,…,Z_n are independent, each with law chosen from a fixed finite family of bounded real distributions. For every a>0 there are c,C>0, depending only on that family and a, such that
Pr{|Σ_i(Z_i−E Z_i)|≥na}≤C e^{-cn}
uniformly over the coordinate-by-coordinate choices of laws. For each law j, the centered moment generating function m_j(λ)=E exp(λ(Z−EZ)) has m_j(0)=1 and derivative zero at zero. Since the family is finite and bounded, Taylor's theorem gives log m_j(λ)≤C₀λ² uniformly for |λ|≤λ₀. Choose 0<λ≤λ₀ with C₀λ≤a/2. Exponential Markov then bounds the upper tail by exp(−λna+nC₀λ²)≤exp(−λna/2); apply the same argument to −Z for the lower tail. The one-letter boundedness and finite-family hypotheses are load-bearing; this is the exact concentration statement used below.

Let τ be a state on a finite nonzero space and let h=S(τ). For every fixed δ>0 there are spectral projectors Π_n such that, for all sufficiently large n,
Tr Π_n τ^⊗n ≥1−a_n,
rank Π_n ≤2^{n(h+δ)}, and
Π_n τ^⊗n Π_n ≤2^{-n(h−δ)}Π_n,
where a_n→0.

Proof. Diagonalize τ=Σ_j λ_j|j〉〈j| and sample J with probabilities λ_j on its positive support. The surprisal Z=−log λ_J is a bounded finite-valued random variable with mean h. Define Π_n as the span of |j_1…j_n〉 whose sum of surprisals lies in [n(h−δ),n(h+δ)]. The bounded concentration lemma gives omitted mass at most C e^{-cn}. Each included eigenvalue is at most 2^{-n(h−δ)}, proving the operator bound. Each included eigenvalue is at least 2^{-n(h+δ)}; since their sum is at most one, their count is at most 2^{n(h+δ)}. Zero eigenvalues are excluded, so no logarithm at zero is used.

For an ensemble (p_x,σ_x) on B, choose an input strong-typical set T_n defined by |n_x(x^n)/n−p_x|≤κ for each positive-probability letter x, with Pr{X^n∉T_n}=η_n≤C e^{-cn}. This follows by applying the bounded concentration lemma to each symbol indicator and taking a finite union bound. Choose κ small enough that the empirical means of each finite family of conditional surprisals below differ from their p-averages by at most half the projector window δ. For x^n∈T_n, let σ_{x^n}=⊗_iσ_{x_i}. A conditional spectral projector Π_{x^n} can be chosen with
Tr Π_{x^n}σ_{x^n}≥1−b_n,
rank Π_{x^n}≤2^{n(H(B|X)+δ)},
Π_{x^n}σ_{x^n}Π_{x^n}≤2^{-n(H(B|X)−δ)}Π_{x^n},
where H(B|X)=Σ_xp_xS(σ_x), and b_n≤C e^{-cn} (with the δ slack chosen to absorb the strong-typical type tolerance). To see this, diagonalize each σ_x, draw its eigenbasis outcome independently at each coordinate, and apply bounded concentration to the finite family of conditional surprisal laws; the empirical counts of x are close to p. The same eigenvalue and rank argument as above gives the last two inequalities.

There is also a global projector Π_n for σ̄^⊗n with
Tr Π_nσ_{x^n}≥1−c_n for every x^n∈T_n,
Π_nσ̄^⊗nΠ_n≤2^{-n(S(σ̄)−δ)}Π_n,
rank Π_n≤2^{n(S(σ̄)+δ)},
where c_n≤C e^{-cn}. For the first inequality, measure each output in an eigenbasis of σ̄. On supp σ̄ every σ_x is supported there when p_x>0. The random variable −log λ_J is bounded on that finite support; its mean conditioned on x is μ_x=Tr σ_x(−log σ̄), and Σ_xp_xμ_x=S(σ̄). By the choice of κ, every strong-typical x^n satisfies |Σ_iμ_{x_i}−nS(σ̄)|≤nδ/2; apply bounded concentration with deviation nδ/2 to the finite family of conditional eigenbasis-outcome laws. The remaining two bounds are the first state-projector lemma.

## Gentle measurement and packing

Gentle measurement lemma. If 0≤Λ≤I and Tr Λρ≥1−u for a state ρ, then
||ρ−√Λρ√Λ||₁≤2√u.
Purify ρ to |ψ〉. Put v=(√Λ⊗I)|ψ〉 and q=||v||²=Tr Λρ. The trace norm difference of two rank-one positive operators is
|| |ψ〉〈ψ|−|v〉〈v| ||₁ =√((1+q)²−4|〈ψ,v〉|²).
Since √Λ≥Λ, 〈ψ,v〉=Tr ρ√Λ≥q. Therefore the square is at most (1+q)²−4q²=(1−q)(1+3q)≤4(1−q)≤4u. Partial-trace contractivity proves the claim for ρ. By scaling, if X≥0 has trace at most one, then
||X−√ΛX√Λ||₁≤2√(Tr X · Tr[(I−Λ)X]).
This follows by applying the same purification calculation to the unnormalized vector of squared norm Tr X.

Square-root packing lemma. Let (p_x,σ_x) be a finite ensemble on B, let σ̄=Σp_xσ_x, and for each sampled x choose projections Π and Π_x with
Tr Πσ_x≥1−u, Tr Π_xσ_x≥1−u, rank Π_x≤d,
Πσ̄Π≤D⁻¹Π.
Draw M code letters independently from p. Set Γ_m=ΠΠ_{x(m)}Π and S=Σ_mΓ_m. Define Λ_m=S^{-1/2}Γ_mS^{-1/2} on supp S and zero off supp S; add Λ_0=I−Σ_mΛ_m. Then
E e ≤2(u+2√u)+4(M−1)d/D.                                               (P)

Proof. For 0≤S₀≤I and T₀≥0, the Hayashi–Nagaoka inequality is
I−(S₀+T₀)^{-1/2}S₀(S₀+T₀)^{-1/2}
≤2(I−S₀)+4T₀.                                                        (HN)
Here inverses are on support. For completeness, for c>0 and any A,B,
c⁻¹A* A+cB*B≥A*B+B*A by (A−cB)*(A−cB)≥0. Set A=√T₀R and B=√T₀(I−R). Expanding T₀ gives
T₀=R*T₀R+R*T₀(I−R)+(I−R)*T₀R+(I−R)*T₀(I−R).
The weighted square inequality bounds the two middle terms by c⁻¹R*T₀R+c(I−R)*T₀(I−R), so
T₀≤(1+c⁻¹)R*T₀R+(1+c)(I−R)*T₀(I−R).
Put X=S₀+T₀ and R=√X. Congruence by I−√X and T₀≤X give
T₀≤X^1/2[(1+c⁻¹)T₀+(1+c)(I+X−2√X)]X^1/2
=X^1/2[(2+c+c⁻¹)T₀+(1+c)(I+S₀−2√X)]X^1/2.
The identity uses (I−√X)X(I−√X)=X^1/2(I+X−2√X)X^1/2 and X=S₀+T₀. The scalar square-root function is operator monotone in finite dimensions: use
√X=π⁻¹∫₀^∞ t^(-1/2)X(X+tI)⁻¹dt
and inverse order (X+tI)⁻¹≥(Y+tI)⁻¹ when 0<X≤Y, then approximate semidefinite X by X+εI. Thus S₀≤√S₀≤√X, so I+S₀−2√X≤I−S₀. Conjugating by X⁻¹/² on supp X yields
X⁻¹/²T₀X⁻¹/²≤(2+c+c⁻¹)T₀+(1+c)(P_X−S₀),
where P_X is the support projector; S₀ and T₀ vanish off P_X. Finally,
I−X⁻¹/²S₀X⁻¹/²=I−P_X+X⁻¹/²T₀X⁻¹/².
Since I−P_X+(1+c)(P_X−S₀)≤(1+c)(I−S₀), setting c=1 proves (HN).

For message m apply (HN) with S₀=Γ_m and T₀=Σ_{j≠m}Γ_j. The first term obeys
Tr (I−Γ_m)σ_{x(m)}≤u+2√u:
indeed Tr Γ_mσ=Tr Π_xΠσΠ≥Tr Π_xσ−||ΠσΠ−σ||₁≥1−u−2√u by the gentle lemma. For j≠m, independence gives
E Tr Γ_jσ_{x(m)}
=Tr [Π EΠ_{X'} Π] σ̄
≤D⁻¹ Tr Π EΠ_{X'}Π
≤d/D.
The first inequality uses Πσ̄Π≤D⁻¹Π; the last uses rank Π_{X'}≤d and Π≤I. Summing the Hayashi–Nagaoka bound proves (P). In particular, some deterministic code has average error no greater than its expected average error. If average error is e, expurgating messages with individual error greater than √e removes at most √e of them and gives maximum error at most √e.

## Finite cq HSW theorem

Let X be a fixed finite nonempty alphabet, x↦ρ_x a cq channel to a finite nonzero B, and use it memorylessly: x^n maps to ⊗_iρ_{x_i}. With a uniform message set, deterministic codewords x^n(m), and average block error as defined above, the capacity is
C_cq=max_p χ(p),   χ(p)=S(Σ_xp_xρ_x)−Σ_xp_xS(ρ_x) bits/use.             (HSW)

Direct part. Fix p and a rate R<χ(p). Pick a small δ>0 so R<χ(p)−4δ. Draw each length-n codeword independently from p^⊗n conditioned on the strong-typical set T_n. The conditioning probability tends to one; its output barycenter σ̄'_n satisfies
σ̄'_n = E[ρ_{X^n}|X^n∈T_n] ≤(1−η_n)⁻¹ (Σ_xp_xρ_x)^⊗n.
Use the global and conditional projectors above. The conditions for (P) hold with u=max(b_n,c_n), d≤2^{n(H(B|X)+δ)}, and
D⁻¹=(1−η_n)⁻¹2^{-n(S(B)−δ)}.
For N=⌊2^{nR}⌋ messages, (P) gives
E e ≤2(u+2√u)+4N(1−η_n)⁻¹2^{-n(χ(p)−2δ)}→0.
Choose a deterministic code with this average-error bound. Taking p maximizing χ proves every R<max_pχ achievable. The maximum exists by compactness of the finite probability simplex and continuity of finite entropy.

Converse. For any n-use code, let M be uniform and let ρ_m be its output. The measurement/Holevo bound and Fano give
(1−e)log M ≤ I(M;Y)+h₂(e) ≤ χ({1/M,ρ_m})+h₂(e).
For any codeword x^n(m), the conditional output is a product, so its entropy is Σ_iS(ρ_{x_i(m)}). If p_i is the empirical distribution of the i-th input symbol across uniform messages, subadditivity gives
S(M⁻¹Σ_m⊗_iρ_{x_i(m)})≤Σ_i S(Σ_xp_i(x)ρ_x).
Subtracting the average conditional entropy yields
χ({1/M,ρ_m})≤Σ_iχ(p_i)≤n max_pχ(p).
Thus (1−e)log M≤nC_cq+h₂(e), which proves the converse when e_n→0. If only average error is given in a direct code, the expurgation just proved also yields a maximum-error code with the same asymptotic rate.

For a fully quantum finite channel N:A→B, apply this cq theorem to any finite ensemble of input states on A^⊗k and the block channel N^⊗k, then use that block as one super-symbol. This proves achievability of χ(N^⊗k)/k for each k. Conversely the measurement/Holevo/Fano bound gives (1−e)log M≤χ(N^⊗n)+h₂(e) for every n-use code. The sequence a_n=χ(N^⊗n) is superadditive by product ensembles, and 0≤a_n≤n log dim B. If a_{qk+r}≥q a_k+a_r with a_r≥0, dividing by qk+r and taking q→∞ gives liminf_n a_n/n≥a_k/k for each k; the reverse bound by sup is immediate. Hence lim_n a_n/n=sup_k a_k/k, the general unassisted classical capacity formula. This is a regularized statement; no single-letter additivity is inferred for a general quantum channel.


## Randomized privacy lemma and its proof

This section proves the finite block ingredients needed for the LSD direct part; it does not claim a private-capacity formula or treat arbitrary mixed cq codewords as orthogonal quantum codewords.

Fix a finite alphabet X, a distribution p with p_x>0 on its support, and a finite cq wiretap channel x↦(β_x,ε_x), where β_x and ε_x are Bob's and Eve's states for input letter x. They may be mixed and need not have a common purification on BE. For a quantum channel N and a chosen input ensemble, take β_x=N(ρ_x), ε_x=N^c(ρ_x); the pure output extension is needed only for the later spectral-ensemble LSD construction. The codebook is public; Alice chooses the randomizer k locally and uniformly, while Bob decodes both the message and randomizer. Eve's security criterion below is raw trace-norm distance to a fixed state for each message. Write
β̄=Σp_xβ_x, ε̄=Σp_xε_x,
I_B=S(β̄)−Σp_xS(β_x), I_E=S(ε̄)−Σp_xS(ε_x), H_X=−Σp_xlog p_x.
By the Holevo bound χ≤H(X), 0≤I_B≤H_X and 0≤I_E≤H_X. One direct proof of χ≤H(X) is
χ=Σ_xp_xD(β_x||β̄)≤Σ_xp_xlog(1/p_x)=H_X,
because β̄≥p_xβ_x and operator log is monotone on positive support; this operator monotonicity follows from the inverse-resolvent formula in the finite DPI ladder. The same applies to Eve. The formula also proves support inclusion supp β_x⊆supp β̄.

For each n use the strong-typical input law p'_n(x^n)=p^⊗n(x^n)/P_n(T_n) on T_n and zero off it, where P_n(T_n)=1−η_n→1. For every fixed small δ>0, the output typical-projector construction above supplies:
- global projectors P_B,P_E of ranks at most 2^{n(S(B)+δ)},2^{n(S(E)+δ)} and operator bounds for β̄^⊗n, ε̄^⊗n;
- for every x^n∈T_n, conditional projectors P_{B|x^n},P_{E|x^n}, with acceptance at least 1−u_n, ranks at most 2^{n(H(B|X)+δ)},2^{n(H(E|X)+δ)}, and conditional operator norm at most 2^{-n(H(B|X)−δ)},2^{-n(H(E|X)−δ)}.
Here u_n→0. These are the preceding typical-projector proof applied separately to the B and E marginals.

Iid covering bound. Let x^n(1),…,x^n(K) be independent draws from p'_n, and put
ω_E=K⁻¹Σ_k ε_{x^n(k)},     ε_{x^n}=⊗_iε_{x_i}.
For every fixed δ as above, there is r_n→0, explicitly
r_n=2√u_n+2√(u_n+2√u_n),
such that
E ||ω_E−ε̄^⊗n||₁
≤ 2r_n+2η_n +(1−η_n)⁻¹/² 2^{-n(R₀−I_E−2δ)/2}                       (C)
whenever K≥2^{nR₀}.

Proof. For typical x^n set
τ_{x^n}=P_E P_{E|x^n} ε_{x^n} P_{E|x^n}P_E,
and set τ=0 off T_n. The conditional gentle lemma gives
||ε_{x^n}−P_{E|x^n}ε_{x^n}P_{E|x^n}||₁≤2√u_n.
Let X=P_{E|x^n}ε_{x^n}P_{E|x^n}. The global acceptance and the preceding estimate imply Tr(P_E X)≥1−u_n−2√u_n. Hence Tr[(I−P_E)X]≤u_n+2√u_n, and the unnormalized gentle lemma gives
||X−P_EX P_E||₁≤2√(u_n+2√u_n).
Thus the mean truncation loss E_{p'_n}||ε_{X^n}−τ_{X^n}||₁≤r_n. Conditioning p^⊗n on T_n changes its law in total variation by η_n, so
||E_{p'_n}ε_{X^n}−ε̄^⊗n||₁≤2η_n.
Consequently ||Eτ−ε̄^⊗n||₁≤r_n+2η_n.

Every τ is supported on P_E, has trace at most one, and obeys
||τ_{x^n}||∞≤2^{-n(H(E|X)−δ)}.
Therefore Tr τ²≤2^{-n(H(E|X)−δ)}. Independence and centering cancel cross terms in Hilbert–Schmidt norm:
E||K⁻¹Σ_k(τ_k−Eτ)||₂²
=K⁻¹E Tr(τ−Eτ)²≤K⁻¹ETrτ².
For an operator A supported on a D-dimensional space, ||A||₁≤√D||A||₂ by Cauchy–Schwarz on its singular values. Here D=rank P_E≤2^{n(S(E)+δ)}. Jensen therefore bounds
E||K⁻¹Σ_kτ_k−Eτ||₁
≤(1−η_n)⁻¹/² 2^{-n(R₀−I_E−2δ)/2}.
Finally triangle inequality adds the sample truncation loss r_n and the mean bias r_n+2η_n, proving (C). This establishes covering without an operator Chernoff citation.

## Finite private code from packing plus covering

Fix R₀>I_E+4δ and R>0 such that
R+R₀<I_B−4δ,     R+R₀<H_X−2δ.                                      (R)
The strict last inequality is possible whenever R+R₀<I_B and I_B≤H_X. Take M=⌊2^{nR}⌋ and K=⌈2^{nR₀}⌉ independent random typical input sequences x^n(m,k), with common law p'_n. Since K≤2·2^{nR₀}, the ceiling changes the block-code rate by at most 1/n; the strict packing and collision margins absorb this constant factor for all sufficiently large n. In particular K≥2^{nR₀}, as required by the covering bound (C).

Apply the square-root packing lemma to the N=MK codewords through Bob's cq channel, using the B typical projectors. Its expected average error over uniform (m,k) is
e_n≤2(u_n+2√u_n)+4MK(1−η_n)⁻¹2^{-n(I_B−2δ)}→0.
For each message m the averaged Eve state is ω_m=K⁻¹Σ_k ε_{x^n(m,k)}. Apply (C) independently to each message bin and average over m; the expected leakage
ℓ_n=M⁻¹Σ_m||ω_m−ε̄^⊗n||₁
is bounded by the right side of (C), hence tends to zero.

Distinctness is needed for coherent encoding. Each x^n drawn from p'_n is strongly typical, so
max_{x^n∈T_n}p'_n(x^n)≤(1−η_n)⁻¹2^{-n(H_X−δ)}.
For N iid codewords, the expected fraction f_n of entries that have a duplicate is at most
(N−1)(1−η_n)⁻¹2^{-n(H_X−δ)}→0
by (R): for a fixed entry, union bound over the other N−1 entries bounds its collision probability by (N−1) times the maximum atom. This argument controls the fraction of marked entries, even when the expected number of colliding pairs itself is large.

Since e_n+ℓ_n+f_n→0 in expectation, for each sufficiently large n there is one deterministic codebook with all three quantities tending to zero. In that book delete every entry whose sequence is duplicated; all remaining sequences are distinct. For message m let f_m be its deleted fraction, so M⁻¹Σ_m f_m=f_n. Retain initially the messages with f_m≤√f_n; at least (1−√f_n)M remain and each retains K_m≥(1−√f_n)K keys.

Let e_m be message m's original average pair-error over its K keys and let ℓ_m=||ω_m−ε̄^⊗n||₁. The average over retained messages of the post-deletion key-average error is at most e_n/(1−√f_n)²: total retained error is at most the original total MKe_n, while every retained message has at least (1−√f_n)K keys and there are at least (1−√f_n)M such messages. Deleting fraction f_m of a mixture and renormalizing changes its state by at most 2f_m in trace norm (write the original as (1−f_m)ρ_keep+f_mρ_del and use ||ρ_del−ρ_keep||₁≤2). Thus the average post-deletion leakage among retained messages is at most ℓ_n/(1−√f_n)+2√f_n. Both averages vanish.

Put q_n equal to the sum of these two post-deletion message averages. Markov's inequality permits a final expurgation removing at most a √q_n fraction of messages and leaving, for every remaining m,
K_m⁻¹Σ_{k∈K_m} [1−Tr Λ_{m,k}β_{x^n(m,k)}]≤√q_n,
||K_m⁻¹Σ_{k∈K_m}ε_{x^n(m,k)}−ε̄^⊗n||₁≤√q_n.                     (W)
The retained pairs keep their old POVM effects; all discarded outcomes are combined into the failure outcome, so their success probabilities do not decrease. The final message rate tends to R, each K_m has rate at least R₀−o(1), all codeword sequences are distinct, and (W) is a per-message reliability/secrecy criterion. No privacy capacity formula for arbitrary mixed ensembles is used in the quantum argument below.

## LSD direct coding: coherentizing the spectral private code

Fix a finite-dimensional channel N:A→B and any input density operator ρ_A on its nonzero finite-dimensional input. Choose a spectral decomposition
ρ_A=Σ_xp_x|x〉〈x|,
where the |x〉 are an orthonormal eigenbasis on the support and p_x>0. Apply a fixed finite Stinespring isometry U_N:A→BE. The state U_N|x〉 is pure, so its marginals are β_x=N(|x〉〈x|) and ε_x=N^c(|x〉〈x|), and
I_B−I_E
=[S(B)_N(ρ)−Σ_xp_xS(β_x)]−[S(E)_{N^c(ρ)}−Σ_xp_xS(ε_x)]
=S(B)_{N(ρ)}−S(E)_{N^c(ρ)}
=Ic(ρ,N).                                                          (I)
Indeed S(β_x)=S(ε_x) for each pure BE output. Thus for any R<Ic(ρ,N), when Ic>0, choose R₀>I_E and δ>0 so that (R) holds; the finite private code above has message rate R. For Ic≤0 there is no positive rate to prove.

For each retained message m choose phases θ_{m,k} and define the input vector
|φ_m〉_{A^n}=K_m⁻¹/²Σ_{k∈K_m}e^{iθ_{m,k}}|x^n(m,k)〉.
Different sequences label orthogonal product eigenvectors, and every retained sequence is distinct across all pairs (m,k); hence the summands are orthonormal and the vectors |φ_m〉 for distinct m are orthonormal. Therefore |m〉↦|φ_m〉 is an actual isometric encoder on the K-dimensional logical code space, with K the retained number of messages. This is a constructed encoder, not an assertion that a general CPTP encoder may be replaced by an isometry.

Bob's packing POVM has outcomes (m,k) and a failure outcome 0. Its coherent measurement is the isometry
W_B=Σ_{m,k}√Λ_{m,k}⊗|m,k〉 +√Λ_0⊗|0〉.
For a pure Stinespring output |ψ_{m,k}〉_BE=U_N^⊗n|x^n(m,k)〉, the diagonal overlap between W_B|ψ_{m,k}〉 and the correct branch |ψ_{m,k}〉|m,k〉 is
〈ψ_{m,k}|√Λ_{m,k}|ψ_{m,k}〉≥〈ψ_{m,k}|Λ_{m,k}|ψ_{m,k}〉.
For each m put
|χ_m(θ)〉=K_m⁻¹/²Σ_k e^{iθ_{m,k}}|ψ_{m,k}〉_{BE}|m,k〉.
The overlap of the coherently decoded codeword with this target is
z_m(θ)=〈χ_m(θ)|W_B|φ_m(θ)〉
=K_m⁻¹Σ_{k,l}e^{i(θ_{m,l}−θ_{m,k})}〈ψ_{m,k}|√Λ_{m,k}|ψ_{m,l}〉.
Orthogonal input codewords do not make the off-diagonal decoder matrix elements vanish. Instead choose the phases independently and uniformly on the unit circle. Averaging z_m cancels every k≠l term and leaves the diagonal average, which is at least the key-average success 1−e_m≥1−√q_n by (W). Hence some fixed phase choice for each m has Re z_m≥1−√q_n. Use these phases in the actual encoder. The E marginal of |χ_m(θ)〉 is exactly K_m⁻¹Σ_kε_{x^n(m,k)}, since the orthogonal Bob label |m,k〉 kills off-diagonal key terms; it is independent of the phases and is within raw trace norm δ_n=√q_n of ε̄^⊗n.

Use the maximally entangled logical input |Φ_K〉=K⁻¹/²Σ_m|m〉_R|m〉_L. Its orthogonal reference labels kill cross-message terms in the overlap. Thus the overlap between the coherently measured actual vector and K⁻¹/²Σ_m|m〉_R|χ_m(θ)〉 is at least 1−√q_n in real part. The trace norm between these pure vectors is at most 2√(2√q_n). This maximally entangled criterion is the one needed for entanglement transmission; a uniform guarantee for every pure reference/logical input is not asserted by this argument.

For each m, the published finite Uhlmann characterization thm-qc-fidelity-purification-characterization, together with thm-qc-purification-existence-and-unitary-equivalence to pad auxiliary spaces, supplies an isometry on Bob's purifying system taking |χ_m(θ)〉 to a purification of ε̄^⊗n. The Fuchs–van de Graaf inequality converts raw trace norm δ_n to normalized distance δ_n/2, then to root fidelity at least 1−δ_n/2; the resulting pure-state trace norm is at most 2√δ_n. Control these isometries by Bob's decoded m register. Because the reference labels m are orthogonal, the maximally entangled vector after these controlled isometries has overlap at least 1−δ_n/2 with |Φ_K〉⊗|θ〉, where |θ〉 is the fixed purification. Bob discards the recovered purification and key registers. The resulting logical output satisfies
||ω_RL−|Φ_K〉〈Φ_K|||₁≤2√(2√q_n)+2√(√q_n)→0.                              (Q)
In particular, the squared entanglement fidelity on Φ_RL tends to one. All receiver operations are local CPTP maps; this protocol consumes no preshared entanglement and uses no forward classical channel.
For block size k, apply this construction to N^⊗k and a state ρ_{A^k}. It achieves every rate below k⁻¹Ic(ρ,N^⊗k) per use of N. Put
a_k=max_{ρ_{A^k}}Ic(ρ,N^⊗k).
The maximum exists by compactness and finite entropy continuity. Product inputs show a_{k+l}≥a_k+a_l. A pure input gives Ic=0, so a_k≥0. For any input with purification R and channel isometry R A^k→R B^k E, subadditivity gives S(B^k)≤S(R)+S(E), whence Ic≤S(R)≤k log dim A; thus a_k/k is bounded. If n=qk+r, repeated superadditivity gives a_n≥q a_k+a_r≥q a_k. Therefore liminf_n a_n/n≥a_k/k for every k, and
lim_n a_n/n=sup_k a_k/k.                                            (F)
Using N^⊗k as a superchannel and then k→∞ proves achievability of the regularized coherent-information rate. Leftover fewer than k channel uses can be ignored, so the operational sequence need not restrict n to exact multiples of k.

## LSD converse for arbitrary encoders

Let a length-n quantum code have logical dimension K, arbitrary encoder CPTP map E:L(K)→A^⊗n, decoder D:B^⊗n→L(K), and squared entanglement fidelity
F_s=〈Φ_K|(id_R⊗D∘N^⊗n∘E)(Φ_K)|Φ_K〉≥1−ε.
This is the entanglement-transmission task; no presumption is made that E is an isometry. For K=1 the rate is zero, so take K≥2.

First, finite entropy continuity near the maximally mixed state can be proved classically here. If two distributions p,q on K points have total variation δ, a maximal coupling has Pr[X≠Y]=δ. Then
H(X|Y)≤h₂(δ)+δlog(K−1),   H(Y|X)≤h₂(δ)+δlog(K−1),
because on the mismatch event there are at most K−1 alternatives. Hence
|H(p)−H(q)|≤h₂(δ)+δlog(K−1).                                    (E)
The decoder output marginal ω_B commutes with π_K=I/K, so its eigenvalue distribution is at TV distance D(ω_B,π_K)≤√ε from uniform: partial trace contracts trace distance, and Fuchs–van de Graaf with squared fidelity gives this bound. Therefore
S(B)_ω≥logK−h₂(√ε)−√ε log(K−1).

Let q=1−〈Φ_K|ω_RB|Φ_K〉≤ε. Pinch ω_RB by {Φ_K,I−Φ_K}; pinching is the average of identity and conjugation by the unitary 2Φ_K−I, so entropy concavity and unitary invariance imply it cannot decrease entropy. The pinched state has blocks of weights 1−q and q, and the orthogonal block dimension is K²−1. Thus
S(RB)_ω≤h₂(q)+qlog(K²−1)≤h₂(ε)+εlog(K²−1),
for ε≤1/2 (the asymptotic regime). Combining,
I(R⟩B)_ω≥logK−h₂(√ε)−√εlog(K−1)−h₂(ε)−εlog(K²−1).             (L)

Coherent information cannot increase under Bob's decoder. Indeed, dilate the decoder to an isometry B→B'F. Isometric invariance gives I(R⟩B)=I(R⟩B'F); subtracting I(R⟩B') yields I(R;F|B')≥0 by finite SSA. Hence the coherent information immediately after N^⊗n is at least the lower bound (L).

Now form the encoded state ω_RA^n=(id_R⊗E)(|Φ_K〉〈Φ_K|), and take a finite spectral decomposition ω_RA^n=Σ_jq_j|φ_j〉〈φ_j|. Introduce a classical flag J and send A^n through N^⊗n. The unflagged output is the actual pre-decoder state. SSA gives
I(R⟩B^n)_ω≤I(R⟩B^nJ)=Σ_jq_j I(R⟩B^n)_{φ_j}.                   (A)
The equality is the block entropy formula for a classical J; the inequality is
I(R;J|B^n)≥0.
Each |φ_j〉_RA^n is pure. After a Stinespring isometry its RB^nE output is pure, so its coherent information equals Ic(ρ_j,N^⊗n) for ρ_j=Tr_R|φ_j〉〈φ_j|. The right side of (A) is at most a_n=max_ρ Ic(ρ,N^⊗n). This handles every CPTP encoder, including one that discards a local environment; the classical flag is the step that must not be omitted.

Consequently
logK−h₂(√ε)−√εlog(K−1)−h₂(ε)−εlog(K²−1)≤a_n.
Since a_n≤nlog dim A, rearranging gives
(1−√ε−2ε)logK≤nlog dim A+h₂(√ε)+h₂(ε)
for ε small enough. Thus logK=O(n) along every reliable sequence; divide the sharper preceding inequality by n and let ε_n→0 to obtain limsup n⁻¹logK≤lim_n a_n/n. With the direct part and (F),
Q(N)=lim_n n⁻¹ max_{ρ_{A^n}} Ic(ρ,N^⊗n)=sup_n n⁻¹ max_ρ Ic(ρ,N^⊗n).
No one-letter formula is claimed for a general channel. This finite-dimensional operational theorem is established even if additivity remains unknown.

## Entanglement-assisted classical capacity

Theorem and resource model. Let N:A→B be a finite-dimensional memoryless channel. Alice and Bob may begin with any finite-dimensional pure entangled state independent of the message; its Schmidt rank may grow arbitrarily with n and is free in the EA model. Alice sends only through N^⊗n; Bob may jointly decode the outputs and his retained share. The message is uniform, error is average block error, and no forward classical channel is available. Then
C_EA(N)=max_{ρ_A} I(R;B)_{(id_R⊗N)(φ_RA)},                         (EA)
where |φ〉_RA is any purification of ρ_A. The maximizer exists in finite dimensions. The formula is additive, so no tensor-power regularization is needed.

Direct coding resource reduction. Fix a finite pure |φ〉_RA and its Schmidt decomposition
|φ〉_RA=Σ_x√p_x |x〉_A|x〉_R,
on its positive support. For block length n, the type class T_t of sequences with empirical distribution t has size d_t. Since p^⊗n(x^n) is constant on T_t, define
p(t)=d_t p^⊗n(x_t),   |Φ_t〉=d_t⁻¹/²Σ_{x^n∈T_t}|x^n〉_A|x^n〉_R.
Then
|φ〉_RA^⊗n=Σ_t√p(t)|Φ_t〉,
an orthogonal sum of maximally entangled states with Schmidt ranks d_t. There are at most (n+1)^{|X|} types, so H(T)≤|X|log(n+1)=o(n).

On each type subspace choose the d_t-dimensional Weyl operators W_t(a,z)=X_t(a)Z_t(z), a,z∈{0,…,d_t−1}, and an independent bit b_t∈{0,1}. Define U_s=⊕_t (−1)^{b_t}W_t(a_t,z_t) on Alice's supported subspaces. The finite transpose identity
(U_s⊗I)|Φ_t〉=(I⊗U_s^T)|Φ_t〉
holds on each block, hence holds for their superposition |φ〉^⊗n. Alice's message encoder chooses one s and applies U_s to her share before sending it through N^⊗n; Bob retains R^n. No quantum or classical message is sent in this local encoding step.

Let θ_{B^nR^n}=(N^⊗n⊗id)(φ^⊗n). The resulting ensemble at Bob is
θ_s=(U_s^T⊗I) θ (U_s^T⊗I)^*,
up to the fixed ordering of factors. Its average is
θ̄=Σ_t p(t) N^⊗n(π_{A,t})⊗π_{R,t},                                (T)
where π_{A,t},π_{R,t} are maximally mixed on the type subspaces. To verify (T), average first over the Weyl pair in each block. The d_t² Bell vectors (W_t(a,z)⊗I)|Φ_t〉 form an orthonormal basis: their inner products are d_t⁻¹Tr(W_t(a,z)*W_t(a',z'))=δ_{a,a'}δ_{z,z'}, verified by summing the finite shift and phase matrix entries. Their projectors sum to identity on the tensor product of the two type spaces, so their uniform mixture is π_{A,t}⊗π_{R,t}. For distinct types t≠t', averaging the independent phase bits gives E[(-1)^{b_t+b_{t'}}]=0, killing every off-diagonal type block. Linearity of N^⊗n proves (T).

For each s, S(θ_s)=S(θ)=nS(BR). By (T), the R^n type blocks are orthogonal, so
S(θ̄)=H(T)+Σ_t p(t)[S(N^⊗n(π_{A,t}))+log d_t].
The marginal θ̄_{B^n}=N(ρ_A)^⊗n. Since the type register is classical, its Holevo information with B^n is at most H(T), which gives
Σ_t p(t)S(N^⊗n(π_{A,t}))≥nS(B)−H(T).
Also p(t)=d_t p^⊗n(x_t), so
Σ_t p(t)log d_t=nH(p)−H(T)=nS(R)−H(T).
Therefore the ensemble Holevo information satisfies
χ({|S|⁻¹,θ_s})=S(θ̄)−|S|⁻¹Σ_sS(θ_s)
≥n[S(B)+S(R)−S(BR)]−H(T)
=n I(R;B)_θ−o(n).                                                  (EA-dir)

For fixed n, view s↦θ_s as a finite cq channel whose one use consumes n uses of N and n copies of the fixed prior shared state |φ〉. Apply the already proved cq HSW direct theorem to L independent such blocks. It produces uniform classical messages with average error tending to zero and rate per physical channel use at least χ/n. Choose n large in (EA-dir), then take L large. Ignore fewer than n leftover channel uses. This is a concrete reduction to the cq HSW code: shared entanglement is the only extra resource, Bob's retained half is part of his decoder, and there is no forward classical aid. Maximizing over ρ_A proves the EA lower bound.

Converse and additivity. Consider an arbitrary n-use EA code. Let M be uniform, let T_A T_B be its prior shared state independent of M, let Alice's message-m encoder be CPTP, and let Bob measure B^nT_B to obtain estimate M̂. Write e for average error. Fano and the measurement/Holevo bound give
(1−e)log|M|≤I(M;M̂)+h₂(e)≤I(M;B^nT_B)+h₂(e).
Alice's local trace-preserving operation cannot signal to T_B: for every m, tracing out A^n after her encoder leaves the original T_B marginal. Thus I(M;T_B)=0. The chain identity
I(M;B^nT_B)=I(MT_B;B^n)+I(M;T_B)−I(T_B;B^n)
and nonnegativity of mutual information yield
I(M;B^nT_B)≤I(MT_B;B^n)≤I(N^⊗n).
For the last inequality, M T_B is a reference correlated with the channel input. Purify the reference-input state and use data processing when the extra purifying register is traced out; the resulting pure purification is among those in the maximum defining I(N^⊗n).

For finite channels N₁:A₁→B₁ and N₂:A₂→B₂, product optimizing inputs show I(N₁⊗N₂)≥I(N₁)+I(N₂). For the reverse, take any pure R A₁A₂ input and the two channel outputs. The mutual-information chain rule and SSA give
I(R;B₁B₂)=I(R;B₁)+I(R;B₂|B₁)
≤I(RA₂;B₁)+I(RB₁;B₂)
≤I(N₁)+I(N₂).
The first inequality uses I(A₂;B₁|R)≥0 and I(B₁;B₂)≥0:
I(RA₂;B₁)−I(R;B₁)=I(A₂;B₁|R),
I(RB₁;B₂)−I(R;B₂|B₁)=I(B₁;B₂).
For the second inequality, B₁ is the output of N₁ with reference RA₂, which purifies A₁. For the B₂ term, first add the Stinespring environment E₁ of N₁ to the reference: I(RB₁;B₂)≤I(RB₁E₁;B₂) by nonnegative conditional mutual information. The global state R B₁ E₁ A₂ is pure, so RB₁E₁ purifies A₂ and the channel mutual-information maximum applies. Thus I(N₁⊗N₂)=I(N₁)+I(N₂), and I(N^⊗n)=nI(N). The converse becomes
(1−e)log|M|≤nI(N)+h₂(e).
For every sequence e_n→0 this implies C_EA(N)≤I(N); with (EA-dir) it proves (EA).

## Exact scope, suppliers, and remaining boundaries

The local proofs use the following already published finite interfaces:
- states, spectral decompositions, ensembles, Schmidt decompositions, finite purification and purification equivalence: pure-and-mixed-states-ensembles-and-schmidt-decomposition.md;
- finite tensor registers and partial trace: registers-tensor-products-and-partial-trace.md;
- finite CPTP channels, tensoring, and Stinespring: channels-kraus-choi-and-stinespring-representations.md, especially thm-qc-finite-stinespring-dilation;
- POVMs, branch probabilities, and output measurement channels: measurements-povms-and-instruments.md;
- trace norm, normalized trace distance, trace-distance contractivity, root fidelity, Uhlmann purification characterization, Fuchs–van de Graaf: trace-distance-fidelity-and-information-limits.md, especially thm-qc-fidelity-purification-characterization and thm-qc-fuchs-van-de-graaf;
- concentration of independent bounded surprisal variables: the published thm-hoeffding-independent-bounded-sums applies with each coordinate's finite interval and V=Σ_i(b_i−a_i)²; our bounded-family mgf lemma is the exact finite-family specialization and does not require an unstated iid assumption;
- finite mutual-information/Holevo measurement DPI, SSA, conditional entropy identities, and nonnegativity: the separately audited QRE-DPI/SSA ladder identified above. These entropy and divergence statements are not currently published suppliers in the library and must be integrated as local prerequisites before production theorem items can depend on them.

Natural-log finite Shannon entropy in def-qa-35-finite-probability-entropy-and-stochastic-matrices converts to these bit units by division by ln 2. The finite hypothesis-testing mutual-information item is not a general discrete I(X;Y) supplier. Published trace-distance contractivity is not used as relative-entropy DPI.

Wilde Ch. 24 states squared entanglement fidelity in its error model; the code criterion here uses the same squared quantity F_s, while every Uhlmann/Fuchs step uses root fidelity F_root=√F_s. The finite-dimensionality assumptions are essential to the finite spectra, bounded surprisal variables, type-class dimensions, compact maximization, and finite Stinespring spaces. No energy-constrained bosonic or infinite-dimensional claim follows. The EA resource model allows an unbounded number of prior ebits as n grows but each selected block resource is finite-dimensional; the converse permits arbitrary finite prior shared states. The quantum direct proof chooses a pure spectral ensemble solely for its selected ρ; it does not promote the general private-information optimization to quantum capacity. General additivity, strong converses, efficient encoders/decoders, physical realization, and QKD composability are outside these proved claims.





## Complete finite MAC, degraded BC, Gaussian MAC and multicast NNC development


Status: source-derived local proof supplement, written for the r5 researcher lane at root’s request. It belongs beside, and does not replace, `findings.md`. It is not a canonical scaffold edit, a production item, an audit stamp, or a claim that the general network-capacity problems are solved. The sources actually read are El Gamal–Kim arXiv:1001.3404v3, Lectures 2–5 and 19; the complete Lim–Kim–El Gamal–Chung NNC article arXiv:1002.3188v2, Sections II–III and Appendices A–B; and the 13 Stanford author decks as supplemental cross-checks. No current 2026 open-problem survey is claimed.

All logarithms in this note are base two. Alphabets are finite and nonempty in the DM results. For a joint law, `T_epsilon^n` means strong typicality on its positive support. Every strict inequality below includes a positive slack; the capacity region is the closure of the union of these strict achievable regions. Messages are independent uniform variables unless a different source model is explicitly stated. Error is average joint block error over the uniform message tuple, not maximal error. A random codebook ensemble is fixed after the existence argument; it does not grant the encoders a run-time common randomness resource.

## 1. Finite-alphabet lemmas used below

### 1.1 Conditional typicality and packing

Let `U,V,Z` have a finite-alphabet law

`p(u,v,z)=p(u)p(v|u)p(z|u,v)`.

If `(u^n,z^n)` is strongly typical for its marginal law and `V^n` is drawn according to `prod_i p(v_i|u_i)`, then, for every tolerance enlargement fixed in advance, there is `delta(epsilon)->0` such that

`Pr{(u^n,V^n,z^n) is jointly typical} <= 2^{-n(I(V;Z|U)-delta(epsilon))}`.

To see the exponent, count the possible conditionally typical `v^n` sequences for fixed `(u^n,z^n)`: there are at most `2^{n(H(V|U,Z)+delta)}`. Each such sequence has conditional sampling probability at most `2^{-n(H(V|U)-delta)}`. Multiplication gives the bound. The same argument with `U` constant is the ordinary packing estimate. A union over at most `2^{nR}` independently generated wrong codewords tends to zero if `R<I(V;Z|U)-delta`.

The estimate requires that a candidate codeword is independent of the observation against which it is tested, conditional on the displayed cloud center. This condition is checked separately for every error event below. It does not apply to codewords selected by feedback as if they were independent.

### 1.2 Covering and local conditional typicality

Under the same finite law, suppose `(U^n,Z^n)` is typical and draw `K_n` conditionally independent codewords `V^n(l)` from `prod_i p(v_i|u_i)`. By conditional type counting, at least `2^{n(H(V|U,Z)-delta)}` candidate sequences are jointly typical for typical `(u^n,z^n)`, and each has probability at least `2^{-n(H(V|U)+delta)}`. Thus one candidate is jointly typical with probability at least `2^{-n(I(V;Z|U)+2delta)}`. Consequently

`Pr{no jointly typical candidate} <= exp[-2^{n(R-I(V;Z|U)-2delta)}]`

when `K_n>=2^{nR}` and `R>I(V;Z|U)+2delta`.

A selected successful codeword has the required conditional empirical frequencies because it belongs to the specified conditional typical set. Under uniform selection among all successful indices, conditional on at least one success its law is exactly the single-candidate law conditioned on that typical set: exchangeability makes the chance of choosing any successful label equal, and the number of successes other than a specified candidate is independent of that candidate’s value inside the set. For several independent codebook families, condition on their observed input/output sequences and use the product conditional-type argument. The symmetric selected-word laws are invariant under coordinate permutations that preserve the observed base sequence. Given their conditional types, independent selections have the target product joint type up to an error tending to zero: within each fixed base-symbol class, the expected count of each joint symbol tuple is the product of the conditional frequencies, and the variance of its empirical frequency is O(1/n) by sampling without replacement. A finite union bound over symbol tuples proves joint conditional typicality. This is the conditional typicality step used after relay covering; it is not a claim that a chosen codeword is unconditionally independent of the observation.

### 1.3 Public coded time sharing

For a finite distribution `p_Q`, choose a deterministic sequence `q^n` whose empirical law tends to `p_Q` (first take rational frequencies and then approximate). Reveal that sequence as part of the public code description. Generate each user’s codewords conditionally independently according to `prod_i p(x_{ji}|q_i)`. The conditional packing proof uses empirical mutual informations converging to their `Q` averages. This realizes the `Q` region without a free common-randomness source. Alternatively, generate a random `Q^n` independently and reveal the realized codebook; averaging again selects a deterministic realization. In either construction, the independent-message product law is `prod_j p(x_j|q)` at each time.

### 1.4 Path-connected support reduction

If `G` is a path-connected subset of `R^d`, every point of `conv(G)` is a convex combination of at most d points of G. Here is the geometric reduction needed below. Ordinary Caratheodory follows by linear dependence: if a convex representation has more than d+1 positive weights, the augmented vectors `(g_i,1)` in `R^(d+1)` are linearly dependent; perturb the weights along a nonzero dependence until one becomes zero, and repeat. Thus a point x has a representation on at most d+1 points. If it uses at most d, stop. If it uses d+1 affinely dependent points, the same dependence perturbation removes one; otherwise these vertices are affinely independent and all weights are positive. Translate x to the origin and call the vertices `v_0,...,v_d`. The origin is in the interior of their simplex; the facet opposite `v_0` avoids the origin, so its vertices `v_1,...,v_d` are linearly independent. The convex representation gives `v_0=-sum_i a_i v_i` for strictly positive `a_i`.

Let `K={-sum_i b_i v_i:b_i>=0}`. Then `v_0` is in the interior of K and `v_1` is outside K. Take a continuous path in G from `v_0` to `v_1`, and let `t_*` be the first time it leaves the interior of K. The path starts in the interior and ends outside K; continuity and closedness of K imply `w=gamma(t_*)` lies on the boundary of K. In its unique basis-coordinate representation `w=-sum_i b_i v_i`, at least one coefficient, say `b_j`, is zero. Put `B=sum_i b_i`. If B=0, w=0. If B>0, then `0=(1/(1+B))w+sum_{i≠j}(b_i/(1+B))v_i`, a convex combination of w and at most d−1 old vertices. In either case the origin is in the convex hull of at most d points of G. This proves the reduction. Compactness is not needed for this pointwise lemma, but will ensure the MAC union below is closed and its convex hull compact.

## 2. Two-sender DM-MAC exact capacity

### 2.1 Operational contract

Fix finite alphabets `X_1,X_2,Y` and a memoryless kernel `W(y|x_1,x_2)`. An `(M_1,M_2,n)` code has independent uniform messages `M_j in [M_j]`, separate deterministic encoders `f_j:[M_j]->X_j^n`, and one decoder `g:Y^n->[M_1]x[M_2] union {error}`. The channel law is

`W^n(y^n|x_1^n,x_2^n)=prod_{i=1}^n W(y_i|x_{1i},x_{2i})`.

Its error is `P_e=Pr{g(Y^n)!=(M_1,M_2)}` averaged over the independent uniform message pair and the channel. The no-feedback and no-cooperation clauses are encoded by the separate, noncausal message-only maps `f_1,f_2`; they cannot depend on the other message or on channel outputs. The capacity region is the closure of rate pairs with a sequence of such codes and `P_e->0`. The separate encoder maps and independent messages imply `X_{1i} independent of X_{2i}` for every fixed `i` in every deterministic code.

### 2.2 Achievability for a fixed product law

Fix any product pmf `p(x_1)p(x_2)` and rates satisfying

`R_1<I(X_1;Y|X_2)`, `R_2<I(X_2;Y|X_1)`, `R_1+R_2<I(X_1,X_2;Y)`.

Generate `M_j=ceil(2^{nR_j})` independent codewords `X_j^n(m_j)`, each with iid coordinates `p(x_j)`, with the two codebook families independent. The selected codebook is known to the encoders and decoder. To send `(m_1,m_2)`, send their corresponding codewords. The decoder declares the unique pair `(m_1,m_2)` for which `(x_1^n(m_1),x_2^n(m_2),y^n)` is jointly typical; otherwise it declares an error.

By symmetry it is enough to bound the ensemble-average error conditional on `(M_1,M_2)=(1,1)`. Partition error into four disjointly covering events:

- the true triple `(X_1^n(1),X_2^n(1),Y^n)` is not typical;
- some `m_1!=1` gives a typical `(X_1^n(m_1),X_2^n(1),Y^n)`;
- some `m_2!=1` gives a typical `(X_1^n(1),X_2^n(m_2),Y^n)`;
- some pair `(m_1,m_2)` with both indices wrong gives a typical triple.

The first probability tends to zero by applying the weak law to the finite indicators of each empirical triple. For the second event, condition on the transmitted pair/output. The wrong `X_1^n(m_1)` is iid `p(x_1)` and independent of `(X_2^n(1),Y^n)`, whose marginal is the iid law `p(x_2,y)`. The packing bound in §1.1 with cloud center `X_2` gives probability at most `2^{-n(I(X_1;Y|X_2)-delta)}` per candidate. A union over `2^{nR_1}` candidates vanishes under the first strict inequality. The third event is symmetric and vanishes under `R_2<I(X_2;Y|X_1)`. For the fourth, both wrong codewords are independent of the transmitted output and of each other; the unconditioned packing exponent is `I(X_1,X_2;Y)`, so the union over `2^{n(R_1+R_2)}` pairs vanishes under the sum-rate inequality. The expected average error over codebooks therefore tends to zero; for each n some deterministic codebook has no larger than the ensemble-average error. This proves the fixed-product-law pentagon.

### 2.3 Public time sharing and cardinality `|Q|<=2`

A finite public `Q` and product law `p(q)p(x_1|q)p(x_2|q)` are achievable by §1.3. To identify the rate set from the averaged inequalities, fix its Q values and write `a_q=I(X_1;Y|X_2,Q=q)`, `b_q=I(X_2;Y|X_1,Q=q)`, and `c_q=I(X_1,X_2;Y|Q=q)`. Independence of `X_1,X_2` given q gives `max(a_q,b_q)<=c_q<=a_q+b_q`: the lower bounds follow from `c_q-a_q=I(X_2;Y|q)` and its symmetric version; the upper bound follows from `a_q+b_q-c_q=I(X_1;X_2|Y,q)>=0`. The q-pentagon `P_q` has vertices `(0,0),(a_q,0),(a_q,c_q-a_q),(c_q-b_q,b_q),(0,b_q)`.

The set of rate pairs satisfying the averaged inequalities is `P(abar,bbar,cbar)`, where bars denote the `p(q)`-averages. This equals the weighted Minkowski sum `sum_q p(q)P_q`. To prove equality, the support function `h_P(u,v)=max_{(r_1,r_2) in P}(u r_1+v r_2)` of any pentagon with `max(a,b)<=c<=a+b` is
`0` if `u,v<=0`; `ua` if `u>=0>=v`; `vb` if `v>=0>=u`; `ua+v(c-a)` if `u>=v>=0`; and `u(c-b)+vb` if `v>=u>=0`.
These five linear formulas apply both to each P_q and to the averaged parameters. A weighted Minkowski sum has support function `sum_q p(q)h_{P_q}`; therefore it has exactly the support function of `P(abar,bbar,cbar)`. Compact convex sets with equal support functions coincide: if a point x of one set lay outside the other, its nearest point y in the other set would give the separating vector `x-y`, contradicting equality of the supports. Thus every point allowed by the averaged inequalities is an actual convex combination of one rate point from each q-pentagon, and conversely.

Consequently the public-Q region is the convex hull of the union A of the individual product-input pentagons; operational time sharing between codes gives the same convexity.

For completeness, the uncosted two-sender support reduction to two Q-values is as follows. Let `A` be the union, over all product input pmfs, of their closed MAC pentagons

`R_1<=I(X_1;Y|X_2)`, `R_2<=I(X_2;Y|X_1)`, `R_1+R_2<=I(X_1,X_2;Y)`,

with nonnegative rates. The parameter space (product of two finite probability simplices) is path-connected. Each associated pentagon is convex, hence path-connected, and contains the origin. Any two points in A can therefore be joined by line segments to the origin, so A is path-connected. It is compact because the mutual-information coordinates are continuous in the pmfs and the set of parameter/rate tuples satisfying the closed inequalities is compact, whose projection is compact. The region obtained by arbitrary public time sharing is `conv(A)`. Applying §1.4 with d=2, every point of `conv(A)` is a convex combination of at most two points of A. Each point of A belongs to a pentagon for one product pmf. The two weights and those two product pmfs are represented by a Q with at most two values. This is the actual support argument; generic Carathéodory in R² would give three points and does not prove the sharper claim.

The theorem is therefore the closure of the union over finite `p(q)p(x_1|q)p(x_2|q)` of

`R_1<=I(X_1;Y|X_2,Q)`, `R_2<=I(X_2;Y|X_1,Q)`, `R_1+R_2<=I(X_1,X_2;Y|Q)`,

and for the unconstrained two-sender model it suffices to take `|Q|<=2`.

### 2.4 Converse

For any code with `P_e->0`, finite-alphabet Fano gives `H(M_1,M_2|Y^n)<=1+P_e log_2(M_1M_2)=n epsilon_n`, where `epsilon_n->0`. Applying Fano also to each message conditioned on the other gives

`nR_1<=I(M_1;Y^n|M_2)+n epsilon_n`,
`nR_2<=I(M_2;Y^n|M_1)+n epsilon_n`,
`n(R_1+R_2)<=I(M_1,M_2;Y^n)+n epsilon_n`.

For sender 1, expand by the chain rule and use `X_{2i}=f_{2i}(M_2)`:

`I(M_1;Y^n|M_2)=sum_i I(M_1;Y_i|Y^{i-1},M_2,X_{2i})`.

Put `A_i=(M_1,M_2,Y^{i-1})`. Since `X_{2i}` is a function of M2,
`I(M_1;Y_i|Y^{i-1},M_2,X_{2i}) <= I(A_i;Y_i|X_{2i})` by the chain rule (the latter adds the nonnegative term `I(M_2,Y^{i-1};Y_i|X_{2i})`). Since `X_{1i}` is a function of M1, the chain rule again gives
`I(A_i;Y_i|X_{2i})=I(X_{1i};Y_i|X_{2i})+I(A_i;Y_i|X_{1i},X_{2i})`.
The last term is zero by the memoryless channel law: given both current inputs, the current output is independent of messages and past outputs. Therefore

`I(M_1;Y^n|M_2)<=sum_i I(X_{1i};Y_i|X_{2i})`.

The sender-2 inequality follows symmetrically. For the sum, memorylessness and deterministic encoding give
`H(Y_i|M_1,M_2,Y^{i-1})=H(Y_i|X_{1i},X_{2i})`; also `H(Y_i|Y^{i-1})<=H(Y_i)`. Hence

`I(M_1,M_2;Y^n)<=sum_i I(X_{1i},X_{2i};Y_i)`.

Let Q be uniform on `[n]`, independent of messages and the code-generated variables, and set `(X_1,X_2,Y)=(X_{1Q},X_{2Q},Y_Q)`. Since the messages are independent and encoders are separate, `p(x_1,x_2|q)=p(x_1|q)p(x_2|q)`. The three sums become the three conditional mutual informations given Q. Send n to infinity and take closure. This proves the claimed outer containment under the average joint-error, independent-message, no-feedback model. The theorem is for average error only. Dueck’s contraction MAC shows that the deterministic maximal-error capacity region can be strictly smaller; no maximal-error conclusion is claimed here.

## 3. Degraded DM-BC exact capacity

### 3.1 Operational contract and statement

Let X,Y_1,Y_2 be finite and `W(y_1,y_2|x)=W_1(y_1|x)W_2(y_2|y_1)` physically degraded. There are independent uniform private messages `M_1,M_2`, a single encoder `x^n(m_1,m_2)`, and separate decoders: receiver 1 estimates only `M_1`, receiver 2 only `M_2`. The average error is `Pr{Mhat_1!=M_1 or Mhat_2!=M_2}`. No feedback is present. The capacity is the closure of the achievable rate pairs. A stochastic degraded channel with the same two conditional marginals is equivalent for this nonfeedback capacity problem. The probability that either receiver errs depends on the coupling, but it tends to zero exactly when both marginal receiver-error probabilities tend to zero: joint error bounds each marginal error from above, and the union bound bounds joint error by their sum. The two marginal channels therefore give the same capacity under the stated vanishing average joint-error criterion.

The capacity region is the closure of the union over finite `p(u)p(x|u)` satisfying `U->X->Y_1->Y_2` of

`R_1<=I(X;Y_1|U)`, `R_2<=I(U;Y_2)`.

It suffices to take `|U|<=min{|X|,|Y_1|,|Y_2|}+1`.

### 3.2 Superposition achievability

Fix a finite `p(u)p(x|u)`. Draw `2^{nR_2}` independent cloud centers `U^n(m_2)` iid `p_U`; for each center draw `2^{nR_1}` satellite codewords `X^n(m_1,m_2)` iid according to `prod_i p(x_i|u_i(m_2))`, conditionally independently across satellites and clouds. The encoder sends the selected satellite.

Receiver 2 declares the unique `m_2` whose cloud center is jointly typical with `Y_2^n`. The true pair is typical with probability tending to one. Every wrong cloud is independent of the true output with the correct marginal, so §1.1 gives packing exponent `I(U;Y_2)` and the error tends to zero if `R_2<I(U;Y_2)-delta`.

Receiver 1 searches for the unique private index `m_1` for which there exists at least one cloud index `m_2` with `(U^n(m_2),X^n(m_1,m_2),Y_1^n)` jointly typical. The true tuple is typical. For a wrong satellite in the true cloud, the cloud center is fixed and the satellite is conditionally independent of the output given that center, so the exponent is `I(X;Y_1|U)` and this event vanishes if `R_1<I(X;Y_1|U)-delta`. For a wrong cloud and any satellite in that cloud, the entire wrong pair `(U^n,X^n)` is independent of the true output; there are at most `2^{n(R_1+R_2)}` such pairs, and their packing exponent is `I(U,X;Y_1)=I(X;Y_1)` by `U->X->Y_1`. Thus this event vanishes if `R_1+R_2<I(X;Y_1)-delta`.

The last inequality is implied by the first two under degradation: `I(U;Y_2)<=I(U;Y_1)`, whence
`I(U;Y_2)+I(X;Y_1|U)<=I(U;Y_1)+I(X;Y_1|U)=I(X;Y_1)`.
Thus every strict pair satisfying the two displayed region bounds is achievable. Ensemble averaging selects deterministic codebooks; closure gives the boundary.

### 3.3 Converse

For any sequence of codes with average joint error `P_e->0`, Fano gives

`nR_1<=I(M_1;Y_1^n)+n epsilon_n`,
`nR_2<=I(M_2;Y_2^n)+n epsilon_n`.

Since `M_1` and `M_2` are independent,
`I(M_1;Y_1^n|M_2)-I(M_1;Y_1^n)=I(M_1;M_2|Y_1^n)>=0`.
Put `U_i=(M_2,Y_1^{i-1})`. The encoder is a deterministic function of `(M_1,M_2)`, so `U_i->X_i->(Y_{1i},Y_{2i})` is Markov; memorylessness is needed here. Expanding the first bound and applying conditional data processing,

`I(M_1;Y_1^n|M_2)=sum_i I(M_1;Y_{1i}|M_2,Y_1^{i-1})<=sum_i I(X_i;Y_{1i}|U_i)`.

For the second bound, expand
`I(M_2;Y_2^n)=sum_i I(M_2;Y_{2i}|Y_2^{i-1}) <= sum_i I(M_2,Y_2^{i-1},Y_1^{i-1};Y_{2i})`;
the inequality follows by adding `(Y_2^{i-1},Y_1^{i-1})` to the first argument and using `I(A;B|C)<=I(A,C;B)`.

Under the physical degradation, the past weak output is generated from the past strong output and is conditionally independent of the current weak output given `(M_2,Y_1^{i-1})`. Therefore `(M_2,Y_2^{i-1},Y_1^{i-1})->(M_2,Y_1^{i-1})->Y_{2i}` is Markov, and the last mutual information equals `I(U_i;Y_{2i})`. (This equality is why the physically degraded equivalent may be assumed; it does not follow from an arbitrary coupling of outputs.)

Let Q be independent uniform `[n]`, set `U=(Q,U_Q)`, `X=X_Q`, `Y_j=Y_{jQ}`. The time-shared law preserves `U->X->Y_1->Y_2`, and the two rates are bounded by `I(X;Y_1|U)` and `I(U_Q;Y_2|Q)<=I(U;Y_2)`. Send n to infinity and take closure.

### 3.4 Auxiliary cardinality reduction

For each `u`, let `r_u(x)=p(x|u)`. The rate pair generated by U depends on the mixture only through the unconditional marginal `p_X` and the two averages `E[H(Y_1|U=u)]`, `E[H(Y_2|U=u)]`, since
`I(X;Y_1|U)=H(Y_1|U)-H(Y_1|X)` and `I(U;Y_2)=H(Y_2)-H(Y_2|U)`.

For each u, the conditional input law `r_u=p(x|u)` ranges over the probability simplex on X. The simplex is path-connected, and each of the following maps from it to a finite-dimensional Euclidean space is continuous. Thus its image is path-connected, and §1.4 applies to averages of the displayed coordinates. First preserve the coordinates `p(x|u)` for all but one x, plus `H(Y_1|U=u),H(Y_2|U=u)`. There are `|X|+1` coordinates; preserving their averages preserves `p_X` and both conditional entropies, hence both rates, with at most `|X|+1` support points. Next preserve `p(y_2|u)` for all but one output, `H(Y_2|u)` and `I(X;Y_1|U=u)`. There are `|Y_2|+1` coordinates; these preserve the marginal `p_{Y_2}`, the conditional entropy `H(Y_2|U)`, and the first-rate conditional mutual information, so both rates remain fixed with at most `|Y_2|+1` points. Finally preserve `p(y_1|u)` for all but one output, `H(Y_2|u)` and `I(X;Y_1|U=u)`, giving `|Y_1|+1` coordinates. Degradedness maps each `p(y_1|u)` to `p(y_2|u)`, so the retained average fixes `p_{Y_2}` and `H(Y_2)` as well; the two preserved averages then retain both rates with at most `|Y_1|+1` points. Selecting the smallest of the three representations proves `|U|<=min{|X|,|Y_1|,|Y_2|}+1` without an unproved support lemma.

## 4. Gaussian MAC is a separate continuous-alphabet theorem

### 4.1 Model and region

Fix real gains `g_1,g_2`, noise variance `N_0>0`, and powers `P_1,P_2>=0`. The memoryless channel is `Y_i=g_1X_{1i}+g_2X_{2i}+Z_i`, with iid `Z_i~N(0,N_0)` independent of messages and inputs. Users have independent uniform messages, separate deterministic encoders with no feedback, and every codeword obeys `n^{-1}sum_i x_{ji}(m_j)^2<=P_j`. Error is average joint message error. Rates are bits/use. The theorem is the closure of the strict region

`sum_{j in S}R_j < (1/2)log_2(1+sum_{j in S} g_j^2 P_j/N_0)`

for every nonempty subset S of `{1,2}`. It is not an application of finite strong typicality; the following continuous proof is independent of the finite-DM-MAC theorem.

### 4.2 Achievability with per-codeword cost control

Take any rate pair strictly inside the displayed region. By continuity, choose variances `0<P'_j<P_j` (for a positive-rate user; a zero-power user is removed) so all subset inequalities remain strict with `P'_j`. Generate `M_j=ceil(2^{nR_j})` codewords independently with iid `N(0,P'_j)` coordinates; user codebooks are independent.

This is the continuous-alphabet typicality bridge, separate from the finite-DM-MAC theorem above. For each nonempty S define the information density

`i_S(x_1^n,x_2^n;y^n)=log_2 [ w^n(y^n|x_1^n,x_2^n) / w_{Y|X_{S^c}}^n(y^n|x_{S^c}^n) ]`,

where the denominator averages the Gaussian input laws `N(0,P'_j)` over users in S. Its expectation per coordinate is
`I_S=(1/2)log_2(1+sum_{j in S}g_j^2P'_j/N_0)`; the information density is a quadratic polynomial in jointly Gaussian variables and has finite variance. Choose thresholds `tau_S` with `R(S)<tau_S<I_S`. The decoder declares the unique message pair passing `i_S>n tau_S` for all nonempty S.

For the transmitted tuple, each information density is a sum of iid Gaussian log-likelihood ratios. The log ratios are quadratic polynomials plus constants in a jointly Gaussian vector, so have finite first and second moments; the weak law gives convergence of `i_S/n` to `I_S`. This is weak information-density typicality, not a use of finite-alphabet strong typicality. For a wrong message pattern S, condition on the complementary codewords. The wrong S-codewords are independent with law `prod_{j in S}P_{X_j'}^n`, independent of the true output. Under this product reference law, the likelihood ratio in the threshold test has expectation one. Thus

`Pr{ i_S(tilde X_S^n;Y^n|X_{S^c}^n)>n tau_S | X_{S^c}^n } <= 2^{-n tau_S}`.

There are at most `prod_{j in S}M_j<=2^{nR(S)+o(n)}` candidates. The union bound tends to zero because `tau_S>R(S)`. A finite union over nonempty S proves ensemble-average joint error tends to zero.

The Gaussian codewords do not yet meet a per-codeword power constraint. For user j, let `B_j` be the fraction of the `M_j` sampled codewords whose empirical energy exceeds `P_j`. Since `P'_j<P_j`, chi-square Chernoff gives

`p_n=Pr{n^{-1}sum_i X_{ji}^2>P_j} <= exp[-(n/2)(P_j/P'_j-1-ln(P_j/P'_j))] -> 0`.

The expectation of `B_j` is `p_n`; Markov gives `Pr{B_j>sqrt(p_n)}<=sqrt(p_n)`. Hence with probability tending to one, each codebook has a fraction `1-o(1)` of good codewords. The ensemble-average error also tends to zero, so there exists a realization where all these good-fraction bounds hold and the original average error tends to zero: condition the error average on the high-probability good-fraction event and use `E[Pe|good]<=E[Pe]/Pr(good)`.

Delete all bad codewords from each user’s codebook and relabel. Every retained codeword obeys the stated per-codeword constraint. The retained message-set sizes satisfy `M'_j>=M_j(1-o(1))`, so `n^{-1}log_2 M'_j->R_j`. Use the original decoder, mapping an output to a removed index to any fixed retained pair. Under independent uniform retained messages, its error is at most the original ensemble error conditioned on the event that both messages were retained; that conditional error is at most `Pe/[(M'_1/M_1)(M'_2/M_2)] ->0`. Thus the power-constrained code exists. The closure includes the boundary. If `P_j=0`, its codewords are identically zero and the result reduces to the one-user Gaussian coding statement for the other user.

### 4.3 Converse with arbitrary deterministic codebooks

Fix any length-n code satisfying every codeword cost constraint. For a nonempty S, let `M_S` denote those users’ independent messages. Fano, conditioned on complementary messages, gives

`nR(S) <= I(M_S;Y^n|M_{S^c}) + 1 + P_e nR(S)`.

Given `M_{S^c}`, subtract the known complementary codewords from `Y^n`; call the residual `V^n`. Then

`I(M_S;Y^n|M_{S^c})=I(M_S;V^n|M_{S^c})=h(V^n|M_{S^c})-h(Z^n)`.

The equalities are valid because the complementary transmitted sequences are deterministic once their messages are fixed, and the residual is a deterministic translation plus independent nonsingular Gaussian noise. It has finite second moment and a density, so its differential entropy is finite: it is at least the Gaussian-noise entropy by nonnegative mutual information and at most the Gaussian maximum-entropy bound below. For any density f with mean μ and variance v>0, nonnegativity of relative entropy to `N(μ,v)` gives
`0<=D(f||N(μ,v))=-h(f)+(1/2)log_2(2 pi v)+(1/2)log_2(e)`,
so `h(f)<=(1/2)log_2(2 pi e v)`; the relative-entropy inequality follows from convexity of `t log t`, and equality holds only for the matching Gaussian. The positive noise variance ensures all conditional variances used below are nonzero.

Use the chain rule and conditioning-reduces-entropy:

`h(V^n|M_{S^c}) <= sum_i h(V_i|M_{S^c})`.

For each i and each fixed complementary message, Gaussian maximum differential entropy at a given variance gives
`h(V_i|M_{S^c}=m)<= (1/2)log_2(2 pi e Var(V_i|m))`. Average over the complementary messages and apply Jensen to log. Independence of the private messages means the signal variance is the sum of the users’ variances; a codeword’s nonzero mean can only decrease variance relative to its second moment. Therefore

`sum_i E Var(V_i|M_{S^c}) <= n N_0 + sum_{j in S} g_j^2 sum_i E X_{ji}^2 <= n(N_0+sum_{j in S}g_j^2P_j)`.

A second Jensen application across i yields

`h(V^n|M_{S^c}) <= (n/2)log_2(2 pi e [N_0+sum_{j in S}g_j^2P_j])`.

Subtract `h(Z^n)=(n/2)log_2(2 pi eN_0)`, divide by n, and let n tend to infinity with `P_e->0`. This gives each subset outer bound. Achievability and converse match. This proof uses continuous Gaussian entropy and cost directly and has no dependency on a finite-alphabet MAC theorem.

## 5. Noisy network coding: exact factorization and multicast proof

### 5.1 Operational model and theorem

Let `N` nodes have finite input/output alphabets and a memoryless joint kernel `W(y^N|x^N)`. This supplement proves the multicast version: every message `M_k` is independent uniform, node k’s input at time i is a deterministic function of its own message and past local outputs, and all messages have one common nonempty destination set `D=D_1=...=D_N`. A destination d estimates every message other than its own, which it already knows. Rates satisfy `R_k>=0`; write `R(S)=sum_{k in S}R_k`. Error is the average probability that at least one required message at at least one destination is wrong. Capacity means closure of achievable tuples.

Fix finite Q and the exact law

`p(q) [prod_{k=1}^N p(x_k|q)] W(y^N|x^N) [prod_{k=1}^N p(yhat_k|y_k,x_k,q)]`.

Thus Q is public and independent of messages; conditional on Q the input symbols are product distributed; each test channel is local and, conditional on `(Y_k,X_k,Q)`, the quantizer variables are independent across k. For each nonempty S with `S^c intersect D != empty`, the theorem’s rate constraint is

`R(S) < min_{d in S^c intersect D} { I(X(S);Yhat(S^c),Y_d|X(S^c),Q) - I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d,Q) }`

The second term is a nonnegative compression penalty. This is an inner bound. The general cutset outer bound instead requires, for every nonempty S with `S^c intersect D != empty`,

`R(S) <= I(X(S);Y(S^c)|X(S^c))`

for some joint input law `p(x^N)` (and then takes the union/closure over such laws). It permits arbitrary dependence among inputs and has no quantization variable. Do not identify this outer bound with the NNC inner bound outside proved equality cases. General destination sets require the article’s separate Theorem 2, not this common-multicast theorem.

### 5.2 Code construction

First fix Q constant; coded time sharing is added by §1.3. Split transmission into b blocks of n channel uses. The same message tuple `(m_1,...,m_N)` is sent in every block, while each block uses an independent codebook.

For each block j and node k, generate `2^{nbR_k}2^{n hatR_k}` input sequences
`x_{k,j}^n(m_k,l_{k,j-1})`, iid `p_{X_k}^n`, independently over all indices, nodes and blocks. For every such input sequence, generate `2^{n hatR_k}` sequences
`yhat_{k,j}^n(l_{k,j}|m_k,l_{k,j-1})`, conditionally iid with law `prod_i p(yhat_{k,i}|x_{k,i}(m_k,l_{k,j-1}))`, independent across node/block/codebook groups. Here `p(yhat_k|x_k)=sum_{y_k}p(y_k|x_k)p(yhat_k|y_k,x_k)` is the marginal induced by the selected test channel. Set `l_{k,0}=1`.

At the end of block j, node k observes `y_{k,j}^n` and chooses an index `l_{k,j}` for which
`(x_{k,j}^n(m_k,l_{k,j-1}),y_{k,j}^n,yhat_{k,j}^n(l_{k,j}|m_k,l_{k,j-1}))`
is jointly typical for `p(x_k,y_k,yhat_k)`. Choose uniformly among successful indices; if none succeeds, choose uniformly among all indices. This rule is invariant under relabeling the independently generated indices, as needed in the packing symmetry argument. In block j+1 node k sends `x_{k,j+1}^n(m_k,l_{k,j})`. The random tie choices are part of the random-code existence argument only: each node has finitely many local codebook states and output sequences, so after averaging one can fix all codebooks and local choice tables with error no larger than the ensemble average. The resulting operational encoders are deterministic and use only their own message and past local outputs.

Destination d knows its own message/index trajectory. It searches jointly over the other messages and all non-destination compression indices and accepts a unique required message tuple for which the blockwise tuples
`(x_{1,j}^n,...,x_{N,j}^n,yhat_{1,j}^n,...,yhat_{N,j}^n,y_{d,j}^n)`
are jointly typical in every j. Compression indices are not required to be uniquely decoded; this is simultaneous nonunique decoding. It is essential that the correct message tuple with the actual relay indices passes the test; the receiver does not need to identify those indices separately.

### 5.3 Covering and correctness of the true tuple

Write `m^*` for the transmitted message tuple. Let E0 be the event that some node/block has no codeword jointly typical with its observed local input/output, and let E1 be the event that the actual message tuple and actual compression-index trajectory pass the decoder’s blockwise typicality test. For each wrong message tuple m with `m_d=m_d^*`, let E_m be the event that some non-destination compression-index path makes all block tests pass with m. Then

`P_e(d) <= P(E0)+P(E0^c intersect E1^c)+sum_{m != m^*}P(E_m)`.

For each k and block j, conditional on a typical pair `(x_{k,j}^n,y_{k,j}^n)`, §1.2’s covering calculation applies to the `2^{n hatR_k}` conditional codewords. If

`hatR_k>I(Y_k;Yhat_k|X_k)+delta(epsilon')`

then the probability that this node/block has no suitable index tends to zero. There are finitely many nodes and b fixed while n tends to infinity, so `P(E0)->0`. Given the actual network input/output sequences, the node-specific codebooks and symmetric selection rules are independent across nodes. Every selected word has its prescribed conditional type; conditional type counting across these independent selections gives joint typicality of `(X^N,Y^N,Yhat^N)` for the product test channel, and projection gives the decoder tuple `(X^N,Yhat^N,Y_d)`. The block channel is memoryless and the same argument applies to each of the fixed b blocks, so `P(E0^c intersect E1^c)->0`. This explicitly checks the true-path event rather than treating relay selection as independent of its observation.

### 5.4 Wrong-message packing with compression indices

The random index labeling and uniform tie rule are symmetric under simultaneous relabeling of every node/block compression-index tree (including the next-block codebooks indexed by a previous label). Thus the conditional packing error is the same for each transmitted tuple and selected-index trajectory; fix the messages to all ones and relabel the actual trajectory as all ones. For the packing bound, reveal the whole actual trajectory, every input/quantization codebook array searched by the true encoders along that trajectory, and all actual channel outputs. Fix destination d. For a competing message tuple let
`T={k:m_k!=1}`; it is nonempty and d is not in T because d’s own message is known. For block j>=2 and a previous compression-index tuple `l_{j-1}`, define
`S_j={k:m_k!=1 or l_{k,j-1}!=1}`.
Then `T subseteq S_j` and `d notin S_j`. For each k in S_j, the candidate pair `(m_k,l_{k,j-1})` differs from the actual `(1,1)`. Its input sequence and associated quantization array are therefore a distinct codebook group that the true encoder never searched in block j. These groups are independent across k, independent of all revealed true-path data, and independent across blocks. This is why they retain the product law `prod_{k in S_j}p(x_k)p(yhat_k|x_k)` after conditioning; we make no iid claim about unselected words in the actually searched `(1,1)` array. Reveal/condition also on all candidate variables for `S_j^c` and on `Y_d`. Whenever the full candidate tuple is typical, its projection `Z=(X(S_j^c),Yhat(S_j^c),Y_d)` has the target marginal type. For every fixed such z-sequence the S_j codewords remain independent with their product codebook law, so the conditional type bound below applies uniformly. The block-1 event is discarded from the exponent; conditioning on the full actual trajectory and true-path arrays leaves the wrong groups in each of the b−1 remaining independent block codebooks unexposed, giving the product of the b−1 bounds.

For any nonempty S with d outside S, define

`I_1(S)=I(X(S);Yhat(S^c),Y_d|X(S^c))`,

and, for a fixed ordering of nodes (write `S_{<k}` for the nodes in S preceding k),

`I_2(S)=sum_{k in S} I(Yhat_k;Yhat(S^c union {k' in S:k'<k}),Y_d,X^N|X_k)`.

The following finite typical-set packing calculation proves the needed exponent. Let `W=(X(S),Yhat(S))`, `Z=(X(S^c),Yhat(S^c),Y_d)`, and `Q_W=prod_{k in S}p(x_k)p(yhat_k|x_k)`. The target joint law P is the marginal of the stated network/test-channel law on `(W,Z)`. The competing law for W and a fixed Z is

`Q_S = Q_W P_Z`.

If z is any sequence whose type is sufficiently close to `P_Z`, the number of w-sequences jointly typical with z is at most `2^{n(H_P(W|Z)+delta)}`. Each such sequence has candidate-law probability at most `2^{-n(H_P(W)+D(P_W||Q_W)-delta)}` because its empirical marginal is close to `P_W`. Thus conditional type counting bounds the probability of joint typicality by

`2^{-n(I_P(W;Z)+D(P_W||Q_W)-2delta)}=2^{-n(D(P_{WZ}||P_ZQ_W)-2delta)}`.

The divergence decomposes as follows. First split at `X(S)`:

`D(P_{WZ}||P_ZQ_W) = D(P_{X(S),Z}||P_Z prod_{k in S}p(x_k)) + E_P D(P_{Yhat(S)|X^N,Yhat(S^c),Y_d}||prod_{k in S}p(yhat_k|x_k))`.

Because `X^N` has product input law, the first term is `I(X(S);Z)=I(X(S);Yhat(S^c),Y_d|X(S^c))=I_1(S)`. Expanding the second divergence by the fixed order on S gives `sum_{k in S} I(Yhat_k;X^N,Yhat(S^c),Y_d,Yhat(S_{<k})|X_k)=I_2(S)`. Therefore the exponent is `I_1(S)+I_2(S)`; absorb the two type tolerances into a larger `delta(epsilon)`, so for a typical tuple

`Q_S(T_epsilon^n) <= 2^{-n(I_1(S)+I_2(S)-delta)}`.

This is the method-of-types likelihood-ratio form of packing: on the target typical set the target/competitor likelihood ratio is at least the exponent shown, and summing competitor mass is at most that exponent’s reciprocal. It gives a concrete estimate rather than an appeal to a named packing lemma.

There are at most `2^{n sum_{k in S}hatR_k}` previous index tuples that produce a given set S, so summing those tuples changes the exponent to
`I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta`. There are at most `2^{N-1}` choices of S for a block, and the b−1 informative blocks are independent. Summing over message-error sets T and over destination compression indices gives the explicit bound for the wrong-message event `union_{m != m^*} E_m`:

`P(union_{m!=m^*} E_m) <= sum_{nonempty T subseteq [N]\{d}} 2^{n b R(T)} 2^{n sum_{k!=d}hatR_k} 2^{(N-1)(b-1)} 2^{-n(b-1) min_{S: T subseteq S, d notin S}[I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta]}`.

Combining this bound with the earlier error split gives `P_e(d) <= o_n(1)+P(union_{m!=m^*}E_m)`, for fixed b whenever the covering inequalities hold.

Thus the packing term vanishes for fixed b if, for each such T,

`R(T) < ((b-1)/b) min_{S: T subseteq S,d notin S}[I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta] - (1/b)sum_{k!=d}hatR_k`.

First choose `hatR_k>I(Y_k;Yhat_k|X_k)+delta'` to meet covering, then let b tend to infinity. For each T, the sufficient limiting inequality is

`R(T) < min_{S: T subseteq S,d notin S}[ I_1(S)+I_2(S)-sum_{k in S}I(Y_k;Yhat_k|X_k)] - (N-1)delta' - delta`.

The quantizer factorization yields the identity

`I_2(S)-sum_{k in S}I(Y_k;Yhat_k|X_k) = -I(Yhat(S);Y(S)|X^N,Yhat(S^c),Y_d)`.

To verify it, set `C=(X^N,Yhat(S^c),Y_d)`. For each k in the fixed order, the local test-channel factorization gives `Yhat_k` conditionally independent of `(C,Yhat(S_{<k}))` given `(Y_k,X_k)`. The chain rule therefore gives `I(Yhat_k;C,Yhat(S_{<k})|X_k)-I(Yhat_k;Y_k|X_k) = -I(Yhat_k;Y_k|C,Yhat(S_{<k}))`. Summing the left side is exactly `I_2(S)-sum_{k in S}I(Yhat_k;Y_k|X_k)`. Summing the right side and applying the chain rule to `Yhat(S)` gives `-I(Yhat(S);Y(S)|C)`: conditional on `(Y_k,X_k)`, the local `Yhat_k` is independent of the other network outputs and test-channel variables, so the k-th chain-rule term reduces to `I(Yhat_k;Y_k|C,Yhat(S_{<k}))`. This proves the identity without an independence assumption between the network outputs themselves.

Since rates are nonnegative and `T subseteq S`, the constraint with `T=S` is strongest among the constraints indexed by `T subseteq S`. The limiting conditions therefore reduce exactly to

`R(S) < I(X(S);Yhat(S^c),Y_d|X(S^c)) - I(Yhat(S);Y(S)|X^N,Yhat(S^c),Y_d)`

for every nonempty S with `d notin S`. The union bound over the finite common destination set D gives the minimum over `d in S^c intersect D`. Finally coded time sharing gives the stated conditional-Q formula; take closure. This establishes the NNC inner bound, not the cutset bound.

### 5.5 Scope guard

The theorem proved here is the common-destination multicast theorem. For genuinely different destination sets, the article changes the decoding event and the rate expression (its Theorem 2); it is not obtained just by replacing D with an intersection while claiming all separate destination requirements. The cutset remains an outer bound for general DMNs. Equality is asserted only in the article’s noiseless, specified erasure and product-law-attaining deterministic cases. The Gaussian multicast article theorem, not the older Stanford slide, supplies the sharper cut-dependent constant-gap expression.

## 6. Cross-checks and status

- DM-MAC achievability/converse cross-checks El Gamal–Kim arXiv:1001.3404v3, Lecture 4, Theorem 2 and converse (pages 4–12 through 4–21); the source’s |Q|≤2 claim is Lecture 4, Theorem 3 and its connected-set argument (pages 4–23–4–24). Degraded BC cross-checks Lecture 5, Theorem 2 (pages 5–21–5–23) and the cardinality calculation in Appendix C (pages C–2–C–4). Stanford EE376B decks 04–05 are cross-checks only. The MAC average-error model is retained; the maximal-error distinction is explicit.
- The degraded-BC proof uses the physically degraded output coupling for the converse. The capacity region depends only on marginals only in the nonfeedback model.
- The finite MAC support proof uses the path-connected union of pentagons and the fully proved cone-boundary reduction in §1.4 to obtain two Q values. It does not invoke ordinary three-point Carathéodory as though it established the sharper bound.
- The NNC theorem, factorization and block proof cross-check Lim et al. arXiv:1002.3188v2, Theorem 1, Section III, equations (17)–(21), including the nonunique compression-index search and exact cut-dependent inner bound. The displayed proof development is local. The article’s separate Theorem 2 handles general destination sets. General DMN capacity is not proved.
- The Gaussian MAC statement cross-checks Stanford EE376B Lecture 04, Theorem 4.4 (slide 21). Its achievability and converse here are separately proved for real AWGN with individual per-codeword block-energy constraints, continuous information-density tests, explicit Gaussian cost truncation, and differential-entropy bounds; no implication from finite-alphabet DM-MAC coding is assumed.


The finite adaptive-exposure step used here has a direct finite-product proof. Begin with independent random codebook groups and independent channel/tie randomness. Each actual query chooses its group index as a deterministic function of previously exposed values and the local independent randomness, then reveals the whole queried group. For any fixed possible transcript, its occurrence imposes conditions only on the groups listed in that transcript and on the external randomness, never on other groups. Factor the initial finite product pmf and sum/integrate those conditions: the unqueried groups retain their original mutually independent product laws conditional on the transcript. Induct over finitely many node/block queries. Conditioning on additional candidate complementary groups leaves every distinct unused error-set group independent. This justifies the NNC product packing bound without declaring unselected quantizer words in an actually searched group iid.

The finite MAC Fano remainder vanishes even when rates were not assumed bounded in advance: (1-P_e)ln(M1 M2)<=n ln|Y|+ln2 bounds the sum rate uniformly for P_e->0. Therefore (ln2)/n+P_e ln(M1 M2)/n->0.

## Complete finite-dimensional Schumacher compression theorem

Let rho act on finite nonzero A, d=dim A, and use the squared entanglement-fidelity compression model. A spectral typical projector Pi_n has p_n=Tr Pi_n rho^tensor n->1 and rank<=exp[n(S(rho)+delta)]. Encode its subspace isometrically into C_n and add one orthogonal failure flag; the CPTP encoder maps the complement to that flag. Decode the subspace by the inverse isometry and the flag to any fixed state. One Kraus branch of the composite is Pi_n, so the squared entanglement fidelity on a purification is at least |Tr rho^tensor n Pi_n|²=p_n²->1 (the other Kraus contributions are nonnegative squared overlaps). Dimension rank+1 gives rate at most S+delta+o(1); let delta decrease along a blocklength diagonal.

For any compression/recovery through dimension M_n with squared entanglement fidelity >=1-epsilon_n, let omega_RAhat be recovered purification state and phi_RA its target. Halved trace distance delta_n<=sqrt(epsilon_n) by the actual root-fidelity/Fuchs supplier. The R marginal is unchanged and S(R)=nS(rho). The conditional entropy continuity bound, with dim R<=d^n, gives

I(R;Ahat)_omega >= 2nS(rho)-2delta_n n ln d-(1+delta_n)h(delta_n/(1+delta_n)).

DPI gives I(R;C_n)>=I(R;Ahat). Finite Araki–Lieb/subadditivity, proved via purification above, give I(R;C_n)<=2S(C_n)<=2ln M_n. Divide by 2n and send epsilon_n->0. Every reliable compression sequence has liminf ln M_n/n>=S(rho). This weak converse suffices for the capacity threshold and treats arbitrary CPTP encoders/decoders; no uniform arbitrary-input or ensemble-average-fidelity equivalence is asserted. d=1 and S=0 are included.


## Standard-Borel stationary-memoryless capacity and feedback at finite information capacity

Let W(dy|x) be a stationary memoryless kernel between standard-Borel alphabets, without input cost, and suppose C=sup_(P_X) I(P_X,W)<infinity. This supremum need not be attained. Every R<C has a law P_X with R<I<C. The finite divergence of P_XW from P_X tensor Q, Q=P_XW, gives a joint RN density f; the countable determining-class argument above proves W(dy|x)=f(x,y)Q(dy) for P_X-a.e. x. On the charged joint support f>0 and j=ln f is integrable: its negative expectation is <=1/e and its positive expectation is finite because I<infinity.

The IID average of this integrable j converges in probability to I. To justify this with only bounded-variable weak laws, clip j at ±K. For fixed K use bounded variance and Chebyshev; the mean absolute clipping error tends to zero with K, so Markov bounds the averaged absolute tail uniformly in n. First n->infinity, then K->infinity proves the asserted integrable weak law.

Draw a finite codebook from P_X^tensor n, choosing only its probability-one set of words whose conditional output densities are the product of the specified f. Decode to the first codeword with sum j>ln((M-1)/2)+gamma, erasing if none passes. The true-threshold failure is governed by the IID weak law. For an independent competing word under P_X^tensor n tensor Q^tensor n the likelihood ratio exp(sum j) has expectation one, so Markov and the average (M-1)/2 earlier competitors bound interference by exp(-gamma). All tests are measurable. With M approximately exp(nR) and gamma=n eta, R+eta<I, expected average error tends to zero and a deterministic codebook exists. Starting at R'>R before expurgating messages with individual error above sqrt(average error) gives at least exp(nR) messages of vanishing maximal error. C=0 needs only the trivial one-message code. This proves no-feedback achievability without an attaining input law.

For any fixed-length feedback code with a uniform finite message J, causal private-randomized encoder kernels and no input cost, the conditional channel given each past output history is W. Standard-Borel RCDs and the MI chain rule therefore give

I(J;Y^n)=sum_i I(J;Y_i|Y^(i-1))<=sum_i I(X_i;Y_i|Y^(i-1))<=n C.

Each history-conditional input law belongs to the supremum defining C. Fano gives (1-error)ln M<=nC+ln2. Thus fixed-length vanishing-average-error capacity with full noiseless causal feedback is at most C, and the no-feedback construction achieves C for both average and maximal criteria. This proof retains RN/RCD AC premises and standard-Borel measurable spaces; it makes no arbitrary-alphabet, infinite-C, constrained-input, variable-length or zero-error claim.


## Complete finite private, degradable, erasure, classical-wiretap and QKD developments


This second r6 supplement develops proofs for thm-it-quantum-private-classical-capacity-regularized, thm-it-degradable-channel-single-letter-quantum-capacity, thm-it-degradable-quantum-private-capacity-single-letter, thm-it-quantum-erasure-channel-capacities, lem-it-channel-resolvability-soft-covering, thm-it-finite-classical-wiretap-auxiliary-capacity, thm-it-degraded-wiretap-secrecy-capacity, and thm-it-qkd-composable-security-composition. It is deliberately separate from quantum-coding-proof-developments.md, whose HSW/LSD/EA sections are stable for integration. The finite quantum DPI/SSA/Holevo prerequisites are the audited resolvent/joint-convexity/twirl ladder in audit/independent-proof-notes.md. Wilde source locators: Ch. 23 for quantum wiretap/private coding and QKD distinctions; Ch. 13 and 24 for degradable coherent information and erasure channels; Portmann–Renner, arXiv:1409.3525v1, full text for abort-aware ideal/real QKD security and composition.

All logs are base 2. The channels and alphabets are finite, memoryless, and mathematical CPTP/DMC models; no infinite-dimensional or physical implementation claim is made. The note proves the strong-secrecy wiretap, degradable, erasure, and composability claims under the models stated below.

## General regularized quantum private capacity

Operational model. For n uses of N:A→B with a fixed complementary output N^c:A→E, Alice receives a uniform private message M and may use arbitrary private local randomness to prepare an input state on A^n. Bob's decoder has average block error e_n. Eve receives E^n, including the entire complementary output. A strong secrecy code has a state σ_{E^n}, independent of m, such that
max_m D(ρ_{E^n|m},σ_{E^n})≤δ_n,       D(ρ,σ)=||ρ−σ||₁/2,
with e_n→0 and δ_n→0. There is no pre-shared secret key or public forward classical aid. The codebook may be public. The quantum private capacity is the supremum of achievable liminf n⁻¹log|M| under these criteria.

For finite n define
p_n(N)=max_{finite ensembles {p_x,ρ_x on A^n}}
[I(X;B^n)−I(X;E^n)]_{(id_X⊗N^⊗n)(cq ensemble)}.                (PC)
A maximum over finite ensembles exists and needs only at most (dim A^n)²+1 letters. To prove this, write
I(X;B)−I(X;E)=S(N(ρ̄))−S(N^c(ρ̄))+Σ_xp_x g(ρ_x),
g(ρ)=S(N^c(ρ))−S(N(ρ)).
The objective depends on an ensemble only through the average state ρ̄ and the scalar Σp_xg(ρ_x). The real affine state space has dimension D²−1 for D=dim A^n; append the one g-coordinate to embed the needed point in R^{D²}. The finite-dimensional Carathéodory argument gives at most D²+1 points: if a convex representation uses more than d+1 points in R^d, affine dependence provides coefficients summing to zero and with zero weighted vector; vary the weights along that dependence until one becomes zero, and iterate. Compactness of the fixed-cardinality probability/state parameter space and finite entropy continuity attain the maximum.

Direct part. For any finite ensemble on A^k, use the packing-plus-covering construction above on the block channel N^⊗k, with β_x=N^⊗k(ρ_x), ε_x=(N^c)^⊗k(ρ_x). It gives private message rate arbitrarily close to I(X;B^k)−I(X;E^k), with maximum-over-message average decoding error and maximum-over-message trace-norm leakage to a fixed Eve state both tending to zero. Distinct codeword deletion is harmless for this classical private task and may be omitted. Moreover, with fixed positive rate margins, every atypical probability, packing overlap, soft-covering variance term, and collision fraction above decays exponentially by the finite bounded concentration lemma and displayed rate exponents. A codebook with exponentially small sum error/leakage/collisions exists by Markov; both expurgations preserve an exponential bound (with a smaller exponent). Thus the per-message Eve trace distance δ_n can be taken exponentially small. The conditional-entropy estimate below then gives I(M;E^n)≤2δ_n log|M|+(1+δ_n)h₂(δ_n/(1+δ_n))→0. This direct code satisfies the unnormalized strong mutual-information secrecy criterion as well as the explicit per-message trace criterion. Repeating the k-use super-symbol and then letting k grow achieves every rate below sup_k p_k(N)/k.

Converse. Let ρ_m be Alice's average encoded input state for message m, after tracing out her private local randomness. This gives an ensemble with
I(M;B^n)−I(M;E^n)≤p_n(N).
Fano and the measurement/Holevo bound give
(1−e_n)logM≤I(M;B^n)+h₂(e_n)
≤p_n(N)+I(M;E^n)+h₂(e_n).                                         (PC1)
We bound the leakage term without a dimension-dependent estimate on E^n. If every message output has D(ρ_{E^n|m},σ)≤δ, then the joint cq state ω_ME is within normalized trace distance δ of π_M⊗σ:
D(ω_ME,π_M⊗σ)=M⁻¹Σ_mD(ρ_{E|m},σ)≤δ.

Here is the finite conditional-entropy continuity estimate used:
|S(A|B)_ρ−S(A|B)_σ|≤2δ log d_A+(1+δ)h₂(δ/(1+δ)),
for D(ρ,σ)=δ and dim A=d_A. Let Δ=ρ−σ=Δ_+−Δ_- be its Jordan decomposition. Each positive part has trace δ; if δ>0 set τ_±=Δ_±/δ. Then
ω=(ρ+δτ_-)/(1+δ)=(σ+δτ_+)/(1+δ).
For t=δ/(1+δ), conditional-entropy concavity gives S(A|B)_ω≥(1−t)S(A|B)_ρ+tS(A|B)_τ-. The upper mixing inequality is S(A|B)_ω≤(1−t)S(A|B)_σ+tS(A|B)_τ++h₂(t): flag the mixture by a classical J; the excess over the average conditional entropy is I(A;J|B), between zero (SSA) and H(J)=h₂(t), since H(J|AB)≥0 for classical J by χ(J;AB)≤H(J). Subtract and use |S(A|B)|≤log d_A to get the displayed estimate; the range follows from subadditivity above and, for the lower bound, purify AB to C and use S(B)=S(AC)≤S(A)+S(C)=S(A)+S(AB). Swap ρ,σ for the reverse inequality. The δ=0 case is immediate.

Apply this with A=M, d_A=M, ρ=ω_ME, σ=π_M⊗σ_E. Since S(M|E)_{π⊗σ}=logM,
I(M;E)≤2δ_n logM+(1+δ_n)h₂(δ_n/(1+δ_n)).
Combining with (PC1),
(1−e_n−2δ_n)logM
≤p_n(N)+h₂(e_n)+(1+δ_n)h₂(δ_n/(1+δ_n)).                         (PC2)
Also 0≤p_n≤nlog dim B: a one-letter ensemble gives zero, and I(X;B^n)≤nlog dim B while I(X;E^n)≥0. Thus (PC2) first bounds logM/n, then implies the converse rate bound by lim p_n/n.

If the operational definition instead states strong secrecy directly as I(M;E^n)→0, (PC1) immediately gives the same converse without (PC2); the direct construction above has exponentially small per-message trace distance and hence I(M;E^n)→0, so the capacity formula is the same under either named strong-secrecy criterion.

Product ensembles give p_{n+m}≥p_n+p_m and p_n≥0. Fekete's elementary argument used above gives lim_n p_n/n=sup_n p_n/n. With the direct part and (PC2),
P(N)=lim_n p_n(N)/n=sup_n p_n(N)/n.
This is a regularized finite-dimensional theorem. It does not assert a generic single-letter formula, nor equate private and quantum capacities without degradability.

## Degradable channels: single-letter quantum and private capacities

A finite-dimensional channel N:A→B with finite complement N^c:A→E is degradable if there is a finite CPTP map D:B→E such that N^c=D∘N. This definition is representation-independent up to the usual finite environment isometry; fix one Stinespring representation for the proof.

For any ensemble {p_x,ρ_x}, entropy expansion gives
Ic(ρ̄,N)=I(X;B)−I(X;E)+Σ_xp_x Ic(ρ_x,N).                         (D1)
Indeed the right side is S(B̄)−ΣpS(B_x)−S(Ē)+ΣpS(E_x)+Σp[S(B_x)−S(E_x)]=S(B̄)−S(Ē). Degradability and quantum data processing give I(X;B)≥I(X;E), so (D1) proves concavity of coherent information. Apply it to a spectral pure-state ensemble of any ρ. Every pure input has pure BE output and hence Ic=0; therefore Ic(ρ,N)≥0 for all ρ.

For two degradable channels N_i:A_i→B_i with complements E_i obtained by D_i, a pure R A₁A₂ input gives
Ic(ρ,N₁⊗N₂)
=Ic(ρ_A₁,N₁)+Ic(ρ_A₂,N₂)−I(B₁;B₂)+I(E₁;E₂).                    (D2)
This follows by expanding S(B₁B₂) and S(E₁E₂) using mutual information. The product degrading map D₁⊗D₂ and QMI DPI imply I(B₁;B₂)≥I(E₁;E₂), so joint coherent information is at most the sum of its marginal values. Product inputs attain the sum of the two maxima. Thus max coherent information is additive for degradable channels, and for N itself a_n=n max_ρ Ic(ρ,N). The regularized theorem already proved therefore specializes to
Q(N)=max_ρ Ic(ρ,N).

For the same degradable N, (D1) and nonnegativity of each Ic(ρ_x,N) imply every finite-ensemble private information is at most Ic(ρ̄,N)≤Q(N). A pure spectral ensemble of a maximizing state has Ic(ρ_x,N)=0 for every letter and attains exactly Q(N). Thus p_1(N)=Q(N). The tensor power N^⊗n is degradable by D^⊗n, so the same argument gives p_n(N)=Q(N^⊗n)=nQ(N). Consequently quantum private capacity equals quantum capacity and is additive on this class:
P(N)=Q(N)=max_ρ Ic(ρ,N).
This conclusion uses degradability at every step; it is not a general channel identity.

## Qudit erasure channel capacities

Let A≅C^d, d≥2, let |e〉 be orthogonal to B≅C^d, and define
N_ε(ρ)=(1−ε)ρ_B⊕ε Tr(ρ)|e〉〈e|, 0≤ε≤1.
A finite Stinespring isometry is
V|ψ〉=√(1−ε)|ψ〉_B|e〉_E+√ε|e〉_B|ψ〉_E.
The complementary channel is the erasure channel with retention probability ε (erasure probability 1−ε), up to swapping the output labels.

Quantum capacity. For any input ρ,
S(N_ερ)=h₂(ε)+(1−ε)S(ρ),
S(N_ε^cρ)=h₂(ε)+εS(ρ),
so Ic(ρ,N_ε)=(1−2ε)S(ρ).
When ε≤1/2, N_ε is degradable: from B, keep its quantum state with probability ε/(1−ε) and otherwise replace it by |e〉; this extra-erasure probability is (1−2ε)/(1−ε), and the resulting retention is ε, exactly N_ε^c. The degradable formula gives Q=(1−2ε)log d, attained at ρ=I/d.
When ε≥1/2, N_ε is antidegradable: from the complementary output, retain its quantum state with probability (1−ε)/ε and otherwise erase; this gives Bob's retention probability 1−ε. For any input, the complement can therefore simulate Bob. Coherent-information data processing gives I(R⟩E)≥I(R⟩B, while purity of RBE gives I(R⟩E)=−I(R⟩B); hence Ic≤0. The same argument applies to every tensor power, and a pure input has Ic=0, so all block maxima vanish. Thus Q=max{0,(1−2ε)log d}.

Classical capacity. The general HSW formula is regularized, so evaluate each tensor power. For an n-use input state and any ensemble {p_x,ρ_x}, an erasure pattern S⊆{1,…,n} appears in an orthogonal output flag with probability
p_S=(1−ε)^|S| ε^{n−|S|},
independent of x; conditioned on S, the surviving state is Tr_{S^c}ρ_x. The block-diagonal cq entropy identity gives exactly
χ(X;B^n)=Σ_S p_S χ({p_x,Tr_{S^c}ρ_x})
≤Σ_Sp_S |S|log d
=n(1−ε)log d.
The product computational-basis ensemble attains equality: given S, the surviving basis symbols are perfectly distinguishable and uniformly distributed, so χ=|S|log d. Therefore χ(N_ε^⊗n)=n(1−ε)log d for every n, and C=(1−ε)log d.

Entanglement-assisted classical capacity. For any purification RA of ρ, append the erasure flag F. F is independent of R, and conditioned on success Bob receives A; conditioned on erasure he receives a fixed state. Thus
I(R;B F)=(1−ε)I(R;A)+ε·0=2(1−ε)S(ρ)≤2(1−ε)log d.
A maximally entangled input attains equality. The EA formula gives C_EA=2(1−ε)log d.



## Finite classical channel resolvability and wiretap capacity

Finite-DMC resolvability lemma. Let W(z|u) be a finite channel, P_U an input law, P_Z=Σ_uP_U(u)W(·|u), and draw L=⌈2^{nR₀}⌉ independent codewords U^n(ℓ)∼P_U^⊗n. The induced mixture is
Q_{Z^n}=L⁻¹Σ_ℓ W^⊗n(·|U^n(ℓ)).
For every γ>0,
E TV(Q_{Z^n},P_Z^⊗n)
≤Pr{i(U^n;Z^n)>n(I(U;Z)+γ)}
 + 1/2·2^{-n(R₀−I(U;Z)−γ)/2},                                (RSL)
where i(u^n;z^n)=log[W^⊗n(z^n|u^n)/P_Z^⊗n(z^n)] on the joint support and TV is one-half the ℓ₁ distance.

Proof. For each codeword/output pair define L_ℓ(z)=W^n(z|U^n(ℓ))/P_Z^n(z) and truncate it to \tilde L_ℓ=L_ℓ 1{i≤n(I+γ)}. The expected missing mass of the random mixture is exactly the atypical probability α_n in (RSL). The mean truncated output is a sub-probability measure below P_Z^n and has missing mass α_n. For fixed z, E_U L(U,z)=1 and \tilde L≤2^{n(I+γ)}, so E_U\tilde L²≤2^{n(I+γ)}E_U\tilde L. Independence yields
E|L⁻¹Σ_ℓ(\tilde L_ℓ(z)−E\tilde L_ℓ(z))|
≤√(L⁻¹E\tilde L(U,z)²).
Multiply by P_Z^n(z), sum over z, and use Cauchy–Schwarz to obtain at most 2^{-n(R₀−I−γ)/2}. The two missing-mass terms each contribute α_n/2 in TV; the fluctuation term contributes half its ℓ₁ bound. This proves (RSL). On the finite positive support, i(U_i;Z_i) is bounded. Its iid mean is I(U;Z), so for every γ>0 an exponential Markov bound gives α_n≤e^{-c n}: the moment generating function of i−I−γ has value 1 at parameter zero and negative derivative there, hence is below one at some small positive parameter. Thus R₀>I(U;Z) gives exponentially small expected resolvability error.

Classical wiretap model. Let W(y,z|x) be a finite memoryless channel with main output Y and Eve output Z. A code has uniform message M, a stochastic encoder with private local randomness, Bob's decoder, average error e_n, and strong secrecy I(M;Z^n)→0. No preshared secret key or public forward aid is given. Its capacity is
C_s=max_{finite P_{U,X}: U−X−(Y,Z)} [I(U;Y)−I(U;Z)].                 (CW)
The maximum can be restricted to |U|≤|X|. The main/eavesdropper output pair W(y,z|x) is only used to define the wiretap channel; the coding arguments need its marginals.

Achievability. Fix P_{U,X} and a rate R<I(U;Y)−I(U;Z). Choose R₀ with
I(U;Z)<R₀<I(U;Y)−R.
For every message m and randomization label ℓ∈{1,…,L}, draw U^n(m,ℓ) iid P_U^⊗n, independently across all pairs; M=⌊2^{nR}⌋ and L=⌈2^{nR₀}⌉. Alice privately draws X_i according to P_{X|U}(·|u_i(m,ℓ)) and sends X^n. Bob sees the finite DMC U→Y with W_{Y|U}(y|u)=Σ_xP(x|u)W_Y(y|x). A threshold decoder recovers the pair (m,ℓ) with vanishing average error because its total rate R+R₀+o(1) is below I(U;Y): accept the unique codeword satisfying
log[W_{Y|U}^n(y^n|u^n)/P_Y^n(y^n)]≥log(ML)+nγ.
For a sent codeword the missed-threshold probability tends to zero by the law of large numbers. For any false independent codeword and fixed y^n, the expectation of the likelihood ratio is one; Markov and a union bound give false-alarm probability at most 2^{-nγ}. Thus the expected average error vanishes (exponentially with a fixed rate gap).

For each m, Eve's output after averaging over ℓ is
Q_{Z^n|m}=L⁻¹Σ_ℓ W_{Z|U}^n(·|U^n(m,ℓ)).
By (RSL), the expected average over messages of TV(Q_{Z^n|m},P_Z^⊗n) decays exponentially because R₀>I(U;Z). There is one deterministic public codebook for which the sum of average error and average leakage tends to zero. Expurgate messages whose sum of their decoder error and Eve TV leakage exceeds the square root of this average; the retained message rate still tends to R and both quantities tend to zero uniformly over retained messages. The retained average Eve state is exponentially close in TV to P_Z^⊗n. Its mutual-information leakage also tends to zero: the retained joint law P_{MZ^n} is within exponentially small TV of P_M⊗P_Z^⊗n; its true product P_M⊗P_{Z^n} differs by at most another such amount. The conditional-entropy continuity bound proved in the quantum-private section, restricted to classical registers M, gives I(M;Z^n)≤2η_n log|M|+(1+η_n)h₂(η_n/(1+η_n)) for that joint/product distance η_n. Since η_n is exponential and log|M|=O(n), the leakage tends to zero. This proves strong secrecy, not only normalized leakage.

Finite auxiliary reduction. For q∈Δ(X), write g(q)=I_q(X;Y)−I_q(X;Z). Given P_{U,X}, let q_u=P_{X|U=u}, q̄=P_X. Markovity gives
I(U;Y)−I(U;Z)=g(q̄)−Σ_up(u)g(q_u).
The objective is preserved by retaining q̄ and Σp(u)g(q_u). Map each q∈Δ(X) to the vector consisting of its first |X|−1 coordinates and g(q), in R^m, m=|X|. The map is continuous, and Δ(X) is path connected, so its image C is path connected. The average vector lies in conv C. A connected-support refinement of Carathéodory gives at most m points: first ordinary Carathéodory gives m+1 points. If there are already at most m, stop; if a weight is zero or the points are affinely dependent, affine-dependence elimination reduces the support. Otherwise the m+1 points are affinely independent with positive weights. Join the first point continuously within C to the second, keeping the other m−1 points fixed. Until affine dependence occurs, the unique barycentric coordinates of the fixed target vector vary continuously. If a coordinate first reaches zero, the target is in the convex hull of the remaining m points. If affine dependence occurs first, take a convergent subsequence of the nonnegative barycentric coordinates (they sum to one); its limit represents the target by dependent points, which affine-dependence elimination reduces to m. At the endpoint of the path the first two points coincide, so affine dependence must occur. This proves the m-point bound. Thus |U|≤|X| preserves q̄ and average g exactly, and the maximum is attained by compactness with zero weights allowed.

Converse. For a stochastic n-use encoder, define V_i=(Y^{i−1},Z_{i+1}^n). The telescoping quantities
A_i=I(M;Y^i,Z_{i+1}^n),   i=0,…,n,
satisfy A_0=I(M;Z^n), A_n=I(M;Y^n), and by the chain rule
I(M;Y^n)−I(M;Z^n)
=Σ_i [I(M;Y_i|V_i)−I(M;Z_i|V_i)].                               (CS)
For each v with positive probability, memorylessness gives the Markov chain M−X_i−(Y_i,Z_i) under the conditional law given V_i=v: once X_i is fixed, the ith channel output is independent of the message and all other-coordinate outputs. Thus each bracket averaged over v is an average of valid single-letter objectives I(U;Y)−I(U;Z) with U=M and input law P_{M,X_i|V_i=v}; it is at most C_s. Hence the right side of (CS) is ≤nC_s. Fano and strong secrecy give
(1−e_n)log|M|≤I(M;Y^n)+h₂(e_n)
≤nC_s+I(M;Z^n)+h₂(e_n).
Divide by n and let e_n→0, I(M;Z^n)→0. This proves (CW).

Physically degraded wiretap channel. If X→Y→Z, then for every U−X−Y−Z,
I(U;Y)−I(U;Z)=I(U;Y|Z).
Moreover
[I(X;Y)−I(X;Z)]−[I(U;Y)−I(U;Z)]
=I(X;Y|U)−I(X;Z|U)≥0
by conditional data processing through Y→Z for each u. Thus U cannot improve the objective; U=X attains the maximum, and
C_s=max_{P_X}[I(X;Y)−I(X;Z)].
The general wiretap code above with U=X proves achievability under the same strong-secrecy criterion.

## Composable QKD security: abort, transcript, and hybrids

Resource assumptions. The insecure quantum channel is controlled by Eve. The public classical channel is authenticated; its transcript C is public to Eve and any outside distinguisher. If authentication is not an ideal resource, an authentication protocol with error ε_auth must be analyzed separately. The ideal key resource outputs a uniform shared key on success or abort; Eve/simulator may choose the abort flag, so security does not imply availability or force acceptance. On abort, both key registers are replaced by a fixed dummy symbol ⊥. All correctness and secrecy bounds are required uniformly over every allowed Eve/environment strategy and external quantum context, with the same public abort flag in the real and simulated resources.

Let F∈{acc,abort}, let E denote Eve's entire quantum side information (including any external reference retained by a distinguisher), and let C denote the complete public transcript. The stated bounds hold uniformly when the protocol is placed in any allowed external quantum context; its retained registers are included in E. A precise secrecy error is the abort-weighted normalized distance
ε_sec=Pr[F=acc]·D(ρ_{K_A C E|acc}, τ_K⊗ρ_{C E|acc}),
D=||·||₁/2,
where τ_K is uniform on the declared key space. Correctness error is
ε_cor=Pr[F=acc and K_A≠K_B].
If Pr[F=acc]=0, define ε_sec=0 without using a conditional state on the null event. The secrecy expression compares Alice's key, the public transcript and Eve jointly, so it does not omit transcript leakage. Abort branches are left unchanged and the simulator reproduces their probability, transcript and Eve side information.

Hybrid proof. Let R₀ be the real output state, with Alice's and Bob's keys and all outside registers. Construct R₁ by replacing Bob's key by Alice's on acceptance and setting both to ⊥ on abort. These states differ only on the event of acceptance with unequal keys. Since the mismatch event is a classical flag, block-decompose by that event; the trace distance of two normalized states is at most one, hence D(R₀,R₁)≤ε_cor. Construct R₂ from R₁ by replacing the common accepted key by an independent uniform key while preserving the joint marginal of (F,C,E) and the abort branch. On acceptance, the state distance is exactly the secrecy distance above; orthogonal abort/accept blocks weight it by Pr[F=acc]. Therefore D(R₁,R₂)=ε_sec. An explicit simulator runs the prescribed protocol internally through the same adversarial insecure-channel interface and ideal authenticated public channel, forwards the resulting public transcript and Eve's side system, and tells the ideal key resource to abort exactly when that internal run aborts. On success it discards the internal key registers; it cannot inspect or alter the independent uniform key supplied by the ideal resource. This produces R₂. Triangle inequality gives
D(R₀,R₂)≤ε_cor+ε_sec.                                             (QKD)

Any distinguisher is a CPTP map followed by a binary POVM, so its distinguishing advantage is at most trace distance by measurement contractivity/Holevo–Helstrom; the resource bound therefore holds against arbitrary quantum side information and arbitrary subsequent processing. If the public channel is implemented by an authentication scheme within ε_auth of an ideal authenticated channel, replace that channel in one more hybrid and use contractivity; the total error is at most ε_cor+ε_sec+ε_auth. Any authentication key is an additional resource and is counted as consumed or recycled only under that authentication scheme's own proof; it is not supplied for free by the QKD theorem. Without authentication, a man-in-the-middle can alter the public transcript and this QKD theorem's authenticated-channel premise is absent.

Composition. Suppose resources R_i are each within ε_i distinguishing distance of ideal resources I_i in every allowed external context. In a sequential or parallel protocol, define hybrids H_j with the first j components ideal and the remainder real. The transition H_{j−1}→H_j places the i-th resource in a fixed interactive CPTP context, so contractivity bounds that hybrid distance by ε_j. Telescoping the hybrids and applying triangle inequality gives total real/ideal distance at most Σ_i ε_i. Transcript, abort, and Eve's retained quantum memory remain part of the hybrid state, so no independence assumption is made between sequential protocol rounds. A one-time-pad use is a concrete instance: XOR with a key is a CPTP map, so encrypting with a key within ε of uniform and independent preserves at most ε distinguishing error; correctness failure adds its own probability by a hybrid.



## Complete stationary-ergodic bounded finite-alphabet RDF development


Status: the finite-alphabet, bounded-distortion operational theorem is proved below, conditional only on the finite-alphabet stationary-ergodic Shannon–McMillan–Breiman (SMB) theorem stated in the proof interface. This note proves the finite-block limit, the missing stationary-ergodic process approximation (including random phase handling), the random-code achievability, the converse, and the endpoint continuity needed by the operational definitions. It is research evidence, not a production library supplier. The local library still lacks an authored finite-alphabet SMB item; this is an upstream authoring dependency, not a claim that the RDF proof is accepted by citation.

The principal sources actually read by r1 are Robert M. Gray, *Entropy and Information Theory*, corrected first edition (2023), §3.2, Lemma 3.2.1 (stationary-ergodic finite-alphabet SMB; PDF pp. 73–80, printed pp. 51–58), §10.6 (block/process RDF and stationary-block-memoryless approximation; printed pp. 209–218), and §9.4, especially Example 9.4.11 (randomized blocking). The omitted process-approximation proof is not attributed to Gray: it is supplied locally below. Robert M. Gray, *Source Coding Theory*, first edition (1990), §§3.2–3.4 (PDF pp. 66–81, printed pp. 54–69), supplies the operational block-code setup, converse interface, and the random-code argument; §3.4 explicitly states its process-approximation premise without proof. Lane source identity and actual read extents are recorded in `source-manifest.json` and `reading-ledger.json`.

## Model and endpoint conventions

Let `A` and `B` be nonempty finite source and reproduction alphabets, let `X=(X_i)_{i≥0}` have a stationary ergodic law `μ` on `A^N`, and let `d:A×B→[0,d_max]` be a bounded single-letter distortion. Logs and rates are base two. Put

$$d_n(x^n,y^n)=\frac1n\sum_{i=0}^{n-1}d(x_i,y_i),\qquad D_{\min}=\mathbb E_\mu\min_{b\in B}d(X_0,b),\qquad D_{\max}=\min_{b\in B}\mathbb E_\mu d(X_0,b).$$

For `D≥D_min`, define

$$R_n(D)=\min_{W_n:\,\mathbb E d_n(X^n,Y^n)\le D} I(X^n;Y^n),\qquad R(D)=\lim_{n\to\infty}\frac1nR_n(D).$$

Here `W_n` ranges over all stochastic matrices from the supported source words `A^n_+={x^n:μ_n(x^n)>0}` to `B^n`; values on null source words are immaterial. Put `R_n(D)=R(D)=+∞` for `D<D_min`. This convention makes the feasible support exactly `[D_min,∞)`: coordinatewise, `d(X_i,Y_i)≥min_b d(X_i,b)`, and stationarity gives expected block distortion at least `D_min`; the fixed selector `b_*(a)∈argmin_b d(a,b)` attains it. The minimum in `R_n` is attained: the channel simplex is compact, the expected distortion constraint is closed and nonempty for `D≥D_min`, and finite-alphabet mutual information is continuous. The selector also gives `R_n(D_min)≤n log|A|`. A constant reproduction letter minimizing expected distortion gives `R_n(D)=0` for `D≥D_max`; hence `R(D)=0` there. No assertion that `R(D)>0` on `(D_min,D_max)` is valid for every stationary ergodic source.

The expected-distortion operational rate is the infimum of `limsup_n n^{-1}log M_n` over deterministic length-`n` fixed-rate codes with `limsup_n E d_n(X^n,\hat X^n)≤D`. The excess-distortion convention used here is convergence in probability with slack: for every `ε>0`, `P(d_n(X^n,\hat X^n)>D+ε)→0`. It is not the stronger exact-threshold assertion `P(d_n>D)→0` at every endpoint.

## Finite-block limit, convexity, and right continuity

For every fixed `D≥D_min`, `R_n(D)` is finite, nonnegative, and nonincreasing in `D`. It is convex: if channels `W_1,W_2` have expected distortions at most `D_1,D_2`, their pointwise mixture `λW_1+(1−λ)W_2` has distortion at most `λD_1+(1−λ)D_2`, and finite-alphabet log-sum convexity gives

$$I_{\lambda W_1+(1-\lambda)W_2}(X^n;Y^n)\le\lambda I_{W_1}(X^n;Y^n)+(1-\lambda)I_{W_2}(X^n;Y^n).$$

Taking minimizers proves the convexity inequality for `R_n`.

The sequence `a_n=R_n(D)` is subadditive even when source blocks are dependent. To see this, use an `n`-block optimizer and an `m`-block optimizer as conditionally independent channels on the first and second portions of an `(n+m)`-block. Stationarity gives the second input block law `μ_m`, and the weighted expected distortion remains at most `D`. Writing the two reproduction blocks as `Y_1,Y_2`, conditional independence given the whole input gives

$$I(X^{n+m};Y_1,Y_2)=H(Y_1,Y_2)-H(Y_1,Y_2\mid X^{n+m})\le I(X^n;Y_1)+I(X_{n}^{n+m-1};Y_2)\le R_n(D)+R_m(D).$$

The first inequality uses only `H(Y_1,Y_2)≤H(Y_1)+H(Y_2)` and the product form of the test channel; it does not assume that `X^n` and `X_n^{n+m-1}` are independent. To see the limit directly, fix `k` and write `n=qk+s`, `0≤s<k`, with `a_0=0`. Repeated subadditivity gives `a_n≤q a_k+a_s`; the finitely many `a_s` are bounded, so `limsup_n a_n/n≤a_k/k`. Taking the infimum over `k`, while `a_n/n≥inf_k a_k/k` for every `n`, proves

$$R(D)=\lim_{n\to\infty}n^{-1}R_n(D)=\inf_{n\ge1}n^{-1}R_n(D),\qquad D\ge D_{\min}.$$

The pointwise limit of the convex functions `R_n(D)/n` is convex and nonincreasing. It is finite on `[D_min,∞)`, so it is continuous at every interior point of that interval. Right continuity at `D_min`, which convexity alone does not imply, follows as follows. If every pair `(a,b)` with `μ(X_0=a)>0` has `d(a,b)=min_c d(a,c)`, then `D_min=D_max` and `R` is identically zero on its feasible domain. Otherwise the finite set of positive gaps

$$d(a,b)-\min_c d(a,c),\quad μ(X_0=a)>0,$$

has a positive minimum `γ`. For a channel of average distortion at most `D_min+ε`, write `J_i=1{d(X_i,Y_i)>min_b d(X_i,b)}`. Then `n^{-1}Σ_i P(J_i=1)≤ε/γ`. Replace `Y_i` by `b_*(X_i)` whenever `J_i=1`, leaving it unchanged otherwise. The new channel has distortion exactly `D_min`, and

$$I(X^n;Y'^n)\le I(X^n;Y^n,J^n)+\mathbb E|J^n|\log|B|\le I(X^n;Y^n)+H(J^n)+\mathbb E|J^n|\log|B|\le I(X^n;Y^n)+n\bigl(h_2(ε/γ)+(ε/γ)\log|B|\bigr)$$

when `ε/γ≤1/2`. To prove the information bound, define a correction vector `V^n` by `V_i=b_*(X_i)` when `J_i=1` and a fixed dummy symbol otherwise. Then `Y'^n` is a deterministic function of `(Y^n,J^n,V^n)`, and

$$I(X^n;Y'^n)\le I(X^n;Y^n,J^n,V^n)\le I(X^n;Y^n)+H(J^n)+H(V^n\mid J^n).$$

Entropy subadditivity, concavity and monotonicity of binary entropy on `[0,1/2]` give `H(J^n)≤n h_2(ε/γ)`. Since `V_i` is fixed when `J_i=0` and takes at most `|B|` values when `J_i=1`, `H(V^n|J^n)≤E|J^n|log|B|≤n(ε/γ)log|B|`. Apply this to a minimizer at `D_min+ε`, divide by `n`, and take the established limits. It follows that

$$0\le R(D_{\min})-R(D_{\min}+ε)\le h_2(ε/γ)+(ε/γ)\log|B|\longrightarrow0.$$

Thus `R` is right-continuous on its entire feasible domain, including the lower endpoint. At and above `D_max`, it is zero.

## Locally proved stationary-ergodic process approximation

**Claim.** For each `D≥D_min` and each `r>R(D)`, there is a stationary ergodic finite-alphabet pair process `(X_i,Y_i)_{i∈Z}` whose source marginal is the two-sided stationary extension of `μ`, with

$$\mathbb E d(X_0,Y_0)\le D,\qquad \bar I(X;Y):=\lim_{n\to\infty}\frac1n I(X_0^{n-1};Y_0^{n-1})<r.$$

**Choice of a finite-block channel.** Since `R(D)=inf_k R_k(D)/k`, choose `k` with `I_k/k<r`, where `W_k` attains `R_k(D)` and `I_k=I(X_0^{k-1};Y_0^{k-1})` under `μ_kW_k`. The source blocks in this formula need not be independent. Choose `p∈(0,1)` so small that

$$\frac{I_k}{k}+(k-1)p\log|B|<r.$$

When `|B|=1`, the second term is zero and any `p` works.

**Two-sided source and independent cuts.** Under AC, the consistent stationary finite-window laws of `μ` define a two-sided stationary law on `A^Z` by the repository's published countable-coordinate Kolmogorov extension theorem. It is ergodic: an invariant event can be approximated in measure by a finite-coordinate cylinder, shifted into nonnegative coordinates using invariance, and hence represented modulo null sets by a one-sided event invariant modulo null sets; one-sided ergodicity gives probability zero or one. This extension step changes no finite-block source law. AC also supplies the two-sided iid auxiliary product below, in accord with the repository's probability-product conventions.

Independently take a two-sided iid process `Z_i=(C_i,U_i)`, where `C_i` is Bernoulli(`p`) and `U_i` is uniform on `[0,1)`. Its shift is strongly mixing: finite-coordinate cylinder events become independent once sufficiently separated, and cylinder approximation extends this to all measurable events. Here is a direct proof that its product with the ergodic source is ergodic, so no general product-ergodicity theorem is left implicit. Let `g` be a bounded, centered function of auxiliary coordinates in `[-L,L]`, and let `f` be a bounded source function. For shifts separated by more than `2L`, the two auxiliary cylinder functions are independent, so their centered correlation is zero. Expanding the squared norm of the product ergodic average gives

$$\left\|\frac1N\sum_{t=0}^{N-1}(U_X\otimes U_Z)^t(f\otimes g)\right\|_2^2\le\frac{(4L+1)\|f\|_2^2\|g\|_2^2}{N}\longrightarrow0.$$

For `f⊗1`, source Birkhoff averages converge in `L²` to their constants: pointwise convergence holds by Birkhoff and boundedness gives dominated `L²` convergence. Finite-coordinate auxiliary cylinders generate the auxiliary sigma-algebra, so finite sums of `f⊗1` and `f⊗g` with centered cylinder `g` are dense in the product `L²`. An invariant function equals its own ergodic averages; the limits just proved show that it is orthogonal to all centered tensors and to all centered source-only functions. It must therefore be constant. This proves the product ergodicity needed here and makes no assumption that the `k`-step map of the source is ergodic.

**Shift-equivariant random-cut channel.** Markers `C_i=1` divide almost every auxiliary sequence into finite segments `[s,t)`, each beginning at a marker and ending just before the next marker. Within a segment of length `L=t-s`, tile `floor(L/k)` consecutive complete `k`-blocks from its left endpoint. For a complete block starting at `j`, use `U_j` and a finite inverse-CDF map to draw its reproduction word with law `W_k(·|X_j^{j+k-1})`. On the final `L mod k` positions, output `b_*(X_i)` coordinatewise. The map is measurable on the invariant conull set of marker sequences unbounded in both directions and commutes with the shift. The resulting pair is a factor of the ergodic product above, so it is stationary and ergodic. The Bernoulli markers randomize the block phase; no fixed `k`-grid and no ergodicity of `T^k` is used.

Let `F_i` indicate that site `i` is in the leftover suffix. Every leftover site lies at one of the `k−1` positions immediately preceding the next marker, so

$$\alpha:=P(F_0=1)\le\sum_{j=1}^{k-1}P(C_j=1)=(k-1)p.$$

For `q=0,…,k−1`, the event that site `0` is the `q`th position of a complete block is a shift of the event that a complete block starts at `0`; all these `k` events therefore have the same probability `β`, and their disjoint union is `{F_0=0}`. Thus `kβ=1−α`. Marker events are independent of the source and seeds, so the expected distortion contributed by complete blocks is

$$\beta\sum_{q=0}^{k-1}\mathbb E_{\mu_kW_k}d(X_q,Y_q)=(1-\alpha)D_k,$$

where `D_k=E_{μ_kW_k}d_k≤D`. On a leftover site the expected distortion is `D_min`. Hence

$$\mathbb E d(X_0,Y_0)=(1-\alpha)D_k+\alpha D_{\min}\le D.$$

**Mutual-information-rate bound without independent source blocks.** For an interval `I_n={0,…,n−1}`, let `J_n(c)` be the complete `k`-blocks that intersect it and `L_n(c)` its leftover positions for a fixed marker sequence `c`. There are at most `n/k+2` intersecting complete blocks. All source symbols needed by those blocks lie in the finite enlargement `X_{-(k-1)}^{n+k-2}`. Conditional on this enlarged input and the fixed marker sequence, the reproduction subwords from distinct complete blocks are independent (their uniforms are independent), while leftovers are deterministic. Therefore entropy subadditivity and conditional independence imply, for each such `c`,

$$I(X_{-(k-1)}^{n+k-2};Y_0^{n-1}\mid C=c)\le \sum_{j\in J_n(c)} I(X_{B_j};Y_{B_j\cap I_n})+|L_n(c)|\log|B|\le (n/k+2)I_k+|L_n(c)|\log|B|.$$

For the second inequality, each block channel has source marginal `μ_k`; the observed output subword is a deterministic projection of its full reproduction word, so data processing bounds its mutual information by `I_k`. The other source blocks may be arbitrarily dependent on it; conditional on the block's own input, its output uses only the independent uniform at that block start. Since markers are independent of the source and the pair process is stationary, `E|L_n(C)|=nα`. Data processing, independence of `C` and the enlarged source, and averaging the displayed bound yield

$$\frac1n I(X_0^{n-1};Y_0^{n-1})\le\left(\frac1k+\frac2n\right)I_k+\alpha\log|B|.$$

Finite-alphabet stationary processes have entropy rates: `H(X_0^{n-1})` is subadditive by stationarity and entropy subadditivity, and the preceding fixed-block argument gives its normalized limit; the same holds for `Y` and `(X,Y)`. Consequently `n^{-1}I(X_0^{n-1};Y_0^{n-1})` has a limit (the sum of the two marginal entropy rates minus the joint entropy rate). Its limit is at most `I_k/k+αlog|B|<r`. This proves the claim.

## Random-code achievability from the process pair

Let a stationary ergodic finite-alphabet pair have `\bar d=E d(X_0,Y_0)≤D` and `\bar I<r`. The finite-alphabet stationary-ergodic SMB theorem, applied to `X`, `Y`, and `(X,Y)`, gives almost surely

$$\frac1n\log\frac{P(Y_0^{n-1}\mid X_0^{n-1})}{P(Y_0^{n-1})}\longrightarrow h(X)+h(Y)-h(X,Y)=\bar I.$$

The ratio is evaluated only on joint-probability-one pairs; there the numerator and denominator are positive. Birkhoff's theorem for the bounded observable `d(X_0,Y_0)` also gives `d_n(X_0^{n-1},Y_0^{n-1})→\bar d` almost surely. These are the only ergodic-limit inputs to the coding argument.

Choose `\bar I<s<r` and `δ>0`. Let

$$G_n=\{(x^n,y^n):d_n(x^n,y^n)≤\bar d+δ,\ i_n(x^n;y^n)≤ns\}.$$

Then `P((X^n,Y^n)∉G_n)→0`. For each supported `x^n`, put `q_n(x^n)=P(Y^n∈G_{n,x^n}\mid X^n=x^n)`. Markov's inequality gives

$$P(q_n(X^n)<1/2)≤2P((X^n,Y^n)∉G_n).$$

Draw `M_n=⌈2^{nr}⌉` independent codewords from the marginal law `P_{Y^n}`. If `q_n(x^n)≥1/2`, the probability that one draw lies in `G_{n,x^n}` is

$$P_{Y^n}(G_{n,x^n})=\sum_{y^n\in G_{n,x^n}}P(y^n\mid x^n)2^{-i_n(x^n;y^n)}≥2^{-ns}q_n(x^n)≥\tfrac12 2^{-ns}.$$

Thus the expected source probability of no good codeword is at most

$$\eta_n:=2P((X^n,Y^n)\notin G_n)+\exp\{-\tfrac12 2^{n(r-s)}\}\longrightarrow0.$$

For a fixed codebook, encode each input by the first codeword in its good set, if one exists, and otherwise by the first codeword. Averaging over codebooks shows that there is a deterministic codebook with failure probability at most `η_n` (if `η_n=0`, choose one with zero failure). On success distortion is at most `\bar d+δ≤D+δ`; on failure it is at most `d_max`. Therefore this same selected code has

$$\mathbb E d_n≤D+δ+d_{\max}\eta_n,$$

and, whenever `δ<ε`,

$$P(d_n>D+ε)≤\eta_n.$$

Its rate satisfies `n^{-1}log M_n→r`. This proves expected-distortion achievability and the excess-distortion-with-slack conclusion. Choosing `r_j=R(D)+1/j`, `δ_j→0`, and success thresholds `N_j` for these estimates, and using the `j`th construction for `N_j≤n<N_{j+1}`, gives a single sequence with `limsup` expected distortion at most `D`, rate at most `R(D)`, and `P(d_n>D+ε)→0` for every fixed `ε>0`.

If `D>D_min`, the construction also gives the stronger exact-threshold excess statement at the same infimum: choose `D'<D` with `R(D')` arbitrarily close to `R(D)` by continuity at the interior point (or use the constant code when `D>D_max`), run the construction at `D'`, and choose its typicality tolerance smaller than `D-D'`. Then the good-codeword event implies `d_n<D`, and the failure probability tends to zero. At `D=D_min` the exact event `P(d_n>D_min)→0` is not asserted.

## Operational converse and equality

For any deterministic length-`n` code with at most `M_n` messages and reproduction `\hat X^n`,

$$R_n(\mathbb E d_n(X^n,\hat X^n))≤I(X^n;\hat X^n)≤H(\text{message})≤\log M_n.$$

The first inequality is the definition of the finite-block RDF, the second is data processing because the reproduction is determined by the message, and the third is the entropy bound for a finite message alphabet. If `limsup E d_n≤D`, then for each `ε>0` all sufficiently large `n` have mean distortion at most `D+ε`; subadditivity's limit gives `liminf n^{-1}log M_n≥R(D+ε)`. Right continuity gives `liminf n^{-1}log M_n≥R(D)`. If instead the code sequence satisfies the excess-distortion-with-slack condition, boundedness gives

$$E d_n≤D+ε+d_{\max}P(d_n>D+ε),$$

and the same argument, with `ε↓0`, gives the same converse. Together with achievability, both operational infima equal `R(D)` on `[D_min,∞)`. Below `D_min`, every reproduction has distortion at least `n^{-1}\sum_{i=0}^{n-1}\min_b d(X_i,b)`; Birkhoff makes this lower bound converge almost surely to `D_min`, so neither the expected criterion nor the excess-distortion-with-slack criterion is achievable below the endpoint.

The exact-threshold caveat is real. Let `X_i` be iid fair bits, let `B` be a singleton, and set `d(0,b)=0`, `d(1,b)=1`. Then `D_min=D_max=1/2` and `R(D_min)=0`, but the only reproduction has

$$d_n=\frac1n\sum_{i=0}^{n-1}X_i,\qquad P(d_n>D_{\min})\longrightarrow\frac12$$

by the central limit theorem. Thus an exact-threshold excess criterion at the lower endpoint is strictly stronger than expected distortion or convergence in probability with positive slack.

## Proof interfaces, scope limits, and computation

* The only information-density limit used above is finite-alphabet stationary-ergodic SMB. Gray EIT, corrected first edition, Lemma 3.2.1, states and proves the almost-sure source self-information limit under exactly this finite-alphabet, stationary, ergodic hypothesis; all three applications are to factors of the stationary ergodic pair. The library has no local finite-alphabet SMB supplier yet, so any production dependency graph must add that supplier before promoting this RDF argument.
* The two-sided extension uses the published standard-Borel Kolmogorov extension theorem for countably many finite-alphabet coordinates. Ergodicity is justified above rather than assumed to survive extension without argument. Birkhoff is used only for a bounded observable in a stationary ergodic probability system.
* Boundedness is used in three exact places: finite-block objective continuity/compactness (finite alphabets already suffice there), the random-code failure penalty `d_max`, and the implication from excess-probability control to expected distortion. No unbounded MSE claim follows.
* This proof is for stationary ergodic finite-alphabet sources, finite reproduction alphabets, and bounded additive single-letter distortion. It does not establish AMS or stationary nonergodic operational coding, continuous alphabets, nonadditive criteria, variable-rate codes, or noisy-channel separation.
* Finite-dimensional minimizer existence does not itself provide a numerical algorithm. No Blahut–Arimoto convergence, iteration, precision, or complexity claim is made. Gray Source Coding Theory §4.4 gives updates and explicitly omits the convergence proof; r4's separate finite-alphabet analysis is the relevant algorithm lane.

## Read-source boundaries

Gray Source Coding Theory §3.2 defines the `N`th-order distortion-rate function by minimizing expected block distortion over conditional reproduction laws with `N^{-1}I(X^N;Y^N)≤R`; its Lemma 3.2.1 gives the code converse interface and its Theorem 3.2.1 states a process limit only when that limit is well-defined. Section 3.4 assumes a stationary ergodic source and bounded additive single-letter distortion, then random-codes from a stationary ergodic joint process satisfying its equations (3.4.1)–(3.4.2). Gray explicitly says the general process-approximation proof is omitted. The local random-cut proof above fills that omission for the finite-alphabet model and gives a distinct proof of the operational statement.

Gray EIT §10.6 provides a useful comparison: Lemma 10.6.2 proves the stationary subadditive block-RDF limit; Theorem 10.6.1 identifies block and stationary-process RDFs under a finite-mean reference reproduction letter, and identifies ergodic-process RDF for ergodic input. Its Lemma 10.6.3 / Example 9.4.11 use a randomized punctuation/SBM construction with reference-letter distortion overhead and handle stationary phases. The present bounded finite-alphabet construction proves the needed statements directly, with leftover distortion no larger than `D_min`, and with an explicit mutual-information boundary bound. Neither Gray source is treated as the local proof itself.


## Complete static finite-register arithmetic coding procedure and proof


Fix integers b>=3,1<=f<=b-2, Q=2^(b-2), H=2^(b-1), B=2^b. Fix an ordered alphabet A plus EOS, positive integer counts with total t<=2^f, and known source length n>=0. All interval endpoint sums use b+1-bit temporaries. A pending counter has capacity at least (n+1)(b-1), hence at least ceil(log2((n+1)(b-1)+1)) bits (one stored bit minimum). The source is x in A^n followed by EOS; this static model does not require an adaptive-frequency proof.

Encoder: initialize L=0,R=H,c=0. The operation emit(a) writes bit a followed by c copies of 1-a, then sets c=0. For each symbol with cumulative interval [l,h), put r=floor(R/t), L:=L+rl, and R:=r(h-l) if h<t, otherwise R:=R-rl. While R<=Q, use the first applicable case: (E1) if L+R<=H, emit(0), shift s=0; (E2) if L>=H, emit(1), shift s=H; (E3) otherwise increment c and shift s=Q. Then L:=2(L-s),R:=2R. After EOS's normalization, emit the b binary digits of L from most significant to least by calls to emit. The first final digit resolves any remaining pending bits.

Decoder: initialize L=0,R=H and read the first b stream bits as integer V. At every symbol set D=V-L and r=floor(R/t), target=min(t-1,floor(D/r)). The unique cumulative interval containing target identifies the symbol. Apply the identical L,R symbol update. During each normalization choose the same first applicable interval case, put s=0,H or Q accordingly, read one new input bit a, and set V:=2(V-s)+a,L:=2(L-s),R:=2R. The decoder does not emit bits or need a pending counter. Continue through EOS's normalization, require exactly n ordinary symbols before EOS, and stop. Reject malformed/incomplete input or an out-of-range state. This determines the consumed stream length, allowing a following stream without pushback.

Well-definedness and range: at every normalized symbol entry Q<R<=H and L+R<=B. Since t<=Q<R, r>=1. Nonfinal symbol widths r(h-l)>=1; the last width R-rl>=r(t-l)>=1 absorbs the division remainder. Updated subintervals partition [L,L+R) exactly; boundary offsets go to the following half-open interval, including the last-tail clamp. Each normalization doubles R, so at most b-1 such steps occur per symbol. E1 and E2 keep the rescaled interval in [0,B); E3 straddles H with R<=Q, implying Q<=L<H<L+R<=3Q, so subtracting Q and doubling is also in range. The loop exits with Q<R<=H; then L<B-Q follows from L+R<=B. Products rl,rh are <=R<=H at symbol entry, endpoint sums <=B use the widened temporary, and stored endpoints/ranges fit b bits. Every pending increment is one normalization, so the declared counter bound prevents overflow on every authorized input, rather than only detecting failure.

Bit serialization correctness: normalize interval values by B. The E1 inverse adds a leading 0 bit; E2 adds leading 1. The E3 inverse is u_old=1/4+u_new/2. After c unresolved E3 steps it is u_old=(1/2)(1-2^-c)+2^-c u_new. If u_new's next stable bit is 0, this inverse has that 0 followed by c ones; if the stable bit is 1, it has that 1 followed by c zeros. This proves exactly the emit-and-follow rule, including its pending polarity. At finish the binary suffix L/B chooses the included left endpoint of the final nonempty half-open interval. Undoing the finite affine maps therefore places the represented value in every encoded symbol interval. The b-bit decoder window and its shift/read rule track that value; if 0<=D<R, then the floor/clamp rule selects precisely the encoded cumulative interval and preserves 0<=D_new<R_new. Each rescaling preserves this invariant because V and L receive the same shift and scale and one binary bit refines the window. Induction recovers every symbol and EOS.

If K total normalizations occurred, the encoder writes K-c resolved bits before finishing and c+b bits at finish, hence exactly K+b bits. Decoder initialization consumes b and its K rescalings consume K, so the finite stream is sufficient and exactly consumed. There are n+1 symbols, at most (n+1)(b-1) rescalings and finite b-digit finalization: termination and injectivity follow. The exact word-operation model counts O(n b) normalization/output work plus cumulative-table search work. This is a guaranteed static finite-input coder; no arbitrary-length fixed pending-counter, adaptive-model, machine-wraparound, misspecified-model rate or ideal-real redundancy conclusion is imported.


## Fano for erasure and out-of-alphabet decoder outputs

The sharp m-1 alternative count requires the estimate to lie in the same m-symbol message alphabet. For an arbitrary finite decoder output, including erasure, put E=1{Mhat!=M}; after adjoining an independent decoding seed, E is determined by M and observation/seed. On E=0 M is known; on E=1 there are at most m possible messages, even when the output is erasure. The entropy chain therefore gives H(M|Y)<=h(P_e)+P_e ln m, with no uniform-prior premise. For uniform M this gives (1-P_e)ln m<=I(M;Y)+h(P_e), exactly the form used in channel/cq converses. This weaker form is valid for the original error probability without silently mapping erasure to a same-alphabet estimate or using monotonicity of binary entropy outside its increasing range. The separate sharp theorem retains its same-alphabet premise.


For arbitrary standard-Borel code observations Y (including AWGN), the Fano factor bound is obtained by applying the finite erasure-safe corollary to observation Mhat itself: (1-P_e)ln m<=I(M;Mhat)+h(P_e). Deterministic/kernel general DPI then gives I(M;Mhat)<=I(M;Y). Thus this code converse does not require an unproved finite-observation Fano theorem to be applied directly to continuous Y. If decoder randomness is used, adjoin its independent seed first; the MI chain rule shows it adds zero information about M. The same general-observation conditional-entropy bound also follows from the existing finite-M conditional entropy/MI identity, but no finite-core dependency on general RN/AC is introduced.

For the stationary process RDF equality, every stationary pair of mean distortion<=D has I(X^n;Y^n)>=R_n(D), so its information rate is >=R(D). The random-cut pair attains any strictly larger rate with mean distortion<=D, proving equality of the process infimum and block limit. In the two-sided extension's ergodicity argument, approximate an invariant indicator in L2 by finite cylinders; shift each approximant into nonnegative coordinates using invariance. The subspace of one-sided-measurable L2 functions is closed, so the indicator has a one-sided measurable version. Its strict-invariance equality transfers modulo null sets to that version; one-sided ergodicity forces it constant. This supplies the closure step in the extension argument.


## Complete finite feedback MAC, CES, relay, common-output TWC and strong-interference developments


Status: local draft proof supplement for the r2 lane, written at root's request for the bounded network obligations in `audit/scientific-gap-matrix.md`. These are finite-alphabet proofs and interfaces for scaffold integration. They are not production items, proof-review stamps, or new claims that an open network-capacity problem has been solved.

All logarithms are base two. Alphabets are finite and nonempty. A channel is a stochastic kernel and is used memorylessly unless stated otherwise. Typical sets are strong typical sets on the positive support of the target law; nested tolerances are fixed before taking blocklength limits. Error means average block error over independent uniform messages and channel randomness. A strict rate inequality below has positive slack. Boundary points are included only after taking closure.

## Reading scope and source limits

The principal read-only manuscript is Abbas El Gamal and Young-Han Kim, *Lecture Notes on Network Information Theory*, arXiv:1001.3404v3 (22 March 2010), a 641-page historical author lecture-note manuscript, not the later expanded Cambridge book. The r5 source manifest records the manuscript identity, PDF/text hashes, complete extraction, and r5's whole-document reading. I did **not** read the whole manuscript. I read the extracted text consecutively across these target sections and checked the central statement pages in the PDF where glyphs or signs mattered:

- Lecture Notes 6, printed pp. 1–14: strong interference definition, capacity statement, simultaneous-decoding reference, converse and tensorization lemma statement.
- Lecture Notes 15, printed pp. 7–18: full no-common-part correlated-source proof, common-part definition, and the CES theorem and its achievability outline.
- Lecture Notes 17, printed pp. 18–25 and 39–45: full decode-forward backward-decoding proof and compress-forward theorem, code construction, receiver analysis, and final bound.
- Lecture Notes 18, printed pp. 19–22 and 45–55: feedback DM-MAC model and Cover–Leung statement, then the DM-TWC model, directed-information definitions, and common-output multiletter theorem.

I visually inspected PDF pages 130, 364–365, 414, 416–417, 451, and 468 for the displayed strong-interference, CES, compress-forward, Cover–Leung, and TWC formulas. The v3 sections give no Cover–Leung proof, no TWC proof, and only an outline for CES. The relay compress-forward proof leaves one joint packing step as “check!” and prints a plus sign in the wrong-message packing threshold; the finite proof below supplies the omitted exponent and uses the required minus-slack form. The v3 compress-forward statement also gives `|hat Y_r|<=|X_r||Y_r|+1`; this note proves the rate bound for each finite test channel but does not establish that optional support reduction. The source's strong-interference tensorization proof is only an induction pointer; a complete hybrid-output proof is supplied below. The source writes the TWC capacity region as an unclosed union although its operational definition is closed; the exact operational statement below uses the closure of that union.

For finite type-counting interfaces I independently checked r5's read-only `network-coding-proof-developments.md` §§1.1–1.4, 2.1–2.4 and 5.1–5.4. In §5 I independently specialized the relay packing/cut calculation to one sender and one relay. I use its conditional packing and path-connected support-reduction interfaces only within their stated finite-alphabet, average-error scope. The selected-codeword and post-covering Markov interfaces in the shared draft `proof-developments.md` are proposal-level scaffold lemmas (`lem-it-selected-covering-codeword-counting-bound` and `lem-it-finite-markov-typicality-after-covering`), not published production suppliers; their exact finite applications are also spelled out here.

## Finite-alphabet estimates used in the proofs

For a fixed finite joint law, the empirical frequency of each symbol tuple is an average of bounded indicators. The finite weak law and a union bound therefore imply that an i.i.d. true tuple is strongly typical with probability tending to one. If a candidate sequence is drawn independently with conditional law ∏_i p(v_i|u_i), and the tested base tuple `(u^n,z^n)` is typical, conditional type counting gives

`P{(u^n,V^n,z^n) is jointly typical} <= 2^{-n(I(V;Z|U)-delta)}`,

for a tolerance-dependent `delta -> 0`. Indeed there are at most `2^{n(H(V|U,Z)+delta)}` candidates in the relevant conditional type class, and each has probability at most `2^{-n(H(V|U)-delta)}`. Repeating the count for multiple independently generated candidate sequences gives the corresponding sum of mutual-information exponents. A union over `2^{nR}` wrong candidates vanishes when the relevant mutual information exceeds `R` with positive slack. Each use below checks that the false candidate codeword is independent of the actual observation, conditionally on the displayed cloud/input sequence. No such estimate is applied to a codeword selected by feedback as if it were independent.

For covering, fix a typical base `(y_r^n,x_r^n)` and draw `L=ceil(2^{nRhat})` independent words from `p(hat y_r|x_r)^n`. The conditional typical set has mass at least `2^{-n(I(Y_r;hat Y_r|X_r)+delta)}`. Hence

`P{no jointly typical word} <= exp(-2^{n(Rhat-I(Y_r;hat Y_r|X_r)-delta)})`,

which tends to zero when `Rhat>I(Y_r;hat Y_r|X_r)+delta`. Select the first successful index. Conditional on success its word is supported on the required conditional-typical set; its point masses there are at most `2^{-n(H(hat Y_r|Y_r,X_r)-delta)}` by dividing the product-kernel point-mass bound by the conditional-typical-set mass. The finite Markov type-counting argument then applies to

`(X_s,Y_d) - (Y_r,X_r) - hat Y_r`.

For completeness, the Markov step is this: outside any fixed enlarged joint-typical set, a conditional type of `hat Y_r` given `(X_s,Y_d,Y_r,X_r)` with the correct nearby `(Y_r,X_r,hat Y_r)` marginal has conditional entropy at least a fixed positive amount below `H(hat Y_r|Y_r,X_r)`. Otherwise compactness of the finite type simplex gives a limiting non-target coupling with `I((X_s,Y_d);hat Y_r|Y_r,X_r)=0`; the target Markov law is the unique zero-conditional-information coupling with those marginals. There are polynomially many conditional types, so the upper point-mass bound times the type-class count makes the bad probability tend to zero. Thus the selected compression word is jointly typical with the true source, relay, and destination variables with probability tending to one.

We also use the following finite support fact, whose proof is included because several cited cardinalities are sharper than generic Carathéodory. If `G` is path-connected in `R^d`, each point of `conv(G)` is a convex combination of at most `d` points of `G`. Carathéodory first gives at most `d+1`. If a minimal representation has `d+1` affinely independent points, translate the represented point to zero and write its vertices as `v_0,...,v_d`; the facet opposite `v_0` avoids zero, so `v_1,...,v_d` are a linear basis and `v_0=-sum_i a_i v_i` with every `a_i>0`. The cone `K={-sum_i b_i v_i:b_i>=0}` has `v_0` in its interior and `v_1` outside. A path in `G` from `v_0` to `v_1` first meets the boundary of `K` at a point `w=-sum_i b_i v_i` with some `b_j=0`. Then zero is a convex combination of `w` and the at most `d-1` vertices `v_i`, `i != j`; if all `b_i=0`, zero is itself in `G`. This reduces the support to at most `d`.

## Cover–Leung feedback DM-MAC inner bound

Let `W(y|x1,x2)` be a finite DM-MAC. At time `i`, sender `j` uses a deterministic causal map `x_ji=f_ji(M_j,Y^{i-1})`; both senders receive the same noiseless output feedback. Messages `M1,M2` are independent uniform variables, and the receiver must decode both. For a law `p(u)p(x1|u)p(x2|u)`, every strict rate pair satisfying

`R1 < I(X1;Y|X2,U)`,

`R2 < I(X2;Y|X1,U)`,

`R1+R2 < I(X1,X2;Y)`

is achievable. This is an inner bound in general, not the feedback capacity region. The v3 statement gives `|U| <= min{|X1||X2|+1, |Y|+2}`.

Fix a block length `n` and a number `B` of blocks. There are `B-1` independent new messages `M_{j,b}` per sender, each uniform on `[1:2^{nR_j}]`; put dummy pair `(1,1)` before block 1 and in block B. Independently in each block, generate a cloud word `u^n(m_1',m_2')` i.i.d. `p_U` for every old message pair. For each old pair, generate sender-1 satellites `x_1^n(m_1|m_1',m_2')` conditionally i.i.d. `p(x_1|u)` and sender-2 satellites `x_2^n(m_2|m_1',m_2')` conditionally i.i.d. `p(x_2|u)`, independently given the cloud. The codebooks are public and then fixed; there is no run-time shared randomness.

In block `b`, sender `j` transmits `x_j^n(M_{j,b}|M_{1,b-1},M_{2,b-1})`. After block `b`, sender 1 knows its own new message and the full feedback block, and decodes `M_{2,b}` by the unique conditional-typicality test using the known `u^n`, `x_1^n`, candidate `x_2^n`, and `y^n`. Sender 2 symmetrically decodes `M_{1,b}`. If the previous pair is correct, the true tuple is typical. For sender 1, each wrong `x_2^n` is independent of the received output conditionally on `(u^n,x_1^n)`; the packing exponent is `I(X2;Y|X1,U)`. Thus its decoding error tends to zero if `R2<I(X2;Y|X1,U)-delta`. Sender 2 has exponent `I(X1;Y|X2,U)` and succeeds if `R1` is below it. These are the two individual constraints; the encoders need not decode an unknown pair jointly, so no conditional sum-rate constraint is imposed on them. By induction and a union bound over fixed `B`, all old pairs used by the encoders are correct with probability tending to one.

The destination decodes backwards. Starting from the dummy pair in block `B`, if it knows the new pair `(M_{1,b},M_{2,b})`, it uses `Y^n(b)` to find the unique previous pair `(m_1',m_2')=(M_{1,b-1},M_{2,b-1})` for which

`(x_1^n(M_{1,b}|m_1',m_2'), x_2^n(M_{2,b}|m_1',m_2'), Y^n(b))`

is typical for the *marginal* law `p(x1,x2,y)=sum_u p(u)p(x1|u)p(x2|u)W(y|x1,x2)`. It does not test or decode `U` separately. The true tuple is typical. For every false old pair, the candidate satellite pair has the marginal product-over-time law `p(x1,x2)^n` and is independent of the received output; this remains true when one coordinate of the message pair happens to equal the true coordinate, because the codebooks are indexed by the full old pair. The packing exponent is `I(X1,X2;Y)`, and there are at most `2^{n(R1+R2)}` candidate pairs. The backward decoding error therefore tends to zero if `R1+R2<I(X1,X2;Y)-delta`. Induction from the dummy terminal pair bounds the destination's total error by a sum of `B` terms tending to zero.

The code sends `B-1` source message blocks in `B` channel blocks, so its per-use rates are multiplied by `(B-1)/B`. Choose `B` large and then `n` large; closure gives every boundary pair in the displayed region.

For the stated auxiliary bound, map each product input law at `u` to either (i) all but one coordinate of `p(x1,x2|u)` and `H(Y|X1,u),H(Y|X2,u)`, or (ii) all but one coordinate of `p(y|u)` and `H(Y|X1,u),H(Y|X2,u),H(Y|X1,X2,u)`. The first image is path-connected in dimension `|X1||X2|+1`; the second is path-connected in dimension `|Y|+2`. Preserving their averages preserves the two conditional mutual informations and the unconditional sum mutual information. The finite support fact above gives respectively `|U|<=|X1||X2|+1` and `|U|<=|Y|+2`.

## Cover–El Gamal–Salehi correlated sources over a DM-MAC

Let `(U1,U2)` be a finite-alphabet i.i.d. source pair with one-letter law `p(u1,u2)`, and let `W(y|x1,x2)` be a finite DM-MAC. The common part `U0` is the component label of the bipartite support graph with left vertices `u1`, right vertices `u2`, and an edge exactly when `p(u1,u2)>0`. Equivalently `U0=g1(U1)=g2(U2)` a.s. and is the finest such common deterministic function. The source is sent losslessly at one source symbol per channel use if, for some finite `W` independent of `(U1,U2)` and

`p(w)p(x1|u1,w)p(x2|u2,w)`,

the four strict inequalities hold:

`H(U1|U2) < I(X1;Y|X2,U2,W)`,

`H(U2|U1) < I(X2;Y|X1,U1,W)`,

`H(U1,U2|U0) < I(X1,X2;Y|U0,W)`,

`H(U1,U2) < I(X1,X2;Y)`.

Here `U0` is the source common part; `W` is an independent auxiliary indexing the random cloud codewords that let the encoders coordinate; it is not preshared correlation between the sources. An independent time-sharing variable `Q` is unnecessary: if `p(q)p(w|q)` and conditional kernels are introduced, replacing `W` by `(Q,W)` yields the same factorization and preserves its independence from `U0`.

For each possible source sequence `u_0^n`, generate a cloud word `w^n(u_0^n)` with law `p_W^n`. For each `u_1^n` (whose common part is `u_0^n`), generate `x_1^n(u_1^n|w^n(u_0^n))` with product conditional law `p(x_1|u_1,w)`. Generate the sender-2 codewords analogously and independently conditional on the cloud. Given its observed source sequence, each sender computes its common-part sequence and sends its indexed input word. Decode the unique source pair `(u_1^n,u_2^n)` whose common-part sequences agree and for which

`(u_1^n,u_2^n,u_0^n,w^n(u_0^n),x_1^n,x_2^n,y^n)`

is jointly typical for the induced law. A source pair with inconsistent common-part sequences is never a candidate.

The true tuple is typical with probability tending to one by successive finite conditional typicality: first the i.i.d. source tuple, then its independently generated cloud word, the two conditionally independent input codewords, and finally the memoryless channel output. Consider the remaining error classes.

- If only `u_1^n` is wrong, consistency forces it to have the true `u_0^n`. For a typical fixed `u_2^n`, there are at most `2^{n(H(U1|U2)+delta)}` candidate source sequences. For each candidate `u_1^n` distinct from the true sequence, its `x_1^n` codeword is generated independently of the true output conditional on `(u_1^n,u_2^n,x_2^n,w^n)`. A conditional type count first charges the candidate source label for matching the output, with exponent `I(U1;Y|U2,X2,W)`, and then charges its independent channel-input codeword, with exponent `I(X1;Y|U1,U2,X2,W)`. Thus the per-candidate probability is at most

  `2^{-n(I(U1;Y|U2,X2,W)+I(X1;Y|U1,U2,X2,W)-delta)}`

  `= 2^{-n(I(U1,X1;Y|U2,X2,W)-delta)} = 2^{-n(I(X1;Y|U2,X2,W)-delta)}`.

  The equality is the Markov relation `U1-X1-Y` conditional on `(U2,X2,W)`. To account for the condition that the candidate is not the true source word, fix a typical candidate `\tilde u_1^n`: conditional on `u_2^n`, the actual source word has law `p(u_1^n|u_2^n)` with that one atom removed and renormalized. For every event of the output this changes the unconditioned marginal bound by at most the factor `1/(1-p(\tilde u_1^n|u_2^n))`. If `H(U1|U2)>0`, strong typicality makes this atom exponentially small; if the conditional entropy is zero, there is no distinct positive-support conditional-typical candidate. The union bound makes this class vanish under the first inequality. The class with only `u_2^n` wrong is symmetric and gives the second inequality.

- If both source sequences are wrong but have the same `u_0^n` as the true pair, there are at most `2^{n(H(U1,U2|U0)+delta)}` candidates. For a fixed candidate `(\tilde u_1^n,\tilde u_2^n)`, both coordinate sequences differ from the true sequences; this is needed because each candidate input word must come from an independent satellite-codebook family. Condition the true source pair, given `u_0^n`, on both `U_1^n\ne\tilde u_1^n` and `U_2^n\ne\tilde u_2^n`. Relative to its unconditioned law this changes any output-event bound by at most the factor

  `1/[1-p(\tilde u_1^n|u_0^n)-p(\tilde u_2^n|u_0^n)]`.

  When both `H(U1|U0)>0` and `H(U2|U0)>0`, the two probabilities are exponentially small for conditional-typical candidates, so this factor tends to one. If either conditional entropy is zero, no both-coordinate-wrong candidate can be conditional-typical with the same common-part sequence, and this error class is empty. For a nonempty class, first count the chance that its source labels match the actual output under the source/channel joint type, then count its two independently generated input words; their exponent sum is `I(U1,U2,X1,X2;Y|U0,W)=I(X1,X2;Y|U0,W)`. The equality uses the channel Markov factorization through `(X1,X2)`. The third inequality makes this class vanish.

- If both source sequences are wrong and their `u_0^n` differs from the true sequence, there are at most `2^{n(H(U1,U2)+delta)}` candidates. For a fixed candidate common-part sequence `\tilde u_0^n`, restrict the true source to `U_0^n\ne\tilde u_0^n`; conditioning changes an output-event bound by at most `1/[1-p(\tilde u_0^n)]`. If `H(U0)>0`, this factor tends to one for typical candidates; if `H(U0)=0`, there is no different-common-part candidate. The candidate cloud and input codewords then belong to codebook families independent of the true output. Counting the tested joint type gives exponent `I(U0,U1,U2,W,X1,X2;Y)=I(X1,X2;Y)`, again by the channel Markov factorization. The fourth inequality makes this class vanish.

For each error class the random codebook average tends to zero; hence at each blocklength some deterministic public codebook has no larger average error. This proves the sufficient condition. It is an inner bound for correlated source transmission, not a general MAC capacity theorem. It is stronger than the no-common-part construction because it separately controls errors within a common-part class and errors across classes.

## Relay decode-forward lower bound

Let a finite DM relay channel have sender input `X_s`, relay input `X_r`, destination output `Y_d`, relay observation `Y_r`, and kernel `W(y_d,y_r|x_s,x_r)`. The sender's encoder depends on its message only. The relay is strictly causal: its symbol at time `i` is a function of `Y_r^{i-1}`. The decode-forward lower bound is

`R < max_{p(x_s,x_r)} min{ I(X_s,X_r;Y_d), I(X_s;Y_r|X_r) }`.

Fix a joint law `p(x_s,x_r)=p(x_r)p(x_s|x_r)` and an interior rate. Use `B` blocks, with `B-1` independent messages `M_b in [1:2^{nR}]` and dummy `M_0=M_B=1`. For each block independently generate relay codewords `x_r^n(m')` i.i.d. `p(x_r)` and source satellites `x_s^n(m|m')` with product law `p(x_s|x_r^n(m'))`.

In block `b`, the source sends `x_s^n(M_b|M_{b-1})`; the relay sends `x_r^n(\tilde M_{b-1})`, its previous estimate. At the end of block `b`, assuming the previous estimate is correct, the relay declares the unique `m` for which `(x_s^n(m|M_{b-1}),x_r^n(M_{b-1}),y_r^n(b))` is typical. The true tuple is typical; each wrong satellite is conditionally independent of the relay observation given the known relay word, with packing exponent `I(X_s;Y_r|X_r)`. Thus relay error vanishes if `R<I(X_s;Y_r|X_r)-delta`.

The destination decodes backwards. Starting from dummy `M_B`, if it knows the new message `M_b`, it uses `y_d^n(b)` to find the unique previous message `m'=M_{b-1}` such that `(x_s^n(M_b|m'),x_r^n(m'),y_d^n(b))` is typical for `p(x_s,x_r,y_d)`. The true triple is typical. A wrong candidate pair is generated as a joint `p(x_r)p(x_s|x_r)` word and is independent of the actual output, so its packing exponent is `I(X_s,X_r;Y_d)`. The union over `2^{nR}` messages vanishes if `R<I(X_s,X_r;Y_d)-delta`. Induct backward from the terminal dummy; union bounds over fixed `B` combine with the relay's forward induction. Since `(B-1)/B` of the channel blocks carry messages, first choose large `B`, then large `n`, and take closure. This is a lower bound; no relay-capacity converse is asserted here.

## Relay compress-forward lower bound

Use the same DM relay model and abbreviate the source, relay and outputs as `X_s,X_r,Y_d,Y_r`. Fix a finite test channel

`p(x_s)p(x_r)W(y_d,y_r|x_s,x_r)p(hat y_r|y_r,x_r)`.

For every such law, every rate strictly below

`min{ I(X_s;Y_d,hat Y_r|X_r), I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d) }`

is achievable. This is a relay inner bound; it is not a capacity formula for a general relay channel. The universal proof below is the one-relay specialization of noisy network coding (NNC), which uses covering and nonunique decoding without binning. The classical Wyner–Ziv binning proof is also recorded, with the additional condition needed by its separate-bin decoder.

Choose auxiliary rates `R_b` (bin/channel rate) and `Rhat` satisfying

`Rhat > I(hat Y_r;Y_r|X_r)`,

`R_b < I(X_r;Y_d)`,

`R < I(X_s;Y_d,hat Y_r|X_r)`,

`R+Rhat-R_b < I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)`.

When `I(X_r;Y_d)>0`, these constraints are feasible exactly when `R` is below the displayed minimum, with positive slack. This is the classical separately-decoded-bin realization. Use `B` blocks for `B-1` independent source messages. In each block generate `2^{nR}` source words i.i.d. `p(x_s)`, `2^{nR_b}` relay words i.i.d. `p(x_r)`, and for every relay word `x_r^n(l)` generate `2^{nRhat}` compression words with law `p(hat y_r|x_r)^n`. Assign every compression index independently and uniformly to one of `2^{nR_b}` bins, independently of all words. The codebook and bin assignment are fixed publicly.

The sender transmits the codeword for the current message. At the end of block `b`, the relay knows the previously sent relay bin `l_{b-1}`, observes `y_r^n(b)`, and selects the first compression index `k_b` for which `(hat y_r^n(k_b|l_{b-1}),y_r^n(b),x_r^n(l_{b-1}))` is typical. If none exists it declares an error and uses a fixed default. It sends the bin `l_b` of `k_b` through `x_r^n(l_b)` in block `b+1`. The covering estimate and post-covering Markov estimate above show that the covering failure and true-tuple atypicality probabilities tend to zero.

The destination decodes in one-block delay. From `y_d^n(b+1)`, it first decodes the relay bin `l_b` by the unique typical relay word `x_r^n(l_b)`; this error vanishes for `R_b<I(X_r;Y_d)`. Having `l_{b-1}` and `l_b`, it declares the unique source message `m` for which there exists a compression index `k` in bin `l_b` with

`(x_s^n(m),x_r^n(l_{b-1}),hat y_r^n(k|l_{b-1}),y_d^n(b))`

jointly typical. The true message and selected compression index pass this test with probability tending to one.

There are two false-message classes. For a wrong message with the **true** compression index `k_b`, the candidate `X_s^n(m)` is independent of `(X_r^n,hat Y_r^n,Y_d^n)`; conditional packing gives exponent `I(X_s;Y_d,hat Y_r|X_r)`. This class vanishes under the third inequality. For a wrong message and a wrong compression index in the decoded bin, first condition on all codewords, source/channel outcomes, and the selected index. The independent random bin assignment puts any fixed `k != k_b` in the same bin as `k_b` with probability exactly `2^{-nR_b}`. Upper-bound the number of such events by summing over all wrong messages and all compression words, dropping the restriction `k != k_b` only after the collision indicator has been applied. For each fixed candidate pair of codewords, before selection it is independent of the true `Y_d^n`; conditional on a typical `x_r^n`, its proposal law is

`p(x_s)^n p(hat y_r|x_r)^n p(y_d|x_r)^n`,

whereas the tested target is `p(x_s,hat y_r,y_d|x_r)^n`. Its type-counting exponent is

`D(P_{X_s,hat Y_r,Y_d|X_r} || P_{X_s}P_{hat Y_r|X_r}P_{Y_d|X_r})`

`= I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)`.

The expected union bound is therefore at most a subexponential factor times

`2^{n(R+Rhat-R_b-I(X_s;Y_d|X_r)-I(hat Y_r;X_s,Y_d|X_r)+delta)}`,

which tends to zero under the fourth inequality. This argument is why the false-bin class uses the *sum* of the two mutual-information exponents, not just a generic one-codeword packing lemma. The channel error is handled by an induction over blocks and a union bound for fixed `B`; the dummy first/last blocks cost the factor `(B-1)/B`.

Finally, use the Markov factorization `hat Y_r-(Y_r,X_r)-(X_s,Y_d)` to eliminate the auxiliary rates. The fourth constraint with `Rhat` decreasing to `I(hat Y_r;Y_r|X_r)` and `R_b` increasing to `I(X_r;Y_d)` yields

`R < I(X_r;Y_d)+I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)-I(hat Y_r;Y_r|X_r)`

`= I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)`.

Together with the third constraint this is the claimed minimum whenever `I(X_r;Y_d)>0`. The v3 proof prints `+delta` in the wrong-message bound for its one-codeword event; the packing estimate requires `R<I(X_s;Y_d,hat Y_r|X_r)-delta`, as used here. It also leaves the two-wrong-index type count as “check!”; the divergence calculation above supplies that missing step. No support-size reduction for `hat Y_r` is used in this proof.

The separate-bin method just described is not by itself a proof for every test channel: if `I(X_r;Y_d)=0`, it cannot send a positive bin rate, and the min formula can still be positive when the channel has joint-input information. The following no-binning proof closes that case and establishes the displayed lower bound for every finite test channel.

### No-binning one-relay NNC proof (valid for every finite test channel)

Use `B` independent length-`n` block codebooks and repeat the **same** message `M in [1:2^{nBR}]` in every block. For each block `j`, generate source codewords `x_s^n(m)` i.i.d. `p(x_s)` and relay codewords `x_r^n(l_{j-1})` i.i.d. `p(x_r)`, independently over messages, indices and blocks. For every relay codeword generate `2^{nRhat}` quantization words `hat y_r^n(k_j|l_{j-1})` conditionally i.i.d. according to `p(hat y_r|x_r)^n`, the marginal of the fixed test channel after averaging `Y_r`. Set `l_0=1`.

In block `j`, the source sends `x_s^n(M)` and the relay sends `x_r^n(l_{j-1})`. At the end of the block, the relay selects uniformly among all indices `k_j` for which `(x_r^n(l_{j-1}),y_r^n(j),hat y_r^n(k_j|l_{j-1}))` is typical; if none exists it selects a fixed default. It sends the selected index as `l_j` through the relay codebook in block `j+1`. If

`Rhat > I(Y_r;hat Y_r|X_r)+delta`,

the covering estimate above and the finite Markov estimate show that the correct message and the relay's actual index path generate jointly typical block tuples with probability tending to one for fixed `B`.

The destination searches for the unique message `m` for which there exists a sequence of relay indices `l_1,...,l_B` such that each block tuple

`(x_s^n(m),x_r^n(l_{j-1}),hat y_r^n(l_j|l_{j-1}),y_d^n(j))`

is jointly typical. It need not identify the relay indices uniquely. For a false message, the finite NNC packing argument has two candidate-index classes, corresponding to the cuts `S={s}` and `S={s,r}`. For `S={s}`, reveal the actual relay input, selected quantization word and destination output. The false source codeword remains independent of them; the exponent is

`I_1=I(X_s;hat Y_r,Y_d|X_r)`.

For `S={s,r}`, the false source/relay codeword group and its quantizer group are independent of the actual destination output. Their product proposal, conditional on the displayed `X_r` coordinate inside the test channel, differs from the target joint type by the divergence

`D(P_{X_s,X_r,hat Y_r,Y_d} || P_{X_s}P_{X_r}P_{hat Y_r|X_r}P_{Y_d})`

`= I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)`.

This is the second packing exponent before subtracting the `Rhat` bits per block needed to search quantization indices. More explicitly, the one-relay specialization of the finite type bound in r5 `network-coding-proof-developments.md` §5.4 gives, for fixed `B`, a wrong-message error exponent governed by

`R < ((B-1)/B) min{ I_1, I_2-Rhat-delta } - Rhat/B`,

where `I_2=I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)`. The first/last boundary blocks account for the factors `(B-1)/B` and `1/B`; no relay-index uniqueness is used. Choose `Rhat>I(Y_r;hat Y_r|X_r)+delta`, let `n` tend to infinity with `B` fixed, and then let `B` tend to infinity. This proves every rate below

`min{ I(X_s;Y_d,hat Y_r|X_r), I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)-I(Y_r;hat Y_r|X_r) }`.

Finally, the Markov factorization `hat Y_r-(Y_r,X_r)-(X_s,Y_d)` gives

`I(hat Y_r;Y_r|X_r)-I(hat Y_r;X_s,Y_d|X_r) = I(Y_r;hat Y_r|X_s,X_r,Y_d)`,

so the second term is the claimed `I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)`. This one-relay specialization establishes the theorem for all finite test channels. It is the NNC/no-binning proof; the preceding random-bin proof records the classical Wyner–Ziv constraints where the separate-bin decoder applies.

As a finite edge-case check, take binary inputs, `Y_d=X_s XOR X_r`, `Y_r=X_s`, independent uniform `X_s,X_r`, and `hat Y_r=Y_r`. Then `I(X_r;Y_d)=0`, but both terms of the CF/NNC minimum equal one bit: `I(X_s;Y_d,hat Y_r|X_r)=1` and `I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)=1`. The separate forward bin decoder cannot transmit a positive bin rate under this law; the nonunique NNC decoder supplies the missing case.

## Common-output two-way channel and directed information

Let `W(y|x1,x2)` be a finite DM-TWC with a common output: both nodes observe the same `Y_i` at every use. Independent uniform messages `M1,M2` are sent in opposite directions. At time `i`, `X_ji=f_ji(M_j,Y^{i-1})`, and node 1 decodes `M2` from `(M1,Y^n)` while node 2 decodes `M1` from `(M2,Y^n)`. The channel is memoryless. For causal input laws define

`p(x_j^k || y^{k-1}) := product_{i=1}^k p(x_{ji}|x_j^{i-1},y^{i-1})`,

and

`I(X_j^k -> Y^k || X_l^k) := sum_{i=1}^k I(X_j^i;Y_i|Y^{i-1},X_l^i)`.

For each `k>=1`, let `C_k` consist of the nonnegative rate pairs satisfying

`R1 <= k^{-1} I(X1^k -> Y^k || X2^k)`,

`R2 <= k^{-1} I(X2^k -> Y^k || X1^k)`

for some product causal law `p(x1^k||y^{k-1})p(x2^k||y^{k-1})`, with the outputs generated by `W^k`. Then the operational capacity region is

`C = closure(union_{k>=1} C_k)`.

The closure matches the operational definition of capacity. The v3 lecture writes the union without a closure but gives no proof that this union is closed; the arguments below establish the closure equality.

For the converse, Fano gives `nR1 <= I(M1;Y^n|M2)+n epsilon_n` and symmetrically for `R2`, with `epsilon_n->0`. Fix `i`. Given a history `y^{i-1}` and the second user's input history/current action `x_2^i`, the posterior on message pairs factors: the likelihood of `y^{i-1}` is a product of channel terms whose dependence on `M2` is only through `x_2^{i-1}`, and the additional condition `x_2^i=f_2^i(M2,y^{i-1})` restricts only `M2`. Since the prior messages are independent, `M1` and `M2` are conditionally independent under this conditioning. The current channel output depends on `M1` only through `X_{1i}` and on `M2` only through the already conditioned `X_{2i}`. Therefore

`I(M1;Y_i|Y^{i-1},M2) = I(X_{1i};Y_i|Y^{i-1},X_2^i) = I(X_1^i;Y_i|Y^{i-1},X_2^i)`.

The last equality holds because, by memorylessness, past input coordinates add no information about `Y_i` after current inputs and the output history are fixed. Summing gives

`nR1 <= I(X1^n -> Y^n || X2^n) + n epsilon_n`,

and the symmetric inequality.

The code induces a product causal law, not an ordinary posterior product given the realized output. To see it, fix an output history path `y^{n-1}`. Averaging the deterministic encoder actions over each user's independent message gives separate causal policy kernels `p(x_{ji}|x_j^{i-1},y^{i-1})`; for a fixed output path the two message-indexed action paths are independent. The actual path probability is this product, multiplied by `product_i W(y_i|x_{1i},x_{2i})`. This is precisely the causal-product law in the theorem. Consequently Fano gives `(R1-epsilon_n)^+ <= n^{-1}I(X1^n->Y^n||X2^n)` and the symmetric bound for the same induced law, with `epsilon_n->0`. Thus points approaching every achievable pair lie in `union_n C_n`; taking the achievable-rate closure proves the outer containment.

For achievability, any finite causal kernel `p(x_j^k||y^{k-1})` can be represented by a finite random deterministic causal strategy `S_j`: before transmission, independently sample an action for every possible history `(x_j^{i-1},y^{i-1})` according to its specified kernel. The strategy table is then a deterministic function of the current history. Independent `S_1,S_2` induce exactly the desired causal-product law. Regard each length-`k` pair of strategies as one input symbol of a finite memoryless superchannel whose output is `Y^k`. Across superchannel uses choose independent random codewords of strategies for each user's message. Each receiver knows its own strategy codeword and decodes the other by joint typicality. The wrong codeword is independent of its known own codeword and the actual output; ordinary finite packing gives the two rates

`R1 < k^{-1}I(S1;Y^k|S2)`, `R2 < k^{-1}I(S2;Y^k|S1)`.

For the induced causal-product law,

`I(S1;Y^k|S2)=sum_i I(S1;Y_i|Y^{i-1},S2)=sum_i I(X_1^i;Y_i|Y^{i-1},X_2^i)`.

The equality follows by the same posterior factorization: given `(Y^{i-1},X_2^i)`, the independent strategy tables remain conditionally independent, and the channel at time `i` depends only on the current actions. The right side is the defined directed information. The symmetric identity is identical. Thus every strict pair in `C_k` is achievable; closure includes its boundary and the union. This establishes the multiletter characterization. It does not assert a single-letter formula or that the `k=1` Shannon inner bound is exact.

## Exact capacity under strong interference

Let a finite DM-IC have joint memoryless kernel `W(y1,y2|x1,x2)`, independent uniform messages, separate deterministic no-feedback encoders, and receiver `j` required to recover `M_j`. Its strong-interference hypotheses are, for **every** product input law `p(x1)p(x2)`,

`I(X1;Y1|X2) <= I(X1;Y2|X2)`,

`I(X2;Y2|X1) <= I(X2;Y1|X1)`.

Under these hypotheses the average-error capacity region is the union over finite `p(q)p(x1|q)p(x2|q)` of

`R1 <= I(X1;Y1|X2,Q)`,

`R2 <= I(X2;Y2|X1,Q)`,

`R1+R2 <= min{I(X1,X2;Y1|Q), I(X1,X2;Y2|Q)}`,

and it suffices to take `|Q|<=4`. No claim is made for maximal error or for channels not satisfying both product-input hypotheses.

For achievability, generate independent user codebooks with a public deterministic time-sharing sequence for `Q`. At each receiver jointly decode the two messages by the finite MAC typicality decoder. The receiver-1 error classes (wrong user 1 only, wrong user 2 only, both wrong) have packing exponents `I(X1;Y1|X2,Q)`, `I(X2;Y1|X1,Q)`, and `I(X1,X2;Y1|Q)`. The receiver-2 exponents are the corresponding quantities with `Y2`. The first strong-interference inequality makes the stated `R1` bound sufficient for both receivers' user-1 constraints; the second makes the stated `R2` bound sufficient for both user-2 constraints. The two explicit sum constraints control the both-wrong events at both receivers. The union bound on the two receiver errors proves reliable decoding of both messages, hence in particular each receiver's intended message. Strict rates and closure give the displayed region.

For the converse, Fano and the separate independent encoders first give

`nR1 <= I(X1^n;Y1^n)+n epsilon_n <= I(X1^n;Y1^n|X2^n)+n epsilon_n`,

and symmetrically for `R2`. The second inequality follows from independence: `I(X1^n;Y1^n|X2^n)-I(X1^n;Y1^n)=I(X1^n;X2^n|Y1^n)>=0`. Memorylessness and entropy subadditivity then give

`I(X1^n;Y1^n|X2^n) <= sum_i I(X1_i;Y1_i|X2_i)`,

with the symmetric bound for sender 2.

The sum converse uses the tensorized strong-interference inequality

`I(X1^n;Y1^n|X2^n) <= I(X1^n;Y2^n|X2^n)`

for every independent block-input law `p(x1^n)p(x2^n)`. Here is a full proof. The single-letter hypothesis with `p(x2)` concentrated at any fixed `x2` implies, for every auxiliary `A` and every `p(a)p(x1|a)`,

`I(X1;Y1|X2=x2,A) <= I(X1;Y2|X2=x2,A)`,

by applying the original hypothesis separately at each `a` and averaging. For arbitrary independent vectors, define the hybrid conditioning variable

`A_i=(X2^n,Y2^{i-1},Y1_{i+1}^n)`.

Telescoping `H(Y2^n|X2^n)-H(Y1^n|X2^n)` by replacing one output coordinate at a time, and using memorylessness for the entropies conditioned on `(X1^n,X2^n)`, gives

`I(X1^n;Y2^n|X2^n)-I(X1^n;Y1^n|X2^n)`

`= sum_i [I(X1_i;Y2_i|A_i)-I(X1_i;Y1_i|A_i)]`.

Given `A_i`, `X2_i` is fixed; outputs at time `i` are conditionally independent of all other-time variables given `(X1_i,X2_i)`. Each summand is nonnegative by the conditional single-letter inequality. This proves tensorization without assuming the stronger less-noisy order. The other-user tensorization follows symmetrically.

Now Fano, tensorization and the deterministic encoders imply

`n(R1+R2) <= I(M1;Y1^n)+I(M2;Y2^n)+n epsilon_n`

`<= I(M1;Y2^n|M2)+I(M2;Y2^n)+n epsilon_n`

`= I(M1,M2;Y2^n)+n epsilon_n`

`<= sum_i I(X1_i,X2_i;Y2_i)+n epsilon_n`.

The first inequality on the second line is the tensorized strong condition and the Markov identity `I(M1;Y2^n|M2)=I(X1^n;Y2^n|X2^n)`. By symmetry the same sum rate is bounded using `Y1^n`. With `Q` uniform over `[1:n]`, independent of the messages, `(X1_Q,X2_Q)` has product law conditional on `Q`, and the three inequalities become exactly the stated single-letter bounds. Let `n` grow and take closure.

For `|Q|<=4`, each product input law contributes the vector

`(I(X1;Y1|X2), I(X2;Y2|X1), I(X1,X2;Y1), I(X1,X2;Y2)) in R^4`.

Its image is path-connected because the product of the two input simplexes is path-connected and all four coordinates vary continuously. The finite support fact reduces any time-sharing average vector to at most four image points while preserving all four region bounds.

## Exact local repairs and handoff boundaries

- The Cover–Leung v3 section supplies the statement and model only. The two-block-indexed cloud/satellite construction and its sender-feedback and backward destination packing events are supplied locally above.
- The CES v3 section gives the theorem and a short outline after the full simpler proof. The two one-source-wrong and two both-wrong common-part error classes, including the separate same/different-`U0` exponents, are supplied above.
- The DF proof is source-aligned with v3's block-Markov/backward-decoding argument; it explicitly states which message is known at each destination step and the two independent packing exponents.
- The CF proof converts v3's deterministic bins to independent random bin assignments so that the collision probability is exactly `2^{-nR_b}`. It repairs the printed `+delta` packing sign and fills its “check!” two-index counting step by the product-proposal divergence.
- The TWC proof states the causal-product law as a strategy law and proves the posterior factorization used in both directions. The capacity statement is closed as required by the operational definition.
- The strong-interference tensorization lemma is proved by hybrid outputs, not by the lecture's unstated induction. The source's simultaneous-decoding achievability pointer is expanded into its three error events at each receiver.

The current supplier boundary, as checked in r5's supplier map, is:

- `items/def-finite-probability-space-and-event.md` and `items/def-independent-random-elements.md` / `items/def-independence-of-finite-random-variables.md` are published and supply finite probability and independence definitions. `items/def-identically-distributed-and-iid-random-variables.md` and `items/cor-iid-finite-variance-weak-law.md` are published and supply the i.i.d. and bounded-indicator weak-law interfaces used for typicality.
- `items/def-qa-35-finite-probability-entropy-and-stochastic-matrices.md` is published and defines finite entropy and stochastic matrices using natural logarithms; the scaffold must explicitly convert to bits. `items/def-mutual-information-for-finite-hypothesis-testing.md` is published but is narrower than general dependent finite-variable or conditional mutual information. `items/thm-fano-packing.md` is published but does not directly supply ordinary message-decoding Fano or Shannon random-coding packing.
- None of these suppliers defines the DM-MAC/relay/TWC/DM-IC operational models, conditional-MI chain rules and Markov identities, strong typicality, covering, joint packing, random binning, causal strategies, directed information, or any of the network theorems proved here. Those definitions and proof interfaces remain local scaffold work; this file itself is a research proof note, not a production supplier.

These notes do not certify that the scaffolder's proposed items or contracts are complete. No current library item was edited.


## 3. Relay channel with output feedback: exact topology and cut-set capacity

### 3.1 Operational model

The discrete memoryless relay channel has finite alphabets, one source message M uniform on `[1:2^{nR}]`, source input X_i, relay input X_{1i}, destination output Y_i, and relay output Y_{1i}, with kernel `W(y_i,y_{1i}|x_i,x_{1i})` memoryless across i. The source and relay encoders in the full-feedback topology are

`X_i=f_i(M,Y^{i-1},Y_1^{i-1})`, `X_{1i}=f_{1i}(Y^{i-1},Y_1^{i-1})`.

The destination decodes M from Y^n; error is average over M and the channel. The destination output Y^{i-1} and relay output Y_1^{i-1} are noiselessly fed back causally to both transmitting terminals; the relay also observes its own Y_1^{i-1} in the ordinary relay model. The channel has no cost constraint. The exact capacity is

`C_FB=sup_{p(x,x_1)} min{I(X,X_1;Y), I(X;Y,Y_1|X_1)}`.

This feedback formula does not characterize the no-feedback relay channel.

### 3.2 Cut-set converse

Fano and the chain rule give

`nR<=I(M;Y^n)+n epsilon_n=sum_i I(M;Y_i|Y^{i-1})+n epsilon_n`.

Given `(M,Y^{i-1},Y_1^{i-1})`, both current channel inputs are fixed. Memorylessness gives `H(Y_i|M,Y^{i-1},Y_1^{i-1})=H(Y_i|X_i,X_{1i})`; therefore `H(Y_i|M,Y^{i-1})>=H(Y_i|X_i,X_{1i})`, while `H(Y_i|Y^{i-1})<=H(Y_i)`. Hence

`I(M;Y_i|Y^{i-1})<=H(Y_i)-H(Y_i|X_i,X_{1i})=I(X_i,X_{1i};Y_i)`.

Give the destination output sequence to a genie. This can only lower the conditional message entropy, so Fano also yields `nR<=I(M;Y^n,Y_1^n)+n epsilon_n`. With `O_i=(Y_i,Y_{1i})` and `O^{i-1}=(Y^{i-1},Y_1^{i-1})`,

`I(M;O_i|O^{i-1})=H(O_i|O^{i-1})-H(O_i|M,O^{i-1})`.

Here X_{1i} is a deterministic function of O^{i−1}, and memorylessness gives `H(O_i|M,O^{i-1})=H(O_i|X_i,X_{1i})`. Therefore

`I(M;O_i|O^{i-1})<=H(O_i|X_{1i})-H(O_i|X_i,X_{1i})=I(X_i;Y_i,Y_{1i}|X_{1i})`.

Introduce independent uniform Q on `[1:n]` and the time-shared variables `(X,X_1,Y,Y_1)=(X_Q,X_{1Q},Y_Q,Y_{1Q})`. The two bounds become `R<=I(X,X_1;Y|Q)` and `R<=I(X;Y,Y_1|X_1,Q)`. The two mutual informations are concave in the joint law p(x,x_1): the first by concavity of mutual information in its input law; the second because `H(Y,Y_1|X_1)` is concave in p(x,x_1) while `H(Y,Y_1|X,X_1)` is linear. Averaging the Q-conditioned laws therefore produces one law p(x,x_1) for which both mutual informations are at least the time-shared bounds. Let n tend to infinity to obtain the claimed single-letter outer bound.

### 3.3 Achievability through a degraded enhanced relay observation

Only the feedback link from destination Y to the relay is needed: the relay’s observation at the end of each block is then `(Y^n,Y_1^n)`. The source can ignore feedback. View this as a relay channel whose relay output is `Y_R=(Y,Y_1)` and whose destination output is Y. It is physically degraded because Y is a coordinate projection of Y_R. For any joint input law p(x,x_1), the standard block-Markov decode-forward construction achieves

`R<min{I(X;Y_R|X_1),I(X,X_1;Y)}=min{I(X;Y,Y_1|X_1),I(X,X_1;Y)}`.

To state the actual code interface, split the source's message into B−1 independent indices and let both source terminals know the full block-index schedule; the source needs no feedback. Draw relay codewords `x_1^n(m_{j-1})` iid p(x_1), and, for each relay index, draw source satellites `x^n(m_j|m_{j-1})` conditionally iid p(x|x_1). In block j the source sends the satellite for the new message m_j and old index m_{j-1}; the relay sends its codeword for the old message it decoded in block j−1. At the end of block j the relay observes both `Y^n(j)` through the feedback link and `Y_1^n(j)` locally, and decodes m_j by joint typicality conditioned on the known m_{j-1}; the wrong-satellite packing exponent is `I(X;Y,Y_1|X_1)`. The destination decodes backwards: with m_j already recovered from the later block, it uniquely decodes m_{j-1} from `Y^n(j)` using the pair `(x^n(m_j|m_{j-1}),x_1^n(m_{j-1}))`; the packing exponent is `I(X,X_1;Y)`. The true tuples are typical by the memoryless law and the finite-alphabet weak law. A union bound over the fixed B blocks makes error vanish under both strict inequalities; the rate factor `(B-1)/B` tends to one. Taking the supremum over p(x,x_1) matches the converse.

The full topology in §3.1 also feeds Y_1 back to the source and may feed both outputs to both senders. Those links are unnecessary for this code: the relay’s own Y_1 observation is local, it alone needs the destination-output feedback Y^past, and the source uses only its message and the public block schedule. Thus the theorem’s exact feedback benefit is tied to the destination-to-relay noiseless causal link, not a claim about no-feedback capacity.

Source locator: El Gamal–Kim, arXiv:1001.3404v3, Interactive Communication, “Relay Channel with Feedback,” Lecture 18, Theorem 5 and preceding topology diagram, lecture pages 18–43 through 18–44. The same source states the degraded-relay decode-forward formula used here in Lecture 17; the proof details are supplied by the local r2 relay-DF development and the explicit enhanced-output reduction above.


The ordinary no-feedback relay cut-set outer bound follows from the same two Fano/cut calculations just displayed: every ordinary relay code is also permitted in the enhanced-feedback topology, so the outer containment applies to that subclass. This is an outer bound only; no no-feedback DF optimality follows.


## Finite-DMC concavity/convexity and capacity closure

For a finite input law P and channel W, I(P,W)=H(PW)-sum_x P_xH(W_x). Entropy concavity follows from H(sum_i lambda_i p_i)-sum_i lambda_iH(p_i)=sum_i lambda_i D(p_i||sum_j lambda_jp_j)>=0, with zero-weight/support cells omitted. Thus I is concave in P for fixed W. For fixed P, a mixture of W's mixes both joint law P_xW_yx and reference P_x(PW)_y linearly; coordinatewise finite log-sum proves joint KL convexity and hence channel convexity. Finite entropy continuity gives continuity in both parameters.

The finite DMC information supremum is an attained maximum by simplex compactness and is finite (I<=ln|Y|). The existing finite information-density threshold random code proves all R<I(P,W); its bounded finite-support surprisal weak law and exact finite codebook averaging give deterministic codes. The finite memoryless Fano/MI chain gives I(M;Y^n)<=sum_i I(X_i;Y_i)<=nC, also for stochastic encoders. Apply erasure-safe Fano to the finite estimate and then DPI; vanishing error yields the converse. Starting at any R'>R before expurgating individual errors above sqrt(average error) retains the exact target rate and gives maximal error tending to zero. This independently proves both finite-DMC capacity criteria, without borrowing the general-alphabet RN proof or assuming the maximum-error criterion equals average error for multiuser channels.


# Exact worked calculations and counterexamples

These are local mathematical developments for B-page proposals. Bits are used in binary/quantum formulas below, nats only where stated. Their logical suppliers remain the explicit A-page theorems; no B page supplies an A page.

## Information and testing

For P=delta_0,Q=(epsilon,1-epsilon), 0<epsilon<1, D(P||Q)=-ln epsilon but D(Q||P)=infinity. Disjoint point masses have both directions infinite. For the reference-kernel witness, use X=Y={0,1}, Q_Y=delta_0,P_Y=delta_1, P_X|Y=delta_0. Two versions Q_X|0=delta_0, Q_X|1=delta_0 or delta_1 agree Q_Y-a.e., while conditional reference KL under P is respectively zero or infinity.

A fair bit has self-information ln2; uniform[0,1] has infinite self-information but differential entropy zero. A nonsingular jointly standard Gaussian pair with correlation r has MI=-ln(1-r²)/2, by subtracting its finite Gaussian joint entropy from the marginal entropies. At |r|=1 its joint law lies on a product-null graph and MI is infinite.

For Bernoulli(3/4) versus Bernoulli(1/4), direct substitution gives D_(1/2)=ln(4/3), D_1=(ln3)/2, D_2=ln(7/3), D_0=0,D_infinity=ln3. For disjoint point masses the defining sum is zero for alpha<1 and infinite for alpha>1, so all positive-order divergences are infinite; omitting the infinite support contribution at alpha>1 would incorrectly produce a logarithm of an empty zero sum and a negative infinite divergence.

For P=(3/4,1/4),Q=(1/4,3/4), likelihood ratios are 3 and 1/3. Fill the first atom before the second: beta_alpha=alpha/3 on [0,3/4] and 3alpha-2 on [3/4,1]. This proves the stated piecewise-linear test curve and its tie randomization exactly.

## Secrecy and privacy

BEC(.25) followed by independent extra erasure probability1/3 gives Eve BEC(.5). I(X;Y)=.75h(p), I(X;Z)=.5h(p), so degraded secrecy capacity is .25 bits at p=.5. Weak/strong separation is explicit: M_n is n independent fair bits, Z reveals its first floor(sqrt n) bits. Leakage is floor(sqrt n), whose normalization by n vanishes while leakage diverges.

For fair Y, X=Y xor Bernoulli(.1) and lambda=.5, optimize J=I(Y;Z)-.5I(X;Z). Markov X-Y-Z gives I(Y;Z)-I(X;Z)=I(Y;Z|X)<=H(Y|X)=h(.1); also I(Y;Z)<=1. Hence J<=.5+.5h(.1), attained by Z=Y and Z=1-Y. Constant Z gives zero. This globally solves the binary-kernel optimization, rather than merely comparing candidate parameters.

## Finite quantum calculations

A qubit spectrum(p,1-p) has entropy h(p), hence pure zero and maximally mixed one bit. Orthogonal pure states have zero individual entropy and mixture spectrum p, so chi=H(p), attained by their basis measurement. For rho=|+><+|,sigma=I/2, QRE is ln2 nats; computational-basis dephasing sends both to I/2 and QRE zero. Orthogonal incompatible supports such as |0><0| versus |1><1| give QRE infinity.

For pure ABC, Schmidt spectra give S(AB)=S(C),S(BC)=S(A),S(ABC)=0 and S(B)=S(AC); SSA reduces exactly to subadditivity S(A)+S(C)>=S(AC). A qubit IID source diag(p,1-p) has Schumacher rate h(p) qubits/symbol. For equiprobable pure states with overlap c, their mixture has characteristic polynomial z²-z+(1-|c|²)/4, hence eigenvalues (1±|c|)/2 and chi=h((1+|c|)/2). A fixed X-basis measurement on equiprobable |0>,|1> gives independent fair outputs, MI0, despite chi1; a fixed POVM need not attain the bound.

Here is a literal counterexample to deducing QRE DPI from metric inequalities alone, without channel structure. Restrict to diagonal binary states p=sin²theta, theta in [a,pi/4], a=pi/12, and map p to sin²(theta-a). Root fidelity is cos(theta-phi), so it is preserved for every pair. Event-TV/halved trace distance is |p-q|; the map derivative in p is sin(2(theta-a))/sin(2theta)<=1, so this metric contracts too. The interior input p=sin²(2a)=1/4 and q=sin²a have finite KL, while their images are sin²a>0 and zero, giving infinite KL. The map is nonlinear on a restricted state family and is not asserted CPTP. This proves precisely that the two metric inequalities alone do not supply QRE DPI; the actual CPTP theorem still needs its operator proof.

For d=2 erasure, Q=max(0,1-2epsilon), unassisted C=1-epsilon, and EA C=2(1-epsilon) bits/use. At epsilon0 these are1,1,2; at epsilon1/2 they are0,.5,1; at epsilon1 all zero. This corrects the old doubled C/EA numbers.

For amplitude damping gamma in [0,1/2], Kraus matrices are diag(1,sqrt(1-gamma)) and sqrt(gamma)|0><1|. Its complement is amplitude damping parameter1-gamma up to basis identification. Damping by delta=(1-2gamma)/(1-gamma) after Bob's output gives complement, since gamma+delta-gamma delta=1-gamma. Thus it is degradable. For input diag(1-p,p), Ic=h((1-gamma)p)-h(gamma p). Phase covariance makes Ic invariant under rho->ZrhoZ; degradable concavity makes dephasing unable to reduce it. Therefore the capacity maximization reduces exactly to max_(0<=p<=1) of this continuous one-dimensional expression. No unproved maximizer p=1/2 is asserted.

QKD block-diagonal accept/abort flags make trace norm additive across branches, so weighted secrecy=(1-p_abort)delta. If Alice and Bob receive independent fair bits while Eve is independent, Alice secrecy is perfect but disagreement probability1/2. This explicitly separates correctness from secrecy.

## Point-to-point channels and finite criteria

For BSC(p), I(X;Y)=H(Y)-h(p)<=1-h(p), with equality at fair input; BEC(e) reveals its fair input with probability1-e and otherwise conveys zero, giving C=1-e. One real AWGN use at P3,noise variance1 has .5ln4 nats=1 bit. Parallel noise variances(1,4,9),total power4 give waterline T=4.5, allocations(3.5,.5,0), and C=.5ln(4.5*1.125) nats.

One use of a noiseless binary channel with M3 has optimal average error1/3 and optimal maximal error1/2 when randomized decoders are allowed. Sum of three successes is <=2, so average error>=1/3. If every message success were>.5, each would need an output whose decoder probability is>.5; three messages and two outputs force two probabilities>.5 in one decoder column, impossible. Assign two messages to output0, split its decoding probability equally, and assign the third to output1: maximal error1/2, average1/3. A deterministic decoder instead has maximal error1. At n1 feedback has no past and changes none of these facts.

A small-average-error code need not itself have small maximal error: on the fixed noiseless binary channel at blocklength n, assign 2^n+1 messages to all 2^n words with one collision and choose one colliding message as decoder winner. Average error=1/(2^n+1)->0 while one message error=1. The ensemble concentrated on this code has the same small expected average error. Expurgation is therefore a separate required step.

For one-use BSC(.1) and M2, the DT expectation is .9*(.5/1.8)+.1= .35 exactly. For n-use BSC(p),0<p<.5, uniform auxiliary output gives log likelihood (n-K)ln(2(1-p))+K ln(2p). Under the channel K~Bin(n,p), under the auxiliary K~Bin(n,.5). The optimal acceptance test accepts small K: alpha=Pr_p(K<k)+theta Pr_p(K=k), beta=Pr_(1/2)(K<k)+theta Pr_(1/2)(K=k),0<=theta<=1. This gives the exact randomized binomial meta-converse tail.

The nonattainment example concerns the single-letter information supremum under exact moment constraints: AWGN unit noise, P>0,s>3P², E X=0,E X²=P,E X⁴=s. Set T=s/3-P²>0. For small epsilon>0 use a mixture of centered Gaussians with variances v1=P-sqrt(T epsilon/(1-epsilon)),v2=P+sqrt(T(1-epsilon)/epsilon), weights1-epsilon,epsilon. These are positive for small epsilon and have exactly the requested moments. Output entropy concavity and the Gaussian upper bound squeeze their MI to .5ln(1+P). If equality were attained, output Gaussian maximal-entropy equality and characteristic-function uniqueness force the input to be N(0,P), contradicting its fourth moment. This proves nonattainment of this information optimization; no extra operational fourth-moment coding theorem is inferred.

## Separation, distributed coding and network examples

Fair Bernoulli source, BSC(.1),rho2 have source entropy1 and channel C=1-h(.1). Since h(.1)<.49 (certifiable by the same rational log series as the DSBS calculation), C>.51. Thus source rate1.01 and channel rate.51 satisfy1<1.01<2*.51 and .51<C. For fair Hamming source,rho1 and BSC(p), equation R(D)=C gives h(D)=h(p), hence D=p on [0,.5].

An explicit finite/asymptotic scope witness is source Bernoulli(.1), BSC(.1),rho1: h(.1)<1-h(.1), so asymptotic vanishing block error is achievable. In one use, all channel transitions and both source probabilities are positive; MAP comparison gives minimal error .1, including its tie at output1. Thus the asymptotic theorem does not assert a zero-error one-use code. This is a scope counterexample, not an assertion that unrestricted finite-block encoder factorizations cannot implement a joint map.

Two-source corner rates follow from chain H12=H1+H2|1=H2+H1|2. For fair X1,X2=X1 xor Bernoulli(p), the exact constraints are Rj>=h(p), R1+R2>=1+h(p), correcting the old sum1. Independent bins are essential to the collision proof: X1=X2 a fair n-bit word, both encoders output the same first ceil(.6n) bits. Their rates satisfy all strict Slepian–Wolf inequalities, but identical binning leaves n-ceil(.6n) unknown fair bits, success probability2^[-n+ceil(.6n)]->0.

For the BT binary example, U1 xor U2 is the parity of three independent Bernoulli(.1) noises and has crossover [1-(.8)^3]/2=.244. Conditional test-channel entropy H(Uj|Xj)=h(.1), H(Uj|Uother)=h(.244), H(U1,U2)=1+h(.244), giving the displayed individual and sum bounds; Xhat_j=Uj has MSE/Hamming error.1.

For the binary adder MAC, deterministic public equal time-sharing between only-user1 fair and only-user2 fair gives(.5,.5). A binary physically degraded BC can use U fair,X=U xor Bernoulli(.1),Y1=X xor Bernoulli(.1),Y2=Y1 xor Bernoulli(.1), all noises independent. The valid superposition pair is R1=h(.18)-h(.1),R2=1-h(.244). Arbitrarily correlated simultaneous private-message inputs are invalid: X1=X2 a fair bit has joint masses(00),(11) each.5, whereas independent private-message deterministic no-feedback encoders force product marginals at each fixed time.

For equal feedback-MAC SNR1 each, rho=.3 permits the symmetric point R1=R2=(1/4)log2(18/5). Its sum saturates .5log2(3.6), and its individual constraint holds since(1.91)^2>3.6. Without feedback sum<=.5log2(3), so this point exhibits strict feedback gain.

An exact correlated-source separation failure uses P(U1,U2) uniform on {(0,0),(0,1),(1,1)} and noiseless Y=X1+X2. Uncoded Xj=Uj makes Y0,1,2 identify the source pair, so lossless transmission succeeds with zero error. Source joint entropy is log2 3. For independent binary inputs Bernoulli(p),Bernoulli(q), H(X1+X2)<=1.5 bits: boundaries give<=1; at an interior entropy maximizer derivative difference is (p-q)ln(P0P2/P1²), nonzero unless p=q because P1>=2sqrt(P0P2). On p=q=t, the common derivative is ln((1-t)/t)-(1-2t)ln2, positive for t<.5 and negative for t>.5 (use ln((1+u)/(1-u))>=2u>u ln2). The unique maximum is p=q=.5, distribution(.25,.5,.25), entropy1.5. Since log2 3>1.5 (9>8), Slepian–Wolf sum rates and independent-input MAC sum rates cannot intersect, despite the zero-error joint code.

Relay example Y_r=X_s xor Bernoulli(.1),Y_d=X_s with no X_r effect has DF maximum1-h(.1) and cut-set maximum1, by binary entropy bounds and uniform X_s independent of X_r. The actual direct channel also has capacity1; the statement is specifically a DF-versus-cutset gap. The deterministic strong-IC example Y1=Y2=(X1,X2) has all strong inequalities equal and exact rectangle Rj<=1. Conversely, noiseless noninterfering Y1=X1,Y2=X2 violates strong hypotheses at uniform input and has actual rectangle[0,1]^2, whereas requiring both receivers to decode both messages would give only origin. Thus the strong-interference MAC-intersection formula cannot be extended unrestrictedly.

For a four-node Gaussian cut, the old cut-RHS bound g_s=s/2+min(s,4-s)log2(2s)/2 gives g1=1,g2=3,g3=1.5+.5log2 6<3. These are cut right-side comparisons, not a simultaneous rate-vector deficit claim.


# Independently checked canonical integration: wtv-gaussian-two-encoder-proof-notes.md

The local proof below is transcribed from the stable r4 proof development and independently checked. Source-reading assertions within its source audit describe that researcher's reading, not an additional whole-text reading claim by the independent auditor.

# Local proof: exact quadratic-Gaussian two-encoder region

This note fills the Gaussian CEO converse step that Wagner–Tavildar–Viswanath (WTV) cite to the CEO literature without proving. It also records a Gaussian test-channel achievability argument and the scalar-face and sum-rate algebra needed for the exact region. The CEO distortion inequality below is proved locally from message likelihoods, a Gaussian entropy bound, and the Bayesian Cramér–Rao inequality; it is not imported as an unproved CEO theorem.

All rates and logarithms are in bits. Write \(\log^+_2 x=\max(0,\log_2 x)\).

## Theorem and exact scope

Let \((Y_1(t),Y_2(t))_{t\ge1}\) be iid zero-mean jointly Gaussian with
\[
K=\begin{pmatrix}1&\rho\\ \rho&1\end{pmatrix},\qquad 0<\rho<1,\qquad q=1-\rho^2.
\]
Encoder \(j\) observes \(Y_j^n\), sends one of \(M_j\) finite messages to a common decoder, and the decoder produces \(\widehat Y_1^n,\widehat Y_2^n\). The constraints are expected per-coordinate squared errors
\[
\frac1n\sum_{t=1}^n\mathbb E(Y_j(t)-\widehat Y_j(t))^2\le d_j,\qquad d_j>0.
\]
Rates are \((1/n)\log_2 M_j\); the operational rate region is the closure of such finite-block rate-distortion tuples. Define
\[
\beta(d_1,d_2)=1+\sqrt{1+\frac{4\rho^2d_1d_2}{q^2}}.
\]
For \(d_1,d_2>0\), the exact region is
\[
\begin{aligned}
R_1&\ge \frac12\log_2^+\!\left(\frac{q+\rho^2 2^{-2R_2}}{d_1}\right),\\
R_2&\ge \frac12\log_2^+\!\left(\frac{q+\rho^2 2^{-2R_1}}{d_2}\right),\\
R_1+R_2&\ge \frac12\log_2^+\!\left(\frac{q\,\beta(d_1,d_2)}{2d_1d_2}\right).
\end{aligned}
\tag{1}
\]
The theorem is for \(0<\rho<1\), positive distortion targets, separate encoders, one joint decoder, and expected MSE. Scaling handles unequal positive source variances; changing the sign of one source handles negative correlation. The degenerate cases \(\rho=0,1\), zero distortion, excess-distortion criteria, and arbitrary Gaussian vector sources are not claimed here.

## Gaussian test channels and their coding region

For \(\lambda_1,\lambda_2\ge0\), let
\[
U_j=Y_j+Q_j,\qquad Q_j\sim N(0,\lambda_j^{-1}),
\]
with independent \(Q_1,Q_2,Y_1,Y_2\); \(\lambda_j=0\) means \(U_j\) is constant. Set
\[
t(\lambda_1,\lambda_2)=1+\lambda_1+\lambda_2+q\lambda_1\lambda_2,\qquad
D(\lambda)=\left(K^{-1}+\operatorname{diag}(\lambda_1,\lambda_2)\right)^{-1}.
\]
Direct inversion and Gaussian entropy calculations give
\[
D_{11}=\frac{1+q\lambda_2}{t},\quad
D_{22}=\frac{1+q\lambda_1}{t},\quad
D_{12}=\frac{\rho}{t},
\tag{2}
\]
and
\[
\begin{aligned}
r_1(\lambda)&=I(Y_1;U_1\mid U_2)=\tfrac12\log_2\frac{t}{1+\lambda_2},\\
r_2(\lambda)&=I(Y_2;U_2\mid U_1)=\tfrac12\log_2\frac{t}{1+\lambda_1},\\
s(\lambda)&=I(Y_1,Y_2;U_1,U_2)=\tfrac12\log_2 t.
\end{aligned}
\tag{3}
\]
Thus this test channel achieves every rate pair in the contra-polymatroid
\[
R_1\ge r_1(\lambda),\qquad R_2\ge r_2(\lambda),\qquad R_1+R_2\ge s(\lambda),
\tag{4}
\]
with distortions \(D_{11},D_{22}\).

Here is a reduction that justifies using (4) for continuous Gaussian sources rather than assuming a finite-alphabet Berger–Tung theorem applies to them. Fix a Gaussian test channel and strict rate slack. Choose nested increasing finite clipped grids whose sigma-fields generate the Borel sigma-field and whose quantizers satisfy \(X_j^{(m)}=Q_m(Y_j)\to Y_j\) in \(L^2\). Fix nested finite output partitions \(V_j^{(\ell)}=Q_\ell(U_j)\) generating the output Borel sigma-field, and define a finite kernel by averaging the Gaussian transition:
\[
P_m(v\mid x)=\mathbb E[P(Q_\ell(U_j)=v\mid Y_j)\mid Q_m(Y_j)=x].
\]
Use independent randomization for the two finite kernels. For fixed \(\ell\), \(P_m(v\mid X_j^{(m)})=\mathbb E[P(V_j^{(\ell)}=v\mid Y_j)\mid X_j^{(m)}]\) converges in \(L^1\) to \(P(V_j^{(\ell)}=v\mid Y_j)\) by conditional-expectation martingale convergence. Since the output alphabets are finite, the joint output probabilities and their entropies converge. Product factorization gives
\[
I(X_1^{(m)};V_1^{(\ell)}\mid V_2^{(\ell)})
=H(V_1^{(\ell)}\mid V_2^{(\ell)})-H(V_1^{(\ell)}\mid X_1^{(m)}),
\]
with the symmetric formula for encoder 2 and
\[
I(X_1^{(m)},X_2^{(m)};V_1^{(\ell)},V_2^{(\ell)})
=H(V_1^{(\ell)},V_2^{(\ell)})-\sum_j H(V_j^{(\ell)}\mid X_j^{(m)}).
\]
Thus the finite Berger–Tung quantities converge to those of \((Y_1,Y_2,V_1^{(\ell)},V_2^{(\ell)})\). Refining nested output partitions gives the Gaussian mutual informations in (3), by convergence of relative entropy along generating finite partitions; these Gaussian mutual informations are finite. The finite decoder can use the finite-valued reconstruction \(g_j(V_1^{(\ell)},V_2^{(\ell)})=\mathbb E[Y_j\mid V_1^{(\ell)},V_2^{(\ell)}]\); these conditional means converge in \(L^2\) to \(\mathbb E[Y_j\mid U_1,U_2]\). For each fixed grid and output partition, the resulting source and reproduction alphabets are finite and the squared-error distortion is bounded, so the finite-alphabet coding argument in [the local Berger–Tung proof note](lossy-multiterminal-proof-developments.md) applies.

For fixed output partitions, the actual finite-source test channel has conditional output kernel
\[
k_m(v\mid y_1,y_2)=\prod_{i=1}^2\mathbb E[P(V_i=v_i\mid Y_i)\mid X_i^{(m)}],
\qquad
k(v\mid y_1,y_2)=\prod_{i=1}^2P(V_i=v_i\mid Y_i),
\]
for each output pair \(v=(v_1,v_2)\). The factors are in \([0,1]\), so the per-coordinate \(L^1\) convergence already proved and \(|ab-cd|\le|a-c|+|b-d|\) imply \(\mathbb E|k_m(v\mid Y)-k(v\mid Y)|\to0\). Since the output alphabet is finite, all output probabilities converge. The fixed reconstruction \(g_j(v)\) is bounded over that finite alphabet. For its source cross moment, for every \(L>0\),
\[
\left|\mathbb E\!\left[Y_j(k_m(v\mid Y)-k(v\mid Y))\right]\right|
\le L\,\mathbb E|k_m(v\mid Y)-k(v\mid Y)|
+\mathbb E[|Y_j|\mathbf1_{\{|Y_j|>L\}}],
\]
which tends to zero by first taking \(m\to\infty\), then \(L\to\infty\). The remaining quantization part of the cross moment obeys
\[
\left|\mathbb E[(X_j^{(m)}-Y_j)k_m(v\mid Y)]\right|
\le\mathbb E|X_j^{(m)}-Y_j|\to0.
\]
Also \(\mathbb E[(X_j^{(m)})^2]\to\mathbb E[Y_j^2]\) by \(L^2\) quantizer convergence. Summing over the finite output alphabet shows
\(\mathbb E[(X_j^{(m)}-g_j(V_1,V_2))^2]\to\mathbb E[(Y_j-g_j(V_1,V_2))^2]\); this explicitly controls the source/reconstruction cross term with unbounded Gaussian \(Y_j\).

To pass from the quantized source criterion to actual \(Y_j\), use
\[
(Y_j-\widehat Y_j)^2\le(1+\epsilon)(X_j^{(m)}-\widehat Y_j)^2+
(1+\epsilon^{-1})(Y_j-X_j^{(m)})^2.
\]
The second term tends to zero in expectation as the clipped grid is refined. Choosing the grid/output partitions after the rate slack, then taking a diagonal sequence, proves Gaussian test-channel achievability under expected MSE. This uses finite Berger–Tung coding only after a finite-source approximation and explicitly controls the unbounded Gaussian tails.

## Scalar face converses and matching Gaussian points

The analytic input for the faces is the entropy-power inequality with an independent Gaussian summand. For an \(n\)-vector \(A\), write
\[
N(A)=\frac{1}{2\pi e}\,2^{2h(A)/n}.
\]
Here \(h\) is differential entropy in bits. We prove the needed inequality for every posterior of a standard Gaussian vector given a positive-probability finite-message cell. Such a posterior has density \(f(x)=\phi_n(x)\mathbf1_C(x)/p\), where \(p=P\{G_0\in C\}>0\) and \(G_0\sim N(0,I_n)\); in particular it has finite second moment and finite differential entropy. The scaling identity \(N(cA)=c^2N(A)\) then gives the result for isotropic nonsingular Gaussian priors as well.

**Gaussian-summand entropy-power inequality.** Let \(J(f)=\int f\|\nabla\ln f\|^2\) be total Fisher information, using natural logarithms in the score. First suppose \(A\) has a smooth positive density and finite Fisher information. For independent smooth vectors \(B,C\) with finite Fisher information, differentiating the convolution shows
\[
\nabla\ln f_{B+C}(b+c)=\mathbb E[\nabla\ln f_B(B)\mid B+C=b+c]
=\mathbb E[\nabla\ln f_C(C)\mid B+C=b+c].
\]
Thus for any real \(\alpha\), the sum score is the conditional expectation of \(\alpha\nabla\ln f_B(B)+(1-\alpha)\nabla\ln f_C(C)\). Conditional Jensen, independence, and the zero mean of each score give
\[
J(B+C)\le\alpha^2J(B)+(1-\alpha)^2J(C).
\]
Minimizing over \(\alpha\) proves Stam’s reciprocal-Fisher inequality \(J(B+C)^{-1}\ge J(B)^{-1}+J(C)^{-1}\). Since \(J(N(0,tI_n))=n/t\), it follows that
\[
J(A+\sqrt tZ)\le\frac{nJ(A)}{n+tJ(A)},\qquad Z\sim N(0,I_n).
\tag{5a}
\]

For \(A_t=A+\sqrt tZ\), the heat equation is \(\partial_t f_t=\frac12\Delta f_t\). Differentiating entropy in bits and integrating by parts gives de Bruijn’s identity
\[
\frac{d}{dt}h(A_t)=\frac{J(A_t)}{2\ln 2}.
\tag{5b}
\]
For the posteriors under consideration these operations are justified for every \(t>0\): \(f\le p^{-1}\phi_n\), and a bounded positive-measure subset of \(C\) gives a lower bound \(f_t(x)\ge c_t\exp[-C_t(1+\|x\|^2)]\). Convolving the Gaussian upper envelope bounds \(f_t\) and its first two derivatives by a polynomial times a Gaussian. Hence \(|\ln f_t|\) grows at most quadratically, the score is square-integrable (indeed \(J(A_t)\le n/t\) by the conditional-score identity and Jensen), and cutoff integration by parts has vanishing boundary terms. Differentiation under the entropy integral follows from the same bounds, locally uniformly on compact positive \(t\)-intervals.

Apply the reciprocal-Fisher bound and integrate (5b). For a smooth input with finite \(J(A)\),
\[
h(A+\sqrt TZ)-h(A)\le\frac n2\log_2\!\left(1+\frac{TJ(A)}n\right).
\]
As \(T\to\infty\), \(h(A+\sqrt TZ)=\frac n2\log_2(2\pi eT)+o(1)\). The lower bound follows from \(h(A+\sqrt TZ)\ge h(\sqrt TZ)\), since their difference is a nonnegative mutual information; the upper bound is the Gaussian maximum-entropy bound with covariance \(TI_n+\operatorname{Cov}(A)\), using \(\det(TI_n+\operatorname{Cov}(A))\le(T+\operatorname{tr}\operatorname{Cov}(A)/n)^n\). Exponentiating the integrated bound gives \(2^{2h(A+\sqrt TZ)/n}\le2^{2h(A)/n}(1+TJ(A)/n)\). Divide by \(2\pi eT\) and let \(T\to\infty\) to obtain the entropy-Fisher inequality \(N(A)J(A)\ge n\).

For an arbitrary cell posterior, smooth first: \(A_\epsilon=A+\sqrt\epsilon Z\) has finite Fisher information by the conditional-score identity and Jensen. The entropy-Fisher inequality applies to every \(A_t\), \(t>0\), so (5b) gives
\[
\frac{d}{dt}N(A_t)=\frac{N(A_t)J(A_t)}n\ge1.
\]
Consequently \(N(A_{\epsilon+v})\ge N(A_\epsilon)+v\). To pass to \(\epsilon\downarrow0\), let \(\gamma=N(0,I_n)\). The posterior has \(D(f\|\gamma)=\ln(1/p)<\infty\). For the Gaussian convolution channel, the output likelihood ratio relative to \(\gamma_{1+\epsilon}\) is \(\mathbb E_\gamma[f(A)/\gamma(A)\mid A+\sqrt\epsilon Z]\); conditional Jensen for \(u\mapsto u\ln u\) therefore gives \(D(f_\epsilon\|\gamma_{1+\epsilon})\le D(f\|\gamma)\). Also
\[
D(f_\epsilon\|\gamma)=D(f_\epsilon\|\gamma_{1+\epsilon})-\frac n2\ln(1+\epsilon)+\frac{\epsilon\,\mathbb E\|A_\epsilon\|^2}{2(1+\epsilon)}.
\]
The last two terms tend to zero. For this cell posterior, the needed lower semicontinuity follows from
\[
D(P\|\gamma)=\sup_{\psi\in C_b(\mathbb R^n)}
\left\{\mathbb E_P\psi-\ln\mathbb E_\gamma e^\psi\right\}.
\]
Gibbs’ inequality proves that every expression in braces is at most \(D(P\|\gamma)\). Conversely, for \(dP/d\gamma=\mathbf1_C/p\), the bounded measurable functions \(\psi_t=\ln(((dP/d\gamma)\vee e^{-t})\wedge e^t)\) make the expressions tend to \(\ln(1/p)\); regularity of finite Borel measures approximates each \(\psi_t\) by bounded continuous functions in \(L^1(P+\gamma)\), preserving both terms. Each expression is continuous in \(P\) under weak convergence, so their supremum is lower semicontinuous. Thus weak convergence \(f_\epsilon\Rightarrow f\) and the preceding upper bound imply \(D(f_\epsilon\|\gamma)\to D(f\|\gamma)\). The second moments also converge, and \(h(f)=\frac n2\ln(2\pi)+\frac12\mathbb E\|A\|^2-D(f\|\gamma)\), in nats, proves entropy continuity at zero. De Bruijn’s identity gives continuity at every positive smoothing time. Taking the limit gives, for \(G\sim N(0,vI_n)\) independent of \(A\),
\[
N(A+G)\ge N(A)+v.
\]

For finite \(M\), define \(N(A\mid M)=(2\pi e)^{-1}2^{2h(A\mid M)/n}\), where conditional differential entropy averages over \(M\). If \(M\) is independent of \(G\) jointly with \(A\), apply the scalar inequality conditional on each positive-probability \(M=m\). Writing \(N_m=N(A\mid M=m)\), this gives
\[
\ln N(A+G\mid M)=\mathbb E[\ln N(A+G\mid M=m)]
\ge\mathbb E[\ln(v+N_m)]
\ge\ln\!\left(v+\exp\mathbb E[\ln N_m]\right),
\]
by Jensen for the convex function \(x\mapsto\ln(v+e^x)\). Exponentiating yields
\[
N(A+G\mid M)\ge N(A\mid M)+v.
\tag{5}
\]
In applying (5) to the face converse, \(A=\rho Y_2^n\), \(G=Z^n\). Equivalently apply the proved standard-prior case to \(Y_2^n\) and the independent Gaussian \(Z^n/\rho\), then multiply by \(\rho^2\).

Let \(M_j=f_j(Y_j^n)\) be any block code. Since \(Y_1^n=\rho Y_2^n+Z^n\), with \(Z^n\sim N(0,qI_n)\) independent of \((Y_2^n,M_2)\), (5) and
\[
h(Y_2^n\mid M_2)=h(Y_2^n)-H(M_2)\ge \frac n2\log_2(2\pi e)-nR_2
\]
imply
\[
h(Y_1^n\mid M_2)\ge \frac n2\log_2\!\left(2\pi e\,[q+\rho^2 2^{-2R_2}]\right).
\tag{6}
\]
The decoder estimate \(\widehat Y_1^n\) is a function of \((M_1,M_2)\). Translation by that function, conditioning, and the Gaussian maximum-entropy bound give
\[
h(Y_1^n\mid M_1,M_2)\le h(Y_1^n-\widehat Y_1^n)
\le \frac n2\log_2(2\pi e\,d_1).
\]
Also \(nR_1\ge H(M_1\mid M_2)\ge I(Y_1^n;M_1\mid M_2)\). Subtracting the two conditional entropies yields the first inequality of (1), with \(\log^+\) because rates are nonnegative. Interchanging indices proves the second inequality.

The same calculations give a Gaussian point attaining each scalar-face boundary. Assume \(0<d_1<1\), put \(X=2^{2R_1}\), and let
\[
R_{1,\min}=\tfrac12\log_2^+(q/d_1),\qquad R_{1,\max}=\tfrac12\log_2(1/d_1).
\]
For a finite feasible boundary rate \(R_{1,\min}<R_1\le R_{1,\max}\), set
\[
\lambda_2=\frac{1-d_1X}{d_1X-q},\qquad
\lambda_1=\frac{(1-d_1)+(q-d_1)\lambda_2}{d_1(1+q\lambda_2)}.
\tag{7}
\]
These are nonnegative: \(\lambda_2\ge0\) on the stated interval; if \(d_1\le q\), the numerator of \(\lambda_1\) is nonnegative for every \(\lambda_2\), while if \(d_1>q\), the rate range implies \(\lambda_2\le(1-d_1)/(d_1-q)\). For \(d_1>q\), the same formula also applies at the finite endpoint \(R_1=0=R_{1,\min}\). Equation (2) gives \(D_{11}=d_1\). Equation (3) gives \(r_1=R_1\), while the left corner of (4) has
\[
R_2=s-r_1=\tfrac12\log_2(1+\lambda_2)
=\tfrac12\log_2\frac{\rho^2}{d_1X-q},
\]
exactly the nonzero part of the first face boundary. If \(d_1X\ge1\), that face is zero and the endpoint \(\lambda_2=0,\lambda_1=d_1^{-1}-1\) suffices. The limiting endpoint \(R_1=R_{1,\min}\) when \(d_1\le q\) requires \(R_2\to\infty\), so it is not a finite-rate point. Thus every finite point above the scalar face is achievable whenever its companion distortion constraint is met. The symmetric formula handles the other face.

## The locally proved Gaussian CEO extremal converse

We now prove the CEO inequality required for the sum converse. Let
\[
X^n\sim N(0,I_n),\qquad Y_j^n=a_jX^n+N_j^n,
\]
where \(N_j^n\sim N(0,\sigma_j^2I_n)\) are mutually independent and independent of \(X^n\); \(a_j>0\), \(\sigma_j^2>0\). Let \(M_j=f_j(Y_j^n)\) be finite messages with message alphabet \(\mathcal M_j\), and let \(\widehat X^n=\psi(M_1,M_2)\) have per-coordinate MSE \(\delta\). Define
\[
r_j=\frac1n H(M_j\mid X^n),\qquad \operatorname{snr}_j=\frac{a_j^2}{\sigma_j^2}.
\]
Then
\[
\delta\ge
\left[1+\sum_{j=1}^2\operatorname{snr}_j(1-2^{-2r_j})\right]^{-1}
\tag{8}
\]
and
\[
\frac1n\log_2(|\mathcal M_1||\mathcal M_2|)
\ge \frac12\log_2^+(1/\delta)+r_1+r_2.
\tag{9}
\]

**Proof of (8), including the missing extremal lemma.** For a message value \(m\), the likelihood is the Gaussian convolution
\[
p_j(m\mid x)=\int_{\{y:f_j(y)=m\}}\phi_{\sigma_j}(y-a_jx)\,dy.
\]
It is positive for nonempty cells and differentiable under the integral. Its score is
\[
\nabla_x\log p_j(M_j\mid X^n)
=\frac{a_j}{\sigma_j^2}\,\mathbb E[N_j^n\mid X^n,M_j].
\]
Let \(J_j\) be the expected Fisher-information matrix of this likelihood. Then
\[
\operatorname{tr}J_j
=\frac{a_j^2}{\sigma_j^4}\mathbb E\|\mathbb E[N_j^n\mid X^n,M_j]\|^2.
\tag{10}
\]
Because \(M_j\) is a deterministic function of \(a_jX^n+N_j^n\),
\[
h(N_j^n\mid X^n,M_j)=\frac n2\log_2(2\pi e\sigma_j^2)-H(M_j\mid X^n)
=\frac n2\log_2(2\pi e\sigma_j^2)-nr_j.
\tag{11}
\]
Conditional maximum entropy, followed by Jensen over \((X^n,M_j)\), gives
\[
h(N_j^n\mid X^n,M_j)
\le\frac n2\log_2\!\left(
2\pi e\,\frac1n\mathbb E\|N_j^n-\mathbb E[N_j^n\mid X^n,M_j]\|^2
\right).
\]
Combining with (11) yields
\[
\frac1n\mathbb E\|N_j^n-\mathbb E[N_j^n\mid X^n,M_j]\|^2
\ge \sigma_j^2 2^{-2r_j}.
\]
The orthogonal-projection identity and (10) therefore show
\[
\operatorname{tr}J_j\le n\,\operatorname{snr}_j(1-2^{-2r_j}).
\tag{12}
\]

Given \(X^n\), the messages are independent, so their likelihood scores add and their Fisher matrices add. The joint prior-message score \(S=\nabla_x\log p(X^n,M_1,M_2)\) has information matrix
\[
F=\mathbb E[SS^T]=I_n+J_1+J_2.
\]
The cross terms vanish because each conditional likelihood score has conditional mean zero. For completeness, the Bayesian Cramér–Rao step follows by integration by parts: for \(e=X^n-\widehat X^n(M_1,M_2)\), Gaussian decay of the prior and smoothness of the convolved likelihood give \(\mathbb E[eS^T]=-I_n\). Hence
\[
0\preceq\mathbb E[(e+F^{-1}S)(e+F^{-1}S)^T]
=\mathbb E[ee^T]-F^{-1},
\]
so \(\mathbb E[ee^T]\succeq F^{-1}\). If \(\eta_1,\ldots,\eta_n\) are the eigenvalues of \(J_1+J_2\succeq0\), convexity of \(u\mapsto(1+u)^{-1}\) implies
\[
\delta=\frac1n\operatorname{tr}\mathbb E[ee^T]
\ge\frac1n\operatorname{tr}F^{-1}
=\frac1n\sum_{\ell=1}^n\frac1{1+\eta_\ell}
\ge\frac1{1+\operatorname{tr}(J_1+J_2)/n}.
\]
Use (12) to obtain (8).

**Proof of (9) and sharpness of the CEO bound.** Put \(M=(M_1,M_2)\). Since \(M\) is a deterministic function of \((Y_1^n,Y_2^n)\), and the observations are conditionally independent given \(X^n\),
\[
\begin{aligned}
\log_2(|\mathcal M_1||\mathcal M_2|)
&\ge H(M_1,M_2)\\
&=I(Y_1^n,Y_2^n;M)\\
&=I(X^n;M)+H(M_1\mid X^n)+H(M_2\mid X^n).
\end{aligned}
\tag{13}
\]
The Gaussian entropy bound with the decoder estimate gives
\[
I(X^n;M)\ge \frac n2\log_2^+(1/\delta).
\]
Together these prove (9). If \(\delta\le d\), (8) forces
\[
1+\sum_j\operatorname{snr}_j(1-2^{-2r_j})\ge 1/d.
\tag{14}
\]
Thus every CEO code obeys the lower bound obtained by minimizing the right side of (9) over \(r_1,r_2\ge0\) subject to (14).

The infimum is finite exactly when d>(1+sum_j snr_j)^(-1), the error with unquantized observations; at equality its value is infinite, and below it (14) has no feasible r and no decoder can meet the target. For every finite feasible target, the lower bound is sharp and equals the Gaussian product-test-channel sum-rate infimum. For any \(r_j\ge0\), choose \(U_j=Y_j+Q_j\) with independent Gaussian \(Q_j\) such that \(I(Y_j;U_j\mid X)=r_j\); for \(r_j=0\), use a constant. The effective observation SNR about \(X\) is
\[
\operatorname{snr}_j(1-2^{-2r_j}),
\]
so \(\operatorname{Var}(X\mid U_1,U_2)\) is the reciprocal in (14). The identity
\[
I(Y_1,Y_2;U_1,U_2)=I(X;U_1,U_2)+\sum_jI(Y_j;U_j\mid X)
\]
shows that when \(d<1\), the minimum is attained with \(\operatorname{Var}(X\mid U_1,U_2)=d\), and its value is the objective in (9). Indeed, a feasible point with strict slack in (14) can reduce a positive \(r_j\) and lower the objective until equality. For \(d\ge1\), constant auxiliaries achieve zero. Conversely every
\[
D\in\mathcal D_G:=\{(K^{-1}+\operatorname{diag}\lambda)^{-1}:\lambda_1,\lambda_2\ge0\}
\tag{15}
\]
is the posterior error covariance of such independent Gaussian test channels. If \(X=\kappa\mu^TY+Z\) with \(Z\) independent of \(Y\) and variance \(\gamma\), then \(\operatorname{Var}(X\mid U)=\gamma+\kappa^2\mu^TD\mu\). Consequently the exact CEO sum lower bound for target \(\delta_0=\gamma+\kappa^2d\) equals
\[
\inf_{\substack{D\in\mathcal D_G\\\mu^TD\mu\le d}}
\frac12\log_2^+\frac{|K|}{|D|}.
\tag{16}
\]
This derives the needed CEO sum result rather than citing it.

## Sum-rate converse

First consider an arbitrary block code for the original source. Replace its decoder by coordinatewise conditional-mean estimates given \(M_1,M_2\); this cannot increase either distortion. Let
\[
\widehat D=\frac1n\sum_{t=1}^n
\mathbb E[(Y(t)-\widehat Y(t))(Y(t)-\widehat Y(t))^T]
=\begin{pmatrix}\widehat d_1&c\\c&\widehat d_2\end{pmatrix},
\]
so \(\widehat d_j\le d_j\). The finite message pair is a function of \(Y^n\), hence
\[
n(R_1+R_2)\ge H(M_1,M_2)=h(Y^n)-h(Y^n\mid M_1,M_2).
\]
Chain rule, translation by the decoder estimate, conditional-entropy reduction, Gaussian maximum entropy, and concavity of \(\log\det\) yield
\[
h(Y^n\mid M_1,M_2)
\le \frac n2\log_2\big((2\pi e)^2|\widehat D|\big),
\]
and therefore
\[
R_1+R_2\ge\frac12\log_2^+\frac{|K|}{|\widehat D|}.
\tag{17}
\]
The conditional distributions of a nonsingular Gaussian source on positive-probability finite-message cells have full-dimensional densities, so \(\widehat D\) is positive definite.

Let
\[
\phi=\frac{c}{\sqrt{d_1d_2}},\qquad
D_\phi=\begin{pmatrix}d_1&\phi\sqrt{d_1d_2}\\
\phi\sqrt{d_1d_2}&d_2\end{pmatrix}.
\]
Because \(\widehat d_j\le d_j\), \(D_\phi-\widehat D\) is diagonal positive semidefinite, so \(|\widehat D|\le|D_\phi|\). Equation (17) gives the cooperative lower bound
\[
R_1+R_2\ge R_{\rm coop}(\phi)
:=\frac12\log_2^+\frac{q}{(1-\phi^2)d_1d_2}.
\tag{18}
\]

Now fix \(\mu=(\sqrt{d_2},\sqrt{d_1})^T\). For any \(\mu\) with positive coordinates, scale it by \(\kappa>0\) so that
\[
\kappa^2(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)=\rho.
\]
Set \(X=\kappa\mu^TY+Z\), where \(Z\) is independent Gaussian with variance \(\gamma=1-\kappa^2\mu^TK\mu>0\). Indeed,
\[
(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)-\rho\mu^TK\mu=q\mu_1\mu_2>0,
\]
so \(\gamma>0\). Then \(X\sim N(0,1)\), \(\mathbb E[X\mid Y]=\kappa\mu^TY\), and
\[
\operatorname{Cov}(Y_1,Y_2\mid X)
=\rho-\kappa^2(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)=0.
\]
Thus \(Y_j=a_jX+N_j\) with independent Gaussian \(N_1,N_2,X\), exactly the CEO model above. For the decoder estimate \(\widehat X=\kappa\mu^T\widehat Y\),
\[
\mathbb E(X-\widehat X)^2
=\gamma+\kappa^2\mu^T\widehat D\mu
\le \gamma+\kappa^2\mu^TD_\phi\mu.
\]
Apply (16) to get a second lower bound \(R_{\rm sum}(\phi)\), the Gaussian CEO minimum at scalar error target \(\gamma+\kappa^2\mu^TD_\phi\mu\).

It remains to evaluate the min-max of (18) and this CEO bound. Suppose a matrix \(D_*\in\mathcal D_G\) has diagonal \((d_1,d_2)\), and write
\[
D_*=\begin{pmatrix}d_1&c_*\\c_*&d_2\end{pmatrix}.
\]
Every \(D\in\mathcal D_G\) has positive off-diagonal \(c\) and, with \(p=D_{11}D_{22}\), the off-diagonal inverse identity gives
\[
\frac{c}{p-c^2}=\frac{\rho}{q},\qquad
c=c(p)=\frac{-q+\sqrt{q^2+4\rho^2p}}{2\rho}.
\tag{19}
\]
Thus \(c(p)\) is increasing and \(|D|=p-c(p)^2=(q/\rho)c(p)\) is also increasing in \(p\). For \(\mu=(\sqrt{d_2},\sqrt{d_1})\),
\[
\mu^TD\mu=d_2D_{11}+d_1D_{22}+2\sqrt{d_1d_2}\,c(p)
\ge2\sqrt{d_1d_2}\,[\sqrt p+c(p)].
\tag{20}
\]
The right side increases strictly in \(p\), with equality at \(D_*\). Therefore \(D_*\) minimizes \(\frac12\log_2(|K|/|D|)\) over all \(D\in\mathcal D_G\) satisfying \(\mu^TD\mu\le\mu^TD_*\mu\). This proves the needed supporting-\(\mu\) lemma directly.

Let \(\theta_*=c_*/\sqrt{d_1d_2}>0\). At \(\phi=\theta_*\), (18) and (16) both equal
\[
\frac12\log_2\frac{|K|}{|D_*|}.
\]
If \(\phi\ge\theta_*\), \(R_{\rm coop}(\phi)\ge R_{\rm coop}(\theta_*)\). If \(\phi\le\theta_*\), then \(\mu^TD_\phi\mu=2d_1d_2(1+\phi)\le\mu^TD_*\mu\), so the feasible set in the CEO minimization is smaller and \(R_{\rm sum}(\phi)\ge R_{\rm sum}(\theta_*)\). Hence every code has sum rate at least \(\frac12\log_2(|K|/|D_*|)\) whenever \(D_*\) exists.

For \(D_*\) with prescribed diagonal, the off-diagonal inverse equation is
\[
\frac{\theta_*}{(1-\theta_*^2)\sqrt{d_1d_2}}=\frac{\rho}{q}.
\]
It has the unique positive solution
\[
\theta_*=\frac{\sqrt{q^2+4\rho^2d_1d_2}-q}{2\rho\sqrt{d_1d_2}},
\quad
1-\theta_*^2=\frac{2}{\beta(d_1,d_2)},
\quad
|D_*|=\frac{2d_1d_2}{\beta(d_1,d_2)}.
\tag{21}
\]
Thus the lower bound is exactly the third inequality in (1).

The matrix \(D_*\) belongs to \(\mathcal D_G\) exactly when, after relabeling so \(d_1\le d_2\),
\[
d_2\le1,\qquad d_2\le q+\rho^2d_1.
\tag{22}
\]
Indeed, the diagonal precisions are
\[
\lambda_1^*=\frac{\beta}{2d_1}-\frac1q,\qquad
\lambda_2^*=\frac{\beta}{2d_2}-\frac1q;
\]
\(\lambda_2^*\ge0\) is equivalent, after squaring nonnegative sides, to \(d_2\le q+\rho^2d_1\), and \(\lambda_1^*\ge\lambda_2^*\). Condition (22) is precisely the diagonal region in which the CEO/covariance argument is needed.

If \(d_1\le d_2\), \(d_1<1\), and \(d_2>q+\rho^2d_1\), the sum constraint in (1) is redundant. At the threshold \(b=q+\rho^2d_1\),
\[
\frac{q\,\beta(d_1,b)}{2d_1b}=\frac1{d_1}.
\]
The function \(d\mapsto [1+\sqrt{1+4\rho^2d_1d/q^2}]/d\) is decreasing for \(d>0\): differentiating gives a negative numerator proportional to \(-(\sqrt{1+4\rho^2d_1d/q^2}+1)^2\). Hence the sum-rate lower bound in (1) is at most \(\frac12\log_2(1/d_1)\). The first face inequality itself implies \(R_1+R_2\ge\frac12\log_2(1/d_1)\): writing \(x=2^{-2R_1}\), \(y=2^{-2R_2}\), either its logarithm is active and \(x\le d_1/(q+\rho^2y)\), or it is inactive and \(d_1\ge q+\rho^2y\ge y\); in both cases \(xy\le d_1\). If \(\min(d_1,d_2)\ge1\), the sum bound is zero because \(q[1+\sqrt{1+4\rho^2p/q^2}]/(2p)\) is decreasing for \(p=d_1d_2\ge1\) and equals one at \(p=1\). Constant reconstructions attain zero rate. This completes the sum converse for every positive distortion pair.

## Exact-region achievability

The Gaussian product test channels (2) and coding region (4) achieve the whole intersection (1).

If \(\min(d_1,d_2)\ge1\), constant zero estimates suffice. Otherwise relabel so \(0<d_1\le d_2\) and \(d_1<1\).

If \(d_2>q+\rho^2d_1\), the sum constraint is redundant by the preceding calculation. The first scalar face is achievable by (7); its companion distortion obeys
\[
D_{22}(\lambda)=\frac{q+\rho^2d_1+q^2\lambda_2}{(1+q\lambda_2)^2}
\le q+\rho^2d_1<d_2.
\tag{23}
\]
The inequality follows by differentiating: the derivative is
\[
\frac{q[q-2(q+\rho^2d_1)-q^2\lambda_2]}{(1+q\lambda_2)^3}<0,
\]
and the value at \(\lambda_2=0\) is \(q+\rho^2d_1\). Hence every point satisfying the first face is achievable with both distortion constraints; the first-face converse shows this is exactly the region.

It remains to consider \(d_2\le q+\rho^2d_1\). Then (22) holds. Construct \(D_*\) and \(\lambda^*\) by (21)–(22); the test channel \(U^*\) has distortions exactly \(d_1,d_2\), and rates
\[
r_1^*=\frac12\log_2\frac{t(\lambda^*)}{1+\lambda_2^*},\quad
r_2^*=\frac12\log_2\frac{t(\lambda^*)}{1+\lambda_1^*},\quad
s^*=\frac12\log_2\frac{q}{|D_*|}.
\tag{24}
\]
Its coding region includes every pair with \(R_1\ge r_1^*,R_2\ge r_2^*,R_1+R_2\ge s^*\).

Take any pair in (1). If \(R_1\ge r_1^*\) and \(R_2\ge r_2^*\), its sum inequality and (24) put it in this test channel’s coding region. If \(R_1<r_1^*\), the first face inequality requires \(R_1\ge R_{1,\min}\) and \(R_2\) at least its face-boundary value. Formula (7) produces that boundary point. As \(R_1\) decreases, its \(\lambda_2\) increases because
\[
2^{2R_1}=\frac{1+q\lambda_2}{d_1(1+\lambda_2)}
\]
is strictly decreasing in \(\lambda_2\). Since \(r_1^*\) corresponds to \(\lambda_2^*\), this gives \(\lambda_2\ge\lambda_2^*\); (23) and its strict monotonicity show \(D_{22}(\lambda)\le D_{22}(\lambda^*)=d_2\). Thus this point of the first face is achieved under both distortion constraints, and any larger \(R_2\) is achieved by rate enlargement. The case \(R_2<r_2^*\) is symmetric. These cases cover every point in (1), proving achievability.

All achievability statements first use strict rate slack and finite partitions; closure and diagonalization give the boundaries. Conversely, the face and sum inequalities hold for each finite code, and their right sides are continuous in the positive \(d_j\), so they pass to the operational closure.

## Source audit and scope control

The actual source read for this supplement is Wagner, Tavildar, and Viswanath, “Rate Region of the Quadratic Gaussian Two-Encoder Source-Coding Problem,” author preprint arXiv:cs/0510095v3, local PDF and extraction recorded in the r5 source manifest. I read the complete relevant source sections: the model and Theorem 1 (§2); direct Gaussian test-channel/Slepian–Wolf discussion (§3); diagonal Gaussian test-channel set, scalar-face interface, and \(\mu\)-sum setup (§4); error-covariance and min-max proof (§5); and Appendices B–E, including the original CEO appeal (Appendix C), the supporting-\(\mu\) argument (Appendix D), and test-channel achievability geometry (Appendix E). The source itself gives only a high-level random-coding achievability outline in §3 and appeals to prior CEO results in Appendix C. This note supplies a finite-approximation coding justification and replaces the CEO appeal with the explicit Fisher-information/Van-Trees proof above. No exactness claim is extended beyond the model stated at the start.


# Independently checked canonical integration: gaussian-feedback-interference-proof-notes.md

The local proof below is transcribed from the stable r5 proof development and independently checked. Source-reading assertions within its source audit describe that researcher's reading, not an additional whole-text reading claim by the independent auditor.

# Supplement: Ozarow feedback MAC, Gaussian NNC gap, and relay feedback

Status: source-derived local proof developments for the additional r5 audit obligations. This note does not edit canonical scaffold items, does not certify the independent audit, and does not classify these established theorems as open problems. ETW interference-channel proof work is allocated to r3 and is deliberately outside this note.

All rates and mutual informations below are in bits (base-two logarithms). Gaussian channel costs are expected block-average powers over the independent uniform messages and channel noises, as stated in each model. Closed capacity regions are closures of strict-rate achievability statements.

## 1. Two-user real AWGN MAC with noiseless output feedback

### 1.1 Operational model and exact region

The channel is `Y_i=g_1 X_{1i}+g_2 X_{2i}+Z_i`, where `Z_i` are iid `N(0,N_0)` and independent of the two independent uniform private messages `M_1,M_2`. Both transmitters observe noiseless causal output feedback `Y^{i-1}` before choosing their time-i symbols; deterministic encoders have the form `X_{ji}=f_{ji}(M_j,Y^{i-1})`. The receiver estimates both messages. Error is average joint message error. The cost is `E[sum_{i=1}^n X_{ji}^2]<=nP_j`, averaged over the uniform messages and channel noises, separately for j=1,2. There is no common message or preshared random variable.

Set `S_j=g_j^2P_j/N_0` and `C(s)=(1/2)log_2(1+s)`. The feedback capacity region is the union over `0<=rho<=1` of

`R_1<=C((1-rho^2)S_1)`, `R_2<=C((1-rho^2)S_2)`, `R_1+R_2<=C(S_1+S_2+2rho sqrt(S_1 S_2))`.

The parameter rho is the correlation coefficient of the two simultaneous effective channel inputs in the converse and in the linear feedback recursion below. It is created by common past output noise that both encoders recover from feedback; it is not preshared randomness.

### 1.2 Covariance/entropy converse

Normalize `N_0=1` and absorb each nonzero gain into the input: write `V_{ji}=g_jX_{ji}/sqrt(N_0)` and `Y_i=V_{1i}+V_{2i}+Z_i` with unit noise. Then `n^{-1}sum_i E V_{ji}^2<=S_j`. Fano’s inequality gives, for a sequence with average error `P_e->0`,

`nR_1<=I(M_1;Y^n|M_2)+n epsilon_n`, `nR_2<=I(M_2;Y^n|M_1)+n epsilon_n`, `n(R_1+R_2)<=I(M_1,M_2;Y^n)+n epsilon_n`,

where `epsilon_n->0`. For each time i let `v_{ji}=Var(V_{ji})`, `c_i=Cov(V_{1i},V_{2i})`, and `Vbar_j=n^{-1}sum_i v_{ji}`, `cbar=n^{-1}sum_i c_i`. Given `(M_2,Y^{i-1})`, `V_{2i}` is known. The conditional-variance bound from linear prediction by this known symbol is

`E Var(V_{1i}|M_2,Y^{i-1})<=E[(V_{1i}-E V_{1i}-(c_i/v_{2i})(V_{2i}-E V_{2i}))^2]=v_{1i}-c_i^2/v_{2i}`

when `v_{2i}>0`; if `v_{2i}=0`, then `c_i=0` and use `v_{1i}`. Since the current Gaussian noise is independent of messages and past outputs, Gaussian maximum entropy conditional on the past and Jensen give

`I(M_1;Y^n|M_2)<=sum_i C(v_{1i}-c_i^2/v_{2i})`.

Concavity of C and Cauchy–Schwarz yield

`n^{-1}I(M_1;Y^n|M_2)<=C(Vbar_1-n^{-1}sum_i c_i^2/v_{2i})<=C(Vbar_1-cbar^2/Vbar_2)`.

The symmetric argument gives `I(M_2;Y^n|M_1)/n<=C(Vbar_2-cbar^2/Vbar_1)`. For the sum, the entropy chain rule, conditioning-reduces-entropy, and the variance of the Gaussian-noise output give

`n^{-1}I(M_1,M_2;Y^n)<=n^{-1}sum_i C(v_{1i}+v_{2i}+2c_i)<=C(Vbar_1+Vbar_2+2cbar)`.

If `Vbar_1 Vbar_2>0`, define `rho=|cbar|/sqrt(Vbar_1 Vbar_2)<=1`; otherwise use rho=0. The first two bounds become `C((1-rho^2)Vbar_j)`. Replacing a negative `cbar` by `|cbar|` only enlarges the sum-rate right side. Since `Vbar_j<=S_j`, monotonicity of C gives all three claimed inequalities. Let n tend to infinity. This converse explicitly permits feedback-induced dependence between the users’ current inputs; product-input MAC converses do not apply.

### 1.3 Causal Gaussian feedback code at the sum-rate corner

For positive `S_1,S_2`, let `rho_*` be the unique root in `(0,1)` of

`C((1-rho_*^2)S_1)+C((1-rho_*^2)S_2)=C(S_1+S_2+2rho_*sqrt(S_1S_2))`.

Uniqueness follows because the left side strictly decreases from a value greater than the right side at rho=0 to zero at rho=1, while the right side strictly increases. Write `a=1-rho_*^2` and `D=1+S_1+S_2+2rho_*sqrt(S_1S_2)`. The defining equality is equivalently

`(1+aS_1)(1+aS_2)=D`.

Choose temporary powers `0<S'_j<S_j`; the construction below uses `S'_j` and its corresponding root `rho_*'`. At the end let `S'_j` increase to `S_j`. Normalize the channel to unit noise and effective inputs `V_j=g_jX_j/sqrt(N_0)`. Initially represent each message by a distinct midpoint `theta_j(m_j)` in `[-1,1]`, with nearest-neighbor separation `Delta_j=2/ceil(2^{nR_j})`. Use three startup channel symbols:

`(V_{1,-2},V_{2,-2})=(0,theta_2)`, `(V_{1,-1},V_{2,-1})=(theta_1,0)`, and `(V_{1,0},V_{2,0})=(0,0)`.

Encoder 1 subtracts its own known `theta_1` from `Y_{-1}` to learn `Z_{1,-1}`; encoder 2 subtracts its own known `theta_2` from `Y_{-2}` to learn `Z_{2,-2}`. After the zero-input symbol at time 0, both learn `Z_0=Y_0`. Define `U_1=Z_{1,-1}+lambda Z_0`, `U_2=Z_{2,-2}+lambda Z_0`, with `lambda^2=rho_*'/(1-rho_*')`. Then `Var(U_1)=Var(U_2)=1+lambda^2` and `Corr(U_1,U_2)=rho_*'`; each encoder knows its own U_j. The receiver is not assumed to know any startup noise.

At time 1 transmit

`V_{j1}=sqrt(S'_j/(1+lambda^2)) U_j`.

Write `Y_rec^{i-1}=(Y_1,...,Y_{i-1})` for the outputs of recursive symbols only. For i>=2 define the conditional innovation `E_{j,i-1}=V_{j,i-1}-E[V_{j,i-1}|Y_rec^{i-1}]` and its (deterministic) Gaussian variance `e_{j,i-1}=E[E_{j,i-1}^2]`. The recursion deliberately ignores the startup outputs in these conditional expectations; conditioning on them would reveal a discrete message point plus noise and would destroy the jointly Gaussian conditioning used below. The causal recursion is

`V_{1i}=sqrt(S'_1/e_{1,i-1}) E_{1,i-1}`, `V_{2i}=-sqrt(S'_2/e_{2,i-1}) E_{2,i-1}`.

Each sender can compute its own previous symbol, the public conditional-expectation function of the recursive feedback history, and the normalization; thus these are valid functions of its private message and past outputs. Joint Gaussian conditioning on `Y_rec^{i-1}` shows that the innovation covariance is deterministic, so `E[V_{ji}^2]=S'_j` at every recursive time and `(V_{1i},V_{2i},Y_i)` is independent of `Y_rec^{i-1}`. This independence claim is only for the recursive Gaussian history, not for the startup outputs containing the unknown message points.

Here is the covariance recurrence. If the preceding symbols have variances `S'_1,S'_2` and correlation rho, then the observation variance is `D_rho=1+S'_1+S'_2+2rho sqrt(S'_1S'_2)`. Conditioning on their sum plus unit Gaussian noise gives

`e_1=S'_1(1+S'_2(1-rho^2))/D_rho`, `e_2=S'_2(1+S'_1(1-rho^2))/D_rho`,

`e_{12}=sqrt(S'_1S'_2)(rho-(1-rho^2)sqrt(S'_1S'_2))/D_rho`.

The separate normalizations and the opposite sign at encoder 2 therefore produce next correlation

`rho_new=((1-rho^2)sqrt(S'_1S'_2)-rho)/sqrt((1+S'_1(1-rho^2))(1+S'_2(1-rho^2)))`.

At `rho=rho_*'`, the matching equation makes the denominator `sqrt(D_rho)`, and direct expansion gives `( (1-rho^2)sqrt(S'_1S'_2)-rho )^2=rho^2 D_rho`. The numerator is positive: let `r_0` solve `r_0=sqrt(S'_1S'_2)(1-r_0^2)`. At this point, putting `a=1-r_0^2`, the difference between the two sides of the product form of the matching equation is

`(1+aS'_1)(1+aS'_2) - (1+S'_1+S'_2+2r_0 sqrt(S'_1S'_2)) = r_0^2(1-S'_1-S'_2-2/a)<0`.

The matching function is strictly decreasing, so `rho_*'<r_0`; equivalently `(1-rho_*'^2)sqrt(S'_1S'_2)-rho_*'>0`. Thus `rho_new=rho_*'`. The correlation and both powers are maintained at every recursive time.

For `V_j` and `Y=V_1+V_2+Z` jointly Gaussian with these powers and correlation, `Var(Y)=D_rho` and `Var(Y|V_j)=1+S'_{3-j}(1-rho^2)`. The matching equation therefore implies

`I(V_j;Y)=1/2 log_2(D_rho/(1+S'_{3-j}(1-rho^2)))=C((1-rho^2)S'_j)=I(V_j;Y|V_{3-j})`.

Given `Y_rec^{i-1}`, `V_{ji}` is a nonzero scalar multiple of `U_j-E[U_j|Y_rec^{i-1}]`; it is one-to-one with U_j for that fixed history. Since `(V_{1i},V_{2i},Y_i)` is independent of the recursive past, writing `Y_rec^n=(Y_1,\ldots,Y_n)` for just the n recursive outputs gives

`I(U_j;Y_rec^n)=sum_i I(U_j;Y_i|Y_rec^{i-1})=n C((1-rho_*'^2)S'_j)`.

For jointly Gaussian variables this means `Var(U_j|Y_rec^n)=Var(U_j)2^{-2nC((1-rho_*'^2)S'_j)}`. The receiver forms `thetahat_1=Y_{-1}+lambda Y_0-E[U_1|Y_rec^n]` and `thetahat_2=Y_{-2}+lambda Y_0-E[U_2|Y_rec^n]`. Each estimation error is `U_j-E[U_j|Y_rec^n]`, hence zero-mean Gaussian with the displayed conditional variance. Nearest-midpoint decoding errs only when its absolute error is at least `Delta_j/2`; the Gaussian tail bound tends to zero doubly exponentially whenever `R_j<C((1-rho_*'^2)S'_j)`.

The recursive symbols cost exactly `S'_j` per use in expectation. Each sender’s startup message symbol has square at most one and the other two startup symbols are zero, so total normalized expected energy is at most `1+nS'_j`. The block has n+3 uses. Since `S'_j<S_j`, for all sufficiently large n this is at most `(n+3)S_j`; the normalized rates `nR_j/(n+3)` tend to R_j. Taking `S'_j` upward to `S_j` proves achievability of the sum-rate corner `(C((1-rho_*^2)S_1),C((1-rho_*^2)S_2))`, whose sum equals the sum constraint. The only shared randomness used in the code is the common channel noise `Z_0`, which both encoders learn through feedback after the startup transmission.

### 1.4 The full Ozarow region

For `rho>rho_*`, the sum bound is redundant because its right side exceeds the sum of the two individual bounds; each individual bound is no larger than at `rho_*`. Thus these rectangles add no rates beyond the `rho_*` region.

For `0<=rho<=rho_*`, both endpoints of the active sum-rate face are achievable by rate splitting. For the endpoint with user 1 at its individual bound, split its message into independent indices `(M_{10},M_{11})`. Generate length-n iid Gaussian cloud codewords `a^n(m_{10})` with power fraction `alpha P_1` and add them only on the n recursive symbols. Retain the three startup message-point transmissions from §1.3, without the `M_{10}` layer. For the feedback layer choose `lambda^2=rho_f/(1-rho_f)` in its startup noise combination, then scale the two first recursive symbols so their powers are `(1-alpha)P_1` and `P_2`; this seeds the required correlation `rho_f`. The startup noises have variance `N_0`, while the recursive effective channel noise has variance `N_0+g_1^2 alpha P_1`; this causes no mismatch because the recursion only requires the initial inputs to have the target covariance, and each subsequent observation contains a fresh iid effective Gaussian noise. On the recursive symbols user 1 sends its feedback-layer input plus `a_i(m_{10})`, while user 2 sends its causal feedback input. In the ensemble average over a uniformly selected `m_{10}` and random cloud codebook, `a_i(m_{10})+Z_i` is iid Gaussian and independent of the feedback-layer messages and past outputs, so it acts as channel noise of variance `N_0+g_1^2 alpha P_1`. The receiver first decodes the two feedback-layer indices using the §1.3 estimator, then subtracts their reconstructed causal inputs and decodes `M_{10}` from the remaining ordinary AWGN codeword. If `rho_f` is the matching feedback correlation for the effective SNRs `(1-alpha)S_1/(1+alpha S_1)` and `S_2/(1+alpha S_1)`, put `rho=sqrt(1-alpha)rho_f`. The feedback layer has rates bounded by its two individual Gaussian terms and saturates its sum term by §1.3. The resulting endpoint rates are

`R_1=C((1-rho^2)S_1)`, `R_2=C(S_1+S_2+2rho sqrt(S_1S_2))-C((1-rho^2)S_1)`.

Indeed the first rate is `C(alpha S_1)+C((1-rho_f^2)(1-alpha)S_1/(1+alpha S_1))=C((1-rho^2)S_1)`, and the sum is `C(alpha S_1)+C(((1-alpha)S_1+S_2+2rho_f sqrt((1-alpha)S_1S_2))/(1+alpha S_1))=C(S_1+S_2+2rho sqrt(S_1S_2))`. To meet the deterministic expected-power constraint after fixing the random cloud codebook, choose each layer's power with a fixed slack, then let that slack tend to zero after n grows. For fixed `alpha in (0,1)`, conditional on a particular cloud word `a`, the feedback encoders and channel are linear Gaussian maps of `a` and zero-mean startup/recursive noises. Thus the expected block energy of user j conditional on that word is `a^T K_j a+c_j`, with `K_j` positive semidefinite and no linear term: the startup midpoint grids are centered, their noises have mean zero, and the recursion uses only the centered startup innovations and recursive outputs. The three startup symbols add only an `O(1)` term. Under the iid Gaussian cloud ensemble, expected total energy is `O(n)`, so `tr(K_j)=O(n)` for fixed channel parameters and alpha. For `L=|M_{10}|` independent cloud words, the normalized message-averaged cost is their average quadratic form and

`Var((nL)^(-1) sum_{m=1}^L a(m)^T K_j a(m)) = 2 sigma^4 tr(K_j^2)/(n^2 L) <= 2 sigma^4 (tr K_j)^2/(n^2 L) = O(1/L)`,

where `sigma^2=alpha P_1`. Since `R_{10}` can be any positive rate below `C(alpha S_1)` for fixed `alpha>0`, L is exponential in n; both users' power costs therefore concentrate simultaneously below their budgets with the fixed slack. The ensemble average error tends to zero by the Gaussian feedback-code error calculation and the ordinary Gaussian code packing bound, so Markov's inequality makes the bad-error codebook event vanish. A codebook satisfying both power constraints and vanishing average error exists. At `alpha=0`, use the already-proved pure feedback corner. The endpoint `rho=0` is obtained as `alpha` increases to one and agrees with the usual Gaussian MAC successive-decoding corner. As alpha varies continuously from zero to one, rho varies continuously from rho_* to 0, so every endpoint is obtained. Splitting user 2 instead yields the other endpoint `(R_1,R_2)=(C(S_1+S_2+2rho sqrt(S_1S_2))-C((1-rho^2)S_2), C((1-rho^2)S_2))`.

For fixed rho<=rho_*, the sum constraint is active and these endpoints are the two ends of its boundary segment. A deterministic public time-sharing schedule between their codes attains every point of that segment; lowering either message rate attains the entire downward-closed pentagon. The converse of §1.2 gives no points outside the stated union. If either S_j=0, the formula follows by continuity and reduces to the single-user AWGN capacity region.

Source locator: El Gamal–Kim, arXiv:1001.3404v3, Interactive Communication, Lecture 18, Theorem 3 and proof, lecture pages 18–28 through 18–38. The lecture proves the symmetric recursion in detail and sketches the asymmetric extension; the covariance formulas and power-specific normalization above supply that extension directly.

## 2. Gaussian noisy-network-coding cut-dependent gap

### 2.1 Model and exact cut bounds

Consider the real AWGN network `Y^N=G X^N+Z^N`, where `Z^N~N(0,I)` has independent coordinates. Node k has an independent uniform message `M_k` at rate `R_k>=0`; every destination in a common nonempty set D must recover all node messages. Error is average block error over the message tuple and channel noise. The source model imposes, for every node k and every message `m_k`, `n^{-1}sum_i E[X_{ki}^2|M_k=m_k]<=P`, where the expectation includes the other messages, channel noise and the node's causal observation history. The article uses deterministic encoders; the random codebook and covering-index choices are fixed by the existence argument. There is no preshared common randomness. For a cut S with `S^c intersect D != empty`, write `Y(S^c)=G(S)X(S)+G'(S)X(S^c)+Z(S^c)`, where G(S) consists of output rows in `S^c` and input columns in S. The cut-set outer bound and the NNC inner bound admit the following exact comparisons (boundary rates are interpreted by closure):

`R(S)<=F_S + (1/2) min{|S|,|S^c|} log_2(2|S|)`,

`R(S)<F_S-|S|/2`,

where `F_S=(1/2)log_2 det(I+(P/2)G(S)G(S)^T)`.

Thus the exact derived additive difference between the displayed cut right sides is

`g_S=|S|/2 + (1/2)min{|S|,|S^c|}log_2(2|S|)`

bits per use. This is the exact cut-right-side difference for the unit-variance quantizer and covariance relaxation in the March 2010 arXiv v2 proof; it is not an exact general Gaussian-network capacity formula. The worst per-cut right-side difference satisfies

`max_{1<=s<=N-1} [s/2 + min(s,N-s)/2 log_2(2s)] <= (N/4)log_2(2N)`

for `N>3`. Here is the discrete maximization. For `s<=N/2`, the expression is `s/2 log_2(4s)`, an increasing function of s, and its value at `N/2` is the stated bound. For `s>=N/2`, set `f(s)=s/2+(N-s)/2 log_2(2s)`. Its second derivative is `-(1/s+N/s^2)/(2 ln 2)<0`; its derivative at `N/2` is `[1-log_2 N+1/ln 2]/2<0` for `N>=6`. Thus f decreases from `N/2` onward, and is bounded by `f(N/2)=(N/4)log_2(2N)`. The remaining integer cases are direct: for `N=4`, the values at `s=1,2,3` are `1,3,1.5+0.5log_2 6`; for `N=5`, those at `s=1,2,3,4` are `1,3,1.5+log_2 6,3.5`; each maximum is at most the claimed bound. This is a cut-RHS comparison only; the arXiv v2 article's Theorem 4 stated a stronger cut-dependent vector guarantee without proving vector selection in its displayed argument. The final 2011 journal version changes that theorem and supplies a different common-shift proof in §2.5 below.

### 2.2 Cut-set outer bound

For any joint input covariance K_S on the senders in S, `K_S` is positive semidefinite and `tr K_S<=|S|P`. Conditional on `X(S^c)`, subtract the known term `G'(S)X(S^c)`. Gaussian maximum entropy gives

`I(X(S);Y(S^c)|X(S^c)) <= (1/2)log_2 det(I+G(S)K_SG(S)^T)`.

The covariance inequality `K_S<=tr(K_S)I` follows by diagonalizing K_S: every eigenvalue is at most the sum of its nonnegative eigenvalues. Congruence by G(S) preserves the positive-semidefinite order, so determinant monotonicity yields

`det(I+G K_S G^T)<=det(I+|S|P GG^T)`.

Let m=|S^c| and q=|S|>=1. For every eigenvalue t>=0, `1+q t<=2q(1+t/2)`; hence

`(1/2)log det(I+|S|P GG^T) <= (1/2)log det(I+(P/2)GG^T)+(m/2)log_2(2q)`.

The determinant identity `det(I+AB)=det(I+BA)` rewrites the common term using `G^TG` instead of `GG^T`. Repeating the same argument in the |S|-dimensional input space bounds the extra term by `(|S|/2)log_2(2|S|)`. Taking the smaller of these two valid bounds proves the stated cut-set outer inequality with `min{|S|,|S^c|}`. The cut-set inequality itself follows from the usual Fano cut argument; feedback or internal correlation among inputs only enlarges the allowed joint K_S and is already covered by this optimization.

### 2.3 NNC inner bound with unit-variance Gaussian quantizers

Choose independent `X_k~N(0,P)` at all nodes and `Q` constant. At every node use `Yhat_k=Y_k+Zhat_k`, where the independent quantization noises `Zhat_k~N(0,1)` are independent of X^N and all channel noises. This is the local test-channel factorization `prod_k p(x_k)W(y^N|x^N)prod_k p(yhat_k|y_k)` required by Theorem 1; each node can form its own quantizer from its own output. The theorem’s NNC cut expression is

`R(S)<I(X(S);Yhat(S^c),Y_d|X(S^c))-I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d)`

for each nonempty S and destination `d in S^c intersect D`.

The first term is at least `I(X(S);Yhat(S^c)|X(S^c))`, since adjoining Y_d cannot decrease mutual information. Conditional on X(S^c), the vector `Yhat(S^c)` has signal `G(S)X(S)` and noise covariance `2I`; the input covariance is `P I`. The Gaussian entropy formula therefore gives exactly

`I(X(S);Yhat(S^c)|X(S^c))=(1/2)log_2 det(I+(P/2)G(S)G(S)^T)=F_S`.

For the penalty, local test-channel independence gives the Markov relation `(Yhat(S^c),Y_d) - (X^N,Y(S)) - Yhat(S)`. By the chain rule,

`I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d)<=I(Y(S);Yhat(S)|X^N)`.

Given X^N, the independent channel noises make `Y(S)` a translate of `|S|` independent unit Gaussians, and `Yhat(S)` adds another independent unit Gaussian in each coordinate. Thus

`I(Y(S);Yhat(S)|X^N)=(|S|/2)log_2(2)=|S|/2`.

Substitution in the NNC theorem proves the inner cut inequality `R(S)<F_S-|S|/2`. Comparing it with the outer inequality proves the displayed per-cut difference g_S exactly. This derivation includes the quantization penalty; dropping it would give an invalid stronger inner bound.

### 2.4 Continuous-alphabet coding bridge

The finite-alphabet NNC theorem alone is not a coding proof for Gaussian variables. Here is the approximation needed for the particular Gaussian input and local test channel above; the same construction works for any fixed `gamma>1` by using `Zhat_k~N(0,gamma-1)`. Fix a rate tuple strictly inside every displayed NNC cut inequality; since there are finitely many cuts and destinations, there is a positive minimum rate margin. Each continuous conditional mutual information is a conditional relative entropy; the finite-partition identity for relative entropy, together with conditional-expectation martingale convergence, lets us choose finite target partitions of `X^N`, `Y^N`, and every `Yhat_k=Y_k+Zhat_k` whose discrete conditional mutual informations approximate all the target Gaussian terms within that margin. Use bounded boxes plus overflow cells, so Gaussian tails make the overflow probabilities arbitrarily small. For each fixed finite target alphabet, the needed conditional entropies are finite and continuous in the joint cell probabilities; no mutual-information convergence is inferred from total-variation convergence on a growing alphabet. Choose the target partitions fine enough that the resulting finite-partition NNC expressions retain less than half the minimum rate margin.

Next truncate each Gaussian input to a large box, quantize it to a finite grid of bounded representatives, and multiply representatives by a factor just below one. This gives independent finite-valued inputs `X_k^m` with `E[(X_k^m)^2]<=P-delta_m` for some `delta_m>0`, while their laws converge to `N(0,P)` and their second moments converge to P. For each fixed target partition, the finite output-label probabilities vary continuously with the bounded channel inputs; Gaussian tails and the truncation choice control the omitted mass. Thus the joint law of all finite input labels, target `Yhat` labels, and target destination-output labels approaches the target finite-partition law.

Make the physical relay observation finite as well: each node forms a finite cell label `Ytilde_k=q_m(Y_k)` from its own observation only. This defines a finite-output memoryless channel from the finite input representatives. Set its local finite test channel to

`p_m(yhat_k|ytilde_k)=Pr{Qhat_m(Y_k+Zhat_k)=yhat_k | q_m(Y_k)=ytilde_k}`,

where the conditional distribution is under the finite input approximation and the physical Gaussian channel. This is a local kernel: node k needs only its own `Ytilde_k` and independent private test-channel randomness, not the other nodes' observations. As the cells of `q_m` shrink on the bounded box, the Gaussian-dither probabilities `Pr{Qhat_m(y+Zhat_k)=yhat_k}` vary uniformly little within each cell; choose the overflow box large enough that its probability is small. The induced joint distribution on the fixed finite target labels is therefore close in total variation to the target law. For this fixed finite alphabet, entropy continuity applies. Refining the physical observation cells and input grid then makes every finite NNC mutual-information expression as close as desired to its selected target-partition value. This order is essential: no mutual-information convergence is inferred merely from total-variation convergence on growing alphabets.

Apply the finite-alphabet NNC theorem to that finite-input, finite-output channel and local test kernels. For each finite approximation, generate every length-n input codeword from the product input law conditioned on its strong typical set; choose the finite input grid and the typicality tolerance so every such codeword has average cost at most `P-delta_m/2`. Write `p_n` for the probability of the conditioning event; `p_n->1`. Each packing error event contains a fixed finite number c of codewords, so conditioning their independent laws on typicality increases its bound by at most `p_n^{-c}=1+o(1)`; the usual wrong-index counts and strict mutual-information exponents are unchanged. For a jointly typical pair of local input and observation sequences, conditional type counting gives a quantization candidate hit probability at least `2^{-n(I+eta)}`; with `2^{n hatR}` independent candidates the miss probability is at most `exp[-2^{n(hatR-I-eta)}]`. These are the covering and packing estimates required by the finite NNC error analysis, now with cost-conditioned input codebooks. Because every message/compression-index codeword has this cost bound, the expected block power constraint holds for every fixed node message after averaging over other messages and the channel. At a relay, the codeword distribution is conditioned on its own current input (known from its message and previous compression index), and the local typicality-covering search uses that input and its own observation; uniform tie-breaking among successful indices preserves the NNC symmetry argument. Each finite approximation has finitely many messages, observations and codebook states, so averaging over the local tie-breaking tables fixes a deterministic set of encoder maps with no larger average error and unchanged input costs. No runtime shared randomness is required. Because the target rate tuple has a strict margin, choose the finite approximation fine enough that it lies inside the finite NNC region, then take blocklength to infinity. Finally diagonalize the finite approximations while letting `delta_m` decrease to zero. This proves the continuous Gaussian NNC achievability claim under the source's per-message expected-power model, rather than assuming a finite-DMC theorem automatically transfers to a continuous alphabet.

### 2.5 Final journal Gaussian gap and a nonnegative vector repair

The final IEEE paper changes Theorem 4 rather than repeating the arXiv v2 cut-dependent vector statement. It uses `Zhat_k~N(0,gamma-1)` with `gamma>1`. The inner cut right side is

`F_gamma(S)-Delta_i(S,gamma)`, where `F_gamma(S)=(1/2)log_2 det(I+(P/gamma)G(S)G(S)^T)` and `Delta_i(S,gamma)=(|S|/2)log_2(gamma/(gamma-1))`.

Its new Lemma 1 and Appendix D bound the cut-set outer right side by `F_gamma(S)+Delta_o(S,gamma)`, with

`Delta_o(S,gamma)=(|S|/2)log_2 alpha(gamma,r/|S|)`, `r=min{|S|,|S^c|}`,

`alpha(gamma,u)=exp(gamma/e)` if `u>=gamma/e`, and `alpha(gamma,u)=(gamma/u)^u` otherwise; the lemma assumes `gamma>=(e-1)u`. Therefore every cut's final-version RHS difference is

`b_S(gamma)=Delta_o(S,gamma)+Delta_i(S,gamma)=(|S|/2)log_2(alpha(gamma,r/|S|)gamma/(gamma-1))`.

Let `Delta(gamma)=max_S b_S(gamma)` and `Delta*=inf_{gamma>=e-1} Delta(gamma)`. The final proof explicitly constructs the common signed shift: for every outer-bound tuple R and every valid cut S,

`sum_{k in S}(R_k-Delta(gamma)) <= F_gamma(S)+Delta_o(S,gamma)-|S|Delta(gamma) <= F_gamma(S)-Delta_i(S,gamma)`.

It then evaluates the one-dimensional minimization and proves `Delta*<=0.63N`. This is a genuine vector-selection argument for the signed cut polyhedron, and the published theorem is a uniform per-coordinate shift; it does not retain the arXiv v2's sharper `g_S` statement.

An analytic certificate avoids relying on the paper's numerical minimization. Fix `gamma=3`, which is admissible. With `x=|S|/N` and `m=min{x,1-x}`, the lemma gives

`b_S(3)/N = (1/2)[x log_2(3/2)+m log_2(3x/m)]`.

For `x<=1/2`, this is `x/2 log_2(9/2)`, at most `(1/4)log_2(9/2)<5/8=0.625`, since `(9/2)^2<2^5`. For `x>=1/2`, put `t=(1-x)/x`; then

`b_S(3)/N = [ln(3/2)+t ln(3/t)]/[2 ln(2)(1+t)]`.

Its unique interior maximum solves `ln(2/t)=1+t`, equivalently `t e^t=2/e`. The function `t e^t` is increasing, and the finite Taylor lower bound gives

`0.467 e^0.467 > 0.467(1+0.467+0.467^2/2+0.467^3/6)>0.743>2/e`,

so `t<0.467`; the comparison `0.743>2/e` follows, for example, from `e>2.7`, which is certified by the positive Taylor sum through degree five and gives `2/e<20/27<0.743`. Taylor bounds also give `ln(3/2)<0.406` and `ln 2>0.693`: the positive Taylor sum through degree four for `e^0.406` exceeds `1.5`, while for `e^0.693` the degree-five sum plus the tail bound `0.693^6/(6!(1-0.693/7))` is below `2` (successive tail-term ratios are at most `0.693/7`). At the critical point the maximum simplifies to `(ln(3/2)+t)/(2 ln 2)`, which is less than `0.873/1.386<0.63`. The endpoint values are smaller. Therefore `max_S b_S(3)<0.63N`, proving the published constant with an explicit admissible quantizer and elementary calculus. The matrix lemma applies with `A=P G(S)^T G(S)`, which has rank at most `min{|S|,|S^c|}`, and normalized input covariance `B=K_S/P`, which has trace at most `|S|`; the case `P=0` is trivial.

The final paper prints `(R_1-0.63N,...,R_N-0.63N)` as a rate tuple without a positive-part symbol. Since operational rate tuples are nonnegative, that literal statement is not defined for low or zero coordinates. The signed-shift proof has a simple operational repair using an active-message version of the NNC packing argument. For any `Delta>Delta*`, choose `gamma>=e-1` with `Delta(gamma)<Delta`, define `A={k:R_k>Delta}`, and set `R'_k=(R_k-Delta)^+`. If A is empty, the zero tuple is achievable. Otherwise, the NNC error proof only needs cut inequalities for cuts U with `U intersect A != empty`: a wrong decoded message tuple has a nonempty set T of incorrect message coordinates, and T is contained in A; the covering and true-tuple typicality events are unchanged, while there is no wrong-message packing event on a cut with T empty. The original packing simplification makes the cut with the wrong-message set sufficient, and the inequalities below in fact hold for every valid U meeting A. For such U,

`R'(U)=R(U intersect A)-|U intersect A|Delta <= R(U)-Delta <= F_gamma(U)+Delta_o(U,gamma)-Delta < F_gamma(U)-Delta_i(U,gamma)`,

because `|U intersect A|>=1`, rates are nonnegative, and `b_U(gamma)<=Delta(gamma)<Delta`. Thus the clipped vector is achievable in closure, with each coordinate loss `R_k-R'_k=min{R_k,Delta}<=Delta`; letting `Delta` decrease to `Delta*` gives the final `0.63N` per-user bound. Zero-rate destination/source coordinates cause no exception: every active cut U has `U^c` containing the destination from the original cut condition, and cuts containing no active-message node have no wrong-message event. This active-message clipping argument is local to this note; it is not printed explicitly in the journal theorem.

Version comparison: the complete arXiv:1002.3188v2 paper (2010-03-12), Theorem 4 and Section V-A equations (22)–(25), states the sharper allowance `g_S=|S|/2+min{|S|,|S^c|}/2 log_2(2|S|)` and its displayed proof compares the cut right sides but does not select a vector. The final author-hosted IEEE paper (vol. 57, no. 5, pp. 3132–3152, May 2011; DOI 10.1109/TIT.2011.2119930) replaces that statement with a common `0.63N` coordinate shift and supplies the matrix lemma, Appendix D, and explicit signed vector construction described above. Its printed wording omits clipping; the active-message argument supplies the corrected nonnegative version. Both complete texts were read; the journal theorem is not attributed to the preprint wording.

Source locators: Lim–Kim–El Gamal–Chung, arXiv:1002.3188v2, Theorem 4 and Section V-A, equations (22)–(25), article pages 20–22; and the final author-hosted IEEE version, Theorem 4 and Section V-A equations (19)–(20), printed pages 3136 and 3141–3142, new Lemma 1 and proof in Appendix D, printed pages 3141–3147. The final-version metadata was cross-checked on Abbas El Gamal's author publications page, which lists IEEE TIT vol. 57, no. 5, pp. 3132–3152, May 2011.

## 3. Relay channel with output feedback: exact topology and cut-set capacity

### 3.1 Operational model

The discrete memoryless relay channel has finite alphabets, one source message M uniform on `[1:2^{nR}]`, source input X_i, relay input X_{1i}, destination output Y_i, and relay output Y_{1i}, with kernel `W(y_i,y_{1i}|x_i,x_{1i})` memoryless across i. The source and relay encoders in the full-feedback topology are

`X_i=f_i(M,Y^{i-1},Y_1^{i-1})`, `X_{1i}=f_{1i}(Y^{i-1},Y_1^{i-1})`.

The destination decodes M from Y^n; error is average over M and the channel. The destination output Y^{i-1} and relay output Y_1^{i-1} are noiselessly fed back causally to both transmitting terminals; the relay also observes its own Y_1^{i-1} in the ordinary relay model. The channel has no cost constraint. The exact capacity is

`C_FB=sup_{p(x,x_1)} min{I(X,X_1;Y), I(X;Y,Y_1|X_1)}`.

This feedback formula does not characterize the no-feedback relay channel.

### 3.2 Cut-set converse

Fano and the chain rule give

`nR<=I(M;Y^n)+n epsilon_n=sum_i I(M;Y_i|Y^{i-1})+n epsilon_n`.

Given `(M,Y^{i-1},Y_1^{i-1})`, both current channel inputs are fixed. Memorylessness gives `H(Y_i|M,Y^{i-1},Y_1^{i-1})=H(Y_i|X_i,X_{1i})`; therefore `H(Y_i|M,Y^{i-1})>=H(Y_i|X_i,X_{1i})`, while `H(Y_i|Y^{i-1})<=H(Y_i)`. Hence

`I(M;Y_i|Y^{i-1})<=H(Y_i)-H(Y_i|X_i,X_{1i})=I(X_i,X_{1i};Y_i)`.

Give the destination output sequence to a genie. This can only lower the conditional message entropy, so Fano also yields `nR<=I(M;Y^n,Y_1^n)+n epsilon_n`. With `O_i=(Y_i,Y_{1i})` and `O^{i-1}=(Y^{i-1},Y_1^{i-1})`,

`I(M;O_i|O^{i-1})=H(O_i|O^{i-1})-H(O_i|M,O^{i-1})`.

Here X_{1i} is a deterministic function of O^{i−1}, and memorylessness gives `H(O_i|M,O^{i-1})=H(O_i|X_i,X_{1i})`. Therefore

`I(M;O_i|O^{i-1})<=H(O_i|X_{1i})-H(O_i|X_i,X_{1i})=I(X_i;Y_i,Y_{1i}|X_{1i})`.

Introduce independent uniform Q on `[1:n]` and the time-shared variables `(X,X_1,Y,Y_1)=(X_Q,X_{1Q},Y_Q,Y_{1Q})`. The two bounds become `R<=I(X,X_1;Y|Q)` and `R<=I(X;Y,Y_1|X_1,Q)`. The two mutual informations are concave in the joint law p(x,x_1): the first by concavity of mutual information in its input law; the second because `H(Y,Y_1|X_1)` is concave in p(x,x_1) while `H(Y,Y_1|X,X_1)` is linear. Averaging the Q-conditioned laws therefore produces one law p(x,x_1) for which both mutual informations are at least the time-shared bounds. Let n tend to infinity to obtain the claimed single-letter outer bound.

### 3.3 Achievability through a degraded enhanced relay observation

Only the feedback link from destination Y to the relay is needed: the relay’s observation at the end of each block is then `(Y^n,Y_1^n)`. The source can ignore feedback. View this as a relay channel whose relay output is `Y_R=(Y,Y_1)` and whose destination output is Y. It is physically degraded because Y is a coordinate projection of Y_R. For any joint input law p(x,x_1), the standard block-Markov decode-forward construction achieves

`R<min{I(X;Y_R|X_1),I(X,X_1;Y)}=min{I(X;Y,Y_1|X_1),I(X,X_1;Y)}`.

To state the actual code interface, split the source's message into B−1 independent indices and let both source terminals know the full block-index schedule; the source needs no feedback. Draw relay codewords `x_1^n(m_{j-1})` iid p(x_1), and, for each relay index, draw source satellites `x^n(m_j|m_{j-1})` conditionally iid p(x|x_1). In block j the source sends the satellite for the new message m_j and old index m_{j-1}; the relay sends its codeword for the old message it decoded in block j−1. At the end of block j the relay observes both `Y^n(j)` through the feedback link and `Y_1^n(j)` locally, and decodes m_j by joint typicality conditioned on the known m_{j-1}; the wrong-satellite packing exponent is `I(X;Y,Y_1|X_1)`. The destination decodes backwards: with m_j already recovered from the later block, it uniquely decodes m_{j-1} from `Y^n(j)` using the pair `(x^n(m_j|m_{j-1}),x_1^n(m_{j-1}))`; the packing exponent is `I(X,X_1;Y)`. The true tuples are typical by the memoryless law and the finite-alphabet weak law. A union bound over the fixed B blocks makes error vanish under both strict inequalities; the rate factor `(B-1)/B` tends to one. Taking the supremum over p(x,x_1) matches the converse.

The full topology in §3.1 also feeds Y_1 back to the source and may feed both outputs to both senders. Those links are unnecessary for this code: the relay’s own Y_1 observation is local, it alone needs the destination-output feedback Y^past, and the source uses only its message and the public block schedule. Thus the theorem’s exact feedback benefit is tied to the destination-to-relay noiseless causal link, not a claim about no-feedback capacity.

Source locator: El Gamal–Kim, arXiv:1001.3404v3, Interactive Communication, “Relay Channel with Feedback,” Lecture 18, Theorem 5 and preceding topology diagram, lecture pages 18–43 through 18–44. The same source states the degraded-relay decode-forward formula used here in Lecture 17; the proof details are supplied by the local r2 relay-DF development and the explicit enhanced-output reduction above.


## Finite matrix proof for the gamma=3 certificate

Let A=P G^T G have rank r<=min(s,N-s), and B=K/P be positive semidefinite with trace<=s. In an eigenbasis of A, Hadamard gives det(I+A^(1/2)BA^(1/2))<=product_i(1+a_i b_i), where b_i>=0 and sum b_i<=s. The ratio to det(I+A/3) is at most product_i max(1,3b_i). If l factors exceed one, AM-GM bounds this product by (3s/l)^l. Since derivative of l ln(3s/l) is ln(3s/l)-1>=ln3-1>0 for l<=r<=s, the maximum is (3s/r)^r. The case r=0 has zero outer difference. Adding the quantization penalty s log2(3/2)/2 yields precisely the displayed cut certificate. This direct proof supplies the final paper matrix inequality at the chosen gamma without treating its citation as a logical proof.

## WTV symmetric worked point

For rho=1/2,d1=d2=1/2, direct substitution of lambda=(sqrt(13)-1)/3 gives t=(3+sqrt(13))/2 and (1+3lambda/4)/t=1/2. Symmetric rates s(lambda)/2=(1/4)log2(t) obey both individual inequalities because t<(1+lambda)^2; the sum is exactly s(lambda). These exact algebraic quantities replace a merely requested numerical substitution.


# Independently checked ETW one-bit development

The following local proof is transcribed from the revised r3 supplement. The auditor independently checked the worst-additive-noise proof, genie entropy cancellations, exact nine-facet projection, constructive switching alternatives, weak/mixed facet comparisons, clipped axes, and strong/very-strong cases. Source-reading statements remain attributed to r3.

# ETW Gaussian interference channel within one bit: proof development

This r3 supplement develops the weak- and mixed-interference part of the Etkin–Tse–Wang (ETW) theorem locally. The source is the complete author preprint, “Gaussian Interference Channel Capacity to Within One Bit,” Raul H. Etkin, David N. C. Tse, and Hua Wang, arXiv:cs/0702045v2 (9 February 2007), 52 PDF pages. I read the complete extracted text consecutively, lines 1–5921, including Sections 1–7, Appendix A, and references; the carrier contains 20,530 words and reaches the end of the article. The r5 source manifest reports 5,973 extracted lines, while its reading ledger and the read-only text file currently present under sources/r5 report 5,921; the full 52-page PDF and all article sections/references are present. I record this metadata discrepancy rather than changing r5-owned files or claiming hash recertification. PDF p. 34 was rendered to verify the mixed-case inner inequalities where the text extraction’s fraction layout is material.

The theorem is a constant-gap result, not an exact capacity formula in weak or mixed interference. All logarithms below are base 2 and rates are bits per complex channel use. The proof states its error, power, and code assumptions explicitly and separates the exact strong-interference capacity result.

## Channel, code, SNR/INR, and regimes

At each use the two-user complex baseband channel is

    Y1 = h11 X1 + h21 X2 + Z1,
    Y2 = h12 X1 + h22 X2 + Z2,

where messages M1,M2 are independent and uniform, encoders have no feedback, and Z1,Z2 are independent circular Gaussians CN(0,N0), independent across time and of the messages. Transmitter i has block power Pi; ETW’s code definition requires each length-n codeword to satisfy n^{-1}sum_t |x_i[t]|^2 <= Pi. Receiver i estimates only Mi. A rate pair is achievable if both average message error probabilities tend to zero as n tends to infinity. The region is the closure of achievable pairs. The local entropy bounds below are for the finite-block code distributions, including arbitrary temporal correlation and improper complex inputs.

Set

    a = SNR1 = |h11|^2 P1/N0,       b = SNR2 = |h22|^2 P2/N0,
    u = INR1 = |h21|^2 P2/N0,       v = INR2 = |h12|^2 P1/N0.

Thus u is user 2’s interference power at receiver 1; v is user 1’s interference power at receiver 2. The regimes are:

- weak: u < b and v < a;
- mixed: after swapping user labels if needed, u >= b and v < a;
- strong: u >= b and v >= a.

Equalities may be assigned to the stronger adjacent case. In the symmetric channel a=b=SNR and u=v=INR. The classical very-strong sufficient conditions are stronger than the strong-interference inequalities:

    u >= b(1+a),       v >= a(1+b).

The first pair makes receiver 1 able to decode user 2 while treating user 1 as noise; the second does the symmetric job. Strong interference has an exact MAC-intersection capacity region; very strong interference has the exact interference-free rectangle. Neither is described as an approximation.

For weak interference the one-bit inner scheme sets each private signal’s received interference at the other receiver to the smaller of one and the total INR:

    INRp1 = min(1,u),       INRp2 = min(1,v).

Here INRp1=|h21|^2 Pu2/N0 is user 2’s private power at receiver 1, and INRp2=|h12|^2 Pu1/N0 is user 1’s private power at receiver 2. If the corresponding cross gain is nonzero, Pu2=N0 INRp1/|h21|^2 and Pu1=N0 INRp2/|h12|^2; common powers are Pi-Pui. If a cross gain is zero, all of that user’s message is private. For mixed interference u>=b, v<a, the scheme instead uses INRp1=0 (user 2 sends only common information) and INRp2=min(1,v).

The precise one-bit conclusion is coordinatewise: if (R1,R2) is in the capacity region, then (max(0,R1-1),max(0,R2-1)) is achievable. When both shifted coordinates are positive, the compact seven-facet HK point is achieved by one of the three codebook laws constructed below: the satellite scheme for its nine-facet region, or one of the two single-cloud switches. If a coordinate clips to zero, use the corresponding single-user scheme by silencing that transmitter. This is a constant-gap statement; it does not say the weak/mixed capacity region is known exactly.

## Gaussian entropy and the required extremal-noise lemma

All entropies used below are finite. For every finite code, adding nondegenerate Gaussian noise makes each output vector and each genie-output vector a finite Gaussian mixture with a positive density, finite second moment, and finite differential entropy. For a real vector with positive covariance K, relative entropy to the Gaussian with the same mean and covariance gives

    h(U) <= (1/2) log2((2 pi e)^d det K).

For a complex scalar, the equivalent bound is h(U)<=log2(pi e E|U-EU|^2); the comparator is the circular Gaussian with that second moment. These follow by expanding D(P_U||G)>=0, not by assuming that the input or output is Gaussian.

The only Gaussian-extremal step needed in ETW’s weak-channel genie bounds is proved here. Let U be a real d-dimensional random vector with a density, finite entropy, finite mean, and positive definite covariance K. Let Z~N(0,tau I_d), tau>0, be independent of U. Let G be Gaussian with the same mean and covariance as U. Addition of Z is a Markov kernel, so KL data processing gives

    D(P_U||P_G) >= D(P_{U+Z}||P_{G+Z}).

For any vector V whose law has the same mean/covariance as a Gaussian G_V, direct expansion of the Gaussian log density gives D(P_V||P_{G_V})=h(G_V)-h(V): the quadratic cross-entropy term is d/2 for both. Apply this once to U,G and once to U+Z,G+Z. Rearranging proves

    h(U+Z)-h(U) >= h(G+Z)-h(G)
                  = (1/2) log2 det(I_d + tau K^{-1}).          (1)

This is the needed special worst-additive-noise inequality; it is not an appeal to the cited Diggavi–Cover theorem as a black box.

For a length-n complex vector, regard it as a real 2n-vector. If Z~CN(0,q I_n), its real covariance is tau I_{2n} with tau=q/2. Let lambda_1,...,lambda_{2n}>0 be the real covariance eigenvalues of U and V=tr K=sum lambda_j. The function f(lambda)=ln(1+tau/lambda) is decreasing and convex, since f''(lambda)=tau(2lambda+tau)/(lambda^2(lambda+tau)^2)>0. Jensen’s inequality in (1) gives

    h(U+Z)-h(U)
       >= (1/2) sum_j log2(1+q/(2lambda_j))
       >= n log2(1+nq/V).                                      (2)

If V<=nV0, then this is at least n log2(1+q/V0). This step allows arbitrary improper inputs and arbitrary temporal covariance; it uses the full real 2n-dimensional covariance, not a per-letter covariance assumption. In ETW’s application U already includes nondegenerate Gaussian noise, so K is positive definite and h(U) is finite. Zero cross-gain endpoints are obtained by continuity or directly by treating the absent link as no interference.

We also use a conditional-entropy bound that requires no Gaussian input. For complex scalars A,B and any complex beta,

    h(A|B)=h(A-beta B|B)<=h(A-beta B)
           <= log2(pi e E|A-beta B-E(A-beta B)|^2).

Choose beta to be the linear least-squares coefficient. If X1,X2 are independent, and the noises are independent CN(0,N0), then with

    Y1=h11 X1+h21 X2+Z1,       S1=h12 X1+Z2,

and coordinate powers P1t=E|X1[t]-EX1[t]|^2, P2t similarly, this gives

    h(Y1[t]|S1[t])
      <= log2(pi e [N0+|h21|^2 P2t
                  + |h11|^2 P1t N0/(N0+|h12|^2 P1t)]).         (3)

The symmetric formula holds for h(Y2|S2). The bracket is increasing and concave in each power: P/(N0+cP) is increasing and concave, and log is increasing and concave. Thus Jensen and the block power constraints replace P1t,P2t by P1,P2. Ordinary output entropy bounds similarly follow from KL to the matching Gaussian and power averaging.

## Genie and MAC outer bounds

### The two-genie sum bound

Give receiver 1 S1^n=h12 X1^n+Z2^n and receiver 2 S2^n=h21 X2^n+Z1^n. Fano, independence of messages/codewords, and the channel equations give

    n(R1+R2)
      <= h(Y1^n|S1^n)+h(Y2^n|S2^n)-h(Z1^n)-h(Z2^n)+n epsilon_n,

where epsilon_n->0. For example, h(Y1^n|X1^n,S1^n)=h(S2^n) and h(Y2^n|X2^n,S2^n)=h(S1^n), so the genie-signal entropies cancel. Conditioning reduces entropy, so the conditional terms are at most the sum of their single-letter versions. Apply (3), Jensen, and the power constraints, then subtract the Gaussian noise entropies. The result is

    R1+R2 <= log2(1+u+a/(1+v)) + log2(1+v+b/(1+u)).           (4)

This holds for every Gaussian IC, not only the weak regime.

### One-sided genie sum bound

Assume v<a. Give X2^n to receiver 1. Fano yields

    n(R1+R2)
      <= I(X1^n;Y1^n|X2^n)+I(X2^n;Y2^n)+n epsilon_n.

Expanding the first mutual information and scaling the Gaussian-noise terms gives, with

    U=h11 h12 X1^n+h12 Z1^n,
    Z^n~CN(0,(|h11|^2-|h12|^2)N0 I_n),

the bound

    n(R1+R2)
      <= h(Y2^n)-h(Z1^n)+h(U)-h(U+Z^n)
           -n log2|h12|^2+n log2|h11|^2+n epsilon_n.

The variance gap is positive because v<a. The block vector U has total centered energy at most n|h12|^2 N0(1+a). By (2),

    h(U+Z^n)-h(U) >= n log2(1+(|h11|^2-|h12|^2)/(|h12|^2(1+a))).

Combine this with h(Y2^n)<=n log2(pi e N0(1+v+b)) and h(Z1^n)=n log2(pi e N0). The scale factors cancel to give

    R1+R2 <= log2(1+a)+log2(1+b/(1+v)).                        (5)

Swapping users gives, when u<b,

    R1+R2 <= log2(1+b)+log2(1+a/(1+u)).                        (6)

### Weak-interference outer polytope

Point-to-point genie removal gives R1<=log2(1+a), R2<=log2(1+b). Combining (4)–(6) with two clone-receiver/genie bounds gives the following weak-interference outer region when u<b and v<a:

    R1 <= O1 := log2(1+a)
    R2 <= O2 := log2(1+b)
    R1+R2 <= O3 := log2(1+a)+log2(1+b/(1+v))
    R1+R2 <= O4 := log2(1+b)+log2(1+a/(1+u))
    R1+R2 <= O5 := log2(1+u+a/(1+v))+log2(1+v+b/(1+u))
    2R1+R2 <= O6 := log2(1+a+u)+log2(1+v+b/(1+u))
                              +log2((1+a)/(1+v))
    R1+2R2 <= O7 := log2(1+b+v)+log2(1+u+a/(1+v))
                              +log2((1+b)/(1+u)).             (7)

For clarity, the 2R1+R2 proof decodes user 1 at two identical receiver copies and user 2 at a third. A genie gives X2 to one user-1 receiver and S2 to receiver 2. The Fano/entropy cancellation leaves

    sum_t [h(Y1t)+h(Y2t|S2t)-2h(Z1t)]
       -h(h12 X1^n+Z2^n)+h(h11 X1^n+Z1^n)+n epsilon_n.

The first two output terms use Gaussian maximum entropy and (3); the last difference uses (2) with variance gap |h11|^2N0-|h12|^2N0. It gives O6. Swapping user labels gives O7. Thus (7) is a bound on arbitrary code distributions, not only Gaussian codes.

### Mixed-interference outer polytope

Assume u>=b and v<a. The v<a one-sided genie still gives O3, and (4) with the strong cross cut gives the MAC bound O8=log2(1+a+u). A clone receiver with genies S1, S2, and X1, followed by (3) and (2), gives

    R1+2R2 <= O9
       := log2(1+b+v)+log2(1+u+a/(1+v))+log2(1+b/(1+u)).

Thus the mixed outer region is

    R1<=log2(1+a),  R2<=log2(1+b),
    R1+R2<=O3,  R1+R2<=O8,  R1+2R2<=O9.                       (8)

The O8 cut is valid because with M1 known, the cross channel from user 2 to receiver 1 has at least the direct-channel SNR of receiver 2 (u>=b). After subtracting the known X1 waveform, receiver 2’s observation can be simulated from receiver 1’s by attenuation and independent Gaussian noise. Hence H(M2|Y1^n,M1)<=H(M2|Y2^n,M1)=o(n). Receiver 1 already decodes M1. Fano at receiver 1 and the Gaussian MAC entropy bound yield R1+R2<=log2(1+a+u).

For O9 the genie proof expands Fano at two receiver-2 copies and one receiver-1 copy. After cancellation it has the form

    sum_t [h(Y1t|S1t)+h(Y2t)+h(Y2t|S2t,X1t)
           -h(Z1t)-2h(Z2t)] + n epsilon_n.

The three output entropies are bounded respectively by (3), scalar Gaussian maximum entropy, and (3) after revealing X1:

    Var-estimate(Y1|S1) <= N0+|h21|^2P2
                               +|h11|^2P1N0/(N0+|h12|^2P1),
    E|Y2-EY2|^2 <= N0+|h12|^2P1+|h22|^2P2,
    Var-estimate(Y2|S2,X1) <= N0+|h22|^2P2N0/(N0+|h21|^2P2).

Subtract the noise entropies and express gains using a,b,u,v to obtain O9.

## HK inner region and explicit noise-level inequalities

Use the conditional-satellite Gaussian construction. For each user let Ci be a cloud variable and Xi the full transmitted symbol, with independent user laws P(C1,X1)P(C2,X2). In the Gaussian specialization, Ci is the common Gaussian layer and Xi=Ci+Vi, where Vi is the private Gaussian layer. The message is split into a cloud rate ci and a satellite rate pi, Ri=ci+pi. For each cloud index generate C_i^n iid; for every cloud/satellite index pair generate X_i^n conditionally iid according to P(Xi|Ci). Receiver 1 uniquely decodes its own pair and nonuniquely decodes the other user's cloud; receiver 2 does the symmetric operation. A wrong other-user cloud by itself is not an error.

For this code, define

    a1 = I(X1;Y1|C1,C2),   e1 = I(X1,C2;Y1|C1),
    d1 = I(X1;Y1|C2),      g1 = I(X1,C2;Y1),
    a2 = I(X2;Y2|C1,C2),   e2 = I(X2,C1;Y2|C2),
    d2 = I(X2;Y2|C1),      g2 = I(X2,C1;Y2).

The error packing tests at receiver 1 are exactly

    p1 < a1,       p1+c2 < e1,
    R1 < d1,       R1+c2 < g1,                             (14a)

and at receiver 2 they are

    p2 < a2,       p2+c1 < e2,
    R2 < d2,       R2+c1 < g2.                             (14b)

For receiver 1, the four tests cover: a wrong satellite with the true own cloud and true other cloud; a wrong satellite and wrong other cloud with the true own cloud; a wrong own pair with the true other cloud; and a wrong own pair together with a wrong other cloud. The corresponding numbers of competitors are at most 2^(np1), 2^(n(p1+c2)), 2^(nR1), and 2^(n(R1+c2)); their information-density exponents are respectively a1,e1,d1,g1. The event that only the other cloud is wrong is accepted as success for user 1. The same argument at receiver 2 gives (14b). For each wrong tuple, the typicality-test probability is at most 2^{-n(I-delta)} by the likelihood-ratio identity; the finite union bound vanishes under the strict inequalities. The transmitted tuple is jointly typical with probability tending to one. For these Gaussian laws, the information densities are quadratic with finite second moments, so the required laws of large numbers hold. Thus there is a deterministic codebook pair with both average error probabilities tending to zero. Rate-boundary equalities are obtained by closure; a zero-rate or zero-power cloud/satellite is deleted as a constant layer.

Here is the exact private-rate projection of (14), including its additional individual facets. Substitute ci=Ri-pi and set

    L1=max(0,R1+R2-g2),   U1=min(a1,R1),
    L2=max(0,R1+R2-g1),   U2=min(a2,R2).

Then (14) is feasible precisely when R1<=d1, R2<=d2, L1<=U1, L2<=U2 and the attainable interval for delta=p1-p2,

    [L1-U2, U1-L2],

intersects the interval imposed by the two mixed subset tests,

    [R1-e2, e1-R2].

This is a direct two-variable elimination, not a claimed seven-facet projection. If delta is in the intersection, set p1=max(L1,L2+delta), p2=p1-delta, and ci=Ri-pi; the interval endpoints ensure all four private/common rates are nonnegative and satisfy (14). Expanding the endpoint conditions gives the exact nine-facet region:

    R1 <= d1,                 R1 <= a1+e2,
    R2 <= d2,                 R2 <= a2+e1,
    R1+R2 <= a1+g2,
    R1+R2 <= a2+g1,
    R1+R2 <= e1+e2,
    2R1+R2 <= g1+a1+e2,
    R1+2R2 <= g2+a2+e1.                                 (15)

The endpoint expansion also produces R1+R2<=g1+e2 and R1+R2<=g2+e1; they are redundant because e1>=a1 and e2>=a2. The inequalities e1>=a1 and e2>=a2 follow by expanding e1 and e2 with the chain rule. This proves both necessity and sufficiency of (15) for a feasible satellite/cloud split.

The compact seven-facet HK region is a union over codebook laws, not the projection of (14) for one fixed law. The CMG author-manuscript Theorem 2, equations (9)–(16), is an additional source cross-check; the local switching proof below supplies the argument. Its complete 14-page reading is attributed to r3 in researchers/r3/source-manifest.json, source_id chong-motani-garg-elgamal-han-kobayashi-region-author-manuscript. For the original law P(C1,X1)P(C2,X2), its seven bounds are

    R1 <= d1,                 R2 <= d2,
    R1+R2 <= g1+a2,
    R1+R2 <= a1+g2,
    R1+R2 <= e1+e2,
    2R1+R2 <= g1+a1+e2,
    R1+2R2 <= g2+a2+e1.                                 (16)

If a pair in (16) also satisfies R1<=a1+e2 and R2<=a2+e1, it belongs to the nine-facet satellite region (15). If R1>a1+e2, use the following switched law instead. The bounds R1+R2<=a1+g2 and 2R1+R2<=g1+a1+e2 in (16) imply

    R2 < g2-e2 = I(C2;Y2),       R1+R2 < g1,
    R1 <= d1.

The identity g2-e2=I(C2;Y2) follows from the chain rule and the Markov relation C2-(C1,X2)-Y2. Set C1 constant, generate user 1's full codewords iid from the original marginal P(X1), and keep user 2's cloud law P(C2) with one conditional X2 prefix drawn from P(X2|C2) and fixed per cloud codeword. Put all of user 2's message rate in the C2 index. Receiver 2 decodes C2 from the marginal channel P(Y2|C2), which supports every R2<I(C2;Y2). Receiver 1 uniquely decodes X1 and nonuniquely tests C2 under P(X1,C2,Y1), marginalizing the conditional X2 prefix. A wrong X1 with the true C2 has exponent I(X1;Y1|C2)=d1; a wrong X1 and wrong C2 have exponent I(X1,C2;Y1)=g1. A wrong C2 alone is not an error. Hence R1<d1 and R1+R2<g1 suffice. The prefix and both input marginals retain the original Gaussian law.

If R2>a2+e1, the symmetric switch sets C2 constant, generates user 2's codewords iid from P(X2), and assigns user 1's full message to C1 with one conditional X1 prefix per cloud word. From R1+R2<=a2+g1 and R1+2R2<=g2+a2+e1 one obtains R1<g1-e1=I(C1;Y1), R1+R2<g2, and R2<=d2. Receiver 1 decodes C1 at its single-user mutual information I(C1;Y1); receiver 2 uniquely decodes X2 and nonuniquely tests C1, with packing thresholds d2 and g2. Thus this switch also achieves the point. These three alternatives prove the seven-facet union constructively; they do not assert that the original fixed split alone attains every point of (16).

For independent Gaussian layers, the compact-region mutual informations in (16) are directly evaluable. Write vp=INRp2 and up=INRp1. When v>0, let ap=a vp/v and ac=a-ap; when v=0, the selected split has vp=0, so set ap=a, ac=0. When u>0, let bp=b up/u and bc=b-bp; when u=0, the selected split has up=0, so set bp=b, bc=0. The received layer powers at receiver 1 are (ap,ac,u-up), with noise variance normalized to 1+up; at receiver 2 they are (bp,v-vp,bc), with normalized noise 1+vp. Thus every MI in (15)–(16) is obtained from the corresponding Gaussian MAC or marginal-channel formula log2(1+sum(signal powers)/(noise plus untreated private power)). Setting zero-power layers constant gives the no-common/no-private cases directly. The finite switching alternatives above keep the same per-user Gaussian marginals, so the resulting compact bounds evaluate to the inner formulas (9)–(13).

For v,u>=1, the noise-level choice INRp1=INRp2=1 in this evaluated projection yields the following inner facets:

    R1 <= log2(2+a)-1,                 R2 <= log2(2+b)-1,
    R1+R2 <= B1 := log2(a+2v)+log2(1+(1+b)/v)-2,
    R1+R2 <= B2 := log2(b+2u)+log2(1+(1+a)/u)-2,
    R1+R2 <= B3 := log2(1+u+a/v)+log2(1+v+b/u)-2,
    2R1+R2 <= B4 := log2(1+a+u)+log2(1+v+b/u)
                              +log2(2+a/v)-3,
    R1+2R2 <= B5 := log2(1+b+v)+log2(1+u+a/v)
                              +log2(2+b/u)-3.                 (9)

For u<1<=v, the choice INRp2=1, INRp1=u gives the simplified inner region

    R1 <= log2(1+a/(1+u)),             R2 <= log2(2+b)-1,
    R1+R2 <= C1 := log2(v+a/(1+u))+log2(1+(1+b)/v)-1,
    2R1+R2 <= C2 := log2(1+a+u)+log2(1+v+b)
                            +log2(1+u+a/v)-log2(2(1+u)^2).   (10)

The R1+2R2 facet is redundant: its bound is exactly the sum of the R2 and R1+R2 bounds in (10). The case v<1<=u is the user-swapped version.

For u,v<1, both private layers use all their power; treating the other signal as noise gives the inner rectangle

    R1 <= log2(1+a/(1+u)),             R2 <= log2(1+b/(1+v)). (11)

For mixed interference u>=b, v<a and v>=1, use INRp1=0, INRp2=1. The inner facets are

    R1 <= log2(1+a),                   R2 <= log2(2+b)-1,
    R1+R2 <= D1 := log2(v+a)+log2(1+(1+b)/v)-1,
    R1+R2 <= D2 := log2(1+a+u),
    R1+R2 <= D3 := log2(1+u+a/v)+log2(1+v)-1,
    2R1+R2 <= D4 := log2(1+v)+log2(1+a+u)
                               +log2(1+a/v)-1,
    R1+2R2 <= D5 := log2(1+b+v)+log2(1+u+a/v)-1.             (12)

For mixed v<1, the same choice INRp1=0, INRp2=v reduces to the treating-interference-as-noise rectangle

    R1 <= log2(1+a),                   R2 <= log2(1+b/(1+v)). (13)

All three Gaussian codebook laws can meet ETW’s per-message block-power convention. Scale every cloud and conditional-satellite variance so that the marginal transmitted variance is P_i'=(1-eta)P_i. In each law, every actual length-n waveform X_i^n indexed by a message (or message pair) has iid marginal CN(0,P_i') coordinates; in a switched law this follows by drawing one conditional prefix X_i^n per cloud index and keeping it fixed in the selected codebook. Thus the probability q_i(n) that a uniformly selected codeword exceeds nP_i tends to zero by the weak law. For every message-indexed waveform with energy greater than nP_i, replace its actual transmitted waveform by zero, while retaining the original codebook and decoder tests. If either transmitter's selected message uses a replaced word, count the event as an error; otherwise the original random-coding analysis is unchanged. The ensemble average error increases by at most q_1(n)+q_2(n). There is a deterministic codebook choice whose sum of error and bad-word fractions is no larger than its ensemble expectation. For any compact-region rate point, first move to a strict interior point of the relevant one of the three coding laws; continuity permits eta>0 small enough to preserve all strict mutual-information inequalities. Let n grow and then take closures. This proves average-error achievability under the per-codeword power rule and makes no maximal-error claim.

## One-bit inclusion: explicit facet comparisons

All quantities in the following differences use the definitions in (7)–(13), and logs remain base 2. If both outer-region coordinates satisfy R1,R2>=1, subtracting (1,1) lowers a facet c1 R1+c2 R2 by c1+c2. Thus it is enough to compare each inner facet with an outer bound on the same functional and show its gap is at most that amount. The comparisons below are strict (the limiting equality cases follow by closure). If one coordinate is below one, handle that boundary separately: for example if R1<1, the clipped target is (0,(R2-1)^+); the outer individual bound R2<=log(1+b) implies this target is achieved by silencing user 1 and using the ordinary user-2 Gaussian channel. The symmetric argument handles R2<1, and if both are below one the origin is achievable. This establishes the coordinatewise-clipped version without assuming that a fixed-split HK polytope is downward closed at its axes.

### Weak interference, u,v>=1

Use the inner region (9). For the two individual facets,

    O1 - (log(2+a)-1) = 1+log((1+a)/(2+a)) < 1,
    O2 - (log(2+b)-1) = 1+log((1+b)/(2+b)) < 1.

Pair O3 with B1. Cancelling the b-dependent terms gives

    O3-B1 = 2+log( v(1+a)/((1+v)(a+2v)) ) < 2,

because (1+v)(a+2v)-v(1+a)=a+v+2v^2>0. Interchanging users gives O4-B2<2. Pair O5 with B3:

    O5-B3 = 2
       +log((1+u+a/(1+v))/(1+u+a/v))
       +log((1+v+b/(1+u))/(1+v+b/u)) < 2,

since both ratios are below one. Finally,

    O6-B4 = 3
       +log((1+v+b/(1+u))/(1+v+b/u))
       +log((1+a)/((1+v)(2+a/v))) < 3.

The first ratio is below one because u>0; for the second, the denominator minus numerator is 1+2v+a/v>0. The user-swapped calculation gives O7-B5<3. These are exactly the required facet shifts for (9).

### Weak interference, u<1<=v

Use (10). The individual gaps are

    O1 - log(1+a/(1+u)) = log(1+au/(1+u+a)) < log(1+u) < 1,
    O2 - (log(2+b)-1) = 1+log((1+b)/(2+b)) < 1.

For C1, pair with O3 and cancel the b terms:

    O3-C1 = 1+log( v(1+a)/((1+v)(v+a/(1+u))) ) < 2.

Indeed,

    2(1+v)(v+a/(1+u))-v(1+a)
      = v+2v^2+a(2(1+v)/(1+u)-v) > 0,

since u<1 implies 2(1+v)/(1+u)>1+v. For C2, pair with O6:

    O6-C2 = log((1+v+b/(1+u))/(1+v+b))
       +log((1+a)/((1+v)(1+u+a/v))) +log(2(1+u)^2) < 3.

The first ratio is at most one; the denominator of the second ratio exceeds its numerator by v+u+uv+a/v>0; and 2(1+u)^2<8. The inner R1+2R2 inequality is redundant because its right side is the sum of the inner R2 and R1+R2 right sides. The case v<1<=u follows by exchanging users.

### Weak interference, u,v<1

The inner region is the rectangle (11). Its two outer-to-inner individual gaps are

    O1-log(1+a/(1+u)) = log(1+au/(1+u+a)) < log(1+u) < 1,
    O2-log(1+b/(1+v)) = log(1+bv/(1+v+b)) < log(1+v) < 1.

Thus every outer point shifted by one in each coordinate satisfies the rectangle constraints.

### Mixed interference, u>=b, v<a, and v>=1

Use (12). The individual gaps satisfy O1-log(1+a)=0 and O2-(log(2+b)-1)<1. For D1,

    O3-D1 = 1+log( v(1+a)/((1+v)(v+a)) ) < 1,

because (1+v)(v+a)-v(1+a)=v^2+a>0. D2 equals O8. For D3,

    O8-D3 = 1+log((1+a+u)/((1+v)(1+u+a/v))) < 1,

because the denominator minus numerator is v+uv+a/v>0. Every point in the outer region also has 2R1+R2<=O1+O8; hence

    (O1+O8)-D4 = 1+log((1+a)/((1+v)(1+a/v))) < 1 < 3,

where the denominator minus numerator is v+a/v>0. Finally,

    O9-D5 = 1
       +log((1+u+a/(1+v))/(1+u+a/v))
       +log(1+b/(1+u)) < 2 < 3.

Here the first ratio is at most one since v>=1, and b<=u makes the last logarithm strictly less than one. These bounds cover the sum facets and the 2R1+R2 and R1+2R2 facets of (12).

### Mixed interference with v<1

Use rectangle (13). The R1 outer and inner bounds agree. For R2,

    O2-log(1+b/(1+v)) = log(1+bv/(1+v+b)) < log(1+v) < 1.

This completes the weak- and mixed-regime one-bit comparison under the average-error definition above. For positive shifted coordinates, (9)–(13) evaluate the compact seven-facet region, achieved by the base satellite code or one of the two cloud switches; the formulas are not asserted to be the projection of a single fixed split. When a coordinate clips to zero, use the corresponding single-user degenerate scheme. The result does not identify the weak/mixed capacity region exactly.

## Exact strong and very-strong regimes

When u>=b and v>=a, receiver 1 first runs its own decoder for M1. On the event that M1 is correct, it subtracts h11X1 and obtains h21X2+Z1. Since u>=b, it can attenuate this observation and add independent Gaussian noise to synthesize h22X2+Z2, then add back its known h12X1 waveform to reproduce receiver 2’s original observation and run receiver 2’s decoder for M2. The symmetric simulation works at receiver 2 because v>=a. Each receiver can therefore decode both messages with vanishing average error. Fano at each receiver and the Gaussian MAC entropy bound give the intersection of the two MAC regions. Their individual cross-link constraints are redundant under these inequalities, leaving the exact region

    R1 <= log(1+a),     R2 <= log(1+b),
    R1+R2 <= log(1+a+u),
    R1+R2 <= log(1+b+v).

Independent Gaussian MAC codebooks achieve this intersection; the same strict-power-slack and bad-codeword replacement argument used above enforces the per-codeword power convention in the closure. This is an exact strong-interference statement, not a one-bit approximation.

Under the stronger very-strong conditions u>=b(1+a) and v>=a(1+b), receiver 1 can decode user 2 while treating X1 as noise because u/(1+a)>=b, and receiver 2 can decode user 1 while treating X2 as noise because v/(1+b)>=a. For achievability, use independent iid Gaussian code ensembles: when decoding the other user, averaging over the independent Gaussian codebook/message of the local user gives iid Gaussian noise of variance N0 plus that local user's received power. The single-user Gaussian random-coding bound therefore supports each interferer at its own direct-channel rate. After subtracting the decoded codeword, each receiver decodes its intended message over the direct Gaussian channel. A union bound makes both error probabilities vanish; strict power slack and the earlier bad-codeword replacement enforce the per-codeword constraint in the closure. The exact capacity region is the rectangle R1<=log(1+a), R2<=log(1+b); the point-to-point converse and this successive-decoding construction match. All strong/very-strong assertions here use average error and fixed block length.

Boundary convention for the canonical integration: direct-rate equalities follow by closure of strict achievable rates. Delete constant zero-power/zero-rate layers and their empty wrong-index classes before imposing strict packing inequalities; this avoids requiring 0<0 for an absent layer. In each switched scheme the conditional prefix is drawn independently per cloud word and then fixed with the codebook, and the two receiver ensemble error estimates and per-message bad-word fractions are summed before deterministic selection.
