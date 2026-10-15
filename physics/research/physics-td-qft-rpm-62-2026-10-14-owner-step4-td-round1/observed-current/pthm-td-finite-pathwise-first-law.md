---
id: pthm-td-finite-pathwise-first-law
kind: physics-theorem
title: "Pathwise energy balance for a finite driven protocol"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: [def-td-driven-finite-path-model]
dependency_roles:
  def-td-driven-finite-path-model: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact energy bookkeeping identity for every path of the stated finite-state, finite-stage model; it is not a claim that all heat or work processes are represented by this model."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 2.3.1 on the first law along stochastic trajectories."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; definition of work during a driven protocol."
---

## Statement

For every path $\omega=(i_0,\ldots,i_m)$ of [[def-td-driven-finite-path-model]], the endpoint energy change is $E_m(i_m)-E_0(i_0)=W(\omega)+Q_{\mathrm{in}}(\omega)$, with the stated sign convention.

## Facts & Assumptions

**Given:** A nonempty finite state set, finite stage energies, a finite path, work positive into the system, and heat positive into the system, exactly as defined in [[def-td-driven-finite-path-model]].

[F1] [[def-td-driven-finite-path-model]]: at stage $k$, add and subtract the pre-transition energy $E_k(i_{k-1})$ between endpoint energies.

## Proof

**Given:** [F1].

1.1 Insert the intermediate energies and telescope: $E_m(i_m)-E_0(i_0)=\sum_{k=1}^m[E_k(i_k)-E_{k-1}(i_{k-1})]$. [given, F1, algebra]

2.1 For each $k$, split the summand as $E_k(i_{k-1})-E_{k-1}(i_{k-1})+E_k(i_k)-E_k(i_{k-1})$. Summing the first terms gives $W(\omega)$ and the second terms give $Q_{\mathrm{in}}(\omega)$. [given, F1, step 1.1, algebra] ∎
