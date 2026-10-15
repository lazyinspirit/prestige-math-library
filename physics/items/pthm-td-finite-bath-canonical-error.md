---
id: pthm-td-finite-bath-canonical-error
kind: physics-theorem
domain: physics
title: Finite-bath canonical error under a smooth shell-entropy model
status: published
origin: pipeline
library: physics
dependency_level: 5
deps: [def-axiom-of-choice, def-td-finite-microstate-model, def-td-si-quantities, post-td-canonical-sampling, post-td-microcanonical-sampling, thm-tdmath-finite-bath-error-bound]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  post-td-microcanonical-sampling: physical-assumption
  thm-tdmath-finite-bath-error-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A finite subsystem weakly coupled additively to a bath whose dimensionless shell entropy is twice continuously differentiable with bounded curvature on the full exchanged-energy interval; this is a conditional model bound, not a universal finite-size estimate.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3 (printed pp. 17–20)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2 and 4.4 (printed pp. 192–198 and 205–208)
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

Assume AC for the regular-shell reading of [[post-td-microcanonical-sampling]]. Let the subsystem have a finite nonempty state set $\Omega$ and internal energies $E_x$ in joules with $|E_x|\le L$, where $L$ is in joules. The bath model supplies an open interval $U$ containing $[u_0-L,u_0+L]$, with bath energies $u,u_0\in U$ in joules, and a dimensionless shell-log-weight function $s_B:U\to\mathbb R$; define the positive shell weight by $W_B(u):=e^{s_B(u)}$. Assume $s_B\in C^2(U)$ and $|s_B''(u)|\le M$ on the displayed interval, where $M$ is in $\mathrm{J^{-2}}$. The model adopts $\beta=s'_B(u_0)>0$ in $\mathrm{J^{-1}}$, $k_{\mathrm B}$ in $\mathrm{J\,K^{-1}}$, and $T=(k_{\mathrm B}\beta)^{-1}$ in kelvins. Assume weak additive coupling and separately stipulate that microcanonical shell sampling induces subsystem weights $P_B(x)\propto W_B(u_0-E_x)=e^{s_B(u_0-E_x)}$; this induced-marginal rule is an additional bath-model assumption, not a consequence of the microcanonical sampling postulate alone. Let $P_C(x)=e^{-\beta E_x}/Z$ be the corresponding canonical law. With $\delta=ML^2/2$ (dimensionless), the shell log-weight remainder obeys
$$|s_B(u_0-E_x)-s_B(u_0)+\beta E_x|\le\delta,$$
and the normalized laws satisfy
$$\sum_{x\in\Omega}|P_B(x)-P_C(x)|\le e^{2\delta}-1.$$
This is an $\ell^1$ probability-vector bound; it does not assert a universal error or a thermodynamic limit.

## Facts & Assumptions

**Given:** The finite subsystem, the supplied bath shell-log-weight function and curvature bound, the adopted energy-additive model, and the separately stipulated normalized bath-shell marginal and canonical laws.

[F1] [[def-td-finite-microstate-model]]: $\Omega$ is finite and nonempty and each $E_x$ is a fixed internal energy in joules.

[F2] [[post-td-canonical-sampling]]: the canonical comparison law has weights $e^{-\beta E_x}/Z$ when $Z>0$ is finite.

[F3] [[post-td-microcanonical-sampling]]: the postulate adopts uniform sampling on a nonempty finite energy window or the normalized coarea law on an admitted regular shell, with AC for the regular-shell branch. It does not derive the subsystem marginal [A2].

[L1] [[thm-tdmath-finite-bath-error-bound]] (current batch 11 draft): for finite energies $|E_x|\le L$, $s_B\in C^2$ on the stated interval, $|s_B''|\le M$, $\beta=s'_B(u_0)$, and normalized weights proportional to $e^{s_B(u_0-E_x)}$, the Taylor remainder is at most $\delta=ML^2/2$ and the canonical comparison law has $\ell^1$ error at most $e^{2\delta}-1$. Its full current proof was inspected; its draft status remains conditional.

[A1] $E_x,u_0,L$ are measured in joules; $L,M\ge0$ with $M$ in $\mathrm{J^{-2}}$; $\beta=s'_B(u_0)>0$ is in $\mathrm{J^{-1}}$; the bath interval contains every $u_0-E_x$; and $s_B$ and $\delta$ are dimensionless.

[A2] The bath-shell model separately assigns the normalized subsystem marginal $P_B(x)=e^{s_B(u_0-E_x)}/\sum_y e^{s_B(u_0-E_y)}$. This is an explicit assumption, not a marginal formula supplied by the microcanonical postulate.

## Proof

**Given:** The finite-system energies, the smooth bath shell-log-weight model, and the weak-additive microcanonical marginal separately stipulated in the Statement.

1.1 The adopted parent microcanonical model uses the finite-window or regular-shell sampling of [F3], with the stated AC assumption for the regular-shell reading; that premise does not determine the subsystem marginal. With $|E_x|\le L$, every bath argument $u_0-E_x$ lies in the stated interval. The curvature bound and $\beta=s'_B(u_0)$ therefore match the hypotheses of [L1], including the dimensionless remainder scale $\delta=ML^2/2$. The normalized weights required by [L1] are the additional subsystem-marginal assumption [A2], not a consequence of the microcanonical postulate; the finite canonical comparison is [F2]. [F1, F2, F3, L1, A1, A2]

2.1 Applying [L1] to these matched inputs gives $|s_B(u_0-E_x)-s_B(u_0)+\beta E_x|\le\delta$ for each state and $\sum_x|P_B(x)-P_C(x)|\le e^{2\delta}-1$. The claim is conditional on the separately stipulated shell-weight rule and the draft mathematical supplier, not on bath size alone. [F2, L1, step 1.1] ∎
