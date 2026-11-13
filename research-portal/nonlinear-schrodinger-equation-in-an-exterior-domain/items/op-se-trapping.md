---
id: op-se-trapping
kind: open-problem
domain: mathematics
title: Nonlinear control for trapping obstacle configurations
status: draft
deps:
  - def-se-geometry
  - def-se-cubic-boundary-system
  - def-se-internal-systems
  - ex-se-two-obstacle-trapping
  - math:def-axiom-of-choice
  - def-se-boundary-state-space
  - lem-se-collar-traces-and-partial-extension
  - def-se-foundation-time-function-spaces
  - def-se-foundation-distributional-equation
  - math:def-locally-integrable-function-as-a-regular-distribution
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-cubic-boundary-system: mathematical-premise
  def-se-internal-systems: mathematical-premise
  ex-se-two-obstacle-trapping: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-boundary-state-space: mathematical-premise
  lem-se-collar-traces-and-partial-extension: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  math:def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 22, §5.2(E); page 4, Theorems 1.1 and 1.3 and Corollary 1.6
      statement: The authors ask whether their nonlinear control results extend to
        trapping geometries, noting linear outer-boundary controllability with
        derivative loss for some strictly convex obstacle configurations and the
        need to handle that loss in the nonlinear perturbation argument.
      hypotheses: The cited nonlinear results concern connected exterior domains,
        dimensions two and three, regularities one and two, and small data near
        zero under non-trapping; the question asks about extensions to suitable
        trapping configurations.
      reading_limits: The frozen article passages were read for the question and its
        stated context. The cited linear papers were not independently checked
        here, and no independent current-status or worldwide novelty review is
        claimed.
dependency_level: 14
---

## Open problem

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and consider a compact smooth obstacle $\Theta\subset\mathbb R^n$ with connected exterior $\Omega=\mathbb R^n\setminus\Theta$, allowing trapping. In particular, one may consider suitable configurations of disjoint strictly convex obstacles; strict convexity means that the open segment between distinct points of a body lies in its interior. For $R_0$ with $\Theta\subset B_{R_0}(0)$, set $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$.

Can nonlinear control results analogous to those in the article be established for suitable trapping configurations? For example, for $T>0$ and $s\in\{1,2\}$, determine conditions under which sufficiently small initial and target states in $H^s(\Omega_0)$ with zero trace on $\Gamma_2$ can be joined by a solution in $C([0,T];H^s(\Omega_0))$ of the cubic Dirichlet problem, with control $u|_{\Gamma_1}\in C([0,T];H^{s-1/2}(\Gamma_1))$. The cubic equation is $iu_t+\Delta u+\lambda|u|^2u=0$, with real nonzero $\lambda$; the equation is understood distributionally and boundary values as traces. An analogous question concerns the quintic nonlinearity $\lambda|u|^4u$.

Here $H^s(\Omega_0)$ uses complex scalars and the $L^2$ Bessel-potential restriction space with its quotient norm. For $j\in\{1,2\}$, $H^r(\Gamma_j)$, $r\in\{1/2,3/2\}$, uses the sum of squared whole-space $H^r(\mathbb R^{n-1})$ norms of localized coordinate representatives in a finite smooth atlas and partition; for multiple boundary components the sum also runs over the components. The value trace is the bounded map $\gamma_j:H^s(\Omega_0)\to H^{s-1/2}(\Gamma_j)$ extending smooth restriction. Thus the inner condition is $\gamma_2u(t)=0$ and the outer control is $\gamma_1u(t)$; initial and terminal states are values of the norm-continuous path at $0$ and $T$. The notation $C([0,T];X)$ means norm-continuous $X$-valued maps with the supremum norm.

For the boundary question put $Q=(0,T)\times\Omega_0$. The distributional solution condition requires measurable representatives with $u,|u|^{m-1}u\in L^1_{\mathrm{loc}}(Q)$ and the identity
$$\int_Q\left(-iu\,\partial_t\eta+u\,\Delta_x\eta+\lambda|u|^{m-1}u\,\eta\right)\,dt\,dx=0\qquad\bigl(\eta\in C_c^\infty(Q;\mathbb C)\bigr),$$
where $m=3$ for the cubic question and $m=5$ for its quintic variant. Pairings are complex bilinear, without conjugating $\eta$. The initial, terminal and boundary conditions above are imposed separately from this interior identity.

Another possible extension asks for small-data exact internal control of the corresponding exterior equations, with a forcing $\varphi h$ supported away from the obstacle, in suitable state and control spaces. Exact control here means finding a control and an admissible solution joining each sufficiently small initial and target pair in the stated spaces. These are questions about suitable geometries and functional settings, not assertions that every trapping obstacle admits control or that the same spaces must suffice.

## Facts & Assumptions

[F1] [[def-se-geometry]] supplies the compact smooth obstacle and truncated exterior notation. Its separately stated non-trapping part of hypothesis (H) is not imposed in this question.

[F2] [[def-se-cubic-boundary-system]] supplies the cubic equation and outer Dirichlet boundary-control terminology. [[def-se-internal-systems]] supplies the exterior cubic and quintic equations and the cutoff forcing; it assumes [[math:def-axiom-of-choice]].

[F3] [[ex-se-two-obstacle-trapping]] gives a periodic reflected ray between two disjoint smooth strictly convex bodies with connected exterior. It is an example of trapping, not a controllability result.

[F4] [[def-se-boundary-state-space]] supplies the complex restriction-quotient $H^s(\Omega_0)$ convention and the zero inner trace condition, under AC. Only its smooth-obstacle geometry and function-space definitions are used here, without imposing non-trapping.

[F5] [[lem-se-collar-traces-and-partial-extension]] supplies the finite-atlas boundary spaces and bounded value traces for $1\le s\le2$. Apply its boundary-trace assertion to the bounded smooth $\Omega_0$ and its compact smooth boundary components. In particular it supplies $H^1\to H^{1/2}$ and $H^2\to H^{3/2}$, independently of any control result or non-trapping condition.

[F6] [[def-se-foundation-time-function-spaces]] supplies the norm-continuous path convention and its supremum norm.

[F7] [[def-se-foundation-distributional-equation]] supplies complex space-time test functions, distributions and distributional derivatives. [[math:def-locally-integrable-function-as-a-regular-distribution]] supplies the bilinear integral pairing for the locally integrable terms. With these conventions, the minus sign on the test-function time derivative and the plus sign on its spatial Laplacian specify the displayed distributional equation. Local integrability is part of the admissible-solution formulation, not a claim that arbitrary distributions have nonlinear powers.

## Status

In §5.2(E), the article presents the extension to trapping obstacles as an open question. It reports linear outer-boundary controllability with a loss of derivatives for some strictly convex trapping configurations and identifies handling that loss in the nonlinear perturbation argument as the issue for the proposed extension. The article's cited linear results are reported here as its background attribution, not imported as independently verified premises. This item records the status in the frozen article; it does not certify the present state of the literature or prove either controllability or its failure.
