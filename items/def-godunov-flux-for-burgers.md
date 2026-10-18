---
id: def-godunov-flux-for-burgers
kind: definition
title: Godunov numerical flux for Burgers' equation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [ def-conservative-finite-volume-scheme ]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.2.3 and §3.4.1, pp. 88–89 and 94–96: Burgers flux, shock speed, and
        the two-state numerical flux interface."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "pp. 1–2: Burgers equation, Godunov reconstruction/evolution/averaging
        and the local Riemann problem."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

For Burgers' flux $f_B(s)=s^2/2$, define $G\colon\mathbb R^2\to\mathbb R$ as follows. If $a\le b$, set
$$ G(a,b)=\begin{cases} a^2/2,&a\ge0,\\ b^2/2,&a<0\text{ and }b\le0,\\ 0,&a<0<b. \end{cases} $$ If $b<a$, set $$ G(a,b)=\frac12\max\{a^2,b^2\}. $$
This is the Godunov flux for the convex Burgers flux: for increasing states it
uses the minimum of $f_B$ on $[a,b]$, and for decreasing states it uses the
maximum of $f_B$ on $[b,a]$. It is proposed as a particular numerical flux in
the scheme of [[def-conservative-finite-volume-scheme]]. Its continuity and
consistency are verified in the pair.
