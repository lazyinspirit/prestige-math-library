---
id: lem-emx-surface-divergence-c1-representation
kind: lemma
title: "Continuous density of the weak surface divergence for a C1 tangent field"
status: published
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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

[F4] If a compact set lies in an open set of Euclidean space, there is a smooth compactly supported cutoff in that open set, with values in $[0,1]$, equal to one on a neighborhood of the compact set. [[lem-test-function-cutoffs-and-euclidean-localization]]

[F5] A continuous density on $S$ whose pairing with every ambient smooth compactly supported test vanishes is zero pointwise. [[lem-em-surface-density-localization]]

## Proof

**Proof technique:** compute the weak divergence in one chart, patch the local continuous densities with a finite partition of unity, and use surface-density localization for uniqueness.

1.1 Fix a chart $X:V\to S$. Its coordinate tangent vectors are independent by [F2], so there are unique functions $K^a$ with $K=K^a\partial_aX$; their $C^1$ regularity is part of the stated tangent-field convention. The chart area density $J_X$ is positive and $C^1$ by [F1]. Therefore $ g_X(X(u)):=J_X(u)^{-1}\sum_{a=1}^2\partial_a(J_XK^a)(u) $ is continuous on the chart. [F1, F2, given, algebra]

2.1 Let $\phi\in C^1(S)$ have compact support in this chart. By the definition of the surface gradient, $K\cdot\nabla_S\phi=K^a\partial_a(\phi\circ X)$. The surface-area formula and [F3] give $ -\int_SK\cdot\nabla_S\phi\,dS=-\int_VJ_XK^a\partial_a(\phi\circ X)\,du=\int_V\partial_a(J_XK^a)(\phi\circ X)\,du=\int_Sg_X\phi\,dS. $ Here the repeated $a$ is summed over $1,2$; compact support lets each product $J_XK^a(\phi\circ X)$ extend by zero as a $C^1$ function, and integration by parts on a rectangle containing the support has no boundary term. Thus $g_X$ from step 1.1 represents $\operatorname{Div}_S K$ on this chart. [step 1.1, F1, F3, given, algebra]

3.1 If $S$ is empty, the unique empty function is the asserted density and every chart assertion is vacuous; hence assume $S$ is nonempty. Write the finite chart cover in [F1] as $S\cap O_j$, with $O_j\subset\mathbb R^3$ open and $S\cap O_j$ the corresponding chart image. All balls $B(x,r)$ with $x\in S$ and $\overline B(x,2r)\subset O_j$ for some $j$ cover $S$. Take a finite subcover, assign a chart to each of its finitely many balls, and apply [F4] to each closed inner ball in its assigned $O_j$. This gives finitely many nonnegative ambient cutoffs; group their sums as $b_j$ by chart and put $b=\sum_jb_j$. Then $b>0$ on a neighborhood of $S$, and $\chi_j=b_j/b$ there restricts to a $C^1(S)$ function, with support compactly contained in its chart, such that $\sum_j\chi_j=1$. Each $\chi_jg_j$ extends continuously by zero off its chart, so $g:=\sum_j\chi_jg_j$ is continuous on $S$. For every $\phi\in C^1(S)$, applying step 2.1 to $\chi_j\phi$ and summing gives $\int_Sg\phi\,dS=-\sum_j\int_SK\cdot\nabla_S(\chi_j\phi)\,dS=-\int_SK\cdot\nabla_S\phi\,dS$, because $\sum_j\nabla_S\chi_j=0$. Thus $g$ represents $\operatorname{Div}_S K$. The construction makes only finitely many choices. [F1, F4, step 2.1, given, algebra]

4.1 Fix any chart image $U=S\cap O$ and $x\in U$. By [F4], choose $\eta\in C_c^\infty(O)$ equal to one near $x$. The function $h=\eta(g_X-g)$ on $U$, extended by zero to $S\setminus U$, is continuous on $S$, since its support is compactly contained in $U$. For every ambient test $\psi\in C_c^\infty(\mathbb R^3)$, the restriction of $\eta\psi$ has compact support in $U$. Steps 2.1 and 3.1 therefore give $\int_Sh\psi\,dS=\int_U(g_X-g)\eta\psi\,dS=0$. By [F5], $h=0$ on $S$, and $\eta(x)=1$ gives $g_X(x)=g(x)$. Since the chart and point were arbitrary, the global density has the stated formula in every chart. [F4, F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $g_1,g_2$ are continuous representatives, then $\int_S(g_1-g_2)\phi\,dS=0$ for every $\phi\in C^1(S)$, hence for every restriction of an ambient test in $C_c^\infty(\mathbb R^3)$. Applying [F5] to $g_1-g_2$ gives pointwise equality. Together with step 4.1 this proves uniqueness and chart independence of the asserted continuous representative. [F5, step 3.1, step 4.1, given, algebra] ∎

