---
id: "cor-a-fixed-point-free-sphere-map-has-antipodal-degree"
kind: "corollary"
title: "A fixed point free sphere map has antipodal degree"
deps: ["prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps", "prop-degree-is-homotopy-invariant-and-multiplicative-under-composition"]
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
    - title: "Hatcher, Algebraic Topology, Degree property (g), p.134"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree property (g), p.134"
status: published
origin: "pipeline"
proof_strategy: "The vector (1-t)f(x)-tx never vanishes: a zero at an interior t would force f(x)=x by equal norms. Normalize to homotope f to the antipodal map."
---

## Statement

For $n\ge1$, any continuous fixed-point-free map $f:S^n\to S^n$ has degree $(-1)^{n+1}$. Consequently, a self-map of any other degree has a fixed point.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] On $S^n\subset\mathbb R^{n+1}$ for $n\ge1$, the identity, a constant map, any single coordinate reflection, and the antipodal map have degrees $1$, $0$, $-1$, and $(-1)^{n+1}$ respectively. ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]])

[F2] For $n\ge1$ and continuous sphere self-maps $f,g$, homotopic maps have the same degree and $\deg(g\circ f)=\deg(g)\deg(f)$. Every homotopy equivalence $S^n\to S^n$ has degree $1$ or $-1$. ([[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]])

## Proof

1.1 Let $u(x,t)=(1-t)f(x)-tx$. Its endpoint values are unit vectors. If it vanished for $0<t<1$, equality of norms would imply $1-t=t$ and hence $f(x)=x$, contrary to the hypothesis. Thus $H(x,t)=u(x,t)/|u(x,t)|$ is a continuous sphere homotopy. [given, algebra]

2.1 Its endpoints are $f$ and the antipodal map. F2 and F1 give $\deg(f)=(-1)^{n+1}$. If a map of any other degree lacked fixed points, the just-proved equality would contradict its degree, proving the consequence. [F1, F2, step 1.1] ∎
