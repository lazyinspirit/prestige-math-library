---
id: thm-qftx-finite-groupoid-gluing
kind: theorem
title: "Finite gauge theory gluing is weighted push-pull"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - def-qftx-finite-groupoid-integration
  - def-qftx-finite-homotopy-pullback
  - def-qftx-finite-bordism-state-span
  - lem-qftx-finite-groupoid-push-pull-fubini
  - thm-qftx-finite-bf-topological-invariance
  - thm-induced-fundamental-group-map-functoriality
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
  thm-induced-fundamental-group-map-functoriality: mathematical-premise
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Fix an integer $d\ge1$ and a finite group $G$. The state spaces and linear maps defined for compatible collared triangulated $d$-bordisms compose under gluing: if $M_1:\Sigma_0\to\Sigma_1$ and $M_2:\Sigma_1\to\Sigma_2$, then

$$Z_{M_2\cup_{\Sigma_1}M_1}=Z_{M_2}\circ Z_{M_1}.$$

The cylinder on $\Sigma$ acts as the identity on $V_G(\Sigma)$. Disjoint unions act by tensor products of state spaces and maps. Let $c_\Sigma:V_G(\Sigma)\to V_G(-\Sigma)$ be the anti-linear map $c_\Sigma(f)=\overline f$ under the common underlying groupoid of the orientation-reversed boundary. With the weighted inner products from the Definition, if $\overline M:-\Sigma_1\to-\Sigma_0$ denotes $M:\Sigma_0\to\Sigma_1$ with reversed orientation, then

$$Z_{\overline M}\circ c_{\Sigma_1}=c_{\Sigma_0}\circ Z_M^\dagger,$$

where $Z_M^\dagger$ is the adjoint of $Z_M$; equivalently, after the pointwise-conjugation identifications, orientation reversal gives the weighted adjoint. For a connected closed $d$-manifold $M$, its scalar amplitude is $|\operatorname{Hom}(\pi_1(M),G)|/|G|$.

## Statement references

[[def-qftx-finite-bordism-state-span]]

[[lem-qftx-finite-groupoid-push-pull-fubini]]

[[thm-qftx-finite-bf-topological-invariance]]

[[def-qftx-finite-homotopy-pullback]]

## Facts & Assumptions

**Given:** A fixed dimension $d\ge1$, finite group $G$, compatible boundary triangulations, and composable collared triangulated bordisms.

[F1] [[def-qftx-finite-bordism-state-span]]: $V_G(\Sigma)$ consists of invariant functions on boundary flat-connection isomorphism classes; $Z_M=(r_1)_!r_0^*$ for the restriction span; the pairing weights each class by $1/|\operatorname{Aut}|$.

[F2] [[lem-qftx-finite-groupoid-push-pull-fubini]]: push-pull maps compose through homotopy-pullback spans, and transposing a span gives the adjoint for the weighted inner product.

[F3] [[thm-qftx-finite-bf-topological-invariance]]: for a finite CW complex with connected components $K_j$ and chosen base vertices $v_j$, $\mathcal C_G(K)$ is equivalent to $\prod_j(\operatorname{Hom}(\pi_1(K_j,v_j),G)//G)$; restriction to a subcomplex corresponds to componentwise precomposition by its base-path-adjusted induced fundamental-group maps, up to the stated conjugating natural isomorphism. For connected $K$, its cardinality is $|\operatorname{Hom}(\pi_1(K,v),G)|/|G|$.

[F4] [[lem-qftx-finite-groupoid-gluing-descent]]: flat-connection groupoids on glued bordisms are equivalent to the homotopy pullback of the two restriction functors, with a boundary isomorphism included.

[F5] [[def-qftx-finite-homotopy-pullback]]: the homotopy pullback has objects $(c,e,\alpha:p(c)\cong q(e))$ and arrows satisfying $q(v)\circ\alpha=\alpha'\circ p(u)$.

[F6] [[thm-induced-fundamental-group-map-functoriality]]: a pointed continuous map induces a well-defined homomorphism on fundamental groups, and homotopic maps that fix the basepoint induce the same homomorphism.

## Proof

1.1 By [F4], with the homotopy-pullback groupoid explicitly given by [F5], the groupoid on the glued bordism is equivalent to the homotopy-pullback composite of the restriction spans for $M_1$ and $M_2$. [F1, F4, F5, construct]

1.2 Write $\Sigma=\bigsqcup_{j=1}^m\Sigma_j$ and let $C_j=\Sigma_j\times[0,1]$. For each $j$ and $\epsilon\in\{0,1\}$, choose $v_j\in\Sigma_j$ and base the end inclusion $i_\epsilon:\Sigma_j\to C_j$ at $(v_j,\epsilon)$. The projection $p_j:C_j\to\Sigma_j$ satisfies $p_j i_\epsilon=\operatorname{id}$, and $i_\epsilon p_j$ is based-homotopic to the identity through $H_s^{(0)}(x,t)=(x,(1-s)t)$ for $\epsilon=0$ and $H_s^{(1)}(x,t)=(x,(1-s)t+s)$ for $\epsilon=1$. By [F6], these maps induce inverse isomorphisms on fundamental groups. Precomposition with a group isomorphism is an equivalence of representation action groupoids, with inverse precomposition by its inverse and the identity map on conjugating arrows. The componentwise representation equivalence and restriction naturality in [F3] therefore make both end restriction functors $\mathcal C_G(C_j)\to\mathcal C_G(\Sigma_j)$ equivalences; taking products gives the same conclusion for disconnected $\Sigma$. Choose an edge path in each connected cylinder 1-skeleton joining its two end base vertices. The base-path naturality in [F3] gives a natural isomorphism between the two restriction functors. Hence the cylinder span is equivalent to the identity span. Each homotopy fiber of either end equivalence has one isomorphism class and trivial automorphism group, while the natural isomorphism identifies the two boundary values; its weighted push-pull map is therefore the identity on $V_G(\Sigma)$. [F1, F2, F3, F6, construct]

1.3 For a disjoint union, a flat assignment and a vertex gauge transformation are exactly independent assignments on its components. Hence the bulk and boundary groupoids are products. Since the component sets are finite, the indicator functions of pairs of isomorphism classes form the tensor-product basis of the functions on their product. The automorphism weights multiply and the finite fiber sums factor, so the state spaces and maps identify with tensor products. [F1, F2, algebra]

1.4 By the corrected orientation convention in [F1], reversing the manifold orientation leaves each fixed directed edge label and its gauge action unchanged; it only exchanges the incoming and outgoing restriction functors. Thus the span of $\overline M$ is the transposed span with the same underlying finite groupoids, so [F2] gives $Z_{\overline M}=Z_M^\dagger$ on those function spaces. Every coefficient of these push-pull maps in the isomorphism-class indicator bases is a finite sum of positive reciprocal automorphism orders, hence is real; the identity on underlying groupoids therefore yields $Z_{\overline M}\circ c_{\Sigma_1}=c_{\Sigma_0}\circ Z_M^\dagger$. Pointwise conjugation is the only anti-linear operation, since this model has no cocycle phase. [F1, F2, algebra]

2.1 The push-pull composition identity in [F2] identifies the linear map of that composite span with $Z_{M_2}\circ Z_{M_1}$. Equivalent finite groupoids give the same weighted fiber sums, so this map is $Z_{M_2\cup_{\Sigma_1}M_1}$. [F1, F2, step 1.1]

3.1 For empty boundary the amplitude is $|\mathcal C_G(M)|$ by [F1]. Applying [F3] to connected $M$ gives $Z_G(M)=|\operatorname{Hom}(\pi_1(M),G)|/|G|$, with all conjugation stabilizers retained. The gluing, identity, disjoint-union, and orientation statements above establish the asserted finite state-sum rules. [F1, F3, step 2.1, step 1.2, step 1.3, step 1.4] ∎



## Gluing diagram

Write $r_i:\mathcal C_G(M_i)\to\mathcal C_G(\Sigma)$ for restriction to the common boundary and $\mathrm{res}_i$ for restriction from the glued manifold to $M_i$. The restriction square below commutes with the identity boundary isomorphism. It is a homotopy pullback: the comparison functor to $\mathcal C_G(M_2)\times^h_{\mathcal C_G(\Sigma)}\mathcal C_G(M_1)$, sending a global field to its two restrictions and their identity boundary isomorphism, is the equivalence proved by descent. The proof is independent of the drawing.

~~~tikzcd
\mathcal C_G(M_2\cup_\Sigma M_1) \arrow[r,"\mathrm{res}_1"] \arrow[d,"\mathrm{res}_2"'] &
\mathcal C_G(M_1) \arrow[d,"r_1"] \\
\mathcal C_G(M_2) \arrow[r,"r_2"'] & \mathcal C_G(\Sigma)
~~~

## Remarks

This is an untwisted finite-group state sum. It does not define a continuous Lie-group BF integral or establish gravitational dynamics, and it gives no convergence theorem for the Ponzano–Regge state sum.
