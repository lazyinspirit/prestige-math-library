---
id: thm-linear-elliptic-control-state-and-adjoint-wellposedness
kind: theorem
title: Well-posedness of elliptic control state and adjoint equations
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§§2–3, printed pp. 5–25: weak state equations, existence, and adjoint optimality framework."
---

## Statement

Assume Countable Choice and the setting of [[def-linear-elliptic-pde-constrained-control-problem]]. For every $q\in U$, there is a unique state $u(q)\in V$ satisfying
$$
a(u(q),v)=\langle f+Bq,v\rangle\qquad(v\in V),
$$
and
$$
\|u(q)\|_V\le \beta^{-1}\|f+Bq\|_{V^*}.
$$
For every $q\in U$, there is also a unique adjoint $p(q)\in V$ satisfying
$$
a(v,p(q))=(Ju(q)-u_d,Jv)_H\qquad(v\in V),
$$
with
$$
\|p(q)\|_V\le \beta^{-1}\|J\|\,\|Ju(q)-u_d\|_H.
$$

## Facts & Assumptions
**Given:** Countable Choice, the real Hilbert space $V$, bounded coercive real bilinear form $a$, bounded linear $B:U\to V^*$, data $f\in V^*$ and $u_d\in H$, and continuous inclusion $J:V\to H$.

[F1] The form satisfies $|a(v,w)|\le M\|v\|_V\|w\|_V$ and $a(v,v)\ge\beta\|v\|_V^2$; symmetry is not assumed ([[def-linear-elliptic-pde-constrained-control-problem]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Lax–Milgram under Countable Choice gives a unique $w$ for every bounded linear functional $F$ with $a(w,v)=F(v)$ and $\|w\|_V\le\|F\|_{V^*}/\beta$ ([[thm-lax-milgram]], [[def-countable-choice]]).

## Proof

1.1 For fixed $q$, the functional $F_q(v)=\langle f+Bq,v\rangle$ is bounded and linear, with $\|F_q\|_{V^*}\le\|f+Bq\|_{V^*}$. Apply [F2] to $a$ and $F_q$; this gives the unique state and the stated bound. [F1, F2, given]

2.1 Define the adjoint form $a^*(p,v):=a(v,p)$. It is bounded with the same constant $M$, and $a^*(p,p)=a(p,p)\ge\beta\|p\|_V^2$, so it is coercive with the same $\beta$. The functional $G_q(v)=(Ju(q)-u_d,Jv)_H$ is bounded by $\|J\|\|Ju(q)-u_d\|_H\|v\|_V$. Apply [F2] to $a^*$ and $G_q$; the result is the unique $p(q)$ with $a(v,p(q))=G_q(v)$ and the stated bound. No symmetry of $a$ is used. [F1, F2, step 1.1, given, algebra] ∎
