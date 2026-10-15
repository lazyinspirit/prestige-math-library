---
id: ex-td-empty-evidence-record-template
kind: example
domain: physics
library: physics
title: Empty source-backed evidence record template
status: draft
origin: pipeline
dependency_level: 1
deps:
  - rem-td-empirical-evidence-contract
dependency_roles:
  rem-td-empirical-evidence-contract: formulation-prerequisite
aliases: []
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
physical_scope: Documentation template only; it contains no experiment, observation, apparatus reading or uncertainty value.
sources:
  references: []
---

## Example

The following empty record shows fields to fill from an actual source report. Bracketed text is an instruction, not a result or measurement.

The fields implement [[rem-td-empirical-evidence-contract]].

- Source report and exact locator: [required]
- Material, sample geometry, apparatus and boundary conditions: [required]
- Operational definitions and calibration: [required]
- Preparation, controls, sampling procedure and sample size: [copy only what the source reports]
- Observations with units and stated uncertainty: [copy only source-supported values]
- Systematic limitations and missing information: [state explicitly]
- Model prediction and assumptions: [keep separate from observations]
- Statistical method and conditional conclusion: [state method, sampling assumptions and limits]

No claim of a performed experiment is made by this template.
