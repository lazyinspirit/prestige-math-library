---
id: lem-cyclic-block-minimizer-value-continuity
kind: lemma
title: "Continuity of the cyclic block-minimum value"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-cyclic-exact-block-minimization
  - def-proper-closed-convex-function-on-rn
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §§4–5"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.2"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

Fix a block $i$ and define $m_i(a)=\min_u\{f(a,u)+g_i(u)\}$, where $a$ denotes all other blocks, $f$ is finite and continuous, and $g_i$ is proper closed convex. Suppose the minimizer map $T_i(a)$ exists, is unique, and is continuous on the parameter set in question. Then $m_i$ is continuous there.

## Facts & Assumptions

**Given:** The composite block problem and minimizer map in the Statement.

[F1] [[alg-cyclic-exact-block-minimization]]: $T_i(a)$ is the exact global minimizer of the $i$th block slice.

[F2] [[def-proper-closed-convex-function-on-rn]]: closed epigraph in finite dimensions is the lower-semicontinuity convention for $g_i$.

[A1] $f$ is continuous and $T_i$ is single-valued and continuous on the parameter set.

## Proof

1.1 Fix a parameter $a$, let $u=T_i(a)$, and put $m_i(a)=f(a,u)+g_i(u)$. For $\varepsilon>0$, set $c=g_i(u)-\varepsilon/3$. The weak sublevel $C_c=\{v:g_i(v)\le c\}$ is closed because $v\mapsto(v,c)$ is a continuous slice of the closed epigraph in [F2]; since $u\notin C_c$, its open complement contains a neighborhood of $u$ on which $g_i>c$. Continuity of $T_i$ and $f$ gives a relative neighborhood $V$ of $a$ on which $T_i(a')$ lies in that neighborhood and both $f(a',T_i(a'))$ and $f(a',u)$ differ from $f(a,u)$ by less than $\varepsilon/3$. Hence $m_i(a')>m_i(a)-2\varepsilon/3$. [A1, F2, given, algebra]

2.1 For each $a'\in V$, the point $u$ is a competitor, so $m_i(a')\le f(a',u)+g_i(u)<m_i(a)+\varepsilon/3$. Together with step 1.1, this gives $|m_i(a')-m_i(a)|<\varepsilon$, which is continuity of $m_i$ at the arbitrary parameter $a$. The argument uses neighborhoods and closed epigraphs directly; it does not infer topological continuity from a sequential criterion. [A1, F1, step 1.1, algebra] ∎

