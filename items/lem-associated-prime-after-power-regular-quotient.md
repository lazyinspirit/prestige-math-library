---
id: lem-associated-prime-after-power-regular-quotient
title: A prime minimal over an associated prime plus one element becomes associated after a power quotient
kind: lemma
status: published
origin: pipeline
deps: [def-associated-prime-of-a-module, lem-associated-prime-equivalent-cyclic-embedding, thm-artin-rees-lemma, thm-minimal-support-primes-are-associated]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $R$ be Noetherian, $M$ finite, $\mathfrak p\in\operatorname{Ass}_R(M)$,
and $x\in R$. If $\mathfrak q$ is minimal over $\mathfrak p+(x)$, then for
some $n\ge1$, $\mathfrak q\in\operatorname{Ass}_R(M/x^nM)$.

## Facts & Assumptions

**Given:** The data in the statement.

## Proof

**Proof technique:** direct.

1.1 Embed $N=R/\mathfrak p$ in $M$. Artin--Rees gives $n\ge1$ such that $N\cap x^nM\subseteq xN$. Hence $L=N/(N\cap x^nM)\subseteq M/x^nM$ has quotient $N/xN\cong R/(\mathfrak p+(x))$. [given, construct]

2.1 We have $x^nN\subseteq N\cap x^nM\subseteq xN$. Viewing $N$ as $R/\mathfrak p$, the annihilator of $L$ therefore lies between $\mathfrak p+(x^n)$ and $\mathfrak p+(x)$, so its radical is $\sqrt{\mathfrak p+(x)}$. Thus $\mathfrak q$ is minimal in $\operatorname{Supp}(L)$ and hence associated to $L$. An associated element of the submodule $L$ has the same annihilator in $M/x^nM$. [step 1.1] ∎
