---
id: lem-consumer-7597618bb156-etale-point-calculation
kind: lemma
title: The actual EM point calculation through an étale chart
status: draft
domain: mathematics
deps:
  - lem-consumer-7597618bb156-projective-point-test
  - lem-author-d026a7b99ace-supported-chern-map
  - lem-author-d026a7b99ace-positive-coordinates
  - lem-adjudicate-1f4b2e0378b1-flat-natural-supported-cycle-comparison
  - lem-author-59b1a831fe59-neighborhood
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:thm-smooth-local-standard-form
  - math:def-relative-dimension-smooth-morphism
  - math:prop-algebraically-closed-splitting-and-finite-extension-criteria
  - math:def-perfect-field
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - math:cor-affine-scheme-quasi-compact
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:lem-flatness-affine-local-source-target
  - math:def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - math:thm-affine-fibre-product-tensor-ring
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - math:def-smooth-morphism-schemes
  - math:lem-finite-type-local-on-source-and-target
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:cor-affine-schemes-separated
  - math:lem-separatedness-of-open-and-closed-immersions
  - math:lem-separated-stable-under-composition
dependency_roles:
  lem-consumer-7597618bb156-projective-point-test: mathematical-premise
  lem-author-d026a7b99ace-supported-chern-map: mathematical-premise
  lem-author-d026a7b99ace-positive-coordinates: mathematical-premise
  lem-adjudicate-1f4b2e0378b1-flat-natural-supported-cycle-comparison: mathematical-premise
  lem-author-59b1a831fe59-neighborhood: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:thm-smooth-local-standard-form: mathematical-premise
  math:def-relative-dimension-smooth-morphism: mathematical-premise
  math:prop-algebraically-closed-splitting-and-finite-extension-criteria: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:cor-algebraic-extensions-of-perfect-fields-are-separable: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:lem-distinguished-open-refinement-at-a-point: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:lem-flatness-affine-local-source-target: mathematical-premise
  math:def-flat-and-faithfully-flat-modules-and-ring-maps: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:cor-tensor-product-with-a-quotient-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:cor-affine-schemes-separated: mathematical-premise
  math:lem-separatedness-of-open-and-closed-immersions: mathematical-premise
  math:lem-separated-stable-under-composition: mathematical-premise
formulation_deps:
  - lem-consumer-7597618bb156-projective-point-test
  - lem-author-d026a7b99ace-supported-chern-map
  - lem-author-d026a7b99ace-positive-coordinates
  - lem-adjudicate-1f4b2e0378b1-flat-natural-supported-cycle-comparison
  - lem-author-59b1a831fe59-neighborhood
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:thm-smooth-local-standard-form
  - math:def-relative-dimension-smooth-morphism
  - math:prop-algebraically-closed-splitting-and-finite-extension-criteria
  - math:def-perfect-field
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - math:cor-affine-scheme-quasi-compact
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:lem-flatness-affine-local-source-target
  - math:def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - math:thm-affine-fibre-product-tensor-ring
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
argument_deps:
  - lem-consumer-7597618bb156-projective-point-test
  - lem-author-d026a7b99ace-supported-chern-map
  - lem-author-d026a7b99ace-positive-coordinates
  - lem-adjudicate-1f4b2e0378b1-flat-natural-supported-cycle-comparison
  - lem-author-59b1a831fe59-neighborhood
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:thm-smooth-local-standard-form
  - math:def-relative-dimension-smooth-morphism
  - math:prop-algebraically-closed-splitting-and-finite-extension-criteria
  - math:def-perfect-field
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - math:cor-affine-scheme-quasi-compact
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:lem-flatness-affine-local-source-target
  - math:def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - math:thm-affine-fibre-product-tensor-ring
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - math:def-smooth-morphism-schemes
  - math:lem-finite-type-local-on-source-and-target
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:cor-affine-schemes-separated
  - math:lem-separatedness-of-open-and-closed-immersions
  - math:lem-separated-stable-under-composition
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 31
sources:
  references:
    - title: The Stacks Project, étale locality and flatness
      url: https://stacks.math.columbia.edu/tag/02GH
      locator: Definition 29.37.1 and the following openness paragraph; Lemma 29.37.2
        with restriction clause; Lemmas 29.37.3 and 29.37.12, with their short
        proofs
      statement: The étale locus is open; étaleness is affine-local, survives open
        restriction and composition, and implies flatness.
      hypotheses: Morphisms of schemes; no separation, finiteness or nonemptiness
        hypothesis beyond the stated affine charts.
      reading_limits: "Historical source-reading record from the incoming item: Read
        the live primary extraction of the named definition, complete specified
        lemma statements and their short proofs on 12 November 2026. The linked
        algebraic foundations remain imported. Only openness, restriction,
        composition and flatness are used here; no independent comparison of
        Chern operations is imported. Current maintenance checked the supplied
        citation contract and added published Math interfaces for
        comparison-domain hypotheses; it did not reread this primary page or
        reconstruct its imported foundations."
    - title: The Stacks Project, fibres of étale morphisms
      url: https://stacks.math.columbia.edu/tag/02GL
      locator: Lemma 29.37.7(1)–(2), complete statement and direct proof
      statement: An étale fibre over a field is a disjoint union of spectra of finite
        separable extensions; each affine étale scheme over a field is a finite
        such union.
      hypotheses: An étale scheme morphism and a point of its target, or a scheme
        étale over a field. The general disjoint union need not be finite.
      reading_limits: "Historical source-reading record from the incoming item: Read
        the full live primary statement and its direct proof on 12 November
        2026. Finiteness below comes from quasi-compactness of the affine fibre.
        The classification theorem invoked by that proof is imported, not
        reconstructed. Current maintenance checked the supplied citation
        contract and added published Math interfaces for comparison-domain
        hypotheses; it did not reread this primary page or reconstruct its
        imported foundations."
---

## Statement
Assume the Axiom of Choice and the compatible nested universe and site bounds of the supplied actual EM coefficient and perfect K-theory constructions. Let $k$ be algebraically closed and let $V$ be a smooth affine finite-type $k$-scheme of pure dimension three, with closed point $x$. Use the actual EM supported Chern operation and the residue-object and cycle generators $u_x=[\mathcal O_x]$ and $\delta_x$ fixed by the supplied positive-coordinate construction. For every integer $n$,
$$c_{3,x}(nu_x)=2n\delta_x.$$
The calculation is obtained by pullback from the origin of affine three-space through a smooth-point étale chart; it asserts no comparison with an independently constructed classical RR Chern operation.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the compatible nested universes containing $\omega$ required by the coefficient, perfect K-theory and supported-cycle suppliers. Universe existence is a separate assumption. The same bounds are used on the affine charts and all restriction diagrams below.

[F1] [[lem-author-59b1a831fe59-neighborhood]] gives the finite separable residue extension at a smooth closed point under its perfect-field hypotheses. Algebraic closedness makes every irreducible nonconstant polynomial linear, hence separable, so [[math:def-perfect-field]] and [[math:cor-algebraic-extensions-of-perfect-fields-are-separable]] discharge both perfect-field conventions. [[math:prop-algebraically-closed-splitting-and-finite-extension-criteria]] makes this finite residue extension trivial. [[math:def-relative-dimension-smooth-morphism]] identifies the relative dimension here with three, using its finite-type component formula and the identity field extension. [[math:thm-smooth-local-standard-form]] therefore provides an affine open neighbourhood of $x$ étale over $\mathbb A^3_k$.

[F2] [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] checks the qcqs domain for every open of $V$. [[math:cor-affine-scheme-quasi-compact]] makes the affine fibres below quasi-compact under Choice. [[math:lem-distinguished-open-refinement-at-a-point]] and [[math:lem-spectrum-localization-open-immersion]] provide a principal affine neighbourhood inside any specified open neighbourhood of a point in an affine chart. Reference 0 supplies openness of the étale locus, preservation under open restriction and composition, and flatness; reference 1 supplies its fibre description. A fibre over a closed point is closed; on affine charts its scheme is given by the tensor product in [F3].

[F3] [[def-nonconnective-k-spectrum-interface]] fixes the functorial K-theory, its supported categories, pullback on pairs and residue-object classes. [[lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback]] identifies actual affine perfect pullback with derived extension of scalars on bounded finite-projective representatives. [[math:lem-flatness-affine-local-source-target]] turns flatness of an affine morphism into flatness of its ring map, and [[math:def-flat-and-faithfully-flat-modules-and-ring-maps]] supplies exactness of tensor with that flat algebra. [[math:thm-affine-fibre-product-tensor-ring]] identifies its fibre ring as $B\otimes_A k$. [[math:cor-tensor-product-with-a-quotient-ring]] identifies this with $B/\mathfrak m_0B$ for $A=k[t_1,t_2,t_3]$ and $\mathfrak m_0=(t_1,t_2,t_3)$. The origin's coordinate Koszul resolution and its actual supported calculation are supplied by [[lem-consumer-7597618bb156-projective-point-test]].

[F4] [[lem-author-d026a7b99ace-supported-chern-map]] constructs the actual pointed natural transformation on perfect K-spaces before taking restriction fibres. Thus its naturality applies to an étale map of the entire restriction arrows and hence to their support fibres; its open-excision assertion applies on these qcqs opens. [[lem-adjudicate-1f4b2e0378b1-flat-natural-supported-cycle-comparison]] supplies the specified $\Psi$ comparison, natural for étale and open maps, and gives $q^*\delta_0=\delta_x$ when the scheme-theoretic inverse image of the reduced rational origin is exactly the reduced rational point $x$. [[lem-author-d026a7b99ace-positive-coordinates]] selects its positive classes by this same $\Psi$ and provides the open-excision identifications. These are actual maps and selected classes, rather than arbitrary identifications of cyclic groups.

[F5] [[math:def-smooth-morphism-schemes]] makes smoothness unchanged by open source restriction. [[math:lem-finite-type-local-on-source-and-target]] supplies affine locality of local finite type. Together with [[math:def-locally-finite-type-and-finite-type-morphism]], a quasi-compact morphism locally of finite type is finite type. [[math:def-quasi-compact-and-quasi-separated-morphism]] defines quasi-compactness by inverse images of quasi-compact target opens. [[math:cor-affine-schemes-separated]] makes every morphism between affine schemes separated, in particular each affine chart's structure map to $\operatorname{Spec}k$. [[math:lem-separatedness-of-open-and-closed-immersions]] and [[math:lem-separated-stable-under-composition]] then give separatedness of its open subschemes over $k$. These are the domain inputs for the smooth separated finite-type comparison in [F4], including the punctured complements in its restriction arrows.

## External input
Import only the étale openness, restriction, composition and flatness facts of reference 0 and the fibre classification of reference 1, as used in [F2]–[F3]. Their deeper algebraic proofs remain imported. The smooth chart is supplied by the declared Math theorem. The isolation of its fibre, the residue-object pullback calculation and the application to the actual supported Chern operation are locally proved below.

## Proof
**Given:** The smooth affine pure threefold, closed point, actual operations and positive generators, Choice and fixed size assumptions above.

**Goal:** Prove $c_{3,x}(nu_x)=2n\delta_x$ for every integer $n$ using the stated étale chart and actual supported operations.

1.1 By [F1], $x$ is rational and there is an affine neighbourhood with a map to $\mathbb A^3_k$ that is étale at $x$. Its étale locus is open by reference 0; refine inside it to a principal affine neighbourhood $U$ using [F2]. The resulting $q_0:U\to\mathbb A^3_k$ is étale everywhere. Its image at $x$ has coordinates $a_1,a_2,a_3\in k$. Replace each coordinate by $t_i-a_i$, whose inverse translation adds $a_i$; this gives an étale map $q$ sending $x$ to $0$. Both translations are inverse polynomial morphisms, so this composition preserves étaleness. The scheme-theoretic zero fibre is affine and quasi-compact by [F2]–[F3]. Reference 1 makes it a discrete disjoint union of finite separable field spectra; quasi-compactness makes the union finite, and algebraic closedness in [F1] makes every field $k$. Thus it is a finite disjoint union of reduced rational points. Its points are closed in $U$, because the fibre is closed and its finite discrete points are closed in that fibre. Delete the other points and use [F2] to choose a principal affine neighbourhood $W$ of $x$ inside the remaining open. Restriction of $q$ stays étale by reference 0, and its entire scheme-theoretic zero fibre is now the single reduced rational point $x$. The point codimension is three: the neighbourhood result in [F1] gives this at $x$, whose local ring is unchanged by open restriction, and the origin has its three coordinate parameters. Before applying [F4], check the schemes in its whole restriction diagram. Every open $O$ of $V$ is quasi-compact by [F2], smooth by the open-source property in [F5], and locally of finite type over $k$ by [F5]. Its structure morphism is quasi-compact: the only opens of $\operatorname{Spec}k$ are the empty and whole subsets, and their inverse images are quasi-compact. Hence $O$ is finite type over $k$ by [F5]. The affine $k$-scheme $W$ is separated over $k$ by [F5], and its open complement $W\setminus\{x\}$ is separated by the open-immersion and composition assertions there. The target $\mathbb A^3_k$ is the smooth affine standard chart of the projective test in [F3]; the same argument gives finite type and separatedness for it and its punctured complement. Thus both $q$ and its restriction to the complements lie between smooth separated finite-type schemes over the same perfect field, with the fixed size bounds in [A1]. These domain checks and the reduced rational fibre and codimension checks are precisely the hypotheses of [F4]. [A1, F1, F2, F3, F4, F5, construct]

2.1 Write $W=\operatorname{Spec}B$ and $A=k[t_1,t_2,t_3]$. By reference 0 and [F3], $B$ is flat over $A$. The bounded free coordinate Koszul resolution of $k=A/\mathfrak m_0$ from [F3], pulled back by the actual perfect functor, is its termwise tensor with $B$. Exactness of this tensor identifies the result with $B\otimes_A k=B/\mathfrak m_0B$. Step 1.1 identifies its affine scheme with the reduced point $x$, so as a $B$-module this is exactly its residue sheaf, with its quotient action. Hence actual supported pullback sends $u_0$ to $u_x$, and sends $nu_0$ to $nu_x$ for every integer $n$. By [F4], $q^*\delta_0=\delta_x$. Naturality of the actual pointed transformation on the restriction square, followed by functoriality of homotopy fibres, therefore gives $c_{3,x}(nu_x)=q^*c_{3,0}(nu_0)=q^*(2n\delta_0)=2n\delta_x$, using the standard calculation in [F3]. Open excision in [F4] transfers this equality from $W$ to the original $V$, preserving the selected generators. No isomorphism or injectivity of the support-to-global map on $V$ is used, and no independent classical Chern operation is substituted for the actual EM operation. [A1, F1, F2, F3, F4, step 1.1] ∎

## Reading limits
This maintenance read the full current assigned body, all 21 current direct supplier interfaces, the projective test argument, the Chern-operation fibre construction, and the direct RR/global-square consumer. It additionally read the seven published Math interfaces now declared in [F5]. The domain argument verifies smoothness, finite type and separatedness for the actual chart and the entire punctured restriction diagram before applying the supplied cycle comparison. The Statement, point calculation, source maps, selected generators and coverage are unchanged, so the direct consumer needs no edit. The two Stacks readings in the incoming source records remain historical; no fresh primary-source reading, independent operation-comparison theorem, library audit or independent acceptance is claimed. Central rendering and changed-item rejudgment remain with the engine.
