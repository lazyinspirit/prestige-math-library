---
id: cor-fundamental-group-of-two-dimensional-torus
kind: corollary
title: '$\pi_1(T^2)\cong\mathbb Z\times\mathbb Z$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-dimensional-torus, thm-fundamental-group-of-a-product,
       thm-fundamental-group-of-the-circle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

For $T^2=(\mathbb R/\mathbb Z)^2$ pointed at $([0],[0])$,

$$\pi_1(T^2,([0],[0]))\cong(\mathbb Z,+)\times(\mathbb Z,+).$$

## Facts & Assumptions

**Given:** The pointed torus $T^2$ of [[def-two-dimensional-torus]].

[L1] The fundamental group of a product is naturally the direct product of the two fundamental groups ([[thm-fundamental-group-of-a-product]]).

[F1] The degree map is an isomorphism $\pi_1(\mathbb R/\mathbb Z,[0])\cong(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

## Proof

**Proof technique:** direct.

1.1 By the torus definition and [L1], $$\pi_1(T^2,([0],[0]))\cong\pi_1(\mathbb R/\mathbb Z,[0])\times\pi_1(\mathbb R/\mathbb Z,[0]).$$ [L1]

2.1 Applying [F1] in both coordinates gives the displayed isomorphism with $\mathbb Z\times\mathbb Z$. [step 1.1, F1] ∎
