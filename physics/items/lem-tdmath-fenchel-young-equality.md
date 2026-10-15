---
id: lem-tdmath-fenchel-young-equality
kind: lemma
title: "Fenchel inequality and its equality condition"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-tdmath-fenchel-transform-and-subgradient
dependency_roles:
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §23, Theorem 23.5"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §2.3"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
    - title: "Zhiyuan Li, Lecture 4: Convex Conjugates and Marginal Duality"
      url: "https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-4___-Convex-Conjugates___-and-Marginal-Duality/"
verification:
  precheck: n/a
---

## Statement

Let $f:\mathbb R^d\to\overline{\mathbb R}$ be proper, let $x\in\operatorname{dom}f$, and let $p\in\mathbb R^d$. Then $f^*(p)\ge\langle p,x\rangle-f(x)$. Equality holds exactly when $p\in\partial f(x)$, equivalently when $x$ attains the supremum defining $f^*(p)$; in that case the supremum is finite.

## Facts & Assumptions

**Given:** The Fenchel conjugate and subdifferential from [[def-tdmath-fenchel-transform-and-subgradient]].

[F1] [[def-tdmath-fenchel-transform-and-subgradient]]: $f^*(p)$ is the supremum of $\langle p,y\rangle-f(y)$ over $y\in\operatorname{dom}f$, and $p\in\partial f(x)$ means $f(y)\ge f(x)+\langle p,y-x\rangle$ for every $y$.

## Proof

**Proof technique:** direct.

1.1 Since $x\in\operatorname{dom}f$, the value $\langle p,x\rangle-f(x)$ is one of the values over which $f^*(p)$ is the supremum; the stated inequality follows. [F1, given]

2.1 Equality means every $y\in\operatorname{dom}f$ satisfies $\langle p,y\rangle-f(y)\le\langle p,x\rangle-f(x)$, which rearranges to the subgradient inequality; for $y\notin\operatorname{dom}f$ that inequality is automatic because $f(y)=+\infty$. Conversely the subgradient inequalities make the value at $x$ a finite upper bound attained there, so $f^*(p)=\langle p,x\rangle-f(x)$. [F1, algebra] ∎
