---
id: def-na-finite-interval-oscillatory-integral
kind: definition
title: Finite-interval oscillatory integral and phase convention
status: published
origin: pipeline
dependency_level: 0
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - thm-continuous-implies-integrable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §1"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §2.3"
      url: "https://dlmf.nist.gov/2.3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $a<b$, $\omega\in\mathbb R\setminus\{0\}$, $f:[a,b]\to\mathbb C$ be continuous, and $g:[a,b]\to\mathbb R$ be continuous. Define
$$I_\omega(f,g;[a,b]) := \int_a^b f(x)e^{i\omega g(x)}\,dx.$$
The complex Riemann integral here means the real Riemann integral of the real part plus $i$ times the real Riemann integral of the imaginary part. Euler's formula [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] and continuity of sine and cosine, which follows from [[thm-sine-and-cosine-derivatives]] and differentiability implying continuity [[cor-differentiable-implies-continuous]], make $e^{i\omega g}$ continuous. The product is continuous, so both component integrals exist by [[thm-continuous-implies-integrable]]. A function is in $C^r[a,b]$ when it and its derivatives through order $r$ are continuous on $[a,b]$, with one-sided endpoint derivatives. A phase is nonstationary on $[a,b]$ when $g\in C^1[a,b]$ and $|g'(x)|\ge c$ everywhere for some fixed $c>0$. For such a phase and differentiable $h$, put $T_g^0h=h$ and $T_g^{j+1}h=(T_g^jh/g')'$ whenever that derivative exists.

This is an exact-real definition. A later numerical implementation must separately state its moment errors and any floating-point solve error.

## Remarks

The page uses real-valued $g$, complex-valued $f$, and real nonzero frequency $\omega$. A simple stationary point is treated in a separate local branch; it is not declared nonstationary by deleting the point where $g'=0$.
