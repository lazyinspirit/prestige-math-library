---
id: lem-rectangle-second-difference-mean-value-formula
kind: lemma
title: "A rectangular second difference equals a mixed partial times the side lengths"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-directional-and-partial-derivatives, cor-mean-value-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a closed axis-parallel rectangle and suppose that $f_x$ and $f_{xy}$ exist on an open neighbourhood of $R$. If $(x_0,y_0),(x_1,y_1)$ are opposite corners of a nondegenerate subrectangle of $R$, then some $\xi$ strictly between $x_0,x_1$ and some $\eta$ strictly between $y_0,y_1$ satisfy

$$f(x_1,y_1)-f(x_1,y_0)-f(x_0,y_1)+f(x_0,y_0)=(x_1-x_0)(y_1-y_0)f_{xy}(\xi,\eta).$$

## Facts & Assumptions

**Given:** The stated open-neighbourhood hypotheses and a nondegenerate subrectangle of $R$.

[L1] After ordering its two endpoints, the one-variable mean-value theorem gives $g(v)-g(u)=(v-u)g'(c)$ for a function continuous on the closed interval and differentiable on its interior, with $c$ strictly between the endpoints ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] in the $x$ variable to $x\mapsto f(x,y_1)-f(x,y_0)$. The stated existence of $f_x$ on an open neighbourhood gives the required one-variable regularity, and the rectangle difference is $(x_1-x_0)(f_x(\xi,y_1)-f_x(\xi,y_0))$. [L1, given, choose]

2.1 Apply [L1] in the $y$ variable to $y\mapsto f_x(\xi,y)$. Since $f_{xy}$ exists on an open neighbourhood, this one-variable map is continuous on the closed interval and differentiable on its interior. This yields $(y_1-y_0)f_{xy}(\xi,\eta)$ and proves the formula. [step 1.1, L1, given, choose] ∎
