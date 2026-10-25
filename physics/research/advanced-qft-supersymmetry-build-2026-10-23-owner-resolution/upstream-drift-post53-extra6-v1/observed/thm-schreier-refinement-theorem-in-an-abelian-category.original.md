---
id: thm-schreier-refinement-theorem-in-an-abelian-category
kind: theorem
title: "Schreier refinement theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-zassenhaus-butterfly-lemma-in-an-abelian-category, def-composition-series-and-composition-factors-of-an-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Let

$$0=A_0\le A_1\le\cdots\le A_m=X,\qquad 0=B_0\le B_1\le\cdots\le B_n=X$$

be finite chains of subobjects in an abelian category. Then they admit
refinements whose successive quotient objects can be paired up up to
isomorphism.

## Facts & Assumptions

**Given:** The two finite subobject chains displayed in the statement.

[F1] A refinement is obtained by inserting intermediate subobjects, and two finite chains are equivalent when their nonzero successive quotient objects can be paired up up to isomorphism.

[L1] Each cell in the refinement grid is governed by the butterfly lemma ([[thm-zassenhaus-butterfly-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 For $0\le i<m$ and $0\le j\le n$, define $$A_{i,j}:=A_i\vee(A_{i+1}\wedge B_j).$$ Then $A_{i,0}=A_i$ and $A_{i,n}=A_{i+1}$, while $A_{i,j}\le A_{i,j+1}$ for every $j$. Concatenating the chains $$A_i=A_{i,0}\le A_{i,1}\le\cdots\le A_{i,n}=A_{i+1}$$ over $i=0,\dots,m-1$ gives a refinement of the $A$-chain. Define $$B_{j,i}:=B_j\vee(B_{j+1}\wedge A_i)$$ symmetrically; concatenating those chains refines the $B$-chain. [F1, construct]

2.1 For every cell $(i,j)$, apply [L1] to the pairs $A_i\le A_{i+1}$ and $B_j\le B_{j+1}$. It gives a canonical isomorphism $$ \frac{A_{i,j+1}}{A_{i,j}} \cong \frac{B_{j,i+1}}{B_{j,i}}. $$ So the successive quotients of the two refinements are paired by the same grid. [L1, step 1.1]

3.1 Some adjacent terms may coincide, producing zero successive quotients. By [F1], deleting those repetitions leaves equivalent refinements, and the quotient pairing from step 2.1 survives on every nonzero factor. Hence the original two chains admit equivalent refinements. [F1, step 2.1] ∎

## Remarks

For each $0\le i<m$ and $0\le j<n$, the diagram shows one interval of each refined flag and the pairing of its quotient factors. Horizontal arrows in the first two rows are subobject inclusions; the last row is the butterfly isomorphism, not an inclusion between the flags.

```tikz
\begin{tikzpicture}[x=2.5cm,y=1.2cm,>=stealth,every node/.style={font=\large}]
\node (a0) at (0,2) {$A_i$};
\node (a1) at (1,2) {$A_{i,j}$};
\node (a2) at (2,2) {$A_{i,j+1}$};
\node (a3) at (3,2) {$A_{i+1}$};
\draw[->] (a0) -- (a1);
\draw[->] (a1) -- (a2);
\draw[->] (a2) -- (a3);
\node (b0) at (0,1) {$B_j$};
\node (b1) at (1,1) {$B_{j,i}$};
\node (b2) at (2,1) {$B_{j,i+1}$};
\node (b3) at (3,1) {$B_{j+1}$};
\draw[->] (b0) -- (b1);
\draw[->] (b1) -- (b2);
\draw[->] (b2) -- (b3);
\node (qa) at (0.65,-0.3) {$\frac{A_{i,j+1}}{A_{i,j}}$};
\node (qb) at (2.35,-0.3) {$\frac{B_{j,i+1}}{B_{j,i}}$};
\draw[->] (qa) -- node[above] {$\cong$} (qb);
\end{tikzpicture}
```

Here $A_{i,j}=A_i\vee(A_{i+1}\wedge B_j)$ and $B_{j,i}=B_j\vee(B_{j+1}\wedge A_i)$, as in step 1.1. The endpoints $A_{i,0}=A_i$, $A_{i,n}=A_{i+1}$ and their $B$-analogues allow these intervals to concatenate into the two refinements. The bottom arrow is exactly the canonical isomorphism of step 2.1; if one factor is zero, its partner is zero too. Deleting repeated adjacent terms removes those zero factors. The proof above is independent of this illustration.
