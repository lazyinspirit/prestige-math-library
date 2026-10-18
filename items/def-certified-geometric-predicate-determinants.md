---
id: def-certified-geometric-predicate-determinants
kind: definition
title: Dyadic orientation and lifted sphere determinants
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dyadic-floating-point-format-and-directed-rounding, def-intervals-rectangles-and-complex-balls, def-complete-ordered-real-field]
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Definition

Use [[def-dyadic-floating-point-format-and-directed-rounding]]: each finite
binary coordinate is interpreted as its exact dyadic rational $m2^e$. Write
$\mathbb D=\{m2^e:m,e\in\mathbb Z\}$. All real signs and squared-distance
comparisons use the order of [[def-complete-ordered-real-field]]. For a positive
integer $s\ge1$ and a square matrix $M=(M_{ij})_{0\le i,j<s}$ over $\mathbb D$, define
$$
\det M=\sum_{\pi\in S_s}\operatorname{sgn}(\pi)\prod_{i=0}^{s-1}M_{i,\pi(i)},
$$
where $S_s$ is the set of permutations of $\{0,\ldots,s-1\}$ and
$\operatorname{sgn}(\pi)=(-1)^{\operatorname{inv}(\pi)}$ with
$\operatorname{inv}(\pi)=\#\{(i,j):i<j,\ \pi(i)>\pi(j)\}$.

For $d\in\{2,3\}$ and ordered points $p_0,\ldots,p_d\in\mathbb D^d$, let
$H_d$ have row $i$ equal to $(p_i,1)$ and put $O_d=\det H_d$. The orientation
predicate returns $\operatorname{sgn}(O_d)\in\{-1,0,+1\}$, where
$\operatorname{sgn}(x)=+1$ for $x>0$, $0$ for $x=0$, and $-1$ for $x<0$. For ordered points
$p_0,\ldots,p_{d+1}$, let $K_d$ have row $i$ equal to
$(p_i,\sum_{j=1}^d p_{i,j}^2,1)$ and put $L_d=\det K_d$. The raw incircle
predicate ($d=2$) or insphere predicate ($d=3$) returns
$\operatorname{sgn}(L_d)$; its zero is an exact determinant zero. The row order
is the point order displayed, and the column order is the coordinate columns,
then squared norm, then $1$. If $O_d\ne0$, define the orientation-normalized
side sign algebraically to be $\operatorname{sgn}(O_dL_d)$. Whenever a sphere
through $p_0,\ldots,p_d$ is specified, positive means inside it, zero means on
it, and negative means outside. If
$O_d=0$, the base simplex is degenerate and only the raw lifted determinant
sign is specified.

An uncertain coordinate input is a real interval with finite dyadic endpoints,
as defined in [[def-intervals-rectangles-and-complex-balls]]. Its values remain
uncertain throughout a certified computation; a midpoint is not substituted.
For real $c\in\mathbb R^d$ and $r\ge0$, write
$S(c,r)=\{x\in\mathbb R^d:\sum_j(x_j-c_j)^2=r^2\}$; inside, on, and outside
mean that this squared distance is less than, equal to, or greater than $r^2$.

