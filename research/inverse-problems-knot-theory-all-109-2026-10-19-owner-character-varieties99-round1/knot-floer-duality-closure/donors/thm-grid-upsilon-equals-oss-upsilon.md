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
  - lem-pointed-basepoint-cone-and-variable-collapse
  - lem-upsilon-t-modification-preserves-filtered-homotopies
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

[F4] [[lem-knot-floer-duality-and-filtration-swap]]: exchanging the two knot Floer filtrations identifies the original Upsilon values at $t$ and $2-t$. Its actual reflected/conjugate diagram maps preserve the normalized Maslov grading; no grid equality is a premise of that analytic symmetry.

[A1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): it must establish the precise filtered equivalence between the one-variable grid model and $\mathrm{CFK}^{-}(K)$, including the normalized gradings. Its actual statement says the diagonal quotient has type $\mathrm{CFK}^{-}(K)\otimes W^{\otimes(n-1)}$, but its carrier has `provenance.proof: not-supplied`.

[F5] [[lem-upsilon-filtered-tower-splitting]] proves the filtered projection and the exact regrading map identifying the maximal non-torsion degree with $-2\nu_t$, using $U=v^2$.

[F6] [[lem-pointed-basepoint-cone-and-variable-collapse]] gives an explicit filtered deformation retraction from the $U_i+U_j$ cone to the ordinary quotient, including a polynomial-dependent differential. Its null-homotopy comparison supplies exactly one $W$ factor per marking identification over the surviving chosen-variable action.

[F7] [[lem-upsilon-t-modification-preserves-filtered-homotopies]] proves the exact coefficient reweighting for maps and homotopies, including column-finite polynomial modules and tensor products.

## Proof

1.1 Regard the full marking-variable complex first as a module over the surviving variable $U=U_1$; restriction of scalars does not identify any other variables. For each additional marking variable, [F1] supplies a polynomial-linear null-homotopy of its difference from $U$. Its proof gives Alexander filtration degree at most $-1$, since every counted rectangle contains the distinguished $X$, and Maslov degree $-1$. These are exactly the degree hypotheses in [F6]. That supplier compares the ordinary quotient with the cone even when the differential depends on the variable being removed, and compares the cone of the null-homotopic multiplication map with the zero-map cone. Successively quotienting the independent marking variables therefore yields $D_G\simeq C_G\otimes W^{\otimes(n-1)}$ over $\mathbb F_2[U]$, where $C_G$ denotes the full grid complex restricted to the chosen $U_1$ action. It is not the original multivariable complex with its coefficient ring silently changed. [given, F1, F6, algebra]

2.1 Under the still-unproved geometric comparison [A1], $C_G$ is filtered-chain-homotopy equivalent over that chosen polynomial action to $CFK^-(K)$ with the actual normalized gradings. Apply [F7] to the maps and their homotopies: a degree-$d$ term $U^ky$ in a map on $x$ acquires exponent $g_t(y)-g_t(x)-d\ge0$, and all composition and homotopy identities are preserved coefficientwise. The tensor compatibility in [F7] consequently identifies the diagonal quotient's modified homology with that of $tCFK^-(K)\otimes W_t^{\otimes(n-1)}$. This step remains conditional exactly on [A1], not on an unproved formal reweighting assertion. [given, A1, F2, F7, step 1.1, algebra]

3.1 The two generators of $W$ have t-gradings $0$ and $t-1$. For $0\le t\le1$, the second grading is nonpositive. The tensor product with $W_t^{\otimes(n-1)}$ contains a copy of each original non-torsion class with no grading shift, while every other copy is shifted down by a sum of nonnegative numbers $1-t$. Therefore the maximum non-torsion grading is unchanged. By [F5], this maximum agrees with the finite cycle-minimax convention [F3], so $\Upsilon_G(t)=\Upsilon_K(t)$ for $0\le t\le1$. For $1<t\le2$, the grid function is symmetric by definition and the original function is symmetric by [F4], so equality follows from the already established range. [given, F2, F3, F4, F5, step 2.1, algebra] ∎

## Unresolved proof obligations

The cone/quotient comparison, coefficient restrictions, finite reweighting functor and tower/minimax calculation are supplied locally by [F5]–[F7]. The actual normalized chosen-variable grid-to-analytic comparison [A1] remains unproved; the analytic filtration-swap symmetry used for $t>1$ is supplied by [F4]. Those are geometric authoring obligations, so the full theorem remains escalated.
