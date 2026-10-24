---
id: ex-daha-a1-first-symmetric-macdonald-eigenfunctions
kind: example
title: "The first symmetric A1 Macdonald eigenfunctions"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-daha-a1-symmetric-macdonald-operator, thm-daha-a1-macdonald-eigenfunctions]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources: []
---
## Example
Let $m_0=1$ and $m_1=z+z^{-1}$. The first two monic symmetric rank-one Macdonald eigenfunctions are
$$
P_0(z)=1,\qquad P_1(z)=z+z^{-1}
$$
with eigenvalues $t+t^{-1}$ and $tq+t^{-1}q^{-1}$, respectively.
## Facts & Assumptions
**Given:** $q\in K^\times$ is not a root of unity, $t\in K^\times$, $t^2\ne q^{-N}$ for every positive integer $N$, and $\mathcal D$ is the rank-one symmetric Macdonald operator.

[F1] [[def-daha-a1-symmetric-macdonald-operator]]: $\mathcal Df=(tz^2-t^{-1})(z^2-1)^{-1}f(qz)+(t^{-1}z^2-t)(z^2-1)^{-1}f(q^{-1}z)$.

[F2] [[thm-daha-a1-macdonald-eigenfunctions]]: the monic symmetric eigenfunction with leading orbit sum $m_n$ is unique when $q$ is not a root of unity and $t^2\ne q^{-N}$ for every positive integer $N$.
## Verification

1.1 For $f=1$, [F1] gives $\mathcal D1=(A+B)1=(t+t^{-1})1$. Since there is no lower orbit sum below $m_0=1$, uniqueness in [F2] yields $P_0=1$. [F1, F2, given, algebra]

2.1 Applying [F1] to $m_1$ and collecting over the denominator $z^2-1$ gives $\mathcal Dm_1=\frac{(tz^2-t^{-1})(qz+q^{-1}z^{-1})+(t^{-1}z^2-t)(q^{-1}z+qz^{-1})}{z^2-1}=(tq+t^{-1}q^{-1})(z+z^{-1})$. The numerator equality follows by expansion: the $z$ terms cancel and the remaining numerator is $(tq+t^{-1}q^{-1})(z^3-z^{-1})$. Thus $m_1$ is the monic eigenfunction with leading orbit sum $m_1$, and [F2] gives $P_1=m_1$. [F1, F2, algebra] ∎
