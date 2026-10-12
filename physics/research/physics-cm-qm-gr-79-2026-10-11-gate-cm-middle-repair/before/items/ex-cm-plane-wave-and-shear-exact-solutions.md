---
id: ex-cm-plane-wave-and-shear-exact-solutions
kind: example
title: "Exact transverse plane waves, the sheared single mode, and the Taylor-Green vortex in the periodic models"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-fourier-lattice-sobolev-embedding, lem-fluid-galerkin-coefficient-ivp, lem-periodic-pressure-reconstruction, def-countable-choice]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-fluid-galerkin-coefficient-ivp: mathematical-premise
  lem-periodic-pressure-reconstruction: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Subsection 1.5 (exact solutions with convection, vortex stretching and diffusion, including shear flows and the Taylor-Green-type steady states of Subsection 2.2)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 1.2.1 (energy balance and elementary exact solutions) and Section 3.1 (Galerkin reduction on single modes)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Example

Work on $\mathbb T^3$ with $dx$ the normalized measure and the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]]: $\partial_ju$ has symbol $2\pi ik_j$, $\Delta$ has symbol $-4\pi^2|k|_2^2$, and $P$ kills gradient fields.

**(a) Transverse plane waves, inviscid and viscous.** Let $k\in\mathbb Z^3\setminus\{0\}$, $A\in\mathbb R^3$ with $A\cdot k=0$, and put $u_0(x):=A\sin(2\pi k\cdot x)$. Then $\operatorname{div}u_0=0$, $(u_0\cdot\nabla)u_0=0$, $\Delta u_0=-4\pi^2|k|_2^2u_0$, and for every $\nu\ge0$ the field
$$u(t,x):=e^{-4\pi^2\nu|k|_2^2t}A\sin(2\pi k\cdot x)$$
is a smooth global solution of $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$ with $P((u\cdot\nabla)u)=0$, and a solution of the primitive system with $p=0$. For $\nu=0$ the field $u_0$ is stationary; the Galerkin coefficient of the mode $k$ satisfies the scalar equation $c'(t)=-4\pi^2\nu|k|_2^2c(t)$.

**(b) The sheared single mode.** For $k=e_2$, $A=e_1$ part (a) gives $u(t,x)=e^{-4\pi^2\nu t}\bigl(\sin(2\pi x_2),0,0\bigr)$: the viscous decay of a shear flow, whose $P$-image is itself because the field is divergence-free and $P$ is the orthogonal projection of $H^0$ onto $H^0_\sigma$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

**(c) The Taylor-Green vortex.** Write $\theta_j:=2\pi x_j$ and
$$u^0(x):=\bigl(\sin\theta_1\cos\theta_2,\,-\cos\theta_1\sin\theta_2,\,0\bigr),\qquad p^0(x):=\tfrac14\bigl(\cos(2\theta_1)+\cos(2\theta_2)\bigr).$$
Then $\operatorname{div}u^0=0$, $(u^0\cdot\nabla)u^0=-\nabla p^0$, and $\Delta u^0=-8\pi^2u^0$; hence for every $\nu\ge0$ the pair
$$u(t,x):=e^{-8\pi^2\nu t}u^0(x),\qquad p(t,x):=e^{-16\pi^2\nu t}p^0(x)$$
solves the primitive system $\partial_tu+(u\cdot\nabla)u=-\nabla p+\nu\Delta u$ on $[0,\infty)\times\mathbb T^3$, and $u$ solves the projected equation with $P((u\cdot\nabla)u)=0$ because $(u^0\cdot\nabla)u^0=-\nabla p^0$ is a gradient field. In particular these solutions are global in time, so the finite time $T$ of [[thm-local-smooth-periodic-euler-viscous-solution]] is not asserted to be sharp.

## Verification


**Given:** The conventions of [[def-periodic-vector-sobolev-space-and-leray-projection]]: the Fourier identities $\partial_je_k=2\pi ik_je_k$ and $\Delta e_k=-4\pi^2|k|_2^2e_k$, the coefficient formula $\widehat{Pu}(k)=\pi_k\widehat u(k)$ with $\pi_kv=v-\frac{k\cdot v}{|k|_2^2}k$ for $k\neq0$, the identity $P\nabla q=0$, and the fact that $P$ is the orthogonal projection onto $H^s_\sigma$, so $Pu=u$ for $u\in H^s_\sigma$; in particular $P(A\sin(2\pi k\cdot x))=A\sin(2\pi k\cdot x)$ whenever $A\cdot k=0$.

1.1 Part (a), nonlinear term: for $u_0=A\sin(2\pi k\cdot x)$ one has $\partial_ju_0=2\pi k_jA\cos(2\pi k\cdot x)$, so $(u_0\cdot\nabla)u_0=2\pi(A\cdot k)\cos(2\pi k\cdot x)\,A\sin(2\pi k\cdot x)=0$ because $A\cdot k=0$; and $\operatorname{div}u_0=2\pi(A\cdot k)\cos(2\pi k\cdot x)=0$. [given, algebra]

1.2 Part (a), norms: $\widehat u(t,\pm k)=\pm\tfrac{1}{2i}c(t)A$ are the only nonzero coefficients, so $\|u(t)\|_{H^m}=|c(t)|\,\|u_0\|_{H^m}=e^{-4\pi^2\nu|k|_2^2t}\|u_0\|_{H^m}$ for every $m$; in particular the solution exists for all $t\ge0$. [given, algebra]

1.3 Part (c), divergence and Laplacian: $\partial_1u^0_1=2\pi\cos\theta_1\cos\theta_2$, $\partial_2u^0_2=-2\pi\cos\theta_1\cos\theta_2$, so $\operatorname{div}u^0=0$; and $\partial_1^2u^0_1=-(2\pi)^2u^0_1$, $\partial_2^2u^0_1=-(2\pi)^2u^0_1$, likewise for the second component, so $\Delta u^0=-8\pi^2u^0$. [given, algebra]

1.4 Part (c), nonlinear term and pressure: $(u^0\cdot\nabla)u^0_1=u^0_1\partial_1u^0_1+u^0_2\partial_2u^0_1=2\pi\sin\theta_1\cos\theta_2\cos\theta_1\cos\theta_2+2\pi\cos\theta_1\sin\theta_2\sin\theta_1\sin\theta_2=2\pi\sin\theta_1\cos\theta_1=\pi\sin2\theta_1$, while $-\partial_1p^0=-\tfrac14(-2\cdot2\pi\sin2\theta_1)=\pi\sin2\theta_1$ (because $\partial_1\cos2\theta_1=-2\cdot2\pi\sin2\theta_1$); similarly $(u^0\cdot\nabla)u^0_2=\pi\sin2\theta_2=-\partial_2p^0$. Hence $(u^0\cdot\nabla)u^0=-\nabla p^0$. [given, algebra]

2.1 Part (a), equation: with $c(t):=e^{-4\pi^2\nu|k|_2^2t}$ one has $\partial_tu=\partial_tc\,A\sin(2\pi k\cdot x)$ and $\nu\Delta u=c\nu(-4\pi^2|k|_2^2)A\sin(2\pi k\cdot x)=\partial_tu$; since $(u(t)\cdot\nabla)u(t)=c(t)^2(u_0\cdot\nabla)u_0=0$ by step 1.1 and $P$ is linear with $P0=0$, the projected equation holds; the primitive equation holds with $p=0$ by [[lem-periodic-pressure-reconstruction]] (whose defining formula gives $p=0$ when $(u\cdot\nabla)u=0$). The Galerkin reduction is the one-dimensional ODE $c'=-4\pi^2\nu|k|_2^2c$, since the mode $k$ is not mixed by the convolution. [step 1.1, given]

3.1 Part (c), the equations: with $u(t)=e^{-8\pi^2\nu t}u^0$ and $p(t)=e^{-16\pi^2\nu t}p^0$, one computes $\partial_tu=-8\pi^2\nu u$, $\nu\Delta u=\nu e^{-8\pi^2\nu t}(-8\pi^2u^0)=-8\pi^2\nu u$ (so $\partial_tu-\nu\Delta u=0$), and $(u\cdot\nabla)u=e^{-16\pi^2\nu t}(u^0\cdot\nabla)u^0=-e^{-16\pi^2\nu t}\nabla p^0=-\nabla p$; therefore $\partial_tu+(u\cdot\nabla)u=-\nabla p+\nu\Delta u$. Since $(u\cdot\nabla)u$ is a gradient, its $P$-image vanishes, and the projected equation $\partial_tu=\nu\Delta u-P((u\cdot\nabla)u)=\nu\Delta u$ holds; this also shows the solution is global. [step 1.3, step 1.4, given] ∎

## Remarks

These exact solutions show that the model equations admit global smooth solutions with special symmetry, and they verify the sign conventions and the projection/pressure reconstruction on explicit data. They are conditional mathematical solutions of the stated model equations; no claim is made that any of them describes a physical flow, and their global existence does not address the general global regularity problem recorded in [[rem-local-versus-known-open-global-fluid-scope]].
