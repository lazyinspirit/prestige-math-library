---
id: def-cft-2d-reflection-positive-euclidean-data
kind: definition
title: Reflection-positive Euclidean field data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-schwinger-hierarchy
  - def-real-and-complex-inner-product-space
dependency_roles:
  def-cft-2d-schwinger-hierarchy: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, arXiv:1203.3991v2
      url: https://arxiv.org/pdf/1203.3991
      locator: Section 3, PDF pp. 9–10; OS data and reflection positivity are distinct from clustering and the linear-growth condition.
    - title: Arthur Jaffe, Constructive Quantum Field Theory
      url: https://arthurjaffe.net/Assets/pdf/CQFT.pdf
      locator: Section 4, PDF pp. 5–6; free-field reflection-positivity operator condition and its Hilbert-space role.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/def-cft-2d-reflection-positive-euclidean-data.md
---

## Definition

Use the two-dimensional hierarchy and bilinear distribution-pairing convention defined earlier on this page. Write Euclidean coordinates as $(t,x)\in\mathbb R^2$, set $O_+=\{(t,x):t>0\}$, and let $\vartheta(t,x)=(-t,x)$. For $n\geq1$, let $\mathcal D_{\mathrm{sym}}(O_+^n)$ be the smooth compactly supported complex test functions on $O_+^n$ invariant under permutations of their $n$ two-dimensional argument blocks; set the degree-zero test space to $\mathbb C$. The reflection of a degree-$m$ test function is the antilinear map
$$(\Theta f_m)(z_1,\ldots,z_m)=\overline{f_m(\vartheta z_1,\ldots,\vartheta z_m)},\qquad \Theta f_0=\overline{f_0}.$$

For a finite family $F=(a_0,f_0;\ldots;a_N,f_N)$ with $a_j\in\mathbb C$ and $f_j\in\mathcal D_{\mathrm{sym}}(O_+^j)$ (using $f_0\in\mathbb C$), define
$$Q_S(F)=\sum_{j,k=0}^{N}\overline{a_j}a_k\,S_{j+k}(\Theta f_j\otimes f_k).$$
The tensor $\Theta f_j\otimes f_k$ is a compactly supported smooth test function on $(\mathbb R^2)^{j+k}$; for $j+k=0$ the term means $S_0\overline{f_0}f_0$. The hierarchy is **reflection-positive on the positive-time test algebra** when $Q_S(F)\in[0,\infty)$ for every such finite family. This scalar form is conjugate-linear in its first polynomial variable and linear in its second; when expressed using the imported convention that an inner product is linear in its first variable, the corresponding form is obtained by reversing the two arguments. No quotient or Hilbert-space completion is asserted here.

Reflection positivity is only this positivity condition. Euclidean covariance, block symmetry, clustering, regularity, and any linear-growth hypothesis remain distinct clauses; this definition alone is not an Osterwalder–Schrader reconstruction theorem.

## Definition references

[[def-cft-2d-schwinger-hierarchy]]

[[def-real-and-complex-inner-product-space]]
