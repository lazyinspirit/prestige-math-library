---
id: def-emg-extended-pointwise-product
kind: definition
title: "Extended pointwise product with zero at infinite factors"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-extended-reals
dependency_roles:
  def-extended-reals: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, extended-real multiplication convention"
      url: "https://measure.axler.net/MIRA.pdf"
dependency_level: 0
---

## Definition

Let $\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}$ be the ordered set of [[def-extended-reals]]. Define a new total operation $\star:\overline{\mathbb R}\times\overline{\mathbb R}\to\overline{\mathbb R}$ as follows. If $a=0$ or $b=0$, put $a\star b=0$. If both factors are finite, put $a\star b=ab$ using real multiplication. In the remaining cases both factors are nonzero and at least one is infinite; put

$$a\star b:=\begin{cases}+\infty,&\operatorname{sgn}(a)\operatorname{sgn}(b)=1,\\-\infty,&\operatorname{sgn}(a)\operatorname{sgn}(b)=-1,\end{cases}$$

where $\operatorname{sgn}(a)=1$ for $a>0$ and $\operatorname{sgn}(a)=-1$ for $a<0$ in the extended order. The clauses exhaust the domain and agree when a zero factor is finite, so they specify a unique value for every pair. Thus $0\star(\pm\infty)=0$, $(+\infty)\star(-2)=-\infty$, and $(-\infty)\star(-\infty)=+\infty$.

For any set $X$ and maps $f,g:X\to\overline{\mathbb R}$, their **extended pointwise product with zero at infinite factors** is the map $f\star g:X\to\overline{\mathbb R}$ defined by $(f\star g)(x)=f(x)\star g(x)$.

## Remarks

This explicitly chosen operation does not redefine the partial extended-real arithmetic of [[def-extended-reals]], where $0\cdot\infty$ is left undefined. It is not a limit rule or a field multiplication. No measurability theorem is part of this definition: such a theorem must specify the measurable structures and check the finite, zero, and positive or negative infinite factor sets separately.
