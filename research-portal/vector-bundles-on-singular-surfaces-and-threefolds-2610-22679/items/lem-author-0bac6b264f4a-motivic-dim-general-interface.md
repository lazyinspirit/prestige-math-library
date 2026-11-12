---
id: lem-author-0bac6b264f4a-motivic-dim-general-interface
kind: lemma
title: Prime-field evaluation and compatibility with the standing theory
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-motivic-cohomology
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening, printed p. 3; comparison (1.2), p. 4; Theorem
        1.3(1), p. 5; Section 2 opening and Section 2.1, p. 11; Section 3.3
        opening through (3.5), p. 14
      statement: The motivic-to-cdh comparison is a morphism of derived presheaves
        under the stable infinity-category convention of Section 2.1; its target
        is cdh sheafification. Section 3.3 defines cdh using generators
        including the Nisnevich pretopology.
      hypotheses: A prime field F, qcqs F-schemes, and integer j >= 0; use the
        source's enhanced derived target, not just its ordinary homotopy
        category.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the versioned PDF extraction at the opening of
        Theorem 1.1, comparison (1.2), Theorem 1.3(1), and the Section 2 opening
        and Section 2.1; also read the Section 3.3 opening through (3.5) for the
        topology refinement and cdh target. Coherence uses those explicit
        conventions. Construction and comparison proofs in Sections 4 and 6 are
        imported, not reconstructed; no claim of reading those proofs. Current
        consumer maintenance read the item and current supplier interfaces; no
        fresh primary-source or page-image reading or independent acceptance is
        claimed."
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 1.1.1.1, 1.1.1.4, 1.1.1.6 and 1.1.1.9, printed pp. 17–20;
        Remark 1.1.1.5, p. 18; Proposition 1.1.3.1 and proof, p. 30
      statement: Zero objects are initial and terminal; a fiber is a pullback against
        zero, including the nullhomotopy. For a stable infinity-category D and
        simplicial set S, Fun(S,D) is stable, with fibers and cofibers computed
        pointwise.
      hypotheses: A pointed target for the fiber convention and a stable target for
        the functor-category assertion; S is a simplicial set in a universe
        containing the target. Apply to the already supplied derived
        enhancement.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the listed definitions and Remark 1.1.1.5, and
        Proposition 1.1.3.1 with its short proof. The proof cites HTT 5.1.2.2;
        reference 2 below records the pointwise theorem separately. Earlier
        infinity-category foundations are imported, not reconstructed. No new
        enhancement model is constructed here. Current consumer maintenance read
        the item and current supplier interfaces; no fresh primary-source or
        page-image reading or independent acceptance is claimed."
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Section 5.1.2, Proposition 5.1.2.2 and Corollary 5.1.2.3, printed pp.
        318–319 (PDF page indices 335–336)
      statement: If an infinity-category D admits K-indexed colimits, Fun(S,D) admits
        them and evaluation detects colimit diagrams. Taking opposites gives
        existence and evaluation detection for the corresponding limits.
      hypotheses: S and K are simplicial sets in the chosen universe; the required
        diagram shape admits colimits, or dually limits, in the target. Here
        only zero objects and fibers in a stable target are used.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read Proposition 5.1.2.2 and its proof, and Corollary
        5.1.2.3 and its proof in the PDF extraction. Its upstream
        Cartesian-fibration and extension results are imported, not
        reconstructed. The limit version is the formal opposite-category
        application; precomposition preserves the fiber square by the pointwise
        criterion. Current consumer maintenance read the item and current
        supplier interfaces; no fresh primary-source or page-image reading or
        independent acceptance is claimed."
formulation_deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-motivic-cohomology
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-motivic-cohomology
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, as in the prime-field motivic-complex input. Existence of these universes is a separate size assumption. All field and scheme data below lie in $U$. For a field $B\in U$, let $\mathcal C_B$ be the $V$-small category of qcqs $B$-schemes with data in $U$ and all $B$-morphisms; qcqs means quasi-compact and quasi-separated. Use the supplied stable derived enhancement $\mathcal D_\infty(\mathbb Z)$ of unbounded complexes of $V$-small abelian groups, considered in $W$, whose homotopy category is $D(\mathbb Z)$. Its coherent presheaf category is
$$\mathcal P_B=\operatorname{Fun}(N(\mathcal C_B)^{\mathrm{op}},\mathcal D_\infty(\mathbb Z)),$$
where $N$ is the nerve, with simplices strings of composable arrows. The nerve and finite diagram shapes are small in $W$; all functor-category constructions are made there.

For a prime field $F=\mathbb Q$ or $F=\mathbb F_p$ with $p$ prime and $j\geq0$, write $M_{j,F}$ and $C_{j,F}$ for the actual EM motivic and cdh presheaves, respectively. For every integer $i$, define
$$\widehat H^{i,j}_{F}(X,\mathbb Z)=H^i(M_{j,F}(X)),$$
using cohomology on the ordinary derived homotopy category. For a field $k$ with prime subfield identified with $F$, let $u:\mathcal C_k\to\mathcal C_F$ compose the structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$. Restriction by $u^{\mathrm{op}}$ is exactly the standing $H^{i,j}_{\mathrm{mot}}$ functor when $k$ is the standing field, including its pullbacks. Thus the same notation may be used for the general prime-field groups and their fixed-field restriction.

The actual coherent comparison $\alpha_{j,F}:M_{j,F}\to C_{j,F}$ is an arrow of $\mathcal P_F$. Define $F_{j,F}=M_{j,F}\times_{C_{j,F}}0$ there, with $0$ the zero presheaf. The pullback includes its defining nullhomotopy and gives a natural fiber sequence $F_{j,F}(X)\to M_{j,F}(X)\to C_{j,F}(X)$ at every $X$. Restriction along $u$ preserves this sequence. All three presheaves take the empty scheme to zero.

## Facts & Assumptions
**Given:** The stated Choice and universe assumptions, a prime field $F$, a nonnegative weight $j$, and, for restriction, a field $k$ with this prime subfield.

**Goal:** Construct the general cohomology interface and its coherent comparison fiber, retaining the actual fixed-field theory.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] specify the Choice and closure conventions. Choice is inherited from the unbounded derived enhancement used by [[lem-author-b747b28c359f-elmanto-morrow-complexes]], including its imported resolution and model constructions. Universe existence is assumed separately; closure makes the nerves and functor diagrams legitimate in $W$. The restriction argument adds no selection of representatives or cones.

[F1] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies $\mathcal C_B$, its nerve, the stable enhancement, and $M_{j,F}$ with derived Nisnevich descent. It obtains the $k$-scheme functor by precomposition with $u^{\mathrm{op}}$ and includes empty-cover descent.

[F2] [[def-motivic-cohomology]] defines its integral groups by objectwise cohomology of that restriction; [[lem-author-b747b28c359f-derived-cohomology]] supplies the functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$, so evaluation and pullbacks are independent of representatives.

[F3] [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]] identifies the actual comparison and its cdh-sheaf target $C_{j,F}$. Reference 0 supplies the coherent interpretation of that same comparison, using EM's Section 2.1 convention. For its descent use the covering-sieve limit convention of [F1]. Section 3.3 of reference 0 defines cdh using generators that include the Nisnevich pretopology, hence the empty family covers the empty scheme. No dimension bound from this supplier is needed here.

[F4] Reference 1 supplies zero objects, fiber squares with their nullhomotopies, and stability of $\operatorname{Fun}(S,\mathcal D)$ for a stable target $\mathcal D$. Reference 2 supplies the pointwise existence and detection of limits, by taking opposites of its colimit assertion. Apply them with $S=N(\mathcal C_B)^{\mathrm{op}}$ and the finite shape $M\to C\leftarrow0$. The zero presheaf is the constant functor at the zero object; a coherent pullback is a universal cone in this enhancement, not a choice of ordinary derived-category cones.

## External input
Reference 0 imports the coherence of the actual comparison under its stated conventions and the cdh inclusion of Nisnevich covering families. References 1 and 2 import the stable functor-category fiber calculus and its pointwise criterion. Their hypotheses are met by the enhanced target and the size bounds in [A1] and [F1]. These are premises of the local application below; the comparison construction and higher-category foundations are not reconstructed here.

## Proof
1.1 Under [A1], compose the prime-field functor of [F1] with passage to its derived homotopy category and the cohomology functor of [F2]. This defines the displayed groups and contravariant pullbacks. Precomposing with $u^{\mathrm{op}}$ gives the very complex and morphism diagram used in the standing definition. Hence the groups and pullbacks agree as that same restricted diagram, without choosing a separate comparison isomorphism. [A1, F1, F2]

2.1 By [F3] the actual comparison is a coherent arrow in $\mathcal P_F$. Under [A1], [F4] gives its pullback against the zero presheaf and identifies its value at $X$ with $M_{j,F}(X)\times_{C_{j,F}(X)}0$, including the nullhomotopy. This supplies the asserted presheaf and natural fiber sequence. Precomposition with $u^{\mathrm{op}}$ preserves the square: its evaluation at any $k$-scheme is the original pullback square at $uX$, so [F4]'s pointwise criterion again proves it is a pullback. At the empty scheme $M$ vanishes by [F1]; $C$ vanishes since a cdh sheaf satisfies descent for the empty covering sieve, whose limit in the stable target is zero. The fiber of $0\to0$ is zero by its pullback property. All constructions use exactly the supplied range $j\geq0$. [A1, F1, F3, F4, step 1.1] ∎
