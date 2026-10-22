---
id: lem-qftx-finite-groupoid-gluing-descent
kind: lemma
title: "Flat-connection groupoids satisfy boundary descent"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-qftx-finite-flat-connection-groupoid
  - def-qftx-finite-bordism-state-span
  - def-qftx-finite-homotopy-pullback
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-flat-connection-groupoid: mathematical-premise
  def-qftx-finite-bordism-state-span: mathematical-premise
  def-qftx-finite-homotopy-pullback: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; the gluing and gauge data are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§23.2, PDF pp. 92–95, for homotopy pullbacks of correspondences; §23.3, PDF pp. 97–99, for finite-gauge restriction spans."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–9, Lemma 2.4, for boundary identification isomorphisms, stabilizers, and the measure under cutting and pasting."
verification:
  precheck: pending
---

## Statement

Let $M_1$ and $M_2$ be compact triangulated $d$-bordisms glued along an identified closed triangulated boundary $\Sigma$, with collars and compatible triangulations. The finite flat-connection groupoid on the glued manifold is equivalent to the homotopy pullback groupoid

$$\mathcal C_G(M_2\cup_\Sigma M_1) \simeq \mathcal C_G(M_2)\times^h_{\mathcal C_G(\Sigma)}\mathcal C_G(M_1).$$

Writing $r_i:\mathcal C_G(M_i)\to\mathcal C_G(\Sigma)$ for restriction, a pullback object is $(A_2,A_1,\alpha:r_2(A_2)\cong r_1(A_1))$. A morphism $(u_2,u_1)$ to $(A_2',A_1',\alpha')$ satisfies $r_1(u_1)\circ\alpha=\alpha'\circ r_2(u_2)$.

## Statement references

[[def-qftx-finite-flat-connection-groupoid]]

[[def-qftx-finite-bordism-state-span]]

[[def-qftx-finite-homotopy-pullback]]

## Facts & Assumptions

**Given:** The compatible triangulated bordisms $M_1,M_2$, their common boundary $\Sigma$, and the finite flat-connection groupoids from [[def-qftx-finite-flat-connection-groupoid]].

[F1] [[def-qftx-finite-flat-connection-groupoid]]: objects are flat edge labels and arrows are vertex gauge transformations; gauge transformations preserve flatness.

[F2] [[def-qftx-finite-bordism-state-span]]: boundary restriction is a functor of finite flat-connection groupoids.

[F3] [[def-qftx-finite-homotopy-pullback]]: a homotopy-pullback object includes an isomorphism $\alpha$ between the two images, and its arrows satisfy $q(v)\circ\alpha=\alpha'\circ p(u)$.

## Proof

1.1 A global flat labeling on $M_2\cup_\Sigma M_1$ restricts to flat labelings on both pieces whose boundary labels agree. The identity boundary isomorphism makes this a triple in the homotopy pullback defined by [F3]. Restriction of a global vertex gauge transformation gives a compatible pair, so restriction defines a functor from the global groupoid. [given, F1, F2, F3, construct]

2.1 Conversely, let $(A_2,A_1,\alpha)$ be a homotopy-pullback object as in [F3], where $\alpha:r_2(A_2)\to r_1(A_1)$ is a boundary gauge isomorphism. Its finite vertex values on the boundary extend to the vertices of $M_2$ by setting every non-boundary value to the identity. Applying this gauge transformation to $A_2$ makes its boundary edge labels equal to those of $A_1$. The two edge labelings then glue to a unique labeling on the union; every 2-cell lies in one of the pieces or their common boundary, so each flatness equation remains satisfied. This proves essential surjectivity. [given, F1, F3, step 1.1, construct]

3.1 By [F3], a morphism in the homotopy pullback is a pair of gauge transformations on $M_2$ and $M_1$ satisfying the boundary compatibility equation. After the boundary representatives are aligned as in step 2.1, this equation says exactly that the two vertex gauge values agree at every identified boundary vertex. They therefore glue to a unique gauge transformation on $M_2\cup_\Sigma M_1$. Conversely, every global gauge transformation restricts to such a compatible pair. Thus the restriction functor is fully faithful and, with step 2.1, an equivalence. [F1, F2, F3, step 2.1, construct]

4.1 The boundary isomorphism $\alpha$ is load-bearing. For the one-object groupoid $BG$ of a finite group $G$, an object of the homotopy pullback of two identity functors is an element $\alpha\in G$. By [F3], a morphism $(u,v):\alpha\to\alpha'$ satisfies $v\alpha=\alpha'u$, so every $\alpha$ is isomorphic to $1$ and the automorphisms of $1$ are the diagonal pairs $(u,u)$. Thus the homotopy pullback has one isomorphism class with automorphism group isomorphic to $G$ and cardinality $1/|G|$. The ordinary set-theoretic fiber product has one object with trivial automorphism group and cardinality $1$. Omitting $\alpha$ therefore discards the stabilizer factor required by the gluing measure. [given, F1, F2, F3, algebra] ∎



## Gluing diagram

The square expresses the restriction maps. Its comparison with the lower-right groupoid is a homotopy pullback: an object includes the boundary isomorphism $\alpha$ described in the Statement. The diagram records the interface only; steps 1.1–3.1 prove descent without relying on it.

~~~tikzcd
\mathcal C_G(M_2\cup_\Sigma M_1) \arrow[r,"\simeq"] \arrow[d,"\mathrm{res}_2"'] &
\mathcal C_G(M_2)\times^h_{\mathcal C_G(\Sigma)}\mathcal C_G(M_1) \arrow[d,"\mathrm{pr}_2"] \\
\mathcal C_G(M_2) \arrow[r,"r_2"'] & \mathcal C_G(\Sigma)
~~~

