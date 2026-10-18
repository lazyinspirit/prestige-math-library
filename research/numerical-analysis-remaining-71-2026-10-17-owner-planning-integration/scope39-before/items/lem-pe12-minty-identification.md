---
id: lem-pe12-minty-identification
kind: lemma
title: Minty identification for a monotone Carathéodory flux
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe12-monotone-diffusion-flux, thm-holder-inequality-for-integrals, thm-dominated-convergence, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Theorem 5.16, Minty–Browder monotonicity argument, PDF p. 159 (printed p. 145).
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS 2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: §0, Minty trick, PDF pp. 2–3.
---

## Statement

Assume the Axiom of Choice.

Let $Q=(0,T)\times\Omega$ have finite measure, $1<p<\infty$, and let
$a(x,\xi)$ be a Carathéodory flux with the monotonicity and $p$-growth
hypotheses of [[def-pe12-monotone-diffusion-flux]], independent of time.
Suppose $\xi_n\rightharpoonup\xi$ in $L^p(Q;\mathbb R^d)$,
$q_n=a(x,\xi_n)\rightharpoonup q$ in $L^{p'}(Q;\mathbb R^d)$, and
$$\limsup_{n\to\infty}\int_Q q_n\cdot\xi_n \le\int_Qq\cdot\xi.$$
Then $q(x,t)=a(x,\xi(x,t))$ for almost every $(t,x)\in Q$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the finite-measure cylinder, $1<p<\infty$, the stated flux
hypotheses, weak convergences, and the limsup inequality.

[F1] The flux is measurable under composition with a measurable vector
field, and its growth bound gives $a(\cdot,\eta)\in L^{p'}(Q;\mathbb R^d)$
for every $\eta\in L^p(Q;\mathbb R^d)$
([[def-pe12-monotone-diffusion-flux]]).

[F2] The flux is pointwise monotone outside one null set:
$(a(x,\xi)-a(x,\eta))\cdot(\xi-\eta)\ge0$
([[def-pe12-monotone-diffusion-flux]]).

[F3] Hölder makes every product of an $L^{p'}$ factor and an $L^p$ factor
integrable ([[thm-holder-inequality-for-integrals]]).

[F4] Dominated convergence passes limits under an integrable pointwise
majorant ([[thm-dominated-convergence]]).

## Proof
1.1 Fix arbitrary $\eta\in L^p(Q;\mathbb R^d)$. By [F1]–[F3], monotonicity gives the finite nonnegative integrals $$0\le\int_Q(q_n-a(x,\eta))\cdot(\xi_n-\eta).$$ Expanding them and using the two weak convergences for the three terms linear in a weakly convergent factor, the limsup hypothesis yields $$0\le\int_Q(q-a(x,\eta))\cdot(\xi-\eta).$$ Indeed the expanded nonnegative sequence has limsup at most the displayed right-hand side, so that right-hand side cannot be negative. [F1, F2, F3, given, algebra]

2.1 Let $\zeta\in L^p(Q;\mathbb R^d)$ and $0<\varepsilon\le1$. Substitute $\eta=\xi+\varepsilon\zeta$ and $\eta=\xi-\varepsilon\zeta$ into step 1.1. After dividing by $\varepsilon$, the two inequalities give $$\int_Q(q-a(x,\xi+\varepsilon\zeta))\cdot\zeta\le0,\qquad \int_Q(q-a(x,\xi-\varepsilon\zeta))\cdot\zeta\ge0.$$ For either sign, the absolute value of the flux factor times $|\zeta|$ is bounded by $$C\bigl(g(x)+|\xi|^{p-1}+|\zeta|^{p-1}\bigr)|\zeta|,$$ which is integrable by [F3]; here $g(x)$ is viewed as constant in time and $Q$ has finite time length. Carathéodory continuity gives pointwise $a(x,\xi\pm\varepsilon\zeta)\to a(x,\xi)$ as $\varepsilon\downarrow0$. Dominated convergence [F4] in both inequalities proves $\int_Q(q-a(x,\xi))\cdot\zeta=0$ for every $\zeta\in L^p(Q;\mathbb R^d)$. [F1, F3, F4, step 1.1, given, algebra]

3.1 Put $w=q-a(x,\xi)\in L^{p'}(Q;\mathbb R^d)$ and choose $\zeta=|w|^{p'-2}w$, defined as zero where $w=0$. Since $(p'-1)p=p'$, this $\zeta$ belongs to $L^p$, and step 2.1 gives $0=\int_Qw\cdot\zeta=\int_Q|w|^{p'}$. Thus $w=0$ almost everywhere, which is the claimed flux identification. [F3, step 2.1, algebra] ∎
