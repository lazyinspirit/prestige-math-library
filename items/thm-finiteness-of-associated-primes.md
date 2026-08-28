---
id: thm-finiteness-of-associated-primes
kind: theorem
title: "Finite modules over Noetherian rings have finitely many associated primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-associated-primes-in-a-short-exact-sequence, thm-prime-filtration-of-a-finite-module]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (17.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.5"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated
left $R$-module. Then $\operatorname{Ass}_R(M)$ is a finite set.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a finitely generated left $R$-module $M$.

[L1] The module $M$ admits a prime filtration
$0=M_0\subset M_1\subset\cdots\subset M_n=M$ with $M_i/M_{i-1}\cong R/\mathfrak p_i$
([[thm-prime-filtration-of-a-finite-module]]).

[L2] In a short exact sequence, associated primes of the middle term are contained in the union of those of the outer terms ([[thm-associated-primes-in-a-short-exact-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Choose a prime filtration as in [L1]. If $n=0$, then $M=0$ and $\operatorname{Ass}_R(M)=\varnothing$, which is finite. [L1, given]

1.2 Assume $n\ge 1$. Applying [L2] to $$ 0 \longrightarrow M_{n-1} \longrightarrow M \longrightarrow M/M_{n-1} \longrightarrow 0 $$ gives $$ \operatorname{Ass}_R(M)\subseteq \operatorname{Ass}_R(M_{n-1})\cup \operatorname{Ass}_R(M/M_{n-1}). $$ Since $M/M_{n-1}\cong R/\mathfrak p_n$, the class of $1+\mathfrak p_n$ has annihilator $\mathfrak p_n$, so $\operatorname{Ass}_R(M/M_{n-1})=\{\mathfrak p_n\}$. Repeating this argument down the filtration yields $$ \operatorname{Ass}_R(M)\subseteq \{\mathfrak p_1,\dots,\mathfrak p_n\}. $$ [L1, L2, algebra]

2.1 The right-hand side of step 1.2 is finite, so $\operatorname{Ass}_R(M)$ is finite. [step 1.1, step 1.2] ∎
