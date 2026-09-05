---
id: lem-central-action-on-a-cyclic-highest-weight-module-is-scalar
kind: lemma
title: "Central elements act by scalars on cyclic highest-weight modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-central-character-of-a-lie-algebra-module, def-highest-weight-vector-and-cyclic-highest-weight-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf"
pipeline_run: null
---

## Statement

Every central element acts on a cyclic highest-weight module by a scalar. In particular, each cyclic highest-weight module has a well-defined central character in the sense of [[def-central-character-of-a-lie-algebra-module]].

## Facts & Assumptions

**Given:** A cyclic highest-weight module $M=U(\mathfrak g)v$ of highest weight $\lambda$ with highest vector $v$, and a central element $z\in Z(U(\mathfrak g))$.

## Proof

**Proof technique:** direct.

1.1 The highest-weight line is one-dimensional, so $zv$ must equal $cv$ for a unique scalar $c\in \mathbb C$. Indeed, $z$ commutes with $\mathfrak h$ and $\mathfrak n^+$, so $zv$ has the same weight as $v$ and is again killed by $\mathfrak n^+$. [given, algebra]

2.1 Every element of $M$ has the form $uv$ with $u\in U(\mathfrak g)$, and centrality gives $z(uv)=u(zv)=u(cv)=cuv$. Thus $z$ acts as $c\operatorname{id}_M$. [step 1.1, algebra]

3.1 Sending $z$ to the scalar $c$ from step 1.1 is an algebra homomorphism on the center, so $M$ has the central character promised in [[def-central-character-of-a-lie-algebra-module]]. [step 2.1] ∎
