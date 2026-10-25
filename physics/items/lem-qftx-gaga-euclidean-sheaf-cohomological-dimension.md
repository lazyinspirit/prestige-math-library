---
id: lem-qftx-gaga-euclidean-sheaf-cohomological-dimension
kind: lemma
title: "Ordinary sheaf cohomology on Euclidean open sets vanishes above real dimension"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "A bound for ordinary derived sheaf cohomology on Euclidean open sets; no physical model or empirical claim is involved."
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-sheaf-cohomology-derived-global-sections
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-global-cech-cohomology-directed-limit
  - lem-qftx-gaga-euclidean-finite-order-refinement
  - thm-qftx-gaga-metric-cech-derived-comparison
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-cech-cochain-complex-open-cover: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  def-global-cech-cohomology-directed-limit: mathematical-premise
  lem-qftx-gaga-euclidean-finite-order-refinement: mathematical-premise
  thm-qftx-gaga-metric-cech-derived-comparison: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Ian Agol, Complex Analysis and Riemann Surfaces, course notes"
      url: "https://math.berkeley.edu/~ianagol/complexriemann.pdf"
      locator: "§6, Vanishing theorem by dimension, Theorem 6.5, printed/PDF p. 29; the local proof supplies the refinement and derived Čech comparison arguments."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.B, Lemma 4.4 proof, printed/PDF p. 421: the dimension-shift argument requires ordinary cohomological dimension at most real dimension."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Statement

Assume full AC. Let $m\ge1$, let $\Omega\subseteq\mathbb R^m$ be a nonempty
open subset with its Euclidean metric, and let $\mathcal G$ be any sheaf of
abelian groups on $\Omega$. Then ordinary derived-functor sheaf cohomology
satisfies
$$H^q(\Omega,\mathcal G)=0\qquad\text{for every integer }q>m.$$
This is an ordinary cohomology bound for arbitrary sheaves; it is not a
compact-support cohomology assertion.

## Statement references

[Agol, §6, Theorem 6.5, p. 29](https://math.berkeley.edu/~ianagol/complexriemann.pdf)

[Demailly, Chapter IX §4.B, Lemma 4.4 proof, p. 421](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

## Facts & Assumptions

**Given:** Full AC, $m\ge1$, a nonempty Euclidean open set $\Omega\subseteq
\mathbb R^m$, and a sheaf of abelian groups $\mathcal G$ on $\Omega$.

[F1] [[def-axiom-of-choice]] and [[def-sheaf-cohomology-derived-global-sections]]: full AC is assumed, and $H^q(\Omega,\mathcal G)$ denotes the right derived global-sections cohomology.

[F2] [[def-cech-cochain-complex-open-cover]]: for an ordered open cover, $C^p$ is the product of section groups over increasing $(p+1)$-fold intersections; an empty intersection contributes the zero group.

[F3] [[def-cech-cohomology-open-cover]] and [[def-global-cech-cohomology-directed-limit]]: fixed-cover Čech cohomology is cohomology of $C^\bullet$, and the refinement-limit Čech group is the colimit over all open covers.

[F4] [[lem-qftx-gaga-euclidean-finite-order-refinement]]: every open cover of $\Omega$ has a locally finite open refinement of order at most $m+1$.

[F5] [[thm-qftx-gaga-metric-cech-derived-comparison]]: on the metric space $\Omega$, refinement-limit Čech cohomology is naturally isomorphic to derived sheaf cohomology.

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal U$ be any open cover of $\Omega$. By [F4] it has a refinement $\mathcal V$ in which every point lies in at most $m+1$ members. For $q>m$, an increasing $(q+1)$-tuple has at least $m+2$ distinct members, so its intersection is empty; therefore every factor of $C^q(\mathcal V,\mathcal G)$ is the zero group by [F2], and $\check H^q(\mathcal V,\mathcal G)=0$. [F2, F4, given]

2.1 Since every cover has such a refinement, the colimit over all covers in [F3] is zero in degree $q>m$: every representative becomes zero after refinement. [F3, step 1.1]

3.1 The comparison isomorphism [F5] identifies this zero colimit with $H^q(\Omega,\mathcal G)$, proving the ordinary sheaf cohomology bound. No compact-support comparison is invoked. [F1, F5, step 2.1] ∎
