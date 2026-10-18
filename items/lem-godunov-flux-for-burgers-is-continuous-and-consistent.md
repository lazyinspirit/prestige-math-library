---
id: lem-godunov-flux-for-burgers-is-continuous-and-consistent
kind: lemma
title: The Burgers Godunov flux is continuous and consistent
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [ def-godunov-flux-for-burgers, def-conservative-finite-volume-scheme ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1, pp. 94–96: the numerical flux has the diagonal consistency
        condition; §3.4.2, pp. 96–97: a scalar numerical flux is specified on
        pairs of states."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "pp. 1–2: Godunov construction for Burgers states."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

The map $G$ defined in [[def-godunov-flux-for-burgers]] is continuous on
$\mathbb R^2$ and satisfies $G(a,a)=f_B(a)=a^2/2$ for every $a\in\mathbb R$.

## Facts & Assumptions

**Given:** The flux definition $G$ and the consistency convention for a numerical
flux.

[F1] The case formula for $G(a,b)$, including its $a\le b$ branches and its
$b<a$ branch. ([[def-godunov-flux-for-burgers]])

[F2] A numerical flux for the scalar law with flux $f$ is consistent when it is
continuous and satisfies $F(a,a)=f(a)$ for every $a$. ([[def-conservative-finite-volume-scheme]])

## Proof
1.1 On each open region cut out by $a=b$, $a=0$, and $b=0$, the displayed formula in [F1] is either a polynomial, zero, or $(a^2+b^2+|a^2-b^2|)/4$, so it is continuous there. [F1, algebra]

2.1 At a boundary with $a=b>0$ both adjacent formulas tend to $a^2/2$; at $a=b<0$ both tend to $a^2/2$; at $a=0\le b$ the left and right limits are zero; at $a\le0=b$ the limits are zero. On the remaining axis portions $a=0>b$ and $b=0<a$, a neighborhood lies in the single shock branch $b<a$, whose formula is continuous there. At $(a,b)=(0,0)$ every branch has absolute value at most $\max\{a^2,b^2\}/2$, which tends to zero. These checks cover every branch boundary and prove continuity on all of $\mathbb R^2$. [F1, step 1.1, algebra]

3.1 On the diagonal, if $a\ge0$ the first branch gives $G(a,a)=a^2/2$; if $a<0$ the second branch gives $G(a,a)=a^2/2$. Thus $G(a,a)=f_B(a)$ for all $a$, and [F2] makes $G$ a consistent numerical flux. [F1, F2, algebra] ∎
