---
id: thm-deck-group-as-normalizer-quotient
kind: theorem
title: '$\operatorname{Deck}(E/B)\cong N_G(H)/H$ for a connected covering'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-deck-transformations-correspond-to-normalizer-cosets,
       def-normalizer-of-a-subgroup,
       lem-centralizers-and-normalizers-are-subgroups,
       def-normal-subgroup, def-quotient-group,
       thm-first-isomorphism-theorem-groups]
justified_by: []
aliases: []
landmark: true
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
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.39(b)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $p:(E,e_0)\to(B,b_0)$ be a connected covering of a path-connected locally path-connected base. Put $G=\pi_1(B,b_0)$ and $H=p_*\pi_1(E,e_0)$. Then

$$\operatorname{Deck}(E/B)\cong N_G(H)/H.$$

## Facts & Assumptions

**Given:** The covering and subgroups $H\le N_G(H)\le G$ in the Statement.

[L1] There is a surjective homomorphism $\Theta:N_G(H)\to\operatorname{Deck}(E/B)$ with kernel $H$ ([[lem-deck-transformations-correspond-to-normalizer-cosets]]).

[F1] The first isomorphism theorem gives $K/\ker f\cong\operatorname{im}f$ for a group homomorphism $f:K\to L$ ([[thm-first-isomorphism-theorem-groups]]).

[F2] An element of $N_G(H)$ conjugates $H$ to itself ([[def-normalizer-of-a-subgroup]]).

[F3] The normalizer $N_G(H)$ is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

## Proof

**Proof technique:** direct.

1.1 Use [L1] to take the surjective homomorphism $\Theta:N_G(H)\to\operatorname{Deck}(E/B)$. [L1]

1.2 By [F3], $N_G(H)$ is a group. By [F2], $nHn^{-1}=H$ for every $n\in N_G(H)$, so $H\trianglelefteq N_G(H)$ and the quotient $N_G(H)/H$ is defined. By [L1], $\ker\Theta=H$. [L1, F2, F3]

2.1 Applying [F1] to $\Theta$ gives $$N_G(H)/H=N_G(H)/\ker\Theta\cong\operatorname{im}\Theta=\operatorname{Deck}(E/B).$$ [step 1.1, step 1.2, F1] ∎
