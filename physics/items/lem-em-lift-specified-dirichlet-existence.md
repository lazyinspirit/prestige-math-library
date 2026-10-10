---
id: lem-em-lift-specified-dirichlet-existence
kind: lemma
domain: mathematics
title: "Weak Dirichlet existence for a prescribed lift and uniformly elliptic coefficient"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [def-axiom-of-choice, lem-em-zero-boundary-coercivity, lem-em-symmetric-coercive-variational-solver, cor-cauchy-schwarz-inequality-for-l-two, def-distributional-derivative, def-distribution, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-em-zero-boundary-coercivity: mathematical-premise
  lem-em-symmetric-coercive-variational-solver: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-distribution: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapters 4.1-4.5 (weak formulation, H^{-1} and existence)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapters 4.1-4.5: weak Dirichlet formulations, the space H^{-1} and existence for uniformly elliptic coefficients, used as the contextual statement; the lift splitting, the gradient-norm Hilbert-space bookkeeping and the distributional identity are proved locally through the batch's published suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), supplying the completeness and Countable-Choice interfaces of the two variational suppliers. Let $L>0$ and let $\Omega\subseteq(-L,L)^3$ be bounded and open, let $\varepsilon$ be a measurable symmetric real $3\times3$ matrix field on $\Omega$ with $\alpha|\xi|^2\le\xi\cdot\varepsilon(x)\xi\le\beta|\xi|^2$ for a.e. $x$ and all $\xi\in\mathbb R^3$, $0<\alpha\le\beta<\infty$, let $G\in H^1(\Omega)$ be a specified lift, and let $F\in(H_0^1(\Omega))^*$ be bounded. Then there is exactly one $u\in G+H_0^1(\Omega)$ with

$$\int_\Omega\nabla v\cdot\varepsilon\nabla u=F(v)\qquad\text{for every }v\in H_0^1(\Omega),$$

where $H_0^1=W_0^{1,2}(\Omega)$ carries the gradient norm. For $F(v)=\int_\Omega\rho v$ with $\rho\in L^2(\Omega)$ this is the weak Poisson solution $-\operatorname{div}(\varepsilon\nabla u)=\rho$, with the homogeneous boundary datum represented by membership of $H_0^1$ rather than by an unproved classical trace. No boundary datum outside the specified lift class is assumed attainable; classical boundary regularity, general Neumann lifts and transmission regularity remain later obligations.

## Facts & Assumptions
**Given:** The Axiom of Choice, $L>0$, a bounded open $\Omega\subseteq(-L,L)^3$, a uniformly elliptic symmetric measurable coefficient field $\varepsilon$ with constants $0<\alpha\le\beta<\infty$, a lift $G\in H^1(\Omega)$, a bounded functional $F$ on $H_0^1(\Omega)$ with the gradient norm, and on $H_0^1$ the forms $a(w,v)=\int_\Omega\nabla v\cdot\varepsilon\nabla w$ and $\ell(v)=F(v)-a(G,v)$.

[F1] **Zero-boundary coercivity.** Under AC, $H_0^1(\Omega)$ is complete for the full $W^{1,2}$ norm, has the Hilbert structure of its coordinate $L^2$ pairings, and $\|\nabla v\|_2\le\|v\|_{W^{1,2}}\le\bigl(1+(2L)^2\bigr)^{1/2}\|\nabla v\|_2$ for $v\in H_0^1$; in particular the gradient norm is equivalent to the full norm and $\|v\|_2\le2L\|\nabla v\|_2$ ([[lem-em-zero-boundary-coercivity]]).

[F2] **Symmetric coercive solver.** With Countable Choice, a symmetric bounded bilinear form on a real Hilbert space with $a(v,v)\ge\alpha\|v\|^2$ and a bounded linear functional admit a unique solution $u$ with $a(u,v)=\ell(v)$ for all $v$, and the solver uses no further choice ([[lem-em-symmetric-coercive-variational-solver]]).

[F3] **Cauchy-Schwarz for $L^2$.** $\int|fg|\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]); real $L^2$ with the integral pairing is a real Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F4] **Distributional derivative.** For a distribution $u$, $\langle\partial_ju,\varphi\rangle=-\langle u,\partial_j\varphi\rangle$ ([[def-distributional-derivative]], [[def-distribution]]); for an $L^2$ vector field $V$, the distributional divergence is the functional $\varphi\mapsto-\sum_j\int V_j\partial_j\varphi$, so $\langle-\operatorname{div}V,\varphi\rangle=\int\nabla\varphi\cdot V$ for $\varphi\in C_c^\infty(\Omega)$.



## Proof

**Proof technique:** direct.

1.1 The gradient form $a_0(w,v)=\int_\Omega\nabla w\cdot\nabla v$ is a symmetric bilinear form on $H_0^1$ with $a_0(v,v)=\|\nabla v\|_2^2$; it is positive definite, because $a_0(v,v)=0$ forces $\nabla v=0$ and then $\|v\|_2\le2L\|\nabla v\|_2=0$ by [F1], so $v=0$ in $H_0^1$; the parallelogram law for $\|\nabla v\|_2$ follows from the linearity of $v\mapsto\nabla v$ and the inner-product structure of real $L^2$ [F3], and completeness of $H_0^1$ for the gradient norm follows from its equivalence with the complete full norm [F1]; thus $H_0^1$ with the gradient norm is a real Hilbert space. [given, F1, F3, algebra]

2.1 The coefficient bounds make $a$ symmetric and bounded on this Hilbert space: $|a(w,v)|\le\int|\nabla v\cdot\varepsilon\nabla w|\le\beta\int|\nabla v|\,|\nabla w|\le\beta\|\nabla v\|_2\|\nabla w\|_2$ by the following elementary form bound and Cauchy-Schwarz [F3]: for the positive symmetric form $b_x(\xi,\eta)=\xi\cdot\varepsilon(x)\eta$, nonnegativity of $b_x(\xi+t\eta,\xi+t\eta)$ for all real $t$ implies $|b_x(\xi,\eta)|^2\le b_x(\xi,\xi)b_x(\eta,\eta)\le\beta^2|\xi|^2|\eta|^2$, while coercivity holds with $a(v,v)\ge\alpha\|\nabla v\|_2^2$; also $\ell$ is bounded, since $|F(v)|\le\|F\|\,\|\nabla v\|_2$ and $|a(G,v)|\le\beta\|\nabla G\|_2\|\nabla v\|_2$, so $\|\ell\|\le\|F\|+\beta\|\nabla G\|_2$. [step 1.1, given, F1, F3, algebra]

3.1 Applying the symmetric coercive solver [F2] (Countable Choice is available under the AC standing hypothesis of [F1]) with coercivity constant $\alpha$ gives a unique $w\in H_0^1$ with $a(w,v)=\ell(v)$ for every $v\in H_0^1$, that is $a(w,v)+a(G,v)=F(v)$; hence $u:=G+w$ satisfies $\int_\Omega\nabla v\cdot\varepsilon\nabla u=F(v)$ for every $v\in H_0^1$. [step 2.1, F2, algebra]

4.1 Uniqueness in the affine class: if $u_1=G+w_1$ and $u_2=G+w_2$ both solve, then subtracting the equations gives $a(w_1-w_2,v)=0$ for all $v\in H_0^1$; testing with $v=w_1-w_2$ gives $\alpha\|\nabla(w_1-w_2)\|_2^2\le a(w_1-w_2,w_1-w_2)=0$, so $\nabla(w_1-w_2)=0$ and, by the Poincare bound of [F1], $w_1-w_2=0$ in $H_0^1$, hence $u_1=u_2$. [step 3.1, given, F1, algebra]

5.1 Distributional form: for $F(v)=\int_\Omega\rho v$ with $\rho\in L^2(\Omega)$ the functional is bounded because $|F(v)|\le\|\rho\|_2\|v\|_2\le2L\|\rho\|_2\|\nabla v\|_2$ by [F1] and [F3], so the existence conclusion applies; testing the solution identity with $v=\varphi\in C_c^\infty(\Omega)\subseteq H_0^1$ gives $\int_\Omega\nabla\varphi\cdot\varepsilon\nabla u=\int_\Omega\rho\varphi$, and since $\varepsilon\nabla u\in L^2(\Omega;\mathbb R^3)$ the distributional divergence of [F4] satisfies $\langle-\operatorname{div}(\varepsilon\nabla u),\varphi\rangle=\int\nabla\varphi\cdot\varepsilon\nabla u=\int\rho\varphi$ for every test function, that is $-\operatorname{div}(\varepsilon\nabla u)=\rho$ distributionally. [step 3.1, F1, F3, F4, algebra] ∎

The homogeneous boundary datum is membership of $u-G$ in $H_0^1$, not a classical trace statement; an arbitrary bounded $F$ may contain interface sheet sources, so no normal-flux continuity follows for general $F$, even when one-sided classical traces exist. Classical boundary regularity, general Neumann lifts and transmission jump laws remain later obligations.
