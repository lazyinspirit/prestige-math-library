---
dependency_level: 7
id: thm-khintchine-monotone-metric-approximation
kind: theorem
title: "Khintchine zero–full law for monotone approximation functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-finite-and-countable-subadditivity-of-measures
  - prop-measure-monotonicity
  - def-probability-measure
  - def-rational-approximation-limsup-set
  - cor-first-borel-cantelli-lemma-for-events
  - thm-sum-of-totients-over-divisors
  - thm-duffin-schaeffer-reduced-approximation-theorem
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine Approximation: Aspects of Recent Work, Theorem 2.3"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, Theorem 2.2"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, Theorem 1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $\psi:\mathbb N\to[0,\infty)$ be non-increasing, and let $W(\psi)$ be the rational-approximation limsup set on $[0,1]$. Then its Lebesgue measure is

$$\lambda(W(\psi))=\begin{cases}0,&\sum_{q=1}^{\infty}\psi(q)<\infty,\\1,&\sum_{q=1}^{\infty}\psi(q)=\infty.\end{cases}$$


## Statement references

[[def-rational-approximation-limsup-set|Rational-approximation limsup set]]

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Lebesgue measure under countable choice]]

[[def-probability-measure|Probability measure on the unit interval]]

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, Theorem 2.3](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

[Harman, *Metric Number Theory*, Chapter 2, Theorem 2.2](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a non-increasing function $\psi:\mathbb N\to[0,\infty)$ and the set $W(\psi)$ of points lying in infinitely many rational-approximation events. Establish both convergence and divergence conclusions stated above.

[A1] The Axiom of Countable Choice is assumed so that Lebesgue measure is a complete countably additive measure. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] $W(\psi)=\limsup_{q\to\infty}R_q(\psi)$, where $R_q(\psi)$ is the union of the $q+1$ intervals of radius $\psi(q)/q$ centered at $a/q$, $0\le a\le q$. ([[def-rational-approximation-limsup-set]])

[F2] If measurable events $E_q$ satisfy $\sum_q\lambda(E_q)<\infty$, then $\lambda(\limsup_q E_q)=0$. ([[cor-first-borel-cantelli-lemma-for-events]])

[F3] For every positive integer $n$, $\sum_{d\mid n,\ d>0}\varphi(d)=n$. ([[thm-sum-of-totients-over-divisors]])

[F4] For every non-increasing $\eta:\mathbb N\to[0,\infty)$, divergence of $\sum_q\varphi(q)\eta(q)/q$ implies that the reduced rational-approximation limsup set for $\eta$ has Lebesgue measure $1$. ([[thm-duffin-schaeffer-reduced-approximation-theorem]])

[F5] Closed intervals are Lebesgue measurable with measure equal to their length, and $\lambda([0,1])=1$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F6] Finite unions satisfy $\lambda(\bigcup_iE_i)\le\sum_i\lambda(E_i)$, and measure is monotone under inclusion. ([[thm-finite-and-countable-subadditivity-of-measures]], [[prop-measure-monotonicity]])

[F7] Restricting $\lambda$ to Lebesgue measurable subsets of $[0,1]$ gives a probability measure because $\lambda([0,1])=1$. ([[def-probability-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

1.1 By [F1], $R_q(\psi)$ is a union of $q+1$ closed intervals intersected with $[0,1]$, each of length at most $2\psi(q)/q$. [given, F1, construct]

1.2 For $N\ge1$, put $A(N)=\sum_{q=1}^{N}\varphi(q)/q$. Summing [F3] over $n\le N$ gives $N(N+1)/2=\sum_{d\le N}\varphi(d)\lfloor N/d\rfloor\le N A(N)$, hence $A(N)\ge(N+1)/2$. [F3, algebra]

2.1 Under [A1], [F5] makes those intervals measurable with measure at most their length, and finite subadditivity [F6] gives $\lambda(R_q(\psi))\le2(q+1)\psi(q)/q\le4\psi(q)$ since $q\ge1$. [A1, step 1.1, F5, F6, algebra]

2.2 Finite summation by parts gives $\sum_{q=1}^{N}\frac{\varphi(q)}q\psi(q)=A(N)\psi(N)+\sum_{q=1}^{N-1}A(q)(\psi(q)-\psi(q+1))$. Since $\psi(q)-\psi(q+1)\ge0$, step 1.2 bounds this below by $\frac12((N+1)\psi(N)+\sum_{q<N}(q+1)(\psi(q)-\psi(q+1)))=\frac12(2\psi(1)+\sum_{q=2}^{N}\psi(q))\ge\frac12\sum_{q=1}^{N}\psi(q)$. Thus divergence of $\sum_q\psi(q)$ implies divergence of $\sum_q\varphi(q)\psi(q)/q$. [given, step 1.2, algebra]

3.1 If $\sum_q\psi(q)<\infty$, then [F7] makes the events $R_q(\psi)$ a sequence in the probability space on $[0,1]$, and [F2] gives $\lambda(W(\psi))=0$. [A1, step 2.1, F1, F2, F7]

3.2 If $\sum_q\psi(q)=\infty$, then by [F4] and step 2.2, the reduced rational-approximation limsup set for $\psi$ has measure $1$. It is contained in $W(\psi)$ because every reduced numerator in $1\le a\le q$ is one of the unrestricted numerators in [F1]. Since $W(\psi)\subseteq[0,1]$, [F5] and monotonicity in [F6] yield $1\le\lambda(W(\psi))\le1$, hence $\lambda(W(\psi))=1$. [A1, F1, F4, F5, F6, step 2.2]

4.1 By [F1], the set in the statement is the limsup treated in steps 3.1 and 3.2, which establish both alternatives. [F1, step 3.1, step 3.2] ∎
