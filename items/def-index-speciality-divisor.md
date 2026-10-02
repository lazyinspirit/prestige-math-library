---
id: def-index-speciality-divisor
kind: definition
title: "The index of speciality i(D)"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-dimension
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-cartier-divisor-addition-tensor
  - lem-cartier-divisor-sheaf-invertible
  - lem-riemann-roch-space-finite-dimensional
  - thm-cartier-weil-divisors-curves-agree
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-riemann-roch-euler-characteristic-curve
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

Assume the Axiom of Choice for proper-cohomology finiteness, the curve
Cartier-to-Weil identification, and the cohomological Riemann-Roch theorem
([[def-axiom-of-choice]]). AC supplies the Dependent Choice premise of the
curve Cartier-to-Weil result through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]),
let $D$ be a divisor on $C$ ([[def-divisor-smooth-proper-curve]]) and let
$\mathcal O_C(D)$ be its associated invertible sheaf. The current
[[lem-riemann-roch-space-finite-dimensional]] proves that
$H^1(C,\mathcal O_C(D))$ is finite-dimensional under this assumption. The
**index of speciality** of $D$ is the nonnegative integer
$$i(D):=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D)),$$
the first cohomology dimension of the attached invertible sheaf
([[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]],
[[def-little-l-divisor]]).

The index of speciality depends only on the linear equivalence class of $D$.
Indeed, [[thm-cartier-weil-divisors-curves-agree]] identifies the Weil divisors
on $C$ with Cartier divisors and preserves principal divisors;
[[def-linear-equivalence-cartier-divisors]] gives the Cartier equivalence
relation; and the current Cartier-sheaf and addition-tensor dictionaries
([[def-invertible-sheaf-of-cartier-divisor]],
[[lem-cartier-divisor-sheaf-invertible]],
[[lem-cartier-divisor-addition-tensor]],
[[thm-line-bundle-rational-section-cartier-divisor]]) identify linearly
equivalent divisors with isomorphic invertible sheaves. Their first cohomology
groups therefore have the same dimension.

For the zero divisor,
$$i(0)=h^1(C,\mathcal O_C)=g(C),$$
by [[def-genus-euler-characteristic-curve]]. The independent
[[thm-riemann-roch-euler-characteristic-curve]] gives
$$h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g(C).$$
By the definitions of $l(D)$ and $i(D)$ this is
$$l(D)-i(D)=\deg_k(D)+1-g(C).$$
Thus $i(D)\ge0$ gives the Riemann inequality
$$l(D)\ge\deg_k(D)+1-g(C),$$
and equality holds exactly when $i(D)=0$.

This definition is deliberately one-sided. No identification of
$H^1(C,\mathcal O_C(D))$ with the sections of a complementary invertible
sheaf, and no Serre-duality statement, is made or used here. The Cartier,
finite-dimensionality, and Euler-characteristic suppliers named above are
present in the working tree as draft or published items as indicated by their
frontmatter; their presence alone does not certify a mathematical review.
