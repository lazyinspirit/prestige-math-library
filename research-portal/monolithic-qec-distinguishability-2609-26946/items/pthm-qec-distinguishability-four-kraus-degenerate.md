---
id: pthm-qec-distinguishability-four-kraus-degenerate
kind: physics-theorem
domain: physics
title: Degenerate four-level amplitude-damping form
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-four-kraus
  - def-qec-prereq-finite-operator-conventions
  - math:def-vector-valued-derivative-and-integral
  - math:thm-continuous-implies-integrable
  - math:thm-norm-inequality-for-the-vector-valued-integral
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:cor-exponential-reciprocal-and-positivity
  - math:cor-vector-valued-ftc-and-lipschitz-bound
  - math:thm-nonnegative-continuous-with-zero-integral-vanishes
  - math:lem-complex-conjugation-and-modulus-laws
dependency_roles:
  pthm-qec-distinguishability-four-kraus: physical-result
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:def-vector-valued-derivative-and-integral: mathematical-premise
  math:thm-continuous-implies-integrable: mathematical-premise
  math:thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  math:thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  math:lem-complex-conjugation-and-modulus-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 7, definitions following Eq. (14) and Eqs. (15)–(16)
      statement: The article states that f₋ is nonpositive and vanishes only at zero
        splitting, and displays the two nonzero Kraus operators in the
        degenerate limit.
      hypotheses: The article's four-level amplitude-damping model and the parameter
        conventions surrounding Eqs. (12)–(16).
      reading_limits: The supplied extracted text of PDF pages 6–7 was read for
        attribution. This citation is not used as proof of the result.
physical_scope: Conditional consequence of the four-level model; no experimental
  observation is asserted.
formulation_deps:
  - pthm-qec-distinguishability-four-kraus
  - def-qec-prereq-finite-operator-conventions
  - math:def-vector-valued-derivative-and-integral
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:lem-complex-conjugation-and-modulus-laws
argument_deps:
  - pthm-qec-distinguishability-four-kraus
  - def-qec-prereq-finite-operator-conventions
  - math:def-vector-valued-derivative-and-integral
  - math:thm-continuous-implies-integrable
  - math:thm-norm-inequality-for-the-vector-valued-integral
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:cor-exponential-reciprocal-and-positivity
  - math:cor-vector-valued-ftc-and-lipschitz-bound
  - math:thm-nonnegative-continuous-with-zero-integral-vanishes
  - math:lem-complex-conjugation-and-modulus-laws
dependency_level: 4
---

## Statement

Assume the four-level model and Kraus representation, with $t\geq0$, $\gamma\geq0$ and real $\omega_0,\Delta$. In its ordered orthonormal basis $|0\rangle,\ldots,|3\rangle$, put $\Pi_{01}=|0\rangle\langle0|+|1\rangle\langle1|$ and $\Pi_{23}=|2\rangle\langle2|+|3\rangle\langle3|$. Complex integrals are componentwise Riemann integrals under $\mathbb C\cong\mathbb R^2$, with $\int_0^0 g(s)\,ds=0$. For all these parameters define $f_-(t)=\gamma\left|\int_0^t e^{(\gamma+i\Delta)s}\,ds\right|-(e^{\gamma t}-1)$. Where $\Omega=\gamma+i\Delta$ is nonzero, this agrees with $\gamma|e^{\Omega t}-1|/|\Omega|-(e^{\gamma t}-1)$.

Then $f_-(t)\leq0$. If $\gamma>0$ and $t>0$, equality holds exactly when $\Delta=0$. At $t=0$ or $\gamma=0$, equality holds for every $\Delta$. For $\Delta=0$, $f_-(t)=0$ for every $t\geq0$, and the representation reduces to $K_3=0$, $K_1=e^{-i\omega_0t}e^{-\gamma t/2}\Pi_{01}+\Pi_{23}$ and $K_2=\sqrt{1-e^{-\gamma t}}(|2\rangle\langle0|+|3\rangle\langle1|)$.

## Statement references

[[pthm-qec-distinguishability-four-kraus]]

[[def-qec-prereq-finite-operator-conventions]]

[[math:def-vector-valued-derivative-and-integral]]

[[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[math:lem-complex-conjugation-and-modulus-laws]]

## Facts & Assumptions

**Given:** The model, representation and parameters in the Statement.

**Goal:** Establish the sign and equality conditions and the degenerate Kraus operators.

[F1] The four-level result gives the stated Kraus representation, including its $t=0$ and $\gamma=0$ endpoint conventions, and defines its nonzero-parameter $f_-$ by the displayed exponential quotient. [[pthm-qec-distinguishability-four-kraus]]

[F2] Kets, bras, outer products and the ordered orthonormal basis use the finite operator conventions. [[def-qec-prereq-finite-operator-conventions]]

[F3] The Riemann integral in $\mathbb R^m$, for $m=1,2$, is componentwise and real-linear, with integral zero on a degenerate interval; identify $x+iy$ with $(x,y)$ for complex integrals. [[math:def-vector-valued-derivative-and-integral]]

[F4] A continuous real function on a nondegenerate compact interval is bounded and Riemann integrable. Apply this to each component for complex functions. [[math:thm-continuous-implies-integrable]]

[F5] For an integrable function $g:[a,b]\to\mathbb R^m$ with $a\leq b$, $\left\|\int_a^b g\right\|_2\leq\int_a^b\|g\|_2$; complex modulus is the Euclidean norm on $\mathbb R^2$. [[math:thm-norm-inequality-for-the-vector-valued-integral]]

[F6] The complex exponential is entire with derivative itself. For real $x,y$, $e^{x+iy}=e^x(\cos y+i\sin y)$ and $|e^{x+iy}|=e^x$; the real exponential is positive. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[math:cor-exponential-reciprocal-and-positivity]]

[F7] If a curve $G:[a,b]\to\mathbb R^m$, $a<b$, is differentiable at every point, using the corresponding one-sided derivatives at the endpoints, and $G'$ is integrable, then $\int_a^b G'=G(b)-G(a)$. [[math:cor-vector-valued-ftc-and-lipschitz-bound]]

[F8] A continuous nonnegative real function on $[a,b]$, $a<b$, whose integral is zero vanishes everywhere on that interval. [[math:thm-nonnegative-continuous-with-zero-integral-vanishes]]

[F9] Complex conjugation respects sums and products, $z\overline z=|z|^2$, modulus is multiplicative and nonnegative, and $|z|=0$ exactly when $z=0$. [[math:lem-complex-conjugation-and-modulus-laws]]

## Proof

**Given:** The model, representation and parameters in the Statement.

**Goal:** Establish the sign and equality conditions and the degenerate Kraus operators.

1.1 For each $c\in\mathbb C$, the real-parameter curve $s\mapsto e^{cs}$ is continuously differentiable with derivative $ce^{cs}$. Indeed, for $c\ne0$ its difference quotient is $c(e^{c(s+h)}-e^{cs})/(ch)$, which tends to $ce^{cs}$ by [F6]; for $c=0$ the curve is constant. This also supplies the one-sided derivatives on a restricted compact interval. By [F6], $e^{(\gamma+i\Delta)s}=e^{\gamma s}e^{i\Delta s}$ and $|e^{i\Delta s}|=1$. The integrands in the Statement therefore have continuous real and imaginary components and are integrable by [F3] and [F4], including the zero-interval convention. Fixed real-linear coordinate combinations commute with integration by the componentwise formula and real-linearity in [F3]. [given, F3, F4, F6, algebra]

2.1 Let $A=\int_0^t e^{(\gamma+i\Delta)s}\,ds$ and $B=\int_0^t e^{\gamma s}\,ds$. For $t>0$, apply [F7] to the curves in step 1.1 with $c=\Omega$ and $c=\gamma$; their derivatives are continuous and integrable by [F4]. This gives $\Omega A=e^{\Omega t}-1$ and $\gamma B=e^{\gamma t}-1$. The identities also hold at $t=0$ by [F3]. Thus $A=(e^{\Omega t}-1)/\Omega$ when $\Omega\ne0$, agreeing with [F1]. By [F5] and [F6], $|A|\leq B$, so $f_-=\gamma(|A|-B)\leq0$, including $\gamma=0$. [given, F1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 Suppose $\gamma>0$ and $t>0$. Step 2.1 gives $B\geq0$, and $B=0$ would contradict [F8] applied to the continuous positive function $s\mapsto e^{\gamma s}$, so $B>0$. If $f_-=0$, then $|A|=B>0$; set $u=A/|A|$, so $|u|=1$ by [F9]. The function $h(s)=e^{\gamma s}|e^{i\Delta s}-u|^2$ is continuous, real and nonnegative. Expanding its squared modulus using [F9], and integrating real and imaginary parts using [F3] and step 1.1, gives $\int_0^t h(s)\,ds=2B-2\operatorname{Re}(\overline u A)=2B-2|A|=0$. [given, F3, F6, F8, F9, step 1.1, step 2.1, algebra]

4.1 By [F8], $h$ in step 3.1 vanishes everywhere. Positivity of $e^{\gamma s}$ and definiteness of modulus imply $e^{i\Delta s}=u$ for every $s\in[0,t]$. At $s=0$ this gives $u=1$. The right derivative at zero of this constant curve is zero, whereas step 1.1 computes it as $i\Delta$; hence $\Delta=0$. Conversely, if $\Delta=0$ then $A=B$ and step 2.1 gives $f_-=0$. At $t=0$ the integrals vanish by [F3], and at $\gamma=0$ the defining expression for $f_-$ vanishes. This proves all stated equality and endpoint conditions. [given, F3, F6, F8, F9, step 1.1, step 2.1, step 3.1, algebra]

5.1 At $\Delta=0$, [F1] gives the displayed $K_1,K_2,K_3$ for positive $\gamma t$, and its endpoint convention gives the same formulas when $t=0$ or $\gamma=0$. By [F2], $\Pi_{23}$ is the sum of the two ground-state basis projectors in that representation. Step 4.1 gives $f_-=0$ throughout this degenerate case. This proves the conditional result. [given, F1, F2, step 4.1, algebra] ∎
