---
page: monotone-sequences-and-cauchy-completeness
title: "Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness"
status: published
items: [def-interval, def-monotone-sequence, thm-monotone-convergence,
        lem-monotone-unbounded-diverges, cor-monotone-converges-iff-bounded,
        thm-nested-interval-property, def-subsequential-limit,
        lem-peak-monotone-subsequence, thm-bolzano-weierstrass,
        lem-cauchy-sequence-bounded, lem-cauchy-with-convergent-subsequence,
        thm-cauchy-criterion-via-lub, lem-geometric-sequence-null,
        def-contractive-sequence, thm-contractive-implies-cauchy,
        lem-alternating-sequence, rem-completeness-routes]
examples: [fs-nested-open-intervals-nonempty,
           fs-consecutive-differences-null-implies-cauchy,
           fs-convergent-subsequence-implies-bounded]
---

**Objective.** This page is where the least-upper-bound property first produces
**limits**. Everything on the sequences page, linked under Prerequisites above,
held in any Archimedean ordered field: uniqueness of limits, the algebra of
limits, the order limit theorem and the squeeze theorem are all statements whose
proofs never open the completeness axiom. Nothing there could produce a limit
that was not handed to it. The four results proved here all can, and each of them
spends completeness exactly once: the monotone convergence theorem, the nested
interval property, Bolzano-Weierstrass, and the Cauchy criterion.

The order of the page is chosen so that the use of completeness stays in one
place. [[thm-monotone-convergence]] is the only item that reaches for a supremum
directly, and every later existence statement is routed through it. The nested
interval property is monotone convergence applied to the two endpoint sequences.
Bolzano-Weierstrass is [[lem-peak-monotone-subsequence]], which uses nothing
about $\mathbb{R}$ beyond trichotomy of its order, followed by
[[cor-monotone-converges-iff-bounded]], which is where the axiom is actually
spent. And [[thm-cauchy-criterion-via-lub]] is three cited lemmas in a row, two
of which hold in any ordered field. A reader who wants to know where
completeness is used on this page has one item to look at.

**Monotone sequences.** [[def-monotone-sequence]] fixes the vocabulary, with the
unqualified word *increasing* reserved for the strict notion, and settles one
point that recursive constructions make constantly: comparing consecutive terms
suffices, and the equivalence with the global condition is an induction, written
out there rather than assumed. [[thm-monotone-convergence]] then says that a
bounded monotone sequence converges, and names the limit: the supremum of the
range in the nondecreasing case, the infimum in the nonincreasing one. That
identification, not the bare existence, is what makes the theorem a tool for
*computing* limits, as the recursive sequences of the companion page show.
[[lem-monotone-unbounded-diverges]] closes the dichotomy: a nondecreasing
sequence either converges to the supremum of its range or diverges to $+\infty$,
with nothing in between, and [[cor-monotone-converges-iff-bounded]] states the
resulting equivalence in the form the rest of the page consumes.

**Intervals and nesting.** [[def-interval]] records the nine order-convex forms,
the nondegeneracy conditions, and length, with the deliberate warning that
$\pm\infty$ is notation and never an element of $\mathbb{R}$. Its consumer is
[[thm-nested-interval-property]], which is stated here in a slightly stronger
form than usual: a nested sequence of nonempty closed bounded intervals
intersects in $[\,\sup a_k, \inf b_k\,]$, not merely in something nonempty, and
the intersection is a single point exactly when the lengths tend to $0$. Both
hypotheses are load bearing and each fails on its own witness, one on each side
of the companion page: dropping closedness gives the empty intersection of
[[cex-nested-open-intervals-empty]], and dropping boundedness gives the empty
intersection of [[cex-nested-unbounded-closed-empty]]. The proof needs no
Archimedean input, which is worth saying because the textbook argument for the
single-point case usually does use it; here the lengths converge to $b - a$ by
the algebra of limits and the two directions are the two directions of
$b - a = 0$.

**Subsequences and Bolzano-Weierstrass.** [[def-subsequential-limit]] combines
two notions already fixed on the sequences page, and stresses the distinction
between a subsequential limit of a sequence and a limit point of a set. The work
is in [[lem-peak-monotone-subsequence]], the peak or rising-sun lemma: **every**
real sequence, with no hypothesis at all, has a monotone subsequence. Its two
cases are literal negations of one another, so no completeness enters the split,
and both recursions choose a *least* element supplied by the well-ordering
principle, so no form of the axiom of choice is used either. That is the reason
Bolzano-Weierstrass in $\mathbb{R}$ is choice-free, in contrast with sequential
compactness in a general metric space. [[thm-bolzano-weierstrass]] is then two
citations, and it is the exact repair of the false statement
[[fs-bounded-implies-convergent]] proved on the previous page: boundedness does
not give convergence, it gives a convergent subsequence.

**Cauchy completeness from the axioms.** [[lem-cauchy-sequence-bounded]] and
[[lem-cauchy-with-convergent-subsequence]] are the two ordered-field halves, and
[[thm-cauchy-criterion-via-lub]] joins them to Bolzano-Weierstrass. This library
already knew that every Cauchy sequence of reals converges: it is
[[thm-reals-cauchy-complete]], proved on the Cauchy-construction page by a
diagonal argument on representatives. The two proofs are not the same theorem
twice. One is a fact about the object that construction produced; the other is a
fact about the axioms, and holds in **every** complete ordered field however it
was obtained. [[rem-completeness-routes]] sets out why both are kept, and states
plainly which implications are *not* proved on this page: that Cauchy
completeness plus the Archimedean property gives back the least-upper-bound
property, and likewise for nested intervals. Those belong to the page on the
equivalent forms of completeness, which comes later in the reading order, and no
item here may be cited for them.

**Contractive sequences.** [[def-contractive-sequence]] and
[[thm-contractive-implies-cauchy]] are the constructive payoff of the Cauchy
criterion: a hypothesis that never mentions the limit yields convergence
*and* a computable error bound, $|x - x_k| \le c^{k-1}|x_2 - x_1|/(1-c)$ for
$k \ge 1$. The index restriction there is a genuine hypothesis and not a
convention, and the theorem says so with a witness; the classical statement is
written for sequences indexed from $1$, where the question cannot arise, and this
library indexes from $0$. The one hypothesis that carries the whole result is
that the constant $c$ is **uniform in $k$**, and
[[cex-strictly-decreasing-gaps-no-limit]] is the sequence whose gaps each shrink,
whose gap ratios all lie below $1$, and which diverges, because those ratios
approach $1$ and no single constant works. [[lem-geometric-sequence-null]] is the
estimate underneath, and [[lem-alternating-sequence]] is a piece of bookkeeping
collected once rather than three times: the even and odd index maps, their
disjointness proved rather than asserted, and the unique sequence with $s_0 = 1$
and $s_{\sigma(k)} = -s_k$.

**The three false statements are the three ways this material is misremembered.**
Nested *open* intervals need not intersect
([[fs-nested-open-intervals-nonempty]]), so closedness is not a convenience of
the proof. Consecutive differences tending to $0$ do not make a sequence Cauchy
([[fs-consecutive-differences-null-implies-cauchy]]), since the Cauchy condition
constrains all late pairs of indices and not only adjacent ones; $\sqrt k$
settles it. And a convergent subsequence says nothing about the sequence, not
even that it is bounded ([[fs-convergent-subsequence-implies-bounded]]), so the
converse of Bolzano-Weierstrass fails as badly as it can.
