---
id: def-zero-and-stalk-complex
kind: definition
title: "Zero complex and stalk complex"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category,
       def-initial-terminal-and-zero-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

Fix a zero object $0$ of an abelian category
([[def-initial-terminal-and-zero-object]]).

The **zero complex** is the chain complex with $C_n=0$ for every $n$ and every
differential equal to the zero endomorphism of $0$.

For an object $A$ and an integer $n$, the **stalk complex** $S^n(A)$ is the
chain complex with
$$S^n(A)_k= \begin{cases} A,&k=n,\\ 0,&k\neq n, \end{cases}$$
and every differential zero. It is concentrated in degree $n$.
