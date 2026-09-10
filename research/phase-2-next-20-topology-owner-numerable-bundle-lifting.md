# Owner topology support: numerable bundle lifting with closed support control

Complete candidate for `thm-numerable-fiber-bundles-are-hurewicz-fibrations`,
using the exact support-subordinate partition in the local bundle manifest.
No item/manifest/contract/coverage edit or decision is made: e still owns them.
The theorem is about locally trivial bundles, and the argument uses their
explicit regular chart transport; it is not a proof of a more general theorem
about arbitrary locally Hurewicz maps.

Read the exact theorem and bundle-definition manifests, complete batch-8 notes,
and the full local partition definition, locally finite sums lemma, and interval
exponential-law lemma. In particular, local subordination requires the CLOSED
support of each numerating function to lie inside its assigned chart. This
stronger control resolves the shrinking-time issue explicitly. If the eventual
authored definition uses only cozero subordination, this argument requires
first supplying the standard support refinement; do not silently apply it.

## 1. Data and path-space functions

Let p:E->B have charts theta_i:p^-1(U_i)->U_i×F over an indexed cover and a
locally finite partition rho_i:B->[0,1] with supp rho_i⊂U_i. Repeated assigned
charts may be indexed separately; this is harmless. Take these as supplied
data as required by the manifest. Assume AC, used below to order finite words.
If B is empty then E is empty and the lifting property is vacuous.

Give P=C(I,B) its compact-open topology (or the kified topology in CGWH).
For a nonempty finite word T=(i_1,...,i_n), repetitions allowed, put
J_j=[(j−1)/n,j/n] and

lambda_T(alpha)=min_(1<=j<=n) min_(v in J_j) rho_(i_j)(alpha(v)).

Every minimum exists by compactness and continuity. It varies continuously
with alpha. For a fixed alpha, continuity of rho_i∘alpha and a finite
interval cover provide a compact-open neighbourhood on which these functions
are uniformly within epsilon of their original values: choose finite closed
subintervals small enough that original values vary by less than epsilon/3,
and require all new path images on each such subinterval to lie in the
corresponding inverse image of an epsilon/3-expanded value interval. These
are finitely many compact-open conditions. The minimum consequently changes
by at most epsilon. A finite minimum over j remains continuous.

Let V_T={alpha:alpha(J_j)⊂U_(i_j) for all j}. This is open, by its finitely
many compact-open defining conditions. The crucial support inclusion is

supp lambda_T ⊂ V_T.

Indeed if alpha(J_j) is not contained in U_(i_j), choose v in that segment
with alpha(v) outside U_(i_j), hence outside supp rho_(i_j). Its complement
is open, so the evaluation neighbourhood requiring beta(v) outside that
support is a neighbourhood of alpha on which lambda_T is identically zero.
Thus alpha is not in supp lambda_T. This proves the inclusion without using
sequences or first countability of the path space.

For every alpha some lambda_T(alpha)>0. The cozero sets rho_i>0 cover B,
so their inverse images cover I. Compactness and the elementary Lebesgue
subdivision argument give an n such that every closed equal subinterval J_j
lies in one such inverse image. Choose the finitely many indices i_j. On
each compact J_j the selected positive continuous function has positive
minimum. Their finite minimum is positive. One proof of the subdivision
claim chooses for every point a relative open interval whose closure is
inside one cover member, extracts finitely many smaller interval interiors,
and takes a positive minimum of their finitely many half-radii. This is
finite choice; no countable or arbitrary cover selection is hidden here.

For each fixed n, the family lambda_T with |T|=n is locally finite on P.
The compact image alpha(I) has an open neighbourhood O meeting only finitely
many cozero sets rho_i: cover that image by neighbourhoods witnessing local
finiteness, extract a finite subcover, and take their union. The compact-open
neighbourhood {beta:beta(I)⊂O} then meets cozero lambda_T only for words whose
letters all come from that finite set. There are finitely many such words
of length n.

## 2. A genuinely locally finite partition on paths

Set

gamma_T=max(0,lambda_T−n sum_(|S|<n)lambda_S), n=|T|.

The sum over shorter lengths is locally finite, because it is a finite union
of the locally finite fixed-length families just proved. Thus each gamma_T
is continuous, nonnegative, and at most lambda_T<=1. For a fixed alpha choose
the least positive integer n for which some lambda_T(alpha)>0. For that word
the shorter sum is zero, so gamma_T(alpha)>0.

The full family gamma_T, over all word lengths, is locally finite. At alpha
choose one S of length N with lambda_S(alpha)>0. On a neighbourhood lambda_S
is bounded below by some c>0. If n>N and n c>=1, every gamma_T of length n
vanishes throughout that neighbourhood. Only finitely many lengths remain,
each locally finite. Intersect their finitely many local-finiteness
neighbourhoods. This proves the full claim.

Let G=sum_T gamma_T. It is continuous and strictly positive by the preceding
paragraphs. Put w_T=gamma_T/G. Then sum_T w_T=1, and the family is locally
finite. Its supports obey

supp w_T = supp gamma_T ⊂ supp lambda_T ⊂ V_T.

The first equality uses that G is everywhere positive. This support inclusion
means that a word which can acquire positive weight arbitrarily near a given
path has its entire chartwise transport defined on a neighbourhood of that
path. Merely citing that short path segments have small length would not
supply this continuity control for potentially singular charts.

## 3. Continuous local transport over arbitrary subintervals

For alpha∈V_T and 0<=s<=t<=1 define transport L_T(alpha,e,s,t), starting from
any e over alpha(s), by successively using chart j on the intersection of
[s,t] with J_j, in increasing j. An empty segment makes no change. For a
nonempty segment [a,b]⊂J_j, the transport is explicitly

theta_(i_j)^(-1)(alpha(b), pr_F theta_(i_j)(e_current)).

The starting point then lies over alpha(a), in that chart. These formulas
are continuous in all parameters, preserve the base endpoint, and give the
identity for zero-length segments. There are finitely many segments. More
explicitly, use the closed cases t<=left(J_j), s>=right(J_j) (identity), and
s<=right(J_j), t>=left(J_j) (the interval with endpoints max(s,left),
min(t,right)). On common boundaries that interval has length zero and the
formula is exactly the identity. Near such a boundary alpha is in V_T, so
both endpoint evaluations are in the chart on a whole neighbourhood where
the nonempty-segment formula applies. Finite pasting, followed inductively
by the next chart transport, proves continuity of the complete composition.
In particular L_T(alpha,e,s,s)=e for every s, including chart endpoints.
No extra limit assumption on the fiber F is needed.

## 4. Global lift by normalized time intervals

Use AC to well-order the set of finite words. For each T put

a_T(alpha)=sum_(S<T) w_S(alpha), b_T(alpha)=a_T(alpha)+w_T(alpha).

These functions are continuous by local finiteness. At any fixed alpha only
finitely many weights are nonzero, so their ordered intervals [a_T,b_T]
cover [0,1] consecutively, with possible zero-length intervals between them.
For a desired endpoint t∈I, replace the interval by

[s_T,t_T]=[min(t,a_T),min(t,b_T)].

Transport an initial point e over alpha(0) through the finitely many active
word intervals in order, using L_T(alpha,-,s_T,t_T). Zero-weight words are
identity operations. The output Lambda(e,alpha,t) lies over alpha(t), and
Lambda(e,alpha,0)=e. Each preceding operation ends at the next operation's
starting base time; clipping at t preserves this statement.

This definition is independent of any locally chosen finite list containing
all active words: inserting words of weight zero inserts only identities.
It defines a globally continuous function. To prove this, fix alpha0. Local
finiteness provides a neighbourhood N where all but finitely many weights
vanish identically. Among this finite list, if alpha0 is outside supp w_T,
shrink N so that w_T vanishes on N and discard T. For every remaining T,
alpha0∈supp w_T⊂V_T, so shrink N inside V_T. There are finitely many such
restrictions. On this final neighbourhood the output is one finite composition
of the continuous L_T formulas, with the continuous endpoint functions just
defined; all L_T are defined even where w_T becomes zero. Thus continuity
holds jointly in e, alpha and t, including shrinking intervals and the
transition between active word lists. This is the promised complete gluing
argument.

Given an arbitrary parameter space X, initial lift f:X->E, and homotopy
H:X×I->B with p f(x)=H(x,0), the interval exponential law makes
x|->alpha_x=H(x,-) continuous into P. Then

H_tilde(x,t)=Lambda(f(x),alpha_x,t)

is the required continuous lift, with its prescribed initial map. The same
argument uses kified mapping spaces and CG products in CGWH. This proves
Hurewicz HLP, not just path lifting pointwise. If the fiber is empty and the
base nonempty, the path-lift domain and all initial-map test domains are empty,
so the same conclusion remains vacuous and valid under the HLP-only fibration
convention.

## Source and integration boundary

The finite-word construction follows the route already recorded from May
pp51–52 in batch-8 notes, with the normalization and explicit support/zero-time
arguments supplied here. No claim of fresh reading of the exhausted original
May/Hatcher PDFs is made, and no further retrieval was made against them.
A web search reconfirmed that the printed normalization issue is discussed,
but no secondary assertion is used to prove this theorem. The local proof
above rests on the three complete local supplier readings and explicit
compactness/chart calculations. Original source attempt histories are intact.

Before integration, reread e's eventual authored bundle and fibration
definitions, add the exact partition/compactness/continuous-real interfaces
to dependencies and citation contracts, and run focused item checks. No
extra pair or invented source stamp is needed. This is a complete mathematical
candidate, not a current authored-item acceptance or independent review.
