---
id: lem-direct-search-finite-budget-returns-status
kind: lemma
title: "Deterministic direct search returns within its finite poll budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-deterministic-direct-search
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, ch. 7"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §3"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every integer poll budget $N\ge0$, each invocation of [[alg-deterministic-direct-search]] returns after at most $N$ polls with a feasible current center and a best evaluated point.

## Facts & Assumptions

**Given:** An open domain $U$, finite-valued objective on $U$, feasible initial point, finite ordered poll list, and the mesh/forcing inputs of [[alg-deterministic-direct-search]].

[F1] The initial point is evaluated before polling; each poll scans a finite ordered list, accepts only in-domain points, and otherwise retains its current center ([[alg-deterministic-direct-search]]).

## Proof

1.1 The initial center lies in $U$ and has a finite objective value, so the best-point record is initially nonempty. In a poll, each checked direction is either skipped outside $U$ or evaluated at a point in $U$; a success moves to that point and an unsuccessful poll keeps the old feasible center. Thus feasibility and a nonempty best record persist. [given, F1, induction]

2.1 Each completed poll consumes one unit of the integer budget. After at most $N$ polls the loop returns budget-exhausted; when $N=0$ it returns immediately after recording the initial point. [F1, step 1.1, induction] ∎
