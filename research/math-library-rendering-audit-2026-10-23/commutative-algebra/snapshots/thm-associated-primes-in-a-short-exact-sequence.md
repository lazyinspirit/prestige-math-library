---
id: thm-associated-primes-in-a-short-exact-sequence
kind: theorem
title: "Associated primes in a short exact sequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-associated-primes-exact-sequence-left-inclusion, lem-associated-primes-exact-sequence-right-bound]
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
$$ 0 \longrightarrow M' \longrightarrow M \longrightarrow M'' \longrightarrow 0 $$
is a short exact sequence of left $R$-modules, then
$$ \operatorname{Ass}_R(M')\subseteq \operatorname{Ass}_R(M)\subseteq \operatorname{Ass}_R(M')\cup \operatorname{Ass}_R(M''). $$
In particular,
$$ \operatorname{Ass}_R(M' \oplus M'')=\operatorname{Ass}_R(M')\cup \operatorname{Ass}_R(M''). $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a short exact sequence $0 \to M' \to M \to M'' \to 0$ of left $R$-modules.

[L1] In a short exact sequence, associated primes of the left term lie in those of the middle term ([[lem-associated-primes-exact-sequence-left-inclusion]]).

[L2] In a short exact sequence, associated primes of the middle term lie in those of the outer terms ([[lem-associated-primes-exact-sequence-right-bound]]).

## Proof

**Proof technique:** direct.

1.1 Facts [L1] and [L2] give $$ \operatorname{Ass}_R(M')\subseteq \operatorname{Ass}_R(M)\subseteq \operatorname{Ass}_R(M')\cup \operatorname{Ass}_R(M''). $$ [L1, L2]

2.1 Apply step 1.1 to the split exact sequence $$ 0 \longrightarrow M' \longrightarrow M' \oplus M'' \longrightarrow M'' \longrightarrow 0. $$ This gives $\operatorname{Ass}_R(M' \oplus M'')\subseteq \operatorname{Ass}_R(M')\cup\operatorname{Ass}_R(M'')$. The reverse inclusion follows by applying the left inclusion of step 1.1 to the two canonical injections $M' \hookrightarrow M' \oplus M''$ and $M'' \hookrightarrow M' \oplus M''$. [step 1.1]

3.1 Steps 1.1 and 2.1 prove the theorem and its direct-sum corollary. [step 1.1, step 2.1] ∎
