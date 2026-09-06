---
id: cor-closed-convex-set-is-an-intersection-of-closed-half-spaces
kind: corollary
title: A closed convex set is an intersection of closed half-spaces
status: draft
origin: pipeline
deps: [thm-separation-of-disjoint-convex-sets-one-open, def-weak-and-strict-separation, def-metric-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Exercise 2.51
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

Every nonempty closed convex $C\subseteq X$ is the intersection of the closed affine
half-spaces that contain $C$.

## Facts & Assumptions

**Given:** A nonempty closed convex set $C\subseteq X$.

[F1] Disjoint convex sets with one open are strictly separated by a nonzero continuous functional ([[thm-separation-of-disjoint-convex-sets-one-open]]).

## Proof

**Proof technique:** direct.

1.1 Since every closed affine half-space in the family contains $C$, their intersection contains $C$. [given]

1.2 If $x\notin C$, choose $r>0$ with $B(x,r)\cap C=\varnothing$. The set $C+B(0,r/2)$ is open and convex and still omits $x$; [F1] separates it from $\{x\}$. [given, F1, choose]

2.1 The closed half-space $H_x=\{z:\operatorname{Re}f(z)\le\operatorname{Re}f(x)-\varepsilon\}$ obtained by taking a positive fraction of the separation gap contains $C$ and excludes $x$. Thus every exterior point is excluded from the intersection, proving equality. [step 1.2, algebra] ∎
