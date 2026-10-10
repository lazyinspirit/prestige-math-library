---
id: pthm-em-wave-energy-average
kind: physics-theorem
title: "Period-averaged energy density, Poynting vector and momentum flux of a plane wave"
status: draft
origin: pipeline
domain: physics
dependency_level: 19
deps: [pthm-em-plane-wave-maxwell,
       def-em-plane-wave-definition,
       def-em-vacuum-energy-flux,
       def-em-vacuum-stress-momentum,
       pthm-em-poynting-balance,
       pthm-em-momentum-balance,
       post-em-lorentz-coupling,
       lem-em-period-average,
       thm-ftc-second-part,
       def-em-si-conventions,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       lem-cross-product-is-bilinear-alternating-and-orthogonal,
       thm-cross-product-norm-is-the-two-vector-gram-determinant,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       def-multidimensional-rectangle-and-volume,
       def-multidimensional-darboux-integral,
       thm-riemann-fubini-on-product-rectangles,
       thm-continuous-on-a-rectangle-is-riemann-integrable]
dependency_roles:
  pthm-em-plane-wave-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-vacuum-stress-momentum: formulation-prerequisite
  pthm-em-poynting-balance: physical-result
  pthm-em-momentum-balance: physical-result
  post-em-lorentz-coupling: physical-assumption
  lem-em-period-average: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact period-average identities for an ideal whole-space plane-wave solution of the smooth source-free vacuum Maxwell branch, in a named inertial chart with SI constants: averaged energy density, Poynting flux, momentum density and Maxwell-stress/momentum-flux tensor, with the physical balance reading additionally conditional on Lorentz continuum coupling (ii) in the explicitly defined empty-matter model. Excluded: finite beams and pulses, sources, boundaries, material media, any ensemble or detection statistics, any nonzero finite-total-energy whole-space plane wave, and any empirical claim. The admitted zero amplitude has zero total energy."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 pp. 92-94 (plane-wave Poynting vector $S=(E_0^2/(c\\mu_0))\\hat k\\sin^2(k\\cdot x-\\omega t)$, the period averages $\\bar S=E_0^2/(2c\\mu_0)\\hat k$, $\\bar u=\\epsilon_0E_0^2/2$ and $\\bar S=c\\bar u\\hat k$)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.3 printed pp. 381-382 (cycle averages $\\langle u\\rangle=\\frac12\\epsilon_0E_0^2$, $\\langle S\\rangle=\\frac12c\\epsilon_0E_0^2\\hat k$, $\\langle P\\rangle=\\frac12(\\epsilon_0E_0^2/c)\\hat k$; intensity $I$; Problem 9.11 averaging device; Problem 9.12 stress tensor)"
verification:
  precheck: pass
---

## Statement

Let $k\in\mathbb R^3\setminus\{0\}$, $\omega>0$ with $\omega=c|k|$, let
$e\in\mathbb C^3$ with $k\cdot e=0$ and $b=k\times e/\omega$, and let $(E,B)$ be
the corresponding plane-wave solution of [[pthm-em-plane-wave-maxwell]]
([[def-em-plane-wave-definition]]) on $\mathbb R^3\times\mathbb R$. Let $u$ and
$S$ be the energy density and Poynting vector of
[[def-em-vacuum-energy-flux]], and $g=S/c^2$, $\sigma$, $\Pi=-\sigma$ the
momentum density, Maxwell stress and momentum flux of
[[def-em-vacuum-stress-momentum]]. Write $T=2\pi/\omega$,
$|e|^2=e\cdot\overline e$, $\hat k=k/|k|$, and let
$\langle f\rangle:=\frac1T\int_0^Tf(x,s)\,ds$ be the period average at fixed
$x$. Then, for every $x\in\mathbb R^3$:

(a) [Averaged energy density] $\langle u\rangle=\frac{\varepsilon_0}{2}|e|^2$,
independent of $x$ and of the starting time.

(b) [Averaged Poynting vector]
$\langle S\rangle=\frac{\varepsilon_0c}{2}|e|^2\hat k$; hence
$\langle S\rangle=\langle u\rangle c\hat k$, and the period-averaged intensity
is $I:=|\langle S\rangle|=c\langle u\rangle=\frac{\varepsilon_0c}{2}|e|^2$.

(c) [Averaged momentum density, stress and momentum flux]
$\langle g\rangle=\frac{\varepsilon_0}{2c}|e|^2\hat k$, and componentwise
$\langle\sigma_{ij}\rangle=-\langle u\rangle\hat k_i\hat k_j$, equivalently
$\langle\Pi_{ij}\rangle=\langle u\rangle\hat k_i\hat k_j$; the period-averaged
momentum flux across a plane with unit normal $n$ (with the physical balance
interpretation conditional as in (d)) is therefore
$\langle u\rangle(\hat k\cdot n)\hat k$, a pure flux along $\hat k$ with signed
coefficient $(I/c)(\hat k\cdot n)$ and magnitude $(I/c)|\hat k\cdot n|$. The
tensor identity holds for every complex transverse amplitude $e$, not only for
real or circular ones.

(d) [Balance reading with continuum coupling] For this clause additionally
adopt [[post-em-lorentz-coupling]](ii) for the empty-matter model on
$\mathbb R^3\times\mathbb R$: the matter energy density
$w:\mathbb R^3\times\mathbb R\to\mathbb R$, energy flux
$Q:\mathbb R^3\times\mathbb R\to\mathbb R^3$, momentum density
$p:\mathbb R^3\times\mathbb R\to\mathbb R^3$ and momentum flux
$P:\mathbb R^3\times\mathbb R\to\mathbb R^{3\times3}$ are all identically
zero, as are the source fields $\rho,J$. The adopted electromagnetic force
and power densities are then $f:=\rho E+J\times B=0$ and $J\cdot E=0$,
respectively; the zero matter balances are satisfied. Under this additional
interpretation premise the local identities of [[pthm-em-poynting-balance]]
and [[pthm-em-momentum-balance]] hold for this field; since $u,g,S,\sigma$ are $T$-periodic in $t$, the period averages of
their time derivatives vanish ([[thm-ftc-second-part]]), so averaging the
identities gives $\operatorname{div}\langle S\rangle=0$ and
$\operatorname{div}\langle\sigma\rangle=0$ consistently (both averaged fields
are in fact constant), and the reading of $u,S,g,\Pi$ as energy and momentum
densities and fluxes is that of those two theorems.

(e) [Scope] These are exact identities for the ideal plane wave; $I$ is the
intensity used by the radiation-pressure thought experiment of the companion
page and in radiation-flux arguments. No detection statistics, no finite-beam
or finite-time realisation and no empirical claim is made, and the zero
amplitude gives the zero wave and zero total energy, whereas every nonzero
amplitude gives infinite total energy over $\mathbb R^3$.

## Facts & Assumptions

**Given:** The wavevector $k\ne0$, the frequency $\omega=c|k|$, the amplitude $e\in\mathbb C^3$ with $k\cdot e=0$, $b=k\times e/\omega$, the plane-wave pair $(E,B)$ on $\mathbb R^3\times\mathbb R$ with phase $\theta(x,t)=k\cdot x-\omega t$, the constants of the SI conventions, and the quantities $u,S,g,\sigma,\Pi$ of the two definition items. For clause (d)'s physical balance interpretation additionally [A1].

[F1] Period averages ([[lem-em-period-average]]): for $\omega>0$, $T=2\pi/\omega$ and $a,d\in\mathbb C$, $\frac1T\int_0^T\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})\,dt=\frac12\operatorname{Re}(a\overline d)$; for $a,d\in\mathbb C^3$ the same identity holds with the componentwise complex-bilinear Euclidean inner product, and $\frac1T\int_0^T\operatorname{Re}(ae^{-i\omega t})\times\operatorname{Re}(de^{-i\omega t})\,dt=\frac12\operatorname{Re}(a\times\overline d)$ componentwise.

[F2] Energy density and Poynting vector ([[def-em-vacuum-energy-flux]]): $u=\frac{\varepsilon_0}{2}\langle E,E\rangle+\frac{1}{2\mu_0}\langle B,B\rangle$ and $S=\frac{1}{\mu_0}E\times B$ are $C^\infty$ and $u\ge0$.

[F3] Momentum density, Maxwell stress and momentum flux ([[def-em-vacuum-stress-momentum]]): $g=S/c^2$, $\sigma_{ij}=\varepsilon_0(E_iE_j-\frac12\delta_{ij}|E|^2)+\frac{1}{\mu_0}(B_iB_j-\frac12\delta_{ij}|B|^2)$ and $\Pi=-\sigma$, with $\sigma$ symmetric.

[F4] Balance identities ([[pthm-em-poynting-balance]](a), (c), [[pthm-em-momentum-balance]](a), (c)): under [A1], for the jointly $C^1$ fields of the smooth branch with $\rho=J=0$ one has $\partial_tu+\operatorname{div}S=0$ and $\partial_tg-\operatorname{div}\sigma=0$ (equivalently $\partial_tg+\operatorname{div}\Pi=0$) componentwise on the whole-space region. The momentum theorem requires clause (ii) of [[post-em-lorentz-coupling]] for its force-density and balance interpretation; the Poynting identity (a) follows from Maxwell alone, while its physical matter-exchange interpretation (c) also uses that coupling.

[F5] Plane-wave solutions ([[pthm-em-plane-wave-maxwell]]): with $|k|=\omega/c$, $k\cdot e=0$ and $b=k\times e/\omega$ the pair $(E,B)$ lies in the source-free smooth Maxwell branch on $\mathbb R^3\times\mathbb R$; the fields are $C^\infty$, $B=\hat k\times E/c$ pointwise and $|B|=|E|/c$.

[F6] Plane-wave encoding ([[def-em-plane-wave-definition]]): $E=\operatorname{Re}(e\exp(i\theta))$, $B=\operatorname{Re}(b\exp(i\theta))$, $\theta=k\cdot x-\omega t$, and the amplitudes determine the fields uniquely.

[F7] Fundamental theorem of calculus ([[thm-ftc-second-part]]): for $F$ of class $C^1$ on $[0,T]$, $\int_0^TF'(t)\,dt=F(T)-F(0)$; more generally the integral of the derivative over any interval equals the increment.

[F8] Cross and inner product algebra ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]): the cross product is bilinear and alternating and the inner product is bilinear and symmetric, so the coordinate identities $u\times(v\times w)=v\langle u,w\rangle-w\langle u,v\rangle$ and $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$ hold for real vectors, The triple-product identity extends to complex entries by the same coordinate polynomial calculation. The norm identity is used only for real vectors; complex norms mean $|z|^2=\sum_j|z_j|^2$ and require conjugation.

[F9] Real and imaginary parts ([[def-complex-conjugate-real-imaginary-part-and-modulus]]): $\operatorname{Re}$ and conjugation are $\mathbb R$-linear, $\overline{zw}=\overline z\,\overline w$, $z\overline z=|z|^2$, and $\operatorname{Re}(\overline z)=\operatorname{Re}(z)$.

[F10] SI constants ([[def-em-si-conventions]]): $\varepsilon_0=(\mu_0c^2)^{-1}$, so $1/(\mu_0c^2)=\varepsilon_0$ and $1/(\mu_0c)=\varepsilon_0c$; $c>0$.

[F11] Riemann integration on rectangles ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-darboux-integral]], [[thm-riemann-fubini-on-product-rectangles]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]]): continuous functions on closed nondegenerate rectangles are Riemann integrable, the multiple integral equals the iterated integral when the sections are integrable, and the Darboux integral of a nonnegative function is monotone in the rectangle.

[A1] Interpretation premise for clause (d) and the physical flux reading in (c): adopt [[post-em-lorentz-coupling]](ii) in the empty-matter model defined in (d), with $\rho=J=0$ and $w,Q,p,P$ identically zero. Then its adopted force density $f=\rho E+J\times B$ (N m$^{-3}$) and power density $J\cdot E$ (W m$^{-3}$) vanish. This is an additional model assumption, not a consequence of the source-free Maxwell equations; the numerical average identities in (a)-(c) and the total-energy assertion in (e) do not require it.

## Proof

**Proof technique:** direct.

1.1 Setup and componentwise averages. Fix $x\in\mathbb R^3$ and put $\alpha:=e\,e^{ik\cdot x}$, $\delta:=b\,e^{ik\cdot x}\in\mathbb C^3$, so that $E_i=\operatorname{Re}(\alpha_ie^{-i\omega t})$ and $B_i=\operatorname{Re}(\delta_ie^{-i\omega t})$ for each $i$ by [F6], with $\theta=k\cdot x-\omega t$. Applying the scalar and vector forms of [F1] with $a=\alpha$, $d=\alpha$; $a=\delta$, $d=\delta$; and the cross-product form with $a=\alpha$, $d=\delta$, and using $\alpha_i\overline{\alpha_j}=e_ie^{ik\cdot x}\overline{e_j}e^{-ik\cdot x}=e_i\overline{e_j}$ and $|\alpha_i|^2=|e_i|^2$, gives $\langle E_iE_j\rangle=\frac12\operatorname{Re}(e_i\overline{e_j})$, $\langle B_iB_j\rangle=\frac12\operatorname{Re}(b_i\overline{b_j})$ and $\langle E\times B\rangle=\frac12\operatorname{Re}(e\times\overline b)$, and $\langle|E|^2\rangle=\frac12|e|^2$, $\langle|B|^2\rangle=\frac12|b|^2$, all independent of the starting time and of $x$. [given, F1, F5, F6, F9]

2.1 Clause (a). By [F2] and step 1.1, $\langle u\rangle=\frac{\varepsilon_0}{2}\langle|E|^2\rangle+\frac{1}{2\mu_0}\langle|B|^2\rangle=\frac{\varepsilon_0}{4}|e|^2+\frac{1}{4\mu_0}|b|^2$. Write $e=a+id$ with $a,d\in\mathbb R^3$. Since $k$ is real and $k\cdot e=0$, both $k\cdot a$ and $k\cdot d$ vanish. The real Gram identity of [F8] applied separately to $a$ and $d$ gives $|b|^2=(|k\times a|^2+|k\times d|^2)/\omega^2=|k|^2(|a|^2+|d|^2)/\omega^2=|e|^2/c^2$ because $|k|=\omega/c$; hence $\langle u\rangle=\frac{\varepsilon_0}{4}|e|^2+\frac{\varepsilon_0}{4}|e|^2=\frac{\varepsilon_0}{2}|e|^2$ by $1/(\mu_0c^2)=\varepsilon_0$ of [F10]. The value is independent of $x$ (the phase factors cancel in step 1.1) and of the starting time: the integrand is $T$-periodic and continuous, so its integral over any interval of length $T$ equals $\int_0^T$ by [F7] applied to the function $G(s)=\int_s^{s+T}f$ with $G'=0$. [step 1.1, F2, F8, F10, algebra]

3.1 Clause (b). By [F2] and the cross-product average of step 1.1, $\langle S\rangle=\frac{1}{\mu_0}\langle E\times B\rangle=\frac{1}{2\mu_0}\operatorname{Re}(e\times\overline b)$. Since $b=k\times e/\omega$ and $k$ is real, $e\times\overline b=\frac1\omega e\times(k\times\overline e)=\frac1\omega\bigl[k\langle e,\overline e\rangle-\overline e\langle e,k\rangle\bigr]=\frac1\omega k|e|^2$ by the triple-product identity of [F8] and $\langle e,k\rangle=0$; hence $\langle S\rangle=\frac{|e|^2}{2\mu_0\omega}k=\frac{|e|^2|k|}{2\mu_0\omega}\hat k=\frac{|e|^2}{2\mu_0c}\hat k=\frac{\varepsilon_0c}{2}|e|^2\hat k$ by $|k|=\omega/c$ and $1/(\mu_0c)=\varepsilon_0c$ of [F10]. Comparing with step 2.1 gives $\langle S\rangle=\langle u\rangle c\hat k$ and $I=|\langle S\rangle|=\frac{\varepsilon_0c}{2}|e|^2=c\langle u\rangle$. [step 1.1, F2, F8, F10, algebra]

3.2 Clause (c), tensor identity. By [F3] and step 1.1, $\langle\sigma_{ij}\rangle=\varepsilon_0\bigl(\frac12\operatorname{Re}(e_i\overline{e_j})-\frac14\delta_{ij}|e|^2\bigr)+\frac{1}{\mu_0}\bigl(\frac12\operatorname{Re}(b_i\overline{b_j})-\frac14\delta_{ij}|b|^2\bigr)$. For the magnetic term, the coordinate identity of [F8] for the cross product applied componentwise gives $\operatorname{Re}(b_i\overline{b_j})=\frac{1}{\omega^2}\operatorname{Re}\bigl[(k\times e)_i\overline{(k\times e)_j}\bigr]=\frac{1}{\omega^2}\bigl[|k|^2|e|^2\delta_{ij}-k_ik_j|e|^2-|k|^2\operatorname{Re}(e_i\overline{e_j})\bigr]$: multiplying the coordinate formula for $(k\times e)_i$ and $\overline{(k\times e)_j}$ and summing over the repeated indices leaves exactly the three displayed contractions, using $\langle k,e\rangle=0$ and the reality of $k$, and $\operatorname{Re}(\overline{e_i}e_j)=\operatorname{Re}(e_i\overline{e_j})$ by [F9]. Substituting, the two $\operatorname{Re}(e_i\overline{e_j})$ coefficients are $\frac{\varepsilon_0}{2}-\frac{|k|^2}{2\mu_0\omega^2}=\frac{\varepsilon_0}{2}-\frac{1}{2\mu_0c^2}=0$ by $|k|^2/\omega^2=1/c^2$ and [F10], and the total $\delta_{ij}$ contribution is $-\frac{\varepsilon_0}{4}|e|^2+\frac{|k|^2|e|^2}{2\mu_0\omega^2}-\frac{1}{4\mu_0}|b|^2=(-\frac{\varepsilon_0}{4}+\frac{\varepsilon_0}{2}-\frac{\varepsilon_0}{4})|e|^2=0$ using $|b|^2=|e|^2/c^2$ from step 2.1; there remains $\langle\sigma_{ij}\rangle=-\frac{|k|^2|e|^2}{2\mu_0\omega^2}\frac{k_ik_j}{|k|^2}=-\frac{\varepsilon_0}{2}|e|^2\hat k_i\hat k_j=-\langle u\rangle\hat k_i\hat k_j$ by [F10] and step 2.1, so $\langle\Pi_{ij}\rangle=-\langle\sigma_{ij}\rangle=\langle u\rangle\hat k_i\hat k_j$. [step 1.1, step 2.1, F3, F8, F9, F10, algebra]

3.3 Clause (e), zero and nonzero amplitudes. If $e=0$ then $b=k\times e/\omega=0$, so $E=B=0$ by [F6] and $u=0$ identically by [F2]; all box integrals and their supremum vanish, so the zero amplitude gives the zero wave and zero total energy. Assume now $e\ne0$ and write $e=a+id$ with $a,d\in\mathbb R^3$; then $u=\varepsilon_0|a\cos\theta-d\sin\theta|^2$ by [F2] and [F6], with $\theta=k\cdot x-\omega t$. Choose a coordinate $j$ with $k_j\ne0$ and put $P:=2\pi/|k_j|$; at fixed $t$ and fixed coordinates $x_i$, $i\ne j$, the map $x_j\mapsto\theta$ is affine with nonzero slope $k_j$, so over any $x_j$-interval of length $P$ the phase runs through an interval of length $2\pi$; the average $\langle u\rangle=\frac{\varepsilon_0}{2}|e|^2$ of step 2.1 is strictly positive here, so $e\ne0$ gives a nonzero wave, and the $2\pi$-periodicity of $\theta\mapsto|a\cos\theta-d\sin\theta|^2$ (by [F9] and the periodicity of the trigonometric functions implicit in the encoding of [F6]) gives $\int_{x_j}^{x_j+P}u\,dx_j=\frac{\varepsilon_0}{|k_j|}\int_0^{2\pi}|a\cos\phi-d\sin\phi|^2d\phi=\frac{\varepsilon_0}{|k_j|}\bigl[\pi|a|^2+\pi|d|^2\bigr]=\frac{\varepsilon_0P}{2}|e|^2>0$, where the elementary integrals of $\cos^2$, $\sin^2$ and $\sin\cos$ over a full period are computed from their derivatives by [F7] and $\int_0^{2\pi}\sin\phi\cos\phi\,d\phi=[\frac12\sin^2\phi]_0^{2\pi}=0$ by [F7]. By [F11] the continuous density is Riemann integrable on every closed box and the iterated integral equals the multiple integral, so for $R=NP$ with a positive integer $N$, integrating first in $x_j$ over the $2N$ full periods of $[-R,R]$ and then over the square $[-R,R]^2$ in the other coordinates gives $\int_{[-R,R]^3}u=(2N)\cdot(2R)^2\cdot\frac{\varepsilon_0P}{2}|e|^2=(2R)^2N\varepsilon_0P|e|^2\to+\infty$ as $N\to\infty$; since $u\ge0$, the Darboux integrals over the boxes are monotone in $R$ by [F11], so the box-exhaustion total energy $\sup_{R>0}\int_{[-R,R]^3}u$ is $+\infty$. [step 1.1, step 2.1, F2, F5, F6, F7, F9, F11, algebra]

4.1 Momentum density and flux reading. By [F3], $\langle g\rangle=\langle S\rangle/c^2=\frac{\varepsilon_0}{2c}|e|^2\hat k$ by step 3.1, and $\langle\Pi\rangle=-\langle\sigma\rangle$ with $\langle\Pi_{ij}\rangle=\langle u\rangle\hat k_i\hat k_j$ by step 3.2; the period-averaged momentum flux across a plane with unit normal $n$ is the vector with components $\sum_j\langle\Pi_{ij}\rangle n_j=\langle u\rangle\hat k_i(\hat k\cdot n)$, that is $\langle u\rangle(\hat k\cdot n)\hat k$, with signed coefficient $(I/c)(\hat k\cdot n)$ and magnitude $(I/c)|\hat k\cdot n|$ because $|\hat k|=1$ and $I=c\langle u\rangle$ by step 3.1. [step 3.1, step 3.2, F3, algebra]

4.2 Balance reading (clause (d)). Under [A1], the empty-matter model has zero force and power densities, and [F5] supplies smooth Maxwell fields with continuous zero sources; thus all hypotheses of both balance theorems in [F4], including the Lorentz-coupling premise, hold. By step 2.1 the function $u$ is $C^\infty$ on the whole-space region and $T$-periodic in $t$, so the mean of $\partial_tu$ vanishes, $\frac1T\int_0^T\partial_tu(x,s)\,ds=\frac{u(x,T)-u(x,0)}{T}=0$, by [F7]; the same computation applies to each component of $g$ by [F3] and step 3.1. The averaged fields $\langle S\rangle$ of step 3.1 and $\langle\sigma\rangle$ of step 3.2 are constant, so $\operatorname{div}\langle S\rangle=0$ and $\operatorname{div}\langle\sigma\rangle=0$ componentwise; hence the local identities of [F4] with $f=0$ hold term by term after period-averaging, and under the additional adopted premise [A1] the identification of $u,S,g,\Pi$ as energy and momentum densities and fluxes is exactly the interpretation stated by those two balance theorems ([[def-em-vacuum-energy-flux]](e), [[def-em-vacuum-stress-momentum]](f)). [step 2.1, step 3.1, step 3.2, F2, F3, F4, F5, F7, A1]

5.1 Conclusion. Clause (a) is step 2.1, clause (b) is step 3.1, the tensor identity of clause (c) is step 3.2 and its algebraic flux contraction is step 4.1, its physical balance reading under [A1] and clause (d) are step 4.2, and the zero- and nonzero-amplitude statements of clause (e) are step 3.3. The identities hold for every complex transverse amplitude $e$ because no step used reality or any relation between $a$ and $d$ beyond the amplitude conditions $k\cdot e=0$, $b=k\times e/\omega$, $|k|=\omega/c$; no detection statistics, finite-beam or empirical content is asserted, and $I$ is the intensity used by the radiation-pressure thought experiment and the radiation-flux arguments on the companion pages. [step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2, given] ∎

## Source notes

The cited treatments compute the cycle averages of energy density, Poynting flux and momentum density for the monochromatic plane wave and identify $\bar S=c\bar u\hat k$; the deduction above is the componentwise period-average calculation applied to the framework's definitions, and the Maxwell-stress average is proved from the coordinate identity for the cross product. No energy or momentum content is imported from the treatments beyond the definitions and the balance identities of this framework.
