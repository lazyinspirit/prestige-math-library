---
id: fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups
kind: false-statement
title: "FALSE: the Frattini subgroup is the union of the maximal subgroups"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-frattini-subgroup-of-an-elementary-abelian-p-group, def-frattini-subgroup-of-a-finite-group, def-maximal-subgroup-of-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

**False claim.** For a finite group $G$, the Frattini subgroup $\Phi(G)$ is the union of all maximal proper subgroups of $G$.

## Facts & Assumptions

**Given:** The elementary abelian group $E=(\mathbb Z/2)^2$.

[L1] For every prime $p$ and $n\in\mathbb N$, $\Phi((\mathbb Z/p)^n)=1$ and the generator rank is $n$ ([[ex-frattini-subgroup-of-an-elementary-abelian-p-group]]).

[F1] The Frattini subgroup is the intersection of the maximal proper subgroups ([[def-frattini-subgroup-of-a-finite-group]], [[def-maximal-subgroup-of-a-group]]).

## Refutation

**Proof technique:** direct.

1.1 Every nonzero vector of $E$ spans one of the three order-two subgroups $\langle(1,0)\rangle$, $\langle(0,1)\rangle$, and $\langle(1,1)\rangle$. Each has index two and is maximal. [given, L1, algebra]

2.1 Their union is all of $E$, while their intersection is $\{(0,0)\}$, which is $\Phi(E)$ by [L1] and [F1]. Since $E$ is nontrivial, the union is not the Frattini subgroup. [step 1.1, L1, F1, algebra] ∎
