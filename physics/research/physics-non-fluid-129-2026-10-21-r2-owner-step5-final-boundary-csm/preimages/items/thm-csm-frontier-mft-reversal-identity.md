---
id: thm-csm-frontier-mft-reversal-identity
kind: theorem
title: "Equilibrium action time-reversal identity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-ssep-current-action
  - def-natural-logarithm
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-csm-frontier-ssep-current-action: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Section II.3, equations (2.12)–(2.16): time reversal of density/current paths and the action relation; the equilibrium specialization is proved locally here."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Sections 9 and 14.1: the current action and the time-reversed equilibrium relaxation route."
verification:
  precheck: pending
---

## Statement

Let $d\ge1$, $T>0$, and $0<\varepsilon<1/2$. Let $\rho:[0,T]\times\mathbb T^d\to[\varepsilon,1-\varepsilon]$ be a scalar field and $j:[0,T]\times\mathbb T^d\to\mathbb R^d$ a vector field, both smooth up to the time endpoints and periodic in space. Assume $\partial_t\rho+\nabla\cdot j=0$. Set $f(u):=u\log u+(1-u)\log(1-u)$ for $0<u<1$, and define the reversed paths by $\rho^\theta(t,x):=\rho(T-t,x)$ and $j^\theta(t,x):=-j(T-t,x)$. Then

$$\mathcal I_{[0,T]}(\rho,j)-\mathcal I_{[0,T]}(\rho^\theta,j^\theta)=\int_{\mathbb T^d}f(\rho(T,x))\,dx-\int_{\mathbb T^d}f(\rho(0,x))\,dx.$$

Here $\mathcal I$ is the normalized SSEP action with $\chi(u)=u(1-u)$.

## Statement references

[[def-csm-frontier-ssep-current-action]]

[[def-natural-logarithm]]

[[thm-chain-rule]]

[[thm-logarithm-derivative-and-integral]]

## Facts & Assumptions

**Given:** The smooth periodic fields, strict interior bound, continuity equation, and reversed-path definitions in the Statement.

[A1] The paths are smooth up to $t=0,T$, periodic on $\mathbb T^d$, and satisfy $\varepsilon\le\rho\le1-\varepsilon$ and $\partial_t\rho+\nabla\cdot j=0$.

[F1] [[def-csm-frontier-ssep-current-action]]: $\chi(u)=u(1-u)$ and $\mathcal I_{[0,T]}$ is one quarter of the integral of $|j+\nabla\rho|^2/\chi(\rho)$ for these admissible paths.

[F2] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F3] [[thm-logarithm-derivative-and-integral]]: for every $x>0$, $\log$ is differentiable and $\log'(x)=1/x$.

[F4] [[thm-chain-rule]]: for differentiable real functions whose stated domain and limit-point hypotheses hold, the derivative of a composition is $(f\circ g)'(c)=f'(g(c))g'(c)$.

## Proof

1.1 For $0<u<1$ and sufficiently small nonzero $h$, the first product quotient is $\frac{(u+h)\log(u+h)-u\log u}{h}=u\frac{\log(u+h)-\log u}{h}+\log(u+h)$, which tends to $1+\log u$ by [F3]. With $v=1-u$, the second quotient is $\frac{(v-h)\log(v-h)-v\log v}{h}=v\frac{\log(v-h)-\log v}{h}-\log(v-h)$, which tends to $-1-\log v$ by the same derivative formula. Thus $f'(u)=\log u-\log(1-u)$. By [F4] applied to $\log$ composed with $u\mapsto1-u$, the derivative of $\log(1-u)$ is $-1/(1-u)$; [F3] gives the derivative of $\log u$ as $1/u$. Hence $f''(u)=1/u+1/(1-u)=1/[u(1-u)]$. [F2, F3, F4, algebra]

1.2 The reversed fields remain smooth, periodic, and in the same density range. Also $\partial_t\rho^\theta+\nabla\cdot j^\theta=-(\partial_t\rho+\nabla\cdot j)(T-t,x)=0$, so they are admissible for the same action. [A1, construct]

2.1 By the reversed-path definitions, $\mathcal I_{[0,T]}(\rho^\theta,j^\theta)=\frac14\int_0^T\int_{\mathbb T^d}\frac{|-j(T-t,x)+\nabla\rho(T-t,x)|^2}{\chi(\rho(T-t,x))}\,dx\,dt$. Substitute $s=T-t$: $dt=-ds$ and the limits $t=0,T$ become $s=T,0$, so this equals $\frac14\int_0^T\int_{\mathbb T^d}\frac{|-j(s,x)+\nabla\rho(s,x)|^2}{\chi(\rho(s,x))}\,dx\,ds$. After renaming $s$ to $t$, subtract this expression from the forward action. At the common point $(t,x)$, the resulting integrand is $\frac{|j+\nabla\rho|^2-|-j+\nabla\rho|^2}{4\chi(\rho)}=\frac{j\cdot\nabla\rho}{\chi(\rho)}=\nabla f'(\rho)\cdot j$, by quadratic expansion and the coordinatewise chain rule with $f''(\rho)=1/\chi(\rho)$. All integrands are continuous on the compact cylinder since $\chi(\rho)\ge\varepsilon(1-\varepsilon)>0$. [A1, F1, F4, step 1.1, step 1.2, algebra]

2.2 For each coordinate $i$, the integral of $\partial_i(f'(\rho)j_i)$ over $[0,1]^d$ is zero because its endpoint values in the $i$th coordinate agree by periodicity. Summing gives $\int_{\mathbb T^d}\nabla f'(\rho)\cdot j\,dx=-\int_{\mathbb T^d}f'(\rho)\nabla\cdot j\,dx=\int_{\mathbb T^d}f'(\rho)\partial_t\rho\,dx$. By [F4] this last integrand is the time derivative of $f(\rho)$; it is continuous on the compact cylinder, so the fundamental theorem of calculus makes its time difference quotients converge uniformly in space and justifies differentiating the spatial integral. Hence the expression is $\frac{d}{dt}\int_{\mathbb T^d}f(\rho(t,x))\,dx$. [A1, F4, step 1.1, algebra]

3.1 Integrating the identity from step 2.2 over $t\in[0,T]$ and using the integrand difference from step 2.1 gives the stated endpoint formula. [step 2.1, step 2.2, algebra] ∎

