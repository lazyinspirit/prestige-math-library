---
id: lem-qftx-gaga-scalar-pseudoconvex-acyclicity
kind: lemma
title: Scalar holomorphic sheaf acyclicity on pseudoconvex domains
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-sheaf-cohomology-derived-global-sections
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - thm-dolbeault-lemma-polydisc
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - cor-dolbeault-vanishing-pseudoconvex-domain
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bigraded-complex-differential-forms: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  thm-cauchy-riemann-characterization-in-several-complex-variables: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  cor-dolbeault-vanishing-pseudoconvex-domain: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IV §6 and Chapter VIII §6, printed pp. 212–215 and 377–379: the Dolbeault resolution and pseudoconvex scalar vanishing."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 1–3: coherent analytic cohomology is computed through acyclic local section data."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume full AC. Let $m\ge1$ and let $\Omega\subseteq\mathbb C^m$ be a Hartogs-pseudoconvex domain. Let $\mathcal O_\Omega$ be its sheaf of holomorphic functions. Then the derived sheaf cohomology satisfies $H^q(\Omega,\mathcal O_\Omega)=0$ for every integer $q>0$.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IV §6 and Chapter VIII §6](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; an integer $m\ge1$; and a Hartogs-pseudoconvex domain $\Omega\subseteq\mathbb C^m$.

[A1] Full AC is the set-choice postulate ([[def-axiom-of-choice]]).

[F1] Smooth forms of bidegree $(0,j)$ form sheaves $\mathcal A^{0,j}$ with differential $\bar\partial$ and $\bar\partial^2=0$ ([[def-bigraded-complex-differential-forms]]).

[F2] Under full AC, the local Dolbeault lemma makes the smooth $(0,\bullet)$-complex exact in positive degrees on polydiscs ([[thm-dolbeault-lemma-polydisc]]).

[F3] A $C^1$ function with all coordinate $\bar z$-derivatives zero is holomorphic ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F4] Each sheaf of smooth differential-form modules is acyclic for global sections on every open subset of a smooth manifold ([[thm-smooth-function-module-sheaves-are-acyclic]]).

[F5] An exact resolution by global-section-acyclic sheaves computes right-derived global sections ([[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-sheaf-cohomology-derived-global-sections]]).

[F6] On a Hartogs-pseudoconvex domain in $\mathbb C^m$, every smooth $\bar\partial$-closed $(0,q)$-form is $\bar\partial$-exact for $1\le q\le m$ ([[cor-dolbeault-vanishing-pseudoconvex-domain]]).

## Proof

1.1 On each coordinate polydisc in $\Omega$, [F2] says the sequence of sheaves $0\to\mathcal O_\Omega\to\mathcal A^{0,0}\xrightarrow{\bar\partial}\mathcal A^{0,1}\xrightarrow{\bar\partial}\cdots$ is exact in positive degree. Its degree-zero kernel is exactly $\mathcal O_\Omega$: a smooth function in that kernel has all $\bar z$-derivatives zero and is holomorphic by [F3]. Thus it is an exact sheaf resolution on $\Omega$. [F1, F2, F3, given]

2.1 Each resolution term is a sheaf of modules over smooth functions and is $\Gamma(\Omega,-)$-acyclic by [F4]. The acyclic-resolution theorem [F5] therefore identifies $H^q(\Omega,\mathcal O_\Omega)$ with the cohomology in degree $q$ of the global smooth Dolbeault complex. [A1, F4, F5, step 1.1]

3.1 For $1\le q\le m$, [F6] makes every closed global smooth $(0,q)$-form exact, so the degree-$q$ cohomology in step 2.1 is zero. For $q>m$, the complex has no $(0,q)$-forms on an $m$-dimensional complex manifold, so its degree-$q$ cohomology is zero as well. Hence $H^q(\Omega,\mathcal O_\Omega)=0$ for every $q>0$. [A1, F1, F6, step 2.1, algebra] ∎
