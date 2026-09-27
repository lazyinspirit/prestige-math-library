---
id: cor-closed-convex-set-is-an-intersection-of-closed-half-spaces
kind: corollary
title: A closed convex set is an intersection of closed half-spaces
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-separation-of-disjoint-convex-sets-one-open, def-weak-and-strict-separation, def-metric-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-closed-convex-set-is-an-intersection-of-closed-half-spaces). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Exercise 2.51
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

Assume the Axiom of Choice. Every nonempty closed convex $C\subseteq X$ is the intersection of the closed affine
half-spaces that contain $C$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a nonempty closed convex set $C\subseteq X$.

[F1] Disjoint convex sets with one open are strictly separated by a nonzero continuous functional ([[thm-separation-of-disjoint-convex-sets-one-open]]).

## Proof

**Proof technique:** direct.

1.1 Since every closed affine half-space in the family contains $C$, their intersection contains $C$. [given]

1.2 If $x\notin C$, choose $r>0$ with $B(x,r)\cap C=\varnothing$. The set $C+B(0,r/2)$ is open and convex and still omits $x$; [F1], using AC through its open-convex point-separation supplier, gives a nonzero continuous $f$ with $\operatorname{Re}f(c+b)<\operatorname{Re}f(x)$ for every $c\in C$ and $\|b\|<r/2$. [given, F1, choose]

2.1 Taking the supremum over $\|b\|<r/2$ in step 1.2 gives $\operatorname{Re}f(c)+(r/2)\|f\|\le\operatorname{Re}f(x)$ for every $c\in C$. Since $f\ne0$, the closed half-space $H_x=\{z:\operatorname{Re}f(z)\le\operatorname{Re}f(x)-(r/4)\|f\|\}$ contains $C$ and excludes $x$. Thus every exterior point is excluded from the intersection, proving equality. [step 1.2, algebra] ∎
