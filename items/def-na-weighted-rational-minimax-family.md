---
id: def-na-weighted-rational-minimax-family
kind: definition
title: "Weighted rational minimax families and defect"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-complete-ordered-field
  - def-interval
  - lem-na-reduced-rational-representation-unique
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–200, real rational functions, reduced degrees, and defect."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §6"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 43–44, the irreducible type-(m,n) family and defect."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $I=[a,b]$ with $a<b$, let $m,n\in\mathbb N_0$, and let
$f,w\in C(I,\mathbb R)$ with $w(x)>0$ for every $x\in I$. A normalized
reduced pair is a pair of real polynomials $p,q$ such that $q>0$ on $I$,
$\deg p\le m$, $\deg q\le n$, $p$ and $q$ have no nonconstant common
divisor, and
$$\|q\|_{\mathrm{coef},2}:=\left(\sum_{j=0}^{n}q_j^2\right)^{1/2}=1\quad\text{when }q(x)=\sum_{j=0}^{n}q_jx^j.$$
The zero rational function is represented by $(p,q)=(0,1)$. By
[[lem-na-reduced-rational-representation-unique]], each rational function
admissible under these conditions has exactly one normalized reduced pair.
Define
$$\mathcal R_{m,n}^+(I):=\{p/q:(p,q)\text{ is a normalized reduced pair}\}$$
and
$$E_{m,n}(f,w;I):=\inf_{r\in\mathcal R_{m,n}^+(I)}\|w(f-r)\|_{\infty,I}.$$
The family is nonempty because it contains $r=0$. For each admissible $r=p/q$,
$q>0$ on $I$ makes $r$ continuous by
[[thm-algebra-of-continuous-functions]], so $w(f-r)$ is continuous and bounded
on compact $I$. The infimum is therefore finite, bounded below by zero, and
exists as a real number by completeness of $\mathbb R$.

For $r=p/q\ne0$ in reduced form, put
$$d_{m,n}(r):=\min\{m-\deg p,\ n-\deg q\},\qquad N_{m,n}(r):=m+n-d_{m,n}(r).$$
For $r=0$, define $d_{m,n}(0):=n$ and hence $N_{m,n}(0):=m$. The integer
$d_{m,n}(r)$ is the defect. A candidate is **normal** when $d_{m,n}(r)=0$
and **defective** when $d_{m,n}(r)>0$. The alternation count associated with
the candidate is $N_{m,n}(r)+2$; it equals $m+n+2$ only in the normal case.
