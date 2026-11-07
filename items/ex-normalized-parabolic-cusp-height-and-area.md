---
id: ex-normalized-parabolic-cusp-height-and-area
kind: example
title: Normalized parabolic cusp height and area
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-shimizu-bound-and-disjoint-normalized-cusp-horoballs
- def-fuchsian-dirichlet-domains-and-cusp-data
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, author text
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
    locator: 'Sections 4.10-4.11, printed pp.75-77: fundamental/Dirichlet domains
      and face-cycle setup. The finite-area and cusp arguments here are supplied locally.'
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version 1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections 2.1-2.4 and 3.8-3.9: models and horospheres. Sections 5.10-5.11
      are a distinct thick-thin treatment in the manifold setting, not an imported
      proof of the torsion-bearing Fuchsian assertion.'
dependency_level: 4
---

## Example

For the translation group $\langle z\mapsto z+\ell\rangle$ with
$\ell>0$, the quotient of the horoball $y>R$ is a cylinder of area
$\ell/R$. The coordinate $w=z/\ell$ gives primitive width one and height
$Y=R/\ell$, so that the same area is $1/Y$. The full quotient of
$\mathbb H$ by this translation group has infinite area; a finite-area
cusp tail alone does not make the group cofinite.

## Facts & Assumptions

**Given:** $\ell>0$ and $R>0$.

[F1] For a width-one parabolic normalization and $Y>1$, the cusp-cylinder
area is $1/Y$, and the primitive displacement is
$2\operatorname{arsinh}(1/(2Y))$, as proved in
[[lem-shimizu-bound-and-disjoint-normalized-cusp-horoballs]].

[F2] The upper-half-plane area form is $dx\,dy/y^2$ by
[[def-fuchsian-dirichlet-domains-and-cusp-data]].

## Verification

1.1 The quotient of $y>R$ by translation by $\ell$ has fundamental strip $0\le x<\ell$. Using [F2], its area is $\int_R^\infty\int_0^\ell y^{-2}\,dx\,dy=\ell/R$. The dilation $w=z/\ell$ sends translation by $\ell$ to translation by $1$ and sends $y>R$ to $\operatorname{Im}w>Y=R/\ell$; the corresponding integral is $1/Y$. When $Y>1$, this agrees with [F1], while the direct integral establishes the formula for every $Y>0$. [F1, F2, given, algebra]

2.1 For the whole quotient the same fundamental strip extends to height zero; its portion with $y\ge r$ has area $\ell/r$, unbounded as $r\downarrow0$. Hence the whole quotient has infinite area. This verifies the distinction asserted in the Example using an explicit positive integral. [step 1.1, algebra] ∎
