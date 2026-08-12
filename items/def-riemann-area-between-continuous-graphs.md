---
id: def-riemann-area-between-continuous-graphs
kind: definition
title: "Riemann area between two continuous graphs and the disc as a vertically simple region"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-continuous-implies-integrable, def-darboux-integral, thm-of-square-roots, thm-continuous-inverse, thm-algebra-of-continuous-functions, lem-power-monotone]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "H. J. Keisler, Elementary Calculus, chapter 4A, section 4.4"
      url: "https://people.math.wisc.edu/~hkeisler/chapter_4a.pdf"
pipeline_run: null
---

## Definition

Let $a<b$, and let $g,f:[a,b]\to\mathbb R$ be continuous with $g(x)\le f(x)$ for every $x$. The **Riemann area between their graphs** is

$$\operatorname{area}\{(x,y):a\le x\le b,\ g(x)\le y\le f(x)\}:=\int_a^b(f(x)-g(x))\,dx.$$

The integral exists by [[thm-continuous-implies-integrable]] and is the Darboux integral of [[def-darboux-integral]]. The square map is continuous by [[thm-algebra-of-continuous-functions]] and strictly increasing on the nonnegative reals by [[lem-power-monotone]], so [[thm-continuous-inverse]] makes its inverse square-root function continuous; existence and uniqueness are [[thm-of-square-roots]]. Hence, for $r>0$, the functions $x\mapsto\pm\sqrt{r^2-x^2}$ are well defined and continuous on $[-r,r]$, and the closed disc of radius $r$ is the region between them.

This is a local convention for regions between continuous graphs. It does not assign an area to an arbitrary bounded planar set.
