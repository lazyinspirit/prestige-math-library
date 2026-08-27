---
id: ex-zero-dimensional-nonnoetherian-ring
kind: example
title: "The ring $(\\mathbb Z/2)^{\\mathbb N}$ is zero-dimensional but not Noetherian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-quotient-is-domain-iff-ideal-prime, def-krull-dimension-of-a-ring]
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
    - title: "The Stacks Project, Section 15.106: Weakly étale ring maps"
      url: "https://stacks.math.columbia.edu/tag/092A"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Example

Let
$$
R=(\mathbb Z/2)^{\mathbb N}.
$$
Then every prime ideal of $R$ is maximal, so $R$ has Krull dimension $0$, but $R$ is not Noetherian.

## Facts & Assumptions

**Given:** The ring $R=(\mathbb Z/2)^{\mathbb N}$.

## Verification

**Proof technique:** direct.

1.1 Every element $x\in R$ is idempotent, because $x^2=x$ coordinatewise in $\mathbb Z/2$. Let $\mathfrak p$ be a prime ideal of $R$. Then [[thm-quotient-is-domain-iff-ideal-prime]] makes $R/\mathfrak p$ an integral domain, and every class $\overline x\in R/\mathfrak p$ still satisfies $\overline x^2=\overline x$. So $\overline x(\overline x-1)=0$ forces $\overline x=0$ or $\overline x=1$. Thus $R/\mathfrak p$ has exactly two elements and is a field, so $\mathfrak p$ is maximal. [given, algebra]

2.1 For each $n\ge0$, let $e_n$ be the sequence with $1$ in coordinate $n$ and $0$ elsewhere, and let $I_n:=Re_0+\cdots+Re_n$. Then $I_0\subsetneq I_1\subsetneq I_2\subsetneq\cdots$ is a strict ascending chain of ideals, because $e_{n+1}\in I_{n+1}\setminus I_n$ for every $n$. Therefore $R$ is not Noetherian. [step 1.1, given, algebra]

3.1 Let $$ \mathfrak p_0=\{x\in R:x_0=0\}. $$ The first-coordinate projection $R\to\mathbb Z/2$ is a surjective ring homomorphism with kernel $\mathfrak p_0$, so $R/\mathfrak p_0\cong\mathbb Z/2$ is a field and therefore an integral domain. Thus [[thm-quotient-is-domain-iff-ideal-prime]] makes $\mathfrak p_0$ a prime ideal. By step 1.1 every prime ideal of $R$ is maximal, so no strict chain of prime ideals can have length greater than $0$. Since $\mathfrak p_0$ provides a prime ideal, chains of length $0$ do occur. Therefore [[def-krull-dimension-of-a-ring]] gives $\dim R=0$. Together with step 2.1, this ring is zero-dimensional but not Noetherian, so it is a concrete witness that the Noetherian hypothesis in the prime-maximal Artinian criterion cannot be dropped. [step 1.1, step 2.1, given, algebra] ∎
