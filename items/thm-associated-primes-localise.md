---
id: thm-associated-primes-localise
kind: theorem
title: "Associated primes commute with localization for finite modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-associated-prime-localises-forward, lem-associated-prime-localises-reverse-finite]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.16"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let $S \subseteq R$ be multiplicative. Then
$$
\operatorname{Ass}_{S^{-1}R}(S^{-1}M)=\{S^{-1}\mathfrak p : \mathfrak p \in \operatorname{Ass}_R(M),\ \mathfrak p \cap S=\varnothing\}.
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a multiplicative subset $S \subseteq R$.

[L1] Associated primes of $M$ disjoint from $S$ localize to associated primes of $S^{-1}M$ ([[lem-associated-prime-localises-forward]]).

[L2] Every associated prime of $S^{-1}M$ is the localization of an associated prime of $M$ disjoint from $S$ ([[lem-associated-prime-localises-reverse-finite]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak p \in \operatorname{Ass}_R(M)$ and $\mathfrak p \cap S=\varnothing$, then [L1] gives $S^{-1}\mathfrak p \in \operatorname{Ass}_{S^{-1}R}(S^{-1}M)$. [L1]

1.2 Conversely, if $\mathfrak q \in \operatorname{Ass}_{S^{-1}R}(S^{-1}M)$, then [L2] produces $\mathfrak p \in \operatorname{Ass}_R(M)$ with $\mathfrak p \cap S=\varnothing$ and $\mathfrak q=S^{-1}\mathfrak p$. [L2]

2.1 Steps 1.1 and 1.2 prove the stated equality of associated-prime sets. [step 1.1, step 1.2] ∎
