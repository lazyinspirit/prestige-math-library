---
id: thm-resolution-plane-curves-by-point-blowups
kind: theorem
title: "Resolution of reduced plane curves by point blowups and the delta recurrence"
status: published
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
  - cor-blowup-birational-integral-scheme
  - def-blowup-fractional-ideal
  - lem-eventual-global-generation-coherent-twists
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-relative-proj-quasi-coherent-graded-algebra
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-blowup-projective
  - lem-blowup-lowers-contact-order
  - lem-blowup-separates-transverse-components
  - def-contact-order-regular-components
  - lem-regular-local-quotient-by-parameter-is-regular
  - def-effective-cartier-divisor
  - def-cartier-divisor
  - lem-curve-closed-subsets-finite
  - def-reduction-of-scheme
  - def-integral-scheme
  - def-birational-morphism-schemes
  - lem-blowup-local-on-base-scheme
  - lem-blowup-isomorphism-off-center
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
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.15 (Embedded resolution)"
      url: "https://stacks.math.columbia.edu/tag/0BI3"
      locator: "Lemmas 54.15.3, 54.15.4 and 54.15.6: contact descent and normal-crossing support; the delta recurrence is proved by the local suppliers here"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post-5a.json"
    content_sha256: "602e3bb26cd4b519a064fd15e29634fef70e2361a2b82a600c00fcead65057c9"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $C_0\subseteq\mathbb P^2_k$ be a reduced projective plane curve over a field $k$ (equivalently, a reduced hypersurface; reducible $C_0$ is allowed). Let $S$ be the regular projective surface obtained from $\mathbb P^2_k$ by finitely many point blowups at closed points, and let $C\subseteq S$ be the reduced strict transform of $C_0$. Then there is a finite sequence of blowups of closed points of the current regular projective surface after which the following hold: (a) every irreducible component of the resulting strict transform $C^*$ is regular; (b) the total support of $C^*$ together with the exceptional curves is a regular embedded normal-crossing support: all its components are regular, every intersection of two distinct components is transverse (pairwise contact order at most one at each intersection point), and at most two components pass through any point of the regular ambient surface; (c) at a blowup centered at a closed point $p$ of multiplicity $m$ and residue degree $r=[\kappa(p):k]$, the strict transform $C'$ satisfies $\delta_k(C')=\delta_k(C)-r\,m(m-1)/2$, where $\delta_k$ is the normalization defect of the reduced curve ([[def-normalization-defect-of-reduced-curve]]); this identity is the exact statement used for termination, and the multiplicity $m$ is the $\mathfrak m_p$-adic order of a local reduced equation, with $m=0$ when the center misses the current strict transform. This is regular embedded normal-crossing support over the residual residue fields; it does NOT assert that the components are smooth over an imperfect $k$, does not produce a relative SNC divisor with components smooth over $k$, and makes no claim about resolution of singularities in dimension greater than two.

## Facts & Assumptions

**Given:** The Axiom of Choice, a reduced projective plane curve $C_0\subseteq\mathbb P^2_k$ over $k$, a regular projective surface $S$ obtained from $\mathbb P^2_k$ by finitely many point blowups, and its current reduced strict transform $C\subseteq S$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[thm-blowup-regular-surface-closed-point-regular]]: Point blowups of a regular surface at closed points are regular of pure dimension two; the exceptional curve is an effective Cartier divisor.

[F2] [[thm-blowup-projective]]: Every finite-type ideal blowup is proper over its base. For an integral projective base, an ample twist makes the point ideal globally generated ([[lem-eventual-global-generation-coherent-twists]]); invertible rescaling preserves its relative Proj ([[def-blowup-fractional-ideal]]), and a finite degree-one generating family embeds it in relative projective space ([[def-relative-proj-quasi-coherent-graded-algebra]], [[thm-closed-subschemes-projective-space-homogeneous-ideals]]). Closed immersions remain closed after base change ([[lem-closed-immersion-affine-quotient-and-base-change]]).

[F3] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: At a point of multiplicity $m$, the total transform of a reduced curve is $C'+mE$ with $C'$ the strict transform, and $C'$ is obtained by dividing a local equation by the $m$-th power of an exceptional equation.

[F4] [[lem-blowup-multiplicity-euler-characteristic-drop]]: For a reduced curve $C$ on a regular proper surface with an ample invertible sheaf, a point blowup at a closed point of multiplicity $m$ and residue degree $r$ gives $\delta_k(C')=\delta_k(C)-r\binom{m}{2}$.

[F5] [[def-normalization-defect-of-reduced-curve]]: $\delta_k(C)=\dim_kH^0(C,\mathcal Q_C)$ is a nonnegative integer, finite for curves of finite type over $k$.

[F6] [[lem-normalization-unchanged-under-finite-birational-curve-map]]: A finite birational morphism of reduced curves induces an isomorphism of their normalizations; the strict transform $C'\to C$ is proper and quasi-finite, hence finite by [[thm-proper-quasi-finite-is-finite]].

[F7] [[lem-blowup-lowers-contact-order]]: Blowing up a point of contact order $n\ge1$ between two regular curves: for $n=1$ the strict transforms meet $E$ at distinct points and are disjoint near $E$; for $n>1$ they meet at the point of $E$ of their common tangent direction with contact order $n-1$, and every strict transform meets $E$ with order one.

[F8] [[lem-blowup-separates-transverse-components]]: If $s\ge2$ pairwise transversal regular curves pass through the blown-up point, their strict transforms meet $E$ at $s$ distinct points, no three support curves meet at a point, and the only new intersections are transverse intersections with $E$.

[F9] [[def-contact-order-regular-components]]: Contact order is the length of the quotient of the local ring of one curve by the ideal of the other; it is one exactly for a transversal crossing of two regular branches, zero for disjoint germs, and at least two for a positive nontransversal contact.

[F10] [[def-normalization-defect-of-reduced-curve]] and [[lem-normalization-defect-euler-and-lengths]]: The non-normal locus of a reduced finite-type curve is finite. Its complement is exactly the regular locus, by the normalization's regularity and its being an isomorphism there. For two distinct integral curve components their proper closed intersection is finite by [[lem-curve-closed-subsets-finite]].

[F11] [[lem-regular-local-quotient-by-parameter-is-regular]]: In a regular local ring an equation with nonzero cotangent class has regular quotient of dimension one less. Conversely, for a hypersurface in a two-dimensional regular local ring, a regular one-dimensional quotient has cotangent dimension one, so its equation has nonzero cotangent class.

## Proof

1.1 The ambient surface $S$ is regular of pure dimension two and projective over $k$ by hypothesis and [F1], [F2]; each point blowup is regular and proper by [F1, F2]. It is also projective over $k$: the current surface is integral, since it is obtained from the integral plane by point blowups ([[cor-blowup-birational-integral-scheme]]); choose an embedding of it into $\mathbb P^n_k$ and twist its coherent point ideal by a power $L$ of the hyperplane bundle. Finitely many global generators of $I\otimes L$ surject $\mathcal O[z_0,\ldots,z_N]$ onto $\bigoplus I^d\otimes L^d$, giving a closed embedding of the blowup into $\mathbb P^N_S$. This is closed in $\mathbb P^N_k\times\mathbb P^n_k$; the Segre map embeds the product as a closed subscheme of projective space. Indeed on each open $z_{ij}\ne0$ the rank-one minor equations solve $z_{ab}/z_{ij}=(z_{aj}/z_{ij})(z_{ib}/z_{ij})$, exactly the product affine chart, and these chart identifications glue. Thus iteration preserves all the required hypotheses. Since $C$ is realized as the reduced strict transform on $S$, [F3] applies at every center: the strict transform is obtained by dividing a local reduced equation by the appropriate power of an exceptional equation, and its scheme-theoretic support is the curve we blow up further. [F1, F2, F3, given]

2.1 Termination of the regularization stage. Let $p$ be a closed point of the current surface at which the strict transform $\widetilde C$ is not regular, and let $m$ be the order of its local reduced equation. The quotient criterion of [F11] shows that order one is equivalent to regularity of this curve germ; hence $m\ge2$; the residue degree $r=[\kappa(p):k]$ is at least one. Blowing up $p$ yields, by [F4] applied to the reduced curve $\widetilde C$ on the regular proper surface with the ample invertible sheaf of [F2], $\delta_k(\widetilde C')=\delta_k(\widetilde C)-r\binom{m}{2}$, a strict decrease because $m\ge2$; by [F5] the defect is a nonnegative integer, so only finitely many such blowups at singular points are possible along any branch of the construction. Each blowup at a singular point is legitimate (step 1.1) and keeps every component reduced by [F3]; regularizing the finitely many singular points of the current curve, and iterating the strictly decreasing invariant, terminates after finitely many blowups with a strict transform whose components are all regular, which is clause (a). [F3, F4, F5, F10, F11, step 1.1]

3.1 Crossing stage reduction. Every existing exceptional component remains regular under subsequent point blowups: at a point on a regular curve, choose parameters with its equation $y$; its strict transform is $T=0$ in $A[T]/(xT-y)$, with quotient $A/(y)$, and meets the new exceptional curve transversally. Thus after stage 2, consider the entire reduced support consisting of the regularized curve and all strict transforms of old exceptional curves. These components are regular and finite in number. The number of intersection points of this entire support is finite by [F10]. If there are no pairwise intersections, the crossing stage is finished and there are no multiple points to treat. Otherwise let $N\ge1$ be the maximum contact order among intersecting pairs of distinct components, computed as in [F9]. While $N>1$, let $R_N$ be the finite set of points at which some pair has contact order exactly $N$, and blow up every point of $R_N$: by [F7](2) a pair of contact order $N>1$ at such a point is replaced by a pair of contact order $N-1$ at the point of $E$ of their common tangent direction, and every strict transform meets $E$ transversally (order one); pairs of smaller contact order and the newly created intersections with $E$ have order at most $N-1$ or one. After each finite round, stop if the contact set is empty; otherwise its positive maximum strictly decreases. Since this maximum is a positive integer and each round is finite by [F10], after finitely many rounds either there are no intersections or their maximum is one. In both cases every remaining pairwise intersection is transverse. [F7, F9, F10, step 2.1]

4.1 Multiple points. Once every pairwise contact has order at most one, blow up each point through which $s\ge3$ regular components pass. Locally at each such point, [F8] applies after shrinking away from all other pairwise intersections, and its strict transforms meet the new exceptional curve in $s$ distinct points with no triple intersection over this center. Elsewhere the old support is unchanged, and the only new intersections are the transverse intersections with $E$; hence the number of points where at least three components meet strictly decreases, no new such point is created, and the process terminates after finitely many blowups. The result is a finite sequence (steps 2.1-4.1) after which all components are regular, all pairwise intersections are transverse, and at most two components pass through any point of the ambient regular surface; together with the effective Cartier property of the components and of $E$ from [F1] and [F3], this is the regular embedded normal-crossing support of clause (b). [F3, F8, F9, step 3.1]

5.1 Clause (c) is the invariant used in steps 2.1-4.1, stated separately: at a center $p$ of multiplicity $m$ and residue degree $r$, when $p$ lies on the curve, the strict transform satisfies $\delta_k(C')=\delta_k(C)-r\,m(m-1)/2$ by [F4]. When $p$ misses it, the blowup restricts to the identity on the curve by [[lem-blowup-isomorphism-off-center]], so its defect is unchanged and the same formula holds with $m=0$. For a center on the curve, the total-transform identity $\pi^*C=C'+mE$ is [F3]. The identity is meaningful because the strict transform $\widetilde C'\to\widetilde C$ is proper and quasi-finite, hence finite, so [F6] identifies the normalizations of the two curves and the defect is computed on the same normal model; the multiplicity is the $\mathfrak m_p$-adic order of a local reduced equation by [F3]. The sequence constructed in steps 2.1-4.1 is finite and consists of point blowups of regular projective surfaces, and no smoothness of the components over an imperfect field and no statement in dimension greater than two is asserted. [F3, F4, F6, step 4.1] ∎
