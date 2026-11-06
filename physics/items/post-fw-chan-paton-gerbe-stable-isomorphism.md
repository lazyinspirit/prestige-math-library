---
id: post-fw-chan-paton-gerbe-stable-isomorphism
kind: postulate
title: "Freed–Witten Chan–Paton Gerbe Input"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
category: string-theory
physical_scope: "Source-reported topological input for the smooth oriented Type II D-brane boundary model on a supplied Spin+(1,9) ten-dimensional target, with an embedded oriented worldvolume: the Chan–Paton A-field is represented by a stable isomorphism of underlying gerbes. This is a physical formulation input, not a derivation of the family-index anomaly or a line-level iff."
deps:
  - def-integral-third-stiefel-whitney-class
  - def-gts-u-1-bundle-gerbe-with-connection-and-curving
  - def-axiom-of-choice
dependency_roles:
  def-integral-third-stiefel-whitney-class: formulation-prerequisite
  def-gts-u-1-bundle-gerbe-with-connection-and-curving: formulation-prerequisite
  def-axiom-of-choice: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel S. Freed and Edward Witten, Anomalies in String Theory with D-Branes, hep-th/9907189v2"
      url: "https://arxiv.org/pdf/hep-th/9907189v2"
      locator: "Introduction; §1 equation (1.12) and footnote 3; §§5–6, equations (6.8)–(6.9), PDF pp. 1–3, 8, 32–35."
    - title: "Alan L. Carey, Stuart Johnson, and Michael K. Murray, Holonomy on D-Branes, hep-th/0204199v3"
      url: "https://arxiv.org/pdf/hep-th/0204199v3"
      locator: "§2 and §4.4 Definition 4.3, PDF pp. 2–3 and 17–18, for the bundle-gerbe stable-isomorphism convention."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

Let $Y$ be a finite-dimensional Hausdorff second-countable smooth, oriented, time-oriented, ten-dimensional Type II spacetime with Lorentzian metric of signature $(-,+,\ldots,+)$. The proper-orthochronous orthonormal-frame bundle $F^+_{SO}(Y)\to Y$ has fiber at $y\in Y$ the ordered, oriented orthonormal bases $(e_0,\ldots,e_9)$ of $T_yY$ for which $e_0$ is future-directed; its structure group is
$$SO^+(1,9):=\{A\in GL_{10}(\mathbb R):A^T\eta A=\eta,\ \det A=1,\ A\text{ preserves the future timelike cone}\},\qquad \eta=\operatorname{diag}(-1,1,\ldots,1).$$
Write $\mathrm{Spin}^+(1,9)\to SO^+(1,9)$ for the connected two-fold spin covering. Supply a principal $\mathrm{Spin}^+(1,9)$-bundle $\widetilde F\to Y$ and a two-to-one bundle map $\widetilde F\to F^+_{SO}(Y)$ over the identity that is equivariant with respect to this group covering. This lift is supplied target data, not an existence conclusion. Include $w_1(TY)=w_2(TY)=0$ as explicit target data. Let $i:Q\hookrightarrow Y$ be a smooth embedding of a Hausdorff second-countable oriented D-brane worldvolume $Q$ of dimension $p+1$, with $0\leq p\leq9$. Its derivative identifies $TQ$ as a subbundle of $i^*TY$. Choose an auxiliary positive-definite bundle metric on $i^*TY$. Define the oriented normal bundle by $\nu:=i^*TY/TQ$, identified by this metric with the orthogonal complement of $TQ$ in $i^*TY$; its orientation is the one for which the orientations of $TQ$ and $\nu$ induce the orientation of $i^*TY$.

Assume the full Axiom of Choice required by the earlier integral $W_3$ definition and its Bockstein and characteristic-class suppliers.

Here a worldsheet $\Sigma$ is a smooth oriented real two-manifold with boundary, equipped with the source's bordered Riemann-surface structure: complex charts to half-disks with holomorphic transition maps on interiors, extending smoothly to the boundary and inducing the chosen orientation. The boundary model uses smooth maps $f:\Sigma\to Y$ with $f(\partial\Sigma)\subseteq Q$. By a $U(1)$-bundle gerbe with connection and curving, use the earlier bundle-gerbe definition: data $\pi:Z\to M$ given by a surjective smooth submersion with local sections, a Hermitian line bundle $L\to Z^{[2]}$, an associative product $L_{12}\otimes L_{23}\to L_{13}$ over $Z^{[3]}$, a unitary connection preserved by that product, and a curving $C\in\Omega^2(Z)$ satisfying
$$\operatorname{pr}_2^*C-\operatorname{pr}_1^*C=F_\nabla/(2\pi i).$$
Here the stable isomorphism concerns the underlying topological gerbes, with connection and curving forgotten. Let $\mathcal G_B$ be the NS $B$-field bundle gerbe on $Y$, and let $\mathcal G_\nu$ be the worldsheet Pfaffian anomaly gerbe on $Q$, with integral Dixmier–Douady class $W_3(\nu)=\widetilde\beta_2(w_2(\nu))$. Adopt the source's topological Chan–Paton $A$-field input: global cancellation requires a stable isomorphism
$$
i^*\mathcal G_B\simeq\mathcal G_\nu.
$$
A stable isomorphism here means a trivialization of $(i^*\mathcal G_B)^*\otimes\mathcal G_\nu$, following Carey–Johnson–Murray, Definition 4.3. This records the sourced physical model input; it does not itself assert equality of characteristic classes or reconstruct the family-index anomaly proof.

## Postulate references

[[def-integral-third-stiefel-whitney-class]]

[[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]

[[def-axiom-of-choice]]

[Freed and Witten, §§1 and 5–6](https://arxiv.org/pdf/hep-th/9907189v2)

[Carey, Johnson, and Murray, §4.4, Definition 4.3](https://arxiv.org/pdf/hep-th/0204199v3)
