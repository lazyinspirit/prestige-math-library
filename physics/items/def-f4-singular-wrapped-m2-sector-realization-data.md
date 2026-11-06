---
id: def-f4-singular-wrapped-m2-sector-realization-data
kind: definition
title: F4 Singular Wrapped M2 Sector Realization Data
domain: physics
library: physics
category: string-theory
dependency_level: 10
axiom_strength: "ZF + full AC via the even-dimensional spinor prerequisite"
deps:
  - def-m2-regulated-protected-sector-data
  - def-m2-combined-fermion-cfield-descent-data
  - def-m2-brane-worldvolume-action
  - def-f4-crepant-resolution-and-matter-surface
dependency_roles:
  def-m2-regulated-protected-sector-data: formulation-prerequisite
  def-m2-combined-fermion-cfield-descent-data: mathematical-premise
  def-m2-brane-worldvolume-action: formulation-prerequisite
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
status: published
origin: session
physical_scope: >-
  Specified resolved geometric F-theory models and the original singular
  matter-curve/selected-fibral-sector index scope. Required-data definitions
  assert no physical existence; finite operator examples have no physical status.
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Bergshoeff, E. Sezgin, and P. K. Townsend, Supermembranes and Eleven-Dimensional Supergravity (1987)"
      url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
      locator: "Equations (3)–(20): classical Green–Schwarz action and its smooth worldvolume domain."
    - title: "E. Bergshoeff, E. Sezgin, and P. K. Townsend, Properties of the Eleven-Dimensional Supermembrane Theory (1988)"
      url: https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf
      locator: "§2: classical supermembrane equations and gauge structure."
    - title: "Paul K. Townsend, Four Lectures on M-theory"
      url: https://arxiv.org/pdf/hep-th/9612121v3
      locator: "§2: classical membrane action and its scope."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: https://arxiv.org/pdf/1806.01854v1
      locator: "§§4.5–5.6: resolved fibral curves, matter surfaces, and chamber dependence."
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: https://arxiv.org/pdf/1401.7844v2
      locator: "§2 and §5.1: Weierstrass and genus-one geometry conventions."
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory, arXiv:hep-th/0409135v3"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§§1.1, 1.3, and 5.2: smooth Euclidean fermion/Pfaffian and differential-cohomology architecture, within the recorded reading limits."
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

Assume full AC, inherited through the even-dimensional spinor and combined
Euclidean characteristic-class prerequisites. This definition specifies
required physical realization data and makes no existence assertion.

Fix specified F4 model data over a smooth integral complex algebraic threefold
$B$, a specified divisor $D\subset B$, a matter curve $C\subset D$, and a
selected matter surface $\mathcal S_R$, with the meanings supplied by
\texttt{def-f4-crepant-resolution-and-matter-surface}. The curve $C$ is
reduced, irreducible and closed; the geometric generic fibres of the resolved
projection over $C$ and $D$ are nonisomorphic after base change along any
chosen pair of embeddings of their residue-field algebraic closures into a
common algebraically closed field. The resolution $\rho:\widehat Y\to Y_W$ is specified
proper, birational and crepant, and the resolution chamber is part of the
data. Write $\widehat\pi:=\pi_W\circ\rho$, where
$\pi_W:Y_W\to B$ is the Weierstrass projection. The surface $\mathcal S_R$ is
a specified reduced irreducible closed surface with
$\widehat\pi(\mathcal S_R)\subseteq C$; its map
$q_R:=\widehat\pi|_{\mathcal S_R}:\mathcal S_R\to C$ is proper and flat
with nonempty pure one-dimensional geometric fibres and selected geometric
generic fibre isomorphic to $\mathbb P^1$ and belonging to the specified
collection $\mathcal C$ of resolution-chamber curve components. These are
supplied geometric data;
this definition asserts no existence or uniqueness of a model, resolution,
curve, or surface.

Let $\Delta\subset C$ be a specified finite set containing every singular
point of $C$ and every specified degeneration point. As part of the supplied
data, let $\nu:\widetilde C\to C$ be the normalization, meaning a finite,
surjective birational morphism from a normal integral complex curve; require
$\nu$ to be an isomorphism over $C^\circ:=C\setminus\Delta$. For each
$p\in\Delta$, the finite set $\nu^{-1}(p)$ labels the local analytic branches
over $p$. Put $\widetilde C^\circ:=\nu^{-1}(C^\circ)$, name each connected
component $U_\alpha$ of $\widetilde C^\circ$, and record its image
$V_\alpha=\nu(U_\alpha)\subseteq C^\circ$; on these sets the normalization
map is an isomorphism. This explicitly identifies the smooth branch components
used in the comparison and the branch labels over every point of $\Delta$.
No compactness of $C$ or $\widetilde C$ is implicit unless it is separately
supplied.

Write the grading of the supplied regulated Hilbert space as
$\mathcal H_\varepsilon=\mathcal H_{\varepsilon,+}\oplus
\mathcal H_{\varepsilon,-}$, with grading operator $\Gamma_\varepsilon$ equal
to $+1$ and $-1$ on the two summands. Require
$\Gamma_\varepsilon\operatorname{Dom}(Q_\varepsilon)=
\operatorname{Dom}(Q_\varepsilon)$ and
$Q_\varepsilon\Gamma_\varepsilon=-\Gamma_\varepsilon Q_\varepsilon$ there.
The chiral component is
$$
Q_\varepsilon^+:\operatorname{Dom}(Q_\varepsilon)\cap\mathcal H_{\varepsilon,+} \longrightarrow\mathcal H_{\varepsilon,-},\qquad Q_\varepsilon^+u=Q_\varepsilon u.
$$
When a protected index is claimed, require this closed component to be
Fredholm on its graph-norm domain: its range is closed, its kernel and
algebraic cokernel are finite-dimensional, and
$$
\operatorname{ind}Q_\varepsilon^+ =\dim_{\mathbb C}\ker Q_\varepsilon^+ -\dim_{\mathbb C}\bigl(\mathcal H_{\varepsilon,-}/\operatorname{ran}Q_\varepsilon^+\bigr).
$$
This fixes the sign as even minus odd. The phrase “protected index” below means
this Fredholm index only; any regulator limit is the limit of these specified
indices under the supplied regulator-removal identifications.

A **singular wrapped-M2 sector realization data package** is the following
actual data, together with the verification maps and estimates listed below.
It is not a claim that these objects exist.

1. **Regulated protected sector.** Use $c=\hbar=1$ and the oriented M2
   charge and Wess–Zumino sign fixed by the classical worldvolume-action
   supplier def-m2-brane-worldvolume-action. That supplier is a classical
   action on a smooth closed oriented timelike three-manifold with nondegenerate
   Lorentzian induced metric; it supplies no quantization or singular-membrane
   theory. For the
   actual background and dimensionless regulator label $\varepsilon$, supply
   the ghost-graded completed BRST space, closed differential, its invariant
   domains, and physical ghost number $g_{\rm phys}$ of
   def-m2-regulated-protected-sector-data. Use its fixed-ghost-number
   Hilbert quotient
   $$
   \mathcal H_\varepsilon =\ker d_{\varepsilon,g_{\rm phys}}/ \overline{\operatorname{ran}d_{\varepsilon,g_{\rm phys}-1}},
   $$
   with the quotient equivalence and norm specified there; the denominator
   is closed in the numerator. The supplied self-adjoint unitary grading
   preserves each ghost sector and the BRST domain and anticommutes with
   the differential, so it induces
   $\mathcal H_\varepsilon=\mathcal H_{\varepsilon,+}\oplus
   \mathcal H_{\varepsilon,-}$. Adopt exactly the supplier's
   positively oriented Lorentz-frame convention
   $\eta=(-,+,+,+)$ and $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$:
   the positive summand is right-handed and the negative summand left-handed.
   The index sign fixed above is consequently right-handed minus left-handed
   protected zero modes when these spaces are finite. Identifying this
   grading with the physical four-dimensional chirality is supplied
   realization data, not a consequence of a formal quotient.
   Supply a densely defined closed quantum
   charge $Q_\varepsilon$, its exact Hilbert-adjoint domain, and its actual
   adjoint. Require $Q_\varepsilon=Q_\varepsilon^*$ on exactly that domain
   (self-adjointness); require the grading to preserve the domain and
   anticommute with $Q_\varepsilon$ (oddness). Supply the normalization and
   square of this charge as required by item 2 of
   def-m2-regulated-protected-sector-data, with
   $\operatorname{Dom}(Q_\varepsilon^2)=\{u\in\operatorname{Dom}(Q_\varepsilon):Q_\varepsilon u\in\operatorname{Dom}(Q_\varepsilon)\}$.
   Supply a self-adjoint Hamiltonian
   $H_\varepsilon:\operatorname{Dom}(H_\varepsilon)\subseteq\mathcal H_\varepsilon\to\mathcal H_\varepsilon$
   and its unitary evolution $U_\varepsilon(t)=e^{-itH_\varepsilon}$ for
   every $t\in\mathbb R$. Require $U_\varepsilon(t)$ to preserve the
   physical quotient and its grading, to map
   $\operatorname{Dom}(Q_\varepsilon)$ onto itself, and to satisfy
   $Q_\varepsilon U_\varepsilon(t)u=U_\varepsilon(t)Q_\varepsilon u$
   for every $u\in\operatorname{Dom}(Q_\varepsilon)$.
   Record the preserved symmetry algebra and its exact operator relations,
   including all domains, energy/central-charge normalizations and units
   used to relate $Q_\varepsilon^2$ to the model's energy and central charges;
   no universal identity $Q_\varepsilon^2=H_\varepsilon$ is imposed.
   Here $H_\varepsilon$ has units of energy and $t$ of inverse energy in
   the adopted $\hbar=1$ convention. For an operator $A$, its graph norm on
   its domain is $\|u\|_A=(\|u\|^2+\|Au\|^2)^{1/2}$. A Fredholm comparison
   means a bounded map between the stated graph Hilbert domain and Hilbert
   target with closed range and finite-dimensional kernel and cokernel.
   Supply regulator-removal identifications and convergence of the relevant
   closed operators or orthogonal projections onto specified spectral
   subspaces, and prove that the protected-index limit exists with
   all states entering or leaving zero accounted for.
2. **Smooth-branch comparison.** Over each named component $U_\alpha$ of
   $\widetilde C^\circ$, supply the actual smooth wrapped-fibre state bundle,
   its graded Hilbert fibres and closed operators, and an explicit
   grading-preserving intertwiner or graph-Fredholm comparison with the
   regulated sector over $V_\alpha$. For this reduction supply the
   finite-dimensional smooth parameter base $B_{\rm red}$, smooth graded
   Hilbert bundle $\mathscr H\to B_{\rm red}$ with its quotient fibres,
   unitary grading-preserving ambient connection $\nabla^{\mathscr H}$,
   and smooth operator-norm family of orthogonal projections $P_b$ of locally
   constant finite rank required by def-m2-regulated-protected-sector-data.
   Each $P_b$ commutes with the physical grading and preserves every operator
   domain used in the reduction. Supply a smooth map
   $r_\alpha:U_\alpha\to B_{\rm red}$ and a grading-preserving
   Hermitian identification of the actual light state bundle with
   $r_\alpha^*\operatorname{im}P$; its Berry connection is exactly
   $r_\alpha^*(P\nabla^{\mathscr H})$, where
   $(P\nabla^{\mathscr H})s=P\nabla^{\mathscr H}s$ for a light section.
   Give the fibre metrics, domains and norm estimates. No connection or
   projection family is inferred merely from the expected light-state rank.
   Equality of expected ranks alone is not a comparison map. The exact adopted
   smooth F4 index context is the postulate
   \texttt{post-f4-m2-matter-curve-zero-mode-dictionary}: it assumes a smooth
   compact resolved flat sectioned elliptic Calabi--Yau fourfold, with
   holomorphically trivial canonical bundle under the broad convention used by
   that postulate, a selected
   smooth compact matter surface $S_R^{\mathrm{sm}}$ embedded by
   $i:S_R^{\mathrm{sm}}\hookrightarrow\widehat Y_4$, and a proper smooth
   submersion $q:S_R^{\mathrm{sm}}\to C_R$ with closed oriented real
   two-dimensional fibres equal to the chosen rational curve, over a smooth
   compact matter curve $C_R$,
   algebraic gauge-background flux, the oriented fibre-integrated real class
   $\alpha=q_*(i^*[g_4])\in H^2_{\mathrm{dR}}(C_R;\mathbb R)$, a supplied integral lift
   $c\in H^2(C_R;\mathbb Z)$ of $\alpha$, a supplied holomorphic line bundle
   $\mathcal L_R$ with $c_1(\mathcal L_R)=c$, and a supplied spin line
   $\mathscr S_R^{\mathrm{spin}}$ with
   $(\mathscr S_R^{\mathrm{spin}})^{\otimes2}\cong K_{C_R}$. The source
   postulate denotes the smooth matter surface and spin line by $S_R$ and
   $\mathcal S_R$, respectively, and its gauge line bundle by $\mathcal L_R$;
   the superscripts here distinguish the smooth surface and spin line from the
   singular-model surface $\mathcal S_R$ fixed above. Under those adopted
   inputs it states
   $$
   \deg(\mathcal L_R)=\int_{S_R^{\mathrm{sm}}}g_4,\qquad \chi_R=h^0(C_R,\mathcal L_R\otimes\mathscr S_R^{\mathrm{spin}})-h^1(C_R,\mathcal L_R\otimes\mathscr S_R^{\mathrm{spin}}).
   $$
   Here $h^q(C_R,\mathcal E):=\dim_{\mathbb C}H^q(C_R,\mathcal E)$ when
   finite. The separate conditional flux convention in
   \texttt{post-f4-mtheory-g4-shifted-quantization} uses
   the normalized real cohomology class
   $g_4=[G_{4,\mathrm{CJS}}]/((2\pi)^3\ell_p^3)$ after adopting
   $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$, where $\ell_p$ is the Planck length in
   the adopted $c=\hbar=1$ units and $T_{M2}$ has dimension
   $\mathrm{length}^{-3}$, and identifying the unit-M2-coupled CJS
   curvature with the curvature in the Witten shift. Under its further
   hypotheses of a smooth compact connected resolved Calabi--Yau fourfold
   $\widehat Y_4$ with holomorphically trivial canonical bundle, a smooth
   second-countable spin eleven-manifold $Y_{11}$ and
   internal inclusion $i:\widehat Y_4\hookrightarrow Y_{11}$ with
   $i^*TY_{11}\cong T\widehat Y_4\oplus\varepsilon^3$, that postulate states
   only
   $$
   g_4+\tfrac12\rho_{\widehat Y_4}(c_2(T\widehat Y_4)) \in\operatorname{im}\rho_{\widehat Y_4},\qquad \rho_{\widehat Y_4}:H^4(\widehat Y_4;\mathbb Z)\to H^4_{\mathrm{dR}}(\widehat Y_4;\mathbb R).
   $$
   It neither chooses the integral lift $c$ and holomorphic line bundle above
   nor retains torsion or differential C-field data; it has no singular-space
   conclusion. These two postulates identify smooth comparison conventions
   only; neither supplies any singular state, transfer map or index proof.
   This zero-mode postulate supplies only that smooth compact line-bundle/spin-line
   index dictionary; it does not supply the branch Hilbert spaces or comparison
   maps required here. It explicitly excludes singular matter curves, general
   non-algebraic integral flux and microscopic M2 quantization. In particular,
   it cannot be applied across $\Delta$ or used as a derivation of singular
   branch or vertex states. No index on the punctured open branch is inferred
   from the smooth compact postulate. These adopted postulates identify target
   conventions only; the package must still supply the actual singular state
   spaces, operators, comparison maps and twist identification as data.
3. **Light branch and vertex data.** At every point of $\Delta$, supply the
   state spaces of every light branch, constituent membrane, and vertex
   degree of freedom, with their physical chiral gradings and actual
   interaction/transfer operators. If a high-sector gap closes, include the
   corresponding states in the light sector before applying an inverse to the
   high block.
4. **Closed singular domain and limit.** Give the closed regulated domain, the
   actual limiting operator, the convergence mode that permits the claimed
   Fredholm/index comparison, and the computed local index defects. Any finite
   branch/vertex reduction must have graph-norm-bounded transfer. A value
   prescribed only by point evaluation on smooth tests is not a closed-domain
   construction.
5. **Combined fermion/C-field twist.** Supply the mathematical data of
   def-m2-combined-fermion-cfield-descent-data and prove its actual
   identification with the protected-state twist, retaining Berry factors,
   spin weights, spectral-cut conventions, electric-line data, and flat
   differential-cocycle information. The Euclidean data definition supplies
   no such physical identification or pairing by naming it.

The supplied interface of def-m2-regulated-protected-sector-data specifies a Hilbert-completed BRST quotient, its grading and domains, a closed odd self-adjoint preserved charge and compatible evolution, and a controlled regulator limit if an index is claimed. A curve reduction also supplies the actual light projection, state bundle, Berry connection, closed blocks and comparison estimates. This is an input specification, not a physical quantization theorem.

The mathematical interface of def-m2-combined-fermion-cfield-descent-data specifies the closed smooth Euclidean spin family, actual normal-spinor data, and a source-matched shifted differential C-field. Its general shifted-cocycle component retains an arbitrary fixed integral shift. When a Freed--Moore source-presentation refinement is used, its spin shift, ordinary E8 refinement, normalized global correction form, curvature equation and integral/differential label crosswalk must additionally be supplied. These are source-matching conditions, not restrictions inferred for every general package. Integral and flat data and their actual compatible identification are retained. Full AC is inherited from the even-dimensional spinor and characteristic-class inputs. Self-adjointness, compact resolvent, smooth family dependence and geometric line data remain supplied mathematical hypotheses.

Neither interface supplies the physical realization, a Pfaffian/electric line pairing, or a comparison of different operator sign lines. The mathematical family-pairing theorem is not a logical prerequisite of this required-data definition: a requested pairing or physical twist identification is something the actual realization must provide, not a theorem presumed by naming the package.

## Definition references

[[def-f4-crepant-resolution-and-matter-surface]]

[[def-m2-brane-worldvolume-action]]

[[def-m2-regulated-protected-sector-data]]

[[def-m2-combined-fermion-cfield-descent-data]]

[[post-f4-m2-matter-curve-zero-mode-dictionary]]

[[post-f4-mtheory-g4-shifted-quantization]]

## Authoring boundary

This is a required-data definition, not an adopted postulate or a physical
existence theorem. It does not extend the classical smooth-embedding action
by fiat, assign physical meaning to an arbitrary finite matrix or nodal sheaf,
or prove the original matter-surface index relation. Current supplier
readiness is a separate native record; it is not inferred from carrier
presence or encoded as a permanent absence/ready claim in this definition.
The actual physical singular sector and twist identification remain required
inputs even if the local input contracts receive current ready records.
