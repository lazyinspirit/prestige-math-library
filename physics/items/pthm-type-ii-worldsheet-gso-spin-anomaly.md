---
id: pthm-type-ii-worldsheet-gso-spin-anomaly
kind: physics-theorem
title: "Type Ii Worldsheet GSO Spin Anomaly"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 5
domain: physics
physical_scope: "Critical ten-dimensional Type II closed pure NS–NS worldsheet, no orientifold, with fermions coupled to the target tangent bundle and canceled local anomaly polynomial. The smooth ten-dimensional criterion uses the source-reported Type II anomaly evaluation; the orbifold clause is restricted to the source's light-cone product target R^{1,1}×[Y/G] with an eight-dimensional transverse target Y."
deps:
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
  - thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - prop-first-stiefel-whitney-class-classifies-orientability
  - def-axiom-of-choice
dependency_roles:
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
  thm-gts-spin-and-spin-c-obstruction-and-torsor-classification: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  prop-first-stiefel-whitney-class-classifies-orientability: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matilda Delgado, Lorenz Eberhardt, and Marija Tomašević, What makes spacetime spin in string theory?, arXiv:2606.18380v2"
      url: "https://arxiv.org/pdf/2606.18380v2"
      locator: "Abstract; §1 printed pp. 1–4; §4.1 printed pp. 18–20 and §4.3 printed pp. 22–23; light-cone NS–NS assumptions, eta class, smooth Spin condition, and equivariant orbifold criterion."
    - title: "Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1"
      url: "https://arxiv.org/pdf/2608.30774v1"
      locator: "§§2.2-3.1 printed pp. 6-11; Spin×Z2 structure, anomaly class via Anderson dual/eta invariant, and mod-8 versus mod-16 GSO distinction."
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

Assume full AC. Let $\Sigma$ be a closed oriented smooth two-dimensional worldsheet with the separate left/right spin structures used by the chiral GSO gauging, and let $\phi:\Sigma\to X$ be a smooth map to a Hausdorff second-countable smooth ten-dimensional target $X$. Choose an auxiliary smooth positive-definite metric on $X$ solely to define the orthonormal frame bundle of $TX$. The worldsheet fermions are sections of the corresponding chiral worldsheet spinor bundles tensored with $\phi^*TX$. In a critical Type II $N=(1,1)$ NS–NS sigma-model background with no orientifold, once the perturbative local anomaly polynomial cancels between the two chiralities, the source-reported global GSO anomaly vanishes exactly when $w_1(TX)=w_2(TX)=0$, equivalently when $X$ is orientable and the oriented orthonormal frame bundle of $TX$ admits a lift to $\operatorname{Spin}(10)$.

For the source's light-cone orbifold presentation, take the ten-dimensional target to be $\mathbb R^{1,1}\times[\widehat Y/G]$, where $\widehat Y$ is an eight-dimensional smooth transverse target and the discrete group $G$ acts trivially on $\mathbb R^{1,1}$. Under the quotient and Borel admissibility data below, the source-reported anomaly criterion is $w_1(E_G)=w_2(E_G)=0$ for the equivariant transverse tangent bundle $E_G$; these are the first two equivariant Stiefel–Whitney classes, not the classes of an unspecified coarse quotient. The theorem does not cover RR backgrounds, orientifolds, or general ten-dimensional orbifold targets outside this light-cone product case.

## Statement references

[Matilda Delgado, Lorenz Eberhardt, and Marija Tomašević, What makes spacetime spin in string theory?, arXiv:2606.18380v2](https://arxiv.org/pdf/2606.18380v2)

[Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1](https://arxiv.org/pdf/2608.30774v1)

## Facts & Assumptions

**Given:** A smooth ten-dimensional target $X$ with an auxiliary smooth positive-definite metric, an oriented closed Type II NS–NS worldsheet with tangent fermions in $\phi^*TX$, canceled local anomaly polynomial, and the source-reported global anomaly input [A1]. In the orbifold clause the input also includes the quotient presentation and admissible Borel bundle specified in [F5].

[F1] [[def-rns-spin-structures-and-sectors]] fixes separate left/right spin structures and the NS/R sectors for the two chiral worldsheet fermion systems.

[F2] [[def-rns-gso-projection]] fixes the flat-sector chiral GSO projector conventions and IIA/IIB relative chirality choices. Its stated scope does not prove curved-target gauging, modular invariance, or anomaly cancellation; the existence and anomaly of the gauged sigma-model in this item belong to the Given data and [A1].

[F3] [[prop-first-stiefel-whitney-class-classifies-orientability]]: for the stated smooth-manifold scope, $w_1(TX)=0$ exactly when $X$ is orientable.

[F4] [[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]: for an oriented real bundle, a Spin lift exists exactly when $w_2=0$, with full AC and the stated smooth-manifold base hypotheses; this mathematical criterion is proved using the Spin and determinant-reduction suppliers.

[F5] Fix the orbifold presentation rather than only its coarse space: $G$ is a specified discrete group, $\widehat Y$ a Hausdorff second-countable smooth eight-dimensional manifold, and $\rho:G\times\widehat Y\to\widehat Y$ a specified smooth proper action with finite stabilizers, preserving the stated NS–NS sigma-model background. The tangent action is
$$g\cdot(y,v)=(\rho_g(y),d\rho_g|_y(v)).$$
Choose a contractible free right $G$-space $EG$ for which $B_G=EG\times_G\widehat Y$ is a paracompact Hausdorff CGWH space of CW homotopy type and
$$E_G=EG\times_G T\widehat Y\longrightarrow B_G$$
is a numerable real rank-eight bundle. These admissibility conditions are explicit data of this clause, not a consequence of the smooth-manifold Spin supplier. The quotient relation is $(e g,y,v)\sim(e,\rho_g(y),d\rho_g(v))$. Put $H_G^i(\widehat Y;\mathbb F_2)=H^i(B_G;\mathbb F_2)$ and define $w_i^G(T\widehat Y)=w_i(E_G)$ by [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]. This defines the classes under that supplier's exact AC, base and numerability hypotheses. The bundle is not $T(B_G)$; no tangent bundle of the infinite-dimensional Borel base is used. No freeness of the action on $\widehat Y$ is required. The group $G$ is the target orbifold group, distinct from the chiral $\mathbb Z_2$ gauged in [F2].

[A1] Kawahira–Kawanago–Saito–Wada, §3.1, evaluates the global Type II anomaly for the smooth ten-dimensional target and identifies its mixed anomaly character by $(w_1(TX),w_2(TX))$; under the stated cancellation of the local anomaly polynomial it vanishes exactly when both classes vanish. Delgado–Eberhardt–Tomašević, §§4.1 and 4.3, gives the complementary light-cone transverse-bundle calculation and, for the orbifold data of [F5], reports that the anomaly vanishes exactly when $w_1(E_G)=w_2(E_G)=0$. The latter source's covariant discussion is not used to claim a general ten-dimensional orbifold theorem. Both are source-reported physical anomaly inputs, not consequences of the Borel construction or local deductions in this item. Their bordism-group computation, reduced-eta calculation, and physical anomaly-line identification are not locally supplied by the current GTS carriers.

[A2] Full AC is assumed as defined in [[def-axiom-of-choice]], as required by [F3]–[F5].

## Proof

1.1 By the Given data and [A1], the anomaly under consideration is the residual global anomaly of the separate chiral GSO gauging after the local polynomial has canceled; [F1]–[F2] fix sector conventions only. The restrictions to pure NS–NS backgrounds and no orientifold remove the RR and unoriented sectors from this claim. Thus [A1] applies to the pullback bundle $TX$ and says cancellation is equivalent to $w_1(TX)=w_2(TX)=0$. [given, F1, F2, A1]

2.1 By [F3], the first equality is equivalent to orientability. Once oriented, the auxiliary metric makes $TX$ an oriented Euclidean bundle of rank ten over the Hausdorff second-countable smooth manifold $X$. The hypotheses of [F4] now hold, so $w_2(TX)=0$ is equivalent to a lift of this orthonormal frame bundle to $\operatorname{Spin}(10)$. Hence the smooth-target condition is exactly that $X$ is orientable and admits the stated Spin structure. [F3, F4, A2, step 1.1, algebra]

3.1 For the specified light-cone orbifold presentation, [F5] defines the rank-eight equivariant transverse tangent bundle $E_G$ and its classes in $H^*(B_G;\mathbb F_2)$. Substituting these classes into the matching orbifold input in [A1] gives exactly the stated criterion. This is a conditional use of [A1], not a deduction of the physical anomaly from characteristic-class definitions. In particular [F4] is not applied to $B_G$, which need not be a finite-dimensional smooth manifold, and no general equivariant Spin-lift theorem is inferred here. [F5, A1] ∎

## Remarks

The anomaly equivalence in the first and third steps remains conditional on the exact source-reported bordism/eta class [A1]. The ordinary smooth-target Spin criterion is supplied by the proved GTS classification theorem; it does not compute the physical anomaly. The Pontryagin–Thom supplier is for normal Spin bordism over an independent $BG$, and the Dai–Freed supplier is for complex Spin Dirac determinant lines; neither computes this mixed Spin$\times\mathbb Z_2$ physical anomaly. The Borel bundle and its characteristic classes are defined explicitly in [F5]; a theorem identifying equivariant Spin lifts with a classifying-space lifting problem, and the source-specific physical orbifold anomaly evaluation, are not locally supplied. The two bordism/anomaly-line results are therefore not declared dependencies of this argument. The flat-sector conventions in [F2] specify the meaning of the chiral projection only; they do not prove a curved-target gauging or the anomaly evaluation [A1].
