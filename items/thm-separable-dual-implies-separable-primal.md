---
id: thm-separable-dual-implies-separable-primal
kind: theorem
title: Separable dual implies separable primal
status: published
origin: pipeline
deps: [def-dual-space-of-a-normed-space, def-separable-space, thm-relative-hahn-banach-geometric-separation, def-countable-choice, def-hahn-banach-extension-principle-relative, lem-countable-iff-surjection-from-n, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-countable-union-of-countable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Theorem 3.26"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "Section 3.6, printed pp. 72–73: complete proof of Theorem 3.26"
    - title: "Bühler–Salamon, Functional Analysis, Theorem 2.73(i)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Section 2.4.3, printed p. 93"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and the relative
Hahn–Banach principle HB.  If the continuous dual $X^*$ of a real or complex
normed space $X$ is norm separable, then $X$ is norm separable.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, HB, a real or complex normed space $X$, and
the hypothesis that $X^*$ is separable in its norm topology.

[F1] Separability means that an at most countable dense subset exists, and a
nonempty at most countable set is the image of a sequence
([[def-separable-space]], [[lem-countable-iff-surjection-from-n]]).

[F2] The dual norm is
$\|f\|=\sup_{\|x\|\le1}|f(x)|$
([[def-dual-space-of-a-normed-space]]).

[F3] Under HB, a point outside a nonempty closed convex set can be uniformly
strictly separated from it by a nonzero continuous scalar-linear functional
([[thm-relative-hahn-banach-geometric-separation]],
[[def-hahn-banach-extension-principle-relative]]).

[F4] The rationals are countable and dense in the reals.  Products of two
at most countable sets are at most countable, and under
$\mathrm{AC}_\omega$ a countable union of at most countable sets is at most
countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]],
[[thm-product-of-countable]], [[thm-countable-union-of-countable]],
[[def-countable-choice]]).

## Proof

**Proof technique:** almost-norming sequence and annihilator separation.

1.1 If $X=\{0\}$, then $\{0\}$ itself is a finite dense subset of $X$, so the conclusion holds.  Henceforth suppose $X\ne\{0\}$. [given, F1]

1.2 By [F1], choose an at most countable norm-dense subset $S\subseteq X^*$.  Enlarge it by the zero functional, so it is nonempty and [F1] supplies a sequence $(f_n)_{n\ge0}$ whose range is $S$.  This sequence is norm dense in $X^*$. [given, F1, construct]

1.3 For each $n$, if $f_n=0$ set $C_n=\{0\}$; otherwise let $$C_n=\{x\in X:\|x\|\le1\text{ and }|f_n(x)|>\tfrac12\|f_n\|\}.$$ The set $C_n$ is nonempty by [F2].  Apply $\mathrm{AC}_\omega$ to the family $(C_n)$ and choose $x_n\in C_n$ for every $n$.  This is the only selection of an arbitrary countable family in the proof. [F2, F4, choose]

2.1 Let $\mathbb K_0=\mathbb Q$ in the real case and $\mathbb K_0=\mathbb Q+i\mathbb Q$ in the complex case, and let $D$ be the $\mathbb K_0$-linear span of the sequence $(x_n)$.  The field $\mathbb K_0$ is at most countable by [F4].  For each fixed number of summands, the coefficient-index tuples form a finite product of at most countable sets; the union over all finite lengths is at most countable by [F4].  Its image under evaluation is $D$, so $D$ is at most countable.  Density of $\mathbb Q$ in $\mathbb R$ shows that $D$ is norm dense in the real or complex linear span of the $x_n$. [step 1.3, F4, algebra]

2.2 Let $g\in X^*$ vanish on $D$.  Then $g(x_n)=0$ for every $n$.  Given $\varepsilon>0$, norm density of $(f_n)$ gives an $n$ with $\|g-f_n\|<\varepsilon$.  By the definition of $x_n$ in step 1.3, $$\tfrac12\|f_n\|\le |f_n(x_n)|=|(f_n-g)(x_n)|\le\|f_n-g\|<\varepsilon,$$ where the first inequality is also true when $f_n=0$.  Therefore $\|g\|\le\|g-f_n\|+\|f_n\|<3\varepsilon$.  Since this holds for every $\varepsilon>0$, $g=0$. [step 1.2, step 1.3, F2, algebra]

3.1 Suppose that the norm closure $M=\overline D$ were a proper subset of $X$.  It is a nonempty closed real-linear subspace, and in the complex case it is complex-linear because $\mathbb K_0$ is dense in $\mathbb C$.  Choose $z\notin M$.  By [F3] there is a nonzero $h\in X^*$ strictly separating $z$ from $M$.  Because $M$ is a subspace and $\operatorname{Re}h$ is bounded on one side there, scaling forces $\operatorname{Re}h(m)=0$ for every $m\in M$.  In the complex case, applying this also to $im\in M$ gives $\operatorname{Im}h(m)=0$.  Thus $h$ vanishes on $D$, contradicting step 2.2.  Consequently $\overline D=X$. [F3, step 2.1, step 2.2, assume-contra, contradiction, discharge-contradiction]

4.1 The at most countable set $D$ is norm dense in $X$ by steps 2.1 and 3.1, so $X$ is separable by [F1].  The use of $\mathrm{AC}_\omega$ is exactly the simultaneous choice in step 1.3 and the countable-union result in step 2.1; HB is used exactly in the separation step 3.1. [step 2.1, step 3.1, F1, F3, F4] ∎

## Source notes

Brezis proves the real Banach-space case by the same almost-norming sequence
and annihilator argument.  The proof above observes that completeness is not
used, handles $X=\{0\}$, makes the countability and choice steps explicit, and
uses Gaussian-rational coefficients to cover complex normed spaces.
