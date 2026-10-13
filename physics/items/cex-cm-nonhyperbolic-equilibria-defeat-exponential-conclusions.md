---
id: cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions
kind: counterexample
title: "A non-hyperbolic equilibrium with no positive eigenvalue can still be unstable: x'=x^3"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-local-flow-of-an-autonomous-system, def-cm-equilibrium-and-lyapunov-stability, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, def-derivative, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives]
dependency_roles:
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "F. Ramponi, Notes on Lyapunov's theorem, final page: the counterexamples x' = -x^2 and x' = x^2 with linearisation zero, showing that stability cannot be decided from the linearisation when eigenvalues have zero real part"
      url: "https://federico-ramponi.unibs.it/docs/lyapunov.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Problem 6.16 and Section 6.5 (stability and instability of fixed points), printed pages 198-200"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement refuted

If $F:\mathbb R\to\mathbb R$ is $C^1$ with $F(0)=0$ and no eigenvalue of $A=DF(0)$ has positive real part, then $0$ is a Lyapunov stable equilibrium of $x'=F(x)$.

## Facts & Assumptions

**Given:** The function $F:\mathbb R\to\mathbb R$, $F(x)=x^3$, and its initial value problem $x'=x^3$.

[L1] The equilibrium notion and Lyapunov stability of an equilibrium of $z'=F(z)$ are defined in [[def-cm-local-flow-of-an-autonomous-system]]-based terms by [[def-cm-equilibrium-and-lyapunov-stability]]: $0$ is stable when for every $\varepsilon>0$ there is $\delta>0$ such that every maximal solution with $|x(0)|<\delta$ is defined for all $t\ge0$ and satisfies $|x(t)|<\varepsilon$ for all $t\ge0$.

[L2] Every initial value problem satisfying the Picard-Lindelöf hypotheses has a unique maximal solution, and every solution through the same data is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[L3] For real $\alpha$, $u^\alpha$ on $u>0$ is continuous and has derivative $\alpha u^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]). The polynomial $x\mapsto x^3$ is $C^1$ with derivative $3x^2$, so $A=DF(0)=0$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]); the eigenvalue $0$ of $A$ has real part $0$, and no eigenvalue has positive real part.

## Counterexample

**Proof technique:** direct; exhibit the explicit blowing-up solution through each small positive initial value.

1.1 $F(x)=x^3$ satisfies $F(0)=0$ and $DF(0)=0$ by [L3], so the hypothesis of the refuted statement is satisfied with $A=0$. [given, L3]

1.2 Let $x_0>0$ and define $x(t):=x_0\,(1-2x_0^2t)^{-1/2}$ on $J:=[0,1/(2x_0^2))$. Differentiating the power using the chain rule and the algebra of derivatives, $$x'(t)=x_0\cdot\Bigl(-\tfrac12\Bigr)(1-2x_0^2t)^{-3/2}\cdot(-2x_0^2)=x_0^3(1-2x_0^2t)^{-3/2}=x(t)^3$$ for $t\in J$, and $x(0)=x_0$; hence $x$ is a solution on $J$ of the initial value problem. [given, L3, algebra]

2.1 By [L2] the solution of step 1.2 is the restriction of the unique maximal solution through $(0,x_0)$. As $t\uparrow 1/(2x_0^2)$ the quantity $1-2x_0^2t$ tends to $0$ from above, so $x(t)\to+\infty$; in particular the maximal solution is not defined at $t=1/(2x_0^2)$ and therefore is not defined for all $t\ge0$. [step 1.2, L2]

3.1 Instability: given any $\delta>0$, choose $x_0\in(0,\delta)$. The maximal solution through $x_0$ is not defined for all $t\ge0$ by step 2.1, so the defining condition of stability in [L1] fails for every $\varepsilon>0$: there is no $\delta$ that keeps all maximal solutions with $|x(0)|<\delta$ defined for all time. Hence $0$ is not Lyapunov stable, refuting the statement. [step 1.1, 2.1, L1, algebra] ∎

## Remarks

- The example shows that the hypothesis "no eigenvalue with positive real part" alone cannot replace hyperbolicity in [[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]] or [[thm-cm-instability-of-a-hyperbolic-saddle]], both of which assume a spectral gap at the imaginary axis. Here the derivative vanishes identically at the equilibrium, so the linearisation carries no information about the nonlinear behaviour.

- With the opposite sign, $x'=-x^3$ has $DF(0)=0$ and the solutions $x(t)=x_0(1+2x_0^2t)^{-1/2}$ are defined for all $t\ge0$ and decay to $0$ like $t^{-1/2}$; thus an equilibrium with zero linear part can also be asymptotically stable. The decay is not exponential, so even asymptotic stability does not upgrade to the exponential conclusion of the hyperbolic theorem; no statement about any physical system is made by this example.
