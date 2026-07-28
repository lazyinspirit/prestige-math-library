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
> not 104, and the T8a/T8b/T8c headers "spec order 213/215/217" are really
> **273/275/277**.

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

**Dropped from 261/262, each with what would license it.** *compact Hausdorff =>
normal*: general topological compactness does not exist in this library — the only
compactness on disk is metric (`def-metric-compactness`, order 120) and the general
notion belongs to page 255 `compactness`, which is unbuilt AND sits below 261, so
it cannot be back-filled. *locally compact Hausdorff => completely regular*: same
reason, plus Urysohn. *the Sorgenfrey line and plane*: the published items
`ex-sorgenfrey-line` (order 250, B page) and `ex-sorgenfrey-plane` /
`cex-antidiagonal-of-the-sorgenfrey-plane` (order 252, B page) are LEAF-LOCKED and
may not be cited from another page; rebuilding them is cheap but the payoff item —
the Sorgenfrey plane is not normal — needs either Jones' lemma (cardinal
arithmetic, page 247, unbuilt) or a delicate Baire-category argument, and the
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

**SPLIT ACROSS THREE SPEC PAGES (orchestrator, 2026-07-28).** T8 was written as
one lump; `plan-spec.json` has carried it as three pairs since the topology
track was spliced, and after the TS-D2 renumber they sit at **213
`countability-axioms-and-cardinal-functions`**, **215 `metrization-theorems`**
and **217 `complete-metrizability-and-baire`**. The three sections below say
which page gets what. Nothing was added to or removed from T8's content by the
split except the countability material of T8a, which the owner asked to be
specified rather than listed (2026-07-28).

---

### T8a. Countability Axioms and Cardinal Functions   (spec order 213)

`requires`: `subspaces-products-and-quotients`, `ordinals-and-transfinite-recursion`,
`cardinal-arithmetic-and-cofinality` (cardinal functions take cardinal values).

**DEFS.**
- **neighbourhood basis at a point** $x$: a family $\mathcal{B}_x$ of
  neighbourhoods of $x$ such that every neighbourhood of $x$ contains a member.
- **first countable**: every point has an at most countable neighbourhood basis.
  The item `def-first-countable-top` is **already published** at order 189 and is
  NOT re-minted here; this page transfers it and must cite it. See the staged
  amendment in `research/ts-d2-published-amendments.md`.
- **second countable**: the topology has an at most countable basis. Says "basis"
  in the sense of the published `thm-basis-criterion`, not "subbasis".
- **separable**: there is an at most countable dense subset. `def-dense-top` is
  published (order 189) and deliberately declines to define this; that Remark is
  staged for amendment.
- **Lindelof**: every open cover has an at most countable subcover.
- **countable chain condition (ccc)**: every family of pairwise disjoint nonempty
  open sets is at most countable.
- **cardinal functions**: weight $w(X)$, density $d(X)$, character $\chi(X)$,
  Lindelof number $L(X)$, cellularity $c(X)$.

**WELL-DEFINEDNESS OBLIGATIONS, each a numbered item** (the owner's rule: a
definition is introduced only where its well-definedness can be justified):

1. **Every cardinal function is a MINIMUM over a nonempty set of cardinals**, so
   each of the five needs its own two-line item: the set of cardinals in question
   is nonempty (the whole topology is a basis for itself; $X$ is dense in itself;
   …), and every nonempty set of cardinals has a least element. The second half
   is ST-2's, at order 187 — **which is exactly why 213 requires 187**. Without
   it the definite article in "the weight of $X$" is unlicensed.
2. **The decreasing-neighbourhood-basis lemma**, its own numbered item: if $x$
   has an at most countable neighbourhood basis then it has a DECREASING one,
   $B_0 \supseteq B_1 \supseteq \cdots$, by replacing $B_n$ with
   $B_0 \cap \cdots \cap B_n$ (a finite intersection, so still a neighbourhood).
   Every sequence argument on this page and on 215/217 silently wants this; it is
   stated once here and cited, never re-derived.

**THMS.**
- second countable $\Rightarrow$ first countable (choice-free: the basic opens
  containing $x$ ARE a neighbourhood basis at $x$, no selection).
- second countable $\Rightarrow$ separable. **Costs AC$_\omega$**: one point is
  chosen from each nonempty basic open set. Its own item, and the choice cost is
  stated in the Statement, per the house practice on the linear-algebra pages.
- second countable $\Rightarrow$ Lindelof. **Also costs AC$_\omega$** (for each
  basic open contained in some cover member, choose one such member). Separate
  item, separate statement of the cost.
- first countable $\Rightarrow$ the sequential characterisations of closure and of
  continuity become equivalences. The published `def-first-countable-top` page
  already proves both converses at order 189; the item here is a **dictionary
  item** pointing at them, not a second proof.
- **in a metric space, separable $\iff$ second countable $\iff$ Lindelof** — the
  page's main theorem, a three-way cycle. Uses AC$_\omega$ in the arcs that
  select; the arc "second countable $\Rightarrow$ separable" reuses the theorem
  above rather than redoing it.
- second countability is **hereditary** and **countably productive**; first
  countability likewise. `cor-metrizability-and-first-countability-are-hereditary`
  already exists — check before minting, it may discharge half of this.
- separable $\Rightarrow$ ccc (choice-free); Lindelof + metrizable $\Rightarrow$
  second countable.
- the inequalities relating the cardinal functions: $d(X) \le w(X)$,
  $\chi(X) \le w(X)$, $c(X) \le d(X)$, $L(X) \le w(X)$.

**FS.**
- separable $\Rightarrow$ second countable (Sorgenfrey line).
- separability is hereditary (Sorgenfrey plane).
- Lindelof is hereditary (Sorgenfrey plane), and Lindelof is productive
  (Sorgenfrey line squared).
- first countable $\Rightarrow$ second countable (uncountable discrete space).
- ccc $\Rightarrow$ separable.

**B page (214).** The Sorgenfrey line, computing all five cardinal functions; the
Sorgenfrey plane; an uncountable discrete space; $[0, \omega_1)$ with the order
topology and the long line, **both of which come from ST-1 at order 185**; the
Hilbert cube; $\mathbb{R}^\kappa$ for large $\kappa$.

**SCOPE DENIAL.** The Hewitt–Marczewski–Pondiczery theorem (a product of at most
$2^\kappa$ spaces of density $\le \kappa$ has density $\le \kappa$) is **DROPPED**:
it needs cardinal exponentiation arithmetic beyond what ST-2 develops. Recorded
here so the omission is recoverable; what would license it is an ST-2 extension.

---

### T8b. Metrization Theorems   (spec order 215)

DEFS: sigma-locally-finite and sigma-discrete bases (the local finiteness notion
comes from 209, `partitions-of-unity-and-paracompactness`).

THMS: **URYSOHN METRIZATION** (regular + second countable + $T_1$ $\Rightarrow$
metrizable); **NAGATA–SMIRNOV** (metrizable $\iff$ regular $T_1$ with a
sigma-locally-finite basis); **BING** (the sigma-discrete form); **SMIRNOV**
(locally metrizable + paracompact + Hausdorff $\Rightarrow$ metrizable).

FS: every regular space is metrizable.

B (216): the Niemytzki plane (Tychonoff, not normal, not metrizable); the
Sorgenfrey line again, now as the standard failure of Urysohn's hypotheses.

---

### T8c. Complete Metrizability and Baire   (spec order 217)

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

B (218): $\mathbb{Q}$; the irrationals; the Hilbert cube; genericity of
nowhere-differentiable functions.

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
`research/frontier-1-batch-1.notes.md` §1.4, §1.5).

1. **compact Hausdorff $\Rightarrow$ normal.** General topological compactness
   does not exist in this library: the only compactness on disk is metric
   (`def-metric-compactness`, order 120), and the general notion belongs to page
   255 `compactness`, which is unbuilt AND sits BELOW 261, so it cannot be
   back-filled later. Licensed by: page 255 — but note that the item's only legal
   home is then a page ABOVE both 255 and 261, most naturally 265 or 267, since
   at 255 normality is not yet defined. Recorded at step 0 of `frontier-1` as a
   plan defect: T5's THMS list currently homes it on 255, where it is a forward
   reference on the spine and `fwdcheck` rejects it.
2. **locally compact Hausdorff $\Rightarrow$ completely regular.** Same
   compactness obstruction as 1, plus Urysohn's lemma. Licensed by: pages 255 and
   267.
3. **normal + T1 $\Rightarrow$ completely regular**, the one arrow of the
   implication chain page 261 cannot reach. It IS Urysohn's lemma. Licensed by:
   page 267 `urysohn-lemma-and-tietze`. (The other arrow Beta-F1-1 proposed
   dropping, perfectly normal $\Rightarrow$ completely normal, is NOT denied — it
   is proved at 261; see the T7 audit block.)
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
    is the fatal class `LEVELS.md` step 9 exists for. Licensed by: page 255 plus
    the product/quotient machinery a homeomorphism proof needs.

**Not a denial, recorded so it is not rediscovered:** general topological
compactness is minted at page 255, and page 283's
`def-locally-compact-metric-space` is a deliberate metric special case with a
dictionary Remark. **Page 255 carries a standing obligation** to record the
agreement explicitly when it defines local compactness in general.
