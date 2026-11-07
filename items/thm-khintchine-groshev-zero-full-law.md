---
id: thm-khintchine-groshev-zero-full-law
kind: theorem
title: "Khintchine–Groshev zero-full law for systems of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-khintchine-groshev-matrix-approximation-set
  - cor-first-borel-cantelli-lemma-for-events
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - thm-khintchine-monotone-metric-approximation
  - thm-khintchine-groshev-primitive-pairs-full-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Theorem 1"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4.6"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ and let $\psi:\mathbb N\to[0,\infty)$. Define

$$W_{n,m}(\psi):=\left\{X\in[0,1]^{n\times m}:\ \|qX+p\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\right\}.$$

If $nm>1$, then

$$|W_{n,m}(\psi)|=
\begin{cases}
0,&\displaystyle\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m<\infty,\\
1,&\displaystyle\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m=\infty.
\end{cases}$$

If $n=m=1$, the same zero-full conclusion holds provided $\psi$ is non-increasing; in that case the controlling series is $\sum_{h=1}^{\infty}\psi(h)$. No monotonicity assumption is imposed when $nm>1$.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Theorem 1](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4.6](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Countable Choice, the matrix convention $X\in[0,1]^{n\times m}$, a nonnegative approximation function, and the stated dimension and series hypotheses.

[A1] Countable Choice supplies the countably additive Lebesgue measure used on the unit cube. ([[def-countable-choice]])

[F1] For any nonzero row $q$ and $0\le\delta\le1/2$, the event that some integer offset satisfies $\|qX+p\|_\infty<\delta$ has measure $(2\delta)^m$. ([[lem-khintchine-groshev-torus-event-measure-and-independence]])

[F2] If the sum of event measures is finite, the limsup event has measure zero. ([[cor-first-borel-cantelli-lemma-for-events]])

[F3] When $nm>1$, divergence of the weighted power sum gives full measure even after requiring $\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1$. ([[thm-khintchine-groshev-primitive-pairs-full-measure]])

[F4] For non-increasing $\psi:\mathbb N\to[0,\infty)$, the rational-approximation limsup set on $[0,1]$ has measure one if $\sum_h\psi(h)=\infty$ and zero if the sum converges. ([[thm-khintchine-monotone-metric-approximation]])

## Proof




1.1 For each nonzero row $q$, let $E_q:=\{X\in[0,1)^{n\times m}:\|qX+p\|_\infty<\psi(\|q\|_\infty)\text{ for some }p\in\mathbb Z^m\}$. If the weighted series converges, its terms tend to zero, so $\psi(h)\to0$ and in particular $\psi(h)<1/2$ for all sufficiently large $h$. The number of rows on the shell $\|q\|_\infty=h$ is $\displaystyle (2h+1)^n-(2h-1)^n\le2n(3h)^{n-1}.$ By [F1], the sum of event measures over all sufficiently large shells is at most $2^m\,2n3^{n-1}\sum_h h^{n-1}\psi(h)^m<\infty$. The finitely many initial shells contain only finitely many rows and do not affect finiteness of the total event sum. [given, A1, F1, algebra, algebra]

1.2 Suppose $nm>1$ and the weighted series diverges. Every primitive approximation is an unrestricted approximation, so [F3] gives $|W_{n,m}(\psi)|=1$. [given, F3, algebra]

1.3 Suppose $n=m=1$ and $\psi$ is non-increasing with $\sum_h\psi(h)=\infty$. The scalar theorem [F4] gives full measure to the set of $x\in[0,1]$ lying in infinitely many closed intervals centered at $a/h$, $0\le a\le h$, of radius $\psi(h)/h$. Except at equality points, each such interval inclusion yields $|hx-a|<\psi(h)$, which is the matrix inequality with $q=h$ and $p=-a$. The union of all equality points is countable, hence null, so the unrestricted matrix limsup has full measure. [given, F4, algebra, algebra]

2.1 The limsup of the row events $E_q$ is exactly $W_{n,m}(\psi)$ up to the measure-zero boundary of the fundamental cube: for each fixed row only finitely many offsets can satisfy the bounded error inequality, so infinitely many pairs are equivalent to infinitely many rows. Applying [F2] to any enumeration by increasing row norm gives $|W_{n,m}(\psi)|=0$ in the convergence case. [given, step 1.1, F2, algebra]

3.1 The convergence case was proved in step 2.1, the divergence case for $nm>1$ in step 1.2, and the monotone scalar divergence case in step 1.3. These are exactly the alternatives in the statement. [step 2.1, step 1.2, step 1.3] ∎
