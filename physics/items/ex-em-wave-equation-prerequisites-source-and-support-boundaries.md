---
id: ex-em-wave-equation-prerequisites-source-and-support-boundaries
kind: example
title: "Worked checks of the wave Cauchy formula: source non-compactness, support propagation and linear growth"
status: published
origin: pipeline
domain: mathematics
deps: [lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, cor-energy-uniqueness-for-the-wave-cauchy-problem, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-euclidean-inner-product, def-laplacian-of-a-c2-function, def-wave-energy-and-energy-flux, lem-em-spherical-mean-wave-identity, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-first-moment-of-the-unit-sphere-vanishes, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-algebra-of-derivatives, thm-em-wave-cauchy-kirchhoff, thm-lebesgue-measure-of-a-box-of-every-kind, thm-newton-leibniz-with-interior-derivative, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-wave-duhamel-principle, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  cor-energy-uniqueness-for-the-wave-cauchy-problem: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-wave-energy-and-energy-flux: mathematical-premise
  lem-em-spherical-mean-wave-identity: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-first-moment-of-the-unit-sphere-vanishes: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-wave-duhamel-principle: mathematical-premise
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "\u00a77.1, printed pp. 168-170, formulas (7.10)-(7.13): the source term is $\\int_0^t(t-s)\\frac{1}{4\\pi}\\int_{S^2}f(s,x+(t-s)\\omega)d\\sigma_2(\\omega)ds$, the expression specialised in clauses (i) and (ii)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "\u00a79.1.2, printed p. 284, formula (9.1.11) (Duhamel integral) and \u00a79.1.3, printed pp. 284-285, (9.1.14) (spherical mean used in clause (iii))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from [[thm-em-wave-cauchy-kirchhoff]] and its suppliers ([[def-countable-choice]]). All three computations use the notation of that theorem: $c>0$, $H_\varphi(x,s)=s\,M_{cs}\varphi(x)$ with the spherical mean $M$ of [[lem-em-spherical-mean-wave-identity]], $W=c^{-2}\partial_t^2-\Delta$ and $u$ the solution displayed there.

(i) (The compact-support clause needs its hypothesis.) Take $t_0=0$, $a=b=0$ and the spatially constant source $h(x,t)=1$ on $\mathbb R^3\times[0,T]$. Then the theorem's solution is $u(x,t)=c^2t^2/2$, which is independent of $x$; it satisfies $\partial_t^2u=c^2=c^2h$ and $\Delta u=0$, hence $Wu=h$, with $u(\cdot,0)=\partial_tu(\cdot,0)=0$. For every $t>0$ the function $u(\cdot,t)=c^2t^2/2$ is a nonzero constant on $\mathbb R^3$, so it is not compactly supported: the hypothesis in clause (d) that $h(\cdot,v)$ vanish off one fixed compact set cannot be dropped, and the corresponding hypothesis of [[thm-wave-duhamel-principle]] (source compactly supported in $x$ for each fixed $s$) is genuinely used by that item.

(ii) (Support propagation made explicit.) Take $a=b=0$, $t_0=0$ and $h(x,t)=h_0(x)$ with $h_0\in C^\infty(\mathbb R^3)$ vanishing off $\overline B_1(0)$. Then $u(x,t)=c^2\int_0^t(t-v)M_{c(t-v)}h_0(x)\,dv$, and $M_rh_0(x)=0$ for every $r>0$ with $S_r(x)\cap\overline B_1(0)=\emptyset$; hence $u(x,t)=0$ whenever $|x|>1+ct$. This is clause (d) with $K_h=\overline B_1(0)$ and $\rho=1$, exhibited from the explicit formula.

(iii) (The class contains non-decaying data with divergent total energy.) Take $a=0$, $b(x)=x_1$ and $h=0$. Since the first moment of the unit-sphere measure vanishes, $M_{cs}b(x)=x_1$ ([[lem-first-moment-of-the-unit-sphere-vanishes]], with the surface measure identified with the polar measure of [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]), so the theorem's solution is $u(x,t)=(t-t_0)x_1$: it satisfies $\partial_t^2u=0=\Delta u$, hence $Wu=0$, with $u(\cdot,t_0)=0$ and $\partial_tu(\cdot,t_0)=x_1$. The solution is unbounded on every time slice $t>t_0$. Moreover its total energy at time $t$ in the sense of [[def-wave-energy-and-energy-flux]] is $+\infty$ whenever $t\ne t_0$: the energy density is $\tfrac12(x_1^2+c^2(t-t_0)^2)$, and for every $R>0$ the box $[-R,R]^3$ gives $$\int_{\mathbb R^3}\tfrac12\bigl(x_1^2+c^2(t-t_0)^2\bigr)\,d\lambda\;\ge\;\frac12\int_{[-R,R]^3}x_1^2\,d\lambda\;=\;\frac12\Bigl(\frac{2R^3}{3}\Bigr)(4R^2)\;=\;\frac{4}{3}R^5\longrightarrow+\infty$$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-newton-leibniz-with-interior-derivative]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). Hence the finite-initial-energy hypothesis of [[cor-energy-uniqueness-for-the-wave-cauchy-problem]] fails for this smooth datum while the theorem's local uniqueness (b) still applies; the theorem asserts no decay at spatial infinity and no finite-energy property, and needs none.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; a speed $c>0$; the data of clause (i) $t_0=0$, $a=b=0$, $h\equiv1$ on $\mathbb R^3\times[0,T]$; of clause (ii) $a=b=0$, $t_0=0$, $h(x,t)=h_0(x)$ with $h_0\in C^\infty(\mathbb R^3)$ vanishing off $\overline B_1(0)$; and of clause (iii) $a=0$, $b(x)=x_1$, $h=0$, with $t_0<T$ arbitrary.

[F1] Wave Cauchy problem: for $c>0$, $t_0<T$, $a,b\in C^\infty(\mathbb R^3)$ and $h$ of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, the function $$u(x,t)=\partial_sH_a(x,s)+H_b(x,s)+c^2\int_{t_0}^tH_{h(\cdot,v)}(x,t-v)\,dv,\qquad s=t-t_0,$$ where $H_\varphi(x,\sigma)=\sigma M_{c\sigma}\varphi(x)$ and $M_r\varphi(x)=\frac{1}{4\pi}\int_{S^2}\varphi(x+rn)\,d\Omega(n)$, is of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense and satisfies $Wu=h$, $u(\cdot,t_0)=a$ and $\partial_tu(\cdot,t_0)=b$ with $W=c^{-2}\partial_t^2-\Delta$; every $C^2$ extension-sense solution with the same data equals it (clause (b)); and if $a$ vanishes off a compact $K_a$, $b$ off a compact $K_b$ and every $h(\cdot,v)$ off one fixed compact $K_h$, with $K_a\cup K_b\cup K_h\subseteq\overline B_\rho(0)$, then $u(x,t)=0$ whenever $|x|>\rho+c(t-t_0)$ (clause (d)) ([[thm-em-wave-cauchy-kirchhoff]]).

[F2] For $f\in C^\infty(\mathbb R^3)$, $r\mapsto M_rf(x)$ is smooth for $r\ge0$ with the normalisation of [F1] and no decay hypotheses; for each fixed $f$ the function $H_f(x,t)=tM_{ct}f(x)$ is the one used in [F1] ([[lem-em-spherical-mean-wave-identity]]).

[F3] The reflection $n\mapsto-n$ preserves the surface measure $d\Omega$, $\int_{S^2}1\,d\Omega=4\pi$, $\int_{S^2}n\,d\Omega(n)=0$, and the chart surface measure on $S^2$ is the polar surface measure ([[lem-first-moment-of-the-unit-sphere-vanishes]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-euclidean-inner-product]]). Consequently $M_r1(x)=1$ and $M_r(x\mapsto x_1)(x)=x_1$ for every $r\ge0$ and every $x\in\mathbb R^3$, since the sphere integral of the constant $1$ is $4\pi$ and the sphere integral of $n\mapsto x_1+rn_1$ is $4\pi x_1$.

[F4] Energy: for a $C^2$ function $u$ the energy density is $e=\frac12(u_t^2+c^2|Du|^2)$ with $u_t=\partial_tu$ and $Du$ the spatial gradient; for measurable $\Omega$ with $\int_\Omega e<\infty$ the total energy is $E_\Omega(t)=\int_\Omega e(x,t)\,dx$, and when the integral is infinite the total energy is $+\infty$ ([[def-wave-energy-and-energy-flux]]).

[F5] Energy uniqueness for the wave Cauchy problem: under $\mathrm{AC}_\omega$, if a classical solution of $\Box_cu=0$ has Cauchy data $(u_0,u_1)$ with differentiable $u_0$ and the total energy has a finite initial value $E_{\mathbb R^3}(0)=\frac12\int_{\mathbb R^3}(u_1^2+c^2|Du_0|^2)$ and is conserved in the sharp form $E_{\mathbb R^3}(t)=E_{\mathbb R^3}(0)$, then vanishing data force $u\equiv0$ ([[cor-energy-uniqueness-for-the-wave-cauchy-problem]]).

[F6] For nonnegative measurable $f\le g$ one has $\int f\le\int g$; Tonelli's theorem permits the iterated integral of a nonnegative measurable function on a product of $\sigma$-finite spaces to be computed in either order; the box $[-R,R]^3$ has Lebesgue measure $(2R)^3$ with $\int_{-R}^Rx_1^2\,dx_1=2R^3/3$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-newton-leibniz-with-interior-derivative]]).

[F7] The published Duhamel principle for the forced wave equation assumes a source continuous and compactly supported in $x$ for each fixed $s$, with all spatial derivatives through order $\lfloor n/2\rfloor+1$ jointly continuous; its launched-solution construction applies to the admissible slices of the source ([[thm-wave-duhamel-principle]]).

[F8] The Euclidean norm obeys the triangle inequality and hence $|y|\ge|x|-|y-x|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F9] Every continuous function on a closed nondegenerate Euclidean rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]); under $\mathrm{AC}_\omega$, a bounded Borel Riemann integrand on such a rectangle has the same Lebesgue integral ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]). In particular these apply to the continuous polynomial $x_1\mapsto x_1^2$ on $[-R,R]$.

[F10] Under $\mathrm{AC}_\omega$, $\lambda_m\times\lambda_n$ equals $\lambda_{m+n}$ on Borel sets for $m,n\ge1$ ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]). Applying this with $(m,n)=(1,1)$ and $(2,1)$ identifies the iterated product integral of the continuous nonnegative energy density on $[-R,R]^3$ with its Euclidean Lebesgue integral. The factor measures are sigma-finite because the finite-measure intervals $[-N,N]$ exhaust $\mathbb R$ by [F6].

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Setting and clause (i). With $a=b=0$, $t_0=0$ and $h\equiv1$, [F1] gives $u(x,t)=c^2\int_0^tH_1(x,t-v)\,dv$ with $H_1(x,\sigma)=\sigma M_{c\sigma}1(x)=\sigma$ by [F3]; hence $u(x,t)=c^2\int_0^t(t-v)\,dv=c^2t^2/2$ for $0\le t\le T$. Then $\partial_t^2u=c^2$, $\Delta u=0$ by [F1], so $Wu=c^{-2}c^2-0=1=h$, and $u(\cdot,0)=0$, $\partial_tu(\cdot,0)=0$ by the same formula. For every $t>0$ the function $u(\cdot,t)=c^2t^2/2$ is a nonzero constant on $\mathbb R^3$, so it does not vanish off any compact subset of $\mathbb R^3$: the hypothesis of clause (d) that the source vanish off one fixed compact set cannot be dropped. [given, A1, F1, F2, F3]

2.1 Clause (ii). With $a=b=0$, $t_0=0$ and $h(x,t)=h_0(x)$, [F1] gives $u(x,t)=c^2\int_0^t(t-v)M_{c(t-v)}h_0(x)\,dv$. Fix $t\in[0,T]$ and $x$ with $|x|>1+ct$; for every $v\in[0,t]$ and every $y$ with $|y-x|=c(t-v)$ one has $|y|\ge|x|-|y-x|>1+ct-c(t-v)\ge1$ by the reverse triangle inequality [F8], so $y\notin\overline B_1(0)$ and the integrand $h_0(y)$ vanishes identically on the sphere $S_{c(t-v)}(x)$; hence $M_{c(t-v)}h_0(x)=0$ and $u(x,t)=0$. At the threshold $|x|=1+ct$, the same inequalities give $|y|\ge1$, and $h_0$ vanishes also on $|y|=1$ by continuity from the exterior; hence the integral is zero there as well. This exhibits clause (d) with $K_h=\overline B_1(0)$ and $\rho=1$ from the displayed formula of the theorem, including the closed support boundary. [step 1.1, F1, F2, F8]

2.2 Clause (iii). With $a=0$, $b(x)=x_1$ and $h=0$, [F1] gives $u(x,t)=H_b(x,s)=sM_{cs}b(x)=(t-t_0)x_1$ by [F3]; then $\partial_t^2u=0$ and $\Delta u=0$, so $Wu=0$, while $u(\cdot,t_0)=0$ and $\partial_tu(\cdot,t_0)=x_1=b$. The solution is unbounded on every time slice $t>t_0$. Its energy density is $e(x,t)=\frac12x_1^2+\frac12c^2(t-t_0)^2$ by [F4] and [F1]; for every $R>0$ the box integral is $\int_{[-R,R]^3}e\,d\lambda=\frac12\bigl(\frac{2R^3}{3}\bigr)(2R)^2+\frac12c^2(t-t_0)^2(2R)^3=\frac{4}{3}R^5+4c^2(t-t_0)^2R^3\ge\frac43R^5$ by [F6], [F9] and [F10], which tends to $+\infty$; monotonicity of the nonnegative integral over $\mathbb R^3$ therefore gives total energy $+\infty$ for every $t\ne t_0$, and in particular the initial energy $E_{\mathbb R^3}(t_0)=\frac12\int_{\mathbb R^3}x_1^2\,d\lambda=+\infty$. So the finite-initial-energy hypothesis of the energy-uniqueness corollary [F5] fails for this smooth datum, while clause (b) of [F1] still supplies uniqueness, since it assumes no finite-energy or decay hypothesis. [step 1.1, F1, F3, F4, F5, F6, F9, F10]

3.1 The two hypothesis boundaries and the published Duhamel principle. Steps 1.1 and 2.1 show that in the wave Cauchy theorem the compact-support hypothesis of clause (d) is a genuine hypothesis and that it yields the propagation bound $|x|>1+ct$ for a source supported in $\overline B_1(0)$; step 2.2 shows that smooth data of unbounded energy are admitted by the theorem's existence, uniqueness and representation clauses, although they are outside the energy-uniqueness corollary. The published Duhamel principle [F7] carries the per-slice compact-support hypothesis by which its own statement places each source slice in the admissible velocity-data class, so that hypothesis does real work in the item; the constant source of step 1.1 has no compact spatial support on any slice, so [F7] is not applicable to that witness, while the theorem of this pair is defined for it and yields the non-compactly-supported solution displayed in step 1.1. [step 1.1, step 2.1, step 2.2, F7] ∎
