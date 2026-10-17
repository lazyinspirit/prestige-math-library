---
id: pthm-emg-charged-dust-balance
kind: physics-theorem
title: "Charged-dust current and stress balance"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emg-charged-dust-model
dependency_roles:
  def-emg-charged-dust-model: formulation-prerequisite
proof_strategy: direct
physical_scope: >
  A local deduction for smooth charged-dust fields satisfying the independently
  adopted number-continuity and Lorentz-force equations. It does not construct
  dust solutions, prove avoidance of caustics, or extend to singular particles.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.2–4.5.4, PDF pp. 190–195 (printed pp. 183–188), stress and continuum-matter conventions. The dust product calculation is carried out under the local adopted closure."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147, covariant stress-balance context. No matter-action existence is assumed in this proof."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For the smooth charged-dust model of [[def-emg-charged-dust-model]], with
constant $m>0$ and $q$, current $j^a=q\nu U^a$, and stress
$T_m^{ab}=m\nu U^aU^b$, every configuration satisfying its adopted closure
obeys

$$\nabla_a j^a=0,\qquad \nabla_aT_m^{ab}=F^{bc}j_c.$$

This is a model deduction from the continuum equations, not a consequence of
the external test-particle theorem and not a claim that a smooth continuum
solution exists.

## Facts & Assumptions

**Given:** A smooth metric-compatible connection, smooth fields $\nu>0$,
$U^a$, and $F_{ab}$, constants $m>0$ and $q$, and the dust equations of
[[def-emg-charged-dust-model]].

[F1] [[def-emg-charged-dust-model]]: $j^a=q\nu U^a$,
$T_m^{ab}=m\nu U^aU^b$, $\nabla_a(\nu U^a)=0$, and
$m\nabla_UU^b=qF^b{}_cU^c$.

[A1] The fields are smooth on the open domain and the charge and mass
parameters are constant, so the covariant product rule applies without
distributional terms.

## Proof

**Proof technique:** expand the two divergences by the product rule and
substitute the adopted dust equations.

1.1 Since $q$ is constant, the product rule and [F1] give
$\nabla_a j^a=q\nabla_a(\nu U^a)=0$. [A1, F1, algebra]

2.1 Differentiate the stress tensor in [F1]:
$\nabla_aT_m^{ab}=m(\nabla_a(\nu U^a))U^b
+m\nu U^a\nabla_aU^b$. The first term is zero by number continuity, and
$U^a\nabla_aU^b=\nabla_UU^b$ by definition. [A1, F1, step 1.1, algebra]

3.1 Use the adopted force equation in [F1] in step 2.1:
$\nabla_aT_m^{ab}=q\nu F^b{}_cU^c=F^{bc}(q\nu U_c)=F^{bc}j_c$,
because $F^b{}_c=g_{ca}F^{ba}$ and $j_c=q\nu U_c$. This is the claimed
matter stress exchange. [F1, step 2.1, algebra] ∎

