---
id: lem-cft-all-face-odd-frame-extension
kind: lemma
title: All-dimensional interpolation of normalized odd gluing frames
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $D$ be a compact smooth parameter cell, $p\ge1$, and $C(t):\mathbb C^M\to\mathbb C^r$ a smooth full-row-rank matrix on a neighborhood of $D$. On the boundary of $\Delta^p$ suppose smooth coefficient matrices $P(s,t):\mathbb C^r\to\mathbb C^M$ are specified, with $C(t)P(s,t)$ invertible. Assume the boundary pieces agree on intersections up to right multiplication by invertible smooth matrices, representing changes of the same odd frame. Then their normalized matrices
$$\widehat P=P(CP)^{-1}$$
agree exactly on every intersection and extend smoothly to $\Delta^p\times D$ with $C\widehat P=1$ everywhere. This construction works in every dimension $p$, not merely when the boundary maps into $\mathrm{GL}_r(\mathbb C)$ are null-homotopic. It respects previously chosen face maps up to the permitted frame changes. For $r=0$ the assertion is the unique empty matrix assertion.

The same extension assertion holds coefficientwise for finite Grassmann expansions of even and odd coordinate maps once their common reduced even map and their normalized odd linear part are fixed: the remaining coefficients may be extended without destroying invertibility of the odd Jacobian. No invertibility of the full even-odd Jacobian is claimed.

## Facts & Assumptions

**Given:** The matrices, smooth matching boundary data and allowed frame equivalences in the Statement. Smooth up to a cell boundary means restrictions of smooth maps from neighborhoods, with the indicated corner compatibility.

## Proof

1.1 Since $C$ has full row rank, $CC^*$ is positive definite: $v^*CC^*v=\|C^*v\|^2$, and zero would put $v$ in the kernel of the injective map $C^*$. Thus $R=C^*(CC^*)^{-1}$ is smooth and $CR=1$. Matrix inverses are smooth where their determinants are nonzero, by the adjugate formula. [given]

1.2 If $P'=PQ$ with $Q$ invertible, then $P'(CP')^{-1}=PQ(CPQ)^{-1}=P(CP)^{-1}$. Thus the normalized boundary matrices agree on overlaps. Every such matrix satisfies $C\widehat P=1$. The set of all right inverses of $C$ is the affine space $R+\operatorname{Hom}(\mathbb C^r,\ker C)$, since $C(P-R)=0$. Unlike $\mathrm{GL}_r$, this affine space is contractible. [given, step 1.1, algebra]

2.1 Extend the normalized boundary matrix, entry by entry, to a collar of the boundary, keeping it constant in a collar normal coordinate. This can be done with corners by working on the compatible boundary faces and using their neighborhood extensions and a smooth subordinate partition; on overlaps the boundary values are identical, so the resulting matrix has precisely the prescribed boundary restriction. Multiplication by a cutoff equal to one near the boundary and zero away from its collar extends it to an arbitrary smooth matrix $E$ on the whole simplex product. Now put $\widehat P_{\rm ext}=R+(1-RC)(E-R)$. On the boundary, $C(E-R)=0$, so this equals $E=\widehat P$. Everywhere $C\widehat P_{\rm ext}=1$. This proves extension in arbitrary dimension, with all existing faces fixed after normalization. [given, step 1.1, step 1.2]

2.2 A concrete collar extension on a simplex can also be obtained after identifying it with a closed ball as a manifold with corners, or by a finite cover of its faces by coordinate half-spaces: extend a smooth boundary function in the missing normal coordinate on each chart, combine by a partition whose sum is one near the boundary, and cut off before the chart ends. The compatibility assumed in the Statement is exactly what is needed at intersections of faces. No extension of a prescribed map into a noncontractible group is used. [given, step 2.1]

3.1 For finitely many odd generators, every coordinate function is a finite sum of Grassmann monomials with ordinary smooth coefficients. After fixing the body and odd degree-one terms, the remaining coefficients belong to vector spaces; extend each of the finitely many coefficients by the same boundary-extension procedure. The odd Jacobian has invertible body by $C\widehat P=1$. Write it as $A_0+N$, where $A_0$ is invertible and the entries of $N$ belong to the nilpotent Grassmann ideal. Its inverse is the finite geometric sum $\sum_{j\ge0}(-A_0^{-1}N)^j A_0^{-1}$, ending once the Grassmann degree exceeds the number of generators. Higher coefficients therefore cannot introduce a zero denominator in the integral-form pullback. [given, step 2.1, algebra] ∎

## Application boundary

In Wang–Yin §5.3, the maps $P$ are gluing-coefficient matrices and $C$ is the quotient/evaluation matrix that detects an odd deformation modulo the fixed spectator gluings. Equations (5.31) and (5.35) are the $r=1$ and $r=2$ instances. The right frame changes are precisely the allowed $Q$ matrices. Normalization removes all higher homotopy obstruction at once, rather than extrapolating the winding-number calculation to dimensions where higher homotopy groups need not vanish. A nonspurious horizontal frame supplies a full-rank minor of $C$.

To apply this lemma to actual SRS families, one must still establish the actual smooth gluing-coordinate map, identify its odd derivative with this $C$, and verify that the prescribed nonlinear boundary maps are realized by its finite Grassmann expansions; a formal coefficient extension into an abstract chart alone does not prove that the original independent gluing formula has the required PCO integral. This lemma does not supply Ramond-state correlators or degeneration-boundary contributions absent from the local amplitude package.
