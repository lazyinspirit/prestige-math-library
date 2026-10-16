---
id: def-wirtinger-derivatives
kind: definition
title: "The Wirtinger derivatives $\\partial_z f$ and $\\partial_{\\bar z}f$, and antiholomorphic functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-metric-convergence-and-continuity, thm-complex-numbers-are-the-real-coordinate-plane, thm-complex-coordinate-isometry-and-topology-transport, thm-complex-coordinate-map-preserves-real-total-differentiability, def-total-derivative-in-euclidean-space, def-euclidean-linear-map]
justified_by: []
aliases: []
landmark: true
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.2.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open for $d_{\mathbb C}$ ([[def-complex-metric-convergence-and-continuity]]). Put $V=\Phi[U]$, where $\Phi(a+bi)=(a,b)$ is the bijection of [[thm-complex-numbers-are-the-real-coordinate-plane]]. Then $V$ is open by [[thm-complex-coordinate-isometry-and-topology-transport]]. For $f:U\to\mathbb C$ define $\widetilde f=\Phi\circ f\circ\Phi^{-1}:V\to\mathbb R^2$, with component functions $u=\operatorname{Re}(f\circ\Phi^{-1})$ and $v=\operatorname{Im}(f\circ\Phi^{-1})$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]). All real partial derivatives below are those of $\widetilde f$ on $V$ in [[def-directional-and-partial-derivatives]], evaluated at the coordinate point in question. Write $\partial_x f=u_x+iv_x$ and $\partial_y f=u_y+iv_y$ after transport back to $U$.

At a point where the four real partial derivatives exist, define

$$ \partial_z f:=\frac12(\partial_x f-i\partial_y f)=\frac12(u_x+v_y)+\frac{i}{2}(v_x-u_y), $$

$$ \partial_{\bar z}f:=\frac12(\partial_x f+i\partial_y f)=\frac12(u_x-v_y)+\frac{i}{2}(v_x+u_y). $$

Real total differentiability means total differentiability of $\widetilde f$ under [[def-total-derivative-in-euclidean-space]], with a real-linear derivative as in [[def-euclidean-linear-map]]. Its transported real-linear map $Df$ is supplied by [[thm-complex-coordinate-map-preserves-real-total-differentiability]]. If $f$ is real totally differentiable, put $A=\partial_x f$ and $B=\partial_y f$. The remainder definition along the two coordinate axes gives $Df(1)=A$ and $Df(i)=B$. Real linearity then gives $Df(s+it)=sA+tB$ for real $s,t$, whereas direct expansion of $\frac12(A-iB)(s+it)+\frac12(A+iB)(s-it)$ gives the same expression. Thus

$$ Df(h)=(\partial_z f)h+(\partial_{\bar z}f)\overline h. $$

A real-differentiable map is **antiholomorphic** on $U$ when $\partial_z f=0$ at every point of $U$. Thus its differential is conjugate-linear at every point; no complex differentiability is asserted unless the other Wirtinger derivative also vanishes.
