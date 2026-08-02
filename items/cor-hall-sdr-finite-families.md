---
id: cor-hall-sdr-finite-families
kind: corollary
title: "A finite family has an SDR if and only if every subfamily has a union at least as large as its index set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hall-marriage-finite-bipartite, def-bipartite-neighbourhood-hall-condition-and-sdr]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "F. Gotti, Matching and Hall's Theorem"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/30.%20Matchings%20and%20Hall%27s%20Theorem/Matching%20and%20Hall%27s%20Theorem.pdf"
pipeline_run: null
---

## Statement

Let $(A_x)_{x\in X}$ have finite index set $X$ and finite union
$U:=\bigcup_{x\in X}A_x$. It has an SDR if and only if
$$\left|\bigcup_{x\in S}A_x\right|\ge |S|\qquad(S\subseteq X).$$

## Facts & Assumptions

**Given:** A family $(A_x)_{x\in X}$ with finite $X$ and finite union $U$, and its tagged incidence graph with parts $X_{\mathrm L},U_{\mathrm R}$.

[F1] The tagged incidence graph is finite and bipartite, its left-neighbourhood of $S_{\mathrm L}$ is the tagged copy of $\bigcup_{x\in S}A_x$, and an SDR is an injection choosing one adjacent right tag for each left tag ([[def-bipartite-neighbourhood-hall-condition-and-sdr]]).

[L1] A finite bipartite graph has a matching saturating its left part exactly when Hall's condition holds ([[thm-hall-marriage-finite-bipartite]]).

## Proof

**Proof technique:** direct.

1.1 The displayed union inequality is exactly Hall's condition for the finite tagged incidence graph. [F1]

1.2 By [F1] the tagged incidence graph is finite, so [L1] makes that condition equivalent to a matching that saturates $X_{\mathrm L}$. [F1, L1]

1.3 Such a matching assigns each $x$ the underlying element of its unique matched right tag, and conversely an SDR gives those pairwise disjoint tagged matching edges. [F1]

2.1 Combining steps 1.1--1.3 proves the stated equivalence. [step 1.1, step 1.2, step 1.3] ∎
