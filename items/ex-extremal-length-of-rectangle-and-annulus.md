---
id: ex-extremal-length-of-rectangle-and-annulus
kind: example
title: Extremal length of a rectangle and of a round annulus by hand
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 5
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, thm-modulus-rectangle-and-annulus, thm-round-annulus-conformal-parameter-is-complete-invariant, cor-cauchy-schwarz-inequality-for-l-two, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-continuous-preimages-of-borel-sets-are-borel, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-polar-form-with-unique-principal-argument, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-lebesgue-number-lemma, def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-fundamental-theorem-for-complex-line-integrals, thm-fundamental-inequality-for-complex-line-integrals, prop-reversal-and-concatenation-of-complex-line-integrals, lem-local-holomorphic-logarithm-nonvanishing-function-on-disc, cor-holomorphic-logarithm-has-the-logarithmic-derivative, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-natural-logarithm, def-pi-via-first-positive-cosine-zero, prop-arc-length-under-lipschitz-maps-and-euclidean-similarities, thm-euclidean-inverse-function-theorem]
axiom_use: Countable Choice is inherited from the extremal-length, Tonelli, product-measure, and Borel change-of-variables interfaces; no use of full AC is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 4–5: Lemmas 1.6–1.7 and their Cauchy–Schwarz slice proofs."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.3.1, printed pp. 121–122: Proposition 6.6 and Exercise 6.8 for the vertical and dual circular annulus families."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 4–5 (PDF pp. 9–10). Lemmas 1.6 and 1.7 give the rectangle and round-annulus constants by explicit test metrics and Cauchy–Schwarz on the respective foliations.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §6.3.1, printed pp. 121–122. Proposition 6.6 computes the vertical family of an annulus, and Exercise 6.8 gives its dual circular family.

## Example

Assume Countable Choice and use the conventions of [[def-extremal-length-and-curve-family-modulus]].

(a) For $\Pi=(0,2)\times(0,1)$ and the family $\Gamma$ of paths joining the two vertical sides,
$$\lambda(\Gamma)=2,\qquad \mu(\Gamma)=\frac12.$$
The constant density $\rho=\frac12$ gives $\ell_\rho(\Gamma)\ge1$, has area $\frac12$, and has quotient $2$. For every finite-positive-area Borel density, the horizontal slices and Cauchy–Schwarz give the matching upper bound.

(b) For $A=A(1,e^{2\pi})$, the connecting family $\Gamma_A$ has
$$\lambda(\Gamma_A)=1,\qquad \mu(\Gamma_A)=1.$$
The density $\rho(z)=1/(2\pi|z|)$ gives every connecting path length at least $1$ and has area $1$. The radial Cauchy–Schwarz estimate gives the matching upper bound.

(c) Let $\Theta_A$ be the family of closed paths in $A$ with winding number $1$ about $0$. For every $0<r<R$,
$$\lambda(\Gamma_{A(r,R)})\lambda(\Theta_{A(r,R)})=1.$$
For $A(1,e^{2\pi})$, both values are $1$; for $A(1,2)$, they are $\log2/(2\pi)$ and $2\pi/\log2$, respectively.

(d) Similarities $z\mapsto cz$ with $c\ne0$ preserve the connecting-family extremal length of round annuli. In particular, $z\mapsto z/r$ sends $A(r,R)$ to $A(1,R/r)$, and the conformal parameter $M$ defined in [[thm-round-annulus-conformal-parameter-is-complete-invariant]] is $(2\pi)^{-1}\log(R/r)$.

## Facts & Assumptions

**Given:** Countable Choice; the rectangle and annulus curve families, and their Borel densities and area conventions.

[F1] Borel densities are extended by zero outside their domain; nonrectifiable paths have infinite length. The path length equals the integral against arc length, is additive on subpath intervals, and agrees with the absolute line integral for continuous densities ([[def-extremal-length-and-curve-family-modulus]], [[lem-rho-length-and-extremal-length-are-well-defined]]).

[F2] A Borel function on an open subspace extends by zero as a Borel function; Borel sets in a Euclidean product are product-measurable, and the product of the one-dimensional Lebesgue measures agrees with planar Lebesgue measure on Borel sets ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F3] Tonelli interchanges nonnegative product integrals, and Cauchy–Schwarz applies to square-integrable slices ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] The polar map $P(s,\theta)=se^{i\theta}$ is $C^1$ with determinant $s>0$. The Euclidean inverse-function theorem gives local $C^1$ inverses; uniqueness of the polar angle, shifted to the branch $0<\theta<2\pi$, makes $P$ a global diffeomorphism onto the annulus with its positive radial cut removed ([[thm-euclidean-inverse-function-theorem]], [[thm-polar-form-with-unique-principal-argument]]). The cut is a planar null set under Countable Choice ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]). The Borel change-of-variables theorem therefore gives, for every nonnegative Borel $g$ on $A(1,e^{2\pi})$,
$$\int_{A(1,e^{2\pi})}g\,dA=\int_0^{2\pi}\int_1^{e^{2\pi}}g(se^{i\theta})s\,ds\,d\theta.$$
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F5] A rectifiable path crossing the two circles of a round annulus has $\int_\gamma |dz|/|z|\ge\log(R/r)$. To prove this, cover its compact trace by discs avoiding zero, subdivide so each subpath lies in one disc, take a holomorphic logarithm of $z$ on each disc, and add the primitive integrals of $1/z$; the real endpoint increment is $\log R-\log r$. The modulus of a complex line integral is bounded by the absolute line integral ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-lebesgue-number-lemma]], [[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]], [[cor-holomorphic-logarithm-has-the-logarithmic-derivative]], [[thm-fundamental-theorem-for-complex-line-integrals]], [[thm-fundamental-inequality-for-complex-line-integrals]], [[prop-reversal-and-concatenation-of-complex-line-integrals]], [[def-complex-line-integral-over-a-rectifiable-path]], [[def-absolute-line-integral-over-a-rectifiable-path]], [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-natural-logarithm]]).

[F6] For the Borel test density $\rho(z)=1/(2\pi|z|)$ on $A(1,e^{2\pi})$, the Cauchy–Schwarz upper bound on radial slices is computed by $\int_1^{e^{2\pi}}ds/s=2\pi$; also $\log(e^{2\pi})=2\pi$ and $\pi>0$ ([[def-natural-logarithm]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-pi-via-first-positive-cosine-zero]]).

[F7] The round-annulus connecting-family extremal length is the conformal parameter $M(A(r,R))=(2\pi)^{-1}\log(R/r)$, and the winding-one closed-family value is its reciprocal ([[thm-modulus-rectangle-and-annulus]], [[thm-round-annulus-conformal-parameter-is-complete-invariant]]). Similarities preserve the connecting-family value by the Borel change-of-variables formula and arc-length scaling ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[prop-arc-length-under-lipschitz-maps-and-euclidean-similarities]]).

## Verification

**Proof technique:** explicit test densities, slice estimates and the annulus formula.

1.1 For a Borel density on $\Pi$, extend $\rho^2\mathbf1_\Pi$ by zero to $\mathbb R^2$. [F2] makes it product-measurable, and [F3] gives $\displaystyle A(\rho)=\int_0^1\int_0^2\rho(x,y)^2\,dx\,dy.$ For the annulus, [F4] gives the displayed polar area formula for arbitrary nonnegative Borel functions, not just continuous densities. [F2, F3, F4, given]

1.2 The constant rectangle density $\rho=\frac12$ gives every crossing path Euclidean length at least $2$, hence $\ell_\rho(\Gamma)\ge1$. The box area formula gives $A(\rho)=2\cdot1\cdot(1/2)^2=1/2$, so the quotient is $2$. For an arbitrary Borel density with $0<A(\rho)<\infty$, put $L=\ell_\rho(\Gamma)$. Each horizontal segment belongs to $\Gamma$, so for every $y\in(0,1)$, $L\le\int_0^2\rho(x,y)\,dx$. Finite area and Tonelli give a full-measure set of $y$ with finite square integral; choosing one such $y$ first shows $L<\infty$. On almost every such slice, [F3] gives $L^2\le2\int_0^2\rho(x,y)^2\,dx$. Integrating in $y$ gives $L^2\le2A(\rho)$. Thus every quotient is at most $2$, and $\lambda(\Gamma)=2$, $\mu(\Gamma)=1/2$. [F1, F2, F3, given, algebra]

1.3 Let $\gamma$ be any rectifiable path joining the boundary circles of $A(1,e^{2\pi})$. By [F5], $\ell_\rho(\gamma)=\frac1{2\pi}\int_\gamma |dz|/|z|\ge1$ for $\rho(z)=1/(2\pi|z|)$; nonrectifiable paths have infinite length by [F1]. The polar area formula [F4] gives $\displaystyle A(\rho)=\int_0^{2\pi}\int_1^{e^{2\pi}}\frac1{4\pi^2s^2}s\,ds\,d\theta=1.$ Hence this explicit metric gives quotient $1$. [F1, F4, F5, F6, given, algebra]

1.4 For every $0<r<R$, [F7] gives $\lambda(\Gamma_{A(r,R)})=(2\pi)^{-1}\log(R/r)$ and $\lambda(\Theta_{A(r,R)})=2\pi/\log(R/r)$. Their product is $1$. Substituting $R/r=e^{2\pi}$ gives both values $1$; substituting $R/r=2$ gives $\log2/(2\pi)$ and $2\pi/\log2$. [F6, F7, algebra]

1.5 If $c\in\mathbb C^\times$, the similarity $f(z)=cz$ maps $A(r,R)$ bijectively onto $A(|c|r,|c|R)$. For a Borel density $\tau$ on the target, $\rho(z)=|c|\tau(cz)$ has the same $\rho$-lengths on source paths as $\tau$ has on their images, because arc length scales by $|c|$; its area is unchanged by the Jacobian $|c|^2$ and the Borel change-of-variables formula. The inverse similarity gives a bijection of the finite-positive-area metrics, so the extremal lengths agree. Taking $c=1/r$ and applying [F7] gives $M(A(r,R))=(2\pi)^{-1}\log(R/r)$. [F1, F7, given, algebra]

2.1 For any Borel density $\sigma$ on the annulus with $0<A(\sigma)<\infty$, put $L=\ell_\sigma(\Gamma_A)$. Every radial segment is in $\Gamma_A$, so $L\le\int_1^{e^{2\pi}}\sigma(se^{i\theta})\,ds$ for every $\theta$. By [F3, F4], a full-measure set of angles has finite weighted square integral; choosing one first shows $L<\infty$. For almost every $\theta$, weighted Cauchy–Schwarz gives $\displaystyle L^2\le\left(\int_1^{e^{2\pi}}\frac{ds}{s}\right)\int_1^{e^{2\pi}}\sigma(se^{i\theta})^2s\,ds=2\pi\int_1^{e^{2\pi}}\sigma(se^{i\theta})^2s\,ds.$ Integrating in $\theta$ and using [F3, F4] gives $2\pi L^2\le2\pi A(\sigma)$, so every quotient is at most $1$. With step 1.3, this proves $\lambda(\Gamma_A)=1$ and $\mu(\Gamma_A)=1$. [F1, F3, F4, F6, step 1.3, given]

3.1 The hypotheses always have $w=2$, $h=1$, and $1<e^{2\pi}<\infty$; the horizontal rectangle segments, radial annulus segments, and once-traversed circle show the assigned families are nonempty. All testing densities have positive finite area, all stated endpoints are boundary endpoints with zero arc-length mass, and no empty, zero-area, or degenerate-radius case is included. Countable Choice is used only through the explicitly declared measure and length interfaces; no full AC is used. [F1, F4, F6, given] ∎
