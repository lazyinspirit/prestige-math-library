---
id: lem-integral-seifert-form-is-realized-by-a-knot
kind: lemma
title: "Every integral Seifert form is realized by a knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - thm-linking-number-equals-signed-intersection
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - lem-every-oriented-link-admits-a-regular-projection
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.9, printed p. 324"
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "§8.A, printed pp. 200–203"
---

## Statement

Assume the full Axiom of Choice. Let $g\geq0$ and let $V\in M_{2g}(\mathbb Z)$ satisfy $\det(V-V^T)=\pm1$, where the empty skew matrix has determinant $1$. There is a connected compact smooth oriented surface $F\subset S^3$ with one boundary component and an ordered integral basis of $H_1(F;\mathbb Z)$ whose positive-push Seifert matrix is exactly $V$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix of a chosen oriented surface and basis]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The skew part of a Seifert matrix is its surface intersection form]]

## Facts & Assumptions

**Given:** Full AC and an integer $2g\times2g$ matrix $V$ with unimodular alternating part $J=V-V^T$.

[A1] Full AC is the choice-function axiom assumed by the knot Seifert-pairing convention and the linking theorem; it implies the countable choice required by the surface-existence and projection suppliers. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] For a knot Seifert matrix, $V-V^T$ is the unimodular oriented intersection matrix of the chosen surface. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F2] Under full AC, if disjoint oriented smooth circles $J,K$ have a regular diagram and $K$ bounds a supplied compact oriented smooth embedded surface transverse to $J$, then $\operatorname{lk}(J,K)$ equals one half the signed mixed-crossing sum. [[thm-linking-number-equals-signed-intersection]]

[F3] The positive-push entry is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. [[def-knot-seifert-pairing-and-matrix]]

[F4] Under countable choice, every smooth oriented knot bounds a connected compact smooth oriented embedded surface with the prescribed oriented boundary. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F5] A compact smooth embedded manifold can be made transverse to a closed boundaryless embedded submanifold by an arbitrarily small ambient isotopy fixed near its boundary, provided the initial boundary is transverse. [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F6] Under countable choice, a smooth oriented link in $\mathbb R^3$ has a finite regular projection. [[lem-every-oriented-link-admits-a-regular-projection]]

## Proof

1.1 If $g=0$, $V$ is the empty matrix and a disk with its empty homology basis realizes it. Assume $g>0$. Put $J=V-V^T$ and $H=\mathbb Z^{2g}$. Choose a primitive vector $e\in H$. Since $J:H\to\operatorname{Hom}(H,\mathbb Z)$ is an isomorphism, the functional $J(e,-)$ is primitive, so Bezout's identity gives $f\in H$ with $J(e,f)=1$. For every $x\in H$, the vector $x'=x-J(x,f)e+J(x,e)f$ satisfies $J(x',e)=J(x',f)=0$. Thus $H=\langle e,f\rangle\oplus\langle e,f\rangle^\perp$, and the restricted alternating form on the second summand is unimodular. Induction gives a basis with matrix $J_0=\bigoplus_{k=1}^g\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Let $P\in\mathrm{GL}_{2g}(\mathbb Z)$ be the corresponding change of basis and put $W=P^TVP$; then $W-W^T=J_0$. [given, construct, induction]

1.2 To apply [F2] to any disjoint oriented smooth core/push-off pair $J,K$, first use [F4] to obtain a spanning surface $\Sigma$ for $K$. Apply [F5] to the inclusion of $\Sigma$ with closed target $J$. Its boundary $K$ is disjoint from $J$, so boundary transversality is vacuous; the isotopy fixes a neighbourhood of $K$ and yields an embedded oriented spanning surface transverse to the unchanged curve $J$. These auxiliary surfaces do not modify the band surface. All constructed curves lie in $\mathbb R^3\subset S^3$; [F6] supplies a regular diagram of each pair. Thus every hypothesis of [F2] is met, both before and after a local band modification, and the crossing formula computes the topological linking entries in [F3]. [A1, F2, F3, F4, F5, F6, construct]

2.1 Start with a disk and attach $2g$ oriented bands in the standard one-boundary handle pattern. Their core curves form an integral basis with intersection matrix $J_0$. The result is a connected compact smooth oriented surface with one boundary component. Write $W_0$ for its positive-push matrix; by [F1], $W_0-W_0^T=J_0$. [A1, F1, step 1.1, construct]

3.1 For each band core, inserting a full twist in a small subarc adds two same-sign mixed crossings between that core and its positive push-off, changing its self-linking by $+1$ or $-1$ by step 1.2. The twist box is disjoint from the other core arcs, so the other entries and the surface intersection matrix are unchanged. Perform finitely many such twists to make every diagonal entry of $W_0$ equal the corresponding diagonal entry of $W$. [F1, F3, step 2.1, step 1.2, construct]

4.1 For each pair $i<j$, choose subarcs of bands $i$ and $j$ in a ball disjoint from every other core and every earlier modification. Insert the oriented local clasp whose two new mixed crossings between $a_i^+$ and $a_j$ have the same sign $\varepsilon\in\{+1,-1\}$. By step 1.2, their signed sum changes by $2\varepsilon$, so $W_{ij}$ changes by $\varepsilon$. The clasp preserves the abstract surface intersection form; by [F1], $W_{ij}-W_{ji}$ is unchanged, and therefore $W_{ji}$ also changes by $\varepsilon$. Choose the bands' framings through the clasp without adding individual full twists; each band alone is unchanged up to framed isotopy. Thus all diagonal entries stay fixed, and support away from the other cores leaves all other pair entries fixed. The target equation $W-W_0=(W-W_0)^T$ off the diagonal holds because both skew parts are $J_0$. A finite number of positive or negative clasps thus sets both entries to their target values for each pair, without changing previously treated pairs. The resulting surface has positive-push matrix exactly $W$. [F1, F3, step 1.2, step 3.1, construct]

5.1 The basis change $P^{-1}\in\mathrm{GL}_{2g}(\mathbb Z)$ on this surface changes its matrix from $W$ to $(P^{-1})^TW P^{-1}=V$. The constructed surface has one boundary component, so its boundary is an oriented knot and the matrix is a Seifert matrix for that knot. [F3, step 1.1, step 4.1, algebra] ∎

## Diagram

The diagram records the positive oriented clasp between the positive push-off of one band core and the other core. At the left crossing the blue strand is over; at the right crossing the red strand is over. With both arrows oriented as shown, the two mixed crossing signs are positive, so their half-sum changes the linking number by $+1$; reversing both local crossing conventions gives $-1$. The proof uses the crossing formula and finite local modifications, not the drawing.

~~~tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \draw[thick,blue,->] (-2,0) -- (0.48,0);
  \draw[thick,blue,->] (0.92,0) -- (2,0);
  \draw[thick,red,->] (-1.2,-1) -- (-0.72,-0.16);
  \draw[thick,red] (-0.68,0.16) .. controls (-0.35,0.9) and (0.25,0.9) .. (0.7,0);
  \draw[thick,red,->] (0.7,0) .. controls (0.92,-0.4) .. (1.2,-1);
  \node[blue] at (-1.35,0.28) {$a_i^+$};
  \node[red] at (-1.45,-0.78) {$a_j$};
  \node at (-0.7,0.48) {$+$};
  \node at (0.7,0.48) {$+$};
  \node at (0,-1.35) {oriented clasp};
\end{tikzpicture}
~~~
