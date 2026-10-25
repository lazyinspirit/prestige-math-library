---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-two-canonical-maps-with-different-underlying-braids.json
  precheck: pass
id: ex-two-canonical-maps-with-different-underlying-braids
kind: example
title: "Two canonical maps with different underlying braids do not agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree, def-the-braid-category]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.2.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

In the braid category, the two canonical endomorphisms of $1\otimes1\otimes1$
represented by $\sigma_1\sigma_2$ and $\sigma_2\sigma_1$ are different.

## Facts & Assumptions

**Given:** Braided coherence and the braid category.

[L1] Two canonical braided composites agree in every braided monoidal category exactly when their underlying braids agree ([[cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree]]).

[L2] The braid category realizes the braid group on three strands as the endomorphisms of the object $3=1\otimes1\otimes1$ ([[def-the-braid-category]]).

## Verification

**Proof technique:** direct.

1.1 The two displayed composites have underlying braids $\sigma_1\sigma_2$ and $\sigma_2\sigma_1$ in $B_3$. [given, L2, algebra]

2.1 These braids are not equal: their images in $S_3$ are $(1\,2\,3)$ and $(1\,3\,2)$, which are distinct permutations. [step 1.1, algebra]

3.1 Therefore [L1] implies that the two canonical composites do not agree. In particular, they are distinct endomorphisms of the object $3$ in the braid category from [L2]. [L1, L2, step 2.1] ∎

## Remarks

The paired diagrams show the two endomorphisms of $3=1\otimes1\otimes1$.
Read from top to bottom, with the rightmost factor applied first. At each
positive crossing $\sigma_i$, the strand in position $i$ passes over the
strand in position $i+1$, as in the standard block crossing of [L2]. A gap
marks the underpassing strand. The numbers label endpoint positions, not
different objects; every strand carries the object $1$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.9pt]
  \begin{scope}
    \node at (2,4.1) {$\sigma_1\sigma_2$};
    \node at (1,3.4) {$1$};
    \node at (2,3.4) {$2$};
    \node at (3,3.4) {$3$};
    \draw (1,3)--(1,2);
    \draw (3,3)--(2.56,2.56);
    \draw (2.44,2.44)--(2,2);
    \draw (2,3)--(3,2);
    \draw (2,2)--(1.56,1.56);
    \draw (1.44,1.44)--(1,1);
    \draw (1,2)--(2,1);
    \draw (3,2)--(3,1);
    \node at (3.65,2.5) {$\sigma_2$};
    \node at (3.65,1.5) {$\sigma_1$};
    \node at (1,0.6) {$1$};
    \node at (2,0.6) {$2$};
    \node at (3,0.6) {$3$};
    \node at (2,0) {$(1\,2\,3)$};
  \end{scope}
  \begin{scope}[xshift=5cm]
    \node at (2,4.1) {$\sigma_2\sigma_1$};
    \node at (1,3.4) {$1$};
    \node at (2,3.4) {$2$};
    \node at (3,3.4) {$3$};
    \draw (2,3)--(1.56,2.56);
    \draw (1.44,2.44)--(1,2);
    \draw (1,3)--(2,2);
    \draw (3,3)--(3,2);
    \draw (1,2)--(1,1);
    \draw (3,2)--(2.56,1.56);
    \draw (2.44,1.44)--(2,1);
    \draw (2,2)--(3,1);
    \node at (3.65,2.5) {$\sigma_1$};
    \node at (3.65,1.5) {$\sigma_2$};
    \node at (1,0.6) {$1$};
    \node at (2,0.6) {$2$};
    \node at (3,0.6) {$3$};
    \node at (2,0) {$(1\,3\,2)$};
  \end{scope}
\end{tikzpicture}
```

Tracing each top endpoint to its bottom position gives $1\mapsto2\mapsto3\mapsto1$
in the left panel and $1\mapsto3\mapsto2\mapsto1$ in the right panel.
These distinct permutations explain the inequality in step 2.1; the rigorous
verification above is independent of the illustration.
