# Finite-cylinder critical threshold without Countable Choice

Research only, same run and source-reading limits as `local-proof.md`. This
corollary proves a numerical finite-volume threshold using ONLY finite FK
identities, deterministic real limits, the finite constructions in §§1–4 of
that manuscript, and the parent's separately proved numerical pressure
exception lemma. It neither constructs a countably additive FK law nor uses
its existence. Countable Choice, the compactness/extension supplier, the
independent animal argument, and an infinite-event probability are NOT inputs.

## Exact definitions and finite suppliers

Fix real q>=1. Let phi^b_{p,n} be the finite FK law on the actual edges of
Lambda_n=[-n,n]^2 intersect Z², with b=0 free or b=1 wired boundary partition.
Connections always use actual open edges; artificial identifications are not
paths. For a fixed finite edge set F and any event A depending only on F define

    pi_p^b(A) = lim_{n->infinity} phi^b_{p,n}(A).              (C1)

The definition is numerical. For an all-open coordinate event the limit exists
by the finite spatial Markov/boundary comparison: free probabilities increase
and wired probabilities decrease as n grows. Every atom on F, and then every
A, is a finite inclusion-exclusion sum of these all-open probabilities. Thus
(C1) exists for EVERY cylinder event, with the finite additivity, positivity,
normalization, and restriction-consistency identities inherited from finite
sums. No countable additivity or Borel extension is asserted. For a function
f on the finitely many configurations of F, define

    E_pi_p^b f = sum_{eta in {0,1}^F} f(eta) pi_p^b({omega_F=eta}).

This is a finite sum and is the limit of the corresponding finite expectations.
Parameter/boundary monotonicity, translation and square-lattice symmetries,
and FKG for a fixed finite list of cylinder functions pass to these limits.
For translation invariance, sandwich a translated box between the two centered
boxes whose radii differ by the fixed translation's norm; the all-open limits
coincide and finite inclusion-exclusion gives the other cylinders. None of
these arguments selects a convergent subsequence.

The torus-RSW and maximum-influence suppliers must have their complete finite
proofs. Their finite differential amplification and the bounded-translate
covering from §1 of `local-proof.md` imply, for p>p_sd and any fixed alpha>1,
finite wired annulus estimates

    phi^1_{p,r_{k+2}}(A_k) >= 1-d_k,
    r_k=floor(alpha^k), d_k=C exp(-epsilon k),                (C2)

for k large, with A_k the surrounding-circuit/outward-connection cylinder event
specified there. Its exact five rectangles have a=r_k+2, b=r_{k+1}-2,
R=r_{k+2}: the two vertical side strips [a,b]x[-b,b], [-b,-a]x[-b,b], the top
and bottom horizontal strips [-b,b]x[a,b], [-b,b]x[-b,-a], and the horizontal
connector [-R,R]x[-b,b]. Only finitely many grid crossings and finite FKG are
used to prove (C2).

The other input is numerical pressure equality: there is an at most countable
D_q such that pi_u^0 and pi_u^1 agree on ALL cylinder events for u not in D_q.
It must be proved from finite partition sums and convex real limits, without
using this corollary. Finite planar duality plus deterministic cylinder limits
gives the NUMERICAL identity

    pi_t^1(dual-complement cylinder E) = pi_{t*}^0(E),
    t*/(1-t*)=q(1-t)/t,                                      (C3)

after the fixed translation identifying the dual square lattice with Z².
The one-cell change in finite outer box boundaries is handled by the same
finite boundary/domain sandwich used for (C1); no infinite state is needed.

## 1. Exact identification of the two numerical limits

Let D_r be the event that 0 has an actual open path inside Lambda_r to its
vertex boundary, and put

    a_n(p)=phi^1_{p,n}(D_n),     L(p)=lim_{n->infinity}a_n(p).

For m>=n, reaching boundary Lambda_m entails reaching boundary Lambda_n,
and restriction of the wired law on Lambda_m is dominated by wired Lambda_n.
Therefore

    a_m(p) <= phi^1_{p,m}(D_n) <= a_n(p).

Thus a_n decreases and L=inf_n a_n exists in [0,1]. For m>=r, the same argument
gives a_m<=phi^1_{p,m}(D_r)<=a_r. Let m tend to infinity:

    L(p) <= pi_p^1(D_r) <= a_r(p).

Taking the infimum over r and using inf_r a_r=L proves the exact identity

    L(p) = inf_{r>=1} pi_p^1(D_r).                            (C4)

This is a pair of real-limit inequalities, not an interchange of two limits,
a measure continuity theorem, or an interpretation of an infinite event.

## 2. Positive L above the self-dual point using finite chains only

Fix p>p_sd. Choose N large so sum_{k>=N}d_k<=1/2 and d_k<1/2. The sum is an
explicit convergent geometric series of real upper bounds. The finite stopped
outermost-circuit comparison in §2 of `local-proof.md` (with the stopping
certificate added there) gives for n>=m>=N

    phi^1_{p,r_{n+2}}(intersection_{k=N}^m A_k)
       >= product_{k=N}^n(1-d_k) >= 1-sum_{k=N}^n d_k >=1/2. (C5)

There is NO limit m->infinity and no infinite intersection in this assertion.
Fix a deterministic nearest-neighbor tree containing every vertex of
Lambda_{r_{N+1}} and let T be the event that its M edges are open. The finite
single-edge lower bound rho=p/[p+q(1-p)] gives phi(T)>=rho^M in every sufficiently
large finite box. Finite FKG with the increasing finite intersection in (C5)
therefore gives

    phi^1_{p,r_{n+2}}(T and intersection_{k=N}^m A_k)
       >= rho^M/2 =:delta>0.                                (C6)

For any prescribed radius R choose ONE finite m>=N with r_{m+2}>R. On the
event in (C6), the tree reaches the innermost circuit; the outward path in
A_k intersects the next surrounding circuit, so the finite chain connects
0 to boundary Lambda_{r_{m+2}} and hence realizes D_R. Small R inside the tree
are covered as well. For each fixed R,m let n tend to infinity in (C6).
Since D_R is a cylinder event, its deterministic limit (C1) yields

    pi_p^1(D_R)>=delta for EVERY R, with the SAME delta.

Now (C4) gives L(p)>=delta>0. The proof uses no asserted probability of a
path to infinity and makes no countable selection of finite witnesses: for a
given R the least m with r_{m+2}>R is an explicitly specified integer.

## 3. Vanishing L below the self-dual point using finite Hamming sums

Fix p<p_sd and choose t in (p,p_sd) with t* outside D_q. Such a SINGLE choice
from a real interval minus a given countable set requires no Countable Choice:
from an enumeration of the exceptional set one can use nested closed rational
subintervals, at step j avoiding its j-th point and shrinking lengths to zero,
with the first admissible pair of rational endpoints in a fixed enumeration.
Their unique intersection point lies in (p,p_sd). Apply this construction to
the countable preimage of D_q under the explicitly given dual bijection.

Take alpha=2; no varying alpha or cluster-size moment is required. Since
t*>p_sd, (C5), now at the dual parameter t*, proves for every FINITE J>=N

    pi^1_{t*}(intersection_{k=N}^J A_k) >=1/2,                (C7)

where N was enlarged until the geometric tail is at most 1/2. Numerical
free/wired equality at t* and (C3) transfer (C7) to the corresponding finite
intersection of dual-open circuits in the primal wired cylinder values pi_t^1.
Only these finite intersections are used; no probability is assigned to their
infinite intersection. The outward connectors may be forgotten, since the
circuit event is implied by A_k.

Let H_n be the minimum number of closed edges on a primal path from 0 to
boundary Lambda_n, equivalently the finite Hamming distance to D_n. For each
n choose the largest J whose circuits lie within Lambda_{n-2}, allowing the
fixed dual-lattice translation in this cutoff. Use only every other annulus,
so their circuits have pairwise disjoint edge supports. Finite Jordan separation
forces every such path to use one distinct closed edge for each of these
circuits. The number of retained annuli is at least
(log n)/(2 log 2)-O(N+1). In the finite sum defining E_pi_t^1 H_n, the event in
(C7) has weight at least 1/2; all other terms are nonnegative. Hence for all
sufficiently large n

    E_pi_t^1 H_n >= (log n)/(8 log 2).                        (C8)

For absolute clarity, this inequality is verified on the common finite edge
set supporting H_n and the finitely many dual circuits; it is simply a finite
sum of pointwise nonnegative inequalities with the finitely additive cylinder
atom weights from (C1). An infinite-law expectation has not appeared.

The finite Hamming inequality proved in §3 of `local-proof.md` says for a
finite wired outer box Lambda_m, m>n,

    phi^1_{p,m}(D_n)
       <= exp[-4(t-p) E_{phi^1_{t,m}} H_n].

Let m tend to infinity. The left side is (C1), and the expectation is a fixed
finite sum with a deterministic limit. Combining with (C8) gives

    pi_p^1(D_n) <= n^{-eta},      eta=(t-p)/(2 log 2)>0,

for sufficiently large n. In particular pi_p^1(D_n)->0, and (C4) gives L(p)=0.
No animal theorem, coupling kernel, probabilistic strong law, Fatou lemma,
countable additivity, or Countable Choice is used in this numerical proof.

## 4. Numerical critical point and the finite Edwards–Sokal consumer

Parameter monotonicity passes to every a_n, hence to L. We have proved

    L(p)=0 for p<p_sd,          L(p)>0 for p>p_sd,
    inf{p in (0,1):L(p)>0}=p_sd.

No value of L(p_sd) is claimed. The set whose infimum occurs here is nonempty
because every p>p_sd belongs to it; there is no hidden endpoint convention.

If Q is an integer >=2 and a separately proved FINITE Edwards–Sokal identity
with fixed boundary color gives the finite order parameter

    m_n(p)=(1-1/Q) phi^1_{p,n}(0 connected boundary Lambda_n),

then its deterministic limit is exactly m(p)=(1-1/Q)L(p). It vanishes below
p_sd and is strictly positive above p_sd. This inference preserves a numerical
Potts/Ising threshold statement without constructing an infinite FK or spin
probability measure. The finite identity, the chosen Hamiltonian parameter map,
and the normalization convention remain obligations of that consumer's actual
suppliers; this corollary does not invent them. Full FK Borel-law existence and
full subcritical exponential connectivity remain separately stated under the
actual Countable Choice premise of their extension/coupling route.
