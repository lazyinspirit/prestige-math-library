---
id: ex-minimal-generators-local-ring
kind: example
title: "The ideal (x,y) in k[x,y]_(x,y) has two minimal generators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-localisation-at-a-prime-ideal, thm-localisation-at-a-prime-is-local, cor-residue-field-of-a-localisation-at-a-prime]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 13.44"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field, let $R=k[x,y]_{(x,y)}$ with maximal ideal $\mathfrak m=(x,y)R$, and let $M=\mathfrak m$. Then $x$ and $y$ form a minimal generating set of $M$, so $M$ needs exactly two generators.

## Facts & Assumptions

**Given:** A field $k$, the local ring $R=k[x,y]_{(x,y)}$, its maximal ideal $\mathfrak m=(x,y)R$, and the module $M=\mathfrak m$.

[L1] Because $k$ is a field, the ideal $(x,y)\subseteq k[x,y]$ is prime, so the localisation $k[x,y]_{(x,y)}$ is local with residue field $k$ ([[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]], [[cor-residue-field-of-a-localisation-at-a-prime]]).

## Verification

**Proof technique:** direct.

1.1 In $M/\mathfrak mM=\mathfrak m/\mathfrak m^2$, the classes of $x$ and $y$ are nonzero and linearly independent over the residue field $k$, because every element of $\mathfrak m^2$ has total degree at least $2$. [L1, algebra]

1.2 Those same classes span $\mathfrak m/\mathfrak m^2$, since every element of $\mathfrak m$ has image given by its linear part $ax+by$ modulo $\mathfrak m^2$. [L1, algebra]

2.1 By definition, $\mathfrak m=(x,y)R$, so $x$ and $y$ generate $M$. If a single element generated $M$, then its image would generate $M/\mathfrak mM$, contradicting steps 1.1 and 1.2. Hence $\{x,y\}$ is a minimal generating set of $\mathfrak m$. [L1, step 1.1, step 1.2] ∎
