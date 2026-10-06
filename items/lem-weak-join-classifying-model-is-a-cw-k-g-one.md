---
id: lem-weak-join-classifying-model-is-a-cw-k-g-one
kind: lemma
title: "The weak-join model is a CW K(G,1)"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-weak-join-classifying-model-for-a-discrete-group
  - lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex
  - lem-compact-cw-images-have-finite-cell-support-without-choice
  - prop-higher-homotopy-basepoint-transport-and-moving-homotopies
  - def-covering-map-and-evenly-covered-neighbourhoods
  - lem-covering-homotopies-lift-by-finite-local-strips
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Milnor, Construction of Universal Bundles II"
      url: "https://uregina.ca/~franklam/Math527/Milnor_Universal2.pdf"
      locator: "Sections 2–3 and 5, printed pp.430–433 and 435–436; join construction and weak CW variant, specialized and justified for discrete groups in local rows 2–3"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Appendix A, Proposition A.1, compact CW support; §4.2 Theorem 4.41, printed pp.375–377, fibration homotopy sequence"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For every discrete group G, J(G) and B_wG are CW complexes; J(G) is path-connected and weakly contractible, and J(G)→B_wG is a covering with fiber G. Therefore B_wG is a marked K(G,1), with the marking that sends a loop whose lift from the vertex $(0,1_G)$ ends at $(0,g)$ to $g^{-1}$, using left-to-right loop concatenation. For H≤G, B_wH embeds as a CW subcomplex of B_wG. Every finite set of cells of B_wG lies in B_wH for a finitely generated subgroup H≤G.

## Facts & Assumptions

**Given:** AC; a discrete group $G$; the weak geometric realization $J(G)$ of the abstract simplicial complex with vertices $(s,g)$, $s\in\mathbb N$, $g\in G$, simplices the finite sets with distinct slots, and the orbit quotient $B_wG=J(G)/G$.

[F1] The construction of $J(G)$ and $B_wG$ is fixed by the weak-join definition, including the right action and the orbit quotient topology ([[def-weak-join-classifying-model-for-a-discrete-group]]).

[F2] Simplex disks with finite face support and orbit disks form CW complexes with the weak attachment topology ([[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]]), and compact images in CW complexes have finite cell support without choice ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

[F3] Covering maps have evenly covered neighbourhoods and unique homotopy lifting, hence are Hurewicz fibrations, and their long exact homotopy sequence computes the base homotopy groups from the total space and discrete fiber ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[lem-covering-homotopies-lift-by-finite-local-strips]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] Based homotopy classes transport along homotopy tracks, so an unbased nullhomotopy makes the based class zero ([[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F5] AC is used to choose orbit representatives and finitely generated subgroups ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Each simplex is a closed finite-dimensional disk with its usual faces, attached to the previously constructed skeleton. Its boundary has finitely many faces. The finite-boundary-support CW construction gives J(G) and its weak topology, with disjoint simplex interiors. The action preserves faces and their slot ordering, and is free: any occupied slot has label g, and gh=g forces h=1. Distinct vertices of a simplex have different slots, so no nonidentity action identifies two points within one simplex. For B_wG choose one representative for each orbit of simplices, oriented in increasing slot order. Their disks attach by their face orbits, with finite boundary support and disjoint interiors. A set is closed in this cell construction exactly when its inverse image is closed on each simplex of J(G); that is also the orbit-quotient closed-set criterion. Thus the constructed CW topology is exactly the orbit topology. [given, F1, F2, F5]

2.1 Let t_s be the weight in slot s. It is continuous by the map-out criterion on each characteristic simplex. On its positive locus the label g_s is continuous into discrete G: the open star of (s,g) is the locus t_s>0, g_s=g, checked on each simplex. Let U_s⊂B_wG be t_s>0. Normalizing a representative by right multiplication by g_s^{-1} defines a section on U_s, since (x h)(g_s h)^{-1}=x g_s^{-1}. On the corresponding open sets the normalizing map is continuous, as is seen on every characteristic simplex with its fixed slot labels. Its descended section is continuous by the quotient criterion restricted to the saturated open preimage. The maps (b,h)↦s_s(b)h and x↦(p(x),g_s(x)) are continuous inverses between U_s×G and p^{-1}U_s. These are ordinary covering charts because G is discrete. The charts cover B_wG. [step 1.1, F1]

3.1 Any two vertices of J(G) are joined by an edge if their slots differ; otherwise insert a vertex in a different slot and use two edges. Every point lies in a simplex and joins a vertex there, so J(G) is path-connected. A sphere map into J(G) meets finitely many cells by the published compact CW-support lemma. These cells use finitely many slots. Select another slot and the vertex labelled 1 in it. Coning each of those finitely many simplices to this vertex gives a finite subcomplex, and the barycentric join homotopy contracts the image inside it. The finite disk/face formulas agree and give an ordinary continuous homotopy. Thus all positive homotopy groups vanish. An unbased contraction of one sphere map also makes its based class zero: basepoint transport along the homotopy track is an isomorphism and carries it to the constant class. This uses no global contraction or unproved compact-stage assertion. [step 2.1, F2, F4]

4.1 The covering is a fibration by the published covering-lifting lemma. Fix the vertex $(0,1_G)$ upstairs and its image downstairs. Lifting a loop gives a unique endpoint $(0,g)$; the marking is $[\alpha]\mapsto g^{-1}$. For successive loops with endpoints $a$ and $b$, the second lift starting at $(0,a)$ is the right translate by $a$ of its lift from $(0,1_G)$, so the concatenated endpoint is $ba$. Taking inverses makes the marking a homomorphism for left-to-right loop concatenation. It is surjective because the total space is path connected; its kernel is zero because a closed lifted loop is nullhomotopic in the simply connected total space and its nullhomotopy projects downstairs. The fibration exact sequence and the discrete fiber give $\pi_i(B_wG)=0$ for $i>1$. Hence this is the stated marked CW $K(G,1)$. [step 3.1, F3]

5.1 For H≤G, an orbit of a simplex whose labels lie in H can coincide with another such orbit under a translation g∈G only when g∈H: inspecting one vertex proves this. Therefore the H-orbit cells inject, and their faces remain H-orbit cells, giving a subcomplex B_wH. Normalize each simplex orbit by making its first label 1. Its remaining finitely many labels generate a finitely generated subgroup. Taking generators from finitely many cells gives one subgroup containing all those cells and their faces. This proves the final assertion. [step 4.1, F5] ∎
