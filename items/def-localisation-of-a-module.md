---
id: def-localisation-of-a-module
kind: definition
title: "Localisation of a module at a multiplicative subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-multiplicative-subset-and-localisation]
justified_by: [lem-localised-module-fraction-equivalence-is-an-equivalence-relation, lem-localised-module-addition-independent-of-representatives, lem-localised-module-scalar-action-independent-of-representatives]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.9: Localization"
      url: "https://stacks.math.columbia.edu/tag/00CM"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $S \subseteq R$ be a multiplicative subset, and let $M$ be a left $R$-module. On $M \times S$, define
$$
(m,s) \sim (n,t) \quad \Longleftrightarrow \quad u(tm-sn)=0 \text{ for some } u \in S.
$$

The **localisation** of $M$ at $S$ is the set $S^{-1}M$ of equivalence classes for this relation, and the class of $(m,s)$ is written $m/s$.

The proposed addition and $S^{-1}R$-scalar action are
$$
\frac{m}{s}+\frac{n}{t}:=\frac{tm+sn}{st}, \qquad \frac{a}{u}\cdot\frac{m}{s}:=\frac{am}{us}.
$$
The canonical map is
$$
\lambda_M:M \longrightarrow S^{-1}M, \qquad m \longmapsto \frac{m}{1}.
$$

The relation, the addition formula, and the scalar action are justified by [[lem-localised-module-fraction-equivalence-is-an-equivalence-relation]], [[lem-localised-module-addition-independent-of-representatives]], and [[lem-localised-module-scalar-action-independent-of-representatives]].
