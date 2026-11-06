---
id: pthm-freed-witten-dp-brane-anomaly-condition
kind: physics-theorem
title: "Freed–Witten Dp-Brane Anomaly Condition"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
category: string-theory
physical_scope: "Necessary integral topological anomaly-cancellation condition in the source's oriented Type II D-brane boundary model. The family-index and worldsheet anomaly analysis is source-reported; the local deduction relates its gerbe condition to tangent and normal W3 classes. It does not assert line-level sufficiency, ordinary Chan–Paton bundles for nonzero H, orientifold or Type I validity, or a DBI equation."
deps:
  - def-supergravity-conventions-and-normalizations
  - def-singular-cohomology-with-coefficients
  - def-bockstein-connecting-operation
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-integral-third-stiefel-whitney-class
  - lem-w3-tangent-normal-equality-in-spin-ambient
  - thm-naturality-of-stiefel-whitney-classes
  - def-axiom-of-choice
  - thm-gts-dixmierdouady-class-and-gerbe-classification
  - def-gts-good-cover-singular-cech-comparison-input
  - post-fw-chan-paton-gerbe-stable-isomorphism
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-bockstein-connecting-operation: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-integral-third-stiefel-whitney-class: mathematical-premise
  lem-w3-tangent-normal-equality-in-spin-ambient: mathematical-premise
  thm-naturality-of-stiefel-whitney-classes: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-gts-dixmierdouady-class-and-gerbe-classification: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
  post-fw-chan-paton-gerbe-stable-isomorphism: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed and Edward Witten, Anomalies in String Theory with D-Branes, hep-th/9907189v2"
      url: "https://arxiv.org/pdf/hep-th/9907189v2"
      locator: "Introduction; §1 equation (1.12) and footnote 3; §§5–6, especially equations (6.8)–(6.9), PDF pp. 2–3, 8, 32–35."
    - title: "Alan L. Carey, Stuart Johnson, and Michael K. Murray, Holonomy on D-Branes, hep-th/0204199v3"
      url: "https://arxiv.org/pdf/hep-th/0204199v3"
      locator: "§§2 and 4.4, Proposition 4.4, PDF pp. 2–3 and 17–18: bundle-gerbe anomaly action and the Dixmier–Douady criterion for stable isomorphism."
verification:
  precheck: pending
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

## Statement

Let $Y$ be a finite-dimensional Hausdorff second-countable smooth, oriented, time-oriented ten-dimensional Lorentzian spacetime with metric of signature $(-,+,\ldots,+)$. Assume the supplied $\mathrm{Spin}^+(1,9)$ lift of the proper-orthochronous orthonormal-frame bundle defined in the preceding postulate: a two-to-one equivariant map of principal bundles induced by the connected double cover $\mathrm{Spin}^+(1,9)\to SO^+(1,9)$. In this item a “spin target” also includes the explicit data $w_1(TY)=w_2(TY)=0$; neither the lift's existence nor a characteristic-class obstruction theorem is being proved. Let $i:Q\hookrightarrow Y$ be a smooth oriented embedded Type II D-brane worldvolume of dimension $p+1$, $0\leq p\leq9$. Choose an auxiliary positive-definite bundle metric on $i^*TY$, and let $\nu$ be the orthogonal normal bundle, equivalently the quotient $i^*TY/TQ$, with its induced orientation. Assume the source's oriented Type II worldsheet boundary model on oriented Riemann surfaces $\Sigma$ whose boundary maps to $Q$.

Let $\mathcal G_B$ be the NS $B$-field bundle gerbe on $Y$; on a local potential patch write its curvature as $H_3=dB_2$, following [[def-supergravity-conventions-and-normalizations]]. Its **Dixmier–Douady class** $\mathrm{DD}(\mathcal G_B)=\zeta_B\in H^3(Y;\mathbb Z)$ is the integral characteristic class, including torsion. No conversion between the de Rham form $H_3$ and the integral class $\zeta_B$ is used here. Let $\mathcal G_\nu$ be the source's anomaly gerbe for the worldsheet Pfaffian, with $\mathrm{DD}(\mathcal G_\nu)=W_3(\nu)$. A **stable isomorphism** between bundle gerbes $\mathcal G_1,\mathcal G_2$ means a trivialization of $\mathcal G_1^*\otimes\mathcal G_2$, as in Carey–Johnson–Murray, Definition 4.3. If global anomaly cancellation is implemented by the source's topological Chan–Paton $A$-field, such a stable isomorphism between $i^*\mathcal G_B$ and $\mathcal G_\nu$ is required. Then the necessary topological condition is
$$
i^*\zeta_B=W_3(\nu)=W_3(TQ),
$$
equivalently
$$
i^*\zeta_B+W_3(TQ)=0\quad\text{in }H^3(Q;\mathbb Z).
$$
Here $W_3(E)=\widetilde\beta_2(w_2(E))$ is the integral Bockstein class of an oriented real bundle $E$. This is a global anomaly condition, not a Dirac–Born–Infeld equation.

## Statement references

[[def-supergravity-conventions-and-normalizations]]

[[def-integral-third-stiefel-whitney-class]]

[[lem-w3-tangent-normal-equality-in-spin-ambient]]

[[post-fw-chan-paton-gerbe-stable-isomorphism]]

[[thm-gts-dixmierdouady-class-and-gerbe-classification]]

## Facts & Assumptions

**Given:** Full AC; finite-dimensional Hausdorff second-countable smooth target and worldvolume manifolds of CW homotopy type, good covers and numerable tangent/normal bundles; the supplied Čech-to-singular comparison data of [[def-gts-good-cover-singular-cech-comparison-input]] on $Y$ and $Q$; local sections for the bundle-gerbe submersions; an oriented, time-oriented ten-dimensional Lorentzian target $Y$ with a supplied $\mathrm{Spin}^+(1,9)$ lift and explicit characteristic-class data $w_1(TY)=w_2(TY)=0$; a smooth oriented embedded worldvolume $i:Q\hookrightarrow Y$ of dimension $p+1$, an auxiliary positive-definite metric on $i^*TY$, its orthogonal normal bundle $\nu\cong i^*TY/TQ$, an integral NS gerbe $\mathcal G_B$, and the oriented Type II boundary-model hypothesis with oriented worldsheets $\Sigma$ and boundary maps to $Q$. The target characteristic-class vanishing is explicit; no obstruction theorem is inferred.

[F1] [[thm-gts-dixmierdouady-class-and-gerbe-classification]]: under its smooth-manifold, good-cover, local-section and comparison-input hypotheses, the Dixmier–Douady class is natural under pullback and stable-equivalence classes of topological gerbes are classified by $H^3(-;\mathbb Z)$.

[F2] [[def-supergravity-conventions-and-normalizations]]: on a local potential patch $H_3=dB_2$, fixing the differential-form convention.

[F3] [[def-integral-third-stiefel-whitney-class]]: $W_3(E)=\widetilde\beta_2(w_2(E))$ in integral singular cohomology.

[F4] [[lem-w3-tangent-normal-equality-in-spin-ambient]]: for oriented bundles $E,F$ with $w_2(E\oplus F)=0$, $W_3(E)=W_3(F)$ and $2W_3(E)=0$.

[F5] [[thm-naturality-of-stiefel-whitney-classes]]: Stiefel–Whitney classes commute with pullback.

[A1] [[post-fw-chan-paton-gerbe-stable-isomorphism]]: the oriented Type II boundary model requires a stable isomorphism between the restricted $B$-field gerbe and the Pfaffian anomaly gerbe of class $W_3(\nu)$.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the full choice hypothesis is used by the imported Bockstein and Stiefel–Whitney suppliers.

[L1] [[def-gts-good-cover-singular-cech-comparison-input]]: this item specifies natural good-cover Čech-to-singular comparison maps as supplied data; it does not prove their existence.

## Proof

1.1 By [F2], $H_3=dB_2$ is only the local differential-form convention; the class $\zeta_B$ in this argument is the integral Dixmier–Douady class. By [A1], the two underlying topological gerbes over $Q$ are stably equivalent. The supplier theorem [F1], applied under the stated good-cover comparison input [L1], identifies their singular Dixmier–Douady classes and gives the pullback class $i^*\zeta_B$ for $i^*\mathcal G_B$. Since $\mathrm{DD}(\mathcal G_\nu)=W_3(\nu)$, this yields $i^*\zeta_B=W_3(\nu)$ without a de Rham-period conversion. [given, A1, F1, F2, L1]

1.2 Give $i^*TY$ a positive-definite bundle metric and let $L$ be the orthogonal complement of $TQ$. It is a smooth subbundle, and the quotient map identifies $L\cong\nu$, so $i^*TY\cong TQ\oplus\nu$. Naturality [F5] and the explicit hypothesis $w_2(TY)=0$ give $w_2(TQ\oplus\nu)=w_2(i^*TY)=i^*w_2(TY)=0$. Both summands are oriented, so [F4] applies and gives $W_3(TQ)=W_3(\nu)$ and $2W_3(TQ)=0$. [given, F4, F5, A2, algebra]

2.1 Substitute $W_3(\nu)=W_3(TQ)$ from step 1.2 into step 1.1. Since step 1.2 also gives $2W_3(TQ)=0$, the equality $i^*\zeta_B=W_3(TQ)$ implies $i^*\zeta_B+W_3(TQ)=2W_3(TQ)=0$. This proves both displayed forms with the source $B$-field sign convention, without discarding torsion. [F3, A2, step 1.1, step 1.2, algebra] ∎

## Remarks

Freed–Witten's equation (1.12) is sufficient for triviality of the transgressed Pfaffian–$B$ line by itself; its footnote does not identify that line-only statement as necessary. The necessity used here is instead the source's topological Chan–Paton gerbe-isomorphism requirement in §6. The sourced family-index/anomaly calculation is not reconstructed locally, and equality of characteristic classes is not asserted to settle every differential or analytic anomaly condition.

When $\zeta_B$ is nonzero, the Chan–Paton data are twisted by the gerbe; the proof does not replace them by an ordinary line bundle. Freed and Witten explicitly exclude orientifolds and Type I strings, so this item makes no claim for either case.

The DD-class conversion in step 1.1 is conditional on the exact current supplier [[thm-gts-dixmierdouady-class-and-gerbe-classification]]. Its Step 1 record is escalated because its proof depends on the supplied Čech-to-singular comparison data [L1]; the comparison input is assumed here and is not proved locally. Accordingly this item remains escalated and does not treat the GTS theorem as proved.
