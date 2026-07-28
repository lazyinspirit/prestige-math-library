---
page: monotone-functions-and-discontinuities-examples
title: "Monotone Functions, Discontinuities, and Continuity Sets: Examples and Counterexamples"
status: draft
items: []
examples: [ex-thomae-values-and-oscillation-computed,
           ex-monotone-function-discontinuous-exactly-at-the-rationals,
           ex-froda-is-sharp,
           ex-continuous-inverse-gives-the-nth-root,
           ex-cantor-function-maps-a-null-set-onto-the-unit-interval,
           ex-locally-unbounded-finite-everywhere,
           ex-indicator-of-q-is-baire-class-two-not-one,
           ex-hamel-basis-additive-function,
           ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous,
           cex-upper-semicontinuous-need-not-attain-its-infimum,
           cex-continuous-injection-on-a-non-interval-need-not-be-monotone]
---

**Objective.** This is the worked companion to the page on monotone functions,
discontinuities and continuity sets, linked under Prerequisites above. It
introduces no definition and proves no general theorem: every item here is
either a computation carried out in full, or a witness that some hypothesis on
that page cannot be dropped. As an examples page it is a leaf of the dependency
graph — nothing anywhere in the library rests on an item listed here.

**Computations.** [[ex-thomae-values-and-oscillation-computed]] evaluates
Thomae's function and its oscillation at particular points: $1$ at every
integer, $1/2$ at $1/2$, $1/3$ at $2/3$, and $0$ at every irrational, the
oscillation agreeing with the value everywhere.
[[ex-continuous-inverse-gives-the-nth-root]] runs the continuous inverse theorem
on $x \mapsto x^{n}$ over $[0,\infty)$ and obtains the continuity and strict
monotonicity of the $n$-th root, which no estimate on roots is needed for.

**How large a discontinuity set can be.**
[[ex-monotone-function-discontinuous-exactly-at-the-rationals]] applies the
prescribed-jump construction to $E = \mathbb{Q}$ and produces a bounded
nondecreasing function on $\mathbb{R}$ whose discontinuities are exactly the
rationals — a dense set, and the extreme case Froda's countable bound allows.
[[ex-froda-is-sharp]] does the same with the countably infinite set
$\{1 - 1/(k+1) : k \in \mathbb{N}\}$, which fits inside $[0,1)$: infinitely many
jumps can accumulate inside a bounded interval, and the accumulation point is
itself a point of continuity.

**Two failures of intuition about size.**
[[ex-cantor-function-maps-a-null-set-onto-the-unit-interval]] shows that the
Cantor function carries the Cantor set, which is null, **onto** the whole of
$[0,1]$, which is not: measure zero is not preserved by continuous images.
[[ex-locally-unbounded-finite-everywhere]] gives a function that is a real
number at every single point and yet unbounded on every nondegenerate interval,
namely the least denominator at a rational and $0$ at an irrational; the
estimate that drives it is that two distinct rationals with denominators $q_1$
and $q_2$ are at least $1/(q_1q_2)$ apart.

**The Baire hierarchy is strict at the first level.**
[[ex-indicator-of-q-is-baire-class-two-not-one]] exhibits the Dirichlet function
on $[0,1]$ as the pointwise limit of a sequence of Baire class one functions —
the indicators of finite sets, each approximated by continuous tents — and
proves it is not itself of Baire class one, since Baire's theorem would then
give it a dense set of continuity points and it has none.

**What an additive function looks like without regularity.**
[[ex-hamel-basis-additive-function]] takes the Hamel coefficient map of a fixed
basis vector and reads off, from the regularity theorem by contraposition, that
it is unbounded above and below on every nondegenerate interval, monotone on
none, continuous at no point, with graph dense in $\mathbb{R}^2$ and with every
nonempty level set dense in $\mathbb{R}$. Its values are exactly the rationals,
and its level sets are the cosets of the kernel.
[[ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous]] relabels those
values by a strictly increasing injection of $\mathbb{R}$ into $(0,1)$ and
obtains a **bounded** function on $\mathbb{R}$ with no local maximum and no
local minimum at any point, upper semicontinuous nowhere and lower
semicontinuous nowhere. Both rest on the Axiom of Choice, and both say so.

**Two hypotheses that cannot be dropped.**
[[cex-upper-semicontinuous-need-not-attain-its-infimum]] gives an upper
semicontinuous function on $[0,1]$ that is bounded below and attains no minimum,
so the semicontinuous extreme value theorem really is one-sided; the failing
hypothesis is lower semicontinuity at a single point.
[[cex-continuous-injection-on-a-non-interval-need-not-be-monotone]] gives a
continuous injection on $[0,1] \cup [2,3]$ that is not monotone, so
order-convexity of the domain cannot be dropped from the strict-monotonicity
theorem.

**One item was planned for this page and is not here.** The **Conway base-13
function** — a function $[0,1] \to \mathbb{R}$ taking every real value on every
nondegenerate subinterval, hence Darboux and continuous at no point — is
deferred, not abandoned. Writing it honestly needs a fact about base-$b$
expansions that this library does not yet have: that the set of reals in $[0,1)$
whose expansion begins with a prescribed finite block of digits is an interval of
length $b^{-J}$. [[thm-decimal-expansions]] supplies the expansions and their
uniqueness but not that statement, and the construction is unsound without it.
The false statement it would have witnessed,
[[fs-intermediate-value-property-implies-continuity]], is refuted on the main
page by a smaller witness that is complete.
