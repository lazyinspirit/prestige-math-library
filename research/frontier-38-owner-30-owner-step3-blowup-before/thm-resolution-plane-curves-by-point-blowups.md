---
id: thm-resolution-plane-curves-by-point-blowups
kind: theorem
title: "Resolution of reduced plane curves by point blowups and the delta recurrence"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-normalization-reduced-curve-exists-finite
  - def-normalization-defect-of-reduced-curve
  - lem-normalization-defect-euler-and-lengths
  - lem-normalization-unchanged-under-finite-birational-curve-map
  - lem-blowup-multiplicity-euler-characteristic-drop
  - thm-proper-quasi-finite-is-finite
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - def-strict-transform-closed-subscheme
  - thm-blowup-regular-surface-closed-point-regular
  - thm-blowup-smooth-surface-point-charts
  - lem-blowup-point-pushforward-vanishing
  - thm-blowup-projective
  - lem-blowup-lowers-contact-order
  - lem-blowup-separates-transverse-components
  - def-contact-order-regular-components
  - def-effective-cartier-divisor
  - def-cartier-divisor
  - lem-curve-closed-subsets-finite
  - def-reduction-of-scheme
  - def-integral-scheme
  - def-birational-morphism-schemes
  - lem-blowup-local-on-base-scheme
  - def-axiom-of-choice
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.4.I and 19.4.12; the sequence of blowups resolving a plane curve, pp. 392-394"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.34.1 and the strict-transform computations; regular embedded normal crossings in Section 31.35"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $C$ be a reduced projective plane curve over a field $k$ (equivalently, $C$ is a reduced hypersurface in $\mathbb P^2_k$; reducible $C$ is allowed) and let $S$ be the regular projective surface obtained from $\mathbb P^2_k$ by finitely many point blowups at closed points. Suppose $C$ is realized as the reduced strict transform of the original curve on $S$. Then there is a finite sequence of blowups of closed points of the current regular projective surface after which the following hold: (a) every irreducible component of the resulting strict transform $C^*$ is regular; (b) the total support of $C^*$ together with the exceptional curves is a regular embedded normal-crossing support: all its components are regular, every intersection of two distinct components is transverse (pairwise contact order at most one at each intersection point), and at most two components pass through any point of the regular ambient surface; (c) at a blowup centered at a closed point $p$ of multiplicity $m$ and residue degree $r=[\kappa(p):k]$, the strict transform $C'$ satisfies $\delta_k(C')=\delta_k(C)-r\,m(m-1)/2$, where $\delta_k$ is the normalization defect of the reduced curve ([[def-normalization-defect-of-reduced-curve]]); this identity is the exact statement used for termination, and the multiplicity $m$ is the $\mathfrak m_p$-adic order of a local reduced equation. This is regular embedded normal-crossing support over the residual residue fields; it does NOT assert that the components are smooth over an imperfect $k$, does not produce a relative SNC divisor with components smooth over $k$, and makes no claim about resolution of singularities in dimension greater than two.

## Facts & Assumptions

**Given:** The Axiom of Choice, a reduced projective plane curve $C$ over $k$, a regular projective surface $S$ obtained from $\mathbb P^2_k$ by finitely many point blowups, and $C$ realized as the reduced strict transform on $S$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[thm-blowup-regular-surface-closed-point-regular]]: Point blowups of a regular surface at closed points are regular of pure dimension two; the exceptional curve is an effective Cartier divisor.

[F2] [[thm-blowup-projective]]: Every blowup is proper over its base; a point blowup of a projective surface is projective.

[F3] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: At a point of multiplicity $m$, the total transform of a reduced curve is $C'+mE$ with $C'$ the strict transform, and $C'$ is obtained by dividing a local equation by the $m$-th power of an exceptional equation.

[F4] [[lem-blowup-multiplicity-euler-characteristic-drop]]: For a reduced curve $C$ on a regular proper surface with an ample invertible sheaf, a point blowup at a closed point of multiplicity $m$ and residue degree $r$ gives $\delta_k(C')=\delta_k(C)-r\binom{m}{2}$.

[F5] [[def-normalization-defect-of-reduced-curve]]: $\delta_k(C)=\dim_kH^0(C,\mathcal Q_C)$ is a nonnegative integer, finite for curves of finite type over $k$.

[F6] [[lem-normalization-unchanged-under-finite-birational-curve-map]]: A finite birational morphism of reduced curves induces an isomorphism of their normalizations; the strict transform $C'\to C$ is proper and quasi-finite, hence finite by [[thm-proper-quasi-finite-is-finite]].

[F7] [[lem-blowup-lowers-contact-order]]: Blowing up a point of contact order $n\ge1$ between two regular curves: for $n=1$ the strict transforms meet $E$ at distinct points and are disjoint near $E$; for $n>1$ they meet at the point of $E$ of their common tangent direction with contact order $n-1$, and every strict transform meets $E$ with order one.

[F8] [[lem-blowup-separates-transverse-components]]: If $s\ge2$ pairwise transversal regular curves pass through the blown-up point, their strict transforms meet $E$ at $s$ distinct points, no three support curves meet at a point, and the only new intersections are transverse intersections with $E$.

[F9] [[def-contact-order-regular-components]]: Contact order is the length of the quotient of the local ring of one curve by the ideal of the other; it is one exactly for a transversal crossing of two regular branches, and at least two otherwise.

[F10] [[lem-curve-closed-subsets-finite]]: A curve and the intersection of two distinct curve components have finitely many singular and intersection points in the relevant finite-type setting, so each blowup round involves finitely many centers.

## Proof

1.1 The ambient surface $S$ is regular of pure dimension two and projective over $k$ by hypothesis and [F1], [F2]; every blowup $\pi\colon S'\to S$ in the sequence below is again a regular projective surface by [F1] and [F2], so the construction may be iterated. Since $C$ is realized as the reduced strict transform on $S$, [F3] applies at every center: the strict transform is obtained by dividing a local reduced equation by the appropriate power of an exceptional equation, and its scheme-theoretic support is the curve we blow up further. [F1, F2, F3, given]

2.1 Termination of the regularization stage. Let $p$ be a closed point of the current surface at which the strict transform $\widetilde C$ is not regular, and let $m\ge2$ be the multiplicity of a local reduced equation; the residue degree $r=[\kappa(p):k]$ is at least one. Blowing up $p$ yields, by [F4] applied to the reduced curve $\widetilde C$ on the regular proper surface with the ample invertible sheaf of [F2], $\delta_k(\widetilde C')=\delta_k(\widetilde C)-r\binom{m}{2}$, a strict decrease because $m\ge2$; by [F5] the defect is a nonnegative integer, so only finitely many such blowups at singular points are possible along any branch of the construction. Each blowup at a singular point is legitimate (step 1.1) and keeps every component reduced by [F3]; regularizing the finitely many singular points of the current curve, and iterating the strictly decreasing invariant, terminates after finitely many blowups with a strict transform whose components are all regular, which is clause (a). [F3, F4, F5, F10, step 1.1]

3.1 Crossing stage reduction. Once all components are regular, let $N\ge1$ be the maximum contact order among intersecting pairs of distinct components, computed as in [F9]; the number of intersection points is finite by [F10]. While $N>1$, let $R_N$ be the finite set of points at which some pair has contact order exactly $N$, and blow up every point of $R_N$: by [F7](2) a pair of contact order $N>1$ at such a point is replaced by a pair of contact order $N-1$ at the point of $E$ of their common tangent direction, and every strict transform meets $E$ transversally (order one); pairs of smaller contact order and the newly created intersections with $E$ have order at most $N-1$ or one. Hence after the finitely many blowups of the round the maximum pairwise contact order strictly decreases, and since it is a nonnegative integer and each round is finite by [F10], after finitely many rounds we reach $N\le1$, i.e. all pairwise intersections are transverse. [F7, F9, F10, step 2.1]

4.1 Multiple points. With $N\le1$, blow up each point through which $s\ge3$ regular components pass. By [F8] the strict transforms meet $E$ in $s$ distinct points, no three support curves pass through any point of the new surface, and the only new intersections are the transverse intersections with $E$; hence the number of points where at least three components meet strictly decreases, no new such point is created, and the process terminates after finitely many blowups. The result is a finite sequence (steps 2.1-4.1) after which all components are regular, all pairwise intersections are transverse, and at most two components pass through any point of the ambient regular surface; together with the effective Cartier property of the components and of $E$ from [F1] and [F3], this is the regular embedded normal-crossing support of clause (b). [F3, F8, F9, step 3.1]

5.1 Clause (c) is the invariant used in steps 2.1-4.1, stated separately: at a center $p$ of multiplicity $m$ and residue degree $r$, the strict transform satisfies $\delta_k(C')=\delta_k(C)-r\,m(m-1)/2$ by [F4], and the strict-transform equation $C'+mE$ is [F3]. The identity is meaningful because the strict transform $\widetilde C'\to\widetilde C$ is proper and quasi-finite, hence finite, so [F6] identifies the normalizations of the two curves and the defect is computed on the same normal model; the multiplicity is the $\mathfrak m_p$-adic order of a local reduced equation by [F3]. The sequence constructed in steps 2.1-4.1 is finite and consists of point blowups of regular projective surfaces, and no smoothness of the components over an imperfect field and no statement in dimension greater than two is asserted. [F3, F4, F6, step 4.1] ∎
