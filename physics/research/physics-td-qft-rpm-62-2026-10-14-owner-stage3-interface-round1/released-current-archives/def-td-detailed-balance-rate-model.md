---
id: def-td-detailed-balance-rate-model
kind: definition
title: "Finite detailed-balance rate and transition models"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Finite-state, time-homogeneous continuous-time rate models and their reversible discrete transition-kernel analogue; the definition does not assert that a physical system follows either model."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 6.1 on finite-state master equations, rates, and probability currents."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Detailed Balance"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Detailed%20Balance.pdf"
      locator: "Complete 11-page lecture PDF; finite rate matrices and detailed-balance examples."
---

## Definition

A finite rate model consists of a finite nonempty state set $S$ and rates $q_{ij}\ge0$ in seconds$^{-1}$ for $i\ne j$. Set $q_{ii}=-\sum_{j\ne i}q_{ij}$. A row probability vector is $p=(p_i)_{i\in S}$ with $p_i\ge0$ and $\sum_i p_i=1$; write $\Delta(S)=\{p\in[0,1]^S:\sum_i p_i=1\}$. A time-dependent law is a coordinatewise continuously differentiable map $p:[0,\infty)\to\Delta(S)$, with a right derivative at $t=0$, that satisfies the continuous-time master equation $\dot p_i(t)=\sum_{j\ne i}[p_j(t)q_{ji}-p_i(t)q_{ij}]$ for every $t\ge0$. A strictly positive normalized vector $\pi$ is a detailed-balance law when $\pi_iq_{ij}=\pi_jq_{ji}$ for every distinct pair. Its undirected rate graph has an edge $\{i,j\}$ exactly when $\pi_iq_{ij}>0$; detailed balance makes this equivalent to $\pi_jq_{ji}>0$.

On a finite nonempty state set $S$, a discrete transition kernel is a matrix $K:S\times S\to[0,1]$ satisfying $\sum_{j\in S}K(i,j)=1$ for every $i\in S$. For a strictly positive row probability vector $\pi\in\Delta(S)$, the kernel satisfies $\pi$-detailed balance when $\pi_iK(i,j)=\pi_jK(j,i)$ for every $i,j\in S$. This identity pairs the supports of forward and reversed transitions. A rate model or a reversible kernel is a mathematical/physical model class; no observed trajectory is asserted by the definition.
