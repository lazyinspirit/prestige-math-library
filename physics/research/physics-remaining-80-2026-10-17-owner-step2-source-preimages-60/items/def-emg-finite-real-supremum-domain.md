---
id: def-emg-finite-real-supremum-domain
kind: definition
title: Finite-real supremum and infimum domain
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-real-numbers
- def-complete-ordered-field
- def-infimum
- thm-infimum-property
- thm-reals-cauchy-complete
dependency_roles:
  def-real-numbers: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-infimum: mathematical-premise
  thm-infimum-property: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: Infimum and supremum (Wikipedia)
    url: https://en.wikipedia.org/wiki/Infimum_and_supremum
  - title: Least-upper-bound property (Wikipedia)
    url: https://en.wikipedia.org/wiki/Least-upper-bound_property
  - title: W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1
    url: https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis
  - title: John K. Hunter, An Introduction to Real Analysis
    url: https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf
  - title: MIT 18.100A, Complete Lecture Notes
    url: https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf
dependency_level: 0
---

## Definition

Use the real ordered field of [[def-real-numbers]] and [[def-complete-ordered-field]]. For a nonempty set $S\subseteq\mathbb R$ bounded above, $\sup S$ denotes the unique real upper bound $u$ such that $u\le v$ for every upper bound $v$. Existence is the least-upper-bound property established for these reals by [[thm-reals-cauchy-complete]]; if $u,u'$ both satisfy it, $u\le u'$ and $u'\le u$ imply equality. The notation is restricted to this domain.

For nonempty $S$ bounded below, use [[def-infimum]] and [[thm-infimum-property]]: $\inf S=-\sup(-S)$, where $-S=\{-s:s\in S\}$. Indeed a lower bound $l$ for $S$ gives the upper bound $-l$ for $-S$; negating its least upper bound gives a lower bound for $S$ greater than every other one.

Neither $\sup\varnothing$ nor $\inf\varnothing$ is defined in $\mathbb R$: every real is an upper and lower bound, with no least upper or greatest lower bound. If another construction stipulates the value zero for an empty path family, that stipulation is a separate total definition, not $\sup\varnothing=0$. Infinite values require an explicitly specified extended ordered set; no extended-real field operations are introduced here.
