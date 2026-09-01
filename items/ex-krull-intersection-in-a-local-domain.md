---
id: ex-krull-intersection-in-a-local-domain
kind: example
title: "In a Noetherian local domain, the intersection of the powers of the maximal ideal is zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-krull-intersection-theorem]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Theorem 3.16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local domain. Then
$$
\bigcap_{n\ge0}\mathfrak m^n=0.
$$

## Facts & Assumptions

**Given:** The Axiom of Choice and a Noetherian local domain $(R,\mathfrak m)$.

[L1] The Krull intersection theorem says that for a finite module $M$,
$$
\bigcap_{n\ge0}\mathfrak m^nM=0
$$
when $\mathfrak m\subseteq J(R)$ ([[thm-krull-intersection-theorem]]).

## Verification

**Proof technique:** direct.


1.1 View $R$ as a finite module over itself. Since $(R,\mathfrak m)$ is local, its maximal ideal lies in the Jacobson radical. Therefore [L1] applies with $M=R$ and gives $ \bigcap_{n\ge0}\mathfrak m^n=0. $ [L1, given]


2.1 This is the promised local-domain instance of Krull intersection. [algebra] ∎
