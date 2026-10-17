---
id: thm-tgr-juttner-partition-and-moments
kind: theorem
title: Jüttner partition, probability, and perfect-fluid moments
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-gr-smooth-lorentzian-objects, def-tgr-future-mass-shell-measure, lem-tgr-mass-shell-measure-tetrad-invariance, thm-polar-coordinates-formula-for-lebesgue-measure, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, def-probability-measure, def-measure-space, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-borel-sets-are-lebesgue-measurable, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-tgr-future-mass-shell-measure: mathematical-premise
  lem-tgr-mass-shell-measure-tetrad-invariance: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  def-probability-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §III.3"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Statement

Let $x$ be an event in a smooth time-oriented Lorentzian four-manifold, let
$M_*>0$ be an energy in joules, and let $u\in T_xM$ be future unit timelike,
$g(u,u)=-1$. Fix $k_B>0$ in $\mathrm{J\,K^{-1}}$, $T>0$ in kelvins,
$n>0$ in $\mathrm{m^{-3}}$, $c>0$ in $\mathrm{m\,s^{-1}}$, and a reference
action $h_{\rm ref}>0$ in $\mathrm{J\,s}$. Put
$$\alpha:=\frac1{k_BT},\qquad \beta:=\frac{u}{k_BT},\qquad E_u(P):=-g(P,u).$$
For $j=0,1,2,3$ and $z>0$ define
$$K_j(z):=\int_0^\infty e^{-z\cosh t}\cosh(jt)\,dt.$$
With the future-shell measure of [[def-tgr-future-mass-shell-measure]], define
$$I_{M_*}(\alpha):=\int_{\mathcal H^+_{M_*,x}}e^{g(\beta,P)}\,d\mu_{M_*}(P),\qquad Z_{M_*}(\alpha):=\int_{\mathbb R^3}e^{-\alpha E(q)}\,d^3q,$$
where $E(q)=\sqrt{M_*^2+|q|^2}$ in a future orthonormal tetrad whose time
axis is $u$. Both integrals are finite and positive, and
$$I_{M_*}(\alpha)=\frac{4\pi M_*}{\alpha}K_1(\alpha M_*),\qquad Z_{M_*}(\alpha)=\frac{4\pi M_*^2}{\alpha}K_2(\alpha M_*).$$
The observer-rest momentum law
$$d\nu_u(q):=Z_{M_*}(\alpha)^{-1}e^{-\alpha E(q)}d^3q$$
is a probability measure. Define the dimensionless occupation and its number
current and stress moments by
$$\zeta:=\log\!\left(\frac{n h_{\rm ref}^3c^3}{Z_{M_*}(\alpha)}\right),\qquad f(P):=e^{\zeta+g(\beta,P)},$$
$$J^a:=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H^+_{M_*,x}}P^a f(P)\,d\mu_{M_*}(P),\qquad T^{ab}:=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H^+_{M_*,x}}P^aP^b f(P)\,d\mu_{M_*}(P).$$
These integrals converge, and, with
$$\varepsilon:=n\left(M_*\frac{K_1(\alpha M_*)}{K_2(\alpha M_*)}+\frac3\alpha\right),\qquad p:=\frac n\alpha=nk_BT,$$
they satisfy $J^a=nu^a$ and
$T^{ab}=(\varepsilon+p)u^au^b+pg^{ab}$. The quantities $J$ and $T$ have
units $\mathrm{m^{-3}}$ and $\mathrm{J\,m^{-3}}$, respectively. The reference
action $h_{\rm ref}$ is only a declared phase-space unit convention; it is
not Planck's constant or a measured parameter.

## Facts & Assumptions

**Given:** The future massive shell and measure of
[[def-tgr-future-mass-shell-measure]], its tetrad invariance, the future unit
vector $u$, the positive constants and fields in the Statement, and the
countable-choice assumptions of the integration suppliers.

[F1] The shell measure is $d^3q/E(q)$ in any future orthonormal tetrad and is
tetrad-independent ([[def-tgr-future-mass-shell-measure]],
[[lem-tgr-mass-shell-measure-tetrad-invariance]]).

[F2] For nonnegative Borel radial integrands on $\mathbb R^3$, polar
coordinates give $d^3q=r^2dr\,d\sigma$ under $\mathrm{AC}_\omega$; the unit
two-sphere has $\sigma(S^2)=4\pi$
([[thm-polar-coordinates-formula-for-lebesgue-measure]],
[[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]],
[[def-countable-choice]]).

[F3] The measure-space instantiation is
$(\mathbb R^3,\mathcal L(\mathbb R^3),\lambda_3)$, where $\mathcal L(\mathbb R^3)$
is the Lebesgue sigma-algebra; throughout the Statement, $d^3q$ means
$d\lambda_3(q)$ ([[def-measure-space]],
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Under [A1], every
Borel function on $\mathbb R^3$ is $\mathcal L(\mathbb R^3)$-measurable
([[thm-borel-sets-are-lebesgue-measurable]]). Integrating a nonnegative
$\lambda_3$-measurable density over this space defines a measure, and a
probability measure on $(\mathbb R^3,\mathcal L(\mathbb R^3))$ is a measure
of total mass one ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]],
[[def-probability-measure]]).

[F4] On a measure space and an open real parameter interval, differentiation
under an integral is valid if each parameter slice is integrable, the
parameter dependence is differentiable on the interval outside a fixed
measurable null set, each partial derivative (extended by zero where
undefined) is measurable, and the absolute derivatives are bounded outside
a fixed measurable null set by one nonnegative measurable integrable
majorant, uniformly on that interval
([[thm-differentiation-under-the-integral-sign]]). Here the integrands
$e^{-\alpha E(q)}$ on $\mathbb R^3$ and
$e^{-z\cosh t}\cosh(2t)$ on $[0,\infty)$ are smooth in the positive
parameter at every integration point, with partial derivatives continuous
in $q$ or $t$, respectively, hence measurable. Their exceptional sets can
therefore be empty; the local uniform majorants are checked in the proof.

[F5] On a bounded $C^1$ Euclidean domain, the divergence theorem identifies
the volume divergence integral with its outward boundary flux, under
$\mathrm{AC}_\omega$
([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]],
[[def-countable-choice]]).

[F6] The hyperbolic functions are defined by the real exponential; they have
the displayed addition and derivative identities
([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]).

[F7] Dominated convergence passes limits through the Lebesgue integral under a
single integrable majorant ([[thm-dominated-convergence]]).

[A1] Assume only $\mathrm{AC}_\omega$, as required by the polar, sphere and
divergence suppliers above; no arbitrary-index choice is used.

## Proof

1.1 For $z>0$, the defining integrand of $K_j(z)$ is positive. Near $t=0$
it is bounded. For large $t$, $\cosh t\ge e^t/2$ and
$\cosh(jt)\le e^{jt}$; after $y=e^t$, the bound
$y^{j-1}e^{-zy/2}$ is integrable because $y^{j-1}\le e^{zy/4}$ for all
sufficiently large $y$. Hence each $K_j(z)$ is finite and positive. By
[F1]–[F2], writing $r=|q|$ and then $r=M_*\sinh t$ gives
$$I_{M_*}=4\pi M_*^2\int_0^\infty\sinh^2t\,e^{-z\cosh t}dt =2\pi M_*^2(K_2(z)-K_0(z)),\qquad z=\alpha M_*.$$
The endpoint terms in the integral of
$\frac{d}{dt}(\sinh t\,e^{-z\cosh t})$ vanish: the value is zero at $t=0$,
and its absolute value tends to zero at infinity since the exponential
$e^{-z\cosh t}$ dominates $\sinh t$. Thus
$K_2(z)-K_0(z)=2K_1(z)/z$, and
$I_{M_*}=4\pi M_*K_1(z)/\alpha$. [given, F1, F2, F6, A1, algebra]

2.1 The same polar substitution in $Z_{M_*}$ gives
$$Z_{M_*}=4\pi M_*^3\int_0^\infty\sinh^2t\cosh t\,e^{-z\cosh t}dt =\pi M_*^3(K_3(z)-K_1(z)).$$
The endpoint terms in the integral of
$\frac{d}{dt}(\sinh(2t)e^{-z\cosh t})$ vanish by the same exponential bound.
Using $\cosh(2t)-1=2\sinh^2t$ and
$\cosh(3t)-\cosh t=4\sinh^2t\cosh t$ gives
$K_3(z)-K_1(z)=4K_2(z)/z$. Hence
$Z_{M_*}=4\pi M_*^2K_2(z)/\alpha$, which is finite and positive.
[step 1.1, F2, F6, A1, algebra]

3.1 Interpret $d^3q$ as $d\lambda_3(q)$ on the measure space
$(\mathbb R^3,\mathcal L(\mathbb R^3),\lambda_3)$ of [F3]. The density
$Z_{M_*}^{-1}e^{-\alpha E(q)}$ is positive and Borel, hence
$\mathcal L(\mathbb R^3)$-measurable by [F3]. Thus $\nu_u$ is the measure
on $\mathcal L(\mathbb R^3)$ obtained by integrating this density against
$\lambda_3$; its total mass is $Z_{M_*}^{-1}Z_{M_*}=1$ by the definition
of $Z_{M_*}$, so it is a probability measure on
$(\mathbb R^3,\mathcal L(\mathbb R^3))$. Also $h_{\rm ref}^3c^3$ has units
$\mathrm{J^3m^3}$, so $n h_{\rm ref}^3c^3$ and $Z_{M_*}$ both have units
$\mathrm{J^3}$; hence $\zeta$ is dimensionless. [given, F3, step 2.1, algebra]

3.2 Differentiation under the integral sign in $Z_{M_*}(\alpha)$ is valid
near any $\alpha_0>0$: for $\alpha\ge\alpha_0/2$,
$E e^{-\alpha E}\le C e^{-\alpha_0E/4}$, where
$C=\sup_{E\ge M_*} E e^{-\alpha_0E/4}<\infty$ and the majorant is
integrable by $Z_{M_*}(\alpha_0/4)<\infty$. Thus
$-\partial_\alpha\log Z_{M_*}=\langle E\rangle$. For the defining $K_2$
integral, on $z\in[z_0/2,3z_0/2]$ the derivative integrand is bounded in
absolute value by $e^{3t}e^{-(z_0/4)e^t}$, an integrable function after
$y=e^t$. [F4] therefore permits differentiation and gives
$K_2'(z)=-\tfrac12(K_1(z)+K_3(z))$, since
$\cosh t\cosh(2t)=(\cosh(3t)+\cosh t)/2$. Combining this with the
recurrence in the preceding calculation gives
$K_2'(z)=-K_1(z)-2K_2(z)/z$. Differentiating the formula for $Z_{M_*}$ now
shows
$$\langle E\rangle=\frac3\alpha+M_*\frac{K_1(\alpha M_*)}{K_2(\alpha M_*)}.$$
[step 2.1, F4, F6, algebra]

4.1 The bound $|q_i|\le E$ and the finite integrals of
$e^{-\alpha E}$ and $E e^{-\alpha E}$ show that the current and stress
integrals are absolutely convergent: in the rest tetrad,
$|P^a|\le E$ and $|P^aP^b|/E\le E$. Their common prefactor is
$e^\zeta/(h_{\rm ref}^3c^3)=n/Z_{M_*}$. Oddness in each $q_i$ makes the
spatial current and off-diagonal stress entries zero; rotational invariance
makes the three diagonal spatial entries equal. The time component of the
current is $\frac n{Z_{M_*}}\int e^{-\alpha E}d^3q=n$, and the time-time
stress entry is $\frac n{Z_{M_*}}\int E e^{-\alpha E}d^3q
=n\langle E\rangle$.
[step 3.1, step 3.2, F1, algebra]

5.1 On $B_R\subset\mathbb R^3$, apply [F5] to
$q\mapsto q e^{-\alpha E(q)}$. Its divergence is
$(3-\alpha|q|^2/E)e^{-\alpha E}$ and its outward flux is
$4\pi R^3e^{-\alpha E(R)}$, which tends to zero as $R\to\infty$ because
$E(R)\ge R$. The divergence is absolutely integrable since its magnitude is
at most $(3+\alpha E)e^{-\alpha E}$, whose integral is finite by the
partition and energy calculations above. Dominated convergence [F7] on the
increasing balls $B_m$ passes the bounded-ball identity to $\mathbb R^3$ and
gives
$$\int_{\mathbb R^3}\frac{|q|^2}{E}e^{-\alpha E}d^3q =\frac3\alpha Z_{M_*}(\alpha).$$
The trace of the spatial stress is $n/Z_{M_*}$ times this integral, and its
three diagonal entries are equal by step 4.1; therefore each is
$p=n/\alpha$. [step 2.1, step 3.2, step 4.1, F2, F5, F7, A1, algebra]

6.1 The shell measure is independent of the future tetrad by [F1], and the
integrals defining $J$ and $T$ are contractions of the geometric momentum
vector with that measure. Thus their rest-tetrad components from step 4.1 and
the pressure from step 5.1 determine the tensors intrinsically. In that tetrad
$J=(n,0,0,0)$ and $T^{ab}=\operatorname{diag}(\varepsilon,p,p,p)$. Since
$u=(1,0,0,0)$ and $g^{ab}=\operatorname{diag}(-1,1,1,1)$ there, these are
exactly $J^a=nu^a$ and
$T^{ab}=(\varepsilon+p)u^au^b+pg^{ab}$. [step 4.1, step 5.1, F1, algebra] ∎
