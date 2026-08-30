---
id: cor-meromorphic-functions-on-a-domain-form-a-field
kind: corollary
title: "Meromorphic functions on a connected plane domain form a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a connected plane domain. Then the
meromorphic functions on $\Omega$ form a field under pointwise addition and
multiplication.

## Facts & Assumptions

**Given:** A connected plane domain $\Omega$.

[L1] Every meromorphic function on $\Omega$ is a quotient $g/h$ of holomorphic
functions with $h\not\equiv0$
([[cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients]]).

## Proof

**Proof technique:** direct.

1.1 Sums and products of meromorphic functions are meromorphic by the pointwise formulas on the common holomorphic locus. [given]

2.1 Let $f$ be a nonzero meromorphic function. By [L1], write $f=g/h$ with $g,h$ holomorphic and $h\not\equiv0$. Since $\Omega$ is connected and $f\not\equiv0$, one also has $g\not\equiv0$. On the set where $g\ne0$, $1/f=h/g$, which is meromorphic; at a zero of $g$ this quotient has at worst a pole. Hence $1/f$ is meromorphic on $\Omega$. [L1, step 1.1, algebra]

3.1 Therefore every nonzero meromorphic function has a multiplicative inverse, and together with step 1.1 this makes the meromorphic functions a field. [step 1.1, step 2.1, algebra] ∎