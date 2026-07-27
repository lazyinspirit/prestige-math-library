# Topology track — my own draft (pre-merge)

> **T-NUMBERING WARNING (Alpha-9, 2026-07-27) — read before trusting any
> "T\<n\>" in this file.** This file's `T1 ... T10` number the GENERAL-topology
> pages. `research/gen-spec.mjs` separately uses `t(1), t(2), t(3)` for the
> METRIC pages `metric-spaces` (order 24), `completeness-and-uniform-continuity`
> (order 26) and `compactness-in-metric-spaces` (order 28). The two numberings
> DO NOT AGREE: this file's `## T3` is `subspaces-products-and-quotients`, plan
> order **104**, NOT the metric compactness page at order 28. The metric
> compactness page has its own section below, `## M3`, which repeats this
> warning. Level 9's orchestrator walked into this collision when briefing
> agents; check the plan order in `research/plan-spec.json` before acting on
> any `T<n>` label here.

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
basis; 1 + omega = omega but omega + 1 > omega.
**Two entries DROPPED 2026-07-27 (self-contained-scope rule).** The **Vitali
set** needs Lebesgue measure to be worth stating at all — without a measure it
is just a transversal of the cosets of Q, which says nothing — so it waits for a
measure track. **Banach-Tarski** was listed as "remark with reference", i.e. a ‡
catalogue entry on an in-scope B page; it belongs on
`deferred-set-theory-beyond-choice`, where `rem-banach-tarski` already lives.
The Hamel basis STAYS: it costs only AC, an adopted axiom.

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
Level-9 addition (batch 1): the T1 DEFS/THMS lists above cover THREE published
or planned pages, not one — `metric-spaces` (24), `completeness-and-uniform-
continuity` (26) and `compactness-in-metric-spaces` (28). The compactness half
of those lists now has its own section, `## M3` below; read it before authoring
page 28. In particular "compact <=> sequentially compact <=> complete + totally
bounded" is NOT a single theorem here: it is five implications with three
different choice costs, itemised in M3 note (2).

---

## M3. Compactness in Metric Spaces   (plan order 28)

NUMBERING WARNING. This file's `T1 ... T10` are the GENERAL-topology pages;
`gen-spec.mjs` uses `t(1), t(2), t(3)` for the METRIC pages `metric-spaces`
(24), `completeness-and-uniform-continuity` (26) and `compactness-in-metric-
spaces` (28). The two numberings do not agree: this file's `## T3` is
`subspaces-products-and-quotients` (order 104). The metric pages 26 and 28 had
no prose section of their own; their material was carried inside the T1 lists.
This section splits out page 28 only. Page 26 is published and needs none.

Level-9 design, 2026-07-27 (batch 1). Six decisions bind authoring.

(1) ORDER 28 IS BEFORE `topology-of-r` (38). Nothing on this page may cite
Heine-Borel for R, `def-open-cover-r`, `thm-compact-iff-sequentially-compact-r`
or anything else homed on page 38. Every statement is genuinely metric-general,
and `thm-heine-borel-rn` is proved here by bisection from
`thm-nested-interval-property`, NOT by citing the R-native page. The dictionary
relating the two notions of "compact subset of R" is stated once, later, on
`continuity-ivt-evt-and-uniform-continuity` (44), in
`lem-real-and-metric-notions-agree`.

(2) THE CHOICE ACCOUNTING IS THE SPINE OF THE PAGE, per implication:
    ZF, no choice at all
      compact => closed and bounded (as a subset of any metric space)
      compact => complete           (via the FIP characterisation applied to
                                     the closures of the tails of a Cauchy
                                     sequence; the textbook route through a
                                     convergent subsequence is NOT choice-free)
      compact => totally bounded
      compact => countably compact
      compact => limit point compact
      countably compact  => sequentially compact
      limit point compact => sequentially compact
      sequentially compact => complete
      closed subset of a compact space is compact
      continuous image of a compact space is compact; EVT; Lebesgue number;
      Heine-Cantor; continuous bijection has continuous inverse
      Heine-Borel in R^n (bisection)
    AC_omega, used exactly once and named
      complete + totally bounded => compact
      a compact metric space has a countable dense subset
    DC (dependent choice)
      sequentially compact => totally bounded
The two ZF "=> sequentially compact" arrows are the reason the equivalence
closes at all; both extract a subsequence by taking the LEAST admissible index
at each stage (`thm-well-ordering-principle` + `thm-recursion`), exactly the
canonical-selection device of `thm-perfect-set-uncountable-r`. Where the range
of the sequence is finite, the repeated value is picked with `lem-finite-choice`,
not with a choice principle.

(3) DEPENDENT CHOICE IS INTRODUCED HERE (`def-dependent-choice`, first item of
the page) because without it the compactness trichotomy cannot be stated as an
equivalence: every route from sequential (or limit point, or countable)
compactness to total boundedness builds an epsilon-separated sequence one term
at a time in terms of the previous ones, and countable choice does not licence
that. See the report for the alternative the owner may prefer (define DC on
`order-zorn-and-the-axiom-of-choice`, order 10) and for the fallback if DC is
refused. NOTE: `thm-perfect-set-uncountable-r` (published, order 38) contains
the sentence "that is the axiom of dependent choice, and no item of this library
states it", which any of these options falsifies; see note 4.2 below.

(4) COMPACTNESS OF A SUBSET is defined as compactness of the metric subspace,
and `lem-compactness-is-intrinsic` then proves BOTH that the relatively open
sets are the traces of ambient open sets and that the two readings of "every
open cover has a finite subcover" agree. Nothing later may use the ambient
reading without citing that lemma.

(5) THE B PAGE IS A LEAF, so `ex-discrete-metric` and
`ex-sup-metric-on-bounded-functions` (both on `metric-spaces-examples`, order
25) MAY NOT BE CITED by anything. The three `fs-` items on this page therefore
build their witnesses inline: the discrete metric on N (three axioms verified in
two lines) for `fs-closed-and-bounded-implies-compact-in-every-metric-space` and
`fs-bounded-implies-totally-bounded`, and (0,1) with |x-y| for
`fs-totally-bounded-implies-compact`. The sup metric on the bounded functions
N -> R comes from `lem-sup-metric-is-a-metric` (A page, order 24), which is
citable.

(6) NO WORD "HOMEOMORPHISM" AND NO WORD "SEPARABLE". Neither is defined at this
point in the reading order (`def-homeomorphism-and-open-maps` is order 102,
separability is nowhere). So the statements are "the inverse map is continuous,
and f carries open sets to open sets" and "has a countable dense subset".

DEFS: dependent choice; open cover, subcover, compact metric space, compact
subset; countably compact, sequentially compact, limit point compact; finite
epsilon-net, totally bounded.

THMS: relative openness and the intrinsic character of compactness; totally
bounded implies bounded, and total boundedness passes to subspaces and closures;
compact iff every family of closed sets with the FIP meets; closed subsets of
compacts are compact; compacts are closed and bounded; compact implies complete
and totally bounded; the ZF implications among the four compactness variants;
sequentially compact implies complete; sequentially compact implies totally
bounded (DC); complete + totally bounded implies compact (AC_omega); the full
equivalence; Heine-Borel in R^n by bisection; continuous images of compacts;
EVT; the Lebesgue number lemma; Heine-Cantor; a continuous bijection from a
compact space has a continuous inverse; a compact metric space has a countable
dense subset.

FS: closed and bounded implies compact in every metric space; totally bounded
implies compact; bounded implies totally bounded.

B: the discrete metric (compact iff totally bounded iff finite, complete always);
the cube [-M,M]^n is totally bounded with an explicit grid net; a convergent
sequence together with its limit is compact; the distance to a nonempty compact
set is attained, and disjoint compacts are at positive distance; the Lebesgue
number of the two-set cover of [0,1] is exactly 1/3.
CEX: the closed unit ball of the bounded functions on N with the sup metric is
closed and bounded and not compact (the singleton indicators are 1-separated);
N with the discrete metric is bounded and not totally bounded; (0,1) is totally
bounded and not compact; on (0,1) the identity has no greatest value and 1/x is
unbounded, so EVT needs compactness; 1/x is continuous and not uniformly
continuous on (0,1); the cover of (0,1) by (1/(k+2), 1) has no Lebesgue number.

STATUS (Alpha-9, step 4, 2026-07-27). The section above is inserted verbatim
from research/level9-batch-1.notes.md §1.1; its note (3) predates the owner's
step-3 decisions and is now SETTLED: `def-dependent-choice` at order 28 is
APPROVED (decision B1-R1, scratchpad DECISIONS.md), so the alternatives note
(3) offers are dead, and the amendment to the published sentence in
`thm-perfect-set-uncountable-r` is APPROVED (B1-R5) — its "note 4.2 below"
lives in research/level9-batch-1.notes.md §4.2, and per B1-R5 that amendment
lands in the SAME commit that publishes level 9, never before (depcheck will
flag the item `published-unaudited` once its audit is cleared; that is the
owner's re-audit gate working, not a defect).

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

**Level-9 audit, 2026-07-27 (batch 2).** Six notes bind authoring of this page
pair. (1) The four subspace THEOREMS this section promised — the subspace basis,
closedness in a subspace, transitivity, and continuity into and out of subspaces
— are ALREADY DISCHARGED inside the body of `def-subspace-topology-top` at level
8, each with its proof. They are not reproved here and no item restates them.
What this page adds on subspaces is `thm-subspace-closure-and-interior` (closure
in a subspace is the trace of the closure; the interior only contains the trace,
with equality for open S; density traces only to OPEN subspaces — the unqualified
form is false, witness Q inside the irrationals), `def-hereditary-property`, and
`cor-metrizability-and-first-countability-are-hereditary`. (2) SEPARATION: the
library has no `def-hausdorff-space`; the property is spelled out but not defined
in `def-metrizable-space`, and `thm-metric-hausdorff-separation` is metric-only.
`separation-axioms` is order 112, LATER than this page. This page therefore mints
a MINIMAL `def-hausdorff-space` (owner decision — see report R2), used only by
`fs-quotient-of-a-hausdorff-space-is-hausdorff` and its companion
`cex-line-with-two-origins`; the T0-T4 hierarchy stays at 112 and the hereditary
and productive theorems stay at 116. (3) The false statement "a subspace of a
normal space is normal" is DROPPED from this page: normality is a separation
axiom and its non-hereditariness is exactly the subject of
`hereditary-and-productive-separation` (order 116). (4) The false statement "a
product of quotient maps is a quotient map" and its counterexample are DROPPED
from this page (report R3): the only standard witness is Dieudonne's, which needs
an enumeration of Q and a nested construction out of proportion to the page, and
the true positive result (Whitehead, with a locally compact factor) needs
compactness at order 108. (5) `lem-product-topology-on-rn` is a mandatory seam
item: without it "R^2" means two unrelated things on this page (a product, and
the metric space of `lem-metrics-on-rn`), which is the level-7 two-notions-of-open
defect. It is stated for d_infinity, whose balls ARE the basic product boxes,
with d_1 and d_2 following from d_infinity <= d_2 <= d_1 <= n d_infinity and
`thm-metric-equivalence-hierarchy`; it carries n >= 1, since `lem-metrics-on-rn`
does. (6) `ex-sorgenfrey-line` is homed on an examples page (order 103) and so
may not be a dep of anything; `ex-sorgenfrey-plane` re-introduces the half-open
basis inline through `thm-basis-criterion` and links the level-8 example as
prose, not as a dependency. Separately, the word "separable" never appears: the
property is written "has a countable dense subset", as at level 8.

DEFS: subspace topology (defined at level 8, `def-subspace-topology-top` —
cite, do not redefine); embedding (also defined at level 8, inside
`def-homeomorphism-and-open-maps` — cite, do not redefine); hereditary property;
initial and final topologies (defined BEFORE the product, so that the product,
the coproduct and the quotient are three instances of two constructions rather
than three separate universal properties); product topology (finite and
arbitrary, including the empty index set, whose product is a one-point space);
box topology; projections; disjoint union / coproduct; quotient topology,
quotient map, saturated set; identification space; adjunction space, cone,
suspension; Hausdorff space (minimal, owner-approved pull-forward from order 112).

THMS: (the subspace basis, closedness in a subspace, transitivity of subspaces
and continuity into and out of subspaces are ALL discharged in the body of
`def-subspace-topology-top` at level 8 and are NOT reproved here; what this page
adds is closure and interior in a subspace, and heredity); the product topology
is the initial
topology for the projections; the universal property of the product;
projections are continuous, open and surjective; a map into a product is
continuous iff each component is; closure in a product is the product of
closures; the box topology is strictly finer for infinite products; the
universal property of the quotient; continuity of induced maps; open or closed
surjections are quotient maps; composites of quotient maps; the coproduct and
its universal property; the first-isomorphism-theorem analogue for spaces.

FS: the product topology equals the box topology; a quotient of a Hausdorff
space is Hausdorff; projections are closed maps; every quotient map is an open
map; an arbitrary product of opens is open in the product topology. ("A product
of quotient maps is a quotient map" is deferred — the only standard witness is
Dieudonne's and the positive result needs compactness at order 108. "A subspace
of a normal space is normal" moves to `hereditary-and-productive-separation`,
order 116, where normality is defined.)

B: R^n as a product; the Cantor set as {0,1}^N (the ternary digits are the
coordinates; cites the order-40 Cantor items); the Hilbert cube, metrized by
sum |x_k - y_k|/2^{k+1}; R/Z, and the torus as the quotient of the square
identified with (R/Z) x (R/Z) — NOT with a circle in R^2, since identifying R/Z
with the unit circle needs the trigonometric functions at order 74; the cylinder
and the Mobius band as quotients of the square; the Sorgenfrey plane, with
Q x Q as a countable dense subset.
CEX: the diagonal map into R^omega is continuous for the product and not for the
box topology; the projection of the hyperbola shows projections are not closed;
the first projection of ([0,inf) x R) u (R x {0}) is a quotient map that is
neither open nor closed; the line with two origins is a non-Hausdorff quotient of
a metrizable space; R/Q carries the indiscrete topology; the antidiagonal of the
Sorgenfrey plane is an uncountable discrete subspace, so "has a countable dense
subset" is not hereditary (the word "separable" is not used — no item defines it).

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

**Level-8 wiring obligation (Alpha-8, 2026-07-26; corrected 2026-07-27).**
`rem-complete-metrizability-is-the-topological-shadow` on
`completeness-and-uniform-continuity` forward-orients to this material (page
`complete-metrizability-and-baire`, order 128). That page had no items when
the remark was authored, so no `forward_refs` id could be declared — and a
page-level forward reference is NOT expressible in the schema (fwdcheck
rejects a dangling entry; a page wikilink is a `link-unplanned` error), so
the generated ledger carries NO entry for this and THIS NOTE is the memory.
When the page gains items, the remark MUST declare the Alexandroff-theorem
item in its `forward_refs` (fwdcheck). Do not lose this when the page is
scaffolded.

**AMENDED at the step-8 audit, 2026-07-27 (Beta-8-1), on the owner instruction
to prove forward references inside level 8.** The orientation is now PARTLY
DISCHARGED on `completeness-and-uniform-continuity` itself, by the new item
`lem-complete-remetrisation` (id COINED, since this page had no items to reuse
an id from). That lemma defines complete metrizability as a property of a metric
topology and proves three things: invariance under homeomorphism, inheritance by
closed subspaces, and that the property is strictly weaker than completeness,
witnessed by $(0,\infty)$ under $|x-y| + |1/x-1/y|$. The remark now DEPENDS on
that lemma as an ordinary same-page dependency, and what is left forward is only
ALEXANDROFF'S THEOREM (completely metrizable iff G-delta in a complete metric
space) and its open-subspace corollary. So when this page is scaffolded, the
`forward_refs` entry to declare is the Alexandroff item ALONE, and the T8 DEFS
list must NOT coin a second "completely metrizable" definition: it is already
made precise in `lem-complete-remetrisation` and must be transferred from there
to the general-topological-space setting, not restated.

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
