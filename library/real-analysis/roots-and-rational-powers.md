---
page: roots-and-rational-powers
title: "Roots, Rational Powers, and Classical Inequalities"
status: published
items: [def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws,
        lem-power-monotone, lem-bernoulli-inequality,
        lem-power-difference-factorisation, thm-nth-roots-exist,
        def-rational-power, lem-rational-power-well-defined,
        lem-rational-power-laws, lem-rational-power-monotone,
        lem-triangle-inequality-finite, thm-am-gm, thm-weighted-am-gm-rational,
        thm-young-inequality, thm-cauchy-schwarz-finite, thm-holder-finite,
        thm-minkowski-finite, rem-real-exponents-deferred]
examples: [fs-negative-has-square-root, fs-rational-power-of-negative-base]
---

**Objective.** This page builds exponentiation inside $\mathbb{R}$ as far as it
can honestly be built with the tools the library currently owns, and then proves
the classical inequalities that live at that level. The tools are the field
axioms, the order, and the least-upper-bound property
([[def-complete-ordered-field]]). The library has no exponential function, no
logarithm, no continuity and no infinite series; a limit of a sequence of reals
is defined in the Cauchy construction ([[def-real-limit]]), but no proof on this
page uses one. So **every exponent on this page is an integer or a rational, and
every proof is a finite algebraic argument plus, in exactly one proof, the
least-upper-bound property.**

The construction runs in three stages. First, finite sums and finite products
are defined by recursion ([[def-finite-sum]], resting on [[thm-recursion]]) and
their laws are proved by induction, because "$a_0 + \cdots + a_{n-1}$" is
notation and not a definition. Second, integer powers are defined by the same
mechanism and their algebra and order behaviour established. Third, roots are
produced: for $a \ge 0$ and $n \ge 1$ there is a unique nonnegative $s$ with
$s^{n} = a$ ([[thm-nth-roots-exist]]). That theorem is the one proof on this page
that invokes the least-upper-bound property directly, and it is a
**generalisation of the already published
[[thm-of-square-roots]]**: the case $n = 2$ is not new here and is not claimed
to be. What is new is the passage to general $n$, where the completed square
that drives the square-root argument is replaced by the factorisation of
$b^{n} - a^{n}$ and the Lipschitz estimate it yields
([[lem-power-difference-factorisation]]).

Rational powers follow: $a^{r} := \big(a^{1/n}\big)^{m}$ for $a > 0$ and
$r = m/n$ ([[def-rational-power]]). Two things about that definition deserve
attention. Its **well-definedness is a theorem**, not an observation: different
representatives of the same rational must give the same value, and
[[lem-rational-power-well-defined]] proves they do, which is why it is recorded
in the definition's `justified_by` rather than in its `deps`. And the
restriction to a **positive base is forced**, not stylistic:
[[fs-rational-power-of-negative-base]] shows that for $a < 0$ the very same
formula assigns $-2$ to $(-8)^{1/3}$ and nothing at all to $(-8)^{2/6}$, though
$1/3$ and $2/6$ are the same rational.

The inequalities then follow one from the next. AM-GM ([[thm-am-gm]]) is proved
by Cauchy's forward-backward induction, up a doubling sequence of **natural
numbers** and then downward, with the equality case tracked throughout. The
doubling sequence is defined by recursion inside $\mathbb{N}$ rather than written
$2^{j}$, because a list length must be a natural number and $2^{j}$ would name a
real ([[def-integer-power]] gives powers of a real base only). Its weighted form
([[thm-weighted-am-gm-rational]]) is stated for **rational** weights, and that
restriction is not laziness: a real weight $w$ would require the symbol $x^{w}$,
which does not exist in this library. Young's inequality
([[thm-young-inequality]]) is the two-weight case, Hölder
([[thm-holder-finite]]) is Young summed after normalisation, and Minkowski
([[thm-minkowski-finite]]) is Hölder applied twice with the conjugate exponent
$q = p/(p-1)$, **which is rational exactly because $p$ is**. Cauchy-Schwarz
([[thm-cauchy-schwarz-finite]]) is proved separately and by a route that uses no
root at all, from the nonnegativity of $\sum_k (a_k t + b_k)^{2}$; its root form
is a restatement, reached through the already published [[thm-of-square-roots]]
rather than through the $n$-th roots of this page.
Bernoulli's inequality ([[lem-bernoulli-inequality]]) sits outside that chain: it
is proved here as a classical inequality of exactly this level, for its own sake
rather than as a step towards the others, and nothing else on this page rests on
it.

Two false statements guard the boundary of what has been built. No real number
squares to a negative one ([[fs-negative-has-square-root]]), in any ordered
field and with no appeal to completeness, though odd roots of negatives do exist
and the map $x \mapsto x^{n}$ is a bijection of $\mathbb{R}$ for odd $n$. And
the rational-power formula does not survive the passage to negative bases
([[fs-rational-power-of-negative-base]]). The closing remark
([[rem-real-exponents-deferred]]) is honest about the ceiling: $a^{x}$ for real
$x$ can be defined here as $\sup\{a^{r} : r \in \mathbb{Q},\ r \le x\}$, and that
supremum does exist, but the power laws for it cannot be proved without limits.
The library reaches general powers later, through the exponential and the
logarithm, and that page is not linked from here because it does not exist yet.
