---
id: ex-hilbert-samuel-finite-length-case
kind: example
title: "In dimension zero the Hilbert-Samuel polynomial is constant and equals the module length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-nilradical-of-a-noetherian-ring-is-nilpotent]
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.59: Noetherian local rings"
      url: "https://stacks.math.columbia.edu/tag/00K4"
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

Let $(R,\mathfrak m)$ be a zero-dimensional Noetherian local ring and let $M$ be
a finite $R$-module. Then some power of $\mathfrak m$ annihilates $M$, so for
all sufficiently large $n$,
$$ M/\mathfrak m^{n+1}M\cong M. $$
Hence the Hilbert-Samuel polynomial is the constant polynomial
$$ P_{\mathfrak m,M}(n)=\ell_R(M). $$

## Facts & Assumptions

**Given:** A zero-dimensional Noetherian local ring $(R,\mathfrak m)$ and a finite $R$-module $M$.

[L1] The length $\ell_R(M)$ is defined for finite-length modules ([[def-composition-series-and-length-of-a-module]]).

[L2] In a Noetherian ring the nilradical is nilpotent ([[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]).

## Verification

**Proof technique:** direct.


1.1 In a zero-dimensional local ring every prime ideal is maximal, hence the only prime is $\mathfrak m$. Its nilradical is therefore $\mathfrak m$, and [L2] gives $\mathfrak m^N=0$ for some $N\ge1$. Hence for every $n\ge N-1$, $M/\mathfrak m^{n+1}M=M$. [L2, given, algebra]


2.1 The finite module $M$ has finite length over the zero-dimensional Noetherian local ring: the filtration by powers of the nilpotent maximal ideal has finitely many quotients, each a finite-dimensional vector space over $R/\mathfrak m$. Thus $\ell_R(M)$ is defined by [L1]. Step 1.1 shows that the Hilbert-Samuel function is eventually the constant polynomial $\ell_R(M)$, uniquely so because two polynomials agreeing at all large integers are equal. [L1, step 1.1, algebra]


3.1 This is exactly the zero-dimensional case. [step 2.1] ∎
