---
id: ex-na-boundary-extension-changes-haar-coefficients
kind: example
title: Periodic and symmetric padding give different Haar coefficients
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation-examples
dependency_level: 1
deps: [def-na-finite-periodic-haar-transform]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/d22d96dea13c0396474b1d87439fc4d0_Handout15.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Example

Start with the odd-length data $(0,0,1)$. Define two explicit padding rules to length four. Periodic endpoint padding appends the first entry, giving $x_P=(0,0,1,0)$. Symmetric endpoint padding repeats the final entry, giving $x_S=(0,0,1,1)$. Applying the first Haar stage to the last pair gives $(a,d)=(1/\sqrt2,1/\sqrt2)$ for $x_P$ and $(a,d)=(\sqrt2,0)$ for $x_S$. The coefficients change because the boundary rule changes the pair presented to the filter.

## Verification

**Given:** The two length-four padded vectors above and the Haar pair map of [[def-na-finite-periodic-haar-transform]].

[F1] [[def-na-finite-periodic-haar-transform]]: a pair $(u,v)$ maps to $((u+v)/\sqrt2,(u-v)/\sqrt2)$.

1.1 For the periodic padding, the last pair is $(1,0)$; substitution gives average $(1+0)/\sqrt2=1/\sqrt2$ and detail $(1-0)/\sqrt2=1/\sqrt2$. [given, F1, algebra]

2.1 For the symmetric padding, the last pair is $(1,1)$; substitution gives average $(1+1)/\sqrt2=\sqrt2$ and detail $(1-1)/\sqrt2=0$. The two coefficient pairs differ. [given, F1, step 1.1, algebra] ∎
