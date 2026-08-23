---
id: def-matrix-equivalence-and-smith-normal-form-over-a-pid
kind: definition
title: "Matrix equivalence and Smith normal form over a PID"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring-matrix-product-identity-and-transpose, def-invertible-matrix-and-similarity-over-a-commutative-ring, def-principal-ideal-domain]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Definitions 2.0.1 and 2.1.1"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a principal ideal domain and let $A,B\in M_{m\times n}(R)$. The
matrices are **equivalent** when

$$B=PAQ$$

for some $P\in\operatorname{GL}_m(R)$ and $Q\in\operatorname{GL}_n(R)$
([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

A **Smith normal form** of $A$ is an equivalent diagonal rectangular matrix

$$\operatorname{diag}(d_1,\ldots,d_r,0,\ldots,0),$$

where every $d_i$ is nonzero and $d_1\mid d_2\mid\cdots\mid d_r$. Multiplying
any $d_i$ by a unit gives the same Smith data. The zero matrix has $r=0$, and
the definition also covers matrices with zero rows or zero columns.
