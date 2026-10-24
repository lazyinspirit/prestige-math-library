---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-rank-r-projector-grassmann-chart-and-tangent.json
  precheck: pass
id: lem-rank-r-projector-grassmann-chart-and-tangent
kind: lemma
title: "Graph charts and tangent directions for complex rank-r projectors"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rank-r-orthogonal-projector-domain
  - lem-hermitian-idempotent-trace-equals-rank
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-kernel-and-image-of-a-linear-map
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - thm-derivative-of-matrix-inversion
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3, Princeton University Press (2008), §§3.4.4 and 3.5.7"
      url: https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §§2.3.2 and 2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf

---

## Statement

Fix $P_0\in\mathcal P_r$, put $U=\operatorname{range}P_0$ (range as in
[[def-kernel-and-image-of-a-linear-map]]), and use the orthogonal decomposition
$\mathbb C^n=U\oplus U^\perp$. Write $P_V$ for the orthogonal projector onto an
$r$-dimensional subspace $V$. Such a subspace $V$ for which the orthogonal projection
$\pi_U|_V:V\to U$ is invertible is uniquely a
graph $V_X=\{u+Xu:u\in U\}$ of a linear map $X:U\to U^\perp$. Its projector is
$$P(X)=J_X(I_U+X^*X)^{-1}J_X^*,\qquad J_Xu=u+Xu.$$
These graph coordinates form an open neighborhood of $P_0$ in the projector
Grassmannian. In the block decomposition at $P_0$, its tangent space is
$$T_{P_0}\mathcal P_r=\left\{\begin{pmatrix}0&B^*\\B&0\end{pmatrix}:B:U\to U^\perp\right\}.$$
The projector representation also removes orbital-frame gauge: two orthonormal
frames represent the same projector exactly when they differ by right
multiplication by a unitary matrix.

## Facts & Assumptions

**Given:** $P_0\in\mathcal P_r$, the range/kernel decomposition of an orthogonal projector, and finite-dimensional complex inner-product spaces.

[F1] The domain consists of Hermitian idempotents with trace $r$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] A Hermitian idempotent has range dimension equal to its trace ([[lem-hermitian-idempotent-trace-equals-rank]]).

[F3] Every finite-dimensional inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F4] The kernel and image of a linear map are its nullspace and range ([[def-kernel-and-image-of-a-linear-map]]).

[F5] On the invertible set, $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$ and matrix differentials obey the product rule; iterating this expression gives continuous derivatives of all finite orders ([[thm-derivative-of-matrix-inversion]], [[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

## Proof

1.1 Since $P_0^2=P_0$, every $x\in\mathbb C^n$ decomposes as $P_0x+(I-P_0)x$ with the first term in $U$ and the second in $\ker P_0$ by [F4]. If $u=P_0y\in U$ and $z\in\ker P_0$, then $\langle u,z\rangle=\langle P_0y,z\rangle=\langle y,P_0z\rangle=0$ by self-adjointness. Hence $\ker P_0=U^\perp$, giving the stated orthogonal block decomposition. [F1, F4, given, algebra]

1.2 For any $X:U\to U^\perp$, $J_X^*J_X=I_U+X^*X$ is positive definite because $\langle (I_U+X^*X)u,u\rangle=\|u\|^2+\|Xu\|^2>0$ for $u\ne0$. The displayed $P(X)$ is Hermitian, and $P(X)^2=J_X(J_X^*J_X)^{-1}J_X^*J_X(J_X^*J_X)^{-1}J_X^*=P(X)$. Its range is $\operatorname{range}J_X=V_X$, of dimension $r$; [F2] gives $\operatorname{tr}P(X)=r$. [F1, F2, given, algebra]

2.1 Let $T=\pi_U|_V:V\to U$, whose adjoint is $T^*=P_V|_U:U\to V$. The block $A=\pi_U P_V|_U$ is $TT^*$, so it is invertible exactly when $T$ is invertible: $TT^*$ is positive definite exactly when $T^*$ is injective, and the domain and codomain of $T$ have the same finite dimension. Thus the chart condition is the open condition that $A$ be invertible; it is open because $P_V\mapsto A$ and determinant are continuous, and at $P_0$ we have $A=I_U$. In that domain, projection from $V$ to $U$ is bijective, so every $u\in U$ has a unique vector $u+Xu\in V$; this defines a unique linear $X$. In blocks $P_V=\begin{pmatrix}A&B^*\\B&C\end{pmatrix}$, that map is $X=BA^{-1}$. The formula in step 1.2 is the unique orthogonal projector onto this graph. Matrix inversion is smooth on invertible matrices by [F5], so the graph map and $P(X)$ are inverse smooth coordinates. [F1, F5, step 1.1, step 1.2, algebra]

2.2 Let $P(t)$ be a differentiable curve in $\mathcal P_r$ with $P(0)=P_0$ and derivative $H$. Differentiating $P(t)^*=P(t)$ and $P(t)^2=P(t)$ gives $H=H^*$ and $P_0H+HP_0=H$. In block form these equations force $H=\begin{pmatrix}0&B^*\\B&0\end{pmatrix}$. Conversely, for any such $B$, the graph curve $P(tB)$ from step 1.2 has derivative $\begin{pmatrix}0&B^*\\B&0\end{pmatrix}$ at $t=0$, since $(I+t^2B^*B)^{-1}=I+O(t^2)$. Thus these are exactly all tangent directions. [F1, step 1.2, given, algebra]

3.1 By [F3], each frame $Y$ with $Y^*Y=I$ and range $U$ exists. If $Y$ and $Z$ are two such frames, then $Q=Y^*Z$ satisfies $YQ=YY^*Z=P_0Z=Z$ and $Q^*Q=Z^*YY^*Z=Z^*Z=I$. Thus $Q$ is unitary and $Z=YQ$. Conversely, $YQ(YQ)^*=YY^*$ for every unitary $Q$. Hence projectors identify exactly the unitary changes of occupied frame. [F3, given, algebra] ∎

## Remarks

The diagram records the graph coordinates without choosing real axes for the complex spaces. Here $J_X:U\to V_X$ is the isomorphism $u\mapsto u+Xu$, and the projections on the right are restricted to $V_X$. Thus $\pi_UJ_X=I_U$ and $\pi_{U^\perp}J_X=X$, as in step 2.1. The adjacent block form uses the ordered splitting $U\oplus U^\perp$; $B^*$ is the complex adjoint of $B$. Step 2.2 proves the tangent characterization independently of this illustration.

```tikz
\begin{tikzpicture}[>=stealth]
\node (u) at (0,1.7) {$U$};
\node (v) at (3.5,1.7) {$V_X$};
\node (ub) at (0,0) {$U$};
\node (up) at (3.5,0) {$U^\perp$};
\draw[->] (u) to[bend left=18] node[above] {$J_X$} (v);
\draw[->] (v) to[bend left=18] node[below] {$\pi_U|_{V_X}$} (u);
\draw[->] (u) -- node[left] {$I_U$} (ub);
\draw[->] (ub) -- node[below] {$X$} (up);
\draw[->] (v) -- node[right] {$\pi_{U^\perp}|_{V_X}$} (up);
\node at (7.7,1.3) {$\displaystyle H=\left(\begin{array}{cc}0&B^*\\B&0\end{array}\right)$};
\node at (7.7,0.25) {$B:U\longrightarrow U^\perp$};
\node at (7.7,-0.4) {$H=P'(0),\quad P(t)=P(tB)$};
\end{tikzpicture}
```
