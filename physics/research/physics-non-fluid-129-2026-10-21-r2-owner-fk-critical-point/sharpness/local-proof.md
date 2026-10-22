# Wired amplification and subcritical exponential decay: research proof

Run: physics-non-fluid-129-2026-10-21-r2. Research only; no production carrier,
manifest, contract, acceptance, or native control is changed by this document.
The full-law proof below assumes the Axiom of Countable Choice, as does its
actual finite-alphabet measure-extension supplier. This resolves the
mathematical A1/A2 design conditional on that premise and the separately owned
local finite-FK, torus-RSW, influence, duality, compactness, and countable
exceptional-parameter proofs listed below. It does not certify those suppliers.
The separate `finite-cylinder-corollary.md` proves the numerical threshold from
finite sums and deterministic real limits WITHOUT Countable Choice or any
Borel-law extension. Do not propagate the full-law premise into that independent
finite numerical argument or omit it from the full-law statement.

## Reading and exact interface

Actually retrieved https://arxiv.org/pdf/1006.5073 into `bdc-1006.5073.pdf`
and extracted it with PyMuPDF into `bdc-1006.5073.txt` in this directory.
Read the complete Sections 3–4 (printed pp. 14–21): Proposition 10, Theorems
12–13, Lemmas 14–15, Proposition 16, and both theorem proofs. The source's
Theorem 12 is NOT proved in that paper and is NOT imported here: the cube owner
must supply its exact local conditional-influence interface. The source's
Fontes–Newman and Cox–Gandolfi–Griffin–Kesten citations are NOT imported: Sections
6–7 below replace them by full elementary arguments. No claim of reading those
full texts is made. No use is made of source Section 5.

Read the current local crossing-amplification, square-critical-point,
torus-RSW, finite-FKG/spatial-Markov, and free/wired-limit carriers. Their
unresolved assumptions are not treated as established by their filenames.

Required exact supplier interfaces:

* Finite FK for real q>=1: positive association, spatial Markov under fixed
  exterior edges, boundary/parameter monotonicity, and the common-uniform
  heat-bath monotone coupling, including induced subgraphs. All-open conditional
  probability is at least rho=p/[p+q(1-p)]>0.
* Free/wired box limits on Z², finite-alphabet countable-product compactness;
  arbitrary boundary cylinder limits are bounded above by the wired limit.
  The inspected actual supplier `lem-csm-lattice-product-and-measure-compactness`
  explicitly assumes Countable Choice. This is a premise of the full-law proof
  here, not a choice-free theorem disguised by the word “limit”.
* Torus RSW: every fixed-aspect rectangle lying strictly within an m-torus has
  a positive self-dual crossing lower bound, uniformly in scale and m.
* Torus influence: the translation-invariant increasing event logistic
  differential inequality f'(p)>=a f(p)(1-f(p)) log m, on compact p-intervals.
  This follows by the finite differentiation computation already in the
  crossing-amplification item and the separately proved maximum-influence bound.
* Planar duality, including infinite-volume free/wired interchange: the dual of
  the wired state at p is the free state at p*, with p*/(1-p*)=q(1-p)/p.
  This follows from finite duality and cylinder limits; the translated dual
  square lattice is identified with Z². The exact geometric outer boundary
  shift in finite boxes disappears on each fixed cylinder.
* The parent's pressure proof: outside an at most countable D_q, the free and
  wired measures agree. This proof must not use this decay theorem. Only this
  countable-exception conclusion, not threshold coincidence, is needed here.
* Elementary grid path intersection and polygonal Jordan separation; these
  justify the explicitly described path surgeries below. Countable sums,
  continuity of probability, finite integration, Fatou, and elementary
  Borel–Cantelli are used in their usual proved measure-theoretic senses.

No assumption about critical percolation, uniqueness of infinite clusters, bulk
critical RSW, ergodicity, OSSS, or an animal strong law is required.

Write Lambda_r=[-r,r]^2 intersect Z². Connections are by actual open edges, never
by artificial boundary-identification edges. Constants may depend on p,q and on
fixed aspect ratios. All arguments are for a fixed real q>=1.

## 1. From symmetric amplification to each rectangle

For every fixed rectangle aspect bound beta>=1 and every sufficiently large
integer width w and height h with w<=h<=beta w, a periodic torus of side
L comparable to w, sufficiently larger than h, satisfies at fixed p>p_sd

    P_p(vertical crossing of [0,w]x[0,h]) >= 1-C w^(-epsilon).       (1)

Here is the finite covering argument, which is essential: amplifying “some
translate crosses” alone does not prove (1). First take widths w=2n and heights
h=2bn with integer b>=1, and choose L=16b²n. Let B be the event that some
translate of [0,n]x[0,L/2] has a vertical crossing. This rectangle is strictly
shorter than the torus; its aspect 8b² is fixed. RSW gives P_sd(B)>=c>0.
The event B is increasing and invariant under every torus translation. Logistic
integration gives P_p(B^c)<=C n^(-eta).

Take the fixed rectangles [in,in+2n]x[jh,(j+1)h], with i modulo L/n and j
modulo L/h. Every translated width-n interval lies inside one such width-2n
interval, and every length-L/2 interval contains a whole grid band of height h
because L/2>=2h. The portion of the crossing through that band is therefore a
vertical crossing of one of these J=(L/n)(L/h) fixed rectangles. This remains
true for wrapping translates, by lifting the strip and the chosen band to R².
Consequently B is contained in the union of their crossing events A_1,...,A_J.
Positive association of their decreasing complements gives

    (1-P_p(A_1))^J <= P_p(intersection A_i^c) <= P_p(B^c).

All A_i have the same probability by translation. Taking the J-th root proves
(1) for these dimensions. Notice that the torus event in the current item's
step 1.2 is too short for this covering as written: replace it by B here, or
supply this additional construction; the square-root trick must involve a
bounded number of translates, independent of n.

For general w,h put n=floor(w/2), choose an integer b depending only on beta
with 2bn>=h, and use the narrower/taller [0,2n]x[0,2bn]. Its crossing contains
a crossing of [0,w]x[0,h]. This proves (1), with L=16b²n. Finitely many small
widths are absorbed by increasing C. Horizontal crossings follow by rotation.
The proof also applies to rectangles of any fixed positive aspect, by swapping
the two coordinates first. Larger torus sides in any fixed range, if needed,
are handled by the same finite-grid construction with harmless integer rounding;
for the applications below choose the one L just constructed for each rectangle.

If R lies inside a finite planar box D, condition the torus measure on all edges
outside D. Its induced partition on D is bounded above by the wired partition.
Hence P_D^1(crossing R)>=P_torus(crossing R), provided the torus was chosen to
contain D without wrapping. Increase the fixed b or L multiplier, if necessary,
to contain D; the preceding argument is unchanged. Different R may use different
tori because only their individual bounds are subsequently combined in D.

## 2. Wired annuli and the stopped-circuit induction

Fix alpha>1 and integer radii r_k=floor(alpha^k). Omit an initial finite set
of k so all required widths are positive and comparable to alpha^k. Define A_k
as: an open simple circuit surrounds Lambda_{r_k}, lies in the annulus between
Lambda_{r_k} and Lambda_{r_{k+1}}, and is connected by actual open edges inside
Lambda_{r_{k+2}} to its vertex boundary. Boundary-touching conventions can use
one-lattice-unit margins; enlarge the initial cutoff so these margins leave
all rectangle widths comparable to alpha^k.

For an exact integer convention put a=r_k+2, b=r_{k+1}-2 and
R=r_{k+2}, after increasing K until b>a. Use vertical crossings of
[a,b]x[-b,b] and [-b,-a]x[-b,b], and horizontal crossings of
[-b,b]x[a,b] and [-b,b]x[-b,-a]. In each corner square the two corresponding
paths contain opposite-direction crossings and therefore intersect. Their union
contains a simple open circuit separating Lambda_{r_k} from infinity, lying
strictly inside Lambda_{r_{k+1}} and outside Lambda_{r_k}; remove loops from
the surrounding closed walk. A horizontal crossing of the box-wide strip
[-R,R]x[-b,b] intersects both vertical side crossings and thus joins the circuit
to the outer box boundary. Every one of these five
rectangles has a fixed aspect depending on alpha. By (1), wired domination,
and a union bound,

    P^1_{Lambda_{r_{k+2}},p}(A_k) >= 1-d_k,
    d_k=C exp(-epsilon k),                                      (2)

after changing constants. Rectangular overlap of at least a unit avoids edge
convention ambiguities. Choose K so d_k<1/2 for k>=K.

The following conditional comparison is the nontrivial wiring bookkeeping.
Suppose A_{k+1},...,A_n hold, in any box containing Lambda_{r_{n+2}}. The finite
stopped outermost-circuit operation used next has the following explicit
certificate. Let S=Lambda_{r_{k+1}} and let H be the finite annular grid between
S and Lambda_{r_{k+2}}. Enumerate its simple lattice circuits surrounding S
by their edge strings in a fixed finite order. For a candidate gamma let
I(gamma) be the edges whose relative interiors lie in its bounded component;
these include edges from a circuit vertex into that component. Let Ext(gamma)
be ALL remaining edges of the finite ambient box, including the circuit edges
and every edge outside the annulus. The selected circuit is the outermost
surrounding open circuit Gamma. Its stopping fiber is certified by

    E_gamma = {every edge of gamma is open} intersection
      {there is no surrounding open circuit eta in Ext(gamma)
       whose bounded interior strictly contains that of gamma}.   (S1)

All tests in (S1) inspect ONLY Ext(gamma), never an edge strictly inside gamma.
Here is the planar justification that these fibers select precisely one
outermost circuit. If another surrounding circuit has a portion outside gamma,
traverse its exterior excursions and replace the intervening portions by the
appropriate outer arcs of gamma. At a common vertex choose the continuation
with unbounded complementary face on the outside. Erase closed subwalks not
surrounding S. The result is a surrounding simple circuit in the union of the
two original edge sets, on or outside gamma, enclosing its bounded interior
and the exterior excursion. The circuit remains in H. Applying this surgery
to the finite list of surrounding open circuits produces a maximal enclosing
circuit. If two maximal candidates differed, the same surgery would strictly
enlarge at least one, a contradiction. The simple grid polygon enclosing a
fixed bounded region has a unique boundary edge set, so no residual tie occurs.
This proves existence, uniqueness, and equivalence of (S1) to {Gamma=gamma}.

For an entirely finite algorithm, compute these finite circuit lists and their
exterior predicates (S1), select the unique successful gamma, and return gamma
together with omega restricted to Ext(gamma). The rigorous stopping assertion
is about the OUTPUT FIBERS, not an assertion that a naive implementation of
all candidate tests in that order avoids interior queries. For each returned
pair (gamma,tau), its fiber is exactly

    {omega: omega|_{Ext(gamma)}=tau},

provided tau satisfies (S1), and is empty otherwise. Thus every assignment of
strict-interior edges is admitted. This cylinder-fiber identity alone proves
that conditional on the returned data the strict-interior law is the usual
finite FK conditional law with induced boundary partition; it bypasses any
unproved claim about a medial probing algorithm. The return data includes
fixed edges outside the annulus too. Spatial Markov applies separately on
each nonempty finite fiber and then may be averaged. All vertices of Gamma
are wired to one another by its actual open boundary edges.

On A_{k+1}, Gamma is connected to the outer boundary of Lambda_{r_{k+3}}:
an outgoing path from any inner surrounding circuit must hit Gamma. Every
A_j for j>=k+1 is determined by the exposed exterior and Gamma. In particular,
any path making an excursion inside Gamma can be replaced between its entry
and exit vertices by an open arc of Gamma. Thus conditioning also on those
outer events puts no condition on the unexposed interior. The interior FK law
has the whole Gamma wired, because its boundary vertices are connected by the
open circuit. No claim is made that all vertices of the surrounding square are
wired in the conditional configuration.

Let B_k(Gamma) be the existence of an inner-annulus circuit connected to Gamma.
In wired Lambda_{r_{k+2}}, A_k implies B_k(Gamma): its outward path must cross
Gamma. Wired FK on the smaller domain inside Gamma dominates the restriction
of wired FK on Lambda_{r_{k+2}}, by spatial Markov and maximal boundary wiring.
Therefore its probability of B_k(Gamma) is at least 1-d_k by (2). Reaching Gamma
also reaches the boundary of Lambda_{r_{k+2}} through Gamma's already exposed
outgoing connection, so B_k(Gamma) implies A_k in the conditional full
configuration. We have proved, for every actual exterior exploration outcome,

    P(A_k | A_{k+1},...,A_n) >= 1-d_k.                           (3)

This comparison concerns B_k(Gamma) on the random smaller domain; applying a
wired-square comparison directly to the full event A_k would be unjustified.

Begin in wired Lambda_{r_{n+2}}. Its outer seed A_n has probability at least
1-d_n by (2); descend using (3). For n>=m>=N>=K,

    P^1_{Lambda_{r_{n+2}}}(intersection_{k=N}^m A_k)
       >= product_{k=N}^n (1-d_k)
       >= product_{k=N}^infinity (1-d_k).

For fixed m these are cylinder events. Let n tend to infinity, then m tend to
infinity. The wired cylinder limit and continuity from above give

    phi_p^1(intersection_{k>=N} A_k)
       >= product_{k>=N}(1-d_k) >= 1-sum_{k>=N}d_k.              (4)

In particular the probability tends to 1 as N increases. This finite-wired
outer seed avoids the bulk-critical crossing assertion and uniqueness invoked
in the printed Proposition 16 proof. It supplies exactly the stronger tail
control needed for the printed Theorem 2 argument, rather than inferring
probability 1/2 from a merely positive lower bound.

On the event in (4) consecutive circuits connect: the outward path of A_k
crosses the next surrounding circuit. Thus there is an infinite open component
meeting Lambda_{r_{N+1}}. Require also a fixed finite tree joining 0 to every
vertex of Lambda_{r_{N+1}} to be open. Its conditional probability is at least
rho^M for its fixed M edges. Equivalently FKG gives the product lower bound for
this event and the decreasing intersection limit of the increasing A_k events.
Hence phi_p^1(0 connected to infinity)>0 for every p>p_sd. No critical-state
conclusion is involved.

## 3. Finite Hamming inequality and passage to infinite volume

For a finite graph and an increasing event D define H_D(omega) as the minimum
number of closed coordinates which must be opened to enter D. Opening one
edge decreases H_D by either 0 or 1, hence |omega|+H_D is increasing and
H_D is decreasing. Also H_D 1_D=0. Differentiating the finite FK weights gives

    d phi_p(D)/dp = Cov_p(1_D,|omega|)/[p(1-p)]
      = [Cov_p(1_D,|omega|+H_D)+phi_p(D) E_p H_D]/[p(1-p)]
      >= 4 phi_p(D) E_p H_D.

The inequality is FKG, not a product-measure Russo identity. Parameter
monotonicity and decreasing H_D imply, on integrating p<t,

    phi_p(D) <= phi_t(D) exp[-4(t-p) E_t H_D]
             <= exp[-4(t-p) E_t H_D].                         (5)

Let D_n={0 connects inside Lambda_n to its boundary}, and H_n be its Hamming
distance. Both are functions of the finitely many edges of Lambda_n; H_n is
also the minimum number of closed edges along any such path. Apply (5) in
wired Lambda_L for L>n and let L tend to infinity. Every term is a finite
cylinder expectation, so (5) holds in the wired infinite-volume states:

    phi_p^1(D_n)<=exp[-4(t-p) E_{phi_t^1}H_n].                 (6)

No differentiation of an infinite-volume measure has been asserted.

## 4. All subcritical cluster-size moments

Fix s<p_sd and choose t in (s,p_sd) with t* outside the parent's at most
countable D_q. (The dual map is a continuous strict bijection, so this is
possible.) The dual of primal wired phi_t^1 is dual free phi_{t*}^0, and equals
dual wired phi_{t*}^1 by that nonexceptionality. Since t*>p_sd, (4) applies to
that dual state for EVERY chosen alpha>1. Consequently for any fixed alpha
there is N such that with probability at least 1/2 there is a dual-open circuit
in every annulus of index k>=N.

Use only even-indexed annuli; after one more finite cutoff their circuits have
disjoint edge supports, separated by the intervening annulus. Every primal
path from 0 to boundary Lambda_n must cross each such dual-open circuit lying
inside Lambda_{n-2}, hence must use a distinct closed primal edge for each.
There are at least (log n)/(2 log alpha)-O(N+1) such even annuli. Thus, for all
sufficiently large n,

    E_{phi_t^1} H_n >= (log n)/(8 log alpha).                 (7)

The factor 8 safely allows the 1/2 probability, rounding, the discarded outer
annulus and the even-index restriction. In (6) choose
log alpha=(t-s)/(4d+8), where d>0 is any desired moment order. Equations (6)–(7)
give

    phi_s^1(D_n) <= n^(-(2d+4))                              (8)

for sufficiently large n. Constants and the cutoff depend on d,s,t,q; no
uniformity as alpha decreases to 1 is claimed or needed.

If R is the maximum infinity norm in the origin cluster, |C_0|<=(2R+1)^2.
The tail-sum identity for a nonnegative integer random variable, or grouping
R into integer intervals, shows from (8) that E_s^1|C_0|^d is finite. In
particular C_0 is finite almost surely. Translation invariance gives this
simultaneously at all vertices. Because s<p_sd was arbitrary, every wired
subcritical state has cluster-size moments of every positive order. Notice
that equality of free/wired states was needed only at an intermediate t, not
at s or at criticality.

## 5. Independent cluster envelopes: complete coupling

Fix s<p_sd. Let S_y, y in Z², be independent random finite connected vertex
sets, each with the law of the cluster of y under phi_s^1. We can couple them
with a cluster partition (C_z) having exactly the wired FK joint law so that

    |C_z| <= M_z := max{ |S_y| : z in S_y }.                  (9)

Here is the construction. Enumerate all vertices once. After revealing a
finite number of entire actual clusters let E be their finite union. If the
next vertex y is already in E, reveal nothing and leave its independently
sampled S_y unused. Otherwise the conditional law of its cluster in the
remaining graph is wired-at-infinity FK with the edges from E to its complement
closed. Interior edges of the already discovered clusters do not otherwise
enter that conditional law: in the FK weight their component factors are
constant, while every boundary edge is fixed closed. This follows first in
finite boxes by factorization of the weights, and then in the wired limit on
cylinders (or by conditioning on each exact finite discovered cluster outcome).
This conditional cluster law is dominated by the unconditional wired cluster
law, because closing a fixed finite set of boundary edges is a decreasing
conditioning and can also be implemented by edge deletion in the common-uniform
heat-bath coupling. Couple the next actual cluster as a subset of a fresh S_y.
The marginal of this fresh S_y is fixed independently of the previously revealed
history; hence the complete S_y family remains independent. Each revealed
actual cluster contains all its vertices z, so (9) follows for every such z.
The enumeration eventually reveals every vertex's cluster.

For completeness the ordered coupling in this use need not be an unproved
countable-space theorem: in a finite box use the coupled heat-bath chains from
the finite-FK supplier, with the closed boundary-edge constraint in the lower
chain. Take time limits to get the ordered finite-box coupling. Countable-product
compactness gives a subsequential joint cylinder limit as boxes grow; its
marginals are the stated wired conditional and unconditional laws and it
preserves coordinatewise inclusion. These sets are finite almost surely by
Section 4. For the sequential random finite E above there are only countably
many possible finite histories and revealed finite-cluster outcomes. Invoke
the stated Axiom of Countable Choice to fix one ordered coupling kernel for
each such history. This is an explicit use of Countable Choice, not a claim
that all kernels were canonically chosen or that general dependent choice or
arbitrary-index choice has been proved unnecessary without a construction.

Here is that construction, so no countable-alphabet process-extension theorem
is hidden in the word “sample”. Finite connected lattice sets, finite histories,
and pairs of such sets have specified integer enumerations. At a history h the
chosen kernel K_h is therefore a countable atomic law on the pair (next actual
cluster, fresh S_y); if y was already discovered the actual-cluster coordinate
is its earlier value and only the independent S_y coordinate is new. The first
marginal is exactly the wired conditional cluster law and the second marginal
is the fixed unconditional cluster law of y. Finite-prefix probabilities are
the products of these kernels, summed over the appropriate countable atomic
histories. Normalization and prefix consistency follow by summing a
nonnegative countable series with the last kernel's total mass one. If desired
each kernel can equivalently be realized by its explicitly enumerated inverse
CDF; existence of an infinite family of independent uniforms is not assumed.

To obtain the whole process from the actual finite-alphabet extension supplier,
encode each integer outcome j>=0 in its own bit row as j ones followed by a
zero and then only zeros. Every finite set of bit-coordinate probabilities is
the sum of the corresponding finite-prefix atomic probabilities. These are
consistent finite-dimensional binary laws. Identify the countable array of
bits with the enumerated lattice coordinates and apply
`lem-csm-lattice-product-and-measure-compactness`, WITH its Countable Choice
premise, to extend them. For row i the probability its first K bits are all
ones is the already specified atomic tail P(j_i>=K), which tends to zero.
Continuity from above therefore makes the all-ones row null. Any finite pattern
having a 1 after its first 0 has probability zero by its prescribed marginal.
A countable union shows that almost surely EVERY row is a valid integer code.
Decode on that full-measure set; the decoded process has exactly the prescribed
finite-prefix kernel laws. In particular the S_y are independent: at each
stage their conditional marginal is the fixed unconditional law, so every
finite product factorizes. The actual-cluster coordinate has exactly the
finite-prefix exploration laws of the original wired cluster partition.

The coupled object needed here is this CLUSTER PARTITION, not a reconstructed
full edge configuration: a partition does not specify which internal edges of
a cluster are open. For each fixed vertex z its complete finite cluster is
revealed by the stage at which the enumeration reaches z, so its joint finite
cluster-set laws agree with those under the actual wired measure. That is
sufficient for (9) and for the deterministic partition bound in Section 8.

M_z is finite almost surely. Indeed translation invariance and summation over
y give

    sum_y P(z in S_y, |S_y|>u)
       = E[ |S_0| 1_{|S_0|>u} ] ->0.

At least S_z contains z. Thus the maximum exists and is finite, simultaneously
for all countably many z. No independence of M_z is asserted.

## 6. Elementary independent greedy-animal bound

A lattice animal is a finite nearest-neighbor-connected vertex set containing
0. If X_y>=1 are iid with finite moments of every order, there is a finite
DETERMINISTIC K such that almost surely all sufficiently large animals Gamma
satisfy

    sum_{y in Gamma} X_y <= K |Gamma|.                       (10)

This is proved here, without citing an animal strong law. Let iid marks have
probability r. If an animal of size at most m contains k distinct marked sites,
a spanning-tree depth-first walk from 0 visits them in some order using at most
2m steps. The successive displacement vectors v_1,...,v_k have total l1 length
at most 2m. The number of such ordered lists of integer vectors is at most

    2^(2k) binomial(2m+2k,2k) <= (C m/k)^(2k)                (11)

for 1<=k<=m. This counts signs and the 2k nonnegative coordinate magnitudes;
zeros and non-distinct lists only overcount. Restricting to lists of distinct
sites, independence gives probability r^k. Therefore

    P(some size<=m animal has >=k marked sites)
       <= (C' r m²/k²)^k.                                  (12)

Set m=2^l, r_j=P(X_0>=2^j), j>=0. Fix 0<epsilon<1, say epsilon=1/4.
For every j<=epsilon log_2 m take
k_j=ceil(max(a m sqrt(r_j), B log m)), where a makes C'/a²<=exp(-2).
If k_j>m the forbidden event is empty; otherwise (12) bounds its probability
by exp(-2k_j)<=m^(-2B). Union over these O(log m) values of j is summable in l.
Also the animal lies inside Lambda_m. For any moment order Q>2/epsilon,

    P(max_{Lambda_m}X_y>m^epsilon)
       <= (2m+1)² E[X_0^Q] m^(-epsilon Q),

which is summable on dyadic m. Borel–Cantelli (obtained simply by bounding the
probability of the union after l>=L by the summable tail) implies that almost
surely, for all sufficiently large dyadic m, no weight exceeds m^epsilon in
Lambda_m and every relevant mark count is less than k_j.

The elementary layer bound X<=1+sum_{j>=0}2^(j+1)1_{X>=2^j} now gives, uniformly
for all animals with m/2<|Gamma|<=m,

    (sum_Gamma X_y)/|Gamma|
      <= 1+4a sum_{j>=0}2^j sqrt(r_j)
             + O(m^(epsilon-1) log m).

The series converges since a moment of any fixed order Q>2 bounds
sqrt(r_j)<=sqrt(E X_0^Q)2^(-Qj/2). Its sum is deterministic. The vanishing error
is eventually at most 1. Choosing K larger than this deterministic bound proves
(10) simultaneously for all large animal sizes. This gives the needed bounded
limsup; existence of an exact limiting animal constant is unnecessary.

## 7. Deterministic overlap reduction (a factor 4 suffices)

Apply (10) to the independent X_y=|S_y|², which have every moment by Section 4.
Let Gamma be any sufficiently large animal of size m. Put A=sum_{z in Gamma}M_z
and t=A/(2m). For each z with M_z>t choose a maximizing set S_{y(z)}. Let Y be
the distinct chosen roots, s_y=|S_y|, Q=sum_{y in Y}s_y², and S=sum_{y in Y}s_y.
The low-weight vertices contribute at most A/2; a chosen S_y can be assigned
at most s_y vertices. Hence Q>=A/2=mt. Also s_y>t for each chosen root, so
S<=Q/t. The union Delta=Gamma union (union_{y in Y} S_y) is a finite connected
animal containing 0 (each S_y meets Gamma), has size at most m+S, and contains
every root y in Y. Equation (10), applicable since |Delta|>=m, gives

    Q <= sum_{y in Delta}|S_y|² <= K |Delta| <= K(m+Q/t).

If t>2K, this implies Q<2Km while Q>=mt>2Km, a contradiction. Therefore

    sum_{z in Gamma} M_z <= 4K |Gamma|                       (13)

for every sufficiently large Gamma, almost surely. This is the complete
replacement for the source's Fontes–Newman comparison; its better factor 2 is
not needed. Together with (9), (13) bounds the average actual cluster size on
every sufficiently long self-avoiding path by the deterministic constant 4K.

## 8. Linear Hamming distance, exponential decay, all cylinder limits

Let gamma be a self-avoiding vertex path from 0 to boundary Lambda_n and let
m be its number of vertices. Then m>=n+1. If it visits J distinct actual open
clusters, its number T(gamma) of closed edges is at least J-1. For each visited
cluster C the distinct path vertices in it contribute at most 1 to
sum_{z in gamma}1/|C_z|. Consequently Cauchy–Schwarz gives

    T(gamma)+1 >= sum_gamma 1/|C_z|
       >= m²/(sum_gamma |C_z|) >= m/(4K)

once m is sufficiently large, by (9),(13). This inequality holds in EVERY edge
configuration having that cluster partition: an open edge cannot change its
cluster class. Thus the almost-sure partition estimate transfers from the
coupling to the actual wired edge law without constructing edges from cluster
sets. The minus-one correction matters:
a path lying entirely in one open cluster has no closed edge. Thus

    H_n >= (n+1)/(4K)-1

for all sufficiently large n, almost surely in the coupling, and therefore
in its actual wired marginal. In particular Fatou gives
liminf_n E_s^1 H_n/n >=1/(4K). Hence E_s^1 H_n>=n/(8K) for all sufficiently
large deterministic n. This is an expectation conclusion; no unjustified
uniformity in a random almost-sure cutoff is used.

Finally fix p<p_sd and choose any s in (p,p_sd). Apply the just-proved moment,
coupling and animal argument at s, and then (6):

    phi_p^1(D_n) <= exp[-(s-p)n/(2K)]

for sufficiently large n. Increase a prefactor to cover all n>=1. Translation
invariance and the implication {x connects y} subset {x connects boundary of
x+Lambda_floor(||x-y||_infinity)} give constants C,c>0 such that

    phi_p^1(x connected y) <= C exp(-c ||x-y||_2).

Use ||v||_infinity>=||v||_2/sqrt(2), with small-distance adjustments in C.
The wired state has no infinite origin cluster, since its probability is at
most phi_p^1(D_n) for every n.

For any arbitrary-boundary cylinder-limit state phi, the event that x connects
y inside Lambda_L is an increasing cylinder event and is dominated by the
wired state. Increase L to infinity and use continuity from below. The same
C,c therefore bound phi(x connected y). This gives the requested uniformity
across ALL cylinder-limit states at that p,q, without assuming their equality.
The parent's pressure argument plus Section 2 then identifies both free and
wired threshold infima with p_sd. Nothing here compares the two measures at
p=p_sd, proves their equality there, or determines the order of transition.

## Integration notes and remaining ownership

The mathematical chain above is finite FK -> torus amplification -> wired
annuli -> wired supercriticality; then countable exceptional-parameter equality
+dual interchange -> arbitrary subcritical cluster moments -> independent
cluster envelopes -> elementary animal bound -> linear Hamming expectation ->
exponential wired decay -> arbitrary cylinder-limit domination. It is acyclic:
the pressure equality input must be established before its use in Section 4
and independently of percolation/decay conclusions. Thus use a separate pressure
lemma supplier, not a threshold-coincidence consequence proved from this item.

Suggested new helper interfaces, if splitting production items is required:
(1) symmetric-torus rectangle amplification and wired annulus construction;
(2) finite Hamming inequality; (3) independent greedy-animal envelope bound.
These are substantial established proof obligations, not open-problem items.
Production statement/proof provenance should retain the BDC source attribution
and identify Sections 6–7 as local derivations rather than claiming those exact
arguments were read in the cited auxiliary papers. No final gates, formatting
passes, source integration, or independent scientific acceptance were attempted.
