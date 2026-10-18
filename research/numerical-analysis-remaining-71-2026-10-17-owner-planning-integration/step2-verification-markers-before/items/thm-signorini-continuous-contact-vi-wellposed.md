---
id: thm-signorini-continuous-contact-vi-wellposed
kind: theorem
title: "Continuous frictionless elasticity contact is well posed"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-signorini-contact-variational-inequality, def-signorini-elasticity-contact-model, lem-signorini-contact-set-closed-convex-nonempty, lem-signorini-elasticity-form-bounded, lem-signorini-partial-dirichlet-korn-coercivity, lem-signorini-partial-trace-space-bounded, thm-stampacchia-variational-inequality, thm-lipschitz-stability-of-strongly-monotone-variational-inequalities, thm-poincare-wirtinger-on-bounded-connected-extension-domains, def-countable-choice, def-axiom-of-choice]
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
      locator: "Chapter 3 §3.1, Theorem 3.1 and printed pp. 26–28: closed convex obstacle sets and variational inequalities."
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§2, Theorem 1, printed pp. 964–965: existence, uniqueness and stability for a coercive variational inequality."
---

## Statement

Assume the setting of [[def-signorini-contact-variational-inequality]], including the Axiom of Choice for the trace/Poincare interfaces and Countable Choice. For every bounded linear load $F:V\to\mathbb R$, there is exactly one $u\in K$ satisfying the contact variational inequality. With $\alpha:=2\mu/c_K^2$, where $c_K$ is from [[lem-signorini-partial-dirichlet-korn-coercivity]], solutions for two loads $F_1,F_2$ satisfy
$$\alpha\|u_1-u_2\|_V\le\|F_1-F_2\|_{V^*}.$$

## Facts & Assumptions

**Given:** The real Hilbert space $V$, the nonempty closed convex set $K$, the bounded load(s), and the elasticity form $a$ in the setting above.

[A1] Countable Choice is assumed by Stampacchia existence and by the published stability theorem. ([[def-countable-choice]])

[A2] The Axiom of Choice is inherited through the bounded C1 trace and Poincare-Wirtinger suppliers used by the local Korn result. ([[def-axiom-of-choice]], [[lem-signorini-partial-dirichlet-korn-coercivity]], [[lem-signorini-partial-trace-space-bounded]], [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]])

[F1] $V$ is Hilbert, and $K\subseteq V$ is nonempty, closed and convex. ([[lem-signorini-partial-trace-space-bounded]], [[lem-signorini-contact-set-closed-convex-nonempty]])

[F2] The form is bounded with $|a(u,v)|\le M\|u\|_V\|v\|_V$, where $M=2\mu+2\lambda$. ([[lem-signorini-elasticity-form-bounded]])

[F3] The form is coercive with $a(v,v)\ge\alpha\|v\|_V^2$ and $\alpha=2\mu/c_K^2>0$, because $\|v\|_V\le c_K\|\varepsilon(v)\|_2$ and $a(v,v)\ge2\mu\|\varepsilon(v)\|_2^2$. ([[lem-signorini-partial-dirichlet-korn-coercivity]], [[def-signorini-elasticity-contact-model]])

[F4] On a real Hilbert space, a nonempty closed convex set and a bounded coercive bilinear form yield a unique variational-inequality solution for every bounded linear load. ([[thm-stampacchia-variational-inequality]])

[F5] For two loads on the same Hilbert space, feasible set, and bounded coercive form, the solutions satisfy $\alpha\|u_1-u_2\|\le\|F_1-F_2\|_{V^*}$. ([[thm-lipschitz-stability-of-strongly-monotone-variational-inequalities]])

## Proof

**Proof technique:** direct.

**Given:** The contact model with $\mu>0$, $\lambda\ge0$, the nonempty closed convex set $K$, and a bounded load $F\in V^*$.

1.1 By [F1], $V$ is a real Hilbert space and $K$ is nonempty, closed and convex. The elasticity form is bounded by [F2] and coercive by [F3], with positive constant $\alpha=2\mu/c_K^2$. Thus every hypothesis of [F4] holds, and [F4] gives exactly one $u\in K$ satisfying $a(u,v-u)\ge F(v-u)$ for all $v\in K$. [A1, A2, F1, F2, F3, F4, given]

2.1 Apply [F5] to the same $V$, $K$ and $a$, with the two bounded loads $F_1,F_2$. Its hypotheses are the Hilbert, closed-convex, boundedness, and coercivity properties verified in step 1.1; hence $\alpha\|u_1-u_2\|_V\le\|F_1-F_2\|_{V^*}$. [A1, A2, F1, F2, F3, F5, step 1.1] ∎
