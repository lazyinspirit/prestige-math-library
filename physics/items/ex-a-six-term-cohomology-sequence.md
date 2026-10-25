---
id: ex-a-six-term-cohomology-sequence
kind: example
title: "A six-term cohomology sequence"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-long-exact-sequence-in-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Example

Fix a nonzero integer $m$. Let $A^\bullet$ be the cochain complex with
$A^1=\mathbb Z$ and all other terms zero, let $C^\bullet$ have $C^0=\mathbb Z$
and all other terms zero, and let $B^\bullet$ have $B^0=B^1=\mathbb Z$ with
$d_B^0=\times m$. Then
$$0\to A^\bullet\to B^\bullet\to C^\bullet\to0$$
is the short exact sequence whose component $A^1\to B^1$ and component
$B^0\to C^0$ are the identity and whose other components are zero. Its
associated long exact cohomology sequence collapses to
$$0\to H^0(A)\to H^0(B)\to H^0(C)\xrightarrow{\partial^0}H^1(A)\to H^1(B)\to H^1(C)\to0,$$
where $\partial^0$ is multiplication by $m$.

## Facts & Assumptions

**Given:** A nonzero integer $m$ and the componentwise maps specified in the Example.

[L1] Short exact sequences of cochain complexes have long exact cohomology sequences ([[thm-long-exact-sequence-in-cohomology]]).

## Verification

**Proof technique:** direct.

1.1 The three complexes have cohomology only in degrees $0$ and $1$, and the only nontrivial differential is $d_B^0=\times m$. By [L1], there is a long exact cohomology sequence. The groups immediately before $H^0(A)$ and after $H^1(C)$ are zero, so this long exact sequence collapses to the six displayed terms. [L1, given, algebra]

2.1 Here $H^0(C)=\mathbb Z$ and $H^1(A)=\mathbb Z$. The connecting map sends $1\in C^0$ to the class of $m\in A^1$, so $\partial^0$ is multiplication by $m$. This exhibits the boundary as a degree-raising map. [L1, step 1.1, algebra] ∎
