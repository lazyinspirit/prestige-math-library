---
id: thm-khintchine-groshev-hausdorff-measure-zero-full-law
kind: theorem
title: "Khintchine–Groshev zero-full law for Hausdorff measures"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-hausdorff-gauge-measure-is-borel-regular
  - lem-periodic-full-cube-set-is-full-on-every-ball
  - lem-homogeneous-and-fixed-target-approximation-limsup-is-integer-periodic
  - def-khintchine-groshev-matrix-approximation-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-khintchine-groshev-zero-full-law
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-affine-plane-tube-covering-by-small-balls
  - lem-linear-form-events-and-affine-plane-neighborhoods
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
  - def-limsup-tubes-about-affine-subspaces
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Theorem 2 and §2.1"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "Theorem 2 and its convergence/divergence argument"
    - title: "Beresnevich and Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Theorem 1"
      url: "https://arxiv.org/pdf/0811.0809v3"
      locator: "Theorem 1, full quasi-independence proof"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ with $nm>1$, let $\psi:\mathbb N\to[0,\infty)$ be arbitrary, and let $f,g$ be dimension functions with

$$g(r)=r^{-m(n-1)}f(r),\qquad r^{-nm}f(r)\text{ monotonic}.$$

Let $W_{n,m}(\psi)$ be the set of matrices $X\in[0,1]^{n\times m}$ for which $\|qX+p\|_\infty<\psi(\|q\|_\infty)$ for infinitely many $q\in\mathbb Z^n\setminus\{0\}$ and $p\in\mathbb Z^m$. Then

$$\mathcal H^f(W_{n,m}(\psi))=0\quad\text{if }\sum_{q=1}^\infty q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)<\infty,$$

and

$$\mathcal H^f(W_{n,m}(\psi))=\mathcal H^f([0,1]^{n\times m})\quad\text{if }\sum_{q=1}^\infty q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)=\infty.$$

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Theorem 2](https://arxiv.org/pdf/1703.10015v2)

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem*, Theorem 1](https://arxiv.org/pdf/0811.0809v3)

## Facts & Assumptions

**Given:** Countable Choice, the homogeneous matrix convention, and the displayed gauge assumptions.

[A1] Countable Choice is assumed by the Lebesgue and Hausdorff-measure suppliers. ([[def-countable-choice]])

[F1] The approximation set uses rows $q\in\mathbb Z^n\setminus\{0\}$, offsets $p\in\mathbb Z^m$, and the sup norm in $\|qX+p\|_\infty$. ([[def-khintchine-groshev-matrix-approximation-set]])

[F2] A homogeneous linear-form event lies between explicit scaled neighborhoods of its affine solution plane; in particular, an event of radius $\delta$ is contained in the tube of radius $\sqrt m\,\delta/\|q\|_\infty$. ([[lem-linear-form-events-and-affine-plane-neighborhoods]])

[F3] A codimension-$m$ affine-plane tube of radius $r$ intersected with a fixed bounded ball is covered by $O(r^{-m(n-1)})$ balls of radius $2r$. ([[lem-affine-plane-tube-covering-by-small-balls]])

[F4] If $r^{-nm}f(r)\to0$, bounded sets have zero $\mathcal H^f$; if the limit is positive, fixed enlargements have bounded cost and fixed contractions have cost bounded below by a positive multiple. ([[lem-gauge-fixed-dilation-and-small-gauge-regimes]])

[F5] For $nm>1$, arbitrary $\theta$ has the unrestricted zero-full law, with full measure when $\sum_q q^{n-1}\theta(q)^m=\infty$. ([[thm-khintchine-groshev-zero-full-law]])

[F6] Homogeneous and fixed-target limsup sets are invariant under integer matrix translations. ([[lem-homogeneous-and-fixed-target-approximation-limsup-is-integer-periodic]])

[F7] A periodic set that has full measure in the fundamental half-open cube has full Lebesgue and $k$-dimensional Hausdorff measure in every ball. ([[lem-periodic-full-cube-set-is-full-on-every-ball]])

[F8] The affine-plane mass-transference theorem transfers full measure of the $g(\Upsilon)^{1/m}$-tube limsup to full $\mathcal H^f$ measure of the $\Upsilon$-tube limsup. ([[thm-mass-transference-principle-for-systems-of-linear-forms]])

[F9] The ball-cover gauge measure is a Borel measure, so countable ball covers can localize a full-measure conclusion from balls to the cube. ([[thm-hausdorff-gauge-measure-is-borel-regular]])

## Proof

1.1 If the displayed series converges, then $r_q:=\psi(q)/q\to0$: otherwise some $\varepsilon>0$ occurs infinitely often and the corresponding terms are at least $q^{n+m-1}g(\varepsilon)$, contradicting convergence. The number of rows with $\|q\|_\infty=q$ is at most $(2q+1)^n-(2q-1)^n=O(q^{n-1})$. If $r_q<1$, an event meeting the unit cube has $|p_j|\le nq+q$ in each coordinate, so there are $O(q^m)$ relevant offsets. [given, F1, algebra]

1.2 If $r_q\not\to0$, choose $\varepsilon>0$ and infinitely many $q$ with $\psi(q)\ge\varepsilon q$. For each $X$, choose $p$ coordinatewise nearest to $-qX$; then $\|qX+p\|_\infty\le1/2<\psi(q)$ for all sufficiently large such $q$. Thus $W_{n,m}(\psi)$ is the whole cube and the divergence conclusion is immediate. Hence assume $r_q\to0$. If the limit in [F4] is zero, $\mathcal H^f([0,1]^{n\times m})=0$ and the required equality is again immediate. Otherwise choose $c:=1/(2\sqrt n)$ and set $\rho_q:=c r_q$. The lower fixed-contraction bound in [F4], applied to $g(r)=r^{-m(n-1)}f(r)=r^m(r^{-nm}f(r))$, gives $g(\rho_q)\ge c_0g(r_q)$ for all sufficiently large $q$, with $c_0>0$. Therefore $\sum_q q^{n+m-1}g(\rho_q)=\infty$. [given, F4, algebra]

2.1 By [F2]–[F3], the events in shell $q$ are covered by $O(q^{n+m-1}r_q^{-m(n-1)})$ balls of radius $Cr_q$. If the limit in [F4] is zero, the ambient cube has zero gauge measure. Otherwise, [F4] bounds the cost of each fixed enlargement by a constant times $f(r_q)$, so the total shell cost is $O(q^{n+m-1}r_q^{-m(n-1)}f(r_q))=O(q^{n+m-1}g(r_q))$. Tails of the convergent series cover the limsup at arbitrarily small cost. [F2, F3, F4, step 1.1, algebra]

2.2 Define $\theta(q):=q\,g(\rho_q)^{1/m}/\sqrt m$. Then $\sum_q q^{n-1}\theta(q)^m=m^{-m/2}\sum_q q^{n+m-1}g(\rho_q)=\infty$. Since $nm>1$, [A1] and [F5] give full Lebesgue measure for the homogeneous limsup with approximation function $\theta$. By [F6]–[F7], its extension to $\mathbb R^{nm}$ has full measure in every ball. [A1, F5, F6, F7, step 1.2, algebra]

3.1 Choose a bounded ball $\Omega$ containing the unit cube in its interior. Since $\theta(q)/q=g(\rho_q)^{1/m}/\sqrt m\to0$ and $\psi(q)/q\to0$, choose $C_\Omega$ so that for all sufficiently large rows, every offset $p$ occurring in either a $\theta$-event or a $\psi$-event at any $X\in\Omega$ satisfies $\|p\|_\infty\le C_\Omega\|q\|_\infty$. Retain only these finitely many offsets on each row shell. By [F2], the $\theta$-events lie in the transformed tubes of radius $g(\rho_q)^{1/m}$ about $R_{q,p}:=\{X:qX+p=0\}$. The event limsup is full in every ball in $\Omega$, so the limsup of these transformed tubes is full there as well. [F1, F2, step 2.2, algebra]

4.1 Apply [F8] to the planes $R_{q,p}$ with original radii $\rho_q$. It gives full $\mathcal H^f$ measure for their original-tube limsup in every ball $B\subseteq\Omega$. By the reverse inclusion in [F2] and $\rho_q\le\psi(q)/(\sqrt n\|q\|_\infty)$, each original tube is contained in the corresponding linear-form event. If $r^{-nm}f(r)\to\infty$, one interior ball already has infinite target gauge measure, equal to that of the cube. If the limit is finite positive, fine-cover comparison makes gauge measure proportional to Lebesgue measure, so ball equalities imply null complements; a countable cover of the cube and [F9] give the desired equality. The zero-limit case was handled earlier. This proves the divergent conclusion. Mathematical fullness when the ambient measure is infinite is used only as equality of measures. [F2, F8, F9, step 3.1, algebra] ∎
