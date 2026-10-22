---
id: cex-knot-kt-25-boundary-case
kind: counterexample
title: "The square knot is slice despite its nonunit Alexander polynomial"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-matrix-of-reverse-mirror-is-negative-original
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, reverse-mirror ribbon construction, printed pp.4–5"
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "§8.A, right-handed trefoil Seifert matrix, printed pp.200–202"
---

## Statement refuted

Assume full AC. Let $T$ be the right-handed trefoil and let $S=T\#T^\dagger$ be the square knot in the fixed oriented connected-sum convention. The universal converse assertion “if a knot has nonunit Alexander polynomial, then it is not topologically slice” is false: $S$ bounds a smooth properly embedded disk in the standard unit four-ball $B^4\subset\mathbb R^4$ whose squared radial function has only index-$0$ and index-$1$ interior critical points, while $\Delta_S(t)\doteq(t^2-t+1)^2$. Here $\doteq$ means equality up to a unit of $\mathbb Z[t^{\pm1}]$; those units are exactly $\pm t^k$, and the displayed polynomial has nonzero terms in degrees $0$ through $4$, so it is not a unit. A knot is topologically slice when it bounds a locally flat disk in $B^4$, and every smooth proper disk is locally flat. The trefoil itself also has nonunit Alexander polynomial, but this fact alone only places it outside the hypothesis of the Alexander-one sufficient theorem and proves no nonsliceness claim about the trefoil.

## Statement references

[[lem-general-knot-reverse-mirror-sum-is-ribbon|A knot summed with its reverse mirror bounds a smooth ribbon disk]]

[[def-locally-flat-proper-surface-and-concordance-collars|Smooth proper disks are locally flat topological disks]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The right-handed trefoil's positive-push Seifert matrix]]

[[lem-seifert-matrix-of-reverse-mirror-is-negative-original|The negative-original matrix of the reverse mirror]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The Seifert determinant formula for the Alexander polynomial]]

[[def-axiom-of-choice|Full AC, implying the countable-choice hypothesis of the ribbon-disk supplier]]

## Facts & Assumptions

**Given:** Full AC, the right-handed trefoil $T$, and the fixed reverse-mirror and connected-sum conventions.

[A1] [[def-axiom-of-choice]]: AC supplies a choice function for each family of nonempty sets.

[A2] [[thm-choice-implies-dependent-implies-countable-choice]]: Full AC implies the countable-choice axiom used by the ribbon-disk construction.

[F1] [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]: For the stated positive Hopf plumbing, $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$.

[F2] [[def-knot-seifert-pairing-and-matrix]]: In the positive-push convention, the Seifert matrix is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ in the chosen integral basis.

[F3] [[lem-seifert-matrix-of-reverse-mirror-is-negative-original]]: The reverse-mirror matrix in the image basis is $-V$.

[F4] [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]: $\det(V-tV^T)\doteq\Delta_K(t)$ for the supplied Seifert matrix.

[F5] [[def-knot-connected-sum-and-prime-knot]]: The connected sum is formed by deleting small balls around trivial arcs and gluing the complements by the fixed orientation-reversing boundary identification.

[F7] [[lem-general-knot-reverse-mirror-sum-is-ribbon]]: Under AC$_\omega$, $T\#T^\dagger$ bounds a smooth properly embedded ribbon disk in $B^4$.

[F8] [[def-locally-flat-proper-surface-and-concordance-collars]]: Smooth surface charts are also topological locally flat charts.

## Proof

1.1 The right-handed trefoil matrix is $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ by [F1] in the convention [F2]. Choose the connected-sum balls around short boundary arcs where the Seifert surfaces are standard collars, disjoint from their basis curves and small positive push-offs. The fixed gluing [F5] joins those collars. A basis cycle in one summand and its push-off lie in a ball disjoint from the other summand's curves, so the first cycle bounds a $2$-chain there away from the second; hence all cross linking entries vanish. The combined matrix is therefore $W=\operatorname{diag}(V,-V)$ by [F3]. [A1, F1, F2, F3, F5, construct]

2.1 Direct calculation gives $\det(V-tV^T)=\det\begin{pmatrix}t-1&t\\-1&t-1\end{pmatrix}=(1-t)^2+t=t^2-t+1$. For the reverse-mirror block, $-V-t(-V^T)=-(V-tV^T)$, whose determinant equals $\det(V-tV^T)$ because the rank is two. Since $W-tW^T$ is block diagonal, its determinant is $(t^2-t+1)^2$. By [F2] and [F4], this is a representative of $\Delta_S(t)$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Expanding $(t^2-t+1)^2$ gives $t^4-2t^3+3t^2-2t+1$, which has nonzero coefficients in degrees $0$ and $1$ and is therefore not a monomial $\pm t^k$. Since these monomials are exactly the units of $\mathbb Z[t^{\pm1}]$, the Alexander polynomial is nonunit. On the other hand, [A2] supplies AC$_\omega$ from full AC, so [F7] gives a smooth ribbon disk; by [F8] this disk is locally flat. Thus $S$ is topologically slice despite its nonunit Alexander polynomial, refuting the asserted converse. For $T$, the same calculation gives $\Delta_T=t^2-t+1\not\doteq1$, which only means that the Alexander-one theorem does not apply. [A1, A2, F4, F7, F8, step 2.1, algebra] ∎
