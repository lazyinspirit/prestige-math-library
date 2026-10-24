---
id: def-nonspecial-divisor
kind: definition
title: "Special and nonspecial divisors"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - lem-riemann-roch-space-finite-dimensional
  - thm-riemann-roch-as-l-minus-index
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
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Assume the Axiom of Choice inherited from proper-cohomology finiteness and the
Riemann-Roch theorem ([[def-axiom-of-choice]]). Let $k$ be a field, let $C$ be
a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]) with genus $g=g(C)$
([[def-genus-euler-characteristic-curve]]), and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]) with index of speciality
$i(D)=h^1(C,\mathcal O_C(D))$ and $l(D)=h^0(D)$
([[def-index-speciality-divisor]], [[def-little-l-divisor]]).

Call $D$ **nonspecial** when
$$i(D)=0,\qquad\text{that is, when}\qquad H^1(C,\mathcal O_C(D))=0,$$
and call it **special** otherwise, so that $D$ is special exactly when
$i(D)\ge1$. These are the classical names for the two cases of the index of
speciality: vanishing first cohomology, and nonvanishing first cohomology.

The current [[thm-riemann-roch-as-l-minus-index]] gives
$$l(D)-i(D)=\deg_k(D)+1-g,$$
and $i(D)\ge0$, so the Riemann inequality
$$l(D)\ge\deg_k(D)+1-g$$
always holds. Consequently,
$$D\text{ nonspecial}\iff l(D)=\deg_k(D)+1-g \iff\text{the Riemann inequality is an equality for }D,$$
and
$$D\text{ special}\iff l(D)>\deg_k(D)+1-g,$$
because the difference $l(D)-\bigl(\deg_k(D)+1-g\bigr)=i(D)$ is exactly the
index of speciality. Thus a divisor is special precisely when its space of
sections is larger than the Riemann inequality requires, and the equality
case of that inequality is the vanishing of $H^1(C,\mathcal O_C(D))$.

Speciality is a property of the divisor class and not of the individual
divisor: the index of speciality depends only on the linear equivalence class
of $D$ ([[def-index-speciality-divisor]]), so linearly equivalent divisors are
special or nonspecial together. For the zero divisor the definition gives
$$i(0)=h^1(C,\mathcal O_C)=g,$$
the genus of $C$ ([[def-index-speciality-divisor]],
[[def-genus-euler-characteristic-curve]]), so $0$ is nonspecial exactly when
$g=0$ and special exactly when $g\ge1$; equivalently, the equality reading
$l(0)=1=\deg_k(0)+1-g$ holds exactly when $g=0$, in agreement with
$l(0)=1$ for the zero divisor ([[def-little-l-divisor]]).

The finite-valued cohomology dimensions and Riemann-Roch identity used here
are supplied by the current [[lem-riemann-roch-space-finite-dimensional]],
[[def-index-speciality-divisor]], [[def-genus-euler-characteristic-curve]]
and [[thm-riemann-roch-as-l-minus-index]]. Their source files are present in
the working tree; their mathematical status remains the status recorded in
their frontmatter.
