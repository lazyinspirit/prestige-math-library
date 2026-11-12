---
title: Filtered affine K-space continuity with the actual free-class arrow
status: draft
research_item: lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity
dependency_level: 14
sources:
  references:
    - title: R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes
        and of Derived Categories (1990)
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf
      locator: Definition 3.1, printed pp. 312–313; Lemma 3.8 and Proposition 3.10
        with proofs, p. 316; Proposition 3.20.1–3.20.2 and strict-perfect/affine
        proof, pp. 323–325; Appendix C.1, p. 418.
      statement: For a directed inverse system of qcqs schemes with affine bonding
        maps, absolute connective perfect-complex K-theory satisfies continuity.
        On affines the strict-perfect model agrees naturally with bounded
        finite-projective K-theory; the affine inverse limit is the spectrum of
        the directed ring colimit.
      hypotheses: A small directed index set in the fixed universes; qcqs schemes and
        affine bonding maps. Apply only the absolute connective clause
        (equivalently take the closed supports to be the whole schemes). For the
        strict-perfect comparison each affine has an ample line bundle. No
        noetherian or dimension hypothesis. General filtered categories are
        reduced to this setting using source reference 2, not assumed covered
        directly.
      reading_limits: This repair freshly read Proposition 3.20.1–3.20.2, its
        displayed strict-perfect proof and affine reduction, printed pp.
        323–325, and Appendix C.1, p. 418, through the live primary PDF
        extraction on 12 November 2026. Definition 3.1, Lemma 3.8 and
        Proposition 3.10 remain the incoming source record and were not freshly
        reread. Nonaffine induction and the cited EGA/Waldhausen foundations
        remain imported; the current affine supplier supplies the enhanced
        comparison. No scan or cached-byte authentication is claimed.
    - title: Philip S. Hirschhorn, Notes on Homotopy Colimits and Homotopy Limits,
        draft of November 23, 2014
      url: https://math.mit.edu/~psh/notes/hocolim.pdf
      locator: Section 14.2, Theorem 14.10, Proposition 14.11 and Corollary 14.12,
        printed p. 72 (zero-based PDF page 71).
      statement: For a small filtered ordinary indexing category, degreewise colimits
        of simplicial sets preserve objectwise weak equivalences, and the
        canonical homotopy-colimit to ordinary-colimit map is a weak
        equivalence. A filtered colimit of Kan complexes gives a fibrant model.
      hypotheses: Small filtered ordinary category; arbitrary simplicial sets for
        Theorem 14.10 and Proposition 14.11; objectwise Kan complexes for
        Corollary 14.12. Compatible universes. No prespectrum or
        spectral-colimit comparison is imported from this source.
      reading_limits: Freshly read the named three statements and their displayed
        proofs in the live MIT PDF extraction on 12 November 2026. Their
        model-category and replacement foundations remain imported. Earlier
        recorded finite-acyclic homotopy-limit interchange is not needed for the
        repaired proof and was not freshly reread. The notes are a work in
        progress; no full-source review is claimed.
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.1.2.2 and Corollary 5.1.2.3 with proofs, printed pp.
        318–319 (zero-based PDF pages 335–336); Definition 5.3.1.7, p. 382;
        Example 5.3.1.8, p. 383; Proposition 5.3.1.18 and proof, pp. 386–387
        (PDF pages 403–404); Proposition 4.1.1.8, p. 226, forward implications
        of proof on p. 226 (PDF page 243).
      statement: Functor-category colimits are computed pointwise. Every filtered
        infinity-category admits a cofinal map from the nerve of a directed
        partially ordered set (kappa=omega). Cofinal restriction preserves
        colimit cocones in any infinity-category; its cone-category
        characterization also gives the ordinary categorical colimit comparison.
      hypotheses: Use small diagrams and compatible universes. The replacement theorem
        assumes a kappa-filtered infinity-category, with kappa regular; here
        kappa=omega and the category is N(I). Filteredness of this nerve is
        verified locally from ordinary filteredness. For small I the proof
        constructs a small directed poset using finite simplicial subsets of
        N(I) times the nerve of a countable indiscrete category; the stipulated
        universes contain omega. Pointwise colimits require a target admitting
        those indexed colimits. Apply cofinality to spaces, spectra and nerves
        of ordinary target categories; no mere ordinary cofinality is
        substituted for infinity-categorical cofinality.
      reading_limits: This repair read the named pointwise-colimit statements and
        proofs, Definition 5.3.1.7, Example 5.3.1.8, the replacement statement
        and displayed proof of Proposition 5.3.1.18, and Proposition 4.1.1.8
        with its forward proof on printed p. 226, through the live author PDF
        text on 12 November 2026. Cartesian-fibration, small-object and cone
        foundations invoked there remain imported. The reverse implication on p.
        227 was not needed or freshly read. No strict-prespectrum rectification
        or whole-book review is claimed.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.4.2.8, printed p. 142; Notation 1.4.2.20, printed p. 146
        (zero-based PDF pages 141 and 145).
      statement: Spectrum objects are reduced excisive functors on finite pointed
        spaces; the infinite-loop-space functor evaluates such a functor on the
        pointed zero-sphere.
      hypotheses: The target admits finite limits; here it is the infinity-category of
        spaces. Use the same enhancement and compatible size bounds as the
        stable interface.
      reading_limits: Read the two named records through the live primary PDF text on
        12 November 2026. This imports the evaluation convention, not a new
        comparison of strict and coherent spectra. The existing stable interface
        supplies the enhancement.
---

PDF p. 11: Lemma 5.3: qcqs perfect-class Chern arithmetic supplier

## Prerequisites

- [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:thm-filtered-colimits-commute-with-finite-limits-in-set](https://alphabetamath.cc/item/thm-filtered-colimits-commute-with-finite-limits-in-set)
- [thm-adjudicate-992e776cd750-filtered-space-colimits-input](item-thm-adjudicate-992e776cd750-filtered-space-colimits-input)
- [` R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes and of Derived Categories (1990) · Definition 3.1, printed pp. 312–313; Lemma 3.8 and Proposition 3.10 with proofs, p. 316; Proposition 3.20.1–3.20.2 and strict-perfect/affine proof, pp. 323–325; Appendix C.1, p. 418. `](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf)
- [` Philip S. Hirschhorn, Notes on Homotopy Colimits and Homotopy Limits, draft of November 23, 2014 · Section 14.2, Theorem 14.10, Proposition 14.11 and Corollary 14.12, printed p. 72 (zero-based PDF page 71). `](https://math.mit.edu/~psh/notes/hocolim.pdf)
- [` Jacob Lurie, Higher Topos Theory, author-hosted PDF · Proposition 5.1.2.2 and Corollary 5.1.2.3 with proofs, printed pp. 318–319 (zero-based PDF pages 335–336); Definition 5.3.1.7, p. 382; Example 5.3.1.8, p. 383; Proposition 5.3.1.18 and proof, pp. 386–387 (PDF pages 403–404); Proposition 4.1.1.8, p. 226, forward implications of proof on p. 226 (PDF page 243). `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Definition 1.4.2.8, printed p. 142; Notation 1.4.2.20, printed p. 146 (zero-based PDF pages 141 and 145). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume the Axiom of Choice and the compatible site and universe bounds of the supplied affine K-theory and stable-spectrum models; universe existence is a separate assumption. Let $I$ be a small filtered category and $(A_i)_{i\in I}$ a diagram of commutative unital rings and unital homomorphisms. Put $A=\operatorname{colim}_i A_i$ and $\mathcal K(A)=\Omega^\infty K_{\rm Perf}(\operatorname{Spec}A)$, using the specified perfect-complex theory. In compatible simplicial models the canonical map
$$\operatorname{colim}_i\mathcal K(A_i)\longrightarrow\mathcal K(A)$$
is a weak equivalence of entire spaces, including components. The degreewise filtered colimit represents the filtered homotopy colimit.

Write $GL_n(A)=\operatorname{Aut}_A(A^n)$, $GL(A)=\operatorname{colim}_nGL_n(A)$ under $g\mapsto\operatorname{diag}(g,1)$, and $BGL(A)$ for the nerve of the one-object group category, regarded as a space. The canonical comparison from $\operatorname{colim}_i(\mathbb Z\times BGL(A_i))$ to $\mathbb Z\times BGL(A)$ is an isomorphism of these simplicial nerve models. These comparisons intertwine the actual stable free-class arrows into $\mathcal K$: $(m,g)$ represents the free automorphism class reduced by its trivial rank and translated by $m[A]$. They preserve direct sum, block sum, stabilization and integer translation. No assertion that all K-space components of a nonlocal ring are parametrized by integers is made. Only connective K-theory continuity is needed.

## Statement references
[lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[thm-adjudicate-992e776cd750-filtered-space-colimits-input](item-thm-adjudicate-992e776cd750-filtered-space-colimits-input)

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible universes of the supplied models, containing $\omega$ as in the affine supplier. Choice is inherited by the essentially small affine comparisons, functorial replacements and the cofinal directed replacement in step 1.1. Universe existence is assumed independently.

[F1] [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification) supplies the connective Waldhausen spectrum of bounded finite-projective complexes, its natural equivalence of entire zeroth spaces with the specified perfect theory, scalar-extension naturality, the actual object and automorphism maps, and direct-sum compatibility, for every commutative unital ring.

[F2] The indexing notion is [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit), and the rings are those of [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), with unit-preserving maps stipulated. A filtered ring colimit has the filtered colimit of underlying sets: finite ring operations are evaluated on representatives at a common stage and the ring identities hold there. [math:thm-filtered-colimits-commute-with-finite-limits-in-set](https://alphabetamath.cc/item/thm-filtered-colimits-commute-with-finite-limits-in-set) supplies the finite-product and equalizer comparisons, including the empty finite limit.

[F3] Source reference 0 imports the absolute connective K-spectrum continuity theorem for directed inverse systems, its strict-perfect affine model and Appendix C.1's affine inverse-limit construction. On affines, associated sheaf identifies strict-perfect complexes with [F1]'s bounded finite-projective model. The source's ample-line-bundle hypothesis holds for an affine scheme. Only the affine case over a small directed poset is applied below, after [F6]'s reduction; arbitrary filtered categories are not treated as directed posets without that reduction.

[F4] Source reference 1 imports preservation of objectwise weak equivalences by filtered simplicial colimits and the canonical homotopy-colimit/degreewise-colimit comparison. [def-stable-spectra-interface](item-def-stable-spectra-interface) defines spectra as the full infinity-category $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$ of reduced excisive functors on finite pointed spaces. Reduced means the point is sent to a contractible space; excisive means pushout squares are sent to homotopy pullback squares. Source reference 3 specifies $\Omega^\infty$ as evaluation at the pointed zero-sphere $S^0$ (the two-point space with one point selected).

[F5] [thm-adjudicate-992e776cd750-filtered-space-colimits-input](item-thm-adjudicate-992e776cd750-filtered-space-colimits-input) supplies the space and simplicial-model conventions and preservation of finite homotopy limits by colimits of small filtered diagrams, including the terminal point and homotopy pullbacks. Source reference 2 supplies pointwise homotopy-coherent colimits in $\operatorname{Fun}(S_*^{\mathrm{fin}},S)$. Work with a small presentation of finite pointed spaces in the supplied universes. These are coherent colimits throughout; ordinary simplicial colimits enter only through reference 1's separate weak-equivalence comparison.

[F6] Source reference 2, Proposition 5.3.1.18 with $\kappa=\omega$, imports a small directed partially ordered set $J$ and a cofinal map $N(J)\to N(I)$ once $N(I)$ is filtered in the sense of Definition 5.3.1.7. Directed means nonempty with an upper bound for every finite subset, with arrows $j\to j'$ when $j\leq j'$. A map between ordinary nerves is the nerve of a functor $u:J\to I$: its edges specify arrows, and its two-simplices impose identities and composition. Here cofinal has the infinity-categorical meaning characterized by Proposition 4.1.1.8: restriction gives equivalent categories of cocones over every target infinity-category, and preserves colimit cocones. In particular it preserves coherent colimits in spaces and spectra; for an ordinary target, the same cocone criterion gives ordinary colimits. The proof of the replacement theorem uses Choice and finite simplicial subsets of $N(I)\times N(\omega_{\rm ind})$, where $\omega_{\rm ind}$ has objects the natural numbers and a unique arrow between each pair. Its directed poset is small in the same stipulated universe. The finite-cone verification for $N(I)$ and the applications to the actual ring diagram are given in step 1.1.

## Proof
**Given:** The filtered ring diagram, its colimit, [F1]'s affine models, Choice and the specified universe bounds.

**Goal:** Establish continuity of entire K-spaces and its compatibility with the actual free-class arrow.

1.1 First justify passage from spectral colimits to entire zeroth spaces within [F4]'s coherent enhancement. For any $I$-diagram of spectra write its reduced excisive functors as $E_i:S_*^{\mathrm{fin}}\to S$, and form their colimit $H$ in the ambient functor infinity-category. By [F5], $H(T)\simeq\operatorname{colim}_i E_i(T)$ coherently in $T$. The value $H(*)$ is contractible because filtered space colimits preserve the terminal point. For every pushout square of finite pointed spaces, each $E_i$ gives a homotopy pullback square; [F5]'s finite-limit preservation makes its pointwise filtered colimit a homotopy pullback square too. Thus $H$ is reduced and excisive, hence lies in $\mathrm{Sp}$. Since this is a full subcategory, the ambient colimit universal property restricts to an equivalence $\operatorname{Map}_{\mathrm{Sp}}(H,Z)\simeq\lim_{i\in I^{\mathrm{op}}}\operatorname{Map}_{\mathrm{Sp}}(E_i,Z)$ for every spectrum $Z$. Therefore $H$, with its same coherent cocone, is the spectral colimit. Evaluation at $S^0$ now gives the canonical equivalence $\operatorname{colim}_i\Omega^\infty E_i\simeq\Omega^\infty(\operatorname{colim}_i E_i)$ of entire spaces. Apply this to the connective spectra $K^c(A_i)$ of [F1]. To justify the index hypothesis of [F3], first check that $N(I)$ is filtered in [F6]'s sense. For a finite simplicial set $L$ and a map $L\to N(I)$, choose arrows from its finitely many vertex images to a common object of $I$. For each edge, the two resulting arrows from its initial vertex to that object can be made equal after postcomposition, by ordinary filteredness. There are only finitely many edge conditions; equalize them successively, retaining previous equalities. These compatible arrows give the cone $L^{\triangleright}\to N(I)$, since higher simplices in an ordinary nerve are determined by their composable arrows. For empty $L$ use nonemptiness of $I$. Thus [F6] supplies a small directed poset $J$ and $u:J\to I$ with $N(u)$ cofinal. Its cocone criterion in the ordinary category of commutative unital rings gives the canonical isomorphism $\operatorname{colim}_{j\in J}A_{u(j)}\cong A$; in spectra it gives the canonical equivalence $\operatorname{colim}_{j\in J}K^c(A_{u(j)})\simeq\operatorname{colim}_{i\in I}K^c(A_i)$. Set $X_j=\operatorname{Spec}A_{u(j)}$. This is now a directed inverse system of affine qcqs schemes with affine transition maps. Appendix C.1 in [F3] identifies its inverse limit with $\operatorname{Spec}(\operatorname{colim}_j A_{u(j)})=\operatorname{Spec}A$. Applied also in the opposite category of schemes, [F6]'s equivalence of ordinary cocone categories shows that this same scheme is the inverse limit of the original $I^{\mathrm{op}}$-diagram. Proposition 3.20.2 gives $\operatorname{colim}_jK^c(A_{u(j)})\simeq K^c(A)$. All these maps are induced by the same scalar-extension cocone; therefore the canonical $I$-indexed map $\operatorname{colim}_iK^c(A_i)\to K^c(A)$ is an equivalence as well. The space-colimit analogue is supplied by the same cofinality theorem, and [F4]'s comparison to degreewise simplicial colimits applies to both filtered categories $I$ and $J$. The strict-perfect affine comparison in [F3] matches this theory with [F1]'s bounded-projective theory and its scalar-extension maps. Evaluate this continuity equivalence and compose with [F1]'s natural equivalences $\Omega^\infty K^c(B)\simeq\mathcal K(B)$ for $B=A_i,A$. The comparison just proved and [F4]'s canonical simplicial homotopy-colimit comparison give exactly the canonical map in the Statement as a weak equivalence, including all components. This uses only connective K-spectrum continuity; it does not identify an ordinary strict prespectrum colimit with a coherent colimit. [A1, F1, F2, F3, F4, F5, F6, construct]

2.1 An invertible $n$ by $n$ matrix is a pair $(g,h)$ with $gh=hg=1$; the inverse $h$ is unique. These are finite equations on finitely many entries. Thus [F2]'s finite-product and equalizer comparison identifies $\operatorname{colim}_iGL_n(A_i)$ with $GL_n(A)$, retaining multiplication and stabilization. Interchanging the two colimits gives the stable group comparison. In degree $q$ the group nerve is the $q$-fold product, so [F2] gives the asserted stable nerve isomorphism. Taking product with the constant $\mathbb Z$ also commutes with this colimit: the index category is nonempty and filtered, so every integer occurs and cannot change under a transition. By [F1] the free-class construction is natural under each ring map and preserves the same objects, automorphisms and sums. Its square with the canonical colimit comparison in step 1.1 therefore commutes in spaces. Reducing by the same trivial rank commutes with scalar extension, and translation by $m[A_i]$ goes to translation by $m[A]$, for negative $m$ as well by the grouplike K-space inverse. This proves every claimed compatibility without assuming freeness of arbitrary projectives. [A1, F1, F2, step 1.1] ∎

## External input
Source reference 0 supplies the directed absolute connective K-spectrum continuity, strict-perfect comparison and affine inverse-limit construction in [F3]. Source reference 1 supplies only the simplicial homotopy-colimit comparisons in [F4]. Reference 2 supplies pointwise coherent functor-category colimits and, separately, the cofinal directed-poset replacement and cocone/colimit comparison in [F6]; reference 3 specifies the reduced-excisive model and its infinite-loop evaluation. The existing filtered-space supplier gives the finite homotopy-limit interchange in [F5]. Step 1.1 locally proves closure of the full spectral subcategory under these coherent colimits, restricts the mapping-space universal property, verifies filteredness of the ordinary nerve, checks the replacement size and actual ring/spectral cocones, and applies directed continuity before returning to the original category. Step 2.1 retains the finite-matrix and free-class argument. The whole helper is a locally authored consequence of explicit imports, not an external-input theorem or a reconstruction of those foundations.

## Reading limits
This repair read the entire current assigned body, the affine-comparison and stable-spectrum supplier bodies, the filtered-space-colimit supplier body, and all four declared Math Library bodies. Their supplier-source bibliographies were not independently re-audited. Fresh primary-source reading is limited to the exact passages and limitations in the four citation records; incoming reading of other passages is historical only. The library index was searched for a directed replacement or general cofinal-colimit interface; the available cofinal-subsystem and sequential-tail interfaces do not supply the required arbitrary-filtered reduction. Prior receipts grant no reading or acceptance credit. No original-PDF author-defect review, full-library audit, scan authentication, renderer result or independent acceptance is claimed.

## Maintenance scope
The Statement is verbatim unchanged. The current direct consumers are `lem-author-3cde9692a7e9-local-free-test` (Facts F8 and Proof 1.1) and `lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection` (Facts F6 and Proof 1.1). Their continuity applications use small filtered affine neighborhood rings, entire K-spaces and the actual free-class square, all retained here. Those use sections were read for interface compatibility; unrelated arguments were not audited. No consumer edit or changed-Statement routing is proposed. This repairs the generated index-reduction gap in Facts F3 and Proof 1.1, with no attribution to the original article authors. Coverage and authoring home are unchanged; central rejudgment and serving presentation remain engine tasks.
