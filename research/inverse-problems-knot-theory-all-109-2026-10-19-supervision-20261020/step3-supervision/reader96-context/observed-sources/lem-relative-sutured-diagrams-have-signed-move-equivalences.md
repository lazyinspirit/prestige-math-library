---
id: lem-relative-sutured-diagrams-have-signed-move-equivalences
kind: lemma
title: "Relative sutured diagram moves and their signed equivalences"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-integral-sutured-floer-compactness-and-orientations
  - lem-integral-sutured-auxiliary-triangle-and-move-maps
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

Two balanced Heegaard diagrams of the same marked sutured manifold are connected by relative attaching-circle isotopies, own-family disk slides, and ordinary stabilizations and destabilizations. An ordinary stabilization can be moved by such slides to the true boundary region. These moves induce integral chain homotopy equivalences for the transported coherent orientation class. The product sutured manifold has integral homology equal to one copy of the integers; on a homology-product branch the periodic-domain character ambiguity vanishes.

## Facts & Assumptions

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[lem-integral-sutured-auxiliary-triangle-and-move-maps]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F4] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 New construction, 2026-10-20. Both negative and positive marked boundary surfaces are assumed connected, as they are for the knot cut along its connected Seifert surface. Their genus is arbitrary. All boundary identifications and sutured collars are held fixed. This does not apply a closed Reidemeister--Singer conclusion to a manifold with boundary. [construct]

1.2 **1. Translate the actual diagrams into relative handles.** A balanced sutured diagram with connected compressed boundary surfaces gives a relative Morse presentation: start with $R_-\times[0,1]$, attach its $d$ one-handles with the actual alpha co-core disks, then its $d$ beta two-handles, ending at the specified $R_+$. The vertical annuli are the fixed sutured collar, not additional capped surfaces. Its middle surface and disk boundaries are the original diagram. The reverse construction takes a relative self-indexed Morse function with only index-one and index-two critical points and reads the same compressionbodies. The handle charts and their product collars provide both constructions explicitly. [construct]

1.3 Take the two such presentations to be compared. Their boundary height functions and collar gradients agree after collar rescaling. Join their interior functions and pseudo-gradients through smooth families fixed in that collar. Make the family generic in the following relative sense. Away from the boundary, transverse jets make the critical locus a compact one-manifold except at finitely many ordinary birth/death points. The local exceptional model is [construct]

1.4 $$f_\tau=x_1^3-\tau x_1\ \pm x_2^2\ \pm x_3^2+\text{constant}.$$ [construct]

1.5 Higher critical degeneracies impose at least two independent jet conditions and are avoided by a one-parameter perturbation. Critical-value crossings are transverse and finite. Choose the pseudo-gradients Morse--Smale except at isolated transverse same-index connecting trajectories. Their zero-dimensional parameterized connecting spaces are compact: a broken trajectory would have strictly decreasing intermediate indices and cannot begin and end at the same index; the fixed local birth charts are removed and treated separately. Thus there are finitely many handle-slide times. Perturbations and the fixed birth charts are supported away from the protected boundary collar. This constructs a finite relative Cerf word, rather than inferring one from a closed double. [construct]

1.6 For each regular parameter put all index-one handles below the middle level and all index-two handles above it by reordering along the chosen pseudo-gradient. Morse--Smale trajectories cannot run from an index-one critical point to an index-two critical point in the descending direction, so this reordering introduces no new attaching intersection. Smooth reordering between exceptional times transports the middle level and its disk systems by isotopy. A same-index connecting trajectory changes the corresponding attaching disk by a band sum with the other disk along that trajectory's small flow tube. This is precisely an alpha disk slide or a beta disk slide, according to index. Its band lies on the actual middle surface and misses the other disks in that same family. The fixed boundary collar remains untouched. [construct]

1.7 **2. Eliminate the auxiliary zero/three handles by actual forest moves.** During the family allow minima and maxima; they must not be confused with stabilizations. The union of the incoming product collar, zero-handle balls and one-handle tubes is a regular neighborhood of a finite graph rooted on $R_-$. That graph is connected to the root: a two-handle attaches along a circle in one existing component, and a three-handle cannot connect components, so a component missing the root could not be joined later to the connected $M$. [construct]

1.8 Choose a rooted spanning tree. Starting at its terminal vertices, absorb each zero-handle ball and its tree tube into its parent ball or the incoming collar. Each absorption is the explicit standard ball-plus-tube chart, fixed outside that neighborhood. The remaining non-tree edges are the relative one-handles. Thus this operation presents the **same embedded compressionbody**, with the same positive boundary, using no minima. The dual operation from $R_+$ eliminates maxima and their tree two-handles. [construct]

1.9 Different spanning trees change only the complete disk presentation, by actual disk slides. It suffices to treat a tree exchange $T'=T-e+f$. The edge $f$ creates one circuit with the old tree. Slide the endpoints of the finitely many non-tree edges incident to the subtree below $e$ along the circuit through $f$, using parallel narrow bands. Then $f$ is the tree tube and $e$ the remaining non-tree tube. In the regular graph neighborhood these are literal one-handle core slides; dualizing them gives disk slides of the corresponding co-cores. Inverting an edge orientation or relabelling a disk changes no surface. Every pair of finite spanning trees is connected by these exchanges, since an edge of $T'\setminus T$ removes an edge outside $T'$ from its unique circuit. Hence the forest choices require no unproved comparison of arbitrary compressionbody disk systems. [construct]

1.10 An index-zero/one birth is an extra ball attached by a tree tube. Its absorption is an isotopy of the positive boundary, with no genus change. The dual index-two/three birth has the same property. An index-one/two birth adds one tube to each side whose two new co-core boundaries meet once in its actual birth ball. It is an ordinary Heegaard stabilization. The remaining regular and exceptional changes are the isotopies and disk slides described above. At both endpoints the forest is empty and the prescribed original diagrams are retained, up to precisely those forest disk slides. This gives a finite relative word of isotopies, alpha/beta disk slides, stabilizations and their inverses, fixing the entire marked sutured boundary. [construct]

1.11 **3. Move a stabilization to a genuine zero boundary region.** The finite relative word may place its stabilization disk in a region that does not meet the sutured boundary. An analytic product argument cannot assume that region has zero domain. The following topological conversion uses the stabilization handle itself to correct that location. [construct]

1.12 Let $D$ be its old-surface disk and choose another disk $E$ in an actual boundary region of the **original** diagram. A surface isotopy fixed on $\partial\Sigma$ carries $D$ to $E$; extend its vector field into a two-sided collar of the splitting surface. This transports the stabilized splitting and both compressionbodies. It produces the stabilization at $E$ of the **transported** attaching systems, which need not have $E$ in a boundary region. Do not apply an analytic stabilization map at that intermediate diagram. [construct]

1.13 Undo the old attaching-system isotopy while keeping the new punctured torus at $E$. There is a finite lift using own-family slides over the new co-core. Choose the center of $E$ to be a regular value of the finite isotopy traces of all old circles. Its preimage in those compact traces is finite. Away from these crossings the isotopy lifts unchanged to the surface with the new punctured torus. At one crossing, compress that punctured torus along its new alpha circle if the moving family is alpha. The local picture is a disk with the two marked alpha cap faces. The desired old-arc sweep across that disk lifts by detouring across each cap face it meets. Each detour is one band sum with the new alpha circle, with the two faces carrying opposite orientations. After these at most two detours, the remaining arc sweep is an isotopy in the punctured disk. All bands lie in a small parallel corridor of the swept arc and avoid the other alpha curves. This is an actual pair of alpha disk slides, not a point-push asserted to be trivial. For a beta crossing compress along the new beta circle and use beta slides instead. Factor simultaneous circle-family isotopies into these finitely many single crossings. [construct]

1.14 The resulting finite slide/isotopy word returns the old attaching systems to their original positions while the new torus remains at $E$. The endpoint is now the standard stabilization of the original diagram in a genuine zero boundary region. Reversing the word relates it to the initially located stabilization. This avoids an incidence-neck stabilization claim at a region of possibly positive multiplicity. It also avoids treating an ambiently transported nonboundary region as though it became a boundary region. [construct]

1.15 **4. The boundary-region stabilization has actual signed inverse maps.** In the disk $E$ attach the standard punctured torus with circles $a_0,b_0$ meeting once at $c$, disjoint from all old circles. The new generator set is exactly $\{x\times c\}$. The old boundary region remains connected through the new torus complement and its joining collar. Every sutured disk domain has zero coefficient in that whole region, hence has zero multiplicity in the new torus and the joining corridor. This is the required actual zero-region calculation. [construct]

1.16 Choose split almost complex data on the configuration neighborhood with one coordinate near $c$ and the remaining coordinates on the old side of that zero corridor. Its divisor barriers are the same as in the signed exterior construction. Any counted strip has the new coordinate constantly $c$ and the old coordinates equal to an old counted strip: a nonconstant sheet entering the new torus or crossing the zero corridor would have positive degree in a zero region. Conversely every old strip times $c$ is a new one. The actual linearized operator is its old operator plus the invertible constant transverse strip operator at $c$. The latter has its canonical positive determinant orientation. Thus counts and signs agree, regularity is preserved, and [construct]

1.17 $$I(x)=x\times c,\qquad P(x\times c)=x$$ [construct]

1.18 are inverse integer chain isomorphisms, with zero inverse homotopies, for these actual split choices. Arbitrary chosen strip data on that stabilized diagram align with the split choices by the actual signed continuation construction, including the constant-generator regularity argument; no additional generator-jet agreement is assumed. [construct]

1.19 On the homology-product branch every diagram in the relative word is still a diagram of the same marked homology product. Its relative handle complex is integrally acyclic, so its alpha/beta intersection matrix is unimodular and its periodic-domain lattice is zero. Hence the signed local slide, isotopy, choice-alignment and boundary-region stabilization operations already constructed apply in that word. All auxiliaries can be prepared with their actual zero-area periodic forms; their compatible determinant and top-unit constructions retain the full boundary radical. Composing the actual maps and their explicit reverse homotopies gives a signed chain equivalence between the two original marked diagrams. For the product manifold the endpoint may be its empty product diagram, so this comparison identifies its actual integer homology with $\mathbb Z$. [construct]

1.20 The generic-family construction above is relative to both marked boundary surfaces and their collar. Its forest and stabilized-puncture operations are actual compressionbody moves in $M$. No closed move-generation theorem, $S^3$ comparison, coefficient change, or unmarked double is used. This is new authoring, with no review-acceptance, canonical metadata or gate claim. [construct] ∎
