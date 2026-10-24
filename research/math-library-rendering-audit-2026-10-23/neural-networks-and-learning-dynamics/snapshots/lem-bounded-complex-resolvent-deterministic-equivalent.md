---
id: lem-bounded-complex-resolvent-deterministic-equivalent
kind: lemma
title: "Deterministic equivalent for the bounded complex sample-covariance resolvent"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-complex-quadratic-form-fourth-moment-bound
  - lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound
  - lem-bounded-complex-resolvent-quadratic-form-concentration
  - def-stieltjes-transform-of-a-real-probability-measure
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "J. W. Silverstein, Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices"
      url: "https://jack.math.ncsu.edu/strong.pdf"
---
## Statement

For each positive integer $n$, let $N_n$ be a positive integer with $N_n/n\to\kappa\in(0,\infty)$, let $X_n\in\mathbb C^{n\times N_n}$ have entries from one common iid law with mean zero, second absolute moment one and $|X_{ij}|\le K$ almost surely for a fixed $K$, and let $T_n$ be deterministic Hermitian positive semidefinite (self-adjoint with $v^*T_nv\ge0$ for every $v$) with induced Euclidean operator norm $\|T_n\|_{\mathrm{op}}\le M$. Define
$$A_n=N_n^{-1}T_n^{1/2}X_nX_n^*T_n^{1/2},\qquad \widetilde A_n=N_n^{-1}X_n^*T_nX_n,$$
$$R_n(z)=(A_n-zI_n)^{-1},\qquad \widetilde R_n(z)=(\widetilde A_n-zI_{N_n})^{-1},\qquad q_n(z)=\mathbb E\left[N_n^{-1}\operatorname{tr}\widetilde R_n(z)\right].$$
For every fixed $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$, the matrix $I_n+q_n(z)T_n$ is invertible and
$$\sup_{\|x\|_2=1}\left|x^*\left(\mathbb E R_n(z)+\frac1z(I_n+q_n(z)T_n)^{-1}\right)x\right|\longrightarrow0.$$

## Statement references

Bai, Miao, and Pan, complete Section 2 proof of Theorem 1, printed pp. 12–16 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Silverstein, Theorem 1.1 proof, PDF pp. 3–8 ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

## Facts & Assumptions

**Given:** The iid bounded entries, deterministic positive semidefinite $T_n$, aspect-ratio limit, and fixed $z\in\mathbb C^+$ in the Statement.

[F1] Independent centered complex coordinates with unit second absolute moment satisfy the stated second-moment quadratic-form bound, also conditionally when the coefficient matrix is independent ([[lem-complex-quadratic-form-fourth-moment-bound]]).

[F2] Adding one positive rank-one matrix has the Sherman–Morrison resolvent formula and trace-norm bound ([[lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound]]).

[F3] For bounded iid entries, each deterministic unit-vector resolvent quadratic form differs from its expectation with fourth-tail bound $C/(t^4N_n^2)$ ([[lem-bounded-complex-resolvent-quadratic-form-concentration]]).

[F4] Hermitian positive semidefinite matrices have nonnegative eigenvalues and an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] The Stieltjes transform of a probability measure uses the $(t-z)^{-1}$ convention in the upper half-plane ([[def-stieltjes-transform-of-a-real-probability-measure]]).

[F6] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Fix $n,z$, suppress the index $n$, write $N=N_n$, $s_j=T^{1/2}X_{\cdot j}/\sqrt N$, $R=(A-zI)^{-1}$, $R_j=(A-s_js_j^*-zI)^{-1}$, and $\beta_j=(1+s_j^*R_js_j)^{-1}$. The companion matrix $\widetilde A=N^{-1}X^*TX$ is positive semidefinite by [F4], so $q=N^{-1}\mathbb E\operatorname{tr}(\widetilde A-zI)^{-1}$ is the Stieltjes transform of an expected probability measure on $[0,\infty)$ by [F5] and has positive imaginary part. If $q=\int(\lambda-z)^{-1}\,dG(\lambda)$, then for every $t\ge0$, $$\operatorname{Im}\{z(1+tq)\}=\eta+t\int\frac{\lambda\eta}{|\lambda-z|^2}\,dG(\lambda)\ge\eta,$$ so $C:=(I+qT)^{-1}$ exists and $\|C\|_{\mathrm{op}}\le |z|/\eta$. The same spectral calculation applied to $A-s_js_j^*$ gives $|\beta_j|\le |z|/\eta$. [given, F4, F5, F6, algebra]

2.1 Set $b_j=(1+N^{-1}\operatorname{tr}(TR_j))^{-1}$ and $\xi_j=s_j^*R_js_j-N^{-1}\operatorname{tr}(TR_j)$. The trace in $b_j$ is a Stieltjes transform with nonnegative weights: in an eigenbasis of $A-s_js_j^*$ its weights are $\langle v_k,Tv_k\rangle/N\ge0$. The inequality in step 1.1 therefore also gives $|b_j|\le |z|/\eta$. Conditional on all columns except $j$, [F1] and $\|T^{1/2}R_jT^{1/2}\|_F^2\le nM^2/\eta^2$ give $\mathbb E_j|\xi_j|^2\le C_1 n/N^2=O(N^{-1})$, where $\mathbb E_j$ integrates column $j$. For any deterministic unit $x$, set $$\alpha_j=x^*Cs_js_j^*R_jx-N^{-1}x^*CTR_jx.$$ This is a centered quadratic form in column $j$. Its coefficient matrix is $$N^{-1}(T^{1/2}R_jx)(x^*CT^{1/2}),$$ so it has rank at most one and Frobenius norm at most $M\|C\|_{\mathrm{op}}/(N\eta)$. Thus [F1] gives $\mathbb E_j|\alpha_j|^2=O(N^{-2})$. Also $\mathbb E_j\alpha_j=0$ and $\beta_j-b_j=-\beta_jb_j\xi_j$. [given, F1, F4, step 1.1, algebra]

2.2 For all sufficiently large $n$ we have $N=N_n\ge2$. Put $Y=[s_2\ \cdots\ s_N]$, $D=Y^*Y-zI_{N-1}$, and $C_-=YY^*-zI_n=A-s_1s_1^*-zI_n$. The matrix $\widetilde A-zI$ has block form $$\begin{pmatrix}s_1^*s_1-z&s_1^*Y\\Y^*s_1&D\end{pmatrix}.$$ For a block matrix $\begin{pmatrix}a&b^*\\b&D\end{pmatrix}$ with invertible $D$, solving its product with $(u,v)^T=(1,0)^T$ gives $v=-D^{-1}bu$ and $(a-b^*D^{-1}b)u=1$. Hence its inverse's upper-left entry is $(a-b^*D^{-1}b)^{-1}$. Here $(C_-)Y=YD$, so $(C_-)(I-YD^{-1}Y^*)=C_- -YY^*=-zI$ and $I-YD^{-1}Y^*=-zC_-^{-1}=-zR_1$. The Schur complement is therefore $s_1^*(I-YD^{-1}Y^*)s_1-z=-z(1+s_1^*R_1s_1)$, proving $(\widetilde R)_{11}=-\beta_1/z$. [given, F4, step 1.1, algebra]

3.1 By exchangeability of the columns and step 2.2, $zq=-N^{-1}\sum_{j=1}^N\mathbb E\beta_j$. The identity $R^{-1}=\sum_j s_js_j^*-zI$ gives $\sum_j s_js_j^*R=I+zR$. The rank-one formula [F2] gives $s_js_j^*R=\beta_js_js_j^*R_j$. Substituting these identities and the formula for $zq$ yields $$\mathbb E R+\frac1zC=\frac1z\sum_{j=1}^N\mathbb E\left[\beta_j\left(Cs_js_j^*R_j-N^{-1}CT\,\mathbb E R\right)\right].$$ Testing against $x$ and adding then subtracting $N^{-1}x^*CTR_jx$ and $N^{-1}x^*CTRx$ decomposes the right side into three terms $\delta_1+\delta_2+\delta_3$. [given, F2, F4, step 1.1, step 2.2, algebra]

4.1 For the first term, $\delta_1=(N/z)\mathbb E(\beta_1\alpha_1)$. Since $b_1$ is independent of column 1 and $\mathbb E_1\alpha_1=0$, we have $\mathbb E(b_1\alpha_1)=0$. Therefore step 2.1, Cauchy–Schwarz, and the uniform bounds on $\beta_1,b_1$ imply $$|\delta_1|\le C_2N(\mathbb E|\xi_1|^2)^{1/2}(\mathbb E|\alpha_1|^2)^{1/2}=O(N^{-1/2}).$$ [given, F1, step 2.1, step 3.1, algebra]

4.2 For the second term, $R_1-R=\beta_1R_1s_1s_1^*R_1$. Conditional second moments of the two linear forms $x^*CTR_1s_1$ and $s_1^*R_1x$ are each $O(N^{-1})$, uniformly in the other columns. Cauchy–Schwarz and boundedness of $\beta_1$ yield $|\delta_2|=O(N^{-1})$. [given, F1, F2, step 2.1, step 3.1, algebra]

4.3 The third term is $\delta_3=z^{-1}\mathbb E[\beta_1x^*CT(R-\mathbb ER)x]$. For any deterministic sequence of unit vectors $x=x_n$, put $u=(CT)^*x$ and $v=x$; their norms are uniformly bounded by step 1.1. For $Q(w)=w^*(R-\mathbb ER)w$, direct expansion gives $$B_n:=u^*(R-\mathbb ER)v=\frac14\{Q(u+v)-Q(u-v)-iQ(u+iv)+iQ(u-iv)\}.$$ Rescale each nonzero vector to unit length; zero vectors contribute zero. For each fixed $t>0$, [F3] and the union bound imply $\mathbb P(|B_n|>t)\to0$. Also $|B_n|\le2\|u\|\|v\|/\eta\le L$ for a fixed finite $L$. Thus $\mathbb E|B_n|^2\le t^2+L^2\mathbb P(|B_n|>t)$, so first letting $n\to\infty$ and then $t\downarrow0$ gives $\mathbb E|B_n|^2\to0$. Boundedness of $\beta_1$ and Cauchy–Schwarz yield $\delta_3\to0$. This holds for every deterministic unit-vector sequence, hence uniformly over unit $x$: otherwise a sequence of deterministic directions with $|\delta_3|$ bounded away from zero along a subsequence would contradict the conclusion just proved. No shrinking-threshold tail estimate is used. [given, F3, step 1.1, step 3.1, algebra]

5.1 The bounds in steps 4.1, 4.2, and 4.3 tend to zero uniformly over deterministic unit $x$. The tested resolvent identity in step 3.1 therefore proves the asserted supremum limit. [given, step 3.1, step 4.1, step 4.2, step 4.3, algebra] ∎

## Source notes

Bai, Miao, and Pan, equations (2.2)–(2.9), printed pp. 12–15 ([full paper PDF](https://arxiv.org/pdf/0708.1720)). The $N$-prefactor in their estimate (2.6) gives $O(N^{-1/2})$ after the displayed moment bounds; the proof above retains that corrected vanishing order. Their (2.8) term is bounded here by adapted resolvent concentration and polarization.
