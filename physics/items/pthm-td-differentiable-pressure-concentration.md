---
id: pthm-td-differentiable-pressure-concentration
kind: physics-theorem
domain: physics
title: Energy-density concentration at differentiable lattice pressure
status: published
origin: pipeline
library: physics
dependency_level: 6
deps: [def-td-finite-microstate-model, def-td-si-quantities, post-td-canonical-sampling, pthm-td-lattice-bulk-pressure, thm-tdmath-limiting-derivative-and-concentration]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  pthm-td-lattice-bulk-pressure: physical-result
  thm-tdmath-limiting-derivative-and-concentration: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Conditional model probabilities for bounded finite-range lattice systems at a differentiability point of the limiting log-partition density; no concentration claim is made at a nondifferentiable point or for arbitrary observables.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3.2 and 5.3.1 (printed pp. 19–20 and 156–157)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4.6 and 6.2.2 (printed pp. 207–208 and 330–333)
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

For the lattice model and canonical law of [[pthm-td-lattice-bulk-pressure]], let $p_L(\gamma)=L^{-d}\log Z_L(\gamma)$ converge pointwise on an open interval $J_\beta\subset(0,\infty)$ to $p(\gamma)$. If $p$ is differentiable at $\beta\in J_\beta$, set $e=-p'(\beta)$ in joules per site. Then the canonical mean energy density satisfies $\mathbb E_{\beta,L}[H_L]/L^d\to e$, and for every $\varepsilon>0$ there exist $c>0$ and $L_0$ such that
$$\mathbb P_{\beta,L}\!\left(\left|H_L/L^d-e\right|\ge\varepsilon\right)\le2e^{-cL^d}\qquad(L\ge L_0).$$
The probability is the model's finite-volume canonical probability, not an observed frequency. No conclusion is asserted when $p$ is nondifferentiable.

## Facts & Assumptions

**Given:** The bounded finite-range lattice models, their canonical probabilities, pointwise convergence of $p_L$ on an open positive interval, and differentiability of the limit at $\beta$.

[F1] [[pthm-td-lattice-bulk-pressure]]: $p_L=L^{-d}\log Z_L$ is the reduced lattice log-partition density and its canonical law is the finite-volume model law.

[L1] [[thm-tdmath-limiting-derivative-and-concentration]] (current batch 11 draft): if the finite-volume lattice pressures converge pointwise on an open positive interval and the limiting pressure is differentiable at $\beta$, then the finite-volume mean energy density converges to $-p'(\beta)$ and both tails have an exponential bound. Its full current proof was inspected; its draft status remains conditional.

[F2] [[post-td-canonical-sampling]]: the finite-volume probabilities are $e^{-\beta H_L}/Z_L$.

[F3] [[def-td-si-quantities]]: $H_L$ is in joules, $H_L/L^d$ and $e$ are in joules per site, $\beta$ in $\mathrm{J^{-1}}$, and the probability bound is dimensionless.

[A1] $\beta$ lies in an open interval $J_\beta\subset(0,\infty)$, $p_L\to p$ on that interval, and $p$ is differentiable at the specified $\beta$.

## Proof

**Given:** The lattice model, its finite canonical law, the pointwise limiting pressure, and differentiability at $\beta$.

1.1 The finite-volume energy law and $p_L$ in [F1]–[F2] match the model and probability hypotheses of [L1]. The condition $\beta>0$ and differentiability at $\beta$ are exactly those in [A1]. [F1, F2, F3, L1, A1]

2.1 Applying [L1] yields $\mathbb E_{\beta,L}[H_L]/L^d\to -p'(\beta)=e$ and, for each fixed $\varepsilon>0$, a constant $c>0$ and threshold $L_0$ with the stated two-tail exponential estimate. The result is a model probability statement and is silent at pressure nondifferentiability. [F1, L1, step 1.1] ∎
