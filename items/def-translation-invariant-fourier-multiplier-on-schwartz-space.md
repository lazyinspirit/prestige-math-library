---
id: def-translation-invariant-fourier-multiplier-on-schwartz-space
kind: definition
title: Translation-invariant Fourier multiplier on the Schwartz core
status: draft
origin: pipeline
deps:
  - def-schwartz-space-and-its-seminorms
  - def-fourier-transform-of-a-tempered-distribution
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - def-tempered-distribution
  - lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space
  - thm-fourier-translation-modulation-dilation-and-reflection-laws
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - lem-schwartz-functions-and-all-derivatives-are-integrable
  - def-countable-choice
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.5.5, Definition 2.5.11 and the discussion of the partial domain of a multiplier, printed pp. 155-156"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.9, Definition 3.11, printed p. 12"
---

## Definition

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. The Fourier
transform is the negative-sign $2\pi$-normalized transform of
[[def-fourier-transform-of-a-tempered-distribution]]: on a Schwartz function
it is the integral transform $\widehat f(\xi)=\int_{\mathbb R^n}
f(x)e^{-2\pi ix\cdot\xi}\,dx$, and on $\mathcal S'(\mathbb R^n)$ it is its
bilinear transpose, an automorphism with inverse $\mathcal F^{-1}$
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

Fix a measurable symbol $m:\mathbb R^n\to\mathbb C$. Define its **Schwartz
domain**
$$D_m=\{f\in\mathcal S(\mathbb R^n): m\widehat f\text{ is locally integrable and its regular distribution is tempered}\}.$$
Here $m\widehat f$ is the ordinary pointwise product of the measurable symbol
with the Schwartz function $\widehat f$. For a locally integrable function
$g$, its regular distribution initially means
$\varphi\mapsto\int_{\mathbb R^n}g(\xi)\varphi(\xi)\,d\xi$ on
$C_c^\infty(\mathbb R^n)$. Saying that this distribution is tempered means
that this functional extends continuously to $\mathcal S(\mathbb R^n)$.
The extension is unique because $C_c^\infty$ is dense in $\mathcal S$
([[lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space]]);
we denote it by $u_g$. Local integrability alone does not guarantee an
absolutely convergent integral against every Schwartz test. For $f\in D_m$
the extension exists by hypothesis, and we set
$$T_mf:=\mathcal F^{-1}\bigl(u_{m\widehat f}\bigr)\in\mathcal S'(\mathbb R^n),\qquad T_m:\mathcal S\supseteq D_m\to\mathcal S'.$$
The domain qualification is part of the definition: no boundedness of $T_m$,
no density of $D_m$ in $\mathcal S$, no continuity of $m\mapsto T_m$ and no
action of $T_m$ on $L^p$ is asserted. In particular this definition does not
assert that $D_m=\mathcal S$; the zero function always belongs to $D_m$.

**Translation.** For $u\in\mathcal S'(\mathbb R^n)$ and $a\in\mathbb R^n$
define the translate $\tau_au$ by transposition,
$$\langle\tau_au,\varphi\rangle:=\langle u,\varphi(\cdot+a)\rangle,\qquad \varphi\in\mathcal S(\mathbb R^n).$$
This is a tempered distribution: translation is a continuous complex-linear
endomorphism of $\mathcal S(\mathbb R^n)$
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]),
so the composition is a continuous complex-linear functional
([[def-tempered-distribution]]). On functions, $\tau_af(x)=f(x-a)$ for
$a\in\mathbb R^n$.

**Translation invariance of the domain and of the operator.** If $f\in D_m$
and $a\in\mathbb R^n$, then $\tau_af\in D_m$ and
$$T_m\tau_af=\tau_aT_mf.$$
*Justification.* Write $e_{-a}(\xi)=e^{-2\pi ia\cdot\xi}$. First,
$\mathcal F(\tau_af)=e_{-a}\widehat f$: the integral formula is the
translation law for the $L^1$ transform, applicable because Schwartz
functions are integrable
([[lem-schwartz-functions-and-all-derivatives-are-integrable]],
[[thm-fourier-translation-modulation-dilation-and-reflection-laws]]), and the
distributional transform of the integrable function $\tau_af$ is the regular
distribution of its integral transform
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).
Second, with $g=m\widehat f$, the product $m\mathcal F(\tau_af)=e_{-a}g$ is
locally integrable, and its regular distribution satisfies
$\langle u_{e_{-a}g},\varphi\rangle=\langle u_g,e_{-a}\varphi\rangle$ for every
compactly supported smooth test $\varphi$; since $e_{-a}$ is smooth with polynomially bounded derivatives,
[[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]] makes
$e_{-a}u_g$ a tempered extension of the regular distribution of
$e_{-a}g$. Uniqueness of extension gives $u_{e_{-a}g}=e_{-a}u_g$
on all Schwartz tests. Hence $\tau_af\in D_m$. Third, for
$u\in\mathcal S'$ one has $\mathcal F(\tau_au)=e_{-a}\mathcal Fu$: pairing both
sides with a Schwartz test $\varphi$ and using the definition of $\mathcal F$
on $\mathcal S'$ gives
$$\langle\mathcal F(\tau_au),\varphi\rangle =\langle\tau_au,\mathcal F\varphi\rangle =\langle u,\tau_{-a}\mathcal F\varphi\rangle =\langle u,\mathcal F(e_{-a}\varphi)\rangle =\langle e_{-a}\mathcal Fu,\varphi\rangle,$$
where the middle identity is the modulation law $\mathcal F(e^{-2\pi
ia\cdot x}\varphi)(\xi)=\widehat\varphi(\xi+a)$ of
[[thm-fourier-translation-modulation-dilation-and-reflection-laws]] and the
last identity is the definition of multiplication of a distribution by the
smooth symbol $e_{-a}$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]). Applying
this to $u=T_mf$ and combining the three computations,
$$\mathcal F(T_m\tau_af)=u_{e_{-a}g}=e_{-a}u_g=e_{-a}\mathcal F(T_mf)=\mathcal F(\tau_aT_mf).$$
Injectivity of $\mathcal F$ on $\mathcal S'$ now gives
$T_m\tau_af=\tau_aT_mf$.

The Countable Choice hypothesis is inherited only from the cited Fourier
interfaces; the transposition defining $\tau_a$ uses none.
