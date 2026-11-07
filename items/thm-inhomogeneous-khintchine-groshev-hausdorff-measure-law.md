---
id: thm-inhomogeneous-khintchine-groshev-hausdorff-measure-law
kind: theorem
title: "Inhomogeneous Khintchine–Groshev zero-full law for Hausdorff measures"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-hausdorff-gauge-measure-is-borel-regular
  - lem-periodic-full-cube-set-is-full-on-every-ball
  - lem-homogeneous-and-fixed-target-approximation-limsup-is-integer-periodic
  - def-inhomogeneous-khintchine-groshev-approximation-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-inhomogeneous-khintchine-groshev-zero-full-law
  - lem-fixed-target-divergence-for-decreasing-approximation-radii
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-affine-plane-tube-covering-by-small-balls
  - lem-linear-form-events-and-affine-plane-neighborhoods
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Theorem 3"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "Theorem 3, §2.2"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, Theorem 4.11"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
      locator: "Theorem 4.11, fixed-target inhomogeneous Khintchine–Groshev statement"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, fix a target $y\in[0,1)^m$, and let $\psi:\mathbb N\to[0,\infty)$ be nonincreasing if $n=1$ or $n=2$, with no monotonicity requirement when $n\ge3$. Let $f,g$ be dimension functions such that $g(r)=r^{-m(n-1)}f(r)$ and $r^{-nm}f(r)$ is monotonic. For the fixed-target inhomogeneous set $W_{n,m}(\psi;y)$, one has

$$\mathcal H^f(W_{n,m}(\psi;y))=0\quad\text{if }\sum_q q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)<\infty,$$

and

$$\mathcal H^f(W_{n,m}(\psi;y))=\mathcal H^f([0,1]^{n\times m})\quad\text{if }\sum_q q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)=\infty.$$

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Theorem 3](https://arxiv.org/pdf/1703.10015v2)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, Theorem 4.11](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the fixed target, the monotonicity restriction for $n=1,2$, and the displayed gauge hypotheses.

[A1] Countable Choice is assumed by the Lebesgue and Hausdorff-measure suppliers. ([[def-countable-choice]])

[F1] The set is defined by $\|qX+p-y\|_\infty<\psi(\|q\|_\infty)$ for infinitely many integer pairs. ([[def-inhomogeneous-khintchine-groshev-approximation-set]])

[F2] A fixed-target linear-form event lies between explicit scaled neighborhoods of its affine solution plane. ([[lem-linear-form-events-and-affine-plane-neighborhoods]])

[F3] The tube-cover and fixed-dilation estimates give the convergence cover under the displayed Hausdorff series. ([[lem-affine-plane-tube-covering-by-small-balls]], [[lem-gauge-fixed-dilation-and-small-gauge-regimes]])

[F4] The fixed-target Lebesgue theorem is full for arbitrary input functions when $n\ge3$. In every dimension, a divergent input $\delta$ also gives full measure if $\delta(q)/q$ is non-increasing. These are distinct sufficient conditions. [[thm-inhomogeneous-khintchine-groshev-zero-full-law]] [[lem-fixed-target-divergence-for-decreasing-approximation-radii]]

[F5] Fixed-target inhomogeneous limsup sets are invariant under integer matrix translations. ([[lem-homogeneous-and-fixed-target-approximation-limsup-is-integer-periodic]])

[F6] The periodicity lemma gives both Lebesgue fullness and, by its explicit Hausdorff–Lebesgue comparison, full $\mathcal H^{nm}$ measure in every bounded Euclidean ball, which is the plane-transfer hypothesis used here. ([[lem-periodic-full-cube-set-is-full-on-every-ball]])

[F7] The affine-plane mass-transference theorem transfers full measure of transformed tubes to full $\mathcal H^f$ measure of original tubes. ([[thm-mass-transference-principle-for-systems-of-linear-forms]])

[F8] The ball-cover gauge measure is a Borel measure, so the local full-measure conclusions can be combined over a countable cover of the cube. ([[thm-hausdorff-gauge-measure-is-borel-regular]])

## Proof

1.1 If the series converges, $r_q:=\psi(q)/q\to0$: otherwise some $\varepsilon>0$ occurs infinitely often and the corresponding terms are at least $q^{n+m-1}g(\varepsilon)$, contradicting convergence. For each shell $\|q\|_\infty=q$, there are $O(q^{n-1})$ rows and, once $r_q<1$, $O(q^m)$ relevant offsets $p$ even with the fixed target $y$. [given, F1, algebra]

1.2 If $r_q\not\to0$, infinitely many $q$ satisfy $\psi(q)\ge\varepsilon q$ for some $\varepsilon>0$. For every $X$ and fixed target $y$, choose each coordinate of $p$ nearest to $y-qX$; the error is at most $1/2<\psi(q)$ for all sufficiently large such $q$. The set is then the whole cube. If instead $r_q\to0$ and $r^{-nm}f(r)\to0$, [F3] again makes the required full-measure equality trivial. [given, F1, F3, algebra]

2.1 By [F2], these events lie in codimension-$m$ tubes of radius $O(r_q)$. The tube-cover lemma uses $O(r_q^{-m(n-1)})$ balls per tube, and [F3] controls their fixed-radius costs. If $r^{-nm}f(r)\to0$, the ambient cube already has zero gauge measure; otherwise the shell cost is $O(q^{n+m-1}g(r_q))$. Summing the convergent tails proves the zero conclusion. [F2, F3, step 1.1, algebra]

2.2 In the remaining case put $c:=1/(2\sqrt n)$ and $\rho_q:=c\psi(q)/q$. The lower fixed-contraction estimate in [F3], together with $g(r)=r^{-m(n-1)}f(r)=r^m(r^{-nm}f(r))$, gives $g(\rho_q)\ge c_0g(\psi(q)/q)$ for some $c_0>0$. Thus $\sum_q q^{n+m-1}g(\rho_q)=\infty$. Define $\theta(q):=qg(\rho_q)^{1/m}/\sqrt m$, so $\sum_q q^{n-1}\theta(q)^m=\infty$. [F3, step 1.2, algebra]

3.1 For $n\ge3$, [A1] and [F4] give full measure at $\theta$ without monotonicity. For $n=1,2$, the assumed decreasing $\psi$ makes $\rho_q=c\psi(q)/q$ non-increasing, and increasing $g$ makes $\theta(q)/q=g(\rho_q)^{1/m}/\sqrt m$ non-increasing. The decreasing-radius sufficient condition in [F4] therefore gives full measure in these cases as well. This does not assert that $\theta$ is decreasing. By [F5]–[F6], that transformed limsup is full in every ball. Choose a bounded ball $\Omega$ containing the unit cube in its interior. Since $\theta(q)/q\to0$ and $\psi(q)/q\to0$, one constant $C_\Omega$ bounds all offsets for both transformed and original events meeting $\Omega$; retain these finitely many offsets on each row shell. By [F2], the transformed events lie in tubes of radius $g(\rho_q)^{1/m}$ around $qX+p-y=0$. Hence the transformed-tube limsup is full in every ball in $\Omega$. [A1, F2, F4, F5, F6, step 2.2, algebra]

4.1 Apply [F7] to those affine planes with original radii $\rho_q$. Its conclusion gives the required gauge-measure equality in every ball in $\Omega$. Since $\rho_q\le\psi(q)/(\sqrt n\|q\|_\infty)$, [F2] puts their original tubes inside the target events. If $r^{-nm}f(r)\to\infty$, any interior ball already gives infinite target measure, equal to that of the cube. If its limit is finite positive, comparison of covering costs makes gauge measure proportional to Lebesgue measure; equality on balls then implies a null complement, and a countable cover together with [F8] gives the cube equality. The zero-limit case was covered in step 1.2. Thus all $n,m$ and the approved monotonicity cases are proved. [F2, F7, F8, step 3.1, algebra] ∎
