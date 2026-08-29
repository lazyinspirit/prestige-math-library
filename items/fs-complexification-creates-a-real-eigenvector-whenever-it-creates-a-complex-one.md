---
id: fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one
kind: false-statement
title: "FALSE: complexification creates a real eigenvector whenever it creates a complex one"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-quarter-turn-diagonalises-after-complexification]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

If the complexification of a real operator acquires a complex eigenvector, then the original real operator acquires a real eigenvector.

## Facts & Assumptions

**Given:** The quarter-turn $T:\mathbb R^2\to\mathbb R^2$ with matrix $\bigl(\begin{smallmatrix}0&-1\\ 1&0\end{smallmatrix}\bigr)$ and its complexification $T_{\mathbb C}$.

[L1] The complexification $T_{\mathbb C}$ has the nonreal eigenvalues $\pm i$ with eigenvectors $(1,-i)$ and $(1,i)$, while $T$ itself has no real eigenvector ([[ex-quarter-turn-diagonalises-after-complexification]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], complexification creates a complex eigenvector: $(1,-i)$ is an eigenvector of $T_{\mathbb C}$ with eigenvalue $i$. [L1]

1.2 By [L1], $T$ has no real eigenvector: any real eigenvector $v\ne0$ would carry a real eigenvalue $\lambda$ with $\lambda^2+1=0$, which is impossible in $\mathbb R$. [L1]

2.1 Steps 1.1 and 1.2 provide a case where a complex eigenvector is created with no accompanying real eigenvector, contradicting the claimed implication. [step 1.1, step 1.2] ∎
