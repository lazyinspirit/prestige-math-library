---
id: pthm-emg-fluid-work-heating
kind: physics-theorem
title: "Convective/Ohmic comoving mechanical work prediction"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - post-emg-charged-fluid-balance
  - thm-emg-charged-fluid-projections
dependency_roles:
  post-emg-charged-fluid-balance: physical-assumption
  thm-emg-charged-fluid-projections: mathematical-premise
physical_scope: "A conditional local energy and pressure-force projection for the selected smooth charged perfect fluid. Comoving electromagnetic work is zero for the convective current and is nonnegative for the separately adopted smooth Ohmic law. This is a mechanical balance, not an entropy theorem or global fluid solution."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.107)–(1.110), isotropic perfect-fluid stress in its rest frame and covariant form."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.4, equations (4.53)–(4.55), PDF pp. 192–194 (printed pp. 185–187), local perfect-fluid stress and its longitudinal/orthogonal balance projections. The electromagnetic source and Ohmic current are additional hypotheses here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\Omega$ be a smooth open state domain of [[post-emg-charged-fluid-balance]]. Assume $\epsilon,p,\sigma\in C^1(\Omega,\mathbb R)$, $U\in C^2(\Omega,T\Omega)$ is future timelike with $g(U,U)=-c^2$, $F$ is a smooth electromagnetic two-form, and the matter stress and current satisfy the selected fluid closure and exchange equation. Define

$$D:=U^a\nabla_a,\qquad \theta:=\nabla_aU^a,\qquad a^b:=DU^b,\qquad h^b{}_c:=\delta^b{}_c+\frac{U^bU_c}{c^2},\qquad f^b:=F^b{}_cj^c,\qquad E_U^a:=F^a{}_bU^b.$$

Then the longitudinal work and rest-space force equations are

$$D\epsilon+(\epsilon+p)\theta=-U_bf^b,\qquad \frac{\epsilon+p}{c^2}a^b+h^{ba}\nabla_ap=h^b{}_cf^c.$$

For the convective branch $j^a=\sigma U^a$, the comoving electromagnetic work $-U_bf^b$ is zero. For the optional smooth Ohmic branch $j^a=\sigma U^a+q^a$, $q^a=\chi E_U^a$, with $\chi\geq0$, it is

$$-U_bf^b=\chi\,g(E_U,E_U)\geq0.$$

Here $E_U$ is the rest-frame electric field and the induced metric on $U^\perp$ is positive definite. This is a conditional mechanical energy identity; it does not assert an entropy-production law, equation-of-state evolution, causal constitutive theory, or fluid existence.

## Facts & Assumptions

**Given:** The regularity, timelike normalization, perfect-fluid stress, selected current, smooth electromagnetic field and matter-exchange equation in the Statement.

[A1] [[post-emg-charged-fluid-balance]]: the selected smooth model adopts $T_m^{ab}=(\epsilon+p)U^aU^b/c^2+pg^{ab}$ and $\nabla_aT_m^{ab}=F^b{}_cj^c$, with either $j^a=\sigma U^a$ or the separately specified smooth conduction current $j^a=\sigma U^a+q^a$ and $q^aU_a=0$.

[F1] [[thm-emg-charged-fluid-projections]]: for these $C^1$ fluid scalars, $C^2$ unit-normalized $U$, and the exchange equation, the two displayed projections are equivalent to the full tensor balance; if $q^a=\chi E_U^a$ with $\chi\geq0$, then $-U_bf^b=\chi g(E_U,E_U)\geq0$, while $q=0$ gives zero work. This is a draft mathematical supplier and is used only at its exact current statement.

## Proof

1.1 The physical stress, current, smoothness and normalization in [A1] match the hypotheses of [F1]. Applying its projection identity to $\nabla_aT_m^{ab}=f^b$ gives the stated longitudinal energy equation and orthogonal pressure/acceleration equation, with no equation-of-state or entropy premise. [A1, F1, given]

2.1 For $j^a=\sigma U^a$, antisymmetry of $F_{ab}$ gives $U_bF^b{}_cU^c=0$. For $j^a=\sigma U^a+q^a$, the same antisymmetry gives $-U_bF^b{}_cq^c=E_{U,c}q^c$. Under the optional law $q^a=\chi E_U^a$, this equals $\chi g(E_U,E_U)\geq0$ because $\chi\geq0$ and $U^\perp$ is positive definite; hence the two stated work branches follow. [A1, F1, step 1.1, algebra] ∎
