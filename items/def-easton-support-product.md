---
id: def-easton-support-product
kind: definition
title: The Easton-support product of higher Cohen forcings
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-function, def-cohen-collapse-and-levy-collapse-forcings, def-cofinality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, conditions (15.8)-(15.12), printed pp.233-234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Definitions 51 and 53, PDF p.11"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  precheck: n/a
---

## Definition

Let $F$ be an Easton function ([[def-easton-function]]). A **condition** in the
Easton-support product $P(F)$ is a function $p$ with values in $\{0,1\}$ whose
domain is a set of triples $(\kappa,\alpha,\beta)$ with
$\kappa\in\operatorname{dom}(F)$, $\alpha<\kappa$ and $\beta<F(\kappa)$, subject
to the **Easton support condition**

$$\bigl\lvert\{\,(\kappa,\alpha,\beta)\in\operatorname{dom}(p):\kappa\le\gamma\,\}\bigr\rvert \;<\;\gamma \qquad\text{for every infinite regular cardinal } \gamma .$$

Each coordinate $\kappa$ carries the Cohen order
$\operatorname{Add}(\kappa,F(\kappa))=\operatorname{Fn}(F(\kappa)\times\kappa,2,{<}\kappa)$
([[def-cohen-collapse-and-levy-collapse-forcings]]), so the fibre
$p_{\kappa}(\alpha,\beta)=p(\kappa,\alpha,\beta)$ is a partial function
$\kappa\times F(\kappa)\to 2$ of domain size $<\kappa$. A condition $p$ is
**stronger** than $q$, written $p\le q$, exactly when $p\supseteq q$: stronger
conditions extend functions, and the empty function is the largest condition.
When $\operatorname{dom}(F)$ is a set, $P(F)$ is a set; when
$\operatorname{dom}(F)$ is a proper class, $P(F)$ is a proper class and its
conditions are still sets. The support condition at $\gamma=\kappa$ gives
$\lvert\operatorname{dom}(p_{\kappa})\rvert<\kappa$ for every
$\kappa\in\operatorname{dom}(F)$.

For an infinite regular $\lambda$ ([[def-cofinality]]), the **initial segment**
and the **tail** are the restrictions

$$p^{\le\lambda}=p\restriction\{(\kappa,\alpha,\beta):\kappa\le\lambda\}, \qquad p^{>\lambda}=p\restriction\{(\kappa,\alpha,\beta):\kappa>\lambda\},$$

with $P^{\le\lambda}=\{p^{\le\lambda}:p\in P(F)\}$ and
$P^{>\lambda}=\{p^{>\lambda}:p\in P(F)\}$. Each condition splits uniquely into these two restrictions, and each
restriction retains every support bound. Conversely, a head condition and a
tail condition have disjoint domains, so their union is a function. For every
infinite regular $\gamma$, its triples with $\kappa\le\gamma$ form the union
of two sets each of cardinality below $\gamma$, which again has cardinality
below $\gamma$. Thus union is the inverse of the map
$p\mapsto(p^{\le\lambda},p^{>\lambda})$, and both maps preserve extension.
This proves the isomorphism
$P(F)\cong P^{\le\lambda}\times P^{>\lambda}$ of forcing orders.
$P^{\le\lambda}$ is the Easton product of the fibres with $\kappa\le\lambda$,
$P^{>\lambda}$ the Easton product of the fibres with $\kappa>\lambda$, and both
split by first coordinate exactly as displayed.
