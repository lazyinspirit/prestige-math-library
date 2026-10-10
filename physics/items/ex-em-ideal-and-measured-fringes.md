---
id: ex-em-ideal-and-measured-fringes
kind: example
title: "An ideal electric-field zero and a declared detector-bin response"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 21
proof_strategy: direct
deps: [pthm-em-classical-interference, def-em-experiment-record-contract, def-em-plane-wave-definition, def-em-si-conventions, def-cross-product-in-r3, def-complex-conjugate-real-imaginary-part-and-modulus, def-euclidean-inner-product, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-integral-over-a-measurable-set, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, lem-of-sign-rules, def-countable-choice, cor-continuous-functions-are-borel-measurable, thm-borel-sets-are-lebesgue-measurable, lem-complex-conjugation-and-modulus-laws, thm-quarter-turn-values-and-shift-formulas, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-differentiability-implies-continuity, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-lebesgue-measure-is-a-complete-measure, thm-reals-ordered-field]
dependency_roles:
  pthm-em-classical-interference: physical-result
  def-em-experiment-record-contract: formulation-prerequisite
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-differentiability-implies-continuity: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-reals-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional classical-wave example separating an ideal pointwise electric zero from a declared measurable bin response with background. All measurable bins of positive measure and nonnegative measurable backgrounds remain allowed, with a response in $[0,+\\infty]$; a finite-rate interpretation requires a finite response and the declared apparatus/calibration dictionary. The finite-volume constant-positive-background case provides an explicit finite positive response despite the point zero. No data, sampling law, event probability or classical/quantum discrimination is inferred."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted, 236 pp.), Chapter 4 on waves; used for the wave-interference and intensity conventions"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 4.3.1 'Solving the Wave Equation' printed pp. 84-87 (the plane-wave solution (4.15)-(4.16), the principle of superposition and the complex notation (4.17) with the warning that quadratic quantities require the real part) and Section 4.3.2 'Polarisation' printed pp. 87-89, read in the stamped complete 236-page author-hosted text; used only for the classical superposition and interference conventions, with the detector model declared separately in the statement"
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (GUM 1995 with minor corrections), 134 PDF pages"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
      locator: "Clause 3.3.2 (enumerated sources of uncertainty, including finite resolution and incomplete definition of the measurand, printed p. 6) and clause 4.1.1 (the measurement model, printed pp. 8-9), read in the complete PDF; used for the declared-response and background vocabulary of the bin model"
---

## Example

Adopt the two-beam data and conclusions of [[pthm-em-classical-interference]]:
for $v\in\mathbb C^3$ write $|v|^2:=\sum_{j=1}^3v_j\overline{v_j}
=\sum_{j=1}^3|v_j|^2$, using the scalar conjugation and modulus of
[[def-complex-conjugate-real-imaginary-part-and-modulus]]; this agrees with
the Euclidean squared norm on real vectors. Use
the complex electric amplitude $\alpha(x)=a_1e_1+a_2e_2e^{i\delta(x)}$ and
magnetic amplitude $\beta(x)=a_1b_1+a_2b_2e^{i\delta(x)}$ of its clause (a),
with $\delta(x)=(k_2-k_1)\cdot x$, $b_j=k_j\times e_j/\omega$
([[def-cross-product-in-r3]]) and the plane-wave solutions $(E_j,B_j)$ of
[[def-em-plane-wave-definition]]; and its clause (b) averaged energy density
$$\langle u\rangle(x)=\frac{\varepsilon_0}{4}|\alpha(x)|^2+\frac{1}{4\mu_0}|\beta(x)|^2$$
with the SI constants of [[def-em-si-conventions]], and assume the Axiom of
Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) exactly as
inherited by the Lebesgue-measure and integral items cited in clause (ii),
which are stated under that hypothesis; no other choice principle is used.
Assume dimensionless $a_1=a_2=:a>0$, $e_1=e_2=:e$ with real amplitude vector $e$, and
$k_1\ne k_2$ with $(k_2-k_1)\times e\ne0$; let $x_0$ be a point with
$\delta(x_0)\equiv\pi\pmod{2\pi}$.

(i) [Ideal prediction and its vanishing] At such $x_0$ one has
$\alpha(x_0)=ae(1+e^{i\delta(x_0)})=0$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]),
hence the electric field of the superposition vanishes at $x_0$ for every $t$
and the electric term of the averaged energy density vanishes there. The full
averaged energy density need not vanish:
$\beta(x_0)=a(b_1-b_2)=a\bigl((k_1-k_2)\times e\bigr)/\omega\ne0$, so
$\langle u\rangle(x_0)=|a(b_1-b_2)|^2/(4\mu_0)>0$
([[def-euclidean-inner-product]] for the positive-definite norm). Thus a claim
that 'the ideal intensity vanishes at $x_0$' must name the quantity that
vanishes.

(ii) [Declared bin response and its finite-rate branch] Adopt a declared
detector model with a Lebesgue-measurable bin $W\subseteq\mathbb R^3$,
$x_0\in W$ and $\lambda_3(W)>0$, a finite real response coefficient
$\kappa\ge0$, and a declared nonnegative density $b:W\to[0,\infty)$ whose zero
extension $\tilde b$ (equal to $b$ on $W$ and to $0$ off $W$) is Lebesgue
measurable; this measurability of the zero extension is a declared hypothesis
of the detector model. The declared response functional uses numerical values
in fixed declared units:
spatial coordinates are in metres, so $\lambda_3$ carries $\mathrm m^3$;
$\alpha$ carries $\mathrm V\,\mathrm m^{-1}$ as in
[[def-em-plane-wave-definition]]. Fix a declared SI unit $\mathsf U$ of
accumulated response (possibly dimensionless); a response rate means response
per unit time, in $\mathsf U\,\mathrm s^{-1}$. Declare $\kappa$ in
$\mathsf U\,\mathrm s^{-1}\,\mathrm V^{-2}\,\mathrm m^{-1}$ and $b$ (including
any constant $b_0$) in $\mathsf U\,\mathrm s^{-1}\,\mathrm m^{-3}$. Thus
$\kappa|\alpha|^2+b$ is a response-rate density in
$\mathsf U\,\mathrm s^{-1}\,\mathrm m^{-3}$, and $R(W)$ carries
$\mathsf U\,\mathrm s^{-1}$. This is a declared response model, without an
empirical identification with a detector output. It is defined by the nonnegative
Lebesgue integral
$$R(W):=\int_W\bigl(\kappa|\alpha(x)|^2+b(x)\bigr)\,d\lambda_3\in[0,+\infty].$$
Here the continuous real function $|\alpha|^2$ is Borel measurable by
[[cor-continuous-functions-are-borel-measurable]] and Lebesgue measurable by
[[thm-borel-sets-are-lebesgue-measurable]]; closure under nonnegative scaling
and addition is supplied by
[[prop-closure-properties-of-measurable-functions-used-by-the-integral]], and
[[def-integral-over-a-measurable-set]] defines the extended integral. No
boundedness or finite-volume condition on $W$ is imposed. If
$\int_W b\,d\lambda_3>0$, monotonicity gives
$$R(W)\ge\int_W b\,d\lambda_3>0$$ even though $|\alpha(x_0)|^2=0$. For a
constant $b=b_0>0$ this lower bound is $b_0\lambda_3(W)$ by
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]; it may be
$+\infty$. The *finite predicted rate* branch additionally requires
$R(W)<\infty$, in the response-rate units just declared. A concrete sufficient case is
$0<\lambda_3(W)<\infty$ and constant $0<b_0<\infty$: the bound
$|\alpha|^2\le4a^2|e|^2$ gives
$$0<b_0\lambda_3(W)\le R(W)\le(4\kappa a^2|e|^2+b_0)\lambda_3(W)<\infty.$$
For $\kappa=0$ the field contribution is the zero function, without forming
$0\cdot(+\infty)$. Identifying a finite predicted response with a recorded
comparison quantity still requires the apparatus, calibration and analysis
declarations of [[def-em-experiment-record-contract]]. Thus a finite positive
bin prediction is compatible with the ideal pointwise zero, but an extended
infinite response is not a recorded finite rate, and neither response is an
event probability.

(iii) [Record versus prediction; statistical qualification] The data of
[[def-em-experiment-record-contract]] are a finite tuple of real recorded
values or reported observations with declared conditions, calibration and
uncertainty. The predictions of (i)-(ii) are deterministic field quantities or
a declared extended response functional, with a finite real rate only on its
stated finite branch. Here an ideal fringe pattern describes spatial variation
of a specified intensity or response; a single detection and a finite data
tuple are separate records. Whether a finite record displays a specified
visibility or pattern requires a declared criterion, calibration, binning,
background and sampling assumptions, none supplied by the field calculation
alone. No sampling law, probability of failing a visibility criterion,
detection statistics or measured histogram is asserted. This example
discriminates no classical or quantum ontology: classical electromagnetic
waves interfere and the coherence calculation is a deterministic prediction of
the classical model.

## Verification

**Proof technique:** direct substitution, the elementary periodicity of the
complex exponential phase, and the declared measure-theoretic interface.

**Given:** the two-beam data of [[pthm-em-classical-interference]] clauses
(a)-(b) with $a_1=a_2=a>0$, $e_1=e_2=e$, $k_1\ne k_2$,
$(k_2-k_1)\times e\ne0$ and a point $x_0$ with
$\delta(x_0)\equiv\pi\pmod{2\pi}$; the declared detector model of clause (ii)
with measurable bin $W\ni x_0$, $\lambda_3(W)>0$, $\kappa\ge0$ and
nonnegative density $b$ whose zero extension $\tilde b$ is Lebesgue
measurable; the Axiom of Countable Choice $\mathrm{AC}_\omega$; the SI
constants of [[def-em-si-conventions]].

[F1] Clause (a) of [[pthm-em-classical-interference]] gives, at each fixed
$x$, $E(x,t)=\operatorname{Re}(\alpha(x)\,e^{i(k_1\cdot x-\omega t)})$ and
$B(x,t)=\operatorname{Re}(\beta(x)\,e^{i(k_1\cdot x-\omega t)})$ with
$\alpha(x):=a_1e_1+a_2e_2e^{i\delta(x)}$,
$\beta(x):=a_1b_1+a_2b_2e^{i\delta(x)}$, $\delta(x):=(k_2-k_1)\cdot x$,
$b_j=k_j\times e_j/\omega$ and $\omega>0$.

[F2] Clause (b) of [[pthm-em-classical-interference]] gives
$\langle u\rangle(x)=\frac{\varepsilon_0}{4}|\alpha(x)|^2+\frac{1}{4\mu_0}|\beta(x)|^2$
for every $x$.

[F3] For $u,v\in\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$
([[def-cross-product-in-r3]]).

[F4] The Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$ and
the Euclidean norm is $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$; the form
is positive definite: $\langle x,x\rangle\ge0$, and $\langle x,x\rangle=0$ if
and only if $x=0$ ([[def-euclidean-inner-product]]).

[F5] For all $z,w\in\mathbb C$, $z\overline z=|z|^2$, $|z|\ge0$,
$|z|=0\Longleftrightarrow z=0$, $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$
([[lem-complex-conjugation-and-modulus-laws]]).

[F6] For real $x,y$ one has $\exp(x+iy)=e^x(\cos y+i\sin y)$ and
$|\exp(x+iy)|=e^x$; in particular $\exp(i\theta)=\cos\theta+i\sin\theta$ for
real $\theta$, and $e^{i\pi}+1=0$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] For every real $x$, $\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$, and
in particular $\sin\pi=0$ and $\cos\pi=-1$
([[thm-quarter-turn-values-and-shift-formulas]]).

[F8] The framework's magnetic constant satisfies $\mu_0>0$
([[def-em-si-conventions]]).

[F9] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the statement that
every at most countable family of nonempty sets has a choice function
([[def-countable-choice]]).

[F10] A set $E\subseteq\mathbb R^n$ is Lebesgue measurable when
$\lambda_n^*(A)=\lambda_n^*(A\cap E)+\lambda_n^*(A\setminus E)$ for every
$A\subseteq\mathbb R^n$, and $\lambda_n$ is the restriction of $\lambda_n^*$
to the family $\mathcal L(\mathbb R^n)$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F11] Under $\mathrm{AC}_\omega$, $\mathcal L(\mathbb R^n)$ is a sigma-algebra
on $\mathbb R^n$ and $\lambda_n$ is a measure on it
([[thm-lebesgue-measure-is-a-complete-measure]], clause 1).

[F12] Under $\mathrm{AC}_\omega$, every continuous map
$f:\mathbb R^n\to\mathbb R^m$ is Borel measurable
([[cor-continuous-functions-are-borel-measurable]]).

[F13] Under $\mathrm{AC}_\omega$, $\mathcal B(\mathbb R^n)\subseteq\mathcal
L(\mathbb R^n)$: every Borel subset of $\mathbb R^n$ is Lebesgue measurable
([[thm-borel-sets-are-lebesgue-measurable]]).

[F14] For a measure space $(X,\mathcal A,\mu)$, a measurable
$f:X\to[0,+\infty]$ and $E\in\mathcal A$, the integral over $E$ is
$\int_E f\,d\mu:=\int f\chi_E\,d\mu$
([[def-integral-over-a-measurable-set]]).

[F15] If $f,g:X\to\overline{\mathbb R}$ are measurable and $f+g$ is defined
pointwise, then $f+g$ is measurable; if $c\in\mathbb R$ and $f:X\to\mathbb R$
is measurable, then $cf$ is measurable
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[F16] For measurable $f,g:X\to[0,+\infty]$ and $c\ge0$: if $f\le g$ then
$\int f\,d\mu\le\int g\,d\mu$; if $c>0$ then $\int cf\,d\mu=c\int f\,d\mu$;
and for $c=0$ the integral of the zero function is $0$
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F17] A nonnegative simple measurable function $s=\sum_{j=1}^m c_j\chi_{E_j}$
has simple integral $\int s\,d\mu:=\sum_{j=1}^m c_j\mu(E_j)$ with the
convention $0\cdot(+\infty)=0$
([[def-integral-of-a-nonnegative-simple-function]]).

[F18] If $s$ is a nonnegative simple measurable function, then its
nonnegative Lebesgue integral equals its simple integral,
$\int s\,d\mu=\int_{\mathrm{simple}}s\,d\mu$
([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F19] The complex exponential is entire, and $\exp'(z)=\exp z$ for every
$z\in\mathbb C$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F20] If $f:U\to\mathbb C$ is complex differentiable at $a\in U$, then $f$ is
continuous at $a$ ([[cor-complex-differentiability-implies-continuity]]).

[F21] For $k\in\mathbb N$, finite componentwise sums and products of $C^k$
Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps
is $C^k$
([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F22] In an ordered field, $a>0$ and $b>0$ imply $ab>0$
([[lem-of-sign-rules]]), and $\mathbb R$ is a totally ordered field
([[thm-reals-ordered-field]]).

[F23] A record of [[def-em-experiment-record-contract]] is a finite tuple of
recorded data and reported observations with declared condition annotations,
and it contains no probability space, random variable, distribution, sampling
law, independence assumption, likelihood or coverage statement (clause (d)).

1.1 Since $\delta(x_0)\equiv\pi\pmod{2\pi}$, there is an integer $n$ with $\delta(x_0)=\pi+2\pi n$; the cartesian form of [F6] gives $e^{i\delta(x_0)}=\cos\delta(x_0)+i\sin\delta(x_0)$, and [F7] gives $\cos(y+2\pi)=-\cos(y+\pi)=\cos y$ and $\sin(y+2\pi)=-\sin(y+\pi)=\sin y$ for every real $y$, so by induction on $|n|$ one has $\cos(\pi+2\pi n)=\cos\pi=-1$ and $\sin(\pi+2\pi n)=\sin\pi=0$; hence $e^{i\delta(x_0)}=-1$. [F6, F7, given, algebra]

1.2 [Regularity of $\alpha$] The phase $x\mapsto\delta(x)=(k_2-k_1)\cdot x$ is an affine map $\mathbb R^3\to\mathbb R$, hence of class $C^\infty$; the exponential is entire [F19], hence complex differentiable everywhere and continuous [F20]; by the algebra-and-composition closure of [F21] the composite $x\mapsto e^{i\delta(x)}$ and the finite combinations defining the components of $\alpha=a_1e_1+a_2e_2e^{i\delta(x)}$ of [F1] are continuous, and the modulus squared $|\alpha|^2=\alpha\cdot\overline\alpha$ [F5] is a finite sum of products of continuous real functions, hence continuous on $\mathbb R^3$. [F1, F4, F5, F19, F20, F21, algebra]

1.3 [Constant background] For a constant $b=b_0>0$ the zero extension is the nonnegative simple function $\tilde b=b_0\chi_W$ with $W\in\mathcal L(\mathbb R^3)$ [F10, F11]; its simple integral is $b_0\lambda_3(W)$ by [F17] and equals its Lebesgue integral by [F18], so $\int_W b\,d\lambda_3=b_0\lambda_3(W)$ by [F14], a value in $(0,+\infty]$ that may be $+\infty$ when $\lambda_3(W)=+\infty$. [F9, F10, F11, F14, F17, F18, given, algebra]

1.4 [Zero response coefficient] For $\kappa=0$ the field contribution is the zero function because $|\alpha|^2$ is real-valued, so no product $0\cdot(+\infty)$ is formed; then $\int_W\kappa|\alpha|^2\,d\lambda_3=0$ by the $c=0$ clause of [F16], and $R(W)=\int_W b\,d\lambda_3$; in particular the response remains defined in $[0,+\infty]$ on every measurable bin. [F14, F16, given, algebra]

2.1 Substituting the amplitude data of [F1] and step 1.1 gives $\alpha(x_0)=a_1e_1+a_2e_2e^{i\delta(x_0)}=ae\,(1+(-1))=0$, using $a_1=a_2=a$ and $e_1=e_2=e$. [F1, step 1.1, given, algebra]

2.2 For $\beta(x_0)$: substituting $a_1=a_2=a$, $e_1=e_2=e$ and step 1.1 into [F1] gives $\beta(x_0)=a(b_1-b_2)$, and $b_1-b_2=k_1\times e/\omega-k_2\times e/\omega=\bigl((k_1-k_2)\times e\bigr)/\omega$ by the coordinate bilinearity of [F3]; if $\beta(x_0)=0$ then multiplying by the nonzero scalar $\omega/a$ (nonzero because $a>0$ and $\omega>0$ from [F1]) gives $(k_1-k_2)\times e=-(k_2-k_1)\times e=0$ by [F3], contrary to the hypothesis $(k_2-k_1)\times e\ne0$; hence $\beta(x_0)\ne0$. [F1, F3, given, step 1.1, algebra]

2.3 [Integrand measurability and the response functional] Under $\mathrm{AC}_\omega$ the family $\mathcal L(\mathbb R^3)$ is a sigma-algebra and $\lambda_3$ a measure on it [F11], and the bin $W$ is measurable with $\lambda_3(W)$ defined [F10]; $|\alpha|^2$ is continuous by step 1.2, hence Borel measurable [F12] and Lebesgue measurable [F13]; since $\kappa\in\mathbb R$, the scaled function $\kappa|\alpha|^2$ is measurable by [F15], and the sum $\kappa|\alpha|^2+\tilde b$ is measurable by [F15] because $\tilde b$ is real-valued and measurable by the declared detector model; consequently [F14] defines $R(W):=\int_W(\kappa|\alpha|^2+b)\,d\lambda_3=\int(\kappa|\alpha|^2+\tilde b)\chi_W\,d\lambda_3\in[0,+\infty]$. [F9, F10, F11, F12, F13, F14, F15, step 1.2, given, algebra]

2.4 [Finite-rate branch] Suppose $0<\lambda_3(W)<\infty$ and $b\equiv b_0$ with $0<b_0<\infty$. For every $x$ one has $|e^{i\delta(x)}|=1$ by [F6], so $|1+e^{i\delta(x)}|\le1+|e^{i\delta(x)}|=2$ by the triangle inequality of [F5], and $|\alpha(x)|=|a|\,|e|\,|1+e^{i\delta(x)}|\le2a|e|$ by the multiplicative law of [F5], where $|e|^2=\langle e,e\rangle$ is the Euclidean squared norm of the real amplitude [F4]; hence $|\alpha|^2\le4a^2|e|^2$ and, since $\kappa\ge0$, the pointwise bounds $b_0\chi_W\le(\kappa|\alpha|^2+b_0)\chi_W\le C\chi_W$ hold with the finite real constant $C:=4\kappa a^2|e|^2+b_0$. Monotonicity and the simple-integral values of step 1.3 and [F17], [F18] give $0<b_0\lambda_3(W)\le R(W)\le C\lambda_3(W)<\infty$, the strict lower bound by the sign rule $b_0\lambda_3(W)>0$ of [F22] applied to $b_0>0$ and $\lambda_3(W)>0$; this proves a finite positive numerical response. By the units declared in clause (ii), $\kappa|\alpha|^2$ and $b_0$ both carry $\mathsf U\,\mathrm s^{-1}\,\mathrm m^{-3}$, while $\lambda_3$ carries $\mathrm m^3$, so $R(W)$ is a finite positive predicted response rate in $\mathsf U\,\mathrm s^{-1}$. [F1, F4, F5, F6, F14, F15, F16, F17, F18, F22, given, step 1.3, algebra]

3.1 By clause (a) of [F1], $E(x_0,t)=\operatorname{Re}\bigl(\alpha(x_0)\,e^{i(k_1\cdot x_0-\omega t)}\bigr)=\operatorname{Re}(0)=0$ for every real $t$; hence the electric field of the superposition vanishes at $x_0$ at every time, and with step 2.1 the electric term $\frac{\varepsilon_0}{4}|\alpha(x_0)|^2$ of the averaged density of [F2] vanishes there. [F1, F2, step 2.1, algebra]

3.2 [F2] and step 2.1 give $\langle u\rangle(x_0)=\frac{\varepsilon_0}{4}|\alpha(x_0)|^2+\frac{1}{4\mu_0}|\beta(x_0)|^2=\frac{1}{4\mu_0}|\beta(x_0)|^2$; since $\beta(x_0)\ne0$ by step 2.2, positive definiteness [F4] and the modulus law $|z|=0\Longleftrightarrow z=0$ of [F5] give $|\beta(x_0)|^2>0$, and $\mu_0>0$ from [F8] gives $1/(4\mu_0)>0$, so the sign rules [F22] yield $\langle u\rangle(x_0)>0$; thus the full averaged energy density does not vanish at $x_0$, only its electric term does. [F2, F4, F5, F8, F22, step 2.1, step 2.2, algebra]

3.3 [General background lower bound] The functions $\tilde b$ and $\kappa|\alpha|^2+\tilde b$ are measurable, nonnegative and finite-valued, with $\tilde b\le\kappa|\alpha|^2+\tilde b$ pointwise because $|\alpha|^2\ge0$ [F5] and $\kappa\ge0$; the monotonicity clause of [F16] and $R(W)=\int(\kappa|\alpha|^2+\tilde b)\chi_W\,d\lambda_3$ of step 2.3 give $\int_W b\,d\lambda_3=\int\tilde b\chi_W\,d\lambda_3\le R(W)$, so $\int_W b\,d\lambda_3>0$ implies $R(W)\ge\int_W b\,d\lambda_3>0$ even though $|\alpha(x_0)|^2=0$ by step 2.1. [F14, F15, F16, step 2.1, step 2.3, algebra]

4.1 [Record versus prediction] The data of [F23] are finite tuples of recorded values or reported observations with declared conditions, calibration and uncertainty, and contain no sampling law; the predictions of steps 1.1-3.3 are deterministic field quantities or a declared extended response functional with a finite real rate only on the branch of step 2.4; a detection and a finite record are different objects from the ideal intensity, so no sampling law, probability of failing a visibility criterion, detection statistics or measured histogram is asserted here, and the finite positive bin prediction of step 2.4 is compatible with the pointwise ideal zero of steps 2.1 and 3.1 without discriminating the classical and quantum descriptions of light, since classical electromagnetic waves interfere. [F23, F1, step 2.1, step 3.1, step 2.3, step 3.3, step 2.4, given] ∎
