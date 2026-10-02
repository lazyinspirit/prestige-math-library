---
id: ex-riesz-measure-of-log-modulus-is-zero-divisor
kind: example
title: "Riesz measure of a log modulus records the holomorphic zeros"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - lem-dependent-choice-implies-countable-choice
  - def-complex-domain
  - def-riesz-measure-subharmonic-function
  - def-dirac-measure
  - thm-log-modulus-of-a-holomorphic-function-is-subharmonic
  - thm-zero-order-factorization-holomorphic-function
  - thm-identity-theorem-holomorphic-functions
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-c2-holomorphic-components-are-harmonic
  - lem-logarithmic-potential-distributional-laplacian
  - thm-riesz-measure-is-positive-radon
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-nonnegative-weighted-sums-of-measures
  - cor-bolzano-weierstrass-in-rn
  - lem-test-function-cutoffs-and-euclidean-localization
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - def-radon-measure-on-an-lch-space
  - thm-rational-points-and-boxes-in-rn
  - cor-rn-is-locally-compact-and-sigma-compact
  - thm-metric-hausdorff-separation
  - thm-locally-compact-hausdorff-basics
  - lem-t0-t1-and-hausdorff-are-hereditary
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. Kuehn, Introduction to Potential Theory via Applications, §2.3"
      url: "https://arxiv.org/pdf/0804.4689"
      locator: "§2.3, the Riesz measure of log|f|, PDF pp. 13–16"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§5, logarithmic potentials of holomorphic functions"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain and
let $f$ be holomorphic on $\Omega$, not identically zero on any connected
component of $\Omega$. Put $u:=\log|f|$, subharmonic on $\Omega$
([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]), with Riesz
measure $\mu_u=(2\pi)^{-1}\Delta u$
([[def-riesz-measure-subharmonic-function]]). Then

$$\mu_u=\sum_{a\in Z(f)}\operatorname{ord}_a(f)\,\delta_a,$$

where $Z(f)=\{a\in\Omega:f(a)=0\}$, the integers
$\operatorname{ord}_a(f)\ge1$ are the vanishing orders
([[thm-zero-order-factorization-holomorphic-function]]) and $\delta_a$ is the
unit Dirac measure at $a$ ([[def-dirac-measure]]); the sum is a locally finite
positive measure on $\Omega$. In particular $\log|f|$ has no Riesz mass on
$\Omega\setminus Z(f)$.

## Facts & Assumptions

**Given:** a complex domain $\Omega$, a holomorphic $f$ on $\Omega$ not identically zero on any component, the function $u=\log|f|$, and Dependent Choice.

[F1] A holomorphic function on a complex domain that vanishes on a neighbourhood of a point vanishes identically: that neighbourhood supplies an accumulating set of zeros for [[thm-identity-theorem-holomorphic-functions]]. Thus the given nonzero $f$ cannot have infinite order anywhere, since infinite order is equivalent to local vanishing by [[thm-zero-order-factorization-holomorphic-function]]. For $a\in\Omega$, a holomorphic function has finite order $m=\operatorname{ord}_a(f)$ at $a$ exactly when $f(z)=(z-a)^mg(z)$ on a neighbourhood of $a$ with $g$ holomorphic and $g(a)\ne0$; $f(a)=0$ holds exactly when $m\ge1$, and if $m=0$ then $f\ne0$ near $a$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F2] The function $u=\log|f|$ is subharmonic on $\Omega$ ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]); a zero-free holomorphic $h$ on a disc admits $h=\exp L$ with $L$ holomorphic ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]); a holomorphic function on an open set is smooth, and its real part is $C^2$ with $\Delta(\operatorname{Re}L)=0$ wherever $L$ is holomorphic ([[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-components-are-harmonic]]).

[F3] Under Dependent Choice the Riesz functional $\mu_u(\varphi)=(2\pi)^{-1}\int_\Omega u\Delta\varphi\,dA$ is a positive Radon measure, and it is the unique positive Radon measure representing $\mu_u$ on $C_c^\infty(\Omega)$ ([[thm-riesz-measure-is-positive-radon]], [[def-riesz-measure-subharmonic-function]]); moreover $(2\pi)^{-1}\int\log|z-a|\,\Delta\varphi\,dA=\varphi(a)$ for every $\varphi\in C_c^\infty(\mathbb C)$, that is, $\mu_{\log|{\cdot}-a|}=\delta_a$ ([[lem-logarithmic-potential-distributional-laplacian]]); Dependent Choice yields Countable Choice ([[lem-dependent-choice-implies-countable-choice]]).

[F4] For $h\in C^2$ on an open set, $\Delta T_h=T_{\Delta h}$; in particular if $\Delta h=0$ pointwise then $\int h\Delta\varphi\,dA=0$ for every compactly supported smooth test function $\varphi$ ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] A $\delta_a$ is a probability measure concentrated at $a$, finite or countable nonnegative sums of measures are measures, and every bounded infinite subset of $\mathbb R^2\cong\mathbb C$ has an accumulation point ([[def-dirac-measure]], [[thm-nonnegative-weighted-sums-of-measures]], [[cor-bolzano-weierstrass-in-rn]]).

[F6] If a compact $C$ lies in an open set $U\subseteq\mathbb R^2$, there is a smooth compactly supported cutoff in $U$ equal to $1$ on a neighbourhood of $C$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F7] Under Countable Choice, every Borel measure finite on compact sets on a second-countable locally compact Hausdorff space is Radon ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]); Dependent Choice supplies Countable Choice by [[lem-dependent-choice-implies-countable-choice]].

[F8] The plane is second-countable, locally compact and Hausdorff, and each open subset inherits these properties ([[thm-rational-points-and-boxes-in-rn]], [[cor-rn-is-locally-compact-and-sigma-compact]], [[thm-metric-hausdorff-separation]], [[thm-locally-compact-hausdorff-basics]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

## Verification

**Proof technique:** direct.

1.1 Let $a\in\Omega$ with $f(a)=0$ and let $m:=\operatorname{ord}_a(f)\ge1$ by [F1]. By [F1] there are a disc $D(a,r)\subseteq\Omega$ and a holomorphic zero-free $g$ on it with $f(z)=(z-a)^mg(z)$, so $f(z)\ne0$ for $0<|z-a|<r$: every zero of $f$ is isolated. [F1, given]

1.2 Fix $\varphi\in C_c^\infty(\Omega)$. If $\varphi=0$ the identity is immediate; otherwise put $K_0:=\operatorname{supp}\varphi$. For each $x\in K_0$ there are concentric relatively compact discs $V\Subset D\Subset\Omega$ with $x\in V$ and $\overline D$ containing at most one zero of $f$, since zeros are isolated. These smaller discs form an open cover of $K_0$; compactness gives finitely many pairs $(V_i,D_i)$ with the $V_i$ covering $K_0$. By [F6], choose $\beta_i\in C_c^\infty(D_i)$ with $\beta_i\ge0$ and $\beta_i=1$ on a neighbourhood of $\overline{V_i}$. On $W:=\bigcup_iV_i$ the sum $S:=\sum_i\beta_i$ is positive. Define $\varphi_i:=\varphi\beta_i/S$ on $W$ and zero off $W$; since $K_0\Subset W$, each $\varphi_i\in C_c^\infty(D_i)$, and $\sum_i\varphi_i=\varphi$. [F6, given]

2.1 Let $K\subseteq\Omega$ be compact and suppose it contained infinitely many distinct zeros of $f$. By [F5] the infinite bounded set $Z(f)\cap K$ has an accumulation point $z_*\in K\subseteq\Omega$; continuity gives $f(z_*)=0$, contradicting the isolation of zeros from step 1.1. Thus each compact subset meets $Z(f)$ finitely. Since $\Omega$ is second-countable and every zero is isolated, $Z(f)$ is at most countable: assign each zero the least element of a fixed enumerated basis that contains it and no other zero; distinct zeros receive distinct basis elements. The countable sum $\lambda:=\sum_{a\in Z(f)}\operatorname{ord}_a(f)\,\delta_a$ is a positive Borel measure by [F5], locally finite by the compact finiteness just proved. The open set $\Omega$ is second-countable and locally compact Hausdorff by [F8]; Dependent Choice supplies the Countable Choice of [F7], so $\lambda$ is Radon. [step 1.1, F5, F7, F8]

2.2 For each $D_i$ from step 1.2, either $f$ has no zero, or it has exactly one zero $a_i$ of order $m_i$. In the latter case the local factorization [F1] extends $F_i(z):=f(z)/(z-a_i)^{m_i}$ holomorphically and without zeros throughout $D_i$; in the zero-free case set $F_i:=f$ and $m_i:=0$. Then $u=m_i\log|z-a_i|+\log|F_i|$ on $D_i$ when $m_i>0$, and $u=\log|F_i|$ when $m_i=0$. By [F2], $\log|F_i|$ is harmonic, so its Riesz functional vanishes by [F4]; the point-mass normalization [F3] therefore gives $\mu_u(\varphi_i)=m_i\varphi_i(a_i)=\int\varphi_i\,d\lambda$ when $m_i>0$, and both sides are zero when $m_i=0$. [step 1.2, F1, F2, F3, F4]

3.1 Summing the local identities of step 2.2 over the finite partition $\varphi=\sum_i\varphi_i$ from step 1.2 gives $\mu_u(\varphi)=\sum_i\mu_u(\varphi_i)=\sum_i\int\varphi_i\,d\lambda=\int\varphi\,d\lambda$ for every $\varphi\in C_c^\infty(\Omega)$. [step 1.2, step 2.2]

4.1 Since $\lambda$ is a positive Radon measure by step 2.1 that represents $\mu_u$ on all smooth compactly supported tests, the uniqueness clause of [F3] gives $\mu_u=\lambda=\sum_{a\in Z(f)}\operatorname{ord}_a(f)\delta_a$, which is the asserted formula; in particular every compact subset of $\Omega\setminus Z(f)$ carries no $\lambda$-mass, so $\log|f|$ has no Riesz mass off the zero set. [step 2.1, step 3.1, F3] ∎
## Remarks

**The vanishing order is exactly the Riesz mass.** Step 3.1 shows the mass at a zero $a$ is the order $m=\operatorname{ord}_a(f)$, not merely a positive integer: the factor $m\log|z-a|$ contributes $m\delta_a$ through the normalization $\Delta\log|z-a|=2\pi\delta_a$, while the zero-free factor $F$ contributes nothing.

**Finite local cover.** Each compact test support is covered by finitely many discs on which the zero divisor has at most one point. A finite smooth partition subordinate to this cover reduces the distributional identity to the local factorization at each zero.

**Choice.** Dependent Choice is used through Countable Choice in the Riesz representation, kernel-normalization and local-regularity suppliers, and through the Bolzano–Weierstrass accumulation step. The finite cover, cutoffs, factorization and harmonicity calculations use no further choice.
