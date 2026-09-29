---
id: cex-step-function-has-no-locally-integrable-weak-derivative
kind: counterexample
title: A step has no locally integrable weak derivative
status: draft
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, def-dirac-delta-and-its-derivatives, thm-absolute-continuity-of-the-integral, def-countable-choice, def-locally-integrable-function-as-a-regular-distribution, def-distributional-derivative, def-complex-lp-and-euclidean-test-function-conventions, thm-lebesgue-measure-of-a-box-of-every-kind, prop-indicator-function-is-measurable-iff-its-set-is-measurable, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-test-function-space-d-of-an-open-set, lem-smooth-bump-between-concentric-euclidean-balls, thm-chain-rule, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-integral-triangle-inequality, cor-integral-over-a-null-set-vanishes]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.2
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Example 3.4, printed pp. 48–49; the shrinking-test proof below makes the locally integrable obstruction explicit
---

## Statement

Assume Countable Choice. Let $I=(-1,1)$, let $\mathbb K\in\{\mathbb R,\mathbb C\}$,
and define $H:I\to\mathbb K$ by $H=\mathbf1_{(0,1)}$. Then $H\in L^p(I;\mathbb K)$
for every $1\le p\le\infty$. Its regular distribution satisfies
$$\partial T_H=\delta_0\quad\text{in }\mathcal D'(I),$$
but no $v\in L^1_{\mathrm{loc}}(I;\mathbb K)$ represents this derivative.
Consequently $H\notin W^{1,p}(I;\mathbb K)$ for every $1\le p\le\infty$.

## Facts & Assumptions

**Given:** Countable Choice, $I=(-1,1)$, $E=(0,1)$, the indicator $H=\mathbf1_E$,
and $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] Countable Choice, or $\mathrm{AC}_\omega$, says that every sequence of
nonempty sets has a choice function. ([[def-countable-choice]])

[F2] The indicator of a measurable set is measurable. ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

[F3] Under Countable Choice, intervals in $\mathbb R$ are measurable with
their length as measure, including open and closed endpoint conventions;
degenerate intervals have measure zero. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] Under Countable Choice, every compact subset of $\mathbb R$ is measurable
and has finite Lebesgue measure. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[F5] The complex $L^p$ conventions use $\int |f|^p$ for finite $p$ and the
essential bound for $p=\infty$. ([[def-complex-lp-and-euclidean-test-function-conventions]])

[F6] The simple integral of $\mathbf1_E$ is $\lambda(E)$, and the nonnegative
Lebesgue integral agrees with that simple integral. ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F7] If $f\le g$ are nonnegative measurable functions, then
$\int f\le\int g$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F8] For a measurable set $A$, the integral over $A$ is the integral of the
integrand multiplied by $\mathbf1_A$. ([[def-integral-over-a-measurable-set]])

[F9] A complex measurable function is integrable when its modulus is
integrable, and its integral is defined componentwise. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[F10] A test function in $\mathcal D(I)=C_c^\infty(I;\mathbb C)$ is smooth
and has compact support in $I$; its zero extension is smooth on $\mathbb R$.
([[def-test-function-space-d-of-an-open-set]])

[F11] The regular distribution of a locally integrable function $u$ is
$T_u(\varphi)=\int_Iu\varphi$. ([[def-locally-integrable-function-as-a-regular-distribution]])

[F12] The distributional derivative obeys
$\langle\partial T,\varphi\rangle=-\langle T,\varphi'\rangle$.
([[def-distributional-derivative]])

[F13] The Dirac distribution is $\delta_0(\varphi)=\varphi(0)$.
([[def-dirac-delta-and-its-derivatives]])

[F14] A locally integrable weak derivative $v$ satisfies
$\int_I H\varphi'=-\int_Iv\varphi$ for every $\varphi\in C_c^\infty(I)$.
([[def-weak-derivative-of-a-locally-integrable-function]])

[F15] Membership in $W^{1,p}$ requires an $L^p$ class with a locally
integrable representative satisfying the first-order weak test identity.
([[def-sobolev-space-wkp-and-its-norm]])

[F16] If $f\in L^1(\mu)$, then for every $\varepsilon>0$ there is
$\delta>0$ such that $\mu(A)<\delta$ implies
$\int_A|f|\,d\mu<\varepsilon$. ([[thm-absolute-continuity-of-the-integral]])

[F17] There is a smooth $\eta:\mathbb R\to[0,1]$ equal to $1$ on
$[-1/2,1/2]$ with support contained in $(-1,1)$.
([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F18] Composing smooth functions with the affine map $x\mapsto x/\epsilon$
preserves smoothness by the chain rule. ([[thm-chain-rule]])

[F19] For complex $C^1$ functions on $[a,b]$, Countable Choice gives the
Lebesgue fundamental theorem $\int_a^b u'=u(b)-u(a)$.
([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]])

[F20] For an integrable complex function $f$,
$\left|\int f\right|\le\int|f|$. ([[thm-integral-triangle-inequality]])

[F21] A nonnegative integral over a measurable null set is zero.
([[cor-integral-over-a-null-set-vanishes]])

[F22] Local integrability means finite integral of $|f|$ on each compact set.
([[def-complex-lp-and-euclidean-test-function-conventions]])

## Counterexample

**Proof technique:** direct.

1.1 By [F3], $\lambda(E)=1$, $\lambda(I)=2$, and each compact $K\subset I$ has finite measure; hence [F2] makes $H$ measurable. For finite $p$, $|H|^p=\mathbf1_E$, so [F6] gives $\int_I|H|^p\,dx=\lambda(E)=1$; for $p=\infty$, $|H|\le1$ gives a finite essential bound by [F5]. Also $\int_K|H|\,dx\le\int_K1\,dx=\lambda(K)<\infty$ by [F4, F7, F8], so $H\in L^1_{\mathrm{loc}}(I)$ by [F22] and its regular distribution is defined by [F11]. [F2, F3, F4, F5, F6, F7, F8, F11, F22]

2.1 For $\varphi\in\mathcal D(I)$, [F8, F9, F10, F11, F12] and step 1.1 give $\langle\partial T_H,\varphi\rangle=-\int_IH\varphi'\,dx=-\int_I\mathbf1_{(0,1)}\varphi'\,dx$. The indicator convention [F8] applies to nonnegative integrands; for signed or complex $\varphi'$, apply it to the positive and negative parts of each real component and subtract, using the componentwise integral in [F9]. The endpoints $\{0,1\}$ are measurable and null by [F3]; [F21] gives zero integral of $|\varphi'|$ on them, so the difference between the $\mathbf1_{(0,1)}\varphi'$ and $\mathbf1_{[0,1]}\varphi'$ integrals is zero by [F20]. Let $\widetilde\varphi$ be the smooth zero extension from [F10]; the interval FTC [F19] gives $-\int_{[0,1]}\widetilde\varphi'\,dx=-(\widetilde\varphi(1)-\widetilde\varphi(0))=\varphi(0)=\delta_0(\varphi)$ by [F13]. Thus $\partial T_H=\delta_0$ in $\mathcal D'(I)$. [F3, F8, F9, F10, F11, F12, F13, F19, F20, F21, step 1.1]

3.1 Suppose $v\in L^1_{\mathrm{loc}}(I;\mathbb K)$ were a weak derivative. Then [F14] and step 2.1 give $\int_Iv\varphi\,dx=\varphi(0)$ for every test $\varphi$. Choose one $\eta$ as in [F17]. For $0<\epsilon<1/2$, set $\varphi_\epsilon(x)=\eta(x/\epsilon)$; [F18] makes it smooth and its support is compactly contained in $(-\epsilon,\epsilon)\subset I$, so it is a test by [F10], with $\varphi_\epsilon(0)=1$ and $|\varphi_\epsilon|\le1$. For $K=[-1/2,1/2]$, [F22] gives $\int_K|v|<\infty$. The measurable sets $A_\epsilon=[-\epsilon,\epsilon]\subset K$ have $\lambda(A_\epsilon)=2\epsilon\to0$ by [F3]; [F16] on the restricted measure space $K$ gives $\int_{A_\epsilon}|v|\,dx\to0$. But [F20], [F7], and the support and bound of $\varphi_\epsilon$ give $1=\left|\int_Iv\varphi_\epsilon\,dx\right|\le\int_I|v\varphi_\epsilon|\,dx\le\int_{A_\epsilon}|v|\,dx\to0$, a contradiction. Hence no locally integrable function represents $\partial T_H$. [F3, F7, F8, F10, F14, F16, F17, F18, F20, F22, step 2.1, choose]

4.1 By [F15], membership of $H$ in any $W^{1,p}(I;\mathbb K)$ would require a locally integrable representative of its weak first derivative, which step 3.1 rules out for every $1\le p\le\infty$, including both endpoints. The assumption is exactly Countable Choice $\mathrm{AC}_\omega$ by [F1]; it is used through the interval-measure and compact-measure facts [F3, F4] and the interval FTC [F19]. The regular-distribution injection is not used, and no full Axiom of Choice or sequence of selections occurs. [F1, F3, F4, F15, F19, step 1.1, step 2.1, step 3.1] ∎
