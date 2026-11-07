---
id: thm-johnston-nickel-sk1-vanishes-for-abelian-sylow
kind: theorem
title: Vanishing of SK1 for an Abelian Sylow p-Subgroup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-elementary-one-dimensional-p-adic-lie-groups
  - lem-finite-by-zp-profinite-group-splits
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-iwasawa-algebra-of-profinite-group
  - def-algebraic-k0-and-k1-of-a-ring
  - def-noncommutative-maximal-fitting-invariant
  - thm-johnston-nickel-sk1-reduction-to-elementary-subgroups
  - lem-johnston-nickel-sk1-elementary-vanishing
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Corollary 11.3 and proof, printed p. 28.
verification: {}
---

## Statement

Let $p$ be odd and let $G$ be an admissible one-dimensional $p$-adic Lie group with an abelian Sylow pro-$p$ subgroup, meaning a maximal closed pro-$p$ subgroup whose image in every finite quotient of $G$ is a Sylow $p$-subgroup. For the total quotient algebra $Q(G)$ of $\Lambda(G)=\mathbb Z_p[[G]]$, the reduced norm
$$\operatorname{nr}:K_1(Q(G))\longrightarrow\zeta(Q(G))^\times$$
is injective; equivalently, $\operatorname{SK}_1(Q(G)):=\ker(\operatorname{nr})=0$. Here $Q(G)$ is obtained by inverting the central regular elements of $\Lambda(G)$, $\zeta(Q(G))$ is its centre, and $\operatorname{nr}$ is the componentwise reduced norm.

## Statement references

[Johnston and Nickel, Corollary 11.3](https://arxiv.org/pdf/2010.03186)

[[def-elementary-one-dimensional-p-adic-lie-groups]]

[[def-noncommutative-maximal-fitting-invariant]]

## Proof status

The source reduces this to $\mathbb Q_p$-p-elementary subgroups and cites Ritter–Weiss and Lau for the local $SK_1$ inputs. Their proofs have not been reconstructed locally; the two missing results are recorded as separate suppliers below.

## Facts & Assumptions

**Given:** $p$, $G$, and the hypotheses in the Statement.

[F1] The finite and one-dimensional $\mathbb Q_p$-p-elementary conventions are those in the local definition. [[def-elementary-one-dimensional-p-adic-lie-groups]]

[F2] The total quotient algebra, centre, and reduced-norm convention are those in the Iwasawa algebra and noncommutative Fitting definitions. [[def-iwasawa-algebra-of-profinite-group]] [[def-algebraic-k0-and-k1-of-a-ring]] [[def-noncommutative-maximal-fitting-invariant]]

[A1] Johnston–Nickel's Proposition 11.2 reduces global $SK_1$-vanishing to the open $\mathbb Q_p$-p-elementary subgroups; its Ritter–Weiss restriction proof remains locally unsupplied. [[thm-johnston-nickel-sk1-reduction-to-elementary-subgroups]]

[A2] The required vanishing on the elementary subgroups is stated by the local helper, but its Ritter–Weiss/Lau reduced-norm proof remains unsupplied. [[lem-johnston-nickel-sk1-elementary-vanishing]]

## Proof

**Given:** The hypotheses in the Statement and the conditional local inputs [A1]–[A2].

1.1 The elementary-vanishing input [A2] gives $SK_1(Q(H))=0$ for each open $\mathbb Q_p$-p-elementary subgroup $H$ of $G$. [A2, given]

1.2 Applying the reduction input [A1] to the vanishing established in step 1.1 gives $SK_1(Q(G))=0$. Both inputs remain proof obligations in the current local library, so this conditional argument does not establish the unconditional Statement. [A1, A2, step 1.1] ∎
