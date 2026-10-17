---
id: pthm-emg-total-matter-field-exchange
kind: physics-theorem
title: "Electromagnetic and matter stress exchange"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-countable-choice
  - def-emg-geometry-units
  - post-emg-covariant-maxwell
  - post-emg-selected-matter-action
  - lem-emg-maxwell-stress-divergence
  - lem-emg-matter-noether-exchange
  - thm-gr-second-bianchi-and-divergence-free-einstein
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  post-emg-covariant-maxwell: physical-assumption
  post-emg-selected-matter-action: physical-assumption
  lem-emg-maxwell-stress-divergence: mathematical-premise
  lem-emg-matter-noether-exchange: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
proof_strategy: direct
physical_scope: >
  Local stress exchange on smooth solutions of the adopted vacuum Maxwell
  system and one selected invariant matter action. The result is conditional
  on the matter fields being on shell. It asserts no global gravitational
  energy, Killing charge without symmetry and flux hypotheses, or coupled PDE
  solution.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.2–§4.5.3, PDF pp. 190–193 (printed pp. 183–186), Hilbert stress, Maxwell stress, and diffeomorphism identity."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.69)–(4.72), PDF pp. 123–125, electromagnetic stress; Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147, on-shell diffeomorphism identity."
verification:
  precheck: pass
---

## Statement

Let $U$ be an open subset of a smooth oriented, time-oriented Lorentzian
four-manifold with signature $(-,+,+,+)$. Let $F$ and $j$ be smooth, and assume
the adopted Maxwell equations $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ of
[[post-emg-covariant-maxwell]]. Let $S_m$ be the selected smooth invariant
matter functional of [[post-emg-selected-matter-action]], and suppose its
matter fields are on shell. Define $T^{\mathrm{EM}}$ by the local Maxwell
variation and $T^m$ by the Hilbert variation of $S_m$. Then

$$\nabla_a T_{\mathrm{EM}}^{ab}=-F^{bc}j_c,\qquad \nabla_aT_m^{ab}=F^{bc}j_c,\qquad \nabla_a(T_{\mathrm{EM}}^{ab}+T_m^{ab})=0.$$

Set $\kappa_E:=8\pi G_N/c^4>0$ using the SI constants of
[[def-emg-geometry-units]]. If, in addition, the pointwise Einstein equation
$$G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$$
holds with constant $\Lambda$, the contracted Bianchi identity shows that
the total conservation law is its necessary source-compatibility condition.
This local identity is not a universal gravitational energy statement and
does not imply existence of a solution.

## Facts & Assumptions

**Given:** A smooth oriented, time-oriented Lorentzian geometry, smooth
$F,j,T^m$, the adopted sourced Maxwell equations, and one selected
gauge/diffeomorphism-invariant matter action whose matter fields satisfy its
Euler–Lagrange equations, under the indexed countable-choice convention [A2].

[F1] [[post-emg-covariant-maxwell]]: $dF=0$ and
$\nabla_aF^{ab}=-\mu_0j^b$ for smooth fields in the chosen SI convention.

[F2] [[post-emg-selected-matter-action]]: the chosen action has compact
connection and inverse-metric variations with current $j$ and symmetric
Hilbert tensor $T^m$, and is gauge and diffeomorphism invariant.

[F3] [[lem-emg-maxwell-stress-divergence]]: for smooth fields satisfying
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$,
$\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$.

[F4] [[lem-emg-matter-noether-exchange]]: on the matter equations of the
selected invariant action, $\nabla_aT_m^{ab}=F^{bc}j_c$.

[F5] [[thm-gr-second-bianchi-and-divergence-free-einstein]]:
$\nabla^aG_{ab}=0$ for the smooth metric-selected Lorentzian connection,
which is metric-compatible.

[F6] [[def-emg-geometry-units]]: $c>0$ and $G_N>0$ are constant SI model
parameters and $\kappa_E=8\pi G_N/c^4$, so $\kappa_E>0$.

[A1] The cosmological parameter $\Lambda$ and coupling $\kappa_E$ are
constant, and all fields in the local identities are smooth; no singular
point-field stress is used.

[A2] The compact-integration suppliers use the indexed countable-choice
convention [[def-countable-choice]]: every sequence of nonempty sets has a
choice function. No full Axiom of Choice is used.

## Proof

**Proof technique:** apply the two conditional divergence identities and add
their opposite force terms.

1.1 Apply [F3] using the smoothness and Maxwell equations in [F1]. This gives
$\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$ pointwise on $U$. The sign is fixed
by the sourced convention in [F1]. [A2, F1, F3, given]

1.2 Apply [F4] to the same current and the selected matter model in [F2].
Because the matter fields are on shell and the action has the required
invariances, $\nabla_aT_m^{ab}=F^{bc}j_c$. This term is the force received by
the matter subsystem, not separate matter conservation. [A1, A2, F2, F4, given]

2.1 Add the identities in steps 1.1 and 1.2. Their right sides are exact
opposites with the same raised-index convention, so
$\nabla_a(T_{\mathrm{EM}}^{ab}+T_m^{ab})=0$. [step 1.1, step 1.2, algebra]

3.1 If the pointwise Einstein equation in the Statement also holds, take its
covariant divergence. By [F5], $\nabla^aG_{ab}=0$; metric compatibility gives
$\nabla^a(\Lambda g_{ab})=\Lambda\nabla^ag_{ab}=0$ because $\Lambda$ is
constant. By [F6], $\kappa_E>0$, so the field equation requires
$\nabla^a(T^{\mathrm{EM}}_{ab}+T^m_{ab})=0$. This agrees with step 2.1 after
lowering its free index and is only a compatibility condition; it does not
solve the field equations. [A1, F5, F6, step 2.1, algebra] ∎

