---
id: def-invariant-factors-and-elementary-divisors-of-a-pid-module
kind: definition
title: "Invariant factors and elementary divisors of a finitely generated module over a PID"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-direct-sum-of-a-family-of-modules, def-generated-cyclic-finitely-generated-and-free-modules, def-primary-component-of-a-module-over-a-domain, def-divisibility-and-associates-in-a-domain]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Sections 4-5"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Sections 3-5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a principal ideal domain and $M$ a finitely generated $R$-module. In
a decomposition

$$M\cong R^r\oplus R/(a_1)\oplus\cdots\oplus R/(a_t),\qquad a_1\mid a_2\mid\cdots\mid a_t,$$

where every $a_i$ is a nonzero nonunit, the associate classes of
$a_1,\ldots,a_t$ are the **invariant factors** of $M$. Unit factors are omitted.

After each $a_i$ is factored into powers of irreducibles and the coprime cyclic
quotients are split, the resulting prime powers $p^e$, counted with
multiplicity and up to associates, are the **elementary divisors** of $M$. The
summands belonging to one associate class of $p$ form the $p$-primary component
([[def-primary-component-of-a-module-over-a-domain]]). The integer $r$ is
separate data and is not an elementary divisor.
