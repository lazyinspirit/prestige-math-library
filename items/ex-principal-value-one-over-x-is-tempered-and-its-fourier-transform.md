---
id: ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform
kind: example
title: Principal value one over x is tempered and its fourier transform
status: draft
origin: pipeline
deps: [thm-finite-seminorm-bound-characterizes-tempered-distributions, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, thm-local-finite-order-characterization-of-distributions, thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant, def-countable-choice, thm-tempered-distributions-embed-continuously-in-distributions, def-multiplication-of-a-distribution-by-a-smooth-function, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-integral-triangle-inequality]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§5.2.3, equations (5.26)–(5.29), pp. 64–65; Fourier constant derived with (11.36)–(11.37), p. 128"
proof_strategy: direct
---

## Example

Assume Countable Choice.  The principal-value functional

$$\left\langle\operatorname{pv}\frac1x,\varphi\right\rangle =\lim_{\varepsilon\downarrow0} \int_{|x|>\varepsilon}\frac{\varphi(x)}x\,dx$$

is a tempered distribution on $\mathbb R$, and

$$\mathcal F\left(\operatorname{pv}\frac1x\right)(\xi) =-i\pi\operatorname{sgn}(\xi)$$

in $\mathcal S'(\mathbb R)$ for the negative-sign $2\pi$ normalization.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and
$\varphi\in\mathcal S(\mathbb R)$.

[F1] A finite Schwartz-seminorm estimate characterizes tempered
distributions, while its restriction gives the local finite-order condition
on compact tests
([[thm-finite-seminorm-bound-characterizes-tempered-distributions]],
[[thm-local-finite-order-characterization-of-distributions]]).

[F2] Multiplication by $x$ and Fourier multiplication/differentiation have the
published distributional meanings and exact constants
([[def-multiplication-of-a-distribution-by-a-smooth-function]],
[[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F3] The transforms of $1$ and $\delta_0$ are known with the $2\pi$
normalization
([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

[F4] Restriction $\mathcal S'\to\mathcal D'$ is injective, and a distribution
with zero derivative on connected $\mathbb R$ is constant
([[thm-tempered-distributions-embed-continuously-in-distributions]],
[[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]]).

[F5] Complex integration by parts on decaying lines and the integral triangle
inequality are available
([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]],
[[thm-integral-triangle-inequality]]).

## Verification

**Proof technique:** direct principal-value bound and a distributional ODE.

1.1 Symmetry cancels the constant term near zero, reducing the defining limit to two absolutely convergent integrals. [F1, F5]

$$\int_{0<|x|<1}\frac{\varphi(x)-\varphi(0)}x\,dx +\int_{|x|\geq1}\frac{\varphi(x)}x\,dx.$$

Both integrals are absolute.  The mean-value estimate and Schwartz decay give

$$\left|\left\langle\operatorname{pv}\frac1x,\varphi\right\rangle\right| \leq2p_{0,1}(\varphi)+p_{2,0}(\varphi),$$

because $\int_{|x|\geq1}|x|^{-3}dx=1$.  Thus the limit exists, [F1] proves
temperateness, and the same estimate restricts to a finite-order
$\mathcal D'$ functional. [F1, F5]

2.1 Test multiplication by the smooth coordinate function $x$. [F2, step 1.1]

$$\left\langle x\operatorname{pv}\frac1x,\varphi\right\rangle =\lim_{\varepsilon\downarrow0}\int_{|x|>\varepsilon}\varphi(x)dx =\int\varphi(x)dx.$$

Hence $x\operatorname{pv}(1/x)=1$. [F2, step 1.1]

3.1 Put $U=\mathcal F(\operatorname{pv}(1/x))$.  Transform step 2.1 and use the exact Fourier multiplication law and constant transform. [F2, F3, step 2.1]

$$-\frac1{2\pi i}U'=\delta_0,\qquad U'=-2\pi i\delta_0.$$

[F2, F3, step 2.1]

4.1 Integration by parts on the two half-lines gives $(\operatorname{sgn})'=2\delta_0$: indeed $-\int\operatorname{sgn}(x)\psi'(x)dx=2\psi(0)$ for every compact test $\psi$.  Thus $S=-i\pi\operatorname{sgn}$ satisfies $S'=-2\pi i\delta_0$, and $W=U-S$ has zero derivative.  The bounded function $\operatorname{sgn}$ is itself regular tempered by the elementary estimate $|\int\operatorname{sgn}\varphi|\leq\int|\varphi|\leq C p_{2,0}(\varphi)$. [F1, F5, step 3.1]

5.1 By [F4], the restriction of $W$ is a constant distribution $c$.  The principal value is odd under reflection, Fourier transformation commutes with reflection by its defining integral, and $S$ is odd; hence $W$ is odd.  A constant distribution is even, so $c=-c$ and $c=0$.  Injectivity in [F4] then makes $W=0$ already in $\mathcal S'$.  This proves $U=S$.  Countable Choice is used only through the cited Fourier, integration, and zero-derivative interfaces. [F4, step 4.1] ∎
