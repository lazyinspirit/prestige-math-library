# SET-30: ten local small-Dowker proof contracts

Date: 2026-09-09. Author: delegated Astra-3. Research only: no live scaffold,
plan, ledger or engine edit. These are proposed contracts with mathematical
proofs, not publication approval or independent judging. The ten IDs below are
local inventory proposals; only the engine's authorized writer may reconcile
them into the live manifest. Internal sublemmas do not need extra item IDs.

## Scope, source versions and dependency discipline

All constructions here take place at omega_1. Assume AC explicitly and include
`def-axiom-of-choice` in the affected contracts. AC is used for simultaneous
countable enumerations/ladders, countable unions, well-orderings and transfinite
choices. No CH is assumed except in Item 3 or an explicitly CH-conditional
conclusion. No recorded catalogue result is a supplier.

Read in full for this research:

- Rinot–Shalev–Todorcevic (RST), *A new small Dowker space*, author preprint
  **December 22, 2022**, 15 pages,
  https://www.assafrinot.com/files/paper54.pdf: Definitions 1.1, 2.1 and 2.10;
  Lemma 2.12; Theorem 3.3, pp.6–10; Fact 4.2 and Theorem 4.3, pp.11–12;
  Appendix A. Source SHA-256
  `c3f03850f3d6d33f3045422370bf7b10c7e32261ad9699e552b3fcb030fae763`.
- Rinot–Shalev (RS), *A guessing principle from a Souslin tree, with
  applications to topology*, https://www.assafrinot.com/files/paper48.pdf,
  30-page author version: Proposition 2.8 p.5 and complete §3, pp.16–19.
  The proof below expands local disjointification and normality instead of
  importing the general nonreflection or MA alternatives in Lemma 3.10.
- Lambie-Hanson–Rinot, *Knaster and friends III*, author version June 17,
  2022, https://www.assafrinot.com/files/paper36.pdf, Lemma 3.31 pp.18–19.
- Chen–Garti–Weinert, *Cardinal characteristics of the continuum and
  partitions*, **arXiv:1801.00238v1, December 31, 2017**,
  https://arxiv.org/pdf/1801.00238, complete §3 pp.14–16, especially
  Theorem 3.1/Claim 3.2.

The last two source imports have complete local proofs in
`research/phase-2-catchup-24-local-set30-closure-review.md`, sections
“Local contract 1” and “Local contract 2”. They are also specified below.
Authoring must place the actual proofs inside Items 5 and 6; a link to a
research report is not an item dependency or substitute for publication.

Previously published candidate elementary interfaces include
`thm-countable-union-of-countable`,
`thm-omega-one-is-the-least-uncountable-ordinal`,
`thm-transfinite-recursion`, `thm-fodor-pressing-down`,
`thm-small-intersections-of-clubs`,
`thm-diagonal-intersection-of-clubs`, and
`thm-countable-subsets-of-omega-one-are-bounded`.
Exact live bodies, hypotheses and transitive closures still require the normal
authoring audit. A proof below that supplies a fact locally does not need its
separate global theorem as an additional dependency.

For notation, kappa=omega_1 and E is the set of nonzero countable limit
ordinals. A subset of kappa is unbounded iff it is uncountable. An initial
segment alpha excludes alpha itself. For ordinals alpha<beta, write
(alpha,beta) for the strict interval. “Bounded in alpha” is used instead of
“finite” unless finiteness has actually been proved.

## 1. def-small-dowker-luzin-stick-and-ad-principles

**Vocabulary contract.** Define all of the following precisely, without
asserting their existence in ZFC:

1. The Baire sequence space N=omega^omega, its finite strings omega^{<omega},
   and cylinders N_t={x:t is an initial segment of x}. A closed set F is
   nowhere dense iff every cylinder has a smaller cylinder disjoint from F.
   A classical Luzin set in N is an uncountable set meeting every meager set
   in a countable set. For the construction it suffices to have a set L of
   size omega_1 such that every uncountable B subset L is dense in some
   cylinder: equivalently, some t has the property that each finite extension
   u of t is extended by a member of B. Call this the **omega_1-Luzin
   cylinder property** (RST Definition 2.10). Do not identify it with the
   stronger classical Luzin definition without a proved implication.
2. **Stick**: a sequence (s_xi)_{xi<kappa} of countably infinite subsets of
   kappa such that every uncountable X subset kappa contains one s_xi.
3. Fix a partition P of E into stationary sets. An **AD guessing array**
   for P is (A_alpha^i : alpha in E, i<omega) such that each A_alpha^i is
   cofinal in alpha, its rows are pairwise disjoint, and for alpha<beta and
   i,j<omega, A_alpha^i intersect A_beta^j is bounded in alpha. For every
   finite nonempty list X_0,...,X_(r-1) of uncountable subsets of kappa and
   every S in P, the alpha in S satisfying
   sup(A_alpha^i intersect X_j)=alpha for all i<omega and j<r form a
   stationary set. This is exactly RST's clubsuit_AD(P,omega,<omega), not
   its starred finite-intersection strengthening.
4. The **strong diagonal AD property** additionally requires all cross-row
   intersections finite and, for every sequence (X_nu)_{nu<kappa} of
   uncountable sets, stationarily many alpha in every S in P satisfy
   sup(A_alpha^i intersect X_nu)=alpha for all i<omega and nu<alpha.
   This is the omega_1 instance of RST Definition 4.1. It implies the finite
   version by extending a finite list to a kappa-sequence and ignoring an
   initial segment of alpha.
5. A **single-ladder two-target AD system** on a countably infinite
   stationary partition (S_n)_{1<=n<omega} of a subset of E consists of
   cofinal A_alpha subset alpha whose pairwise intersections are bounded in
   the smaller index, and which guess every two uncountable targets
   simultaneously stationarily often on every S_n. Choosing i=0 in an AD
   array supplies this. Rows need not have order type omega.

Use the existing precise `def-diamond-on-omega-one` and
`def-ostaszewski-club-principle` for ordinary diamond and Ostaszewski
clubsuit; repeat their quantifiers where used in Item 10. Ordinary club
guessing quantifies over club targets, not all uncountable targets, and is
not identified with either of these AD principles.

## 2. def-small-dowker-tight-strongly-unbounded-coloring

**Contract.** For c:omega times kappa -> omega put c_beta(n)=c(n,beta).
It is strongly unbounded if every uncountable B subset kappa admits a finite
string t of length n such that {c_beta(n):beta in B, t subset c_beta} is
unbounded in omega. For T subset omega^{<omega}, let

    [T]_c={beta<kappa : for all n, c_beta restricted to n belongs to T}.
    T_c={T subset omega^{<omega} : [T]_c is uncountable}.

Call c tight if T_c has an inclusion-downward cofinal family of size at
most kappa: for every T in T_c, some member U of that fixed family satisfies
U subset T. No downward-closure assumption on T is needed.

Also define Delta(x,y)=least n with x(n)!=y(n) for DISTINCT sequences, and
fix the explicit strictly increasing majorant
hat(x)(n)=sum_{m<=n}(x(m)+1). The construction must prove distinctness
before using Delta. This catches an implicit step in the source: distinct
column indices alone do not imply distinct column functions.

## 3. lem-small-dowker-ch-gives-luzin-set

**Contract (AC).** CH implies the existence of a classical Luzin set of
size omega_1 in N, hence a set with the omega_1-Luzin cylinder property.
Every classical Luzin set in N has an omega_1-sized subset with that
property. A classical uncountable Luzin set in R also suffices via the
published Baire-space/irrational-space homeomorphism, subject to its normal
dependency audit.

**Complete local proof.** Closed subsets of N are determined by the set
of basic cylinders they meet (their complements are unions of cylinders).
There are countably many cylinders, so at most 2^{aleph_0} closed nowhere
dense sets. Under CH enumerate them as (F_alpha)_{alpha<omega_1}, allowing
repetitions. At stage alpha avoid the countably many F_beta for beta<=alpha
and the singleton sets consisting of previously selected points.

For completeness, a countable collection (H_n) of closed nowhere dense
sets cannot cover a cylinder: recursively choose finite strings t_n with
t_(n+1) strictly extending t_n, length at least n+1, and N_(t_(n+1))
disjoint from H_n. Their union is a point in the initial cylinder outside
all H_n. Thus select g_alpha outside the specified countable union; AC
allows a fixed well-order of N to make each selection canonical. The points
are distinct. For a fixed F_beta, only indices alpha<beta can land in it.
The set L={g_alpha:alpha<omega_1} therefore meets every closed nowhere
dense set countably, and meets every meager set countably by taking closures
of its nowhere dense pieces and a countable union.

If B subset L is uncountable and its closure had empty interior, that
closure would be a closed nowhere dense set containing B, a contradiction.
So its closure contains a cylinder N_t, which says exactly that B meets
every cylinder extending t. Taking an omega_1-sized subset of any larger
classical Luzin set preserves this argument.

For the real-line formulation, remove the countable rationals and take an
omega_1-sized subset. A nowhere dense subset of the dense irrational
subspace has nowhere dense closure in R: an open interval inside that
closure would intersect the irrational subspace in a relatively open set
inside its relative closure. Thus the remaining set is Luzin in the
irrational subspace. Pull it back using
`cor-baire-sequence-space-is-homeomorphic-to-the-irrationals`; homeomorphisms
preserve nowhere density and meagerness. This gives the preceding hypothesis.
The homeomorphism's statement and proof were inspected; its continued-fraction
supplier closure has NOT been independently certified by this research.

## 4. lem-small-dowker-luzin-gives-tight-coloring

**Contract (AC).** An omega_1-sized set with the Luzin cylinder property
gives an injective-column tight strongly unbounded coloring. In fact its
T_c has a countable downward cofinal family.

**Complete proof (RST Lemma 2.12 at omega).** Enumerate the set injectively
as (g_beta)_{beta<kappa}, and take c_beta=g_beta. Given uncountable B of
indices, choose t such that every extension of t occurs among these columns.
At n=length(t), the extensions t followed by m, m<omega, show that the
values at n above t cover omega. This is strong unboundedness.

For tightness, fix T in T_c and set B=[T]_c. For each finite string t let
B_t={beta in B:t subset g_beta}. Remove the union of all countable B_t;
this union is countable. The remaining B' is uncountable. Its column set
has the cylinder property, so choose s every extension of which occurs in
B'. Let T_s consist of all strings comparable by extension with s. If
t extends s, it occurs as a prefix of a column from B' subset [T]_c, so
t belongs to T. The same applies to prefixes of s. Thus T_s subset T.
Some column in B' extends s; because it was not in the removed union,
B_s is uncountable. Every column extending s has every prefix in T_s,
so [T_s]_c is uncountable. The family of those T_s that belong to T_c
is countable and downward cofinal, as required.

## 5. lem-small-dowker-coloring-gives-ad-guessing

**Contract (AC).** From a tight strongly unbounded c:omega times kappa
->omega and any partition P of E into stationary sets, construct an AD
guessing array in the sense of Item 1(3). This preserves the full finite-
target omega_1 conclusion, not merely a single target or a stationary
subdomain. The proof below is an omega_1 expansion of RST Theorem 3.3.

### 5a. Elementary internal lemmas and normalization

**Column normalization.** Each equal-column fibre is countable: an
uncountable constant-column set would violate strong unboundedness. Select
one representative of each distinct column and enumerate the representatives
by kappa. There are kappa many because kappa cannot be a countable union
of countable fibres. A set of old indices has uncountable many members
exactly when it uses uncountably many distinct columns. Therefore T_c is
unchanged as a collection of trees under this reindexing; tightness and
strong unboundedness persist. Hence assume all columns are distinct.

**Stationary splitting used here.** Any stationary S subset kappa has
kappa disjoint stationary subsets. To see this locally, fix surjections
b_beta:omega->beta for infinite beta<kappa. For each xi<kappa, the sets
U_(xi,n)={beta>max(xi,omega):b_beta(n)=xi}, n<omega, cover a tail of kappa.
Some S intersect U_(xi,n) is stationary, because countably many
nonstationary sets have nonstationary union. Choose such n=n(xi).
For a fixed n these sets are disjoint as xi varies. Some fixed n is used
by kappa many xi, by regularity of kappa. Add any unused part of S to one
piece to obtain a partition. Group pieces if fewer than kappa are needed.

**Coherent walk coloring.** Choose countable cofinal ladders C_beta at
limit beta, C_(eta+1)={eta}, and C_0 empty. Walk from gamma to alpha by
repeatedly taking min(C_eta minus alpha). This is a finite decreasing
ordinal walk. Let e(alpha,gamma) be the maximum of |C_eta intersect alpha|
over its nodes before alpha. Each such count is finite, so e is natural-
valued. For limit beta<gamma the finitely many sets C_eta intersect beta
along the walk to beta have a common bound epsilon<beta. Increase epsilon
so |C_beta intersect epsilon|>=e(beta,gamma). Above epsilon the walk to
alpha<beta first follows the walk to beta and then the walk from beta to
alpha. The initial contribution to the maximum is e(beta,gamma), already
dominated by |C_beta intersect alpha|. Thus e(alpha,gamma)=e(alpha,beta)
eventually below beta. Also e(alpha,beta)>=|C_beta intersect alpha| tends
to infinity as alpha tends to beta. Consequently:

    for beta<=gamma<delta and beta in E,
      e(xi,gamma)=e(xi,delta) on a tail of beta;
    for beta in E, gamma>=beta and m<omega,
      {xi<beta:e(xi,gamma)<=m} is bounded in beta.

These are the coherence and partial(e) properties used below. The complete
walk concatenation check is recorded in the companion closure review.
No closedness, square, or higher-cardinal nonreflection theorem is assumed.

### 5b. Matrix and almost-disjoint preliminary sets

Choose a downward cofinal family T in T_c of size <=kappa. For each S in
P, split S into stationary sets S_sigma indexed by nonempty finite lists
sigma=(T_0,...,T_(r-1)) from T. Let T* be the finite strings occurring
in uncountably many columns. There are countably many other strings;
all indices carrying any such other string have a common countable bound
rho. Every prefix of c_beta for beta>=rho is therefore in T*.

Choose f on successor ordinals so that each member of the countable T*
occurs cofinally below every limit alpha: enumerate T* with infinite
repetition along the successive natural positions of each omega-block.
Recursively select distinct indices beta_(alpha,j)>=rho. If alpha in
S_sigma for sigma=(T_0,...,T_(r-1)), use r entries and choose
beta_(alpha,j) in [T_j]_c avoiding earlier indices. At all other alpha
use one entry, choosing a column extending f(alpha) when alpha is a
successor; at alpha=0 choose any available index. At each stage only
countably many indices have been used and the candidate set is uncountable.
Put d_(alpha,j)=c_(beta_(alpha,j)); these functions are all distinct.

Split E into countably many stationary sets and choose a map z:kappa->omega
whose fibre at i contains the corresponding stationary set. For xi<alpha
put

    h_(alpha,j)(xi)=z(min{gamma in (xi,alpha]:
        gamma=alpha or e(gamma,alpha)<=Delta(d_(xi,0),d_(alpha,j))}).

In this formula the second condition is evaluated only when gamma<alpha.
The set is nonempty because alpha is a candidate. Define

    B_(alpha,j)^i={xi<alpha:h_(alpha,j)(xi)=i and
      e(xi,alpha)<=hat(d_(alpha,j))(Delta(d_(xi,0),d_(alpha,j)))};
    B_alpha^i=union_{j<r(alpha)} B_(alpha,j)^i;
    A_alpha^i=B_alpha^i minus union_{i'<i} B_alpha^(i').

The last union is finite. For fixed alpha and i!=i', the sets
B_(alpha,j)^i and B_(alpha,j)^(i') are disjoint. For distinct (alpha,j)
and (beta,j') with alpha<=beta and alpha limit, their two B sets have
intersection bounded below alpha. Indeed let
n=Delta(d_(alpha,j),d_(beta,j')). On a cofinal intersection, discard the
bounded set where e(xi,alpha)<=hat(d_(alpha,j))(n). The defining bound
then forces Delta(d_(xi,0),d_(alpha,j))>n, whence
Delta(d_(xi,0),d_(beta,j'))=n. The other defining bound puts this cofinal
set inside {xi<alpha:e(xi,beta)<=hat(d_(beta,j'))(n)}, contradicting
the second property of e. Finite unions give bounded intersections between
distinct B_alpha^i at one row and between rows. The A_alpha^i are disjoint
at each row, have the cross-row boundedness, and lose only bounded sets
from B_alpha^i. They have not yet been proved cofinal at every alpha.

### 5c. Full finite-target guessing, without an elementary-model import

Fix S in P and uncountable X_0,...,X_(r-1). For a finite string t put
X_j^t={xi in X_j:t subset d_(xi,0)} and
V_j={t:X_j^t is uncountable}. Removing from X_j the countable union
of its countable X_j^t leaves uncountably many xi all of whose column
prefixes belong to V_j. Since their beta_(xi,0) are distinct,
V_j belongs to T_c. Choose T_j in T with T_j subset V_j, and use the
stationary piece S_sigma for sigma=(T_0,...,T_(r-1)).

Suppose simultaneous guessing fails on a club. Intersect S_sigma with
that club. Since countably many pairs (i,j) cover its failures, some
fixed (i,j) fails on a stationary subset. Since only bounded sets were
removed from B_alpha^i, B_(alpha,j)^i intersect X_j is bounded there.
Fodor's lemma supplies a stationary S_1 and a fixed b<kappa such that
all these intersections are contained in b+1.

Let D be the intersection of the clubs of limit points of X_j^t for
those t with X_j^t uncountable. There are only countably many t, so D
is club. Let Gamma=D intersect E intersect z^{-1}{i}, a stationary set.
Choose a limit delta that is a limit point of Gamma above b. For each
alpha in S_1 above delta, coherence gives a threshold a_alpha<delta
above which e(xi,alpha)=e(xi,delta) below delta. Since delta is countable,
an uncountable S_2 uses a common bound a. Choose gamma in Gamma intersect
delta above max(a,b). Put nu=e(gamma,delta).

Thin S_2 to an uncountable S_3 on which d_(alpha,j) restricted to nu
is constant; there are only countably many such finite strings. Strong
unboundedness on the distinct indices beta_(alpha,j), alpha in S_3,
gives a string t of length n with unbounded next values among these
columns extending t. Necessarily n>=nu, since all earlier coordinates
were fixed. Some such column is in [T_j]_c, so t in T_j subset V_j.
Thus X_j^t is uncountable, and gamma in D makes X_j^t intersect gamma
cofinal in gamma.

The set G={xi<gamma:e(xi,delta)<=n} is bounded below gamma. Choose
xi in X_j^t intersect gamma above a,b and all of G. Choose alpha in S_3
whose column extends t and whose value at n exceeds both e(xi,delta)
and d_(xi,0)(n). Then Delta(d_(xi,0),d_(alpha,j))=n and the defining
inequality for B_(alpha,j)^i holds by coherence. Moreover gamma is the
least candidate in the minimum defining h_(alpha,j)(xi): it is a candidate
because e(gamma,alpha)=e(gamma,delta)=nu<=n, and any earlier candidate
would, by coherence, lie in G above xi. Hence h_(alpha,j)(xi)=z(gamma)=i.
We obtain xi in B_(alpha,j)^i intersect X_j above b, the contradiction.

Therefore all i and all finitely many targets are guessed simultaneously
stationarily often on S. In particular all A_alpha^i are cofinal on the
stationary guessing set obtained with the single target kappa.

### 5d. Fill noncofinal rows; retain the entire E-indexed contract

Call a row good if every A_alpha^i is cofinal in alpha. At each nongood
alpha in E replace the row as follows. Every prefix of d_(alpha,0) is
in T*. The successor schedule f and the successor part of the matrix
construction ensure that for every n and b<alpha there is b<xi<alpha
with Delta(d_(xi,0),d_(alpha,0))>=n. Choose a strictly increasing
omega-sequence (xi_n) cofinal in alpha with these Delta values tending
to infinity, and partition its range into omega disjoint infinite subsets.
Use those subsets for the new row. Their order type is omega, so they
are cofinal; their intersection with any smaller ordinal is finite.

This automatically handles two replaced rows and a replaced upper row.
For a replaced lower row alpha and a good upper row beta, if its intersection
with A_beta^i were cofinal in alpha, finite pigeonhole selects one
B_(beta,j)^i with cofinal intersection. Let
n=Delta(d_(alpha,0),d_(beta,j)). On a tail of the replacing ladder,
Delta(d_(xi,0),d_(alpha,0))>n, so Delta(d_(xi,0),d_(beta,j))=n.
The B inequality bounds e(xi,beta) by hat(d_(beta,j))(n), contradicting
the bounded-sublevel property at alpha. Thus all cross-row bounds persist.
Every earlier successful finite-target guess occurred at a good row, so
no stationary guessing set was lost. This proves the stated AD array on
all E. No unstated assertion that the bad rows form a nonstationary set
is needed.

## 6. lem-small-dowker-stick-gives-ad-guessing

**Contract (AC).** Stick implies the strong diagonal AD property of
Item 1(4) for every stationary partition P of E, and hence the finite
AD property. This is the exact omega_1 instance of RST Theorem 4.3.

### 6a. Proved strengthened-stick sublemma

Starting with the stick sequence s, set x_gamma=union_{xi in s_gamma}s_xi.
These are countably infinite. For any sequence (A_alpha) of at most
countable pairwise finite-intersection sets and any uncountable X, recursively
select s_(xi_i) subset X avoiding all earlier selected s_(xi_j) and all
previously chosen A_(zeta_j). Here choose zeta_i to be the least alpha
meeting s_(xi_i) infinitely, if such exists. Each stage i<omega_1 excludes
only countably many points, so stick makes the next choice possible.
The xi_i are distinct and the defined zeta_i are distinct. Choose gamma
with s_gamma subset {xi_i:i<omega_1}. Its union x_gamma lies in X.
If x_gamma were almost covered by finitely many A_alpha, every selected
s_(xi_i) in that union would meet one of them infinitely. Its zeta_i
would therefore be defined and, by pairwise finite intersections, would
be one of those finitely many indices. This contradicts distinctness of
infinitely many zeta_i. Thus x_gamma has infinite remainder after every
finite union of A_alpha. The sequence x is fixed BEFORE A and X, as
required. This is the full omega_1 double-stick proof from the companion
review, not an assumed partition theorem.

### 6b. Recursive array and pairwise finiteness

Fix a bijection pi:omega->omega times omega with coordinates pi_0,pi_1,
and surjections q_alpha:omega->alpha for nonzero alpha<kappa. Construct
at most countable A_alpha subset alpha by recursion, A_0 empty. At alpha>0,
let J_alpha be the natural numbers j for which

    Y_(alpha,j)=(x_(q_alpha(pi_0(j))) intersect alpha)
                minus union_{j'<=j} A_(q_alpha(j'))

is infinite. Recursively choose distinct xi_(alpha,j) in Y_(alpha,j),
j in J_alpha; only finitely many earlier choices must be avoided at each
natural stage. Put R_alpha^i={xi_(alpha,j):j in J_alpha,pi_1(j)=i}.
If all R_alpha^i are cofinal in alpha, call alpha good and set
A_alpha^i=R_alpha^i and A_alpha=union_i R_alpha^i. Otherwise at a limit
alpha choose a cofinal increasing omega-ladder, let A_alpha be its range,
and partition it into omega infinite cofinal subsets A_alpha^i. At a
successor alpha use A_alpha={alpha-1}; no omega-row at a successor is
part of the final contract.

For beta<alpha, if alpha is not good its chosen ladder has finite
intersection with beta (or it is a singleton). If alpha is good, choose
j' with q_alpha(j')=beta. All choices at stages j>=j' avoid A_beta,
so A_alpha intersect A_beta is contained in the finite collection of
choices at stages j<j'. Thus the full A sequence satisfies the premise
of 6a. The row subsets inherit finite cross-row intersections and are
disjoint and cofinal at every limit alpha.

### 6c. Club guessing and the explicit diagonal step

Fix uncountable X. For every epsilon<kappa choose beta_epsilon so that
x_(beta_epsilon) subset X minus (epsilon+1) and this x has infinite
remainder after every finite union of the now constructed A sequence.
Let F(epsilon) be an ordinal strictly greater than beta_epsilon and every
member of x_(beta_epsilon). The closure points

    D_X={delta in E : for every epsilon<delta, F(epsilon)<delta}

form a club. Its unboundedness follows by repeatedly closing a countable
ordinal under the countably many values F below it and taking the supremum
of omega such stages; closedness follows directly at limit points.

For delta in D_X, i<omega and b<delta, choose epsilon between b and delta.
Find k with q_delta(k)=beta_epsilon and j with pi(j)=(k,i). The set
Y_(delta,j) equals x_(beta_epsilon) minus finitely many earlier A sets,
so is infinite; j belongs to J_delta and xi_(delta,j) is in X above b.
This holds for every i and b, proving delta is good and every A_delta^i
meets X cofinally.

Given a sequence (X_nu)_{nu<kappa}, take the diagonal intersection of the
clubs D_(X_nu). It is club: closedness is immediate, and an omega-stage
construction above any starting ordinal successively meets the intersection
of all clubs indexed below the current countable ordinal. Its supremum
belongs to every club indexed below that supremum. At a limit delta in
this diagonal club, every row member meets every X_nu, nu<delta,
cofinally. Intersect with each stationary S in P. This supplies the full
diagonal clause rather than leaving RST's final “it follows” unexpanded.

## 7. def-small-dowker-ladder-topology

**Contract and well-definedness.** Given a single-ladder two-target AD
system from Item 1(5), let S_0=kappa minus union_{n>=1}S_n and
W_n=union_{i<=n}S_i. Let n(alpha) be the unique level of alpha and put

    L_alpha=A_alpha intersect W_(n(alpha)-1)
      if n(alpha)>0 and this intersection is cofinal in alpha;
    L_alpha=empty otherwise.

Declare U subset kappa open iff, for each alpha in U with L_alpha
nonempty, L_alpha minus U is bounded in alpha. Empty and whole sets
qualify; arbitrary unions qualify by choosing one containing open set
at each point; finite intersections qualify because a finite union of
bounded sets is bounded below the limit alpha. Thus this is a topology.

Write bar(S)={alpha:L_alpha nonempty}. It is a subset of E. For each
alpha in bar(S), the sets {alpha} union (L_alpha minus epsilon),
epsilon<alpha, are **weak neighborhood tests**, not necessarily open
neighborhoods themselves. Do not falsely call them a basis. Closedness
has the equivalent test: F is closed iff for each alpha not in F with
L_alpha nonempty, F intersect L_alpha is bounded in alpha.

The L system has bounded intersections at the smaller index and each
L_alpha lies in a strictly lower W-level. For any uncountable B_0,B_1,
some levels m_0,m_1 have B_i intersect S_(m_i) uncountable. Two-target AD
guessing on S_n for n>max(m_0,m_1) gives stationarily many alpha in S_n
with both L_alpha intersect B_i cofinal in alpha. Indeed both target
intersections lie in W_(n-1), so the defining cofinality test for L_alpha
holds. In particular bar(S) is stationary, and every sufficiently high
level contains stationarily many active indices.

## 8. lem-small-dowker-ladder-normality

**Contract (AC).** The topology of Item 7 is normal Hausdorff. This proof
expands RS Lemmas 3.4–3.8 and the omega_1 instance of Proposition 2.8;
it assumes neither MA nor a uniformization theorem.

**Preliminaries.** Singletons are closed because a singleton has bounded
intersection with every cofinal L_alpha. All ordinal initial segments
xi are open: if alpha<xi its entire L_alpha lies below xi. An initial
segment xi with xi not in bar(S) is also closed: for alpha>xi its
intersection with L_alpha is bounded by xi, while alpha=xi is inactive.
Every W_n is open since all ladders at its points lie in lower levels.
All points outside bar(S) are isolated, by the definition of openness.

There cannot be two disjoint uncountable closed sets K_0,K_1. Item 7
gives alpha with each L_alpha intersect K_i cofinal; closedness forces
alpha in both K_i, a contradiction. Thus at least one of any two
disjoint closed sets is countable and bounded in omega_1.

**Local tail-coloring lemma (almost-P0).** For countable xi and any
c:bar(S) intersect xi -> {0,1}, there is c*:xi->{0,1} such that on
each L_alpha, alpha<xi, c* is eventually constantly c(alpha). Enumerate
bar(S) intersect xi without repetition as alpha_0,alpha_1,... (or a
finite list). At stage n remove from L_(alpha_n) its intersections with
the finitely many earlier ladders by choosing a bound below alpha_n.
Such a bound exists because every such intersection is bounded in
alpha_n: when the other index is smaller, the whole other ladder lies
below that index. The remaining cofinal tails are pairwise disjoint.
Assign c* the prescribed value on each tail, and zero elsewhere.

**Separation by closed expansion.** Given disjoint closed K_0,K_1,
arrange K_0 bounded. Choose a successor ordinal xi greater than every
point of K_0; it is inactive, so xi is clopen. Start K_i^0=K_i. At
stage n suppose K_i^n are disjoint closed sets with K_0^n subset xi.
For each i define c_i(alpha)=1 iff alpha in K_i^n on bar(S) intersect xi,
and obtain its tail extension c_i*. Define

    K_i^(n+1)=K_i^n union
      {gamma in xi minus K_(1-i)^n:
           c_i*(gamma)=1 and c_(1-i)*(gamma)=0}.

The new sets are disjoint: new-new overlap contradicts their two opposite
value requirements, and old-new overlap is explicitly excluded. They
contain the old sets, with K_0^(n+1) still inside xi. At alpha in
K_i^n intersect xi, eventual values (1,0), together with closedness of
K_(1-i)^n and its exclusion of alpha, put a tail of L_alpha in K_i^(n+1).

To prove K_i^(n+1) closed, suppose alpha outside it has L_alpha intersect
K_i^(n+1) cofinal. As alpha is outside the old closed K_i^n, its old
intersection is bounded. Hence the new points, all below xi, meet
L_alpha cofinally. This forces alpha<=xi; equality is impossible because
xi is inactive. Thus alpha in bar(S) intersect xi and outside K_i^n,
so c_i(alpha)=0. Its tail extension is eventually zero on L_alpha,
contradicting cofinally many new points with c_i*=1. This proves
closedness without the erroneous membership inference in the source's
compressed wording of Claim 3.8.1.

Let U_0=union_n K_0^n and U_1=(kappa minus xi) union union_n K_1^n.
They are open: every point below xi that enters a K_i^n has a ladder
tail in the next stage, and the clopen exterior covers the remaining
points of U_1. They are disjoint because the expansions are nested and
each equal-stage pair is disjoint; U_0 stays in xi. They contain the
original K_i. This proves normality. Applying it to distinct closed
singletons proves Hausdorffness.

## 9. lem-small-dowker-ladder-shrinking-obstruction

**Contract (AC).** The space of Item 7 has size aleph_1 and is not
countably paracompact. Consequently its product with the unit interval
is nonnormal, by the locally proved Dowker characterization earlier on
A713. No published recorded Dowker catalogue is used.

**Complete proof.** Put D_n=kappa minus W_n. These sets are closed
because W_n is open; each is uncountable because it includes S_(n+1).
They decrease to the empty set because the levels partition kappa.
For any open sets U_n containing D_n, each F_n=kappa minus U_n is
closed and disjoint from the uncountable closed D_n. By Item 8's
no-two-disjoint-uncountable-closed-sets lemma, F_n is countable. Their
countable union is countable, so

    intersection_n U_n = kappa minus union_n F_n

is nonempty. This contradicts the decreasing-closed-set open-shrinking
criterion for countable paracompactness. State/use the precise earlier
`thm-countable-paracompactness-shrinking-criterion` interface. With normal
Hausdorffness from Item 8, apply `thm-dowker-product-characterization`.
The underlying set is literally omega_1, so its cardinality needs no
quotient or injectivity argument.

## 10. thm-small-dowker-conditional-aleph-one-constructions

**Contract (AC).** Each of the following separately suffices for a normal
Hausdorff Dowker space of cardinality aleph_1:

- CH;
- existence of a classical uncountable Luzin set in Baire space (or in R
  using Item 3's stated homeomorphism interface);
- existence of an omega_1-Luzin set in the cylinder sense;
- stick at omega_1;
- Ostaszewski's clubsuit at omega_1;
- ordinary diamond on omega_1;
- the finite-target AD array of Item 1(3) on a countably infinite
  stationary partition of E, or just the single-ladder two-target system
  of Item 1(5).

**Proof and comparisons.** Under CH use Items 3–5; under either Luzin
hypothesis use Items 3–5 as applicable. Under stick use Item 6. Split E
into countably infinitely many stationary sets (the local splitting
proof in 5a applies), select the zeroth member of each row, and use
Items 7–9. The same last step handles the AD assumptions directly.

Ostaszewski clubsuit supplies cofinal C_alpha subset alpha at nonzero
countable limit alpha such that, for every uncountable X subset omega_1,
stationarily many alpha have C_alpha subset X. The sequence of these
countably infinite sets, indexed by omega_1 after harmless reindexing,
is a stick witness: existence of even one such alpha suffices. Hence
clubsuit -> stick -> the construction. This uses all-uncountable-target
containment, not ordinary club guessing. It proves the commissioned
“club” case with the already published exact Ostaszewski convention.

Ordinary diamond gives sets D_alpha subset alpha guessing every
X subset omega_1 stationarily often. At limit alpha, if D_alpha is
cofinal, choose a cofinal omega-ladder inside it; otherwise choose any
ladder. For an uncountable X, intersect its diamond-guess set with the
club of limit points of X. The chosen ladders there lie in X, so this
proves diamond -> clubsuit. This agrees with the published
`prop-diamond-implies-ostaszewski-club` and uses no new principle.

For the separate CH comparison, for every r subset omega choose the
least alpha>=omega with D_alpha=r (diamond guesses X=r on a stationary
set, since X intersect alpha=r there). Different reals receive distinct
indices. Thus 2^{aleph_0}<=aleph_1, and Cantor gives equality. This
proves diamond -> CH. CH also specializes Balogh's separately proved
continuum-sized construction to aleph_1; include that as an additional
explicit route using `thm-balogh-continuum-sized-zfc-dowker-space`, not
as a replacement for the Luzin/stick developments above.

Neither ordinary club guessing nor a mere collection of club subsets
has been proved here to imply a small Dowker space. Do not label the
hypotheses “club guessing” without the exact quantified AD or Ostaszewski
definition. No converse between CH, stick, Luzin, clubsuit, and the
displayed AD principles is asserted. In particular these proofs do not
show CH implies Ostaszewski clubsuit.

## Coverage, unresolved interfaces and handoff

This is ten A items, not ten new pages. It supplies all SET-30-commissioned
CH/club/diamond/Luzin/stick aleph_1 sufficient conditions and explicit local
topological construction/proofs. The two-target AD conclusion is not
mistaken for containment guessing. The stronger diagonal conclusion under
stick is retained and proved, including the final diagonal-club step.

Do NOT expand the ten-item inventory merely to introduce the internal walk,
stationary-splitting, double-stick, local tail-coloring or closure-point
sublemmas: publish their full proofs within the consuming items. The
60-item SET-30 allocation can therefore remain unchanged.

The following are still mandatory implementation/review checks, not claims
of completed certification:

1. Verify the actual earlier elementary club/ordinal/cardinality suppliers
   and their choice hypotheses, and the two local topology interfaces.
   The real-line Luzin formulation adds the identified continued-fraction
   homeomorphism closure; if that closure is unsuitable for Foundations,
   prove its needed coding locally or retain this exact blocker rather than
   silently changing “Luzin set” to a different unannounced hypothesis.
2. Check every matrix index and inequality in Item 5. Its omega_1 club
   argument deliberately replaces the source's elementary-submodel step;
   it relies on the countability of finite strings, and does not prove the
   higher-cardinal theorem. The replacement proof is fully written, not
   a reference to an unavailable model theorem.
3. Check the topology weak-neighborhood convention and bounded-versus-finite
   distinction. In particular an arbitrary AD ladder here need not have
   order type omega, and weak neighborhood tests need not be open.
4. RST's parameterized diamond(b) result is a DIFFERENT theorem, importing
   Moore–Hrusak–Dzamonja Theorem 5.5. It is not proved by ordinary
   diamond -> CH. SET-30's binding text says diamond, not diamond(b).
   If a harvested source row separately commissioned diamond(b), that
   clause remains an exact additional source/proof obligation pending owner
   coverage reconciliation; it cannot be marked proved by Item 10.
5. RST's higher-cardinal versions, 2^{aleph_1} pairwise nonhomeomorphic
   spaces, and S-space invariants are not asserted here. They are not in
   SET-30's quoted sufficient-condition contract. Existing harvested rows
   mentioning them require explicit honest coverage dispositions, not an
   invented destination or claim that these ten items prove them.
6. The ZFC existence of an aleph_1-sized Dowker space is NOT concluded.
   Preserve SET-30's separate dated open-status item and refresh its source
   as the live workflow requires. These conditional proofs do not settle it.

No mathematical gap is currently identified in the two imported omega_1
lemmas or the expanded consumer arguments above. That is a bounded local
research assessment, not a waiver of independent mathematical gates,
source coverage, rendering, precheck, or dependency auditing.
