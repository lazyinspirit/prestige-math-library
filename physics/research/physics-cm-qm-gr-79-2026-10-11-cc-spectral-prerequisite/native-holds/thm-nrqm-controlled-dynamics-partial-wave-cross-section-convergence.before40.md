---
id: thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence
aliases: [nrqm-controlled-dynamics-partial-wave-cross-section-convergence]
kind: theorem
domain: mathematics
title: "Partial-wave cross-section convergence"
status: draft
origin: pipeline
dependency_level: 11
deps: [thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-controlled-born-amplitude-error, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-weighted-angular-completeness, thm-nrqm-orbital-and-spin-sphere-onb, thm-interior-h-two-regularity-for-divergence-form-equations, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-controlled-born-amplitude-error: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-weighted-angular-completeness: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-interior-h-two-regularity-for-divergence-form-equations: mathematical-premise
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
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Partial Waves pp. 213-216 and Determinants of Phase-Shifts pp. 216-219 (partial-wave expansion and phase-shift form of the cross section)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (scattering amplitudes and phase shifts)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real, bounded, central (invariant under
rotations) and supported in $B_R$, let $k>0$, and let $f_k\in C^\infty(S^2)$ be
the scattering amplitude of
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]].
Then:

(a) $f_k$ depends only on $\cos\theta=\Omega\cdot d$, and its Legendre expansion
$$f_k(\theta)=\frac1{2ik}\sum_{l\ge0}(2l+1)\bigl(S_l(k)-1\bigr)P_l(\cos\theta)$$
converges in $L^2(S^2)$ (and absolutely, since $f_k$ is smooth), where
$S_l(k)$ is a unit-modulus number determined by the regular radial solution
$\varphi_l$ normalized by $\varphi_l(r)/r^{l+1}\to1$ and by the outgoing
solution $f_l$ with $f_l(r)=e^{i(kr-l\pi/2)}(1+O(1/r))$: explicitly
$S_l=\overline{W(\varphi_l,f_l)}/W(\varphi_l,f_l)$ and $S_l=e^{2i\delta_l(k)}$
with the phase shift $\delta_l(k)$ defined modulo $\pi$.

(b) $\bigl|\overline{W(\varphi_l,f_l)}\bigr|=\bigl|W(\varphi_l,f_l)\bigr|$, so
$|S_l|=1$, and the total cross section is
$$\sigma=\frac{\pi}{k^2}\sum_{l\ge0}(2l+1)|S_l-1|^2=\frac{4\pi}{k^2}\sum_{l\ge0}(2l+1)\sin^2\delta_l(k),$$
the series converging because $f_k\in L^2(S^2)$ and the expansion in (a) is an
orthogonal expansion.

(c) *Resonance model.* For the single-channel model $S_l(E)=\frac{E-E_r-i\Gamma/2}{E-E_r+i\Gamma/2}$
with $\Gamma>0$ one has $|S_l|=1$ for real $E$ and
$\sin^2\delta_l=\frac{(\Gamma/2)^2}{(E-E_r)^2+(\Gamma/2)^2}$; substituting into
(b) gives the corresponding single-channel cross section. This is a conditional
model calculation, not a theorem that every potential has such a pole.

## Facts & Assumptions

**Given:** the central potential $V$, the wave number $k$, the radial channel data.

[F1] The incident plane wave expands as $e^{ikr\cos\theta}=\sum_l(2l+1)i^lj_l(kr)P_l(\cos\theta)$, with angular $L^2(S^2)$ convergence, where $j_l$ is the spherical Bessel function normalized by $j_l(r)\sim\sin(kr-l\pi/2)/(kr)$ at infinity ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]], [[thm-nrqm-orbital-and-spin-weighted-angular-completeness]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F2] For each $l$ the regular radial solution normalized by $\varphi_l(r)/r^{l+1}\to1$ exists and is unique, and the outgoing solution $f_l$ with $f_l(r)=e^{i(kr-l\pi/2)}(1+O(1/r))$ is uniquely determined outside the support; the Wronskian $W(\varphi_l,f_l)$ is constant in $r$ and nonzero, and the ratio $S_l:=\overline{W(\varphi_l,f_l)}/W(\varphi_l,f_l)$ has modulus one because $\varphi_l$ is real ([[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]], [[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Matching the far-field expansion of $\Psi$ in [[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]] with the angular expansion gives, channelwise, the total coefficient $\frac{2l+1}{2ik}(S_l-1)$ multiplying $P_l(\cos\theta)$ in $f_k$ and unit modulus for each channel ([[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]], [[thm-nrqm-controlled-dynamics-controlled-born-amplitude-error]], algebra).

## Proof

1.1 [Channel matching] Combining the incident expansion of [F1] with the radial channel decomposition of [F2] and the far-field form of [F3] identifies the partial-wave coefficients: the incident coefficient $(2l+1)i^l$ is combined with the outgoing flux normalization to leave $f_k(\theta)=\frac1{2ik}\sum_l(2l+1)(S_l-1)P_l(\cos\theta)$ with the stated normalization of $S_l$; convergence in $L^2(S^2)$ follows from the smoothness of $f_k$ and the completeness of the Legendre family [F1]. [F1, F2, F3, algebra]

2.1 [Unitarity and cross section] By [F2] the Wronskian ratio has modulus one, $|S_l|=1$; by the orthogonality of the Legendre polynomials ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]) and Parseval's identity applied to (a), $\int_{S^2}|f_k|^2d\sigma=\frac{2\pi}{4k^2}\sum_l(2l+1)|S_l-1|^2$, and using $|S_l-1|^2=4\sin^2\delta_l$ when $S_l=e^{2i\delta_l}$ gives the displayed total cross section; finiteness follows because $f_k\in L^2(S^2)$. [step 1.1, F1, F2, algebra]

3.1 [Resonance model] Substituting the given rational $S_l$: numerator and denominator are complex conjugates, so $|S_l|=1$; direct algebra gives $|S_l-1|^2=4(\Gamma/2)^2/[(E-E_r)^2+(\Gamma/2)^2]$, whence $\sin^2\delta_l=(\Gamma/2)^2/[(E-E_r)^2+(\Gamma/2)^2]$. This proves (c). [step 2.1, algebra] ∎
