---
id: lem-matern-native-space-fourier-identity-and-positive-definiteness
kind: lemma
title: "The Matérn native space has its weighted Fourier norm and strict Gram positivity"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-spectral-integral-and-normalization
  - lem-matern-weighted-fourier-space-is-hilbert-and-injective
  - lem-schwartz-dense-in-fourier-bessel-potential-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-reals-ordered-field
  - thm-reals-field
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter 4, equations (4.5)–(4.8)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 18–25"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
---

## Statement

Assume the Axiom of Choice conservatively for the declared $L^2$ Hilbert-space dependency. Fix $d\ge1$, $\nu>0$, $a>0$, and $s=\nu+d/2$, and let $k,w$ be the normalized Matérn kernel and positive spectral density of [[def-normalized-matern-spectral-kernel]]. Let $\mathcal H_k(\mathbb R^d)$ consist of the inverse Fourier representatives $U_g$ with $\int |g(\xi)|^2/w(\xi)\,d\xi<\infty$, with inner product
$$\langle U_g,U_h\rangle_k=\int_{\mathbb R^d}\frac{g(\xi)\overline{h(\xi)}}{w(\xi)}d\xi.$$
Then this is a Hilbert space, each kernel section $k(\cdot-y)$ reproduces evaluation at $y$, and its span is dense. There are constants $0<c\le C<\infty$, depending only on $d,\nu,a$, such that
$$c\|U\|_{H^s(\mathbb R^d)}\le\|U\|_k\le C\|U\|_{H^s(\mathbb R^d)}.$$
For every finite list of distinct sites $X=(x_1,\ldots,x_N)$, the Matérn Gram matrix $K_X=(k(x_i-x_j))$ is strictly positive definite.

## Facts & Assumptions

**Given:** The Axiom of Choice, fixed $d,\nu,a$, the definitions of $k,w,H^s$, and distinct sites $X$.

[F1] $w(\xi)=A(a^2+4\pi^2|\xi|^2)^{-s}$ is positive and integrable with integral one; the inverse Fourier representation of $H^s$ is injective. ([[def-normalized-matern-spectral-kernel]], [[lem-matern-spectral-integral-and-normalization]], [[lem-matern-weighted-fourier-space-is-hilbert-and-injective]])

[F2] The $H^s$ Fourier norm is $\int(1+|\xi|^2)^s|g(\xi)|^2d\xi$, and the inverse Fourier representative is injective. ([[def-bessel-potential-space-and-restriction-quotient]], [[lem-matern-weighted-fourier-space-is-hilbert-and-injective]])

[F3] A closed subspace of a Hilbert space has an orthogonal complement, and a subspace whose orthogonal complement is zero is dense. ([[thm-orthogonal-decomposition-by-a-closed-subspace]])

[F4] A nonzero univariate polynomial has at most its degree many roots. The real numbers form an ordered field, hence are infinite. ([[thm-root-bound-for-polynomials-over-a-domain]], [[thm-reals-ordered-field]], [[thm-reals-field]])

[F5] The complex exponential has derivative itself, the chain and product rules apply to its finite linear combinations, Cauchy–Schwarz holds in $L^2$, and a box of positive side lengths has positive Lebesgue measure. ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F6] A nonnegative measurable function with integral zero vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F7] For $s>0$, the function $r\mapsto r^s$ is increasing on $(0,\infty)$ by its positive derivative and the mean value theorem. ([[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]])

[A1] Full AC is carried only to conservatively cover the legacy declared dependency of the published $L^2$ completeness result; the Fourier calculations and finite-site selection use no arbitrary-index choice. ([[def-axiom-of-choice]], [[def-countable-choice]])



**Proof technique:** direct.

## Proof

**Proof technique:** direct.

**Given:** The data above; all Fourier transforms use the negative-sign $2\pi$ convention.

1.1 Since $w=A(a^2+4\pi^2|\xi|^2)^{-s}$, the two positive functions $(a^2+4\pi^2|\xi|^2)^s$ and $(1+|\xi|^2)^s$ have ratio bounded above and below by positive constants: compare $a^2+4\pi^2r^2$ with $1+r^2$ separately using the minimum and maximum of $a^2$ and $4\pi^2$, and use monotonicity of the positive power [F7]. Multiplying by $A^{-1}$ and taking square roots gives the displayed norm equivalence. Thus the weighted $L^2$ norms defining $\mathcal H_k$ and $H^s$ are equivalent and have the same representatives by injectivity [F1,F2]; completeness of $H^s$ implies completeness of $\mathcal H_k$. [F1, F2, F7, A1, algebra]

1.2 For a complex coefficient vector $c=(c_j)$, the Hermitian quadratic form of the Gram matrix is $$c^*K_Xc=\int_{\mathbb R^d}w(\xi)\left|\sum_{j=1}^Nc_je^{-2\pi ix_j\cdot\xi}\right|^2d\xi.$$ If it is zero, [F6] says $w$ times the squared modulus of the continuous exponential sum vanishes almost everywhere. Since $w>0$, the sum is zero almost everywhere. A continuous function zero almost everywhere is zero everywhere, because any point of nonzero value would have a neighborhood on which its modulus is bounded below, and such a neighborhood contains a positive-measure box [F5]. [F1, F5, F6, algebra]

2.1 The spectral representative of $k(\cdot-y)$ is $w(\xi)e^{-2\pi i y\cdot\xi}$. Its $\mathcal H_k$ norm squared is $\int w=1$, and for $U_g\in\mathcal H_k$, $$\langle U_g,k(\cdot-y)\rangle_k=\int g(\xi)e^{2\pi i y\cdot\xi}d\xi=U_g(y).$$ The integral exists because Cauchy--Schwarz bounds $\int|g|$ by $\|g\|_k(\int w)^{1/2}$. Hence point evaluation is continuous and the stated kernel sections reproduce it. [F1, F5, step 1.1, algebra]

3.1 If $U$ is orthogonal to every section centered at $y\in\mathbb R^d$, step 2.1 gives $U(y)=0$ for every $y$. Fourier injectivity [F1] then makes $U=0$ in $\mathcal H_k$. By [F3] the span of all sections is dense. [F1, F3, step 2.1]

4.1 Choose $v=(1,t,\ldots,t^{d-1})$ so that the numbers $v\cdot x_j$ are pairwise distinct. For each pair $i\ne j$, the polynomial $(x_i-x_j)\cdot(1,t,\ldots,t^{d-1})$ is nonzero because $x_i-x_j\ne0$; [F4] says its zero set is finite. The ordered field $\mathbb R$ has $0<1$, so the natural multiples $0,1,1+1,\ldots$ are strictly increasing and $\mathbb R$ is infinite. Thus a real $t$ exists outside the finite union of root sets. Restrict the vanishing exponential sum to $\xi=uv$ and differentiate at $u=0$ for orders $r=0,\ldots,N-1$. This gives $\sum_jc_j(v\cdot x_j)^r=0$. For each $j$, the Lagrange polynomial $$L_j(t)=\prod_{i\ne j}\frac{t-v\cdot x_i}{v\cdot x_j-v\cdot x_i}$$ has degree at most $N-1$ and satisfies $L_j(v\cdot x_i)=1$ if $i=j$ and $0$ otherwise. Taking the same linear combination of the moment equations as the coefficients of $L_j$ yields $c_j=0$. Thus all $c_j=0$, and the real Gram matrix is strictly positive definite. [F4, F5, step 1.2, choose, algebra] ∎
