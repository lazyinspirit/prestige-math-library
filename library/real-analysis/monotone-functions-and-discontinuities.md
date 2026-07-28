---
page: monotone-functions-and-discontinuities
title: "Monotone Functions, Discontinuities, and Continuity Sets"
status: published
items: [def-monotone-function, thm-monotone-one-sided-limits-exist,
        def-classification-of-discontinuities,
        thm-monotone-discontinuities-are-jumps, thm-froda,
        thm-monotone-with-prescribed-discontinuity-set,
        thm-continuous-injection-on-an-interval-is-strictly-monotone,
        thm-continuous-inverse, cor-cantor-function-is-continuous,
        rem-cantor-function-increases-only-on-a-null-set,
        def-oscillation, thm-continuity-iff-oscillation-zero,
        lem-oscillation-superlevel-sets-are-closed,
        thm-discontinuity-set-is-f-sigma,
        def-dirichlet-and-thomae-functions,
        thm-dirichlet-and-thomae-continuity-sets,
        thm-continuity-set-realisation,
        cor-no-function-is-continuous-exactly-on-q,
        def-intermediate-value-property, def-semicontinuity,
        thm-semicontinuity-level-set-characterisation, thm-semicontinuous-evt,
        lem-baire-category-in-a-closed-interval, def-baire-class-one,
        thm-baire-one-continuity-points, def-additive-function,
        lem-additive-is-q-linear,
        lem-additive-bounded-above-on-an-interval-is-linear,
        thm-cauchy-functional-equation-regularity, lem-hamel-basis-exists]
examples: [fs-intermediate-value-property-implies-continuity,
           fs-additive-implies-linear]
---

**Objective.** A function of a real variable can fail to be continuous in only
so many ways, and this page measures the failure. It asks three questions and
answers each of them completely. Which sets are the discontinuity sets of a
**monotone** function? Which sets are the continuity sets of an **arbitrary**
function? And which functions satisfying Cauchy's equation
$f(x+y) = f(x) + f(y)$ are the obvious ones? The answers are: exactly the at
most countable sets; exactly the $G_\delta$ sets; and exactly those with any one
of six very weak regularity properties.

**Monotone functions.** [[def-monotone-function]] fixes the vocabulary —
nondecreasing, increasing, nonincreasing, decreasing, monotone, strictly
monotone — in the same convention [[def-monotone-sequence]] uses for sequences,
and records the dictionary between the two. The first theorem,
[[thm-monotone-one-sided-limits-exist]], is the one everything else on this half
of the page rests on: a monotone function on an interval has **every** one-sided
limit that is well posed, with no hypothesis of any kind, the left limit being a
supremum and the right limit an infimum. [[def-classification-of-discontinuities]]
then sorts discontinuities into removable, jump and essential, equivalently
Rudin's first and second kind, and
[[thm-monotone-discontinuities-are-jumps]] shows that a monotone function has
none of the second kind: at an interior point it is discontinuous exactly when
the two one-sided limits differ, and then it jumps.

**Froda's theorem and its converse.** [[thm-froda]] counts those jumps: the
discontinuity set of a monotone function on an interval is at most countable,
because the open intervals it opens between its one-sided limits are pairwise
disjoint and each swallows a rational. The proof uses one fixed enumeration of
$\mathbb{Q}$ and least indices, so it spends no choice principle.
[[thm-monotone-with-prescribed-discontinuity-set]] is the exact converse: for
**every** at most countable $E \subseteq \mathbb{R}$ there is a bounded
nondecreasing function on $\mathbb{R}$ discontinuous exactly on $E$, with every
discontinuity a jump. Together the two settle the first question with no gap.

**Continuous injections and inverses.**
[[thm-continuous-injection-on-an-interval-is-strictly-monotone]] proves that a
continuous injection on an interval cannot fold: the middle of any three points
carries the middle value, and strict monotonicity follows.
[[thm-continuous-inverse]] then delivers the continuous inverse theorem — the
inverse of a continuous injection on an interval is continuous and monotone in
the same sense — with no epsilon-delta argument, by reading it off
[[lem-monotone-with-interval-image-is-continuous]]. The same lemma gives
[[cor-cantor-function-is-continuous]], which supplies the continuity that
[[thm-cantor-function-properties]] deliberately left unclaimed, and
[[rem-cantor-function-increases-only-on-a-null-set]] records what that continuity
sits alongside: the function climbs from $0$ to $1$ while being locally constant
off a set of measure zero.

**Oscillation, and the continuity set.** [[def-oscillation]] introduces
$\omega_f$, valued in the extended reals so that no boundedness hypothesis is
needed, and [[thm-continuity-iff-oscillation-zero]] converts continuity at a
point into the vanishing of a single number there. That is what makes the
continuity set accessible: [[lem-oscillation-superlevel-sets-are-closed]] shows
each set $\{\omega_f \ge \varepsilon\}$ is relatively closed, and
[[thm-discontinuity-set-is-f-sigma]] assembles them, first into the pointwise
exhaustion of the discontinuity set by the superlevel sets at the thresholds
$1, 1/2, 1/3, \dots$, and then into the statement that the discontinuity set is
$F_\sigma$ and the continuity set $G_\delta$. Both halves are cited downstream,
and the exhaustion is stated as a claim in its own right for that reason.
[[thm-continuity-set-realisation]] proves the converse, so the continuity sets
are exactly the $G_\delta$ sets, and
[[cor-no-function-is-continuous-exactly-on-q]] spends that on the sharpest
consequence: **no** function is continuous at every rational and discontinuous at
every irrational, because $\mathbb{Q}$ is not $G_\delta$
([[cor-q-is-meager-and-not-g-delta]]).

**Dirichlet and Thomae.** [[def-dirichlet-and-thomae-functions]] defines the
indicator of the rationals and Thomae's function, the latter through the least
denominator, which is a least element of a set of naturals and therefore
canonical. [[thm-dirichlet-and-thomae-continuity-sets]] proves that the first is
continuous nowhere, that the second is continuous exactly at the irrationals,
and that its oscillation at a point equals its value there. Thomae's function is
the witness that the arrangement forbidden by
[[cor-no-function-is-continuous-exactly-on-q]] is possible the other way round.
Both functions are defined here rather than on the companion page because later
pages need them, and an examples page is a leaf of this library; the Dirichlet
clause deliberately restates, across that boundary, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.

**The intermediate value property.** [[def-intermediate-value-property]] names
the Darboux property and proves the equivalence of its two usual forms. Every
continuous function on an interval has it; the converse is false, and
[[fs-intermediate-value-property-implies-continuity]] refutes it with a witness
built by hand from the distance to the nearest integer.

**Semicontinuity.** [[def-semicontinuity]] splits continuity into its two halves,
[[thm-semicontinuity-level-set-characterisation]] identifies each half by its
level sets, and [[thm-semicontinuous-evt]] proves the semicontinuous extreme
value theorem: an upper semicontinuous function on a nonempty compact set
attains a maximum. The theorem is genuinely one-sided, and the companion page
says why.

**Baire class one.** [[lem-baire-category-in-a-closed-interval]] localises
[[thm-baire-category-r]] to a closed bounded interval, which is the form the
next theorem needs. [[def-baire-class-one]] defines pointwise convergence and
the pointwise limits of continuous functions, and
[[thm-baire-one-continuity-points]] proves Baire's theorem: such a function on
$[a,b]$ has a meager discontinuity set and is continuous on a dense subset. The
argument is the refinement claim — on every subinterval there is a smaller one
where the oscillation is small — repeated through category.

**Cauchy's functional equation.** [[def-additive-function]] states the equation,
[[lem-additive-is-q-linear]] proves that an additive function is
$\mathbb{Q}$-homogeneous and hence determined on $\mathbb{Q}$ by its value at
$1$, and [[lem-additive-bounded-above-on-an-interval-is-linear]] is the engine:
one upper bound on one nondegenerate interval already forces $f(x) = f(1)x$
everywhere. [[thm-cauchy-functional-equation-regularity]] collects six
conditions that each imply linearity — continuity at a single point,
monotonicity on an interval, boundedness above or below on one, constancy of
sign on one, and a graph that is not dense in $\mathbb{R}^2$ — five of them by
reduction to that lemma. Two further classical clauses, boundedness on a set of
positive measure and Lebesgue measurability, are absent: both need a measure,
which is not available at this point in the reading order, and each is an
independent sufficient condition, so nothing else changes when they are
restored.

**And what happens without any of them.** [[lem-hamel-basis-exists]] produces,
from the Axiom of Choice through [[cor-every-vector-space-has-a-basis]] and
[[thm-zorn]], a basis of $\mathbb{R}$ over $\mathbb{Q}$ together with the
coefficient map of a single basis vector; that map is additive and takes only
rational values, which refutes
[[fs-additive-implies-linear]] outright. The hypothesis of choice is carried
explicitly in the statement of every item that uses it. The lemma is stated here
rather than quoted from [[ex-hamel-basis-of-r-over-q]] because that item lives
on an examples page, which is a leaf; the two statements are not the same, and
the lemma says exactly how they differ.
