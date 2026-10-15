---
id: ex-td-si-unit-arithmetic
kind: example
title: Pressure-volume and force-distance units
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Unit arithmetic for the SI quantities used in the thermodynamic framework; the example does not assert a pressure-volume work law.
deps: [def-td-si-quantities]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: BIPM, The International System of Units, 9th edition, version 4.01, Table 4
      url: https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf
proof_strategy: direct
dependency_level: 1
---

## Example

The SI units make both a pressure-volume product and a force-distance product have units of energy. In particular, one pascal times one cubic metre is one joule, and one newton times one metre is one joule.

## Facts & Assumptions

**Given:** The SI unit relations specified for this framework.

[F1] [[def-td-si-quantities]]: $1\,\mathrm{Pa}=1\,\mathrm{J\,m^{-3}}$, $1\,\mathrm{N}=1\,\mathrm{kg\,m\,s^{-2}}$, and $1\,\mathrm{J}=1\,\mathrm{kg\,m^2\,s^{-2}}$.

## Verification

1.1 Multiplying the pascal unit by the cubic-metre unit gives $(\mathrm{J\,m^{-3}})\mathrm{m^3}=\mathrm{J}$. [F1, algebra]

2.1 Multiplying the newton unit by the metre unit gives $(\mathrm{kg\,m\,s^{-2}})\mathrm m=\mathrm{kg\,m^2\,s^{-2}}=\mathrm J$. [F1, algebra] ∎
