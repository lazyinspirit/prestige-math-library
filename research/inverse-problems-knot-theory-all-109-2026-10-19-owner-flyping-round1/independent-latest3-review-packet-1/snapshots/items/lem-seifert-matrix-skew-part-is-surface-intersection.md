---
id: lem-seifert-matrix-skew-part-is-surface-intersection
kind: lemma
title: "The skew part of a Seifert matrix is the surface intersection form"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - def-oriented-seifert-surface
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-linking-number-equals-signed-intersection
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - thm-transversality-homotopy-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - thm-transverse-preimage-for-manifolds-with-boundary
  - lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
  - def-oriented-intersection-number
  - def-local-oriented-intersection-sign
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented embedded circle in the oriented standard three-sphere, let $F$ be a connected compact smooth oriented embedded surface with boundary $K$, and let $a_1,\ldots,a_{2g}$ be any ordered integral basis of $H_1(F;\mathbb Z)$ with Seifert matrix $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Let $J_F$ be the matrix of the algebraic intersection form on $F$, with a transverse intersection of oriented curves $u,v$ counted positively exactly when their ordered tangent vectors form a positive basis of $TF$. Then $V-V^T=J_F$. The matrix $J_F$ is skew-symmetric and unimodular; when $a_1,\ldots,a_{2g}$ is a standard handle basis, it is a direct sum of blocks $\begin{psmallmatrix}0&1\\-1&0\end{psmallmatrix}$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive normal and Seifert-matrix convention]]

[[lem-seifert-pairing-well-defined|Linking, push-off, and cycle-representative independence]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The standard handle normal form for compact surfaces with boundary]]

[[def-oriented-intersection-number|Algebraic intersection number]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, a connected compact oriented spanning surface $F$, its oriented normal bicollar, and an integral basis of $H_1(F;\mathbb Z)$.

[A1] Full AC is the choice-function axiom and supplies the stated countable-choice interfaces. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A compact genus-$g$ surface with one boundary component has first homology free of rank $2g$ and a standard handle basis. In that basis the handle curves meet in one positive/negative pair per handle and all other pairs are disjoint. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] The Seifert pairing is bilinear on homology classes; linking is symmetric and positive push-offs may move through the positive normal collar. [[lem-seifert-pairing-well-defined]]

[F3] The positive normal is oriented so that $(n,u,v)$ is a positive ambient basis whenever $(u,v)$ is a positive tangent basis of $F$. [[def-knot-seifert-pairing-and-matrix]]

[F4] The algebraic intersection sign is the local orientation sign of the ordered tangent bases, with the curve factor and surface factor ordered as specified. [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]]

[F5] A basis curve $a_j$ is an oriented knot and therefore has a supplied compact oriented spanning surface; with a regular link diagram, linking with that curve is the signed intersection with the surface. [[thm-every-oriented-knot-bounds-a-seifert-surface]], [[thm-linking-number-equals-signed-intersection]], [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F6] Countable-choice transversality permits the spanning-surface intersections below to be made transverse, and their intersection traces have the stated boundary; the signed boundary count of a compact oriented one-manifold is zero. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[thm-transverse-preimage-for-manifolds-with-boundary]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

## Proof

1.1 **Compare positive and negative pushes in a handle basis.** Choose the standard simple handle basis $b_1,\ldots,b_{2g}$ from [F1] and write its Seifert matrix as $V^0$. Fix $b_i,b_j$ in transverse position and let $C_i=b_i\times[-\epsilon,\epsilon]$ be the product strip, oriented so that $\partial C_i=b_i^+-b_i^-$. By [F5] choose a compact oriented spanning surface $\Sigma_j$ for $b_j$ and a regular diagram for the relevant link pairs. Use [F6] to put $C_i$ and $\Sigma_j$ in transverse position while retaining their boundary curves; then $C_i\cap\Sigma_j$ is a compact oriented one-manifold. Its boundary contributions along $\partial C_i$ are the signed intersections of $b_i^+$ and $b_i^-$ with $\Sigma_j$; its remaining boundary points lie on $C_i\cap\partial\Sigma_j=C_i\cap b_j$. At such a point, if $u,v$ are the positive tangents to $b_i,b_j$ and $n$ is the positive normal to $F$, the strip tangent basis is $(n,u)$ and adjoining $v$ gives $(n,u,v)$, so by [F3] the sign is the surface sign of $(u,v)$; [F4] fixes this ordered intersection convention. Thus the signed contribution from $C_i\cap b_j$ is $b_i\cdot_F b_j$. The outward-normal-first boundary signs and [F6] give total signed boundary zero, so the two endpoint counts differ by exactly $b_i\cdot_F b_j$. Applying [F5] to the supplied link pairs yields $$V^0_{ij}-\operatorname{lk}(b_i^-,b_j)=b_i\cdot_F b_j.$$ [A1, F1, F3, F4, F5, F6, given, construct]

1.2 The pair $(b_i^-,b_j)$ can be translated through the normal collar by $+\epsilon$ while keeping the two curves disjoint; it becomes $(b_i,b_j^+)$. Hence $\operatorname{lk}(b_i^-,b_j)=\operatorname{lk}(b_i,b_j^+)$ by [F2]. Symmetry of linking in [F2] changes the latter to $\operatorname{lk}(b_j^+,b_i)=V^0_{ji}$. Therefore step 1.1 gives $V^0_{ij}-V^0_{ji}=b_i\cdot_F b_j$. [F2, step 1.1, given]

2.1 **Identify the intersection matrix in every basis.** In the standard handle basis of [F1], each handle pair contributes the block $\begin{psmallmatrix}0&1\\-1&0\end{psmallmatrix}$, with zero entries between distinct handles; call this matrix $J_0$. Step 1.2 proves $V^0-(V^0)^T=J_0$. For any other integral basis $a_j=\sum_i b_iP_{ij}$, the change matrix $P$ lies in $\mathrm{GL}_{2g}(\mathbb Z)$. Bilinearity of the Seifert pairing [F2] and of surface intersection gives $V=P^TV^0P$ and $J_F=P^TJ_0P$. Hence $V-V^T=J_F$, $J_F^T=-J_F$, and $\det J_F=(\det P)^2\det J_0=1$. If $g=0$, the matrices are empty and the determinant is the empty product $1$. [F1, F2, step 1.2, algebra] ∎

## Remarks

The orientation sign can be checked in a local oriented chart: when the positive normal is the first vector, the strip orientation $(n,u)$ and the surface intersection orientation $(u,v)$ give the same sign. The proof uses that orientation check in step 1.1; the schematic below is not a proof premise.

$$
\begin{tikzpicture}[scale=0.82,>=stealth]
  \draw[fill=gray!12] (-2,-1.15) rectangle (2,1.15);
  \node at (1.55,0.88) {$F$};
  \draw[thick,->] (-1.4,0) -- (1.4,0) node[right] {$u$};
  \draw[thick,->] (0,-0.8) -- (0,0.8) node[above] {$v$};
  \fill (0,0) circle (1.6pt);
  \draw[blue,thick] (-1.15,0.35) -- (1.15,0.35);
  \draw[blue,thick] (-1.15,-0.35) -- (1.15,-0.35);
  \draw[blue,dashed] (-1.15,0.35) -- (-1.15,-0.35);
  \draw[blue,dashed] (1.15,0.35) -- (1.15,-0.35);
  \draw[->,red,thick] (1.65,0.35) -- (1.65,0.85) node[above] {$n$};
  \node[blue] at (0,0.55) {$a_i^+$};
  \node[blue] at (0,-0.55) {$a_i^-$};
  \node[red] at (-1.45,0.75) {$a_i\times[-\epsilon,\epsilon]$};
\end{tikzpicture}
$$

Here $F$ is the gray patch, $u$ and $v$ are the ordered tangents at a transverse point, and the two blue levels are joined by the strip. The red arrow is the positive normal $n$; by definition $(n,u,v)$ agrees with the ambient orientation exactly when $(u,v)$ agrees with the surface orientation.
