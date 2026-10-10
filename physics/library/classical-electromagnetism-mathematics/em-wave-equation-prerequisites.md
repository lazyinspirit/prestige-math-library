---
page: em-wave-equation-prerequisites
title: Em Wave Equation Prerequisites
status: draft
items: [lem-em-spherical-mean-family-smoothness, thm-em-wave-cauchy-kirchhoff]
examples: []
---

This page supplies the mathematical wave-Cauchy layer that the electromagnetism
track consumes: the whole-space three-dimensional wave problem in the
normalisation $W=c^{-2}\partial_t^2-\Delta$, so that $c^2W=\Box_c$ is the wave
operator of speed $c$. Everything on it carries `domain: mathematics` and
depends only on mathematical suppliers; no physical postulate, observation or
empirical claim is made, and the physical reading of $c$, of the data and of the
source remains with the consuming electromagnetism pages.

The page opens with [[lem-em-spherical-mean-family-smoothness]], which fixes the
conventions of the spherical-mean family $M(x,s,v)=(4\pi)^{-1}\int_{S^2}h(x+sn,v)\,
d\Omega(n)$ of a smooth spacetime function $h$, proves its joint $C^\infty$
smoothness in $(x,s,v)$ with every differentiated-integral formula, and records
the composed family $\tilde H(x,t,v)=(t-v)M(x,c(t-v),v)$, $C^\infty$ near the
closed triangle $t_0\le v\le t\le T$. The statement is local: no decay,
boundedness or compact support of $h$ is assumed, only uniform bounds on compact
parameter sets, and the Axiom of Countable Choice $\mathrm{AC}_\omega$ is
declared where the surface integral and the parameter differentiation use it.

[[thm-em-wave-cauchy-kirchhoff]] then states and proves the wave Cauchy problem
for $W u=h$ with smooth data $a,b$ and smooth source $h$ on a closed time slab:
the displayed solution $u=\partial_sH_a+H_b+c^2\int_{t_0}^tH_{h(\cdot,v)}(\cdot,t-v)\,dv$,
with $H_\varphi(x,s)=s\,M_{cs}\varphi(x)$, is $C^\infty$ in the extension sense
and attains the data; it is the unique $C^2$ solution in that class; it depends
only on data in the closed backward $c$-cone; and compactly supported data
propagate with the explicit bound $|x|>\rho+c(t-t_0)$. No finite-domain boundary
condition, no finite-total-energy hypothesis and no decay at spatial infinity is
assumed or asserted. The homogeneous identity $H_\varphi(\cdot,0)=0$,
$\partial_tH_\varphi(\cdot,0)=\varphi$, $\partial_t^2H_\varphi=c^2\Delta H_\varphi$
is supplied by [[lem-em-spherical-mean-wave-identity]] on the prerequisite page
[[em-expanded-analysis-prerequisites]]; $\mathrm{AC}_\omega$ is carried from the
published suppliers ([[def-countable-choice]]).

The companion page [[em-wave-equation-prerequisites-examples]] records explicit
worked checks of the source-support and energy hypotheses of the Cauchy theorem.
