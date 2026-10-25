---
id: cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint
kind: counterexample
title: "Strong fractional integration fails at p equal to one"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-riesz-potential-of-order-alpha, def-complex-lp-and-euclidean-test-function-conventions, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-polar-coordinates-formula-for-lebesgue-measure, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Eleonor Harboure, Spaces of Smooth Functions, Theorem 3 and following remark, printed p. 5"
      url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
      locator: "§1, printed p. 5: $I_\\alpha$ is of weak type $(1,n/(n-\\alpha))$ but not of strong type; the remark takes $f_k\\to\\delta$ with $\\|f_k\\|_1=1$ and uses Fatou."
    - title: "Larry Guth, Hardy–Littlewood–Sobolev Inequality, Proposition 0.1, printed p. 1"
      url: "https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf"
      locator: "Proposition 0.1: the ball test gives the far-tail exponent condition $\\alpha q>n$ and the failure at $p=1$."
---

## Statement refuted

Assume the Axiom of Countable Choice. Let $n\ge1$, $0<\alpha<n$ and put
$q_0:=n/(n-\alpha)$. For every $\epsilon>0$ the normalized ball function
$$f_\epsilon:=\frac{1_{B(0,\epsilon)}}{\lambda(B(0,\epsilon))}$$
has $\|f_\epsilon\|_1=1$ and is an approximate point mass as $\epsilon\to0^+$;
its Riesz potential of [[def-riesz-potential-of-order-alpha]] satisfies
$I_\alpha f_\epsilon(x)\ge C_{n,\alpha}|x|^{\alpha-n}$ for every $|x|>2\epsilon$
with $C_{n,\alpha}=(3/2)^{\alpha-n}>0$, and consequently
$I_\alpha f_\epsilon\notin L^{q_0}(\mathbb R^n)$. Thus the strong
$L^1\to L^{q_0}$ endpoint estimate is false: no constant $C$ can satisfy
$\|I_\alpha f\|_{q_0}\le C\|f\|_1$ for all $f\in L^1(\mathbb R^n;\mathbb C)$.


Fix $\epsilon>0$. The normalized ball density $f_\epsilon$ is nonnegative and
measurable, supported on the ball $B(0,\epsilon)$, which has positive finite
measure; its integral is one. For $x$ with $|x|>2\epsilon$ and $y\in B(0,\epsilon)$
one has $|x-y|\le|x|+|\epsilon|\cdot1<3|x|/2$, and since the kernel exponent
$\alpha-n$ is negative, $|x-y|^{\alpha-n}\ge(3|x|/2)^{\alpha-n}$. Integrating
this lower bound against the probability density $f_\epsilon$ gives the claimed
pointwise lower bound. Raising it to the power $q_0=n/(n-\alpha)$ turns the
radial factor into $|x|^{-n}$, and the polar decomposition of Lebesgue measure
shows that $\int_{|x|>2\epsilon}|x|^{-n}dx=\sigma(S^{n-1})\int_{2\epsilon}^\infty r^{-1}dr=+\infty$;
hence $I_\alpha f_\epsilon$ has infinite $L^{q_0}$ norm. The approximate-point-mass
clause is the standard normalized-ball computation against continuous
compactly supported tests.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<n$, $q_0=n/(n-\alpha)$, and an arbitrary $\epsilon>0$.

[F1] The unit Riesz potential is $I_\alpha f(x)=\int K_\alpha(x-y)f(y)\,dy$, with $K_\alpha(z)=|z|^{\alpha-n}$ for $z\neq0$, at every point where the absolute integral is finite. ([[def-riesz-potential-of-order-alpha]])

[F2] Complex $L^p$ classes for finite $p$, the modulus and its powers, the conventions for complex $C_c(\mathbb R^n)$ and $C_c^\infty(\mathbb R^n)$, and the componentwise complex integral. ([[def-complex-lp-and-euclidean-test-function-conventions]])

[F3] Every Euclidean ball $B(0,\epsilon)$ is Lebesgue measurable with $0<\lambda(B(0,\epsilon))<\infty$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F4] Under Countable Choice, polar coordinates give $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ for every nonnegative Borel $h$, with $\sigma$ a finite Borel measure on the unit sphere. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F5] Every half-open interval $[a,b)\subset\mathbb R$ is Lebesgue measurable with measure $b-a$. The nonnegative Lebesgue integral agrees with the simple integral, so $\int c\mathbf1_{[a,b)}=c(b-a)$ for $c\ge0$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]])

[F6] The integral over a measurable set is the integral of the product with its indicator; the nonnegative Lebesgue integral is monotone, homogeneous for nonnegative scalars, and additive. ([[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F7] For integrable complex functions the integral is linear and satisfies $|\int g\,d\mu|\le\int|g|\,d\mu$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]])

[F8] Countable Choice is the choice principle assumed by the polar and measure interfaces used here. ([[def-countable-choice]])



## Counterexample

**Proof technique:** direct; compute the normalized ball density and the exact radial lower bound for its potential, then integrate the resulting power over the far tail.

1.1 The density and its norm. By [F3] the ball $B(0,\epsilon)$ is measurable with $0<\lambda(B(0,\epsilon))<\infty$, so $f_\epsilon=\lambda(B(0,\epsilon))^{-1}1_{B(0,\epsilon)}$ is a well-defined nonnegative measurable function with $|f_\epsilon|^1$ integrable and $$\int_{\mathbb R^n}f_\epsilon\,d\lambda=\frac{\lambda(B(0,\epsilon))}{\lambda(B(0,\epsilon))}=1;$$ in particular $\|f_\epsilon\|_1=1$ and $f_\epsilon\in L^1(\mathbb R^n;\mathbb C)$. [F2, F3, F6, algebra]

1.2 The pointwise lower bound. Fix $x$ with $|x|>2\epsilon$. For every $y\in B(0,\epsilon)$ the triangle inequality for the Euclidean norm gives $|x-y|\le|x|+|y|<|x|+\epsilon<3|x|/2$; since $\alpha-n<0$, raising the positive numbers to the negative power reverses the inequality and $$K_\alpha(x-y)=|x-y|^{\alpha-n}\ge\left(\frac{3|x|}{2}\right)^{\alpha-n}=\left(\frac{3}{2}\right)^{\alpha-n}|x|^{\alpha-n}.$$ As $f_\epsilon\ge0$ and $\int f_\epsilon=1$, monotonicity and the scalar rule of [F6] applied to the definition [F1] give $$I_\alpha f_\epsilon(x)=\int K_\alpha(x-y)f_\epsilon(y)\,dy\ge\left(\frac{3}{2}\right)^{\alpha-n}|x|^{\alpha-n}\int f_\epsilon=\left(\frac{3}{2}\right)^{\alpha-n}|x|^{\alpha-n},$$ the pointwise absolute convergence being a consequence of the same finite upper bound since $K_\alpha(x-y)\le(|x|-\epsilon)^{\alpha-n}$ on the support for the upper estimate. [F1, F2, F6, algebra]

1.3 Computation of the tail. The function $x\mapsto|x|^{-n}\mathbf1_{\{|x|>2\epsilon\}}$ is nonnegative and Borel, so polar coordinates [F4] give $$\int_E|x|^{-n}\,d\lambda_n(x)=\sigma(S^{n-1})\int_{2\epsilon}^{\infty}r^{-1}\,d\lambda_1(r).$$ To see that the radial Lebesgue integral is infinite, set $a=2\epsilon$ and $J_j=[2^ja,2^{j+1}a)$ for $j\ge0$. These disjoint intervals partition $[a,\infty)$; on $J_j$, $r^{-1}\ge(2^{j+1}a)^{-1}$ and $\lambda_1(J_j)=2^ja$ by [F5]. Thus each $\int_{J_j}r^{-1}\,d\lambda_1\ge1/2$, using [F5] and [F6]. Finite additivity and monotonicity imply $\int_{a}^{\infty}r^{-1}\,d\lambda_1\ge N/2$ for every positive integer $N$, so it is infinite. Finally $0<\sigma(S^{n-1})<\infty$: applying [F4] to $\mathbf1_{B(0,1)}$ gives $\lambda(B(0,1))=\sigma(S^{n-1})/n$, and [F3] makes the ball measure positive and finite. Hence $\int_E|x|^{-n}\,d\lambda_n(x)=+\infty$. [F3, F4, F5, F6, algebra]

2.1 The far tail diverges. Since $q_0=n/(n-\alpha)$ we have $(\alpha-n)q_0=-n$, so on the measurable set $E:=\{|x|>2\epsilon\}$ the lower bound of step 1.2 gives $|I_\alpha f_\epsilon(x)|^{q_0}\ge\left(\frac32\right)^{(\alpha-n)q_0}|x|^{(\alpha-n)q_0}=\left(\frac32\right)^{-n}|x|^{-n}$. If $I_\alpha f_\epsilon$ belonged to $L^{q_0}$, then applicability of [F6] to the nonnegative functions $|I_\alpha f_\epsilon|^{q_0}1_E$ and $|x|^{-n}1_E$ would give $$\int_E|x|^{-n}dx\le\left(\frac32\right)^{n}\int_E|I_\alpha f_\epsilon|^{q_0}\le\left(\frac32\right)^{n}\|I_\alpha f_\epsilon\|_{q_0}^{q_0}<\infty.$$ [F2, F6, step 1.2, algebra]

2.2 Approximate point mass. Let $\varphi\in C_c(\mathbb R^n;\mathbb C)$ be continuous and compactly supported, and fix $\eta>0$. Continuity of $\varphi$ at the origin gives $\delta>0$ with $|\varphi(y)-\varphi(0)|<\eta$ whenever $|y|<\delta$. For every $0<\epsilon<\delta$ linearity of the integral [F7] together with the normalization $\int f_\epsilon=1$ gives $$\int\varphi f_\epsilon\,d\lambda-\varphi(0)=\int_{B(0,\epsilon)}\bigl(\varphi(y)-\varphi(0)\bigr)f_\epsilon(y)\,dy,$$ and the triangle inequality [F7] and monotonicity of the nonnegative integral [F6] bound its modulus by $\eta\int f_\epsilon=\eta$. Hence $\int\varphi f_\epsilon\to\varphi(0)$ as $\epsilon\to0^+$: the normalized balls converge to the point mass at the origin against continuous compactly supported tests. [F2, F6, F7, step 1.1, algebra]

3.1 No strong endpoint estimate. Steps 2.1 and 1.3 are contradictory: if $I_\alpha f_\epsilon\in L^{q_0}$ then $\int_E|x|^{-n}dx<\infty$, but that integral equals $+\infty$. Hence $I_\alpha f_\epsilon\notin L^{q_0}(\mathbb R^n)$ for every $\epsilon>0$. Since $\|f_\epsilon\|_1=1$ by step 1.1, no constant $C$ satisfies $\|I_\alpha f\|_{q_0}\le C\|f\|_1$ for all $f$ in $L^1(\mathbb R^n;\mathbb C)$: the family $\{f_\epsilon\}_{\epsilon>0}$ alone refutes the estimate. [step 1.1, step 2.1, step 1.3]

4.1 Conclusion. The normalized ball density $f_\epsilon$ has unit $L^1$ norm, is an approximate point mass, and its potential has the radial lower bound $\left(\frac32\right)^{\alpha-n}|x|^{\alpha-n}$ outside $B(0,2\epsilon)$, whose $q_0$-th power is a nonzero multiple of the divergent tail $|x|^{-n}$; therefore the strong $L^1\to L^{q_0}$ endpoint fails. The argument exhibits the failure at fixed $\epsilon$ without any limit or Fatou step, and no endpoint case is silently substituted into the strict-range theorem. Countable Choice is used only through the polar and measure interfaces [F3]-[F5] and [F8]. [F8, step 1.1, step 3.1, step 2.2] ∎
