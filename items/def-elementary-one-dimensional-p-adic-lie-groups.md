---
id: def-elementary-one-dimensional-p-adic-lie-groups
kind: definition
title: Elementary types of one-dimensional $p$-adic Lie groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-p-elementary-and-p-hyperelementary-finite-groups
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §11.1, definitions of finite and one-dimensional elementary groups, printed p. 28.
verification: {}
---

## Definition

Fix a prime $p$ and a finite extension $F/\mathbb Q_p$. For a prime $q$, a finite group $E$ is $F$-$q$-elementary if $E=C_n\rtimes Q$, where $q\nmid n$, $C_n$ is cyclic, $Q$ is a finite $q$-group, and the image of the action $Q\to\operatorname{Aut}(C_n)$ lies in $\operatorname{Gal}(F(\mu_n)/F)$; here $\mu_n$ is the group of $n$th roots of unity. The group $E$ is $F$-elementary if it is $F$-$q$-elementary for some prime $q$. A finite group is $q$-elementary if it is $C_n\times Q$ with $q\nmid n$, $C_n$ cyclic, and $Q$ a finite $q$-group; it is elementary if it is $q$-elementary for some $q$. These finite notions agree with the corresponding source definitions.

Let $G$ be a one-dimensional admissible $p$-adic Lie group and let $\Gamma_0\cong\mathbb Z_p$ be an open central subgroup. The group $G$ is $F$-$q$-elementary if $G/\Gamma_0$ is a finite $F$-$q$-elementary group, and $F$-elementary if it is $F$-$q$-elementary for some prime $q$. It is $q$-elementary if $G/\Gamma_0$ is a finite $q$-elementary group, and elementary if it is $q$-elementary for some prime $q$. For $U\le G$ open and $N\triangleleft U$ finite with $\Gamma_0\le U$, the quotient $U/N$ is called $q$-elementary relative to the image of $\Gamma_0$ when $(U/N)/(\Gamma_0N/N)$ is finite $q$-elementary. The image $\Gamma_0N/N$ is isomorphic to $\Gamma_0$ because $\Gamma_0$ is torsion-free and $N$ is finite.

## Definition references

[[def-admissible-one-dimensional-p-adic-lie-extension]]

[[def-p-elementary-and-p-hyperelementary-finite-groups]]

[Johnston and Nickel, §11.1](https://arxiv.org/pdf/2010.03186)
