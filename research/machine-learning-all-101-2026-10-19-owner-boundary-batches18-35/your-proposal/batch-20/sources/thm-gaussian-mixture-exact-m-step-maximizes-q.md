---
id: thm-gaussian-mixture-exact-m-step-maximizes-q
kind: theorem
title: "The full-affine-span Gaussian-mixture M-step maximizes Q"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-finite-gaussian-mixture
  - def-kullback-leibler-divergence
  - def-probability-measure
  - def-trace-of-a-square-matrix
  - lem-log-determinant-strictly-concave-on-positive-definite-matrices
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-differential-and-jacobis-formula
  - thm-determinant-multiplicative
  - thm-finite-gaussian-component-density-normalized
  - thm-kullback-leibler-is-nonnegative
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §9.2.2"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §8.5.2"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
---

## Statement

Assume AC. Let $n,p,K$ be positive integers, let $x_1,\ldots,x_n\in\mathbb R^p$ have affine span $\mathbb R^p$ (equivalently, no nonzero $v\in\mathbb R^p$ makes $v^{\mathsf T}x_i$ constant over all $i$), and let $\theta=((\pi_k,\mu_k,\Sigma_k))_{k=1}^K$ be a finite Gaussian-mixture parameter with every $\pi_k>0$ and every $\Sigma_k$ symmetric positive definite. Define

$$\gamma_{ik}=\frac{\pi_k\phi_p(x_i;\mu_k,\Sigma_k)}{\sum_{j=1}^K\pi_j\phi_p(x_i;\mu_j,\Sigma_j)},\qquad N_k=\sum_{i=1}^n\gamma_{ik},\qquad \bar x_k=\frac1{N_k}\sum_{i=1}^n\gamma_{ik}x_i,$$

and

$$S_k=\frac1{N_k}\sum_{i=1}^n\gamma_{ik}(x_i-\bar x_k)(x_i-\bar x_k)^{\mathsf T}.$$

For a candidate parameter $\vartheta=((\rho_k,m_k,V_k))_{k=1}^K$ in the same domain, let

$$Q(\vartheta\mid\theta)=\sum_{i=1}^n\sum_{k=1}^K\gamma_{ik}\log\!\left(\rho_k\phi_p(x_i;m_k,V_k)\right).$$

Then every $N_k$ is positive, $\sum_kN_k=n$, every $S_k$ is positive definite, and the unique global maximizer of $Q(\vartheta\mid\theta)$ over all positive mixture weights summing to one, means in $\mathbb R^p$, and symmetric positive-definite covariances is

$$\rho_k^*=N_k/n,\qquad m_k^*=\bar x_k,\qquad V_k^*=S_k.$$

In particular, the displayed E-step responsibilities and M-step update formulas are well-defined and attain this maximum.

## Facts & Assumptions

**Given:** Assume AC, positive integers $n,p,K$, observations whose affine span is $\mathbb R^p$, and a current finite Gaussian-mixture parameter with positive weights and symmetric positive-definite covariances.

[A1] [[def-axiom-of-choice]]: AC is assumed by the KL definition and its nonnegativity theorem; this is the only choice use in the proof.

[F1] [[def-finite-gaussian-mixture]]: mixture weights are strictly positive and sum to one, covariances are symmetric positive definite, and the component formula $\phi_p(x;\mu,\Sigma)$ is used for finite observations.

[F2] [[thm-finite-gaussian-component-density-normalized]]: for these parameters, each Gaussian component formula is finite, strictly positive, and normalized; its logarithm is finite at every finite observation.

[F3] [[def-probability-measure]]: a probability measure has total mass one.

[F4] [[def-kullback-leibler-divergence]]: for probability measures $P\ll R$, the directional divergence is $D(P\|R)=\int\log(dP/dR)\,dP$; on a finite set with positive atom masses $a_k,r_k$, this is $\sum_k a_k\log(a_k/r_k)$.

[F5] [[thm-kullback-leibler-is-nonnegative]]: under AC, $D(P\|R)\ge0$, with equality exactly when $P=R$, for probability measures with the first absolutely continuous with respect to the second.

[F6] [[lem-log-determinant-strictly-concave-on-positive-definite-matrices]]: $A\mapsto\log\det A$ is strictly concave on the symmetric positive-definite cone.

[F7] [[thm-determinant-differential-and-jacobis-formula]]: for invertible $A$, $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$.

[F8] [[thm-logarithm-derivative-and-integral]]: for $u>0$, $(\log u)'=1/u$.

[F9] [[thm-chain-rule-for-total-derivatives]]: the derivative of a differentiable composition is given by the chain rule.

[F10] [[def-trace-of-a-square-matrix]]: $\operatorname{tr}(M)$ is the sum of the diagonal entries; finite coordinate expansion gives $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ whenever the products are defined.

[F11] [[def-determinant-of-a-square-matrix]] and [[thm-determinant-multiplicative]]: $\det I=1$ and $\det(AB)=\det(A)\det(B)$, so for invertible $V$, $\det(V^{-1})=1/\det(V)$.

[F12] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis; in particular its eigenvalues are positive when it is positive definite, and its inverse is positive definite.

[F13] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is inverse to $\exp$, and for positive $u,v$, $\log(uv)=\log u+\log v$ and $\log(1/u)=-\log u$; hence for $a>0$, $\log(a^{-1/2})=-\tfrac12\log a$.

## Proof
1.1 By [F1] and [F2], every numerator and denominator in $\gamma_{ik}$ is finite and strictly positive. Hence $\gamma_{ik}>0$. Summing the responsibility formula over $k$ gives $\sum_k\gamma_{ik}=1$, so $N_k>0$ and $\sum_kN_k=n$. Thus all displayed weighted means and scatters are defined. [F1, F2, algebra]

2.1 For each nonzero $v\in\mathbb R^p$, $v^{\mathsf T}S_kv=N_k^{-1}\sum_i\gamma_{ik}(v^{\mathsf T}(x_i-\bar x_k))^2$. If it were zero, positivity of each $\gamma_{ik}$ would force $v^{\mathsf T}x_i=v^{\mathsf T}\bar x_k$ for every $i$. That would put all observations in the proper affine hyperplane $\{x:v^{\mathsf T}x=v^{\mathsf T}\bar x_k\}$, contradicting their full affine span. Since $S_k$ is visibly symmetric, it is positive definite. [given, step 1.1, algebra]

2.2 Expanding the component density in [F1,F2] in the definition of $Q$ gives $Q(\vartheta\mid\theta)=\sum_kN_k\log\rho_k-\frac{np}{2}\log(2\pi)-\frac12\sum_k\left(N_k\log\det V_k+\sum_i\gamma_{ik}(x_i-m_k)^{\mathsf T}V_k^{-1}(x_i-m_k)\right).$ Here [F13] supplies $\log(\exp u)=u$ and the product and reciprocal laws. For each positive $a$, $\log(a^{-1/2})=-\frac12\log a$ follows by applying those laws to $(a^{-1/2})^2=1/a$; applying the product law $p$ times gives $\log((2\pi)^{-p/2})=-\frac p2\log(2\pi)$. All logarithms are finite: weights are positive, and [F2] gives finite positive component densities for each positive-definite covariance, so their determinants are positive. [F1, F2, F13, step 1.1, algebra]

3.1 Define $\alpha_k=N_k/n$, and for each subset $B\subseteq\{1,\ldots,K\}$ set $P(B):=\sum_{k\in B}\alpha_k$ and $R(B):=\sum_{k\in B}\rho_k$. Finite sums make these set functions additive on disjoint subsets; a disjoint sequence has at most $K$ nonempty members, so they are countably additive. Step 1.1 and the candidate weight constraint give total mass one, hence [F3] makes $P,R$ probability measures. Each $\rho_k>0$, so $P\ll R$. For every subset $B$, $\sum_{k\in B}(\alpha_k/\rho_k)\rho_k=P(B)$, hence $dP/dR(k)=\alpha_k/\rho_k$. The KL definition [F4] therefore gives $D(P\|R)=\sum_k\alpha_k\log(\alpha_k/\rho_k)\ge0$ by [A1,F5]. The weight-dependent part of $Q$ at $\alpha$ minus that at $\rho$ is $\sum_kN_k\log(\alpha_k/\rho_k)=nD(P\|R)\ge0$, with equality only when $P=R$, hence $\rho_k=\alpha_k$ for every $k$ by [F5]. [A1, F3, F4, F5, step 1.1, step 2.2, algebra]

3.2 For fixed candidate covariance $V_k$, write $d_i=x_i-\bar x_k$ and $e=\bar x_k-m_k$. Since $\sum_i\gamma_{ik}d_i=0$, expanding the quadratic form gives $\sum_i\gamma_{ik}(x_i-m_k)^{\mathsf T}V_k^{-1}(x_i-m_k)=\sum_i\gamma_{ik}d_i^{\mathsf T}V_k^{-1}d_i+N_ke^{\mathsf T}V_k^{-1}e.$ The last term is nonnegative and is zero exactly when $m_k=\bar x_k$, because $V_k^{-1}$ is positive definite by [F12]. It occurs with a negative coefficient in $Q$ by step 2.2, so the unique maximizing mean is $\bar x_k$. [F1, F12, step 1.1, step 2.2, algebra]

3.3 At this mean, coordinate expansion of the finite trace gives $\sum_i\gamma_{ik}d_i^{\mathsf T}V_k^{-1}d_i=N_k\operatorname{tr}(V_k^{-1}S_k)$. Therefore the covariance-dependent part of $Q$ is $-\frac{N_k}{2}(\log\det V_k+\operatorname{tr}(V_k^{-1}S_k))$ by step 2.2. Set $A=V_k^{-1}$; determinant identity [F11], the logarithm reciprocal law [F13], and the finite trace identity [F10] rewrite this as $\frac{N_k}{2}(\log\det A-\operatorname{tr}(AS_k))$. The candidate $A_*=S_k^{-1}$ is symmetric positive definite by step 2.1 and [F12]. Conversely, every symmetric positive-definite $A$ has positive-definite inverse, so this reparameterization ranges over the full covariance domain. [F10, F11, F12, F13, step 2.1, step 2.2, algebra]

3.4 Fix any other positive-definite $A$ and put $H=A-A_*$, $A_t=A_*+tH$, and $h(t)=\log\det A_t-\operatorname{tr}(A_tS_k)$. Each $A_t$ is positive definite by convexity of the cone. By [F6], $h$ is strictly concave when $H\ne0$. Jacobi's formula [F7], the scalar logarithm derivative [F8], and the chain rule [F9] give $h'(0)=\operatorname{tr}(A_*^{-1}H)-\operatorname{tr}(HS_k)=0$, since $A_*^{-1}=S_k$ and [F10] permits cyclic rearrangement of the finite trace. If $h(1)\ge h(0)$, strict concavity gives $h(s)>h(0)$ for each $0<s<1$. For $0<u<s$, concavity gives $(h(u)-h(0))/u\ge(h(s)-h(0))/s>0$. Letting $u\downarrow0$ contradicts $h'(0)=0$. Hence $h(1)<h(0)$ for every $A\ne A_*$, so $V_k=S_k$ is the unique maximizing covariance. [F6, F7, F8, F9, F10, step 2.1, algebra]

4.1 The expression for $Q$ is a sum over components of a weight term, a mean-dependent quadratic term, and a covariance-dependent term, with no cross-component parameter terms. Steps 3.1, 3.2, and 3.4 show each is uniquely maximized by the displayed parameters; step 2.1 ensures each maximizing covariance remains in the permitted positive-definite domain. The product choice is therefore an admissible attained global maximizer, and equality forces every component parameter to equal the displayed update formulas. Thus the displayed E-step responsibilities and M-step formulas are well-defined and attain the claimed maximum, without using a procedure-level property. [F1, step 2.1, step 3.1, step 3.2, step 3.4, algebra] ∎
