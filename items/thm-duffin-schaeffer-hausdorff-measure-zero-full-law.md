---
id: thm-duffin-schaeffer-hausdorff-measure-zero-full-law
kind: theorem
title: "Duffin–Schaeffer zero-full law for Hausdorff measures"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - def-reduced-rational-approximation-limsup-set
  - def-unit-group-modulo-n-and-euler-totient
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-duffin-schaeffer-reduced-approximation-theorem
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
proof_strategy: direct
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §1.2 and §3"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "Conjecture 2, Theorem 1, proof in §3"
    - title: "Koukoulopoulos and Maynard, On the Duffin–Schaeffer conjecture, Theorem 1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
      locator: "Theorem 1, arbitrary-function reduced theorem"
---

## Statement

Assume the Axiom of Countable Choice. Let $\psi:\mathbb N\to[0,\infty)$ be arbitrary and let $f$ be a dimension function such that $r^{-1}f(r)$ is monotonic. Let $A(\psi)\subseteq[0,1]$ be the limsup set of intervals of radius $\psi(q)/q$ centered at reduced fractions $a/q$ with $1\le a\le q$ and $\gcd(a,q)=1$. Then

$$\mathcal H^f(A(\psi))=0\quad\text{if }\sum_{q=1}^\infty\varphi(q)f\!\left(\frac{\psi(q)}q\right)<\infty,$$

and

$$\mathcal H^f(A(\psi))=\mathcal H^f([0,1])\quad\text{if }\sum_{q=1}^\infty\varphi(q)f\!\left(\frac{\psi(q)}q\right)=\infty.$$

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §1.2 and §3](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Koukoulopoulos and Maynard, *On the Duffin–Schaeffer conjecture*, Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** Countable Choice, an arbitrary approximation function, and a dimension function with monotone $f(r)/r$.

[A1] Countable Choice is assumed by the reduced Duffin–Schaeffer Lebesgue theorem. ([[def-countable-choice]])

[F1] The reduced limsup has exactly $\varphi(q)$ centers at denominator $q$, with interval radius $\psi(q)/q$. ([[def-reduced-rational-approximation-limsup-set]], [[def-unit-group-modulo-n-and-euler-totient]])

[F2] The Duffin–Schaeffer theorem gives zero measure when its weighted series converges and full measure when it diverges, for arbitrary $\psi$. ([[thm-duffin-schaeffer-reduced-approximation-theorem]])

[F3] The one-dimensional plane mass-transference theorem transfers full measure for the intervals of radius $f(\psi(q)/q)$ to full $\mathcal H^f$ measure for the original reduced intervals. ([[thm-mass-transference-principle-for-systems-of-linear-forms]])

[F4] The ambient-zero regime and bounded fixed-dilation costs follow from monotone $f(r)/r$. [[lem-gauge-fixed-dilation-and-small-gauge-regimes]]

## Proof

1.1 At denominator $q$, [F1] gives $\varphi(q)$ intervals, each of $f$-cost $f(\psi(q)/q)$. The tail of these covers has total cost tending to zero whenever $\sum_q\varphi(q)f(\psi(q)/q)$ converges. Hence the convergence conclusion follows directly from the ball-cover definition. [given, F1, algebra]

1.2 In the divergent case we may replace the radii $r_q=\psi(q)/q$ by smaller $s_q\to0$ preserving $\sum\varphi(q)f(s_q)=\infty$. Indeed, for every fixed $d>0$ the capped sum $\sum\varphi(q)f(\min(r_q,d))$ diverges: either infinitely many $r_q\ge d$, or its tail equals the original sum. Successively choose finite consecutive denominator blocks whose capped cost with $d=1/j$ is at least $1$, and use that cap on the $j$th block. Zero-radius terms can be omitted. Set $\eta(q)=q f(s_q)$. By [A1] and [F2], the reduced transformed intervals of radii $f(s_q)$ have full Lebesgue limsup in the unit interval. Their open versions also have full limsup, since the difference lies in a countable union of interval endpoints. [given, A1, F2, algebra, choose]

2.1 Apply [F3] to these reduced centers and radii $s_q$, enumerated in finite denominator shells, on every ball inside $(0,1)$. If $f(r)/r\to0$, [F4] already makes the equality trivial. If its limit is infinite, an interior ball gives infinite target gauge measure. If its limit is finite positive, comparison of fine-cover costs gives a positive multiple of length, so local equalities give a null complement in the interval; endpoints are null. The new original limsup is contained in $A(\psi)$ because $s_q\le r_q$. Hence in all cases $A(\psi)$ has the full required gauge measure, proving the divergent branch and the theorem. [step 1.2, F1, F3, F4, algebra] ∎
