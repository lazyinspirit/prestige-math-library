---
id: def-generator-rank-of-a-finite-p-group
kind: definition
title: "The generator rank $d(P)$ of a finite $p$-group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]
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
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 2.28 and Definition 2.29"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Definition

For a finite $p$-group $P$, the generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$.

This is well defined: [[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]] makes the quotient elementary abelian, and [[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]] proves that it has bases and that all have the same finite size in the sense of [[def-fp-basis-of-an-elementary-abelian-p-group]]. In particular $d(1)=0$, since the trivial quotient has the empty basis.

