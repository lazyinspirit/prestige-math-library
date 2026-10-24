---
id: thm-divergence-theorem-for-bounded-piecewise-c-one-domains
kind: theorem
title: Divergence for finite piecewise C1 presentations
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: Hunter §1.12, printed p. 18, for the stated piecewise extension; the edge-error limit is proved locally under the exact finite presentation.
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-bounded-piecewise-c-one-euclidean-domain", "lem-surface-null-edges-admit-small-gradient-cutoffs", "lem-finite-ambient-partitions-for-euclidean-boundary-integration", "lem-local-graph-flux-from-fubini-and-the-fundamental-theorem", "thm-dominated-convergence", "thm-algebra-of-derivatives", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null"]
---

## Statement

Assume $\mathrm{AC}_\omega$. If Omega has the specified finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$, with faces counted once off E. All integrals are finite. In a specified finite gluing, the two fluxes on every shared face cancel.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Omega has the specified finite piecewise C1 presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$. The cancellation assertion additionally has the specified finite gluing data.

[F1] Faces meet only in a surface-null edge set and carry the actual outward side. ([[def-bounded-piecewise-c-one-euclidean-domain]]).

[F2] Smooth edge cutoffs have vanishing support volume and arbitrarily small gradient integral. ([[lem-surface-null-edges-admit-small-gradient-cutoffs]]).

[F3] Compact support can be split by an ambient partition. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

[F4] Graph-supported fields satisfy the local flux formula; interior fields integrate to zero. ([[lem-local-graph-flux-from-fubini-and-the-fundamental-theorem]]).

[F5] An integrable common majorant permits passage to the limit in integrals. ([[thm-dominated-convergence]]).

[F6] An integrable indicator on a bounded cylinder can be integrated along its vertical sections. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] Borel substitution under a rigid coordinate map preserves a graph-face volume. ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F8] Singleton vertical sections have one-dimensional Lebesgue measure zero. ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

## Proof

1.1 For epsilon decreasing to zero use F2 and set $F_\varepsilon=(1-\eta_\varepsilon)F$. Its support in the compact closure avoids a neighborhood of E. The remaining boundary support has a finite cover by the single-graph neighborhoods of F1; add an interior open set. F3 partitions this support and F4 applies to each localized term. Summing the product rules gives $\int_\Omega\operatorname{div}F_\varepsilon=\sum_j\int_{S_j}(1-\eta_\varepsilon)F\cdot\nu_j\,dS$. Null overlaps in F1 prevent double counting. [given, F1, F2, F3, F4]

2.1 The product rule gives $\operatorname{div}F_\varepsilon=(1-\eta_\varepsilon)\operatorname{div}F-D\eta_\varepsilon\cdot F$. The omitted first term has integral bounded by $\|\operatorname{div}F\|_\infty|\operatorname{supp}\eta_\varepsilon|\to0$ and the second by $\|F\|_\infty\int|D\eta_\varepsilon|\to0$ by F2. Thus the bulk integrals tend to $\int_\Omega\operatorname{div}F$. [step 1.1, F2, algebra]

3.1 For every point of a face outside E, its positive distance from compact E exceeds epsilon eventually, so eta_epsilon vanishes there. Each face has finite area, and the flux is bounded by $\|F\|_\infty$. Since E is facewise null, F5 gives convergence of each face integral in step 1.1 to its full flux. There are finitely many faces, so steps 1.1–2.1 yield the claimed identity. [step 1.1, step 2.1, F1, F2, F5]

4.1 In a specified finite gluing, apply this formula to every piece. Shared faces have the same surface measure and opposite normals by F1, so their two integrands sum pointwise to zero off the null edge sets. Each regular face has n-dimensional volume zero: in graph coordinates Fubini gives zero from its singleton vertical sections, and a rigid coordinate change preserves volume. Thus adding the piece volumes counts the final domain integral exactly, and only exposed face fluxes remain. This proves the cancellation statement. [step 3.1, F1, F6, F7, F8] ∎

## Source notes

Hunter §1.12, printed p. 18, for the stated piecewise extension; the edge-error limit is proved locally under the exact finite presentation.
