---
id: lem-affine-domain-chain-dimension-formula-step
kind: lemma
title: "Transcendence degrees along affine prime quotients add correctly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dimension-formula-for-affine-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
---


## Statement

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\subseteq\mathfrak q$ be prime ideals of $A$. Then
$$
\operatorname{ht}(\mathfrak q/\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak q)=\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p).
$$

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and prime ideals $\mathfrak p\subseteq\mathfrak q$.

[L1] The affine-domain dimension formula applies to the quotient domain $A/\mathfrak p$ and the prime $\mathfrak q/\mathfrak p$ ([[thm-dimension-formula-for-affine-domains]]).

## Proof

**Proof technique:** direct.

1.1 The quotient $A/\mathfrak p$ is a finite-type $k$-domain, and $\mathfrak q/\mathfrak p$ is a prime ideal of it. Applying [L1] to that quotient domain gives $\operatorname{ht}_{A/\mathfrak p}(\mathfrak q/\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak q)=\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)$. [L1, given]

2.1 This is exactly the displayed identity. [step 1.1] ∎
