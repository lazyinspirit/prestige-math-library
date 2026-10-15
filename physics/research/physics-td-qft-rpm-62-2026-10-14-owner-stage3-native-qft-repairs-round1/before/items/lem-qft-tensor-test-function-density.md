---
id: lem-qft-tensor-test-function-density
kind: lemma
title: Tensor-product tests are dense in smooth compact kernel topology
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-regular-polynomial-functional-algebra
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-ck-and-multi-index-notation-in-several-variables
  - lem-test-function-cutoffs-and-euclidean-localization
  - cor-compact-domain-maps-are-uniformly-continuous
  - thm-sequential-convergence-in-test-function-space
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  cor-compact-domain-maps-are-uniformly-continuous: mathematical-premise
  thm-sequential-convergence-in-test-function-space: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-fejer-uniform-convergence-for-continuous-periodic-functions: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 4
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 4, equation (23); the Fourier-density and uniqueness argument below is supplied locally.
---

## Statement

Let $d,n\ge1$, $X=\mathbb R^d$, and give
$\mathcal D(X^n)=C_c^\infty(X^n;\mathbb C)$ its LF test-function topology.
The finite linear span of elementary product tests
$$ (x_1,\ldots,x_n)\longmapsto\prod_{j=1}^{n}g_j(x_j),\qquad g_j\in\mathcal D(X), $$
is dense. More precisely, for each $\Phi\in\mathcal D(X^n)$, there is a
sequence of such finite sums whose supports lie in one fixed compact product
and whose derivatives of every multi-index converge uniformly to those of
$\Phi$. Symmetrized finite sums are dense in
$\mathcal D_{\mathrm{sym}}(X^n)$. Consequently the symmetric-kernel
representation in [[def-qft-regular-polynomial-functional-algebra]] is
unique: if a finite symmetric-kernel polynomial vanishes on every real smooth
field, every coefficient kernel vanishes.

## Facts & Assumptions

**Given:** Integers $d,n\ge1$, the test-function topology, and the coefficient presentation of a regular polynomial functional.

[F1] A test is a smooth complex function with compact support ([[def-test-function-space-d-of-an-open-set]]); convergence in the LF topology is equivalent to one common compact support and uniform convergence of every derivative ([[def-test-function-topology]], [[thm-sequential-convergence-in-test-function-space]]).

[F2] Multi-index derivatives and $C^\infty$ regularity are defined coordinatewise ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] A compact subset of an open set admits a smooth compact cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] A continuous map on a compact rectangle is uniformly continuous ([[cor-compact-domain-maps-are-uniformly-continuous]]).

[F5] Fejer means of a continuous one-periodic function converge uniformly ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F6] Write each complex number as $a+ib$ with real coordinates and use $\overline{a+ib}=a-ib$ and $|a+ib|=(a^2+b^2)^{1/2}$ for conjugation and modulus. The complex exponential has derivative $\exp'=\exp$, obeys the addition law, and satisfies $\exp(i\pi)=-1$; hence the integer characters used below are smooth and periodic ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] Continuous functions on compact rectangles are Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]); iterated integrals in coordinate rectangles agree with the multiple integral, and the integral is linear and satisfies the absolute-value bound ([[thm-riemann-fubini-on-product-rectangles]], [[thm-multidimensional-integral-properties]]). Complex-valued integrals here are the componentwise integrals of their real and imaginary parts, using the convention in [F9]; all the cited real integration rules apply componentwise.

[F8] For a differentiable product, the usual product rule holds ([[thm-algebra-of-derivatives]]); the integral of a continuous derivative is the endpoint difference ([[thm-ftc-second-part]]).

[F9] The regular polynomial is the finite coefficient map in [[def-qft-regular-polynomial-functional-algebra]]; its kernels are symmetric, its field domain is all $C^\infty(X;\mathbb R)$, and its compactly supported complex Riemann integrals are defined componentwise by real and imaginary parts over a containing cube.

## Proof

**Given:** [F1]–[F9].

1.1 Fix $\Phi\in\mathcal D(X^n)$ and regard $X^n$ as $\mathbb R^D$, $D=dn$. The coordinate projections of $\operatorname{supp}\Phi$ lie in a compact $K\subset X$. By [F3] choose $\chi\in\mathcal D(X)$ equal to one near $K$. Choose $L>0$ so large that every coordinate of $\operatorname{supp}\chi$ lies strictly inside $(-L/2,L/2)$. Extend $\Phi$ by zero and then $L$-periodically in each of the $D$ coordinates; because its support is interior to the period cube, the resulting function is smooth on the compact $D$-torus. [given, F1, F2, F3, construct]

1.2 For $k\in\mathbb Z^D$, put $e_k(x)=\exp(2\pi i k\cdot x/L)$, $Q=[-L/2,L/2]^D$, and $\widehat\Phi(k)=L^{-D}\int_Q\Phi(x)\overline{e_k(x)}\,dx$. These are Riemann integrals by [F7]. Periodic integration by parts in one coordinate has no boundary term: the endpoint product agrees by periodicity, and [F8] converts the integral of a derivative to that endpoint difference. Writing $\Delta=\sum_{j=1}^D\partial_j^2$, applying this identity to $(1-\Delta)^q\Phi$, and using the character derivative from [F6], gives $\widehat{(1-\Delta)^q\Phi}(k) =(1+(2\pi/L)^2|k|^2)^q\widehat\Phi(k)$. The left side is bounded by the volume of $Q$ times the supremum of the continuous function $(1-\Delta)^q\Phi$, so $$ |\widehat\Phi(k)|\le C_{\Phi,q}\bigl(1+|k|^2\bigr)^{-q}. $$ For integer $m\ge1$, the number of lattice points in $m\le|k|_\infty<m+1$ is at most $(2m+3)^D-(2m-1)^D\le C_D(m+1)^{D-1}$, by expanding the two powers; the shell $|k|_\infty<1$ is finite. Thus, for every multi-index $\alpha$, choosing $q$ with $2q>D+|\alpha|$ makes $\sum_k |k|^{|\alpha|}|\widehat\Phi(k)|$ finite. The Fourier series and each derivative series therefore converge absolutely and uniformly on the torus. Integrating each uniformly convergent derivative series along a coordinate segment and using [F8] shows it is the corresponding derivative of the uniformly convergent Fourier sum; iterating over coordinates gives the same assertion for every multi-index. [F6, F7, F8, algebra, algebra]

2.1 The uniform sum has the same Fourier coefficients as $\Phi$, since uniform convergence allows integration term by term and distinct integer characters have zero cross integral by [F6]–[F8]. Their difference is a continuous $D$-periodic function with every multi-index Fourier coefficient zero. For $D=1$, all its Fejer means are finite sums of those zero coefficients, so [F5] makes the function zero. For $D>1$, fix the first frequency $k_1$ and integrate in the first coordinate to obtain a continuous $(D-1)$-periodic coefficient function; continuity follows from [F4] and the compact integral bound [F7]. Its remaining Fourier coefficients are the corresponding coefficients of the original difference by [F7], so induction makes each such coefficient function zero. Applying the one-dimensional case to each fixed choice of the remaining coordinates shows the original difference is zero. Hence the Fourier series sums to $\Phi$, with all derivatives uniformly. [F4, F5, F6, F7, F8, step 1.2]

3.1 Let $S_M\Phi$ be the finite Fourier sum over $|k|_\infty\le M$. On $\mathbb R^D$, put $$ P_M(x_1,\ldots,x_n)=\left(\prod_{j=1}^{n}\chi(x_j)\right)S_M\Phi(x_1,\ldots,x_n). $$ Each Fourier character factors over the $n$ blocks $x_j\in\mathbb R^d$; after multiplication by the product cutoff, each term is an elementary tensor of tests in $\mathcal D(X)$. Also $(\prod_j\chi(x_j))\Phi=\Phi$, since every coordinate projection of its support lies in $K$. The product rule [F8] and the derivative convergence from step 2.1 show $P_M\to\Phi$ uniformly with every derivative, with all supports in the fixed compact $(\operatorname{supp}\chi)^n$. By [F1] this is convergence in the LF topology. Applying the finite symmetrization operator preserves convergence and turns the approximants into symmetric finite tensor sums whenever $\Phi$ is symmetric. [F1, F3, F8, step 2.1]

4.1 Suppose $\sum_{n=0}^{N}\int f_n(x_1,\ldots,x_n)\prod_j\phi(x_j)\,dx=0$ for every real smooth $\phi$, with symmetric test kernels $f_n$ as in [F9]. Replacing $\phi$ by $t\phi$ makes a scalar polynomial in $t$ vanish for every real $t$, so each homogeneous term $\int f_n\phi^{\otimes n}$ is zero for every $\phi$. For fixed real test functions $h_1,\ldots,h_n$, substitute $\phi=\sum_j t_jh_j$. The coefficient of $t_1\cdots t_n$ is $n!\int f_n(x_1,\ldots,x_n)\prod_jh_j(x_j)\,dx$, by symmetry, and must vanish. Complex product tests are finite linear combinations of real product tests by separating real and imaginary parts. Step 3.1 makes their span dense, so choose approximants $\psi_M\to\overline{f_n}$ with support in a fixed compact rectangle $C$. The componentwise convention [F7, F9] and the Riemann-sum triangle inequality give $$ \left|\int f_n(\psi_M-\overline{f_n})\right| \le \operatorname{vol}(C)\|f_n\|_\infty \|\psi_M-\overline{f_n}\|_\infty\longrightarrow0. $$ Thus $\int|f_n|^2=0$. If $f_n$ were nonzero at some point, its support constraint and continuity give a closed nondegenerate rectangle $Q\subset\operatorname{int}C$ and $c>0$ with $|f_n|\ge c$ on $Q$. Insert the faces of $Q$ into a Darboux grid of $C$. Since $|f_n|^2\ge0$ everywhere and $|f_n|^2\ge c^2$ on $Q$, the lower Darboux sum is at least $c^2\operatorname{vol}(Q)>0$, so the real Riemann integral is positive, a contradiction. Hence $f_n=0$. The constant term is zero by taking $\phi=0$. This proves uniqueness and the well-definedness claim used by the definition. [F1, F7, F9, step 3.1, algebra] ∎
