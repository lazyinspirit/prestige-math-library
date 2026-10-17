---
id: texp-tgr-two-accelerations
kind: thought-experiment
title: Two model acceleration thermometers
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - def-countable-choice
  - pthm-tgr-free-vacuum-acceleration-temperature
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-tgr-free-vacuum-acceleration-temperature: physical-result
physical_scope: "A hypothetical comparison of two proper accelerations in the selected massless Minkowski-vacuum two-state model, with no apparatus construction, measured outcome, or universal acceleration-temperature claim."
empirical_premises: []
proof_strategy: direct
strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes"
      url: "https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf"
      locator: "Complete 151-page PDF; §4.3, printed pp. 55–58, and §4.7, pp. 71–74, for the ideal accelerated-detector and Rindler interpretations."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16, for the boost-orbit context and the distinction from Hawking radiation."
    - title: "Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications"
      url: "https://arxiv.org/pdf/0710.5373"
      locator: "Complete 53-page review; §III.A.1–2, PDF pp. 19–22, for the perturbative point-detector detailed-balance comparison."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. Fix $E>0$ joules, $c>0$ metres per second, $\hbar>0$ joule-seconds, $k_B>0$ joules per kelvin, and a Rindler normalization $\kappa>0$ inverse metres. In the selected acceleration model of [[pthm-tgr-free-vacuum-acceleration-temperature]], compare the two proper-time hyperbolae with accelerations $a$ and $2a$ for any $a>0$. Their effective temperatures are $T_U(a)=\hbar a/(2\pi c k_B)$ and $T_U(2a)=2T_U(a)$. On the same boost congruence their radii are $\rho_a=c^2/a$ and $\rho_{2a}=c^2/(2a)$, with lapses $N_a=\kappa\rho_a$ and $N_{2a}=N_a/2$; both satisfy $T_U=T_K^{\rm acc}/N$ for $T_K^{\rm acc}=\hbar c\kappa/(2\pi k_B)$. Rescaling the boost generator by any $b>0$ changes $N$ and $T_K^{\rm acc}$ by $b$ but leaves both local effective temperatures invariant. These are conditional outputs of the specified effective rate model, not observed detector readings.

## Facts & Assumptions

**Given:** Countable Choice and the two-state acceleration model, Rindler lapse, reference normalization, and temperature formula of [[pthm-tgr-free-vacuum-acceleration-temperature]], with $a,\kappa,E,c,\hbar,k_B>0$.

[F1] [[pthm-tgr-free-vacuum-acceleration-temperature]] states $T_U=\hbar a/(2\pi c k_B)$ for each $a>0$ and gives $N=\kappa\rho$ and $T_U=T_K^{\rm acc}/N$ with $T_K^{\rm acc}=\hbar c\kappa/(2\pi k_B)$.

[A1] The comparison uses the same $E,c,\hbar,k_B$, coupling model, boost congruence, and reference normalization for both hypothetical systems; it reports no empirical event.

[A2] Assume Countable Choice [[def-countable-choice]], retaining the hypothesis of the mathematical spectral and tested-field suppliers used here.

## Proof

1.1 Under the Countable Choice assumption [A2], apply [F1] first at acceleration $a$ and then at $2a$. The fixed positive constants cancel in the ratio, so $T_U(2a)/T_U(a)=2$. [A2, A1, F1, given, algebra]

2.1 On a fixed boost congruence, $\rho_a=c^2/a$ and $\rho_{2a}=c^2/(2a)=\rho_a/2$, hence $N_{2a}=\kappa\rho_{2a}=N_a/2$. Substitution into [F1] gives the same ratio of effective temperatures and the common reference $T_K^{\rm acc}$. [A1, F1, step 1.1, algebra]

3.1 Under $\chi_\kappa\mapsto b\chi_\kappa$ with $b>0$, [F1] gives $N\mapsto bN$ and $T_K^{\rm acc}\mapsto bT_K^{\rm acc}$ at each orbit; therefore $T_K^{\rm acc}/N$ and each effective local temperature are unchanged. The comparison is entirely conditional on [F1]'s model assumptions. [F1, step 2.1, algebra] ∎

