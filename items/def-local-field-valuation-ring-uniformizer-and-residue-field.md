---
id: def-local-field-valuation-ring-uniformizer-and-residue-field
kind: definition
title: "Nonarchimedean local field, valuation ring, uniformizer, and residue field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-uniformising-parameter
  - def-valuation-on-a-field
  - def-valuation-ring
  - def-multiplicative-absolute-value-on-a-field
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Definition 7.48 and Remark 7.49"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Proposition 9.6 and Theorem 9.9"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: n/a
---

## Definition

A **nonarchimedean local field** is a field $K$ equipped with a discrete
valuation $v_K:K\to\mathbb Z\cup\{+\infty\}$, surjective on $K^\times$.
Its **valuation ring** is
$\mathcal O_K=\{x\in K:v_K(x)\ge0\}$, its maximal ideal is
$\mathfrak m_K=\{x\in K:v_K(x)>0\}$, and its **residue field** is
$k_K=\mathcal O_K/\mathfrak m_K$. Write $q_K=|k_K|$ and require that $k_K$ is
finite and $K$ is complete for the metric $d_K(x,y)=q_K^{-v_K(x-y)}$, where
$q_K^{-\infty}=0$. A **uniformizer** is an element $\pi_K\in K$ with
$v_K(\pi_K)=1$; equivalently, it generates $\mathfrak m_K$, so
$\mathfrak m_K=\pi_K\mathcal O_K$. The normalized absolute value is
$|0|_K=0$ and $|x|_K=q_K^{-v_K(x)}$ for $x\ne0$; the valuation ring is a
discrete valuation ring. Only this finite-residue, discrete-valuation class is
in scope here; archimedean completions are excluded.

For a global field $F$ and a finite place $v$, the notation $F_v$ means the
place completion defined on the global-fields page. Its place normalization
uses the same residue-cardinality convention $q_v^{-v_v}$.

## Definition references

[[def-discrete-valuation]]

[[def-discrete-valuation-ring]]

[[def-uniformising-parameter]]

[[def-valuation-on-a-field]]

[[def-valuation-ring]]

[[def-multiplicative-absolute-value-on-a-field]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Definition 7.48 and Remark 7.49](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Proposition 9.6 and Theorem 9.9](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Remarks

The abstract valuation-field definition is choice-free. Its global-place
completion interface assumes the Axiom of Choice for place classification;
AC implies DC and Countable Choice through the cited choice theorem. The metric
completion construction spends Countable Choice, while this definition and its
valuation conventions do not separately spend DC.

## Remarks references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]
