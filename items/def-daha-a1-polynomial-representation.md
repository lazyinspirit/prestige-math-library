---
id: def-daha-a1-polynomial-representation
kind: definition
title: "The rank-one DAHA polynomial representation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-daha-a1-double-affine-hecke-algebra, def-daha-a1-root-datum-and-parameter-conventions, lem-daha-a1-bernstein-quotients-are-laurent]
justified_by: [lem-daha-a1-polynomial-operators-satisfy-presentation]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, Theorem 4.3 and type-A1 formulas, PDF pp. 22–23."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§§7.11–7.13, PDF pp. 56–59."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

The **polynomial representation** is the action of $\mathcal H_{q,t}(A_1)$ on $\mathcal P=K[z,z^{-1}]$ specified by sending $Z$ to multiplication by $z$, $Z^{-1}$ to multiplication by $z^{-1}$, $\pi$ to $f(z)\mapsto f(q^{-1}z^{-1})$, and $T_i$ to

$$
(\mathsf T_i f)(z)=t f(s_i z)+(t-t^{-1})\frac{f(s_i z)-f(z)}{z^{-\alpha_i}-1},\qquad i=0,1,
$$

with $s_1z=z^{-1}$, $s_0z=q^{-2}z^{-1}$, $z^{-\alpha_1}=z^{-2}$, and $z^{-\alpha_0}=q^2z^2$. The quotient is interpreted by the finite Laurent sums in [[lem-daha-a1-bernstein-quotients-are-laurent]]. Well-definedness as an algebra action is proved in [[lem-daha-a1-polynomial-operators-satisfy-presentation]].
