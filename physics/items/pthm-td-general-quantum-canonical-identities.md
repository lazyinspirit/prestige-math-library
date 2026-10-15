---
id: pthm-td-general-quantum-canonical-identities
kind: physics-theorem
domain: physics
title: General quantum Gibbs normalization and canonical identities
status: published
origin: pipeline
library: physics
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-framework-quantities-and-units, def-nrqm-many-body-framework-entropy-and-free-energy, def-td-si-quantities, post-nrqm-many-body-canonical-equilibrium-ensemble, thm-tdmath-general-trace-gibbs-model]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  thm-tdmath-general-trace-gibbs-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A declared quantum model with a semibounded self-adjoint energy operator, trace-class Gibbs exponential, and local first-and-second-moment envelope; the result concerns the adopted Gibbs preparation and does not derive thermalization or a continuum spectrum.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3.1–1.3.4 (printed pp. 18–26)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.3–4.4 (printed pp. 199–208)
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

Assume the Axiom of Choice and Countable Choice and the canonical Gibbs-preparation assumption [[post-nrqm-many-body-canonical-equilibrium-ensemble]]. Restrict to its $G=H$ branch: the declared energy operator $H$ is self-adjoint, bounded below, and measured in joules; $T>0$ is in kelvins, $\beta=(k_{\mathrm B}T)^{-1}$ is in $\mathrm{J^{-1}}$, and $K_\beta=e^{-\beta H}$ has $0<Z_\beta=\operatorname{Tr}K_\beta<\infty$. Suppose also that on an open interval $J_\beta\subset(0,\infty)$ containing $\beta$, every compact $C\subset J_\beta$ admits a summable family $a_j\ge0$ with $(1+|E_j|^2)e^{-\gamma E_j}\le a_j$ for all energy eigenvalues $E_j$ and $\gamma\in C$. Let $(u_j)$ be the finite or countable complete orthonormal eigenfamily supplied by [[thm-tdmath-general-trace-gibbs-model]], repeated according to multiplicity, with $Hu_j=E_ju_j$, and put $\lambda_j=e^{-\beta E_j}/Z_\beta$. The supplied trace identity gives $\sum_j\lambda_j=1$, and these $\lambda_j$ are the eigenvalues of $\rho_\beta$. Define the spectral mean $\bar E_\beta:=\sum_j\lambda_jE_j$, the variance $\operatorname{Var}_\beta(H):=\sum_j\lambda_j(E_j-\bar E_\beta)^2$, the dimensionless entropy $s_\beta:=-\sum_j\lambda_j\log\lambda_j$, and the physical von Neumann entropy $S_{\mathrm{vN}}(\rho_\beta):=k_{\mathrm B}s_\beta$. These are spectral-sum definitions for this commuting Gibbs density; no operator trace of an unbounded product is used. The supplied moment envelope makes these sums finite. Then
$$-\partial_\beta\log Z_\beta=\bar E_\beta,\qquad \partial_\beta^2\log Z_\beta=\operatorname{Var}_\beta(H),\qquad S_{\mathrm{vN}}(\rho_\beta)=k_{\mathrm B}\bigl(\log Z_\beta+\beta\bar E_\beta\bigr).$$
Thus $F_{\mathrm{stat}}=-k_{\mathrm B}T\log Z_\beta=\bar E_\beta-T S_{\mathrm{vN}}(\rho_\beta)$. This statement does not extend the Helmholtz interpretation to an effective generator $H-\mu\mathcal N$.

## Facts & Assumptions

**Given:** A nonzero quantum Hilbert space, a self-adjoint energy operator $H$ bounded below, a positive assigned temperature, the adopted Gibbs preparation, a finite positive trace, and the local summable moment envelope.

[F1] [[post-nrqm-many-body-canonical-equilibrium-ensemble]]: for a declared $G=H$ model with self-adjoint semibounded generator and $0<\operatorname{Tr}e^{-\beta H}<\infty$, the adopted preparation is $\rho_\beta=e^{-\beta H}/Z_\beta$; the postulate explicitly assumes AC and Countable Choice and does not assert equilibration.

[F2] [[def-nrqm-many-body-framework-entropy-and-free-energy]] defines entropy and free energy only on its finite-dimensional sector class; it does not define an entropy functional for general infinite-dimensional sectors. This theorem supplies its own spectral-sum definition above. [[def-nrqm-framework-quantities-and-units]] and [[def-td-si-quantities]] give the energy, temperature, and Boltzmann-constant units.

[L1] [[thm-tdmath-general-trace-gibbs-model]] (current batch 11 draft): for a semibounded self-adjoint operator with trace-class Gibbs exponential and the stated local moment envelope, the Gibbs weight has a countable energy eigenfamily and the normalized eigenvalue law satisfies the summable canonical mean, variance, and entropy identities. Its full current proof was inspected; its draft status remains conditional.

[F3] [[def-td-si-quantities]]: $k_{\mathrm B}$ is in $\mathrm{J\,K^{-1}}$, $T$ in kelvins, and energy in joules; hence $\beta$ is in $\mathrm{J^{-1}}$ and $\beta E_j$ is dimensionless.

[A1] The full Axiom of Choice and Countable Choice are assumed at the exact strengths required by [F1] and [L1].

## Proof

**Given:** The $G=H$ reading of the adopted quantum Gibbs preparation, trace finiteness, and the local moment envelope.

1.1 By [F1], $K_\beta=e^{-\beta H}$ is the declared positive Gibbs weight and $\rho_\beta=K_\beta/Z_\beta$ is the model's adopted preparation. The semiboundedness, positive finite trace, AC assumptions and moment envelope in the Statement match the hypotheses of [L1]. [F1, F3, L1, A1]

2.1 Applying [L1] to the supplied eigenfamily yields the finite spectral mean and variance and the dimensionless entropy identity $s_\beta=\log Z_\beta+\beta\bar E_\beta$. By the definitions in the Statement, $S_{\mathrm{vN}}=k_{\mathrm B}s_\beta$; using $\beta k_{\mathrm B}=1/T$ gives $F_{\mathrm{stat}}=\bar E_\beta-T S_{\mathrm{vN}}=-k_{\mathrm B}T\log Z_\beta$. The deduction is conditional on [L1] and the adopted preparation; it asserts no dynamics. [F1, F2, F3, L1, step 1.1, algebra] ∎
