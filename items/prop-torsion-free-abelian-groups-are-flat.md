---
id: prop-torsion-free-abelian-groups-are-flat
title: "Torsion-free abelian groups are flat"
kind: proposition
status: draft
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes", "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Every torsion-free abelian group is a flat $\mathbb Z$-module.

## Proof

**Given:** a torsion-free abelian group $M$.

1.1 Every finitely generated subgroup of $M$ is free abelian, and $M$ is the filtered union of these free subgroups. [given]

2.1 Tensoring a short exact sequence with a filtered union commutes with the filtered colimit; each free subgroup is flat, so each resulting sequence is exact. [step 1.1, algebra]

3.1 Filtered colimits of abelian groups are exact, hence $-\otimes_{\mathbb Z}M$ is exact and $M$ is flat. [step 2.1, algebra] ∎
