# Topology track — my own draft (pre-merge)

Owner decision 2026-07-25: build BOTH the R-specific treatments AND the fully
general ones. Every A page (definitions/theorems/false statements) is paired with
a B page (examples/counterexamples). Duplication across generality levels is
INTENTIONAL: the R page proves things with R-native tools (order completeness,
sup/inf, bisection, nested intervals), the general page proves them with
metric/topological tools. Distinct ids, distinct proofs, both published.

## New categories and pages

library/foundations/  (exists)
  F1  Ordinals, Cardinals, and the Axiom of Choice        (A/B)   NEW PREREQ

library/topology/     (NEW top-level category)
  T1  Metric Spaces                                       (A/B)
  T2  Topological Spaces and Continuity                   (A/B)
  T3  Subspaces, Products, and Quotients                  (A/B)
  T4  Connectedness                                       (A/B)
  T5  Compactness                                         (A/B)
  T6  Convergence: Nets and Filters                       (A/B)
  T7  Separation Axioms                                   (A/B)
  T8  Countability, Metrization, and Baire                (A/B)
  T9  Uniform Spaces                                      (A/B)  <- greatest generality
  T10 Function Spaces and Convergence Topologies          (A/B)

library/real-analysis/  (exists) — the R-specific counterparts stay:
  RA3 Topology of R                                       (A/B)
  RA4 Limits and Continuity of Real Functions             (A/B)
  RA7 R^n as a Metric and Normed Space; Vector-Valued Fns (A/B)

## Ordering rationale

Metric BEFORE general topology (Sutherland/Cambridge order, not Munkres order):
T1 needs only R + sup/inf + sequences (RA1), so it can be built early and feeds
the analysis track immediately. T2 onward then generalizes; nothing is wasted
because T1 is stated metrically from the start and T8's metrization theorems
close the loop back to it.

F1 (ordinals/AC) is required by T5 (Tychonoff), T6 (ultrafilter lemma), T7-T8
(Sorgenfrey/Niemytzki/omega_1 counterexamples), T9 (completion via Zorn). It is
NOT required by T1-T4 or by any real-analysis page. Build it before T5.

## THE THREE LEVELS, stated once

topological space  <  uniform space  <  metric space
- Topological: open sets. Cannot express uniform continuity, Cauchy,
  completeness, total boundedness, Lipschitz. (R and (0,1) are homeomorphic;
  one is complete, one is not.)
- Uniform: entourages. Expresses all of the above; T9 is the honest "greatest
  generality" for the analysis notions.
- Metric: a real-valued distance. Where the compactness trichotomy
  (cover = sequential = complete + totally bounded) holds; fails in general
  topological spaces both ways.

---

## F1. Ordinals, Cardinals, and the Axiom of Choice

DEFS: partial/total/well order; order isomorphism; initial segment; von Neumann
ordinal; successor and limit ordinals; omega; omega_1; transfinite induction and
recursion; ordinal arithmetic; cardinal; aleph numbers; choice function; AC;
Zorn's lemma; well-ordering theorem; Hausdorff maximal principle; Tukey's lemma;
chain; filter, ultrafilter, principal/free; Boolean prime ideal (ultrafilter)
lemma; countable choice AC_omega; dependent choice DC.

THMS: every well-order is isomorphic to a unique ordinal; transfinite induction;
transfinite recursion; ordinals are well-ordered by membership; Burali-Forti;
Cantor-Schroder-Bernstein; Cantor's theorem; existence of omega_1 as the least
uncountable ordinal; every countable subset of omega_1 is bounded (the engine of
the topology counterexamples); AC <=> Zorn <=> well-ordering <=> Hausdorff
maximal <=> Tukey; AC => ultrafilter lemma, strictly; AC <=> Tychonoff;
ultrafilter lemma <=> Tychonoff for Hausdorff spaces; DC => Baire category;
AC_omega needed for "a countable union of countable sets is countable";
cardinal comparability <=> AC; every vector space has a basis <=> AC; a free
ultrafilter on N exists (needs the ultrafilter lemma).

FS: the well-ordering theorem is provable in ZF; every set can be well-ordered in
ZF; omega_1 is countable; a countable union of countable sets is countable in ZF;
Zorn's lemma is a ZF theorem; ordinal addition is commutative.

B: omega_1 and its order topology; the long line; a free ultrafilter; a Hamel
basis; the Vitali set; 1 + omega = omega but omega + 1 > omega; Banach-Tarski
(remark with reference).

---

## T1. Metric Spaces

**Level-7 audit, 2026-07-26 (owner-approved).** Three decisions bind authoring
of this page. (1) `lem-real-line-is-a-metric-space` was ADDED: nothing in the
library established that (R, |x-y|) is a metric space, and because a B page is
a leaf, no example could ever supply it. Both `fs-` items and the six R-based
B items now cite it. (2) `thm-metric-equivalence-hierarchy` no longer claims
"and both implications are strict": the strictness witnesses live on the B
page, which the A-page theorem may not cite. Strictness belongs in a REMARK on
the theorem naming `cex-topologically-not-uniformly-equivalent` and
`cex-uniformly-not-lipschitz-equivalent` -- an ordinary same-pair link, not a
dependency. (3) `ex-p-adic-ultrametric` is fixed at p = 2: general p needs
unique factorisation and the library has no number theory at all. Existence of
v_2 is `thm-strong-induction`, uniqueness is parity via
`lem-alternating-sequence`.

**Level-8 propagation note (Alpha-8, 2026-07-26).** `ex-completion-of-q-is-r`
(on `completeness-and-uniform-continuity`) states that the completion of Q
with the usual metric is R, and ONLY that: its former p-adic clause was
dropped, because no p-adic absolute value or valuation exists anywhere in
this library (`ex-p-adic-ultrametric` exhibits the 2-adic ultrametric only,
no valuation theory). The p-adic completions Q_p are a candidate FUTURE page,
never an assumed-available fact; no later page may cite or presuppose them.

DEFS: metric, pseudometric, ultrametric (extended metrics DROPPED at level 7,
decision R4: the value +infinity has no honest home until the extended reals
exist on RA-06, and nothing later in the plan uses them; reintroduce only if a
later page needs them, citing `def-extended-reals`); ball; bounded,
diameter; distance to a set and between sets; isometry; topologically /
uniformly / Lipschitz equivalent metrics; metric topology; open, closed,
interior, closure, boundary, limit point; dense, nowhere dense, meager,
residual; G-delta, F-sigma; convergence; Cauchy; complete; totally bounded;
sequentially compact; compact; connected; path-connected; separable; continuous,
uniformly continuous, Lipschitz, Holder, contraction; sup metric and uniform
convergence; product metric; Hausdorff metric; completion.

THMS: the metric axioms give a topology; balls are open; closure = adherent
points = sequential limits; closed iff sequentially closed; reverse triangle
inequality; d(.,A) is 1-Lipschitz; every metric space is Hausdorff, first
countable, and perfectly normal; separable <=> second countable <=> Lindelof;
limits are unique; convergent => Cauchy; Cauchy with a convergent subsequence
converges; Cauchy => bounded; completeness of R^n, of C(X) with the sup metric,
of l^p; Cantor's intersection theorem; existence and uniqueness of the
completion; Banach fixed point with error estimates; Picard-Lindelof;
Edelstein and Meir-Keeler variants; the four characterizations of continuity;
uniform continuity preserves Cauchy sequences; uniformly continuous extension
from a dense set; Heine-Cantor; Lipschitz => uniformly continuous => continuous;
uniform limits of continuous functions are continuous; compact <=> sequentially
compact <=> complete + totally bounded; the Lebesgue number lemma; compact =>
closed and bounded; Heine-Borel in R^n; continuous images of compacts; EVT; a
continuous bijection from a compact space to a Hausdorff space is a
homeomorphism; connectedness and components; path-connected => connected;
Baire category theorem; a residual set of nowhere-differentiable functions;
Riesz's lemma and non-compactness of infinite-dimensional balls; the Hausdorff
metric is a complete metric on the compact subsets.

FS: closed and bounded implies compact in every metric space; Cauchy implies
convergent; completeness is a topological property; every contractive-in-the-
strict-sense map has a fixed point; totally bounded implies compact; bounded
implies totally bounded; equivalent metrics share their Cauchy sequences; every
metric space is separable.

B: discrete metric; R^n with the p-metrics; sup metric on C[0,1]; l^p and
l^infinity; the 2-adic ultrametric (fixed at p = 2, audit note (3) above); the
SNCF/post-office metric; the Hilbert
cube; the Cantor set; Hausdorff-metric computations.
CEX: R vs (0,1) homeomorphic with only one complete; a uniformly continuous
bijection with non-uniformly-continuous inverse; a contraction on an incomplete
space with no fixed point; f(x)=x+1/x on [1,infinity) has d(fx,fy)<d(x,y) and no
fixed point; nested closed sets with empty intersection; the closed unit ball of
l^2 is not compact; two metrics with the same topology and different Cauchy
sequences; l^infinity is not separable; a totally bounded non-compact space; a
discontinuous linear functional.

Citation note for the metric pages (owner-approved additions of 2026-07-26):
first countability via the balls B(x, 1/n), and every 1/n-built counterexample
(the metrics |1/m - 1/n| and |1/x - 1/y|, d(m,n) = 1 + 1/(m+n), the pairs
n and n + 1/n defeating uniform continuity of x^2, set distance 0 between Z and
{n + 1/n}) cite `cor-archimedean-reciprocal` (foundations page) plus
`lem-of-inverse-positive`; f(x) = x + 1/x needs only `lem-of-inverse-positive`
(1/x > 0 rules the fixed point out). Direct-form uses of `thm-of-archimedean`
(unboundedness of |x-y| against min(|x-y|,1), d(x,y)/2 separations) stay on the
bare theorem.
Level-8 addition (batch 1): "the interior of Q is empty" and every other
no-interval-inside-a-countable-set claim cites `cor-interval-uncountable` +
`thm-rationals-countable` + `lem-subset-of-countable` (a ball is a
nondegenerate interval by `lem-real-line-is-a-metric-space`, so it cannot sit
inside a countable set). No density-of-irrationals item exists or is needed
for this. Closedness of [a,b] or [a,infinity) inside a completeness argument
cites `thm-metric-sequential-closure` + `lem-limit-preserves-order`.

---

## T2. Topological Spaces and Continuity

**Level-8 audit, 2026-07-26 (batch 1).** Five notes bind authoring of this
page pair. (1) SUBSPACE-TOPOLOGY GAP, RESOLVED (owner decision 2026-07-26):
`lem-continuity-is-local-and-pastes` (restrictions to cover members) and the
"embedding" clause of `def-homeomorphism-and-open-maps` need the general
subspace topology, which was first planned at T3. The owner approved the new
item `def-subspace-topology-top`, now in the scaffold on
`topological-spaces-and-continuity` between
`thm-continuity-characterisations-top` and
`lem-continuity-is-local-and-pastes`; author against it. The fallback (the
pasting lemma restated in ambient terms and "embedding" dropped from the def
title, deferring embeddings to T3) is DEAD.
(2) `lem-sequential-closure-inside-closure`
no longer claims "neither implication can be reversed": the witnesses are the
cocountable-topology items on the B page, which the A-page lemma may not cite;
non-reversal is a REMARK naming `cex-sequential-closure-strictly-inside-
closure` and `cex-sequentially-continuous-not-continuous`. The cheap clause
"sequential limits need not be unique" stays (indiscrete witness, inline).
(3) The refutation of `fs-sequentially-continuous-implies-continuous` inlines
the cocountable witness on the A page (it cannot cite B): identity from
(R, cocountable) to (R, usual); not continuous because R minus (0,1) contains
a nondegenerate interval, uncountable by `cor-interval-uncountable`;
sequentially continuous because cocountable-convergent sequences are
eventually constant, via `lem-countable-iff-surjection-from-n` (a sequence's
range is countable) plus `lem-subset-of-countable`. (4) The refutation of
`fs-continuous-bijection-is-a-homeomorphism` should use the two-point witness
id: ({0,1}, discrete) -> Sierpinski (continuous bijection; inverse pulls the
non-open {0} back to an open set), which needs nothing beyond
`def-standard-topologies`; the R witness stays on the B page. (5) The closed-
pasting counterexample is R covered by its closed singletons with the
indicator of {0} (the scaffold's Z-subspace version was false: Z is discrete
as a subspace of R, so EVERY map on it is continuous).

DEFS: topology; open/closed; discrete, indiscrete, cofinite, cocountable,
particular-point topologies; basis, subbasis, generated topology; neighbourhood
and neighbourhood base; coarser/finer; interior, closure, boundary, exterior,
derived set, isolated point; dense, nowhere dense, meager; Baire space;
Kuratowski closure operator; continuity at a point and globally; homeomorphism;
open map, closed map; embedding; topological property; convergence of a
sequence; sequentially continuous; first countable; the order topology; the
Sorgenfrey line.

THMS: the axioms and their closed-set dual; the basis criterion; the comparison
criterion for generated topologies; closure is the smallest closed superset;
x in cl(A) iff every neighbourhood meets A; the closure/interior/boundary
identities and De Morgan duality; the Kuratowski axioms determine a unique
topology; continuity <=> preimages of opens <=> preimages of closeds <=>
pointwise <=> f(cl A) subset cl f(A) <=> preimages of subbasic opens;
composition; the pasting lemma; homeomorphism is an equivalence relation; a
continuous open bijection is a homeomorphism; continuous => sequentially
continuous, with the converse in first countable spaces; closure = sequential
closure in first countable spaces; the metric topology; metrizability.

FS: an arbitrary intersection of opens is open; sequentially continuous implies
continuous; a continuous bijection is a homeomorphism; cl of an infinite union
is the union of closures; every topology is induced by a metric; a bijection
carrying opens to opens is continuous.

B: the discrete/indiscrete/cofinite/cocountable topologies worked out; the
Sorgenfrey line; the order topology on omega_1; Sierpinski space; the
particular-point topology; the Cantor set.
CEX: cofinite is T1 not Hausdorff; the intersection of (-1/n,1/n) is not open;
the cocountable topology on R has sequential closure strictly inside closure; a
sequentially continuous discontinuous map; the identity from the discrete to the
usual topology is a continuous bijection that is not a homeomorphism; R covered
by its closed singletons defeats the closed pasting lemma without finiteness.

---

## T3. Subspaces, Products, and Quotients

**Level-8 propagation note (Alpha-8, 2026-07-26).** The subspace topology is
no longer first defined on this page: `def-subspace-topology-top` sits at
level 8 on `topological-spaces-and-continuity`, between the continuity
characterisations and the pasting lemma (owner decision 2026-07-26, closing
batch-1 note §1.1 item (1)). When T3 is scaffolded its items CITE that
definition; this page contributes the subspace THEOREMS (basis, closedness in
a subspace, transitivity, continuity into and out of subspaces) and the
further constructions, not the definition itself.

DEFS: subspace topology (defined at level 8, `def-subspace-topology-top` —
cite, do not redefine); hereditary property; product topology (finite and
arbitrary); box topology; projections; disjoint union / coproduct; quotient
topology, quotient map, saturated set; identification space; adjunction space,
cone, suspension; initial and final topologies; embedding.

THMS: the subspace basis; closedness in a subspace; transitivity of subspaces;
continuity into and out of subspaces; the product topology is the initial
topology for the projections; the universal property of the product;
projections are continuous, open and surjective; a map into a product is
continuous iff each component is; closure in a product is the product of
closures; the box topology is strictly finer for infinite products; the
universal property of the quotient; continuity of induced maps; open or closed
surjections are quotient maps; composites of quotient maps; the coproduct and
its universal property; the first-isomorphism-theorem analogue for spaces.

FS: the product topology equals the box topology; a product of quotient maps is
a quotient map; a quotient of a Hausdorff space is Hausdorff; a subspace of a
normal space is normal; projections are closed maps; an arbitrary product of
opens is open in the product topology.

B: R^n as a product; the Cantor set as {0,1}^N; the Hilbert cube; the torus as a
quotient of the square; the Mobius band; R/Z; the Sorgenfrey plane.
CEX: the diagonal map into R^omega is continuous for the product and not for the
box topology; the projection of the hyperbola shows projections are not closed;
the line with two origins is a non-Hausdorff quotient of a Hausdorff space; R/Q
is indiscrete-like; a product of quotient maps that is not a quotient map; the
antidiagonal of the Sorgenfrey plane is a non-separable subspace of a separable
space.

---

## T4. Connectedness

DEFS: connected; separation/disconnection; clopen; component; quasi-component;
path; path-connected; path component; locally connected; locally path-connected;
totally disconnected; arcwise connected; continuum; (simply connected: forward
pointer only).

THMS: the equivalent formulations; continuous images of connected sets; unions
sharing a point; the closure of a connected set is connected; connected subsets
of R are exactly the intervals; IVT as a corollary; products of connected
spaces; components are closed, maximal, and partition the space;
quasi-components contain components and coincide in compact Hausdorff spaces;
path-connected => connected; connected + locally path-connected =>
path-connected; components are open in locally connected spaces; the topologist's
sine curve theorem; Q is totally disconnected; the long line is connected.

FS: connected implies path-connected; components equal quasi-components; the
closure of a path-connected set is path-connected; a connected space is locally
connected; an intersection of connected sets is connected; totally disconnected
implies discrete.

B: intervals; R^n; the Cantor set (totally disconnected, perfect); Q; the long
line.
CEX: the topologist's sine curve (closed and open versions); the Warsaw circle;
the deleted comb space; the Knaster-Kuratowski fan; components differing from
quasi-components; the Cantor set is totally disconnected and not discrete.

---

## T5. Compactness   [needs F1]

DEFS: open cover, subcover, compact; the finite intersection property; countably
compact; Lindelof; sequentially compact; limit point compact; locally compact;
sigma-compact; paracompact; locally finite refinement; the one-point
(Alexandroff) compactification; proper map; relatively compact.

THMS: compact <=> FIP; closed subsets of compacts are compact; compact subsets
of Hausdorff spaces are closed; compact Hausdorff => normal; continuous images;
EVT; a continuous bijection from compact to Hausdorff is a homeomorphism; finite
products; TYCHONOFF (AC), and Tychonoff for Hausdorff spaces <=> the ultrafilter
lemma; the tube lemma; the Alexander subbase lemma; compact => countably compact
=> limit point compact (in T1); all coincide in metric spaces; Lindelof +
countably compact => compact; second countable => Lindelof; Heine-Borel in R^n as
a corollary; the one-point compactification and when it is Hausdorff; locally
compact Hausdorff => completely regular; the Baire category theorem for locally
compact Hausdorff spaces; paracompact Hausdorff => normal; partitions of unity;
the Stone-Cech compactification and its universal property (statement).

FS: compact implies closed in every space; compact implies sequentially compact;
sequentially compact implies compact; infinite products of compacts are compact
without AC; countably compact equals compact; local compactness is hereditary.

B: [0,1]; the Cantor set; the Hilbert cube; beta-N; omega_1 and omega_1 + 1; the
long line; [0,1]^[0,1]; one-point compactifications of R and N.
CEX: [0,1]^[0,1] is compact and not sequentially compact; omega_1 is sequentially
compact and not compact; the long line is countably compact and not compact; the
Sorgenfrey line is Lindelof and not compact while its square is not Lindelof; the
closed unit ball of an infinite-dimensional normed space; a closed bounded subset
of Q that is not compact.

---

## T6. Convergence: Nets and Filters   [needs F1]

DEFS: directed set; net; subnet (Willard / Kelley / Aarts-Arnaud variants, with
the differences stated); eventually and frequently; convergence and cluster
points of nets; filter, filter base, refinement; ultrafilter, principal and free;
the neighbourhood filter; convergence and cluster points of filters; universal
net; the net-filter dictionary.

THMS: x in cl(A) iff some net in A converges to x; continuity iff nets are
preserved; Hausdorff iff every net has at most one limit; compact iff every net
has a convergent subnet iff every filter has a cluster point iff every
ultrafilter converges; every filter extends to an ultrafilter (Zorn); an
ultrafilter converges to each of its cluster points; TYCHONOFF VIA ULTRAFILTERS;
first countable spaces are exactly where sequences suffice; sequential and
Frechet-Urysohn spaces; the net-filter correspondence preserves convergence.

FS: sequences determine closure in every space; every subnet of a net is a
subsequence; every ultrafilter is principal; a cluster point is always a limit of
a subsequence; sequential compactness equals compactness.

B: the net indexed by neighbourhoods; unordered summation as a net, and the
theorem that a summable family of reals is absolutely summable; free ultrafilters
and Banach limits; beta-N.
CEX: the cocountable topology on R; omega_1 + 1; [0,1]^[0,1] (convergent subnets
but no convergent subsequence); a sequentially continuous discontinuous map.

---

## T7. Separation Axioms   [needs F1]

DEFS: T0, T1, T2 (Hausdorff), T2.5 (Urysohn), regular, T3, completely regular,
Tychonoff/T3.5, normal, T4, completely normal/T5, perfectly normal/T6; separated
sets; the diagonal; zero sets and cozero sets. (Source disagreement on whether
regular/normal include T1 is stated explicitly.)

THMS: the full implication chain, with the T1 hypotheses made explicit;
Hausdorff iff the diagonal is closed; T1 iff singletons are closed; compact
Hausdorff => normal; metric => perfectly normal; regularity and complete
regularity are hereditary and productive; NORMALITY IS NEITHER HEREDITARY NOR
PRODUCTIVE; URYSOHN'S LEMMA; the TIETZE EXTENSION THEOREM; completely regular
iff embeddable in a cube [0,1]^J; the Stone-Cech compactification;
completely normal iff hereditarily normal; perfectly normal iff every closed set
is a G-delta; locally compact Hausdorff => completely regular.

FS: every Hausdorff space is regular; every regular space is normal; normality is
hereditary; a product of normal spaces is normal; T1 implies Hausdorff; Urysohn's
lemma holds in regular spaces.

B: Sierpinski space; cofinite; the Sorgenfrey line and plane; the Niemytzki
(Moore) plane; the Tychonoff plank; the Tychonoff corkscrew; the K-topology on R.
CEX: one per failing implication in the chain, matched explicitly.

---

## T8. Countability, Metrization, and Baire   [needs F1]

**Level-8 wiring obligation (Alpha-8, 2026-07-26, from
research/level8-batch-1.notes.md §2).**
`rem-complete-metrizability-is-the-topological-shadow` on
`completeness-and-uniform-continuity` forward-orients to this material (page
`complete-metrizability-and-baire`, order 128). That page had no items when
the remark was authored, so no `forward_refs` id could be declared; when it
gains items, the remark MUST declare the Alexandroff-theorem item in its
`forward_refs` (fwdcheck), per the forward-refs ledger entry. Do not lose
this when the page is scaffolded.

DEFS: first and second countable; separable; Lindelof; ccc; sigma-locally-finite
and sigma-discrete bases; Baire space; comeager; completely metrizable; Polish
space.

THMS: second countable => separable, Lindelof, first countable; in metric spaces
separable <=> second countable <=> Lindelof; second countability is hereditary
and countably productive; separability is not hereditary; URYSOHN METRIZATION;
NAGATA-SMIRNOV METRIZATION; BING METRIZATION; Smirnov metrization; the BAIRE
CATEGORY THEOREM for complete metric and for locally compact Hausdorff spaces;
ALEXANDROFF'S THEOREM (completely metrizable iff G-delta in a complete metric
space); the irrationals are homeomorphic to N^N; the Hilbert cube is universal
for separable metrizable spaces; the Cantor set surjects onto every compact
metric space.

FS: separable implies second countable; separability is hereditary; every regular
space is metrizable; every Baire space is completely metrizable; Q is a Baire
space.

B: the Sorgenfrey line; the Niemytzki plane; Q; the irrationals; the Hilbert
cube; genericity of nowhere-differentiable functions.
CEX: matched to each failure above.

---

## T9. Uniform Spaces   [greatest generality; needs F1]

DEFS: entourage and uniformity (Bourbaki); uniform cover (Tukey); a gauge, i.e.
a family of pseudometrics; uniform space; the induced topology; uniformly
continuous map; Cauchy filter; complete uniform space; totally bounded;
precompact; uniform embedding; completion; separated uniformity; the uniformity
of a metric; the uniformity of a topological group.

THMS: the three definitions are equivalent; a uniformity induces a topology;
uniformly continuous => continuous, not conversely; COMPLETENESS AND UNIFORM
CONTINUITY ARE NOT TOPOLOGICAL INVARIANTS (the theorem that justifies this page);
every uniform space has a completion, unique up to uniform isomorphism; A
COMPACT HAUSDORFF SPACE CARRIES EXACTLY ONE UNIFORMITY, and every continuous map
out of it is uniformly continuous (Heine-Cantor in greatest generality); compact
<=> complete + totally bounded; a separated uniformity with a countable base is
metrizable; uniformizable <=> completely regular; the two-sided uniformity of a
topological group; uniform convergence as a uniformity on a function space.

FS: completeness is a topological property; every topological space is
uniformizable; continuous maps between uniform spaces are uniformly continuous;
a uniform space has a unique compatible metric; metrics inducing the same
topology induce the same uniformity.

B: the metric uniformity; R against (0,1); the additive uniformity of a
topological group; the uniformity of pointwise and of uniform convergence; the
unique uniformity on [0,1].
CEX: same topology, different uniformities; x -> x^2 on R; a completely regular
non-metrizable uniformizable space.

---

## T10. Function Spaces and Convergence Topologies

DEFS: the topology of pointwise convergence (product topology); the topology of
uniform convergence and the sup metric; the compact-open topology; the topology
of compact convergence; equicontinuity, uniform equicontinuity, pointwise
boundedness; the evaluation map; the exponential law; C(X,Y); separating points.

THMS: for metric Y the compact-open topology is compact convergence; uniform =>
compact => pointwise convergence, all strict; uniform limits of continuous
functions are continuous; C(X,Y) is complete for complete Y; ASCOLI-ARZELA in
the metric and the general forms; STONE-WEIERSTRASS in the algebra and lattice
forms, real and complex; the evaluation map is continuous iff X is locally
compact Hausdorff; the exponential law; Dini's theorem in general form; Gelfand
duality for compact Hausdorff X (statement).

FS: pointwise convergence implies uniform convergence on compacts; the
compact-open topology is always metrizable; Ascoli holds without
equicontinuity; complex Stone-Weierstrass holds without closure under
conjugation; the evaluation map is always continuous.

B: C[0,1] with the sup metric; the compact-open topology on C(R,R);
equicontinuous families; Bernstein polynomials; density of polynomials in C[0,1].
CEX: spikes (pointwise not uniform); a non-equicontinuous family defeating
Ascoli; the complex algebra generated by z on the unit circle defeats
Stone-Weierstrass without conjugation; Dini without monotonicity.
