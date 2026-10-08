---
id: lem-riemann-maps-of-jordan-domains-extend-homeomorphically
kind: lemma
title: "Riemann maps of Jordan domains extend to homeomorphisms of the closures"
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
  - thm-modulus-rectangle-and-annulus
  - thm-extremal-length-conformal-invariance-and-monotonicity
  - def-extremal-length-and-curve-family-modulus
  - thm-local-maximum-modulus-principle
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-chordal-metric-riemann-sphere
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - def-complex-domain
  - def-homologically-simply-connected-complex-domain
  - cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
axiom_use: "Full AC is used by the Riemann mapping theorem, Jordan–Schönflies, and Jordan–Brouwer separation. AC implies Countable Choice, which the extremal-length, modulus, and Lebesgue-area interfaces assume; Countable Choice also selects one short crosscut at each dyadic scale."
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§8.1–8.2, printed pp. 146–150: Lemma 8.4 (shrinking cross-cuts by extremal length), the Carathéodory–Torhorst argument, and the Conformal Schönflies Theorem; read in full."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §4, printed pp. 29–35, including Theorem 4.7 at p. 32 and its proof of continuous boundary extension for locally path-connected boundaries; §5, printed p. 37, the Jordan-domain homeomorphic boundary statement; read in full."
dependency_level: 4
---

## Statement

Assume the Axiom of Choice. Let $\Gamma\subseteq\widehat{\mathbb C}$ be a Jordan curve, and let $\Omega_1,\Omega_2$ be the two complementary components. Each component admits a conformal equivalence from $\mathbb D$, and every conformal equivalence $\psi:\mathbb D\to\Omega_j$ extends uniquely to a homeomorphism $\overline\psi:\overline{\mathbb D}\to\overline{\Omega_j}$.

After a Möbius change of coordinates making $\Gamma\subset\mathbb C$, write $\Omega$ for the bounded component and $\Omega^*$ for the component containing $\infty$. Then there is a conformal equivalence $\psi^*:\widehat{\mathbb C}\setminus\overline{\mathbb D}\to\Omega^*$ with $\psi^*(\infty)=\infty$, and every such exterior equivalence extends uniquely to a homeomorphism of the closures. If the original curve contains $\infty$, this normalization is understood after the stated Möbius change; an exterior map fixing $\infty$ in the original coordinate cannot exist in that case.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Jordan curve $\Gamma$; its complementary components; and the conformal maps in the statement.

[F1] Jordan–Brouwer separation gives two complementary components with common boundary $\Gamma$. The plane Jordan–Schönflies theorem extends curve homeomorphisms to the plane and makes each closed bounded Jordan region a closed topological disk. ([[thm-jordan-brouwer-separation]], [[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] A plane domain whose complement is connected is homologically simply connected: for any complex cycle in the domain, its index is locally constant off its trace and zero sufficiently far away; since the complement of the domain is connected and disjoint from the cycle trace, the index vanishes at every omitted point. ([[def-homologically-simply-connected-complex-domain]], [[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]])

[F3] Under AC, every proper homologically simply connected plane domain is biholomorphic to $\mathbb D$, with any chosen base point normalized to $0$. ([[thm-riemann-mapping-theorem]])

[F4] A Möbius transformation is a biholomorphism of the sphere; in particular $J(z)=1/z$ exchanges $\mathbb D$ and $\widehat{\mathbb C}\setminus\overline{\mathbb D}$ and swaps $0$ and $\infty$. ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-riemann-sphere-holomorphic-charts]])

[F5] For $\Pi_r=\{z:r/2<|z|<r,\ \operatorname{Im}z>0\}$, the family of half-circles $S_\rho=\{z:|z|=\rho,\ \operatorname{Im}z>0\}$, $r/2<\rho<r$, has extremal length $\pi/\log 2$. Indeed, $z\mapsto\log z$ maps $\Pi_r$ to a rectangle of width $\log2$ and height $\pi$, and the half-circles to paths joining its horizontal sides; the rectangle formula gives $\lambda=\pi/\log2$. ([[thm-modulus-rectangle-and-annulus]], [[def-extremal-length-and-curve-family-modulus]])

[F6] Extremal length is conformally invariant. For a path family in a plane domain $U$ with finite positive area, the constant density $1$ gives $\lambda(\mathcal G)\ge (\inf_{\gamma\in\mathcal G}\operatorname{length}(\gamma))^2/\operatorname{area}(U)$. ([[thm-extremal-length-conformal-invariance-and-monotonicity]], [[def-extremal-length-and-curve-family-modulus]])

[F7] Under Countable Choice, planar Lebesgue measure is countably additive, finite on bounded sets, and additive on disjoint measurable subsets. ([[def-countable-choice]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[F8] The maximum modulus principle holds for holomorphic functions on complex domains. ([[thm-local-maximum-modulus-principle]])

[F9] Write $z=x+iy$ and $w=u+iv$. Substitution into the stereographic coordinates in [[thm-stereographic-projection-riemann-sphere-homeomorphism]] and expansion of the squared Euclidean distance give
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}}\le2|z-w|,$$
where the inequality uses $(1+|z|^2)(1+|w|^2)\ge1$. Indeed, the dot product of the two unit-sphere images is
$$\frac{4\operatorname{Re}(z\overline w)+(|z|^2-1)(|w|^2-1)}{(1+|z|^2)(1+|w|^2)},$$
and $\|\Sigma(z)-\Sigma(w)\|^2=2-2\Sigma(z)\cdot\Sigma(w)$ simplifies to the square of the displayed formula. The chordal metric is defined by that Euclidean distance ([[def-chordal-metric-riemann-sphere]]).

[F10] **Prime-end boundary facts used below.** For a conformal disk, prime ends form a boundary circle and its Riemann map extends homeomorphically to the prime-end compactification. A prime end has an impression in the physical boundary; if the complement is locally connected, every impression is a singleton and the extension to the physical closure is continuous. Lyubich proves the needed shrinking-crosscut lemma by extremal length and the locally-connected-complement implication in the Carathéodory–Torhorst argument (Ch. 1 §§8.1–8.2, printed pp. 146–150).

[F11] The Riemann sphere is compact Hausdorff, and $\mathbb C$ is an open dense subspace. ([[rem-riemann-sphere-one-point-compactification]])

## Proof

**Proof technique:** Riemann mapping, extremal-length shrinking cross-cuts, and prime ends.

1.1 If $\infty\in\Gamma$, choose $q\notin\Gamma$ and a Möbius map $M$ with pole at $q$; then $M(\Gamma)\subset\mathbb C$. Prove the assertion in this normalized coordinate and transport maps and closures back by $M^{-1}$. Hence assume $\Gamma\subset\mathbb C$. [F1, F4, choose]

2.1 By [F1], $\mathbb C\setminus\Gamma$ has a bounded component $\Omega$ and an unbounded component $\Omega^*$, and both closures are topological disks with boundary $\Gamma$. Choose $a\in\Omega$ and set $\tau_a(z)=1/(z-a)$; then $V:=\tau_a(\Omega^*)$ is the bounded Jordan component containing $0$. All three are open connected plane domains. [F1, F4, step 1.1, choose]

3.1 The complements $\mathbb C\setminus\Omega$ and $\mathbb C\setminus V$ are connected because each is the closure of the other Jordan component. For every cycle in either domain its index is locally constant off its trace and vanishes far away by [F2]; connectedness makes the index zero at every omitted point. Thus $\Omega$ and $V$ are proper homologically simply connected domains. [F2, step 2.1]

4.1 Apply [F3] to $\Omega$ with base point $a$ and invert the resulting map to obtain $\psi:\mathbb D\to\Omega$. Apply [F3] to $V$ with base point $0$ to obtain $g:V\to\mathbb D$ with $g(0)=0$. With $I(z)=1/z$, the map $\psi^*(z):=\tau_a^{-1}(g^{-1}(I(z)))$ is a conformal equivalence from $\widehat{\mathbb C}\setminus\overline{\mathbb D}$ onto $\Omega^*$ and satisfies $\psi^*(\infty)=\infty$. [F3, F4, step 2.1, step 3.1]

5.1 Fix any conformal equivalence $h:\mathbb D\to\Omega$ and any $\xi\in\partial\mathbb D$. The Möbius map $\alpha_\xi(z)=\xi(i-z)/(i+z)$ sends $\mathbb H$ to $\mathbb D$ and $0\in\partial\mathbb H$ to $\xi$; put $\Phi=h\circ\alpha_\xi$. For $r>0$, let $\Pi_r=\{r/2<|z|<r,\ \operatorname{Im}z>0\}$ and let $\mathcal G_r$ be its half-circle family. [F4, given, step 2.1, step 4.1, algebra]

6.1 The logarithm maps $\Pi_r$ to a rectangle of width $\log2$ and height $\pi$ and its half-circles to paths joining the horizontal sides. By [F5] this family has extremal length $\pi/\log2$; conformal invariance [F6] gives $\lambda(\Phi(\mathcal G_r))=\pi/\log2$. [F5, F6, step 5.1]

7.1 For $r_n=2^{-n}$ the half-annuli $\Pi_{r_n}$ are disjoint, so their images under the injective $\Phi$ are disjoint measurable subsets of bounded $\Omega$. By [F7], $A_n:=\operatorname{area}(\Phi(\Pi_{r_n}))$ is finite and tends to $0$. If $\ell_n$ is the infimum of lengths of the image half-circles, [F6] with constant density $1$ gives $\ell_n^2\le(\pi/\log2)A_n$, hence $\ell_n\to0$. Countable Choice selects $\rho_n\in(r_n/2,r_n)$ with $\operatorname{length}(\Phi(S_{\rho_n}))<\ell_n+2^{-n}$. These generalized cross-cuts form a nest for the prime end at $\xi$; their Euclidean and therefore spherical diameters tend to zero by [F9]. [F6, F7, F9, step 2.1, step 5.1, step 6.1, choose]

8.1 The cross-cuts of step 7.1 are the shrinking-crosscut input of [F10]. The complement $\widehat{\mathbb C}\setminus\Omega=\overline{\Omega^*}$ is locally connected because it is a closed topological disk by step 2.1. The Carathéodory–Torhorst argument in [F10] therefore makes the prime-end extension continuous to the physical closure; its singleton-impression step uses the maximum modulus principle [F8]. [F8, F10, step 2.1, step 7.1]

9.1 The Jordan–Schönflies homeomorphism $\overline\Omega\cong\overline{\mathbb D}$ transports cross-cut nests and prime ends to those of the disk, where each prime end corresponds to exactly one point of $\partial\mathbb D$. Thus the prime-end-to-physical-boundary map is a homeomorphism, and composing it with the extension in step 8.1 gives a homeomorphism $\overline h:\overline{\mathbb D}\to\overline\Omega$ extending the arbitrary $h$. [F1, F10, step 8.1]

10.1 For any conformal equivalence $h^*:\widehat{\mathbb C}\setminus\overline{\mathbb D}\to\Omega^*$, the map $\tau_a\circ h^*\circ I$ is a conformal equivalence $\mathbb D\to V$; repeating the cross-cut and prime-end argument of steps 5.1–9.1 for $V=\tau_a(\Omega^*)$ gives a homeomorphic extension, and conjugating back by $\tau_a^{-1}$ and $I$ gives the required extension of $h^*$. [F4, step 2.1, step 3.1, step 5.1, step 9.1]

11.1 Any two continuous extensions agree on the dense open domain of their conformal equivalence, so agree on its closure because the sphere is Hausdorff; the extension is unique. Transporting the normalized conclusions from step 1.1 proves the theorem for the original sphere curve; the exterior normalization at $\infty$ is asserted only in a coordinate where $\infty\notin\Gamma$. [F11, given, step 1.1, step 9.1, step 10.1] ∎
