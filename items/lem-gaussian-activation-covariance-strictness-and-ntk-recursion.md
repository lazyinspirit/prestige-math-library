---
id: lem-gaussian-activation-covariance-strictness-and-ntk-recursion
kind: lemma
title: Gaussian activation covariance and tangent recursion preserve strict positivity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Appendix A.4, printed pp. 16–18; recursive activation covariance and strictness argument"
    - title: "Tilmann Gneiting, Strictly and non-strictly positive definite functions on spheres"
      url: "https://arxiv.org/pdf/1111.7077"
      locator: "Theorem 1 and adjacent sphere conventions, printed pp. 6–8; used as a criterion-scope comparison, not as a supplier"
---

## Statement

Assume AC. Let $m\ge1$, let $C\in\mathbb R^{m\times m}$ be symmetric positive definite, let $Z=(Z_1,\ldots,Z_m)$ have the centered multivariate normal law with covariance $C$, let $\sigma:\mathbb R\to\mathbb R$ be globally Lipschitz and nonconstant, and let $\beta>0$. Let $s$ be a bounded Borel representative of the almost-everywhere derivative of $\sigma$: it agrees with the ordinary derivative wherever that derivative exists, and its values on the remaining Lebesgue-null set are arbitrary. Define
$$S_{ij}:=\mathbb E[\sigma(Z_i)\sigma(Z_j)]+\beta^2,\qquad D_{ij}:=\mathbb E[s(Z_i)s(Z_j)]\quad(1\le i,j\le m).$$
Then $S$ is strictly positive definite and $D$ is positive semidefinite. Consequently, for every positive-semidefinite matrix $T\in\mathbb R^{m\times m}$, the matrix $T\circ D+S$ is strictly positive definite, where $\circ$ denotes entrywise multiplication.

## Statement references

[Jacot, Gabriel, and Hongler, Appendix A.4, recursive activation covariance and strictness](https://arxiv.org/pdf/1806.07572)

[Gneiting, Theorem 1 and sphere conventions; the local proof below handles the two-point sphere directly](https://arxiv.org/pdf/1111.7077)

## Facts & Assumptions

**Given:** AC; a finite positive-definite covariance matrix $C$; its centered multivariate normal vector $Z$; a globally Lipschitz nonconstant activation $\sigma$; and $\beta>0$.

[A1] AC supplies countable and dependent choice, as needed by the Gaussian-law and absolute-continuity interfaces ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] On every compact interval a Lipschitz function is absolutely continuous, and an absolutely continuous function has an integrable derivative almost everywhere whose integral recovers its increments ([[thm-c1-lipschitz-ac-bv-hierarchy]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F2] A finite centered multivariate normal vector with covariance $C$ is realized as $C^{1/2}G$ for independent standard-normal coordinates $G_j$; each coordinate has the corresponding scalar normal law ([[def-multivariate-normal-law]], [[def-standard-normal-and-normal-laws]]).

[F3] A finite-dimensional real symmetric endomorphism has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] Expectations of integrable variables are linear and satisfy Cauchy–Schwarz ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[cor-cauchy-schwarz-for-random-variables]]).

## Proof
**Proof technique:** direct.

1.1 On every compact interval, [F1] gives differentiability of $\sigma$ outside a null set. Taking a countable union over intervals $[-n,n]$ gives one Lebesgue-null exceptional set on $\mathbb R$. The continuous difference quotients $s_n(x)=n(\sigma(x+1/n)-\sigma(x))$ are bounded in modulus by the Lipschitz constant; their pointwise upper limit is a bounded Borel function and equals $\sigma'(x)$ wherever the derivative exists. Thus a representative $s$ as in the Statement exists. [A1, F1, given, construct]

1.2 Let $A=C^{1/2}$ and $G$ be the independent standard-normal vector in [F2]. Positive definiteness of $C$ makes $A$ invertible: if $Av=0$, then $v^TCv=v^TA^2v=\|Av\|_2^2=0$, so $v=0$. The product standard-normal density is positive on every nonempty open box; since $A^{-1}$ maps nonempty open sets to nonempty open sets, $Z=AG$ assigns positive probability to every nonempty open set in $\mathbb R^m$. [F2, given, algebra]

2.1 By [F2], each $Z_i$ has a scalar normal law with variance $C_{ii}>0$, hence a density. Therefore changing $s$ on the exceptional null set changes none of the random variables $s(Z_i)$ almost surely. [F2, step 1.1]

2.2 Fix a nonzero vector $c\in\mathbb R^m$ and set $F(z)=\sum_{i=1}^m c_i\sigma(z_i)$. This function is continuous. If $\mathbb E[F(Z)^2]=0$, then for every integer $k\ge1$, $F(Z)^2\ge k^{-2}\mathbf 1_{\{|F(Z)|\ge1/k\}}$ forces $\mathbb P(|F(Z)|\ge1/k)=0$; the countable union gives $F(Z)=0$ almost surely. By the full-support conclusion of step 1.2, continuity forces $F(z)=0$ for every $z\in\mathbb R^m$. Choose $u,v$ with $\sigma(u)\ne\sigma(v)$. For each $j$, evaluate this identity at vectors whose coordinates other than $j$ are zero and whose $j$th coordinates are $u$ and $v$, then subtract; it gives $c_j(\sigma(u)-\sigma(v))=0$, so $c_j=0$. This contradicts $c\ne0$. Hence $\mathbb E[F(Z)^2]>0$ and $c^TSc=\mathbb E[F(Z)^2]+\beta^2(\sum_i c_i)^2>0$. [step 1.2, given, algebra, choose]

3.1 For any $c\in\mathbb R^m$, $c^TDc=\mathbb E[(\sum_i c_i s(Z_i))^2]\ge0$; the expectation is finite because $s$ is bounded. Thus $D$ is positive semidefinite. [F4, step 2.1, algebra]

4.1 Apply [F3] to $T$. Each eigenvalue $\lambda$ is nonnegative because for a unit eigenvector $q$, $\lambda=q^TTq\ge0$. If $q_1,\ldots,q_m$ is an orthonormal eigenbasis with eigenvalues $\lambda_1,\ldots,\lambda_m$, the vectors $u_i=(\sqrt{\lambda_1}(q_1)_i,\ldots,\sqrt{\lambda_m}(q_m)_i)$ satisfy $T_{ij}=\langle u_i,u_j\rangle$. For $D$, the same finite-dimensional factorization applies because step 3.1 proves it is positive semidefinite, so there are vectors $v_i$ with $D_{ij}=\langle v_i,v_j\rangle$. [F3, step 3.1, construct]

5.1 Then $(T\circ D)_{ij}=\langle u_i\otimes v_i,u_j\otimes v_j\rangle$, so $T\circ D$ is positive semidefinite. Adding the strictly positive quadratic form of $S$ from step 2.2 shows $T\circ D+S$ is strictly positive definite. [step 2.2, step 4.1, algebra] ∎
