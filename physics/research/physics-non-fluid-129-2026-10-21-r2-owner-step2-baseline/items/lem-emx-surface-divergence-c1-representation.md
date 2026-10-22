---
id: lem-emx-surface-divergence-c1-representation
kind: lemma
title: "Continuous density of the weak surface divergence for a C1 tangent field"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-countable-choice
  - def-em-surface-distribution
  - def-emx-surface-divergence
  - def-euclidean-inner-product
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-em-surface-density-localization
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-by-parts
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-surface-distribution: mathematical-premise
  def-emx-surface-divergence: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-em-surface-density-localization: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-integration-by-parts: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Section 3.2, PDF p. 5, introduces intrinsic surface divergence/curl; the coordinate density formula and global continuous representative are proved here from the surface-measure interface."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $S\subset\mathbb R^3$ be a compact embedded $C^2$ hypersurface without manifold boundary, with surface measure $dS$ and a chosen unit normal. Let $K$ be a $C^1$ tangential vector field on $S$, meaning that its two coordinate components in every $C^2$ surface chart are $C^1$. Then the weak surface divergence $\operatorname{Div}_S K$ defined earlier has a unique continuous density $g:S\to\mathbb R$ such that

$$\langle\operatorname{Div}_S K,\phi\rangle=\int_Sg\phi\,dS\qquad\text{for every }\phi\in C^1(S).$$

In a chart $X:V\subseteq\mathbb R^2\to S$, write $K=K^1\partial_1X+K^2\partial_2X$ and let $J_X=\sqrt{\det(\partial_aX\cdot\partial_bX)_{a,b=1}^2}$ be its surface-area density. The representative satisfies

$$g(X(u))=J_X(u)^{-1}\sum_{a=1}^2\partial_a\bigl(J_X(u)K^a(u)\bigr).$$

This unique continuous representative is denoted $\operatorname{div}_S K$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the surface $S$, its surface measure, the tangential $C^1$ field $K$, and the definition of $\operatorname{Div}_S K$.

[F1] A compact embedded $C^2$ hypersurface has finitely many regular $C^2$ charts covering it, the surface measure is finite and independent of the chosen charts, and each chart area density $J_X$ is positive and $C^1$. [[def-em-surface-distribution]] [[def-surface-integral-on-a-compact-c-one-hypersurface]] [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]

[F2] The tangent plane has the Euclidean inner product; the coordinate tangent vectors $\partial_1X,\partial_2X$ are linearly independent. [[def-euclidean-inner-product]] [[def-em-surface-distribution]]

[F3] Compactly supported $C^1$ functions in a coordinate chart satisfy ordinary integration by parts on a rectangle containing their support, with iterated integrals justified by Fubini. [[thm-integration-by-parts]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] If a compact set lies in an open set of Euclidean space, there is a smooth compactly supported cutoff in that open set equal to one on a neighborhood of the compact set. [[lem-test-function-cutoffs-and-euclidean-localization]]

[F5] A continuous density on $S$ whose pairing with every ambient smooth compactly supported test vanishes is zero pointwise. [[lem-em-surface-density-localization]]

## Proof

**Proof technique:** compute the weak divergence in one chart, patch the local continuous densities with a finite partition of unity, and use surface-density localization for uniqueness.

1.1 Fix a chart $X:V\to S$. Its coordinate tangent vectors are independent by [F2], so there are unique functions $K^a$ with $K=K^a\partial_aX$; their $C^1$ regularity is part of the stated tangent-field convention. The chart area density $J_X$ is positive and $C^1$ by [F1]. Therefore $ g_X(X(u)):=J_X(u)^{-1}\sum_{a=1}^2\partial_a(J_XK^a)(u) $ is continuous on the chart. [F1, F2, given, algebra]

2.1 Let $\phi\in C^1(S)$ have compact support in this chart. By the definition of the surface gradient, $K\cdot\nabla_S\phi=K^a\partial_a(\phi\circ X)$. The surface-area formula and [F3] give $ -\int_SK\cdot\nabla_S\phi\,dS=-\int_VJ_XK^a\partial_a(\phi\circ X)\,du=\int_V\partial_a(J_XK^a)(\phi\circ X)\,du=\int_Sg_X\phi\,dS. $ Here the repeated $a$ is summed over $1,2$; compact support lets each product $J_XK^a(\phi\circ X)$ extend by zero as a $C^1$ function, and integration by parts on a rectangle containing the support has no boundary term. Thus $g_X$ from step 1.1 represents $\operatorname{Div}_S K$ on this chart. [step 1.1, F1, F3, given, algebra]

3.1 Write the finite chart cover in [F1] as $S\cap O_j$, with each $O_j\subset\mathbb R^3$ open and contained in its chart domain. For every $x\in S$, choose one such $O_j$ and a ball around $x$ whose closure lies in $O_j$; [F4] supplies a smooth cutoff supported compactly in $O_j$ and equal to one on a smaller ball. Compactness of $S$ gives a finite subfamily of these smaller balls covering $S$. Group their cutoffs as $b_j$ by assigned chart, and let $b=\sum_jb_j$, which is positive on an open neighborhood of $S$. On that neighborhood set $\chi_j=b_j/b$. The restrictions to $S$ are smooth, sum to one, and each support is compactly contained in its assigned chart. Each $\chi_jg_j$ extends continuously by zero off its chart, so $g:=\sum_j\chi_jg_j$ is continuous on $S$. Applying step 2.1 to $\chi_j\phi$ and summing gives $ \int_Sg\phi\,dS=-\sum_j\int_SK\cdot\nabla_S(\chi_j\phi)\,dS=-\int_SK\cdot\nabla_S\phi\,dS, $ because $\sum_j\chi_j=1$ and $\sum_j\nabla_S\chi_j=0$. By the definition of $\operatorname{Div}_S K$, $g$ is a continuous density representing it. [F4, step 2.1, given, algebra]

4.1 If $g_1,g_2$ are continuous representatives, then $\int_S(g_1-g_2)\phi\,dS=0$ for every $\phi\in C^1(S)$, hence in particular for every restriction of an ambient test in $C_c^\infty(\mathbb R^3)$. Apply [F5] to $g_1-g_2$ to obtain $g_1=g_2$ pointwise on $S$. The local formula of step 1.1 is therefore independent of chart and equals the unique global representative. [F5, step 3.1, given, algebra] ∎

