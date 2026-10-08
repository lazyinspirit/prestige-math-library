---
id: thm-modulus-rectangle-and-annulus
kind: theorem
title: Extremal length of the rectangle and of the round annulus
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 3
deps: [def-extremal-length-and-curve-family-modulus, def-complex-domain, def-complex-annulus, ex-convex-subsets-of-rn-are-path-connected, thm-path-connected-implies-connected, lem-complex-conjugation-and-modulus-laws, lem-rho-length-and-extremal-length-are-well-defined, thm-extremal-length-conformal-invariance-and-monotonicity, def-biholomorphic-map, def-complex-differentiability-holomorphic-and-entire, cor-cauchy-schwarz-inequality-for-l-two, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-arc-length-function, def-countable-choice, def-winding-number-closed-complex-contour, cor-winding-number-classifies-loops-in-the-punctured-plane, def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-fundamental-theorem-for-complex-line-integrals, thm-fundamental-inequality-for-complex-line-integrals, prop-reversal-and-concatenation-of-complex-line-integrals, prop-linearity-of-complex-line-integrals, thm-riemann-stieltjes-linearity-and-additivity, lem-local-holomorphic-logarithm-nonvanishing-function-on-disc, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-natural-logarithm, cor-integral-logarithm-agrees-with-natural-logarithm, cor-integral-logarithm-is-strictly-increasing, thm-integral-logarithm-product-law, cor-normalized-circle-integral-about-its-centre-is-one, def-pi-via-first-positive-cosine-zero, thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-lebesgue-number-lemma, thm-continuous-preimages-of-borel-sets-are-borel, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-polar-form-with-unique-principal-argument, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r, thm-monotone-convergence-for-the-integral, thm-euclidean-inverse-function-theorem]
axiom_use: Countable Choice is explicit for the arc-length Stieltjes construction, Tonelli, the Borel change-of-variables formula, and the null-set convention for the polar cut.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 4–5: Lemma 1.6 for a rectangle and Lemma 1.7 for a round annulus, with the complete Cauchy–Schwarz slice estimates."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.3.1, printed pp. 121–122: Proposition 6.6 for vertical families in a conformal cylinder and Exercise 6.8 for the dual horizontal families; radial and circular foliations of a round annulus are identified explicitly."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§4, printed p. 115: Lemma 4 for the rectangle joining family and Lemma 5 for curves separating the two boundary circles."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 4–5 (PDF pp. 9–10). Lemma 1.6 proves the rectangle modulus with a constant test density and horizontal Cauchy–Schwarz slices. Lemma 1.7 proves the annulus connecting-family modulus by radial slices and the density $(s\log(R/r))^{-1}$.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §6.3.1, printed pp. 121–122. Proposition 6.6 proves the vertical-family extremal length in a flat cylinder by integrating over almost every vertical leaf; in a round annulus these leaves are radial. Exercise 6.8 gives the dual horizontal-family width, whose leaves are concentric circles.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §4, printed p. 115. Lemma 4 gives the rectangle joining-family constant, and Lemma 5 gives the separating-family constant in a round annulus. The present proof fixes the library's orientation-specific winding-one family and its reciprocal-modulus notation directly.

## Statement

Assume Countable Choice and use the conventions of [[def-extremal-length-and-curve-family-modulus]].

(i) **Rectangle.** Let $0<w,h<\infty$ and $\Pi=(0,w)\times(0,h)$. Let $\Gamma_{\Pi}^{\mathrm v}$ be the family of paths with interior in $\Pi$ and one endpoint on each vertical side $\{0\}\times(0,h)$ and $\{w\}\times(0,h)$. Let $\Gamma_{\Pi}^{\mathrm h}$ be the analogous family joining the two horizontal sides. Then
$$\lambda(\Gamma_{\Pi}^{\mathrm v})=\frac wh,\qquad \mu(\Gamma_{\Pi}^{\mathrm v})=\frac hw,$$
and
$$\lambda(\Gamma_{\Pi}^{\mathrm h})=\frac hw,\qquad \mu(\Gamma_{\Pi}^{\mathrm h})=\frac wh.$$

(ii) **Round annulus.** Let $0<r<R<\infty$ and $A(r,R)=\{z:r<|z|<R\}$. Let $\Gamma_{r,R}$ be the family of paths with interior in $A(r,R)$ and one endpoint on each boundary circle. Let $\Theta_{r,R}$ be the family of rectifiable closed paths in $A(r,R)$ whose winding number about $0$ is $1$ ([[def-winding-number-closed-complex-contour]]). Then
$$\lambda(\Gamma_{r,R})=\frac1{2\pi}\log\frac Rr,\qquad \mu(\Gamma_{r,R})=\frac{2\pi}{\log(R/r)},$$
and
$$\lambda(\Theta_{r,R})=\frac{2\pi}{\log(R/r)},\qquad \mu(\Theta_{r,R})=\frac1{2\pi}\log\frac Rr.$$
For a loop based at $1$, winding number $1$ is equivalently the positive generator under the standard identification of $\pi_1(\mathbb C^\times,1)$ with $\mathbb Z$ ([[cor-winding-number-classifies-loops-in-the-punctured-plane]]); for a loop based elsewhere, first change basepoint in $\mathbb C^\times$.

All four families are nonempty, and the displayed values are finite and strictly positive.

## Facts & Assumptions

**Given:** Countable Choice, the dimensions and radii in the Statement, and the curve-family length, area, extremal length, and modulus conventions.

[F1] For a Borel density $\rho$, $\ell_\rho$ is monotone in $\rho$; continuous densities agree with the absolute line integral; the arc-length parametrization formula and Lebesgue–Stieltjes interval uniqueness give parameterized length integrals; and $A(\rho)$ is the nonnegative area integral ([[lem-rho-length-and-extremal-length-are-well-defined]], [[def-extremal-length-and-curve-family-modulus]]).

[F2] Cauchy–Schwarz applies to $L^2$ functions, and Tonelli interchanges the nonnegative area integrals over sigma-finite product spaces ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). If a slice has infinite square integral, the corresponding Cauchy–Schwarz upper bound is automatic.

[F3] The polar map $P(s,\theta)=s(\cos\theta+i\sin\theta)$ is $C^1$ with determinant $s>0$. The Euclidean inverse-function theorem gives a local $C^1$ inverse at every point; the polar-form theorem, on the branch $0<\theta<2\pi$, makes $P$ one-to-one and onto the annulus minus the positive ray, so these local inverses combine to a global $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]], [[thm-polar-form-with-unique-principal-argument]], [[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]). The cut is a planar null set under Countable Choice ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F4] For every nonnegative Borel $g$ on $A(r,R)$, the change of variables through $P$ gives
$$\int_{A(r,R)}g(z)\,dA(z)=\int_0^{2\pi}\int_r^R g(se^{i\theta})\,s\,ds\,d\theta.$$
This is the nonnegative Borel change-of-variables theorem on the cut annulus, followed by ignoring the null cut ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [F3]).

[F5] The complex line integral is defined componentwise by Riemann–Stieltjes integrals, is linear in the integrand and integrator, and is additive under subdivision; its modulus is bounded by the absolute line integral, and a primitive evaluates it by endpoint values ([[def-complex-line-integral-over-a-rectifiable-path]], [[thm-riemann-stieltjes-linearity-and-additivity]], [[prop-linearity-of-complex-line-integrals]], [[prop-reversal-and-concatenation-of-complex-line-integrals]], [[thm-fundamental-inequality-for-complex-line-integrals]], [[thm-fundamental-theorem-for-complex-line-integrals]]).

[F6] A nowhere-zero holomorphic function on a disc has a holomorphic logarithm ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]); holomorphic composition obeys the chain rule and $(\exp L)'=(\exp L)L'$ ([[thm-chain-rule-for-complex-derivatives]], [[thm-complex-exponential-is-entire-with-derivative-itself]]). Also $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] The integral logarithm equals the natural logarithm, is strictly increasing, and obeys the product law; hence
$$\int_r^R\frac{ds}{s}=\log(R/r)>0$$
when $0<r<R$ ([[cor-integral-logarithm-agrees-with-natural-logarithm]], [[cor-integral-logarithm-is-strictly-increasing]], [[thm-integral-logarithm-product-law]], [[def-natural-logarithm]]).

[F8] For a positively oriented once-traversed circle, $(2\pi i)^{-1}\int dz/z=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]). A closed contour's winding number is defined by that normalized integral ([[def-winding-number-closed-complex-contour]]); for based loops at $1$, this integer classifies the positive generator of $\pi_1(\mathbb C^\times,1)$ ([[cor-winding-number-classifies-loops-in-the-punctured-plane]]).

[F9] The supremum for $\lambda$ is over Borel densities of finite positive area, permits extended path-length infima, and $\mu=1/\lambda$ with $1/0=+\infty$ and $1/(+\infty)=0$ ([[def-extremal-length-and-curve-family-modulus]]).

[F10] The rectangle $\Pi$ is nonempty open and convex; the round annulus is nonempty and open because $||z|-|w||\le|z-w|$, and it is path-connected by radial paths to an intermediate circle and arcs on that circle. Thus both are complex domains ([[def-complex-domain]], [[def-complex-annulus]], [[ex-convex-subsets-of-rn-are-path-connected]], [[thm-path-connected-implies-connected]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** compute area in polar coordinates and use Cauchy–Schwarz on the path foliations.

1.1 Put $P(s,\theta)=s(\cos\theta+i\sin\theta)$ on $(r,R)\times(0,2\pi)$. Its Jacobian determinant is $s>0$, so the inverse-function theorem in [F3] gives local $C^1$ inverses. The principal polar-form theorem gives a unique angle in $(0,2\pi)$ for every point off the positive real ray; thus $P$ is bijective onto the cut annulus and its local inverses combine to a global $C^1$ inverse. The omitted ray is null by [F3]. The nonnegative Borel change-of-variables theorem [F4] therefore gives the displayed polar area identity for every nonnegative Borel integrand, including extended-valued ones. [F3, F4, given, algebra]

1.2 Let $\rho$ be any Borel density on $\Pi$ with $0<A(\rho)<\infty$, and put $L=\ell_\rho(\Gamma_{\Pi}^{\mathrm v})$. For each $y\in(0,h)$ the horizontal segment from $(0,y)$ to $(w,y)$ belongs to $\Gamma_{\Pi}^{\mathrm v}$, so $L\le\int_0^w\rho(x,y)\,dx$. For almost every $y$, Tonelli and finite area make $\rho(\cdot,y)$ square-integrable; Cauchy–Schwarz then gives $L^2\le w\int_0^w\rho(x,y)^2\,dx$. In particular $L<\infty$. Integrating over $y$ yields $hL^2\le wA(\rho)$, so every quotient is at most $w/h$. [F1, F2, F9, given]

1.3 Let $\rho$ be any Borel density on $A(r,R)$ with $0<A(\rho)<\infty$, and put $L=\ell_\rho(\Gamma_{r,R})$. For each $\theta\in(0,2\pi)$ the radial segment $s\mapsto se^{i\theta}$ belongs to $\Gamma_{r,R}$, so $L\le\int_r^R\rho(se^{i\theta})\,ds$. For almost every $\theta$, the square integral is finite; weighted Cauchy–Schwarz gives $\displaystyle L^2\le\left(\int_r^R\frac{ds}{s}\right)\int_r^R\rho(se^{i\theta})^2s\,ds =\log(R/r)\int_r^R\rho(se^{i\theta})^2s\,ds.$ Integrating in $\theta$ and applying [F2, F4] yields $2\pi L^2\le\log(R/r)A(\rho)$; in particular $L<\infty$. Hence every quotient for $\Gamma_{r,R}$ is at most $(2\pi)^{-1}\log(R/r)$. [F1, F2, F4, F7, F9, given]

1.4 For a rectifiable path $\gamma$ joining the two annulus boundary circles, its compact trace lies in $\{|z|\ge r\}\subset\mathbb C^\times$. Cover the trace by discs avoiding $0$ and subdivide its parameter interval so each subpath lies in one such disc, using compactness and the Lebesgue number lemma ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-lebesgue-number-lemma]]). On each disc take a holomorphic logarithm $G_j$ of $z$ by [F6]; differentiating $e^{G_j(z)}=z$ gives $G_j'(z)=1/z$. Since $|e^{G_j(z)}|=e^{\operatorname{Re}G_j(z)}=|z|$, [F6, F7] identify $\operatorname{Re}G_j(z)$ with $\log|z|$. The fundamental theorem for complex line integrals [F5] evaluates each subpath integral, and additivity [F5] gives $\displaystyle \operatorname{Re}\int_\gamma\frac{dz}{z}=\log|\gamma(b)|-\log|\gamma(a)|=\pm\log(R/r).$ The sign depends on the initial endpoint. The fundamental inequality in [F5] therefore yields $\displaystyle \ell_{1/|z|}(\gamma)=\int_\gamma\frac{|dz|}{|z|}\ge\left|\int_\gamma\frac{dz}{z}\right|\ge\log(R/r).$ For nonrectifiable paths the left side is $+\infty$ by definition. [F1, F5, F6, F7, given]

1.5 Put $S=R/r$ and $D(z)=z/r$. Both $D:A(r,R)\to A(1,S)$ and its inverse $w\mapsto rw$ have constant complex difference quotients, so they are holomorphic and $D$ is biholomorphic ([[def-biholomorphic-map]], [[def-complex-differentiability-holomorphic-and-entire]]). In the componentwise Riemann–Stieltjes definition, replacing $\gamma$ by $D\circ\gamma$ multiplies its coordinate integrators by $1/r$, while the pulled-back integrand $1/(D\circ\gamma)$ is multiplied by $r$; therefore $\int_{D\circ\gamma}dw/w=\int_\gamma dz/z$. Hence $D$ maps $\Theta_{r,R}$ bijectively onto $\Theta_{1,S}$. Conformal invariance [[thm-extremal-length-conformal-invariance-and-monotonicity]] gives equality of their extremal lengths and moduli. It remains to calculate the normalized family in $A(1,S)$. [F5, F8, F10, given, algebra]

1.6 For the normalized winding-one family $\Theta_{1,S}$, every $\gamma$ satisfies $\int_\gamma dz/z=2\pi i$ by [F8]. The continuous density $\rho(z)=1/|z|$ therefore has $\ell_\rho(\gamma)\ge2\pi$ by [F1, F5]. Its area is $\displaystyle A(\rho)=\int_0^{2\pi}\int_1^S\frac1{s^2}s\,ds\,d\theta=2\pi\log S$ by [F4, F7]. It is finite and positive, so $\lambda(\Theta_{1,S})\ge2\pi/\log S$. [F1, F4, F5, F7, F8, given, algebra]

2.1 The constant density $\rho=1/w$ on $\Pi$ gives every path in $\Gamma_{\Pi}^{\mathrm v}$ length at least $1$, because its endpoint displacement is $w$ and Euclidean path length is at least that distance. Its area is $h/w$, so its quotient is at least $w/h$. Together with step 1.2 this gives $\lambda(\Gamma_{\Pi}^{\mathrm v})=w/h$ and $\mu(\Gamma_{\Pi}^{\mathrm v})=h/w$. Interchanging the two coordinates gives the horizontal formulas. [F1, F9, step 1.2, given, algebra]

2.2 The Borel density $\rho(z)=1/(2\pi|z|)$ on $A(r,R)$ has $\ell_\rho(\Gamma_{r,R})\ge(2\pi)^{-1}\log(R/r)$ by step 1.4. Its area, by step 1.1 and [F7], is $\displaystyle A(\rho)=\int_0^{2\pi}\int_r^R\frac{1}{4\pi^2s^2}s\,ds\,d\theta=\frac1{2\pi}\log(R/r),$ which is finite and positive. Its quotient is therefore at least $(2\pi)^{-1}\log(R/r)$. With step 1.3 this proves $\lambda(\Gamma_{r,R})=(2\pi)^{-1}\log(R/r)$ and $\mu(\Gamma_{r,R})=2\pi/\log(R/r)$. [F4, F7, F9, step 1.1, step 1.3, step 1.4, given, algebra]

2.3 For any finite-positive-area Borel density $\rho$ on $A(1,S)$ put $L=\ell_\rho(\Theta_{1,S})$. For each $s\in(1,S)$ the circle $\gamma_s(\theta)=se^{i\theta}$, $0\le\theta\le2\pi$, has winding number $1$ by [F8], so $L\le\ell_\rho(\gamma_s)$. Its speed is $s$, hence its arc-length function is $s\theta$; the Stieltjes interval formula, finite-measure uniqueness, and increasing simple approximation give $\displaystyle \ell_\rho(\gamma_s)=s\int_0^{2\pi}\rho(se^{i\theta})\,d\theta.$ For almost every $s$, the finite area and [F4] make the circle density square-integrable, and Cauchy–Schwarz gives $L^2\le2\pi s^2\int_0^{2\pi}\rho(se^{i\theta})^2\,d\theta$. Rearranging this as $\displaystyle \frac{L^2}{2\pi s}\le s\int_0^{2\pi}\rho(se^{i\theta})^2\,d\theta$ and integrating over $s\in(1,S)$ gives $\displaystyle \frac{\log S}{2\pi}L^2\le\int_1^S\int_0^{2\pi}\rho(se^{i\theta})^2s\,d\theta\,ds=A(\rho)$ by [F4]. Therefore every quotient is at most $2\pi/\log S$, which with step 1.6 proves $\lambda(\Theta_{1,S})=2\pi/\log S$ and $\mu(\Theta_{1,S})=(2\pi)^{-1}\log S$. Step 1.5 and $\log S=\log(R/r)$ transfer these two values to $\Theta_{r,R}$. [F1, F2, F4, F8, F9, step 1.5, step 1.6, given]

3.1 The positive rectangle segments, radial annulus segments, and once-traversed circles used above witness that all assigned families are nonempty. The formulas are finite and strictly positive because $w,h>0$ and $\log(R/r)>0$ by [F7]. Taking reciprocals under the conventions of [F9] gives the four displayed modulus values, while steps 2.1, 2.2 and 2.3 give all four extremal lengths. [F7, F9, step 2.1, step 2.2, step 2.3] ∎
