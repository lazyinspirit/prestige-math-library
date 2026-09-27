---
id: lem-affine-domain-chain-dimension-formula-step
kind: lemma
title: "Transcendence degrees along affine prime quotients add correctly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-dimension-formula-for-affine-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\subseteq\mathfrak q$ be prime ideals of $A$. Then
$$ \operatorname{ht}(\mathfrak q/\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak q)=\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p). $$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a field $k$, a finite-type $k$-domain $A$, and prime ideals $\mathfrak p\subseteq\mathfrak q$.

[L1] Under Choice, the affine-domain dimension formula applies to the quotient domain $A/\mathfrak p$ and the prime $\mathfrak q/\mathfrak p$ ([[thm-dimension-formula-for-affine-domains]]).

## Proof

**Proof technique:** direct.

1.1 The quotient $A/\mathfrak p$ is a finite-type $k$-domain, and $\mathfrak q/\mathfrak p$ is a prime ideal of it. Applying [L1] to that quotient domain gives $\operatorname{ht}_{A/\mathfrak p}(\mathfrak q/\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak q)=\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)$. [L1, given]

2.1 This is exactly the displayed identity. [step 1.1] ∎
