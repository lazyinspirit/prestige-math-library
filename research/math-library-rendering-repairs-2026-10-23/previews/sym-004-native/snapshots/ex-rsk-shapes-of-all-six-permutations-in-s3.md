---
id: ex-rsk-shapes-of-all-six-permutations-in-s3
kind: example
title: "The RSK shapes of the six permutations of $S_3$"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law, thm-robinson-schensted-correspondence, def-row-insertion-and-bumping-route, ex-plancherel-measure-on-partitions-of-three]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.6-§1.8, printed pp. 17-28 (row insertion and the shape law)"
---

## Example

Running Robinson-Schensted row insertion on the six permutations of $\{1,2,3\}$ gives
$$123\mapsto(3),\quad 132\mapsto(2,1),\quad 213\mapsto(2,1),\quad 231\mapsto(2,1),\quad 312\mapsto(2,1),\quad 321\mapsto(1^3);$$
the resulting shape frequencies are $\tfrac16$ for $(3)$, $\tfrac46$ for $(2,1)$ and $\tfrac16$ for $(1^3)$, matching $P_3$ of [[ex-plancherel-measure-on-partitions-of-three]] and confirming [[thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law]] at $n=3$.

## Facts & Assumptions

**Given:** the six permutations of $\{1,2,3\}$ in one-line form, each of weight $1/6$; row insertion as defined in [[def-row-insertion-and-bumping-route]]; the insertion tableau $P(\sigma)$ of a permutation $\sigma$ and its shape $\operatorname{sh}(\sigma)$ ([[thm-robinson-schensted-correspondence]]).

[F1] Row insertion is deterministic: a new letter that is larger than every entry of the current first row is appended at its right end, and otherwise the letter replaces the leftmost entry larger than it, which is bumped to the next row and processed there by the same rule ([[def-row-insertion-and-bumping-route]]).

[F2] The shape of the insertion tableau $P(\sigma)$ is $\operatorname{sh}(\sigma)$; the Robinson-Schensted map is a bijection onto pairs of standard tableaux of equal shape ([[thm-robinson-schensted-correspondence]]).

[F3] For a uniform permutation of $\{1,2,3\}$, $\operatorname{sh}$ has law $P_3$, namely the weights $1/6,4/6,1/6$ on $(3),(2,1),(1^3)$ ([[thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law]], [[ex-plancherel-measure-on-partitions-of-three]]).

## Verification

**Proof technique:** direct.

1.1 Explicit insertions: applying [F1] to each word, one letter at a time, gives the following tableaux (written as the list of their rows): $123\rightsquigarrow((1,2,3))$, shape $(3)$; $132$: $(1)$, then $(1,3)$, then $2$ bumps the $3$, giving rows $(1,2)$ and $(3)$, shape $(2,1)$; $213$: $(2)$, then $1$ bumps $2$ giving rows $(1)$ and $(2)$, then $3$ is appended in the first row, shape $(2,1)$; $231$: $(2)$, then $(2,3)$, then $1$ bumps $2$, giving rows $(1,3)$ and $(2)$, shape $(2,1)$; $312$: $(3)$, then $1$ bumps $3$ giving rows $(1)$ and $(3)$, then $2$ is appended in the first row, shape $(2,1)$; $321$: $(3)$, then $2$ bumps $3$, giving rows $(2)$ and $(3)$, then $1$ bumps $2$ and the expelled $2$ bumps $3$, giving rows $(1)$, $(2)$, $(3)$, shape $(1^3)$. Each bumping step is the deterministic rule of [F1] applied to the displayed entries. [given, F1]

2.1 Frequencies: by [F2] the shapes recorded in step 1.1 are the Robinson-Schensted shapes of the six permutations, so among the six words the shape $(3)$ occurs once, $(2,1)$ four times and $(1^3)$ once; with the uniform weight $1/6$ on each permutation the frequencies are $1/6,4/6,1/6$. [given, F2, step 1.1, algebra]

3.1 Comparison: the frequencies of step 2.1 are exactly the Plancherel weights $P_3(3)=1/6$, $P_3(2,1)=4/6$ and $P_3(1^3)=1/6$ of [F3], confirming the law of the shape of a uniform permutation at $n=3$; every step was a finite computation with integer entries, and no choice principle was used. [given, F3, step 2.1, algebra] ∎

## Remarks

The tableaux below display the six outcomes in step 1.1. In each pair, $P$ contains the inserted letters, while $Q$ records insertion times: the box first created at step $k$ carries $k$. Rows are drawn from top to bottom, with boxes left aligned. The four middle pairs have shape $(2,1)$, making the frequency count visible; the verification above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=0.65cm,y=0.65cm]
\node at (0,1) {$\sigma$};
\node at (4,1) {$P(\sigma)$};
\node at (9,1) {$Q(\sigma)$};
\node at (14,1) {$\mathrm{shape}$};
\node at (0,-0.5) {$ 123 $};
\draw (3,0) rectangle (4,-1);
\node at (3.5,-0.5) {$ 1 $};
\draw (4,0) rectangle (5,-1);
\node at (4.5,-0.5) {$ 2 $};
\draw (5,0) rectangle (6,-1);
\node at (5.5,-0.5) {$ 3 $};
\draw (8,0) rectangle (9,-1);
\node at (8.5,-0.5) {$ 1 $};
\draw (9,0) rectangle (10,-1);
\node at (9.5,-0.5) {$ 2 $};
\draw (10,0) rectangle (11,-1);
\node at (10.5,-0.5) {$ 3 $};
\node at (14,-0.5) {$ (3) $};
\node at (0,-4.5) {$ 132 $};
\draw (3,-4) rectangle (4,-5);
\node at (3.5,-4.5) {$ 1 $};
\draw (4,-4) rectangle (5,-5);
\node at (4.5,-4.5) {$ 2 $};
\draw (3,-5) rectangle (4,-6);
\node at (3.5,-5.5) {$ 3 $};
\draw (8,-4) rectangle (9,-5);
\node at (8.5,-4.5) {$ 1 $};
\draw (9,-4) rectangle (10,-5);
\node at (9.5,-4.5) {$ 2 $};
\draw (8,-5) rectangle (9,-6);
\node at (8.5,-5.5) {$ 3 $};
\node at (14,-4.5) {$ (2,1) $};
\node at (0,-8.5) {$ 213 $};
\draw (3,-8) rectangle (4,-9);
\node at (3.5,-8.5) {$ 1 $};
\draw (4,-8) rectangle (5,-9);
\node at (4.5,-8.5) {$ 3 $};
\draw (3,-9) rectangle (4,-10);
\node at (3.5,-9.5) {$ 2 $};
\draw (8,-8) rectangle (9,-9);
\node at (8.5,-8.5) {$ 1 $};
\draw (9,-8) rectangle (10,-9);
\node at (9.5,-8.5) {$ 3 $};
\draw (8,-9) rectangle (9,-10);
\node at (8.5,-9.5) {$ 2 $};
\node at (14,-8.5) {$ (2,1) $};
\node at (0,-12.5) {$ 231 $};
\draw (3,-12) rectangle (4,-13);
\node at (3.5,-12.5) {$ 1 $};
\draw (4,-12) rectangle (5,-13);
\node at (4.5,-12.5) {$ 3 $};
\draw (3,-13) rectangle (4,-14);
\node at (3.5,-13.5) {$ 2 $};
\draw (8,-12) rectangle (9,-13);
\node at (8.5,-12.5) {$ 1 $};
\draw (9,-12) rectangle (10,-13);
\node at (9.5,-12.5) {$ 2 $};
\draw (8,-13) rectangle (9,-14);
\node at (8.5,-13.5) {$ 3 $};
\node at (14,-12.5) {$ (2,1) $};
\node at (0,-16.5) {$ 312 $};
\draw (3,-16) rectangle (4,-17);
\node at (3.5,-16.5) {$ 1 $};
\draw (4,-16) rectangle (5,-17);
\node at (4.5,-16.5) {$ 2 $};
\draw (3,-17) rectangle (4,-18);
\node at (3.5,-17.5) {$ 3 $};
\draw (8,-16) rectangle (9,-17);
\node at (8.5,-16.5) {$ 1 $};
\draw (9,-16) rectangle (10,-17);
\node at (9.5,-16.5) {$ 3 $};
\draw (8,-17) rectangle (9,-18);
\node at (8.5,-17.5) {$ 2 $};
\node at (14,-16.5) {$ (2,1) $};
\node at (0,-20.5) {$ 321 $};
\draw (3,-20) rectangle (4,-21);
\node at (3.5,-20.5) {$ 1 $};
\draw (3,-21) rectangle (4,-22);
\node at (3.5,-21.5) {$ 2 $};
\draw (3,-22) rectangle (4,-23);
\node at (3.5,-22.5) {$ 3 $};
\draw (8,-20) rectangle (9,-21);
\node at (8.5,-20.5) {$ 1 $};
\draw (8,-21) rectangle (9,-22);
\node at (8.5,-21.5) {$ 2 $};
\draw (8,-22) rectangle (9,-23);
\node at (8.5,-22.5) {$ 3 $};
\node at (14,-20.5) {$ (1^3) $};
\end{tikzpicture}
```
