---
id: ex-conformal-welding-of-the-round-circle
kind: example
title: "The identity welding of the round circle"
status: draft
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
  - thm-welding-uniqueness-under-removability
axiom_use: >-
  Assume AC for the Jordan-boundary and conformal-removability/uniqueness
  interfaces. The identity welding and the disk-automorphism calculations use
  no further choice.
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Conformal welding and Koebe's theorem, Ann. of Math. 166 (2007) 613-656"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v166-n3-p01.pdf"
      locator: "§1, printed pp. 613–614: the source convention h=g^{-1}∘f, the statement that a welding need not determine its curve uniquely, and the flexible-curve example. These are convention/context only; the present example verifies its explicit identity pair directly."
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surv. Math. Sci. 2 (2015) 219-254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§5.4, Definition 5.22 and the following paragraph on pre/post-composition by disk automorphisms and Möbius equivalence, printed pp. 247–248; Corollary 5.24 and its proof, printed pp. 248–249: a CH-removable welding boundary determines its Jordan domain up to Möbius transformation. Read in full."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.4, printed pp. 212–213: the connected-sum definition of welding, the two-sided disk-automorphism action, and Theorem 15.23's Möbius uniqueness for quasiconformal welding. Read in full; the library's boundary convention is stated separately."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice. Let $\mathbb D=\{z\in\mathbb C:|z|<1\}$ and $\mathbb T=\partial\mathbb D$, with $\mathbb D^*=\widehat{\mathbb C}\setminus\overline{\mathbb D}$. Set $\Gamma=\mathbb T$, $\Omega_0=\mathbb D$, $\Omega_1=\mathbb D^*$, and take $f=\mathrm{id}_{\mathbb D}$ and $g=\mathrm{id}_{\mathbb D^*}$. In the library convention $h=f^{-1}\circ g|_{\mathbb T}$, this gives $h=\mathrm{id}_{\mathbb T}$, so the identity circle homeomorphism is welded by the round circle.

More generally, for $A,B\in\operatorname{Aut}(\mathbb D)$ let $\widetilde A,\widetilde B$ be their standard Möbius extensions to the sphere, and set $f=A:\mathbb D\to\mathbb D$ and $g=\widetilde B|_{\mathbb D^*}:\mathbb D^*\to\mathbb D^*$. Then the welding is the Möbius circle homeomorphism $h=\widetilde A^{-1}\circ\widetilde B|_{\mathbb T}$, and $h=\mathrm{id}_{\mathbb T}$ if and only if $A=B$.

Every welding of $\mathrm{id}_{\mathbb T}$ has a generalized round circle as its welding curve: it is the image of $\mathbb T$ under a Möbius transformation, hence is either a Euclidean circle or a straight line together with $\infty$.

## Facts & Assumptions

**Given:** AC, the unit disc $\mathbb D$, its exterior $\mathbb D^*$, and the round boundary $\mathbb T$.

[F1] A conformal welding is a triple of complementary Jordan-domain parameter maps whose boundary extensions define $h=(\overline f|_{\mathbb T})^{-1}\circ(\overline g|_{\mathbb T})$ ([[def-conformal-welding-of-a-jordan-curve]]). This is the library convention; Bishop's source convention is its inverse.

[F2] The biholomorphic self-maps of $\mathbb D$ form $\operatorname{Aut}(\mathbb D)$; each has the form $e^{i\theta}(a-z)/(1-\overline a z)$ and therefore extends to a Möbius transformation of the sphere preserving $\mathbb D$, $\mathbb T$, and $\mathbb D^*$ ([[def-conformal-equivalence-and-automorphism-group]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-disc-automorphisms-are-rotated-blaschke-factors]], [[def-mobius-transformation]]).

[F3] The round circle $\mathbb T$ is globally conformally removable ([[lem-round-circles-are-conformally-removable]]).

[F4] If the first welding curve is globally conformally removable, any second welding of the same homeomorphism is obtained by Möbius postcomposition of both parameter maps ([[thm-welding-uniqueness-under-removability]], part (a)).

[F5] A Möbius transformation $M(z)=(az+b)/(cz+d)$ has $ad-bc\ne0$ and maps $\mathbb T$ to a generalized circle: for $w=M(z)$, the condition $|z|=1$ becomes $|dw-b|=|a-cw|$, a circle or line equation, with $\infty$ included in the line case ([[def-mobius-transformation]]).

[F6] The AC hypothesis of the welding definition and the round-circle and uniqueness suppliers is recorded by [[def-axiom-of-choice]].

## Proof

**Proof technique:** compute the boundary compositions directly, then apply conditional welding uniqueness to the removable round-circle example.

1.1 The identity maps on $\mathbb D$ and $\mathbb D^*$ are conformal bijections, and their boundary extensions are both $\mathrm{id}_{\mathbb T}$. By [F1], their welding is $\mathrm{id}_{\mathbb T}^{-1}\circ\mathrm{id}_{\mathbb T}=\mathrm{id}_{\mathbb T}$. [F1, given, algebra]

1.2 By [F2], $\widetilde A$ and $\widetilde B$ preserve $\mathbb D$ and $\mathbb D^*$, so the restrictions in the statement are conformal bijections of the two sides and extend to $\mathbb T$. Applying [F1] gives $h=\widetilde A^{-1}\circ\widetilde B|_{\mathbb T}$. Its factors preserve the orientation of $\mathbb T$, so $h$ is an orientation-preserving Möbius circle homeomorphism. [F1, F2, given]

2.1 If $A=B$, their sphere extensions agree and the formula in step 1.2 gives $h=\mathrm{id}_{\mathbb T}$. Conversely, if $h=\mathrm{id}_{\mathbb T}$, the Möbius transformation $M=\widetilde A^{-1}\circ\widetilde B$ fixes every $\zeta\in\mathbb T$. Write $M(z)=(az+b)/(cz+d)$ with $ad-bc\ne0$. Its denominator has no zero on $\mathbb T$, and each fixed point satisfies $c\zeta^2+(d-a)\zeta-b=0$. A polynomial of degree at most two that vanishes at three distinct points of $\mathbb T$ is the zero polynomial; hence $c=b=0$ and $d=a$, so $M$ is the identity. Thus $\widetilde A=\widetilde B$ and $A=B$. [F2, F5, step 1.2, algebra]

3.1 Let $(\Gamma',f',g')$ be any other welding of $\mathrm{id}_{\mathbb T}$. By step 1.1, $(\mathbb T,\mathrm{id}_{\mathbb D},\mathrm{id}_{\mathbb D^*})$ is a welding of the same homeomorphism, and [F3] makes its first curve removable. Apply [F4] with this round welding first: a Möbius transformation $M$ satisfies $f'=M\circ\mathrm{id}_{\mathbb D}$ and $g'=M\circ\mathrm{id}_{\mathbb D^*}$, so $\Gamma'=M(\mathbb T)$. By [F5], this is a generalized round circle. The inherited AC premise is recorded in [F6]. [F3, F4, F5, F6, step 1.1] ∎
