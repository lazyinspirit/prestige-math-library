---
id: lem-gram-map-fibers-and-rank-strata
kind: lemma
title: Gram-map image, full-rank fibers, and rank-stratum dimensions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
proof_strategy: direct
axiom_use: "No choice principle is used; all basis constructions are finite-dimensional inductions."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

## Facts & Assumptions

**Given:** The field, dimensions, and nondegenerate bilinear forms in the Statement.

[A1] The group is the full orthogonal group in the symmetric case and the symplectic group in the alternating case. A statement for $SO(V)$ is not included.

## Proof

1.1 A symmetric bilinear form on a finite-dimensional $k$-space has a basis with diagonal matrix: if the form is nonzero, polarization in characteristic different from two gives a vector $v$ with $B(v,v)\ne0$; scale $v$ to norm one using a square root in $k$, split off $kv$ and induct on its orthogonal complement. For an alternating form, choose nonzero $v$, choose $w$ with $B(v,w)=1$, split off the nondegenerate plane they span, and induct on its orthogonal complement. Applying the same argument after quotienting by the radical shows that any rank-$r$ symmetric matrix is congruent to $\operatorname{diag}(I_r,0)$ and any rank-$r$ alternating matrix is congruent to $J_r\oplus0$, with $r$ even in the latter case. [given, A1, construct, induction]

2.1 Conversely, every Gram matrix has rank at most $\dim V$, since it factors through the linear map $k^t\to V$ whose columns are the chosen vectors. For every canonical rank-$r$ matrix in step 1.1, choose $r$ vectors in $V$ giving that standard form and set the remaining vectors to zero. If $S$ is an invertible $t\times t$ matrix satisfying $S^\mathsf{T}GS=C$ for an arbitrary rank-$r$ matrix $G$ and its canonical matrix $C$, multiplying the chosen tuple by $S^{-1}$ gives Gram matrix $G$. This realizes every matrix in the rank-bounded image. [step 1.1, algebra, construct]

3.1 Let $f_1,f_2:k^t\to V$ be the surjective maps defined by two tuples with the same rank-$m$ Gram matrix $G$. For $c\in k^t$, $f_i(c)=0$ implies $Gc=0$; conversely $Gc=0$ implies $B(f_i(c),f_i(d))=0$ for every $d$, and surjectivity plus nondegeneracy gives $f_i(c)=0$. Thus $\ker f_1=\ker f_2$, so $T(f_1(c))=f_2(c)$ is a well-defined linear isomorphism. The equality of Gram matrices makes $T$ preserve the form. It is the unique isometry carrying the first tuple to the second, and a form-preserving map fixing a spanning tuple is the identity. [given, step 2.1, construct, algebra]

4.1 A rank-$r$ symmetric matrix is equivalent to its kernel, a $(t-r)$-plane, and a nondegenerate symmetric form on the $r$-dimensional quotient. The finitely many standard graph charts cover the Grassmannian of $(t-r)$-planes, and each chart has $r(t-r)$ coordinates. Over such a chart, symmetric forms on the quotient have $r(r+1)/2$ free coordinates, and nondegeneracy is the nonvanishing of the determinant, an open condition. Thus this stratum has dimension $r(t-r)+r(r+1)/2=rt-r(r-1)/2$. In the alternating case the form space has dimension $r(r-1)/2$ and nondegeneracy is again open, so the stratum dimension is $r(t-r)+r(r-1)/2=rt-r(r+1)/2$. [step 1.1, algebra] ∎
