---
id: def-gts-pardon-implicit-atlas-and-vfc-package
kind: definition
title: Pardon implicit atlases and virtual fundamental class package
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - def-gts-pardon-gromov-topology-on-stable-map-moduli
  - def-global-cech-cohomology-directed-limit
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-pardon-gromov-topology-on-stable-map-moduli: mathematical-premise
  def-global-cech-cohomology-directed-limit: mathematical-premise
axiom_use: "Full AC is retained for the refinement-colimit Čech and VFC clauses: it well-orders open covers and selects refinement functions in the cited cohomology convention. The preceding finite-group atlas axioms do not themselves assert a choice principle."
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
      url: https://arxiv.org/pdf/1309.2370v6
      locator: §§1.1–1.3, Definitions 3.1.1–3.2.3 and 4.1.1–4.1.3, Definition 5.1.1, geometric regularity Definition 9.2.5, and §9.3 Definition 9.3.1.
    - title: Dietmar Salamon, Lectures on Floer Homology, IAS/Park City Graduate Summer School notes (1997)
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §4.2, pp. 45–51; stable-map topology and the regular zero-dimensional genus-zero case.
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

Let $Z$ be compact Hausdorff and $d\in\mathbb Z$. A Pardon implicit atlas of virtual dimension $d$ has an index set $\mathcal A$ and the following data. For each $\alpha\in\mathcal A$ choose a finite group $\Gamma_\alpha$ and a finite-dimensional real $\Gamma_\alpha$-representation $E_\alpha$. Put $\Gamma_I=\prod_{\alpha\in I}\Gamma_\alpha$ and $E_I=\bigoplus_{\alpha\in I}E_\alpha$. For each finite $I\subset\mathcal A$ choose a Hausdorff $\Gamma_I$-space $Z_I$, with $Z_\varnothing=Z$, and compatible equivariant component maps $s_\alpha:Z_I\to E_\alpha$. Write $s_K=(s_\alpha)_{\alpha\in K}$ on any thickening containing $K$. For $I\subset J$ choose a $\Gamma_I$-invariant open footprint $U_{IJ}\subset Z_I$ and a $\Gamma_J$-equivariant map $\psi_{IJ}:s_{J\setminus I}^{-1}(0)\subset Z_J\to U_{IJ}$, where $\Gamma_J$ acts on $U_{IJ}$ through its projection to $\Gamma_I$. Finally choose $\Gamma_I$-invariant regular loci $Z_I^{\mathrm{reg}}\subset Z_I$.

The compatibility axioms are $\psi_{II}=\mathrm{id}$, $\psi_{IJ}\psi_{JK}=\psi_{IK}$, $s_I\psi_{IJ}=s_I$, $U_{II}=Z_I$, $U_{IJ_1}\cap U_{IJ_2}=U_{I,J_1\cup J_2}$, and $\psi_{IJ}^{-1}(U_{IK})=U_{JK}\cap s_{J\setminus I}^{-1}(0)$, with all maps restricted to their defined domains and nested indices as appropriate. The footprint map induces a homeomorphism $s_{J\setminus I}^{-1}(0)/\Gamma_{J\setminus I}\cong U_{IJ}$.

The regularity axioms say that $Z_I^{\mathrm{reg}}$ is open, $\psi_{IJ}^{-1}(Z_I^{\mathrm{reg}})\subset Z_J^{\mathrm{reg}}$, and the RELATIVE group $\Gamma_{J\setminus I}$ acts freely on that preimage. Near every point of $\psi_{IJ}^{-1}(Z_I^{\mathrm{reg}})$, the EXTRA obstruction map $s_{J\setminus I}:Z_J\to E_{J\setminus I}$ is topologically the coordinate projection $\mathbb R^{d+\dim E_I}\times\mathbb R^{\dim E_{J\setminus I}}\to\mathbb R^{\dim E_{J\setminus I}}$. Taking $I=J$ makes $Z_I^{\mathrm{reg}}$ a topological manifold of dimension $d+\dim E_I$. Finally the regular zero loci cover the base: $Z=\bigcup_I\psi_{\varnothing I}(s_I^{-1}(0)\cap Z_I^{\mathrm{reg}})$. An empty regular locus is allowed. A smooth implicit atlas additionally specifies compatible smooth structures, smooth group actions and section maps, and smooth versions of these relative submersion and zero-set local-diffeomorphism conditions.

In particular, the definition does NOT require $s_I:Z_I^{\mathrm{reg}}\to E_I$ transverse to zero, nor the full $\Gamma_I$ action free. In the stable-map application, Pardon's geometric regular locus instead requires surjectivity of the vertical linearization of the THICKENED Cauchy–Riemann equation in map AND obstruction directions, together with trivial automorphisms of the full auxiliary-marked thickened tuple. This is different from transversality of its obstruction-parameter recording map $s_I$ or trivial stabilizers for the entire covering-group action on isomorphism classes.

For an atlas with boundary specify invariant closed subsets $\partial Z_I\subset Z_I$, with $\partial Z_\varnothing=\partial Z$, compatible with the zero-set footprint maps. The local projection model may also be $\mathbb R_{\ge0}\times\mathbb R^{d+\dim E_I-1}\times\mathbb R^{\dim E_{J\setminus I}}\to\mathbb R^{\dim E_{J\setminus I}}$, with $\partial Z_J^{\mathrm{reg}}$ its boundary. Restricting to $\partial Z_I$ gives a dimension-$(d-1)$ boundary atlas.

Over $\mathbb Q$, let $o_E=H_{\dim E}(E,E\setminus0;\mathbb Q)$ be the orientation line of a real vector space, and let $o_{Z_I^{\mathrm{reg}}}$ be the rank-one local orientation sheaf of its regular manifold (the stalk at an interior point $x$ is $H_{d+\dim E_I}(Z_I^{\mathrm{reg}},Z_I^{\mathrm{reg}}\setminus\{x\};\mathbb Q)$; at boundary points use its extension from the interior). Local orientability requires the stabilizer $(\Gamma_I)_x$ to act trivially on $(o_{Z_I^{\mathrm{reg}}})_x\otimes o_{E_I}^{\vee}$ at every regular zero $x$. The compatible identifications under $\psi_{IJ}$ define the virtual orientation local system $o_Z$. An orientation is a specified trivialization $o_Z\cong\mathbb Q_Z$. For a boundary atlas put $o_{Z\,\mathrm{rel}\,\partial}=j_!j^*o_Z$, where $j:Z\setminus\partial Z\hookrightarrow Z$ and $j_!$ is extension by zero.

For the Čech cohomology and VFC clauses assume full AC: every set-indexed family of nonempty sets admits a choice function. This is used to well-order the open subsets and choose refinement functions in the adopted cohomology convention. The Čech cohomology convention is the refinement colimit of fixed-cover cohomology with its stated sheaf coefficients, as in the refinement-colimit Čech definition. Pardon's rational VFC package assigns a functional
$$[Z]^{\mathrm{vir}}\in\operatorname{Hom}_{\mathbb Q}\!\left(\check H^d(Z;o_Z),\mathbb Q\right)$$
for a boundaryless locally orientable atlas; for a boundary atlas replace $o_Z$ by $o_{Z\,\mathrm{rel}\,\partial}$. Thus this is the dual of degree-$d$ Čech COHOMOLOGY, not the dual of Čech homology. A finite subatlas suffices; compactness and regular-zero coverage give such a finite subatlas, and the source package makes its functional independent of that choice. Rational coefficients invert every finite covering-group order. No reduction of these rational weights to characteristic two is part of this definition. For an oriented ordinary regular manifold the functional is $a\mapsto\langle a,[Z]\rangle$, the usual fundamental class through its pairing, rather than a change in cohomological variance. This item specifies the source package and its types; it does not reconstruct its virtual-cochain comparison, existence, or bordism proof.

For an oriented boundaryless atlas and a continuous map $f:Z\to Y$, its covariant pushforward is the functional $(f_*[Z]^{\mathrm{vir}})(a)=[Z]^{\mathrm{vir}}(f^*a)$ on $\check H^d(Y;\mathbb Q)$. In Pardon's stable-map application with $2g-2+n>0$, the source's canonically trivialized virtual orientation and implicit atlas, when supplied, define $[\overline{\mathcal M}^{\beta}_{g,n}(X,J)]^{\mathrm{vir}}$. The GW functional $GW^P_{g,n,\beta}(X,J)$ is its pushforward under stabilization and evaluation
$$\tau:\overline{\mathcal M}^{\beta}_{g,n}(X,J)\longrightarrow\overline{\mathcal M}_{g,n}\times X^n.$$
This is an analytic/topological cohomology-dual theory, not a Behrend–Fantechi Chow class. Its definition asserts neither construction of the needed geometric atlas nor the Kontsevich–Manin axioms.

## Definition references

[[def-gts-pardon-gromov-topology-on-stable-map-moduli]]

[[def-global-cech-cohomology-directed-limit]]

[[def-axiom-of-choice]]
