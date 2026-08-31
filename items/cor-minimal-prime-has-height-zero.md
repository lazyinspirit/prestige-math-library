---
id: cor-minimal-prime-has-height-zero
kind: corollary
title: "Minimal primes are exactly the primes of height zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-height-equals-local-dimension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---


## Statement

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then $\mathfrak p$ is minimal if and only if $\operatorname{ht}(\mathfrak p)=0$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a prime ideal $\mathfrak p\subset R$.

[L1] The height of $\mathfrak p$ is the supremum of the lengths of strict prime chains ending at $\mathfrak p$ ([[lem-height-equals-local-dimension]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak p$ is minimal, there is no strict prime ideal properly contained in $\mathfrak p$. Therefore every strict chain ending at $\mathfrak p$ has length $0$, and [L1] gives $\operatorname{ht}(\mathfrak p)=0$. [L1, given]

1.2 If $\operatorname{ht}(\mathfrak p)=0$, then [L1] says no strict chain of positive length ends at $\mathfrak p$. In particular there is no prime ideal properly contained in $\mathfrak p$, so $\mathfrak p$ is minimal. [L1, given]

2.1 The two implications prove that minimal primes are exactly the primes of height zero. [step 1.1, step 1.2] ∎
