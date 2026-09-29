---
id: def-jacobian-matrix-affine-algebraic-set
kind: definition
title: "Equation rows and coordinate columns in an affine Jacobian"
status: published
origin: pipeline
deps: [def-coordinate-ring-affine-algebraic-set]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Milne, Algebraic Geometry, §4d, Definition 4.22"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Definition

Let $k$ be a field, let $I\subseteq k[t_1,\ldots,t_n]$ be an ideal with a
specified finite generating list $f_1,\ldots,f_r$, and let
$a=(a_1,\ldots,a_n)\in k^n$ satisfy $f(a)=0$ for every $f\in I$. The
**Jacobian matrix at $a$**, with the equation-row convention, is the $r\times n$ matrix
$$ J_{(f_1,\ldots,f_r)}(a)=\left(\frac{\partial f_i}{\partial t_j}(a)\right)_{1\le i\le r,\,1\le j\le n}. $$
Thus row $i$ is the differential of equation $f_i$, and column $j$ corresponds
to coordinate $t_j$. Formal derivatives are computed on monomials by
$$ \partial_{t_j}(t_1^{e_1}\cdots t_n^{e_n})=\begin{cases}e_jt_1^{e_1}\cdots t_j^{e_j-1}\cdots t_n^{e_n},&e_j>0,\\0,&e_j=0.\end{cases} $$
with the integer coefficient read in $k$, and are extended $k$-linearly. The
definition uses the actual scheme ideal $I$; it does not assume that $I$ is
radical or that $k$ is perfect. For a reduced classical algebraic set over an
algebraically closed field, this specializes to its coordinate ring
$k[X]=k[t_1,\ldots,t_n]/I(X)$ ([[def-coordinate-ring-affine-algebraic-set]]).

For a scheme-theoretic affine zero locus, an equation list for the same
underlying point set is not substituted for the actual ideal: nilpotent
structure changes the Jacobian problem.
