---
id: def-parabolic-subgroups-artin-tits-normalisers
kind: definition
title: Standard parabolic subgroups and parabolic roots
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-group-presentation
  - math:def-generated-subgroup
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-artin-pure-lifts-artin-tits-normalisers: mathematical-premise
  math:def-group-presentation: mathematical-premise
  math:def-generated-subgroup: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 5, §2.3, first paragraph
      statement: For $J\subseteq\Gamma_0$, the standard parabolic subgroups are
        $W_J=\langle s_j:j\in J\rangle$ and $A_J=\langle\sigma_j:j\in J\rangle$;
        the associated roots are $\Phi_J=\{w\alpha_j:w\in W_J,j\in J\}$ and
        $\Phi_J^{\pm}=\Phi_J\cap\Phi^{\pm}$.
      hypotheses: The Coxeter-system, Artin-generator and root conventions of §2.2,
        with $J\subseteq\Gamma_0$; no spherical-type assumption is imposed in
        this paragraph.
      reading_limits: The frozen extracted article text at §§2.2–2.3 was read for
        attribution. This citation is not used as a proof or independent
        prerequisite.
dependency_level: 7
---

## Definition

Let $(W,S)$ be the Coxeter system indexed by $S=\{s_i:i\in\Gamma_0\}$, with geometric action on the simple roots $\alpha_i$, root set $\Phi$, and positive and negative root sets $\Phi^+$ and $\Phi^-$ as specified in the Coxeter-data definition. The index set may be infinite. Let $A$ be the Artin–Tits group of the same Coxeter matrix: it has generators $\sigma_i$ for $i\in\Gamma_0$ and, for each distinct $i,j$ with finite $m(s_i,s_j)$, the relation equating the two alternating words in $\sigma_i,\sigma_j$ of length $m(s_i,s_j)$, one beginning with each generator. No relation is imposed for a pair with $m(s_i,s_j)=\infty$.

For $J\subseteq\Gamma_0$, the **standard parabolic subgroup of $W$ attached to $J$** is $W_J=\langle s_j:j\in J\rangle$, and the **standard parabolic subgroup of $A$ attached to $J$** is $A_J=\langle\sigma_j:j\in J\rangle$. Here brackets denote the smallest subgroup containing the displayed elements. The associated **parabolic root set** and its positive and negative parts are $\Phi_J=\{w\alpha_j:w\in W_J,\ j\in J\}$ and $\Phi_J^{\pm}=\Phi_J\cap\Phi^{\pm}$.

## Definition references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-artin-pure-lifts-artin-tits-normalisers]]

[[math:def-group-presentation]]

[[math:def-generated-subgroup]]

## Justification

The Coxeter-data definition supplies the group, its action and the root sets. The group-presentation construction applies to the indicated set of generators and braid relations, including an infinite index set. In the finite-rank setting of [[def-artin-pure-lifts-artin-tits-normalisers]], the fixed identification of the presented Artin group with the topological Artin–Tits group carries these generators to the elements denoted $\sigma_i$ there.

For each displayed generating set, [[math:def-generated-subgroup]] gives a unique smallest subgroup; the empty generating set gives the identity subgroup. Since $W_J\subseteq W$ and each $\alpha_j$ is a root, every $w\alpha_j$ in the displayed set belongs to $\Phi$ by the definition of $\Phi$. The intersections with $\Phi^+$ and $\Phi^-$ therefore define subsets of $\Phi$. No finiteness of $W_J$, equality with a root-space intersection, or presentation of $A_J$ is asserted here.
