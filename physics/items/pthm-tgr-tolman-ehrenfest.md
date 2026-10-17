---
id: pthm-tgr-tolman-ehrenfest
kind: physics-theorem
title: Conditional Tolman–Ehrenfest relation
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-stationary-equilibrium
  - lem-tgr-killing-thermal-normalization
dependency_roles:
  post-tgr-stationary-equilibrium: physical-assumption
  lem-tgr-killing-thermal-normalization: mathematical-premise
physical_scope: "Conditional redshift law for the local proper temperature of one selected connected stationary bath; no claim that arbitrary stationary flows or geometries are in equilibrium."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Francesco Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §§4–6"
      url: "https://arxiv.org/pdf/1606.06605"
      locator: "Full 13-page PDF; proper temperature and the Killing condition for global equilibrium, PDF pp. 4–7."
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–IV"
      url: "https://arxiv.org/pdf/1807.02915"
      locator: "Full 7-page PDF; the static Tolman relation and the need to specify the selected Killing flow, PDF pp. 3–4."
---

## Statement

Use the connected stationary thermal carrier of [[post-tgr-stationary-equilibrium]] on $O$. Let $N_\xi=\sqrt{-g(\xi,\xi)}>0$, $u=\xi/N_\xi$, and $\beta=u/(k_BT)$ as there, and assume the postulated Killing condition on $\beta$. Then a positive constant $T_K$ exists such that

$N_\xi(x)T(x)=T_K\quad\text{and}\quad \beta=\frac{\xi}{k_BT_K}\qquad(x\in O).$

In the same convention, $\xi(N_\xi)=0$, the observer acceleration satisfies $a=\nabla\log N_\xi$, the expansion and shear vanish, and

$\nabla\log T=-a.$

For any chosen reference event $x_{\rm ref}\in O$, $T_K=N_\xi(x_{\rm ref})T(x_{\rm ref})$. If the reference normalization has $N_\xi(x_{\rm ref})=1$, then $T_K$ is the local temperature at that event. Rescaling $\xi$ by a constant $b>0$ rescales $N_\xi$ and $T_K$ by $b$ while leaving the local scalar $T$ unchanged. The result is a conditional deduction from the selected physical postulate and the stated mathematical supplier; it is not a thermometer law for arbitrary observers or a KMS-existence theorem.

## Facts & Assumptions

**Given:** A connected open Lorentzian domain, a smooth future timelike Killing field $\xi$, a smooth positive proper-temperature scalar $T$, the observer $u=\xi/N_\xi$, and the adopted condition that $\beta=u/(k_BT)$ is Killing.

[A1] [[post-tgr-stationary-equilibrium]] adopts the selected comoving bath and the Killing condition on its inverse-temperature vector $\beta$. It does not assert that every geometry or material has such a bath.

[F1] [[lem-tgr-killing-thermal-normalization]]: for the exact connected stationary carrier and smooth fields above, $\beta$ is Killing if and only if $N_\xi T=T_K$ for one positive constant $T_K$. Under this condition, $\beta=\xi/(k_BT_K)$, $\xi(N_\xi)=0$, $a=\nabla\log N_\xi$, and $\theta=\sigma_{ab}=0$. Its current status is draft with a current Step 1 ready record; that record is authoring readiness only, not independent proof approval.

## Proof
**Proof technique:** Apply the exact field-normalization lemma to the adopted stationary carrier, then evaluate its constant at the supplied reference.

1.1 By [A1], $O$ is connected, $\xi$ is future timelike Killing, $T$ is smooth and strictly positive, and $\beta=u/(k_BT)$ is Killing. These are the carrier and field hypotheses in [F1]. [given, A1, F1]

2.1 Apply the forward implication of [F1] to the fields from step 1.1. It gives a positive constant $T_K$ on all of $O$ with $N_\xi T=T_K$ and $\beta=\xi/(k_BT_K)$, along with $\xi(N_\xi)=0$, $a=\nabla\log N_\xi$, and zero expansion and shear. Since $T=T_K/N_\xi$ and both fields are smooth and positive, differentiating its logarithm gives $\nabla\log T=-\nabla\log N_\xi=-a$. [F1, step 1.1, algebra]

3.1 Evaluating the constant identity of step 2.1 at any supplied $x_{\rm ref}$ yields $T_K=N_\xi(x_{\rm ref})T(x_{\rm ref})$. If $N_\xi(x_{\rm ref})=1$, this is the reference local temperature. Under $\xi\mapsto b\xi$, $N_\xi\mapsto bN_\xi$ and therefore $T_K\mapsto bT_K$; the formula $T=T_K/N_\xi$ leaves $T$ unchanged. [step 2.1, algebra] ∎

## Remarks

The mathematical supplier is a conditional local field argument. The cited treatments provide independent context; none supplies an empirical observation or proves that a selected bath describes every material.
