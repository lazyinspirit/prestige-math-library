---
id: lem-cm-linearized-propagation-of-covariance
kind: lemma
title: "The covariance of the linearization is $A\\Sigma A^{\\mathsf T}$"
status: published
origin: pipeline
domain: mathematics
deps: [cor-expectation-linearity-monotonicity-and-modulus-bound, def-cm-covariance-matrix-of-a-random-vector, def-jacobian-matrix-and-gradient, def-matrix-space, def-measurable-function-between-measurable-spaces, def-random-element-and-real-random-variable, def-total-derivative-in-euclidean-space, lem-variance-and-covariance-identities-for-random-variables, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-cauchy-schwarz-in-an-inner-product-space, thm-continuous-preimages-of-borel-sets-are-borel, thm-coordinatewise-measurability-into-r-n, thm-matrix-multiplication-laws]
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-space: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-coordinatewise-measurability-into-r-n: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clauses 5.1.2 and 5.2.2, equations (10) and (13): the law of propagation of uncertainty"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "B. N. Taylor and C. E. Kuyatt, Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results, NIST Technical Note 1297 (1994), Appendix A, equation (A-3)"
      url: "https://physics.nist.gov/cuu/pdf/tn1297.pdf"
verification:
  precheck: pass
---

## Statement

Let $m,d\ge1$, let $U\subseteq\mathbb R^m$ be open, let $\mu\in U$, and let
$h:U\to\mathbb R^d$ be Borel measurable and totally differentiable at $\mu$
with total derivative $A:=Dh(\mu):\mathbb R^m\to\mathbb R^d$
([[def-total-derivative-in-euclidean-space]],
[[def-measurable-function-between-measurable-spaces]]); for instance this
holds when $h$ is $C^1$ on $U$, since continuous maps have Borel preimages of
Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]). Let
$X:\Omega\to\mathbb R^m$ be a random element with values in $U$,
square-integrable with mean vector $E[X]=\mu$ and covariance matrix $\Sigma$
([[def-cm-covariance-matrix-of-a-random-vector]]), and define the
**linearization**
$$T:U\longrightarrow\mathbb R^d,\qquad T(x):=h(\mu)+A(x-\mu).$$
Then $T\circ X$ is a random element of $\mathbb R^d$, its mean vector is
$$E\bigl[T(X)\bigr]=h(\mu),$$
and its covariance matrix is
$$\operatorname{Cov}\bigl(T(X)\bigr)=A\Sigma A^{\mathsf T},$$
where, in the one-based statistical coordinate notation of
[[def-cm-covariance-matrix-of-a-random-vector]],
$$A_{ij}:=\partial_{j-1}h_{i-1}(\mu),\qquad 1\le i\le d,\quad1\le j\le m,$$
and $A\Sigma A^{\mathsf T}$ is the matrix product of
[[thm-matrix-multiplication-laws]] in the matrix space of [[def-matrix-space]].

## Facts & Assumptions

**Given:** Objects and hypotheses as in the Statement, with $A=(a_{ij})$ the Jacobian matrix of $h$ at $\mu$, so $(Av)_i=\sum_{j=1}^{m}a_{ij}v_j$ for $v\in\mathbb R^m$.

[L1] The coordinates $X_j$ satisfy $E[X_j^2]<+\infty$, the differences $X_j-\mu_j$ are square-integrable and integrable, and $\Sigma_{kl}=\operatorname{Cov}(X_k,X_l)=E[(X_k-\mu_k)(X_l-\mu_l)]$ is a finite real number. ([[def-cm-covariance-matrix-of-a-random-vector]])

[L2] For integrable random variables $U,V$ and scalars $a,b$, $E[aU+bV]=aE[U]+bE[V]$; if $U\le V$ almost surely then $E[U]\le E[V]$; and $\lvert E[U]\rvert\le E[\lvert U\rvert]$. In particular $\operatorname{Cov}(U,V)=E[UV]-E[U]E[V]$ for square-integrable $U,V$. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[lem-variance-and-covariance-identities-for-random-variables]])

[L3] Covariance is symmetric and bilinear on finite linear combinations of square-integrable real random variables: for finite families $(U_i)$, $(V_j)$ and real scalars, $\operatorname{Cov}\bigl(\sum_ia_iU_i,\sum_jb_jV_j\bigr)=\sum_{i,j}a_ib_j\operatorname{Cov}(U_i,V_j)$, and covariance with a constant is zero. ([[lem-variance-and-covariance-identities-for-random-variables]])

[L4] Each coordinate projection on $U\subseteq\mathbb R^m$ is continuous, hence has Borel preimages of Borel sets; finite sums and scalar multiples of measurable real-valued functions are measurable, and a map into $\mathbb R^d$ is measurable exactly when its coordinates are. ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], [[thm-coordinatewise-measurability-into-r-n]])

[L5] $(Av)_i=\sum_{j=1}^{m}a_{ij}v_j$ and $\bigl(A\Sigma A^{\mathsf T}\bigr)_{ij}=\sum_{k,l=1}^{m}a_{ik}a_{jl}\Sigma_{kl}$ in the matrix space. ([[def-jacobian-matrix-and-gradient]], [[def-matrix-space]], [[thm-matrix-multiplication-laws]])

[L6] For vectors $u,v$ in a real inner-product space, $|\langle u,v\rangle|\le\|u\|\,\|v\|$. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

## Proof

**Proof technique:** direct coordinatewise computation.

1.1 For each $i$, the coordinate projections on $U$ are continuous, so the affine function $x\mapsto h_i(\mu)+\sum_{j=1}^{m}a_{ij}(x_j-\mu_j)$ is Borel by [L4]; composition with $X$ makes $T_i(X)$ measurable, and coordinatewise measurability gives that $T\circ X$ is a random element of $\mathbb R^d$. By [L1] and [L6], $$E\left[\left(\sum_{j=1}^{m}a_{ij}(X_j-\mu_j)\right)^2\right]\le\left(\sum_{j=1}^{m}a_{ij}^2\right)\left(\sum_{j=1}^{m}E[(X_j-\mu_j)^2]\right)<+\infty,$$ so the linear part is square-integrable; since $(u+v)^2\le2u^2+2v^2$, adding the finite constant $h_i(\mu)$ shows $T_i(X)$ is square-integrable as well. [given, L1, L4, L6, algebra]

2.1 For each $i$, [L2] and $E[X_j]=\mu_j$ give $E[T_i(X)]=h_i(\mu)+\sum_{j=1}^{m}a_{ij}E[X_j-\mu_j]=h_i(\mu)+\sum_{j=1}^{m}a_{ij}\cdot0=h_i(\mu)$, so $E[T(X)]=h(\mu)$. [step 1.1, L2, algebra]

3.1 Fix $i,j$. By step 2.1, $T_i(X)-E[T_i(X)]=\sum_{k=1}^{m}a_{ik}(X_k-\mu_k)$ and likewise with $j$ in place of $i$. The identity $\operatorname{Cov}(U,V)=E[UV]-E[U]E[V]$ of [L2] and the finite linearity of expectation give $$\operatorname{Cov}\bigl(T_i(X),T_j(X)\bigr)=\sum_{k=1}^{m}\sum_{l=1}^{m}a_{ik}a_{jl}\,E\bigl[(X_k-\mu_k)(X_l-\mu_l)\bigr]=\sum_{k,l=1}^{m}a_{ik}a_{jl}\Sigma_{kl},$$ the expectations being finite by [L1]; equivalently, covariance is bilinear on the finite combinations by [L3]. [step 2.1, L1, L2, L3, algebra]

4.1 By [L5], $\sum_{k,l=1}^{m}a_{ik}a_{jl}\Sigma_{kl}=\bigl(A\Sigma A^{\mathsf T}\bigr)_{ij}$ for every $i,j$; with steps 2.1 and 3.1 this proves $E[T(X)]=h(\mu)$ and $\operatorname{Cov}(T(X))=A\Sigma A^{\mathsf T}$. [step 2.1, step 3.1, L5] ∎

## Remarks

The formula is exact for the affine map $T$; it is a statement about $T\circ X$, not about $h\circ X$, unless a remainder hypothesis controls the difference ([[cor-cm-linearization-error-bounds]]).
