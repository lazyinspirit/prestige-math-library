---
id: thm-fd-x13
kind: theorem
title: "Exterior potential sphere and zero ideal force"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 2
physical_scope: null
scope: "Explicit smooth potential flow outside a sphere with impermeable slip/no-through boundary condition; exact steady incompressible Euler solution and zero pressure-only formal resultant. It is not a viscous or no-slip result and makes no experimental claim."
deps:
  - def-fd-x00
  - def-fd-incompressible-euler-system
  - thm-fd-x09
  - def-first-fundamental-form-and-surface-area-density
  - def-surface-area-and-scalar-surface-integral-of-a-patch
dependency_roles:
  def-fd-x00: mathematical-premise
  def-fd-incompressible-euler-system: mathematical-premise
  thm-fd-x09: mathematical-premise
  def-first-fundamental-form-and-surface-area-density: mathematical-premise
  def-surface-area-and-scalar-surface-integral-of-a-patch: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.4, printed pp. 120–123, exterior potential flow past a sphere and ideal pressure force; the local proof supplies the explicit potential and topology-safe verification."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 1: Introduction and Inviscid Flows"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
      locator: "§§2.3.2–2.3.3, printed pp. 35–42, potential flow and sphere-flow context; the local proof verifies the field, slip condition and resultant directly."
verification:
  precheck: pass
---

## Statement

Let $a,\rho_0>0$, $p_\infty\in\mathbb R$, $U\in\mathbb R^3$, and on $\Omega_a=\{x\in\mathbb R^3:r=|x|>a\}$ define $n=x/r$, $\phi(x)=(U\cdot x)(1+a^3/(2r^3))$, $u=\nabla\phi$, and $p=p_\infty+\rho_0(|U|^2-|u|^2)/2$. Then $u,p$ are smooth in the exterior and up to $r=a$, $u\to U$ and $p\to p_\infty$ uniformly in direction at infinity, and $u\cdot n=0$ on $r=a$. The pair solves $(u\cdot\nabla)u+\rho_0^{-1}\nabla p=0$, $\operatorname{div}u=0$, the steady formal constant-density incompressible Euler system. Its boundary condition is impermeable slip/no-through: $u$ is generally nonzero tangent to the sphere, so this is not a no-slip solution. For the formal Euler stress $\sigma_E=-pI_3$ and sphere normal $n=x/a$ pointing from the center into the exterior, the exact resultant is

$$\int_{|x|=a}\sigma_E n\,dS=-\int_{|x|=a}p n\,dS=0.$$

The theorem concerns only this explicit inviscid mathematical model; it asserts neither a viscous zero-drag result nor an observed force. Under SI interpretation, $a,r,x$ are in metres, $U,u$ in metres per second, $\rho_0$ in kilograms per cubic metre, and $p,p_\infty$ in pascals.

## Statement references

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.4](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 1, §§2.3.2–2.3.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

Formal constant-density incompressible Euler system and pressure-stress definition: [[def-fd-incompressible-euler-system]].

## Facts & Assumptions

**Given:** Use the constants, exterior domain, potential, velocity and pressure in the Statement. All equations are formal pointwise model equations; the surface resultant uses the stated orientation. For boundary evaluation, use the same displayed formulas on the open ambient set $D=\{x\in\mathbb R^3:|x|>0\}$, where they define smooth extensions of the exterior fields; regard these as time-independent fields on $\mathbb R\times D$. The sphere $S_a=\{x:|x|=a\}$ lies in $D$, so its pressure-stress integral is the fixed-time resultant defined in [F2] for these extensions, equivalently the integral of their exterior boundary values.

[F1] [[def-fd-x00]]: $\nabla$ and $\Delta$ are Cartesian operators, and smooth scalar fields have commuting mixed partials.

[F2] [[def-fd-incompressible-euler-system]]: the steady inviscid equations are $(u\cdot\nabla)u+\rho_0^{-1}\nabla p=0$, $\operatorname{div}u=0$, and the formal stress is $\sigma_E=-pI_3$ with resultant $\int_S\sigma_En_S\,dS$.

[F3] [[thm-fd-x09]]: for every $C^2$ vector field, $(u\cdot\nabla)u=\nabla(|u|^2/2)-u\times\operatorname{curl}u$. This is the exact algebraic clause of that theorem used here; no barotropic Bernoulli conclusion is invoked.

[F4] [[def-first-fundamental-form-and-surface-area-density]]: the surface density is the nonnegative square root of the determinant of the Gram matrix of the parameter tangents.

[F5] [[def-surface-area-and-scalar-surface-integral-of-a-patch]]: a continuous scalar field is integrated against that density on the parameter region; area is the integral of the density, and changing values on a content-zero parameter boundary does not change the integral. Vector integrals are evaluated componentwise.

## Proof

1.1 For $r>0$, $\partial_i(1/r)=-x_i/r^3$ and $\partial_i^2(1/r)=-1/r^3+3x_i^2/r^5$ for $i=1,2,3$, so $\Delta(1/r)=-3/r^3+3r^2/r^5=0$. Since $(U\cdot x)/r^3=-U\cdot\nabla(1/r)$, commuting smooth derivatives gives $\Delta((U\cdot x)/r^3)=0$. Also $\Delta(U\cdot x)=0$, so $\Delta\phi=0$. Therefore $\operatorname{div}u=\Delta\phi=0$ and $\operatorname{curl}u=0$ by equality of the mixed second partials of $\phi$. Direct differentiation yields $u=U+\frac{a^3}{2r^3}\bigl(U-3(U\cdot n)n\bigr)$. This gives uniform $u\to U$ at infinity. At $r=a$, $u=(3/2)(U-(U\cdot n)n)$, which is tangent to the sphere and has zero normal component. [given, F1, algebra]

2.1 By [F3] and $\operatorname{curl}u=0$, $(u\cdot\nabla)u=\nabla(|u|^2/2)$. The pressure definition gives $\rho_0^{-1}\nabla p=-\nabla(|u|^2/2)$, so the steady momentum equation in [F2] holds; step 1.1 supplies its divergence condition. The explicit formula gives $u-U=O(r^{-1})$, hence $|u|^2\to|U|^2$ and $p\to p_\infty$ uniformly in direction. [given, F2, F3, step 1.1, algebra]

3.1 The displayed potential is smooth on $D$ because $r>0$, so its velocity and pressure formulas are smooth there and agree with the exterior fields on $\Omega_a$. Thus the boundary values on $S_a\subset D$ used in the fixed-time resultant of [F2] are well defined. On the sphere, $u=(3/2)U_t$ with $U_t=U-(U\cdot n)n$, so $|u|^2=(9/4)(|U|^2-(U\cdot n)^2)$. Thus $p|_{r=a}$ depends on $n$ only through $(U\cdot n)^2$ and is unchanged by $n\mapsto-n$. For $\Phi(\theta,\varphi)=a(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, $0\le\theta\le\pi$, $0\le\varphi\le2\pi$, direct differentiation gives tangent Gram coefficients $E=a^2$, $F=0$, $G=a^2\sin^2\theta$, so [F4] gives density $\sqrt{EG-F^2}=a^2\sin\theta$ (also $|\Phi_\theta\times\Phi_\varphi|$). The chart is regular in the parameter interior, and its poles and seam lie on the content-zero parameter boundary allowed in [F5]; those boundary values do not affect the integral. The substitution $(\theta,\varphi)\mapsto(\pi-\theta,\varphi+\pi\bmod2\pi)$ has absolute Jacobian one on each half of the longitude interval, preserves the density because $\sin(\pi-\theta)=\sin\theta$, and induces the antipodal map, which reverses $n$, so the vector integrand $p n$ has zero integral over the sphere. By the stress convention in [F2], $\int_{|x|=a}\sigma_En\,dS=-\int_{|x|=a}pn\,dS=0$. [given, F2, F4, F5, step 1.1, construct, algebra] ∎

## Remarks

The diagram is a two-dimensional cross-section of the sphere. The radial arrow is the outward unit normal $n$; the tangent arrow indicates the direction of the boundary velocity $u=(3/2)U_t$. The drawing is schematic and is not used in the field-equation or resultant proof.

```tikz
\begin{tikzpicture}[scale=1.25]
  \draw[thick] (0,0) circle (1);
  \fill (0,0) circle (0.025);
  \node[below left] at (0,0) {center};
  \fill (0.5,0.866) circle (0.035);
  \draw[->] (0,0) -- (0.5,0.866) node[midway,left] {$n$};
  \draw[->,thick] (0.5,0.866) -- (1.15,0.49) node[right] {$u=\tfrac32U_t$};
  \node at (0.72,0.98) {$r=a$};
  \draw[->] (2.0,0.0) -- (3.0,0.0) node[right] {$U$ at infinity};
\end{tikzpicture}
```
