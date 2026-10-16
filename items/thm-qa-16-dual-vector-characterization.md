---
id: thm-qa-16-dual-vector-characterization
kind: theorem
title: Dual vector formulation of the general adversary bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - def-qa-16-filtered-gamma2
  - lem-qa-16-finite-sdp-strong-duality
  - def-qc-dirac-notation-conversion
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-non-negative-operator-characterisations
  - def-non-negative-and-positive-operator
  - lem-qa-16-schur-product-psd
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Troy Lee, Rajat Mittal, Ben Reichardt, Robert Špalek, and Mario Szegedy, Quantum Query Complexity of State Conversion, arXiv:1011.3020"
      url: "https://arxiv.org/pdf/1011.3020"
---

## Statement


For every finite nonconstant partial Boolean function $f:D\to\{0,1\}$,
$$\operatorname{Adv}^{\pm}(f)=\min_{\{v_{x,i}\}}\max\{C_0,C_1\},\qquad C_b:=\max_{x:f(x)=b}\sum_i\|v_{x,i}\|^2.$$
The vectors lie in a common finite-dimensional complex inner-product space and satisfy, for all distinct $x,y$,
$$\sum_{i:x_i\ne y_i}\langle v_{x,i}|v_{y,i}\rangle_D=\mathbf1[f(x)\ne f(y)].$$
The minimum is attained. If only opposite-output constraints are initially required, tensoring each vector with $|x_i\oplus f(x)\rangle$ imposes the equal-output zero constraints without changing costs or cross-output values.

## Facts & Assumptions

**Given:** A finite nonconstant partial Boolean function with fixed mismatch matrices Δ_i and output mask F.



[F1] [[def-qa-16-general-adversary-bound]]: Adv± is the maximum spectral adversary ratio for real symmetric Γ with Γ∘F=0.

[F2] [[def-qa-16-input-mismatch-matrices]]: A=J−F is one exactly on opposite-output pairs and Δ_i are the mismatch masks.

[F3] [[lem-qa-16-finite-sdp-strong-duality]]: a finite primal/dual SDP with strict feasible points and finite values has equal attained optima; on real matrices the Frobenius pairing is $\langle X,Y\rangle_F=\sum_{r,s}X_{rs}Y_{rs}$.

[F4] [[def-qc-dirac-notation-conversion]]: ⟨u|v⟩_D is linear in v and has the matrix Gram convention.

[F5] [[def-non-negative-and-positive-operator]]: a finite real symmetric matrix is PSD when its quadratic form is nonnegative.

[F6] [[thm-non-negative-operator-characterisations]]: finite PSD matrices admit real Gram factorizations.

[F7] [[lem-qa-16-schur-product-psd]]: the entrywise product of two finite real PSD matrices is PSD.

[F8] [[thm-singular-value-decomposition]]: a real finite-dimensional linear map has orthonormal left and right singular vectors for every positive singular value.

[F9] [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the largest singular value when the domain is nonzero, and a corresponding unit right-singular vector attains it.

[F10] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the induced Euclidean norm, so $\|Tz\|\le\|T\|\|z\|$.

[F11] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Euclidean inner products satisfy $|\langle a,b\rangle|\le\|a\|\|b\|$.

[F12] [[def-qa-16-filtered-gamma2]]: the filtered factorization value is the infimum of the maximum row/column sums of squared vector norms over families representing $A$ through the masks.

## Proof

1.1 For $A=J-F$, minimize $t$ over real symmetric blocks $Z_i=\begin{bmatrix}X_i&W_i\\W_i^T&Y_i\end{bmatrix}\succeq0$ subject to $\sum_i\Delta_i\circ W_i=A$, $\sum_iX_i(xx)\le t$, and $\sum_iY_i(yy)\le t$ for every input. By [F5,F6], each $Z_i$ is a Gram matrix of real vectors $u_{x,i},v_{y,i}$ with $W_i(x,y)=\langle u_{x,i}|v_{y,i}\rangle_D$ and the diagonal entries equal to their squared norms. Conversely, realify any complex feasible families by $u\mapsto(\operatorname{Re}u,\operatorname{Im}u)$ and $v\mapsto(\operatorname{Re}v,\operatorname{Im}v)$; norms are preserved and each real dot product is $\operatorname{Re}\langle u|v\rangle_D$. Since each target entry $A_{xy}$ is real, taking real parts preserves every constraint. Thus the real SDP has the filtered factorization value in [F12]. [given, F2, F4, F5, F6, F12, construct]

2.1 Add nonnegative scalar slacks $s_x=t-\sum_iX_i(xx)$ and $r_y=t-\sum_iY_i(yy)$, and include $t\ge0$, which is already forced by the PSD constraints. The equalities are $t-\sum_iX_i(xx)-s_x=0$, $t-\sum_iY_i(yy)-r_y=0$, and $\sum_i\Delta_i\circ W_i=A$. For unrestricted equality multipliers $p_x,q_y,\Lambda$, the Lagrangian for minimizing $t$ is $L=t-\sum_xp_x(t-\sum_iX_i(xx)-s_x)-\sum_yq_y(t-\sum_iY_i(yy)-r_y)+\langle\Lambda,A-\sum_i\Delta_i\circ W_i\rangle_F$. Its infimum over nonnegative scalar variables is finite only if $p_x,q_y\ge0$ and $\sum_xp_x+\sum_yq_y\le1$. The coefficient of $Z_i$ is $\langle H_i,Z_i\rangle_F$, where $\operatorname{Diag}(p)$ is the diagonal matrix with entries $p_x$, similarly for $q$, and $H_i=\begin{bmatrix}\operatorname{Diag}(p)&-(\Delta_i\circ\Lambda)/2\\-(\Delta_i\circ\Lambda)^T/2&\operatorname{Diag}(q)\end{bmatrix}$. The factor $1/2$ accounts for the two off-diagonal blocks in the Frobenius pairing [F3]. The infimum over $Z_i\succeq0$ is finite exactly when $H_i\succeq0$: a negative quadratic direction gives an unbounded rank-one ray, while PSD matrices pair nonnegatively. Hence the dual maximizes $\langle A,\Lambda\rangle_F$ subject to $p,q\ge0$, $\sum p+\sum q\le1$, and $H_i\succeq0$ for each $i$. [given, F2, F3, step 1.1, algebra]

3.1 The primal is strictly feasible: assign each opposite-output entry of $A$ symmetrically to its first differing coordinate, obtaining $W_i$ with $\sum_i\Delta_i\circ W_i=A$. Choose $\lambda_i>\|W_i\|$ and set $X_i=Y_i=\lambda_iI$; Cauchy--Schwarz [F10,F11] gives $2|a^TW_ib|\le\|W_i\|(\|a\|^2+\|b\|^2)$, so each $Z_i$ is positive definite. Choose $t>0$ large enough that every slack $s_x,r_y$ is positive. The dual in step 2.1 is strictly feasible at $p_x=q_y=1/(4|D|)$ and $\Lambda=0$: every $H_i$ is positive definite and the scalar slack $1-\sum p-\sum q=1/2$ is positive. The primal infimum is finite and nonnegative. For any primal-feasible $(Z_i,s,r,t)$ and dual-feasible $(p,q,\Lambda)$, the cross constraint gives $\langle A,\Lambda\rangle_F=\sum_i\langle\Delta_i\circ\Lambda,W_i\rangle_F$, while the block constraints give $\operatorname{tr}(H_iZ_i)=\sum_xp_xX_i(xx)+\sum_yq_yY_i(yy)-\langle\Delta_i\circ\Lambda,W_i\rangle_F\ge0$. Summing and using $\sum_iX_i(xx)\le t$, $\sum_iY_i(yy)\le t$, $p,q\ge0$, $\sum_xp_x+\sum_yq_y\le1$, and $t\ge0$ yields $\langle A,\Lambda\rangle_F\le(\sum_xp_x+\sum_yq_y)t\le t$. Since a primal feasible point with finite $t$ exists, this proves the derived dual supremum is finite; $p=q=\Lambda=0$ is also dual feasible. Arrange all $Z_i,s,r,t$ as diagonal blocks of one PSD matrix and constrain off-block entries to zero; the strict point makes this matrix positive definite. Maximizing $-t$ is the standard primal in [F3], with standard dual objective $-\langle A,\Lambda\rangle_F$ and the block constraints from step 2.1. Both sides are strictly feasible and have finite values, so [F3] gives equal attained optima; reversing signs yields an attained primal minimum and dual maximum with common value. [given, F3, F5, F6, F10, F11, step 1.1, step 2.1, choose]

4.1 Let $(p,q,\Lambda)$ be an attained dual maximizer from step 3.1. If $\sum p+\sum q<1$, add the deficit to one $p_x$; this adds a nonnegative diagonal matrix to each $H_i$, preserving feasibility and objective, and normalizes $\sum p+\sum q=1$. On positive supports define $M_{xy}=\Lambda_{xy}/(2\sqrt{p_xq_y})$. If $p_x=0$, PSD of each $H_i$ forces its off-diagonal row to vanish: for every other coordinate vector $e_j$, $0\le(e_x+s e_j)^TH_i(e_x+s e_j)$ for all real $s$, so the linear coefficient is zero. The same holds for a zero $q_y$. Thus $\Lambda_{xy}=0$ for distinct $x,y$ whenever either weight is zero, because distinct Boolean inputs differ in some coordinate; diagonal entries do not affect the objective since $A_{xx}=0$. Set zero-support rows and columns of $M$ to zero. On positive supports, congruence by $\operatorname{Diag}(p)^{-1/2}\oplus\operatorname{Diag}(q)^{-1/2}$ turns $H_i\succeq0$ into $\begin{bmatrix}I&-K_i\\-K_i^T&I\end{bmatrix}\succeq0$, with $K_i=\Delta_i\circ M$. This block matrix is PSD exactly when $\|K_i\|\le1$: if the norm is at most one, its quadratic form $\|u\|^2+\|v\|^2-2u^TK_iv$ is nonnegative by [F10,F11] and $2ab\le a^2+b^2$; conversely, substituting $(su,v)$ for every real $s$ forces $|u^TK_iv|\le\|u\|\|v\|$, and choosing $u=K_iv/\|K_iv\|$ when $K_iv\ne0$ gives $\|K_iv\|\le\|v\|$. If a support is empty, the zero-support argument gives $M=0$, which is feasible. The objective is $a^T(A\circ M)b$ for $a_x=\sqrt{2p_x}$ and $b_y=\sqrt{2q_y}$; $\|a\|^2+\|b\|^2=2$, hence $\|a\|\|b\|\le1$ and [F10,F11] give $\langle A,\Lambda\rangle_F\le\|A\circ M\|$. Conversely, for any feasible $M$, take real unit left/right singular vectors $a,b$ of $A\circ M$ attaining its norm by [F8,F9]; if that matrix is zero, use arbitrary unit vectors in the nonempty output classes. Set $p_x=a_x^2/2$, $q_y=b_y^2/2$, and $\Lambda_{xy}=a_xb_yM_{xy}$. The weights sum to one. On positive supports, diagonal sign congruence reduces the dual constraints to the norm condition just proved; zero coordinates have zero off-diagonal blocks. The dual objective is $\|A\circ M\|$. Therefore the dual optimum equals the supremum of $\|A\circ M\|$ over $\max_i\|\Delta_i\circ M\|\le1$. [given, F2, F3, F8, F9, F10, F11, step 2.1, step 3.1, algebra, choose]

5.1 Write $D_b=\{x\in D:f(x)=b\}$ and partition coordinates as $D_0\sqcup D_1$; both classes are nonempty. For $M$ with cross-blocks $B$ and $C$, $A\circ M$ sends $(\xi,\eta)\in\mathbb R^{D_0}\oplus\mathbb R^{D_1}$ to $(B\eta,C\xi)$, so $\|A\circ M\|=\max\{\|B\|,\|C\|\}$: the upper bound follows from $\|B\eta\|^2+\|C\xi\|^2\le\max\{\|B\|,\|C\|\}^2(\|\xi\|^2+\|\eta\|^2)$, and the reverse follows by restricting to one summand and using [F8,F9] to attain each block norm. Each $B_i=B\circ\Delta_i$ and $C_i=C\circ\Delta_i$ is a coordinate restriction of $M\circ\Delta_i$, hence has norm at most one by [F10]. If $B$ is larger, $\Gamma=\begin{bmatrix}0&B\\B^T&0\end{bmatrix}$ is symmetric, vanishes on equal-output pairs, has norm $\|B\|$, and $\Gamma\circ\Delta_i=\begin{bmatrix}0&B_i\\B_i^T&0\end{bmatrix}$ has norm $\|B_i\|\le1$; these norm identities follow by the same block calculation and $\|B_i^T\|=\|B_i\|$ from [F8,F9]. If $C$ is larger, use $\Gamma=\begin{bmatrix}0&C^T\\C&0\end{bmatrix}$. If both blocks vanish the objective is zero. For each nonzero constructed $\Gamma$, its denominator is positive by [F1] and at most one, so its adversary ratio is at least $\|\Gamma\|$; hence every feasible $M$ has objective at most $\operatorname{Adv}^{\pm}(f)$. Conversely, [F1] supplies an admissible maximizing $\Gamma$ with $d=\max_i\|\Gamma\circ\Delta_i\|>0$; $M=\Gamma/d$ is feasible and $\|A\circ M\|=\|\Gamma\|/d=\operatorname{Adv}^{\pm}(f)$. Thus the supremum in step 4.1 is an attained maximum equal to $\operatorname{Adv}^{\pm}(f)$. [given, F1, F2, F8, F9, F10, step 4.1, algebra]

6.1 By [F3], the primal optimum is attained with real families $u,v$. Define $w_{x,i}=u_{x,i}$ on $D_0$ and $w_{x,i}=v_{x,i}$ on $D_1$. For an opposite-output pair, the primal cross constraint gives one in the $0$-to-$1$ order, and its transpose gives one in reverse order. Their class costs satisfy $C_0\le\max_x\sum_i\|u_{x,i}\|^2$ and $C_1\le\max_y\sum_i\|v_{y,i}\|^2$. To impose equal-output zero constraints, tensor each $w_{x,i}$ with $|x_i\oplus f(x)\rangle$. When $x_i\ne y_i$, these labels agree if $f(x)\ne f(y)$ and are orthogonal if $f(x)=f(y)$; hence cross-output sums stay one and equal-output sums vanish, while norms are unchanged. The label Gram product is PSD by [F7], in agreement with these explicit tensor vectors. [given, F2, F3, F4, F7, F12, step 1.1, step 5.1, construct]

7.1 Conversely, every single-family certificate $w$ gives a primal factorization by $u_{x,i}=w_{x,i}$ and $v_{y,i}=w_{y,i}$, with cost $\max\{C_0,C_1\}$. Step 6.1 yields a certificate of cost at most the attained primal value; this converse shows its cost cannot be smaller. Thus the certificate minimum is attained and equals the primal value and $\operatorname{Adv}^{\pm}(f)$ by step 5.1. Both $C_0,C_1$ are positive because an opposite-output constraint equals one. Rescaling $w_x$ by $\alpha>0$ on $D_0$ and $\alpha^{-1}$ on $D_1$ preserves cross-output constraints, multiplies the two costs by $\alpha^2$ and $\alpha^{-2}$, and preserves equal-output zero constraints; choosing $\alpha=(C_1/C_0)^{1/4}$ balances the costs. [given, F3, F4, F12, step 5.1, step 6.1, algebra] ∎

