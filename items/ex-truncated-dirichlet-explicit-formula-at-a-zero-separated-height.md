---
id: ex-truncated-dirichlet-explicit-formula-at-a-zero-separated-height
kind: example
title: "Choose a truncation height separated from zero ordinates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-primitive-dirichlet-character-and-conductor
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-primitive-dirichlet-l-functional-equation
  - thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 12, Lemma 12.7"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf"
      locator: "Printed p. 403: choose a height in [T,T+1] separated from both signs of every zero ordinate."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., Chapter 19"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 114–120: zero-separated truncation heights and contour use."
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chap-errorbounds2.html"
      locator: "Theorem 10.2 and zero-height selection discussion."
verification: {}
---

## Example

Let $q\ge1$, let $\chi$ be a primitive Dirichlet character modulo $q$, and let $U\ge2$. There is an absolute $\eta>0$ and a height $T\in[U,U+1]$ such that every zero $\rho=\beta+i\gamma$ of $L(s,\chi)$ with $0<\beta<1$ satisfies
$$\bigl|T-|\gamma|\bigr|\ge\frac{\eta}{\log(q(U+2))}.$$
Consequently, for every half-integer $x\ge\max(2,U+1)$, this $T$ satisfies the zero-separation and range hypotheses of the associated truncated explicit formula.

## Example references

[[def-primitive-dirichlet-character-and-conductor|Primitive Dirichlet character and conductor]]

[Montgomery and Vaughan, Chapter 12, Lemma 12.7](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf)

[Davenport, Chapter 19](https://djvu.online/file/Rh8B8jEVpxFgk)

[Kedlaya, Theorem 10.2](https://kskedlaya.org/ant/chap-errorbounds2.html)

## Facts & Assumptions

**Given:** $q\ge1$, a primitive character $\chi$ modulo $q$, and $U\ge2$.

[F1] In every unit interval centered at $t$, the zeros with $1/2\le\Re\rho\le1$ number at most $C_0\log(q(|t|+3))$, with multiplicity. ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]])

[F2] The functional equation and conjugation pair the zeros in $0<\Re s<1$ with $\Re s<1/2$ to zeros of the conjugate character in $\Re s>1/2$, with reflected ordinate. ([[thm-primitive-dirichlet-l-functional-equation]])

[F3] The associated truncated explicit formula requires a height separated from every absolute zero ordinate by a fixed positive multiple of $1/\log(q(T+2))$, and requires $2\le T\le x$. ([[thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums]])

## Proof

**Proof technique:** finite union of short intervals.

**Given:** The data in the Statement.

1.1 Any zero with $|\gamma|\in[U-1,U+2]$ is counted directly by [F1] if $\beta\ge1/2$; if $\beta<1/2$, [F2] transfers it to a right-half zero of the conjugate character with ordinate $-\gamma$. The two signs of the ordinate range for each character are two intervals of length three, each covered by two unit windows $|\gamma-t|\le1$. Thus at most eight applications of [F1] give $M\le8C_0\log(q(U+5))$. Since $U\ge2$, $U+5\le2(U+2)$ and $\log(q(U+2))\ge\log4$, it follows that $M\le12C_0\log(q(U+2))$. [F1, F2, given, algebra]

2.1 Put $\eta=\min(1/4,1/(48C_0))$. Remove from $[U,U+1]$ the open interval of radius $\eta/\log(q(U+2))$ around each of the finitely many absolute ordinates $|\gamma|$ counted in step 1.1. Their total length is at most $$2M\frac{\eta}{\log(q(U+2))}\le24C_0\eta\le\frac12<1.$$ Thus their union cannot cover $[U,U+1]$; choose $T$ in its complement. Any ordinate outside $[U-1,U+2]$ is at distance at least $1$ from this interval, while $\eta/\log(q(U+2))<1$, so the chosen $T$ has the required separation from every zero ordinate. [step 1.1, given, choose, algebra]

3.1 The chosen height satisfies $2\le T\le U+1\le x$ whenever $x\ge\max(2,U+1)$. Since $T\ge U$, we have $\log(q(T+2))\ge\log(q(U+2))$, so the separation obtained in step 2.1 is at least as strong as the condition in [F3]. This proves the example's height-selection assertion and verifies the hypotheses needed to invoke the associated formula; the formula applies with its full residue and trivial-zero terms. [F3, step 2.1, given, algebra] ∎

## Source notes

The finite height selection is choice-free and verifies the original half-integer and zero-separated hypotheses. The associated formula retains its explicit residue at zero and full trivial-zero tail; this example does not discard either correction or assert a uniform bound on an omitted character constant.
