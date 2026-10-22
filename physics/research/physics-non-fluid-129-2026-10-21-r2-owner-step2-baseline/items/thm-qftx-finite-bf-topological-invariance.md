---
id: thm-qftx-finite-bf-topological-invariance
kind: theorem
title: "Finite BF partition function is a topological invariant"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-qftx-finite-flat-connection-groupoid
  - def-qftx-finite-groupoid-integration
  - def-based-loops-and-fundamental-group
  - thm-qftx-cw-fundamental-group-presentation
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-flat-connection-groupoid: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  thm-qftx-cw-fundamental-group-presentation: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; the gauge group and every field set are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§13, PDF pp. 51–53, for the finite-gauge partition function and Hom(π1,G)/G classification; §23.3, PDF pp. 96–99, for homotopy-cardinality normalization."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§1, PDF pp. 2–3, and §2, PDF pp. 8–11, for flat finite-group bundles, 1/|Aut| weights, and topological invariance under gluing."
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§6, PDF pp. 22–23 and 30–32, for the finite-group partition sum and the 3-torus calculation; the local proof uses the untwisted weight."
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§7, PDF pp. 29–30, Remark 2, for finite-group BF convergence and the warning that continuous-group integrals have different analytic issues."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1, §1.2 Applications to Cell Complexes and §1.A Graphs and Free Groups"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
      locator: "Proposition 1.26, PDF pp. 49–51, and Proposition 1A.2, PDF pp. 83–85, for the cellular presentation used in the local proof."
verification:
  precheck: pending
---

## Statement

For a finite connected CW complex $K$ and a finite group $G$, let $\mathcal C_G(K)$ be the finite flat connection groupoid defined by the vertex gauge action. Use the traversal-first product on $\pi_1(K,v_0)$; if an edge path traverses $e_1,\ldots,e_m$, its holonomy is $g_{e_m}^{\epsilon_m}\cdots g_{e_1}^{\epsilon_1}$, and the associated representation sends $[\gamma]$ to the holonomy of the reversed path $\bar\gamma$. For any base vertex $v_0$,

$$|\mathcal C_G(K)|=\frac{|\operatorname{Hom}(\pi_1(K,v_0),G)|}{|G|}.$$

More precisely, $\mathcal C_G(K)$ is equivalent to the action groupoid $\operatorname{Hom}(\pi_1(K,v_0),G)//G$, where $G$ acts by simultaneous conjugation. The equivalence is induced by inverse path holonomy and commutes with restrictions up to the base-path isomorphism. Thus stabilizers are retained, and the partition function depends only on the fundamental-group representation groupoid, not on the chosen finite cell decomposition. For a disconnected finite CW complex, the partition function is the product of the values on its connected components.

## Statement references

[[def-qftx-finite-flat-connection-groupoid]]

[[thm-qftx-cw-fundamental-group-presentation]]

## Facts & Assumptions

**Given:** A finite connected CW complex $K$, a finite group $G$, a vertex $v_0$, a maximal tree $T$ in the 1-skeleton, and the finite flat connection groupoid from [[def-qftx-finite-flat-connection-groupoid]].

[F1] [[def-qftx-finite-flat-connection-groupoid]]: flat edge assignments form the action groupoid $\operatorname{Flat}(K,G)//G^{K_0}$, and its cardinality is $|\operatorname{Flat}(K,G)|/|G|^{|K_0|}$.

[F2] [[thm-qftx-cw-fundamental-group-presentation]]: the oriented non-tree edges freely generate before the 2-cell relators are imposed, and higher cells do not change $\pi_1(K,v_0)$.

[F3] [[def-qftx-finite-groupoid-integration]]: groupoid cardinality weights each isomorphism class by the reciprocal order of its automorphism group.

[F4] [[def-based-loops-and-fundamental-group]]: multiplication in $\pi_1$ traverses the first loop and then the second, so the inverse path-holonomy convention in the Statement gives a homomorphism to $G$.

## Proof

1.1 Starting with any flat assignment, set the root gauge value at $v_0$ to the identity. Along the unique tree path from $v_0$, choose the gauge value at each new vertex so that the transformed label on the traversed tree edge is the identity; when that edge is traversed against its chosen orientation, use its inverse label. This recursively produces a tree-normalized assignment. It is unique among gauges whose value at $v_0$ is the identity, since the condition that each transformed tree label remain $1$ determines each next vertex value. [given, F1, construct]

2.1 In a tree-normalized assignment every tree edge has label $1$. Assign to each generator $x_e$ the inverse of the label on its oriented non-tree edge. By [F4], the resulting map is a homomorphism for the traversal-first product on loops: the holonomy of a concatenation is the reverse-ordered product, and reversing the path in the Statement reverses that order. The flatness conditions say exactly that every relator $r_f$ maps to $1$. By the defining universal property of the presentation in [F2], these assignments are in bijection with homomorphisms $\rho:\pi_1(K,v_0)\to G$. For a subcomplex inclusion, restriction evaluates the same based edge words, with any change of base path acting by conjugation; hence the representation-groupoid equivalence commutes with restriction up to that natural base-path isomorphism. [F2, F4, step 1.1, construct]

3.1 A gauge transformation taking one tree-normalized assignment to another must have equal values at the two endpoints of every tree edge, because both edge labels are $1$. Since $T$ is connected, it is constant on all vertices. Conversely, each constant gauge value $a\in G$ preserves tree normalization and conjugates every generator label by $a$. Thus the full subgroupoid on tree-normalized objects is exactly $\operatorname{Hom}(\pi_1(K,v_0),G)//G$. Step 1.1 gives essential surjectivity, and the preceding arrow calculation gives full faithfulness; hence the inclusion is an equivalence of groupoids. [step 1.1, step 2.1, construct]

4.1 The subgroup of vertex gauges equal to $1$ at $v_0$ acts freely on each fiber of the map from flat assignments to their tree-normalized representative: step 1.1 gives transitivity and uniqueness gives trivial stabilizer. Its order is $|G|^{|K_0|-1}$, so $|\operatorname{Flat}(K,G)|=|G|^{|K_0|-1}|\operatorname{Hom}(\pi_1(K,v_0),G)|$. Substituting this count into [F1] gives the stated normalization. Equivalently, the action-groupoid cardinality in step 3.1 sums $1/|\operatorname{Stab}(\rho)|$ over conjugacy classes; no freeness of the conjugation action is assumed. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 For a disconnected finite complex, the edge-label sets and vertex-gauge groups are products over components, so its groupoid is the product of the component groupoids. Automorphism orders multiply in a product groupoid; therefore its groupoid cardinality is the product of the component cardinalities. [F1, F3, step 4.1, algebra] ∎
