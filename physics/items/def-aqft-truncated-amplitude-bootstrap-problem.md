---
id: def-aqft-truncated-amplitude-bootstrap-problem
kind: definition
title: Finite truncated forward-amplitude bootstrap data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-aqft-scattering-amplitude-input
dependency_roles:
  def-aqft-scattering-amplitude-input: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: 'Allan Adams, Nima Arkani-Hamed, Sergei Dubovsky, Alberto Nicolis, and Riccardo Rattazzi, Causality, Analyticity and an IR Obstruction to UV Completion'
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: 'Section 4, PDF pp. 14–19: forward Taylor coefficients and the distinction between amplitude coefficients and arbitrary EFT coefficients.'
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Section 2.2, equations (11)–(15), PDF pp. 2–3: positive dispersion moments and constraints on low-energy amplitude derivatives.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Section 3.3.1, printed pp. 96–98: the forward second-derivative constraint and its coefficient interpretation.'
---

## Definition

Let $B(v)$ and $\nu_0=2m^2>0$ be the pole-subtracted forward-amplitude data of the amplitude-input definition. In addition to being even and holomorphic near $v=0$, retain its real-analyticity condition $B(\overline v)=\overline{B(v)}$. If $B(v)=\sum_{j\ge0}\beta_jv^j$ near $0$, uniqueness of the Taylor expansion gives $\beta_j=\overline{\beta_j}$ from this condition and $\beta_{2n+1}=0$ from evenness. Hence the even Taylor coefficients are real. Fix an integer truncation order $N\ge1$. For $n\ge1$ define the Taylor coefficient $c_n=B^{(2n)}(0)/(2n)!$ and the dimensionless forward on-shell coefficient $b_k=\nu_0^{2k+2}c_{k+1}\in\mathbb R$ for $0\le k\le N$. Since $v$ and $\nu_0$ have units $(\text{mass})^2$, $c_n$ has units $(\text{mass})^{-4n}$ and $b_k$ is dimensionless. Here “Wilson coefficient” refers only to this normalized on-shell amplitude coordinate; it does not identify a generic coefficient of an off-shell Lagrangian operator basis.

For each integer $r\ge0$ with $2r\le N$, form the quadratic constraint

$$\sum_{i,j=0}^{r}a_i a_j b_{i+j}\ge0\qquad\text{for every }(a_0,\ldots,a_r)\in\mathbb R^{r+1}.$$

For each integer $r\ge0$ with $2r+1\le N$, form the two additional quadratic constraints

$$\sum_{i,j=0}^{r}a_i a_j b_{i+j+1}\ge0,\qquad \sum_{i,j=0}^{r}a_i a_j\bigl(b_{i+j}-b_{i+j+1}\bigr)\ge0\qquad\text{for every }(a_0,\ldots,a_r)\in\mathbb R^{r+1}.$$

The **finite order-$N$ forward-amplitude bootstrap feasible set** $\mathcal K_N$ is the subset of $\mathbb R^{N+1}$ consisting of vectors $(b_0,\ldots,b_N)$ that satisfy every applicable constraint above. The finite truncated bootstrap problem is to determine whether a supplied coefficient vector belongs to $\mathcal K_N$. Passing this finite test is a necessary condition supplied by forward positivity; it is not defined to be sufficient for the existence of a full amplitude-data package as defined above.

## Definition references

[[def-aqft-scattering-amplitude-input]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, §4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §3.3.1](https://arxiv.org/pdf/2412.08690.pdf)
