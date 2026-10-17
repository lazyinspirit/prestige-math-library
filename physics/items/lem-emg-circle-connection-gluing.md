---
id: lem-emg-circle-connection-gluing
kind: lemma
title: "Circle gluing, curvature and connection variations"
status: published
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-emg-local-potentials-and-circle-data
  - def-principal-g-bundle-and-associated-fiber-bundle
  - lem-emg-lorentz-hodge-calculus
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-local-potentials-and-circle-data: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Sections 3.1–3.3, 5.1 and 7.1–7.3, printed pp. 3–15 (PDF pp. 3–16), principal-bundle charts, horizontal connections, local representatives and curvature."
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), section 1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Section 1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 16–18), north/south potentials and overlap transition."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $M$ be a smooth, Hausdorff, second-countable oriented four-manifold, and let $(U_i,g_{ij},a_i;\kappa_0)$ be a normalized circle-connection datum as in [[def-emg-local-potentials-and-circle-data]]. Use the set-sized-object and quotient convention of [[def-emg-set-size-and-class-schema]]. Then the chart data construct a smooth Hausdorff second-countable right principal $U(1)$-bundle $\pi:P\to M$ and a global smooth real connection one-form $\omega$ on $P$. Its curvature is basic: there is a smooth closed two-form $f\in\Omega^2(M)$ with $d\omega=\pi^*f$ and $f|_{U_i}=da_i$. The local potentials $A_i=\kappa_0a_i$ satisfy $dA_i=F$, where $F=\kappa_0 f$ is global. For two connections on the same fixed bundle with the same transition functions, their local-form differences are restrictions of one global base one-form; adding a global one-form to all local representatives stays in that bundle sector.

## Facts & Assumptions

**Given:** The smooth base, countable cover, circle cocycle, local real one-forms, fixed scale $\kappa_0>0$, and the set-sized data stated above.

[F1] [[def-emg-local-potentials-and-circle-data]]: $U(1)$ is the unit circle in $\mathbb R^2$ with the four explicit smooth charts and polynomial group operations stated there. Every smooth transition map has a smooth local real phase $f$ with $g=e^{if}$; any two such lifts differ by a locally constant element of $2\pi\mathbb Z$, and the complex-exponential derivative and chain rule give the real one-form identity $\lambda(g):=-i\,g^{-1}dg=df$. The transitions obey $g_{ij}g_{jk}=g_{ik}$, and the local forms obey $a_j=a_i+\lambda(g_{ij})$.

[F2] [[def-principal-g-bundle-and-associated-fiber-bundle]]: a right principal bundle is locally a product with equivariant charts, and the right group action is free and transitive on each fibre.

[F3] [[lem-emg-lorentz-hodge-calculus]]: the exterior derivative satisfies $d^2=0$ and the usual coordinate formula on smooth forms.

[F4] [[def-emg-set-size-and-class-schema]] constructs the tagged union as a subset of $I\times M\times U(1)$ and the equivalence-class quotient as a separated subset of its power set; no representatives are chosen.

## Proof

1.1 Form the set-sized disjoint union $\coprod_i(U_i\times U(1))$ and identify $(x,z_i)$ with $(x,g_{ij}^{-1}(x)z_i)$ in chart $j$. Reflexivity follows from $g_{ii}=1$; the cocycle gives $g_{ji}=g_{ij}^{-1}$ and shows that transfer from $i$ to $j$ to $k$ equals direct transfer from $i$ to $k$. Hence these identifications define an equivalence relation and a well-defined projection $\pi:P\to M$. [given, F1, F4, construct]

2.1 For fixed $i$, the quotient map restricts to a bijection from $U_i\times U(1)$ onto $\pi^{-1}(U_i)$: every representative over $x\in U_i$ transfers uniquely to chart $i$, and a transition loop acts as the identity by the cocycle. On overlaps the chart changes are $(x,z_i)\mapsto(x,g_{ij}^{-1}(x)z_i)$, smooth diffeomorphisms with smooth inverse. The quotient map is open because the saturation of any open set is a union of its images under these overlap diffeomorphisms; therefore the bijections are homeomorphisms and form a smooth atlas. [given, F1, step 1.1, algebra]

3.1 Distinct base points have disjoint preimage neighborhoods because $M$ is Hausdorff. For two distinct points over the same base point, choose a chart containing that base point and disjoint fibre neighborhoods in $U(1)$; their products with a common base neighborhood separate the total-space points. Thus $P$ is Hausdorff. Fix one countable base $(B_n)$ of $M$ and the explicit countable base $(C_m)$ of circle arcs obtained by intersecting $U(1)\subset\mathbb R^2$ with rational open rectangles. In chart $i$, the products $(B_n\cap U_i)\times C_m$ form a base. Their images under the open charts form a base of $P$ indexed by the countable set $I\times\mathbb N\times\mathbb N$, which has an explicit finite-product enumeration. Thus $P$ is second countable, without selecting separate bases for a countable family of spaces. [given, F1, step 2.1, algebra]

3.2 Define the right action by $[x,z_i]\cdot\zeta=[x,z_i\zeta]$. It is well-defined because the chart transition is left multiplication by $g_{ij}^{-1}$ and hence commutes with right multiplication. In each chart it is smooth; it is free and transitive on every fibre. The charts in step 2.1 are equivariant, so $P\to M$ satisfies the principal-bundle definition in [F2]. [F2, step 2.1, construct]

3.3 Let $\eta=-i z^{-1}dz$ be the real invariant one-form on $U(1)$, normalized by $\eta(\partial_\theta)=1$ for the local angle $z=e^{i\theta}$. In chart $i$ set $\omega_i=\eta+a_i$. If $z_j=g_{ij}^{-1}z_i$, then $\eta_j=\eta_i-\lambda(g_{ij})$, while [F1] gives $a_j=a_i+\lambda(g_{ij})$; thus $\omega_j=\omega_i$ on every overlap and the local forms define a global smooth one-form $\omega$. Its value on the vertical generator is $1$, it is right invariant, and in every chart $\ker\omega_i$ is a complement to the vertical line, since for each base tangent vector there is a unique circle tangent vector cancelling $a_i$. Hence $\omega$ is a principal connection. [F1, F2, step 2.1, algebra]

4.1 In chart $i$, $d\omega=d a_i$ because $d\eta=0$. On overlaps $d a_j=d a_i+d\lambda(g_{ij})=d a_i$, since locally $\lambda(g_{ij})=df_{ij}$ and $d^2f_{ij}=0$ by [F3]. The forms $da_i$ therefore glue to a global two-form $f$, and the local identity $d\omega=\pi^*f$ proves the curvature is basic and closed. Multiplication by the fixed constant $\kappa_0$ gives $A_i=\kappa_0a_i$ and $F=\kappa_0f$ with $dA_i=F$. [F1, F3, step 3.3, algebra]

5.1 If $(a_i')$ is another compatible family for the same transition maps, then $(a_j'-a_j)-(a_i'-a_i)=0$ on each overlap. Thus the differences patch to a global one-form $\alpha$ on $M$. Conversely, adding any global one-form $\alpha$ to every $a_i$ preserves $a_j=a_i+\lambda(g_{ij})$ and changes curvature from $f$ to $f+d\alpha$ without changing the transition data. This proves the fixed-bundle variation claim. [F1, step 4.1, algebra] ∎


## Remarks

The set-size convention is used for the tagged disjoint union and quotient. All seven typed foundational carriers now occur earlier on this page; their exact domains remain in force. The construction assumes no global real phase lift or bundle-classification theorem and makes no arbitrary choice of representatives or countable family of bases.
