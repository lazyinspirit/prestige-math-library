---
id: def-left-and-right-kan-extension
kind: definition
title: "Left and right Kan extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-functor-and-contravariant-functor, def-natural-transformation]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 6.1.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter X.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §§4.1-4.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$, $\mathcal D$, and $\mathcal E$ be categories, let
$K:\mathcal C\to\mathcal D$ be a functor, and let
$F:\mathcal C\to\mathcal E$ be a functor
([[def-functor-and-contravariant-functor]]).

A **left Kan extension** of $F$ along $K$ is a functor
$L:\mathcal D\to\mathcal E$ together with a natural transformation

$$\eta:F\Rightarrow LK$$

([[def-natural-transformation]]) such that for every functor
$M:\mathcal D\to\mathcal E$ and every natural transformation
$\alpha:F\Rightarrow MK$, there exists a unique natural transformation
$\overline{\alpha}:L\Rightarrow M$ with

$$\alpha=(\overline{\alpha}K)\circ\eta.$$

Thus $(L,\eta)$ is initial among pairs $(M,\alpha)$ with
$\alpha:F\Rightarrow MK$.

A **right Kan extension** of $F$ along $K$ is a functor
$R:\mathcal D\to\mathcal E$ together with a natural transformation

$$\varepsilon:RK\Rightarrow F$$

such that for every functor $M:\mathcal D\to\mathcal E$ and every natural
transformation $\beta:MK\Rightarrow F$, there exists a unique natural
transformation $\overline{\beta}:M\Rightarrow R$ with

$$\beta=\varepsilon\circ(\overline{\beta}K).$$

Thus $(R,\varepsilon)$ is terminal among pairs $(M,\beta)$ with
$\beta:MK\Rightarrow F$.
