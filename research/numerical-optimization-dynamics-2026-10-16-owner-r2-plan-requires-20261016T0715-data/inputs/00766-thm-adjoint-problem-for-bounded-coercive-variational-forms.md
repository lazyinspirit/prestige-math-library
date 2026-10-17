---
id: thm-adjoint-problem-for-bounded-coercive-variational-forms
kind: theorem
title: Well-posedness of the adjoint variational problem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-hilbert-space
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.4.1, Lemma 3.34, printed pp. 83–84: the adjoint form and its Lax–Milgram well-posedness."
    - title: Thomas Wick, Numerical Methods for Partial Differential Equations
      url: https://www.thomaswick.org/links/lecture_notes_Numerics_PDEs_Oct_12_2019.pdf
      locator: "§7.11.3, printed pp. 133–134: the Poisson dual problem used in the Aubin–Nitsche argument."
verification: {}
---

## Statement

Assume Countable Choice. Let $V$ be a real or complex Hilbert space and let
$a:V\times V\to\mathbb K$ be linear in the first slot, conjugate-linear in
the second, bounded by $M$, and coercive with constant $\alpha>0$:
$$|a(u,v)|\le M\|u\|_V\|v\|_V.$$
$$\operatorname{Re}a(u,u)\ge\alpha\|u\|_V^2.$$
For every bounded linear functional $G:V\to\mathbb K$, there is a unique
$z\in V$ such that
$$a(v,z)=G(v)\qquad(v\in V),$$
and $\alpha\|z\|_V\le\|G\|_{V^*}$. In the real case conjugation is the
identity and both forms and functionals are linear over $\mathbb R$.

## Facts & Assumptions

**Given:** Countable Choice, a Hilbert space $V$, the stated bounds for $a$,
and a bounded linear functional $G$.

[F1] A bounded coercive sesquilinear form is linear in the first slot,
conjugate-linear in the second, and satisfies the displayed $M,\alpha$ bounds
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] On a Hilbert space, a bounded coercive sesquilinear form with a bounded
conjugate-linear right-hand side has a unique solution and the estimate
$\alpha\|z\|\le\|F\|$ ([[thm-lax-milgram]]).

[F3] Countable Choice is the axiom required by the imported Lax–Milgram
theorem ([[def-countable-choice]]).

## Proof

1.1 Define the adjoint form by $a^\dagger(z,v):=\overline{a(v,z)}$. The sesquilinearity of $a$ shows that $a^\dagger$ is linear in $z$ and conjugate-linear in $v$. Also $|a^\dagger(z,v)|=|a(v,z)|\le M\|z\|_V\|v\|_V$, and $\operatorname{Re}a^\dagger(z,z)=\operatorname{Re}a(z,z)\ge\alpha\|z\|_V^2$. [F1, given, algebra]

1.2 Set $G^\dagger(v):=\overline{G(v)}$. Since $G$ is linear, $G^\dagger$ is conjugate-linear, and $|G^\dagger(v)|=|G(v)|\le\|G\|_{V^*}\|v\|_V$; hence $\|G^\dagger\|_{V^*}=\|G\|_{V^*}$. [given, algebra]

2.1 Apply [F2] to $a^\dagger$ and $G^\dagger$. It gives a unique $z\in V$ with $a^\dagger(z,v)=G^\dagger(v)$ and $\alpha\|z\|_V\le\|G^\dagger\|_{V^*}$. Conjugating the equation gives $a(v,z)=G(v)$ for every $v$, and the norm equality in step 1.2 gives the claimed estimate and uniqueness. [F2, F3, step 1.1, step 1.2] ∎