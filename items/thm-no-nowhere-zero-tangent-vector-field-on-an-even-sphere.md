---
id: "thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere"
kind: "theorem"
title: "No nowhere zero tangent vector field on an even sphere"
deps: ["prop-degree-is-homotopy-invariant-and-multiplicative-under-composition", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps"]
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
    - title: "Hatcher, Algebraic Topology, Theorem 2.28, p.135"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2.28, p.135"
status: "draft"
origin: "pipeline"
proof_strategy: "Normalize v and use cos(pi t)x+sin(pi t)v(x), whose norm is one, to homotope identity to antipodal; their degrees differ."
---

## Statement

For every positive even integer $n$, no continuous map $v:S^n\to\mathbb R^{n+1}$ can satisfy both $\langle v(x),x\rangle=0$ and $v(x)\ne0$ for all $x$. Thus an even-dimensional sphere has no continuous nowhere-zero tangent vector field.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For $n\ge1$ and continuous sphere self-maps $f,g$, homotopic maps have the same degree and $\deg(g\circ f)=\deg(g)\deg(f)$. Every homotopy equivalence $S^n\to S^n$ has degree $1$ or $-1$. ([[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]])

[F2] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

## Proof

1.1 If such $v$ existed, $w(x)=v(x)/|v(x)|$ would be continuous, orthogonal to $x$, and of norm one. Hence $H(x,t)=\cos(\pi t)x+\sin(\pi t)w(x)$ has squared norm $\cos^2(\pi t)+\sin^2(\pi t)=1$ for all $0\le t\le1$. [given, algebra]

2.1 The homotopy has endpoints $H(x,0)=x$ and $H(x,1)=-x$. By F1 their degrees agree, but by F2 these degrees are $1$ and $(-1)^{n+1}=-1$ because $n$ is even. The unequal integers contradict the existence of $v$. [F1, F2, step 1.1] ∎
