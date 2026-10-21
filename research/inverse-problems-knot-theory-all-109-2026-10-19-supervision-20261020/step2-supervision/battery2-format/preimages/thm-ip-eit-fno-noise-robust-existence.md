---
id: thm-ip-eit-fno-noise-robust-existence
kind: theorem
title: Noise-robust existence of generalized FNO approximants for EIT
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
  - lem-ip-eit-forward-continuity-and-class-compactness
  - thm-ip-hilbert-map-extension-with-concave-modulus
  - thm-ip-generalized-fno-uniform-approximation-on-compact-sets
  - lem-ip-stable-extension-of-the-eit-inverse-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Theorem 4.8 and its complete proof, §4.4, printed pp. 23–25."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, let $\Omega'\Subset\Omega$, and fix the ellipticity, collar and regularity parameters defining $X_d(R)$. Let $M=\partial\Omega$, let $K\subset L^2(M\times M;\mathbb C)$ be compact, and for $\delta\ge0$ put $K_\delta=\{\eta\in K:\|\eta\|_{L^2(M\times M;\mathbb C)}\le\delta\}$. Let $\kappa_\gamma$ be the zero-mean-in-each-variable kernel of the dimension-dependently smoothed mean-zero NtD observation for $\gamma\in X_d(R)$. Regard $L^2(M\times M;\mathbb C)$ as a real Hilbert space and let $\mathfrak R f=(\operatorname{Re}f,\operatorname{Im}f)$ be its isometric realification into $L^2(M\times M;\mathbb R^2)$. Let $\widetilde\Psi^\star:L^2(M\times M;\mathbb C)\to L^2(\Omega;\mathbb R)$ extend the exact-data inverse map and satisfy
$$\|\widetilde\Psi^\star(f)-\widetilde\Psi^\star(g)\|_{L^2(\Omega;\mathbb R)}\le C_\star\omega_\star(\|f-g\|_{L^2(M\times M;\mathbb C)}),$$
where $\omega_\star$ is continuous, nondecreasing and concave with $\omega_\star(0)=0$. Then for every $\varepsilon>0$ there exists a generalized Fourier neural operator $\Phi:L^2(M\times M;\mathbb R^2)\to L^2(\Omega;\mathbb R)$ with two real input channels such that, on complex inputs, $\Psi(f):=\Phi(\mathfrak R f)$ satisfies
$$\sup_{\gamma\in X_d(R),\,\eta\in K_\delta}\|\gamma-\Psi(\kappa_\gamma+\eta)\|_{L^2(\Omega;\mathbb R)}\le\varepsilon+C_\star\omega_\star(\delta).$$
This is an existence statement for continuum NtD kernels and compact noise sets; it makes no training, finite-sample, network-size, finite-element, electrode-matrix or calibration guarantee.

## Statement references

[[def-ip-mean-zero-ntd-and-smoothed-kernel-observation|The dimension-dependent smoothed mean-zero NtD kernel convention.]]

[[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound|The Hilbert–Schmidt kernel representation and kernel stability interface.]]

[[lem-ip-eit-forward-continuity-and-class-compactness|Compactness of the exact kernel image.]]

[[thm-ip-hilbert-map-extension-with-concave-modulus|The stable Hilbert-space extension of the exact inverse map.]]

[[thm-ip-generalized-fno-uniform-approximation-on-compact-sets|Generalized FNO approximation on compact input sets.]]

[de Hoop et al., Theorem 4.8 and proof](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** the EIT domain and class, compact complex-valued perturbation set $K$, noise threshold $\delta$, kernel map and Hilbert extension in the Statement.

[F1] The exact kernel image $\mathcal K_X=\{\kappa_\gamma:\gamma\in X_d(R)\}$ is compact in $L^2(M\times M)$. ([[lem-ip-eit-forward-continuity-and-class-compactness]])

[F2] The extension agrees with the exact-data inverse, $\widetilde\Psi^\star(\kappa_\gamma)=\gamma$, and satisfies the displayed $C_\star\omega_\star$ bound. ([[lem-ip-stable-extension-of-the-eit-inverse-map]], [[thm-ip-hilbert-map-extension-with-concave-modulus]])

[F3] $K_\delta$ is a closed subset of compact $K$, and addition is continuous on the complex $L^2$ space viewed as a real Hilbert space.

[F4] A continuous map from $L^2(M\times M;\mathbb R^2)$ to $L^2(\Omega;\mathbb R)$ can be uniformly approximated on every compact input set by a generalized FNO of the stated multichannel architecture. ([[thm-ip-generalized-fno-uniform-approximation-on-compact-sets]])

[A1] The Axiom of Choice and Countable Choice are used at the conductivity, boundary spectral, and Hilbert extension interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the data in the Statement.

1.1 If $K_\delta=\varnothing$ or $X_d(R)=\varnothing$, choose the zero generalized FNO; the uniform assertion is then vacuous. Otherwise, [A1] applies at the upstream conductivity, spectral and extension interfaces. [F1] and compactness of $K_\delta$ make $$Z_\delta:=\mathcal K_X+K_\delta=\{\kappa+\eta:\kappa\in\mathcal K_X,\ \eta\in K_\delta\}$$ compact in complex $L^2$, since it is the continuous image of $\mathcal K_X\times K_\delta$ under addition. The isometric realification $\mathfrak R(Z_\delta)$ is therefore compact in $L^2(M\times M;\mathbb R^2)$. [A1, F1, F3, given, construct]

2.1 Apply [F4] to the continuous real-valued map $\widetilde\Psi^\star\circ\mathfrak R^{-1}$ on the compact set $\mathfrak R(Z_\delta)$ with tolerance $\varepsilon$. There is a two-input-channel generalized FNO $\Phi$ with $\sup_{z\in Z_\delta}\|\widetilde\Psi^\star(z)-\Phi(\mathfrak R z)\|_{L^2(\Omega;\mathbb R)}<\varepsilon$. [F4, step 1.1, choose]

3.1 For $\gamma\in X_d(R)$ and $\eta\in K_\delta$, use [F2], the triangle inequality and monotonicity of $\omega_\star$ to obtain
$$\begin{aligned} \|\gamma-\Phi(\mathfrak R(\kappa_\gamma+\eta))\|_2 &\le\|\widetilde\Psi^\star(\kappa_\gamma)-\widetilde\Psi^\star(\kappa_\gamma+\eta)\|_2\\ &\quad+\|\widetilde\Psi^\star(\kappa_\gamma+\eta)-\Phi(\mathfrak R(\kappa_\gamma+\eta))\|_2\\ &\le C_\star\omega_\star(\|\eta\|_2)+\varepsilon\\ &\le C_\star\omega_\star(\delta)+\varepsilon. \end{aligned}$$
Here $\widetilde\Psi^\star(\kappa_\gamma)=\gamma$ because the extension agrees on the exact real kernel image, and the complex $L^2$ norm is preserved by $\mathfrak R$. Taking the supremum gives the claim. [F2, step 2.1, given, algebra] ∎
