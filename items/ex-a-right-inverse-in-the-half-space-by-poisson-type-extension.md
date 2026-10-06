---
id: ex-a-right-inverse-in-the-half-space-by-poisson-type-extension
kind: example
title: "A Poisson-type extension and its local and global Sobolev traces"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-trace-estimate-on-the-half-space, lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-bounded-right-inverse-for-the-sobolev-trace, thm-fourier-inversion-on-schwartz-space, thm-plancherel, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, def-fourier-transform-on-l-one-of-rn, thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space, def-bounded-c-k-domain-and-boundary-charts, thm-tonelli-and-fubini-for-completed-product-measures, thm-dominated-convergence, lem-weak-leibniz-rule-with-a-smooth-factor, def-countable-choice, def-axiom-of-choice, thm-l-one-l-two-agreement-of-fourier-transform]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-4.md"
      - "research/frontier-38-owner-30-alpha-batch-4-5a.md"
      - "research/frontier-38-owner-30-step5-hash-4-post-5a.json"
    content_sha256: "abe815f10e5154668dbf93f2e2a065e532e31d6fcaa68aa0162c8b32bb730f95"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 98-100: the harmonic extension of a boundary function and the identity $\\|DU\\|_{L^2}^2=\\|(-\\Delta)^{1/4}u\\|_{L^2}^2$ via Plancherel."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorem 3.3, printed pp. 23-26: an explicit scaled-kernel right inverse of the half-space trace; the Poisson kernel is the $p=2$ smooth model."
    - title: "Petru Mironescu, Note on Gagliardo's theorem (fetch-verified Internet Archive capture of HAL hal-01131162v1), Annals of the University of Bucharest (Mathematical Series) 6 (LXIV) (2015), no. 1, 99-103"
      url: "https://web.archive.org/web/20240206144914id_/https://hal.science/hal-01131162/document"
      locator: "Section 1, printed pp. 99-101: the explicit construction in the endpoint case $p=1$, showing that the lift is a convolution against a scaled kernel rather than a pointwise formula."
---

## Example

Assume the Axiom of Choice, let $d\ge1$ and use the $2\pi$-normalised Fourier
transform. For $g\in C_c^\infty(\mathbb R^d;\mathbb K)$ define
$$U(x,t):=\int_{\mathbb R^d}e^{2\pi ix\cdot\xi}e^{-2\pi t|\xi|}\widehat g(\xi)\,d\xi,\qquad x\in\mathbb R^d,\ t\ge0.$$
Then $U$ is smooth on $\mathbb R^d\times[0,\infty)$, bounded and harmonic on
$H=\mathbb R^d\times(0,\infty)$, extends the datum with $U(\cdot,0)=g$, and
$\nabla U\in L^2(H)$ with
$$\|\nabla U\|_{L^2(H)}^2=2\pi\int_{\mathbb R^d}|\xi|\,|\widehat g(\xi)|^2\,d\xi<\infty.$$
The classical boundary value is realised by the trace in two forms. (i) For
every $R>0$, choose $\kappa_R\in C_c^\infty(\mathbb R^d)$ equal to one on
$B_R(0)$ and a smooth compact normal cutoff $\eta$ equal to one near zero.
Then $V_R(x,t)=\kappa_R(x)\eta(t)U(x,t)$ belongs to $W^{1,2}(H)$, is
continuous with compact support in $\overline H$, and
$T_+V_R=\kappa_Rg$, giving the boundary value on $B_R(0)$.
(ii) If in
addition $U\in L^2(H)$ — which holds for every $g$ when $d\ge2$, and for
$d=1$ exactly when $\int_{\mathbb R}g=0$ — then $U\in W^{1,2}(H)$ and
$T_+U=g$ for the flat trace $T_+$ of
[[thm-trace-estimate-on-the-half-space]]. For $d=1$ with
$\int_{\mathbb R}g\ne0$ one has $U\notin L^2(H)$, so the half-space trace is
not defined on $U$ and (i) is the correct local form of the identity. This
exhibits a Poisson-type right inverse of the half-space trace for smooth data satisfying the stated $L^2$ condition; the cutoff form
gives a local lift for every smooth datum. It is an illustration only: it does not prove the general-$p$ right
inverse of [[thm-bounded-right-inverse-for-the-sobolev-trace]].

## Facts & Assumptions

**Given:** The Axiom of Choice; $d\ge1$; the $2\pi$-normalised transform of [[def-fourier-transform-on-l-one-of-rn]]; a datum $g\in C_c^\infty(\mathbb R^d;\mathbb K)$; the extension $U$ defined by the displayed integral; the half-space $H=\mathbb R^d\times(0,\infty)$ with its flat trace $T_+$ of [[thm-trace-estimate-on-the-half-space]].

[F1] Fourier inversion on Schwartz space: for $f\in\mathcal S(\mathbb R^d)$ and every $x$, $f(x)=\int_{\mathbb R^d}\widehat f(\xi)e^{2\pi ix\cdot\xi}d\xi$, the integral converging absolutely. ([[thm-fourier-inversion-on-schwartz-space]])

[F2] Plancherel gives a unitary Fourier transform on $L^2$. For $h\in L^1\cap L^2$, the inverse Fourier integral $\int h(\xi)e^{2\pi ix\cdot\xi}d\xi$ represents $\mathcal F_2^{-1}h$ and has $L^2$ norm $\|h\|_2$: apply integral/L2 agreement to $h$, reflect $x\mapsto-x$, and extend the Schwartz inversion identity by $L^2$ continuity. ([[thm-plancherel]], [[thm-l-one-l-two-agreement-of-fourier-transform]], [[thm-fourier-inversion-on-schwartz-space]])

[F3] The negative-sign, $2\pi$-normalised transform maps $\mathcal S$ continuously to itself: for $g\in C_c^\infty(\mathbb R^d)$ the transform $\widehat g$ is Schwartz and $\mathcal F(\partial^\alpha f)(\xi)=(2\pi i\xi)^\alpha\widehat f(\xi)$, $\partial^\beta\widehat f=\mathcal F((-2\pi ix)^\beta f)$; in particular $|\xi|^N|D^\beta\widehat g(\xi)|$ is bounded on $\mathbb R^d$ for all multi-indices and all $N$. ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[def-fourier-transform-on-l-one-of-rn]])

[F4] Poisson kernel model in ambient dimension $n\ge3$: for bounded continuous $g$ on $\partial H=\mathbb R^{n-1}$, the Poisson integral is bounded, smooth and harmonic on $H$, continuous on $\overline H$ with boundary value $g$, and it is the unique bounded harmonic function on $H$ with these properties. ([[thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space]])

[F5] Tonelli for nonnegative measurable functions on a completed product measure: the iterated integral equals the product integral, finite or infinite. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F6] Dominated convergence, in integral and in $L^2$ form: if $f_k\to f$ almost everywhere and $|f_k|\le G$ for a single integrable $G$, then $\int f_k\to\int f$; if $|f_k|\le G$ for a single $G\in L^2$, then $\|f_k-f\|_2\to0$. ([[thm-dominated-convergence]])

[F8] The flat trace $T_+:W^{1,2}(H)\to L^2(\mathbb R^d)$ is the unique bounded extension of classical restriction, and $T_+u=u(\cdot,0)$ for every compactly supported $u\in C(\overline H)\cap W^{1,2}(H)$. ([[thm-trace-estimate-on-the-half-space]])

[F9] Weak Leibniz rule with a smooth factor: if $\eta\in C^\infty(H)$ has bounded value and first derivatives and $u\in W^{1,2}(H)$, then $\eta u\in W^{1,2}(H)$ with $\nabla(\eta u)=\eta\nabla u+u\nabla\eta$ as $L^2$ classes. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

## Proof

**Proof technique:** direct.

1.1 Smoothness, boundedness, harmonicity, boundary values and the Poisson identification. For every pair of multi-indices the differentiated integrand equals $(2\pi i\xi)^\alpha(-2\pi|\xi|)^k e^{2\pi ix\cdot\xi}e^{-2\pi t|\xi|}\widehat g(\xi)$, which on $t\ge0$ is dominated by $C_{\alpha,k}|\xi|^{|\alpha|+k}|\widehat g(\xi)|$, an integrable function because $\widehat g$ is Schwartz [F3]; differentiating under the integral sign is therefore legitimate, so $U\in C^\infty(\mathbb R^d\times[0,\infty))$ with those derivative formulas, $|U|\le\|\widehat g\|_1$, and $U(x,0)=\int e^{2\pi ix\cdot\xi}\widehat g(\xi)d\xi=g(x)$ by inversion [F1]. For $t>0$ the symbol identity $(-2\pi|\xi|)^2+\sum_j(2\pi i\xi_j)^2=4\pi^2|\xi|^2-4\pi^2|\xi|^2=0$ gives $(\partial_t^2+\Delta_x)U=0$, so $U$ is harmonic on $H$, and $U(\cdot,t)\to g$ in $L^2(\mathbb R^d)$ as $t\downarrow0$ by [F6] applied to $|(e^{-2\pi t|\xi|}-1)\widehat g(\xi)|^2\le4|\widehat g(\xi)|^2$. For $d\ge2$ the theorem [F4] applies with $n=d+1\ge3$ to the bounded continuous datum $g$ and identifies $U$ with the bounded harmonic Poisson integral of $g$. [F1, F2, F3, F4, F6, algebra, given]

2.1 The gradient energy. Fix $t>0$. The functions $h_t(\xi):=(-2\pi|\xi|)e^{-2\pi t|\xi|}\widehat g(\xi)$ and $h_{t,j}(\xi):=(2\pi i\xi_j)e^{-2\pi t|\xi|}\widehat g(\xi)$ belong to $L^1\cap L^2$ by the rapid decay of $\widehat g$ (they need not be Schwartz at $\xi=0$), and by step 1.1 the functions $\partial_tU(\cdot,t)$ and $\partial_{x_j}U(\cdot,t)$ are their inverse transforms. By Plancherel [F2], $\int_{\mathbb R^d}|\partial_tU(x,t)|^2dx=4\pi^2\int|\xi|^2e^{-4\pi t|\xi|}|\widehat g(\xi)|^2d\xi$ and $\int_{\mathbb R^d}|\partial_{x_j}U(x,t)|^2dx=4\pi^2\int\xi_j^2e^{-4\pi t|\xi|}|\widehat g(\xi)|^2d\xi$, so $\int_{\mathbb R^d}|\nabla U(x,t)|^2dx=8\pi^2\int|\xi|^2e^{-4\pi t|\xi|}|\widehat g(\xi)|^2d\xi$ because $|\xi|^2+\sum_j\xi_j^2=2|\xi|^2$. Integrating in $t$ over $(0,\infty)$ with Tonelli [F5] and using $\int_0^\infty e^{-4\pi t|\xi|}dt=1/(4\pi|\xi|)$ for $\xi\ne0$ gives $\|\nabla U\|_{L^2(H)}^2=2\pi\int|\xi||\widehat g(\xi)|^2d\xi$, finite because the integrand is bounded near zero and $|\xi||\widehat g(\xi)|^2\le C(1+|\xi|)^{-d-1}$ at infinity for a constant $C$ by the Schwartz bounds of [F3]. [F2, F3, F5, step 1.1, algebra]

2.2 Local trace by compact cutoffs. Fix $R>0$ and the cutoffs $\kappa_R,\eta$ of (i). Step 1.1 bounds $U$ and all its first derivatives on the compact support of these cutoffs; the Leibniz formula therefore gives $V_R\in W^{1,2}(H)$ with compact support in $\overline H$. Classical derivatives are weak derivatives by integration against interior tests. Its continuous boundary value is $\kappa_Rg$, so [F8] gives $T_+V_R=\kappa_Rg$, equal to $g$ on $B_R(0)$. This local construction applies even when $U\notin L^2(H)$ . [F8, step 1.1, algebra]

3.1 The global trace under the $L^2(H)$ condition, and the exact condition. First compute $\int_H|U|^2$: by Plancherel in $x$ [F2] and Tonelli [F5], $\int_H|U(x,t)|^2dx\,dt=\int_{\mathbb R^d}|\widehat g(\xi)|^2\int_0^\infty e^{-4\pi t|\xi|}dt\,d\xi=\frac{1}{4\pi}\int_{\mathbb R^d}\frac{|\widehat g(\xi)|^2}{|\xi|}d\xi$ with the value $+\infty$ allowed. This is finite exactly when $d\ge2$, or $d=1$ and $\widehat g(0)=\int_{\mathbb R}g=0$: for $d\ge2$ one has $\int_{B_1}|\xi|^{-1}d\xi<\infty$; for $d=1$ and $\widehat g(0)\ne0$ continuity of $\widehat g$ gives $|\widehat g(\xi)|^2/|\xi|\ge c/|\xi|$ near $\xi=0$, which is not integrable; and for $d=1$ with $\widehat g(0)=0$ the mean value bound $|\widehat g(\xi)|\le C|\xi|$ on $B_1$ [F3] makes the integrand bounded by $C^2|\xi|$ there, with Schwartz decay at infinity. Assume now $U\in L^2(H)$; then $U\in W^{1,2}(H)$ by step 2.1. Choose $\psi\in C_c^\infty(\mathbb R)$ with $0\le\psi\le1$, $\psi=1$ on $[-1,1]$ and $\psi=0$ outside $[-2,2]$, and set $\eta_k(x,t):=\psi(|x|/k)\psi(t/k)$ on $H$, a smooth multiplier with $|\nabla\eta_k|\le2\|\psi'\|_\infty/k$. By the weak Leibniz rule [F9], $\eta_kU\in W^{1,2}(H)$, it is compactly supported and continuous on $\overline H$, and $(\eta_kU)(\cdot,0)=\psi(|\cdot|/k)g$. Moreover $\eta_kU\to U$ in $W^{1,2}(H)$: both $\|\eta_kU-U\|_2$ and $\|(\eta_k-1)\nabla U\|_2$ tend to $0$ since $\eta_k\to1$ pointwise with $|\eta_k|\le1$, and $\|U\nabla\eta_k\|_2\le2\|\psi'\|_\infty\|U\|_{L^2(H)}/k\to0$. Hence, by continuity of $T_+$ and its agreement with classical restriction on compactly supported continuous elements [F8], $T_+U=\lim_kT_+(\eta_kU)=\lim_k\psi(|\cdot|/k)g=g$ in $L^2(\mathbb R^d)$, the last limit by [F6]. Finally, for $d=1$ with $\widehat g(0)\ne0$ the first computation gives $U\notin L^2(H)$, hence $U\notin W^{1,2}(H)$, so the half-space trace is not defined on $U$ and the local identity of step 2.2 is the correct form. [F2, F3, F5, F6, F8, F9, step 1.1, step 2.1, step 2.2, algebra] ∎

## Source notes

Schikorra's Section V.2 (printed pp. 98-100) computes exactly this harmonic extension and the identity $\|DU\|_{L^2}^2=\|(-\Delta)^{1/4}u\|_{L^2}^2$ via Plancherel; Kampanou's Theorem 3.3 (printed pp. 23-26) constructs a scaled-kernel right inverse whose $p=2$ smooth model is the Poisson kernel; Mironescu's Section 1 (printed pp. 99-101) explains why the endpoint lift is a scaled convolution rather than a pointwise formula. The example verifies all properties directly from the Fourier integral representation: for $d\ge2$ the function coincides with the bounded harmonic Poisson integral by the uniqueness in [F4], while for $d=1$ with nonzero boundary mean it lies in $L^2_{\mathrm{loc}}(H)$ but not in $L^2(H)$, so the trace identity is stated locally using compact cutoffs and globally only when $U\in L^2(H)$.
