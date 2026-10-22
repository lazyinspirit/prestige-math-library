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
  - lem-diagonal-five-grid-filtered-staircase-reduction
  - lem-knot-floer-duality-and-filtration-swap
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
dependency_level: 10
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

Assume the Axiom of Countable Choice. Let $U$ be the standard unknot, let $T_{2,3}$ be the closure of the positive two-strand braid with three crossings, and let $T_{2,3}^{\dagger}$ be its reverse mirror. In the normalized right-trefoil staircase over $\mathbb F_2[U,U^{-1}]$, generators $a,b,c$ have Maslov gradings $0,-1,-2$, Alexander levels $1,0,-1$, and differential $\partial b=Ua+c$, $\partial a=\partial c=0$; multiplication by $U$ lowers both filtrations by one. Choose the polynomial minus lattice $C^-=\mathbb F_2[U]\langle a,b,c\rangle$ inside this Laurent complex, with each displayed generator at first filtration coordinate zero. Its hat complex is the quotient $C^-/UC^-$; setting $U=0$ refers to this lattice quotient, not to the Laurent complex in which $U$ is invertible. The full reverse-mirror Laurent staircase is the filtered dual, with generators $a^\vee,b^\vee,c^\vee$ at Alexander levels $-1,0,1$ and differential $\partial a^\vee=Ub^\vee$, $\partial c^\vee=b^\vee$, $\partial b^\vee=0$. Its chosen polynomial dual lattice has hat quotient with $\partial c^\vee=b^\vee$ and $\partial a^\vee=\partial b^\vee=0$. The normalized unknot complex has one generator at level zero and zero differential. These models give
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

The braid schematic is the closure of the positive two-strand braid $\sigma_1^3$. Both strands are oriented downward; the left-to-right strand passes over at each positive crossing, and the exterior arcs join the top and bottom endpoints. The diagram identifies the trefoil convention only; none of the filtered-complex calculations relies on the drawing.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth,line cap=round,line join=round]
  \draw[->] (-1,0) .. controls (-2.0,0.25) and (-2.0,2.75) .. (-1,3);
  \draw[->] (1,0) .. controls (2.0,0.25) and (2.0,2.75) .. (1,3);
  \foreach \y in {3,2,1} {
    \draw[thick,->] (-1,\y)--(1,{\y-1});
    \draw[thick,->,preaction={draw=white,line width=4pt}] (1,\y)--(-1,{\y-1});
  }
  \node at (0,-0.38) {$\widehat{\sigma_1^3}=T_{2,3}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The standard unknot, the positive right-handed trefoil, its reverse mirror, and Countable Choice.

[A1] [[def-countable-choice]] is the assumption retained in the Statement.

[F1] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §2.2, Figure 3(a),(c), gives the normalized $CFK^\infty(T_{2,3})$ staircase with generators $a,b,c$, $\partial b=Ua+c$, and Maslov gradings $0,-1,-2$. The displayed Alexander levels are $1,0,-1$. The same section identifies $\widehat{CFK}(T_{2,3})$ as the $i=0$ filtered complex; Example 3.3 in §3.1 computes $\tau(T_{2,3})=1$, and Theorem 3.1(1) states that this is the standard knot invariant. I read the figure caption, threshold definition, and examples; I do not claim to reconstruct the Heegaard-diagram computation.

[F2] [[lem-tau-of-the-unknot-is-zero]] computes $\tau(U)=0$ in the normalized genus-zero one-pointed model.

[F3] **External input, authorized by the run-specific source boundary.** Hom, *The knot Floer complex and the smooth concordance group*, §2, PDF/printed p. 5, defines $-K$ as the reverse mirror and states $CFK^\infty(-K)\simeq CFK^\infty(K)^*$, with arrows and both filtrations reversed. Its dual-basis description gives the displayed reverse-mirror staircase from [F1]. The finite filtered hat threshold sign is also proved for the supplied diagrams by [[lem-knot-floer-mirror-complex-duality]]. I read the duality statement and its convention; I do not claim to reconstruct its cited Heegaard-move proof.

[F4] [[thm-seifert-algorithm-boundary-euler-and-genus]] computes the genus of the Seifert disk-and-band surface from its circle and crossing counts; for the displayed positive three-crossing braid the counts are $s=2$ and $c=3$.

[F5] **External input, authorized by the run-specific source boundary.** Hom, §3.1, Theorem 3.1(2), printed p. 8, states $|\tau(K)|\le g_4(K)$ over the survey's stated $\mathbb F_2$ coefficient convention (printed p. 2).

## Proof

**Given:** The complexes and knots in the Statement.

1.1 By [F1], the standard right-trefoil Laurent complex has the displayed staircase. In the polynomial lattice $\mathbb F_2[U]\langle a,b,c\rangle$, quotienting by $U$ leaves $\partial b=c$ and $\partial a=\partial c=0$. The subcomplex at filtration at most $0$ is $\langle b,c\rangle$, which is acyclic, while $a$ first appears at level $1$ and represents the total homology class. Thus the normalized threshold is $1$, as in Hom's Example 3.3. [A1, F1, given, algebra]

2.1 The dual differential and negated filtration from [F3] give $\partial a^\vee=Ub^\vee$, $\partial c^\vee=b^\vee$, and $\partial b^\vee=0$ for the reverse mirror. In its polynomial dual lattice, setting $U=0$ leaves $\partial c^\vee=b^\vee$ and the first nonzero total class occurs at level $-1$. The unknot value is [F2]. [F1, F2, F3, step 1.1, algebra]

3.1 The oriented smoothing of the positive two-strand three-crossing braid has two Seifert circles and three bands. By [F4] it gives a genus-one spanning surface for the positive trefoil; reflecting this surface gives a genus-one spanning surface for its reverse mirror. Thus each four-ball genus is at most one. The thresholds in steps 1.1–2.1 and Hom's genus bound [F5] give the lower bound one for each; hence both smooth four-ball genera equal one. [F4, F5, step 1.1, step 2.1, construct, algebra] ∎
