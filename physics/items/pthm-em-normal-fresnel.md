---
id: pthm-em-normal-fresnel
kind: physics-theorem
title: "Normal-incidence amplitudes and the flux budget, with the Ohmic transmitting medium"
status: draft
origin: pipeline
domain: physics
dependency_level: 20
deps: [pthm-em-medium-plane-wave-fields, pthm-em-phase-matching, pthm-em-material-stationary-jumps, post-em-material-closure, def-em-medium-wave-parameters, def-em-polarization-magnetization, def-em-fields, def-em-lab-geometry, def-em-si-conventions, lem-em-interface-wave-linear-system, lem-em-admittance-interface-solve, lem-em-period-average, pthm-em-restricted-material-energy, def-cross-product-in-r3, def-euclidean-inner-product, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-of-square-roots, thm-every-complex-number-has-a-square-root, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, lem-em-exponential-character-open-set-independence, thm-ftc-second-part, thm-continuous-on-a-rectangle-is-riemann-integrable, def-improper-integral-at-infinity, thm-exponential-limits-and-range, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-numbers-form-a-field]
dependency_roles:
  pthm-em-medium-plane-wave-fields: physical-result
  pthm-em-phase-matching: physical-result
  pthm-em-material-stationary-jumps: formulation-prerequisite
  post-em-material-closure: physical-assumption
  def-em-medium-wave-parameters: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-em-interface-wave-linear-system: mathematical-premise
  lem-em-admittance-interface-solve: mathematical-premise
  lem-em-period-average: mathematical-premise
  pthm-em-restricted-material-energy: physical-result
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-every-complex-number-has-a-square-root: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-em-exponential-character-open-set-independence: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional normal-incidence reflection and transmission theorem at a plane interface between two homogeneous isotropic scalar media at rest, the second either lossless or Ohmic: the amplitude system, the reflection and transmission amplitudes, the flux budget R+T=1 in the lossless case and |r|^2+(ReY_2/Y_1)|t|^2=1 with the absorbed fraction in the Ohmic case. Excluded: oblique incidence, anisotropic, dispersive or nonlinear media, ideal conductors, mobile media, existence or uniqueness of interface-consistent data, and all empirical claims."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.4.1 printed pp. 189-190: the normal-polarisation interface system $E_I+E_R=E_T$ and $(E_I-E_R)/v_1\\cos\\theta_I=(E_T/v_2)\\cos\\theta_T$, reducing at $\\theta=0$ to the two-equation system solved here, with the solution (7.26); \u00a77.6.2 printed pp. 207-208 for the complex propagation constant of the Ohmic medium entering the transmitted admittance."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.3.2 printed pp. 384-386, Eqs. (9.74)-(9.88): the normal-incidence boundary conditions (9.74), the amplitude system (9.78)-(9.81), the solutions (9.82), the intensity coefficients (9.86)-(9.87) with $R+T=1$ (9.88), Problem 9.13 (exact coefficients without $\\mu_1=\\mu_2=\\mu_0$) and Problem 9.14 (the reflected and transmitted polarisations must lie along the incident one); \u00a79.4.2 printed pp. 396-398, Eqs. (9.139)-(9.147): the analogous normal-incidence system at a conducting surface with the complex $\\beta=\\mu_1v_1\\widetilde{k}_2/(\\mu_2\\omega)$ of Eq. (9.146), where $\\widetilde{k}_2$ is the complex transmitted wave number, and the total-reflection limit (9.148). Retained scan with OCR noise; the formulas were cross-checked against Tong and the local algebra in the batch notes."
verification:
  precheck: pass

---

## Statement

Assume the following plane-interface material setting, with the same explicitly adopted stationary interface identities as [[pthm-em-phase-matching]] (including its absent-wave qualification), at normal incidence: medium 1 in $\{x_3<0\}$ with $\varepsilon_1,\mu_1>0$, $\sigma_1=0$, medium 2 in $\{x_3>0\}$ with $\varepsilon_2,\mu_2>0$ and either $\sigma_2=0$ (lossless) or $\sigma_2>0$ (Ohmic), both homogeneous and at rest in the laboratory chart, with the plane interface $S=\{x_3=0\}$ and normal $n=e_3$. Let $\omega_i,\omega_r,\omega_t>0$ and let three plane waves of [[pthm-em-medium-plane-wave-fields]] be given with wavevectors $k_i=k_1n$ ($k_1>0$), $k_r=-k_1n$ and $k_t=k\,n$, where for $\sigma_2=0$ one takes $k=\omega_t/v_2>0$ and for $\sigma_2>0$ one takes $k=\kappa_2(\omega_t)=p+iq$ with the complex propagation constant of [[def-em-medium-wave-parameters]]; amplitudes $e_i\in\mathbb C^{3}\setminus\{0\}$ and $e_r,e_t\in\mathbb C^{3}$ and $h_j=k_j\times e_j/(\mu_j\omega_j)$ satisfying the conditions of [[pthm-em-medium-plane-wave-fields]](b)-(c) in their media, and the four stationary interface identities of [[pthm-em-phase-matching]] holding on $\mathbb R^{2}\times I$ for a nonempty open interval $I$. Then:

**(a) [Common frequency]** The transmitted amplitude is nonzero and $\omega_i=\omega_t=:\omega$ for some $\omega>0$. If $e_r\ne0$, then $\omega_r=\omega$ as well; if $e_r=0$, assign $\omega_r=\omega$ conventionally, since an absent field cannot determine a frequency. Matching is proved directly from the interface characters, so the lossless-only physical scope of [[pthm-em-phase-matching]] is not used to infer the Ohmic branch.

**(b) [Amplitude system and solution]** all three electric amplitudes are tangential to $S$, and the two tangential interface identities reduce to
$$e_i+e_r=e_t,\qquad Y_1\,(e_i-e_r)=Y_2\,e_t,\qquad Y_1:=\frac{k_1}{\mu_1\omega}>0,\qquad Y_2:=\frac{k}{\mu_2\omega};$$
hence $e_r=r\,e_i$ and $e_t=t\,e_i$ with the complex scalars
$$r=\frac{Y_1-Y_2}{Y_1+Y_2},\qquad t=\frac{2Y_1}{Y_1+Y_2};$$
in particular the reflected and transmitted electric phasors are parallel to the incident one (normal-incidence polarisation preservation), and $t\ne0$. The reflection coefficient is zero exactly when $Y_1=Y_2$, in particular at a lossless impedance-matched interface; the zero reflected field remains part of the theorem.

**(c) [Lossless transmitting medium]** if $\sigma_2=0$ then $Y_2=1/Z_2>0$ with $Z_2=\sqrt{\mu_2/\varepsilon_2}$ of [[def-em-medium-wave-parameters]], so
$$r=\frac{Z_2-Z_1}{Z_1+Z_2}\in\mathbb R,\qquad t=\frac{2Z_2}{Z_1+Z_2}\in\mathbb R,$$
in agreement with [[lem-em-interface-wave-linear-system]]; the period-$T$ averaged normal fluxes of the stored-energy model, $T=2\pi/\omega$ ([[pthm-em-medium-plane-wave-fields]](d), [[pthm-em-restricted-material-energy]]), are $\langle S_i\cdot n\rangle=\frac{|e_i|^{2}}{2Z_1}$, $\langle S_r\cdot n\rangle=-\frac{|e_r|^{2}}{2Z_1}$ and $\langle S_t\cdot n\rangle=\frac{|e_t|^{2}}{2Z_2}$, and with $R:=r^{2}$, $T:=\frac{Z_1}{Z_2}t^{2}=\frac{4Z_1Z_2}{(Z_1+Z_2)^{2}}$ one has $R+T=1$; $R$ is the reflected and $T$ the transmitted fraction of the incident normal averaged flux.

**(d) [Ohmic transmitting medium]** if $\sigma_2>0$ then $Y_2=\kappa_2(\omega)/(\mu_2\omega)$ has $\operatorname{Re}Y_2=p/(\mu_2\omega)>0$, and
$$r=\frac{Y_1-Y_2}{Y_1+Y_2},\qquad t=\frac{2Y_1}{Y_1+Y_2},\qquad |r|^{2}+\frac{\operatorname{Re}Y_2}{Y_1}\,|t|^{2}=1 .$$
The second summand is the fraction of the incident period-averaged normal flux that enters the conductor at the interface; the transmitted field has the exact decay factor $e^{-qx_3}$ (the explicit factorization $e^{i(p+iq)x_3}=e^{-qx_3}e^{ipx_3}$) and, by the Ohmic dissipation clause of [[pthm-em-restricted-material-energy]], the entering flux is absorbed in the conductor: the reflected fraction $|r|^{2}$ and the absorbed fraction $(\operatorname{Re}Y_2/Y_1)|t|^{2}$ add to $1$.

**(e) [Scope]** no existence or uniqueness of interface-consistent data, no oblique incidence, no anisotropic or dispersive media, no ideal conductor ($\sigma_2=\infty$), no nonlinear response and no empirical claim is made. The interface identities are the stationary plane-interface conditions of the model, supplied for compact interfaces by [[pthm-em-material-stationary-jumps]]; the flux identities are the model's stored-energy and Ohmic-dissipation reading, not an observational claim.

## Facts & Assumptions

**Given:** The two-media normal-incidence setting of the Statement, the wave data $(k_j,\omega_j,e_j)$ with $h_j=k_j\times e_j/(\mu_j\omega_j)$, the unit normal $n=e_3$, and the four stationary interface identities [A1] on $\mathbb R^2\times I$.

[A1] The four stationary interface identities of the Statement hold for all $(y,t)\in\mathbb R^2\times I$; the proof uses the two tangential identities and derives the normal-incidence reduction directly.

[F1] Plane-wave structure in each medium ([[pthm-em-medium-plane-wave-fields]]): the amplitude conditions $k_j\cdot e_j=0$, $k_j\times e_j=\omega_j\mu h_j$, $k_j\times h_j=-(\omega_j\varepsilon+i\sigma_j)e_j$ with the constants of the medium of wave $j$ ($\sigma_i=\sigma_r=0$, $\sigma_t=\sigma_2$); the solution family $h=k\times e/(\omega\mu)$; and, for a lossless medium with real wavevector $k$ and $e\ne0$, the pointwise identities with $B=\hat k\times E/v$, $|B|=|E|/v$ and the period-averaged flux $\langle S\rangle=|e|^2k/(2\mu\omega)$ of the stored-energy model.

[F2] Normal-incidence instance of phase matching ([[pthm-em-phase-matching]](a)): for three nonzero plane waves in two homogeneous isotropic lossless media satisfying the amplitude conditions and the two tangential interface identities, the tangential wavevectors and the frequencies agree; at normal incidence this gives $\omega_i=\omega_r=\omega_t$ in the lossless case with all three amplitudes nonzero.

[F3] Admittance system ([[lem-em-admittance-interface-solve]]): for complex $Y_1,Y_2$ with $Y_1+Y_2\ne0$ and data satisfying $E_i+E_r=E_t$, $Y_1(E_i-E_r)=Y_2E_t$, one has $r=(Y_1-Y_2)/(Y_1+Y_2)$, $t=2Y_1/(Y_1+Y_2)$; if $Y_1>0$ real then $|r|^2+(\operatorname{Re}Y_2/Y_1)|t|^2=1$ with $|t|^2=4Y_1^2/|Y_1+Y_2|^2>0$; and if $Y_1>0$ is real and $Y_2$ purely imaginary then $|r|=1$.

[F4] The normal-incidence interface lemma ([[lem-em-interface-wave-linear-system]]): for real $\varepsilon_j,\mu_j>0$, $Z_j=\sqrt{\mu_j/\varepsilon_j}$, and $E_i,E_r,E_t$ with $E_i\ne0$ satisfying $E_i+E_r=E_t$, $(E_i-E_r)/Z_1=E_t/Z_2$, one has $r=(Z_2-Z_1)/(Z_1+Z_2)$, $t=2Z_2/(Z_1+Z_2)$ and $R+T=1$ for $R=|r|^2$, $T=(Z_1/Z_2)|t|^2$.

[F5] Character independence ([[lem-em-exponential-character-open-set-independence]]): a real-part-zero finite character sum on a nonempty open set has vanishing grouped coefficients; in particular if $\operatorname{Re}(c\,e^{i\lambda\cdot z})=0$ on a nonempty open set for a single frequency $\lambda=(0,0,-\omega)$ with $\omega>0$ and coefficient $c$, then $c=0$, because $-\overline\lambda=(0,0,+\omega)\ne\lambda$ and the $\nu=\lambda$ group has no negative-conjugate partner.

[F6] The complex exponential: $\exp(z+w)=\exp z\exp w$ and $\exp(x)=e^x$ for real $x$ ([[thm-complex-exponential-addition-and-real-extension]]); for real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ with $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] Period averages ([[lem-em-period-average]]): the period average of $\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})$ is $\tfrac12\operatorname{Re}(a\overline d)$, with the componentwise inner-product and cross-product forms.

[F8] Stored energy and Ohmic dissipation ([[pthm-em-restricted-material-energy]]): $u=\tfrac12(E\cdot D+B\cdot H)$, $S=E\times H$, the local balance $\partial_tu+\operatorname{div}S=-J_f\cdot E$, and with $J_f=\sigma E$ and symmetric positive semidefinite $\sigma$ the nonnegative dissipation density $E\cdot\sigma E$.

[F9] Medium parameters ([[def-em-medium-wave-parameters]]): $Z_j=\sqrt{\mu_j/\varepsilon_j}>0$, $v_j=(\varepsilon_j\mu_j)^{-1/2}$, and for $\sigma_2>0$ the complex propagation constant $k=\kappa_2(\omega)=p+iq$ with $p,q>0$, whose existence and root selection rest on [[thm-every-complex-number-has-a-square-root]]; for $\sigma_2>0$ also $2pq=\mu_2\sigma_2\omega$ and $\operatorname{Re}Y_2=p/(\mu_2\omega)$.

[F10] Complex arithmetic, conjugation and modulus ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]), and nonnegative square roots with $\sqrt{ab}=\sqrt a\sqrt b$ for $a,b\ge0$ ([[thm-of-square-roots]]).

[F11] Inner and cross products: $\langle x,y\rangle=\sum_lx_ly_l$ and the coordinate cross product, bilinear and alternating, with $u\times v$ orthogonal to $u$ and $v$; the decomposition $x=x^\tau+(x\cdot n)n$ with $x^\tau\perp n$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F12] The laboratory setting, fields and units ([[def-em-lab-geometry]], [[def-em-fields]], [[def-em-si-conventions]]) and the declared lossless/Ohmic branches ([[post-em-material-closure]]).

[F13] One-dimensional FTC and integrability ([[thm-ftc-second-part]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]]), improper integrals at infinity as limits of proper integrals ([[def-improper-integral-at-infinity]]), and $e^{-2qL}\to0$ as $L\to\infty$ for $q>0$ ([[thm-exponential-limits-and-range]]).

## Proof

**Proof technique:** direct; evaluate the normal-incidence traces as characters, apply the character lemma to the combined six-component data to force the common frequency, solve the resulting two-equation admittance system, and compute the lossless and Ohmic flux budgets.

1.1 [Transversality and the trace identity] Since $k_j\cdot e_j=0$ and $k_j\cdot n\ne0$ for each actual wave ($k_i\cdot n=k_1>0$, $k_r\cdot n=-k_1<0$, and $k_t\cdot n=k$ with $k>0$ in the lossless case or $k=p+iq$ with $p>0$ in the Ohmic case), each electric amplitude is tangential: writing $e_j=(e_j\cdot n)n+e_j^\tau$ by [F11] gives $0=k_j\cdot e_j=(k_j\cdot n)(e_j\cdot n)$. Likewise $h_j=k_j\times e_j/(\mu_j\omega_j)$ is tangential because $k_j$ is normal. Evaluating at $x=(y,0)$ gives $k_j\cdot x=0$, so $E_j=\operatorname{Re}(e_j e^{-i\omega_jt})$ and $H_j=\operatorname{Re}(h_j e^{-i\omega_jt})$ there; the two tangential interface identities of [A1] are identities of tangential fields, and for tangential $w$ the vanishing $n\times w=0$ forces $w=0$ by [F11], so with the sign convention $A_j:=(e_j,h_j)$ and $\lambda_j:=(0,0,-\omega_j)\in\mathbb C^3$ they read $\operatorname{Re}\bigl(A_i e^{i\lambda_i\cdot z}+A_r e^{i\lambda_r\cdot z}-A_t e^{i\lambda_t\cdot z}\bigr)=0$ for all $z=(y,t)\in\mathbb R^2\times I$, by the additivity of the real part in [F10]. [given, A1, F1, F10, F11, algebra]

2.1 [The transmitted amplitude is nonzero] Suppose $e_t=0$; then $h_t=k\,(n\times e_t)/(\mu_2\omega_t)=0$ and $A_t=0$, so the identity of step 1.1 has the two terms $A_i,A_r$ with nonzero frequency parts $-\omega_i,-\omega_r$. Since $-\overline{\lambda_j}=(0,0,+\omega_j)$ has positive last coordinate while every actual $\lambda_l$ has negative last coordinate, [F5] applied to the electric and magnetic traces separately gives: for each actual frequency $\nu$, the sum of the coefficients of the waves with that frequency vanishes. If $e_r=0$ then $A_r=0$ and the electric trace is a single character with coefficient $e_i\ne0$, contradicting [F5]. If $e_r\ne0$ and $\lambda_r\ne\lambda_i$, both groups are singletons and the electric trace gives $e_i=0$ and $e_r=0$, again a contradiction; hence $\lambda_r=\lambda_i$, that is $\omega_r=\omega_i$, and the electric and magnetic trace coefficients at that frequency vanish: $e_i+e_r=0$ and $h_i+h_r=0$. By step 1.1, $h_i=(k_1/(\mu_1\omega_i))(n\times e_i)$ and $h_r=(-k_1/(\mu_1\omega_i))(n\times e_r)$, so $h_i+h_r=(k_1/(\mu_1\omega_i))\,n\times(e_i-e_r)=(k_1/(\mu_1\omega_i))\,n\times(2e_i)=0$, hence $n\times e_i=0$; together with $e_i\cdot n=0$ from step 1.1 this gives $e_i=0$ by [F11], contradicting $e_i\ne0$. Therefore $e_t\ne0$. [step 1.1, F1, F5, F10, F11, algebra]

3.1 [Common frequency] By step 2.1, $A_t=(e_t,h_t)$ is nonzero; $A_i$ is nonzero because $e_i\ne0$; if $e_r\ne0$ then $A_r\ne0$. Applying [F5] to the combined six-component identity of step 1.1 and grouping as in step 2.1: for each actual frequency $\nu$ the signed sum of the $A_j$ over the waves with that frequency vanishes. If the frequencies of the nonzero-$A_j$ waves were not all equal, some group would contain exactly one of them and would give $\pm A_j=0$, a contradiction; and negative-conjugate partners cannot occur because of the sign of the last coordinate. Hence: if $e_r\ne0$, then $\lambda_i=\lambda_r=\lambda_t$, so $\omega_i=\omega_r=\omega_t$; if $e_r=0$, then $\lambda_i=\lambda_t$, so $\omega_i=\omega_t$ and $\omega_r$ is unconstrained by the absent field, matching the Statement. Setting $\omega:=\omega_i=\omega_t$, the two identities of step 1.1 with the common frequency $-\omega$ in the exponent give, after applying [F5] to the single-frequency electric and magnetic traces, $e_i+e_r=e_t$ and $h_i+h_r=h_t$. This also proves the lossless nonzero-reflected case via the normal-incidence instance [F2] of the phase-matching theorem, which is consistent with the direct argument just given. [step 2.1, step 1.1, F2, F5, F10, algebra]

4.1 [The amplitude system, part (b)] With the common frequency of step 3.1, $Y_1:=k_1/(\mu_1\omega)>0$ is real and positive, and $h_i=Y_1\,n\times e_i$, $h_r=-Y_1\,n\times e_r$, $h_t=(k/(\mu_2\omega))\,n\times e_t=:Y_2\,n\times e_t$ by [F1] and [F11]; note $\operatorname{Re}Y_2=p/(\mu_2\omega)>0$ in the Ohmic case and $Y_2>0$ real in the lossless case, so $Y_1+Y_2\ne0$ in both. The magnetic identity of step 3.1 reads $n\times\bigl(Y_2e_t-Y_1(e_i-e_r)\bigr)=0$, and its argument is tangential, so $Y_1(e_i-e_r)=Y_2e_t$ by [F11]; together with $e_i+e_r=e_t$ this is exactly the system of [F3], and since $Y_1+Y_2\ne0$ the solution formulas $r=(Y_1-Y_2)/(Y_1+Y_2)$, $t=2Y_1/(Y_1+Y_2)$ hold with $e_r=r\,e_i$, $e_t=t\,e_i$; here $r,t$ are scalars in $\mathbb C$ multiplying the fixed nonzero vector $e_i$, so the reflected and transmitted electric phasors are parallel to the incident one. Moreover $t\ne0$ because $|t|^2=4Y_1^2/|Y_1+Y_2|^2>0$ by [F3] and [F10]; and $r=0$ if and only if $Y_1=Y_2$. [step 3.1, F1, F3, F10, F11, algebra]

5.1 [Lossless transmitting medium, part (c)] If $\sigma_2=0$ then $k=\omega/v_2>0$ by the Statement, so $Y_2=k/(\mu_2\omega)=\omega/(v_2\mu_2\omega)=1/(v_2\mu_2)=1/Z_2$ by [F9] ($v_2\mu_2=\sqrt{\mu_2/\varepsilon_2}=Z_2$), and $Y_1=1/Z_1$ similarly; hence substituting $Y_j=1/Z_j$ into the formulas of step 4.1 gives $r=(1/Z_1-1/Z_2)/(1/Z_1+1/Z_2)=(Z_2-Z_1)/(Z_1+Z_2)$ and $t=2Z_2/(Z_1+Z_2)$, both real, the same formulas as in the scalar parametrisation of [F4]. The period-averaged normal fluxes at the interface: for a nonzero lossless wave with real wavevector the flux of [F1] is $\langle S_j\rangle=|e_j|^2k_j/(2\mu_j\omega)$ with $\omega$ the common frequency, so $\langle S_i\cdot n\rangle=|e_i|^2k_1/(2\mu_1\omega)=|e_i|^2/(2Z_1)$ because $k_1/(\mu_1\omega)=Y_1=1/Z_1$; similarly $\langle S_r\cdot n\rangle=|e_r|^2(-k_1)/(2\mu_1\omega)=-|e_r|^2/(2Z_1)$ and $\langle S_t\cdot n\rangle=|e_t|^2k/(2\mu_2\omega)=|e_t|^2/(2Z_2)$. If $e_r=0$, then $h_r=0$ and $S_r=0$, so the reflected formula holds directly as well. With $R=|r|^2$ and $T=(Z_1/Z_2)|t|^2$, the identity $R+T=1$ is [F4]; since $|e_r|^2=R|e_i|^2$ and $|e_t|^2=(Z_2/Z_1)T|e_i|^2=|e_i|^2 T Z_2/Z_1$, the three fluxes are $|e_i|^2/(2Z_1)$ times $1$, $-R$ and $T$ respectively, which is the stated fraction reading. [step 4.1, F1, F4, F9, F10, algebra]

5.2 [Ohmic transmitting medium: system and budget, part (d) first half] If $\sigma_2>0$ then $k=\kappa_2(\omega)=p+iq$ with $p,q>0$ by [F9], so $Y_2=(p+iq)/(\mu_2\omega)$ has $\operatorname{Re}Y_2=p/(\mu_2\omega)>0$ and $\operatorname{Im}Y_2=q/(\mu_2\omega)>0$; the solution formulas of step 4.1 give $r,t$, and [F3] gives $|r|^2+(\operatorname{Re}Y_2/Y_1)|t|^2=1$ and $|t|^2=4Y_1^2/|Y_1+Y_2|^2>0$. Since $\operatorname{Im}Y_2\ne0$, the numerator $Y_1-Y_2$ of $r$ is nonzero, so $r\ne0$ in this branch. [step 4.1, F3, F9, F10, algebra]

6.1 [Attenuated transmitted field and entering flux] With $k=p+iq$ and the common frequency, the transmitted field factorizes exactly: for $x_3\in\mathbb R$, $i(kx_3-\omega t)=-qx_3+i(px_3-\omega t)$, and [F6] gives $e^{i(kx_3-\omega t)}=e^{-qx_3}(\cos(px_3-\omega t)+i\sin(px_3-\omega t))$, so $E_t(x,t)=e^{-qx_3}\operatorname{Re}(e_t e^{i(px_3-\omega t)})$ componentwise (the exact decay factor $e^{-qx_3}$), and $H_t=e^{-qx_3}\operatorname{Re}(h_t e^{i(px_3-\omega t)})$ for the same reason since $h_t$ is a constant phasor. The period-averaged normal flux of the transmitted field is, by the cross-product form of [F7] applied to the factorized fields, $\langle S_t\cdot n\rangle=e^{-2qx_3}\tfrac12\operatorname{Re}\bigl((e_t\times\overline h_t)\cdot n\bigr)$; from $h_t=Y_2\,n\times e_t$ with $Y_2=(p+iq)/(\mu_2\omega)$ by step 4.1, $\overline h_t=\overline{Y_2}\,n\times\overline e_t=((p-iq)/(\mu_2\omega))\,n\times\overline e_t$ by [F10], and the triple-product expansion of [F11] gives $e_t\times(n\times\overline e_t)=n\,|e_t|^2-\overline e_t\,(e_t\cdot n)=n\,|e_t|^2$ because $e_t$ is tangential; hence $(e_t\times\overline h_t)\cdot n=(p-iq)|e_t|^2/(\mu_2\omega)$ and $\langle S_t\cdot n\rangle=e^{-2qx_3}p|e_t|^2/(2\mu_2\omega)=:F(x_3)$. At the interface $x_3=0$ this equals $(p/(\mu_2\omega))|e_t|^2/2$, and dividing by the incident flux $|e_i|^2/(2Z_1)=Y_1|e_i|^2/2$ of step 5.1 (which applies to medium 1, lossless) gives $\frac{p}{\mu_2\omega Y_1}|t|^2=\frac{\operatorname{Re}Y_2}{Y_1}|t|^2$, the stated entering fraction of the incident period-averaged normal flux. [step 4.1, step 5.1, F6, F7, F10, F11, algebra]

7.1 [Ohmic absorption] In the conductor the free current is the conduction current $J_f=\sigma_2E_t$ with the declared positive scalar $\sigma_2$ (the model of [F1] has no external free current), and the Ohmic dissipation density of [F8] averaged over a period is $d(x_3):=\sigma_2\langle|E_t|^2\rangle=\sigma_2|e_t|^2e^{-2qx_3}/2$ by [F7] applied to the factorized field of step 6.1; the flux of step 6.1 is $F(x_3)=p|e_t|^2e^{-2qx_3}/(2\mu_2\omega)$. Since $2pq=\mu_2\sigma_2\omega$ by [F9], $F'(x_3)=-2q\,p|e_t|^2e^{-2qx_3}/(2\mu_2\omega)=-pq|e_t|^2e^{-2qx_3}/(\mu_2\omega)=-\sigma_2|e_t|^2e^{-2qx_3}/2=-d(x_3)$: the flux lost per unit length is exactly the Ohmic dissipation. For every $L>0$ the integrand $d$ is continuous on $[0,L]$, hence Riemann integrable by [F13], and the exponential antiderivative is differentiable through the endpoints; the fundamental theorem [F13] gives $\int_0^Ld(x_3)\,dx_3=\sigma_2|e_t|^2(1-e^{-2qL})/(4q)=F(0)-F(L)$, where the last identity uses $p/(2\mu_2\omega)=\sigma_2/(4q)$, which is $2pq=\mu_2\sigma_2\omega$ rearranged. Since $q>0$, $e^{-2qL}\to0$ as $L\to\infty$ by [F13], and defining the improper integral as the limit of the proper integrals per [F13] gives $\int_0^\infty d(x_3)\,dx_3=\sigma_2|e_t|^2/(4q)=F(0)$: the whole entering flux is dissipated in the conductor, and with the budget of step 5.2 the reflected fraction $|r|^2$ and the absorbed fraction $(\operatorname{Re}Y_2/Y_1)|t|^2$ add to $1$. [step 5.2, step 6.1, F8, F9, F13, algebra]

8.1 [Scope, part (e)] All conclusions are conditional on the given wave data and the interface identities [A1]; the argument used only the two tangential identities, the amplitude conditions and dispersion of [F1], the character lemma [F5], the admittance algebra [F3], the Euler form [F6] and the period averages [F7]; the normal interface identities, the optional normal-root selection rule and any outgoing condition were not used, and the oblique-incidence theorem [F2] was cited only as the consistent lossless cross-check. Nothing about existence or uniqueness of interface-consistent data, oblique incidence, anisotropy, dispersion, ideal conductors ($\sigma_2=\infty$), nonlinear response or empirical data is claimed; the entering-flux absorption reading is the model's stored-energy and Ohmic-dissipation statement, not an observational claim. The interface identities are stated hypotheses on the noncompact plane; for compact interfaces they follow from [[pthm-em-material-stationary-jumps]]. No choice principle is used: every quantity is finite-dimensional algebra in the given data, and the only limiting passage is the explicit exponential improper integral of step 7.1. [given, step 7.1, F2, F12] ∎
