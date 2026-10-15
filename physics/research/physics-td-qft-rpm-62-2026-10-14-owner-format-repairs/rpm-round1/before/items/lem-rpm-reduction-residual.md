---
id: lem-rpm-reduction-residual
kind: lemma
title: "Conditional finite-interval LAD to LL residual"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-rpm-ll-reduced-ode
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  lem-rpm-ll-reduced-ode: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
sources:
  references:
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §76, printed pp. 226–229. This source motivates reduction of order; the uniform conditional estimate below is proved directly."
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2, Eqs. (2.1)–(2.6). The source discusses perturbative order reduction and does not supply the uniform family bounds assumed here."
verification: {}
physical_scope: "Conditional uniform residual estimate for regular flat LAD curve families already satisfying stated small-defect and bounded-coefficient hypotheses. It proves neither existence of such families nor global convergence of LAD trajectories to LL trajectories."
empirical_premises: []
---

## Statement

Use the flat definitions $f_0$, $B$, and $\Pi_U$ of [[lem-rpm-ll-reduced-ode]]. Let $I=[\tau_-,\tau_+]$ with $\tau_-<\tau_+$ be a common compact proper-time interval, and suppose each curve below is $C^3$ on an open neighborhood of $I$. For each $0<\varepsilon\leq\varepsilon_*$, let $x_\varepsilon:I\to A$ be a curve in affine Minkowski space with $U_\varepsilon=\dot x_\varepsilon$, $a_\varepsilon=\dot U_\varepsilon$, and $\eta(U_\varepsilon,U_\varepsilon)=-c^2$. Let $F$ be a fixed $C^2$ two-form on a neighborhood of the curves, fix a constant $\alpha_\varepsilon\in\mathbb R$ for each $\varepsilon$, and set $f_{0,\varepsilon}=\alpha_\varepsilon F(U_\varepsilon)$ and $\delta_\varepsilon:=a_\varepsilon-f_{0,\varepsilon}$. Suppose every curve satisfies the flat LAD equation

$$
a_\varepsilon=f_{0,\varepsilon}+\varepsilon\left(\dot a_\varepsilon-\frac{\eta(a_\varepsilon,a_\varepsilon)}{c^2}U_\varepsilon\right).
$$

Use the Euclidean norm of inertial components and its induced operator norm. In the SI interpretation $\varepsilon$ is a time and $\alpha_\varepsilon=q/m$; all constants and field norms carry the corresponding units. Assume constants $A,M,P,C_0,C_1\geq0$, independent of $\varepsilon$, satisfy on $I$

$$
|\alpha_\varepsilon|\leq A,\quad \|F\|_{\rm op}\leq M,\quad
\|\Pi_{U_\varepsilon}\|_{\rm op}\leq P,\quad
\|\delta_\varepsilon\|\leq C_0\varepsilon,\quad
\|\dot\delta_\varepsilon\|\leq C_1\varepsilon.
$$

Then throughout $I$,

$$
\left\|a_\varepsilon-\left(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon\right)\right\|
\leq P\left(C_1+AM C_0\right)\varepsilon^2.
$$

The estimate is conditional on the displayed common-interval and uniform bounds. It does not establish that regular LAD solutions satisfying them exist, nor does it imply global-in-time convergence.

## Facts & Assumptions

**Given:** The flat LL definitions from [[lem-rpm-ll-reduced-ode]], a common compact interval, the stated $C^3$ normalized curves, fixed $C^2$ field, and all five uniform bounds.

[A1] Each curve obeys the displayed LAD equation, with $\varepsilon>0$ serving as its radiation-time parameter.

[A2] $\eta(U_\varepsilon,U_\varepsilon)=-c^2$ throughout $I$; all derivatives below are ordinary proper-time derivatives in the flat inertial chart.

[F1] [[lem-rpm-ll-reduced-ode]]: $f_0^a=\alpha F^a{}_bU^b$, $B^a=\alpha(\partial_bF^a{}_c)U^bU^c+\alpha^2F^a{}_bF^b{}_cU^c$, and $\Pi_U{}^a{}_b=\delta^a_b+U^aU_b/c^2$.

[F2] [[thm-algebra-of-derivatives]] and [[thm-chain-rule-for-total-derivatives]]: differentiating $F(x(\tau))U(\tau)$ uses the coordinate product and chain rules.

## Proof

1.1 Differentiating $\eta(U_\varepsilon,U_\varepsilon)=-c^2$ gives $\eta(U_\varepsilon,a_\varepsilon)=0$. Differentiating this identity once more gives $\eta(U_\varepsilon,\dot a_\varepsilon)=-\eta(a_\varepsilon,a_\varepsilon)$. By [F1], $\Pi_{U_\varepsilon}\dot a_\varepsilon=\dot a_\varepsilon+U_\varepsilon\eta(U_\varepsilon,\dot a_\varepsilon)/c^2=\dot a_\varepsilon-\eta(a_\varepsilon,a_\varepsilon)U_\varepsilon/c^2$. Therefore [A1] is exactly $a_\varepsilon=f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}\dot a_\varepsilon$. [given, A1, A2, F1, F2, algebra]

1.2 The product and chain rules [F2], with $\dot x=U$ and $\dot U=a$, give

$$
\dot f_{0,\varepsilon}^a=\alpha_\varepsilon(\partial_bF^a{}_c)U^bU^c+\alpha_\varepsilon F^a{}_b a_\varepsilon^b,
\qquad
B_\varepsilon^a=\alpha_\varepsilon(\partial_bF^a{}_c)U^bU^c+\alpha_\varepsilon F^a{}_b f_{0,\varepsilon}^b.
$$

Subtracting the equalities and using $\delta_\varepsilon=a_\varepsilon-f_{0,\varepsilon}$ gives $\dot f_{0,\varepsilon}-B_\varepsilon=\alpha_\varepsilon F\delta_\varepsilon$. [given, A2, F1, F2, step 1.1]

2.1 Subtract $f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon$ from the reformulated LAD equation in step 1.1. Since $\dot a-B=\dot\delta+(\dot f_0-B)$, step 1.2 yields

$$
a_\varepsilon-(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon)
=\varepsilon\Pi_{U_\varepsilon}(\dot\delta_\varepsilon+\alpha_\varepsilon F\delta_\varepsilon).
$$

Taking Euclidean norms and applying the assumed bounds gives at each $\tau\in I$

$$
\left\|a_\varepsilon-(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon)\right\|
\leq\varepsilon P(C_1\varepsilon+A M C_0\varepsilon)
=P(C_1+AM C_0)\varepsilon^2.
$$

The constants do not depend on $\varepsilon$ or $\tau$, so the estimate is uniform on $I$. [given, A1, F1, step 1.1, step 1.2, norm inequality, algebra] ∎
