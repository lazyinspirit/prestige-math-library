---
id: pthm-r5-denef-douglas-susy-flux-vacuum-density
kind: physics-theorem
title: "Leading continuum density for supersymmetric flux vacua in the Denef–Douglas setup"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 15
axiom_strength: "ZF + ACω"
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-cmp-n2-special-kahler-period-data
  - def-cmp-type-iib-o3-o7-orientifold-data
  - def-r2-iib-flux-background-conventions
  - def-r5-flux-vacuum-ensemble-data
  - def-r5-denef-douglas-orientifold-period-frame
  - post-r2-gvw-iib-flux-superpotential
  - post-r2-iib-three-form-flux-quantization
  - pthm-r2-iib-d3-tadpole-from-f5-bianchi
  - lem-r5-regular-zero-delta-counting-formula
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
  - thm-r5-parameterized-regular-zero-counting-formula
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-r5-flux-vacuum-ensemble-data: formulation-prerequisite
  def-r5-denef-douglas-orientifold-period-frame: formulation-prerequisite
  post-r2-gvw-iib-flux-superpotential: physical-assumption
  post-r2-iib-three-form-flux-quantization: physical-assumption
  pthm-r2-iib-d3-tadpole-from-f5-bianchi: physical-result
  lem-r5-regular-zero-delta-counting-formula: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-r5-parameterized-regular-zero-counting-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
physical_scope: "Conditional source-normalized continuum density for regular supersymmetric F-term roots in the Type IIB Calabi–Yau O3/O7 orientifold limit. It is not an exact finite-lattice count, a global compactification theorem, a cosmological population probability, or an observer measure."
empirical_premises: []
sources:
  references:
    - title: "Frederik Denef and Michael R. Douglas, Distributions of Flux Vacua, arXiv:hep-th/0404116v2"
      url: "https://arxiv.org/pdf/hep-th/0404116v2"
      locator: "§§1.5, 2.1, 3.1 Eqs. (3.1)–(3.16), and §5 Eq. (5.3), PDF pp. 9–16 and 38–39; source frame, Hessian determinant, continuum integral, and regime/limitations."
    - title: "Mariana Graña, Flux Compactifications in String Theory: A Comprehensive Review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§8 Eqs. (8.1)–(8.12), printed pp. 62–66; flux-vacuum densities, continuum replacement, and total-count/index distinction."
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph M. Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1 Eqs. (2.23)–(2.25), PDF pp. 7–9, and §2.3 Eq. (2.40), PDF pp. 13–14; sourced tadpole, flux periods, and GVW superpotential."
---
## Statement

Assume the source Type IIB Calabi–Yau O3/O7 orientifold limit and its admissible local period frame from [[def-r5-denef-douglas-orientifold-period-frame]]. Let $n=h^{2,1}_-(Y)$, $m=n+1$, and $K=4m$. The $m$ complex moduli are $z^a=(\tau,z^i)$; the Kähler moduli are omitted. Write $g(z)=\det(g_{a\bar b}(z))>0$ for the Hermitian metric determinant in local coordinates, $d^{2m}z=\prod_{a=0}^{m-1}d(\Re z^a)\,d(\Im z^a)$, and $F_{IJK}(z)$ for the orthonormal-frame Yukawa tensor fixed in the period-frame definition. The continuum integral counts regular roots; its almost-everywhere regularity and measurability follow from the full-rank flux family as proved below.

For $x\in\mathbb C\setminus\{0\}$ and $Z=(Z_I)\in\mathbb C^n$, define the $2n$-by-$2n$ matrix

$$H(x,Z;z)=\begin{pmatrix} \delta_{IJ}\bar x-\dfrac{Z_I\bar Z_J}{x} & F_{IJK}(z)\bar Z^K\\[4pt] \bar F_{\bar I\bar J\bar K}(z)Z^K & \delta_{IJ}x-\dfrac{\bar Z_I Z_J}{\bar x} \end{pmatrix}.$$

Use $\det H=1$ when $n=0$, the determinant of the empty matrix. The expression $|x|^2|\det H|$ at $x=0$ means the continuous extension of $\left|x\bar x\det H\right|$ from $x\ne0$; the rank-one terms in the two diagonal blocks make $x\bar x\det H$ extend continuously. Set

$$\rho_{\rm DD}(z)=\pi^{-2m}\int_{\mathbb C}d^2x\int_{\mathbb C^n}d^{2n}Z\, e^{-|x|^2-|Z|^2}\,|x|^2|\det H(x,Z;z)|.$$

Here $d^2x$ and $d^{2n}Z$ are ordinary real Lebesgue measures; $\rho_{\rm DD}$ is a continuum counting density, not a probability density. In the ensemble’s continuum mode, the leading Denef–Douglas approximation to the **total** number of regular supersymmetric roots below the tadpole bound $L_*>0$ is

$$\mathcal N_{\rm susy}^{\rm cont}(L\le L_*)= \frac{(2\pi L_*)^{2m}}{(2m)!}\,|\det\eta|^{-1/2}\cdot \int_{\mathcal M}d^{2m}z\,g(z)\rho_{\rm DD}(z).$$

The source’s signed-index density instead uses $\pi^{-2m}\int e^{-|x|^2-|Z|^2}|x|^2\det H\,d^2x\,d^{2n}Z$, without the absolute value around $\det H$; it is a distinct observable. The formula applies to the specified allowed orientifold-odd harmonic flux subspace and uses the unshifted free-period lattice only in the continuum approximation. Denef–Douglas state a many-lattice-points regime: for a spherical moduli-space region of radius $r$, $L_*>K/r^2$, and for a sufficiently large total region $L_*>cK$ with $c$ of order one. Smaller regions can have lattice oscillations. The source supplies no uniform finite-$L_*$ error bound, so the formula is not an exact finite-lattice theorem.

The D3-charge interpretation of $L_*$ is conditional on the selected cover/quotient, source set and sourced five-form Bianchi identity in [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]. The result asserts no global solution, vacuum stability, cosmological population measure, or observer-selection probability.

## Facts & Assumptions

**Given:** The chosen compactification and moduli region, the source O3/O7 orientifold and flux conventions, the unshifted free-period flux lattice and tadpole bound, the source GVW F-term equations, and the local period-frame data of [[def-r5-denef-douglas-orientifold-period-frame]].

[F1] [[def-r5-flux-vacuum-ensemble-data]]: the ensemble fixes a real $K$-dimensional flux space with ordered unit-covolume lattice basis, nondegenerate symmetric pairing $\eta$, $L(N)=\tfrac12N^\alpha\eta_{\alpha\beta}N^\beta$, allowed source set and bound $L_*$; its continuum mode replaces the lattice sum on $L(N)\le L_*$ by the Lebesgue integral in this basis.

[F2] [[def-r5-denef-douglas-orientifold-period-frame]]: in the source frame $m=n+1$, $K=4m$, $G_4=\bar x\Omega_4-\bar y_AD_A\Omega_4+\bar Z_ID_0D_I\Omega_4+\mathrm{c.c.}$, $D_AW_{\rm src}=y_A$, $L=|x|^2-|y|^2+|Z|^2$, and the frame pairing is $\operatorname{diag}(1,-I_m,I_n,1,-I_m,I_n)$. It also fixes the source special-geometry and mixed-derivative identities used below.

[F3] [[def-cmp-calabi-yau-threefold-compactification-data]]: the geometric supplier fixes a smooth connected compact complex threefold, its Kähler class, holomorphic volume form, orientation and integral-cohomology conventions; broad Calabi–Yau status alone does not assert strict $SU(3)$ holonomy or a supergravity solution.

[F4] [[def-cmp-n2-special-kahler-period-data]]: periods are defined on a locally marked patch of the torsion-free degree-three lattice, with a specified polarization and local period section; their normalization, symplectic marking and prepotential frame are local data rather than global consequences.

[F5] [[def-cmp-type-iib-o3-o7-orientifold-data]]: the adopted $(-1)^{F_L}\Omega_p\sigma^*$ projection has $\sigma^*\Omega=-\Omega$ and splits harmonic forms into even and odd sectors; the surviving three-form fluxes in this setup lie in the odd sector, while source charges and tadpole constraints are separately supplied.

[F6] [[def-r2-iib-flux-background-conventions]]: $G_3=F_3-\tau H_3$, $\tau=C_0+ie^{-\phi}$, the smooth-cover or quotient convention is declared, and all periods and source integrals use that same convention.

[A1] [[post-r2-gvw-iib-flux-superpotential]]: adopt the classical tree-level four-dimensional $N=1$ flux truncation with $W_{\rm flux}=\mathcal N_{4\mathrm D}\int_X\Omega\wedge G_3$, using one fixed normalization and wedge order; this is an effective-theory input and excludes unlisted corrections and varying seven-brane profiles.

[A2] [[post-r2-iib-three-form-flux-quantization]]: in the selected smooth cover, normalized free periods of $F_3,H_3$ are integers. Torsion, differential/K-theory refinements and possible shifts are not identified with that free lattice; the unshifted lattice is used here only in the stated continuum approximation.

[F7] [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]: under the adopted sourced five-form Bianchi identity on the compact oriented boundaryless cover, the same-convention Maxwell flux charge plus localized D3 charge is zero. Its use here only matches the charge normalization and source-dependent cutoff; its stated conditional proof is not upgraded to independent acceptance.

[L1] [[lem-r5-regular-zero-delta-counting-formula]]: under its $C^1$ and regular-zero hypotheses, the distribution $\delta_0(f(z))|\det_{\mathbb R}Df(z)|$ counts each root once against compactly supported test functions.

[F8] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: assuming $\mathrm{AC}_\omega$, Lebesgue measure on $\mathbb R^d$ decomposes in polar coordinates as $r^{d-1}\,dr\,d\sigma$ for nonnegative Borel functions, with $\sigma$ the finite Borel surface measure on the unit sphere.

[F9] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for sigma-finite measure spaces and a nonnegative product-measurable function, both section integrals are measurable and the iterated integrals equal the product integral.

[A4] [[def-countable-choice]]: assume the countable-choice axiom $\mathrm{AC}_\omega$, which is the stated choice hypothesis of [F8].

[A3] Denef–Douglas, §5 Eq. (5.3), reports $L_*>K/r^2$ for a spherical region of radius $r$, $L_*>cK$ for a sufficiently large total region, and possible lattice oscillations on smaller regions; no uniform finite-cutoff error bound is reported. [Source: [Denef–Douglas, “Distributions of Flux Vacua,” §5](https://arxiv.org/pdf/hep-th/0404116v2).]

[L2] [[thm-r5-parameterized-regular-zero-counting-formula]]: for a $C^1$ linear parameter family whose derivative in the parameter variables is onto, local invertible parameter minors give a measurable regular-root count, almost-everywhere regularity of all roots, and the exact integrated incidence-counting formula. Its proof uses the equal-dimensional Morse–Sard theorem and countably many inverse charts with ordinary change of variables, not an interchange of approximate-delta limits.

## Proof

**Proof technique:** direct continuum zero-count and change of flux coordinates.

1.1 By [F1], the continuum mode replaces the unshifted free-period flux sum by Lebesgue integration over the same tadpole region; this is the stated approximation in [A2], not a finite-lattice identity. In a smooth coordinate/frame patch the map $F(z,N)=y(z;N)$ is $C^1$ and real-linear in $N$: the periods are holomorphic before normalization, and their normalization, metric and local orthonormal frames are smooth. For each fixed $z$, [F2]'s unique real flux-coordinate expansion makes $N\mapsto(x,y,Z)$ an isomorphism, so its projection $N\mapsto y\in\mathbb R^{2m}$ has rank $2m$. Cover the second-countable moduli region by countably many coordinate patches on each of which a fixed $2m$-column parameter minor remains invertible, and split this cover into disjoint Borel pieces. Apply [L2] on each open patch with the piece indicator as its bounded Borel root weight and with $w(N)=\mathbf1_{L(N)\le L_*}$; its completed-measure region clause also allows the selected ensemble region to be merely Lebesgue measurable, without replacing it by an open region or assuming a negligible boundary. It proves that almost every flux has only regular roots on all patches, proves measurability, and identifies the integrated root count exactly with the incidence fibre integral of $\delta_0^{(2m)}(y)|\det_{\mathbb R}D_zy|$ and the cutoff. Nonnegative summation over the pieces uses Tonelli [F9], and counts each root once. Here the delta denotes the parameter-fibre Dirac measure constructed in [L2], not a function to which Tonelli is applied and not an approximate-delta limit interchanged with the flux integral. The zero set is exactly the selected F-term root set by [F2] and [A1]. [given, F1, F2, A1, A2, F9, L2]

1.2 The frame in [F2] is restricted to the stated compact Calabi–Yau period data [F3], local special-Kähler marking and polarization [F4], O3/O7 odd flux sector [F5], and one declared Type IIB smooth-cover or quotient convention [F6]. These inputs identify the local source sector and its flux pairing used below; they do not imply strict $SU(3)$ holonomy, a global solution, or any additional flux directions. [given, F2, F3, F4, F5, F6]

2.1 Put $p=1+m+n=2m$ and $w=(x,y_A,Z_I)$. In the source conjugate-paired order let $\xi=(\bar x,\bar y_A,\bar Z_I,x,y_A,Z_I)$, and let $M$ be the complex frame-change matrix from $\xi$ to the real flux basis. The pairing identity $M^\dagger\eta M=Q$, with $Q=\operatorname{diag}(1,-I_m,I_n,1,-I_m,I_n)$, gives $|\det M|^2|\det\eta|=|\det Q|=1$, hence $|\det M|=|\det\eta|^{-1/2}$. For each $w_j=u_j+iv_j$, the square complexified coordinate matrix $(u_j,v_j)\mapsto(\bar w_j,w_j)$ is $\begin{pmatrix}1&-i\\1&i\end{pmatrix}$ and has determinant $2i$. The $p$ blocks contribute $2^p=4^m$; since $M$ maps conjugate-paired coordinates to a real flux vector, the product matrix is the real Jacobian on real $(u_j,v_j)$ coordinates. The convention $d^2w=(2i)^{-1}dw\wedge d\bar w$ has absolute value $du_j\,dv_j$ and adds no further scale. Therefore
$$d^KN=4^m|\det\eta|^{-1/2}\,d^2x\,d^{2m}y\,d^{2n}Z.$$
If $e_A{}^a$ is the orthonormal moduli frame, taking determinants of $e_A{}^a g_{a\bar b}\overline{e_B{}^b}=\delta_{A\bar B}$ gives $|\det e|^2=g^{-1}$. Keep the output F-term coordinates $y_A$ fixed in this unitary frame. Changing only the derivative directions from the coordinate $z$ frame to that orthonormal frame has real determinant $g^{-1}$. At a root, derivatives of the output frame and its Kähler connection multiply $y$ and vanish. Thus the absolute determinant of the source conjugate-ordered unitary Hessian $\mathcal J$ is $g^{-1}|\det_{\mathbb R}D_zy|$, and
$$|\det_{\mathbb R}D_zy|=g|\det\mathcal J|,\qquad \delta_0^{(2m)}(y)|\det_{\mathbb R}D_zy|=g\delta_0^{(2m)}(y)|\det\mathcal J|.$$
This uses the already normalized frame output $y$, so no second output-frame determinant is inserted. If coordinate outputs $D_aW$ are used instead, their Jacobian has the separate factor $g^2$ and their delta the inverse factor $g^{-1}$, giving the same product. [F1, F2, F4, F6, step 1.1, algebra]

3.1 After the fixed-$z$ flux change of step 2.1, the parameter-fibre measure in [L2] is ordinary Dirac mass in the auxiliary $y$ coordinate together with Lebesgue measure in $(x,Z)$. It therefore evaluates at $y=0$ exactly. The full derivative matrix is continuous in these flux coordinates, including $x=0$, because the F-term map is linear in flux; the Schur-complement expression is not needed to define it there. By [F2], the restricted tadpole is $L=|x|^2+|Z|^2$, so the remaining domain is the ball $|x|^2+|Z|^2\le L_*$ in $\mathbb C^{1+n}=\mathbb C^m$. Its sphere boundary has Lebesgue measure zero, so open and closed cutoff balls have the same continuum integral. The physical D3-charge meaning of this cutoff remains conditional on [F7]. Consequently the estimator is
$$4^m|\det\eta|^{-1/2}\cdot\int_{\mathcal M}d^{2m}z\,g(z)\cdot\int_{|x|^2+|Z|^2\le L_*}d^2x\,d^{2n}Z\,|\det\mathcal J(x,Z;z)|.$$
This equality follows from the incidence counting identity, not from commuting a fixed-flux delta-kernel limit with a flux integral. [F1, F2, F7, L2, step 2.1, algebra]

3.2 Differentiate the frame F-terms in [F2]. At a root $y=0$, derivatives of the frame vectors multiply $y$ and vanish. In the source row order $(D_0,D_I,\bar D_0,\bar D_{\bar I})$ and column order $(\bar D_{\bar0}\bar W,\bar D_{\bar J}\bar W,D_0W,D_JW)$, the Hessian identity $D_A\bar D_{\bar B}\bar W=\delta_{A\bar B}\bar x$, its conjugate, $D_0D_0W=0$, $D_0D_IW=Z_I$, and $D_ID_JW=F_{IJK}\bar Z^K$ give
$$\mathcal J_0= \begin{pmatrix} \bar x&0&0&Z_J\\ 0&\delta_{IJ}\bar x&Z_I&F_{IJK}\bar Z^K\\ 0&\bar Z_J&x&0\\ \bar Z_I&\bar F_{\bar I\bar J\bar K}Z^K&0&\delta_{IJ}x \end{pmatrix}.$$
Simultaneously interchanging the middle row and column blocks, which leaves the determinant unchanged because the two permutation signs cancel, yields
$$\mathcal J= \begin{pmatrix} \bar x&0&0&Z_J\\ 0&x&\bar Z_J&0\\ 0&Z_I&\delta_{IJ}\bar x&F_{IJK}\bar Z^K\\ \bar Z_I&0&\bar F_{\bar I\bar J\bar K}Z^K&\delta_{IJ}x \end{pmatrix}.$$
These are the source covariant-Hessian entries in the fixed normalization, not a claim that the upstream effective-theory inputs are unconditionally established. [F2, A1, step 2.1, algebra]

4.1 For $x\ne0$, the leading $2$-by-$2$ scalar block of $\mathcal J$ is $P=\operatorname{diag}(\bar x,x)$, so the block determinant identity gives $\det\mathcal J=\det P\,\det(D-CP^{-1}B)$. Here $D=\begin{pmatrix}\delta\bar x&F\bar Z\\\bar FZ&\delta x\end{pmatrix}$, $B=\begin{pmatrix}0&Z_J\\\bar Z_J&0\end{pmatrix}$, and $C=\begin{pmatrix}0&Z_I\\\bar Z_I&0\end{pmatrix}$, with the scalar rows and columns interpreted as the two $n$-component blocks. Multiplication gives
$$D-CP^{-1}B= \begin{pmatrix} \delta_{IJ}\bar x-Z_I\bar Z_J/x&F_{IJK}\bar Z^K\\ \bar F_{\bar I\bar J\bar K}Z^K&\delta_{IJ}x-\bar Z_I Z_J/\bar x \end{pmatrix}=H(x,Z;z),$$
and $\det P=|x|^2$. Thus $\det\mathcal J=|x|^2\det H$ for $x\ne0$. Each singular block correction in $H$ is a rank-one matrix update, so determinant multilinearity makes $(x\bar x)\det H$ have at most one factor $x^{-1}$ and one factor $\bar x^{-1}$; multiplication by $x\bar x$ clears both and gives a continuous extension at $x=0$. Hence $|\det\mathcal J|=|x|^2|\det H|$ with exactly the extension in the Statement. [F2, step 3.2, algebra]

5.1 Put $u=(x,Z)\in\mathbb C^m\simeq\mathbb R^{2m}$ and $q(u;z)=|\det\mathcal J(u;z)|$. For $t>0$, every entry of $\mathcal J(tu;z)$ is $t$ times the corresponding entry of $\mathcal J(u;z)$, including the rank-one quotients $Z_I\bar Z_J/x$; hence $q(tu;z)=t^{2m}q(u;z)$, since $\mathcal J$ has size $2m$. Apply [F8] with $d=2m$: the radial measure is $r^{2m-1}dr\,d\sigma$. The ball integral has radial factor $\int_0^{\sqrt{L_*}}r^{4m-1}dr=L_*^{2m}/(4m)$, while the Gaussian integral has radial factor $\int_0^\infty e^{-r^2}r^{4m-1}dr=\tfrac12\Gamma(2m)=(2m-1)!/2$. Their ratio is $L_*^{2m}/(2m)!$; therefore
$$\int_{|u|^2\le L_*}q(u;z)\,d^{2m}u= \frac{L_*^{2m}}{(2m)!}\int_{\mathbb C^m}e^{-|u|^2}q(u;z)\,d^{2m}u.$$
[given, F8, A4, step 4.1, algebra]

6.1 Substitute step 5.1 into step 3.1 and use $\rho_{\rm DD}(z)=\pi^{-2m}\int e^{-|u|^2}q(u;z)\,d^{2m}u$, as established by step 4.1 and defined in the Statement. Since $4^m\pi^{2m}=(2\pi)^{2m}$, the displayed coefficient and integral follow. Retaining $|\det H|$ gives the total-root density; replacing it by $\det H$ instead gives the signed-index density and does not equal the total count in general. The lattice sum was replaced in step 1.1, so this result is only the leading continuum estimator in the regime [A3] records; neither a finite-lattice error nor any probability measure follows. [F1, F2, A2, A3, step 3.1, step 4.1, step 5.1] ∎

## Remarks

The period-frame supplier is an explicit conditional data interface. The current N=2 special-Kähler, O3/O7, Type IIB flux-convention, GVW, flux-quantization and sourced-tadpole suppliers were inspected at their actual statements; some are escalated or lack current readiness records. Accordingly this proof derives the continuum formula only under their stated interfaces and does not mark them as proved or independently accepted.


The signed-index convention here is specifically Denef–Douglas's conjugate-ordered Hessian convention. With ordinary real $(\Re z,\Im z)$ and $(\Re y,\Im y)$ orientations, its unitary determinant differs from the signed real F-term Jacobian by $(-1)^m$; swapping the two complex output blocks has sign $(-1)^{m^2}=(-1)^m$. Absolute determinants are unchanged. For $n=0$, the local F-term derivative is antiholomorphic, so its real determinant is $-|x|^2$ while the source Hessian determinant is $|x|^2$. Thus the ensemble's signed-real-Jacobian convention must include this fixed orientation factor when compared with the source index; neither signed quantity is the positive total density or a probability measure.
