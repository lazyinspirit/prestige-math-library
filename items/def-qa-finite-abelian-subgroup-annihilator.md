---
id: def-qa-finite-abelian-subgroup-annihilator
kind: definition
title: Character annihilator of a subgroup
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-subgroup]
dependency_level: 1
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $G$ be a finite abelian group with character dual $\widehat G$ ([[def-qa-finite-abelian-character-dual]]). For a subgroup $H\le G$ ([[def-subgroup]]), define its character annihilator by
$$H^{\perp}:=\{\chi\in\widehat G:\chi(h)=1\text{ for every }h\in H\}.$$
For any subset $K\subseteq\widehat G$ (in particular, for any subgroup once $\widehat G$ has been proved to be a group), define
$$K^{\perp}:=\{g\in G:\chi(g)=1\text{ for every }\chi\in K\}.$$
The pairing is evaluation, and the same convention is used in both directions. `lem-qa-finite-abelian-annihilators-are-subgroups` proves that these sets are subgroups when the input is a subgroup.
