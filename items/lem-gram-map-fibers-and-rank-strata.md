---
id: lem-gram-map-fibers-and-rank-strata
kind: lemma
title: Gram-map image, full-rank fibers, and rank-stratum dimensions
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebraically-closed-field
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
  - thm-symmetric-bilinear-forms-have-an-orthogonal-basis
  - thm-alternating-forms-have-a-symplectic-normal-form
  - thm-rank-nullity
  - lem-grassmannian-standard-affine-charts
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-hilbert-basis-theorem
  - lem-chain-dimension-open-cover
proof_strategy: direct
axiom_use: "No choice principle is used; basis constructions and coordinate flags are finite, and only the choice-free finite-generation implication of the Hilbert basis theorem is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  repair: research/gram-map-links-2026-11-05/receipt.json
  precheck: pass
sources:
  references:
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, Theorem 2.0.3"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 12–14: image of the orthogonal Gram map, full-rank fibers, and rank-stratum dimension."
    - title: "Goodman, Multiplicity-Free Spaces and Schur-Weyl-Howe Duality, §§6.4–6.5"
      url: https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf
      locator: "PDF pp. 18–19: symmetric and alternating Gram maps and rank-bounded images."
---

## Statement

Let $k$ be algebraically closed of characteristic zero and let $t\ge0$. Let $V$ have dimension $m\ge1$ with a nondegenerate symmetric form $B$, or dimension $m=2n\ge2$ with a nondegenerate alternating form $B$. Symmetric means $B(v,w)=B(w,v)$; alternating means $B(v,v)=0$ for every $v$; nondegenerate means that $B(v,w)=0$ for all $w\in V$ implies $v=0$. Write $GL(V)$ for the group of invertible linear maps on $V$, and set $O(V,B)=\{g\in GL(V):B(gv,gw)=B(v,w)\}$ and, in the alternating case, $Sp(V,B)=\{g\in GL(V):B(gv,gw)=B(v,w)\}$; these denote the full isometry groups. The Gram map sends $(v_1,\ldots,v_t)\in V^t$ to $(B(v_i,v_j))_{i,j}\in\operatorname{Mat}_t(k)$. Its image is the set of symmetric, respectively alternating, matrices of rank at most $\min(m,t)$. When $t\ge m$, every Gram matrix of rank $m$ has a single fiber orbit under the stated group, and the stabilizer of each tuple in that orbit is trivial. For even $r$, let $J_r$ denote the block diagonal matrix with $r/2$ copies of $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$; let $I_r$ denote the $r\times r$ identity matrix. For $0\le r\le\min(m,t)$, the rank-$r$ symmetric stratum has dimension $rt-r(r-1)/2$; for even $0\le r\le\min(m,t)$, the rank-$r$ alternating stratum has dimension $rt-r(r+1)/2$.

## Statement references

[[def-algebraically-closed-field|Algebraically closed fields]]

[[def-bilinear-symmetric-skew-and-alternating-forms|Symmetric and alternating bilinear forms]]

[[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form|Matrices, radicals, rank, and nondegeneracy of bilinear forms]]

## Facts & Assumptions

**Given:** The field, dimensions, and nondegenerate bilinear forms in the Statement.

[A1] The group is the full orthogonal group in the symmetric case and the symplectic group in the alternating case. A statement for $SO(V)$ is not included.

[F1] [[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]] gives diagonalization in characteristic different from two. Nonzero diagonal entries can be scaled to one because the field is [[def-algebraically-closed-field|algebraically closed]].

[F2] [[thm-alternating-forms-have-a-symplectic-normal-form]] gives symplectic blocks followed by a zero radical block; in particular the rank is even.

[F3] [[thm-rank-nullity]] gives the kernel and image dimensions of the finite-dimensional linear maps used below.

[F4] [[lem-grassmannian-standard-affine-charts]] gives a finite cover of the Grassmannian of $(t-r)$-planes in $k^t$ by graph charts with $r(t-r)$ coordinates.

[F5] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]] gives dimension $N$ for a polynomial ring in $N$ variables. [[thm-prime-spectrum-of-a-localisation-bijection]] identifies the primes after inverting a polynomial with the primes avoiding it, preserving strict inclusions.

[F6] [[thm-hilbert-basis-theorem]] makes finite polynomial rings over $k$ Noetherian; so are their quotients, since quotient ideals lift to ideals upstairs. [[lem-chain-dimension-open-cover]] computes dimension on an open cover of a Noetherian space.

## Proof

1.1 A symmetric bilinear form on a finite-dimensional $k$-space has a basis with diagonal matrix: if the form is nonzero, polarization in characteristic different from two gives a vector $v$ with $B(v,v)\ne0$; scale $v$ to norm one using a square root in $k$, split off $kv$ and induct on its orthogonal complement. For a nonzero alternating form, choose $v$ outside its radical and $w$ with $B(v,w)=1$, split off the nondegenerate plane they span, and induct on its orthogonal complement. Applying the same argument after quotienting by the radical shows that any rank-$r$ symmetric matrix is congruent to $\operatorname{diag}(I_r,0)$ and any rank-$r$ alternating matrix is congruent to $J_r\oplus0$, with $r$ even in the latter case. [given, A1, F1, F2, construct, induction]

2.1 Conversely, every Gram matrix has rank at most $\dim V$, since it factors through the linear map $k^t\to V$ whose columns are the chosen vectors. For every canonical rank-$r$ matrix in step 1.1, choose $r$ vectors in $V$ giving that standard form and set the remaining vectors to zero. If $S$ is an invertible $t\times t$ matrix satisfying $S^\mathsf{T}GS=C$ for an arbitrary rank-$r$ matrix $G$ and its canonical matrix $C$, multiplying the chosen tuple by $S^{-1}$ gives Gram matrix $G$. This realizes every matrix in the rank-bounded image. [F3, step 1.1, algebra, construct]

2.2 Put $W=k^t$. A rank-$r$ symmetric or alternating form on $W$ is determined by its kernel $K$, of dimension $t-r$ by [F3], and its induced nondegenerate form on $W/K$. In a graph chart from [F4], write $W=k^{t-r}\oplus k^r$ and $K=\{(x,Ax):x\in k^{t-r}\}$, where $A$ has $r(t-r)$ free entries. The quotient map is $q(x,y)=y-Ax$. If $H$ is the matrix of the quotient form, the original matrix is $G=Q^{\mathsf T}HQ$ with $Q=(-A\mid I_r)$, that is, $G=\begin{pmatrix}A^{\mathsf T}HA&-A^{\mathsf T}H\\-HA&H\end{pmatrix}$. Conversely, on the rank-$r$ locus where the lower-right block $H$ is invertible, recover $H=G_{22}$ and $A=-H^{-1}G_{21}$. These maps are polynomial in the forward direction and regular on $\det H\ne0$ in the reverse direction. Thus this part of the stratum is isomorphic to the product of affine $A$-space and the open space of invertible symmetric or alternating $H$. These finitely many principal-block opens cover the stratum because some $r$ coordinate vectors form a basis of $W/K$. [F3, F4, step 1.1, construct, algebra]

3.1 Let $f_1,f_2:k^t\to V$ be the maps defined by two tuples with the same rank-$m$ Gram matrix $G$. The factorization in step 2.1 gives $m=\operatorname{rank}G\le\operatorname{rank}f_i\le m$, so both maps are surjective. For $c\in k^t$, $f_i(c)=0$ implies $Gc=0$; conversely $Gc=0$ implies $B(f_i(c),f_i(d))=0$ for every $d$, and surjectivity plus nondegeneracy gives $f_i(c)=0$. Thus $\ker f_1=\ker f_2$, so $T(f_1(c))=f_2(c)$ is a well-defined linear isomorphism. The equality of Gram matrices makes $T$ preserve the form. It is the unique isometry carrying the first tuple to the second, and a form-preserving map fixing a spanning tuple is the identity. [given, F3, step 2.1, construct, algebra]

3.2 Let $s=r(r+1)/2$ in the symmetric case and $s=r(r-1)/2$ in the alternating case, and put $N=r(t-r)+s$. The chart in step 2.2 has coordinate ring $P[1/\det H]$, where $P$ is polynomial in the $N$ independent entries of $A,H$. It has dimension at most $N$ by [F5]. For the reverse inequality take $A=0$ and $H=I_r$, respectively $H=J_r$. Translate the $N$ coordinates so this point is the origin. Every ideal in the coordinate-prime flag $(0)\subsetneq(z_1)\subsetneq\cdots\subsetneq(z_1,\ldots,z_N)$ avoids $\det H$, since its value at the origin is one. The flag therefore survives localization by [F5], proving dimension $N$. This is also the classical chain dimension: taking closures and vanishing ideals bounds chains of irreducible closed subsets by the same polynomial-ring dimension, while the coordinate affine-subspace flag through this point intersects the open chart in a strict irreducible flag of length $N$. Each intersection is nonempty and irreducible because it is a nonempty open in an affine space over the infinite field $k$. [F5, step 1.1, step 2.2, construct, algebra]

4.1 Each chart is Noetherian by [F6], since $P[1/\det H]\simeq P[u]/(u\det H-1)$. The finite chart cover makes the stratum Noetherian as well: any descending closed chain stabilizes on each chart and hence globally. Applying [F6] to this cover gives dimension $N$. Consequently the symmetric dimension is $r(t-r)+r(r+1)/2=rt-r(r-1)/2$, and the alternating dimension is $r(t-r)+r(r-1)/2=rt-r(r+1)/2$. When $r=0$ the stratum is the single zero matrix, with the empty determinant equal to one; the formulas give zero, including $t=0$. When $r=t$ the kernel chart is a point and the same calculation applies. Only even $r$ occur in the alternating case by [F2]. [F2, F6, step 2.2, step 3.2, algebra] ∎
