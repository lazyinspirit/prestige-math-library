---
id: thm-nrqmx-boost-translation-cocycle
kind: theorem
domain: mathematics
title: Mass cocycle for translations and boosts
status: draft
origin: pipeline
dependency_level: 1
deps:
  - thm-nrqmx-finite-weyl-uniqueness-interface
  - def-axiom-of-choice
  - def-countable-choice
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - lem-complex-conjugation-and-modulus-laws
  - def-strongly-continuous-unitary-representation
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-c-c-and-c-c-infinity-on-rn
  - thm-tdmath-dominated-convergence
dependency_roles:
  thm-nrqmx-finite-weyl-uniqueness-interface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  lem-schrodinger-weyl-system-is-regular-and-irreducible: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-c-c-and-c-c-infinity-on-rn: mathematical-premise
  thm-tdmath-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Domenico Giulini, On Galilei Invariance in Quantum Mechanics and the Bargmann Superselection Rule, §1, pp. 3–8
      url: https://arxiv.org/pdf/quant-ph/9508002
    - title: Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem, §4.3, pp. 5–10
      url: https://arxiv.org/pdf/0912.0574
    - title: Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes, Chapter VIII, pp. 43–47
      url: https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $d\ge1$, $m>0$, and $\hbar>0$ be real parameters, and let $\mathcal H=L^2(\mathbb R^d;\mathbb C)$ be the space of complex measurable functions with finite $\int |f|^2$ modulo equality almost everywhere, with inner product $\langle f,g\rangle=\int f\overline g$. For $a,v\in\mathbb R^d$, define the translation and modulation operators

$$T(a)f(x)=f(x-a),\qquad B_m(v)f(x)=e^{imv\cdot x/\hbar}f(x).$$

These are unitary operators and satisfy

$$B_m(v)T(a)=e^{imv\cdot a/\hbar}T(a)B_m(v),\qquad B_m(v)T(a)B_m(v)^*T(a)^*=e^{imv\cdot a/\hbar}I.$$

Writing $p=mv$, the associated Weyl operators are

$$W(a,p)f(x)=e^{ip\cdot(x-a/2)/\hbar}f(x-a).$$

They form the canonical regular system on $V=\mathbb R^d\oplus\mathbb R^d$ with $\omega((a,p),(a',p'))=a\cdot p'-p\cdot a'$ and parameter $\lambda=1/\hbar$, meaning $W(0)=I$ and $W(\xi)W(\eta)=e^{-i\omega(\xi,\eta)/(2\hbar)}W(\xi+\eta)$. This system is strongly continuous on every line and has no nonzero proper closed invariant subspace. Every map $\widetilde W:V\to U(K)$ on a nonzero complex Hilbert space $K$ with this same multiplication law, strong continuity on every line, and irreducibility is unitarily equivalent to it, meaning a unitary intertwiner exists.

Define $G_d=\mathbb R^d\times\mathbb R^d\times\mathbb R$ with the product Euclidean topology and multiplication

$$ (a,v,\theta)(a',v',\theta')=(a+a',v+v',\theta+\theta'-v'\cdot a). $$

Let $Z=\{(0,0,\theta):\theta\in\mathbb R\}$. The maps $\Pi_m(a,v,\theta)=e^{im\theta/\hbar}B_m(v)T(a)$ form a strongly continuous unitary representation of this topological group, and $Z$ acts by the scalar character $\chi_m(\theta)=e^{im\theta/\hbar}$. For every finite $r\ge1$ and pairwise distinct $m_1,\dots,m_r>0$, the direct sum of these representations has pairwise distinct central characters $\chi_{m_j}$. These are mathematical representation statements for formal parameters; no measured mass, action constant, or physical superselection law is asserted.

## Statement references

[[thm-nrqmx-finite-weyl-uniqueness-interface]]

[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[[thm-integrals-are-invariant-under-measure-preserving-maps]]

[[lem-complex-conjugation-and-modulus-laws]]

[[def-strongly-continuous-unitary-representation]]

[[lem-schrodinger-weyl-system-is-regular-and-irreducible]]

[[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]

[[lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p]]

[[def-complex-lp-and-euclidean-test-function-conventions]]

[[def-c-c-and-c-c-infinity-on-rn]]

[[thm-tdmath-dominated-convergence]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** AC and Countable Choice; $d\ge1$, $m>0$, $\hbar>0$; the complex $L^2$ space and its integral pairing; and $a,v\in\mathbb R^d$.

[A1] AC is the choice-function principle for every family of nonempty sets. [[def-axiom-of-choice]]

[A2] Countable Choice (AC$_\omega$) is the choice-function principle for every countable family of nonempty sets. [[def-countable-choice]]

[F1] Under AC$_\omega$, $L^2(\mu;\mathbb C)$ consists of almost-everywhere classes, has the pairing $\langle f,g\rangle=\int f\overline g$, and is a complex Hilbert space with $\|f\|_2^2=\int |f|^2$. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[F2] Translation $x\mapsto x-a$ preserves Lebesgue measurability and measure on $\mathbb R^d$. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F3] If a measurable map preserves a measure, then integrating a nonnegative measurable function after composition leaves its integral unchanged, including when the integral is infinite. [[thm-integrals-are-invariant-under-measure-preserving-maps]]

[F4] Complex modulus is multiplicative, $|zw|=|z||w|$, and $|e^{it}|=1$ for real $t$. [[lem-complex-conjugation-and-modulus-laws]]

[F5] A unitary representation of a topological group is a homomorphism into bijective complex-linear isometries whose orbit map is norm-continuous for every vector. [[def-strongly-continuous-unitary-representation]]

[F6] Under AC, every nonzero irreducible regular Weyl system on the same finite-dimensional phase space with the same nonzero parameter is unitarily equivalent to the displayed Schrödinger system. [[thm-nrqmx-finite-weyl-uniqueness-interface]]

[F7] Under Countable Choice, the displayed Schrödinger operators are strongly continuous and unitary, and their Weyl system is regular and irreducible. [[lem-schrodinger-weyl-system-is-regular-and-irreducible]]

[F8] Under Countable Choice, $C_c^\infty(\mathbb R^d;\mathbb C)$ is dense in complex $L^2(\mathbb R^d;\mathbb C)$. [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]

[F9] For real $g\in C_c(\mathbb R^d)$, $\|\tau_hg-g\|_2\to0$ as $h\to0$, where $(\tau_hg)(x)=g(x-h)$. [[lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p]]

[F10] Complex $C_c^\infty(\mathbb R^d;\mathbb C)$ is defined componentwise: both real and imaginary parts lie in real $C_c^\infty(\mathbb R^d)$. [[def-complex-lp-and-euclidean-test-function-conventions]]

[F11] Real $C_c^\infty(\mathbb R^d)$ is a subspace of real $C_c(\mathbb R^d)$. [[def-c-c-and-c-c-infinity-on-rn]]

[F12] If measurable functions converge pointwise and their absolute values are bounded by one integrable function, their integrals converge to the integral of the pointwise limit. [[thm-tdmath-dominated-convergence]]

## Proof

1.1 The two parenthesizations of a triple product in $G_d$ have the same central coordinate, since both give $\theta+\theta'+\theta''-v'\cdot a-v''\cdot a-v''\cdot a'$. The identity is $(0,0,0)$ and the inverse of $(a,v,\theta)$ is $(-a,-v,-\theta-v\cdot a)$. Multiplying by $(0,0,\eta)$ on either side adds $\eta$ to the central coordinate and leaves $(a,v)$ fixed, so $Z$ is central; the quotient forgets $\theta$ and is the additive group $\mathbb R^{2d}$. [given, algebra]

1.2 By [A2] and [F1], $\mathcal H=L^2(\mathbb R^d;\mathbb C)$ with the stated pairing is a complex Hilbert space, so the operator definitions act on the required Hilbert space. [given, A2, F1]

2.1 Translation is well-defined on almost-everywhere classes by [F2], and $\|T(a)f\|_2^2=\int |f(x-a)|^2dx=\int |f(x)|^2dx$ by [F3]. The map is linear with inverse $T(-a)$; hence it is unitary by [F5] and step 1.2. [F2, F3, F5, step 1.2, algebra]

2.2 The multiplier $e^{imv\cdot x/\hbar}$ is measurable and has modulus one by [F4], so $B_m(v)$ preserves the norm. It is linear with inverse $B_m(-v)$; hence it is unitary by [F5] and step 1.2. [F4, F5, step 1.2, algebra]

3.1 For almost every $x$, $(B_m(v)T(a)f)(x)=e^{imv\cdot x/\hbar}f(x-a)$ while $(T(a)B_m(v)f)(x)=e^{imv\cdot(x-a)/\hbar}f(x-a)$. Their ratio is the constant $e^{imv\cdot a/\hbar}$, proving the commutation identity. Multiplying it on the right by $B_m(v)^*T(a)^*$ gives the displayed loop identity. [step 2.1, step 2.2, algebra]

3.2 Let $g=u+iw\in C_c^\infty(\mathbb R^d;\mathbb C)$. For the unitary families established in steps 2.1 and 2.2, [F10] gives $u,w\in C_c(\mathbb R^d)$; applying [F9] to each component and using $\|h+ik\|_2^2=\|h\|_2^2+\|k\|_2^2$ yields $\|T(a)g-T(a_0)g\|_2\to0$ as $a\to a_0$. If $v_n\to v_0$, then $|e^{im(v_n-v_0)\cdot x/\hbar}-1|^2|g(x)|^2\to0$ pointwise and is bounded by $4|g(x)|^2$, which is integrable. Dominated convergence [F12] gives $\|B_m(v_n)g-B_m(v_0)g\|_2\to0$. Since Euclidean parameter spaces are metric, both orbit maps are continuous on this dense smooth subspace. [A2, F8, F9, F10, F11, F12, step 1.2, step 2.1, step 2.2, algebra]

4.1 For arbitrary $f\in\mathcal H$, approximate it in $L^2$ by $g\in C_c^\infty(\mathbb R^d;\mathbb C)$ using [F8]. Unitarity in steps 2.1 and 2.2 gives $\|T(a)f-T(a_0)f\|_2\le2\|f-g\|_2+\|T(a)g-T(a_0)g\|_2$, and the analogous estimate for $B_m(v)$; letting the approximation error be arbitrarily small extends both continuities to every $f$. Moreover,
$$\|\Pi_m(a,v,\theta)f-\Pi_m(a_0,v_0,\theta_0)f\|_2\le |e^{im\theta/\hbar}-e^{im\theta_0/\hbar}|\|f\|_2+\|T(a)f-T(a_0)f\|_2+\|(B_m(v)-B_m(v_0))T(a_0)f\|_2,$$
so the orbit map of $\Pi_m$ is norm-continuous on the product Euclidean group. [F5, F8, step 1.2, step 2.1, step 2.2, step 3.2, algebra]

5.1 Using $T(a)B_m(v')=e^{-imv'\cdot a/\hbar}B_m(v')T(a)$ from step 3.1 and the addition laws of the two families, multiplication gives $\Pi_m(a,v,\theta)\Pi_m(a',v',\theta')=\Pi_m(a+a',v+v',\theta+\theta'-v'\cdot a)$. By step 1.1 this is the group law; the operators are unitary by steps 2.1 and 2.2, and their orbit maps are continuous by step 4.1. Thus $\Pi_m$ is a unitary representation by [F5], and $\Pi_m(0,0,\eta)=e^{im\eta/\hbar}I$ is its central character. [F5, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, algebra]

6.1 For a finite direct sum the central subgroup acts as $\bigoplus_j e^{im_j\eta/\hbar}I_j$. If $m_j\ne m_k$, choose $0<|\eta|<2\pi\hbar/|m_j-m_k|$; then $e^{im_j\eta/\hbar}\ne e^{im_k\eta/\hbar}$. Hence the central characters are pairwise distinct. [given, step 5.1, algebra]

7.1 Substituting $p=mv$ into the displayed Weyl formula gives $W(a,mv)=e^{-imv\cdot a/(2\hbar)}B_m(v)T(a)$. Direct multiplication gives $W(a,p)W(a',p')=e^{-i\omega((a,p),(a',p'))/(2\hbar)}W(a+a',p+p')$. The published model result [F7] verifies this system is irreducible and regular, and [F6] gives unitary equivalence for every other system with the same finite phase space and nonzero parameter $1/\hbar$. [given, A1, F6, F7, step 2.1, step 2.2, algebra] ∎

## Remarks

The central phase is convention-dependent in sign: this item fixes $T(a)f(x)=f(x-a)$ and $B_m(v)f(x)=e^{imv\cdot x/\hbar}f(x)$. The conclusion is an algebraic representation statement; the distinct phases alone do not establish a physical mass-superselection rule.
