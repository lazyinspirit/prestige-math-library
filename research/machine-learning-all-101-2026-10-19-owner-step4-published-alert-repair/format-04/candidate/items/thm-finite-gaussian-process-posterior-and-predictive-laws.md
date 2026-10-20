---
id: thm-finite-gaussian-process-posterior-and-predictive-laws
kind: theorem
title: Finite Gaussian-process posterior and predictive laws
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-forward-and-back-substitution-for-triangular-systems
  - def-gaussian-process
  - def-independent-random-elements
  - def-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - thm-multivariate-normal-conditional-law
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from finite Gaussian-law existence, Gaussian-process construction, and the conditional-normal theorem. The only inverse is that of the assumed positive-definite observed covariance."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Reproducing kernel Hilbert spaces of Gaussian priors (2008)"
      url: "https://arxiv.org/pdf/0805.3252"
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning (MIT Press, 2006), Chapter 2"
      url: "https://gaussianprocess.org/gpml/chapters/RW2.pdf"
---

## Statement

Assume AC and let $f=(f_t)_{t\in T}$ be a real Gaussian process with mean
$m$ and covariance kernel $k$; when $m$ and $k$ are specified as a prior,
the canonical cylinder-space process exists by
thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel.
Let $X=(x_1,\ldots,x_n)\in T^n$ and $X_*=(x_1^*,\ldots,x_p^*)\in T^p$,
where $n,p\ge1$ and repeated indices are allowed. Write
$f_X=(f_{x_i})_{i=1}^n$, $f_{X_*}=(f_{x_j^*})_{j=1}^p$,
$m_X=(m(x_i))_{i=1}^n$, and $m_*=(m(x_j^*))_{j=1}^p$. For finite lists
$A=(a_i)$ and $B=(b_j)$, define
$K_{AB}=(k(a_i,b_j))_{i,j}$.

Let $\epsilon\sim N_n(0,R)$ be independent of the process, where $R$ is
symmetric positive semidefinite, and set $Y=f_X+\epsilon$. Assume the
observed covariance $C=K_{XX}+R$ is positive definite. Then a version of the
conditional law of $f_{X_*}$ given $Y=y$ is, for every $y\in\mathbb R^n$,
$$N_p\!\left(m_*+K_{*X}C^{-1}(y-m_X),\;K_{**}-K_{*X}C^{-1}K_{X*}\right).$$
The displayed conditional covariance is positive semidefinite and may be
singular; $K_{XX}$ and $K_{**}$ may also be singular. If a prediction-noise
vector $\eta_*\sim N_p(0,R_*)$ jointly independent of the process and
$\epsilon$ is added to $f_{X_*}$, with $R_*$ symmetric positive semidefinite,
the conditional mean is unchanged and
$R_*$ is added to the conditional covariance. The displayed kernel is a
version defined at every $y$; conditional-law versions are determined only
$P_Y$-almost surely.

For computation, the occurrences of $C^{-1}v$ mean solving $Cu=v$. Since
$C$ is positive definite, its Cholesky factorization and forward/back
substitution evaluate these solves without forming $C^{-1}$.

## Statement references

[[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

## Facts & Assumptions

**Given:** AC; the Gaussian process and finite lists in the Statement; an
independent Gaussian observation-noise vector with covariance $R\succeq0$;
$C=K_{XX}+R\succ0$; and, for the noisy-prediction clause, an independent
Gaussian vector with covariance $R_*\succeq0$.

[A1] The Axiom of Choice is part of the finite Gaussian-law and conditional
normal interfaces used below. [[def-axiom-of-choice]]

[F1] A Gaussian process has multivariate-normal finite evaluation vectors,
including repeated indices and singular covariances. [[def-gaussian-process]]

[F2] Independence of random elements means independence of their generated
sigma-algebras. [[def-independent-random-elements]]

[F3] A finite independent stack of possibly singular Gaussian vectors is
jointly multivariate normal. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[F4] A multivariate normal law is characterized by its normal scalar
projections, and singular positive-semidefinite covariance is allowed.
[[def-multivariate-normal-law]]

[F5] For a jointly Gaussian pair with observed covariance $B\succ0$, the
conditional law has mean $a+CB^{-1}(y-b)$ and covariance
$A-CB^{-1}C^T$, which is positive semidefinite and may be singular.
[[thm-multivariate-normal-conditional-law]]

[F6] A real symmetric positive-definite matrix has a unique Cholesky
factorization $C=LL^T$ with $L$ lower triangular and positive diagonal.
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]

[F7] Forward and backward substitution are the recursive procedures for
triangular systems with nonzero diagonal.
[[def-forward-and-back-substitution-for-triangular-systems]]

[F8] Forward and backward substitution return the unique solutions of their
triangular systems. [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]

## Proof

**Given:** The assumptions in the Statement.

1.1 By [F1], the concatenated finite evaluation vector $U=(f_{X_*},f_X)$ is multivariate normal with mean $(m_*,m_X)$ and covariance $ \begin{pmatrix}K_{**}&K_{*X}\\K_{X*}&K_{XX}\end{pmatrix}. $ This remains valid when either list has repetitions. [A1, F1, given]

2.1 The vector $\epsilon$ is multivariate normal with mean zero and covariance $R$. Each coordinate of $U$ is a measurable function of the process coordinates, so $\sigma(U)\subseteq\sigma(f)$. By [F2] and the independence hypothesis, $\sigma(\epsilon)$ is independent of $\sigma(f)$ and hence of $\sigma(U)$. Applying [F3] to $U$ and $\epsilon$ shows that $Z=(f_{X_*},f_X,\epsilon)$ is jointly multivariate normal with block-diagonal covariance between $U$ and $\epsilon$. [A1, F2, F3, given, step 1.1]

3.1 Apply the linear map $(u,v,e)\mapsto(u,v+e)$ to $Z$. Every scalar projection of the result is a scalar projection of $Z$, hence is normal by [F4]; its mean is $(m_*,m_X)$. The Gaussian vectors have finite second moments, so independence and $E\epsilon=0$ give $\operatorname{Cov}(f_{X_*},\epsilon)=0$ and $\operatorname{Cov}(Y)=K_{XX}+R=C$. By step 1.1, $\operatorname{Cov}(f_{X_*},f_X)=K_{*X}$, so $(f_{X_*},Y)$ is jointly Gaussian with covariance $ \begin{pmatrix}K_{**}&K_{*X}\\K_{X*}&C\end{pmatrix}. $ [F2, F4, step 2.1, algebra]

4.1 Apply [F5] with $A=K_{**}$, cross-covariance $K_{*X}$, and observed covariance $B=C\succ0$. The result is a probability-kernel version for every $y$, with the displayed mean and Schur-complement covariance; [F5] also proves this covariance is positive semidefinite even if singular. [A1, F5, given, step 3.1]

4.2 If $\eta_*$ is present, it is jointly independent of the process and $\epsilon$ by hypothesis. By [F3], the stack $(f_{X_*},f_X,\epsilon,\eta_*)$ is jointly Gaussian. The linear map $(u,v,e,h)\mapsto(u+h,v+e)$ has mean $(m_*,m_X)$, cross-covariance $K_{*X}$, observed covariance $C$, and prediction covariance $K_{**}+R_*$. Applying [F5] to this pair gives the stated noisy-prediction law. [A1, F3, F4, F5, given, step 3.1, algebra]

5.1 By [F6], write $C=LL^T$. For any right-hand side $b$, solve $Lz=b$ by forward substitution and $L^Tu=z$ by backward substitution; [F8] gives both unique solutions. Then $Cu=L(L^Tu)=Lz=b$, so $u=C^{-1}b$. Applying this to $b=y-m_X$ and, column by column, to $K_{X*}$ evaluates both formula terms without forming the inverse. [F6, F7, F8, algebra] ∎

## Remarks

Only the observed covariance $C$ is inverted, and its positive-definiteness is
an explicit hypothesis. The result makes no pseudoinverse claim when $C$ is
singular. The conditional formula specifies a valid all-$y$ version, while
another regular conditional version may differ on a $P_Y$-null set.

## Source notes

Rasmussen–Williams derive the finite Gaussian-regression mean and covariance
for zero-mean priors and independent homoscedastic noise, and describe the
multiple-test-vector case. The local proof extends the calculation to nonzero
means, general positive-semidefinite noise covariance, singular prior and
predictive blocks, and the exact positive-definite observed-block hypothesis.
The conditional-normal supplier provides the complete probability-kernel
argument.
