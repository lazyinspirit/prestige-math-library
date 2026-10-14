---
id: thm-lehmann-scheffe
kind: theorem
title: "Lehmann–Scheffé theorem"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-unbiased-estimator-and-umvu
  - def-sufficient-statistic
  - def-complete-statistic
  - thm-rao-blackwell
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Theorem 6.5 and proof, PDF pp. 37–38"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 15–16"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
    - title: "Jun Shao, STAT 709 Lecture 15: UMVUE, PDF pp. 1–4"
      url: "https://pages.cs.wisc.edu/~shao/stat709/stat709-15.pdf"
---

## Statement

Assume AC as in the library conditional-expectation convention. Let
$\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be
a statistical experiment with standard-Borel data space. Let
$S:(\mathcal X,\mathcal A)\to(\mathsf S,\mathcal B)$ be a statistic with
standard-Borel target, sufficient under the common conditional-law interface
of [[def-sufficient-statistic]] and complete under [[def-complete-statistic]].
Let $\psi:\Theta\to\mathbb R$ be a real-valued estimand and let
$g:\mathsf S\to\mathbb R$ be Borel, with $g(S)$ unbiased for $\psi$ and of
finite variance under every $P_\theta$. Then $g(S)$ is the unique UMVU
estimator of $\psi$: for every finite-variance unbiased estimator $U$,
$$\operatorname{Var}_\theta(g(S))\leq\operatorname{Var}_\theta(U)\qquad(\theta\in\Theta),$$
and any other UMVU estimator equals $g(S)$ $P_\theta$-almost surely for each
$\theta$.

## Facts & Assumptions

**Given:** AC, a standard-Borel experiment, a complete sufficient statistic $S$, and a finite-variance unbiased estimator $g(S)$ of a real estimand $\psi$.

[F1] UMVU compares the variances of unbiased finite-variance estimators at every parameter. ([[def-unbiased-estimator-and-umvu]])

[F2] For any unbiased finite-variance estimator $U$, Rao–Blackwellization by $S$ is an unbiased finite-variance function of $S$, has no larger variance, and equality at $\theta$ holds exactly when $U$ is $\sigma(S)$-measurable $P_\theta$-almost surely. ([[thm-rao-blackwell]])

[L1] Sufficiency supplies one probability kernel $K$ from the standard-Borel statistic space to the standard-Borel data space such that, for every parameter $\theta$, data event $A$, and statistic event $B$, $P_\theta(A\cap S^{-1}(B))=\int_BK(s,A)P_\theta^S(ds)$. The same kernel is fixed independently of $\theta$. ([[def-sufficient-statistic]])

[L2] Completeness says that for every measurable real-valued $h(S)$ integrable under every $P_\theta$, if $\mathbb E_\theta h(S)=0$ for every $\theta$, then $h(S)=0$ $P_\theta$-almost surely for every $\theta$. ([[def-complete-statistic]])

[F3] The conditional-expectation results used by Rao–Blackwell assume AC, which is stated in that theorem and carried here. ([[def-axiom-of-choice]])

[F4] An integrable $\mathcal G$-measurable function is its own conditional-expectation version given $\mathcal G$. An integrable function equal to it almost surely has the same conditional-expectation class, and versions determine one almost-sure class. ([[def-conditional-expectation-given-a-sigma-algebra]], [[def-conditional-expectation-as-an-ae-class]])

## Proof

**Proof technique:** direct.

1.1 Let $U$ be any finite-variance unbiased estimator of $\psi$. The sufficient-statistic hypothesis [L1] permits applying [F2]. Under the stated AC branch [F3], there is one Borel function $u_S:\mathsf S\to\mathbb R$, independent of $\theta$, such that $u_S(S)$ is a version of $\mathbb E_\theta[U\mid\sigma(S)]$ for every $\theta$. Rao–Blackwell [F2] makes it unbiased and finite-variance and gives $\operatorname{Var}_\theta(u_S(S))\leq\operatorname{Var}_\theta(U)$ for every $\theta$. [F1, F2, L1, F3]

2.1 The difference $u_S(S)-g(S)$ is integrable, is a function of $S$, and has expectation zero for every $\theta$. Completeness [L2] therefore gives $u_S(S)=g(S)$ $P_\theta$-almost surely for every $\theta$. Substitution into step 1.1 proves $\operatorname{Var}_\theta(g(S))\leq\operatorname{Var}_\theta(U)$ for every $\theta$, so $g(S)$ is UMVU. [F1, F2, L2, step 1.1]

3.1 If $V$ is another UMVU estimator, applying steps 1.1 and 2.1 to $V$ gives its Rao–Blackwellized function $v_S(S)=g(S)$ almost surely for each $\theta$. Since both $V$ and $g(S)$ are UMVU, their variances agree at each $\theta$. The equality condition in [F2] makes $V$ $\sigma(S)$-measurable $P_\theta$-almost surely; by [F4], such a representative is its own conditional expectation, so uniqueness gives $V=v_S(S)=g(S)$ almost surely. [F1, F2, F4, step 1.1, step 2.1] ∎
