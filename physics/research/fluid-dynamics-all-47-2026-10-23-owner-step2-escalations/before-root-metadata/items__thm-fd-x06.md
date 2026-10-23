---
id: thm-fd-x06
kind: theorem
title: "Exterior sphere Stokes solution, force and decay-class uniqueness"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "Exterior classical Stokes flow past a no-slip sphere with constant far-field velocity; exact formal stress resultant and uniqueness in the stated uniform decay class. The annular divergence argument assumes ACω. No finite-Reynolds-number or Navier–Stokes error estimate is asserted."
deps:
  - def-fd-x00
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  def-fd-x00: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.8, printed pp. 137–139, Stokes flow around a sphere and the 6πμaU resultant; the local proof supplies uniqueness in the explicit exterior decay class."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 2: The Navier–Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.4.1–3.4.2, printed pp. 82–85, creeping flow around a sphere and drag; the local proof makes the far-field class and uniqueness argument explicit."
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $a,\mu,\rho_0>0$, $p_\infty\in\mathbb R$, $U\in\mathbb R^3$, and $\nu=\mu/\rho_0$. On the exterior domain $\Omega_a=\{x\in\mathbb R^3:r=|x|>a\}$ put $s=U\cdot x$ and define

$$u(x)=A(r)U+B(r)sx,\qquad A(r)=1-\frac{3a}{4r}-\frac{a^3}{4r^3},\qquad B(r)=-\frac{3a}{4r^3}+\frac{3a^3}{4r^5},\qquad p(x)=p_\infty-\frac{3\mu a}{2}\frac{s}{r^3}.$$

This field is $C^2$ up to the spherical boundary from the exterior, $p$ is $C^1$, $u=0$ at $r=a$, and $u\to U$ uniformly in direction as $r\to\infty$. It satisfies the steady Stokes system $\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\operatorname{div}u=0$ on $\Omega_a$. For $n=x/a$ on $S_a=\{x:|x|=a\}$, put $D u=(\partial_j u_i)_{i,j}$ and form the stress $\sigma=-pI_3+\mu(Du+(Du)^{\mathsf T})$. The formal resultant with this sphere orientation is

$$\int_{S_a}\sigma n\,dS=6\pi\mu aU.$$

Moreover, among classical pairs $(\widetilde u,\widetilde p)$ satisfying the same Stokes system on $\Omega_a$, the same zero boundary velocity and far-field limits, and the uniform decay conditions $\widetilde u-U=O(r^{-1})$, $\nabla\widetilde u=O(r^{-2})$, $\widetilde p-p_\infty=O(r^{-2})$, this pair is unique. Here the velocity is $C^2$ and pressure $C^1$ locally up to $S_a$, the displayed bounds hold uniformly in direction, and pressure is normalized by its limit $p_\infty$. The claim is for the Stokes equations only; it gives no finite-Reynolds-number error bound or exterior Navier–Stokes existence result. Under SI interpretation, $a,r,x$ are in metres, $U$ in metres per second, $\rho_0$ in kilograms per cubic metre, $\mu$ in pascal-seconds, $\nu$ in square metres per second, $p,p_\infty$ in pascals, and the resultant in newtons.

## Statement references

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.8](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 2, §§3.4.1–3.4.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

Cartesian derivative, Stokes-system, and stress conventions: [[def-fd-x00]].

## Facts & Assumptions

**Given:** Use the sphere, constants, fields, boundary values, far-field limits, regularity and uniform decay conditions stated above. All equations and the stress resultant are formal mathematical model quantities.

[F1] [[def-fd-x00]]: the constant-density steady Stokes equation is $\rho_0^{-1}\nabla p-\nu\Delta u=0$ with $\nu=\mu/\rho_0$; $D u=(\partial_j u_i)_{i,j}$, $\Delta$ is componentwise, and the stress is $-pI_3+\mu(Du+(Du)^{\mathsf T})$.

[F2] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under $\mathrm{AC}_\omega$, the divergence theorem holds for a bounded $C^1$ Euclidean domain and a $C^1$ vector field on its closure, with outward normal on every boundary component.

[A1] [[def-countable-choice]]: assume the indexed axiom of countable choice $\mathrm{AC}_\omega$ used by [F2].

## Proof

1.1 For any radial scalar functions $A,B$, direct Cartesian differentiation with $\partial_i r=x_i/r$ and $\partial_i s=U_i$ gives $\operatorname{div}(AU+Bsx)=(s/r)(A'+r^2B'+4rB)$ and $\Delta(AU+Bsx)=(A''+2A'/r+2B)U+(B''+6B'/r)sx$. For the stated coefficients, $A'=3a/(4r^2)+3a^3/(4r^4)$, $A''=-3a/(2r^3)-3a^3/r^5$, $B'=9a/(4r^4)-15a^3/(4r^6)$, and $B''=-9a/r^5+45a^3/(2r^7)$. Substitution yields $A'+r^2B'+4rB=0$ and $\Delta u=-3aU/(2r^3)+9asx/(2r^5)$. Also $\nabla(s/r^3)=U/r^3-3sx/r^5$, so $\nabla p=\mu\Delta u$ and $\operatorname{div}u=0$. [given, F1, algebra]

2.1 At $r=a$, $A(a)=B(a)=0$, giving $u=0$. As $r\to\infty$, $A(r)-1=O(r^{-1})$ and $|B(r)sx|=O(r^{-1})$ uniformly because $|s|\le |U|r$; hence $u-U=O(r^{-1})$. Differentiating the displayed radial expression gives $\nabla u=O(r^{-2})$, and $|p-p_\infty|\le (3\mu a|U|)/(2r^2)$; these also establish the required uniform far-field limits. [given, step 1.1, algebra]

2.2 Let $(\widetilde u,\widetilde p)$ be any other pair in the stated class and put $w=\widetilde u-u$, $q=\widetilde p-p$. Subtracting the equations gives $\operatorname{div}w=0$, $\mu\Delta w=\nabla q$, $w=0$ on $S_a$, and $w=O(r^{-1})$, $\nabla w=O(r^{-2})$, $q=O(r^{-2})$ uniformly. For each $R>a$, apply [F2] on the bounded smooth annulus $\Omega_{a,R}=\{a<r<R\}$ to $qw$ and to $\sum_iw_i\nabla w_i$. The product rule and $\operatorname{div}w=0$ give $\int_{\Omega_{a,R}}w\cdot\nabla q=\int_{\partial\Omega_{a,R}}q\,w\cdot n_R\,dS$ and $\int_{\Omega_{a,R}}w\cdot\Delta w=\int_{\partial\Omega_{a,R}}w\cdot\partial_{n_R}w\,dS-\int_{\Omega_{a,R}}|\nabla w|^2dx$. Substitution into $\mu\Delta w=\nabla q$ yields $\mu\int_{\Omega_{a,R}}|\nabla w|^2dx=\int_{r=R}(\mu w\cdot\partial_rw-q\,w\cdot n)\,dS$, since both inner-boundary terms vanish by $w=0$. [given, F2, A1, step 1.1, algebra]

3.1 Write $U_t=U-(U\cdot n)n$ on $S_a$. There $A'(a)=3/(2a)$, $B(a)=0$, and $B'(a)=-3/(2a^3)$, so the outward radial derivative is $\partial_nu=(3/(2a))U_t$. Since the boundary trace is the zero vector, every tangential derivative there vanishes; thus $Du=(3/(2a))U_t\otimes n$, $(Du)^{\mathsf T}n=0$, and $Du\,n=(3/(2a))U_t$. Further, $p|_{S_a}=p_\infty-(3\mu/(2a))(U\cdot n)$. It follows that $\sigma n=-p_\infty n+(3\mu/(2a))U$. [given, F1, step 2.1, algebra]

4.1 The antipodal map $n\mapsto-n$ preserves spherical area and reverses $n$, so $\int_{S_a}n\,dS=0$. Integrating the expression in step 3.1 and using $\operatorname{area}(S_a)=4\pi a^2$ gives $\int_{S_a}\sigma n\,dS=(3\mu/(2a))4\pi a^2U=6\pi\mu aU$. [step 3.1, algebra]

5.1 On $r=R$ the integrand in step 2.2 is $O(R^{-3})$ and the area is $4\pi R^2$, so its integral tends to zero as $R\to\infty$. The left side is nonnegative and nondecreasing in $R$; since it equals a quantity tending to zero, it is zero for every $R>a$. Continuity then gives $\nabla w=0$ throughout the connected exterior, so $w$ is constant there; its far-field limit is zero, hence $w=0$. The equation now gives $\nabla q=0$, so $q$ is constant, and its zero far-field limit gives $q=0$. [step 2.2, algebra] ∎