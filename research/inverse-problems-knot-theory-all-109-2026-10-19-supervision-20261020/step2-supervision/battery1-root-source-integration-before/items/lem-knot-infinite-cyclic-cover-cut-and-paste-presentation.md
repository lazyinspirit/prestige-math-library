---
id: lem-knot-infinite-cyclic-cover-cut-and-paste-presentation
kind: lemma
title: "The Seifert-matrix map in the infinite cyclic cover"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-cut-open-cover-alexander-module-presentation
  - def-countable-choice
  - thm-linking-number-equals-signed-intersection
  - def-the-laurent-polynomial-ring
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A–8.B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot in the oriented standard three-sphere, and let $F$ be a connected compact smooth oriented embedded surface with boundary orientation equal to that of $K$. Let $g\ge0$ satisfy $\chi(F)=1-2g$. Choose a small product tubular neighborhood $N(K)$ adapted to the inward conormal of $F$, put $E=S^3\setminus\operatorname{int}N(K)$ and $S=F\cap E$, and cut $E$ open along a product bicollar of $S$ to obtain the compact cut-open complement $Y$. Orient the normal line $n$ of $F$ by requiring $(n,u,v)$ to be positive in $S^3$ whenever $(u,v)$ is a positive tangent basis of $F$; name the face on the $+n$ side $S_+$ and the face on the $-n$ side $S_-$. Let $j:S\hookrightarrow F$ be the collar-removal inclusion and $\iota_\pm:S\to Y$ the two face inclusions; the inclusion induces an isomorphism on $H_1$, and set $i_\pm=(\iota_\pm)_*\circ j_*^{-1}$. Form $\widetilde E_F$ from copies $Y_n$ by gluing $S_-(Y_n)$ to $S_+(Y_{n+1})$, and let $t:Y_n\to Y_{n+1}$ be the deck shift. Because the boundary orientation of $F$ agrees with $K$, this shift is the positive-meridian shift. Let $a_1,\ldots,a_{2g}$ be an ordered integral basis of $H_1(F;\mathbb Z)$ and let $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, where $a_i^+$ is the positive normal push-off. In the linking-dual basis given by $[\gamma]\mapsto([a]\mapsto\operatorname{lk}(\gamma,a))$ under $H_1(Y;\mathbb Z)\cong\operatorname{Hom}(H_1(F;\mathbb Z),\mathbb Z)$, the map $i_- - t i_+$ is represented over $\Lambda=\mathbb Z[t^{\pm1}]$ by $V-tV^T$. Consequently $H_1(\widetilde E_F;\mathbb Z)$ is the cokernel of $V-tV^T$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push pairing and matrix entries]]

[[lem-seifert-pairing-well-defined|Symmetry and push-level invariance of linking]]

[[lem-seifert-cut-open-cover-alexander-module-presentation|The cut-open cover, linking-dual identification, and Mayer–Vietoris map]]

[[def-the-laurent-polynomial-ring|The Laurent polynomial ring and deck-variable convention]]

## Facts & Assumptions

**Given:** Full AC, the oriented knot/surface pair, an integral basis of $H_1(F;\mathbb Z)$, its Seifert matrix $V$, the cut-open complement $Y$, and the gluing convention $S_-(Y_n)=S_+(Y_{n+1})$.

[A1] Full AC is the choice-function axiom and supplies the Alexander-duality and countable-choice interfaces. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The pairing convention is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ with positive normal fixed by the ambient orientation. [[def-knot-seifert-pairing-and-matrix]]

[F2] Linking is symmetric and unchanged by moving both components through a disjoint product collar; the pairing is defined on homology classes. [[lem-seifert-pairing-well-defined]]

[F3] Linking identifies $H_1(Y)$ with the integral dual of $H_1(F)$, the stack has the positive meridian deck shift, and Mayer–Vietoris presents its homology by $i_- -t i_+$. [[lem-seifert-cut-open-cover-alexander-module-presentation]]

[F4] The deck shift defines the $\Lambda$-module structure with $t$ acting by $Y_n\mapsto Y_{n+1}$. [[def-the-laurent-polynomial-ring]]

## Proof

1.1 **Matrices of the two inclusions.** Use the dual coordinate of $\gamma\in H_1(Y;\mathbb Z)$ at $a_i$ given by $\operatorname{lk}(\gamma,a_i)$ from [F3]. The $j$th source basis vector under $i_-$ is the negative push $a_j^-$. Its $i$th dual coordinate is $\operatorname{lk}(a_j^-,a_i)$. By symmetry [F2], this equals $\operatorname{lk}(a_i,a_j^-)$. Translating both curves by a small positive normal amount preserves their disjointness and changes the pair to $(a_i^+,a_j)$, so this coordinate is $V_{ij}$ by [F1]. Thus the $j$th column of $i_-$ is the $j$th column of $V$. For $i_+$ the $i$th dual coordinate of the image of $a_j$ is $\operatorname{lk}(a_j^+,a_i)=V_{ji}$ by [F1], so the matrix of $i_+$ is $V^T$. [A1, F1, F2, F3, F4, given, construct]

2.1 The deck variable multiplies the $i_+$ term by $t$ under the seam convention in [F3]. Therefore the coordinate matrix of $i_- -t i_+$ is $V-tV^T$ by step 1.1. The exact Mayer–Vietoris sequence in [F3] identifies its cokernel with $H_1(\widetilde E_F;\mathbb Z)$, proving both claims. [F3, F4, step 1.1, given, algebra] ∎

## Remarks

The coordinate square records the map and its matrix. The vertical arrows send a surface class to its chosen basis coordinates and a cut-complement class to its linking evaluations on that basis; step 1.1 proves commutativity entry by entry.

$$
\begin{tikzpicture}[>=stealth,node distance=1.6cm]
  \node (h1) {$H_1(F)\otimes\Lambda$};
  \node[right=3.2cm of h1] (h2) {$H_1(Y)\otimes\Lambda$};
  \node[below=1.2cm of h1] (z1) {$\Lambda^{2g}$};
  \node[below=1.2cm of h2] (z2) {$\Lambda^{2g}$};
  \draw[->] (h1) -- node[above] {$i_- -t i_+$} (h2);
  \draw[->] (h1) -- node[left] {basis coordinates} (z1);
  \draw[->] (h2) -- node[right] {linking dual} (z2);
  \draw[->] (z1) -- node[below] {$V-tV^T$} (z2);
\end{tikzpicture}
$$
