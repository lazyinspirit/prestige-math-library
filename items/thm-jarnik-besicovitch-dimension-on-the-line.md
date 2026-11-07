---
id: thm-jarnik-besicovitch-dimension-on-the-line
kind: theorem
title: "Jarník–Besicovitch dimension formula on the line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-power-rate-well-approximable-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-dirichlet-rational-approximation-with-bounded-denominator
  - thm-khintchine-jarnik-law-for-monotone-approximation
  - def-countable-choice
  - def-hausdorff-dimension
  - thm-hausdorff-dimension-is-countably-stable
  - cor-euclidean-hausdorff-dimension
proof_strategy: direct
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §3.2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "§3.2, Dirichlet plus mass transference"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §3.3"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
      locator: "Theorem 3.3 and Remark 3.1"
---

## Statement

Assume the Axiom of Countable Choice. For $\tau>0$, let $W(\tau)$ be the set of $x\in[0,1]$ for which $|x-a/q|\le q^{-(\tau+1)}$ for infinitely many $q\in\mathbb N$ and some $a\in\{0,1,\ldots,q\}$. Then

$$\dim_H W(\tau)=\begin{cases}1,&0<\tau\le1,\\[2pt]\dfrac{2}{\tau+1},&\tau\ge1.\end{cases}$$

The two formulas agree at $\tau=1$; the Hausdorff dimension is taken in the usual diameter-power convention.

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §3.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §3.3](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the rational limsup definition, the Khintchine–Jarník gauge law, and Dirichlet approximation with bounded denominators.

[A1] Countable Choice is assumed by the Hausdorff measure and dimension suppliers used below. ([[def-countable-choice]])

[F1] For $s>0$, the ball gauge $f_s(r)=r^s$ has the same null sets and Hausdorff dimension as the library's diameter-power gauge. ([[def-hausdorff-dimension-function-and-gauge-measure]])

[F2] The Khintchine–Jarník law gives the zero/full alternatives using $\sum_q qf_s(\psi(q)/q)$. ([[thm-khintchine-jarnik-law-for-monotone-approximation]])

[F3] For every real $x$ and every $Q\ge1$ there are integers $a$ and $1\le q\le Q$ with $|x-a/q|\le1/(qQ)$. ([[thm-dirichlet-rational-approximation-with-bounded-denominator]])

[F4] Hausdorff dimension is countably stable, and every at most countable set has dimension zero. ([[thm-hausdorff-dimension-is-countably-stable]])

[F5] Every positive-volume subset of $\mathbb R$ has Hausdorff dimension $1$, so $[0,1]$ has dimension $1$. ([[cor-euclidean-hausdorff-dimension]])

[F6] Hausdorff dimension is the critical exponent for the power Hausdorff measures. ([[def-hausdorff-dimension]])

## Proof

1.1 For $\tau\ge1$ and $s>0$, use $f_s(r)=r^s$ and $\psi(q)=q^{-\tau}$ in [F2]. The governing series is $\sum_q q^{1-s(\tau+1)}$, which converges for $s>2/(\tau+1)$ and diverges for $s<2/(\tau+1)$. For the closed-inequality set in this Statement, the upper bound follows directly from the convergent cover by the $q+1$ closed intervals of radius $q^{-(\tau+1)}$, with total tail cost $\sum(q+1)q^{-s(\tau+1)}$. The strict-inequality set supplied by [F2] is contained in the present set, giving the full lower measure below the threshold. Thus neither boundary equality nor a change of strictness is being silently used. [A1, given, F1, F2, algebra]

1.2 If $0<\tau<1$, fix irrational $x\in(0,1)$ and apply [F3] for arbitrarily large $Q$. The denominators cannot stay bounded: for any fixed finite set of denominators, $x$ has positive distance from the associated rational grids, contradicting $1/(qQ)\to0$. Thus unbounded $q$ occur. Since $q\le Q$, [F3] gives $|x-a/q|\le1/(qQ)\le q^{-2}$; equality would force $x$ rational, so the inequality is strict. For large $q$, $q^{-2}<q^{-(\tau+1)}$ and $q^{-2}<\min(x,1-x)$, so $0<a<q$. Every irrational in $[0,1]$ is therefore in $W(\tau)$. [F3, algebra]

2.1 By [F6] and [F1], zero measure for every power above $2/(\tau+1)$ gives the upper bound, and full interval measure for every power below it gives the lower bound. At $\tau=1$, taking all $s<1$ gives dimension at least $1$, while [F5] gives the ambient upper bound. [step 1.1, F1, F5, F6, algebra]

3.1 The complement of the irrationals in $[0,1]$ is countable, so [F4] and [F5] give dimension $1$ for the irrationals. Inclusion in $W(\tau)$ and the ambient upper bound prove $\dim_H W(\tau)=1$. Steps 2.1 and 1.2 cover all $\tau>0$. [F4, F5, step 2.1, step 1.2, algebra] ∎

