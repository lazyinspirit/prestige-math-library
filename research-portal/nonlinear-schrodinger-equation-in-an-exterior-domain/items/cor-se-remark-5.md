---
id: cor-se-remark-5
kind: corollary
domain: mathematics
title: "Remark 5: controllability above the Sobolev algebra threshold"
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-boundary-state-space
  - def-se-perturbation-hypotheses
  - def-se-foundation-time-function-spaces
  - prop-se-scale-identifications
  - prop-se-scale-flow
  - prop-se-nonlinear-mild
  - lem-se-exterior-fractional-hilbert-algebra
  - lem-se-complex-polynomial-energy-rule
  - lem-se-3-11
  - prop-se-boundary-transfer
  - thm-se-3-7
  - math:thm-variation-of-constants-formula
  - math:lem-bochner-integral-norm-inequality
  - math:def-axiom-of-choice
  - math:thm-function-space-is-complete-for-a-complete-target
  - math:def-infinitesimal-generator-of-a-c-zero-semigroup
  - physics:lem-nrqm-autonomous-dynamics-flow-calculus
  - def-se-dirichlet-laplacian
  - def-se-foundation-distributional-equation
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-boundary-state-space: mathematical-premise
  def-se-perturbation-hypotheses: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-nonlinear-mild: mathematical-premise
  lem-se-exterior-fractional-hilbert-algebra: mathematical-premise
  lem-se-complex-polynomial-energy-rule: mathematical-premise
  lem-se-3-11: mathematical-premise
  prop-se-boundary-transfer: mathematical-premise
  thm-se-3-7: mathematical-premise
  math:thm-variation-of-constants-formula: mathematical-premise
  math:lem-bochner-integral-norm-inequality: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-function-space-is-complete-for-a-complete-target: mathematical-premise
  math:def-infinitesimal-generator-of-a-c-zero-semigroup: mathematical-premise
  physics:lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-dirichlet-laplacian
  - def-se-boundary-state-space
  - def-se-foundation-time-function-spaces
  - def-se-foundation-distributional-equation
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-boundary-state-space
  - def-se-perturbation-hypotheses
  - def-se-foundation-time-function-spaces
  - prop-se-scale-identifications
  - prop-se-scale-flow
  - prop-se-nonlinear-mild
  - lem-se-exterior-fractional-hilbert-algebra
  - lem-se-complex-polynomial-energy-rule
  - lem-se-3-11
  - prop-se-boundary-transfer
  - thm-se-3-7
  - math:thm-variation-of-constants-formula
  - math:lem-bochner-integral-norm-inequality
  - math:def-axiom-of-choice
  - math:thm-function-space-is-complete-for-a-complete-target
  - math:def-infinitesimal-generator-of-a-c-zero-semigroup
  - physics:lem-nrqm-autonomous-dynamics-flow-calculus
  - def-se-dirichlet-laplacian
  - def-se-foundation-distributional-equation
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 16, Remark 5
dependency_level: 22
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\in\{2,3\}$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and its generalized reflected rays leave every compact set in finite time. Let $T>0$, $n/2<s\le2$, $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Put $H=H_D^s(\Omega)=D((I-\Delta_D)^{s/2})$ with its spectral norm, where $\Delta_D$ is the Dirichlet Laplacian. Let $\varphi$ be the real smooth control cutoff of [[def-se-control-cutoffs]], vanishing on $|x|\le R$, with $R=R_0+1$ and $\Theta\subset B_{R_0}(0)$.

There is $\delta_1>0$ such that any two states $v_0,v_T\in H$ of norms at most $\delta_1$ can be joined by a solution $v\in C([0,T];H)$ of $i\partial_t v+\Delta v+\lambda|v|^{m-1}v=\varphi k$, with $k\in C([0,T];H)$, $v(0)=v_0$ and $v(T)=v_T$. The equation holds in distributions on $(0,T)\times\Omega$, and the homogeneous obstacle boundary condition is encoded by the Dirichlet scale. The forcing is supported where $|x|\ge R$.

Put $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$. Let $H^s$ be the whole-space Bessel-potential restriction space and $X^s(\Omega_0)=\{u\in H^s(\Omega_0):\gamma_{\Gamma_2}u=0\}$, with the inherited norm and Sobolev value trace. There is $\delta>0$ such that any two states $u_0,u_T\in X^s(\Omega_0)$ of norms at most $\delta$ can be joined by a distributional solution $u\in C([0,T];H^s(\Omega_0))$ of $i\partial_tu+\Delta u+\lambda|u|^{m-1}u=0$, with $u(0)=u_0$, $u(T)=u_T$, zero trace on $\Gamma_2$, and outer boundary control $h=\gamma_{\Gamma_1}u\in C([0,T];H^{s-1/2}(\Gamma_1))$. Thus both the cubic and quintic internal and outer-boundary conclusions hold throughout this range.

## Facts & Assumptions

[F1] The geometry, cutoff, spectral scale, boundary-state space, norm-continuous paths and abstract control-space hypotheses are specified by [[def-se-geometry]], [[def-se-control-cutoffs]], [[def-se-dirichlet-scale]], [[def-se-boundary-state-space]], [[def-se-foundation-time-function-spaces]] and [[def-se-perturbation-hypotheses]]. The stated Choice assumption is [[math:def-axiom-of-choice]].

[F2] For $1\le s\le2$, [[prop-se-scale-identifications]] identifies $H_D^s$ with $H^s(\Omega)\cap H_0^1(\Omega)$ with equivalent norms. Here $H_0^1$ is the $H^1$ closure of compactly supported smooth functions. Since $s>n/2$, [[lem-se-exterior-fractional-hilbert-algebra]] gives the $L^\infty$ embedding, the $H^s$ product estimate and conjugation invariance. For the displayed cubic or quintic power, [[lem-se-complex-polynomial-energy-rule]] preserves $H_0^1$ for bounded inputs.

[F3] [[prop-se-scale-flow]] gives a strongly continuous unitary group $W(t)=e^{it\Delta_D}$ on $H$. The variation-of-constants theorem and Bochner norm inequality give a continuous retarded path $Df(t)=\int_0^tW(t-r)f(r)\,dr$ for $f\in L^1(0,T;H)$ and $\|Df\|_{C([0,T];H)}\le\|f\|_{L^1(0,T;H)}$. [[math:thm-variation-of-constants-formula]] [[math:lem-bochner-integral-norm-inequality]]

[F4] Under (H), Choice and the three control-space hypotheses, [[thm-se-3-7]] supplies small-data exact internal control for either power. Its integral solution has the Duhamel formulation described in [[prop-se-nonlinear-mild]].

[F5] [[lem-se-3-11]] gives a bounded extension $E:X^s(\Omega_0)\to H$ that restricts to the identity. Given a distributional exterior solution with locally integrable forcing and nonlinearity, [[prop-se-boundary-transfer]] restricts it to the stated outer-boundary system and transfers a sufficiently small exterior control radius.

[F6] For a nonempty topological domain and complete metric target, the continuous function space is complete in the truncated uniform metric $\rho(a,b)=\sup_t\min\{\|a(t)-b(t)\|_H,1\}$. This is [[math:thm-function-space-is-complete-for-a-complete-target]]; its conclusion is for that metric, so the passage to the supremum norm is checked below.

[F7] The generator on $H$ is defined by the right norm limit $Bx=\lim_{h\downarrow0}(W(h)x-x)/h$ on its domain [[math:def-infinitesimal-generator-of-a-c-zero-semigroup]]. The Dirichlet realization is self-adjoint on the nonzero complex space $L^2(\Omega)$, has $D(\Delta_D)=H^2(\Omega)\cap H_0^1(\Omega)$, and acts there as the weak Laplacian; also $A=I-\Delta_D\ge I$ [[def-se-dirichlet-laplacian]]. For a self-adjoint operator, the two-sided group difference quotient in $L^2$ exists exactly on its operator domain and equals $i$ times the operator [[physics:lem-nrqm-autonomous-dynamics-flow-calculus]]. This supplier has domain mathematics, assumes Choice and Countable Choice, and contributes no physical premise; the assumed full Choice supplies both.

[F8] Bounded linear maps commute with Bochner integration [[math:thm-bounded-linear-maps-commute-with-bochner-integration]]. Distributional derivatives use the bilinear test pairing and the interior space-time convention in [[def-se-foundation-distributional-equation]].

## Proof

**Given:** The hypotheses, parameters and spaces in the Statement.

**Goal:** Verify the abstract control-space hypotheses and obtain the internal and boundary conclusions for both powers.

1.1 Set $X_T=C([0,T];H)$ with the supremum norm, which is finite and satisfies the norm axioms by the time-space definition in [F1]. The interval is nonempty and $H$ is complete. Thus [F6] makes $X_T$ complete in $\rho$. Since $\rho(a,b)\le\|a-b\|_{X_T}$, any supremum-norm Cauchy sequence has a $\rho$ limit in $X_T$. If $\rho(a,b)<1$, then $\min\{\|a(t)-b(t)\|_H,1\}\le\rho(a,b)<1$ for each $t$, so no pointwise distance is truncated and $\|a-b\|_{X_T}=\rho(a,b)$. Consequently convergence in $\rho$ implies convergence in the supremum norm, proving that $X_T$ is a complex Banach space. Its inclusion into itself has norm one. Unitarity gives $\|W(\cdot)v_0\|_{X_T}=\|v_0\|_H$, while the retarded estimate in [F3] gives the second abstract hypothesis. [F1, F3, F6, given]

2.1 Write $g(z)=\lambda z^{(m+1)/2}\bar z^{(m-1)/2}$. The scale identification, algebra estimate and conjugation invariance imply $\|g(v)\|_H\le C\|v\|_H^m$ and, by telescoping the $m$ factors, $\|g(v)-g(u)\|_H\le C(\|v\|_H^{m-1}+\|u\|_H^{m-1})\|v-u\|_H$. The energy rule shows $g(v)\in H_0^1$, so the scale identification makes these estimates estimates in $H$, not merely in $H^s$. The same difference estimate makes $t\mapsto g(v(t))$ norm-continuous in $H$; hence it is Bochner integrable on $[0,T]$. Integrating the pointwise bounds gives the third hypothesis with a factor $T$, and one sufficiently large constant works in all three hypotheses. [F1, F2, step 1.1, given]

3.1 Apply the abstract control theorem to $X_T$ for the chosen $m$. It supplies $\delta_1$, the continuous control $k$ and an integral solution joining the prescribed endpoints. The cutoff gives the stated support. Put $f=i g(v)-i\varphi k$. By the integral-solution formulation, $f$ is Bochner integrable in $H$. Moreover $f$ is continuous in $L^2$: step 2.1 makes $g(v)$ continuous in $H$, the spectral norm satisfies $\|x\|_2\le\|x\|_H$ because $A\ge I$, and multiplication by $\varphi$ has $L^2$ norm at most one. In particular the nonlinear and control terms are locally integrable. [F1, F2, F4, F7, step 2.1, given]

4.1 Let $B$ be the generator on $H$. For every $x\in D(B)$ the right difference quotients converge to $Bx$ in $H$, hence in $L^2$ by the preceding norm inequality. The scale group is consistent with the $L^2$ group by [F3]. Its negative difference quotient, for $h>0$, is $(W(-h)x-x)/(-h)=W(-h)(W(h)x-x)/h$, which also converges in $L^2$ to $Bx$ by unitarity and strong continuity. Apply the mathematical flow-calculus lemma in [F7] to the self-adjoint $\Delta_D$ on $L^2(\Omega)$: the two-sided limit forces $x\in D(\Delta_D)$ and $Bx=i\Delta_Dx$ in $L^2$. Thus this identification holds on the full $H$-generator domain, and its action there is $i\Delta x$ in spatial distributions. [F3, F7, step 3.1]

5.1 Write $U(t)=\int_0^t v(r)\,dr$ and $P(t)=\int_0^t f(r)\,dr$. By [F4], $U(t)\in D(B)$ and $v(t)=v_0+BU(t)+P(t)$. The continuous inclusion $H\to L^2$ commutes with these integrals by [F8]. For either continuous $L^2$ path $q=v$ or $q=f$, the norm of $(\int_t^{t+h}q(r)\,dr)/h-q(t)$ is at most $\sup_{r\text{ between }t\text{ and }t+h}\|q(r)-q(t)\|_2$, which tends to zero. Hence $U'=v$ and $P'=f$ in $L^2$ on $(0,T)$. Step 4.1 turns the integrated identity into $v=v_0+i\Delta_xU+P$ in space-time distributions. Differentiating it in time gives $\partial_t v=i\Delta_xv+f$: time and spatial distributional derivatives commute, as follows by applying their test-function definitions in either order. Substitution of $f$ yields $i\partial_t v+\Delta_xv+g(v)=\varphi k$. Explicitly, for every $\eta\in C_c^\infty((0,T)\times\Omega;\mathbb C)$, the bilinear test identity is $\int_0^T\int_\Omega[-iv\partial_t\eta+v\Delta_x\eta+(g(v)-\varphi k)\eta]\,dx\,dt=0$. Local integrability from step 3.1 makes each term meaningful. [F4, F7, F8, step 3.1, step 4.1]

6.1 Extend each boundary endpoint by $E$. Boundedness of $E$ makes both exterior endpoints smaller than $\delta_1$ when their $X^s$ norms are sufficiently small. Apply steps 3.1 and 5.1 and then the boundary-transfer proposition: restriction gives the equation and endpoint values, the obstacle trace vanishes, and the outer trace is a continuous $H^{s-1/2}(\Gamma_1)$ control. This applies separately to $m=3$ and $m=5$, completing both assertions. [F5, step 3.1, step 5.1, given] ∎

## Source notes

The frozen article is cited for attribution of Remark 5. The argument above applies the separately supplied algebra, scale, abstract control and boundary-transfer results; the article's remark is not used as a proof premise. Path-space completeness uses the cited library theorem with its metric checked explicitly. The generator-domain and distributional passages are local deductions from the stated mathematical suppliers; they do not assert an original-article defect or an independent review.
