---
id: ex-positive-type-gaussian-on-the-real-line
kind: example
title: The positive-type Gaussian on the real line and its cyclic model
status: published
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-additivity-of-the-nonnegative-lebesgue-integral, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-continuous-functions-are-borel-measurable, cor-differentiable-implies-continuous, cor-integral-over-a-null-set-vanishes, def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-continuous-function-of-positive-type, def-cyclic-vector-and-cyclic-unitary-representation, def-group, def-hilbert-space, def-integrable-real-and-complex-functions-and-their-integrals, def-linear-subspace, def-measurable-function-between-measurable-spaces, def-measure-preserving-transformation-and-system, def-metric-interior-closure-boundary, def-mixed-improper-integral, def-norm-and-normed-space, def-normed-subspace, def-product-topology, def-real-and-complex-inner-product-space, def-topological-group, lem-algebra-of-continuous-real-maps-on-a-space, lem-closed-subspace-of-a-banach-space-is-banach, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-diagonal-unitary-coefficients-have-positive-type, lem-real-line-is-a-metric-space, thm-algebra-of-continuous-functions, thm-algebra-of-derivatives, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-borel-sets-are-lebesgue-measurable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-chain-rule, thm-choice-implies-dependent-implies-countable-choice, thm-complex-exponential-addition-and-real-extension, thm-composition-of-continuous-functions, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-derivative-of-exponential, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, thm-exponential-limits-and-range, thm-ftc-second-part, thm-gaussian-integral, thm-integrals-are-invariant-under-measure-preserving-maps, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-under-dilations-and-reflections, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-metric-closure-characterisation, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, thm-reals-field, thm-sine-and-cosine-derivatives, thm-substitution-for-improper-integrals, thm-uniqueness-of-the-cyclic-gns-representation, thm-gns-construction-for-topological-groups]
axiom_audit: "Assume AC. AC implies Countable Choice, which is used by the L² Hilbert-space interface, the nonnegative improper-Riemann-to-Lebesgue conversion, and reflection invariance of Lebesgue measure. AC is also assumed by the canonical GNS construction and pointed cyclic uniqueness. The Gaussian derivative, finite-interval integration, and coefficient calculation are choice-free."
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
    - title: "Semyon Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications to PDEs"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.4, Proposition 11.14 and both proofs, printed pp.123–124; the Fourier convention is e^{-ixξ}"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T)"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
      locator: "Appendix C §C.4, Theorem C.4.10 and complete proof, printed pp.376–377"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.B, Construction 1.B.5 and Proposition 1.B.8, printed pp.27–29"
---

## Example

Assume the Axiom of Choice. Let $G=(\mathbb R,+)$ with its usual topology and
put
$$w(s):=\frac{e^{-s^2/4}}{2\sqrt\pi},\qquad \xi(s):=\sqrt{w(s)}=\frac{e^{-s^2/8}}{\sqrt{2\sqrt\pi}},\qquad \varphi(t):=e^{-t^2}.$$
On complex $L^2(\mathbb R,ds)$ define
$$\bigl(\pi(t)f\bigr)(s):=e^{its}f(s),\qquad H_0:=\overline{\operatorname{span}_{\mathbb C}\{\pi(t)\xi:t\in\mathbb R\}}.$$
Then $\xi\in H_0$ has norm one, $H_0$ is a cyclic invariant Hilbert subspace,
and $\pi|_{H_0}$ is a strongly continuous unitary representation with
$$\varphi(t)=\langle\pi(t)\xi,\xi\rangle\quad(t\in\mathbb R).$$
Consequently $\varphi$ is normalized positive type and this pointed cyclic
representation is unitarily equivalent to its canonical GNS representation.

## Facts & Assumptions

**Given:** AC, the additive real group with its usual topology, and the functions
$w,\xi,\varphi$ displayed above.

[A1] AC implies Countable Choice; the L² Hilbert-space theorem, the half-line
improper-integral comparison, and the reflection-invariance theorem assume
Countable Choice ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]],
[[thm-lebesgue-measure-under-dilations-and-reflections]]).

[A2] The Gaussian improper integral is $\sqrt\pi$; substitution applies to
monotone differentiable maps on improper intervals; a mixed improper integral
splits at its finite interior point
([[thm-gaussian-integral]], [[thm-substitution-for-improper-integrals]],
[[def-mixed-improper-integral]]).

[A3] A nonnegative locally Riemann-integrable function with finite improper
integral on a half-line has the same finite Lebesgue integral there; reflection
preserves Lebesgue measure and hence nonnegative integrals. A singleton has
Lebesgue measure zero, and the integral of a nonnegative measurable function
over a null set is zero
([[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]],
[[thm-lebesgue-measure-under-dilations-and-reflections]],
[[def-measure-preserving-transformation-and-system]],
[[def-measurable-function-between-measurable-spaces]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[cor-integral-over-a-null-set-vanishes]],
[[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[A4] The complex $L^2$ quotient is a Hilbert space under
$\langle f,g\rangle=\int f\overline g$, linear in the first variable; a
closed linear subspace inherits a Hilbert-space structure
([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-real-and-complex-inner-product-space]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[def-hilbert-space]], [[def-linear-subspace]], [[def-normed-subspace]],
[[def-norm-and-normed-space]],
[[lem-closed-subspace-of-a-banach-space-is-banach]],
[[def-metric-interior-closure-boundary]],
[[thm-metric-closure-characterisation]]).

[A5] The real exponential and sine and cosine are differentiable with their
usual derivatives; the chain, product, and second-FTC rules apply, and
$e^{-R^2/4}\to0$ as $R\to+\infty$
([[thm-derivative-of-exponential]], [[thm-sine-and-cosine-derivatives]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]],
[[thm-ftc-second-part]], [[thm-exponential-limits-and-range]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A6] Differentiation under the integral sign applies under a measurable
integrable majorant, and dominated convergence applies to complex-valued
integrands; the complex $L^2$ pairing uses the first-variable-linear
convention ([[thm-differentiation-under-the-integral-sign]],
[[thm-dominated-convergence]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]],
[[def-complex-lp-and-euclidean-test-function-conventions]]).

[A7] The complex exponential satisfies its addition law, Euler's identity and
$|e^{iu}|=1$ for real $u$; its real-parameter phase is continuous. Continuous
real and complex functions are Borel measurable, and Borel sets are Lebesgue
measurable under Countable Choice
([[thm-complex-exponential-addition-and-real-extension]],
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
[[cor-differentiable-implies-continuous]],
[[thm-algebra-of-continuous-functions]],
[[thm-composition-of-continuous-functions]],
[[lem-algebra-of-continuous-real-maps-on-a-space]],
[[lem-real-line-is-a-metric-space]], [[def-product-topology]],
[[def-group]], [[thm-reals-field]], [[def-topological-group]],
[[cor-continuous-functions-are-borel-measurable]],
[[thm-borel-sets-are-lebesgue-measurable]],
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[A8] For a strongly continuous unitary representation, each diagonal
coefficient is continuous positive type; a cyclic pointed representation with
that coefficient is uniquely unitarily equivalent to the canonical GNS
representation ([[def-continuous-function-of-positive-type]],
[[def-cyclic-vector-and-cyclic-unitary-representation]],
[[def-topological-group]],
[[thm-gns-construction-for-topological-groups]],
[[thm-uniqueness-of-the-cyclic-gns-representation]],
[[lem-diagonal-unitary-coefficients-have-positive-type]]).

## Proof

**Proof technique:** direct.

1.1 The additive real field gives the group laws for $(\mathbb R,+)$, and addition and negation are continuous by the algebra of continuous real maps on a metric space, so $G$ is a topological group. [A7]

1.2 Let $h_0(s)=e^{-s^2/4}$; evenness, reflection of the negative improper tail, and the mixed-integral convention give $\int_0^\infty e^{-x^2}\,dx=\sqrt\pi/2$, so the substitution $s=2x$ yields $\int_0^\infty h_0(s)\,ds=\sqrt\pi$. [A2]

1.3 For $R>0$, FTC gives $\int_0^R s e^{-s^2/4}\,ds=2(1-e^{-R^2/4})$, whose limit is $2$; both $h_0$ and $h_1(s):=|s|e^{-s^2/4}$ are continuous and nonnegative on $[0,\infty)$, and their half-line improper integrals are respectively $\sqrt\pi$ and $2$. [A5]

1.4 For fixed $t$, $q_t(s):=e^{-s^2/4}e^{its}$ has derivative $q_t'(s)=(-s/2+it)q_t(s)$ by Euler's identity and the real product and chain rules; its continuous components are integrable on $[-n,n]$, and their Riemann and Lebesgue integrals agree, so componentwise FTC gives $q_t(n)-q_t(-n)=\int_{-n}^n(-s/2+it)q_t(s)\,ds$. [A5, A7]

1.5 The formula $|e^{its}|=1$ makes multiplication by $e^{its}$ a well-defined complex-linear isometry on $L^2(\mathbb R)$; the exponential addition law gives $\pi(t+u)=\pi(t)\pi(u)$ and $\pi(-t)$ is its inverse, so $\pi$ is a unitary representation. [A4, A7]

1.6 For $f\in L^2$ and $t_n\to t$, the squared orbit difference has integrand $|e^{it_ns}-e^{its}|^2|f(s)|^2$, which converges pointwise to zero and is bounded by $4|f(s)|^2$; dominated convergence gives $\|\pi(t_n)f-\pi(t)f\|_2\to0$, hence $\pi$ is strongly continuous because $\mathbb R$ is metrizable. [A4, A6, A7]

1.7 The algebraic orbit span is linear, and its norm closure $H_0$ is a closed linear subspace: for $x,y$ in the closure, the metric-closure criterion approximates them by span elements within $\varepsilon/3$, whose sum is within $2\varepsilon/3$ of $x+y$; scalar multiples follow from norm homogeneity. Thus [A4] and the closed-subspace completeness theorem make $H_0$ a Hilbert space. The group law sends each orbit vector to another orbit vector, and continuity of $\pi(u)$ and its inverse shows $\pi(u)H_0=H_0$; by construction $\xi\in H_0$ is cyclic. [A4, A8]

2.1 The half-line comparison turns the values in steps 1.2 and 1.3 into Lebesgue integrals; for either even function $h\in\{h_0,h_1\}$, splitting into positive and negative open half-lines and the null singleton gives $\int_{\mathbb R}h=2\int_{(0,\infty)}h$ by reflection invariance and integral additivity. Thus $\int_{\mathbb R}w=1$ and $\int_{\mathbb R}|s|w(s)\,ds=2/\sqrt\pi<\infty$. [A1, A3, step 1.2, step 1.3]

3.1 The functions $s\mapsto e^{its}w(s)$ are measurable and have modulus $w(s)$, so they are integrable; for each fixed $s$, differentiation in $t$ gives $\partial_t(e^{its}w(s))=is e^{its}w(s)$, whose modulus is bounded by the integrable majorant $|s|w(s)$. Hence differentiation under the integral sign gives $F'(t)=i\int_{\mathbb R}s e^{its}w(s)\,ds$ for $F(t):=\int_{\mathbb R}e^{its}w(s)\,ds$. [A5, A6, A7, step 2.1]

3.2 The boundary terms in step 1.4 tend to zero, and dominated convergence passes the truncated integrals to their full-line integrals because $|q_t|=e^{-s^2/4}$ and $|s q_t|=|s|e^{-s^2/4}$ are integrable by step 2.1; therefore $\int s q_t(s)\,ds=2it\int q_t(s)\,ds$, or $\int s e^{its}w(s)\,ds=2itF(t)$. [A6, A7, step 2.1, step 1.4]

4.1 Steps 3.1 and 3.2 give $F'(t)=-2tF(t)$, while step 2.1 gives $F(0)=1$; the product and chain rules show $(e^{t^2}F(t))'=0$, so applying the real FTC to each component on every compact interval yields $F(t)=e^{-t^2}$ for all $t\in\mathbb R$. [A5, step 2.1, step 3.1, step 3.2]

5.1 The norm identity $\|\xi\|_2^2=\int w=1$ holds, and the first-linear $L^2$ pairing gives $\langle\pi(t)\xi,\xi\rangle=\int e^{its}w(s)\,ds=F(t)=e^{-t^2}$ by step 4.1; [A8] now gives normalized positive type and identifies $(\pi|_{H_0},H_0,\xi)$ with the canonical GNS triple. [A4, A8, step 2.1, step 4.1, step 1.5, step 1.6, step 1.7]

6.1 AC is propagated through Countable Choice exactly for the L² and measure-theoretic suppliers in [A1] and [A3], and is used directly by the canonical GNS construction and pointed uniqueness in [A8]; the Gaussian integral calculation and the phase representation use no further choice. [A1, A3, A8] ∎
