---
id: lem-em-particle-curve-variation
kind: lemma
domain: mathematics
title: "Fixed-endpoint variation of the relativistic particle functional"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 12
deps: [def-inertial-frame-and-inertial-chart, def-sr-proper-time, def-sr-four-velocity-and-four-acceleration, thm-chain-rule-for-total-derivatives, thm-cauchy-schwarz-and-the-euclidean-norm, def-sr-affine-minkowski-model, def-sr-regular-causal-curve-and-worldline, thm-sr-proper-time-and-observer-decomposition, thm-extreme-value-metric, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, thm-ftc-second-part, lem-test-function-cutoffs-and-euclidean-localization, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, thm-algebra-of-derivatives, thm-chain-rule, thm-real-power-continuity-and-derivatives, thm-continuous-implies-integrable, thm-real-power-agrees-with-rational-exponent]
dependency_roles:
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Chapter 1, Sections 1.2.1-1.2.3 (relativistic particle action)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
      locator: "Section 1.2.1, equation 1.14, supplies context for the free -mc proper-length term. Section 1.2.3, equation 1.21, uses -q A_mu xdot^mu; this item chooses +q A_mu xdot^mu, corresponding to the opposite covector sign convention. The fixed-endpoint variation, compact-interval justification and choice-free localization are proved locally. Physical adoption remains a separate model assumption."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space ([[def-sr-affine-minkowski-model]]) and fix a conversion constant $c>0$, let $[a,b]$ be a nondegenerate compact interval, let $X:[a,b]\to A$ be a $C^2$ future timelike curve ([[def-sr-regular-causal-curve-and-worldline]]), and let $\mathcal A$ be a $C^2$ covector field on a neighbourhood of the image of $X$. An inertial frame is $(o;e_0,e_1,e_2,e_3)$ with future positively oriented $\eta$-orthonormal basis, and its chart sends $p$ to the unique coordinates of $p-o$ in that basis; in these coordinates $\eta_{\mu\nu}=\operatorname{diag}(-1,1,1,1)_{\mu\nu}$ ([[def-inertial-frame-and-inertial-chart]]). In any such chart write the covector components as $A_\mu$ and define the antisymmetric covariant field $F$ by $F_{\nu\mu}=\partial_\nu A_\mu-\partial_\mu A_\nu$; this coordinate formula defines the notation $F=d\mathcal A$ used below. Indices run from $0$ to $3$, repeated indices are summed, and $U_\nu=\eta_{\nu\mu}U^\mu$. All integrals in this particle lemma are finite-interval Riemann integrals. On $[a,b]$, $C^2$ means continuous components and continuous first and second derivatives with their one-sided endpoint values; equations at endpoints use those same one-sided derivatives. For fixed-endpoint $C^2$ variations $h:[a,b]\to V$ with $h(a)=h(b)=0$ and for $m,c>0$ and real $q$ consider

$$S[X]=-mc\int_a^b\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int_a^bA_\mu(X)\dot X^\mu\,ds .$$

Then for each such $h$ the curve $X+\varepsilon h$ remains future timelike for all sufficiently small $|\varepsilon|$, and stationarity of $S$ under all such variations is equivalent to

$$m\frac{dU_\nu}{d\tau}=qF_{\nu\mu}U^\mu,\qquad\frac{d\tau}{ds}=\frac{\sqrt{-\eta(\dot X,\dot X)}}c,\qquad F=d\mathcal A,$$

where $\tau(s)=\tau_0+c^{-1}\int_a^s\sqrt{-\eta(\dot X,\dot X)}\,dr$ with arbitrary $\tau_0\in\mathbb R$, and $U(s)=\dot X(s)/\tau\prime(s)$ are the proper-time function and four-velocity ([[def-sr-proper-time]], [[def-sr-four-velocity-and-four-acceleration]]); $dU/d\tau=U\prime/\tau\prime$ and $\eta(U,U)=-c^2$ ([[thm-sr-proper-time-and-observer-decomposition]]). This is a calculation about the chosen functional; adopting it as a physical particle action is an additional model assumption, and it makes no existence claim for coupled singular particles and fields. The coefficient-localization proof below is one-dimensional and choice-free; it does not invoke an AC-qualified Lebesgue fundamental lemma.

## Facts & Assumptions
**Given:** An oriented time-oriented affine Minkowski space with constant $c>0$; a nondegenerate compact interval $[a,b]$; a $C^2$ future timelike curve $X:[a,b]\to A$; a $C^2$ covector field $A_\mu$ on a neighbourhood of its image; constants $m>0$ and real $q$; and the functional $S$ of the Statement.

[F1] **Minkowski geometry and worldlines.** $\eta$ is a nondegenerate symmetric bilinear form of inertia $(3,1,0)$ (one negative and three positive directions) on $V$, $C^+$ is the future cone, and a $C^2$ future timelike curve has $\eta(\dot X,\dot X)<0$ and future-directed velocity ([[def-sr-affine-minkowski-model]], [[def-sr-regular-causal-curve-and-worldline]]).

[F2] **Observer decomposition.** The four-velocity and proper time satisfy $U=\dot X/\tau'$ with $\tau'=\sqrt{-\eta(\dot X,\dot X)}/c>0$, so $\eta(U,U)=-c^2$ and $\eta(U,\dot X)=-c^2\tau'$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]]).

[F3] **Compact-interval calculus.** Continuous real functions on a nondegenerate compact interval attain extrema ([[thm-extreme-value-metric]]) and are Riemann integrable ([[thm-continuous-implies-integrable]]); differentiation under the integral sign holds on a compact parameter rectangle with continuous integrands and continuous parameter derivatives ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]); the positive-base power derivative and its agreement with the square root, the product/chain rules and the FTC are available ([[thm-real-power-continuity-and-derivatives]], [[thm-real-power-agrees-with-rational-exponent]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]]).

[F4] **Integration and localization.** Integration by parts on $[a,b]$ for $C^1$ data, monotonicity and additivity of the integral, and the one-dimensional ZF cutoff construction ([[thm-integration-by-parts]], [[thm-monotonicity-of-the-integral]], [[thm-additivity-over-subintervals]], [[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] **Euclidean Cauchy-Schwarz.** For real finite vectors $v,w$, $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). Applying it to $v$ and $(-w^0,w^1,w^2,w^3)$ gives $|\eta(v,w)|\le\|v\|_2\|w\|_2$, since the sign flip preserves the Euclidean norm.




## Proof

**Proof technique:** direct.

1.1 Fix an inertial coordinate frame; the continuous function $s\mapsto-\eta(\dot X,\dot X)$ is strictly positive on the compact $[a,b]$ and attains a positive minimum $m_0>0$ by [F3], and $\dot X^0$ likewise has a positive minimum by future directedness [F1]; the variation $h$ and its derivative are bounded on $[a,b]$ with bounds $H_1,H_2$, and the compact image of $X$ lies in the open domain of $A_\mu$ with a positive Lebesgue number for a finite coordinate-ball cover. [given, F1, F3, algebra]

2.1 Put $M:=\max_{[a,b]}\|\dot X\|_2$ and $H:=\max_{[a,b]}\|\dot h\|_2$, both finite. Since the diagonal metric has entries of modulus one, the estimate of [F5], $|\eta(v,w)|\le\|v\|_2\|w\|_2$ gives $-\eta(\dot X+\varepsilon\dot h,\dot X+\varepsilon\dot h)\ge m_0-2|\varepsilon|MH-\varepsilon^2H^2$. Choose $\varepsilon_0>0$ so that $2\varepsilon_0MH+\varepsilon_0^2H^2<m_0/2$ and $\varepsilon_0H<\frac12\min_{[a,b]}\dot X^0$ (when $H=0$ these restrictions are automatic). Then for $|\varepsilon|<\varepsilon_0$ the squared timelike margin is at least $m_0/2$ and the time component is positive. Thus $X+\varepsilon h$ is again a $C^2$ future timelike curve with the same endpoints; shrinking $\varepsilon_0$ further using the boundedness of $h$ and the compact image's positive distance from the complement of the potential domain keeps every $X+\varepsilon h$ inside that neighbourhood. [step 1.1, given, F1, F3, F5, algebra]

3.1 With the parameter rectangle $[a,b]\times(-\varepsilon_0,\varepsilon_0)$ the integrands of $S$ and their $\varepsilon$-derivatives are continuous and the square-root argument is bounded away from zero by step 2.1, so [F3] applies and the first variation is $\delta S=-mc\int_a^b\frac{-\eta(\dot h,\dot X)}{\sqrt{-\eta(\dot X,\dot X)}}ds+q\int_a^b\bigl[(\partial_\nu A_\mu)(X)h^\nu\dot X^\mu+A_\nu(X)\dot h^\nu\bigr]ds$; by [F2] the first integrand is $mU_\nu\dot h^\nu$. [step 2.1, F2, F3, algebra]

4.1 Integration by parts [F4] with $h(a)=h(b)=0$ gives $\int_a^b mU_\nu\dot h^\nu ds=-\int_a^bm\frac{dU_\nu}{ds}h^\nu ds$ and $\int_a^bA_\nu(X)\dot h^\nu ds=-\int_a^b(\partial_\mu A_\nu)(X)\dot X^\mu h^\nu ds$, since all factors are $C^1$ on $[a,b]$; hence $\delta S=\int_a^bC_\nu(s)h^\nu(s)ds$ with $C_\nu=-m\frac{dU_\nu}{ds}+q(\partial_\nu A_\mu-\partial_\mu A_\nu)(X)\dot X^\mu=-m\frac{dU_\nu}{ds}+qF_{\nu\mu}\dot X^\mu$, a continuous coefficient on $[a,b]$. [step 3.1, F3, F4, algebra]

5.1 Choice-free coefficient vanishing: if $C_\nu(s_0)\ne0$ at some interior point, choose the sign $\sigma\in\{-1,1\}$ with $\sigma C_\nu(s_0)>0$ and a small open interval $J\subset(a,b)$ on which $\sigma C_\nu\ge d>0$, then a nondegenerate closed subinterval $K\subset J$; the one-dimensional ZF cutoff [F4] gives $\zeta\in C_c^\infty(J)$ with $0\le\zeta\le1$ and $\zeta=1$ near $K$, and $h^\nu:=\sigma\zeta$ (other components zero) is an admitted fixed-endpoint $C^2$ variation, for which monotonicity and additivity [F4] give $\delta S=\int\sigma C_\nu\zeta\,ds\ge d\,\mathrm{length}(K)>0$, contradicting stationarity. [step 4.1, F4, algebra]

6.1 Hence $C_\nu=0$ on $(a,b)$ and, by continuity, on $[a,b]$; conversely $C_\nu\equiv0$ makes the first variation $\delta S=\int C_\nu h^\nu ds$ vanish for every fixed-endpoint $C^2$ variation, so stationarity is indeed equivalent to $C_\nu\equiv0$. [step 5.1, algebra]

7.1 Dividing $m\frac{dU_\nu}{ds}=qF_{\nu\mu}\dot X^\mu$ by the positive factor $\tau'=d\tau/ds=\sqrt{-\eta(\dot X,\dot X)}/c$ of [F2] and using $\dot X^\mu=\tau'U^\mu$ gives $m\frac{dU_\nu}{d\tau}=qF_{\nu\mu}U^\mu$; raising the index with the constant metric gives the equivalent vector form. The proof uses only finite choices, finite-interval Riemann calculus and the explicit ZF cutoff, and asserts no existence or coupling theory for singular particles and fields; adopting $S$ as a physical action is an additional model assumption. [step 6.1, F1, F2, F3, algebra] ∎
