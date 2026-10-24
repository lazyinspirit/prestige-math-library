---
id: def-temperley-lieb-jones-wenzl-recursion
kind: definition
title: "Jones–Wenzl recursion in the nonvanishing-denominator range"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-generators-satisfy-local-relations
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2, PDF pp. 19–23: Wenzl recursion, annihilation, idempotence, and trace."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\delta\in\mathbb C$ and use the quantum integers of [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]. Define $p_0=1\in\mathrm{TL}_0$ and $p_1=1\in\mathrm{TL}_1$. If $[2]_\delta,\ldots,[n]_\delta$ are nonzero, define recursively, for $1\le r<n$,

$$P_r=p_r\otimes1\in\mathrm{TL}_{r+1},\qquad p_{r+1}=P_r-\frac{[r]_\delta}{[r+1]_\delta}P_r d_r P_r.$$

The element $p_n$ defined by this recursion is the Jones–Wenzl element in the nonvanishing-denominator range. This definition makes no assertion that failure of the displayed recursion implies nonexistence of any idempotent.


## Remarks

The picture illustrates the step $r=2$, so every panel is an endomorphism of object $3$. A box labeled $p_2$ acts on the first two strands; the rightmost strand is the identity in $P_2=p_2\otimes1$. In the second panel, the middle layer is $d_2$, whose cap and cup join positions $2$ and $3$. The upper and lower layers are both $P_2$; products are stacked with the left factor above the right factor. Boxes represent algebra elements, which may be linear combinations of matchings, rather than single basis diagrams.

```tikz
\begin{tikzpicture}[scale=0.85]
  \node at (1,3.9) {$P_2$};
  \draw (0,1.4) rectangle (1,2.2);
  \node at (0.5,1.8) {$p_2$};
  \draw (0.15,0) -- (0.15,1.4);
  \draw (0.85,0) -- (0.85,1.4);
  \draw (0.15,2.2) -- (0.15,3.5);
  \draw (0.85,2.2) -- (0.85,3.5);
  \draw (1.55,0) -- (1.55,3.5);
  \node[below] at (0.15,0) {$1$};
  \node[below] at (0.85,0) {$2$};
  \node[below] at (1.55,0) {$3$};
  \node at (5,3.9) {$P_2d_2P_2$};
  \draw (4,0.5) rectangle (5,1.1);
  \draw (4,2.4) rectangle (5,3);
  \node at (4.5,0.8) {$p_2$};
  \node at (4.5,2.7) {$p_2$};
  \draw (4.15,0) -- (4.15,0.5);
  \draw (4.85,0) -- (4.85,0.5);
  \draw (4.15,1.1) -- (4.15,2.4);
  \draw (4.85,1.1) .. controls (4.85,1.6) and (5.55,1.6) .. (5.55,1.1);
  \draw (4.85,2.4) .. controls (4.85,1.9) and (5.55,1.9) .. (5.55,2.4);
  \draw (4.15,3) -- (4.15,3.5);
  \draw (4.85,3) -- (4.85,3.5);
  \draw (5.55,0) -- (5.55,1.1);
  \draw (5.55,2.4) -- (5.55,3.5);
  \node[below] at (4.15,0) {$1$};
  \node[below] at (4.85,0) {$2$};
  \node[below] at (5.55,0) {$3$};
\end{tikzpicture}
```

For this illustrated step, the recursion reads $p_3=P_2-([2]_\delta/[3]_\delta)P_2d_2P_2$, under $[2]_\delta,[3]_\delta\ne0$. The picture only explains the tensor placement and stacking order; the algebraic definition above is independent of it.
