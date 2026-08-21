---
id: ex-fundamental-groups-of-once-and-twice-punctured-two-sphere
kind: example
title: 'The once-punctured two-sphere has trivial fundamental group and the twice-punctured two-sphere has fundamental group $\mathbb Z$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-antipodal-sphere-cover, ex-fundamental-group-of-the-punctured-plane,
       thm-convex-subsets-have-trivial-fundamental-group,
       thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.14 and Chapter 1 examples"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

Let $N=(0,0,1)$ and $S=(0,0,-1)$ in $S^2$. Point $S^2\setminus\{N\}$ at any point corresponding under stereographic projection to $0\in\mathbb R^2$, and point $S^2\setminus\{N,S\}$ at the point corresponding to $(1,0)$. Then

$$\pi_1(S^2\setminus\{N\})=1,\qquad \pi_1(S^2\setminus\{N,S\})\cong\mathbb Z.$$

## Facts & Assumptions

**Given:** The two punctured spaces and basepoints in the Example.

[L1] Stereographic projection identifies a pole complement in $S^2$ with $\mathbb R^2$ and the double pole complement with $\mathbb R^2\setminus\{0\}$ ([[lem-antipodal-sphere-cover]]).

[F1] Every nonempty convex subset of Euclidean space is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[L2] The punctured plane pointed at $(1,0)$ has fundamental group isomorphic to $\mathbb Z$ ([[ex-fundamental-group-of-the-punctured-plane]]).

[F2] A pointed homeomorphism induces a fundamental-group isomorphism ([[thm-induced-fundamental-group-map-functoriality]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], stereographic projection is a pointed homeomorphism $S^2\setminus\{N\}\cong\mathbb R^2$ for the chosen basepoints. [L1]

1.2 The same stereographic projection restricts by [L1] to a pointed homeomorphism $S^2\setminus\{N,S\}\cong\mathbb R^2\setminus\{0\}$. [L1]

2.1 The plane is nonempty and convex, so [F1] makes its fundamental group trivial; [F2] transports that calculation through step 1.1. [step 1.1, F1, F2]

3.1 By [L2] the latter space has fundamental group $\mathbb Z$, and [F2] transports this group through step 1.2. [step 1.2, L2, F2] ∎
