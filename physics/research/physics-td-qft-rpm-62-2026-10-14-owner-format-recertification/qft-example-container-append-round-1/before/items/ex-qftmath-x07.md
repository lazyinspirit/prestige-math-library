---
id: ex-qftmath-x07
kind: example
domain: mathematics
library: mathematics
title: Worked mathematical example B07 — subtraction and a factorial series
status: draft
origin: pipeline
physical_scope: null
dependency_level: 2
deps:
  - lem-qft-example-cutoff-integrals-and-series
dependency_roles:
  lem-qft-example-cutoff-integrals-and-series: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Gerald B. Folland, Real Analysis, 2nd edition, Theorem 2.49
      url: https://djvu.online/file/NPF4BEtSuqdFA
    - title: Sheldon Axler, Measure, Integration & Real Analysis, §5C, Theorem 5.44
      url: https://measure.axler.net/MIRA.pdf
---

## Example

In the QX09 subtraction choose $\mu_R=\mu$. Its subtracted coefficient tends
to zero, while the positive bare integral grows quadratically:
$I_\Lambda/\Lambda^2\to1/(16\pi^2)$. This zero is determined by the selected
subtraction scale and does not assert zero fluctuations or existence of a
continuum theory. For the separate toy integral $F(\lambda)$, every finite
coefficient $n!$ exists, but the formal series diverges for every
$\lambda>0$.

## Facts & Assumptions

**Given:** $\mu>0$ in $\mathrm m^{-1}$, $\Lambda>0$ in $\mathrm m^{-1}$,
the QX09 subtraction with $\mu_R=\mu$, and dimensionless $\lambda\ge0$.

[F1] [[lem-qft-example-cutoff-integrals-and-series]]: the subtracted limit is
$\mu^2\log(\mu^2/\mu_R^2)/(16\pi^2)$, the bare integral satisfies
$I_\Lambda/\Lambda^2\to1/(16\pi^2)$, and the toy integral has exact finite
factorial-remainder identities with a zero-radius formal series.

## Proof

1.1 Substituting $\mu_R=\mu$ in [F1] gives
$\mu^2\log(1)/(16\pi^2)=0$, so the subtracted coefficient tends to zero.
At the same time, [F1] gives
$I_\Lambda/\Lambda^2\to1/(16\pi^2)>0$. Since $\Lambda^2\to\infty$, this
implies $I_\Lambda\to+\infty$ and records its quadratic leading coefficient.
The two statements concern different quantities: one is scheme-subtracted
and the other is the positive bare cutoff integral. [given, F1, algebra]

2.1 For every fixed integer $n\ge0$, the integral moment
$\int_0^\infty x^ne^{-x}\,dx=n!$ is finite by [F1]. But for each
$\lambda>0$, consecutive absolute terms of the formal series have ratio
$\lambda(n+1)$, which eventually exceeds $2$; therefore its terms do not
tend to zero and the series diverges. The exact finite remainder in [F1]
does not turn that divergent infinite series into a convergent sum for
$\lambda>0$. Nothing here measures fluctuations or proves a continuum limit.
[given, F1, step 1.1, algebra] ∎
