---
id: def-qftx-analytic-coherent-module
kind: definition
title: "Coherent module sheaves on complex manifolds"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-ringed-space
  - def-module-on-ringed-space
  - def-kernel-cokernel-image-sheaves
  - def-stalk-of-presheaf
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-ringed-space: mathematical-premise
  def-module-on-ringed-space: mathematical-premise
  def-kernel-cokernel-image-sheaves: mathematical-premise
  def-stalk-of-presheaf: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §3.2.1, Definitions (3.8) and (3.11), local finite type and coherence"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
    - title: "Joachim Wehler, Stein Manifolds, §4.2, Definitions 4.25–4.26"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $(X,\mathcal O_X)$ be a ringed space, so $X$ is a topological space and $\mathcal O_X$ is a sheaf of commutative rings. An $\mathcal O_X$-module sheaf $\mathcal F$ is **locally of finite type** if for every $x\in X$ there are an open neighborhood $U$ of $x$, a finite integer $r\ge0$, and sections $s_1,\ldots,s_r\in\mathcal F(U)$ such that their germs generate $\mathcal F_y$ as an $\mathcal O_{X,y}$-module for every $y\in U$.

For an open $V\subseteq X$, a finite integer $p\ge0$, and an $\mathcal O_X$-module morphism $\phi:\mathcal O_V^{\oplus p}\to\mathcal F|_V$, its **relation sheaf** is the kernel sheaf $\ker\phi$. The module sheaf $\mathcal F$ is **coherent** if it is locally of finite type and, for every such $V$, $p$, and $\phi$, the relation sheaf $\ker\phi$ is locally of finite type. Here $\mathcal O_V^{\oplus0}$ is the zero module sheaf.

In particular, for a finite tuple $f_1,\ldots,f_p\in\mathcal O_X(U)$, its holomorphic relation sheaf is the kernel of the morphism $\mathcal O_U^{\oplus p}\to\mathcal O_U$ that sends $(a_1,\ldots,a_p)$ to $\sum_{j=1}^p a_jf_j$. The structure sheaf is coherent when it is coherent as a module over itself. If $M$ is a complex manifold, an **analytic coherent module on $M$** means a coherent module sheaf over its sheaf $\mathcal O_M$ of holomorphic functions.

## Definition references

[[def-ringed-space|Ringed space and structure sheaf]]

[[def-module-on-ringed-space|Module sheaf on a ringed space]]

[[def-kernel-cokernel-image-sheaves|Kernel sheaf]]

[[def-stalk-of-presheaf|Stalk of a presheaf]]

[[def-complex-manifolds-and-holomorphic-vector-bundles|Complex manifold and holomorphic vector bundle conventions]]

[Demailly, Chapter II §3.2.1, Definitions (3.8) and (3.11)](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §4.2, Definitions 4.25–4.26](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)
