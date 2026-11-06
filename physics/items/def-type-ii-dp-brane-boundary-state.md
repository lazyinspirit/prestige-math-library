---
id: def-type-ii-dp-brane-boundary-state
kind: definition
title: Type Ii Dp Brane Boundary State
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-dp-brane-open-string-boundary-condition
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Formal closed-channel matter and ghost gluing data for a flat static Type II Dp-brane in the free worldsheet model; does not assert a normalized BRST-closed state, modular open/closed equivalence, charge, or nonperturbative duality."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, PDF p. 17, equation (2.31), boundary state as the closed-string state created by a boundary loop; Lecture III §§3.1–3.2, PDF pp. 22–25, NS/R sectors and Type IIA/IIB GSO chirality choices."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 2–4, equations (4)–(7), mixed open boundary conditions, the Ramond zero-mode gluing conditions, and the Type IIA/IIB parity restriction."
    - title: "Miao Li, Boundary States of D-Branes and Dy-Strings, arXiv:hep-th/9510161v1"
      url: "https://arxiv.org/pdf/hep-th/9510161v1"
      locator: "§2, PDF pp. 3–7, equations (2.1)–(2.17): GSO-inserted cylinder, D-instanton oscillator and ghost boundary conditions, and the massless NS–NS/R–R boundary-state components for a Dp-brane."
    - title: "Ben Craps, D-branes and Boundary States in Closed String Theories, PhD thesis, Katholieke Universiteit Leuven (2000), arXiv:hep-th/0004198v1"
      url: "https://arxiv.org/pdf/hep-th/0004198"
      locator: "§3.3.4, printed pp. 71–74, ghost and superghost fields, conformal weights, mode algebra, and bosonization; §3.3.6, printed p. 78, equation (3.3.53), charge-conjugation conventions; §4.1.2–4.1.3, printed pp. 100–105, equations (4.1.1)–(4.1.28), flat Dp boundary-state gluing, oscillator factors, ghost zero modes, Ramond bispinor, and GSO sums."
    - title: "P. Di Vecchia and A. Liccardo, D Branes in String Theory, I, arXiv:hep-th/9912161v1"
      url: "https://arxiv.org/pdf/hep-th/9912161v1"
      locator: "§7, printed pp. 41–46, equations (7.229)–(7.265), especially (7.251)–(7.265): fixed-picture superghost vacua, full matter-plus-superghost GSO operators, vacuum phases, and their spin-structure sums."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix $\hbar=c=1$, $\alpha'>0$ with dimension length squared, and $T=(2\pi\alpha')^{-1}$. Let $W=\mathbb R^{1,p}\times\{X^a=y_0^a\}$ be the static timelike plane from the preceding Dp boundary-data definition; target coordinates $x^\mu,y_0^a$ have length dimension and target momenta $p^\mu$ have inverse-length dimension. Write $x_\perp=(x^{p+1},\ldots,x^9)$ and $p_\parallel=(p^0,\ldots,p^p)$ for the normal position and tangent momentum coordinates.

In the free closed-string mode convention, a flat Dp boundary state is a distributional functional $|B;y_0\rangle$ on the algebraic finite-excitation closed-string state domain whose matter-coordinate component obeys
$$
(\alpha_n^\mu+S^\mu{}_\nu\widetilde\alpha_{-n}^\nu)|B_X;y_0\rangle=0,\qquad n\in\mathbb Z\setminus\{0\},
$$
where $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, the dimensionless modes satisfy $[\alpha_m^\mu,\alpha_n^\nu]=m\eta^{\mu\nu}\delta_{m+n,0}$, the left and right families commute and have the same algebra, and $S^\mu{}_\nu=+1$ in directions tangent to $W$ and $-1$ in directions normal to $W$. The zero-mode distribution is annihilated by every tangent momentum operator $p^\alpha$ and every normal position operator $X^a-y_0^a$. Equivalently, its target-position factor is proportional to $1_{x_\parallel}\otimes\delta^{(9-p)}(x_\perp-y_0)$, where $1_{x_\parallel}$ is the constant distribution along $W$. Thus it is translation invariant along $W$ with an undifferentiated delta factor normal to $W$; support on $W$ alone would not impose these zero-mode conditions. The matter factor may be represented formally by
$$
|B_X;y_0\rangle=\mathcal N_p\,\delta^{(9-p)}(x_\perp-y_0)\,\delta^{(p+1)}(p_\parallel)\exp\!\left(-\sum_{n=1}^{\infty}\frac1n\alpha_{-n}\cdot S\widetilde\alpha_{-n}\right)|0\rangle,
$$
where $\mathcal N_p\ne0$ is a fixed overall normalization datum, not evaluated here.

For the Ramond–Neveu–Schwarz (RNS) worldsheet fermions, the Neveu–Schwarz (NS) sector has antiperiodic fermions and modes $r\in\mathbb Z+\tfrac12$, while the Ramond (R) sector has periodic fermions and modes $r\in\mathbb Z$, including Clifford zero modes. With $\eta_s\in\{-1,+1\}$ labeling the boundary spin structure, use the fermion gluing convention
$$
(\psi_r^\mu-i\eta_s S^\mu{}_\nu\widetilde\psi_{-r}^\nu)|B_{\psi},\eta_s\rangle=0.
$$
The fermion modes satisfy $\{\psi_r^\mu,\psi_s^\nu\}=\eta^{\mu\nu}\delta_{r+s,0}$, with an independent right-moving copy. The formal fermion oscillator factors are
$$
|B_{\psi},\eta_s\rangle_{\mathrm{NS}}=\exp\!\left(i\eta_s\sum_{r\in\mathbb Z+1/2,\,r>0}\psi_{-r}\cdot S\widetilde\psi_{-r}\right)|0\rangle_{\psi,\mathrm{NS}}.
$$

$$
|B_{\psi},\eta_s\rangle_{\mathrm R}=\exp\!\left(i\eta_s\sum_{n=1}^{\infty}\psi_{-n}\cdot S\widetilde\psi_{-n}\right)|B_{\psi},\eta_s\rangle_{\mathrm R}^{(0)}.
$$
Here $|0\rangle_{\psi,\mathrm{NS}}$ is the NS matter-fermion ground state. On Ramond zero modes, write $|A\rangle\otimes|\widetilde B\rangle$ for the left/right spinor ground-state basis and use the gluing bispinor
$$
M(\eta_s)=C\Gamma^0\Gamma^1\cdots\Gamma^p\,\frac{1+i\eta_s\Gamma_{11}}{1+i\eta_s},\qquad \Gamma_{11}:=\Gamma^0\Gamma^1\cdots\Gamma^9,
$$
where $C$ is the charge-conjugation matrix in the convention $C^T=-C$ and $(\Gamma^\mu)^T=-C\Gamma^\mu C^{-1}$, and $\{\Gamma^\mu,\Gamma^\nu\}=2\eta^{\mu\nu}$ defines the ten-dimensional Clifford generators; these conventions give $\Gamma_{11}^2=1$, so $\Gamma_{11}$ is the ten-dimensional chirality operator. The zero-mode state is $|B_{\psi},\eta_s\rangle_{\mathrm R}^{(0)}=M_{AB}(\eta_s)|A\rangle|\widetilde B\rangle$. The displayed factor fixes the chiral zero-mode solution in this convention; reversing the orientation of $W$ gives the antibrane and reverses the R–R component.

The reparametrization ghosts $b_n,c_n$ are Grassmann-odd integer modes with $\{b_m,c_n\}=\delta_{m+n,0}$ and ghost numbers $-1,+1$, respectively; their formal boundary factor is
$$
|B_{bc}\rangle=\exp\!\left[\sum_{n=1}^{\infty}(c_{-n}\widetilde b_{-n}-b_{-n}\widetilde c_{-n})\right]\frac{c_0+\widetilde c_0}{2}\,c_1\widetilde c_1|1\rangle_{bc},
$$
where $|1\rangle_{bc}$ is the left/right global-conformal-invariant ghost vacuum, annihilated on each side by $b_n$ for $n\ge-1$ and $c_n$ for $n\ge2$; the boundary factor obeys $(b_n-\widetilde b_{-n})|B_{bc}\rangle=0$ and $(c_n+\widetilde c_{-n})|B_{bc}\rangle=0$. The commuting superconformal ghosts $\beta_r,\gamma_r$ have conformal weights $3/2,-1/2$, respectively, and satisfy $[\gamma_r,\beta_s]=\delta_{r+s,0}$ with the same NS/R moding as $\psi_r$. In the bosonization $\beta=e^{-\varphi}\partial\xi$, $\gamma=\eta_{\mathrm{gh}}e^{\varphi}$, where $\eta_{\mathrm{gh}}$ and $\xi$ are anticommuting auxiliary fields, a picture label is the $\varphi$-charge of the corresponding ghost vacuum. Use fixed total picture $-2$ and the representatives $(-1,-1)$ in NS–NS and $(-\tfrac12,-\tfrac32)$ in R–R. The formal superghost factors are
$$
|B_{\beta\gamma},\eta_s\rangle_{\mathrm{NS}}=\exp\!\left[i\eta_s\sum_{r\in\mathbb Z+1/2,\,r>0}(\gamma_{-r}\widetilde\beta_{-r}-\beta_{-r}\widetilde\gamma_{-r})\right]|P=-1\rangle|\widetilde P=-1\rangle,
$$
$$
|B_{\beta\gamma},\eta_s\rangle_{\mathrm R}=\exp\!\left[i\eta_s\sum_{n=1}^{\infty}(\gamma_{-n}\widetilde\beta_{-n}-\beta_{-n}\widetilde\gamma_{-n})\right]\exp(i\eta_s\gamma_0\widetilde\beta_0)|P=-\tfrac12\rangle|\widetilde P=-\tfrac32\rangle.
$$
Use the reduced superghost algebra with the auxiliary $\xi_0$ omitted. On a chiral picture vacuum $|P\rangle$, impose $\beta_r|P\rangle=0$ for $r\ge-P-\tfrac12$ and $\gamma_r|P\rangle=0$ for $r\ge P+\tfrac32$, with the appropriate integer or half-integer moding. Thus $\beta_0|-\tfrac12\rangle=0$ and $\widetilde\gamma_0|\widetilde P=-\tfrac32\rangle=0$ in the displayed R pictures; $\gamma_0$ and $\widetilde\beta_0$ are their respective polynomial creators. Picture is fixed on each such module: $\beta$ and $\gamma$ preserve it. In bosonized terms the picture operator is the sum of superghost charge and auxiliary $\eta_{\mathrm{gh}},\xi$ charge, so the $\varphi$-charge description of a vacuum is not a parity rule for its excited states.

Their oscillator boundary conditions are $(\beta_r+i\eta_s\widetilde\beta_{-r})|B_{\beta\gamma},\eta_s\rangle=0$ and $(\gamma_r+i\eta_s\widetilde\gamma_{-r})|B_{\beta\gamma},\eta_s\rangle=0$.

The Gliozzi–Scherk–Olive (GSO) projection acts on the full matter-plus-superghost module. Let $N_{\psi,j}$ count nonzero matter-fermion creators modulo two, and $N_{\mathrm{sgh},j}$ count all superghost creators modulo two, for $j=L,R$; the latter includes powers of $\gamma_0$ on the left and $\widetilde\beta_0$ on the right in R. Counts are taken on finite ordered Fock monomials. Left and right odd modes use the graded tensor product. Define commuting involutions $\mathsf q_j$ by
$$
\begin{array}{c|cc}  &\mathsf q_L&\mathsf q_R\\ \mathrm{NS}\;(-1,-1)&(-1)^{N_{\mathrm{sgh},L}}&(-1)^{N_{\mathrm{sgh},R}}\\ \mathrm R\;(-\tfrac12,-\tfrac32)&(-1)^{N_{\mathrm{sgh},L}}&-(-1)^{N_{\mathrm{sgh},R}}. \end{array}
$$
The R vacuum sign on the right is essential: the zero-mode superghost-number operator $-\gamma_0\beta_0$ has eigenvalue zero on a vacuum annihilated by $\beta_0$, and eigenvalue $-1$ on one annihilated by $\gamma_0$, since $[\gamma_0,\beta_0]=1$. Each creator changes its parity. These $\mathsf q_j$ are superghost-number parities, not picture parities.

Put $\mathsf f_j=(-1)^{N_{\psi,j}+1}$ in NS. In R put $\mathsf f_j=\mathsf J_j(-1)^{N_{\psi,j}}$, where the two commuting Clifford gradings on a zero-mode coefficient matrix $X$ are
$$
\mathsf J_LX=\Gamma_{11}^{T}X,\qquad \mathsf J_RX=X\Gamma_{11}.
$$
All these operators act trivially on the target-coordinate and $bc$ factors. With $\epsilon_{\mathrm{II}}=+1$ in Type IIA and $-1$ in Type IIB, the full fixed-picture projectors are
$$
\Pi_{\mathrm{NSNS}}= \frac{1+\mathsf f_L\mathsf q_L}{2}\, \frac{1+\mathsf f_R\mathsf q_R}{2},\qquad \Pi_{\mathrm{RR}}= \frac{1+\epsilon_{\mathrm{II}}\mathsf f_L\mathsf q_L}{2}\, \frac{1-\mathsf f_R\mathsf q_R}{2}.
$$
Their factors are commuting idempotents on the finite-excitation module. Equivalently the sector operators retained with eigenvalue $+1$ are $G_{\mathrm{NS}}^{(j)}=\mathsf f_j\mathsf q_j$, $G_{\mathrm R}^{(L)}=\epsilon_{\mathrm{II}}\mathsf f_L\mathsf q_L$ and $G_{\mathrm R}^{(R)}=-\mathsf f_R\mathsf q_R$. These are full operators on the stated picture modules; no additional matter-only projector is imposed.

The target-space chirality labels may conventionally be written $\chi_L=+1$, with $\chi_R=-1$ for Type IIA and $\chi_R=+1$ for Type IIB. They label the spacetime supersymmetry spaces; they do not identify every coefficient of an asymmetric-picture boundary functional with a fixed matter-chirality eigenspace. No map from that coefficient module to target supersymmetry parameters, or between picture representatives in BRST cohomology, is asserted here. Type IIA has opposite target chiralities and even $p$; Type IIB has equal target chiralities and odd $p$.

Write $|B,\eta_s\rangle$ for the tensor product of the four displayed factors before projection. In the NS–NS sector both chiral modes are NS; in R–R both are R. Applying the corresponding full projector to $|B,+\rangle$ gives
$$
|B\rangle_{\mathrm{NSNS}}=\tfrac12\bigl(|B,+\rangle_{\mathrm{NSNS}}-|B,-\rangle_{\mathrm{NSNS}}\bigr),\qquad |B\rangle_{\mathrm{RR}}=\tfrac12\bigl(|B,+\rangle_{\mathrm{RR}}+|B,-\rangle_{\mathrm{RR}}\bigr).
$$
Reversing the brane orientation reverses the relative R–R sign.

The full formal state is the projected spin-structure sum of the displayed matter, fermion, $bc$-ghost, and $\beta\gamma$-ghost tensor products. With $L_0,\widetilde L_0$ the dimensionless zero modes of the left and right stress tensors, its cylinder overlap uses the fixed propagator convention $\exp[-\pi(L_0+\widetilde L_0)/t]$ for modulus $t>0$. Because the zero modes are delta-supported and the oscillator product is formal, $|B;y_0\rangle$ is a distributional source for closed-string boundary data, not a normalizable particle state. This definition does not establish Becchi–Rouet–Stora–Tyutin (BRST) closure, the absolute value or physical normalization of $\mathcal N_p$, or equality of the full open- and closed-channel amplitudes.

## Definition references

[[def-dp-brane-open-string-boundary-condition]]

[[def-st-string-tension-alpha-prime]]

## Remarks

Miao Li's 1995 paper constructs the massless boundary-state sector and says that constructing an exact state including all oscillators is formidable. The cited later construction supplies formal oscillator and ghost factors; this item does not claim a local BRST calculation, a cylinder modular transform, or an absolute physical normalization.

For a precise meaning of the preceding distributional functional, use the mixed zero-mode representation obtained by Fourier-transforming the tangent target coordinates and retaining normal positions. Its coordinates $p_\parallel\in\mathbb R^{p+1}$ and $x_\perp\in\mathbb R^{9-p}$ commute. Set $\mathcal S_0=\mathcal S(\mathbb R^{p+1}_{p_\parallel}\times\mathbb R^{9-p}_{x_\perp})$. Sectorwise, let $\mathcal F_{\mathrm{alg}}$ be the algebraic span of finite ordered Fock monomials in the displayed matter, fermion, $bc$ and $\beta\gamma$ modules, including the algebraic $bc$ zero-mode module, the finite-dimensional R Clifford module and the specified polynomial R superghost zero-mode module. Fix its monomial basis $\{e_b\}$ and its finite-support coefficient-dual space $\mathcal F_{\mathrm{fin}}^\circ=\bigoplus_b\mathbb C e_b^\circ$, where $e_b^\circ(e_{b'})=\delta_{bb'}$. This identifies finite-excitation test labels with coefficient-extraction functionals. Each displayed GSO involution preserves finite support; let $\Pi^\circ\ell=\ell\circ\Pi$ be the transpose projector. The projected test space is
$$
\mathcal T_{\Pi}=\mathcal S_0\otimes_{\mathrm{alg}}\Pi^\circ\mathcal F_{\mathrm{fin}}^\circ,
$$
with the NS–NS and R–R spaces taken in direct sum. Thus the projection acts on the complete correlated matter-superghost test module. One may equivalently evaluate the unprojected boundary series on $\Pi^\circ\ell$; this is coefficientwise the projected boundary series evaluated on $\ell$.

With Lebesgue measure in this mixed representation, the delta part of the matter zero-mode factor acts on $f\in\mathcal S_0$ by $\langle\delta^{(9-p)}(x_\perp-y_0)\delta^{(p+1)}(p_\parallel),f\rangle=f(0,y_0)$, so including the displayed overall factor gives $\mathcal N_p f(0,y_0)$. Fourier-normalization constants are included in the fixed factor $\mathcal N_p$. In the full position representation the same zero-mode distribution acts, up to that Fourier normalization, by $g\mapsto\mathcal N_p\int_{\mathbb R^{p+1}}g(x_\parallel,y_0)\,d^{p+1}x_\parallel$. The annihilation conditions exclude both tangent dependence and normal delta derivatives: in mixed coordinates $z=(p_\parallel,x_\perp-y_0)$ they read $z_jU=0$ for every component. A test function can be written as $f(0)\rho+\sum_j z_j f_j$, with $\rho(0)=1$ and Schwartz $\rho,f_j$, by a local Taylor expansion and division away from the origin; hence $U(f)=U(\rho)f(0)$. Thus $U$ is a multiple of the displayed point delta in mixed coordinates, whose inverse tangent Fourier transform is the stated uniform distribution on $W$. Interpret each displayed oscillator exponential, including the Ramond $\beta\gamma$ zero-mode exponential, by its formal power series and pair coefficientwise with the algebraic Fock-basis monomials fixed by the displayed mode algebras and vacua. A fixed finite-excitation monomial receives contributions from only finitely many mode indices and powers, so this defines a linear functional on the unprojected coefficient test space and, after the displayed transpose projection, on $\mathcal T_{\Pi}$. It asserts no convergence in a completed oscillator Hilbert space or continuity in an oscillator topology; the zero-mode part is a tempered distribution, and the full boundary state remains a formal, non-normalizable functional.

The projection identities can be checked within these algebraic modules. Put $G=\Gamma_{11}$ and $A=C\Gamma^0\cdots\Gamma^p$. The fixed charge-conjugation convention gives $G^T=-CGC^{-1}$ and hence $G^TM(\eta_s)=(-1)^pM(-\eta_s)$, while $M(\eta_s)G=M(-\eta_s)$. Nonzero fermion and superghost parities reverse the sign of their respective $\eta_s$-dependent exponentials. Consequently in R,
$$
\mathsf f_L\mathsf q_L|B,\eta_s\rangle=(-1)^p|B,-\eta_s\rangle,\qquad \mathsf f_R\mathsf q_R|B,\eta_s\rangle=-|B,-\eta_s\rangle,
$$
so $\Pi_{\mathrm{RR}}|B,+\rangle=\tfrac14(1+\epsilon_{\mathrm{II}}(-1)^p)(|B,+\rangle+|B,-\rangle)$, which is the stated half-sum for the allowed parity of $p$. In NS each full chiral parity sends $|B,\eta_s\rangle$ to $-|B,-\eta_s\rangle$, giving the half-difference.

In particular, with $z=\gamma_0\widetilde\beta_0$, $v=|-\tfrac12\rangle|\widetilde P=-\tfrac32\rangle$ and $P_\pm=(1\pm G)/2$, the projected R zero-mode series is $A(P_+\cos z+P_-\sin z)v$. Its constant and $z^1$ coefficients are $AP_+$ and $AP_-$. Their opposite right-matter gradings are accompanied by right superghost parities $-1$ and $+1$; both have $\mathsf f_R\mathsf q_R=-1$ and are retained. This includes the admitted Type IIB $p=1$ case without removing either coefficient. These finite-coefficient identities impose no oscillator convergence, BRST, or picture-change theorem.

