---
id: def-rational-vertex-algebra
kind: definition
title: Rationality in the admissible-module convention
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-admissible-vertex-algebra-module
  - def-vertex-algebra-module
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras, §2 and Theorem 5.3
      url: https://arxiv.org/pdf/math/0607679
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, §1.1
      url: https://arxiv.org/pdf/1012.4193
---

## Definition

In this page, a conformal vertex algebra of CFT type $V$ is **rational** if every admissible $V$-module $M=\bigoplus_{n\ge0}M(n)$, as defined in [[def-admissible-vertex-algebra-module]], is an internal direct sum $M=\bigoplus_{\alpha\in I}S_\alpha$ of irreducible admissible submodules. Each $S_\alpha$ is simple as a $V$-module in the sense of [[def-vertex-algebra-module]] and carries the inherited grading $S_\alpha=\bigoplus_{n\ge0}(S_\alpha\cap M(n))$; thus the decomposition respects the specified admissible grading. The zero module is the empty direct sum. This is the admissible-module semisimplicity convention. The definition does not include a finite-number-of-simple-modules condition, $C_2$-cofiniteness, self-contragredience, or a tensor-category conclusion; each is a separate property unless a theorem explicitly assumes or proves it.

Terminology varies across the literature. In particular, the “finite reductivity” conditions used in some tensor-category treatments include semisimplicity, finitely many irreducible modules, and finite fusion rules in their chosen module class. No equivalence between rationality and any Zhu-algebra, $C_2$-cofiniteness, fusion, or modularity condition is part of this definition.
