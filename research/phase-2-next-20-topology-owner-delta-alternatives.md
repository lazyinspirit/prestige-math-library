# Owner topology support: elementary countable Delta arguments

Status: separate research argument, not an item decision or independent review.
Group e retains all batch 7–9 item/manifest/contract/coverage ownership. No
canonical inventory addition is made here. These arguments settle elementary
suppliers only; the exact approximate-cycle comparison and the full held
convergence theorem remain unresolved at this checkpoint.

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; batch-7 notes and current
group-e checkpoint; the exact convergence manifest and its six direct item
dependencies in full. The convergence item file did not exist at entry.

Throughout, groups can be modules over one fixed ring. Assume AC, used to
choose countably many representatives/preimages and recursive lifts. Products,
quotients and kernels have their coordinate meanings. For a tower A with maps
u_m:A_(m+1)->A_m write P(A)=product A_m and Delta_A(x)_m=x_m-u_m x_(m+1).
Write L(A)=ker Delta_A and R(A)=coker Delta_A. No general derived-functor
identification is needed.

## 1. Six-term sequence, including all exactness positions

For a termwise short exact sequence 0->A->B->C->0 of towers, identify A_m
with its image in B_m. Product surjectivity follows by AC. Define
partial:L(C)->R(A) by choosing b in P(B) above c and taking [Delta_B b].
The latter lies in P(A), because Delta_C c=0. Changing b by a in P(A)
changes it by Delta_A a; hence partial is well-defined and additive.

There is a natural exact sequence

0 -> L(A) -> L(B) -> L(C) -> R(A) -> R(B) -> R(C) -> 0.

Injectivity at L(A) is coordinatewise. An element of L(B) mapping to zero
in L(C) lies coordinatewise in A, and remains Delta-closed, proving exactness
at L(B). At L(C), a compatible B lift gives zero connecting class. Conversely,
if Delta_B b=Delta_A a, then b-a is a compatible lift. At R(A), the connecting
class becomes a Delta_B boundary. Conversely, if a in P(A) equals Delta_B b,
then the image c of b is compatible and partial(c)=[a]. At R(B), if b maps
to Delta_C c, choose t in P(B) above c; b-Delta_B t lies in P(A) and represents
the same R(B) class. Conversely every such image maps to zero. Finally every
element of P(C) has a P(B) lift, proving surjectivity on R. These constructions
commute with a morphism of short exact tower sequences because images of lifts
are lifts and the Delta operators commute with the morphism.

## 2. Surjective and Mittag–Leffler towers

If every u_m is surjective then Delta_A is onto: set x_0=0 and recursively
choose x_(m+1) with u_m x_(m+1)=x_m-y_m for a prescribed y in P(A).
Thus R(A)=0. The same recursion with zero y extends a prescribed x_m to
a compatible tuple (earlier coordinates are forced); L(A)->A_m is onto.

Call A Mittag–Leffler if for each m the images of A_k->A_m are eventually
constant as k increases. Let I_m be that stable image. The maps I_(m+1)->I_m
are surjective: take k large enough to stabilize images at m and m+1, lift
an element of I_m from A_k, and project the lift to I_(m+1). The quotient
tower Q_m=A_m/I_m is pro-zero: for each m there is k such that Q_k->Q_m
is zero. In a pro-zero tower Delta_Q is an isomorphism. Indeed its inverse is

x_m = y_m + u_(m,m+1)y_(m+1) + u_(m,m+2)y_(m+2) + ...,

where only finitely many summands are nonzero at every fixed m; cancellation
proves Delta x=y. A compatible x has x_m=u_(m,k)x_k=0 for sufficiently large
k, proving injectivity. Apply the six-term sequence to 0->I->A->Q->0.
R(I)=0 by surjectivity and R(Q)=0 by the formula, so R(A)=0.

## 3. Milnor sequence for degreewise surjective towers of chain complexes

Let C^(m) be chain complexes with degreewise surjective transition maps.
Degreewise the first argument gives a short exact sequence of complexes

0 -> L(C) -> P(C) --Delta--> P(C) -> 0.

Product cycles are products of cycles because the differential is coordinatewise.
Product boundaries are products of boundaries: choose a primitive of each
boundary using AC. Therefore H_n(P(C))=P(H_n(C)) by the coordinate map;
it is onto by choosing cycle representatives, and its kernel is exactly the
product of boundary groups. Under this identification the map induced by Delta
is Delta on the homology tower.

For completeness, the connecting homomorphism sends a product cycle z in the
right-hand complex to the class of dx in L(C), where Delta x=z. Delta(dx)=0.
Changing x by an element of L(C) changes dx by an L(C) boundary. Changing z
by d w and lifting w to t changes x to x+d t, giving the same class. The usual
three positions can be checked directly: an L(C) cycle which bounds in P(C)
is dx of such an x and hence in the connecting image; a product homology class
whose Delta is zero has Delta x=d y and can be corrected after a lift of y to
come from L(C); a connecting class is zero precisely when its lift can be
corrected by an L(C) element to a product cycle. This yields

0 -> R(H_(n+1)(C^(m))) -> H_n(L(C)) -> L(H_n(C^(m))) -> 0.

More explicitly for the middle assertion just used: if x is a product cycle
and Delta x=d y, choose t with Delta t=y and replace x by x-d t; this is an
L(C) cycle representing the same product homology class. For the connecting
kernel, if dx=d a with a in L(C), x-a is a product cycle mapping to z. These
also prove naturality by sending selected lifts through a tower morphism.

## 4. A double-tower Delta complex without Grothendieck machinery

Let A_(i,j), i,j>=0, be a commuting double inverse system. Put
P=product_(i,j) A_(i,j), D=Delta_i and E=Delta_j; then DE=ED.
Consider the three-term cochain complex

K: P --x |-> (Dx,Ex)--> P direct-sum P --(a,b) |-> Ea-Db--> P.

Its differential squares to zero by commutation. Set V=ker E and W=coker E,
with the induced D maps. There are natural identities and an exact sequence

H^0(K)=ker(D:V->V),
0 -> coker(D:V->V) -> H^1(K) -> ker(D:W->W) -> 0,
H^2(K)=coker(D:W->W).

For H^0 this is the common kernel. For H^1, send a closed pair (a,b), with
Ea=Db, to [b] in W. Its D image is [Db]=[Ea]=0. Boundaries (Dx,Ex) map to
zero. If [b]=0, write b=Ex and subtract (Dx,Ex), giving (a-Dx,0), whose
first coordinate lies in V. Two such pairs differ by a boundary exactly when
that boundary has Ex=0, meaning x in V. Thus the kernel is precisely coker D
on V. Conversely, for [b] in ker D on W, Db=Ea for some a, so (a,b) is closed
and maps to [b]. Finally H^2=P/(EP+DP), which is exactly coker D on W.
Every displayed identification commutes with morphisms of double towers.

AC identifies V with product_i L_j(A_(i,j)), and W with product_i R_j(A_(i,j)).
The first identification is coordinatewise without choice; the second uses
product surjectivity and identifies product_i image Delta_j with image E.
D is the Delta map in the i direction on these products. Consequently

0 -> R_i L_j A -> H^1(K) -> L_i R_j A -> 0,
H^2(K)=R_i R_j A.

Interchanging i,j gives the other version (switching the pair coordinates,
with the corresponding sign in degree 2). In particular, if L_j A_(i,j)=0
for every i, while R_i A_(i,j)=0 for every j, then

L_i R_j A = R_j L_i A.

If also L_i A_(i,j)=0 for every j, this common group is zero. These conditions
must be checked for the actual approximate-cycle double system; the formula
is not a licence to interchange arbitrary lim and lim-one.

## Source reading and exact remaining gap

Primary reference newly consulted: Boardman, *Conditionally Convergent Spectral
Sequences* (1999), https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/boardman-SS.pdf.
Browser extraction exposed pp1–8; read section 0 and section 1 through Proposition
1.10 and section 2 through the beginning of Theorem 2.6. Its six-term argument
explicitly leaves a diagram-chase lemma as an exercise; section 1 therefore
supports the interfaces, while the detailed arguments above supply them locally.
No complete-paper reading is claimed. A shell download of the people.math.rochester
mirror timed out at 30 seconds (initial attempt, no retry). Browser opening that
mirror failed unsafe/non-retryable; the sas mirror extraction succeeded, but two
requests for the later passage timed out. No source verification stamp or change
to any existing source-attempt history was made.

Weibel's original URL was already browser accessible in prior worker evidence.
A fresh browser open exposed introductory pages but not the target passage;
subsequent passage/find requests failed timeout/no matching text. This is not
recovery of the exhausted local source-fetch budget and no budget was reset.

The actual Boardman approximate-cycle groups, their maps to the limiting page,
and their inverse-limit vanishing still need an explicit proof with correct
indices. The above four arguments are complete elementary candidates for local
suppliers, but do not settle either promised clause of the convergence theorem.
Do not replace the theorem by these statements or clear its escalation yet.

## 5. Rectangular approximate cycles and complete weak convergence

This section closes the earlier stated approximate-cycle gap for the FIRST
(weak-convergence) clause. The strong-convergence clause remains open here.
The proof is direct, using the preceding Delta calculation. Use integer indices
p,t<=0 for double towers toward minus infinity; any fixed upper endpoint gives
the same limit and cokernel. Removing finitely many initial coordinates preserves
both: compatible tuples extend uniquely backwards, while arbitrary Delta
solutions extend backwards by the recursion x_m=y_m+u_m x_(m+1). This proves
cofinal-tail invariance rather than presuming a general derived-functor result.

Fix a homological degree n. Put

A(p,t) = F_p C_n intersect d^-1(F_t C_(n-1)),
Z_p = F_p C_n intersect ker d,
Q_p = R_(t toward minus infinity) A(p,t).

All maps are subgroup inclusions; their squares commute. Completeness means
C_k -> lim_m C_k/F_(-m) C_k is an isomorphism, so each C_k is separated.
Every F_p C_k is closed: a limit whose residues are represented in F_p has
zero residue modulo F_p, hence belongs to F_p. The map d is continuous in
this elementary sense because it preserves each filtration piece.

For fixed t, when p<=t, A(p,t)=F_p C_n, since d preserves F_p and F_p⊂F_t.
Thus its p tower has limit zero and R zero by completeness and section 1's
completion exact sequence (or the already authored completion lemma).
For fixed p, its t limit is Z_p, because separatedness of C_(n-1) forces dx=0.
Furthermore the subgroup tower Z_p has limit zero and R zero. To prove the
latter explicitly, given y_m in Z_(-m), form the tail sum

x_m = sum_(k>=m) y_k.

Its residue modulo each F_(-l) is a finite sum (terms k>=l vanish there), and
these residues are compatible. Completeness defines its unique value in C_n.
It belongs to F_(-m) by closedness. Applying d gives zero in every quotient
of C_(n-1), hence zero by separatedness. Therefore x_m belongs to Z_(-m),
and the finite residue calculations give x_m-x_(m+1)=y_m. Delta on this
tower is onto. This is a specific completeness proof for the cycle subgroup,
not a general claim that arbitrary subgroups of complete groups are complete.

Apply section 4 to the rectangular system. Computing H1 first in the p
direction gives H1=0, because both L_p A and R_p A vanish for each t.
Computing first in the t direction gives

0 -> R_p Z_p -> H1 -> L_p Q_p -> 0.

Hence L_p Q_p=0 (also R_p Z_p=0 as proved directly). This proves the needed
vanishing inverse limit of obstructions without a Grothendieck spectral sequence.

Now fix any integer p, allowing the t tower to start at t<=p−1, and let
S(p,t) be the image of A(p,t) in G_p=F_p C_n/F_(p−1) C_n. The exact sequence

0 -> A(p−1,t) -> A(p,t) -> S(p,t) -> 0

is immediate from the kernel of the quotient F_p->G_p. Its six-term sequence
is

0 -> Z_(p−1) -> Z_p -> S(p,infinity) -> Q_(p−1) -> Q_p
  -> R_t S(p,t) -> 0,

where S(p,infinity) is the intersection of these nested subgroups of G_p.
The Q transition is precisely induced by inclusion, independently of the
choice of cofinal t endpoints. On the spectral sequence, S(p,p−r) is the
r-cycle numerator viewed in E0 at (p,n−p). Its successive quotient by the
r-boundary subgroup is E^r. The boundary subgroup is contained in every
later cycle numerator: its representatives are differentials, so their
differentials are zero. The next-page formula therefore implies that d^r
out of this spot vanishes exactly when S(p,p−r)=S(p,p−r−1): the kernel of
d^r is the latter numerator modulo the same boundary subgroup. Consequently
outgoing regularity makes S(p,t) eventually constant, and R_t S(p,t)=0 by
section 2. The maps Q_(p−1)->Q_p are surjective. For their countable tower,
L_p Q_p projects onto each Q_p by recursive lifting and AC, whereas the
previous double-tower computation gives L_p Q_p=0. Thus every Q_p=0.

The six-term sequence now says Z_p->S(p,infinity) is onto. Its kernel is
Z_(p−1). Let B_p be the union of the spectral-sequence boundary subgroups
in G_p. Exhaustiveness identifies this with the image in G_p of
F_p C_n intersect d(C_(n+1)): every primitive lies in some F_s C_(n+1),
and increasing its filtration index until the relevant r is nonnegative
places its differential in the corresponding r-boundary term. Conversely
every such boundary representative is an actual differential. Hence

E^infinity_(p,n−p) = S(p,infinity)/B_p
  = Z_p / (Z_(p−1) + (F_p C_n intersect d(C_(n+1)))).

The right-hand quotient is F_p H_n(C)/F_(p−1) H_n(C) for the induced image
filtration: two cycles in F_p have homology classes equal modulo the previous
image exactly when their difference is a cycle in F_(p−1) plus a boundary
lying in F_p. This proves weak convergence with the prescribed actual-cycle
identification, including injectivity as well as surjectivity.

The source search exposed the relevant Weibel 5.5.8 statement/proof in the
Rochester mirror https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/weibel-homv2.pdf.
Only its indexed excerpt, not the entire PDF, was read. Its approximate-cycle
six-term interface agrees with the rectangular formulation above after a
cofinal t shift. No retrieval stamp or source-disposition change is inferred.

Remaining task: prove the SECOND clause (bounded-above strong convergence),
including separatedness/completeness of the homology filtration and incoming
regularity, without assuming strictness of an arbitrary induced homology map.
The commonly quoted finite associated-graded image argument needs an actual
proof of its strictness/image identification; it is not supplied by the weak
clause just proved. Neither theorem acceptance nor source closure is recorded.

## 6. Strong convergence by a uniform bound on primitives

This supplies the second clause directly and avoids the unproved strictness
claim mentioned above. Here bounded above means that at one fixed starting
page E^a, for each total degree k there is P(k) with E^a_(s,k−s)=0 for s>P(k).
The page index a is a finite nonnegative integer; replace it by max(a,1) if
necessary, since vanishing persists to later pages. The argument also works
when such a finite page is specified separately in each total degree. Outgoing
regularity and the hypotheses of section 5 are retained, so Q_p=0 for every
p and every chain degree.

First, d(F_P C_(n+1)) is closed in C_n for every P. Suppose x lies in
intersection_t (d(F_P C_(n+1))+F_t C_n). Choose y_t in F_P C_(n+1) with
x-dy_t in F_t. Their classes in

F_P C_(n+1) / A(P,t),

where A(P,t) is now formed in chain degree n+1, are compatible: for t'<=t,
d(y_t-y_(t')) lies in F_t. Apply section 1 to the tower exact sequence

0 -> A(P,t) -> constant F_P C_(n+1) -> F_P C_(n+1)/A(P,t) -> 0.

Since R_t A(P,t)=Q_P=0, a single y in F_P C_(n+1) realizes all these quotient
classes. Thus x-dy belongs to every F_t C_n and is zero by separatedness.
This proves closedness with no assumption about arbitrary continuous images.

Next prove a uniform primitive bound. Fix n and choose P such that the
E^a terms of total degree n+1 vanish at every filtration index s>P. For every
t<=P-a and every boundary b in F_t C_n, there is a primitive y in F_P C_(n+1).
To see this, choose any primitive and use exhaustiveness to put it in F_s.
If s>P, then dy=b belongs to F_t⊂F_(s-a), so y is an a-cycle at filtration s.
The vanishing E^a_(s,n+1−s)=0 and the filtered-complex subquotient formula give

y = z + d w,

with z in F_(s−1) C_(n+1), more precisely in A^(a−1)_(s−1), and w in the
corresponding (a−1)-cycle group at filtration s+a−1 in degree n+2. Only the
membership z in F_(s−1) and equality dy=dz are needed. Replace y by z. The
same test applies until its filtration index has fallen to P. There are only
s−P steps; d²=0 preserves the primitive at each step. If its original index
is already at most P, no reduction is needed. This proves the uniform bound.

The full boundary subgroup B_n=d(C_(n+1)) is now closed. Let x belong to its
closure. Choose t0<=P-a and choose a boundary b0 with x-b0 in F_(t0). For
each t<=t0 choose a boundary b_t with x-b_t in F_t. Then b_t-b0 lies in
F_(t0), so the uniform primitive bound places it in d(F_P). The element
x-b0 is therefore in the closure of d(F_P). By the preceding closedness
argument x-b0 lies in d(F_P), and x is a boundary. This reasoning is needed
because x itself need not lie in a small F_t; one cannot simply assume that
each approximating boundary has small filtration.

Consequently the image filtration on H_n(C) is separated. Indeed a homology
class in every F_t H_n(C), represented by one cycle z, admits cycles z_t in
F_t with z-z_t in B_n. Thus z belongs to intersection_t(B_n+F_t), which is
B_n by closedness, so its class is zero. Exhaustiveness of this filtration
follows by placing any single cycle in a finite-index filtration piece.

For completeness, consider the termwise exact sequence of subgroup towers

0 -> (B_n intersect F_(-m) C_n) -> Z_(-m) -> F_(-m) H_n(C) -> 0.

Every boundary is a cycle, and the last map is surjective by definition of
the image filtration. Section 5's convergent-tail-sum argument proves
R_m Z_(-m)=0. The right end of the six-term sequence then proves
R_m F_(-m)H_n(C)=0 (no condition on R_m(B_n intersect F_(-m)) is required).
The subgroup completion exact sequence identifies the cokernel of
H_n(C)->lim_m H_n(C)/F_(-m)H_n(C) with this zero group. Its kernel is the
intersection, already zero. Hence the canonical completion map is an
isomorphism.

Finally, the incoming differential at (p,n−p) on page r has source of total
degree n+1 and filtration p+r. For r>=a and p+r>P(n+1), this source vanishes,
because E^r is a subquotient of E^a. Thus each incoming differential is zero
for all sufficiently large r. Together with assumed outgoing regularity this
is the exact two-sided convention used by the local definition of strong
convergence. Section 5 gives the specified actual-cycle identification, and
the preceding paragraphs give exhaustive, separated, complete homology
filtration. Both promised clauses are therefore proved by the local arguments
in sections 1, 4, 5, and 6; section 2 supplies the elementary constant-tower
case used in section 5. Section 3 is an additional complete Milnor supplier,
but is not load-bearing for this shorter strong-convergence proof.

This is a research proof awaiting integration, rereading of the exact local
subquotient supplier, explicit contracts/checks, and owner decision. It does
not retrospectively claim source reading or independent mathematical review.
No item theorem/manifest/contract/coverage file has been edited by this agent.

## Local interface audit completed after the construction

Read in full the current files for the r-page definition, r-cycle/boundary
definition, subquotient/local-lifting lemma, induced-differential lemma,
next-page theorem, limiting-cycle/boundary definition, induced homology
filtration definition, and exhaustive/separated/finite filtration definition.
The next-page theorem's steps 1.2–2.1 give K=A^(r+1)+A^(r−1)_(p−1), so after
projection to E0 the outgoing-kernel numerator is precisely the next projected
cycle numerator used in section 5. The r-page denominator is exactly the
primitive-descent expression in section 6, with chain degree n+1. No mismatch
was found in these particular used clauses. These are bounded actual-interface
readings, not a transitive-closure certification or independent judgment.

Recommended minimal local inventory within the existing A page: the already
proposed `lem-countable-tower-six-term-limit-sequence`,
`lem-two-by-two-delta-complex-for-a-double-tower`,
`lem-boardman-approximate-cycle-obstruction-sequence`, and
`lem-complete-approximate-cycle-obstructions-have-zero-inverse-limit`.
The theorem can contain the outgoing-regularity and primitive-descent arguments.
A separate Mittag–Leffler definition and Milnor lemma are not required by this
proof; retain their research arguments above without expanding canonical scope
unless another actual consumer requires them. Original inventory and claims
remain fixed. The active author or root must authorize precise placement and
refresh exact owner scope before decisions can be recorded after integration.
