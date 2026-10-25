---
id: lem-finite-tangent-zero-count-and-inward-boundary-sum-without-general-thom-existence
kind: lemma
title: Finite tangent index count and inward boundary sum
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
- thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
- thm-morse-functions-and-handle-decompositions-correspond
- lem-a-handle-decomposition-gives-a-relative-cw-complex
- prop-singular-chains-and-homology-are-covariantly-functorial
- def-countable-choice-principle-for-foliation-pair
- def-induced-boundary-orientation
- def-isolated-zero-and-local-index-of-a-vector-field
- thm-index-of-a-nondegenerate-vector-field-zero
- def-euler-characteristic-of-a-finite-cw-complex
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- thm-morse-sard-for-euclidean-maps
- lem-c2-inverses-and-scalar-return-roots
- def-oriented-real-vector-bundle-and-oriented-frame-bundle
- thm-euler-poincare-formula-for-finite-cw-complexes
- def-degree-of-a-circle-loop
- cor-degree-descends-to-circle-loop-classes
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §§7-8, printed pp. 19-28; finite local repairs and exact adapters supplied in this strategy
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; actual embedded versus universal-cover simple cap distinction retained; new local constructions
      supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$. For a compact C² oriented region W in a closed oriented smooth three-manifold, with
oriented C¹ plane bundle E tangent to every boundary component and one common inward
transverse direction, the finite sum of boundary Euler characteristics is zero. For a
finitely cellulated closed oriented C² surface, a C¹ tangent section with isolated
nondegenerate zeros has total index V−E+F.

## Facts & Assumptions

**Given:** (i) A compact oriented C² region $W$ in a closed oriented smooth three-manifold, an oriented C¹ rank-two plane bundle $E$ tangent to every component of $\partial W$, and one common inward transverse direction for $E$ along $\partial W$; (ii) a closed oriented finitely cellulated C² surface $S$ with $V$ vertices, $E$ edges and $F$ faces and a C¹ tangent section with isolated nondegenerate zeros.

[F1] For a smooth vector field with an isolated zero $p$, the local index $\operatorname{ind}_p$ is the degree of the normalized field on a small sphere, and at a nondegenerate zero it equals the sign of the determinant of the derivative ([[def-isolated-zero-and-local-index-of-a-vector-field]], [[thm-index-of-a-nondegenerate-vector-field-zero]]). For C¹ sections use the same normalized-circle degree: at a nondegenerate zero, $s(x)=Ax+o(|x|)$, and the straight homotopy to $Ax$ on a small circle is nonzero because $|Ax|\ge\|A^{-1}\|^{-1}|x|$. Thus the determinant formula applies at this regularity too.

[F2] A $C^r$ map $f:U\to\mathbb R^n$ from an open $U\subseteq\mathbb R^m$ has null critical value set when $r>\max\{m-n,0\}$ ([[thm-morse-sard-for-euclidean-maps]]).

[F3] For a finite CW complex, the Euler characteristic equals $\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$, and for a surface this alternating sum is the cell count $V-E+F$ ([[thm-euler-poincare-formula-for-finite-cw-complexes]], [[def-euler-characteristic-of-a-finite-cw-complex]]).

[F4] An orientation of a real rank-two bundle is a continuous fiberwise orientation, and a fiberwise invertible bundle map is orientation-preserving when it carries the selected orientation to the selected orientation; in oriented frames its matrices have positive determinant ([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F5] A $C^2$ map with invertible derivative has a $C^2$ local inverse, and a scalar $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root ([[lem-c2-inverses-and-scalar-return-roots]]).

[F6] Every compact subset of an oriented C² surface lies in the interior of a compact finitely cellulated subsurface, supplied by finite polygon reduction ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]); the use of this finite cellulation is made in step 4.1 below.

[F7] For an oriented manifold with boundary the boundary orientation is the outward-normal-first orientation: an outward vector first, followed by a positive boundary frame, is a positive frame of the ambient tangent space ([[def-induced-boundary-orientation]]).

[F8] A compact $C^2$ surface has a finite $C^2$ diffeomorphism to a smooth carrier ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]); it has an adapted excellent Morse function and finite handle presentation under $\mathrm{AC}_\omega$ ([[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[thm-morse-functions-and-handle-decompositions-correspond]]). The handles give a finite CW model ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]), and homeomorphisms preserve singular homology ([[prop-singular-chains-and-homology-are-covariantly-functorial]]).

## Proof

**Proof technique:** direct.


1.1 By [F8] choose a $C^2$ diffeomorphism $\psi:S\to\Sigma$ to a compact smooth oriented carrier and an excellent Morse function on $\Sigma$, with finitely many critical points and a smooth gradient section. At an index-$\lambda$ point the gradient's derivative is the Hessian up to a positive metric isomorphism, so its index is $(-1)^\lambda$ by [F1]. Pull the section back by $D\psi^{-1}$ to a $C^1$ tangent section $s_0$ on $S$. At a zero its derivative is conjugate to the old derivative; differentiating the bundle map contributes no extra term because the section value is zero. Hence the same nondegenerate zeros and indices occur. The smooth handle CW model gives $\sum_p(-1)^{\lambda(p)}=\chi(\Sigma)$ by [F3], and homology functoriality under $\psi$ gives $\chi(\Sigma)=\chi(S)=V-E+F$ for the original topological cellulation. No differentiable handle per original topological cell is asserted. [F1, F3, F8, construct]

1.2 The ambient and plane orientations coorient the normal line of $E$. Finite chart bumps give a C¹ positive transverse field $V$ near $W$, inward along its boundary, and a positive annihilator $\omega$ of $E$. Approximate their coefficients in finitely many ambient charts by smooth coefficients and patch with smooth bumps. Uniformly small errors preserve transversality and inwardness, giving smooth $V,\omega'$ with $\omega'(V)>0$. Put $E'=\ker\omega'$ and orient it so projection along $V$ gives an orientation-preserving bundle isomorphism $E\to E'$. This is invertible because both planes complement the same line. [F4, construct]

1.3 Finite smooth bump multiples of local frames of $E'$ span each fiber over $W$. Their parameterized linear combination $s_a$, $a\in\mathbb R^P$, has a fiber-surjective parameter derivative. Solving for two parameters in each frame shows that its universal zero set over C² $W$ is a C² manifold of dimension $P+1$, with boundary the zero set over $\partial W$, of dimension $P$. Apply F2 to the parameter projection in interior and boundary charts: C² suffices for dimension difference one, and C¹ suffices on the boundary. Countable chart covers and null unions use the stated countable choice. A common regular parameter gives a section transverse to zero on $W$ and on $\partial W$. Its zero set $Z$ is a compact oriented C² one-manifold, with boundary $Z\cap\partial W$. Subdivide a finite oriented interval-chart cover; its paired internal endpoints cancel, giving total signed boundary count zero. [F2, F4, construct]

2.1 Compare $s_0$ with a C¹ tangent section $s_1$ having isolated nondegenerate zeros. Both zero sets are finite, being closed and discrete in compact $S$. Refine a finite chart cellulation and move its graph slightly to miss both zero sets, with every face inside a tangent trivialization. Give $TS$ a C¹ metric by finite chart bumps, and use oriented orthonormal frames. On the graph the unit-section ratio $r=(s_1/|s_1|)(s_0/|s_0|)^{-1}$ is a well-defined circle map independent of the frame, since frame changes are rotations. In each face remove small disks about its zeros and cut the remaining region into finitely many disks. Continuous argument increments cancel on paired cut edges, so the boundary winding of each section equals the sum of its local indices. Their difference is the winding of $r$. Summing over all faces cancels every edge increment of $r$ with its reversed occurrence, because $S$ has no boundary. The total index sums agree. This is the circle-degree and lifting calculus of [[def-degree-of-a-circle-loop]] and [[cor-degree-descends-to-circle-loop-classes]]; it requires no C² Sard theorem for a C¹ homotopy. [F1, F4, step 1.1, construct]

2.2 The signs are uniform on each connected component of $W$: orienting $E$ by the rule that a positive frame of $E$ followed by the $\omega'$-positive direction $V$ is a positive frame of $TW$, the inwardness of $V$ gives $V$ a strictly negative outward-normal component at every boundary point, so comparison with the outward-normal-first rule [F7] shows that this induced orientation of $E|_C$ is the negative of the boundary orientation of $C$ on every component; on a connected component of $W$ the given orientation of $E$ either agrees with the induced orientation at every point or disagrees at every point, so $\varepsilon_C$ is one constant over the boundary components of each connected component of $W$. [F4, F7, step 1.2, algebra]

3.1 Combining steps 1.1 and 2.1, every C¹ tangent section of a finitely cellulated closed oriented C² surface with isolated nondegenerate zeros has total index $V-E+F$, and [F3] identifies this count with the Euler characteristic of the cellulation. [F3, step 1.1, step 2.1]

4.1 On a boundary component $C$ pull $s_a$ back along $E\to E'$ to a C¹ section of $TC$ with nondegenerate zeros. At a zero, differentiating this bundle isomorphism adds no term from the zero section value, so corresponding fiber frames give the same signed determinant. F6 supplies a finite cellulation of closed $C$. Its ordinary tangent-index sum is $\chi(C)$ by step 3.1; with the given fiber orientation of $E$ rather than the boundary tangent orientation, the signed zero count is $\varepsilon_C\chi(C)$. [F1, F4, F6, F7, step 1.2, step 1.3, step 3.1]

5.1 At a boundary zero take coordinates with $W=\{x_3\le0\}$ and outward normal $\partial_3$, and an oriented frame of $E'$. The boundary-coordinate derivative $A$ of the section is invertible. Solving for those two coordinates makes the zero curve a graph over $x_3$; its orientation compares with the positive $x_3$ direction by $\operatorname{sign}\det A$. Its endpoint sign is therefore the signed boundary-section zero count of step 4.1, up to one fixed orientation convention shared by all endpoints. By step 2.2, $\varepsilon_C=\varepsilon$ on every boundary component of one connected component of $W$. Zero signed boundary count gives $0=\varepsilon\sum_C\chi(C)$ there. Add over the finitely many region components. Empty boundaries contribute zero, and steps 1.1–2.1 give the closed-surface assertion. [F1, F4, F5, F7, step 1.3, step 2.2, step 4.1] ∎