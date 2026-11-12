---
title: External determinant and pointed one-type inputs
status: published
research_item: thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
dependency_level: 15
sources:
  references:
    - title: "Finn Knudsen and David Mumford, The projectivity of the moduli space of
        stable curves I: Preliminaries on det and Div"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: Chapter I pp.20–21,31; Definition2 p.37 and remark p.38; Definition4
        pp.40–42 including p.41 footnote; Theorem2 p.42; Corollary2 p.43 and
        warning p.44
      statement: The extended determinant has additivity for true triangles and
        compatible derived pullback. Its restriction to bounded finite locally
        free complexes is the alternating graded determinant. This is not
        unrestricted functorial additivity for all ordinary
        distinguished-triangle diagrams.
      hypotheses: Arbitrary schemes and perfect complexes in the paper’s sense, with
        quasi-isomorphisms inverted; derived pullback preserves perfection.
        Graded lines and their sign symmetry are retained before passing to rank
        zero. Triangle data are true triangles of VT, as in Definition2; the
        ordinary-triangle corollary on p.43 separately assumes perfect
        cohomology.
      reading_limits: Current repair visually read the cached primary scans of printed
        pp.20–21,31,37–38,40–44, including Definition 4, Theorem 2, the
        perfect-cohomology corollary and warning. Earlier records report
        additional pages. Theorem 2 reduces to Proposition 4; its omitted proof
        and the higher-categorical enhancement are not reconstructed. The actual
        K-space bridge is used through the existing determinant-map supplier.
    - title: Charles Weibel, The K-book, Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: Example IV.4.4.2, printed p.39
      statement: For a commutative ring, the determinant functor induces the affine
        K-space to Picard K-space map, with the classical determinant maps on K0
        and K1.
      hypotheses: Commutative unital rings; the enhanced-model identification is
        supplied separately by the declared affine and determinant-map
        suppliers.
      reading_limits: Read Example IV.4.4.2 in the live author-hosted PDF text. Its
        comparison foundations are imported through existing suppliers; no
        reconstruction or whole-chapter reading is claimed.
    - title: Charles Weibel, The K-book, Chapter II
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf
      locator: Section II.2, opening calculation and Lemma 2.1, printed p.5
      statement: For a nonzero commutative local ring, rank identifies K0 with Z;
        finite projectives give the group-completion presentation.
      hypotheses: Finite projective modules over a commutative unital local ring; the
        zero ring corresponds to the empty scheme and is treated separately.
      reading_limits: Read the opening of II.2 through Lemma 2.1 in the live
        author-hosted PDF text. The cited finite-projective freeness theorem
        I.2.2 was not reconstructed; the sheaf calculation below uses local
        triviality and the declared affine Euler bridge.
    - title: Charles Weibel, The K-book, Chapter III
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.III.pdf
      locator: Definition III.1.1 and Example 1.1.1, printed pp.1–2; Lemma 1.4 and its
        displayed proof, printed p.5
      statement: Classical K1 is the abelianization of stable GL. For a commutative
        semilocal ring its determinant is an isomorphism to the unit group,
        split by one-by-one matrices.
      hypotheses: Unital rings for the abelianization definition; commutative
        semilocal rings, in particular nonzero local rings, for the determinant
        isomorphism.
      reading_limits: Read III.1.1, Example 1.1.1 and the entire Lemma 1.4 statement
        and displayed proof in the live author-hosted PDF text. The proof cites
        earlier row-operation results; those foundations are imported, not
        reconstructed. Only the commutative local case is applied in the germ
        argument.
    - title: Charles Weibel, The K-book, Chapter V, contextual descent statement
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: §10 introduction and Example10.3, p.72; Nisnevich discussion and
        Theorem10.10, p.76; Example10.10.1, p.77
      statement: Example10.10.1 states Nisnevich descent for KB and attributes it to
        Thomason–Trobaugh 10.8. Example10.3 calls KB the nonconnective K-theory
        spectrum of vector bundles. This is contextual background; the current
        determinant stack map is supplied separately.
      hypotheses: §10 introduces descent over a finite-dimensional noetherian scheme
        X; its Nisnevich discussion uses schemes of finite type over X. This
        citation is used within that context, without attributing an
        unrestricted perfect-complex descent formulation to this example.
      reading_limits: "Read the live author-hosted PDF text of printed pp.72,76–77:
        the section introduction, Examples 10.3 and 10.10.1, and Nisnevich
        discussion. This retains the earlier scope correction. Thomason–Trobaugh
        10.8 and its proof were not read; this contextual reference supplies no
        unrestricted qcqs descent premise."
    - title: Jacob Lurie, Higher Topos Theory, pointed one-types
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 7.2.2.12(2) and proof, printed pp.728–729; Remark 7.2.2.13
        and Definition 7.2.2.14, p.729
      statement: The fundamental-group functor identifies pointed connected
        1-truncated objects of an infinity-topos with group objects of its
        ordinary sheaf topos.
      hypotheses: An infinity-topos, here space-valued Nisnevich sheaves on the
        specified universe-bounded qcqs or restricted sites. The target is the
        torsor stack BG_m.
      reading_limits: Read the named proposition, its displayed proof, remark and
        definition in the live primary PDF text, together with Lemma 7.2.2.11
        and its displayed proof. The preceding group-object and infinity-topos
        foundations remain imported; only the one-type case is applied.
    - title: Jacob Lurie, Higher Topos Theory, truncation and homotopy sheaves
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.5.6.18, printed p.497; Proposition 5.5.6.28 and proof,
        p.500; Definition 6.5.1.1, pp.658–659; Remarks 6.5.1.4–5 and displayed
        argument, p.660; Lemma 6.5.1.9 and proof, and Definition 6.5.1.11, p.661
      statement: Truncation is left adjoint to inclusion of truncated objects; left
        exact colimit-preserving functors commute with truncation. Homotopy
        sheaves are formed by loops and zero-truncation, preserved by geometric
        inverse-image functors; fiber sequences have the homotopy-sheaf exact
        sequence. An n-truncation preserves homotopy sheaves through degree n;
        connected means that zero-truncation is terminal.
      hypotheses: Presentable infinity-categories and a left exact colimit-preserving
        functor for 5.5.6.28; infinity-topoi and a geometric morphism for the
        homotopy-sheaf assertions. Apply to derived sheafification, whose left
        exact reflective-localization interface is imported separately at source
        reference 7.
      reading_limits: Read the statement of 5.5.6.18, the complete displayed proof of
        5.5.6.28, Definition 6.5.1.1, and Remarks 6.5.1.4–5 including their
        displayed argument in the live primary PDF text. Their cited foundations
        and classical homotopy theory are imported, not reconstructed. Also read
        Lemma 6.5.1.9 with its displayed proof and Definition 6.5.1.11 on
        printed p.661.
    - title: Jacob Lurie, Higher Topos Theory, space-valued sheafification and
        hypercompletion
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 6.2.2.6 and Proposition 6.2.2.7, printed p.579; displayed
        proof pp.582–583; defining paragraph after Proposition 6.5.2.8 and Lemma
        6.5.2.9 with proof, p.669
      statement: Space-valued sheafification on a small Grothendieck site is a left
        exact reflective localization. Hypercompletion is a further left exact
        localization; every truncated object is hypercomplete.
      hypotheses: A small Grothendieck site in compatible universes, and its
        infinity-topos of sheaves of spaces. These localizations are used
        consistently, without identifying ordinary sheafification and
        hypercompletion.
      reading_limits: Read the named definition and proposition, its full displayed
        proof, the defining hypercompletion paragraph, and Lemma 6.5.2.9 and its
        proof in the live primary PDF text. The transfinite and infinity-topos
        foundations cited there remain imported; no claim of reconstructing them
        or the local model comparison is made.
---

PDF p. 9: Actual low-weight projections and determinant normalization

## Prerequisites

- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [lem-adjudicate-f6007757a8ac-actual-determinant-stack-map](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [thm-author-da44cda020c0-units-k1-classical-comparisons](item-thm-author-da44cda020c0-units-k1-classical-comparisons)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [` Finn Knudsen and David Mumford, The projectivity of the moduli space of stable curves I: Preliminaries on det and Div · Chapter I pp.20–21,31; Definition2 p.37 and remark p.38; Definition4 pp.40–42 including p.41 footnote; Theorem2 p.42; Corollary2 p.43 and warning p.44 `](https://journals.msp.org/mscand/article/download/2000/1999)
- [` Charles Weibel, The K-book, Chapter IV · Example IV.4.4.2, printed p.39 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf)
- [` Charles Weibel, The K-book, Chapter II · Section II.2, opening calculation and Lemma 2.1, printed p.5 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf)
- [` Charles Weibel, The K-book, Chapter III · Definition III.1.1 and Example 1.1.1, printed pp.1–2; Lemma 1.4 and its displayed proof, printed p.5 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.III.pdf)
- [` Charles Weibel, The K-book, Chapter V, contextual descent statement · §10 introduction and Example10.3, p.72; Nisnevich discussion and Theorem10.10, p.76; Example10.10.1, p.77 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf)
- [` Jacob Lurie, Higher Topos Theory, pointed one-types · Proposition 7.2.2.12(2) and proof, printed pp.728–729; Remark 7.2.2.13 and Definition 7.2.2.14, p.729 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Jacob Lurie, Higher Topos Theory, truncation and homotopy sheaves · Proposition 5.5.6.18, printed p.497; Proposition 5.5.6.28 and proof, p.500; Definition 6.5.1.1, pp.658–659; Remarks 6.5.1.4–5 and displayed argument, p.660; Lemma 6.5.1.9 and proof, and Definition 6.5.1.11, p.661 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Jacob Lurie, Higher Topos Theory, space-valued sheafification and hypercompletion · Definition 6.2.2.6 and Proposition 6.2.2.7, printed p.579; displayed proof pp.582–583; defining paragraph after Proposition 6.5.2.8 and Lemma 6.5.2.9 with proof, p.669 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$; their existence is a separate assumption. All scheme data lie in $U$, site categories are $V$-small, and space-valued constructions use $W$. Work on the universe-bounded big Nisnevich site of qcqs schemes and all scheme morphisms, or its qcqs small Nisnevich or smooth big restrictions over a fixed qcqs base. Here a scheme is quasi-compact if every open cover has a finite subcover, and quasi-separated if intersections of two affine opens are quasi-compact; Nisnevich covers are étale families with a residue-field-preserving lift of every target point. These are the supplied site presentations, including affine open refinements.

For a site object $T$, let $\mathcal K(T)=\Omega^\infty\mathbb K(\operatorname{Perf}(T))$ be the specified nonconnective perfect K-space, pointed by the zero complex. A perfect complex is locally equivalent to a bounded complex of finite locally free module sheaves. Let $a_{\mathrm{Nis}}$ denote derived sheafification of spaces, and put $\mathscr K=a_{\mathrm{Nis}}\mathcal K$. Write $\underline{\mathbb Z}(T)$ for locally constant integer functions on $T$ and $\mathbb G_m(T)=\Gamma(T,\mathcal O_T)^\times$. The actual graded determinant induces the Euler-rank map $r:\mathscr K\to\underline{\mathbb Z}$. Define $S=\operatorname{fib}_0(r)$ as its pointed homotopy fiber in sheaves of spaces. Define $B\mathbb G_m$ to be the stack of $\mathbb G_m$-torsors, equivalently line bundles and their isomorphisms, with basepoint the trivial line. The graded-line stack has objects $(n,L)$, with $n$ locally constant and $L$ a line bundle, tensor product adding degrees and tensoring lines, and symmetry $(-1)^{nm}$ on degrees $n,m$.

The extended determinant functor on perfect complexes is canonically compatible with true/enhanced cofiber triangles and derived pullback; on bounded locally free representatives its graded line is the alternating tensor product of determinant lines, with alternating rank. It gives the actual natural map $d:S\to B\mathbb G_m$, retaining line-bundle descent morphisms. On affine K-spaces its fundamental-group map is the ordinary matrix determinant, and its object-class map sends a vector bundle to its determinant line. For a nonzero commutative local ring, in particular a Nisnevich local ring, $\pi_0K=\mathbb Z$ by rank and $\pi_1K=A^\times$ by determinant; the affine comparisons identify these same maps in the specified enhanced nonconnective model.

The sheaf $S$ is connected and $\pi_1(S)\cong\mathbb G_m$ through determinant. Pointed connected 1-types in an infinity-topos are classified fully faithfully by their sheaves of fundamental groups. The factor of the already constructed $d$ therefore gives $\tau_{\leq1}S\simeq B\mathbb G_m$. Every map $S\to B\mathbb G_m$ factors through this 1-type by the truncation universal property. On global sections, the map induced by $d$ sends a rank-zero perfect K-class to $c_1=$ the class of its determinant line; connectedness as a sheaf does not assert connectedness of its global sections. On a vector bundle the underlying determinant operation is frame-torsor pushforward along $GL_r\to\mathbb G_m$ by matrix determinant; on a perfect complex it is the extended determinant functor with its stated triangle/pullback coherence. These assertions also hold after consistently taking the further hypercomplete replacement of the space-valued sheaves.

## Facts & Assumptions
[A1] Choice and universe closure have the meanings of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). They are inherited through the enhanced perfect-category small presentations, unit-section and torsor suppliers. Universe existence is separately assumed. Stack comparison uses the stated big site; line-frame identification and global sections may be restricted to the supplied small sites.

**Given:** The sites, $\mathcal K$, $\mathscr K$, $r$, $S$ and $B\mathbb G_m$ in the Statement, with [A1].

**Goal:** Combine the imported determinant and homotopy foundations to establish the sheaf-level first-Postnikov identification of this actual map.

[F1] Knudsen–Mumford Definition 4 and Theorem 2 at source reference 0 supply the alternating graded determinant, true-triangle additivity and derived-pullback composition isomorphisms. True triangles are short exact complex diagrams in the derived diagram category; their morphisms retain diagram information. Compatibility here does not assert functoriality for arbitrary ordinary derived-triangle diagrams.

[F2] [lem-adjudicate-f6007757a8ac-actual-determinant-stack-map](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map) supplies the actual pointed determinant map into the graded-line stack, its Euler grading, enhanced cofiber coherence, and its object and automorphism maps, before Postnikov identification. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) supplies units, Picard classes and frame torsors, retaining line isomorphisms in the determinant-map supplier. Weibel IV.4.4.2 at source reference 1 gives the elementary affine normalization. A line bundle means a locally free module sheaf of rank one, and its Picard class is its isomorphism class under tensor product.

[F3] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) specifies $K(T)=\mathbb K(\operatorname{Perf}(T))$ for qcqs $T$, with coherent derived pullbacks, and [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) specifies the full stable idempotent-complete perfect category and its cofiber sequences. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) fixes the residue-field-preserving covering convention. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) fixes the qcqs conditions. Use the big qcqs site specified in [F2], its small site of qcqs étale objects, or its smooth big site of qcqs smooth objects; morphisms are all morphisms over the base and covers have sources in that category. Affine open refinements remain in these categories. Source reference 7 supplies left exact reflective space-valued sheafification and its universal unit, separately from the further left exact hypercompletion. No equivalence of the entire Q-space sheaf with a perfect K-space sheaf is needed for this low-degree argument.

[F4] [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies affine $\pi_0K$ with the vector-bundle Grothendieck group, with the alternating Euler formula. [thm-author-da44cda020c0-units-k1-classical-comparisons](item-thm-author-da44cda020c0-units-k1-classical-comparisons) identifies affine Q-space $\pi_1$ naturally with $GL(A)_{ab}$, matching actual matrix-automorphism loops. [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) transfers these loops through its canonical Waldhausen-to-connective and connective-to-nonconnective comparisons, giving the same affine fundamental group in the specified model. Here $GL(A)$ is the union of invertible finite matrices under $M\mapsto\operatorname{diag}(M,1)$, and the subscript $ab$ means quotient by the subgroup of finite products of commutators $ghg^{-1}h^{-1}$. [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant) identifies the same determinant and the unit section $u\mapsto[\mathcal O\xrightarrow{u}\mathcal O]$, whose composite with determinant is identity. Source reference 2 records local $K_0=\mathbb Z$; source reference 3 gives the local $K_1=A^\times$ isomorphism through determinant.

[F5] Source reference 6 supplies truncation, preservation of truncation by left exact colimit-preserving functors, and homotopy-sheaf functoriality and fiber exactness. Applied to source reference 7's space-valued sheafification, this says that $\pi_0\mathscr K$ is the associated sheaf of $T\mapsto\pi_0\mathcal K(T)$, and that $\pi_1(\mathscr K,0)$ is the associated sheaf of $T\mapsto\pi_1(\mathcal K(T),0)$: loops are finite limits, and $\pi_1$ is their zero-truncation. Truncation preserves homotopy sheaves through its degree, and connected means that zero-truncation is terminal. Source reference 5 supplies the pointed connected one-type classification. Truncation is internal to the sheaf infinity-topos; no assertion that it commutes with global sections is used.

[F6] Schemes have local structure rings and affine charts by [math:def-scheme](https://alphabetamath.cc/item/def-scheme). A germ is a section modulo equality on a smaller neighbourhood by [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf); finitely many germs and equalities can therefore be represented simultaneously after shrinking. [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point) and [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) give an affine neighbourhood inside any such open subset of an affine chart, as a principal localization. These inputs allow the finite matrix argument below on objects of the chosen site, without an unproved continuity theorem for K-theory.

## External input
Import the precise determinant data of source reference 0, the affine normalization of reference 1, the local group calculations of references 2–3, and the truncation/homotopy-sheaf, one-type and localization foundations of references 6, 5 and 7, with their recorded hypotheses and reading limits. The degree-zero and degree-one affine comparisons and the determinant enhancement are used through [F2]–[F4]. The proof below is a local composition and sheaf argument, not a reconstruction of these foundational inputs. Source reference 4 is contextual only: Weibel V.10.10.1 states descent for $K^B$ in its recorded finite-dimensional noetherian context. The present map uses sheafification into the graded-line stack, without importing unrestricted qcqs K-descent from that example.

## Proof
1.1 On an affine chart, [F4] represents each $\pi_0K$ class by a finite sum and difference of bundle classes. Near any point these finitely many bundles trivialize, so the class becomes its rank times $[\mathcal O]$. Thus rank-zero classes vanish locally; conversely locally constant integers are locally represented by signed free-bundle classes. These statements also treat equality of classes, by taking their difference, and prove that the associated sheaf of $\pi_0\mathcal K$ is $\underline{\mathbb Z}$ by the actual rank map. For $\pi_1$, [F4] identifies each class on an affine with the class of a finite invertible matrix $M$. The unit section makes determinant locally surjective. For a class in its kernel, the image of $M$ over the local structure ring $\mathcal O_{T,x}$ is zero in $GL(\mathcal O_{T,x})_{ab}$ by source reference 3. By the definition of abelianization in [F4], after finite stabilization it is a finite product of commutators of invertible matrices over that local ring. Represent the finitely many entries of these matrices and their inverses by sections near $x$; the inverse equations and the product equality hold after a common shrinking by [F6]. Refine that neighbourhood to an affine open by [F6]. There $M$ is a product of commutators, so its K-class is zero by [F4]. This works near every point of every affine chart. A section of an associated sheaf is locally represented by a presheaf section, so these local kernel and lifting checks establish the isomorphism of associated sheaves with $\mathbb G_m$. Zariski refinements are Nisnevich covers by [F3], and the empty object has its unique zero-rank class and unit, so it causes no exception. By [F5], these are exactly $\pi_0\mathscr K\cong\underline{\mathbb Z}$ and $\pi_1(\mathscr K,0)\cong\mathbb G_m$, with maps induced by rank and the already constructed determinant. [A1, F2, F3, F4, F5, F6, given]

2.1 The target of $r$ is discrete. The fiber exactness in [F5] and the rank isomorphism of step 1.1 give $\pi_0S=*$ and $\pi_1S\cong\pi_1(\mathscr K,0)\cong\mathbb G_m$. By [F2], the restriction of the actual graded determinant to this fiber is the pointed map $d:S\to B\mathbb G_m$, and its fundamental-group map is exactly that determinant isomorphism. The target is connected as a sheaf because every torsor is locally trivial, and is 1-truncated because it is a stack of groupoids. By [F5]'s truncation universal property, $d$ factors through $\tau_{\leq1}S$; both source and target of this factor are pointed connected 1-types. The fully faithful classification of [F5] sends this factor to the isomorphism on $\mathbb G_m$, hence makes the factor an equivalence. The same universal property gives factorization of all maps to $B\mathbb G_m$, including pointed maps when basepoints are specified. The object and automorphism maps remain those of [F1]–[F2], so global evaluation retains the determinant line with its gluing isomorphisms; taking components gives its Picard class and therefore the usual first Chern class on rank-zero perfect classes. The unit section fixes the matrix determinant normalization on loops. No equality of global vector-bundle and perfect $K_0$ is required. Further hypercompletion preserves the fiber and these homotopy sheaves by [F3]–[F5], while $B\mathbb G_m$, being truncated, is already hypercomplete; the same argument gives the asserted version there. This proves every stated identification. [A1, F1, F2, F3, F4, F5, step 1.1] ∎

## Precise source and enhancement scope
KM's true triangles are represented by actual short exact complex diagrams in its derived diagram category. The forgetful functor to ordinary derived triangles loses morphism information (pp.37–38); the p.41 footnote requires genuine diagram commutativity. The p.43 ordinary-triangle corollary has a perfect-cohomology hypothesis, and p.44 warns against an unrestricted extension. These qualifications retain the determinant/Picard operation needed here. The actual-map supplier gives the required map before its first-Postnikov identification, with true/enhanced cofiber additivity. No published KM error is alleged. Current reading of the cached KM scans and live Weibel/HTT text is restricted to the passages recorded in the source metadata; none of their long foundational proofs is claimed as a new local reconstruction.
