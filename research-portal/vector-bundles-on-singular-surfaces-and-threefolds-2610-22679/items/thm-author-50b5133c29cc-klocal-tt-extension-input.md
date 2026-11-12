---
id: thm-author-50b5133c29cc-klocal-tt-extension-input
kind: theorem
title: External extension and morphism input for perfect complexes
status: published
domain: mathematics
deps:
  - def-scheme-perfect-complexes
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-thick-subcategory
  - math:def-localization-of-a-category-at-a-class-of-morphisms
dependency_roles:
  def-scheme-perfect-complexes: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-thick-subcategory: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes
        and of Derived Categories
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf
      locator: §5, hypotheses of Theorem 5.1 p. 337; Propositions 5.2.2–5.2.4 pp.
        338–339; general-qcqs completion Lemma 5.6.2 and 5.6.3 pp. 348–350;
        Euler relations 1.5.6–1.5.7 p. 261. PDF pages 91–93, 102–104 and 15.
      statement: "For qcqs X and quasi-compact open j:U→X, restriction of ordinary
        perfect derived categories has the following properties: every morphism
        between restricted objects admits a roof on X whose denominator becomes
        invertible on U; two morphisms equal on U become equal after such a
        denominator; a perfect F on U extends exactly when its Euler class is in
        the image of restriction. In particular F⊕F[1] extends because its Euler
        class is zero."
      hypotheses: X quasi-compact and quasi-separated, U a quasi-compact open. These
        are the unrestrained-support clauses 5.2.2(a), 5.2.3(a), 5.2.4(a); set
        the additional Z of 5.1 equal to X. No ample-family, noetherian,
        regularity or resolution-property assumption survives 5.6.3.
      reading_limits: This repair inspected the source text on printed pp. 337–339
        (the hypotheses of 5.1, the statements 5.2.2–5.2.4 and the equalizer
        argument 5.2.6), p. 348 (Lemma 5.6.2 and the beginning of its proof), p.
        350 (the closeout 5.6.3), and p. 261 (1.5.6–1.5.7). The Rochester
        endpoint was unavailable in this round; the same paper was read in the
        hosted scan at
        https://www.preschema.com/teaching/2020-ss/kdescent/refs/Thomason-Trobaugh%20-%20Higher%20algebraic%20K-theory%20of%20schemes.pdf
        (PDF pages 91–93, 102, 104 and 15, one-based). The lengthy approximation
        and extension proofs in 5.3–5.6 were not independently reconstructed.
        Only the ordinary perfect-complex extension and morphism inputs and
        classical Euler relations are imported; no comparison with this
        collection’s K spectrum is asserted.
    - title: The Stacks Project, Derived Categories
      url: https://stacks.math.columbia.edu/tag/05RA
      locator: Lemma 13.6.6 and Definition 13.6.7 (05RI)
      statement: For a full thick triangulated subcategory A of B, the Verdier
        quotient B/A is localization at morphisms with cone in A; this class
        admits the usual calculus of fractions.
      hypotheses: A full triangulated subcategory; thickness ensures saturation. Apply
        to the kernel of an exact restriction functor.
      reading_limits: This repair read the statement and displayed proof of Lemma
        13.6.6 in Section 13.6 at 05RA and the quotient definition at
        https://stacks.math.columbia.edu/tag/05RI. The multiplicative-system and
        quotient construction are imported. This item contains no local proof of
        full faithfulness or essential surjectivity for restriction, and does
        not reconstruct the general localization construction.
dependency_level: 7
---

## Statement
Let $X$ be qcqs and $j:U\hookrightarrow X$ a quasi-compact open. In the ordinary sheaf-derived perfect categories:

(a) For $E,F\in D_{\mathrm{perf}}(\mathcal O_X)$ and $b:j^*E\to j^*F$, there exist a perfect $Q$ and maps $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b\,j^*c=j^*a$.

(b) If $a,b:E\to F$ have the same restriction, there are a perfect $Q$ and $c:Q\to E$ with $j^*c$ invertible and $ac=bc$.

(c) A perfect object on $U$ extends to $X$ whenever its Euler class lies in the image of restriction on the classical perfect Euler groups. In particular $F\oplus F[1]$ extends for every perfect $F$ on $U$.

The Euler group here is the classical perfect-complex Grothendieck group, with $[B]=[A]+[C]$ for triangles and $[F[1]]=-[F]$. This is a source-side extension criterion, not an identification with $\pi_0$ of the K spectrum defined in this run. Verdier quotient by a full thick triangulated subcategory is localization at maps with cone in it.


## Statement references

[[def-scheme-perfect-complexes]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-thick-subcategory]]

[[math:def-localization-of-a-category-at-a-class-of-morphisms]]

## Source contract
**Given:** qcqs $X$, quasi-compact open $U$, and ordinary derived categories of sheaf complexes with locally bounded finite locally free representatives.

Here qcqs means quasi-compact and quasi-separated; quasi-compactness of the open is quasi-compactness of the open subscheme $U$. [[math:def-quasi-compact-and-quasi-separated-scheme]]

Use the foundational choice and universe conventions inherited from [[def-scheme-perfect-complexes]]; no independent local choice argument is asserted.

The ordinary perfect category, its shifts, triangles and restriction are those of [[def-scheme-perfect-complexes]]. An extension of $F$ means a perfect $E$ on $X$ together with an isomorphism $j^*E\simeq F$ in the ordinary derived category.

The classical Euler group is the abelian group on isomorphism classes of perfect objects, modulo the displayed triangle relations; restriction acts by $[E]\mapsto[j^*E]$. The Euler relations in [F2] are imported for this source-side group.

A full thick triangulated subcategory has the inherited triangulated structure and is closed under direct summands. [[math:def-thick-subcategory]] supplies this formulation. [[math:def-localization-of-a-category-at-a-class-of-morphisms]] supplies the meaning of localization; [F2] supplies the cone criterion and the multiplicative-system assertion, rather than a local construction of them.

**Goal:** Import exactly the established extension/roof inputs needed before applying enhanced localization.

[F1] TT Propositions 5.2.2(a), 5.2.3(a), 5.2.4(a) supply (a)–(c), under the hypotheses of 5.1 with its auxiliary $Z=X$; 5.6.3 removes the temporary ample-family/noetherian hypotheses in their proof.

[F2] TT 1.5.6–1.5.7 give the Euler relations, so $[F\oplus F[1]]=0$ is in the image of any restriction map. Stacks Lemma 13.6.6 and Definition 13.6.7 give the quotient convention.

## External input
Import [F1] and [F2] with the exact references and reading limits in the metadata. Only their perfect-complex and ordinary morphism assertions are used. No TT nonconnective spectrum, model comparison, or claim of a reconstructed extension theorem is included.
