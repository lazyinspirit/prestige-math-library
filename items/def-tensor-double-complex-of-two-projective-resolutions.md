---
id: def-tensor-double-complex-of-two-projective-resolutions
title: "The first-quadrant tensor double complex of two projective resolutions"
kind: definition
status: published
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-projective-resolution-in-an-abelian-category"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Definition

Let $Q_\bullet\twoheadrightarrow N$ be a projective resolution of a right
$R$-module and $P_\bullet\twoheadrightarrow M$ a projective resolution of a
left $R$-module.  Their tensor double complex is
$K_{p,q}=Q_p\otimes_RP_q$ for $p,q\geq0$, with horizontal differential
$d_Q\otimes1$ and vertical differential $(-1)^p1\otimes d_P$ on the
$p$th column.  Its total complex uses
$\operatorname{Tot}_nK=\bigoplus_{p+q=n}K_{p,q}$; every diagonal is finite.
