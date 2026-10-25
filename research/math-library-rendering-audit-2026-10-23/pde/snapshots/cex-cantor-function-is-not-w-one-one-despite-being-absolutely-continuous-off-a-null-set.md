---
id: cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set
kind: counterexample
title: Cantor function has singular distributional derivative
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-cantor-set
  - thm-cantor-set-properties
  - thm-induction-principle
  - def-cantor-function
  - thm-cantor-function-properties
  - cor-cantor-function-is-continuous
  - cor-cantor-set-is-an-uncountable-lebesgue-null-set
  - def-cantor-measure
  - thm-existence-of-the-lebesgue-stieltjes-measure
  - prop-cantor-measure-is-a-singular-atomless-probability-measure
  - thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures
  - thm-open-subsets-of-r-structure
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - lem-weak-derivative-linearity-locality-and-commutation
  - lem-weak-derivatives-are-unique-almost-everywhere
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-riemann-stieltjes-c1-integrator-reduction
  - thm-riemann-stieltjes-existence-continuous-bv
  - def-bounded-variation-and-total-variation
  - lem-finite-sum-laws
  - thm-continuous-implies-integrable
  - thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral
  - thm-ftc-second-part
  - lem-test-function-cutoffs-and-euclidean-localization
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-distribution
  - def-distributional-derivative
  - def-locally-integrable-function-as-a-regular-distribution
  - def-test-function-topology
  - def-fixed-support-test-function-frechet-space
  - def-absolutely-continuous-function
  - cor-archimedean-reciprocal
  - def-complete-ordered-field
  - lem-of-naturals-positive
  - lem-of-inverse-positive
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 2 §2.6
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Example 2.35(2), Theorem 2.36 (Nikodym, ACL characterization), and Remark 2.37(2), printed pp. 55–56. Example 2.35(2) uses the endpoint change and zero a.e. classical derivative in the fundamental theorem of calculus characterization to rule out absolute continuity. Theorem 2.36 and Remark 2.37(2) state the Sobolev representative criterion on almost every coordinate line and, in dimension one, compact subintervals.
    - title: John K. Hunter, Notes on Partial Differential Equations, Appendix on one-dimensional weak and distributional derivatives
      url: https://www.math.ucdavis.edu/~hunter/m218a_09/ch3A.pdf
      locator: Example 3.88, printed p. 83, and Theorem 3.94, printed p. 86. The example gives the Cantor measure's support and singularity; the theorem identifies the distributional derivative of a BV function with its Lebesgue–Stieltjes measure through integration by parts.
---

## Statement

Assume the Axiom of Choice. Let $C\subseteq[0,1]$ be the middle-thirds Cantor set, let $c:[0,1]\to[0,1]$ be the Cantor staircase, and let $\mu_c$ be its Cantor measure. Then $C$ is null, and $c$ is constant on the closure of every complementary interval of $C$, hence absolutely continuous there with classical derivative zero off $C$. On $(0,1)$ the distributional derivative of $c$ is the restriction of $\mu_c$, a nonzero singular measure with $\mu_c((0,1))=1$. In particular,

$$c\notin W^{1,1}((0,1)).$$

The phrase “absolutely continuous off a null set” here means absolutely continuous on each complementary interval separately; it does not assert absolute continuity across the Cantor set.

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Example 2.35(2), Theorem 2.36 (Nikodym, ACL characterization), and Remark 2.37(2), printed pp. 55–56. Example 2.35(2) uses the Cantor staircase's endpoint change and zero a.e. derivative in the fundamental theorem of calculus characterization to rule out absolute continuity. Theorem 2.36 and Remark 2.37(2) give the one-dimensional Sobolev representative criterion: after an a.e. redefinition, the representative is absolutely continuous on compact subintervals and its classical derivative agrees a.e. with its weak derivative. These are corroborating statements; the proof below independently identifies the distributional derivative.
- John K. Hunter, *Notes on Partial Differential Equations*, Appendix, Example 3.88, printed p. 83, and Theorem 3.94, printed p. 86. Example 3.88 states that the Lebesgue–Stieltjes measure of the Cantor function has mass one on $C$ and zero on its complement. Theorem 3.94 gives the integration-by-parts identity that identifies this measure as the distributional derivative.

## Facts & Assumptions

**Given:** AC, the Cantor set $C$, its Cantor function $c$, and the Cantor measure $\mu_c$.

[F1] AC implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]): given any sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets, AC gives a choice function on its range, and composition with $n\mapsto X_n$ gives a selector for the sequence. This discharges the explicit CC assumptions in [F5] (Cantor nullity), [F6] (Cantor measure), [F9] ($W^{1,1}$ membership), [F10] (weak-derivative restriction and uniqueness), and [F13] (Riemann–Stieltjes/Lebesgue–Stieltjes agreement). In [F18] only the choice-free regular-distribution pairing is used, not its CC-dependent injectivity theorem. No further choice principle is used.

[F2] The middle-thirds Cantor set and Cantor staircase are the objects defined in [[def-cantor-set]] and [[def-cantor-function]].

[F3] The Cantor function is nondecreasing with $c(0)=0$ and $c(1)=1$, and it is constant on $[a,b]$ whenever $a<b$ lie in $C$ and $(a,b)\cap C=\varnothing$; every point outside $C$ lies in one such gap ([[thm-cantor-function-properties]]).

[F22] The Cantor set $C$ is closed ([[thm-cantor-set-properties]]).

[F23] The recursion defining $C_n$ starts at $C_0=[0,1]$ and satisfies $C_{n+1}=\tfrac13C_n\cup(\tfrac23+\tfrac13C_n)$; induction shows $0,1\in C_n$ for every $n$, hence $0,1\in C=\bigcap_n C_n$ ([[def-cantor-set]], [[thm-induction-principle]]).

[F4] The Cantor function is continuous on $[0,1]$ ([[cor-cantor-function-is-continuous]]).

[F5] Assuming Countable Choice, $C$ is Lebesgue measurable with $\lambda(C)=0$ ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[F6] Under Countable Choice, $\mu_c$ is the Lebesgue–Stieltjes measure of the continuous nondecreasing extension $F_c$ of $c$ to $\mathbb R$; it is a probability measure, has no atoms, is concentrated on $C$, and is singular with respect to Lebesgue measure ([[def-cantor-measure]], [[thm-existence-of-the-lebesgue-stieltjes-measure]], [[prop-cantor-measure-is-a-singular-atomless-probability-measure]]).

[F7] For the Cantor measure, $\mu_c((a,b))=F_c(b^-)-F_c(a)$; applying this interval formula at $a=0,b=1$ and using [F3]–[F4] gives $\mu_c((0,1))=1$ ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]).

[F8] Every open subset of $\mathbb R$ is the union of an at most countable pairwise disjoint family of open interval components ([[thm-open-subsets-of-r-structure]]).

[F9] Membership in $W^{1,1}(0,1)$ supplies an $L^1$ weak derivative satisfying $\int c\,\varphi'=-\int g\varphi$ for every test $\varphi\in C_c^\infty(0,1)$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F10] Weak derivatives restrict to open subdomains, and a locally integrable weak derivative is unique almost everywhere ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F11] The continuous function $c$ is Riemann integrable, and for it as integrand and a $C^1$ integrator $\varphi$, $\int_0^1 c\,d\varphi=\int_0^1 c(x)\varphi'(x)\,dx$ ([[cor-cantor-function-is-continuous]], [[thm-continuous-implies-integrable]], [[thm-riemann-stieltjes-c1-integrator-reduction]]).

[F12] Since $c$ is nondecreasing, its increments on every partition of $[0,1]$ are nonnegative and their finite telescoping sum is $c(1)-c(0)=1$; hence $c$ has bounded variation by definition. A continuous integrand against a bounded-variation integrator has a Riemann–Stieltjes integral ([[thm-cantor-function-properties]], [[def-bounded-variation-and-total-variation]], [[lem-finite-sum-laws]], [[thm-riemann-stieltjes-existence-continuous-bv]]).

[F13] For continuous $\varphi$ and the nondecreasing right-continuous function $F_c$, $\int_0^1\varphi\,dF_c=\int_{(0,1]}\varphi\,d\mu_c$ ([[thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral]]).

[F14] A nonnegative integral is monotone and agrees with the simple integral on indicators ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F15] Measures are countably subadditive ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F16] A compact subset of an open set admits a smooth compactly supported cutoff $\chi$ with $0\le\chi\le1$ and $\chi=1$ near that subset ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F17] A constant function on a compact interval is absolutely continuous by the defining finite-disjoint-interval condition ([[def-absolutely-continuous-function]]).

[F18] The regular distribution of $c\in L^1_{\mathrm{loc}}$ is $T_c(\varphi)=\int c\varphi$, and its distributional derivative satisfies $\langle\partial T_c,\varphi\rangle=-\int c\varphi'$ ([[def-locally-integrable-function-as-a-regular-distribution]], [[def-distribution]], [[def-distributional-derivative]]).

[F19] By [F6], the Cantor measure is a finite Borel probability measure. For tests supported in a fixed compact $K\subset(0,1)$, integration against it is complex-linear and obeys
$$\left|\int\varphi\,d\mu_c\right|\le \int|\varphi|\,d\mu_c\le \mu_c(K)\lVert\varphi\rVert_\infty.$$
The supremum seminorm is continuous on each fixed-support test-function space, hence belongs to the test-function topology; this bound makes integration a distribution ([[def-test-function-topology]], [[def-fixed-support-test-function-frechet-space]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F20] For every $\delta>0$, the reciprocal-form Archimedean corollary gives $n\ge1$ with $1/n<\delta$; its threshold consequence says $1/m\le1/n<\delta$ for each $m\ge n$. Thus some $m\ge3$ also satisfies $1/m<\delta$, by taking $m=\max\{n,3\}$ ([[def-complete-ordered-field]], [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[F21] If $\psi$ is continuously differentiable on a compact interval $[a,b]$, then $\int_a^b\psi'=\psi(b)-\psi(a)$ ([[thm-ftc-second-part]]).

## Counterexample

**Proof technique:** direct calculation and contradiction.

1.1 Let $(X_n)_{n\in\mathbb N}$ be any sequence of nonempty sets. By AC, [F1], the range $\{X_n:n\in\mathbb N\}$ has a choice function $s$; then $n\mapsto s(X_n)$ selects from every $X_n$, proving Countable Choice. this discharges precisely the CC assumptions in [F5] (Cantor nullity), [F6] (the Cantor measure and its properties), [F10] (weak-derivative locality/uniqueness), and [F13] (Riemann–Stieltjes/Lebesgue–Stieltjes agreement). The Cantor staircase is a real continuous nondecreasing function on $[0,1]$, with endpoint values $0$ and $1$, and is constant on every closed gap $[a,b]$ of $C$ by [F2]–[F4]. Apart from invoking AC for this reduction, no further family of choices is made; each later CC use is through a named interface. [F1, F2, F3, F4, F5, F6, F10, F13]

1.2 Put $U=(0,1)\setminus C$. It is open because $C$ is closed by [F22] and $(0,1)$ is open, so [F8] writes it as at most countably many disjoint intervals $J=(a,b)$. Every endpoint lies in $[0,1]$. The endpoints $0$ and $1$ belong to $C$ by [F23]; if an endpoint in $(0,1)$ were outside $C$, closedness would put it in the open set $U$, and a neighborhood would enlarge the component, contradicting maximality. Thus $a,b\in C$ and $(a,b)\cap C=\varnothing$. By [F3], $c$ is constant on $[a,b]$; by [F17] its restriction is absolutely continuous, and its classical derivative is $0$ throughout $J$. Meanwhile $C$ is null by [F5]. [F3, F5, F8, F17, F22, F23]

1.3 Let $\varphi\in C_c^\infty(0,1)$ be real-valued and extend it by zero to $[0,1]$. Then $\varphi(0)=\varphi(1)=0$. For a partition $0=t_0<\cdots<t_N=1$, the telescoping product identity is $$\varphi(1)c(1)-\varphi(0)c(0)=\sum_{i=1}^N\varphi(t_i)\bigl(c(t_i)-c(t_{i-1})\bigr)+\sum_{i=1}^Nc(t_{i-1})\bigl(\varphi(t_i)-\varphi(t_{i-1})\bigr).$$ The first sum uses right-endpoint tags for $\int_0^1\varphi\,dc$, which exists by [F12]; the second uses left-endpoint tags for $\int_0^1c\,d\varphi$, which exists by [F11]. As the mesh tends to zero, each sum converges to its Riemann–Stieltjes integral, so the zero boundary term gives $\int_0^1\varphi\,dc=-\int_0^1c\,d\varphi$. By [F11], the right side is $-\int_0^1c(x)\varphi'(x)\,dx$. The agreement in [F13] identifies the left side with $\int_{(0,1]}\varphi\,d\mu_c$; since $\varphi$ is supported inside $(0,1)$, this equals $\int_{\mathbb R}\varphi\,d\mu_c$. Thus $$\int_{\mathbb R}\varphi\,d\mu_c=-\int_0^1c(x)\varphi'(x)\,dx=\langle\partial T_c,\varphi\rangle.$$ For a complex test, apply the real identity separately to its real and imaginary parts; complex linearity of the distribution pairing and the measure integral then gives the same identity. The order-zero estimate in [F19] makes $\varphi\mapsto\int\varphi\,d\mu_c$ a distribution on $(0,1)$. Hence $\partial T_c$ is exactly the distribution induced by $\mu_c|_{(0,1)}$. Since [F6] makes $\mu_c$ singular and concentrated on the null set $C$, and [F7] gives $\mu_c((0,1))=1$, this restricted measure is singular and nonzero. [F6, F7, F11, F12, F13, F18, F19]

2.1 Suppose $c\in W^{1,1}(0,1)$ and let $g\in L^1(0,1)$ be its weak derivative, as supplied by [F9]. For each component interval $J$ of $U$, the constant function $0$ is a weak derivative of $c|_J$: for every $\psi\in C_c^\infty(J)$ choose $[a,b]\subset J$ containing its support. By [F21], $\int_J\psi'=\int_a^b\psi'=\psi(b)-\psi(a)=0$, and constancy of $c$ on $J$ gives $\int_Jc\psi'=0$. By [F10], $g=0$ almost everywhere on each $J$. The exceptional sets on these countably many intervals have null union by [F15]; [F5] makes the remaining Cantor set null too. Therefore $g=0$ almost everywhere on $(0,1)$. [F5, F8, F9, F10, F15, F21, step 1.2]

3.1 The compact intervals $K_m=[1/m,1-1/m]$, $m\ge3$, cover $(0,1)$: for each $x\in(0,1)$, [F20] gives an $m$ with $1/m<\min\{x,1-x\}$. Since $\mu_c((0,1))=1$ by [F7], [F15] implies $\mu_c(K_m)>0$ for at least one $m$. Fix one such $m$. The cutoff fact [F16] gives $\chi\in C_c^\infty(0,1)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K_m$. By [F14], $$\int\chi\,d\mu_c\ge\int\mathbf1_{K_m}\,d\mu_c=\mu_c(K_m)>0.$$ But the weak-derivative identity and step 2.1 give $-\int_0^1c\chi'=\int_0^1g\chi=0$, contradicting step 1.3, which identifies the left side with $\int\chi\,d\mu_c>0$. So $c\notin W^{1,1}(0,1)$. [F7, F9, F14, F15, F16, F20, step 1.3, step 2.1]

4.1 Steps 1.1–1.2 show absolute continuity on every complementary gap away from the null Cantor set, while steps 1.3, 2.1, and 3.1 show that the distributional derivative is the nonzero singular Cantor measure and that no $L^1$ weak derivative exists. This is the claimed counterexample. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
