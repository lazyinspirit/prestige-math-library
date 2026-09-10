# SET30: ten local general-PCF proof contracts

2026-09-09. Delegated mathematical research, not independent judging or a
publication certificate. Only this report is edited. The original 24 pairs
and SET30's binding conclusions are retained. These contracts concern general
PCF; Balogh and the small-Dowker constructions have separate owners. The
existing direct countable-product scale construction does not acquire a
dependency on the general generator or no-holes theorems.

## Result and source receipt

The requested route can be organized in ten additional units, provided the
already allocated projection, exact-bound and club-continuity units are
substantively generalized as specified below. Complete research arguments,
including the finite-coordinate cases suppressed in the source, are given
here. This does not say the current scaffold contains them: authoring,
registration, dependency-boundary checks and independent Step3 review remain
open. No extra A/B pair is mathematically forced by this route.

Source: Uri Abraham and Menachem Magidor, *Cardinal Arithmetic*, author chapter
PDF, [full text](https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf).
The full PDF has 88 pages. Read printed pp8–25 and30–44 completely, including
the statements and proofs of 2.3, 2.7, 2.12–2.15, the uncountable case of
2.17, 2.19, 2.21, 3.1, 3.4–3.9, 4.2 and4.6–4.14. The intervening pp26–29
were also read but their Silver/covering applications are not suppliers.
Two browser fetches timed out; direct HTTP recovery succeeded. A fresh full
GET, not just HEAD, matches the local PDF read with PyMuPDF:

`17fecd137729cb897f977e53c8d126a3699a776c46b735cc871fbc73476b5ab8`.

Local files read: `phase-2-catchup-24-local-set30-closure-review.md` in full,
the binding SET30 section of `plan-set-theory-completion-track.md`, and its
seven existing local scale contracts. The latter are scaffolded, not
published suppliers. Published ultrafilter-extension and characterization
proofs were read; other foundational dependency closures are not certified by
this report. No recorded Set Theory result is used.

## Conventions that every contract must preserve

Assume AC explicitly, with `def-axiom-of-choice`: simultaneous choices of
ultrafilters, cofinal enumerations, bounds and clubs use it. Transfinite
recursion is a theorem, not a substitute for those choices. Fix wellorders of
the relevant sets of witnesses when invoking recursive selections. Ordinal
function constructions below are set-bounded by a fixed pointwise bound.

For an ideal I on a nonempty index set A, do NOT require all singletons in I.
Write f<=_I g when {a:f(a)>g(a)} belongs to I, and f<_I g when
{a:f(a)>=g(a)} belongs to I. These are different relations; strict order is
not obtained merely by quotienting <= and removing equality. For a proper
ideal the strict relation is irreflexive, transitive and compatible with <=.
The dual filter is I*={A minus X:X in I}. The ideal restricted to a positive
B is I restricted B=I intersect P(B), always proper. Adding a set means
I+B={X subset A:X minus B belongs to I}. An improper ideal is allowed in the
definition of J_<lambda, but never as the base of a true-cofinality assertion.
For improper J use only the vacuous <=-directedness assertion, not an
irreflexive strict-order assertion on its one-element quotient.

Products use infinite regular cardinals, so each f in product A has its
coordinatewise successor f+1 in the same product. Consequently weak upper
bounds/cofinality can be converted to strict bounds/cofinality. Lambda-directed
means every family of size <lambda has a bound; lambda is not assumed regular
in the ideal-directedness theorem. A scale of regular length lambda is strict
and cofinal. For finite A, all ultrafilters are principal and pcf(A)=A; the
empty set has pcf(empty)=empty. A progressive set is a nonempty set of
infinite regular cardinals with |A|<min A. For the nontrivial arguments A is
infinite and tau=|A|. Finite A is handled explicitly, not fed into tau^+
arguments meant for infinite cardinals.

## Generalize existing units; do not add duplicate units

Keep every current ID and its countable modulo-finite specialization. Add a
general clause with arbitrary proper ideal I on an infinite A, tau=|A|.
The current countable clauses then follow by A countable and I=Fin. Do not
change a consumer to a stronger hypothesis unless its use requires it.

### Existing definition and strong-increase lemma

`def-strong-increase-and-bounding-projections-for-countable-products` gains:
strong increase witnessed by Z_alpha in I; star_kappa says every unbounded
set of indices contains a strongly increasing subsequence of order type
kappa. For regular kappa, the bounding-projection property means that any
sets S(a) of size <kappa whose suprema strictly bound the sequence modulo I
have some ceiling projection p_alpha that strictly bounds the whole sequence
modulo I. Define the ceiling as min{s in S(a):f(a)<=s} where available, with
a specified fallback on the I-small failure set. Require S(a) nonempty or
replace empty sets on that failure set before forming their product.

`lem-strong-increase-gives-bounding-projections` gains: if lambda is regular,
tau<kappa<=lambda is regular, and a strict I-increasing lambda-chain has
star_kappa, then it has the kappa bounding-projection property.

Proof: normalize each f_alpha on its own I-small failure set; this only adds
that set to its strong-increase witness. If p_alpha fails to bound, choose
beta for which p_alpha<=f_beta on an I-positive set, and move once farther
along the strict chain to make the inequality strict on a positive set.
Recursively thin to an unbounded U of length lambda so that for each earlier
alpha and later beta in U the set {p_alpha<f_beta} is positive. At each
stage there are <lambda earlier witness indices; regularity bounds them.
Take a strongly increasing kappa-subsequence. Between each consecutive pair
choose a coordinate witnessing p_i<f_(i+1), outside their two exceptional
sets. Since kappa is regular and tau<kappa, one coordinate is chosen kappa
times. For two such indices i<j, strong increase gives
p_i(a)<f_(i+1)(a)<=f_j(a)<=p_j(a). This is a strictly increasing sequence of
kappa elements in S(a), impossible. Only removal of finitely many I-sets at
each comparison is used; no completeness of I is assumed.

### Existing exact-bound lemma

`lem-bounding-projections-give-exact-upper-bounds` gains: for regular
lambda>tau^+, a strict I-increasing lambda-chain with the tau^+
bounding-projection property has an exact upper bound h. It is unique
modulo I. If the same chain has the property for regular kappa>=tau^+,
then {a:cf(h(a))<kappa} belongs to I. Representatives of h may be taken
positive and limit-valued everywhere. No such assertion is made for an
arbitrary ordinary upper bound.

Full general argument: set H(a)=sup_alpha(f_alpha(a)+1)+1. Suppose there is
no minimal upper bound below H. For eta<tau^+ recursively form increasing
sets S_eta(a), starting with {H(a)}, taking unions at limits, and adjoining
one value at each successor. Thus |S_eta(a)|<=tau and every S_eta contains
H. Projection gives alpha_eta for which
h_eta=proj(f_alpha_eta,S_eta) is an upper bound. Every later projection onto
this same S_eta equals h_eta modulo I: insert
f_alpha_eta<=_I f_beta<_I h_eta and use leastness of the ceiling.
Choose another upper bound u_eta<=h_eta pointwise, smaller on an I-positive
set, and adjoin its values. Pointwise minimum makes the inequality
pointwise without losing upper-boundedness. For every beta>=alpha_eta,
the new projection equals u_eta modulo I: on the comparison set the old
ceiling was h_eta, while f_beta<u_eta<=h_eta and u_eta is the only newly
adjoined eligible value below h_eta.

Choose beta<lambda above all alpha_eta, eta<tau^+. The functions
H_eta=proj(f_beta,S_eta) decrease pointwise and have a strict decrease on a
positive set at every successor. Since there are tau coordinates, some
coordinate decreases infinitely many times, contradicting well-foundedness
of ordinals. This yields a minimal bound h. Minimality implies leastness:
min(h,u) is an upper bound for every upper bound u, so equals h modulo I.
Zeros can occur only on an I-set by f_0<_I f_1<=_I h. If successor values
occur on a positive set, replace them by predecessors there. Every f_alpha
is strictly below h modulo I (insert alpha+1), so the new function remains
an upper bound and is strictly smaller on a positive set. This contradicts
minimality. Thus normalize zeros/successors on an I-set to nonzero limits.

For g<_I h normalize it to g<h everywhere and project f_alpha onto
{g(a),h(a)}. A bounding projection is <=h and therefore equals h modulo I
by minimality; the ceiling rule implies g<_I f_alpha. This is exactness.
If P={a:cf(h(a))<kappa} is positive, choose cofinal S(a) subset h(a) of size
<kappa there, and S(a)={h(a)} elsewhere. Projection gives an upper bound
strictly below h on P, again impossible. This proves the cofinality clause
without assuming I is countably complete.

Include two transfer facts with full local proofs. Exactness restricts to a
positive B by extending a test function below h by zero off B. Exactness
passes to a larger proper ideal J by resetting g to zero on {g>=h}, which
is J-small, before applying exactness modulo I. The reset function is below
h everywhere and J-equal to g. These facts are used later in G4 and G8.

### Existing club-continuity lemma

`lem-club-continuity-produces-strongly-increasing-subsequences` gains the
same arbitrary-proper-I formulation. Assume uncountable regular kappa,
regular lambda>kappa^{++}, and a strict I-chain such that every delta<lambda
of cofinality kappa^{++} has a club E_delta with its coordinate supremum
strictly I-bounded by some later chain member. Then star_kappa holds.
The existing `lem-uncountable-club-guessing-at-a-double-successor` is already
at the required cardinal level; it needs no new countable-cofinality case.

Here is the ideal-general construction, rather than a notation-only appeal.
Put theta=kappa^{++} and fix its uncountable-kappa club-guessing sequence.
Given unbounded U subset lambda, construct a continuous increasing
xi:theta->lambda with successor values in U. At step i, for each guessing
club C_eta record the least chain index strictly I-bounding the supremum
of f_xi(j) for j in C_eta intersect(i+1), if such an index exists. Choose
xi(i+1) above all recorded indices and xi(i). There are at most theta<lambda
records. With delta=sup range xi, cf(delta)=theta and delta<lambda; the
inverse image of E_delta is club in theta. A guessing club contained there
makes all its prefix questions positive. At a nonaccumulation point j of
that club, its earlier club points have a last point; the set where their
prefix supremum is not below f_xi(j) is in I. Use this set as Z_j. The
first club point has empty earlier prefix and can be omitted. These Z_j
witness a strongly increasing subsequence of order type kappa.

Its indices need not lie in U, so sandwich f_xi(j+1) between f_xi(j) and
the function at the next retained club point. Here xi(j+1) belongs to U.
For each index enlarge its exceptional set by the two sandwich comparison
sets and the next retained function's exceptional set. For i<j outside
the union of their enlarged sets, the pointwise inequalities compose to
strict increase. This proves star_kappa. Only finite unions of I-sets
occur. For smaller infinite regular kappa, a longer star property restricts
to the first kappa terms; no unproved omega-club-guessing theorem is used.

## The ten new units, in proof order

Proposed IDs are local inventory candidates, not registered/published IDs.
G1–G2 precede the generalized existing units; G3 then uses those units.
All ten contracts have an explicit AC clause. Exact dependencies between
the new units are given below; the existing foundational IDs are listed
after the contracts.

### G1 — lem-progressive-products-and-true-cofinality-transfers

Define the conventions above, pcf(A)={cf(product A/D):D an ultrafilter on A},
progressive sets, true cofinality and strict directedness in the local
notation/contract. This is a proof-bearing lemma unit, not a definition-only
item carrying unreviewed theorem assertions. Its conclusions are the
following verification and transfer facts, with their full proofs below.

Every ultraproduct here is a linear order without a last element. Its least
cofinal cardinal nu is regular: if nu were singular, split a cofinal family
into cf(nu)<nu many smaller pieces; each piece is noncofinal and hence has
an upper bound in a linear order. Those bounds would be a smaller cofinal
family, contradiction. A strict cofinal nu-chain follows by recursively
bounding the earlier <nu terms and the next member of a chosen cofinal
family. Hence possible cofinalities are regular, at least min A, and at
most |product A|; pcf(A) is a set, not a proper class.

A strict cofinal regular-lambda chain makes its poset lambda-directed:
assign chain indices to a <lambda family and bound their supremum. A
cofinal embedded subposet inherits this property and has a cofinal family
of size <=lambda; recursion gives a strict cofinal lambda-chain there.
No family of size <lambda is cofinal because it would have a strict bound.
This proves the true-cofinality transfer, without falsely asserting that
ceiling maps preserve strict inequalities.

For positive limit-valued h, choose strictly increasing cofinal maps
e_a:cf(h(a))->h(a). They induce a cofinal order embedding of the product
of the cofinalities into product h, modulo any proper I. The previous
paragraph transfers true cofinality. If c:A->Reg and |A|<min range(c), put
B=range(c) and J={X subset B:c^{-1}(X) in I}. The repetition map
e->e composed c preserves and reflects both equality and strict order
modulo these ideals. It is a cofinal embedding, NOT in general onto the
whole quotient: given t in product c, let
e(b)=sup{t(a)+1:c(a)=b}<b. This uses regularity and |A|<b. Its repetition
strictly dominates t everywhere. Thus the two products have the same
true cofinality whenever either has one. This corrects the potentially
misleading word “isomorphism” in source2.3 to isomorphism onto the image.

If a product modulo proper I has true cofinality lambda, extend I* to an
ultrafilter. Its scale remains strict and cofinal in that ultraproduct, so
lambda belongs to pcf(A). Restriction to a support B and extension of an
ultrafilter on B preserve ultraproduct order/cofinality. Principal
ultrafilters give A subset pcf(A); restriction gives monotonicity; an
ultrafilter on A union B contains A or B, giving
pcf(A union B)=pcf(A) union pcf(B). Induction gives pcf(F)=F for finite F.

### G2 — lem-pcf-cofinality-ideals-and-cutoff-conventions

Dependencies: G1. A proof-bearing well-definedness/basic-properties lemma.
Define J_<lambda[A]={X subset A:pcf(X) subset lambda},
J_<=lambda=J_<lambda^+, including improper ideals and pcf(empty)=empty.
Finite-union and downward closure follow from G1. If B subset A then
J_<lambda[B]=J_<lambda[A] intersect P(B). The ideals increase with lambda.
For every X in J_<lambda, every ultrafilter containing X has product
cofinality <lambda. Conversely that condition gives membership by support
restriction. At this stage DO NOT assert the converse cutoff for a fixed
ultrafilter; it requires G4. Every singleton {a} with a<lambda is null.
For lambda in pcf(A) the ideal is proper. The dual filter equals the
intersection of all ultrafilters with cofinality >=lambda: membership in
the intersection is exactly the assertion that every ultrafilter containing
the complement has smaller cofinality, by the definition of the ideal.

### G3 — lem-directed-progressive-products-have-club-continuous-chains

Dependencies: G1, the generalized club-continuity and projection/exact-bound
units when their conclusions are requested. Let I be proper on a set A of
infinite regular cardinals and let lambda be regular. If product A/I is
lambda-directed, then for any given (g_xi)_(xi<lambda) in product A there
is a strict I-increasing lambda-chain f with g_xi<f_(xi+1) everywhere.
It has star_kappa for every uncountable regular kappa with
kappa^{++}<lambda and {a in A:a<=kappa^{++}} in I. Consequently it has the
corresponding projection/exact-bound conclusions when |A|<kappa and
lambda>|A|^+.

Construction: at every stage delta choose a strict I-bound u_delta for all
earlier f's, using lambda-directedness and coordinate successors. At a
successor take the pointwise maximum of u_delta, the previous f and its
prescribed g, then add one. At a limit with cf(delta)=kappa^{++} satisfying
the displayed exception condition, choose a club E_delta of that order
type. Define v_delta(a)=sup_{xi in E_delta}f_xi(a) where a>kappa^{++}, and
v_delta(a)=0 elsewhere. Coordinate regularity puts v_delta in the product.
Set f_delta=max(u_delta,v_delta)+1. At other limits use u_delta, or its
coordinatewise successor. Thus the club supremum is strictly below f_delta
modulo I, AND f_delta strictly bounds every earlier term. This avoids the
source2.21 shorthand of treating an unmodified supremum as automatically
strict above the entire earlier chain. Distinct double successors give an
unambiguous rule. The generalized club-continuity lemma now applies for
each eligible kappa. No max-pcf or generator theorem enters this proof.

### G4 — thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs

Dependencies: G1–G3 and generalized projection/exact bounds. For progressive
A and every cardinal lambda, product A/J_<lambda is lambda-directed (weak
interpretation in the improper case). For any ultrafilter D on A,

    cf(product A/D)<lambda iff D intersects J_<lambda[A].

In particular cf(product A/D)=lambda iff D avoids J_<lambda and meets
J_<=lambda. These statements include singular lambda; cofinality values
themselves are regular.

Finite A: J_<lambda=P({a in A:a<lambda}), and coordinatewise suprema of
families of size <lambda on the remaining coordinates give the result.
For infinite A let tau=|A|. The cases lambda<=tau^{+3} are also direct:
the coordinates below lambda form a finite set, all its subsets are null;
each remaining regular coordinate is >=lambda and bounds <lambda many
values. For lambda>tau^{+3}, remove the finite null set
S={a in A:a<=tau^{+3}}. This does not change the quotient, and the remaining
infinite A still has size tau and min A>tau^{+3}. If the ideal is improper
there is nothing to prove. Notice that this is a justified finite removal,
not an assumption that J contains every singleton.

With I=J_<lambda fixed on the remaining A, induct on the cardinal rho<lambda
to bound a family of size rho. When rho<min A, coordinate suprema of
successors suffice. When rho is singular, split the family into cf(rho)
pieces of smaller size, bound each by induction, then bound the family of
those bounds by induction. When rho>=min A is regular, earlier cases give
rho-directedness. G3 replaces the given rho-family by a dominating strict
rho-chain with star_(tau^+): (tau^+)^{++}=tau^{+3}<rho and there are no
remaining coordinates <=tau^{+3}. The generalized exact-bound lemma gives
h; cap it at the identity and normalize modulo I, so h(a)<=a.

Put B={a:h(a)=a}. If B is not in I, the definition of I gives an ultrafilter
D containing B with cf(product A/D)>=lambda; it avoids I. The rho-chain,
rho<lambda, has a strict bound t in that ultraproduct. On B, t<h. Extend
t restricted B by zero elsewhere, apply the restricted exact-bound property,
and obtain t<_D f_xi for some xi, contradiction. Thus B is I-small. Reset
h to zero on B; now h belongs to product A and bounds the original family
modulo I. This completes the cardinal induction and the directedness proof.

For the cutoff: intersection with the ideal gives the small cofinality by
definition. If D avoids I, every <lambda family has a strict bound modulo D
by directedness, so no such family is cofinal. This proves the reverse
direction. Reattach the removed coordinates arbitrarily throughout.

### G5 — thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals

Dependencies: G1,G2,G4. Every progressive nonempty A has a largest possible
cofinality M. Also |pcf(A)|<=2^{|A|}; and for every nonzero cardinal lambda,

    J_<lambda[A] = union_{theta<lambda} J_<=theta[A],

where theta ranges over cardinals. These clauses give the exact ideal
continuity needed later; source3.8 is an exercise but is expanded here.

Proof of maximum: union I of the chain J_<lambda for lambda in pcf(A) is a
proper ideal; a finite union of its members lies in one constituent ideal,
and A lies in none. Extend its dual to an ultrafilter D. By G4,
cf(product A/D)>=lambda for every lambda in pcf(A). That cofinality itself
belongs to pcf(A), so it is M. For each lambda in pcf(A), choose a witness
D of cofinality lambda. G4 gives X_lambda in D intersect J_<=lambda but
not J_<lambda. If lambda<mu, then X_lambda is in J_<mu whereas X_mu is
not, so these sets are distinct. This is the cardinal bound. For ideal
continuity, if nonempty X belongs to J_<lambda, then X is progressive and
has max pcf(X)=theta<lambda; hence X belongs to J_<=theta. The empty set
belongs to both sides for positive infinite lambda. The reverse inclusion
is the defining inequality. At lambda=0, J_<0={empty}; do not assert the
displayed empty-union formula in that degenerate case.

### G6 — thm-progressive-pcf-has-universally-cofinal-sequences

Dependencies: G1,G2,G4. For lambda in pcf(A), there is a strict
J_<lambda-increasing lambda-sequence f that is cofinal modulo every
ultrafilter D with cf(product A/D)=lambda.

Finite A: the only such ultrafilter is principal at lambda; on coordinates
a>=lambda put f_xi(a)=xi, and on smaller coordinates put zero. Their set is
J_<lambda-small, so this is the required sequence. For infinite A, tau=|A|:
if lambda=tau^+, then min A=lambda, and any cofinality-lambda ultrafilter
must concentrate on {lambda}. Indeed its avoidance of that singleton would
concentrate on coordinates >lambda, a coordinatewise lambda^+-directed
product with cofinality >lambda. The same elementary sequence works.
If lambda>tau^+, remove {tau^+} when it lies in A. It is J_<lambda-null and
ignored by all relevant ultrafilters. The remaining A has min A>tau^+.

Suppose no universal sequence exists. Construct columns f^alpha, alpha<tau^+,
each a strict J_<lambda-chain of length lambda, with each row pointwise
nondecreasing in alpha. Begin with any lambda-chain using G4. At limit
delta<tau^+, rowwise suprema of <tau^+ previous values remain below every
coordinate, since |delta|<=tau<min A; recursively combine each row supremum
with a strict bound for the preceding rows of the new column.
At successor alpha+1, choose D_alpha of cofinality lambda in which the old
column is not cofinal; linearity gives a bound for the entire old column.
Take the new zeroth entry above that bound modulo D_alpha and above the old
zeroth entry pointwise. Choose a fixed cofinal lambda-sequence q^alpha in
the ultraproduct. Recursively make the new xi-entry dominate old f^alpha_xi
pointwise, q^alpha_xi pointwise after representative choice, and all earlier
new entries modulo J_<lambda. G4 supplies these <lambda bounds. Thus the
new column is cofinal modulo D_alpha and the old column is strictly below
its zeroth entry modulo D_alpha.

Set h(a)=sup_{alpha<tau^+}f^alpha_0(a). Here tau^+<min A is essential, so
h remains in product A. For each alpha choose i_alpha with
h<_Dalpha f^(alpha+1)_(i_alpha). Choose one i<lambda above all i_alpha,
using regularity and tau^+<lambda. The sets
T_alpha={a:h(a)<=f^alpha_i(a)} increase literally by rowwise monotonicity.
T_alpha is not in D_alpha because f^alpha_i<_Dalpha f^(alpha+1)_0<=h;
T_(alpha+1) is in D_alpha by the choice of i. Thus every successor adds
a point. A set of size tau cannot have tau^+ strict successive additions:
choosing one new point at each stage gives an injection tau^+->A.
Contradiction. Restore removed coordinates arbitrarily to get the sequence
on the original A. This proves universality, not merely one chosen
ultrafilter's cofinality.

### G7 — lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds

Dependencies: G1–G4,G6, generalized projection/exact-bound units. For infinite
progressive A, lambda in pcf(A), let mu be the least ordinal with
A intersect mu not in J_<lambda. There is a universal lambda-sequence with
star_kappa for every infinite regular kappa<mu. It has an exact upper bound
h, and h may be capped at the identity. Handle the principal case directly;
do not apply the exact-bound theorem outside lambda>|A|^+.

First mu<=lambda+1: if D has cofinality lambda, it contains A intersect
(lambda+1), because on the complement a coordinatewise bound exists for
every lambda-family. G4 shows D avoids J_<lambda, so that initial segment
is positive. If mu is a successor theta+1, then its preceding segment is
null and singleton {theta} is positive. Therefore theta>=lambda; since
theta<=lambda, theta=lambda. Thus mu=lambda+1, lambda is in A, and
A intersect lambda is null. All subsets of A intersect lambda are null;
no subset containing a coordinate >=lambda is null by principal
ultrafilters, so J_<lambda=P(A intersect lambda). Use f_xi(a)=xi outside
that null initial segment. This is strongly increasing of length lambda
with the same exceptional set each time. It is universal since any
cofinality-lambda ultrafilter must contain {lambda}. Set h(a)=lambda outside
the null segment. For g<h there, regularity of lambda and |A|<lambda
give xi<lambda above all its values, proving exactness directly. Normalize
on the null segment to positive limits and cap modulo I if required.

Otherwise mu is limit, A intersect mu is unbounded in mu, and mu is a limit
cardinal. If it were bounded, an earlier initial segment would already be
positive. Also cf(mu)<=|A|<min A<=mu, so mu is singular; in particular mu<lambda.
For every infinite regular kappa<mu, kappa^{++}<mu and the coordinates
<=kappa^{++} form an I-small proper initial segment. Apply G3 to a universal
sequence from G6, obtaining a dominating sequence with all the required
uncountable star properties. Domination modulo I preserves universality by
G4. The omega case follows by restricting an uncountable strongly increasing
subsequence. Since mu is a limit cardinal above |A|, |A|^+<mu<lambda, so the
general exact-bound theorem applies. Cap h at a: the identity is an upper
bound, and exactness implies leastness. Finite A uses its principal
coordinate sequence and the same direct bound argument.

### G8 — thm-pcf-cofinality-ideals-have-single-generators

Dependencies: G1,G2,G4,G7. For every lambda in pcf(A), there is B_lambda
subset A with J_<=lambda=J_<lambda+B_lambda. It is unique modulo
J_<lambda. A generating sequence chooses one such set for each lambda;
AC licenses that family of choices. No smoothness or transitivity of the
chosen generators is asserted by this basic theorem.

First prove the criterion: B is a generator iff B belongs to J_<=lambda and
every cofinality-lambda ultrafilter contains B. Forward: such a D meets
J_<=lambda by G4, avoids J_<lambda, and X minus B in the smaller ideal
forces B in D. Reverse: for X in J_<=lambda every ultrafilter containing
X minus B has cofinality <=lambda; equality contradicts the assumed
criterion, so X minus B belongs to J_<lambda. The other containment follows
from B in the larger ideal.

Take the strengthened universal sequence and its exact bound h<=identity
from G7. Put B={a:h(a)=a}. If D contains B and meets J_<lambda then its
cofinality is <lambda. If it avoids J_<lambda, exactness transfers to D;
on B the bound h equals the identity, so the restricted sequence is cofinal
in product A/D, of true cofinality lambda. Therefore B belongs to J_<=lambda.
If D has cofinality lambda but avoids B, the function h is below a on a
D-large set and can be reset elsewhere to belong to product A. It strictly
bounds the entire sequence modulo D, contradicting universality. The
criterion proves generation. If B and C both generate, B minus C and
C minus B lie in J_<lambda, giving uniqueness modulo that ideal.

### G9 — thm-pcf-generators-restrict-finitely-cover-and-carry-scales

Dependencies: G1,G2,G4–G8. Include the following basic-PCF consequences as
one theorem with separately numbered claims and complete proofs:

1. If A0 subset A and lambda in pcf(A0), then B_lambda[A] intersect A0 is
   a generator on A0, hence equals B_lambda[A0] modulo J_<lambda[A0].
2. Every X subset A is contained in a finite union of B_mu[A] with
   mu in pcf(X). In particular J_<lambda is precisely the ideal of subsets
   of finite unions of generators whose indices are <lambda.
3. Every universal lambda-sequence restricts to a strict cofinal scale in
   product B_lambda/J_<lambda[B_lambda], of true cofinality lambda.
4. For any proper filter F on A, tcf(product A/F)=lambda iff F contains
   B_lambda and J_<lambda*, equivalently iff every ultrafilter extending F
   has product cofinality lambda. Thus, for ultrafilters D, cofinality lambda
   is equivalent to B_lambda in D and avoidance of J_<lambda; it is also
   the least generator index belonging to D.
5. The ordinary everywhere-product cofinality equals max pcf(A).

Proof1: the larger-ideal membership restricts by G2, and an ultrafilter on
A0 of cofinality lambda extends by support to one on A. Apply G8's
criterion, then its uniqueness. This also gives
X minus B_mu[A] in J_<mu[X] for mu=max pcf(X).

Proof2: induct on the ordinal mu=max pcf(X). Empty X needs no generators.
Otherwise Y=X minus B_mu has max pcf(Y)<mu when Y is nonempty; G5 supplies
that maximum. The induction hypothesis gives a finite cover of Y by
generators indexed in pcf(Y) subset pcf(X); adjoining B_mu covers X. This
is transfinite induction on a smaller maximum, not an assumed infinite
descent algorithm or a claim that ideals are countably generated. Ideal
membership implies all these finite-cover indices are <lambda. Conversely
each indexed B_mu with mu<lambda lies in J_<lambda, so finite unions do.

Proof3: B_lambda is positive modulo J_<lambda, since a cofinality-lambda
ultrafilter contains it. If h in product B_lambda is not strictly below
any restricted f_xi modulo J_<lambda, each
T_xi={a in B_lambda:f_xi(a)<=h(a)} is positive and the T_xi decrease modulo
the ideal. The family of all T_xi and the dual filter has the finite
intersection property: a finite intersection contains the largest-index
T_xi minus an ideal-small set. Extend to an ultrafilter D. It avoids
J_<lambda and contains B_lambda, hence has cofinality lambda by G4/G8.
But h bounds every f_xi in D, contrary to universality. This proves
cofinality; regularity and strictness give the exact true cofinality.

Proof4: a strict cofinal scale remains strict and cofinal in any ultrafilter
extension, giving the forward implication to the universal-extension
condition. If every extension has cofinality lambda, G8 forces B_lambda
in every extension and G4 forces every complement of an ideal-small set
into every extension. A set present in every ultrafilter extension already
lies in F: otherwise F together with its complement has the finite
intersection property and an ultrafilter extension avoiding it. Thus F
contains the asserted data. Claim3's scale on B_lambda extends arbitrarily
off B_lambda to a strict cofinal scale modulo F, proving the reverse
implication. The least-index description follows since B_mu belongs to
J_<lambda for mu<lambda, while B_lambda belongs to D.

Proof5: a cofinality-M ultrafilter, M=max pcf(A), gives the lower bound for
ordinary product cofinality. Choose a universal sequence for every mu in
pcf(A), and let H contain all pointwise finite maxima of their terms, also
the empty maximum zero. Since pcf(A) is a set of cardinals <=M, the union
of these sequences has cardinality <=M, and |H|<=M by AC and infinite
cardinal arithmetic. For a given g, consider T_h={a:g(a)<h(a)} for h in H.
They are closed under finite union. If none equals A, their downward
closure is a proper ideal: a finite union is again one such proper T_h.
Choose an ultrafilter avoiding that ideal. Its cofinality mu belongs to
pcf(A), but all terms of its universal sequence are <=g modulo it,
contradiction. Some h therefore strictly dominates g everywhere. This
expands source4.3/4.5 rather than appealing to them as exercises.

### G10 — thm-pcf-has-no-holes-for-progressive-intervals

Dependencies: G1–G5, G3 and the generalized exact-bound machinery. The
generator results are not logically needed for this theorem, although it
may be placed last for exposition. State precisely:

If A is a progressive interval of infinite regular cardinals, then

    pcf(A) = {lambda regular:min A<=lambda<=max pcf(A)}.

Do not assert this for an arbitrary progressive set. For example pcf of a
finite set is that set, so a finite set with a missing intervening regular
cardinal immediately refutes the unrestricted assertion.

First prove the directed no-holes lemma. Suppose lambda>sup A is regular
and product A/I is lambda-directed for a proper I. If {a} were I-positive,
the family of a functions taking every value below a at that coordinate
would have no bound there, contrary to a<lambda and directedness. Thus
each singleton is I-small. Take the least positive initial segment A0 of
A. It exists because A is positive. It cannot have a last point, since
its preceding initial segment and that singleton are both small. Put
mu=sup A0; all proper initial segments of A0 are null, mu is a limit
cardinal, and cf(mu)<=|A0|<min A0, so mu is singular. Restrict I to A0;
directedness is preserved by extending functions by zero outside A0.

For every uncountable regular kappa<mu, kappa^{++}<mu<lambda and
{a in A0:a<=kappa^{++}} is small. G3 gives one lambda-chain with all the
corresponding star properties. Since |A0|^+<mu, exact-bound existence and
the cofinality inequalities apply. Let h be its exact bound, capped at the
identity. In particular cf(h(a))>=min A0 modulo I (use kappa=min A0,
which is uncountable in this infinite progressive case). Normalize the
small exceptional set, choosing h(a)=a there. Thus

    min A0 <= c(a)=cf(h(a)) <= a, and c(a) belongs to A0.

The last assertion is precisely where the interval hypothesis is spent.
After each chain member is individually reset on its failure set, it lies
in product h and is a strict cofinal lambda-chain there. G1's cofinality
and repetition transfers give true cofinality lambda on product C/J,
where C=range(c) subset A0 and
J={X subset C:c^{-1}(X) in I restricted A0}. It is proper. Extend its dual
to an ultrafilter to obtain lambda in pcf(C) subset pcf(A). This is the
complete directed no-holes proof, not an invocation of an unexpanded
exercise or a generator theorem.

For the interval theorem when A has no maximum, mu=sup A is singular by
progressivity. All regulars between min A and mu are already in A. For any
regular lambda with mu<lambda<=M=max pcf(A), J_<lambda is proper, and G4
gives lambda-directedness. Apply the preceding lemma. No regular equals
the singular mu. Conversely pcf cofinalities are regular, >=min A and <=M.

If A is finite, pcf(A)=A and its interval property is immediate. If A is
infinite with a last element, its order type has the form delta+n with
delta a nonzero limit ordinal and n finite: repeatedly removing its finite
successor tail gives A0 without a maximum and a finite terminal interval F.
By G1, pcf(A)=pcf(A0) union F. There are no missing regular cardinals
between sup A0 and max F: every such regular is in the original interval,
and if not below sup A0 it is in F. Combining this with the already proved
interval description of pcf(A0) gives the interval through
max(max pcf(A0),max F)=max pcf(A). This supplies the source's omitted
finite-terminal-tail reduction.

## Exact ownership, dependencies and remaining gates

The ten proposed new units are G1–G10, not ten new pages. The three existing
generalizations above plus the existing uncountable-club-guessing unit
remain in their current allocations. No general approachability,
trichotomy, square, smooth-generator or transitive-generator theorem is a
hidden prerequisite. Source3.12's pcf transitivity is not used in any
contract; adding it is not needed for the commissioned basic generators and
interval no-holes route. No claim is made for arbitrary nonprogressive sets.

Earlier published candidate dependencies to declare and verify against
actual clauses at authoring: `def-axiom-of-choice`, `def-filter`,
`def-ultrafilter`, `thm-ultrafilter-lemma`,
`thm-ultrafilter-characterisation`, `lem-fip-generates-filter`,
`thm-cofinality-basics`, `thm-regularity-of-the-alephs`,
`thm-transfinite-recursion`, `thm-small-intersections-of-clubs`,
`thm-regular-cofinality-strata-are-stationary`, `thm-hessenberg` and
the exact cardinal-union/ordinal well-foundedness clauses used. The current
`def-reduced-ordinal-products-and-scales` and seven local scale suppliers
are scaffolded; this report does not change their publication state.

Open gates are explicit:

1. Register and author all ten units plus the stronger general clauses in
   the existing IDs. The live scaffold was not edited, so its previous
   insufficiency is not cleared by this research report.
2. Check every actual earlier item dependency and Foundations transitive
   boundary. This report inspected central interfaces, not the entire
   published foundational closure. No recorded-result supplier is allowed.
3. Independent Step3 mathematical review must check these reconstructed
   general proofs, especially G4's finite-coordinate reduction/cardinal
   induction, G6's exceptional lambda case, G7's first-positive-segment
   dichotomy, and G10's localization. Research confidence is not a verdict.
4. Preserve the old countable contracts as explicit specializations and
   recheck their consumers; strictness, positivity and modulo-small resets
   must survive authoring. A new ideal-general statement alone is not a
   proof generalization.
5. The existing uncountable club-guessing contract still requires its full
   authored proof and review. Its source proves exactly the uncountable
   case used here. The countable case, source2.18(2), is not assumed.
6. This one primary monograph chapter covers the mathematical PCF route.
   The A-page's two-independent-treatment source requirement is a separate
   page-level gate; the other SET30 sources cover the topology/Dowker
   portions, not a second independently verified general-PCF proof here.
7. Balogh, cardinal invariants and conditional small-Dowker proofs remain
   separate binding conclusions. Completing these PCF contracts does not
   certify SET30 as a whole or authorize expanding the original24.

No unexpanded source exercise/reference is left as a mathematical premise in
G1–G10: the relevant transfer, ideal continuity, product cofinality and
terminal-tail arguments are written above. Remaining gates concern actual
authoring, supplier verification and independent review, not permission to
replace the general theorems by an obligations-only remark.

## Supplemental complete contract: Kojman–Shelah weight and character

Parent requested the four missing inequalities after the general-PCF work.
All four admit direct proofs using the existing scale-subspace, box-base and
cofinality/size contracts. They do not require a new unit or the general
generator theory. The present `thm-kojman-shelah-space-weight-and-character`
scaffold is still marked proof-not-supplied; this report does not edit it.

Source checked in full: Kojman–Shelah, *A ZFC Dowker space in aleph_(omega+1):
an application of pcf theory to topology*, Proc. AMS126(1998), pp2459–2465,
[author PDF](https://shelah.logic.at/files/95569/609.pdf). Fresh complete
seven-page GET read with PyMuPDF, SHA256
`398e68c3506991ae55a5a9925dcba8b261c95d36d0362089e1160eda1332f4c7`.
The invariant sentence is on printed **2465**, not2466, in these bytes.
It states the values without proof. The arguments below are local
derivations, not a claim that the sentence supplies them. The retained
arbitrary infinite B subset omega minus {0,1} is essential; no relabeling
as all natural indices is assumed.

### Exact hypotheses and supplier uses

Assume AC. Put mu=aleph_omega, lambda=mu^+, and let B be that infinite
coordinate set. Let (f_alpha)_(alpha<lambda) be the strict eventual scale
on product_(n in B) aleph_n used to define

    X={x in X_R(B):x=*f_alpha for some alpha<lambda}.

Use these existing local contracts, with their current scaffolded rather
than published status preserved:

- `def-kojman-shelah-scale-subspace`: every x has a unique index alpha(x),
  and finite modification preserving membership in X_R(B) preserves X.
- `lem-rudin-box-space-basic-neighborhoods-and-p-space`: at x, the sets
  (g,x] intersect X for coordinatewise g<x form an open local base.
- `lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size`: |X|=lambda
  and for every g in product_(n in B) aleph_n there is x in X with g<x
  pointwise. Eventual cofinality plus admissible finite upward modifications
  would also suffice, but the current statement gives pointwise cofinality.
- `thm-regularity-of-the-alephs`, `thm-cofinality-basics`, finite cardinal
  products/absorption under AC, and `def-weight-density-and-character` with
  its raw supremum convention. The invariant definition and its character
  well-definedness lemma were read.

The closed-subspace theorem is not needed for these invariant calculations.
It remains needed elsewhere to obtain the Dowker property. No assertion
that every scale class is nonempty is used.

### 1. Character upper bound: finite cofinality strata give diagonal bases

Fix x in X. By the definition of X_R(B), there is a finite m such that
omega<cf(x(n))<aleph_m for all n in B. For each nonempty stratum

    B_i={n in B:cf(x(n))=aleph_i}, 1<=i<m,

choose increasing cofinal maps e_n:aleph_i->x(n). There are only finitely
many strata, all with uncountable regular index cardinal. For a tuple
gamma=(gamma_i) with gamma_i<aleph_i at every nonempty stratum, define
b_gamma(n)=e_n(gamma_i) for n in B_i. Each b_gamma<x pointwise, so
U_gamma=(b_gamma,x] intersect X is a neighborhood of x.

To check that these neighborhoods are cofinal among all neighborhoods,
start with any g<x. For each n in B_i choose eta_n<aleph_i with
g(n)<e_n(eta_n). Since B_i is countable and aleph_i is uncountable regular,
gamma_i=sup{eta_n:n in B_i}<aleph_i. Then b_gamma>=g pointwise and
U_gamma subset (g,x] intersect X. Thus the U_gamma form an actual local
base, not merely a family of independent coordinate choices. Its size is
at most the finite product of the aleph_i, hence at most aleph_(m-1)<mu.
This works when some strata are empty by omitting them. Consequently
chi(x,X)<mu for every x and chi(X)<=mu. This bound uses no hypothesis
about the cardinality of an unrestricted countable product.

### 2. Character lower bound: top-coordinate points

Choose one x0 in X, possible from cofinality. For every n in B define x_n
by changing only its nth coordinate to aleph_n. It is in X_R(B): the new
cofinality is aleph_n, while the old coordinate cofinalities retain their
uniform finite bound; choose a larger finite aleph bound. It remains
eventually equal to x0 and hence belongs to X.

Suppose a local base (U_j)_(j in J) at x_n has size rho<aleph_n. For each
j choose a basic box (g_j,x_n] intersect X contained in U_j. By regularity
of aleph_n,

    delta=sup{g_j(n):j in J}<aleph_n.

If J is empty it cannot be a local base at a point; thus it suffices to
consider the nonempty case. Put zeta=delta+omega_1. Since n>=2 and
delta<aleph_n, the ordinal delta+omega_1 still has cardinality <aleph_n
and is below that initial ordinal. It is above delta and has cofinality
omega_1: its final segment of order type omega_1 is cofinal and regular.
Let y agree with x_n except that y(n)=zeta. This is again an admissible
finite modification and belongs to X. It belongs to every chosen box and
therefore to every U_j. But the neighborhood of x_n obtained by putting
lower bound zeta at coordinate n excludes y. No U_j is contained in this
neighborhood, contradicting the local-base property. Therefore
chi(x_n,X)>=aleph_n. Since the infinite B is unbounded in omega,
sup_{n in B}aleph_n=mu, so chi(X)>=mu. Together with1, chi(X)=mu.

This does NOT claim chi(x,X)>=cf(x(n)) for every x and n: the ordinal
subspace with only uncountable-cofinality points can have locally isolated
coordinates, for instance omega_1. The top coordinates aleph_n with n>=2
were deliberately used so that delta+omega_1 stays strictly below them.

### 3. Weight upper bound: unite the proved local bases

For every x choose the local base constructed in1. Its size is <mu and
the union over x in X has size at most |X| times mu=lambda times mu=lambda
by AC and infinite cardinal multiplication. It is a global basis: if O is
open and x in O, some member of x's local base is contained in O. Hence
w(X)<=lambda. The size theorem enters only after the actual local bases
have been constructed and verified.

### 4. Weight lower bound: every small set misses an open box

In fact d(X)=lambda. Let D subset X with |D|<lambda. For each d, its
unique scale index alpha(d)<lambda is defined by d=*f_alpha(d). By
regularity of lambda choose beta<lambda above all these indices (the empty
D case is immediate). Then every d in D satisfies d<*f_beta. By pointwise
cofinality choose y in X with f_beta<y. The box

    (f_beta,y] intersect X

is nonempty and open, since it contains y. It misses D: a point in that
box is above f_beta at every coordinate, whereas each d is strictly below
f_beta at all but finitely many coordinates of the infinite B. Thus no
subset of cardinality <lambda is dense. Since |X|=lambda, d(X)=lambda.

If a basis had size <lambda, choose one point from each of its nonempty
members. The resulting set would have size <lambda and be dense, because
every nonempty open set contains a nonempty basis member. This contradicts
the preceding box argument. Therefore w(X)>=lambda, proving
w(X)=aleph_(omega+1). This is a scale-specific lower bound, not an inference
from cardinality or from normality.

### Supplemental disposition

All four requested invariant inequalities have complete local research
proofs above. The remaining gates are incorporation into the existing
invariant item, exact supplier authoring/review, and the usual dependency
checks. No additional mathematical prerequisite or new A/B pair was found
for these calculations. The theorem may depend on the existing cofinality
and size lemma without depending on the general-PCF G1–G10 route.
