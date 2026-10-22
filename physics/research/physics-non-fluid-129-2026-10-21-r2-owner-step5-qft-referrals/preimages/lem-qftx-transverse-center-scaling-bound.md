---
id: lem-qftx-transverse-center-scaling-bound
kind: lemma
title: Positive scaling bounds for products transverse at the scaling center
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qft-distribution-scaling-degree
  - def-qftx-local-wavefront-set
  - thm-qftx-wavefront-product
  - lem-fixed-support-test-function-spaces-are-complete
  - thm-baire-category-for-complete-metric-spaces
  - thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - lem-test-function-cutoffs-and-euclidean-localization
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  def-qft-distribution-scaling-degree: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  lem-fixed-support-test-function-spaces-are-complete: mathematical-premise
  thm-baire-category-for-complete-metric-spaces: mathematical-premise
  thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Section 6.2, Lemma 6.6, directional product estimate; the positive-bound, fixed-center variant and its ordinary-to-directional upgrade are proved locally below.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $D,r\ge1$ be integers, let $u_1,\ldots,u_r$ be distributions on a neighborhood of $0\in\mathbb R^D$, already defined at $0$, and let $a_j\ge0$ be finite real numbers such that $\operatorname{sd}_0(u_j)\le a_j$. Here scaling tests may include the origin. Put $C_j=\{\xi\ne0:(0,\xi)\in\operatorname{WF}(u_j)\}$. Suppose
$$\xi_j\in C_j\cup\{0\},\quad\sum_{j=1}^r\xi_j=0\quad\Longrightarrow\quad\xi_1=\cdots=\xi_r=0.$$
Then $\prod_{j=1}^r u_j$ is defined on a sufficiently small neighborhood of $0$ and
$$\operatorname{sd}_0\!\left(\prod_{j=1}^r u_j\right)\le\sum_{j=1}^r a_j.$$
The condition is imposed at the scaling center, including the wavefront covectors of the already extended factors there; transversality only on a punctured set is insufficient for this conclusion.

## Statement references

[[def-qft-distribution-scaling-degree]]

[[def-qftx-local-wavefront-set]]

[[thm-qftx-wavefront-product]]

## Facts & Assumptions

**Given:** The distributions, nonnegative finite upper bounds and joint no-cancellation hypothesis in the Statement.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] and Countable Choice [[def-countable-choice]]. The published theorem [[thm-choice-implies-dependent-implies-countable-choice]] proves in ZF that AC implies Dependent Choice, so its conclusion supplies the DC hypothesis of the Baire theorem in step 1.1. Countable Choice supplies the Fourier inversion clauses.

[F1] [[def-qft-distribution-scaling-degree]] defines $u_\rho(\varphi)=\rho^{-D}u(\varphi(\cdot/\rho))$ also for distributions defined at the origin.

[F2] [[lem-fixed-support-test-function-spaces-are-complete]] and [[thm-baire-category-for-complete-metric-spaces]] give completeness and the Baire property of each fixed-support smooth test space under [A1].

[F3] [[def-qftx-local-wavefront-set]] defines regular cones by rapid decay of localized Fourier transforms; [[thm-qftx-wavefront-product]] gives localization, Fourier convolution, and products under the no-cancellation condition.

[F4] [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]] gives polynomial Fourier bounds and differentiation in frequency for compactly supported distributions.

[F5] [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]] and [[thm-fourier-inversion-on-schwartz-space]] give the continuous Schwartz Fourier transform and its inverse, used below also by transposition on tempered distributions.

[F6] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies smooth compact cutoffs and smooth partitions subordinate to finite chart covers.

## Proof

**Given:** [A1], [F1]–[F6] and the Statement's hypotheses.

1.1 Fix one factor $u$ and a positive exponent $s>\max(0,\operatorname{sd}_0(u))$. Multiply $u$ by a compact cutoff equal to one near zero and denote the result by $v$. Multiplication by this cutoff preserves the scaling upper bound: the tests acquire the factor $\psi(\rho x)$, a bounded smooth family on every fixed compact, and the uniform estimate established next applies to it. For any fixed compact test support $K$, the continuous linear functionals $L_\rho=\rho^s v_\rho$, $0<\rho\le T<\infty$, are pointwise bounded: convergence at zero follows from [F1], and away from zero the dilation tests vary continuously on compact scale intervals. To justify the uniform estimate without assuming it, apply [F2] first to $\rho^s u_\rho$ on a compact containing all small-scale supports. The closed sets $E_N=\{\varphi:\sup_\rho|L_\rho(\varphi)|\le N\}$ cover the fixed-support space. One has interior, so subtracting two elements of that interior and rescaling gives $|L_\rho(\varphi)|\le C p_m(\varphi)$ uniformly in $\rho$, with $p_m=\max_{|\alpha|\le m}\|\partial^\alpha\varphi\|_\infty$. The same argument then applies to $v$ and to every fixed compact scale interval. [A1, F1, F2, F6, construct]

1.2 Choose slightly enlarged closed frequency cones $K_j$ around the $C_j$ such that the joint no-cancellation condition still holds for the $K_j$. This is possible by compactness of tuples with $\sum_j|\xi_j|=1$: the set of tuples in $\prod_j(C_j\cup\{0\})$ is compact there and its sum stays away from zero. If $C_j$ is empty use the empty cone. Closedness of the wavefront set permits localization to a sufficiently small common neighborhood so that all singular directions of each localized $v_j$ lie strictly inside $K_j$. Choose a smooth Fourier cutoff $q_j$ supported in $K_j$ outside a bounded ball and equal to one around those singular directions at large frequencies. Then $(1-q_j)\widehat v_j$ is Schwartz. In fact [F3] gives rapid decay on its unbounded support, while each frequency derivative is a localized Fourier transform with a coordinate monomial inserted, so has the same regular-cone bounds by [F3]–[F4]. Bounded frequencies cause no problem. Thus $v_j=b_j+c_j$, with $b_j$ Schwartz and the Fourier transform of $c_j$ supported in $K_j$ together with a bounded ball. [F3, F4, F5, F6, given, construct]

2.1 The family $L_\rho=\rho^s v_\rho$ is uniformly bounded on Schwartz space by one Schwartz seminorm. Indeed, decompose a Schwartz test into a fixed ball and smooth dyadic annuli of radii $R=2^k\ge1$. On an annulus write $\varphi_R(x)=\theta(x/R)\varphi(x)$ with one fixed annular cutoff. Dilation gives
$$\langle\rho^s v_\rho,\varphi_R\rangle=R^{D-s}\langle(\rho R)^s v_{\rho R},\theta(y)\varphi(Ry)\rangle.$$
If $\operatorname{supp}v\subset B(0,M)$, annuli with $\rho R>2M$ give zero, after increasing $M$ to accommodate the fixed annular radii. For $0<\rho R\le2M$, step 1.1 on the one fixed annulus bounds this by $C R^{D-s+m-L}P_{m,L}(\varphi)$, where $P_{m,L}(\varphi)=\max_{|\alpha|\le m}\sup_x(1+|x|)^L|\partial^\alpha\varphi(x)|$. Choose $L>D-s+m+1$; the geometric sum over $R=2^k$ is finite uniformly in $\rho$. The fixed ball is controlled by step 1.1. This proves $|\langle L_\rho,\varphi\rangle|\le C'P_{m',L'}(\varphi)$ for fixed $m',L',C'$ independent of $\rho$. By transposition [F5] the Fourier transforms are likewise uniformly tempered. [F1, F5, F6, step 1.1, algebra]

3.1 For $s_j>a_j\ge0$, step 2.1 makes $\rho^{s_j}(v_j)_\rho$ uniformly tempered. The Schwartz part $\rho^{s_j}(b_j)_\rho$ is also uniformly tempered, since $b_j(\rho x)$ and each of its derivatives are bounded uniformly for $0<\rho\le1$, and its local smooth seminorms tend to zero. Consequently the Fourier family of $\rho^{s_j}(c_j)_\rho$ is uniformly tempered and supported in $K_j$ together with a fixed bounded ball: dilation shrinks that ball in frequency. Let $V$ be a closed cone disjoint from a slightly larger cone around $K_j$, and let $\chi$ be any fixed compact smooth test cutoff. Evaluate the localized Fourier transform by pairing this Fourier family with $\widehat\chi(\xi-\eta)$ times a smooth cutoff equal to one on its support. On the unbounded conic support, separation gives $|\xi-\eta|\ge c(|\xi|+|\eta|)$ for $\xi\in V$; on the bounded part use $1+|\xi-\eta|\ge c'(1+|\xi|)$ for large $\xi$. Every Schwartz seminorm of this test kernel is therefore $O((1+|\xi|)^{-N})$ for arbitrary $N$. The uniform tempered bound gives
$$\sup_{0<\rho\le1}\sup_{\xi\in V}(1+|\xi|)^N\left|\widehat{\chi\rho^{s_j}(v_j)_\rho}(\xi)\right|<\infty.$$
The Schwartz part has the same estimate by integration by parts on the fixed support of $\chi$. An intermediate exponent between $a_j$ and $s_j$ even makes each displayed seminorm tend to zero. Ordinary weak convergence follows from [F1]. Since $v_j=u_j$ near zero, every fixed output localization uses these same dilates for all sufficiently small $\rho$. This proves the required directional control rather than inferring it from pointwise wavefront inclusion of the rescaled family. [F1, F3, F4, F5, step 2.1, step 1.2, algebra]

4.1 Shrink the cones and localization neighborhoods as in step 1.2, retaining a little angular margin. The product exists there by [F3], iterated over the finitely many factors. For a fixed compactly supported test $\varphi$, its pairing with the product of the localized scaled factors is the absolutely convergent Fourier integral of $\widehat\varphi(-\sum_j\eta_j)$ times the factor transforms. Here is a uniform integrable bound. Compactness of normalized frequency tuples and the joint no-cancellation condition imply that either $|\sum_j\eta_j|\ge c\sum_j|\eta_j|$, or some $\eta_j$ lies in a regular cone and $|\eta_j|\ge c\sum_k|\eta_k|$, for a fixed $c>0$, apart from bounded frequencies. In the first region the Schwartz decay of $\widehat\varphi$ controls the total frequency size; in the second region step 3.1 supplies arbitrarily high decay from that factor. All other localized factor transforms have fixed uniform polynomial bounds by step 1.1 and [F4]. Choosing the decay power larger than the total polynomial degree plus $Dr+1$ gives an integrable majorant independent of $\rho$. Each localized factor transform tends pointwise to zero by weak convergence. Dominated convergence therefore proves $\rho^{\sum_j s_j}\prod_j(u_j)_\rho\to0$. Dilation commutes with the locally defined product by the pullback formula [F3], so this is precisely the scaling estimate for the product. Let every $s_j$ decrease to $a_j$ to obtain the claimed bound. [F1, F3, F4, F5, step 1.1, step 1.2, step 3.1, algebra] ∎

