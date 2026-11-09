---
id: lem-author-e0b0bf18ed2b-omega-tower-shift
kind: lemma
title: Omega towers and the suspension index
status: published
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  lem-author-e0b0bf18ed2b-spectra-tail-invariance: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 1
---

## Statement
Let $Y=(Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $\mathcal Y$ be its corresponding object of $\mathrm{Sp}$. Put $\pi_k(\mathcal Y)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)$. For every integer $k$ and $n\geq0$ with $n+k\geq2$ there are compatible natural isomorphisms $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)\cong G_k(Y)$. The tail $(Y_{n+1})_{n\geq0}$ represents $\mathcal Y[1]$, and $\pi_k(\mathcal Y[1])\cong\pi_{k-1}(\mathcal Y)$.

## Facts & Assumptions
**Given:** $Y$, $k$ and $n$ as stated. Here $[1]$ is suspension and $[-1]$ its inverse; $\operatorname{Map}$ denotes the mapping space in $\mathrm{Sp}$.

**Goal:** Compare tower and enhanced groups and determine the suspension index.

[F1] The stable enhancement gives the tower equivalence, $\Omega^\infty(\mathcal Y[n])\simeq Y_n$, stability and the adjunction $\Sigma^\infty\dashv\Omega^\infty$, with $\mathbb S=\Sigma^\infty S^0$. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

[F2] Cofinal tails of sequential group systems have canonically isomorphic colimits. [[lem-author-e0b0bf18ed2b-spectra-tail-invariance]]

## Proof
1.1 Stability makes suspension and loops inverse. Hence $\operatorname{Map}(\mathbb S[k],\mathcal Y)\simeq\operatorname{Map}(\mathbb S,\mathcal Y[-k])\simeq\Omega^\infty(\mathcal Y[-k])$. Since $\mathcal Y[-k]\simeq\Omega^{n+k}(\mathcal Y[n])$, taking components gives $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)$. These are group isomorphisms, with the abelian group law detected in degree $n+k\geq2$. Naturality of the adjunction makes them compatible with the tower maps. [F1, given]

2.1 Each bonding map in the tower is an isomorphism on the relevant groups because $Y_n\simeq\Omega Y_{n+1}$. Therefore the colimit is canonically any sufficiently late stage group, compatibly with step 1.1. This proves $\pi_k(\mathcal Y)\cong G_k(Y)$. [F1, F2, step 1.1]

3.1 Evaluation gives $\Omega^\infty((\mathcal Y[1])[n])\simeq\Omega^\infty(\mathcal Y[n+1])\simeq Y_{n+1}$ compatibly with the loop maps, so the tail represents $\mathcal Y[1]$. Applying step 1.1 to the tail identifies its $k$th group with the $(k-1)$st group of $\mathcal Y$. This proves the suspension formula. [F1, step 1.1, step 2.1] ∎
