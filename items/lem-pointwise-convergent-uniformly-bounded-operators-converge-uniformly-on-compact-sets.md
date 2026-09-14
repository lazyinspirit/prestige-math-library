---
id: lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets
kind: lemma
title: "Uniformly bounded pointwise-convergent operators converge uniformly on compact sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-operator-norm]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Compact-net argument used after Theorem 3.1.6, printed p.68"
pipeline_run: phase-2-next-18
---

## Statement

Let $X,Y$ be normed spaces and let $T_n:X\to Y$ be bounded linear operators
with $M_0:=\sup_n\|T_n\|<\infty$. If $T_nx\to Tx$ for every $x\in X$, then
$T$ is bounded and $T_n\to T$ uniformly on every norm-compact subset of $X$.

## Facts & Assumptions

[L1] For a bounded linear operator, $\|Sx\|\le\|S\|\|x\|$
([[def-operator-norm]]).

[L2] The maps $T_n$ are bounded linear operators
([[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Passing to limits in the linear identities for [L2] shows that $T$ is [given, L2, L1]
linear. By [L1], $\|Tx\|=\lim_n\|T_nx\|\le M_0\|x\|$, so $T$ is bounded and
$\|T\|\le M_0$. [L1, L2, pointwise limit]

2.1 Put $M:=M_0+\|T\|$. If $M=0$, every $T_n$ and $T$ is zero and the result [given, step 1.1]
is immediate. Suppose $M>0$, fix compact $C$ and $\varepsilon>0$, and choose a
finite $\varepsilon/(3M)$-net $x_1,\ldots,x_r$ in $C$. [step 1.1, compactness]

3.1 Pointwise convergence gives $n_0$ such that [given, L1, step 2.1]
$\|(T_n-T)x_j\|<\varepsilon/3$ for all $j$ and $n\ge n_0$. For $x\in C$ choose
$j$ with $\|x-x_j\|<\varepsilon/(3M)$. Then [L1] gives

$$\|(T_n-T)x\|\le M\|x-x_j\|+\|(T_n-T)x_j\|<2\varepsilon/3<\varepsilon.$$

Thus convergence is uniform on $C$. [L1, step 2.1, finite maximum] ∎
