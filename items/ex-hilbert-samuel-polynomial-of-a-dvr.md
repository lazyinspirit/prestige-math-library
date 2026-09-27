---
id: ex-hilbert-samuel-polynomial-of-a-dvr
kind: example
title: "A DVR has Hilbert-Samuel polynomial $n+1$ and multiplicity one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dvr-ideal-and-module-length, def-hilbert-samuel-multiplicity]
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §§21 and 23"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, discrete valuation rings"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Let $(V,(\pi))$ be a discrete valuation ring. Then
$$ \chi_{(\pi),V}(n)=\ell_V(V/(\pi^{n+1}))=n+1 $$
for every $n\ge0$. Hence the Hilbert-Samuel polynomial is exactly $n+1$, and
the Hilbert-Samuel multiplicity is
$$ e_{(\pi)}(V)=1. $$

## Facts & Assumptions

**Given:** A discrete valuation ring $V$ with maximal ideal $(\pi)$.

[L1] The quotient $V/(\pi^{n+1})$ has length $n+1$ for every $n\ge0$ ([[thm-dvr-ideal-and-module-length]]).

[L2] When the Hilbert-Samuel function is explicitly polynomial, multiplicity is its factorial-scaled leading coefficient ([[def-hilbert-samuel-multiplicity]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], the Hilbert-Samuel function is $ \chi_{(\pi),V}(n)=\ell_V(V/(\pi^{n+1}))=n+1 $ for every $n\ge0$. [L1, given]


1.2 Therefore the eventual polynomial is already exactly $P(n)=n+1$. Its degree is $1$ and its leading coefficient is $1$, so [L2] gives $ e_{(\pi)}(V)=1!\cdot1=1. $ [L2]


2.1 This computes both the Hilbert-Samuel polynomial and the multiplicity of a DVR. [algebra] ∎
