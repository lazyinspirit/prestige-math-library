---
id: ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space
kind: example
title: "A coordinate-bump embedding of the circle in Euclidean space"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Example

Cover $S^1$ by the two standard stereographic-coordinate charts
$$
U_+:=S^1\setminus\{(-1,0)\},\qquad U_-:=S^1\setminus\{(1,0)\},
$$
with angular coordinates $\theta_+$ and $\theta_-$. Choose smooth bumps
$\phi_\pm$ supported in $U_\pm$ and equal to $1$ on smaller arcs still covering
$S^1$. Then
$$
F(p):=\bigl(\phi_+(p),\phi_+(p)\theta_+(p),\phi_-(p),\phi_-(p)\theta_-(p)\bigr)
$$
is an explicit coordinate-bump embedding of $S^1$ into $\mathbb R^4$.

## Facts & Assumptions

**Given:** The two-chart cover of $S^1$ and the chosen bump functions
$\phi_\pm$.

## Verification
**Proof technique:** direct.

1.1 On any point of the smaller arc where $\phi_+=1$, the first two coordinates of $F$ recover the chart coordinate $\theta_+$. The same is true for $\phi_-=1$ on the other smaller arc. [given, algebra]

2.1 Because those smaller arcs cover $S^1$, equality $F(p)=F(q)$ forces equality in one active chart coordinate, hence $p=q$. The active chart coordinates also show that $dF$ is injective at each point. This is exactly the compact coordinate-bump mechanism of [[lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space]]. [step 1.1] ∎
