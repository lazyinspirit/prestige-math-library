---
id: lem-na-weno5-optimal-linear-reconstruction
kind: lemma
title: The WENO5 ideal linear weights reproduce quartics at the right face
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - cor-taylor-remainder-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chi-Wang Shu, Essentially Non-Oscillatory and Weighted Essentially Non-Oscillatory Schemes for Hyperbolic Conservation Laws, complete lecture notes"
      url: "https://www3.nd.edu/~zxu2/acms60790S13/Shu-WENO-notes.pdf"
      locator: "§2.2.2, PDF pp. 18–21: optimal linear weights, candidate cell-average reconstructions and fifth-order consistency."
    - title: "Guang-Shan Jiang and Chi-Wang Shu, Efficient Implementation of Weighted ENO Schemes"
      url: "https://lsec.cc.ac.cn/lcfd/DEWENO/paper/WENO_1996.pdf"
      locator: "§§2–3, PDF pp. 3–13: fifth-order WENO candidate functionals and their optimal linear combination."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $h>0$, let $I_j=[jh,(j+1)h)$, and let $x_{i+1/2}=(i+1)h$. For $u\in C^5$ on the union of cells $I_{i-2},\ldots,I_{i+2}$, let $p_0,p_1,p_2$ be the cell-average functionals in [[def-na-high-resolution-reconstruction]]. Each candidate reproduces every polynomial of degree at most two exactly at $x_{i+1/2}$. The ideal combination $p_{opt}=p_0/10+3p_1/5+3p_2/10$ reproduces every polynomial of degree at most four and satisfies $|p_{opt}-u(x_{i+1/2})|\le (23/15)(3^5/5!)\,\sup|u^{(5)}|\,h^5$. Each candidate separately satisfies $|p_k-u(x_{i+1/2})|\le15\sup|u'''|h^3$.

## Facts & Assumptions

**Given:** Uniform cell averages of a C5 function, the three candidate functionals and the ideal weights in [[def-na-high-resolution-reconstruction]].

[F1] [[def-na-high-resolution-reconstruction]]: the candidate coefficient vectors, in order $(U_{i-2},U_{i-1},U_i,U_{i+1},U_{i+2})$, are $(2,-7,11,0,0)/6$, $(0,-1,5,2,0)/6$, and $(0,0,2,5,-1)/6$; the ideal weights are $(1/10,3/5,3/10)$.

[F2] [[cor-taylor-remainder-bound]]: if $|u^{(m+1)}|\le M$ on the interval between a center $c$ and $x$, the degree-$m$ Taylor polynomial at $c$ has remainder bounded by $M|x-c|^{m+1}/(m+1)!$.

## Proof

1.1 Combining the three coefficient vectors in [F1] gives $p_{opt}=(2U_{i-2}-13U_{i-1}+47U_i+27U_{i+1}-3U_{i+2})/60$. [F1, algebra]

1.2 For $p_0$, the coefficient vector $(2,-7,11)$ has dot products $6$, $0$, and $0$ with the average vectors $(1,1,1)$, $(-5/2,-3/2,-1/2)$, and $(19/3,7/3,1/3)$. For $p_1$, $(-1,5,2)$ has dot products $6$, $0$, and $0$ with $(1,1,1)$, $(-3/2,-1/2,1/2)$, and $(7/3,1/3,1/3)$. For $p_2$, $(2,5,-1)$ has dot products $6$, $0$, and $0$ with $(1,1,1)$, $(-1/2,1/2,3/2)$, and $(1/3,1/3,7/3)$. After division by $6$, each candidate exactly reproduces $1,z,z^2$ at the face. The degree-two Taylor polynomial at $x_{i+1/2}$ therefore cancels from $p_k-u(x_{i+1/2})$. By [F2], the pointwise remainder on each stencil is bounded by $M_3(3h)^3/3!$, where $M_3=\sup|u'''|$; averaging preserves this bound. The largest sum of absolute candidate coefficients is $10/3$, giving $|p_k-u(x_{i+1/2})|\le(10/3)M_3(3h)^3/6=15M_3h^3$. [F1, F2, algebra]

2.1 Write $z=(x-x_{i+1/2})/h$. The vectors of cell averages of $1,z,z^2,z^3,z^4$ over the five cells, ordered from $i-2$ through $i+2$, are respectively $(1,1,1,1,1)$, $(-5/2,-3/2,-1/2,1/2,3/2)$, $(19/3,7/3,1/3,1/3,7/3)$, $(-65/4,-15/4,-1/4,1/4,15/4)$, and $(211/5,31/5,1/5,1/5,31/5)$. Direct multiplication gives dot products $60/60$, $0/60$, $0/180$, $0/240$, and $0/300$ with $(2,-13,47,27,-3)/60$, respectively. Thus the functional in step 1.1 returns the value at $z=0$ for every polynomial of degree at most four. [step 1.1, algebra]

3.1 Let $T_4$ be the degree-four Taylor polynomial of $u$ at $x_{i+1/2}$ and put $M_5=\sup|u^{(5)}|$ on the stencil. By [F2], the cell-average remainder after subtracting $T_4$ has magnitude at most $M_5(3h)^5/5!$ in each cell. Step 2.1 reproduces $T_4$ exactly, and the absolute coefficients of $p_{opt}$ sum to $(2+13+47+27+3)/60=23/15$. Therefore $|p_{opt}-u(x_{i+1/2})|\le(23/15)M_5(3h)^5/5!$, as claimed. [F1, F2, step 2.1, algebra] ∎

