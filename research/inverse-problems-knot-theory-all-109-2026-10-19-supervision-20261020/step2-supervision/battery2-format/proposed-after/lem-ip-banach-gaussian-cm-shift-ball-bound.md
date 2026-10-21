---
id: lem-ip-banach-gaussian-cm-shift-ball-bound
kind: lemma
title: A Cameron–Martin shift cannot increase centered Gaussian ball mass
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - def-multivariate-normal-law
  - lem-separable-banach-has-countable-norming-family
  - lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss
  - thm-continuity-from-above-for-measures
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§2.4, Lemma 2.4.4 and Theorem 2.4.5, including the complete proof of the Banach Gaussian Anderson inequality."
    - title: "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§3, Theorem 3.2 proof, including the Gaussian small-ball shift comparison cited there; the finite-projection argument is supplied locally."
axiom_use: "The finite-dimensional Gaussian-centering supplier assumes AC. The countable norming family uses HB and countable choice; AC implies countable choice. No stronger choice principle is used."
---

## Statement

Assume the Axiom of Choice, the Hahn–Banach theorem, and countable choice. Let $B$ be a real separable Banach space, and let $W$ be a centered Borel Gaussian random element with Borel law $\mu$. Let $C:B^*\to B$ be its covariance operator, let $E$ be the completion of $B^*/\ker C$ with inner product $\langle[\ell],[m]\rangle_E=m(C\ell)$, and let $i:E\to B$ be the canonical injection extending $[\ell]\mapsto C\ell$. For every $h\in E$ and $r>0$,
$$ \mu\bigl(\{x\in B:\|x-ih\|_B\le r\}\bigr)\le \mu\bigl(\{x\in B:\|x\|_B\le r\}\bigr). $$

## Statement references

[[def-borel-gaussian-random-element-on-a-separable-banach-space|a centered Borel Gaussian is Borel measurable and has centered normal continuous-linear projections]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the covariance operator and covariance-induced Hilbert space]]

[[thm-banach-gaussian-covariance-rkhs-is-well-defined|the canonical Cameron–Martin injection is continuous and injective]]

## Facts & Assumptions

**Given:** AC, HB, countable choice, a real separable Banach space $B$, a centered Borel Gaussian random element $W$, its covariance operator $C$, and its covariance-induced Hilbert space $E$ with canonical injection $i$.

[A1] AC is assumed by the finite-dimensional Gaussian-centering result used below. [[def-axiom-of-choice]]

[A2] HB and countable choice supply the countable norming family used to recover the Banach norm from scalar coordinates. [[def-hahn-banach-extension-principle-relative]], [[def-countable-choice]]

[F1] $W$ is Borel measurable, each $\ell(W)$ is centered normal, and every finite vector of continuous-linear coordinates is a possibly degenerate multivariate normal vector. [[def-borel-gaussian-random-element-on-a-separable-banach-space]], [[def-multivariate-normal-law]]

[F2] $E$ is the completion of $B^*/\ker C$, the map $i$ extends $[\ell]\mapsto C\ell$, and $\ell(ih)=\langle h,[\ell]\rangle_E$. [[def-banach-gaussian-covariance-operator-and-rkhs]], [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]

[F3] There are $\ell_j\in B^*$ with $\|x\|_B=\sup_j|\ell_j(x)|$ for every $x\in B$. [[lem-separable-banach-has-countable-norming-family]]

[F4] For a nondegenerate finite-dimensional centered Gaussian vector, every bounded symmetric loss with convex sublevel sets has minimum expectation at the center. Applying this to the indicator of the complement of a closed symmetric convex set gives the Gaussian shift inequality for that set. [[lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss]]

[F5] For a finite measure, probabilities of a decreasing sequence of measurable sets converge to the probability of their intersection. [[thm-continuity-from-above-for-measures]]

## Proof

**Proof technique:** compare finite collections of norming coordinates by finite-dimensional Gaussian centering, then pass to the norm ball by continuity from above.

1.1 Choose the norming family from [F3]. Fix $r>0$, $h\in E$, and $n\ge1$. Write $Y_n=(\ell_1(W),\ldots,\ell_n(W))$, let $\Sigma_n$ be its covariance matrix, and put $a_n=(\ell_1(ih),\ldots,\ell_n(ih))$. The vector $Y_n$ is centered Gaussian by [F1]. If $c\in\ker\Sigma_n$, then $\sum_{j\le n}c_j\ell_j(W)$ has variance zero and hence is zero almost surely. For $\ell_c=\sum_{j\le n}c_j\ell_j$, this gives $C\ell_c=0$ and $[\ell_c]=0$ in $E$; therefore [F2] gives $c\cdot a_n=\ell_c(ih)=\langle h,[\ell_c]\rangle_E=0$. Thus $a_n\perp\ker\Sigma_n$, so $a_n\in S_n:=\operatorname{ran}(\Sigma_n)$, the support subspace of $Y_n$. [A1, A2, F1, F2, F3, given, choose]

2.1 In the finite-dimensional space $S_n$, the restriction of $Y_n$ is a nondegenerate Gaussian vector. Let $Q_n=[-r,r]^n$ and $D_n=Q_n\cap S_n$, a closed symmetric convex set. Since $a_n\in S_n$, the event $Y_n-a_n\in Q_n$ is the translate by $a_n$ of $D_n$ inside $S_n$. An invertible linear change of coordinates turns the centered law on $S_n$ into a nondegenerate Gaussian law and preserves symmetry and convexity of $D_n$. Apply [F4] to the bounded loss $1_{D_n^c}$ in those coordinates: its sublevel sets are $D_n$ and the whole space, so it is symmetric and quasi-convex. This yields $$ \mathbb P(Y_n-a_n\in Q_n)\le\mathbb P(Y_n\in Q_n). $$ If $S_n=\{0\}$, then $Y_n=a_n=0$ almost surely and the same inequality is equality. [A1, F4, step 1.1, given, algebra]

3.1 Define $A_n(h)=\{\max_{j\le n}|\ell_j(W-ih)|\le r\}$. Step 2.1 says $\mathbb P(A_n(h))\le\mathbb P(A_n(0))$. The sets $A_n(h)$ decrease with $n$, and [F3] gives $\bigcap_n A_n(h)=\{\|W-ih\|_B\le r\}$; likewise $\bigcap_n A_n(0)=\{\|W\|_B\le r\}$. Apply [F5] to both decreasing sequences and pass to their limits in the finite-dimensional inequalities. This proves the stated ball-mass bound. [F3, F5, step 2.1, given, algebra] ∎

