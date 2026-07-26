---
id: ex-closure-interior-boundary-of-q
kind: example
title: "$\\mathbb{Q}$ has closure $\\mathbb{R}$, empty interior, and boundary $\\mathbb{R}$"
status: draft
origin: session
deps: [def-interior-closure-boundary-r, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-neighbourhood-r, def-interval, lem-rat-embeds-dense, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Write $\mathbb{Q}_{\mathbb{R}}$ for the copy of $\mathbb{Q}$ inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). Then

$$\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}, \qquad (\mathbb{Q}_{\mathbb{R}})^{\circ} = \varnothing, \qquad \partial \mathbb{Q}_{\mathbb{R}} = \mathbb{R},$$

with closure, interior and boundary as in
[[def-interior-closure-boundary-r]]. So the rationals are as large as possible
for the closure operator and as small as possible for the interior operator at
once, and their boundary is everything.

## Facts & Assumptions

**Given:** The copy $\mathbb{Q}_{\mathbb{R}}$ of $\mathbb{Q}$ in $\mathbb{R}$ and the set $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of irrationals.

[L1] Interior, closure and boundary: $\partial A = \overline{A} \setminus A^{\circ}$, and $x \in A^{\circ}$ exactly when some $N_\varepsilon(x)$ is contained in $A$ ([[def-interior-closure-boundary-r]]).

[L2] Both $\mathbb{Q}_{\mathbb{R}}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

[L3] $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L4] $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$ ([[def-neighbourhood-r]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$: this is the density of $\mathbb{Q}_{\mathbb{R}}$ in [L2]. [L2]

1.2 $(\mathbb{Q}_{\mathbb{R}})^{\circ} = \varnothing$: suppose $x$ were in the interior; by [L1] there would be a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq \mathbb{Q}_{\mathbb{R}}$. But $\overline{X} = \mathbb{R}$ by [L2], so $x \in \overline{X}$ and every neighbourhood of $x$ meets $X$ by [L3]; a point of $N_\varepsilon(x) \cap X$ then lies in $\mathbb{Q}_{\mathbb{R}}$ and in its complement at once, which is impossible. [L1, L2, L3, L4]

1.3 By [L1] the boundary is $\partial \mathbb{Q}_{\mathbb{R}} = \overline{\mathbb{Q}_{\mathbb{R}}} \setminus (\mathbb{Q}_{\mathbb{R}})^{\circ}$. [L1]

2.1 Substituting steps 1.1 and 1.2 into step 1.3 gives $\partial \mathbb{Q}_{\mathbb{R}} = \mathbb{R} \setminus \varnothing = \mathbb{R}$, so all three assertions hold. [step 1.1, step 1.2, step 1.3, L1] ∎

## Remarks

- **The same computation applies verbatim to the irrationals.** $X$ is dense
  by [L2] and its complement $\mathbb{Q}_{\mathbb{R}}$ is dense too, so
  $\overline{X} = \mathbb{R}$, $X^{\circ} = \varnothing$ and
  $\partial X = \mathbb{R}$. Two complementary sets can therefore both have
  boundary everything, which is what the density of each of them forces.

- **Empty interior is not smallness in any counting sense.** $X$ has empty
  interior and is uncountable ([[cor-irrationals-uncountable]]), while
  $\mathbb{Q}_{\mathbb{R}}$ has empty interior and is countable
  ([[thm-rationals-countable]]). The interior measures whether the set contains
  an interval, and nothing else.

- **Where the density of the irrationals comes from.** It is proved in
  [[lem-q-and-irrationals-dense-r]] by counting: an interval is uncountable and
  the rationals are not, so an interval cannot consist of rationals alone. No
  explicit irrational is needed for this computation, though one is available
  ([[thm-of-square-roots]], [[fs-sqrt2-rational]]).
