---
id: ex-tdmath-superlinear-count-test-is-not-tame
kind: example
title: A Superlinear Count Test Is Not Local-Tame
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-poisson-configuration-reference, def-tdmath-local-tame-topology]
justified_by: []
dependency_roles:
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

For the unit cell $C_0=[0,1)^d$, the observable $f(\omega)=N_{C_0}(\omega)^2$ is local but is not one of the tests defining the local-tame topology.

## Facts & Assumptions

**Given:** The unit-cell configuration space and the definition of local-tame observables.

[F1] Every cell configuration is finite, and $N_{C_0}$ is measurable with respect to the restriction to $C_0$ ([[def-tdmath-poisson-configuration-reference]]).

[F2] A local-tame observable supported in $C_0$ must satisfy $|f(\omega)|\leq b(1+N_{C_0}(\omega))$ for one finite constant $b$ ([[def-tdmath-local-tame-topology]]).

## Verification

**Given:** $f(\omega)=N_{C_0}(\omega)^2$.

1.1 By [F1], $N_{C_0}$ is finite and measurable from the restriction to $C_0$, so its square is a measurable local observable. [F1, algebra]

2.1 Fix any finite $b\geq0$ and choose an integer $n>b+1$. The cell configuration space contains configurations with exactly $n$ distinct points in $C_0$. On each such configuration, $f=n^2>b(1+n)$, so the tame growth bound in [F2] fails for this $b$. Since $b$ was arbitrary, $f$ is not tame. [given, F1, F2, construct, algebra] ∎

