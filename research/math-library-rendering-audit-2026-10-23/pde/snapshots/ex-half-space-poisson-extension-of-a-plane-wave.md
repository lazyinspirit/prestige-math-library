---
id: ex-half-space-poisson-extension-of-a-plane-wave
kind: example
title: Half-space Poisson extension of a plane wave
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space, thm-real-power-continuity-and-derivatives, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, half-space Poisson kernel"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.1, printed p. 111, half-space Poisson kernel and bounded solutions"
---

## Example

Assume Countable Choice and $n\ge3$. Write $e_n$ for the last canonical basis vector $e_{n-1}$. Fix $\xi\in\mathbb R^{n-1}$ and let $g(x')=\exp(2\pi i\,\xi\cdot x')$ on $\partial H=\mathbb R^{n-1}$. Then the half-space Poisson integral of $g$ is
$$U_g(x',t)=\exp\bigl(-2\pi|\xi|t\bigr)\exp\bigl(2\pi i\,\xi\cdot x'\bigr),\qquad (x',t)\in H,$$
including the case $\xi=0$, where the extension is the constant $1$. Consequently $\partial_tU_g(x',0)=-2\pi|\xi|\,g(x')$ and the outward normal derivative at the boundary is $+2\pi|\xi|\,g$, so for a single spatial frequency the Dirichlet-to-Neumann map is multiplication by $2\pi|\xi|$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a frequency $\xi\in\mathbb R^{n-1}$ and the datum $g(x')=\exp(2\pi i\,\xi\cdot x')$ on $\partial H$.

[F1] For bounded continuous $g$ the half-space Poisson integral $U_g$ is the unique bounded harmonic function on $H$, continuous on $\overline H$, with trace $g$; the Poisson kernel is $P_H((x',t),z)=2t/(\omega_{n-1}(|x'-z|^2+t^2)^{n/2})$ ([[thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space]]).

[F2] Laplacian and partial derivatives: $\Delta f=\sum_i\partial_i\partial_if$, and for the exponential $\exp(2\pi i\,\xi\cdot x')$ the tangential derivatives give $\Delta_{x'}\exp(2\pi i\,\xi\cdot x')=-4\pi^2|\xi|^2\exp(2\pi i\,\xi\cdot x')$ by the chain and product rules, while $\partial_t^2\exp(-2\pi|\xi|t)=4\pi^2|\xi|^2\exp(-2\pi|\xi|t)$ ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[thm-derivative-of-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] In the negative-sign $2\pi$ normalisation the Fourier transform of the plane wave $x'\mapsto e^{2\pi i\xi\cdot x'}$ is $\delta_\xi$ ([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

[F4] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Work under [F4] and define $V(x',t):=\exp(-2\pi|\xi|t)\exp(2\pi i\,\xi\cdot x')$ on $\overline H$. Since $|V(x',t)|=\exp(-2\pi|\xi|t)\le1$ and $V(x',0)=g(x')$, the function $V$ is bounded and continuous on $\overline H$ with trace $g$. [given, F4, algebra]

2.1 By [F2], $\Delta V=\Delta_{x'}V+\partial_t^2V=-4\pi^2|\xi|^2V+4\pi^2|\xi|^2V=0$ on $H$; so $V$ is harmonic (all derivatives exist and are continuous, being those of an exponential). [step 1.1, F2]

3.1 Applying uniqueness in [F1] to $V$ and to the Poisson integral $U_g$ of the bounded continuous datum $g$ gives $U_g=V$, which is the displayed formula; for $\xi=0$ this reads $U_g\equiv1$. [step 1.1, step 2.1, F1]

4.1 Differentiating the formula at $t=0$ gives $\partial_tU_g(x',0)=-2\pi|\xi|\,g(x')$; the outward unit normal of $H$ at the boundary plane is $-e_n$, so the outward normal derivative is $-\partial_tU_g(x',0)=+2\pi|\xi|\,g(x')$. This is the single-mode Dirichlet-to-Neumann computation: the half-space Poisson multiplier $e^{-2\pi|\xi|t}$ differentiates to the boundary multiplier $2\pi|\xi|$ in the outward normal. [step 3.1, algebra]

5.1 The same multiplier is visible in the Fourier description: [F3] says the datum $g$ has Fourier transform $\delta_\xi$, and the extension multiplies that mode by the factor $e^{-2\pi|\xi|t}$; the constant mode $\xi=0$ is fixed and does not decay. [step 3.1, F3, algebra] ∎
