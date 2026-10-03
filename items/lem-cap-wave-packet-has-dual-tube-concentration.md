---
id: lem-cap-wave-packet-has-dual-tube-concentration
kind: lemma
title: Cap wave packets concentrate on the dual tube
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-spherical-cap-and-dual-slab-scales
- def-fourier-restriction-and-adjoint-extension-operators
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
- cor-sine-and-cosine-are-one-lipschitz
- thm-sine-cosine-zero-sets-and-fundamental-period
- def-complex-lp-and-euclidean-test-function-conventions
- thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.2, printed p.8: spherical cap scales, dual tube and necessary exponent comparison; the exact constants and cap formula are computed locally.'
---

## Statement

Assume Countable Choice and let $n\ge2$. There is $c_n>0$ such that for every $\delta\in(0,1]$, every $v\in S^{n-1}$, every $\eta\in\mathbb R^n$ and every rotation $R$ with $Re_n=v$ the following holds. With $C_\delta(v)=\{\omega\in S^{n-1}:1-\omega\cdot v\le\delta^2\}$, the tube $T=\eta+\{\xi:|\xi\cdot v|\le c_n\delta^{-2},\ |\xi-(\xi\cdot v)v|\le c_n\delta^{-1}\}$ and the data $g_\eta(\omega)=e^{-2\pi i\eta\cdot\omega}\mathbf 1_{C_\delta(v)}(\omega)$, one has $|Eg_\eta(x)|\ge\tfrac12\sigma(C_\delta(v))$ for every $x\in T$. In particular the extension of cap data of angular radius $\delta$ is essentially coherent on a dual tube of dimensions $\delta^{-1}\times\cdots\times\delta^{-1}\times\delta^{-2}$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, $\delta\in(0,1]$, $v\in S^{n-1}$, $\eta\in\mathbb R^n$, and $\xi\in\mathbb R^n$ with $|\xi\cdot v|\le c_n\delta^{-2}$ and $|\xi-(\xi\cdot v)v|\le c_n\delta^{-1}$ for a constant $c_n\in(0,1/100]$ to be fixed below; write $x=\eta+\xi$.

[F1] Extension: for $g\in L^1(\sigma)$ one has $Eg(x)=\int_{S^{n-1}}e^{2\pi ix\cdot\omega}g(\omega)\,d\sigma(\omega)$, with $L^1(\sigma)$ computed componentwise for complex functions, and for a real $\varphi$ one has $|Eg(x)|\ge\operatorname{Re}\bigl(e^{-i\varphi}Eg(x)\bigr)$. ([[def-fourier-restriction-and-adjoint-extension-operators]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F2] Cap geometry: $\omega\cdot v\ge1-\delta^2$ on $C_\delta(v)$, the diameter satisfies $\operatorname{diam}C_\delta(v)\le2\sqrt2\,\delta$, and $\sigma(C_\delta(v))>0$. ([[lem-spherical-cap-and-dual-slab-scales]])

[F3] Unit-circle estimates: $\sin0=0$ and $|e^{i\theta}-1|=2|\sin(\theta/2)|\le|\theta|$ for every real $\theta$, because $|\sin u|\le|u|$ and $e^{i\theta}=\cos\theta+i\sin\theta$; consequently $1-\cos\theta=\tfrac12|e^{i\theta}-1|^2\le|e^{i\theta}-1|\le|\theta|$, so $\operatorname{Re}e^{i\theta}=\cos\theta\ge1-|\theta|$. In particular $\operatorname{Re}e^{i\theta}\ge\tfrac12$ whenever $|\theta|\le\tfrac12$. ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-sine-and-cosine-are-one-lipschitz]], [[thm-sine-cosine-zero-sets-and-fundamental-period]])



## Proof

**Proof technique:** direct; evaluate the extension of the modulated cap data, expand the phase in the cap parameter, and use the elementary lower bound for the real part of a unit-modulus exponential.

1.1 The extension of the data. With $g_\eta=e^{-2\pi i\eta\cdot\omega}\mathbf 1_{C_\delta(v)}$ and $x=\eta+\xi$, [F1] gives $Eg_\eta(x)=\int_{C_\delta(v)}e^{2\pi ix\cdot\omega}e^{-2\pi i\eta\cdot\omega}\,d\sigma(\omega)=\int_{C_\delta(v)}e^{2\pi i\xi\cdot\omega}\,d\sigma(\omega)$, since $x-\eta=\xi$. [F1, given]

1.2 The phase on the cap. Let $\omega\in C_\delta(v)$ and write $\omega=v+(\omega-v)$. Then $\xi\cdot\omega=\xi\cdot v+\xi\cdot(\omega-v)$, and by [F2] and the tube inequalities $$|\xi\cdot(\omega-v)|\le|(\xi\cdot v)(v\cdot(\omega-v))|+|(\xi-(\xi\cdot v)v)\cdot(\omega-v)|\le c_n\delta^{-2}\delta^2+2\sqrt2\,c_n\delta^{-1}\delta\le(1+2\sqrt2)c_n.$$ Choose $c_n:=1/100$, so $|\xi\cdot(\omega-v)|\le(1+2\sqrt2)/100<1/(4\pi)$ and $|2\pi\xi\cdot(\omega-v)|\le\tfrac12$. By the last clause of [F3], $\operatorname{Re}e^{2\pi i\xi\cdot(\omega-v)}\ge\tfrac12$ for every $\omega\in C_\delta(v)$. [F2, F3, given, algebra]

2.1 The lower bound. Multiplying step 1.1 by the unimodular factor $e^{-2\pi i\xi\cdot v}$ and applying [F1], $$|Eg_\eta(x)|\ge\operatorname{Re}\Bigl(e^{-2\pi i\xi\cdot v}Eg_\eta(x)\Bigr)=\operatorname{Re}\int_{C_\delta(v)}e^{2\pi i\xi\cdot(\omega-v)}\,d\sigma(\omega)=\int_{C_\delta(v)}\operatorname{Re}e^{2\pi i\xi\cdot(\omega-v)}\,d\sigma(\omega)\ge\tfrac12\sigma(C_\delta(v)),$$ the middle equality by componentwise integration of complex-valued functions [F1] and the last inequality by step 1.2 integrated against the positive measure $\sigma$; this holds for every $x=\eta+\xi\in T$. The tube is a product of a tangential ball of radius $c_n\delta^{-1}$ and a normal interval of length $2c_n\delta^{-2}$. In any orthonormal tangential frame it contains the box with each tangential half-width $c_n\delta^{-1}/\sqrt{n-1}$ and normal half-width $c_n\delta^{-2}$; this has the stated scales. [F1, step 1.1, step 1.2]

3.1 Conclusion. Steps 1.1–2.1 prove that for the explicit constant $c_n=1/100$ the extension of the cap data $g_\eta$ is bounded below by $\tfrac12\sigma(C_\delta(v))$ on the whole dual tube $T$, uniformly in $\delta,v,\eta$. [step 1.2, step 2.1] ∎
