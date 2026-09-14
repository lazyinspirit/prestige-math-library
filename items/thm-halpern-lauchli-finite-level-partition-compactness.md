---
id: thm-halpern-lauchli-finite-level-partition-compactness
kind: theorem
title: "Finite level-product partition theorem by the compactness tree"
status: draft
origin: pipeline
deps: [thm-halpern-lauchli-dense-matrix-dichotomy, def-halpern-lauchli-finitistic-trees-density-and-matrices, thm-konig-finite-level-tree, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), Theorem 2 and Corollary 2, pp. 362–363"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
justified_by: []
forward_refs: []
proof_strategy: compactness-and-induction
---

## Statement

Assume AC.  Fix positive integers $d,q$ and finitistic trees
$T_1,\ldots,T_d$.  There is an $n>0$ such that every $q$-coloring of

$$\prod_{i=1}^d(T_i\mathbin{\upharpoonright}n), \qquad T_i\mathbin{\upharpoonright}n=\bigcup_{j<n}T_i(j),$$

has a color class containing an $(h,1)$-matrix for some $h<n$.  The same $n$
has the terminal common-level form: every $q$-coloring of
$\prod_iT_i(n)$ has a monochromatic $(h,1)$-matrix for some $h<n$ whose
coordinate sets lie in the terminal levels $T_i(n)$.

## Facts & Assumptions

**Given:** Positive $d,q$, the finitistic trees, and AC.

[F1] Finite truncations, domination, and $(h,1)$-matrices have the conventions
of the local definition. [[def-halpern-lauchli-finitistic-trees-density-and-matrices]]

[F2] Every subset of the full product satisfies the dense-matrix dichotomy in
ZF. [[thm-halpern-lauchli-dense-matrix-dichotomy]]

[F3] In ZFC, every height-$\omega$ tree with finite levels has an infinite
branch. [[thm-konig-finite-level-tree]]

[A1] AC is assumed, and is used to invoke F3 for the bad-coloring tree.
[[def-axiom-of-choice]]

## Proof

1.1 Induct on $q$.  For $q=1$, take $n=2$: the sole color contains $\prod_iT_i(1)$, a $(0,1)$-matrix inside the truncation. [F1, base]

1.2 Assume the assertion for $q$, with witness $k>0$, and suppose for contradiction that the truncation assertion fails for $q+1$.  For every $n>0$ there is then a bad $(q+1)$-coloring of $\prod_i(T_i\mathbin{\upharpoonright}n)$, meaning one with no monochromatic $(h,1)$-matrix for $h<n$. [ih, assume-contra]

2.1 Order all bad finite colorings by restriction.  A restriction is still bad, each level is finite because its coloring domain is finite, and step 1.2 gives a node at every positive level; adjoining the empty coloring as root makes a height-$\omega$ finite-level tree. [F1, step 1.2, construct]

3.1 Apply F3 using A1.  Its branch is a coherent sequence of bad colorings, whose union is a $(q+1)$-coloring $c$ of the full product: every tuple belongs to a sufficiently high finite truncation, and coherence makes its color independent of that choice. [F3, A1, step 2.1, choose]

4.1 Let $Q$ be the union of the first $q$ color classes of $c$.  Apply F2.  Either the last color contains an $(h,1)$-matrix, or $Q$ contains a $k$-matrix for the induction witness $k$. [F2, step 3.1, cases]

5.1 In the first case, thin each coordinate of the $(h,1)$-matrix to finitely many nodes, one dominating witness for each member of the finite height-$(h+1)$ cone frontier.  The finite product is still monochromatic and is contained in some truncation, contradicting that branch node's badness. [F1, step 3.1, step 4.1, assume-case first, choose]

5.2 In the second case write the $k$-matrix as $\prod_iA_i\subseteq Q$.  Since $A_i$ dominates $T_i(k)$ and $T_i(k)$ dominates $T_i\mathbin{\upharpoonright}k$, choose on the finite truncation a map $f_i(x)\in A_i$ with $x\le f_i(x)$.  Pull the $q$ colors on $Q$ back along $\prod_if_i$.  The induction hypothesis gives a monochromatic $(h,1)$-matrix in the truncated domain; its coordinatewise image is still $(h,1)$-dense and lies in one of the first $q$ colors.  After finite thinning it lies in some branch truncation, again contradicting badness. [F1, step 1.2, step 3.1, step 4.1, assume-case second, choose]

6.1 Both dichotomy cases contradict step 1.2.  Hence a truncation witness exists for $q+1$, and induction proves the first assertion for every positive $q$.  AC entered only at step 3.1; all selections in steps 5.1–5.2 are ZF and finite. [step 1.1, step 1.2, step 5.1, step 5.2, cases-exhaustive, discharge-contradiction, discharge-induction]

7.1 For the terminal form, fix the truncation witness $n$ and a coloring of $\prod_iT_i(n)$.  On each finite $T_i\mathbin{\upharpoonright}n$, select an extension map $g_i(x)\in T_i(n)$ with $x\le g_i(x)$ and pull the coloring back along $\prod_ig_i$.  A monochromatic $(h,1)$-matrix from the first assertion maps coordinatewise to an $(h,1)$-matrix in $\prod_iT_i(n)$ of the original color. [F1, step 6.1, choose] ∎
