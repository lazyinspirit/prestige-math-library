---
id: alg-one-dimensional-first-impact-with-restitution
kind: algorithm
title: First-impact step for a one-dimensional unilateral contact
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 1.1.1, pp. 2–3; scalar gap, impulse, restitution, and complementarity conventions.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; normal-cone and indicator conventions used elsewhere on the page.
---

## Definition

Input a gap $q\ge0$, velocity $v\in\mathbb R$, constant acceleration $a\in\mathbb R$, step horizon $h>0$, mass $m>0$, restitution $e\in[0,1]$, and a finite root-search budget $B\in\mathbb N$. Define the free-flight gap and velocity by $g(s)=q+sv+\tfrac12as^2$ and $w(s)=v+as$ for $0\le s\le h$. Return one of `impact`, `free-flight`, or `unresolved` as follows.

1. If $q=0$ and $v<0$, set the event time $s=0$.
2. Otherwise find all distinct roots $s\in(0,h]$ of $g(s)=0$ for which $w(s)<0$, in increasing order. The root search must certify that this list is complete within budget $B$. If it cannot, return `unresolved`.
3. If the list is nonempty, take its first root, set $v^-=w(s)$ and $J=-m(1+e)v^-$, and return `impact` with event time $s$, contact gap $0$, impulse $J$, and post-impact velocity $v^+=-e v^-$.
4. If there is no incoming root, certify $g(r)\ge0$ for every $r\in[0,h]$. If this fails or cannot be certified within $B$, return `unresolved`; otherwise return `free-flight` with endpoint $(g(h),w(h))$ and impulse $0$.

The procedure stops after this first event and returns at the event time. It does not integrate the post-impact mode, sustained contact, or repeated impacts. Its exact algebraic branch uses at most two distinct quadratic roots; a numerical root solver must report a certificate or `unresolved` when its budget is exhausted.
