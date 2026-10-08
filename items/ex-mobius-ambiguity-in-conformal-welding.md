---
id: ex-mobius-ambiguity-in-conformal-welding
kind: example
title: "The Möbius ambiguity in conformal welding"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 17
deps:
  - def-axiom-of-choice
  - def-conformal-equivalence-and-automorphism-group
  - def-conformal-welding-of-a-jordan-curve
  - def-mobius-transformation
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-round-circles-are-conformally-removable
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-mobius-group-and-projective-linear-identification
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-three-point-transitivity-mobius-transformations
  - thm-welding-uniqueness-under-removability
axiom_use: >-
  Assume AC for the Jordan-boundary and conformal-removability/uniqueness
  interfaces. The explicit Möbius weldings and algebraic normalizations use no
  further choice.
sources:
  scraped: []
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surv. Math. Sci. 2 (2015) 219-254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§5.4, Definition 5.22 and the following paragraph on the pre/post-composition action, printed pp. 247–248; Corollary 5.24 and its warning on the converse, printed pp. 248–249. Read in full."
    - title: "Christopher J. Bishop, Conformal welding and Koebe's theorem, Ann. of Math. 166 (2007) 613-656"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v166-n3-p01.pdf"
      locator: "§1, printed pp. 613–614: the normalization qualifications in the definition and the fact that the curve-to-welding map is not generally one-to-one. Read in full."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.4, printed p. 213: the two-sided Möbius action on the welding homeomorphism and the corresponding normalization of welding data. Read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice. Let $\mathbb D$ be the unit disk, $\mathbb T=\partial\mathbb D$, and $\mathbb D^*=\widehat{\mathbb C}\setminus\overline{\mathbb D}$. Let $h:\mathbb T\to\mathbb T$ be an orientation-preserving Möbius circle homeomorphism, and write $H$ for its Möbius extension to the sphere. Then $H$ preserves $\mathbb D$ and $\mathbb D^*$. With $f=\mathrm{id}_{\mathbb D}$ and $g=H|_{\mathbb D^*}$, the round circle is a welding curve for $h$. For example, $h(\zeta)=(\zeta-a)/(1-\overline a\zeta)$ for $a\in\mathbb D$ is the boundary map of a disk automorphism and is welded by the round circle.

For a fixed $h$, simultaneous postcomposition of both parameter maps by a Möbius transformation leaves the welding map unchanged and carries the welding curve to its Möbius image. In particular, any two weldings of $h$ with the round circle as curve differ by a common Möbius postcomposition.

Every welding curve for $h$ is a Möbius image of $\mathbb T$. Fixing the images of three distinct boundary points removes the common Möbius ambiguity and gives a unique normalized welding.

## Facts & Assumptions

**Given:** AC, the unit disk, its exterior, and an orientation-preserving Möbius homeomorphism $h$ of the boundary circle.

[F1] In the library convention, a welding is a triple of complementary Jordan-domain parameter maps with boundary homeomorphisms, and its circle map is $h=(\overline f|_{\mathbb T})^{-1}\circ(\overline g|_{\mathbb T})$ ([[def-conformal-welding-of-a-jordan-curve]]). The disk has counterclockwise positive boundary orientation and its exterior has clockwise positive boundary orientation (the same definition's orientation convention).

[F2] The biholomorphic self-maps of $\mathbb D$ form $\operatorname{Aut}(\mathbb D)$; each is a rotated Blaschke factor, hence extends to a Möbius transformation preserving $\mathbb D$ and $\mathbb T$. Since a Möbius map is a sphere homeomorphism, it then preserves the other complementary component $\mathbb D^*$ ([[def-conformal-equivalence-and-automorphism-group]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-disc-automorphisms-are-rotated-blaschke-factors]], [[def-mobius-transformation]]).

[F3] A Möbius transformation is biholomorphic in the sphere charts and preserves the sphere orientation ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F4] The round circle $\mathbb T$ is globally conformally removable ([[lem-round-circles-are-conformally-removable]]).

[F5] If two conformal weldings have the same circle map and the first curve is globally conformally removable, a Möbius transformation postcomposes both parameter maps and carries the first curve to the second ([[thm-welding-uniqueness-under-removability]], part (a)).

[F6] A Möbius transformation is determined by its values at three distinct sphere points ([[thm-three-point-transitivity-mobius-transformations]]).

[F7] Möbius transformations are closed under composition and inverse ([[thm-mobius-group-and-projective-linear-identification]]).

[F8] AC is the axiom assumed by the boundary and removability interfaces used in the welding definition and supplier results ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** construct the round welding directly, then use removability to identify the only remaining Möbius freedom.

1.1 The Möbius extension $H$ carries $\mathbb T$ onto itself, so it permutes the two complementary components $\mathbb D$ and $\mathbb D^*$. If $H(\mathbb D)=\mathbb D^*$, its orientation-preserving sphere map carries the counterclockwise boundary orientation of $\mathbb D$ to the clockwise boundary orientation induced by $\mathbb D^*$; then $h=H|_{\mathbb T}$ would reverse the circle orientation. Since $h$ is orientation-preserving, $H(\mathbb D)=\mathbb D$ and $H(\mathbb D^*)=\mathbb D^*$. [F1, F3, given]

1.2 For any Möbius map $M$, postcomposition gives $(M\circ f)^{-1}\circ(M\circ g)=f^{-1}\circ M^{-1}\circ M\circ g=f^{-1}\circ g$; the welding map is unchanged while the curve becomes $M(\Gamma)$. Closure and inversion in [F7] make this composition calculation valid in the Möbius group. [F1, F7, algebra]

1.3 Let $(\mathbb T,f_1,g_1)$ and $(\mathbb T,f_2,g_2)$ weld the same $h$. The first curve is globally removable by [F4], so [F5] gives one Möbius map $M$ with $f_2=M\circ f_1$ and $g_2=M\circ g_1$. Since both curves are $\mathbb T$, $M(\mathbb T)=\mathbb T$. This proves the stated ambiguity for weldings with the round curve fixed. [F4, F5, given]

2.1 The maps $f=\mathrm{id}_{\mathbb D}$ and $g=H|_{\mathbb D^*}$ are conformal bijections of the two complementary components and extend continuously to $\mathbb T$. Therefore [F1] gives $f^{-1}\circ g|_{\mathbb T}=H|_{\mathbb T}=h$. In particular, for the displayed Blaschke map, its disk automorphism extension restricted to $\mathbb D^*$ is the required exterior parameter map. [F1, F2, step 1.1]

3.1 Take any welding $(\Gamma',f',g')$ of $h$. Compare it by [F5] with the round welding $(\mathbb T,\mathrm{id}_{\mathbb D},H|_{\mathbb D^*})$ from step 2.1, using $\mathbb T$ first. Then $\Gamma'=M(\mathbb T)$ and both parameter maps are postcomposed by $M$. If two such weldings have the same images of three distinct boundary points under their first parameter map, their relative Möbius map fixes those three distinct points; [F6] forces it to be the identity. Hence the normalized maps and curve are unique. The inherited AC premise is recorded in [F8]. [F5, F6, F8, step 2.1]

4.1 Write $M(z)=(az+b)/(cz+d)$ with $ad-bc\ne0$. For $w=M(z)$, the condition $|z|=1$ becomes $|dw-b|=|a-cw|$, which is a nondegenerate circle equation or line equation in the finite plane; the line case includes $\infty$ on the sphere. Therefore every curve $\Gamma'=M(\mathbb T)$ is a generalized round circle, proving the Statement. [F3, step 3.1, algebra] ∎
