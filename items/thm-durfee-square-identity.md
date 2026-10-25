---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-durfee-square-identity.json
  precheck: pass
id: thm-durfee-square-identity
kind: theorem
title: "Durfee-square decomposition of the partition series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square,
       cor-partitions-with-at-most-k-parts-equal-parts-at-most-k,
       cor-integer-partitions-have-euler-product,
       prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: decomposition
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

In $\mathbb{Z}\llbracket x\rrbracket$,

$$\sum_{n \ge 0} p(n)x^n=\sum_{k \ge 0}\frac{x^{k^2}}{\prod_{i=1}^{k}(1-x^i)^2},$$

where the empty product at $k=0$ is $1$.

## Facts & Assumptions

**Given:** partitions written by Ferrers diagrams.

[L1] Two formal series are equal exactly when their coefficients agree ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L2] Partitions with at most $k$ parts are equinumerous with partitions whose parts are all at most $k$ ([[cor-partitions-with-at-most-k-parts-equal-parts-at-most-k]]).

## Proof

**Proof technique:** decomposition.

1.1 Let $\lambda$ be a partition with Durfee length $k$. Removing its $k\times k$ Durfee square leaves two pieces: a right-hand piece $\alpha$ consisting of the cells to the right of the square, and a lower piece $\beta$ consisting of the cells below the square. The piece $\alpha$ has at most $k$ rows, while each row of $\beta$ has length at most $k$. Conversely, given $k$, a partition $\alpha$ with at most $k$ parts, and a partition $\beta$ with all parts at most $k$, one reconstructs $\lambda$ uniquely by adjoining $\alpha$ to the right side and $\beta$ below the square. [construct]

2.1 For fixed $k$, the square contributes the factor $x^{k^2}$. By [L2], the right-hand piece $\alpha$ has the same generating function as partitions with parts at most $k$, namely $\prod_{i=1}^{k}(1-x^i)^{-1}$; the lower piece $\beta$ has the same generating function for the same direct multiplicity reason. Thus partitions whose Durfee square has size $k$ contribute $x^{k^2}/\prod_{i=1}^{k}(1-x^i)^2$. [step 1.1, L2]

3.1 Every partition has exactly one Durfee length, so summing the contributions of step 2.1 over all $k \ge 0$ counts every partition exactly once. Therefore the coefficient of $x^n$ on the right is $p(n)$ for every $n \ge 0$, and [L1] gives the displayed identity. [step 2.1, L1] ∎

## Remarks

For $\lambda=(6,5,3,2,1)$, the upper-left square has side $k=3$ (blue), the right-hand partition is $\alpha=(3,2)$ (orange), and the lower partition is $\beta=(2,1)$ (green). The right-hand piece has at most three rows, and every lower row has length at most three, as in step 1.1.

```tikz
\begin{tikzpicture}[x=0.65cm,y=0.65cm]
  \fill[blue!20] (0,0) rectangle (3,-3);
  \fill[orange!35] (3,0) rectangle (6,-1);
  \fill[orange!35] (3,-1) rectangle (5,-2);
  \fill[green!25] (0,-3) rectangle (2,-4);
  \fill[green!25] (0,-4) rectangle (1,-5);
  \foreach \r/\n in {0/6,1/5,2/3,3/2,4/1} {
    \foreach \c in {1,...,\n} {
      \draw (\c-1,-\r) rectangle (\c,-\r-1);
    }
  }
  \draw[very thick,blue!65!black] (0,0) rectangle (3,-3);
  \node[anchor=east] at (-0.3,-1.5) {$k=3$};
  \node[anchor=west] at (6.4,-0.7) {$\alpha=(3,2)$};
  \draw[->] (6.2,-0.7) -- (5.2,-0.7);
  \node[anchor=west] at (3,-4) {$\beta=(2,1)$};
  \draw[->] (2.8,-4) -- (1.5,-3.6);
\end{tikzpicture}
```

The cell counts give $|\lambda|=17=3^2+|\alpha|+|\beta|=9+5+3$, so this example has weight $x^{17}=x^9x^5x^3$. In general, step 2.1 sums the weights of the two restricted partitions independently, giving the two factors $\prod_{i=1}^{k}(1-x^i)^{-1}$ alongside $x^{k^2}$. The proof above is independent of the illustration.
