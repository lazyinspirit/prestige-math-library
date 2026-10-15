---
id: pthm-td-finite-quantum-free-energy-minimum
kind: physics-theorem
domain: physics
title: Finite-sector quantum Gibbs preparation minimizes the declared free-energy functional
status: published
origin: pipeline
library: physics
dependency_level: 1
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-framework-quantities-and-units, def-td-si-quantities, post-nrqm-many-body-canonical-equilibrium-ensemble, pthm-nrqm-many-body-thermal-equilibrium-characterization]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  pthm-nrqm-many-body-thermal-equilibrium-characterization: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: The finite-dimensional fixed-particle-number quantum sector at assigned positive temperature, conditional on the adopted Gibbs-preparation assumption and the exact NRQM entropy/free-energy definitions; no equilibration or macroscopic thermodynamic-limit claim is made.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3.3–1.3.4 (printed pp. 22–27)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4–4.6 (printed pp. 205–217)
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

## Statement

Work in the nonzero finite-dimensional fixed-$N$ sector of [[def-nrqm-many-body-framework-entropy-and-free-energy]], with self-adjoint energy $H_N^\sigma$ in joules and assigned $T>0$ in kelvins. Adopt the Gibbs preparation of [[post-nrqm-many-body-canonical-equilibrium-ensemble]] and its unit convention $\beta=(k_{\mathrm B}T)^{-1}$. For $F(\rho)=\operatorname{tr}(\rho H_N^\sigma)-T S(\rho)$ over the declared sector density operators, the canonical preparation is the unique minimizer and
$$\min_\rho F(\rho)=F_{\mathrm{eq}}=-k_{\mathrm B}T\log\operatorname{tr}(e^{-\beta H_N^\sigma}).$$
This quantum statistical functional is not identified here with a macroscopic Helmholtz potential without an additional model bridge; its minimum does not establish equilibration.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional fixed-$N$ sector, its self-adjoint energy, an assigned $T>0$, and the adopted canonical preparation.

[F1] [[def-nrqm-many-body-framework-entropy-and-free-energy]]: on the finite-dimensional sector, $S(\rho)=k_{\mathrm B}s(\rho)$ and $F(\rho)=\operatorname{tr}(\rho H_N^\sigma)-k_{\mathrm B}T s(\rho)$, with $\beta=(k_{\mathrm B}T)^{-1}$.

[F2] [[post-nrqm-many-body-canonical-equilibrium-ensemble]] and [[pthm-nrqm-many-body-thermal-equilibrium-characterization]] (both current carrier statuses say published): the former adopts the finite-sector Gibbs preparation under its exact AC/Countable Choice and finite positive-trace hypotheses; the latter proves that this preparation uniquely minimizes the declared finite-sector functional with minimum $-k_{\mathrm B}T\log Z_N$. Their current statements and the theorem proof were inspected, but their published records lack the required audit/source-review evidence, so this use remains escalated.

[F3] [[def-nrqm-framework-quantities-and-units]] and [[def-td-si-quantities]]: $H_N^\sigma$ and $F$ are in joules, $T$ in kelvins, and $k_{\mathrm B}$ in $\mathrm{J\,K^{-1}}$.

[A1] The Axiom of Choice and Countable Choice are assumed as required by [F2]; the sector dimension is finite and at least one.

## Proof

**Given:** The declared finite-sector quantum model, the entropy/free-energy functional, and the canonical Gibbs assignment.

1.1 The finite-sector class, assigned positive temperature, canonical preparation, and entropy functional in the Statement are exactly the hypotheses and definitions of [F1]–[F2]. Countable Choice is stated explicitly in [A1], as required by [F2]. [F1, F2, F3, A1]

2.1 By [F2], every declared sector preparation obeys $F(\rho)\ge-k_{\mathrm B}T\log Z_N$, with equality only for the canonical preparation. Replacing $\beta^{-1}$ by $k_{\mathrm B}T$ using [F1]–[F3] gives the displayed minimum and units. This is a conditional preparation-model deduction, not a claim that dynamics reaches the minimizer. [F1, F2, F3, step 1.1] ∎
