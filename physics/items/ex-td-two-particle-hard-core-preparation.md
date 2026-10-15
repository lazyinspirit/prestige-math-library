---
id: "ex-td-two-particle-hard-core-preparation"
kind: "example"
title: "Two indistinguishable hard-core particles in an interval"
status: "published"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "A finite one-dimensional positional toy model with two classical identical particles and a hard-core exclusion; it is a model calculation, not a reported measurement."
deps: [def-td-stable-tempered-continuum-preparation, post-td-classical-indistinguishable-particle-measure, post-td-equilibrium-ensemble-sampling]
dependency_roles:
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  post-td-classical-indistinguishable-particle-measure: physical-assumption
  post-td-equilibrium-ensemble-sampling: physical-assumption
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
dependency_level: 7
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

Take a dimensionless interval $\Lambda=[0,L]$ with $0<a<L$, two identical particles, and the hard-core pair potential $\varphi(r)=+\infty$ for $|r|<a$ and $0$ otherwise. At any positive temperature the configurational canonical partition function is independent of $T$ and equals
$$Z_{\Lambda,2}=\frac12(L-a)^2.$$
The factor $1/2$ is the adopted indistinguishable positional measure. This finite-volume calculation has no momentum variables or experimental data.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: for two positions the hard-core pair energy is infinite precisely on forbidden separations $|x_1-x_2|<a$.

[A1] [[post-td-classical-indistinguishable-particle-measure]]: integrate symmetric positional weights with $d\mu_{\Lambda,2}=\frac12dx_1dx_2$.

[A2] [[post-td-equilibrium-ensemble-sampling]]: at exact $N=2$, finite-energy pairs carry weight $e^{-\beta H_2}$ and forbidden infinite-energy pairs carry weight zero, integrated against $\mu_{\Lambda,2}$.

## Verification

**Given:** The interval, hard-core radius, exact particle number, and the adopted positional measure.

1.1 The allowed labelled pairs form two disjoint triangles, $x_2\geq x_1+a$ and $x_1\geq x_2+a$. The first has area $\int_0^{L-a}(L-a-x_1)\,dx_1=(L-a)^2/2$, and the second has the same area by exchanging coordinates. [given, F1, algebra]

2.1 Their total allowed area is $(L-a)^2$. On it $H_2=0$ and the weight is $1$; on the excluded band the adopted finite-energy convention assigns weight zero, without evaluating an exponential at $+\infty$. Multiplying the allowed area by the measure factor $1/2$ from [A1] gives $Z_{\Lambda,2}=(L-a)^2/2$, as asserted. [given, A1, A2, step 1.1] ∎
