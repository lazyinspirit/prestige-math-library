---
id: thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence
aliases: [nrqm-controlled-dynamics-partial-wave-cross-section-convergence]
kind: theorem
domain: mathematics
title: "Partial-wave cross-section convergence"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-weighted-angular-completeness, thm-nrqm-orbital-and-spin-sphere-onb, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]
dependency_roles:
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-weighted-angular-completeness: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Partial Waves pp. 213-216 and Determinants of Phase-Shifts pp. 216-219 (partial-wave expansion and phase-shift form of the cross section)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (scattering amplitudes and phase shifts)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real, bounded, central (invariant under
rotations) and supported in $B_R$, let $k>0$, and let $f_k\in C^\infty(S^2)$ be
the scattering amplitude of
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]].
Then:

(a) $f_k$ depends only on $\cos\theta=\Omega\cdot d$, and its Legendre expansion
$$f_k(\theta)=\frac1{2ik}\sum_{l\ge0}(2l+1)\bigl(S_l(k)-1\bigr)P_l(\cos\theta)$$
converges in $L^2(S^2)$ (and absolutely, since $f_k$ is smooth), where
$S_l(k)$ is a unit-modulus number determined by the regular radial solution
$\varphi_l$ normalized by $\varphi_l(r)/r^{l+1}\to1$ and by the outgoing
solution $f_l$ with $f_l(r)=e^{i(kr-l\pi/2)}(1+O(1/r))$: explicitly
$S_l=\overline{W(\varphi_l,f_l)}/W(\varphi_l,f_l)$ and $S_l=e^{2i\delta_l(k)}$
with the phase shift $\delta_l(k)$ defined modulo $\pi$.

(b) $\bigl|\overline{W(\varphi_l,f_l)}\bigr|=\bigl|W(\varphi_l,f_l)\bigr|$, so
$|S_l|=1$, and the total cross section is
$$\sigma=\frac{\pi}{k^2}\sum_{l\ge0}(2l+1)|S_l-1|^2=\frac{4\pi}{k^2}\sum_{l\ge0}(2l+1)\sin^2\delta_l(k),$$
the series converging because $f_k\in L^2(S^2)$ and the expansion in (a) is an
orthogonal expansion.

(c) *Resonance model.* For the single-channel model $S_l(E)=\frac{E-E_r-i\Gamma/2}{E-E_r+i\Gamma/2}$
with $\Gamma>0$ one has $|S_l|=1$ for real $E$ and
$\sin^2\delta_l=\frac{(\Gamma/2)^2}{(E-E_r)^2+(\Gamma/2)^2}$; substituting into
(b) gives the corresponding single-channel cross section. This is a conditional
model calculation, not a theorem that every potential has such a pole.

## Facts & Assumptions

**Given:** Countable Choice; $V(x)=v(|x|)$ almost everywhere with real $v\in L^\infty((0,\infty))$ and $v(r)=0$ for $r>R$; $k>0$; incident direction $d\in S^2$; the stationary solution $\Psi$ and amplitude $f_k$ of the cited stationary supplier. Set $W(a,b)=ab'-a'b$, where the prime denotes the radial derivative.

[F1] The stationary construction supplies the unique outgoing solution $\Psi\in H^2_{\mathrm{loc}}(\mathbb R^3)$ of $(-\Delta+V-k^2)\Psi=0$, with incident plane wave $e^{ikd\cdot x}$, and a compact $L^2$ source $q=V\Psi|_{B_R}\in L^1(B_R)$; outside $B_{2R}$, $\Psi_{\mathrm{sc}}:=\Psi-e^{ikd\cdot x}$ satisfies $\Psi_{\mathrm{sc}}(r\Omega)=e^{ikr}f_k(\Omega)/r+O(r^{-2})$ with the same order for the first radial derivative, and $f_k(\Omega)=-(4\pi)^{-1}\int_{B_R}e^{-ik\Omega\cdot y}q(y)\,dy$ ([[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]], [[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]]).

[F2] The Rodrigues polynomials $P_l$ satisfy $P_l(1)=1$, have leading coefficient $(2l)!/[2^l(l!)^2]$ and obey $-((1-t^2)P_l')'=l(l+1)P_l$ ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]]). Orthogonality and completeness of the associated angular harmonics follow from [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], [[thm-nrqm-orbital-and-spin-weighted-angular-completeness]] and [[thm-nrqm-orbital-and-spin-sphere-onb]].

[F3] Polar volume integration is $dx=r^2\,dr\,d\sigma$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); smooth approximation in $H^2$ is available under CC ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]). All radial equations below are distributional, equivalently with locally absolutely continuous function and derivative away from $r=0$, and bounded measurable $v$ is sufficient ([[def-sobolev-space-wkp-and-its-norm]]).

## Proof

1.1 (Angular normalization, the plane wave and smooth amplitude.) Rotations fixing $d$ commute with the radial-potential integral operator in [F1] and fix its incident datum, so uniqueness gives $\Psi(Tx)=\Psi(x)$ and $f_k(T\Omega)=f_k(\Omega)$ for such rotations $T$. Thus these functions depend on the angle only through $t=\Omega\cdot d$. The amplitude is genuinely smooth without differentiating $v$: the source $q$ is compactly supported and in $L^1$, and every angular derivative of $e^{-ik\Omega\cdot y}$ is bounded on $S^2\times B_R$, so differentiation under this integral gives derivatives of every order. Rodrigues integration by parts $l$ times gives $\int_{-1}^1P_l(t)^2\,dt=(2l)!/[2^{2l}(l!)^2]\int_{-1}^1(1-t^2)^l\,dt=2/(2l+1)$; the last integral follows from $I_0=2$ and $I_l=2lI_{l-1}/(2l+1)$ by one integration by parts. Consequently $\int_{S^2}P_l(\Omega\cdot d)P_n(\Omega\cdot d)\,d\sigma=4\pi\delta_{ln}/(2l+1)$. Define $j_0(z)=\sin z/z$, $y_0(z)=-\cos z/z$, and recursively $j_{l+1}=lj_l/z-j_l'$, $y_{l+1}=ly_l/z-y_l'$ for $z>0$. Rodrigues integration by parts also gives $\int_{-1}^1e^{izt}P_l(t)\,dt=2i^lj_l(z)$: the resulting expression is $i^lz^l/(2^ll!)\int_{-1}^1e^{izt}(1-t^2)^l\,dt$, whose quotient by $2i^l$ equals $j_l(z)$ by induction using the displayed recurrence and integration by parts in $t$. Therefore the orthogonal angular expansion of the plane wave is $e^{ikrt}=\sum_{l\ge0}(2l+1)i^lj_l(kr)P_l(t)$ in $L^2(S^2)$ for each fixed $r$. In particular the normalization of $P_l$, of the incident coefficients and of the spherical Bessel functions has been derived rather than imported from a Coulomb spectral transform. [given, F1, F2, algebra]

1.2 (Regular solution for a bounded measurable radial potential.) For fixed $l$ set $Q(r)=v(r)-k^2$ and seek $\varphi_l=r^{l+1}h_l$. The equation $-\varphi_l''+[l(l+1)/r^2+v(r)]\varphi_l=k^2\varphi_l$ is equivalent to $(r^{2l+2}h_l')'=r^{2l+2}Qh_l$. Its normalized regular solution is the Volterra equation $h_l(r)=1+\frac1{2l+1}\int_0^r t[1-(t/r)^{2l+1}]Q(t)h_l(t)\,dt$. On every $[0,L]$, the kernel has absolute value at most $Mt/(2l+1)$ with $M=\|Q\|_{L^\infty(0,L)}$, so the $n$th iterated integral is bounded by $[Mr^2/(2(2l+1))]^n/n!$. The resulting uniformly convergent series gives a continuous real solution, and applying the same estimate to differences proves uniqueness; solutions constructed on different finite intervals agree. Differentiating the integral gives $h_l'(r)=r^{-2l-2}\int_0^r t^{2l+2}Q(t)h_l(t)\,dt$, whence $h_l=1+O(r^2)$, $h_l'=O(r)$ as $r\downarrow0$, and $\varphi_l,\varphi_l'$ are locally absolutely continuous with the radial equation valid almost everywhere. Conversely a solution with $\varphi_l/r^{l+1}\to1$ has no integration constant in $r^{2l+2}h_l'$ (a nonzero constant would make $h_l$ unbounded near zero), so it satisfies this Volterra equation. Near zero $h_l\neq0$, and reduction of order gives an independent solution $\varphi_l(r)\int_{r_0}^r\varphi_l(t)^{-2}\,dt$ with leading nonzero term proportional to $r^{-l}$. Such a branch is incompatible with the local $H^2$ stationary domain: for $l\ge1$ its reduced coefficient is not in $L^2(dr)$ near zero, while for $l=0$ its unreduced coefficient has a nonzero $1/r$ term with radial derivative proportional to $r^{-2}$ and is not locally $H^1(\mathbb R^3)$. Thus every projected radial channel of the $H^2_{\mathrm{loc}}$ stationary solution is a multiple of this regular $\varphi_l$. Projection and the radial equation are justified on compact annuli by smooth approximation, the polar Laplacian identity and angular integration by parts; the angular eigenfunction identity follows with the negative derivative sign in [F2]. No derivative of $v$ or regularity stronger than boundedness has entered. [given, F2, F3, algebra]

2.1 (Outgoing normalization and nonzero Wronskians.) Put $J_l(z)=zj_l(z)$ and $Q_l^{\,0}(z)=zy_l(z)$; the superscript distinguishes this free solution from the potential coefficient $Q$. Their recurrence is $u_{l+1}=(l+1)u_l/z-u_l'$. Differentiation shows that this sends $u''+[1-l(l+1)/z^2]u=0$ to the same equation with $l$ replaced by $l+1$. Starting with $\sin z,-\cos z$ proves the spherical Bessel equation and the finite sine/cosine expansions $J_l=\sin(z-l\pi/2)+O(z^{-1})$, $Q_l^{\,0}=-\cos(z-l\pi/2)+O(z^{-1})$, with differentiated errors of the same order. Their $z$-Wronskian is constant and has limit $1$, hence equals $1$. Define the outgoing solution exactly for $r\ge R$ by $f_l(r)=ik\,r[j_l(kr)+iy_l(kr)]$; then $f_l=e^{i(kr-l\pi/2)}(1+O(r^{-1}))$ and $f_l'=ik\,e^{i(kr-l\pi/2)}+O(r^{-1})$, while $\overline f_l$ is the incoming solution and $W(\overline f_l,f_l)=2ik$. Extend $f_l$ inward to every interval $[a,R]$, $a>0$, by its continuous Cauchy data at $R$ and the bounded-coefficient integral equation for the first-order radial system; its convergent successive-integration series provides existence and uniqueness. At jumps of $v$, function and derivative remain continuous and locally absolutely continuous, so there is no unmatched interface term. For solutions of this equation the Wronskian has derivative zero almost everywhere. In the exterior write the real regular solution as $\varphi_l=a_lf_l+b_l\overline f_l$, where $a_l=\overline b_l$, and set $W_l=W(\varphi_l,f_l)=2ikb_l$. This cannot vanish: it would imply $b_l=a_l=0$ and then $\varphi_l=0$ by Cauchy uniqueness, contrary to its origin normalization. Therefore $S_l=\overline W_l/W_l=-a_l/b_l$ is well-defined and $|S_l|=1$; writing $S_l=e^{2i\delta_l}$ defines $\delta_l$ modulo $\pi$. For $V=0$, the Volterra regular solution is $\varphi_l=(2l+1)!!\,k^{-l}rj_l(kr)$, since $j_l(z)\sim z^l/(2l+1)!!$ at zero from the integral formula in step 1.1. Here $W_l=-(2l+1)!!\,k^{-l}$ is real, so $S_l=1$, verifying the free normalization and its sign. [step 1.1, step 1.2, algebra]

3.1 (Matching one channel without exchanging infinite limits.) Define the zonal coefficient $c_l(r)=(2l+1)(4\pi)^{-1}\int_{S^2}\Psi(r\Omega)P_l(\Omega\cdot d)\,d\sigma$ and the reduced coefficient $u_l=rc_l$. By step 1.2, $u_l$ is a multiple of $\varphi_l$; outside the support it is a combination of $f_l,\overline f_l$. The incident reduced coefficient is $(2l+1)i^l rj_l(kr)=(2l+1)i^l(f_l-\overline f_l)/(2ik)$. The scattered reduced coefficient is purely outgoing: projecting the uniform far-field and derivative bounds in [F1] gives $u_l^{\mathrm{sc}}=e^{ikr}c_l(f_k)+O(r^{-1})$ and $(u_l^{\mathrm{sc}})'-ik\,u_l^{\mathrm{sc}}=O(r^{-1})$ for this fixed $l$; since the incoming component $B\overline f_l$ would contribute $-2ikB e^{-i(kr-l\pi/2)}+O(r^{-1})$, its coefficient is zero. Thus the total incoming coefficient remains $-(2l+1)i^l/(2ik)$. The outgoing/incoming ratio of the regular solution in step 2.1 is $-S_l$, so $u_l=(2l+1)i^l(S_lf_l-\overline f_l)/(2ik)$ and $u_l^{\mathrm{sc}}=(2l+1)i^l(S_l-1)f_l/(2ik)$. Comparing the fixed-channel far field and using $i^le^{-il\pi/2}=1$ yields $c_l(f_k)=(2l+1)(S_l-1)/(2ik)$, which is the claimed Legendre coefficient. This uses no unproved global radial spectral transform and no interchange between an infinite channel sum and a large-$r$ expansion. [step 1.1, step 1.2, step 2.1, F1, F2, algebra]

4.1 (Convergence of the full series.) Completeness in [F2] first gives $f_k=\sum_l c_l(f_k)P_l$ in $L^2(S^2)$. For $l\ge1$, repeated integration by parts on the smooth compact sphere gives $[l(l+1)]^N c_l(f_k)=(2l+1)(4\pi)^{-1}\int_{S^2}(-\Delta_{S^2})^Nf_k\,P_l\,d\sigma$, hence $|c_l(f_k)|\le C_N\sqrt{2l+1}\,[l(l+1)]^{-N}$ by Cauchy–Schwarz and the norm computed in step 1.1. All these derivatives exist by the compact-source differentiation argument there; no smoothness of $v$ is required. Also $|P_l(t)|\le1$ for $-1\le t\le1$: the finite-binomial expansion of $\pi^{-1}\int_0^\pi(t+i\sqrt{1-t^2}\cos s)^l\,ds$ is the Rodrigues polynomial $P_l(t)$, while the modulus of the integrand is at most one. Choosing $N\ge2$ therefore gives $\sum_l\sup_{|t|\le1}|c_l(f_k)P_l(t)|<\infty$, including the finite $l=0$ term. The series is consequently absolutely and uniformly convergent, and its limit agrees with the $L^2$ expansion and hence everywhere with the smooth amplitude. With step 3.1 these coefficients give the complete expansion in (a). [step 1.1, step 3.1, F2, algebra]

5.1 (Cross section with the exact Legendre norm.) Orthogonality and Parseval give $\sigma=\int_{S^2}|f_k|^2\,d\sigma=\sum_{l\ge0}|c_l(f_k)|^2\,4\pi/(2l+1)=\pi k^{-2}\sum_{l\ge0}(2l+1)|S_l-1|^2$. The factor is $4\pi/(2l+1)$, because the azimuthal integral $2\pi$ multiplies the Legendre norm $2/(2l+1)$. Since $|S_l-1|^2=4\sin^2\delta_l$, this is also $4\pi k^{-2}\sum_l(2l+1)\sin^2\delta_l$. Both series converge by the already established $L^2$ expansion. In the free test $V=0$, every $S_l=1$ and the amplitude and total cross section both vanish. This proves (b) with the stated normalization. [step 2.1, step 4.1, algebra]

6.1 (Retained resonance-model calculation.) For the conditional scalar model let $x=E-E_r$ and $a=\Gamma/2>0$. Then $S_l(E)=(x-ia)/(x+ia)$ has modulus one for every real $E$ and $S_l-1=-2ia/(x+ia)$, so $|S_l-1|^2=4a^2/(x^2+a^2)$ and $\sin^2\delta_l=a^2/(x^2+a^2)$. Substitution in the single-channel term of step 5.1 gives $\sigma_l(E)=4\pi(2l+1)k^{-2}a^2/[(E-E_r)^2+a^2]$ at the wave number assigned to that model energy (in the normalization $H_0=-\Delta$, $k=\sqrt E$ for $E>0$). The peak phase factor at $E=E_r$ is $S_l=-1$ and the phase-shift factor reaches one; this is a conditional model calculation, with no assertion that a generic compact potential has this pole or that $k$ is defined by $\sqrt E$ for negative $E$. This retains (c) and completes the proof. [step 5.1, algebra] ∎
