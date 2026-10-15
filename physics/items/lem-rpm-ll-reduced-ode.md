---
id: lem-rpm-ll-reduced-ode
kind: lemma
title: "Reduced-order Landau–Lifshitz local ODE and mass shell"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-time-orientation-and-future-causal-sets
  - def-directional-and-partial-derivatives
  - cor-mean-value-theorem
  - thm-intermediate-value
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-picard-lindelof-local-existence-and-uniqueness
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
sources:
  references:
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §§75–76, printed pp. 222–229. The source uses Gaussian conventions; the carrier gives its own SI coefficient and tensor convention."
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2, Eqs. (2.1)–(2.6), and Appendix A, Eqs. (A.1)–(A.4). The source motivates reduction of order; the local existence and shell proof below is independent."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
physical_scope: "Mathematical local-existence and shell-preservation result for the explicitly displayed reduced-order vector field on flat affine Minkowski space. It asserts no global existence, physical truth, or approximation accuracy."
empirical_premises: []
---

## Statement

Let $(A,V,\eta,C^+)$ be an oriented, time-oriented affine Minkowski space of dimension four with signature $(-,+,+,+)$, and fix an inertial chart $(x^0,x^1,x^2,x^3)$ with $x^0=ct$, $c>0$. Let $O\subseteq A$ be open and let $F$ be a $C^2$ alternating covariant two-tensor on $O$. In this chart write $F^a{}_b:=\eta^{ac}F_{cb}$ and let $\partial_b$ denote the coordinate partial derivative. Fix constants $\alpha\in\mathbb R$ and $\tau_e\geq0$. For every $U\in V$, define

$$\Pi_U{}^a{}_b:=\delta^a_b+\frac{U^aU_b}{c^2},\qquad f_0^a(x,U):=\alpha F^a{}_b(x)U^b,$$

$$B^a(x,U):=\alpha(\partial_bF^a{}_c)(x)U^bU^c +\alpha^2F^a{}_b(x)F^b{}_c(x)U^c, \qquad a_{\rm LL}^a(x,U):=f_0^a(x,U)+\tau_e\Pi_U{}^a{}_bB^b(x,U).$$

For the physical interpretation, $x^a$ are in metres, $\tau$ is in seconds, $c$ is in metres per second, $U$ is in metres per second, $\alpha=q/m$, and $\tau_e$ is a time. Here a **proper-time parameter** means that the parameter is measured in seconds and the four-velocity is normalized by $\eta(U,U)=-c^2$; define the future unit shell by $\mathcal S^+:=\{U\in C^+:\eta(U,U)=-c^2\}$. For each initial datum $(x_0,U_0)\in O\times V$ with $U_0\in\mathcal S^+$, the system

$$\frac{dx^a}{d\tau}=U^a,\qquad \frac{dU^a}{d\tau}=a_{\rm LL}^a(x,U),\qquad (x(0),U(0))=(x_0,U_0)$$

has a unique local solution on an open proper-time interval about $0$. Along that interval $\eta(U,U)=-c^2$ and $U$ remains future directed. This is a local ODE statement: it makes no claim of global existence for arbitrary $F$.

## Facts & Assumptions

**Given:** The affine Minkowski and inertial-chart conventions above; $O$ open; $F\in C^2$; $c>0$; $\alpha\in\mathbb R$; $\tau_e\geq0$; and initial future unit timelike data.

[A1] $F$ is alternating, so $F_{ab}=-F_{ba}$, and the displayed field is the reduced-order LL vector field. The $C^2$ hypothesis is used so its first derivatives are $C^1$.

[F1] [[def-sr-affine-minkowski-model]]: the affine metric has signature $(-,+,+,+)$ and the time orientation selects a future timelike cone.

[F2] [[def-time-orientation-and-future-causal-sets]] and [[def-inertial-frame-and-inertial-chart]]: the future timelike cone is the convex component containing the frame’s future basis vector $e_0$.

[F3] [[def-directional-and-partial-derivatives]]: $\partial_b$ denotes the coordinate partial derivative in direction $x^b$.

[F4] [[thm-algebra-of-derivatives]] and [[thm-chain-rule]]: sums, products, and compositions of differentiable coordinate functions obey the sum, product, and chain rules.

[F5] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous locally Lipschitz vector field on an open Euclidean state domain has a unique local solution through each initial state.

[F6] [[thm-heine-borel-rn]] and [[thm-extreme-value-metric]]: a closed bounded coordinate box in finite-dimensional Euclidean space is compact, and a continuous derivative matrix is bounded on it.

[F7] [[cor-mean-value-theorem]]: a differentiable scalar function continuous on a closed interval satisfies the mean value theorem.

[F8] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

## Proof

1.1 Antisymmetry gives $\eta(U,f_0)=\alpha U^aF_{ab}U^b=0$. On the unit shell, $U_a\Pi_U{}^a{}_b=U_b+(\eta(U,U)/c^2)U_b=0$, so $\eta(U,a_{\rm LL})=0$. The coordinate right-hand side $G=(U,a_{\rm LL}(x,U))$ is $C^1$ on the open state domain, identified by the inertial chart with an open subset of $\mathbb R^8$: $F$ is $C^2$, its partials [F3] are $C^1$, and the remaining factors are polynomial in $U$, using [F4]. In any closed rectangular box in this domain, [F6] bounds all first coordinate partial derivatives of the eight components of $G$ by a common constant $D$. For two states $z,z'$ in the box, change their coordinates one at a time; each intervening coordinate segment stays in the box, so [F7] gives $|G_i(z')-G_i(z)|\le D\sum_{j=1}^8|z'_j-z_j|\le\sqrt8D\|z'-z\|_2$ for each component $i$. Therefore $\|G(z')-G(z)\|_2\le8D\|z'-z\|_2$, proving that $G$ is locally Lipschitz. Thus [F5] gives a unique local full-state solution through $(x_0,U_0)$. [given, A1, F3, F4, F5, F6, F7, algebra]

1.2 For arbitrary $U$, antisymmetry gives $\eta(U,f_0)=0$ and the projector formula gives $\eta(U,\Pi_U B)=(1+\eta(U,U)/c^2)\eta(U,B)$. Along the full solution put $h(\tau)=\eta(U,U)+c^2$; then
$$h'(\tau)=2\eta(U,a_{\rm LL})=\frac{2\tau_e}{c^2}\eta(U,B)h(\tau).$$
The coefficient is continuous. The zero function solves this scalar linear IVP with $h(0)=0$, and the scalar vector field is locally Lipschitz in $h$ because it is linear in that variable, so uniqueness [F5] gives $h=0$ on the full common interval. Thus the proper-time normalization $\eta(U,U)=-c^2$ is preserved. [given, A1, F4, F5, algebra]

2.1 In the inertial frame of [F2], $e_0$ has coordinates $(1,0,0,0)$. For any future timelike $W$, convexity of $C^+$ makes $(1-s)e_0+sW$ timelike for $0\le s\le1$. A timelike vector cannot have zeroth component zero, since then its squared norm would be the nonnegative spatial norm square. If $W^0\le0$, the continuous zeroth component along this segment takes the value zero by [F8], a contradiction; hence every future timelike vector has $W^0>0$. Conversely, if $W$ is timelike and $W^0>0$, then $W^0>|\mathbf W|$ in this frame, and $(1-s)e_0+sW$ has time component $1-s+sW^0>s|\mathbf W|$ for every $0\le s\le1$. It is therefore timelike throughout and joins $e_0$ to $W$, so $W$ belongs to the same timelike component $C^+$. Thus a timelike vector is future exactly when its zeroth component is positive. Along the solution, the preserved shell makes $U$ timelike. Its initial vector is future, so $U^0(0)>0$; if $U^0$ became nonpositive, [F8] on the interval between that time and $0$ would force a zero component, again impossible. Hence $U$ remains future directed throughout the local interval. No continuation beyond this interval is asserted. [given, F1, F2, F8, step 1.2, algebra] ∎
