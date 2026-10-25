---
id: lem-qftx-coupled-penrose-round-sphere-curvature
kind: lemma
title: Scalar curvature of the unit round four-sphere
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 1
deps:
  - def-qftx-coupled-penrose-incidence-geometry
dependency_roles:
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_base: "ZF"
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§2, printed p. 49: the chosen metric has scalar curvature 12."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 493–494: scalar-curvature normalization for the round four-sphere."
verification:
  precheck: pass
---

## Statement

For the unit round metric on $S^4$ in the incidence definition, the scalar curvature in the convention $R=\sum_{a,b=1}^{4}g(R(e_a,e_b)e_b,e_a)$ for an orthonormal frame is the constant $R=12$.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[Rawnsley, §2, p. 49](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 493–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** The sphere is the unit round four-sphere, whose sectional curvature is $+1$, and scalar curvature is the trace of its Ricci tensor in the displayed convention.

[F1] The metric is the unit round metric on $S^4$. [[def-qftx-coupled-penrose-incidence-geometry]]

## Proof

1.1 In dimension four an orthonormal frame has $\binom{4}{2}=6$ unordered two-planes. Each has sectional curvature $1$ for the unit round metric, so the sum of sectional curvatures over those six planes is $6$. [given, F1, algebra]

2.1 The scalar-curvature trace sums over ordered pairs $(a,b)$; the diagonal terms vanish and each unordered pair occurs twice. Therefore $R=2\sum_{1\le a<b\le4}K(e_a,e_b)=2\cdot6=12$. [given, F1, step 1.1, algebra] ∎
