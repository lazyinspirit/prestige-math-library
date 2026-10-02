---
id: def-genus-euler-characteristic-curve
kind: definition
title: Genus via the Euler characteristic
status: draft
origin: pipeline
deps:
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-arithmetic-genus-proper-curve
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-riemann-roch-space-finite-dimensional
  - thm-h0-structure-sheaf-proper-curve
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

Assume the Axiom of Choice for proper-cohomology finiteness and the global
functions theorem ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be
a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]). The current
[[lem-riemann-roch-space-finite-dimensional]] proves under this assumption that
$H^1(C,\mathcal O_C)$ is finite-dimensional. The **genus** of $C$ is the
nonnegative integer
$$g(C):=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$$
([[def-little-l-divisor]], [[def-sheaf-cohomology-derived-global-sections]],
[[def-dimension]]).

The global functions theorem [[thm-h0-structure-sheaf-proper-curve]] gives
$H^0(C,\mathcal O_C)=k$. Consequently the Euler characteristic
$\chi(C,\mathcal O_C)=h^0(C,\mathcal O_C)-h^1(C,\mathcal O_C)$ of
[[def-euler-characteristic-coherent-sheaf]] satisfies
$$\chi(C,\mathcal O_C)=1-g(C),\qquad\text{equivalently}\qquad g(C)=1-\chi(C,\mathcal O_C).$$
This is the arithmetic genus $p_a(C)=1-\chi(\mathcal O_C)$ of
[[def-arithmetic-genus-proper-curve]] for a smooth geometrically connected
proper curve. The equality of the two definitions here follows from
$H^0(C,\mathcal O_C)=k$ and finite-dimensionality of $H^1$.

For the projective line, the direct published cohomology calculation
[[cor-top-cohomology-projective-space-o-d]] gives
$H^1(\mathbb P^1_k,\mathcal O)=0$ (take projective dimension $1$ and twist
$d=0$), so $g(\mathbb P^1_k)=0$. No Serre duality is used in this definition.
