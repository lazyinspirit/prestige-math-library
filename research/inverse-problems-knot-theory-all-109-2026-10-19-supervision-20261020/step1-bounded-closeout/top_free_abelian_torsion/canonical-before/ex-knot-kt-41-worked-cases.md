---
id: ex-knot-kt-41-worked-cases
kind: example
title: "Tau of the unknot and trefoils from filtered staircases"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - lem-tau-of-the-unknot-is-zero
  - lem-knot-floer-mirror-complex-duality
  - thm-tau-is-concordance-invariant-and-four-ball-genus-bound
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-standard-unknot-hat-diagram-rank-one
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - def-oriented-seifert-surface
  - thm-seifert-algorithm-boundary-euler-and-genus
  - def-smooth-and-topological-slice-genus
  - def-countable-choice
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the normalized knot Floer and smooth-genus definitions; the finite staircase calculations use no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§2.2, Example 2.2 and Figure 3(a),(c); §3.1, Example 3.3 and the tau threshold"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "§2.1 and Proposition 3.2; the unknot and trefoil filtered models, connected sum, and genus bound"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 6 and 13; finite grid models, tau, and the analytic comparison"
---

## Example

Assume the Axiom of Countable Choice. Let $U$ be the standard unknot, let $T_{2,3}$ be the closure of the positive two-strand braid with three crossings, and let $T_{2,3}^{\dagger}$ be its reverse mirror. In the normalized right-trefoil staircase over $\mathbb F_2[U,U^{-1}]$, generators $a,b,c$ have Maslov gradings $0,-1,-2$, Alexander levels $1,0,-1$, and differential $\partial b=Ua+c$, $\partial a=\partial c=0$; multiplication by $U$ lowers both filtrations by one. The hat complex is obtained by setting $U=0$. The reverse-mirror staircase is the filtered dual, with generators $a^\vee,b^\vee,c^\vee$ at Alexander levels $-1,0,1$ and differential $\partial c^\vee=b^\vee$, $\partial a^\vee=\partial b^\vee=0$. The normalized unknot complex has one generator at level zero and zero differential. These models give
$$\tau(U)=0,\qquad \tau(T_{2,3})=1,\qquad \tau(T_{2,3}^{\dagger})=-1.$$
Both trefoils have smooth four-ball genus one.

## Example references

[[def-knot-floer-filtration-and-tau|The normalized filtration threshold defining tau]]

[[lem-tau-of-the-unknot-is-zero|The one-generator unknot calculation]]

[[lem-knot-floer-mirror-complex-duality|Duality for the reverse-mirror filtered complex]]

[[thm-tau-is-concordance-invariant-and-four-ball-genus-bound|The smooth four-ball genus bound]]

[[thm-seifert-algorithm-boundary-euler-and-genus|The disk-and-band surface and its Euler characteristic]]

[Hom, *A survey on Heegaard Floer homology and concordance*, §2.2 and §3.1](https://arxiv.org/pdf/1512.00383v3)

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, §2.1 and Proposition 3.2](https://arxiv.org/pdf/math/0301149v4)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 6 and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Diagram

The braid schematic is the closure of the positive two-strand braid $\sigma_1^3$. Both strands are oriented downward; the right-to-left strand passes over at each positive crossing, and the exterior arcs join the top and bottom endpoints. The diagram identifies the trefoil convention only; none of the filtered-complex calculations relies on the drawing.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth,line cap=round,line join=round]
  \draw[->] (-1,0) .. controls (-2.0,0.25) and (-2.0,2.75) .. (-1,3);
  \draw[->] (1,0) .. controls (2.0,0.25) and (2.0,2.75) .. (1,3);
  \draw (-1,3) .. controls (-1.5,2.8) and (1.5,2.2) .. (1,2)
               .. controls (1.5,1.8) and (-1.5,1.2) .. (-1,1)
               .. controls (-1.5,0.8) and (1.5,0.2) .. (1,0);
  \draw (1,3) .. controls (1.5,2.8) and (-1.5,2.2) .. (-1,2)
              .. controls (-1.5,1.8) and (1.5,1.2) .. (1,1)
              .. controls (1.5,0.8) and (-1.5,0.2) .. (-1,0);
  \draw[white,line width=4pt] (-0.28,2.63)--(0.28,2.37);
  \draw[white,line width=4pt] (-0.28,1.63)--(0.28,1.37);
  \draw[white,line width=4pt] (-0.28,0.63)--(0.28,0.37);
  \draw[line width=0.8pt] (0.28,2.63)--(-0.28,2.37);
  \draw[line width=0.8pt] (0.28,1.63)--(-0.28,1.37);
  \draw[line width=0.8pt] (0.28,0.63)--(-0.28,0.37);
  \node at (0,-0.38) {$\widehat{\sigma_1^3}=T_{2,3}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The standard unknot, the positive right-handed trefoil, its reverse mirror, the displayed normalized filtered staircase models, and the Axiom of Countable Choice.

[F1] [[def-knot-floer-filtration-and-tau]] defines $\tau$ as the least filtration level whose inclusion has nonzero image in total homology.

[F2] [[lem-tau-of-the-unknot-is-zero]] proves the one-generator unknot value $0$.

[F3] [[lem-knot-floer-mirror-complex-duality]] proves that the normalized reverse-mirror model is the filtered dual and reverses the tau sign.

[F4] [[def-smooth-and-topological-slice-genus]] defines $g_4^{\mathrm{sm}}$ as the minimum genus of smooth proper spanning surfaces.

[F5] [[thm-seifert-algorithm-boundary-euler-and-genus]] proves that a Seifert construction from $s$ circles and $c$ crossings gives an admissible surface of genus $(1-s+c)/2$ when it is connected and has one boundary component.

[L1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] is the declared bridge from the source's trefoil staircase to the normalized grid/analytic complex, but its current proof is escalated. The source-reported staircase is therefore not treated as a locally verified identification here.

[L2] [[thm-tau-is-concordance-invariant-and-four-ball-genus-bound]] states $|\tau(K)|\le g_4^{\mathrm{sm}}(K)$, but its current proof remains escalated on the grid, cobordism, and connected-sum inputs.

## Proof

1.1 The unknot value follows from [F2]. In its standard model, the single generator is at Alexander level $0$, so the first nonzero inclusion is at $s=0$. [F1, F2, given, algebra]

1.2 Set $U=0$ in the displayed right-trefoil staircase. The resulting complex has $\partial b=c$ and $\partial a=\partial c=0$. For $s\le-1$, the filtered subcomplex is either zero or spanned by $c$, whose class maps to zero in total homology because $c=\partial b$. At $s=0$ the subcomplex spanned by $b,c$ is acyclic. At $s=1$ the full complex has homology generated by $a$, so the first nonzero inclusion level is exactly $1$. [F1, given, algebra]

2.1 By [F3], the normalized reverse-mirror staircase has the dual differential $\partial c^\vee=b^\vee$ and Alexander levels $-1,0,1$. Below $s=-1$ its filtered subcomplex is zero; at $s=-1$ it contains the cycle $a^\vee$, whose class is the nonzero total homology class. Thus its threshold is $-1$. [F1, F3, given, algebra]

3.1 The oriented smoothing of the positive two-strand three-crossing braid has two circles, and each of its three crossings contributes one band. By [F5] the connected one-boundary-component surface has genus $(1-2+3)/2=1$. Reflection gives a genus-one surface for the reverse mirror; pushing either surface into the four-ball yields $g_4^{\mathrm{sm}}\le1$. If [L2] were established, the two nonzero tau values in steps 1.2 and 2.1 would give $g_4^{\mathrm{sm}}\ge1$, proving equality. Since [L2] is escalated, the genus lower bound is conditional. [F4, F5, L2, step 1.2, step 2.1, given, construct, algebra]

4.1 The finite staircase calculations in steps 1.2 and 2.1 are complete for the displayed complexes, but [L1] does not yet prove that the source staircases are the normalized analytic complexes for these knots. The invariant-level trefoil values and the genus-one conclusions therefore remain escalated pending that exact comparison. [L1, L2, step 1.2, step 2.1]
