---
id: def-omega-two-ma-bookkeeping-iteration
kind: definition
title: The omega_2 bookkeeping iteration for MA
status: draft
origin: pipeline
deps: [def-finite-support-forcing-iteration, def-two-step-forcing-iteration, lem-finite-support-iteration-size-bound, thm-nice-name-reduction-and-counting, lem-ma-reduction-to-small-ccc-orders, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.10 and Lemmas 7.11–7.13", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

Assume ground-model GCH. At each stage choose, as part of the recursion, a coherent dense coded suborder $D_\alpha\subseteq P_\alpha$ of size at most $\aleph_2$ using [[lem-finite-support-iteration-size-bound]]. Fix a well-order of $H(\aleph_3)$ and a bookkeeping map on $\omega_2$ that repeats every relevant **canonical nice code over an earlier $D_\alpha$** cofinally often. The **$\omega_2$ MA iteration** is the finite-support iteration $\langle P_\alpha,\dot Q_\alpha,\dot1_\alpha:\alpha<\omega_2\rangle$ in which bookkeeping selects a coded candidate name for an order on a subset of $\aleph_1$. Choose a maximal antichain deciding whether that candidate is a ccc order of the required size. On each positive branch, use its top-adjoined version as in [[lem-ma-reduction-to-small-ccc-orders]]; on each negative branch, use the one-point order. Mix those branch names into the single name $\dot Q_\alpha$, including a branchwise name $\dot t_\alpha$ for its largest condition. Thus $P_\alpha$ forces that the iterand is nonempty, ccc, and has $\dot t_\alpha$ as a largest condition. A candidate already forced ccc is used, with its adjoined top, on every branch. Cohen forcing, with a top adjoined, is selected at cofinally many stages.

The local mixed top name $\dot t_\alpha$ need not lie in the prescribed set-sized carrier $R_\alpha$. Apply the AC/maximal-antichain mixing clause of [[def-two-step-forcing-iteration]] at $1_{P_\alpha}$ to choose $\dot1_\alpha\in R_\alpha$ forced equal to $\dot t_\alpha$. Recursively choose these representatives as part of the set-indexed stage data, so the all-top condition and literal top padding required by [[def-finite-support-forcing-iteration]] are defined at every stage.

The bookkeeping enumerates canonical codes, not arbitrary raw $P_\alpha$-names. Given a name which a condition forces to be a ccc order of size at most $\aleph_1$, first use ambient AC to name an isomorphic presentation on a subset of $\aleph_1$. Encode its domain and order relation as a subset of the fixed ground set $\aleph_1\times\aleph_1$. Below a coded $D_\alpha$-condition, apply [[thm-nice-name-reduction-and-counting]] using countable deciding antichains from the dense ccc suborder $D_\alpha$; this gives an equivalent nice code over $D_\alpha$. By GCH there are at most $(\aleph_2^{\aleph_0})^{\aleph_1}=\aleph_2$ such codes at each stage. The coherent coding and schedule revisit each earlier canonical code later, while the raw presentation may have unboundedly many forced-equal names. AC chooses the master well-order, deciding antichains, carrier representatives, and scheduling map. The branch mixture makes “$\dot Q_\alpha$ is ccc” forced by $P_\alpha$ rather than merely decided by some conditions; it never discards a positive branch merely because the top condition did not decide it.
