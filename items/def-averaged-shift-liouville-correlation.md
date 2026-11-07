---
id: def-averaged-shift-liouville-correlation
kind: definition
title: "Shift-averaged Liouville correlation average"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-liouville-function
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki, Maksym Radziwiłł, and Terence Tao, An averaged form of Chowla's conjecture, Theorem 1.1"
      url: "https://arxiv.org/pdf/1503.05121v3"
    - title: "Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals, Theorem 1.5"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Definition

Let $\lambda$ be the Liouville function, so for $n\ge1$,
$\lambda(n)=(-1)^{\Omega(n)}$, where $\Omega(n)$ counts prime factors with
multiplicity. Let $k\ge1$ be an integer, and let $X\ge1$ and $H\ge1$ be real.
The **absolute shift-averaged Liouville correlation average** is
$$
\mathcal A_k(X,H):=\frac1{H^{k-1}X}\sum_{\substack{h_2,\ldots,h_k\in\mathbb Z\\1\le h_j\le H}}\left|\sum_{\substack{n\in\mathbb Z_{>0}\\1\le n\le X}}\lambda(n)\prod_{j=2}^k\lambda(n+h_j)\right|.
$$
The first shift is fixed at $0$; the other $k-1$ shifts are independently
summed over the positive integers at most $H$. For $k=1$, the shift-index
tuple is empty and contributes one term, and the empty product equals $1$.
If $H$ is an integer, the
normalization is the number $H^{k-1}$ of shift tuples times the natural
normalization $X$ of each inner sum. For noninteger $H$, the same scale
normalization $H^{k-1}X$ is retained.

## Definition references

[[def-liouville-function|Liouville function and prime-factor convention]]

[Matomäki, Radziwiłł, and Tao, Theorem 1.1, stronger form (1.3)](https://arxiv.org/pdf/1503.05121v3)

[Menon, Theorem 1.5](https://arxiv.org/pdf/2607.15574v1)
