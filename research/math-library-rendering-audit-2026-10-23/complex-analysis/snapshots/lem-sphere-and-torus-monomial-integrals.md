---
id: lem-sphere-and-torus-monomial-integrals
kind: lemma
title: Monomial integrals on the sphere and orthonormality on the distinguished torus
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-continuous-functions-are-borel-measurable
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-borel-sigma-algebra
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-integer-powers
  - def-countable-choice
  - def-measure-preserving-transformation-and-system
  - def-polar-surface-measure-on-the-unit-sphere
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - lem-complex-conjugation-and-modulus-laws
  - lem-monomial-integrals-over-disc-ball-and-polydisc
  - rem-complex-euclidean-space-dictionary
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-numbers-form-a-field
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-induction-principle
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-arithmetic-and-lattice-operations-preserve-measurability
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§5.3, Exercise 5.3.1, printed p. 165 (PDF p. 164): asks for monomials to be a complete orthogonal system in the ball Hardy space. The source gives no proof; this item proves the spherical moments and orthogonality but does not assert completeness."
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed p. 3 (PDF p. 3): records the unit-ball volume $\lambda(B)=\pi^m/m!$ and poses orthonormal monomials for the interior Bergman space as an exercise. The volume is independently obtained from the preceding local ball integral; this source does not prove the sphere moment formula.
---

## Facts & Assumptions

[A1] The only choice principle assumed is the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is carried through the polar-coordinate, polar-surface, previous ball-integral, normalized-torus and linear-change-of-variables suppliers; no full Axiom of Choice or arbitrary-index selection is used.

[F1] Under $\mathbb C^m\cong\mathbb R^{2m}$, the unit ball and the unit sphere are the Euclidean ball and sphere for the norm $|z|^2=\sum_{j<m}|z_j|^2$ ([[rem-complex-euclidean-space-dictionary]], [[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F2] For a nonnegative Borel function $F$ on $\mathbb R^n$, polar coordinates give $$\int_{\mathbb R^n}F(x)\,d\lambda_n(x)=\int_0^\infty r^{n-1}\int_{S^{n-1}}F(r\omega)\,d\sigma(\omega)\,dr$$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] The polar surface measure is $\sigma(E)=2m\lambda_{2m}(\{r\omega:\omega\in E,\ 0<r\le1\})$ for Borel $E\subseteq S^{2m-1}$; the polar-coordinate theorem makes it a finite Borel measure ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] For $\alpha\in\mathbb N^m$, the preceding ball-integral lemma proves that $|z^\alpha|^2\mathbf1_{\mathbb B^m}$ is nonnegative Borel and gives $$\int_{\mathbb B^m}|z^\alpha|^2\,d\lambda_{2m}(z)=\frac{\pi^m\alpha!}{(m+|\alpha|)!},\qquad \lambda_{2m}(\mathbb B^m)=\frac{\pi^m}{m!}$$ ([[lem-monomial-integrals-over-disc-ball-and-polydisc]]).

[F5] $m_{\mathbb T^m}$ is the product of the normalized Haar probabilities on the circle and has total mass one ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F6] Multi-indices have $\alpha\in\mathbb N^m$, $|\alpha|=\sum_{j<m}\alpha_j$, and $z^\alpha=\prod_{j<m}z_j^{\alpha_j}$; complex powers are defined recursively for natural exponents ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-complex-integer-powers]]).

[F7] For real $\theta$, $|e^{i\theta}|=1$ and $e^{i\pi}=-1$; for $d\in\mathbb N$, $(e^{i\theta})^d=e^{id\theta}$ by induction from the exponential addition law ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-induction-principle]], [[def-complex-integer-powers]]).

[F8] Complex multiplication is commutative, conjugation is multiplicative, $z\overline z=|z|^2$, and $|zw|=|z||w|$ ([[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

[F9] Multiplication of one complex coordinate by $\eta=a+ib$ acts on its real coordinate pair by $\begin{pmatrix}a&-b\\ b&a\end{pmatrix}$, whose determinant is $a^2+b^2=|\eta|^2$ ([[rem-complex-euclidean-space-dictionary]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F10] An invertible real linear map $T$ sends Lebesgue measure to $|\det T|\lambda$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F11] A measurable measure-preserving self-map preserves integrals of integrable complex functions ([[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F12] In real coordinates, each $z^\alpha\overline{z^\beta}$ is a finite polynomial, hence continuous and Borel; on the unit sphere and distinguished torus its modulus is at most one ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[cor-continuous-functions-are-borel-measurable]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-borel-sigma-algebra]], [[def-complex-integer-powers]]).

[F13] Translation of any one coordinate preserves the product normalized Haar measure on $\mathbb T^m$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F14] The pointwise product of measurable functions is measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, let $\sigma$ be the polar surface measure on $S^{2m-1}\subseteq\mathbb C^m\cong\mathbb R^{2m}$, and set $\sigma_1:=\sigma/\sigma(S^{2m-1})$. For all multi-indices $\alpha,\beta\in\mathbb N^m$,

$$\int_{S^{2m-1}}\zeta^\alpha\overline{\zeta^\beta}\,d\sigma_1=\delta_{\alpha\beta}\frac{(m-1)!\,\alpha!}{(m-1+|\alpha|)!},\qquad \int_{S^{2m-1}}|\zeta^\alpha|^2\,d\sigma=\frac{2\pi^m\alpha!}{(m-1+|\alpha|)!},$$

where $\delta_{\alpha\beta}=1$ if $\alpha=\beta$ and $0$ otherwise. On the distinguished torus $\mathbb T^m$ with product normalized Haar measure $m_{\mathbb T^m}$,

$$\int_{\mathbb T^m}\zeta^\alpha\overline{\zeta^\beta}\,dm_{\mathbb T^m}=\delta_{\alpha\beta}.$$

## Proof

**Proof technique:** direct, using polar decomposition for the diagonal moments and coordinate rotations for orthogonality.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, the polar surface measure $\sigma$, and $\alpha,\beta\in\mathbb N^m$.

1.1 Apply [F2] to the indicator of the open, hence Borel, unit ball. For $0<r<1$ every $r\omega$ lies in $\mathbb B^m$, while for $r>1$ none does, so $$\lambda_{2m}(\mathbb B^m)=\int_0^1r^{2m-1}\,dr\,\sigma(S^{2m-1})=\frac{\sigma(S^{2m-1})}{2m}.$$ By [F4], $\sigma(S^{2m-1})=2m\pi^m/m!=2\pi^m/(m-1)!$, which is finite and positive, so $\sigma_1$ is well defined. [A1, F1, F2, F3, F4, F12, given]

1.2 Fix $j<m$ and a unit complex number $\eta\in\mathbb C$ with $|\eta|=1$, and let $R_{j,\eta}$ multiply the $j$th complex coordinate by $\eta$ and fix the others. It maps the unit sphere to itself; its real matrix is the identity except for the $j$th block in [F9], whose determinant is $|\eta|^2=1$. Since $R_{j,\eta}$ and its inverse are continuous, both $R_{j,\eta}E$ and $R_{j,\eta}^{-1}E$ are Borel for Borel $E\subseteq S^{2m-1}$ by [F12]. The conical set in [F3] is carried onto the cone for $R_{j,\eta}E$, so [F10] gives $\sigma(R_{j,\eta}E)=\sigma(E)$; applying this equality to $R_{j,\eta}^{-1}E$ gives $\sigma(R_{j,\eta}^{-1}E)=\sigma(E)$. Thus the continuous map is measure preserving, and [F11] makes the integrals of the bounded monomial products in [F12] invariant. [A1, F3, F9, F10, F11, F12, given]

2.1 For a fixed $\alpha$, set $M_\alpha:=\int_{S^{2m-1}}|\omega^\alpha|^2\,d\sigma$. The integrand $|z^\alpha|^2\mathbf1_{\mathbb B^m}$ is nonnegative Borel by [F12] and [F14]; since $|(r\omega)^\alpha|^2=r^{2|\alpha|}|\omega^\alpha|^2$, [F2] and [F4] give $$\frac{\pi^m\alpha!}{(m+|\alpha|)!}=\int_0^1r^{2m-1+2|\alpha|}\,dr\,M_\alpha=\frac{M_\alpha}{2(m+|\alpha|)}.$$ Hence $M_\alpha=2\pi^m\alpha!/(m-1+|\alpha|)!$, and division by the total mass in step 1.1 gives the normalized diagonal moment. [A1, F2, F4, F6, F12, F14, step 1.1, given]

2.2 Suppose $\alpha\ne\beta$ and choose $j<m$ with $a:=\alpha_j\ne b:=\beta_j$. Let $d:=|a-b|>0$ and $\eta:=e^{i\pi/d}$, so [F7] gives $|\eta|=1$ and $\eta^d=-1$. By the recursive powers in [F6], induction and commutativity give $\eta^a\overline\eta^{\,b}=-1$: if $a>b$, factor $(\eta\overline\eta)^b\eta^{a-b}=\eta^d$; if $b>a$, factor $(\eta\overline\eta)^a\overline\eta^{\,b-a}=\overline{\eta^d}$. Under $R_{j,\eta}$ the integrand $\zeta^\alpha\overline{\zeta^\beta}$ is multiplied by this scalar. Integral invariance from step 1.2 therefore makes its integral equal to its negative, so it is zero. The integrand is integrable by [F12] and finiteness in step 1.1. [A1, F6, F7, F8, F11, F12, step 1.1, step 1.2, given]

3.1 On $\mathbb T^m$, the normalized product Haar measure is invariant under translation of any one coordinate by [F13]. For $\alpha\ne\beta$, choose $j,a,b,d,\eta$ as in step 2.2 and translate that coordinate by the torus element represented by $1/(2d)$, which multiplies it by $\eta=e^{i\pi/d}$. The integrand is multiplied by $\eta^a\overline\eta^{\,b}=-1$ by the same power calculation, so integral invariance [F11] makes the integral zero. If $\alpha=\beta$, the integrand is identically one and [F5] gives total measure one; hence the integral is one. [A1, F5, F6, F7, F8, F11, F12, F13, step 2.2, given]

4.1 Step 2.1 gives the unnormalized and normalized sphere diagonal moments; step 2.2 gives the off-diagonal sphere moments; step 3.1 gives all distinguished-torus moments. Together these are exactly the three displayed formulas. [step 2.1, step 2.2, step 3.1] ∎
