---
id: ex-em-stationary-not-minimum
kind: example
title: "Stationary functional need not be a minimum"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 16
deps: [post-em-stationary-action-model,
       def-em-field-action-definition,
       lem-em-compact-field-variation,
       def-em-lab-geometry,
       def-em-electromagnetic-tensor,
       def-em-si-conventions,
       lem-test-function-cutoffs-and-euclidean-localization,
       thm-algebra-of-derivatives,
       thm-chain-rule,
       thm-newton-leibniz-with-interior-derivative,
       thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       thm-substitution,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       lem-em-continuous-localization,
       cor-archimedean-reciprocal,
       def-integral-over-a-measurable-set,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-fixed-support-test-function-frechet-space,
       def-test-function-topology,
       def-countable-choice,
       thm-heine-borel-rn]
dependency_roles:
  post-em-stationary-action-model: physical-assumption
  def-em-field-action-definition: formulation-prerequisite
  lem-em-compact-field-variation: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-substitution: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-em-continuous-localization: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Worked computation in the smooth finite-region field action with the box region and no source: the stationary configuration of the adopted model is a saddle of the indefinite quadratic functional, with explicit compact variations of both signs and arbitrarily small magnitude. Excluded: any claim about physical fields or measurements, minimality of the adopted action, and applicability beyond the declared region and functional."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§27 printed pp. 68-69: the sign of $(\\partial A/\\partial t)^2$ is discussed through a minimum requirement for $S_f$; eqs. (27.4)-(27.6) on printed p. 69"
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.3"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed p. 125: expansion $S=\\int dtd^3x\\,(\\varepsilon_0E^2/2-B^2/(2\\mu_0))$ and the kinetic/potential reading"
proof_strategy: direct
---

## Example

Assume Countable Choice, inherited from the field-action measure suppliers
([[def-countable-choice]]); no additional choice is used. Work in
[[def-em-field-action-definition]] with the coordinate box $U=(-1,1)^4$ lying
compactly inside the chosen laboratory chart, constants $c,\mu_0>0$,
$\varepsilon_0=(\mu_0c^2)^{-1}$ ([[def-em-si-conventions]]) and $j=0$.

(a) [Coordinate and physical forms] With $x^0=ct$, set
$U_t:=\{(t,x):(ct,x)\in U\}=(-1/c,1/c)\times(-1,1)^3$. The exact field
dictionary gives

$$S[A]=\frac{1}{2c\mu_0}\int_U(|E|^2/c^2-|B|^2)d\lambda=\frac12\int_{U_t}(\varepsilon_0|E|^2-|B|^2/\mu_0)dt\,d^3x.$$

Also $S[\lambda A]=\lambda^2S[A]$ for every real $\lambda$.

(b) [Stationarity] $A=0$ is stationary: the actual first-variation coefficient
of [[lem-em-compact-field-variation]] is
$-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu+j^\nu h_\nu$, and the action variation
is $c^{-1}$ times its integral. Both terms vanish at $F=0$, $j=0$.

(c) [Positive direction] Choose $\theta\in C_c^\infty(U)$ with
$\nabla_x\theta\not\equiv0$. Set the covariant components $h_0=\theta$, $h_i=0$,
equivalently the contravariant variation $h^0=-\theta$, $h^i=0$. Then
$E=c\nabla_x\theta$, $B=0$, and

$$S[h]=\frac{1}{2c\mu_0}\int_U|\nabla_x\theta|^2d\lambda>0.$$

(d) [Negative directions with a fixed compact support] Choose nonzero
nonnegative smooth bumps $\eta,\varphi,\psi_2,\psi_3\in C_c^\infty((-1/2,1/2))$
using [[lem-test-function-cutoffs-and-euclidean-localization]]. Extend them by
zero to $\mathbb R$. For integers $N\ge1$ define the contravariant variation
with only its second spatial component nonzero:

$$h^{(N)2}(x)=\eta(x^0)\varphi(Nx^1)\psi_2(x^2)\psi_3(x^3).$$

All supports lie in one fixed compact subset of $U$. Writing
$f_N=h^{(N)2}$, its fields are $E=-c(\partial_0f_N)e_2$ and
$B=-(\partial_3f_N)e_1+(\partial_1f_N)e_3$. Define finite constants, with all
one-dimensional integrals over $(-1,1)$,

$$C_E=\Bigl(\int\eta'^2\Bigr)\Bigl(\int\varphi^2\Bigr)\Bigl(\int\psi_2^2\Bigr)\Bigl(\int\psi_3^2\Bigr),\qquad C_B=\Bigl(\int\eta^2\Bigr)\Bigl(\int\varphi'^2\Bigr)\Bigl(\int\psi_2^2\Bigr)\Bigl(\int\psi_3^2\Bigr)>0,$$

$$C_3=\Bigl(\int\eta^2\Bigr)\Bigl(\int\varphi^2\Bigr)\Bigl(\int\psi_2^2\Bigr)\Bigl(\int\psi_3'^2\Bigr)\ge0.$$

Exact substitution and Fubini give

$$\int_U|E|^2/c^2\,d\lambda=C_E/N,\qquad\int_U|B|^2d\lambda=C_BN+C_3/N,$$

$$S[h^{(N)}]=\frac{1}{2c\mu_0}\Bigl(\frac{C_E-C_3}{N}-C_BN\Bigr)\longrightarrow-\infty.$$

Thus a fixed sufficiently large $N$ supplies one negative direction $h_-$; the
direction $h_+$ of (c) is positive. For nonzero $\lambda$, their rescalings
keep their respective signs, and each action tends to zero in absolute value
as $\lambda\to0$. A single fixed negative direction is not claimed to change
sign under rescaling.

(e) [Every usual neighbourhood] Fix those two directions before rescaling.
For each derivative multi-index, every compact-set supremum of a derivative of
$\lambda h_\pm$ is $|\lambda|$ times the finite supremum for that fixed smooth
compactly supported direction. Thus both tend to zero in the usual $C^k$,
smooth compact-convergence and fixed-support and LF test-function topologies
([[def-fixed-support-test-function-frechet-space]],
[[def-test-function-topology]]) (and in any usual function-space topology with
continuous scalar multiplication). Every such neighbourhood of zero therefore
contains configurations of positive and negative action, arbitrarily small in
magnitude. The stationary zero is neither a local minimum nor a local maximum.
This is a computation in the declared smooth finite-region model, not a claim
about actual fields or measurements; other sources or boundary/variation
restrictions require their own analysis.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$; the field-action definition with $U=(-1,1)^4$, smooth $A,j$ on an open neighbourhood $N$ of $\overline U$, constants $c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ and the source-free case $j=0$; the component and invariant dictionaries of the electromagnetic two-form; and the test-function class $C_c^\infty(U;\mathbb R^4)$.

[F1] The field action is $S[A]=c^{-1}\int_U\bigl[-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\bigr]d\lambda$ with $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, compactly supported smooth variations and the stationarity predicate ([[def-em-field-action-definition]]).

[F2] The compact-variation lemma states: $S[A]$ of the lemma is a finite real number; its first variation at $A$ in the direction $h$ is $\int_U\bigl(-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu\bigr)d\lambda$; and $A$ is stationary if and only if $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ on $U$ for every $\nu$ ([[lem-em-compact-field-variation]]).

[F3] The observer decomposition of the electromagnetic two-form gives $\tfrac12F_{\mu\nu}F^{\mu\nu}=|B|^2-|E|^2/c^2$ ([[def-em-electromagnetic-tensor]] (b)).

[F4] The component dictionary is $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-em-electromagnetic-tensor]] (a)).

[F5] The electric constant is $\varepsilon_0:=(\mu_0c^2)^{-1}$, so $\varepsilon_0\mu_0c^2=1$ ([[def-em-si-conventions]]).

[F6] The laboratory chart has $x^0=ct$, so the chart image of the laboratory region is $cI\times\Omega$ and constant-$t$ slices correspond to fixed $x^0/c$ ([[def-em-lab-geometry]]).

[F7] In ZF, for compact $K\subseteq\Omega\subseteq\mathbb R^n$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F8] Substitution: if $\phi:[c,d]\to\mathbb R$ is differentiable with $\phi'$ integrable and $f$ is continuous on an order-convex set containing $\phi([c,d])$, then $\int_{\phi(c)}^{\phi(d)}f=\int_c^d(f\circ\phi)\phi'$ ([[thm-substitution]]).

[F9] Under Countable Choice, a bounded Borel real function on a nondegenerate box that is Riemann integrable is Lebesgue integrable with the same integral; in particular this applies to smooth compactly supported integrands ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F10] Fubini's theorem for $L^1$ functions on a sigma-finite product: the multiple integral equals the iterated integrals ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F11] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F12] Derivatives satisfy the sum, scalar-multiple and product rules ([[thm-algebra-of-derivatives]]).

[F13] The chain rule holds for composites of differentiable functions ([[thm-chain-rule]]).

[F14] For nonnegative measurable $f\le g$ one has $\int f\le\int g$, and for $c>0$, $\int cf=c\int f$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F15] Assume Countable Choice: if a continuous $g:U\to\mathbb R^m$ on an open $U$ satisfies $\int_Vg\,d\lambda_n=0$ for every ball $V$ compactly contained in $U$, then $g=0$ on $U$ ([[lem-em-continuous-localization]]).

[F16] If $G:[a,b]\to\mathbb R$ is continuous, differentiable on $(a,b)$, and $f$ is a Riemann-integrable extension of $G'$ from $(a,b)$, then $\int_a^bf=G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F17] For compact $K\subseteq\Omega$ the fixed-support seminorms are $p_m(\varphi)=\max_{|\alpha|\le m}\sup_{x\in K}|\partial^\alpha\varphi(x)|$ ([[def-fixed-support-test-function-frechet-space]]).

[F18] In the test-function topology a seminorm satisfies $q(av)=|a|q(v)$, and zero-neighbourhoods contain finitely many bounds $q<\varepsilon$ ([[def-test-function-topology]]).

[F19] Countable Choice $\mathrm{AC}_\omega$ is the statement that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F20] For every $\varepsilon>0$ in a complete ordered field there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F21] The adopted field sector states that a smooth field is dynamically admissible exactly when it is stationary for the field action under all compactly supported smooth variations ([[post-em-stationary-action-model]] (i)).

[F22] Closed bounded subsets of $\mathbb R^4$ are compact; in particular $K_*:=[-1/2,1/2]^4$ is a compact subset of $U$ ([[thm-heine-borel-rn]]).

## Verification

**Proof technique:** direct; substitute the component dictionary into the box action, compute the first variation at zero, and exhibit one positive and one fixed-support negative direction whose rescalings stay in every usual neighbourhood of zero.

1.1 In the source-free case $j=0$, [F3] turns the density of [F1] into $-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}=|E|^2/(2\mu_0c^2)-|B|^2/(2\mu_0)$, so linearity of the integral gives $S[A]=(2c\mu_0)^{-1}\int_U(|E|^2/c^2-|B|^2)d\lambda$; writing the time coordinate as $t=x^0/c$ multiplies the one-dimensional time integral by $c$ and carries $(-1,1)$ to $(-1/c,1/c)$ by [F6] and [F8], while the spatial coordinates are unchanged, so $S[A]=\tfrac12\int_{U_t}(\varepsilon_0|E|^2-|B|^2/\mu_0)dt\,d^3x$ by [F5]; and since $A\mapsto F(A)$ is linear in $A$ and $S$ is quadratic in $F$, $F(\lambda A)=\lambda F(A)$ gives $S[\lambda A]=\lambda^2S[A]$ for every real $\lambda$. [given, F1, F3, F4, F5, F6, F8, F9, F10, F11]

2.1 At $A=0$ one has $F(A)=0$ and $j=0$, so the first-variation coefficient $-\mu_0^{-1}F^{\mu\nu}\partial_\mu h_\nu+j^\nu h_\nu$ of [F2] vanishes identically for every $h\in C_c^\infty(U;\mathbb R^4)$; the action variation is $c^{-1}$ times its integral by [F1] and [F2], hence every compact first variation of $S$ at $A=0$ is zero and $A=0$ is stationary. [step 1.1, F1, F2]

3.1 By [F7] with $\Omega=U$ and $K=\{(0,0,0,0)\}$ there is $\chi\in C_c^\infty(U)$ with $0\le\chi\le1$ and $\chi=1$ near the origin; then $\theta:=x^1\chi$ lies in $C_c^\infty(U)$ and $\partial_1\theta(0)=\chi(0)+0\cdot\partial_1\chi(0)=1$, so $\nabla_x\theta\not\equiv0$. With covariant components $h_0=\theta$, $h_i=0$ the dictionary [F4] gives $F_{0i}=-\partial_i\theta$, hence $E=c\nabla_x\theta$ and $B=0$; step 1.1 then gives $S[h]=(2c\mu_0)^{-1}\int_U|\nabla_x\theta|^2d\lambda$. The integrand $g:=|\nabla_x\theta|^2$ is continuous, nonnegative and nonzero at the origin; if $\int_Ug\,d\lambda=0$, then for every ball $V$ compactly contained in $U$ monotonicity [F14] would give $\int_Vg\le\int_Ug=0$ with $\int_Vg\ge0$, so [F15] would force $g=0$ on $U$, a contradiction; hence $\int_Ug>0$ and $S[h]>0$, one positive direction. [step 2.1, F4, F7, F14, F15, algebra]

4.1 Apply [F7] with $\Omega=(-1/2,1/2)$ and $K=\{0\}$ four times (or once, taking all four bumps equal) to obtain nonzero nonnegative $\eta,\varphi,\psi_2,\psi_3\in C_c^\infty((-1/2,1/2))$, extended by zero to $\mathbb R$; define $f_N(x):=\eta(x^0)\varphi(Nx^1)\psi_2(x^2)\psi_3(x^3)$ for integers $N\ge1$ and let $h^{(N)}$ have $h^{(N)2}=f_N$ and all other contravariant components $0$. Since $\operatorname{supp}\varphi(N\cdot)\subseteq(-1/(2N),1/(2N))\subseteq(-1/2,1/2)$, every $h^{(N)}$ is smooth with support in the fixed compact set $K_*=[-1/2,1/2]^4\subset U$ by [F22]. The product and chain rules [F12] and [F13] give $\partial_0f_N=\eta'(x^0)\varphi(Nx^1)\psi_2\psi_3$, $\partial_1f_N=N\eta(x^0)\varphi'(Nx^1)\psi_2\psi_3$ and $\partial_3f_N=\eta(x^0)\varphi(Nx^1)\psi_2\psi_3'$; since $f_N=h^{(N)2}$ and $h^{(N)0}=h^{(N)1}=h^{(N)3}=0$, the dictionary [F4] gives $E=-c(\partial_0f_N)e_2$ and $B=-(\partial_3f_N)e_1+(\partial_1f_N)e_3$. [step 3.1, F4, F7, F12, F13, F22]

5.1 Because all integrands below are smooth with support in the fixed compact subset $K_*\subset U$, [F9] lets each Lebesgue integral be computed as the equal Riemann integral, and Fubini [F10] together with linearity [F11] factors each product of one-variable functions into a product of one-dimensional integrals: $\int_U|E|^2/c^2\,d\lambda=\int(\eta')^2\cdot\int\varphi(Nx^1)^2dx^1\cdot\int\psi_2^2\cdot\int\psi_3^2$ and $\int_U|B|^2d\lambda=\int\eta^2\cdot\int\varphi(Nx^1)^2dx^1\cdot\int\psi_2^2\cdot\int\psi_3'^2+\int\eta^2\cdot\int(N\varphi'(Nx^1))^2dx^1\cdot\int\psi_2^2\cdot\int\psi_3^2$. By [F8] with the affine map $y=Nx^1$ on $[-1,1]$, $\int_{-1}^1\varphi(Nx^1)^2dx^1=N^{-1}\int_{-N}^N\varphi(y)^2dy=N^{-1}\int_{-1}^1\varphi(y)^2dy$, the last equality because $\varphi$ vanishes outside $(-1/2,1/2)$; the same identity holds for $\varphi'$. Hence $\int_U|E|^2/c^2\,d\lambda=C_E/N$ and $\int_U|B|^2d\lambda=C_BN+C_3/N$ with the stated constants, and $C_B>0$: if $\varphi'$ vanished identically then [F16] would make $\varphi$ constant on $\mathbb R$, hence zero by compact support, contradicting the nonzero choice, so $\varphi'^2$ is a continuous nonnegative nonzero square, and together with the nonzero bumps $\eta,\psi_2,\psi_3$ the same argument as in step 3.1 with [F14] and [F15] gives each of the four one-dimensional integrals in $C_B$ strictly positive. [step 4.1, F8, F9, F10, F11, F14, F15, F16, algebra]

6.1 Step 1.1 with $j=0$ and [F3] expresses $S[h^{(N)}]=(2c\mu_0)^{-1}\int_U(|E|^2/c^2-|B|^2)d\lambda$, so step 5.1 gives $S[h^{(N)}]=(2c\mu_0)^{-1}\bigl((C_E-C_3)/N-C_BN\bigr)$; since $C_B>0$, the bound $(C_E-C_3)/N-C_BN\le |C_E-C_3|-C_BN$ for $N\ge1$ tends to $-\infty$ by [F20], proving the stated limit. To fix one negative direction, choose $N\ge1$ with $C_BN>(C_E-C_3)/N$: if $C_E-C_3\le0$ every $N$ works, while if $C_E-C_3>0$ then $\varepsilon:=C_B/(C_E-C_3)>0$ and [F20] provides $n\ge1$ with $1/n<\varepsilon$, that is $n>(C_E-C_3)/C_B$; setting $N:=n$ gives $C_BN>C_E-C_3\ge(C_E-C_3)/N$ because $N\ge1$. For that fixed $N_0$ one has $S[h^{(N_0)}]<0$, giving one fixed-support negative direction $h_-:=h^{(N_0)}$. [step 5.1, F1, F3, F20, algebra]

7.1 For every real $\lambda$ the scaling law of step 1.1 gives $S[\lambda h_+ ]=\lambda^2S[h_+]$ and $S[\lambda h_-]=\lambda^2S[h_-]$, so the signs of the two directions are preserved for nonzero $\lambda$ and both action magnitudes tend to $0$ as $\lambda\to0$. In the fixed-support space [F17] each seminorm satisfies $p_m(\lambda h)=|\lambda|p_m(h)$ by definition of the maximum and supremum, and in the LF topology [F18] every seminorm satisfies $q(\lambda h)=|\lambda|q(h)$ and a zero-neighbourhood contains finitely many bounds $q<\varepsilon$; hence $\lambda h_\pm\to0$ in both topologies, and in any usual topology with continuous scalar multiplication the map $\lambda\mapsto\lambda h_\pm$ is continuous at $0$. Therefore every such zero-neighbourhood contains configurations $\lambda h_+$ with $S>0$ and $\lambda h_-$ with $S<0$, with $|S|=\lambda^2|S[h_\pm]|$ arbitrarily small: the stationary configuration $0$ is neither a local minimum nor a local maximum. [step 3.1, step 6.1, F17, F18, algebra]

8.1 Every object above is smooth and compactly supported in the box $U$, all integrals are the declared finite-region Lebesgue integrals, and the arguments used exactly [F7], [F8], [F9], [F14], [F15], [F16] and [F20]; Countable Choice [F19] enters only through the measure interface of [F9] and [F15], as inherited from the field-action sector. The computation concerns the adopted functional [F21] and asserts nothing about physical fields, measurements, existence of stationary configurations beyond the exhibited zero, or any other region or variation class. [given, step 7.1, F19, F21] ∎

## Source notes

Landau–Lifshitz §27 (printed pp. 68-69, with eqs. (27.4)-(27.6) on p. 69) ties the sign of $(\partial A/\partial t)^2$ to a minimum requirement for $S_f$; the exact computation above shows that with the framework's adopted sign and normalisation the stationary point of the source-free box functional is a saddle rather than a minimum, so the source's minimum wording is not adopted. Tong §5.5.3 (printed p. 125) expands the action to $\int dtd^3x\,(\varepsilon_0E^2/2-B^2/(2\mu_0))$ and reads the electric term as kinetic and the magnetic term as potential; the explicit compact variations of this example are the framework's own witnesses and are not a numbered result of either source.
