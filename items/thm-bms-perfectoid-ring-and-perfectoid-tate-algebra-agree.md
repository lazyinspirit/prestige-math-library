---
id: thm-bms-perfectoid-ring-and-perfectoid-tate-algebra-agree
kind: theorem
title: "Integral perfectoid rings and perfectoid Tate algebras agree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-integral-perfectoid-ring-via-ainf-and-tilt
  - def-perfectoid-k-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Lemmas 3.20–3.21"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
    - title: "Peter Scholze, Perfectoid Spaces, Definition 5.1"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
---

## Statement

Let $K$ be a perfectoid field and let $R$ be a complete Tate $K$-algebra. Then $R$ is a perfectoid $K$-algebra if and only if its power-bounded subring $R^\circ$ is bounded in $R$ and is an integral perfectoid ring with its inherited topology.

## Statement references

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Lemmas 3.20–3.21](https://arxiv.org/pdf/1602.03148v3.pdf)

[Peter Scholze, *Perfectoid Spaces*, Definition 5.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Remaining local proof obligations

The elementary change of the Frobenius condition between reductions modulo $p$ and scalar pseudouniformizers, and adic completeness of the bounded power-bounded subring, now have local helper proofs. The remaining obligation for this $R^\circ$ comparison is the actual construction and surjectivity of Fontaine’s ring homomorphism and the principal-kernel criterion used in BMS Lemma 3.10, with its application in Lemmas 3.20–3.21. Existing Witt-coordinate suppliers alone do not supply that criterion. This equivalence remains held; no source citation or partial Frobenius argument is treated as its proof.

