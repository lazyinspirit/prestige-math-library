---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-potts-q-two-three-four-open-chain.json
  precheck: pass
id: ex-potts-q-two-three-four-open-chain
kind: example
title: "The Q = 2, 3, 4 Potts chains use three distinct q normalizations"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-potts-open-chain-clock-shift-representation
  - lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.2–2.1.4, PDF pp. 4–6: explicit Q=2,3,4 clocks, shifts, and parameters."
---

## Statement

For $Q=2,3,4$, the loop values and corresponding parameters are respectively $(\delta,q)=(\sqrt2,e^{i\pi/4})$, $(\sqrt3,e^{i\pi/6})$, and $(2,1)$. On each site the odd generator is $\sqrt Q|+\rangle\langle+|$; on adjacent sites the even generator is $\sqrt Q\sum_{a=0}^{Q-1}|aa\rangle\langle aa|$. For $L$ Potts sites the open Hamiltonian contains exactly $L+(L-1)=2L-1$ generators.

## Facts & Assumptions

**Given:** The clock and shift matrices and the generator formulas from [[def-potts-open-chain-clock-shift-representation]].

[F1] $M_Q^Q=R_Q^Q=I$; the displayed odd and even generators use one odd term per site and one even term per neighboring pair. ([[def-potts-open-chain-clock-shift-representation]])

[F2] These generators satisfy the Temperley–Lieb square, adjacent triple and distant commutation relations at loop value $\sqrt Q$. ([[lem-potts-q2-q3-q4-matrices-satisfy-temperley-lieb]])

## Proof

**Given:** $Q\in\{2,3,4\}$ and $L\ge1$.

1.1 The geometric sum $Q^{-1}\sum_r M_Q^r$ is the rank-one projection onto $|+\rangle=Q^{-1/2}\sum_a|a\rangle$, and $Q^{-1}\sum_rR_1^rR_2^{-r}=\sum_a|aa\rangle\langle aa|$. Multiplying these projections by $\sqrt Q$ gives the stated explicit generators. From the assigned $q$ values, $q+q^{-1}=2\cos(\pi/4)=\sqrt2$, $2\cos(\pi/6)=\sqrt3$, and $2\cos0=2$. [F1, given, algebra]

2.1 There are $L$ odd indices $2j-1$ for $1\le j\le L$ and $L-1$ even indices $2j$ for $1\le j<L$. Their total is $2L-1$, with no additional term at the boundary. The relation verification is [F2], so each listed case has the declared open-chain Temperley–Lieb normalization. [F1, F2, step 1.1, algebra] ∎

## Remarks

The four-site illustration separates the site generators (above the vertices) from the bond generators (below the edges). Each vertex represents a factor $\mathbb C^Q$ of $\mathcal H_{Q,4}$, and each edge represents an adjacent pair, not a map between sites. All displayed generators are operators on the full tensor product, acting as the identity on the other factors.

```tikz
\begin{tikzpicture}[x=2.5cm,y=1.4cm,font=\Large]
\draw (0,0) -- (1,0) -- (2,0) -- (3,0);
\fill (0,0) circle (2pt);
\fill (1,0) circle (2pt);
\fill (2,0) circle (2pt);
\fill (3,0) circle (2pt);
\node[above] at (0,0.2) {$e_1$};
\node[above] at (1,0.2) {$e_3$};
\node[above] at (2,0.2) {$e_5$};
\node[above] at (3,0.2) {$e_7$};
\node[below] at (0,-0.08) {$1$};
\node[below] at (1,-0.08) {$2$};
\node[below] at (2,-0.08) {$3$};
\node[below] at (3,-0.08) {$4$};
\node[below] at (0.5,-0.55) {$e_2$};
\node[below] at (1.5,-0.55) {$e_4$};
\node[below] at (2.5,-0.55) {$e_6$};
\end{tikzpicture}
```

In general, site $j$ carries $e_{2j-1}=\sqrt Q\,|+\rangle\langle+|_j$ for $1\le j\le L$, and bond $(j,j+1)$ carries $e_{2j}=\sqrt Q\sum_{a=0}^{Q-1}|aa\rangle\langle aa|_{j,j+1}$ for $1\le j<L$. Thus there are $L$ site terms and $L-1$ bond terms; there is no bond joining site $L$ back to site $1$. For $L=1$, only $e_1$ remains. The same indexing applies to all three $(\delta,q)$ pairs in the Statement. The proof above is independent of this illustration.
