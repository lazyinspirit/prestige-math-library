---
id: lem-qa-30-finite-grid-quantum-subgradient
kind: lemma
title: "A finite-grid quantum subgradient from approximate values"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-subgradient-and-subdifferential
  - thm-riemann-fubini-on-product-rectangles
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qa-cyclic-quantum-fourier-transform
  - lem-qa-13-pi-rational-bounds
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
axiom_use: "None; finite-dimensional geometry and finite oracle circuits suffice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "van Apeldoorn, Gilyen, Gribling, de Wolf, Convex optimization using quantum oracles, Lemmas 14–21 and Theorem 23"
      url: "https://arxiv.org/pdf/1809.00643"
---

## Statement

Let $1\le d\le n$, let $C\subseteq\mathbb R^d$, and let $f:C\to\mathbb R$ be convex. Let $r_1,L>0$ and suppose $f$ is $L$-Lipschitz on a neighborhood of $[-2r_1,2r_1]^d\subset C$, with every point there having a subgradient in $\mathbb R^d$ of norm at most $L$. Let $0<\rho\le1/3$, $\rho_0=99\rho/100$, $0<\delta\le nr_1L/\rho_0$, and $r_2=\sqrt{\delta r_1\rho_0/(nL)}$. A deterministic clean value oracle approximates $f$ to error at most $\delta$ on the finite query grids.

Choose a finite uniform grid of cell centers of $[-r_1,r_1]^d$, with $2^b$ cells per coordinate and mesh $h_0=2r_1/2^b\le(\rho/1000)r_2^2/(8n^2r_1)$. Sample one center $z$ uniformly using $b$ independent fair bits per coordinate, and keep it fixed across all subsequent runs. Put $a=2r_2/n$, $B=La$, $m=\max\{5,\lceil\log_2(B/(28\pi\delta))\rceil\}$, $M=2^m$, and $B_*=28\pi\delta M$. On each independent run prepare the uniform product grid $u_i=(j_i+1/2)/M-1/2$, apply phase $\exp(2\pi iM\widetilde f(z+au)/(3B_*))$ with clean uncomputation, apply the negative-sign QFT to each coordinate, and decode signed integers $y_i$ as $3B_*y_i/(aM)$. Use $N=\lceil18\ln(1000n/\rho)+3\rceil$ independent runs and coordinate medians. A total implemented-phase operator error at most $1/1000$ per run is permitted.

With probability at least $1-\rho$, the resulting vector $v\in\mathbb R^d$ satisfies, simultaneously for every $y\in C$,
$$f(y)\ge f(0)+\langle v,y\rangle-(23n)^2\sqrt{\frac{\delta L}{\rho_0r_1}}\|y\|-2L\sqrt n\,r_1.$$
The number of value-oracle and inverse calls is $O(\log(n/\rho))$. Random bits, phases, QFT gates, arithmetic, and output costs are separate.

## Facts & Assumptions

**Given:** The hypotheses and the finite procedure in the Statement; all repetitions use the same chosen $z$ and the same completed value oracle.

[F1] Iterated Riemann integration agrees with the multiple integral for a Riemann-integrable function on a product rectangle. ([[thm-riemann-fubini-on-product-rectangles]])

[F2] Independent Bernoulli trials obey $\Pr(|S-\mathbb ES|\ge t)\le2e^{-2t^2/N}$. ([[lem-chernoff-bound-for-independent-bernoulli-trials]])

[F3] The exact power-of-two QFT has the positive Fourier kernel, and its inverse the negative kernel. ([[thm-qa-exact-binary-qft-circuit-correct]], [[def-qa-cyclic-quantum-fourier-transform]])

[F4] $3<\pi<22/7$. ([[lem-qa-13-pi-rational-bounds]])

[F5] A subgradient has the supporting-inequality convention of [[def-subgradient-and-subdifferential]].

[F6] The Euclidean Cauchy–Schwarz inequality bounds $\|y\|_1\le\sqrt n\|y\|_2$. ([[thm-cauchy-schwarz-and-the-euclidean-norm]])

## Proof


1.1 Put $\tau=r_2$, $D_i(z)=(f(z+\tau e_i)-2f(z)+f(z-\tau e_i))/\tau^2$, $D=\sum_iD_i$, and $p_i(z)=(f(z+\tau e_i)-f(z-\tau e_i))/(2\tau)$. The bound on $\delta$ gives $\tau\le r_1$. Convexity makes every $D_i\ge0$. On the query rectangle each $D_i$ and $D$ is a finite linear combination of translates of the $L$-Lipschitz function $f$, hence is Lipschitz there; all sections are likewise Lipschitz and Riemann integrable. Uniform grid Darboux sums have gaps bounded by the Lipschitz constant times cell diameter times total volume, so [F1] applies. For $d=1$, use the one-dimensional integral directly; for $d\ge2$, apply [F1] to the first coordinate and the remaining $d-1$ coordinates. On any coordinate line, cancellation of shifted integrals leaves two pairs of boundary strips of length $\tau$. The absolute value of each pair is at most $L\tau^2$, so $\int_{-r_1}^{r_1}(f(t+\tau)-2f(t)+f(t-\tau))dt\le2L\tau^2$. Thus $\mathbb E D(Z)\le dL/r_1\le nL/r_1$ for uniform $Z$. [given, F1, algebra]

2.1 Coupling $Z$ to its cell center $z$, each of the four terms in a second difference moves by at most its Lipschitz constant times $\sqrt d\,h_0/2$. Thus $|D(z)-D(Z)|\le4n^2Lh_0/\tau^2\le(\rho/1000)L/(2r_1)$. For the finite uniform center distribution, Markov's inequality follows by summing its nonnegative weights. Therefore $D(z)\le2nL/(\rho_0r_1)$ except with probability at most $\rho_0/2+(\rho/1000)\rho_0/(4n)$. [step 1.1, given, algebra]

3.1 Fix such a good center. On the symmetric points $\pm\tau e_i$, the convex function $q(u)=f(z+u)-f(z)-\langle p(z),u\rangle$ has value $\tau^2D_i(z)/2\le\tau^2D(z)/2$. Every point of the $\ell_1$ ball of radius $\tau$ is a convex combination of these points. Convexity gives the upper bound there; applying convexity to $u,-u$ and $q(0)=0$ gives the same lower bound. Hence $|q(u)|\le\tau^2D(z)/2\le\delta$ on that ball. The cube $a[-1/2,1/2]^d$ lies in it. Lipschitzness gives $|p_i(z)|\le L$. [step 2.1, given, algebra]

4.1 Put $\gamma=ap(z)/(3B_*)$; then $\|\gamma\|_\infty\le1/3$. The ideal affine phase on the product grid produces independent one-coordinate Fourier distributions centered at $M\gamma_i$. For an integer output at circular distance $D$ from this center, summing the geometric progression gives probability $\sin^2(\pi M\gamma_i)/(M^2\sin^2(\pi D/M))\le1/(4D^2)$ for $0<D\le M/2$. Thus the probability of circular error greater than four is at most $\frac12\sum_{j\ge4}j^{-2}\le1/6$, since $j^{-2}\le1/(j(j-1))$ for $j\ge4$ and $\sum_{j\ge4}1/(j(j-1))=1/3$ by telescoping. Because $M\ge32$ and $|\gamma_i|\le1/3$, the signed interval endpoints are farther than four from the center; circular error at most four therefore also gives ordinary signed error at most four. [F3, step 3.1, algebra]

5.1 The affine error from step 3.1 plus value error is at most $2\delta$. Since $B_*=28\pi\delta M$, the phase angle perturbation is at most $1/21$ at every address. The Euclidean distance of the resulting unit vectors is at most $1/21$; a measurement event changes by at most that distance, as follows by resolving the two pure states in their two-dimensional span and maximizing the projection difference. The allowed implemented-phase operator error adds at most $1/1000$. Each coordinate therefore has ordinary signed error at most four with probability greater than $1-1/6-1/21-1/1000>2/3$. The decoded gradient error on this event is at most $12B_* /(aM)=336\pi\delta/a$. [step 4.1, given, algebra]

6.1 For fixed $z$, the runs are independent trials for this same coordinate, not independently sampled target functions. A median fails only if at least half the runs fail. The bound from [F2] is at most $2e^{-N/18}$, because the expected bad count is at most $N/3$ and the excess is at least $N/6$. The chosen count and a union bound give simultaneous coordinate accuracy except with probability at most $\rho/500$. Every phase run uses one value query and its inverse, giving $2N\le36\ln(1000n/\rho)+8=O(\log(n/\rho))$ calls combined. [F2, step 5.1, given, algebra]

7.1 Let $s$ be any subgradient at the good center. Applying [F5] at the two coordinate offsets yields $|s_i-p_i(z)|\le\tau D_i(z)/2$, hence $\|s-p(z)\|_\infty\le nL\tau/(\rho_0r_1)$. Add the gradient error from step 6.1 and use $\tau^2=\delta r_1\rho_0/(nL)$. This gives $\|s-v\|_\infty\le(1+168\pi)\sqrt{\delta n^3L/(\rho_0r_1)}<23^2\sqrt{\delta n^3L/(\rho_0r_1)}$ by [F4]. [F4, F5, step 2.1, step 6.1, algebra]

8.1 The subgradient inequality gives $f(y)\ge f(z)+\langle s,y-z\rangle$. Both $|f(z)-f(0)|$ and $|\langle s,z\rangle|$ are at most $L\sqrt n r_1$. Replacing $s$ by $v$ costs at most $\|s-v\|_\infty\|y\|_1\le\sqrt n\|s-v\|_\infty\|y\|$. Step 7.1 gives exactly the displayed inequality. The total failure is at most $\rho_0/2+(\rho/1000)\rho_0/(4n)+\rho/500<\rho$. The query count is that of step 6.1; choosing the finite shift costs no function query. [step 2.1, step 6.1, step 7.1, F5, F6, algebra] ∎

