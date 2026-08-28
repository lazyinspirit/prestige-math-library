---
id: cor-support-is-union-of-closures-of-associated-primes
kind: corollary
title: "The support is the union of the closures of the associated primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-support-primes-are-associated, thm-support-and-annihilator-of-a-finite-module, thm-prime-filtration-of-a-finite-module, thm-support-in-a-short-exact-sequence, lem-support-of-a-cyclic-module-is-its-vanishing-set, lem-associated-primes-contained-in-support]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Proposition 10.63.6"
      url: "https://stacks.math.columbia.edu/tag/02CE"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated
left $R$-module. Then
$$
\operatorname{Supp}_R(M)=\bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}V(\mathfrak p).
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a finitely generated left $R$-module $M$.

[L1] Minimal primes in the support of $M$ are associated primes of $M$ ([[thm-minimal-support-primes-are-associated]]).

[L2] For a finitely generated module, $\operatorname{Supp}_R(M)=V(\operatorname{Ann}_R(M))$ ([[thm-support-and-annihilator-of-a-finite-module]]).

[L3] The module $M$ admits a prime filtration, and support is the union of the supports of its prime-filtration quotients ([[thm-prime-filtration-of-a-finite-module]], [[thm-support-in-a-short-exact-sequence]], [[lem-support-of-a-cyclic-module-is-its-vanishing-set]]).

[L4] Every associated prime lies in the support ([[lem-associated-primes-contained-in-support]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], write $$ \operatorname{Supp}_R(M)=V(\mathfrak p_1)\cup\cdots\cup V(\mathfrak p_n) $$ for the prime ideals $\mathfrak p_i$ occurring in a prime filtration of $M$. Let $\mathfrak q \in \operatorname{Supp}_R(M)$. Then $\mathfrak p_i \subseteq \mathfrak q$ for some $i$. Choose such an index $i$ with $\mathfrak p_i$ minimal under inclusion among the filtration primes contained in $\mathfrak q$. If $\mathfrak r \in \operatorname{Supp}_R(M)$ and $\mathfrak r \subseteq \mathfrak p_i$, then [L3] gives some $\mathfrak p_j \subseteq \mathfrak r \subseteq \mathfrak p_i$, so the minimal choice of $\mathfrak p_i$ forces $\mathfrak p_j=\mathfrak p_i$ and hence $\mathfrak r=\mathfrak p_i$. Therefore $\mathfrak p_i$ is minimal in the support, so [L1] gives $\mathfrak p_i \in \operatorname{Ass}_R(M)$ and $\mathfrak q \in V(\mathfrak p_i)$. This proves $\operatorname{Supp}_R(M)\subseteq \bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}V(\mathfrak p)$. [L1, L3, choose, algebra]

1.2 Conversely, let $\mathfrak p \in \operatorname{Ass}_R(M)$ and let $\mathfrak q \supseteq \mathfrak p$. By [L4], the prime $\mathfrak p$ lies in the support; then [L2] gives $\operatorname{Ann}_R(M)\subseteq \mathfrak p \subseteq \mathfrak q$, so $\mathfrak q \in \operatorname{Supp}_R(M)$. Thus $V(\mathfrak p)\subseteq \operatorname{Supp}_R(M)$ for every $\mathfrak p \in \operatorname{Ass}_R(M)$. [L2, L4, algebra]

2.1 Steps 1.1 and 1.2 prove the support decomposition. [step 1.1, step 1.2] ∎
