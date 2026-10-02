---
id: ex-nonreduced-equation-same-hypersurface-germ
kind: example
title: "A nonreduced equation can hide a smooth hypersurface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-irreducible-and-prime-elements-in-a-domain
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - lem-square-free-reduction-of-holomorphic-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.4 unique factorisation and defining equations (p. 182); §6.6 hypervariety germs and their reduced equations (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (2.10) factoriality of O_n (p. 82); II (6.6) defining equations up to units (pp. 106–107)."
verification:
  precheck: pass
---

## Example

In $\mathbb C^2$ with coordinates $(x,y)$, the equations $x=0$ and $x^2=0$
define the same complex-analytic hypersurface germ at the origin, namely the
smooth germ of the line $\{x=0\}$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]). The
equation $x^2$ is not reduced, and its raw differential $d(x^2)=2x\,dx$
vanishes at every point of the hypersurface, whereas the differential
$dx$ of the reduced equation $x$ never vanishes. This is why the regularity
criterion is stated for a reduced local equation
([[def-regular-singular-point-analytic-hypersurface]]).

## Facts & Assumptions

**Given:** The two equation germs $x$ and $x^2$ at $0\in\mathbb C^2$ and their common zero germ $X=Z(x)=Z(x^2)$.

[F1] The coordinate germ $x$ is irreducible in $\mathcal O_{\mathbb C^2,0}$: it lies outside $\mathfrak m_0^2$ because its linear part is nonzero, while a product of two nonunits lies in $\mathfrak m_0^2$; hence $x$ is not a product of two nonunits ([[def-irreducible-and-prime-elements-in-a-domain]]).

[F2] An irreducible germ is reduced, because a germ divisible by the square of an irreducible germ is a product of two nonunits; the square-free reduction $g_{\mathrm{red}}$ of a nonzero nonunit $g$ is reduced, depends on $g$ only up to associates, and satisfies $Z(g_{\mathrm{red}})=Z(g)$ on a common neighbourhood ([[def-reduced-holomorphic-germ-for-hypersurface]], [[lem-square-free-reduction-of-holomorphic-germ]]).

[F3] A hypersurface germ is determined by its reduced defining germ, which is unique up to a unit; two defining equations give the same hypersurface germ exactly when their square-free reductions are associates ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]).

[F4] A point $q\in X$ is regular exactly when the differential of a local reduced equation of $X$ at $q$ is nonzero; equivalently, exactly when $X$ is a holomorphic hypersurface graph near $q$ ([[def-regular-singular-point-analytic-hypersurface]]).



**Proof technique:** direct — compute the square-free reductions and compare the two differentials on the common zero set.

## Verification

1.1 The germ $x$ is irreducible by [F1] and hence reduced by [F2]; its factorisation has the single irreducible factor $x$, so the square-free reduction of $x^2$ is $x$ and the square-free reduction of $x$ is itself. By [F2] we have $Z(x)=Z(x^2)$ near $0$, so the two equations define the same hypersurface germ $X$, with reduced defining germ $x$ by [F3]; the equation $x^2$ is not reduced, because the irreducible germ $x$ divides it twice. [given, F1, F2, F3]

2.1 The germ $X=\{x=0\}$ is the graph $X=\{(x,y):x=0\}$ of the zero function over the $y$-coordinate, hence is a holomorphic hypersurface graph near each of its points; by [F4] every point of $X$ is regular, and $X$ is smooth. [step 1.1, F4, construct]

3.1 On the one hand $dx$ is the constant nonzero covector $dx$, so the differential of the reduced equation $x$ never vanishes and the criterion [F4] is satisfied at every point of $X$. On the other hand $d(x^2)=2x\,dx$ vanishes at every point of $X$, because $x=0$ there. Thus the raw differential of the nonreduced equation $x^2$ vanishes on the very hypersurface on which the reduced equation $x$ has nonzero differential, and the regularity criterion must specify a reduced equation. [step 1.1, step 2.1, F3, F4, algebra] ∎
