---
id: def-schur-elements-from-a-symmetrizing-trace
kind: definition
title: Schur elements of a split semisimple algebra with a symmetrizing trace
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-hh-canonical-hecke-trace-and-symmetrizing-form, thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]
justified_by: []
aliases: []
landmark: false
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§4.1, PDF pp. 16–17: the generic trace expansion in irreducible characters and its Schur elements."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $K$ be a field and $H$ a finite-dimensional split semisimple $K$-algebra, meaning $H\cong\prod_{i=1}^n M_{d_i}(K)$ for positive integers $d_i$. Let $\tau:H\to K$ be a symmetrizing trace: $\tau(ab)=\tau(ba)$, and the bilinear form $(a,b)\mapsto\tau(ab)$ is nondegenerate. For each simple $H$-module $E$, let $\chi_E(h)=\operatorname{Tr}_K(h|_E)$ be its character. If the trace has an expansion
$$
\tau=\sum_{E\in\operatorname{Irr}(H)}c_E^{-1}\chi_E
$$
with all $c_E\in K^\times$, the scalars $c_E$ are the **Schur elements** of the pair $(H,\tau)$. The definition makes no existence claim for an arbitrary functional; existence and values require a separate proof in the specified regime. The rank-one specialization computes them directly, while the finite-Weyl asymptotic theorem proves the full trace expansion and its leading coefficients.

For the canonical finite Coxeter Hecke trace and its symmetric perfect pairing, see [[def-hh-canonical-hecke-trace-and-symmetrizing-form]] and [[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]].
