---
id: def-grid-upsilon-from-grid-complex
kind: definition
title: "Grid Upsilon from the diagonal grid complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - def-upsilon-function-from-filtered-complex
  - def-axiom-of-choice
  - lem-upsilon-real-series-valuation-domain
  - lem-upsilon-finite-series-complex-homogeneous-splitting
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The quotient and t-modification are finite algebraic constructions and use no choice. The full-AC edge is retained from KT-42; the grid analytic branch uses the separately declared ACω assumption."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hajime Kubota, On the Upsilon invariant in grid homology, §§2.5 and 3"
      url: "https://arxiv.org/pdf/2412.08146"
      locator: "PDF pp.6–8; diagonal grid quotient, t-modification, definition of grid Upsilon, and W-factor comparison"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §13.2 and Lemma 14.1.11"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.252–254 and Lemma 14.1.11; identifying marking variables and the two-dimensional W factor"
---

## Definition

Let $G$ be an $n\times n$ toroidal grid diagram representing a knot. Let $GC^-(G)$ be the finite grid complex over $\mathbb F_2[U_1,\ldots,U_n]$ with its Maslov grading $M$ and Alexander filtration $A$. Form the diagonal quotient
$$ D_G=GC^-(G)/(U_1-U_2,\ldots,U_1-U_n), $$
regarded as a finitely generated $\mathbb F_2[U]$ complex with $U=U_1=\cdots=U_n$.

For a finitely generated Maslov-graded, Alexander-filtered complex $D$ over $\mathbb F_2[U]$ with a fixed finite homogeneous basis, its $t$-modified complex for $t\in[0,2]$ is the free $\mathcal R$-module on that basis, where $\mathcal R$ is the ring of formal $\mathbb F_2$-series $\sum_{\alpha\in A}c_\alpha v^\alpha$ with support $A\subset[0,\infty)$ such that every nonempty subset of $A$ has a least element. A homogeneous generator $x$ has $t$-grading $\operatorname{gr}_t(x)=M(x)-tA(x)$, extended by $\operatorname{gr}_t(v^\alpha x)=\operatorname{gr}_t(x)-\alpha$. The coefficient extension uses $U=v^2$; this action lowers the extended $t$-grading by two. The formula $M-tA$ is specified on the chosen polynomial generators. On Laurent translates, the extended grading is $M-t(j-i)$, with $v$ lowering both filtration coordinates by $1/2$. If
$$ \partial x=\sum_y c_{xy}U^{(M(y)-M(x)+1)/2}y, $$
then the modified differential is
$$ \partial_t x=\sum_y c_{xy}v^{\operatorname{gr}_t(y)-\operatorname{gr}_t(x)+1}y. $$
A homogeneous homology class is **non-torsion** if no nonzero element of $\mathcal R$ annihilates it. For $0\le t\le1$, define $\Upsilon_G(t)$ to be the maximum $t$-grading of a homogeneous non-torsion class in $H_*(D_G^t)$. For $1<t\le2$, define $\Upsilon_G(t)=\Upsilon_G(2-t)$. This is the grid convention compared with the original cycle-minimax invariant.

## Definition references

[[lem-upsilon-real-series-valuation-domain|The coefficient valuation ring]]

[[lem-upsilon-finite-series-complex-homogeneous-splitting|Finite homogeneous matrix reduction over that ring]]

[[def-grid-diagram-for-an-oriented-knot|Toroidal grid diagrams and their knot orientation convention]]

[[alg-grid-knot-floer-complex|The finite grid chain complex and its marking variables]]

[[def-upsilon-function-from-filtered-complex|The original Upsilon cycle-minimax convention and Maslov/Alexander grading convention]]

[Kubota, *On the Upsilon invariant in grid homology*, §§2.5 and 3](https://arxiv.org/pdf/2412.08146)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, §13.2 and Lemma 14.1.11](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** A finite grid diagram $G$ for a knot, its finite grid complex, and the coefficient and grading conventions specified in the definition.

[F1] [[def-grid-diagram-for-an-oriented-knot]]: a knot grid has one $O$ and one $X$ in each row and column, with the induced oriented component permutation a single cycle.

[F2] [[alg-grid-knot-floer-complex]]: the grid construction returns a finite state complex with the displayed marking-variable differential; its identification with knot Floer homology is a separate theorem.

[F3] [[def-upsilon-function-from-filtered-complex]]: $t$-grading is $M-tA$, multiplication by $v^\alpha$ lowers it by $\alpha$, and the modified differential is reweighted to have degree $-1$.

[A1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): its Statement gives the grid-to-knot Floer comparison needed to verify non-torsion homology, but the comparison proof is not supplied in its current carrier.

## Proof

1.1 Every term in $\partial_t^2x$ corresponding to a two-step path $x\to y\to z$ has exponent $(\operatorname{gr}_t(y)-\operatorname{gr}_t(x)+1)+(\operatorname{gr}_t(z)-\operatorname{gr}_t(y)+1)=\operatorname{gr}_t(z)-\operatorname{gr}_t(x)+2$, which is independent of the intermediate generator $y$. Its coefficient is therefore the coefficient of $z$ in $\partial^2x$, multiplied by that common power of $v$. Since $\partial^2=0$, $\partial_t^2=0$. For every differential term the exponent is nonnegative: writing its $U$-power as $k$, the Maslov relation gives $M(y)-M(x)+1=2k$, and the Alexander filtration gives $A(y)-A(x)\le k$, hence $2k-t(A(y)-A(x))\ge0$ for $0\le t\le2$. Thus $D_G^t$ is a chain complex over $\mathcal R$. [given, F2, F3, algebra]

2.1 The quotient identifies finitely many marking variables in a complex with finitely many grid states, so $D_G$ has a finite polynomial basis. Its t-modification is a finite homogeneous complex over the coefficient ring proved in [[lem-upsilon-real-series-valuation-domain]]. The explicit finite matrix reduction of [[lem-upsilon-finite-series-complex-homogeneous-splitting]] gives a finite sum of free homology generators and cyclic torsion summands, and proves that, if a free summand is present, its largest homogeneous non-torsion grading exists. Thus the asserted maximum is justified without a Noetherian assumption on $\mathcal R$. Existence of a nonzero free summand for this actual grid still requires the unresolved comparison [A1]. [given, F1, F2, F3, A1, step 1.1, algebra]

3.1 The quotient convention and the symmetric extension for $t>1$ are part of the definition, not consequences of the comparison theorem. No grid-independence or agreement with the knot Floer Upsilon invariant is asserted here; those are theorems on this page. [given, F1, F2, step 2.1] ∎

## Unresolved proof obligations

The existence of the free homology tower in the stated grid model must be checked against the actual batch-92 grid-homology comparison theorem. That theorem is present but has `provenance.proof: not-supplied`. This definition does not use that theorem as a proof premise and does not claim grid independence.
