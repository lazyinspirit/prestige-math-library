---
id: thm-perfectoid-affinoid-etale-covers-correspond-to-finite-etale-algebras
kind: theorem
title: "Strongly finite étale covers of perfectoid affinoids"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-strongly-finite-etale-perfectoid-space-morphism
  - thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity
  - thm-tilting-equivalence-for-finite-extensions-of-perfectoid-fields
  - thm-perfectoid-algebra-finite-etale-covers-have-tilting-full-faithfulness
  - thm-tilting-equivalence-for-perfectoid-spaces
  - def-dependent-choice
  - def-countable-choice
  - def-almost-module-and-almost-finite-etale-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 7.9"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §7"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice and Countable Choice. Let $(R,R^+)$ be a perfectoid affinoid $K$-algebra, let $X=\operatorname{Spa}(R,R^+)$, and let $U\subseteq X$ be an open affinoid perfectoid subspace. Taking global sections gives an equivalence from strongly finite étale covers of $U$ to finite étale algebras over $\mathcal O_X(U)$. For every finite étale $R$-algebra $S$, the natural topology makes $S$ a perfectoid $K$-algebra, and $S^{\circ a}$ is finite étale over $R^{\circ a}$ and uniformly almost finitely generated as an $R^{\circ a}$-module.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 7.9](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §7](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

Scholze's proof uses Huber's Example 1.6.6(ii), Lemma 2.2.8, and Proposition 1.6.7(ii), together with almost purity, finite-étale spreading-out, and gluing. Morrow §7 explicitly omits the commutative-algebra and gluing details. These exact external inputs and the affected claim are recorded in the batch notes; the theorem remains escalated.

