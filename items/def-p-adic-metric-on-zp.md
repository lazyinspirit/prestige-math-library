---
id: def-p-adic-metric-on-zp
kind: definition
title: "The p-adic metric on Zp is determined by the first coordinate at which two compatible residue systems differ"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-adic-integers-as-compatible-residue-classes]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
---

## Definition

For $x=(x_n)$ and $y=(y_n)$ in $\mathbb Z_p$, let

$$ \nu_p(x,y):=\sup\{m\ge0:x_r=y_r\text{ in }\mathbb Z/p^r\mathbb Z\text{ for every }1\le r\le m\}, $$

with $\nu_p(x,y)=\infty$ when $x=y$. The **$p$-adic metric** on $\mathbb Z_p$ is

$$d_p(x,y):=\begin{cases}0,&x=y,\\ p^{-\nu_p(x,y)},&x\ne y.\end{cases}$$

Thus $d_p(x,y)$ is small exactly when the initial residue coordinates of $x$
and $y$ agree for a long stretch. This metric is defined directly on the
compatible-tuple model of [[def-p-adic-integers-as-compatible-residue-classes]].
