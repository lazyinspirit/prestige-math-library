---
id: lem-square-root-continued-fraction-state-recurrence
kind: lemma
title: "The complete quotients of $\\sqrt{D}$ satisfy the $P_n,Q_n$ recurrence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continued-fraction-complete-quotients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "MIT 18.781, Lecture 21: Brahmagupta-Pell Equation"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a positive integer that is not a square, let
$$\alpha_0:=\sqrt D,$$
and let $a_n,\alpha_n$ be the continued-fraction digits and complete quotients
of $\sqrt D$. Then there are unique integer pairs $(P_n,Q_n)$ with
$$P_0=0,\qquad Q_0=1,$$
such that for every $n\ge0$,
$$\alpha_n=\frac{\sqrt D+P_n}{Q_n},\qquad Q_n>0,\qquad Q_n\mid D-P_n^2.$$
Moreover, if
$$a_n=\lfloor \alpha_n\rfloor,$$
then
$$P_{n+1}=a_nQ_n-P_n,\qquad Q_{n+1}=\frac{D-P_{n+1}^2}{Q_n},\qquad \alpha_{n+1}=\frac{\sqrt D+P_{n+1}}{Q_{n+1}}.$$

## Facts & Assumptions

**Given:** A positive nonsquare integer $D$, the real number $\alpha_0=\sqrt D$, and its complete quotients $\alpha_n$.

[F1] For each complete quotient $\alpha_n$, the continued-fraction algorithm chooses the unique integer $a_n$ with $a_n\le \alpha_n<a_n+1$, and if $\alpha_n\ne a_n$ then $\alpha_{n+1}=1/(\alpha_n-a_n)$ ([[def-continued-fraction-complete-quotients]]).

## Proof

**Proof technique:** direct.

1.1 At $n=0$ one has $$\alpha_0=\sqrt D=\frac{\sqrt D+0}{1},$$ so the claimed form holds with $P_0=0$ and $Q_0=1$, and certainly $Q_0>0$ and $Q_0\mid D-P_0^2=D$. [given, base, algebra]

1.2 Assume $$\alpha_n=\frac{\sqrt D+P_n}{Q_n},\qquad Q_n>0,\qquad Q_n\mid D-P_n^2.$$ Let $a_n$ be the integer from [F1], and set $$P_{n+1}:=a_nQ_n-P_n.$$ Since $\alpha_n-a_n>0$, one has $$\sqrt D-P_{n+1}=\sqrt D+P_n-a_nQ_n>0,$$ so $D-P_{n+1}^2>0$. Also $P_{n+1}\equiv -P_n\pmod{Q_n}$, hence $P_{n+1}^2\equiv P_n^2\pmod{Q_n}$ and therefore $Q_n\mid D-P_{n+1}^2$. Thus $$Q_{n+1}:=\frac{D-P_{n+1}^2}{Q_n}$$ is a positive integer. Rationalizing the denominator now gives $$\alpha_{n+1}=\frac1{\alpha_n-a_n}=\frac{Q_n}{\sqrt D-P_{n+1}}=\frac{\sqrt D+P_{n+1}}{Q_{n+1}}.$$ [F1, ih, algebra]

2.1 If also $$\frac{\sqrt D+P}{Q}=\frac{\sqrt D+P'}{Q'}$$ with $Q,Q'>0$, then cross-multiplication gives $$(Q'-Q)\sqrt D=QP'-Q'P.$$ If $Q'\ne Q$, this would make $\sqrt D$ rational, impossible because $D$ is a positive nonsquare integer. Hence $Q'=Q$, and then $P'=P$. So the normalized pair $(P_n,Q_n)$ is unique at each stage. Steps 1.1 and 1.2 therefore prove the statement for all $n\ge0$. [step 1.1, step 1.2, discharge-induction, algebra] ∎
