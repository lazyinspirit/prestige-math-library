---
id: ex-tgrmath-bulk-speed-parameters
kind: example
title: Positive relaxation parameters can give superluminal characteristic speed
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-countable-choice
  - lem-tgr-bulk-linear-causality
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-bulk-linear-causality: mathematical-premise
sources:
  references:
    - title: "Guillaume Bal, Waves in Random Media: Lecture Notes (May 2017)"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf"
      locator: "Full 102-page notes; §1.3.1, PDF pp. 7–8, and §1.3.4, PDF pp. 11–12: Fourier and cone-energy analyses for symmetric systems."
    - title: "Eitan Tadmor, Spectral Methods for Hyperbolic Problems (1998 lecture notes)"
      url: "https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html"
      locator: "Initial Value Problems of Hyperbolic Type, 'Hyperbolic systems with constant coefficients': weighted Fourier-mode energy estimates."
---

## Example

In the bulk linear branch of [[lem-tgr-bulk-linear-causality]], choose any $h_0>0$ and $\tau>0$, set $\zeta=\tau h_0$, and take $a_s=1/3$. Then every parameter is positive, but the exact normal characteristic speed is $2c/\sqrt3>c$. This is a parameterized mathematical example, not a measurement or an estimate for a material.

## Facts & Assumptions

**Given:** $h_0>0$ has units Pa, $\tau>0$ has units s, $\zeta=\tau h_0$ has units $\mathrm{Pa\,s}$, $a_s=1/3$ is dimensionless, and $c>0$ is the reference speed parameter in the stated model.

[A1] The only choice premise in the supplier chain is countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[lem-tgr-bulk-linear-causality]]: under $a_s,h_0,\zeta,\tau>0$, the branch speed is exactly $v_{\rm bulk}=c\sqrt{a_s+\zeta/(\tau h_0)}$, and the entropy-production identity is nonnegative.

## Verification

1.1 The selected value $\zeta=\tau h_0$ gives $\zeta/(\tau h_0)=1$, so the strict positivity hypotheses of [F1] hold and its formula applies. [A1, F1, given, algebra]

2.1 Substitution gives $v_{\rm bulk}=c\sqrt{1/3+1}=2c/\sqrt3$. Since $4/3>1$ and $c>0$, $2c/\sqrt3>c$. The entropy production remains $\Pi^2/(\zeta cT)\ge0$ whenever $T>0$, as in [F1]; neither sign statement supplies a bound on this characteristic speed. [F1, step 1.1, given, algebra] ∎
