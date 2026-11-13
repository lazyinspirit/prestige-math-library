---
id: def-longest-elements-artin-tits-normalisers
kind: definition
title: Longest parabolic elements and opposition permutation
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - prop-positive-lift-interface-artin-tits-prerequisites
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
  prop-finite-opposition-interface-artin-tits-prerequisites: mathematical-premise
  prop-positive-lift-interface-artin-tits-prerequisites: mathematical-premise
  math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 5, Notation 2.5 and (2.6)
      statement: If $W_J$ is finite, it has a unique longest element $w_J$; its
        positive lift is $\Delta_J\in A_J$, and
        $w_J\alpha_j=-\alpha_{\iota_J(j)}$ defines a bijection $\iota_J:J\to J$.
      hypotheses: The Coxeter and Artin–Tits notation of §2.2 and $J\subseteq\Gamma_0$
        with $W_J$ finite.
      reading_limits: The frozen extracted article text at Notation 2.5 and (2.6) was
        read for attribution. This citation is not used as a proof premise.
dependency_level: 8
---

## Definition

Let $(W,S)$ be a Coxeter system with $S=\{s_i:i\in\Gamma_0\}$, length $\ell$, and simple roots $\alpha_i$ in its standard geometric representation. Let $A$ be the Artin–Tits group with generators $\sigma_i$, and for $J\subseteq\Gamma_0$ write $W_J=\langle s_j:j\in J\rangle$ and $A_J=\langle\sigma_j:j\in J\rangle$. Suppose that $W_J$ is finite.

The **longest element** $w_J$ is the unique element of $W_J$ whose $\ell$-length is maximal. Its **positive lift** is $\Delta_J=\sigma_{w_J}\in A_J$: if $w_J=s_{j_1}\cdots s_{j_r}$ is a shortest expression in simple generators, set $\sigma_{w_J}=\sigma_{j_1}\cdots\sigma_{j_r}$, with the empty product equal to the identity. The **opposition permutation** $\iota_J:J\to J$ is the unique permutation satisfying $w_J\alpha_j=-\alpha_{\iota_J(j)}$ for every $j\in J$.

## Definition references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-parabolic-subgroups-artin-tits-normalisers]]

[[prop-finite-opposition-interface-artin-tits-prerequisites]]

[[prop-positive-lift-interface-artin-tits-prerequisites]]

[[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]

## Justification

The Coxeter-data definition supplies the length and geometric action, and the parabolic-subgroup definition supplies $W_J$, $A_J$ and the Artin generators. Since distinct simple generators are distinct elements of $W_J$, finiteness of $W_J$ makes $J$ finite. The arbitrary-rank parabolic theorem identifies the Coxeter system on the restricted matrix with $W_J$ and identifies its intrinsic length with ambient length. The finite-opposition interface applied to this finite-rank system gives the unique maximum-length element and a permutation sending each simple root to its negative as displayed. Its restricted geometric action agrees with the ambient action on the span of the $\alpha_j$, by the defining reflection formulas. The simple roots are distinct basis vectors, so the displayed equations determine the permutation uniquely.

A shortest $J$-word for $w_J$ is also shortest in $W$, by length preservation, and its Artin word lies in $A_J$. To compare it with any other shortest ambient expression, choose a finite set of simple generators containing $J$ and all letters of that expression. The arbitrary-rank parabolic theorem embeds its Coxeter group in $W$ with lengths preserved. The positive-lift interface applied to this finite-rank group equates the two Artin products; its braid relations also hold in $A$. Thus $\Delta_J$ is independent of the chosen shortest expression. When $J=\varnothing$, $W_J$ and $A_J$ are trivial, $w_J=\Delta_J=1$, and $\iota_J$ is the empty permutation.
