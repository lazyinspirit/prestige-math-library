---
id: thm-quasiconformal-welding-existence
kind: theorem
title: Every quasisymmetric circle homeomorphism is a conformal welding
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 13
deps:
  - def-axiom-of-choice
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-conformal-welding-of-a-jordan-curve
  - def-countable-choice
  - def-measurable-beltrami-coefficient
  - def-mobius-transformation
  - def-quasisymmetric-circle-homeomorphism
  - def-quasicircle
  - def-riemann-sphere-holomorphic-charts
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-weak-solution-beltrami-equation
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - thm-beurling-ahlfors-extension
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-composition-and-inverse-quasiconformal
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-measurable-riemann-mapping-sphere
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-one-quasiconformal-is-conformal
axiom_use: >-
  Assume AC. It is used by the Beurling–Ahlfors extension, the measurable
  Riemann mapping theorem, the analytic quasiconformal composition and
  coefficient interfaces, and smooth-circle gluing. Countable Choice is
  included in the measure interfaces for those suppliers; AC implies it by
  [[thm-choice-implies-dependent-implies-countable-choice]].
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.4, Theorem 15.23 and proof, printed pp. 212–214, equations (15.3)–(15.7): Ahlfors–Beurling extension, measurable conformal structure, MRMT uniformization, independence from the extension, two-sided Möbius action, and recovery of the welding maps. The source uses the inverse boundary convention to this library; the item mirrors the coefficient construction to match [[def-conformal-welding-of-a-jordan-curve]]. The source's broader uniqueness argument for arbitrary weldings is not used. Read in full."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $h:\mathbb S^1\to\mathbb S^1$ be an orientation-preserving $L$-quasisymmetric homeomorphism ([[def-quasisymmetric-circle-homeomorphism]]).

(a) There is a conformal welding $(\Gamma_h,f,g)$ of $h$ in the convention of [[def-conformal-welding-of-a-jordan-curve]]. Its welding curve $\Gamma_h$ is a $K(L)$-quasicircle ([[def-quasicircle]]).

(b) In the construction below, the curve is independent of the chosen quasiconformal extension of $h$ to $\overline{\mathbb D}$: for any two such extensions, the corresponding measurable Riemann mapping solutions can be chosen so that their restrictions to $\mathbb S^1$ agree. The construction is invariant, up to the postcomposition ambiguity of the uniformizing map, under the two-sided $\operatorname{Aut}(\mathbb D)$ action on $h$. Thus the curve is determined up to postcomposition by a Möbius transformation.

This asserts existence and independence for the measurable-structure construction. It does not assert uniqueness of the welding curve among all possible weldings of $h$; that stronger statement requires an additional removability hypothesis.

## Facts & Assumptions

**Given:** AC, an orientation-preserving $L$-quasisymmetric circle homeomorphism $h$, and the standard disk $\mathbb D$ and exterior disk $\mathbb D^*=\widehat{\mathbb C}\setminus\overline{\mathbb D}$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F1] The Beurling–Ahlfors extension theorem supplies an orientation-preserving $K_0(L)$-quasiconformal sphere homeomorphism $E$ with $E(\mathbb D)=\mathbb D$, $E(\mathbb S^1)=\mathbb S^1$, and $E|_{\mathbb S^1}=h$ ([[thm-beurling-ahlfors-extension]]). Its restriction to $\overline{\mathbb D}$ is a homeomorphic disk extension.

[F2] A quasiconformal map has a measurable Beltrami coefficient with essential norm at most $(K-1)/(K+1)$; sphere coefficients are interpreted in the holomorphic charts, with the coefficient transformation law of [[def-measurable-beltrami-coefficient]] and [[def-riemann-sphere-holomorphic-charts]].

[F3] Every measurable sphere Beltrami coefficient of norm less than $1$ has an orientation-preserving quasiconformal solution, that is a weak solution in the sense of [[def-weak-solution-beltrami-equation]], with that coefficient. Its maximal dilatation is the coefficient dilatation, and any two solutions differ by postcomposition with a Möbius map ([[thm-measurable-riemann-mapping-sphere]]).

[F4] If an orientation-preserving quasiconformal map has zero Beltrami coefficient on an open set, it is conformal there: zero coefficient gives local $1$-quasiconformality, and the $1$-quasiconformal theorem gives conformality in each holomorphic chart ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[thm-one-quasiconformal-is-conformal]]).

[F5] The Beltrami composition formula implies that if two quasiconformal maps have the same coefficient on their common source domain, their composition with one inverse has zero coefficient and is conformal. Precomposition by a conformal map pulls back the coefficient; postcomposition by a conformal map leaves it unchanged ([[thm-composition-and-inverse-quasiconformal]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F6] A continuous sphere homeomorphism that is quasiconformal on both sides of a round circle is quasiconformal on the whole sphere, with the same bound ([[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F7] Every automorphism of $\mathbb D$ is a Möbius transformation preserving $\mathbb S^1$ and both complementary disks ([[thm-disc-automorphisms-are-rotated-blaschke-factors]], [[def-mobius-transformation]]).

## Proof

**Proof technique:** extend the boundary map to the disk, solve the Beltrami equation for its coefficient on the disk and the standard coefficient outside, then read off the two conformal maps from the uniformizing solution.

1.1 By [F1], choose a $K_0(L)$-quasiconformal homeomorphism $E:\overline{\mathbb D}\to\overline{\mathbb D}$ extending $h$. Let $\mu_E$ be its Beltrami coefficient on $\mathbb D$ and define a sphere coefficient $\mu$ by $\mu=\mu_E$ on $\mathbb D$, $\mu=0$ on $\mathbb D^*$, and $\mu=0$ on $\mathbb S^1$. The circle has area zero, so this is a measurable coefficient with $\|\mu\|_\infty\le (K_0(L)-1)/(K_0(L)+1)<1$. [F1, F2, given]

2.1 By [F3], let $H:\widehat{\mathbb C}\to\widehat{\mathbb C}$ solve the Beltrami equation for $\mu$. It is conformal on $\mathbb D^*$ by [F4]. On $\mathbb D$, $H$ and $E$ have the same Beltrami coefficient, so $H\circ E^{-1}:\mathbb D\to H(\mathbb D)$ has zero coefficient by [F5] and is conformal by [F4]. Also $K_H\le K_0(L)$. [F3, F4, F5, step 1.1, given]


3.1 Let $E'$ be another orientation-preserving quasiconformal disk extension of $h$ and put $\psi=E^{-1}\circ E'$ on $\overline{\mathbb D}$. Then $\psi|_{\mathbb S^1}=\mathrm{id}$. Paste $\psi$ on $\overline{\mathbb D}$ to the identity on $\overline{\mathbb D^*}$ to obtain a sphere homeomorphism $\Psi$; [F6] makes it quasiconformal. The map $H'=H\circ\Psi$ has coefficient $\mu_{E'}$ on $\mathbb D$ and zero on $\mathbb D^*$ by [F5], so it is a solution for the coefficient constructed from $E'$. Because $\Psi$ fixes $\mathbb S^1$, $H'(\mathbb S^1)=H(\mathbb S^1)$, proving extension independence for compatible choices of solutions. [F3, F5, F6, step 1.1, step 2.1, given]

3.2 Put $\Gamma_h=H(\mathbb S^1)$, $\Omega_0=H(\mathbb D)$, and $\Omega_1=H(\mathbb D^*)$, and define $f=H\circ E^{-1}:\mathbb D\to\Omega_0$ and $g=H|_{\mathbb D^*}:\mathbb D^*\to\Omega_1$. The sphere homeomorphism $H$ makes $\Gamma_h$ a Jordan curve with complementary components $\Omega_0,\Omega_1$; both maps are conformal by step 2.1 and extend homeomorphically to the closures by their formulas. For $t\in\mathbb S^1$, $f^{-1}(g(t))=E(H^{-1}(H(t)))=h(t)$, so $(\Gamma_h,f,g)$ is a welding in the convention of [[def-conformal-welding-of-a-jordan-curve]]. Since $H$ is $K_0(L)$-quasiconformal, $\Gamma_h$ is a $K_0(L)$-quasicircle. [F1, F3, F4, step 1.1, step 2.1, construct]

4.1 Let $A,B\in\operatorname{Aut}(\mathbb D)$ and replace $h$ by $h'=A\circ h\circ B^{-1}$. Choose $E'=A\circ E\circ B^{-1}$ and $H'=H\circ B^{-1}$, using the sphere Möbius extensions from [F7]. Postcomposition by $A$ preserves the coefficient and precomposition by $B^{-1}$ pulls it back, so $H'$ solves the coefficient for $E'$ on $\mathbb D$ and has zero coefficient on $\mathbb D^*$. Since $B^{-1}(\mathbb S^1)=\mathbb S^1$, $H'(\mathbb S^1)=H(\mathbb S^1)$. Finally, [F3] says that a different choice of uniformizing solution changes the curve only by postcomposition with a Möbius map; no uniqueness among other weldings is used. [F3, F5, F7, step 1.1, step 2.1, given] ∎
