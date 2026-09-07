---
id: "ex-degree-of-the-circle-power-map"
kind: "example"
title: "Degree of the circle power map"
deps: ["thm-global-sphere-degree-is-the-sum-of-local-degrees", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Example 2.32, p.137"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Example 2.32, p.137"
status: "draft"
origin: "pipeline"
proof_strategy: "For d>0 a regular value has d points, each locally an increasing angular homeomorphism. For d<0 compose with complex conjugation/reflection; for zero use the constant map."
---

## Example

For every $d\in\mathbb Z$, the continuous map $p_d:S^1\to S^1$, $p_d(z)=z^d$, has degree $d$ when both circles have their counterclockwise orientations. This includes $d=0$ and negative exponents.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then $$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$ The sum over an empty fibre is $0$. ([[thm-global-sphere-degree-is-the-sum-of-local-degrees]])

[F2] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

## Verification

1.1 If $d>0$, the fibre of $1$ consists of the $d$ roots $e^{2\pi i k/d}$, $0\le k<d$. In positively oriented angular coordinates centered at such a point and at $1$, the local map is $t\mapsto dt$. The homotopy $t\mapsto((1-s)d+s)t$, $0\le s\le1$, never sends a nonzero sufficiently small $t$ to zero, so it preserves the local pair and identifies the local action with that of the identity. Each local degree is therefore $+1$, and the finite-fibre formula gives $\deg p_d=d$. [F1, F2, construct]

2.1 If $d=-m<0$, the same $m$-point fibre has angular formula $t\mapsto-mt$. Homotoping its positive factor $m$ to $1$ leaves the reflection $t\mapsto-t$. Complex conjugation is a coordinate reflection on $S^1$, of degree $-1$; its singleton fibre and the local-sum formula give local sign $-1$. Thus $\deg p_{-m}=-m$. For $d=0$, $p_0=1$ is constant and has degree zero. In particular $p_1$ is the identity. [F1, F2, step 1.1] ∎
