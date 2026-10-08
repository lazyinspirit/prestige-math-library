---
id: thm-round-annulus-conformal-parameter-is-complete-invariant
kind: theorem
title: The conformal parameter of a round annulus is a complete invariant
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 4
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, def-conformal-equivalence-and-automorphism-group, def-biholomorphic-map, def-complex-domain, def-complex-annulus, def-path-connected, thm-path-connected-implies-connected, thm-sine-and-cosine-parametrize-the-unit-circle, lem-radial-normalisation-is-continuous, lem-complex-conjugation-and-modulus-laws, def-countable-choice, cor-winding-number-classifies-loops-in-the-punctured-plane, def-winding-number-closed-complex-contour, def-based-loops-and-fundamental-group, def-induced-homomorphism-on-fundamental-groups, thm-induced-fundamental-group-map-functoriality, cor-geometric-unit-circle-has-fundamental-group-z, thm-int-comm-ring, thm-liouville-bounded-entire-function, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-holomorphic-logarithms-homologically-simply-connected-domains, cor-holomorphic-logarithm-has-the-logarithmic-derivative, cor-closed-contour-integral-of-a-derivative-is-zero, cor-normalized-circle-integral-about-its-centre-is-one, def-convex-subset-of-euclidean-space, def-complex-line-integral-over-a-rectifiable-path, prop-linearity-of-complex-line-integrals, thm-riemann-stieltjes-linearity-and-additivity, prop-reversal-and-concatenation-of-complex-line-integrals, prop-arc-length-under-lipschitz-maps-and-euclidean-similarities, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-continuous-preimages-of-borel-sets-are-borel, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, cor-integral-logarithm-agrees-with-natural-logarithm, cor-integral-logarithm-reciprocals-and-integer-powers, thm-of-archimedean, thm-heine-borel-rn, cor-integral-logarithm-is-strictly-increasing, def-natural-logarithm, thm-continuous-image-of-a-compact-space-is-compact, thm-lebesgue-number-lemma]
axiom_use: Countable Choice is inherited from the extremal-length and Borel change-of-variables interfaces; the fundamental-group, Liouville, and holomorphic-logarithm arguments use no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.3.1, printed pp. 121–122, for the annulus extremal-length value; §6.3.6, printed p. 124, Corollary 6.20 on shrinking nests of annuli."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 2–5: Lemma 1.2 (overflow monotonicity) and Lemma 1.7 (round-annulus modulus)."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101-129"
      url: "https://archive.ymsc.tsinghua.edu.au/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§4, printed p. 115, Lemma 5, for the separating-family extremal length of a round annulus."
verification:
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §6.3.1, printed pp. 121–122. Proposition 6.6 gives the vertical-family value for a conformal annulus, and Exercise 6.8 gives the dual circular-family width. Section 6.3.6, printed p. 124, Corollary 6.20 records the related shrinking-nest consequence when the sum of annular moduli diverges.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 2–5. Lemma 1.2 gives overflow monotonicity, and Lemma 1.7 computes the annulus connecting-family modulus.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §4, printed p. 115. Lemma 5 computes the extremal length of curves separating the two boundary circles. The arguments below use the library's winding-one family and reciprocal convention directly.

## Statement

Assume Countable Choice. For $0<r<R<\infty$ let $A(r,R)=\{z:r<|z|<R\}$ and let $\Gamma_{r,R}$ be the family of paths with interior in $A(r,R)$ joining the two boundary circles. Define the **conformal parameter**
$$M(A(r,R)):=\lambda(\Gamma_{r,R})=\frac1{2\pi}\log\frac Rr,$$
the extremal length of the joining family ([[thm-modulus-rectangle-and-annulus]]); it is the classical conformal modulus of a round annulus in the normalization for which the connecting-family modulus is $1/M=2\pi/\log(R/r)$ in the reciprocal library convention of [[def-extremal-length-and-curve-family-modulus]]. Then:

(i) For $0<r<R<\infty$ and $0<r'<R'<\infty$, $A(r,R)$ and $A(r',R')$ are conformally equivalent ([[def-conformal-equivalence-and-automorphism-group]]) if and only if $M(A(r,R))=M(A(r',R'))$, equivalently $R/r=R'/r'$. When the parameters agree, $z\mapsto(r'/r)z$ is a conformal equivalence.

(ii) Let $D^*=\{0<|z|<1\}$ and let $\Gamma_{D^*}$ be the family of paths $\gamma:[0,1]\to\mathbb C$ with $\gamma(0)=0$, $\gamma(1)\in\partial\mathbb D$, and $\gamma((0,1))\subseteq D^*$. Then the limiting conformal parameter is infinite:
$$M(D^*):=\lambda(\Gamma_{D^*})=+\infty.$$

(iii) The punctured disc $D^*$ is not conformally equivalent to any round annulus $A(r,R)$ with $0<r<R<\infty$, nor to the unit disc $\mathbb D$, nor to the plane $\mathbb C$. The punctured plane $\mathbb C^*$ is likewise not conformally equivalent to any round annulus.

## Facts & Assumptions

**Given:** Countable Choice, the annuli and domains in the Statement, and the extremal-length conventions.

[F1] Extremal length is the supremum of $\ell_\rho(\Gamma)^2/A(\rho)$ over Borel densities of finite positive area; it is monotone under family inclusion in the reverse direction, and its value is independent of an ambient enlargement when the family lies in the smaller domain ([[def-extremal-length-and-curve-family-modulus]], [[lem-rho-length-and-extremal-length-are-well-defined]], [[thm-extremal-length-conformal-invariance-and-monotonicity]]).

[F2] For a finite round annulus,
$$\lambda(\Gamma_{r,R})=\frac1{2\pi}\log\frac Rr,\qquad \lambda(\Theta_{r,R}^{+})=\frac{2\pi}{\log(R/r)},$$
where $\Theta_{r,R}^{+}$ is the family of rectifiable closed paths in $A(r,R)$ with winding number $1$ about $0$ ([[thm-modulus-rectangle-and-annulus]]).

[F3] A conformal equivalence preserves extremal lengths of path families whose full traces lie in its domains ([[thm-extremal-length-conformal-invariance-and-monotonicity]]).

[F4] Based loops modulo endpoint-fixed homotopy form $\pi_1$; continuous pointed maps induce homomorphisms that respect composition and based homotopy, and a homeomorphism induces an isomorphism with inverse induced by its inverse map ([[def-based-loops-and-fundamental-group]], [[def-induced-homomorphism-on-fundamental-groups]], [[thm-induced-fundamental-group-map-functoriality]]). For a path $c$ from $a$ to $b$, conjugation $[\gamma]\mapsto[c^{-1}*\gamma*c]$ changes the basepoint from $a$ to $b$; conjugation by the reverse path is its inverse, since a path followed by its reverse is homotopic relative endpoints to a constant path.

[F5] The unit circle has fundamental group $\mathbb Z$, and the winding number is the corresponding integer for based loops in $\mathbb C^\times$ at $1$ ([[cor-geometric-unit-circle-has-fundamental-group-z]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]], [[def-winding-number-closed-complex-contour]]). Scaling a circle and its contour by a positive factor leaves $\int dz/z$ unchanged by the componentwise Riemann–Stieltjes definition. Every automorphism of $(\mathbb Z,+)$ is multiplication by $+1$ or $-1$ ([[thm-int-comm-ring]]).

[F6] For $\Omega=A(r,R)$ choose $s_0=(r+R)/2$; for $D^*$ choose $s_0=1/2$; for $\mathbb C^*$ choose $s_0=1$. Each is nonempty and open because its radial interval is open and $z\mapsto|z|$ is continuous; radial segments to the circle of radius $s_0$, followed by circle arcs, show path-connectedness and hence the complex-domain property ([[def-complex-domain]], [[def-complex-annulus]], [[def-path-connected]], [[thm-path-connected-implies-connected]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[lem-radial-normalisation-is-continuous]], [[lem-complex-conjugation-and-modulus-laws]]). The homotopy $H(z,t)=((1-t)|z|+ts_0)z/|z|$ stays in the radial interval, fixes that circle, and deformation retracts $\Omega$ onto it.

[F7] Complex conjugation is a Euclidean isometry, sends the winding number of a closed contour to its negative, and preserves the supremum defining extremal length after pulling back the density. Its area change is $|\det D\overline z|=1$ ([[lem-complex-conjugation-and-modulus-laws]], [[prop-arc-length-under-lipschitz-maps-and-euclidean-similarities]], [[def-complex-line-integral-over-a-rectifiable-path]], [[thm-riemann-stieltjes-linearity-and-additivity]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F8] For every nonnegative Borel density, length on a path is the integral along an arc-length parametrization and is additive over subpath intervals. A zero extension from a Borel subdomain is Borel and preserves area; endpoint values do not affect path length because the arc-length Stieltjes measure is atomless ([[lem-rho-length-and-extremal-length-are-well-defined]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]).

[F9] The integral logarithm agrees with the natural logarithm, is strictly increasing, and satisfies $\log(2^n)=n\log2$ with $\log2>0$ ([[cor-integral-logarithm-agrees-with-natural-logarithm]], [[cor-integral-logarithm-is-strictly-increasing]], [[cor-integral-logarithm-reciprocals-and-integer-powers]]). The natural numbers are unbounded in $\mathbb R$ ([[thm-of-archimedean]]).

[F10] A nonvanishing holomorphic function on a homologically simply connected domain has a holomorphic logarithm, and a holomorphic logarithm of $w$ has derivative $1/w$ ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[F11] A bounded entire function is constant ([[thm-liouville-bounded-entire-function]]). The integral of the derivative of a holomorphic function over a closed rectifiable contour is zero ([[cor-closed-contour-integral-of-a-derivative-is-zero]]), while $(2\pi i)^{-1}\int_{|w|=1/2}dw/w=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]).

[F12] The unit disc is convex and hence homologically simply connected ([[def-convex-subset-of-euclidean-space]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[F13] The image of a compact interval under a continuous path is compact; the Heine–Borel and Lebesgue-number theorems then give a finite subdivision subordinate to a cover by discs avoiding $0$ ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-lebesgue-number-lemma]]).

## Proof

**Proof technique:** winding-number classes, monotonicity, and a holomorphic-logarithm obstruction.

1.1 The radial deformation retraction in [F6], based at $s_0$, induces inverse homomorphisms on the domain and circle fundamental groups by [F4]. Scaling that circle to the unit circle identifies its group with $\mathbb Z$ by [F5]; the scaling leaves $\int dz/z$ unchanged because the integrand and coordinate integrators acquire reciprocal factors. Changing basepoint along a radial/circular path also preserves the winding integer, since the path and its reversal contribute opposite contour integrals. Thus winding identifies the fundamental group of each radial domain with $\mathbb Z$. A biholomorphism between two such domains and its inverse induce inverse group isomorphisms, so it acts on winding numbers by an automorphism of $\mathbb Z$, necessarily multiplication by a sign $\varepsilon\in\{+1,-1\}$. Since $\mathbb Z$ is abelian, the conclusion is independent of the basepoint paths; it sends the winding-one closed-loop family onto the winding-$\varepsilon$ family. Rectifiability is preserved in both directions by the conformal path transport in [[thm-extremal-length-conformal-invariance-and-monotonicity]].[F4, F5, F6, F7, given, algebra]

1.2 For any rectifiable closed $\gamma$, complex conjugation $c(z)=\bar z$ satisfies $\int_{c\circ\gamma}dw/w=\overline{\int_\gamma dz/z}$, by expanding the componentwise Riemann–Stieltjes definition, so it interchanges winding $+1$ and $-1$. If $\widetilde\gamma$ is an arc-length parametrization of $\gamma$, then $c\circ\widetilde\gamma$ is one for $c\circ\gamma$ because $c$ is a Euclidean isometry. The arc-length integral formula in [F1] gives $\ell_\rho(c\circ\gamma)=\ell_{\rho\circ c}(\gamma)$. Also $A(\rho\circ c)=A(\rho)$ by the Borel change-of-variables formula in [F7]. Since $\rho\mapsto\rho\circ c$ is a bijection on finite-positive-area Borel densities, the two sign families have equal extremal length. [F1, F7, given, algebra]

1.3 If $R/r=R'/r'$, the map $f(z)=(r'/r)z$ is a bijective holomorphic map $A(r,R)\to A(r',R')$ with holomorphic inverse $w\mapsto(r/r')w$, so the annuli are conformally equivalent. [given, algebra]

1.4 Fix $n\ge1$ and put $\varepsilon_n=2^{-n}$. Given $\gamma\in\Gamma_{D^*}$, continuity and $|\gamma(0)|=0<\varepsilon_n<1=|\gamma(1)|$ give a nonempty compact level set $\{t:|\gamma(t)|=\varepsilon_n\}$; compactness of $[0,1]$ gives its largest member $t_n$. For $t_n<t<1$, one has $\varepsilon_n<|\gamma(t)|<1$, since another value at or below $\varepsilon_n$ would force a later hit of that level, so $\gamma|_{[t_n,1]}$ belongs to $\Gamma_{\varepsilon_n,1}$. If $\gamma$ is nonrectifiable, its assigned length is already $+\infty$. If it is rectifiable, subpath additivity in [F8] gives the length comparison below.[F8, F13, given, construct]

1.5 If a biholomorphism $h:D^*\to\mathbb C$ existed, its inverse $h^{-1}:\mathbb C\to D^*$ would be entire and bounded by $1$. Liouville's theorem [F11] would make it constant, contradicting bijectivity. [F11, given]

1.6 If a biholomorphism $h:\mathbb D\to D^*$ existed, then $h$ would be nowhere zero. By [F12], the disc is homologically simply connected, so [F10] supplies a holomorphic $g:\mathbb D\to\mathbb C$ with $e^{g(z)}=h(z)$. Set $L(w)=g(h^{-1}(w))$ on $D^*$. Then $e^{L(w)}=w$, and [F10] gives $L'(w)=1/w$. Integrating around the positively oriented circle $|w|=1/2\subset D^*$, [F11] gives $0=\int L'(w)\,dw=\int dw/w=2\pi i$, a contradiction. [F10, F11, F12, given, construct, algebra]

2.1 Conversely, let $h:A(r,R)\to A(r',R')$ be a biholomorphism. By step 1.1, it maps $\Theta_{r,R}^{+}$ onto one of the two target sign families. Conformal invariance [F3] and the sign equality in step 1.2 give $\displaystyle \lambda(\Theta_{r,R}^{+})=\lambda(\Theta_{r',R'}^{+}).$ Using [F2], this is $\displaystyle \frac{2\pi}{\log(R/r)}=\frac{2\pi}{\log(R'/r')}.$ Both logarithms are positive by [F9]; cancellation and strict monotonicity in [F9] give $R/r=R'/r'$. This proves (i). [F2, F3, F9, step 1.1, step 1.2]

2.2 Let $\rho$ be any Borel density on $A(\varepsilon_n,1)$ with $0<A(\rho)<\infty$, and extend it by zero to a Borel density $\widetilde\rho$ on $D^*$. Its area is unchanged. Step 1.4 and [F8] show $\displaystyle \ell_{\widetilde\rho}(\Gamma_{D^*})\ge\ell_\rho(\Gamma_{\varepsilon_n,1}),$ because every path contains the annular subpath and the endpoint values carry no length mass. Thus the extremal-length quotient of $\widetilde\rho$ on $\Gamma_{D^*}$ is at least the quotient of $\rho$ on $\Gamma_{\varepsilon_n,1}$. Taking suprema and applying [F2] yields $\displaystyle \lambda(\Gamma_{D^*})\ge\lambda(\Gamma_{\varepsilon_n,1})=\frac{\log(2^n)}{2\pi}=\frac{n\log2}{2\pi}.$ As $n$ is unbounded and $\log2>0$, this proves $M(D^*)=+\infty$. [F1, F2, F8, F9, step 1.4, given]

2.3 Define $\Theta_{D^*}^{+}$ and $\Theta_{\mathbb C^*}^{+}$ as the families of rectifiable closed paths of winding $+1$ in the indicated domains. For every $n\ge1$, $\Theta_{A(2^{-n},1)}^{+}\subseteq\Theta_{D^*}^{+}$ and $\Theta_{A(2^{-n},2^n)}^{+}\subseteq\Theta_{\mathbb C^*}^{+}$. These subannular families have full traces in the larger domains, so [F1] and monotonicity [F3] give $\displaystyle 0\le\lambda(\Theta_{D^*}^{+})\le\frac{2\pi}{n\log2},\qquad 0\le\lambda(\Theta_{\mathbb C^*}^{+})\le\frac{2\pi}{2n\log2}.$ Letting $n$ grow proves both extremal lengths are zero. By step 1.2 the corresponding winding-$-1$ families also have extremal length zero. [F1, F2, F3, F9, step 1.2]

3.1 If either $\Omega=D^*$ or $\Omega=\mathbb C^*$ were conformally equivalent to a finite round annulus $A(r,R)$, step 1.1 would map its winding-one family onto one of the two target sign families. Conformal invariance [F3] and step 1.2 would then equate its zero extremal length from step 2.3 with the strictly positive value $2\pi/\log(R/r)$ in [F2], a contradiction. This proves both finite-annulus exclusions in (iii). [F2, F3, step 1.1, step 1.2, step 2.3]

4.1 Steps 1.3 and 2.1 prove (i), step 2.2 proves (ii), and steps 1.5, 1.6, and 3.1 prove every exclusion in (iii). [step 1.3, step 2.1, step 2.2, step 3.1, step 1.5, step 1.6] ∎
