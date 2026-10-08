---
id: cex-every-compact-set-is-conformally-removable
kind: counterexample
title: Not every compact set is conformally removable
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-conformal-removable-compact-set
  - def-countable-choice
  - def-homeomorphism-and-open-maps
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-mobius-transformation
  - def-riemann-sphere-holomorphic-charts
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-positive-area-compact-sets-are-not-conformally-removable
  - lem-round-circles-are-conformally-removable
  - rem-complex-plane-euclidean-dictionary
  - thm-borel-sets-are-lebesgue-measurable
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-heine-borel-rn
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
axiom_use: >-
  Assume AC for the round-circle and positive-area removability suppliers.
  Countable Choice is used by the Lebesgue product and measure interfaces for
  the planar fat-Cantor example; it follows from AC by
  [[thm-choice-implies-dependent-implies-countable-choice]]. The explicit
  radial counterexample is choice free.
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §16.1–16.2, printed p. 215: Definition 16.1, the statement that smooth Jordan curves are classically removable, and Proposition 16.4 on positive-area removability. Lyubich's Definition 16.1 is neighborhood-local; this item uses the separately stated global CH definition and proves its disk witness directly. Read in full."
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§4.2, Proposition 4.4 and Remark 4.5, printed p. 235: positive-area compact sets are not CH-removable by the measurable Riemann mapping theorem; §5.2, Theorem 5.17, printed pp. 244–245: Bishop's nonremovable zero-area Jordan-curve theorem and the survey's proof sketch. The proof details are checked against Bishop's original article below. Read in full."
    - title: "Christopher J. Bishop, Some homeomorphisms of the sphere conformal off a curve, Annales Academiæ Scientiarum Fennicæ Mathematica 19 (1994), 323–338"
      url: "https://www.acadsci.fi/mathematica/Vol19/bishop.pdf"
      locator: "Theorem 2, printed p. 324, and its construction in §§3–4, printed pp. 330–334: for each gauge h(t)=o(t), the construction yields a non-Möbius sphere homeomorphism conformal off a Jordan curve Γ with Λ_h(Γ)=0. Taking h(t)=t² gives a nonremovable Jordan curve of zero area. The paper's auxiliary conformal-filling step is described briefly as an easy modification; this result is a nonessential comparison and is not used in the disk proof. Read in full."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The closed unit disk $\overline{\mathbb D}:=\{z\in\mathbb C:|z|\le1\}$ is a compact set that is not globally conformally removable ([[def-conformal-removable-compact-set]]). A witness is the sphere map
$$F(z)=\begin{cases}z(1+|z|)/2,&|z|\le1,\\z,&|z|\ge1,\end{cases}\qquad F(\infty)=\infty.$$
It fixes $\mathbb S^1:=\{z:|z|=1\}$ pointwise and is conformal on $\widehat{\mathbb C}\setminus\overline{\mathbb D}$, while it is not Möbius. The boundary $\mathbb S^1$ is conformally removable ([[lem-round-circles-are-conformally-removable]]).

More generally, every compact sphere set with positive planar area in the finite chart is not conformally removable ([[lem-positive-area-compact-sets-are-not-conformally-removable]]). Such examples need not have interior: the product of two positive-length Smith–Volterra–Cantor sets is a compact positive-area set with empty interior.

There are also nonremovable Jordan curves of zero area: Bishop's flexible-curve theorem yields one with zero two-dimensional Hausdorff measure and hence zero planar area. This comparison is not needed for the explicit disk witness.

## Facts & Assumptions

**Given:** AC, the unit disk $\mathbb D$ and sphere $\widehat{\mathbb C}$, and the global removability definition.

[F1] In $\mathbb R^2$, a closed bounded set is compact; in particular $\overline{\mathbb D}$ and every closed subset of $[0,1]^2$ are compact ([[thm-heine-borel-rn]]).

[F2] The positive-area obstruction applies to every compact $K\subseteq\widehat{\mathbb C}$ with $\lambda_2(K\cap\mathbb C)>0$ ([[lem-positive-area-compact-sets-are-not-conformally-removable]]).

[F3] The round circle $\mathbb S^1$ is globally conformally removable ([[lem-round-circles-are-conformally-removable]]).

[F4] A Möbius transformation fixing three distinct finite points is the identity: if $M(z)=(az+b)/(cz+d)$ fixes $z_1,z_2,z_3$, then each is a root of $cz^2+(d-a)z-b$, a polynomial of degree at most two; hence $c=b=0$ and $d=a$, so $M(z)=z$ ([[def-mobius-transformation]]).

[F5] Under AC, Countable Choice holds; Lebesgue measure is countably additive, boxes have the product-of-side-lengths measure, Lebesgue measure on $\mathbb R$ is sigma-finite, Borel sets are Lebesgue measurable, the product measure has the rectangle formula, and its value agrees with planar Lebesgue measure on Borel sets ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-borel-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F6] A continuous bijection with continuous inverse is a homeomorphism ([[def-homeomorphism-and-open-maps]]). The identity map is conformal in the finite and infinity charts of the sphere ([[def-riemann-sphere-holomorphic-charts]]).

## Proof

**Proof technique:** construct a sphere homeomorphism by a strictly increasing radial change inside the disk, and use the positive-area obstruction for the empty-interior example.

1.1 By [F1], $\overline{\mathbb D}$ is compact. [F1, given]

1.2 By [F3], its boundary $\mathbb S^1$ is globally conformally removable. [F3, given]

1.3 By [F2], every compact sphere set with positive area in its finite chart is globally conformally nonremovable. [F2, given]

1.4 For $0\le r\le1$, put $\rho(r)=r(1+r)/2$. This function is continuous and strictly increasing from $[0,1]$ onto $[0,1]$, with inverse $q(s)=(\sqrt{1+8s}-1)/2$. The map $F$ in the Statement sends each radius $r\le1$ to $\rho(r)$ with the same argument and is the identity for $r\ge1$; the inside and outside formulas agree at $r=1$. Its inverse uses $q$ on radii in $[0,1]$ and is the identity outside. Both maps are continuous at $0$, at radius $1$, and at $\infty$, so [F6] makes $F$ a sphere homeomorphism. [F6, construct, algebra]

2.1 The map $F$ fixes every point of $\mathbb S^1$, is the identity and hence conformal on $\widehat{\mathbb C}\setminus\overline{\mathbb D}$ by [F6], but $F(1/2)=3/8$. By [F4], a Möbius map fixing the three distinct points $1,-1,i$ would be the identity, so $F$ is not Möbius. The compactness in step 1.1 and the global definition therefore show that $\overline{\mathbb D}$ is not conformally removable. [F4, F6, step 1.1, step 1.4, given]

3.1 Construct $C\subseteq[0,1]$ by starting with $[0,1]$ and, at stage $n\ge1$, removing the middle open interval of length $4^{-n}$ from each of the $2^{n-1}$ remaining intervals. The preceding intervals have length $2^{-n}+2^{-2n+1}>4^{-n}$, so each removal fits. The total length removed at stage $n$ is $2^{n-1}4^{-n}=2^{-n-1}$, and the sum over all stages is $1/2$. The remaining intervals at stage $n$ have length $2^{-n-1}+2^{-2n-1}$, which tends to zero; hence the intersection $C$ is compact, has empty interior, and has Lebesgue measure $1/2$. Put $K=C\times C\subseteq\mathbb R^2\cong\mathbb C$. It is closed and bounded, hence compact by [F1], and has empty interior because its first-coordinate projection is contained in the nowhere-dense set $C$. Since $K$ is Borel, the product rectangle formula and the agreement of product and Euclidean Lebesgue measure on Borel sets give $\lambda_2(K)=\lambda_1(C)^2=1/4$. By step 1.3, $K$ is not conformally removable. [F1, F5, step 1.3, construct] ∎

## Remarks

Bishop's Theorem 2 gives a flexible nonremovable Jordan curve with $\Lambda_h(\Gamma)=0$ for every gauge $h(t)=o(t)$. Taking $h(t)=t^2$ yields a zero-area nonremovable Jordan curve. The original construction and its non-Möbius conformal-off-$\Gamma$ map are described in Bishop's §§3–4; Younsi's Theorem 5.17 is a survey statement and proof sketch of this result.
