---
id: thm-qftx-finite-groupoid-gluing
kind: theorem
title: "Finite gauge theory gluing is weighted push-pull"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - def-qftx-finite-groupoid-integration
  - def-qftx-finite-homotopy-pullback
  - def-qftx-finite-bordism-state-span
  - lem-qftx-finite-groupoid-push-pull-fubini
  - thm-qftx-finite-bf-topological-invariance
  - lem-qftx-finite-groupoid-gluing-descent
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-groupoid-integration: mathematical-premise
  def-qftx-finite-homotopy-pullback: mathematical-premise
  def-qftx-finite-bordism-state-span: mathematical-premise
  lem-qftx-finite-groupoid-push-pull-fubini: mathematical-premise
  thm-qftx-finite-bf-topological-invariance: mathematical-premise
  lem-qftx-finite-groupoid-gluing-descent: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; all fibers and sums are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§§23.2–23.3, PDF pp. 92–99, for homotopy-pullback composition and finite-group state spaces and amplitudes."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–11, Lemma 2.4 and Theorem 2.13, for automorphism-weighted gluing, cylinder, orientation, and finite state-space sewing."
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§6, PDF pp. 21–23, for bordism functoriality and sewing conventions in the finite-group theory."
verification:
  precheck: pending
---

## Statement

Fix an integer $d\ge1$ and a finite group $G$. The state spaces and linear maps defined for compatible collared triangulated $d$-bordisms compose under gluing: if $M_1:\Sigma_0\to\Sigma_1$ and $M_2:\Sigma_1\to\Sigma_2$, then

$$Z_{M_2\cup_{\Sigma_1}M_1}=Z_{M_2}\circ Z_{M_1}.$$

The cylinder on $\Sigma$ acts as the identity on $V_G(\Sigma)$. Disjoint unions act by tensor products of state spaces and maps. With the weighted inner product from the Definition, orientation reversal swaps incoming and outgoing boundaries and gives the adjoint map; the corresponding state-space involution is pointwise complex conjugation. For a connected closed $d$-manifold $M$, its scalar amplitude is $|\operatorname{Hom}(\pi_1(M),G)|/|G|$.

## Statement references

[[def-qftx-finite-bordism-state-span]]

[[lem-qftx-finite-groupoid-push-pull-fubini]]

[[thm-qftx-finite-bf-topological-invariance]]

[[def-qftx-finite-homotopy-pullback]]

## Facts & Assumptions

**Given:** A fixed dimension $d\ge1$, finite group $G$, compatible boundary triangulations, and composable collared triangulated bordisms.

[F1] [[def-qftx-finite-bordism-state-span]]: $V_G(\Sigma)$ consists of invariant functions on boundary flat-connection isomorphism classes; $Z_M=(r_1)_!r_0^*$ for the restriction span; the pairing weights each class by $1/|\operatorname{Aut}|$.

[F2] [[lem-qftx-finite-groupoid-push-pull-fubini]]: push-pull maps compose through homotopy-pullback spans, and transposing a span gives the adjoint for the weighted inner product.

[F3] [[thm-qftx-finite-bf-topological-invariance]]: $\mathcal C_G(K)$ is equivalent to $\operatorname{Hom}(\pi_1(K),G)//G$; its cardinality is $|\operatorname{Hom}(\pi_1(K),G)|/|G|$ when $K$ is connected.

[F4] [[lem-qftx-finite-groupoid-gluing-descent]]: flat-connection groupoids on glued bordisms are equivalent to the homotopy pullback of the two restriction functors, with a boundary isomorphism included.

[F5] [[def-qftx-finite-homotopy-pullback]]: the homotopy pullback has objects $(c,e,\alpha:p(c)\cong q(e))$ and arrows satisfying $q(v)\circ\alpha=\alpha'\circ p(u)$.

## Proof

1.1 By [F4], with the homotopy-pullback groupoid explicitly given by [F5], the groupoid on the glued bordism is equivalent to the homotopy-pullback composite of the restriction spans for $M_1$ and $M_2$. [F1, F4, F5, construct]

1.2 The projection $\Sigma\times[0,1]\to\Sigma$ is a deformation retraction. Under the restriction-compatible representation-groupoid equivalence in [F3], restriction at either end of the product cylinder is an equivalence on finite flat-connection groupoids; the product path from one end to the other gives a natural isomorphism between these two restrictions. Thus the cylinder span is equivalent to the identity span. The homotopy fiber of an equivalence over any object is contractible and has cardinality $1$, so its pull-push map is the identity. [F1, F2, F3, algebra]

1.3 For a disjoint union, a flat assignment and a vertex gauge transformation are exactly independent assignments on its components. Hence the bulk and boundary groupoids are products. Since the component sets are finite, the indicator functions of pairs of isomorphism classes form the tensor-product basis of the functions on their product. The automorphism weights multiply and the finite fiber sums factor, so the state spaces and maps identify with tensor products. [F1, F2, algebra]

1.4 Orientation reversal exchanges the two restriction maps in [F1] and identifies edge labels with their inverses. The transposed span is therefore the span of the reversed bordism. The adjoint identity in [F2] gives $Z_{\bar M}=Z_M^\dagger$ for the displayed weighted inner products; complex conjugation is the only antilinear operation because this model has unit weights and no cocycle phase. [F1, F2, algebra]

2.1 The push-pull composition identity in [F2] identifies the linear map of that composite span with $Z_{M_2}\circ Z_{M_1}$. Equivalent finite groupoids give the same weighted fiber sums, so this map is $Z_{M_2\cup_{\Sigma_1}M_1}$. [F1, F2, step 1.1]

3.1 For empty boundary the amplitude is $|\mathcal C_G(M)|$ by [F1]. Applying [F3] to connected $M$ gives $Z_G(M)=|\operatorname{Hom}(\pi_1(M),G)|/|G|$, with all conjugation stabilizers retained. The gluing, identity, disjoint-union, and orientation statements above establish the asserted finite state-sum rules. [F1, F3, step 2.1, step 1.2, step 1.3, step 1.4] ∎



## Gluing diagram

The restriction square is a homotopy pullback: its upper-right groupoid has objects consisting of two flat connections and an isomorphism between their boundary restrictions. That isomorphism is necessary for descent and for the automorphism weights. The proof above establishes the gluing law without relying on the drawing.

~~~tikzcd
\mathcal C_G(M_2\cup_{\Sigma}M_1) \arrow[r,"\simeq"] \arrow[d,"\mathrm{res}_2"'] &
\mathcal C_G(M_2)\times^h_{\mathcal C_G(\Sigma)}\mathcal C_G(M_1) \arrow[d,"\mathrm{pr}_2"] \\
\mathcal C_G(M_2) \arrow[r,"r_2"'] & \mathcal C_G(\Sigma)
~~~



## Remarks

This is an untwisted finite-group state sum. It does not define a continuous Lie-group BF integral or establish gravitational dynamics, and it gives no convergence theorem for the Ponzano–Regge state sum.
