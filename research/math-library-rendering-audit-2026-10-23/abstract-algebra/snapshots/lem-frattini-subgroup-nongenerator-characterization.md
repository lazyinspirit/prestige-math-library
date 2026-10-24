---
id: lem-frattini-subgroup-nongenerator-characterization
kind: lemma
title: "The Frattini subgroup consists exactly of the nongenerators of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, def-generated-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For a finite group $G$, an element $x$ lies in $\Phi(G)$ if and only if, for every subset $S\subseteq G$, $\langle S,x\rangle=G$ implies $\langle S\rangle=G$. See [[def-frattini-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L2] For a subset $S$ of a group $G$, the generated subgroup is $$\langle S\rangle:=\bigcap\{H:H\le G\text{ and }S\subseteq H\},$$ the smallest subgroup of $G$ containing $S$. ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $x\notin\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set. [L1, L2, given, algebra]

2.1 Conversely, if $\langle S,x\rangle=G$ while $\langle S\rangle\ne G$, extend the latter finite subgroup to a maximal subgroup; it contains $S$ but cannot contain $x$. [step 1.1, given, algebra]

3.1 We treat the trivial group, whose empty intersection convention gives $\Phi(1)=1$. This proves the stated claim. [step 2.1, given, algebra] ∎
