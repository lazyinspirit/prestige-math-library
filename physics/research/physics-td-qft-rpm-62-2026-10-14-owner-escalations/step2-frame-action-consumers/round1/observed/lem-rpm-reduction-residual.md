---
id: lem-rpm-reduction-residual
kind: lemma
title: "Conditional LAD-to-LL residual and finite-interval stability"
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
  - thm-continuous-implies-integrable
  - cor-integrability-of-absolute-values-products-and-lattice-operations
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-ftc-first-part
  - thm-derivative-of-exponential
  - thm-chain-rule
  - cor-mean-value-theorem
  - thm-exponential-is-strictly-increasing
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - lem-metrics-on-rn
  - def-metric-topology
  - def-metric-compactness
  - lem-of-triangle-inequality
dependency_roles:
  lem-rpm-ll-reduced-ode: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-integrability-of-absolute-values-products-and-lattice-operations: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-compactness: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
sources:
  references:
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §76, printed pp. 226–229. This source motivates reduction of order; the uniform conditional estimate below is proved directly."
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2, Eqs. (2.1)–(2.6). The source discusses perturbative order reduction and does not supply the uniform family bounds assumed here."
verification: {}
physical_scope: "Conditional finite-interval residual estimate for regular flat LAD families satisfying the stated small-defect and bounded-coefficient hypotheses, together with finite-time stability for two specified Lipschitz second-order vector fields on a common compact phase region with the same initial data. It proves neither existence of such LAD families nor convergence of LAD trajectories or global-in-time accuracy."
empirical_premises: []
---

## Statement

Use the flat definitions $f_0$, $B$, and $\Pi_U$ of [[lem-rpm-ll-reduced-ode]]. Let $I=[\tau_-,\tau_+]$ with $\tau_-<\tau_+$ be a common compact proper-time interval, and suppose each curve below is $C^3$ on an open neighborhood of $I$. For each $0<\varepsilon\leq\varepsilon_*$, let $x_\varepsilon:I\to A$ be a curve in affine Minkowski space with $U_\varepsilon=\dot x_\varepsilon$, $a_\varepsilon=\dot U_\varepsilon$, and $\eta(U_\varepsilon,U_\varepsilon)=-c^2$. Let $F$ be a fixed $C^2$ two-form on a neighborhood of the curves, fix a constant $\alpha_\varepsilon\in\mathbb R$ for each $\varepsilon$, and set $f_{0,\varepsilon}=\alpha_\varepsilon F(U_\varepsilon)$ and $\delta_\varepsilon:=a_\varepsilon-f_{0,\varepsilon}$. Suppose every curve satisfies the flat LAD equation

$$a_\varepsilon=f_{0,\varepsilon}+\varepsilon\left(\dot a_\varepsilon-\frac{\eta(a_\varepsilon,a_\varepsilon)}{c^2}U_\varepsilon\right).$$

Use the Euclidean norm of inertial components and its induced operator norm. In the SI interpretation $\varepsilon$ is a time and $\alpha_\varepsilon=q/m$; all constants and field norms carry the corresponding units. Assume constants $A,M,P,C_0,C_1\geq0$, independent of $\varepsilon$, satisfy on $I$

$$|\alpha_\varepsilon|\leq A,\quad \|F\|_{\rm op}\leq M,\quad \|\Pi_{U_\varepsilon}\|_{\rm op}\leq P,\quad \|\delta_\varepsilon\|\leq C_0\varepsilon,\quad \|\dot\delta_\varepsilon\|\leq C_1\varepsilon.$$

Then throughout $I$,

$$\left\|a_\varepsilon-\left(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon\right)\right\| \leq P\left(C_1+AM C_0\right)\varepsilon^2.$$

The estimate is conditional on the displayed common-interval and uniform bounds. It does not establish that regular LAD solutions satisfying them exist, nor does it imply global-in-time convergence.

For a separate finite-interval comparison, let $d\in\mathbb N$ with $d\geq1$, let $\Omega\subseteq\mathbb R^d\times\mathbb R^d$ be open in the topology of the usual Euclidean metric $d_2$ on $\mathbb R^{2d}$, and let $K\subseteq\Omega$ be compact for that metric. Let $T>0$ and $\tau_e,C,L\geq0$. Fix positive coordinate scales $s_j$ for the $2d$ phase coordinates and define $\|\xi\|_1:=\sum_{j=1}^{2d}|\xi_j|/s_j$ for $\xi\in\mathbb R^{2d}$. In a dimensional application choose the position and velocity scales consistently with one fixed time unit, so the two blocks of the lifted vector fields below have the same rate units. All constants use these fixed scales; in particular $L$ has units of inverse time, $LT$ is dimensionless, and $C\tau_e^2$ has the units of a phase-space rate. Let $A_{\tau_e},\widetilde A_{\tau_e}:\Omega\to\mathbb R^d$ be specified acceleration maps, and define the corresponding second-order phase vector fields

$$X_{\tau_e}(q,v):=(v,A_{\tau_e}(q,v)),\qquad \widetilde X_{\tau_e}(q,v):=(v,\widetilde A_{\tau_e}(q,v)).$$

All vector integrals in this comparison are taken componentwise as real Riemann integrals.

Assume that for all $z,z'\in K$,

$$\|X_{\tau_e}(z)-X_{\tau_e}(z')\|_1\leq L\|z-z'\|_1,\qquad \|\widetilde X_{\tau_e}(z)-\widetilde X_{\tau_e}(z')\|_1\leq L\|z-z'\|_1,$$

and that $\|X_{\tau_e}(z)-\widetilde X_{\tau_e}(z)\|_1\leq C\tau_e^2$ for every $z\in K$. If $z_1,z_2:[0,T]\to K$ are restrictions of $C^1$ maps on an open interval containing $[0,T]$, solve $\dot z_1=X_{\tau_e}(z_1)$ and $\dot z_2=\widetilde X_{\tau_e}(z_2)$ pointwise on $[0,T]$, and satisfy $z_1(0)=z_2(0)$, then

$$\sup_{0\leq t\leq T}\|z_1(t)-z_2(t)\|_1\leq C\tau_e^2T e^{LT}.$$

This stability claim assumes both solutions exist on the full interval and remain in the stated common region. It concerns only the two specified second-order systems; it is not an existence or convergence claim for the third-order LAD equation.

## Facts & Assumptions

**Given:** The flat LL definitions from [[lem-rpm-ll-reduced-ode]], a common compact interval, the stated $C^3$ normalized curves, fixed $C^2$ field, and all five uniform bounds. For the separate comparison, the phase space, common compact region, constants, vector fields, and solutions specified in the Statement.

[A1] Each curve obeys the displayed LAD equation, with $\varepsilon>0$ serving as its radiation-time parameter.

[A2] $\eta(U_\varepsilon,U_\varepsilon)=-c^2$ throughout $I$; all derivatives below are ordinary proper-time derivatives in the flat inertial chart.

[A3] For the comparison, $d\in\mathbb N$, $d\geq1$, $\Omega\subseteq\mathbb R^d\times\mathbb R^d$ is open in the $d_2$ topology, $K\subseteq\Omega$ is compact for $d_2$, $T>0$, and $\tau_e,C,L\geq0$; fixed phase-coordinate scales determine the stated $\ell^1$ norm and the displayed fields $X_{\tau_e},\widetilde X_{\tau_e}$.

[A4] Both fields are Lipschitz on $K$ with constant at most $L$, and their difference is bounded there by $C\tau_e^2$.

[A5] The comparison curves are restrictions of $C^1$ maps on an open interval containing $[0,T]$, take values in $K$ on $[0,T]$, solve their respective displayed ODEs pointwise there, and have the same initial state; hence $r(t)=\|z_1(t)-z_2(t)\|_1$ is continuous on $[0,T]$.

[F1] [[lem-rpm-ll-reduced-ode]]: $f_0^a=\alpha F^a{}_bU^b$, $B^a=\alpha(\partial_bF^a{}_c)U^bU^c+\alpha^2F^a{}_bF^b{}_cU^c$, and $\Pi_U{}^a{}_b=\delta^a_b+U^aU_b/c^2$.

[F2] [[thm-algebra-of-derivatives]] and [[thm-chain-rule-for-total-derivatives]]: differentiating $F(x(\tau))U(\tau)$ uses the coordinate product and chain rules.

[F3] [[thm-continuous-implies-integrable]] and [[thm-ftc-first-part]]: a continuous real function on $[0,T]$ is Riemann integrable, and the function $t\mapsto\int_0^t f(s)\,ds$ has derivative $f(t)$ for $t\in(0,T)$.

[F4] [[cor-integrability-of-absolute-values-products-and-lattice-operations]], [[thm-linearity-of-the-integral]], and [[thm-monotonicity-of-the-integral]]: absolute values of integrable functions are integrable, the integral is linear, and pointwise inequalities between integrable functions are preserved by integration. In particular, $|\int_0^t f|\leq\int_0^t|f|$ for continuous $f$ and $t\geq0$.

[F5] [[thm-chain-rule]], [[thm-derivative-of-exponential]], and [[thm-algebra-of-derivatives]]: the ordinary chain and product rules apply, and $(e^x)'=e^x$.

[F6] [[cor-mean-value-theorem]] and [[thm-exponential-is-strictly-increasing]]: a continuous function on a closed interval, differentiable in its interior, obeys the mean value theorem, and the real exponential is strictly increasing.

[F7] [[def-real-exponential-function-and-e]] and [[cor-exponential-reciprocal-and-positivity]]: $e^0=1$ and $e^x>0$ for every real $x$.

[F8] [[lem-metrics-on-rn]], [[def-metric-topology]], and [[def-metric-compactness]]: $d_2$ is the usual Euclidean metric, open subsets use its metric topology, and a compact subset is compact in the induced metric, meaning every open cover has a finite subcover.

[F9] [[lem-of-triangle-inequality]] and the stated $\ell^1$ norm: applying $|u+v|\leq|u|+|v|$ to each scaled coordinate and summing gives $\|\xi+\zeta\|_1\leq\|\xi\|_1+\|\zeta\|_1$.

## Proof

1.1 Differentiating $\eta(U_\varepsilon,U_\varepsilon)=-c^2$ gives $\eta(U_\varepsilon,a_\varepsilon)=0$. Differentiating this identity once more gives $\eta(U_\varepsilon,\dot a_\varepsilon)=-\eta(a_\varepsilon,a_\varepsilon)$. By [F1], $\Pi_{U_\varepsilon}\dot a_\varepsilon=\dot a_\varepsilon+U_\varepsilon\eta(U_\varepsilon,\dot a_\varepsilon)/c^2=\dot a_\varepsilon-\eta(a_\varepsilon,a_\varepsilon)U_\varepsilon/c^2$. Therefore [A1] is exactly $a_\varepsilon=f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}\dot a_\varepsilon$. [given, A1, A2, F1, F2, algebra]

2.1 The product and chain rules [F2], with $\dot x=U$ and $\dot U=a$, give $$\dot f_{0,\varepsilon}^a=\alpha_\varepsilon(\partial_bF^a{}_c)U^bU^c+\alpha_\varepsilon F^a{}_b a_\varepsilon^b, \qquad B_\varepsilon^a=\alpha_\varepsilon(\partial_bF^a{}_c)U^bU^c+\alpha_\varepsilon F^a{}_b f_{0,\varepsilon}^b.$$ Subtracting the equalities and using $\delta_\varepsilon=a_\varepsilon-f_{0,\varepsilon}$ gives $\dot f_{0,\varepsilon}-B_\varepsilon=\alpha_\varepsilon F\delta_\varepsilon$. [given, A2, F1, F2, step 1.1]

3.1 Subtract $f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon$ from the reformulated LAD equation in step 1.1. Since $\dot a-B=\dot\delta+(\dot f_0-B)$, step 2.1 yields $$a_\varepsilon-(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon) =\varepsilon\Pi_{U_\varepsilon}(\dot\delta_\varepsilon+\alpha_\varepsilon F\delta_\varepsilon).$$ Taking Euclidean norms and applying the assumed bounds gives at each $\tau\in I$ $$\left\|a_\varepsilon-(f_{0,\varepsilon}+\varepsilon\Pi_{U_\varepsilon}B_\varepsilon)\right\| \leq\varepsilon P(C_1\varepsilon+A M C_0\varepsilon) =P(C_1+AM C_0)\varepsilon^2.$$ The constants do not depend on $\varepsilon$ or $\tau$, so the estimate is uniform on $I$. [given, A1, F1, step 1.1, step 2.1, algebra]

4.1 Put $\delta:=C\tau_e^2$ and $r(t):=\|z_1(t)-z_2(t)\|_1$. For each coordinate component, the pointwise ODEs and equality of initial data give by [F3] $$(z_1-z_2)(t)=\int_0^t\bigl(X_{\tau_e}(z_1(s))-\widetilde X_{\tau_e}(z_2(s))\bigr)\,ds.$$ Apply the scalar integral bound of [F4] to each component and add the finitely many inequalities using linearity; then split the integrand as $X_{\tau_e}(z_1)-X_{\tau_e}(z_2)+X_{\tau_e}(z_2)-\widetilde X_{\tau_e}(z_2)$. The field assumptions and [F9] give $$r(t)\leq\int_0^t\|X_{\tau_e}(z_1(s))-\widetilde X_{\tau_e}(z_2(s))\|_1\,ds\leq L\int_0^t r(s)\,ds+\delta t.$$ [A3, A4, A5, F3, F4, F9]

5.1 If $L=0$, step 4.1 gives $r(t)\leq\delta t\leq\delta T=\delta T e^{LT}$ by [F7]. [step 4.1, A4, F7]

5.2 Suppose $L>0$ and define $G(t):=\delta t+L\int_0^t r(s)\,ds$. The function $r$ is continuous, so [F3] applies; step 4.1 gives $r\leq G$, while [F3] gives $G'(t)=\delta+Lr(t)\leq\delta+LG(t)$ for $0<t<T$. [step 4.1, A3, A5, F3]

6.1 Define $H(t):=e^{-Lt}(G(t)+\delta/L)$. By [F5], [F7], and $G'\leq\delta+LG$ from step 5.2, $H'(t)=e^{-Lt}(G'(t)-LG(t)-\delta)\leq0$ on $(0,T)$. For each $0<t\leq T$, the mean value theorem [F6] on $[0,t]$ gives $H(t)\leq H(0)=\delta/L$, hence $r(t)\leq G(t)\leq\delta(e^{Lt}-1)/L$. [step 5.2, F5, F6, F7]

6.2 For $L,t>0$, the mean value theorem and monotonicity of the exponential [F6] give $e^{Lt}-1\leq Lt e^{Lt}$. Therefore step 6.1 yields $r(t)\leq\delta t e^{Lt}\leq\delta T e^{LT}$; the same bound holds at $t=0$ by $r(0)=0$. This proves the estimate in the $L>0$ case; together with step 5.1, it covers all $L\geq0$. Substituting $\delta=C\tau_e^2$ gives the asserted uniform stability bound. [step 5.1, step 6.1, A4, F6] ∎

