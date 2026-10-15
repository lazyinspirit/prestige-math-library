---
id: post-td-canonical-protocol-preparation
kind: postulate
title: "Canonical initial preparation for a finite protocol"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: [def-td-driven-finite-path-model, post-td-canonical-sampling, def-td-si-quantities]
dependency_roles:
  def-td-driven-finite-path-model: formulation-prerequisite
  post-td-canonical-sampling: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "The start of the specified finite-state protocol is modeled as a canonical preparation at one positive reservoir temperature; preparation success and equilibration are not derived."
sources:
  references:
    - title: "C. Jarzynski, Nonequilibrium Equality for Free Energy Differences"
      url: "https://www.physics.uci.edu/~tritz/BP/Jarz97.pdf"
      locator: "Complete four-page paper; canonical initial ensemble and finite-time protocol."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; initial equilibrium preparation and work-relation derivations."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

For a protocol of [[def-td-driven-finite-path-model]], fix a bath temperature $T_b>0$ kelvin and set $\beta=(k_{\mathrm B}T_b)^{-1}$ in joules$^{-1}$, using the exact constant and SI conventions of [[def-td-si-quantities]]. The finite-state clause of the adopted [[post-td-canonical-sampling]] then gives the stage-zero law $\pi_0(i)=e^{-\beta E_0(i)}/Z_0$; adopt that the initial microstate is drawn from this law, so $\mu_0=\pi_0$. Here $\Omega$ is finite and nonempty and $E_0(i)$ is finite, so $0<Z_0<\infty$ as required by that clause. This is a model premise about the preparation distribution. It does not follow from the finite partition-sum definition, does not assert that an arbitrary system equilibrates in finite time, and does not report a measured preparation. The countable-state and measure-integral branches of [[post-td-canonical-sampling]] are not used.
