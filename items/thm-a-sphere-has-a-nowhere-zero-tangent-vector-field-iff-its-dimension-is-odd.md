---
id: "thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd"
kind: "theorem"
title: "A sphere has a nowhere zero tangent vector field iff its dimension is odd"
deps: ["thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere", "prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 2.28, p.135"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2.28, p.135"
status: published
origin: "pipeline"
proof_strategy: "Combine the two established directions; no differentiability is needed."
---

## Statement

For every integer $n\ge1$, $S^n$ admits a continuous nowhere-zero tangent vector field if and only if $n$ is odd.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For every positive even integer $n$, no continuous map $v:S^n\to\mathbb R^{n+1}$ can satisfy both $\langle v(x),x\rangle=0$ and $v(x)\ne0$ for all $x$. Thus an even-dimensional sphere has no continuous nowhere-zero tangent vector field. ([[thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere]])

[F2] For $n=2m-1\ge1$, identify $\mathbb R^{2m}$ with $\mathbb C^m$. The map $v:S^n\to\mathbb R^{2m}$ given by $v(x)=ix$ is a continuous unit tangent vector field. ([[prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field]])

## Proof

1.1 If a field exists, $n$ cannot be positive even by F1. Every positive integer is even or odd, so $n$ must be odd. [F1, given]

2.1 Conversely, for odd $n\ge1$ write $n=2m-1$ with $m\ge1$. F2 constructs the continuous unit tangent field $x\mapsto ix$. This proves the reverse implication as well. [F2] ∎
