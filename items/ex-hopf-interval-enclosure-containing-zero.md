---
id: ex-hopf-interval-enclosure-containing-zero
kind: example
title: An interval containing zero makes a Hopf certificate inconclusive
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-validate-local-hopf-certificate
  - def-hopf-normal-form-data
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §3.5, printed pp. 99–101, strict nonzero first-Lyapunov condition
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, degeneracy and inconclusive local hypotheses
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: Nondegeneracy condition; orientation only
---

## Example

Use the planar cubic system $\dot x=\mu x-y+\frac1{200}x(x^2+y^2)$, $\dot y=x+\mu y+\frac1{200}y(x^2+y^2)$.
Give its exact first Lyapunov coefficient the valid rational enclosure $[-1/10,1/10]$, while all other certificate fields are exact or have strict enclosures.

## Facts & Assumptions

**Given:** The system in the Example, $\omega_0=1$, its exact equilibrium and eigenpair records, and the stated proof-carrying interval certificate.

[F1] [[def-hopf-normal-form-data]]: with $q^*q=p^*q=1$, $\ell_1=\operatorname{Re}G_{21}/(2\omega_0)$.

[F2] [[alg-validate-local-hopf-certificate]]: the procedure returns inconclusive if the certified interval for $\ell_1$ intersects zero.

## Verification

1.1 The Jacobian has eigenvalues $\mu\pm i$, so $\beta'=1$; the normalized eigenvectors are $q=p=(1,-i)^T/\sqrt2$. The quadratic derivative vanishes. The cubic coefficient has $c=1/200$, so $C(q,q,\bar q)=4c q$, $G_{21}=4c=1/50$, and $\ell_1=1/100$, which lies in $[-1/10,1/10]$. [F1, given, algebra]

2.1 Every other field in the input record is valid and strictly separated as assumed, but the interval $[-1/10,1/10]$ contains zero. Hence the interval for $\ell_1$ fails the strict nonzero test, and [F2] returns **inconclusive** rather than asserting a Hopf branch. [F2, step 1.1, given] ∎
