---
id: thm-divergence-theorem-for-bounded-c-one-euclidean-domains
kind: theorem
title: Divergence on a bounded C1 Euclidean domain
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12 Theorem 1.46, printed pp. 17–18 (PDF pp. 23–24).
    - title: Sung-Jin Oh, Lecture Notes for Math 222A
      url: https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: Oh §3.9, Proposition 3.23 and its complete local graph and partition proof, printed/PDF pp. 47–48.
      original_url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-surface-integral-is-independent-of-c-one-boundary-charts", "lem-finite-ambient-partitions-for-euclidean-boundary-integration", "lem-local-graph-flux-from-fubini-and-the-fundamental-theorem", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-algebra-of-derivatives", "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness"]
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge2$, a bounded $C^1$ domain Omega and $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$. Both integrals are finite, with the continuous interior derivative convention and the outward normal on every boundary component.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$, a bounded $C^1$ domain Omega, and $F\in C^1(\overline\Omega;\mathbb R^n)$ with the continuous interior derivative convention.

[F1] A compact Euclidean set admits a finite subordinate ambient partition. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

[F2] Localized graph fields satisfy the flux identity and interior fields have zero integral divergence. ([[lem-local-graph-flux-from-fubini-and-the-fundamental-theorem]]).

[F3] Graph density and continuous outward normal are independent of charts. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F4] Finite sums of integrable functions have the sum of their integrals. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] A rigid coordinate change preserves volume integrals, by Borel substitution with determinant modulus one, applied to positive and negative parts. ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

## Proof

1.1 Compactness of the boundary gives finitely many smaller graph cylinders covering it. Together with the open set Omega these cover the compact closure of Omega. F1 gives an ambient partition chi_j subordinate to this cover. For each boundary term chi_j F, F2 and F3 identify its divergence integral with its outward surface flux, since $\nu\,dS=(-Dh,1)\,dy$. The interior term has divergence integral zero and boundary trace zero by F2. Rigid coordinate changes preserve this calculation: the transformed field is $Q^TF(a+Qy)$, its derivative is $Q^TDFQ$ and has the same trace, its dot products are unchanged, and its volume Jacobian has modulus one. [given, F1, F2, F3, F5]

2.1 The continuous F and DF are bounded on the compact closure; Omega is bounded of finite volume and F3 gives finite boundary area. Thus all terms are integrable. The product rule gives $\sum_j\operatorname{div}(\chi_jF)=(\sum_j\chi_j)\operatorname{div}F+(\sum_jD\chi_j)\cdot F=\operatorname{div}F$, because the partition sum is one on a neighborhood of the closure. The boundary flux sum likewise equals $F\cdot\nu$. F4 sums the local identities from step 1.1 to give the stated theorem. [step 1.1, F3, F4, algebra] ∎

## Source notes

Hunter §1.12 Theorem 1.46, printed pp. 17–18; Oh §3.9 Proposition 3.23, printed/PDF pp. 47–48, for the local-to-global proof.

