---
id: ex-pe18-spherical-dtn-monopole-symbol
kind: example
title: The monopole symbol of the exact spherical DtN map
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe18-exact-spherical-dtn-map, thm-pe18-exact-spherical-dtn-map-on-smooth-data, def-spherical-bessel-and-hankel-functions]
proof_strategy: direct
generation:
  role: example
axiom_use: "No axiom is used; this is direct differentiation of the degree-zero mode."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
---

## Example

Since $h_0^{(1)}(z)=-ie^{iz}/z$, its logarithmic derivative is $h_0'(z)/h_0(z)=i-z^{-1}$. Therefore the degree-zero exact spherical DtN multiplier at radius $R$ is $\tau_0(k,R)=ik-1/R$.

## Facts & Assumptions

**Given:** $k,R>0$ and the exact modal map [F1].

[F1] [[def-pe18-exact-spherical-dtn-map]]: $\tau_0(k,R)=k h_0'(kR)/h_0(kR)$.

[F2] [[thm-pe18-exact-spherical-dtn-map-on-smooth-data]]: the multiplier is the exact outward radial derivative of the outgoing degree-zero extension.

[F3] [[def-spherical-bessel-and-hankel-functions]]: $h_0^{(1)}(z)=-ie^{iz}/z$.

## Verification

**Given:** $k,R>0$ and [F1]–[F2].

1.1 By [F3], $h_0(z)=-ie^{iz}/z$, so $h_0'(z)=(-i)e^{iz}(i/z-1/z^2)=h_0(z)(i-1/z)$. [F1, F3, algebra]

2.1 As $h_0(kR)\ne0$ by [F3], substitute $z=kR$ into step 1.1 and multiply by $k$: $\tau_0=k(i-1/(kR))=ik-1/R$. Theorem [F2] identifies this multiplier with the exact outgoing normal derivative. [F1, F2, F3, step 1.1, algebra] ∎
