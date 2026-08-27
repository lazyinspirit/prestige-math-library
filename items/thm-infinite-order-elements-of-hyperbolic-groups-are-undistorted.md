---
id: thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted
kind: theorem
title: "Infinite-order elements of hyperbolic groups are undistorted"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space, def-hyperbolic-group, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a hyperbolic group and let $g \in G$ have infinite order. Then the
cyclic subgroup $\langle g \rangle$ is undistorted in $G$: for some constants
$A,B>0$,

$$
|n| \le A\,|g^n|_S + B
$$

for all $n \in \mathbb Z$, where $|\cdot|_S$ is word length with respect to a
finite generating set $S$ of $G$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$, a finite generating set $S$, and an infinite-order element $g \in G$.

[A1] In a hyperbolic group, the orbit map $n \mapsto g^n$ is a quasi-isometric embedding of $\mathbb Z$ into the Cayley graph whenever $g$ has infinite order.

[L1] Morse stability controls quasi-geodesics in hyperbolic spaces
([[thm-morse-stability-of-quasi-geodesics]]).

## Proof

**Proof technique:** direct.

1.1 The source fact [A1] says that the orbit map $n \mapsto g^n$ is a quasi-isometric embedding into the Cayley graph of $G$. [given, A1]

2.1 A quasi-isometric embedding gives the displayed linear lower bound on $|g^n|_S$ in terms of $|n|$, while [L1] explains geometrically that the powers of $g$ stay near a quasi-axis. Therefore $\langle g \rangle$ is undistorted. [L1, step 1.1] ∎
