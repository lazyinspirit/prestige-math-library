---
id: lem-galerkin-orthogonality-for-conforming-galerkin-approximations
kind: lemma
title: Galerkin orthogonality for conforming approximations
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.1, Lemma 26.12, printed pp. 28–29: restriction of the continuous problem gives Galerkin orthogonality."
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.1.1, Lemma 3.4, printed p. 53: subtraction of the continuous and discrete equations."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Let $V$ be a vector space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$V_h\subseteq V$ be a subspace, let $a$ be linear in its first argument and
conjugate-linear in its second, and let $F:V\to\mathbb K$ be conjugate-linear.
If $u\in V$ and $u_h\in V_h$ satisfy
$$a(u,v)=F(v)\quad(v\in V),\qquad a(u_h,v_h)=F(v_h)\quad(v_h\in V_h),$$
then
$$a(u-u_h,v_h)=0\qquad\text{for every }v_h\in V_h.$$

## Facts & Assumptions

**Given:** The common form and functional, the inclusion $V_h\subseteq V$, and
the two displayed variational equations.

## Proof

1.1 Fix $v_h\in V_h$. Since $V_h\subseteq V$, the continuous equation is valid at $v_h$, so $a(u,v_h)=F(v_h)$. [given, choose]

2.1 The discrete equation gives $a(u_h,v_h)=F(v_h)$. Subtracting the two equalities and using the stated linearity of $a$ in its first slot yields $a(u-u_h,v_h)=0$. [given, step 1.1, algebra] ∎
