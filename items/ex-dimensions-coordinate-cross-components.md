---
id: "ex-dimensions-coordinate-cross-components"
kind: "example"
title: "The coordinate cross has two one-dimensional components"
deps: ["lem-dimension-finite-union-components", "def-dimension-classical-variety", "cor-dimension-affine-and-projective-space"]
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arapura §4.1, hypersurface dimension background; coordinate-cross computation supplied here"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
generation:
  role: "example"
status: "draft"
origin: "pipeline"
proof_strategy: "Factor xy; compute both components and use finite-union dimension."
---

## Example

The coordinate cross $C=V(xy)\subseteq\mathbf A_k^2$ has two irreducible components, both affine lines. Its global dimension is one, and $\dim_p C=1$ at every closed point, including the origin.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F2] For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-dimension-classical-variety]]).

[F3] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

## Verification

1.1 The equation $xy=0$ means $x=0$ or $y=0$ because $k$ is a field. Thus $C$ is the union of the two coordinate lines. Each is an affine line, irreducible of dimension one, and neither contains the other, so these are exactly the components. [F3]

2.1 The finite-union formula gives global dimension one. At a point other than the origin exactly one component passes through the point; at the origin both do. The maximum of their dimensions is one in either case, which is the stated local dimension. [F1, F2, step 1.1] ∎
