---
id: lem-fenchel-young-equality-characterizes-subgradients
kind: lemma
title: "Fenchel–Young inequality and its equality case"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - def-extended-real-epsilon-subdifferential
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $f:\mathbb R^n\to(-\infty,+\infty]$ be proper and convex. For every
$x,s\in\mathbb R^n$,
$$f(x)+f^*(s)\ge\langle s,x\rangle,$$
with extended-real interpretation. Equality holds exactly when
$x\in\operatorname{dom}f$, $f^*(s)<+\infty$, and
$s\in\partial f(x)$; equivalently, for proper convex $f$, equality itself
forces the two finiteness conditions and the subgradient membership.

## Facts & Assumptions

**Given:** Proper convex $f$, $x,s\in\mathbb R^n$.

[A1] The function $f$ is proper and convex.


[F1] [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]: $f^*(s)=\sup_z(\langle s,z\rangle-f(z))$.

[F2] [[def-extended-real-epsilon-subdifferential]]: for $x\in\operatorname{dom}f$, $s\in\partial f(x)$ iff $f(z)\ge f(x)+\langle s,z-x\rangle$ for every $z\in\mathbb R^n$.

## Proof


1.1 If $f(x)=+\infty$, the left side is $+\infty$ because [F1] and properness ensure $f^*(s)>-\infty$, so the inequality is true and equality is impossible. If $f(x)<+\infty$, the term $z=x$ in [F1] gives $f^*(s)\ge\langle s,x\rangle-f(x)$, proving the inequality; if $f^*(s)=+\infty$, equality is again impossible. [A1, F1, given]

2.1 Assume now $f(x)$ and $f^*(s)$ are finite. Equality in step 1.1 holds iff the supremum in [F1] equals its $z=x$ term, which is equivalent to $$\langle s,z\rangle-f(z)\le\langle s,x\rangle-f(x)\quad\text{for every }z\in\operatorname{dom}f.$$ Rearranging gives precisely the inequalities in [F2]; for $z\notin\operatorname{dom}f$ they hold automatically. Thus equality is equivalent to $s\in\partial f(x)$, and the converse follows by reversing these inequalities. [A1, F1, F2, step 1.1, algebra] ∎
