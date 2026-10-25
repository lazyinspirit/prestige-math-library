---
id: lem-knot-a-polynomial-boundary-elimination
kind: lemma
title: Boundary eigenvalue curve elimination for the A-polynomial
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-a-polynomial
  - lem-sl-two-character-trace-coordinate-model
  - lem-laurent-algebraic-curve-has-principal-equation
  - lem-knot-boundary-eigenvalue-locus-defined-over-q
  - lem-finite-affine-incidence-projection-and-curve-component-selection
  - lem-sl2-representation-variety-is-affine
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, §§2–3
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
    - title: Stephan Tillmann, Varieties associated to 3-manifolds, §7
      url: https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC and let $K\subset S^3$ be a smooth oriented knot. The restriction of representations of $\pi_1(E_K)$ to the peripheral torus gives an eigenvalue locus in $(\mathbb C^*)^2$ with algebraic Zariski closure. Its one-dimensional reduced image components are exactly the curve components used in $A_K(M,L)$; isolated image points contribute no curve factor. Radical elimination of the representation, trace and eigenline coordinates from the finite presentation incidence equations, followed by retaining precisely the one-dimensional irreducible components, yields the Laurent ideal of that curve union, whose square-free primitive generator is $A_K$ up to $\pm M^aL^b$.

## Statement references

[Cooper, Culler, Gillet, Long, and Shalen, §§2–3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Tillmann, §7](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, a finite knot-group presentation, marked peripheral words $\mu,\lambda$, and the definition of $A_K$ as the reduced union of one-dimensional eigenvalue-image closure components.

[F1] Matrix determinant and relator equations for the specified presentation have integer coefficients; inverse letters are replaced by adjugates ([[lem-sl2-representation-variety-is-affine]]).

[F2] A finite list of word traces gives the actual closed character-quotient model; equal irreducible characters are conjugate, while reducible characters record diagonal semisimplifications ([[lem-sl-two-character-trace-coordinate-model]]).

[F3] Finite affine incidence charts give the exact radical projection ideal by contraction, followed by a separate selection of dimension-one components. Stable sets and their selected components descend to rational radical ideals ([[lem-finite-affine-incidence-projection-and-curve-component-selection]]).

[F4] The full eigenvalue-image closure is stable under all field automorphisms fixing $\mathbb Q$, by applying them to the actual presentation matrices and common eigenvector ([[lem-knot-boundary-eigenvalue-locus-defined-over-q]]).

[F5] A finite reduced rationally defined union of Laurent plane curves has a square-free primitive integer-coefficient generator unique up to $\pm M^aL^b$ ([[lem-laurent-algebraic-curve-has-principal-equation]]).

## Proof

1.1 **Two finite eigenline charts.** Write the generator matrices as in [F1] and evaluate the two peripheral words by the same polynomial adjugate rule; call their matrices $U(A)$ and $V(A)$. Work over $R=\mathbb C[M^{\pm1},L^{\pm1}]$. In one chart put $v=(1,z)^T$ and in the other put $v=(z,1)^T$. In each impose all determinant and presented-relator equations together with the four scalar equations $U(A)v=Mv$ and $V(A)v=Lv$. These give finite ideals $J_1,J_2$ of polynomial extensions of $R$ with integer coefficients. Every common eigenline has a vector in at least one chart: divide by its first nonzero coordinate, using the second chart if its first coordinate is zero. Conversely any solution has a nonzero displayed vector and hence the required common eigenline. Their projected union is therefore exactly $\mathcal E_K$ of the definition, including repeated eigenvalues, scalar matrices and nonsemisimple peripheral matrices. No global eigenvector choice is made. [F1, given, construct, algebra]

2.1 **Trace coordinates introduce no extra image.** Choose the finite words $w_j$ of [F2]. If trace coordinates are used, append variables $t_j$ and equations $t_j=\operatorname{tr}(w_j(A))$ to both charts. These right sides are integer polynomials by [F1]. Every original chart point has exactly one such trace tuple, and forgetting that tuple gives exactly the original chart; thus appending and eliminating it changes neither the projected point set nor its ideal. The eigenvalue relation is independent of the representative of a character: for irreducible representations [F2] gives conjugacy, which carries common eigenlines with their eigenvalues; for reducible representations use an invariant-line basis. The peripheral matrices are then upper triangular and commute. Their possible joint eigenvalue pairs are precisely the two diagonal pairs, with coincident pairs counted once. To verify this last assertion, if one diagonal pair differs, one of the two matrices has distinct eigenvalues; its two eigenspaces are preserved by the commuting other matrix, giving both pairs. If neither differs, all common eigenvalues are the single repeated pair, and the original invariant line supplies it. Diagonal semisimplification consequently preserves exactly these pairs. Thus quotienting creates no additional peripheral eigenvalue pairs; the matrix incidence calculation already computes the same locus. [F1, F2, step 1.1, construct, algebra]

3.1 **Radical elimination and the required selection.** Apply [F3] to the two finite charts, with the optional trace equations from step 2.1. It gives $I(\overline{\mathcal E_K})=(\sqrt{J_1}\cap R)\cap(\sqrt{J_2}\cap R)$. Decompose this closed set into its finite maximal irreducible components and retain exactly those of dimension one. Their union is exactly $V_K$ in the definition of $A_K$, so the intersection of their prime vanishing ideals is precisely $I(V_K)$. An isolated image component is not selected; no assumption that raw elimination removes it is used. The same operation discards a component of any other dimension if one occurs, without needing a separate dimension bound for the full peripheral image. [F3, step 1.1, step 2.1, given, construct, algebra]

4.1 **Primitive equation.** By [F4] the point set $\mathcal E_K$ is stable under every automorphism fixing $\mathbb Q$. The component-selection part of [F3] therefore gives a radical rational structure on $I(V_K)$, not merely on the ideal before selection. By [F5] its finite reduced curve union has a square-free primitive integer Laurent generator, unique up to $\pm M^aL^b$. This is $A_K$ by its defining normalization. The construction retains the full-AC branch inherited from [F2]–[F5] and makes no choice of a global eigenline section or of a closed projection image. This proves all asserted elimination and normalization claims. [F2, F3, F4, F5, step 3.1, given] ∎
