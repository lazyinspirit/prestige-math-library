---
id: lem-qa-30-normalized-sdp-strong-duality
kind: lemma
title: "Normalized Hermitian inequality SDPs have equal primal and dual values"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-hermitian-product-trace-real
  - def-non-negative-and-positive-operator
  - thm-non-negative-operator-characterisations
  - def-trace-of-a-square-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - thm-extreme-value-metric
  - def-metric-interior-closure-boundary
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
justified_by: []
proof_strategy: direct
axiom_use: "None; finite-dimensional compactness and separation are used without any sequence of witness choices."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Joran van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds, Section 2"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

Let $n\ge0$ and $m\ge1$ be finite integers. Consider the Hermitian inequality-form primal and dual of [[def-qa-30-sdp-primal-dual-pair]], with $\|A_j\|,\|C\|\le1$, $A_1=I$, and $b_1=R>0$. Suppose the primal feasible set is nonempty. Then that set is compact, the primal supremum is attained, and the primal and dual values satisfy
$$p^*=d^*\in[-R,R].$$
The dual has a feasible point whose coordinates are all strictly positive and whose matrix slack is positive definite. No strict primal feasibility is required. Dual optimal attainment remains a separate promise: if a dual optimum $y^*$ with $\|y^*\|_1\le r$, $r\ge1$, is supplied, then $b\cdot y^*=p^*$ with the same norm bound.

## Facts & Assumptions

**Given:** The finite Hermitian primal-dual pair, normalization, and primal nonemptiness in the Statement.

[F1] [[def-qa-30-sdp-primal-dual-pair]] and [[lem-qa-30-hermitian-product-trace-real]]: the primal maximizes $\operatorname{tr}(CX)$ subject to $X\succeq0$ and $\operatorname{tr}(A_jX)\le b_j$; the dual minimizes $b\cdot y$ subject to $y\ge0$ and $\sum_jy_jA_j-C\succeq0$. All these trace quantities are real.

[F2] [[def-non-negative-and-positive-operator]] and [[thm-non-negative-operator-characterisations]]: a finite complex Hermitian positive semidefinite matrix has an orthonormal eigenbasis with nonnegative eigenvalues; positive definite means a strictly positive quadratic form on every nonzero vector.

[F3] [[def-trace-of-a-square-matrix]]: trace is the diagonal sum, including the empty sum for $n=0$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $\|Dv\|\le\|D\|\|v\|$ and $|v^*Dv|\le\|v\|\|Dv\|$.

[F5] [[thm-heine-borel-rn]]: closed bounded subsets of a positive finite-dimensional real coordinate space are compact, without choice.

[F6] [[thm-continuous-image-of-a-compact-space-is-compact]] and [[thm-compact-subset-is-closed-and-bounded]]: a continuous image of a compact metric space is compact and therefore closed in a metric codomain.

[F7] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its extrema, without choice.

[F8] [[def-metric-interior-closure-boundary]]: a point lies in a set's closure exactly when every neighborhood meets the set.

[F9] [[thm-strict-separation-of-a-point-from-a-closed-convex-set]]: a point outside a nonempty closed convex subset of $\mathbb R^k$, $k\ge1$, has a strict separating real linear functional.

## Proof


1.1 If $n=0$, there is one matrix $X$, all traces are zero, and primal nonemptiness implies $b_j\ge0$ for every $j$. The primal singleton is compact with optimum $0$, while every $y\ge0$ is dual feasible and $b\cdot y\ge0$, with equality at $y=0$. The vector $q_1=m+1$, $q_j=1$ for $j\ge2$ is strictly positive and its empty matrix slack is positive definite in the quadratic-form sense, since there is no nonzero vector. Thus all conclusions hold. Henceforth assume $n\ge1$. [given, F1, F2, F3, algebra]

1.2 Regard the Hermitian matrices $H_n$ as a real space with coordinates the $n$ real diagonal entries and the real and imaginary parts above the diagonal, giving $\mathbb R^{n^2}$. Direct diagonal summation yields $\operatorname{tr}(UV)=\sum_iU_{ii}V_{ii}+2\sum_{i<j}\operatorname{Re}(U_{ij}\overline{V_{ij}})$ for Hermitian $U,V$. This is a real inner product, with norm $\|U\|_F=(\sum_{i,j}|U_{ij}|^2)^{1/2}$; all finite linear maps below are continuous in these coordinates. The cone $K=\{X\in H_n:X\succeq0\}$ is convex and closed, being the intersection over $v\in\mathbb C^n$ of the closed real half-spaces $v^*Xv\ge0$. [F1, F2, F3, algebra]

2.1 Direct summation gives $\operatorname{tr}(Dvv^*)=v^*Dv$. For $X\in K$, write $X=\sum_i\lambda_i v_iv_i^*$ in an orthonormal eigenbasis, with $\lambda_i\ge0$. Then $\operatorname{tr}(X)=\sum_i\lambda_i$ and $\|X\|_F^2=\operatorname{tr}(X^2)=\sum_i\lambda_i^2$, so $\|X\|_F\le\operatorname{tr}(X)$. For $D\in K$, $\operatorname{tr}(DX)=\sum_i\lambda_i v_i^*Dv_i\ge0$. Conversely, a Hermitian $D$ pairing nonnegatively with every $X\in K$ has $v^*Dv\ge0$ by testing $X=vv^*$, so $D\in K$. Thus $K$ is self-dual for the real trace pairing. If $D$ is Hermitian with $\|D\|\le1$, [F4] gives $|v^*Dv|\le\|v\|^2$, whence $-I\preceq D\preceq I$ and $|\operatorname{tr}(DX)|\le\operatorname{tr}(X)$ for $X\in K$. [F2, F3, F4, step 1.2, algebra]

3.1 The first constraint gives $0\le\operatorname{tr}(X)\le R$ for every primal feasible $X$. That feasible set is nonempty, closed by step 1.2 and continuity of its finitely many constraints, and bounded by $\|X\|_F\le R$. Hence [F5] and [F7] give compactness and attainment of the primal maximum. Step 2.1 with $D=C$ gives $|\operatorname{tr}(CX)|\le R$, so $p^*\in[-R,R]$. [given, F1, F5, F7, step 1.2, step 2.1, algebra]

4.1 Set $q_1=m+1$ and $q_j=1$ for $j\ge2$. Step 2.1 gives $S_0:=\sum_jq_jA_j-C\succeq((m+1)-(m-1)-1)I=I$, so $q$ has strictly positive coordinates and positive definite matrix slack. For primal feasible $X$ and dual feasible $y$, self-duality gives $b\cdot y-\operatorname{tr}(CX)=\sum_jy_j(b_j-\operatorname{tr}(A_jX))+\operatorname{tr}((\sum_jy_jA_j-C)X)\ge0$. Thus $p^*\le d^*\le b\cdot q$, and the dual infimum is finite. [given, F1, F2, step 2.1, step 3.1, algebra, construct]

5.1 Put $A(X)=(\operatorname{tr}(A_jX))_j$ and $\Phi(X,s,a)=(A(X)+s,\operatorname{tr}(CX)-a)$. The image $S=\Phi(K\times\mathbb R_+^m\times\mathbb R_+)$ is a nonempty convex cone containing $(0,0)$. To prove it closed, fix $z=(u,t)\in\overline S$ and the open neighborhood $V=\{(u',t'):|u'_j-u_j|<1\text{ for all }j,\ |t'-t|<1\}$. For every point of $S\cap V$ and every witness $(X,s,a)$, step 4.1 gives $\operatorname{tr}(X)+\sum_js_j+a\le\operatorname{tr}(S_0X)+q\cdot s+a=q\cdot u'-t'\le\sum_jq_j(|u_j|+1)+|t|+1$. With $B=\sum_jq_j(|u_j|+1)+|t|+2$, all these witnesses belong to the closed bounded set $E=\{(X,s,a):X\in K,\ \operatorname{tr}(X)\le B,\ 0\le s_j\le B,\ 0\le a\le B\}$ in $\mathbb R^{n^2+m+1}$. By [F5] and [F6], $\Phi(E)$ is compact and closed, and $S\cap V\subseteq\Phi(E)\subseteq S$. Every neighborhood $U$ of $z$ has $U\cap V$ meeting $S$, so [F8] gives $z\in\overline{S\cap V}\subseteq\Phi(E)\subseteq S$. Thus $S$ is closed; no sequence of witness selections was used. [F5, F6, F8, step 1.2, step 2.1, step 4.1, algebra, construct]

6.1 Fix $\gamma>p^*$. If $A(X)+s=b$ with $X\in K,s\ge0$, then $X$ is primal feasible and $\operatorname{tr}(CX)-a\le p^*<\gamma$ for $a\ge0$. Hence $(b,\gamma)\notin S$. By [F9] there are $w\in\mathbb R^m$ and $\alpha,\beta\in\mathbb R$ with $w\cdot u+\alpha t\le\beta<w\cdot b+\alpha\gamma$ for every $(u,t)\in S$. The points $(0,-a)\in S$ for all $a\ge0$ force $\alpha\ge0$. Fix one primal feasible $X_f$ and set $s_f=b-A(X_f)\ge0$; then $(b,\operatorname{tr}(CX_f))\in S$. If $\alpha=0$, that point gives the contradiction $w\cdot b\le\beta<w\cdot b$. Thus $\alpha>0$, using no strictness of $X_f$ or its scalar inequalities. [given, F1, F9, step 3.1, step 5.1, algebra, choose]

7.1 The coordinate rays $(s,0)\in S$ force $w_j\le0$. Scaling $(A(X),\operatorname{tr}(CX))\in S$ by arbitrarily large nonnegative scalars forces $\operatorname{tr}((\sum_jw_jA_j+\alpha C)X)\le0$ for every $X\in K$. Self-duality therefore makes $y=-w/\alpha\ge0$ dual feasible. Since $(0,0)\in S$, separation gives $0\le\beta<w\cdot b+\alpha\gamma$, so $b\cdot y<\gamma$. Consequently every $\gamma>p^*$ exceeds some dual feasible objective. If $d^*>p^*$, taking $\gamma=(p^*+d^*)/2$ contradicts the definition of $d^*$. Thus $d^*\le p^*$, and weak duality gives equality. Step 3.1 supplies primal attainment and the interval. An additionally promised optimal dual witness satisfies $b\cdot y^*=d^*=p^*$ and retains its promised norm bound. [F1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎

## Remarks

The trace bound and norm normalization establish primal compactness and the search interval directly. Strict dual feasibility closes the product-cone image used for separation. Primal nonemptiness alone ensures a nonzero objective coefficient in that separation. The argument proves no unconditional dual attainment; the source's bound $r$ is explicitly a promise about an attained dual optimum.
