---
id: lem-surjection-kernel-bundle
kind: lemma
title: Kernels of surjections of vector bundles
status: published
domain: mathematics
deps:
  - math:def-locally-free-sheaf-finite-rank
  - math:def-kernel-cokernel-image-sheaves
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-residue-field-scheme-point
  - math:lem-hh-finite-spanning-list-contains-a-basis
  - math:cor-square-matrix-invertible-iff-determinant-is-a-unit
  - math:def-prime-spectrum-and-vanishing-sets
  - math:lem-zariski-closed-set-axioms
  - math:thm-sections-basic-open-affine-scheme
  - math:def-scheme
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:def-module-on-ringed-space
  - math:thm-any-two-finite-bases-have-the-same-size
dependency_roles:
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:lem-hh-finite-spanning-list-contains-a-basis: mathematical-premise
  math:cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:lem-zariski-closed-set-axioms: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
  math:def-scheme: mathematical-premise
  math:lem-distinguished-open-refinement-at-a-point: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:thm-any-two-finite-bases-have-the-same-size: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $X$ be a scheme and $f:E\to F$ a surjective morphism of finite locally free $\mathcal O_X$-modules. Then $f$ splits locally and $\ker f$ is finite locally free, with rank function $\operatorname{rank}E-\operatorname{rank}F$.

In particular, if $E$ has constant rank $r$ and $s:E\to\mathcal O_X$ is a morphism, let $I=\operatorname{im}s\subseteq\mathcal O_X$ and let $U=X\setminus V(I)$, where $V(I)$ is the closed subset defined locally by the coefficients of $s$. Then $\ker(s|_U)=(\ker s)|_U$ is a vector bundle of rank $r-1$ on $U$; if $r=0$, this assertion is understood on the empty set $U$.

## Facts & Assumptions
[F1] By [[math:def-locally-free-sheaf-finite-rank]], a finite locally free module has, near each point, a finite free basis; its rank is independent of the chosen chart. A vector bundle here means a finite locally free $\mathcal O_X$-module.

[F2] By [[math:def-kernel-cokernel-image-sheaves]], kernels of module sheaves are computed sectionwise, while the image sheaf is the sheafification of the sectionwise image. These constructions carry their induced $\mathcal O_X$-module structures.

[F3] By [[math:thm-exactness-of-sheaves-stalkwise]], exactness of sheaves of abelian groups can be checked on stalks. Applied to the underlying abelian sheaves, a morphism of module sheaves is surjective exactly when it is surjective on every stalk.

[F4] By [[math:def-residue-field-scheme-point]], $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$; on an affine chart $\operatorname{Spec}A$ with $x=\mathfrak p$, this is canonically $\operatorname{Frac}(A/\mathfrak p)$.

[F5] By [[math:lem-hh-finite-spanning-list-contains-a-basis]], a finite spanning list over any field contains a basis, without a choice principle.

[F6] By [[math:cor-square-matrix-invertible-iff-determinant-is-a-unit]], a positive-sized square matrix over a commutative ring is invertible exactly when its determinant is a unit.

[F7] On $\operatorname{Spec}A$, $V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$ by [[math:def-prime-spectrum-and-vanishing-sets]], and these sets are Zariski closed by [[math:lem-zariski-closed-set-axioms]].

[F8] By [[math:thm-sections-basic-open-affine-scheme]], $\Gamma(D(a),\mathcal O_X)=A_a$ on an affine chart $\operatorname{Spec}A$. In particular, the restriction of $a$ to $D(a)=\operatorname{Spec}A\setminus V((a))$ is a unit, with inverse $1/a$.

[F9] By [[math:def-scheme]], a scheme is a locally ringed space in which each point has an open affine neighbourhood with its restricted structure sheaf.

[F10] By [[math:lem-distinguished-open-refinement-at-a-point]], every point of a Zariski-open subset of an affine spectrum has a distinguished-open neighbourhood contained in that subset.

[F11] By [[math:lem-spectrum-localization-open-immersion]], $D(b)$ in $\operatorname{Spec}B$, with its restricted structure sheaf, is isomorphic to $\operatorname{Spec}(B_b)$ as a locally ringed space.

[F12] By [[math:def-module-on-ringed-space]], module-sheaf morphisms are sectionwise linear and commute with restriction. Restriction to an open subset retains the same sections and maps on its open subsets. A local splitting of $f$ means a module-sheaf morphism $t$ on an open neighbourhood with $ft=\mathrm{id}$ there.

[F13] By [[math:thm-any-two-finite-bases-have-the-same-size]], any two finite bases of a vector space over a field have the same number of elements. In particular, a basis extracted from a finite spanning list of $k^m$ has $m$ elements, by comparison with the standard coordinate basis.

## Proof
**Given:** A scheme $X$ and a surjection $f:E\to F$ as in the statement.

**Goal:** Construct local splittings and bases for the kernels, and apply the result to $s$ on $U$.

1.1 Fix $x\in X$. By [F1], choose trivialization opens for $E$ and $F$ containing $x$, and by [F9] choose an affine open $W=\operatorname{Spec}B$ containing $x$. Their intersection is open in $W$. By [F10], it contains a distinguished open $D(b)$ containing $x$; by [F11], this open, with its restricted structure sheaf, is the affine scheme $\operatorname{Spec}A$ for $A=B_b$. Restrict both frames to this common affine neighbourhood, with ranks $n$ and $m$. By [F12], the images of the frame vectors under $f$ have coefficients in $\Gamma(\operatorname{Spec}A,\mathcal O_X)=A$ by [F8] with the element $1$, and the same matrix describes $f$ on smaller opens by restriction. By [F3], the stalk map is surjective. Reducing its coefficients modulo $\mathfrak m_x$ preserves surjectivity: lift any vector over $\kappa(x)$ to $\mathcal O_{X,x}^m$ and then lift it through the stalk map. Thus the columns of its matrix over the field $\kappa(x)$ span $\kappa(x)^m$. For $m>0$, [F5] selects a sublist forming a basis, and [F13] shows that this sublist has $m$ columns; their square matrix is invertible, so [F6] gives a determinant nonzero in $\kappa(x)$. This is an $m\times m$ minor of the original matrix whose determinant $a\in A$ does not belong to the prime corresponding to $x$, by [F4]. On $D(a)$ that determinant is a unit by [F8], and the selected square submatrix has an inverse by [F6]. Permuting the basis of $E$ and applying this inverse in the selected coordinates gives a right inverse $t:F\to E$. For $m=0$, use the empty minor with determinant $1$ and the unique map $t:0\to E$; it is already a right inverse. In particular $m\le n$. [given, F1, F3, F4, F5, F6, F8, F9, F10, F11, F12, F13, construct]

2.1 On that neighbourhood, $E=\ker f\oplus t(F)$: every local section $e$ equals $(e-tf(e))+tf(e)$, and the intersection is zero since $ft$ is the identity. More explicitly, for each of the unselected basis vectors $e_j$, put $k_j=e_j-tf(e_j)$. These are kernel sections by [F2]. Their unselected coordinates are the corresponding standard coordinate vectors, because $t$ takes values in the selected coordinates. They are therefore independent. Every kernel section is a combination of the $k_j$: after subtracting the combination with its unselected coordinates, it is supported in the selected coordinates, where $f$ is invertible, and hence vanishes. These sectionwise formulas commute with restriction, so they give a sheaf basis of $\ker f$. Thus the kernel is finite locally free of rank $n-m$, and $t$ is the required local splitting. Since $x$ was arbitrary, the conclusion holds on $X$. [step 1.1, F1, F2, F12, algebra]

3.1 For $s:E\to\mathcal O_X$, the refinement using [F1], [F9], [F10] and [F11] in step 1.1 gives an affine trivializing neighbourhood $\operatorname{Spec}A$ at each point. By [F12] and [F8], write its coefficients as $a_1,\ldots,a_r\in A$. By [F2], its image sheaf is locally the ideal sheaf generated by these coefficients. A change of frame gives invertible linear combinations of the coefficients and therefore the same ideal sheaf; on overlaps the two sets of generators generate the same ideals of germs. Consequently the locally defined zero sets agree: at a point they say that every coefficient has zero image in $\kappa(x)$ by [F4]. Each local zero set is $V((a_1,\ldots,a_r))$, closed by [F7], so together they define the closed subset $V(I)$. Its complement on this chart is the union of the opens $D(a_i)$. On $D(a_i)$ the coefficient $a_i$ is a unit by [F8], and sending $1$ to $a_i^{-1}e_i$ is a local right inverse of $s$. Hence $s|_U$ is surjective by [F3]. Restriction to an open set preserves kernels, because kernels are computed sectionwise by [F2]. Applying steps 1.1 and 2.1 with target rank $1$ proves the stated rank and local freeness. If $r=0$, $I=0$ and $U$ is empty. [given, F1, F2, F3, F4, F7, F8, F9, F10, F11, F12, step 1.1, step 2.1, algebra] ∎
