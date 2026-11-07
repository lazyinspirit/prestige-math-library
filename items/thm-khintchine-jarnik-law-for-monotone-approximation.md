---
id: thm-khintchine-jarnik-law-for-monotone-approximation
kind: theorem
title: "Khintchine–Jarník zero-full law for monotone rational approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-rational-approximation-limsup-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-duffin-schaeffer-reduced-approximation-theorem
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-summatory-euler-totient-lower-bound
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §3.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "§3.1, Jarník transfer argument"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, Theorems 3.3–3.4"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
      locator: "§3.3, Jarník and Khintchine–Jarník laws"
---

## Statement

Assume the Axiom of Countable Choice. Let $\psi:\mathbb N\to[0,\infty)$ be nonincreasing and let $f$ be a dimension function such that $r^{-1}f(r)$ is monotonic. Let $W(\psi)$ be the set of $x\in[0,1]$ satisfying $|x-a/q|<\psi(q)/q$ for infinitely many integers $a$ and positive integers $q$. Then

$$\mathcal H^f(W(\psi))=0\quad\text{if }\sum_{q=1}^\infty qf\!\left(\frac{\psi(q)}q\right)<\infty,$$

and

$$\mathcal H^f(W(\psi))=\mathcal H^f([0,1])\quad\text{if }\sum_{q=1}^\infty qf\!\left(\frac{\psi(q)}q\right)=\infty.$$

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §3.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, Theorems 3.3–3.4](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a nonincreasing approximation function, and a dimension function with monotone $f(r)/r$.

[A1] Countable Choice is assumed for the Lebesgue measure and Duffin–Schaeffer supplier used in the divergence transfer. ([[def-countable-choice]])

[F1] $W(\psi)$ is the limsup of the unrestricted rational intervals of radius $\psi(q)/q$. ([[def-rational-approximation-limsup-set]])

[F2] The reduced Duffin–Schaeffer theorem gives full Lebesgue measure for the reduced limsup with approximation function $\eta$ when $\sum_q\varphi(q)\eta(q)/q=\infty$, and zero measure when the sum converges. ([[thm-duffin-schaeffer-reduced-approximation-theorem]])

[F3] For nonincreasing $a_q\ge0$, divergence of $\sum q a_q$ is equivalent to divergence of $\sum\varphi(q)a_q$. ([[lem-summatory-euler-totient-lower-bound]])

[F4] The plane mass-transference statement for $k=1,\ell=0$ transfers full Lebesgue measure of intervals with transformed radius $f(r)$ to full $\mathcal H^f$ measure for the original intervals, under $r^{-1}f(r)$ monotonic. ([[thm-mass-transference-principle-for-systems-of-linear-forms]])

## Proof

1.1 For denominator $q$, at most $q+O(1)$ rational centers whose intervals meet $[0,1]$ are needed, since $\psi(q)\le\psi(1)$, and each interval has radius $\psi(q)/q$. Its $f$-ball cost is $f(\psi(q)/q)$, so the total cost over all $q$ is bounded, after a finite prefix, by a fixed constant times $\sum_q qf(\psi(q)/q)$. If this series converges, its tails are arbitrarily small and cover the limsup in [F1], giving $\mathcal H^f(W(\psi))=0$. [given, F1, algebra]

1.2 Put $a_q=f(\psi(q)/q)$. Since $\psi(q)/q$ is nonincreasing and $f$ is nondecreasing, $a_q$ is nonincreasing. Under the divergence hypothesis, [F3] gives $\sum_q\varphi(q)a_q=\infty$. [given, F3, algebra]

2.1 Define $\eta(q):=q a_q$. Then the reduced intervals with approximation function $\eta$ have radius $\eta(q)/q=a_q$, and their Duffin–Schaeffer sum is $\sum_q\varphi(q)\eta(q)/q=\sum_q\varphi(q)a_q=\infty$. By [A1] and [F2] their limsup has full Lebesgue measure. Passing from closed transformed intervals to open ones removes at most a countable union of endpoints and hence preserves this fullness. [A1, F2, step 1.2, algebra]

3.1 Apply [F4] to the original reduced intervals of radius $\psi(q)/q$; step 2.1 is exactly the required full-measure hypothesis for their $f$-transforms, whose radii are $f(\psi(q)/q)$. The reduced limsup is contained in $W(\psi)$, so monotonicity of $\mathcal H^f$ gives the full-measure conclusion. Here $\psi(q)/q\to0$ by boundedness of $\psi$, as required for the finite-shell interval sequence. Local transfer yields the cube equality directly: in the infinite ambient gauge case one interior interval suffices, and in the finite positive case gauge measure is a multiple of length, so countably many interior intervals cover the complement up to null endpoints; in the zero case the equality is trivial. [F1, F4, step 2.1, algebra] ∎
