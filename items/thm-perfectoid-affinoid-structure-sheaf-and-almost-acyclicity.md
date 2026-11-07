---
id: thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity
kind: theorem
title: "Structure sheaf and almost acyclicity on perfectoid affinoids"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-perfectoid-affinoid-algebras-and-rational-subspaces-tilt
  - def-affinoid-adic-spectrum-and-rational-subsets
  - def-perfectoid-affinoid-k-algebra
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 6.3(iii)–(iv)"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §§5.5–5.6"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice. Let $(R,R^+)$ be a perfectoid affinoid $K$-algebra, let $X=\operatorname{Spa}(R,R^+)$, and let $\mathcal O_X$ and $\mathcal O_X^+$ be the rational-localization presheaves. Then $\mathcal O_X$ and $\mathcal O_X^+$ are sheaves on $X$. If $\mathfrak m_K=K^{\circ\circ}$, then for every integer $i>0$ the sheaf cohomology group $H^i(X,\mathcal O_X^+)$ is annihilated by $\mathfrak m_K$.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 6.3(iii)–(iv)](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §§5.5–5.6](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

Scholze's sheaf and cohomology proof invokes Tate's acyclicity theorem in Bosch–Güntzer–Remmert, *Non-Archimedean Analysis*, §8.2.1, Theorem 1, and Huber's affinoid-spectrum results. Morrow §5 gives the analytic route but leaves the foundational spectral-space and stable-uniformity details open. The exact local suppliers and their hypotheses are recorded in the batch notes; no complete Čech-acyclicity or sheaf proof is supplied here.

