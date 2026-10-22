---
id: lem-ip-bv-lipschitz-trace-and-zero-extension
kind: lemma
title: Trace formula and bounded zero extension on Lipschitz domains
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-strict-approximation
  - lem-local-graph-flux-from-fubini-and-the-fundamental-theorem
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
---

## Statement

Assume Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by coordinate neighborhoods in which it is the graph of a Lipschitz function and $\Omega$ lies on one side of the graph. There is a unique bounded linear trace operator $T:BV(\Omega)\to L^1(\partial\Omega,\mathcal H^{n-1})$ such that for every $u\in BV(\Omega)$ and $\phi\in C_c^1(\mathbb R^n;\mathbb R^n)$, $$\int_\Omega u\,\operatorname{div}\phi\,dx=-\int_\Omega\phi\cdot dDu+\int_{\partial\Omega}Tu\,\phi\cdot\nu\,d\mathcal H^{n-1},$$ where $\nu$ is the outward unit normal defined almost everywhere on $\partial\Omega$. The zero extension $\widetilde u$ belongs to $BV(\mathbb R^n)$ and satisfies $$TV(\widetilde u;\mathbb R^n)=TV(u;\Omega)+\|Tu\|_{L^1(\partial\Omega)}\le C_\Omega\bigl(\|u\|_{L^1(\Omega)}+TV(u;\Omega)\bigr)$$ for a finite constant $C_\Omega$ depending only on the domain.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and total-variation conventions.]]

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain $\Omega\subset\mathbb R^n$, and $u\in BV(\Omega)$.

[F1] Strict smooth approximation is available under Countable Choice. ([[lem-ip-bv-strict-approximation]])

[F2] Boundary graph charts have a local flux formula and chart-independent surface measure. ([[lem-local-graph-flux-from-fubini-and-the-fundamental-theorem]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

## Escalation

The cited full-text theorem is Terra, Theorem 7.43, with the trace/extension consequences in Theorem 7.46 and Corollary 7.47 (printed pp. 249–268). The local proof obligations are not closed here: construct the one-sided BV trace in each Lipschitz graph chart with a uniform $L^1$ estimate; patch the chart traces and prove uniqueness; pass the smooth Gauss–Green formula through strict BV approximation; establish the boundary gluing formula for the distributional derivative; and prove that the interior and boundary measures are mutually singular so the displayed total-variation equality is exact. These obligations affect the trace formula, boundedness of $T$, and the zero-extension estimate. Proposed local suppliers on this A page are `lem-ip-bv-one-sided-trace-on-lipschitz-graph`, `lem-ip-bv-gauss-green-for-lipschitz-domain`, and `lem-ip-bv-gluing-boundary-variation`. No proof contract or readiness decision is supplied for this item.
