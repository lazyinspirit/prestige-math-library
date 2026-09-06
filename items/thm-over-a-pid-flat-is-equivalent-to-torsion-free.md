---
id: thm-over-a-pid-flat-is-equivalent-to-torsion-free
title: "Over a principal ideal domain flatness is equivalent to torsion-freeness"
kind: theorem
status: published
origin: pipeline
deps: ["def-principal-ideal-domain", "prop-torsion-free-abelian-groups-are-flat", "def-left-and-right-flat-modules-over-an-arbitrary-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Over a principal ideal domain $R$, an $R$-module is flat if and only if it is torsion-free.

## Proof

**Given:** a PID $R$ and an $R$-module $M$.

1.1 If $M$ is flat and $0\ne r\in R$, tensor the injection $R\xrightarrow{\,\cdot r\,}R$ with $M$; multiplication by $r$ on $M$ is injective, so $M$ is torsion-free. [given]

2.1 Conversely, each finitely generated submodule of a torsion-free module over a PID is free, and the module is their filtered union. [step 1.1, algebra]

3.1 Free modules are flat and filtered colimits preserve exactness, so the same argument as for abelian groups makes $M$ flat. [step 2.1, algebra] ∎
