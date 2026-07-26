---
page: limsup-and-subsequential-limits-examples
title: "limsup, liminf, and Subsequential Limits: Examples and Counterexamples"
status: published
items: []
examples: [ex-limsup-of-alternating-sequence,
           ex-subsequential-limits-fill-unit-interval,
           ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain,
           ex-standard-limits-worked, cex-limsup-subadditivity-strict,
           cex-limsup-product-strict, cex-limsup-infinite-not-attained-in-r,
           cex-zero-times-infinity-indeterminate]
---

**Objective.** Nine witnesses for the page on $\limsup$, $\liminf$ and
subsequential limits. Each one is here because some hypothesis, or some
inequality, or some choice of ambient ordered set on that page would otherwise
look like a convenience rather than a necessity.

**How large the subsequential limit set can be.**
[[ex-limsup-of-alternating-sequence]] is the smallest case in which
$\liminf < \limsup$: the alternating sequence returns to $-1$ and to $1$
forever, and by [[thm-convergence-iff-limsup-equals-liminf]] that gap is exactly
why it does not converge. [[ex-subsequential-limits-fill-unit-interval]] goes to
the other extreme: the block sequence $1/1;\ 1/2, 2/2;\ 1/3, 2/3, 3/3;\ \dots$
has subsequential limit set exactly $[0,1]$, so a single bounded sequence can
approach every point of an interval. Its verification is a recursion and three
inductions, with no arbitrary choices anywhere, and it also exhibits the
closedness of [[thm-subsequential-limit-set-closed]] in a case where the set is
not finite.

**Why the extended line is not optional.**
[[cex-limsup-infinite-not-attained-in-r]] is the witness that
[[thm-limsup-is-greatest-subsequential-limit]] cannot be stated inside
$\mathbb{R}$. The sequence there has a nonempty set of *real* subsequential
limits, with greatest element $0$, while its limit superior is $+\infty$; so the
failure is not the trivial one of an empty set, it is that the dominant behaviour
of the sequence is invisible to $\operatorname{SL}(x)$ and is recorded only by
$\overline{\operatorname{SL}}(x)$ ([[def-extended-limits]]).
[[cex-zero-times-infinity-indeterminate]] is the reason one of the two gaps in
the arithmetic of [[def-extended-reals]] is a gap: a null sequence times a
sequence diverging to $+\infty$ can converge to any prescribed positive real, or
diverge, so no value assigned to $0 \cdot (+\infty)$ could be compatible with
limits.

**Why the two inequalities are inequalities.**
[[cex-limsup-subadditivity-strict]] and [[cex-limsup-product-strict]] give pairs
of sequences for which [[thm-limsup-subadditive]] and
[[thm-limsup-submultiplicative]] hold strictly, and strictly by the whole
available margin: the sum witness has $\limsup(x+y) = 0$ against a bound of $2$,
and the product witness has $\limsup(xy) = 0$ against a bound of $4$. In both the
mechanism is the same, and it is worth naming: the two limit superiors are
attained along disjoint sets of indices, so the combined sequence never sees
either of them. All hypotheses of the two theorems hold in the witnesses, so
neither refutation exploits a degenerate case.

**Ratio against root.** [[ex-ratio-fails-root-succeeds]] is the standard witness
that the root criterion is strictly stronger: for $a_k = 2^{-k+(-1)^k}$ the
ratios oscillate between $1/8$ and $2$, straddling $1$, while the roots converge
to $1/2$. [[ex-strict-ratio-root-chain]] pushes the same idea further by
interleaving two geometric sequences of different ratios, and makes **all three**
inequalities of [[thm-ratio-root-inequality]] strict at once, with the chain
$0 < 1/3 < 1/2 < +\infty$. That chain is worth reading carefully: its first two
comparisons are between real numbers, while the third is a comparison in
$\overline{\mathbb{R}}$ only, since $+\infty$ is not a real number. The example is
therefore also a small illustration of why the theorem is stated in the extended
line.

**The four standard limits.** [[ex-standard-limits-worked]] instantiates
$n^{1/n} \to 1$, $a^{1/n} \to 1$, $n^{\alpha}/(1+p)^n \to 0$ and $x^k/k! \to 0$,
records the explicit rates the first two come with, and combines two of them into
the growth ordering $n^{\alpha} \ll (1+p)^n \ll k!$. It also lays out which of
the four need an index shift and why: the ones whose index sits in the exponent
do, and the ones whose index sits in the base or in a factorial do not.
