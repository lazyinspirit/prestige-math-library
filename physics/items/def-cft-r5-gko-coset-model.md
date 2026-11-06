---
id: def-cft-r5-gko-coset-model
kind: definition
title: GKO coset CFT with a specified affine embedding
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-cft-r5-compact-wzw-model
  - def-cft-r5-full-local-cft-data
  - def-positive-energy-affine-module
  - def-sugawara-modes
  - def-dual-coxeter-number-for-normalized-form
  - thm-sugawara-modes-satisfy-virasoro
  - lem-cft-r5-gko-stress-tensor-coset-virasoro
  - thm-universal-affine-vertex-algebra
  - def-vertex-algebra-state-field
  - def-vertex-algebra-module
  - lem-cft-r5-restricted-affine-current-fields-are-local
dependency_roles:
  def-cft-r5-compact-wzw-model: formulation-prerequisite
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-positive-energy-affine-module: mathematical-premise
  def-sugawara-modes: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  lem-cft-r5-gko-stress-tensor-coset-virasoro: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  lem-cft-r5-restricted-affine-current-fields-are-local: mathematical-premise
justified_by: []
physical_scope: Idealized two-dimensional compact-group GKO coset data built from specified affine current algebras and an embedding; no universal geometric target-space quotient or path-integral construction is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§9.5, printed pp. 152–155, equations (9.39)–(9.43): affine subalgebras, the coset stress tensor, central charge subtraction, and branching."
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§4.1, printed pp. 31–33, especially (4.7)–(4.10): the commutant as the coset chiral fields and its stress tensor; §4.2, printed pp. 33–34, especially (4.13): branching multiplicity spaces as coset modules, selection rules and field identifications. The compatible full-local completion is specified as model data here, not inferred from these chiral statements."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix compact WZW data as in [[def-cft-r5-compact-wzw-model]] for a finite family of compact, connected, simply connected simple target groups $G_i$, with complex simple Lie algebras $\mathfrak g_i$, positive integral levels $k_i$, and basic forms $B_i$ whose long roots have squared length $2$. Let $\widehat{\mathfrak g}=\bigoplus_{i=1}^r\widehat{\mathfrak g_i}_{k_i}$ be the direct sum of affine current algebras. For each $i$, let $V^{k_i}(\mathfrak g_i)$ be the universal affine vertex algebra supplied by [[thm-universal-affine-vertex-algebra]], using the state-field convention of [[def-vertex-algebra-state-field]]. The tensor product $\mathcal U_G=\bigotimes_{i=1}^rV^{k_i}(\mathfrak g_i)$ has the componentwise vacuum and state-field operations.

Let $H$ be a specified compact connected subgroup of $\prod_iG_i$ whose complexified Lie algebra $\mathfrak h$ is simple, and let $\iota:\mathfrak h\to\bigoplus_i\mathfrak g_i$ be the differential of its inclusion, with components $\iota_i$. Choose the invariant form $B_{\mathfrak h}$ normalized so long roots have squared length $2$. For each component supply its embedding index $I_i$ defined by $B_i(\iota_i x,\iota_i y)=I_iB_{\mathfrak h}(x,y)$. The induced denominator level is $\ell=\sum_i I_i k_i$, the central coefficient in the diagonal current bracket $J^{\mathfrak h}_x(n)=\sum_iJ^{(i)}_{\iota_i x}(n)$.

Choose a numerator full-local package exactly as in [[def-cft-r5-full-local-cft-data]], with state space $\mathcal H_G$, common dense invariant domain $\mathcal D_G$, field-label space $\mathcal F_G$, state-field map $\sigma_G$, and local fields $Y_G$. Let $\mathcal F_G^{\mathrm{hol}}$ be the subspace of labels whose local fields depend holomorphically on $z$ on their declared domains. The **numerator chiral algebra** is a specified complex vertex algebra $\mathcal A_G$ in the state-field convention, together with a vertex-algebra homomorphism $\Phi_G:\mathcal U_G\to\mathcal A_G$. This includes the exact choice of ambient algebra and its current-generated subalgebra; if the choice is a quotient or an extension, specify its kernel or extension map. Specify an injective linear map $\jmath_G:\mathcal A_G\to\mathcal F_G^{\mathrm{hol}}$ preserving the vacuum, translation, every vertex product, and the corresponding local OPE.

For each numerator sector $V^G_\lambda$, the common domain $\mathcal D_G$, and the regular module $\mathcal A_G$, supply ordinary $\mathcal A_G$-module structures in the sense of [[def-vertex-algebra-module]], compatible with $\jmath_G$ and the full-local field map: on $\mathcal D_G$ and each sector, the field in the package labelled by $\jmath_G(a)$ is the same operator-valued distribution as the module field of $a$. Require that for each $x\in\mathfrak g_i$, the local field labelled by $\jmath_G\Phi_G(\mathbf1\otimes\cdots\otimes x_{-1}\mathbf1\otimes\cdots\otimes\mathbf1)$ is exactly the left WZW current field identified in [[def-cft-r5-compact-wzw-model]], and its modes on $\mathcal D_G$, every $V^G_\lambda$, and the regular module $\mathcal A_G$ are exactly $J^{(i),x}_n$. The restrictions to the numerator current algebras are required to be restricted affine-current modules: for each fixed vector and current, all sufficiently large positive modes annihilate that vector. These homomorphisms, field identifications, and module actions are part of the model data, not consequences of naming a numerator chiral algebra.

Specify a vertex-algebra homomorphism $\Phi_H:V^\ell(\mathfrak h)\to\mathcal A_G$ whose current generator is
$$\Phi_H(x_{-1}\mathbf1)=\sum_{i=1}^r\Phi_G(\mathbf1\otimes\cdots\otimes(\iota_i x)_{-1}\mathbf1\otimes\cdots\otimes\mathbf1).$$
The denominator module action is the restriction along $\Phi_H$; its modes on $\mathcal D_G$, $\mathcal A_G$, and every selected numerator module must be exactly $J^{\mathfrak h}_x(n)$. These restrictions are restricted affine-current modules of level $\ell$. Give the analogous right-moving chiral algebra, embedding, and module data for a full left-right coset.

Require $k_i+h_i^\vee\ne0$ and $\ell+h_{\mathfrak h}^\vee\ne0$. Let $\omega_{\mathfrak h}=\frac{1}{2(\ell+h_{\mathfrak h}^\vee)}\sum_a (e_a)_{-1}(e_a)_{-1}\mathbf1\in V^\ell(\mathfrak h)$ for a $B_{\mathfrak h}$-orthonormal basis $(e_a)$. Supply the numerator Sugawara states $\omega_i\in\mathcal A_G$ as images of the factor Sugawara states, and set $\omega_H=\Phi_H(\omega_{\mathfrak h})$ for the embedded denominator Sugawara state. Normalize their vertex fields as $Y_{\mathcal A_G}(\omega_i,z)=\sum_nL^{(i)}_nz^{-n-2}$ and $Y_{\mathcal A_G}(\omega_H,z)=\sum_nL^H_nz^{-n-2}$. Their actions on $\mathcal A_G$ and each selected numerator module must be the Sugawara modes of [[def-sugawara-modes]]. Set $\omega_G=\sum_i\omega_i$, $T_G(z)=\sum_iY_{\mathcal A_G}(\omega_i,z)$, $T_H(z)=Y_{\mathcal A_G}(\omega_H,z)$, and $L^G_n=\sum_iL^{(i)}_n$. Define the coset stress state and modes by $\omega_{G/H}=\omega_G-\omega_H$, $Y_{\mathcal A_G}(\omega_{G/H},z)=\sum_nL^{G/H}_nz^{-n-2}$, and $L^{G/H}_n=L^G_n-L^H_n$. The lemma on this page applies on the common restricted modules and on the regular module $\mathcal A_G$; it proves the Virasoro relation and commutation with every embedded denominator-current mode under the specified noncritical hypotheses. By the field-mode and OPE compatibility just imposed, those vanishing mode commutators are exactly the absence of singular terms in $Y_{\mathcal A_G}(\omega_{G/H},z)J^{\mathfrak h}_x(w)$. Thus $\omega_{G/H}$ lies in the explicitly defined commutant
$$\operatorname{Com}_{\mathcal A_G}(\Phi_H(V^\ell(\mathfrak h)))=\{a\in\mathcal A_G:J^{\mathfrak h}_x(n)a=0\text{ for every }x\in\mathfrak h\text{ and }n\ge0\}.$$
Equivalently, its local field has regular OPE with every embedded denominator current. Its central charge is that of [[lem-cft-r5-gko-stress-tensor-coset-virasoro]].

For each selected numerator module $V^G_\lambda$, specify its denominator-module decomposition, for example $V^G_\lambda\!\downarrow_{V^\ell(\mathfrak h)}\cong\widehat{\bigoplus}_{\nu\in S_\lambda}B_{\lambda,\nu}\widehat{\otimes}V^H_\nu$. Here $V^H_\nu$ is a specified denominator module and $B_{\lambda,\nu}$ is the corresponding multiplicity space; if restriction is not semisimple, give the actual replacement decomposition and topology. The sets $S_\lambda$ are the selection rules and must be stated. Supply any field-identification equivalence relation on the pairs $(\lambda,\nu)$, its fixed-point resolutions into resolved sectors, and the chosen left-right pairing; none is inferred from the notation $G/H$.

Write $\mathcal C_L=\operatorname{Com}_{\mathcal A_G}(\Phi_H(V^\ell(\mathfrak h)))$ and let $\mathcal C_R$ be the commutant in the specified right-moving numerator algebra. Supply their inherited vertex-algebra structures and the following compatible branching actions. If $d_{\lambda,\nu}:B_{\lambda,\nu}\widehat\otimes V^H_\nu\to V^G_\lambda$ denotes a summand inclusion in the specified decomposition, give $B_{\lambda,\nu}$ a $\mathcal C_L$-module field $Y^B_{\lambda,\nu}$ such that, on the declared common algebraic domains, for every $a\in\mathcal C_L$,
$$Y_{V^G_\lambda}(a,z)d_{\lambda,\nu}(b\otimes v)=d_{\lambda,\nu}\bigl(Y^B_{\lambda,\nu}(a,z)b\otimes v\bigr).$$
Thus the commutant acts on the multiplicity factor and as the identity on the denominator factor, with no action mixing denominator labels. Require the analogous identity for $\mathcal C_R$ and the right branching spaces. The module structures obey the vacuum, lower-truncation and module identities of [[def-vertex-algebra-module]]. If the chosen restriction uses a nonsemisimple replacement, specify its actual multiplicity objects and action-intertwining maps instead of the displayed summand inclusions; do not infer such a decomposition. Every field identification and fixed-point resolution used below must intertwine these actions, so each actual resolved branching sector has a specified left or right commutant-module action.

Choose the full-local package for $\mathcal H_{G/H}$ with notation $\mathcal D_{G/H},\mathcal F_{G/H},\sigma_{G/H},Y_{G/H},L_n^{\mathrm{loc}},\bar L_n^{\mathrm{loc}}$. Specify injective linear field-label maps
$$\jmath_L:\mathcal C_L\longrightarrow\mathcal F_{G/H}^{\mathrm{hol}},\qquad \jmath_R:\mathcal C_R\longrightarrow\mathcal F_{G/H}^{\mathrm{anti}},$$
where the two target spaces consist of labels with fields depending only on $z$ and only on $\bar z$, respectively. Both maps preserve the vacuum label, translation, all vertex products and the corresponding local OPE, with $\sigma_{G/H}\jmath_L(\mathbf1)=\sigma_{G/H}\jmath_R(\mathbf1)=\Omega_{G/H}$. Require compatible commuting $\mathcal C_L$- and $\mathcal C_R$-module actions on $\mathcal D_{G/H}$. On a selected resolved paired sector $\mathcal B_p^L\otimes\mathcal B_q^R$, with its separately specified multiplicity factor, these actions are $Y_{\mathcal B_p^L}(a,z)\otimes I$ and $I\otimes Y_{\mathcal B_q^R}(\bar a,\bar z)$, acting trivially on the multiplicity factor. They extend to the declared completed state space on its common domain. For all $a\in\mathcal C_L$, $\bar a\in\mathcal C_R$, require
$$Y_{G/H}(\jmath_L(a);z,\bar z)=Y^L_{\mathcal D_{G/H}}(a,z),\qquad Y_{G/H}(\jmath_R(\bar a);z,\bar z)=Y^R_{\mathcal D_{G/H}}(\bar a,\bar z).$$
These are equalities of the weak local-field distributions and their radial mode expansions on the package's declared domains, not merely equalities of characters.

Finally require that these maps identify the coset stress states with the stress fields of this very full-local package:
$$Y_{G/H}(\jmath_L(\omega_{G/H});z,\bar z)=\sum_{n\in\mathbb Z}L_n^{\mathrm{loc}}z^{-n-2},\qquad Y_{G/H}(\jmath_R(\bar\omega_{G/H});z,\bar z)=\sum_{n\in\mathbb Z}\bar L_n^{\mathrm{loc}}\bar z^{-n-2}.$$
On each branching space these modes are exactly those induced by $L_n^G-L_n^H$ (and the right-moving difference), and on $\mathcal D_{G/H}$ they are the corresponding resolved-sector actions, with identity on all other factors. In particular the package central charges are the respective Sugawara central-charge differences. The field maps, compatible branching actions and stress-field equalities are requirements on the chosen completion; the chiral coset lemma supplies the Virasoro relations, not the existence of such a full-local completion.

The full coset state space $\mathcal H_{G/H}$ is a specified direct sum or direct integral of the resolved left and right branching multiplicity spaces with stated multiplicities, a unique vacuum pair of multiplicity one, the topology, and a common domain. It must satisfy the full local state-space/OPE conditions, including local fields and crossed-channel equality. A full-CFT record also specifies its left-right torus pairing and either a convergent torus trace or an explicitly declared regularization. If modular invariance is claimed, the associated torus amplitude must be invariant under $\tau\mapsto(a\tau+b)/(c\tau+d)$ and its conjugate for every integer matrix with $ad-bc=1$. Unitarity and reflection positivity require their own inner-product, adjoint, and positivity data. Higher-genus sewing is additional data or a separate theorem.

## Definition references

[[def-cft-r5-compact-wzw-model]]

[[def-cft-r5-full-local-cft-data]]

[[def-positive-energy-affine-module]]

[[def-sugawara-modes]]

[[def-dual-coxeter-number-for-normalized-form]]

[[thm-sugawara-modes-satisfy-virasoro]]

[[thm-universal-affine-vertex-algebra]]

[[def-vertex-algebra-state-field]]

[[def-vertex-algebra-module]]

[[lem-cft-r5-restricted-affine-current-fields-are-local]]

[[lem-cft-r5-gko-stress-tensor-coset-virasoro]]

## Remarks

This is the algebraic affine coset interface. A gauged WZW action, gauge fixing, anomaly cancellation, and a measure on fields are not identified with these current-algebra data. A central-charge calculation alone supplies neither the branching modules nor a full local coset CFT.
