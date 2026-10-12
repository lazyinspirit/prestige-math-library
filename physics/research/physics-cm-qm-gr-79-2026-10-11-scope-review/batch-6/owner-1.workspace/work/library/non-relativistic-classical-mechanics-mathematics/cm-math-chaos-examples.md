---
page: cm-math-chaos-examples
title: Cm Math Chaos — Examples
status: draft
items: []
examples: [ex-cm-chaos-contraction-and-coded-fixed-sequence-checks, ex-cm-chaos-slope-transform-fixed-point-checks, ex-cm-chaos-finite-word-homoclinic-code-checks, ex-cm-chaos-pulse-and-rotation-endpoint-checks, ex-cm-chaos-perturbed-root-and-margin-checks]
requires: ["cm-math-chaos"]
---

The companion page to [[cm-math-chaos]] records explicit finite checks of its
results. Everything here is mathematics: the examples carry
`domain: mathematics`, depend only on the mathematical items of the parent
page and on mathematical suppliers, and make no physical or empirical claim.
No measurement, simulation or numerical integration is involved; every number
is an exact algebraic expression in $\sqrt{74}$, $\sqrt{101}$ and rational
constants.

[[ex-cm-chaos-contraction-and-coded-fixed-sequence-checks]] evaluates the
model at $a=100$: $R=13$, $L=\sqrt{74}$, $\sqrt{126}<R$, contraction factor
$1/\sqrt{74}$, and the constant-code fixed points
$r_\pm=1\pm\sqrt{101}$ with the exact identity $r_\pm^2=100+2r_\pm$.

[[ex-cm-chaos-slope-transform-fixed-point-checks]] solves the fixed-slope
equation $h=1/(2r_+-h)$ exactly, obtaining the small root
$h=r_+-\sqrt{r_+^2-1}\in(0,1/2)$, and verifies the cone constants
$\lambda=2\sqrt{74}-\tfrac12$, $\lambda^{-1}<1/2$ and
$\lambda^{-2}<1/2$ that the slope lemma requires.

[[ex-cm-chaos-finite-word-homoclinic-code-checks]] exhibits the single-flip
code $s_0=-1$, $s_n=+1$ for $n\ne0$: it is nonperiodic and nonconstant, its
coded orbit is not periodic and differs from $(r_+,r_+)$, and it converges to
$(r_+,r_+)$ at both ends, so $h(s)$ is a homoclinic point of the fixed point.

[[ex-cm-chaos-pulse-and-rotation-endpoint-checks]] computes the $\delta=0$
endpoint data of the pulsed oscillator: the free oscillator carries
$(q_0,p_0)$ to $(p_0,-q_0)=R_0(q_0,p_0)$ over $[0,\pi/2]$, the limiting pulse
carries it to $K(q_0,p_0)=(q_0,p_0+q_0^2-a)$, and hence
$K\circ R_0=F$; it also checks the pulse support and normalisation
$\int_0^P\beta_\delta=1$.

[[ex-cm-chaos-perturbed-root-and-margin-checks]] evaluates the perturbed
root bounds at $a=100$, $\eta=1$: the unperturbed quadratic has endpoint
values $-25$ and $43$ at $v=7$ and $v=13$, the derivative bound is
$d=2/13$, and the cone margins $2d=4/13<1$, $d(1/2+2)=5/13<1$ and
$d/(1-d/2)=1/6<2/3$ hold, with root margins at least $24/27$ and $42/27$.
