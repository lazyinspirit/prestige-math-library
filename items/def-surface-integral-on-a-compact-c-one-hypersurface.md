---
id: def-surface-integral-on-a-compact-c-one-hypersurface
kind: definition
title: Surface integration on compact C1 hypersurfaces
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter, §1.10.2, printed p. 15 (PDF p. 21), Gram surface density and partition patching.
status: published
origin: pipeline
deps: ["def-bounded-c-one-domain-boundary-charts-and-outward-normal", "lem-finite-ambient-partitions-for-euclidean-boundary-integration", "def-gram-matrix-and-gram-determinant", "def-nonnegative-lebesgue-integral"]
justified_by: ["lem-surface-integral-is-independent-of-c-one-boundary-charts"]
---

## Definition

Assume the $\mathrm{AC}_\omega$ convention of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Let S be a compact embedded $C^1$ hypersurface in $\mathbb R^n$, $n\ge2$. Choose finitely many regular injective $C^1$ parametrizations $X_j:V_j\to S\cap O_j$ with $C^1$ coordinate transitions, and an ambient partition $\chi_j$ from [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], with supports compactly contained in the corresponding chart neighborhoods. Put $J_{X_j}=\sqrt{\det(DX_j^TDX_j)}$, using [[def-gram-matrix-and-gram-determinant]].

For a nonnegative Borel f on S define $\int_S f\,dS=\sum_j\int_{V_j}(\chi_j f)(X_j(y))J_{X_j}(y)\,dy$, where the integrals on the right are those of [[def-nonnegative-lebesgue-integral]] and $0\cdot\infty=0$. Set $S(A)=\int_S\mathbf1_A\,dS$ for Borel A. For signed f with $\int_S|f|\,dS<\infty$ use the difference of the positive and negative integrals. The same chart formula restricts to a compact Borel face contained in a regular patch. The empty surface has zero integral. Independence and finiteness are established by the following chart-independence lemma.

## Source notes

Hunter, §1.10.2, printed p. 15 (PDF p. 21), Gram surface density and partition patching.
