---
id: thm-quasicircle-characterizations
kind: theorem
title: Bounded turning, quasiconformal images of the circle, and quasiconformal reflections
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 13
deps:
  - def-quasisymmetric-circle-homeomorphism
  - thm-beurling-ahlfors-extension
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - def-quasicircle
  - thm-jordan-brouwer-separation
  - lem-riemann-maps-of-jordan-domains-extend-homeomorphically
  - def-acl-sobolev-quasiconformal-homeomorphism
  - thm-composition-and-inverse-quasiconformal
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - def-wirtinger-derivatives
  - thm-wirtinger-chain-rule-for-real-differentiable-maps
  - def-extremal-length-and-curve-family-modulus
  - thm-extremal-length-conformal-invariance-and-monotonicity
  - thm-modulus-rectangle-and-annulus
  - lem-complex-conjugation-and-modulus-laws
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
axiom_use: Assume AC for the ACL quasiconformal convention, the Jordan-boundary maps, Beurling–Ahlfors extension, composition and smooth-curve gluing. Countable Choice is used by the extremal-length and gluing interfaces and follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]].
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Quasiconformal reflections, Acta Mathematica 109 (1963), 291–301"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=mat&option_lang=eng&paperid=305&what=fullt"
      locator: "Part I §§2–5, printed English Acta pp. 294–297 (Mathnet translation pp. 105–108): Lemmas 1–2 and Theorem 1 characterize curves admitting a quasiconformal reflection by the three-point/cross-ratio condition; §5 proves the boundary correspondence is quasisymmetric by extremal-distance estimates and invokes the Beurling–Ahlfors extension. The source reflection need not be an involution; this item constructs an involution separately from a quasiconformal circle image."
    - title: "Frederick J. Gehring, Characterizations of quasidisks, Banach Center Publications 48 (1999), 11–41"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S25/Characterizations_of_quasidisks.pdf"
      locator: "§II.B, printed pp. 17–18, Lemma 6 and Corollary 8: the two-point inequality and alternating four-point reversed triangle inequality are equivalent, with constants b=2M(M+1) and M=2b."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.3.1, Definition 15.9, printed pp. 209–210: bounded-turning definition of a quasicircle; used for the intrinsic condition and source terminology."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Gamma\subset\widehat{\mathbb C}$ be a Jordan curve. For clause (ii), choose a Möbius coordinate $\chi$ with $\infty\notin\chi(\Gamma)$ and measure Euclidean distances and diameters on $\chi(\Gamma)$. The equivalent four-point formulation below is Möbius invariant, so the criterion applies to curves in any sphere position.

(i) $\Gamma$ is a $K$-quasicircle: it is the image of $\mathbb S^1$ under a $K$-quasiconformal sphere homeomorphism ([[def-quasicircle]]).

(ii) $\Gamma$ has **bounded turning** with constant $M$: for every $x,y\in\chi(\Gamma)$, one of the two arcs $\delta\subset\chi(\Gamma)$ with endpoints $x,y$ satisfies $\operatorname{diam}\delta\le M|x-y|$. Equivalently, if $\gamma_1,\gamma_2$ are the components of $\chi(\Gamma)\setminus\{x,y\}$, then $\min_j\operatorname{diam}\gamma_j\le M|x-y|$. Equivalently, for every four distinct points in alternating order, so that $z_1,z_3$ separate $z_2,z_4$ on the curve,
$$|z_1-z_2||z_3-z_4|+|z_2-z_3||z_4-z_1|\le b|z_1-z_3||z_2-z_4|.$$
The constants satisfy the explicit implications $b=2M(M+1)$ and $M=2b$.

(iii) $\Gamma$ admits a **quasiconformal reflection**: an orientation-reversing quasiconformal involution $\sigma:\widehat{\mathbb C}\to\widehat{\mathbb C}$ with $\sigma^2=\mathrm{id}$, fixed-point set exactly $\Gamma$, and which interchanges the two complementary components.

The three conditions are equivalent with quantitative control: each of $K$, $M$, and the reflection dilatation can be bounded by a function of either of the others. No closed formula for these general functions is asserted.

## Facts & Assumptions

**Given:** AC, a Jordan curve $\Gamma\subset\widehat{\mathbb C}$, and the bounded-turning and quasiconformal conventions above.

[F1] For a Jordan curve in a finite chart, the two-point bounded-turning condition and the alternating four-point reversed triangle inequality are equivalent. If the two-point constant is $M$, the reversed-triangle constant can be $b=2M(M+1)$; conversely $M=2b$ suffices ([[def-quasicircle]], Gehring, §II.B Lemma 6).

[F2] Ahlfors's reflection theorem: for a Jordan curve through $\infty$, a sense-reversing quasiconformal homeomorphism fixing the curve pointwise and interchanging its sides exists exactly when the line three-point condition holds; in a finite chart the equivalent condition is the alternating four-point cross-ratio inequality. The full proof reduces an existing reflection to one with controlled length distortion and proves the converse by bounding extremal distances of complementary arcs; its boundary correspondence then satisfies the Beurling–Ahlfors adjacent-interval condition (Ahlfors, Part I §§2–5, Theorem 1).

[F3] Conformal maps of the two Jordan components extend homeomorphically to their closures ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]).

[F4] Every increasing quasisymmetric homeomorphism of $\mathbb R$ has a quasiconformal extension of the sphere preserving $\mathbb R\cup\{\infty\}$ and fixing $\infty$ ([[thm-beurling-ahlfors-extension]]). Because its boundary restriction is increasing, an orientation-preserving extension maps each half-plane to itself; swapping them would reverse the induced boundary orientation.

[F5] A continuous sphere homeomorphism that is quasiconformal on both sides of a straight line or round circle is quasiconformal on the whole sphere, with the same bound ([[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F6] Orientation-preserving quasiconformal maps and their inverses are closed under composition, with dilatations multiplying ([[thm-composition-and-inverse-quasiconformal]]). In holomorphic charts, conformal and anticonformal coordinate changes multiply both singular values by the same factor, so they preserve the dilatation ratio ([[def-wirtinger-derivatives]], [[thm-wirtinger-chain-rule-for-real-differentiable-maps]]); Möbius maps are conformal on the sphere ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F7] The map $\tau(z)=1/\overline z$ is an orientation-reversing anticonformal involution of the sphere, fixes $\mathbb S^1$ pointwise, and interchanges $\mathbb D$ with its exterior ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[lem-complex-conjugation-and-modulus-laws]]).

[F8] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F9] Extremal length is conformally invariant; the crosscut family of a rectangle and the connecting family of a round annulus have finite positive values, and a round annulus $A(r,R)$ has connecting extremal length $(2\pi)^{-1}\log(R/r)$ ([[def-extremal-length-and-curve-family-modulus]], [[thm-extremal-length-conformal-invariance-and-monotonicity]], [[thm-modulus-rectangle-and-annulus]]).

## Proof

**Proof technique:** use the cross-ratio form of bounded turning, Ahlfors's extremal-distance criterion for reflection, the line Beurling–Ahlfors extension, and gluing across a smooth source circle.

1.1 The two-point and four-point formulations in (ii) are the Gehring equivalence in [F1]. For the forward constant, order the four points so $|z_1-z_3|\le|z_2-z_4|$ and label the two arcs from $z_1$ to $z_3$ so the arc through $z_2$ has smaller diameter. Then $|z_1-z_2|,|z_2-z_3|\le M|z_1-z_3|$, while the triangle inequality gives $|z_3-z_4|,|z_4-z_1|\le(M+1)|z_2-z_4|$; adding the two products gives $b=2M(M+1)$. Conversely, if both arcs from $z_1$ to $z_3$ had diameter greater than $2b|z_1-z_3|$, choose $z_2,z_4$ on the two arcs with $|z_1-z_2|,|z_1-z_4|>b|z_1-z_3|$. The two products on the left would sum to more than $b|z_1-z_3|(|z_2-z_3|+|z_3-z_4|)$, at least the right side by the triangle inequality. [F1, given, algebra]

1.2 Suppose (i), and take a $K$-quasiconformal sphere homeomorphism $W$ with $W(\mathbb S^1)=\Gamma$. Then $\sigma=W\circ\tau\circ W^{-1}$ is an orientation-reversing quasiconformal involution. Its fixed set is exactly $W(\mathbb S^1)=\Gamma$, and it interchanges the complementary components. Its dilatation is bounded in terms of $K$ by [F6]. Ahlfors's necessity direction in [F2], followed by [F1], gives (ii) with a constant depending only on $K$. [F1, F2, F6, F7, given]

2.1 Assume (ii). The alternating four-point condition in step 1.1 is Möbius invariant, so choose a Möbius map $T$ sending one point of $\chi(\Gamma)$ to $\infty$ and put $\Lambda=T(\chi(\Gamma))$. Let $\Omega_+,\Omega_-$ be its complementary components, and choose boundary-extended conformal maps $f:\mathbb H\to\Omega_+$ and $g:\mathbb H^-\to\Omega_-$, normalized compatibly at $0,1,\infty$ so that $h=g^{-1}\circ f|_{\mathbb R}$ is increasing. In Ahlfors's sufficiency proof, the boundary arcs $\alpha,\alpha',\beta,\beta'$ cut off by three consecutive points have reciprocal extremal distances for complementary arc pairs in each side. If one such distance is $1$, the cross-ratio bound gives the chord-ratio estimates (7)–(8); those estimates separate the arcs in the opposite side, and the disk-supported density in §5 bounds its extremal distance above and below by positive constants depending only on $b$. Therefore the corresponding adjacent intervals under $h$ have comparable image lengths, so $h$ is $L(b)$-quasisymmetric (Ahlfors, Part I §5, equations (7)–(8) and the disk-supported metric estimate). These extremal-length interfaces use Countable Choice, which follows from AC by [F8]. [F1, F2, F3, F8, F9, given]

3.1 Extend $h$ by [F4] to a quasiconformal sphere map $H$ preserving both half-planes. Define $W=f$ on $\overline{\mathbb H}$ and $W=g\circ H$ on $\overline{\mathbb H^-}$. On the common boundary, $g(H(t))=g(h(t))=f(t)$; the boundary extensions in [F3] make the pasted map a sphere homeomorphism. It is quasiconformal off $\mathbb R\cup\{\infty\}$, hence globally quasiconformal by [F5], and maps that generalized line onto $\Lambda$. If $C$ is a Möbius map from $\mathbb S^1$ onto $\mathbb R\cup\{\infty\}$, then $\chi^{-1}\circ T^{-1}\circ W\circ C$ is a quasiconformal sphere homeomorphism carrying $\mathbb S^1$ onto $\Gamma$. This proves (i) from (ii). [F3, F4, F5, F6, step 2.1, construct]

4.1 Suppose (iii). Let $\Omega$ be either complementary component and take a conformal map $f:\mathbb D\to\Omega$ with its homeomorphic boundary extension from [F3]. Define $W=f$ on $\overline{\mathbb D}$ and $W=\sigma\circ f\circ\tau$ on the closed exterior disc. The second formula maps the exterior disc onto the other component, is quasiconformal there, and agrees with $f$ on $\mathbb S^1$ because $\sigma$ fixes $\Gamma$ pointwise. Hence $W$ is a sphere homeomorphism; [F5] makes it quasiconformal globally and $W(\mathbb S^1)=\Gamma$. This proves (i) from (iii), completing the equivalence. [F3, F5, F6, F7, given] ∎
## Remarks

Ahlfors's 1963 source defines a quasiconformal reflection as a sense-reversing quasiconformal map fixing the curve and interchanging sides; it does not require that map itself to be an involution. The stronger involutive condition in (iii) is proved directly in step 3.1 from the quasicircle map.
