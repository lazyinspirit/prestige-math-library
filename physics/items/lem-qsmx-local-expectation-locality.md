---
id: lem-qsmx-local-expectation-locality
kind: lemma
title: Contractive local expectations and their commutator bound
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsmx-local-conditional-expectation
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsmx-local-conditional-expectation: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §4.3"
      url: "https://arxiv.org/pdf/1102.0842"
---

## Statement

For every finite $X\subset\mathbb Z^d$, the map $E_X$ of the normalized-trace-expectation definition is a unital positive contraction on $\mathcal A_{\mathrm{loc}}$ and has a unique contractive extension $E_X:\mathcal A\to\mathcal A_X$. For $B\in\mathcal A_Y$, $Y$ finite,

$$\|B-E_X(B)\|\le \sum_{z\in Y\setminus X}\ \sup_{\substack{V\in\mathcal A_{\{z\}}\\V^*V=VV^*=I}} \|[B,V]\|.$$

## Statement references

[[def-qsmx-local-conditional-expectation]]

[[def-qsm-local-spin-algebras]]

## Facts & Assumptions

**Given:** $d\ge1$, a fixed finite spin dimension $q\ge1$, finite regions $X,Y\subset\mathbb Z^d$, the local algebras $\mathcal A_\Lambda$, and $B\in\mathcal A_Y$.

[F1] [[def-qsmx-local-conditional-expectation]]: $E_X$ is normalized partial trace over the factors in $Y\setminus X$, followed by identity inclusion into $X$.

[F2] [[def-qsm-local-spin-algebras]]: $\mathcal A_Y\cong\bigotimes_{z\in Y}M_q(\mathbb C)$, with the ordinary operator norm, normalized trace, and consistent factor inclusions.

## Proof

**Proof technique:** direct.

**Given:** [F1], [F2], and $B\in\mathcal A_Y$.

1.1 On $\mathbb C^q$ in the standard basis $e_j$, $0\le j<q$, define $S e_j=e_{j+1\ {\rm mod}\ q}$ and $D e_j=e^{2\pi i j/q}e_j$. The $q^2$ unitaries $S^aD^b$, $0\le a,b<q$, satisfy $q^{-2}\sum_{a,b=0}^{q-1}(S^aD^b)^*R(S^aD^b) =q^{-1}\operatorname{Tr}(R)I_q\qquad(R\in M_q(\mathbb C)).$ Indeed, averaging over $b$ cancels each off-diagonal matrix unit because its phase is a nontrivial $q$-th root sum, and averaging the surviving diagonal units over $a$ gives their arithmetic mean times $I_q$; for $q=1$ the formula is the identity. Applying this one-site twirl on each factor in $Y\setminus X$ yields the normalized partial trace of [F1]. Each twirl is an average of unitary conjugations, so it is unital, positive, and contractive. The formula is unchanged when an extra identity factor is added, since its normalized trace is $1$; hence $E_X$ is consistent on $\mathcal A_{\mathrm{loc}}$. Contractivity extends it uniquely to the completion, and its range remains in the closed finite-dimensional subalgebra $\mathcal A_X$. [given, F1, F2, algebra]

2.1 Enumerate $Y\setminus X=\{z_1,\ldots,z_k\}$ and write $E_{z_j}$ for the one-site twirl. The commuting twirls satisfy $B-E_X(B)=\sum_{j=1}^k E_{z_1}\cdots E_{z_{j-1}}\bigl(B-E_{z_j}(B)\bigr).$ For any $C\in\mathcal A_Y$, the average formula gives $\|C-E_{z_j}(C)\|\le\sup_{V_z}\|C-V_z^*CV_z\|=\sup_{V_z}\|[C,V_z]\|$, where $V_z$ ranges over the one-site unitaries. Each preceding twirl is contractive and commutes with conjugation by $V_z$, so its term in the displayed sum is at most $\sup_{V_z}\|[B,V_z]\|$. The triangle inequality and the finite sum over sites give the stated bound. [step 1.1, F1, F2, algebra] ∎
