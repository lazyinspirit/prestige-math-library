---
id: def-cochain-map
kind: definition
title: "Cochain map"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cochain-complex-in-an-abelian-category]
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
    - title: "Romyar Sharifi, Homological Algebra, §2.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Definition

Let $C^\bullet$ and $D^\bullet$ be cochain complexes. A **cochain map**
$f:C^\bullet\to D^\bullet$ is a family of morphisms
$$f^n:C^n\to D^n$$
such that
$$d_D^n\circ f^n=f^{n+1}\circ d_C^n$$
for every $n\in\mathbb Z$.

Thus the upper-index square
$$\begin{matrix} C^n&\xrightarrow{f^n}&D^n\\ d_C^n\downarrow&&\downarrow d_D^n\\ C^{n+1}&\xrightarrow{f^{n+1}}&D^{n+1} \end{matrix}$$
commutes in each degree.
