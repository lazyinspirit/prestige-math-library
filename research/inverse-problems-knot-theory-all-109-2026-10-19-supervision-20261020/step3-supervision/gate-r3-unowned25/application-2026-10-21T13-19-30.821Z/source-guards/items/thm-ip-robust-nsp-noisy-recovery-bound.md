---
id: thm-ip-robust-nsp-noisy-recovery-bound
kind: theorem
title: "Robust nullspace property gives stable noisy recovery"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
axiom_base: "ZF only; finite-dimensional real algebra and the stated finite-dimensional compactness theorem."
deps:
  - def-ip-robust-nullspace-property
  - def-ip-best-s-term-l1-error
  - lem-ip-best-s-term-l1-sparse-vector-formulation
  - lem-ip-largest-s-coordinates-attain-best-s-term-l1-error
  - lem-ip-robust-nsp-block-tail-estimate
  - lem-ip-bpdn-minimizer-exists
  - alg-ip-basis-pursuit-denoising
  - lem-ip-bpdn-dual-certificates
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-finite-sum-laws
  - def-canonical-natural
  - lem-of-naturals-positive
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3, Theorem 4.22"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1, Theorem 2.2"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
---

## Statement

Let $m,n,s\in\mathbb N$ with $m,n\ge1$ and $1\le s\le n$. Use one-based coordinate labels $[n]=\{1,\ldots,n\}$, with label $j$ corresponding to library coordinate $j-1$, and interpret natural numbers in real scalar expressions as their canonical real images. Let $A\in\mathbb R^{m\times n}$ and suppose that for some $0<\rho<1$ and $\tau>0$,
$$\|h_S\|_2\le\frac{\rho}{\sqrt{s}}\|h_{S^c}\|_1+\tau\|Ah\|_2$$
for every $h\in\mathbb R^n$ and every $S\subseteq[n]$ with $|S|\le s$, where for any vector $v\in\mathbb R^n$, $v_S$ agrees with $v$ on $S$ and vanishes on $S^c=[n]\setminus S$. Let $x^\dagger\in\mathbb R^n$, $\epsilon\ge0$, and $e\in\mathbb R^m$ satisfy $y=Ax^\dagger+e$ and $\|e\|_2\le\epsilon$. Define
$$\sigma_s(x^\dagger)_1:=\min\{\|x^\dagger_{T^c}\|_1:T\subseteq[n],\ |T|\le s\}.$$
The indexing family is finite and nonempty, so this minimum is attained; it also equals the minimum of $\|x^\dagger-z\|_1$ over vectors $z$ with at most $s$ nonzero coordinates. Then the basis-pursuit denoising problem
$$\min_{z\in\mathbb R^n}\|z\|_1\quad\text{subject to}\quad\|Az-y\|_2\le\epsilon$$
has a minimizer. Every minimizer $\widehat x$ satisfies
$$\|\widehat x-x^\dagger\|_2\le C_1\frac{\sigma_s(x^\dagger)_1}{\sqrt{s}}+C_2\epsilon,\qquad \|\widehat x-x^\dagger\|_1\le C_3\sigma_s(x^\dagger)_1+C_4\sqrt{s}\,\epsilon,$$
where
$$C_1=\frac{2(1+2\rho)}{1-\rho},\quad C_2=\frac{6\tau}{1-\rho},\quad C_3=\frac{2(1+\rho)}{1-\rho},\quad C_4=\frac{4\tau}{1-\rho}.$$
If the certified finite basis-pursuit denoising procedure returns **success**, its returned vector is a minimizer and satisfies these same bounds. Only reconstruction error is bounded; the theorem asserts neither uniqueness nor support recovery.
## Statement references

[[def-ip-robust-nullspace-property|Tail-ℓ1, head-ℓ2 robust nullspace property]]

[[def-ip-best-s-term-l1-error|Finite coordinate-tail definition of best s-term error]]

[[lem-ip-best-s-term-l1-sparse-vector-formulation|Equivalence with the sparse-vector approximation definition]]

[[lem-ip-largest-s-coordinates-attain-best-s-term-l1-error|Largest-coordinate attainment of the best s-term error]]

[[lem-ip-robust-nsp-block-tail-estimate|Block-tail estimate]]

[[lem-ip-bpdn-minimizer-exists|BPDN minimizer existence]]

[[alg-ip-basis-pursuit-denoising|Capped primal-dual BPDN procedure]]

[[lem-ip-bpdn-dual-certificates|Exact success certificate implies optimality]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3, Theorem 4.22, printed pp. 87–88](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1, Theorem 2.2, printed p. 6](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Facts & Assumptions

**Given:** Integers $m,n\ge1$, $1\le s\le n$, a real matrix $A$ satisfying the robust nullspace inequality, a truth $x^\dagger$, a radius $\epsilon\ge0$, a perturbation $e$ with $y=Ax^\dagger+e$ and $\|e\|_2\le\epsilon$, and any minimizer $\widehat x$ of the residual-constrained $\ell^1$ problem.

[F1] [[def-ip-robust-nullspace-property]]: for every $h$ and every $S\subseteq[n]$ with $|S|\le s$, $\|h_S\|_2\le\frac{\rho}{\sqrt{s}}\|h_{S^c}\|_1+\tau\|Ah\|_2$.

[F2] [[def-ip-best-s-term-l1-error]] and [[lem-ip-best-s-term-l1-sparse-vector-formulation]]: $\sigma_s(x^\dagger)_1$ is the finite coordinate-tail minimum and equals the minimum $\ell^1$ error over vectors with at most $s$ nonzero coordinates.

[F3] [[lem-ip-largest-s-coordinates-attain-best-s-term-l1-error]]: the first $s$ largest coordinates attain this minimum and maximize the retained $\ell^1$ mass over all sets of size at most $s$.

[F4] [[lem-ip-robust-nsp-block-tail-estimate]]: if $S$ is the first $s$ coordinates of $h$ ordered by decreasing absolute value with increasing-index tie breaks, then $\|h_{S^c}\|_2\le\|h_S\|_2+\|h_{S^c}\|_1/\sqrt{s}$.

[F5] [[lem-ip-bpdn-minimizer-exists]]: nonempty finite-dimensional residual balls admit a global $\ell^1$ minimizer.

[F6] [[def-p-norms-on-rn]] and [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: the finite-dimensional one- and two-norms obey their triangle and homogeneity laws.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $\|v\|_1\le\sqrt{k}\|v\|_2$ on a coordinate set of size $k$.

[F8] [[lem-finite-sum-laws]]: finite sums preserve coordinatewise inequalities and split over disjoint sets.

[F9] [[def-canonical-natural]]: $\sqrt{s}$ means $\sqrt{s}$ in real scalar expressions.

[F10] [[lem-of-naturals-positive]]: $s>0$, so all divisions by $\sqrt{s}$ are defined.

[F11] [[alg-ip-basis-pursuit-denoising]]: a returned **success** vector is accompanied by the exact feasibility and primal-dual certificate checks stated in the Algorithm.

[F12] [[lem-ip-bpdn-dual-certificates]]: those exact checks imply that the returned feasible vector is a global minimizer.

## Proof

1.1 The truth $x^\dagger$ is feasible because $\|Ax^\dagger-y\|_2=\|e\|_2\le\epsilon$. Thus the feasible set is nonempty, and [F5] supplies at least one minimizer. Fix any minimizer $\widehat x$ and put $h=\widehat x-x^\dagger$. [given, F5, F6, construct]

1.2 Order the coordinates of $x^\dagger$ by decreasing magnitude, breaking ties by increasing index, and let $T$ be the first $s$ indices. By [F2,F3], $\|x^\dagger_{T^c}\|_1=\sigma_s(x^\dagger)_1=:\sigma$. Minimality of $\widehat x$ and the triangle inequality give $\|x^\dagger_T+h_T\|_1+\|x^\dagger_{T^c}+h_{T^c}\|_1\le\|x^\dagger_T\|_1+\|x^\dagger_{T^c}\|_1.$ Applying $\|a+b\|_1\ge\|b\|_1-\|a\|_1$ to the two disjoint restrictions yields $\|x^\dagger_T\|_1-\|h_T\|_1+\|h_{T^c}\|_1-\|x^\dagger_{T^c}\|_1\le\|x^\dagger_T\|_1+\|x^\dagger_{T^c}\|_1.$ After cancellation this is $\|h_{T^c}\|_1-\|h_T\|_1\le2\sigma$, hence the cone estimate $\|h_{T^c}\|_1\le\|h_T\|_1+2\sigma$. [given, F2, F3, F6, F8, construct, algebra]

2.1 Independently order $h$ by decreasing magnitude with the same deterministic tie break and let $S$ be its first $s$ indices. Since $T$ has size $s$, [F3] gives $\|h_T\|_1\le\|h_S\|_1$ and $\|h_{S^c}\|_1\le\|h_{T^c}\|_1$. Step 1.2 therefore yields $\|h_{S^c}\|_1\le\|h_S\|_1+2\sigma.$ The data relation and feasibility give $Ah=(A\widehat x-y)+e$, so the triangle inequality gives $\|Ah\|_2\le2\epsilon$. [given, F3, F6, step 1.2, algebra]

3.1 Set $u=\|h_S\|_2\ge0$. Applying [F1] to this $S$, then using step 2.1 and Cauchy–Schwarz on its $s$ coordinates, gives $u\le\frac{\rho}{\sqrt{s}}\|h_{S^c}\|_1+\tau\|Ah\|_2 \le\rho u+\frac{2\rho\sigma}{\sqrt{s}}+2\tau\epsilon.$ Since $1-\rho>0$, rearranging proves $u\le\frac{2\rho}{1-\rho}\frac{\sigma}{\sqrt{s}}+\frac{2\tau}{1-\rho}\epsilon.$ [F1, F7, F9, F10, step 2.1, algebra]

4.1 Apply [F4] to $h$ and its chosen largest-coordinate set $S$. Step 2.1 and [F7] show $\|h_{S^c}\|_2\le u+\frac{\|h_{S^c}\|_1}{\sqrt{s}} \le u+\frac{\sqrt{s}\,u+2\sigma}{\sqrt{s}} =2u+\frac{2\sigma}{\sqrt{s}}.$ By the triangle inequality on $h=h_S+h_{S^c}$, $\|h\|_2\le3u+2\sigma/\sqrt{s}$. Substitute step 3.1 and simplify: $\|h\|_2\le\left(\frac{6\rho}{1-\rho}+2\right)\frac{\sigma}{\sqrt{s}}+\frac{6\tau}{1-\rho}\epsilon =\frac{2(1+2\rho)}{1-\rho}\frac{\sigma}{\sqrt{s}}+\frac{6\tau}{1-\rho}\epsilon.$ [F4, F6, F7, step 2.1, step 3.1, algebra]

4.2 Disjoint coordinates and step 2.1 give $\|h\|_1\le\|h_S\|_1+\|h_{S^c}\|_1\le2\sqrt{s}\,u+2\sigma$ by [F7]. Substituting step 3.1 yields $\|h\|_1\le\left(\frac{4\rho}{1-\rho}+2\right)\sigma+\frac{4\tau}{1-\rho}\sqrt{s}\,\epsilon =\frac{2(1+\rho)}{1-\rho}\sigma+\frac{4\tau}{1-\rho}\sqrt{s}\,\epsilon.$ This proves both bounds for the arbitrary minimizer fixed at step 1.1. [F7, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 If the finite procedure returns success, [F11] gives the same exact feasibility and certificate conditions, and [F12] makes its vector a minimizer. Steps 1.2, 2.1, 3.1, 4.1, and 4.2 therefore apply to that vector as well. No step uses uniqueness or identifies a support. [F11, F12, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2] ∎