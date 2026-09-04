---
id: def-first-nonabelian-cohomology-as-a-pointed-set
kind: definition
title: "First nonabelian cohomology as a pointed set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-crossed-homomorphism-for-a-g-group]
verification:
  audited: 2026-09-04
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

Let $G$ act on a group $M$ by automorphisms. The set of **nonabelian
$1$-cocycles** is

$$Z^1_{\mathrm{nab}}(G,M):=\{z:G\to M:z(gh)=z(g)(g\cdot z(h))\}.$$

The group $M$ acts on this set by

$$ (a*z)(g):=a\,z(g)\,(g\cdot a)^{-1}. $$

The **first nonabelian cohomology set** is the orbit set

$$H^1_{\mathrm{nab}}(G,M):=Z^1_{\mathrm{nab}}(G,M)/M,$$

pointed by the orbit of the trivial cocycle $g\mapsto1$.
