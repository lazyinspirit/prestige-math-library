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

**Given:** The standard unknot, the positive right-handed trefoil, its reverse mirror, and Countable Choice. The displayed staircases are conclusions to be identified, not additional geometric hypotheses.

[F1] [[def-knot-floer-filtration-and-tau]] defines the normalized threshold by the first nonzero filtered inclusion into total hat homology.

[F2] [[lem-tau-of-the-unknot-is-zero]] supplies the normalized one-generator unknot complex.

[F3] [[lem-diagonal-five-grid-filtered-staircase-reduction]] supplies the complete finite calculation for the grid $O_r=(r+1/2,r+1/2)$, $X_r=((r+2)\bmod5+1/2,r+1/2)$: its all-variable-zero filtered complex is $S_-\otimes V^{\otimes4}$, where $S_-$ has $(M,A)=(0,-1),(1,0),(2,1)$ and only $\partial c=b$. This accepted finite calculation is reused without replaying its matrices.

[F4] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] supplies the normalized full grid comparison, including the ordinary-collapse $V$ factors and associated-graded identification. Its retained closure is used directly, not the historical hold formerly recorded here.

[F5] [[lem-knot-floer-duality-and-filtration-swap]] supplies actual normalized Laurent duality for the reverse mirror and conjugation exchanging the two filtrations. In particular each coordinate hat specialization has total homology $\mathbb F_2$ in normalized degree zero. [[lem-knot-floer-mirror-complex-duality]] supplies the finite hat-dual threshold identity.

[F6] [[thm-seifert-algorithm-boundary-euler-and-genus]] gives genus $(1-s+c)/2$ for the connected one-boundary-component disk-and-band surface. [[def-smooth-and-topological-slice-genus]] defines its smooth four-ball minimum.

[F7] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] now supplies the genus inequality by its explicitly source-qualified finite-trace argument under Countable Choice. Apply it to an actual spanning surface punctured near one interior point to obtain $|\tau(K)|\le g$ for that surface. This does not rely on the formerly held movie construction.

## Proof

1.1 The finite grid in [F3] is an actual negative trefoil diagram. Subtract $1/2$ from the marking coordinates for this projection description. Its row segments are $[0,2]$ in row $0$, $[1,3]$ in row $1$, $[2,4]$ in row $2$, $[0,3]$ in row $3$, and $[1,4]$ in row $4$, with the orientations $O\to X$. Vertical segments run $X\to O$ and pass over. The only interior crossings are $(2,1),(3,2),(1,3)$. Following the single component $O_0\to O_2\to O_4\to O_1\to O_3\to O_0$ encounters them as $A_{\rm over},B_{\rm under},C_{\rm over},A_{\rm under},B_{\rm over},C_{\rm under}$. The first two crossings have upward over-strand and rightward under-strand; the third has downward over-strand and leftward under-strand. Thus all have the same negative sign. Smoothing the degree-two grid corners gives the standard alternating three-crossing negative trefoil projection: each successive over-under pair forms one of the three braid crossings, and its two exterior connecting arcs give the closure. This is the closure of $\sigma_1^{-3}$, with the displayed cyclic traversal fixing its orientation. Reflection gives the positive trefoil convention of the Example. This finite knot admission uses the actual segments, not a deduction of knot type from a Floer polynomial. [F3, given, construct]

1.2 By [F3, F4], the normalized all-variable-zero complex of this negative trefoil is filtered equivalent to both $S_-\otimes V^{\otimes4}$ and $\widehat{CFK}(T^\dagger)\otimes V^{\otimes4}$. Total homology in Maslov degree zero is one-dimensional in both tensor products: every non-top $V$ factor lowers Maslov degree, whereas $H(\widehat{CFK})$ is supported in degree zero. Its first filtered appearance in the first product is $-1$. In the second product its threshold is the threshold in $\widehat{CFK}$: inclusion into the top $V$ summand and projection onto that summand are filtered maps, with composition identity. Hence $\tau(T^\dagger)=-1$. Duality [F5] gives $\tau(T)=1$, independently of the genus inequality. The unknot value is [F2]. [F1, F2, F3, F4, F5, step 1.1, algebra]

2.1 The same finite calculation also identifies the associated-graded generator ranks needed for the full Laurent staircase. Record bigraded ranks by Laurent polynomials in $m,a$. The associated graded of $S_-$ has one generator in each bidegree $(0,-1),(1,0),(2,1)$ and zero differential. Thus the accepted associated-graded comparison gives
$$P_{\widehat{HFK}(T^\dagger)}(m,a)(1+m^{-1}a^{-1})^4=(a^{-1}+m+m^2a)(1+m^{-1}a^{-1})^4.$$
Cancel the nonzero factor in the integral Laurent polynomial domain. Duality gives for the positive trefoil exactly one group in each bidegree $(0,1),(-1,0),(-2,-1)$, and no others, over $\mathbb F_2$. This is a mod-two conclusion; no integral rank formula is inferred. [F3, F4, F5, step 1.1, algebra]

2.2 Reduce the actual finite free Laurent complex at its differential terms preserving both coordinates. Normalize each finite basis vector to first coordinate zero. Such a term has coefficient $1$, preserves Alexander grading, and lowers Maslov grading by one. Elementary cancellation of this unit term is bifiltered: the coefficient and its inverse have zero filtration shift, and the usual finite formulas $d'=d-dh d$, $i'=i-hd i$, $p'=p-pd h$ stay in both filtrations. Maslov homogeneity prevents a second, different $U$ power in the same matrix entry. Consequently no power-series inverse is needed. Each cancellation removes two generators, and finite linear changes within a fixed bidegree and these cancellations leave precisely the three generators represented by the associated-graded homology from step 2.1. This gives an actual bifiltered Laurent equivalent complex with generators $a,b,c$ of the Example, rather than promoting a rank polynomial alone to a filtered equivalence. [F4, F5, step 2.1, algebra]

2.3 The only possible differential entries in that reduced positive-trefoil complex, by Maslov degree and the two filtration inequalities, are
$$\partial a=\alpha b,\quad\partial b=\beta Ua+\gamma c,\quad\partial c=\delta Ub,\qquad \alpha,\beta,\gamma,\delta\in\mathbb F_2.$$
In its first-coordinate hat specialization the total homology is one-dimensional. If $\alpha=1$, its surviving class would be $c$ at level $-1$, contrary to step 1.2; if $\alpha=\gamma=0$, the hat homology would have rank three. Hence $\alpha=0$, $\gamma=1$. Squaring the differential gives $\delta=0$. In the other coordinate hat specialization the only possible remaining differential is $b\mapsto\beta Ua$; if $\beta=0$, it would have rank-three homology, contrary to conjugation [F5]. Thus $\beta=1$. This proves the displayed full Laurent staircase. Its dual has $\partial a^\vee=Ub^\vee$, $\partial c^\vee=b^\vee$; after $U=0$ its hat differential is exactly the displayed reverse-mirror differential. [F1, F5, step 1.2, step 2.1, step 2.2, algebra]

3.1 The oriented smoothing of the positive two-strand three-crossing braid has two circles and three bands. Its surface has genus $(1-2+3)/2=1$. Reflection gives the same for its reverse mirror, and an inward push gives smooth spanning surfaces in the four-ball. Therefore both smooth four-ball genera are at most one. By [F7] every smooth spanning surface has genus at least the absolute value of the independently computed tau invariant, which is one. Thus both genera equal one. [F6, F7, step 1.2, construct, algebra]

4.1 This proves all original Example clauses: the actual admitted finite grid and retained comparison/duality supply the invariant-level thresholds and both normalized filtered models, while the source-qualified genus input supplies the matching smooth lower bound. No integral Floer ranks or merely topological genus conclusion has been substituted. [F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.3, step 3.1] ∎
