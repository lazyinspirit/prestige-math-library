---
id: fs-winding-number-depends-only-on-the-trace
kind: false-statement
title: "The winding number depends only on the trace of the closed contour"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-winding-number-circle-traversed-k-times, def-winding-number-closed-complex-contour, def-complex-contours-reversal-concatenation-and-closedness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim.** If two closed complex contours have the same trace, then they
have the same winding number about every point off that trace.

## Facts & Assumptions

**Given:** The contours $\gamma_1(t)=\exp(it)$ and $\gamma_2(t)=\exp(2it)$ on $[0,2\pi]$.

[L1] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $\gamma_k(t)=a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with $n(\gamma_k,z)=k$ for $|z-a|<r$ and $n(\gamma_k,z)=0$ for $|z-a|>r$; for $k\ne0$ its trace is $\{z:|z-a|=r\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L2] For a closed complex contour $\gamma$ and $p$ off its trace, $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$, a quantity defined from the parametrised contour ([[def-winding-number-closed-complex-contour]]).

[L3] A complex contour is a rectifiable path together with its parameter interval and its parametrisation; its trace is only the image set ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1] with $a=0$, $r=1$ and $k=1$, the contour $\gamma_1$ is closed with trace $\{|z|=1\}$ and $n(\gamma_1,0)=1$. [given, L1]

1.2 By [L1] with $a=0$, $r=1$ and $k=2$, the contour $\gamma_2$ is closed with trace $\{|z|=1\}$ and $n(\gamma_2,0)=2$. [given, L1]

2.1 The two contours have the same trace, and $0$ lies off it, yet $1\ne2$; so the claim is false. [step 1.1, step 1.2]

3.1 Nothing here is anomalous: by [L2] the index is computed from an integral over the parametrised contour, and by [L3] the trace forgets the parametrisation, which is what records how many times the circle is traversed. This is why [[def-winding-number-closed-complex-contour]] attaches the index to the map and not to the image set. [step 2.1, L2, L3] ∎
