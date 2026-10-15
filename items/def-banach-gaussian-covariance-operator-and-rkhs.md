---
id: def-banach-gaussian-covariance-operator-and-rkhs
kind: definition
title: "Covariance operator and reproducing-kernel Hilbert space of a Banach Gaussian"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - lem-borel-map-into-separable-banach-is-strongly-measurable
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
justified_by:
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
forward_refs: []
aliases: []
axiom_use: "AC is stated in the covariance/RKHS well-definedness supplier."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1, printed pp. 1436–1437: covariance operator and RKHS construction."
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 3.1: covariance operator, Cameron–Martin space, and its canonical embedding."
---

## Definition

Assume AC. Let $W$ be a centered Borel Gaussian random element in a real separable
Banach space $B$, with law $\mu$. For $\ell\in B^*$ define
$$C\ell=E[\ell(W)W]\in B,\qquad Q(\ell,m)=E[\ell(W)m(W)]\quad(\ell,m\in B^*).$$
The **Cameron–Martin reproducing-kernel Hilbert space** $H$ is the completion
of $B^*/N$ in the inner product induced by $Q$, where
$N=\{\ell\in B^*:Q(\ell,\ell)=0\}$. The canonical map sends the class of
$\ell$ to $C\ell$ and extends continuously to an injective map $i:H\to B$;
we identify $H$ with its image in $B$ and use the completed Hilbert norm
$\|\cdot\|_H$. The preceding construction is well-defined by
[[thm-banach-gaussian-covariance-rkhs-is-well-defined]].

The term *RKHS* here denotes this covariance-induced Hilbert space of shifts
inside $B$; it is not the space of all continuous functions on an arbitrary
index set.
