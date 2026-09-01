---
id: ex-hilbert-samuel-finite-length-case
kind: example
title: "In dimension zero the Hilbert-Samuel polynomial is constant and equals the module length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-existence-of-hilbert-samuel-polynomial]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.59: Noetherian local rings"
      url: "https://stacks.math.columbia.edu/tag/00K4"
---

## Example

Let $(R,\mathfrak m)$ be a zero-dimensional Noetherian local ring and let $M$ be
a finite $R$-module. Then some power of $\mathfrak m$ annihilates $M$, so for
all sufficiently large $n$,
$$
M/\mathfrak m^{n+1}M\cong M.
$$
Hence the Hilbert-Samuel polynomial is the constant polynomial
$$
P_{\mathfrak m,M}(n)=\ell_R(M).
$$

## Facts & Assumptions

**Given:** A zero-dimensional Noetherian local ring $(R,\mathfrak m)$ and a
finite $R$-module $M$.

[L1] The length $\ell_R(M)$ is defined for finite-length modules
([[def-composition-series-and-length-of-a-module]]).

[L2] The Hilbert-Samuel polynomial exists ([[thm-existence-of-hilbert-samuel-polynomial]]).

## Verification

**Proof technique:** direct.


1.1 In a zero-dimensional Noetherian local ring, the maximal ideal is nilpotent on every finite module, so there is $N$ with $\mathfrak m^N M=0$. Hence for every $n\ge N-1$, $ M/\mathfrak m^{n+1}M=M. $ [given, algebra]


1.2 Therefore the Hilbert-Samuel function is eventually constant equal to $\ell_R(M)$, which is defined by [L1]. So the eventual polynomial provided by [L2] is the constant polynomial $\ell_R(M)$. [L1, L2]


2.1 This is exactly the zero-dimensional case. [algebra] ∎
