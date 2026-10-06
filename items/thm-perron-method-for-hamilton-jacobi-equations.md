---
id: thm-perron-method-for-hamilton-jacobi-equations
kind: theorem
title: 'Perron''s method for the Cauchy problem: existence between two barriers'
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions
- lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump
- thm-comparison-for-first-order-hamilton-jacobi-equations
- cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions
- lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers
- def-viscosity-subsolution-and-supersolution
- def-upper-and-lower-semicontinuous-envelopes
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 8, Theorem 1.30 and Remark 1.31, printed pp. 36--38
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Theorem 4.1 and Lemma 4.4, printed pp. 22--25
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $T>0$, let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ satisfy the Lipschitz
conditions of part (a) of
[[thm-comparison-for-first-order-hamilton-jacobi-equations]], and let
$u_0\in C^1(\mathbb R^n)$ be bounded with bounded gradient. Assume
$C_0:=\sup_{x\in\mathbb R^n,\,0\le t\le T}|H(x,t,Du_0(x))|<\infty$, and put
$\phi_\pm=u_0\pm C_0t$ as in
[[lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers]]. Define
$W(x,t)$ on $Z=\mathbb R^n\times(0,T)$ as the supremum of all viscosity
subsolutions $w$ with $\phi_-\le w\le\phi_+$ on $Z$. Then: (1) $W$ is well
defined and $\phi_-\le W\le\phi_+$; (2) $W^*$ is a viscosity subsolution and
$W_*$ is a viscosity supersolution in $Z$; (3) comparison gives
$W^*\le W_*$, hence $W=W^*=W_*$ is continuous, solves the Cauchy problem and
carries datum $u_0$ in the relaxed sense; (4) $W$ is the unique viscosity
solution in the class lying between $\phi_-$ and $\phi_+$. No choice principle
is used.

## Facts & Assumptions

**Given:** The Hamiltonian $H$ with comparison case (a), $u_0\in C^1$ bounded with bounded gradient, $C_0=\sup|H(x,t,Du_0(x))|<\infty$, the barriers $\phi_\pm=u_0\pm C_0t$, and the set $\mathcal W$ of viscosity subsolutions $w$ of $u_t+H(x,t,Du)=0$ in $Z$ with $\phi_-\le w\le\phi_+$, with $W:=\sup_{w\in\mathcal W}w$.

[F1] $\phi_-$ is a classical subsolution and $\phi_+$ a classical supersolution, each with datum $u_0$, and the barriers control both relaxed initial limits: for every locally bounded $w$ with $\phi_-\le w\le\phi_+$ the liminf and limsup at $O\times\{0\}$ both equal $u_0$ ([[lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers]]).

[F2] The upper semicontinuous envelope of a locally bounded-above supremum of a nonempty family of upper semicontinuous viscosity subsolutions is a viscosity subsolution ([[thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions]]); if the lower envelope $w_*$ of an upper semicontinuous subsolution $w$ strictly fails the supersolution test at a point, a local bump produces a subsolution $W_\kappa\ge w$ with $W_\kappa>w$ at some point of an arbitrarily small ball about the failure point and $W_\kappa=w$ outside that ball ([[lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump]]).

[F3] Comparison case (a) applies to bounded upper semicontinuous subsolutions and bounded lower semicontinuous supersolutions with ordered pointwise initial traces ([[thm-comparison-for-first-order-hamilton-jacobi-equations]]), and uniqueness in the bounded class follows ([[cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions]]).

## Proof

**Proof technique:** envelope subsolution, bump contradiction, comparison.

1.1 Well-definedness and the upper envelope. The barrier $\phi_-$ is itself an admissible subsolution by [F1], so $\mathcal W$ is nonempty, and every $w\in\mathcal W$ satisfies $w\le\phi_+$, so $W$ is real-valued and bounded above on compact subsets of $Z$. By [F2] the envelope $W^*$ is a viscosity subsolution; moreover $W\le\phi_+$ gives $W^*\le\phi_+$ because $\phi_+$ is continuous (the limsup defining the envelope of a function bounded above by the continuous $\phi_+$ is at most $\phi_+$), and $W^*\ge W\ge\phi_-$. Hence $W^*$ is itself an admissible member of $\mathcal W$, so $W^*\le W$ by maximality and therefore $W=W^*$ is upper semicontinuous. [F1, F2]

2.1 The lower envelope is a supersolution. Suppose $W_*$ failed the supersolution test strictly at some $\hat z\in Z$: there is $\phi\in C^1$ with $W_*-\phi$ having a local minimum at $\hat z$ and $\phi_t(\hat z)+H(\hat z,D\phi(\hat z))<0$. First, $W_*(\hat z)<\phi_+(\hat z)$: otherwise $W_*(\hat z)=\phi_+(\hat z)$ and, since $W_*\le\phi_+$, the function $\phi_+-\phi$ would have a local minimum at $\hat z$, so the supersolution inequality for the classical supersolution $\phi_+$ would give $\phi_t(\hat z)+H(\hat z,D\phi(\hat z))\ge0$, a contradiction. Choose a small bump supported in $B(\hat z,\kappa)$; by [F2] it gives a viscosity subsolution $W_\kappa\ge W$ that exceeds $W$ at some point in that ball and equals $W$ outside it. It is constructed as $\max(W,\chi)$ on a smaller ball, where $\chi$ is a classical subsolution and is below $W$ on the surrounding annulus. In the construction of the bump lemma, the unshifted smooth part $\tilde\phi+m$ has value $W_*(\hat z)<\phi_+(\hat z)$. First choose its ball radius $r$ small enough that $\tilde\phi+m$ lies strictly below $\phi_+$ throughout the closed ball. Then choose the offset $\delta$ smaller than both the positive minimum of $\phi_+-(\tilde\phi+m)$ on that ball and the annular allowance $\gamma(r/2)^4$. The resulting $\chi=\tilde\phi+m+\delta$ stays below $\phi_+$ while all annular gluing inequalities hold; together with $W\le\phi_+$ this gives $W_\kappa\le\phi_+$, while $W_\kappa\ge W\ge\phi_-$ always holds. Hence $W_\kappa$ is squeezed between the barriers, and by the two-sided initial control [F1] it satisfies the relaxed initial condition; so $W_\kappa\in\mathcal W$, contradicting maximality because $W_\kappa$ exceeds $W$ at the point supplied by the bump. Therefore $W_*$ is a viscosity supersolution. [step 1.1, F1, F2]

3.1 Comparison, continuity and uniqueness. The upper envelope $W^*=W$ is a bounded upper semicontinuous subsolution and $W_*$ is a bounded lower semicontinuous supersolution; both carry the datum $u_0$ in the relaxed sense by [F1] applied to $W$, which lies between the barriers. Comparison [F3] gives $W^*\le W_*$; since always $W_*\le W\le W^*$, all three coincide, so $W$ is continuous and is a viscosity solution of the Cauchy problem with datum $u_0$. For uniqueness, let $V$ be any, possibly discontinuous, viscosity solution with $\phi_-\le V\le\phi_+$. By definition $V^*$ is a bounded upper semicontinuous subsolution and $V_*$ a bounded lower semicontinuous supersolution, both with datum $u_0$. Continuity of the barriers and $\phi_-\le V\le\phi_+$ give $\phi_-\le V_*\le V\le V^*\le\phi_+$, so $V^*$ belongs to $\mathcal W$ and hence $V^*\le W$ by maximality. Comparison between the subsolution $W$ and supersolution $V_*$ gives $W\le V_*$. Thus $W\le V_*\le V\le V^*\le W$, so all are equal. [step 1.1, step 2.1, F1, F3] ∎

## Remarks

- **What the barriers do.** They provide the nonempty admissible class, keep $W$ locally bounded above, control the initial face in both directions through [[lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers]], and supply the strict inequality $W_*(\hat z)<\phi_+(\hat z)$ used to keep the bump below the upper barrier.
- **Choice.** The family is defined by a formula and the supremum is taken in $\overline{\mathbb R}$; no member of the family is selected, and the bump argument uses one compact maximiser at a time.
