---
id: thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux
aliases: [nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]
kind: theorem
domain: mathematics
title: "Stationary outgoing integral and flux"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-interior-h-two-regularity-for-divergence-form-equations, thm-l-two-kernels-give-hilbert-schmidt-operators, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
  thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-interior-h-two-regularity-for-divergence-form-equations: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
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
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Scattering Theory pp. 209-213 (stationary scattering, Born and partial-wave amplitudes)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (stationary and dynamical scattering)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real with
$\operatorname{supp}V\subseteq B_R$, let $k>0$, $d\in S^2$, and on $L^2(B_R)$
let $K_k$ be the compact operator of
[[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]] (boundedly
invertible). Define
$$u:=(I+K_k)^{-1}\bigl(e^{ikd\cdot x}|_{B_R}\bigr),\qquad \Psi(x):=e^{ikd\cdot x}-\int_{B_R}\frac{e^{ik|x-y|}V(y)u(y)}{4\pi|x-y|}\,dy .$$
Then:

(a) $\Psi\in H^2_{\mathrm{loc}}(\mathbb R^3)$ and $(-\Delta+V-k^2)\Psi=0$
distributionally on $\mathbb R^3$, with $\Psi|_{B_R}=u$;

(b) for $|x|>2R$, with $r=|x|$, $\Omega=x/r$, there is a smooth amplitude
$f_k:S^2\to\mathbb C$ with
$$\Psi(x)=e^{ikd\cdot x}+\frac{e^{ikr}}{r}f_k(\Omega)+O(r^{-2}),\qquad f_k(\Omega)=-\frac1{4\pi}\int_{B_R}e^{-ik\Omega\cdot y}V(y)u(y)\,dy,$$
the error and its first radial derivative being bounded by $C(k,R,\|Vu\|_1)r^{-2}$;

(c) the outgoing radial flux $j_r(\Omega)=\frac\hbar m\operatorname{Im}\bigl(\overline{\Psi_{\mathrm{sc}}}\,\partial_r\Psi_{\mathrm{sc}}\bigr)$
equals $\frac{\hbar k}{m}\frac{|f_k(\Omega)|^2}{r^2}+O(r^{-3})$, so the
stationary elastic model yields the differential cross section
$d\sigma/d\Omega=|f_k(\Omega)|^2$ and finite total cross section
$\sigma=\int_{S^2}|f_k|^2d\sigma$.

These are conditional statements about the specified stationary model. Measured
count rates additionally require incident fluence, target and detector
acceptance, efficiency and background modelling; none of these is asserted.

## Facts & Assumptions

**Given:** the real bounded compactly supported $V$, the wave number $k>0$, the direction $d$, the data $u,\Psi$.

[F1] $I+K_k$ is boundedly invertible, so $u\in L^2(B_R)$, and the convolution defining $\Psi$ is the sum of the plane wave and the outgoing Green convolution of $Vu\in L^1$ ([[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]], [[thm-l-two-kernels-give-hilbert-schmidt-operators]]).

[F2] For an $L^1$ compactly supported source the outgoing Green convolution lies in $H^1_{\mathrm{loc}}$, its distributional Laplacian is a local $L^2$ function, and interior $H^2$ regularity applies; hence $\Psi$ solves $(-\Delta+V-k^2)\Psi=0$ with $\Psi|_{B_R}=u$ because $u+K_ku|_{B_R}=e^{ikd\cdot x}|_{B_R}$ ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Far-field expansion: for $|x|=r>2R$ and $y\in B_R$, $|x-y|=r-\Omega\cdot y+O(R^2/r)$ and $1/|x-y|=1/r+O(R/r^2)$ uniformly in $y$, so $\Psi(x)=e^{ikd\cdot x}+e^{ikr}f_k(\Omega)/r+O(r^{-2})$ with $f_k$ smooth by differentiation under the $L^1$ integral ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]], [[def-operator-norm]], algebra).

[F4] Flux computation: the incident plane wave has flux $\hbar k/m$ per unit density, and the scattered radial flux from $e^{ikr}f_k(\Omega)/r$ is $(\hbar k/m)|f_k|^2r^{-2}+O(r^{-3})$ by direct differentiation ([[def-hilbert-space]], algebra).

## Proof

1.1 [The stationary solution] By [F1] and [F2], $\Psi$ is a distributional solution of $(-\Delta+V-k^2)\Psi=0$ on $\mathbb R^3$ that equals $u$ on $B_R$; this proves (a). [F1, F2, algebra]

1.2 [Far field] Step (b) is [F3]: the smoothness of $f_k$ follows by differentiating under the integral sign, which is legitimate because the phase and amplitude are smooth and the measure is finite on $B_R$. [F3, algebra]

2.1 [Flux and cross section] Insert the far-field form of step 1.2 into the radial flux; the incident contribution and the interference term average out over the sphere in the stationary elastic model, and the outgoing self-term is $\frac{\hbar k}{m}|f_k(\Omega)|^2/r^2+O(r^{-3})$ by [F4]. Normalizing the incident flux to $\hbar k/m$ gives $d\sigma/d\Omega=|f_k|^2$ and, since $f_k\in C^\infty(S^2)$ and $S^2$ is compact, $\sigma=\int_{S^2}|f_k|^2d\sigma<\infty$. [step 1.2, F4, algebra] ∎
