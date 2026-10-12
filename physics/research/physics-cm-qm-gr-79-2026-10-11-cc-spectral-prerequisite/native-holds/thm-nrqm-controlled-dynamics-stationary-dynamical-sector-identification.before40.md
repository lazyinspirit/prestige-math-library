---
id: thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification
aliases: [nrqm-controlled-dynamics-stationary-dynamical-sector-identification]
kind: theorem
domain: mathematics
title: "Stationary-dynamical sector identification"
status: draft
origin: pipeline
dependency_level: 12
deps: [thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence, thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation, thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-radial-carleman-estimate, thm-nrqm-coulomb-onto-radial-continuum-transform, thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators, thm-canonical-spectral-type-decomposition, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence: mathematical-premise
  thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation: mathematical-premise
  thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-radial-carleman-estimate: mathematical-premise
  thm-nrqm-coulomb-onto-radial-continuum-transform: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-canonical-spectral-type-decomposition: mathematical-premise
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
    - title: "R. G. Newton, Scattering Theory of Waves and Particles, 2nd ed., Chapter 3 (identification of stationary and dynamical scattering operators; standard monograph)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.3 pp. 195-202 and Chapter 12 pp. 245-256 (radial spectral transforms and their dynamical meaning)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real, bounded and compactly supported,
$H_0=-\Delta$, $H=H_0+M_V$ on $H^2(\mathbb R^3)$, and let $\Omega_\pm$ and
$S=\Omega_+^*\Omega_-$ be the dynamical wave and scattering operators of
[[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]. For
each angular channel $(l,m)$ let $S_l\in L^\infty((0,\infty);\mathbb C)$,
$|S_l|=1$ a.e., be the partial-wave ratio of
[[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]]
(defined by the normalized regular radial solutions and the outgoing solution
off $\operatorname{supp}V$). Then for every $l$ the restriction of $S$ to the
channel $(l,m)$ is unitarily equivalent to multiplication by $S_l(\cdot)$ on
$L^2((0,\infty),dE)$; the equivalence is implemented by the radial continuum
transforms built from regular and outgoing solutions, and it is independent of
$m$ by rotational invariance.

## Facts & Assumptions

**Given:** the potential $V$, the operators $H_0,H$, the wave operators $\Omega_\pm$, and the partial-wave ratios $S_l$.

[F1] For real bounded $V$ of compact support, $H$ has purely absolutely continuous nonnegative spectrum, no positive eigenvalues, and the radial operators in each channel have the compact-source spectral measures with density $\rho(E)=k/(\pi|W(E)|^2)>0$ constructed from the regular solution $\varphi(E,\cdot)$ and the outgoing solution $f(E,\cdot)$, with constant Wronskian $W(E)\ne0$; the associated transforms $T_V$ are unitary onto scalar $L^2(dE)$ ([[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]], [[thm-nrqm-controlled-dynamics-radial-carleman-estimate]], [[thm-nrqm-coulomb-onto-radial-continuum-transform]], [[thm-canonical-spectral-type-decomposition]]).

[F2] Rotational invariance: $H_0$ and $H$ commute with the rotation action, so $\Omega_\pm$ intertwine the rotation actions and preserve every angular channel; the ladder operators connect the $m$-values inside a fixed $l$ without changing the radial problem ([[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]], [[def-projection-valued-measure]]).

[F3] Packet-limit comparison: writing $\sqrt{\rho}\,\varphi=c_V(E)f+d_V(E)\overline f$ with $|c_V|=|d_V|=1/(2\sqrt{\pi k})$ and $c_V=\overline{d_V}$, and defining $J_\pm=T_V^*M_{c_0/c_V}T_0$ and $T_V^*M_{d_0/d_V}T_0$ (the free analogue carrying subscript $0$), the outgoing/incoming coefficient cancellations together with the Mellin decay of [[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]] give $\|e^{-itH}J_\pm\psi-e^{-itH_0}\psi\|\to0$ for smooth compact positive-energy packets; by density and isometry $J_\pm=\Omega_\pm$ ([[thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation]], [[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]).

## Proof

1.1 [Channel unitarity] By [F1] the channel $(l,m)$ is unitarily identified with scalar $L^2((0,\infty),dE)$ and $H$ acts as multiplication by $E$, as does $H_0$ in its own free transform; by [F2] $\Omega_\pm$ act channelwise and are independent of $m$ within a fixed $l$. [F1, F2, algebra]

2.1 [Identification of the limits] By [F3] the packet limits defining $\Omega_\pm$ agree with the explicit operators $J_\pm$ built from the radial kernels; consequently the dynamical scattering operator in the channel is $S_l(E)=\overline{(c_0/c_V)}(d_0/d_V)=(c_V/d_V)/(c_0/d_0)$, which is exactly the ratio of the outgoing to incoming coefficients normalized by the free ratio. [step 1.1, F3, algebra]

3.1 [Conclusion] The stated identification follows from steps 1.1 and 2.1; $|S_l|=1$ was established in [[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]], so the channel multiplier is unitary. [step 1.1, step 2.1, algebra] ∎
