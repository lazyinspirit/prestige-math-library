---
id: def-qid-finite-density-recursion-profile
kind: definition
title: "Qid finite density recursion profile"
status: published
origin: pipeline
deps: [def-induced-copy-density-and-homogeneous-restriction-parameter, cor-cardinality-of-the-power-set]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.2, definition of beta_s"
---

## Definition

Fix a nonempty finite graph $G$, $0<\eta<1$, and an integer $s\geq0$. For real $a,b\geq0$, define
$$\beta_s(a,b)=\min\{\rho_{G[W]}(a,b):W\subseteq V(G),\ |W|\geq\eta^s|G|\}.$$
Here $\rho$ is [[def-induced-copy-density-and-homogeneous-restriction-parameter]]. The qualifying $W$ are nonempty because $\eta^s|G|>0$, and they form a finite family by [[cor-cardinality-of-the-power-set]]. The family contains $V(G)$, since $\eta^s\leq1$. Thus its minimum is attained by finite comparison, and $0<\beta_s(a,b)\leq1$.

Every qualifying induced $F$ therefore has a nonempty $T$ with $|T|\geq\beta_s(a,b)|F|$ and $e(F[T])\leq a\binom{|T|}{2}$ or $e(\overline F[T])\leq b\binom{|T|}{2}$: choose a maximizing set for $\rho_F$. Conversely any uniform fractional guarantee over these $F$ is no larger than their minimum $\rho_F$, so this finite profile equals the largest uniform guarantee. If $a\geq1$ or $b\geq1$, every full $F$ qualifies and $\beta_s(a,b)=1$. At $s=0$, the only qualifying set is $V(G)$, so $\beta_0(a,b)=\rho_G(a,b)$.

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.2, definition of beta_s.
