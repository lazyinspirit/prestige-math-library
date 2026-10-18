---
id: thm-two-scale-compactness-for-l2-bounded-sequences
kind: theorem
title: Two-scale compactness for bounded L2 sequences
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-periodic-two-scale-convergence
  - lem-periodic-averaging-on-cube
  - lem-product-rectangle-kernels-are-dense-in-product-l-two
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-riesz-representation-for-hilbert-space
  - thm-bolzano-weierstrass
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.2, Theorem 1.3.4, PDF p. 15: two-scale compactness statement; the countable-test and Riesz proof is supplied locally."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 15–18: related qualitative homogenization by compensated compactness, not a proof of this two-scale compactness theorem."
verification:
  precheck: pass
---
## Statement

Let $Q=Y=(0,1)^d$, let $\epsilon_n\downarrow0$ (monotonicity may be dropped; only $\epsilon_n\to0$ is used), and suppose $(u_n)$ is bounded in $L^2(Q)$. Then some subsequence two-scale converges in the sense of [[def-periodic-two-scale-convergence]] to a function $u\in L^2(Q\times Y)$.

## Facts & Assumptions

**Given:** A bounded real $L^2(Q)$ sequence, positive scales tending to zero, periodic rescaling, density of smooth product tests, Countable Choice, real Bolzano--Weierstrass, and Hilbert Riesz representation.

[F1] [[def-periodic-two-scale-convergence]]: convergence is tested against finite sums of compactly supported smooth slow factors and smooth periodic fast factors.

[F2] [[lem-periodic-averaging-on-cube]]: for every fixed smooth product test $\Phi$, $\|\Phi(\cdot,\cdot/\epsilon_n)\|_{L^2(Q)}\to\|\Phi\|_{L^2(Q\times Y)}$; this follows by applying periodic averaging to $|\Phi(x,y)|^2$.

[F3] [[lem-product-rectangle-kernels-are-dense-in-product-l-two]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], and [[thm-fourier-basis-and-parseval-on-the-n-torus]]: finite sums of smooth product tests are dense in $L^2(Q\times Y)$.

[F4] [[def-countable-choice]]: a point can be selected from each member of a fixed countable family of nonempty sets; this will select the dense test family.

[F5] [[thm-bolzano-weierstrass]]: bounded real scalar sequences have convergent subsequences.

[F6] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] and [[thm-riesz-representation-for-hilbert-space]]: every bounded real linear functional on $L^2(Q\times Y)$ is integration against a unique $L^2$ function.

[F7] [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]: the finite-measure product space is separable, consistently with the dense test family in [F3].

## Proof




1.1 Let $M=\sup_n\|u_n\|_2$. By [F7], extend functions by zero to see that $L^2(Q\times Y)$ is separable; [F3] says the allowed test subspace is dense there. Intersect a countable base of its metric topology with that subspace and, using [F4], choose one point from every nonempty intersection. The rational span of these points is a countable dense family $D$. For each fixed $\Phi\in D$, Cauchy--Schwarz gives $\left|\int_Qu_n(x)\Phi(x,x/\epsilon_n)dx\right|\le M\|\Phi(\cdot,\cdot/\epsilon_n)\|_2,$ which is bounded by [F2]. For a bounded real sequence $(b_n)$ fix this extraction rule: let $m$ be the least positive integer bounding every $|b_n|$, start with $[-m,m]$, bisect repeatedly, and retain the left closed half when it contains infinitely many terms, otherwise the right closed half. From the $r$th retained interval take the term with least index larger than the previously selected index. Such indices exist; nestedness and vanishing interval lengths make the selected sequence Cauchy, and [F5] makes it convergent. This uniquely specified extraction map requires no choice. Enumerate $D$, recursively apply this map to each scalar pairing on the current subsequence, and take as $n_r$ the $r$th index of the $r$th nested subsequence. The indices increase strictly and their tail lies in every fixed earlier subsequence, so all pairings with $D$ converge. Recursion of the specified map does not use Dependent Choice. [F7, F3, F4, F2, F5, algebra]

2.1 Denote the limit on $D$ by $L_0$. For each $\Phi\in D$, step 1.1 and [F2] give $|L_0(\Phi)|\le M\|\Phi\|_{L^2(Q\times Y)}$. Limits preserve rational linearity; the bound makes $L_0$ uniformly continuous, so it has a unique continuous extension $L$ to all of the real Hilbert space $L^2(Q\times Y)$, with $\|L\|\le M$. To verify real homogeneity, first fix $\Phi\in D$ and $t\in\mathbb R$, and choose rationals $q_m\to t$. Since $q_m\Phi\in D$, $L(q_m\Phi)=q_mL_0(\Phi)$; continuity and $q_m\Phi\to t\Phi$ give $L(t\Phi)=tL(\Phi)$. For arbitrary $h\in L^2(Q\times Y)$, choose $\Phi_j\in D$ with $\Phi_j\to h$; then $t\Phi_j\to th$, and continuity gives $L(th)=tL(h)$. Additivity also passes from $D$ by continuity, so $L$ is bounded and real-linear. [step 1.1, F2, F3, algebra]

3.1 By [F6], choose $u\in L^2(Q\times Y)$ such that $L(\Phi)=\int_{Q\times Y}u\Phi$. Fix any allowed smooth product test $\Psi$ and choose $\Phi_j\in D$ with $\Phi_j\to\Psi$ in product $L^2$. Along the extracted subsequence, [F2] applied to $\Psi-\Phi_j$ gives $\limsup_n\left|\int_Qu_n(\Psi-\Phi_j)(x,x/\epsilon_n)dx\right|\le M\|\Psi-\Phi_j\|_2.$ Also $|L(\Psi-\Phi_j)|\le M\|\Psi-\Phi_j\|_2$. Since the pairings for $\Phi_j$ converge to $L(\Phi_j)$, letting $j\to\infty$ proves convergence for $\Psi$ to $L(\Psi)=\int u\Psi$. This is precisely the two-scale convergence in [F1]. [F6, F2, F1, F3, step 2.1, algebra] ∎
