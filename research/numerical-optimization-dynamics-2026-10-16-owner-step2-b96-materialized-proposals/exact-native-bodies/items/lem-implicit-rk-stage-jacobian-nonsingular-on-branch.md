## Statement

Use the implicit Runge–Kutta residual $G(Y)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y)$ from [[def-implicit-runge-kutta-stage-equations]] on a convex open neighborhood of an invariant stage ball. Suppose $F$ is $C^1$ there and $\|D_YF(Y)Z\|_{\infty,2}\le L\|Z\|_{\infty,2}$ for every $Y$ in the ball and every block vector $Z$. If $q=h\|A\|_\infty L<1$, then $D_YG(Y)$ is invertible at every point of the selected stage branch. The contraction hypotheses of [[lem-small-step-implicit-rk-branch-and-residual-error]] provide existence and uniqueness of the root in that ball; this lemma supplies nonsingularity for implicit differentiation.

## Facts & Assumptions

**Given:** The finite-dimensional stage space, implicit Runge–Kutta residual, selected invariant ball, $C^1$ map $F$, derivative bound $L$ on the ball, and $q<1$.

[F1] The stage residual is $G(Y)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y)$; a selected stage root satisfies $G(Y)=0$ ([[def-implicit-runge-kutta-stage-equations]]).

[F2] If $F$ is Lipschitz on the invariant ball with constant $L$ and $h\|A\|_\infty L<1$, the stage fixed-point map has a unique root on the prescribed branch ([[lem-small-step-implicit-rk-branch-and-residual-error]]).

[F3] A vector-valued function continuous on $[0,1]$, differentiable on $(0,1)$, and with Euclidean derivative norm at most $M$ has endpoint difference at most $M$ ([[thm-mean-value-inequality]]). The chain rule differentiates a $C^1$ map along a segment ([[thm-chain-rule-for-total-derivatives]]).

[F4] For a linear map on a finite-dimensional vector space, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

## Proof

1.1 Let $Y,W$ belong to the invariant ball. Its convexity puts $Y+t(W-Y)$ in the ball for $0\le t\le1$. For each block $i$, the curve $\gamma_i(t)=F_i(Y+t(W-Y))$ is continuous on $[0,1]$ and differentiable inside because $F$ is $C^1$ on an open neighborhood. Its derivative obeys
$$\|\gamma_i'(t)\|_2\le\|D_YF(Y+t(W-Y))(W-Y)\|_{\infty,2}\le L\|W-Y\|_{\infty,2}.$$
Apply [F3] to each block and take the maximum. This gives $\|F(W)-F(Y)\|_{\infty,2}\le L\|W-Y\|_{\infty,2}$ using only the derivative bound on the ball. Hence [F2] applies with its invariant-ball hypotheses and the selected root exists uniquely. [given, F2, F3]

1.2 Differentiating [F1] with respect to $Y$ gives $D_YG=I-h(A\otimes I_d)D_YF$. If $D_YG\,Z=0$, the block row-sum norm and the derivative bound imply
$$\|Z\|_{\infty,2}\le h\|A\|_\infty L\|Z\|_{\infty,2}=q\|Z\|_{\infty,2}.$$
Since $q<1$, this forces $Z=0$; thus the square finite-dimensional map $D_YG$ has trivial kernel. [F1, given, algebra]

2.1 By [F4], a linear map on the stage space has rank equal to its dimension when its kernel has dimension zero. Therefore $D_YG$ is onto as well as one-to-one, hence invertible. This holds at every point of the prescribed branch ball. [F4, step 1.2] ∎
