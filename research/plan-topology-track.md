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
>
> **ORDER-CORRECTION TABLE (Alpha-F1, 2026-07-28), verified page by page against
> `research/plan-spec.json`.** Every order quoted in the body of this file — the
> warning above included — predates three renumbers and is now low. Use the spec
> ids; each A page's B companion is at the A order $+\,1$.
>
> | label | spec id | spec order |
> |---|---|---|
> | F1 | `ordinals-and-transfinite-recursion` / `ordinal-arithmetic` / `cardinal-arithmetic-and-cofinality` | 243 / 245 / 247 |
> | T1 | `metric-spaces` | 116 |
> | (M2) | `completeness-and-uniform-continuity` | 118 |
> | M3 | `compactness-in-metric-spaces` | 120 |
> | T2 | `topological-spaces-and-continuity` | 249 |
> | T3 | `subspaces-products-and-quotients` | 251 |
> | T4 | `connectedness` | 253 |
> | T5 | `compactness` | 255 |
> | T6 | `nets-and-filters` | 259 |
> | T7 | `separation-axioms` (+ 263, 265, 267, 271 — see the T7 audit block) | 261 |
> | T8a | `countability-axioms-and-cardinal-functions` | 273 |
> | T8b | `metrization-theorems` | 275 |
> | T8c | `complete-metrizability-and-baire` | 277 |
> | T9 | `uniform-spaces` | 279 |
> | T10 | `function-space-topologies` (+ 285, 287 — see the T10 audit block) | 283 |
>
> So `## M3`'s header "plan order 28" is really **120**, `## T3` is **251** and
> not 104, and the T8a/T8b/T8c headers have been refreshed to
> **273/275/277**. Treat remaining legacy numeric annotations as historical and
> resolve page ids against the spec.

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

**frontier-2 audit, 2026-07-29 (batch 1). T4 IS SPEC PAGE 253 `connectedness`
(companion 254). Six notes bind authoring.**

**(1) THE ORDER TOPOLOGY OF A LINEARLY ORDERED SET IS MINTED HERE, AND IT HAS TO
BE.** There is no order topology this page or page 255 may legally cite. The
published `def-order-topology-on-an-ordinal` is homed on `separation-axioms`
(order 261), ABOVE both; the published `ex-order-topology` is homed on
`topological-spaces-and-continuity-examples` (order 250) and is a B-page item,
hence leaf-locked and citable from nowhere. `grep` of `items/` finds no third.
So 253 mints `def-order-topology-on-a-linearly-ordered-set` — the general
definition, rays as a subbasis — which is the lowest-ordered page of this build
that needs one, and 255 cites it for the ordinal spaces. **The id
`def-order-topology` is NOT available: it is an alias of the published
`ex-order-topology`.** The new definition carries a dictionary paragraph in its
Remarks naming `ex-order-topology` (a wikilink in a Remarks section creates no
`deps` edge and no b-leaf violation, so this is legal and is the only way to
record the agreement), and 261's definition receives a staged amendment.

**(2) THE TOPOLOGIST'S SINE CURVE IS DROPPED AND REPLACED, BECAUSE THIS LIBRARY
HAS NO SINE.** `sine-cosine-and-the-definition-of-pi` is spec order 179, i.e.
EARLIER than 253, and it is UNBUILT; nothing on disk defines $\sin$. A dep onto
it would be classified `planned-earlier`, which `depsource` does not fail, and
would be an unbuildable page. The replacement is
`lem-the-oscillating-zigzag-curve`: the graph of the piecewise-linear map on
$(0,1]$ that runs between $0$ and $1$ on each $[1/(n+2), 1/(n+1)]$. Its graph is
path-connected, its closure adds $\{0\} \times [0,1]$, and that closure is
connected, not path-connected and not locally connected — every property the sine
curve was there for, with no transcendental function anywhere. The library
already has a precedent for this substitution: the published
`ex-distance-to-the-integers` calls $\psi(x) = \inf_{n} \lvert x - n \rvert$ "the
trigonometry-free oscillator".

**(3) THE LONG LINE IS KEPT AND IS THE REASON 253 DECLARES `ordinal-arithmetic`.**
`def-the-long-line` and `thm-the-long-line-is-a-connected-linear-continuum` are
on the A page, not the B page, because 255 needs the long ray for "countably
compact and not compact" and a B-page item would be leaf-locked. The theorem
proves three things and no more: the long ray is a linear continuum; hence it is
connected; and every at most countable subset of it is bounded (this last clause
is the one 255 consumes, and it inherits the $\mathrm{AC}_\omega$ cost of
`thm-countable-subsets-of-omega-one-are-bounded`). **Path-connectedness of the
long ray is DROPPED**: it needs an order isomorphism $[0,x] \cong [0,1]$, which is
a transfinite construction of its own.

**(4) THE REAL-LINE DICTIONARY IS UNFOLDED INLINE AND NEVER ROUTED THROUGH
`rem-r-native-topology-scope`.** That remark is one of the five items in the
library that seed the forward-dependence marker (it uses its `forward_refs`
outside a Remarks section), so a `deps` edge to it would propagate the sky ↗
"rests on later material" chip to every consequence on this page. The
identification needed by `cor-connected-subsets-of-the-line` is one sentence and
is written out: $B(x,r) = (x-r, x+r) = N_r(x)$, so "open in
`def-open-and-closed-in-r`" and "open in `def-metric-topology` for
$d_{\mathbb{R}}$" are the same condition word for word. `def-connected-r` and
`thm-connected-subsets-of-r-are-intervals` are themselves safe to cite: each
declares a forward reference but uses it only inside `## Remarks`, so neither is a
seed.

**(5) "QUASI-COMPONENTS COINCIDE WITH COMPONENTS IN COMPACT HAUSDORFF SPACES" IS
NOT ON THIS PAGE.** Compactness is spec order 255, above 253. The item is homed on
255 as `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space`, which
is legal because 255 may cite 253. 253 keeps
`thm-quasicomponents-contain-components` and states no equality.

**(6) DROPPED FROM T4, each with what would license it.** *Arcwise connectedness
and continua*: a continuum is a compact connected Hausdorff space and compactness
is 255; the notion belongs to 255 or above, and arcwise connectedness needs the
Hahn-Mazurkiewicz circle of ideas, denied in this file's scope denials. *The
Warsaw circle and the Knaster-Kuratowski fan*: both are several pages of
construction, and the fan additionally needs a Cantor-set indexing whose payoff
(totally disconnected but not zero-dimensional) rests on `countability-axioms-and-
cardinal-functions` (273). *Simple connectedness*: the T4 list already marks it
"forward pointer only", and under the self-contained-scope rule a forward pointer
to unbuilt material is not written at all; `homotopy-and-homotopy-equivalence` is
spec order 289 and owns it. *The Cantor set as a totally disconnected perfect
space*: the published `ex-cantor-set-is-perfect-and-totally-disconnected` (order
134) already says it, and re-minting it at 254 would be a second item for one
statement.

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

**frontier-2 audit, 2026-07-29 (batch 1). T5 IS SPEC PAGE 255 `compactness`
(companion 256). Seven notes bind authoring.**

**(1) THREE DICTIONARY OBLIGATIONS LAND HERE AND ALL THREE ARE DISCHARGEABLE
BACKWARD.** `def-metric-compactness` and `def-metric-compactness-variants` are
`compactness-in-metric-spaces` (order 120), BELOW 255, so the agreement is an
ordinary backward citation and is a numbered item on this page,
`thm-compactness-agrees-with-metric-compactness`, plus a dictionary clause inside
`def-compactness-variants`. `def-locally-compact-metric-space` is
`function-space-topologies` (order 283), ABOVE 255, so the agreement CANNOT be
cited from here in either a Statement or a Remark without a forward reference —
and a forward reference declared on `def-locally-compact-space`, a base
definition, would propagate the sky ↗ chip to every consequence on the page. So
255 states the metric unfolding of its own definition (a point has a compact
neighbourhood exactly when some ball lies inside a compact set) WITHOUT naming the
later item, and the agreement is recorded by a staged amendment to the published
item, which is where the standing obligation was written.

**(2) "COMPACT HAUSDORFF $\Rightarrow$ NORMAL" IS NOT ON THIS PAGE, AND T5'S LIST
WAS WRONG TO HOME IT HERE** (the entry has since been removed from the THMS list;
see the batch-2 note at the end of this section). Normality is defined at 261,
above 255, so as originally listed it was a forward reference on the spine, which
`fwdcheck` rejects outright (`forward-on-spine`). Its only legal home is a page
above BOTH 255 and 261. The same holds for *locally compact Hausdorff
$\Rightarrow$ completely regular* (which additionally needs Urysohn's lemma, spec
order 267) and for *partitions of unity*. What 255 supplies instead is the exact
separation input those proofs need, stated as clauses of
`thm-compact-subset-of-a-hausdorff-space-is-closed`: a point and a disjoint
compact set, and two disjoint compact sets, have disjoint open neighbourhoods.

**(3) PARACOMPACTNESS IS DROPPED ENTIRELY, and this is not a loss.**
`partitions-of-unity-and-paracompactness` is spec order **269** and ALREADY
declares `compactness` among its `requires`. Every theorem T5 lists about
paracompactness (paracompact Hausdorff $\Rightarrow$ normal, partitions of unity)
needs normality, which 269 has and 255 does not. Defining paracompactness and
locally finite refinements at 255 would leave a definition with nothing to prove
and would pre-empt 269.

**(4) TYCHONOFF TAKES THE ALEXANDER SUBBASE ROUTE, NOT THE ULTRAFILTER ROUTE, AND
THIS IS FORCED.** The published `filters-and-ultrafilters` (order 12) has filters,
the finite intersection property, ultrafilters, the ultrafilter lemma and the
prime characterisation — and NO notion of a filter converging in a topological
space, which is what "compact iff every ultrafilter converges" needs. That notion
is `nets-and-filters`, spec order **259**, above 255, and 259 already declares
`compactness` in its `requires`. So 255 proves `thm-alexander-subbase-lemma`
directly from Zorn (published at order 10) and derives Tychonoff from it; the
ultrafilter proof, and the equivalence "Tychonoff for Hausdorff spaces iff the
ultrafilter lemma", belong to 259. What 255 does use from page 12 is
`def-finite-intersection-property` and `lem-fip-generates-filter`, in
`thm-compact-iff-fip`.

**(5) "SECOND COUNTABLE $\Rightarrow$ LINDELOF" IS DROPPED.** Second countability
is `countability-axioms-and-cardinal-functions`, spec order **273**, ABOVE 255.
Minting a second-countability definition here would take 273's material and create
a second notion. 255 defines Lindelof and proves the hierarchy that does not
mention a countable basis. Licensed by: page 273.

**(6) "THE BAIRE CATEGORY THEOREM FOR LOCALLY COMPACT HAUSDORFF SPACES" — DROP
REVERSED BY THE OWNER, 2026-07-29, AND IT IS ON PAGE 255.** The scaffold dropped
it **for page size, not for reachability**, and recorded that it is provable from
the material 255 already has. The owner reinstated it mid-build ("don't worry
about page length"); page 255 carries
`thm-baire-category-locally-compact-hausdorff` and stands at 29 items, still
under the 30 threshold. **Page size is not a reason to drop a true result — split
the page instead.**

Its statement is **"assuming dependent choice"**, and the hypothesis is
deliberately stated as *sufficient and not necessary*: the published
`rem-baire-category-choice-strength` records that BCT for compact Hausdorff
spaces is equivalent over ZF to **DMC**, strictly weaker than DC (Fossy–Morillon
1998), and **explicitly declines to assert the locally compact form's
equivalence** because the Bacsich (1972) attribution was never confirmed against
a primary source. Page 255 does not assert it either; it mentions that item via
`external_refs`, which is the sanctioned surviving use of the ‡ tier.

`complete-metrizability-and-baire` (spec order 277) must therefore **not**
re-mint the locally compact case when it is built; the complete-metric case is
still its own.

**(7) THE `fs-` THAT CANNOT BE WRITTEN.** T5 lists "infinite products of compacts
are compact without AC". Its refutation is the independence of AC, which is
recorded-not-proved, and the self-contained-scope rule allows independence facts
about AC only as a MENTION, never as a proof step in a phase-format Refutation.
It is dropped as an `fs-` and survives as a sentence in
`rem-compactness-conventions-and-choice-ledger`, which mentions the published ‡
`rem-schechter-kelley-tychonoff` through `external_refs`. The other five `fs-`
items of T5's list are all kept and all have witnesses reachable from this page.

**Kept, and what carries them.** *$[0,1]^{[0,1]}$-style compact non-sequentially-
compact*: the witness minted inside the `fs-` is
$\{0,1\}^{\{0,1\}^{\mathbb{N}}}$ with $F_n(x) = x_n$, which needs only Tychonoff
and pointwise convergence and avoids binary expansions of reals entirely.
*$\omega_1$ sequentially compact and not compact*, *$\omega_1 + 1$ compact*: from
`lem-the-order-topology-on-an-ordinal` and `thm-ordinal-spaces-and-compactness`,
both on the A page, and from the published `thm-countable-subsets-of-omega-one-
are-bounded`. *The long line countably compact and not compact*: from 253's
`def-the-long-line`. *The Sorgenfrey line Lindelof with a non-Lindelof square*:
the published `ex-sorgenfrey-line` (250) and `ex-sorgenfrey-plane` (252) are
B-page items and leaf-locked, so the line is re-minted on the B page 256, where a
Remarks wikilink to the published item records that it is the same space; the
payoff needs only that the antidiagonal is an uncountable closed discrete
subspace, not Jones' lemma. *A closed bounded subset of $\mathbb{Q}$ that is not
compact*: already published as `cex-closed-bounded-in-q-not-compact` (order 132)
and not re-minted; the related hereditary failure is
`fs-local-compactness-is-hereditary` on the A page.

DEFS: open cover, subcover, compact; the finite intersection property; countably
compact; Lindelof; sequentially compact; limit point compact; locally compact;
sigma-compact; paracompact; locally finite refinement; the one-point
(Alexandroff) compactification; proper map; relatively compact.

THMS: compact <=> FIP; closed subsets of compacts are compact; compact subsets
of Hausdorff spaces are closed; continuous images;
EVT; a continuous bijection from compact to Hausdorff is a homeomorphism; finite
products; TYCHONOFF (AC), and Tychonoff for Hausdorff spaces <=> the ultrafilter
lemma; the tube lemma; the Alexander subbase lemma; compact => countably compact
=> limit point compact (in T1); all coincide in metric spaces; Lindelof +
countably compact => compact; second countable => Lindelof; Heine-Borel in R^n as
a corollary; the one-point compactification and when it is Hausdorff; the Baire
category theorem for locally compact Hausdorff spaces.

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

**frontier-2 audit, 2026-07-29 (batch 2). THREE ITEMS OF THE LIST ABOVE ARE NOT
255's, and were removed from it.** *compact Hausdorff => normal* is homed on 263
`hausdorff-via-the-diagonal`; *locally compact Hausdorff => completely regular* on
267 `urysohn-lemma-and-tietze`; *paracompact Hausdorff => normal* and *partitions
of unity* on 269 `partitions-of-unity-and-paracompactness`. Every one of them
names a separation axiom defined at 261, which is ABOVE 255, so none of them can
be stated at 255 at all. *The Stone-Cech compactification* likewise belongs to 271
`tychonoff-embedding-and-stone-cech`.

**255 MAY NOT REUSE THESE PUBLISHED IDS.** `def-metric-compactness`,
`lem-closed-subset-of-a-compact-space-is-compact`,
`thm-continuous-image-of-a-compact-space-is-compact`,
`thm-compact-iff-finite-intersection-property`,
`thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`,
`lem-compactness-is-intrinsic` and `lem-tube-lemma-for-a-compact-metric-factor`
are all PUBLISHED on 120 `compactness-in-metric-spaces` and all state the METRIC
case. Ids are immutable, so the general topological versions need distinct ids,
and each of them owes a dictionary sentence saying that the metric case agrees —
this is the level-7 "two notions" defect and it is exactly where it would start.

---

## T6. Convergence: Nets and Filters   [needs F1]

**Frontier-4 propagation, 2026-07-30.** The machine scaffold has **28 A-page
items at spec order 259 and 8 B-page items at order 260**. The approved direct
prerequisites are exactly `compactness`,
`absolute-convergence-and-rearrangement`, and
`finite-counting-and-binomial-coefficients`.

DEFS: directed preorder and net; eventually and frequently; convergence and
cluster points of nets; subnet via an eventually cofinal index map, with the
stricter order-preserving conventions recorded but not used; the tail filter;
convergence and cluster points of filters; the canonical net derived from a
filter; universal net; and the net-filter dictionary. Reuse the published
definitions of filter, filter base and ultrafilter rather than re-minting them.

THMS: $x\in\overline A$ iff some net in $A$ converges to $x$; continuity iff
convergent nets are preserved; Hausdorff iff every net has at most one limit.
The tail-filter and derived-net constructions preserve limits and cluster
points. Assuming the ultrafilter lemma, compactness is equivalent to every net
having a cluster point, every net having a convergent subnet, every filter
having a cluster point, and every ultrafilter converging. Universal nets
correspond to ultrafilters; every net has a universal subnet under the
ultrafilter lemma; compactness is equivalent to convergence of universal nets;
and the product of compact Hausdorff spaces is compact. Keep that last theorem
distinct from the published arbitrary-product theorem under full AC.

Assuming countable choice, first countability implies Fréchet--Urysohn; in ZF,
Fréchet--Urysohn implies sequential. These are implications, not
characterisations, and the B-page sequential fan and Arens space witness that
the converses fail.

FS: keep “every subnet of a sequence is a subsequence” as the page-local false
statement. Reuse the published failures of sequence detection, principalness of
ultrafilters, and sequential compactness rather than minting duplicates.

B: the neighbourhood-indexed net witnessing closure; the finite-subset net for
unordered real summation and, under countable choice, the theorem that such a
family is summable exactly when it has at most countable support whose nonzero
terms form an absolutely convergent series, with sum independent of enumeration;
a free ultrafilter converging in the one-point convergent-sequence space under
the ultrafilter lemma; a sequence in a compact binary cube with convergent
subnets but no convergent subsequence; the cocountable topology; the sequential
fan; and Arens space.

Banach limits are dropped until Hahn--Banach and functional analysis are built.
The identification of $\beta\mathbb N$ is dropped until
`tychonoff-embedding-and-stone-cech`; neither is a forward dependency of this
pair.

---

## T7. Separation Axioms   [needs F1]

**frontier-1 audit, 2026-07-28 (batch 1). T7 IS NOW FIVE SPEC PAGES, and this
section is authoritative for none of them alone.** `plan-spec.json` carries
**261 `separation-axioms`**, **263 `hausdorff-via-the-diagonal`**, **265
`hereditary-and-productive-separation`**, **267 `urysohn-lemma-and-tietze`** and
**271 `tychonoff-embedding-and-stone-cech`** (all five orders verified against the
spec, 2026-07-28). Of T7's THMS list, page 261 owns:
the definitions, separated sets, zero and cozero sets, "T1 iff singletons are
closed", metric => perfectly normal, and every implication of the chain that is
provable without Urysohn's lemma. "Hausdorff iff the diagonal is closed" is 263's;
hereditary and productive behaviour, and "completely normal iff hereditarily
normal", are 265's; Urysohn's lemma and Tietze are 267's; the cube embedding and
Stone-Cech are 271's.

**EXACTLY ONE arrow of the "full implication chain" is NOT provable at 261, and
the page must say so rather than assert the whole chain.** That arrow is
**normal + T1 => completely regular**, which IS Urysohn's lemma, homed at 267.
Page 261 proves T6 => T5, T6 => T4, T5 => T4, T4+T1 => T3+T1, T3.5 => T3,
T3+T1 => T2.5 => T2 => T1 => T0, and metrizable => all of them, and records the
one gap in a Remark in the non-decaying form ("not available at this point in the
reading order").

**T6 => T5 is PROVED at 261 and is its own numbered theorem**
(`thm-perfectly-normal-implies-completely-normal`), against the separated-sets
form of complete normality that 261 defines. *Beta-F1-1 reported this arrow as a
second unreachable gap needing Urysohn functions; that is REFUTED and must not be
recorded here as a scope limit.* It needs only normality plus "every open set is
$F_\sigma$", i.e. the definition of perfect normality restated through
complementation: for separated $A, B$ write $X \setminus \overline{B} =
\bigcup_n F_n$ and $X \setminus \overline{A} = \bigcup_n G_n$ with $F_n, G_n$
closed, use normality to get open $U_n \supseteq F_n$ with
$\overline{U_n} \cap \overline{B} = \varnothing$ and symmetrically $V_n$, then
interleave: $U = \bigcup_n (U_n \setminus \bigcup_{i \le n}\overline{V_i})$ and
$V = \bigcup_n (V_n \setminus \bigcup_{i \le n}\overline{U_i})$ are open, separate
$A$ and $B$, and are disjoint by the $n \le m$ / $m < n$ case split. The full
argument is written out in `research/frontier-1-RESUME.md`. The *hereditarily
normal* characterisation of complete normality stays 265's; this proof does not
touch it.

**frontier-2 audit, 2026-07-29 (batch 2). THE THREE COMPACTNESS-DEPENDENT
RESULTS T7 LOST AT 261 NOW HAVE HOMES, AND NONE OF THEM IS AT 255.** Page 255
`compactness` defines general compactness but sits BELOW 261, so no result whose
statement names regularity, normality or complete regularity can live there;
`fwdcheck` rejects such a statement outright as `forward-on-spine`. The three
results are therefore homed as follows.

(1) *compact Hausdorff => normal* is homed on **263 `hausdorff-via-the-diagonal`**
as `thm-a-compact-hausdorff-space-is-regular-and-normal`. **The two separation
lemmas this block originally named as its inputs were never authored as separate
263 items**: at the step-4 splice they were de-duplicated into clauses 1 and 2 of
`thm-compact-subset-of-a-hausdorff-space-is-closed` on 255 (see
`research/frontier-2-RESUME.md` §"The two cross-batch conflicts"), and the
authored 263 theorem cites those clauses. **263 rather than 267,
because 265 `hereditary-and-productive-separation` needs it and 265 does not
declare 267.** The standard proof that normality is not hereditary runs through a
compact Hausdorff space with a non-normal subspace, and 265 requires 263 and 255
and nothing above them; homing the theorem at 267 would put it out of 265's reach
permanently.

(2) *locally compact Hausdorff => completely regular* is homed on **267
`urysohn-lemma-and-tietze`** as `thm-a-locally-compact-hausdorff-space-is-
completely-regular`, since it needs Urysohn's lemma as well as local compactness.
Its geometric half — that such a space has a neighbourhood base of open sets with
compact closure, hence is regular — is split out onto 263 as `lem-a-locally-
compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`, because it
needs no Urysohn function. **The route through "complete regularity is
hereditary" is NOT taken**: that property is 265's, 265 is unbuilt, and 265 sits
below 267 so it cannot be back-filled. **The authored proof (step 5, superseding
the route sketched here) goes through the one-point compactification instead**:
$X^{*}$ is compact Hausdorff by `thm-one-point-compactification-properties`,
hence normal by 263's theorem; Urysohn is applied in $X^{*}$ and the function
restricted to $X$. The scaffold's extend-by-zero sketch was not used, and the
263 base lemma, while authored and sound, is not cited by the authored 267
theorem.

(3) *paracompact Hausdorff => normal* is **NOT on either of these pages.** Its
home is **269 `partitions-of-unity-and-paracompactness`**, which `plan-spec.json`
now declares with direct `requires` =
`urysohn-lemma-and-tietze`, `compactness`, and
`hereditary-and-productive-separation`. It is scaffolded by the frontier-4
block immediately below.

**Frontier-4 propagation, 2026-07-30: pages 265/266.** The machine scaffold for
`hereditary-and-productive-separation` has **24 A-page items and 7 B-page
items**. Its direct prerequisites are exactly
`hausdorff-via-the-diagonal`, `compactness`,
`ordinals-and-transfinite-recursion`, `ordinal-arithmetic`, and
`cardinal-arithmetic-and-cofinality`; the last supplies the cardinal machinery
for Jones's obstruction. The page proves the positive hereditary and productive
results through complete regularity, closed heredity of normality, complete
normality iff hereditary normality, and under countable choice the
perfect-normal heredity corollary.

The lower-limit line is reconstructed on the A page because the published
Sorgenfrey material is B-leaf locked. Jones's bound and the closed discrete
antidiagonal then show, under AC, that normality is not productive. The deleted
Tychonoff plank is likewise reconstructed from the published ordinal and compact
Hausdorff machinery; under countable choice it is a regular nonnormal open
subspace of a compact Hausdorff normal space. It proves that normality is not
hereditary and restores `fs-every-regular-space-is-normal`, superseding the
frontier-1 drop recorded below.

**Frontier-4 propagation, 2026-07-30: pages 269/270.** The machine scaffold for
`partitions-of-unity-and-paracompactness` has **25 A-page items and 7 B-page
items**. Its exact prerequisites are `urysohn-lemma-and-tietze`, `compactness`,
and the planned-earlier seam `hereditary-and-productive-separation`; the seam
supplies the normal lower-limit line and its nonnormal square for the failure of
productivity. Paracompactness means that every open cover has a locally finite
open refinement and does **not** include Hausdorffness. Every regularity,
normality, shrinking, or partition-of-unity result states Hausdorffness
separately.

The proof architecture is fixed: locally finite closure and closed-union
lemmas; paracompact Hausdorff implies regular; paracompact Hausdorff implies
normal; a two-stage shrinking under AC; Urysohn functions under the published
DC hypothesis; locally finite summation and normalization; and then the
subordinate partition theorem under AC and DC. Stone's theorem is a separate
two-stage argument: under AC, Ornstein's point-finite refinement is followed by
the locally finite refinement of that specifically constructed cover. This is a
sufficient-hypothesis statement only; it makes no claim that AC is the exact
strength of Stone's theorem.

The remaining consequences keep their own hypotheses: compact spaces are
paracompact without separation assumptions; closed subspaces inherit
paracompactness; under countable choice, countably compact paracompact Hausdorff
spaces are compact and regular Lindelöf spaces are paracompact. The ordinal
witness refutes arbitrary heredity under countable choice, and the lower-limit
square refutes productivity under AC. A finite non-$T_1$ compact space refutes
the claim that paracompactness alone implies normality.

**Residual authoring gate for Stone's theorem.** The AMS primary PDF was
bot-blocked during scaffolding. Before authoring either Ornstein lemma or
`thm-stone-metric-spaces-are-paracompact`, compare the exact dyadic
point-finite construction and especially the restricted second-stage lemma with
an accessible primary copy. If that comparison cannot be completed, defer the
two lemmas, Stone's theorem, and its dependent corollary rather than authoring
from the secondary reconstruction.

**Publication-time prose obligations, not step-4 item edits.** When page 269
publishes, amend `rem-stone-theorem-choice-strength` so only the independence
analysis remains unproved, point order-relatively to
`thm-stone-metric-spaces-are-paracompact`, and replace the generic choice-ledger
pointer by `rem-paracompactness-choice-and-convention-ledger`; use
`forward_refs`, never `deps`. When page 273 publishes, enact the four staged
second-countability/separability repairs recorded under T8a below. In each case
the affected published owner-audit field is cleared for re-audit in the
publishing commit.

**Dropped from 261/262 at `frontier-1`, each with what would license it — kept as
the record of the drop; for the compactness-dependent entries the frontier-2
block above supersedes what follows.** *compact Hausdorff =>
normal*: general topological compactness did not exist in the library when 261
was scaffolded — at that point the only
compactness on disk was metric (`def-metric-compactness`, order 120) and the
general notion belonged to page 255 `compactness`, then unbuilt AND below 261, so
it could not be back-filled. *locally compact Hausdorff => completely regular*:
same
reason, plus Urysohn. *the Sorgenfrey line and plane*: the published items
`ex-sorgenfrey-line` (order 250, B page) and `ex-sorgenfrey-plane` /
`cex-antidiagonal-of-the-sorgenfrey-plane` (order 252, B page) are LEAF-LOCKED and
may not be cited from another page; rebuilding them is cheap but the payoff item —
the Sorgenfrey plane is not normal — needs either Jones' lemma (cardinal
arithmetic: page 247 is built at frontier-2 but scaffolds no Jones-lemma item) or
a delicate Baire-category argument, and the
published Baire material (`thm-baire-category-r`, order 133) is about $\mathbb{R}$
specifically. *the Niemytzki (Moore) plane*: same obstruction, and its complete
regularity would additionally need 265. *the Tychonoff corkscrew* (a T3 space that
is not T3.5): dropped outright, it is several pages of construction. *every regular
space is normal* as an `fs-`: dropped, because after the two drops above no regular
non-normal witness is reachable — the deleted plank IS regular, but proving that
needs "regular is hereditary and productive", which is 265's.

**Kept, and what carries them.** *T1 not T2*: the cofinite topology, which is on
the A page `def-standard-topologies` (order 249) and is therefore citable, unlike
its worked B-page companion. *normal not Hausdorff*: the indiscrete two-point
space, likewise from `def-standard-topologies`; this is the item that shows the T1
hypotheses are not decoration. *T0 normal not regular*: Sierpinski space, likewise.
*Hausdorff not regular*: the K-topology on $\mathbb{R}$, built from
`thm-basis-criterion`, minted as `lem-the-k-topology-is-hausdorff-and-not-regular`
on the A page so the `fs-` can cite it. *unique sequential limits without
Hausdorff*: the cocountable topology on $\mathbb{R}$. *a Hausdorff non-normal
space*: the DELETED TYCHONOFF PLANK $((\omega_1+1) \times (\omega+1)) \setminus
\{(\omega_1,\omega)\}$, which is the reason 262 declares `ordinal-arithmetic`
(order 245) as a prerequisite — its non-normality is exactly the boundedness of
countable subsets of $\omega_1$.

**The order topology on an ordinal is minted on the A PAGE, not the B page**
(`def-order-topology-on-an-ordinal`, `lem-ordinal-order-topology-is-t3`). The
published `ex-order-topology` is a B-page item at order 250 and is leaf-locked, and
homing the ordinal case on 262 would leave it unusable by 273's B page, which the
T8a scaffold already promises will need $[0,\omega_1)$. The new definition is
stated for ordinals only and says so; it does not claim to be the general
linearly-ordered-space definition.

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
`complete-metrizability-and-baire`, current spec order 277). That page had no items when
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

**SPLIT ACROSS THREE SPEC PAGES (orchestrator, 2026-07-28; orders refreshed
2026-07-30).** T8 was written as one lump; `plan-spec.json` carries it as three
pairs at **273 `countability-axioms-and-cardinal-functions`**, **275
`metrization-theorems`**, and **277 `complete-metrizability-and-baire`**. The
three sections below say which page gets what.

---

### T8a. Countability Axioms and Cardinal Functions   (spec order 273)

**Frontier-4 propagation, 2026-07-30.** The machine scaffold has **35 A-page
items and 9 B-page items**. Its exact direct prerequisites are
`subspaces-products-and-quotients`, `ordinals-and-transfinite-recursion`,
`cardinal-arithmetic-and-cofinality`, `compactness`, and `separation-axioms`.
Compactness supplies the published Lindelöf definition, one-point
compactification, and compactness facts; separation axioms supplies the ordinal
examples' separation properties.

**DEFS.**
- **first countable**, **dense**, and **Lindelöf** are transferred from the
  published items `def-first-countable-top`, `def-dense-top`, and
  `def-compactness-variants`; none is re-minted.
- **second countable**: the topology has an at most countable basis, with
  “basis” in the published sense.
- **separable**: there is an at most countable dense subset.
- **countable chain condition (ccc)**: every pairwise-disjoint family of
  nonempty open sets is at most countable.
- Under AC, use the **raw, unnormalised** cardinal functions. Weight $w(X)$ and
  density $d(X)$ are raw minima; local character $\chi(x,X)$ is the minimum
  local-base size and $\chi(X)=\sup_x\chi(x,X)$; Lindelöf degree $L(X)$ is the
  raw minimum cover bound; cellularity $c(X)$ is the supremum of cardinalities
  of cellular families. In particular, an infinite discrete space of cardinal
  $\kappa$ has $\chi(X)=1$ and $w(X)=d(X)=L(X)=c(X)=\kappa$.

**WELL-DEFINEDNESS OBLIGATIONS.** The scaffold has a separate item for each of
$w,d,\chi,L,c$. The minimum definitions use nonempty families of cardinals and
the published well-ordering machinery; the two suprema use the published
cardinal-arithmetic machinery. Do not replace cellularity by a minimum or
silently normalise any invariant by $\aleph_0$. A separate lemma proves that a
countable local base can be chosen open and decreasing by taking running finite
intersections.

**THMS.**
- Second countability implies first countability in ZF, and implies separability
  and Lindelöfness under countable choice.
- Under countable choice, a metrizable space is second countable iff separable
  iff Lindelöf.
- Second countability is hereditary. Countable products of second-countable
  spaces, and countable products of first-countable spaces, have the
  corresponding property under countable choice.
- Every separable space is ccc. Under AC,
  $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$; subspaces do not increase
  weight or local character, and continuous images do not increase density or
  Lindelöf degree.
- Under AC, every metrizable space satisfies the convention-safe equality
  $d(X)=w(X)$. Do not assert that all five raw invariants coincide.
- Under AC, the uncountable $\Delta$-system lemma yields ccc for every Cantor
  cube, while cubes indexed above $2^{\aleph_0}$ are not separable.

**FS.**
- first countable $\Rightarrow$ second countable (uncountable discrete space);
- separable $\Rightarrow$ second countable (lower-limit line);
- separability is hereditary (lower-limit plane and its antidiagonal);
- Lindelöfness is hereditary (one-point compactification witness);
- under countable choice, Lindelöfness is productive (lower-limit line squared);
- under AC, ccc $\Rightarrow$ separable (a sufficiently large Cantor cube);
- under AC and countable choice, second countability is arbitrarily productive
  (a sufficiently large Cantor cube).

**B page (274).** Raw cardinal functions of the real line, an uncountable
discrete space, and the lower-limit line; the lower-limit plane's countability
profile; a one-point compactification of an uncountable discrete space;
$\omega_1$; a ccc nonseparable Cantor cube; and worked failures of hereditary
separability and productive Lindelöfness.

**Publication-time obligation.** The old order annotation in
`research/ts-d2-published-amendments.md` is stale; this page is now order 273.
When it publishes, replace the four corpus-relative denials in
`def-first-countable-top`, `def-dense-top`, `ex-sorgenfrey-line`, and
`topological-spaces-and-continuity-examples` by “not developed/defined at this
point in the reading order” and point to `def-second-countable-space` or
`def-separable-space` as appropriate. The earlier items use `forward_refs`,
never `deps`, and their owner-audit fields are cleared for re-audit in the
publishing commit.

**SCOPE DENIAL.** The Hewitt--Marczewski--Pondiczery theorem is not in the
machine scaffold. It remains deferred until a dependency-closed proof of its
full product-density statement is supplied; the $\Delta$-system argument above
proves only the ccc result actually planned here.

---

### T8b. Metrization Theorems   (spec order 275)

DEFS: sigma-locally-finite and sigma-discrete bases (the local finiteness notion
comes from 269, `partitions-of-unity-and-paracompactness`).

THMS: **URYSOHN METRIZATION** (regular + second countable + $T_1$ $\Rightarrow$
metrizable); **NAGATA–SMIRNOV** (metrizable $\iff$ regular $T_1$ with a
sigma-locally-finite basis); **BING** (the sigma-discrete form); **SMIRNOV**
(locally metrizable + paracompact + Hausdorff $\Rightarrow$ metrizable).

FS: every regular space is metrizable.

B (276): the Niemytzki plane (Tychonoff, not normal, not metrizable); the
Sorgenfrey line again, now as the standard failure of Urysohn's hypotheses.

---

### T8c. Complete Metrizability and Baire   (spec order 277)

DEFS: Baire space; comeager; completely metrizable; **Polish space**.

**Do NOT re-mint "completely metrizable".** It is already made precise in
`lem-complete-remetrisation` on `completeness-and-uniform-continuity`; this page
TRANSFERS it to the general topological setting. See the level-8 wiring
obligation at the head of this section.

THMS: the **BAIRE CATEGORY THEOREM** for complete metric spaces and for locally
compact Hausdorff spaces — note the R-native case is already published as
`thm-baire-category-r` on `cantor-set-baire-and-measure-zero`, and the choice
analysis there (`rem-baire-in-r-is-choice-free`) is the model for how the general
case must state ITS choice cost, which is **DC** and is genuinely needed;
**ALEXANDROFF'S THEOREM** (completely metrizable $\iff$ $G_\delta$ in a complete
metric space) — this is the item the published
`rem-complete-metrizability-is-the-topological-shadow` must name in its
`forward_refs`, the obligation recorded above; the irrationals are homeomorphic
to $\mathbb{N}^{\mathbb{N}}$; the Hilbert cube is universal for separable
metrizable spaces; the Cantor set surjects onto every compact metric space.

FS: every Baire space is completely metrizable; $\mathbb{Q}$ is a Baire space.

B (278): $\mathbb{Q}$; the irrationals; the Hilbert cube; genericity of
nowhere-differentiable functions.

---

## T9. Uniform Spaces   [greatest generality; needs F1]

**Frontier-4 propagation, 2026-07-30.** The machine scaffold has **54 A-page
items at spec order 279 and 8 B-page items at order 280**. Its exact direct
prerequisites are `nets-and-filters`, `hausdorff-via-the-diagonal`, and
`monoids-groups-and-subgroups`, matching its convergence, separation, and
group-theoretic proof surface.

DEFS: uniformity by entourages; induced topology and separatedness; uniform
continuity; uniformity by uniform covers; gauge of pseudometrics; Cauchy filter;
complete uniform space; totally bounded uniform space; uniform embedding and
uniform isomorphism; Hausdorff completion with a possibly noninjective canonical
map before separation; countably based uniformity; uniformizable and
separated-uniformizable topology; topological group; its left, right, upper and
Roelcke uniformities; and pointwise and uniform-convergence uniformities on a
function set. Use “totally bounded” throughout; do not introduce the
convention-dependent synonym “precompact”.

THMS: entourage and uniform-cover formulations are equivalent in ZF. Under
dependent choice, normal entourage sequences produce pseudometrics and show
that gauges are equivalent to the other formulations. A uniformity induces a
topology, is separated exactly when that topology is Hausdorff, and uniform
continuity implies continuity.

Every uniform space has a complete Hausdorff reflection with dense canonical
image. The canonical map is a uniform embedding exactly when the original
uniformity is separated; uniformly continuous maps into complete Hausdorff
targets extend uniquely, and this gives uniqueness of completion up to the
appropriate uniform isomorphism. Do not state that an arbitrary nonseparated
uniform space embeds in its Hausdorff completion.

Compact uniform spaces are complete and totally bounded. Assuming the
ultrafilter lemma, complete and totally bounded uniform spaces are compact, so
compactness is equivalent to completeness plus total boundedness under that
hypothesis. Compact Hausdorff spaces carry exactly one compatible uniformity,
and continuous maps from them to uniform spaces are uniformly continuous.

A countably based uniformity is generated by one pseudometric and is metrizable
exactly when separated. Uniformizable spaces are regular in ZF. Under dependent
choice, uniformizability is equivalent to complete regularity, and separated
uniformizability is equivalent to Tychonoffness under the library's convention
that complete regularity itself does not include $T_1$. For a topological group,
left and right uniformities induce the given topology and inversion interchanges
them; the upper and Roelcke uniformities are named separately rather than
conflated as a “two-sided” uniformity. Pointwise and uniform-convergence
uniformities agree on finite domains, with uniform convergence finer in general.

B: the usual metric uniformity on $\mathbb{R}$; a homeomorphism
$\mathbb{R}\to(-1,1)$ that is not a uniform isomorphism; the false claim that a
compatible uniformity is unique; coincidence of the four uniformities on the
additive group $\mathbb{R}$; pointwise but not uniform convergence on a
countable domain; uniqueness on $[0,1]$; the nonuniformizable $K$-topology; and
under the ultrafilter lemma an uncountable Cantor cube that is compact Hausdorff
and uniformizable but not first countable.

---

## T10. Function Spaces and Convergence Topologies

**frontier-1 audit, 2026-07-28 (batch 1). T10 IS THREE SPEC PAGES**: **283
`function-space-topologies`**, **285 `ascoli-arzela`**, **287
`stone-weierstrass-general`** (orders verified against the spec, 2026-07-28).
Page 283 owns the topologies, the comparison, the
uniform limit theorem, completeness, evaluation, the exponential law and Dini;
Ascoli-Arzela is 285's and Stone-Weierstrass is 287's. Equicontinuity is DEFINED at
283 (`def-equicontinuity`) so that 285 has it; no Ascoli statement appears at 283.

**THE DOMAIN IS A METRIC SPACE THROUGHOUT, and this is forced, not stylistic.**
The compact-open topology quantifies over the compact subsets of $X$, and the only
compactness this library has is `def-metric-compactness` (order 120), for metric
spaces. General topological compactness is page 255, unbuilt, and 255 < 283, so it
cannot be back-filled either. Consequently 283 scaffolds
`def-locally-compact-metric-space` ("every point has a compact neighbourhood") with
a DICTIONARY REMARK in the style of the published `def-metrizable-space`, recording
that this is the metric special case of the general topological notion. **Standing
obligation on page 255 `compactness`: when it defines local compactness in
general, it must record the agreement with `def-locally-compact-metric-space`
explicitly.** The target $Y$ is an arbitrary topological space wherever open sets
suffice (pointwise topology, compact-open topology, the exponential law) and is
metric exactly where a distance is used (uniform metric, compact convergence,
uniform limit theorem, completeness, Dini).

**The exponential law is reached, in the form the title promises.** With $X$ a
locally compact metric space and $Z$, $Y$ arbitrary topological spaces,
transposition is a bijection between $C(X \times Z, Y)$ and $C(Z, C(X,Y))$ under
the compact-open topology: the forward half (`thm-exponential-correspondence-is-continuous`)
needs no local compactness and runs on a newly minted
`lem-tube-lemma-for-a-compact-metric-factor`; the converse half runs on
`thm-evaluation-is-continuous-on-a-locally-compact-metric-domain`. The HOMEOMORPHISM
form of the law is NOT claimed and the Statement must not claim it.

**Two published items are NOT usable and their content is re-minted.**
`lem-sup-metric-is-a-metric` (order 116) is the supremum metric on BOUNDED
REAL-VALUED functions only, so it cannot carry $C(X,Y)$ for a metric target;
283 mints `lem-uniform-metric-on-a-function-space` for
$\bar\rho(f,g) = \sup_x \min\{d(f(x),g(x)), 1\}$, which needs no boundedness
hypothesis and cites the published `lem-bounded-remetrisation` for $\min\{d,1\}$
being a uniformly equivalent metric. And `ex-bounded-functions-with-sup-metric-are-complete`
(order 119) is a B-PAGE item, leaf-locked, so completeness of the function
space is proved outright at 283 as `thm-function-space-is-complete-for-a-complete-target`.
The B page then records that on $C([0,1],\mathbb{R})$ the two metrics agree
topologically, which is the anti-two-notions obligation for this page.

**Dropped from 283, each with what would license it.** *Gelfand duality*: needs
Banach algebras, out of scope; it stays a statement for a functional-analysis track.
*"the compact-open topology is metrizable iff $X$ is hemicompact"*: needs countable
exhaustion machinery from 273; only the negative `fs-` is kept. *the general
(non-metric) form of "compact-open = compact convergence"*: needs page 255.
*Dini in its net form*: needs 259 `nets-and-filters`, unbuilt; the sequence form
is kept.

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

---

## Scope denials

Added by Alpha-F1, 2026-07-28, in the style of the "Scope denials" section of
`research/plan-topology-set-theory-track.md`, because this file had none and the
`frontier-1` drops needed a home that is a record rather than a paragraph inside
an audit block. **A dropped result is deferred, not deleted**, and every entry
names what would license it. Entries 1–7 are page 261 `separation-axioms`,
entries 8–12 are page 283 `function-space-topologies`; both were dropped at
scaffold time by Beta-F1-1 and adjudicated by the orchestrator (see
`research/frontier-1-RESUME.md` §"Step 3 — findings adjudicated (batch 1)" and
`research/frontier-1-batch-1.notes.md` §1.4, §1.5). **Amended at `frontier-2`
(Alpha-F2, 2026-07-29):** entries 1–3 were RESOLVED and rewritten, not appended
to; entries 13–20 are the `frontier-2` drops from pages 253 `connectedness` and
255 `compactness` (`research/frontier-2-batch-1.notes.md` §1.8); entries 21–23
are the drops from pages 263 and 267 (`research/frontier-2-batch-2.notes.md`
§1.3, renumbered from that file's 13–15, which collided with batch 1's
numbering).

1. **compact Hausdorff $\Rightarrow$ normal. RESOLVED at `frontier-2`, no longer
   denied.** The obstruction recorded here was that general topological
   compactness did not exist; page 255 `compactness` is built in `frontier-2` and
   supplies it. The result is homed on **263 `hausdorff-via-the-diagonal`** as
   `thm-a-compact-hausdorff-space-is-regular-and-normal`, not on 255, because at
   255 normality is not yet defined and `fwdcheck` rejects such a statement as
   `forward-on-spine`. **263 rather than 265 or 267**, because 265
   `hereditary-and-productive-separation` needs it — the standard proof that
   normality is not hereditary runs through a compact Hausdorff space with a
   non-normal subspace — and 265 declares 263 and 255 and nothing above them.
   The plan defect this entry recorded (T5's THMS list homing it on 255) is fixed
   by the T5 edit of `research/frontier-2-batch-2.notes.md` §1.2.
2. **locally compact Hausdorff $\Rightarrow$ completely regular. RESOLVED at
   `frontier-2`, no longer denied.** Homed on **267 `urysohn-lemma-and-tietze`**
   as `thm-a-locally-compact-hausdorff-space-is-completely-regular`, with its
   compactness half split onto 263 as `lem-a-locally-compact-hausdorff-space-has-
   a-base-of-open-sets-with-compact-closure`. The proof does NOT go through
   "complete regularity is hereditary", which is 265's and would be a forward
   reference from 267; see `research/frontier-2-batch-2.notes.md` §1.1(2).
3. **normal + T1 $\Rightarrow$ completely regular. RESOLVED at `frontier-2`, no
   longer denied.** This is Urysohn's lemma, and it is proved at 267 as
   `thm-urysohn-lemma`, with the chain closed by
   `cor-urysohns-lemma-closes-the-separation-chain`. **It costs a choice
   principle: dependent choice.** The published
   `rem-urysohn-lemma-not-a-zf-theorem` records that the statement is not a
   theorem of ZF (Laeuchli) and not a theorem of ZF + countable choice
   (Tachtsis), and that DC suffices. (The other arrow Beta-F1-1 proposed
   dropping, perfectly normal $\Rightarrow$ completely normal, was never denied —
   it is proved at 261; see the T7 audit block.)
4. **The Sorgenfrey line and plane as witnesses on 261/262.** The published
   `ex-sorgenfrey-line` (order 250) and `ex-sorgenfrey-plane` /
   `cex-antidiagonal-of-the-sorgenfrey-plane` (order 252) are B-page items and
   LEAF-LOCKED, so no other page may cite them. Re-minting the spaces is cheap,
   but the payoff — the Sorgenfrey plane is not normal — needs Jones' lemma
   (`cardinal-arithmetic-and-cofinality`, order 247, unbuilt) or a delicate
   Baire-category argument, and the published Baire material
   (`thm-baire-category-r`, order 133) is about $\mathbb{R}$ specifically.
   Licensed by: page 247, or a general Baire page.
5. **The Niemytzki (Moore) plane.** Same obstruction as 4, and its complete
   regularity would additionally need 265. Licensed by: pages 247 and 265.
6. **The Tychonoff corkscrew** (a T3 space that is not T3.5). Several pages of
   construction on its own. Licensed by: a dedicated page.
7. **`fs-every-regular-space-is-normal`.** After 4, 5 and 6 no regular
   non-normal witness is reachable at 261: the deleted Tychonoff plank IS
   regular, but proving that needs "regular is hereditary and productive", which
   is page 265's. Licensed by: page 265. The `fs-` is dropped, not weakened —
   restoring it at 261 would take the page over the 30-item ceiling to duplicate
   265.
8. **Gelfand duality for compact Hausdorff $X$.** Needs Banach algebras; out of
   scope under the self-contained-scope rule. Licensed by: a functional-analysis
   track. T10's THMS list has it as "(statement)"; nothing on 283 states it.
9. **"the compact-open topology is metrizable iff $X$ is hemicompact".** Needs
   the countable-exhaustion machinery of page 273. Only the negative
   `fs-the-compact-open-topology-is-always-metrizable` is kept, with a discrete
   witness. Licensed by: page 273.
10. **The general (non-metric) form of "compact-open $=$ compact convergence".**
    Needs general topological compactness, page 255. The metric-domain form IS
    proved at 283. Licensed by: page 255.
11. **Dini's theorem in its net form.** Needs page 259 `nets-and-filters`,
    unbuilt. The sequence form IS proved at 283. Licensed by: page 259.
12. **The HOMEOMORPHISM form of the exponential law.** Page 283 proves the
    natural BIJECTION $C(X \times Z, Y) \leftrightarrow C(Z, C(X,Y))$ for $X$ a
    locally compact metric space, which is what most texts call the exponential
    law; the homeomorphism strengthening needs more than this build has. Binding
    consequence: `thm-the-exponential-law` must say bijection (or
    correspondence) in its own title and Statement, and the page summary must not
    describe it as a homeomorphism — a title asserting more than the proof gives
    is the fatal class reported at the end of `LEVELS.md` step 10. Licensed by: page 255 plus
    the product/quotient machinery a homeomorphism proof needs.
13. **Paracompactness, locally finite refinements and partitions of unity at
    page 255.** Every theorem about them on T5's list needs normality, defined at
    261. `partitions-of-unity-and-paracompactness` is spec order 269 and already
    requires `compactness`. Licensed by: page 269, which owns the whole topic.
14. **"Second countable implies Lindelof" at page 255.** Second countability is
    `countability-axioms-and-cardinal-functions`, spec order 273, above 255.
    Licensed by: page 273.
15. **The Baire category theorem for locally compact Hausdorff spaces —
    RESOLVED, not denied (owner, 2026-07-29).** It was dropped from 255 for page
    size rather than for reachability, and the owner reversed that: 255 carries
    `thm-baire-category-locally-compact-hausdorff`, stated under dependent
    choice as a sufficient hypothesis. This entry is kept as the record of a
    denial that was lifted, not as a denial. `complete-metrizability-and-baire`
    (277) still owns the complete-metric case and must not re-mint this one.
16. **The ultrafilter proof of Tychonoff, and "Tychonoff for Hausdorff spaces iff
    the ultrafilter lemma".** The published `filters-and-ultrafilters` (order 12)
    has no notion of a filter converging in a topological space. Licensed by:
    page 259 `nets-and-filters`, which already requires `compactness`.
17. **The Stone-Cech compactification and its universal property.** T5 lists it
    "(statement)"; nothing on 255 states it. Licensed by: page 271
    `tychonoff-embedding-and-stone-cech`.
18. **Arcwise connectedness, continua, the Warsaw circle, the
    Knaster-Kuratowski fan, and simple connectedness, at page 253.** A continuum
    is compact connected Hausdorff and compactness is 255; the fan's payoff needs
    273; simple connectedness is 289's. Licensed by: those pages.
19. **Path-connectedness of the long ray.** Proved nowhere in this build: it
    needs an order isomorphism $[0,x] \cong [0,1]$ for every $x$, a transfinite
    construction of its own. 253 proves the long ray is a connected linear
    continuum and stops there. Licensed by: a dedicated item.
20. **The topologist's sine curve, under that name.** This library has no
    $\sin$: `sine-cosine-and-the-definition-of-pi` is spec order 179 and is
    unbuilt. 253 proves every property it was wanted for on a piecewise-linear
    substitute, `lem-the-oscillating-zigzag-curve`. Licensed by: building page
    179, after which the classical curve may be added as a second witness.
21. **Urysohn's lemma in regular spaces, as a false statement (T7's FS list).**
    Refuting it needs a regular space in which two disjoint closed sets are not
    separated by a continuous function, and the nearest witness is a regular
    space that is not normal. Entry 7 above already records that no such witness
    is reachable from 261's declared prerequisites, and 267 inherits the same
    obstruction: the witnesses need either a Jones-lemma item resting on cardinal
    arithmetic (page 247 is built at `frontier-2` but scaffolds no such item, and
    267 does not declare 247) or the hereditary and productive behaviour of
    regularity (page 265, unbuilt and below 267). DROPPED from 267 with no
    substitute. Licensed by: a Jones-lemma item on a page above 247, or page 265.
22. **"The Urysohn function of $A$ and $B$ vanishes exactly on $A$", as a false
    statement.** Refuting it needs a normal space with a closed set that is not a
    zero set, that is a normal space that is not perfectly normal. The standard
    witness is the ordinal space $\omega_1 + 1$ with the closed singleton
    $\{\omega_1\}$, and it needs the compactness of $\omega_1 + 1$ proved on an A
    page: page 256 is a B page and its items are leaf-locked. DROPPED from 267 —
    the drop was decided against a scaffold in which the homing of $\omega_1+1$'s
    compactness was not yet known. Licensed by: the compactness of $\omega_1 + 1$
    homed on page 255 rather than page 256 — **a licence `frontier-2` itself
    meets**: batch 1 homed `thm-ordinal-spaces-and-compactness` (every successor
    ordinal is compact in its order topology) on the A page 255, so the item is
    recoverable at 267 or above in a later build; the `frontier-2` scaffold is
    frozen post-splice and does not carry it. Note that 267 DOES prove the
    positive characterisation
    `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`,
    so it is the witness that is missing and not the theory.
23. **"Hausdorff iff every net has at most one limit", and the filter forms of
    the separation axioms.** Nets and filters on a topological space are page 259
    `nets-and-filters`, which is unbuilt and sits ABOVE 263. Page 263 proves the
    SEQUENCE form instead (`lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`),
    which is strictly weaker and whose converse the published
    `fs-unique-sequential-limits-imply-hausdorff` already refutes. Licensed by:
    page 259.

**Not a denial, recorded so it is not rediscovered:** general topological
compactness is minted at page 255, and page 283's
`def-locally-compact-metric-space` is a deliberate metric special case with a
dictionary Remark. **Page 255 carries a standing obligation** to record the
agreement explicitly when it defines local compactness in general. **Status,
`frontier-2` (2026-07-29): 255 is scaffolded with `def-locally-compact-space`,
and the agreement is discharged as a staged amendment to the published
`def-locally-compact-metric-space` (`research/frontier-2-batch-1.notes.md` §3.7),
to land in the same commit that publishes 255 — not before, and not as a forward
reference from 255.**
