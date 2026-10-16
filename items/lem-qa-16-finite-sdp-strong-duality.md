---
id: lem-qa-16-finite-sdp-strong-duality
kind: lemma
title: Finite real semidefinite programs satisfy strong duality under strict feasibility
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-non-negative-and-positive-operator
  - thm-non-negative-operator-characterisations
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-trace-of-a-square-matrix
  - def-metric-interior-closure-boundary
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - thm-extreme-value-metric
  - thm-finite-dimensional-orthogonal-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: None; the argument is finite-dimensional and uses no choice principle.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §24.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
    - title: Troy Lee, Rajat Mittal, Ben Reichardt, Robert Špalek, and Mario Szegedy, Quantum Query Complexity of State Conversion, Appendix A.1
      url: https://arxiv.org/pdf/1011.3020
---

## Statement

Let $n\ge1$, $m\ge0$, $A:\mathbb S^n\to\mathbb R^m$ be linear, $b\in\mathbb R^m$, and $C\in\mathbb S^n$, where $\mathbb S^n$ is the space of real symmetric $n\times n$ matrices with Frobenius pairing $\langle X,Y\rangle_F=\sum_{r,s}X_{rs}Y_{rs}$. Define the primal and dual values
$$p^*=\sup\{\langle C,X\rangle_F:A(X)=b,\ X\succeq0\},\qquad d^*=\inf\{b^Ty:A^*y-C\succeq0\},$$
where $A^*$ is the Euclidean adjoint in these finite-dimensional coordinates. Suppose both feasible sets contain strict points, meaning $A(X_0)=b$ with $X_0\succ0$ and $A^*y_0-C\succ0$, and suppose both optimal values are finite. Then $p^*=d^*$, and both extrema are attained.

Here $X\succeq0$ means $v^TXv\ge0$ for every $v\in\mathbb R^n$, while $X\succ0$ means strict inequality for nonzero $v$.

## Facts & Assumptions

**Given:** The finite primal/dual pair, strict feasible points, and finite optimal values in the Statement.

[F1] [[def-non-negative-and-positive-operator]]: nonnegative means self-adjoint with nonnegative quadratic form; positive means strict positivity on each nonzero vector.

[F2] [[thm-non-negative-operator-characterisations]]: a nonnegative real self-adjoint matrix has an orthonormal eigenbasis with nonnegative eigenvalues; a positive definite one has all eigenvalues strictly positive.

[F3] [[thm-strict-separation-of-a-point-from-a-closed-convex-set]]: a point outside a nonempty closed convex subset of a finite-dimensional real vector space has a strict separating linear functional.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: in finite Euclidean coordinates, $A^*$ is the transpose adjoint characterized by $y^TA(X)=\langle A^*y,X\rangle_F$.

[F5] [[thm-heine-borel-rn]]: in every positive finite real dimension, closed bounded Euclidean sets are compact; the bisection proof uses no choice.

[F6] [[def-trace-of-a-square-matrix]]: $\operatorname{tr}(X)$ is the sum of the diagonal entries of a square matrix.

[F7] [[thm-continuous-image-of-a-compact-space-is-compact]]: the continuous image of a compact space is compact.

[F8] [[thm-compact-subset-is-closed-and-bounded]]: a compact subset of a metric space is closed.

[F9] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its maximum and minimum.

[F10] [[thm-finite-dimensional-orthogonal-decomposition]]: for a subspace $W$ of a finite-dimensional inner-product space, the ambient space is $W\oplus W^\perp$.

[F11] [[def-metric-interior-closure-boundary]]: a point lies in the closure of a set exactly when every open ball about it meets the set.

[F12] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Euclidean inner products satisfy $|\langle a,b\rangle|\le\|a\|\|b\|$.

## Proof

1.1 The cone $K=\{X\in\mathbb S^n:X\succeq0\}$ is convex and closed because it is the intersection, over $v\in\mathbb R^n$, of the closed half-spaces $v^TXv\ge0$. It is self-dual for $\langle\cdot,\cdot\rangle_F$: if $X,Y\succeq0$, diagonalize $X=\sum_j\lambda_j u_ju_j^T$ by [F2], with $\lambda_j\ge0$, to get $\langle X,Y\rangle_F=\sum_j\lambda_j u_j^TYu_j\ge0$; conversely, $\langle X,vv^T\rangle_F=v^TXv\ge0$ for every $v$ implies $X\succeq0$. [F1, F2, algebra]

2.1 If $X$ is primal feasible and $y$ dual feasible, then $b^Ty-\langle C,X\rangle_F=\langle A^*y-C,X\rangle_F\ge0$ by self-duality in step 1.1. Thus weak duality gives $p^*\le d^*$. [given, step 1.1, algebra]

2.2 Define $S=\{(A(X),\langle C,X\rangle_F-r):X\in K,\ r\ge0\}\subseteq\mathbb R^m\times\mathbb R$. This set is nonempty and convex by linearity and convexity of $K$. To prove it closed without making countably many witness choices, take any $z=(u,t)$ in the closure of $S$ and let $V=\{(u',t'):\|u'-u\|<1,\ |t'-t|<1\}$, an open neighborhood of $z$. For any point $(u',t')\in S\cap V$, a witness $X\succeq0,r\ge0$ satisfies $A(X)=u'$ and $t'=\langle C,X\rangle_F-r$. Let $S_0=A^*y_0-C\succ0$ be the strict dual slack and choose $\delta>0$ with $S_0\succeq\delta I$ by [F2]. Self-duality from step 1.1 and $r\ge0$ give $\delta\operatorname{tr}(X)\le\langle S_0,X\rangle_F=y_0^Tu'-\langle C,X\rangle_F\le y_0^Tu'-t'$. Since $(u',t')\in V$, [F12] bounds the right side above by $|y_0^Tu|+\|y_0\|+|t|+1$. Choose $B>0$ larger than this bound divided by $\delta$. Writing the nonnegative eigenvalues of $X$ as $\lambda_j$, [F2,F6] give $\operatorname{tr}(X)=\sum_j\lambda_j$ and $\|X\|_F=(\sum_j\lambda_j^2)^{1/2}\le\sum_j\lambda_j$, so by [F2,F6], $\|X\|_F\le\operatorname{tr}(X)\le B$; [F12] applied to the Frobenius pairing then gives $0\le r=\langle C,X\rangle_F-t'\le\|C\|_F B+|t|+1$. Thus $S\cap V$ lies in the image under the continuous map $\Phi(X,r)=(A(X),\langle C,X\rangle_F-r)$ of the closed bounded set $\{(X,r):X\succeq0,\operatorname{tr}(X)\le B,0\le r\le R\}$ for $R=\|C\|_F B+|t|+1$. This set is compact by [F5], so its image is compact by [F7] and closed by [F8]. Because that image is contained in $S$, and [F11] gives $z$ in the closure of $S\cap V$ (as $V$ is a neighborhood of $z$), it follows that $z\in S$. Hence $S$ is closed. [given, F1, F2, F4, F5, F6, F7, F8, F11, F12, step 1.1, algebra, choose]

3.1 Fix any $\gamma>p^*$. The point $(b,\gamma)$ lies outside $S$, since $A(X)=b$ implies $\langle C,X\rangle_F\le p^*<\gamma$ and subtracting $r\ge0$ cannot increase it. By closedness in step 2.2 and [F3], there are $y\in\mathbb R^m$, $\alpha\in\mathbb R$, and $\beta\in\mathbb R$ such that $y^Tu+\alpha t\le\beta<y^Tb+\alpha\gamma$ for every $(u,t)\in S$. Taking $X=0$ and arbitrarily large $r$ shows $\alpha\ge0$. If $\alpha=0$, the strict primal point $X_0$ has $A(X_0)=b$, contradicting $y^Tb\le\beta<y^Tb$; hence $\alpha>0$. Taking $(u,t)=(A(sX),\langle C,sX\rangle_F)$ for arbitrary $X\in K,s\ge0$ shows $\langle A^*y+\alpha C,X\rangle_F\le0$ for all $X\in K$. By the defining adjoint identity [F4] and self-duality, $y'=-y/\alpha$ satisfies $A^*y'-C\succeq0$. Since $(0,0)\in S$, $0\le\beta<y^Tb+\alpha\gamma$, so $b^Ty'=-y^Tb/\alpha<\gamma$. [given, F1, F3, F4, step 1.1, step 2.2, algebra]

4.1 Step 3.1 gives dual feasible values below every $\gamma>p^*$, hence $d^*\le p^*$; weak duality in step 2.1 gives equality. For primal attainment, let $c_0=\langle C,X_0\rangle_F$ and consider $P=\{X\succeq0:A(X)=b,\ \langle C,X\rangle_F\ge c_0\}$. It is nonempty because $X_0\in P$, and closed by step 1.1 and continuity. For $S_0=A^*y_0-C\succ0$, choose $\delta>0$ with $S_0\succeq\delta I$. Every $X\in P$ satisfies $\delta\operatorname{tr}(X)\le\langle S_0,X\rangle_F=y_0^Tb-\langle C,X\rangle_F\le y_0^Tb-c_0$, and the same eigenvalue calculation as in step 2.2 gives $\|X\|_F\le\operatorname{tr}(X)$, so $P$ is bounded. By [F5], $P$ is compact, and [F9] makes the continuous objective attain a maximum there. Since the attained maximum is at least $c_0$, no feasible point outside $P$ can improve it; it equals $p^*$. For dual attainment, if $m=0$, the only dual variable is the given feasible $y_0=0$ and it attains $d^*$. Assume $m\ge1$, let $K=(\ker A^*)^\perp$, and use [F10] to decompose each $y\in\mathbb R^m$ uniquely as $y=z+k$ with $z\in K$ and $k\in\ker A^*$. Since $b=A(X_0)$, $b^Tk=k^TA(X_0)=\langle A^*k,X_0\rangle_F=0$; thus projection to $z$ preserves both $A^*y$ and $b^Ty$. The set $D=\{z\in K:A^*z-C\succeq0,\ b^Tz\le b^Ty_0\}$ is nonempty (it contains the projection of $y_0$) and closed: $K$ is the intersection of the closed hyperplanes perpendicular to vectors in $\ker A^*$, and the PSD cone is closed by step 1.1. Put $T=A^*z-C$. Since $X_0\succ0$, choose $\eta>0$ with $X_0\succeq\eta I$; for $z\in D$, $\eta\operatorname{tr}(T)\le\langle T,X_0\rangle_F=b^Tz-c_0\le b^Ty_0-c_0$. The same eigenvalue calculation as in step 2.2 gives $\|T\|_F\le\operatorname{tr}(T)$, so $T$ is bounded and hence so is $A^*z=T+C$. On the unit sphere of $K$, the continuous function $z\mapsto\|A^*z\|$ is strictly positive because $K\cap\ker A^*=\{0\}$. The sphere is compact by [F5], so [F9] gives a positive minimum $\mu$; therefore $\|A^*z\|\ge\mu\|z\|$ for all $z\in K$, and $D$ is bounded. (If $K=\{0\}$, boundedness is immediate.) Thus $D$ is compact by [F5], and [F9] makes $b^Tz$ attain its minimum on $D$. Any dual feasible point with objective above $b^Ty_0$ cannot lower this minimum, while every other dual feasible point projects into $D$ without changing its objective. Hence this minimum equals $d^*$ and is attained. [given, F2, F4, F5, F6, F9, F10, F12, step 1.1, step 2.1, step 2.2, step 3.1, algebra, choose] ∎
