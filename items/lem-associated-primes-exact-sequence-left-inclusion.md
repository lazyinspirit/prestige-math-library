---
id: lem-associated-primes-exact-sequence-left-inclusion
kind: lemma
title: "Associated primes of a submodule lie in those of the ambient module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-associated-prime-equivalent-cyclic-embedding, def-exact-and-short-exact-sequences-of-modules]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.5)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.3"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

If
$$
0 \longrightarrow M' \longrightarrow M \longrightarrow M'' \longrightarrow 0
$$
is a short exact sequence of left $R$-modules, then
$$
\operatorname{Ass}_R(M')\subseteq \operatorname{Ass}_R(M).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a short exact sequence $0 \to M' \to M \to M'' \to 0$ of left $R$-modules.

[L1] A prime $\mathfrak p$ is associated to a module exactly when $R/\mathfrak p$ embeds in that module ([[lem-associated-prime-equivalent-cyclic-embedding]]).

[L2] In a short exact sequence, the left map is injective ([[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p \in \operatorname{Ass}_R(M')$. By [L1], there is an embedding $R/\mathfrak p \hookrightarrow M'$. Composing with the injective map $M' \hookrightarrow M$ from [L2] gives an embedding $R/\mathfrak p \hookrightarrow M$. [L1, L2]

2.1 Applying [L1] again, the embedding from step 1.1 shows that $\mathfrak p \in \operatorname{Ass}_R(M)$. Therefore $\operatorname{Ass}_R(M')\subseteq \operatorname{Ass}_R(M)$. [L1, step 1.1] ∎
