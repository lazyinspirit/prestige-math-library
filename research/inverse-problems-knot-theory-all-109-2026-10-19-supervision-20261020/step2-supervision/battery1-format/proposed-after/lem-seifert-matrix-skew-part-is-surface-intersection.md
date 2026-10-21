---
id: lem-seifert-matrix-skew-part-is-surface-intersection
kind: lemma
title: "The skew part of a Seifert matrix is the surface intersection form"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-parametric-transversality
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

Assume the Axiom of Choice. Let $K$ be a smooth oriented embedded circle in the oriented standard three-sphere, let $F$ be a connected compact smooth oriented embedded surface with boundary $K$, and let $a_1,\ldots,a_{2g}$ be any ordered integral basis of $H_1(F;\mathbb Z)$ with Seifert matrix $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Let $J_F$ be the matrix of the algebraic intersection form on $F$, with a transverse intersection of oriented curves $u,v$ counted positively exactly when their ordered tangent vectors form a positive basis of $TF$. Then $V-V^T=J_F$. The matrix $J_F$ is skew-symmetric and unimodular; when $a_1,\ldots,a_{2g}$ is a standard handle basis, it is a direct sum of blocks $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive normal and Seifert-matrix convention]]

[[lem-seifert-pairing-well-defined|Linking, push-off, and cycle-representative independence]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The standard handle normal form for compact surfaces with boundary]]

[[def-oriented-intersection-number|Algebraic intersection number]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, a connected compact oriented spanning surface $F$, its oriented normal bicollar, and an integral basis of $H_1(F;\mathbb Z)$.

[A1] Full AC is the choice-function axiom and supplies the stated countable-choice interfaces. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A compact genus-$g$ surface with one boundary component has first homology free of rank $2g$; after capping its boundary, the supplied oriented normal form is the polygon word $\prod_{h=1}^g[a_h,b_h]$. Step 1.1 constructs the actual smooth handle curves and their intersection matrix. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] The Seifert pairing is bilinear on homology classes; linking is symmetric and positive push-offs may move through the positive normal collar. [[lem-seifert-pairing-well-defined]]

[F3] The positive normal is oriented so that $(n,u,v)$ is a positive ambient basis whenever $(u,v)$ is a positive tangent basis of $F$. [[def-knot-seifert-pairing-and-matrix]]

[F4] The algebraic intersection sign is the local orientation sign of the ordered tangent bases, with the curve factor and surface factor ordered as specified. [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]]

[F5] A basis curve $a_j$ is an oriented knot and therefore has a supplied compact oriented spanning surface; with a regular link diagram, linking with that curve is the signed intersection with the surface. [[thm-every-oriented-knot-bounds-a-seifert-surface]], [[thm-linking-number-equals-signed-intersection]], [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F6] Under countable choice, transversality and relative transversality apply to closed embedded targets, with the relative hypotheses as stated. The boundary-preimage theorem identifies the endpoints after restriction to the original surface halves, and the signed boundary count of a compact oriented one-manifold is zero. Step 2.1 uses boundaryless punctured interiors with protected collars and endpoint neighbourhoods; its unfixed part is compact. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[thm-transverse-preimage-for-manifolds-with-boundary]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

[F7] Parametric transversality under countable choice gives a null exceptional set of slice parameters for a smooth family transverse to its target; the complement is dense in a positive-dimensional parameter ball. A smooth bump equal to one near a compact subset and supported in a chosen relatively compact open neighbourhood is supplied by the compact-set manifold bump theorem. Step 2.1 constructs the actual normalized-translation families, verifying their compact support, smallness, and transversality rather than attributing these extra conclusions to a transversality Statement. [[thm-parametric-transversality]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]

## Proof

1.1 **Construct the smooth handle basis and its intersection matrix.** Cap the single boundary component by a disk and apply [F1] to obtain the oriented polygon normal form $\prod_{h=1}^g[a_h,b_h]$; remove the capping disk to recover the one-boundary surface. In this model the $h$th handle has two standard core curves, one meridional and one longitudinal, which meet once. Choose their orientations so the ordered tangent pair is positive at that crossing; curves from distinct handles are disjoint. The finite chart and disk-band construction in [F1] realizes this model on the given smooth surface: draw the curves as finite piecewise-smooth arcs in its bands and smooth their finitely many corners in disjoint coordinate disks, leaving their crossings fixed. In the model the surface retracts to the graph of these $2g$ core generators, so their homology classes form an integral basis; the same is true on $F$. Their intersection matrix is therefore the block sum $J_0=\bigoplus_{h=1}^g\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, with zero entries between distinct handles. [F1, construct]

2.1 **Compare positive and negative pushes in the constructed handle basis.** Use the curves $b_i,b_j$ constructed in step 1.1 and let $C_i=b_i\times[-\epsilon,\epsilon]$ be the product strip, oriented by $(n,u)$ so that $\partial C_i=b_i^+-b_i^-$. Write $V^0$ for the Seifert matrix in this basis. By [F5] choose a compact oriented spanning surface $\Sigma_j$ for $b_j$, and choose regular diagrams for the resulting link pairs. For $i=j$ the desired skew-entry identity is $0=0$, and the diagonal surface-intersection entry is zero by the handle model in step 1.1; hence take $i\ne j$ in the intersection construction. The boundary curves $b_i^+,b_i^-,b_j$ are pairwise disjoint. First let $X=\operatorname{Int}\Sigma_j$ with inclusion $f:X\to S^3\subset\mathbb R^4$ and closed target $\partial C_i$. Choose an open collar $G$ of $b_j$ disjoint from this target and protect a smaller collar. Its complement $K=X\setminus G$ is compact. By [F7] choose a smooth $\chi:X\to[0,1]$, equal to one near $K$, compactly supported in a relatively compact open neighbourhood of $K$ avoiding the smaller collar. Then $\chi=0$ only where $f$ is already transverse. For $\|v\|<1/2$ define $\mathcal F(p,v)=(f(p)+\chi(p)v)/\|f(p)+\chi(p)v\|$. Where $\chi>0$ its parameter derivative is $\chi/\|f+\chi v\|$ times the tangent projection onto $TS^3$, hence surjective; where $\chi=0$, $d\chi=0$ and old transversality applies. Thus the family is transverse. By [F7] every small parameter ball has a transverse slice. Compact support and direct differentiation give uniform $C^1$ convergence to the inclusion. A sufficiently small slice therefore extends by the unchanged boundary to an embedded spanning surface: finite compact coordinate subcharts keep a differential lower bound near the diagonal, and the remaining compact pairs keep positive image separation. Denote this surface again by $\Sigma_j$; it is transverse to $\partial C_i$. Let $P=C_i\cap b_j$. These points are finite, and the tangent of $b_j$ is not in $TC_i$ there because the handle curves cross transversely in $F$. Consequently $C_i$ is already transverse to $\Sigma_j$ near $P$. It is also transverse near $\partial C_i\cap\Sigma_j$, since $\Sigma_j$ was made transverse to $\partial C_i$. Put $U=S^3\setminus b_j$ and $X=\operatorname{Int}C_i\setminus P$. The target $Z=\Sigma_j\setminus b_j$ is a closed embedded boundaryless submanifold of $U$: $\Sigma_j$ is compact and all its boundary was removed. The inclusion $X\to U$ is a map between boundaryless manifolds. Protect a closed inner collar of $\partial C_i$ and, at every point of $P$, a sufficiently small punctured closed disk neighbourhood. These are closed subsets of $X$, and the inclusion is already transverse to $Z$ on their neighbourhoods. Choose these neighbourhoods small enough to retain all the original endpoint data. For the inclusion $f:X\to U\subset S^3\subset\mathbb R^4$, choose an open protected region $G$ containing all boundary ends and punctured disks at $P$, on which $f$ is transverse to $Z$; protect smaller such regions. Then $K=X\setminus G$ is compact. Choose a relatively compact open $W\subset X$ containing $K$ and missing the smaller protected regions, and use [F7] to choose $\chi\in[0,1]$ equal to one near $K$, with compact support in $W$. Where $\chi=0$ old transversality holds. Use the explicit family $\mathcal F(p,v)=(f(p)+\chi(p)v)/\|f(p)+\chi(p)v\|$. As above, where $\chi>0$ the parameter derivative surjects onto $TS^3$ and where $\chi=0$ the old derivative is unchanged, so the total family is transverse to $Z$. The compact set $f(\operatorname{supp}\chi)$ has positive distance from $b_j$; choosing $v$ small enough that the uniform displacement is less than half that distance keeps the entire family in $U$. Parametric transversality and the dense-complement statement [F7] now give an arbitrarily small transverse parameter. Direct differentiation on the compact support gives uniform $C^1$ convergence. Finite compact coordinate subcharts and off-diagonal separation, as in the preceding phase, ensure embeddedness. The family is identically the original inclusion on smaller punctured endpoint disks and boundary collars, so extends by the identity at $P$ and across $\partial C_i$, fixes all endpoint intersection germs, and creates no new intersection with $b_j$. Thus the original compact strip and spanning surface have been made transverse, preserving exactly the required endpoint sets. No added double half or disjointness assertion about one is used. Using the boundary-preimage theorem gives a compact oriented one-manifold $C_i\cap\Sigma_j$ with boundary exactly $(\partial C_i\cap\Sigma_j)\cup(C_i\cap b_j)$. Orient its tangent line by requiring $(n_{C_i},n_{\Sigma_j},\ell)$ to be positive in $S^3$, where the first two vectors are the positive normals of the oriented surfaces. The local determinant check at an endpoint on $\partial C_i$ gives boundary sign minus the ordered boundary-curve/surface sign; at an endpoint on $\partial\Sigma_j$ it gives boundary sign plus the ordered surface/boundary-curve sign. Explicitly, the first local model is $C_i=\{z=0,x\ge0\}$ with basis $(\partial_x,\partial_y)$ and boundary tangent $-\partial_y$, and $\Sigma_j=\{y=0\}$ with basis $(\partial_x,\partial_z)$; the intersection tangent is inward $+\partial_x$. The second model is $\Sigma_j=\{z=0,x\ge0\}$ with basis $(-\partial_x,\partial_y)$ and boundary tangent $+\partial_y$, and $C_i=\{y=0\}$ with basis $(\partial_x,\partial_z)$; the intersection tangent is again inward $+\partial_x$. Reversing either surface orientation reverses both signs in its endpoint identity. Thus the zero signed boundary sum is $$0=-(\partial C_i\cdot\Sigma_j)+(C_i\cdot b_j),$$ and therefore $$b_i^+\cdot\Sigma_j-b_i^-\cdot\Sigma_j=C_i\cdot b_j.$$ If $u,v$ are the positive tangents to $b_i,b_j$ at one of their crossings and $n$ is the positive normal to $F$, then the strip tangent basis is $(n,u)$ and adjoining $v$ gives $(n,u,v)$. By [F3] this has the ambient sign of $(u,v)$ in $F$, and [F4] fixes the ordered intersection convention; hence $C_i\cdot b_j=b_i\cdot_F b_j$. Applying [F5] to the transverse link pairs yields $$V^0_{ij}-\operatorname{lk}(b_i^-,b_j)=b_i\cdot_F b_j.$$ [A1, F1, F3, F4, F5, F6, F7, given, construct]

2.2 The pair $(b_i^-,b_j)$ can be translated through the normal collar by $+\epsilon$ while keeping the two curves disjoint; it becomes $(b_i,b_j^+)$. Hence $\operatorname{lk}(b_i^-,b_j)=\operatorname{lk}(b_i,b_j^+)$ by [F2]. Symmetry of linking in [F2] changes the latter to $\operatorname{lk}(b_j^+,b_i)=V^0_{ji}$. Therefore step 2.1 gives $V^0_{ij}-V^0_{ji}=b_i\cdot_F b_j$. [F2, step 2.1, given]

3.1 **Identify the intersection matrix in every basis.** Step 2.2 proves $V^0-(V^0)^T=J_0$. For any other integral basis $a_j=\sum_i b_iP_{ij}$, the change matrix $P$ lies in $\mathrm{GL}_{2g}(\mathbb Z)$. Bilinearity of the Seifert pairing [F2] and of surface intersection gives $V=P^TV^0P$ and $J_F=P^TJ_0P$. Hence $V-V^T=J_F$, $J_F^T=-J_F$, and $\det J_F=(\det P)^2\det J_0=1$. If $g=0$, the matrices are empty and the determinant is the empty product $1$. [F1, F2, step 1.1, step 2.2, algebra] ∎
## Remarks

The orientation sign can be checked in a local oriented chart: when the positive normal is the first vector, the strip orientation $(n,u)$ and the surface intersection orientation $(u,v)$ give the same sign. The proof uses that orientation check in step 2.1; the schematic below is not a proof premise.

```tikz
\begin{tikzpicture}[scale=0.82,>=stealth]
  \draw[fill=gray!12] (-2,-0.65) -- (1.2,-1.15) -- (2,0.65) -- (-1.2,1.15) -- cycle;
  \node at (1.45,0.85) {$F$};
  \draw[thick,->] (-1.25,0) -- (1.15,0) node[right] {$u$};
  \draw[thick,->] (0,-0.6) -- (0.45,0.65) node[above] {$v$};
  \fill (0,0) circle (1.6pt);
  \node[red] at (-1.35,0.72) {$\odot\,n$};
  \node at (0,-1.55) {$F\text{ tangent plane}$};
  \begin{scope}[xshift=5.2cm]
    \draw[thick] (0,0) -- (2.8,0) node[right] {$F$};
    \draw[->,red,thick] (1.4,-0.9) -- (1.4,0.95) node[above] {$n$};
    \draw[blue,thick] (0.55,0.58) -- (2.25,0.58) node[right] {$a_i^+$};
    \draw[blue,thick] (0.55,-0.58) -- (2.25,-0.58) node[right] {$a_i^-$};
    \draw[thick] (0.55,0) -- (2.25,0) node[right] {$a_i$};
    \node at (1.4,-1.3) {$\text{normal coordinate}$};
  \end{scope}
\end{tikzpicture}
```

The left panel places $u,v$ in the tangent plane $F$ and marks $n$ as the positive normal out of the page. The right panel shows the normal coordinate: the Seifert push-offs lie on opposite sides of $F$. The picture is schematic; by definition $(n,u,v)$ is positively oriented exactly when $(u,v)$ agrees with the surface orientation.
