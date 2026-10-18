---
id: lem-signorini-contact-set-closed-convex-nonempty
kind: lemma
title: "The Signorini contact set is nonempty, closed, and convex"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-signorini-contact-variational-inequality, def-signorini-partial-trace-space, lem-signorini-partial-trace-space-bounded, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, complete 52-page KTH lecture notes"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 §3.1, Theorem 3.1, printed pp. 26–28: obstacle feasible-set properties."
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§2, Theorem 1, printed pp. 964–965: coercive variational inequalities on nonempty closed convex sets."
---

## Statement

Under [[def-signorini-contact-variational-inequality]], $K$ is nonempty, closed, and convex in the Hilbert space $V$.

## Facts & Assumptions

**Given:** The polygon and partial-trace Hilbert space $V$, a continuous obstacle $\psi\le0$, a unit normal $n$, and $K=\{v\in V:T_Cv\cdot n\ge\psi\text{ a.e. on }\Gamma_C\}$.

[A1] The Axiom of Choice is inherited through the trace map and the Hilbert-space interface for $V$. ([[def-axiom-of-choice]], [[lem-signorini-partial-trace-space-bounded]])

[F1] The contact trace $T_C:V\to L^2(\Gamma_C;\mathbb R^2)$ is bounded and linear. ([[lem-signorini-partial-trace-space-bounded]])

[F2] The contact set is the preimage of the nonnegative cone under $v\mapsto T_Cv\cdot n-\psi$. ([[def-signorini-contact-variational-inequality]])

[F3] The contact segment has finite length and its continuous obstacle belongs to $L^2(\Gamma_C)$. ([[def-signorini-partial-trace-space]], [[def-signorini-contact-variational-inequality]])

## Proof

**Proof technique:** direct.

**Given:** $V$, $T_C$, $n$, and $\psi\le0$ as above.

1.1 The zero field belongs to $V$, and $T_C0\cdot n=0\ge\psi$ almost everywhere, so $0\in K$. If $v,w\in K$ and $0\le t\le1$, linearity of $T_C$ gives $T_C(tv+(1-t)w)\cdot n-\psi=t(T_Cv\cdot n-\psi)+(1-t)(T_Cw\cdot n-\psi)\ge0$ almost everywhere, so $tv+(1-t)w\in K$. [A1, F1, F2, given, algebra]

2.1 If $g_m\in L^2_+(\Gamma_C)$ and $g_m\to g$ in $L^2$, then $g^-:=\max\{-g,0\}\le|g-g_m|$ almost everywhere for each $m$, hence $\|g^-\|_2\le\|g-g_m\|_2\to0$ and $g\ge0$ almost everywhere. Thus the cone is closed; it is convex by pointwise convexity. By [F1] and [F3], the affine map $v\mapsto T_Cv\cdot n-\psi$ is continuous into $L^2(\Gamma_C)$, so its preimage of that closed convex cone is closed in $V$. This proves the claim. [A1, F1, F2, F3, algebra, step 1.1] ∎
