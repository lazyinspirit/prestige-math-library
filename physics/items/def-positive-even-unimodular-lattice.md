---
id: def-positive-even-unimodular-lattice
kind: definition
title: Positive-definite even unimodular lattice
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-full-euclidean-lattice-and-covolume
  - def-inner-product-space
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - thm-gram-schmidt-orthonormalisation
dependency_roles:
  def-full-euclidean-lattice-and-covolume: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104-107; even self-dual lattice conditions and the E8 and rank-16 constructions."
    - title: "Timo Weigand, Introduction to String Theory, Heidelberg lecture notes, winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.9, printed pp. 151-154, and §7.2, printed pp. 157-160; the heterotic rank-16 internal sector and its two gauge-group alternatives."
---

## Definition

Let $n\ge1$ and let $V$ be an $n$-dimensional real vector space with a positive-definite inner product $\langle\cdot,\cdot\rangle$. An orthonormal basis of $V$ gives a linear inner-product-preserving isomorphism $U:V\to\mathbb R^n$. A **full lattice** in $V$ is a subgroup $\Lambda\subseteq V$ such that $U(\Lambda)$ is a full Euclidean lattice: equivalently, $U(\Lambda)=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$ for a real basis $b_1,\ldots,b_n$ of $\mathbb R^n$. This condition is independent of the orthonormal basis, because a change between two such bases is an invertible orthogonal linear map and therefore carries real bases and their integer spans to real bases and their integer spans.

The **dual lattice** is $\Lambda^*:=\{y\in V:\langle y,x\rangle\in\mathbb Z\text{ for every }x\in\Lambda\}$. The lattice is **integral** if $\langle x,y\rangle\in\mathbb Z$ for every $x,y\in\Lambda$, **even** if $\langle x,x\rangle\in2\mathbb Z$ for every $x\in\Lambda$, and **unimodular** if $\Lambda=\Lambda^*$. A **positive-definite even unimodular lattice of rank $n$** is a full lattice in an $n$-dimensional positive-definite real inner-product space that is integral, even, and unimodular.

## Definition references

[[def-full-euclidean-lattice-and-covolume]]

[[def-inner-product-space]]

[[def-orthogonal-vectors-sets-and-orthonormal-bases]]

[[thm-gram-schmidt-orthonormalisation]]

## Remarks

Evenness implies integrality: for $x,y\in\Lambda$, the polarization identity gives $2\langle x,y\rangle=\langle x+y,x+y\rangle-\langle x,x\rangle-\langle y,y\rangle\in2\mathbb Z$, hence $\langle x,y\rangle\in\mathbb Z$. The definition retains both conditions so each is visible in later hypotheses.
