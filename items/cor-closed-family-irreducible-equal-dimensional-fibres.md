---
id: "cor-closed-family-irreducible-equal-dimensional-fibres"
kind: "corollary"
title: "Closed families with irreducible equal-dimensional fibres"
deps: ["thm-generic-fibre-dimension", "thm-fibre-dimension-lower-bound", "lem-classical-variety-noetherian-components", "lem-dimension-finite-union-components"]
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
    - title: "Milne Proposition 9.11"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "First remove the closed images of all nondominating components. A component dominating Y has dimension <=dim Y+r by generic fibres. At least one such component has equality since otherwise on a common nonempty open all component intersections have smaller dimension than the irreducible fibre. Its fibre intersections have dimension >=r everywhere by the lower bound, so contain every fibre, forcing that component to be X."
---

## Statement

Let $f:X\to Y$ be a closed surjective morphism of classical varieties with $Y$ irreducible. If every fibre is irreducible of one fixed dimension $r$, then $X$ is irreducible and $\dim X=\dim Y+r$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a dominant morphism $f:X\to Y$ between irreducible classical varieties, there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every $X_y$ with $y\in U$ is nonempty and has pure dimension $r=\dim X-\dim Y$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-generic-fibre-dimension]]).

[F2] For a dominant morphism $f:X\to Y$ between irreducible classical varieties and every closed point $y\in Y$, each nonempty irreducible component $Z$ of $X_y$ satisfies $\dim Z\ge\dim X-\dim Y$. No bound is asserted for an empty fibre. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-fibre-dimension-lower-bound]]).

[F3] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

[F4] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

## Proof

1.1 Write $X=\bigcup_iX_i$ as its finite irreducible-component cover. Since $f$ is closed, each image $f(X_i)$ is closed. Those which do not equal $Y$ are proper closed subsets. At least one component has image $Y$, since their finite union is the irreducible space $Y$. Remove all the proper component images to obtain a nonempty open $V$. [F3]

2.1 For each component mapping onto $Y$, the generic fibre theorem gives a nonempty open on which its fibre dimension is $d_i=\dim X_i-\dim Y$. Each such fibre is a closed subset of the full fibre, so $d_i\le r$. Intersect these finitely many generic opens with $V$ and choose a point there. The full fibre is a finite union of the component fibres, so its dimension $r$ equals the maximum of the corresponding $d_i$. Thus some surjective component $X_j$ has $\dim X_j=\dim Y+r$. [F1, F4, step 1.1]

3.1 For every $y\in Y$, surjectivity of $X_j\to Y$ makes $(X_j)_y$ nonempty. The lower-bound theorem gives every component of it dimension at least $r$. Since the full fibre $X_y$ is irreducible of dimension $r$, no proper closed subset can have dimension at least $r$: any chain in a proper closed subset extends by $X_y$, so has length at most $r-1$. Therefore $(X_j)_y=X_y$ for all $y$. Every point of $X$ lies in $X_j$, proving $X=X_j$ and the asserted dimension. The reasoning applies when $r=0$ as well. [F2, step 2.1] ∎
