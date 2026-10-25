---
id: ex-abbv-projective-line-standard-circle-action
kind: example
title: "ABBV on the Projective Line with the Standard Circle Action"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
axiom_strength: "ZF + AC"
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-abbv-equivariant-integration-conventions
  - thm-atiyah-bott-berline-vergne-integration-formula
dependency_roles:
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
    - title: "Michael F. Atiyah and Raoul Bott, The Moment Map and Equivariant Cohomology"
      url: "https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf"
    - title: "Matvei Libine, Lecture Notes on Equivariant Cohomology"
      url: "https://arxiv.org/pdf/0709.3615"
    - title: "Kentaro Hori et al., Mirror Symmetry"
      url: "https://www.claymath.org/library/monographs/cmim-1.pdf"
      locator: "Chapter 4, §4.3, printed pp. 62–64 (PDF pp. 82–84), fixed-point denominator context; the stated O(1) calculation is derived locally."
verification:
  precheck: pending
---

## Example

Work in $\mathrm{ZF}+\mathrm{AC}$. Let $T=S^1=\mathbb R/\mathbb Z$ act on complex-oriented $M=\mathbb{CP}^1$ by $\lambda[z_0:z_1]=[z_0:\lambda z_1]$. Let $u\in H^2(BT;\mathbb R)$ be the class corresponding to the period-one weight-$+1$ character under the chosen tautological-Euler normalization, let $\mathcal O(1)$ be the dual tautological line with its induced equivariant structure, and put $x=e_T(\mathcal O(1))$. The fixed points are $p_0=[1:0]$ and $p_\infty=[0:1]$. Their tangent weights are $+1$ and $-1$, while $x|_{p_0}=0$ and $x|_{p_\infty}=-u$. The ABBV sum is

$$\frac{0}{u}+\frac{-u}{-u}=1,$$

which agrees with $\int_{\mathbb{CP}^1}x=1$.

## Example references

[Atiyah and Bott, §3, fixed-point specialization of equation (3.8)](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Libine, §7.1, Example 48, PDF pp. 22–23](https://arxiv.org/pdf/0709.3615)

## Facts & Assumptions

**Given:** AC, the standard coordinate action of $S^1$ on $\mathbb{CP}^1$, the complex orientation, the period-one character class $u$, and the induced equivariant structure on $\mathcal O(1)$.

[A1] Assume AC, carried through the real coefficient-ring convention for Borel equivariant cohomology. [[def-axiom-of-choice]]

[F1] [[def-abbv-equivariant-integration-conventions]]: a character of weight $m$ has equivariant Euler class $m u$ in real Borel cohomology; equivariant integration uses the complex orientation.

[F2] [[thm-atiyah-bott-berline-vergne-integration-formula]]: for an isolated fixed point with tangent weight $\chi$, its contribution is $\epsilon_p\,\alpha|_p/u_\chi$ in the localized real coefficient ring, where $\epsilon_p$ compares the complex tangent orientation with the ambient orientation.

## Verification

1.1 A point $[z_0:z_1]$ is fixed by every $\lambda$ precisely when it lies on one coordinate axis, so the fixed set is $\{p_0,p_\infty\}$. In the coordinate $w=z_1/z_0$ near $p_0$, the action is $w\mapsto\lambda w$, giving tangent weight $+1$; in $v=z_0/z_1$ near $p_\infty$, it is $v\mapsto\lambda^{-1}v$, giving weight $-1$. The complex orientations agree with $M$, so the Euler denominators are $u$ and $-u$. [given, F1, algebra]

1.2 The tautological fiber at $p_0$ is the trivial coordinate line, and at $p_\infty$ it is the weight-$+1$ coordinate line. Dualizing gives the fixed-fiber weights $0$ and $-1$ for $\mathcal O(1)$, hence $x|_{p_0}=0$ and $x|_{p_\infty}=-u$. [given, F1, algebra]

2.1 Substituting these restrictions and tangent Euler classes in [F2] gives $\int_M x=0/u+(-u)/(-u)=1$. [given, A1, F2, step 1.1, step 1.2]

3.1 The linear functional $\ell(z_0,z_1)=z_0$ defines a section of $\mathcal O(1)$ that vanishes only at $p_\infty$. In the local coordinate $v=z_0/z_1$ and the dual tautological frame there, its coefficient is $v$, so its unique zero is transverse with positive local degree $+1$. Pulling the normalized Thom class back by a transverse section counts its isolated zeros with these local degrees: excision reduces the pairing to the degree of the section on the boundary of a small disk around each zero. Hence the ordinary Euler number is $1$. Restricting the Borel pushforward to the basepoint of connected $BT$ gives this ordinary Euler number, and $H^0(BT;\mathbb R)=\mathbb R$; therefore $\int_{\mathbb{CP}^1}x=1$, independently confirming the localized sum. [given, A1, F1, step 1.2] ∎
