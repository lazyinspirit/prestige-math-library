---
id: pthm-emg-charged-scalar-coupling
kind: physics-theorem
title: "Field equations and balances of the selected scalar coupling"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - def-emg-classical-charged-scalar-model
  - lem-emg-charged-scalar-variation
  - post-emg-einstein-maxwell-action
  - pthm-emg-action-field-equations
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-classical-charged-scalar-model: formulation-prerequisite
  lem-emg-charged-scalar-variation: mathematical-premise
  post-emg-einstein-maxwell-action: physical-assumption
  pthm-emg-action-field-equations: physical-result
proof_strategy: direct
physical_scope: >
  Conditional equations for one smooth classical charged-scalar functional
  coupled to the adopted smooth Einstein–Maxwell action. Current and stress
  balances hold on the scalar matter equation. No quantum interpretation,
  empirical matter claim, or coupled PDE solution is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80), Abelian charged-scalar action and covariant derivative. The local current, stress, and balance identities are derived in the mathematical supplier."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.1, PDF pp. 148–151 (printed pp. 141–144), metric variation; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), scalar and Maxwell stress tensors."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.69)–(4.72), PDF pp. 123–125, stress variation; Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147, matter-on-shell diffeomorphism identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the specified model of [[def-emg-classical-charged-scalar-model]] and the
adopted total action of [[post-emg-einstein-maxwell-action]]. Write
$P_a:=D_a\varphi$, $L_\varphi:=g^{ab}\overline{P_a}P_b+V(|\varphi|^2)$ and

$$E_\varphi:=D_aP^a-V'(|\varphi|^2)\varphi,\qquad j^a:=K_\varphi\lambda\,\operatorname{Im}(\overline{\varphi}P^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{P_a}P_b) -\frac{K_\varphi}{2}g_{ab}L_\varphi.$$

For smooth fields and the compact fixed-sector variations, stationarity of
the selected scalar matter action in every scalar direction is equivalent to
$E_\varphi=0$. Stationarity of the full action in all fields then gives

$$\nabla_aF^{ab}=-\mu_0j^b,\qquad G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^\varphi_{ab}),$$

with $dF=0$ for the connection curvature. On the scalar matter equation,

$$\nabla_a j^a=0,\qquad \nabla_a(T^\varphi)^a{}_b=F_{ba}j^a.$$

These are conditional field equations and local balance identities for the
specified classical branch. They assert neither existence of a smooth
solution nor empirical or quantum validity.

## Facts & Assumptions

**Given:** The smooth scalar model and adopted total action, a fixed bundle
sector, smooth $g,F,\varphi$, constants and potential satisfying
[[def-emg-classical-charged-scalar-model]], compactly supported variations,
and the indexed countable-choice convention [A2].

[F1] [[def-emg-classical-charged-scalar-model]]: the selected matter action is
exactly the classical functional $S_\varphi$ on the stated bundle and
parameter branch.

[F2] [[lem-emg-charged-scalar-variation]]: its scalar variation is
$\delta_\varphi S_\varphi=(K_\varphi/c)\operatorname{Re}\int
\overline{\delta\varphi}E_\varphi\,\mathrm{vol}_g$; its connection and metric
variations define the displayed $j^a$ and $T^\varphi_{ab}$; on shell it gives
$\nabla_a j^a=0$ and
$\nabla_a(T^\varphi)^a{}_b=F_{ba}j^a$.

[F3] [[post-emg-einstein-maxwell-action]]: full admissibility is stationarity
under independent compact variations of the metric, connection, and selected
matter fields.

[F4] [[pthm-emg-action-field-equations]]: for this action, those independent
stationarity conditions are equivalent to the sourced Maxwell equation, the
Einstein equation with the Maxwell and selected-matter Hilbert tensors, and
the selected matter Euler–Lagrange condition.

[A1] $K_\varphi>0$, $\lambda$ is in the permitted representation branch,
$V$ is real and smooth near all attained $|\varphi|^2$, and all fields are
smooth. The conclusion concerns only this smooth configuration domain.

[A2] The compact-integration suppliers use the indexed countable-choice
convention [[def-countable-choice]]: every sequence of nonempty sets has a
choice function. No full Axiom of Choice is used.

## Proof

**Proof technique:** identify the scalar Euler–Lagrange equation and its
current/stress variations, then apply the total-action stationarity theorem.

1.1 By [F1] and [F2], the scalar first variation vanishes for every compact
complex-section variation exactly when $E_\varphi=0$. The same supplier gives
the connection variation with current $j^a$ and metric variation with
$T^\varphi_{ab}$ as displayed. [A1, A2, F1, F2]

2.1 Apply [F4] with the selected action and its matter, current, and stress
variations from step 1.1. Full stationarity from [F3] therefore yields the
sourced Maxwell and Einstein equations in the Statement, together with
$E_\varphi=0$. The homogeneous identity $dF=0$ is already part of the
fixed-connection curvature interface. [A2, F1, F3, F4, step 1.1]

3.1 Substitute $E_\varphi=0$ from step 2.1 into the two off-shell balance
identities in [F2]. Their right sides reduce to zero in the current identity
and to $F_{ba}j^a$ in the stress identity, giving both on-shell balances.
This uses no existence or regularity theorem for the coupled field equations.
[A2, F2, step 2.1, algebra] ∎
