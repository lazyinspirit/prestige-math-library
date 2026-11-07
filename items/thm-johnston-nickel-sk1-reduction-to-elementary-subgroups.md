---
id: thm-johnston-nickel-sk1-reduction-to-elementary-subgroups
kind: theorem
title: Reduction of $SK_1$ to $\mathbb Q_p$-p-elementary subgroups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-elementary-one-dimensional-p-adic-lie-groups
  - lem-finite-by-zp-profinite-group-splits
  - def-iwasawa-algebra-of-profinite-group
  - def-algebraic-k0-and-k1-of-a-ring
  - def-noncommutative-maximal-fitting-invariant
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Proposition 11.2 and proof, printed p. 28; citing Ritter–Weiss, Toward equivariant Iwasawa theory IV, Corollary on p. 167.
verification: {}
---

## Statement

Let $p$ be odd and let $G$ be an admissible one-dimensional $p$-adic Lie group. For a profinite group $X$, let $\Lambda(X)=\mathbb Z_p[[X]]$ and let $Q(X)$ be its total quotient algebra obtained by inverting the central regular elements. Write $\operatorname{nr}_X:K_1(Q(X))\to\zeta(Q(X))^\times$ for the reduced norm and $SK_1(Q(X))=\ker(\operatorname{nr}_X)$. If $SK_1(Q(H))=0$ for every open $\mathbb Q_p$-p-elementary subgroup $H$ of $G$, then $SK_1(Q(G))=0$.

## Theorem references

[Johnston and Nickel, Proposition 11.2](https://arxiv.org/pdf/2010.03186)

## Proof status

Johnston–Nickel reduce this assertion to the Ritter–Weiss restriction theorem. The local proof of that restriction theorem is not supplied in the active library, so this established result remains an authoring obligation and is not used as an accepted supplier.
