---
id: thm-krasner-lemma-for-complete-nonarchimedean-fields
kind: theorem
title: "Krasner's lemma for a complete nonarchimedean field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-separable-closure-in-an-algebraic-extension
  - def-countable-choice
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Proposition 7.60"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 11, Lemmas 11.13 and 11.15"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a complete nonarchimedean
local field, let $\overline K$ be an algebraic closure equipped with the
compatible absolute value obtained by extending $|\cdot|_K$ to every finite
subextension, let $K_s$ be the separable closure of $K$ in $\overline K$, and
take $\alpha\in K_s$ and $\beta\in\overline K$. Let
$C_K(\alpha)$ be the finite set of roots other than $\alpha$ of the minimal
polynomial of $\alpha$ over $K$. If
$$|\beta-\alpha|_{\overline K}<|\alpha-\alpha'|_{\overline K}\quad\text{for every }\alpha'\in C_K(\alpha),$$
then $K(\alpha)\subseteq K(\beta)$. When $C_K(\alpha)$ is empty, the
hypothesis is vacuous and the conclusion is immediate.

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Proposition 7.60](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 11, Lemmas 11.13 and 11.15](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the complete field $K$, the equipped algebraic
closure $\overline K$, and $\alpha,\beta$ as in the Statement.

[A1] Countable Choice selects one element from each member of a countable
family of nonempty sets. ([[def-countable-choice]])

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: The
abstract local-field clause gives a complete nonarchimedean valued field.

[F2] [[def-separable-closure-in-an-algebraic-extension]]: The separable
closure of $K$ in an algebraic extension consists exactly of elements
separable over $K$.

[F3] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: Every finite
extension of a complete nonarchimedean field has a unique extending absolute
value. The published proof uses finite-dimensional norm equivalence, whose
sequence selection is applied here under [A1]. Consequently every
$K$-embedding between finite subextensions preserves the compatible absolute
value.

## Proof

**Given:** The data in the Statement.

1.1 Put $M=K(\alpha,\beta)$, a finite extension of $K$. For any $K$-embedding $\sigma:M\to\overline K$, the function $x\mapsto|\sigma(x)|$ is an absolute value on $M$ extending that of $K$. By uniqueness in [F3] and Countable Choice [A1], it equals the chosen value on $M$; hence $|\sigma(x)|=|x|$ for every $x\in M$. [A1, F1, F3, given, construct]

2.1 Suppose $\sigma:M\to\overline K$ fixes $K(\beta)$ and $\sigma(\alpha)\ne\alpha$. Then $|\sigma(\alpha)-\beta|=|\sigma(\alpha-\beta)|=|\alpha-\beta|$ by step 1.1. The ultrametric inequality gives $$|\sigma(\alpha)-\alpha|\le\max\{|\sigma(\alpha)-\beta|,|\beta-\alpha|\}=|\beta-\alpha|.$$ But $\sigma(\alpha)$ is a conjugate of $\alpha$ distinct from $\alpha$, contradicting the strict inequality in the Statement. Thus every such embedding fixes $\alpha$. [step 1.1, given, algebra]

3.1 By [F2], $\alpha$ is separable over $K$, so its minimal polynomial over $K(\beta)$ is separable as well. If $\alpha\notin K(\beta)$, that polynomial has degree greater than one and a root different from $\alpha$ in $\overline K$; sending $\alpha$ to that root defines a $K(\beta)$-embedding of $M$ that moves $\alpha$, contrary to step 2.1. Hence $\alpha\in K(\beta)$ and $K(\alpha)\subseteq K(\beta)$. If $C_K(\alpha)=\varnothing$, then $\alpha\in K$ and the same conclusion is immediate. [F2, step 2.1, given, algebra] ∎
