---
id: cor-noetherian-local-domain-dimension-zero-iff-field
kind: corollary
title: "A Noetherian local domain has dimension zero exactly when it is a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-krull-dimension-of-a-ring, def-local-ring, def-prime-and-maximal-ideals, def-zero-divisor-and-integral-domain, thm-local-ring-unit-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be a Noetherian local domain. Then $\dim R=0$ if and only if $R$ is a field.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Noetherian local domain $(R,\mathfrak m)$.

[L1] A local ring has a unique maximal ideal $\mathfrak m$ ([[def-local-ring]]).

[L2] In a domain the zero ideal is prime ([[def-zero-divisor-and-integral-domain]], [[def-prime-and-maximal-ideals]]).

[L3] Krull dimension is the supremum of lengths of strict prime chains ([[def-krull-dimension-of-a-ring]]).

[L4] Under the assumed Choice, an element outside the unique maximal ideal of a local ring is a unit ([[thm-local-ring-unit-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\dim R=0$. By [L2], the chain $(0)\subseteq\mathfrak m$ is a prime chain. If it were strict, [L3] would give $\dim R\ge1$, contradiction. Hence $\mathfrak m=(0)$, so every nonzero element is outside the maximal ideal and is a unit by the AC-qualified [L4]. Thus $R$ is a field. [L1, L2, L3, L4, given]

1.2 Conversely, if $R$ is a field, its unique maximal ideal is $(0)$. Therefore the only prime ideal is $(0)$, and [L3] gives $\dim R=0$. [L1, L3, given]

2.1 So a Noetherian local domain has dimension zero exactly when it is a field. [step 1.1, step 1.2] ∎
