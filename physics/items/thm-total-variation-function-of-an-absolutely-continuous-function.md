---
id: thm-total-variation-function-of-an-absolutely-continuous-function
kind: theorem
title: "Total-variation function of an absolutely continuous function"
status: published
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, def-total-variation-function-on-a-compact-interval, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "R. K. Srivastava, MA550 Measure Theory Lecture Notes, Corollary 4.38"
      url: "https://www.iitg.ac.in/rksri/MA550_Measure_Theory_Lecture_Notes_2024.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. If $F\in AC[a,b]$, then
$$V_F(x)=\int_a^x|F'(t)|\,dt\quad\text{and}\quad V_F'=|F'|\text{ a.e.}$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, $F\in AC[a,b]$, and its total-variation function $V_F$.

## Proof

**Proof technique:** direct.

1.1 The sharp FTC gives $F(v)-F(u)=\int_u^vF'$ for $a\le u\le v\le b$. Hence every partition sum on $[u,v]$ is at most $\int_u^v|F'|$, so the variation on every subinterval is finite. [given, algebra]

2.1 Variation is additive across an inserted endpoint: refining any partition of $[a,v]$ at $u$ gives one inequality, while joining partitions of $[a,u]$ and $[u,v]$ gives the reverse inequality after taking suprema. Thus, writing $H(x)=\int_a^x|F'|$, $$0\le V_F(v)-V_F(u)=V(F,[u,v])\le H(v)-H(u).$$ The indefinite integral $H$ is absolutely continuous by [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]. For every finite disjoint family of short intervals, the displayed inequality bounds the sum of their $V_F$-increments by the corresponding sum of $H$-increments, so $V_F$ is absolutely continuous as well. [step 1.1, algebra]

3.1 By [[thm-first-fundamental-theorem-of-calculus-for-l-one]], $H'=|F'|$ almost everywhere. At every common differentiability point of $F$, $V_F$ and $H$, the definition of variation and step 2.1 give, for $h>0$, $$|F(x+h)-F(x)|\le V_F(x+h)-V_F(x)\le H(x+h)-H(x).$$ Dividing by $h$ and letting $h\downarrow0$ yields $|F'(x)|\le V_F'(x)\le H'(x)=|F'(x)|$. Thus $V_F'=|F'|$ almost everywhere. Since $V_F$ is absolutely continuous and $V_F(a)=0$, the sharp FTC [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] gives $V_F(x)=\int_a^xV_F'(t)dt=\int_a^x|F'(t)|dt$ for every $x$. [step 2.1, algebra] ∎
