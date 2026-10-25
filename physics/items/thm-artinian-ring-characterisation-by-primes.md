---
id: thm-artinian-ring-characterisation-by-primes
kind: theorem
title: "A Noetherian ring is Artinian exactly when every prime ideal is maximal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-ring, def-noetherian-ring, thm-artinian-ring-primes-are-maximal, thm-artinian-ring-is-noetherian, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-nilradical-as-intersection-of-primes, thm-nilradical-of-a-noetherian-ring-is-nilpotent, thm-noetherian-ring-ideal-characterisations, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-quotient-is-field-iff-ideal-maximal, cor-length-is-additive-in-short-exact-sequences, thm-artinian-ring-has-finite-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 16.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (19.11)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative Noetherian ring. Then $R$ is Artinian if and only if every prime ideal of $R$ is maximal.

## Facts & Assumptions

**Given:** A commutative Noetherian ring $R$ and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 If $R$ is Artinian, then [[thm-artinian-ring-primes-are-maximal]] says that every prime ideal is maximal. The Noetherian hypothesis in the statement is then automatic from [[thm-artinian-ring-is-noetherian]]. [given, algebra]

1.2 Conversely, assume every prime ideal of $R$ is maximal. By [[thm-noetherian-ring-has-finitely-many-minimal-primes]], the minimal primes over $(0)$ are $\mathfrak p_1,\ldots,\mathfrak p_r$ for some $r\ge1$ unless $R=0$, in which case the conclusion is immediate. By hypothesis, each $\mathfrak p_i$ is maximal. Every prime ideal contains a minimal prime over $(0)$, so every prime ideal is one of the $\mathfrak p_i$. Hence [[cor-nilradical-as-intersection-of-primes]] gives $N:=\operatorname{Nil}(R)=\mathfrak p_1\cap\cdots\cap\mathfrak p_r$. Because distinct maximal ideals are comaximal, [[thm-chinese-remainder-theorem-for-comaximal-ideals]] yields $R/N\cong\prod_{i=1}^rR/\mathfrak p_i$, and each factor is a field by [[thm-quotient-is-field-iff-ideal-maximal]]. [given, cases, algebra]

2.1 By [[thm-nilradical-of-a-noetherian-ring-is-nilpotent]], choose $t\ge1$ with $N^t=0$. Since $R$ is Noetherian, [[thm-noetherian-ring-ideal-characterisations]] makes each ideal $N^j$ finitely generated, so each quotient $N^j/N^{j+1}$ is a finitely generated $R$-module. Because $N$ annihilates that quotient, it is a finitely generated $R/N$-module. Under the product decomposition of step 1.2, this means a finite product of finitely generated vector spaces over the fields $R/\mathfrak p_i$, so each quotient $N^j/N^{j+1}$ has finite length. The same is true for $R/N$ itself. Repeated use of [[cor-length-is-additive-in-short-exact-sequences]] along $0\to N^{j+1}\to N^j\to N^j/N^{j+1}\to0$ therefore shows that $R$ has finite length as a module over itself. [step 1.2, given, algebra]

3.1 By [[thm-artinian-ring-has-finite-length]], a commutative ring has finite length as a module over itself exactly when it is Artinian. So step 2.1 proves that $R$ is Artinian. Together with step 1.1, this gives the asserted equivalence. [step 1.1, step 2.1] ∎
