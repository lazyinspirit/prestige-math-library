---
id: "ex-td-nonunique-variational-phases"
kind: "example"
title: "Two minimizers in a reduced coexistence model"
status: "published"
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Consider the reduced coarse-grained variational model with scalar dimensionless order parameter $m\in[-1,1]$ and dimensionless free-energy function $g(m)=(m^2-1)^2$. Its global minimizers are $m=-1$ and $m=1$. This model shows why uniqueness must be stated as a parameter-specific assumption. It does not identify these two minimizers with Gibbs measures of a continuum pair potential.

## Facts & Assumptions

[F1] [[post-td-grand-variational-phase-uniqueness]]: the selected continuum conclusion is licensed only when the relevant minimizer set on the finite-intensity stationary-law domain is a singleton.

[A1] Adopt the stated toy variational function $g(m)=(m^2-1)^2$ on the closed interval $[-1,1]$; $m$ and $g$ are dimensionless.

## Verification

**Given:** The domain $[-1,1]$, the explicit function $g$, and the limited illustrative scope.

1.1 For every $m\in[-1,1]$, $g(m)=(1-m^2)^2\geq0$. Equality holds exactly when $m^2=1$, namely at $m=-1$ or $m=1$. [given, A1, algebra]

2.1 The two equality points are distinct, so this scalar model's global-minimizer set is $\{-1,1\}$ and is not a singleton. This illustrates the need for a separate uniqueness assumption in a variational model. The domain in [F1] consists of stationary configuration laws, whereas this domain is $[-1,1]$; no map identifying their minimizers has been specified. Thus this calculation neither instantiates nor refutes the continuum assumption [F1]. [given, F1, step 1.1] ∎
