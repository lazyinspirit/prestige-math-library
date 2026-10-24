---
id: ex-abbv-positive-dimensional-fixed-components
kind: example
title: "ABBV with Positive-Dimensional Fixed Components"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
axiom_strength: "ZF + AC"
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-abbv-equivariant-integration-conventions
  - thm-atiyah-bott-berline-vergne-integration-formula
  - lem-abbv-borel-fiber-integration-construction
  - prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual
dependency_roles:
  prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual: mathematical-premise
  lem-abbv-borel-fiber-integration-construction: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-abbv-equivariant-integration-conventions: mathematical-premise
  thm-atiyah-bott-berline-vergne-integration-formula: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Michael F. Atiyah and Raoul Bott, The Moment Map and Equivariant
        Cohomology"
      url: "https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbo\
        tt_moment.pdf"
    - title: "Matvei Libine, Lecture Notes on Equivariant Cohomology"
      url: "https://arxiv.org/pdf/0709.3615"
    - title: "Kentaro Hori et al., Mirror Symmetry"
      url: "https://www.claymath.org/library/monographs/cmim-1.pdf"
      locator: "Chapter 4, §4.3, printed pp. 62–64 (PDF pp. 82–84), fixed-component
        formula context; the product example is derived locally."
verification:
  precheck: pending
---

## Example

Work in $\mathrm{ZF}+\mathrm{AC}$. Let $T=S^1=\mathbb R/\mathbb Z$ act on complex-oriented $M=\mathbb{CP}^1\times\mathbb{CP}^1$ by $\lambda([z_0:z_1],[w_0:w_1])=([z_0:\lambda z_1],[w_0:w_1])$. Let $\eta\in H^2(\mathbb{CP}^1;\mathbb R)$ be the positive generator with integral $1$, let $x_1$ be the pullback of the equivariant Euler class of the dual tautological line from the first factor, and set $\alpha=x_1\smile\operatorname{pr}_2^*\eta$. The fixed components are $F_0=\{[1:0]\}\times\mathbb{CP}^1$ and $F_\infty=\{[0:1]\}\times\mathbb{CP}^1$, with normal weights $+1$ and $-1$. The component formula gives a zero contribution from $F_0$ and $\int_{\mathbb{CP}^1}\eta=1$ from $F_\infty$, matching $\int_M\alpha=1$.

## Example references

[Atiyah and Bott, §3, fixed-component formula (3.8)](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Libine, §7.7, Theorem 71, PDF pp. 42–44](https://arxiv.org/pdf/0709.3615)

## Facts & Assumptions

**Given:** AC, the product action, product complex orientation, normalized real class $\eta$, and the class $\alpha$ defined in the Example.

[A1] Assume AC, carried through the real Borel coefficient-ring convention. [[def-axiom-of-choice]]

[F1] [[def-abbv-equivariant-integration-conventions]]: equivariant integration is real Borel fiber integration, a character of weight $m$ has Euler class $m u$, and the product orientation fixes the component-integration signs. The trivial-action tensor formula and iterated product integration are proved by [[lem-abbv-borel-fiber-integration-construction]].

[F2] [[thm-atiyah-bott-berline-vergne-integration-formula]]: each fixed-component contribution is the integral of the restricted real Borel class divided by the equivariant normal Euler class.

[F3] For an oriented bundle of rank equal to the dimension of the closed oriented base, the Euler pairing is the signed transverse zero count. Its integral version passes to real coefficients by Thom normalization and fundamental-class evaluation. [[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]]

## Verification

1.1 The first-factor action fixes exactly $p_0=[1:0]$ and $p_\infty=[0:1]$, while it fixes every point of the second factor. Thus $M^T=F_0\sqcup F_\infty$, with each component a copy of $\mathbb{CP}^1$. The normal bundle is the tangent line of the first factor at its fixed point; in the coordinates $z_1/z_0$ and $z_0/z_1$ its weights are $+1$ on $F_0$ and $-1$ on $F_\infty$. [given, F1, construct]

2.1 The normal complex line is the first factor and the fixed-component tangent space is the second. Moving the real two-dimensional first-factor orientation past the real two-dimensional second-factor orientation has sign $(-1)^{2\cdot2}=+1$, so the induced component orientations agree with the product orientations. [given, F1, step 1.1, algebra]

3.1 The dual tautological fiber at $p_0$ has weight $0$ and at $p_\infty$ has weight $-1$, so the first-factor class restricts to $0$ and $-u$. Thus the contribution from $F_0$ is $0/u=0$; on $F_\infty$, the restricted class is $(-u)\eta$ and the normal Euler class is $-u$, leaving $\eta$, whose integral is $1$. The fixed-component sum is therefore $1$. [given, A1, F1, F2, step 1.1, step 2.1]

4.1 Product fiber integration factors over the two compact oriented factors. On the first $\mathbb{CP}^1$, the section of $\mathcal O(1)$ induced by $\ell(z_0,z_1)=z_0$ has one positive transverse zero at $p_\infty$, so its Euler integral is $1$ by [F3]; the second-factor integral of $\eta$ is $1$ by definition. Hence $\int_M\alpha=1\cdot1=1$, agreeing with step 3.1. [given, A1, F1, F3, step 3.1] ∎
