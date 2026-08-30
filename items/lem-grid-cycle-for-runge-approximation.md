---
id: lem-grid-cycle-for-runge-approximation
kind: lemma
title: "A square-grid cycle enclosing a compact set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set,
       cor-winding-number-is-the-normalized-argument-increment,
       cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace,
       thm-winding-number-chain-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis, Lemma 4.4.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Lemma 9.2.1 setup"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $K\subseteq U\subseteq\mathbb C$, where $K$ is compact and $U$ is open.
Then there is a complex chain $\Gamma$ with polygonal trace such that

1. $\Gamma$ is a cycle;
2. $\Gamma^\ast\subseteq U\setminus K$;
3. $n(\Gamma,z)=1$ for every $z\in K$.

## Facts & Assumptions

**Given:** A compact set $K$ contained in an open set $U\subseteq\mathbb C$.

[L1] A compact subset of an open Euclidean set has a compact Jordan
neighbourhood inside that open set, and it may be taken to be a finite union of
closed grid rectangles
([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] The winding number of a closed contour is its continuous-argument
increment divided by $2\pi$
([[cor-winding-number-is-the-normalized-argument-increment]]).

[L3] Chain integrals and indices are additive, and reversing an oriented edge
negates its contribution ([[thm-winding-number-chain-laws]]).

[L4] The index of a cycle is locally constant off its trace
([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], choose a compact Jordan set $J$ such that $K\subseteq\operatorname{int}J\subseteq J\subseteq U$, and write $J$ as a finite union of closed cells from one square grid. Give every cell boundary its positive orientation. Each edge internal to $J$ then occurs twice with opposite orientations; cancel those pairs and let $\Gamma$ be the finite chain of the remaining oriented frontier edges. At every grid vertex the incoming and outgoing coefficients balance, so $\Gamma$ is a cycle. Its trace is the frontier of $J$, hence $\Gamma^\ast\subseteq U\setminus K$. [given, L1, L3, construct]

2.1 Let $p\in\operatorname{int}J$ lie on no grid line. Summing the positively oriented boundaries of all cells gives the same integral and index as $\Gamma$, because the two orientations of every internal edge cancel by [L3]. For one grid cell $Q$, the four-edge continuous argument of $\zeta-p$ makes one positive turn when $p\in\operatorname{int}Q$ and returns with zero net turn when $p\notin Q$; hence [L2] gives $n(\partial^+Q,p)=1$ in the first case and $0$ in the second. Exactly one cell containing $p$ contributes $1$, so additivity in [L3] gives $n(\Gamma,p)=1$. [step 1.1, L2, L3, algebra]

3.1 Fix $z\in K$. Choose a disc $D(z,r)\subseteq\operatorname{int}J$ and a point $p\in D(z,r)$ on no grid line. The disc misses $\Gamma^\ast$ and is connected, so local constancy in [L4] and step 2.1 give $n(\Gamma,z)=n(\Gamma,p)=1$. [step 1.1, step 2.1, L4, choose, discharge-construct] ∎
