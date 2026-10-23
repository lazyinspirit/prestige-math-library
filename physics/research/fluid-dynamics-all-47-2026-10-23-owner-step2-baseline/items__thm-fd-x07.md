---
id: thm-fd-x07
kind: theorem
title: Bounded-domain Stokes residual estimate
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-fd-x00
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  def-fd-x00: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
scope: "Given smooth Stokes-difference fields, zero trace and an explicit Poincare bound, the residual controls the L2 velocity and gradient; the periodic channel has the direct bound C=h. The result asserts no solution existence, exterior-domain estimate, or Reynolds-number-only error. The bounded-domain divergence step assumes AC_omega."
verification:
  precheck: pass
sources:
  references:
    - title: "Jean-Luc Guermond, M602 Fall 2024, Volume 1, Part I, Chapter 3: Energy method and applications"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "§3.3 energy method and §3.4.4 Poincare-Steklov inequality, Theorem 3.4 and Corollary 3.5. The general Poincare proof is explicitly deferred in the notes."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 2: The Navier-Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.2.2 Couette flow and the Stokes-flow dissipation discussion, printed pp. 64-65 and 82-83; contextual treatment only, not the residual estimate."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain, meaning a bounded connected open set whose boundary is locally a $C^1$ graph and which lies on one side of that graph after a rigid change of coordinates. Let $\mu>0$, $w\in C^2(\overline\Omega;\mathbb R^n)$, $q\in C^1(\overline\Omega)$, and $f\in C(\overline\Omega;\mathbb R^n)$; $C^k(\overline\Omega)$ means that derivatives through order $k$ extend continuously to the closure. Write $|a|$ for the Euclidean norm, $|\nabla w|^2=\sum_{i,j=1}^n|\partial_jw_i|^2$, and $\|g\|_2=(\int_\Omega|g|^2\,dx)^{1/2}$. Suppose pointwise that $\nabla\cdot w=0$, $w|_{\partial\Omega}=0$, and $-\mu\Delta w+\nabla q=f$. Also assume that a stated constant $C_\Omega>0$ satisfies the zero-trace Poincare inequality $\|v\|_2\le C_\Omega\|\nabla v\|_2$ for every $v\in C^1(\overline\Omega;\mathbb R^n)$ with $v|_{\partial\Omega}=0$. Then

$$\|\nabla w\|_2\le \frac{C_\Omega}{\mu}\|f\|_2,\qquad \|w\|_2\le \frac{C_\Omega^2}{\mu}\|f\|_2.$$

For the periodic channel cell $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, where $\mathbb T_L=\mathbb R/(L\mathbb Z)$ and $L_x,L_z,h>0$. Integrals on $Q$ use Lebesgue measure on one fundamental cell in each periodic coordinate. Every $v\in C^1(\overline Q;\mathbb R^3)$ periodic in the two torus variables and zero on $y=0,h$ satisfies $\|v\|_{L^2(Q)}\le h\|\nabla v\|_{L^2(Q)}$. This channel inequality is a separate direct estimate on the periodic cell; it does not treat that cell as a bounded $C^1$ Euclidean domain.

In dimension three, let $\rho_0>0$, $\nu=\mu/\rho_0$, and suppose already-existing time-independent fields $u_{\rm NS},u_{\rm S}\in C^2(\overline\Omega;\mathbb R^3)$ and $p_{\rm NS},p_{\rm S}\in C^1(\overline\Omega)$ are divergence-free, have the same boundary velocity, and satisfy the constant-density incompressible Navier-Stokes and Stokes equations $\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}+\nabla p_{\rm NS}-\mu\Delta u_{\rm NS}=0$ and $\nabla p_{\rm S}-\mu\Delta u_{\rm S}=0$. If $f=-\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}$, then the preceding estimate applies to $w=u_{\rm NS}-u_{\rm S}$ and $q=p_{\rm NS}-p_{\rm S}$ whenever the stated Poincare bound holds. This is an a-posteriori residual estimate for already-given fields; it asserts no solution existence, no exterior-domain bound, and no error bound from Reynolds number alone. The constant $C_\Omega=h$ established for the periodic channel is not transferred to an exterior domain.

## Statement references

[Guermond, Part I, Chapter 3, energy method and Poincare-Steklov context](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf)

[Tong, Chapter 2, Couette and Stokes-flow context; not the residual estimate](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** The fields, domain, residual equation, zero trace, and Poincare bound in [A1]. For the comparison clause, use the exact formal Navier-Stokes/Stokes conventions in [F1].

[A1] Assume $\mathrm{AC}_\omega$. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded connected $C^1$ domain, $\mu>0$, $w\in C^2(\overline\Omega;\mathbb R^n)$, $q\in C^1(\overline\Omega)$, $f\in C(\overline\Omega;\mathbb R^n)$, $\nabla\cdot w=0$, $w|_{\partial\Omega}=0$, $-\mu\Delta w+\nabla q=f$, and $\|v\|_2\le C_\Omega\|\nabla v\|_2$ for every $C^1$ zero-trace vector field.

[F1] [[def-fd-x00]] on $fd-x01$ defines, for constants $\rho_0>0$ and $\mu>0$ with $\nu=\mu/\rho_0$, the pointwise constant-density incompressible equation $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\nabla\cdot u=0$. Its steady Stokes system is $\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\nabla\cdot u=0$, and omits both the time derivative and convection.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for $a,b\in\mathbb R^n$ with the Euclidean inner product and norm, $|a\cdot b|\le |a|\,|b|$.

[F3] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: assuming $\mathrm{AC}_\omega$, for $n\ge2$, bounded $C^1$ Euclidean $\Omega$, and $G\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\nabla\cdot G\,dx=\int_{\partial\Omega}G\cdot\nu\,dS$, with outward normal on every boundary component.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ states that every sequence $(X_j)_{j\in\mathbb N}$ of nonempty sets has a function $c$ with $c(j)\in X_j$ for every $j$. This exact countable-choice assumption is used only to invoke [F3]; the proof assumes no full Axiom of Choice.

## Proof

1.1 For each component $i$, set $G_i=w_i\nabla w_i\in C^1(\overline\Omega;\mathbb R^n)$. The product rule gives $\nabla\cdot G_i=|\nabla w_i|^2+w_i\Delta w_i$. Since $w_i=0$ on the boundary, $G_i\cdot\nu=w_i\partial_\nu w_i=0$ there. Apply [F3] to each $G_i$ and sum over $i$ to obtain $-\int_\Omega w\cdot\Delta w\,dx=\int_\Omega|\nabla w|^2\,dx$. [given, A1, F3, F4, construct, algebra]

1.2 The field $G=qw$ is $C^1$ on $\overline\Omega$. Its divergence is $\nabla q\cdot w+q\nabla\cdot w$, and its boundary flux is $qw\cdot\nu=0$. Applying [F3] and using $\nabla\cdot w=0$ yields $\int_\Omega\nabla q\cdot w\,dx=0$. [given, A1, F3, F4, construct, algebra]

1.3 Put $A=\int_\Omega|f|^2\,dx$, $B=\int_\Omega|w|^2\,dx$, and $C=\int_\Omega|f|\,|w|\,dx$. By [F2], $|\int_\Omega f\cdot w\,dx|\le C$. For every $t\in\mathbb R$, $0\le\int_\Omega(|f|-t|w|)^2\,dx=A-2tC+t^2B$; if $B>0$, choosing $t=C/B$ gives $C^2\le AB$, while if $B=0$, continuity forces $w=0$ throughout $\Omega$ and hence $C=0$. Thus $|\int_\Omega f\cdot w\,dx|\le\|f\|_2\|w\|_2$. [given, A1, F2, algebra]

1.4 On the periodic channel, fix $(x,z,y)$ and set $g(s)=\partial_y v(x,s,z)$, so $v(x,y,z)=\int_0^y g(s)\,ds$ because $v$ vanishes at $y=0$. By bilinearity and repeated integration, $|v(x,y,z)|^2=\int_0^y\int_0^y g(s)\cdot g(t)\,ds\,dt$. By [F2] and $2ab\le a^2+b^2$, this is at most $y\int_0^y|g(s)|^2\,ds\le h\int_0^h|g(s)|^2\,ds$. Integrating over $0<y<h$ and the two periodic coordinates gives $\|v\|_{L^2(Q)}^2\le h^2\|\partial_yv\|_{L^2(Q)}^2\le h^2\|\nabla v\|_{L^2(Q)}^2$; periodic faces are identified and no $C^1$ Euclidean-domain theorem is invoked on this cell. [given, F2, algebra]

1.5 For already-existing stationary fields in the comparison clause, [F1] gives $-\mu\Delta u_{\rm NS}+\nabla p_{\rm NS}=-\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}$ and $-\mu\Delta u_{\rm S}+\nabla p_{\rm S}=0$. Subtraction shows $w=u_{\rm NS}-u_{\rm S}$ has zero trace and satisfies the residual equation with $q=p_{\rm NS}-p_{\rm S}$ and the stated $f$; it does not assert either field exists. [given, A1, F1, algebra]

2.1 Take the Euclidean inner product of $-\mu\Delta w+\nabla q=f$ with $w$, integrate over $\Omega$, and substitute steps 1.1 and 1.2. The result is $\mu\|\nabla w\|_2^2=\int_\Omega f\cdot w\,dx$. [given, A1, step 1.1, step 1.2, algebra]

3.1 Let $r=\|\nabla w\|_2$. Steps 2.1 and 1.3 and the assumed Poincare inequality give $\mu r^2\le C_\Omega\|f\|_2r$. If $r=0$ the gradient bound is immediate; if $r>0$, division by $\mu r$ gives $r\le C_\Omega\|f\|_2/\mu$. [given, A1, step 2.1, step 1.3, algebra]

4.1 Apply the Poincare inequality once more to $w$ and then use step 3.1 to obtain $\|w\|_2\le C_\Omega r\le C_\Omega^2\|f\|_2/\mu$. This proves both residual estimates. [given, A1, step 3.1, algebra]

5.1 The residual fields in step 1.5 satisfy the hypotheses of the first estimate, so steps 3.1 and 4.1 give the stated a-posteriori bounds whenever the explicit Poincare inequality holds. [given, A1, step 1.5, step 3.1, step 4.1] ∎
