---
id: lem-csm-frontier-mft-small-action-bridge
kind: lemma
title: "Small-action bridge to a relaxed equilibrium profile"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-csm-frontier-ssep-current-action
  - lem-csm-frontier-ssep-heat-flow
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-ssep-current-action: mathematical-premise
  lem-csm-frontier-ssep-heat-flow: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Section IV.1, equations (4.8)–(4.9), and Section V.A: the equilibrium quasi-potential is approached by reversing hydrodynamic relaxation."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Section 14.1, equations (158)–(160): equilibrium optimal profiles are time reversals of diffusive relaxation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice. Fix $d\ge1$, $0<\varepsilon<1/2$, and $\bar\rho\in[\varepsilon,1-\varepsilon]$. Let $\rho:\mathbb T^d\to[\varepsilon,1-\varepsilon]$ be a smooth real periodic profile with $\int_{\mathbb T^d}\rho\,dx=\bar\rho$. Use normalized product Haar measure and the Fourier conventions $e_k(x)=\exp(2\pi i k\cdot x)$ and $\widehat\rho(k)=\int_{\mathbb T^d}\rho(x)e_{-k}(x)\,dx$. Define $\rho_0=\rho$ and, for $s>0$, define the heat profile

$$\rho_s(x):=\sum_{k\in\mathbb Z^d}e^{-4\pi^2|k|^2s}\widehat\rho(k)e_k(x).$$

Then $\rho_s$ is smooth up to $s=0$ on every compact time interval and $\rho_s\to\bar\rho$ in $C^\infty(\mathbb T^d)$ as $s\to\infty$. For every $S\ge1$ there is a smooth connector $(\sigma^S,\kappa^S)$ on $[0,1]\times\mathbb T^d$ from the constant profile $\bar\rho$ to $\rho_S$, with fixed mean $\bar\rho$, values in $[\varepsilon,1-\varepsilon]$, and $\partial_t\sigma^S+\nabla\cdot\kappa^S=0$. At $t=1$, all time and space derivatives of this connector agree with those of the reversed heat segment $(\rho_{S+1-t},+\nabla\rho_{S+1-t})$. Its action satisfies $\mathcal I_{[0,1]}(\sigma^S,\kappa^S)\to0$ as $S\to\infty$.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-ssep-current-action]]

[[lem-csm-frontier-ssep-heat-flow]]

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, $\varepsilon$, $\bar\rho$, and the smooth periodic target $\rho$ with the stated range and mean.

[A1] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function.

[F1] [[def-csm-frontier-ssep-current-action]]: $\mathcal I_{[0,T]}=\frac14\int_0^T\int |j+\nabla\rho|^2/[\rho(1-\rho)]\,dx\,dt$ for smooth periodic paths bounded strictly inside $(0,1)$.

[F2] [[lem-csm-frontier-ssep-heat-flow]]: under Countable Choice, the Fourier multiplier $e^{-4\pi^2|k|^2s}$ defines the unique weak heat profile, which is smooth for positive time, solves $\partial_s\rho_s=\Delta\rho_s$, preserves its initial range $[0,1]$, and preserves its spatial mean.

## Proof

1.1 Since $\rho$ is smooth and periodic, repeated integration by parts gives $(1+4\pi^2|k|^2)^m\widehat\rho(k)=\widehat{(1-\Delta)^m\rho}(k)$, so $|\widehat\rho(k)|\le C_m(1+|k|^2)^{-m}$ for every integer $m\ge1$. The number of lattice points with $\|k\|_\infty=r$ is at most $(2r+1)^d-(2r-1)^d\le C_dr^{d-1}$. Thus for every multi-index $\alpha$, choosing $m>(d+|\alpha|)/2$ makes $\sum_k(2\pi|k|)^{|\alpha|}|\widehat\rho(k)|$ finite, so the Fourier series and its differentiated series converge uniformly on compact time intervals including $s=0$. For $s\ge1$, the same shell bound and the Fourier formula in [F2] give $\|\partial^\alpha(\rho_s-\bar\rho)\|_\infty\le e^{-4\pi^2s}\sum_{k\ne0}(2\pi|k|)^{|\alpha|}|\widehat\rho(k)|e^{-4\pi^2(|k|^2-1)}\le C_{\alpha,\rho}e^{-4\pi^2s}$. The zero Fourier coefficient is $\widehat\rho(0)=\bar\rho$, proving the asserted smoothness and $C^\infty$ convergence. [A1, F2, algebra]

2.1 The heat profile stays in $[\varepsilon,1-\varepsilon]$: the affine rescaling $v_0=(\rho-\varepsilon)/(1-2\varepsilon)$ lies in $[0,1]$, and its Fourier heat profile $v_s$ preserves $[0,1]$ by [F2]. The multiplier is linear and fixes constants, so $\rho_s=\varepsilon+(1-2\varepsilon)v_s$; its mean is $\bar\rho$ by the zero-mode calculation in step 1.1. [F2, step 1.1, algebra]

3.1 Define $a(t)=0$ for $t\le0$ and $a(t)=e^{-1/t}$ for $t>0$, and set $\zeta(t)=a(t)/(a(t)+a(1-t))$ on $[0,1]$. For each derivative order, the right derivatives of $a$ at zero are sums of terms $t^{-m}e^{-1/t}$, which tend to zero; hence $a$ is smooth and flat at zero. The denominator is positive on $[0,1]$, $\zeta(0)=0$, $\zeta(1)=1$, and $\zeta$ is flat at both endpoints in the sense that all derivatives of $\zeta$ vanish at zero and all derivatives of $\zeta-1$ vanish at one. Define $\sigma_t^S=\bar\rho+\zeta(t)(\rho_{S+1-t}-\bar\rho)$. This is smooth by [F2], has mean $\bar\rho$, has values in $[\varepsilon,1-\varepsilon]$ by step 2.1, starts at $\bar\rho$, and ends at $\rho_S$. [F2, step 2.1, construct, algebra]

4.1 Put $g_t=\partial_t\sigma_t^S$, which has zero mean. Define the smooth periodic potential $\phi_t$ by its Fourier coefficients $\widehat\phi_t(0)=0$ and $\widehat\phi_t(k)=\widehat g_t(k)/(4\pi^2|k|^2)$ for $k\ne0$, and set $\kappa_t^S=\nabla\phi_t$. Repeated integration by parts applied to the smooth $g_t$ gives rapid coefficient decay, so the series for $\phi_t$ and all its space and time derivatives converge uniformly. Termwise differentiation gives $\Delta\phi_t=-g_t$, hence $\partial_t\sigma^S+\nabla\cdot\kappa^S=0$. At $t=1$, $g_1=-\Delta\rho_S$, so $\phi_1=\rho_S-\bar\rho$ and $\kappa_1^S=\nabla\rho_S$. Flatness of $\zeta-1$ at $1$ makes every derivative of $\sigma^S$ agree there with the reversed heat segment; the fixed linear Fourier inverse gives the same matching for $\kappa^S$. [F2, step 3.1, construct, algebra]

5.1 For $k\ne0$, the Fourier coefficient of $\nabla\phi_t$ has magnitude $|\widehat g_t(k)|/(2\pi|k|)$. Repeated integration by parts gives $|\widehat g_t(k)|\le C_m\|g_t\|_{C^{2m}}(1+|k|^2)^{-m}$; choosing $m$ with $2m>d-1$ makes $\sum_{k\ne0}(1+|k|^2)^{-m}/|k|$ finite by the lattice-shell bound in step 1.1, hence $\|\kappa_t^S\|_\infty\le C_m'\|g_t\|_{C^{2m}}$. The formula for $g_t$ and the $C^\infty$ decay in step 1.1, together with $\partial_s\rho_s=\Delta\rho_s$ from [F2], imply $\sup_{0\le t\le1}\|g_t\|_{C^{2m}}\to0$ and $\sup_{0\le t\le1}\|\nabla\sigma_t^S\|_\infty\to0$ as $S\to\infty$. By step 2.1, $\chi(\sigma_t^S)\ge\varepsilon(1-\varepsilon)$; since the space-time domain has measure one, [F1] bounds the connector action by $\frac{1}{4\varepsilon(1-\varepsilon)}\sup_{t,x}|\kappa_t^S+\nabla\sigma_t^S|^2$, which tends to zero. [A1, F1, F2, step 1.1, step 2.1, step 4.1, algebra] ∎

