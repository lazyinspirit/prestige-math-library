---
id: lem-em-prescribed-fractional-dirichlet-existence
kind: lemma
domain: mathematics
title: "Weak Dirichlet problem with prescribed fractional Sobolev boundary data"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 2
deps: [lem-em-lift-specified-dirichlet-existence, thm-bounded-right-inverse-for-the-sobolev-trace, thm-kernel-of-the-trace-is-w-one-p-zero, thm-sharp-trace-theorem-for-w-one-p, def-fractional-sobolev-space-on-a-compact-c-one-boundary, thm-lp-trace-operator-on-a-bounded-c-one-domain, def-axiom-of-choice, cor-cauchy-schwarz-inequality-for-l-two, lem-em-zero-boundary-coercivity]
dependency_roles:
  lem-em-zero-boundary-coercivity: mathematical-premise
  lem-em-lift-specified-dirichlet-existence: mathematical-premise
  thm-bounded-right-inverse-for-the-sobolev-trace: mathematical-premise
  thm-kernel-of-the-trace-is-w-one-p-zero: mathematical-premise
  thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  def-fractional-sobolev-space-on-a-compact-c-one-boundary: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapter 4 (weak formulations, H^{-1}) and Chapter 3.9 (boundary values of Sobolev functions)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapters 4 and 3.9 as the contextual reference for weak Dirichlet problems and trace operators; the lift splitting and the continuous-dependence estimate are proved locally through the batch's published trace and lift suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice as declared by the trace and Sobolev suppliers ([[def-axiom-of-choice]]). Let $\Omega\subset\mathbb R^3$ be a bounded $C^1$ domain, let $\varepsilon$ be a measurable symmetric uniformly elliptic coefficient as in the lift lemma ([[lem-em-lift-specified-dirichlet-existence]]), let $\rho\in L^2(\Omega)$, and prescribe $g\in H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$, the fractional Sobolev space of the boundary definition, defined by a finite graph atlas and partition with norm given by the finite sums of localised $L^2$ norms and Gagliardo seminorms ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). Then there is exactly one $u\in H^1(\Omega)$ with trace $Tu=g$ solving

$$\int_\Omega\nabla v\cdot\varepsilon\nabla u=\int_\Omega\rho\,v\qquad\text{for every }v\in H_0^1(\Omega),$$

and the solution depends continuously on $(\rho,g)$: $\|u\|_{H^1}\le C(\|\rho\|_{L^2}+\|g\|_{H^{1/2}})$. The prescribed trace is exact and no classical $C^2$ boundary regularity is inferred.

## Facts & Assumptions
**Given:** A bounded $C^1$ domain $\Omega\subseteq(-L,L)^3$ with trace operator $T$, a uniformly elliptic coefficient $\varepsilon$ with constants $0<\alpha\le\beta<\infty$, data $\rho\in L^2(\Omega)$ and $g\in H^{1/2}(\partial\Omega)$, and the weak equation of the Statement.

[F1] **Sharp trace and bounded right inverse.** Under the Axiom of Choice, $T:W^{1,2}(\Omega)\to W^{1/2,2}(\partial\Omega)$ is bounded and onto ([[thm-sharp-trace-theorem-for-w-one-p]]), and there is a bounded linear right inverse $R:H^{1/2}(\partial\Omega)\to H^1(\Omega)$ with $TRg=g$ and $\|Rg\|_{H^1}\le C\|g\|_{H^{1/2}}$ ([[thm-bounded-right-inverse-for-the-sobolev-trace]]); the fractional space is defined by the finite chart/Gagliardo construction ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).

[F2] **Trace kernel.** $\{u\in W^{1,2}(\Omega):Tu=0\}=H_0^1(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-axiom-of-choice]]).

[F3] **Lift existence and integral bound.** For every specified lift $G\in H^1(\Omega)$ and bounded $F$ on $H_0^1$, there is a unique $u\in G+H_0^1$ with $\int\nabla v\cdot\varepsilon\nabla u=F(v)$ for all $v\in H_0^1$ ([[lem-em-lift-specified-dirichlet-existence]]). Cauchy-Schwarz gives $|\int fg|\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]). For the positive symmetric pointwise form $b_x(\xi,\eta)=\xi\cdot\varepsilon(x)\eta$, nonnegativity of $b_x(\xi+t\eta,\xi+t\eta)$ for all $t\in\mathbb R$ gives $|b_x(\xi,\eta)|\le\beta|\xi||\eta|$. Thus $|a(G,v)|\le\beta\|\nabla G\|_2\|\nabla v\|_2$.

[F4] **Zero-boundary coercivity.** Under AC and $\Omega\subseteq(-L,L)^3$, $H_0^1$ is a complete Hilbert space, $\|v\|_2\le2L\|\nabla v\|_2$ and $\|\nabla v\|_2\le\|v\|_{H^1}\le\sqrt{1+(2L)^2}\|\nabla v\|_2$ for $v\in H_0^1$ ([[lem-em-zero-boundary-coercivity]]). In particular $|\int\rho v|\le2L\|\rho\|_2\|\nabla v\|_2$ by [F3].

## Proof

**Proof technique:** direct.

1.1 By [F1] choose the bounded right inverse $R$ and put $G=Rg\in H^1(\Omega)$; then $TG=T(Rg)=g$, so $G$ is an exact $H^1$ lift of the prescribed fractional datum. [given, F1, algebra]

2.1 A function $u\in H^1(\Omega)$ satisfies $Tu=g$ exactly when $u-G\in H_0^1(\Omega)$: indeed $T(u-G)=g-g=0$ is equivalent to $u-G\in H_0^1$ by [F2]. [step 1.1, F2, algebra]

3.1 Apply the lift existence theorem [F3] with the specified lift $G=Rg$ and the functional $F(v)=\int\rho v$: there is a unique $u=G+w$, $w\in H_0^1$, with $\int\nabla v\cdot\varepsilon\nabla u=F(v)$ for every $v\in H_0^1$; by step 2.1 its trace is exactly $g$, and uniqueness of $w$ gives uniqueness of $u$ among $H^1$ functions with trace $g$ solving the equation. [step 1.1, step 2.1, F3, F4, algebra]

4.1 Continuous dependence: for two data sets $(\rho_i,g_i)$, $i=1,2$, put $G_i=Rg_i$ and $w_i=u_i-G_i$; subtracting the weak equations and testing with $v=w_1-w_2$ gives $\alpha\|\nabla(w_1-w_2)\|_2^2\le\bigl(2L\|\rho_1-\rho_2\|_2+\beta\|\nabla R(g_1-g_2)\|_2\bigr)\|\nabla(w_1-w_2)\|_2$ by [F3] and [F4], hence $\|\nabla(w_1-w_2)\|_2\le\alpha^{-1}\bigl(2L\|\rho_1-\rho_2\|_2+\beta\|\nabla R(g_1-g_2)\|_2\bigr)$; adding $\|R(g_1-g_2)\|_{H^1}\le C\|g_1-g_2\|_{H^{1/2}}$ by [F1] and using the equivalence of the gradient and full norms on $H_0^1$ [F4] yields the stated bound $\|u\|_{H^1}\le C(\|\rho\|_2+\|g\|_{H^{1/2}})$ with the case $(\rho_2,g_2)=(0,0)$. [step 3.1, F1, F3, F4, algebra]

5.1 The prescribed trace is membership in the affine class $G+H_0^1$ and its identification $Tu=g$ through the bounded trace operator [F1], not a classical $C^2$ boundary regularity statement; this proves existence, exactness of the trace, uniqueness and continuous dependence. [step 3.1, step 4.1, F1, algebra] ∎
