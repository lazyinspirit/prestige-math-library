---
id: def-tdmath-finite-region-relative-entropy
kind: definition
title: Relative Entropy of Probability Measures
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Assume AC. If $P$ and $Q$ are probability measures on the same measurable space, define
$$D(P\Vert Q)=\begin{cases}\displaystyle\int h\log h\,dQ,&P\ll Q\text{ and }h=dP/dQ,\\+\infty,&P\not\ll Q.\end{cases}$$
Use $0\log0=0$. The Radon–Nikodym derivative $h$ is unique up to $Q$-almost-everywhere equality, so the integral is independent of its representative. Its negative part is finite because $-u\log u\leq1/e$ for $0\leq u\leq1$ and $Q$ is a probability; hence $D(P\Vert Q)$ is a well-defined extended real number.
