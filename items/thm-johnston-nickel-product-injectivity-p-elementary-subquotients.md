---
id: thm-johnston-nickel-product-injectivity-p-elementary-subquotients
kind: theorem
title: Product Injectivity over p-Elementary Subquotients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-iwasawa-algebra-of-profinite-group
  - lem-finite-by-zp-profinite-group-splits
  - def-elementary-one-dimensional-p-adic-lie-groups
  - lem-abelian-sylow-elementary-subquotients-are-abelian
  - def-relative-algebraic-k0-group
  - thm-relative-k-theory-localization-sequence
  - def-algebraic-k0-and-k1-of-a-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 11.5 and proof, printed pp. 29–33.
verification: {}
---

## Statement

Let $p$ be odd, let $G$ be an admissible one-dimensional $p$-adic Lie group, and choose an open central subgroup $\Gamma_0\cong\mathbb Z_p$ as supplied by the finite-by-$\mathbb Z_p$ splitting. Let $\mathcal E_p$ consist of the subquotients $U/N$ with $\Gamma_0\le U\le G$, $N$ finite and normal in $U$, and $(U/N)/(\Gamma_0N/N)$ a finite group $C_m\times P$ with $C_m$ cyclic of order prime to $p$ and $P$ a finite $p$-group. For a profinite group $X$, put $\Lambda(X)=\mathbb Z_p[[X]]$ and let $Q(X)$ be its total quotient algebra. The first maps below are induced by the restriction/transfer functors for $U\le G$ followed by the quotient functor for $U\to U/N$; the relative $K_0$ maps use the same functors. Then the product of maps
$$\zeta(Q(G))^\times/\operatorname{nr}(K_1(\Lambda(G)))\longrightarrow\prod_{H\in\mathcal E_p}\zeta(Q(H))^\times/\operatorname{nr}(K_1(\Lambda(H))).$$
If in addition $\operatorname{SK}_1(Q(G)):=\ker(\operatorname{nr}:K_1(Q(G))\to\zeta(Q(G))^\times)$ is zero, then the induced product map
$$K_0(\Lambda(G),Q(G))\longrightarrow\prod_{H\in\mathcal E_p}K_0(\Lambda(H),Q(H))$$
is also injective.

## Statement references

[Johnston and Nickel, Theorem 11.5](https://arxiv.org/pdf/2010.03186)

[[lem-finite-by-zp-profinite-group-splits]]

[[def-elementary-one-dimensional-p-adic-lie-groups]]

## Proof status

The conditional reduction below records the source route. A local proof of the Frobenius-module and induction steps in §11.3 has not been supplied, so this item cannot yet be used as a proved supplier.

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement.

[F1] The relative boundary and forgetful maps form the exact relative $K$-theory sequence under the stated ring map. [[thm-relative-k-theory-localization-sequence]]

[F2] The elementary-subquotient convention is the finite quotient by the chosen central $\mathbb Z_p$ subgroup. [[def-elementary-one-dimensional-p-adic-lie-groups]] [[lem-finite-by-zp-profinite-group-splits]]

[A1] Johnston–Nickel's proof uses Frobenius-module functoriality for $K_1$ and relative $K_0$, scalar-extension injectivity, and Witt–Bermann/Brauer induction to detect the identity character on elementary subquotients. These arguments have not been reconstructed in local supplier items. [[def-algebraic-k0-and-k1-of-a-ring]]

## Proof

**Given:** The hypotheses in the Statement and the conditional group-theoretic input [A1].

1.1 The source proof first identifies the quotient of central units by reduced norms with the relevant relative $K_0$ quotient when $\operatorname{SK}_1$ vanishes, using the relative localization sequence [F1]. Thus the second injectivity assertion reduces to the first together with the stated $\operatorname{SK}_1$ hypothesis. [F1, given, algebra]

1.2 By [A1], restriction to scalar extensions and the product over elementary subquotients detects every character component: Witt–Bermann induction expresses the trivial character as a finite integral combination of characters induced from elementary subquotients. The Frobenius-module identities then force an element in the kernel of the product map to be trivial. This step is not proved by the current local carriers, so the theorem remains escalated. [A1, step 1.1]

2.1 Conditional on [A1], the first map is injective; with $\operatorname{SK}_1(Q(G))=0$, step 1.1 gives the second. This proves the stated implication, but the missing local induction and functoriality proofs prevent an unconditional proof of the Statement. [A1, F1, step 1.1, step 1.2] ∎
