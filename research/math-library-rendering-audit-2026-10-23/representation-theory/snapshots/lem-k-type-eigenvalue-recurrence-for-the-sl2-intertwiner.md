---
id: lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
kind: lemma
title: "K-type eigenvalues of A(nu): recurrence, closed form and nonvanishing"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - def-standard-intertwining-operator-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-euler-beta-function
  - def-euler-gamma-function
  - thm-beta-gamma-identity
  - cor-gamma-one-half-value
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, formulas (2.5)–(2.6), printed pp. 10–11, and Exercise 2.8(i)–(iii), printed p. 12; the exercise supplies no solution, and the local proof derives the integral eigenvalues"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1, formulas (4)–(5), printed pp. 48–49, and §9.2 right-P realization, printed p. 50; parameter and left-action conventions are paired locally"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varepsilon\in\{0,1\}$, let $\nu\in\mathbb C$ with $\operatorname{Re}\nu>0$, and let $c_r(\nu)$ be the eigenvalue of $A(\nu)$ on the $K$-type $f_r$ for each $r\equiv\varepsilon\pmod2$ in [[def-standard-intertwining-operator-for-sl2-r]]. Then, for every such $r$,
$$(r+1+\nu)c_{r+2}(\nu)=(r+1-\nu)c_r(\nu),\qquad c_{-r}(\nu)=(-1)^r c_r(\nu).$$
When $r+1+\nu\ne0$, the first identity is equivalently
$$c_{r+2}(\nu)=c_r(\nu)\frac{r+1-\nu}{r+1+\nu};$$
at a zero denominator the cross-multiplied identity is the meaning of the recurrence. The scalar eigenvalues have the closed form
$$c_r(\nu)=(-i)^r\sqrt\pi\,\Gamma(\nu/2)\Gamma((\nu+1)/2)\frac{1}{\Gamma((\nu+r+1)/2)}\frac{1}{\Gamma((\nu-r+1)/2)},$$
where reciprocal Gamma is understood as its entire continuation, so this formula is valid for $\operatorname{Re}\nu>0$ and its right side gives the meromorphic continuation of each scalar eigenvalue. Define the two base scalars
$$b_0(\nu)=\int_{\mathbb R}(1+u^2)^{-(1+\nu)/2}du,\qquad b_1(\nu)=\int_{\mathbb R}(u-i)(1+u^2)^{-(2+\nu)/2}du.$$
Then $b_0=\sqrt\pi\Gamma(\nu/2)/\Gamma((\nu+1)/2)$ and $b_1=-i\sqrt\pi\Gamma((\nu+1)/2)/\Gamma((\nu+2)/2)$. For $\varepsilon=0$, $c_0=b_0$ is the base eigenvalue and $b_1$ is only a formal odd scalar; for $\varepsilon=1$, $c_1=b_1$ is the base eigenvalue and $b_0$ is only a formal even scalar.

For $m\in\mathcal W_\varepsilon$, $m\ge1$, the exceptional zero sets are exact: at $\nu=m$, $c_r(m)=0$ exactly for allowed $r$ with $|r|\ge m+1$; at $\nu=-m$, $c_r(-m)=0$ exactly for allowed $r$ with $|r|\le m-1$. In particular $c_{m-1}(m)\ne0$ and $c_{m+1}(-m)$ is finite and nonzero.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\operatorname{Re}\nu>0$, and the smooth compact-picture principal series.

[F1] For $\operatorname{Re}\nu>0$, the defining integral for $A(\nu)$ is absolutely convergent, smooth, covariant for $I_{\varepsilon,-\nu}$, right-$G$ intertwining, and diagonal on the allowed $K$-types. These initial-half-plane claims are verified in steps 1.1–4.1 of [[def-standard-intertwining-operator-for-sl2-r]]; this proof uses only those claims. The formal even scalar and its continuation needed when $\varepsilon=1$ are established below. The separate meromorphic continuation of the full operator family in that Definition is not assumed here.

[F2] The compact-picture action has $K$-types $\mathbb C f_r$ with $f_r(k_\theta)=e^{ir\theta}$ and $r\equiv\varepsilon\pmod 2$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]]). The exceptional lattice is $\mathcal W_0=2\mathbb Z+1$ and $\mathcal W_1=2\mathbb Z$ ([[def-normalized-principal-series-i-epsilon-nu]]).

[F3] The complex-linear derived action satisfies $L_{E_\pm}f_r=(1+\nu\pm r)f_{r\pm2}/2$ and preserves smooth vectors ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F4] For $\operatorname{Re}p,\operatorname{Re}q>0$, the Beta and Gamma integrals satisfy $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[def-euler-beta-function]], [[def-euler-gamma-function]], [[thm-beta-gamma-identity]]), and $\Gamma(1/2)=\sqrt\pi$ ([[cor-gamma-one-half-value]]).

[F5] Gamma has meromorphic continuation with simple poles of nonzero residue at the nonpositive integers, no zeros, and reciprocal Gamma is entire with simple zeros exactly there. Its functional equation holds meromorphically ([[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]]).

[F6] If $T:U\to V$ is a $C^1$ diffeomorphism of open Euclidean sets and $h\in L^1(V)$, then $\int_V h=\int_U(h\circ T)|\det DT|$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F7] $\mathcal L(\mathbb R)$ is the Lebesgue sigma-algebra, and a real or complex function is in $L^1$ when it is measurable and its absolute value has finite integral ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F8] Measurable restrictions of nonnegative functions are measurable, dominated nonnegative functions are integrable when the majorant is, and the integral over a measurable set is the integral of the indicator restriction ([[def-integral-over-a-measurable-set]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] A nonnegative integrable function has integral zero over a null set, and every singleton in $\mathbb R$ is null by the degenerate interval case ([[cor-integral-over-a-null-set-vanishes]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F10] The Lebesgue integral is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[A1] The item assumes full AC. It implies $\mathrm{AC}_\omega$ through [[def-countable-choice]], which supplies the countable-choice hypothesis in [F6] and the singleton-null supplier in [F7]. The algebraic and reflection calculations make no further choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** evaluate the integral on each $K$-type, differentiate its intertwining identity, and determine all scalars from one base index in each parity.

1.1 Put $R(u)=\sqrt{1+u^2}$ and $q_r(u)=(u-i)^rR(u)^{-1-\nu-r}$. At $g=I$, the bottom row of $wn_u$ is $(1,u)$, so the compact coordinate satisfies $e^{i\theta_u}=(u-i)/R(u)$. Thus the defining integral gives $c_r(\nu)=\int_{\mathbb R}q_r(u)\,du$. Also $b_0=\int_{\mathbb R}q_0$ and $b_1=\int_{\mathbb R}q_1(u)\,du$. For every integer $r$, $|q_r(u)|=R(u)^{-1-\operatorname{Re}\nu}$; this equals the absolute value of the defining integrand for any allowed mode, so it is integrable by [F1]. It also shows both formal base integrands are integrable when their parity is not allowed. [F1, F2, F7, algebra]

1.2 Differentiate the right-$G$ intertwining identity in [F1] along real Lie-algebra directions and extend complex-linearly as in [F3]. Applying $A(\nu)L_{E_+}^{\nu}=L_{E_+}^{-\nu}A(\nu)$ to $f_r$ gives $(r+1+\nu)c_{r+2}(\nu)=(r+1-\nu)c_r(\nu)$. This cross-multiplied identity holds even when $r+1+\nu=0$; division gives the ratio form only when that denominator is nonzero. [F1, F2, F3, algebra]

1.3 The even function $q_0$ is in $L^1(\mathbb R)$. For measurable $E$, write $\int_E q_0=\int_{\mathbb R}q_0\chi_E$; split real and imaginary parts into positive and negative parts, use [F8] for measurability of their restrictions, and use $|q_0\chi_E|\le |q_0|$ and [F7, F8] for integrability. The singleton $\{0\}$ is null by the degenerate interval case of [F9]; its complex integral is zero by applying the nonnegative null-integral result in [F9] to the four restricted parts and recombining by [F10]. The three indicators of $(-\infty,0)$, $\{0\}$, and $(0,\infty)$ sum to $1$, so [F10] splits the full integral into these subset integrals. Reflection $u\mapsto-u$ in [F6] equates the two open half-line integrals, giving $b_0=2\int_0^\infty q_0(u)\,du$. The inverse change of variables for $t=u^2/(1+u^2)$ is $u=\sqrt{t/(1-t)}$ with derivative $1/(2\sqrt t(1-t)^{3/2})$. Applying [F6] to this inverse diffeomorphism and the $L^1$ function $q_0$ gives $b_0=B(1/2,\nu/2)$; these Beta parameters have positive real parts because $\operatorname{Re}\nu>0$. By [F4], this equals $\sqrt\pi\,\Gamma(\nu/2)/\Gamma((\nu+1)/2)$. [F1, F4, F6, F7, F8, F9, F10, A1, algebra]

2.1 Put $h_1(u)=(1+u^2)^{-1-\nu/2}$. Both $h_1$ and $u h_1$ are in $L^1$: pointwise $|h_1(u)|\le |(u-i)h_1(u)|$ and $|u h_1(u)|\le |(u-i)h_1(u)|$, and the latter is the absolutely integrable formal base integrand by step 1.1. Reflection in [F6] sends $u h_1(u)$ to its negative, so its full integral is zero. The same indicator splitting, reflection and null-singleton argument as in step 1.3 give $\int_{\mathbb R}h_1=2\int_0^\infty h_1$. The inverse substitution from step 1.3 now gives $\int_{\mathbb R}h_1=B(1/2,(\nu+1)/2)$; these Beta parameters have positive real parts because $\operatorname{Re}\nu>0$. By linearity and [F4], $b_1=\int_{\mathbb R}(u-i)h_1(u)\,du=-i\sqrt\pi\,\Gamma((\nu+1)/2)/\Gamma((\nu+2)/2)$. Thus $c_0=b_0$ when $\varepsilon=0$ and $c_1=b_1$ when $\varepsilon=1$; the other scalar is only a formal base integral. [F1, F4, F6, F7, F8, F9, F10, step 1.1, step 1.3, algebra]

2.2 The density formula gives $q_{-r}(u)=(-1)^r q_r(-u)$ for every integer $r$. Since both sides are integrable by step 1.1, the $C^1$ reflection $u\mapsto-u$ in [F6] yields $c_{-r}(\nu)=(-1)^r c_r(\nu)$ directly, with no division by a recurrence coefficient. [F6, step 1.1, algebra]

3.1 Define $\widetilde c_r(\nu)$ by the Gamma formula in the Statement and set $x=(\nu+r+1)/2$, $y=(\nu-r+1)/2$. The Gamma functional equation gives $\widetilde c_{r+2}=-(y-1)x^{-1}\widetilde c_r=\frac{r+1-\nu}{r+1+\nu}\widetilde c_r$ wherever this ratio is defined, so $(r+1+\nu)\widetilde c_{r+2}=(r+1-\nu)\widetilde c_r$ holds meromorphically, including at zero denominators. Swapping the denominator factors and using $(-i)^{-2r}=(-1)^r$ gives $\widetilde c_{-r}=(-1)^r\widetilde c_r$. The substitutions in steps 1.3 and 2.1 give $\widetilde c_0=b_0=c_0$ for even parity and $\widetilde c_1=b_1=c_1$ for odd parity. For $r\ge0$, $r+1+\nu\ne0$ on $\operatorname{Re}\nu>0$, so the recurrence determines every nonnegative allowed index from that base; step 2.2 determines the negative indices. Hence $c_r=\widetilde c_r$ on the initial half-plane, and the Gamma expression supplies the meromorphic continuation of each scalar without asserting convergence of the original integral outside that half-plane. At $\nu=0$, for even $r$ the denominator arguments are half-integers, so the numerator pole remains; for odd $r$, exactly one denominator argument is a nonpositive integer, whose reciprocal zero cancels the numerator pole and leaves a finite nonzero value. [F4, F5, step 1.2, step 1.3, step 2.1, step 2.2]

4.1 Let $m\in\mathcal W_\varepsilon$ be positive. Then $m$ and every allowed $r$ have opposite parity, so all four denominator arguments at $\nu=\pm m$ are integers. At $\nu=m$, both arguments are positive for $|r|\le m-1$, making the Gamma quotient finite and nonzero; for $|r|\ge m+1$, exactly one argument is nonpositive, so its reciprocal-Gamma factor vanishes and the numerator is finite. At $\nu=-m$, exactly one numerator Gamma factor has a simple pole and the other is finite and nonzero. If $|r|\le m-1$, both denominator arguments are nonpositive integers, so their two simple reciprocal-Gamma zeros leave a zero after multiplication by the single numerator pole. If $|r|\ge m+1$, exactly one denominator argument is a nonpositive integer and the other is positive; its simple reciprocal-Gamma zero cancels the numerator pole and leaves a finite nonzero value. In particular, the denominator arguments at $r=m-1,\nu=m$ are $m,1$, and at $r=m+1,\nu=-m$ they are $1,-m$, proving the two stated boundary values. These cases prove both directions of the exact zero-set assertions. [F5, step 3.1, algebra] ∎

## Remarks

Kerr's formulas (2.5)–(2.6) use the same compact-picture ladder normalization and give the same derived-action coefficients. His Exercise 2.8 asks for the intertwiner properties and K-type computation without supplying a solution; the integral eigenvalues and their continuation are derived above. Kerr's Weyl matrix is $-w$ relative to the $w$ fixed in [[def-standard-intertwining-operator-for-sl2-r]], so its integral eigenvalues differ by $(-1)^\varepsilon$ in parity $\varepsilon$.

Etingof's §9.1 formulas (4)–(5) use an abstractly normalized $(\mathfrak{sl}_2,K)$ basis, and §9.2 uses a right-$P$-covariant model with left $G$-action. In that model $F(gb)=|t(b)|^{s-1}\sigma_\varepsilon(t(b))F(g)$, while inversion of the present left-$P$ model gives exponent $-1-\nu$ and hence $s=-\nu$. This is a convention and ladder check; it does not supply the integral eigenvalue constants proved here.
