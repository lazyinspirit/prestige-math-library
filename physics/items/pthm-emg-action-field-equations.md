---
id: pthm-emg-action-field-equations
kind: physics-theorem
title: "Einstein–Maxwell equations from compact action stationarity"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - def-countable-choice
  - lem-emg-circle-connection-gluing
  - lem-emg-einstein-action-variation
  - lem-emg-maxwell-action-variation
  - post-emg-einstein-maxwell-action
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-einstein-action-variation: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  post-emg-einstein-maxwell-action: physical-assumption
proof_strategy: direct
physical_scope: >
  Conditional equivalence between compact interior stationarity of the adopted
  smooth fixed-sector action and its metric, connection, and selected matter
  Euler–Lagrange equations. It asserts no existence, uniqueness, regularity
  improvement, empirical validity, or boundary variational principle.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§3.2.5, PDF pp. 120–124 (printed pp. 113–117), Maxwell action variation; §4.1, PDF pp. 148–151 (printed pp. 141–144), Einstein–Hilbert variation; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), stress conventions. The SI coefficients and compact-variation hypotheses are explicit here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.54)–(4.72), PDF pp. 120–125, metric action variation and matter coupling. The assigned equations use the local SI and signature conventions."
verification:
  precheck: pass
---

## Statement

Let $(M,g)$, the fixed smooth connection sector, the constants $c,G_N,\mu_0>0$,
constant $\Lambda$, and the selected matter functional $S_m$ be exactly those
of [[post-emg-einstein-maxwell-action]]. Write $F$ for the connection curvature,
$j$ and $T^m$ for the current and Hilbert tensor in the selected matter
variation, and define
$G_{ab}:=\operatorname{Ric}_{ab}-\tfrac12Rg_{ab}$ using the Ricci and scalar
curvature contractions in the convention of [[def-emg-lorentzian-forms]]. Also
set

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),\qquad \kappa_E:=\frac{8\pi G_N}{c^4}.$$

The homogeneous identity $dF=0$ holds because $F$ is the curvature of the
smooth connection in the fixed sector. The adopted configuration is stationary
under every admissible compactly supported metric, connection, and matter
variation if and only if all of the following hold:

$$\nabla_aF^{ab}=-\mu_0j^b,\qquad G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab}),\qquad \delta_\Psi S_m[\zeta]=0\ \text{for every admissible compactly supported }\zeta.$$

The last clause is the selected matter model's Euler–Lagrange condition; an
explicit local matter equation cannot be given until $S_m$ is specified.
These are model deductions from the adopted action and smooth compact
variation hypotheses, not evidence that a coupled solution exists or that the
model describes nature.

## Facts & Assumptions

**Given:** The total action and independent compact variation classes of
[[post-emg-einstein-maxwell-action]], a fixed smooth bundle sector, and the
selected matter action with its current and Hilbert tensor, under the indexed
countable-choice convention [A2].

[F1] [[post-emg-einstein-maxwell-action]]: stationarity is adopted independently
for compact metric, connection, and matter variations; the source and stress
terms are the first variations of the selected $S_m$.

[F2] [[lem-emg-maxwell-action-variation]]: for the fixed-sector Maxwell action,
$\delta_A S_{\mathrm{EM}}=(\mu_0c)^{-1}\int(\nabla_aF^{ab})\alpha_b
\mathrm{vol}_g$ and the matter variation is
$c^{-1}\int j^b\alpha_b\,\mathrm{vol}_g$; their sum is stationary for all
admissible local compact one-form variations exactly when
$\nabla_aF^{ab}=-\mu_0j^b$.

[F3] [[lem-emg-einstein-action-variation]]: for the stated compact interior
metric variations, stationarity of the Einstein–Hilbert, Maxwell, and selected
matter terms is equivalent to
$G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$.

[F4] [[lem-emg-circle-connection-gluing]]: on the fixed principal $U(1)$
bundle, normalized local connection representatives $a_i$ give physical local
potentials $A_i=\kappa_0a_i$ and a global physical curvature
$F|_{U_i}=dA_i=\kappa_0da_i$, with $dF=0$. Differences of connections in
this fixed sector are global base one-forms; for a compact physical-potential
variation $\alpha$, $\delta F=d\alpha$.

[A1] Variations are compactly supported in the interior, or vanish on a
neighbourhood of any physical boundary; the fixed bundle sector is held fixed.

[A2] The compact-integration suppliers use the indexed countable-choice
convention [[def-countable-choice]]: every sequence of nonempty sets has a
choice function. No full Axiom of Choice is used.

## Proof

**Proof technique:** evaluate the independent first variations, then use their
pointwise stationarity equivalences.

1.1 By [F1], the connection variation of the total action is the sum of the
Maxwell variation and the selected matter variation in [F2]. Their displayed
integrals combine to
$\delta_A S_{\mathrm{tot}}=(\mu_0c)^{-1}\int_M
(\nabla_aF^{ab}+\mu_0j^b)\alpha_b\,\mathrm{vol}_g$. The local bump argument
and its converse are exactly the conditional equivalence in [F2], so
stationarity for every admissible $\alpha$ is equivalent to the sourced
Maxwell equation in the Statement. [A1, A2, F1, F2, algebra]

1.2 Apply [F3] to the metric part of [F1]. For every admissible compact
symmetric inverse-metric variation, its first variation vanishes exactly when
$G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$ pointwise.
The Maxwell tensor in [F3] is the tensor from the metric variation at fixed
lower $F_{ab}$; it is not an independently guessed source. [A1, A2, F1, F3]

1.3 By the adopted stationarity clause in [F1], the matter-field variations
vanish exactly under the condition
$\delta_\Psi S_m[\zeta]=0$ for every allowed compactly supported $\zeta$.
This records the equations of the chosen functional without inventing a
matter equation for an unspecified $S_m$. [F1, given]

2.1 The three variation classes are independent. If the total action is
stationary for all of them, steps 1.1, 1.2, and 1.3 give each displayed
condition. Conversely, if all three conditions hold, each corresponding first
variation vanishes by those steps, and their sum is the first variation of
$S_{\mathrm{tot}}$; hence it vanishes for every allowed total variation.
Finally, [F4] gives $dF=0$ for every connection curvature in this model.
No existence of a stationary configuration is used. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, algebra] ∎

