---
id: def-associates-artin-tits-normalisers
kind: definition
title: Associates of a parabolic subset
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 5, Definition 2.7
      statement: An associate of a subset $J$ of the vertex set is a subset $I$ whose
        standard parabolic subgroup $W_I$ is conjugate to $W_J$ in $W$.
      hypotheses: A Coxeter diagram with vertex set $\Gamma_0$ and associated Coxeter
        group $W$; $I,J\subseteq\Gamma_0$.
      reading_limits: The frozen article text at Definition 2.7 was read for
        attribution. This citation is not used as a proof or independent
        prerequisite.
dependency_level: 8
---

## Definition

Let $\Gamma$ be a Coxeter diagram with vertex set $\Gamma_0$ and associated Coxeter group $W$, with simple generators $s_i$ indexed by $i\in\Gamma_0$ as in [[def-coxeter-data-artin-tits-normalisers]]. For $K\subseteq\Gamma_0$, let $W_K=\langle s_k:k\in K\rangle$ be its standard parabolic subgroup, as in [[def-parabolic-subgroups-artin-tits-normalisers]].

For $J\subseteq\Gamma_0$, an **associate** of $J$ is a subset $I\subseteq\Gamma_0$ for which $W_I$ and $W_J$ are conjugate in $W$: that is, there exists $w\in W$ such that $W_I=wW_Jw^{-1}=\{wuw^{-1}:u\in W_J\}$.

## Justification

The Coxeter-data definition supplies the group $W$ and its indexed generators. The standard parabolic definition supplies a subgroup $W_K$ for every subset $K\subseteq\Gamma_0$. For each $w\in W$, the displayed conjugate is a well-defined subset of $W$; it is a subgroup because it contains the identity and is closed under products and inverses by the group laws. Thus the existence condition defines a property of each subset $I$ of $\Gamma_0$.
