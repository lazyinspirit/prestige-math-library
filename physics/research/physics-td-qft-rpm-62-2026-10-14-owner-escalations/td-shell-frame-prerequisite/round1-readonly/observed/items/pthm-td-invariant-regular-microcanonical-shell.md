---
id: pthm-td-invariant-regular-microcanonical-shell
kind: physics-theorem
domain: physics
title: Invariance of a regular-shell microcanonical preparation
status: draft
origin: pipeline
library: physics
dependency_level: 5
deps: [def-axiom-of-choice, def-td-regular-hamiltonian-shell-preparation, def-td-si-quantities, post-td-microcanonical-sampling, thm-tdmath-hamiltonian-measure-and-recurrence, thm-tdmath-regular-energy-shell-measure]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-regular-hamiltonian-shell-preparation: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-microcanonical-sampling: physical-assumption
  thm-tdmath-hamiltonian-measure-and-recurrence: mathematical-premise
  thm-tdmath-regular-energy-shell-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A classical Hamiltonian flow that is globally defined and invertible on a compact regular energy band with the stated coarea measure; invariance is not ergodicity, mixing, equilibration, or equality of time and ensemble averages.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2 (printed pp. 2–16)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.2 (printed pp. 192–198)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let a physical Hamiltonian model satisfy [[def-td-regular-hamiltonian-shell-preparation]] on a nonempty compact regular energy band, and adopt its normalized shell law by [[post-td-microcanonical-sampling]]. In addition to the definition's $C^2$ regularity, assume its numerical Hamiltonian $\hat H$ is $C^\infty$ and its Hamiltonian flow $\phi_t$ is an invertible smooth map of the whole band for every $t\in\mathbb R$. Then, conditional on the current batch-12 draft mathematical interfaces [[thm-tdmath-hamiltonian-measure-and-recurrence]] and [[thm-tdmath-regular-energy-shell-measure]], every shell probability $\nu_{\hat E}$ is invariant:
$$\nu_{\hat E}(\phi_t^{-1}(A))=\nu_{\hat E}(A)$$
for every Borel set $A\subseteq\Sigma_{\hat E}$ and every $t\in\mathbb R$. This result asserts no ergodicity, time-average equality, or thermalization.

## Facts & Assumptions

**Given:** A canonical Hamiltonian chart, a nonempty compact regular energy shell, its normalized coarea preparation, and a globally defined invertible flow on the band.

[F1] [[def-td-regular-hamiltonian-shell-preparation]]: the dimensionless energy level is regular and compact and the normalized coarea probability $\nu_{\hat E}$ is defined.

[F2] [[post-td-microcanonical-sampling]]: on this admitted regular shell the assigned microcanonical preparation is $\nu_{\hat E}$.

[L1] [[thm-tdmath-hamiltonian-measure-and-recurrence]] (current batch 12 draft): under AC, a smooth Hamiltonian on a symplectic manifold has a local flow preserving symplectic volume wherever defined; completeness or global existence is not inferred. The current Statement and full proof are present and were inspected; Step 1 readiness is missing, so this premise remains conditionally used.

[L2] [[thm-tdmath-regular-energy-shell-measure]] (current batch 12 draft): for $C^2$ energy on an open Euclidean domain with compact regular energy bands, the coarea construction has finite positive mass on each nonempty shell; a Hamiltonian flow that is a diffeomorphism of a full compact band and preserves that band preserves each normalized shell measure. The current Statement and full proof are present and were inspected; Step 1 readiness is missing, so this premise remains conditionally used.

[A1] AC is included as the exact set-theoretic assumption of [L1]; no ergodicity hypothesis is assumed.

[A2] The numerical Hamiltonian is $C^\infty$, strengthening the shell definition's $C^2$ assumption to match [L1]; the flow is assumed to be a smooth invertible map of the whole band for every real $t$. This global-flow condition is not inferred from the local Hamiltonian equations.

## Proof

**Given:** The regular-shell model, its adopted shell probability, AC, and an invertible smooth Hamiltonian flow defined on the full band.

1.1 By [F1] and [A2], the canonical Hamiltonian data, smoothness, and full-band invertible flow match the hypotheses of [L1]–[L2]. Energy is conserved along each flow line because $\frac{d}{dt}\hat H(\phi_t(x))=d\hat H(X_{\hat H})=\hat\omega(X_{\hat H},X_{\hat H})=0$; the global-flow condition is an assumption, not a consequence of local equations. [F1, L1, L2, A1, A2, given, algebra]

2.1 The draft suppliers [L1] and [L2] give volume preservation and shell-measure invariance for the matched model in step 1.1. Normalization by the positive finite shell mass preserves invariance, and [F2] assigns that normalized measure as the preparation. Hence $\nu_{\hat E}(\phi_t^{-1}(A))=\nu_{\hat E}(A)$. This deduction remains conditional while both suppliers lack current Step 1 readiness. [F2, L1, L2, step 1.1] ∎
