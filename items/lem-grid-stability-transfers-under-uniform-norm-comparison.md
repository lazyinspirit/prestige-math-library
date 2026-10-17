---
id: lem-grid-stability-transfers-under-uniform-norm-comparison
kind: lemma
title: "Grid and common-space stability agree under uniform norm comparison"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-common-space-linear-scheme-interface, def-finite-grid-common-space-lift, def-operator-norm, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
---

## Statement

Let a finite-grid lift be as in [[def-finite-grid-common-space-lift]] over the
common Banach-space interface of [[def-common-space-linear-scheme-interface]].
Assume there are constants $a,b,P>0$, independent of $\nu$, such that for
every $g\in G_\nu$ and $x\in X$,
$$a\|g\|_{G_\nu}\le\|R_\nu g\|_X\le b\|g\|_{G_\nu},\qquad \|P_\nu\|_{X\to G_\nu}\le P.$$
Then the lifted family $(S_\nu)$ is stable on finite time intervals if and
only if the grid-update family $(Q_\nu)$ is stable in the declared grid norms
on finite time intervals.

Here grid stability means that for every $T>0$ there is $C_T<\infty$ such
that $\|Q_\nu^n\|_{G_\nu\to G_\nu}\le C_T$ whenever $\nu,n\in\mathbb N$ and
$n\tau_\nu\le T$.

## Facts & Assumptions

**Given:** The common-space and grid-lift data and uniform constants $a,b,P$ from the statement.

[F1] The grid lift has $P_\nu R_\nu=I_{G_\nu}$, $U(\tau_\nu)(\ker P_\nu)\subseteq\ker P_\nu$, and $S_\nu=R_\nu Q_\nu P_\nu+U(\tau_\nu)(I_X-R_\nu P_\nu)$ ([[def-finite-grid-common-space-lift]]).

[F2] The exact semigroup satisfies $\|U(t)\|_{\mathrm{op}}\le M_T$ for $0\le t\le T$ ([[def-common-space-linear-scheme-interface]]).

[F3] The operator norm is the supremum over the unit ball, so $\|Tx\|\le\|T\|_{\mathrm{op}}\|x\|$ for every $x$ ([[def-operator-norm]]).

[F4] A property true at $0$ and preserved by successor holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

1.1 The identity $P_\nu R_\nu=I$ gives $x=R_\nu P_\nu x+(I_X-R_\nu P_\nu)x.$ The first term is in $R_\nu(G_\nu)$ and the second is in $\ker P_\nu$. For $g\in G_\nu$, the lift satisfies $S_\nu R_\nu g=R_\nu Q_\nu g$; for $y\in\ker P_\nu$, it satisfies $S_\nu y=U(\tau_\nu)y$, which remains in $\ker P_\nu$ by [F1]. Thus both summands are invariant under $S_\nu$. [F1, given, algebra]

2.1 Induction [F4] on $n\in\mathbb N$, using the two invariant summands from step 1.1 and the semigroup identity $U(\tau_\nu)^n=U(n\tau_\nu)$, gives $S_\nu^n=R_\nu Q_\nu^nP_\nu+U(n\tau_\nu)(I_X-R_\nu P_\nu).$ For $n=0$ the right side is $R_\nu P_\nu+(I_X-R_\nu P_\nu)=I_X$; the induction step applies $R_\nu Q_\nu$ on the first summand and $U(\tau_\nu)$ on the second. [F1, F4, step 1.1, algebra]

3.1 Suppose the grid updates are stable, with $\|Q_\nu^n\|_{G_\nu\to G_\nu}\le C_T$ whenever $n\tau_\nu\le T$. For every $x\in X$, step 2.1 and the comparison bounds give $\|S_\nu^nx\|_X\le bC_TP\|x\|_X+M_T(1+bP)\|x\|_X$: indeed, $\|R_\nu Q_\nu^nP_\nu x\|_X\le bC_TP\|x\|_X$ and $\|U(n\tau_\nu)(I_X-R_\nu P_\nu)x\|_X\le M_T(1+bP)\|x\|_X$. Taking the supremum over $\|x\|_X\le1$ using [F3] proves the uniform common-space power bound, hence stability. [F1, F2, F3, step 2.1, given, algebra]

4.1 Conversely, suppose $\|S_\nu^n\|_{X\to X}\le C_T$ for $n\tau_\nu\le T$. For every $g\in G_\nu$, step 1.1 gives $S_\nu^nR_\nu g=R_\nu Q_\nu^ng$. The lower and upper norm comparisons and [F3] therefore give $a\|Q_\nu^ng\|_{G_\nu}\le\|R_\nu Q_\nu^ng\|_X =\|S_\nu^nR_\nu g\|_X\le C_T\|R_\nu g\|_X \le C_Tb\|g\|_{G_\nu}.$ Thus $\|Q_\nu^n\|_{G_\nu\to G_\nu}\le C_Tb/a$ uniformly on the same finite interval. The two stability notions are equivalent under the stated uniform comparisons. [F3, step 1.1, given, algebra] ∎
