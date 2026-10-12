---
id: thm-nrqm-controlled-dynamics-dollard-integrable-remainder
aliases: [nrqm-controlled-dynamics-dollard-integrable-remainder]
kind: theorem
domain: mathematics
title: "Dollard integrable remainder"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-controlled-dynamics-cook-domain-criterion, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-schwartz-space-and-its-seminorms, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. D. Dollard, Asymptotic convergence and the Coulomb interaction, Journal of Mathematical Physics 5 (1964) 729-738 (modified Coulomb wave operators; primary source)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (long-range modifications of Cook's criterion)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\gamma>0$, $H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ and
$H_\gamma:=-\Delta-\gamma/|\cdot|$ on $D(H_\gamma)=H^2(\mathbb R^3)$, the
self-adjoint Coulomb operator of
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] with essential spectrum
$[0,\infty)$ ([[thm-nrqm-coulomb-essential-spectrum]]). Let $P:=-i\nabla$ be the
momentum operator and let $a(P):=\frac{\gamma}{2|P|}$ be the real Fourier
multiplier $\mathcal F^*M_{\gamma/(2|p|)}\mathcal F$. For $|t|\ge1$ define the
Dollard-modified free evolution
$$U_D(t):=e^{-itH_0}e^{i\,\operatorname{sign}(t)\,a(P)\log|t|}$$
(the two factors commute, being functions of $P$; extend to $|t|\le1$ by
$U_D(t):=e^{-itH_0}$). Then:

(a) $U_D(t)$ is unitary for every $t$ and strongly continuous in $t$ away from $t=0$; on the dense set of momentum $C_c^\infty$ vectors supported in an annulus $0<a_0\le|p|\le b_0<\infty$ it is differentiable with
$$i\,U_D'(t)=\Bigl[H_0-\frac{\gamma}{2|t|\,|P|}\Bigr]U_D(t)\qquad(|t|\ge1).$$

(b) *Integrable remainder.* For every vector $\psi$ in that dense set one has
$$\int_1^\infty\Bigl\|\Bigl[\frac{\gamma}{|\cdot|}-\frac{\gamma}{2t|P|}\Bigr]U_D(t)\psi\Bigr\|_2dt<\infty,$$
and the corresponding integral over $(-\infty,-1]$ is also finite.

No empirical claim, no Rutherford cross-section and no photon interpretation is
asserted; the logarithmic phase is a comparison construction for the
long-range generator.

## Facts & Assumptions

**Given:** the Coulomb coupling $\gamma>0$, the operators $H_0,H_\gamma,P$, the multiplier $a(P)$, and a momentum $C_c^\infty$ vector $\psi$ supported in $0<a_0\le|p|\le b_0$.

[F1] $H_\gamma$ is self-adjoint on $H^2$ and $\sigma_{\mathrm{ess}}(H_\gamma)=[0,\infty)$; the free group $e^{-itH_0}$ is unitary and $e^{-itH_0}=$ multiplication by $e^{-4\pi^2it|p|^2}$ under $\mathcal F_2$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[thm-nrqm-coulomb-essential-spectrum]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-plancherel]]).

[F2] Functional calculus for the multiplier $a(P)=\frac\gamma{2|P|}$: it is a bounded operator on momentum-supported vectors, $e^{i\operatorname{sign}(t)a(P)\log|t|}$ is unitary and commutes with $e^{-itH_0}$, and differentiating in $t$ gives the displayed identity on vectors where $|P|^{-1}$ acts boundedly ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[def-operator-norm]], [[def-projection-valued-measure]]).

[F3] Fourier conjugation of the comparison: $U_D^*\,Q\,U_D$ for the position operator $Q$ is computed by the explicit Fourier multiplier, giving $U_D^*\,(2|t|)^{-1}Q\,U_D=(\operatorname{sign}t)P+(2|t|)^{-1}Q-\operatorname{sign}(t)(\log|t|)(2|t|)^{-1}\nabla a(P)$, and the difference of the exponentials $e^{i\eta A}$ and $e^{i\eta B}$ is the integral of the intervening unitaries times $i\eta(A-B)$; the Schwartz transform of a fixed compactly supported smooth function then bounds the resulting norm of $[F(x/(2t))-1/|P|]U_D(t)\psi$ by $C_\psi(1+\log|t|)/|t|$ on the fixed momentum annulus ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], [[def-schwartz-space-and-its-seminorms]], algebra).

[F4] The complementary singular-position estimate: outside $a_0|t|\le|x|\le4b_0|t|$ the inverse-Fourier phase $p\cdot x-t|p|^2+\operatorname{sign}(t)a(p)\log|t|$ has momentum gradient of magnitude at least $c(|t|+|x|)$ for large $|t|$, so repeated compact-support integration by parts bounds $|U_D(t)\psi(x)|$ by $C_N(|t|+|x|)^{-N}$ and the $L^2$ norm of the truncated $1/|x|$ term by $C_N|t|^{1/2-N}$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]], algebra).

## Proof

1.1 [Unitary and differentiable comparison] By [F2] each $U_D(t)$ is unitary and the derivative identity on the annulus-supported vectors holds; the strong continuity follows from strong continuity of both factors and their commutation. [F2, algebra, F1]

2.1 [The two remainder estimates] Write the remainder integrand as the position part $[\gamma/|\cdot|-\gamma F(x/(2t))/(2t)]$ plus the Fourier part $\frac{\gamma}{2|t|}[F(x/(2t))-1/|P|]$, where $F\in C_c^\infty(\mathbb R^3)$ is fixed and equals $1/|v|$ on the fixed momentum annulus in the sense of [F3]. The position part is bounded by $C_N|t|^{1/2-N}$ in norm by [F4], and the Fourier part by $\frac{\gamma}{2|t|}\cdot C_\psi(1+\log|t|)/|t|$ by [F3]. Thus $\Bigl\|\Bigl[\frac{\gamma}{|\cdot|}-\frac{\gamma}{2t|P|}\Bigr]U_D(t)\psi\Bigr\|\le C_\psi\frac{1+\log|t|}{|t|^2}+C_N|t|^{1/2-N},$ which is integrable on $[1,\infty)$ for $N\ge3$; the negative half-line is identical with the sign changed. [step 1.1, F3, F4, algebra]

3.1 [Consequence for Cook] By steps 1.1 and 2.1 the derivative of $e^{itH_\gamma}U_D(t)\psi$ has integrable norm on $[1,\infty)$ and on $(-\infty,-1]$; the Cook argument of [[thm-nrqm-controlled-dynamics-cook-domain-criterion]] therefore gives, on the dense set, limits $\Omega_{D\pm}\psi=\lim_{t\to\pm\infty}e^{itH_\gamma}U_D(t)\psi$, and these extend to isometries on all of $L^2$. [step 2.1, algebra] ∎
