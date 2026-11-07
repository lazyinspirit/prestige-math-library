---
id: lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks
kind: lemma
title: "Opposite definite normal pairings force common circles to bound disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-collar-neighborhood-theorem
  - thm-euclidean-inverse-function-theorem
  - lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph
  - lem-nullhomologous-interior-circle-bounds-an-orientable-homology-injective-subsurface
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - lem-seifert-stabilization-preserves-levine-tristram-signature
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the proved knot Seifert-pairing and S-equivalence/signature interfaces. It implies countable choice for collars and finite surface cellulations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua E. Greene, Alternating links and definite surfaces, Lemmas 3.3–3.4, printed pp.5–6"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Fact 2.23, printed p.11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_+,F_-$ be connected compact smooth surfaces embedded in the oriented standard three-sphere, each with nonempty boundary and possibly nonorientable. Supply quadratic forms $q_\pm$ on $H_1(F_\pm;\mathbb Q)$, positive definite and negative definite respectively. Suppose that for every oriented rational multicurve $c$ in the interior of the corresponding surface, $q_\pm[c]=\operatorname{lk}(c,\tau_\pm c)$. Here $\tau_\pm c$ is the cycle obtained by pushing the two-sheeted unit normal line cover of $c$ a sufficiently small distance off that surface, with both sheets oriented by projection to $c$; linking is extended bilinearly over rational coefficients. Let $\gamma$ be a smooth embedded circle in both interiors, and assume their tangent planes are transverse along $\gamma$. Then $\gamma$ bounds a smooth embedded disk in each of $F_+$ and $F_-$. Zero-dimensional first homology is allowed in the definiteness assumptions. The statement makes no assertion that the two disk interiors are mutually disjoint.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the two compact surfaces, their supplied opposite definite normal-transfer quadratic forms, and their common transverse interior circle $\gamma$.

[F1] Full AC implies countable choice. Smooth manifolds with boundary have smooth collars under countable choice. ([[thm-choice-implies-dependent-implies-countable-choice]], [[thm-collar-neighborhood-theorem]])

[F2] A compact smooth subsurface of a second-countable boundaryless smooth surface has a finite triangular presentation relative to a prescribed finite embedded smooth graph and its boundary, under countable choice. ([[lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph]])

[F3] In such a supplied finite presentation, a rationally nullhomologous interior circle bounds an orientable connected one-boundary subsurface whose rational first homology injects into that of the original surface. ([[lem-nullhomologous-interior-circle-bounds-an-orientable-homology-injective-subsurface]])

[F4] On an oriented surface with one boundary knot, the positive-push Seifert pairing is a well-defined bilinear homology pairing, all integral homology classes have oriented multicurve representatives, and linking of disjoint oriented circles is symmetric. ([[lem-seifert-pairing-well-defined]])

[F5] The positive-push Seifert matrices of any two connected compact oriented smooth surfaces spanning the same oriented knot are related by integral congruences and the two elementary enlargements or their reverses. ([[lem-seifert-matrices-of-a-knot-are-s-equivalent]])

[F6] Those operations preserve the signature of $H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T$ for every $\omega\ne1$, including $\omega=-1$. This is the ordinary value at that parameter, without an averaged-value convention. ([[lem-seifert-stabilization-preserves-levine-tristram-signature]])

[F7] A smooth map with invertible differential has a smooth local inverse. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Use [F1] to collar the boundaries of both surfaces. Gluing two copies by reflection in the boundary collar gives for each a compact smooth boundaryless double; the collar charts have signed normal coordinate, so each original surface is a codimension-zero smooth subsurface of its double. The double is Hausdorff and second-countable, as follows from the two finite compact chart covers and the finitely many collar charts. Subdivide $\gamma$ by finitely many vertices and apply [F2]. This supplies a finite triangular presentation of each $F_\pm$ relative to its boundary and $\gamma$. No orientability of the doubles is required. [given, F1, F2, construct]

1.2 Orient $\gamma$ arbitrarily and use the round metric of $S^3$. Its normal planes are oriented by its tangent and the ambient orientation. The two surface normal lines $n_+(s),n_-(s)$ are distinct lines in these planes by transversality. There is a unique positively oriented angle $\theta(s)\in(0,\pi)$ carrying the first unoriented line to the second. This is a smooth function on the circle, including when either normal line bundle is nontrivial: line angles are taken modulo $\pi$, and their nonzero difference has a unique representative in that open interval. For a sufficiently small constant radius, rotate both unit vectors of $n_+(s)$ through $t\theta(s)$ in their normal plane. These are embedded cycles disjoint from $\gamma$, varying by an isotopy and ending at the two normal pushes for $F_-$. To verify the needed tube directly, the round exponential map from the normal plane bundle has invertible differential on its zero section by [F7]; compactness gives a common small radius, and collisions at arbitrarily small radii would converge to one base point, contradicting that local inverse. Both possible connectedness types of the two-sheeted normal cover are therefore included. The cycles retain their orientation by projection to $\gamma$. Their linking with $\gamma$ is unchanged, since this isotopy is a homology in its complement. Thus $q_+[\gamma]=\operatorname{lk}(\gamma,\tau_+\gamma)=\operatorname{lk}(\gamma,\tau_-\gamma)=q_-[\gamma]$. [given, F7, construct]

2.1 Positive definiteness makes the first value nonnegative and zero only at the zero class. Negative definiteness makes the last nonpositive and zero only at the zero class. Their equality in step 1.2 forces both to be zero and forces $[\gamma]=0$ in each rational homology group. Apply [F3] in the presentations from step 1.1 to obtain orientable connected subsurfaces $A_\pm$ with sole boundary $\gamma$ and injective homology maps into $F_\pm$. The subsurfaces have the inherited smooth structure: near $\gamma$ their boundary is one smooth side of that interior circle, and elsewhere their points are interior points of $F_\pm$. Orient both so that their boundary orientation is the same chosen orientation of $\gamma$. [step 1.1, step 1.2, F3, algebra, construct]

3.1 The restricted forms on $H_1(A_\pm;\mathbb Q)$ remain respectively positive and negative definite by the injections in step 2.1. Let $V_\pm$ be positive-push Seifert matrices for these two oriented spanning surfaces of the actual knot $\gamma$. Their symmetrizations give precisely those restrictions. Indeed on an oriented multicurve $c\subset A_\pm$, its two normal sheets are $c^++c^-$. Moving the disjoint pair $(c^-,c)$ together through the normal collar to $(c,c^+)$ preserves linking, while symmetry in [F4] gives $\operatorname{lk}(c,c^-)=\operatorname{lk}(c,c^+)$. Hence $q_\pm[c]=2\operatorname{lk}(c^+,c)=c^T(V_\pm+V_\pm^T)c$. All integral classes have multicurve representatives by [F4]; multiplying by a denominator handles rational classes. Equality of the quadratic forms on all those classes gives equality of the associated symmetric forms by polarization. The normal collar on $A_\pm$ is the restriction of the ambient normal collar on $F_\pm$, so no framing change occurs. [given, step 2.1, F4, algebra]

4.1 By [F5] the two Seifert matrices are S-equivalent. Apply [F6] at $\omega=-1$, where $H_{-1}(V)=2(V+V^T)$, to conclude that their symmetrizations have the same signature; positive multiplication by two does not change positive or negative indices. Write $r_\pm=\dim_{\mathbb Q}H_1(A_\pm;\mathbb Q)$. By step 3.1 their signatures are $r_+$ and $-r_-$, including dimension zero. Therefore $r_+=-r_-$, and since both are nonnegative integers, both vanish. This uses the proved knot S-equivalence and ordinary signature calculation, without a Gordon–Litherland signature formula. [step 2.1, step 3.1, F5, F6, algebra]

5.1 For completeness the zero homology conclusion makes each $A_\pm$ a disk by a finite collapse argument. In its finite triangulation choose a spanning tree in the triangle adjacency graph with an additional exterior vertex joined along boundary edges. This graph is connected by the surface vertex links and connectedness. Starting at the exterior, delete each triangle together with its edge toward its already deleted parent; that edge is free at its deletion. A free-side triangle collapses onto its two other sides. The remaining connected finite graph is a spine. The original surface is homeomorphic to a thickening of this graph: reversing one collapse attaches a triangular disk bulge along the two retained side intervals, which is a disk replacement relative to those intervals, and reversing the finite list recovers the surface thickening. A connected finite graph has first rational homology of dimension its number of edges outside a spanning tree, by its edge boundary matrix. Step 4.1 thus makes this graph a tree. A thickening of a tree is a disk, by removing leaf disks and their incident bands until one vertex disk remains. Consequently each $A_\pm$ is a disk region with its smooth inherited surface structure and smooth boundary $\gamma$, proving the assertion. The two disks need not have disjoint interiors, and none has been asserted. [step 1.1, step 2.1, step 4.1, construct, algebra] ∎
