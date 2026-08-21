---
id: cor-van-kampen-one-simply-connected-set
kind: corollary
title: "If one set in a van Kampen cover is simply connected, the other fundamental group surjects with overlap-generated kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-seifert-van-kampen, def-simply-connected,
       thm-group-pushout-as-an-amalgamated-quotient,
       def-free-product-of-a-family-of-groups, def-normal-closure,
       def-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Assume the hypotheses of [[thm-seifert-van-kampen]] and suppose that $V$ is simply connected. Let

$$k_*:\pi_1(U\cap V,x_0)\to\pi_1(U,x_0)$$

be induced by inclusion. Then $(j_U)_*:\pi_1(U,x_0)\to\pi_1(X,x_0)$ is surjective and

$$\ker (j_U)_*=\big\langle\!\big\langle\operatorname{im}k_*\big\rangle\!\big\rangle_{\pi_1(U,x_0)}.$$

## Facts & Assumptions

**Given:** The van Kampen cover in the Statement, with $V$ simply connected.

[L1] The fundamental group of $X$ is the pushout of the two inclusion-induced maps from the overlap group ([[thm-seifert-van-kampen]]).

[F1] For arbitrary homomorphisms $f:K\to G$ and $h:K\to H$, the quotient of $G*H$ by the normal closure of $j_G(f(k))j_H(h(k))^{-1}$ is their pushout ([[thm-group-pushout-as-an-amalgamated-quotient]]).

[F2] The normal closure of a subset is the smallest normal subgroup containing it ([[def-normal-closure]]).

[F3] A free product is characterized by the universal property for homomorphisms from its factors ([[def-free-product-of-a-family-of-groups]]).

[F4] A simply connected space has a one-element fundamental group at every basepoint ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 By [F4], $\pi_1(V,x_0)$ is trivial. Thus [L1] identifies $\pi_1(X,x_0)$ with the pushout of $k_*$ and the unique homomorphism from $\pi_1(U\cap V,x_0)$ to the trivial group. [L1, F4]

2.1 By [F3], the free product of $\pi_1(U,x_0)$ with the trivial group is canonically $\pi_1(U,x_0)$. Under this identification, [F1] says that the pushout in step 1.1 is $$\pi_1(U,x_0)\big/\big\langle\!\big\langle\operatorname{im}k_*\big\rangle\!\big\rangle.$$ [step 1.1, F1, F2, F3]

3.1 The canonical map from $\pi_1(U,x_0)$ to this quotient is exactly $(j_U)_*$ under [L1]. A quotient map is surjective and has the quotienting normal subgroup as its kernel, so the asserted surjectivity and kernel formula follow. [step 2.1, L1] ∎

