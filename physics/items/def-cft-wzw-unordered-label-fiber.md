---
id: def-cft-wzw-unordered-label-fiber
kind: definition
title: Unordered WZW top fiber with label assignments
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-wzw-insertion-data
  - def-braid-group-from-unordered-configurations
  - def-axiom-of-choice
dependency_roles:
  def-cft-wzw-insertion-data: mathematical-premise
  def-braid-group-from-unordered-configurations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 8, §8.1, printed pp. 113–115; ordered pure braid monodromy and the label-reordering caveat.
---

## Definition

Fix $n$ WZW labels $\lambda_1,\ldots,\lambda_n$ and write $\Lambda$ for the finite set of distinct labels, with multiplicity $m_\lambda$ for $\lambda\in\Lambda$. On the ordered configuration space
$
F_n(\mathbb C)=\{(z_1,\ldots,z_n):z_i\ne z_j\ \text{for }i\ne j\},
$
an **ordered label assignment** is a map $a:\{1,\ldots,n\}\to\Lambda$ with $|a^{-1}(\lambda)|=m_\lambda$ for every $\lambda$. Its tensor fiber is $W_a=\bigotimes_{r=1}^n V_{a(r)}^*$, ordered by coordinate index. Let $W=\bigoplus_a W_a$. The symmetric group $S_n$ acts on the base by $(\pi z)_r=z_{\pi^{-1}(r)}$, sends $a$ to $\pi a$, where $(\pi a)(r)=a(\pi^{-1}r)$, and reorders tensor factors by the same permutation.

The quotient of $F_n(\mathbb C)\times W$ by this action is the **unordered WZW top bundle with label assignments** over $C_n(\mathbb C)=F_n(\mathbb C)/S_n$. Equivalently, its fiber at an unordered configuration $Q$ is the direct sum over all distinct assignments $a:Q\to\Lambda$ with the specified multiplicities of $\bigotimes_{q\in Q}V_{a(q)}^*$; the finite tensor product is identified under its canonical permutation maps. When all labels agree there is one assignment, and this construction reduces to the usual simultaneous permutation quotient with fiber $(V_\lambda^*)^{\otimes n}$.

This definition records the finite KZ top-space bundle only. It does not identify it with the full affine conformal-block sheaf.

## Facts & Assumptions

[A1] Full AC is assumed in [[def-cft-wzw-insertion-data]] to supply the admissible affine modules and their finite-dimensional tops used here.

**Given:** The finite label list and the WZW top modules of [[def-cft-wzw-insertion-data]].

[F1] [[def-cft-wzw-insertion-data]] supplies a finite-dimensional $V_\lambda$ for each label.

[F2] [[def-braid-group-from-unordered-configurations]] defines the unordered configuration space as the quotient by simultaneous permutation of ordered points.

## Proof

1.1 There are $n!/\prod_{\lambda\in\Lambda}m_\lambda!$ assignments, so $W$ is finite-dimensional. The formulas for $\pi a$ and factor reordering preserve the representation type in each slot; applying permutations $\pi,\tau$ in succession gives the same assignment and factor order as $\pi\tau$. Thus they define a group action. [A1, F1, given, algebra]

2.1 The $S_n$-action on $F_n(\mathbb C)$ is free: if $\pi z=z$, distinctness of coordinates forces $\pi$ to fix every index. Around any unordered configuration, choose pairwise disjoint small disks around its points; these disks give local orderings and hence local trivializations of the quotient bundle. On overlaps, transition maps are the factor-reordering maps in step 1.1. Therefore the quotient is a vector bundle with the stated fiber. If every label is equal, the assignment set has one element and the quotient is the usual permutation quotient. [F1, F2, step 1.1] ∎
