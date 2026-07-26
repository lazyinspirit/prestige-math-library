---
page: limsup-and-subsequential-limits
title: "limsup, liminf, and Subsequential Limits"
status: published
items: [def-extended-reals, lem-extended-reals-complete, def-extended-limits,
        def-limsup-liminf, lem-limsup-exists, lem-limsup-reflection,
        lem-liminf-le-limsup, lem-limsup-epsilon-characterisation,
        thm-convergence-iff-limsup-equals-liminf,
        thm-limsup-is-greatest-subsequential-limit,
        cor-liminf-is-least-subsequential-limit,
        thm-subsequential-limit-set-closed, lem-limsup-monotone-comparison,
        thm-limsup-subadditive, thm-limsup-submultiplicative,
        lem-nth-root-of-n-tends-to-one, lem-nth-root-of-constant-tends-to-one,
        thm-ratio-root-inequality, lem-power-over-geometric-null,
        lem-factorial-beats-geometric, rem-extended-real-conventions]
examples: [fs-limsup-additive, fs-ratio-and-root-limits-always-agree]
---

**Objective.** Every real sequence has a largest and a smallest thing it keeps
coming back to. This page defines those two quantities, proves that they always
exist, and shows that their coincidence is exactly convergence. The obstacle is
that neither quantity is a real number in general, and the previous pages
deliberately refused to pretend otherwise: [[rem-sup-conventions]] barred the
conventions $\sup S = +\infty$ and $\inf \emptyset = +\infty$ inside
$\mathbb{R}$, and promised that a page needing the extended line would introduce
it explicitly as a new object rather than quietly enlarging $\mathbb{R}$. This is
that page, and the promise is discharged in its first two items.

**The extended line, built once and used everywhere.**
[[def-extended-reals]] adjoins two objects $-\infty$ and $+\infty$ to
$\mathbb{R}$, fixes a total order in which they are the least and greatest
elements, and defines exactly two partial operations, leaving
$(+\infty) + (-\infty)$ and $0 \cdot (\pm\infty)$ undefined. Nothing about
$\mathbb{R}$ is changed, and no algebraic law is inherited: $\overline{\mathbb{R}}$
is not a field. What it does have is [[lem-extended-reals-complete]]: **every**
subset of $\overline{\mathbb{R}}$, with no hypothesis whatever, has a least upper
bound and a greatest lower bound there, agreeing with the real supremum and
infimum wherever the latter are defined. That single lemma is what makes the
whole page hypothesis free, and fourteen of its items rest on it.

**The two quantities.** [[def-limsup-liminf]] sets
$\limsup_k x_k = \inf_n \sup_{k \ge n} x_k$ and
$\liminf_k x_k = \sup_n \inf_{k \ge n} x_k$, both taken in
$\overline{\mathbb{R}}$; [[lem-limsup-exists]] records that the tail suprema
decrease and the tail infima increase, so the outer operations act on monotone
families, and that both quantities exist for every sequence, bounded or not.
[[lem-limsup-reflection]] proves that $x \mapsto -x$ exchanges the two, which is
what lets every later statement about $\limsup$ be read off as a statement about
$\liminf$ without a second proof. [[lem-liminf-le-limsup]] puts them in order,
and [[lem-limsup-epsilon-characterisation]] gives the working form in the finite
case: $L = \limsup_k x_k$ exactly when $x_k$ is eventually below $L + \varepsilon$
and frequently above $L - \varepsilon$, for every $\varepsilon > 0$. The
asymmetry between *eventually* and *frequently* is the whole content of the
notion.

**What they are for.** [[thm-convergence-iff-limsup-equals-liminf]] is the
theorem that justifies the definitions: a sequence converges to a real $L$
exactly when both quantities equal $L$, and diverges to $\pm\infty$ exactly when
both equal $\pm\infty$. So a question about convergence becomes a question about
two quantities that always exist, and a proof of convergence can be assembled
from one-sided estimates with no candidate limit in hand.
[[thm-limsup-is-greatest-subsequential-limit]] identifies them intrinsically:
$\limsup_k x_k$ is itself a subsequential limit and is the greatest one, with
[[cor-liminf-is-least-subsequential-limit]] the dual. Both statements live in
$\overline{\mathbb{R}}$, and they have to: the greatest subsequential limit of an
unbounded sequence need not be real, and the finite subsequential limit set may
have a greatest element that is not the limit superior. Since the published
[[def-subsequential-limit]] is finite by design, [[def-extended-limits]] extends
it by citation, adding the two divergence clauses without touching what was
already fixed. [[thm-subsequential-limit-set-closed]] completes the picture from
the other side: the subsequential limit set contains the limit of every
convergent sequence of its own points.

**Calculus of the two quantities.** [[lem-limsup-monotone-comparison]] is the
comparison principle, [[thm-limsup-subadditive]] the subadditivity, with the
hypothesis that the right-hand side be defined in $\overline{\mathbb{R}}$ and not
a hypothesis more, and [[thm-limsup-submultiplicative]] the multiplicative
analogue for bounded nonnegative sequences, where both hypotheses are load
bearing. Neither inequality can be reversed: [[fs-limsup-additive]] records that
for the sum, and [[cex-limsup-subadditivity-strict]] and
[[cex-limsup-product-strict]] exhibit strict inequality in each case.

**The ratio-to-root chain, and the standard limits.**
[[thm-ratio-root-inequality]] proves
$\liminf a_{k+1}/a_k \le \liminf a_k^{1/k} \le \limsup a_k^{1/k} \le \limsup a_{k+1}/a_k$
for a positive sequence. This is the precise sense in which a root criterion
dominates a ratio criterion, and it belongs here rather than with series, because
it is a statement about $\limsup$ and nothing else.
[[fs-ratio-and-root-limits-always-agree]] shows the outer inequalities are not
equalities. The proof needs [[lem-nth-root-of-constant-tends-to-one]], which with
[[lem-nth-root-of-n-tends-to-one]], [[lem-power-over-geometric-null]] and
[[lem-factorial-beats-geometric]] makes up the four standard limits of elementary
analysis; the last two are proved directly from Bernoulli's inequality and the
Archimedean property, since the continuity of $x \mapsto x^{\alpha}$ that the
root-test route would need is not available in this library.

**A note on indices.** Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]). The expressions $n^{1/n}$,
$a^{1/n}$ and $a_k^{1/k}$ are undefined at index $0$, so the corresponding
statements are made about the shifted families $(k+1)^{1/(k+1)}$,
$a^{1/(k+1)}$ and $a_{k+1}^{1/(k+1)}$; the expressions $n^{\alpha}/(1+p)^n$ and
$x^k/k!$ are defined at $0$ and are not shifted. Each item says which case it is
in.

**What is left undefined, and where it bites.**
[[rem-extended-real-conventions]] collects the two gaps in the arithmetic of
$\overline{\mathbb{R}}$, says why no value could fill them, and goes through the
page recording which statements carry a hypothesis because of them and which are
unconditional. The short version: everything order-theoretic is hypothesis free,
and everything arithmetic is not.
