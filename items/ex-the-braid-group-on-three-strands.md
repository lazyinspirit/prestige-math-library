---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-braid-group-on-three-strands.json
  precheck: pass
id: ex-the-braid-group-on-three-strands
kind: example
title: "The braid group on three strands and its quotient to $S_3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-braid-group-by-the-artin-presentation, thm-the-braid-group-surjects-onto-the-symmetric-group]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Example

The three-strand braid group has presentation

$$B_3=\langle \sigma_1,\sigma_2\mid \sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\rangle,$$

and the quotient map to $S_3$ sends $\sigma_1$ to $(1\,2)$ and $\sigma_2$ to
$(2\,3)$.

## Facts & Assumptions

**Given:** The Artin presentation of braid groups and the standard quotient to the symmetric group.

[L1] The Artin presentation defines $B_n$ ([[def-braid-group-by-the-artin-presentation]]).

[L2] The map $\sigma_i\mapsto(i\ i+1)$ extends to a surjection $B_n\to S_n$ ([[thm-the-braid-group-surjects-onto-the-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 Specializing [L1] to $n=3$ leaves two generators and only one braid relation, because there is no pair $i,j$ with $|i-j|>1$ among $\{1,2\}$. This gives the displayed presentation of $B_3$. [L1, given, algebra]

2.1 Specializing [L2] to $n=3$ gives the quotient map $B_3\to S_3$ with $\sigma_1\mapsto(1\,2)$ and $\sigma_2\mapsto(2\,3)$. [L2, step 1.1] ∎

## Remarks

The following illustration reads strands from bottom to top, with positions
numbered $1,2,3$ from left to right at each boundary, as in the one-based model
of [L2]. A product is stacked with its rightmost factor at the bottom, matching
the convention that the rightmost permutation acts first. Here $\sigma_i$ is
drawn with the strand from lower position $i$ passing over the strand from
lower position $i+1$; reversing that over/under choice depicts $\sigma_i^{-1}$.

```tikz
\begin{tikzpicture}[x=1cm,y=0.9cm,line width=0.9pt]
\begin{scope}[xshift=0 cm]
  \node[below] at (1,0) {$1$};
  \node[above] at (1,3) {$1$};
  \node[below] at (2,0) {$2$};
  \node[above] at (2,3) {$2$};
  \node[below] at (3,0) {$3$};
  \node[above] at (3,3) {$3$};
  \node at (2,3.8) {$\sigma_1\sigma_2\sigma_1$};
\end{scope}
\begin{scope}[xshift=4.7 cm]
  \node[below] at (1,0) {$1$};
  \node[above] at (1,3) {$1$};
  \node[below] at (2,0) {$2$};
  \node[above] at (2,3) {$2$};
  \node[below] at (3,0) {$3$};
  \node[above] at (3,3) {$3$};
  \node at (2,3.8) {$\sigma_2\sigma_1\sigma_2$};
\end{scope}
\begin{scope}[xshift=0 cm]
  \draw (3,0)--(3,1);
  \draw (2,0)--(1,1);
  \draw[preaction={draw=white,line width=4pt}] (1,0)--(2,1);
  \node[left] at (0.8,0.5) {$\sigma_1$};
  \draw (1,1)--(1,2);
  \draw (3,1)--(2,2);
  \draw[preaction={draw=white,line width=4pt}] (2,1)--(3,2);
  \node[left] at (0.8,1.5) {$\sigma_2$};
  \draw (3,2)--(3,3);
  \draw (2,2)--(1,3);
  \draw[preaction={draw=white,line width=4pt}] (1,2)--(2,3);
  \node[left] at (0.8,2.5) {$\sigma_1$};
\end{scope}
\begin{scope}[xshift=4.7 cm]
  \draw (1,0)--(1,1);
  \draw (3,0)--(2,1);
  \draw[preaction={draw=white,line width=4pt}] (2,0)--(3,1);
  \node[left] at (0.8,0.5) {$\sigma_2$};
  \draw (3,1)--(3,2);
  \draw (2,1)--(1,2);
  \draw[preaction={draw=white,line width=4pt}] (1,1)--(2,2);
  \node[left] at (0.8,1.5) {$\sigma_1$};
  \draw (1,2)--(1,3);
  \draw (3,2)--(2,3);
  \draw[preaction={draw=white,line width=4pt}] (2,2)--(3,3);
  \node[left] at (0.8,2.5) {$\sigma_2$};
\end{scope}
\node at (4.35,1.5) {$=$};
\end{tikzpicture}
```

The two drawings illustrate the braid relation by the third Reidemeister move.
Forgetting over/under data, each sends bottom positions $1,2,3$ to top positions
$3,2,1$, respectively. Thus both have image $(1\,3)$, since
$(1\,2)(2\,3)(1\,2)=(2\,3)(1\,2)(2\,3)=(1\,3)$.
The verification above uses only the presentation and quotient theorem and is
independent of the illustration.
