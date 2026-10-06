---
id: "lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed"
kind: "lemma"
title: "The obstacle admissible set is nonempty, convex, closed and weakly closed"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 8
deps:
  - "cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences"
  - "cor-positive-negative-part-and-truncation-calculus-in-w-one-p"
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-weak-convergence-of-nets-and-sequences"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-norm-closed-convex-sets-are-weakly-closed"
  - "lem-one-dimensional-trace-truncation-compatibility"
  - "lem-positive-part-of-a-zero-trace-function-has-zero-trace"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 Section 3.1, printed pp. 26-27 (the admissible set of the obstacle problem: nonemptiness, convexity and closedness)"
---

## Statement

Assume Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), inherited through the truncation and trace suppliers named below. Let $n\ge1$; when $n=1$ use a bounded interval and the endpoint trace of [[lem-one-dimensional-trace-truncation-compatibility]], and when $n\ge2$ use a bounded $C^1$ domain with the published trace definitions ([[def-bounded-c-k-domain-and-boundary-charts]]). Let $\psi\in H^1(\Omega;\mathbb R)$ satisfy $T\psi\le0$ (componentwise at the endpoints for $n=1$, almost everywhere on $\partial\Omega$ for $n\ge2$), so that $K=\{v\in H^1_0(\Omega):v\ge\psi\text{ a.e.}\}$ is the admissible set of [[def-closed-convex-obstacle-set-and-variational-inequality]] ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]). Then $K$ is nonempty, convex, closed in the norm of $H^1_0(\Omega)$ and weakly sequentially closed: if $(v_j)\subseteq K$ and $v_j\rightharpoonup v$ in $H^1_0(\Omega)$, then $v\in K$ ([[def-weak-convergence-of-nets-and-sequences]]).

## Facts & Assumptions

**Given:** The setting above and an obstacle $\psi\in H^1(\Omega;\mathbb R)$ with $T\psi\le0$; the admissible set $K=\{v\in H^1_0(\Omega):v\ge\psi\text{ a.e.}\}$.

[F1] [[def-closed-convex-obstacle-set-and-variational-inequality]]: the boundary condition $T\psi\le0$ is equivalent to $\psi^+\in H^1_0(\Omega)$ (through the interval lemma for $n=1$ and [[lem-positive-part-of-a-zero-trace-function-has-zero-trace]] for $n\ge2$), and $K$ is defined by the representative-independent almost-everywhere inequality $v\ge\psi$.

[F2] [[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]: $\psi^+=\max\{\psi,0\}$ is the class of the pointwise maximum, and on representatives $\psi^+\ge\psi$ pointwise.

[F3] [[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]: a sequence converging in $L^2(\Omega)$ has a subsequence converging almost everywhere on $\Omega$; a sequence converging in $H^1_0(\Omega)$ therefore has such a subsequence, since the $H^1_0$ norm dominates the $L^2$ norm ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]: $H^1_0(\Omega)$ is a closed linear subspace of $H^1(\Omega)$, and the almost-everywhere inequality $v\ge\psi$ is a condition on classes, independent of representatives.

[F5] [[lem-norm-closed-convex-sets-are-weakly-closed]]: under the Axiom of Choice a convex norm closed subset of a normed space is weakly closed, hence weakly sequentially closed.

## Proof

**Proof technique:** direct.

**Given:** The setting above, with $T\psi\le0$ and $K$ as defined.

1.1 (Nonemptiness) By [F1] the boundary condition gives $\psi^+\in H^1_0(\Omega)$, and by [F2] one has $\psi^+\ge\psi$ almost everywhere, so $\psi^+\in K$. [given, F1, F2]

1.2 (Convexity) Let $v,w\in K$ and $0\le t\le1$. Then $tv+(1-t)w\in H^1_0(\Omega)$ because $H^1_0(\Omega)$ is a linear subspace [F4], and $tv+(1-t)w\ge\psi$ almost everywhere because this holds for $v$ and $w$; hence $tv+(1-t)w\in K$ and $K$ is convex. [given, F4]

1.3 (Norm closedness) Let $(v_j)\subseteq K$ with $v_j\to v$ in $H^1_0(\Omega)$. By [F3] a subsequence converges to $v$ almost everywhere, and $v_j\ge\psi$ almost everywhere for every $j$, so $v\ge\psi$ almost everywhere; since $H^1_0(\Omega)$ is closed in $H^1(\Omega)$ [F4], $v\in H^1_0(\Omega)$ and hence $v\in K$ by [F4]. [given, F3, F4]

2.1 (Weak sequential closedness and conclusion) By steps 1.1-1.3 the set $K$ is nonempty, convex and norm closed; [F5] therefore makes $K$ weakly closed, so in particular weakly sequentially closed: every weakly convergent sequence in $K$ has its limit in $K$. This proves all the assertions; the choice principles enter only through the truncation interface of [F1] and the weak-closedness criterion [F5]. [step 1.1, step 1.2, step 1.3, F5] ∎

