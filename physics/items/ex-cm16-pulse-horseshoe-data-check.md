---
id: ex-cm16-pulse-horseshoe-data-check
kind: example
title: "The pulsed horseshoe on declared data: $a=100$, the radicand box $[74,126]$, the contraction factor $1/\\sqrt{74}$, the fixed points $1\\pm\\sqrt{101}$, and the physical bounds of the coded states at $\\ell_0=1\\,\\mathrm m$, $m=1\\,\\mathrm{kg}$, $\\omega_0=2\\pi\\,\\mathrm{s^{-1}}$"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [pthm-cm16-separatrix-splitting-and-horseshoe,
       def-cm16-stroboscopic-and-poincare-maps,
       def-smooth-periodic-oscillator-pulse-model,
       lem-coded-quadratic-recurrence-is-a-contraction,
       lem-rescaled-pulse-map-is-c-one-close-to-kick,
       def-cm01-units]
dependency_roles:
  pthm-cm16-separatrix-splitting-and-horseshoe: physical-result
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  lem-rescaled-pulse-map-is-c-one-close-to-kick: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the constants and bounds in the page's pulsed-horseshoe theorem: at amplitude a=100 the coding box is R=13, the radicands lie in [74,126], the contraction factor is 1/sqrt(74), the fixed points are 1 plus or minus sqrt(101), the limiting kick satisfies K composed with the rotation = F, and with length scale 1 m, mass 1 kg and frequency scale 2 pi per second the coded states on the invariant axis are bounded by 13 m in axial position and 26 pi kg m per second in axial momentum, with period (pi/2+delta)/(2 pi) seconds. All quantities are declared model data; the pulse-width threshold is not numerically evaluated and no measurement is involved."
sources:
  references:
    - title: "P. Cvitanovic, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8), Chapter 15 Sections 15.2-15.3: fixed points and itinerary constants of the quadratic horseshoe"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's complete preliminary version), Section 13.1: quadratic horseshoe values and their invariant sets"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: return-map tangle constructions for the forced oscillator"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

**Declared model data.** Take the full physical pulsed oscillator model of
[[pthm-cm16-separatrix-splitting-and-horseshoe]] clause (i), and restrict its
coded states to the invariant axis, where transverse coordinates and momenta
vanish. Use the declared data
$$a:=100,\qquad \ell_0:=1\ \mathrm m,\qquad m:=1\ \mathrm{kg},\qquad \omega_0:=2\pi\ \mathrm{s^{-1}},$$
and a pulse width $0<\delta<\delta_0$ with $\delta_0$ the supplier threshold
(not evaluated numerically here). Let $R:=\sqrt a+3$, $L:=\sqrt{a-2R}$ and let
$r_\pm$ be the fixed points of the limiting quadratic map.

**Assertions to check.** (i) $R=13$ and the coding radicands
$a+x_{n-1}+x_{n+1}$ lie in $[74,126]=[a-2R,a+2R]$, with
$\sqrt{126}<13=R$; (ii) the contraction factor of the coding map is
$1/L=1/\sqrt{74}$ and $r_\pm=1\pm\sqrt{101}$; (iii) for the limiting pulse,
$K\circ R_0=F$ with $R_0(q,p)=(p,-q)$, $K(q,p)=(q,p+q^2-a)$ and
$F(x,y)=(y,y^2-a-x)$; (iv) every coded state satisfies
$\lvert Q\rvert\le13\ \mathrm m$ and $\lvert\Pi\rvert\le26\pi\
\mathrm{kg\,m\,s^{-1}}$, and the forcing period is
$T_p=(\pi/2+\delta)/(2\pi)\ \mathrm s$.

## Facts & Assumptions

**Given:** the constants $a=100$, $R=\sqrt a+3$, $L=\sqrt{a-2R}$ and the scales $\ell_0,m,\omega_0$ above; the dimensionless model, its rotation $R_0$, pulse endpoint maps $K_\delta$ and stroboscopic map $G_\delta=K_\delta\circ R_0$ of [[def-smooth-periodic-oscillator-pulse-model]]; the limiting kick $K$.

[L1] The horseshoe theorem and its bounds ([[pthm-cm16-separatrix-splitting-and-horseshoe]] clauses (ii)-(iv)): for $0<\delta<\delta_0$ the full physical stroboscopic map $\Psi_\delta$ has a compact invariant coded set on the invariant axis, with transverse coordinates and momenta zero; each state satisfies $\lvert Q\rvert\le R\ell_0$ and $\lvert\Pi\rvert\le m\ell_0\omega_0R$, and its coded trajectories exist for all times.

[L2] The coding contraction ([[lem-coded-quadratic-recurrence-is-a-contraction]]) and the limiting pulse ([[lem-rescaled-pulse-map-is-c-one-close-to-kick]]): the coding map $T_\sigma$ on the ball of bounded sequences with $\lvert x\rvert_\infty\le R$ is a contraction with factor $L^{-1}$ when the radicands stay positive and the derivative bound holds, and $K_\delta\to K$ in $C^1$ as $\delta\to0$ with $K(q,p)=(q,p+q^2-a)$.

[L3] Elementary arithmetic: $R^2-a-2R=4\sqrt a+3>0$ for $a=100$, so $R=\sqrt a+3$ satisfies $\sqrt{a+2R}<R$; the fixed points of $x\mapsto$ the constant-code recurrence $x^2-a=2x$ solve $x^2-2x-a=0$.

## Verification

**Proof technique:** direct.

1.1 Arithmetic of the coding box: for $a=100$, $R=\sqrt{100}+3=13$; hence $a-2R=100-26=74$ and $a+2R=100+26=126$, so the radicands of [L2] lie in $[74,126]$ whenever the coded sequence satisfies $\lvert x_n\rvert\le R$. Moreover $\sqrt{126}<13$ because $126<169$, and $\sqrt{74}>0$, so all square roots in the coding recurrence are defined with the derivative bound required by [L2]. Also $R^2-a-2R=169-100-26=43=4\sqrt{100}+3>0$, which is the supplier's inequality ensuring $T_\sigma$ maps the ball into itself. [given, L2, L3, algebra]

1.2 Limiting pulse composition: with $R_0(q,p)=(p,-q)$ and $K(q,p)=(q,p+q^2-a)$ one computes $K(R_0(q,p))=K(p,-q)=(p,-q+p^2-a)$ and $F(q,p)=(p,p^2-a-q)$, which agree; this is the algebraic core of the $C^1$-closeness statement $G_\delta\to F$ of [L2]. [given, L2, algebra]

2.1 Contraction and fixed points: the radicand bound of step 1.1 gives the derivative bound $\tfrac1{2\sqrt{74}}$ for the square root, hence the contraction factor $\bigl(\tfrac1{2\sqrt{74}}\bigr)\cdot2=\tfrac1{\sqrt{74}}=L^{-1}$ for the coding map, as in [L2] with $L=\sqrt{74}$. Constant codes satisfy $x_{n+1}+x_{n-1}=x_n^2-a$ with $x_n\equiv r$, that is $2r=r^2-a$ or $r^2-2r-a=0$, whose solutions are $r=1\pm\sqrt{1+a}=1\pm\sqrt{101}$. The branch conditions hold with exact inequalities: $\sqrt{101}>8$ because $101>64$, so $\lvert r_-\rvert=\sqrt{101}-1>7$; $\sqrt{101}>1+\sqrt{74}$ because $101>75+2\sqrt{74}$ reduces to $13>\sqrt{74}$, that is $169>74$; so $\lvert r_\pm\rvert>L$; and $r_+\le13$, $\lvert r_-\rvert\le13$ because $\sqrt{101}\le12$ and $\sqrt{101}-1\le13$, both from $101\le144$. [step 1.1, given, L2, L3, algebra]

2.2 Physical bounds: by [L1] clause (iv) every coded physical state satisfies $\lvert Q\rvert\le R\ell_0=13\ \mathrm m$ and $\lvert\Pi\rvert\le m\ell_0\omega_0R=13\cdot2\pi\ \mathrm{kg\,m\,s^{-1}}=26\pi\ \mathrm{kg\,m\,s^{-1}}$; the forcing period is $T_p=P/\omega_0=(\pi/2+\delta)/(2\pi)\ \mathrm s$ and the pulse duration is $\delta/(2\pi)\ \mathrm s$. [step 1.1, given, L1, algebra]

3.1 Reading: every number above is declared model data or an exact surd; the threshold $\delta_0$ is not numerically evaluated, no decimal approximation is substituted into a proof step, and no measurement or apparatus is involved ([[def-cm01-units]]). [step 2.1, step 1.2, step 2.2, given, algebra] ∎

## Remarks

- **Status of the numerical values.** The values $13$, $74$, $126$, $1/\sqrt{74}$, $1\pm\sqrt{101}$ and $26\pi$ are exact consequences of the declared data; they are quoted as a check of the supplier's constants, not as an empirical estimate of any oscillation. In particular the threshold $\delta$ below which the horseshoe exists is left symbolic because the supplier does not compute it.

- **Unit consistency.** $[\ell_0]=\ell$, $[\Pi]=m\ell_0\omega_0=\mu\ell\tau^{-1}$, $[T_p]=\tau$, and the coded box is bounded in both position and canonical momentum ([[def-cm01-units]]).
