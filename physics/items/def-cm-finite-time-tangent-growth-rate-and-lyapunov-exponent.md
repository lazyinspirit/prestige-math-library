---
id: def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent
kind: definition
title: "Finite-time tangent growth rates and Lyapunov exponents of a C¹ flow"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-local-flow-of-an-autonomous-system, cor-cm-flow-domain-open-and-flow-is-c1, lem-cm-local-flow-composition-law, def-euclidean-inner-product, def-natural-logarithm, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 9.1, formulas (9.3)-(9.6): exponential rates for the linearisation of a flow along a hyperbolic orbit"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics, Section 2.3 (rates of divergence and sensitivity)"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $\Phi:\Omega\to U$ be the local flow of $x'=F(x)$ ([[def-cm-local-flow-of-an-autonomous-system]]); recall that $\Omega$ is open and $\Phi$ is $C^1$ on $\Omega$ ([[cor-cm-flow-domain-open-and-flow-is-c1]]).

Let $x\in U$ and $t>0$ with $(t,x)\in\Omega$, and let $u\in\mathbb R^n\setminus\{0\}$ be such that $D_x\Phi_t(x)u\ne0$, where $D_x\Phi_t(x)$ is the derivative of the map $y\mapsto\Phi(t,y)$ at $x$ ([[def-cm-local-flow-of-an-autonomous-system]], [[def-ck-euclidean-maps-and-diffeomorphisms]]). The **finite-time tangent growth rate** of $(x,u)$ over the time $t$ is

$$r(t,x,u):=\frac{1}{t}\log\!\left(\frac{\|D_x\Phi_t(x)u\|_2}{\|u\|_2}\right)\in\mathbb R,$$

the Euclidean norms being those of [[def-euclidean-inner-product]] and $\log$ the natural logarithm ([[def-natural-logarithm]]). The expression is a real number because $\|u\|_2>0$ and $\|D_x\Phi_t(x)u\|_2>0$.

For the infinite-time notion require the forward lifetime $I_x=\{t:(t,x)\in\Omega\}$ to be unbounded above. Since $I_x$ is an interval containing $0$, this means that $(t,x)\in\Omega$ for every $t\ge0$. Under this additional condition, if the limit

$$\lambda(x,u):=\lim_{\substack{t\to\infty\\(t,x)\in\Omega}} r(t,x,u)$$

exists in $\mathbb R$, it is called the **Lyapunov exponent of $(x,u)$**. If the forward lifetime is bounded above or the limit does not exist, no Lyapunov exponent is assigned; in particular no value $+\infty$ or $-\infty$ is named by this definition.

## Remarks

- The derivative $D_x\Phi_t(x)$ is invertible whenever it is defined: on the open set $\Omega$, the maps $\Phi_t$ and $\Phi_{-t}$ are inverse to each other by [[lem-cm-local-flow-composition-law]], and the chain rule applied to $\Phi_{-t}\circ\Phi_t=\mathrm{id}$ gives $D\Phi_{-t}(\Phi_t(x))\circ D_x\Phi_t(x)=\mathrm{id}$. Hence the admissibility condition $D_x\Phi_t(x)u\ne0$ holds automatically for $u\ne0$ at every point where $D_x\Phi_t(x)$ is defined; it is recorded so that the definition does not depend on the invertibility statement.

- The rate is homogeneous in the direction: $r(t,x,cu)=r(t,x,u)$ for every real $c\ne0$, since both norms scale by $|c|$. Thus opposite directions have the same rate, and the quantity may be negative, zero or positive, and may depend on both $x$ and the direction $u$.

- For a linear field $F(x)=Ax$ the flow is $\Phi(t,x)=e^{tA}x$ wherever it is defined, so $D_x\Phi_t(x)=e^{tA}$ is independent of $x$ and the finite-time rate reduces to $t^{-1}\log(\|e^{tA}u\|_2/\|u\|_2)$. Whether the limit exists is not claimed by this definition; it is a property of $A$ and $u$.
