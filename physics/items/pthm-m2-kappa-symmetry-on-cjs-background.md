---
id: pthm-m2-kappa-symmetry-on-cjs-background
kind: physics-theorem
title: M2 Kappa Symmetry on a CJS Background
status: published
origin: session
domain: physics
library: physics
dependency_level: 9
deps:
- def-m2-brane-worldvolume-action
- post-eleven-dimensional-cjs-supergravity-action
- post-m2-cjs-superspace-constraints
- lem-m2-worldvolume-clifford-projector
dependency_roles:
  def-m2-brane-worldvolume-action: formulation-prerequisite
  post-eleven-dimensional-cjs-supergravity-action: physical-assumption
  post-m2-cjs-superspace-constraints: physical-assumption
  lem-m2-worldvolume-clifford-projector: mathematical-premise
physical_scope: Conditional local classical invariance of the single M2 Green–Schwarz action for the coefficientwise smooth
  complex-Grassmann-valued field model and odd local gauge parameter defined in the item, on an on-shell D=11 superspace background
  with the explicit source-mapped torsion and four-form conventions; no quantum measure or M-theory existence claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: E. Bergshoeff, E. Sezgin, and P. K. Townsend, Supermembranes and Eleven-Dimensional Supergravity, Physics Letters
      B 189 (1987), equations (3)–(20)
    url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
  - title: E. Bergshoeff, E. Sezgin, and P. K. Townsend, Properties of the Eleven-Dimensional Supermembrane Theory, Annals
      of Physics 185 (1988), §2, equations (2.2)–(2.11), (2.18)–(2.22)
    url: https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf
  - title: Paul K. Townsend, Four Lectures on M-theory, §2
    url: https://arxiv.org/pdf/hep-th/9612121v3
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\Sigma_3$ be a compact oriented smooth three-manifold without boundary, and let $Z$ be a Green–Schwarz field map as defined in def-m2-brane-worldvolume-action, over the finite complex Grassmann algebra $\mathcal A$ and complexified target sheaf specified there, with real embedded timelike body $X$ and nondegenerate Lorentzian body metric $g^{(0)}_{ij}$. Assume its image lies in a target superchart on which $C_3$ is defined. The even induced metric has $\mathcal A_{\bar0}$-valued components $g_{ij}=E_i^aE_j^b\eta_{ab}$, and $\sqrt{-\det g}$ is the positive-body square root fixed by that definition. Assume the local on-shell eleven-dimensional CJS superspace constraints
$$
T^a_{\alpha\beta}=-2i(C\Gamma^a)_{\alpha\beta},\quad G_{\alpha\beta\gamma\delta}=G_{\alpha\beta\gamma a}=0,\quad G_{\alpha\beta ab}=+2i(C\Gamma_{ab})_{\alpha\beta},\quad T^a_{b\alpha}=T^\alpha_{\beta\gamma}=T^a_{bc}=G_{\alpha abc}=0,
$$
with $G_4=dC_3$, $dG_4=0$, vector indices $a=0,\ldots,10$, real spinor indices $\alpha=1,\ldots,32$, $\{\Gamma_a,\Gamma_b\}=2\eta_{ab}$ for mostly-plus $\eta$, and an invertible real Majorana pairing $C^{\mathsf T}=-C$, $\Gamma_a^{\mathsf T}=-C\Gamma_aC^{-1}$. Take $\hbar=c=1$, $T_{\mathrm{M2}}>0$ with units of length$^{-3}$, and dimensionless worldvolume chart coordinates. The classical Green–Schwarz action is $S=-T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}Z^*C_3$, with $C_3=-6B_3$ relative to $B_3=\frac16E^A\wedge E^B\wedge E^C B_{CBA}$. For an open set $U\subseteq\Sigma_3$, let $\kappa\in C_c^\infty(U,X^*S)\otimes_\mathbb R\mathcal A_{\bar1}$ be a coefficientwise smooth odd section of the pulled-back real Majorana bundle, of dimension length$^{1/2}$, and extend it by zero outside $U$. Define the even infinitesimal variation $\delta_\kappa Z$ by
$$
\delta_\kappa Z^M E_M{}^a=0,\quad \delta_\kappa Z^M E_M{}^\alpha=\Delta^\alpha,\quad \Delta=(I+\Gamma_\kappa)\kappa,\quad \Gamma_\kappa=\frac{\varepsilon^{ijk}\gamma_{ijk}}{3!\sqrt{-\det g}},
$$
where $I$ is the identity on $X^*S\otimes\mathcal A$, $\gamma_i=E_i^a\Gamma_a$, $\gamma_{ijk}=\gamma_{[i}\gamma_j\gamma_{k]}$, and $\varepsilon^{012}=+1$. Fix a spin frame in the selected target superchart and use its induced local trivialization for these components. The Majorana pairing is extended complex-bilinearly, so $\bar\psi=\psi^{\mathsf T}C$ does not conjugate coefficients. The Clifford matrices act $\mathcal A_{\bar0}$-linearly on $X^*S\otimes\mathcal A$; the nonzero body of $-\det g$ makes the inverse and positive square root well-defined. This variation leaves the action invariant coefficientwise in $\mathcal A_{\bar0}$. The result is a conditional local classical gauge symmetry; it proves neither a quantum path-integral measure nor existence of a nonperturbative M-theory.

## Statement references

[[post-m2-cjs-superspace-constraints]]

[[def-m2-brane-worldvolume-action]]

[Bergshoeff, Sezgin, and Townsend, *Supermembranes and Eleven-Dimensional Supergravity*, eqs. (3)–(20)](https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf)

[Bergshoeff, Sezgin, and Townsend, *Properties of the Eleven-Dimensional Supermembrane Theory*, §2, eqs. (2.2)–(2.11), (2.18)–(2.22)](https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf)

[Townsend, *Four Lectures on M-theory*, §2](https://arxiv.org/pdf/hep-th/9612121v3)

## Facts & Assumptions

**Given:** The compact oriented worldvolume without boundary, coefficientwise smooth parity-preserving Green–Schwarz field map with embedded timelike body, nondegenerate body metric, local CJS superspace background, and even variation with odd parameter as displayed in the Statement.

[F1] The supersymmetric action is the Nambu–Goto term plus the $+C_3$ Wess–Zumino term, with the stated induced metric and closed-worldvolume boundary condition ([[def-m2-brane-worldvolume-action]]).

[F2] In the $+C_3$ convention the dimension-zero constraints are $T^a_{\alpha\beta}=-2i(C\Gamma^a)_{\alpha\beta}$ and $G_{\alpha\beta ab}=+2i(C\Gamma_{ab})_{\alpha\beta}$; the other components and conventional torsions used here are specified in the same supplier ([[post-m2-cjs-superspace-constraints]]).

[F3] For an oriented Lorentzian three-plane in a 32-dimensional real Clifford module, $\Gamma_\kappa^2=I$, $\Gamma_\kappa$ commutes with every tangent $\gamma_i$, $\varepsilon^{ijk}\gamma_{jk}=2\sqrt{-g}\,\gamma^i\Gamma_\kappa$, and the body of $(I\pm\Gamma_\kappa)/2$ has rank $16$ ([[lem-m2-worldvolume-clifford-projector]]). These identities hold also for the nilpotent even deformations used here: in each real frame they are real analytic identities in the entries $E_i^a$ on the open Lorentzian locus. Their finite Taylor substitutions into the complex nilpotent parts preserve products, inverses and the selected square root, so the zero identities remain zero. This justifies the scalar extension for the actual deformed three-plane, rather than only for constant real matrices. Only the body-rank assertion is used; no ordinary real rank of a Grassmann module is asserted.

[F4] The background is the adopted on-shell CJS formulation with its component action and conventions ([[post-eleven-dimensional-cjs-supergravity-action]]).

[A1] The parameter $\kappa$ is odd and $\Delta=(I+\Gamma_\kappa)\kappa$, so $\Delta$ is odd and $\delta$ is an even derivation. Contraction $i_\delta$ has form degree $-1$ and intrinsic parity zero, with $i_\delta E^a=v^a:=\delta Z^M E_M{}^a$ and $i_\delta E^\alpha=\Delta^\alpha$. It obeys the form-degree Leibniz rule, and $\delta=d i_\delta+i_\delta d$ on pulled-back forms. In the row-connection convention of [F2], put $D_i v^a=\partial_i v^a-v^b(Z^*\Omega_b{}^a)_i$. The covariant variation is $\delta_{\rm cov}E_i^a:=\delta E_i^a-E_i^b\Omega_b{}^a(\delta)$; the subtracted term is an infinitesimal Lorentz rotation and has zero contribution to $\delta g_{ij}$ since $\Omega$ preserves $\eta$. The real Majorana matrices obey the stated transpose identities and are extended complex-bilinearly. The reversed-index form components and Koszul rule are those of [F2].

## Proof

**Proof technique:** direct variation.

1.1 Applying the Cartan identity to $T^a=dE^a+E^b\wedge\Omega_b{}^a$ gives $\delta_{\rm cov}E_i^a=D_i v^a+(Z^*i_\delta T^a)_i$. Here $v^a=0$. The constraints in [F2] leave only $\frac12 E^\beta\wedge E^\alpha T_{\alpha\beta}{}^a$. Contracting gives $-E^\beta\Delta^\alpha T_{\alpha\beta}{}^a$, since $\Delta^\beta E^\alpha=-E^\alpha\Delta^\beta$ and the spinor slots are symmetric. Thus $\delta_{\rm cov}E_i^a=+2i\bar E_i\Gamma^a\Delta$. The Lorentz rotation drops out of the metric by [A1], so $\delta g_{ij}=2E_{(i|a|}\delta_{\rm cov}E_{j)}^a$ and
$$
\delta\sqrt{-g}=\tfrac12\sqrt{-g}\,g^{ij}\delta g_{ij}=+2i\sqrt{-g}\,\bar E_i\gamma^i\Delta.
$$
The determinant derivative follows by differentiating its finite polynomial and using the inverse of $g$; the positive-body square root is invertible. Consequently the Nambu–Goto variation is $-2iT_{\mathrm{M2}}\int d^3\xi\,\sqrt{-g}\,\bar E_i\gamma^i\Delta$. [given, A1, F1, F2, algebra]

1.2 Cartan's identity gives $\delta(Z^*C_3)=Z^*(i_\delta G_4)+d\,Z^*(i_\delta C_3)$. The exact term integrates to zero coefficientwise on the compact boundaryless worldvolume. In the reversed-index expansion of [F2], the two-spinor part is $\frac1{2!2!}E^b\wedge E^a\wedge E^\beta\wedge E^\alpha G_{\alpha\beta ab}$. The other components contract to zero because $v^a=0$ and the three-spinor and one-spinor components vanish. Contracting the displayed part gives $-\frac12E^b\wedge E^a\wedge E^\beta\Delta^\alpha G_{\alpha\beta ab}=\frac12E^\beta\wedge E^a\wedge E^b\Delta^\alpha G_{\alpha\beta ab}$. The constraints and the symmetric matrix $C\Gamma_{ab}$ therefore yield
$$
\delta S_{\mathrm{WZ}}=+iT_{\mathrm{M2}}\int d^3\xi\,\varepsilon^{ijk}\bar E_i\gamma_{jk}\Delta =+2iT_{\mathrm{M2}}\int d^3\xi\,\sqrt{-g}\,\bar E_i\gamma^i\Gamma_\kappa\Delta.
$$
Here $\gamma_{jk}=E_j^aE_k^b\Gamma_{ab}$, and the last equality uses [F3]. Indeed $\Gamma_{ab}^{\mathsf T}=-C\Gamma_{ab}C^{-1}$ and $C^{\mathsf T}=-C$ give $(C\Gamma_{ab})^{\mathsf T}=C\Gamma_{ab}$; no conjugation of the odd coefficients is used. The source map $C_3=-6B_3$ fixes the normalization of $G_{\alpha\beta ab}$ used in this contraction. [given, A1, F1, F2, F3, algebra]

2.1 Adding the two variations from steps 1.1 and 1.2 gives
$$
\delta_\kappa S_{\mathrm{M2}} =-2iT_{\mathrm{M2}}\int d^3\xi\,\sqrt{-g}\, \bar E_i\gamma^i(I-\Gamma_\kappa)\Delta.
$$
By the transformation in [A1], $\Delta=(I+\Gamma_\kappa)\kappa$, and [F3] gives
$(I-\Gamma_\kappa)\Delta=(I-\Gamma_\kappa)(I+\Gamma_\kappa)\kappa
=(I-\Gamma_\kappa^2)\kappa=0$. Hence $\delta_\kappa S_{\mathrm{M2}}=0$ coefficientwise in $\mathcal A_{\bar0}$ for every smooth local odd $\kappa$. This is a classical local variation and uses no quantum measure. [given, A1, F3, step 1.1, step 1.2, algebra] ∎

