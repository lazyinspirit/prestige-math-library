---
id: ex-the-ball-is-levi-pseudoconvex
kind: example
title: "The unit ball is Levi pseudoconvex"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-levi-form-and-strict-plurisubharmonicity,
       def-levi-pseudoconvex-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
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

The unit ball

$$B=\{z\in\mathbb C^m: |z_1|^2+\cdots+|z_m|^2<1\}$$

is Levi pseudoconvex.

## Facts & Assumptions

**Given:** The defining function $\rho(z)=|z_1|^2+\cdots+|z_m|^2-1$ of the unit
ball.

[L1] Levi pseudoconvexity is tested by the Levi form of a defining function on
complex tangent vectors ([[def-levi-pseudoconvex-domain]]).

[L2] The Levi form is
$$\mathcal L_\rho(z;v)=\sum_{j,k} \frac{\partial^2\rho}{\partial z_j\partial\overline z_k}(z)\,v_j\overline{v_k}$$
([[def-levi-form-and-strict-plurisubharmonicity]]).

## Verification

**Proof technique:** direct.

1.1 For $\rho(z)=|z_1|^2+\cdots+|z_m|^2-1$, one has $$\frac{\partial^2\rho}{\partial z_j\partial\overline z_k}=\delta_{jk},$$ so [L2] gives $$\mathcal L_\rho(z;v)=|v_1|^2+\cdots+|v_m|^2\ge0$$ for every $z$ and every $v\in\mathbb C^m$. [L2, given, algebra]

2.1 In particular the Levi form is nonnegative on every complex tangent vector at every boundary point of the unit ball. By [L1], the unit ball is Levi pseudoconvex. [L1, step 1.1] ∎
