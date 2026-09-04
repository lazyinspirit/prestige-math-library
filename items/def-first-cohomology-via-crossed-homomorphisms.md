---
id: def-first-cohomology-via-crossed-homomorphisms
kind: definition
title: "First cohomology via crossed homomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group, lem-principal-crossed-homomorphisms-form-a-subgroup]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Definition

Let $G$ act on an abelian group $A$. The **first cohomology group** of $G$ with
coefficients in $A$ is

$$H^1(G,A):=Z^1(G,A)/B^1(G,A),$$

where $Z^1(G,A)$ is the abelian group of crossed homomorphisms and $B^1(G,A)$
is the subgroup of principal crossed homomorphisms from
[[lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group]]
and [[lem-principal-crossed-homomorphisms-form-a-subgroup]].
