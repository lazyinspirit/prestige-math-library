---
id: def-cft-type-ii-superstring-amplitude-data
kind: definition
title: Conditional closed type-II supermoduli amplitude data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-complex-supermanifold
  - def-cft-super-riemann-surface
justified_by: []
domain: physics
library: physics
dependency_roles:
  def-cft-complex-supermanifold: mathematical-premise
  def-cft-super-riemann-surface: mathematical-premise
physical_scope: "Conditional perturbative closed type-II worldsheet data at fixed genus, puncture and spin labels. The explicit Wang–Yin PCO zero-mode criterion is stated for NSNS external states; Ramond PCO data require their picture-dependent zero-mode conditions as supplied inputs. This is a supplied correlator/form package, not a construction of a universal functional measure or a claim about open, heterotic, or unoriented strings."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles Wang and Xi Yin, On the Equivalence between SRS and PCO Formulations of Superstring Perturbation Theory, arXiv:2205.01106v2"
      url: https://arxiv.org/pdf/2205.01106v2
      locator: "§2.3, PDF p. 6, limits the explicit amplitude exposition to (NS,NS) external states; §§3.1–3.2 give the NS PCO zero-mode singularity and contour; §4.4 gives the product chiral/antichiral contour."
    - title: "David Tong, String Theory, Cambridge Part III lecture notes"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§§5.1.1–5.3.1, printed pp. 113–120: bc ghosts, their OPE/weights and the formal status of the Faddeev–Popov path-integral argument."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A conditional closed type-II supermoduli amplitude package at fixed genus and fixed NS/R puncture and spin labels consists of the following supplied data. Let $d_e,d_o\in\mathbb Z_{\ge0}$ be the supplied even and odd dimensions for these fixed labels. First, supply holomorphic and antiholomorphic complex supermanifolds $\mathcal M_L,\mathcal M_R$ of complex dimensions $d_e|d_o$, used as parameter spaces for the corresponding worldsheet families. On every parameter patch used below, supply holomorphic maps $\pi_\ell:\mathcal S_\ell\to\mathcal M_\ell$ ($\ell=L,R$) that in supercoordinates are projections $(z,\theta,m)\mapsto m$, with one even coordinate $z$ and one odd coordinate $\theta$ along each fiber. Thus each fiber has relative complex dimension $1|1$. Require the reduced fibers to be compact connected Riemann surfaces. Give each family a holomorphic rank-$0|1$ distribution in the fiber tangent directions, restricting on every fiber to the SRS distribution of [[def-cft-super-riemann-surface]], and holomorphic puncture sections with pairwise disjoint images and the local NS/R coordinates required there. These worldsheet structures belong to the fibers $\mathcal S_\ell$, not to the parameter supermanifolds $\mathcal M_\ell$. This is local family data and asserts no global universal family. Let $M$ be an oriented smooth real manifold of dimension $2d_e$ with specified smooth embeddings $j_L:M\to(\mathcal M_L)_{\rm red}$ and $j_R:M\to(\mathcal M_R)_{\rm red}$. These define the diagonal identification
$$\iota:M\longrightarrow(\mathcal M_L)_{\rm red}\times(\mathcal M_R)_{\rm red},\qquad x\longmapsto(j_L(x),j_R(x)).$$
The finite cell decomposition is a supplied decomposition of $M$. A supplied real superchain of dimension $2d_e|2d_o$ over this diagonal is a locally finite formal integer sum of parameterized pieces
$$S=\sum_k n_k(I_k)_*[C_k\times\Pi\mathbb C_L^{d_o}\times\Pi\mathbb C_R^{d_o}],\qquad n_k\in\mathbb Z,$$
where $\Pi\mathbb C_\ell^{d_o}$ has one-point body and structure algebra $\Lambda_\mathbb C(\nu_\ell^1,\ldots,\nu_\ell^{d_o})$, and the left and right exterior algebras are independent tensor factors. Each $C_k$ is a compact oriented real $2d_e$-manifold with corners and each $I_k$ is a smooth parity-preserving map into $\mathcal M_L\times\mathcal M_R$, meaning its local coordinates are finite odd-coordinate polynomials with smooth coefficients on $C_k$. Each piece includes a smooth base map $\rho_k:C_k\to M$ and is marked horizontal or interpolating; require the reduction of $I_k$ to equal $\iota\circ\rho_k$. A horizontal piece has $C_k=D_\alpha$ and $\rho_k$ the inclusion of its cell. An interpolation piece over an ordered common face of $p+1$ cells has $C_k=\Delta^p\times D_I$ and $\rho_k(s,x)=x$; finite subdivisions are allowed with their compatible face maps. The horizontal pieces project to the specified oriented base chain, and interpolation boundaries match the lower-face contributions. Thus all reduced images lie on the diagonal, while the higher pieces are parameterized chain fillers and are not identified with an additional copy of the ordinary fundamental chain. On a compact regulated domain the sum is finite. Any prescribed physical or relative boundary is retained. This definition does not assert that such a contour exists. The type-II label means both sectors and both spin labels are supplied; it imposes no relation between the two spin labels or between the left and right odd generators. Second, a matter-plus-ghost $N=1$ SCFT correlation functional, meaning a multilinear functional on the specified local field insertions and moduli, with holomorphic stress tensor $T$, supercurrent $G$ satisfying the local OPE $G(z)G(w)\sim2T(w)/(z-w)$, and an antiholomorphic counterpart. The total central charge is assumed to vanish as part of the model data; this definition does not derive a critical central charge.

The reparametrization ghosts $b,c$ are Grassmann-odd local fields of weights $2,-1$ with OPE $b(z)c(w)\sim1/(z-w)$. The superconformal ghosts $\beta,\gamma$ are Grassmann-even local fields of weights $3/2,-1/2$ with OPE $\beta(z)\gamma(w)\sim1/(z-w)$. A BRST complex is a graded state space with a supplied odd operator $Q_B$ satisfying $Q_B^2=0$ and acting as a graded derivation on the supplied fields. An external insertion $V_i$ is called on shell here when $Q_BV_i=0$ and it obeys the Siegel constraints $b_0V_i=\bar b_0V_i=0$, where $b_0=\oint_{C_i}\frac{dz}{2\pi i}z b(z)$ and $\bar b_0$ is its antiholomorphic counterpart in the specified puncture coordinates. These are assumptions of the package, not conclusions of this item.

The package includes a scalar-valued superintegral form $\Omega$ on a neighborhood of the chosen contour in $\mathcal M_L\times\mathcal M_R$. In local real even coordinates $x^1,\ldots,x^{2d_e}$ on its diagonal base and independent left and right odd generators $\nu_L^1,\ldots,\nu_L^{d_o}$ and $\nu_R^1,\ldots,\nu_R^{d_o}$, its integral is defined by the oriented real integral of the coefficient of $\nu_L^1\cdots\nu_L^{d_o}\nu_R^1\cdots\nu_R^{d_o}$, with the fixed left Berezin order and normalization $\int d\nu_\ell^{d_o}\cdots d\nu_\ell^1\,\nu_\ell^1\cdots\nu_\ell^{d_o}=1$ in each sector $\ell=L,R$; coordinate changes act by their Berezinian. Barred notation in source formulas labels the right-moving sector and does not make its odd generators complex conjugates of the left-moving generators. The correlation functional specifies $\Omega$; no infinite-dimensional measure is assumed. The required on-shell premise for the contour argument is the explicit closedness condition $d\Omega=0$ on the region being integrated, and the supplied integration functional is assumed to satisfy super-Stokes for compact chains.

The source form is specified by the following general transition-map rule, not by its one-disc restrictions alone. In overlapping worldsheet coordinates $(z_i,\theta_i)$, with the other coordinates held fixed, set $v_A^{ij}=\partial_A z_i-(\partial_A\theta_i)\theta_i$. Write $\mathcal T_i=\tfrac12G(z_i)+\theta_iT(z_i)$ and $\mathcal B_i=\beta(z_i)+\theta_i b(z_i)$. On an oriented contour partition with $\sum_j C_{ij}=\partial D_i$, the variation of the SCFT correlator is the insertion $-\sum_{ij}\int_{C_{ij}}[dz_i|d\theta_i]\,\mathcal T_i v_A^{ij}\,dm^A/(2\pi i)$, and its ghost couplings are
$$B_A=\sum_{ij}\int_{C_{ij}}\frac{[dz_i|d\theta_i]}{2\pi i}\,\mathcal B_i\,v_A^{ij}.$$
The finite odd-coordinate deformation is the finite ordered Grassmann expansion of this variation. With real even moduli $t^k$ and all left/right odd parameters collectively $\nu^a$, the supplied form is
$$\Omega=\left\langle \exp\!\left(\sum_k B_{t^k}dt^k\right)\prod_a\bigl[\delta(d\nu^a)\delta(B_{\nu^a})\bigr]\prod_i V_i\right\rangle,$$
with the fixed Berezin order, and with the SCFT evaluated on the specified SRS family. This is Wang–Yin Eqs.(2.3),(2.8)–(2.10), with the delta factors written outside the even-modulus exponential as in its explicit one-disc formula(5.2). It makes additivity over disjoint discs and covariance under odd frame changes actual model data. It does not derive this worldsheet model from a functional measure. The one-disc and one-face formulas below are its stated specializations.

For the PCO description in the Wang–Yin source scope, take all external states to be of $(NS,NS)$ type, as specified in that paper's §2.3. Let $Y\to M$ have fiber the ordered $d_o$ holomorphic and $d_o$ antiholomorphic PCO locations on the corresponding reduced surface, away from punctures and coincident locations. For a chiral sector with spin line $S$ satisfying $S^{\otimes2}\cong K_C$, the source's spurious-singularity criterion is the existence of a nonzero weight-$-1/2$ meromorphic section of $S^{-1}$ with a simple pole at each PCO location and a simple zero at each NS vertex location carrying the source's $\delta(\gamma)$ condition. Define the NS spurious locus to be the set of PCO configurations for which such a section exists, with the antiholomorphic criterion imposed independently. Only PCO chains avoiding this locus are admitted in this NSNS source case.

If any external state is Ramond, its picture and the resulting pole/zero conditions on the $\gamma$ zero modes are additional supplied data; the corresponding spurious locus is the set where the specified $\gamma$ zero-mode condition has a nonzero solution. Wang–Yin §2.3 explicitly restricts its amplitude exposition to NSNS external states, so this item does not assert that the NS criterion above extends unchanged to Ramond insertions or that a Ramond PCO chain has been constructed. The PCO field is the supplied local operator $X(z)=\{Q_B,\xi(z)\}$ in the bosonized $\beta\gamma$ system, with its source convention

$$X(z)=\frac12\oint_{C_z}\frac{dw}{2\pi i}\,\frac{G(w)}{w-z}\,\delta(\beta(z))-\frac14\partial b(z)\,\delta'(\beta(z)),$$

and the antiholomorphic operator is defined analogously. Here $C_z$ is a positively oriented small contour around $z$, and $\delta(\beta),\delta'(\beta)$ are formal operator-valued distributions of the supplied ghost SCFT, not ordinary functions or a functional measure. The PCO form $\widetilde\Omega$ is the specified correlation form with insertions $X(z_a)+d_Y\xi(z_a)$ and their antiholomorphic counterparts, where $d_Y$ is the exterior differential in moduli and PCO-location variables. In the NSNS case only chains avoiding the explicitly defined NS spurious locus are admitted; any Ramond version requires the separately supplied picture-dependent zero-mode conditions above.

Use the formal bosonized-ghost convention $\xi(z)=-\Theta(\beta(z))$, where the supplied operator-valued distribution satisfies $\partial_\beta\Theta(\beta)=\delta(\beta)$ and $\Theta(c\beta)=\Theta(\beta)$ for every nonzero complex scalar $c$. These identities concern the formal ghost operators and do not interpret $\Theta$ or $\delta$ as ordinary functions on numerical field values.

For the local NS superdisc deformation $w=z-\theta\nu/(z-z_0(t))$, $\eta=\theta-\nu/(z-z_0(t))$, the supermoduli coupling is fixed by the source convention $B_{z_0}=-2\nu\partial\beta(z_0)\,dz_0$ and $B_\nu=2\beta(z_0)-\nu\partial b(z_0)$, while the odd deformation of the SCFT correlator is the factor $1+\nu G_{z_0}$ with $G_{z_0}=\oint_{C_{z_0}}\frac{dw}{2\pi i}\frac{G(w)}{w-z_0}$. Thus its local integral-form factor is $(1+\nu G_{z_0})\exp(B_{z_0})\,\delta(d\nu)\,\delta(B_\nu)$. Odd integration uses $\int d\nu\,\nu=1$ and expands formal distributions by $\delta(a\beta+\nu c)=a^{-1}\delta(\beta)+a^{-2}\nu c\,\delta'(\beta)$ for invertible even $a$ and odd $\nu$.

For a codimension-one face with endpoint PCO locations $z_\alpha,z_\beta$, the source's interpolation data also include smooth nowhere-zero complex functions $R,\widetilde R:[0,1]\to\mathbb C^\times$, $u(s)=(1-s)R(s)$, and $v(s)=s\widetilde R(s)$. For an odd coordinate $\nu_a$, define
$$B_s=-2\nu_a\bigl(\beta(z_\alpha)u'(s)+\beta(z_\beta)v'(s)\bigr)\,ds,\qquad B_{\nu_a}=2\bigl(u(s)\beta(z_\alpha)+v(s)\beta(z_\beta)\bigr)-\nu_a\bigl(u(s)^2\partial b(z_\alpha)+v(s)^2\partial b(z_\beta)\bigr).$$
The interpolation patch contributes the factor $B_s\,\delta(d\nu_a)\,\delta(B_{\nu_a})$ to the supplied integral form. Its endpoints use the source's horizontal lifts, its odd Jacobian block is required to be invertible so that the integral-form pullback is defined; its even Schur numerator may vanish or be nilpotent, and its PCO configurations avoid the spurious-singularity locus. The antiholomorphic interpolation uses the analogous data. These are supplied contour data; existence of compatible data over every face is not asserted by this definition.

## Definition references

[[def-cft-complex-supermanifold]]

[[def-cft-super-riemann-surface]]

[Wang–Yin, *On the Equivalence between SRS and PCO Formulations*, §§2.2–3.2](https://arxiv.org/pdf/2205.01106v2)

[Tong, *String Theory*, §§5.1.1–5.3.1](https://www.damtp.cam.ac.uk/user/tong/string/string.pdf)

## Remarks

This item treats $\Omega$, $\widetilde\Omega$, $Q_B$, and the correlators as supplied model data. It does not prove BRST nilpotence from mode algebras, matter/ghost central-charge cancellation, convergence of the moduli integral, or the existence of a universal path-integral measure. Wang–Yin's amplitude derivation in §2.3 explicitly specializes to external $(NS,NS)$ states for exposition and §3.2 footnote 2 ignores the degeneration boundary of moduli; those limits are carried into the consuming theorem rather than silently removed.
