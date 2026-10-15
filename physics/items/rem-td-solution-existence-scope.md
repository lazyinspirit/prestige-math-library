---
id: rem-td-solution-existence-scope
kind: remark
title: Scope of the continuum heat solution results
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
physical_scope: Source-backed scope and limitation note for the local rectangular Fourier heat model; it reports no experiment and asserts no universal continuum closure.
deps:
  - pthm-td-constant-conductivity-neumann-existence
  - pthm-td-neumann-heat-relaxation
forward_refs: [ex-td-diffusive-infinite-propagation]
dependency_roles:
  pthm-td-constant-conductivity-neumann-existence: physical-result
  pthm-td-neumann-heat-relaxation: physical-result
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, Fourier model and heat equation
    - title: John K. Hunter, Notes on Partial Differential Equations, Chapter 5
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch5.pdf
      locator: Official chapter PDF retrieved; §5.1, heat-kernel solution and initial-data qualifications.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Remarks

The existence and relaxation results on this page apply to a fixed rectangle, constant positive $c$ and $k$, homogeneous Neumann boundary data, and the specified even-periodic $C^2$ initial profiles. They do not prove existence for rough initial data, arbitrary domains or boundary conditions, state-dependent conductivity, or a microscopic Boltzmann-to-Fourier limit. For the constant-coefficient heat equation of [[pthm-td-constant-conductivity-neumann-existence]], the Gaussian-kernel solution gives an immediate nonzero response throughout the rectangle for the compactly supported perturbation in [[ex-td-diffusive-infinite-propagation]]. That is a mathematical property of this adopted diffusion model; it is not a measurement or a claim about finite-speed physical signals.
