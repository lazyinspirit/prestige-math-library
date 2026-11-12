---
id: lem-author-80f982ded420-clopen-filtered-products
kind: lemma
title: Finite clopen restrictions split the actual motivic image filtration
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - prop-motivic-graded-spectral-sequence
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-nonconnective-k-spectrum-interface
  - prop-perfect-k-localization-input
  - def-stable-spectra-interface
  - def-scheme-perfect-complexes
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-sheaf-on-topological-space
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-grothendieck-universe-closure-convention
  - lem-author-ab0a6fc202cb-finite-derived-products
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - def-motivic-filtration
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - def-scheme-perfect-complexes
argument_deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - prop-motivic-graded-spectral-sequence
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-nonconnective-k-spectrum-interface
  - prop-perfect-k-localization-input
  - def-stable-spectra-interface
  - def-scheme-perfect-complexes
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-sheaf-on-topological-space
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-grothendieck-universe-closure-convention
  - lem-author-ab0a6fc202cb-finite-derived-products
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-author-ab0a6fc202cb-clopen-derived-descent: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-author-ab0a6fc202cb-finite-derived-products: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe size bounds of the supplied constructions. Let $k$ be a field, $X$ a qcqs $k$-scheme, and $X=\coprod_eX_e$ any finite clopen partition. For this partition and every $j\geq0$, actual restrictions induce equivalences
$$F^j_{\mathrm{mot}}K(X)\simeq\prod_eF^j_{\mathrm{mot}}K(X_e)$$
commuting with the stage-to-zero maps. Hence
$$F^j_{\mathrm{mot}}K_0(X)\cong\bigoplus_eF^j_{\mathrm{mot}}K_0(X_e)$$
inside the actual $K_0$ product. In particular zero extension of a class in $F^j_{\mathrm{mot}}K_0(X_e)$ belongs to $F^j_{\mathrm{mot}}K_0(X)$. This does not assume that motivic stages have arbitrary proper pushforward maps.

## Facts & Assumptions
[A1] Assume the Axiom of Choice, [[math:def-axiom-of-choice]], and the fixed compatible site bounds and nested Grothendieck universes of the supplied constructions, with $\omega$ in the base universe. The closure convention is [[math:def-grothendieck-universe-closure-convention]]; existence of these universes is a separate size assumption. These premises are retained at the first uses of the perfect categories, K-theory, motivic complexes and actual tower below. The specified field $k$ overrides the default algebraic-closedness convention of the filtration definition.

**Given:** The Axiom of Choice, these size bounds, a field $k$, a qcqs $k$-scheme $X$, its finite clopen partition and the actual augmented motivic tower.

**Goal:** Prove the restriction equivalences and identify zero extension in their actual image filtration.

[F1] [[def-scheme-perfect-complexes]] specifies the enhanced localization of sheaf cochain complexes at quasi-isomorphisms, local perfectness, full supported subcategories and their exact triangles. [[def-nonconnective-k-spectrum-interface]] specifies the nonconnective functor $\mathbb K$, its essentially small perfect-category domain, exact pullbacks and $K_i=\pi_iK$. The sheaf axiom, including the empty cover, is [[math:def-sheaf-on-topological-space]]. Exactness of underlying abelian sheaves can be tested on stalks by [[math:thm-exactness-of-sheaves-stalkwise]]; module kernels and images carry their inherited scalar actions, so the same test applies to module sheaves. These inputs will justify the clopen extension construction rather than assume it.

[F2] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] gives the actual enhanced derived Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ at each $j\geq0$, on qcqs schemes over any specified field by restriction from its prime field. [[lem-author-ab0a6fc202cb-clopen-derived-descent]] gives its actual restriction equivalence on a finite clopen partition and its zero value on the empty scheme, under the same Choice and size bounds.

[F3] [[prop-motivic-graded-spectral-sequence]] supplies the natural stage triangles $F^{j+1}_{\mathrm{mot}}K\to F^j_{\mathrm{mot}}K\to\mathbb Z(j)_{\mathrm{mot}}[2j]$ for every $j\geq0$ and every qcqs $k$-scheme, without a dimension hypothesis. [[def-motivic-filtration]] fixes stage zero as $K$, coherent pullback restrictions, the augmentation and its image groups.

[F4] [[def-stable-spectra-interface]] supplies the stable category of spectra, its zero object, coherent limits, fiber/cofiber triangles, all integer homotopy groups and detection of equivalences by those groups. A product of fiber squares is again a fiber square: the mapping-space universal property identifies the iterated limits in either order. The same property gives the product comparison for homotopy groups by mapping the shifted sphere into a finite product.

[F5] Qcqs means quasi-compact and quasi-separated as in [[math:def-quasi-compact-and-quasi-separated-scheme]]: every open cover has a finite subcover, and intersections of affine opens are quasi-compact. A finite clopen partition means a disjoint finite covering by open-and-closed subschemes with restricted structure sheaves, as in [F2]; empty pieces and the empty partition are allowed. [[prop-perfect-k-localization-input]] supplies actual open-cover Mayer–Vietoris for perfect K-theory on qcqs schemes and $K(\varnothing)\simeq0$, with no normality, affineness, finite-type or dimension assumption.

[F6] [[lem-author-ab0a6fc202cb-finite-derived-products]] gives the projection-induced isomorphisms $H^q(\prod_e C_e)\cong\prod_e H^q(C_e)$ in $D(\mathbb Z)$, including the empty product. Use the actual derived realization fixed in [F3], Facts & Assumptions [F5]: for any enhanced derived complex $C$, write $\mathcal U C$ for its underlying spectrum through $\mathcal D_\infty(\mathbb Z)\simeq\operatorname{Mod}_{H\mathbb Z}$. That supplier gives $\pi_n\mathcal U C=H^{-n}(C)$ and $\mathcal U(C[t])\simeq(\mathcal U C)[t]$, naturally in complex maps. In particular the actual graded comparison in [F3] has target $(\mathcal U C_j)[2j]$ and gives $\pi_n((\mathcal U C_j)[2j])=H^{2j-n}(C_j)$. These are the actual realization and restriction maps of that triangle; no comparison with an independently constructed Eilenberg–Mac Lane spectrum is assumed.

## Proof
1.1 First check the geometry and construct zero extension under [A1]. Every clopen subset $W\subseteq X$ is quasi-compact: adjoining its open complement to any open cover of $W$ gives an open cover of $X$, whose finite subcover restricts to one of $W$. Every open subscheme of $X$ is quasi-separated, since its affine opens and their intersections are affine opens and intersections in $X$. Hence the pieces, complementary unions and their intersections are qcqs; iterated intersections of partition pieces are a piece or the empty scheme, so they remain in the size-bounded category of [F2]. For a clopen inclusion $i:W\hookrightarrow X$ and a sheaf cochain complex $E$ on $W$, define $(i_!E)^n(V)=E^n(V\cap W)$ on each open $V\subseteq X$, with coordinate differential and scalar action through $\mathcal O_X(V)\to\mathcal O_W(V\cap W)$. An open cover of $V$ restricts to one of $V\cap W$, so [F1] proves this is a module sheaf in each degree. Its stalk complex is $E_x$ on $W$ and zero on the open complement. The stalk criterion in [F1] makes this construction exact and quasi-isomorphism preserving. Sheaf gluing on $V=(V\cap W)\amalg(V\setminus W)$ gives a natural inverse to restriction of module complexes to the two pieces: the inverse assigns to a pair the product of these two zero extensions. These inverse constructions preserve quasi-isomorphisms and commute with shifts and mapping cones, so localization gives inverse exact functors on the supplied derived enhancements. Open pullback is this restriction, since the open subscheme has the restricted structure sheaf. By the local definition in [F1], an extended perfect object is perfect on $W$ and is the zero perfect object on its complement. Consequently $i_!$ identifies $\operatorname{Perf}(W)$ exactly with $\operatorname{Perf}_W(X)$, and its restrictions are the identity on $W$ and zero on the complement. This construction transports through the specified perfect-category realization of [F1], without choosing unrelated models. Now [F5] for a binary clopen cover $X=A\amalg B$ gives the actual restriction equivalence $K(X)\simeq K(A)\times_{K(\varnothing)}K(B)\simeq K(A)\times K(B)$. Applying the functor $\mathbb K$ in [F1] to the constructed exact zero-extension functors shows that they induce its coordinate inclusions, by their restriction identities. Iterate this binary restriction equivalence for a finite nonempty partition; empty pieces contribute $K(\varnothing)=0$. For an empty partition $X=\varnothing$, [F5] gives the same assertion. Thus stage zero and the zero-extension identification hold in the full stated scope. [A1, F1, F2, F4, F5, given, construct]

2.1 We next transfer derived clopen descent to the graded spectra and induct up the actual tower. For $C_j(T)=\mathbb Z(j)_{\mathrm{mot}}(T)$, [F2] gives $C_j(X)\simeq\prod_e C_j(X_e)$ by actual restrictions. Its coherent product is also a product in the homotopy category: taking components of the mapping-space product universal property preserves finite products. By [F6], restriction therefore gives $H^q(C_j(X))\cong\prod_e H^q(C_j(X_e))$ for every integer $q$, including the empty case. Use the actual derived realization $\mathcal U$ and its natural index formula from [F6]. The comparison for homotopy groups of spectral products in [F4] identifies the map on $\pi_n$ of the actual restriction $(\mathcal U C_j(X))[2j]\to\prod_e(\mathcal U C_j(X_e))[2j]$ with the just-proved cohomology restriction in degree $2j-n$. Hence this actual map is an isomorphism on every $\pi_n$, including for the empty partition, and is an equivalence by [F4]. By the natural graded comparisons in [F3], it is precisely the restriction comparison on the graded spectra of the actual tower. Identify stage zero with $K$ by [F3] and step 1.1. If the actual stage restriction is an equivalence at $j$, compare the natural triangle of [F3] on $X$ with the product of its triangles on the pieces. The middle vertical map is an equivalence by induction and the right one by the just-proved graded comparison. Taking fibers and using [F4] makes the left map an equivalence. Induction proves the assertion for every $j\geq0$, also for the empty partition. All these maps are actual restrictions of the one coherent tower of [F3], so commute with transitions and stage-to-zero maps. Apply $\pi_0$ to these augmentation diagrams. The image of a finite product of homomorphisms is the product of the images: lift each of the finitely many coordinates to a preimage. A finite product of abelian groups is its direct sum, since every tuple has finite support. This proves the claimed image-filtration decomposition inside actual $K_0$. Finally take a stage preimage of a class on one piece and zero stage preimages on the others; the stage restriction equivalence supplies their class on $X$. Its augmentation has the prescribed class on that piece and zeros elsewhere, so step 1.1 identifies it with the exact zero-extension K-class. This proves the final membership assertion without filtered proper pushforwards. [A1, F2, F3, F4, F6, step 1.1] ∎

## Maintenance scope
The Statement is unchanged, including arbitrary fields, qcqs schemes, empty pieces, the empty partition and compatibility with the actual augmentations. The proof supplies clopen zero extension locally and uses general open-cover Mayer–Vietoris at stage zero; no normal affine stratum result is used to broaden its scope. The current graph has twelve direct clopen consumers. Their cited uses of restriction, augmented products and zero extension retain the same interface; the third-Chern corollary's citation to Proof step 2.1 still supplies its motivic-cohomology product comparison. This repair changes no Statement or Definition and requires no consumer restatement. This is a repair proposal for generated content, with no new primary-source reading, source-author defect attribution, publication or independent acceptance claim.
