---
id: lem-nrqm-kinematics-momentum-representation
aliases: [nrqm-kinematics-momentum-representation]
kind: lemma
domain: mathematics
title: "The momentum representation of the componentwise kinematics"
status: published
origin: session
dependency_level: 4
deps: [cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, def-weak-derivative-of-a-locally-integrable-function, lem-nrqm-composites-momentum-fourier-jacobian, lem-nrqm-kinematics-component-valued-wavefunction-identifications, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-differentiation-under-the-integral-sign, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-linear-change-of-variables-for-lebesgue-measure, thm-plancherel, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-nrqm-composites-momentum-fourier-jacobian: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 6, printed pages 22-25 (PDF pages 22-25): the Fourier transform as the momentum representation, the momentum-space wavefunction with the (2 pi hbar)^(-1/2) normalization and the position operator in the momentum representation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.1, printed pages 161-167 (PDF pages 173-179): the Fourier transform, its unitary extension and the momentum representation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.3.2-2.3.3, printed pages 27-31 (PDF pages 35-39): momentum-space amplitudes and the Gaussian packet's momentum distribution"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix $d\ge1$, $r\ge1$ and
$\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{d};\mathbb C^{r})$ with the
componentwise operators $Q_{j},P_{k}$ of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]], let $U$ be the
unitary of [[lem-nrqm-composites-momentum-fourier-jacobian]] clause (c), which
on Schwartz classes acts by
$$(U\psi)(p)=(2\pi\hbar)^{-d/2}\int_{\mathbb R^{d}}e^{-ip\cdot x/\hbar}\psi(x)\,dx,$$
and put $U^{(r)}:=\Psi_{0}\bigl(\bigoplus_{l}U\bigr)\Psi_{0}^{-1}$ with
$\Psi_{0}$ as in [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]].
Then:

(a) $U^{(r)}:L^{2}(\mathbb R^{d},dx;\mathbb C^{r})\to L^{2}(\mathbb R^{d},dp;\mathbb C^{r})$
is unitary; for $f=(f_{l})\in\mathcal S(\mathbb R^{d};\mathbb C^{r})$,
$$(U^{(r)}f)_{l}(p)=(2\pi\hbar)^{-d/2}\int_{\mathbb R^{d}}e^{-ip\cdot x/\hbar}f_{l}(x)\,dx \qquad(l=1,\dots,r),$$
$U^{(r)}f\in\mathcal S(\mathbb R^{d};\mathbb C^{r})$, and
$\int_{\mathbb R^{d}}\|U^{(r)}f(p)\|_{\mathbb C^{r}}^{2}\,dp
=\int_{\mathbb R^{d}}\|f(x)\|_{\mathbb C^{r}}^{2}\,dx$;

(b) $U^{(r)}D(P_{k})=D(M_{p_{k}})$, where $M_{p_{k}}g(p):=p_{k}g(p)$ on
$D(M_{p_{k}})=\{g\in L^{2}(dp;\mathbb C^{r}):p_{k}g\in L^{2}\}$, and
$$U^{(r)}P_{k}=M_{p_{k}}U^{(r)};$$
equivalently $(U^{(r)}P_{k}f)(p)=p_{k}(U^{(r)}f)(p)$ for every $f\in D(P_{k})$
and almost every $p$;

(c) for every $f\in\mathcal S(\mathbb R^{d};\mathbb C^{r})$ and every $j$,
$$U^{(r)}(Q_{j}f)(p)=i\hbar\,\frac{\partial}{\partial p_{j}}\bigl(U^{(r)}f\bigr)(p) \qquad(p\in\mathbb R^{d}),$$
and both sides are Schwartz classes; no identity of unbounded operators on the
full domain of $Q_{j}$ is asserted;

(d) for every $a\in\mathbb R^{d}$, with $T_{a}^{(r)}$ the componentwise
translation of [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clause (c),
$$U^{(r)}T_{a}^{(r)}U^{(r)-1}=M_{e^{-ia\cdot p/\hbar}},$$
the bounded multiplication operator by the unimodular function
$p\mapsto e^{-ia\cdot p/\hbar}$;

(e) under $\Psi_{0}$ the operator $U^{(r)}$ is the orthogonal sum
$\bigoplus_{l}U$; no physical identification of $U^{(r)}f$ with a measured
momentum distribution is made by this lemma.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $d,r\ge1$; $\hbar>0$; the scalar unitary $U$ and its componentwise version $U^{(r)}$; the operators $Q_{j},P_{k}$ and their scalar counterparts; a class $f=(f_{l})$; a vector $a\in\mathbb R^{d}$; indices $j,k$.

[F1] **The scalar momentum representation.** $U$ is a unitary $L^{2}(\mathbb R^{d},dx)\to L^{2}(\mathbb R^{d},dp)$ with the displayed Schwartz formula; $U=D_{\hbar}\mathcal F_{2}$ on Schwartz classes, where $D_{\hbar}g(p)=(2\pi\hbar)^{-d/2}g(p/(2\pi\hbar))$ is a surjective isometry of $L^{2}(\mathbb R^{d};\mathbb C)$ and $\mathcal F_{2}$ is the unitary Plancherel transform of [[thm-plancherel]]; and on Schwartz classes $U$ acts as the topological automorphism $D_{\hbar}\mathcal F_{2}$ ([[lem-nrqm-composites-momentum-fourier-jacobian]] clauses (a)-(c), [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F2] **Scalar domains, Fourier representation and translations.** $D(P_{k}^{(1)})=\{f:\xi_{k}\mathcal F_{2}f\in L^{2}\}$ and $\mathcal F_{2}(P_{k}^{(1)}f)(\xi)=2\pi\hbar\xi_{k}\mathcal F_{2}f(\xi)$; the scalar translations are unitary and satisfy $\mathcal F_{2}(T_{a}f)(\xi)=e^{-2\pi ia\cdot\xi}\mathcal F_{2}f(\xi)$ on $L^{1}\cap L^{2}$, hence on $L^{2}$ by density and continuity ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clauses (b),(c), [[def-fourier-transform-on-l-one-of-rn]]).

[F3] **Componentwise operators and identifications.** $\Psi_{0}$ is unitary and $Q_{j},P_{k}$ are its conjugates of the corresponding orthogonal sums; $\mathcal F_{2}^{(r)}$ is unitary with the componentwise multiplication representation of $P_{k}$; the componentwise translations are the conjugates of $\bigoplus_{l}T_{a}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a)-(c), [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clauses (a),(c)).

[F4] **Differentiation under the integral.** If for a parameter $p$ the integrand is differentiable with derivative dominated by an integrable function independent of the parameter, the derivative may be taken under the integral sign ([[thm-differentiation-under-the-integral-sign]]). Change of variables under a translation holds for integrable functions ([[thm-linear-change-of-variables-for-lebesgue-measure]]). Tonelli's theorem for nonnegative measurable integrands ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] **Dense extension of bounded identities.** If two bounded operators agree on a dense subspace, they agree everywhere ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

**Proof technique:** direct; reduce unitarity and the Schwartz formula to the scalar supplier through the orthogonal-sum identification, transport the momentum representation and its domain, differentiate the Schwartz transform under the integral for the core identity of position, and extend the translation conjugation by density.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Unitarity, Schwartz formula and Plancherel identity] By [F3] and [[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]] clause (c) the orthogonal sum $\bigoplus_{l}U$ is unitary, hence so is its conjugate $U^{(r)}$ by the unitary $\Psi_{0}$. On a Schwartz class $f=(f_{l})$ each component is a scalar Schwartz class, so [F1] gives $(U^{(r)}f)_{l}=Uf_{l}$ with the displayed integral formula and $Uf_{l}\in\mathcal S(\mathbb R^{d};\mathbb C)$; hence $U^{(r)}f\in\mathcal S(\mathbb R^{d};\mathbb C^{r})$. The Plancherel identity is the componentwise scalar identity of [F1], summed over $l$ (finite sum) and read with the componentwise norms. This proves (a) and (e). [F1, F3, algebra]

2.1 [Momentum domain and action] Let $f=(f_{l})\in H^{(r)}$. By [F2], for each $l$ one has $f_{l}\in D(P_{k}^{(1)})$ exactly when $\xi_{k}\mathcal F_{2}f_{l}\in L^{2}$, and then $\mathcal F_{2}(P_{k}^{(1)}f_{l})=2\pi\hbar\xi_{k}\mathcal F_{2}f_{l}$. Since $U=D_{\hbar}\mathcal F_{2}$ and $p_{k}D_{\hbar}h=D_{\hbar}(2\pi\hbar\xi_{k}h)$ pointwise for every $h\in L^{2}$ with $\xi_{k}h\in L^{2}$, one gets $p_{k}Uf_{l}=U(P_{k}^{(1)}f_{l})$ and, conversely, $p_{k}Uf_{l}\in L^{2}$ exactly when $\xi_{k}\mathcal F_{2}f_{l}\in L^{2}$ because $D_{\hbar}$ is an isometry; thus $UD(P_{k}^{(1)})=D(M_{p_{k}})$ and $UP_{k}^{(1)}=M_{p_{k}}U$. Assembling components through $\Psi_{0}$ [F3] gives $U^{(r)}D(P_{k})=D(M_{p_{k}})$ and $U^{(r)}P_{k}=M_{p_{k}}U^{(r)}$, which is (b). [step 1.1, F1, F2, F3, algebra]

2.2 [Position in the momentum representation] Let $f\in\mathcal S(\mathbb R^{d};\mathbb C^{r})$ and consider one component $f_{l}\in\mathcal S(\mathbb R^{d};\mathbb C)$. For fixed $x$, the $p_j$-derivative of $e^{-ip\cdot x/\hbar}f_l(x)$ is $(-i/\hbar)x_j e^{-ip\cdot x/\hbar}f_l(x)$. Its modulus is $|x_j f_l(x)|/\hbar$, an integrable bound independent of $p$ because $f_l$ is Schwartz; [F4] therefore permits differentiation under the integral, giving $\frac{\partial}{\partial p_{j}}(Uf_{l})(p) =(2\pi\hbar)^{-d/2}\int e^{-ip\cdot x/\hbar}\Bigl(-\frac{i}{\hbar}x_{j}\Bigr)f_{l}(x)\,dx =\Bigl(-\frac{i}{\hbar}\Bigr)\bigl(U(Q_{j}^{(1)}f_{l})\bigr)(p),$ that is $U(Q_{j}^{(1)}f_{l})=i\hbar\partial_{p_{j}}(Uf_{l})$. Since $Uf_{l}\in\mathcal S$ by [F1], its partial derivative is again Schwartz ([[def-schwartz-space-and-its-seminorms]]), and assembling components through [F3] proves (c). [step 1.1, F1, F3, F4, algebra]

3.1 [Translations] Let $f=(f_{l})$ be a Schwartz class and fix $a$. For each component, the substitution $y=x-a$ and [F4] give $(U T_{a}f_{l})(p)=(2\pi\hbar)^{-d/2}\int e^{-ip\cdot(x+a)/\hbar}f_{l}(x)\,dx =e^{-ia\cdot p/\hbar}(Uf_{l})(p)$, so $U^{(r)}T_{a}^{(r)}=M_{e^{-ia\cdot p/\hbar}}U^{(r)}$ on the dense Schwartz subspace of $H^{(r)}$; both sides are bounded operators (products of unitaries, a translation and a unimodular multiplier), so [F5] extends the identity to all of $H^{(r)}$ and $U^{(r)}T_{a}^{(r)}U^{(r)-1}=M_{e^{-ia\cdot p/\hbar}}$, which is (d). [step 1.1, F1, F3, F4, F5, algebra] ∎

## Remarks

- **What the momentum representative is.** $U^{(r)}f$ is a class in $L^{2}(\mathbb R^{d},dp;\mathbb C^{r})$ obtained from $f$ by the unitary transform of clause (a); the lemma makes no statement about measuring it, and the physical reading of $\|U^{(r)}f(p)\|^{2}dp$ as an outcome density is a separate consequence of the observable postulate, proved with the physics items of this page.
- **Core only for position.** Clause (c) is asserted on Schwartz classes, where both sides are ordinary functions; no claim is made that the mapping $g\mapsto i\hbar\partial_{p_{j}}g$ with its maximal $L^{2}$ domain is the unitary conjugate of the full position operator.
