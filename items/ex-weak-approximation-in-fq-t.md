---
id: ex-weak-approximation-in-fq-t
kind: example
title: "Finite-place approximation in F_q(t) by polynomial congruences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-field-and-its-order
  - def-place-of-a-global-field
  - lem-projective-line-divisors-classified-by-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-weak-approximation-for-global-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, §7.20"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 6"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice and let $K=\mathbb F_q(t)$. Let $v_0$ and $v_1$
be the places corresponding to $t=0$ and $t=1$. For targets $0$ at $v_0$
and $1$ at $v_1$, with error bounds $1$ at both places, the polynomial
$a=t$ is a simultaneous approximation:
$$|t-0|_{v_0}<1,\qquad |t-1|_{v_1}<1.$$
These are the congruences $t\equiv0\pmod t$ and
$t\equiv1\pmod{t-1}$.

## Example references

[[def-finite-field-and-its-order]]

[[def-place-of-a-global-field]]

[[lem-projective-line-divisors-classified-by-degree]]

[[thm-weak-approximation-for-global-fields]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite field $\mathbb F_q$; the function
field $K=\mathbb F_q(t)$; and its places $v_0,v_1$ at $t=0,1$.

[A1] In ZF, AC implies both Dependent Choice and Countable Choice, since
[[thm-choice-implies-dependent-implies-countable-choice]] proves
$\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$. Thus the
Countable Choice premise of [F4] follows from the Example's Axiom of Choice
hypothesis; the place classification and projective-line divisor interface
also inherit their AC/DC premises.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A finite field has order $q\ge2$.
([[def-finite-field-and-its-order]])

[F2] For a closed point $v$ on a curve over $\mathbb F_q$, the normalized
place absolute value is $|f|_v=q^{-\operatorname{ord}_v(f)[\kappa(v):\mathbb F_q]}$.
([[def-place-of-a-global-field]])

[F3] The points $t=0$ and $t=1$ on the standard affine chart of
$\mathbb P^1_{\mathbb F_q}$ are distinct closed points of residue degree one.
([[lem-projective-line-divisors-classified-by-degree]])

[F4] For every finite set of distinct global-field places, every list of
completion targets and positive errors admits a simultaneous approximation
by an element of the global field. ([[thm-weak-approximation-for-global-fields]])

## Verification



**Given:** The data and hypotheses above.

1.1 At $v_0$, the order of $t$ is $1$ and the residue degree is $1$, so [F2] gives $|t-0|_{v_0}=q^{-1}$. At $v_1$, the order of $t-1$ is $1$ and the residue degree is $1$, giving $|t-1|_{v_1}=q^{-1}$. Since $q\ge2$ by [F1], both quantities are strictly less than $1$. The congruences in the Example follow directly from divisibility of $t$ by $t$ and of $t-1$ by $t-1$. [F1, F2, F3, given, algebra]

2.1 The hypotheses of the global weak approximation theorem [F4] hold for $S=\{v_0,v_1\}$, targets $0,1$, and errors $1,1$. Step 1.1 gives the explicit witness $a=t$. Thus the example both instantiates the theorem and verifies the polynomial congruences directly. AC is used only through the place-classification interface. [A1, F4, step 1.1, given] ∎

