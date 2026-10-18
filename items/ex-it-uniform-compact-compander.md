---
id: ex-it-uniform-compact-compander
kind: example
title: Uniform density gives exact midpoint compander distortion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-compact-one-dimensional-compander
  - thm-it-compact-compander-high-rate-distortion
justified_by: []
aliases: []
axiom_use: No choice principle is used.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–120, uniform cells and squared-error distortion.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.7, printed pp. 73–75, uniform scalar quantization; the exact compact compander integral is computed locally.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §IV-A, printed pp. 2344–2345, midpoint cells and the scalar high-rate coefficient.
---

## Example

Take the uniform source density $f(x)=1$ and point density $g(x)=1$ on $[0,1]$. For every integer $N\ge1$, the compander uses $N$ equal cells and their midpoints as reproduction values.

## Facts & Assumptions

**Given:** The interval $[0,1]$, densities $f=g=1$, and the compander definition of [[def-it-compact-one-dimensional-compander]].

[F1] [[def-it-compact-one-dimensional-compander]]: the cells are bounded by $\phi(j/N)$ and the reproduction values are $\phi((j-\tfrac12)/N)$, where $\phi$ is the inverse cumulative coordinate.

[F2] [[thm-it-compact-compander-high-rate-distortion]]: the limit coefficient is $\frac1{12}\int_0^1 f(x)/g(x)^2\,dx$ under the positive normalized $C^1$ hypotheses.

## Verification

1.1 Here $G_g(x)=x$ and $\phi(u)=u$, so cell $j$ is $[(j-1)/N,j/N)$ (with the final endpoint included) and its reproduction value is $(j-\tfrac12)/N$ by [F1]. [given, F1, algebra]

2.1 Put $h=1/N$. On each cell, translation to its midpoint gives $\int_{(j-1)/N}^{j/N}(x-(j-\tfrac12)/N)^2\,dx=\int_{-h/2}^{h/2}t^2\,dt=h^3/12$. Summing the $N$ equal cell integrals yields $D_N(1,1)=1/(12N^2)$, including $N=1$. [given, step 1.1, algebra]

3.1 Therefore $N^2D_N(1,1)=1/12$ for every $N$, while [F2] gives the same limit coefficient $(1/12)\int_0^1 1\,dx=1/12$. [F2, step 2.1, algebra] ∎
