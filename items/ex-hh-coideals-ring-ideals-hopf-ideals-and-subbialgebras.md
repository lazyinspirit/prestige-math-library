---
id: ex-hh-coideals-ring-ideals-hopf-ideals-and-subbialgebras
kind: example
title: "Coideals, ring ideals, Hopf ideals, and subbialgebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-hopf-ideal-and-hopf-subalgebra
  - def-left-right-and-two-sided-ideal
  - def-hh-subcoalgebras-coideals-and-quotient-coalgebras
  - lem-hh-group-and-polynomial-hopf-algebras-exist
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
  - thm-monic-polynomial-division
  - lem-hh-finite-polynomial-and-localization-constructions
  - def-hh-scalar-and-tensor-conventions
  - thm-tensor-product-basis-from-bases
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §§2.23–2.24, §3.1, and §3.4"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---

## Example

Let $k$ be a field of characteristic different from $2$, and let $H=k[x]$ have primitive Hopf structure $\Delta(x)=1\otimes x+x\otimes1$, $\varepsilon(x)=0$, $S(x)=-x$. The subspace $kx$ is a coalgebra coideal but not a ring ideal; the ring ideal $(x^2)$ is not a coalgebra coideal; and $(x)$ is a Hopf ideal. Separately, $k[t]\subset k[\mathbb Z]$, spanned by $t^n$ for $n\ge0$, is a subbialgebra but not a Hopf subalgebra.

## Verification

**Given:** A field $k$ with $\operatorname{char}(k)\ne2$, the primitive polynomial Hopf structure from the planned HH-4 construction, and the group algebra $k[\mathbb Z]$ with generator $t$.

[F1] [[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]: a coideal $J$ has $\varepsilon(J)=0$ and $\Delta(J)$ contained in the sum of the images of $J\otimes C$ and $C\otimes J$; under AC this is written $J\otimes C+C\otimes J$.

[F2] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: the polynomial generator is primitive and its antipode is $-x$; the group elements form the basis of $k[\mathbb Z]$, are group-like, and have antipode inversion.

[F3] [[def-hh-hopf-ideal-and-hopf-subalgebra]]: a subbialgebra is a subspace equipped with a bialgebra structure for which inclusion is a bialgebra map; a Hopf subalgebra is such a subbialgebra stable under the antipode, and a Hopf ideal is an ideal, counital coideal, and antipode-stable.

[F4] [[thm-monic-polynomial-division]]: every polynomial modulo the monic polynomial $x^2$ has a unique remainder of degree below $2$, so $1,\bar x$ form a basis of $k[x]/(x^2)$.

[F5] [[def-left-right-and-two-sided-ideal]]: a two-sided ideal is closed under left and right multiplication by every ring element.

[F6] [[thm-tensor-product-basis-from-bases]]: elementary tensors of basis vectors form a basis of the tensor product.

[F7] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: every antipode is anti-multiplicative, so $S(ab)=S(b)S(a)$.

[F8] [[lem-hh-finite-polynomial-and-localization-constructions]]: $k[x]$ is free as a $k$-vector space on the monomials $1,x,x^2,\ldots$.

1.1 The line $J=kx$ is a coideal: $1\otimes x$ lies in the image of $H\otimes J\to H\otimes H$, $x\otimes1$ lies in the image of $J\otimes H\to H\otimes H$, and $\varepsilon(x)=0$. Linearity gives both inclusions for every scalar multiple of $x$. It is not a ring ideal because $x\in J$ but $x\cdot x=x^2\notin kx$, as the distinct monomials $x,x^2$ are linearly independent by [F8]. [given, F1, F2, F8, algebra]

1.2 The set $(x^2)$ is a ring ideal by [F5], but it is not a coideal. Let $q:k[x]\to k[x]/(x^2)$ be the quotient map. The coideal image condition would force $(q\otimes q)\Delta(x^2)=0$; instead $\Delta(x^2)=1\otimes x^2+2x\otimes x+x^2\otimes1$, so $(q\otimes q)\Delta(x^2)=2\bar x\otimes\bar x\ne0$. By [F4] $\bar x\ne0$, and by [F6] $\bar x\otimes\bar x$ is a nonzero tensor-basis element; $2\ne0$ by the characteristic hypothesis. [given, F1, F2, F4, F5, F6, algebra]

1.3 The ideal $(x)$ is a Hopf ideal. It is a two-sided ideal, $\varepsilon(x)=0$, and each term of $\Delta(x)=1\otimes x+x\otimes1$ lies in the sum of the images of $H\otimes(x)$ and $(x)\otimes H$. Since $\Delta$ is an algebra map, for any $f\in k[x]$, $\Delta(xf)=\Delta(x)\Delta(f)$ lies in the sum of those images: in each product of a term with $x$ in one factor and a term of $\Delta(f)$, the factor containing $x$ remains in $(x)$. Also $S(xf)=S(f)S(x)=-S(f)x\in(x)$ by [F7], and $\varepsilon(xf)=0$. Thus all conditions in [F3] hold. [given, F2, F3, F7, algebra]

2.1 In $k[\mathbb Z]$, the elements $t^n$ for $n\in\mathbb Z$ form a basis by [F2], so those with $n\ge0$ form a basis of $K:=\operatorname{span}\{t^n:n\ge0\}$. Restrict multiplication and unit to $K$, define $\Delta_K$ linearly on this basis by $\Delta_K(t^n)=t^n\otimes t^n$, and let $\varepsilon_K$ be the restriction of $\varepsilon$. For $m,n\ge0$, $t^mt^n=t^{m+n}$, $\Delta_K(t^{m+n})=(t^m\otimes t^m)(t^n\otimes t^n)$, and $\varepsilon_K(t^{m+n})=\varepsilon_K(t^m)\varepsilon_K(t^n)=1$, with $\Delta_K(1)=1\otimes1$ and $\varepsilon_K(1)=1$; bilinearity extends these equations to $K$, so $\Delta_K$ and $\varepsilon_K$ are unital algebra maps. Coassociativity and both counit identities hold on each basis element because $t^n$ is group-like, and hence hold on all of $K$ by linearity. The inclusion $K\hookrightarrow k[\mathbb Z]$ preserves multiplication, unit, coproduct, and counit on the basis and therefore is a bialgebra map. Thus $K$ is a subbialgebra by [F3], proved directly from its structure maps without using the AC-qualified tensor-subspace shorthand. But $S(t)=t^{-1}\notin K$, since all $t^n$, $n\in\mathbb Z$, are linearly independent; hence $K$ is not a Hopf subalgebra. [given, F2, F3, algebra] ∎
