---
id: def-qft-weak-operator-valued-tempered-distribution
kind: definition
title: Weak operator-valued tempered distribution on a common domain
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-tempered-distribution
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-tempered-distribution: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012), §2.1, proof of Theorem 2.6"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "PDF pp. 15–17: fields act on the dense GNS domain and their matrix elements are tempered distributions."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§2.3, printed pp. 7–9: common-domain GNS representations and the first-variable-linear pairing convention used locally."
---

## Definition

Let $S=\mathcal S(\mathbb R^4;\mathbb C)$ with its Schwartz topology, let $H$
be a complex Hilbert space, and let $D\subseteq H$ be a dense complex linear
subspace. Use the inner product linear in its first argument and conjugate-linear
in its second, as in [[def-real-and-complex-inner-product-space]]. A **weak
operator-valued tempered distribution on the common domain $D$** is a
complex-linear map
$$\Phi:S\longrightarrow\operatorname{Lin}(D),$$
where $\operatorname{Lin}(D)$ is the vector space of linear maps $D\to D$,
such that for every $u,v\in D$ the scalar map
$$f\longmapsto (\Phi(f)u,v)_H$$
is a continuous complex-linear functional on $S$, hence an element of
$S'=\mathcal S'(\mathbb R^4)$ by [[def-tempered-distribution]]. In particular,
every smeared map preserves the same domain $D$. This definition is weak in
the matrix-coefficient sense; it does not define point values $\Phi(x)$,
operators on all of $H$, or self-adjoint closures.
