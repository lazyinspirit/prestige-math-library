---
id: def-fp-basis-of-an-elementary-abelian-p-group
kind: definition
title: "$\\mathbb F_p$-spanning sets, independence, and bases in an elementary abelian $p$-group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-generated-subgroup]
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
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Definition

Let $E$ be an elementary abelian $p$-group with the canonical scalar action of [[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]].

A subset $S\subseteq E$ **spans** $E$ when every $x\in E$ can be written as a finite product

$$x=\prod_{s\in S}s^{a_s},\qquad a_s\in\mathbb F_p,$$

with all but finitely many coefficients zero. Equivalently, $\langle S\rangle=E$ ([[def-generated-subgroup]]).

The set $S$ is **independent** when $\prod_{s\in S}s^{a_s}=e$ with finite support forces every $a_s=0$. A basis of an elementary abelian $p$-group is an independent spanning subset for its canonical $\mathbb F_p$-linear structure.

The empty subset is independent. It spans exactly the trivial group, so the trivial group has the empty basis.

