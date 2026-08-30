---
id: def-liouville-function
kind: definition
title: "Liouville's function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Definition 23.3.4"
      url: "https://math.gordon.edu/ntic/ntic2017/section-new-funcs.html"
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Definition

For $n\ge1$, list its distinct prime divisors as $p_0,\ldots,p_{r-1}$ and put
$e_i:=v_{p_i}(n)\ge1$. Its canonical prime factorization is

$$
n=\prod_{i<r} p_i^{e_i}.
$$

The **Liouville function** is

$$
\lambda(n):=(-1)^{e_0+\cdots+e_{r-1}}.
$$

For $n=1$ the exponent sum is empty, so $\lambda(1)=1$.

## Remarks

- [[thm-canonical-prime-factorisation]] makes the positive exponent attached to
  each prime divisor unique. Reordering the distinct prime divisors does not
  change their sum, so the parity of $e_0+\cdots+e_{r-1}$ is well defined.
