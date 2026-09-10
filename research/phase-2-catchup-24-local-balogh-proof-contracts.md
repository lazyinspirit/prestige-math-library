# SET-30: eight local Balogh proof contracts

Date: 2026-09-09. Author: delegated Astra-2. Scope: mathematical research and
proposed local proofs only. No live manifest, item, shared plan or engine edits.
This implements the binding original-24 organization; it proposes no extra
pair. These are research proofs for authoring and independent review, not a
publication or independent-judge certificate.

## Outcome and source receipt

The eight proposed units admit the complete typed route below. In particular,
the elementary-model/finite-root argument and the hereditary-normality
extension argument are supplied, not left as exercises. There is no identified
remaining mathematical lemma gap in this route. The unrecovered original
Balogh article is an explicitly retained source-access limitation, not a claim
that its full proof was read. Independent review and conversion to item-format
proofs remain necessary.

Sources actually recovered and read:

1. K. P. Hart, *Set-Theoretic Topology*, full Chapter 5 §2, printed pp.31–34
   (PDF pages 34–37), including Lemma 2.1 and Exercises 1–17. The beginning of
   Chapter 5, printed pp.29–30, was also inspected to distinguish its different
   preliminary construction. [Full lecture notes](https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf).
   Web open failed, but direct HTTPS download succeeded. File read with
   `mutool draw -F txt`: `/tmp/uc34-balogh-hart.pdf`; SHA-256
   `43dadfd6496dcc755257ec2f5b74d769d976df988cf9c7fa7a87c4ef10fdb967`.
   Exact locators: p.31 map contract and topology; pp.31–32 normality and
   shrinking exercises; pp.32–34 countable-model construction. The quoted
   source instruction “We have to do more work” accurately marks the place
   where the finite-root construction starts; that work is performed below.
2. T. Yorioka, *Two constructions of Dowker spaces*, RIMS Kôkyûroku 1530
   (2007), pp.96–102: full §3's Balogh summary, printed pp.100–101, and the
   increasing-cover criterion in §1 p.96 were read. [Institutional full text](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1530-9.pdf).
   File `/tmp/uc34-balogh-kyoto.pdf`; SHA-256
   `55a98e8db6bf56923c9318d84dc65ec116e54e10df5002c13b4fc2813f4df394`.
   This independently confirms the finite-intersection, point-omission,
   separation and nondecomposability architecture and gives the iterative
   shrinking obstruction. It explicitly summarizes, rather than proves,
   the continuum combinatorics. Its printed quantifier in the definition of
   decomposability and a later index are not adopted: our witness definition
   and finite peeling proof below are explicit. No claim of a second full
   independent combinatorial proof is made.

Original-source recovery log: Balogh, *A small Dowker space in ZFC*, Proc.
AMS 124 (1996), 2555–2560, DOI 10.1090/S0002-9939-96-03610-6. The following
actual attempts failed to recover its text: (1) web open of the canonical AMS
PDF gave 403; (2) direct `curl --fail` of that PDF gave 403; (3) web open of the
alternate `/proc/1996-124-08/...` AMS PDF path failed; (4) the AMS `home.html`
landing-page path failed; (5) the DOI resolver failed; (6) the canonical PDF
with `?download=1` failed. Exact-title/DOI, author-site and mirror searches
returned references and later treatments, not the original full proof. The
[canonical PDF](https://www.ams.org/journals/proc/1996-124-08/S0002-9939-96-03610-6/S0002-9939-96-03610-6.pdf)
must therefore remain marked **not recovered/read**. Nyikos's later
screenable-space paper was opened as a recovery lead, not used as a proof
supplier for this different construction. Search hits on this library's own
public site were not used as independent evidence.

The mathematical arguments below are local derivations solving the source
exercises; none is represented as a verbatim transcription of an unavailable
proof. The page-level two-independent-treatments rule is separate from
per-theorem proof completeness, as the binding local-closure review explains.

## Common types, foundational interface and choice

Work in ZFC throughout the existence construction. Write
`kappa = 2^{aleph_0}` as its initial ordinal and `C = {}^kappa 2` for the set
of all binary-valued functions on kappa. A letter `c` denotes a function in
`C`, never the cardinal kappa. Write `[S]^{<omega}` for finite subsets of S.

The already-published `thm-downward-lowenheim-skolem-with-parameters` was
read in full: it applies to arbitrary infinite **set structures**, has an
explicit ZFC contract, and includes the countable-size endpoint. Apply it to
`(V_theta, in)` with a fixed sufficiently large successor cardinal theta,
for example `theta = (2^{2^kappa})^+`. All the finite-rank codings, all
subsets of kappa and C, and all witnesses used below belong to this V_theta.
The successor regularity used here follows under AC: a cofinal sequence of
length at most mu in mu^+ would express mu^+ as a union of at most mu sets
of cardinality at most mu, contradicting `mu * mu = mu`. Consequently
countable subsets of V_theta have bounded rank and are themselves elements
of V_theta. We do **not** assert that V_theta models ZFC, and do not apply
Löwenheim–Skolem to the proper class V.

For countable elementary `M prec (V_theta,in)` containing kappa and omega,
the following facts have short local proofs. Every natural number belongs
to M by finite induction; values of functions in M at arguments in M
belong to M by elementarity and uniqueness. Finite subsets of M belong to
M by the finite set operations. If a set D in M is externally countable,
an actual enumeration of D is in V_theta; elementarity supplies an
enumeration in M, so D is a subset of M. In particular, if countable
`M in N prec V_theta`, then `M subset N`. For a finite set D in M the
same argument shows `D subset M`. All uses of these facts below concern
sets and witnesses of rank bounded well below theta.

AC is used to well-order sets and choose witness hulls; for countable-set
coding and the cardinal arithmetic; to select the countably many avoided
binary strings in the cofinality argument; to choose maximal finite-root
families (or their well-ordered greedy constructions); and to choose
enumerations, infinite subfamilies, and neighborhood/separation witnesses
simultaneously. No minimal-choice assertion is made. Given the eventual
map and the needed witness choices, the topology calculations are direct;
they do not themselves construct the map. No AD branch is involved.

## def-balogh-finite-restriction-data

**Contract.** Define a realizable restriction datum to be a tuple

    T = (a,A,B,p,q,r)

obtained from functions

    f:kappa -> omega,
    g:kappa -> [C]^{<omega},
    h:kappa -> [kappa]^{<omega}

and countable `M,N prec V_theta` with `kappa,omega,f,g,h in M` and
`M in N`, by

    a = M intersect kappa,
    A = N intersect kappa,
    B = {c restricted to A : c in C intersect M},
    p = f restricted to A,
    q(alpha) = {c restricted to A : c in g(alpha)}   (alpha in A),
    r = h restricted to A.

Thus `a subset A subset kappa` are countable, `B subset {}^A 2` is
countable, `p:A -> omega`, `q:A -> [{}^A 2]^{<omega}`, and
`r:A -> [A]^{<omega}`. The last type holds because h and alpha belong
to N, so the finite set h(alpha) belongs to N and is a subset of N.

For alpha in A define `v_alpha:q(alpha)->2` by `v_alpha(b)=b(alpha)`.
The potential root triples are

    t=(n,E,e),  n in omega, E in [B]^{<omega}, e:E -> 2.

For such a triple define

    H_T(t) = {alpha in A : p(alpha)=n,
                q(alpha) intersect B=E, v_alpha restricted to E=e}.

Let `I_T` contain the triples for which there is an infinite
`K_T(t) subset H_T(t)` satisfying

    q(alpha) intersect q(gamma) = E   for distinct alpha,gamma in K_T(t).

Choose one such K_T(t) for each t in I_T. These choices are part of the
data used subsequently, not extra cardinal-size coordinates that need
model reflection. Both the set of triples and I_T are countable. Allow
I_T empty at the definition level; no arbitrary-typed-data assertion that
it is nonempty is needed.

**Immediate checks.** If distinct c,c' belong to `C intersect N`, the
formula asserting a coordinate where they differ has a witness in N;
that coordinate belongs to A. Hence restriction to A is injective on
`C intersect N`. In particular, for `c in C intersect N`,

    c restricted to A in B  iff  c in M.

The forward implication uses a c' in C intersect M with the same trace;
both c,c' are in N, so injectivity applies. For alpha in A, g(alpha)
is a finite subset of N, and therefore the same trace test applies to
every function in g(alpha). These are the exact reflection interfaces
needed later; injectivity on all of C is neither true nor claimed.

## lem-balogh-countable-restriction-enumeration

**Contract (AC).** The set R of realizable tuples has size at most kappa.
There is `P subset kappa` and an enumeration `T_beta`, beta in P,
covering R, with `A_beta subset beta` for every beta in P. For each
datum T one can select `J_T subset A` and
`u_T:J_T -> [{}^A 2]^{<omega}` whose values are pairwise disjoint,
such that every t=(n,E,e) in I_T has infinitely many gamma in
`J_T intersect K_T(t)` with `u_T(gamma)=q(gamma) minus E`.
If I_T is empty take J_T empty.

**Counting proof.** `kappa^{aleph_0}=kappa`: a sequence of binary
omega-sequences is the same information as a binary function on
`omega times omega`, and this index set has an explicit bijection
with omega. Thus there are at most kappa countable subsets A of
kappa. Once A is fixed, a subset a has at most kappa possibilities;
`|{}^A 2| <= kappa`; its countable subsets B have at most kappa
possibilities; and each of p,q,r has at most kappa possibilities by
the same countable-exponent calculation. A finite product of these
bounds is kappa. R is a subfamily of these typed tuples, so the same
bound applies without counting the enormous ambient family of f,g,h.

**Why supports are bounded.** For completeness, kappa cannot be the
union of countably many sets of size less than kappa. Transfer a
hypothetical covering to `{}^omega 2`, with sets Z_n of size less
than kappa. Partition omega into infinite sets D_n. The restrictions
to D_n of members of Z_n form a set of size less than kappa, whereas
`|{}^{D_n}2|=kappa`. Choose a binary function b_n on D_n outside those
restrictions. The union of the b_n is a real outside every Z_n, a
contradiction. In particular `cf(kappa)>omega`, so every countable
A subset kappa is bounded in kappa. This proof uses AC as stated;
it does not assume CH or regularity of the continuum.

Well-order R with order type at most kappa. At stage xi<kappa,
choose an unused label beta<kappa larger than every member of that
tuple's A. Such a label exists: the tail above the bounded A has
cardinality kappa, while fewer than kappa labels have been used.
Choose the least eligible beta. These labels need not increase with
xi. Their range is P and supplies the asserted enumeration.

**Disjoint thinning proof.** Enumerate the countable nonempty I_T
with each member scheduled infinitely often. At any finite stage
only finitely many points and finitely many trace functions have
been used. For the scheduled t, the petals
`q(gamma) minus E`, gamma in K_T(t), are pairwise disjoint finite
sets. Each already used trace can exclude at most one of these
petals. Thus only finitely many candidates are forbidden by the
used traces or used points; choose a fresh gamma with a disjoint
petal and assign that petal as u_T(gamma). Distinct triples have
disjoint H_T(t), since n, E and e are determined by gamma, so no
incompatible triple assignment arises. Countable recursion proves
the conclusion. An empty petal causes no exception: it meets no
previous petal, and the point is still chosen fresh. This is a full
solution of Hart Exercise 16, including the empty-index convention.

## lem-balogh-combinatorial-map

**Contract (AC).** There is a map `D:C -> C`, written `D(c)=d_c`,
such that for every

    f:kappa -> omega, g:kappa -> [C]^{<omega},
    h:kappa -> [kappa]^{<omega}

there exist alpha<beta<kappa with

    f(alpha)=f(beta), beta notin h(alpha),
    d_c(beta)=c(alpha) for every c in g(alpha).

**Construction.** Fix the enumeration and thinning choices just
proved. For c in C and beta<kappa put

    d_c(beta) = c(beta), if beta in P and c|A_beta in B_beta;
             = c(gamma), if beta in P, c|A_beta notin B_beta,
                  and c|A_beta in u_beta(gamma) for gamma in J_beta;
             = 0, otherwise.

The second clause has at most one gamma because the u-values are
pairwise disjoint. Also every u-value is disjoint from B_beta, since
it is a petal at a point whose B_beta-intersection is the root.
The clauses are therefore unambiguous and define an actual member
of C for every c. No dependence on a later test triple f,g,h enters
this already fixed definition.

**Reflection proof.** Now fix arbitrary f,g,h of the stated types.
Choose countable M,N as in the definition, and let beta in P label
their tuple. Thus beta exceeds every member of A=N intersect kappa,
and in particular beta is outside N and M. Put

    n=f(beta), E0=g(beta) intersect M,
    e0(c)=c(beta) for c in E0.

The finite set E0 is a subset of M, hence an element of M, and the
finite function e0 belongs to M. Define the ambient set

    H0 = {gamma<kappa : f(gamma)=n,
                 E0 subset g(gamma),
                 c(gamma)=e0(c) for all c in E0}.

It belongs to M by definability and uniqueness, and beta belongs
to H0. This already implies H0 is uncountable: if it were countable,
H0 in M would imply H0 subset M, contrary to beta in H0. In fact
it is cofinal in kappa, as in Hart Exercise 15(a): if bounded,
`sup H0` would belong to M intersect kappa, whereas beta in H0
is above all such ordinals. Cofinality is not needed below.

Here is also the finite-avoidance clause of Exercise 15(b). For
finite F subset M and eta in M intersect kappa, beta witnesses
the ambient assertion

    exists gamma in H0: gamma>eta and (F intersect g(gamma)) subset E0.

All its parameters belong to M, so it has a witness gamma in M.

By AC there is a maximal subset K of H0 with

    g(gamma) intersect g(delta) = E0  for distinct gamma,delta in K.

One may obtain it by greedily scanning a well-order of H0, adjoining
an element exactly when it is compatible with all previous ones;
every rejected element remains incompatible. K and this assertion
are sets of low rank in V_theta, so elementarity permits K in M.
Maximality is real maximality among subsets of H0, because all such
subsets and their finite-intersection tests belong to V_theta.

K cannot be countable. Otherwise K subset M, and for gamma in K,
g(gamma) is a finite subset of M. Then
`g(gamma) intersect g(beta)=E0`, so beta could be adjoined to K;
also beta notin K. This contradicts maximality. This proves Hart
Exercise 15(c); clause (d) follows from K subset H0.

The following passage is essential and cannot be replaced by a
bare reference to that exercise. If gamma in K has a petal element
`c in (g(gamma) minus E0) intersect M`, then gamma is the **unique**
member of K with c in g(gamma): two such members would violate the
root-intersection property. K,g,c all belong to M, so that unique
gamma belongs to M. Consequently

    gamma in K minus M  implies  g(gamma) intersect M=E0.

Because K is uncountable and M countable, K minus M is uncountable.
K and M belong to N, so K minus M belongs to N. It has infinitely
many members in N: for each finite list of previously obtained
members, elementarity supplies a further member outside that list.
Thus `K intersect (N minus M)` is infinite. Its members are ordinals
in A; their finite g-values belong to N.

Let

    E={c|A : c in E0} subset B,
    e(c|A)=e0(c).

The function e is well-defined by trace injectivity on C intersect
N. For gamma in K intersect (N minus M), the trace test in the
definition gives `q(gamma) intersect B=E`; K subset H0 gives
`p(gamma)=n` and `v_gamma|E=e`; and injectivity of traces gives
`q(gamma) intersect q(delta)=E` for two distinct such points.
It follows that t=(n,E,e) belongs to I_beta. The chosen K_beta(t)
need not be this reflected family; its defining properties suffice.

Choose alpha in J_beta intersect K_beta(t) with
`u_beta(alpha)=q(alpha) minus E`. Then alpha in A subset beta,
`f(alpha)=p(alpha)=n=f(beta)`, and the finite set h(alpha) is a
subset of N, so beta notin h(alpha).

Finally fix c in g(alpha). If c in M, its trace is in
`q(alpha) intersect B=E`; trace injectivity identifies it with
the unique member of E0 having that trace. Hence c in E0,
`c(alpha)=e(c|A)=c(beta)`, and the first defining clause gives
`d_c(beta)=c(beta)=c(alpha)`. If c notin M, its trace is not in B
but belongs to `q(alpha) minus E=u_beta(alpha)`, so the second
clause gives `d_c(beta)=c(alpha)`. This proves every assertion of
the contract without making the incorrect expression g(beta intersect M).

## def-balogh-continuum-topology

**Contract.** Given the map D above, for alpha<kappa,
`s in [C]^{<omega}` and `a in [kappa]^{<omega}` define

    F(alpha,s,a) = {beta<kappa : d_c(beta)=c(alpha) for all c in s} minus a,
    B_alpha = {F(alpha,s,a) : s,a as above}.

Set `X=kappa times omega`, `L_n=kappa times {n}`, and
`U_n=kappa times {0,...,n}`; also `U_{-1}=empty`. Declare O open iff
for every `(alpha,n+1) in O` some `F in B_alpha` satisfies
`F times {n} subset O`. There is no condition at level 0.

Call B_alpha a **finite-intersection neighborhood family**, not a
proper filter. Some F may be empty, and in that case the relevant
point can be isolated. If an upward-closed filter convention is
desired, it must permit the improper filter; no later proof assumes
nonemptiness. Exact elementary identities are

    F(alpha,s,a) intersect F(alpha,t,b)=F(alpha,s union t,a union b),
    F(alpha,empty,empty)=kappa,
    F(alpha,empty,{gamma})=kappa minus {gamma}.

For any A subset kappa and its characteristic function c_A,
`F(alpha,{c_A},empty)` is a subset of `{beta:d_c_A(beta)=1}`
when alpha in A, and of its complement when alpha notin A.
This is the precise opposite-side disjointness interface; it needs
no special property of D beyond being a map C->C.

## lem-balogh-neighborhood-basis

**Contract (AC for simultaneous neighborhood selections).** The
preceding open-set rule defines a T1 topology. The U_n are open,
the L_n are relatively discrete, and the following recursive open
bases are valid:

    B(alpha,0)={ {(alpha,0)} };
    B(alpha,n+1) consists of {(alpha,n+1)} union union_{beta in F} V_beta,
      where F in B_alpha and V_beta in B(beta,n).

For `A subset kappa` the one-step closure trace is independent of n:

    Phi(A)={alpha : (alpha,n+1) in closure(A times {n})}
          ={alpha : every F in B_alpha meets A}.

**Proof.** Empty and total sets obey the rule. An arbitrary union
obeys it by taking a witness from a member containing the point.
For a finite intersection take the intersection of its two witness
families, using the displayed F-identity. Thus these sets form a
topology. Recursively defined basic neighborhoods are open by
induction: every point below their top is in an open V_beta,
and their top has the witnessing F. They lie in U_n at level n
and have just their specified point on L_n. Conversely, for an
open O containing `(alpha,n+1)`, take its witnessing F, and for
each beta in F choose by induction a V_beta contained in O.
Their recursive union is a basic neighborhood contained in O.
At level zero the assertion is immediate. This proves the base
property including the possibly empty F case.

The U_n obey the open rule, and the basic-neighborhood trace on
L_n proves relative discreteness. To see T1, remove one point
`(gamma,m)`. At a remaining point whose immediate preceding
level is m choose `F(alpha,empty,{gamma})`; at any other positive
level choose kappa. These witnesses show the complement is open.

If every F in B_alpha meets A, every neighborhood of the point
on level n+1 meets A times {n}. Conversely, if F avoids A, the set

    {(alpha,n+1)} union (F times {n}) union U_{n-1}

is an open neighborhood avoiding A times {n}. This verifies both
directions of the Phi formula, without appealing to unspecified
closure behavior at other levels.

## lem-balogh-hereditary-normality

**Contract (AC).** The topology just defined is hereditarily normal.
In fact any separated subsets H,K of X have disjoint open
neighborhoods in X. Thus, with T1, X is Hausdorff and normal.

**Step 1: same-level separation.** For every A subset kappa and n,
there are disjoint open sets in U_n containing A times {n} and
(kappa minus A) times {n}. For n=0 take those sets themselves.
For the inductive step put `A'={beta:d_c_A(beta)=1}`. By induction
separate A' and its complement on level n by disjoint open
O_1,O_0 in U_n. Adjoin A times {n+1} to O_1 and its complement
on level n+1 to O_0. Their tops have witnesses
`F(alpha,{c_A},empty)`, respectively inside A' and its complement,
so both enlarged sets are open and remain disjoint. This proves
the claim with the stronger fact that the neighborhoods stay in
U_n. In particular two disjoint subsets of a common level can
be separated there, extending one side to a full partition first.

**Step 2: the open-extension calculation.** Suppose C is closed,
and O is open in U_m (hence in X) with
`L_m minus C subset O`. For t>m the set

    O* = O union (U_t minus (U_m union C))

is open. At levels at most m the existing O is a witness. At
level m+1 a point outside C has, from openness of X minus C,
an F whose level-m slice misses C; this slice is in O. At any
level j>m+1 the same witness lies in level j-1>m, outside C,
and hence in the newly adjoined part. This checks every point.
The identical argument gives openness of
`O union (X minus (U_m union C))` with no upper level bound.

**Step 3: different levels.** Let H,K be separated, meaning
`H intersect closure K = closure H intersect K = empty`.
Fix m<n. Use Step 1 on level m to separate `L_m intersect
closure K` from `L_m minus closure K` by O_K,O_H in U_m.
The first contains K intersect L_m. By Step 2 with C=closure K,

    O_H* = O_H union (U_n minus (U_m union closure K))

is open and contains H intersect L_n. It is disjoint from O_K,
since the added portion is outside U_m. This solves the
different-level exercise with the corrected level m in its
initial partition.

**Step 4: one level versus the whole opposite set.** Fix n.
For each m<n take disjoint open P_m,Q_m in U_n around
H intersect L_n and K intersect L_m from Step 3. In addition,
use Step 1 on L_n to obtain disjoint open P_n,Q_n in U_n
around `L_n intersect closure H` and `L_n minus closure H`.
The latter contains K intersect L_n. Put

    V_n = intersection_{m<=n} P_m,
    O'  = union_{m<=n} Q_m.

Then V_n contains H intersect L_n, O' contains K intersect U_n,
they are disjoint and open, and **O' also contains
L_n minus closure H**. That last property is essential. Step 2
now makes

    O = O' union (X minus (U_n union closure H))

open; it contains every point of K because K misses closure H.
It remains disjoint from V_n subset U_n. Therefore
`closure V_n intersect K=empty`. Repeat with H,K interchanged
to obtain open W_n containing K intersect L_n with
`closure W_n intersect H=empty`.

**Step 5: countable assembly.** Define

    V = union_{n<omega} (V_n minus union_{i<=n} closure W_i),
    W = union_{n<omega} (W_n minus union_{i<=n} closure V_i).

Each summand is open, so V,W are open. Every point of H lies
in some V_n and in none of the closure W_i; similarly K subset W.
If a point belonged to summands with indices n and m, then
m<=n would make the V-summand omit W_m, while n<=m would
make the W-summand omit V_n. Hence V and W are disjoint.

Finally, if Y subset X and H,K are disjoint closed subsets of Y,
then `closure_X(H) intersect Y=H` and similarly for K, so they
are separated in X. The open neighborhoods just constructed,
intersected with Y, witness normality of Y. T1 is inherited by
subspaces; for distinct points of X, their closed singletons
and normality give Hausdorff separation. No merely-normal
argument has been substituted for hereditary normality.

## lem-balogh-failure-of-countable-shrinking

**Contract (AC).** The increasing open cover U_n of X has no
closed shrinking: for any closed C_n subset U_n,
`union_n C_n` fails even to cover L_0. Consequently X is not
countably paracompact.

Call S subset kappa separated if there is a simultaneous choice
`F_alpha in B_alpha`, alpha in S, with

    alpha notin F_beta and beta notin F_alpha
       for distinct alpha,beta in S.

Call it sigma-separated if it is a countable union of separated
sets. Subsets of separated sets are separated, by restriction of
the witness. A countable union of sigma-separated sets is
sigma-separated, by choosing the witnessing sequences and
flattening the two natural-number indices.

**The whole cardinal is not sigma-separated.** If kappa were
covered by separated S_n, replace them by their disjoint
successive differences and retain the restricted witnesses.
Let f(alpha) be its piece index. Choose finite parameters
`g(alpha) subset C` and `h(alpha) subset kappa` representing
the witness F_alpha as F(alpha,g(alpha),h(alpha)). Apply the
combinatorial-map lemma. Its alpha<beta lie in the same piece
and satisfy beta in F_alpha, contradicting separation. Notice
that only this directed membership is required; the map lemma
does not promise the reverse membership.

**Finite peeling of closed bounded-level sets.** Define
`Psi(A)=A intersect Phi(A)` using the closure trace proved in
the basis lemma. For alpha in `A minus Psi(A)` choose F_alpha
avoiding A. Thus `A minus Psi(A)` is separated, since every
other point of this set belongs to A and is avoided by F_alpha.
Psi is used rather than assuming the generally false
inclusion A subset Phi(A).

Let C be closed and C subset U_n. Put

    A_0={alpha:(alpha,0) in C},  A_{j+1}=Psi(A_j).

Inductively `A_j times {j} subset C`: true at j=0, and at the
successor stage `A_{j+1} subset Phi(A_j)` means its next-level
points belong to closure(A_j times {j}), which is contained in
the closed C. Consequently A_{n+1} is empty because C has no
point on level n+1. The descending sequence gives the exact
finite decomposition

    A_0 = union_{j=0}^n (A_j minus A_{j+1}),

whose pieces are separated by the preceding paragraph.

If closed C_n subset U_n covered L_0, their bottom traces
would cover kappa, and each trace is a finite union of
separated sets. Flattening the pairs (n,j), j<=n, would make
kappa sigma-separated, contrary to the map lemma. This proves
the explicit cover obstruction.

The implication from countable paracompactness can either use
the earlier local increasing-cover/shrinking theorem in A713,
with its exact hypothesis checked at authoring time, or the
following full local argument (so there is no missing supplier):
a locally finite open refinement R of an increasing open
cover U_n has, for each R in R, a least m(R) with R subset
U_m(R). Set

    C_n = X minus union{R in R:m(R)>n}.

Then C_n is closed and C_n subset U_n: any point outside U_n
lies in a refining member, whose index must exceed n. For
each point x choose a neighborhood meeting only finitely many
refining members. For n at least their finitely many indices,
x belongs to C_n. Thus the C_n cover X. Applying this to the
present U_n contradicts the proved obstruction. This argument
matches the usual open-refinement definition of countable
paracompactness and states explicitly the increasing-cover
step rather than importing it as an unproved criterion.

## thm-balogh-continuum-sized-zfc-dowker-space

**Contract (AC).** There exists a Hausdorff hereditarily normal,
sigma-relatively discrete space X with `|X|=2^{aleph_0}` which
is not countably paracompact. In particular it is a Dowker space.
If the commissioned conclusion also states that
`X times [0,1]` is nonnormal, use the already earlier local
Dowker equivalence in A713, with its proved normal-Hausdorff
hypotheses and compact-interval interface, not a citation to
the name alone.

**Proof.** Choose D by the combinatorial lemma and form X by
the topology definition. The basis lemma supplies T1 and the
countably many relatively discrete layers covering X. The
hereditary-normality lemma supplies normality and Hausdorffness.
The failure-of-shrinking lemma supplies failure of countable
paracompactness. Finally alpha maps to (alpha,0), injecting
kappa into X, while `|kappa times omega|=kappa` under the
stated infinite-cardinal arithmetic gives the reverse bound.
Thus its cardinality is exactly the continuum. No CH, diamond,
forcing axiom, first-countability claim, or continuum regularity
assumption enters this conclusion.

The first seven units are in the dependency order displayed.
The last unit consumes units 3–7 (and their earlier foundations),
not any additional prerequisite pair. The product-nonnormality
clause has an explicitly identified earlier local interface;
it is not needed to establish the normal/non-countably-
paracompact definition of Dowker space itself.

## Source corrections and remaining authoring gates

| Hart location | Printed issue or missing inference | Required local form |
|---|---|---|
| p.31, discussion before Lemma 2.1 | Wording says countable paracompactness follows | The construction proves its failure. |
| p.31, families called filters | Empty basic F is expressly allowed | Use possibly improper finite-intersection families; never infer F nonempty. |
| p.31, Exercise 3 hint | Summation indices are crossed | Use the explicitly proved V_n/W_n finite-closure-removal formulas above. |
| p.32, Exercise 5(a) | Level n sets allegedly in U_m for m<n | Partition L_m, then extend the opposite side through levels m+1 to n. |
| p.32, Exercise 6(a)–(b) | Merely covering K intersect U_n does not justify the next extension's openness | Arrange O' to cover L_n minus closure H as well; check level n+1 separately. |
| p.32, Exercises 8–9 | Iteration may be mistaken for a decreasing Phi iteration | Use the proved descending Psi(A)=A intersect Phi(A) and n+1 finite differences. |
| p.33, Exercise 14 | An unrestricted-alpha reading of recovery from g restricted to N is invalid | Only alpha in A=N intersect kappa and evaluation of binary traces on A. |
| p.33, enumeration | Expressions restrict functions to N or range over all c in M | Domains are A; binary functions range over C intersect M. |
| p.33, triples after enumeration | E is printed as a finite subset of a_beta | E is a finite subset of B_beta, hence a finite family of binary functions on A_beta. |
| p.33, H(n,E,e) | Unsubscripted f,g obscure typed local data | Use p_beta,q_beta and E=q_beta(gamma) intersect B_beta. |
| p.33, Exercise 16 | Infinite J asserted without an empty-I convention | Define J empty when I empty; in the reflected application I is proved nonempty. |
| pp.33–34, gap between Exercises 15 and 17 | Need infinite exact-trace-root candidates, not just uncountable ambient K | Unique ownership of a petal meeting M forces its owner into M; then K intersect (N minus M) is infinite. |
| p.34, Exercise 17 | E=g(beta intersect M) is ill-typed | First E0=g(beta) intersect M; then E={c restricted to A:c in E0}. |

All mathematical source exercises used by the eight-unit route have
explicit proofs above, including the finite-avoidance and cofinality
subclaims even though they are not needed by the shortest final map
argument. The primary Balogh1996 source remains unavailable after the
recorded attempts. The source-access limitation must not be converted
to a false full-text receipt. The local proofs, source corrections and
the exact product-nonnormality supplier must receive the normal
independent review before any publication claim. This report does not
certify the other general-PCF or conditional-small-space units, the
whole 60-item allocation, or the full original-24 closure.
