---
id: thm-qa-28-spectral-estimation-guarantee
kind: theorem
title: Additive spectral-estimation accuracy and cost
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-28-phase-spectral-estimation
  - thm-qa-phase-estimation-success-and-tail
  - def-qa-28-spectral-estimation-access
  - alg-qa-28-median-spectral-estimation
  - thm-qa-28-spectral-law-measurement
  - def-natural-logarithm
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-integral-logarithm-is-strictly-increasing
  - thm-integral-logarithm-derivative-and-normalisation
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - thm-natural-logarithm-laws
  - cor-pi-is-the-first-positive-sine-zero
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - thm-of-archimedean
  - def-qa-eigenphase-estimation-model
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - thm-cauchy-schwarz-finite
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-qc-projective-measurement
justified_by: []
axiom_use: "None; finite product probability bounds and finite-dimensional Cauchy–Schwarz suffice."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $V$ be a finite-dimensional complex inner-product space, let $H:V\to V$ be Hermitian with $\sigma(H)\subseteq[-1,1]$, let $\psi$ be a normalized eigenvector of eigenvalue $\lambda$, and let $U=e^{iH}$. Use a Hamiltonian spectral-estimation access instance whose system is $V$, whose state-preparation circuit prepares $\psi$, whose phase unitary is $U$, whose phase encoding is $\mu\mapsto\mu/(2\pi)\pmod1$ on $\sigma(H)$, and whose decoder returns $2\pi$ times the principal representative in $(-1/2,1/2]$. For positive rational $0<\epsilon\le1$ and $0<\delta<1$, take certified rational upper enclosures $\pi_+>\pi$ and $L_+\ge\ln(1/\delta)$ and run [[alg-qa-28-median-spectral-estimation]] on this instance with its least dyadic $Q$ satisfying $Q\epsilon\ge6\pi_+$ and least positive odd $r$ satisfying $r\ge8L_+$. In particular $Q\epsilon\ge6\pi$ and $r\ge8\ln(1/\delta)$. In the exact model, its median $\widetilde\lambda$ satisfies
$$\Pr\bigl(|\widetilde\lambda-\lambda|\le\epsilon\bigr)\ge1-\delta.$$
If each of the $r$ executed trials has total state-vector deviation at most $\xi$ from its exact trial (including preparation and all controlled simulation errors), then
$$\Pr\bigl(|\widetilde\lambda-\lambda|\le\epsilon\bigr)\ge1-\delta-r\xi.$$
An access interface that implements controlled-$U$ by repeated calls uses $r(Q-1)$ controlled-$U$ calls, in addition to $r$ state preparations, measurements, decodings, and the certified schedule/median costs. Exact power access instead uses the sum of its declared power-query costs over the $r$ trials. The eigenvector hypothesis is essential to the fixed-eigenvalue guarantee; a counterexample in the more general injective phase-access model is included below.

## Facts & Assumptions

**Given:** The eigenstate promise, $U=e^{iH}$, positive rational accuracy/failure inputs, certified rational schedule bounds, the spectral-estimation and median procedures, and the stated exact or approximate access costs. For an approximate run, $\xi$ bounds the final unit-vector distance from the corresponding exact trial output before measurement.

[F1] [[thm-qa-phase-estimation-success-and-tail]]: if $K=\lfloor Q\eta\rfloor\ge2$, phase-QPE has circular tail at most $1/(2(K-1))$.

[F2] [[alg-qa-28-median-spectral-estimation]]: the $r$ trials reprepare the same eigenstate, run QPE independently, decode in the fixed principal branch, and return the median.

[F3] [[def-qa-28-spectral-estimation-access]] and [[def-qa-eigenphase-estimation-model]]: the eigenvalue decoder is injective on the promised spectrum, the eigenphase convention is $U\psi=e^{2\pi i\theta}\psi$, and controlled powers or their construction and costs are explicit.

[F4] [[thm-cauchy-schwarz-finite]]: for finite real lists $(a_y)$ and $(b_y)$, $\sum_y a_yb_y\le\sqrt{\sum_y a_y^2}\sqrt{\sum_y b_y^2}$ when the entries are nonnegative.

[F11] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: in a complex inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$.

[F12] [[alg-qa-28-phase-spectral-estimation]] performs a finite projective readout on the phase register, and [[def-qc-projective-measurement]] supplies mutually orthogonal projections $P_y$ with $\sum_yP_y=I$; hence $\sum_y\|P_yz\|^2=\|z\|^2$ for every trial vector $z$.

[F5] [[cor-integral-logarithm-agrees-with-natural-logarithm]] and [[cor-integral-logarithm-is-strictly-increasing]]: for $x>0$, $\ln x=\int_1^x dt/t$ and the logarithm is strictly increasing.

[F6] [[thm-natural-logarithm-laws]], [[def-natural-logarithm]], [[thm-exponential-is-strictly-increasing]], and [[cor-exponential-reciprocal-and-positivity]]: $\ln(1/\delta)=-\ln\delta$; the real exponential is increasing, inverse to the natural logarithm, and satisfies $e^{-x}=1/e^x$.

[F7] [[cor-pi-is-the-first-positive-sine-zero]] and [[lem-sine-positive-and-cosine-decreasing-on-zero-two]]: sine is positive on $(0,\pi)$ and on $(0,2]$, so $\pi>2$.

[F8] [[thm-of-archimedean]]: for every positive real cutoff, some natural number exceeds it.

[F9] [[def-functional-calculus-for-a-normal-endomorphism]], [[prop-functional-calculus-for-normal-endomorphisms]], [[def-complex-exponential]], and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: on an eigenvector of $H$ with eigenvalue $\lambda$, $e^{iH}$ has eigenvalue $e^{i\lambda}=e^{2\pi i(\lambda/(2\pi))}$, so its QPE phase is $\lambda/(2\pi)$ modulo one.

[F10] [[thm-integral-logarithm-derivative-and-normalisation]] gives $L'(x)=1/x$ for $x>0$ and $L(1)=0$; [F5] identifies $L=\ln$. Differentiability gives continuity at all positive points by [[cor-differentiable-implies-continuous]], so [[cor-mean-value-theorem]] applies on every positive compact interval.

## Proof

1.1 For the prepared eigenvector of eigenvalue $\lambda\in[-1,1]$, put $\theta_0=\lambda/(2\pi)$ and let $\bar\theta\in[0,1)$ be the representative of its encoded phase class. By [F9], $U\psi=e^{2\pi i\bar\theta}\psi$. Set $\eta=\epsilon/(2\pi)$; then $Q\eta=Q\epsilon/(2\pi)\ge3$, so $K=\lfloor Q\eta\rfloor\ge3$. Apply [F1] to $\bar\theta$: except with probability at most $1/(2(K-1))\le1/4$, the circular phase error is less than $\eta$. On this event, the definition of the circular distance in [F1] gives an integer $k$ with $|y/Q+k-\bar\theta|<\eta$. Write $\bar\theta=\theta_0+n$ for an integer $n$; then $y/Q+k-n=\theta_0+e$ for some $|e|<\eta\le1/(2\pi)$. Consequently $|\theta_0+e|<1/\pi<1/2$ by [F7], so this lift is the principal representative and the specified decoder returns an estimate with error $2\pi|e|<\epsilon$. Thus each exact trial succeeds with probability at least $3/4$. [F1, F2, F3, F7, F9, given, algebra]

1.2 With controlled-$U$ access, the QPE phase register uses powers $U^{2^j}$ for $j=0,\ldots,m-1$, whose repeated-call implementation uses $\sum_j2^j=Q-1$ calls per trial. There are $r$ trials; each begins with a fresh charged state preparation and has one projective readout and one decoder. Exact supplied powers replace this count by their declared per-trial costs. No uncontrolled resource coordinate is inferred. [F2, F3, given, algebra]

1.3 The rational schedule search in [F2] terminates. Since $\epsilon>0$ and $\pi_+,L_+$ are finite rationals, [F8] gives an integer $N\ge1$ with $N>6\pi_+/\epsilon$ and $N>8L_+$. The bound $2^n\ge n+1$ follows by induction: it is equality at $n=0$, and $2^{n+1}\ge2(n+1)\ge n+2$ whenever it holds at $n$. Thus $2^N\epsilon\ge(N+1)\epsilon>6\pi_+$ and the dyadic doubling search stops by exponent $N$. The odd integer $2N+1$ exceeds $8L_+$, so the increasing odd search also stops by then. Each least schedule value is therefore found by a finite search, with rational comparisons. [F2, F8, given, induction, algebra]

2.1 Let $X_i$ be the indicator of success on trial $i$ and $S=\sum_{i=1}^rX_i$. Exact independent fresh preparations make the $X_i$ independent, with $p_i=\Pr(X_i=1)\ge3/4$ by step 1.1. For $t=\ln3>0$, on $S\le r/2$ we have $e^{-tS}\ge e^{-tr/2}$, so summing the nonnegative finite expectation over this event gives $\Pr(S\le r/2)\le e^{tr/2}\mathbb E(e^{-tS})=e^{tr/2}\prod_i(1-p_i+p_ie^{-t})\le(\sqrt3/2)^r$. Each factor decreases in $p_i$ and at $p_i=3/4$ the product factor is $\sqrt3(1/4+1/4)=\sqrt3/2$. Since $2/\sqrt3>8/7$ (both sides are positive and $4/3>64/49$ because $196>192$) and [F10] applies to $L$ on $[1,8/7]$, there is $c\in(1,8/7)$ with $\ln(8/7)=L(8/7)-L(1)=(1/7)L'(c)=1/(7c)>1/8$. Thus [F5] gives $\ln(2/\sqrt3)>1/8$, and [F6] implies $(\sqrt3/2)^r\le e^{-r/8}$. The schedule gives $r/8\ge L_+\ge\ln(1/\delta)$, so [F6] and monotonicity of the exponential yield $e^{-r/8}\le e^{-\ln(1/\delta)}=\delta$. An odd median is inaccurate only if at least half the trials are inaccurate, which is contained in $\{S\le r/2\}$; this proves the exact claim. [F2, F5, F6, F10, step 1.1, given, algebra]

3.1 For one approximate trial, write the exact and implemented normalized vectors as $v,w$ and put $d=v-w$. For each readout projector $P_y$, the identity $P_y=P_y^*=P_y^2$ gives $\langle d,P_yv\rangle=\langle P_yd,P_yv\rangle$ and $\langle w,P_yd\rangle=\langle P_yw,P_yd\rangle$. Applying [F11] termwise, then [F4] to the nonnegative real lists of projected-vector norms and using [F12], bounds each of $\sum_y|\langle d,P_yv\rangle|$ and $\sum_y|\langle w,P_yd\rangle|$ by $\|d\|\le\xi$, since $\|v\|=\|w\|=1$. Expanding $\langle v,P_yv\rangle-\langle w,P_yw\rangle$ as the sum of those two terms shows that the $\ell^1$ distance of the outcome laws is at most $2\xi$, hence their total variation distance is at most $\xi$. For finite probability laws $p,q$ and an event $E$, $p(E)-q(E)=\frac12(\sum_{y\in E}(p_y-q_y)-\sum_{y\notin E}(p_y-q_y))$, so $|p(E)-q(E)|\le\frac12\sum_y|p_y-q_y|$. In a product of $r$ trial laws, inserting hybrids that replace one factor at a time and using that every unchanged factor has mass one bounds the total variation distance by the sum of the single-trial distances, at most $r\xi$. Applying the event bound to the median-success event and the exact probability from step 2.1 gives probability at least $1-\delta-r\xi$. [F4, F11, F12, step 2.1, given, algebra]

4.1 The eigenstate promise cannot be dropped from the generic phase-access procedure. Consider the access instance $U=\operatorname{diag}(1,-1)$ with encoded eigenvalue labels $0$ and $1/2$ assigned to phases $0$ and $1/2$, and input $\psi=(|0\rangle+|1\rangle)/\sqrt2$. Choose any $0<\epsilon<1/4$ and a dyadic $Q$ satisfying $Q\epsilon\ge6\pi$; then $Q$ is even. Both phases lie exactly on the QPE grid, so [F1] gives output $0$ or $1/2$ with probability $1/2$ each. Fresh repetitions are independent; pairing each length-$r$ sequence with the sequence obtained by swapping every $0$ and $1/2$ shows the median is each encoded eigenvalue with probability exactly $1/2$. The two $\epsilon$-neighborhoods are disjoint, so neither fixed label has success probability above $1/2$. This counterexample uses the generic injective phase-encoding interface [F3], and shows why this theorem states the Hamiltonian guarantee for eigenstate input only. [F1, F2, F3, given, algebra] ∎
