---
id: def-delta-and-zeta-incidence-functions
kind: definition
title: "The delta and zeta incidence functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-incidence-algebra-and-convolution, def-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "Y. Guan and Y. Zhang, Additive Biderivations of Incidence Algebras, §2.1"
      url: "https://arxiv.org/abs/2412.18049"
pipeline_run: null
---

## Definition

Let $P$ be locally finite and let $R$ be a commutative ring with zero $0_R$ and identity $1_R$ ([[def-ring]]). The **delta function** and **zeta function** in $I(P,R)$ ([[def-incidence-algebra-and-convolution]]) are

$$\delta(x,y):=\begin{cases}1_R,&x=y,\\0_R,&x<y,\end{cases}\qquad \zeta(x,y):=1_R\quad(x\le y).$$

Both are functions on the comparable pairs of $P$. The delta function is supported on the diagonal, while the zeta function is constant on every interval.
