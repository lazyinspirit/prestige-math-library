---
id: lem-cft-fj-global-smear-gluing
kind: lemma
title: Fredenhagen–Jörß local fields glue under refinement
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-conformal-net-on-circle
  - def-cft-fredenhagen-joers-field-data
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
dependency_roles:
  def-cft-2d-conformal-net-on-circle: mathematical-premise
  def-cft-fredenhagen-joers-field-data: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sebastiano Carpi, Yasuyuki Kawahigashi, Roberto Longo, and Mihály Weiner, From Vertex Operator Algebras to Conformal Nets and Back, arXiv:1503.01260v4
      url: https://arxiv.org/pdf/1503.01260
      locator: Theorem 9.3 proof, PDF pp. 69–70; local FJ fields are summed against partitions of unity.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-fj-global-smear-gluing.md
---

## Statement

Let a conformal net and Fredenhagen–Jörß field family satisfy the definitions given earlier on this page. Fix a finite cover of $S^1$ by intervals $I_1,\ldots,I_N$ and a smooth partition of unity $\{\phi_i\}_{i=1}^N$ subordinate to that cover. For a quasi-primary $a$ and $f\in C^\infty(S^1)$, define on $H^\infty$
$$Y_\phi(a,f)b=\sum_{i=1}^N Y_{I_i}(a,\phi_i f)b.$$
If, for each $i$, the partition is refined by finitely many smooth functions $\psi_{ir}$ supported in intervals $J_{ir}\subset I_i$ with $\sum_r\psi_{ir}=1$ on $\operatorname{supp}\phi_i$, then replacing each summand by $\sum_rY_{J_{ir}}(a,\psi_{ir}\phi_i f)b$ leaves $Y_\phi(a,f)b$ unchanged for every $b\in H^\infty$. Thus the global smearing is well-defined on the stated domain and independent of such local refinements.

## Statement references

[[def-cft-2d-conformal-net-on-circle]]

[[def-cft-fredenhagen-joers-field-data]]

[[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]


## Facts & Assumptions

**Given:** A finite interval cover of $S^1$, a subordinate smooth partition $\{\phi_i\}_{i=1}^N$, refinement functions $\{\psi_{ir}\}$ as stated, a quasi-primary vector $a$, a smooth test function $f$, and $b\in H^\infty$.

[F1] The local FJ fields are linear in test functions on $H^\infty$ and compatible under interval inclusion ([[def-cft-fredenhagen-joers-field-data]]).

[F2] A subordinate smooth partition has $\operatorname{supp}\phi_i\subseteq I_i$ and $\sum_i\phi_i=1$ ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[A1] For each $i$, $\operatorname{supp}\psi_{ir}\subseteq J_{ir}\subset I_i$ and $\sum_r\psi_{ir}=1$ on $\operatorname{supp}\phi_i$. No existence of a refinement is used in the conditional statement.

## Proof

1.1 Since $\operatorname{supp}\phi_i\subset I_i$, each test function $\phi_i f$ is supported in $I_i$. By [F1], every term $Y_{I_i}(a,\phi_i f)b$ is defined on $H^\infty$; the sum is finite, so it defines a vector in $\mathcal H$ for every $b\in H^\infty$. [given, F1, F2]

1.2 For each $i,r$, the support inclusion in [A1] gives $\operatorname{supp}(\psi_{ir}\phi_i f)\subset J_{ir}\subset I_i$. By the interval compatibility in [F1],
$Y_{J_{ir}}(a,\psi_{ir}\phi_i f)b=Y_{I_i}(a,\psi_{ir}\phi_i f)b$. [given, F1, A1]

2.1 Sum the equalities in 1.2 over $r$. Linearity in [F1] and $\sum_r\psi_{ir}=1$ on $\operatorname{supp}\phi_i$ give
$$\sum_rY_{J_{ir}}(a,\psi_{ir}\phi_i f)b=Y_{I_i}\!\left(a,\sum_r\psi_{ir}\phi_i f\right)b=Y_{I_i}(a,\phi_i f)b.$$
Summing this identity over $i$ proves the stated refinement invariance on $H^\infty$. [given, F1, A1, step 1.2, algebra] ∎
