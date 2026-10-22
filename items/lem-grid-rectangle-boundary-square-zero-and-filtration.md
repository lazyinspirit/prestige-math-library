---
id: lem-grid-rectangle-boundary-square-zero-and-filtration
kind: lemma
title: "Rectangle-boundary pairings and grading changes in grid complexes"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-alexander-grading-integral
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Lemmas 4.6.7–4.6.8 and §13.2"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.77–83 and 252–254; index-two rectangle decompositions, annulus terms, and grading drops"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §1"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Grid differential, bigradings, and the two-rectangle cancellation for the tilde complex"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $G$ be a toroidal grid representing a knot, and use the three differentials defined by the grid-complex algorithm. For any fixed source and target states, every non-annular composite of two counted rectangles has exactly two ordered rectangle decompositions; the two decompositions have equal $O$-monomial weights and are either both counted or both excluded in each mode. Returning composites consist of thin annuli, one horizontal annulus for each row and one vertical annulus for each column. Every such annulus contains one $X$ and one $O$, so it is excluded in tilde and associated-graded minus modes. In the full filtered minus mode, each horizontal annulus contributes the variable of its unique $O$-marking, and each vertical annulus contributes the variable of its unique $O$-marking; every $O$-variable occurs once in each family and therefore twice in total. Thus all returning terms cancel over $\mathbb F_2$. Every counted rectangle term has Maslov degree $-1$ and lowers Alexander filtration by exactly the number of $X$-markings in its interior; the modes excluding $X$ preserve Alexander grading.

## Statement references

[[alg-grid-knot-floer-complex|The three grid-complex modes and their coefficient weights]]

[[def-grid-diagram-for-an-oriented-knot|Grid states, empty rectangles, markings, and gradings]]

[[lem-grid-alexander-grading-integral|The rectangle-change formula for the grid Alexander grading]]

## Facts & Assumptions

**Given:** A knot grid $G$, its finite set of states, and one of the three differential modes in the grid-complex algorithm.

[F1] [[def-grid-diagram-for-an-oriented-knot]] gives $M_{\mathbb O}(\mathbf x)=J(\mathbf x-\mathbb O,\mathbf x-\mathbb O)+1$, the analogous $M_{\mathbb X}$ formula, and the one-$O$/one-$X$-per-row-and-column conditions.

[F2] [[alg-grid-knot-floer-complex]] defines the tilde mode by excluding both markings, the associated-graded minus mode by excluding $X$ and weighting each $O_i$ by $U_i$, and the full filtered minus mode by allowing $X$ and weighting each $O_i$ by $U_i$; each $U_i$ lowers Maslov grading by two and Alexander filtration by one.

[F3] [[lem-grid-alexander-grading-integral]] proves the Maslov rectangle-change formulas and $A_G(\mathbf x)-A_G(\mathbf y)=n_{\mathbb X}(r)-n_{\mathbb O}(r)$ for every rectangle from $\mathbf x$ to $\mathbf y$.

## Proof

1.1 For two successive rectangles $r_1,r_2$, let $\psi=r_1+r_2$ be their cellwise sum as a two-chain, and let $\mathbf x,\mathbf z$ be the initial and terminal states. The state permutation changes by one transposition at each rectangle. If $\mathbf x\ne\mathbf z$, their relative permutation is either a product of two disjoint transpositions, so four points move, or a $3$-cycle, so three points move. These are the only nonidentity products of two transpositions. [F1, given, algebra]

1.2 For a counted rectangle $r$ the interior contains no state point, so [F3] gives $M_{\mathbb O}(\mathbf x)-M_{\mathbb O}(\mathbf y)=1-2n_{\mathbb O}(r)$. The coefficient $\prod_iU_i^{O_i(r)}$ lowers Maslov degree by $2n_{\mathbb O}(r)$ by [F2]; hence the full term has degree $-1$. [F2, F3, algebra]

2.1 In the four-point case, the two transpositions are disjoint and commute. Exchanging their order gives the alternate intermediate state; the first rectangle in one decomposition has the same support as the second rectangle in the other, and conversely. Thus both decompositions have the same two rectangle interiors and are empty together. No third decomposition is possible, because the four distinct changing corners must be paired into the same two disjoint transpositions fixed by the endpoint permutation and the domain boundary. [step 1.1, construct]

2.2 In the three-point case, following the boundary of $\psi$ gives a six-corner region with five right-angle corners and one reflex corner of angle $270^\circ$; every cell coefficient is zero or one. At the reflex corner the boundary can be cut in exactly two ways into two rectangles. Each cut gives the required intermediate grid state, and the resulting interiors contain no additional state point because any such point would already lie in the interior of one of the original empty rectangles. The six-corner boundary has no other concave corner at which to make a cut, so these are exactly the two decompositions. [step 1.1, construct]

2.3 If $\mathbf x=\mathbf z$, the two rectangles reverse the same state transposition and their union is a periodic annulus. If the annulus were not thin, its transverse width would include at least two grid strips; the interior would then contain a state point on an intervening grid circle, contradicting emptiness. Hence every returning domain is one of the $n$ horizontal thin annuli, each occupying one row strip, or one of the $n$ vertical thin annuli, each occupying one column strip. Conversely, the two state points on the boundary circles of any one-row strip split that strip into two empty rectangles, and the same holds for every one-column strip, so all $2n$ listed annuli occur as returning composites. Each contains exactly one $O$ and one $X$ by the row and column marking conditions, so it is excluded in tilde and associated-graded minus modes. In the full filtered minus mode, the horizontal annulus through the row of $O_i$ contributes $U_i$, and the vertical annulus through its column also contributes $U_i$. Every $O_i$ therefore occurs twice among all returning domains, and the total is zero over $\mathbb F_2$. [F1, F2, step 1.1, algebra]

3.1 In either non-annular case the two decompositions have the same cellwise domain $\psi$. A forbidden $O$- or $X$-marking occurs in one rectangle of a decomposition exactly when its cell has positive coefficient in $\psi$; hence a mode excluding that marking accepts either both decompositions or neither. For each $O_i$, the exponent in the product coefficient is its multiplicity in $\psi$, so the two accepted terms have the same monomial. They cancel over $\mathbb F_2$. [F2, step 2.1, step 2.2, algebra]

4.1 The Alexander change in [F3] is $A_G(\mathbf x)-A_G(\mathbf y)=n_{\mathbb X}(r)-n_{\mathbb O}(r)$. Multiplication by the coefficient lowers filtration by $n_{\mathbb O}(r)$, so the output filtration is $A_G(\mathbf x)-n_{\mathbb X}(r)$. Thus the full filtered term drops by exactly $n_{\mathbb X}(r)$, and the tilde and associated-graded modes, which count only rectangles with $n_{\mathbb X}(r)=0$, preserve Alexander grading. [F2, F3, algebra] ∎
