## Facts & Assumptions

**Given:** The inputs and instructions in the Definition.

[F1] The objective convention uses a symmetric positive-semidefinite sample covariance input and $\lambda>0$. [[def-graphical-lasso-objective]].

[F2] Every real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

## Verification

**Proof technique:** direct.

1.1 For any nonzero $x\in\mathbb R^p$, $x^TWx=x^TSx+\lambda\|x\|^2\ge\lambda\|x\|^2>0$, so the initialized $W$ is symmetric positive definite. [given, F1, algebra]

1.2 Suppose the current $W$ is positive definite. Its principal submatrix $V$ is positive definite, so $V_{\ell\ell}>0$ for each coordinate. With other coordinates fixed, the lasso objective $\tfrac12\beta^TV\beta-s^T\beta+\lambda\|\beta\|_1$ as a function of $\beta_\ell=t$ is $\tfrac12V_{\ell\ell}t^2-rt+\lambda|t|+\text{constant}$, where $r=s_\ell-\sum_{k\ne\ell}V_{\ell k}\beta_k$. Its unique minimizer is $(r-\lambda)/V_{\ell\ell}$ when $r>\lambda$, zero when $|r|\le\lambda$, and $(r+\lambda)/V_{\ell\ell}$ when $r<-\lambda$, exactly the displayed soft-threshold update. Hence every finite coordinate sweep is well-defined. [F1, step 1.1, algebra]

2.1 Each block candidate is a finite symmetric matrix. By [F2] it has a symmetric eigendecomposition, and all its eigenvalues are positive exactly when it is positive definite. The procedure accepts only candidates passing this finite test, so positive definiteness is invariant until either an explicit failure is returned or all $Rp$ blocks finish. [F2, step 1.2, algebra]

2.2 The fixed positive integers $R$ and $K$ bound all outer and inner loops, so the procedure terminates. On success the final $W$ is positive definite by step 2.1, hence $W^{-1}$ exists and is positive definite. The procedure makes no conclusion that this truncated output maximizes $F_{S,\lambda}$ or that increasing $R$ and $K$ converges. [given, step 2.1, algebra] ∎
