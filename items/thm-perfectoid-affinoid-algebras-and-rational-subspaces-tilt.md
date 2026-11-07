---
id: thm-perfectoid-affinoid-algebras-and-rational-subspaces-tilt
kind: theorem
title: "Perfectoid affinoid algebras and rational subspaces under tilting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-perfectoid-affinoid-k-algebra
  - def-affinoid-adic-spectrum-and-rational-subsets
  - thm-tilting-equivalence-for-perfectoid-k-algebras
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 6.3(i)–(ii)"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §5"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice. Let $(R,R^+)$ be a perfectoid affinoid $K$-algebra, let $X=\operatorname{Spa}(R,R^+)$, and let $(R^\flat,R^{\flat+})$ be its tilt with $X^\flat=\operatorname{Spa}(R^\flat,R^{\flat+})$. The map $x\mapsto x^\flat$ defined by $|f(x^\flat)|=|f^\sharp(x)|$ for $f\in R^\flat$ is a homeomorphism $X\to X^\flat$ and carries every rational subset $U\subseteq X$ to its corresponding rational subset $U^\flat\subseteq X^\flat$. For each such $U$, the completed affinoid pair $(\mathcal O_X(U),\mathcal O_X^+(U))$ is a perfectoid affinoid $K$-algebra, and its tilt is $(\mathcal O_{X^\flat}(U^\flat),\mathcal O_{X^\flat}^+(U^\flat))$.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 6.3(i)–(ii)](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §5](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

The proof in Scholze uses the approximation lemma of §6.2 to compare rational valuations and rational localizations. That argument is locally available in the source, but its perfectoid-algebra input is the still-escalated algebra-tilting equivalence above. No proof is asserted until that supplier and the full approximation argument are reconciled locally.

