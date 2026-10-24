---
id: def-conformal-welding-of-a-jordan-curve
kind: definition
title: The welding homeomorphism of a Jordan curve
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-circle-as-real-line-mod-integers
  - def-conformal-equivalence-and-automorphism-group
  - def-mobius-transformation
  - def-quasicircle
  - def-riemann-sphere-holomorphic-charts
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-riemann-maps-of-jordan-domains-extend-homeomorphically
  - thm-jordan-brouwer-separation
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
axiom_use: The Axiom of Choice is inherited through Jordan–Brouwer separation and the Riemann-mapping/boundary-correspondence supplier. Countable Choice is included through that boundary lemma's extremal-length interfaces and follows from AC. For a fixed curve, choosing its two maps is finite choice; no further selection is used.
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Conformal welding and Koebe's theorem, Annals of Mathematics 166 (2007), 613–656"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v166-n3-p01.pdf"
      locator: "§1, printed p. 613: the disk/exterior parameterizations of bounded/unbounded components and the inverse welding convention g^{-1}∘f; read in full."
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://math.hawaii.edu/~myounsi/Removable.pdf"
      locator: "§5.4, Definition 5.20 and the following paragraph on pre/post-composition and Möbius equivalence (author PDF p. 26); read in full."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.4, printed pp. 212–214: component Riemann maps, transit map, orientation, and two-sided automorphism/Möbius actions; read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice. Let $\mathbb D=\{z\in\mathbb C:|z|<1\}$, $\mathbb T=\partial\mathbb D$, and $\mathbb D^*=\widehat{\mathbb C}\setminus\overline{\mathbb D}$. Identify $\mathbb S^1=\mathbb R/\mathbb Z$ with $\mathbb T$ by $[t]\mapsto e^{2\pi it}$ ([[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]). A Jordan curve is used in the sense of [[def-quasicircle]]; it has two complementary components with common boundary by [[thm-jordan-brouwer-separation]]. Fix an ordered pair of these components, denoted $\Omega_0,\Omega_1$.

The boundary-correspondence lemma ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]) supplies conformal equivalences $f:\mathbb D\to\Omega_0$ and $g:\mathbb D^*\to\Omega_1$ and unique homeomorphic extensions $\overline f:\overline{\mathbb D}\to\overline{\Omega_0}$ and $\overline g:\overline{\mathbb D^*}\to\overline{\Omega_1}$. Here maps between spherical domains are conformal in the holomorphic charts of the Riemann sphere ([[def-riemann-sphere-holomorphic-charts]]). Define the welding homeomorphism of $\Gamma$ for the chosen maps by
$$h_{\Gamma;f,g}:=(\overline f|_{\mathbb T})^{-1}\circ(\overline g|_{\mathbb T}):\mathbb T\to\mathbb T.$$

The map $h_{\Gamma;f,g}$ is orientation-preserving. An oriented conformal welding of an orientation-preserving homeomorphism $h:\mathbb T\to\mathbb T$ is a triple $(\Gamma,f,g)$ as above for which $h_{\Gamma;f,g}=h$. Equivalently, $\overline g|_{\mathbb T}=\overline f|_{\mathbb T}\circ h$. The convention $h=f^{-1}\circ g$ on the boundary is the inverse of the source convention $g^{-1}\circ f$.

The dependence on the parameter maps is a two-sided $\operatorname{Aut}(\mathbb D)$ action. Let $J(z)=1/z$, which maps $\mathbb D^*$ biholomorphically to $\mathbb D$. For $\alpha,\beta\in\operatorname{Aut}(\mathbb D)$, put $\beta^*:=J^{-1}\circ\beta\circ J\in\operatorname{Aut}(\mathbb D^*)$. Replacing $f$ by $f\circ\alpha$ and $g$ by $g\circ\beta^*$ changes the welding map to
$$h_{\Gamma;f\circ\alpha,g\circ\beta^*}=\alpha^{-1}|_{\mathbb T}\circ h_{\Gamma;f,g}\circ\beta^*|_{\mathbb T}.$$

Postcomposing both parameter maps with a Möbius transformation does not change the welding map: if $M$ is Möbius, the maps $M\circ f,M\circ g$ parameterize the correspondingly ordered components of $M(\Gamma)$ and $h_{M(\Gamma);M\circ f,M\circ g}=h_{\Gamma;f,g}$. No uniqueness of the welding curve is asserted here.

## Facts & Assumptions

**Given:** AC, a Jordan curve $\Gamma\subset\widehat{\mathbb C}$, an ordered pair $\Omega_0,\Omega_1$ of complementary components, and conformal equivalences from $\mathbb D$ and $\mathbb D^*$ to those components.

[F1] Jordan–Brouwer separation gives exactly two complementary components with common boundary $\Gamma$ ([[thm-jordan-brouwer-separation]]).

[F2] Each complementary component admits a conformal equivalence from $\mathbb D$; every such map extends uniquely to a homeomorphism of the closures ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]). Its exterior normalization at $\infty$ is asserted in a Möbius coordinate where $\infty\notin\Gamma$, as in the supplier's statement.

[F3] The quotient circle $\mathbb S^1=\mathbb R/\mathbb Z$ is homeomorphic to the round circle $\mathbb T$ by $[t]\mapsto e^{2\pi it}$ ([[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[F4] $J(z)=1/z$ is a Möbius biholomorphism of the sphere and maps $\mathbb D^*$ onto $\mathbb D$ ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F5] $\operatorname{Aut}(\mathbb D)$ is the group of biholomorphic self-maps of $\mathbb D$, with composition as group operation ([[def-conformal-equivalence-and-automorphism-group]]). Each such map has a boundary homeomorphism by [F2].

[F6] The positive boundary orientation is the orientation that leaves the domain on the left. The unit disk induces counterclockwise orientation on $\mathbb T$, the exterior disk induces clockwise orientation, and the two complementary components induce opposite orientations on their common Jordan boundary. This is the orientation convention used in Bishop §1 and Younsi §5.4.

## Proof

**Proof technique:** boundary correspondence, induced boundary orientations, and direct composition algebra.

1.1 By [F1], $\Gamma$ has exactly the ordered components $\Omega_0,\Omega_1$ and both have boundary $\Gamma$. By [F2], choose a conformal equivalence $f:\mathbb D\to\Omega_0$ and its homeomorphic closure extension. For $\Omega_1$, choose a conformal equivalence $q:\mathbb D\to\Omega_1$ and set $g=q\circ J$ on $\mathbb D^*$; [F4] makes $g$ a conformal equivalence, and its closure extension is $\overline q\circ J$. Thus $\overline f|_{\mathbb T}$ and $\overline g|_{\mathbb T}$ are homeomorphisms onto the same curve $\Gamma$, so the displayed composition is well-defined and is a circle homeomorphism under the identification in [F3]. [F1, F2, F3, F4, given]

2.1 The positive boundary orientation on $\mathbb T=\partial\mathbb D$ is counterclockwise, whereas on $\partial\mathbb D^*$ it is clockwise. By [F6], $f$ and $g$ carry these boundary orientations to the induced orientations of $\Omega_0$ and $\Omega_1$ on $\Gamma$; the latter orientations are opposite. Thus both boundary maps, when read from counterclockwise $\mathbb T$, traverse $\Gamma$ in the same direction, so $h_{\Gamma;f,g}$ is orientation-preserving. Reversing the composition gives Bishop’s convention $g^{-1}\circ f=h_{\Gamma;f,g}^{-1}$. [F1, F2, F3, F6, step 1.1, algebra]

2.2 For $\alpha,\beta\in\operatorname{Aut}(\mathbb D)$, the map $\beta^*=J^{-1}\circ\beta\circ J$ is a conformal self-map of $\mathbb D^*$ and extends to $\mathbb T$ because $\beta$ extends to $\overline{\mathbb D}$ by [F2]. On the boundary, $(\overline{f\circ\alpha}|_{\mathbb T})^{-1}\circ\overline{g\circ\beta^*}|_{\mathbb T}=\alpha^{-1}|_{\mathbb T}\circ(\overline f|_{\mathbb T})^{-1}\circ\overline g|_{\mathbb T}\circ\beta^*|_{\mathbb T}$, which is exactly the stated two-sided action. [F2, F4, F5, step 1.1, algebra]

3.1 A Möbius transformation $M$ is biholomorphic on the sphere by [F4], so $M\circ f$ and $M\circ g$ are conformal equivalences onto the correspondingly ordered components of $M(\Gamma)$. Their welding map is $(\overline{M\circ f}|_{\mathbb T})^{-1}\circ\overline{M\circ g}|_{\mathbb T}=(\overline f|_{\mathbb T})^{-1}\circ M^{-1}\circ M\circ(\overline g|_{\mathbb T})=h_{\Gamma;f,g}$. [F2, F4, step 1.1, algebra] ∎
