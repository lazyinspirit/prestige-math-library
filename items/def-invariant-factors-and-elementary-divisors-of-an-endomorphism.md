---
id: def-invariant-factors-and-elementary-divisors-of-an-endomorphism
kind: definition
title: "Invariant factors and elementary divisors of an endomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-invariant-factors-and-elementary-divisors-of-a-pid-module, def-polynomial-module-of-an-endomorphism, cor-polynomial-ring-over-a-field-is-a-pid, prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator, thm-invariant-factor-decomposition-over-a-pid, thm-primary-decomposition-and-elementary-divisor-form-over-a-pid, thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid]
aliases: []
landmark: false
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
    - title: "M. Brussel, Finitely Generated Modules over a PID, Sections 5.2-5.3"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Definition

Let $T$ be an endomorphism of a finite-dimensional vector space over $F$. The
**invariant factors** and **elementary divisors of $T$** are those of the
$F[x]$-module $V_T$ ([[def-polynomial-module-of-an-endomorphism]]), normalized
to be monic polynomials.

The ring $F[x]$ is a PID by [[cor-polynomial-ring-over-a-field-is-a-pid]], and
[[prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator]]
makes $V_T$ a finitely generated torsion module. These data therefore exist by
[[thm-invariant-factor-decomposition-over-a-pid]] and
[[thm-primary-decomposition-and-elementary-divisor-form-over-a-pid]], and are
unique by
[[thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid]].
