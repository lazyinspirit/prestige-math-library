---
id: def-intervals-rectangles-and-complex-balls
kind: definition
title: Real intervals, complex rectangles and ball enclosures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-real-field, lem-nonnegative-square-root-exists-and-unique]
verification:
  precheck: n/a
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §5.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

A **real interval** is a closed set $[a,b]\subset\mathbb R$ with finite dyadic
endpoints $a\le b$. Its width is $b-a$, midpoint is $(a+b)/2$, and its
midpoint-radius form is $m+[-r,r]$ with $m=(a+b)/2$ and $r=(b-a)/2$. The empty
set is the status `empty`; the whole real line is `entire`. `overflow`,
`domain-error`, `split-domain`, and `inconclusive` are computation statuses,
not finite intervals.

A **complex rectangle** is $X+iY=\{x+iy:x\in X,\ y\in Y\}$ for real intervals
$X,Y$. Complex addition and multiplication use
$(x+iy)+(u+iv)=(x+u)+i(y+v)$ and
$(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$. For $z=x+iy$, its complex modulus is
$|z|=\sqrt{x^2+y^2}$, and for $z\ne0$ its reciprocal is
$1/z=(x-iy)/(x^2+y^2)$. A
**complex ball** $B(c,r)$ is
$\{z\in\mathbb C:|z-c|\le r\}$ with dyadic complex center $c$ and dyadic
$r\ge0$. For any two represented sets $S,T$, the inclusion order is
$S\sqsubseteq T$ iff $S\subseteq T$.

The width of a complex rectangle with coordinate widths $w_X,w_Y$ is its
Euclidean diameter $\sqrt{w_X^2+w_Y^2}$; the width of a ball $B(c,r)$ is its
diameter $2r$. Width comparisons against a dyadic tolerance can be decided by
exact rational comparisons after squaring the nonnegative quantities.

The **range** of a real or complex function $f$ on a set $S$ is
$f(S)=\{f(x):x\in S\cap\operatorname{dom}(f)\}$. A finite expression DAG is a
finite directed acyclic graph with input nodes, constant nodes, and operation
nodes; constants are exact dyadics or are supplied with certified enclosing
intervals. Sharing a node means the exact same intermediate value is reused.

