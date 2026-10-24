---
id: thm-qa-30-sdp-gibbs-state-error-cost
kind: theorem
title: "Gibbs purification error and resource bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-functional-calculus-for-a-normal-endomorphism
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - lem-rat-embeds-dense
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - def-factorial-and-falling-factorial
  - thm-complex-exponential-addition-and-real-extension
  - alg-qa-30-sdp-gibbs-purification
  - thm-qa-28-matrix-function-error-cost
  - lem-qa-30-capamplify-state-output-bound
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1806.01838"
      url: "https://arxiv.org/pdf/1806.01838"
verification:
  precheck: pass
---

## Statement

Let the ideal unnormalized Gibbs amplitude on the reference state be $|v\rangle=((e^{-G/2}/B)\otimes I)|\Phi_d\rangle$ with ideal flag probability $p_G=\|v\|^2>0$, where $B>0$ is the declared block-encoding normalization. Suppose the implemented flagged preparation has good-branch vector $|\widetilde v\rangle$ with $\|\widetilde v-v\|\le\zeta$, and assume $0\le\zeta\le\sqrt{p_G}/2$. Then its normalized conditional state is within $2\zeta/\sqrt{p_G}$ in vector norm of the ideal Gibbs purification. Its actual success probability is at least $p_G/4$. There exists a positive rational $q$ with $p_G/8<q<p_G/4$. CapAmplify supplied any certified such $q$ returns that implemented good ray with probability at least $2/3$ using $O(p_G^{-1/2})$ preparation, inverse, and reflection calls. The floor certificate is a supplied input to this call; obtaining and verifying it are separately charged and are not an exact trace oracle. The total cost also includes QSVT/block access, phase compilation, reference preparation, and all gate/precision costs.

## Facts & Assumptions

**Given:** The ideal and implemented flagged vectors, the additive error bound, and the finite cap-amplification lemma.

[F1] [[alg-qa-30-sdp-gibbs-purification]]: the ideal postselected branch is proportional to $(e^{-G/2}\otimes I)|\Phi_d\rangle$ and every preparation/access call is supplied.

[F2] [[lem-qa-30-capamplify-state-output-bound]]: with a supplied positive rational lower bound on flag probability and rational failure target, capped amplification returns the normalized good projection with stated confidence and preserves its ray.

[F3] [[lem-rat-embeds-dense]]: strictly between any two real numbers lies a rational.

[F4] [[def-real-exponential-function-and-e]] defines the real exponential by its factorial series, [[def-factorial-and-falling-factorial]] gives the factorial recursion, and [[thm-complex-exponential-addition-and-real-extension]] gives the exponential addition law and agreement of real and complex exponentials; [[thm-exponential-is-strictly-increasing]] gives monotonicity on real arguments, and [[cor-exponential-reciprocal-and-positivity]] gives positivity and $\exp(-x)=1/\exp(x)$.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] gives an orthonormal eigenbasis for a finite Hermitian matrix. In that basis [[def-functional-calculus-for-a-normal-endomorphism]] makes $e^{-G}$ diagonal with entries $e^{-\lambda_j}$, and [[def-trace-of-an-endomorphism]] with [[def-trace-of-a-square-matrix]] gives its trace as the sum of those diagonal entries.

## Proof

**Proof technique:** direct.

1.1 By the reverse triangle inequality, $\|\widetilde v\|\ge\|v\|-\|\widetilde v-v\|\ge\sqrt{p_G}-\zeta\ge\sqrt{p_G}/2$, so the implemented branch is nonzero and its probability is at least $p_G/4$. Also $\left\|\frac{\widetilde v}{\|\widetilde v\|}-\frac v{\|v\|}\right\|\le\frac{\|\widetilde v-v\|+|\|v\|-\|\widetilde v\||}{\|v\|}\le\frac{2\zeta}{\sqrt{p_G}}.$ This proves the conditional-state bound. [given, F1, algebra]

2.1 Since $p_G>0$, [F3] supplies a rational $q$ strictly between $p_G/8$ and $p_G/4$. Supply this finite rational together with its lower-bound certificate to [F2]; step 1.1 shows $q$ is below the implemented success probability. Apply [F2] with $p_{\rm low}=q$ and rational failure target $1/3$. It returns the same normalized good projection as the conditional branch from step 1.1 with probability at least $2/3$. Since $q^{-1/2}<\sqrt8\,p_G^{-1/2}$, its preparation/reflection call count is $O(p_G^{-1/2})$ for this fixed confidence; supplied QSVT, block, reference-state, inverse, compilation and precision costs, including acquisition and verification of the rational floor certificate, remain additional. Rational density establishes existence, not a free algorithm for comparing an exact real trace. [given, F2, F3, step 1.1, choose, algebra]

3.1 For the optional normalized branch of [F1], condition on the shift good event. The algorithm gives $\lambda_{\min}(G)\le2$, $B=B_G^+=1+e/8\le17/16$, and $p_G=\operatorname{tr}(e^{-G})/[d(B_G^+)^2]$. For completeness, choose the orthonormal eigenbasis in [F5], listing eigenvalues with multiplicity as $\lambda_1,\ldots,\lambda_d$, with $\lambda_1=\lambda_{\min}(G)\le2$. Then $\operatorname{tr}(e^{-G})=\sum_{j=1}^d e^{-\lambda_j}\ge e^{-\lambda_1}\ge e^{-2}$ by [F4] and [F5], so $p_G\ge e^{-\lambda_{\min}(G)}/[d(B_G^+)^2]$. The factorial recursion in [F4] gives $k!\ge2^{k-1}$ for $k\ge2$, with $1/3!=1/6$ smaller than $2^{-2}=1/4$ by $1/12$. For every integer $M\ge3$, the finite geometric identity $\sum_{k=2}^M2^{1-k}=1-2^{1-M}$ follows by subtracting half the finite sum from itself. Hence $\sum_{k=0}^M1/k!\le2+(1-2^{1-M})-1/12\le35/12$. The convergent exponential series in [F4] therefore has $\exp(1)\le35/12<3$: a larger limit would contradict that bound on all sufficiently late partial sums. The addition law gives $\exp(2)<9$ and $\exp(-2)=1/\exp(2)>1/9$, using $\exp(0)=1$ from its series. Consequently $p_G>1/[9d(17/16)^2]>1/(16d)$. The algorithm now chooses $e\le\min(1,\varepsilon_{out})/(10000\sqrt d)$; its successful-vector error is at most $e$, so $e<\sqrt{p_G}/2$. Step 1.1 gives actual probability greater than $1/(64d)$ and normalized vector error at most $8e\sqrt d\le\varepsilon_{out}$. Hence [F2] applies to its declared rational floor $1/(64d)$. For failure target $\rho$, this branch uses $O(\sqrt d(1+\ln(1/\rho)))$ amplification calls, conditional on the shift good event; shift failure and all supplied implementation costs are accounted for separately. This fixed floor is not asserted to be a constant fraction of $p_G$. [given, F1, F2, F4, F5, step 1.1, choose, algebra] ∎

