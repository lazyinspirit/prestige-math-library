---
id: ex-em-vacuum-energy-flow-example
kind: example
title: "Energy flow in crossed external fields with finite-volume accounting"
domain: physics
physical_scope: "An ideal source-free plane-wave configuration of the classical vacuum framework on all of R^3 x R: its verification against the four smooth-branch Maxwell equations, its exact energy density and Poynting vector, the pointwise energy balance, and the finite-box energy accounting with outward face fluxes. The configuration is an exact solution of the adopted equations with no source and no empirical realization; no finite whole-space energy or empirical realization is claimed."
status: draft
origin: pipeline
dependency_level: 19
proof_strategy: direct
deps: [def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-complex-plane-wave, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-vacuum-energy-flux, def-euclidean-inner-product, post-em-vacuum-maxwell, pthm-em-poynting-balance, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-complex-exponential-is-entire-with-derivative-itself, thm-eulers-formula, thm-ftc-second-part, thm-riemann-fubini-on-product-rectangles, def-ck-euclidean-maps-and-diffeomorphisms, thm-continuous-partial-derivatives-imply-total-differentiability, thm-total-derivative-computes-directional-and-partial-derivatives, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-bounded-piecewise-c-one-euclidean-domain, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-multidimensional-rectangle-and-volume, thm-multidimensional-integral-properties, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-complex-plane-wave: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  pthm-em-poynting-balance: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-total-differentiability-gives-a-local-linear-bound-and-continuity: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 printed pp. 93-94 (PDF pp. 101-102): the Poynting vector and energy density of a travelling plane wave, S=(E_0^2/(c mu_0)) khat sin^2(k.x-omega t) and the energy density of the same wave; read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2-9.2.3 printed pp. 378-381 (PDF pp. 394-397), eqs. (9.48), (9.51)-(9.57): real plane-wave fields, energy density and energy flux. Printed p. 380 (PDF p. 396), whose extracted text is empty, was inspected as a rendered page image. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§47 printed pp. 110-112 (PDF pp. 122-124), eqs. (47.3)-(47.6): transverse fields and plane-wave flux; §48 printed pp. 114-115 (PDF pp. 126-127), eqs. (48.2), (48.5): complex monochromatic encoding. Gaussian units are re-expressed in SI. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
---

## Example

Let $k>0$ carry $\mathrm m^{-1}$, $\omega:=ck$ carry $\mathrm s^{-1}$,
and $E_0>0$ carry $\mathrm V\,\mathrm m^{-1}$. On $\Omega\times I=\mathbb R^3\times\mathbb R$
define, with $\theta(x,t):=kz-\omega t$ in the frame $(e_1,e_2,e_3)$ of
[[def-em-lab-geometry]] and the encoding of [[def-em-complex-plane-wave]],

$$E(x,t):=E_0\cos(kz-\omega t)\,e_1=\operatorname{Re}\bigl[E_0e_1\,e^{i(kz-\omega t)}\bigr],\qquad B(x,t):=\frac{E_0}{c}\cos(kz-\omega t)\,e_2=\operatorname{Re}\bigl[\tfrac{E_0}{c}e_2\,e^{i(kz-\omega t)}\bigr].$$

The electric and magnetic fields are perpendicular to one another and to the
direction $e_3$ ("crossed" fields); $E$ oscillates along $e_1$ and $B$ along
$e_2$. Then:

(a) [Field data] $E$ and $B$ are smooth fields of [[def-em-fields]] on
$\mathbb R^3\times\mathbb R$, and they satisfy the smooth branch of
[[post-em-vacuum-maxwell]] with $\rho=0$ and $J=0$.

(b) [Energy density and flux] With $u$ and $S$ of
[[def-em-vacuum-energy-flux]],

$$u(x,t)=\varepsilon_0E_0^2\cos^2(kz-\omega t),\qquad S(x,t)=\varepsilon_0cE_0^2\cos^2(kz-\omega t)\,e_3,$$

and the local balance $\partial_tu+\partial_zS_3=0$, equivalently
$\partial_tu+\operatorname{div}S=0$, holds exactly on $\mathbb R^3\times\mathbb R$.

(c) [Finite-volume accounting] For $a<b$, $L_1,L_2>0$ and the box
$B:=(0,L_1)\times(0,L_2)\times(a,b)$ with outward normal $n$, for every $t$,

$$\frac{d}{dt}\int_Bu\,dV=L_1L_2\bigl(S_3(a,t)-S_3(b,t)\bigr)=-\oint_{\partial B}S\cdot n\,dS:$$

Here $\int_B h\,dV$ for each continuous box integrand denotes its Riemann
integral over the closed rectangle $\overline B$; the surface integral is the
sum of the six outward-oriented Riemann patch fluxes. In particular,
the four faces with normals $\pm e_1,\pm e_2$ carry zero flux because $S$ is
parallel to $e_3$, and the upper face $z=b$ has outward flux
$L_1L_2S_3(b,t)$ and the lower face $z=a$ has outward flux
$-L_1L_2S_3(a,t)$. Their respective signed contributions to the field-energy
change are $-L_1L_2S_3(b,t)$ and $L_1L_2S_3(a,t)$.

(d) [Scope] The configuration is an ideal source-free plane wave; the
finite-volume accounting of (c) is the fixed-volume energy balance of this
declared solution in the sense of [[pthm-em-poynting-balance]], and the example
asserts no finite whole-space energy and no empirical realization. $E_0>0$, $k>0$ and $\omega=ck$ are the declared
parameters of the configuration.

## Facts & Assumptions

**Given:** $k>0$, $\omega=ck$ with the constant $c>0$ of the framework, $E_0>0$, the phase $\theta(x,t)=kz-\omega t$, the fields $E,B$ defined above, and the box $B=(0,L_1)\times(0,L_2)\times(a,b)$ with $a<b$ and $L_1,L_2>0$.

[F1] The laboratory region, its chart coordinates $(t,x)$, frame basis $(e_1,e_2,e_3)$ and spatial Euclidean structure are those of [[def-em-lab-geometry]]; the fields of [[def-em-fields]] are maps $\Omega\times I\to\mathbb R^3$ of class $C^k$, $E$ polar and $B$ axial, with no value asserted at singular source support.

[F2] Encoding and its calculus: with $e:=E_0e_1$, $b:=(E_0/c)e_2$, $\mathbf k:=k e_3$, the definition of [[def-em-complex-plane-wave]] gives $E_j=\operatorname{Re}(e_j\exp(i\theta))$, $B_j=\operatorname{Re}(b_j\exp(i\theta))$; the definition asserts no regularity of its own beyond well-definedness, and identities obtained from the encoded expressions by sums, real scalar multiples, partial differentiation or integration may be projected by $\operatorname{Re}$ term by term.

[F3] Euler's formula: $\exp(i\vartheta)=\cos\vartheta+i\sin\vartheta$ for every real $\vartheta$ ([[thm-eulers-formula]]).

[F4] The complex exponential is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]); a complex differentiable map is real totally differentiable with derivative equal to multiplication by its complex derivative ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F5] Total-derivative tools: a composite of totally differentiable maps is totally differentiable with the composite derivative ([[thm-chain-rule-for-total-derivatives]]); total differentiability gives continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]); if all first partial derivatives exist near a point and are continuous there, the map is totally differentiable there with Jacobian matrix its total derivative ([[thm-continuous-partial-derivatives-imply-total-differentiability]]); the partial derivatives of a totally differentiable map are the total derivative applied to the coordinate vectors ([[thm-total-derivative-computes-directional-and-partial-derivatives]]); the partial derivative is the derivative of the corresponding line map ([[def-directional-and-partial-derivatives]]).

[F6] $C^k$ conventions: a map into $\mathbb R^q$ is of class $C^k$ when every component is, and a map is smooth when it is $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); finite sums, products, scalar multiples and composites of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); sums, scalar multiples and products of differentiable functions of one variable obey the usual rules ([[thm-algebra-of-derivatives]]).

[F7] Constants and units: $\varepsilon_0=(\mu_0c^2)^{-1}$ with $c>0$ and $\mu_0>0$; $E$ carries $\mathrm V\,\mathrm m^{-1}$, $B$ carries $\mathrm T$, $u$ carries $\mathrm J\,\mathrm m^{-3}$ and $S$ carries $\mathrm W\,\mathrm m^{-2}$ ([[def-em-si-conventions]], [[def-em-vacuum-energy-flux]]).

[F8] Inner and cross products: $\langle\cdot,\cdot\rangle$ is the Euclidean coordinate inner product ([[def-euclidean-inner-product]]); the cross product is bilinear, alternating and right-handed in the positively oriented frame basis, so $e_1\times e_2=e_3$, $e_2\times e_3=e_1$ and $e_3\times e_1=e_2$ ([[def-cross-product-in-r3]]).

[F9] The energy density and Poynting vector are $u=\tfrac{\varepsilon_0}{2}\langle E,E\rangle+\tfrac{1}{2\mu_0}\langle B,B\rangle$ and $S=\mu_0^{-1}E\times B$ ([[def-em-vacuum-energy-flux]]); the smooth branch of [[post-em-vacuum-maxwell]] consists of the four equations $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ for jointly $C^1$ fields.

[F10] Rectangle integration: continuous functions on a compact Jordan set are Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), and the Riemann integral on a nondegenerate closed rectangle is the common lower/upper Darboux value ([[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]]). For a constant integrand $C$, the one-cell lower and upper sums both equal $C$ times the rectangle's volume, the product of its side lengths ([[def-multidimensional-rectangle-and-volume]]). The rectangle Fubini theorem reduces continuous integrands to ordinary iterated integrals ([[thm-riemann-fubini-on-product-rectangles]]); the integral is linear ([[thm-multidimensional-integral-properties]]). For a continuous $h(t,z)$ with continuous $\partial_th$ on a compact time/space rectangle, $\frac{d}{dt}\int_a^b h(t,z)\,dz=\int_a^b\partial_th(t,z)\,dz$ at interior times ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]). Finally $\int_a^bG'=G(b)-G(a)$ for $G$ differentiable on $[a,b]$ with integrable derivative ([[thm-ftc-second-part]]).

[F11] A face patch with parametrization $\varphi$ has oriented flux $\int_D(S\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]); reversing the normal reverses this flux. The general fixed-volume theorem [[pthm-em-poynting-balance]](b) assumes $\mathrm{AC}_\omega$ for its finite piecewise $C^1$ surface-measure interface ([[def-bounded-piecewise-c-one-euclidean-domain]]). Here the six explicit rectangle patch fluxes are computed directly, without invoking that theorem or its choice assumption.

## Verification

**Proof technique:** direct; exhibit the fields through the complex encoding, differentiate the exponential by the chain rule, verify the four Maxwell equations and the exact energy identities by substitution, and compute the finite-box ledger with the fundamental theorem, parameter differentiation and Fubini.

1.1 Explicit real form: by [F3], $\operatorname{Re}(e_j\exp(i\theta))=e_j\cos\theta$ for the real amplitudes $e=E_0e_1$ and $b=(E_0/c)e_2$, so $E=E_0\cos\theta\,e_1$ and $B=(E_0/c)\cos\theta\,e_2$ on $\mathbb R^3\times\mathbb R$; in particular $E\perp B\perp e_3$. [given, F2, F3, algebra]

1.2 Derivatives of the exponential factor: put $G:=\exp(i\theta)$ and $L:=i\theta$, a real-linear map $\mathbb R^4\to\mathbb C\cong\mathbb R^2$ whose partial derivatives are the constants $L(e_j)\in\{0,0,ik,-i\omega\}$. The map $L$ has continuous partial derivatives, hence is totally differentiable with $DL=L$ by [F5]; the exponential is real totally differentiable with derivative multiplication by $\exp$ by [F4]; so the chain rule [F5] makes $G=\exp\circ L$ real totally differentiable at every point with $\partial_jG=DG(e_j)=\exp(i\theta)\,L(e_j)$, that is $\partial_xG=\partial_yG=0$, $\partial_zG=ikG$ and $\partial_tG=-i\omega G$; being differentiable everywhere, $G$ is continuous by [F5]. [given, F4, F5, algebra]

1.3 Box presentation: $B=(0,L_1)\times(0,L_2)\times(a,b)$ is nonempty open and bounded with closure $[0,L_1]\times[0,L_2]\times[a,b]\subseteq\mathbb R^3=\Omega$; its boundary consists of the six closed rectangles $S_1^\pm,\dots,S_3^\pm$ in the coordinate planes, with edge set the twelve edges, each face is a compact Borel subset of a coordinate-plane patch, faces meet only in the edge set, and the outward unit normal is $-e_1,+e_1,-e_2,+e_2,-e_3,+e_3$ on the faces $x=0$, $x=L_1$, $y=0$, $y=L_2$, $z=a$, $z=b$ respectively; the surface integral in (c) is defined as the sum of their outward-oriented patch fluxes in [F11]. [given, F11, algebra]

2.1 Smoothness: we show that $G$ is $C^\infty$. Every partial derivative of $G$ of order at most one is a constant multiple of $G$ by step 1.2, and those partials are continuous because $G$ is. Suppose $G$ is $C^r$ with $r\ge1$ and every partial derivative of order at most $r$ is a constant multiple of $G$; if $P=cG$ is such a partial derivative, then for each coordinate $j$ the line map $s\mapsto P(\cdot+se_j)=c\,G(\cdot+se_j)$ has derivative $c\,\partial_jG=c\,L(e_j)G$ by the scalar-multiple rule [F6], so $\partial_jP$ exists everywhere, equals the constant $c\,L(e_j)$ times $G$, and is continuous; thus every partial derivative of order $r+1$ is a continuous constant multiple of $G$, and $G$ is $C^{r+1}$. By induction $G$ is $C^k$ for every $k$, that is smooth [F6]. [step 1.2, F6, algebra]

2.2 Energy density and flux: substituting step 1.1 into [F9] and using $\mu_0c^2=\varepsilon_0^{-1}$ and $e_1\times e_2=e_3$ gives $u=\tfrac{\varepsilon_0}{2}E_0^2\cos^2\theta+\tfrac{1}{2\mu_0}\tfrac{E_0^2}{c^2}\cos^2\theta=\varepsilon_0E_0^2\cos^2\theta$ and $S=\mu_0^{-1}E_0\tfrac{E_0}{c}\cos^2\theta\,e_3=\varepsilon_0cE_0^2\cos^2\theta\,e_3$, which is clause (b) with the units of [F7]. [step 1.1, F7, F8, F9, algebra]

3.1 Field data: $E_j=E_0\operatorname{Re}(G)$ for $j=1$ and $E_j=0$ otherwise, and $B_2=(E_0/c)\operatorname{Re}(G)$ with the other components zero; since $G$ is smooth and real parts, scalar multiples and zero components of smooth maps are smooth by [F6], the maps $E,B:\mathbb R^3\times\mathbb R\to\mathbb R^3$ are smooth fields of [F1]. Their relevant partial derivatives are $\partial_tE_1=E_0\operatorname{Re}(-i\omega G)=E_0\omega\sin\theta$ and $\partial_zE_1=E_0\operatorname{Re}(ikG)=-E_0k\sin\theta$, and likewise $\partial_tB_2=E_0\omega c^{-1}\sin\theta$ and $\partial_zB_2=-E_0kc^{-1}\sin\theta$, all read from step 1.2. [step 1.1, step 2.1, F6, algebra]

4.1 Maxwell equations with $\rho=J=0$: since $E$ depends only on $z$ in the $e_1$ direction and $B$ only on $z$ in the $e_2$ direction, $\operatorname{div}E=\partial_xE_1+\partial_yE_2+\partial_zE_3=0$ and $\operatorname{div}B=0$; the curl formulas give $\operatorname{curl}E=(\partial_yE_3-\partial_zE_2,\ \partial_zE_1-\partial_xE_3,\ \partial_xE_2-\partial_yE_1)=(0,-E_0k\sin\theta,0)=-\partial_tB$ and $\operatorname{curl}B=(\partial_yB_3-\partial_zB_2,\ \partial_zB_1-\partial_xB_3,\ \partial_xB_2-\partial_yB_1)=(E_0kc^{-1}\sin\theta,0,0)=c^{-2}\partial_tE$, using $\omega=ck$; hence the four smooth-branch equations of [F9] hold with $\rho=0$, $J=0$, which is clause (a). [step 3.1, F8, F9, algebra]

4.2 Local balance: from step 3.1, $\partial_tu=\varepsilon_0E_0^2\cdot2\cos\theta(-\sin\theta)(-\omega)=2\varepsilon_0E_0^2\omega\cos\theta\sin\theta$ and $\partial_zS_3=\varepsilon_0cE_0^2\cdot2\cos\theta(-\sin\theta)k=-2\varepsilon_0cE_0^2k\cos\theta\sin\theta$; their sum is $2\varepsilon_0E_0^2(\omega-ck)\cos\theta\sin\theta=0$ because $\omega=ck$, so $\partial_tu+\partial_zS_3=0$, equivalently $\partial_tu+\operatorname{div}S=0$ since $S$ is parallel to $e_3$; this completes clause (b). [step 3.1, step 2.2, algebra]

5.1 Time derivative of the box energy: at fixed $t$ the function $u$ is continuous on the closed box and independent of $x,y$, so [F10] gives $\int_Bu\,dV=L_1L_2\int_a^bu(z,t)\,dz$. For any real $t$, choose $\alpha<t<\beta$; $u$ and $\partial_tu$ are continuous on $[a,b]\times[\alpha,\beta]$, so the one-dimensional rectangle differentiation theorem of [F10], with time as the differentiation variable, gives $\frac{d}{dt}\int_Bu\,dV=L_1L_2\int_a^b\partial_tu(z,t)\,dz$. By step 4.2 this is $-L_1L_2\int_a^b\partial_zS_3(z,t)\,dz=-L_1L_2(S_3(b,t)-S_3(a,t))$ by the fundamental theorem of [F10]; its derivative integrand is continuous, hence integrable. [step 4.2, F10, algebra]

6.1 Closed-surface flux: on the four faces with normals $\pm e_1,\pm e_2$, $S\cdot n=0$ because $S=S_3e_3$. The upper face has parametrization $\varphi_b(u,v)=(u,v,b)$ on $[0,L_1]\times[0,L_2]$, with $\partial_u\varphi_b\times\partial_v\varphi_b=e_1\times e_2=e_3$, so its outward patch flux is $L_1L_2S_3(b,t)$ by [F10]-[F11]. On the lower face use $\varphi_a(u,v)=(v,u,a)$ on $[0,L_2]\times[0,L_1]$: its cross product is $e_2\times e_1=-e_3$, giving the outward patch flux $-L_1L_2S_3(a,t)$. Summing these six fluxes gives $-\oint_{\partial B}S\cdot n\,dS=L_1L_2(S_3(a,t)-S_3(b,t))$, equal to the energy derivative of step 5.1. Thus (c) follows by direct Riemann computation; the individual contributions to the energy rate are the negatives of the outward fluxes, namely $-L_1L_2S_3(b,t)$ and $+L_1L_2S_3(a,t)$. [step 1.3, step 2.2, step 5.1, F8, F10, F11, algebra]

7.1 Scope and whole-space idealization: the configuration is a source-free smooth solution by step 4.1, and steps 5.1-6.1 establish its finite-box ledger. At fixed $t$, choose $z_0=\omega t/k$, so $\cos^2(kz_0-\omega t)=1$. Continuity from step 3.1 gives $a<b$ about $z_0$ with $\cos^2(kz-\omega t)\ge1/2$ for $z\in[a,b]$. By step 2.2 and the integral order rule of [F10], $\int_Bu\,dV\ge\tfrac12\varepsilon_0E_0^2L_1L_2(b-a)$, unbounded as $L_1L_2$ grows. Thus the improper whole-space energy, defined as the supremum of these nonnegative finite-box energies over all boxes, is infinite; no finite whole-space energy or empirical realization is claimed. [step 2.2, step 3.1, step 4.1, step 5.1, step 6.1, F10, algebra] ∎


## Remarks

- **Why no double-angle identity is needed.** The local balance is proved by differentiating $\cos^2\theta$, equivalently by the product of $\cos\theta$ and $-\sin\theta$ in each term; because $\omega=ck$ the two contributions cancel exactly at every point, which is the exact statement of the balance for this solution and requires no period averaging.
- **The face signs.** The outward normal on the lower face is $-e_3$; the statement lists the flux of the field through the face in the outward orientation as $-L_1L_2S_3(a,t)$, while the contribution of that face to the rate of change of the box energy is its negative, $+L_1L_2S_3(a,t)$. Both signs are kept explicitly.
- **No total-energy claim.** The finite-box energies are unbounded over growing boxes, as proved in step 7.1; the ideal wave therefore has no finite whole-space energy. Clause (d) retains the finite-box and nonempirical scope.
