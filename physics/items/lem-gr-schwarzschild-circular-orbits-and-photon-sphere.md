---
id: lem-gr-schwarzschild-circular-orbits-and-photon-sphere
kind: lemma
title: "Circular timelike geodesics, their radial-potential stability threshold,
  and the photon sphere at r = 3s/2"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-schwarzschild-exterior-model,
    lem-gr-schwarzschild-metric-properties,
    lem-gr-schwarzschild-christoffel-symbols,
    lem-gr-schwarzschild-timelike-geodesic-reduction,
    def-gr-smooth-lorentzian-objects,
    def-gr-metric-selected-connection,
    thm-gr-nondegenerate-levi-civita-and-tensor-derivative,
    def-gr-killing-field,
    thm-gr-killing-and-on-shell-matter-identities,
    def-geodesic-of-an-affine-connection,
    prop-coordinate-geodesic-equation,
    def-gr-timelike-worldline-and-proper-time,
    lem-gr-parallel-transport-and-geodesic-speed,
    def-causal-classification-of-lorentz-vectors,
    def-sine-and-cosine-by-power-series,
    thm-sine-and-cosine-derivatives,
    thm-sine-and-cosine-addition-formulas,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    def-derivative,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    def-rational-power,
    thm-real-power-continuity-and-derivatives,
    def-countable-choice
  ]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.47)-(7.48) and the following
        pages: the effective potential V(r) = (1/2)epsilon - epsilon GM/r +
        L^2/2r^2 - GML^2/r^3, the circular orbits and the innermost stable
        circular orbit at r = 6GM, printed pp. 174-177 (PDF pp. 181-184)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), sections 1.3.3-1.3.5: circular orbits, the stability
        analysis at r = 3GM and the photon sphere at r = 3GM, printed pp. 34-47
        (PDF pp. 41-54)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3:
        the unstable photon orbit at r = 3M, printed p. 19"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with $s>0$ and
$f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), with
$f'=s/r^2$. Then:

For arbitrary $x^0_0,\varphi_0\in\mathbb R$, put
$\omega_0=(\cos\varphi_0,\sin\varphi_0,0)\in S^2$. For $\alpha\in\mathbb R$
define the rotation
$$R_\alpha(y_1,y_2,y_3):=(y_1\cos\alpha-y_2\sin\alpha,\ y_1\sin\alpha+y_2\cos\alpha,\ y_3),$$
and the global axial vector field $\Phi(y_1,y_2,y_3):=(-y_2,y_1,0)$ on $S^2$;
it is tangent because $y\cdot\Phi(y)=0$ for $y\in S^2$.
In every spherical-polar chart near the equator, $\Phi=\partial_\varphi$;
longitude expressions below are local chart expressions for the global sphere
curve $R_\alpha\omega_0$.

In this item, a **timelike circular geodesic** means a future timelike
geodesic whose areal radius $r$ is constant on an interval of positive length;
its angular orientation is unrestricted.

**(a) Existence of circular timelike geodesics.** Let $r_0>3s/2$ and choose
$\ell\in\mathbb R$ with

$$\ell^2=\frac{c^2sr_0^2}{2r_0-3s}>0,\qquad e:=\Bigl(f(r_0)\Bigl(c^2+\frac{\ell^2}{r_0^2}\Bigr)\Bigr)^{1/2} =\frac{c(r_0-s)\sqrt 2}{\sqrt{r_0(2r_0-3s)}}>0 .$$

Then the globally defined curve $\gamma:\mathbb R\to M$ is

$$\gamma(\tau):=\bigl(x^0_0+\tfrac{e}{f(r_0)}\tau,\ r_0,\ R_{\ell\tau/r_0^2}\omega_0\bigr).$$
In each local polar chart along it, $\vartheta=\pi/2$ and the longitude is
$\varphi_0+\ell\tau/r_0^2$ up to a constant multiple of $2\pi$.

It is a future timelike geodesic of the datum, with $g(\gamma',\gamma')=-c^2$
and with the conserved quantities $e=-g(\gamma',\partial_0)$ and
$\ell=g(\gamma',\Phi)$ of
[[lem-gr-schwarzschild-timelike-geodesic-reduction]]; it is a **circular
orbit** at radius $r_0$. Its angular velocity in the coordinate $x^0$ is

$$\frac{d\varphi}{dx^0}=\frac{\ell f(r_0)}{r_0^2e}=\operatorname{sgn}(\ell)\Bigl(\frac{s}{2r_0^3}\Bigr)^{1/2},\qquad\text{so}\qquad \Bigl(\frac{d\varphi}{dt}\Bigr)^2=\frac{G_Nm_*}{r_0^3},$$

$t=x^0/c$.

**(b) The circular-orbit condition is necessary.** Conversely, if
$\gamma:I\to M$ is any future timelike geodesic parametrized by proper time with
$r(\tau)\equiv r_0>s$ constant on an interval of positive length, then
$r_0>\frac{3s}{2}$. If $\gamma$ is equatorial, its conserved angular
momentum additionally satisfies $\ell^2=\dfrac{c^2sr_0^2}{2r_0-3s}$.
Consequently no timelike circular geodesic, in any angular orientation, exists
with $s<r_0\le\frac{3s}{2}$.

**(c) Stability threshold of the radial potential.** For each radius
$r>\frac{3s}{2}$ set $\ell_r^2:=c^2sr^2/(2r-3s)$ and regard $\ell_r$ as a
constant in the function $V_{\ell_r}(x):=\tfrac12 f(x)(c^2+\ell_r^2/x^2)$.
Differentiate with respect to $x$ at fixed $\ell_r$, then evaluate at $x=r$.
The result, evaluated at the circular value $\ell_r$, is

$$V_{\ell_r}''(r)=\frac{c^2s(r-3s)}{r^3(2r-3s)},\qquad r>\frac{3s}{2},$$

so $V_\ell$ has a strict local minimum at the circular-orbit radius exactly
for $r>3s$, a strict local maximum exactly for $\frac{3s}{2}<r<3s$, and
$V_\ell''(3s)=0$; the radius $r=3s$ is the **innermost stable circular orbit
radius** of the restricted model in this potential sense.

**(d) The photon sphere at $r=3s/2$.** Let $\ell\neq0$ and put
$r_0=\frac{3s}{2}$ and $e_0:=\dfrac{\lvert\ell\rvert\sqrt{f(r_0)}}{r_0}=\dfrac{2\lvert\ell\rvert}{3\sqrt3\,s}>0$.
Then the globally defined curve
$$\eta(\tau):=\bigl(x^0_0+\tfrac{e_0}{f(r_0)}\tau,\ r_0,\ R_{\ell\tau/r_0^2}\omega_0\bigr),\qquad \tau\in\mathbb R,$$
whose local polar expressions have $\vartheta=\pi/2$ and longitude
$\varphi_0+\ell\tau/r_0^2$ up to chart shifts, is a future null geodesic (a
**null circular orbit** or **photon sphere**
orbit) with conserved quantities $e_0=-g(\eta',\partial_0)$ and
$\ell=g(\eta',\Phi)$, and its angular velocity is

$$\frac{d\varphi}{dx^0}=\frac{\ell f(r_0)}{r_0^2e_0}=\operatorname{sgn}(\ell)\,\frac{\sqrt{f(r_0)}}{r_0},\qquad \Bigl(\frac{d\varphi}{dx^0}\Bigr)^2=\frac{f(r_0)}{r_0^2}=\frac{4}{27s^2}.$$

The **null effective potential** $W^{\mathrm n}_\ell(r):=f(r)\ell^2/r^2$
satisfies $(W^{\mathrm n}_\ell)'(3s/2)=0$ and
$(W^{\mathrm n}_\ell)''(3s/2)=-\dfrac{32\ell^2}{81s^4}<0$, so the photon-sphere
radius is a strict local maximum of the null potential.

**(e) Scope.** All statements are exact data of the restricted model: the
orbits are ideal geodesics of the metric on the exterior domain, the
stability claim is the sign of the second derivative of the stated potential,
and no claim is made about nonlinear stability, about orbital decay, about
observations or about the interior region. The case $r_0=s$ is excluded, and
the reduction is stated only where $r>s$.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, the global rotations $R_\alpha$ and axial field $\Phi$ of the statement, the function $f=1-s/r$ with $f'=s/r^2$, and the reduction lemma of this page.

[L1] In local spherical-polar product charts the metric components, Christoffel symbols and geodesic equations are those computed on this page; in particular the $\vartheta$-equation is $\ddot\vartheta+2r^{-1}\dot r\dot\vartheta-\sin\vartheta\cos\vartheta\,\dot\varphi^2=0$, the $\varphi$-equation is $\ddot\varphi+2r^{-1}\dot r\dot\varphi+2\cot\vartheta\,\dot\vartheta\dot\varphi=0$, the $x^0$-equation is $\ddot x^0+2\Gamma^0{}_{01}\dot x^0\dot r=0$, and the $r$-equation is $\ddot r+\tfrac{ff'}{2}(\dot x^0)^2-\tfrac{f'}{2f}\dot r^2-rf(\dot\vartheta^2+\sin^2\vartheta\,\dot\varphi^2)=0$ ([[lem-gr-schwarzschild-christoffel-symbols]], [[lem-gr-schwarzschild-metric-properties]], [[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]]).

[L2] For a future timelike geodesic parametrized by proper time, $g(U,U)=-c^2$ and the constants $e=-g(U,\partial_0)=f\dot x^0>0$, $\ell=g(U,\partial_\varphi)=r^2\sin^2\vartheta\,\dot\varphi$ are conserved; along an equatorial geodesic $\dot r^2=e^2-W_\ell(r)$ and the $r$-equation is equivalent to $\ddot r=-\tfrac12W_\ell'(r)$ ([[lem-gr-schwarzschild-timelike-geodesic-reduction]]).

[L3] A curve is a geodesic with affine parameter $\tau$ precisely when its components satisfy the four geodesic equations; a nonzero tangent that is future timelike (respectively null) makes the curve a future timelike (respectively null) geodesic ([[def-geodesic-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The derivative rules for smooth functions of $r$ and the positivity of $f$, $r$ and $\sqrt{\cdot}$ on the stated domains are as on the preceding items of this page ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]]).

[L5] If a smooth one-parameter group acts by isometries, its infinitesimal generator is a Killing field; the pairing of a Killing field with the tangent of an affinely parametrized geodesic is constant ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clause (b)). The product time translations also act by isometries because the global metric is independent of $x^0$.

[L6] The sine and cosine functions are smooth, their derivatives are cosine and minus sine, their addition formulas hold, and $\sin^2\alpha+\cos^2\alpha=1$ ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]). Thus $R_\alpha$ is a smooth one-parameter group of orthogonal transformations of $\mathbb R^3$, its restriction preserves the induced round metric, and its derivative at $\alpha=0$ is $\Phi$.

[L7] In any product chart $(x^0,r,\xi^2,\xi^3)$, the coordinate-free metric formula of [[def-gr-schwarzschild-exterior-model]] has components $g_{00}=-f$, $g_{rr}=f^{-1}$, $g_{0r}=g_{0i}=g_{ri}=0$ and $g_{ij}=r^2\gamma_{ij}$, with $(\gamma_{ij})$ the positive-definite round-metric matrix ([[lem-gr-schwarzschild-metric-properties]]). The block inverse has $g^{rr}=f$ and $g^{r0}=g^{ri}=0$ by matrix multiplication; substituting it and $g_{ij}=r^2\gamma_{ij}$ into the Christoffel formula of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives $\Gamma^r{}_{00}=-\frac12g^{rr}\partial_rg_{00}=ff'/2$ and $\Gamma^r{}_{ij}=-\frac12g^{rr}\partial_rg_{ij}=-rf\gamma_{ij}$, while $\Gamma^r{}_{0i}=0$.

## Proof

**Proof technique:** solve the stationarity equation of the effective potential, verify the constructed circular curves against the four geodesic equations directly, and differentiate the potential twice.

1.1 (The stationarity equation.) By [L2] and [L4], $W_\ell'(r)=f'(r)(c^2+\ell^2/r^2)-2f(r)\ell^2/r^3=\frac{s}{r^2}\bigl(c^2+\frac{\ell^2}{r^2}\bigr)-2\bigl(1-\frac{s}{r}\bigr)\frac{\ell^2}{r^3}$. Multiplying by $r^3/s$ gives $r c^2+\frac{\ell^2}{r}-2\frac{\ell^2}{s}\bigl(1-\frac{s}{r}\bigr)=rc^2+\frac{3\ell^2}{r}-\frac{2\ell^2}{s}$, so $W_\ell'(r)=0$ if and only if $\ell^2\bigl(\frac{2}{s}-\frac{3}{r}\bigr)=rc^2$, that is, $\ell^2=\frac{c^2sr^2}{2r-3s}$; this has a positive solution for $\ell^2$ precisely when $r>3s/2$, and the value is unique. This is the condition displayed in clauses (a) and (b). [L2, L4, algebra]

2.1 (The timelike circular geodesic.) Let $r_0>3s/2$, choose $\ell$ as in (a) and $e=\sqrt{W_\ell(r_0)}>0$, and define the global curve $\gamma$ of clause (a). At any parameter value choose a spherical-polar chart near its angular point; the local tangent components are $U^a=(e/f(r_0),0,0,\ell/r_0^2)$. Then $g(U,U)=-f(r_0)\bigl(e/f(r_0)\bigr)^2+r_0^2\bigl(\ell/r_0^2\bigr)^2=-\frac{e^2}{f(r_0)}+\frac{\ell^2}{r_0^2}=-\bigl(c^2+\frac{\ell^2}{r_0^2}\bigr)+\frac{\ell^2}{r_0^2}=-c^2$ by the choice of $e$, so $U$ is timelike; and $g(U,\partial_0)=-e<0$, so $U$ is future-directed. In that chart the $x^0$-equation reduces to $\ddot x^0=0$ because $\dot r=0$; the $\vartheta$-equation reads $0+0-\sin(\pi/2)\cos(\pi/2)(\ell/r_0^2)^2=0$; the $\varphi$-equation reduces to $\ddot\varphi=0$ because $\dot r=\dot\vartheta=0$; and the $r$-equation reads $\frac{ff'}{2}\bigl(\frac{e}{f}\bigr)^2-rf\bigl(\frac{\ell}{r_0^2}\bigr)^2=\frac{f'e^2}{2f}-\frac{f\ell^2}{r_0^3}=\frac{f'}{2}\bigl(c^2+\frac{\ell^2}{r_0^2}\bigr)-\frac{f\ell^2}{r_0^3}=\frac12W_\ell'(r_0)=0$, using the choice of $e$ in the third equality and step 1.1 in the last. These equations hold in every local chart interval along the curve; longitude charts differ by constant shifts, so the global curve is a geodesic on $\mathbb R$ by [L3]. By [L5] and [L6], the global time translations and rotations are isometries, so $\partial_0$ and $\Phi$ are Killing; their pairings with $U$ are $-e$ and $\ell$. The Killing-pairing identity in [L5] proves these quantities are constant on the connected parameter interval. The local angular velocity is $\frac{d\varphi}{dx^0}=\frac{\dot\varphi}{\dot x^0}=\frac{\ell f(r_0)}{r_0^2e}$; squaring and substituting $\ell^2$ and $e^2=f(r_0)(c^2+\ell^2/r_0^2)$ gives $\bigl(\frac{\ell f}{r_0^2e}\bigr)^2=\frac{\ell^2f^2}{r_0^4f(c^2+\ell^2/r_0^2)}=\frac{\ell^2 f}{r_0^4c^2+r_0^2\ell^2}=\frac{s}{2r_0^3}$, using $\ell^2=c^2sr_0^2/(2r_0-3s)$; with $t=x^0/c$ this is $\bigl(\frac{d\varphi}{dt}\bigr)^2=c^2\frac{s}{2r_0^3}=\frac{G_Nm_*}{r_0^3}$. This proves (a). [L1, L2, L3, L4, L5, L6, step 1.1, algebra]

2.2 (Necessity in any angular orientation.) Let $\gamma:I\to M$ be a future timelike geodesic parametrized by proper time with $r\equiv r_0$ on an interval of positive length, and choose a product chart about any parameter value. Write $\dot\xi=(\dot\xi^2,\dot\xi^3)$ for the angular tangent. Since $\dot r=\ddot r=0$, [L3, L7] give $0=\frac{ff'}2(\dot x^0)^2-rf\,\gamma_{ij}\dot\xi^i\dot\xi^j$, so $\gamma_{ij}\dot\xi^i\dot\xi^j=\frac{f'}{2r}(\dot x^0)^2$. Timelike normalization gives $-c^2=-f(\dot x^0)^2+r^2\gamma_{ij}\dot\xi^i\dot\xi^j=-(f-rf'/2)(\dot x^0)^2$. The value $\dot x^0$ cannot be zero, since the radial equation and positive definiteness of $\gamma$ would then force $\dot\xi=0$, contradicting timelikeness. Hence $f-rf'/2=1-3s/(2r_0)>0$ and $r_0>3s/2$. For an equatorial geodesic, [L2] additionally gives $0=\ddot r=-\tfrac12W_\ell'(r_0)$, and step 1.1 yields $\ell^2=c^2sr_0^2/(2r_0-3s)$. This proves (b) and its equatorial angular-momentum claim. [L2, L3, L7, step 1.1, algebra]

2.3 (The second derivative at fixed angular momentum.) Differentiate $W_\ell(x)=f(x)(c^2+\ell^2/x^2)$ twice while holding $\ell$ constant. This gives $W_\ell''(x)=f''(x)(c^2+\ell^2/x^2)-4f'(x)\ell^2/x^3+6f(x)\ell^2/x^4$. Only after this differentiation set $x=r$ and $\ell^2=\ell_r^2=c^2sr^2/(2r-3s)$. Substituting $f'=s/r^2$, $f''=-2s/r^3$ and simplifying gives $W_{\ell_r}''(r)=\frac{2c^2s(r-3s)}{r^3(2r-3s)}$, hence $V_{\ell_r}''(r)=\frac{c^2s(r-3s)}{r^3(2r-3s)}$, whose sign is that of $r-3s$. At $r=3s$, the circular value is $\ell^2=3c^2s^2$, and direct factorization gives $V_\ell'(x)=c^2s(x-3s)^2/(2x^4)$ for $x>s$. This is positive on both sides of $3s$; thus $V_\ell$ has neither a local minimum nor a local maximum there. Together with the nonzero-second-derivative test away from $3s$, this proves both "exactly" assertions in (c). [L4, step 1.1, algebra]

3.1 (The photon sphere.) Let $\ell\ne0$, $r_0=3s/2$ and $e_0=\lvert\ell\rvert\sqrt{f(r_0)}/r_0>0$; define the global curve $\eta$ of clause (d), with local tangent components $U^a=(e_0/f(r_0),0,0,\ell/r_0^2)$. Then $g(U,U)=-\frac{e_0^2}{f(r_0)}+\frac{\ell^2}{r_0^2}=-\frac{\ell^2}{r_0^2}+\frac{\ell^2}{r_0^2}=0$, so $U$ is null; and $g(U,\partial_0)=-e_0<0$, so $U$ is future-directed. The local $x^0$-, $\vartheta$- and $\varphi$-equations hold as in step 2.1; the $r$-equation reads $\frac{f'e_0^2}{2f}-r_0f\frac{\ell^2}{r_0^4}=\frac{\ell^2}{r_0^2}\bigl(\frac{f'}{2}-\frac{f}{r_0}\bigr)=\frac{\ell^2}{r_0^4}\bigl(\frac{3s}{2}-r_0\bigr)=0$ at $r_0=3s/2$. These local equations establish a future null geodesic on the entire domain $\mathbb R$ by [L3]. By [L5] and [L6], the global Killing fields have pairings $-e_0$ and $\ell$, constant along $\eta$. Its angular velocity is $\frac{\ell f(r_0)}{r_0^2e_0}=\operatorname{sgn}(\ell)\frac{\sqrt{f(r_0)}}{r_0}$, equal to $+\frac{2}{3\sqrt3\,s}$ for $\ell>0$ and to its negative for $\ell<0$, with square $4/(27s^2)$. Finally $W^{\mathrm n}_\ell(r)=f\ell^2/r^2$ has $(W^{\mathrm n}_\ell)'(r)=\ell^2\frac{-2r+3s}{r^4}$ (that is, $\ell^2(3s-2r)/r^4$), which vanishes at $r=3s/2$, and $(W^{\mathrm n}_\ell)''(r)=\ell^2\frac{6(r-2s)}{r^5}$, which at $r=3s/2$ equals $-\frac{32\ell^2}{81s^4}<0$. This proves (d). [L1, L3, L4, L5, L6, algebra]

4.1 (Conclusion.) Steps 1.1-3.1 prove clauses (a)-(d) from the metric data and the geodesic equations; clause (e) records the exact scope: the statements are about ideal geodesics of the model on $r>s$, with stability understood as the sign of the potential's second derivative, and no empirical or nonlinear claim is made. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, given] ∎

## Remarks

- **The innermost stable circular orbit.** Clause (c) shows that the potential's second derivative changes sign at $r=3s$, so in this reduced one-dimensional description the circular orbits with $\frac{3s}{2}<r<3s$ are maxima of the potential and those with $r>3s$ are minima. This is a statement about the reduced potential only; the physical interpretation of the threshold as the innermost stable circular orbit of the model, and any account of how it would be observed, belong to the physics theorem and its scope remark, not to this lemma.

- **Null geodesics are not particle orbits.** The photon-sphere curve of clause (d) has null tangent and no proper-time parametrization; its parameter $\tau$ is an affine parameter, and only the ratio $d\varphi/dx^0$ of the tangent components is asserted, the tangent of a null geodesic being determined only up to positive scale.
