---
id: def-pointwise-kan-extension-by-the-comma-category-formula
kind: definition
title: "Pointwise Kan extensions by the comma-category formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-kan-extension, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, def-comma-slice-and-coslice-categories]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 6.2.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter X.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors.

Suppose $(L,\eta)$ is a left Kan extension of $F$ along $K$
([[def-left-and-right-kan-extension]]). It is **pointwise** when, for every
object $d$ of $\mathcal D$, the value $L(d)$ is computed by the comma-category
colimit of
[[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]:
the family of morphisms

$$L(u)\circ\eta_c:F(c)\longrightarrow L(d)$$

indexed by the objects $(c,u:Kc\to d)$ of $(K\downarrow d)$
([[def-comma-slice-and-coslice-categories]]) is a colimit cocone of the
diagram $(K\downarrow d)\to\mathcal C\to\mathcal E$. In particular, at
$d=Kc$ and $u=1_{Kc}$ this leg is $\eta_c$.

Suppose instead that $(R,\varepsilon)$ is a right Kan extension of $F$ along
$K$. It is **pointwise** when, for every object $d$ of $\mathcal D$, the value
$R(d)$ is computed by the comma-category limit formula: the family

$$\varepsilon_c\circ R(u):R(d)\longrightarrow F(c)$$

indexed by the objects $(c,u:d\to Kc)$ of $(d\downarrow K)$ is a limit cone of
the diagram $(d\downarrow K)\to\mathcal C\to\mathcal E$. In particular, at
$d=Kc$ and $u=1_{Kc}$ this leg is $\varepsilon_c$.
