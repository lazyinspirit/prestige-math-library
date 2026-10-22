---
id: lem-grid-marking-variables-chain-homotopic
kind: lemma
title: "Basepoint variables act chain homotopically on a knot grid"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-alexander-grading-integral
  - lem-grid-rectangle-boundary-square-zero-and-filtration
  - lem-grid-rectangle-differential-squares-to-zero
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Lemma 4.6.9 and Lemma 13.2.5"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.79 and 257; rectangle homotopies identifying marking-variable actions in the unfiltered and filtered complexes"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §1"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.2–4; basepoint variables and the full filtered grid complex"
---

## Statement

Let $G$ be a toroidal grid representing one oriented knot, and let $\partial^-$ be the full filtered minus differential over $\mathbb F_2[U_1,\ldots,U_n]$. Call $O_i$ and $O_j$ consecutive when the $X$-marking in the row of $O_i$ lies in the column of $O_j$. Let $X_\ell$ be that marking and define the module map
$$H_\ell(\mathbf x)=\sum_{\mathbf y}\sum_{\substack{r\in\operatorname{Rect}^{\circ}(\mathbf x,\mathbf y)\\X_\ell\in\operatorname{Int}(r)}}\left(\prod_{a=1}^{n}U_a^{O_a(r)}\right)\mathbf y.$$
Then $\partial^-H_\ell+H_\ell\partial^-=(U_i+U_j)\operatorname{id}$. The map $H_\ell$ has Maslov degree $-1$ and does not raise the Alexander filtration. Consequently multiplication by any two variables $U_i,U_j$ is filtered chain homotopic, since the consecutive relation follows the single cycle of the knot grid.

## Statement references

[[def-grid-diagram-for-an-oriented-knot|Grid markings and the single-cycle knot condition]]

[[alg-grid-knot-floer-complex|The full filtered minus differential and variable gradings]]

[[lem-grid-rectangle-boundary-square-zero-and-filtration|Rectangle pairings, annuli, and grading changes]]

[[lem-grid-rectangle-differential-squares-to-zero|The full filtered minus differential is a chain differential]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Lemmas 4.6.9 and 13.2.5](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** A knot grid $G$, a consecutive pair $O_i,O_j$, and the associated marking $X_\ell$.

[F1] [[def-grid-diagram-for-an-oriented-knot]] gives one $O$ and one $X$ in each row and column and a single cyclic $O\to X\to O$ marking route for a knot grid.

[F2] [[alg-grid-knot-floer-complex]] defines $\partial^-$ by summing all empty-state rectangles with coefficient $\prod_aU_a^{O_a(r)}$; each $U_a$ has Maslov degree $-2$ and Alexander filtration degree $-1$.

[F3] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] proves that each non-annular two-rectangle domain has two decompositions with equal total $O$-weight and that the only returning domains are thin horizontal or vertical annuli.

[F4] [[lem-grid-alexander-grading-integral]] proves $A_G(\mathbf x)-A_G(\mathbf y)=n_{\mathbb X}(r)-n_{\mathbb O}(r)$ and the Maslov rectangle-change formula.

[F5] [[lem-grid-rectangle-differential-squares-to-zero]] establishes that $\partial^-$ is a differential.

## Proof

1.1 The sum defining $H_\ell$ is finite because there are finitely many states and at most two torus rectangles for each ordered state pair. It is $\mathbb F_2[U_1,\ldots,U_n]$-linear by its coefficient formula. For each counted rectangle $r$, [F4] gives $M(\mathbf x)-M(\mathbf y)=1-2n_{\mathbb O}(r)$; the coefficient has Maslov degree $-2n_{\mathbb O}(r)$ by [F2]. Therefore each term of $H_\ell(\mathbf x)$ has Maslov degree $M(\mathbf x)-1$. Also [F4] gives $A(\mathbf y)-n_{\mathbb O}(r)=A(\mathbf x)-n_{\mathbb X}(r)$, and $X_\ell\in\operatorname{Int}(r)$ implies $n_{\mathbb X}(r)\ge1$. Thus $H_\ell$ does not raise the Alexander filtration. [F2, F4, given, construct, algebra]

1.2 Expand $\partial^-H_\ell+H_\ell\partial^-$ and group its terms by their two-rectangle domain $\psi$. If $\psi$ is non-annular, [F3] pairs its two decompositions. In each decomposition, when $X_\ell$ has multiplicity zero neither ordered term is selected; when it has multiplicity one exactly one of the two rectangles contains it and exactly one ordering is selected; when it has multiplicity two both rectangles contain it and the two possible placements of $H_\ell$ cancel in characteristic two. The paired decomposition has the same domain, $O$-weight, and multiplicity at $X_\ell$, so every non-annular contribution cancels. [F2, F3, given, construct, algebra]

2.1 A returning two-rectangle domain is a thin horizontal or vertical annulus by [F3]. The only thin annuli containing $X_\ell$ are the horizontal one in its row and the vertical one in its column. In the horizontal annulus the unique $O$-marking is $O_i$, so its coefficient is $U_i$; in the vertical annulus the unique $O$-marking is $O_j$, so its coefficient is $U_j$. Each annulus has one decomposition and contributes its coefficient times the input generator. Hence the returning contribution is $(U_i+U_j)\mathbf x$. Together with step 1.2 this proves the chain homotopy identity. [F1, F2, F3, step 1.2, algebra]

3.1 The marking route in [F1] orders the variables cyclically, and each adjacent pair in that cycle is consecutive as defined in the statement. Any two indices are joined by a finite path of adjacent pairs. By [F5], each multiplication map is a chain map for the differential; adding the homotopy maps from step 2.1 along the path gives a filtered chain homotopy between multiplication by $U_i$ and multiplication by $U_j$. [F1, F5, step 2.1, construct, algebra] ∎
