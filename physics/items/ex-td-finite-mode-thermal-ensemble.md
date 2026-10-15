---
id: ex-td-finite-mode-thermal-ensemble
kind: example
title: "One bosonic and one fermionic mode at a specified temperature"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [def-axiom-of-choice, def-countable-choice, def-td-si-quantities, pthm-td-finite-mode-occupation-and-trace-formulas]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
  pthm-td-finite-mode-occupation-and-trace-formulas: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "An exact hypothetical canonical calculation for one bosonic oscillator mode and one fermionic two-level mode with beta times excitation energy equal to log 2; it is not a measurement or a thermalization claim."
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§3.5–3.6
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§5.6–5.7
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

Assume AC and Countable Choice as required by [[pthm-td-finite-mode-occupation-and-trace-formulas]]. Choose $T>0$ kelvins and excitation energy $\varepsilon=k_{\mathrm B}T\log 2$ joules, so $q=e^{-\beta\varepsilon}=1/2$. Consider separately one bosonic mode with occupations $n=0,1,2,\ldots$ and one fermionic mode with occupations $n=0,1$.

## Facts & Assumptions

**Given:** The declared one-mode systems, their positive excitation energy, and the adopted Gibbs preparation.

[F1] [[pthm-td-finite-mode-occupation-and-trace-formulas]]: for $q=e^{-\beta\varepsilon}$, the bosonic partition trace is $(1-q)^{-1}$ with mean $q/(1-q)$, and the fermionic partition sum is $1+q$ with excited occupation $q/(1+q)$; these are conditional on its stated quantum preparation and suppliers.

[F2] [[def-td-si-quantities]]: $T$ is in kelvins, $k_{\mathrm B}$ in $\mathrm{J\,K^{-1}}$, and $\beta=(k_{\mathrm B}T)^{-1}$ in $\mathrm{J^{-1}}$.

[A1] The selected energy is $\varepsilon=k_{\mathrm B}T\log 2>0$ joules, and $q=e^{-\beta\varepsilon}=1/2$.

[A2] AC and Countable Choice are assumed through [F1] for the quantum Gibbs assignment and the supplied one-mode calculations.

## Verification

**Given:** $q=1/2$ and the finite-mode identities in [F1].

1.1 The bosonic trace is $Z_B=(1-1/2)^{-1}=2$, and the probability of occupation $n$ is $2^{-(n+1)}$. Its mean occupation is $(1/2)/(1-1/2)=1$. [given, F1, F2, A1, algebra]

2.1 The fermionic partition sum is $Z_F=1+1/2=3/2$, so the ground and excited probabilities are $2/3$ and $1/3$, respectively, and the mean occupation is $1/3$. The bosonic and fermionic values belong to distinct declared models. [F1, F2, A1, algebra] ∎
