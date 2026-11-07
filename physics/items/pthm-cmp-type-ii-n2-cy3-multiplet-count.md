---
id: pthm-cmp-type-ii-n2-cy3-multiplet-count
kind: physics-theorem
title: "Four-dimensional N=2 multiplet counts for Type II on a strict Calabi–Yau threefold"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 11
axiom_strength: "Full AC, inherited through the compact-Kähler Hodge supplier."
deps:
  - def-axiom-of-choice
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-cmp-n2-special-kahler-period-data
  - def-cmp-n2-massless-multiplet-counting-conventions
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n2-matter-coupled-supergravity
  - post-ten-dimensional-ns-ns-supergravity-action
  - post-type-iia-two-derivative-supergravity-action
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - post-type-iib-fiveform-self-duality-constraint
  - def-type-iib-lorentzian-hodge-star
  - thm-type-iib-lorentzian-hodge-star-properties
  - def-type-iia-supergravity-killing-spinor-equations
  - def-type-iib-supergravity-killing-spinor-equations
  - pthm-type-iia-bosonic-field-equations
  - pthm-type-iib-field-equations-with-self-duality
  - cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-gts-bogomolovtiantodorov-unobstructedness
  - thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data
  - def-gts-compact-calabiyau-manifold-conventions
  - thm-general-stokes-theorem
  - lem-gr-fx-star-shaped-poincare-homotopy
  - lem-cmp-strict-su3-hodge-number-count
  - lem-cmp-standard-su3-representation-has-no-fixed-vector
  - lem-cmp-ricci-flat-cy3-metric-zero-modes
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-n2-massless-multiplet-counting-conventions: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n2-matter-coupled-supergravity: physical-assumption
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-type-iib-lorentzian-hodge-star-properties: mathematical-premise
  def-type-iia-supergravity-killing-spinor-equations: physical-assumption
  def-type-iib-supergravity-killing-spinor-equations: physical-assumption
  pthm-type-iia-bosonic-field-equations: physical-result
  pthm-type-iib-field-equations-with-self-duality: physical-result
  cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-gts-bogomolovtiantodorov-unobstructedness: mathematical-premise
  thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  lem-gr-fx-star-shaped-poincare-homotopy: mathematical-premise
  lem-cmp-strict-su3-hodge-number-count: mathematical-premise
  lem-cmp-standard-su3-representation-has-no-fixed-vector: mathematical-premise
  lem-cmp-ricci-flat-cy3-metric-zero-modes: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
physical_scope: "Conditional deduction for the perturbative, source-free, unfluxed, unorientifolded Type II compactification on a smooth compact Ricci-flat Kähler threefold with exact SU(3) holonomy, the specified volume-form-induced internal Spin lift and standard external Spin lift with their product spin structure, retaining only the massless two-derivative four-dimensional sector at weak string coupling. It is not a claim about a quantum-corrected vacuum or observed physics."
empirical_premises: []
sources:
  references:
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§2.3–§2.4, PDF pp. 7–13; eight supercharges, four-dimensional multiplets, harmonic moduli, and Type IIA/B counts."
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§§2–3, PDF pp. 4–16; harmonic expansions and Kähler/complex-structure modes, with orientifold projection limitations retained."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.2, Theorem 6.8, PDF p. 31, and §7.2, Theorem 7.9, PDF pp. 44–46; on-shell KSE criteria and IIA/IIB spinor types. The item uses only their zero-flux reduction; the corrected IIB gravitino RR sign agrees with Hamilton and its RR terms vanish in this reduction."
---

## Statement

Assume AC; perturbative Type II string theory on a smooth connected compact Calabi–Yau threefold $X$ with a Ricci-flat Kähler metric of holonomy exactly $SU(3)$; constant dilaton; no orientifold projection, fluxes, localized brane sources, or warping; and retain only the massless two-derivative four-dimensional sector at weak string coupling on a star-shaped external patch in Minkowski coordinates. Choose a nowhere-zero holomorphic three-form $\Omega$ on $X$. Equip the external patch with its standard Spin lift of the oriented orthonormal Minkowski frame, equip $X$ with the Spin lift obtained from its canonical unitary $\operatorname{Spin}^c(6)$ structure by using the unit normalization of $\Omega^{-1}$ to trivialize its determinant line $K_X^{-1}$, and use the resulting product spin structure for ten-dimensional spinors. Assume the local complex-structure deformation space is the smooth Kuranishi space conditionally supplied by Bogomolov–Tian–Todorov. The resulting four-dimensional theory has $N=2$ supersymmetry. Type IIA has $h^{1,1}(X)$ vector multiplets and $h^{2,1}(X)+1$ hypermultiplets; Type IIB has $h^{2,1}(X)$ vector multiplets and $h^{1,1}(X)+1$ hypermultiplets. The graviphoton is in the $N=2$ gravity multiplet and is excluded from the vector-multiplet count. These are conditional model deductions; they do not establish an empirical string vacuum.

## Facts & Assumptions

**Given:** AC; a smooth connected compact Kähler complex threefold $X$ with a chosen nowhere-zero holomorphic volume form $\Omega$ and a Ricci-flat Kähler metric of exact $SU(3)$ holonomy; the internal Spin lift reduced from the canonical unitary Spin-c structure by the unit determinant trivialization $\Omega^{-1}$; the standard external Spin lift and the resulting ten-dimensional product spin structure; a source-free, unfluxed, unorientifolded product compactification on a star-shaped four-dimensional spacetime patch; constant dilaton; weak string coupling; only the massless two-derivative sector; and the conditional smooth Kuranishi space specified in the Statement.

[F1] The ready current carrier [[def-supergravity-conventions-and-normalizations]] fixes Lorentzian signature $(-+\cdots+)$, the signed norm $|F_p|^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$, $2\kappa_0^2=(2\pi)^7\alpha'^4$, the string/Einstein relation $G^{(E)}=e^{-\Phi/2}G^{(s)}$, and the ten-dimensional IIA/IIB Majorana–Weyl chirality conventions. Its Definition also fixes $*_G*_G\alpha=(-1)^{p(n-p)+1}\alpha$ in one-time Lorentzian signature; these are adopted conventions.

[F2] The current carrier [[post-four-dimensional-n2-matter-coupled-supergravity]] states: “Adopt the two-derivative four-dimensional N=2 component framework with one gravity multiplet, $n_V$ vector multiplets whose scalar manifold is special Kähler, and $n_H$ hypermultiplets whose scalar manifold is quaternionic-Kähler; fix a selected electric frame and the local symplectic section $L^\Lambda$ and its covariant derivatives $f_i^\Lambda$. A gauging is specified by Killing vectors on both scalar factors and the corresponding moment maps; the action is the on-shell matter-coupled supergravity action in the source convention. This item does not cover tensor multiplets, dyonic embedding-tensor gaugings, or a universal off-shell action.” Its current Step 1 row remains escalated; its recorded reason says the conventions carrier is absent although that live carrier is now present and ready. Preserve this escalation, record that its reason is stale, and use only the quoted framework conditionally.

[F3] The current postulate [[post-type-iia-two-derivative-supergravity-action]] adopts $S_{\mathrm{IIA}}=S_{\mathrm{NS}}-\frac{1}{4\kappa_0^2}\int\sqrt{-g_s}(|G_2|_s^2+|\widetilde G_4|_s^2)-\frac{1}{4\kappa_0^2}\int B_2\wedge G_4\wedge G_4$, with $H_3=dB_2$, $G_2=dC_1$, $G_4=dC_3$, and $\widetilde G_4=G_4-C_1\wedge H_3$. It is the massless source-free leading tree-level two-derivative string-frame model with $F_0=0$, local potentials, $dH_3=0$, and no localized or magnetic sources, loops, or $\alpha'$ corrections; its NS term is [F16]. The current item and Step 1 record are ready; the proof uses its adopted action only under the stated model assumptions.

[F4] The current pseudoaction [[post-type-iib-two-derivative-supergravity-pseudoaction]] adopts $S_{\mathrm{IIB}}=S_{\mathrm{NS}}-\frac{1}{4\kappa_0^2}\int\operatorname{vol}_{g_s}(|G_1|_s^2+|\widetilde G_3|_s^2+\tfrac12|\widetilde G_5|_s^2)-\frac{1}{4\kappa_0^2}\int C_4\wedge H_3\wedge G_3$, with $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, and $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3\wedge B_2$. Its hypotheses are smooth source-free fields on a contractible patch, local potentials, $dH_3=0$, and omission of brane currents, loops, and higher-derivative terms; the NS term is [F16]. This is the selected undoubled pseudoaction, not the complete field system. Its current Step 1 record remains escalated because current readiness records for its IIB field-system suppliers are missing; the interface is used conditionally.

[F5] The current carrier [[post-type-iib-fiveform-self-duality-constraint]] says: “After varying [[post-type-iib-two-derivative-supergravity-pseudoaction]], separately impose $*_{g_s}\widetilde G_5=\widetilde G_5$ on the gauge-invariant real five-form in the oriented Lorentzian ten-dimensional convention [[def-type-iib-lorentzian-hodge-star]].” This convention fixes the Lorentzian orientation and star signs; [[thm-type-iib-lorentzian-hodge-star-properties]] proves $*_{g_s}^2=1$ on five-forms. Its current Step 1 record remains escalated because the pseudoaction supplier has no current ready record; its exact constraint is used conditionally.

[F6] [[lem-cmp-strict-su3-hodge-number-count]] proves, under exact $SU(3)$ holonomy and AC, $b_1=0$, $b_2=b_4=h^{1,1}$, and $b_3=2h^{2,1}+2$.

[F7] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] supplies unique harmonic representatives and Hodge decomposition under AC. Its carrier is present, but the current Step 1 readiness record is missing; uses below remain conditional.

[F8] [[def-cmp-n2-massless-multiplet-counting-conventions]] gives the real scalar counts: $2$ per vector multiplet, $4$ per hypermultiplet, and one graviphoton in the gravity multiplet.

[F9] [[def-cmp-calabi-yau-threefold-compactification-data]] keeps the broad condition $K_X\cong\mathcal O_X$ separate from exact $SU(3)$ holonomy; the latter is separately assumed here.

[F10] The current carrier [[thm-gts-bogomolovtiantodorov-unobstructedness]] states that the local Kuranishi space of a compact Kähler manifold with holomorphically trivial $K_X$ is smooth of dimension $h^1(X,T_X^{1,0})$. The local Kuranishi, T$^1$-lifting and relative Artin base-change constructions now prove this mathematical interface; the physical model assumptions and other separately stated prerequisites of this item are retained.

[F11] [[def-cmp-n2-special-kahler-period-data]] records the local two-derivative assignment: Type IIB vector geometry uses complex-structure periods, whereas Type IIA vector geometry uses complexified Kähler data; a global prepotential is not assumed.

[F12] [[def-axiom-of-choice]] is the full choice-function axiom inherited by the Hodge suppliers.

[F13] [[lem-gr-fx-star-shaped-poincare-homotopy]] proves that every smooth closed $k$-form on an open star-shaped subset of $\mathbb R^n$, $1\le k\le n$, has the explicit radial primitive $K\alpha$; its complete current proof covers $k=1,2,3$ used here. Its current Step 1 readiness record is missing, so the local exactness uses remain conditional.

[F14] [[thm-gts-spin-structure-and-parallel-spinors-from-calabiyau-data]] proves that a compact connected Kähler $n$-fold with holomorphically trivial $K_X$, a chosen nowhere-zero holomorphic volume form, and a Ricci-flat Kähler metric has a canonical unitary Spin-c structure with determinant line $K_X^{-1}$; reducing it by the unit normalization of $\Omega^{-1}$ constructs the particular Spin lift whose spinor bundle with induced Levi-Civita connection is $\Lambda^{0,*}T_X^*$. Its degree-zero and degree-$n$ $SU(n)$-invariant fiber lines give global parallel spinors for holonomy contained in $SU(n)$. This is the internal lift chosen in the Statement, not a claim about an arbitrary Spin structure. The local spinor-bundle and invariant-line argument is used at its stated metric and holonomy hypotheses; metric existence is supplied separately by [F15], and does not establish exact holonomy.

[F15] [[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]] states that every Kähler class on a compact connected Kähler manifold with $c_1(T_X)=0$ contains a unique Ricci-flat Kähler form. Its reduction uses the compact $\partial\bar\partial$ lemma and the Calabi theorem with locally proved uniform estimates and normalized Hölder openness; this is the mathematical metric-existence interface used here.

[F16] The ready current carrier [[post-ten-dimensional-ns-ns-supergravity-action]] adopts $S_{\mathrm{NS}}=\frac{1}{2\kappa_0^2}\int d^{10}x\,\sqrt{-G^{(s)}}e^{-2\Phi}\left(R_s+4|d\Phi|^2-\frac1{12}H_{MNP}H_s^{MNP}\right)$, with $H_3=dB_2$ on a local smooth Lorentzian ten-dimensional patch.

[F17] [[def-type-iia-supergravity-killing-spinor-equations]] defines a local supersymmetric IIA bosonic solution as an on-shell solution of its listed field equations with a nonzero Majorana spinor satisfying the displayed gravitino and dilatino equations. Under the source-free, local, massless string-frame hypotheses, when [A3] sets $H_3,G_2,\widetilde G_4,d\Phi$ to zero these equations reduce to $\nabla_X\epsilon=0$ and the zero algebraic equation. Its current Step 1 record is ready.

[F18] [[def-type-iib-supergravity-killing-spinor-equations]] defines a local supersymmetric IIB bosonic solution as an on-shell solution of its listed field equations with a nonzero doublet of left-handed Majorana–Weyl spinors satisfying its displayed gravitino and dilatino equations. Under [A3], all flux and dilaton terms vanish, leaving $\nabla^S_X\epsilon=0$ and the zero algebraic equation. Its current Step 1 record remains escalated because readiness records for its actual IIB pseudoaction and five-form-constraint suppliers are missing. The corrected current carrier uses Hamilton Theorem 7.9's $+1/8$ prefactor in $\widetilde\Omega$; this conditional zero-flux use is unaffected because those RR terms vanish.

[F19] [[pthm-type-iia-bosonic-field-equations]] gives the source-free Euler–Lagrange equations of the current IIA action [F3], including the metric, dilaton, and form equations. Its complete proof and current Step 1 ready record were inspected. Substitution of [A3] and the Ricci-flat product metric makes each displayed equation vanish.

[F20] [[pthm-type-iib-field-equations-with-self-duality]] gives the source-free IIB pseudoaction field equations together with the separate self-duality condition [F5]. Its complete conditional proof was inspected, but its current Step 1 record remains escalated because readiness records for its IIB pseudoaction and five-form-constraint suppliers are missing. Substitution of [A3] and the Ricci-flat product metric makes every displayed equation vanish.

[F21] [[def-gts-compact-calabiyau-manifold-conventions]] defines exact $SU(3)$ holonomy as equality of the Levi-Civita holonomy group with the standard real-linear $SU(3)$ action in a unitary tangent frame.

[F22] [[lem-cmp-standard-su3-representation-has-no-fixed-vector]] proves that the standard $SU(3)$ action on $\mathbb C^3$ fixes only the zero vector.

[F23] [[thm-general-stokes-theorem]] states, under $\mathrm{AC}_\omega$, that the integral of an exterior derivative of a compactly supported top-minus-one form equals its boundary integral. Here full AC [F12] implies $\mathrm{AC}_\omega$; the internal manifold is compact and boundaryless, so the integral is zero.

[F24] [[lem-cmp-ricci-flat-cy3-metric-zero-modes]] proves, for the specified existing Ricci-flat metric and parallel volume form, that the full linearized Ricci-flat metric kernel modulo infinitesimal diffeomorphisms has real dimension $h^{1,1}+2h^{2,1}$, via harmonic real $(1,1)$ and complex $(2,1)$ forms. It asserts no nonlinear metric existence.

[A1] On an unfluxed product background, a $q$-form mode has an internal coefficient $\eta\in\Omega^q(X)$. Torsion sectors are discrete and are not counted as continuous scalar modes.

[A2] Expand about the zero-form-flux product background and retain the quadratic, free massless two-derivative form-field terms from the source-free actions; the Chern–Simons terms have no quadratic contribution on this background. The external patch is an open star-shaped subset of four-dimensional Minkowski coordinates, so [F13] applies to its smooth closed forms.

[A3] “Unfluxed product” means that on the background $H_3=G_2=\widetilde G_4=G_1=\widetilde G_3=\widetilde G_5=0$, the dilaton $\Phi$ in either theory and the IIB axion $C_0$ are constant, the external metric is Minkowski, and the internal metric is the stated Ricci-flat Kähler metric. Choose local potentials with these zero background field strengths. There are no sources, warping, or orientifold projections.

## Proof

**Proof technique:** spinor-invariant count, harmonic mode expansion, and four-dimensional multiplet bookkeeping.

**Given:** The exact-holonomy compactification with the specified volume-form-induced internal Spin lift, standard external Spin lift and their product, source-free IIA/IIB model actions and IIB self-duality condition, weak-coupling two-derivative truncation, AC, and conditional smooth Kuranishi input stated above.

1.1 On each local product coordinate patch, the ten-dimensional product metric in [A3] is Ricci-flat: its external Minkowski factor is flat, its internal factor is Ricci-flat by hypothesis, and the product Levi-Civita connection has the corresponding block Ricci tensor. All NS and RR field strengths and dilaton derivatives vanish by [A3]. Substituting these values into the IIA equations [F19] and IIB equations [F20] sets every stress, current, and derivative term to zero; in IIB the separate condition [F5] is $*0=0$. Hence this is an on-shell bosonic background for both KSE criteria [F17] and [F18]; because these equations are local, the check applies on every internal chart. [A3, F3, F4, F5, F16, F17, F18, F19, F20, algebra]

1.2 In the product metric, each uncoupled form fluctuation at quadratic order in [A2], expanded with internal coefficient $\eta$, has internal kinetic operator the Hodge Laplacian $\Delta_X=dd^*+d^*d$. On compact $X$, integration by parts gives $\langle\Delta_X\eta,\eta\rangle=\|d\eta\|^2+\|d^*\eta\|^2$. Therefore its eigenvalue is nonnegative, and it is zero exactly when $d\eta=d^*\eta=0$, that is, exactly when $\eta$ is harmonic. Separation of variables then adds this eigenvalue to the four-dimensional mass squared. The IIB self-duality constraint [F5] must also be imposed on the resulting modes; [F7] identifies the harmonic zero eigenspaces with the real cohomology representatives used below. The NS and RR quadratic terms are supplied by [F16], [F3], and [F4], while [F12] is the required AC hypothesis for [F7]. [A1, A2, F3, F4, F5, F7, F12, F16, given, algebra]

2.1 By [F17] and [F18], supersymmetry on this on-shell background is equivalent, in the respective adopted IIA/IIB conventions, to a nonzero ten-dimensional spinor solving each KSE system. Under [A3] every flux and dilaton term in those systems vanishes, so their gravitino equations reduce to parallel spinors and their dilatino equations vanish. The chosen $\Omega$ is parallel for the specified Ricci-flat metric by the Bochner argument in [F6]. Hence its unit inverse trivializes the determinant connection, and [F14] applies to exactly the internal Spin lift selected in the Statement: its spinor bundle with connection is $\Lambda^{0,*}T_X^*$. The degree-zero and degree-three $SU(3)$-invariant fiber lines therefore give global parallel spinors for this lift. This conclusion would not follow from tangent holonomy alone for an unspecified flat $\mathbb Z_2$ twist of the Spin lift. To count them directly, realize the fiber module as $S_6=\Lambda^{0,*}\mathbb C^3$ by exterior multiplication and contraction; parity gives $S_6^+=\Lambda^{0,0}\oplus\Lambda^{0,2}$ and $S_6^-=\Lambda^{0,1}\oplus\Lambda^{0,3}$. The diagonal $SU(3)$ weights on $\Lambda^{0,1}$ are $e^{-i\theta_1},e^{-i\theta_2},e^{i(\theta_1+\theta_2)}$, and those on $\Lambda^{0,2}$ are their pairwise products; none is identically $1$. Thus each chirality has exactly one invariant complex line, consistent with [F14]. The specified standard external lift has constant spinors in its global Minkowski frame; the chosen ten-dimensional structure is its product with the internal lift. Under $Spin(1,9) \supset Spin(1,3)\times Spin(6)$, ten-dimensional chirality is the product of external and internal chirality; each fixed ten-dimensional chirality pairs one external Weyl representation with each compatible internal chirality. The Majorana condition pairs the resulting four-dimensional Weyl components as conjugates. Thus each ten-dimensional Majorana–Weyl parameter contributes four real four-dimensional supersymmetry parameters. By [F1], IIA has two opposite-chirality parameters and IIB has two same-chirality parameters; either gives eight real supercharges, which is $N=2$ under [F2] and [F1]’s convention that $N$ counts independent parameters. The broad canonical-bundle condition [F9] alone would not supply exact $SU(3)$ holonomy or this count. [A3, F1, F2, F6, F9, F14, F17, F18, step 1.1, given, algebra]

2.2 For a free external two-form $B_2$, varying its quadratic kinetic term in [F16] gives $d*H_3=0$ for $H_3=dB_2$. Hence $*H_3$ is a closed one-form; on the star-shaped patch [A2] and [F13] give $*H_3=da$ for a scalar $a$, unique up to a constant. In Lorentzian four dimensions $*^2=1$ on one- and three-forms by [F1], so $H_3=*da$; the Bianchi identity $dH_3=0$ becomes $d*da=0$, the massless scalar equation. Conversely, if $a$ solves this equation then $*da$ is closed, and [F13] supplies a local $B_2$ with $dB_2=*da$. If two potentials give the same $H_3$, their closed two-form difference is exact by [F13], hence they differ by the two-form gauge transformation $B_2\mapsto B_2+d\Lambda_1$; a scalar shift by a constant does not change $H_3$. For IIB, with constant background axion $C_0^{(0)}$, make the invertible linear change $C_{2,\mathrm{free}}:=C_2-C_0^{(0)}B_2$. The linearized $\widetilde G_3$ is then $dC_{2,\mathrm{free}}$; the quadratic NS and RR kinetic terms are independent with constant nonzero coefficients. The same closed-form, Poincaré, and gauge argument therefore gives one scalar for each external two-form. This proves the one-scalar correspondence of local free solution classes. For an external three-form $C_3$, varying its quadratic kinetic term in [F3] gives $d*F_4=0$ with $F_4=dC_3$. In four dimensions $*F_4$ is a zero-form, so it is locally constant; this sector has no local wave degree of freedom, and the stipulated zero-flux branch sets the integration constant to zero. [A2, F1, F3, F13, F16, step 1.2, algebra]

2.3 Consider a transverse metric-vector perturbation $h_{\mu m}(x,y)=A_\mu(x)K_m(y)$ of the product background [A3], with $\nabla_4^\mu A_\mu=0$. By the Hodge decomposition [F7], exact internal one-form profiles are longitudinal diffeomorphism modes, so take the physical vector profile co-closed: $\nabla_X^mK_m=0$. In this vector sector, any linearized dilaton term in the mixed equation is an external gradient $\partial_\mu\nabla_m\delta\Phi$ and vanishes after projection to transverse four-dimensional vectors. Thus [F19] and [F20] reduce to $\delta R_{\mu m}=0$ in this sector. In de Donder gauge, vary the Levi-Civita connection by $\delta\Gamma^P{}_{MN}=\tfrac12(\nabla_Mh_N{}^P+\nabla_Nh_M{}^P-\nabla^Ph_{MN})$ and use $\delta R_{MN}=\nabla_P\delta\Gamma^P{}_{MN}-\nabla_N\delta\Gamma^P{}_{MP}$. The gauge condition and the vanishing mixed product curvature give $\delta R_{\mu m}=-\tfrac12[(\Box_4A_\mu)K_m+A_\mu\nabla_X^n\nabla_{X,n}K_m]$. Separation of variables shows that a massless four-dimensional vector, for which $\Box_4A_\mu=0$, has $\nabla_X^*\nabla_XK=0$, where $\nabla_X^*\nabla_X$ is the positive rough Laplacian. Set $W^m=\langle\nabla_X^mK,K\rangle$. In an oriented orthonormal frame, $\nabla_mW^m=|\nabla_XK|^2-\langle\nabla_X^*\nabla_XK,K\rangle$, and $d(i_W\operatorname{vol}_X)=(\nabla_mW^m)\operatorname{vol}_X$. Thus [F23], using full AC [F12] and compact support on compact $X$, gives $\int_X|\nabla_XK|^2=0$ and hence $K$ is parallel. Raising its index with the internal metric makes $K^\sharp$ a tangent vector fixed by the exact holonomy [F21]; [F22] forces $K^\sharp=0$, so there is no metric mixed-vector zero mode. [A3, F7, F12, F19, F20, F21, F22, F23, step 1.1, given, algebra]

3.1 First identify all internal metric scalar zero modes, rather than only parameters within a prescribed Kähler family. The invertible frame change $G_s=e^{\Phi/2}G_E$ gives $\sqrt{-G_s}e^{-2\Phi}(R_s+4|d\Phi|_s^2)=\sqrt{-G_E}(R_E-\tfrac12|d\Phi|_E^2-\tfrac92\Box_E\Phi)$: substituting $\sigma=\Phi/4$ into $R(e^{2\sigma}G)=e^{-2\sigma}(R-18\Box\sigma-72|d\sigma|^2)$ verifies each coefficient. The last term is a total derivative. At the constant-dilaton, zero-flux background its quadratic metric equation is therefore the vacuum linearized Einstein equation and its separate dilaton fluctuation has the scalar Laplacian; there is no linear stress coupling. Varying the connection as in step 2.3 and imposing de Donder gauge gives the product operator $-\Box_4+\Delta_{L,X}$ on internal symmetric tensor profiles. Thus any massless scalar profile lies in the Bianchi-gauged kernel in [F24]. Its trace $S$ is constant on $X$: tracing $\Delta_Lh=0$ gives $\Delta_X S=0$, and integration of $|dS|^2$ on compact $X$ gives constancy. Conversely any such profile and massless external scalar $\varphi$ give a de Donder perturbation by $\delta g_{mn}=\varphi h_{mn}$, $\delta g_{\mu\nu}=-(S/2)\varphi\eta_{\mu\nu}$, $\delta g_{\mu m}=0$. Its total trace is $-S\varphi$, so the external Bianchi component is $(S/2)\partial_\mu\varphi-(S/2)\partial_\mu\varphi=0$; its internal component is zero by [F24]. Both blocks solve the product operator when $\Box_4\varphi=0$. An external metric scalar trace profile must itself be harmonic on $X$ and hence constant, and de Donder fixes this trace compensation; longitudinal external metric components are diffeomorphisms. Mixed internal one-form profiles contribute none by step 2.3 and $b_1=0$. Hence no additional geometric scalar remains outside the kernel [F24]. This proves the exhaustive *linearized* metric count $h^{1,1}+2h^{2,1}$ without invoking nonlinear Calabi existence. Separately, by [F10], complex-structure tangent directions are $H^1(X,T_X^{1,0})$. In a holomorphic frame with $\Omega=f\,dz^1\wedge dz^2\wedge dz^3$ and $f\ne0$, contraction maps $\partial_{z^j}$ to $(-1)^{j-1}f\,dz^1\wedge\cdots\widehat{dz^j}\cdots\wedge dz^3$, a basis of $\Omega_X^2$. Since $\bar\partial\Omega=0$, contraction commutes with $\bar\partial$ on $(0,q)$-forms with values in $T_X^{1,0}$, so it induces $H^1(X,T_X^{1,0})\cong H^1(X,\Omega_X^2)\cong H^{2,1}(X)$ by [F7]. The completed BTT interface [F10] makes the local complex-structure moduli space smooth of this complex dimension. Thus these modes supply $2h^{2,1}$ real scalar coordinates. For Kähler deformations, the Kähler cone is open in the real $(1,1)$ classes: on compact $X$ a positive Kähler form has a uniform positive lower eigenvalue, so sufficiently small harmonic representatives of real $(1,1)$ classes preserve positivity. Since $K_X$ is trivial, $c_1(T_X)_{\mathbb R}=0$ by [F9]; the existence interface [F15] then supplies a Ricci-flat metric in every such nearby Kähler class. Therefore these Kähler backgrounds have $b_2=h^{1,1}$ real coordinates by [F6]. The preceding exhaustive linearized count identifies the actual massless metric scalar space; the following additional statement concerns nonlinear geometric families only: a Kähler metric is determined by its complex structure and Kähler form, and [F15] gives a unique Ricci-flat metric for each fixed complex structure and Kähler class. Thus no additional independent metric scalar parameter remains at fixed complex structure and Kähler class. Full AC is [F12], inherited by [F7], [F10], and [F15]. [F6, F7, F9, F10, F12, F15, F24, step 2.3, given, algebra]

3.2 For IIB, mixed one-form modes of $B_2$ and $C_2$ vanish because $b_1=0$ by [F6], and the metric has no mixed-vector zero mode by step 2.3. The $C_4$ vector coefficients lie in $H^3(X;\mathbb R)$, of real dimension $b_3$. For a real three-form in an oriented orthonormal coframe on the positive-definite six-manifold, applying the Hodge star twice complements the three-index block twice and has sign $(-1)^{3\cdot3}=-1$; hence $*_6^2=-1$. Regard $H^3(X;\mathbb R)$ as a complex vector space by $i\eta:=*_6\eta$. Choose a complex basis $\eta_a$; then the underlying real basis consists of the pairs $\eta_a,*_6\eta_a$, so $b_3$ is even. In the free linearized $C_4$ expansion, write each pair of vector field strengths as $F^a\wedge\eta_a+\widehat F^a\wedge *_6\eta_a$. The product Hodge-star formula and [F5] impose $\widehat F^a=\pm *_4F^a$, with the sign fixed by product orientation; either sign determines the second field strength from the first. These free field strengths are closed and have local potentials on the star-shaped patch by [F13], unique up to gauge. Thus there is one independent vector per internal two-plane, giving $b_3/2=h^{2,1}+1$ vectors. One is the graviphoton, so the number of vector multiplets is $h^{2,1}$. [A1, A2, F4, F5, F6, F8, F13, step 1.2, step 2.3, algebra]

4.1 For IIA, [F3] supplies one external vector from $C_1$ and one four-dimensional vector for each harmonic internal two-form coefficient of $C_3$, hence $1+b_2$ vectors. By the IIA assignment in [F11], the $b_2$ Kähler reals and $b_2$ internal $B_2$ axions from [F3] and [F16] are the $2b_2$ real vector-multiplet coordinates. The remaining internal scalar modes are: $2h^{2,1}$ complex-structure reals and $b_3$ internal $C_3$ axions; the dilaton from [F16]; and one scalar dual to the external $B_2$ two-form by step 2.2. Metric mixed-vector modes add none by step 2.3. Modes of $C_1$ on $H^1$, mixed $B_2$ or $C_3$ components on $H^1$, and the external $C_3$ three-form add none because $b_1=0$ by [F6] and step 1.2. Thus the total real scalar count is $2h^{2,1}+2b_2+b_3+2=4h^{2,1}+2h^{1,1}+4$. The $b_2+1=h^{1,1}+1$ vectors contain one graviphoton, leaving $h^{1,1}$ vector multiplets; their $2h^{1,1}$ real scalars leave $4(h^{2,1}+1)$ real scalars, or $h^{2,1}+1$ hypermultiplets by [F8]. [A1, F3, F6, F8, F11, F16, step 1.2, step 2.2, step 2.3, step 3.1, algebra]

5.1 For each harmonic internal two-form $\eta_2$, the internal star gives a harmonic four-form $\eta_4:=*_6\eta_2$; since $*_6$ is a bijection, these spaces have equal dimensions $b_2=b_4$. Write the corresponding free external $C_4$ modes as a scalar $\varphi$ with field strength $d\varphi\wedge\eta_4$ and a two-form potential $A_2$ with field strength $dA_2\wedge\eta_2$. The product-star formula and [F5] give $dA_2=\pm *_4d\varphi$, with sign fixed by orientation. The linearized Bianchi identity $d(dA_2)=0$ implies $d*_4d\varphi=0$. Conversely, if this scalar equation holds, then $*_4d\varphi$ is closed and [F13] gives a local $A_2$ with $dA_2=\pm *_4d\varphi$; two such potentials differ by an exact two-form, while a constant shift of $\varphi$ leaves its field strength unchanged. This is the same local Poincaré and gauge argument as step 2.2, so the self-dual pair contributes $b_4$ independent scalar modes rather than separate scalar and two-form sets. The real scalar total is $2h^{2,1}$ complex-structure reals, $b_2$ Kähler reals, $b_2$ internal $B_2$ axions, $b_2$ internal $C_2$ axions, $b_4$ internal $C_4$ axions, two axiodilaton coordinates $(\Phi,C_0)$, and one scalar dual to each external $B_2$ and redefined $C_2$ two-form by step 2.2. The external $C_4$ top-form has no local wave degree of freedom. Using [F6], the total is $2h^{2,1}+3b_2+b_4+4=2h^{2,1}+4h^{1,1}+4$. By [F11], the complex-structure scalars are the Type IIB vector-sector coordinates, so the $2h^{2,1}$ real scalars fill the $h^{2,1}$ vector multiplets from step 3.2. The remaining $4(h^{1,1}+1)$ real scalars form $h^{1,1}+1$ hypermultiplets by [F8]. [A1, A2, F4, F5, F6, F8, F11, F13, F16, step 2.2, step 3.2, algebra] ∎
