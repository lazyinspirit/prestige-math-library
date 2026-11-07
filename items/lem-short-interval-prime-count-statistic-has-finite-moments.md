---
id: lem-short-interval-prime-count-statistic-has-finite-moments
kind: lemma
title: "Finite moments of the randomized prime count in a short interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-short-interval-prime-count-statistic
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct local-integrability estimate
axiom_use: "Countable Choice is inherited through the statistic's complete Lebesgue probability space; no stronger choice axiom is used."
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §6.2.8"
      url: "https://dlmf.nist.gov/6.2"
      locator: "Equation (6.2.8), principal-value logarithmic integral and its logarithmic singularity at $1$."
    - title: "Ofir Gorodetsky, High and odd moments in the Erdős–Kac theorem, arXiv:2501.00351v1, §1.2"
      url: "https://arxiv.org/pdf/2501.00351v1"
      locator: "§1.2, PDF pp. 2–3, short-interval statistic averaged over a uniform start."
---

## Statement

Under the hypotheses and conventions of the definition of $R_{x,h}$, for every integer $m\ge1$,
$$\mathbb E|R_{x,h}|^m<\infty.$$

## Statement references

[NIST Digital Library of Mathematical Functions, §6.2.8](https://dlmf.nist.gov/6.2)

[Gorodetsky, *High and odd moments in the Erdős–Kac theorem*, arXiv:2501.00351v1, §1.2](https://arxiv.org/pdf/2501.00351v1)

## Facts & Assumptions

**Given:** Real $x\ge2$, $h>0$, and the Borel random variable $R_{x,h}=C_{x,h}(T_x)-J_{x,h}(T_x)$ defined above.

[F1] $C_{x,h}$ is a bounded Borel function on $[0,x]$. ([[def-short-interval-prime-count-statistic]])

[F2] $J_{x,h}$ is the difference of logarithmic-integral branches, with value $0$ at the finitely many endpoint singularities. ([[def-short-interval-prime-count-statistic]])

[F3] Near $y=1$, $\log y=(y-1)+O((y-1)^2)$. ([[thm-logarithm-derivative-and-integral]])

## Proof

**Proof technique:** local logarithmic-integrability estimate.

1.1 Write $s=y-1$. By [F3], $\log(1+s)=s+O(s^2)$ as $s\to0$, so $1/\log(1+s)=1/s+O(1)$ for small $s\ne0$. Integrating on each side of zero shows that each branch $H(1+s)=\operatorname{PV}\int_0^{1+s}du/\log u$ has form $\log|s|+O(1)$ near $s=0$. [F3, algebra]

2.1 The only possible singularities of $t\mapsto J_{x,h}(t)=H(t+h)-H(t)$ occur at $t=1$ and $t=1-h$ when those points lie in $[0,x]$. Since $h>0$, these points are distinct; near either one, the other term is bounded and step 1.1 gives $|J_{x,h}(t)|\le C_{x,h}(1+|\log|t-c||)$ for the singular point $c$. Away from these points $J_{x,h}$ is bounded on compact subintervals. [F2, step 1.1, algebra]

3.1 For every integer $m\ge1$ and every $\delta>0$, $\int_0^\delta|\log s|^m ds<\infty$: substituting $s=e^{-u}$ reduces the tail to $\int_{-\log\delta}^{\infty}u^me^{-u}du$, which is finite by repeated integration by parts. Thus $J_{x,h}\in L^m([0,x])$ for every such $m$. [step 2.1, algebra]

4.1 By [F1], $C_{x,h}$ is bounded, and step 3.1 gives $J_{x,h}\in L^m$. The inequality $|a-b|^m\le2^{m-1}(|a|^m+|b|^m)$ for real $a,b$ now gives $R_{x,h}\in L^m$. The normalizing measure on $[0,x]$ has finite mass $x$, so $\mathbb E|R_{x,h}|^m<\infty$. [F1, step 3.1, algebra] ∎

## Proof references

[[def-short-interval-prime-count-statistic]]

[[thm-logarithm-derivative-and-integral]]
