---
id: lem-riesz-lemma
kind: lemma
title: "Riesz lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normed-subspace]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space, let $M\subsetneq X$ be a proper closed normed
subspace ([[def-normed-subspace]]), and let $0<\alpha<1$. Then there exists
$x\in X$ such that $\|x\|=1$ and

$$\operatorname{dist}(x,M):=\inf_{m\in M}\|x-m\|>\alpha.$$

## Facts & Assumptions

**Given:** A normed space $X$, a proper closed normed subspace $M\subsetneq X$, and a real $\alpha$ with $0<\alpha<1$.

[A1] The subspace $M$ is proper and closed in $X$.

## Proof

**Proof technique:** direct.

1.1 By [A1], choose $y\in X\setminus M$ and put $d:=\inf_{m\in M}\|y-m\|$. Because $M$ is closed, its complement is open, so there is $\rho>0$ with $B(y,\rho)\subseteq X\setminus M$. Hence $\|y-m\|\ge \rho$ for every $m\in M$, which gives $d\ge \rho>0$. [A1, choose, algebra]

2.1 Since $\alpha<1$, one has $d<d/\alpha$. By definition of the infimum, choose $m\in M$ with $$d\le \|y-m\|<\frac d\alpha.$$ Put $$x:=\frac{y-m}{\|y-m\|}.$$ Then $\|x\|=1$. [step 1.1, choose, algebra]

3.1 Let $m'\in M$. Because $m+\|y-m\|m'\in M$, the definition of $d$ gives $$d\le \|y-(m+\|y-m\|m')\| =\|y-m-\|y-m\|m'\| =\|y-m\|\,\|x-m'\|.$$ Therefore $$\|x-m'\|\ge \frac d{\|y-m\|}>\alpha,$$ the last inequality by step 2.1. Since $m'\in M$ was arbitrary, $\operatorname{dist}(x,M)>\alpha$. [step 2.1, given, algebra]

4.1 Step 3.1 produces a unit vector $x$ whose distance from $M$ exceeds $\alpha$, as required. [step 2.1, step 3.1] ∎

## Remarks

- The proof uses only an approximate minimizer. No nearest-point theorem is assumed.
