---
id: thm-rao-blackwell
kind: theorem
title: "Rao–Blackwell theorem for scalar finite-variance estimators"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-unbiased-estimator-and-umvu
  - def-sufficient-statistic
  - def-randomized-procedure-as-a-markov-kernel
  - def-sigma-algebra-generated-by-a-function
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - cor-conditional-lp-contraction
  - thm-conditional-expectation-is-the-l2-orthogonal-projection
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - lem-procedure-action-law-is-measurable
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Theorem 6.1 and proof, PDF pp. 33–35"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 9–11"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, Theorem 5.1 and proof, PDF pp. 102–103"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Statement

Assume the Axiom of Choice as in the library conditional-expectation
convention. Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta))$ have
standard-Borel data space, let $\mathsf S$ be standard Borel, and let
$S:\mathcal X\to\mathsf S$ be a sufficient statistic. Here sufficiency uses
a **supplied common kernel** $K(s,\cdot)$ that is a regular conditional law of
the data given $S=s$ under every $P_\theta$ and does not depend on $\theta$
([[def-sufficient-statistic]]). For Borel $B\subseteq\mathsf S$, write $P_\theta^S(B):=P_\theta(S^{-1}(B))$ for the pushforward law of $S$. Let $\psi:\Theta\to\mathbb R$ and let $U$ be
a measurable real estimator with $\mathbb E_\theta[U]=\psi(\theta)$ and
$\mathbb E_\theta[U^2]<\infty$ for every $\theta$.

There is a single Borel function $g:\mathsf S\to\mathbb R$, independent of
$\theta$, such that $g(S)$ is a version of
$\mathbb E_\theta[U\mid\sigma(S)]$ for every $\theta$. It is unbiased,
finite-variance, and
$$\operatorname{Var}_\theta(g(S))\leq\operatorname{Var}_\theta(U)\qquad(\theta\in\Theta).$$
For each $\theta$, equality holds exactly when $U$ is
$\sigma(S)$-measurable $P_\theta$-almost surely.

## Facts & Assumptions

**Given:** A standard-Borel experiment and statistic space, a sufficient statistic with the supplied common regular conditional kernel described in the Statement, AC, and an unbiased estimator $U$ with finite second moment under every $P_\theta$.

[F1] A finite-variance unbiased estimator is integrable, has expectation $\psi(\theta)$ at every parameter, and has the variance convention stated in the UMVU definition. ([[def-unbiased-estimator-and-umvu]])

[L1] Sufficiency supplies one probability kernel $K$ from the standard-Borel statistic space to the standard-Borel data space such that, for every parameter $\theta$, data event $A$, and statistic event $B$, $P_\theta(A\cap S^{-1}(B))=\int_BK(s,A)P_\theta^S(ds)$. The same kernel is fixed independently of $\theta$. ([[def-sufficient-statistic]])

[F2] For a probability kernel, integrating a nonnegative measurable function gives a measurable function of the input, with the corresponding iterated-integral identity. ([[lem-procedure-action-law-is-measurable]])

[F3] Positive/negative parts, absolute values, and the finite piecewise combinations used to define $g$ preserve measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F4] Nonnegative measurable functions admit increasing simple approximations. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F5] The RCD identity for indicators extends to nonnegative increasing limits by monotone convergence and finite linearity on $L^1$. ([[thm-monotone-convergence-for-the-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F6] The nonnegative integral is monotone, so $\int u^\pm dK\leq\int|u|dK$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F7] Every event in $\sigma(S)$ is $S^{-1}(B)$ for a Borel statistic-space event $B$. ([[def-sigma-algebra-generated-by-a-function]])

[F8] A conditional-expectation version is measurable, integrable, and has the same event integrals on the conditioning sigma-algebra. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F9] Under AC, versions with the same event integrals determine one almost-sure class. ([[def-conditional-expectation-as-an-ae-class]])

[F10] Conditional expectation maps $L^2$ into $L^2$. ([[cor-conditional-lp-contraction]])

[F11] Conditional expectation preserves ordinary expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F12] Under AC, the conditional-expectation class of an $L^2$ input is its orthogonal projection onto the $L^2$ conditioning subspace. ([[thm-conditional-expectation-is-the-l2-orthogonal-projection]])

[F13] The Axiom of Choice is required by the cited conditional-expectation and $L^2$ projection interfaces. ([[def-axiom-of-choice]])

[F14] A nonnegative integrable function with zero integral is zero almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F15] A randomized procedure is a parameter-independent probability kernel from an experiment's data space to its measurable action space. ([[def-randomized-procedure-as-a-markov-kernel]])

## Proof

**Proof technique:** direct.

1.1 Write $u$ for the measurable function defining $U$. For each $\theta$, $P_\theta^S$ is a probability measure: preimages under the measurable map $S$ preserve the empty set, disjoint countable unions, and the whole space. By [L1], $K$ is a parameter-independent probability kernel from the statistic space to the data space, so it is a randomized procedure for the pushforward experiment by [F15]. Thus [F2] and [F3] show that $h_+(s)=\int u^+dK(s,\cdot)$, $h_-(s)=\int u^-dK(s,\cdot)$, and $r(s)=\int|u|dK(s,\cdot)$ are Borel. Let $g=h_+-h_-$ where $r<\infty$ and $g=0$ elsewhere; [F6] makes both terms finite on this Borel set, and [F3] makes $g$ Borel. [given, L1, F2, F3, F6, F15, construct]

2.1 Fix $\theta$ and a Borel statistic event $B$. For nonnegative simple functions of the data, [L1] and finite linearity give $\int_B\int s(x)K(t,dx)P_\theta^S(dt)=\mathbb E_\theta[\mathbf1_{\{S\in B\}}s(X)]$. Approximate $u^+$ and $u^-$ increasingly by simple functions using [F4]; [F5] passes each equality to the limit. Applying the same identity to $|u|$ with $B=\mathsf S$ gives $\mathbb E_\theta r(S)=\mathbb E_\theta|U|<\infty$. If $N=\{r(S)=+\infty\}$ had positive probability, then $m\mathbf1_N\leq r(S)$ for every positive integer $m$, so [F6] would give $mP_\theta(N)\leq\mathbb E_\theta r(S)$ for all $m$, a contradiction; thus $r(S)<\infty$ almost surely. By [F6], $h_+(S),h_-(S)\leq r(S)$, so $|g(S)|\leq2r(S)$ and $g(S)$ is integrable. The two finite event-integral identities may therefore be subtracted, giving $\mathbb E_\theta[\mathbf1_{\{S\in B\}}g(S)]=\mathbb E_\theta[\mathbf1_{\{S\in B\}}U]$. By [F7], [F8], and [F9], $g(S)$ is a version of $\mathbb E_\theta[U\mid\sigma(S)]$ as an almost-sure class for every $\theta$. [given, L1, F1, F4, F5, F6, F7, F8, F9, F13, step 1.1]

3.1 By [F10], $g(S)$ is square-integrable under each $P_\theta$. By [F11], $\mathbb E_\theta[g(S)]=\mathbb E_\theta[U]=\psi(\theta)$; hence it is an unbiased finite-variance estimator. [F1, F10, F11, F13, step 2.1]

4.1 Fix $\theta$. The residual $U-g(S)$ is orthogonal in $L^2(P_\theta)$ to every square-integrable $\sigma(S)$-measurable function by [F12]. By step 3.1 and $\psi(\theta)\in\mathbb R$, $g(S)-\psi(\theta)$ is such a function. Expanding the centered square gives $\operatorname{Var}_\theta(U)=\mathbb E_\theta[(U-g(S))^2]+\operatorname{Var}_\theta(g(S))$. The first term is nonnegative, proving the variance inequality. [F1, F12, F13, step 3.1, algebra]

5.1 By [F14], equality in step 4.1 holds exactly when $U=g(S)$ $P_\theta$-almost surely. Since $g(S)$ is $\sigma(S)$-measurable, this is precisely almost-sure $\sigma(S)$-measurability: if $U$ has such a representative, its $L^2$ class lies in the projection subspace and [F12] fixes it. [step 4.1, F12, F14] ∎
