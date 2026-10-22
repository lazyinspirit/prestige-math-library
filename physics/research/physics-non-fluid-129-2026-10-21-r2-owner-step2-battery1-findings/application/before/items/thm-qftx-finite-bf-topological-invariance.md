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
  - thm-induced-fundamental-group-map-functoriality
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-flat-connection-groupoid: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  thm-qftx-cw-fundamental-group-presentation: mathematical-premise
  thm-induced-fundamental-group-map-functoriality: mathematical-premise
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

Let $K$ be a finite CW complex, possibly disconnected, and let $G$ be a finite group. Write its connected components as $K_1,\ldots,K_m$ and choose a vertex $v_j$ in each. Let $\mathcal R_G(K)$ be the product over $j$ of the action groupoids whose objects are homomorphisms $\rho:\pi_1(K_j,v_j)\to G$ and whose arrows $\rho\to\rho'$ are elements $a\in G$ satisfying $\rho'(\gamma)=a\rho(\gamma)a^{-1}$ for every loop class $\gamma$; identity arrows are labeled by $1$, and if $a:\rho\to\rho'$ and $b:\rho'\to\rho''$, then their composite $b\circ a$ is labeled by $ba$. For $K=\varnothing$, this empty product is the terminal groupoid. Choosing a maximal tree in each component, inverse path holonomy defines an equivalence $\Phi_K:\mathcal C_G(K)\simeq\mathcal R_G(K)$: for an edge path traversing $e_1,\ldots,e_n$ with signs $\epsilon_k$, its holonomy is $H_A(e_1^{\epsilon_1}\cdots e_n^{\epsilon_n})=g_{e_n}^{\epsilon_n}\cdots g_{e_1}^{\epsilon_1}$, and $\Phi_K(A)$ sends a loop class represented by an edge loop $[\gamma]$ to $H_A(\bar\gamma)$; a gauge arrow $h$ maps to the conjugating arrow $h(v_j)$ on component $K_j$. In particular, for connected $K$,

$$|\mathcal C_G(K)|=\frac{|\operatorname{Hom}(\pi_1(K,v_1),G)|}{|G|},$$

and for arbitrary finite $K$,

$$|\mathcal C_G(K)|=\prod_{j=1}^{m}\frac{|\operatorname{Hom}(\pi_1(K_j,v_j),G)|}{|G|}.$$

The action retains all conjugation stabilizers. For a subcomplex inclusion $\iota:L\hookrightarrow K$, choose a base vertex $v_i$ in each component $L_i$, a base vertex $w_{j(i)}$ in its containing component $K_{j(i)}$, and an edge path $\gamma_i$ in $K_{j(i)}$ from $w_{j(i)}$ to $v_i$. The associated based map is $\iota_{\gamma_i,*}([\ell])=[\gamma_i*\iota(\ell)*\bar\gamma_i]$. Under $\Phi_K$ and $\Phi_L$, restriction corresponds to precomposition by these maps, up to the natural isomorphism whose component at a flat assignment $A$ is conjugation by $H_A(\bar\gamma_i)$. Thus the partition function depends only on the fundamental-group representation groupoid, not on the chosen finite cell decomposition.

## Statement references

[[def-qftx-finite-flat-connection-groupoid]]

[[thm-qftx-cw-fundamental-group-presentation]]

[[thm-induced-fundamental-group-map-functoriality]]

## Facts & Assumptions

**Given:** A finite CW complex $K$ with connected components $K_1,\ldots,K_m$, a finite group $G$, chosen vertices $v_j$ and maximal trees $T_j$ in the 1-skeleta of those components, and the finite flat connection groupoid from [[def-qftx-finite-flat-connection-groupoid]].

[F1] [[def-qftx-finite-flat-connection-groupoid]]: flat edge assignments form the action groupoid $\operatorname{Flat}(K,G)//G^{K_0}$, and its cardinality is $|\operatorname{Flat}(K,G)|/|G|^{|K_0|}$.

[F2] [[thm-qftx-cw-fundamental-group-presentation]]: the oriented non-tree edges freely generate before the 2-cell relators are imposed, and higher cells do not change $\pi_1(K,v_0)$.

[F3] [[def-qftx-finite-groupoid-integration]]: groupoid cardinality weights each isomorphism class by the reciprocal order of its automorphism group.

[F4] [[def-based-loops-and-fundamental-group]]: multiplication in $\pi_1$ traverses the first loop and then the second, and the inverse class is represented by the reversed loop; consequently the inverse path-holonomy convention in the Statement gives a homomorphism to $G$.

[F5] [[thm-induced-fundamental-group-map-functoriality]]: a pointed continuous map induces a well-defined homomorphism on fundamental groups, and these homomorphisms are functorial and invariant under homotopies fixing the basepoint.

## Proof

1.1 For each connected component $K_j$, start with any flat assignment and set the root gauge value at $v_j$ to the identity. Along the unique tree paths in $T_j$ from $v_j$, choose the gauge value at each new vertex so that the transformed label on the traversed tree edge is the identity; when that edge is traversed against its chosen orientation, use its inverse label. This recursively produces a tree-normalized assignment on every component. It is unique among gauges whose value at each $v_j$ is the identity, since the condition that each transformed tree label remain $1$ determines each next vertex value. [given, F1, construct]

2.1 In a tree-normalized assignment on $K_j$, every edge of $T_j$ has label $1$. Assign to each generator $x_e$ of $\pi_1(K_j,v_j)$ the inverse of the label on its oriented non-tree edge. By [F4], this is a homomorphism for the traversal-first product on loops: holonomy of a concatenation is the reverse-ordered product, and reversing the path in the Statement reverses that order. Flatness says exactly that every relator $r_f$ maps to $1$. By the presentation in [F2], the normalized assignments on $K_j$ are in bijection with homomorphisms $\rho:\pi_1(K_j,v_j)\to G$. [F2, F4, step 1.1, construct]

3.1 For a connected subcomplex $L_i\subseteq K_{j(i)}$ and base data as in the Statement, the pointed inclusion at $v_i$ induces a well-defined homomorphism on fundamental groups by [F5]. The base-path change map $c_{\gamma_i}^{K_{j(i)}}:\pi_1(K_{j(i)},v_i)\to\pi_1(K_{j(i)},w_{j(i)})$, given by $[\alpha]\mapsto[\gamma_i*\alpha*\bar\gamma_i]$, is a well-defined isomorphism: endpoint-fixed homotopies remain endpoint-fixed after adjoining $\gamma_i,\bar\gamma_i$, insertion of the retraced path $\bar\gamma_i*\gamma_i$ contracts in a product of loop classes, and $c_{\bar\gamma_i}^{K_{j(i)}}$ is its inverse. Thus $\iota_{\gamma_i,*}=c_{\gamma_i}^{K_{j(i)}}\circ\iota_*$ is well defined. For a flat assignment $A$ and an edge loop $\ell$ in $L_i$, the edge-product convention gives $\Phi_{K_{j(i)}}(A)(\iota_{\gamma_i,*}[\ell])=H_A(\bar\gamma_i)H_A(\bar\ell)H_A(\gamma_i)=H_A(\bar\gamma_i)\Phi_{L_i}(A|_{L_i})([\ell])H_A(\bar\gamma_i)^{-1}$. If a gauge arrow $h:A\to A'$ is applied, its path-product rule gives $H_{A'}(\bar\gamma_i)=h(w_{j(i)})H_A(\bar\gamma_i)h(v_i)^{-1}$; this is exactly the naturality condition for the stated conjugation arrows. Hence inverse path holonomy intertwines restriction with the componentwise precomposition functor up to that natural isomorphism. [F1, F4, F5, step 2.1, construct]

4.1 On a fixed component $K_j$, a gauge transformation taking one tree-normalized assignment to another must have equal values at the two endpoints of every edge of $T_j$, because both edge labels are $1$. Since $T_j$ is connected, it is constant on all vertices of $K_j$. Conversely, each constant gauge value $a\in G$ preserves tree normalization and conjugates every generator label by $a$. Thus the full subgroupoid on tree-normalized objects over $K_j$ is identified with $\operatorname{Hom}(\pi_1(K_j,v_j),G)//G$. Step 1.1 makes its inclusion into the full flat-connection groupoid essentially surjective, and the inclusion is fully faithful because it is full. The root-one gauge used in step 1.1 leaves inverse path holonomy at $v_j$ unchanged, so the object map $\Phi_{K_j}$ in the Statement agrees with normalization followed by this identification. For any gauge arrow $h:A\to A'$, the gauge factors telescope along each based edge loop $\delta$ at $v_j$ to give $H_{A'}(\bar\delta)=h(v_j)H_A(\bar\delta)h(v_j)^{-1}$, so $\Phi_{K_j}(A')=h(v_j)\Phi_{K_j}(A)h(v_j)^{-1}$. Conversely, after normalizing $A$ and $A'$ by root-one gauges, each conjugating arrow between their representations is the unique constant gauge arrow between the normalized assignments; conjugating back gives the unique gauge arrow between $A$ and $A'$ with that value at $v_j$. Hence the stated functor is fully faithful as well as essentially surjective, and is an equivalence. [step 1.1, step 2.1, step 3.1, construct]

5.1 For each connected component $K_j$, the subgroup of vertex gauges equal to $1$ at $v_j$ acts freely and transitively on each fiber of the map from flat assignments to their tree-normalized representative, by step 1.1 and its uniqueness. Its order is $|G|^{|(K_j)_0|-1}$, so $|\operatorname{Flat}(K_j,G)|=|G|^{|(K_j)_0|-1}|\operatorname{Hom}(\pi_1(K_j,v_j),G)|$. Substituting this count into [F1] gives the connected normalization. Equivalently, the action-groupoid cardinality in step 4.1 sums $1/|\operatorname{Stab}(\rho)|$ over conjugacy classes; no freeness of the conjugation action is assumed. [F1, F2, step 1.1, step 2.1, step 4.1, algebra]

6.1 For $K=K_1\sqcup\cdots\sqcup K_m$, the defining edge-label and vertex-gauge data split componentwise, so $\mathcal C_G(K)=\prod_j\mathcal C_G(K_j)$. Applying step 4.1 on each component gives the product equivalence $\Phi_K:\mathcal C_G(K)\simeq\mathcal R_G(K)$, and applying step 3.1 componentwise gives the stated restriction naturality. Automorphism orders multiply in a product groupoid and its isomorphism classes are componentwise tuples, so its groupoid cardinality is the product of the connected cardinalities from step 5.1. When $m=0$, the empty product is terminal with cardinality $1$. [F1, F3, step 3.1, step 4.1, step 5.1, algebra] ∎

