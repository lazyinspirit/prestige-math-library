---
id: ex-td-no-automatic-equilibration
kind: example
title: "An identity dynamics leaves a noncanonical finite preparation unchanged"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: [def-td-finite-microstate-model, post-td-canonical-sampling]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A two-state finite model with explicitly frozen identity dynamics; it shows that a canonical preparation rule alone supplies no relaxation dynamics and is not an empirical statement."
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4–4.6
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Example

Let $\Omega=\{a,b\}$ with energies $E_a=0$, $E_b=\varepsilon>0$ joules, and fix $T>0$ kelvins. The separately adopted canonical law has probabilities proportional to $(1,e^{-\beta\varepsilon})$. For the dynamical comparison, use a dimensionless model-time parameter $\tau\ge0$, stipulate the identity transition map $\Phi_\tau(a)=a$, $\Phi_\tau(b)=b$ for all $\tau$, and start with the point mass $\delta_a$.

## Facts & Assumptions

**Given:** A two-state energy model, positive temperature, the canonical preparation rule, and the explicitly stipulated identity dynamics.

[F1] [[def-td-finite-microstate-model]]: the two microstates and their fixed finite energies define an admissible finite statistical model.

[F2] [[post-td-canonical-sampling]]: the canonical probabilities are the normalized weights $e^{-\beta E_x}$; this is an adopted preparation rule and includes no time-evolution equation.

[A1] The comparison dynamics is the deterministic identity map $\Phi_\tau$ for every dimensionless model time $\tau\ge0$, and the initial law for that comparison is $\delta_a$.

## Verification

**Given:** $\varepsilon>0$, $T>0$, and the stipulated dynamics.

1.1 Put $q=e^{-\beta\varepsilon}$, so $0<q<1$. The canonical law is $P_\beta(a)=1/(1+q)$ and $P_\beta(b)=q/(1+q)$; in particular it is not $\delta_a$. [F1, F2, algebra]

2.1 The identity map preserves the initial point mass at every model time: $(\Phi_\tau)_*\delta_a=\delta_a$. Hence the time-evolved law does not converge to the canonical law, whose probability of $b$ is strictly positive. This is a counterexample to deriving equilibration from the sampling rule alone. [A1, step 1.1, algebra] ∎
