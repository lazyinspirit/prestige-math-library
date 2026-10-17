---
id: thm-csm-dk-exact-kinetic-moments
kind: theorem
title: "Exact kinetic moment balances and unclosed fluxes"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-kinetic-macroscopic-fields
  - def-countable-choice
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-kinetic-macroscopic-fields: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ with $L_j>0$, let $I\subset\mathbb R$ be open, and fix $m>0$. Let $F:\Omega\times\mathbb R^3\times I\to[0,\infty)$ be $C^1$, with $n(r,t)=\int F(r,v,t)\,dv>0$. For every compact $J\subset I$, assume some $C_J<\infty$ and $N>6$ satisfy

$$|F|+|\partial_tF|+|\nabla_rF|+|\nabla_vF|\le C_J(1+|v|)^{-N}\qquad(t\in J).$$

Let $a:\Omega\times I\to\mathbb R^3$ be $C^1$ and independent of $v$. Let $Q(r,\cdot,t)$ be measurable with $\int(1+|v|^2)|Q|\,dv<\infty$ and

$$\int Q\,dv=0,\qquad \int vQ\,dv=0,\qquad \int |v|^2Q\,dv=0$$

at every $(r,t)$. Suppose pointwise that

$$\partial_tF+v\cdot\nabla_rF+a\cdot\nabla_vF=Q.$$

Define $\rho,u,\Pi,e,q$ as in [[def-csm-dk-kinetic-macroscopic-fields]]. Then the exact balances are

$$\partial_t\rho+\nabla_r\cdot(\rho u)=0,$$

$$\partial_t(\rho u)+\nabla_r\cdot(\rho u\otimes u+\Pi)=\rho a,$$

$$\partial_t\!\left(\frac12\rho|u|^2+e\right)+\nabla_r\cdot\!\left[\left(\frac12\rho|u|^2+e\right)u+\Pi u+q\right]=\rho a\cdot u,$$

and

$$\partial_te+\nabla_r\cdot(eu+q)+\Pi:\nabla_ru=0.$$

These identities are exact moment equations under the stated generic conservation assumptions on $Q$. They do not supply a constitutive relation for $\Pi$ or $q$, a closure, or a hydrodynamic limit.

In the SI physical interpretation, $t$ is measured in seconds, $a$ is acceleration in $\mathrm{m\,s^{-2}}$, and $Q$ has the units of $F$ per second.

## Facts & Assumptions

**Given:** $\Omega$, $I$, $m$, $F$, $a$, and $Q$ satisfying the Statement.

[A1] $F$ is periodic and $C^1$ in $(r,v,t)$ with the stated uniform velocity-decay bounds on compact time slabs; $a$ is $C^1$ and independent of velocity.

[A2] The source $Q$ has finite absolute moments through order two and its number, momentum and squared-speed moments vanish.

[F1] [[def-csm-dk-kinetic-macroscopic-fields]]: $\rho=mn$, $u=n^{-1}\int vF\,dv$, $\Pi=m\int(v-u)\otimes(v-u)F\,dv$, $e=\tfrac12\operatorname{tr}\Pi$, and $q=\tfrac m2\int|v-u|^2(v-u)F\,dv$.

[F2] [[thm-dominated-convergence]]: an integrable majorant on a measure space permits differentiation or limits under an integral when the corresponding difference quotients converge pointwise and share that majorant.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on sigma-finite products may be integrated in either order.

## Proof

**Given:** [A1], [A2], the displayed kinetic equation, and [F1]–[F3].

**Proof technique:** direct.

1.1 Fix $(r,t)$ and multiply the equation by one of $\psi(v)=1$, $\psi(v)=mv_i$, or $\psi(v)=m|v|^2/2$. Since $N>6$, polar integration gives $\int_{|v|>1}|v|^3(1+|v|)^{-N}\,dv<\infty$, so the moments and fluxes through order three are absolutely integrable; the energy integration-by-parts boundary term on $|v|=R$ is $O(R^{4-N})\to0$. The decay in [A1] and [F2] then justify differentiating each velocity moment and commuting spatial derivatives with its integral; [F3] justifies the absolutely convergent rearrangements. Integrating the transport term gives $\nabla_r\cdot\int v\psi F\,dv$. Integrating the acceleration term by parts in velocity gives $-\int F\,a\cdot\nabla_v\psi\,dv$; its boundary term vanishes by the preceding estimate. The $Q$ integral is zero for each selected $\psi$ by [A2]. The resulting raw identities are $\partial_t n+\nabla_r\cdot\int vF\,dv=0$, $\partial_t(m\int vF\,dv)+\nabla_r\cdot(m\int v\otimes vF\,dv)=\rho a$, and $\partial_t(\frac m2\int|v|^2F\,dv)+\nabla_r\cdot(\frac m2\int|v|^2vF\,dv)=\rho a\cdot u$. [A1, A2, F2, F3, algebra]

2.1 Write $c=v-u$, so $\int cF\,dv=0$. Expanding $v=u+c$ gives $m\int v\otimes vF\,dv=\rho u\otimes u+\Pi$. Expanding $|v|^2v=(|u|^2+2u\cdot c+|c|^2)(u+c)$ and discarding only terms whose centered first moment is zero gives
$$\frac m2\int |v|^2vF\,dv=\left(\frac12\rho|u|^2+e\right)u+\Pi u+q.$$
Substitution into the raw moment equations of step 1.1 yields the first three displayed balances. [F1, step 1.1, algebra]

3.1 Dot the momentum equation from step 2.1 with $u$. The continuity equation gives
$$u\cdot\bigl[\partial_t(\rho u)+\nabla_r\cdot(\rho u\otimes u)\bigr]=\partial_t(\tfrac12\rho|u|^2)+\nabla_r\cdot(\tfrac12\rho|u|^2u).$$
Since $\Pi$ is symmetric by [F1], the product rule gives $u\cdot(\nabla_r\cdot\Pi)=\nabla_r\cdot(\Pi u)-\Pi:\nabla_ru$. Subtracting this kinetic-energy balance from the total-energy balance in step 2.1 cancels $\rho a\cdot u$ and leaves $\partial_te+\nabla_r\cdot(eu+q)+\Pi:\nabla_ru=0$. [F1, step 2.1, algebra] ∎
