---
id: def-primary-component-of-a-module-over-a-domain
kind: definition
title: "The $p$-primary component of a module over a domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-annihilator-and-torsion-of-a-module, def-irreducible-and-prime-elements-in-a-domain]
justified_by: [prop-torsion-and-primary-components-are-submodules-over-a-domain]
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
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 3"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Definition

Let $R$ be an integral domain, let $M$ be an $R$-module, and let $p\in R$ be
irreducible ([[def-irreducible-and-prime-elements-in-a-domain]]). The
**$p$-primary component** of $M$ is

$$M[p^\infty]:=\{m\in M:p^k m=0\text{ for some integer }k\ge1\}.$$

It is contained in the torsion subset $\operatorname{Tor}(M)$ of
[[def-annihilator-and-torsion-of-a-module]]. That both sets are submodules, as
their names require, is proved in
[[prop-torsion-and-primary-components-are-submodules-over-a-domain]].
