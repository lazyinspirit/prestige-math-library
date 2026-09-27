---
page: the-riemann-integral
title: "The Riemann Integral: Definition and Integrability"
status: published
items: [def-partition-and-refinement, def-darboux-sums,
        lem-refinement-inequalities, def-darboux-integral,
        lem-integral-elementary-bounds, thm-riemann-criterion,
        def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann,
        thm-continuous-implies-integrable, thm-monotone-implies-integrable,
        thm-finitely-many-discontinuities-integrable, thm-lebesgue-criterion,
        cor-countably-many-discontinuities-integrable,
        rem-riemann-integral-choice-ledger]
examples: [fs-bounded-implies-riemann-integrable,
           fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set,
           fs-nonnegative-integrable-with-zero-integral-vanishes,
           fs-pointwise-limit-of-riemann-integrable-is-integrable]
---

**Objective.** Define the integral of a bounded real function over a closed
bounded interval, and settle exactly which functions have one. The definition is
Darboux's, by suprema and infima over partitions; Riemann's own definition, by
tagged partitions of small mesh, is shown to define the same class with the same
value. The page then answers the question it exists to answer: a bounded $f$ on
$[a,b]$ is integrable **if and only if** its set of discontinuities has measure
zero.

**The machinery, in order.** [[def-partition-and-refinement]] fixes what a
partition is — a strictly increasing finite list from $a$ to $b$, indexed from
$0$ — together with its subintervals, their lengths, its mesh, refinement, and
the common refinement of two partitions; it discharges its own well-definedness
obligations, including that a partition is determined by its point set, so that
the common refinement is unambiguous. [[def-darboux-sums]] attaches to a bounded
$f$ and a partition the two sums $L(f,P)$ and $U(f,P)$, and records that the gap
$M_i - m_i$ on a subinterval is exactly the oscillation of $f$ there
([[def-oscillation]]) — the hinge on which the last theorem of the page turns.
[[lem-refinement-inequalities]] proves that refining raises the lower sum and
lowers the upper one, that every lower sum is at most every upper sum, and, in a
quantitative clause used only by [[thm-darboux-equals-riemann]], that the two
changes are at most $2M(n'-n)\|P\|$. [[def-darboux-integral]] can then take
$\sup_P L(f,P)$ and $\inf_P U(f,P)$ and call $f$ integrable when they agree.

**The two criteria.** [[lem-integral-elementary-bounds]] locates both integrals
between $m(b-a)$ and $M(b-a)$ and computes the integral of a constant.
[[thm-riemann-criterion]] replaces the two extrema by the exhibition of one
partition per $\varepsilon$ with $U(f,P) - L(f,P) < \varepsilon$, and every
integrability proof below runs through it.
[[def-tagged-partition-and-riemann-sum]] introduces Riemann sums, and
[[thm-darboux-equals-riemann]] proves the two definitions equivalent; the
quantifier there is over **all** tagged partitions of small mesh, and the
companion page shows it cannot be weakened to one sequence.

**Which functions are integrable.** [[thm-continuous-implies-integrable]] uses
Heine-Cantor: uniform continuity supplies one $\delta$ for the whole interval, so
a uniform partition works. [[thm-monotone-implies-integrable]] needs no
continuity at all: on a uniform partition the gaps telescope to
$|f(b)-f(a)|(b-a)/N$ exactly. [[thm-finitely-many-discontinuities-integrable]]
is the first result whose hypothesis is stated in terms of the discontinuity set,
and its proof is the elementary rehearsal of the general one: the bad points are buried in short
intervals and Heine-Cantor handles what is left.
[[thm-lebesgue-criterion]] is the theorem of the page. Its forward half
exhibits the discontinuity set as a countable union of superlevel sets of the
oscillation, each of content zero by Riemann's criterion; its converse builds a
partition by Cousin's supremum construction, from the completeness of
$\mathbb{R}$ alone. [[cor-countably-many-discontinuities-integrable]] then
records the countable case, which costs no choice.

**Choice.** Every item on this page is a theorem of ZF except where countable
choice is inherited, and it is inherited from exactly two places: the single use
inside Heine-Cantor, which reaches
[[thm-continuous-implies-integrable]] and
[[thm-finitely-many-discontinuities-integrable]], and the single use inside the
countable union of null sets, which reaches the forward half of
[[thm-lebesgue-criterion]] and nothing else. [[rem-riemann-integral-choice-ledger]] tabulates the page
item by item and explains the four entries that are easy to get wrong — in
particular that selecting a tag in each of finitely many subintervals is a
theorem of ZF, not a choice principle.

**Four false statements.** [[fs-bounded-implies-riemann-integrable]] is the
Dirichlet function; [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]]
replaces measure by category and is refuted by the Smith-Volterra-Cantor set;
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] drops continuity from
a true statement and is refuted by Thomae's function; and
[[fs-pointwise-limit-of-riemann-integrable-is-integrable]] fails because
discontinuity sets do not pass to pointwise limits.

**What is not here.** Linearity, additivity over subintervals, the mean value
theorem for integrals and the fundamental theorem of calculus are not on this
page; nor is any notion of outer measure, measurable set or Lebesgue integral.
"Measure zero" means throughout the interval-cover condition of
[[def-measure-zero-and-content-zero]], and every statement is made in that
vocabulary.
