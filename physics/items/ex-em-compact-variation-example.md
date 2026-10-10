---
id: ex-em-compact-variation-example
kind: example
title: "A compact test variation and gauge-source sign check"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 18
deps: [def-em-field-action-definition,
       lem-em-compact-field-variation,
       pthm-em-action-gauge-source-compatibility,
       pthm-em-action-maxwell-variation,
       def-em-electromagnetic-tensor,
       def-em-si-conventions,
       def-em-sources,
       lem-test-function-cutoffs-and-euclidean-localization,
       thm-newton-leibniz-with-interior-derivative,
       thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       thm-integration-by-parts,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       lem-em-continuous-localization,
       def-integral-over-a-measurable-set,
       def-directional-and-partial-derivatives,
       def-countable-choice,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       thm-heine-borel-rn]
dependency_roles:
  def-em-field-action-definition: formulation-prerequisite
  lem-em-compact-field-variation: mathematical-premise
  pthm-em-action-gauge-source-compatibility: physical-result
  pthm-em-action-maxwell-variation: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-em-continuous-localization: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Worked computation in the smooth finite-region field action on a box: the explicit first variation of a constant-field potential vanishes with no boundary term, and the exact gauge difference of the action pins the relative sign between the source coupling, the gauge shift and source conservation, including a non-conserved source exhibiting both signs. Excluded: existence statements, numerical values of constants, and any global or empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.3"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed pp. 125-126: the variation display discarding the total derivative, and the gauge-shift paragraph $S\\to S-\\tfrac1c\\int\\chi\\,\\partial_\\mu J^\\mu$"
    - title: "James Binney, Classical Fields (University of Oxford lecture course 2006-2007, complete 95-page notes)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf"
      locator: "§3.6 printed pp. 30-31, eqs. (3.35)-(3.36): the other four Maxwell equations are geometric rather than variational"
proof_strategy: direct
---

## Example

**SI numerical values.** Throughout this example, a symbol for a physical
quantity denotes its real numerical value in the following fixed SI unit:
$x^\mu,u$ in m, $t$ in s, $c$ in m s$^{-1}$, $\mu_0$ in N A$^{-2}$,
$\varepsilon_0$ in F m$^{-1}$, $A^\mu,A_\mu,h^\mu,h_\mu$ in T m,
$F_{\mu\nu},F^{\mu\nu},B$ in T, $E$ in V m$^{-1}$, $\rho$ in C m$^{-3}$,
$j^\mu,J$ in A m$^{-2}$, the auxiliary gauge factors $\varphi_\pm$ and
gauge functions $\chi_\pm,\chi$ in T m$^2$, and $S$ in J s;
$s,\zeta,\psi$ are dimensionless. Precisely, if $q$ represents a quantity
with unit $u_q$, its physical field is
$q_{\rm phys}(X)=u_q q(X/(1\,\mathrm m))$, with the same rule componentwise
and $q_{\rm phys}=u_q q$ for constants. The box $U=(-1,1)^4$ thus represents
the physical coordinate box $(-1\,\mathrm m,1\,\mathrm m)^4$.
All derivatives and integrals below are with respect to these numerical
coordinates, so $F_{\rm phys}=(1\,\mathrm T)F$ and
$\partial^\sharp\chi_{\rm phys}=(1\,\mathrm{T\,m})\partial^\sharp\chi$.
The coherent SI units make the numerical action formula exactly that of
[[def-em-field-action-definition]], with
$S_{\rm phys}[A_{\rm phys}]=(1\,\mathrm{J\,s})S[A]$; the facts below use
the same numerical representations of the cited quantity formulas.

Assume Countable Choice, inherited from the cited theorems. Work in the
field-action setting of [[def-em-field-action-definition]] with $U=(-1,1)^4$,
constants $c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$
([[def-em-si-conventions]]), and the component dictionary of
[[def-em-electromagnetic-tensor]]: $F_{0i}=-E_i/c$, $F^{0i}=E_i/c$,
$F^{10}=-E_1/c$.

(a) [Source-free zero field] For $j\equiv0$ and $A=0$ the first-variation
coefficient (whose integral is multiplied by $c^{-1}$)
$-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu+j^\nu h_\nu$ of clause (a) of
[[lem-em-compact-field-variation]] vanishes identically for every
$h\in C_c^\infty(U;\mathbb R^4)$, because $F(A)=0$ and $j=0$; hence every
compact first variation of $S$ at $A=0$ is zero and $A=0$ is stationary.

(b) [A non-trivial compact test variation] Let $A$ be the smooth potential with
$A_0(x)=x^1$ and $A_1=A_2=A_3=0$, and let $j\equiv0$. Then
$F_{01}=-\partial_1A_0=-1$, $F^{01}=+1$, $F^{10}=-1$ and all other components
vanish, so the represented field is $E=(c,0,0)$, $B=0$ (clause (a) of
[[def-em-electromagnetic-tensor]]) and $\partial_\mu F^{\mu\nu}=0$ on $U$.
In quantities this is $A_{0,\rm phys}(X)=(1\,\mathrm T)X^1$ and
$E_{1,\rm phys}=c_{\rm phys}(1\,\mathrm T)$, in T m and V m$^{-1}$,
respectively. By
the equivalence of [[pthm-em-action-maxwell-variation]], $A$ is stationary;
directly, for every $h\in C_c^\infty(U;\mathbb R^4)$ the first variation of $S$
at $A$ is

$$\frac{d}{ds}\Big|_{s=0}S[A+sh]=-\frac{1}{c\mu_0}\int_U\bigl(\partial_0h_1-\partial_1h_0\bigr)d\lambda=\frac{1}{c\mu_0}\int_U\bigl(\partial_1h_0-\partial_0h_1\bigr)d\lambda=0,$$

where each of $\int_U\partial_0h_1\,d\lambda$ and $\int_U\partial_1h_0\,d\lambda$
vanishes by the fundamental theorem in one variable combined with Fubini, and
no boundary term appears because $h$ is compactly supported in $U$
([[thm-newton-leibniz-with-interior-derivative]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

(c) [Gauge-source sign check with actual overlap] Independently choose the
smooth prescribed source $j^0=c\rho(x^0)$, $j^i=0$, with nonzero nonnegative
$\rho\in C_c^\infty((-1/4,1/4))$ extended by zero. Choose
$0\le\zeta\in C_c^\infty((-1,1))$ with $\zeta=1$ near $[-1/2,1/2]$, and nonzero
nonnegative $\psi\in C_c^\infty((-1,1)^3)$, supplied by
[[lem-test-function-cutoffs-and-euclidean-localization]]. Put
$\varphi_\pm(u)=(2\pm u)\zeta(u)$ and
$\chi_\pm(x)=\varphi_\pm(x^0)\psi(x^1,x^2,x^3)$. Both $\varphi_\pm$ are
nonnegative compact bumps, but they are not globally monotone: on the entire
support of $\rho$ their derivatives equal $+1$ and $-1$, respectively. Use the
contravariant gauge variations
$(\partial^\sharp\chi_\pm)^\mu=\eta^{\mu\nu}\partial_\nu\chi_\pm$ from
[[pthm-em-action-gauge-source-compatibility]]. Then, for every smooth potential
$A$ on a neighbourhood of $\overline U$,

$$S[A+\partial^\sharp\chi_\pm]-S[A]=\Bigl(\int_{-1}^1\rho\varphi_\pm'\,dx^0\Bigr)\Bigl(\int_{(-1,1)^3}\psi\,d^3x\Bigr)=\pm\Bigl(\int\rho\Bigr)\Bigl(\int\psi\Bigr),$$

which is strictly positive for $+$ and strictly negative for $-$, since both
factors are positive. Integration by parts gives exactly the same value as
$-c^{-1}\int_U(\partial_\mu j^\mu)\chi_\pm d\lambda$ with
$\partial_\mu j^\mu=c\rho'$. This verifies the relative sign of the
$+j^\mu A_\mu$ coupling, the raised-vector/covariant-lowered gauge shift and
the conservation condition, using explicitly overlapping supports. If instead
$\rho$ is constant on the whole neighbourhood, the source is conserved and
every compact gauge difference is zero. No compact nonzero globally increasing
or decreasing function is used.

(d) [Scope] The example is an exact computation in the declared smooth
finite-region model; it asserts no existence of sources or fields, no numerical
value of $\mu_0$, and no global gauge statement.

## Facts & Assumptions

**Given:** The SI numerical-value convention above; Countable Choice; the field-action definition on the box $U=(-1,1)^4$ with smooth $A,j$ on a neighbourhood $N$ of $\overline U$, constants $c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ and the component dictionary; the linear potential $A_0=x^1$ of part (b); and the compactly supported data $\rho,\zeta,\psi$ and gauge directions $\partial^\sharp\chi_\pm$ of part (c).

[F1] The field action is $S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$ with $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, compactly supported smooth variations and the stationarity predicate ([[def-em-field-action-definition]]).

[F2] The compact-variation lemma states that the first variation of its functional at $A$ in the direction $h$ is $\int_U\bigl(-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu\bigr)d\lambda$, and that $A$ is stationary if and only if $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ on $U$ for every $\nu$ ([[lem-em-compact-field-variation]]).

[F3] The action-stationarity theorem states that, on the smooth class, stationarity of the field action under all compactly supported smooth variations is equivalent to $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ on $U$ for every $\nu$ ([[pthm-em-action-maxwell-variation]]).

[F4] The gauge-source theorem states: the field term is gauge invariant and $S[A+\partial^\sharp\chi]-S[A]=c^{-1}\int_Uj^\mu\partial_\mu\chi\,d\lambda$, with the equivalent distributional expression; for smooth sources, invariance under all compact gauge variations is equivalent to $\partial_\mu j^\mu=0$ on $U$ ([[pthm-em-action-gauge-source-compatibility]] (a)-(b)).

[F5] The component dictionary is $F_{0i}=-E_i/c$, $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-em-electromagnetic-tensor]] (a)).

[F6] The electric constant is $\varepsilon_0:=(\mu_0c^2)^{-1}$ ([[def-em-si-conventions]]).

[F7] The four-current convention is $j=(c\rho,J)$ ([[def-em-sources]]).

[F8] In ZF, for compact $K\subseteq\Omega\subseteq\mathbb R^n$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F9] If $G:[a,b]\to\mathbb R$ is continuous, differentiable on $(a,b)$, and $f$ is a Riemann-integrable extension of $G'$ from $(a,b)$, then $\int_a^bf=G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F10] Fubini's theorem for $L^1$ functions: the multiple integral equals the iterated integrals ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F11] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F12] If $u,v$ are differentiable on $[a,b]$ with integrable derivatives, then $\int_a^buv'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ ([[thm-integration-by-parts]]).

[F13] For nonnegative measurable $f\le g$, $\int f\le\int g$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F14] Assume Countable Choice: if a continuous $g:U\to\mathbb R^m$ on an open $U$ satisfies $\int_Vg\,d\lambda_n=0$ for every ball $V$ compactly contained in $U$, then $g=0$ on $U$ ([[lem-em-continuous-localization]]).

[F15] Coordinate partial derivatives are the directional derivatives in the standard directions, and $\partial_0$ is the derivative in the $x^0$ direction ([[def-directional-and-partial-derivatives]]).

[F16] Countable Choice $\mathrm{AC}_\omega$ is the statement that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F17] Under Countable Choice, a bounded Borel Riemann-integrable function on a nondegenerate closed box has the same Lebesgue integral ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]). In particular, each smooth compactly supported one-variable slice used below extends smoothly to $[-1,1]$ and satisfies this comparison.

[F18] Closed bounded Euclidean sets are compact ([[thm-heine-borel-rn]]). A finite product of compact Euclidean sets is closed and bounded (its coordinate factors are), hence compact by that criterion.

## Proof

**Proof technique:** direct; evaluate the first-variation coefficient at the two configurations and compute the exact gauge difference for the signed source model.

1.1 With $j\equiv0$ and $A=0$ one has $F(A)=0$ by [F1], so the coefficient $-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu+j^\nu h_\nu$ of [F2] vanishes identically on $U$ for every $h\in C_c^\infty(U;\mathbb R^4)$; the first variation is $c^{-1}$ times the integral of that coefficient by [F1], hence it is zero for every $h$ and $A=0$ is stationary. This is part (a). [given, F1, F2, F6]

1.2 For the potential $A_0=x^1$, $A_1=A_2=A_3=0$ of part (b), [F15] gives $\partial_1A_0=1$ and $\partial_0A_1=0$, so the dictionary [F5] yields $F_{01}=\partial_0A_1-\partial_1A_0=-1$; raising indices with $\eta^{00}\eta^{11}=(-1)(1)=-1$ gives $F^{01}=+1$ and $F^{10}=-1$, and all remaining components vanish because the other $A_\nu$ are constant; the inverse dictionary of [F5] then gives $E_1=-cF_{01}=c$ with $E_2=E_3=0$ and $B=0$, so $E=(c,0,0)$ and $\partial_\mu F^{\mu\nu}=0$ on $U$ because every component of $F$ is constant and only the two nonzero components $F^{01}$, $F^{10}$ occur, whose coordinate derivatives vanish. [given, F5, F15, algebra]

1.3 For part (c), apply [F8] with $\Omega=(-1/4,1/4)$ and $K=\{0\}$, with $\Omega=(-1,1)$ and $K=[-1/2,1/2]$, and with $\Omega=(-1,1)^3$ and $K=\{0\}$; this gives nonzero nonnegative $\rho\in C_c^\infty((-1/4,1/4))$, $\zeta\in C_c^\infty((-1,1))$ with $\zeta=1$ near $[-1/2,1/2]$, and nonzero nonnegative $\psi\in C_c^\infty((-1,1)^3)$, all extended by zero. Set $\varphi_\pm(u):=(2\pm u)\zeta(u)$ and $\chi_\pm(x):=\varphi_\pm(x^0)\psi(x^1,x^2,x^3)$; then $\varphi_\pm$ is a nonnegative compactly supported smooth function with $\varphi_\pm'(u)=\pm\zeta(u)+(2\pm u)\zeta'(u)$, which equals $+1$ and $-1$ respectively on a neighbourhood of $[-1/2,1/2]$ and in particular on the whole support of $\rho$. [given, F8, algebra]

2.1 With $j\equiv0$ the equation $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu=0$ of step 1.2 is exactly the coefficient equation of [F3], so [F3] gives that $A$ is stationary; directly, for every $h\in C_c^\infty(U;\mathbb R^4)$ the first variation is $c^{-1}\int_U\bigl(-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu\bigr)d\lambda=-(c\mu_0)^{-1}\int_U\bigl(F^{01}\partial_0h_1+F^{10}\partial_1h_0\bigr)d\lambda=-(c\mu_0)^{-1}\int_U(\partial_0h_1-\partial_1h_0)d\lambda$ by [F2] and step 1.2. Each of $\int_U\partial_0h_1\,d\lambda$ and $\int_U\partial_1h_0\,d\lambda$ vanishes: Fubini [F10] writes the first as the iterated integral whose inner $x^0$ integral is over a continuous compactly supported one-variable function, whose Lebesgue integral equals its Riemann integral by [F17] and is $0$ by the fundamental theorem [F9], and symmetrically for the second; hence the first variation is $0$ for every $h$ and the direct computation confirms stationarity with no boundary term. This is part (b). [step 1.2, F1, F2, F3, F9, F10, F17]

2.2 For every smooth potential $A$ on a neighbourhood of $\overline U$, [F4] gives $S[A+\partial^\sharp\chi_\pm]-S[A]=c^{-1}\int_Uj^\mu\partial_\mu\chi_\pm\,d\lambda$; with the source $j^0=c\rho(x^0)$, $j^i=0$ of step 1.3 and the convention [F7], the integrand is $j^0\partial_0\chi_\pm=c\rho(x^0)\varphi_\pm'(x^0)\psi(x^1,x^2,x^3)$, whose support is a closed subset of $\operatorname{supp}\rho\times\operatorname{supp}\psi$, a compact subset of $U$ by [F18]; Fubini [F10] factors the integral as $c^{-1}\cdot c\bigl(\int_{-1}^1\rho\varphi_\pm'\,dx^0\bigr)\bigl(\int_{(-1,1)^3}\psi\,d^3x\bigr)$, the factors being finite Lebesgue integrals of continuous compactly supported functions; and since $\varphi_\pm'=\pm1$ on $\operatorname{supp}\rho$ by step 1.3, $\int\rho\varphi_\pm'=\pm\int\rho$ with $\int\rho>0$, while $\int\psi>0$: each positivity follows because the integrand is continuous, nonnegative and nonzero, so if the integral over the ambient open box vanished then monotonicity [F13] would give vanishing over every compactly contained ball and [F14] would force the integrand to vanish identically, a contradiction. Hence $S[A+\partial^\sharp\chi_\pm]-S[A]=\pm(\int\rho)(\int\psi)$, strictly positive for $+$ and strictly negative for $-$. [step 1.3, F4, F7, F10, F11, F13, F14, F18, algebra]

3.1 For the same data, the second form of [F4] gives $S[A+\partial^\sharp\chi_\pm]-S[A]=-c^{-1}\int_U(\partial_\mu j^\mu)\chi_\pm\,d\lambda$; here $\partial_\mu j^\mu=\partial_0(c\rho(x^0))=c\rho'(x^0)$ by [F7] and [F15], so the right-hand side is $-\int_U\rho'(x^0)\varphi_\pm(x^0)\psi\,d\lambda=-\bigl(\int_{-1}^1\rho'\varphi_\pm\,dx^0\bigr)\bigl(\int\psi\bigr)$ by Fubini [F10]; by [F17] the one-variable integrals equal their Riemann integrals, and integration by parts [F12] applied to $\rho$ and $\varphi_\pm$ has vanishing endpoint terms because both are compactly supported, giving $\int\rho'\varphi_\pm=-\int\rho\varphi_\pm'=\mp\int\rho$, which reproduces exactly the value $\pm(\int\rho)(\int\psi)$ of step 2.2. If instead $\rho$ is constant on the whole neighbourhood, then $\partial_\mu j^\mu=c\rho'=0$, and [F4] (b) gives $S[A+\partial^\sharp\chi]=S[A]$ for every compact gauge variation $\chi$; no globally monotone compact function occurs anywhere. [step 2.2, F4, F7, F10, F12, F15, F17, algebra]

4.1 The computation used exact substitutions in the declared box functional, the one-variable fundamental theorem for compactly supported functions and the factoring of the four-dimensional integral by Fubini; it used no existence of sources or fields, no numerical value of $\mu_0$, no global gauge statement and no globally monotone compact function. All integrals are the finite-region Lebesgue integrals of the definition, and Countable Choice [F16] enters only through the inherited measure statements [F14] and the cited theorems; this is part (d). [given, step 3.1, F1, F6, F16] ∎

## Source notes

Tong §5.5.3 (printed pp. 125-126) discards the total derivative in the variation and computes the gauge shift $S\to S-\tfrac1c\int\chi\,\partial_\mu J^\mu$; the exact compact-support witnesses here replace that informal step, and the sign of the coupling is checked with overlapping supports rather than with a global monotone function. Binney §3.6 (printed pp. 30-31) records that the remaining Maxwell equations are geometric rather than variational; the direct variation computation of part (b) is the framework's own check in its $(-,+,+,+)$ dictionary.
