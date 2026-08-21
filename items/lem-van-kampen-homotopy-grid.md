---
id: lem-van-kampen-homotopy-grid
kind: lemma
title: "A path homotopy over a two-set open cover admits a finite subordinate grid"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homotopy-relative-and-path-homotopy, def-product-topology,
       lem-product-topology-on-rn, thm-heine-borel-rn,
       thm-lebesgue-number-lemma, thm-continuity-characterisations-top,
       cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $X=U\cup V$ with $U$ and $V$ open, and let $H:I\times I\to X$ be a path homotopy. Suppose finite subdivisions of the bottom and top edges are prescribed. Then there are finite partitions

$$0=s_0<s_1<\cdots<s_m=1,\qquad 0=t_0<t_1<\cdots<t_r=1$$

such that the horizontal partition contains every prescribed bottom and top cut, and every closed grid rectangle $[s_{i-1},s_i]\times[t_{k-1},t_k]$ is mapped by $H$ wholly into $U$ or wholly into $V$.

## Facts & Assumptions

**Given:** The open cover, path homotopy, and the two prescribed finite boundary subdivisions in the Statement.

[F1] Closed boxes in $\mathbb R^2$ are compact metric spaces ([[thm-heine-borel-rn]]).

[F2] Every open cover of a compact metric space has a positive Lebesgue number ([[thm-lebesgue-number-lemma]]).

[F3] The product topology on $\mathbb R^2$ is the topology of the sup metric $d_\infty$, whose balls are open boxes ([[lem-product-topology-on-rn]]).

[F4] A continuous map has open preimages of open sets ([[thm-continuity-characterisations-top]]).

[F5] For every real $\eta>0$ there is a natural $q\ge1$ with $1/q<\eta$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** constructive.

1.1 By [F4], $H^{-1}(U)$ and $H^{-1}(V)$ form an open cover of the compact metric square $I^2$. By [F1] and [F2], choose a Lebesgue number $\delta>0$ for this cover in $d_\infty$. [F1, F2, F3, F4]

2.1 Take $q\ge1$ with $1/q<\delta$, using [F5]. Start with the uniform cuts $k/q$ in each coordinate, adjoin the finitely many prescribed bottom and top cuts to the horizontal list, and sort each resulting finite set after removing repetitions. Every gap in either partition is at most $1/q<\delta$, and both lists contain $0$ and $1$. [step 1.1, F5, construct]

3.1 Each closed grid rectangle is nonempty and has $d_\infty$-diameter at most $1/q<\delta$, so [F2] places it inside $H^{-1}(U)$ or $H^{-1}(V)$. Its image therefore lies in the corresponding cover member, and the constructed horizontal partition refines both prescribed boundary subdivisions. [step 1.1, step 2.1, F2, discharge-construct] ∎

