---
id: lem-riemann-maps-of-jordan-domains-extend-homeomorphically
kind: lemma
title: Riemann maps of Jordan domains extend to homeomorphisms of the closures
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- thm-riemann-mapping-theorem
- lem-jordan-schoenflies-extension-for-plane-curves
- thm-jordan-brouwer-separation
- def-conformal-equivalence-and-automorphism-group
- def-unit-disc-upper-half-plane-and-blaschke-factor
- def-mobius-transformation
- thm-mobius-transformations-biholomorphic-sphere
- def-chordal-metric-riemann-sphere
- thm-stereographic-projection-riemann-sphere-homeomorphism
- def-riemann-sphere-holomorphic-charts
- rem-riemann-sphere-one-point-compactification
- thm-harmonic-and-holomorphic-schwarz-reflection-principles
- thm-identity-theorem-holomorphic-functions
- def-complex-domain
- def-homologically-simply-connected-complex-domain
- cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
- cor-components-of-open-subsets-of-rn-are-polygonally-connected
- prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
- def-lebesgue-measure-and-the-lebesgue-sigma-algebra
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- cor-jacobian-determinant-of-a-holomorphic-map
- cor-injective-holomorphic-derivative-nonzero
- thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
- cor-cauchy-schwarz-inequality-for-l-two
- thm-tonelli-and-fubini-for-completed-product-measures
- thm-c1-paths-have-length-equal-to-the-integral-of-speed
axiom_use: Full AC is used by the Riemann mapping theorem, Jordan–Schönflies, and Jordan–Brouwer separation. AC implies Countable Choice, which the extremal-length, modulus, and Lebesgue-area interfaces assume; Countable Choice also selects one short crosscut at each dyadic scale.
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)
    url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
    locator: 'Ch. 1 §§8.1–8.2, printed pp. 146–150: Lemma 8.4 (shrinking cross-cuts by extremal length), the Carathéodory–Torhorst argument, and the Conformal Schönflies Theorem; read in full.'
  - title: Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)
    url: https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf
    locator: Ch. 1 §4, printed pp. 29–35, including Theorem 4.7 at p. 32 and its proof of continuous boundary extension for locally path-connected boundaries; §5, printed p. 37, the Jordan-domain homeomorphic boundary statement; read in full.
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $\Gamma\subseteq\widehat{\mathbb C}$ be a Jordan curve, and let $\Omega_1,\Omega_2$ be the two complementary components. Each component admits a conformal equivalence from $\mathbb D$, and every conformal equivalence $\psi:\mathbb D\to\Omega_j$ extends uniquely to a homeomorphism $\overline\psi:\overline{\mathbb D}\to\overline{\Omega_j}$.

After a Möbius change of coordinates making $\Gamma\subset\mathbb C$, write $\Omega$ for the bounded component and $\Omega^*$ for the component containing $\infty$. Then there is a conformal equivalence $\psi^*:\widehat{\mathbb C}\setminus\overline{\mathbb D}\to\Omega^*$ with $\psi^*(\infty)=\infty$, and every such exterior equivalence extends uniquely to a homeomorphism of the closures. If the original curve contains $\infty$, this normalization is understood after the stated Möbius change; an exterior map fixing $\infty$ in the original coordinate cannot exist in that case.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Jordan curve $\Gamma$; its complementary components; and the conformal maps in the statement.

[F1] Jordan–Brouwer separation gives two complementary components with common boundary $\Gamma$. The plane Jordan–Schönflies theorem extends curve homeomorphisms to the plane and makes each closed bounded Jordan region a closed topological disk. ([[thm-jordan-brouwer-separation]], [[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] A plane domain whose complement is connected and unbounded is homologically simply connected: for any complex cycle in the domain, its index is locally constant off its trace and zero sufficiently far away; the unbounded complement contains a point sufficiently far from the trace, and connectedness makes the locally constant index zero throughout the complement. ([[def-homologically-simply-connected-complex-domain]], [[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]])

[F3] Under AC, every proper homologically simply connected plane domain is biholomorphic to $\mathbb D$, with any chosen base point normalized to $0$. ([[thm-riemann-mapping-theorem]])

[F4] A Möbius transformation is a biholomorphism of the sphere; in particular $J(z)=1/z$ exchanges $\mathbb D$ and $\widehat{\mathbb C}\setminus\overline{\mathbb D}$ and swaps $0$ and $\infty$. ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-riemann-sphere-holomorphic-charts]])

[F5] A holomorphic bijection is a real C1 diffeomorphism with Jacobian $|\Phi'|^2$ ([[cor-jacobian-determinant-of-a-holomorphic-map]], [[cor-injective-holomorphic-derivative-nonzero]]). Nonnegative C1 change of variables on compact interior exhaustions therefore gives $\int_G|\Phi'|^2dA=|\Phi(G)|$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F6] Cauchy–Schwarz and nonnegative polar Fubini apply ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-and-fubini-for-completed-product-measures]]). The polar map on a half-annulus has determinant rho and a smooth inverse on its angle branch; applying [F5]'s change of variables gives the polar area integral. On each compact semicircle subarc, the C1 path length equals the integral of its speed ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]); increasing those subarcs gives the improper length.

[F7] Under Countable Choice, planar Lebesgue measure is countably additive, finite on bounded sets, and additive on disjoint measurable subsets. ([[def-countable-choice]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[F9] Write $z=x+iy$ and $w=u+iv$. Substitution into the stereographic coordinates in [[thm-stereographic-projection-riemann-sphere-homeomorphism]] and expansion of the squared Euclidean distance give
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}}\le2|z-w|,$$
where the inequality uses $(1+|z|^2)(1+|w|^2)\ge1$. Indeed, the dot product of the two unit-sphere images is
$$\frac{4\operatorname{Re}(z\overline w)+(|z|^2-1)(|w|^2-1)}{(1+|z|^2)(1+|w|^2)},$$
and $\|\Sigma(z)-\Sigma(w)\|^2=2-2\Sigma(z)\cdot\Sigma(w)$ simplifies to the square of the displayed formula. The chordal metric is defined by that Euclidean distance ([[def-chordal-metric-riemann-sphere]]).

[F10] A holomorphic function on an upper half-disc, continuous on its closure and real on its diameter, extends holomorphically by Schwarz reflection. A holomorphic function vanishing on an interval inside a domain is identically zero by the identity theorem ([[thm-harmonic-and-holomorphic-schwarz-reflection-principles]], [[thm-identity-theorem-holomorphic-functions]]). A Möbius coordinate flattens any small arc of the unit circle to an interval, so this applies to a continuous boundary function that is zero on that arc.

[F11] The Riemann sphere is compact Hausdorff, and $\mathbb C$ is an open dense subspace. ([[rem-riemann-sphere-one-point-compactification]])

## Proof

**Proof technique:** Riemann mapping, short crosscuts, Jordan separation and Schwarz reflection.

1.1 If $\infty\in\Gamma$, choose $q\notin\Gamma$ and a Möbius map $M$ with pole at $q$; then $M(\Gamma)\subset\mathbb C$. Prove the assertion in this normalized coordinate and transport maps and closures back by $M^{-1}$. Hence assume $\Gamma\subset\mathbb C$. [F1, F4, choose]

2.1 By [F1], the finite plane complement has bounded component Omega and unbounded component Ustar. Set $\Omega^*=Ustar\cup\{\infty\}$, the corresponding sphere domain; its closure is a topological closed disk. Choose $a\in\Omega$ and $\tau_a(z)=1/(z-a)$; then $V=\tau_a(\Omega^*)$ is the bounded Jordan component containing0. Omega and V are open connected plane domains; Omega-star is an open connected sphere domain. [F1, F4, step 1.1, choose]

3.1 The complements $\mathbb C\setminus\Omega$ and $\mathbb C\setminus V$ are connected and unbounded because each is the closure of the unbounded Jordan component, while $\Omega$ and $V$ are bounded. For every cycle in either domain its index is locally constant off its trace and vanishes far away by [F2]; unboundedness supplies an omitted point with index zero, and connectedness then makes the index zero at every omitted point. Thus $\Omega$ and $V$ are proper homologically simply connected domains. [F2, step 2.1]

4.1 Apply [F3] to $\Omega$ with base point $a$ and invert the resulting map to obtain $\psi:\mathbb D\to\Omega$. Apply [F3] to $V$ with base point $0$ to obtain $g:V\to\mathbb D$ with $g(0)=0$. With $I(z)=1/z$, the map $\psi^*(z):=\tau_a^{-1}(g^{-1}(I(z)))$ is a conformal equivalence from $\widehat{\mathbb C}\setminus\overline{\mathbb D}$ onto $\Omega^*$ and satisfies $\psi^*(\infty)=\infty$. [F3, F4, step 2.1, step 3.1]

5.1 Fix any conformal equivalence $h:\mathbb D\to\Omega$ and any $\xi\in\partial\mathbb D$. The Möbius map $\alpha_\xi(z)=\xi(i-z)/(i+z)$ sends $\mathbb H$ to $\mathbb D$ and $0\in\partial\mathbb H$ to $\xi$; put $\Phi=h\circ\alpha_\xi$. For $r>0$, let $\Pi_r=\{r/2<|z|<r,\ \operatorname{Im}z>0\}$ and let $\mathcal G_r$ be its half-circle family. [F4, given, step 2.1, step 4.1, algebra]

6.1 For each $r>0$ and $r/2<\rho<r$, define the open semicircle image length $L(\rho)=\int_0^\pi|\Phi'(\rho e^{i\theta})|\rho\,d\theta$, possibly infinite. On compact angle subintervals this is exactly its C1 length by [F6], and exhaustion gives the improper length. Cauchy–Schwarz gives $L(\rho)^2\le\pi\rho\int_{S_\rho}|\Phi'|^2ds$. Integrating $d\rho/\rho$ and applying polar Fubini yields $\int_{r/2}^r L(\rho)^2d\rho/\rho\le\pi\int_{\Pi_r}|\Phi'|^2dA=\pi|\Phi(\Pi_r)|$ by [F5]. No conformal invariance theorem for a not-yet-extended boundary family is used. [F5, F6, step 5.1, algebra]

7.1 For dyadic $r_n=2^{-n}$ the half-annuli $\Pi_{r_n}$ are disjoint. Their images are disjoint measurable subsets of bounded Omega, so [F7] gives $A_n=|\Phi(\Pi_{r_n})|\to0$. Step 6.1 and $\int_{r_n/2}^{r_n}d\rho/\rho=\log2$ allow a radius $\rho_n$ with $L(\rho_n)^2\le\pi A_n/\log2+4^{-n}$. Countable Choice selects one at each scale. Hence these image arcs have finite length tending to zero and their source caps shrink to xi. Their Euclidean diameters are at most their lengths, and their spherical diameters also tend to zero by [F9]. Finite image length supplies endpoint limits in the next step, before any boundary family is invoked. [F5, F6, F7, F9, step 5.1, step 6.1, choose]

8.1 Each finite-length image arc in step 7.1 has endpoint limits, since the remaining variation of a rectifiable arc tends to zero. Those limits lie on $\Gamma$: an interior limit, transported by the continuous inverse map, would make a sequence approaching the source boundary converge to an interior point. The arc interior is embedded; if the endpoints coincide it is a Jordan loop based at that boundary point. If they differ, uniform continuity of the inverse of a Jordan parameterization shows that they are joined by one $\Gamma$ subarc of diameter tending to zero. Join this small subarc to the image arc to form a small Jordan loop $L_n$; in the coincident case take the image arc itself. Its bounded interior has diameter tending to zero, since it lies in the convex hull of its boundary (every affine coordinate attains its extreme on that boundary). The connected exterior $\Omega^*$ contains infinity and avoids $L_n$, hence lies on its unbounded side. Every point of the other $\Gamma$ subarc, or of $\Gamma$ minus the coincident endpoint, is approached from $\Omega^*$ and misses $L_n$, so also lies on that unbounded side. Thus the bounded interior of $L_n$ is contained in $\Omega$. For large $n$ it excludes the fixed point $h(0)$. Crosscut separation in the topological Jordan disk therefore identifies it with the image of the source cap adjacent to $\xi$. These image caps have diameter tending to zero. Nested source caps then show that $h$ has a unique limit at $\xi$, and that its continuous extension is continuous there. Apply this at every boundary point. [F1, step 2.1, step 5.1, step 7.1, construct]

9.1 Suppose two distinct boundary points have the same image $a$. The image of their straight source chord is a Jordan loop $L$ meeting $\Gamma$ only at $a$. Its bounded interior is contained in $\Omega$: the connected exterior of $\Omega$ contains infinity and avoids $L$, and exterior approximation puts every point of $\Gamma\setminus\{a\}$ on the unbounded side of $L$. One source chord cap maps to this bounded interior. Continuity forces its source boundary-circle arc to map into $\Gamma\cap\overline{\operatorname{int}L}=\{a\}$. Flatten a subarc by a Möbius coordinate; Schwarz reflection [F10] extends $h-a$ across the interval where it is zero, and the identity theorem forces $h$ constant, a contradiction. Hence the boundary extension is injective. It is onto $\Gamma$, because inverse images of a sequence in $\Omega$ approaching any given boundary point have a subsequence in the compact closed disk, and its limit cannot be interior. The extension is a continuous bijection of compact Hausdorff closures, hence a homeomorphism. [F1, F10, F11, step 8.1, construct]

10.1 For any conformal equivalence $h^*:\widehat{\mathbb C}\setminus\overline{\mathbb D}\to\Omega^*$, the map $\tau_a\circ h^*\circ I$ is a conformal equivalence $\mathbb D\to V$; repeating the crosscut and reflection argument of steps 5.1–9.1 for $V=\tau_a(\Omega^*)$ gives a homeomorphic extension, and conjugating back by $\tau_a^{-1}$ and $I$ gives the required extension of $h^*$. [F4, step 2.1, step 3.1, step 5.1, step 9.1]

11.1 Any two continuous extensions agree on the dense open domain of their conformal equivalence, so agree on its closure because the sphere is Hausdorff; the extension is unique. Transporting the normalized conclusions from step 1.1 proves the theorem for the original sphere curve; the exterior normalization at $\infty$ is asserted only in a coordinate where $\infty\notin\Gamma$. [F11, given, step 1.1, step 9.1, step 10.1] ∎
