---
id: "ex-td-nonunique-variational-phases"
kind: "example"
title: "Two minimizers in a reduced coexistence model"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "A dimensionless coarse-grained order-parameter example illustrating a possible failure of a singleton variational-minimizer assumption; it is not a continuum Gibbs-potential calculation."
deps: [post-td-grand-variational-phase-uniqueness]
dependency_roles:
  post-td-grand-variational-phase-uniqueness: formulation-prerequisite
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
dependency_level: 8
---

## Example

Consider the reduced coarse-grained variational model with scalar dimensionless order parameter $m\in[-1,1]$ and dimensionless free-energy function $g(m)=(m^2-1)^2$. Its global minimizers are $m=-1$ and $m=1$. This model shows why uniqueness must be stated as a parameter-specific assumption. It does not identify these two minimizers with Gibbs measures of a continuum pair potential.

## Facts & Assumptions

[F1] [[post-td-grand-variational-phase-uniqueness]]: the selected continuum conclusion is licensed only when the relevant minimizer set on the finite-intensity stationary-law domain is a singleton.

[A1] Adopt the stated toy variational function $g(m)=(m^2-1)^2$ on the closed interval $[-1,1]$; $m$ and $g$ are dimensionless.

## Verification

**Given:** The domain $[-1,1]$, the explicit function $g$, and the limited illustrative scope.

1.1 For every $m\in[-1,1]$, $g(m)=(1-m^2)^2\geq0$. Equality holds exactly when $m^2=1$, namely at $m=-1$ or $m=1$. [given, A1, algebra]

2.1 The two equality points are distinct, so the set of global minimizers has two elements and is not a singleton. Thus the uniqueness premise [F1] fails for this toy model; no continuum phase claim follows. [given, F1, step 1.1] ∎
