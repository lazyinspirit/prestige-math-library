---
id: thm-nrqmx-ritz-upper-bounds
kind: theorem
domain: mathematics
library: mathematics
title: Conforming Ritz eigenvalue upper bounds
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - alg-nrqmx-rayleigh-ritz-procedure
  - thm-nrqmx-form-min-max
  - thm-nrqmx-closed-form-representation
  - def-discrete-and-essential-spectrum-of-a-self-adjoint-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  alg-nrqmx-rayleigh-ritz-procedure: mathematical-premise
  thm-nrqmx-form-min-max: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thành Nam, Functional Analysis II, lecture notes, Winter 2020–2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.3, printed pp.17–18: min–max characterization, proof,
        and essential-spectrum threshold. The conforming form-subspace
        comparison and dense-sequence argument are supplied locally."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space, let $A=A^*$ satisfy $A\ge-cI$ for some $c\ge0$, and set $Q(A)=D((A+cI)^{1/2})$. Define the associated closed form by

$$q_A(u,v)=\langle(A+cI)^{1/2}u,(A+cI)^{1/2}v\rangle-c\langle u,v\rangle\qquad(u,v\in Q(A)).$$

Let $\sigma_{\mathrm{ess}}(A)$ be the essential spectrum, the complement in $\sigma(A)$ of isolated eigenvalues of finite multiplicity, and put $\alpha=\inf\sigma_{\mathrm{ess}}(A)$, with $\alpha=+\infty$ when this set is empty. For $k\ge1$, define

$$\lambda_k(A)=\inf_{\substack{L\subseteq Q(A)\text{ linear},\ \dim L=k}}\ \sup_{\substack{u\in L\\\|u\|=1}}q_A[u],\qquad q_A[u]=q_A(u,u),$$

where the infimum over an empty family is $+\infty$. For a finite-dimensional conforming subspace $V\subseteq Q(A)$ and $1\le k\le\dim V$, define its $k$th Ritz value

$$\theta_k(V)=\inf_{\substack{L\subseteq V\text{ linear},\ \dim L=k}}\ \sup_{\substack{u\in L\\\|u\|=1}}q_A[u].$$

Then $\theta_k(V)\ge\lambda_k(A)$. If $V_1\subseteq V_2\subseteq\cdots\subseteq Q(A)$ are finite-dimensional subspaces whose union is dense in $Q(A)$ in the form norm $\|u\|_{Q(A)}^2=q_A[u]+(c+1)\|u\|^2$, then for every fixed $k$ with $\lambda_k(A)<\alpha$ the values $\theta_k(V_n)$, defined once $\dim V_n\ge k$, decrease to $\lambda_k(A)$, the $k$th isolated eigenvalue below the essential spectrum counted with multiplicity.

## Statement references

[[alg-nrqmx-rayleigh-ritz-procedure]]

[[thm-nrqmx-form-min-max]]

[[thm-nrqmx-closed-form-representation]]

[[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]

[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

## Facts & Assumptions

**Given:** Choice and Countable Choice; $H,A,c,Q(A),q_A,\alpha$, and $\lambda_k(A)$ as in the Statement; conforming finite-dimensional subspaces $V\subseteq Q(A)$ and a nested sequence $(V_n)$ dense in the form norm.

[A1] Choice and Countable Choice are the set-theoretic assumptions used by the stated form min–max supplier ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The discrete spectrum consists of isolated eigenvalues of finite multiplicity; the essential spectrum is its complement in $\sigma(A)$, and $\alpha=\inf\sigma_{\mathrm{ess}}(A)$ with the empty-set convention ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[F2] For a self-adjoint $A\ge-cI$, the form domain is $Q(A)=D((A+cI)^{1/2})$, its form norm is $\|u\|_{Q(A)}^2=q_A[u]+(c+1)\|u\|^2$, and $\lambda_k(A)$ is the infimum over all $k$-dimensional form subspaces; when $\lambda_k(A)<\alpha$, it is the $k$th eigenvalue below $\alpha$, counted with multiplicity ([[thm-nrqmx-form-min-max]]).

[F3] For the closed form associated to $A$, $q_A(u,v)=\langle Au,v\rangle$ whenever $u\in D(A)$ and $v\in Q(A)$ ([[thm-nrqmx-closed-form-representation]]).

[F4] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis and real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] The Cauchy–Schwarz inequality holds for the form inner product and the Hilbert-space inner product ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] For each conforming finite subspace, the algorithm returns the ordered generalized eigenvalues of its exact Gram and form matrices, with a Gram-orthonormal eigenbasis ([[alg-nrqmx-rayleigh-ritz-procedure]]).

## Proof

1.1 Fix $V$ with $m=\dim V\ge k$. The algorithm in [F6] gives the eigenvalues $\rho_1\le\cdots\le\rho_m$ of the Hermitian form matrix relative to its positive Gram matrix and coefficient vectors $c_1,\ldots,c_m$. Their linear combinations $e_j:=\sum_{i=1}^m(c_j)_i\phi_i$ form an orthonormal eigenbasis of $V$: Gram normalization gives orthonormality, and the coefficient eigenvalue equation gives $q_A(e_j,e_i)=\rho_j\delta_{ij}$. For any $k$-dimensional $L\subseteq V$, the dimension formula forces $L\cap\operatorname{span}\{e_k,\ldots,e_m\}\ne\{0\}$; a unit vector in this intersection has form value at least $\rho_k$. The subspace $\operatorname{span}\{e_1,\ldots,e_k\}$ has supremum exactly $\rho_k$. Hence $\theta_k(V)=\rho_k$, the $k$th generalized Ritz eigenvalue. [F4, F6, algebra]

1.2 Suppose $\lambda_k(A)<\alpha$. The threshold $\alpha$ is the lower edge of the essential spectrum from [F1], and [F2] gives orthonormal eigenvectors $u_1,\ldots,u_k\in D(A)$ for the first $k$ eigenvalues $\lambda_1\le\cdots\le\lambda_k=\lambda_k(A)$, counted with multiplicity. [A1, F1, F2, given]

2.1 Every $k$-dimensional subspace of $V$ is a $k$-dimensional subspace of $Q(A)$, so the infimum defining $\theta_k(V)$ is over a subfamily of the one defining $\lambda_k(A)$. Therefore $\theta_k(V)\ge\lambda_k(A)$. [A1, F2, step 1.1]

2.2 For $u=\sum_{j=1}^k c_ju_j$ with $\sum_j|c_j|^2=1$, orthonormality gives $\|u\|=1$, while [F3] gives $q_A(u_j,u_i)=\langle Au_j,u_i\rangle=\lambda_j\delta_{ij}$. Hence $q_A[u]=\sum_j\lambda_j|c_j|^2\le\lambda_k(A)$. [F3, step 1.2, algebra]

3.1 For nested $V_n$, every $k$-subspace of $V_n$ is a $k$-subspace of $V_{n+1}$; thus $\theta_k(V_{n+1})\le\theta_k(V_n)$. By step 2.1 this sequence is bounded below by $\lambda_k(A)$, so it has a limit at least $\lambda_k(A)$. [step 2.1, algebra]

3.2 Let $\varepsilon>0$ and put $M=(\sum_{j=1}^k\|u_j\|_{Q(A)}^2)^{1/2}$. For each $j$, density gives an approximation from some $V_{n_j}$; taking $N=\max_jn_j$ and using nesting, choose all $w_j\in V_N$ with $\|w_j-u_j\|_{Q(A)}<\delta$. For coefficients $c$ with $\sum_j|c_j|^2=1$, put $w=\sum_jc_jw_j$ and $u=\sum_jc_ju_j$. Then $\|w-u\|_{Q(A)}\le\sqrt{k}\delta$ and $\|u\|=1$, so $\|w\|\ge1-\sqrt{k}\delta$; taking $\sqrt{k}\delta<1/2$ ensures the $w_j$ are linearly independent. Writing $a(x,y)=q_A(x,y)+(c+1)\langle x,y\rangle$, [F5] and $a[x]\ge\|x\|^2$ give $|q_A(x,y)|\le(c+2)\|x\|_{Q(A)}\|y\|_{Q(A)}$. Since $\|u\|_{Q(A)}\le M$ and $\|w\|_{Q(A)}\le M+\sqrt{k}\delta$, this yields $|q_A[w]-q_A[u]|\le(c+2)\sqrt{k}\delta(2M+\sqrt{k}\delta)$ uniformly in $c$. Also $|\|w\|^2-1|\le\sqrt{k}\delta(2+\sqrt{k}\delta)$ uniformly, so for sufficiently small $\delta$, $\|w\|^2\ge1/2$. The bound just proved for $q_A[w]-q_A[u]$ and the uniform bound $|q_A[u]|\le\max_j|\lambda_j|$ then show that $q_A[w]/\|w\|^2$ converges uniformly to $q_A[u]$. The values $q_A[u]=\sum_j\lambda_j|c_j|^2$ are at most $\lambda_k(A)$ by step 2.2; hence choose $\delta$ small enough that every such $w$ satisfies $q_A[w]/\|w\|^2\le\lambda_k(A)+\varepsilon$. [A1, F5, step 2.2, given, algebra]

4.1 The span of $w_1,\ldots,w_k$ is a $k$-dimensional subspace of $V_N$, so step 3.2 gives $\theta_k(V_N)\le\lambda_k(A)+\varepsilon$. By monotonicity from step 3.1 the same upper bound holds for all $n\ge N$. As $\varepsilon>0$ is arbitrary, the limit in step 3.1 is at most $\lambda_k(A)$; combined with its lower bound from step 2.1 it equals $\lambda_k(A)$. [step 3.1, step 3.2, step 2.1, algebra] ∎
