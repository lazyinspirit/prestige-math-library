---
id: ex-semilocal-dedekind-domain-is-a-pid
kind: example
title: "A semilocal Dedekind domain is a PID"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chinese-remainder-theorem-for-comaximal-ideals, thm-dedekind-pid-class-group-characterisation, thm-unique-factorisation-of-ideals-in-dedekind-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice.

Let $R$ be a Dedekind domain with only finitely many maximal ideals. Then $R$
is a principal ideal domain.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Dedekind domain $R$ whose distinct maximal ideals are $\mathfrak m_1,\ldots,\mathfrak m_r$.

[L1] Every nonzero ideal of $R$ has a unique prime-power factorization ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

[L2] The Chinese remainder theorem solves simultaneous congruences modulo the pairwise comaximal powers $\mathfrak m_i^{n_i+1}$ ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[L3] A Dedekind domain is a PID exactly when its class group is trivial ([[thm-dedekind-pid-class-group-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Let $I=\prod_{i=1}^r\mathfrak m_i^{n_i}$ be a nonzero ideal by [L1]. For each $i$, choose $x_i\in\mathfrak m_i^{n_i}\setminus\mathfrak m_i^{n_i+1}$. By [L2], there exists $x\in R$ with $x\equiv x_i\pmod{\mathfrak m_i^{n_i+1}}$ for each $i$. Then $x$ has valuation exactly $n_i$ at $\mathfrak m_i$ for every $i$, and there are no other primes to consider. Hence $(x)=I$ by uniqueness in [L1]. [L1, L2, given, choose]

2.1 Every nonzero ideal of $R$ is therefore principal, so [L3] identifies $R$ as a PID. [L3, step 1.1] ∎
