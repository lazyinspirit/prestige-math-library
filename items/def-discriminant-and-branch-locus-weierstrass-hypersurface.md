---
id: def-discriminant-and-branch-locus-weierstrass-hypersurface
kind: definition
title: "Discriminant and branch set of a fixed Weierstrass projection"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discriminant-of-a-monic-polynomial
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-uniqueness-in-weierstrass-preparation
  - thm-weierstrass-preparation-theorem
  - thm-weierstrass-finite-projection-hypersurface-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.2 discriminant set of a Weierstrass polynomial; Theorem 6.3.3 (p. 178); Example 6.6.4 the branched projection of a smooth parabola (p. 190)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) discriminant of a finite preparation, and the connected unramified part (p. 95)."
verification:
  precheck: n/a
---

## Definition

Fix $n\ge1$ and a reduced nonzero nonunit germ $f\in\mathcal O_{\mathbb C^n,p}$.
Center at $p$ and fix the data supplied by
[[thm-weierstrass-finite-projection-hypersurface-germ]]: an invertible
complex-linear map $T$, the affine coordinate map $\Phi(z)=p+Tz$, a
preparation

$$f\circ\Phi=u\,W(z',t),$$

and its chosen product representative $V\times D$. Here $W$ is monic of
degree $d\ge1$ in $t$, with coefficients in $\mathcal O_{n-1,0}$, and $u$ is
nonvanishing on the representative. Use the product neighbourhood of the
finite-projection theorem, on which every slice has all its $d$ roots,
counted with multiplicity, inside $D$ and none on $\partial D$; mere
agreement of zero sets on an arbitrary product does not suffice. Put
$X_W:=Z(W)\cap(V\times D)$ and let $\pi:X_W\to V$, $(z',t)\mapsto z'$, be
the restricted coordinate projection. This chosen projection is proper and
surjective, and is a $d$-sheeted holomorphic covering off the discriminant.

**Discriminant.** The **discriminant** of the fixed prepared equation is the
base germ

$$D_W(z'):=\operatorname{Disc}_t(W)\in\mathcal O_{n-1,0},$$

the coefficient expression of [[def-discriminant-of-a-monic-polynomial]]
applied to the monic polynomial $W(z',\cdot)$ over $\mathcal O_{n-1,0}$.

**Branch set.** The **branch set of the projection** $\pi$ is

$$B_\pi:=\{z'\in V:D_W(z')=0\},$$

the zero set of the discriminant germ inside the chosen base neighbourhood.

The definition is well posed for the fixed equation and projection:

1. The Weierstrass polynomial is unique for that fixed linear projection, so it
   does not change if the original germ is multiplied by a unit, or if another
   preparation of the same regular germ is used
   ([[thm-uniqueness-in-weierstrass-preparation]]).
2. The discriminant is not identically zero: $D_W\ne0$ as a germ
   ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]]).
3. For $z_0'\in V$ the value $D_W(z_0')=\operatorname{Disc}(W(z_0',\cdot))$
   vanishes exactly when the slice has a repeated root
   ([[thm-discriminant-root-formula-and-repeated-root-criterion]]).
   Since $W$ is monic of degree $d$, this happens exactly when the fibre
   $\pi^{-1}(z_0')$ is not a set of $d$ distinct simple roots, that is, exactly
   where the $d$ unramified local sheets supplied by the finite-projection
   theorem fail to exist. Thus $B_\pi$ is the base locus of the branching of
   $\pi$.

The branch set belongs to the chosen projection: it is defined after fixing the
linear coordinate change $T$ and the base neighbourhood, and it need not equal
the image under $\pi$ of the singular locus of the hypersurface. The companion
examples page exhibits the smooth curve $y^2=x$, whose chosen projection
$(x,y)\mapsto x$ is branched at $x=0$ although the curve has no singular
point; the singular locus itself is defined independently of any projection on
this page.
