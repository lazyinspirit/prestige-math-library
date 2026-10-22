---
id: lem-ip-bv-compactness-lower-semicontinuity
kind: lemma
title: Compactness and lower semicontinuity for bounded-domain BV
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-extension-and-translation
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-l1-sequence-compactness-by-cell-averages
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
proof_strategy: direct
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by Lipschitz graph neighborhoods with $\Omega$ on one side of each graph. Total variation is lower semicontinuous under $L^1(\Omega)$ convergence of BV functions. Every sequence $(u_k)\subset BV(\Omega)$ satisfying $$\sup_k\bigl(\|u_k\|_{L^1(\Omega)}+TV(u_k;\Omega)\bigr)<\infty$$ has a subsequence converging in $L^1(\Omega)$ to a function in $BV(\Omega)$.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and total-variation definitions.]]

[[lem-ip-bv-extension-and-translation|A bounded zero extension and the BV translation estimate.]]

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain $\Omega$, and a sequence bounded in the BV norm.

[F1] Zero extensions have common bounded support and uniformly bounded BV norms, and translations obey the linear BV estimate. The extension theorem includes the endpoint case in dimension one. ([[lem-ip-bv-extension-and-translation]])

[F2] Under Countable Choice, an $L^1$-bounded sequence with common bounded support and uniform translation continuity has an $L^1$-convergent subsequence. This is proved by finite cell averages and a deterministic diagonal selection, without the metric compactness/sequential-compactness equivalence. ([[lem-ip-l1-sequence-compactness-by-cell-averages]])

[F3] Under Countable Choice, an $L^1$ limit with bounded liminf variation belongs to $BV$ and satisfies lower semicontinuity; if the limit is already BV, the inequality uses no choice axiom. ([[lem-ip-bv-test-field-characterization-and-lsc]])

## Proof

**Given:** The hypotheses in the Statement; let $M$ bound the displayed BV norms.

1.1 For $u_k\to u$ in $L^1(\Omega)$ with all functions in $BV(\Omega)$, each compactly supported smooth unit test field has $\int u\operatorname{div}\phi=\lim_k\int u_k\operatorname{div}\phi\le\liminf_kTV(u_k;\Omega)$. Taking the supremum using [F3] proves the lower-semicontinuity assertion. If only $u\in L^1$ is initially known and that liminf is finite, the Countable Choice characterization in [F3] also proves $u\in BV$. [F3, given, algebra]

2.1 Extend every $u_k$ by zero. By [F1], the functions $v_k=\widetilde u_k$ have support in the bounded set $\overline\Omega$, satisfy $\sup_k\|v_k\|_1\le M$, and have $TV(v_k;\mathbb R^n)\le C_\Omega M$. Their translation differences are at most $|h|C_\Omega M$, uniformly in $k$. Hence [F2] gives a subsequence $v_{k_j}\to v$ in $L^1(\mathbb R^n)$. Restriction yields $u_{k_j}\to u=v|_\Omega$ in $L^1(\Omega)$. The variations in $\Omega$ are bounded by $M$, so step 1.1 and [F3] prove $u\in BV(\Omega)$ and $TV(u;\Omega)\le\liminf_jTV(u_{k_j};\Omega)$. This proves the full compactness conclusion. [F1, F2, F3, step 1.1, construct] ∎ 