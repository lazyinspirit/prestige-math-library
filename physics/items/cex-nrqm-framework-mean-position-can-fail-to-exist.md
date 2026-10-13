---
id: cex-nrqm-framework-mean-position-can-fail-to-exist
kind: counterexample
title: "The mean position of a normalized state need not exist"
status: draft
origin: session
domain: physics
dependency_level: 7
deps:
  [
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    lem-nrqm-observables-l2-multiplication-spectral-measure,
    def-complex-lp-and-euclidean-test-function-conventions,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-improper-integral-at-infinity,
    thm-improper-p-test-rational,
    cor-primitives-of-a-continuous-function,
    lem-derivative-of-a-power,
    thm-monotone-convergence-for-the-integral,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
    thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral,
    thm-continuous-implies-integrable,
    thm-logarithm-derivative-and-integral,
    thm-natural-logarithm-laws,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  thm-improper-p-test-rational: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, on an explicit normalized state in the
  one-dimensional specialization of the P1 state assignment and P2
  position-probability rule, of the claim that every normalized preparation has
  a finite position mean. The displayed state has unit norm but neither a finite
  second moment nor a finite first absolute moment. The item defines the mean as
  the Lebesgue expectation and states its absolute-integrability condition; it
  asserts no measured value and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (PDF pages 67-70): the probability
        interpretation, expectation values and the moment conditions for
        position"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Section 1, printed pages 1-4: normalization of wave
        functions and the probability density"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: pass
---

## Statement refuted

Specialize P1 to a one-dimensional system with state space $H=L^{2}(\mathbb R;\mathbb C)$ and specialize P2 to the position observable $Q\psi=x\psi$, with outcome coordinate measured in metres. Its spectral projection for a Borel set $B\subseteq\mathbb R$ is multiplication by $\mathbf 1_B$, so a pure preparation $[\psi]$ has position law $\mu_{\psi}^{Q}(B)=\int_B|\psi(x)|^{2}\,dx$. Define its mean position to be the Lebesgue expectation $\mathbb E_{\mu_{\psi}^{Q}}[X]=\int_{\mathbb R}x\,d\mu_{\psi}^{Q}(x)$ when it is a finite real number; this is so exactly when $x\in L^{1}(\mu_{\psi}^{Q})$, equivalently $\int_{\mathbb R}|x|\,|\psi(x)|^{2}\,dx<\infty$. The refuted claim is that every normalized $\psi\in L^{2}(\mathbb R;\mathbb C)$ has such a finite mean.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). The one-dimensional instance of P1 with $H=L^{2}(\mathbb R;\mathbb C)$ and a normalized vector $\psi$; the P2 position observable $Q$ as multiplication by $x$, with the spectral PVM and law of [L6]; and the quantity conventions of [[def-nrqm-framework-quantities-and-units]].

[L1] Let $L_0>0$ be a length and define $\psi_{L_0}(x)=\frac1{2\sqrt{L_0}}$ for $|x|\le L_0$ and $\psi_{L_0}(x)=\frac{\sqrt{L_0}}{2|x|}$ for $|x|\ge L_0$. The formulas agree at $|x|=L_0$, and $[\psi_{L_0}]=\ell^{-1/2}$. It is measurable and represents an almost-everywhere class; its $L^2$ membership is established in step 1.1 using [L5] and monotone convergence. Its squared tail is $L_0/(4x^2)$, whose improper Riemann integral converges by the rational $p$-test ([[def-improper-integral-at-infinity]], [[thm-improper-p-test-rational]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] For $N>L_0$ the fundamental theorem and power rule give $\int_{L_0}^{N}x^{-2}\,dx=L_0^{-1}-N^{-1}$, $\int_{L_0}^{N}x^{-1}\,dx=\ln(N/L_0)$, and $\int_{L_0}^{N}1\,dx=N-L_0$; the improper integrals are the limits as $N\to\infty$ ([[cor-primitives-of-a-continuous-function]], [[lem-derivative-of-a-power]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[def-improper-integral-at-infinity]]).

[L3] Monotone convergence for the truncated absolute moments: $\int_{-N}^{N}|\psi|^{2}\to\int_{\mathbb R}|\psi|^{2}$ and $\int_{-N}^{N}|x||\psi|^{2}\to\int_{\mathbb R}|x||\psi|^{2}\in[0,+\infty]$ along the increasing sequence of sets $[-N,N]$, and similarly for the second moments ([[thm-monotone-convergence-for-the-integral]]).

[L4] Second moments and Cauchy-Schwarz: $\psi\in D(Q)$ means $\int_{\mathbb R}x^{2}|\psi(x)|^{2}\,dx<\infty$, and for a probability density with finite second moment the first absolute moment is finite by the Cauchy-Schwarz inequality applied to the probability measure $|\psi(x)|^{2}dx$ ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[L5] For each $N>L_0$, the three global integrands $|\psi_{L_0}|^2$, $|x||\psi_{L_0}|^2$ and $x^2|\psi_{L_0}|^2$ are real and continuous on $[-N,N]$, including at $x=\pm L_0$, because their defining formulas agree there. The tail functions $x^{-2}$, $x^{-1}$ and $1$ of [L2] are real and continuous on $[L_0,N]$, which excludes zero. Each of these restrictions is therefore bounded and Riemann integrable by [[thm-continuous-implies-integrable]]. Under the stated Countable Choice hypothesis, [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] identifies its finite-interval Riemann and Lebesgue integrals. Thus [L2] evaluates the truncated Lebesgue integrals used by [L3]; the tail notation $\int_{L_0}^\infty$ below denotes the monotone limit of these nonnegative Lebesgue integrals, including $+\infty$.

[L6] Choice is carried from P2 and is an explicit hypothesis of [[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (a)-(c). On the positive, $\sigma$-finite Lebesgue measure space $\mathbb R$, the measurable finite multiplier $m(x)=x$ satisfies that lemma's hypotheses. Under the stated Choice assumption ([[def-axiom-of-choice]]), it identifies the self-adjoint position operator $Q$ on $D(Q)=\{f:xf\in L^2\}$ and its spectral PVM $E_Q(B)=M_{\mathbf 1_B}$, with pure-state law $\mu_\psi^Q(B)=\|E_Q(B)\psi\|^2=\int_B|\psi|^2dx$ for every unit $\psi$. The explicit moment calculations require no additional arbitrary choice.

## Counterexample

**Proof technique:** direct; compute the norm, the second moment and the first absolute moment of the displayed state.

1.1 [Norm one] The squared modulus is $1/(4L_0)$ on $[-L_0,L_0]$ and $L_0/(4x^2)$ for $|x|\ge L_0$. Its integral is $2L_0/(4L_0)+2\int_{L_0}^{\infty}L_0/(4x^2)\,dx=\tfrac12+\tfrac{L_0}{2}\lim_{N\to\infty}(L_0^{-1}-N^{-1})=1$ by [L2] and [L3], so $\psi_{L_0}$ is a normalized state. [given, L1, L2, L3, L5, algebra]

1.2 [Second moment infinite] The second moment is $\int_{\mathbb R}x^{2}|\psi_{L_0}|^{2}\,dx=\frac{L_0^2}{6}+2\int_{L_0}^{\infty}x^{2}\cdot\frac{L_0}{4x^{2}}\,dx=\frac{L_0^2}{6}+\frac{L_0}{2}\lim_{N\to\infty}(N-L_0)=+\infty$ by [L2] and [L3]; equivalently $x\psi_{L_0}\notin L^{2}$ and $\psi_{L_0}\notin D(Q)$, although it is a normalized state. [given, L1, L2, L3, L5, algebra]

1.3 [First absolute moment infinite] The first absolute moment is $\int_{\mathbb R}|x|\,|\psi_{L_0}|^{2}\,dx=\frac{L_0}{4}+2\int_{L_0}^{\infty}x\cdot\frac{L_0}{4x^{2}}\,dx=\frac{L_0}{4}+\frac{L_0}{2}\lim_{N\to\infty}\ln(N/L_0)=+\infty$ by [L2] and [L3]. Both one-sided integrals diverge, so $x$ is not integrable for the probability measure $\mu_{\psi_{L_0}}^Q$ and its Lebesgue expectation is not a finite real mean. [given, L1, L2, L3, L5, algebra]

2.1 By steps 1.1-1.3 the P1 preparation $[\psi_{L_0}]$ is normalized and its P2 position law has infinite first absolute moment, so the refuted universal claim fails. By the definition in the Statement its mean exists exactly when $\int_{\mathbb R}|x|\,d\mu_{\psi_{L_0}}^Q(x)=\int_{\mathbb R}|x|\,|\psi_{L_0}(x)|^{2}\,dx<\infty$; and by [L4], the second-moment condition $\psi_{L_0}\in D(Q)$ implies this integrability by Cauchy-Schwarz. [step 1.1, step 1.2, step 1.3, L4, L6] ∎

## Remarks

- The example concerns the existence of a moment, not the definition of the preparation: the displayed $\psi$ is a legitimate normalized state, and statements about its position distribution are computed from $|\psi|^{2}dx$. What fails is only the claim that the first moment is automatically finite.
- Moments are not part of the probability postulate of the page; each mean, variance or higher moment of an outcome law is asserted only where its integrability has been established, exactly as the quantity conventions of the framework require.
