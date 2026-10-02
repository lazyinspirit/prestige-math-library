---
id: def-little-l-divisor
kind: definition
title: "The Riemann-Roch dimension l(D)"
status: draft
origin: pipeline
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-coherent-module-scheme
  - def-dependent-choice
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-finite-type-finite-presentation-module-sheaf
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-free-sheaf-finite-rank
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-riemann-roch-space-of-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-cartier-divisor-sheaf-invertible
  - lem-field-is-noetherian
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-h0-structure-sheaf-proper-curve
  - thm-line-bundle-rational-section-cartier-divisor
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). It supplies the
Dependent Choice premise of the current curve Cartier-to-Weil result by
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C$ be a smooth
proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]) with associated invertible sheaf
$\mathcal O_C(D)$. For every such $k$, $C$ and $D$, the dimensions below are finite; define
$$l(D):=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$$
to be the dimension of the Riemann-Roch space, and define
$$h^i(D):=\dim_kH^i(C,\mathcal O_C(D)),\qquad i\ge0,$$
for the dimensions of the sheaf cohomology groups
([[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]).

For finiteness, $\mathcal O_C(D)$ is invertible by
[[def-invertible-sheaf-of-cartier-divisor]],
[[lem-cartier-divisor-sheaf-invertible]] and
[[thm-cartier-weil-divisors-curves-agree]]. An invertible sheaf is locally
free of rank one, hence quasi-coherent and of finite type. The curve is
locally Noetherian because it is of finite type over the Noetherian field $k$;
therefore a finite-type quasi-coherent sheaf on it is coherent
([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]],
[[def-quasi-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[def-locally-finite-type-and-finite-type-morphism]],
[[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]).
The published proper coherent-cohomology theorem then makes every
$H^i(C,\mathcal O_C(D))$ finite-dimensional over $k$
([[cor-projective-cohomology-finite-dimensional-field]]). Thus $l(D)$ and
each $h^i(D)$ are always nonnegative integers in this setting. For the zero
divisor,
$$l(0)=\dim_kH^0(C,\mathcal O_C)=1,$$
because $H^0(C,\mathcal O_C)$ is canonically $k$
([[thm-h0-structure-sheaf-proper-curve]]); more generally $l(D)$ depends only
on the divisor $D$ through its associated invertible sheaf.

The current [[def-riemann-roch-space-of-divisor]] supplies the order-defined
space $L(D)$ and identifies it with $H^0(C,\mathcal O_C(D))$, using the
rational-section dictionary
[[thm-line-bundle-rational-section-cartier-divisor]]. The Cartier-to-Weil
route requires Dependent Choice, which the stated Axiom of Choice supplies
through [[thm-choice-implies-dependent-implies-countable-choice]]. This
finiteness route uses the published proper cohomology result directly and
does not depend on the later Riemann-Roch-space finite-dimensionality lemma.
