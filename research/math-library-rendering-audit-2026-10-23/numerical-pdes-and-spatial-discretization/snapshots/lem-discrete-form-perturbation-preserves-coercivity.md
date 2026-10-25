---
id: lem-discrete-form-perturbation-preserves-coercivity
kind: lemma
title: A bounded form defect preserves discrete coercivity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-variational-crime-error-framework, def-bounded-coercive-and-symmetric-sesquilinear-forms]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Statement

Let $V$ be a Hilbert space and let $V_h\subseteq V$ be a subspace. Suppose the exact form $a$ is coercive with constant $\alpha>0$ in the norm $\|\cdot\|_V$. Let $a_h$ be a discrete form on $V_h$ and suppose

$$|a_h(v_h,v_h)-a(v_h,v_h)|\le\eta_h\|v_h\|_V^2\qquad(v_h\in V_h)$$

for some $\eta_h\ge0$. Then $a_h$ is coercive with constant at least $\alpha-\eta_h$ whenever $\eta_h<\alpha$. In particular, if $\eta_h\le\alpha/2$, then its coercivity constant is at least $\alpha/2$.

## Facts & Assumptions

**Given:** A Hilbert space $V$, a subspace $V_h$, a coercive form $a$ with constant $\alpha>0$, a discrete form $a_h$, and the diagonal defect bound with constant $\eta_h$.

[F1] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: coercivity means $\operatorname{Re}a(v,v)\ge\alpha\|v\|_V^2$; symmetry is not required.

[A1] For every $v_h\in V_h$, $|a_h(v_h,v_h)-a(v_h,v_h)|\le\eta_h\|v_h\|_V^2$.

## Proof

1.1 Fix $v_h\in V_h$. By coercivity [F1] and the defect hypothesis [A1], $\operatorname{Re}a_h(v_h,v_h)=\operatorname{Re}a(v_h,v_h)+\operatorname{Re}(a_h(v_h,v_h)-a(v_h,v_h))\ge(\alpha-\eta_h)\|v_h\|_V^2$. [given, F1, A1, algebra]

2.1 If $\eta_h<\alpha$, then $\alpha-\eta_h>0$, so the inequality in step 1.1 is precisely coercivity with that constant. If $\eta_h\le\alpha/2$, then $\alpha-\eta_h\ge\alpha/2$. [step 1.1, algebra] ∎
