---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-khovanov-chain-complex-from-diagram.json
  precheck: n/a
id: alg-khovanov-chain-complex-from-diagram
kind: algorithm
title: "Khovanov chain complex from a diagram"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
justified_by:
  - lem-khovanov-cube-differential-squares-to-zero
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§3.3–4.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §3"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Definition

**Input:** a nonempty finite regular oriented link diagram $D$ and a total order $c_1<\cdots<c_n$ on its crossing set. A diagram object is supplied as mathematical input; this procedure does not parse a serialized string.

**Output:** the normalized bigraded Khovanov cochain module $C^{i,j}(D)$ and its candidate differential $d:C^{i,j}(D)\to C^{i+1,j}(D)$, constructed by the following finite instructions.

1. Enumerate every state $v:C(D)\to\{0,1\}$ once. Form the crossingless resolution by using the A-smoothing at $v(c)=0$ and the B-smoothing at $v(c)=1$.
2. For each state, create one tensor factor of the integral Frobenius algebra for each resolution circle and place the resulting tensor product in cohomological degree $|v|-n_-$ and quantum degree $|v|+n_+-2n_-+\sum\deg(a)$ for its circle labels $a$.
3. For each state and each crossing $c_j$ with $v(c_j)=0$, create the edge to $v+e_j$. Apply multiplication if that smoothing change merges two circles, comultiplication if it splits one circle, the identity on other tensor factors, and the sign $(-1)^{\sum_{i<j}v(c_i)}$. Sum the edge maps out of every state to obtain $d$.
4. Return the finite direct sum of the state modules with these degrees and maps. The square-zero property is the separate local lemma named by `justified_by`.

## Definition references

[[def-kauffman-bracket-smoothing-and-loop-value|Regular diagram crossing set and A/B smoothing chart]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Frobenius algebra, edge maps, and grading conventions]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§3.3–4.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §3](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Remarks

The local windows below use the source chart: the southwest-to-northeast strand passes over the other strand, the A-smoothing pairs the left endpoints and the right endpoints, and the B-smoothing pairs the top endpoints and the bottom endpoints. Along a cube edge only the smoothing at $c_j$ changes; all other state coordinates stay fixed.

```tikz
\begin{tikzpicture}[scale=0.85, line cap=round, line join=round]
  \begin{scope}[xshift=-3.8cm]
    \draw[thick] (-1,1)--(-0.14,0.14);
    \draw[thick] (0.14,-0.14)--(1,-1);
    \draw[very thick] (-1,-1)--(1,1);
    \node at (0,-1.5) {crossing $c_j$};
  \end{scope}
  \begin{scope}
    \draw[thick] (-1,1) .. controls (-0.45,0.35) and (-0.45,-0.35) .. (-1,-1);
    \draw[thick] (1,1) .. controls (0.45,0.35) and (0.45,-0.35) .. (1,-1);
    \node[align=center] at (0,-1.65) {$A$-smoothing\\state $v$, $v(c_j)=0$};
  \end{scope}
  \draw[->,thick] (1.4,0)--node[above] {$0\to1$} (2.4,0);
  \begin{scope}[xshift=3.8cm]
    \draw[thick] (-1,1) .. controls (-0.35,0.45) and (0.35,0.45) .. (1,1);
    \draw[thick] (-1,-1) .. controls (-0.35,-0.45) and (0.35,-0.45) .. (1,-1);
    \node[align=center] at (0,-1.65) {$B$-smoothing\\state $v+e_j$};
  \end{scope}
  \node at (-3,-3.2) {merge:};
  \node (ms) at (-0.8,-3.2) {$\mathcal A\otimes\mathcal A$};
  \node (mt) at (3,-3.2) {$\mathcal A$};
  \draw[->] (ms)--node[above] {$m$} (mt);
  \node at (-3,-4.3) {split:};
  \node (ds) at (-0.8,-4.3) {$\mathcal A$};
  \node (dt) at (3,-4.3) {$\mathcal A\otimes\mathcal A$};
  \draw[->] (ds)--node[above] {$\Delta$} (dt);
\end{tikzpicture}
```

Here $\mathcal A=\mathbb Z[X]/(X^2)$. The outside connections determine whether this A-to-B change merges two circles or splits one circle; the bottom rows display these two alternatives, not successive maps. The full edge map is the indicated map tensored with the identity on unaffected circle factors and multiplied by $(-1)^{\sum_{i<j}v(c_i)}$, as in instruction 3. The illustration does not establish $d^2=0$; that remains the separate square-zero lemma specified by `justified_by`.
