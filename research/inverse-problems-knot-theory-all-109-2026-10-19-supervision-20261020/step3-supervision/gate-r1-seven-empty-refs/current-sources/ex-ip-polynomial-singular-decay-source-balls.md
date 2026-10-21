---
id: ex-ip-polynomial-singular-decay-source-balls
kind: example
title: Polynomial singular decay with power and logarithmic source balls
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-index-source-ball
  - def-ip-power-source-set
  - def-ip-centered-modulus-of-continuity
  - thm-ip-source-ball-modulus-of-continuity
  - def-ip-compact-linear-inverse-model
  - def-compact-spectral-filter-and-qualification
  - def-countable-choice
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-square-summable-sequences-form-a-hilbert-space
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - lem-positive-square-root-of-a-compact-positive-operator
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-bounded-linear-operator
  - def-operator-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-compact-linear-operator
  - def-hilbert-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - cor-archimedean-reciprocal
  - lem-of-inverse-positive
  - cor-mean-value-theorem
  - def-complete-ordered-real-field
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Section 4.2, printed pp. 36–43"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2: power source balls, conditional modulus, and singular-direction equality."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1: spectral source sets and centered/two-truth moduli."
---

## Example

For this example put $\mathbb N=\{1,2,\ldots\}$. On real $\ell^2(\mathbb N)$, let $e_j$ be the coordinate vectors and define $K_ax=(j^{-a}x_j)_{j\ge1}$ for $a>0$. For $\nu,q,\rho>0$, the power source ball $X_{\nu,\rho}(K_a):=\{|K_a|^\nu w:\|w\|_2\le\rho\}$ has coordinates $x_j=j^{-a\nu}w_j$, while the logarithmic source ball $X_{\log,q,\rho}(K_a):=\{\psi_q(|K_a|)w:\|w\|_2\le\rho\}$, where $\psi_q(0)=0$ and $\psi_q(t)=(1+\log(1/t))^{-q}$ for $0<t\le1$, has coordinates $x_j=(1+a\log j)^{-q}w_j$. The operator is compact and injective with $\|K_a\|=1$. For the power ball the centered modulus has the bound in the conditional-modulus theorem, with equality at $\delta_j=\rho j^{-a(\nu+1)}$; this does not assert equality for every $\delta$.

## Example references

[[def-ip-index-source-ball|Spectral-index source balls]]

[[def-ip-power-source-set|Power source ball]]

[[thm-ip-source-ball-modulus-of-continuity|Conditional modulus on a power source ball]]

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Section 4.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Real $\ell^2(\mathbb N)$ with $\mathbb N=\{1,2,\ldots\}$, coordinate vectors $e_j$, $a,\nu,q,\rho>0$, the diagonal map $K_a$, and the power/logarithmic source-ball conventions.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis of the compact norm-limit theorem, Hilbert adjoint, and compact square-root results used below.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]] and [[lem-square-summable-sequences-form-a-hilbert-space]]: $\ell^2(\mathbb N,\mathbb R)$ has norm squared $\sum_j|x_j|^2$, unit coordinate vectors $e_j$, and is a complete real Hilbert space.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]] and [[def-operator-norm]]: The inner product satisfies Cauchy–Schwarz and the operator norm is the supremum of $\|Tx\|$ over $\|x\|\le1$.

[F3] [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], and [[def-self-adjoint-positive-unitary-and-normal-operator]]: Every bounded operator on a Hilbert space has a unique adjoint satisfying $\langle Tx,y\rangle=\langle x,T^*y\rangle$; self-adjointness is $T^*=T$, and positivity is $\langle Tx,x\rangle\ge0$ for every $x$.

[F4] [[lem-finite-rank-operators-are-compact]] and [[thm-norm-limit-of-compact-operators-is-compact]]: Bounded finite-rank maps are compact, and a norm limit of compact maps into a Banach space is compact under Countable Choice.

[F5] [[lem-positive-square-root-of-a-compact-positive-operator]] and [[def-compact-spectral-filter-and-qualification]]: The positive square root of a compact positive operator is unique and acts on an eigenvector of eigenvalue $\lambda$ by $\sqrt{\lambda}$; compact spectral multipliers act eigenvalue by eigenvalue.

[F6] [[def-ip-index-source-ball]] and [[def-ip-power-source-set]]: The source ball is the image of the radius-$\rho$ vector ball under its spectral index multiplier; the power index is $t^\nu$, and the logarithmic candidate defines a source ball once it is bounded on the compact spectrum.

[F7] [[thm-ip-source-ball-modulus-of-continuity]]: The centered power-source modulus is at most $\delta^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$ and attains this value at the radii $\rho s_j^{\nu+1}$.

[F8] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]], [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]], [[thm-real-power-laws]], [[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]], and [[def-complete-ordered-real-field]]: The real field is complete and ordered; $\log$ is strictly increasing with $\log 1=0$, $\exp(0)=1$, and positive-base real powers are positive. For $a>0$, $(t^a)'=at^{a-1}>0$ on $t>0$, so the mean value theorem makes $t\mapsto t^a$ increasing. For every $\varepsilon>0$, choose $N$ with $1/N<\varepsilon$ by the reciprocal Archimedean property; if $j\ge N$, reciprocal order gives $1/j\le1/N<\varepsilon$.

## Verification

1.1 For $0<t\le1$, $1/t\ge1$, so [F8] gives $\log(1/t)\ge\log1=0$. Thus $1+\log(1/t)\ge1$; since $q>0$, the positive power of this base is at least $1$, and its reciprocal $\psi_q(t)$ lies in $(0,1]$. Together with $\psi_q(0)=0$, this verifies that the logarithmic index is bounded and is admissible under [F6]. [given, F6, F8, algebra]

1.2 For $x=(x_j)\in\ell^2$, $\|K_ax\|_2^2=\sum_j j^{-2a}|x_j|^2\le\|x\|_2^2$, so $K_a$ is a well-defined bounded linear map with $\|K_a\|\le1$; $K_ae_1=e_1$ gives $\|K_a\|\ge1$. For $x,y\in\ell^2$, [F2] makes $\sum_j j^{-a}x_jy_j$ absolutely convergent, and the coordinate inner product gives $\langle K_ax,y\rangle=\sum_j j^{-a}x_jy_j=\langle x,K_ay\rangle$. Uniqueness of the adjoint in [F3] yields $K_a^*=K_a$, and $\langle K_ax,x\rangle=\sum_jj^{-a}|x_j|^2\ge0$, so $K_a$ is positive. [given, A1, F1, F2, F3, algebra]

2.1 For $N\ge1$ define $(K_{a,N}x)_j=j^{-a}x_j$ for $j\le N$ and $0$ for $j>N$. The coordinate estimate from step 1.2 gives $\|K_{a,N}x\|_2\le\|x\|_2$, so $K_{a,N}$ is bounded; since each $j^{-a}>0$ for $j\le N$, its range is exactly $\operatorname{span}\{e_1,\ldots,e_N\}$, so [F4] makes it compact. For every $x$, $\|(K_a-K_{a,N})x\|_2^2=\sum_{j>N}j^{-2a}|x_j|^2\le(N+1)^{-2a}\|x\|_2^2$, with equality at $x=e_{N+1}$; therefore $\|K_a-K_{a,N}\|=(N+1)^{-a}$. Given $\varepsilon>0$, [F8] supplies a threshold $N$ with $1/j<\varepsilon^{1/a}$ for all $j\ge N+1$; monotonicity of $t\mapsto t^a$ gives $(N+1)^{-a}<\varepsilon$. Thus $K_{a,N}\to K_a$ in norm, and [F4] makes $K_a$ compact. Each diagonal coefficient is positive, so $K_ax=0$ forces every $x_j=0$ and $K_a$ is injective. [given, A1, step 1.2, F1, F2, F4, F8, algebra, choose]

3.1 Since $K_a$ is compact, self-adjoint and positive by steps 1.2–2.1, $K_a$ is the unique positive square root of $K_a^*K_a=K_a^2$; [F5] therefore gives $|K_a|=K_a$. Each $e_j$ is an eigenvector of $|K_a|$ with eigenvalue $j^{-a}$. Applying the compact spectral multiplier [F5] coordinatewise yields $(|K_a|^\nu w)_j=j^{-a\nu}w_j$ and $(\psi_q(|K_a|)w)_j=\psi_q(j^{-a})w_j=(1+a\log j)^{-q}w_j$, proving the stated power and logarithmic coordinates. [given, A1, step 1.2, step 2.1, F1, F5, F6, algebra]

4.1 For each $j\ge1$ take $w^{(j)}=\rho e_j$ and $x^{(j)}=|K_a|^\nu w^{(j)}=\rho j^{-a\nu}e_j$. Then $\|K_ax^{(j)}\|_2=\rho j^{-a(\nu+1)}=\delta_j$ and $\|x^{(j)}\|_2=\rho j^{-a\nu}=\delta_j^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$. This feasible source-ball element attains the universal upper bound from [F7], so equality holds at $\delta_j$. [given, step 3.1, F1, F7, construct, algebra] ∎
