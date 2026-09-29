---
id: ex-absolute-value-has-a-weak-first-derivative
kind: example
title: The absolute value has a weak first derivative
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - lem-weak-derivative-is-independent-of-lp-representatives
  - def-test-function-space-d-of-an-open-set
  - def-interval
  - def-bounded-set
  - lem-of-abs-value
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - cor-mean-value-theorem
  - def-real-power
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-continuity-and-derivatives
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-integral-over-a-measurable-set
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-algebra-of-derivatives
  - thm-finitely-many-discontinuities-integrable
  - cor-newton-leibniz-with-finitely-many-exceptional-points
  - thm-linearity-of-the-integral
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
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
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.1, Example 1.7, printed pp. 2–3 (fully worked piecewise-affine test calculation); Chapter 2 §2.2, Theorem 2.3, printed pp. 29–31 (absolute-value rule for 1≤p<∞, with smooth approximation and dominated convergence)
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: Chapter 8 §8.2, Examples (i), printed p. 202; the exact |x| claim is posed as an exercise without proof
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1, Example 1.7,
  printed pp. 2–3, fully works a related piecewise-affine weak-derivative
  identity by splitting the test integral and integrating by parts. Chapter 2
  §2.2, Theorem 2.3, printed pp. 29–31, proves the absolute-value rule for
  general $W^{1,p}$ functions when $1\le p<\infty$ by smooth approximation
  and dominated convergence; it specifies the gradient a.e. on the positive,
  zero, and negative level sets. This item does not use that later theorem as
  a prerequisite or as its proof.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2, Examples (i), printed p. 202, states the exact
  $|x|$ example on $(-1,1)$ for all $1\le p\le\infty$ and gives its derivative
  on either side of zero. Brezis labels the calculation an exercise and does
  not supply the proof. The argument below proves the claim for every bounded
  open interval containing zero, including $p=\infty$.

## Statement

Assume the Axiom of Countable Choice. Let $I\subset\mathbb R$ be a bounded
open interval with $0\in I$, and set $u(x)=|x|$. Then
$u\in W^{1,p}(I;\mathbb R)$ for every $1\le p\le\infty$. Its weak derivative
class has the representative
$$v_c(x)=\begin{cases}-1,&x<0,\\ c,&x=0,\\ +1,&x>0,\end{cases}$$
for any finite real $c$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded open interval $I$ with $0\in I$, and
$u(x)=|x|$.

[F1] The exact assumption is Countable Choice, denoted $\mathrm{AC}_\omega$
([[def-countable-choice]]).

[F2] The test space is $C_c^\infty(I;\mathbb C)$ and its members are actual
smooth functions with compact support
([[def-test-function-space-d-of-an-open-set]]).

[F3] A locally integrable $v$ is the weak first derivative of $u$ exactly when
$\int_Iu\varphi'=-\int_Iv\varphi$ for every test
([[def-weak-derivative-of-a-locally-integrable-function]]).

[F4] Membership in $W^{1,p}(I;\mathbb R)$ requires an $L^p$ class for $u$ and
an $L^p$ class for its weak derivative, with the zero-order derivative equal
to $u$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F5] Changing locally integrable representatives on a null set preserves the
weak-derivative identity; $L^p$ objects are almost-everywhere classes
([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F6] Write $I=(a,b)$. Boundedness and openness give finite endpoints $a<b$;
$0\in I$ gives $a<0<b$ ([[def-interval]]).

[F7] Under Countable Choice, $[a,b]$ is measurable with measure $b-a$, and every
singleton is a zero-length box of measure zero
([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F8] Continuous real functions are Borel measurable, and Borel sets are
Lebesgue measurable under Countable Choice
([[cor-continuous-functions-are-borel-measurable]],
[[thm-borel-sets-are-lebesgue-measurable]]). The piecewise-constant function
$v_0$ below is Borel because its level sets are intervals and a singleton.

[F9] For each finite $p\ge1$, $t\mapsto t^p$ is nondecreasing on
$[0,\infty)$. For $0<x<y$, the mean value theorem and
$(t^p)\prime=p t^{p-1}>0$ on $(0,\infty)$ give $x^p<y^p$; at zero,
$0^p=0$ and positive-base powers are positive
([[cor-mean-value-theorem]], [[thm-real-power-continuity-and-derivatives]],
[[def-real-power]], [[cor-exponential-reciprocal-and-positivity]]).

[F10] For finite $p$, membership in $L^p$ means measurability and finiteness
of $\int_I|f|^p$
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F11] Integration over a measurable set is integration after multiplication
by its indicator. The nonnegative integral is monotone and homogeneous, and a
nonnegative simple function integrates by its simple-integral formula
([[def-integral-over-a-measurable-set]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F12] A nonnegative measurable function has integral zero over a measurable
null set ([[cor-integral-over-a-null-set-vanishes]]).

[F13] The product rule holds for differentiable real functions
([[thm-algebra-of-derivatives]]).

[F14] Every bounded function on a closed interval that is continuous except
at finitely many points is Riemann integrable
([[thm-finitely-many-discontinuities-integrable]]).

[F15] Newton–Leibniz holds for a continuous function whose interior derivative
has a Riemann-integrable extension; finitely many exceptional interior points
are allowed ([[cor-newton-leibniz-with-finitely-many-exceptional-points]]).

[F16] Riemann integration on a closed interval is linear
([[thm-linearity-of-the-integral]]).

[F17] Under Countable Choice, a bounded Riemann-integrable function on a closed
interval is Lebesgue measurable and its Lebesgue and Riemann integrals agree
([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F18] The defining requirement for an $L^p$ class uses the measurable function
and integral conventions in [F10]; for a bounded measurable $f$ on $I$, the
majorant $C^p\mathbf1_I$ is simple, has integral $C^p(b-a)$, and bounds
$\int_I|f|^p$ whenever $|f|\le C$ (derived from [F7], [F9], [F10], [F11]).

[F19] Complex test pairings are bilinear and use no conjugation
([[def-test-function-space-d-of-an-open-set]]).

[F20] Complex integrals are defined componentwise
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F21] For $p=\infty$, a finite almost-everywhere bound is sufficient for
$L^\infty$ membership
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F22] Nonnegative powers of nonnegative measurable functions are measurable
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F23] Boundedness gives a finite $M>0$ with $|x|\le M$ on $I$
([[def-bounded-set]], [[lem-of-abs-value]]).

**Choice use.** The declared principle is exactly $\mathrm{AC}_\omega$. It
is used through the Sobolev definition, representative-independence lemma,
interval measure formula, Borel-to-Lebesgue measurability, and
Riemann-to-Lebesgue integral comparison. The explicit piecewise calculation
itself is choice-free; no full Axiom of Choice or Dependent Choice is invoked.

## Proof

**Proof technique:** direct.

1.1 The declared assumption is exactly $\mathrm{AC}_\omega$; the proof uses it only through the interfaces listed in the Choice use note. [F1, F4, F5, F7, F8, F17, given]

1.2 Let $I=(a,b)$. Define $v_0(x)=-1$ for $x<0$, $v_0(0)=0$, and $v_0(x)=1$ for $x>0$. By [F8], both $u$ and $v_0$ are measurable: extend $u$ continuously to $\mathbb R$, and note that the level sets of $v_0$ are Borel intervals and the singleton $\{0\}$. Choose $M>0$ as in [F23]. For each finite $p\ge1$, $|u|^p$ is measurable by [F22] and bounded by $M^p$ by [F9]; also $|v_0|^p$ is the indicator of $I\setminus\{0\}$ and is bounded by $1$. Thus [F11] and [F18] give $$\int_I|u|^p\,dx\le M^p(b-a),\qquad \int_I|v_0|^p\,dx\le b-a.$$ For $p=\infty$, $|u|\le M$ and $|v_0|\le1$. Hence [F21] gives membership in $L^\infty(I)$; the p=1 estimates also give local integrability. [F6, F7, F8, F9, F10, F11, F18, F21, F22, F23]

1.3 Fix a real-valued test $\varphi\in C_c^\infty(I)$. Its zero extension to $[a,b]$ is smooth by [F2] and vanishes near both endpoints. Set $$G(x)=|x|\varphi(x),\qquad g(x)=v_0(x)\varphi(x)+|x|\varphi'(x)\quad(a\le x\le b).$$ Then $G$ is continuous on $[a,b]$, $g$ is bounded and continuous except possibly at $0$, and [F14] makes $g$ Riemann integrable. By [F13], for every $x\in(a,b)\setminus\{0\}$, $G'(x)=g(x)$. Also $G(a)=G(b)=0$. [F2, F6, F13, F14]

2.1 Apply [F15] with exceptional set $\{0\}$ to the data in step 1.3. It gives $$\int_a^b g(x)\,dx=G(b)-G(a)=0.$$ [F15, step 1.3]

3.1 The two summands of $g$ are Riemann integrable: $v_0\varphi$ is bounded and has at most one discontinuity, while $|x|\varphi'$ is continuous. By [F14] and [F16], step 2.1 yields $$\int_a^b |x|\varphi'(x)\,dx=-\int_a^b v_0(x)\varphi(x)\,dx.$$ [F14, F16, step 1.3, step 2.1]

4.1 Each integrand in step 3.1 is bounded and Riemann integrable, so [F17] converts the identity to Lebesgue integrals on $[a,b]$. The endpoints are null by [F7], and [F12] shows that removing them does not change either integral. Thus $$\int_Iu\varphi'\,dx=-\int_Iv_0\varphi\,dx.$$ For a complex-valued test, apply the real identity to its real and imaginary parts and add the identities with coefficient $i$; the bilinear convention in [F19] and componentwise integration in [F20] give the same formula. [F2, F7, F12, F17, F19, F20, step 3.1]

5.1 By [F3], step 4.1 proves that $v_0$ is the weak derivative of $u$. For any finite $c\in\mathbb R$, the representative $v_c$ differs from $v_0$ only on the null singleton $\{0\}$ by [F7]; [F5] therefore preserves the weak-derivative identity and its $L^p$ class, including the essential class when $p=\infty$. Since both $u$ and $v_0$ belong to every $L^p(I)$ by step 1.2, [F4] gives $u\in W^{1,p}(I)$ for every $1\le p\le\infty$, with derivative represented by every $v_c$. The cases $p=1$ and $p=\infty$ are included in the bounds of step 1.2. ∎
