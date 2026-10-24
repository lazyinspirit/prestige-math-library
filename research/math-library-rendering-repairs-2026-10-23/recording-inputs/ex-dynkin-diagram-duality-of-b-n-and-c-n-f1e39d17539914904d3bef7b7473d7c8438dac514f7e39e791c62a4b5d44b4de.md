---
id: ex-dynkin-diagram-duality-of-b-n-and-c-n
kind: example
title: Dynkin duality of $B_n$ and $C_n$
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, ex-classical-root-systems-in-euclidean-coordinates, def-cartan-matrix-of-a-based-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Example 21.18; Lecture 23, Example 23.5"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

For $n\ge2$, the $B_n$ and $C_n$ diagrams have the same underlying chain and opposite
arrows on the unique double edge; transposing the Cartan matrix exchanges
them.

## Facts & Assumptions

**Given:** An integer $n\ge2$; the simple roots of $B_n$: $\alpha_1=\varepsilon_1-\varepsilon_2,\dots,\alpha_{n-1}=\varepsilon_{n-1}-\varepsilon_n,\alpha_n=\varepsilon_n$; and of $C_n$: $\beta_1=\varepsilon_1-\varepsilon_2,\dots,\beta_{n-1}=\varepsilon_{n-1}-\varepsilon_n,\beta_n=2\varepsilon_n$.

[L1] The Cartan matrix entry is $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$, and the diagram has $a_{ij}a_{ji}$ edges with the arrow toward the shorter root ([[def-cartan-matrix-of-a-based-root-system]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L2] Coroot duality transposes the Cartan matrix, and the dual system of $B_n$ is $C_n$ ([[prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types]]).

## Verification

**Proof technique:** direct.

1.1 For $B_n$: $|\alpha_i|^{2}=2$ for $i<n$ and $|\alpha_n|^{2}=1$; $(\alpha_{n-1},\alpha_n)=-1$, so $a_{n-1,n}=2(-1)/2=-1$ and $a_{n,n-1}=2(-1)/1=-2$; all other off-diagonal entries of adjacent pairs are $-1$ and the rest vanish. Thus the diagram is a chain with a double edge at the end, the arrow being governed by $|a_{n,n-1}|=2>|a_{n-1,n}|=1$ and pointing toward the shorter root $\alpha_n$. [L1, algebra]

1.2 For $C_n$: $|\beta_i|^{2}=2$ for $i<n$ and $|\beta_n|^{2}=4$; $(\beta_{n-1},\beta_n)=-2$, so $a_{n-1,n}=2(-2)/2=-2$ and $a_{n,n-1}=2(-2)/4=-1$; the diagram is again a chain with a double edge exactly at the end, and the arrow now points toward the shorter root $\beta_{n-1}$. [L1, algebra]

2.1 The matrices of steps 1.1 and 1.2 are transposes of one another, which is exactly coroot duality by [L2]; so transposing the Cartan matrix exchanges $B_n$ and $C_n$, reversing the arrow while keeping the chain and the double-edge position. [L2, step 1.1, step 1.2, algebra] ∎


## Remarks

The paired diagrams below display the chain for $n\ge4$; the dots abbreviate
only single edges and their intervening vertices. For $n=3$, replace the dotted
portion by the single edge joining vertices $1$ and $2=n-1$. For $n=2$, retain
only the terminal pair of vertices, numbered $1=n-1$ and $2=n$. In that rank,
the two diagrams are isomorphic after interchanging the vertices, although
the displayed fixed numbering still reverses the arrow.

```tikz
\begin{tikzpicture}[scale=1.6]
\node at (-0.8,0) {$B_n$};
\node at (-0.8,-1.7) {$C_n$};
\draw (0.1,0) -- (0.85,0);
\node at (1.35,0) {$\cdots$};
\draw (1.85,0) -- (2.6,0);
\draw (2.8,0.07) -- (4.1,0.07);
\draw (2.8,-0.07) -- (4.1,-0.07);
\draw (3.35,0.24) -- (3.62,0) -- (3.35,-0.24);
\draw (0,0) circle (0.1);
\draw (2.7,0) circle (0.1);
\draw (4.2,0) circle (0.1);
\node at (0,0.45) {$\alpha_1$};
\node at (2.7,0.45) {$\alpha_{n-1}$};
\node at (4.2,0.45) {$\alpha_n$};
\node at (2.7,-0.45) {$|\alpha_{n-1}|^2=2$};
\node at (4.2,-0.45) {$|\alpha_n|^2=1$};
\draw (0.1,-1.7) -- (0.85,-1.7);
\node at (1.35,-1.7) {$\cdots$};
\draw (1.85,-1.7) -- (2.6,-1.7);
\draw (2.8,-1.63) -- (4.1,-1.63);
\draw (2.8,-1.77) -- (4.1,-1.77);
\draw (3.55,-1.46) -- (3.28,-1.7) -- (3.55,-1.94);
\draw (0,-1.7) circle (0.1);
\draw (2.7,-1.7) circle (0.1);
\draw (4.2,-1.7) circle (0.1);
\node at (0,-1.25) {$\beta_1$};
\node at (2.7,-1.25) {$\beta_{n-1}$};
\node at (4.2,-1.25) {$\beta_n$};
\node at (2.7,-2.15) {$|\beta_{n-1}|^2=2$};
\node at (4.2,-2.15) {$|\beta_n|^2=4$};
\end{tikzpicture}
```

In the row-coroot convention of [L1], the ordered terminal entries
$(a_{n-1,n},a_{n,n-1})$ are $(-1,-2)$ for $B_n$ and $(-2,-1)$ for $C_n$.
Thus the double-edge multiplicity is $2$ in both rows, while each arrow points
to the shorter root. These are exactly the calculations in steps 1.1–2.1;
the verification does not depend on the illustration.
