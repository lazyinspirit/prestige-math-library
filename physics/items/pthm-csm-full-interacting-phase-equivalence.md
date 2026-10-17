---
id: pthm-csm-full-interacting-phase-equivalence
kind: physics-theorem
title: Physical interacting local phase-space ensemble bridge
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-csm-full-marked-model
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - post-csm-fullphase-interacting-preparations
  - thm-csm-local-full-phase-equivalence
  - thm-csm-local-momentum-moments
  - def-ultrafilter-extension-principle
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  post-csm-fullphase-interacting-preparations: physical-assumption
  thm-csm-local-full-phase-equivalence: mathematical-premise
  thm-csm-local-momentum-moments: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
physical_scope: "Conditional predictions for fixed marked local observables and the named momentum moments in the adopted single-species classical preparation model; no equilibration, experiment, material fit, finite-volume grand limit, or universal shell-width claim."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Sections 1.2–1.4: ensemble preparation conventions; context only, the interacting limit is proved conditionally here."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Sections 4.2 and 4.4–4.5, printed pp.192–198 and 205–215 / PDF viewer pp.220–226 and 233–243: phase-space, canonical and grand-canonical conventions."
---

## Statement

Under the hypotheses and adopted preparations below, shell and exact-N canonical expectations of every fixed bounded marked-local observable converge to the same Gaussian-marked positional variational state. The shell also has the kinetic-energy, first-momentum and second-momentum expectation limits stated in [[thm-csm-local-momentum-moments]]. This is a conditional deduction from the model assumptions, not an observation or an equilibration claim.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC and HB; an integer dimension $d\geq1$; integer side lengths $L_n\to\infty$, $V_n=L_n^d$, and exact particle numbers $N_n\in\mathbb N$ with $N_n/V_n\to\rho>0$ at an interior attainable density; $T>0$ kelvin, $k_B>0$ J K$^{-1}$, $\beta_{\rm phys}:=1/(k_BT)$ in J$^{-1}$, and $b=E_0\beta_{\rm phys}=E_0/(k_BT)$; the superstable regular interaction with periodic boundary condition $bc=\mathrm{per}$; existence of the positional canonical log rate $F_{b'}(\rho)$ for every $b'$ in a neighborhood of $b$, differentiability at $b$, a finite supporting $\alpha$ with $P_{\rm Leb}(\alpha,b)=F_b(\rho)+\alpha\rho$, and a singleton positional grand variational minimizer. Adopt the single-species preparations of [[post-csm-fullphase-interacting-preparations]] under the exact conditions stated there. By that postulate and [[def-csm-full-marked-model]], the finite-volume physical Hamiltonian is $E_0\mathcal H_{L_n,\mathrm{per}}$, and the physical preparation laws match the normalized mathematical canonical and band laws. Here $\ell_0$ is the positive position unit in metres, $E_0$ the positive energy unit in joules, $m$ the positive mass in kilograms, $p_*$ the positive momentum reference in kg m s$^{-1}$, and the local region is fixed in dimensionless $x=q/\ell_0$ coordinates. The numerical intensity $\rho$ corresponds to physical number density $\rho/\ell_0^d$ in m$^{-d}$.

[A1] The full phase-band, canonical, and grand laws are adopted preparations under [[post-csm-fullphase-interacting-preparations]]; no dynamical or empirical premise is added.

[A2] AC, the ultrafilter extension principle, DC, and HB are the mathematical choice hypotheses carried by the positional convergence suppliers ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F1] [[thm-csm-local-full-phase-equivalence]]: shell and exact-N canonical expectations converge for each fixed bounded measurable marked-local observable to the same Gaussian-marked positional variational state; shell convergence also covers |G|≤C(1+N_Δ).

[F2] [[thm-csm-local-momentum-moments]]: shell expectations of local kinetic energy and the first and second momentum sums have the stated limits.

[F3] [[def-csm-full-marked-model]]: integrating the finite-volume grand preparation's momentum factors maps full activity $z_{\rm ph}$ to positional activity $z_{\rm ph}\kappa_b$. Thus the activity matching $e^\alpha$ is $e^\alpha/\kappa_b$; this normalization identity makes no finite-volume grand-convergence claim.

## Proof

**Given:** The hypotheses and adopted preparation above.

1.1 A fixed bounded marked-local observable is bounded on its named region, so [F1] applies directly to shell and canonical preparations. Their common limiting law is the independent Gaussian mark lift of the positional grand variational minimizer $P_*$. The finite-volume normalization in [F3] identifies the full-grand activity that matches positional activity $\exp(\alpha)$ as $\exp(\alpha)/\kappa_b$; it does not assert convergence of finite-volume grand preparations. [A1, A2, F1, F3]

2.1 For the named momentum-moment limits, fix a bounded half-open cube $\Delta\subseteq[0,\infty)^d$, or any fixed translate of such a cube, as in [F2]. Apply [F2] on this cube. Restoring units multiplies dimensionless kinetic energy by $E_0$ and uses $E_0/b=k_BT=1/\beta_{\rm phys}$; the local kinetic-energy limit is $d\rho|\Delta|/(2\beta_{\rm phys})$ joules. The first momentum sum tends to zero, and the momentum-product sum tends to $m\rho|\Delta|\delta_{ij}/\beta_{\rm phys}$ in SI units. These are conditional model deductions, not measured values or claims of equilibration. [A1, F2, algebra] ∎
