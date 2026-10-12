---
id: thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification
aliases: [nrqm-controlled-dynamics-stationary-dynamical-sector-identification]
kind: theorem
domain: mathematics
title: "Stationary and dynamical scattering in the full energy-angular representation"
status: draft
origin: session
deps: [thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-plancherel, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-plancherel: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Yafaev, Lectures on Scattering Theory, arXiv:math/0403213v1 (2004), lecture 2, equations (2.7), (2.11), (2.13)-(2.16), PDF pages 8-11: energy-angular normalization, distorted transforms and stationary scattering matrix"
      url: "https://arxiv.org/pdf/math/0403213"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, first edition (2009), section 12.1, printed pages 249-250 (PDF pages 261-262): complete Cook proof, intertwining and asymptotic completeness"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real and compactly supported, and set
$H_0=-\Delta$, $H=H_0+M_V$ on $H^2(\mathbb R^3)$. Use the independently
constructed complete wave operators

$$\Omega_\pm=\operatorname{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0},\qquad S=\Omega_+^*\Omega_-,$$

whose individual ranges equal $\mathcal H_{\mathrm{ac}}(H)=\mathcal H_c(H)$,
as in [[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]].
The local positive-energy resolvent and outgoing solution are those of
[[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]] and
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]].
These named supplier inputs must be proved independently; this item does not
establish completeness by assuming its own stationary identification.

Write $\sigma$ for surface measure on $S^2$, normalized by $\sigma(S^2)=4\pi$,
$\mathfrak h=L^2(S^2,d\sigma)$, and

$$\widehat g(p)=(2\pi)^{-3/2}\int_{\mathbb R^3}e^{-ip\cdot x}g(x)\,dx,\qquad (F_0g)(E,\omega)=\frac{E^{1/4}}{\sqrt2}\widehat g(\sqrt E\,\omega).$$

For a compactly supported $g\in L^2$ and $E=k^2>0$, let $R_H(E\pm i0)g$
denote the local resolvent limits, and define the free trace on compact sources
and the two stationary transforms by

$$Z_0(E)g=\frac{\sqrt k}{4\pi^{3/2}}\int e^{-ik\omega\cdot x}g(x)\,dx,\qquad Z_\pm(E)g=Z_0(E)\bigl[g-VR_H(E\pm i0)g\bigr].$$

Then:

(a) $F_0$ is a unitary from $L^2(\mathbb R^3)$ onto
$\mathcal K=L^2((0,\infty),dE;\mathfrak h)$. The initially defined stationary
transforms extend to $Z_\pm=F_0\Omega_\pm^*$ on $L^2(\mathbb R^3)$; their
restrictions to $\mathcal H_{\mathrm{ac}}(H)$ are unitary onto $\mathcal K$,
they vanish on the pure point subspace, and they diagonalize $H$ as
multiplication by $E$ on its absolutely continuous subspace.

(b) There is a measurable operator-valued unitary $S(E)$ on $\mathfrak h$
such that $F_0SF_0^*=M_{S(E)}$. No generic nonradial potential is assumed to
preserve individual spherical harmonic channels. For $R\in SO(3)$ set
$V_R(x)=V(R^{-1}x)$ and $(U_Ra)(\omega)=a(R^{-1}\omega)$. The covariance is
$S[V_R](E)=U_RS[V](E)U_R^{-1}$, not commutation with $U_R$ for a fixed
nonradial $V$.

(c) Let $u_{k,d}$ be the outgoing stationary solution restricted to a ball
$B$ containing the support of $V$:

$$u_{k,d}=(I+\chi_BR_0(k^2+i0)V)^{-1}\bigl(e^{ikd\cdot x}|_B\bigr),\qquad f_k(\omega,d)=-\frac1{4\pi}\int_Be^{-ik\omega\cdot x}V(x)u_{k,d}(x)\,dx.$$

Here $R_0(z)=(H_0-z)^{-1}$ and $\chi_B$ denotes restriction/localization;
the inverse is the inverse of **$I+K$**, not of $K$. Define
$(\mathcal A_ka)(\omega)=\int_{S^2}f_k(\omega,d)a(d)\,d\sigma(d)$. Then

$$S(E)=I-2\pi i\,Z_0(E)\bigl[V-VR_H(E+i0)V\bigr]Z_0(E)^*=I+\frac{ik}{2\pi}\mathcal A_k.$$

Adjoints $Z_0(E)^*$ and products in this formula are understood on the
compact interaction region, not as bounded maps into global $L^2$ plane waves.
The right side is norm-continuous on compact positive-energy intervals and
gives a unitary representative for every $E>0$.

(d) If in addition $V$ is radial, the energy-angular fiber decomposes in the
fixed countable spherical harmonic basis as
$S(E)Y_{lm}=S_l(E)Y_{lm}$. For the reduced radial equation

$$-\varphi_l''+\left(\frac{l(l+1)}{r^2}+V(r)\right)\varphi_l=k^2\varphi_l,\qquad \varphi_l(r)/r^{l+1}\longrightarrow1,$$

let $f_l$ be the outgoing solution with
$f_l(r)=e^{i(kr-l\pi/2)}(1+O(r^{-1}))$ outside the interaction region and set
$W_l=W(\varphi_l,f_l)=\varphi_lf_l'-\varphi_l'f_l$. Then

$$S_l(E)=\frac{\overline{W_l(E)}}{W_l(E)},\qquad |S_l(E)|=1.$$

Equivalently, for the real normalized regular solution
$a_l=\sqrt{\rho_l}\,\varphi_l=c_lf_l+d_l\overline f_l$,
$\rho_l=k/(\pi|W_l|^2)$, the multiplier is
$(c_l/d_l)/(c_l^0/d_l^0)$, where the superscript $0$ denotes the corresponding
free normalization. The real regular transforms
$(T_lg)(E)=\int_0^\infty a_l(E,r)g(r)\,dr$ extend to unitaries from the
absolutely continuous reduced radial subspace onto $L^2((0,\infty),dE)$.
They implement the scalar channel statement with the incoming/outgoing phase
factors specified in the proof. No Coulomb continuum transform is used for a
compact potential.

No zero-energy nonresonance, absence of a zero eigenvalue, positivity of the
whole spectrum, finite bound-spectrum assumption, or radiality is imposed on
(a)-(c). The negative and any zero point spectrum are omitted by the
absolutely continuous restriction, rather than falsely declared nonexistent.

## Facts & Assumptions

**Given:** CC, the potential $V$, the self-adjoint operators $H_0,H$, their
separable spectral calculus, the independently proved individual complete
wave operators, and the independently established positive-energy
injectivity of the compact outgoing/incoming Fredholm operators.

[F1] The independent completeness input gives isometric $\Omega_\pm$ with each range $\mathcal H_{\mathrm{ac}}(H)=\mathcal H_c(H)$ and spectral intertwining. Relative compactness gives discrete negative spectrum; the no-positive-eigenvalue result rules out positive atoms. Thus $\mathcal H_{\mathrm{ac}}(H)=P_H((0,\infty))L^2$, whereas a zero eigenvalue is permitted. The separable PVM/calculus needed here must be supplied under CC, not through an AC/DC-strengthened general spectral theorem. These are precise integration prerequisites, currently under the successor's supplier repair.

[F2] For every $E>0$, $I+K_E^\pm$ is injective on a bounded interaction ball, where $K_E^\pm=\chi_BR_0(E\pm i0)V$ has kernel $e^{\pm ik|x-y|}V(y)/(4\pi|x-y|)$. The incoming assertion follows by conjugation for real $V$. The CC finite-rank Hilbert factorization establishing its bounded inverse belongs to the repaired Fredholm supplier; step 1.2 below proves the local boundary continuity actually needed here from that input.

[F3] The explicit Fourier transform is unitary under CC ([[thm-plancherel]]), and the explicitly given countable $Y_{lm}$ form an ONB of $L^2(S^2)$ ([[thm-nrqm-orbital-and-spin-sphere-onb]]), with the Rodrigues and associated-polynomial formulas of [[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]] and [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]. No arbitrary Hilbert basis or uncountable family of fiber identifications is selected.

## Proof

1.1 [The exact free representation] Polar integration gives $dp=k^2\,dk\,d\sigma=(k/2)\,dE\,d\sigma$. Consequently $\|F_0g\|_{\mathcal K}^2=\int|\widehat g(p)|^2dp=\|g\|_2^2$. Conversely a measurable $a(E,\omega)$ defines $\widehat g(k\omega)=\sqrt{2/k}\,a(k^2,\omega)$, which has the required $L^2(dp)$ norm; Fourier inversion gives its unique preimage. Thus $F_0$ is onto and intertwines $H_0$ with $M_E$. On a bounded spatial support, the integral defining $Z_0(E)$ is bounded into $\mathfrak h$ by Cauchy-Schwarz, uniformly on compact positive $E$ intervals, and depends continuously in operator norm on $E$ by bounded-support differentiation of the exponential. Its coefficient is $\sqrt{k/2}(2\pi)^{-3/2}=\sqrt k/(4\pi^{3/2})$. [F3, algebra]

1.2 [Actual local resolvent boundary limits] On bounded balls the kernel $e^{i\sqrt z|x-y|}/(4\pi|x-y|)$, with the upper-half-plane square-root branch, converges in Hilbert-Schmidt norm to the outgoing kernel as $z=E+i\varepsilon\to E+i0$, locally uniformly for $E>0$: the dominating squared singularity $C|x-y|^{-2}$ is integrable in three dimensions. Multiplication by bounded $V$ preserves this convergence. Invertibility at each real $E$ is [F2]; the Neumann perturbation identity for a bounded inverse gives continuous inverses on a neighborhood of each such $E$, and a finite cover of a compact positive interval gives a uniform inverse bound. For a compact source $g$, enlarge the ball to contain its support and use the resolvent equation to obtain $\chi_BR_H(z)g=(I+K_z)^{-1}\chi_BR_0(z)g$. Therefore these local resolvents converge in operator norm on compact-source/local-output spaces. The lower limits follow by complex conjugation and have the adjoint reciprocity $\bigl(\chi_BR_H(E+i0)\chi_{B'}\bigr)^*=\chi_{B'}R_H(E-i0)\chi_B$. This proves the local norm boundary construction and its uniform energy control; no global unweighted trace bound is asserted. [F2, algebra]

1.3 [Actual radial regular and outgoing solutions] For the radial specialization (d) only, assume radial $V$. For each fixed $l,k$ the regular solution is constructed by the Volterra equation $\varphi_l(r)=r^{l+1}+\int_0^rG_l(r,s)(V(s)-k^2)\varphi_l(s)ds$, where $G_l(r,s)=[r^{l+1}s^{-l}-r^{-l}s^{l+1}]/(2l+1)$. Dividing by $r^{l+1}$ bounds the normalized kernel by $s/(2l+1)$. On $[0,L]$, successive iterates of the error are bounded by $C^n L^{2n}/(2^n n!)$, proving convergence, uniqueness, the stated origin normalization and local energy continuity. Differentiation gives the radial equation, and for real energy the solution is real. Outside the support, an exact outgoing solution is $e^{i(kr-l\pi/2)}\sum_{j=0}^l i^j(l+j)!/[j!(l-j)!(2kr)^j]$; direct coefficient substitution verifies the free radial equation and outgoing normalization. Continue it inward on compact intervals away from zero using the usual integral-equation Picard series, whose factorial estimates need only countable iteration. The Wronskian is constant. If it vanished, the nonzero real regular solution would be proportional to the outgoing solution outside the support. Its imaginary radial current is zero, whereas the outgoing current is $k$ times the squared proportionality constant; this forces that constant to vanish and contradicts the origin normalization. Thus $W_l\ne0$. [given, algebra]

2.1 [The strong Abel limit, including bound states] Put $W(t)=e^{itH_0}e^{-itH}$. For $g=\Omega_+h$, $\|W(t)g-h\|=\|\Omega_+h-W(t)^*h\|\to0$ by the defining wave limit. Hence $W(t)\to\Omega_+^*$ strongly on $\mathcal H_{\mathrm{ac}}(H)$. Its Abel average $A_\varepsilon^+=\varepsilon\int_0^\infty e^{-\varepsilon t}W(t)dt$ has the same limit there: split the integral at a time after which the norm error is below a prescribed tolerance; the fixed finite initial interval has weight tending to zero. If $Hg=\lambda g$, the average instead equals $\varepsilon(\varepsilon-i(H_0-\lambda))^{-1}g$ and tends to zero, since its squared spectral multiplier is bounded by one and tends to zero off the singleton $\{\lambda\}$, which has zero free spectral measure. Finite sums of point eigenvectors are dense in the pure point subspace; all averages have norm at most one, so the limit is zero on that whole subspace. The density uses only the countable atomic decomposition on this separable Hilbert space. By [F1] there is no singular continuous remainder. Thus $A_\varepsilon^+\to\Omega_+^*$ strongly on all $L^2$. Reversing time gives $A_\varepsilon^-\to\Omega_-^*$, with $A_\varepsilon^-=\varepsilon\int_0^\infty e^{-\varepsilon t}W(-t)dt$. [F1, step 1.1, algebra]

2.2 [The damped Cook-adjoint identity] On $D(H)=D(H_0)$, differentiation gives $W'(t)=-ie^{itH_0}Ve^{-itH}$. Integrate this identity; since $V$ is bounded and both groups are unitary, the resulting strong integral identity extends by density to every $g\in L^2$. Integration against $\varepsilon e^{-\varepsilon t}$ and interchange of absolutely convergent strong integrals yields $A_\varepsilon^+=I-i\int_0^\infty e^{-\varepsilon t}e^{itH_0}Ve^{-itH}dt$. On a compact positive interval the map $Z_0(E)$ from the fixed support of $V$ is uniformly bounded, so Fubini is legitimate there. Since $\int_0^\infty e^{-\varepsilon t}e^{-it(H-E)}dt=-iR_H(E+i\varepsilon)$ by the scalar spectral calculus, the two factors $-i$ multiply to $-1$, giving $(F_0A_\varepsilon^+g)(E)=Z_0(E)[g-VR_H(E+i\varepsilon)g]$ for compactly supported $g$. The reverse-time identity has $+i$ before its strong integral and $+iR_H(E-i\varepsilon)$ for the Laplace integral, so it likewise gives the minus sign and the lower resolvent. [F1, step 1.1, algebra]

2.3 [The angular normalization, with its derivation] The explicit associated-polynomial harmonics are restrictions of homogeneous harmonic polynomials of degree $l$: substitute their Rodrigues formulas into $r^lY_{lm}(x/r)$ and the Cartesian Laplacian to check polynomiality and harmonicity. This space has dimension $2l+1$. Indeed the Laplacian from degree $l$ polynomials onto degree $l-2$ polynomials is surjective: twice integrating a target polynomial in $x_3$ gives an operator $J$ with $\partial_3^2Jq=q$, and the finite sum $\sum_n(-J(\partial_1^2+\partial_2^2))^nJq$ cancels the other two second derivatives; the sum terminates because their degree in $x_1,x_2$ drops. Subtract the two polynomial-space dimensions. The $2l+1$ orthonormal $Y_{lm}$ therefore span this space, which is invariant under orthogonal rotations. Its projection kernel $K_l(\omega,d)=\sum_mY_{lm}(\omega)\overline{Y_{lm}(d)}$ is rotation invariant. At the north pole only $m=0$ survives, with $Y_{l0}=\sqrt{(2l+1)/(4\pi)}P_l$ and $P_l(1)=1$; hence $K_l(\omega,d)=(2l+1)P_l(\omega\cdot d)/(4\pi)$ after rotation. Define $j_l(z)=z^l\int_{-1}^1e^{izt}(1-t^2)^ldt/(2^{l+1}l!)$. Integrating Rodrigues' formula by parts $l$ times gives $\int_{-1}^1e^{izt}P_l(t)dt=2i^lj_l(z)$. Endpoint integration by parts in the polynomial $P_l$ gives $j_l(z)=\sin(z-l\pi/2)/z+O(z^{-2})$; the power series at zero gives $j_l(z)\sim z^l/(2l+1)!!$. Differentiating the integral and integrating its $t$ derivative verifies $z^2j_l''+2zj_l'+(z^2-l(l+1))j_l=0$. Project the zonal exponential at the north pole onto degree $l$: integration in the azimuth kills $m\ne0$ and the displayed Legendre integral fixes its $m=0$ coefficient. Rotate the result and use $K_l$ to obtain $\int_{S^2}e^{iz\omega\cdot d}Y_{lm}(d)d\sigma(d)=4\pi i^lj_l(z)Y_{lm}(\omega)$. Thus its factor, phase and origin/free asymptotics have all been computed. Angular channel projections commute with the radial Hamiltonian: on smooth compact spatial tests this follows from the polar Laplacian and this finite harmonic projection; Taylor expansion at the origin ensures the projected tests remain smooth there. The projections preserve the $H^2$ domain by density and commutation with the free graph norm, so the regular radial reduction is legitimate. [F3, step 1.1, algebra]

3.1 [Stationary and dynamical transforms coincide] For compact $g$, step 1.2 makes the right sides of step 2.2 converge uniformly on every compact positive energy interval, hence in its $L^2(dE;\mathfrak h)$ norm, to the displayed $Z_\pm(E)g$. Step 2.1 makes the left sides converge in the full $\mathcal K$ norm to $F_0\Omega_\pm^*g$. Their limits agree on each interval; the countable exhaustion $[1/n,n]$ identifies them a.e. on $(0,\infty)$. Compactly supported $L^2$ sources are dense, so the formulas extend uniquely to $Z_\pm=F_0\Omega_\pm^*$. Completeness in [F1] then proves their asserted unitarity on $\mathcal H_{\mathrm{ac}}(H)$, their vanishing on the pure point subspace and the energy intertwining. This is an actual Abel/resolvent comparison, not a naming of stationary kernels as wave operators. [F1, step 2.1, step 1.2, step 2.2, algebra]

4.1 [The spectral jump with its exact density] For compact sources $g,h$, the positive-energy spectral measure has density determined by $Z_-$: its quadratic density is $\|Z_-(E)g\|_{\mathfrak h}^2$, with mixed densities obtained by finite polarization. These densities are continuous locally in $E$ by step 1.2. In the PVM resolvent integral, $(R_H(E+i\varepsilon)-R_H(E-i\varepsilon))/(2\pi i)$ corresponds to the Poisson kernel $\varepsilon/[\pi((\lambda-E)^2+\varepsilon^2)]$. On compact positive intervals its integral against the continuous mixed density converges to that density; spectral measure outside a slightly larger interval contributes at most $C\varepsilon\|g\|\|h\|$, while positive point or singular continuous contributions are absent by [F1]. Thus, on compact-source/local-output spaces, $R_H(E+i0)-R_H(E-i0)=2\pi i\,Z_-(E)^*Z_-(E)$ as a bilinear-form identity. The local adjoint on the right is a generalized kernel adjoint, not a global plane-wave operator. Local boundary convergence in step 1.2 makes both sides actual continuous energy forms. [F1, step 1.2, step 3.1, algebra]

5.1 [Recovering the scattering matrix] For compact $g$, subtract the two stationary formulas: $Z_+(E)g-Z_-(E)g=-Z_0(E)V[R_H(E+i0)-R_H(E-i0)]g$. The interaction-region adjoint of $Z_-(E)$ is $B(E)=\chi_B[I-R_H(E+i0)V]Z_0(E)^*$, by step 1.2 reciprocity. It is bounded $\mathfrak h\to L^2(B)$ because $Z_0(E)^*$ restricted to $B$ is a bounded integral operator and the local resolvent is bounded. Step 4.1 now gives $Z_+(E)g=[I-2\pi iZ_0(E)VB(E)]Z_-(E)g$. The coefficient is locally norm-bounded; compact sources are dense, and $Z_-$ maps the absolutely continuous subspace onto $\mathcal K$, so this equality extends on each compact energy interval to all inputs. Consequently $Z_+Z_-^*=M_{I-2\pi i Z_0VB}$. But by step 3.1 the left side is $F_0\Omega_+^*\Omega_-F_0^*=F_0SF_0^*$. Expanding $B$ proves the first formula in (c). [step 1.2, step 3.1, step 4.1, algebra]

6.1 [The amplitude constant and unitary continuous version] Put $c_k=\sqrt k/(4\pi^{3/2})$. On $B$, $Z_0(E)^*a=c_k\int e^{ikd\cdot x}a(d)d\sigma(d)$, and $[I-R_H(E+i0)V]$ maps each incident plane wave to $u_{k,d}=(I+K_E^+)^{-1}e^{ikd\cdot x}$. Hence the kernel of $Z_0[V-VR_H(E+i0)V]Z_0^*$ is $c_k^2\int_B e^{-ik\omega\cdot x}V(x)u_{k,d}(x)dx=-k f_k(\omega,d)/(4\pi^2)$. Multiplication by $-2\pi i$ gives exactly $ik f_k/(2\pi)$. All integral interchanges concern finite angular measure and bounded compact-region operators. The amplitude kernel is smooth in both angular variables by differentiating the bounded-support plane waves before applying the inverse and the compact-source integral. Its operator is Hilbert-Schmidt and locally norm-continuous in energy by step 1.2. The dynamical $S$ is unitary by individual completeness. Apply its norm equality, and the norm equality for its adjoint, to $1_Av$ for finite-measure energy sets $A$ and each rational-complex finite angular vector $v$. The resulting integral norm identities give pointwise isometry and coisometry off a countable null set; density gives unitary fibers there. Their norm-continuous explicit representative is unitary at every positive energy, because its two unitary defects vanish a.e. and are continuous. No threshold limit is used. [F1, step 1.2, step 5.1, algebra]

7.1 [A countable multiplier-commutant construction] For completeness, decomposability can be constructed without arbitrary measurable fiber selection. If $Q=F_0SF_0^*$, spectral intertwining gives $QM_{1_A}=M_{1_A}Q$ for every Borel energy set. Fix the countable angular ONB $e_j$. Each scalar coefficient $Q_{ij}=\pi_iQ\iota_j$ commutes with scalar projections. On the nested finite intervals $I_n=(1/n,n)$ set $q_{ij,n}=Q_{ij}1_{I_n}$. For bounded simple $f$ supported in $I_n$, projection commutation gives $Q_{ij}f=fq_{ij,n}$. Testing indicators of the measurable sets where $|q_{ij,n}|>\|Q\|+1/m$ proves $|q_{ij,n}|\le\|Q\|$ a.e.; their restrictions agree on overlaps. Choose representatives for this countable family under CC and assemble $q_{ij}(E)$ off a countable union of null sets. For each rational-complex finite vector $c$ and each finite output truncation, the bound for $Q(1_Ac)$ implies pointwise $\sum_{i\le N}|\sum_jq_{ij}(E)c_j|^2\le\|Q\|^2\|c\|^2$: otherwise a positive-measure subset of a finite interval would contradict the integrated bound. There are only countably many $c,N$; remove their common null set. Increasing $N$ and completing the rational finite vectors constructs a unique bounded $Q(E)$ on $\mathfrak h$, with strongly measurable action. Equality on simple finite-angular vectors proves $Q=M_{Q(E)}$. Perform the same construction for $Q^*$; its coefficient matrix is the pointwise adjoint. The scalar adjoint identity $(Q_{ij})^*=\pi_jQ^*\iota_i$ gives transposed conjugate coefficients a.e.; finite angular pairings and bounded completion therefore identify the field of $Q^*$ with the actual adjoint $Q(E)^*$. Testing the norm equalities for $Q$ and $Q^*$ on $1_Ac$, for the countable rational finite vectors $c$, makes both fields isometries off one countable union of null sets. Complex polarization gives $Q(E)^*Q(E)=I$; the adjoint-field isometry gives $Q(E)Q(E)^*=I$, so the inverse is genuine and no formal infinite matrix multiplication was used. This uses countably many representatives and rational tests, not AC or dependent fiber choices. The fiber agrees a.e. with step 6.1's explicit stationary one. [F1, F3, step 3.1, step 5.1, algebra]

7.2 [Generic rotation covariance] Spatial rotation $\mathcal U_Rg(x)=g(R^{-1}x)$ gives $H[V_R]=\mathcal U_RH[V]\mathcal U_R^{-1}$ and commutes with $H_0$. Conjugating each defining strong wave limit yields $\Omega_\pm[V_R]=\mathcal U_R\Omega_\pm[V]\mathcal U_R^{-1}$ and the same formula for $S$. Polar Fourier coordinates satisfy $F_0\mathcal U_R=U_RF_0$. Thus the fiber covariance in (b) follows a.e.; the explicit continuous stationary kernels give it at every $E>0$. No step asserts $H[V]$ commutes with rotations unless $V_R=V$. [F1, step 1.1, step 6.1, algebra]

8.1 [The regular radial spectral transform is genuinely onto] The angular decomposition reduces the radial potential and free Laplacian to the countably many reduced radial problems, with the regular origin boundary inherited from $H^2(\mathbb R^3)$. The local outgoing radial Green kernel is $-\varphi_l(r_<)f_l(r_>)/W_l$: its derivative jump is $-1$, and its origin and outgoing conditions characterize it uniquely. Since $\varphi_l$ is real and $\varphi_l=c f_l+d\overline f_l$, $d=W_l/(2ik)$ and $c=-\overline W_l/(2ik)=\overline d$. Therefore the difference of the outgoing and incoming Green kernels is $2ik\varphi_l(r)\varphi_l(s)/|W_l|^2$. The same explicit Poisson spectral argument as step 4.1 yields density $\rho_l\varphi_l(r)\varphi_l(s)$, with $\rho_l=k/(\pi|W_l|^2)$. Thus $T_l$ initially has squared norm $\|P_{\mathrm{ac}}g\|^2$ on compact sources and extends to an isometry on the absolutely continuous radial subspace. For an energy set $A$, polarization of the density formula says that $T_lP_H(A)g$ is the orthogonal range projection of $1_AT_lg$; their norms are equal because both squared norms equal the spectral measure of $g$ on $A$. Hence $1_AT_lg$ is already in the range and $T_lP_H(A)g=1_AT_lg$. Its range is therefore closed and reducing; the scalar case of step 7.1 says its range projection is multiplication by $1_A$ for a measurable energy set $A$. Fix a countable dense list of compact radial step functions. At each positive energy not all their integrals against the nonzero continuous local function $\sqrt{\rho_l}\varphi_l$ vanish. Their transformed representatives are continuous in energy locally. Since each lies in the range, all vanish a.e. on the complement of $A$; the countable union shows that complement is null. This proves onto, not merely an isometric kernel formula. The regular origin condition used here follows from the spherical-harmonic radial decomposition: the other local solution has reduced leading term $r^{-l}$, which is not locally $L^2$ for $l\ge1$; for $l=0$ its three-dimensional $1/r$ term is excluded by $H^2_{\mathrm{loc}}$ and its delta Laplacian. [F1, F3, step 4.1, step 7.1, step 2.3, step 1.3, algebra]

9.1 [Radial coefficient matching and the channel phases] Normalize $a_l=\sqrt{\rho_l}\varphi_l=c_lf_l+d_l\overline f_l$. Step 8.1 gives $|c_l|=|d_l|=1/(2\sqrt{\pi k})$. For the free normalized regular solution $a_l^0=\sqrt{k/\pi}\,rj_l(kr)$ the coefficients in the same $e^{\pm i(kr-l\pi/2)}$ convention are $c_l^0=1/(2i\sqrt{\pi k})$, $d_l^0=-1/(2i\sqrt{\pi k})$. The angular Fourier identity proved in step 2.3 gives the free channel transform $(-i)^lT_l^0$. In the distorted inverse $Z_-^*$, the outgoing resolvent correction leaves the incoming free coefficient unchanged; the inverse $Z_+^*$ instead leaves the outgoing coefficient unchanged. The regular origin condition makes each solution a scalar multiple of $a_l$, and matching these unchanged coefficients therefore gives $Z_-|_{lm}=(-i)^l\overline{d_l^0/d_l}\,T_l$ and $Z_+|_{lm}=(-i)^l\overline{c_l^0/c_l}\,T_l$. All factors have modulus one. Their product yields the dynamical channel multiplier $\overline{c_l^0/c_l}(d_l^0/d_l)=(c_l/d_l)/(c_l^0/d_l^0)=\overline W_l/W_l$. This proves the radial stationary-dynamical identification through actual normalized kernels, rather than importing a Coulomb transform or citing an unspecified packet limit. [F3, step 3.1, step 1.3, step 8.1, step 2.3, algebra]

10.1 [Agreement with the scattering amplitude] Integrating incident directions against $Y_{lm}(d)$ produces $4\pi i^l rj_l(kr)$ in the reduced $lm$ channel. Its incoming coefficient is matched by the regular distorted solution; its outgoing coefficient is consequently multiplied by $S_l$. The difference from the incident outgoing coefficient is $4\pi i^l(1/(2ik))(S_l-1)$ in the $e^{i(kr-l\pi/2)}$ convention. Converting to $e^{ikr}$ cancels $i^l e^{-il\pi/2}$ and gives angular amplitude-operator eigenvalue $2\pi(S_l-1)/(ik)$. Thus $I+ik\mathcal A_k/(2\pi)$ acts on the channel by precisely $S_l$, agreeing with step 6.1. Every $m$ has the same radial equation, so no arbitrary angular-sector selection occurs; the countable channel sum and the countable exceptional sets are legitimate under CC. These constructions prove all the assertions. [step 6.1, step 7.1, step 7.2, step 1.3, step 8.1, step 2.3, step 9.1, algebra] ∎

## Integration status and exact unclosed prerequisites

This is a research-only authoring candidate, not production content or native
acceptance. The scalar generic-$l$ assertion in the current carrier is replaced
by the full energy-angular branch and retained as the radial specialization.
No claim about negative bound states is lost, and no zero-threshold or
nonresonance hypothesis is inserted.

The local Abel comparison, the spectral-jump-to-scattering-matrix calculation,
the amplitude constant, the countable matrix commutant and the radial Volterra/
Green-density/phase comparison are written out above for the owning successor
to review. They remain contingent on these precise production prerequisites:

- The independently repaired complete wave operators must have each individual
  range equal to $\mathcal H_c=\mathcal H_{\mathrm{ac}}$, with negative spectrum
  discrete and no positive eigenvalues. Their present carriers cannot be treated
  as accepted simply because this draft cites them. No every-$C_c(\mathbb R)$
  zero-threshold compact-defect claim is used by this draft.
- The positive-energy compact Fredholm injectivity and CC finite-rank inverse
  construction must be embedded in an accepted supplier. Step 1.2 then supplies
  the actual local norm boundary extension; a mere assertion of invertibility
  does not satisfy that prerequisite.
- The CC separable spectral/PVM calculus under repair must genuinely provide
  the spectral integrals and pure point/continuous decomposition used here.
  No general AC/DC spectral supplier is licensed by this text.
- The successor must check the reduced radial-domain/Green-kernel realization
  and the angular Rodrigues/addition normalization against its exact CC sphere
  suppliers. The explicit constructions are included; no completion of those
  production proof contracts is claimed by the research author.

No production carrier, manifest, contract, readiness row, shared plan, import,
engine, gate, control, source40 consumer, or prior completed repair receipt has
been changed. Review rounds and full consumer ownership stay with the sole
spectral repair successor.
