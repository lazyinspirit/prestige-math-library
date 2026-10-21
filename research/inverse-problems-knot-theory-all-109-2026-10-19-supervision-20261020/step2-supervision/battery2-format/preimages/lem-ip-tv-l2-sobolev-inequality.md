---
id: lem-ip-tv-l2-sobolev-inequality
kind: lemma
title: Full-space BV Sobolev inequality for L² distributional TV
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - lem-ip-tv-l2-cutoff-approximation
  - lem-ip-bv-sobolev-inequality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §1.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§1.1, full-plane Sobolev estimate for L² candidates"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §7.5"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.5, BV Sobolev inequality"
---

## Statement

Assume Countable Choice. Every $u\in L^2(\mathbb R^2;\mathbb R)$ with $TV_2(u;\mathbb R^2)<\infty$ satisfies
$$\|u\|_{L^2(\mathbb R^2)}\le TV_2(u;\mathbb R^2).$$

## Statement references

[[def-ip-tv-functional-on-l2-distributional-variation|The full-space L² TV is the extended distributional test-field supremum.]]

[[lem-ip-bv-sobolev-inequality|For globally integrable BV functions in two dimensions, $\|v\|_2\le TV(v)$.]]

[[lem-ip-tv-l2-cutoff-approximation|Compactly supported BV cutoffs approximate every finite-variation L² function.]]

## Facts & Assumptions

**Given:** Countable Choice and $u\in L^2(\mathbb R^2;\mathbb R)$ with finite $TV_2(u;\mathbb R^2)$.

[A1] Countable Choice supplies the finite-Radon representation used in the cutoff approximation. ([[def-countable-choice]])

[F1] [[lem-ip-tv-l2-cutoff-approximation]]: there are $v_k\in BV(\mathbb R^2)\cap L^1(\mathbb R^2)$ with $v_k\to u$ in $L^2$ and $\limsup_kTV(v_k;\mathbb R^2)\le TV_2(u;\mathbb R^2)$.

[F2] [[lem-ip-bv-sobolev-inequality]]: every globally integrable $v\in BV(\mathbb R^2)$ satisfies $\|v\|_2\le TV(v;\mathbb R^2)$.

## Proof

1.1 By [F1], choose $v_k\in BV(\mathbb R^2)\cap L^1(\mathbb R^2)$ with $v_k\to u$ in $L^2$ and the stated variation upper bound. Apply [F2] to each $v_k$ to obtain $\|v_k\|_2\le TV(v_k;\mathbb R^2)$. [A1, F1, F2, given, choose]

2.1 Norm continuity gives $\|v_k\|_2\to\|u\|_2$, so
$$\|u\|_2=\lim_k\|v_k\|_2\le\limsup_kTV(v_k;\mathbb R^2)\le TV_2(u;\mathbb R^2).$$
This is the required inequality. [step 1.1, algebra] ∎
