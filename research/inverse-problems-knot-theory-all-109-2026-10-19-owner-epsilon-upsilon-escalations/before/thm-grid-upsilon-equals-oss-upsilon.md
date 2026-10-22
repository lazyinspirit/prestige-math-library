---
id: thm-grid-upsilon-equals-oss-upsilon
kind: theorem
title: "The grid Upsilon function agrees with the original Upsilon invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-marking-variables-chain-homotopic
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - lem-tau-connected-sum-filtered-tensor-product
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - def-grid-upsilon-from-grid-complex
  - lem-upsilon-filtered-tower-splitting
  - def-countable-choice
  - lem-knot-floer-duality-and-filtration-swap
  - def-axiom-of-choice
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The grid/Heegaard comparison uses the separately declared ACω analytic branch. The remaining W-factor and grading calculations are finite algebra and use no choice. The full-AC plan edge remains distinct."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hajime Kubota, On the Upsilon invariant in grid homology, §§2.5 and 3"
      url: "https://arxiv.org/pdf/2412.08146"
      locator: "Theorem 1.1 and proof, PDF pp.2 and 7–8; diagonal quotient, W factors, t-modification, and the grading comparison"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §13.2 and Lemma 14.1.11"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.252–254; mapping-cone identification and the two-dimensional W factor"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, §§4–7"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Finite cycle minimax and its identification with the t-modified grading"
---

## Statement

Let $G$ be any $n\times n$ grid diagram representing a smooth oriented knot $K\subset S^3$. Form the diagonal grid complex by setting every marking variable $U_i$ equal to a single variable $U$, and define $\Upsilon_G(t)$ by the t-modified non-torsion grading on that complex for $0\le t\le1$, extended by $\Upsilon_G(t)=\Upsilon_G(2-t)$ for $1<t\le2$. Then for every $t\in[0,2]$,
$$ \Upsilon_G(t)=\Upsilon_K(t), $$
where $\Upsilon_K$ is the finite cycle-minimax invariant defined from $\mathrm{CFK}^{\infty}(K)$. In this statement the quotient with all $U_i$ identified carries the factor $W^{\otimes(n-1)}$, where $W$ has generators in Maslov/Alexander bidegrees $(0,0)$ and $(-1,-1)$; this factor is retained in the proof and is not counted as an improvement to the grid-state complexity bound.

## Statement references

[[def-grid-upsilon-from-grid-complex|Diagonal grid quotient and its t-modified non-torsion grading]]

[[def-upsilon-function-from-filtered-complex|Original finite cycle-minimax convention]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The current grid/Heegaard comparison statement; proof not supplied]]

[[lem-grid-marking-variables-chain-homotopic|Filtered chain homotopy between marking-variable actions]]

[Kubota, *On the Upsilon invariant in grid homology*, §§2.5 and 3](https://arxiv.org/pdf/2412.08146)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, §13.2 and Lemma 14.1.11](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§4–7](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** A knot grid $G$ with grid number $n$, its full filtered grid complex, the diagonal quotient, and the two Upsilon conventions just defined.

[F1] [[lem-grid-marking-variables-chain-homotopic]]: for consecutive markings the rectangle homotopy $H_\ell$ satisfies $\partial H_\ell+H_\ell\partial=(U_i+U_j)\operatorname{id}$ and is Alexander-filtered; following the one-cycle marking route identifies any two variable actions by filtered chain homotopy.

[F2] [[def-grid-upsilon-from-grid-complex]]: the grid invariant is the maximal grading of a homogeneous non-torsion class in the t-modified diagonal quotient on $[0,1]$, with reflection for $t>1$.

[F3] [[def-upsilon-function-from-filtered-complex]]: the original invariant is $-2$ times the minimum $F_t$ filtration of a Maslov-zero cycle representing the normalized generator.

[F4] [[lem-knot-floer-duality-and-filtration-swap]]: exchanging the two knot Floer filtrations identifies the original Upsilon values at $t$ and $2-t$. The current proof of this supplier still depends on the unproved analytic invariance branch.

[A1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): it must establish the precise filtered equivalence between the one-variable grid model and $\mathrm{CFK}^{-}(K)$, including the normalized gradings. Its actual statement says the diagonal quotient has type $\mathrm{CFK}^{-}(K)\otimes W^{\otimes(n-1)}$, but its carrier has `provenance.proof: not-supplied`.

[A2] [[lem-upsilon-filtered-tower-splitting]] (present, proof incomplete): its Statement identifies the non-torsion tower grading with the finite cycle minimax; the filtration-preserving induction and t-regrading comparison remain unresolved in the current draft.

## Proof

1.1 For each adjacent pair of marking variables $U_i,U_j$, [F1] supplies a filtered chain homotopy from multiplication by $U_i+U_j$ to zero. Over $\mathbb F_2$, this identifies their actions. The quotient imposing $U_i=U_j$ is represented by the mapping cone of multiplication by $U_i+U_j$; replacing this null-homotopic map by zero gives the direct sum of the original complex and its filtration/grade shift by $(-1,-1)$, namely tensoring with $W$. Iterating along the connected marking cycle gives the filtered equivalence
$$ GC^-(G)/(U_1=\cdots=U_n)\simeq GC^-(G)\otimes W^{\otimes(n-1)}. $$
[given, F1, algebra]

1.2 Under [A1], the one-variable restriction of $GC^-(G)$ is filtered-chain-homotopy equivalent to $CFK^-(K)$, preserving the Maslov and Alexander gradings. Applying the t-modification reweights each differential term by its $t$-grading difference, so a filtered chain map and its filtered homotopies induce a chain homotopy equivalence after t-modification. Consequently the diagonal quotient's t-modified homology has the same non-torsion grading data as $tCFK^-(K)\otimes W_t^{\otimes(n-1)}$. [given, A1, F2, algebra]

2.1 The two generators of $W$ have t-gradings $0$ and $t-1$. For $0\le t\le1$, the second grading is nonpositive. The tensor product with $W_t^{\otimes(n-1)}$ contains a copy of each original non-torsion class with no grading shift, while every other copy is shifted down by a sum of nonnegative numbers $1-t$. Therefore the maximum non-torsion grading is unchanged. By [A2], this maximum agrees with the finite cycle-minimax convention [F3], so $\Upsilon_G(t)=\Upsilon_K(t)$ for $0\le t\le1$, conditionally on the regrading argument in [A2]. For $1<t\le2$, the grid function is symmetric by definition and the original function is symmetric by [F4], so equality follows from the already established range. [given, F2, F3, F4, A2, step 1.2, algebra] ∎

## Unresolved proof obligations

Step 1.1 expands the mapping-cone argument using the actual proved marking-variable homotopy. Steps 1.2 and 2.1 remain conditional on [A1]; step 2.1 also depends on the incomplete filtered tower-splitting proof [A2]. The current grid/Heegaard comparison carrier states the needed result but has `provenance.proof: not-supplied`; the analytic disk regularity item is likewise not supplied as a proof. This theorem is therefore escalated, and no supplier acceptance is implied.
