---
id: def-strong-and-weak-mixing
kind: definition
title: Strong and weak mixing on a probability space
deps: [def-measure-preserving-transformation-and-system]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Definitions 2.32 and 2.35, pp.49–50
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
---

## Definition

For a measure-preserving probability system as in [[def-measure-preserving-transformation-and-system]], put $d_n(A,B)=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$ for measurable $A,B$ and $n\ge0$. The system is **strongly mixing** if $d_n(A,B)\to0$ for every such pair. It is **weakly mixing** if
$$\frac1N\sum_{n=0}^{N-1}|d_n(A,B)|\longrightarrow0\quad(N\to\infty)$$
for every such pair. The absolute value is inside the average. In all cases $N\ge1$ and $T^0$ is the identity.
