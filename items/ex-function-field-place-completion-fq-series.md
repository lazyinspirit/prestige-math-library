---
id: ex-function-field-place-completion-fq-series
kind: example
title: "A function-field completion is a Laurent-series local field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-metric-completion-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Remark 7.49(c)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Corollary 9.7 and Theorem 9.9"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $F=\mathbb F_q(t)$ and take the finite place
given by order of vanishing at $t=0$ on $\mathbb P^1_{\mathbb F_q}$. The field
of formal Laurent series is
$\mathbb F_q((t))=\{\sum_{i\ge m}a_it^i:a_i\in\mathbb F_q,\ m\in\mathbb Z\}$;
for a nonzero series, $\operatorname{ord}_t$ is its least exponent with
nonzero coefficient. Here
$\mathbb F_q\llbracket t\rrbracket:=\{\sum_{i\ge0}a_it^i:a_i\in\mathbb F_q\}$
is the formal power-series ring. The completion $F_v$ is isomorphic as a valued
field to $\mathbb F_q((t))$, with valuation $\operatorname{ord}_t$, valuation
ring $\mathbb F_q\llbracket t\rrbracket$, maximal ideal
$t\mathbb F_q\llbracket t\rrbracket$, uniformizer $t$,
residue field $\mathbb F_q$, and $|t|=q^{-1}$.

## Example references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Remark 7.49(c)](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Corollary 9.7 and Theorem 9.9](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $F=\mathbb F_q(t)$, the coordinate $t$ on
$\mathbb P^1_{\mathbb F_q}$, and its place at $t=0$.

[A1] The Axiom of Choice supplies the global-place classification interface;
it also implies Countable Choice for the metric completion. ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] [[def-global-field]]: $\mathbb F_q(t)$ is a one-variable function field
whose exact constant field is $\mathbb F_q$.

[F2] [[def-place-of-a-global-field]]: At a closed point $x$ of a curve with
constant field $\mathbb F_q$, the normalized place value is
$|f|_x=q^{-\operatorname{ord}_x(f)[\kappa(x):\mathbb F_q]}$. The point
$t=0$ has residue field $\mathbb F_q$ and degree one.

[F3] [[def-completion-of-a-global-field-at-a-place]]: The place completion
$F_v$ is the metric completion of $F$ for the place absolute value, with a
dense isometric embedding.

[F4] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: A
complete discretely valued field with finite residue field is a
nonarchimedean local field; its normalized absolute value is
$q^{-\operatorname{ord}}$ when the residue field has order $q$.

[F5] [[thm-metric-completion-unique]]: Two metric completions of the same
metric space are uniquely isometric by an isometry commuting with their dense
embeddings.

## Verification

**Given:** The data above.


1.1 The inclusion of polynomials into Laurent series is an injective ring homomorphism: a nonzero polynomial has a nonzero least coefficient. For every nonzero polynomial $g(t)=t^b g_0(t)$ with $g_0(0)\ne0$, the power series $g_0(t)$ has a unique inverse in $\mathbb F_q\llbracket t\rrbracket$, obtained by solving its coefficients successively from the nonzero constant term. Therefore every nonzero polynomial is invertible in $\mathbb F_q((t))$, and the polynomial inclusion extends to a field embedding $\iota_v:\mathbb F_q(t)\to\mathbb F_q((t))$. For $f(t)=t^a f_0(t)$ with $f_0(0)\ne0$, the Laurent expansion of $f/g$ is $t^{a-b}f_0(t)g_0(t)^{-1}$, so $\operatorname{ord}_t(\iota_v(f/g))=a-b$, the order at $t=0$. By [F2], $\iota_v$ is isometric and $|t|=q^{-1}$. [A1, F1, F2, given, construct, algebra]

1.2 The Laurent-series field is complete: if $(x_n)$ is Cauchy, choose an index after which $\operatorname{ord}_t(x_n-x_m)\ge0$; then all later series have the same finite negative part. For each exponent $j$, the Cauchy property also makes the coefficient of $t^j$ eventually constant. Taking those stable coefficients gives a Laurent series $x$ with a finite negative part, and the same Cauchy bounds show $x_n\to x$. [given, construct]

2.1 The image of $\iota_v$ is dense. For $x=\sum_{i\ge -M}a_it^i\in\mathbb F_q((t))$, the finite truncations $x_N=\sum_{-M\le i\le N}a_it^i$ lie in $\mathbb F_q[t,t^{-1}]\subset F$, and $\operatorname{ord}_t(x-x_N)\ge N+1\to\infty$. Hence every Laurent series is a limit of elements of the embedded $F$. [step 1.1, construct, algebra]

3.1 By [F3], $F_v$ is the metric completion for the same normalized absolute value. The complete field $\mathbb F_q((t))$ and the dense isometric embedding from step 1.1 therefore identify with $F_v$ by [F5] and step 2.1. The coefficient description gives valuation ring $\mathbb F_q\llbracket t\rrbracket$, maximal ideal $t\mathbb F_q\llbracket t\rrbracket$, uniformizer $t$, and residue field $\mathbb F_q$; by [F4] it is a local field. [F3, F4, F5, step 1.1, step 1.2, step 2.1, algebra] ∎
