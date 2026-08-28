---
id: lem-associated-primes-exact-sequence-right-bound
kind: lemma
title: "Associated primes of the middle term lie in those of the ends"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-and-short-exact-sequences-of-modules]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
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
\operatorname{Ass}_R(M)\subseteq \operatorname{Ass}_R(M')\cup \operatorname{Ass}_R(M'').
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a short exact sequence $0 \to M' \to M \to M'' \to 0$ of left $R$-modules.

[L1] In a short exact sequence, the image of the left map equals the kernel of the right map ([[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p \in \operatorname{Ass}_R(M)$, and choose $m \in M$ with $\operatorname{Ann}_R(m)=\mathfrak p$. If there exists $g \notin \mathfrak p$ with $gm \in M'$, then $gm \neq 0$. Also $\mathfrak p \subseteq \operatorname{Ann}_R(gm)$, and if $agm=0$ then $ag \in \mathfrak p$; since $\mathfrak p$ is prime and $g \notin \mathfrak p$, this gives $a \in \mathfrak p$. Hence $\operatorname{Ann}_R(gm)=\mathfrak p$, so $\mathfrak p \in \operatorname{Ass}_R(M')$. [given, algebra]

2.1 If no such $g$ exists, let $\bar m$ be the image of $m$ in $M''$. Then $\bar m \neq 0$, for otherwise $m \in M'$ and $g=1$ would contradict the assumption. Every $a \in \mathfrak p$ kills $m$, hence kills $\bar m$. Conversely, if $a\bar m=0$, then $am \in M'$. By the standing assumption, this forces $a \in \mathfrak p$. Therefore $\operatorname{Ann}_R(\bar m)=\mathfrak p$, so $\mathfrak p \in \operatorname{Ass}_R(M'')$. [L1, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 show that every associated prime of $M$ lies in $\operatorname{Ass}_R(M')\cup \operatorname{Ass}_R(M'')$. [step 1.1, step 2.1] ∎
