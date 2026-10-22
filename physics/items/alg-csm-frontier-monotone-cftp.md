---
id: alg-csm-frontier-monotone-cftp
kind: algorithm
title: Monotone coupling from the past for finite ferromagnetic Ising weights
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - alg-csm-frontier-heat-bath-update
dependency_roles:
  alg-csm-frontier-heat-bath-update: mathematical-premise
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the iid seed stream is a stated sampling input and all state spaces are finite.
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 25, §§25.1–25.2, printed pp. 347–354 (PDF pp. 363–369): monotone Ising heat-bath updates, shared past randomness, doubling, and runtime caveats."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Input a finite nonempty set $V$, a set $E\subseteq[V]^2$ of unordered pairs of distinct sites, finite dimensionless couplings $K_e\geq0$, finite dimensionless fields $h_i\in\mathbb R$, and a two-sided iid stream $(I_s,U_s)_{s\in\mathbb Z}$ in which $I_s$ is uniform on $V$, $U_s$ is uniform on $[0,1]$, and all these variables are mutually independent. On $\Omega=\{-1,+1\}^V$, define $\sigma\leq\tau$ by $\sigma_i\leq\tau_i$ for every $i\in V$, using $-1<+1$; its least and greatest elements are $\mathbf{-}$ and $\mathbf{+}$. For the finite-spin heat-bath update, use the total sampling order $+1\prec-1$, which is distinct from $\leq$. Define the strictly positive finite weight
$$w(\sigma)=\exp\!\left(\sum_{\{i,j\}\in E}K_{\{i,j\}}\sigma_i\sigma_j+\sum_{i\in V}h_i\sigma_i\right).$$
At time $s$, let $F_s:\Omega\to\Omega$ be the one-site finite-spin heat-bath update at site $I_s$ with uniform value $U_s$, leaving every other spin unchanged; explicitly, site $i$ is set to $+1$ exactly when
$$U_s<\frac{\exp(H_i(\eta))}{\exp(H_i(\eta))+\exp(-H_i(\eta))},\qquad H_i(\eta)=h_i+\sum_{\{i,j\}\in E}K_{\{i,j\}}\eta_j,$$
where $\eta$ is the exterior configuration at $i$, and otherwise is set to $-1$. For $T=1,2,4,\ldots$, initialize lower and upper configurations at time $-T$ to $\mathbf{-}$ and $\mathbf{+}$, respectively, and apply in chronological order the same stored maps $F_{-T+1},\ldots,F_0$ to both. If their time-zero outputs agree, return that common configuration. Otherwise double $T$ and replay all maps in the enlarged interval, reusing the already stored maps at every overlapping time. This is a random procedure; no finite running-time bound is part of its definition.

## Definition references

[[alg-csm-frontier-heat-bath-update]]

## Remarks

The order-preserving update is part of the specified coupling. Replacing a previously stored seed when a horizon is doubled changes the procedure. Termination and exactness are proved separately.
