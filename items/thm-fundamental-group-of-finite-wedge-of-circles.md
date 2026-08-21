---
id: thm-fundamental-group-of-finite-wedge-of-circles
kind: theorem
title: "The fundamental group of a finite wedge of circles is free of that rank"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wedge-of-pointed-spaces, lem-finite-circle-wedge-open-cover,
       cor-seifert-van-kampen-simply-connected-overlap,
       thm-fundamental-group-of-the-circle,
       thm-free-product-of-free-groups-on-disjoint-bases,
       def-rank-of-a-finite-rank-free-group, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $Q=\mathbb R/\mathbb Z$ be pointed at $[0]$, and for $r\in\mathbb N$ put

$$W_r:=\bigvee_{j<r}(Q,[0]).$$

Then $\pi_1(W_r,w)$ is the free group on the $r$ standard loops, one traversing each circle summand once. In particular it has rank $r$ ([[def-rank-of-a-finite-rank-free-group]]). For $r=0$, $W_0$ is a point and the basis is empty.

## Facts & Assumptions

**Given:** The finite quotient-circle wedges $W_r$ and their standard based loops.

[L1] The successor wedge $W_{r+1}=W_r\vee Q$ has a two-set van Kampen cover whose members deformation retract to $W_r$ and $Q$ and whose overlap is simply connected ([[lem-finite-circle-wedge-open-cover]]).

[L2] A two-set van Kampen cover with simply connected overlap has fundamental group the free product of the two factor fundamental groups ([[cor-seifert-van-kampen-simply-connected-overlap]]).

[F1] The degree map is an isomorphism $\pi_1(Q,[0])\cong(\mathbb Z,+)$ and sends the standard once-around loop to $1$ ([[thm-fundamental-group-of-the-circle]]).

[F2] The free product of free groups on disjoint bases is the free group on the disjoint union of those bases ([[thm-free-product-of-free-groups-on-disjoint-bases]]).

[F3] If a property holds at $0$ and passes from every natural $r$ to $r+1$, then it holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 The empty wedge $W_0$ is a point by definition. Every based loop in a point is constant, so $\pi_1(W_0,w)$ is the one-element group, which is the free group on the empty basis and has rank $0$. [base]

1.2 The group of one circle is infinite cyclic by [F1], so its standard loop is a one-element free basis. This is the first successor case and fixes the basis convention used below. [F1]

1.3 Assume $\pi_1(W_r,w)$ is free on the $r$ standard circle loops. By [L1] and [L2], the successor wedge satisfies $$\pi_1(W_{r+1},w)\cong\pi_1(W_r,w)*\pi_1(Q,[0]).$$ [L1, L2, ih]

2.1 The induction hypothesis and [F1] identify the two factors as free groups on disjoint bases consisting of the old $r$ standard loops and the new standard loop. By [F2], their free product is free on the union, exactly the $r+1$ standard loops of $W_{r+1}$. [step 1.3, F1, F2]

3.1 Step 1.1 is the base case and steps 1.3 and 2.1 prove the successor implication, so [F3] gives the result for every $r\in\mathbb N$. The basis has $r$ elements, hence the rank is $r$ by definition. [step 1.1, step 1.3, step 2.1, F3, discharge-induction] ∎
