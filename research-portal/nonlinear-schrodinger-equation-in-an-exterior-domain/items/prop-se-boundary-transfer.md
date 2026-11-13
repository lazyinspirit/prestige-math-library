---
id: prop-se-boundary-transfer
kind: proposition
domain: mathematics
title: Transfer from exterior internal control to outer boundary control
status: draft
deps:
  - def-se-geometry
  - def-se-boundary-state-space
  - def-se-dirichlet-scale
  - prop-se-scale-identifications
  - def-se-internal-systems
  - def-se-cubic-boundary-system
  - def-se-foundation-distributional-equation
  - def-se-foundation-time-function-spaces
  - lem-se-3-11
  - lem-se-collar-traces-and-partial-extension
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:def-axiom-of-choice
  - math:def-operator-norm
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-boundary-state-space: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-cubic-boundary-system: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-3-11: mathematical-premise
  lem-se-collar-traces-and-partial-extension: mathematical-premise
  math:thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-operator-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 4 and 16–17, reduction and proofs of Theorem 1.1 and
        Corollary 1.6
dependency_level: 16
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$. Put $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$. Let $1\le s\le2$, $T>0$, $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Let $H^s$ denote the Bessel-potential restriction spaces, $H_D^s(\Omega)$ the Dirichlet spectral space, and $X^s(\Omega_0)=\{f\in H^s(\Omega_0):\gamma_{\Gamma_2}f=0\}$ with its inherited norm. Let $E:X^s(\Omega_0)\to H_D^s(\Omega)$ be a bounded linear extension satisfying $(Ef)|_{\Omega_0}=f$. Write $\|E\|=\sup\{\|Ef\|_{H_D^s}:f\in X^s(\Omega_0),\ \|f\|_{X^s}\le1\}$ for its operator norm.

Choose $R=R_0+1$ and a smooth cutoff $\varphi$ that vanishes on $|x|\le R$. Let $k:(0,T)\times\Omega\to\mathbb C$ be a measurable control. Suppose $u_0,u_1\in X^s(\Omega_0)$ and that an exterior controlled solution $v\in C([0,T];H_D^s(\Omega))$ satisfies $v(0)=Eu_0$, $v(T)=Eu_1$, $v|_{\partial\Omega}=0$, and $i\partial_t v+\Delta v+\lambda|v|^{m-1}v=\varphi k$ in distributions on $(0,T)\times\Omega$. Assume the displayed nonlinear and forcing terms are locally integrable functions so that their restrictions have their usual distributional meanings.

Then $u(t)=v(t)|_{\Omega_0}$ and $h(t)=\gamma_{\Gamma_1}v(t)$ satisfy $u\in C([0,T];H^s(\Omega_0))$, $h\in C([0,T];H^{s-1/2}(\Gamma_1))$, $u(0)=u_0$, $u(T)=u_1$, $\gamma_{\Gamma_2}u=0$ and $\gamma_{\Gamma_1}u=h$. Moreover $i\partial_tu+\Delta u+\lambda|u|^{m-1}u=0$ in distributions on $(0,T)\times\Omega_0$. Thus the outer Dirichlet boundary system is solved in this distributional and trace sense. The conclusion applies to both the cubic and quintic nonlinearities.

If, for some $\delta_1>0$, exterior controlled solutions of the stated kind exist for every pair of exterior endpoints of $H_D^s$ norm at most $\delta_1$, then they exist for the extensions of every pair of states with $X^s$ norms at most $\delta=\delta_1/\|E\|$; the boundary conclusion follows for each such pair.

## Statement references

[[def-se-geometry]]

[[def-se-boundary-state-space]]

[[def-se-dirichlet-scale]]

[[def-se-internal-systems]]

[[def-se-cubic-boundary-system]]

[[def-se-foundation-distributional-equation]]

[[def-se-foundation-time-function-spaces]]

[[lem-se-3-11]]

[[lem-se-collar-traces-and-partial-extension]]

[[math:def-axiom-of-choice]]

[[math:def-operator-norm]]

## Facts & Assumptions

**Given:** The hypotheses and data in the Statement.

[F1] The geometry and boundary pieces are those of [[def-se-geometry]]. The state space and its value trace are specified by [[def-se-boundary-state-space]], and [[def-se-dirichlet-scale]] specifies the spectral norm. Under [[math:def-axiom-of-choice]], [[lem-se-3-11]] supplies an extension $E$ with the stated boundedness and restriction identity.

[F2] Under the stated geometry and Choice, [[prop-se-scale-identifications]] identifies $H_D^s(\Omega)$ with $H^s(\Omega)\cap H_0^1(\Omega)$, with equivalent norms, for $1\le s\le2$. Here $H_0^1(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$.

[F3] The collar result [[lem-se-collar-traces-and-partial-extension]] supplies bounded value traces $H^s(G)\to H^{s-1/2}(S)$ for a smooth bounded domain and its boundary component, and for an interior smooth hypersurface. Its traces agree with the first-order trace in $L^2$ where both apply. The first-order trace is bounded on a bounded smooth domain by [[math:thm-sharp-trace-theorem-for-w-one-p]].

[F4] The controlled equation and the two power nonlinearities are specified by [[def-se-internal-systems]]; the outer Dirichlet boundary formulation is specified by [[def-se-cubic-boundary-system]]. Distributional equality and the need for separate trace and nonlinear-term hypotheses are specified by [[def-se-foundation-distributional-equation]]. Norm-continuous paths have the meaning in [[def-se-foundation-time-function-spaces]].

[F5] For bounded linear maps between these complex normed spaces, [[math:def-operator-norm]] defines the unit-ball supremum and gives $\|Ef\|_{H_D^s}\le\|E\|\|f\|_{X^s}$.

## Proof

**Given:** The hypotheses and data in the Statement.

[F1] The geometry and boundary pieces are those of [[def-se-geometry]]. The state space and its value trace are specified by [[def-se-boundary-state-space]], and [[def-se-dirichlet-scale]] specifies the spectral norm. Under [[math:def-axiom-of-choice]], [[lem-se-3-11]] supplies an extension $E$ with the stated boundedness and restriction identity.

[F2] Under the stated geometry and Choice, [[prop-se-scale-identifications]] identifies $H_D^s(\Omega)$ with $H^s(\Omega)\cap H_0^1(\Omega)$, with equivalent norms, for $1\le s\le2$. Here $H_0^1(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$.

[F3] The collar result [[lem-se-collar-traces-and-partial-extension]] supplies bounded value traces $H^s(G)\to H^{s-1/2}(S)$ for a smooth bounded domain and its boundary component, and for an interior smooth hypersurface. Its traces agree with the first-order trace in $L^2$ where both apply. The first-order trace is bounded on a bounded smooth domain by [[math:thm-sharp-trace-theorem-for-w-one-p]].

[F4] The controlled equation and the two power nonlinearities are specified by [[def-se-internal-systems]]; the outer Dirichlet boundary formulation is specified by [[def-se-cubic-boundary-system]]. Distributional equality and the need for separate trace and nonlinear-term hypotheses are specified by [[def-se-foundation-distributional-equation]]. Norm-continuous paths have the meaning in [[def-se-foundation-time-function-spaces]].

[F5] For bounded linear maps between these complex normed spaces, [[math:def-operator-norm]] defines the unit-ball supremum and gives $\|Ef\|_{H_D^s}\le\|E\|\|f\|_{X^s}$.



**Given:** The hypotheses and data in the Statement.

**Goal:** Establish the restricted equation, endpoint and boundary conditions, time regularity, and conditional transfer of the small-data radius.

1.1 By the scale identification, the inclusion $H_D^s(\Omega)\to H^s(\Omega)$ is bounded. Restriction from $H^s(\Omega)$ to $H^s(\Omega_0)$ is bounded: every whole-space representative of the former restricts to a representative of the latter, so the quotient norm cannot increase. Consequently $u$ is norm-continuous in $H^s(\Omega_0)$. Applying the bounded restriction to the endpoint equalities and using $E f|_{\Omega_0}=f$ gives $u(0)=u_0$ and $u(T)=u_1$. [F1, F2, F4, given]

2.1 The sphere $\Gamma_1$ lies in the interior of $\Omega$ and has a fixed bounded smooth collar disjoint from $\Theta$. Restriction to that collar and its interior trace are bounded from $H^s(\Omega)$ to $H^{s-1/2}(\Gamma_1)$. Hence $h$ is norm-continuous. The inner-side trace of $v|_{\Omega_0}$ agrees with this interior trace: both are the same classical restriction for smooth functions and the collar trace construction gives the common continuous extension. Thus $\gamma_{\Gamma_1}u=h$. [F2, F3, F4, step 1.1]

2.2 For each $t$, the scale identification gives $v(t)\in H_0^1(\Omega)$. Choose a sequence in $C_c^\infty(\Omega)$ converging to $v(t)$ in $H^1(\Omega)$. Its restrictions to $\Omega_0$ converge to $u(t)$ in $H^1(\Omega_0)$ and vanish near $\Gamma_2$. Boundedness of the first-order trace therefore makes the $H^{1/2}$ trace of $u(t)$ vanish on $\Gamma_2$. The order-$s$ trace agrees with the first-order trace as an $L^2$ boundary function, so the $H^{s-1/2}$ trace also equals zero. This holds at every time. [F2, F3, step 1.1]

3.1 Every test function compactly supported in $(0,T)\times\Omega_0$ extends by zero to a test function on $(0,T)\times\Omega$. Testing the exterior equation against that extension gives the restricted distributional equation: distributional derivatives commute with restriction, the locally integrable nonlinear expression restricts to $\lambda|u|^{m-1}u$, and $\varphi k=0$ on $\Omega_0$ because $R>R_0$. Together with the preceding trace and endpoint statements, this is the specified outer Dirichlet formulation for either $m=3$ or $m=5$. [F4, step 1.1, step 2.1, step 2.2, given]

4.1 The extension is nonzero: a nonzero smooth function compactly supported in $\Omega_0$ belongs to $X^s(\Omega_0)$ and is recovered by restriction after applying $E$. Thus $\|E\|>0$. If $\|u_j\|_{X^s}\le\delta_1/\|E\|$ for $j=0,1$, the operator-norm inequality gives $\|Eu_j\|_{H_D^s}\le\|E\|\|u_j\|_{X^s}\le\delta_1$. The assumed exterior existence applies to these endpoints, and steps 1.1–2.1 then give the boundary solution. This is a conditional transfer and does not itself assert exterior controllability. [F1, F5, step 3.1, given] ∎

## Source notes

The frozen article is cited for attribution of the reduction and its cubic and quintic uses. The proof above uses the separately supplied extension, scale and trace results and the explicitly assumed exterior solution; it does not use the article's boundary-transfer assertion as a premise.
