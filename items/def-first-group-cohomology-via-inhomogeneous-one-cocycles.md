---
id: def-first-group-cohomology-via-inhomogeneous-one-cocycles
kind: definition
title: "First group cohomology via inhomogeneous one-cocycles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-crossed-homomorphism-for-a-g-group, def-cohomology-object-of-a-cochain-complex]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Definition

Let $G$ act on an abelian group $A$. In degree one, the inhomogeneous cochain
model takes

$$C^0(G,A)=A,\qquad C^1(G,A)=\{f:G\to A\},\qquad C^2(G,A)=\{u:G\times G\to A\},$$

with differentials

$$d^0(a)(g)=g\cdot a-a,$$

and

$$d^1(f)(g,h)=f(g)+g\cdot f(h)-f(gh).$$

The **first cohomology** is the cohomology object

$$H^1_{\mathrm{inh}}(G,A)=\ker d^1/\operatorname{im} d^0,$$

in the sense of [[def-cohomology-object-of-a-cochain-complex]].
