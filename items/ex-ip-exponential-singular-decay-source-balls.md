---
id: ex-ip-exponential-singular-decay-source-balls
kind: example
title: Exponential singular decay, logarithmic balls, and spectral gaps
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
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-limits-and-range
  - thm-exponential-is-strictly-increasing
  - thm-of-archimedean
  - cor-mean-value-theorem
  - def-complete-ordered-real-field
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

Assume Countable Choice. Put $I=\mathbb N\setminus\{0\}=\{1,2,\ldots\}$. On real $\ell^2(I)$, let $e_j$ be the coordinate vectors and define $K_\gamma x=(\exp(-\gamma_j)x_j)_{j\in I}$, where $\gamma_1=0$, $\gamma_j$ is strictly increasing, and $\gamma_j\to\infty$. For $\nu,q,\rho>0$, the power source ball $X_{\nu,\rho}(K_\gamma):=\{|K_\gamma|^\nu w:\|w\|_2\le\rho\}$ has coordinates $x_j=\exp(-\nu\gamma_j)w_j$, and the logarithmic source ball $X_{\log,q,\rho}(K_\gamma):=\{\psi_q(|K_\gamma|)w:\|w\|_2\le\rho\}$, where $\psi_q(0)=0$ and $\psi_q(t)=(1+\log(1/t))^{-q}$ for $0<t\le1$, has coordinates $x_j=(1+\gamma_j)^{-q}w_j$. The operator is compact and injective with $\|K_\gamma\|=1$. The choice $\gamma_j=j-1$ gives ordinary exponential decay; $\gamma_j=j(j-1)/2$ gives gaps with $s_{j+1}/s_j=\exp(-j)$. For this latter choice, write $s_j=\exp(-\gamma_j)$ and $\delta_j^\star=\rho(s_js_{j+1})^{(\nu+1)/2}$. Then $\varepsilon_{K_\gamma}(X_{\nu,\rho}(K_\gamma),\delta_j^\star)/((\delta_j^\star)^{\nu/(\nu+1)}\rho^{1/(\nu+1)})\to0$, so no matching constant lower bound holds at every sufficiently small $\delta$.

## Example references

[[def-ip-index-source-ball|Spectral-index source balls]]

[[def-ip-power-source-set|Power source ball]]

[[thm-ip-source-ball-modulus-of-continuity|Conditional modulus on a power source ball]]

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Section 4.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $I=\mathbb N\setminus\{0\}$, real $\ell^2(I)$, coordinate vectors $e_j$ for $j\in I$, a strictly increasing family $(\gamma_j)_{j\in I}$ with $\gamma_1=0$ and $\gamma_j\to\infty$, parameters $\nu,q,\rho>0$, and the diagonal map $K_\gamma$.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis of the compact norm-limit theorem, Hilbert adjoint, and compact square-root results used below.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]] and [[lem-square-summable-sequences-form-a-hilbert-space]]: For any index set $I$, $\ell^2(I,\mathbb R)$ has the coordinate inner product, norm squared $\sum_{j\in I}|x_j|^2$, and unit coordinate vectors $e_j$. The real space $\ell^2(\mathbb N,\mathbb R)$ is complete.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]] and [[def-operator-norm]]: The inner product satisfies Cauchy–Schwarz and the operator norm is the supremum of $\|Tx\|$ over $\|x\|\le1$.

[F3] [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], and [[def-self-adjoint-positive-unitary-and-normal-operator]]: Every bounded operator on a Hilbert space has a unique adjoint satisfying $\langle Tx,y\rangle=\langle x,T^*y\rangle$; self-adjointness is $T^*=T$, and positivity is $\langle Tx,x\rangle\ge0$ for every $x$.

[F4] [[lem-finite-rank-operators-are-compact]] and [[thm-norm-limit-of-compact-operators-is-compact]]: Bounded finite-rank maps are compact, and a norm limit of compact maps into a Banach space is compact under Countable Choice.

[F5] [[lem-positive-square-root-of-a-compact-positive-operator]] and [[def-compact-spectral-filter-and-qualification]]: A compact self-adjoint positive operator has a unique compact self-adjoint positive square root. This root acts on an eigenvector of eigenvalue $\lambda$ by $\sqrt{\lambda}$; compact spectral multipliers act eigenvalue by eigenvalue.

[F6] [[def-ip-index-source-ball]] and [[def-ip-power-source-set]]: The source ball is the image of the radius-$\rho$ vector ball under its spectral index multiplier; the power index is $t^\nu$, and the logarithmic candidate defines a source ball once bounded on the compact spectrum.

[F7] [[def-ip-centered-modulus-of-continuity]] and [[thm-ip-source-ball-modulus-of-continuity]]: The centered modulus is the supremum of $\|x\|$ over source-ball elements with $\|Kx\|\le\delta$. For a power source ball it is at most $\delta^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$ and attains this value at the radii $\rho s_j^{\nu+1}$.

[F8] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]], [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]], [[thm-real-power-laws]], [[thm-of-archimedean]], and [[def-complete-ordered-real-field]]: The real field is complete and ordered; $\log$ is strictly increasing with $\log1=0$, $\exp(0)=1$, and positive-base real powers are positive. For $a>0$, $(t^a)'=at^{a-1}>0$ on $t>0$, so the mean value theorem makes $t\mapsto t^a$ increasing. The canonical natural numbers are cofinal, hence for every fixed $c>0$ the sequence $cj$ tends to $+\infty$.

[F9] [[thm-exponential-limits-and-range]]: $\exp(-t)\to0$ as $t\to+\infty$.

[F10] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], and [[thm-exponential-is-strictly-increasing]]: $\exp(0)=1$, $\exp(u+v)=\exp(u)\exp(v)$, $\exp(-u)=1/\exp(u)$, and the exponential is strictly increasing.

## Verification

1.1 For $0<t\le1$, [F8] gives $\log(1/t)\ge0$, so $1+\log(1/t)\ge1$; since $q>0$, $(1+\log(1/t))^q\ge1$ and $\psi_q(t)\le1$. Together with $\psi_q(0)=0$, this verifies that the logarithmic index is bounded and admissible under [F6]. [given, A1, F6, F8, algebra]

1.2 The bijection $Ux=(x_{n+1})_{n\in\mathbb N}$ from $\ell^2(I,\mathbb R)$ to $\ell^2(\mathbb N,\mathbb R)$ preserves the coordinate inner product, so [F1] transfers completeness to $\ell^2(I,\mathbb R)$. Since $\gamma_j\ge0$, strict increase of the exponential [F10] gives $0<\exp(-\gamma_j)\le1$. Thus for $x=(x_j)\in\ell^2(I)$, $\|K_\gamma x\|_2^2=\sum_{j\in I}\exp(-2\gamma_j)|x_j|^2\le\|x\|_2^2$, so $K_\gamma$ is bounded with $\|K_\gamma\|\le1$; $K_\gamma e_1=e_1$ gives $\|K_\gamma\|=1$. For $x,y\in\ell^2(I)$, [F2] makes $\sum_{j\in I}\exp(-\gamma_j)x_jy_j$ absolutely convergent, and the coordinate inner product gives $\langle K_\gamma x,y\rangle=\sum_{j\in I}\exp(-\gamma_j)x_jy_j=\langle x,K_\gamma y\rangle$. By uniqueness in [F3], $K_\gamma^*=K_\gamma$; moreover $\langle K_\gamma x,x\rangle=\sum_{j\in I}\exp(-\gamma_j)|x_j|^2\ge0$, so $K_\gamma$ is positive. [given, A1, F1, F2, F3, F10, algebra]

2.1 Since $\gamma_j\to\infty$, [F9] gives $s_j=\exp(-\gamma_j)\to0$. For $N\ge1$, truncate $K_\gamma$ by $(K_{\gamma,N}x)_j=s_jx_j$ for $j\le N$ and $0$ for $j>N$. By step 1.2, $K_{\gamma,N}$ is bounded; since each $s_j>0$ for $j\le N$, its range is exactly $\operatorname{span}\{e_1,\ldots,e_N\}$, so [F4] makes it compact. Since $s_j$ decreases to $0$, $\|K_\gamma-K_{\gamma,N}\|=\sup_{j>N}s_j=s_{N+1}\to0$; [F4] then makes $K_\gamma$ compact, and positivity of each $s_j$ makes it injective. The choices $\gamma_j=j-1$ and $\gamma_j=j(j-1)/2$ are strictly increasing from $0$ to infinity; for the second, $\gamma_j\ge j-1$ for $j\ge2$ and [F8] makes the natural numbers cofinal. Its gaps are $\gamma_{j+1}-\gamma_j=j$, so [F10] gives $s_{j+1}/s_j=\exp(-\gamma_{j+1})/\exp(-\gamma_j)=\exp(-j)\to0$ by [F8]–[F9]. [given, A1, step 1.2, F1, F2, F4, F8, F9, F10, algebra]

3.1 By steps 1.2 and 2.1, $K_\gamma$ is compact, self-adjoint, and positive, and $K_\gamma^*K_\gamma=K_\gamma^2$. Thus $K_\gamma$ is itself a compact positive square root of $K_\gamma^*K_\gamma$, so uniqueness in [F5] gives $|K_\gamma|=K_\gamma$. Hence each coordinate vector has singular value $s_j=\exp(-\gamma_j)$; [F5] gives $(|K_\gamma|^\nu w)_j=\exp(-\nu\gamma_j)w_j$ and $(\psi_q(|K_\gamma|)w)_j=(1+\log(1/s_j))^{-q}w_j=(1+\gamma_j)^{-q}w_j$. [given, A1, step 1.2, step 2.1, F1, F5, F6, F8, algebra]

4.1 For each $j$, take $w^{(j)}=\rho e_j$ and $x^{(j)}=|K_\gamma|^\nu w^{(j)}=\rho s_j^\nu e_j$ by step 3.1. Then $\|K_\gamma x^{(j)}\|_2=\rho s_j^{\nu+1}$ and $\|x^{(j)}\|_2=\rho s_j^\nu=(\rho s_j^{\nu+1})^{\nu/(\nu+1)}\rho^{1/(\nu+1)}$, so [F7] gives equality at that noise radius. [given, A1, step 3.1, F1, F7, construct, algebra]

5.1 Take $\gamma_j=j(j-1)/2$, write $r_j=s_{j+1}/s_j=\exp(-j)$, and set $\delta_j^\star=\rho(s_js_{j+1})^{(\nu+1)/2}$. For any $x=|K_\gamma|^\nu w$ with $\|w\|_2\le\rho$ and $\|K_\gamma x\|_2\le\delta_j^\star$, step 3.1 gives $x_k=s_k^\nu w_k$ and $(K_\gamma x)_k=s_k^{\nu+1}w_k$. Since $s_k\ge s_j$ for $k\le j$, $\sum_{k\le j}|x_k|^2\le s_j^{-2}\sum_{k\le j}|(K_\gamma x)_k|^2\le(\delta_j^\star)^2/s_j^2$; since $s_k\le s_{j+1}$ for $k>j$, $\sum_{k>j}|x_k|^2\le s_{j+1}^{2\nu}\sum_{k>j}|w_k|^2\le\rho^2s_{j+1}^{2\nu}$. Thus $\|x\|_2^2\le(\delta_j^\star)^2/s_j^2+\rho^2s_{j+1}^{2\nu}$. With $M_j=(\delta_j^\star)^{\nu/(\nu+1)}\rho^{1/(\nu+1)}=\rho(s_js_{j+1})^{\nu/2}$, this gives $\|x\|_2^2/M_j^2\le r_j+r_j^\nu$. By [F8], $r_j^\nu=\exp(-\nu j)\to0$ by [F9], since $\nu>0$ and the natural numbers are cofinal; likewise $r_j=\exp(-j)\to0$. Taking the supremum over such feasible $x$ using [F7] gives $\varepsilon_{K_\gamma}(X_{\nu,\rho}(K_\gamma),\delta_j^\star)/M_j\le\sqrt{r_j+r_j^\nu}\to0$. By step 2.1, $\gamma_j\to\infty$; [F8] and the real-power definition give $\delta_j^\star=\rho\exp(-\tfrac{\nu+1}{2}(\gamma_j+\gamma_{j+1}))\to0$ by [F9]. Therefore, for every $c>0$ and $\delta_0>0$, some $j$ has $\delta_j^\star<\delta_0$ and $\varepsilon_{K_\gamma}(X_{\nu,\rho}(K_\gamma),\delta_j^\star)<cM_j$, ruling out a positive constant lower bound by the power scale at every sufficiently small noise radius. [given, step 2.1, step 3.1, F1, F6, F7, F8, F9, F10, algebra] ∎
