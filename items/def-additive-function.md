---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
