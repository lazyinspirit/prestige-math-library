---
id: def-emg-fx-spherical-orbit-geometry
kind: definition
title: Spherical orbit geometry and rotational invariance
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-xs-rn-data
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 2, equation (1), PDF pp. 2–3: the local spherically symmetric warped metric and areal-radius variable; the source uses signature (+---)."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.1.1, printed pp. 234–236 (PDF pp. 241–243): the local spherical quotient metric, its areal-radius function, and the restrictions of the coordinate argument."
verification:
  precheck: n/a
---

## Definition

Let $U$ be a nonempty, connected, simply connected, second-countable smooth
two-manifold without boundary. Let $q$ be a smooth Lorentzian metric of
signature $(-,+)$ on $U$, with a chosen time orientation and an orientation
whose metric volume form is $\epsilon_2$. Let $r:U\to(0,\infty)$ be smooth.
Take $S^2=\{p\in\mathbb R^3:p\cdot p=1\}$ with induced round metric
$\gamma_{S^2,p}(u,v)=u\cdot v$ and outward area form
$(\omega_{S^2})_p(u,v)=\det(p,u,v)$; in polar coordinates it is
$\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$. Put
$\mathcal M:=U\times S^2$, let $\pi_U,\pi_S$ be its projections, and define
$$g:=\pi_U^*q+(r\circ\pi_U)^2\pi_S^*\gamma_{S^2}.$$
The fibre over $y\in U$ is $S^2_y:=\pi_U^{-1}(\{y\})=\{y\}\times S^2$.
Choose the four-dimensional orientation so that its metric volume form is
$$\mathrm{vol}_g=-(r\circ\pi_U)^2\,\pi_U^*\epsilon_2\wedge\pi_S^*\omega_{S^2}.$$
In any chart $(x^0,r)$ for which $\epsilon_2=-dx^0\wedge dr$, this gives
$\mathrm{vol}_g=dx^0\wedge dr\wedge r^2\omega_{S^2}$.

For each $R\in SO(3)$ define $\rho_R:\mathcal M\to\mathcal M$ by
$\rho_R(y,p)=(y,Rp)$. A tensor field $T$ on $\mathcal M$ is called
rotationally invariant if $\rho_R^*T=T$ for every $R\in SO(3)$; a two-form
$\mathcal F$ is rotationally invariant in exactly this sense. This definition
specifies a local warped-product model and a group action. It asserts no global
quotient, global potential, maximal extension, or field equation.

## Definition references

[[def-emg-xs-rn-data]]

## Diagram

The displayed projection is only a schematic: its circle stands for the
entire round two-sphere fibre. The proof of no result relies on the drawing.

~~~tikz
\begin{tikzpicture}[scale=1]
  \draw[rounded corners] (0,0) rectangle (3.2,1.5);
  \node at (1.6,1.15) {$U$};
  \fill (1.6,0.55) circle (1.5pt);
  \node[below] at (1.6,0.55) {$y$};
  \draw (5.8,0.75) circle (0.55);
  \node at (5.8,0.75) {$S^2_y$};
  \draw[->] (2.1,0.55) -- (5.15,0.75);
  \node[above] at (3.6,0.7) {$\{y\}\times S^2$};
  \draw[->] (5.8,0.05) -- (1.7,-0.45);
  \node[below] at (3.7,-0.25) {$\pi_U(y,p)=y$};
\end{tikzpicture}
~~~
