# Extended physics research scaffolds

Seven owner-requested five-agent teams, each with four specialist researchers and
one integrating scaffolder, use `gpt-6.1-sol` at medium effort. Existing physics
and mathematics scaffolds are prerequisite suppliers with exact statements,
hypotheses and proof statuses. See [owner direction](OWNER-DIRECTION.md) and
[coordination](coordination.json) for current assignments and scope.

| Wave | Categories |
|---|---|
| 1 | Fluid Dynamics; Relativistic Particle Mechanics |
| 2 | Einstein–Maxwell Models; Classical Statistical Mechanics |
| 3 | Quantum Field Theory including QED; Quantum Statistical Mechanics |
| 4 | Thermodynamics and General Relativity |

Two full teams run at a time. The platform limits retained worker threads;
completed workers are explicitly reassigned between categories, preserving five
members per subject and separate write scopes. Root integrates shared interfaces.

The deliverables are mathematically explicit prose, postulates/quantities/units,
A/B inventories and pathways, complete required local arguments, exact supplier
and source maps, claim/closure ledgers, reproducible structural checks and reports.
No production content run, engine transition or publication is part of this task.
Known-open problems and formal approximations retain their actual status; they
cannot be used as unproved prerequisites of asserted results.

Completed earlier suppliers are indexed in
[first-principles physics](../first-principles-2026-10-03/README.md).

## Completed category handoffs

| Category | Proposed items | A/B pairs | Root structural rerun | Report |
|---|---:|---:|---|---|
| Fluid Dynamics | 195 (137 A, 58 B) | 26 | Passed | [Report](fluid-dynamics/final-report.md) |
| Relativistic Particle Mechanics | 123 (95 A, 28 B) | 10 | Passed | [Report](relativistic-particle-mechanics/report.md) |
| Einstein–Maxwell Models | 191 (138 A, 53 B) | 27 | Passed | [Report](einstein-maxwell-models/final-report.md) |
| Classical Statistical Mechanics | 132 (107 A, 25 B) | 10 | Passed | [Report](classical-statistical-mechanics/report.md) |
| Quantum Field Theory including QED | 177 (123 A, 54 B) | 31 | Passed | [Report](quantum-field-theory/report.md) |
| Quantum Statistical Mechanics | 139 (112 A, 27 B) | 14 | Passed | [Report](quantum-statistical-mechanics/report.md) |
| Thermodynamics and General Relativity | 163 (114 A, 49 B) | 31 | Passed | [Report](thermodynamics-and-general-relativity/report.md) |

These checks validate the research inventories and declared contracts. They do
not certify independent proof review, production readiness or publication.

All seven teams are complete: **1,120 proposed items (826 A, 294 B), 149 A/B
pairs**. Root reran each frozen category checker and the final
[cross-category check](cohort-check.json). Reproduce the latter with
`python3 physics/research/extended-frameworks-2026-10-03/check-cohort.py --require-all`.
See [root reading scopes](root-review-record.json) and
[final cohort report](final-report.md) for exact validation limits.
