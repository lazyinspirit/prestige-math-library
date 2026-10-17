---
id: pthm-emg-dust-mass-force-reduction
kind: physics-theorem
title: "Dust continuity, transport and Lorentz acceleration"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - post-emg-transported-charged-dust
  - thm-emg-charged-dust-projection
dependency_roles:
  post-emg-transported-charged-dust: physical-assumption
  thm-emg-charged-dust-projection: mathematical-premise
physical_scope: "A conditional local stress/current balance reduction for the selected smooth charged-dust continuum on an open positive-density region. It identifies the exact mass-continuity, charge-transport and Lorentz-force equations and asserts no coupled PDE existence or behavior at zero density."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.104)–(1.106), rest-frame dust current and stress; the exchange and charge-transport deductions are supplied by the stated mathematical theorem."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.3–4.5.4, PDF pp. 190–194 (printed pp. 183–187), matter stress and balance conventions; the charged-dust equivalence is conditional on the local mathematical supplier."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011)"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Complete 8-page article inspected; §2, equations (1)–(7), PDF pp. 2–3, one static charged-dust Einstein–Maxwell branch. Its fixed ratio and geometrized Gaussian normalization are not used as general assumptions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\Omega_+\subseteq\Omega$ be an open positive-density region of the charged-dust model in [[post-emg-transported-charged-dust]]. Let $\rho,\sigma\in C^1(\Omega_+,\mathbb R)$ with $\rho>0$, let $U\in C^2(\Omega_+,T\Omega_+)$ be future timelike with $g(U,U)=-c^2$, and let the smooth electromagnetic two-form and metric be those of that model. Set $a^b:=U^a\nabla_aU^b$, $T_m^{ab}:=\rho U^aU^b$, and $j^a:=\sigma U^a$.

On $\Omega_+$ the adopted charged-dust matter-exchange equation $\nabla_aT_m^{ab}=F^b{}_cj^c$ is equivalent to

$$\nabla_a(\rho U^a)=0,\qquad \rho a^b=\sigma F^b{}_cU^c.$$

Under the mass-continuity equation, $\nabla_aj^a=0$ is equivalent to transport of the charge-to-mass ratio $\alpha:=\sigma/\rho$ along the flow, $U^a\nabla_a\alpha=0$. These are model deductions on $\Omega_+$; the ratio and the divided force law are not defined at zero density. The result is local to its stated smooth positive-density domain and asserts neither a global smooth continuation nor validity of the single-velocity model beyond that domain. It supplies no Maxwell or Einstein solution or coupled-field existence theorem.

## Facts & Assumptions

**Given:** The smooth fields, regularity, normalization, dust closure and positive-density domain in the Statement, together with the selected physical branch and the exact mathematical supplier below.

[A1] [[post-emg-transported-charged-dust]]: the selected model uses $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, the undivided mass and Lorentz-force equations, and charge-current conservation; on $\rho>0$ it uses $\alpha=\sigma/\rho$.

[F1] [[thm-emg-charged-dust-projection]]: for $\rho>0$, $C^1$ real $\rho,\sigma$, and $C^2$ future timelike $U$ with $g(U,U)=-c^2$, its stated stress-exchange implication and its charge-conservation/transport equivalence under continuity apply. The stress-exchange implication assumes the exchange equation, so step 1.1 proves the converse directly. This current supplier is a draft result and is used only at these stated interfaces.

## Proof

1.1 The physical fields in [A1] have the regularity, positive-density domain, normalization, dust stress and current required by [F1]. If the stress-exchange equation holds, the stated implication in [F1] gives mass continuity and the Lorentz-force equation. Conversely, the product rule gives $\nabla_aT_m^{ab}=U^b\nabla_a(\rho U^a)+\rho a^b$; if mass continuity and the Lorentz-force equation hold, this equals $\sigma F^b{}_cU^c=F^b{}_cj^c$, recovering stress exchange. Hence the two directions of the equivalence hold on $\Omega_+$, with division used only there. [A1, F1, given, algebra]

2.1 Under the mass-continuity equation from step 1.1, the current-conservation clause of [F1] applies to $j^a=\sigma U^a$ and $\alpha=\sigma/\rho$, giving $\nabla_aj^a=0$ exactly when $U^a\nabla_a\alpha=0$. The equivalence is only along $U$ and imposes no transverse constancy; neither statement is extended to $\rho=0$. [A1, F1, step 1.1, algebra] ∎
