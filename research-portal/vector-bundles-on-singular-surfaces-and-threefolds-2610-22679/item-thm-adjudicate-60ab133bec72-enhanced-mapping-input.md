---
title: External stable mapping and derived linear target interfaces
status: published
research_item: thm-adjudicate-60ab133bec72-enhanced-mapping-input
dependency_level: 0
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017), stable categories and
        spectrum-valued lifts
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 1.1.1.1 and 1.1.1.4, pp.17–18; Definitions 1.1.1.6 and
        1.1.1.9 and Remark 1.1.1.13, pp.19–20; Theorem 1.1.2.14 and Remark
        1.1.2.15, p.27; Proposition 1.1.3.4, pp.31–32; Corollary 1.4.2.17,
        p.146; Corollary 1.4.2.23, Proposition 1.4.2.24 and Remark 1.4.2.25,
        p.147; Definition 1.4.3.1, p.150. Printed page numbers; zero-based PDF
        index is printed page minus one.
      statement: Stable infinity-categories have finite limits and colimits, with
        pushout squares exactly pullback squares; their opposites are stable and
        their homotopy categories are triangulated. A finite-limit-preserving
        space-valued functor on a stable infinity-category lifts, through
        Omega-infinity, to a finite-limit-preserving spectrum-valued functor.
        Spectrum objects have the coherent loop-tower description. The
        infinity-category of spectra is stable, so its terminal object is its
        zero object.
      hypotheses: Fix universes so mapping spaces and diagrams under discussion are
        small. The source of the lifting functor is stable, and the target
        before stabilization is spaces, which has finite limits. The theorem on
        the homotopy category uses its canonical suspension and cofiber
        triangles.
      reading_limits: Read the listed definitions and theorem/corollary statements in
        the actual PDF text, and excerpts of the proof of Proposition 1.1.3.4.
        The proofs of spectral lifting, the loop-tower comparison and
        triangulation are imported, not reconstructed. No enhancement of an
        arbitrary triangulated category is inferred.
    - title: Jacob Lurie, Higher Algebra, module limits
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Corollaries 4.2.3.2 and 4.2.3.3, printed p.527 (zero-based PDF index
        526).
      statement: For modules over a fixed algebra object, the forgetful functor
        detects equivalences, and a cone is a limit cone precisely when its
        underlying cone is a limit cone. In particular finite limits of modules
        over an Eilenberg-Mac Lane ring spectrum are computed in spectra.
      hypotheses: A monoidal infinity-category and a left-tensored infinity-category
        admitting the indicated limits. Here both ambient categories are spectra
        and the algebra is the fixed ring spectrum HR.
      reading_limits: Read the actual statements of Corollaries 4.2.3.2–3 and their
        surrounding explanation in the PDF text. The operadic proof of
        Proposition 4.2.3.1 is not reconstructed. Apply with both ambient
        categories equal to spectra, algebra HR, and finite diagrams; spectra
        admit those limits.
    - title: Jacob Lurie, Higher Algebra, discrete rings and derived module categories
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Remark 7.1.2.9, printed p.1211; Remark 7.1.2.12 and Theorem 7.1.2.13,
        p.1212; theorem proof p.1213. Zero-based PDF indices 1210–1212.
      statement: For a commutative ring R, modules over its discrete E-infinity ring
        spectrum HR are equivalent to the derived infinity-category of
        R-modules.
      hypotheses: R is a commutative ring; the derived category is the localization of
        unbounded complexes of R-modules at quasi-isomorphisms, in the fixed
        size conventions.
      reading_limits: Read the actual Remark 7.1.2.9, Remark 7.1.2.12, theorem
        statement and displayed proof in the PDF text. The model structures and
        compact-generation results invoked there are imported, not
        reconstructed. Cochain complexes are obtained by reversing the
        chain-degree convention; no motivic representability or comparison is
        imported.
    - title: Jacob Lurie, Higher Topos Theory, Yoneda and pointwise limits
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.1.3.2 and its proof, printed pp.320–321 (zero-based PDF
        indices 337–338); Proposition 5.1.2.2 and Corollary 5.1.2.3, pp.318–319
        (PDF indices 335–336), also applied to opposite categories.
      statement: The Yoneda embedding preserves existing small limits.
        Functor-category limits are computed pointwise. Consequently
        Map_D(E,-):D→S preserves existing small limits, as the composite of
        Yoneda with evaluation at E. Applying this to D=C^op identifies
        Map_C(-,E) as a left-exact functor on C^op.
      hypotheses: The categories in a Yoneda application are small in a chosen larger
        universe; the indexing diagrams are small and the indicated limits
        exist. Use only finite limits here. The passage from pointwise colimits
        to pointwise limits uses opposite categories.
      reading_limits: Read the actual propositions, Corollary 5.1.2.3 and the
        displayed proof of Proposition 5.1.3.2 in the PDF text. The
        Cartesian-fibration, Yoneda-construction and rigidification foundations
        are imported. The corepresentable limit assertion is the stated
        pointwise specialization; no foundation is proved locally.
external_input: true
---

## Prerequisites

- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [` Jacob Lurie, Higher Algebra (September 18, 2017), stable categories and spectrum-valued lifts · Definitions 1.1.1.1 and 1.1.1.4, pp.17–18; Definitions 1.1.1.6 and 1.1.1.9 and Remark 1.1.1.13, pp.19–20; Theorem 1.1.2.14 and Remark 1.1.2.15, p.27; Proposition 1.1.3.4, pp.31–32; Corollary 1.4.2.17, p.146; Corollary 1.4.2.23, Proposition 1.4.2.24 and Remark 1.4.2.25, p.147; Definition 1.4.3.1, p.150. Printed page numbers; zero-based PDF index is printed page minus one. `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Algebra, module limits · Corollaries 4.2.3.2 and 4.2.3.3, printed p.527 (zero-based PDF index 526). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Algebra, discrete rings and derived module categories · Remark 7.1.2.9, printed p.1211; Remark 7.1.2.12 and Theorem 7.1.2.13, p.1212; theorem proof p.1213. Zero-based PDF indices 1210–1212. `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory, Yoneda and pointwise limits · Proposition 5.1.3.2 and its proof, printed pp.320–321 (zero-based PDF indices 337–338); Proposition 5.1.2.2 and Corollary 5.1.2.3, pp.318–319 (PDF indices 335–336), also applied to opposite categories. `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Work in a fixed hierarchy of universes, enlarging for Yoneda applications so the source categories are small there; all mapping spaces and diagrams under discussion are small in the chosen universe. An infinity-category retains mapping spaces and coherent higher composition. A coherent diagram is a functor from its indexing infinity-category; a limit is characterized by its mapping-space universal property, and a colimit by the dual property. A stable infinity-category $\mathcal C$ has a zero object, finite limits and colimits, with pushout squares exactly pullback squares. Its opposite is stable; its homotopy category $h\mathcal C$, with morphisms $\pi_0\operatorname{Map}_{\mathcal C}$, is triangulated by suspension and cofiber triangles. A cofiber of $A\to B$ is a pushout $B\coprod_A0$; a fiber of $V\to W$ is a pullback $V\times_W0$.

For an object $E$ of an infinity-category $\mathcal D$, the functor $\operatorname{Map}_{\mathcal D}(E,-)$ preserves existing small limits. In particular $\operatorname{Map}_{\mathcal C}(-,E)$ is left-exact on $\mathcal C^{\mathrm{op}}$.

For any stable infinity-category $\mathcal D$, every left-exact functor $F:\mathcal D\to\mathcal S$ has an essentially unique left-exact lift $\widehat F:\mathcal D\to\mathrm{Sp}$ with $\Omega^\infty\widehat F\simeq F$. Here $\mathcal S$ denotes spaces, left-exact means preserving finite limits, and $\mathrm{Sp}$ denotes spectra, equivalently coherent towers $Y_n\simeq\Omega Y_{n+1}$. The category $\mathrm{Sp}$ is stable, so its terminal object is zero.

For a commutative ring $R$, let $HR$ be its Eilenberg-Mac Lane ring spectrum. The derived infinity-category $\mathcal D(R)$ of complexes of $R$-modules localized at quasi-isomorphisms is equivalent to $\operatorname{Mod}_{HR}$. The forgetful functor $\operatorname{Mod}_{HR}\to\mathrm{Sp}$ detects equivalences and computes finite limits. The notation $D(R)$ means $h\mathcal D(R)$.

## Statement references
[math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

## Source contract
**Given:** The stated universes, a stable infinity-category, and, only for the linear target, a commutative ring $R$.

[F1] The stable-category and spectrum-lifting interfaces are imported from the first source record. The conventional meaning of triangulated category is supplied by [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category).

[F2] The forgetful limit criterion and conservativity are imported from the second source record.

[F3] The derived-module comparison is imported from the third source record.

[F4] The corepresentable mapping-space limit interface is the Yoneda and pointwise-limit consequence in the fourth source record.

## External input
Import [F1], [F2], [F3] and [F4] with the hypotheses and reading limits in their source records. Infinity-categories, mapping spaces and coherent diagrams, including the mapping-space universal properties of limits and colimits, are literature inputs. No construction of these foundations is claimed here. In particular this input neither supplies an enhancement of an arbitrary triangulated category nor represents any specified cohomology theory by mapping objects.
