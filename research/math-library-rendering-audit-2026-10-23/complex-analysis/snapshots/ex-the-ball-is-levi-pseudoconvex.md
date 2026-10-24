---
id: ex-the-ball-is-levi-pseudoconvex
kind: example
title: "The unit ball is Levi pseudoconvex"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-complex-euclidean-space-dictionary,
       def-levi-form-and-strict-plurisubharmonicity,
       def-levi-pseudoconvex-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/frontier-37-owner-30-published-repair-evidence/ex-the-ball-is-levi-pseudoconvex.repair.json
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.3"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.3.1"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

For $m\ge1$, use the canonical coordinates indexed by $j<m$ of
[[rem-complex-euclidean-space-dictionary]]. The unit ball

$$B=\{z\in\mathbb C^m: \sum_{j<m}|z_j|^2<1\}$$

is Levi pseudoconvex.

## Facts & Assumptions

**Given:** $m\ge1$, canonical indices $j<m$, and the function $\rho(z)=\sum_{j<m}|z_j|^2-1$ of the unit ball.

[L1] Levi pseudoconvexity is tested by the Levi form of a defining function on complex tangent vectors ([[def-levi-pseudoconvex-domain]]).

[L2] The Levi form is $$\mathcal L_\rho(z;v)=\sum_{j,k<m} \frac{\partial^2\rho}{\partial z_j\partial\overline z_k}(z)\,v_j\overline{v_k}$$ ([[def-levi-form-and-strict-plurisubharmonicity]], reindexed to the canonical coordinates $j,k<m$).

[L3] Canonical complex coordinates are $z_j=x_j+iy_j$ for $j<m$, and $\sum_{j<m}|z_j|^2=\sum_{j<m}(x_j^2+y_j^2)$ is the squared Euclidean norm in the real coordinate identification. ([[rem-complex-euclidean-space-dictionary]])

## Verification

**Proof technique:** direct.

1.1 For $j,k<m$ and $\rho(z)=\sum_{j<m}|z_j|^2-1$, one has $$\frac{\partial^2\rho}{\partial z_j\partial\overline z_k}=\delta_{jk},$$ so [L2] gives $$\mathcal L_\rho(z;v)=\sum_{j<m}|v_j|^2\ge0$$ for every $z$ and every $v\in\mathbb C^m$. [L2, given, algebra]

1.2 The function $\rho$ is a real polynomial, and $B=\{\rho<0\}$. At a boundary point $p$ its real coordinates satisfy $\sum_{j<m}(x_j^2+y_j^2)=1$ by [L3], so some real coordinate $X$ is nonzero and $\partial_X\rho(p)=2X(p)\ne0$. Locally the equation $\rho=0$ solves that coordinate as $X=\operatorname{sgn}(X(p))\sqrt{1-\sum Y^2}$, where $Y$ ranges over the other real coordinates; the radicand is positive near $p$. Thus the boundary is smooth and $\rho$ is a $C^2$ local defining function with nonzero differential. [L3, given, algebra]

2.1 In particular the Levi form is nonnegative on every complex tangent vector at every boundary point of the unit ball. By [L1], the unit ball is Levi pseudoconvex. [L1, step 1.1, step 1.2] ∎
