---
id: def-tdmath-fenchel-transform-and-subgradient
kind: definition
title: "Fenchel conjugate, biconjugate, and subdifferential"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-complete-ordered-field
  - def-euclidean-inner-product
  - def-tdmath-extended-convex-function
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-tdmath-extended-convex-function: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §12 and §23"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §§2.1 and 2.3"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
    - title: "Zhiyuan Li, Lecture 4: Convex Conjugates and Marginal Duality"
      url: "https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-4___-Convex-Conjugates___-and-Marginal-Duality/"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Definition

Let $f:\mathbb R^d\to\overline{\mathbb R}$ be proper in the sense of [[def-tdmath-extended-convex-function]]. Its **Fenchel conjugate** is $f^*:\mathbb R^d\to\overline{\mathbb R}$,

$$f^*(p):=\sup_{x\in\operatorname{dom}f}\bigl(\langle p,x\rangle-f(x)\bigr).$$

The supremum is taken in $\overline{\mathbb R}$; its defining set is nonempty and consists of real numbers, so $f^*(p)\in\mathbb R\cup\{+\infty\}$. The **biconjugate** is an extended-real expression that may also take $-\infty$ when its defining supremum is over the empty set:

$$f^{**}(x):=\sup_{\{p\in\mathbb R^d:f^*(p)<+\infty\}}\bigl(\langle p,x\rangle-f^*(p)\bigr),$$

with the convention $\sup\varnothing=-\infty$. For $x\in\operatorname{dom}f$, the **subdifferential** is

$$\partial f(x):=\{p\in\mathbb R^d:f(y)\ge f(x)+\langle p,y-x\rangle\text{ for every }y\in\mathbb R^d\};$$

set $\partial f(x)=\varnothing$ for $x\notin\operatorname{dom}f$. A vector in $\partial f(x)$ is a subgradient at $x$. All pairings use [[def-euclidean-inner-product]].

