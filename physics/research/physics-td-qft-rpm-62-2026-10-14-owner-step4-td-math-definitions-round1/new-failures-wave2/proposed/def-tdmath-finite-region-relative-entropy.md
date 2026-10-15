---
id: def-tdmath-finite-region-relative-entropy
kind: definition
title: Relative entropy of probability measures
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-axiom-of-choice, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, def-probability-measure, def-natural-logarithm]
justified_by: []
dependency_roles:
  def-probability-measure: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, printed p.184 / PDF p.7, finite-region relative entropy and its variational representation"
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Sections 3.3 and 6, printed pp.40–41 and 48–50 / PDF pp.6 and 9–12, relative entropy and stationary entropy density"
---

## Definition

Assume AC. If $P$ and $Q$ are probability measures on the same measurable space, define
$$D(P\Vert Q)=\begin{cases}\displaystyle\int h\log h\,dQ,&P\ll Q\text{ and }h=dP/dQ,\\+\infty,&P\not\ll Q.\end{cases}$$
Use $0\log0=0$. The Radon–Nikodym derivative $h$ is unique up to $Q$-almost-everywhere equality, so the integral is independent of its representative. Its negative part is finite because $-u\log u\leq1/e$ for $0\leq u\leq1$ and $Q$ is a probability; hence $D(P\Vert Q)$ is a well-defined extended real number.
