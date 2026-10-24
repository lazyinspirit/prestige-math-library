---
id: thm-surface-integrals-over-c-one-graphs
kind: theorem
title: 'Surface area, scalar integrals, and flux over a $C^1$ graph'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-jacobian-matrix-and-gradient, thm-surface-area-density-is-cross-product-norm, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, formulas 3.2.21-3.2.23'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3, Special Cases'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R^2$ be a compact Jordan parameter region and let $g$ be $C^1$ on a neighbourhood of $D$. For the graph $S=\{(x,y,g(x,y)):(x,y)\in D\}$ and every continuous real-valued function $q$ on $S$,
$$\operatorname{Area}(S)=\int_D\sqrt{1+\|\nabla g\|_2^2},\qquad \int_Sq\,dS=\int_Dq(x,y,g(x,y))\sqrt{1+\|\nabla g\|_2^2}.$$
For a continuous vector field $F$ on $S$, upward flux is
$$\int_DF(x,y,g(x,y))\cdot(-g_x,-g_y,1).$$
For the graph of $g$ over $D$, the downward flux is the negative of $\int_DF(x,y,g(x,y))\cdot(-g_x,-g_y,1)$.

## Facts & Assumptions

**Given:** The region $D$, function $g$, graph parametrization $\varphi(x,y)=(x,y,g(x,y))$, continuous scalar field $q$, and continuous vector field $F$.

[L1] Derivative algebra and the gradient definition give $\varphi_x=(1,0,g_x)$ and $\varphi_y=(0,1,g_y)$ ([[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]]).

[L2] A nonzero parameter cross product gives a regular patch, area density is its norm, and scalar integrals and flux use the corresponding parameter integrands ([[def-admissible-regular-parametrized-surface-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\varphi_x\times\varphi_y=(-g_x,-g_y,1)$, whose norm is $\sqrt{1+g_x^2+g_y^2}=\sqrt{1+\|\nabla g\|_2^2}$ and which never vanishes. The first two coordinates make $\varphi$ injective, so it is a regular patch by [L2]. [given, L1, L2, algebra]

2.1 Substituting the norm from step 1.1 into the area and scalar-integral definitions in [L2] gives the first two formulas. [step 1.1, L2]

2.2 Retaining the signed vector from step 1.1 in the flux definition gives the upward formula; the downward orientation uses its negative and therefore negates the integral. [step 1.1, L2]

3.1 These substitutions establish all four displayed formulas, including the orientation distinction. [step 2.1, step 2.2] ∎
