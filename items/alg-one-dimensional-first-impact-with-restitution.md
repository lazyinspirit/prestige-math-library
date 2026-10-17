---
id: alg-one-dimensional-first-impact-with-restitution
kind: algorithm
title: First-impact step for a one-dimensional unilateral contact
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

Input a gap $q\ge0$, velocity $v\in\mathbb R$, constant acceleration $a\in\mathbb R$, step horizon $h>0$, mass $m>0$, restitution $e\in[0,1]$, and a candidate-root budget $B\in\mathbb N$. Use exact real arithmetic and comparisons. Define $g(s)=q+sv+\tfrac12as^2$ and $w(s)=v+as$ on $[0,h]$. Return `impact`, `free-flight`, or `unresolved` by these instructions.

- If $q=0$ and $v<0$, return `impact` at $s=0$ with contact gap $0$, $v^-=v$, $J=-m(1+e)v^-$, and $v^+=-ev^-$.
- Otherwise form the complete candidate set $R$ of real roots of $g$. If $q=v=a=0$, set $R=\varnothing$. If $a=0$ and $v\ne0$, set $R=\{-q/v\}$. If $a=0$, $v=0$, and $q>0$, set $R=\varnothing$. If $a\ne0$, put $D=v^2-2aq$: for $D<0$ set $R=\varnothing$; for $D=0$ set $R=\{-v/a\}$; and for $D>0$ set $R=\{(-v-\sqrt D)/a,(-v+\sqrt D)/a\}$, with duplicate values removed. If $|R|>B$, return `unresolved`. From $R$, retain exactly the values $s$ satisfying $0<s\le h$ and $w(s)<0$, and order them increasingly.
- If the retained list is nonempty, take its least value $s$, set $v^-=w(s)$, $J=-m(1+e)v^-$, and $v^+=-ev^-$, and return `impact` with time $s$, contact gap $0$, impulse $J$, and post-impact velocity $v^+$.
- If the retained list is empty, compute the minimum of $g$ on $[0,h]$ by evaluating its two endpoints and, when $a>0$ and $-v/a\in(0,h)$, its vertex $-v/a$. If this minimum is negative, return `unresolved`; otherwise return `free-flight` with endpoint $(g(h),w(h))$ and impulse $0$.

The candidate set contains every root of the nonzero polynomial $g$, so the retained list is complete. The vertex check certifies nonpenetration over the whole step, including a grazing zero. The procedure stops after this first event and returns at the event time; it does not integrate the post-impact mode, sustained contact, or repeated impacts. A numerical implementation that cannot certify an exact comparison returns `unresolved`.
