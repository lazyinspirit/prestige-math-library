---
id: lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold
kind: lemma
title: Holonomic phase residuals control distance to the consistent phase manifold
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; finitely many local charts cover the compact set."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Fix a compact regular configuration chart from [[def-regular-holonomic-phase-space-and-dynamics]] and a compact momentum set. Use the Euclidean norm on $\mathbb R^{2d}$ for phase-state differences. Each point of its consistent phase set has a neighborhood $U_j$ with a smooth retraction $\Pi_j:U_j\to\mathcal M$ such that $\Pi_j$ is the identity on $U_j\cap\mathcal M$ and
$$\|\Pi_j(q,p)-(q,p)\|\le C_j\bigl(\|c(q)\|_2+\|J(q)M^{-1}p\|_2\bigr).$$
A finite number of these neighborhoods cover the compact phase set, so one constant works for all of them. In particular, residuals of sizes $O(h^4)$ and $O(h^3)$ admit a consistent restoration at distance $O(h^3)$, uniformly on the chart.

## Facts & Assumptions

**Given:** A compact regular chart, compact momentum set, and the smooth full-row-rank constraint data in the Statement.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $Q_{\mathrm{reg}}=\{q\in Q:\operatorname{rank}J(q)=m\}$, $A=JM^{-1}J^T$ is uniformly invertible on the compact chart, and $(q,p)\in\mathcal M$ means $q\in Q_{\mathrm{reg}}$ and $JM^{-1}p=0$.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: an invertible square derivative block gives a unique local $C^k$ graph for a $C^k$ zero-set equation; since $c$ is smooth, its local graph is smooth.

[F3] [[thm-chain-rule-for-total-derivatives]]: derivatives of a composite are obtained by composing the derivatives.

[F4] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex neighborhood gives the corresponding Lipschitz bound.

## Proof

1.1 At a point of the compact regular chart $K\subset Q_{\mathrm{reg}}$, permute coordinates as $q=(x,y)$ so $D_yc$ is an invertible $m\times m$ block. Apply [F2] for each finite regularity order; uniqueness makes these graphs agree locally, so the graph $y=\psi(x)$ is smooth. Write $\phi(x)=(x,\psi(x))$ and $T(x)=D\phi(x)$. Since $J(\phi(x))T(x)=0$ and both kernels have dimension $d-m$, $\operatorname{im}T=\ker J$. [F1, F2, algebra]

2.1 After shrinking to a convex coordinate neighborhood, $B(x)=D_yc(x,\psi(x))$ remains invertible and $\|B(x)^{-1}(D_yc(x,y)-B(x))\|\le\frac12$. Set $R_x(y)=c(x,y)-B(x)(y-\psi(x))$. Then $R_x(\psi(x))=0$ and the derivative of $B(x)^{-1}R_x$ has norm at most $\frac12$. The mean-value inequality [F4] gives $\|B(x)^{-1}R_x(y)\|\le\frac12\|y-\psi(x)\|$. Since $B^{-1}c=(y-\psi)+B^{-1}R_x(y)$, it follows that $\|q-\phi(x)\|=\|y-\psi(x)\|\le 2\|B(x)^{-1}\|\,\|c(q)\|$. Compactness makes the constant uniform on a finite chart cover. [F3, F4, step 1.1, algebra]

2.2 For $\bar q=\phi(x)$, put $G=T^TMT$ and define $\bar p=MTG^{-1}T^Tp$. Positive definiteness of $M$ and injectivity of $T$ make $G$ invertible; its smooth entries and positive determinant give a smooth inverse by $G^{-1}=\operatorname{adj}(G)/\det G$. Then $J(\bar q)M^{-1}\bar p=0$ and $T^T(p-\bar p)=0$. Since $\ker T^T$ and $\operatorname{im}J(\bar q)^T$ both have dimension $m$ and the latter is contained in the former, $p-\bar p=J(\bar q)^T\eta$ for a unique $\eta$. [F1, step 1.1, algebra]

3.1 The identity $J(\bar q)M^{-1}(p-\bar p)=A(\bar q)\eta$ and [F1] imply $\|p-\bar p\|\le C\|A(\bar q)^{-1}\|\bigl(\|J(q)M^{-1}p\|+\|J(\bar q)-J(q)\|\,\|M^{-1}p\|\bigr)$. The momentum set is bounded and $J$ is locally Lipschitz, so step 2.1 bounds the right side by $C(\|J(q)M^{-1}p\|+\|c(q)\|)$. Thus $\Pi(q,p)=(\bar q,\bar p)$ has the asserted distance bound and lies in $\mathcal M$. If $(q,p)\in\mathcal M$, then $\bar q=q$ and the formula for $\bar p$ returns $p$, so $\Pi$ is the identity there. By [F3] the coordinate formula is smooth, and it is the identity on the consistent phase set in this neighborhood. Shrink the finitely many neighborhoods so their closures lie in an open regular set; continuity keeps $A^{-1}$ and the required derivatives uniformly bounded there. A finite subcover gives finitely many such local retractions and a uniform constant. [F1, F3, step 2.1, step 2.2, algebra] ∎
