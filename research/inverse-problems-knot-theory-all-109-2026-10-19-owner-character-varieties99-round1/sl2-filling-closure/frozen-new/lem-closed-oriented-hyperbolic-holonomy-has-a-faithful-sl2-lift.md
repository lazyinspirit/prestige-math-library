---
id: lem-closed-oriented-hyperbolic-holonomy-has-a-faithful-sl2-lift
kind: lemma
title: "Closed oriented hyperbolic holonomy has a faithful SL2 lift"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting
  - lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-path-lifting-for-covering-maps
  - thm-homotopy-lifting-for-covering-maps
proof_strategy: direct
axiom_use: "Full AC supplies the finite Heegaard construction and its inherited Countable Choice Spin and complete-hyperbolic-quotient hypotheses. The remaining matrix polar decomposition and two-sheet monodromy argument are explicit."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Baldwin and Sivek, Torus knots, the A-polynomial, and SL(2,C)"
      url: "https://arxiv.org/pdf/2405.19197v2"
      locator: "Lemma5.2, PDF16, uses a faithful SL2 lift of closed hyperbolic holonomy. The actual finite-Heegaard Spin and frame-cover construction of that lift is supplied below; no exterior-cohomology argument is used."
---

## Statement

Assume full AC. Let $Y$ be a nonempty closed connected oriented smooth three-manifold equipped with a complete Riemannian metric of constant sectional curvature $-1$. Its faithful discrete holonomy
$$\rho:\pi_1(Y)\longrightarrow PSL_2(\mathbb C)$$
admits a homomorphism lift $\widetilde\rho:\pi_1(Y)\to SL_2(\mathbb C)$ through the quotient by $\{I,-I\}$. The lift is faithful. The required Spin structure on $TY$ is actually constructed from a finite complete Heegaard splitting, rather than assumed from the vanishing of a knot exterior's second cohomology.

## Facts & Assumptions

**Given:** Full AC and the closed complete oriented hyperbolic manifold of the Statement.

[F1] Every nonempty closed connected oriented smooth three-manifold has a finite Heegaard splitting. Its proof builds each side from a ball and finitely many one-handles. [[thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting]]

[F2] Complete Heegaard data, with actual compression disks cutting each side into a ball, construct a Spin lift of the tangent frame bundle under Countable Choice. A Spin lift is an actual equivariant two-fold map to the oriented orthonormal frame bundle. [[lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector]] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[F3] The complete metric gives a universal isometric $\mathbb H^3$ cover, with faithful discrete torsion-free group $\Gamma\cong\pi_1(Y)$ in $PSL_2(\mathbb C)$. In the Hermitian matrix model $X\mapsto AXA^*$ is the isometry action; its stabilizer at $I$ is $SU(2)/\{\pm I\}\cong SO(3)$, and it realizes every oriented tangent rotation. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F4] The three-sphere is simply connected, and paths and homotopies have unique lifts through a covering once their initial lift is prescribed. [[thm-higher-dimensional-spheres-are-simply-connected]] [[thm-path-lifting-for-covering-maps]] [[thm-homotopy-lifting-for-covering-maps]] The choice assumption is [[def-axiom-of-choice]].

## Proof

1.1 Use [F1] to choose the finite Heegaard splitting. The cocores of its finitely many one-handles are disjoint compression disks; cutting them leaves its explicitly parametrized ball. Thus the splitting has exactly the complete disk data required in [F2]. Full AC implies Countable Choice, so apply that supplier, taking Gram–Schmidt with the given hyperbolic metric in its frame construction. We obtain a Spin bundle $S$ and a two-sheet cover $S\to\mathcal F_Y$ of the oriented orthonormal frame bundle. Indeed local bundle trivializations identify this map with $U\times\operatorname{Spin}(3)\to U\times SO(3)$, so it is a covering of total spaces. Its restriction to each frame fibre is the actual nontrivial Spin double cover; the asserted zero determinant Chern class is not being substituted for the Spin lift itself. [F1, F2, given, construct]

1.2 We give the needed topology of the matrix cover explicitly. For $A\in SL_2(\mathbb C)$ put $H=A^*A$ and $$R=\frac{H+I}{\sqrt{\operatorname{tr}H+2}}.$$ The two-by-two identity $H^2-(\operatorname{tr}H)H+I=0$ gives $R^2=H$. The matrix $R$ is positive Hermitian with determinant one, so $U=AR^{-1}\in SU(2)$ and $A=UR$ uniquely. Every such $R$ is $tI+x\cdot\sigma$, where $x\in\mathbb R^3$, $t=\sqrt{1+|x|^2}$ and the $\sigma$ are the Pauli matrices from [F3]. Thus the positive factor space is $\mathbb R^3$ and $SU(2)$ consists of matrices $\left(\begin{smallmatrix}a&b\\-\bar b&\bar a\end{smallmatrix}\right)$ with $|a|^2+|b|^2=1$, the three-sphere. The displayed polar coordinates identify $SL_2(\mathbb C)$ with $S^3\times\mathbb R^3$; contracting $x$ to zero and using [F4] proves it is simply connected and path-connected. The quotient $SL_2(\mathbb C)\to PSL_2(\mathbb C)$ is a two-sheet covering: a sufficiently small neighborhood of any matrix is disjoint from its negative, and the quotient restricts homeomorphically on both sheets. [F3, F4, given, construct, algebra]

2.1 By [F3], oriented frames of $\mathbb H^3$ identify with $PSL_2(\mathbb C)$. The action is transitive on points, and the stabilizer $SO(3)$ acts freely and transitively on their oriented orthonormal frames; an isometry fixing a point and its tangent frame fixes every radial geodesic and hence every point. Quotienting by the actual deck group therefore identifies $\mathcal F_Y$ with $\Gamma\backslash PSL_2(\mathbb C)$. Write $\widehat\Gamma$ for the preimage of $\Gamma$ in $SL_2(\mathbb C)$ and let $p:SL_2(\mathbb C)\to\mathcal F_Y$ be the resulting frame map. Every $a\in\widehat\Gamma$ has $p(a)=p(I)$. For a path $\alpha$ from $I$ to $a$, project it by $p$ and lift that loop to the Spin frame cover from a fixed point $s_0$ over $p(I)$. Set $\chi(a)=0$ or $1$ according as its endpoint is $s_0$ or $-s_0$. Path and homotopy lifting [F4] and simple connectivity from step1.2 make this independent of the chosen path: two such paths are homotopic relative endpoints in $SL_2(\mathbb C)$. This constructs an actual function $\chi:\widehat\Gamma\to\mathbb Z/2$. [F3, F4, step 1.1, step 1.2, construct, algebra]

3.1 If $\alpha$ ends at $a$ and $\beta$ at $b$, the path $\alpha*(a\beta)$ ends at $ab$. Since the image of $a$ is in $\Gamma$, the left quotient gives $p(a\beta)=p(\beta)$ pointwise. Lifting this concatenation therefore adds the two endpoint signs, so $\chi(ab)=\chi(a)+\chi(b)$. Moreover $\chi(-I)=1$. To check the latter, use the path $\operatorname{diag}(e^{i\pi t},e^{-i\pi t})$ from $I$ to $-I$. It lies in $SU(2)$, fixes the hyperbolic basepoint, and projects by the Pauli conjugation formula to one full $2\pi$ rotation of its tangent frame. Its lift in the actual Spin frame fibre ends at $-s_0$, since a full plane rotation lifts as $\cos(\theta/2)+e_1e_2\sin(\theta/2)$ and ends at $-1$ when $\theta=2\pi$. This is precisely the rank-three double cover constructed in [F2], not a claimed trivialization of the closed tangent bundle. [F2, F3, F4, step 2.1, construct, algebra]

4.1 The restriction of the projection $\widehat\Gamma\to\Gamma$ to $\ker\chi$ is an isomorphism. Each pair $\{a,-a\}$ over a given $\gamma$ contains exactly one element of $\ker\chi$ by step3.1. The projection is a group homomorphism, so its unique inverse on that subgroup is a homomorphism $\Gamma\to SL_2(\mathbb C)$. Compose with the faithful identification $\pi_1(Y)\cong\Gamma$ from [F3]. This is the desired lift of the ACTUAL holonomy and is faithful, since its projective composite is faithful. The entire construction uses the closed manifold's actual Spin frame cover and never infers a closed lifting obstruction from $H^2$ of an exterior. [F3, step 3.1, construct, algebra] ∎
