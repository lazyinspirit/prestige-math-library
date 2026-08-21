---
id: cor-deck-group-of-a-regular-covering
kind: corollary
title: 'A regular connected covering has deck group $\pi_1(B,b_0)/p_*\pi_1(E,e_0)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-deck-group-as-normalizer-quotient,
       thm-regular-covering-characterizations,
       def-normalizer-of-a-subgroup]
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
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.39"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $p:(E,e_0)\to(B,b_0)$ be a regular connected covering of a path-connected locally path-connected base. Put $G=\pi_1(B,b_0)$ and $H=p_*\pi_1(E,e_0)$. Then

$$\operatorname{Deck}(E/B)\cong G/H.$$

## Facts & Assumptions

**Given:** The regular connected covering and groups $G,H$ in the Statement.

[L1] For a connected covering, $\operatorname{Deck}(E/B)\cong N_G(H)/H$ ([[thm-deck-group-as-normalizer-quotient]]).

[L2] A connected covering is regular exactly when $H$ is normal in $G$ ([[thm-regular-covering-characterizations]]).

[F1] The normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$ ([[def-normalizer-of-a-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], regularity gives $H\trianglelefteq G$, so every $g\in G$ preserves $H$ under conjugation and [F1] gives $N_G(H)=G$. [L2, F1]

2.1 Substitution of $N_G(H)=G$ in [L1] yields $\operatorname{Deck}(E/B)\cong G/H$. [step 1.1, L1] ∎
