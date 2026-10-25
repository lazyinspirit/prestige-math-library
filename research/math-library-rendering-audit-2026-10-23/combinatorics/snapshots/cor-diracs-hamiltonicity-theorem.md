---
id: cor-diracs-hamiltonicity-theorem
kind: corollary
title: "Dirac's theorem: every $n$-vertex graph with $n\\ge3$ and $\\delta(G)\\ge n/2$ is Hamiltonian"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-dirac-condition-implies-ore-condition, thm-ores-hamiltonicity-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

Every finite simple graph $G$ on $n\ge3$ vertices with
$\delta(G)\ge n/2$ is Hamiltonian.

## Facts & Assumptions

**Given:** An $n$-vertex graph $G$ with $n\ge3$ and $\delta(G)\ge n/2$.

[L1] Dirac's minimum-degree hypothesis implies Ore's degree-sum condition ([[lem-dirac-condition-implies-ore-condition]]).

[L2] Ore's degree-sum condition on an $n$-vertex graph with $n\ge3$ implies Hamiltonicity ([[thm-ores-hamiltonicity-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every nonadjacent pair $u,v$ satisfies $\deg(u)+\deg(v)\ge n$. [given, L1]

2.1 Since $n\ge3$, [L2] applies and shows that $G$ is Hamiltonian. [step 1.1, L2] ∎
