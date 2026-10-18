---
id: def-separable-algebra-and-bimodule-in-fusion-category
kind: definition
title: Separable algebra objects and bimodules in a fusion category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-fusion-and-multifusion-category
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.3 and 2.1.3
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Definition

In a monoidal category $\mathcal C$, an **algebra object** is an object $A$ with multiplication $m_A:A\otimes A\to A$ and unit $\eta_A:\mathbf1\to A$ satisfying associativity and unit equations with the associator and unitors of $\mathcal C$. It is **separable** if there is an $A$-bimodule morphism $\sigma_A:A\to A\otimes A$ with $m_A\sigma_A=1_A$. The composite $e_A=\sigma_A\eta_A:\mathbf1\to A\otimes A$ is its **separability element**. It satisfies $m_Ae_A=\eta_A$ and the centrality equation
$$ (m_A\otimes1_A)\circ(1_A\otimes e_A)=(1_A\otimes m_A)\circ(e_A\otimes1_A):A\longrightarrow A\otimes A,$$
with associators inserted. In element notation these are $\sum_i x_i y_i=1_A$ and $\sum_i a x_i\otimes y_i=\sum_i x_i\otimes y_i a$.

A **left $A$-module** is an object $M\in\mathcal C$ with an associative unital action $l_M:A\otimes M\to M$; a **right $A$-module** has an associative unital action $r_M:M\otimes A\to M$. Write $\operatorname{Mod}^{l}_{\mathcal C}(A)$ and $\operatorname{Mod}^{r}_{\mathcal C}(A)$ for their categories and module morphisms. The category of left $A$-modules is a right $\mathcal C$-module category by $M\odot X:=M\otimes X$, with left $A$-action obtained by associating $A\otimes(M\otimes X)$ to $(A\otimes M)\otimes X$ and applying $l_M\otimes1_X$, and the inherited associator and unitor. An **$A$-$B$ bimodule** is an object $X\in\mathcal C$ with commuting left and right actions $A\otimes X\to X$ and $X\otimes B\to X$, each associative and unital. A bimodule morphism preserves both actions.

The **regular $A$-$A$ bimodule** is the object $A$ with both actions given by $m_A$.

Given an $A$-$B$ bimodule $X$ and a $B$-$D$ bimodule $Y$, a morphism $q:X\otimes Y\to Z$ is **balanced over $B$** if
$$q\circ(r_X\otimes1_Y)=q\circ(1_X\otimes l_Y):X\otimes B\otimes Y\longrightarrow Z.$$
A relative tensor product $X\otimes_B Y$, when it exists, is an object with a balanced map $q_B:X\otimes Y\to X\otimes_B Y$ universal among balanced maps. Existence is not part of this definition.
