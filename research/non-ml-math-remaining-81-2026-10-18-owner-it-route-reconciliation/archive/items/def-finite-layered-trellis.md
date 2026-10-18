---
id: def-finite-layered-trellis
kind: definition
title: Finite weighted trellises
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all path sets and maxima are finite."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Definition

A **finite weighted trellis** of length $T\ge 1$ consists of finite vertex sets
$V_1,\ldots,V_T$, edge sets $E_t\subseteq V_{t-1}\times V_t$ for
$2\le t\le T$, positive edge weights $w_t:E_t\to(0,\infty)$, and initial
and terminal weights $\alpha:V_1\to[0,\infty)$ and
$\beta:V_T\to[0,\infty)$. The sets $V_t$ may be empty. A zero initial or
terminal weight disables that endpoint; every edge in $E_t$ is allowed and has
positive weight.

A **path** is a tuple $(v_1,\ldots,v_T)$ with $v_t\in V_t$,
$\alpha(v_1)>0$, $\beta(v_T)>0$, and $(v_{t-1},v_t)\in E_t$ for every
$2\le t\le T$. Its **score** is
$$\alpha(v_1)\left(\prod_{t=2}^{T}w_t(v_{t-1},v_t)\right)\beta(v_T),$$
where the empty product for $T=1$ is $1$.

A **prefix path through layer $t$** satisfies the same conditions through
$v_t$, without a terminal-weight condition. A vertex $v\in V_t$ is
**reachable** if some prefix path ends at $v$; otherwise it is **unreachable**.
There are finitely many paths. If at least one path exists, its maximum score is
attained; if none exists, the trellis has no admissible path.
