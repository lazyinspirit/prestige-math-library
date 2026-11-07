---
dependency_level: 3
id: lem-gl3-uniform-flat-families-and-compact-averaging
kind: lemma
title: "Uniform flat families, Fourier sums and compact averaging"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension, lem-gl3-canonical-extension-is-unique, lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive, lem-gl3-compact-flat-distribution-normal-forms, thm-gl3-fourier-transform-preserves-infinite-order, lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-finite-seminorm-bound-characterizes-tempered-distributions, thm-leibniz-rule-for-distributions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-littlewood-characterisations-of-lebesgue-measurability, thm-composition-with-borel-functions-preserves-measurability, lem-distribution-pairing-with-smooth-parameter-families, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice, lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-pullback-of-a-distribution-by-a-diffeomorphism]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, Definition 7.1, Lemmas 7.2, 7.12–7.16 and Proposition 7.20, with their §7 arguments"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. In a coordinate box $(u,z)\in(-\epsilon,\epsilon)\times Z$ with hypersurface $S=\{u=0\}$, say that $R$ vanishes to order $k\ge0$ along $S$ if locally
$$R=\sum_{j,\alpha}u^{k+j}D_u^jD_z^\alpha h_{j,\alpha},\qquad h_{j,\alpha}\in L^\infty,$$
with finitely many terms. For a family $R_n$, $n\in\mathbb Z^d$, uniform order $k$ means that a common local box and finite index set can be used and the coefficient bounds are $\|h_{n,j,\alpha}\|_\infty\le C(1+\|n\|)^M$. The box, finite set and polynomial exponent may depend on $k$. Infinite order means every $k$. This local definition is invariant under smooth changes of coordinates preserving $S$, and applies in smooth finite-rank bundle frames.

The following statements hold.

- Such a uniformly order-$k$ family is equivalent to a strongly convergent Fourier series $\sum_nR_n(u,z)e(ny)$ which has order $k$ along $S\times(\mathbb R^d/\mathbb Z^d)$. Conversely the Fourier coefficients of an order-$k$ distribution on that product have these uniform local forms.
- A distribution supported on $S$ and vanishing to a positive order there is zero. A compact-parameter average of smooth bundle diffeomorphisms preserving $S$ preserves each finite or infinite vanishing order. Smooth scalar weights are allowed in these compact averages.
- Suppose $T_n\in\mathcal S'(\mathbb R)$ have a common finite Schwartz seminorm bound $|\langle T_n,\phi\rangle|\le C(1+\|n\|)^M q_N(\phi)$ and vanish to order $k\ge0$ at zero uniformly. Their Fourier transforms have extensions of order $k$ at infinity uniformly. For infinite order these extensions are canonical.
- If $\widehat T$ is infinitely flat at zero, the integer translates $T(x+r)$ have canonical extensions infinitely flat at infinity, uniformly with polynomial bounds in $r$. If periodic zero-mean distributions $C_n(x)=\sum_{r\ne0}a_{r,n}e(rx)$ satisfy $|a_{r,n}|\le C(1+|r|+\|n\|)^M$, their canonical infinity extensions are likewise uniformly infinitely flat.
- Fixed complex powers and logarithmic powers of a hypersurface coordinate preserve uniformly infinite flatness, with the canonical interpretation across that hypersurface.

## Statement references

[Miller and Schmid, §7, especially Lemma7.2 and Proposition7.20](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated objects and [[def-countable-choice|Countable Choice]]. All claims are local along a hypersurface; only the stated compact-parameter averages and global one-variable Fourier transforms are used.

[F1] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] is the one-variable case. [[lem-gl3-compact-flat-distribution-normal-forms]] gives its two bounded-coefficient normal forms, and [[lem-gl3-canonical-extension-is-unique]] identifies positive-order extensions. [[lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive]] supplies an explicit finite-seminorm-controlled continuous primitive.

[F2] [[thm-gl3-fourier-transform-preserves-infinite-order]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] and [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] provide the exact one-variable Fourier identities and norm bounds used below. [[thm-fourier-translation-modulation-dilation-and-reflection-laws]] gives the modulation law on Schwartz tests; transposition and [[def-pullback-of-a-distribution-by-a-diffeomorphism]] give its distribution form below.

[F3] [[thm-finite-seminorm-bound-characterizes-tempered-distributions]] gives finite Schwartz bounds. [[thm-leibniz-rule-for-distributions]] and [[lem-test-function-cutoffs-and-euclidean-localization]] give finite commutation and localization.

[F4] [[thm-littlewood-characterisations-of-lebesgue-measurability]] gives Borel representatives modulo null sets, as constructed below, under Countable Choice. [[thm-composition-with-borel-functions-preserves-measurability]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permit the bounded measurable coefficient averages.

[F5] [[lem-distribution-pairing-with-smooth-parameter-families]] permits compact-parameter averages on tests. [[lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients]] identifies the uniformly differentiated smooth Fourier series of tests.

[F6] [[lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals]] supplies the fixed power/log product formula and uniqueness at an infinitely flat origin.

## Proof

**Given:** The stated data.

1.1 Put $E=uD_u$. Since $u^jD_u^j=E(E-1)\cdots(E-j+1)$, the local forms are equivalently finite sums of $u^kP(E,D_z)h$ with constant polynomials $P$ and bounded $h$. Multiplication by a smooth function preserves these forms: commute it through the finitely many tangent generators $E,D_z$, whose commutators with a smooth multiplier are again smooth multipliers, then expand the Euler polynomials back. Under a coordinate change preserving $S$, the new defining function is $u$ times a smooth nonzero factor, by the one-variable Taylor integral in the normal coordinate. The tangent vector fields are exactly smooth combinations of $E,D_z$, so the same argument proves coordinate and frame invariance. All coefficient bounds remain uniform for a compact family of changes, since only finitely many derivatives occur on fixed smaller compact boxes. This argument also allows extra integer powers of $u$ to be absorbed into bounded coefficients, so order $k+1$ implies order $k$. [F1, F3, algebra]

2.1 For a uniformly flat family choose Borel versions of its bounded coefficient functions. To see that this is legitimate, apply [F4] to the countably many rational level sets of the real and imaginary parts: each differs from a Borel set by a null set, and countable choice and a countable union of these null sets give Borel step approximations agreeing almost everywhere with the original bounded function. Truncate the versions at the given bound. For a sufficiently large integer $s$, the series [F3, F4, step 1.1, algebra]
$$H_{j,\alpha}(u,z,y)=\sum_n(1+4\pi^2\|n\|^2)^{-s}h_{n,j,\alpha}(u,z)e(ny)$$
converges absolutely uniformly to a bounded measurable function; choose $2s>M+d$. Therefore
$$\sum_nR_ne(ny)=\sum_{j,\alpha}u^{k+j}D_u^jD_z^\alpha(1-\Delta_y)^sH_{j,\alpha}$$
is an order-$k$ normal form. Uniform convergence of the bounded coefficients implies strong distribution convergence after these fixed derivatives, by the finite compact-support test seminorms. [F3, F4, step 1.1, algebra]

2.2 We give the quantitative Fourier argument, rather than assuming pointwise flatness is uniform. Choose a common cutoff $\chi$ supported in the flatness box and one near zero. The compact pieces have forms $\chi T_n=\sum_jD^j(x^{k+j}h_{n,j})$ with common derivative orders, common compact supports and polynomial coefficient bounds in $n$, by the finite commutations of [F1], [F3]. The far pieces are zero near zero and have a common finite Schwartz bound. The explicit kernel construction in [F1] consequently gives [F1, F2, F3, step 1.1, algebra]
$$(1-\chi)T_n=D^\ell F_n,\qquad |F_n(x)|\le C(1+\|n\|)^B(1+|x|)^A,$$
with the same $\ell,A,B$ for all $n$, and $F_n=0$ on a common neighborhood of zero. The normalization subtracts its polynomial on a fixed zero neighborhood; determining that polynomial from $\ell$ fixed distinct points gives a fixed Vandermonde inverse, so its coefficients retain the same polynomial-in-$n$ bound. Indeed that construction takes $\ell=N+2$ from the common Schwartz seminorm degree, evaluates the same compact C^N kernels, and uses their polynomial-in-$x$ norm estimate, so its only remaining coefficient is the common polynomial-in-$n$ bound. Choose $p>A+1$ and $p\ge\ell+k$, and put $B_n(u)=\widehat{x^{-p}F_n}(1/u)$. Its bound is polynomial in $n$ by the L1 Fourier bound in [F2]. The exact reciprocal identities are
$$\widehat{(1-\chi)T_n}(1/u)=(-1)^p(2\pi i)^{\ell-p}u^{-\ell}(-u^2D_u)^pB_n(u),$$
$$\widehat{\chi T_n}(1/u)=\sum_j(-1)^{k+j}(2\pi i)^{-k}u^{-j}(-u^2D_u)^{k+j}\bigl[\widehat h_{n,j}(1/u)\bigr].$$
Every bracketed function is bounded with polynomial-in-$n$ norm. Expanding $(-u^2D_u)^r=\sum_l b_{r,l}u^{r+l}D_u^l$ gives uniform normal forms of order at least $k$ in both displays; any excess integer power is removed by step 1.1. Thus the Fourier family has uniform order $k$ at infinity. For infinite order, positive-order uniqueness in [F1] makes all these extensions agree. [F1, F2, F3, step 1.1, algebra]

2.3 For the periodic family, choose any integer $p>M+1$ and define the bounded continuous periodic primitive [F1, F2, F5, step 1.1, algebra]
$$F_{n,p}(x)=\sum_{r\ne0}(2\pi ir)^{-p}a_{r,n}e(rx).$$
Absolute uniform convergence gives $\|F_{n,p}\|_\infty\le C_p(1+\|n\|)^M$ and $D^pF_{n,p}=C_n$ distributionally, since the test Fourier series converges with all derivatives by [F5]. The reciprocal chain rule then gives $C_n(1/u)=(-u^2D_u)^p[F_{n,p}(1/u)]$, an order-$p$ normal form with those same polynomial bounds. Taking arbitrarily large $p$ proves uniform infinite flatness at infinity and a common canonical extension by [F1]. [F1, F2, F5, step 1.1, algebra]

3.1 Conversely, finitely many charts and a partition on the compact auxiliary torus put an order-$k$ distribution into such normal forms with bounded coefficients and fixed derivative orders on one smaller base box. Taking its Fourier coefficients integrates each bounded coefficient against $e(-ny)$; moving its finitely many torus derivatives onto this exponential contributes only a polynomial in $n$. This gives exactly the asserted uniform forms, using [F4]. Reconstruction and uniqueness follow by applying the smooth Fourier series to tests: integration by parts gives rapid Fourier decay in every base derivative, and [F5] identifies the sum by successive one-dimensional Fourier uniqueness. Finally, if a normal-form distribution is supported on $S$, insert $\chi(u/t)$ into an arbitrary fixed compact test. Moving the $u$ derivatives onto $u^{k+j}\chi(u/t)$ times that test gives an $O(t^{k+1})$ bound; tangent test derivatives are bounded. Support on $S$ leaves the pairing unchanged, so it is zero. This proves the asserted supported-distribution uniqueness. [F3, F4, F5, step 1.1, step 2.1, algebra]

3.2 If $\widehat T$ is infinitely flat at zero, the family $e(rx)\widehat T(x)$ has a polynomial-in-$r$ global Schwartz bound: each derivative of $e(rx)$ contributes at most a fixed power of $r$. The same finite product rule puts its local flat normal forms into common finite forms with polynomial-in-$r$ bounded coefficients at every desired order. Step 2.2 then gives uniform canonical infinity flatness of its Fourier transforms. On a Schwartz test, $\mathcal F(e(r\,\cdot)\widehat\phi)(x)=\phi(r-x)$ by the Schwartz modulation law and the double-transform reflection. Transposition therefore gives $\mathcal F(e(r\,\cdot)\widehat T)(x)=T(r-x)$ as a scalar distribution pullback. Reflection preserves the forms, so these yield the integer translates $T(x+r)$ with the claimed uniform property. Real bounded shifts may be included with the same estimates. [F1, F2, F3, step 1.1, step 2.2, algebra]

4.1 Consider a smooth compact-parameter family of bundle diffeomorphisms preserving $S$. For a fixed output point of $S$, its compact family of inverse images is covered by finitely many coordinate boxes of the input; a finite parameter partition reduces to each one. Push a fixed input normal form through the action. Step 1.1 puts every translate into the same finite generator form, with bounded smooth coefficients uniform in the parameter and bounded functions composed with the corresponding diffeomorphism. Borel versions from step 2.1 make these composed coefficients jointly measurable by [F4]; their uniform bounds allow them to be integrated over the compact parameter set. Moving the fixed differential generators outside that integral gives another bounded-coefficient normal form. Pairing interchange follows from [F5] and the absolutely integrable coefficient bounds in [F4]. This proves preservation of order $k$, and doing it for each $k$ proves the infinite-order assertion, in scalar or bundle frames. [F3, F4, F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 Finally multiply a uniform infinitely flat family by a fixed $(\operatorname{sgn}u)^\eta|u|^\beta(\log|u|)^b$. For a desired positive output order $q$, choose an input order $k$ with $k+\operatorname{Re}\beta>q$. First convert between the two equivalent bounded-coefficient normal forms by the finite triangular Leibniz rule in [F1]. Apply the finite product formula in [F6] to each normal derivative; tangent derivatives commute with this multiplier. Every resulting coefficient divided by $u^{q+l}$ is bounded by a constant times $|u|^{k+\operatorname{Re}\beta-q}(1+|\log|u||)^b$ times the original polynomial-in-$n$ bound. Hence these coefficients remain uniformly bounded with the same type of polynomial parameter growth. Step 3.1 identifies the extensions for different $q$ and proves the canonical interpretation. This completes all assertions with the stated, and no stronger, choice assumption. [F1, F3, F6, step 1.1, step 3.1, algebra] ∎
