---
id: def-qec-prereq-diagonal-lift-phase-data
kind: definition
domain: mathematics
title: Calibrated diagonal lifts and transition phase differences
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-complex-exponential
  - math:thm-complex-exponential-addition-and-real-extension
  - math:def-qc-quantum-channel
  - math:def-probability-measure
  - math:def-expectation-of-a-nonnegative-or-integrable-random-variable
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  math:cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:def-complex-exponential: mathematical-premise
  math:thm-complex-exponential-addition-and-real-extension: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
formulation_deps:
  - def-qec-prereq-finite-operator-conventions
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-complex-exponential
  - math:thm-complex-exponential-addition-and-real-extension
  - math:def-qc-quantum-channel
  - math:def-probability-measure
  - math:def-expectation-of-a-nonnegative-or-integrable-random-variable
argument_deps:
  - def-qec-prereq-finite-operator-conventions
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-complex-exponential
  - math:thm-complex-exponential-addition-and-real-extension
  - math:def-qc-quantum-channel
  - math:def-probability-measure
  - math:def-expectation-of-a-nonnegative-or-integrable-random-variable
---

## Definition

Let $H=\mathbb C^d$ be a finite operator space with specified orthonormal basis $\{|x\rangle\}_{x=1}^d$, where $d\geq 1$. For specified real numbers $d_x$, the diagonal lift is the linear operator $D=\sum_x d_x|x\rangle\langle x|$. Its phase evolution at real time $t$, in units with $\hbar=1$, is $U_t=e^{-itD}$, acting on an operator $X$ by $X\mapsto U_tXU_t^\dagger$. In particular, the matrix unit $|x\rangle\langle y|$ acquires the phase $e^{-it(d_x-d_y)}$.

If an unperturbed Hamiltonian $H_0$ is diagonal in this same basis with eigenvalues $E_x$, define the directed transition energy for $x\to y$ as the source energy minus the destination energy. Replacing $H_0$ by $H_0+D$ changes this difference from $E_x-E_y$ to $(E_x-E_y)+(d_x-d_y)$; the lift contribution is therefore $d_x-d_y$.

For the calibration criterion, a recovery rule is a supplied parameterized family of quantum channels $\mathcal R_{a,\tau}:\mathcal L(H_R)\to\mathcal L(H_L)$, indexed by $(a,\tau)\in A$, where $H_R$ and $H_L$ are specified nonzero finite operator spaces, $\mathcal L(K)$ denotes the linear endomorphisms of $K$, and $A\subseteq\mathbb R^d\times[0,\infty)$ is a specified nonempty set of admissible lift vectors and elapsed intervals. Any auxiliary inputs, such as a recorded outcome, are fixed or supplied separately. The phase data are calibrated for this rule at an admissible pair $(a,\tau)$ with $a=(d_1,\ldots,d_d)$ when the actual vector $a$ and interval $\tau$ are supplied as explicit inputs and the rule evaluates the specified channel $\mathcal R_{a,\tau}$. Each channel is complex-linear, completely positive and trace-preserving; the word recovery specifies its intended use and supplies no correction guarantee or physical control assumption.

This availability is an assumption about the rule's inputs, not a claim that an unknown jump time has been observed. An unknown jump time remains a variable; averaging over it requires a separately specified probability distribution.

When probabilistic averaging is invoked, the additional inputs are a probability space $(T,\mathcal T,\mu)$ of allowed real times $T\subseteq\mathbb R$ and a specified $\mu$-integrable real or complex scalar function $f$ on $T$. The probability measure $\mu$ is the jump-time distribution, and the average means the expectation $\mathbb E_\mu[f]=\int_T f\,d\mu$. Neither this distribution nor a choice of $f$ is supplied by calibration alone.

## Definition references

[[def-qec-prereq-finite-operator-conventions]]

[[math:lem-exponential-series-of-a-bounded-operator]]

[[math:def-complex-exponential]]

[[math:thm-complex-exponential-addition-and-real-extension]]

[[math:def-qc-quantum-channel]]

[[math:def-probability-measure]]

[[math:def-expectation-of-a-nonnegative-or-integrable-random-variable]]

## Facts & Assumptions

[F1] In the finite operator conventions, $|x\rangle\langle y|$ maps $v$ to $|x\rangle\langle y|v\rangle$, and the adjoint is the conjugate transpose in the specified bases. [[def-qec-prereq-finite-operator-conventions]]

[F2] Every finite-dimensional normed space is Banach and every linear map from such a space to a normed space is bounded. [[math:cor-finite-dimensional-normed-spaces-are-banach]] [[math:cor-linear-maps-with-finite-dimensional-domain-are-bounded]]

[F3] For a bounded linear operator $A$ on a complex Banach space, $e^{tA}=\sum_{n=0}^{\infty}t^nA^n/n!$ converges in operator norm for real $t$. [[math:lem-exponential-series-of-a-bounded-operator]]

[F4] For every $z\in\mathbb C$, the scalar exponential is $e^z=\exp z=\sum_{n=0}^{\infty}z^n/n!$; for all complex $z,w$, $e^{z+w}=e^ze^w$. [[math:def-complex-exponential]] [[math:thm-complex-exponential-addition-and-real-extension]]

[F5] A quantum channel between finite-dimensional complex inner-product spaces is a complex-linear, completely positive, trace-preserving map on their full operator spaces; the definition assumes no physical realization. [[math:def-qc-quantum-channel]]

[F6] A probability measure on a measurable space has total mass one. On a probability space $(T,\mathcal T,\mu)$, the expectation of a specified $\mu$-integrable real or complex scalar function $f$ is the finite integral $\int_T f\,d\mu$. [[math:def-probability-measure]] [[math:def-expectation-of-a-nonnegative-or-integrable-random-variable]]

## Justification

**Given:** The finite operator space, basis and real diagonal data in the definition, real $t$, and, for calibration, the supplied channel family and admissible input pair. When probabilistic averaging is invoked, also the supplied probability space and integrable scalar function in the definition.

**Goal:** Verify the phase evolution and transition difference, the typing of the calibration criterion, and the meaning of the averaging caveat.

1.1 By the basis action in [F1], $D|x\rangle=d_x|x\rangle$ and $D^n|x\rangle=d_x^n|x\rangle$ for every nonnegative integer $n$. The space $H$, with its standard norm, is Banach and $-iD$ is bounded by [F2], so [F3] applies. Acting with its norm-convergent series on each basis vector and using the scalar series in [F4] gives $U_t|x\rangle=e^{-itd_x}|x\rangle$. [F1, F2, F3, F4, algebra]

1.2 At a supplied admissible pair $(a,\tau)$, the given family assigns a channel $\mathcal R_{a,\tau}$ with the source and target operator spaces in [F5]. Evaluating this supplied family defines the rule's use of the known lift vector and interval. It introduces no assertion that a corrective channel family exists for an unspecified noise model, that physical control is available, or that an unknown jump time or its distribution has been supplied. [given, F5]

2.1 For $z\in\mathbb C$ write $p_N(z)=\sum_{n=0}^N z^n/n!$. Conjugating the finite sum gives $\overline{p_N(z)}=p_N(\overline z)$, and $|\overline{p_N(z)}-\overline{e^z}|=|p_N(z)-e^z|\to0$ by [F4]. Thus $\overline{e^z}=e^{\overline z}$. Since $t,d_y$ are real, the diagonal matrix from step 1.1 and the conjugate transpose in [F1] give $U_t^\dagger|y\rangle=e^{itd_y}|y\rangle$. [F1, F4, step 1.1, algebra]

3.1 For every basis vector $|z\rangle$, the three factors in $U_t|x\rangle\langle y|U_t^\dagger$ give $e^{-itd_x}e^{itd_y}|x\rangle\langle y|z\rangle=e^{-it(d_x-d_y)}|x\rangle\langle y|z\rangle$ by [F4]; equality on the basis proves the asserted matrix-unit action. When $H_0|x\rangle=E_x|x\rangle$, $(H_0+D)|x\rangle=(E_x+d_x)|x\rangle$, and subtracting the destination eigenvalue from the source eigenvalue gives the stated transition shift. [F1, F4, step 1.1, step 2.1, algebra]

4.1 With the additional averaging inputs in the definition, [F6] applies to $f$ on $(T,\mathcal T,\mu)$ and defines its finite average as $\int_T f\,d\mu$. This operation uses the specified measure $\mu$ as well as $f$; neither is an input furnished by the calibration criterion itself. Thus the averaging caveat is a requirement to supply a probability model, not a probability law inferred from the channel family or an observation of the unknown time. [given, F6] ∎
