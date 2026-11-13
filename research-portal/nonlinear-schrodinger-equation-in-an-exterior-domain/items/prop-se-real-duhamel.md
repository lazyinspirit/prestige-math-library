---
id: prop-se-real-duhamel
kind: proposition
domain: mathematics
title: Duhamel formula for a real-linear propagator
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - def-se-internal-systems
  - def-se-trajectory-remainder
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - prop-se-potential-multipliers
  - lem-se-real-evolution-duhamel-bound
  - math:lem-linearity-of-the-bochner-integral
  - math:def-axiom-of-choice
  - def-se-control-cutoffs
  - math:def-strongly-measurable-banach-valued-function
  - math:def-bochner-integrable-function
  - math:thm-bochner-integrability-criterion
formulation_deps:
  - def-se-geometry
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - def-se-internal-systems
  - def-se-control-cutoffs
  - def-se-trajectory-remainder
  - prop-se-perturbed-evolution
  - math:def-axiom-of-choice
  - math:def-strongly-measurable-banach-valued-function
  - math:def-bochner-integrable-function
argument_deps:
  - def-se-geometry
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-linearized-pair
  - def-se-internal-systems
  - def-se-control-cutoffs
  - def-se-trajectory-remainder
  - prop-se-perturbed-evolution
  - prop-se-scale-flow
  - prop-se-potential-multipliers
  - lem-se-real-evolution-duhamel-bound
  - math:lem-linearity-of-the-bochner-integral
  - math:def-axiom-of-choice
  - math:def-strongly-measurable-banach-valued-function
  - math:def-bochner-integrable-function
  - math:thm-bochner-integrability-criterion
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-trajectory-remainder: mathematical-premise
  prop-se-perturbed-evolution: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-potential-multipliers: mathematical-premise
  lem-se-real-evolution-duhamel-bound: mathematical-premise
  math:lem-linearity-of-the-bochner-integral: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 20, equation (4.6) and the following nonlinear and linearized
        Duhamel formulas.
      statement: The evolution is only real-linear, so i times the nonlinear remainder
        and -i times the controlled forcing remain inside the propagator.
      hypotheses: The article's hypotheses (H) and (W), with the nonlinear application
        in its stated solution class.
      reading_limits: The frozen v2 page 20 image and extracted text were read for
        attribution and preservation of these formulas only. The explicit
        function-realization conditions below are a local repair of the
        generated proposition; no prerequisite theorem or author-defect
        conclusion is imported from the article.
dependency_level: 14
---

## Statement

Assume the Axiom of Choice and hypotheses (H) and (W). In particular, $\Omega$ is the prescribed smooth connected exterior domain, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and the reference trajectory $w$ belongs to $C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$. Let $\theta\in[-2,2]$, put $E=H_D^\theta(\Omega)$, and let $S(t,r)$ be the real-linear evolution for $i z_t+\Delta_Dz+V_1z+V_2\overline z=0$, where $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$. Real-linear means linear over real scalars; complex linearity is not assumed. Choose $R>0$ with $\Theta\subset B_R(0)$ and a smooth real cutoff $\varphi:\mathbb R^n\to[0,1]$ which is zero for $|x|\le R$, positive for $|x|>R$, and one for $|x|\ge R+1$.

Use the following precise convention for a locally integrable spatial function $q$. At $\theta\ge0$, its regular scale realization $\mathcal R_\theta q$ exists when its almost-everywhere class belongs to $H_D^\theta\subset L^2$, and is that class. At $\theta=-s<0$, it exists when $q\overline a\in L^1(\Omega)$ for every $a\in H_D^s$ and there is a finite constant $C_q$ such that $|\int_\Omega q\overline a\,dx|\le C_q\|a\|_{H_D^s}$ for all such $a$; it is then the element of $H_D^{-s}$ represented by this bounded conjugate-linear functional. This convention specifies the entire pivot functional at negative orders.

Let $z_0\in E$ and $z\in C([0,T];E)$. Put $Q=(0,T)\times\Omega$ and fix a jointly measurable representative $\widetilde w$ of the reference trajectory. For the nonlinear assertion, suppose there are jointly measurable complex-valued functions $Z,h$ on $Q$ with $Z(t,\cdot)\in L^3_{\mathrm{loc}}(\Omega)$ and $h(t,\cdot)\in L^1_{\mathrm{loc}}(\Omega)$ for almost every $t$, such that $\mathcal R_\theta Z(t,\cdot)=z(t)$ almost everywhere in time. Form the pointwise functions

$$q_N=\lambda\bigl(2\widetilde w|Z|^2+\overline{\widetilde w}Z^2+|Z|^2Z\bigr),\qquad q_g=\varphi h.$$

Require their regular scale realizations $N(t)=\mathcal R_\theta q_N(t,\cdot)$ and $g(t)=\mathcal R_\theta q_g(t,\cdot)$ to exist almost everywhere and to be strongly measurable $E$-valued functions with $\int_0^T(\|N(t)\|_E+\|g(t)\|_E)\,dt<\infty$. In the mild equation and formula below write $F(w,z)=N$ and $\varphi h=g$. Thus the nonlinear expression is constructed on the stated representative class, rather than on arbitrary negative-order elements of $E$.

Then $z$ satisfies the free-flow mild formulation of $i z_t+\Delta_Dz+V_1z+V_2\overline z+F(w,z)=\varphi h$, with initial datum $z_0$, if and only if, for every $t\in[0,T]$,

$$z(t)=S(t,0)z_0+\int_0^tS(t,r)\bigl(iF(w,z)(r)\bigr)\,dr+\int_0^tS(t,r)\bigl(-i\varphi h(r)\bigr)\,dr.$$

The integrals are Bochner integrals in the realification of $E$. For the linearized controlled equation the same formula holds with the $F$ integral omitted. More generally this linear assertion holds for every $z_0\in E$ and every strongly measurable $g\in L^1(0,T;E)$ in place of $\varphi h$, without a function-representative assumption on the state or forcing. A real-linear propagator need not commute with multiplication by $i$, so these factors are retained inside $S(t,r)$.

## Statement references

[[def-se-geometry]]

[[def-se-trajectory]]

[[def-se-dirichlet-scale]]

[[def-se-linearized-pair]]

[[def-se-internal-systems]]

[[def-se-control-cutoffs]]

[[def-se-trajectory-remainder]]

[[prop-se-perturbed-evolution]]

[[math:def-axiom-of-choice]]

[[math:def-strongly-measurable-banach-valued-function]]

[[math:def-bochner-integrable-function]]

## Facts & Assumptions

[F1] Under Choice, (H), and (W), $E$ is a complex Banach space and $W(t)=e^{it\Delta_D}$ is its strongly continuous unitary free group. The maps $P(t)u=i(V_1(t)u+V_2(t)\overline u)$ are bounded real-linear operators, norm-continuous in time; their evolution is the stated $S(t,r)$ [[def-se-dirichlet-scale]] [[prop-se-scale-flow]] [[prop-se-potential-multipliers]] [[prop-se-perturbed-evolution]] [[math:def-axiom-of-choice]].

[F2] For a strongly measurable $f\in L^1(0,T;E)$, the real-linear evolution result gives the unique continuous solution of $u(t)=W(t)x+\int_0^tW(t-r)(P(r)u(r)+f(r))\,dr$ as $u(t)=S(t,0)x+\int_0^tS(t,r)f(r)\,dr$. The integrals are Bochner integrals and the result applies to the realification of $E$ [[lem-se-real-evolution-duhamel-bound]].

[F3] Bochner integration is additive for integrable functions with values in a real Banach space [[math:lem-linearity-of-the-bochner-integral]]. The remainder equation and its signs are those of [[def-se-trajectory-remainder]] and [[def-se-linearized-pair]].

[F4] Strong measurability means almost-everywhere norm approximation by measurable simple functions, and Bochner integrability means approximation by integrable simple functions in the integral of the norm [[math:def-strongly-measurable-banach-valued-function]] [[math:def-bochner-integrable-function]]. For a strongly measurable function into a real or complex Banach space, finite integral of the norm is equivalent to Bochner integrability [[math:thm-bochner-integrability-criterion]].

[F5] The hypotheses (H) and (W), including the measurable, essentially bounded function representative of $w$, are supplied by [[def-se-geometry]] and [[def-se-trajectory]]. The positive scale consists of $L^2$ classes and the negative scale is the full pivot antidual specified in [[def-se-dirichlet-scale]]. The cutoff and control convention are those of [[def-se-control-cutoffs]] and [[def-se-internal-systems]], and the pointwise polynomial and its local integrability under local cubic integrability are those of [[def-se-trajectory-remainder]].

## Proof

**Given:** The stated hypotheses, $z_0$, $z$, the measurable representatives for the nonlinear assertion, and the two integrable realized forcings $N,g$.

**Goal:** Prove the equivalence and the linearized formula, preserving the positions of the factors $i$.

1.1 For almost every time, local boundedness of $\widetilde w$ and local cubic integrability of $Z$ make the polynomial $q_N$ locally integrable: on a compact set use $|Z|^j\le1+|Z|^3$ for $j=1,2$ and the finite measure of that set. The bounded cutoff makes $q_g$ locally integrable as well. At nonnegative orders the required realizations are specified $L^2$ classes in $E$. At negative orders the assumed absolute integrability and bound make $a\mapsto\int q\overline a$ a bounded conjugate-linear functional on all of $H_D^{-\theta}$, hence a specified element of $E$ by its antidual identification. All these assignments depend only on the almost-everywhere spatial function classes. Thus $F(w,z)=N$ and $\varphi h=g$ have the precise scale meaning stipulated in the Statement. [F5, given]

2.1 Set $f(r)=iN(r)-ig(r)$. A simple approximation for either forcing remains simple after multiplication by $i$, and its norm error is unchanged. Taking differences of the two simple approximations proves that $f$ is strongly measurable in the realification of $E$; the norm bound $\|f(r)\|_E\le\|N(r)\|_E+\|g(r)\|_E$ gives its integrability by [F4]. Multiplying the displayed equation formally by $-i$ identifies its free-flow mild formulation as $z(t)=W(t)z_0+\int_0^tW(t-r)(P(r)z(r)+f(r))\,dr$. This identity is the mild meaning of the equation here; it does not assert a classical time derivative. [F1, F3, F4, given, step 1.1]

3.1 Apply [F2] with $x=z_0$ and this fixed forcing $f$. It gives equivalence of that free-flow identity with $z(t)=S(t,0)z_0+\int_0^tS(t,r)f(r)\,dr$ for all $t$. The argument applies to the particular $f$ determined by $z$; it does not assume that $F$ is linear in $z$. [F2, step 2.1]

4.1 For each $r$, real-linearity gives $S(t,r)f(r)=S(t,r)(iN(r))+S(t,r)(-ig(r))$. The individual integrands are Bochner integrable by [F2], applied separately to the two forcings, which are integrable by [F4]. Additivity in [F3] yields the displayed two-integral formula with the notation of step 1.1. For the linearized equation apply exactly the same argument with $N=0$ and an arbitrary strongly measurable $g\in L^1(0,T;E)$. No product involving the state is needed in that argument, so no function representative is required; when $g$ is the stated realization of $\varphi h$, this gives the asserted controlled formula. [F2, F3, F4, step 1.1, step 2.1, step 3.1]

5.1 Real-linearity alone does not imply complex-linearity: for example, on the realification of $\mathbb C$, the evolution of $u'=i\overline u$ is $u(t)=\cosh(t)u(0)+i\sinh(t)\overline{u(0)}$, as direct differentiation verifies. For $t\ne0$ it sends $i$ and $i$ times the image of $1$ to different values. Thus no interchange of $i$ with a merely real-linear propagator is justified, and the formulas retain the factors inside. This completes the proof. [step 4.1] ∎

## Source notes

The original article, frozen v2 PDF page 20 immediately after (4.6), supplies the attribution and the nonlinear and linearized formulas. Its image and corresponding extracted text were read for this attribution. The explicit regular-realization convention repairs the generated proposition's nonlinear domain; it is not an assertion that the authors defined a cubic operation on every negative-order distribution. The proof uses the named evolution, spectral-scale and Bochner suppliers, not the article as a proof premise. The conditions specify when the pointwise nonlinear forcing and the integrals are defined; no independent nonlinear existence or trace result is asserted here.
