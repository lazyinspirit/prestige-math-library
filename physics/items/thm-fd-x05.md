---
id: thm-fd-x05
kind: theorem
title: "Vortex topology and global-Bernoulli counterexamples"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "Punctured-axis vortex and whole-space solid rotation with prescribed constant-density pressures; the vortex has nonzero circulation and no global potential, while solid-rotation Bernoulli values vary across streamlines. No barotropic inference is made."
deps: [def-fd-x00]
dependency_roles:
  def-fd-x00: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.4, printed pp. 120–123, potential flow and the explicit potential-vortex formula; the local proof does not use a global curl-free-to-potential inference."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 1: Introduction and Inviscid Flows"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
      locator: "§2.2.1, printed pp. 22–26, vorticity and the punctured-plane line vortex; §2.4.1, printed pp. 42–45, circulation around a cylinder."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $D=\{(x,y,z)\in\mathbb R^3:r=(x^2+y^2)^{1/2}>0\}$, let $\rho_0>0$, $p_0\in\mathbb R$, and let $\kappa\ne0$. On $D$ define

$$u_v(x,y,z)=\left(-\frac{\kappa y}{r^2},\frac{\kappa x}{r^2},0\right),\qquad p_v(x,y,z)=p_0-\frac{\rho_0\kappa^2}{2r^2}.$$

For every $R>0$ and fixed $z_0$, the positively oriented circle $\gamma_R(\theta)=(R\cos\theta,R\sin\theta,z_0)$, $0\le\theta\le2\pi$, has circulation $\oint_{\gamma_R}u_v\cdot d\mathbf r=2\pi\kappa$. Consequently no single-valued $C^1$ function $\phi:D\to\mathbb R$ satisfies $u_v=\nabla\phi$ on all of $D$, even though $\operatorname{curl}u_v=0$ there. Both $\operatorname{div}u_v=0$ and $\Delta u_v=0$ on $D$, and the pointwise identity

$$\partial_tu_v+(u_v\cdot\nabla)u_v+\rho_0^{-1}\nabla p_v-\nu\Delta u_v=0$$

holds for every $\nu>0$, with $\partial_tu_v=0$.

Separately, for $\Omega_0\ne0$ set $u_s=(-\Omega_0y,\Omega_0x,0)$ and $p_s=p_0+\rho_0\Omega_0^2r^2/2$ on $\mathbb R^3$. This smooth steady field is divergence-free and satisfies the same constant-density equation for every $\nu>0$. For this steady field, a streamline is a $C^1$ curve $\gamma:J\to\mathbb R^3$, where $J\subseteq\mathbb R$ is an interval, satisfying $\gamma'(s)=u_s(\gamma(s))$. Its Bernoulli quantity $B=|u_s|^2/2+p_s/\rho_0=p_0/\rho_0+\Omega_0^2r^2$ is constant along each streamline and takes different values at distinct radii. Thus a common Bernoulli constant is not implied for all steady constant-density flows. This example does not contradict a Bernoulli theorem that assumes an irrotational field or a separate barotropic model. Under SI interpretation, $r$ is in metres, the velocities in metres per second, $\kappa$ in square metres per second, $\Omega_0$ in inverse seconds, $\rho_0$ in kilograms per cubic metre, and $p,p_0$ in pascals.

## Statement references

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.4](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 1, §§2.2.1 and 2.4.1](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

## Facts & Assumptions

**Given:** The domain excludes the entire $z$-axis in the vortex example; the constants and fields are those in the Statement. The equations are pointwise mathematical model equations.

[F1] [[def-fd-x00]]: divergence, curl and componentwise Laplacian are defined by Cartesian partial derivatives; the constant-density Navier–Stokes equation is pointwise, with $\rho_0,\mu>0$ and $\nu=\mu/\rho_0$.

[A1] For $u_v$, $r>0$ and the pressure is the stated scalar multiplier. For $u_s$, the spatial domain is all of $\mathbb R^3$ and $\Omega_0\ne0$.

## Proof

1.1 Put $r^2=x^2+y^2$. Direct differentiation gives $\operatorname{div}u_v=\partial_x(-\kappa y/r^2)+\partial_y(\kappa x/r^2)=2\kappa xy/r^4-2\kappa xy/r^4=0$. The only potentially nonzero curl component is $\partial_x(u_v)_y-\partial_y(u_v)_x=\kappa(y^2-x^2)/r^4+\kappa(x^2-y^2)/r^4=0$. For the Laplacian, $\Delta(x/r^2)=-4x/r^4+4x(x^2+y^2)/r^6=0$, and interchanging $x,y$ gives $\Delta(y/r^2)=0$; hence $\Delta u_v=0$ for $r>0$. The operator $u_v\cdot\nabla=-\kappa y\,r^{-2}\partial_x+\kappa x\,r^{-2}\partial_y$ gives $(u_v\cdot\nabla)(u_v)_x=-\kappa^2x/r^4$ and $(u_v\cdot\nabla)(u_v)_y=-\kappa^2y/r^4$. Thus $(u_v\cdot\nabla)u_v=-\kappa^2(x,y,0)/r^4$. [given, F1, A1, algebra]

2.1 Along $\gamma_R$, $u_v(\gamma_R(\theta))\cdot\gamma_R'(\theta)=\kappa$, so the circulation is $\int_0^{2\pi}\kappa\,d\theta=2\pi\kappa\ne0$. If $u_v=\nabla\phi$ for a single-valued $C^1$ function on $D$, the chain rule gives $\oint_{\gamma_R}\nabla\phi\cdot d\mathbf r=\phi(\gamma_R(2\pi))-\phi(\gamma_R(0))=0$, contradicting the computed value. [A1, step 1.1, construct, algebra]

2.2 Differentiation gives $\nabla p_v=\rho_0\kappa^2(x,y,0)/r^4$. This cancels $\rho_0(u_v\cdot\nabla)u_v$; together with $\Delta u_v=0$ and $\partial_tu_v=0$, the displayed Navier–Stokes expression vanishes for every $\nu>0$. [F1, A1, step 1.1, algebra]

3.1 For the solid-rotation field, $\operatorname{div}u_s=0$, $\Delta u_s=0$, $(u_s\cdot\nabla)u_s=-\Omega_0^2(x,y,0)$, and $\nabla p_s=\rho_0\Omega_0^2(x,y,0)$, so its steady Navier–Stokes expression vanishes. Writing a streamline as $\gamma(s)=(x(s),y(s),z(s))$, its defining equation gives $\gamma'(s)=(-\Omega_0y(s),\Omega_0x(s),0)$ and therefore $\frac{d}{ds}(x(s)^2+y(s)^2)=2x(-\Omega_0y)+2y(\Omega_0x)=0$. Thus $r$ is fixed along the streamline and $B=p_0/\rho_0+\Omega_0^2r^2$ is constant there; because $\Omega_0\ne0$, distinct radii give distinct values. [F1, A1, algebra] ∎

## Remarks

The sketch shows only the punctured $(x,y)$ cross-section. The dot marks the excluded axis, the circle is positively oriented as viewed from $+z$, and the tangent arrows indicate the direction of $u_v$ when $\kappa>0$. It is schematic and is not used in the circulation or no-potential proof.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[->] (-1.5,0) -- (1.7,0) node[right] {$x$};
  \draw[->] (0,-1.4) -- (0,1.6) node[above] {$y$};
  \fill (0,0) circle (0.045);
  \node[below left] at (0,0) {excluded axis};
  \draw[thick] (0,0) circle (1);
  \draw[->] (0.72,0.70) arc[start angle=45,end angle=90,radius=1];
  \draw[->] (-0.70,0.72) arc[start angle=135,end angle=180,radius=1];
  \node at (1.2,0.75) {$C_R$};
  \node at (-0.9,-1.0) {positive orientation};
\end{tikzpicture}
```
