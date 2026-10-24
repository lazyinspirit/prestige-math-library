---
id: thm-harmonic-majorant-characterization-of-plane-subharmonicity
kind: theorem
title: "Subharmonicity is equivalent to harmonic comparison on compactly contained discs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function, lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, def-poisson-integral-on-the-disc, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-conformal-invariance-of-plane-harmonicity, thm-mean-value-property-for-plane-harmonic-functions, thm-monotone-convergence-for-the-integral, thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain and let
$u:\Omega\to[-\infty,\infty)$. The following are equivalent.

1. $u$ is subharmonic on $\Omega$.
2. $u$ is upper semicontinuous, is not identically $-\infty$ on any connected
   component, and for every closed disc $\overline{D(a,r)}\subseteq\Omega$ and
   every function $h$ continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$,
   and satisfying $h\ge u$ on $\partial D(a,r)$, one has $h\ge u$ on $D(a,r)$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, a function $u:\Omega\to[-\infty,\infty)$, and a closed disc $\overline{D(a,r)}\subseteq\Omega$.

[L1] Subharmonic means upper semicontinuous, not identically $-\infty$ on a connected component, and satisfying the circle submean inequality on every closed disc in the domain ([[def-plane-subharmonic-function]]).

[L2] For an upper semicontinuous extended-real function, circle boundary values are Borel measurable and bounded above, so decreasing continuous approximants to the boundary data have well-defined circle averages ([[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]]).

[L3] Continuous boundary data on the unit circle have a unique continuous harmonic Poisson extension to the closed disc ([[def-poisson-integral-on-the-disc]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L4] Plane harmonic functions satisfy the circle mean-value property, and affine holomorphic changes of coordinate preserve harmonicity, so the unit-disc Poisson solution transports to every Euclidean disc ([[thm-mean-value-property-for-plane-harmonic-functions]], [[thm-conformal-invariance-of-plane-harmonicity]]).

[L5] Monotone convergence for the nonnegative integral identifies the limit of the circle integrals of the increasing nonnegative boundary functions $M-\phi_n$ with the integral of their pointwise limit $M-g$ ([[thm-monotone-convergence-for-the-integral]]).

[L6] A subharmonic function that attains a finite interior maximum is constant on its connected component ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1. Let $h$ be continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, and satisfy $h\ge u$ on $\partial D(a,r)$. On $D(a,r)$ define $v:=u-h$. For $z\in D(a,r)$ and every $0<\rho<\operatorname{dist}(z,\partial D(a,r))$, the submean inequality for $u$ and the circle mean-value property for $h$ give [L1, L4, given] $$v(z)=u(z)-h(z)\le\frac1{2\pi}\int_0^{2\pi}\bigl(u(z+\rho e^{it})-h(z+\rho e^{it})\bigr)\,dt.$$ Thus $v$ is subharmonic on $D(a,r)$. If some point of $D(a,r)$ satisfied $v>0$, then upper semicontinuity on the compact disc would make $v$ attain a positive interior maximum there, contradicting [L6] because $v\le0$ on $\partial D(a,r)$. Hence $v\le0$ on $D(a,r)$, so $h\ge u$ throughout the disc. This is condition 2. [L1, L4, L6, given]

1.2 Assume condition 2. Fix a closed disc $\overline{D(a,r)}\subseteq\Omega$ and write $g(\zeta)=u(\zeta)$ on $\partial D(a,r)$. By [L2], $g$ is Borel measurable and bounded above. On the compact circle, define [given, L2, construct] $$\phi_n(\zeta):=\sup_{\eta\in\partial D(a,r)}\bigl(g(\eta)-n|\zeta-\eta|\bigr).$$ Each $\phi_n$ is finite and continuous, satisfies $\phi_n\ge g$, and decreases pointwise to $g$ because $g$ is upper semicontinuous. [given, L2, construct]

2.1 Transporting the Poisson solution from the unit disc by [L3] and [L4], let $h_n$ be the harmonic function on $D(a,r)$, continuous on $\overline{D(a,r)}$, whose boundary values are $\phi_n$. Since $\phi_n\ge g=u$ on $\partial D(a,r)$, condition 2 gives $u\le h_n$ on $D(a,r)$. Evaluating at the center and using the Poisson formula at the center of a disc, [step 1.2, L3, L4] $$u(a)\le h_n(a)=\frac1{2\pi}\int_0^{2\pi}\phi_n(a+re^{it})\,dt.$$ [step 1.2, L3, L4]

3.1 Let $M$ be an upper bound for $\phi_1$ on the circle. Then $M-\phi_n$ is an increasing sequence of nonnegative boundary functions, so [L5] gives [step 1.2, step 2.1, L1, L5] $$\lim_{n\to\infty}\frac1{2\pi}\int_0^{2\pi}\phi_n(a+re^{it})\,dt=\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt.$$ Passing to the limit in step 2.1 yields the circle submean inequality at $a$. Since the disc was arbitrary and upper semicontinuity is already part of condition 2, condition 1 follows. [step 1.2, step 2.1, L1, L5] ∎
